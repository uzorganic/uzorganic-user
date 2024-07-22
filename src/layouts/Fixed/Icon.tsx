import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;

  children?: React.ReactNode;

  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;

  width?: string;
  height?: string;

  disable?: boolean;

  onClick?: () => void;

  className?: string;
}

export const FixedIcon = ({
  src,

  children,

  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,

  width = '2rem',
  height = '2rem',

  disable = false,

  onClick,

  className,
}: Props) => {
  return (
    <FixedLogoStyled
      className={className}
      $top={top}
      $bottom={bottom}
      $left={left}
      $right={right}
      $centerVertical={centerVertical}
      $centerHorizontal={centerHorizontal}
      width={width}
      height={height}
      $disable={disable}
      onClick={onClick}
    >
      <div className="icon">
        <Image src={src} alt="Icon" fill sizes="100%" priority />
      </div>
      {children}
    </FixedLogoStyled>
  );
};

const FixedLogoStyled = styled.div<{
  $top: boolean;
  $bottom: boolean;
  $left: boolean;
  $right: boolean;
  $centerVertical: boolean;
  $centerHorizontal: boolean;

  width: string;
  height: string;

  $disable: boolean;

  onClick?: () => void;
}>`
  display: ${({ $disable }) => ($disable ? 'none' : 'block')};

  position: fixed;

  ${({ $top }) => $top && 'top: var(--fixed-padding);'}
  ${({ $bottom }) => $bottom && 'bottom: var(--fixed-padding);'}
  ${({ $left }) => $left && 'left: var(--fixed-padding);'}
  ${({ $right }) => $right && 'right: var(--fixed-padding);'}

  ${({ $centerVertical }) => $centerVertical && 'top: 50%;'}
  ${({ $centerVertical }) => $centerVertical && 'transform: translateY(-50%);'}
  ${({ $centerHorizontal }) => $centerHorizontal && 'left: 50%;'}
  ${({ $centerHorizontal }) =>
    $centerHorizontal && 'transform: translateX(-50%);'}
  
  z-index: 10;

  .icon {
    position: relative;

    width: ${({ width }) => width};
    height: ${({ height }) => height};

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    img {
      object-fit: contain;
    }
  }
`;
