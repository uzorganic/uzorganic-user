export const SITE_URL = 'https://uzorganic.com';

export const LOCALES = ['ko', 'uz', 'en'] as const;

export const DEFAULT_LOCALE = 'ko';

/** og:locale 은 bare 언어코드가 아니라 language_TERRITORY 형식을 요구한다. */
export const OG_LOCALES: Record<string, string> = {
  ko: 'ko_KR',
  uz: 'uz_UZ',
  en: 'en_US',
};

/**
 * 로케일 프리픽스가 적용된 경로를 반환한다.
 * 기본 로케일(ko)은 프리픽스가 없다 — Next.js pages-router 기본 동작과 일치.
 * localePath('ko', '/store') === '/store'
 * localePath('uz', '/store') === '/uz/store'
 * localePath('uz', '/')      === '/uz'
 */
export const localePath = (locale: string, path: string) => {
  const normalized = path === '/' ? '' : path;

  return locale === DEFAULT_LOCALE
    ? normalized || '/'
    : `/${locale}${normalized}`;
};

export const SITE_NAME = 'I’m ORGANIC';

/** og:image 는 SVG 를 못 읽는 소비자가 많다. 1200x630 전용 이미지가 생기면 교체할 것. */
export const DEFAULT_OG_IMAGE = '/images/main/1.png';

/**
 * 생성형 엔진(GEO)이 브랜드를 하나의 엔티티로 묶게 하는 최소 정보.
 * 페이지가 아니라 회사/사이트 자체를 설명하므로 여기 한 곳에만 둔다.
 */
export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['아임오가닉', 'Im ORGANIC', 'I am ORGANIC'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/logo.png`,
  email: 'uzorganic@naver.com',
  parentOrganization: {
    '@type': 'Organization',
    name: 'HERBTHERAPY WITH COSMETICS',
  },
  sameAs: [
    'https://www.instagram.com/im_organic_official',
    'https://www.instagram.com/safocosmetics.uz/',
  ],
};

export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: LOCALES,
  publisher: { '@id': `${SITE_URL}/#organization` },
};
