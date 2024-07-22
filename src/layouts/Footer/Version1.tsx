import { FullScreenImage } from '@/components/FullScreenImage';
import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SnsList } from '@/components/SnsList';
import styled from 'styled-components';

export const Version1Footer = () => {
  return (
    <FooterStyled>
      <ImageOverlayChild
        className="footer__overlay"
        src="/images/footer/1.png"
        width="100%"
        height="26.25rem"
        brightness={0.7}
      >
        <div className="sns__container">
          <SnsList color="#f2efe9" hoverColor="#eee" gap="3.75rem" />
        </div>
        <div className="email">uzorganic@naver.com</div>
        <div className="company__info">
          <p>회사소개</p>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </div>
      </ImageOverlayChild>
      <div className="logo">
        <FullScreenImage src="/images/logo/logo.svg" alt="logo" height="100%" />
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
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
        color: #fff;
        font-size: 1.125rem;

        display: flex;
        gap: 1.25rem;
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
`;
