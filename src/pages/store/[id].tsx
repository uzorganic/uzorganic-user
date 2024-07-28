import { ProductDetail } from '@/contents/ProductDetail';

interface Props {
  headerHeight: number;
}

const StoreDetail = ({ headerHeight = 0 }: Props) => {
  return <ProductDetail headerHeight={headerHeight} />;
};

export default StoreDetail;
