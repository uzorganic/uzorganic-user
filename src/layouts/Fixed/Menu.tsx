import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

export const FixedMenu = () => {
  const router = useRouter();

  return (
    <FixedMenuStyled>
      <p
        onClick={() => {
          router.push('/store');
        }}
      >
        스토어
      </p>
      <p>갤러리</p>
      <p>브랜드</p>
      <p>커뮤니티</p>
    </FixedMenuStyled>
  );
};

const FixedMenuStyled = styled.div`
  position: fixed;
  top: calc(var(--fixed-padding) + 2rem + 1.875rem);
  left: var(--fixed-padding);

  z-index: 10;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  p {
    color: #fff;
    font-size: 1.5rem;

    cursor: pointer;
  }
`;
