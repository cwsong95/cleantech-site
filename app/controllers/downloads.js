import Controller from '@ember/controller';
import { service } from '@ember/service';

const COPY = {
  ko: {
    metaTitle: '자료실 | Cleantech',
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
      heading: '아쿠아크리트 자료',
      description: '세라믹 무기불연 바닥 시스템의 핵심 정보와 시공 사례를 담았습니다.',
      fileInfo: 'PDF · 1.34MB',
    },
    cards: [
      {
        id: 'aqua-crete',
        name: '아쿠아크리트',
        summary: '세라믹 무기불연 바닥 솔루션',
        href: '/downloads/aqua-crete-catalog.pdf',
        available: true,
        fileInfo: 'PDF · 1.34MB',
      },
      {
        id: 'sky-floor',
        name: 'SKY-Floor',
        summary: '대형 상업 공간용 하드 플로어',
        available: false,
      },
      {
        id: 'sky-flex',
        name: 'SKY-Flex',
        summary: '고탄성 방수 시스템',
        available: false,
      },
      {
        id: 'wood-preservative',
        name: '목재 방부제',
        summary: '방부·방충 특화제',
        available: false,
      },
    ],
    comingSoon: '준비 중',
    comingSoonNote: '업로드 예정입니다.',
  },
  en: {
    metaTitle: 'Downloads | Cleantech',
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
      heading: 'Aqua-Crete Pack',
      description: 'Highlights, performance data, and installs at a glance.',
      fileInfo: 'PDF · 1.34MB',
    },
    cards: [
      {
        id: 'aqua-crete',
        name: 'Aqua-Crete',
        summary: 'Inorganic ceramic flooring system',
        href: '/downloads/aqua-crete-catalog.pdf',
        available: true,
        fileInfo: 'PDF · 1.34MB',
      },
      {
        id: 'sky-flex',
        name: 'SKY-Flex',
        summary: 'Flexible waterproof system',
        available: false,
      },
      {
        id: 'sky-floor',
        name: 'SKY-Floor',
        summary: 'Hard-wearing commercial deck',
        available: false,
      },
      {
        id: 'wood-preservative',
        name: 'Wood Preservative',
        summary: 'Enhanced protection treatment',
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
