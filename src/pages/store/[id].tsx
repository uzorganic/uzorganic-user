import { useRef } from 'react';

import { useRouter } from 'next/router';

import { DualTypography } from '@/components/DualTypography';
import { FullScreenImage } from '@/components/FullScreenImage';
import { ImageWithOverlay } from '@/components/ImageWithOverlay';
import { ProductInfo } from '@/components/ProductInfo';
import { StepTypography } from '@/components/StepTypography';
import { ArrowNavigationSwiper } from '@/components/Swiper/ArrowNavigationSwiper';
import { SquarePaginationSwiper } from '@/components/Swiper/SquarePaginationSwiper';
import { link } from 'fs';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

const StoreDetail = ({ headerHeight = 0 }: Props) => {
  const router = useRouter();
  const { id } = router.query as unknown as { id: number };

  const ref = useRef<HTMLDivElement>(null);

  if (!id) {
    return null;
  }

  const dummyProduct1 = {
    firstImages: [
      '/images/main/1.png',
      '/images/main/2.png',
      '/images/main/3.png',
    ],
    firstProductInfo: {
      title: '프롬 라벤더 샴푸',
      description: '설페이트, 실리콘 프리 · 천연 아로마 오일 향 · 비건 포뮬라',
      content: (
        <>
          자연에서 온 라벤더수와 라벤더 오일을 담아 <br />
          건강한 두피와 모발 컨디션을 조성해주는 <br />
          두피 청정 라벤더 샴푸
        </>
      ),
      volume: '500ml',
      link: 'https://www.naver.com',
    },
    secondImages: ['/images/main/1.png', '/images/main/2.png'],
    secondTexts: [
      {
        title: '자연유래 추출물 11',
        description: '엄선된 12가지의 자연유래 추출물로 매일 사용해도 자극없이',
        contents: (
          <>
            <p>· 구기자추출물</p>
            <p>· 구기자추출물</p>
            <p>· 구기자추출물</p>
            <p>· 구기자추출물</p>
          </>
        ),
      },
      {
        title: '자연유래 추출물 11',
        description: '엄선된 12가지의 자연유래 추출물로 매일 사용해도 자극없이',
        contents: (
          <>
            <p>· 구기자추출물</p>
            <p>· 구기자추출물</p>
            <p>· 구기자추출물</p>
            <p>· 구기자추출물</p>
          </>
        ),
      },
    ],
    thirdImage: '/images/main/3.png',
    thirdText: {
      title: '은은하게 퍼지는 라벤더 향',
      description: '천연 100% 라벤더향으로 차분한 클렌징 시간을 선사합니다.',
    },
    forthText: {
      description: '두피 청정 라벤더 솔루션',
      step: {
        1: {
          title: '프롬 라벤더 샴푸',
          link: 'https://www.naver.com',
          content: (
            <>
              <p>두피에 쌓인 각질과 여러 오염 물질을</p>
              <div className="one__line">
                <h3>자극 없이 깨끗하게 클렌징</h3>
                <p>해주는 두피 청정 샴푸입니다.</p>
              </div>
            </>
          ),
        },
        2: {
          title: '프롬 라벤더 샴푸',
          link: 'https://www.naver.com',
          content: (
            <>
              <p>두피에 쌓인 각질과 여러 오염 물질을</p>
              <div className="one__line">
                <h3>자극 없이 깨끗하게 클렌징</h3>
                <p>해주는 두피 청정 샴푸입니다.</p>
              </div>
            </>
          ),
        },
        3: {
          title: '프롬 라벤더 샴푸',
          link: 'https://www.naver.com',
          content: (
            <>
              <p>두피에 쌓인 각질과 여러 오염 물질을</p>
              <div className="one__line">
                <h3>자극 없이 깨끗하게 클렌징</h3>
                <p>해주는 두피 청정 샴푸입니다.</p>
              </div>
            </>
          ),
        },
      },
    },
  };

  const dummyProductList = [dummyProduct1];

  return (
    <StoreDetailStyle $headerHeight={headerHeight}>
      <div className="first one__page">
        <SquarePaginationSwiper className="half">
          {dummyProductList[id - 1].firstImages.map((image, index) => (
            <FullScreenImage
              key={index}
              src={image}
              alt={`${index}`}
              height={`calc(100vh - ${headerHeight}px)`}
            />
          ))}
        </SquarePaginationSwiper>

        <ProductInfo
          className="half"
          headerHeight={headerHeight}
          title={dummyProductList[id - 1].firstProductInfo.title}
          description={dummyProductList[id - 1].firstProductInfo.description}
          content={dummyProductList[id - 1].firstProductInfo.content}
          volume={dummyProductList[id - 1].firstProductInfo.volume}
          link={dummyProductList[id - 1].firstProductInfo.link}
        />
      </div>

      <div className="second one__page">
        <h1 ref={ref}>건강한 성분을 듬뿍</h1>
        <ArrowNavigationSwiper>
          {dummyProductList[id - 1].secondImages.map((image, index) => (
            <div className="container" key={index}>
              <FullScreenImage
                src={image}
                alt={`${index}`}
                height={`calc((100vh - ${headerHeight}px - ${ref.current?.clientHeight}px - 3.125rem * 4) / 2)`}
              />
              <div className="text__content">
                <h2>{dummyProductList[id - 1].secondTexts[index].title}</h2>
                <h3>
                  {dummyProductList[id - 1].secondTexts[index].description}
                </h3>
                {dummyProductList[id - 1].secondTexts[index].contents}
              </div>
            </div>
          ))}
        </ArrowNavigationSwiper>
      </div>

      <div className="">
        <FullScreenImage
          src={dummyProductList[id - 1].thirdImage}
          alt="3"
          height="44.125rem"
        />

        <DualTypography
          className="dual__typography"
          primaryText={dummyProductList[id - 1].thirdText.title}
          secondaryText={dummyProductList[id - 1].thirdText.description}
        />
      </div>

      <div className="forth pc">
        <h1>함께 사용해보세요</h1>
        <div className="container">
          <div className="half"></div>
          <div className="half ">
            <h2 className="space">두피 청정 라벤더 솔루션</h2>
            <div className="line" />

            <div className="step__container">
              {Object.entries(dummyProductList[id - 1].forthText.step).map(
                ([key, value]) => (
                  <StepTypography
                    key={key}
                    step={parseInt(key)}
                    title={value.title}
                    link={value.link}
                    content={value.content}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="forth mobile">
        <div className="forth__top">
          <h1>함께 사용해보세요</h1>
        </div>

        <div className="forth__bottom">
          <h2>두피 청정 라벤더 솔루션</h2>
          <div className="line" />

          <div className="step__container">
            {Object.entries(dummyProductList[id - 1].forthText.step).map(
              ([key, value]) => (
                <StepTypography
                  key={key}
                  step={parseInt(key)}
                  title={value.title}
                  link={value.link}
                  content={value.content}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </StoreDetailStyle>
  );
};

const StoreDetailStyle = styled.div<{
  $headerHeight: number;
}>`
  .one__page {
    height: calc(100dvh - ${({ $headerHeight }) => $headerHeight}px);
  }

  .half {
    width: 50%;
  }

  .first {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second {
    display: flex;
    flex-direction: column;

    padding: 3.125rem;

    gap: 3.125rem;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      font-family: 'NotoSansKR-Bold';
    }

    .container {
      display: flex;
      flex-direction: column;
      height: calc(
        100vh - ${({ $headerHeight }) => $headerHeight}px - 3.125rem * 3
      );

      .text__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 50%;

        gap: 1.25rem;

        h2 {
          color: #484036;

          font-size: 1.875rem;
          font-family: 'NotoSansKR-Medium';
        }

        h3 {
          color: #777777;

          font-size: 1.875rem;
        }

        p {
          color: #777777;

          font-size: 1.25rem;
        }
      }
    }
  }

  .dual__typography {
    padding: 3.125rem;
  }

  .forth {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 3.125rem;

    background-color: #a4aeae;

    h1 {
      text-align: center;
      color: #fff;
      font-size: 2.5rem;
      font-family: 'NotoSansKR-Bold';
    }

    .container {
      display: flex;

      padding: 3.5rem;

      h2 {
        color: #fff;
        font-size: 1.875rem;
        font-family: 'NotoSansKR-Bold';
      }

      .line {
        width: 100%;
        height: 0.125rem;

        margin: 1.5rem 0;

        background-color: #fff;
      }

      .space {
        padding-left: 0.625rem;
      }

      .step__container {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
    }
  }

  .pc {
    display: block;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 960px) {
    .mobile {
      display: block;
    }

    .pc {
      display: none;
    }

    .first {
      flex-direction: column;

      height: calc((100vh - ${({ $headerHeight }) => $headerHeight}px) * 2);

      .half {
        width: 100%;
      }
    }

    .forth {
      background-color: #484036;

      .container {
        flex-direction: column;
      }

      .forth__bottom {
        padding: 4.625rem;

        background-color: #a4aeae;

        h2 {
          color: #fff;
          font-size: 1.875rem;
          font-family: 'NotoSansKR-Bold';
        }

        .line {
          width: 100%;
          height: 0.125rem;

          margin: 1.5rem 0;

          background-color: #fff;
        }
      }
    }
  }
`;

StoreDetail.layoutFillColor = 'black';

export default StoreDetail;
