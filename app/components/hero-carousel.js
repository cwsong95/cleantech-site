import Component from '@glimmer/component';
import { service } from '@ember/service';

const SLIDES = {
  en: [
    {
      id: 'aqua',
      kicker: 'FOOD-SAFE POLISHED FLOORING',
      titleLead: 'Safer. Faster. Harder.',
      product: 'AQUA-CRETE',
      ctas: [
        { route: 'product.aqua-crete', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/aqua-crete-logo.jpg',
      imageAlt: 'Polished Aqua-Crete floor',
    },
    {
      id: 'sky-floor',
      kicker: 'INDUSTRIAL FLOORING',
      titleLead: 'Durable. Hygienic.',
      product: 'SKY FLOOR',
      ctas: [
        { route: 'product.sky-floor', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/sky-floor-logo.jpg',
      imageAlt: 'SKY Floor system',
    },
    {
      id: 'sky-flex',
      kicker: 'ELASTIC COMFORT',
      titleLead: 'Flexible strength.',
      product: 'SKY FLEX',
      ctas: [
        { route: 'product.sky-flex', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/sky-flex.svg',
      imageAlt: 'SKY Flex flooring',
    },
    {
      id: 'wood',
      kicker: 'NATURAL TOUCH',
      titleLead: 'Warm and sustainable.',
      product: 'Wood Preservative',
      ctas: [
        { route: 'product.wood', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/wood.svg',
      imageAlt: 'Cleantech wood flooring',
    },
  ],
  ko: [
    {
      id: 'aqua',
      kicker: '식품안전 폴리싱 바닥재',
      titleLead: '안전·신속·고강도.',
      product: '아쿠아크리트',
      ctas: [
        { route: 'product.aqua-crete', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/aqua-crete-logo.jpg',
      imageAlt: '아쿠아크리트 시공 바닥',
    },
    {
      id: 'sky-floor',
      kicker: '산업용 바닥재',
      titleLead: '내구성과 위생을 동시에.',
      product: '스카이 플로어',
      ctas: [
        { route: 'product.sky-floor', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/sky-floor-logo.jpg',
      imageAlt: '스카이 플로어 이미지',
    },
    {
      id: 'sky-flex',
      kicker: '탄성 바닥 솔루션',
      titleLead: '유연한 강도.',
      product: '스카이 플렉스',
      ctas: [
        { route: 'product.sky-flex', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/sky-flex.svg',
      imageAlt: '스카이 플렉스 바닥',
    },
    {
      id: 'wood',
      kicker: '자연을 지키는 첨단 기술',
      titleLead: '오래도록 아름다운.',
      product: '목재 보존재',
      ctas: [
        { route: 'product.wood', label: 'Learn more' },
        { route: 'contact', label: 'Buy' },
      ],
      image: '/images/wood.svg',
      imageAlt: '우드 바닥 이미지',
    },
  ],
};

export default class HeroCarouselComponent extends Component {
  @service locale;

  get slides() {
    return SLIDES[this.locale.current];
  }
}
