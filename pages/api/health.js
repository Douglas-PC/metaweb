export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }
  return res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: Date.now() });
}
