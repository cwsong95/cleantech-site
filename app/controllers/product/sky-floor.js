import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ProductSkyFloorController extends Controller {
  @service locale;

  get skyFloorSlides() {
    const isKo = this.locale.isKorean;
    return [
      {
        id: 'sky-1',
        src: '/images/sky-gallery/01.jpg',
        alt: isKo
          ? '대형 시설 Sky Floor 심리스 바닥 시공'
          : 'Seamless Sky Floor in a large facility',
      },
      {
        id: 'sky-2',
        src: '/images/sky-gallery/02.jpg',
        alt: isKo
          ? '복도 Sky Floor 심리스 마감'
          : 'Seamless Sky Floor corridor',
      },
      {
        id: 'sky-3',
        src: '/images/sky-gallery/03.jpg',
        alt: isKo
          ? '주방 Sky Floor 논슬립 바닥'
          : 'Non-slip Sky Floor in a kitchen',
      },
      {
        id: 'sky-4',
        src: '/images/sky-gallery/04.jpg',
        alt: isKo ? 'Sky Floor 코빙 마감 상세' : 'Sky Floor coving detail',
      },
      {
        id: 'sky-5',
        src: '/images/sky-gallery/05.jpg',
        alt: isKo
          ? '화장실 컬러 쿼츠 Sky Floor 바닥'
          : 'Color-quartz Sky Floor restroom',
      },
      {
        id: 'sky-6',
        src: '/images/sky-gallery/06.jpg',
        alt: isKo ? '화장실 쿼츠 Sky Floor 바닥' : 'Quartz Sky Floor restroom',
      },
      {
        id: 'sky-7',
        src: '/images/sky-gallery/07.jpg',
        alt: isKo ? '학교 복도 Sky Floor 바닥' : 'School corridor Sky Floor',
      },
      {
        id: 'sky-8',
        src: '/images/sky-gallery/08.jpg',
        alt: isKo
          ? '체육시설 Sky Floor 탄성 바닥'
          : 'Resilient Sky Floor in a sports facility',
      },
    ];
  }
}
