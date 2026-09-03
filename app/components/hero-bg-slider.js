import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { registerDestructor } from '@ember/destroyable';

const SLIDES = [
  {
    id: 'hero-1',
    src: '/hero/01.jpg',
    alt: 'Polished terrazzo corridor floor finished by CleanTech',
  },
  {
    id: 'hero-2',
    src: '/hero/02.jpg',
    alt: 'Glossy terrazzo restroom floor finish',
  },
  {
    id: 'hero-3',
    src: '/hero/03.jpg',
    alt: 'Commercial kitchen floor with stainless trench drains',
  },
  {
    id: 'hero-4',
    src: '/hero/04.jpg',
    alt: 'Seamless terrazzo floor with a drainage channel',
  },
  {
    id: 'hero-5',
    src: '/hero/05.jpg',
    alt: 'School cafeteria hygienic floor finish',
  },
  {
    id: 'hero-6',
    src: '/hero/06.jpg',
    alt: 'Aqua-Crete being hand-troweled on site',
  },
  {
    id: 'hero-7',
    src: '/hero/07.jpg',
    alt: 'Repainted exterior brick facade',
  },
  {
    id: 'hero-8',
    src: '/hero/08.jpg',
    alt: 'Renovated school building exterior',
  },
  {
    id: 'hero-9',
    src: '/hero/09.jpg',
    alt: 'High-gloss terrazzo floor with a mirror finish',
  },
  {
    id: 'hero-10',
    src: '/hero/10.jpg',
    alt: 'Brick-lined corridor with a polished floor finish',
  },
];

export default class HeroBgSliderComponent extends Component {
  sliderId = `hero-bg-swiper-${guidFor(this)}`;

  constructor() {
    super(...arguments);
    this._rafId = requestAnimationFrame(() => this._init());

    registerDestructor(this, () => {
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
      }

      const el = document.getElementById(this.sliderId);
      if (el?._swiper) {
        el._swiper.destroy?.(true, true);
        el._swiper = null;
      }
    });
  }

  get slides() {
    return this.args.slides ?? SLIDES;
  }

  _init() {
    const el = document.getElementById(this.sliderId);
    const Swiper = window?.Swiper;

    if (!el || !Swiper || el._swiper) {
      return;
    }

    el._swiper = new Swiper(el, {
      loop: true,
      speed: 800,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: { delay: 3500, disableOnInteraction: false },
      allowTouchMove: false,
    });
  }
}
