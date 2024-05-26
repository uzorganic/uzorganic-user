import { useRouter } from 'next/router';

import styled from 'styled-components';

export const FixedTextMenu = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <FixedTextMenuStyled>
      <p onClick={() => router.push('/store')}>
        {locale === 'en' ? 'STORE' : '스토어'}
      </p>
      {/* <p onClick={() => router.push('/store/1')}>갤러리</p> */}
      <p onClick={() => router.push('/brand')}>
        {locale === 'en' ? 'BRAND' : '브랜드'}
      </p>
      <p onClick={() => router.push('/lavender')}>
        {locale === 'en' ? 'LAVENDER' : '라벤더'}
      </p>
      <p onClick={() => router.push('/contact')}>
        {locale === 'en' ? 'CONTACT US' : '문의하기'}
      </p>
    </FixedTextMenuStyled>
  );
};

const FixedTextMenuStyled = styled.div`
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

  p {
    color: #fff;
    font-size: 1.5rem;
    font-family: 'NotoSansKR-Regular';

    @media (max-width: 960px) {
      font-size: 2rem;
      font-family: 'NotoSansKR-Medium';
    }

    cursor: pointer;
  }
`;
