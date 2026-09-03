import Controller from '@ember/controller';
import { service } from '@ember/service';

const QUARTZ_SLIDES = [
  {
    src: '/images/sky-quartz/01.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 시공 (그레이)',
  },
  {
    src: '/images/sky-quartz/02.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 (레드) 및 트렌치',
  },
  {
    src: '/images/sky-quartz/03.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 (그린)',
  },
  {
    src: '/images/sky-quartz/04.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 (그레이)',
  },
  {
    src: '/images/sky-quartz/05.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 (옐로우)',
  },
  {
    src: '/images/sky-quartz/06.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 시공 현장',
  },
  { src: '/images/sky-quartz/07.jpg', alt: 'SKY Floor 컬러 쿼츠 주방 바닥' },
  {
    src: '/images/sky-quartz/08.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 (레드) 트렌치',
  },
  {
    src: '/images/sky-quartz/09.jpg',
    alt: 'SKY Floor 컬러 쿼츠 주방 바닥 시공',
  },
  { src: '/images/sky-quartz/10.jpg', alt: 'SKY Floor 컬러 쿼츠 바닥 마감' },
  {
    src: '/images/sky-quartz/11.jpg',
    alt: 'SKY Floor 컬러 쿼츠 복도 바닥 시공',
  },
  {
    src: '/images/sky-quartz/12.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 도포 시공',
  },
  { src: '/images/sky-quartz/13.jpg', alt: 'SKY Floor 컬러 쿼츠 바닥 상세' },
  {
    src: '/images/sky-quartz/14.jpg',
    alt: 'SKY Floor 컬러 쿼츠 코빙 마감 상세',
  },
  {
    src: '/images/sky-quartz/15.jpg',
    alt: 'SKY Floor 컬러 쿼츠 바닥 시공 (설비 구간)',
  },
  { src: '/images/sky-quartz/16.jpg', alt: 'SKY Floor 컬러 쿼츠 코빙 마감' },
];

const FLAKE_SLIDES = [
  {
    src: '/images/sky-flake/01.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (오렌지) 시공',
  },
  {
    src: '/images/sky-flake/02.jpg',
    alt: 'SKY Floor 컬러 플레이크 칩 바닥 상세 (레드)',
  },
  {
    src: '/images/sky-flake/03.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (레드) 시공',
  },
  { src: '/images/sky-flake/04.jpg', alt: 'SKY Floor 씰레스 바닥 (블루) 복도' },
  { src: '/images/sky-flake/05.jpg', alt: 'SKY Floor 씰레스 바닥 (코랄) 복도' },
  {
    src: '/images/sky-flake/06.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (그레이) 상세',
  },
  {
    src: '/images/sky-flake/07.jpg',
    alt: 'SKY Floor 컬러 플레이크 화장실 바닥 (옐로우)',
  },
  { src: '/images/sky-flake/08.jpg', alt: 'SKY Floor 씰레스 바닥 (그린) 시공' },
  { src: '/images/sky-flake/09.jpg', alt: 'SKY Floor 씰레스 바닥 (블루) 식당' },
  {
    src: '/images/sky-flake/10.jpg',
    alt: 'SKY Floor 컬러 플레이크 복도 바닥 (그린)',
  },
  { src: '/images/sky-flake/11.jpg', alt: 'SKY Floor 씰레스 바닥 (그린) 복도' },
  {
    src: '/images/sky-flake/12.jpg',
    alt: 'SKY Floor 씰레스 바닥 (오렌지) 복도',
  },
  {
    src: '/images/sky-flake/13.jpg',
    alt: 'SKY Floor 컬러 플레이크 화장실 바닥 (그레이)',
  },
  {
    src: '/images/sky-flake/14.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 시공 현장',
  },
  {
    src: '/images/sky-flake/15.jpg',
    alt: 'SKY Floor 컬러 플레이크 바닥 (오렌지) 마감',
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
