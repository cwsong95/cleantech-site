import Controller from '@ember/controller';
import { service } from '@ember/service';

const DATA = {
  ko: {
    map: {
      title: '찾아오시는 길',
      description:
        '서울특별시 송파구 법원로 114 C-406 (문정동 가든파이브 · 법조타운 인근)',
      linkLabel: '구글 지도 열기',
    },
    timelineTitle: '연도별 주요 성과',
    timeline: [
      {
        year: '2000',
        entries: [
          '크린텍개발 법인 설립',
          '미장방수공사업 등록',
          '도장공사업 등록',
        ],
      },
      {
        year: '2012',
        entries: ['폴리우레아 탄성복합방수공법 개발'],
      },
      {
        year: '2013',
        entries: [
          '와이어가 함유된 유리섬유메쉬공법 개발',
          '도막형바닥재 독일 실리칼 제품 도입',
        ],
      },
      {
        year: '2014',
        entries: ['무기 불연 아쿠아크리트 제품개발 착수'],
      },
      {
        year: '2015',
        entries: ['무기 불연 바닥마감재 아쿠아크리트 시제품 현장적용'],
      },
      {
        year: '2016',
        entries: ['무기 불연 외벽마감재 아쿠아크리트 제품개발'],
      },
      {
        year: '2017',
        entries: [
          '시설 구조물 복원 공법 개발',
          '무기 불연 외벽마감재 아쿠아크리트 시제품 현장적용',
        ],
      },
      {
        year: '2018',
        entries: [
          '도막형바닥재 독일 실리칼 제품 친환경 인증 획득',
          '무기 불연재 아쿠아크리트 제품 생산공장설립',
          '무기 불연재 아쿠아크리트 제품 친환경 인증 획득',
          '외부벽체 투명방수재 제품 공법개발',
          '불연재 아쿠아쿠아크리트 제품 생산 및 현장적용',
        ],
      },
      {
        year: '2019',
        entries: [
          'ISO 9001 인증 획득',
          '불연재 아쿠아크리트 제품 정부 신기술·신제품(NEP) 인증 획득',
          '도막형바닥재(SKY-Floor) 제품 개발착수',
          '물을 이용한 수경화도막방수재(SKY Flex) 제품개발착수',
        ],
      },
      {
        year: '2020',
        entries: [
          '기업부설연구소 연구전담부서 설립',
          '한국도로공사 기술마켓 등록',
          '불연재 아쿠아크리트 친환경 인증 획득',
          '불연재 아쿠아크리트 녹색기술인증 획득',
          '불연재 아쿠아크리트 Q-Mark인증획득',
          '불연재 아쿠아크리트 내진성능 인증시험 확인',
          '불연재 아쿠아크리트 외단열시스템 고정철물보강공법개발',
          '도막형바닥재(SKY-Floor) 시제품 현장적용',
        ],
      },
      {
        year: '2021',
        entries: [
          '에어로젤을 이용한단열복합방수공법 개발',
          '불연재 아쿠아크리트를 이용한 방수공법개발',
          '불연재 아쿠아크리트 위생안전기준(kc)인증 획득',
        ],
      },
      {
        year: '2022',
        entries: [
          '물을 이용한 도막방수제(SKY FLEX) 시제품 현장적용',
          '외부벽체 도막방수재 제품 개발',
          '도막형바닥재(SKY-Floor) 제품 현장적용',
          '한국벤처기업 인증획득',
        ],
      },
      {
        year: '2023',
        entries: [
          '폴리아스파틱을 이용한 폴리우레아 제품(SKY AU)개발',
          '폴리우레아 도막방수재 조달청 쇼핑몰 등록',
        ],
      },
      {
        year: '2024',
        entries: [
          '금속지붕창호건축물조립공사업면허등록',
          '폴리아스파틱을 이용한 폴리우레아 다용도 프라이머 제품(SKY AU)개발',
          '외부벽체 창호주위 누수방지를 위한 슬로프 후레싱 공법 도입',
          '외부벽체 치장벽돌 균열보강 및 내진성능을 위한 공법 도입',
        ],
      },
      {
        year: '2025',
        entries: [
          '도막형바닥재(SKY-Floor) 제품 단체표준 인증 획득',
          '도막형바닥재(SKY-Floor) 제품 친환경 인증 획득',
          '불연재 아쿠아크리트 외단열시스템 국토해양부고시 실물모형시험인증성능획득',
          '폴리아스파틱을 이용한 폴리우레아 바닥재 제품(SKY AU)개발',
        ],
      },
      {
        year: '2026',
        entries: [
          '도막형바닥재(SKY-Floor) 제품 조달청 쇼핑몰 등록',
          '폴리아스파틱을 이용한 폴리우레아 방수재 제품(SKY AU) 개발',
        ],
      },
    ],
  },
  en: {
    map: {
      title: 'Visit us',
      description:
        '114 Beobwon-ro, Songpa-gu, Seoul (Garden Five / Legal Town area), Suite C-406',
      linkLabel: 'Open in Google Maps',
    },
    timelineTitle: 'Milestones',
    timeline: [
      {
        year: '2000',
        entries: [
          'Incorporated CleanTech Development Co., Ltd.',
          'Registered plastering and waterproofing works',
          'Registered painting works',
        ],
      },
      {
        year: '2012',
        entries: ['Developed polyurea elastic composite waterproofing method'],
      },
      {
        year: '2013',
        entries: [
          'Developed wire-reinforced fiberglass mesh method',
          'Introduced SILIKAL Germany coating-type flooring products',
        ],
      },
      {
        year: '2014',
        entries: [
          'Began development of Aqua-Crete inorganic non-combustible product',
        ],
      },
      {
        year: '2015',
        entries: [
          'Field-applied prototype Aqua-Crete inorganic non-combustible floor finish',
        ],
      },
      {
        year: '2016',
        entries: [
          'Developed Aqua-Crete inorganic non-combustible exterior wall finish',
        ],
      },
      {
        year: '2017',
        entries: [
          'Developed facility structure restoration method',
          'Field-applied prototype Aqua-Crete inorganic non-combustible exterior wall finish',
        ],
      },
      {
        year: '2018',
        entries: [
          'Obtained eco-friendly certification for SILIKAL Germany coating-type flooring products',
          'Established production plant for Aqua-Crete inorganic non-combustible materials',
          'Obtained eco-friendly certification for ceramic products',
          'Developed exterior wall transparent waterproofing material and method',
          'Produced and field-applied Aqua-Crete non-combustible products',
        ],
      },
      {
        year: '2019',
        entries: [
          'Obtained ISO 9001 certification',
          'Obtained government new technology and New Excellent Product (NEP) certification for Aqua-Crete non-combustible products',
          'Began development of SKY-Floor coating-type flooring',
          'Began development of SKY Flex water-curing coating waterproofing material',
        ],
      },
      {
        year: '2020',
        entries: [
          'Established a dedicated R&D department under the corporate research institute',
          'Registered with Korea Expressway Corporation Technology Market',
          'Obtained eco-friendly certification for Aqua-Crete non-combustible material',
          'Obtained Green Technology certification for Aqua-Crete non-combustible material',
          'Obtained Q-Mark certification for Aqua-Crete non-combustible material',
          'Verified seismic performance test results for Aqua-Crete non-combustible material',
          'Developed fixed-hardware reinforcement method for Aqua-Crete exterior insulation system',
          'Field-applied SKY-Floor prototypes',
        ],
      },
      {
        year: '2021',
        entries: [
          'Developed aerogel-based thermal insulation composite waterproofing method',
          'Developed waterproofing method using Aqua-Crete non-combustible material',
          'Obtained KC hygiene safety standard certification for Aqua-Crete non-combustible material',
        ],
      },
      {
        year: '2022',
        entries: [
          'Field-applied prototype SKY FLEX water-based coating waterproofing material',
          'Developed exterior wall coating waterproofing material',
          'Field-applied SKY-Floor products',
          'Obtained Korea Venture Enterprise certification',
        ],
      },
      {
        year: '2023',
        entries: [
          'Developed SKY AU polyurea product using polyaspartic technology',
          'Registered polyurea coating waterproofing material in the Korea Public Procurement Service shopping mall',
        ],
      },
      {
        year: '2024',
        entries: [
          'Registered license for metal roofing, windows, doors, and building assembly works',
          'Developed SKY AU polyaspartic polyurea multipurpose primer',
          'Introduced sloped flashing method to prevent leakage around exterior wall windows',
          'Introduced method for crack reinforcement and seismic performance of exterior wall facing bricks',
        ],
      },
      {
        year: '2025',
        entries: [
          'Obtained group standard certification for SKY-Floor products',
          'Obtained eco-friendly certification for SKY-Floor products',
          'Obtained full-scale mock-up test performance certification under the Ministry of Land, Transport and Maritime Affairs notice for Aqua-Crete exterior insulation system',
          'Developed SKY AU polyaspartic polyurea flooring product',
        ],
      },
      {
        year: '2026',
        entries: [
          'Registered SKY-Floor products in the Korea Public Procurement Service shopping mall',
          'Developed SKY AU polyaspartic polyurea waterproofing material',
        ],
      },
    ],
  },
};

export default class CompanyController extends Controller {
  @service locale;

  get copy() {
    return DATA[this.locale.current] ?? DATA.ko;
  }

  get timeline() {
    const timeline = this.copy.timeline ?? [];
    return [...timeline].sort((a, b) => Number(b.year) - Number(a.year));
  }

  get timelineRange() {
    const years = this.timeline.map(({ year }) => Number(year));
    const firstYear = Math.min(...years);
    const lastYear = Math.max(...years);

    if (this.locale.isKorean) {
      return `${firstYear}년부터 ${lastYear}년까지`;
    }

    return `${firstYear} to ${lastYear}`;
  }
}
