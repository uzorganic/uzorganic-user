import { FullScreenImage } from './FullScreenImage';

import styled from 'styled-components';

interface Props {
  imageSrc: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonComponent: React.ReactNode;

  className?: string;
}

export const CenterTitleAndButton = ({
  imageSrc,
  title,
  description,
  buttonComponent,
  className,
}: Props) => {
  return (
    <CenterTitleAndButtonStyled className={className}>
      <FullScreenImage src={imageSrc} alt="image" />

      <div className="center">
        <h1>{title}</h1>
        <div className="description">{description}</div>
        <div className="button__container">{buttonComponent}</div>
      </div>
    </CenterTitleAndButtonStyled>
  );
};

const CenterTitleAndButtonStyled = styled.div`
  position: relative;
  width: 100%;
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
      display: flex;
      justify-content: center;

      color: #fff;
      font-size: 5rem;
      font-family: 'NotoSansKR-Bold';

      @media (max-width: 960px) {
        font-size: 8rem;
      }
    }

    .description {
      color: #fff;
      font-size: 1.75rem;

      @media (max-width: 960px) {
        font-size: 2.5rem;
      }
    }

    .button__container {
      margin-top: 3.5rem;
    }
  }
`;
