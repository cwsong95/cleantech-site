import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { registerDestructor } from '@ember/destroyable';

const SLIDES = [
  {
    id: 'aquacrete-1',
    src: '/images/aquacrete-1.jpg',
    alt: 'Aqua-Crete polished flooring close-up shot',
  },
  {
    id: 'aquacrete-2',
    src: '/images/aquacrete-2.jpg',
    alt: 'Aqua-Crete flooring across a food production facility',
  },
  {
    id: 'aquacrete-3',
    src: '/images/aquacrete-3.jpg',
    alt: 'Workers installing Aqua-Crete system on site',
  },
  {
    id: 'aquacrete-4',
    src: '/images/aquacrete-4.jpg',
    alt: 'Completed Aqua-Crete floor with reflective finish',
  },
];

export default class GallerySliderComponent extends Component {
  sliderId = `gallery-swiper-${guidFor(this)}`;
  paginationId = `gallery-pagination-${guidFor(this)}`;
  nextId = `gallery-next-${guidFor(this)}`;
  prevId = `gallery-prev-${guidFor(this)}`;

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
      centeredSlides: true,
      slidesPerView: 1.08,
      spaceBetween: 36,
      speed: 700,
      autoplay: { delay: 7000, disableOnInteraction: false },
      watchSlidesProgress: true,
      pagination: {
        el: `#${this.paginationId}`,
        clickable: true,
      },
      navigation: {
        nextEl: `#${this.nextId}`,
        prevEl: `#${this.prevId}`,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.2,
          spaceBetween: 42,
        },
        1024: {
          slidesPerView: 1.32,
          spaceBetween: 54,
        },
        1280: {
          slidesPerView: 1.38,
          spaceBetween: 64,
        },
      },
    });
  }
}
