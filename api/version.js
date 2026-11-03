// api/version.js - Blink Version & OTA Manifest Service
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=30');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json({
    version: "1.2.1",
    publishedAt: "2026-11-03T11:55:00Z",
    notes: "Mise à jour v1.2.1 : Authentification par compte email & code sécurisé, liaison multi-plateformes, interface impeccable.",
    bundleUrl: "https://thisisblink.vercel.app/updates/bundle-latest.zip",
    fallbackBundleUrl: "https://thisisblink.vercel.app/updates/bundle-latest.zip"
  });
};
