import { modifier } from 'ember-modifier';

/**
 * company-rail
 * Left-edge timeline scrubber for the /company page.
 * - Click a tick → smooth-scroll to that year's #history-<year> section.
 * - Scroll spy highlights the tick for the year currently in view.
 * Respects prefers-reduced-motion. Attach to the <nav class="company-rail">.
 */
export default modifier(function companyRail(element) {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ticks = Array.from(element.querySelectorAll('.company-rail__tick'));

  const setActive = (year) => {
    ticks.forEach((t) =>
      t.classList.toggle('is-active', t.getAttribute('data-year') === year),
    );
  };

  const onClick = (event) => {
    const tick = event.target.closest('.company-rail__tick');
    if (!tick) {
      return;
    }
    const year = tick.getAttribute('data-year');
    const target = document.getElementById('history-' + year);
    if (!target) {
      return;
    }
    event.preventDefault();
    setActive(year);
    target.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    });
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#history-' + year);
    }
  };
  element.addEventListener('click', onClick);

  const sections = Array.from(document.querySelectorAll('[id^="history-"]'));
  let observer;
  if (typeof IntersectionObserver !== 'undefined' && sections.length) {
    const visible = new Set();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        });
        let top = null;
        let topY = Infinity;
        visible.forEach((section) => {
          const y = section.getBoundingClientRect().top;
          if (y < topY) {
            topY = y;
            top = section;
          }
        });
        if (top) {
          setActive(top.id.replace('history-', ''));
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
  }

  return () => {
    element.removeEventListener('click', onClick);
    if (observer) {
      observer.disconnect();
    }
  };
});
