// api/version.js - Blink Version & OTA Manifest Service
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=30');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json({
    "version": "1.2.2",
    "publishedAt": "2026-11-03T14:30:00Z",
    "notes": "Mise \u00e0 jour v1.2.2 : Hub de Support client int\u00e9gr\u00e9, connexion admin multi-comptes, quota illimit\u00e9 \u221e et fluidit\u00e9 des abonnements.",
    "bundleUrl": "https://thisisblink.vercel.app/updates/bundle-latest.zip",
    "fallbackBundleUrl": "https://thisisblink.vercel.app/updates/bundle-latest.zip"
});
};
