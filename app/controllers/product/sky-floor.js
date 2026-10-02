import Controller from '@ember/controller';
import { service } from '@ember/service';

const QUARTZ_SLIDES = [
  {
    src: '/images/sky-quartz/01.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 시공 (그레이)',
    altEn: 'SKY Floor color quartz floor installation (gray)',
  },
  {
    src: '/images/sky-quartz/02.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 (레드) 및 트렌치',
    altEn: 'SKY Floor color quartz floor (red) with drain trench',
  },
  {
    src: '/images/sky-quartz/03.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 (그린)',
    altEn: 'SKY Floor color quartz kitchen floor (green)',
  },
  {
    src: '/images/sky-quartz/04.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 (그레이)',
    altEn: 'SKY Floor color quartz kitchen floor (gray)',
  },
  {
    src: '/images/sky-quartz/05.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 (옐로우)',
    altEn: 'SKY Floor color quartz kitchen floor (yellow)',
  },
  {
    src: '/images/sky-quartz/06.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 시공 현장',
    altEn: 'SKY Floor color quartz floor installation site',
  },
  {
    src: '/images/sky-quartz/07.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥',
    altEn: 'SKY Floor color quartz kitchen floor',
  },
  {
    src: '/images/sky-quartz/08.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 (레드) 트렌치',
    altEn: 'SKY Floor color quartz floor (red), drain trench detail',
  },
  {
    src: '/images/sky-quartz/09.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 시공',
    altEn: 'SKY Floor color quartz kitchen floor installation',
  },
  {
    src: '/images/sky-quartz/10.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 마감',
    altEn: 'SKY Floor color quartz floor finish',
  },
  {
    src: '/images/sky-quartz/11.jpg',
    alt: 'SKY Floor 컬러 쿼츠 복도 바닥 시공',
    altEn: 'SKY Floor color quartz corridor floor installation',
  },
  {
    src: '/images/sky-quartz/12.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 도포 시공',
    altEn: 'SKY Floor color quartz floor being applied',
  },
  {
    src: '/images/sky-quartz/13.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 상세',
    altEn: 'SKY Floor color quartz floor detail',
  },
  {
    src: '/images/sky-quartz/14.jpg',
    alt: 'SKY Floor 컬러 쿼츠 코빙 마감 상세',
    altEn: 'SKY Floor color quartz coving detail',
  },
  {
    src: '/images/sky-quartz/15.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 시공 (설비 구간)',
    altEn: 'SKY Floor color quartz floor installation around equipment',
  },
  {
    src: '/images/sky-quartz/16.jpg',
    alt: 'SKY Floor 컬러 쿼츠 코빙 마감',
    altEn: 'SKY Floor color quartz coving finish',
  },
];

const FLAKE_SLIDES = [
  {
    src: '/images/sky-flake/01.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (오렌지) 시공',
    altEn: 'SKY Floor color flake floor (orange) installation',
  },
  {
    src: '/images/sky-flake/02.jpg',
    alt: 'SKY Floor 컬러 플레이크 칩 바닥 상세 (레드)',
    altEn: 'SKY Floor color flake chip floor detail (red)',
  },
  {
    src: '/images/sky-flake/03.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (레드) 시공',
    altEn: 'SKY Floor color flake floor (red) installation',
  },
  {
    src: '/images/sky-flake/04.jpg',
    alt: 'SKY Floor 씰레스 바닥 (블루) 복도',
    altEn: 'SKY Floor seamless floor (blue), corridor',
  },
  {
    src: '/images/sky-flake/05.jpg',
    alt: 'SKY Floor 씰레스 바닥 (코랄) 복도',
    altEn: 'SKY Floor seamless floor (coral), corridor',
  },
  {
    src: '/images/sky-flake/06.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (그레이) 상세',
    altEn: 'SKY Floor color flake floor (gray) detail',
  },
  {
    src: '/images/sky-flake/07.jpg',
    alt: 'SKY Floor 컬러 플레이크 화장실 바닥 (옐로우)',
    altEn: 'SKY Floor color flake restroom floor (yellow)',
  },
  {
    src: '/images/sky-flake/08.jpg',
    alt: 'SKY Floor 씰레스 바닥 (그린) 시공',
    altEn: 'SKY Floor seamless floor (green) installation',
  },
  {
    src: '/images/sky-flake/09.jpg',
    alt: 'SKY Floor 씰레스 바닥 (블루) 식당',
    altEn: 'SKY Floor seamless floor (blue), cafeteria',
  },
  {
    src: '/images/sky-flake/10.jpg',
    alt: 'SKY Floor 컬러 플레이크 복도 바닥 (그린)',
    altEn: 'SKY Floor color flake corridor floor (green)',
  },
  {
    src: '/images/sky-flake/11.jpg',
    alt: 'SKY Floor 씰레스 바닥 (그린) 복도',
    altEn: 'SKY Floor seamless floor (green), corridor',
  },
  {
    src: '/images/sky-flake/12.jpg',
    alt: 'SKY Floor 씰레스 바닥 (오렌지) 복도',
    altEn: 'SKY Floor seamless floor (orange), corridor',
  },
  {
    src: '/images/sky-flake/13.jpg',
    alt: 'SKY Floor 컬러 플레이크 화장실 바닥 (그레이)',
    altEn: 'SKY Floor color flake restroom floor (gray)',
  },
  {
    src: '/images/sky-flake/14.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 시공 현장',
    altEn: 'SKY Floor color flake floor installation site',
  },
  {
    src: '/images/sky-flake/15.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (오렌지) 마감',
    altEn: 'SKY Floor color flake floor (orange) finish',
  },
];

export default class ProductSkyFloorController extends Controller {
  @service locale;

  get skyGalleryCategories() {
    return [
      { id: 'quartz', ko: 'QUARTZ', en: 'QUARTZ', slides: QUARTZ_SLIDES },
      {
        id: 'flake',
        ko: 'Flake Chips',
        en: 'Flake Chips',
        slides: FLAKE_SLIDES,
      },
    ];
  }
}
