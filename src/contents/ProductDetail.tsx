import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { FullScreenImage } from '@/components/FullScreenImage';
import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { StepTypography } from '@/components/StepTypography';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

export const ProductDetail = ({ headerHeight = 0 }: Props) => {
  const router = useRouter();
  const { id } = router.query as unknown as { id: number };

  const { locale } = router;

  const [isMobile, setIsMobile] = useState(false);

  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    }
  }, []);

  const step = {
    1: {
      title: '프롬 라벤더 샴푸',
      enTitle: 'From Lavender Shampoo',
      router: '1',
      content: (
        <>
          <p>두피에 쌓인 각질과 여러 오염 물질을</p>
          <div className="one__line">
            <h3>자극 없이 깨끗하게 클렌징</h3>
            <p>해주는 두피 청정 샴푸입니다.</p>
          </div>
        </>
      ),
      enContent: (
        <>
          <p>
            This scalp purifying shampoo cleanses away dead skin cells and
            various impurities from the scalp gently and thoroughly.
          </p>
        </>
      ),
    },
    2: {
      title: '프롬 라벤더 트리트먼트',
      enTitle: 'From Lavender Treatment',
      router: '2',
      content: (
        <>
          <p>
            비타민 E와 영양소가 풍부한 식물성 오일이 샴푸 후 부스스한 모발에
          </p>
          <div className="one__line">
            <h3>윤기 코팅막을 형성</h3>
            <p>해 수분과 차분함을 더해줍니다.</p>
          </div>
        </>
      ),
      enContent: (
        <>
          <p>
            Enriched with Vitamin E and nutrients, this plant-based oil
            treatment forms a glossy coating on frizzy hair after shampooing,
            adding moisture and smoothness.
          </p>
        </>
      ),
    },
    3: {
      title: '프롬 라벤더 헤어 미스트',
      enTitle: 'From Lavender Hair Mist',
      router: '4',
      content: (
        <>
          <div className="one__line">
            <p>산뜻한 워터 입자로 모발 사이사이에&nbsp;</p>
            <h3>촘촘하게 영양을 공급</h3>
            <p>해 줍니다.</p>
          </div>
          <p>
            드라이 후 또는 모발이 건조할 때 수시로 사용하여 수분을 보충해
            주세요.
          </p>
        </>
      ),
      enContent: (
        <>
          <p>
            With its refreshing water-like texture, this hair oil provides deep
            nourishment to each strand. Use it after drying or whenever your
            hair feels dry to replenish moisture.
          </p>
        </>
      ),
    },
    4: {
      title: '프롬 라벤더 오일',
      enTitle: 'From Lavender Oil',
      router: '3',
      content: (
        <>
          <div className="one__line">
            <p>7가지 식물성 오일이&nbsp;</p>
            <h3>수분과 영양을 모발 속 깊은 곳까지</h3>
            <p>채워줍니다.</p>
          </div>
          <p>젖은 모발 또는 건조된 모발에 소량만으로도 뭉치지 않고</p>
          <p>자연스러운 윤기를 더해줍니다.</p>
        </>
      ),
      enContent: (
        <>
          <p>
            Contains 7 types of vegetable oils to deliver deep moisture and
            nutrition to hair. Just a small amount adds natural shine to wet or
            dry hair without causing clumps.
          </p>
        </>
      ),
    },
  };

  const dummyProduct = [
    {
      title: '프롬 라벤더 샴푸',
      enTitle: 'FROM LAVENDER SHAMPOO',
      effect: '두피각질완화 · 진정 · 딥클렌징',
      enEffect: 'Scalp keratin relief · Soothing · Deep cleansing',
      capacity: '200ml',
      description: (
        <>
          자연에서 온 라벤더수와 라벤더 오일을 담아
          <br />
          건강한 두피와 모발 컨디션을 조성해주는
          <br />
          두피 청정 라벤더 샴푸
        </>
      ),
      enDescription:
        'A scalp clean lavender shampoo that creates a healthy scalp and hair condition with natural lavender water and lavender oil',
      ingredients:
        '라벤더수(20,580ppm), 나이아신아마이드, 덱스판테놀, 12가지 자연유래 추출물, 식물유래 계면활성제, 라벤더오일(4,000ppm)',
      enIngredients:
        'Lavender Water(20,580ppm), Niacinamide, Dexpanthenol, 12 kinds of natural extracts, Plant-derived surfactants, Lavender Oil(4,000ppm)',
      howToUse:
        '적당량의 샴푸를 손에 덜어 충분히 젖은 두피와 모발에 거품을 낸 뒤 골고루 마사지한 후 미온수로 깨끗이 헹궈줍니다.',
      enHowToUse:
        'Take an appropriate amount of shampoo in your hand, lather it on your scalp and hair thoroughly, massage it evenly, and rinse it clean with lukewarm water.',
    },
  ];

  if (!id || !headerHeight) {
    return null;
  }

  return (
    <ProductDetailStyle $headerHeight={headerHeight}>
      <div className="top">
        <div className="left">
          <ImageOverlayChild
            src="/images/store/product1/1_0.jpg"
            width="100%"
            height={`calc(100vh - ${headerHeight}px)`}
          />

          {locale === 'ko' ? (
            <ImageOverlayChild
              src="/images/store/all_ditail_header.jpg"
              width="100%"
              height="108.25rem"
            />
          ) : (
            <ImageOverlayChild
              src="/images/store/all_ditail_header_en.jpg"
              width="100%"
              height="108.25rem"
            />
          )}

          {locale === 'ko' ? (
            <ImageOverlayChild
              src="/images/store/product1/1_1.jpg"
              width="100%"
              height="220.313rem"
            />
          ) : (
            <ImageOverlayChild
              src="/images/store/product1/1_2.jpg"
              width="100%"
              height="220.313rem"
            />
          )}

          {locale === 'ko' ? (
            <ImageOverlayChild
              src="/images/store/product1/1_3.jpg"
              width="100%"
              height="166.25rem"
            />
          ) : (
            <ImageOverlayChild
              src="/images/store/product1/1_4.jpg"
              width="100%"
              height="166.25rem"
            />
          )}
        </div>

        <div className="right">
          <h1>
            {locale === 'ko'
              ? dummyProduct[id - 1].title
              : dummyProduct[id - 1].enTitle}
          </h1>
          <div className="sub__title">
            <p>
              {locale === 'ko'
                ? dummyProduct[id - 1].effect
                : dummyProduct[id - 1].enEffect}
            </p>
            <span>{dummyProduct[id - 1].capacity}</span>
          </div>
          <div className="line" />

          <h2>
            {locale === 'ko'
              ? dummyProduct[id - 1].description
              : dummyProduct[id - 1].enDescription}
          </h2>
          <HoverArrowButton
            className="arrow__button"
            text={locale === 'ko' ? '구매하러 가기' : 'Go to purchase'}
            color="#403b35"
            width={locale === 'ko' ? '17rem' : '20rem'}
            padding="0.5rem 1.5rem"
          />
          <div className="product__detail" onClick={() => setIsShow1(!isShow1)}>
            <span>{isShow1 ? '-' : '+'}</span>
            <p>{locale === 'ko' ? '제품정보' : 'Product information'}</p>
          </div>
          {isShow1 && (
            <div className="product__detail__content">
              {locale === 'ko' ? (
                <>
                  <div>
                    제조국
                    <br />
                    제조사 및 책임판매업자
                  </div>
                  <div>
                    우즈베키스탄
                    <br />
                    (주) 허브테라피 위드 코스메틱스
                  </div>
                </>
              ) : (
                <>
                  <div>
                    Country of manufacture
                    <br />
                    Manufacturer and responsible seller
                  </div>
                  <div>
                    Uzbekistan
                    <br />
                    Herb Therapy with Cosmetics Co., Ltd.
                  </div>
                </>
              )}
            </div>
          )}
          <div className="product__detail" onClick={() => setIsShow2(!isShow2)}>
            <span>{isShow2 ? '-' : '+'}</span>
            <p>{locale === 'ko' ? '주요성분' : 'Main ingredients'}</p>
          </div>
          {isShow2 && (
            <>
              <div className="product__detail__content">
                <div>
                  {locale === 'ko'
                    ? dummyProduct[id - 1].ingredients
                    : dummyProduct[id - 1].enIngredients}
                </div>
              </div>
            </>
          )}
          <div className="product__detail" onClick={() => setIsShow3(!isShow3)}>
            <span>{isShow3 ? '-' : '+'}</span>
            <p>{locale === 'ko' ? '사용법' : 'How to use'}</p>
          </div>
          {isShow3 && (
            <>
              <div className="product__detail__content">
                <div>
                  {locale === 'ko'
                    ? dummyProduct[id - 1].howToUse
                    : dummyProduct[id - 1].enHowToUse}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bottom">
        {/* <div className="">
          <div className="">
            <FullScreenImage src="/images/store/4.png" alt="4" height="100%" />
          </div>

          <div className="">
            <h1>
              {locale === 'ko' ? '함께 사용해보세요' : 'USE TOGETHER WITH'}
            </h1>

            <h2 className="space">
              {locale === 'ko'
                ? '두피 청정 라벤더 솔루션'
                : 'SCALP CLEAN LAVENDER SOLUTION'}
            </h2>

            <div className="line" />

            <div className="step__container">
              {Object.entries(step).map(([key, value]) => (
                <StepTypography
                  key={key}
                  step={parseInt(key)}
                  title={locale === 'ko' ? value.title : value.enTitle}
                  id={value.router}
                  content={locale === 'ko' ? value.content : value.enContent}
                />
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="forth mobile">
          <div className="top">
            <ImageOverlayChild
              src="/images/store/5.png"
              width="100%"
              height="100%"
              top="4rem"
              centerHorizontal
            >
              <h1>
                {locale === 'ko' ? '함께 사용해보세요' : 'USE TOGETHER WITH'}
              </h1>
            </ImageOverlayChild>
          </div>

          <div className="bottom">
            <h2>
              {locale === 'ko'
                ? dummyProductList[id - 1].forthText.description
                : dummyProductList[id - 1].forthText.enDescription}
            </h2>
            <div className="line" />

            <div className="step__container">
              {Object.entries(dummyProductList[id - 1].forthText.step).map(
                ([key, value]) => (
                  <StepTypography
                    key={key}
                    step={parseInt(key)}
                    title={locale === 'ko' ? value.title : value.enTitle}
                    id={value.router}
                    content={locale === 'ko' ? value.content : value.enContent}
                  />
                ),
              )}
            </div>
          </div>
        </div> */}
    </ProductDetailStyle>
  );
};

const ProductDetailStyle = styled.div<{ $headerHeight: number }>`
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
  }
  display: flex;

  .left {
    display: flex;
    flex-direction: column;

    width: 59.375%;
    height: auto;
  }

  .right {
    position: sticky;
    top: ${({ $headerHeight }) => $headerHeight}px;

    display: flex;
    flex-direction: column;

    width: 40.625%;
    /* height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`}; */
    height: fit-content;

    padding: 8.75rem 7.5rem;

    color: #403b35;

    h1 {
      font-size: 2.75rem;
      font-family: 'NotoSansKR-Bold';
    }

    .sub__title {
      display: flex;
      justify-content: space-between;

      margin-top: 1.25rem;

      p {
        font-size: 1.125rem;
      }

      span {
        font-size: 1.375rem;
      }
    }

    .line {
      width: 100%;
      height: 0.125rem;

      margin: 1.25rem 0;

      background-color: #9f7bac;
    }

    h2 {
      font-size: 1.75rem;

      margin: 1.25rem 0;
    }

    .arrow__button {
      margin: 1.25rem 0;
    }

    .product__detail {
      display: flex;
      gap: 0.5rem;

      width: fit-content;

      margin-top: 1.25rem;

      cursor: pointer;

      color: #403b35;

      span {
        width: 1.5rem;

        font-size: 1.5rem;
        font-family: 'NotoSansKR-Bold';
      }

      p {
        font-family: 'NotoSansKR-Bold';
        font-size: 1.5rem;
      }
    }

    .product__detail__content {
      display: flex;
      gap: 0.5rem;

      margin: 0.5rem 2rem;

      div {
        font-size: 1.125rem;
      }
    }
  }
`;
