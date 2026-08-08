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
  { path: '/store/1', changefreq: 'monthly', priority: '0.8' },
  { path: '/store/2', changefreq: 'monthly', priority: '0.8' },
  { path: '/store/3', changefreq: 'monthly', priority: '0.8' },
  { path: '/store/4', changefreq: 'monthly', priority: '0.8' },
  { path: '/store/5', changefreq: 'monthly', priority: '0.8' },
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
