import { useState } from 'react';

import styled from 'styled-components';

export const FixedScrollButton = () => {
  const pageLength = 5;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ScrollButtonStyled>
      {Array.from({ length: pageLength }, (_, i) => (
        <div
          key={i}
          className="scroll__button__container"
          onClick={() => setCurrentPage(i)}
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

  gap: 1rem;

  .scroll__button__container {
    height: 1rem;

    .scroll__button {
      width: calc(1rem / 3 * 2);
      height: calc(1rem / 3 * 2);

      border-radius: 25%;

      background-color: #fff;

      cursor: pointer;

      transition: 0.2s;

      &.active {
        width: 1rem;
        height: 1rem;
        background-color: #aaa;

        transition: 0.2s;
      }

      &:hover {
        width: 1rem;
        height: 1rem;

        transition: 0.2s;
      }
    }
  }
`;
