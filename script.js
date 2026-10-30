// ── Storage (may throw in private mode) ──
function readStored(key) {
    try { return localStorage.getItem(key); } catch { return null; }
}

function store(key, value) {
    try { localStorage.setItem(key, value); } catch { /* private mode */ }
}

// ── i18n ──
const LANGS = Object.keys(window.I18N);
const langToggle = document.getElementById('lang-toggle');

// ?lang= (shared links, hreflang) > saved choice > browser language > English
function pickLanguage() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;

    const saved = readStored('lang');
    if (LANGS.includes(saved)) return saved;

    const browser = navigator.languages || [navigator.language];
    return browser.some(l => l && l.toLowerCase().startsWith('pt')) ? 'pt-BR' : 'en';
}

function setMeta(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
}

function applyLanguage(lang) {
    const t = window.I18N[lang];

    document.documentElement.lang = lang;
    document.title = t['meta.title'];
    setMeta('meta[name="description"]', t['meta.description']);
    setMeta('meta[property="og:title"]', t['meta.title']);
    setMeta('meta[property="og:description"]', t['meta.description']);
    setMeta('meta[property="og:locale"]', t['meta.ogLocale']);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t[el.dataset.i18n];
    });

    // data-i18n-attr="aria-label:key" or several pairs: "href:key1;download:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        el.dataset.i18nAttr.split(';').forEach(pair => {
            const [attr, key] = pair.split(':');
            el.setAttribute(attr, t[key]);
        });
    });

    langToggle.dataset.active = lang;
}

// Two languages, so a click anywhere on the pill switches to the other one
langToggle.addEventListener('click', () => {
    const lang = document.documentElement.lang === 'en' ? 'pt-BR' : 'en';
    store('lang', lang);
    applyLanguage(lang);

    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
});

applyLanguage(pickLanguage());

// ── Theme (light by default; the saved choice is applied in <head>) ──
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));

themeToggle.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    themeToggle.setAttribute('aria-pressed', String(dark));
    store('theme', dark ? 'dark' : 'light');
});

// ── Reveal on scroll (CSS only hides .reveal when motion is allowed) ──
const revealed = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    revealed.forEach(el => observer.observe(el));
} else {
    revealed.forEach(el => el.classList.add('is-visible'));
}

// ── Projects carousel ──
const track = document.getElementById('projects-track');
const carouselBtns = document.querySelectorAll('.carousel-btn');

// aria-disabled (not disabled) so a focused arrow keeps focus at either end
function updateCarousel() {
    const atStart = track.scrollLeft <= 1;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    carouselBtns[0].setAttribute('aria-disabled', String(atStart));
    carouselBtns[1].setAttribute('aria-disabled', String(atEnd));
}

// Scroll one view's worth; scroll-snap lines the cards up and CSS handles smoothness
carouselBtns.forEach(btn => btn.addEventListener('click', () => {
    track.scrollBy({ left: Number(btn.dataset.dir) * track.clientWidth });
}));

track.addEventListener('scroll', updateCarousel, { passive: true });
window.addEventListener('resize', updateCarousel);
updateCarousel();

// ── Mobile nav ──
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

function setMenu(open) {
    navToggle.setAttribute('aria-expanded', String(open));
    navMenu.classList.toggle('open', open);
}

// The nav sits before the toggle in the DOM (so desktop tab order matches the
// visual order), so move focus into the menu when it opens on mobile.
navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
    if (open) navMenu.querySelector('a').focus();
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        setMenu(false);
        navToggle.focus();
    }
});
