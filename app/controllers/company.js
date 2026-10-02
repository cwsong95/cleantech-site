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
    mvc: {
      eyebrow: '우리의 방향',
      title: 'Mission · Vision · Core Values',
      mission: {
        key: 'MISSION',
        tag: '우리는 왜 존재하는가',
        head: '우리는 가장 낮은 곳에서 가치를 창조합니다.',
        sub: 'We create value from the ground up.',
        desc: '사람이 일하는 터전을 안전하게, 그 열매를 이웃에게.',
      },
      vision: {
        key: 'VISION',
        tag: '어디로 가는가',
        head: '기술 · 신뢰 · 세계',
        sub: 'Technology · Trust · To the World',
        desc: '우리의 기술로 신뢰받는 제품을, 세계 고객에게.',
      },
      core: {
        key: 'CORE VALUES',
        tag: '어떻게 일하는가',
        head: '정직 · 견고 · 청결 · 섬김 · 나눔',
        sub: 'Sincerity · Steadfastness · Sanctification · Servanthood · Stewardship',
        desc: '정직이 첫 번째입니다. 정직이 무너지면 나머지 넷은 마케팅 문구가 됩니다.',
      },
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
          'G-PASS 기업 지정',
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
          '기업부설연구소 설립',
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
      title: 'Visit Us',
      description:
        'C-406, 114 Beobwon-ro, Songpa-gu, Seoul, Korea (near Garden Five and the Munjeong legal district)',
      linkLabel: 'Open in Google Maps',
    },
    mvc: {
      eyebrow: 'Our Direction',
      title: 'Mission · Vision · Core Values',
      mission: {
        key: 'MISSION',
        tag: 'Why we exist',
        head: 'We create value from the ground up.',
        sub: 'Why we exist',
        desc: 'We keep the ground people work on safe, and share the fruits with our neighbors.',
      },
      vision: {
        key: 'VISION',
        tag: 'Where we are headed',
        head: 'Technology · Trust · To the World',
        sub: 'Where we are headed',
        desc: 'Trusted products built on our own technology, delivered to customers around the world.',
      },
      core: {
        key: 'CORE VALUES',
        tag: 'How we work',
        head: 'Sincerity · Steadfastness · Sanctification · Servanthood · Stewardship',
        sub: 'How we work',
        desc: 'Sincerity comes first. Without it, the other four are nothing more than marketing slogans.',
      },
    },
    timelineTitle: 'Milestones by Year',
    timeline: [
      {
        year: '2000',
        entries: [
          'CleanTech Development Co., Ltd. incorporated',
          'Registered as a plastering & waterproofing contractor',
          'Registered as a painting contractor',
        ],
      },
      {
        year: '2012',
        entries: ['Developed polyurea elastic composite waterproofing system'],
      },
      {
        year: '2013',
        entries: [
          'Developed wire-reinforced fiberglass mesh system',
          'Introduced SILIKAL (Germany) coating-type flooring products',
        ],
      },
      {
        year: '2014',
        entries: [
          'Began development of Aqua-Crete inorganic non-combustible material',
        ],
      },
      {
        year: '2015',
        entries: [
          'Field trial of Aqua-Crete inorganic non-combustible floor finish',
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
          'Developed facility and structure restoration system',
          'Field trial of Aqua-Crete inorganic non-combustible exterior wall finish',
        ],
      },
      {
        year: '2018',
        entries: [
          'SILIKAL (Germany) coating-type flooring awarded Eco-Label certification',
          'Established production plant for Aqua-Crete inorganic non-combustible materials',
          'Aqua-Crete inorganic non-combustible material awarded Eco-Label certification',
          'Developed transparent waterproofing material and system for exterior walls',
          'Commenced production and field application of Aqua-Crete non-combustible products',
        ],
      },
      {
        year: '2019',
        entries: [
          'Achieved ISO 9001 certification',
          'Aqua-Crete non-combustible material awarded government New Excellent Product (NEP) certification',
          'Began development of SKY Floor coating-type flooring',
          'Began development of SKY Flex water-cured membrane waterproofing',
        ],
      },
      {
        year: '2020',
        entries: [
          'Designated a G-PASS company',
          'Established a dedicated R&D division (corporate research institute)',
          'Registered with the Korea Expressway Corporation Technology Market',
          'Aqua-Crete non-combustible material awarded Eco-Label certification',
          'Aqua-Crete non-combustible material awarded Green Technology certification',
          'Aqua-Crete non-combustible material awarded Q-Mark certification',
          'Seismic performance of Aqua-Crete non-combustible material verified by test',
          'Developed mechanical-anchor reinforcement system for the Aqua-Crete exterior insulation system',
          'Field trial of SKY Floor coating-type flooring',
        ],
      },
      {
        year: '2021',
        entries: [
          'Developed aerogel-based insulated composite waterproofing system',
          'Developed waterproofing system using Aqua-Crete non-combustible material',
          'Aqua-Crete non-combustible material awarded KC Hygiene & Safety certification',
        ],
      },
      {
        year: '2022',
        entries: [
          'Field trial of SKY Flex water-based membrane waterproofing',
          'Developed membrane waterproofing material for exterior walls',
          'Commenced field application of SKY Floor coating-type flooring',
          'Certified as a Korean Venture Enterprise',
        ],
      },
      {
        year: '2023',
        entries: [
          'Developed SKY-AU polyaspartic polyurea product',
          'Polyurea membrane waterproofing registered on the Public Procurement Service (PPS) marketplace',
        ],
      },
      {
        year: '2024',
        entries: [
          'Licensed as a metal roofing, window & door, and building assembly contractor',
          'Developed SKY-AU polyaspartic polyurea multi-purpose primer',
          'Introduced sloped flashing system to prevent leaks around exterior wall openings',
          'Introduced crack reinforcement and seismic strengthening system for exterior face brick',
        ],
      },
      {
        year: '2025',
        entries: [
          'Established corporate R&D center',
          'SKY Floor coating-type flooring awarded Group Standard certification',
          'SKY Floor coating-type flooring awarded Eco-Label certification',
          'Aqua-Crete exterior insulation system passed the full-scale mock-up fire test under the Ministry of Land, Infrastructure and Transport notice',
          'Developed SKY-AU polyaspartic polyurea flooring product',
        ],
      },
      {
        year: '2026',
        entries: [
          'SKY Floor coating-type flooring registered on the Public Procurement Service (PPS) marketplace',
          'Developed SKY-AU polyaspartic polyurea waterproofing product',
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

  get mvc() {
    return this.copy.mvc;
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
