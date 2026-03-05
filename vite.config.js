import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

// Local dev replica of the Cloudflare Pages Function at functions/api/calendar.js
const calendarDevMiddleware = () => ({
  name: 'calendar-dev-proxy',
  configureServer(server) {
    server.middlewares.use('/api/calendar', async (_req, res) => {
      try {
        const upstream = await fetch('https://app.calendarapp.de/index.php?api=1&l=de', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin':  'https://www.ireneberti.eu',
            'Referer': 'https://www.ireneberti.eu/',
          },
          body: 'id=0a644f04012d62106371802aa202048d',
        })
        const raw  = await upstream.text()
        const data = JSON.parse(raw)
        const html = data.html || ''

        const slotRe = /<div class="zhcal_intervall([^"]*)"[^>]*data-date="([^"]+)"[^>]*data-time="([^"]+)"/g
        const daysMap = {}
        let m
        while ((m = slotRe.exec(html)) !== null) {
          const blocked = m[1].includes('zhcal_bu')
          const [dd, mm, yyyy] = m[2].split('.')
          const isoDate = `${yyyy}-${mm}-${dd}`
          if (!daysMap[isoDate]) daysMap[isoDate] = []
          daysMap[isoDate].push({ time: m[3], blocked })
        }

        const days = Object.entries(daysMap)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([date, slots]) => ({ date, slots }))

        const json = JSON.stringify({ days })
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(json)
      } catch (err) {
        res.writeHead(502, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Upstream unreachable', detail: err.message }))
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({ compiler: 'vue3' }),
    calendarDevMiddleware(),
  ],
})
