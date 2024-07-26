import { useEffect, useState } from 'react';

import Image from 'next/image';
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

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 960);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrandPageStyled>
      <MenuButton top left />
      <FixedLogo top centerHorizontal />
      <FixedLanguage top right />
      {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

      <SwiperComponent
        effect="fade"
        mousewheel
        direction="horizontal"
        navigation
      >
        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_1.jpg' : '/images/brand/1.jpg'}
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
          className="first"
        >
          <ImageOverlayChild
            src="/images/logo/logo.svg"
            width="46.875rem"
            height="4.875rem"
          />
          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_2.jpg' : '/images/brand/2.jpg'}
          width="100%"
          height="100vh"
          className="second"
        >
          <div className="text__container">
            <h1 className="title">
              {locale === 'en'
                ? "I'm Organic's Philosophy"
                : '아임 오가닉의 철학'}
            </h1>
            <p className="description">
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
                  아임 오가닉은 자연의 힘으로 피부 건강을 책임지는 유기농 오일
                  및 천연 제품을 제조하는 기업입니다. <br />
                  저희의 이야기는 자연을 존중하고 자연의 시간을 따르는 깊은
                  철학에서 시작됩니다. <br />
                  자연이 제공하는 최고의 선물을 담아내기 위해 최선을 다하고
                  있으며, <br />
                  이는 저희의 모든 제품에 고스란히 반영되어 있습니다.
                </>
              )}
            </p>
          </div>

          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_3.jpg' : '/images/brand/3.jpg'}
          width="100%"
          height="100vh"
          className="second"
        >
          <div className="text__container">
            <h1 className="title">
              {locale === 'en'
                ? 'Product Quality and Reliability'
                : '제품의 품질과 신뢰성'}
            </h1>
            <p className="description">
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
                  내는 저희의 핵심 원칙입니다. <br />
                  저희는 고객의 피부가 본연의 건강함을 되찾고 유지할 수 있도록
                  돕기 위해 <br />
                  끊임없이 연구하고 노력하겠습니다.
                </>
              )}
            </p>
          </div>

          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_4.jpg' : '/images/brand/4.jpg'}
          width="100%"
          height="100vh"
          className="third"
        >
          <div className="third__item">
            <div className="left">
              <ImageOverlayChild
                src="/images/brand/7.png"
                width="37.25rem"
                height="29.25rem"
              />
            </div>
            <div className="right">
              <h1 className="title">
                {locale === 'en' ? (
                  'Ethical Certification and Sustainable Development'
                ) : (
                  <>
                    윤리적 인증과 <br />
                    지속 가능한 발전
                  </>
                )}
              </h1>
              <p className="description">
                {locale === 'en' ? (
                  <>
                    I&apos;m Organic realizes ethical and sustainable values
                    with products that are certified organic, vegan, and halal.
                    We are committed to not conducting animal testing and to not
                    using animal-derived ingredients, protecting the environment
                    and respecting the rights of all living beings.
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
            <div className="next__button">→</div>
          </div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_5.jpg' : '/images/brand/5.jpg'}
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
          className="forth"
        >
          <div className="text__container">
            <h1 className="title">
              {locale === 'en'
                ? 'Partnership with MEHRIGIYO'
                : 'MEHRIGIYO와의 파트너십'}
            </h1>
            <p className="description">
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
                  우수한 기술로 뛰어난 제품을 개발하고 있습니다. <br /> <br />
                  또한, 지역 사회와의 협력을 통해 지속 가능한 개발을 촉진하고
                  있으며, <br />
                  앞으로도 지속적으로 새로운 제품을 개발하여 고객에게 제공할
                  것을 약속합니다.
                </>
              )}
            </p>
          </div>

          <div className="next__button">→</div>
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_6.jpg' : '/images/brand/6.png'}
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
          className="fifth"
        >
          <div className="description">
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
            src="/images/logo/logo.svg"
            width="46.875rem"
            height="4.875rem"
          />
        </ImageOverlayChild>

        <ImageOverlayChild
          src={isMobile ? '/images/brand/mb_6.jpg' : '/images/brand/6.png'}
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
          className="fifth"
          key={'fifth'}
        >
          <div className="description">
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
            src="/images/logo/logo.svg"
            width="46.875rem"
            height="4.875rem"
          />
        </ImageOverlayChild>
      </SwiperComponent>

      <Version1Footer />
    </BrandPageStyled>
  );
};

const BrandPageStyled = styled.div`
  .next__button {
    position: absolute;
    right: 6.25rem;
    bottom: 5rem;

    color: #fff;
    z-index: 100;

    font-size: 3.75rem;
    font-family: 'NotoSansKR-Medium';

    cursor: pointer;
  }

  .title {
    font-size: 4.75rem;
  }

  .description {
    font-size: 1.8rem;

    font-family: Noto Sans;
    letter-spacing: -0.05%;
    line-height: 3.75rem;
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
        right: 3.75rem;
        bottom: 11.25rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 3.75rem;

        width: 73rem;

        color: #fff;
        font-family: 'NotoSansKR-Medium';

        @media (max-width: 960px) {
          br {
            display: none;
          }
          width: 53rem;
        }
      }
    }
  }

  .third {
    .children {
      width: 100%;
      height: 100%;
    }

    .third__item {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      color: #fff;
      font-family: 'NotoSansKR-Medium';

      .left {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50%;
        height: 100%;
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3.75rem;

        width: 50%;
        height: 100%;
      }

      @media (max-width: 960px) {
        flex-direction: column;

        .left {
          width: 100%;
          height: 50%;
          padding-top: 15rem;
        }

        .right {
          width: 100%;
          height: 50%;

          padding: 0 2.5rem;

          gap: 1.875rem;
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
        right: 5rem;
        bottom: 19.375rem;

        width: 73rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 3.75rem;

        color: #fff;
        font-family: 'NotoSansKR-Medium';

        @media (max-width: 960px) {
          br {
            display: none;
          }

          .title {
            font-size: 4.5rem;
          }

          right: 0;

          width: 100%;
          padding: 0 2.5rem;
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
`;

BrandPage.layout = (page: React.ReactNode) => page;

BrandPage.layoutFillColor = 'black';

export default BrandPage;
