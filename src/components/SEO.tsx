import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  LOCALES,
  localePath,
  OG_LOCALES,
  SITE_NAME,
  SITE_URL,
} from '@/constants/site';

/**
 * 제품 설명 같은 본문 문구는 <br/> 을 낀 JSX 로 들어온다.
 * 그대로 meta 나 JSON-LD 에 넣으면 React 엘리먼트 객체가 직렬화되므로 평문으로 편다.
 */
export const toPlainText = (node: React.ReactNode): string => {
  const flatten = (value: React.ReactNode): string => {
    if (value === null || value === undefined || typeof value === 'boolean') {
      return '';
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return String(value);
    }
    if (Array.isArray(value)) {
      return value.map(flatten).join('');
    }
    if (React.isValidElement(value)) {
      const element = value as React.ReactElement<{
        children?: React.ReactNode;
      }>;

      return element.type === 'br' ? ' ' : flatten(element.props.children);
    }

    return '';
  };

  return flatten(node).replace(/\s+/g, ' ').trim();
};

interface SEOProps {
  title: string;
  description: React.ReactNode;
  keywords?: string;
  image?: string;
  /** schema.org JSON-LD. 배열이면 여러 개를 각각의 script 로 넣는다. */
  jsonLd?: object | object[];
}

export const SEO = ({
  title,
  description,
  keywords = '',
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}: SEOProps) => {
  const router = useRouter();

  const locale = router.locale ?? DEFAULT_LOCALE;
  const path = router.asPath.split('?')[0].split('#')[0];

  const text = toPlainText(description);

  const canonical = `${SITE_URL}${localePath(locale, path)}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={text} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* max-snippet:-1 이 없으면 검색·생성형 엔진이 인용 길이를 스스로 줄인다. */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <link rel="canonical" href={canonical} />

      {/* next/head 는 key 가 같으면 나중 것만 남긴다. 태그 종류별로 접두사를 붙여 충돌을 막는다. */}
      {LOCALES.map(item => (
        <link
          key={`hreflang-${item}`}
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

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={text} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:locale"
        content={OG_LOCALES[locale] ?? OG_LOCALES[DEFAULT_LOCALE]}
      />
      {LOCALES.filter(item => item !== locale).map(item => (
        <meta
          key={`og-locale-${item}`}
          property="og:locale:alternate"
          content={OG_LOCALES[item]}
        />
      ))}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={text} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};
