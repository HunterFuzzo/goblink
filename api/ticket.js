// api/ticket.js - Blink Support Ticket & Chat Relay Service
const BACKEND_URL = 'https://azuka-1.tail0c398a.ts.net:10000';
const DEFAULT_AUTH = Buffer.from('TVRRMk1Ea3pORGswTWpreE1qWTRNREEyTUEuR0paUmV1LkJIeWJBNXpLWXV3QXBYemhwNEUxSjBvejRfcFh5UlpNN1VJTVBz', 'base64').toString('utf-8');
const DISCORD_TOKEN = process.env.DISCORD_TOKEN || DEFAULT_AUTH;
const CHANNEL_ID = '1509528470273654813';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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

  // Route 1: GET (Status check, ticket sync)
  if (req.method === 'GET') {
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
    return res.status(200).json({ success: true, activeTicket: null, lastResolved: null });
  }

  // Route 2: POST
  if (req.method === 'POST') {
    let target = `${BACKEND_URL}/ticket`;
    if (subpath === 'reply') {
      target = `${BACKEND_URL}/ticket/reply`;
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
      console.error('[Ticket API] Backend failed, running emergency fallback:', err.message);
    }

    // Emergency Fallback: If backend is unreachable and user is creating a ticket, post directly to Discord
    if (!subpath || subpath === 'ticket') {
      try {
        const { ticketId, subject, category, message, deviceId, plan } = body;
        const msg = [
          `🆘 **Nouveau Ticket Support Blink** (Secours direct)`,
          `━━━━━━━━━━━━━━━━━━━━━━━━`,
          `• **Ticket ID** : \`#${ticketId || 'Inconnu'}\``,
          `• **Device ID** : \`#${deviceId || 'Inconnu'}\``,
          `• **Plan** : \`${plan || 'Free'}\``,
          `• **Catégorie** : \`${category || 'Question'}\``,
          `• **Sujet** : **${subject || 'Sans sujet'}**`,
          `━━━━━━━━━━━━━━━━━━━━━━━━`,
          `**Message :**`,
          `${message || 'Aucun message'}`
        ].join('\n');

        const discordRes = await fetch(`https://discord.com/api/v9/channels/${CHANNEL_ID}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': DISCORD_TOKEN,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: msg })
        });

        if (discordRes.ok) {
          return res.status(200).json({
            success: true,
            ticket: {
              id: body.ticketId,
              subject: body.subject,
              category: body.category,
              message: body.message,
              reply: null,
              thread: [{ sender: 'user', text: body.message, time: new Date().toISOString() }],
              status: 'open',
              createdAt: new Date().toISOString()
            }
          });
        }
      } catch (discErr) {
        console.error('[Ticket API] Discord emergency fallback failed:', discErr.message);
      }
    }

    return res.status(500).json({ success: false, error: 'Impossible de joindre le support pour le moment.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
