import { useRouter } from 'next/router';

import { DualTypography } from '@/components/DualTypography';
import { FullScreenImage } from '@/components/FullScreenImage';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { ProductInfo } from '@/components/ProductInfo';
import { StepTypography } from '@/components/StepTypography';
import { ArrowNavigationSwiper } from '@/components/Swiper/ArrowNavigationSwiper';
import { SquarePaginationSwiper } from '@/components/Swiper/SquarePaginationSwiper';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

const StoreDetail = ({ headerHeight = 0 }: Props) => {
  const router = useRouter();
  const { id } = router.query as unknown as { id: number };
  const { locale } = router;

  if (!id || !headerHeight) {
    return null;
  }

  const dummyProduct1 = {
    firstImages: [
      '/images/store/shampoo1.png',
      '/images/main/2.png',
      '/images/main/3.png',
    ],
    firstProductInfo: {
      title: '프롬 라벤더 샴푸',
      enTitle: 'FROM LAVENDER SHAMPOO',
      description: '설페이트, 실리콘 프리 · 천연 아로마 오일 향 · 비건 포뮬라',
      enDescription:
        'Sulfate & Silicone Free · Natural Aroma Oil Scent · Vegan Formula',
      content: (
        <>
          자연에서 온 라벤더수와 라벤더 오일을 담아 <br />
          건강한 두피와 모발 컨디션을 조성해주는 <br />
          두피 청정 라벤더 샴푸
        </>
      ),
      enContent: (
        <>
          Scalp-cleansing lavender shampoo that <br />
          contains natural lavender water and lavender oil <br />
          to create healthy scalp and hair condition.
        </>
      ),
      volume: '200ml',
      link: '',
    },
    secondImages: [
      '/images/store/product1/1.png',
      '/images/store/product1/2.png',
      '/images/store/product1/3.png',
      '/images/store/product1/4.png',
    ],
    secondHeader: '건강한 성분을 듬뿍',
    enSecondHeader: 'Abundant healthy ingredients',
    secondTexts: [
      {
        title: '라벤더 워터 & 라벤더 오일',
        enTitle: 'Lavender Water & Lavender Oil',
        description:
          '뛰어난 진정 효능을 갖고 있어 예민해진 두피 진정에 도움을 줍니다.',
        enDescription: 'Helps to soothe sensitive scalp with excellent effect.',
        contents: <></>,
        enContents: <></>,
      },
      {
        title: '나이아신아마이드',
        enTitle: 'Niacinamide',
        description:
          '모발 건강에 필수적인 비타민B 복합체 중 하나로 피부의 천연 지질 (세라마이드) 장벽에 영양을 공급해 두피 활력에 도움을 줍니다.',
        enDescription:
          "One of the essential vitamin B complexes for hair health, it nourishes the skin's natural lipid (ceramide) barrier, helping to revitalize the scalp.",
        contents: <></>,
        enContents: <></>,
      },
      {
        title: '자연유래 추출물 12',
        enTitle: '12 Natural Extracts',
        description: '엄선된 12가지의 자연유래 추출물로 매일 사용해도 자극없이',
        enDescription:
          'Selected 12 natural extracts that can be used daily without irritation:',
        contents: (
          <div className="table">
            <p>· 구기자추출물</p>
            <p>· 구아바열매추출물</p>
            <p>· 다마스크장미추출물</p>
            <p>· 라임추출물</p>
            <p>· 스타아니스추출물</p>
            <p>· 오이추출물</p>
            <p>· 올리브나무잎추출물</p>
            <p>· 케일잎추출물</p>
            <p>· 락토코커스발효추출물</p>
            <p>· 브로콜리추출물</p>
            <p>· 한련초추출물</p>
            <p>· 황벽나무껍질추출물</p>
          </div>
        ),
        enContents: (
          <div className="table">
            <p>· Lycium Chinense Fruit Extract</p>
            <p>· Guava Fruit Extract</p>
            <p>· Rosa Damascena Flower Extract</p>
            <p>· Lime Extract</p>
            <p>· Star Anise Extract</p>
            <p>· Cucumber Extract</p>
            <p>· Olive Leaf Extract</p>
            <p>· Kale Leaf Extract</p>
            <p>· Lactococcus Ferment Extract</p>
            <p>· Broccoli Extract</p>
            <p>· Eclipta Prostrata Leaf Extract</p>
            <p>· Phellodendron Amurense Bark Extract</p>
          </div>
        ),
      },
      {
        title: '식물유래 계면활성제',
        enTitle: 'Plant-Derived Surfactant',
        description:
          '실리콘같이 인공 합성 성분이 아닌, 식물유래 계면활성제를 사용했습니다. 우리 피부과 유사한 약산성 pH 설계로 무너진 두피 유수분 밸런를 바로 잡아줘 자극 없이 두피와 모발을 케어해 건강한 환경을 유지하도록 도와줍니다.',
        enDescription:
          'We use plant-derived surfactants instead of synthetic ingredients like silicone. With a mild acidic pH design similar to our skin, it helps restore the oil and moisture balance of the scalp without irritation, ca ring for your scalp and hair to maintain a healthy environment.',
        contents: <></>,
        enContents: <></>,
      },
    ],
    thirdImage: '/images/store/product1/5.png',
    thirdText: {
      title: '은은하게 퍼지는 라벤더 향',
      enTitle: 'Subtle Lavender Scent',
      description: '천연 100% 라벤더향으로 차분한 클렌징 시간을 선사합니다.',
      enDescription:
        'Enjoy a soothing cleansing experience with the natural 100% lavender scent.',
    },
    forthText: {
      description: '두피 청정 라벤더 솔루션',
      enDescription: 'Scalp-cleansing lavender solution',
      step: {
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
                treatment forms a glossy coating on frizzy hair after
                shampooing, adding moisture and smoothness.
              </p>
            </>
          ),
        },
        3: {
          title: '프롬 라벤더 헤어 오일',
          enTitle: 'From Lavender Hair Oil',
          router: '3',
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
                With its refreshing water-like texture, this hair oil provides
                deep nourishment to each strand. Use it after drying or whenever
                your hair feels dry to replenish moisture.
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
                nutrition to hair. Just a small amount adds natural shine to wet
                or dry hair without causing clumps.
              </p>
            </>
          ),
        },
      },
    },
  };

  const dummyProduct2 = {
    firstImages: [
      '/images/store/shampoo2.png',
      '/images/main/2.png',
      '/images/main/3.png',
    ],
    firstProductInfo: {
      title: '프롬 라벤더 트리트먼트',
      enTitle: 'FROM LAVENDER TREATMENT',
      description: 'SLS/SLES, 실리콘 프리 · 천연 아로마 오일 향 · 비건 포뮬라',
      enDescription:
        'Sulfate & Silicon Free · Natural Aroma Oil Scent · Vegan Formula',
      content: (
        <>
          힘없는 모근부터 갈라진 모발 끝까지. <br />
          수분과 영양을 탄탄하게 채워주는 <br />
          모발 집중 영양 관리 라벤더 트리트먼트
        </>
      ),
      enContent: (
        <>
          Lavender treatment that fills moisture and nutrition <br />
          from weak hair roots to split hair ends.
        </>
      ),
      volume: '200ml',
      link: 'https://www.naver.com',
    },
    secondImages: [
      '/images/store/product2/1.png',
      '/images/store/product2/2.png',
      '/images/store/product2/3.png',
      '/images/store/product2/4.png',
    ],
    secondHeader: '건강한 성분을 듬뿍',
    enSecondHeader: 'Abundant healthy ingredients',
    secondTexts: [
      {
        title: '라벤더 워터 & 라벤더 오일',
        enTitle: 'Lavender Water & Lavender Oil',
        description:
          '뛰어난 진정 효능을 갖고 있어 예민해진 두피 진정에 도움을 줍니다.',
        enDescription: 'Helps to soothe sensitive scalp with excellent effect.',
        contents: <></>,
        enContents: <></>,
      },
      {
        title: '아르간커넬 오일',
        enTitle: 'Argan Kernel Oil',
        description:
          '풍부한 비타민 E를 함유하고 있으며 수분이 증발하는 것을 차단하여 탄력 있는 모발로 가꾸어줍니다.',
        enDescription:
          'Contains Rich in Vitamin E, these oils help  prevents moisture from evaporating, creating elastic hair.',
        contents: <></>,
        enContents: <></>,
      },
      {
        title: '해바라기 오일',
        enTitle: 'Sunflower Oil',
        description:
          '건조한 모발을 강화하는 데 도움을 주는 *영양소가 풍부하며 모발 겉 표면을 코팅해줍니다.',
        enDescription:
          "Rich in *nutrients that help strengthen dry hair and coat the hair's surface",
        contents: (
          <>
            *단백질, 리놀레인산, 올레인산 등의 불포화지방산, 레시틴,
            키르티노이드, 토코페롤, 비타민 A, C, D와 식이섬유 등
          </>
        ),
        enContents: (
          <>
            *Protein, linoleic acid, unsaturated fatty acids such as linoleic
            acid and oleic acid, lecithin, carotenoids, tocopherol, vitamins A,
            C, D, and dietary fiber etc.
          </>
        ),
      },
      {
        title: '자연유래 추출물 18',
        enTitle: '18 Natural Extracts',
        description:
          '엄선된 18가지의 자연유래 추출물로 푸석한 모발에 급속으로 수분 충전',
        enDescription:
          'Selected 18 natural extracts that can be used daily without irritation:',
        contents: (
          <div className="table">
            <p>· 다마스크장미추출물</p>
            <p>· 참당귀뿌리추출물</p>
            <p>· 대왕송잎추출물</p>
            <p>· 포도추출물</p>
            <p>· 노니추출물</p>
            <p>· 구기자추출물</p>
            <p>· 은행나무잎추출물</p>
            <p>· 고삼뿌리추출물</p>
            <p>· 하수오뿌리추출물</p>
            <p>· 파파야열매추출물</p>
            <p>· 고추열매추출물</p>
            <p>· 뽕나무뿌리추출물</p>
            <p>· 올리브추출물</p>
            <p>· 녹차추출물</p>
            <p>· 지치뿌리추출물</p>
            <p>· 캐모마일꽃추출물</p>
            <p>· 로즈마리추출물</p>
            <p>· 석류추출물</p>
          </div>
        ),
        enContents: (
          <div className="table">
            <p>· Rosa Damascena Flower Extract</p>
            <p>· Angelica Gigas Root Extract</p>
            <p>· Pinus Palustris Leaf Extract</p>
            <p>· Grape Extract</p>
            <p>· Morinda Citrifolia Extract</p>
            <p>· Lycium Chinense Fruit Extract</p>
            <p>· Ginkgo Leaf Extract</p>
            <p>· Sophora Flavescens Root Extract</p>
            <p>· Polygonum Multiflorum Root Extract</p>
            <p>· Carica Papaya (Papaya) Fruit Extract</p>
            <p>· Capsicum Annuum Fruit Extract</p>
            <p>· Morus Alba Root Extract</p>
            <p>· Olive Extract</p>
            <p>· Camellia Sinensis Leaf Extract</p>
            <p>· Lithospermum Erythrorhizon Root Extract</p>
            <p>· Anthemis Nobilis Flower Extract</p>
            <p>· Rosemary Extract</p>
            <p>· Punica Granatum Fruit Extract</p>
          </div>
        ),
      },
    ],
    thirdImage: '/images/store/product2/5.png',
    thirdText: {
      title: '은은하게 퍼지는 라벤더 향',
      enTitle: 'Subtle Lavender Scent',
      description:
        '천연 100% 라벤더향으로 모발 깊은 곳까지 촉촉함과 부드러운 향을 남깁니다.',
      enDescription:
        'leaves your hair deeply moisturized and softly scented with the natural 100% lavender scent.',
    },
    forthText: {
      description: '두피 청정 라벤더 솔루션',
      enDescription: 'Scalp-cleansing lavender solution',
      step: {
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
                treatment forms a glossy coating on frizzy hair after
                shampooing, adding moisture and smoothness.
              </p>
            </>
          ),
        },
        3: {
          title: '프롬 라벤더 헤어 오일',
          enTitle: 'From Lavender Hair Oil',
          router: '3',
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
                With its refreshing water-like texture, this hair oil provides
                deep nourishment to each strand. Use it after drying or whenever
                your hair feels dry to replenish moisture.
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
                nutrition to hair. Just a small amount adds natural shine to wet
                or dry hair without causing clumps.
              </p>
            </>
          ),
        },
      },
    },
  };

  const dummyProduct3 = {
    firstImages: [
      '/images/store/oil1.png',
      '/images/main/2.png',
      '/images/main/3.png',
    ],
    firstProductInfo: {
      title: '프롬 라벤더 헤어 오일',
      enTitle: 'FROM LAVENDER HAIR OIL',
      description: '설페이트 프리 · 천연 아로마 오일 향 · 비건 포뮬라',
      enDescription: 'Sulfate Free · Natural Aroma Oil Scent · Vegan Formula',
      content: (
        <>
          수분과 영양을 모발 속 깊은 곳까지 채워 <br />
          한 올 한 올 매끈하게 윤기를 더해주는 <br />
          라벤더 헤어 오일
        </>
      ),
      enContent: (
        <>
          Lavender Hair Oil deeply hydrates and <br />
          nourishes each strand, adding a sleek shine.
        </>
      ),
      volume: '50ml',
      link: 'https://www.naver.com',
    },
    secondImages: [
      '/images/store/product3/1.png',
      '/images/store/product3/2.png',
    ],
    secondHeader: '건강한 성분을 듬뿍',
    enSecondHeader: 'Abundant healthy ingredients',
    secondTexts: [
      {
        title: '라벤더 워터 & 라벤더 오일',
        enTitle: 'Lavender Water & Lavender Oil',
        description:
          '뛰어난 진정 효능을 갖고 있어 예민해진 두피 진정에 도움을 줍니다.',
        enDescription: 'Helps to soothe sensitive scalp with excellent effect.',
        contents: <></>,
      },
      {
        title: '식물유래 오일 7',
        description:
          '엄선된 7가지의 식물유래 오일이 소량만으로도 손상된 모발에 풍부한 영양을 전달',
        enDescription:
          'Carefully selected 7 plant-derived oils provide rich nutrition to damaged hair, even in small amounts:',
        contents: (
          <div className="table">
            <p>아나토씨오일 : 큐티클 보호</p>
            <p>동백나무씨오일 : 윤기있고 부드러운 모발 관리에 도움</p>
            <p>아르간커넬오일 : 모발 표면에 영양과 보습을 줌</p>
            <p>호호바씨오일 : 비타민 A등 풍부한 영양 함유</p>
            <p>해바라기씨오일 : 풍부한 지방산, 비타민B 함유</p>
            <p>돌콩오일 : 모발 본연의 힘과 자생력을 키우는데 도움</p>
            <p>라벤더오일 : 보습, 편안한 향 </p>
          </div>
        ),
        enContents: (
          <div className="table">
            <p>Annatto Seed Oil: Protects the cuticle</p>
            <p>Camellia Seed Oil: Helps maintain shiny and smooth hair</p>
            <p>
              Argan Kernel Oil: Provides nutrition and moisture to the hair
              surface
            </p>
            <p>Jojoba Seed Oil: Rich in Vitamin A and other nutrients</p>
            <p>Sunflower Seed Oil: Contains rich fatty acids and Vitamin B</p>
            <p>{"Soybean Oil: Helps strengthen hair's natural resilience"}</p>
            <p>Lavender Oil: Offers moisture and a calming scent</p>
          </div>
        ),
      },
    ],
    thirdImage: '/images/store/product3/3.png',
    thirdText: {
      title: '은은하게 퍼지는 라벤더 향',
      enTitle: 'Subtle Lavender Scent',
      description:
        '천연 100% 라벤더향으로 오래 간직하고 싶은 기분 좋은 향을 선사합니다.',
      enDescription:
        "Enjoy a Pleasant Scent You'll Want to Keep Forever with Natural 100% Lavender Fragrance.",
    },
    forthText: {
      description: '두피 청정 라벤더 솔루션',
      enDescription: 'Scalp-cleansing lavender solution',
      step: {
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
                treatment forms a glossy coating on frizzy hair after
                shampooing, adding moisture and smoothness.
              </p>
            </>
          ),
        },
        3: {
          title: '프롬 라벤더 헤어 오일',
          enTitle: 'From Lavender Hair Oil',
          router: '3',
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
                With its refreshing water-like texture, this hair oil provides
                deep nourishment to each strand. Use it after drying or whenever
                your hair feels dry to replenish moisture.
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
                nutrition to hair. Just a small amount adds natural shine to wet
                or dry hair without causing clumps.
              </p>
            </>
          ),
        },
      },
    },
  };

  const dummyProduct4 = {
    firstImages: [
      '/images/store/oil2.png',
      '/images/main/2.png',
      '/images/main/3.png',
    ],
    firstProductInfo: {
      title: '프롬 라벤더 헤어 미스트',
      enTitle: 'FROM LAVENDER HAIR MIST',
      description: '설페이트 프리 · 천연 아로마 오일 향 · 비건 포뮬라',
      enDescription: 'Sulfate Free · Natural Aroma Oil Scent · Vegan Formula',
      content: (
        <>
          미세한 워터 입자로 끈적임이나 뭉침없이 <br />
          건강한 모발을 위한 영양수, <br />
          라벤더 헤어 미스트
        </>
      ),

      enContent: (
        <>
          Lavender Hair Mist, Nutrient water for healthy hair <br />
          without stickiness or clumps, <br />
          using fine water particles.
        </>
      ),
      volume: '100ml',
      link: 'https://www.naver.com',
    },
    secondImages: [
      '/images/store/product4/1.png',
      '/images/store/product4/2.png',
    ],
    secondHeader: '건강한 성분을 듬뿍',
    enSecondHeader: 'Abundant healthy ingredients',
    secondTexts: [
      {
        title: '라벤더 워터 & 라벤더 오일',
        enTitle: 'Lavender Water & Lavender Oil',
        description:
          '뛰어난 진정 효능을 갖고 있어 예민해진 두피 진정에 도움을 줍니다.',
        enDescription: 'Helps to soothe sensitive scalp with excellent effect.',
        contents: <></>,
      },
      {
        title: '자연유래 추출물 20',
        enTitle: '20 Natural Extracts',
        description:
          '엄선된 20가지의 자연유래 추출물이 풍부한 수분을 충전해주고, 촉촉한 보습 코팅막을 형성해줍니다.',
        enDescription:
          'Carefully selected 20 natural extracts recharge your hair with moisture and form a hydrating protective layer:',
        contents: (
          <div className="table">
            <p>· 창포뿌리추출물</p>
            <p>· 고삼뿌리추출물</p>
            <p>· 녹차추출물</p>
            <p>· 고추열매추출물</p>
            <p>· 구기자추출물</p>
            <p>· 대왕송잎추출물</p>
            <p>· 파파야열매추출물</p>
            <p>· 뽕나무추출물</p>
            <p>· 지치뿌리추출물</p>
            <p>· 하수오뿌리추출물</p>
            <p>· 올리브추출물</p>
            <p>· 은행나무잎추출물</p>
            <p>· 포도추출물</p>
            <p>· 참당귀뿌리추출물</p>
            <p>· 노니열매추출물</p>
            <p>· 로즈마리추출물</p>
            <p>· 약모밀추출물</p>
            <p>· 다마스크장미추출물</p>
            <p>· 석류추출물</p>
            <p>· 캐모마일꽃추출물</p>
          </div>
        ),

        enContents: (
          <div className="table">
            <p>· Acorus Calamus Root Extract</p>
            <p>· Sophora Flavescens Root Extract</p>
            <p>· Camellia Sinensis Leaf Extract</p>
            <p>· Capsicum Annuum Fruit Extract</p>
            <p>· Lycium Chinense Fruit Extract</p>
            <p>· Pinus Palustris Leaf Extract</p>
            <p>· Carica Papaya (Papaya) Fruit Extract</p>
            <p>· Morus Alba Fruit Extract</p>
            <p>· Lithospermum Erythrorhizon Root Extract</p>
            <p>· Polygonum Multiflorum Root Extract</p>
            <p>· Olive Extract</p>
            <p>· Ginkgo Biloba Leaf Extract</p>
            <p>· Grape Extract</p>
            <p>· Angelica Gigas Root Extract</p>
            <p>· Morinda Citrifolia Fruit Extract</p>
            <p>· Rosemary Extract</p>
            <p>· Houttuynia Cordata Extract</p>
            <p>· Rosa Damascena Flower Extract</p>
            <p>· Punica Granatum Fruit Extract</p>
            <p>· Chamomile Flower Extract</p>
          </div>
        ),
      },
    ],
    thirdImage: '/images/store/product4/3.png',
    thirdText: {
      title: '은은하게 퍼지는 라벤더 향',
      enTitle: 'Subtle Lavender Scent',
      description: '천연 100% 라벤더향으로 모발을 산뜻하게 감싸줍니다.',
      enDescription:
        'leaves your hair feeling refreshed with Natural 100% Lavender Fragrance.',
    },
    forthText: {
      description: '두피 청정 라벤더 솔루션',
      enDescription: 'Scalp-cleansing lavender solution',
      step: {
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
                treatment forms a glossy coating on frizzy hair after
                shampooing, adding moisture and smoothness.
              </p>
            </>
          ),
        },
        3: {
          title: '프롬 라벤더 헤어 오일',
          enTitle: 'From Lavender Hair Oil',
          router: '3',
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
                With its refreshing water-like texture, this hair oil provides
                deep nourishment to each strand. Use it after drying or whenever
                your hair feels dry to replenish moisture.
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
                nutrition to hair. Just a small amount adds natural shine to wet
                or dry hair without causing clumps.
              </p>
            </>
          ),
        },
      },
    },
  };

  const dummyProduct5 = {
    firstImages: [
      '/images/store/mask1.png',
      '/images/main/2.png',
      '/images/main/3.png',
    ],
    firstProductInfo: {
      title: '라벤더 솔루션 마스크',
      enTitle: 'LAVENDER SOLUTION MASK',
      description: '천연 아로마 오일 향 · 천연 아로마 오일 향 · 비건 포뮬라',
      enDescription:
        'Eco-Friendly Sheet · Natural Aroma Oil Scent · Vegan Formula',
      content: (
        <>
          민감해진 피부를 집중적으로 진정시키며 <br />
          콜라겐 부스팅 성분을 더한 <br />
          라벤더 솔루션 마스크
        </>
      ),
      enContent: (
        <>
          Lavender Solution Mask that <br />
          intensively soothes sensitive skin <br />
          and includes collagen-boosting ingredients.
        </>
      ),
      volume: '25ml X 5ea',
      link: 'https://www.naver.com',
    },
    secondImages: [
      '/images/store/product5/1.png',
      '/images/store/product5/2.png',
      '/images/store/product5/3.png',
    ],
    secondHeader: '피부 속 깊은 곳부터,',
    enSecondHeader: 'From deep inside the skin,',
    secondTexts: [
      {
        title: '탄력있고 밝아진 피부',
        enTitle: 'Elastic and Brightened Skin',
        description:
          '피부 속 콜라겐을 부스팅 시켜 수분을 공급해주며 매끈하고 탄력 있는 피부 리프팅 효과를 줍니다.',
        contents: (
          <>
            {/* 유효성분 : 석류추출물, 녹차추출물, 베타-글루칸, 스클레로튬검,
            파파야추출물 */}
          </>
        ),
        enContents: (
          <>
            {/* + Active Ingredients */}
            {/* Punica Granatum (Pomegranate) Extract, Camellia Sinensis (Green Tea) Extract, Beta-Glucan, Sclerotium Gum, Carica Papaya (Papaya) Fruit Extract */}
          </>
        ),
      },
      {
        title: '마르지 않고 촉촉하게, 수분 잠금 시트',
        enTitle: 'Moisture-Locking Sheet',
        description:
          '고농축 앰플 27ml를 머금은 시트가 유효성분들을 오랜 시간 동안 마르지 않고, 피부 속까지 처음 느낌 그대로 유지됩니다.',
        enDescription:
          'The sheet, soaked with 27ml of high-concentration ampoule, keeps the active ingredients fresh and hydrated for a long time, ensuring deep absorption into the skin.',
        contents: <>유효성분 : 라벤더수, 글리세린, 알지닌, 올리브추출물</>,
        enContents: (
          <>
            {/* + Active Ingredients */}
            {/* Lavandula Angustifolia (Lavender) Water, Glycerin, Arginine, Olea Europaea (Olive) Fruit Extract */}
          </>
        ),
      },
      {
        title: '숨을 쉬는 섬유 시트',
        enTitle: 'Breathable Fiber Sheets',
        description:
          '부드러운 벨벳 느낌의 극세 텐셀과 고강도 텐셀의 조합으로 제작되어, 100% 셀룰로오스 재생섬유로 흡습성과 보온/보냉력이 뛰어납니다. 탁월한 밀착력으로 에센스를 효과적으로 전달하며, 피부에 자극이 적어 민감한 피부에도 사용 가능합니다. 또한, 비건 인증을 받은 친환경 시트입니다.',
        enDescription:
          'Made from a combination of ultra-fine Tencel with a soft velvet feel and high-strength Tencel, this 100% cellulose regenerated fiber offers excellent moisture absorption and temperature regulation. The sheet adheres perfectly to the skin,  delivering essence effectively with minimal irritation, making it suitable for sensitive skin. Additionally, it is an eco-friendly sheet certified as vegan.',
        contents: <></>,
        enContents: <></>,
      },
    ],
    thirdImage: '/images/store/product5/4.png',
    thirdText: {
      title: '자연을 담아 더 건강하게',
      enTitle: 'Healthier with Nature',
      description:
        '에탄올, 합성향료 등의 화학첨가물을 넣지 않았습니다. 자연 유래 라벤더수로 민감한 피부도 부담없이 매일 건강한 탄력을 채워주세요.',
      enDescription:
        'Experience deep hydration and a soothing touch with our Lavender Solution Mask.',
    },
    forthText: {
      description: '두피 청정 라벤더 솔루션',
      enDescription: 'Scalp-cleansing lavender solution',
      step: {
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
                treatment forms a glossy coating on frizzy hair after
                shampooing, adding moisture and smoothness.
              </p>
            </>
          ),
        },
        3: {
          title: '프롬 라벤더 헤어 오일',
          enTitle: 'From Lavender Hair Oil',
          router: '3',
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
                With its refreshing water-like texture, this hair oil provides
                deep nourishment to each strand. Use it after drying or whenever
                your hair feels dry to replenish moisture.
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
                nutrition to hair. Just a small amount adds natural shine to wet
                or dry hair without causing clumps.
              </p>
            </>
          ),
        },
      },
    },
  };

  const dummyProductList = [
    dummyProduct1,
    dummyProduct2,
    dummyProduct3,
    dummyProduct4,
    dummyProduct5,
  ];

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
          title={
            locale === 'ko'
              ? dummyProductList[id - 1].firstProductInfo.title
              : dummyProductList[id - 1].firstProductInfo.enTitle
          }
          description={
            locale === 'ko'
              ? dummyProductList[id - 1].firstProductInfo.description
              : dummyProductList[id - 1].firstProductInfo.enDescription
          }
          content={
            locale === 'ko'
              ? dummyProductList[id - 1].firstProductInfo.content
              : dummyProductList[id - 1].firstProductInfo.enContent
          }
          volume={dummyProductList[id - 1].firstProductInfo.volume}
          link={dummyProductList[id - 1].firstProductInfo.link}
        />
      </div>

      <div className="second one__page">
        <h1 className="second__header">
          {locale === 'ko'
            ? dummyProductList[id - 1].secondHeader
            : dummyProductList[id - 1].enSecondHeader}
        </h1>
        {headerHeight && (
          <ArrowNavigationSwiper>
            {dummyProductList[id - 1].secondImages.map((image, index) => (
              <div className="container" key={index}>
                <FullScreenImage src={image} alt={`${index}`} />
                <div className="text__content">
                  <DualTypography
                    primaryText={
                      locale === 'ko'
                        ? dummyProductList[id - 1].secondTexts[index].title
                        : dummyProductList[id - 1].secondTexts[index].enTitle
                    }
                    secondaryText={
                      locale === 'ko'
                        ? dummyProductList[id - 1].secondTexts[index]
                            .description
                        : dummyProductList[id - 1].secondTexts[index]
                            .enDescription
                    }
                  />
                  {locale === 'ko'
                    ? dummyProductList[id - 1].secondTexts[index].contents
                    : dummyProductList[id - 1].secondTexts[index].enContents}
                </div>
              </div>
            ))}
          </ArrowNavigationSwiper>
        )}
      </div>

      <div className="third">
        <FullScreenImage
          src={dummyProductList[id - 1].thirdImage}
          alt="3"
          height="44.125rem"
        />

        <DualTypography
          className="dual__typography"
          primaryText={
            locale === 'ko'
              ? dummyProductList[id - 1].thirdText.title
              : dummyProductList[id - 1].thirdText.enTitle
          }
          secondaryText={
            locale === 'ko'
              ? dummyProductList[id - 1].thirdText.description
              : dummyProductList[id - 1].thirdText.enDescription
          }
        />
      </div>

      {id != 5 && (
        <>
          <div className="forth pc">
            <h1>
              {locale === 'ko' ? '함께 사용해보세요' : 'USE TOGETHER WITH'}
            </h1>
            <div className="container">
              <div className="half"></div>
              <div className="half right">
                <h2 className="space">
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
                        content={
                          locale === 'ko' ? value.content : value.enContent
                        }
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="forth mobile">
            <div className="forth__top">
              <h1>
                {locale === 'ko' ? '함께 사용해보세요' : 'USE TOGETHER WITH'}
              </h1>
            </div>

            <div className="forth__bottom">
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
                      content={
                        locale === 'ko' ? value.content : value.enContent
                      }
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {id == 5 && (
        <div className="product5__forth one__page">
          <ImageOverlayChild
            src="/images/store/product5/5.png"
            width="100%"
            height="100%"
            bottom="3.125rem"
            left="3.125rem"
          >
            <div className="text__content">
              {locale === 'ko' ? (
                <>
                  <p>1. 세안 후 토너로 피부 결을 정돈해줍니다.</p>
                  <p>
                    2. 마스크의 필름을 제거한 후 얼굴에 맞춰 밀착시켜줍니다.
                  </p>
                  <p>3. 15~20분 후 마스크를 떼어냅니다.</p>
                  <p>4. 얼굴에 남은 에센스를 가볍게 두드려 흡수시켜줍니다.</p>
                </>
              ) : (
                <>
                  <p>
                    1. After washing face, condition skin by using skin toner.
                  </p>
                  <p>
                    2. After removing the film of the mask, fit it tightly to
                    your face.
                  </p>
                  <p>3. Remove the mask after 15 to 20 minutes.</p>
                  <p>
                    4. Lightly tap the remaining essence on the face to allow it
                    to be absorbed.
                  </p>
                </>
              )}
            </div>
          </ImageOverlayChild>

          <h1 className="header">
            {locale === 'ko' ? '사용방법' : 'HOW TO USE'}
          </h1>
        </div>
      )}
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
        align-items: center;

        height: 50%;

        margin: 3.125rem 0;

        gap: 1.25rem;

        overflow-y: auto;

        h2 {
          color: #484036;

          font-size: 1.875rem;
          font-family: 'NotoSansKR-Medium';
        }

        h3 {
          text-align: center;
          max-width: 77.5rem;

          color: #777777;

          font-size: 1.875rem;
        }

        p {
          color: #777777;

          font-size: 1.25rem;
        }

        .table {
          padding-top: 2.25rem;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;

          @media (max-width: 960px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }
      }
    }
  }

  .third {
    padding-top: 3.125rem;

    .dual__typography {
      padding: 3.125rem;
    }
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

  .product5__forth {
    position: relative;

    .header {
      position: absolute;
      top: 3.125rem;
      left: 50%;
      transform: translateX(-50%);

      color: #fff;
      font-size: 2.5rem;
    }

    .text__content {
      p {
        color: #fff;
        font-size: 1.875rem;
        line-height: 3.75rem;
        text-shadow: 0.1rem 0.1rem 0.375rem #00000080;
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

        .step__container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
      }
    }
  }
`;

StoreDetail.layoutFillColor = 'black';

export default StoreDetail;
