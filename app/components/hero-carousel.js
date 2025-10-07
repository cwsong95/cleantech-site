import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { service } from '@ember/service';

const SLIDES = {
  en: [
    {
      id: 'aqua',
      kicker: 'FOOD-SAFE POLISHED FLOORING',
      titleLead: 'Safer, Faster, Harder —',
      product: 'AQUA-CRETE',
      subtitle: 'Mineral, non-combustible flooring engineered for food safety.',
      ctas: [
        { route: 'product.aqua-crete', label: 'Learn More', className: 'btn' },
        { route: 'contact', label: 'Request a Quote', className: 'btn-ghost' },
      ],
      badges: ['Rapid return-to-service', 'Wet & cold install', 'HACCP-ready'],
      image: '/images/aqua-crete-logo.jpg',
      imageAlt: 'Polished Aqua-Crete floor',
    },
    {
      id: 'sky-floor',
      kicker: 'INDUSTRIAL FLOORING',
      titleLead: 'Durable & Hygienic —',
      product: 'SKY FLOOR',
      subtitle: 'High-strength resin floor for warehouses and logistics centers.',
      ctas: [{ route: 'product.sky-floor', label: 'Learn More', className: 'btn' }],
      badges: ['Heavy-duty loading', 'Chemical-resistant'],
      image: '/images/sky-floor-logo.jpg',
      imageAlt: 'SKY Floor system',
    },
    {
      id: 'sky-flex',
      kicker: 'ELASTIC COMFORT',
      titleLead: 'Flexible Strength —',
      product: 'SKY FLEX',
      subtitle: 'Elastic flooring balancing comfort and durability.',
      ctas: [{ route: 'product.sky-flex', label: 'Learn More', className: 'btn' }],
      badges: ['Anti-fatigue', 'Resilient surface'],
      image: '/images/sky-flex.jpg',
      imageAlt: 'SKY Flex flooring',
    },
    {
      id: 'wood',
      kicker: 'NATURAL TOUCH',
      titleLead: 'Warm & Sustainable —',
      product: 'WOOD',
      subtitle: 'Eco-friendly wooden finish with natural aesthetics.',
      ctas: [{ route: 'product.wood', label: 'Learn More', className: 'btn' }],
      badges: ['Sustainable sourcing', 'Premium finish'],
      image: '/images/wood.jpg',
      imageAlt: 'Cleantech wood flooring',
    },
  ],
  ko: [
    {
      id: 'aqua',
      kicker: '식품안전 폴리싱 바닥재',
      titleLead: '안전·신속·고강도 —',
      product: '아쿠아크리트',
      subtitle: '냉·온이 반복되는 위생 구역을 위한 Cleantech 대표 폴리싱 바닥 솔루션.',
      ctas: [
        { route: 'product.aqua-crete', label: '제품 자세히 보기', className: 'btn' },
        { route: 'contact', label: '시공 상담 문의', className: 'btn-ghost' },
      ],
      badges: ['24시간 내 재가동', '습윤·저온 시공', 'HACCP 대응'],
      image: '/images/aqua-crete-logo.jpg',
      imageAlt: '아쿠아크리트 시공 바닥',
    },
    {
      id: 'sky-floor',
      kicker: '산업용 바닥재',
      titleLead: '내구성과 위생을 동시에 —',
      product: '스카이 플로어',
      subtitle: '물류·창고를 위한 고강도 에폭시 바닥 시스템.',
      ctas: [{ route: 'product.sky-floor', label: '제품 자세히 보기', className: 'btn' }],
      badges: ['중량 하중 대응', '내약품성'],
      image: '/images/sky-floor-logo.jpg',
      imageAlt: '스카이 플로어 이미지',
    },
    {
      id: 'sky-flex',
      kicker: '탄성 바닥 솔루션',
      titleLead: '유연한 강도 —',
      product: '스카이 플렉스',
      subtitle: '장시간 서는 작업자를 위한 탄성 & 내구성 균형형 바닥.',
      ctas: [{ route: 'product.sky-flex', label: '제품 자세히 보기', className: 'btn' }],
      badges: ['피로도 감소', '충격 흡수'],
      image: '/images/sky-flex.jpg',
      imageAlt: '스카이 플렉스 바닥',
    },
    {
      id: 'wood',
      kicker: '자연 질감 마감재',
      titleLead: '따뜻하고 지속가능한 —',
      product: '우드',
      subtitle: '친환경 소재와 천연 질감을 살린 프리미엄 목질 바닥.',
      ctas: [{ route: 'product.wood', label: '제품 자세히 보기', className: 'btn' }],
      badges: ['친환경 인증', '고급스러운 마감'],
      image: '/images/wood.jpg',
      imageAlt: '우드 바닥 이미지',
    },
  ],
};

export default class HeroCarouselComponent extends Component {
  @service locale;

  constructor() {
    super(...arguments);
    scheduleOnce('afterRender', this, this._init);
  }

  get slides() {
    return SLIDES[this.locale.current];
  }

  _init() {
    const el = document.querySelector('.hero-swiper');
    const Swiper = window.Swiper;
    if (!el || !Swiper || el._swiper) return;

    el._swiper = new Swiper(el, {
      loop: true,
      speed: 700,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
    });
  }
}
