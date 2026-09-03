import Controller from '@ember/controller';
import { service } from '@ember/service';

const SKY_AU_GALLERY = [
  {
    src: '/images/sky-au-gallery/01.jpg',
    alt: 'SKY-AU 폴리아스파틱 폴리우레아 바닥 시공 (테라조 플레이크)',
  },
  {
    src: '/images/sky-au-gallery/02.jpg',
    alt: 'SKY-AU 폴리아스파틱 복도 바닥 (컬러 코팅)',
  },
  {
    src: '/images/sky-au-gallery/03.jpg',
    alt: 'SKY-AU 폴리아스파틱 계단 논슬립 시공',
  },
  {
    src: '/images/sky-au-gallery/04.jpg',
    alt: 'SKY-AU 폴리아스파틱 폴리싱 바닥 (복도)',
  },
  {
    src: '/images/sky-au-gallery/05.jpg',
    alt: 'SKY-AU 메탈릭 에폭시 바닥 시공',
  },
  {
    src: '/images/sky-au-gallery/06.jpg',
    alt: 'SKY-AU 폴리아스파틱 폴리싱 콘크리트 바닥',
  },
  {
    src: '/images/sky-au-gallery/07.jpg',
    alt: 'SKY-AU 메탈릭 에폭시 바닥 (도서관)',
  },
  {
    src: '/images/sky-au-gallery/08.jpg',
    alt: 'SKY-AU 메탈릭 에폭시 바닥 시공',
  },
  {
    src: '/images/sky-au-gallery/09.jpg',
    alt: 'SKY-AU 폴리싱 콘크리트 바닥 상세',
  },
  {
    src: '/images/sky-au-gallery/10.jpg',
    alt: 'SKY-AU 테라조 플레이크 바닥 (광택 마감)',
  },
  {
    src: '/images/sky-au-gallery/11.jpg',
    alt: 'SKY-AU 테라조 플레이크 바닥 시공',
  },
  {
    src: '/images/sky-au-gallery/12.jpg',
    alt: 'SKY-AU 테라조 플레이크 바닥 상세',
  },
  {
    src: '/images/sky-au-gallery/13.jpg',
    alt: 'SKY-AU 폴리아스파틱 바닥 마감',
  },
  {
    src: '/images/sky-au-gallery/14.jpg',
    alt: 'SKY-AU 테라조 플레이크 바닥 (광택)',
  },
  {
    src: '/images/sky-au-gallery/15.jpg',
    alt: 'SKY-AU 폴리아스파틱 바닥 시공',
  },
  {
    src: '/images/sky-au-gallery/16.jpg',
    alt: 'SKY-AU 메탈릭 에폭시 바닥 상세',
  },
];

export default class ProductPolyasparticWaterproofController extends Controller {
  @service locale;

  get skyAuGallerySlides() {
    return SKY_AU_GALLERY;
  }
}
