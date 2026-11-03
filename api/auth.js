// api/auth.js - Blink Centralized Auth & Anti-Sharing Session Relay
const BACKEND_URL = 'https://azuka-1.tail0c398a.ts.net:10000';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Extract action/subpath
  let subpath = req.query?.path || '';
  if (!subpath) {
    const cleanUrl = (req.url || '').split('?')[0];
    subpath = cleanUrl.replace(/^\/api\/auth\/?/, '');
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {}
  }

  const targetUrl = `${BACKEND_URL}/auth/${subpath}`;

  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 8000);

    const options = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json'
      },
      signal: ctrl.signal
    };

    if (req.method === 'POST') {
      options.body = JSON.stringify(body || {});
    }

    const backendRes = await fetch(targetUrl, options);
    clearTimeout(timeout);

    const status = backendRes.status;
    const json = await backendRes.json().catch(() => ({}));

    return res.status(status).json(json);
  } catch (err) {
    console.error('[Auth API] Proxy error:', err.message);
    return res.status(502).json({
      success: false,
      error: "Impossible de joindre le serveur d'authentification Blink. Réessayez dans un instant."
    });
  }
};
