import { modifier } from 'ember-modifier';

/**
 * aqua-reveal
 * Scroll-reveal + metric count-up for the Aqua-Crete style pages.
 * Attach to the page root: <article class="aqua-crete-page" {{aqua-reveal}}>
 * - Reveals descendants with `.ac-reveal` (adds `.is-in`) as they enter view.
 * - Counts up descendants with `[data-count]` (number-only text node).
 * - Watches the subtree with a MutationObserver so elements rendered later
 *   (e.g. after a locale toggle or tab change re-renders a block) are picked
 *   up too — otherwise they would stay at opacity 0 forever.
 * - Fully respects `prefers-reduced-motion` and degrades without
 *   IntersectionObserver / MutationObserver.
 */
export default modifier(function aquaReveal(element, positional = []) {
  // Consume positional args so the modifier also re-runs when a caller passes
  // a tracked value (e.g. {{aqua-reveal this.locale.current}}).
  positional.forEach(() => {});

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIO = typeof IntersectionObserver !== 'undefined';
  const hasMO = typeof MutationObserver !== 'undefined';

  let revealObserver = null;
  let countObserver = null;
  let mutationObserver = null;
  const reveals = new Set();
  const counters = new Set();

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

  if (hasIO && !reduce) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            revealObserver.unobserve(entry.target);
            reveals.delete(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' },
    );
    countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
            counters.delete(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
  }

  const registerReveal = (el) => {
    if (el.classList.contains('is-in')) return;
    if (!revealObserver) {
      el.classList.add('is-in');
      return;
    }
    if (reveals.has(el)) return;
    reveals.add(el);
    revealObserver.observe(el);
  };

  const registerCounter = (el) => {
    if (el.__acCounted) return;
    el.__acCounted = true;
    if (!countObserver) {
      animateCount(el);
      return;
    }
    counters.add(el);
    countObserver.observe(el);
  };

  const scan = (root) => {
    if (!root || root.nodeType !== 1) return;
    if (root.classList.contains('ac-reveal')) registerReveal(root);
    if (root.hasAttribute('data-count')) registerCounter(root);
    root.querySelectorAll('.ac-reveal').forEach(registerReveal);
    root.querySelectorAll('[data-count]').forEach(registerCounter);
  };

  // Safety sweep so nothing stays hidden (e.g. after an anchor jump or when
  // IntersectionObserver callbacks are delayed).
  const sweep = () => {
    if (!revealObserver) return;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        el.classList.add('is-in');
        revealObserver.unobserve(el);
        reveals.delete(el);
      }
    });
  };

  scan(element);

  let scrollTimer = null;
  let mutationTimer = null;
  const onScroll = () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(sweep, 120);
  };

  if (revealObserver) {
    window.addEventListener('load', sweep);
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (hasMO) {
    mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => scan(node));
      });
      // Newly rendered blocks are usually already in view — reveal them on
      // the next frame rather than waiting for a scroll.
      window.clearTimeout(mutationTimer);
      mutationTimer = window.setTimeout(sweep, 60);
    });
    mutationObserver.observe(element, { childList: true, subtree: true });
  }

  return () => {
    if (revealObserver) revealObserver.disconnect();
    if (countObserver) countObserver.disconnect();
    if (mutationObserver) mutationObserver.disconnect();
    window.removeEventListener('load', sweep);
    window.removeEventListener('scroll', onScroll);
    window.clearTimeout(scrollTimer);
    window.clearTimeout(mutationTimer);
    reveals.clear();
    counters.clear();
  };
});
