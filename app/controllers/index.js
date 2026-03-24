import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

const HERO_COPY = {
  ko: {
    eyebrow: 'CLEANTECH INDUSTRIAL FLOORING',
    title: '크린텍개발',
    lead: '식품, 물류, 연구시설을 위한 맞춤형 바닥 시스템을 설계·시공합니다. 빠른 재가동, 위생, 내구성을 동시에 충족합니다.',
    highlights: [
      '24시간 내 라인 재가동',
      '습윤·저온 시공 경험',
      '열충격 · 화학 세정 대응',
    ],
    ctaPrimary: '제품 한눈에 보기',
    ctaSecondary: '상담 남기기',
  },
  en: {
    eyebrow: 'CLEANTECH INDUSTRIAL FLOORING',
    title: 'CleanTech',
    lead: 'Floor systems engineered for hygiene, speed, and durability across food, logistics, and R&D sites.',
    highlights: [
      'Return to service in ~24h',
      'Works on damp or cold slabs',
      'Built for thermal & chemical shock',
    ],
    ctaPrimary: 'View products',
    ctaSecondary: 'Request advice',
  },
};

const PRODUCT_CARDS = {
  ko: [
    {
      id: 'aqua-crete',
      title: 'Aqua-Crete',
      description: '세라믹 무기불연 시스템으로 식품 공장 위생구역에 최적화.',
      image: '/images/aquacrete-1.jpg',
      imageAlt: '아쿠아크리트 시공 이미지',
      badge: '식품 · 위생',
      points: ['24시간 내 재가동', '습윤 슬라브 시공', '고경도 폴리싱 마감'],
      linkLabel: '자세히 보기',
      route: 'product.aqua-crete',
      readyToView: true,
    },
    {
      id: 'aqua-crete-eifs',
      title: 'Aqua-Crete 외단열',
      description:
        'NEP 인증 불연재 외단열시스템으로 외벽의 화재 안전과 방수·단열을 동시에 확보.',
      image: '/images/외벽.jpg',
      imageAlt: '아쿠아크리트 외단열 시공 이미지',
      badge: '외벽 · 불연',
      points: ['실물화재시험 KS F 8414', '고어텍스 통기 기능', '내진 성능'],
      linkLabel: '자세히 보기',
      route: 'product.aqua-crete-eifs',
      readyToView: true,
    },
    {
      id: 'sky-floor',
      title: 'Sky-Floor',
      description: 'Stainless Mesh가 균열을 잡아주는 고강도 에폭시 바닥.',
      image: '/images/sky-floor-mono.jpg',
      imageAlt: '스카이 플로어 시공 이미지',
      badge: '물류 · 중량',
      points: ['중량 하중 대응', '균열 차단 구조', '내약품 · 내마모'],
      linkLabel: '자세히 보기',
      route: 'product.sky-floor',
      readyToView: true,
    },
    {
      id: 'sky-flex',
      title: 'Sky-Flex',
      description: '페이지 준비 중입니다. 곧 업데이트됩니다.',
      image: '/images/sky-flex.svg',
      imageAlt: '스카이 플렉스 아이콘',
      badge: '준비중',
      points: ['문의 시 안내 가능합니다.'],
      linkLabel: '자세히 보기',
      route: 'product.sky-flex',
      comingSoon: true,
      comingSoonLabel: '준비중',
      readyToView: false,
    },
    {
      id: 'polyaspartic',
      title: '폴리아스파틱',
      description: '페이지 준비 중입니다. 곧 업데이트됩니다.',
      image: '/images/sky-flex.svg',
      imageAlt: '폴리아스파틱 아이콘',
      badge: '준비중',
      points: ['방수재 · 프라이머', '문의 시 안내 가능합니다.'],
      linkLabel: '자세히 보기',
      route: 'product.polyaspartic-waterproof',
      comingSoon: true,
      comingSoonLabel: '준비중',
      readyToView: false,
    },
  ],
  en: [
    {
      id: 'aqua-crete',
      title: 'Aqua-Crete',
      description:
        'Inorganic, non-combustible flooring tuned for hygienic food and beverage zones.',
      image: '/images/aquacrete-1.jpg',
      imageAlt: 'Aqua-Crete floor installation',
      badge: 'Food & hygiene',
      points: [
        'Return to service in 24h',
        'Installs on damp slabs',
        'Polished, high-hardness finish',
      ],
      linkLabel: 'See details',
      route: 'product.aqua-crete',
      readyToView: true,
    },
    {
      id: 'aqua-crete-eifs',
      title: 'Aqua-Crete EIFS',
      description:
        'NEP-certified non-combustible exterior insulation system for fire-safe, waterproof, and insulated facades.',
      image: '/images/외벽.jpg',
      imageAlt: 'Aqua-Crete EIFS installation',
      badge: 'Facade & fire safety',
      points: [
        'KS F 8414 full-scale fire test',
        'GORE-TEX breathability',
        'Seismic performance',
      ],
      linkLabel: 'See details',
      route: 'product.aqua-crete-eifs',
      readyToView: true,
    },
    {
      id: 'sky-floor',
      title: 'SKY Floor',
      description:
        'Mesh-reinforced epoxy that blocks cracking for heavy-duty logistics spaces.',
      image: '/images/sky-floor-mono.jpg',
      imageAlt: 'SKY Floor installation',
      badge: 'Logistics & heavy load',
      points: [
        'Handles heavy loads',
        'Crack-bridging mesh',
        'Chemical & abrasion resistant',
      ],
      linkLabel: 'See details',
      route: 'product.sky-floor',
      readyToView: true,
    },
    {
      id: 'sky-flex',
      title: 'SKY Flex',
      description: 'Page in progress. Check back soon.',
      image: '/images/sky-flex.svg',
      imageAlt: 'SKY Flex mark',
      badge: 'Coming soon',
      points: ['Details coming soon.'],
      linkLabel: 'See details',
      route: 'product.sky-flex',
      comingSoon: true,
      comingSoonLabel: 'Coming soon',
      readyToView: false,
    },
    {
      id: 'polyaspartic',
      title: 'Polyaspartic',
      description: 'Page in progress. Check back soon.',
      image: '/images/sky-flex.svg',
      imageAlt: 'Polyaspartic coating mark',
      badge: 'Coming soon',
      points: ['Waterproofing & Primer', 'Details coming soon.'],
      linkLabel: 'See details',
      route: 'product.polyaspartic-waterproof',
      comingSoon: true,
      comingSoonLabel: 'Coming soon',
      readyToView: false,
    },
  ],
};

const CONTACT_COPY = {
  ko: {
    eyebrow: 'CONTACT',
    title: '현장에 맞는 바닥 솔루션을 상담해 보세요',
    description:
      '업종, 용도, 일정, 예산을 알려주시면 가장 적합한 시스템을 제안해 드립니다.',
    bullets: [
      '업종과 사용 용도',
      '현재 바닥 상태와 문제점',
      '희망 일정과 요구 성능',
    ],
    directTitle: '바로 전화 · 이메일',
    directDesc: '평일 기준 24시간 이내 담당자가 회신드립니다.',
    nameLabel: '이름',
    emailLabel: '이메일',
    phoneLabel: '연락처 (선택)',
    companyLabel: '회사/기관명 (선택)',
    messageLabel: '문의 내용',
    messagePlaceholder: '현장 정보와 궁금한 내용을 남겨 주세요.',
    submitLabel: '상담 요청 보내기',
    submittingLabel: '보내는 중...',
    successMessage: '접수되었습니다. 빠르게 연락드리겠습니다.',
    errorFallback:
      '전송에 실패했습니다. 잠시 후 다시 시도하거나 메일로 직접 연락해 주세요.',
    privacyNote: '입력한 정보는 상담 응대 목적 외에는 사용하지 않습니다.',
  },
  en: {
    eyebrow: 'CONTACT',
    title: 'Tell us about your floor project',
    description:
      'Share the site type, issues, and schedule. We will return with a tailored system recommendation.',
    bullets: [
      'Industry and usage',
      'Current floor condition',
      'Target timeline and performance',
    ],
    directTitle: 'Direct line',
    directDesc: 'We respond within one business day.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone (optional)',
    companyLabel: 'Company (optional)',
    messageLabel: 'Project details',
    messagePlaceholder: 'How is the floor used and what do you need from it?',
    submitLabel: 'Send request',
    submittingLabel: 'Sending...',
    successMessage: 'Thanks! We will follow up shortly.',
    errorFallback:
      'Unable to send right now. Please try again or email us directly.',
    privacyNote: 'We only use these details to respond to your inquiry.',
  },
};

export default class IndexController extends Controller {
  @service locale;

  @tracked name = '';
  @tracked email = '';
  @tracked phone = '';
  @tracked company = '';
  @tracked message = '';
  @tracked status = 'idle';
  @tracked errorMessage = '';

  get heroCopy() {
    return HERO_COPY[this.locale.current] ?? HERO_COPY.ko;
  }

  get products() {
    return PRODUCT_CARDS[this.locale.current] ?? PRODUCT_CARDS.ko;
  }

  get contactCopy() {
    return CONTACT_COPY[this.locale.current] ?? CONTACT_COPY.ko;
  }

  get isSubmitting() {
    return this.status === 'sending';
  }

  get isSuccess() {
    return this.status === 'success';
  }

  get isError() {
    return this.status === 'error';
  }

  get submitDisabled() {
    return (
      this.isSubmitting ||
      !this.name.trim() ||
      !this.email.trim() ||
      !this.message.trim()
    );
  }

  get buttonLabel() {
    return this.isSubmitting
      ? this.contactCopy.submittingLabel
      : this.contactCopy.submitLabel;
  }

  @action
  updateField(field, event) {
    const fields = new Set(['name', 'email', 'phone', 'company', 'message']);
    if (fields.has(field)) {
      this[field] = event.target.value;
    }

    if (this.status !== 'idle') {
      this.status = 'idle';
      this.errorMessage = '';
    }
  }

  @action
  async submitForm(event) {
    event.preventDefault();

    if (this.submitDisabled) {
      return;
    }

    this.status = 'sending';
    this.errorMessage = '';

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/ct4138605@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            phone: this.phone,
            company: this.company,
            message: this.message,
            _subject: 'CleanTech Homepage Inquiry',
            _captcha: 'false',
          }),
        },
      );

      const data = await response.json().catch(() => null);
      const successFlag =
        data === null ||
        typeof data?.success === 'undefined' ||
        data?.success === true ||
        data?.success === 'true';

      if (!response.ok || !successFlag) {
        const detail =
          (data && (data.message || data.error || data.status)) ||
          'Request failed';
        throw new Error(detail);
      }

      this.status = 'success';
      this.name = '';
      this.email = '';
      this.phone = '';
      this.company = '';
      this.message = '';
    } catch (error) {
      this.status = 'error';
      const fallback = this.contactCopy.errorFallback;
      const detail = error instanceof Error ? error.message : undefined;
      this.errorMessage =
        detail && detail !== 'Request failed'
          ? `${fallback} (${detail})`
          : fallback;
    }
  }
}
