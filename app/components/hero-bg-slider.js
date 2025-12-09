import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { registerDestructor } from '@ember/destroyable';

const SLIDES = [
  {
    id: 'main-2016',
    src: '/main/20160815_084115.jpg',
    alt: 'On-site floor installation with polishing in progress',
  },
  {
    id: 'main-2017',
    src: '/main/20170122_200803.jpg',
    alt: 'Completed reflective floor finish in a production area',
  },
  {
    id: 'main-2019',
    src: '/main/20190130_094517.jpg',
    alt: 'Installation team preparing a floor for coating',
  },
  {
    id: 'main-2020',
    src: '/main/20200826_170253.jpg',
    alt: 'Coving detail where wall and floor meet for easier cleaning',
  },
  {
    id: 'main-2022',
    src: '/main/20220809_080710.jpg',
    alt: 'Finished floor surface showing gloss and slip-control texture',
  },
  {
    id: 'main-2025',
    src: '/main/KakaoTalk_20250423_165637166_14.jpg',
    alt: 'Drainage trench reinforcement with Aqua-Crete system',
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
      autoplay: { delay: 3000, disableOnInteraction: false },
      allowTouchMove: false,
    });
  }
}
