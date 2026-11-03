// api/ticket.js - Blink Support Ticket & Chat Relay Service (Zero Discord)
const BACKEND_URL = process.env.BACKEND_API_URL || Buffer.from('aHR0cHM6Ly9henVrYS0xLnRhaWwwYzM5OGEudHMubmV0OjEwMDAw', 'base64').toString('utf-8');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Extract subpath
  let subpath = req.query?.path || '';
  if (!subpath) {
    const cleanUrl = (req.url || '').split('?')[0];
    subpath = cleanUrl.replace(/^\/api\/ticket\/?/, '');
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {}
  }
  body = body || {};

  // Route 1: GET / HEAD (Status check, all tickets for admin, ticket sync)
  if (req.method === 'GET' || req.method === 'HEAD') {
    try {
      const target = `${BACKEND_URL}/ticket/${subpath}`;
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 4500);
      const backendRes = await fetch(target, { signal: ctrl.signal });
      clearTimeout(timeout);

      if (backendRes.ok) {
        const json = await backendRes.json();
        return res.status(200).json(json);
      }
    } catch (err) {
      console.warn('[Ticket API] GET fallback:', err.message);
    }
    return res.status(200).json({ success: true, tickets: [], activeTicket: null, lastResolved: null });
  }

  // Route 2: POST (ticket creation, reply, resolve, reopen, logs)
  if (req.method === 'POST') {
    let target = `${BACKEND_URL}/ticket`;
    if (subpath === 'reply') {
      target = `${BACKEND_URL}/ticket/reply`;
    } else if (subpath === 'resolve' || subpath.startsWith('resolve/')) {
      target = `${BACKEND_URL}/ticket/resolve`;
    } else if (subpath === 'reopen' || subpath.startsWith('reopen/')) {
      target = `${BACKEND_URL}/ticket/reopen`;
    } else if (subpath === 'logs') {
      target = `${BACKEND_URL}/logs`;
    }

    try {
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 6000);
      const backendRes = await fetch(target, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: ctrl.signal
      });
      clearTimeout(timeout);

      if (backendRes.ok) {
        const json = await backendRes.json();
        return res.status(200).json(json);
      }
    } catch (err) {
      console.error('[Ticket API] Backend failed:', err.message);
    }

    // Local fallback creation
    if (!subpath || subpath === 'ticket') {
      const { ticketId, subject, category, message, deviceId, plan } = body;
      const cleanId = ticketId || ('TCK-' + Math.floor(1000 + Math.random() * 9000));
      return res.status(200).json({
        success: true,
        ticket: {
          ticketId: cleanId,
          subject: subject || 'Support Request',
          category: category || 'General',
          message: message || '',
          deviceId: deviceId || 'Inconnu',
          plan: plan || 'Free',
          status: 'open',
          reply: null,
          thread: [{ sender: 'user', text: message || '', time: new Date().toISOString() }],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      });
    }

    return res.status(500).json({ success: false, error: 'Impossible de joindre le support pour le moment.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
