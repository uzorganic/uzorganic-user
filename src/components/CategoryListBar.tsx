import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';

interface Props {}

export const CategoryListBar = ({}: Props) => {
  const router = useRouter();
  const { locale } = router;
  const { id } = router.query;

  const [active, setActive] = useState(1);

  useEffect(() => {
    if (id == '5') {
      setActive(2);
    } else {
      setActive(1);
    }
  }, [id]);

  const categoryList = [
    {
      title: '모두보기',
      enTitle: 'All',
    },
    {
      title: '헤어케어',
      enTitle: 'Hair Care',
    },
    {
      title: '스킨케어',
      enTitle: 'Skin Care',
    },
  ];

  return (
    <CategoryListBarStyle>
      {categoryList.map((item, index) => (
        <div
          className={`item ${active === index ? 'active' : ''}`}
          key={index}
          onClick={() => {
            router.push(`/store?category=${index}`);
          }}
        >
          <p className="title">{locale === 'ko' ? item.title : item.enTitle}</p>
          <div className="underline" />
        </div>
      ))}
    </CategoryListBarStyle>
  );
};

const CategoryListBarStyle = styled.div`
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
