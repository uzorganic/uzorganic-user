import { useState } from 'react';

import styled from 'styled-components';

export const CategoryList = () => {
  const dummy = ['모두보기', '헤어케어', '스킨케어', '바디케어'];

  const [active, setActive] = useState(0);

  return (
    <CategoryListStyle>
      {dummy.map((item, index) => (
        <div
          className={`item ${active === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActive(index)}
        >
          <p className="title">{item}</p>
          <div className="underline" />
        </div>
      ))}
    </CategoryListStyle>
  );
};

const CategoryListStyle = styled.div`
  display: flex;
  gap: 2.5rem;

  width: fit-content;

  .item {
    display: flex;
    flex-direction: column;

    font-size: 1.375rem;

    cursor: pointer;

    .title {
      font-family: 'NotoSansKR-Regular';

      line-height: 2.5rem;
    }

    .underline {
      display: none;
    }
  }

  .active {
    .title {
      font-family: 'NotoSansKR-Bold';
    }

    .underline {
      display: block;

      height: 0.25rem;

      background-color: #9f7bac;
    }
  }
`;
