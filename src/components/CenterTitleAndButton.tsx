import { FullScreenImage } from './FullScreenImage';

import styled from 'styled-components';

interface Props {
  imageSrc: string;
  // 모바일 전용 크롭본. 있으면 <picture>로 한 장만 내려받는다.
  mobileImageSrc?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonComponent: React.ReactNode;

  // 한 페이지에 h1은 하나. 나머지 섹션은 h2로 내린다.
  titleTag?: 'h1' | 'h2';

  // 화면 최상단(LCP) 이미지에만 true. 기본 lazy.
  priority?: boolean;

  className?: string;
}

export const CenterTitleAndButton = ({
  imageSrc,
  mobileImageSrc,
  title,
  description,
  buttonComponent,
  titleTag: Title = 'h1',
  priority = false,
  className,
}: Props) => {
  return (
    <CenterTitleAndButtonStyled className={className}>
      {/* 배경 사진은 장식용이라 alt는 빈 값 */}
      <FullScreenImage
        src={imageSrc}
        alt=""
        mobileSrc={mobileImageSrc}
        priority={priority}
      />

      <div className="center">
        <Title>{title}</Title>
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

    h1,
    h2 {
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
