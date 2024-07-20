import { useState } from 'react';

import { CategoryList } from '@/components/CategoryList';
import { GridImage } from '@/components/GridImage';
import { ImageWithOverlay } from '@/components/ImageWithOverlay';
import { Pagination } from 'antd';
import styled from 'styled-components';

interface Props {
  headerHeight: number | null;
}

export const StoreLayout = ({ headerHeight }: Props) => {
  const [active, setActive] = useState(0);

  const dummyCategory1 = {
    img: '/images/main/1.png',
    title: 'All',
    description: '자연에서 온 순수함을 담다',
  };
  const dummyCategory2 = {
    img: '/images/main/2.png',
    title: '헤어케어',
    description: '헤어케어 제품입니다.',
  };
  const dummyCategory3 = {
    img: '/images/main/3.png',
    title: '스킨케어',
    description: '스킨케어 제품입니다.',
  };
  const dummyCategoryList = [dummyCategory1, dummyCategory2, dummyCategory3];

  const dummyProduct1 = {
    title: '샴푸1',
    img: '/images/store/shampoo1.png',
  };
  const dummyProduct2 = {
    title: '샴푸2',
    img: '/images/store/shampoo2.png',
  };
  const dummyProduct3 = {
    title: '오일1',
    img: '/images/store/oil1.png',
  };
  const dummyProduct4 = {
    title: '오일2',
    img: '/images/store/oil2.png',
  };
  const dummyProduct5 = {
    title: '마스크1',
    img: '/images/store/mask1.png',
  };
  const dummyProductList = [
    [dummyProduct1, dummyProduct2, dummyProduct3, dummyProduct4, dummyProduct5],
    [dummyProduct3, dummyProduct4],
    [dummyProduct5],
  ];

  return (
    <StoreLayoutStyle headerHeight={headerHeight}>
      <p className="top">{dummyCategoryList[active].title}</p>
      <div className="content">
        <div className="left">
          <div className="banner">
            <ImageWithOverlay
              img="/images/main/1.png"
              leftTop={
                <div className="banner__text">
                  <p className="title">{dummyCategoryList[active].title}</p>
                  <p className="description">
                    {dummyCategoryList[active].description}
                  </p>
                </div>
              }
            />
          </div>
        </div>
        <div className="right">
          <div className="category">
            <CategoryList active={active} setActive={setActive} />
          </div>
          <div className="product">
            <GridImage productList={dummyProductList[active]} />
          </div>
          <div className="pagination">
            <Pagination defaultCurrent={1} total={5} />
          </div>
        </div>
      </div>
    </StoreLayoutStyle>
  );
};

const StoreLayoutStyle = styled.div<{
  headerHeight: number | null;
}>`
  display: flex;

  flex-direction: column;

  background-color: var(--content-main-color);

  .top {
    padding-left: 3.125rem;

    font-size: 3.125rem;
    font-family: 'Oranienbaum-Regular', sans-serif;
    line-height: 3.625rem;
  }

  .content {
    display: flex;
    gap: 5.625rem;

    padding: 2.5rem;

    .left {
      position: sticky;
      top: ${({ headerHeight }) =>
        headerHeight && `calc(${headerHeight}px + 2.5rem)`};

      width: 31.25%;
      height: ${({ headerHeight }) =>
        headerHeight && `calc(100vh - ${headerHeight}px - 5rem)`};

      .banner {
        position: relative;

        width: 100%;
        height: 100%;

        .banner__text {
          display: flex;
          flex-direction: column;

          padding: 1.25rem 2.5rem;

          color: #fff;

          .title {
            font-size: 3.125rem;
            font-family: 'Oranienbaum-Regular', sans-serif;
            line-height: 3.625rem;
          }

          .description {
            font-size: 1.25rem;
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      flex: 1;

      .category {
        position: sticky;
        top: ${({ headerHeight }) =>
          headerHeight && `calc(${headerHeight}px + 2.5rem)`};

        z-index: 1;

        padding-top: 2.6rem;
        padding-bottom: 2.5rem;
        transform: translateY(-2.6rem);

        background-color: var(--content-main-color);
      }

      .product {
        margin-top: -2.5rem;
      }

      .pagination {
        display: flex;
        justify-content: center;

        margin-top: 6.25rem;

        .ant-pagination-item {
          font-size: 1.375rem;

          border: 0;
          background-color: transparent;

          a {
            color: #aaa;
          }
        }

        .ant-pagination-item-active {
          a {
            color: #000;
          }
        }
      }
    }
  }
`;
