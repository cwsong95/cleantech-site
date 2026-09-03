import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const FLOOR_SLIDES = [
  {
    src: '/images/floor-gallery/01.jpg',
    alt: '학교 급식실 아쿠아크리트 바닥 시공 완료',
  },
  {
    src: '/images/floor-gallery/02.jpg',
    alt: '아쿠아크리트 바탕면 프라이머 도포',
  },
  { src: '/images/floor-gallery/03.jpg', alt: '아쿠아크리트 바닥 도포 시공' },
  { src: '/images/floor-gallery/04.jpg', alt: '아쿠아크리트 미장 마감 상세' },
  {
    src: '/images/floor-gallery/06.jpg',
    alt: '조리시설 아쿠아크리트 바닥 시공 완료',
  },
  {
    src: '/images/floor-gallery/08.jpg',
    alt: '아쿠아크리트 바닥 트렌치 구간 시공',
  },
  { src: '/images/floor-gallery/09.jpg', alt: '아쿠아크리트 바닥 마감 완료' },
  { src: '/images/floor-gallery/10.jpg', alt: '복도 아쿠아크리트 바닥 시공' },
  { src: '/images/floor-gallery/11.jpg', alt: '급식실 아쿠아크리트 바닥 완료' },
  {
    src: '/images/floor-gallery/12.jpg',
    alt: '대형 조리시설 아쿠아크리트 바닥 시공',
  },
  { src: '/images/floor-gallery/13.jpg', alt: '아쿠아크리트 바닥 폴리싱 마감' },
  {
    src: '/images/floor-gallery/14.jpg',
    alt: '조리시설 아쿠아크리트 바닥 시공',
  },
  { src: '/images/floor-gallery/15.jpg', alt: '아쿠아크리트 세라믹 바닥 마감' },
  { src: '/images/floor-gallery/16.jpg', alt: '아쿠아크리트 바닥 연삭 시공' },
];

const COLD_SLIDES = [
  {
    src: '/images/cold-gallery/02.jpg',
    alt: '냉동 창고 바닥 표면 온도 측정 (-19℃)',
  },
  {
    src: '/images/cold-gallery/01.jpg',
    alt: '아쿠아크리트 바닥 표면 온도 측정 (63℃)',
  },
  {
    src: '/images/cold-gallery/03.jpg',
    alt: '냉동 창고 아쿠아크리트 바닥 시공 완료',
  },
  {
    src: '/images/cold-gallery/04.jpg',
    alt: '냉동 창고 저온 환경 아쿠아크리트 바닥',
  },
];

const TRENCH_SLIDES = [
  {
    src: '/images/trench-gallery/01.jpg',
    alt: '트렌치 주위 방수 테이핑 및 보강 시공',
  },
  {
    src: '/images/trench-gallery/04.jpg',
    alt: '트렌치 라인 아쿠아크리트 보강 완료',
  },
  {
    src: '/images/trench-gallery/05.jpg',
    alt: '트렌치 주위 아쿠아크리트 보강 상세',
  },
  {
    src: '/images/trench-gallery/08.jpg',
    alt: '트렌치 주위 아쿠아크리트 도포 보강',
  },
  {
    src: '/images/trench-gallery/09.jpg',
    alt: '트렌치 주위 보강 준비 (마스킹)',
  },
  {
    src: '/images/trench-gallery/10.jpg',
    alt: '트렌치 주위 탈락부 철거 및 정리',
  },
  { src: '/images/trench-gallery/12.jpg', alt: '트렌치 주위 바탕면 연삭 시공' },
  { src: '/images/trench-gallery/13.jpg', alt: '트렌치 주위 바탕면 표면 처리' },
  {
    src: '/images/trench-gallery/14.jpg',
    alt: '조리시설 트렌치 아쿠아크리트 보강',
  },
  {
    src: '/images/trench-gallery/15.jpg',
    alt: '바닥 트렌치 보강 구획 마스킹 작업',
  },
  {
    src: '/images/trench-gallery/16.jpg',
    alt: '트렌치 주위 아쿠아크리트 보강 도포 완료',
  },
];

const KETTLE_SLIDES = [
  {
    src: '/images/kettle-gallery/01.jpg',
    alt: '가열단지(국솥) 주변 아쿠아크리트 바닥 시공',
  },
  {
    src: '/images/kettle-gallery/02.jpg',
    alt: '가열단지 주변 바닥 및 트렌치 마감',
  },
  {
    src: '/images/kettle-gallery/03.jpg',
    alt: '가열단지 주변 아쿠아크리트 바닥 트렌치',
  },
  {
    src: '/images/kettle-gallery/04.jpg',
    alt: '가열단지 주변 아쿠아크리트 바닥 마감',
  },
  { src: '/images/kettle-gallery/05.jpg', alt: '가열단지 주변 바닥 시공 현장' },
  {
    src: '/images/kettle-gallery/06.jpg',
    alt: '가열단지(국솥) 주변 아쿠아크리트 바닥',
  },
  {
    src: '/images/kettle-gallery/07.jpg',
    alt: '가열단지 주변 아쿠아크리트 바닥',
  },
  {
    src: '/images/kettle-gallery/08.jpg',
    alt: '가열단지 주변 아쿠아크리트 바닥 시공',
  },
  {
    src: '/images/kettle-gallery/09.jpg',
    alt: '가열단지 주변 아쿠아크리트 바닥 완료',
  },
];

// 카테고리 추가: 아래 배열에 { id, ko, en, slides } 항목을 추가하면 탭이 자동 생성됩니다.
const CATEGORIES = [
  { id: 'floor', ko: '바닥공사', en: 'Floor Work', slides: FLOOR_SLIDES },
  {
    id: 'trench',
    ko: '트렌치주위보강',
    en: 'Trench Reinforcement',
    slides: TRENCH_SLIDES,
  },
  { id: 'kettle', ko: '가열단지', en: 'Steam Kettles', slides: KETTLE_SLIDES },
  { id: 'cold', ko: '냉동 창고', en: 'Cold Storage', slides: COLD_SLIDES },
];

export default class AcGalleryTabsComponent extends Component {
  @tracked _activeId = null;

  get categories() {
    return this.args.categories ?? CATEGORIES;
  }

  get activeId() {
    return this._activeId ?? this.categories[0]?.id;
  }

  get isKorean() {
    return this.args.isKorean ?? true;
  }

  get tabs() {
    const active = this.activeId;
    const ko = this.isKorean;
    return this.categories.map((c) => ({
      id: c.id,
      label: ko ? c.ko : c.en,
      count: c.slides.length,
      slides: c.slides,
      active: c.id === active,
    }));
  }

  @action
  select(id) {
    this._activeId = id;
  }
}
