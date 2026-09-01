import Controller from '@ember/controller';
import { service } from '@ember/service';

const COPY = {
  ko: {
    metaTitle: '자료실 | CleanTech',
    hero: {
      eyebrow: 'DOWNLOADS',
      title: '브로슈어 & 자료',
      description: '주요 제품 문서를 한 번에 다운로드하세요.',
      metrics: {
        totalLabel: '전체',
        readyLabel: '다운로드 가능',
        unit: '건',
      },
      note: '나머지 자료는 순차적으로 업데이트됩니다.',
    },
    actions: {
      download: 'PDF 다운로드',
      open: '새 창에서 보기',
    },
    preview: {
      heading: 'Aqua-Crete 자료',
      description:
        '세라믹 무기불연 바닥 시스템의 핵심 정보와 시공 사례를 담았습니다.',
      fileInfo: 'PDF · 2.6MB',
      href: '/downloads/aqua-crete-catalog.pdf',
    },
    cards: [
      {
        id: 'aqua-crete',
        name: '아쿠아크리트',
        summary: '세라믹 무기불연 바닥 솔루션',
        href: '/downloads/aqua-crete-catalog.pdf',
        available: true,
        fileInfo: 'PDF · 2.6MB',
      },
      {
        id: 'aqua-crete-eifs',
        name: '아쿠아크리트 외벽',
        summary: '무기불연 외단열 · 외벽도막방수 시스템',
        href: '/downloads/aqua-crete-eifs-catalog.pdf',
        available: true,
        fileInfo: 'PDF · 8.3MB',
      },
      {
        id: 'sky-floor',
        name: 'SKY-Floor',
        summary: '대형 상업 공간용 하드 플로어',
        href: '/downloads/sky-floor-catalog.pdf',
        available: true,
        fileInfo: 'PDF · 5.4MB',
      },
      {
        id: 'sky-au',
        name: 'SKY-AU',
        summary: '폴리아스파틱 폴리우레아 시스템',
        available: false,
      },
    ],
    comingSoon: '준비 중',
    comingSoonNote: '업로드 예정입니다.',
  },
  en: {
    metaTitle: 'Downloads | CleanTech',
    hero: {
      eyebrow: 'DOWNLOADS',
      title: 'Product Downloads',
      description: 'Grab brochures and SDS without hunting around.',
      metrics: {
        totalLabel: 'Total',
        readyLabel: 'Ready',
        unit: 'files',
      },
      note: 'Additional PDFs roll out soon.',
    },
    actions: {
      download: 'Download PDF',
      open: 'Open in new tab',
    },
    preview: {
      heading: 'Aqua-Crete',
      description: 'Highlights, performance data, and installs at a glance.',
      fileInfo: 'PDF · 3.0MB',
      href: '/downloads/aqua-crete-catalog-en.pdf',
    },
    cards: [
      {
        id: 'aqua-crete',
        name: 'Aqua-Crete',
        summary: 'Inorganic ceramic flooring system',
        href: '/downloads/aqua-crete-catalog-en.pdf',
        available: true,
        fileInfo: 'PDF · 3.0MB',
      },
      {
        id: 'aqua-crete-eifs',
        name: 'Aqua-Crete EIFS',
        summary: 'Non-combustible EIFS & wall waterproofing',
        href: '/downloads/aqua-crete-eifs-catalog-en.pdf',
        available: true,
        fileInfo: 'PDF · 8.3MB',
      },
      {
        id: 'sky-floor',
        name: 'SKY-Floor',
        summary: 'Hard-wearing commercial deck',
        href: '/downloads/sky-floor-catalog-en.pdf',
        available: true,
        fileInfo: 'PDF · 6.6MB',
      },
      {
        id: 'sky-au',
        name: 'SKY-AU',
        summary: 'Polyaspartic polyurea system',
        available: false,
      },
    ],
    comingSoon: 'Coming soon',
    comingSoonNote: 'More files coming soon.',
  },
};

export default class DownloadsController extends Controller {
  @service locale;

  get copy() {
    return COPY[this.locale.current] ?? COPY.ko;
  }

  get cards() {
    return this.copy.cards;
  }

  get preview() {
    return this.copy.preview;
  }

  get totalCount() {
    return this.cards.length;
  }

  get availableCount() {
    return this.cards.filter((card) => card.available).length;
  }
}
