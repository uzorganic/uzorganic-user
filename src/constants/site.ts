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
