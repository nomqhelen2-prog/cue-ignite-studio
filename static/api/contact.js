// Vercel serverless function — forwards contact form submissions via email.
// Zero dependencies: uses the Resend HTTP API via fetch.
//
// Required env vars (set in Vercel dashboard):
//   RESEND_API_KEY   - your Resend API key
//   CONTACT_TO       - destination address (defaults to admin@oncuemarketing.info)
//   CONTACT_FROM     - verified sender (e.g. "OnCue <noreply@oncuemarketing.info>")

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const name = String(body.name || '').trim().slice(0, 120);
    const email = String(body.email || '').trim().slice(0, 255);
    const message = String(body.message || '').trim().slice(0, 2000);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const to = process.env.CONTACT_TO || 'admin@oncuemarketing.info';
    const from = process.env.CONTACT_FROM || 'OnCue Marketing <onboarding@resend.dev>';
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY not set');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const esc = (s) => s.replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const html = `
      <h2>New enquiry from ${esc(name)}</h2>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    `;

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `OnCue enquiry — ${name}`,
        html,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('Resend error:', r.status, errText);
      return res.status(502).json({ error: 'Email service failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}