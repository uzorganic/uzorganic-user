import React, { useEffect, useRef, useState } from 'react';

import { HeaderWithLogoAndMenu } from './Fixed/HeaderWithLogoAndMenu';

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;

  fillColor?: string;
}

export const ContentLayout = ({ children, fillColor = 'white' }: Props) => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <ContentLayoutStyled $headerHeight={headerHeight} $fillColor={fillColor}>
      <div className="fixed__header" ref={headerRef}>
        <HeaderWithLogoAndMenu className="header" />
      </div>
      <div className="content__layout">
        {React.cloneElement(children as React.ReactElement, {
          headerHeight,
        })}
      </div>
    </ContentLayoutStyled>
  );
};

const ContentLayoutStyled = styled.div<{
  $headerHeight: number | null;
  $fillColor?: string;
}>`
  .header img {
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
    margin-top: ${({ $headerHeight }) => $headerHeight}px;
    /* margin-top: calc(2.75rem + var(--fixed-padding) * 2); */
  }
`;
