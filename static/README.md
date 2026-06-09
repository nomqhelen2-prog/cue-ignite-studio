# OnCue Marketing — Static Site

Plain HTML/CSS/JS. Zero frameworks. Deploys to Vercel static hosting.

## Structure

```
static/
├── index.html              Home
├── about.html              About Us
├── services.html           Services
├── collaborations.html     Brand Collaborations
├── contact.html            Contact (with working form)
├── styles.css              All styles
├── partials.js             Shared header + footer
├── main.js                 Nav + contact form handler
├── vercel.json             Clean-URL routing
└── api/
    └── contact.js          Serverless function: forwards form to email
```

## Deploy to Vercel

1. Push the contents of `static/` to a Git repo (or upload via `vercel` CLI).
2. In Vercel project settings, leave **Framework Preset** as **Other** and the
   **Root Directory** pointing at this folder. No build command needed.
3. Set these environment variables in Vercel:
   - `RESEND_API_KEY` — your [Resend](https://resend.com) API key
   - `CONTACT_TO` — destination inbox (e.g. `admin@oncuemarketing.info`)
   - `CONTACT_FROM` — verified Resend sender (e.g. `OnCue <noreply@oncuemarketing.info>`)

The contact form (`POST /api/contact`) validates input then sends an email via
the Resend HTTP API — no SDKs, no node_modules. Replies route back to the
sender via `reply_to`.

## Local preview

```
npx serve static
# or
python3 -m http.server --directory static 3000
```

(The `/api/contact` endpoint only runs on Vercel — use `vercel dev` to test
it locally.)