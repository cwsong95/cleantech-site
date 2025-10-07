import Controller from '@ember/controller';
import { service } from '@ember/service';

const CARDS = {
  en: [
    {
      id: 'rapid-install',
      title: 'Rapid & Cold Installation',
      description: 'Return to service in ~24h, even on wet substrates.',
    },
    {
      id: 'breathable-system',
      title: 'Breathable Waterproof System',
      description: 'Moisture-tolerant with chemical resistance.',
    },
    {
      id: 'polished-finish',
      title: 'High-Hardness Polished Finish',
      description: 'Slip-tuned, abrasion-resistant, hygienic.',
    },
  ],
  ko: [
    {
      id: 'rapid-install',
      title: '초속경 · 저온 시공',
      description: '습윤 기층에서도 24시간 내 라인 재가동이 가능합니다.',
    },
    {
      id: 'breathable-system',
      title: '투습형 방수 시스템',
      description: '하부 습기는 배출하고 화학 세제에도 견딥니다.',
    },
    {
      id: 'polished-finish',
      title: '고경도 폴리싱 마감',
      description: '미끄럼 조정, 내마모 및 위생성을 동시에 충족합니다.',
    },
  ],
};

export default class IndexController extends Controller {
  @service locale;

  get cards() {
    return CARDS[this.locale.current];
  }
}
