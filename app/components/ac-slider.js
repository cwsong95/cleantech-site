import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { registerDestructor } from '@ember/destroyable';

const SLIDES = [
  {
    src: '/images/aqua-gallery/01.jpg',
    alt: '급식 조리시설 아쿠아크리트 바닥 시공 현장',
  },
  { src: '/images/aqua-gallery/02.jpg', alt: '폴리싱 마감 아쿠아크리트 바닥' },
  {
    src: '/images/aqua-gallery/03.jpg',
    alt: '트렌치 드레인 구간 아쿠아크리트 마감',
  },
  { src: '/images/aqua-gallery/04.jpg', alt: '아쿠아크리트 바닥 트렌치 상세' },
  { src: '/images/aqua-gallery/05.jpg', alt: '복도 아쿠아크리트 바닥 시공' },
  { src: '/images/aqua-gallery/06.jpg', alt: '조리시설 아쿠아크리트 바닥' },
  { src: '/images/aqua-gallery/07.jpg', alt: '아쿠아크리트 바닥 마감 상세' },
  { src: '/images/aqua-gallery/08.jpg', alt: '아쿠아크리트 바닥 시공 현장' },
  { src: '/images/aqua-gallery/09.jpg', alt: '아쿠아크리트 도포 시공' },
  { src: '/images/aqua-gallery/10.jpg', alt: '아쿠아크리트 불연 성능 시험' },
];

/**
 * AcSlider — full-width single-image carousel matching the approved mockup.
 * Prev/next, dot indicators, counter, autoplay (pauses on hover/focus/hidden),
 * keyboard, pointer swipe; respects prefers-reduced-motion.
 * Usage: <AcSlider /> (defaults to the Aqua-Crete gallery) or
 *        <AcSlider @slides={{this.skyFloorSlides}} />.
 */
export default class AcSliderComponent extends Component {
  rootId = `ac-slider-${guidFor(this)}`;

  constructor() {
    super(...arguments);
    this._raf = requestAnimationFrame(() => this._init());
    registerDestructor(this, () => {
      if (this._raf) {
        cancelAnimationFrame(this._raf);
      }
      if (this._teardown) {
        this._teardown();
      }
    });
  }

  get slides() {
    return this.args.slides ?? SLIDES;
  }

  _init() {
    const root = document.getElementById(this.rootId);
    if (!root) {
      return;
    }
    const track = root.querySelector('[data-ac-track]');
    if (!track) {
      return;
    }
    const n = track.children.length;
    if (!n) {
      return;
    }

    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dotsWrap = root.querySelector('[data-ac-dots]');
    const curEl = root.querySelector('[data-ac-cur]');
    const totEl = root.querySelector('[data-ac-tot]');
    const frame = root.querySelector('[data-ac-frame]') || root;
    const prevBtn = root.querySelector('[data-ac-prev]');
    const nextBtn = root.querySelector('[data-ac-next]');

    let i = 0;
    let timer = null;
    const dots = [];
    if (totEl) {
      totEl.textContent = ('0' + n).slice(-2);
    }

    const render = () => {
      track.style.transform = 'translateX(-' + i * 100 + '%)';
      if (curEl) {
        curEl.textContent = ('0' + (i + 1)).slice(-2);
      }
      for (let k = 0; k < n; k++) {
        if (dots[k]) {
          dots[k].setAttribute('aria-current', k === i ? 'true' : 'false');
        }
      }
    };
    const go = (idx, user) => {
      i = (idx + n) % n;
      render();
      if (user) {
        restart();
      }
    };
    const next = () => go(i + 1);
    const prev = () => go(i - 1);
    const start = () => {
      if (!reduce && n > 1) {
        timer = setInterval(next, 5000);
      }
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const restart = () => {
      stop();
      start();
    };

    for (let d = 0; d < n; d++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', d + 1 + '번 사진');
      if (d === 0) {
        b.setAttribute('aria-current', 'true');
      }
      b.addEventListener('click', () => go(d, true));
      if (dotsWrap) {
        dotsWrap.appendChild(b);
      }
      dots.push(b);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => go(i + 1, true));
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => go(i - 1, true));
    }
    frame.addEventListener('mouseenter', stop);
    frame.addEventListener('mouseleave', start);
    frame.addEventListener('focusin', stop);
    frame.addEventListener('focusout', start);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    frame.setAttribute('tabindex', '0');
    const onKey = (e) => {
      if (e.key === 'ArrowRight') {
        next();
        restart();
      }
      if (e.key === 'ArrowLeft') {
        prev();
        restart();
      }
    };
    frame.addEventListener('keydown', onKey);
    let x0 = null;
    frame.addEventListener('pointerdown', (e) => {
      x0 = e.clientX;
      stop();
    });
    frame.addEventListener('pointerup', (e) => {
      if (x0 === null) {
        return;
      }
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 40) {
        if (dx < 0) {
          next();
        } else {
          prev();
        }
      }
      x0 = null;
      start();
    });

    render();
    start();

    this._teardown = () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }
}
