// api/version.js - Blink Version & OTA Manifest Service
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=30');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json({
    "version": "1.2.3",
    "publishedAt": "2026-11-03T15:55:00Z",
    "notes": "Mise à jour v1.2.3 : Interface Support Hub impeccable (alignements, boutons pilules, confort typographique et synchronisation fluide).",
    "bundleUrl": "https://thisisblink.vercel.app/updates/bundle-latest.zip",
    "fallbackBundleUrl": "https://thisisblink.vercel.app/updates/bundle-latest.zip"
});
};
