import { useState } from 'react';

import { useRouter } from 'next/router';

import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { StepTypography } from '@/components/StepTypography';
import styled from 'styled-components';

interface Props {
  headerHeight: number;

  className?: string;
}

export const ProductDetailMobile = ({ headerHeight = 0, className }: Props) => {
  const router = useRouter();
  const { id } = router.query as unknown as { id: number };

  const { locale } = router;

  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  const step = {
    1: {
      title: '프롬 라벤더 샴푸',
      enTitle: 'From Lavender Shampoo',
      router: '1',
      content: (
        <>
          <p>두피에 쌓인 각질과 여러 오염 물질을</p>
          <div className="one__line">
            <p>자극 없이 깨끗하게 클렌징 해주는 두피 청정 샴푸입니다.</p>
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
            <p>윤기 코팅막을 형성해 수분과 차분함을 더해줍니다.</p>
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
      router: '3',
      content: (
        <>
          <div className="one__line">
            <p>
              산뜻한 워터 입자로 모발 사이사이에 촘촘하게 영양을 공급해 줍니다.
            </p>
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
      router: '4',
      content: (
        <>
          <div className="one__line">
            <p>
              7가지 식물성 오일이 수분과 영양을 모발 속 깊은 곳까지 채워줍니다.
            </p>
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
      enEffect: (
        <>
          Scalp keratin relief · Soothing <br />· Deep cleansing
        </>
      ),
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
      firstHeight: '220.313rem',
      secondHeight: '166.25rem',
    },
    {
      title: '프롬 라벤더 트리트먼트',
      enTitle: 'FROM LAVENDER TREATMENT',
      effect: '모발강화 · 부드러움 · 딥케어',
      enEffect: 'Hair strengthening · Softness · Deep care',
      capacity: '200ml',
      description: (
        <>
          힘없는 모근부터 갈라진 모발 끝까지.
          <br />
          수분과 영양을 탄탄하게 채워주는
          <br />
          모발 집중 영양 관리 라벤더 트리트먼트
        </>
      ),
      enDescription:
        'A hair-focused nutrition management lavender treatment that fills hair with moisture and nutrition from weak roots to split ends',
      ingredients:
        '라벤더수(20,580ppm), 아르간커넬오일, 해바라기오일, 18가지 자연유래 추출물, 글리세린, 라벤더오일(1,000ppm)',
      enIngredients:
        'Lavender Water(20,580ppm), Argan Kernel Oil, Sunflower Oil, 18 kinds of natural extracts, Glycerin, Lavender Oil(1,000ppm)',
      howToUse:
        '샴푸 후 가볍게 물기를 제거한 후 적당량을 손에 덜어 두피를 제외한 모발 전체에 골고루 펴 발라줍니다. 3-5분 후에 깨끗이 헹구어 냅니다.',
      enHowToUse:
        'After shampooing, remove excess moisture lightly, take an appropriate amount in your hand, apply it evenly to the entire hair except the scalp, and rinse it clean after 3-5 minutes.',
      firstHeight: '208.75rem',
      secondHeight: '225.625rem',
    },
    {
      title: '프롬 라벤더 헤어 미스트',
      enTitle: (
        <>
          FROM LAVENDER
          <br />
          HAIR MIST
        </>
      ),
      effect: '유·수분밸런스 · 정전기방지 · 수분공급',
      enEffect: 'Oil and moisture balance · Anti-static · Moisture supply',
      capacity: '100ml',
      description: (
        <>
          언제어디서나 간편하게
          <br />
          윤기 & 영양을 충전해주는
          <br />
          라벤더 헤어 미스트
        </>
      ),
      enDescription:
        'A lavender hair mist that easily replenishes gloss and nutrition anytime, anywhere',
      ingredients:
        '라벤더수(20,580ppm), 20가지 자연유래 추출물, 라벤더오일(1,500ppm)',
      enIngredients:
        'Lavender Water(20,580ppm), 20 kinds of natural extracts, Lavender Oil(1,500ppm)',
      howToUse:
        '모발이 부스스하거나 건조하게 느껴질 때 2~3회 가볍게 흔들어 적당량을 분사한 후 흡수시켜 줍니다.',
      enHowToUse:
        'When your hair feels frizzy or dry, shake it lightly 2-3 times, spray an appropriate amount, and absorb it.',
      firstHeight: '203.125rem',
      secondHeight: '142.5rem',
    },
    {
      title: '프롬 라벤더 헤어 오일',
      enTitle: (
        <>
          FROM LAVENDER
          <br />
          HAIR OIL
        </>
      ),
      effect: '모발영양 · 모발회복도움 · 자연윤기',
      enEffect: 'Hair nutrition · Hair recovery aid · Natural shine',
      capacity: '50ml',
      description: (
        <>
          수분과 영양을 모발 속 깊은 곳까지 채워
          <br />
          한 올 한 올 매끈하게 윤기를 더해주는
          <br />
          라벤더 헤어 오일
        </>
      ),
      enDescription:
        'A lavender hair oil that fills hair with moisture and nutrition to the depths of the hair, adding smooth shine to each strand',
      ingredients:
        '아나토씨오일, 동백나무씨오일, 아르간커넬오일, 호호바씨오일, 해바라기씨오일, 들콩오일, 라벤더오일(2,00ppm)',
      enIngredients:
        'Anatto Seed Oil, Camellia Seed Oil, Argan Kernel Oil, Jojoba Seed Oil, Sunflower Seed Oil, Meadowfoam Seed Oil, Lavender Oil(2,00ppm)',
      howToUse:
        '샴푸 후 가볍게 물기를 제거하고, 젖은 모발이나 건조된 모발에 적당량을 덜어 모발 전체에 골고루 펴 발라줍니다. 건조할 때 자주 덧발라주세요.',
      enHowToUse:
        'After shampooing, remove excess moisture lightly, take an appropriate amount in your hand, apply it evenly to the entire hair except the scalp, and rinse it clean after 3-5 minutes.',
      firstHeight: '196.25rem',
      secondHeight: '145.142.5rem',
    },
    {
      title: '라벤더 솔루션 마스크',
      enTitle: 'LAVENDER SOLUTION MASK',
      effect: '모발영양 · 모발회복도움 · 자연윤기',
      enEffect: (
        <>
          Hair nutrition · Hair recovery aid <br />· Natural shine
        </>
      ),
      capacity: '200ml X 5ea',
      description: (
        <>
          민감해진 피부를 집중적으로 진정시키며
          <br />
          콜라겐 부스팅 성분을 더한
          <br />
          솔루션 마스크
        </>
      ),
      enDescription:
        'A solution mask that soothes sensitive skin intensively and contains collagen-boosting ingredients',
      ingredients:
        '아나토씨오일, 동백나무씨오일, 아르간커넬오일, 호호바씨오일, 해바라기씨오일, 들콩오일, 라벤더오일(2,00ppm)',
      enIngredients:
        'Anatto Seed Oil, Camellia Seed Oil, Argan Kernel Oil, Jojoba Seed Oil, Sunflower Seed Oil, Meadowfoam Seed Oil, Lavender Oil(2,00ppm)',
      howToUse: (
        <>
          1. 세안 후, 화장수로 피부 결을 정돈해 줍니다.
          <br />
          2. 마스크를 얼굴 모양에 맞춰 약 15~20분 동안 고르게 밀착시켜줍니다.
          <br />
          3. 마스크를 떼어내고, 남은 에센스는 가볍게 두드려 흡수시켜줍니다.
        </>
      ),
      enHowToUse:
        'Take an appropriate amount of shampoo in your hand, lather it on your scalp and hair thoroughly, massage it evenly, and rinse it clean with lukewarm water.',
      firstHeight: '208.75rem',
      secondHeight: '225.625rem',
    },
  ];

  if (!id || !headerHeight) {
    return null;
  }

  return (
    <ProductDetailMobileStyle
      $headerHeight={headerHeight}
      className={className}
    >
      <ImageOverlayChild
        src={`/images/store/product${id}/1_0.jpg`}
        width="100%"
        height={`calc(100vh - ${headerHeight}px)`}
      />

      <div className="text">
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
        <div className="arrow__button">
          <HoverArrowButton
            text={locale === 'ko' ? '구매하러 가기' : 'GO TO BUY'}
            color="#403b35"
            width="100%"
            padding="1.5rem 1.5rem"
          />
        </div>
        <div className="info" onClick={() => setIsShow1(!isShow1)}>
          <span>{isShow1 ? '-' : '+'}</span>
          <p>{locale === 'ko' ? '제품정보' : 'Information'}</p>
        </div>
        {isShow1 && (
          <div className="info__section">
            {locale === 'ko' ? (
              <>
                <div className="info__item">
                  <h3>제조국</h3>
                  <p>우즈베키스탄</p>
                </div>
                <div className="info__item">
                  <h3>제조사 및 책임판매업자</h3>
                  <p>(주)허브테라피 위드 코스메틱스</p>
                </div>
              </>
            ) : (
              <>
                <div className="info__item">
                  <h3>Country of manufacture</h3>
                  <p>Uzbekistan</p>
                </div>
                <div className="info__item">
                  <h3>Manufacturer and responsible seller</h3>
                  <p>HERBTHERAPY WITH COSMETICS</p>
                </div>
              </>
            )}
          </div>
        )}
        <div className="info" onClick={() => setIsShow2(!isShow2)}>
          <span>{isShow2 ? '-' : '+'}</span>
          <p>{locale === 'ko' ? '주요성분' : 'Main ingredients'}</p>
        </div>
        {isShow2 && (
          <>
            <div className="info__section">
              <div>
                {locale === 'ko'
                  ? dummyProduct[id - 1].ingredients
                  : dummyProduct[id - 1].enIngredients}
              </div>
            </div>
          </>
        )}
        <div className="info" onClick={() => setIsShow3(!isShow3)}>
          <span>{isShow3 ? '-' : '+'}</span>
          <p>{locale === 'ko' ? '사용법' : 'How to use'}</p>
        </div>
        {isShow3 && (
          <>
            <div className="info__section">
              <div>
                {locale === 'ko'
                  ? dummyProduct[id - 1].howToUse
                  : dummyProduct[id - 1].enHowToUse}
              </div>
            </div>
          </>
        )}
      </div>

      {locale === 'ko' ? (
        <ImageOverlayChild
          src="/images/store/all_ditail_header.jpg"
          width="100%"
          height="90rem"
        />
      ) : (
        <ImageOverlayChild
          src="/images/store/all_ditail_header_en.jpg"
          width="100%"
          height="90rem"
        />
      )}

      {locale === 'ko' ? (
        <ImageOverlayChild
          src={`/images/store/product${id}/1_1.jpg`}
          width="100%"
          height={`
            ${parseInt(dummyProduct[id - 1].firstHeight) - 30}rem`}
        />
      ) : (
        <ImageOverlayChild
          src={`/images/store/product${id}/1_2.jpg`}
          width="100%"
          height={`
            ${parseInt(dummyProduct[id - 1].firstHeight) - 30}rem`}
        />
      )}

      {locale === 'ko' ? (
        <ImageOverlayChild
          src={`/images/store/product${id}/1_3.jpg`}
          width="100%"
          height={`${parseInt(dummyProduct[id - 1].secondHeight) - 20}rem`}
        />
      ) : (
        <ImageOverlayChild
          src={`/images/store/product${id}/1_4.jpg`}
          width="100%"
          height={`${parseInt(dummyProduct[id - 1].secondHeight) - 20}rem`}
        />
      )}

      <ImageOverlayChild
        className="together__top"
        src="/images/store/5.png"
        width="100%"
        height="70rem"
        centerHorizontal
      ></ImageOverlayChild>

      <div className="text">
        <h1>{locale === 'ko' ? '함께 사용해보세요' : 'USE TOGETHER WITH'}</h1>

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
    </ProductDetailMobileStyle>
  );
};

const ProductDetailMobileStyle = styled.div<{ $headerHeight: number }>`
  display: flex;
  flex-direction: column;

  .bottom {
    display: flex;

    .right {
      padding: 7rem 2.5rem;

      .step__container {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    height: fit-content;

    padding: 5rem 7.5rem;

    color: #403b35;

    h1 {
      font-size: 2.75rem;
      font-family: 'NotoSansKR-Bold';
    }

    .sub__title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 1.25rem;

      p {
        font-size: 2rem;
      }

      span {
        white-space: nowrap;
        font-size: 1.5rem;
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

      line-height: 3rem;
    }

    .arrow__button {
      margin: 1.25rem 0;
    }

    .info {
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

    .info__section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      margin: 0.5rem 2rem;

      font-size: 1.125rem;
      font-family: 'NotoSansKR-Regular';

      .info__item {
        display: flex;
        gap: 1rem;

        h3 {
          font-size: 1.125rem;
          font-family: 'NotoSansKR-Bold';
        }

        p {
          font-size: 1.125rem;
          font-family: 'NotoSansKR-Regular';
        }
      }
    }
  }
`;
