import { ProductDetail } from '@/contents/ProductDetail';

interface Props {
  headerHeight: number;
}

const Test = ({ headerHeight = 0 }: Props) => {
  return <ProductDetail headerHeight={headerHeight} />;
};

export default Test;
