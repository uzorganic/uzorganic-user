import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

export const FractionSwiper = ({ children }: Props) => {
  return (
    <FractionSwiperStyled>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        effect="fade"
        pagination={{
          type: 'fraction',
        }}
        modules={[Autoplay, EffectFade, Pagination]}
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
    </FractionSwiperStyled>
  );
};

const FractionSwiperStyled = styled.div`
  .swiper-pagination-fraction {
    color: #fff;
    font-size: 1.375rem;
  }
`;
