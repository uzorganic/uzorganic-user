import { GetStaticPaths, GetStaticProps } from 'next';

import { CategoryListBar } from '@/components/CategoryListBar';
import { LOCALES } from '@/constants/site';
import { ProductDetail } from '@/contents/ProductDetail';
import { ProductDetailMobile } from '@/contents/ProductDetailMobile';
import styled from 'styled-components';

interface Props {
  /** ContentLayout 이 주입한다. 첫 렌더와 SSR 에서는 null 이다. */
  headerHeight: number | null;
  id: number;
}

const StoreDetail = ({ headerHeight, id }: Props) => {
  const top = headerHeight ?? 0;

  return (
    <StoreDetailStyled $headerHeight={top}>
      <div className="category__list">
        <CategoryListBar />
      </div>

      <ProductDetail id={id} headerHeight={top} className="desktop" />
      <ProductDetailMobile id={id} headerHeight={top} className="mobile" />
    </StoreDetailStyled>
  );
};

// 제품은 컴포넌트에 박아 둔 5개가 전부라 경로도 여기서 확정한다.
// locale 을 생략하면 defaultLocale(ko) 만 만들어진다. uz/en 도 프리렌더하려면 직접 곱해야 한다.
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: LOCALES.flatMap(locale =>
    [1, 2, 3, 4, 5].map(id => ({ params: { id: String(id) }, locale })),
  ),
  fallback: false,
});

// id 를 router.query 가 아니라 prop 으로 내려야 서버 렌더 HTML 에 제품 내용이 실린다.
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { headerHeight: null, id: Number(params?.id) },
});

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
