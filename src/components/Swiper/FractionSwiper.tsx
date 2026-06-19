import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

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
        modules={[Autoplay, EffectFade, Pagination]}
        loop={loop}
        autoplay={autoplay ? { delay: 3000 } : false}
        effect={effect}
        pagination={{ type: 'fraction' }}
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
  /* 스크롤 스냅 영역이므로 Swiper 초기화 타이밍과 무관하게 박스가 고정돼야 한다 */
  height: 100vh;

  .swiper {
    height: 100%;
  }

  .swiper-pagination-fraction {
    color: #fff;
    font-size: 1.375rem;
  }
`;
