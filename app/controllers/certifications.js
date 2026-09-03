import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

const CONTENT = {
  ko: {
    metaTitle: '기술자료 | CleanTech',
    hero: {
      eyebrow: 'RESOURCES',
      title: '기술자료',
      description:
        '제품 카탈로그와 공인 인증서, 시험성적표를 한곳에서 확인하고 내려받으실 수 있습니다.',
    },
    tabs: {
      downloads: '카탈로그',
      certs: '인증서',
      reports: '시험성적표',
    },
    actions: {
      open: '새 창에서 보기',
      download: 'PDF 다운로드',
      view: '원본 보기',
    },
    comingSoon: '준비 중',
    comingSoonNote: '업로드 예정입니다.',
    downloads: [
      {
        id: 'aqua-crete',
        name: '아쿠아크리트',
        summary: '세라믹 무기불연 바닥 솔루션',
        image: '/images/catalog-aqua-crete.jpg',
        href: '/downloads/aqua-crete-catalog.pdf',
        available: true,
      },
      {
        id: 'aqua-crete-eifs',
        name: '아쿠아크리트 외벽',
        summary: '무기불연 외단열 · 외벽도막방수 시스템',
        image: '/images/catalog-aqua-crete-eifs.jpg',
        href: '/downloads/aqua-crete-eifs-catalog.pdf',
        available: true,
      },
      {
        id: 'sky-floor',
        name: 'SKY-Floor',
        summary: '대형 상업 공간용 하드 플로어',
        image: '/images/catalog-sky-floor.jpg',
        href: '/downloads/sky-floor-catalog.pdf',
        available: true,
      },
      {
        id: 'sky-au',
        name: 'SKY-AU',
        summary: '폴리아스파틱 폴리우레아 시스템',
        available: false,
      },
    ],
    certificates: [
      {
        id: 'nep-ko',
        title: '신제품(NEP) 인증서',
        summary:
          '산업통상자원부 신제품(NEP) 인증 · 초속경 불연 방수 바닥마감재',
        image: '/images/doc-nep-ko.jpg',
        original: '/downloads/nep-certificate-ko.pdf',
      },
      {
        id: 'nep-en',
        title: '신제품(NEP) 인증서 (영문)',
        summary: 'Certificate of New Excellent Product · 영문본',
        image: '/images/doc-nep-en.jpg',
        original: '/downloads/nep-certificate-en.pdf',
      },
      {
        id: 'quality',
        title: '아쿠아크리트 - 품질 인증서',
        summary: 'KS 시험 성적서 기반 품질 인증',
        image: '/images/cert-quality.jpg',
        original: '/images/cert-quality.jpg',
      },
      {
        id: 'eco',
        title: '아쿠아크리트 - 환경표지 인증서',
        summary: '친환경 소재 및 저배출 평가 통과',
        image: '/images/cert-eco.jpg',
        original: '/images/cert-eco.jpg',
      },
      {
        id: 'ks',
        title: '아쿠아크리트 - ISO 인증서',
        summary: '도막형 바닥재 · 무기고분자 세라믹 불연성 바닥재 KS 인증',
        image: '/images/cert-ks.jpg',
        original: '/images/cert-ks.jpg',
      },
      {
        id: 'green-tech',
        title: '아쿠아크리트 - 녹색기술 인증서',
        summary: '에너지 절감 및 친환경 성능을 입증한 녹색기술 인증',
        image: '/images/cert-green-tech.jpg',
        original: '/images/cert-green-tech.jpg',
      },
      {
        id: 'sky-eco',
        title: 'SKY FLOOR - 친환경 인증서',
        summary: '에너지 절감 및 친환경 성능을 입증한 친환경 인증',
        image: '/images/cert-sky-eco.jpg',
        original: '/images/cert-sky-eco.jpg',
      },
      {
        id: 'sky-single',
        title: 'SKY FLOOR - 단체 인증서',
        summary: 'SKY FLOOR 시스템 단체 표준 기준 적합 인증',
        image: '/images/cert-sky-group.jpg',
        original: '/images/cert-sky-group.jpg',
      },
    ],
    reports: [
      {
        id: 'seismic',
        title: '불연재 아쿠아크리트 내진성능 시험확인서',
        summary: '지진방재연구센터 내진성능 시험 확인서',
        image: '/images/doc-seismic.jpg',
        original: '/downloads/seismic-test-report.pdf',
      },
      {
        id: 'kcl',
        title: '불연성 · 가스유해성 시험성적서',
        summary: 'KCL 한국건설생활환경시험연구원 시험성적서',
        image: '/images/doc-kcl.jpg',
        original: '/downloads/kcl-noncombustible-report.pdf',
      },
      {
        id: 'ktr-aquacrete',
        title: '아쿠아크리트 시험성적서 (KS F 4918)',
        summary: 'KTR 한국화학융합시험연구원 시험성적서',
        image: '/images/doc-ktr-aquacrete.jpg',
        original: '/images/doc-ktr-aquacrete.jpg',
      },
      {
        id: 'ktr-mma',
        title: '도막형 바닥재(MMA수지) 시험성적서',
        summary: 'KTR 한국화학융합시험연구원 시험성적서',
        image: '/images/doc-ktr-mma.jpg',
        original: '/images/doc-ktr-mma.jpg',
      },
      {
        id: 'ktr-sky',
        title: 'SKY 상도 시험성적서',
        summary: 'KTR 한국화학융합시험연구원 시험성적서',
        image: '/images/doc-ktr-sky.jpg',
        original: '/images/doc-ktr-sky.jpg',
      },
    ],
  },
  en: {
    metaTitle: 'Resources | CleanTech',
    hero: {
      eyebrow: 'RESOURCES',
      title: 'Resources',
      description:
        'Download product catalogs, official certifications, and accredited test reports — all in one place.',
    },
    tabs: {
      downloads: 'Catalog',
      certs: 'Certificates',
      reports: 'Test Reports',
    },
    actions: {
      open: 'Open in new tab',
      download: 'Download PDF',
      view: 'View original',
    },
    comingSoon: 'Coming soon',
    comingSoonNote: 'More files coming soon.',
    downloads: [
      {
        id: 'aqua-crete',
        name: 'Aqua-Crete',
        summary: 'Inorganic ceramic flooring system',
        image: '/images/catalog-aqua-crete.jpg',
        href: '/downloads/aqua-crete-catalog-en.pdf',
        available: true,
      },
      {
        id: 'aqua-crete-eifs',
        name: 'Aqua-Crete EIFS',
        summary: 'Non-combustible EIFS & wall waterproofing',
        image: '/images/catalog-aqua-crete-eifs.jpg',
        href: '/downloads/aqua-crete-eifs-catalog-en.pdf',
        available: true,
      },
      {
        id: 'sky-floor',
        name: 'SKY-Floor',
        summary: 'Hard-wearing commercial deck',
        image: '/images/catalog-sky-floor.jpg',
        href: '/downloads/sky-floor-catalog-en.pdf',
        available: true,
      },
      {
        id: 'sky-au',
        name: 'SKY-AU',
        summary: 'Polyaspartic polyurea system',
        available: false,
      },
    ],
    certificates: [
      {
        id: 'nep-en',
        title: 'New Excellent Product (NEP)',
        summary:
          'Certificate of New Excellent Product · Ministry of Trade, Industry & Energy',
        image: '/images/doc-nep-en.jpg',
        original: '/downloads/nep-certificate-en.pdf',
      },
      {
        id: 'iso-en',
        title: 'ISO Certification (English)',
        summary:
          'Official ISO certificate translated into English for international documentation.',
        image: '/images/cert-iso-en.jpeg',
        original: '/images/cert-iso-en.jpeg',
      },
    ],
    reports: [
      {
        id: 'seismic',
        title: 'Seismic Performance Test',
        summary: 'Confirmation of Test · Seismic Research and Test Center',
        image: '/images/doc-seismic.jpg',
        original: '/downloads/seismic-test-report.pdf',
      },
      {
        id: 'kcl',
        title: 'Non-combustibility & Gas Toxicity Test',
        summary: 'KCL — Korea Conformity Laboratories test report',
        image: '/images/doc-kcl.jpg',
        original: '/downloads/kcl-noncombustible-report.pdf',
      },
      {
        id: 'ktr-aquacrete',
        title: 'Aqua-Crete Test Report (KS F 4918)',
        summary: 'KTR — Korea Testing & Research Institute',
        image: '/images/doc-ktr-aquacrete.jpg',
        original: '/images/doc-ktr-aquacrete.jpg',
      },
      {
        id: 'ktr-mma',
        title: 'Coating Floor (MMA) Test Report',
        summary: 'KTR — Korea Testing & Research Institute',
        image: '/images/doc-ktr-mma.jpg',
        original: '/images/doc-ktr-mma.jpg',
      },
      {
        id: 'ktr-sky',
        title: 'SKY Top-coat Test Report',
        summary: 'KTR — Korea Testing & Research Institute',
        image: '/images/doc-ktr-sky.jpg',
        original: '/images/doc-ktr-sky.jpg',
      },
    ],
  },
};

const TAB_IDS = ['downloads', 'certs', 'reports'];

export default class CertificationsController extends Controller {
  @service locale;
  @tracked activeTab = 'downloads';

  get copy() {
    return CONTENT[this.locale.current] ?? CONTENT.ko;
  }

  get downloads() {
    return this.copy.downloads ?? [];
  }

  get certificates() {
    return this.copy.certificates ?? [];
  }

  get reports() {
    return this.copy.reports ?? [];
  }

  get counts() {
    return {
      downloads: this.downloads.length,
      certs: this.certificates.length,
      reports: this.reports.length,
    };
  }

  get tabs() {
    const counts = this.counts;
    return TAB_IDS.map((id) => ({
      id,
      label: this.copy.tabs[id],
      count: counts[id],
      active: this.activeTab === id,
    }));
  }

  get isDownloads() {
    return this.activeTab === 'downloads';
  }

  get isCerts() {
    return this.activeTab === 'certs';
  }

  get isReports() {
    return this.activeTab === 'reports';
  }

  @action
  select(id) {
    this.activeTab = id;
  }
}
