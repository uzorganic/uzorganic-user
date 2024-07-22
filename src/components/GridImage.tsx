import Image from 'next/image';
import { useRouter } from 'next/router';

import styled from 'styled-components';

interface Props {
  productList: {
    id: number;
    title: string;
    enTitle: string;
    img: string;
  }[];
}

export const GridImage = ({ productList }: Props) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <GridImageStyled>
      {productList.map((item, index) => (
        <div
          className="item"
          key={index}
          onClick={() => router.push(`/store/${item.id}`)}
        >
          <div className="image">
            <Image
              src={item.img}
              alt="Thumbnail"
              fill
              sizes="100%"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="title">{locale === 'ko' ? item.title : item.enTitle}</p>
        </div>
      ))}
    </GridImageStyled>
  );
};

const GridImageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6.25rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .item {
    cursor: pointer;

    .image {
      position: relative;

      width: 31.25rem;
      height: 40.625rem;

      @media (max-width: 1200px) {
        /* width: 100%;
        height: 31.25rem; */
      }

      @media (max-width: 960px) {
        width: 100%;
        height: 31.25rem;
      }
    }

    .title {
      margin-top: 1.875rem;
      padding-left: 0.625rem;

      font-size: 1.875rem;
    }
  }
`;
