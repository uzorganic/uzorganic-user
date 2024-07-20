import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';

interface Props {
  children: React.ReactNode[] | React.ReactNode;

  loop?: boolean;

  autoplay?: boolean;
  duration?: number;

  effect?: 'slide' | 'fade';

  mousewheel?: boolean;
  direction?: 'horizontal' | 'vertical';

  navigation?: boolean;

  pagination?: boolean;
  paginationType?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
  customPagination?: string;

  className?: string;
}

export const SwiperComponent = ({
  children,

  loop = false,

  autoplay = false,
  duration = 3000,

  effect = 'slide',

  mousewheel = false,
  direction = 'horizontal',

  navigation = false,

  pagination = false,
  paginationType = 'bullets',
  customPagination,

  className,
}: Props) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Mousewheel, Navigation, Pagination]}
      loop={loop}
      autoplay={autoplay ? { delay: duration } : false}
      effect={effect}
      mousewheel={mousewheel}
      direction={direction}
      navigation={
        navigation
          ? {
              nextEl: '.next__button',
              prevEl: '.prev__button',
            }
          : false
      }
      pagination={
        pagination
          ? {
              clickable: true,
              type: paginationType,
              renderCustom: (swiper, current, total) => {
                return customPagination
                  ? customPagination
                  : `
                      <span class="swiper-pagination-current">${current}</span>
                    `;
              },
            }
          : false
      }
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))
      ) : (
        <SwiperSlide>{children}</SwiperSlide>
      )}
    </Swiper>
  );
};

const SwiperComponentStyled = styled.div``;
