This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 다국어

ko(기본) / uz / en 3개 로케일을 **단일 레포·단일 배포**로 서비스한다. URL은 경로 프리픽스 방식이고
기본 로케일 ko는 프리픽스가 없다.

```
/store      /uz/store      /en/store
```

- 로케일 설정: `next.config.mjs` 의 `i18n` (pages router). `i18n.domains` 는 쓰지 않는다 —
  도메인 라우팅은 다른 도메인의 `defaultLocale` 접근 시 리다이렉트를 발생시켜
  `LanguageRoutList` 의 앱 내 언어 전환을 깨뜨린다.
- 호스트·로케일 경로 규칙의 단일 출처: `src/constants/site.ts`
- canonical / hreflang / og:*: `src/components/SEO.tsx` 가 `router.asPath` + `router.locale` 에서 파생
- sitemap: `src/pages/sitemap.xml.tsx` 가 경로 × 로케일로 생성 (정적 파일 아님)
- 번역 텍스트는 컴포넌트 안에 `locale === 'ko' ? ... : locale === 'uz' ? ...` 형태로 인라인.
  리소스 파일로 추출하지 않았다 — 4번째 언어가 필요해지면 그때 착수할 것.

### uzorganic-user-uz 통합 (2026-08-04)

우즈베키스탄 사이트를 별도로 서비스하던 `uzorganic-user-uz` 레포를 이 레포로 통합했다.
해당 레포의 콘텐츠는 전부 이 레포에 이미 포함되어 있었고(에셋 138개 해시 대조 결과 누락 0),
유일하게 없던 자산인 우즈베키스탄 인스타그램 계정만 `src/constants/sns.ts` 로 이식했다.

배포 측 후속 작업(미완료):

1. `uz.uzorganic.com` → `uzorganic.com/uz` 301 리다이렉트.
   구 UZ 빌드는 `defaultLocale: 'uz'` 였고 `/en/` 하위에 영어 URL이 있었으므로
   `/en/` 규칙을 먼저 매칭시켜야 한다. 안 그러면 `/uz/en/store` 로 가서 404.
2. Search Console 주소 변경 + sitemap 재제출
3. `uzorganic-user-uz` 레포 아카이브 (삭제 금지 — 이 레포와 공통 조상 커밋이 없어
   삭제하면 그쪽 히스토리가 영구 소실된다)

상세 절차: `docs/superpowers/plans/2026-08-04-uz-repo-merge.md`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
