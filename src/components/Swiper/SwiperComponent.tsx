import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { SNAP_LOCK_MS } from '@/constants/scroll';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Mousewheel, Navigation } from 'swiper/modules';

interface Props {
  children: React.ReactNode[] | React.ReactNode;

  loop?: boolean;

  effect?: 'slide' | 'fade';

  mousewheel?: boolean;
  direction?: 'horizontal' | 'vertical';

  navigation?: boolean;

  options?: SwiperProps;

  className?: string;
}

export const SwiperComponent = ({
  children,

  loop = false,

  effect = 'slide',

  mousewheel = false,
  direction = 'horizontal',

  navigation = false,

  options,

  className,
}: Props) => {
  return (
    <SwiperComponentStyled>
      <Swiper
        modules={[EffectFade, Mousewheel, Navigation]}
        slidesPerView={'auto'}
        loop={loop}
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
        // ponytail: 클래스 셀렉터는 document 전역에서 찾는다(navigation.mjs 의 getEl).
        // 한 페이지에 스와이퍼가 둘 이상 놓이면 버튼을 서로 뺏으므로 그때 ref 로 바꿀 것.
        navigation={
          navigation
            ? {
                nextEl: '.next__button',
                prevEl: '.prev__button',
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
