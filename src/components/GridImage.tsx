import Image from 'next/image';

import styled from 'styled-components';

export const GridImage = () => {
  const dummy = [
    '/images/store/shampoo1.png',
    '/images/store/shampoo2.png',
    '/images/store/oil1.png',
    '/images/store/oil2.png',
    '/images/store/mask1.png',
  ];

  return (
    <GridImageStyled>
      {dummy.map((item, index) => (
        <div className="item" key={index}>
          <div className="image">
            <Image
              src={item}
              alt="Thumbnail"
              fill
              sizes="100%"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="title">title</p>
        </div>
      ))}
    </GridImageStyled>
  );
};

const GridImageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.25rem;

  .item {
    .image {
      position: relative;

      width: 31.25rem;
      height: 40.625rem;
    }

    .title {
      margin-top: 1.875rem;
      padding-left: 0.625rem;

      font-size: 1.875rem;
    }
  }
`;
