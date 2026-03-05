/**
 * Cloudflare Pages Function: /api/calendar
 *
 * Proxies the calendarapp.de request server-side so the user's
 * IP address is never exposed to the third-party service.
 * The browser only ever communicates with your own domain.
 */
export async function onRequestGet(context) {
  const UPSTREAM = 'https://app.calendarapp.de/?getCalState=95942'

  try {
    const response = await fetch(UPSTREAM, {
      headers: {
        // Forward a neutral user-agent, not the visitor's real one
        'User-Agent': 'Cloudflare-Pages-Proxy/1.0',
      },
    })

    // Clone the response and add CORS + no-store cache headers
    const data = await response.arrayBuffer()

    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
        // Never cache calendar data in shared caches
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Upstream unreachable' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
