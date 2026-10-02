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
    lead: 'We design and install tailored floor systems for food, logistics, and research facilities — delivering rapid return to service, hygiene, and durability in a single solution.',
    highlights: [
      'Lines back in service within 24 hours',
      'Proven on wet and sub-zero substrates',
      'Withstands thermal shock and chemical cleaning',
    ],
    ctaPrimary: 'Explore Products',
    ctaSecondary: 'Request a Consultation',
  },
};

const PRODUCT_CARDS = {
  ko: [
    {
      id: 'aqua-crete',
      title: 'AQUA-CRETE',
      description:
        '무기불연마감 시스템으로 주방 급식실 식품 공장 위생구역에 최적화.',
      image: '/images/aqua-crete-hero.jpg',
      imageAlt: '아쿠아크리트 시공 이미지',
      badge: '식품 · 위생',
      points: [
        '습윤 바탕면 시공 성능',
        '영하온도 시공 성능',
        '영구적인 미끄럼 저항 성능',
      ],
      linkLabel: '자세히 보기',
      route: 'product.aqua-crete',
      readyToView: true,
    },
    {
      id: 'aqua-crete-eifs',
      title: 'AQUA-CRETE 외단열',
      description:
        '무기 불연재 외단열시스템으로 외벽의 화재 방지 및 언존ㄱ안전과 방수·단열을 동시에 확보.',
      image: '/images/aqua-crete-eifs-hero.jpg',
      imageAlt: '아쿠아크리트 외단열 시공 이미지',
      badge: '외벽 · 불연',
      points: [
        '실물화재시험 KS F 8414',
        '내진 성능 시험 인증',
        '고어텍스 성능 인증',
      ],
      linkLabel: '자세히 보기',
      route: 'product.aqua-crete-eifs',
      readyToView: true,
    },
    {
      id: 'sky-floor',
      title: 'SKY-FLOOR',
      description:
        '바닥재 수지와 Stainless Wire Glass Mesh와의 결합 구조로 구성된 매진구조형 바닥 시스템',
      image: '/images/sky-floor-hero-green.jpg',
      imageAlt: '스카이 플로어 시공 이미지',
      badge: '물류 · 중량',
      points: ['균열 벙지 성능 제품', '친환경 인증 제품', '조달청 등록 재품'],
      linkLabel: '자세히 보기',
      route: 'product.sky-floor',
      readyToView: true,
    },
    {
      id: 'sky-au',
      title: 'SKY-AU',
      description:
        '차세대 초속경 폴리아스파틱 폴리우레아 피복재 — 2시간 초속경화와 UV 황변 제로.',
      image: '/images/sky-au-hero.jpg',
      imageAlt: 'SKY-AU 폴리아스파틱 폴리우레아 시공 이미지',
      badge: '초속경 · 코팅',
      points: ['2시간 초속경화', 'UV 상시 안정성', '친환경 저VOC'],
      linkLabel: '자세히 보기',
      route: 'product.polyaspartic-waterproof',
      readyToView: true,
    },
  ],
  en: [
    {
      id: 'aqua-crete',
      title: 'AQUA-CRETE',
      description:
        'Inorganic, non-combustible finish system optimized for hygiene zones in commercial kitchens, cafeterias, and food plants.',
      image: '/images/aqua-crete-hero.jpg',
      imageAlt: 'Aqua-Crete floor installation',
      badge: 'Food · Hygiene',
      points: [
        'Installs on wet substrates',
        'Installs at sub-zero temperatures',
        'Permanent slip resistance',
      ],
      linkLabel: 'Learn more',
      route: 'product.aqua-crete',
      readyToView: true,
    },
    {
      id: 'aqua-crete-eifs',
      title: 'AQUA-CRETE EIFS',
      description:
        'Inorganic, non-combustible exterior insulation system that secures fire protection and life safety together with waterproofing and insulation.',
      image: '/images/aqua-crete-eifs-hero.jpg',
      imageAlt: 'Aqua-Crete exterior insulation installation',
      badge: 'Exterior Wall · Non-Combustible',
      points: [
        'KS F 8414 full-scale fire test',
        'Certified seismic performance',
        'Certified breathable waterproofing (GORE-TEX® function)',
      ],
      linkLabel: 'Learn more',
      route: 'product.aqua-crete-eifs',
      readyToView: true,
    },
    {
      id: 'sky-floor',
      title: 'SKY-FLOOR',
      description:
        'Mesh-reinforced floor system built on a bonded structure of flooring resin and stainless wire glass mesh.',
      image: '/images/sky-floor-hero-green.jpg',
      imageAlt: 'SKY Floor installation',
      badge: 'Logistics · Heavy Load',
      points: [
        'Crack-resistant construction',
        'Eco-Label certified',
        'Registered with the Public Procurement Service',
      ],
      linkLabel: 'Learn more',
      route: 'product.sky-floor',
      readyToView: true,
    },
    {
      id: 'sky-au',
      title: 'SKY-AU',
      description:
        'Next-generation ultra-fast-curing polyaspartic polyurea coating — a 2-hour cure with zero UV yellowing.',
      image: '/images/sky-au-hero.jpg',
      imageAlt: 'SKY-AU polyaspartic polyurea installation',
      badge: 'Ultra-Fast Cure · Coating',
      points: [
        '2-hour ultra-fast cure',
        'Permanent UV stability',
        'Eco-friendly, low VOC',
      ],
      linkLabel: 'Learn more',
      route: 'product.polyaspartic-waterproof',
      readyToView: true,
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
    title: 'Talk to us about the right floor solution for your site',
    description:
      'Tell us your industry, intended use, schedule, and budget, and we will recommend the system that fits best.',
    bullets: [
      'Industry and intended use',
      'Current floor condition and issues',
      'Target schedule and performance requirements',
    ],
    directTitle: 'Call or Email Us',
    directDesc: 'A specialist will respond within one business day.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone (optional)',
    companyLabel: 'Company / Organization (optional)',
    messageLabel: 'Your Inquiry',
    messagePlaceholder:
      'Tell us about your site and what you would like to know.',
    submitLabel: 'Send Inquiry',
    submittingLabel: 'Sending…',
    successMessage:
      'Your inquiry has been received. We will be in touch shortly.',
    errorFallback:
      'We could not send your message. Please try again shortly or email us directly.',
    privacyNote: 'Your information is used only to respond to your inquiry.',
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
