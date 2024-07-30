import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

interface Props {
  children: React.ReactNode[] | React.ReactNode;

  autoplay?: boolean;
  loop?: boolean;
  effect?: 'slide' | 'fade';
  className?: string;
}

export const FractionSwiper = ({
  children,
  autoplay = true,
  loop = true,
  effect = 'slide',
  className,
}: Props) => {
  return (
    <FractionSwiperStyled className={className}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        loop={loop}
        autoplay={autoplay ? { delay: 3000 } : false}
        effect={effect}
        pagination={{ type: 'fraction' }}
        navigation={{
          nextEl: '.next__button',
          prevEl: '.prev__button',
        }}
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
