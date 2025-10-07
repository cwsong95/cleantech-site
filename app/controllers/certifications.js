import Controller from '@ember/controller';
import { service } from '@ember/service';

const CONTENT = {
  ko: {
    hero: {
      eyebrow: 'CERTIFICATIONS',
      title: '품질 · 친환경 · 안전을 증명하는 인증',
      description:
        'Cleantech는 공공기관과 글로벌 시험기관의 엄격한 평가를 통해 바닥재 성능과 친환경성을 검증받았습니다. 각 인증서를 확인해 보세요.',
    },
    metrics: {
      totalLabel: '총',
      unit: '건 인증',
      updatedLabel: '최근 업데이트',
    },
    updatedDate: '2025년 1월',
    buttonLabel: '원본 보기',
    certificates: [
      {
        id: 'quality',
        title: '아쿠아크리트 품질 인증서',
        summary: 'KS 시험 성적서 기반 품질 인증',
        image: '/images/아쿠아크리트-품질-인증서.jpg',
      },
      {
        id: 'eco',
        title: '아쿠아크리트 환경표지 인증서',
        summary: '친환경 소재 및 저배출 평가 통과',
        image: '/images/아쿠아크리트-환경표지-인증서.jpg',
      },
      {
        id: 'ks',
        title: '아쿠아크리트 KS 인증서',
        summary: '도막형 바닥재 · 무기고분자 세라믹 불연성 바닥재 KS 인증',
        image: '/images/아쿠아크리트-KS-인증서.jpg',
      },
      {
        id: 'green-tech',
        title: '아쿠아크리트 녹색기술 인증서',
        summary: '에너지 절감 및 친환경 성능을 입증한 녹색기술 인증',
        image: '/images/아쿠아크리트-녹색기술-인증서.jpg',
      },
    ],
  },
  en: {
    hero: {
      eyebrow: 'CERTIFICATIONS',
      title: 'Proven quality and environmental compliance',
      description:
        'Cleantech flooring systems are qualified by Korean national procurement tests and eco-label programs. Explore the key certificates below.',
    },
    metrics: {
      totalLabel: 'Total',
      unit: 'certifications',
      updatedLabel: 'Last updated',
    },
    updatedDate: 'Jan 2025',
    buttonLabel: 'View original',
    certificates: [
      {
        id: 'quality',
        title: 'Aqua-Crete Quality Certificate',
        summary: 'KS compliance test report issued by certified labs',
        image: '/images/아쿠아크리트-품질-인증서.jpg',
      },
      {
        id: 'eco',
        title: 'Aqua-Crete Eco Label Certificate',
        summary: 'Approved for low emissions and eco-friendly materials',
        image: '/images/아쿠아크리트-환경표지-인증서.jpg',
      },
      {
        id: 'ks',
        title: 'Aqua-Crete KS Certification',
        summary: 'Certified as an inorganic ceramic non-combustible flooring system',
        image: '/images/아쿠아크리트-KS-인증서.jpg',
      },
      {
        id: 'green-tech',
        title: 'Aqua-Crete Green Technology Certificate',
        summary: 'Recognized for energy-saving and sustainability performance',
        image: '/images/아쿠아크리트-녹색기술-인증서.jpg',
      },
    ],
  },
};

export default class CertificationsController extends Controller {
  @service locale;

  get copy() {
    return CONTENT[this.locale.current] ?? CONTENT.ko;
  }

  get certificateCount() {
    return this.copy.certificates.length;
  }
}
