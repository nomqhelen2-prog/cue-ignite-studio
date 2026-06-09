// Mobile menu toggle
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-menu-toggle]');
  if (btn) {
    document.querySelector('.nav')?.classList.toggle('open');
  }
});

// Highlight active nav link
(() => {
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav a').forEach((a) => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();

// Contact form -> /api/contact
const form = document.getElementById('contact-form');
if (form) {
  const msg = document.getElementById('form-msg');
  const btn = form.querySelector('button[type=submit]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = '';
    msg.className = 'form-msg';
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.message) {
      msg.textContent = 'Please complete every field.';
      msg.classList.add('err');
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Failed to send');
      msg.textContent = "Thanks — we'll be in touch shortly.";
      msg.classList.add('ok');
      form.reset();
    } catch (err) {
      msg.textContent = err.message || 'Could not send. Please try again.';
      msg.classList.add('err');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Submit Enquiry';
    }
  });
}