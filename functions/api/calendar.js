/**
 * Cloudflare Pages Function: /api/calendar
 *
 * POSTs to the calendarapp.de API server-side so the visitor's IP
 * is never exposed to the third-party service. Parses the HTML
 * response and returns clean JSON to the frontend.
 *
 * Response shape:
 * {
 *   days: [
 *     {
 *       date: "YYYY-MM-DD",
 *       slots: [ { time: "HH:MM", blocked: true|false }, ... ]
 *     }, ...
 *   ]
 * }
 */
export async function onRequestGet(context) {
  const UPSTREAM   = 'https://app.calendarapp.de/index.php?api=1&l=de'
  const CALENDAR_ID = '0a644f04012d62106371802aa202048d'

  try {
    const response = await fetch(UPSTREAM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin':        'https://www.ireneberti.eu',
        'Referer':       'https://www.ireneberti.eu/',
        'User-Agent':    'Cloudflare-Pages-Proxy/1.0',
      },
      body: `id=${CALENDAR_ID}`,
    })

    if (!response.ok) {
      throw new Error(`Upstream returned ${response.status}`)
    }

    // Response is ISO-8859-1 encoded JSON containing an `html` field
    const raw  = await response.text()
    const data = JSON.parse(raw)
    const html = data.html || ''

    // Parse every slot div: class contains "zhcal_bu" → blocked
    // data-date="DD.MM.YYYY"  data-time="HH:MM"
    const slotRe = /<div class="zhcal_intervall([^"]*)"[^>]*data-date="([^"]+)"[^>]*data-time="([^"]+)"/g
    const daysMap = {}
    let m
    while ((m = slotRe.exec(html)) !== null) {
      const classes = m[1]
      const rawDate = m[2]   // DD.MM.YYYY
      const time    = m[3]   // HH:MM
      const blocked = classes.includes('zhcal_bu')

      // Convert DD.MM.YYYY → YYYY-MM-DD
      const [dd, mm, yyyy] = rawDate.split('.')
      const isoDate = `${yyyy}-${mm}-${dd}`

      if (!daysMap[isoDate]) daysMap[isoDate] = []
      daysMap[isoDate].push({ time, blocked })
    }

    // Sort dates and produce the final array
    const days = Object.entries(daysMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, slots]) => ({ date, slots }))

    return new Response(JSON.stringify({ days }), {
      status: 200,
      headers: {
        'Content-Type':                'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control':               'no-store',
      },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Upstream unreachable', detail: err.message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
