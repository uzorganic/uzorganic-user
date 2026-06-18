import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

export const FixedTextMenu = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <FixedTextMenuStyled>
      <Link href="/store">
        {locale === 'en' ? 'STORE' : locale === 'uz' ? "Do'kon" : '스토어'}
      </Link>
      {/* <Link href="/store/1">갤러리</Link> */}
      <Link href="/brand">
        {locale === 'en' ? 'BRAND' : locale === 'uz' ? 'Brend' : '브랜드'}
      </Link>
      <Link href="/lavender">
        {locale === 'en' ? 'LAVENDER' : locale === 'uz' ? 'Lavanda' : '라벤더'}
      </Link>
      <Link href="/contact">
        {locale === 'en'
          ? 'CONTACT US'
          : locale === 'uz'
            ? 'Biz bilan Aloqa'
            : '문의하기'}
      </Link>
    </FixedTextMenuStyled>
  );
};

const FixedTextMenuStyled = styled.nav`
  position: fixed;
  top: calc(var(--fixed-padding) + 2rem + 1.875rem);
  left: var(--fixed-padding);

  @media (max-width: 960px) {
    top: calc(var(--fixed-padding) + 3rem + 1.875rem);
  }

  z-index: 10;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    font-family: 'NotoSansKR-Regular';

    text-decoration: none;

    @media (max-width: 960px) {
      font-size: 2rem;
      font-family: 'NotoSansKR-Medium';
    }

    cursor: pointer;
  }
`;
