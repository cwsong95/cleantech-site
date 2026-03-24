import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const MESSAGES = {
  en: {
    nav: {
      company: 'About',
      products: 'Products',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    dropdown: {
      aquaFloor: 'Floor System',
      aquaWall: 'EIFS (Exterior Wall)',
      skyFloor: 'SKY Floor',
      skyFlex: 'SKY Flex',
      polyaspartic: 'Polyaspartic',
      polyWaterproof: 'Waterproofing',
      polyPrimer: 'Primer',
      comingSoon: 'Coming Soon',
    },
    localeToggle: {
      label: '한글',
      aria: 'Switch to Korean',
    },
    footer: {
      company: {
        name: 'CLEANTECH Co., Ltd',
        address: '114 C-406, Beobwon-ro, Songpa-gu, Seoul',
        contact: 'TEL 02-420-2844~5 · FAX 02-413-8605',
        copyright: 'Copyrightⓒ--- All Rights Reserved',
      },
      certifications: {
        title: 'Certifications',
        items: [
          'HACCP (in progress)',
          'ECO-Friendly',
          'New Excellent Product(NEP)',
        ],
      },
      downloads: {
        title: 'Downloads',
        link: 'Catalog',
      },
    },
  },
  ko: {
    nav: {
      company: '회사 소개',
      products: '제품',
      certifications: '인증',
      contact: '문의하기',
    },
    dropdown: {
      aquaFloor: '바닥 공법',
      aquaWall: '외벽 공법',
      skyFloor: '스카이 플로어',
      skyFlex: '스카이 플렉스',
      polyaspartic: '폴리아스파틱',
      polyWaterproof: '방수재',
      polyPrimer: '프라이머',
      comingSoon: '준비중',
    },
    localeToggle: {
      label: 'EN',
      aria: '영어로 전환',
    },
    footer: {
      company: {
        name: 'CLEANTECH Co., Ltd',
        address: '서울특별시 송파구 법원로 114 C-406',
        contact: '전화 02-420-2844~5 · 팩스 02-413-8605',
        copyright: 'Copyrightⓒ--- All Rights Reserved',
      },
      certifications: {
        title: '인증 현황',
        items: ['실물화재시험', '친환경', '신제품'],
      },
      downloads: {
        title: '자료실',
        link: '카탈로그',
      },
    },
  },
};

export default class LocaleService extends Service {
  @tracked current = 'ko';

  constructor() {
    super(...arguments);
    this._applyDocumentLang();
  }

  get isKorean() {
    return this.current === 'ko';
  }

  get isEnglish() {
    return this.current === 'en';
  }

  get toggleLabel() {
    return this._lookup('localeToggle.label');
  }

  get toggleAriaLabel() {
    return this._lookup('localeToggle.aria');
  }

  toggle = () => {
    this.setLocale(this.isKorean ? 'en' : 'ko');
  };

  setLocale = (locale) => {
    if (!MESSAGES[locale]) return;
    if (locale === this.current) return;
    this.current = locale;
    this._applyDocumentLang();
  };

  t = (key) => {
    return this._lookup(key) ?? key;
  };

  _lookup = (key) => {
    const parts = key.split('.');
    return parts.reduce((acc, part) => acc?.[part], MESSAGES[this.current]);
  };

  _applyDocumentLang = () => {
    if (typeof document === 'undefined') return;
    const lang = this.isKorean ? 'ko' : 'en';
    document.documentElement.setAttribute('lang', lang);
  };
}
