import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

/**
 * SKY Flex (내진구조형 수경화도막방수공법) product page copy.
 *
 * Korean text is taken verbatim from the Sky-Flex catalog
 * (수경화_카달로그 2026-10). English is a translation of the same catalog.
 * Keep both locales structurally identical — the template renders either.
 */

// NOTE: image paths must be full string literals so broccoli-asset-rev can
// fingerprint-rewrite them (template-literal concatenation is not rewritten).

// Inline line-icon paths (24×24 viewBox, stroke-based), keyed by name.
const ICON = {
  flask:
    'M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3M8.5 15h7',
  drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11zM9.5 14a2.5 2.5 0 0 0 2.5 2.5',
  cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9',
  shield: 'M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6zM9 12l2 2 4-4',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
};

const COPY = {
  ko: {
    metaTitle:
      '스카이 플렉스 (SKY Flex) 내진구조형 수경화도막방수공법 | 크린텍개발',
    hero: {
      srTitle: 'SKY FLEX — We Create Value',
      tagline: '물을 경화제로 사용하는 내진구조형 수경화도막방수공법',
      pills: ['균열 저항 · 내진', '습윤 바탕면 시공', '동절기 경화'],
      metrics: [
        { n: '수경화', l: '물(경화제)과 반응하여 경화' },
        { n: '무용제', l: '유기용제 무첨가' },
        { n: '내진', l: 'Stainless Wire Glass Mesh 일체 결합' },
        { n: '동절기', l: '영하기온에서도 경화반응' },
      ],
    },
    intro: {
      eyebrow: 'Overview',
      title: 'Sky Flex 소개',
      body: '내진구조형 수경화도막방수공법 Sky-Flex는 무용제 수지 주제에 물을 혼합하면 물이 희석제가 아닌 경화제로 작용하여 이음매 없는 도막 방수층을 형성합니다. 첨가제로 사용하는 기능성 무기질 분말이 경화 중 생기는 기포를 억제하고 도막을 보강하며, 벽체에서도 흘러내림 없이 두께를 확보하게 해 줍니다. Stainless wire glass mesh sheet와 수경화도막방수층과의 강력한 결합구조로 구성되어 구조물의 움직임에 추종하여 균열대응성능을 발현하는 장기적인 내구성능의 방수공법입니다.',
      componentsTitle: '제품 구성',
      components: [
        {
          icon: ICON.flask,
          name: 'Sky-Flex 주제',
          value: '무용제 방수재 수지',
        },
        { icon: ICON.drop, name: 'Sky-Flex 경화제', value: '물' },
        {
          icon: ICON.cube,
          name: 'Sky-Flex 첨가제',
          value: '기능성 무기질 분말 (도막용 / 벽체용)',
        },
        {
          icon: ICON.shield,
          name: 'Sky-Flex 보강재',
          value: 'Stainless wire glass mesh sheet',
        },
      ],
      diagramTitle: '시공 상세도',
      layers: [
        { k: '수경화도막방수재', v: 'Sky Top coat', c: 'top' },
        { k: '수경화도막방수재', v: 'Sky Flex Main coat', c: 'main' },
        { k: '수경화도막방수재', v: 'Sky Flex base coat', c: 'base' },
        { k: '내진보강형', v: 'Sky Wire Glass Mesh Sheet', c: 'mesh' },
        { k: '수경화도막방수재', v: 'Sky Flex Primer', c: 'primer' },
        { k: '', v: '콘크리트 구조체', c: 'concrete' },
      ],
      thickness: '1~10mm',
      diagramCaption: '내진구조형 수경화도막방수공법 Sky-Flex 시공 상세도',
    },
    features: {
      eyebrow: 'Properties',
      title: 'Sky Flex 제품 특성',
      lead: 'Sky-Flex의 환경적·물리적·시공적 특성을 한눈에 확인해 보세요.',
      groups: [
        {
          id: 'env',
          icon: ICON.leaf,
          title: '환경적 특성',
          items: [
            {
              img: '/images/sky-flex/feat-odor.jpg',
              h: '냄새 없음',
              p: '신너 등 유기용제가 없어 작업 중 냄새가 거의 나지 않습니다.',
            },
            {
              img: '/images/sky-flex/feat-voc.jpg',
              h: '유해물질 저감',
              p: '용제 유래 VOC가 발생하지 않아 작업자와 입주자의 건강을 지킵니다.',
            },
            {
              img: '/images/sky-flex/feat-fire.jpg',
              h: '화재 안전',
              p: '물과 반응하는 경화 방식 화재 원인인 신너를 사용하지 않습니다.',
            },
          ],
        },
        {
          id: 'phys',
          icon: ICON.shield,
          title: '물리적 특성',
          items: [
            {
              img: '/images/sky-flex/feat-crack.jpg',
              h: '균열 저항 · 내진',
              p: '스테인리스 와이어 글라스 메시시트와 일체 결합해 구조체 균열에 대응합니다.',
            },
            {
              img: '/images/sky-flex/feat-damp.jpg',
              h: '습윤 바탕면 시공',
              p: '습기가 남은 콘크리트 바탕에도 직접 시공·부착됩니다.',
            },
            {
              img: '/images/sky-flex/feat-winter.jpg',
              h: '동절기 경화',
              p: '영하의 가혹한 환경에서도 경화 반응이 진행됩니다.',
            },
          ],
        },
        {
          id: 'work',
          icon: ICON.bolt,
          title: '시공적 특성',
          items: [
            {
              img: '/images/sky-flex/feat-schedule.jpg',
              h: '공기 단축',
              p: '한 번에 두꺼운 도막 형성·속경형으로 도포 횟수와 공기를 줄입니다.',
            },
            {
              img: '/images/sky-flex/feat-confined.jpg',
              h: '밀폐 공간 안전',
              p: '지하·실내 작업 시 질식·화재 사고 위험을 낮춥니다.',
            },
            {
              img: '/images/sky-flex/feat-substrate.jpg',
              h: '다양한 바탕면',
              p: '콘크리트는 물론 목재·금속·타일 바탕에도 적용됩니다.',
            },
          ],
        },
      ],
    },
    structure: {
      eyebrow: 'Structure',
      title: 'Sky Flex 구조 특성',
      subtitle: 'Stainless Wire Glass Mesh Sheet + Sky-Flex 일체 결합 구조',
      body: '건물은 지진 · 진동 · 온도 신축 · 건조수축으로 끊임없이 움직이고, 그 움직임은 바탕 균열로 나타납니다. Sky-Flex 내진구조형은 스테인리스 와이어 로프를 삽입한 와이어 글라스 메시를 수경화 도막 속에 일체로 결합해, 구조체가 움직여도 방수층이 끊어지지 않고 따라가도록 설계한 방수공법입니다.',
      photos: [
        {
          img: '/images/sky-flex/mesh-rope.jpg',
          cap: '스테인리스 와이어 로프',
        },
        {
          img: '/images/sky-flex/mesh-glass.jpg',
          cap: '와이어 삽입 글라스 메시',
        },
        {
          img: '/images/sky-flex/mesh-install.jpg',
          cap: '와이어 글라스 메시 설치 작업',
        },
      ],
      compare: {
        plain: {
          title: '일반 도막방수',
          flow: ['응력집중', '도막 파단·들뜸', '누수'],
        },
        flex: {
          title: 'Sky-Flex 내진구조형',
          flow: ['메시가 응력을 넓게 분산', '방수층 연속 유지'],
          note: 'Stainless Wire Glass Mesh Sheet (도막 내부 일체화)',
        },
      },
      points: [
        {
          h: '응력 분산',
          p: '균열부에 집중되는 인장 응력을 메시가 넓게 나누어 도막의 국부 파단을 막습니다.',
        },
        {
          h: '균열 가교',
          p: '바탕 균열이 벌어져도 와이어 메시와 도막이 균열 위를 연결해 방수층이 끊어지지 않습니다.',
        },
        {
          h: '일체형 복합 방수층',
          p: '메시가 도막 속에 함침되어 보강 복합막을 이루고 설계 두께를 균일하게 확보합니다.',
        },
        {
          h: '박리 · 탈락 방지',
          p: '건물 거동에 따른 계면 응력을 줄여 들뜸 · 박리 · 탈락을 억제합니다.',
        },
      ],
      meshStepsTitle: '메시 부착 순서',
      meshSteps: [
        {
          img: '/images/sky-flex/mesh-step-1.jpg',
          h: 'Wire Mesh Sheet 전개',
          p: '프라이머 건조 후 롤을 풀어 주름 없이 전개',
        },
        {
          img: '/images/sky-flex/mesh-step-2.jpg',
          h: 'Wire Mesh Sheet 부착',
          p: '바탕에 밀착시키며 전면 부착',
        },
        {
          img: '/images/sky-flex/mesh-step-3.jpg',
          h: '전면 부착 완료',
          p: '시트 이음부는 겹침 시공',
        },
        {
          img: '/images/sky-flex/mesh-step-4.jpg',
          h: 'Base Coat 함침',
          p: '메시가 도막 속에 완전히 묻히도록 도포',
        },
      ],
      keyTitle: '시공 포인트',
      keyPoints: [
        {
          h: '조인트 · 균열 선보강',
          p: '신축 줄눈과 균열부를 먼저 보강한 뒤 메시를 부착합니다.',
        },
        {
          h: '주름 들뜸 없이 전면 부착',
          p: '시트가 바탕에 밀착되도록 펴가며 부착합니다.',
        },
        {
          h: '이음부 겹침',
          p: '시트 이음부는 10mm 이상 겹쳐 연속성을 확보합니다.',
        },
        {
          h: '완전 함침 · 피복',
          p: 'Base Coat로 메시를 함침하고, Main Coat로 메시가 드러나지 않게 덮습니다.',
        },
      ],
      areasTitle: '권장 부위',
      areas: [
        '옥상 슬래브',
        '신축줄눈 인접부',
        '균열이 많은 노후 바탕',
        '구조물 이음부',
        '진동이 있는 기계실 상부',
      ],
    },
    tech: {
      eyebrow: 'Specification',
      title: 'Sky Flex 구성 및 배합',
      lead: '제품 구성, 배합 비율, 혼합 방법과 기존 공법 비교, 시공 시 주의사항입니다. 항목을 눌러 펼쳐 보세요.',
      composition: {
        title: '제품 구성',
        head: ['구성품', '내용', '사용 기준'],
        rows: [
          [
            'Sky-Flex Primer',
            '무용제 · 2액형 전용 프라이머',
            '0.3~0.5kg/m² · 건조 6시간(20°C)',
          ],
          ['Sky-Flex 주제', '무용제 Sky Flex 방수재', '배합 기준 100'],
          [
            '경화수 (물)',
            '깨끗한 물-여름철 냉수, 겨울철 온수 사용 권장',
            '마지막에 투입',
          ],
          [
            '기능성 분말-도막용',
            '셀프레벨링 바닥용 도막 형성',
            '바닥 · 수평면',
          ],
          [
            '기능성 분말-벽체용',
            '흐름이 없는 크림 타입 (실란트형)',
            '벽체 · 코너 · 크랙 보수',
          ],
          ['촉매', '경화 촉진', '주제 대비 0.10'],
          [
            'Stainless Wire Glass Mesh Sheet',
            '내진보강형 보강 시트',
            '내진보강형 시스템',
          ],
          ['Sky Top Coat', '노출공법 상도 마감재', '노출공법'],
        ],
      },
      ratio: {
        title: '배합 비율 (중량비)',
        head: [
          '구분',
          '주제',
          '분말',
          '물',
          '촉매',
          '비중',
          '1회 최대 도포두께',
        ],
        rows: [
          ['바닥용', '100', '25', '25', '0.10', '1.17', '제한 없음'],
          ['벽체용', '100', '30', '30', '0.10', '1.19', '4mm'],
        ],
      },
      mixing: {
        title: '혼합 방법',
        steps: [
          {
            h: '주제+촉매+분말',
            p: '주제에 촉매와 기능성 분말을 넣고 저속으로 예비 혼합합니다.',
          },
          {
            h: '물은 마지막에',
            p: '물을 넣는 순간 경화가 시작되므로 반드시 마지막에 투입합니다.',
          },
          {
            h: '저속 교반',
            p: '800 rpm 이하, 교반 날개를 용기 하부에 두어 공기 혼입을 막습니다.',
          },
          {
            h: '4~5분 교반',
            p: '물은 육안으로 혼합여부를 확인하기 어려우므로 시간을 지킵니다.',
          },
          {
            h: '20분 이내 사용',
            p: '교반 시작 후 20분 (20°C) 이내에 도포를 마칩니다.',
          },
        ],
      },
      compare: {
        title: '기존 공법 비교',
        head: ['구분', 'Sky-Flex (수경화)', '일반 용제형 2액 우레탄'],
        rows: [
          ['경화 방식', '물(경화제)과 반응하여 경화', '주제,경화제 2액 반응'],
          ['유기용제', '무첨가', '희석 용제 사용 (특히 프라이머)'],
          ['냄새 · 유증기', '거의 없음', '용제 냄새 · 유증기 발생'],
          [
            '화재 위험 · 화기 작업',
            '낮음-타 공종 병행 유리',
            '화기 작업 제한 필요',
          ],
          ['습윤 바탕', '다소 습윤한 바탕에도 시공', '충분한 건조 후 시공'],
          [
            '밀폐 공간 작업',
            '최소 보호구로 작업 가능',
            '환기 설비 · 보호구 필수',
          ],
          ['공정 관리', '바탕 건조 대기 단축', '건조 대기 · 작업구간 통제'],
          ['동절기 경화', '영하기온에서도 경화반응', '영하온도 시공 제한'],
        ],
      },
      cautions: {
        title: '시공 시 주의사항',
        items: [
          '바탕면의 열화 · 파손 · 균열 · 누수 · 박리 부위는 사전에 보수 · 보강합니다.',
          '바탕면은 다소 습윤해도 시공 가능하나, 고인 물은 반드시 제거합니다.',
          '물은 경화제이므로 가장 마지막에 투입하고, 교반 시작 후 20분(20°C) 이내에 사용합니다.',
          '800 rpm 이하 저속으로 4~5분 교반하며, 교반 날개를 용기 하부에 두어 공기 혼입을 막습니다.',
          '벽체 · 수직면은 1회 도포 두께 4 mm 이하로 시공합니다.',
          '규사 살포 시 한 번에 과다 살포하여 흘러내리지 않도록 나누어 살포합니다.',
          '작업 전 안전 장비를 점검하고, 작업 중 보호장갑 · 보안경을 착용합니다.',
        ],
      },
    },
    sequence: {
      eyebrow: 'Procedure',
      title: 'Sky Flex 시공순서',
      lead: '노출공법과 비노출공법의 8단계 시공 순서입니다.',
      tabsAria: '시공 공법 선택',
      stepLabel: 'STEP',
      tabs: [
        {
          id: 'exposed',
          label: '노출공법',
          steps: [
            {
              img: '/images/sky-flex/exp-1.jpg',
              h: '공사 전 바탕 확인',
              p: '열화 · 균열 · 누수 · 박리 상태 점검',
            },
            {
              img: '/images/sky-flex/exp-2.jpg',
              h: '바탕면 연마 · 청소',
              p: '레이턴스 · 이물질 제거, 분진 흡입',
            },
            {
              img: '/images/sky-flex/exp-3.jpg',
              h: '프라이머 도포',
              p: '0.3~0.5 kg/m², 20°C 6시간 건조',
            },
            {
              img: '/images/sky-flex/exp-4.jpg',
              h: '조인트 · 균열 보강',
              p: '신축 줄눈 · 균열부 선시공',
            },
            {
              img: '/images/sky-flex/exp-5.jpg',
              h: '입상부 · 코너 보강',
              p: '파라펫 하부 코너, 드레인 주위',
            },
            {
              img: '/images/sky-flex/exp-6.jpg',
              h: 'Mesh Sheet 부착',
              p: 'Stainless Wire Glass Mesh 전면 부착',
            },
            {
              img: '/images/sky-flex/exp-7.jpg',
              h: 'Base · Main Coat',
              p: '도막용 분말 배합, 설계 두께 도포',
            },
            {
              img: '/images/sky-flex/exp-8.jpg',
              h: 'Top Coat 마감',
              p: 'Sky Top Coat 도포 후 양생 · 완료',
            },
          ],
        },
        {
          id: 'covered',
          label: '비노출공법',
          steps: [
            {
              img: '/images/sky-flex/cov-1.jpg',
              h: '바탕면 연마',
              p: '레이턴스 제거, 바탕 강도 확인',
            },
            {
              img: '/images/sky-flex/cov-2.jpg',
              h: '분진 제거',
              p: '진공 흡입 청소',
            },
            {
              img: '/images/sky-flex/cov-3.jpg',
              h: '프라이머 도포',
              p: '전용 프라이머 균일 도포',
            },
            {
              img: '/images/sky-flex/cov-4.jpg',
              h: '조인트 · 균열 보강',
              p: '벽체 · 바닥 코너 및 균열부 선보강',
            },
            {
              img: '/images/sky-flex/cov-5.jpg',
              h: '벽체 도포',
              p: '벽체용 분말 배합, 1회 4mm 이하',
            },
            {
              img: '/images/sky-flex/cov-6.jpg',
              h: '바닥 도포',
              p: '도막용 분말 배합, 셀프레벨링',
            },
            {
              img: '/images/sky-flex/cov-7.jpg',
              h: '규사 살포',
              p: '방수층 위 규사 살포 - 후속 마감재 부착면 확보 (연출)',
            },
            {
              img: '/images/sky-flex/cov-8.jpg',
              h: '방수층 완료',
              p: '벽체 · 바닥 연속 방수층 형성',
            },
          ],
        },
      ],
    },
    cases: {
      eyebrow: 'Projects',
      title: 'Sky Flex 시공사례',
      lead: '옥상 노출방수부터 수영장·저수조·주차장 비노출방수까지 현장 사례를 확인하세요.',
      tabsAria: '시공사례 분류',
      tabs: [
        {
          id: 'exposed',
          label: '노출공법',
          items: [
            {
              img: '/images/sky-flex/case-exp-1.jpg',
              cap: '옥상 노출방수 | 옥상',
            },
            { img: '/images/sky-flex/case-exp-2.jpg', cap: '옥상 슬래브' },
            {
              img: '/images/sky-flex/case-exp-3.jpg',
              cap: '옥상 파라펫 입상부',
            },
            {
              img: '/images/sky-flex/case-exp-4.jpg',
              cap: '설비 기초 주변 옥상',
            },
            {
              img: '/images/sky-flex/case-exp-5.jpg',
              cap: '곡면지붕 인접 옥상',
            },
          ],
        },
        {
          id: 'covered',
          label: '비노출공법',
          items: [
            {
              img: '/images/sky-flex/case-cov-1.jpg',
              cap: '비노출방수 | 수영장',
            },
            { img: '/images/sky-flex/case-cov-2.jpg', cap: '화장실' },
            { img: '/images/sky-flex/case-cov-3.jpg', cap: '지하 저수조' },
            { img: '/images/sky-flex/case-cov-4.jpg', cap: '지하 주차장' },
            {
              img: '/images/sky-flex/case-cov-5.jpg',
              cap: '옥상 누름부 하부 · 규사 마감',
            },
          ],
        },
      ],
    },
    callout: {
      title: 'Water-Cured · Seismic · Seamless',
      body: '크린텍 Sky Flex 팀이 현장 맞춤 진단, 시공, 유지관리 교육까지 원스톱으로 제공합니다.',
      primary: '현장 컨설팅 신청',
      secondary: '브로슈어 / SDS 보기',
    },
  },

  en: {
    metaTitle:
      'SKY Flex Seismic-Resistant Water-Cured Membrane Waterproofing | CleanTech',
    hero: {
      srTitle: 'SKY FLEX — We Create Value',
      tagline:
        'Seismic-resistant water-cured membrane waterproofing that uses water as the hardener',
      pills: [
        'Crack resistance · Seismic',
        'Damp-substrate application',
        'Winter curing',
      ],
      metrics: [
        { n: 'Water-cured', l: 'Cures by reacting with water' },
        { n: 'Solvent-free', l: 'No organic solvents' },
        { n: 'Seismic', l: 'Bonded stainless wire glass mesh' },
        { n: 'Winter', l: 'Cures even below freezing' },
      ],
    },
    intro: {
      eyebrow: 'Overview',
      title: 'About SKY Flex',
      body: 'Sky-Flex, a seismic-resistant water-cured membrane waterproofing system, forms a seamless waterproofing membrane when water is mixed into the solvent-free resin base — the water acts as a hardener, not a diluent. The functional inorganic powder used as an additive suppresses bubbles that form during curing, reinforces the membrane, and allows full thickness to be built up on walls without sagging. Bonded firmly to a stainless wire glass mesh sheet, the membrane follows the movement of the structure and delivers crack-bridging performance for long-term durability.',
      componentsTitle: 'System Components',
      components: [
        {
          icon: ICON.flask,
          name: 'Sky-Flex Base',
          value: 'Solvent-free waterproofing resin',
        },
        { icon: ICON.drop, name: 'Sky-Flex Hardener', value: 'Water' },
        {
          icon: ICON.cube,
          name: 'Sky-Flex Additive',
          value: 'Functional inorganic powder (floor coat / wall)',
        },
        {
          icon: ICON.shield,
          name: 'Sky-Flex Reinforcement',
          value: 'Stainless wire glass mesh sheet',
        },
      ],
      diagramTitle: 'Application Detail',
      layers: [
        { k: 'Water-cured membrane', v: 'Sky Top Coat', c: 'top' },
        { k: 'Water-cured membrane', v: 'Sky Flex Main Coat', c: 'main' },
        { k: 'Water-cured membrane', v: 'Sky Flex Base Coat', c: 'base' },
        {
          k: 'Seismic reinforcement',
          v: 'Sky Wire Glass Mesh Sheet',
          c: 'mesh',
        },
        { k: 'Water-cured membrane', v: 'Sky Flex Primer', c: 'primer' },
        { k: '', v: 'Concrete substrate', c: 'concrete' },
      ],
      thickness: '1–10 mm',
      diagramCaption:
        'Sky-Flex seismic-resistant water-cured membrane waterproofing — application detail',
    },
    features: {
      eyebrow: 'Properties',
      title: 'SKY Flex Properties',
      lead: 'The environmental, physical, and application characteristics of Sky-Flex at a glance.',
      groups: [
        {
          id: 'env',
          icon: ICON.leaf,
          title: 'Environmental',
          items: [
            {
              img: '/images/sky-flex/feat-odor.jpg',
              h: 'Odorless',
              p: 'Contains no thinner or other organic solvents, so there is almost no odor during application.',
            },
            {
              img: '/images/sky-flex/feat-voc.jpg',
              h: 'Fewer Hazardous Substances',
              p: 'No solvent-derived VOCs are released, protecting the health of workers and occupants.',
            },
            {
              img: '/images/sky-flex/feat-fire.jpg',
              h: 'Fire Safety',
              p: 'Cures by reacting with water — no thinner, a common cause of fire, is used.',
            },
          ],
        },
        {
          id: 'phys',
          icon: ICON.shield,
          title: 'Physical',
          items: [
            {
              img: '/images/sky-flex/feat-crack.jpg',
              h: 'Crack Resistance · Seismic',
              p: 'Bonded as one with the stainless wire glass mesh sheet to resist structural cracking.',
            },
            {
              img: '/images/sky-flex/feat-damp.jpg',
              h: 'Damp-Substrate Application',
              p: 'Applies and bonds directly to concrete that still retains moisture.',
            },
            {
              img: '/images/sky-flex/feat-winter.jpg',
              h: 'Winter Curing',
              p: 'The curing reaction continues even in harsh sub-zero conditions.',
            },
          ],
        },
        {
          id: 'work',
          icon: ICON.bolt,
          title: 'Application',
          items: [
            {
              img: '/images/sky-flex/feat-schedule.jpg',
              h: 'Shorter Schedule',
              p: 'Builds a thick film in one pass and cures fast, reducing the number of coats and the construction period.',
            },
            {
              img: '/images/sky-flex/feat-confined.jpg',
              h: 'Safe in Confined Spaces',
              p: 'Lowers the risk of asphyxiation and fire during underground and indoor work.',
            },
            {
              img: '/images/sky-flex/feat-substrate.jpg',
              h: 'Versatile Substrates',
              p: 'Applies to wood, metal, and tile substrates as well as concrete.',
            },
          ],
        },
      ],
    },
    structure: {
      eyebrow: 'Structure',
      title: 'SKY Flex Structure',
      subtitle:
        'Stainless Wire Glass Mesh Sheet + Sky-Flex integrated bonded structure',
      body: 'Buildings move constantly — earthquakes, vibration, thermal expansion and contraction, drying shrinkage — and that movement shows up as cracks in the substrate. The Sky-Flex seismic-resistant system bonds a glass mesh with embedded stainless wire rope into the water-cured membrane as a single body, so the waterproofing layer follows the structure’s movement without breaking.',
      photos: [
        { img: '/images/sky-flex/mesh-rope.jpg', cap: 'Stainless wire rope' },
        {
          img: '/images/sky-flex/mesh-glass.jpg',
          cap: 'Glass mesh with embedded wire',
        },
        {
          img: '/images/sky-flex/mesh-install.jpg',
          cap: 'Installing the wire glass mesh',
        },
      ],
      compare: {
        plain: {
          title: 'Conventional liquid membrane',
          flow: ['Stress concentration', 'Membrane rupture · lifting', 'Leak'],
        },
        flex: {
          title: 'Sky-Flex seismic-resistant',
          flow: ['Mesh spreads the stress widely', 'Membrane stays continuous'],
          note: 'Stainless Wire Glass Mesh Sheet (integrated within the membrane)',
        },
      },
      points: [
        {
          h: 'Stress Distribution',
          p: 'The mesh spreads the tensile stress that concentrates at cracks, preventing local rupture of the membrane.',
        },
        {
          h: 'Crack Bridging',
          p: 'Even when a substrate crack opens, the wire mesh and membrane bridge across it, so the waterproofing layer stays intact.',
        },
        {
          h: 'Integrated Composite Membrane',
          p: 'The mesh is embedded in the membrane, forming a reinforced composite film of uniform design thickness.',
        },
        {
          h: 'No Delamination',
          p: 'Reduces interfacial stress from building movement, suppressing lifting, peeling, and detachment.',
        },
      ],
      meshStepsTitle: 'Mesh Installation',
      meshSteps: [
        {
          img: '/images/sky-flex/mesh-step-1.jpg',
          h: 'Unroll the wire mesh sheet',
          p: 'After the primer dries, unroll and lay flat without wrinkles',
        },
        {
          img: '/images/sky-flex/mesh-step-2.jpg',
          h: 'Bond the wire mesh sheet',
          p: 'Press firmly onto the substrate over the full surface',
        },
        {
          img: '/images/sky-flex/mesh-step-3.jpg',
          h: 'Full-surface bonding complete',
          p: 'Overlap the sheet joints',
        },
        {
          img: '/images/sky-flex/mesh-step-4.jpg',
          h: 'Base coat impregnation',
          p: 'Apply so the mesh is fully embedded in the membrane',
        },
      ],
      keyTitle: 'Key Points',
      keyPoints: [
        {
          h: 'Pre-reinforce joints and cracks',
          p: 'Reinforce expansion joints and cracks first, then bond the mesh.',
        },
        {
          h: 'Full bonding without wrinkles or lifting',
          p: 'Smooth the sheet as you go so it sits tight to the substrate.',
        },
        {
          h: 'Joint overlap',
          p: 'Overlap sheet joints by at least 10 mm to keep the layer continuous.',
        },
        {
          h: 'Full impregnation and cover',
          p: 'Impregnate the mesh with the Base Coat, then cover with the Main Coat so no mesh shows.',
        },
      ],
      areasTitle: 'Recommended Areas',
      areas: [
        'Roof slabs',
        'Areas adjacent to expansion joints',
        'Aged substrates with many cracks',
        'Structural joints',
        'Above machine rooms subject to vibration',
      ],
    },
    tech: {
      eyebrow: 'Specification',
      title: 'SKY Flex Composition & Mixing',
      lead: 'System components, mix ratios, mixing procedure, a comparison with conventional systems, and application precautions. Click an item to expand it.',
      composition: {
        title: 'System Components',
        head: ['Component', 'Description', 'Usage'],
        rows: [
          [
            'Sky-Flex Primer',
            'Solvent-free, two-component dedicated primer',
            '0.3–0.5 kg/m² · 6 h drying (20 °C)',
          ],
          [
            'Sky-Flex Base',
            'Solvent-free Sky Flex waterproofing material',
            'Mix basis 100',
          ],
          [
            'Curing water',
            'Clean water — cold water in summer, warm water in winter recommended',
            'Add last',
          ],
          [
            'Functional powder – floor coat',
            'Forms a self-leveling floor membrane',
            'Floors · horizontal surfaces',
          ],
          [
            'Functional powder – wall',
            'Non-sag cream type (sealant type)',
            'Walls · corners · crack repair',
          ],
          ['Catalyst', 'Accelerates curing', '0.10 relative to base'],
          [
            'Stainless Wire Glass Mesh Sheet',
            'Seismic reinforcement sheet',
            'Seismic-reinforced system',
          ],
          [
            'Sky Top Coat',
            'Top-coat finish for exposed applications',
            'Exposed applications',
          ],
        ],
      },
      ratio: {
        title: 'Mix Ratio (by weight)',
        head: [
          'Use',
          'Base',
          'Powder',
          'Water',
          'Catalyst',
          'Specific gravity',
          'Max. thickness per coat',
        ],
        rows: [
          ['Floor', '100', '25', '25', '0.10', '1.17', 'No limit'],
          ['Wall', '100', '30', '30', '0.10', '1.19', '4 mm'],
        ],
      },
      mixing: {
        title: 'Mixing Procedure',
        steps: [
          {
            h: 'Base + catalyst + powder',
            p: 'Add the catalyst and functional powder to the base and pre-mix at low speed.',
          },
          {
            h: 'Water last',
            p: 'Curing starts the moment water is added, so always add it last.',
          },
          {
            h: 'Low-speed mixing',
            p: '800 rpm or less, keeping the mixing blade at the bottom of the container to avoid entraining air.',
          },
          {
            h: 'Mix for 4–5 minutes',
            p: 'Water is hard to confirm visually once mixed, so keep to the time.',
          },
          {
            h: 'Use within 20 minutes',
            p: 'Finish application within 20 minutes (20 °C) of starting to mix.',
          },
        ],
      },
      compare: {
        title: 'Comparison with Conventional Systems',
        head: [
          'Item',
          'Sky-Flex (water-cured)',
          'Conventional solvent-based 2-part urethane',
        ],
        rows: [
          [
            'Curing',
            'Cures by reacting with water (hardener)',
            '2-part reaction of base and hardener',
          ],
          [
            'Organic solvents',
            'None',
            'Diluent solvents used (especially in primer)',
          ],
          ['Odor · fumes', 'Almost none', 'Solvent odor and fumes'],
          [
            'Fire risk · hot work',
            'Low — other trades can work alongside',
            'Hot-work restrictions required',
          ],
          [
            'Damp substrate',
            'Can be applied to slightly damp substrates',
            'Apply only after thorough drying',
          ],
          [
            'Confined spaces',
            'Minimal PPE required',
            'Ventilation and PPE mandatory',
          ],
          [
            'Schedule',
            'Less waiting for the substrate to dry',
            'Drying wait · work-zone control',
          ],
          [
            'Winter curing',
            'Cures even below freezing',
            'Restricted below freezing',
          ],
        ],
      },
      cautions: {
        title: 'Application Precautions',
        items: [
          'Repair and reinforce deteriorated, damaged, cracked, leaking, or delaminated areas of the substrate beforehand.',
          'The substrate may be slightly damp, but standing water must be removed.',
          'Water is the hardener: add it last and use the mix within 20 minutes (20 °C) of starting to mix.',
          'Mix at low speed (800 rpm or less) for 4–5 minutes, keeping the blade at the bottom of the container to avoid entraining air.',
          'On walls and vertical surfaces, apply no more than 4 mm per coat.',
          'When broadcasting silica sand, apply in stages rather than all at once so it does not slide.',
          'Check safety equipment before work and wear protective gloves and goggles during work.',
        ],
      },
    },
    sequence: {
      eyebrow: 'Procedure',
      title: 'SKY Flex Application Sequence',
      lead: 'The eight-step sequence for exposed and non-exposed applications.',
      tabsAria: 'Application method',
      stepLabel: 'STEP',
      tabs: [
        {
          id: 'exposed',
          label: 'Exposed',
          steps: [
            {
              img: '/images/sky-flex/exp-1.jpg',
              h: 'Substrate inspection',
              p: 'Check for deterioration, cracks, leaks, and delamination',
            },
            {
              img: '/images/sky-flex/exp-2.jpg',
              h: 'Grinding & cleaning',
              p: 'Remove laitance and debris, vacuum dust',
            },
            {
              img: '/images/sky-flex/exp-3.jpg',
              h: 'Primer',
              p: '0.3–0.5 kg/m², 6 h drying at 20 °C',
            },
            {
              img: '/images/sky-flex/exp-4.jpg',
              h: 'Joint & crack reinforcement',
              p: 'Treat expansion joints and cracks first',
            },
            {
              img: '/images/sky-flex/exp-5.jpg',
              h: 'Upturn & corner reinforcement',
              p: 'Parapet base corners, around drains',
            },
            {
              img: '/images/sky-flex/exp-6.jpg',
              h: 'Mesh sheet',
              p: 'Bond stainless wire glass mesh over the full surface',
            },
            {
              img: '/images/sky-flex/exp-7.jpg',
              h: 'Base & main coat',
              p: 'Mix with floor-coat powder, apply to design thickness',
            },
            {
              img: '/images/sky-flex/exp-8.jpg',
              h: 'Top coat finish',
              p: 'Apply Sky Top Coat, cure, and complete',
            },
          ],
        },
        {
          id: 'covered',
          label: 'Non-exposed',
          steps: [
            {
              img: '/images/sky-flex/cov-1.jpg',
              h: 'Substrate grinding',
              p: 'Remove laitance, check substrate strength',
            },
            {
              img: '/images/sky-flex/cov-2.jpg',
              h: 'Dust removal',
              p: 'Vacuum clean',
            },
            {
              img: '/images/sky-flex/cov-3.jpg',
              h: 'Primer',
              p: 'Apply the dedicated primer evenly',
            },
            {
              img: '/images/sky-flex/cov-4.jpg',
              h: 'Joint & crack reinforcement',
              p: 'Pre-reinforce wall–floor corners and cracks',
            },
            {
              img: '/images/sky-flex/cov-5.jpg',
              h: 'Wall application',
              p: 'Mix with wall powder, max. 4 mm per coat',
            },
            {
              img: '/images/sky-flex/cov-6.jpg',
              h: 'Floor application',
              p: 'Mix with floor-coat powder, self-leveling',
            },
            {
              img: '/images/sky-flex/cov-7.jpg',
              h: 'Silica sand broadcast',
              p: 'Broadcast sand over the membrane to key the subsequent finish',
            },
            {
              img: '/images/sky-flex/cov-8.jpg',
              h: 'Membrane complete',
              p: 'Continuous wall-to-floor waterproofing layer',
            },
          ],
        },
      ],
    },
    cases: {
      eyebrow: 'Projects',
      title: 'SKY Flex Projects',
      lead: 'From exposed roof waterproofing to non-exposed pools, water tanks, and parking structures.',
      tabsAria: 'Project categories',
      tabs: [
        {
          id: 'exposed',
          label: 'Exposed',
          items: [
            {
              img: '/images/sky-flex/case-exp-1.jpg',
              cap: 'Exposed roof waterproofing | Roof',
            },
            { img: '/images/sky-flex/case-exp-2.jpg', cap: 'Roof slab' },
            {
              img: '/images/sky-flex/case-exp-3.jpg',
              cap: 'Roof parapet upturn',
            },
            {
              img: '/images/sky-flex/case-exp-4.jpg',
              cap: 'Roof around equipment bases',
            },
            {
              img: '/images/sky-flex/case-exp-5.jpg',
              cap: 'Roof adjacent to a curved roof',
            },
          ],
        },
        {
          id: 'covered',
          label: 'Non-exposed',
          items: [
            {
              img: '/images/sky-flex/case-cov-1.jpg',
              cap: 'Non-exposed waterproofing | Swimming pool',
            },
            { img: '/images/sky-flex/case-cov-2.jpg', cap: 'Restroom' },
            {
              img: '/images/sky-flex/case-cov-3.jpg',
              cap: 'Underground water tank',
            },
            {
              img: '/images/sky-flex/case-cov-4.jpg',
              cap: 'Underground parking',
            },
            {
              img: '/images/sky-flex/case-cov-5.jpg',
              cap: 'Under roof protection layer · sand finish',
            },
          ],
        },
      ],
    },
    callout: {
      title: 'Water-Cured · Seismic · Seamless',
      body: 'The CleanTech SKY Flex team provides site-specific diagnosis, installation, and maintenance training as a one-stop service.',
      primary: 'Request a Site Consultation',
      secondary: 'View Brochure / SDS',
    },
  },
};

export default class ProductSkyFlexController extends Controller {
  @service locale;

  @tracked activeSequence = 'exposed';
  @tracked activeCase = 'exposed';

  get c() {
    return COPY[this.locale.current] ?? COPY.ko;
  }

  get sequenceTabs() {
    return this.c.sequence.tabs.map((t) => ({
      ...t,
      active: t.id === this.activeSequence,
    }));
  }

  get activeSequenceTab() {
    return this.sequenceTabs.find((t) => t.active) ?? this.sequenceTabs[0];
  }

  get caseTabs() {
    return this.c.cases.tabs.map((t) => ({
      ...t,
      count: t.items.length,
      active: t.id === this.activeCase,
    }));
  }

  get activeCaseTab() {
    return this.caseTabs.find((t) => t.active) ?? this.caseTabs[0];
  }

  @action
  selectSequence(id) {
    this.activeSequence = id;
  }

  @action
  selectCase(id) {
    this.activeCase = id;
  }
}
