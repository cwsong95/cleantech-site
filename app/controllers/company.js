import Controller from '@ember/controller';
import { service } from '@ember/service';

const DATA = {
  ko: {
    hero: {
      eyebrow: 'ABOUT CLEANTECH',
      title: '현장을 혁신하는 바닥 솔루션 파트너',
      description:
        '2000년 설립 이후, 우리는 고위생·고내구성 바닥재와 단열 방수 시스템을 선도해 왔습니다. 특허 기술과 현장 경험을 바탕으로 식품, 제약, 물류 시설에 맞춤형 솔루션을 제공합니다.',
      highlight: {
        label: '핵심 키워드',
        items: ['무기질 세라믹 바닥재', '친환경·고내화 공법', '공공/산업 시설 검증'],
      },
    },
    timelineTitle: '연도별 주요 성과',
    timeline: [
      {
        year: '2000',
        entries: [
          '07월 ㈜크린텍개발 법인 설립',
          '08월 미장방수공사업 · 도장공사업 전문건설업 면허 취득',
        ],
      },
      {
        year: '2001',
        entries: ['05월 한국수자원공사 · 삼성산업개발 · 삼성정밀화학 협력업체 등록'],
      },
      {
        year: '2008',
        entries: ['02월 독일 SILIKAL 바닥재 한국지사 시공 대리점 계약'],
      },
      {
        year: '2010',
        entries: [
          '05월 탄성포장재 및 우레탄 바닥재 조달청 종합쇼핑몰 등록',
          '06월 독일 실리칼 바닥재 조달청 종합쇼핑몰 등록',
        ],
      },
      {
        year: '2011',
        entries: ['03월 환경친화형 하이브리드 크린플로어링 개발'],
      },
      {
        year: '2012',
        entries: ['05월 우레탄 탄성복합 하수방수 공법 개발'],
      },
      {
        year: '2014',
        entries: [
          '01월 무기물 연성 세라믹 아쿠아크리트 개발 착수',
          '07월 매쉬섬유 복합공법 특허 취득',
        ],
      },
      {
        year: '2015',
        entries: [
          '03월 외부 투명 도막재 마감 공법 고도화',
          '05월 아쿠아크리트 시제품 개발 및 현장 적용',
        ],
      },
      {
        year: '2016',
        entries: [
          '08월 무기물 연성 아쿠아크리트 바닥재 개발',
          '12월 PVC SHEET 신기술(NET) 806호 공법 협약 체결',
        ],
      },
      {
        year: '2017',
        entries: [
          '01월 시설 구조물 세정 복원 공법 도입',
          '03월 아쿠아크리트 국내 다수 현장 적용',
          '09월 아쿠아크리트 해외 프로젝트 적용',
        ],
      },
      {
        year: '2018',
        entries: [
          '01월 표준 공장 설립',
          '02월 아쿠아크리트 바닥 및 벽체 마감재 특허',
          '02월 친환경 복원 공법 조성물 특허',
          '10월 외단열 불연 마감재 현장 적용',
        ],
      },
      {
        year: '2019',
        entries: [
          '01~12월 아쿠아크리트 및 외단열 불연 마감재 연간 시공',
          '12월 정부 신기술·신제품(NEP) 인증',
        ],
      },
      {
        year: '2020',
        entries: [
          '01월 신제품(NEP) 협회 등록 및 한국도로공사 기술마켓 등록',
          '02월 폴리우레아 단열 복합 방수 공법 특허',
          '03월 외단열 시공 방법 특허(고정철물 활용)',
          '12월 방수 시공용 앵커 패스 시트 특허',
        ],
      },
      {
        year: '2021',
        entries: [
          '07월 실리콘계 이주젤 단열 복합 방수 시공 방법 특허',
          '08월 단열 복합 방수 시트 조성물 · 시공 공법 특허',
          '08월 아쿠아크리트 단열 복합 방수 조성물 및 시공 방법 특허',
        ],
      },
      {
        year: '2022',
        entries: ['03월 SKY FLOOR 도장형 바닥재 개발'],
      },
    ],
    closing: {
      title: '지금 필요한 솔루션을 함께 설계합니다',
      description:
        '위생, 안전, 단열 등 현안이 무엇인지 알려 주세요. Cleantech의 엔지니어가 현장을 직접 진단하고, 최적의 바닥 및 방수 시스템을 제안해 드립니다.',
      cta: '문의 페이지로 이동',
    },
  },
  en: {
    hero: {
      eyebrow: 'ABOUT CLEANTECH',
      title: 'Flooring innovators since 2000',
      description:
        'Cleantech began as a specialist contractor and grew into a materials developer trusted by food, pharma, and logistics facilities. We combine inorganic ceramic flooring with advanced waterproofing to deliver hygienic, durable environments.',
      highlight: {
        label: 'Focus',
        items: ['Inorganic ceramic flooring', 'Fire-safe thermal systems', 'Public & industrial references'],
      },
    },
    timelineTitle: 'Milestones',
    timeline: [
      {
        year: '2000',
        entries: [
          'Incorporated Cleantech Development Co., Ltd.',
          'Licensed as a specialized contractor for waterproofing and coating works',
        ],
      },
      {
        year: '2001',
        entries: ['Registered as partner with K-Water, Samsung C&T, and Samsung Fine Chemicals'],
      },
      {
        year: '2008',
        entries: ['Signed agency agreement with SILIKAL Germany for Korea operations'],
      },
      {
        year: '2010',
        entries: [
          'Registered elastic and urethane flooring in the Korean Public Procurement Service',
          'Added SILIKAL flooring to the national procurement catalog',
        ],
      },
      {
        year: '2011',
        entries: ['Developed hybrid eco-friendly “Clean Flooring” system'],
      },
      {
        year: '2012',
        entries: ['Invented urethane-elastic sewer waterproofing method'],
      },
      {
        year: '2014',
        entries: [
          'Initiated Aqua-Crete inorganic ceramic flooring development',
          'Secured patent for mesh fiber composite method',
        ],
      },
      {
        year: '2015',
        entries: [
          'Enhanced transparent coating finish methodology',
          'Delivered first field applications of Aqua-Crete prototypes',
        ],
      },
      {
        year: '2016',
        entries: [
          'Completed Aqua-Crete inorganic flooring formulation',
          'Signed NET-806 PVC sheet technology partnership',
        ],
      },
      {
        year: '2017',
        entries: [
          'Introduced facility refurbishment cleaning system',
          'Rolled out Aqua-Crete across domestic projects',
          'Applied Aqua-Crete to overseas sites',
        ],
      },
      {
        year: '2018',
        entries: [
          'Established standardized manufacturing plant',
          'Filed patents for Aqua-Crete wall & floor finishes and eco restoration materials',
          'Executed non-combustible exterior insulation projects',
        ],
      },
      {
        year: '2019',
        entries: [
          'Delivered annual portfolio of Aqua-Crete and fire-safe exterior works',
          'Received Korea NEP (New Excellent Product) certification',
        ],
      },
      {
        year: '2020',
        entries: [
          'Registered NEP products and joined Korea Expressway Corporation tech market',
          'Awarded patents for polyurethane hybrid waterproofing and exterior fixing systems',
          'Secured patent for anchoring waterproof sheet',
        ],
      },
      {
        year: '2021',
        entries: [
          'Patented silicone-gel thermal waterproofing method',
          'Expanded IP portfolio for composite waterproof sheets and application methods',
          'Registered patents for Aqua-Crete thermal waterproof compositions',
        ],
      },
      {
        year: '2022',
        entries: ['Launched SKY FLOOR resinous flooring line'],
      },
    ],
    closing: {
      title: 'Let’s plan your next resilient floor',
      description:
        'Share the operational risks you face—hygiene, thermal cycling, heavy loads—and we will respond with a tailored Aqua-Crete or SKY FLOOR specification.',
      cta: 'Go to contact page',
    },
  },
};

export default class CompanyController extends Controller {
  @service locale;

  get copy() {
    return DATA[this.locale.current] ?? DATA.ko;
  }
}
