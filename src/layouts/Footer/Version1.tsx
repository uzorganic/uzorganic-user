import Link from 'next/link';
import { useRouter } from 'next/router';

import { FullScreenImage } from '@/components/FullScreenImage';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SnsList } from '@/components/SnsList';
import styled from 'styled-components';

export const Version1Footer = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <FooterStyled>
      <ImageOverlayChild
        className="footer__overlay"
        src="/images/footer/1.jpg"
        width="100%"
        height="26.25rem"
      >
        <div className="sns__container">
          <SnsList color="#f2efe9" hoverColor="#484036" gap="3.75rem" />
        </div>
        <div className="email">uzorganic@naver.com</div>
        <div className="company__info">
          {locale === 'en' ? (
            <>
              <Link href="/brand">COMPANY</Link>
              {/* <p>AGREEMENT</p> */}
              <Link href="/privacy_policy">PRIVACY POLICY</Link>
            </>
          ) : locale === 'uz' ? (
            <>
              <Link href="/brand">Kompaniya bilan tanishuv</Link>
              {/* <p>Foydalanish shartlari</p> */}
              <Link href="/privacy_policy">Maxfiylik Siyosati</Link>
            </>
          ) : (
            <>
              <Link href="/brand">회사소개</Link>
              {/* <p>이용약관</p> */}
              <Link href="/privacy_policy">개인정보처리방침</Link>
            </>
          )}
        </div>
      </ImageOverlayChild>
      <div className="logo">
        <FullScreenImage src="/images/logo/logo.svg" alt="" height="100%" />
      </div>

      {/* <div
        className="go__top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <ImageOverlayChild
          src="/images/footer/arrow_forward.svg"
          width="1.5rem"
          height="5rem"
        />
      </div> */}
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  /* mandatory 스냅에서 스냅 지점이 없는 꼬리 영역은 도달할 수 없게 된다.
     푸터 아래끝을 화면 아래끝에 맞추면 그 지점이 곧 문서 끝이다. */
  scroll-snap-align: end;
  scroll-snap-stop: always;

  position: relative;

  display: flex;
  justify-content: center;

  .footer__overlay {
    display: flex;
    align-items: center;
    flex-direction: column;

    padding-top: 5rem;

    .children {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 2.5rem;

      .email {
        color: #f2efe9;
        font-size: 1.125rem;
      }

      .company__info {
        display: flex;
        gap: 1.25rem;

        a {
          color: #fff;
          font-size: 1.125rem;

          text-decoration: none;

          cursor: pointer;
        }
      }
    }
  }

  .logo {
    position: absolute;

    bottom: 0;

    width: 78.75rem;
    height: 7.875rem;

    @media (max-width: 960px) {
      width: 100%;
      height: 6rem;
    }

    img {
      opacity: 0.3;

      object-fit: contain;
    }
  }

  .go__top {
    position: absolute;

    top: 2.25rem;
    right: 3rem;

    opacity: 0.5;

    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
