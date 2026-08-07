import { useEffect, useRef, useState } from 'react';

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

  // 상세 이미지가 화면 열 개분이라 위쪽 구매 버튼은 한 번 지나치면 되돌아가기 어렵다.
  // 요약 블록이 위로 완전히 지나가면 하단 바가 대신 받는다.
  const textRef = useRef<HTMLDivElement>(null);
  const [isPastText, setIsPastText] = useState(false);

  // headerHeight 가 오기 전에는 아래에서 null 을 반환해 요소가 없다. 값이 도착하면 다시 건다.
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // isIntersecting 만 보면 히어로에 가려 아직 안 내려온 상태도 "지나감"이 된다.
    // 위쪽으로 빠져나갔을 때만 잡으려고 아래끝 좌표를 쓴다.
    const observer = new IntersectionObserver(([entry]) =>
      setIsPastText(entry.boundingClientRect.bottom <= 0),
    );
    observer.observe(text);

    return () => observer.disconnect();
  }, [headerHeight]);

  const step = {
    1: {
      title: '프롬 라벤더 샴푸',
      enTitle: 'From Lavender Shampoo',
      uzTitle: 'Lavandali Shampun',
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
      uzContent: (
        <>
          <p>
            {`Bosh terisini tozalovchi shampun o'lik hujayralarni va xar xil
            kirlarni bosh terisidan mayinlik bilan tozalaydi.`}
          </p>
        </>
      ),
    },
    2: {
      title: '프롬 라벤더 트리트먼트',
      enTitle: 'From Lavender Treatment',
      uzTitle: 'Lavandali balzam',
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
      uzContent: (
        <>
          <p>
            {`E vitamini va ozuqaviy moddalar bilan boyitilgan bu o'simlik moyi
            bilan ishlov berish shampundan keyin sochlarga yorqinlik baxsh
            etadi, ularni namlaydi va tekis qiladi.`}
          </p>
        </>
      ),
    },
    3: {
      title: '프롬 라벤더 헤어 미스트',
      enTitle: 'From Lavender Hair Mist',
      uzTitle: 'Lavandali soch spreyi',
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
      uzContent: (
        <>
          <div className="one__line">
            <p>
              {`O'zining tetiklashtiruvchi suv ko'rinishidagi tuzilishi bilan bu
              soch moyi har bir soch tolasini chuqur oziqlanishini ta'minlaydi.
              Sochlarni quritgandan so'ng foydalanish tavsiya etiladi.`}
            </p>
          </div>
        </>
      ),
    },
    4: {
      title: '프롬 라벤더 오일',
      enTitle: 'From Lavender Oil',
      uzTitle: 'Lavandali soch moyi',
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
      uzContent: (
        <>
          <div className="one__line">
            <p>
              {`Soch moyi tarkibida 7 turdagi o'simlik moylari mavjud bo'lib, ular
              sochlarni chuqur namlantiradi va oziqlantiradi. Soch moyidan kam
              miqdorda nam yoki quruq sochlarga foydalanish sochlarni hech
              qanday chigallarsiz tabiiy yorqinlik bilan ta'minlaydi.`}
            </p>
          </div>
        </>
      ),
    },
  };

  const dummyProduct = [
    {
      title: '프롬 라벤더 샴푸',
      enTitle: 'FROM LAVENDER SHAMPOO',
      uzTitle: 'Lavandali shampun',
      effect: '두피각질완화 · 진정 · 딥클렌징',
      enEffect: (
        <>
          Scalp keratin relief · Soothing <br />· Deep cleansing
        </>
      ),
      uzEffect: (
        <>
          {`Bosh terisini qazg'oqdan tozalovchi`}
          <br />· Tinchlantiruvchi · Chuqur tozalovchi
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
      link: 'https://uzum.uz/uz/product/muammoli-sochlar-uchun-2763556',
      enDescription:
        'A scalp clean lavender shampoo that creates a healthy scalp and hair condition with natural lavender water and lavender oil',
      uzDescription: (
        <>
          Ushbu shampun tabiiy lavanda gidrolati (gul suvi) va lavanda efir moyi
          aralashmasi yordamida bosh terisi va sochlarni sog‘lom holatda
          saqlashga yordam beradi.
        </>
      ),
      ingredients:
        '라벤더수(20,580ppm), 나이아신아마이드, 덱스판테놀, 12가지 자연유래 추출물, 식물유래 계면활성제, 라벤더오일(4,000ppm)',
      enIngredients:
        'Lavender Water(20,580ppm), Niacinamide, Dexpanthenol, 12 kinds of natural extracts, Plant-derived surfactants, Lavender Oil(4,000ppm)',
      uzIngredients:
        'Lavanda suvi (20,580 ppm), niatsinamid, deksapantenol, 12 turdagi tabiiy ekstraktlar, o‘simlikdan olingan surfaktantlar, lavanda moyi (4,000 ppm)',
      howToUse: (
        <>
          1. 먼저 머리를 부드럽게 빗어 주세요. <br />
          2. 온수로 두피와 모발을 충분히 적신 뒤 약 1분간 흡수될 수 있도록
          준비해 주세요.
          <br />
          3. 적당량의 샴푸(약 200SUM 동전 크기)를 손에 덜어 거품을 낸 후, 충분히
          젖은 두피와 모발에 골고루 도포하고 부드럽게 마사지해 주세요.
          <br />
          4. 1~3분간 유지한 뒤, 미온수로 깨끗이 헹궈 주세요.
        </>
      ),
      enHowToUse: (
        <>
          1. Gently brush your hair before washing. <br />
          2. Wet your scalp and hair thoroughly with warm water to prepare it
          for cleansing for about 1 minute.
          <br />
          3. Pump an appropriate amount of shampoo (about the size of a 200SUM
          coin) into your hands, lather, and apply evenly to your damp scalp and
          hair. Massage gently.
          <br />
          4. Leave it on for 1–3 minutes, then rinse thoroughly with lukewarm
          water.
        </>
      ),
      uzHowToUse:
        'Kaftingizga yetarli miqdorda shampun oling, uni bosh terisi va sochlarga yaxshilab ko‘pirtirib surting, bir tekis massaj qiling va iliq suv bilan yaxshilab yuvib tashlang.',
      firstHeight: '220.313rem',
      secondHeight: '156.25rem',
    },
    {
      title: '프롬 라벤더 트리트먼트',
      enTitle: 'FROM LAVENDER TREATMENT',
      uzTitle: 'Lavandali balzam',
      effect: '모발강화 · 부드러움 · 딥케어',
      enEffect: 'Hair strengthening · Softness · Deep care',
      uzEffect: 'Sochlarni mustahkamlash · Yumshoqlik · Chuqur parvarish',
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
      link: 'https://uzum.uz/uz/product/muammoli-sochlar-uchun-2763556',
      enDescription:
        'A hair-focused nutrition management lavender treatment that fills hair with moisture and nutrition from weak roots to split ends',
      uzDescription: (
        <>
          Soch ildizidan to‘kilib ketgan soch uchigacha.
          <br />
          Sochlarni namlik va ozuqa moddalar bilan to‘ldiruvchi
          <br />
          lavanda balzami
        </>
      ),
      ingredients:
        '라벤더수(20,580ppm), 아르간커넬오일, 해바라기오일, 18가지 자연유래 추출물, 글리세린, 라벤더오일(1,000ppm)',
      enIngredients:
        'Lavender Water(20,580ppm), Argan Kernel Oil, Sunflower Oil, 18 kinds of natural extracts, Glycerin, Lavender Oil(1,000ppm)',
      uzIngredients:
        'Lavanda suvi (20,580 ppm), argan yong‘og‘i yog‘i, kungaboqar yog‘i, 18 turdagi tabiiy ekstraktlar, glitserin, lavanda yog‘i (1,000 ppm)',
      howToUse: (
        <>
          1. 샴푸로 깨끗이 세정한 후, 물기를 가볍게 제거해 주세요.
          <br />
          2. 적당량 (약 200SUM 동전 크기)을 펌핑하여 두피를 제외한 모발 전체에
          고르게 발라 주세요.
          <br />
          3. 1~3분간 유지한 뒤, 미온수로 깨끗이 헹궈 주세요.
          <br />
          4. 뜨겁지 않은 바람으로 머리를 말려 주세요.
        </>
      ),
      enHowToUse: (
        <>
          1. After thoroughly cleansing your hair with shampoo, gently remove
          excess water.
          <br />
          2. Pump an appropriate amount and evenly distribute it throughout your
          hair, avoiding the scalp.
          <br />
          3. Dry with warm (not hot) air and apply a suitable amount again to
          dry hair for added nourishment.
        </>
      ),
      uzHowToUse:
        'Shampundan keyin sochlarni yaxshilab tozalang va ortiqcha suvni olib tashlang. Balzamni sochlarga teng ravishda surting, 1-3 daqiqa davomida qoldiring va iliq suv bilan yaxshilab yuvib tashlang.',
      firstHeight: '198.75rem',
      secondHeight: '205.625rem',
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
      uzTitle: 'Lavandali soch spreyi',
      effect: '유·수분밸런스 · 정전기방지 · 수분공급',
      enEffect: 'Oil and moisture balance · Anti-static · Moisture supply',
      uzEffect: 'Yog‘ va namlik balansi · Antistatik · Namlik ta’minoti',
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
      link: 'https://uzum.uz/uz/product/muammoli-sochlar-uchun-2763556',
      enDescription:
        'A lavender hair mist that easily replenishes gloss and nutrition anytime, anywhere',
      uzDescription: (
        <>
          Har qanday vaqtda va har qanday joyda
          <br />
          sochlaringizga yorqinlik va ozuqa moddalarini
          <br />
          qaytaruvchi lavanda soch spreyi
        </>
      ),
      ingredients:
        '라벤더수(20,580ppm), 20가지 자연유래 추출물, 라벤더오일(1,500ppm)',
      enIngredients:
        'Lavender Water(20,580ppm), 20 kinds of natural extracts, Lavender Oil(1,500ppm)',
      uzIngredients:
        'Lavanda suvi (20,580 ppm), 20 turdagi tabiiy ekstraktlar, lavanda yog‘i (1,500 ppm)',
      howToUse: (
        <>
          1. 사용전 가볍게 흔들어주세요.
          <br />
          2. 눈가를 피해 모발 부분을 향해 분사하여 흡수시켜주세요.
          <br />
          3. 샴푸 후 젖은 모발 또는 마른 모발 모두 사용 가능하며 푸석하고 건조할
          때마다 수시로 뿌려주세요.
        </>
      ),
      enHowToUse: (
        <>
          1. Shake lightly before use.
          <br />
          2. Spray onto the hair, avoiding the eye area, and allow it to absorb.
          <br />
          3. Can be used on both damp and dry hair after shampooing. Reapply as
          needed whenever hair feels dry or frizzy.
        </>
      ),
      uzHowToUse:
        'Foydalanishdan oldin yengil silkiting. Ko‘zlardan saqlaning va sochlarga purkash orqali so‘rilishini ta’minlang. Shampundan keyin nam yoki quruq sochlarga qo‘llash mumkin. Sochlar quruq yoki to‘kilganida qayta qo‘llang.',
      firstHeight: '193.125rem',
      secondHeight: '138.5rem',
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
      uzTitle: 'Lavandali soch moyi',
      effect: '모발영양 · 모발회복도움 · 자연윤기',
      enEffect: 'Hair nutrition · Hair recovery aid · Natural shine',
      uzEffect: 'Soch oziqlanishi · Sochni tiklashga yordam · Tabiiy yorqinlik',
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
      link: 'https://uzum.uz/uz/product/muammoli-sochlar-uchun-2763556',
      enDescription:
        'A lavender hair oil that fills hair with moisture and nutrition to the depths of the hair, adding smooth shine to each strand',
      uzDescription: (
        <>
          Sochlarni chuqur namlantiruvchi va oziqlantiruvchi
          <br />
          har bir soch tolasi uchun silliq yorqinlik
          <br />
          qo‘shuvchi lavanda soch moyi
        </>
      ),
      ingredients:
        '아나토씨오일, 동백나무씨오일, 아르간커넬오일, 호호바씨오일, 해바라기씨오일, 들콩오일, 라벤더오일(2,00ppm)',
      enIngredients:
        'Anatto Seed Oil, Camellia Seed Oil, Argan Kernel Oil, Jojoba Seed Oil, Sunflower Seed Oil, Meadowfoam Seed Oil, Lavender Oil(2,00ppm)',
      uzIngredients:
        'Anatto urug‘i yog‘i, kameliya urug‘i yog‘i, argan yong‘og‘i yog‘i, jojoba urug‘i yog‘i, kungaboqar urug‘i yog‘i, lavanda yog‘i (2,00 ppm)',
      howToUse: (
        <>
          1. 샴푸 클렌징을 꼼꼼하게 한 후 물기를 가볍게 제거해 주세요.
          <br />
          2. 적당량을 펌핑해 두피를 제외한 모발 전체에 골고루 펴 발라주세요.
          <br />
          3. 뜨겁지 않은 바람으로 드라이한 후 마른 모발에 한번 더 적당량을
          도포해줍니다.
        </>
      ),
      enHowToUse: (
        <>
          1. After thoroughly cleansing your hair with shampoo, gently remove
          excess water.
          <br />
          2. Pump an appropriate amount and evenly apply it to your hair,
          avoiding the scalp.
          <br />
          3. Dry with warm (not hot) air, then apply a suitable amount again to
          dry hair for added care.
        </>
      ),
      uzHowToUse:
        'Shampundan keyin sochlarni yaxshilab tozalang va ortiqcha suvni olib tashlang. Soch moyini sochlarga teng ravishda surting, sochlarni issiq bo‘lmagan havo bilan quriting va quruq sochlarga yana bir marta surting.',
      firstHeight: '190.25rem',
      secondHeight: '138.142.5rem',
    },
    {
      title: '라벤더 솔루션 마스크',
      enTitle: 'LAVENDER SOLUTION MASK',
      uzTitle: 'Lavanda yechim niqobi',
      effect: '피부진정 및 수분 공급 · 피부 장벽 강화',
      enEffect: (
        <>
          Skin soothing & Hydration <br />· Strengthen Skin Barrier
        </>
      ),
      uzEffect: (
        <>
          Teri tinchlantiruvchi va namlantiruvchi
          <br />· Teri to‘sig‘ini mustahkamlash
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
      link: 'https://uzum.uz/uz/product/yuz-niqobi-upakovka-1615841',
      enDescription:
        'A solution mask that soothes sensitive skin intensively and contains collagen-boosting ingredients',
      uzDescription: (
        <>
          Nozik terini intensiv tinchlantiruvchi
          <br />
          va kollagenni kuchaytiruvchi ingredientlarni
          <br />
          o‘z ichiga olgan yechim niqobi
        </>
      ),
      ingredients:
        '라벤더워터(20,580ppm), 베타-글루칸, 나이아신아마이드, 판테놀, 파파야추출물, 캐모마일추출물, 라벤더오일(100ppm)',
      enIngredients:
        'Lavender water(20,580ppm), Beta-glucan, Niacinamide, Panthenol, Papaya fruit extract, Chamomile flower extract, Lavender oil(100ppm)',
      uzIngredients:
        'Lavanda suvi (20,580 ppm), beta-glyukan, niatsinamid, pantenol, papayya meva ekstrakti, romashka gul ekstrakti, lavanda yog‘i (100 ppm)',
      howToUse: (
        <>
          1. 세안 후, 화장수로 피부 결을 정돈해 줍니다.
          <br />
          2. 마스크의 필름을 제거한 후 얼굴에 맞춰 밀착시켜줍니다
          <br />
          3. 15~20분 후 마스크를 떼어냅니다
          <br />
          4. 얼굴에 남은 에센스는 가볍게 두드려 흡수시켜줍니다.
        </>
      ),
      enHowToUse: (
        <>
          1. After washing face, condition skin by using skin toner.
          <br />
          2. After removing the film of the mask, fit it tightly to your face.
          <br />
          3. Remove the mask after 15 to 20 minutes.
          <br />
          4. Lightly tap the remaining essence on the face to allow it to be
          absorbed.
        </>
      ),
      uzHowToUse:
        'Yuzingizni yuvgandan so‘ng, terini toner bilan tozalang. Niqobning plyonkasini olib tashlagandan so‘ng, uni yuzingizga mahkam joylashtiring. 15-20 daqiqadan so‘ng niqobni olib tashlang. Yuzda qolgan essentsiyani yengil urib, so‘rilishini ta’minlang.',
      firstHeight: '220.125rem',
      secondHeight: '195.625rem',
    },
  ];

  if (!id || !headerHeight) {
    return null;
  }

  // 본문 버튼과 하단 알약은 생김새만 다르다. 문구와 목적지는 한쪽만 바뀌는 일이 없도록 모아 둔다.
  const buyText =
    locale === 'ko'
      ? '구매하러 가기'
      : locale === 'uz'
        ? 'Sotib olish'
        : 'GO TO BUY';

  const openStore = () =>
    window.open(dummyProduct[id - 1].link, '_blank', 'noopener');

  return (
    <>
      {/* SEO 는 같은 페이지에 함께 렌더되는 ProductDetail 이 담당한다.
          여기서도 넣으면 head 태그가 중복된다. */}
      <ProductDetailMobileStyle
        $headerHeight={headerHeight}
        className={className}
      >
        <ImageOverlayChild
          src={`/images/store/product${id}/main.jpg`}
          width="100%"
          height={`calc(100vh - ${headerHeight}px)`}
        />

        <div className="text" ref={textRef}>
          <h1>
            {locale === 'ko'
              ? dummyProduct[id - 1].title
              : locale === 'uz'
                ? dummyProduct[id - 1].uzTitle
                : dummyProduct[id - 1].enTitle}
          </h1>
          <div className="sub__title">
            <p>
              {locale === 'ko'
                ? dummyProduct[id - 1].effect
                : locale === 'uz'
                  ? dummyProduct[id - 1].uzEffect
                  : dummyProduct[id - 1].enEffect}
            </p>
            <span>{dummyProduct[id - 1].capacity}</span>
          </div>
          <div className="line" />

          <h2>
            {locale === 'ko'
              ? dummyProduct[id - 1].description
              : locale === 'uz'
                ? dummyProduct[id - 1].uzDescription
                : dummyProduct[id - 1].enDescription}
          </h2>
          <div className="arrow__button">
            <HoverArrowButton
              text={buyText}
              color="#403b35"
              width="100%"
              padding="1.5rem 1.5rem"
              onClick={openStore}
            />
          </div>
          <div className="info" onClick={() => setIsShow1(!isShow1)}>
            <span>{isShow1 ? '-' : '+'}</span>
            <p>
              {locale === 'ko'
                ? '제품정보'
                : locale === 'uz'
                  ? "Ma'lumot"
                  : 'Information'}
            </p>
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
              ) : locale === 'uz' ? (
                <>
                  <div className="info__item">
                    <h3>Ishlab chiqarilgan mamlakat</h3>
                    <p>O‘zbekiston</p>
                  </div>
                  <div className="info__item">
                    <h3>{`Ishlab chiqaruvchi va mas'ul sotuvchi`}</h3>
                    <p>HERBTHERAPY WITH COSMETICS</p>
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
            <p>
              {locale === 'ko'
                ? '주요성분'
                : locale === 'uz'
                  ? 'Asosiy tarkibiy qismlar'
                  : 'Main ingredients'}
            </p>
          </div>
          {isShow2 && (
            <>
              <div className="info__section">
                <div>
                  {locale === 'ko'
                    ? dummyProduct[id - 1].ingredients
                    : locale === 'uz'
                      ? dummyProduct[id - 1].uzIngredients
                      : dummyProduct[id - 1].enIngredients}
                </div>
              </div>
            </>
          )}
          <div className="info" onClick={() => setIsShow3(!isShow3)}>
            <span>{isShow3 ? '-' : '+'}</span>
            <p>
              {locale === 'ko'
                ? '사용법'
                : locale === 'uz'
                  ? 'Qo‘llash usuli'
                  : 'How to use'}
            </p>
          </div>
          {isShow3 && (
            <>
              <div className="info__section">
                <div>
                  {locale === 'ko'
                    ? dummyProduct[id - 1].howToUse
                    : locale === 'uz'
                      ? dummyProduct[id - 1].uzHowToUse
                      : dummyProduct[id - 1].enHowToUse}
                </div>
              </div>
            </>
          )}
        </div>

        {locale === 'ko' ? (
          <ImageOverlayChild
            src={
              id == 5
                ? '/images/store/mask_ditail.jpg'
                : '/images/store/all_ditail_header.jpg'
            }
            width="100%"
            height={id == 5 ? '274.625rem' : '90.25rem'}
            objectFit="contain"
          />
        ) : locale === 'uz' ? (
          <ImageOverlayChild
            src={
              id == 5
                ? '/images/store/mask_ditail_uz.jpg'
                : '/images/store/all_ditail_header_uz.jpg'
            }
            width="100%"
            height={id == 5 ? '274.625rem' : '90.25rem'}
            objectFit="contain"
          />
        ) : (
          <ImageOverlayChild
            src={
              id == 5
                ? '/images/store/mask_ditail_en.jpg'
                : '/images/store/all_ditail_header_en.jpg'
            }
            width="100%"
            height={id == 5 ? '274.625rem' : '90.25rem'}
            objectFit="contain"
          />
        )}

        {locale === 'ko' ? (
          <ImageOverlayChild
            src={`/images/store/product${id}/1_ko.jpg`}
            width="100%"
            height={`
            ${parseInt(dummyProduct[id - 1].firstHeight) - 30}rem`}
            objectFit="contain"
          />
        ) : locale === 'uz' ? (
          <ImageOverlayChild
            src={`/images/store/product${id}/1_uz.jpg`}
            width="100%"
            height={`
            ${parseInt(dummyProduct[id - 1].firstHeight) - 30}rem`}
            objectFit="contain"
          />
        ) : (
          <ImageOverlayChild
            src={`/images/store/product${id}/1_en.jpg`}
            width="100%"
            height={`
            ${parseInt(dummyProduct[id - 1].firstHeight) - 30}rem`}
            objectFit="contain"
          />
        )}

        {locale === 'ko' ? (
          <ImageOverlayChild
            src={`/images/store/product${id}/2_ko.jpg`}
            width="100%"
            height={`${parseInt(dummyProduct[id - 1].secondHeight) - 20}rem`}
            objectFit="contain"
          />
        ) : locale === 'uz' ? (
          <ImageOverlayChild
            src={`/images/store/product${id}/2_uz.jpg`}
            width="100%"
            height={`${parseInt(dummyProduct[id - 1].secondHeight) - 20}rem`}
            objectFit="contain"
          />
        ) : (
          <ImageOverlayChild
            src={`/images/store/product${id}/2_en.jpg`}
            width="100%"
            height={`${parseInt(dummyProduct[id - 1].secondHeight) - 20}rem`}
            objectFit="contain"
          />
        )}

        {locale === 'ko' ? (
          <ImageOverlayChild
            src={'/images/store/all_detail_footer.jpg'}
            width="100%"
            height={'57rem'}
          />
        ) : locale === 'uz' ? (
          <ImageOverlayChild
            src={'/images/store/all_detail_footer_uz.jpg'}
            width="100%"
            height={'57rem'}
          />
        ) : (
          <ImageOverlayChild
            src={'/images/store/all_detail_footer_en.jpg'}
            width="100%"
            height={'57rem'}
          />
        )}

        {locale === 'ko' ? (
          <ImageOverlayChild
            src={`/images/store/product${id}/3_ko.jpg`}
            width="100%"
            height={
              ['87.9rem', '85.9rem', '81rem', '70.5rem', '75.5rem'][id - 1]
            }
          />
        ) : locale === 'uz' ? (
          <ImageOverlayChild
            src={`/images/store/product${id}/3_uz.jpg`}
            width="100%"
            height={
              ['92.5rem', '92.5rem', '92.5rem', '70.5rem', '75.5rem'][id - 1]
            }
          />
        ) : (
          <ImageOverlayChild
            src={`/images/store/product${id}/3_en.jpg`}
            width="100%"
            height={
              ['92.5rem', '92.5rem', '92.5rem', '70.5rem', '75.5rem'][id - 1]
            }
          />
        )}

        {id != 5 && (
          <>
            <ImageOverlayChild
              className="together__top"
              src="/images/store/use_together_mo.png"
              width="100%"
              height="70rem"
              centerHorizontal
            ></ImageOverlayChild>

            <div className="text">
              <h1>
                {locale === 'ko'
                  ? '함께 사용해보세요'
                  : locale === 'uz'
                    ? "Birgalikda sinab ko'ring"
                    : 'USE TOGETHER WITH'}
              </h1>

              <h2 className="space">
                {locale === 'ko'
                  ? '두피 청정 라벤더 솔루션'
                  : locale === 'uz'
                    ? 'Bosh Terisini Tozalovchi Lavanda Eritmasi'
                    : 'SCALP CLEAN LAVENDER SOLUTION'}
              </h2>

              <div className="line" />

              <div className="step__container">
                {Object.entries(step).map(([key, value]) => (
                  <StepTypography
                    key={key}
                    step={parseInt(key)}
                    title={
                      locale === 'ko'
                        ? value.title
                        : locale === 'uz'
                          ? value.uzTitle
                          : value.enTitle
                    }
                    id={value.router}
                    content={
                      locale === 'ko'
                        ? value.content
                        : locale === 'uz'
                          ? value.uzContent
                          : value.enContent
                    }
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* 마지막 자식 + sticky bottom 이라 스크롤 내내 화면 아래에 떠 있다가
            상세가 끝나는 지점에서 제자리에 안착한다. fixed 와 달리 흐름에서 자리를
            차지하므로 푸터를 가리지 않게 할 보정이 필요 없다. */}
        <div className={`buy__bar ${isPastText ? 'visible' : ''}`}>
          <HoverArrowButton
            className="pill"
            text={buyText}
            color="#f3f0eb"
            padding="0.75rem 2rem"
            onClick={openStore}
          />
        </div>
      </ProductDetailMobileStyle>
    </>
  );
};

const ProductDetailMobileStyle = styled.div<{ $headerHeight: number }>`
  display: flex;
  flex-direction: column;

  padding-top: 4.75rem;

  .buy__bar {
    position: sticky;
    /* 화면 아래끝에 붙이지 않고 띄운다. GoTop 버튼과 같은 여백을 쓴다 */
    bottom: var(--fixed-padding);
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;

    /* 상세 이미지 끝과 푸터 사이에서 제자리에 앉을 때 숨 쉴 틈 */
    margin: 1.25rem 0;

    /* visibility 까지 꺼야 안 보이는 버튼에 탭 포커스가 걸리지 않는다 */
    opacity: 0;
    visibility: hidden;

    transition:
      opacity 0.3s,
      visibility 0.3s;

    &.visible {
      opacity: 1;
      visibility: visible;
    }

    /* 라벤더는 이 사이트에서 선과 호버로만 쓰였다. 면으로 칠하는 곳은 여기 하나뿐이다.
       #9f7bac 원색은 크림 글씨와 3.09:1 이라 본문 크기 글씨에 못 쓴다.
       같은 색상(hue 287도)에서 명도만 낮춰, 반투명이 가장 불리하게 깔리는 경우
       (뒤가 흰색)에도 4.98:1 로 AA 를 넘긴다. 불투명하게 깔리면 6.85:1. */
    .pill {
      /* inline-block 은 글줄 기준이라 글꼴마다 아래로 치우친다. 축을 직접 잡는다 */
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 999rem;
      border-color: rgba(102, 70, 111, 0.88);
      background-color: rgba(102, 70, 111, 0.88);
      /* 뒤에 깔린 상세 이미지가 글씨를 방해하지 않게 흐린다 */
      backdrop-filter: blur(0.5rem);

      box-shadow: 0 0.375rem 1rem rgba(64, 59, 53, 0.22);

      /* 아래 .text 블록 규칙이 자손 선택자라 버튼 안 span 까지 잡는다.
         padding 5rem 과 갈색 글씨가 그대로 내려와 알약을 부풀리고 글씨를 지운다.
         ponytail: 여기서만 되돌린다. 뿌리는 .text 를 > .text 로 바꾸는 것이지만
         그러면 본문 버튼 크기까지 같이 변한다. */
      .text {
        display: block;

        padding: 0 1.75rem 0 0;

        color: #f3f0eb;

        font-size: 1.5rem;
        /* 기본 normal 은 한글 글꼴에서 1.5 를 넘어 알약을 두껍게 만든다 */
        line-height: 1.2;
      }

      .standard__arrow__button {
        right: 1.5rem;

        font-size: 1.25rem;
      }

      /* 알약은 테두리가 곧 면이라 테두리를 지우는 기본 호버가 어울리지 않는다 */
      &:hover {
        border-color: rgba(102, 70, 111, 0.88);

        .standard__arrow__button {
          display: block;
          opacity: 1;
        }

        .hover__arrow__button {
          display: none;
        }
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .buy__bar {
      transition: none;
    }
  }

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
