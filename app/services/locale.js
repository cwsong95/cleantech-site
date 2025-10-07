import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const MESSAGES = {
  en: {
    nav: {
      company: 'About',
      products: 'Products',
      applications: 'Applications',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    dropdown: {
      aqua: 'Aqua-Crete',
      skyFloor: 'SKY Floor',
      skyFlex: 'SKY Flex',
      wood: 'Wood',
    },
    localeToggle: {
      label: '한글',
      aria: 'Switch to Korean',
    },
  },
  ko: {
    nav: {
      company: '회사 소개',
      products: '제품',
      applications: '적용 분야',
      certifications: '인증',
      contact: '문의하기',
    },
    dropdown: {
      aqua: '아쿠아크리트',
      skyFloor: '스카이 플로어',
      skyFlex: '스카이 플렉스',
      wood: '우드',
    },
    localeToggle: {
      label: 'EN',
      aria: '영어로 전환',
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
