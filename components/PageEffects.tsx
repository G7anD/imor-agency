'use client';

import {useEffect} from 'react';

/**
 * handoff/script.js dan port qilindi:
 *  - .reveal va .reveal-stagger classlarini IntersectionObserver bilan in qiladi
 *  - Big stat sonlarini count-up animatsiyasi bilan ko'rsatadi
 *  - Smooth scroll uchun anchor link'larga handler
 *
 * Bu komponent hech narsa render qilmaydi — faqat side-effect qo'yadi.
 */
export function PageEffects() {
  useEffect(() => {
    /* ---------- Reveal targets ---------- */
    const revealSelectors = [
      '.hero-stat-hero', '.hero-mini',
      '.ad-item', '.sv-card', '.pr-step',
      '.cs-featured', '.cs-card',
      '.pc-card', '.pc-table',
      '.fc-left > *', '.fc-right > *',
      '.kicker', '.h2', '.sv-head-right', '.pr-head-right'
    ];
    document.querySelectorAll(revealSelectors.join(',')).forEach(el => {
      el.classList.add('reveal');
    });

    document
      .querySelectorAll('.ad-grid, .sv-grid, .pr-timeline, .cs-grid, .pc-grid, .hero-mini-row, .fc-channel-row')
      .forEach(g => g.classList.add('reveal-stagger'));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      {threshold: 0.12, rootMargin: '0px 0px -8% 0px'}
    );
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

    /* ---------- Big stat counter ---------- */
    function animateCount(el: Element) {
      const node = el as HTMLElement;
      if (node.dataset.counted) return;
      node.dataset.counted = '1';
      node.classList.add('in');

      const text = (node.textContent ?? '').trim();
      const m = text.match(/^([\d.,]+)/);
      if (!m) return;
      const rawNum = m[1];
      const isFloat = /[.,]/.test(rawNum);
      const sep = rawNum.indexOf(',') > -1 ? ',' : '.';
      const target = parseFloat(rawNum.replace(',', '.'));
      const rest = text.slice(rawNum.length);

      const duration = 1400;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);

      function tick(now: number) {
        const t = Math.min(1, (now - start) / duration);
        const v = target * ease(t);
        const str = isFloat ? v.toFixed(1).replace('.', sep) : Math.round(v).toString();
        const firstText = node.firstChild;
        if (firstText && firstText.nodeType === 3) {
          firstText.nodeValue = str;
        } else {
          node.textContent = str + rest;
        }
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const countSelectors =
      '.hero-stat-big, .cs-feat-big, .hero-mini-num, .cs-head-stat-num, .cs-feat-kpi .num, .cs-card-kpi .num';
    const countTargets = document.querySelectorAll(countSelectors);
    const cio = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      {threshold: 0.4}
    );
    countTargets.forEach(el => cio.observe(el));

    /* ---------- Smooth scroll + tier pre-fill + cross-page nav ---------- */
    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;

      // Pricing CTA bosilgan bo'lsa — tarif nomini formaga uzatamiz
      const tier = a.dataset.tier;
      const price = a.dataset.price;
      if (tier) {
        const message = price ? `${tier} tarif (${price})` : `${tier} tarif`;
        sessionStorage.setItem('imor:lead-tier', message);
        window.dispatchEvent(new CustomEvent('imor:tier-selected', {detail: message}));
      }

      const id = a.getAttribute('href') ?? '';
      if (id.length < 2) return;

      const target = document.querySelector(id);
      if (target) {
        // Element shu sahifada — smooth scroll
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({top, behavior: 'smooth'});
      } else {
        // Element yo'q — bosh sahifaga + anchor bilan navigate
        e.preventDefault();
        const segs = window.location.pathname.split('/').filter(Boolean);
        const locale = segs[0] || 'uz';
        window.location.href = `/${locale}/${id}`;
      }
    };
    document.addEventListener('click', onAnchorClick);

    /* ---------- Hash bilan kelgan bo'lsa — sahifa yuklanganda scroll ---------- */
    if (window.location.hash) {
      // DOM tayyor bo'lishini kutib, smooth scroll
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const top = target.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({top, behavior: 'smooth'});
        }
      }, 100);
    }

    return () => {
      io.disconnect();
      cio.disconnect();
      document.removeEventListener('click', onAnchorClick);
    };
  }, []);

  return null;
}
