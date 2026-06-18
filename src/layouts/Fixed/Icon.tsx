import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;

  // 장식용 아이콘이 기본. 곁에 텍스트가 없는 아이콘에만 값을 넘긴다.
  alt?: string;

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

  alt = '',

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
      // 클릭 가능한 아이콘은 키보드로도 닿아야 한다.
      // ponytail: form 안에서 쓸 일이 생기면 type="button"을 붙여야 submit을 안 한다
      // (styled-components의 as 타입이 type을 안 받아서 지금은 생략).
      as={onClick ? 'button' : undefined}
      className={className}
      $top={top}
      $bottom={bottom}
      $left={left}
      $right={right}
      $centerVertical={centerVertical}
      $centerHorizontal={centerHorizontal}
      $width={width}
      $height={height}
      $disable={disable}
      onClick={onClick}
    >
      <div className="icon">
        <Image src={src} alt={alt} fill sizes="100%" priority />
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

  $width: string;
  $height: string;

  $disable: boolean;

  onClick?: () => void;
}>`
  display: ${({ $disable }) => ($disable ? 'none' : 'block')};

  padding: 0;
  background: none;
  border: none;
  font: inherit;

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

    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    img {
      object-fit: contain;
    }
  }
`;
