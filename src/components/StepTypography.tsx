import { useRouter } from 'next/router';

import styled from 'styled-components';

interface Props {
  step: number;
  title: string;
  id: string;
  content: React.ReactNode;
}

export const StepTypography = ({ step, title, id, content }: Props) => {
  const router = useRouter();

  return (
    <StepTypographyStyled>
      <h3>
        STEP {step}.{' '}
        <span
          onClick={() => {
            router.replace(`${id}`);
          }}
        >
          {' '}
          {title}
        </span>
      </h3>
      {content}
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

      cursor: pointer;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 3rem;
  }

  .one__line {
    display: flex;
    flex-wrap: wrap;
  }
`;
