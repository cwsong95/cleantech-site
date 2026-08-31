import { modifier } from 'ember-modifier';

/**
 * aqua-reveal
 * Scroll-reveal + metric count-up for the Aqua-Crete product page.
 * Attach to the page root: <article class="aqua-crete-page" {{aqua-reveal}}>
 * - Reveals descendants with `.ac-reveal` (adds `.is-in`) as they enter view.
 * - Counts up descendants with `[data-count]` (number-only text node).
 * - Fully respects `prefers-reduced-motion` and degrades without IntersectionObserver.
 */
export default modifier(function aquaReveal(element) {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const reveals = Array.from(element.querySelectorAll('.ac-reveal'));
  const counters = Array.from(element.querySelectorAll('[data-count]'));

  let revealObserver;
  let countObserver;

  // --- scroll reveal ---
  if (reduce || typeof IntersectionObserver === 'undefined') {
    reveals.forEach((el) => el.classList.add('is-in'));
  } else {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // Safety sweep so nothing stays hidden (e.g. after an anchor jump).
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach((el) => {
        if (el.classList.contains('is-in')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.92 && rect.bottom > 0) {
          el.classList.add('is-in');
          revealObserver.unobserve(el);
        }
      });
    };
    window.addEventListener('load', sweep);
    let scrollTimer;
    const onScroll = () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(sweep, 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // stash listeners for cleanup
    element.__acSweepCleanup = () => {
      window.removeEventListener('load', sweep);
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(scrollTimer);
    };
  }

  // --- metric count-up ---
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (reduce || isNaN(target)) {
      if (!isNaN(target)) el.textContent = String(target);
      return;
    }
    let startTs = null;
    const duration = 1100;
    const tick = (ts) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 0.5 - Math.cos(Math.PI * p) / 2;
      el.textContent = String(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (typeof IntersectionObserver !== 'undefined' && !reduce) {
    countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    counters.forEach((el) => countObserver.observe(el));
  } else {
    counters.forEach(animateCount);
  }

  return () => {
    if (revealObserver) revealObserver.disconnect();
    if (countObserver) countObserver.disconnect();
    if (element.__acSweepCleanup) {
      element.__acSweepCleanup();
      delete element.__acSweepCleanup;
    }
  };
});
