i// nav.js — shared navigation and footer for all pages
(function() {

  // ── NAV ────────────────────────────────────────────────
  const pages = [
    { href: 'index.html',             label: '🏠 Home' },
    { href: 'uk-store.html',          label: '🇬🇧 UK Store' },
    { href: 'us-store.html',          label: '🇺🇸 US Store' },
    { href: 'home-organisation.html', label: '🏡 Home' },
    { href: 'luxury-beauty.html',     label: '✨ Beauty' },
    { href: 'baby-essentials.html',   label: '👶 Baby' },
    { href: 'gift-guides.html',       label: '🎁 Gifts' },
  ];

  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('') + `<a href="https://pinterest.com/PickedAndPinned" target="_blank" class="nav-cta">📌 Pinterest</a>`;

  const header = `
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="site-logo">
        <div class="logo-mark">P&amp;P</div>
        <span class="logo-text">Picked<span>&amp;Pinned</span></span>
      </a>
      <nav class="site-nav" id="siteNav">${navLinks}</nav>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  document.getElementById('site-header').innerHTML = header;

  // Mobile menu toggle
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('siteNav').classList.toggle('open');
  });

  // ── FOOTER ─────────────────────────────────────────────
  const footer = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="site-logo">
          <div class="logo-mark">P&amp;P</div>
          <span class="logo-text" style="color:white;">Picked<span style="color:var(--gold);">&amp;Pinned</span></span>
        </a>
        <p>Curated Amazon home, beauty &amp; baby finds that genuinely work. Updated weekly. Shop with confidence. 💷 💵</p>
      </div>
      <div class="footer-col">
        <h5>Shop</h5>
        <a href="home-organisation.html">🏡 Home Org</a>
        <a href="luxury-beauty.html">✨ Luxury Beauty</a>
        <a href="baby-essentials.html">👶 Baby</a>
        <a href="gift-guides.html">🎁 Gift Guides</a>
      </div>
      <div class="footer-col">
        <h5>Top Picks</h5>
        <a href="ledfacemask.html">💡 LED Face Mask</a>
        <a href="gua-sha.html">🌸 Gua Sha Set</a>
        <a href="silk-pillowcase.html">😴 Silk Pillowcase</a>
        <a href="fridge-bins.html">🧊 Fridge Bins</a>
      </div>
      <div class="footer-col">
        <h5>Stores</h5>
        <a href="uk-store.html">🇬🇧 UK Store 💷</a>
        <a href="us-store.html">🇺🇸 US Store 💵</a>
      </div>
      <div class="footer-col">
        <h5>Follow</h5>
        <a href="https://pinterest.com/PickedAndPinned" target="_blank">📌 Pinterest</a>
        <a href="https://www.amazon.co.uk" target="_blank">🛍 Amazon UK</a>
        <a href="https://www.amazon.com" target="_blank">🛍 Amazon US</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 PickedAndPinned. All rights reserved.</p>
      <p style="font-size:0.75rem; color:rgba(255,255,255,0.4);">
        <strong style="color:rgba(255,255,255,0.6);">#ad | Affiliate Disclosure:</strong>
        As an Amazon Associate I earn from qualifying purchases at no extra cost to you.
      </p>
      <a href="https://pinterest.com/PickedAndPinned" target="_blank" class="pinterest-link">
        📌 @PickedAndPinned
      </a>
    </div>
  </footer>`;

  document.getElementById('site-footer').innerHTML = footer;

})();
