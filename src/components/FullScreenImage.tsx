import { ResponsiveImage } from './ResponsiveImage';

import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;

  // 모바일 전용 크롭본. 있으면 <picture>로 한 장만 내려받는다.
  mobileSrc?: string;

  height?: string;
  objectFit?: 'cover' | 'contain';

  // 화면 최상단(LCP) 이미지에만 true. 기본 lazy.
  priority?: boolean;
}

export const FullScreenImage = ({
  src,
  alt,
  mobileSrc,
  height = '100vh',
  objectFit = 'cover',
  priority = false,
}: Props) => {
  return (
    <FullScreenImageStyled height={height} $objectFit={objectFit}>
      <ResponsiveImage
        className="image"
        src={src}
        alt={alt}
        mobileSrc={mobileSrc}
        priority={priority}
      />
    </FullScreenImageStyled>
  );
};

const FullScreenImageStyled = styled.div<{
  height: string;
  $objectFit?: 'cover' | 'contain';
}>`
  position: relative;

  height: ${({ height }) => height};

  .image {
    object-fit: ${({ $objectFit }) => $objectFit};
  }
`;
