import { useState } from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';

interface Props {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

export const CategoryList = ({ active, setActive }: Props) => {
  const router = useRouter();
  const { locale } = router;

  const categoryList = [
    {
      title: '모두보기',
      enTitle: 'All',
      uzTitle: 'Hammasi',
    },
    {
      title: '헤어케어',
      enTitle: 'Hair Care',
      uzTitle: 'Soch parvarishi',
    },
    {
      title: '스킨케어',
      enTitle: 'Skin Care',
      uzTitle: 'Teri parvarishi',
    },
  ];

  return (
    <CategoryListStyle>
      {categoryList.map((item, index) => (
        <div
          className={`item ${active === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActive(index)}
        >
          <p className="title">
            {locale === 'ko'
              ? item.title
              : locale === 'uz'
                ? item.uzTitle
                : item.enTitle}
          </p>
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
