import { CategoryList } from '@/components/CategoryList';
import { GridImage } from '@/components/GridImage';
import { ImageWithOverlay } from '@/components/ImageWithOverlay';
import { Pagination } from 'antd';
import styled from 'styled-components';

interface Props {
  headerHeight: number | null;
}

export const StoreLayout = ({ headerHeight }: Props) => {
  return (
    <StoreLayoutStyle headerHeight={headerHeight}>
      <p className="top">ALL</p>
      <div className="content">
        <div className="left">
          <div className="banner">
            <ImageWithOverlay
              img="/images/main/1.png"
              leftTop={
                <div className="banner__text">
                  <p className="title">ALL</p>
                  <p className="description">자연에서 온 순수함을 담다</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="right">
          <div className="category">
            <CategoryList />
          </div>
          <div className="product">
            <GridImage />
          </div>
          <div className="pagination">
            <Pagination defaultCurrent={1} total={50} />
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
