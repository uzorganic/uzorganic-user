import { useRef } from 'react';
import { SwiperClass } from 'swiper/react';

import { useRouter } from 'next/router';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SwiperComponent } from '@/components/Swiper/SwiperComponent';
import styled from 'styled-components';

interface Props {
  options?: React.HTMLProps<HTMLDivElement>;
}

export const LavenderInteraction = ({ options }: Props) => {
  const router = useRouter();
  const { locale } = router;

  const swiperRef = useRef<SwiperClass | null>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const onSlideChange = () => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000);
  };

  return (
    <LavenderInteractionStyled {...options}>
      <SwiperComponent
        effect="fade"
        mousewheel
        direction="horizontal"
        navigation
        options={{
          onSlideChange(swiper) {
            if (swiper.activeIndex === 1) {
              onSlideChange();
            }
          },

          onSwiper: swiper => {
            swiperRef.current = swiper;
          },
        }}
      >
        <ImageOverlayChild
          src="/images/main/9.jpg"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        >
          <div className="first">
            <h1 className="title fade move animate1">LAVENDER</h1>
            <h2 className="sub fade move animate1">
              {locale === 'en' ? 'OUR FIRST NATURE' : '우리의 첫번째 자연,'}
            </h2>
            <p className="description fade move animate2">
              {locale === 'en' ? (
                <>
                  We have discovered strength and healing properties in
                  lavender,
                  <br />
                  which blooms peacefully even under the scorching summer sun.
                </>
              ) : (
                <>
                  저희는 한여름의 뜨거운 태양 아래서도 평온하게 피어나는
                  <br />
                  라벤더에서 강인함과 치유력을 발견했습니다.
                </>
              )}
            </p>

            <div className="next__button">→</div>
          </div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src="/images/main/9.jpg"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        >
          <div className="second">
            <h1 className="title fade fade move animate1">
              {locale === 'en' ? 'The Power of Lavender' : '라벤더의 힘'}
            </h1>
            <p className="description fade move animate2">
              {locale === 'en' ? (
                <>
                  Lavender is an herb native to the Mediterranean region, named
                  after the ancient Romans who used it in their bathwater.
                  <br />
                  For centuries, it has been widely used for medicinal and
                  cosmetic purposes and continues to be utilized in various
                  forms today.
                </>
              ) : (
                <>
                  라벤더는 지중해 지역이 원산지인 허브로, 고대 로마인들이
                  <br />
                  목욕물에 넣어 사용하던 것에서 이름이 유래했습니다.
                  <br />
                  수세기 동안 약용 및 미용 목적으로 널리 사용되어 왔으며,
                  <br />
                  오늘날에도 다양한 형태로 활용되고 있는 재료입니다.
                </>
              )}
            </p>

            {/* <div className="item__list fade move animate3">
              <div className="item">
                <div className="ellipse" />
                <h2>BODY / SKIN</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Anti-inflammatory and antibacterial effects,
                      <br />
                      relief of arthritis and muscle pain
                    </>
                  ) : (
                    '항염 및 항균 작용, 관절염, 근육통증 완화'
                  )}
                </p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>HAIR</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Promotes blood circulation in the scalp,
                      <br />
                      strengthens hair, and adds shine{' '}
                    </>
                  ) : (
                    '두피 혈액 순환 촉진, 모발 강화 및 윤기'
                  )}
                </p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>MIND</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Calms the mind and body, <br />
                      improves mood, alleviates insomnia{' '}
                    </>
                  ) : (
                    '심신 진정 및 기분 개선, 불면증 완화'
                  )}
                </p>
              </div>
            </div> */}
          </div>
        </ImageOverlayChild>
      </SwiperComponent>
    </LavenderInteractionStyled>
  );
};

const LavenderInteractionStyled = styled.div`
  color: white;
  text-align: center;

  .next__button {
    position: absolute;
    right: 6.25rem;
    bottom: 5rem;

    color: #fff;
    z-index: 100;

    font-size: 3.75rem;
    font-family: 'NotoSansKR-Medium';

    animation: shake 2s infinite;

    @keyframes shake {
      0% {
        transform: translateX(-1rem);
      }
      50% {
        transform: translateX(1rem);
      }
      100% {
        transform: translateX(-1rem);
      }
    }

    cursor: pointer;
  }

  .children {
    width: 100%;
  }

  .first {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    .title {
      font-size: 5rem;
      font-family: 'NotoSansKR-Bold';
      margin: 0;
      letter-spacing: 0.1em;
    }

    .sub {
      font-size: 2rem;
      margin: 0;

      margin-bottom: 3rem;
    }

    .description {
      font-size: 2rem;
      font-family: 'NotoSansKR-Medium';
      margin: 0;
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 3.5rem;
      font-family: 'NotoSansKR-Bold';
      margin: 0;

      margin-bottom: 3rem;
    }

    .description {
      font-size: 1.875rem;
      font-family: 'NotoSansKR-Medium';
      line-height: 4.125rem;
      margin: 0;

      margin-bottom: 5rem;
    }

    .item__list {
      display: flex;
      justify-content: center;
      gap: 6.25rem;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 1.125rem;

        h2 {
          font-size: 1.875rem;
          font-family: 'NotoSansKR-Bold';
          margin: 0;
        }

        .ellipse {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 50%;
          background-color: white;
        }

        p {
          font-size: 1.875rem;
          font-family: 'NotoSansKR-Medium';
          margin: 0;
        }
      }
    }

    @media (max-width: 960px) {
      .item__list {
        display: flex;
        flex-direction: column;

        p {
          margin: 0;
        }

        gap: 4.875rem;
      }
    }
  }

  .fade {
    opacity: 0;
  }

  .move {
    transform: translateY(-3.125rem);
  }

  .swiper-slide-active {
    .fade.move {
      animation:
        fadeIn 1s forwards,
        moveIn 1s forwards;

      &.animate1 {
        /* animation-delay: 0.3s; */
      }

      &.animate2 {
        animation-delay: 0.3s;
      }

      &.animate3 {
        animation-delay: 0.8s;
      }
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  @keyframes moveIn {
    to {
      transform: translateY(0);
    }
  }

  @keyframes moveOut {
    to {
      transform: translateY(3.125rem);
    }
  }
`;
