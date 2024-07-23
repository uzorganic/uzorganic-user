import Image from 'next/image';

import styled from 'styled-components';

export const FixedSearch = () => {
  return (
    <SearchStyled>
      <div className="icon">
        <Image src="/images/icons/search.svg" alt="Search" fill sizes="100%" />
      </div>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  position: fixed;
  top: var(--fixed-padding);
  right: var(--fixed-padding);

  z-index: 10;

  .icon {
    position: relative;

    width: 2rem;
    height: 2rem;

    cursor: pointer;

    img {
      object-fit: contain;
    }
  }
`;
