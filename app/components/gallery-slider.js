import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { guidFor } from '@ember/object/internals';

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
    scheduleOnce('afterRender', this, this._init);
  }

  get slides() {
    return SLIDES;
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
      speed: 600,
      autoplay: { delay: 4500, disableOnInteraction: false },
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
