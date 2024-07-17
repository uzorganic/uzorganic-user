import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

interface Props {
  children: React.ReactNode[] | React.ReactNode;

  controller?: any;
  setController?: any;

  ref?: any;
}

export const ArrowNavigationSwiper = ({
  children,
  controller,
  setController,
  ref,
}: Props) => {
  return (
    <ArrowNavigationSwiperStyled>
      <p className="prev__button">{'<'}</p>
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        controller={controller}
        onSwiper={setController}
        navigation={{
          nextEl: '.next__button',
          prevEl: '.prev__button',
        }}
        pagination={{ type: 'fraction' }}
        className="mySwiper"
        ref={ref}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>
      <p className="next__button">{'>'}</p>
    </ArrowNavigationSwiperStyled>
  );
};

const ArrowNavigationSwiperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4.375rem;

  .swiper {
    width: 100%;
  }

  .prev__button,
  .next__button {
    font-size: 5rem;
    font-family: 'Oranienbaum-Regular';
    color: #000;
    cursor: pointer;
  }
  .swiper-button-lock {
    display: block;
  }
`;
