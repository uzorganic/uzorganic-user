import Image from 'next/image';

import styled from 'styled-components';

interface Props {}

export const FixedLogo = ({}: Props) => {
  return (
    <FixedLogoStyled>
      <div
        style={{
          position: 'relative',
          width: '20rem',
          height: '5rem',
        }}
      >
        <Image
          src="/images/logo/I'm_ORGANIC_LOGO.png"
          alt="Logo"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </FixedLogoStyled>
  );
};

const FixedLogoStyled = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;

  z-index: 10;

  width: 100%;
`;
