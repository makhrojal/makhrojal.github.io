(function () {
  'use strict';

  // 1. DARK MODE TOGGLE
  const html = document.documentElement;
  const toggleBtn = document.querySelector('[data-theme-toggle]');

  function getInitialTheme() {
    try {
      const stored = sessionStorage.getItem('theme');
      if (stored) return stored;
    } catch(e) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let currentTheme = getInitialTheme();
  html.setAttribute('data-theme', currentTheme);

  if (toggleBtn) {
    updateToggleLabel(currentTheme);
    toggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      try { sessionStorage.setItem('theme', currentTheme); } catch(e) {}
      updateToggleLabel(currentTheme);
    });
  }

  function updateToggleLabel(theme) {
    if (!toggleBtn) return;
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // 2. MOBILE NAV TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);
    });
  }

  // 3. SCROLL FADE-IN ANIMATIONS
  const animatable = document.querySelectorAll('[data-animate]');
  if (animatable.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    animatable.forEach((el, i) => {
      const siblings = el.parentElement
        ? Array.from(el.parentElement.querySelectorAll('[data-animate]'))
        : [];
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = `${idx * 80}ms`;
      observer.observe(el);
    });
  } else {
    animatable.forEach(el => el.classList.add('is-visible'));
  }

  // 4. ACTIVE NAV LINK
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath === href) link.classList.add('nav-link--active');
  });

})();
