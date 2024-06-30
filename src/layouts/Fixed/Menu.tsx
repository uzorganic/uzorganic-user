import styled from 'styled-components';

export const FixedMenu = () => {
  return (
    <FixedMenuStyled>
      <p>스토어</p>
      <p>갤러리</p>
      <p>브랜드</p>
      <p>커뮤니티</p>
    </FixedMenuStyled>
  );
};

const FixedMenuStyled = styled.div`
  position: fixed;
  top: calc(2rem + 5rem);
  left: 2rem;

  z-index: 10;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  p {
    color: #fff;
    font-size: 1.5rem;
  }
`;
