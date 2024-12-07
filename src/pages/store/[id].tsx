import { CategoryListBar } from '@/components/CategoryListBar';
import { ProductDetail } from '@/contents/ProductDetail';
import { ProductDetailMobile } from '@/contents/ProductDetailMobile';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

const StoreDetail = ({ headerHeight = 0 }: Props) => {
  return (
    <StoreDetailStyled $headerHeight={headerHeight}>
      <div className="category__list">
        <CategoryListBar />
      </div>

      <ProductDetail headerHeight={headerHeight} className="desktop" />
      <ProductDetailMobile headerHeight={headerHeight} className="mobile" />
    </StoreDetailStyled>
  );
};

const StoreDetailStyled = styled.div<{ $headerHeight: number }>`
  max-width: 1920px;

  margin: 0 auto;

  .category__list {
    position: fixed;
    top: ${({ $headerHeight }) => $headerHeight}px;
    z-index: 5;

    display: flex;
    width: 100%;

    padding: 2rem;

    transform: translateY(-2rem);

    background-color: var(--content-main-color);
  }

  .mobile {
    display: none;
  }

  @media (max-width: 960px) {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
`;
StoreDetail.layoutFillColor = 'black';

export default StoreDetail;
