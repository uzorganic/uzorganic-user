import { StoreLayout } from '@/layouts/StoreLayout';

interface Props {
  headerHeight: number | null;
}

const StorePage = ({ headerHeight }: Props) => {
  return <StoreLayout headerHeight={headerHeight} />;
};

StorePage.layoutFillColor = 'black';

export default StorePage;
