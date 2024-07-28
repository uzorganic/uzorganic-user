import { ProductDetail } from '@/contents/ProductDetail';
import { ProductDetailMobile } from '@/contents/ProductDetailMobile';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

const StoreDetail = ({ headerHeight = 0 }: Props) => {
  return (
    <StoreDetailStyled>
      <ProductDetailMobile headerHeight={headerHeight} className="mobile" />
      <ProductDetail headerHeight={headerHeight} className="desktop" />
    </StoreDetailStyled>
  );
};

const StoreDetailStyled = styled.div`
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

export default StoreDetail;
