import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ProductSkyFloorController extends Controller {
  @service locale;

  get skyFloorSlides() {
    const isKo = this.locale.isKorean;
    return [
      {
        id: 'sky-quartz',
        src: '/images/skyfloor-quartz.jpg',
        alt: isKo
          ? '스카이 플로어 쿼츠 마감 시공 사진'
          : 'Sky Floor color quartz finish',
      },
      {
        id: 'sky-flakes',
        src: '/images/skyfloor-flakes.jpg',
        alt: isKo
          ? '스카이 플로어 플레이크 마감 시공 사진'
          : 'Sky Floor color flakes finish',
      },
      {
        id: 'sky-seamless',
        src: '/images/skyfloor-seamless.jpg',
        alt: isKo
          ? '스카이 플로어 단색 시공 사진'
          : 'Sky Floor seamless finish',
      },
      {
        id: 'sky-aquacrete',
        src: '/images/skyfloor-aquacrete.jpg',
        alt: isKo
          ? '스카이 플로어 아쿠아크리트 보강 시공'
          : 'Sky Floor aquacrete reinforcement',
      },
      {
        id: 'sky-coving',
        src: '/images/skyfloor-coving.jpg',
        alt: isKo ? '스카이 플로어 코빙 시공 사진' : 'Sky Floor coving detail',
      },
      {
        id: 'sky-trench',
        src: '/images/skyfloor-trench.jpg',
        alt: isKo
          ? '스카이 플로어 트렌치 보강 시공 사진'
          : 'Sky Floor trench reinforcement',
      },
    ];
  }
}
