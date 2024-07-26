import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;

  width?: string;
  height?: string;

  brightness?: number;

  children?: React.ReactNode;

  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  centerVertical?: boolean;
  centerHorizontal?: boolean;

  onClick?: () => void;

  className?: string;
}

export const ImageOverlayChild = ({
  src,

  width = '2rem',
  height = '2rem',

  brightness = 1,

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
      $brightness={brightness}
      $top={top}
      $bottom={bottom}
      $left={left}
      $right={right}
      $centerVertical={centerVertical}
      $centerHorizontal={centerHorizontal}
    >
      <Image src={src} alt="Image" fill sizes="100%" priority />
      <div className="children">{children}</div>
    </ImageOverlayChildStyled>
  );
};

const ImageOverlayChildStyled = styled.div<{
  width: string;
  height: string;

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
    object-fit: cover;

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
