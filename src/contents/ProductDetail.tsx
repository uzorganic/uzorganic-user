import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

export const ProductDetail = ({ headerHeight = 0 }: Props) => {
  return (
    <ProductDetailStyle $headerHeight={headerHeight}>
      <div className="left">
        <ImageOverlayChild
          src="/images/store/product1/6.png"
          width="100%"
          height={`calc(100vh - ${headerHeight}px)`}
        />
        <ImageOverlayChild
          src="/images/store/product1/7.png"
          width="100%"
          height="323.563rem"
        />
      </div>

      <div className="right">
        <h1>프롬 라벤더 샴푸</h1>
        <div className="sub__title">
          <p>두피각질완화 · 진정 · 딥클렌징</p>
          <span>200ml</span>
        </div>
        <div className="line" />
        <h2>
          자연에서 온 라벤더수와 라벤더 오일을 담아
          <br />
          건강한 두피와 모발 컨디션을 조성해주는
          <br />
          두피 청정 라벤더 샴푸
        </h2>
        <HoverArrowButton
          className="arrow__button"
          text="구매하러 가기"
          color="#403b35"
          width="20rem"
        />
        <div className="product__detail">
          <span>+</span>
          <p>제품정보</p>
        </div>
        <div className="product__detail">
          <span>+</span>
          <p>주요성분</p>
        </div>
        <div className="product__detail">
          <span>+</span>
          <p>사용법</p>
        </div>
      </div>
    </ProductDetailStyle>
  );
};

const ProductDetailStyle = styled.div<{ $headerHeight: number }>`
  display: flex;

  .left {
    display: flex;
    flex-direction: column;

    width: 59.375%;
    height: auto;
  }

  .right {
    position: sticky;
    top: ${({ $headerHeight }) => $headerHeight}px;

    display: flex;
    flex-direction: column;

    width: 40.625%;
    height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};

    padding: 8.75rem 7.5rem;

    color: #403b35;

    h1 {
      font-size: 2.75rem;
      font-family: 'NotoSansKR-Bold';
    }

    .sub__title {
      display: flex;
      justify-content: space-between;

      margin-top: 1.25rem;

      p {
        font-size: 1.125rem;
      }

      span {
        font-size: 1.375rem;
      }
    }

    .line {
      width: 100%;
      height: 0.125rem;

      margin: 1.25rem 0;

      background-color: #9f7bac;
    }

    h2 {
      font-size: 1.75rem;

      margin: 1.25rem 0;
    }

    .arrow__button {
      margin: 1.25rem 0;
    }

    .product__detail {
      display: flex;
      gap: 0.5rem;

      margin-top: 1.25rem;

      span {
        font-size: 1.125rem;
      }

      p {
        font-size: 1.125rem;
      }
    }
  }
`;
