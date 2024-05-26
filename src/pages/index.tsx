import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { CenterTitleAndButton } from '@/components/CenterTitleAndButton';
import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { FractionSwiper } from '@/components/Swiper/FractionSwiper';
import { ContactForm } from '@/contents/ContactForm';
import { FixedScrollButton } from '@/layouts/Fixed/ScrollButton';
import { HomeLayout } from '@/layouts/HomeLayout';
import { InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import styled from 'styled-components';

const Home = () => {
  const router = useRouter();
  const { locale } = router;

  const [isHover, setIsHover] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);

  const [temp, setTemp] = useState(false);

  useEffect(() => {
    const onSlideChange = () => {
      if (isScroll || temp) {
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
          window.scrollY % window.innerHeight > window.innerHeight - 100 &&
          window.scrollY % window.innerHeight < window.innerHeight - 2
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
  }, [currentScroll, isScroll, isScrollDown, isScrollUp, temp]);

  useEffect(() => {
    const checkScroll = () => {
      if (temp) {
        return;
      }

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
  }, [temp]);

  return (
    <HomeLayoutStyled>
      <FixedScrollButton isScroll={temp} setIsScroll={setTemp} />

      <FractionSwiper effect="fade" className="pc">
        <CenterTitleAndButton
          className="Logo"
          imageSrc="/images/main/1.png"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
              objectFit="contain"
            />
          }
          description={
            locale === 'en' ? (
              <>
                With our extensive experience, <br />
                I’m ORGANIC will continue to grow
                <p>as a company in harmony with nature.</p>
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
              objectFit="contain"
            />
          }
          description={
            locale === 'en' ? (
              <>
                <>
                  With our extensive experience, <br />
                  I’m ORGANIC will continue to grow
                  <p>as a company in harmony with nature.</p>
                </>
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
              objectFit="contain"
            />
          }
          description={
            locale === 'en' ? (
              <>
                <>
                  With our extensive experience, <br />
                  I’m ORGANIC will continue to grow
                  <p>as a company in harmony with nature.</p>
                </>
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

      <FractionSwiper effect="fade" className="mo">
        <CenterTitleAndButton
          className="Logo"
          imageSrc="/images/main/1_mb.jpg"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
              objectFit="contain"
            />
          }
          description={
            locale === 'en' ? (
              <>
                With our extensive experience, <br />
                I’m ORGANIC will continue to grow
                <p>as a company in harmony with nature.</p>
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
          imageSrc="/images/main/2_mb.jpg"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
              objectFit="contain"
            />
          }
          description={
            locale === 'en' ? (
              <>
                <>
                  With our extensive experience, <br />
                  I’m ORGANIC will continue to grow
                  <p>as a company in harmony with nature.</p>
                </>
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
          imageSrc="/images/main/3_mb.jpg"
          title={
            <ImageOverlayChild
              src="/images/logo/logo.svg"
              width="48rem"
              height="4.875rem"
              objectFit="contain"
            />
          }
          description={
            locale === 'en' ? (
              <>
                <>
                  With our extensive experience, <br />
                  I’m ORGANIC will continue to grow
                  <p>as a company in harmony with nature.</p>
                </>
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
        className="Lavender pc"
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
        className="Lavender mo"
        imageSrc="/images/main/9_mb.jpg"
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
        className="Youtube pc"
        imageSrc="/images/main/0.jpg"
        title={locale === 'en' ? 'Instagram' : '인스타그램'}
        description={
          locale === 'en' ? (
            'Check out the latest news on Instagram!'
          ) : (
            <>
              인스타그램에서 최신 소식을
              <br />
              확인해보세요!
            </>
          )
        }
        buttonComponent={
          <InstagramFilled
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              fontSize: '8rem',
              color: isHover ? '#9f7bac' : '#fff',
              cursor: 'pointer',
            }}
            onClick={() =>
              window.open('https://www.instagram.com/safocosmetics.uz/')
            }
          />
        }
      />

      <CenterTitleAndButton
        className="Youtube mo"
        imageSrc="/images/main/0_mb.jpg"
        title={locale === 'en' ? 'Instagram' : '인스타그램'}
        description={
          locale === 'en' ? (
            'Check out the latest news on Instagram!'
          ) : (
            <>
              인스타그램에서 최신 소식을
              <br />
              확인해보세요!
            </>
          )
        }
        buttonComponent={
          <InstagramFilled
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              fontSize: '8rem',
              color: isHover ? '#9f7bac' : '#fff',
              cursor: 'pointer',
            }}
            onClick={() =>
              window.open('https://www.instagram.com/safocosmetics.uz/')
            }
          />
        }
      />

      <ContactForm />
    </HomeLayoutStyled>
  );
};

const HomeLayoutStyled = styled.div`
  .pc {
    display: block;
  }

  .mo {
    display: none;
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

    .center {
      h1 {
        white-space: nowrap;
      }
    }

    .pc {
      display: none;
    }

    .mo {
      display: block;
    }
  }
`;

Home.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Home;
