import React, { useEffect, useRef, useState } from 'react';

import { GoTop } from './Fixed/GoTop';
import { Version1Footer } from './Footer/Version1';
import { LogoWithMenuAndSearch } from './Header/LogoWithMenuAndSearch';

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
    <ContentLayoutStyled $headerHeight={headerHeight}>
      <div className="fixed__header" ref={headerRef}>
        <LogoWithMenuAndSearch fillColor={fillColor} />
      </div>
      <div className="content__layout">
        {React.cloneElement(children as React.ReactElement, {
          headerHeight,
        })}
      </div>
      <GoTop bottom right />

      <Version1Footer />
    </ContentLayoutStyled>
  );
};

const ContentLayoutStyled = styled.div<{
  $headerHeight: number | null;
}>`
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
