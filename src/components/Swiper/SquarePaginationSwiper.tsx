import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

interface Props {
  children: React.ReactNode[] | React.ReactNode;

  className?: string;
}

export const SquarePaginationSwiper = ({ children, className }: Props) => {
  return (
    <SquarePaginationSwiperStyled className={className}>
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>
    </SquarePaginationSwiperStyled>
  );
};

const SquarePaginationSwiperStyled = styled.div`
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-pagination-bullet {
      border-radius: 0.25rem;

      width: 0.625rem;
      height: 0.625rem;
    }

    .swiper-pagination-bullet-active {
      width: 1rem;
      height: 1rem;
      background: #fff;
    }
  }
`;
