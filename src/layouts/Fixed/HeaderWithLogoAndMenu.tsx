import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  className?: string;
}

export const HeaderWithLogoAndMenu = ({ className }: Props) => {
  return (
    <HeaderWithLogoAndMenuStyled className={className}>
      <div className="right">
        <Image
          src="/images/icons/menu.png"
          alt="Menu"
          fill
          sizes="100%"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="center">
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          fill
          sizes="100%"
          style={{
            objectFit: 'contain',
          }}
          priority
        />
      </div>
      <div className="left">
        <Image
          src="/images/icons/search.png"
          alt="Search"
          fill
          sizes="100%"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </HeaderWithLogoAndMenuStyled>
  );
};

const HeaderWithLogoAndMenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--fixed-padding);

  background-color: var(--content-main-color);

  .right,
  .left {
    position: relative;

    cursor: pointer;
    width: 2.75rem;
    height: 2.75rem;
  }

  .center {
    position: relative;

    cursor: pointer;

    width: 19.5rem;
    height: 2rem;
  }
`;
