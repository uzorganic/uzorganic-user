import { useRef } from 'react';

import { HeaderWithLogoAndMenu } from './Fixed/HeaderWithLogoAndMenu';

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;

  fillColor?: string;
}

export const ContentLayout = ({ children, fillColor = 'white' }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <ContentLayoutStyled
      headerHeight={headerRef.current?.clientHeight}
      $fillColor={fillColor}
    >
      <div className="fixed__header" ref={headerRef}>
        <HeaderWithLogoAndMenu />
      </div>
      <div className="content__layout">{children}</div>
    </ContentLayoutStyled>
  );
};

const ContentLayoutStyled = styled.div<{
  headerHeight?: number;
  $fillColor?: string;
}>`
  img {
    /* fillColor가 있다면 */
    filter: ${({ $fillColor }) =>
      $fillColor === 'black' ? 'invert(1)' : 'none'};
  }

  .fixed__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 10;
  }

  .content__layout {
    padding-top: ${({ headerHeight }) => headerHeight}px;
  }
`;
