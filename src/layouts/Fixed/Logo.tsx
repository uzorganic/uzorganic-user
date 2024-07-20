import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
}

export const FixedLogo = ({
  top = false,
  bottom = false,
  left = false,
  right = false,
  center = false,
}: Props) => {
  return (
    <FixedLogoStyled
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      center={center}
    >
      <div className="logo">
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          fill
          sizes="100%"
          priority
        />
      </div>
    </FixedLogoStyled>
  );
};

const FixedLogoStyled = styled.div<{
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
  center: boolean;
}>`
  position: fixed;
  ${({ top }) => top && 'top: var(--fixed-padding);'}
  ${({ bottom }) => bottom && 'bottom: var(--fixed-padding);'}
  ${({ left }) => left && 'left: var(--fixed-padding);'}
  ${({ right }) => right && 'right: var(--fixed-padding);'}
  ${({ center }) => center && 'left: 50%; transform: translateX(-50%);'}

  z-index: 10;

  .logo {
    position: relative;

    cursor: pointer;

    width: 19.5rem;
    height: 2rem;

    img {
      object-fit: contain;
    }
  }
`;
