import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { SNAP_LOCK_MS } from '@/constants/scroll';
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

  options?: SwiperProps;

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

  options,

  className,
}: Props) => {
  return (
    <SwiperComponentStyled>
      <Swiper
        modules={[Autoplay, EffectFade, Mousewheel, Navigation, Pagination]}
        slidesPerView={'auto'}
        autoHeight={true}
        loop={loop}
        autoplay={autoplay ? { delay: duration } : false}
        effect={effect}
        mousewheel={
          mousewheel
            ? {
                releaseOnEdges: true,
                // 작은 델타도 한 칸은 넘어가야 하므로 낮게 둔다.
                thresholdDelta: 10,
                // 한 칸 넘긴 뒤 잠금. 없으면 트랙패드 관성이 여러 칸을 밀어 버린다.
                thresholdTime: SNAP_LOCK_MS,
              }
            : false
        }
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
                el: '.swiper-pagination',
                renderCustom: (swiper, current, total) => {
                  return customPagination
                    ? customPagination
                    : `
                <span class="swiper-pagination">${current}</span>
                `;
                },
              }
            : false
        }
        {...options}
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
    </SwiperComponentStyled>
  );
};

const SwiperComponentStyled = styled.div`
  .swiper-wrapper {
    height: 100% !important;

    .swiper-slide {
      height: 100%;
    }
  }
`;
