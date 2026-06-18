import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  DEFAULT_LOCALE,
  LOCALES,
  localePath,
  OG_LOCALES,
  SITE_URL,
} from '@/constants/site';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export const SEO = ({
  title,
  description,
  keywords = '',
  image = '/images/logo/logo.svg',
}: SEOProps) => {
  const router = useRouter();

  const locale = router.locale ?? DEFAULT_LOCALE;
  const path = router.asPath.split('?')[0].split('#')[0];

  const canonical = `${SITE_URL}${localePath(locale, path)}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={canonical} />

      {LOCALES.map(item => (
        <link
          key={item}
          rel="alternate"
          hrefLang={item}
          href={`${SITE_URL}${localePath(item, path)}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${localePath(DEFAULT_LOCALE, path)}`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:locale"
        content={OG_LOCALES[locale] ?? OG_LOCALES[DEFAULT_LOCALE]}
      />
      <meta property="og:type" content="website" />
    </Head>
  );
};
