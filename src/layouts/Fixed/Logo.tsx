import Image from 'next/image';

import styled from 'styled-components';

interface Props {}

export const FixedLogo = ({}: Props) => {
  return (
    <FixedLogoStyled>
      <div className="fixed__logo">
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          fill
          style={{
            objectFit: 'contain',
          }}
          sizes="100%"
          priority
        />
      </div>
    </FixedLogoStyled>
  );
};

const FixedLogoStyled = styled.div`
  position: fixed;
  top: var(--fixed-padding);
  left: var(--fixed-padding);

  z-index: 10;

  .fixed__logo {
    position: relative;

    cursor: pointer;

    width: 19.5rem;
    height: 2rem;

    img {
      object-fit: contain;
    }
  }
`;
