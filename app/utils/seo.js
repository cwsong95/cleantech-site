/**
 * Per-route SEO metadata (description, OG, canonical path, structured data).
 *
 * Consumed by `app/services/head-data.js`, which feeds `app/templates/head.hbs`
 * (rendered into <head> by ember-cli-head, both in the browser and in the
 * FastBoot/prember prerender that search-engine crawlers read).
 *
 * <title> is NOT handled here — each route template sets it with
 * `{{page-title}}` (ember-page-title), which is also FastBoot-aware.
 */

export const SITE_URL = 'https://aqua-crete.com';
export const SITE_NAME = {
  ko: '크린텍개발',
  en: 'CleanTech Co., Ltd.',
};
export const DEFAULT_OG_IMAGE = '/images/aqua-crete-hero.jpg';

// Brand spellings people actually type into Google / Naver.
// Keep these in the home-page description so every variant is covered.
export const BRAND_VARIANTS = ['아쿠아크리트', 'Aqua-crete', 'Aquacrete'];

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: '(주)크린텍개발',
  alternateName: [
    '크린텍개발',
    '크린텍',
    'CleanTech Co., Ltd.',
    'CleanTech',
    ...BRAND_VARIANTS,
  ],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/cleantech-logo.jpg`,
  foundingDate: '2000',
  telephone: '+82-2-420-2844',
  faxNumber: '+82-2-413-8605',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '법원로 114 C-406',
    addressLocality: '송파구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  brand: [
    {
      '@type': 'Brand',
      name: 'Aqua-crete',
      alternateName: ['아쿠아크리트', 'Aquacrete', 'AQUA-CRETE'],
    },
    {
      '@type': 'Brand',
      name: 'SKY Floor',
      alternateName: ['스카이 플로어', 'SKY-FLOOR'],
    },
  ],
};

function product({
  name,
  alternateName,
  brand,
  description,
  path,
  image,
  category,
}) {
  return {
    '@type': 'Product',
    name,
    alternateName,
    description,
    category,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${path}`,
    brand: { '@type': 'Brand', name: brand },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * Route name → metadata.
 *   description: { ko, en }
 *   ogTitle:     { ko, en }   (og:title; <title> itself comes from page-title)
 *   path:        canonical path (no trailing slash except "/")
 *   image:       OG image path (optional, falls back to DEFAULT_OG_IMAGE)
 *   noindex:     true for placeholder / redirect pages
 *   jsonLd:      extra structured data for this page (optional)
 */
export const ROUTE_META = {
  index: {
    path: '/',
    ogTitle: {
      ko: '아쿠아크리트(Aqua-crete) 무기 불연 바닥재 | 크린텍개발',
      en: 'Aqua-Crete (Aquacrete) Inorganic Non-Combustible Flooring | CleanTech',
    },
    description: {
      ko: '아쿠아크리트(Aqua-crete, Aquacrete)는 (주)크린텍개발의 무기 불연 친환경 바닥재·외단열 시스템입니다. 급식실·식품공장·물류창고 바닥 공법, 외벽 불연 외단열(EIFS), SKY Floor까지 — 습윤·영하 시공, 24시간 내 재가동.',
      en: 'Aqua-Crete (Aquacrete) is CleanTech’s inorganic, non-combustible, eco-friendly flooring and exterior-insulation system. Floor systems for kitchens, food plants and logistics, non-combustible EIFS, and SKY Floor — wet and sub-zero application, back in service within 24 hours.',
    },
    image: '/images/aqua-crete-hero.jpg',
    jsonLd: [
      ORGANIZATION,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: '크린텍개발 | 아쿠아크리트 (Aqua-crete)',
        alternateName: ['aqua-crete.com', 'Aquacrete', '아쿠아크리트'],
        inLanguage: ['ko', 'en'],
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  },

  company: {
    path: '/company',
    ogTitle: {
      ko: '회사 소개 | 크린텍개발 — 아쿠아크리트(Aqua-crete) 제조사',
      en: 'About Us | CleanTech — Maker of Aqua-Crete',
    },
    description: {
      ko: '2000년 설립된 (주)크린텍개발은 무기 불연 바닥재 아쿠아크리트(Aqua-crete)와 SKY Floor를 개발·시공하는 바닥재 전문 기업입니다. 미션·비전·연혁과 서울 송파구 본사 안내.',
      en: 'Founded in 2000, CleanTech Co., Ltd. develops and installs Aqua-Crete inorganic non-combustible flooring and SKY Floor systems. Mission, vision, company history and our Seoul (Songpa-gu) headquarters.',
    },
    jsonLd: [ORGANIZATION],
  },

  'product.aqua-crete': {
    path: '/product/aqua-crete',
    ogTitle: {
      ko: '아쿠아크리트 바닥 공법 (Aqua-crete Floor System) | 크린텍개발',
      en: 'Aqua-Crete Floor System (Aquacrete) | CleanTech',
    },
    description: {
      ko: '아쿠아크리트(Aqua-crete) 바닥 공법 — NEP 신제품 인증을 받은 무기계 불연 바닥재. 습윤 바탕면·영하 기온 시공, 강력한 부착력, 영구적 미끄럼 저항, VOC 무발생 친환경 마감. 급식실·식품공장·위생구역에 최적.',
      en: 'Aqua-Crete floor system — NEP-certified inorganic, non-combustible flooring. Applies on wet substrates and at sub-zero temperatures, with strong adhesion, permanent slip resistance and zero-VOC eco-friendly finish. Ideal for kitchens, food plants and hygiene zones.',
    },
    image: '/images/aqua-crete-hero.jpg',
    jsonLd: [
      product({
        name: '아쿠아크리트 바닥 공법',
        alternateName: ['Aqua-crete', 'Aquacrete', 'Aqua-Crete Floor System'],
        brand: 'Aqua-crete',
        description:
          '무기계 불연 친환경 바닥재. 습윤·영하 시공, 강력한 부착력, 영구 미끄럼 저항.',
        path: '/product/aqua-crete',
        image: '/images/aqua-crete-hero.jpg',
        category: 'Industrial flooring',
      }),
    ],
  },

  'product.aqua-crete-eifs': {
    path: '/product/aqua-crete-eifs',
    ogTitle: {
      ko: '아쿠아크리트 외벽 외단열 공법 (Aqua-crete EIFS) | 크린텍개발',
      en: 'Aqua-Crete Exterior Wall System (EIFS) | CleanTech',
    },
    description: {
      ko: '아쿠아크리트(Aqua-crete) 외벽 공법 — 화염 확산을 차단하는 무기 불연 외단열 시스템(EIFS). KS F 8414 실물화재시험, 내진 성능 인증, 고어텍스형 방수·통기 성능. 동절기 영하 시공 가능.',
      en: 'Aqua-Crete exterior wall system — inorganic, non-combustible EIFS that stops flame spread. KS F 8414 full-scale fire test, seismic performance certification, GORE-TEX-like waterproof & breathable function. Applies in sub-zero winter conditions.',
    },
    image: '/images/aqua-crete-eifs-hero.jpg',
    jsonLd: [
      product({
        name: '아쿠아크리트 외벽 공법 (외단열)',
        alternateName: ['Aqua-crete EIFS', 'Aquacrete Exterior Wall System'],
        brand: 'Aqua-crete',
        description:
          '화염 확산을 차단하는 무기 불연 외단열 시스템. KS F 8414 실물화재시험 통과.',
        path: '/product/aqua-crete-eifs',
        image: '/images/aqua-crete-eifs-hero.jpg',
        category: 'Exterior insulation and finish system',
      }),
    ],
  },

  'product.sky-floor': {
    path: '/product/sky-floor',
    ogTitle: {
      ko: '스카이 플로어 (SKY Floor) 바닥 시스템 | 크린텍개발',
      en: 'SKY Floor System | CleanTech',
    },
    description: {
      ko: 'SKY Floor(스카이 플로어) — 바닥재 수지와 스테인리스 와이어 글라스 메쉬를 결합한 균열 방지형 고강도 바닥 시스템. 친환경 인증, 조달청 등록, 산·알칼리·용제 저항. 물류·중량 하중 현장용.',
      en: 'SKY Floor — crack-resistant, high-strength floor system combining resin with stainless wire glass mesh. Eco-label certified, registered with Korea’s Public Procurement Service, resistant to acids, alkalis and solvents. Built for logistics and heavy-load sites.',
    },
    image: '/images/sky-floor-hero-green.jpg',
    jsonLd: [
      product({
        name: 'SKY Floor (스카이 플로어)',
        alternateName: ['SKY Floor', '스카이 플로어', 'SKY-FLOOR'],
        brand: 'SKY Floor',
        description:
          '스테인리스 와이어 글라스 메쉬 결합형 균열 방지 고강도 바닥 시스템.',
        path: '/product/sky-floor',
        image: '/images/sky-floor-hero-green.jpg',
        category: 'Industrial flooring',
      }),
    ],
  },

  'product.polyaspartic-waterproof': {
    path: '/product/polyaspartic-waterproof',
    ogTitle: {
      ko: 'SKY-AU 폴리아스파틱 폴리우레아 | 크린텍개발',
      en: 'SKY-AU Polyaspartic Polyurea | CleanTech',
    },
    description: {
      ko: 'SKY-AU — 지방족 폴리아스파틱 폴리우레아 코팅. 상온 무촉매 초속경화, 무황변·UV 안정, 방수·바닥 마감용. (주)크린텍개발.',
      en: 'SKY-AU — aliphatic polyaspartic polyurea coating. Ultra-fast ambient cure without catalyst, non-yellowing and UV-stable, for waterproofing and floor finishes. By CleanTech Co., Ltd.',
    },
    image: '/images/sky-au-hero.jpg',
  },

  certifications: {
    path: '/certifications',
    ogTitle: {
      ko: '기술자료·인증서 | 크린텍개발 (아쿠아크리트)',
      en: 'Resources & Certifications | CleanTech (Aqua-Crete)',
    },
    description: {
      ko: '아쿠아크리트(Aqua-crete)·SKY Floor 제품 카탈로그, NEP 신제품 인증, 친환경 인증, KS F 8414 실물화재시험 등 공인 인증서와 시험성적서를 확인하고 내려받으세요.',
      en: 'Download Aqua-Crete and SKY Floor catalogs, NEP certification, eco-label certification, KS F 8414 fire-test and other official certificates and test reports.',
    },
  },

  contact: {
    path: '/contact',
    ogTitle: {
      ko: '문의하기 | 크린텍개발 (아쿠아크리트)',
      en: 'Contact Us | CleanTech (Aqua-Crete)',
    },
    description: {
      ko: '아쿠아크리트(Aqua-crete) 바닥·외벽 공법, SKY Floor 시공 상담 및 견적 문의. (주)크린텍개발 — 서울 송파구 법원로 114 C-406, 02-420-2844.',
      en: 'Consultation and quotes for Aqua-Crete floor and exterior wall systems and SKY Floor. CleanTech Co., Ltd. — C-406, 114 Beobwon-ro, Songpa-gu, Seoul, +82-2-420-2844.',
    },
  },

  // Placeholder / redirect pages: keep crawlers from indexing them.
  'product.sky-flex': { path: '/product/sky-flex', noindex: true },
  'product.polyaspartic-primer': {
    path: '/product/polyaspartic-primer',
    noindex: true,
  },
  downloads: { path: '/downloads', noindex: true },
  applications: { path: '/applications', noindex: true },
  projects: { path: '/projects', noindex: true },
};

/** Routes that should be prerendered and listed in sitemap.xml. */
export const INDEXABLE_PATHS = Object.values(ROUTE_META)
  .filter((m) => !m.noindex)
  .map((m) => m.path);
