import { useEffect, useState } from 'react';

import styled from 'styled-components';

interface ScrollButtonProps {
  isScroll: boolean;
  setIsScroll: (isScroll: boolean) => void;
}

export const FixedScrollButton = ({
  isScroll,
  setIsScroll,
}: ScrollButtonProps) => {
  const pageLength = 3;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const page = Math.floor(
        (scrollY + window.innerHeight / 2) / window.innerHeight,
      );
      setCurrentPage(page);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollButtonStyled>
      {Array.from({ length: pageLength }, (_, i) => (
        <div
          key={i}
          className="scroll__button__container"
          onClick={() => {
            setIsScroll(true);

            window.scrollTo({
              top: window.innerHeight * i,
              behavior: 'smooth',
            });

            setTimeout(() => {
              setIsScroll(false);
            }, 1000);
          }}
        >
          <div
            className={`scroll__button ${currentPage === i ? 'active' : ''}`}
          />
        </div>
      ))}
    </ScrollButtonStyled>
  );
};

const ScrollButtonStyled = styled.div`
  position: fixed;
  bottom: var(--fixed-padding);
  right: var(--fixed-padding);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  .scroll__button__container {
    height: 1.5rem;

    .scroll__button {
      width: calc(2rem / 3 * 2);
      height: calc(2rem / 3 * 2);

      border-radius: 25%;

      background-color: #fff;

      cursor: pointer;

      transition: 0.2s;

      &.active {
        width: 2rem;
        height: 2rem;
        background-color: #aaa;

        transition: 0.2s;
      }

      &:hover {
        width: 2rem;
        height: 2rem;

        transition: 0.2s;
      }
    }
  }
`;
