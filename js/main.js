/* ===== MAIN.JS ===== */
(function () {
  'use strict';

  // ── Initialize i18n ───────────────────────────────────────────────────────
  if (typeof window.initI18n === 'function') window.initI18n();

  // ── Header scroll effect ──────────────────────────────────────────────────
  const header = document.getElementById('header');
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // ── Mobile menu ───────────────────────────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  // ── Hero slider ───────────────────────────────────────────────────────────
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  let currentSlide = 0;
  let sliderTimer;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }

  function startTimer() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 5000);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
      startTimer();
    });
  });

  startTimer();

  // ── Counter animation ─────────────────────────────────────────────────────
  let countersStarted = false;
  function animateCounters() {
    if (countersStarted) return;
    const nums = document.querySelectorAll('.stat-num');
    if (!nums.length) return;
    const heroStats = document.querySelector('.hero__stats');
    if (!heroStats) return;
    const rect = heroStats.getBoundingClientRect();
    if (rect.top > window.innerHeight) return;

    countersStarted = true;
    nums.forEach(function (el) {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  setTimeout(animateCounters, 800); // run on load if already visible

  // ── Product tab filter ────────────────────────────────────────────────────
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.tab;
      productCards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInCard .4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── Scroll reveal ─────────────────────────────────────────────────────────
  function addRevealClasses() {
    const targets = [
      '.about__content > *',
      '.about__visual',
      '.product-card',
      '.adv-card',
      '.process-step',
      '.case-card',
      '.news-card',
      '.contact-item',
    ];
    targets.forEach(function (selector, idx) {
      document.querySelectorAll(selector).forEach(function (el, i) {
        el.classList.add('reveal');
        if (i < 5) el.classList.add('reveal-delay-' + (i + 1));
      });
    });
  }
  addRevealClasses();

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Back to top ───────────────────────────────────────────────────────────
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Smooth scroll for anchor links ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Contact form ──────────────────────────────────────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.disabled = true;
      const lang = window.currentLang || 'zh';
      btn.textContent = lang === 'en' ? 'Submitting...' : '提交中...';

      setTimeout(function () {
        const t = window.T && window.T[lang] ? window.T[lang] : {};
        const title = t['form.success.title'] || '提交成功！';
        const desc  = t['form.success.desc']  || '感谢您的咨询，我们的销售团队将在24小时内联系您。';
        form.innerHTML = [
          '<div class="form-success">',
          '  <div class="form-success__icon">',
          '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">',
          '      <polyline points="20 6 9 17 4 12"/>',
          '    </svg>',
          '  </div>',
          '  <h3>' + title + '</h3>',
          '  <p>' + desc + '</p>',
          '</div>',
        ].join('');
      }, 1000);
    });
  }

  // ── Active nav link on scroll ─────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + header.offsetHeight + 80;
    let current = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) current = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ── Fade in card animation (CSS keyframe injection) ───────────────────────
  const style = document.createElement('style');
  style.textContent = '@keyframes fadeInCard { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }';
  document.head.appendChild(style);
})();
