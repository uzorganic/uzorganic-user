import styled from 'styled-components';

export const StepTypography = () => {
  return (
    <StepTypographyStyled>
      <h3>
        STEP 1. <span> 프롬 라벤더 샴푸</span>
      </h3>
      <p>두피에 쌓인 각질과 여러 오염 물질을</p>
      <div className="one__line">
        <h3>자극 없이 깨끗하게 클렌징</h3>
        <p>해주는 두피 청정 샴푸입니다.</p>
      </div>
    </StepTypographyStyled>
  );
};

const StepTypographyStyled = styled.div`
  padding-left: 0.625rem;

  color: #fff;

  h3 {
    font-size: 1.5rem;
    font-family: 'NotoSansKR-Bold';
    line-height: 3rem;

    span {
      font-family: 'NotoSansKR-Bold';
      border-bottom: 1px solid #fff;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 3rem;
  }

  .one__line {
    display: flex;
  }
`;
