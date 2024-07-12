import Image from 'next/image';

import styled from 'styled-components';

export const FixedSearch = () => {
  return (
    <SearchStyled>
      <div className="search__button">
        <Image
          src="/images/icons/search.png"
          alt="Search"
          fill
          style={{
            objectFit: 'contain',
          }}
          sizes="100%"
        />
      </div>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  position: fixed;
  top: var(--fixed-padding);
  right: var(--fixed-padding);

  z-index: 10;

  .search__button {
    position: relative;

    width: 2rem;
    height: 2rem;

    cursor: pointer;
  }
`;
