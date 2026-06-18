import { SEO } from '@/components/SEO';
import { StoreLayout } from '@/layouts/StoreLayout';

interface Props {
  headerHeight: number | null;
}

const StorePage = ({ headerHeight }: Props) => {
  return (
    <>
      <SEO
        title="I’m ORGANIC - Store"
        description="Explore our store for a wide range of organic products. Embrace a healthier lifestyle with our carefully curated selection."
      />

      <StoreLayout headerHeight={headerHeight} />
    </>
  );
};

StorePage.layoutFillColor = 'black';

export default StorePage;
