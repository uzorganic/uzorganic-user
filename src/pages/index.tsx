import { useState } from 'react';

import { useRouter } from 'next/router';

import { CenterTitleAndButton } from '@/components/CenterTitleAndButton';
import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SEO } from '@/components/SEO';
import { FractionSwiper } from '@/components/Swiper/FractionSwiper';
import { instagramUrl } from '@/constants/sns';
import { ContactForm } from '@/contents/ContactForm';
import { FixedScrollButton } from '@/layouts/Fixed/ScrollButton';
import { HomeLayout } from '@/layouts/HomeLayout';
import { InstagramFilled } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';

const HERO_SLIDES = [
  { src: '/images/main/1.png', mobileSrc: '/images/main/1_mb.jpg' },
  { src: '/images/main/2.jpg', mobileSrc: '/images/main/2_mb.jpg' },
  { src: '/images/main/3.jpg', mobileSrc: '/images/main/3_mb.jpg' },
];

const Home = () => {
  const router = useRouter();
  const { locale } = router;

  const [isHover, setIsHover] = useState(false);

  const more = locale === 'uz' ? "Ko'proq" : 'MORE';

  const heroDescription =
    locale === 'en' ? (
      <>
        With our extensive experience, <br />
        I’m ORGANIC will continue to grow
        <p>as a company in harmony with nature.</p>
      </>
    ) : locale === 'uz' ? (
      <>
        {`Bizning boy tajribamiz orqali, I'm Organic tabiat bilan uyg'unlashgan,`}{' '}
        <br />
        {`mukammallikka intiluvchi kompaniya sifatida rivojlanishda davom
      etmoqda.`}
      </>
    ) : (
      <>
        아임오가닉은 풍부한 경험으로 <br />
        자연과 함께하는 기업으로 나가겠습니다.
      </>
    );

  return (
    <>
      <SEO
        title={
          locale === 'en'
            ? 'I’m ORGANIC'
            : locale === 'uz'
              ? 'I’m ORGANIC'
              : 'I’m ORGANIC'
        }
        description={
          locale === 'en'
            ? 'Welcome to I’m ORGANIC, where we embrace nature and sustainability. Discover our organic products and join us in our journey towards a greener future.'
            : locale === 'uz'
              ? "Tabiat va barqarorlikni qabul qilgan I’m ORGANICga xush kelibsiz. Organik mahsulotlarimizni kashf eting va yashil kelajak sari sayohatimizga qo'shiling."
              : '자연과 지속 가능성을 포용하는 아임오가닉에 오신 것을 환영합니다. 우리의 유기농 제품을 발견하고 더 푸른 미래를 향한 여정에 동참하세요.'
        }
      />

      <SnapScroll />

      <HomeLayoutStyled>
        <FixedScrollButton />

        <FractionSwiper effect="fade">
          {HERO_SLIDES.map(({ src, mobileSrc }, index) => (
            <CenterTitleAndButton
              key={src}
              className="Logo"
              titleTag={index === 0 ? 'h1' : 'h2'}
              imageSrc={src}
              mobileImageSrc={mobileSrc}
              priority={index === 0}
              title={
                <ImageOverlayChild
                  src="/images/logo/logo.svg"
                  alt="I’m ORGANIC"
                  width="48rem"
                  height="4.875rem"
                  objectFit="contain"
                />
              }
              description={heroDescription}
              buttonComponent={
                <HoverArrowButton
                  text={more}
                  color="#fff"
                  onClick={() => router.push('/brand')}
                />
              }
            />
          ))}
        </FractionSwiper>

        <CenterTitleAndButton
          className="Lavender"
          titleTag="h2"
          imageSrc="/images/main/9.jpg"
          mobileImageSrc="/images/main/9_mb.jpg"
          title="LAVENDER"
          description={
            locale === 'en'
              ? 'OUR FIRST NATURE'
              : locale === 'uz'
                ? "bizning tabiatdan olingan birinchi o'simligimiz"
                : '우리의 첫번째 자연,'
          }
          buttonComponent={
            <HoverArrowButton
              text={more}
              onClick={() => router.push('/lavender')}
            />
          }
        />

        <CenterTitleAndButton
          className="Instagram"
          titleTag="h2"
          imageSrc="/images/main/0.jpg"
          mobileImageSrc="/images/main/0_mb.jpg"
          title={
            locale === 'en'
              ? 'Instagram'
              : locale === 'uz'
                ? 'Instagram'
                : '인스타그램'
          }
          description={
            locale === 'en' ? (
              'Check out the latest news on Instagram!'
            ) : locale === 'uz' ? (
              <>{`Instagramdagi so'ngi yangiliklar bilan tanishing!`}</>
            ) : (
              <>
                인스타그램에서 최신 소식을
                <br />
                확인해보세요!
              </>
            )
          }
          buttonComponent={
            <a
              href={instagramUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <InstagramFilled
                style={{
                  fontSize: '8rem',
                  color: isHover ? '#9f7bac' : '#fff',
                  cursor: 'pointer',
                }}
              />
            </a>
          }
        />

        <ContactForm titleTag="h2" />
      </HomeLayoutStyled>
    </>
  );
};

// createGlobalStyle 은 컴포넌트와 함께 붙었다 떨어지므로 메인 페이지에만 적용된다.
// mandatory 는 ContactForm(100vh 안에 폼)이 낮은 화면에서 잘릴 때 접근 불가가 되므로 금지.
const SnapScroll = createGlobalStyle`
  html {
    scroll-snap-type: y proximity;
  }
`;

const HomeLayoutStyled = styled.div`
  /* 직계 자식이 각 섹션. FixedScrollButton 은 position: fixed 라 스냅 대상이 아니다 */
  > * {
    scroll-snap-align: start;
  }

  .Logo {
    .center {
      .description {
        display: flex;
        flex-direction: column;

        margin-top: 1.5rem;
      }
    }
  }

  .Lavender {
    .center {
      h2 {
        font-family: 'NotoSansKR-Bold';
        letter-spacing: 0.05em;
      }
    }
  }

  .Instagram {
    .center {
      .button__container {
        margin-top: 1rem;
      }
    }
  }

  br {
    display: none;
  }

  @media (max-width: 960px) {
    br {
      display: block;
    }

    .center {
      h1,
      h2 {
        white-space: nowrap;
      }
    }
  }
`;

Home.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Home;
