import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;

  width?: string;
  height?: string;

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
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      centerVertical={centerVertical}
      centerHorizontal={centerHorizontal}
    >
      <Image src={src} alt="Image" fill sizes="100%" priority />
      <div className="children">{children}</div>
    </ImageOverlayChildStyled>
  );
};

const ImageOverlayChildStyled = styled.div<{
  width: string;
  height: string;

  top: string | undefined;
  bottom: string | undefined;
  left: string | undefined;
  right: string | undefined;
  centerVertical: boolean;
  centerHorizontal: boolean;
}>`
  position: relative;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  .children {
    position: absolute;

    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};

    ${({ centerVertical }) =>
      centerVertical && 'top: 50%; transform: translateY(-50%);'}
    ${({ centerHorizontal }) =>
      centerHorizontal && 'left: 50%; transform: translateX(-50%);'}
  }
`;
