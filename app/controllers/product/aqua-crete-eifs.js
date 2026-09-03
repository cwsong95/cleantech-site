import Controller from '@ember/controller';
import { service } from '@ember/service';

const AC = '아쿠아크리트';
const EIFS_GALLERY = [
  { src: '/images/eifs-gallery/01.jpg', alt: '외벽 색채 제안 도면' },
  {
    src: '/images/eifs-gallery/02.jpg',
    alt: `학교 외벽 ${AC} 불연 도막 시공 사례`,
  },
  { src: '/images/eifs-gallery/03.jpg', alt: '유치원 외벽 색채 제안 도면' },
  {
    src: '/images/eifs-gallery/04.jpg',
    alt: `유치원 외벽 ${AC} 마감 시공 완료`,
  },
  {
    src: '/images/eifs-gallery/05.jpg',
    alt: `초등학교 외벽 ${AC} 컬러 마감 사례`,
  },
  { src: '/images/eifs-gallery/06.jpg', alt: `학교 외벽 ${AC} 도막 시공 현장` },
  { src: '/images/eifs-gallery/07.jpg', alt: '중학교 외벽 색채 제안 도면' },
  { src: '/images/eifs-gallery/08.jpg', alt: `학교 외벽 ${AC} 불연 마감 상세` },
  { src: '/images/eifs-gallery/09.jpg', alt: '외벽 색채 제안 도면' },
  { src: '/images/eifs-gallery/10.jpg', alt: `학교 외벽 ${AC} 마감 시공 완료` },
];

export default class ProductAquaCreteEifsController extends Controller {
  @service locale;

  get eifsGallerySlides() {
    return EIFS_GALLERY;
  }
}
