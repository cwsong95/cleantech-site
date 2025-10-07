import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

const COPY = {
  ko: {
    eyebrow: 'CONTACT',
    title: '현장 진단 및 솔루션 상담을 요청하세요',
    description:
      '바닥 솔루션 컨설팅, 시공 견적, 유지관리 문의까지 한 번에 지원합니다. 현장 사진 또는 요구 성능을 함께 보내주시면 더 정확히 도와드릴 수 있어요.',
    bulletTitle: '이런 내용을 함께 보내주시면 좋아요',
    bullets: [
      '현장 주소 / 업종 / 사용 용도',
      '기존 바닥 상태와 주요 이슈',
      '요구 사항(현장, 제품, 등)과 일정',
    ],
    supportTitle: '직접 연락하기',
    responseTime: '평일 기준 24시간 이내 회신',
    successMessage: '문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.',
    errorFallback: '전송 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 메일로 직접 연락해 주세요.',
    submitLabel: '문의 보내기',
    submittingLabel: '보내는 중…',
    nameLabel: '이름',
    emailLabel: '이메일',
    phoneLabel: '연락처 (선택)',
    companyLabel: '회사/기관명 (선택)',
    messageLabel: '문의 내용',
    messagePlaceholder: '현장 정보와 궁금하신 내용을 자유롭게 작성해 주세요.',
    privacyNote: '제출하신 정보는 상담 응대 목적 외에는 사용하지 않습니다.',
  },
  en: {
    eyebrow: 'CONTACT',
    title: 'Tell us about your floor project',
    description:
      'Share the project background, target performance, and timeline. Our engineering team will get back with the best-fit solution.',
    bulletTitle: 'Helpful details to include',
    bullets: [
      'Site location, industry, and usage zone',
      'Current floor issues or pain points',
      'Performance requirements and schedule',
    ],
    supportTitle: 'Direct line',
    responseTime: 'We respond within one business day',
    successMessage: 'Thanks for reaching out! We will follow up shortly.',
    errorFallback: 'Something went wrong. Please try again or email us directly.',
    submitLabel: 'Send message',
    submittingLabel: 'Sending…',
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone (optional)',
    companyLabel: 'Company (optional)',
    messageLabel: 'Project details',
    messagePlaceholder: 'Tell us about the space, expectations, and timeline.',
    privacyNote: 'We only use the submitted details to respond to your inquiry.',
  },
};

export default class ContactController extends Controller {
  @service locale;

  @tracked name = '';
  @tracked email = '';
  @tracked phone = '';
  @tracked company = '';
  @tracked message = '';
  @tracked status = 'idle';
  @tracked errorMessage = '';

  get copy() {
    return COPY[this.locale.current] ?? COPY.ko;
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
    return this.isSubmitting ? this.copy.submittingLabel : this.copy.submitLabel;
  }

  @action
  updateField(field, event) {
    if (Object.prototype.hasOwnProperty.call(this, field)) {
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
      const response = await fetch('https://formsubmit.co/ajax/ct4138605@gmail.com', {
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
          _subject: 'Cleantech Contact Inquiry',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Request failed');
      }

      this.status = 'success';
      this.name = '';
      this.email = '';
      this.phone = '';
      this.company = '';
      this.message = '';
    } catch (error) {
      this.status = 'error';
      const fallback = this.copy.errorFallback;
      const detail = error instanceof Error ? error.message : undefined;
      this.errorMessage = detail && detail !== 'Request failed' ? `${fallback} (${detail})` : fallback;
      // keep message content for retry unless submission succeeded
    }
  }
}
