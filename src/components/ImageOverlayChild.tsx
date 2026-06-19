import { ResponsiveImage } from './ResponsiveImage';

import styled from 'styled-components';

interface Props {
  src: string;

  // 모바일 전용 크롭본(예: mb_1.jpg). 지정하면 <picture>로 뷰포트당 한 장만 내려받는다.
  mobileSrc?: string;

  // 장식용 이미지가 기본. 내용을 전달하는 이미지에만 값을 넘긴다.
  alt?: string;

  width?: string;
  height?: string;

  objectFit?: 'cover' | 'contain';

  brightness?: number;

  // 화면 최상단(LCP) 이미지에만 true. 기본 lazy.
  priority?: boolean;

  children?: React.ReactNode;

  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  centerVertical?: boolean;
  centerHorizontal?: boolean;

  className?: string;
}

export const ImageOverlayChild = ({
  src,
  mobileSrc,

  alt = '',

  width = '2rem',
  height = '2rem',

  objectFit = 'cover',

  brightness = 1,

  priority = false,

  children,

  top,
  bottom,
  left,
  right,
  centerVertical = false,
  centerHorizontal = false,

  className,
}: Props) => {
  return (
    <ImageOverlayChildStyled
      className={className}
      width={width}
      height={height}
      $objectFit={objectFit}
      $brightness={brightness}
      $top={top}
      $bottom={bottom}
      $left={left}
      $right={right}
      $centerVertical={centerVertical}
      $centerHorizontal={centerHorizontal}
    >
      <ResponsiveImage
        src={src}
        mobileSrc={mobileSrc}
        alt={alt}
        priority={priority}
      />
      <div className="children">{children}</div>
    </ImageOverlayChildStyled>
  );
};

const ImageOverlayChildStyled = styled.div<{
  width: string;
  height: string;

  $objectFit: 'cover' | 'contain';

  $brightness: number;

  $top: string | undefined;
  $bottom: string | undefined;
  $left: string | undefined;
  $right: string | undefined;
  $centerVertical: boolean;
  $centerHorizontal: boolean;
}>`
  position: relative;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    object-fit: ${({ $objectFit }) => $objectFit};

    filter: brightness(${({ $brightness }) => $brightness});
  }

  .children {
    position: absolute;

    /* width: 100%; */

    top: ${({ $top }) => $top};
    bottom: ${({ $bottom }) => $bottom};
    left: ${({ $left }) => $left};
    right: ${({ $right }) => $right};

    ${({ $centerVertical }) => $centerVertical && 'top: 50%;'}
    ${({ $centerHorizontal }) => $centerHorizontal && 'left: 50%;'}

    ${({ $centerVertical, $centerHorizontal }) =>
      $centerVertical &&
      $centerHorizontal &&
      'transform: translate(-50%, -50%);'}
  }
`;
