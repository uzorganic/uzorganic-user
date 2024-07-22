import styled from 'styled-components';

interface Props {
  children: React.ReactNode;

  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;

  width?: string;
  height?: string;

  onClick?: () => void;

  className?: string;
}

export const FixedChild = ({
  children,

  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,

  onClick,

  className,
}: Props) => {
  return (
    <FixedChildStyled
      className={className}
      $top={top}
      $bottom={bottom}
      $left={left}
      $right={right}
      $centerVertical={centerVertical}
      $centerHorizontal={centerHorizontal}
      $onClick={!!onClick}
    >
      {children}
    </FixedChildStyled>
  );
};

const FixedChildStyled = styled.div<{
  $top: boolean;
  $bottom: boolean;
  $left: boolean;
  $right: boolean;
  $centerVertical: boolean;
  $centerHorizontal: boolean;

  $onClick?: boolean;
}>`
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
`;
