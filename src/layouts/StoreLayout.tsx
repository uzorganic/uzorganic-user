import { useState } from 'react';

import { useRouter } from 'next/router';

import { CategoryList } from '@/components/CategoryList';
import { GridImage } from '@/components/GridImage';
import { ImageWithOverlay } from '@/components/ImageWithOverlay';
import { Pagination } from 'antd';
import styled from 'styled-components';

interface Props {
  headerHeight: number | null;
}

export const StoreLayout = ({ headerHeight }: Props) => {
  const router = useRouter();
  const { locale } = router;

  const [active, setActive] = useState(0);

  const dummyCategory1 = {
    img: '/images/store/1.png',
    title: 'All',
    enTitle: 'All',
    description: '자연에서 온 순수함을 담다',
    enDescription: 'Pureness from nature',
  };
  const dummyCategory2 = {
    img: '/images/store/2.png',
    title: '헤어케어 ',
    enTitle: 'Hair Care',
    description: '자연의 힘으로, 건강한 모발을',
    enDescription: 'For healthy hair with the power of nature',
  };
  const dummyCategory3 = {
    img: '/images/store/3.png',
    title: '스킨케어',
    enTitle: 'Skin Care',
    description: '건강한 피부를 위한 선택',
    enDescription: 'For healthy skin',
  };
  const dummyCategoryList = [dummyCategory1, dummyCategory2, dummyCategory3];

  const dummyProduct1 = {
    id: 1,
    title: '프롬 라벤더 샴푸',
    enTitle: 'From Lavender Shampoo',
    img: '/images/store/shampoo1.png',
  };
  const dummyProduct2 = {
    id: 2,
    title: '프롬 라벤더 트리트먼트',
    enTitle: 'From Lavender Treatment',
    img: '/images/store/shampoo2.png',
  };
  const dummyProduct3 = {
    id: 3,
    title: '프롬 라벤더 헤어 오일',
    enTitle: 'From Lavender Hair Oil',
    img: '/images/store/oil1.png',
  };
  const dummyProduct4 = {
    id: 4,
    title: '프롬 라벤더 헤어 미스트',
    enTitle: 'From Lavender Hair Mist',
    img: '/images/store/oil2.png',
  };
  const dummyProduct5 = {
    id: 5,
    title: '라벤더 솔루션 마스크팩',
    enTitle: 'Lavender Solution Mask Pack',
    img: '/images/store/mask1.png',
  };
  const dummyProductList = [
    [dummyProduct1, dummyProduct2, dummyProduct3, dummyProduct4, dummyProduct5],
    [dummyProduct1, dummyProduct2, dummyProduct3, dummyProduct4],
    [dummyProduct5],
  ];

  return (
    <StoreLayoutStyle $headerHeight={headerHeight}>
      <p
        className={`top ${active === 0 ? 'all' : ''} ${locale === 'ko' ? '' : 'all'}`}
      >
        {locale === 'ko'
          ? dummyCategoryList[active].title
          : dummyCategoryList[active].enTitle}
      </p>
      <div className="content">
        <div className="left">
          <div className="banner">
            <ImageWithOverlay
              img={dummyCategoryList[active].img}
              leftTop={
                <div className="banner__text">
                  <p className="title">
                    {locale === 'ko'
                      ? dummyCategoryList[active].title
                      : dummyCategoryList[active].enTitle}
                  </p>
                  <p className="description">
                    {locale === 'ko'
                      ? dummyCategoryList[active].description
                      : dummyCategoryList[active].enDescription}
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
  $headerHeight: number | null;
}>`
  display: flex;

  flex-direction: column;

  background-color: var(--content-main-color);

  .top {
    padding-left: 3.125rem;
    color: #484036;
    font-size: 3.125rem;
    line-height: 3.625rem;
  }

  .all {
    font-family: 'Oranienbaum-Regular', sans-serif;
  }

  .content {
    display: flex;
    gap: 5.625rem;

    padding: 2.5rem;

    .left {
      position: sticky;

      top: ${({ $headerHeight }) =>
        $headerHeight && `calc(${$headerHeight}px + 2.5rem)`};

      width: 31.25%;
      height: ${({ $headerHeight }) =>
        $headerHeight && `calc(100vh - ${$headerHeight}px - 5rem)`};

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
        top: ${({ $headerHeight }) =>
          $headerHeight && `calc(${$headerHeight}px + 2.5rem)`};

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
