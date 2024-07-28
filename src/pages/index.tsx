import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { CenterTitleAndButton } from '@/components/CenterTitleAndButton';
import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { FractionSwiper } from '@/components/Swiper/FractionSwiper';
import { SwiperComponent } from '@/components/Swiper/SwiperComponent';
import { ContactForm } from '@/contents/ContactForm';
import { HomeLayout } from '@/layouts/HomeLayout';
import { YoutubeFilled } from '@ant-design/icons';
import styled from 'styled-components';

const Home = () => {
  const router = useRouter();
  const { locale } = router;

  const [isHover, setIsHover] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    const onSlideChange = () => {
      if (isScroll) {
        return;
      }

      if (window.scrollY > currentScroll) {
        setIsScrollDown(true);
        setIsScrollUp(false);
      } else {
        setIsScrollDown(false);
        setIsScrollUp(true);
      }

      setCurrentScroll(window.scrollY);

      if (isScrollDown) {
        if (
          window.scrollY % window.innerHeight > 10 &&
          window.scrollY % window.innerHeight < 50
        ) {
          setIsScroll(true);
          window.scrollTo({
            top:
              window.innerHeight *
              (Math.floor(window.scrollY / window.innerHeight) + 1),
            behavior: 'smooth',
          });
        }
      }

      if (isScrollUp) {
        if (
          window.scrollY % window.innerHeight > window.innerHeight - 50 &&
          window.scrollY % window.innerHeight < window.innerHeight - 10
        ) {
          setIsScroll(true);
          window.scrollTo({
            top:
              window.innerHeight *
              Math.floor(window.scrollY / window.innerHeight),
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('scroll', onSlideChange);

    return () => {
      window.removeEventListener('scroll', onSlideChange);
    };
  }, [currentScroll, isScroll, isScrollDown, isScrollUp]);

  useEffect(() => {
    const checkScroll = () => {
      if (
        window.scrollY % window.innerHeight < 5 ||
        window.scrollY % window.innerHeight > window.innerHeight - 5 ||
        window.scrollY + window.innerHeight >= document.body.scrollHeight
      ) {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <HomeLayoutStyled>
      <FractionSwiper effect="fade">
        <CenterTitleAndButton
          className="Logo"
          imageSrc="/images/main/1.png"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
            />
          }
          description={
            locale === 'en' ? (
              <>
                With our extensive experience,
                <br />
                I’m ORGANIC will continue to grow as a company in harmony with
                nature.
              </>
            ) : (
              <>
                아임오가닉은 풍부한 경험으로 <br />
                자연과 함께하는 기업으로 나가겠습니다.
              </>
            )
          }
          buttonComponent={
            <HoverArrowButton
              text={locale === 'en' ? 'MORE' : 'MORE'}
              color="#fff"
              onClick={() => router.push('/brand')}
            />
          }
        />
        <CenterTitleAndButton
          className="Logo"
          imageSrc="/images/main/2.jpg"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
            />
          }
          description={
            locale === 'en' ? (
              <>
                With our extensive experience,
                <br />
                I’m ORGANIC will continue to grow as a company in harmony with
                nature.
              </>
            ) : (
              <>
                아임오가닉은 풍부한 경험으로 <br />
                자연과 함께하는 기업으로 나가겠습니다.
              </>
            )
          }
          buttonComponent={
            <HoverArrowButton
              text={locale === 'en' ? 'MORE' : 'MORE'}
              color="#fff"
              onClick={() => router.push('/brand')}
            />
          }
        />
        <CenterTitleAndButton
          className="Logo"
          imageSrc="/images/main/3.jpg"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
            />
          }
          description={
            locale === 'en' ? (
              <>
                With our extensive experience,
                <br />
                I’m ORGANIC will continue to grow as a company in harmony with
                nature.
              </>
            ) : (
              <>
                아임오가닉은 풍부한 경험으로 <br />
                자연과 함께하는 기업으로 나가겠습니다.
              </>
            )
          }
          buttonComponent={
            <HoverArrowButton
              text={locale === 'en' ? 'MORE' : 'MORE'}
              color="#fff"
              onClick={() => router.push('/brand')}
            />
          }
        />
      </FractionSwiper>

      <CenterTitleAndButton
        className="Lavender"
        imageSrc="/images/main/9.jpg"
        title="LAVENDER"
        description={
          locale === 'en' ? 'OUR FIRST NATURE' : '우리의 첫번째 자연,'
        }
        buttonComponent={
          <HoverArrowButton
            text={locale === 'en' ? 'MORE' : 'MORE'}
            onClick={() => router.push('/lavender')}
          />
        }
      />

      <CenterTitleAndButton
        className="Youtube"
        imageSrc="/images/main/0.jpg"
        title={locale === 'en' ? 'YouTube' : '유튜브'}
        description={
          locale === 'en' ? (
            'Check out the latest news on YouTube!'
          ) : (
            <>
              유튜브에서 최신 소식을
              <br />
              확인해보세요!
            </>
          )
        }
        buttonComponent={
          <YoutubeFilled
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              fontSize: '8rem',
              color: isHover ? '#BC1515' : '#fff',
              cursor: 'pointer',
            }}
            onClick={() =>
              window.open('https://www.youtube.com/@user-vd6fe1ev3v')
            }
          />
        }
      />

      <ContactForm />
    </HomeLayoutStyled>
  );
};

const HomeLayoutStyled = styled.div`
  .Logo {
    .center {
      h1 {
        margin-bottom: 2rem;
      }
    }
  }

  .Lavender {
    .center {
      h1 {
        font-family: 'NotoSansKR-Bold';
        letter-spacing: 0.05em;
      }
    }
  }

  .Youtube {
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
  }
`;

Home.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Home;
