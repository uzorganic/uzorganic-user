import { useRouter } from 'next/router';

import styled from 'styled-components';

export const FixedTextMenu = () => {
  const router = useRouter();

  return (
    <FixedTextMenuStyled>
      <p onClick={() => router.push('/store')}>스토어</p>
      <p onClick={() => router.push('/store/1')}>갤러리</p>
      <p onClick={() => router.push('/brand')}>브랜드</p>
      {/* <p>커뮤니티</p> */}
    </FixedTextMenuStyled>
  );
};

const FixedTextMenuStyled = styled.div`
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
