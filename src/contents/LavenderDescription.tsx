import { useRouter } from 'next/router';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import styled from 'styled-components';

export const LavenderDescription = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <LavenderDescriptionStyled>
      <div className="right">
        <ImageOverlayChild
          src="/images/lavender/1.png"
          width="100%"
          height="100vh"
        />
      </div>
      <div className="left">
        <h1>
          {locale === 'en'
            ? 'FROM LAVENDER HAIR LINE'
            : '프롬 라벤더 헤어 라인'}
        </h1>
        {locale === 'en' || <p>FROM LAVENDER HAIR LINE</p>}
        <h2>
          {locale === 'en' ? (
            <>
              Experience healthy hair with the natural 100% lavender fragrance.
              <br />
              The soothing effects and aromatic scent of lavender help relieve
              stress,
              <br />
              gently calm the scalp, and make hair soft and shiny.
              <br />
              The From Lavender Hair Line captures the vitality of nature
              <br />
              to make your daily hair care routine special.
            </>
          ) : (
            <>
              자연 그대로의 100% 라벤더 향으로 건강한 머릿결을 선사합니다.
              <br />
              라벤더의 진정 효과와 향기로운 아로마는 스트레스를 완화하고,
              <br />
              두피를 순하게 진정시키며, 모발을 부드럽고 윤기 있게 가꿔줍니다.
              <br />
              프롬 라벤더 헤어 라인은 자연의 생명력을 그대로 담아
              <br />
              매일의 헤어 케어를 특별하게 만들어 드립니다.
            </>
          )}
        </h2>
      </div>
    </LavenderDescriptionStyled>
  );
};

const LavenderDescriptionStyled = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;

  background: #f3f0eb;

  .right {
    width: 50%;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50%;

    padding: 0 6.5rem;

    color: #484036;

    h1 {
      font-size: 2.5rem;
      font-family: 'NotoSansKR-Bold';
      margin: 0;
      margin-bottom: 0.625rem;
    }

    p {
      font-size: 1.125rem;
      font-family: 'NotoSansKR-Light';
      margin: 0;
    }

    h2 {
      font-size: 1.75rem;
      margin: 0;

      margin-top: 3.75rem;
    }
  }
`;
