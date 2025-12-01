import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

const AQUA_SLIDES = [
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

const SKY_FLOOR_SLIDES = [
  {
    id: 'sky-floor-mono',
    src: '/images/sky-floor-mono.jpg',
    alt: 'Sky Floor seamless monochrome finish reinforced with stainless mesh',
  },
  {
    id: 'sky-floor-flake',
    src: '/images/sky-floor-flake.jpg',
    alt: 'Sky Floor color flakes finish in a production corridor',
  },
  {
    id: 'sky-floor-cove',
    src: '/images/sky-floor-cove.jpg',
    alt: 'Coved Sky Floor transition tying wall panels and slab together',
  },
  {
    id: 'sky-floor-wash',
    src: '/images/sky-floor-wash.jpg',
    alt: 'Sky Floor performing in a wash-down area with drains',
  },
];

const SECTIONS = {
  ko: [
    {
      id: 'aqua-crete',
      eyebrow: 'AQUA-CRETE',
      title: '아쿠아크리트',
      description: '세라믹 무기불연 바닥 시스템으로 습윤 바탕에서도 24시간 내 재가동이 가능합니다.',
      galleryLabel: '아쿠아크리트 현장 갤러리',
      ctaLabel: '제품 보기',
      cards: [
        {
          id: 'rapid-install',
          title: '초속경 · 저온 시공',
          description: '하절기·동절기 모두 24시간 내 라인 재가동이 가능합니다.',
        },
        {
          id: 'breathable-system',
          title: '투습형 방수 시스템',
          description: '하부 습기는 배출하고 화학 세정제에도 견딥니다.',
        },
        {
          id: 'polished-finish',
          title: '고경도 폴리싱 마감',
          description: '미끄럼 조정, 내마모 및 위생성을 동시에 충족합니다.',
        },
      ],
      slides: AQUA_SLIDES,
      route: 'product.aqua-crete',
    },
    {
      id: 'sky-floor',
      eyebrow: 'SKY-FLOOR',
      title: '스카이플로어',
      description: 'Stainless Mesh와 Sky Resin이 결합된 위생 바닥으로 균열·열충격·화학 세정에 강합니다.',
      galleryLabel: '스카이플로어 현장 갤러리',
      ctaLabel: '제품 보기',
      cards: [
        {
          id: 'mesh-reinforced',
          title: 'Stainless Mesh 보강',
          description: '콘크리트 균열을 차단하고 구조 변형을 흡수해 긴 수명을 확보합니다.',
        },
        {
          id: 'low-voc',
          title: 'Low VOC 위생 바닥',
          description: '저취·친환경 폴리올 레진으로 HACCP, 공공·친환경 프로젝트에 적합합니다.',
        },
        {
          id: 'anti-slip-thermal',
          title: '미끄럼 · 열충격 대응',
          description: '습윤 세척, 스팀 소독, 냉동·저온 환경에서도 표면 안정성과 접착을 유지합니다.',
        },
      ],
      slides: SKY_FLOOR_SLIDES,
      route: 'product.sky-floor',
    },
  ],
  en: [
    {
      id: 'aqua-crete',
      eyebrow: 'AQUA-CRETE',
      title: 'Aqua-Crete',
      description: 'Ceramic-based inorganic flooring that reopens lines in ~24h even on damp slabs.',
      galleryLabel: 'Aqua-Crete Gallery',
      ctaLabel: 'View product',
      cards: [
        {
          id: 'rapid-install',
          title: 'Rapid & Cold Installation',
          description: 'Return to service fast, regardless of hot or cold seasons.',
        },
        {
          id: 'breathable-system',
          title: 'Breathable Waterproof System',
          description: 'Vents moisture while resisting aggressive sanitation chemicals.',
        },
        {
          id: 'polished-finish',
          title: 'High-Hardness Polished Finish',
          description: 'Dialed slip resistance with abrasion resistance and hygiene.',
        },
      ],
      slides: AQUA_SLIDES,
      route: 'product.aqua-crete',
    },
    {
      id: 'sky-floor',
      eyebrow: 'SKY-FLOOR',
      title: 'Sky Floor',
      description: 'Mesh-reinforced hygienic flooring that handles cracks, thermal shock, and wash-down cycles.',
      galleryLabel: 'Sky Floor Gallery',
      ctaLabel: 'View product',
      cards: [
        {
          id: 'mesh-reinforced',
          title: 'Mesh-Reinforced Structure',
          description: 'Stainless mesh blocks crack transmission and absorbs movement for long-term adhesion.',
        },
        {
          id: 'low-voc',
          title: 'Low-VOC & Odor Safe',
          description: 'Eco polyol resin keeps HACCP, public, and wellness projects odor-safe and compliant.',
        },
        {
          id: 'anti-slip-thermal',
          title: 'Anti-Slip & Thermal Shock Safe',
          description: 'Built for wet sanitizing, steam, and cold storage without losing footing or bond.',
        },
      ],
      slides: SKY_FLOOR_SLIDES,
      route: 'product.sky-floor',
    },
  ],
};

export default class IndexController extends Controller {
  @service locale;
  @tracked selectedSectionId = 'aqua-crete';

  get sections() {
    return SECTIONS[this.locale.current] ?? SECTIONS.ko;
  }

  get activeSection() {
    const list = this.sections ?? [];
    return list.find((section) => section.id === this.selectedSectionId) ?? list[0];
  }

  get activeSlides() {
    return this.activeSection?.slides ?? [];
  }

  isSelected = (id) => id === this.activeSection?.id;

  @action
  selectSection(id) {
    this.selectedSectionId = id;
  }
}
