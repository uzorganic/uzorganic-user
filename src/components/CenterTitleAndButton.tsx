import { FullScreenImage } from './FullScreenImage';

import styled from 'styled-components';

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  buttonComponent: React.ReactNode;
}

export const CenterTitleAndButton = ({
  imageSrc,
  title,
  description,
  buttonComponent,
}: Props) => {
  return (
    <CenterTitleAndButtonStyled>
      <FullScreenImage src={imageSrc} alt="image" />

      <div className="center">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="button__container">{buttonComponent}</div>
      </div>
    </CenterTitleAndButtonStyled>
  );
};

const CenterTitleAndButtonStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    z-index: 1;

    h1 {
      color: #fff;
      font-size: 5rem;
      font-family: 'Noto Sans KR-Bold';
    }

    p {
      color: #fff;
      font-size: 1.75rem;
    }

    .button__container {
      margin-top: 3.5rem;
    }
  }
`;
