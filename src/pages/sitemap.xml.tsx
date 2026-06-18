import { GetServerSideProps } from 'next';

import {
  DEFAULT_LOCALE,
  LOCALES,
  localePath,
  SITE_URL,
} from '@/constants/site';

const PATHS: { path: string; changefreq: string; priority: string }[] = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/brand', changefreq: 'monthly', priority: '0.9' },
  { path: '/lavender', changefreq: 'monthly', priority: '0.8' },
  { path: '/store', changefreq: 'weekly', priority: '0.9' },
  // ponytail: 제품 상세(/store/1~5)는 의도적으로 제외.
  // /store/[id] 는 SEO 를 쓰지만(ProductDetail 경유) 서버 렌더 HTML에는 아무것도 안 실린다:
  // (1) ProductDetail 이 `if (!id || !headerHeight) return null` 로 막히는데 headerHeight 는
  //     클라이언트에서만 측정되고, (2) 이 라우트는 getStaticPaths 가 없는 자동 정적 최적화
  //     대상이라 프리렌더 시점에 router.query.id 가 비어 있다.
  // 그래서 /store/1, /uz/store/1, /en/store/1 이 canonical 없이 거의 동일한 빈 HTML을 낸다.
  // 업그레이드 경로: [id].tsx 에 getStaticPaths/getStaticProps(id 1~5)를 붙여 id 를 서버에서
  // 확정시키고, headerHeight 가드 바깥인 [id].tsx 에 SEO 를 직접 배치 → 그 후 여기에 5개
  // 경로를 되살릴 것.
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy_policy', changefreq: 'yearly', priority: '0.5' },
];

const buildSitemap = () => {
  const entries = PATHS.flatMap(({ path, changefreq, priority }) =>
    LOCALES.map(locale => {
      const alternates = [
        ...LOCALES.map(
          item =>
            `    <xhtml:link rel="alternate" hreflang="${item}" href="${SITE_URL}${localePath(item, path)}" />`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localePath(DEFAULT_LOCALE, path)}" />`,
      ].join('\n');

      return [
        '  <url>',
        `    <loc>${SITE_URL}${localePath(locale, path)}</loc>`,
        alternates,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    }),
  ).join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries,
    '</urlset>',
  ].join('\n');
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

const Sitemap = () => null;

export default Sitemap;
