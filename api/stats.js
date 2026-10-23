// api/stats.js - Blink Website Analytics & Discord Notification Service
const DEFAULT_AUTH = Buffer.from('TVRRMk1Ea3pORFEwTWpreU5qZ3dNRFl3LkdKWlJldS5CSHliQTV6S1l1d0FwWHpocDRFMUowb3o0X3BYeVJaTTdVSU1Qcw==', 'base64').toString('utf-8');
const DISCORD_TOKEN = process.env.DISCORD_TOKEN || DEFAULT_AUTH;
const STATS_CHANNEL_ID = '1563078470488297572';

module.exports = async (req, res) => {
  // CORS Headers
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
      try {
        body = JSON.parse(body);
      } catch (e) {}
    }
    body = body || {};

    const { type, clientId, platform, browser, file, referrer, screen } = body;

    // Real client IP from proxy/Vercel headers
    const forwarded = req.headers['x-forwarded-for'];
    const ip = (forwarded ? forwarded.split(',')[0].trim() : null) || 
               req.headers['x-real-ip'] || 
               req.socket?.remoteAddress || 
               'Inconnue';

    // Geo location from Vercel edge headers
    const country = req.headers['x-vercel-ip-country'] || '';
    const city = req.headers['x-vercel-ip-city'] ? decodeURIComponent(req.headers['x-vercel-ip-city']) : '';
    const locationStr = [city, country].filter(Boolean).join(', ') || 'Localisation non transmise';

    const now = new Date();
    const timeStr = now.toLocaleDateString('fr-FR', {
      timeZone: 'Europe/Paris',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    let messageContent = '';

    if (type === 'download') {
      const emoji = (file && file.includes('.dmg')) ? '🍏' : 
                    (file && file.includes('.exe')) ? '🪟' : 
                    (file && file.includes('.ipa')) ? '📱' : 
                    (file && file.includes('.apk')) ? '🤖' : '📦';
      messageContent = [
        `📥 **Nouveau Téléchargement Blink !**`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        `• **Fichier** : ${emoji} \`${file || 'Blink.dmg'}\` (${platform || 'Inconnu'})`,
        `• **ID PC / Appareil** : \`${clientId || 'Inconnu'}\``,
        `• **Adresse IP** : \`${ip}\``,
        `• **Localisation** : 📍 ${locationStr}`,
        `• **Navigateur** : ${browser || 'Inconnu'}`,
        `• **Date & Heure** : 🕒 ${timeStr}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`
      ].join('\n');
    } else {
      // Event: visit
      messageContent = [
        `🌐 **Nouvelle Visite sur le Site Blink**`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        `• **ID PC / Appareil** : \`${clientId || 'Inconnu'}\``,
        `• **Adresse IP** : \`${ip}\``,
        `• **Localisation** : 📍 ${locationStr}`,
        `• **Système** : 💻 ${platform || 'Inconnu'}`,
        `• **Navigateur** : ${browser || 'Inconnu'} ${screen ? `(${screen})` : ''}`,
        `• **Provenance** : ${referrer && referrer !== 'Direct' ? referrer : 'Accès direct'}`,
        `• **Date & Heure** : 🕒 ${timeStr}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`
      ].join('\n');
    }

    // Direct post to Discord channel via Discord API
    const discordRes = await fetch(`https://discord.com/api/v9/channels/${STATS_CHANNEL_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': DISCORD_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: messageContent })
    });

    if (!discordRes.ok) {
      const errText = await discordRes.text();
      console.error('[Stats API] Erreur envoi Discord:', errText);
      return res.status(500).json({ success: false, error: errText });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Stats API] Exception:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};
