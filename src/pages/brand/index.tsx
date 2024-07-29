import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SwiperComponent } from '@/components/Swiper/SwiperComponent';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLanguage } from '@/layouts/Fixed/Language';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { Version1Footer } from '@/layouts/Footer/Version1';
import styled from 'styled-components';

const BrandPage = () => {
  const router = useRouter();
  const { locale } = router;

  const [windowHeight, setWindowHeight] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 960);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onSlideChange = () => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000);
  };

  if (windowHeight === 0) return null;

  return (
    <BrandPageStyled>
      <MenuButton top left />
      <FixedLogo className="header__logo" top centerHorizontal />
      <FixedLanguage top right />
      {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

      <SwiperComponent
        effect="fade"
        mousewheel
        direction="horizontal"
        navigation
        options={{
          onSlideChange(swiper) {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });

            if (swiper.activeIndex === 5) {
              onSlideChange();
            }
          },
        }}
      >
        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_1.jpg' : '/images/brand/1.jpg'}
          width="100%"
          height={`${windowHeight}px`}
          centerVertical
          centerHorizontal
          className="first"
        >
          <ImageOverlayChild
            className="fade move animate1"
            src="/images/logo/logo.svg"
            width="46.875rem"
            height="4.875rem"
          />

          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_2.jpg' : '/images/brand/2.jpg'}
          width="100%"
          height={`${windowHeight}px`}
          className="second"
        >
          <div className="text__container">
            <h1 className="title fade move animate1">
              {locale === 'en'
                ? "I'm Organic's Philosophy"
                : '아임 오가닉의 철학'}
            </h1>
            <p className="description fade move animate2">
              {locale === 'en' ? (
                <>
                  I&apos;m Organic is a company that manufactures organic oils
                  and natural products that take responsibility for skin health
                  with the power of nature. Our story begins with a deep
                  philosophy that respects nature and follows its timing. We
                  strive to capture the best gifts nature has to offer,
                  reflected in every product.
                </>
              ) : (
                <>
                  <p>
                    허브테라피 위드 코스메틱은 아임 오가닉 브랜드로 우즈벡에
                    진출했습니다.
                  </p>
                  <ul>
                    <li>한국에서 20년 연구 개발</li>
                    <li>자신있는 제품 기술</li>
                    <li>안전한 성분</li>
                  </ul>
                  <p>
                    자연의 시간을 존중하는 기업이며 이는 아임 오가닉 제품에
                    고스란히 반영되고 있습니다.
                  </p>
                </>
              )}
            </p>
          </div>

          <div className="prev__button">←</div>
          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_3.jpg' : '/images/brand/3.jpg'}
          width="100%"
          height={`${windowHeight}px`}
          className="second"
        >
          <div className="text__container">
            <h1 className="title center fade move animate1">
              {locale === 'en'
                ? 'Product Quality and Reliability'
                : '제품의 품질과 신뢰성'}
            </h1>
            <p className="description center fade move animate2">
              {locale === 'en' ? (
                <>
                  Believing in and respecting the power of nature, I&apos;m
                  Organic rigorously excludes synthetic preservatives and
                  formulates products using only the highest quality ingredients
                  derived from nature. This approach is our core principle,
                  creating products that are gentle yet effective on the skin.
                  we continuously research and strive to help our
                  customers&apos; skin regain and maintain its natural health.
                </>
              ) : (
                <>
                  자연이 가진 힘을 믿고 존중하는 아임 오가닉은 합성 방부제를
                  철저히 배제하고, <br />
                  자연에서 얻은 최고 품질의 재료들만을 사용하여 제품을
                  처방합니다. <br />
                  이러한 접근 방식은 피부에 순하면서도 효과적인 제품을 만들어
                  내는 <br />
                  저희의 핵심 원칙입니다. 저희는 고객의 피부가 본연의 건강함을
                  되찾고 <br />
                  유지할 수 있도록 돕기 위해 끊임없이 연구하고 노력하겠습니다.
                </>
              )}
            </p>
          </div>

          <div className="prev__button">←</div>
          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_4.jpg' : '/images/brand/4.jpg'}
          width="100%"
          height={`${windowHeight}px`}
          className="third"
        >
          <div className="text__container">
            <h1 className="title fade move animate1">
              {locale === 'en' ? (
                'Ethical Certification and Sustainable Development'
              ) : (
                <>
                  윤리적 인증과 <br />
                  지속 가능한 발전
                </>
              )}
            </h1>
            <p className="description fade move animate2">
              {locale === 'en' ? (
                <>
                  I&apos;m Organic realizes ethical and sustainable values with
                  products that are certified organic, vegan, and halal. We are
                  committed to not conducting animal testing and to not using
                  animal-derived ingredients, protecting the environment and
                  respecting the rights of all living beings.
                </>
              ) : (
                <>
                  아임 오가닉은 유기농, 비건 및 할랄 인증을 받은 제품으로,{' '}
                  <br />
                  윤리적이고 지속 가능한 가치를 실현하고 있습니다. <br />
                  저희는 동물 실험을 하지 않으며, 동물성 성분을 사용하지 않는
                  것을 <br />
                  원칙으로 삼아 환경을 보호하고 모든 생명체의 권리를 존중하고
                  있습니다.
                </>
              )}
            </p>
          </div>

          <div className="prev__button">←</div>
          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_5.jpg' : '/images/brand/5.jpg'}
          width="100%"
          height={`${windowHeight}px`}
          className="forth"
        >
          <div className="text__container">
            <h1 className="title center fade move animate1">
              {locale === 'en'
                ? 'Partnership with MEHRIGIYO'
                : 'MEHRIGIYO와의 파트너십'}
            </h1>
            <p className="description center fade move animate2">
              {locale === 'en' ? (
                <>
                  Our partnership with MEHRIGIYO in Uzbekistan is a key pillar
                  of I&apos;m Organic. By strengthening our skincare product
                  line with MEHRIGIYO&rsquo;s healthy organic ingredients, we
                  develop exceptional products using superior technology. <br />{' '}
                  <br />
                  Additionally, we promote sustainable development through
                  collaboration with local communities. We promise to continue
                  developing new products to offer to our customers.
                </>
              ) : (
                <>
                  우즈베키스탄의 MEHRIGIYO 회사와의 파트너십은 아임 오가닉의
                  중요한 축입니다. <br />
                  MEHRIGIYO의 건강한 유기농 원료로 스킨케어 제품 라인을
                  강화하고, <br />
                  우수한 기술로 뛰어난 제품을 개발하고 있습니다. <br />
                  <br />
                  또한, 지역 사회와의 협력을 통해 지속 가능한 개발을 촉진하고
                  있으며, <br />
                  앞으로도 지속적으로 새로운 제품을 개발하여 고객에게 제공할
                  것을 약속합니다. <br />
                </>
              )}
            </p>
          </div>

          <div className="prev__button">←</div>
          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_6.jpg' : '/images/brand/6.jpg'}
          width="100%"
          height={`${windowHeight}px`}
          centerVertical
          centerHorizontal
          className="fifth"
          key={'fifth'}
        >
          <div className="description fade move animate1">
            {locale === 'en' ? (
              <>
                I&apos;m Organic is a company that goes beyond simply making
                products, realizing values that are beneficial to both nature
                and people. Our journey is with all who seek skin health and
                beauty within the cycle of nature. Experience nature&apos;s
                gifts with I&apos;m Organic and enjoy radiant days with healthy
                skin.
              </>
            ) : (
              <>
                아임 오가닉은 단순히 제품을 만드는 것을 넘어, 자연과 사람
                모두에게 이로운 가치를 실현하는 기업입니다. <br />
                저희의 여정은 자연의 순환 속에서 피부의 건강과 아름다움을
                추구하는 모든 이들과 함께합니다. <br />
                아임 오가닉과 함께 자연의 선물을 경험하고, 건강한 피부로 빛나는
                하루를 만나보세요.
              </>
            )}
          </div>
          <ImageOverlayChild
            className="fade move animate2"
            src="/images/logo/logo.svg"
            width="46.875rem"
            height="4.875rem"
          />
          <div className="prev__button">←</div>
        </ImageOverlayChild>
      </SwiperComponent>

      <Version1Footer />
    </BrandPageStyled>
  );
};

const BrandPageStyled = styled.div`
  @media (max-width: 960px) {
    .header__logo {
      top: calc(var(--fixed-padding) + 0.5rem);
    }
  }

  .next__button {
    position: absolute;
    right: 5rem;
    bottom: 5rem;

    width: fit-content;

    padding: 0 1.5rem;

    color: #fff;
    z-index: 100;

    font-size: 3.75rem;
    font-family: 'NotoSansKR-Medium';

    &:hover {
      animation: shake 2s infinite;
    }

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(1rem);
      }
      100% {
        transform: translateX(0rem);
      }
    }

    cursor: pointer;
  }

  .prev__button {
    position: absolute;
    left: 5rem;
    bottom: 5rem;

    width: fit-content;

    padding: 0 1.5rem;

    color: #fff;
    z-index: 100;

    font-size: 3.75rem;
    font-family: 'NotoSansKR-Medium';

    &:hover {
      animation: reverseShake 2s infinite;
    }

    @keyframes reverseShake {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-1rem);
      }
      100% {
        transform: translateX(0rem);
      }
    }

    cursor: pointer;
  }

  .title {
    font-size: 4.75rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 1.8rem;

    font-family: Noto Sans;
    letter-spacing: -0.05%;
    line-height: 3.75rem;

    ul {
      padding-left: 2.5rem;
    }
  }

  .first {
    .children {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
    }
  }

  .second {
    .children {
      position: relative;

      height: 100%;

      .text__container {
        position: absolute;
        right: 2.5rem;
        bottom: 16rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 58.75rem;
        gap: 3.75rem;

        color: #fff;
        font-family: 'NotoSansKR-Medium';

        @media (max-width: 960px) {
          br {
            display: none;
          }
          right: 0;

          padding: 0 2.5rem;

          .center {
            text-align: center;
          }
        }
      }
    }
  }

  .third {
    .children {
      position: relative;

      height: 100%;

      .text__container {
        position: absolute;
        left: 6.25rem;
        bottom: 16rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 58.75rem;
        gap: 3.75rem;

        color: #fff;
        font-family: 'NotoSansKR-Medium';

        @media (max-width: 960px) {
          /* br {
            display: none;
          } */
          left: 0;

          padding: 0 2.5rem;
        }
      }
    }
  }

  .forth {
    .children {
      position: relative;

      height: 100%;

      .text__container {
        position: absolute;
        right: 2.5rem;
        top: 50%;
        transform: translateY(-50%);

        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 58.75rem;
        gap: 3.75rem;

        color: #fff;
        font-family: 'NotoSansKR-Medium';

        @media (max-width: 960px) {
          br {
            display: none;
          }
          position: relative;

          top: 0;
          transform: none;
          right: 0;

          justify-content: end;

          height: 100%;

          padding: 0 2.5rem;
          padding-bottom: 15rem;

          .center {
            text-align: center;
          }
        }
      }
    }
  }

  .fifth {
    .children {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 2.5rem;

      height: 100%;

      .description {
        color: #fff;
        text-align: center;
        line-height: 5rem;
      }

      @media (max-width: 960px) {
        padding: 0 2.5rem;

        br {
          display: none;
        }
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

BrandPage.layout = (page: React.ReactNode) => page;

BrandPage.layoutFillColor = 'black';

export default BrandPage;
