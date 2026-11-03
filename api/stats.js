// api/stats.js - Blink Website Analytics Relay Service (Zero Discord)
const BACKEND_URL = process.env.BACKEND_API_URL || Buffer.from('aHR0cHM6Ly9henVrYS0xLnRhaWwwYzM5OGEudHMubmV0OjEwMDAw', 'base64').toString('utf-8');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }
    body = body || {};

    const forwarded = req.headers['x-forwarded-for'];
    const ip = (forwarded ? forwarded.split(',')[0].trim() : null) || 
               req.headers['x-real-ip'] || 
               req.socket?.remoteAddress || 
               'Inconnue';

    const country = req.headers['x-vercel-ip-country'] || '';
    const city = req.headers['x-vercel-ip-city'] ? decodeURIComponent(req.headers['x-vercel-ip-city']) : '';

    const payload = {
      ...body,
      ip,
      country,
      city,
      timestamp: new Date().toISOString()
    };

    // Forward to backend
    try {
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 3500);
      await fetch(`${BACKEND_URL}/stats`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal
      });
      clearTimeout(timeout);
    } catch (_) {
      // Backend silent fallback
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(200).json({ success: true });
  }
};
