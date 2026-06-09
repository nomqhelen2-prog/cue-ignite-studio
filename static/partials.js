// Renders shared header + footer. Include before main.js.
const STAR = `<svg class="star" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><polygon points="50,0 56,38 94,28 64,50 94,72 56,62 50,100 44,62 6,72 36,50 6,28 44,38"/></svg>`;

document.write(`
<header class="header">
  <div class="container header-inner">
    <a href="/" class="brand">${STAR}<span>ONCUE MARKETING</span></a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/about.html">About</a>
      <a href="/services.html">Services</a>
      <a href="/collaborations.html">Collaborations</a>
      <a href="/contact.html">Contact</a>
    </nav>
    <a href="/contact.html" class="cta">Start a project</a>
    <button class="menu-btn cta" data-menu-toggle aria-label="Menu">Menu</button>
  </div>
</header>
`);

window.addEventListener('DOMContentLoaded', () => {
  const f = document.createElement('footer');
  f.className = 'footer';
  f.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="margin-bottom:16px">${STAR}<span>ONCUE</span></div>
          <p>Experiential & promotional marketing agency. Turning brand goals into shared wins.</p>
        </div>
        <div>
          <h4>Navigate</h4>
          <p><a href="/">Home</a></p>
          <p><a href="/about.html">About</a></p>
          <p><a href="/services.html">Services</a></p>
          <p><a href="/collaborations.html">Collaborations</a></p>
          <p><a href="/contact.html">Contact</a></p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="mailto:admin@oncuemarketing.info">admin@oncuemarketing.info</a></p>
          <p><a href="https://wa.me/27601064358">+27 60 106 4358</a></p>
          <p><a href="https://instagram.com/oncuemarketing">@oncuemarketing</a></p>
        </div>
        <div>
          <h4>Reach</h4>
          <p>Johannesburg</p>
          <p>Cape Town</p>
          <p>Durban</p>
        </div>
      </div>
      <div class="copy">© ${new Date().getFullYear()} OnCue Marketing. All rights reserved.</div>
    </div>`;
  document.body.appendChild(f);
});