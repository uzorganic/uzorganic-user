import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import styled from 'styled-components';

export const LavenderInteraction = () => {
  const router = useRouter();
  const { locale } = router;

  const [currentSection, setCurrentSection] = useState(1);
  const [sectionCount, setSectionCount] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;

      // if (window.innerWidth > 960) {
      if (scrollY < window.innerHeight / 3) {
        setCurrentSection(1);
      } else {
        setCurrentSection(2);
      }
      // } else {
      //   if (scrollY < window.innerHeight / 3) {
      //     setCurrentSection(1);
      //   } else if (scrollY < (window.innerHeight / 3) * 2) {
      //     setCurrentSection(2);
      //   } else {
      //     setCurrentSection(3);
      //   }
      // }
    };

    const sections = document.querySelectorAll('.section');
    if (window.innerWidth < 960) {
      setSectionCount(sections.length);
    } else {
      setSectionCount(sections.length - 1);
    }

    setWindowHeight(window.innerHeight);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <LavenderInteractionStyled
      $sectionCount={sectionCount}
      $windowHeight={windowHeight}
    >
      <div className="background__image">
        <ImageOverlayChild
          src="/images/main/9.jpg"
          width="100%"
          height="100vh"
        />
      </div>

      <div className="content">
        <div className={`section ${currentSection === 1 ? 'in' : 'out'}`}>
          <div className="intro">
            <h1 className="fade move first">LAVENDER</h1>
            <h2 className="fade move first">
              {locale === 'en' ? 'OUR FIRST NATURE' : '우리의 첫번째 자연,'}
            </h2>
            <p className="fade move second">
              {locale === 'en' ? (
                <>
                  We have discovered strength and healing properties in
                  lavender, which blooms peacefully even under the scorching
                  summer sun.
                </>
              ) : (
                <>
                  저희는 한여름의 뜨거운 태양 아래서도 평온하게 피어나는
                  <br />
                  라벤더에서 강인함과 치유력을 발견했습니다.
                </>
              )}
            </p>
          </div>
        </div>

        <div className={`section ${currentSection === 2 ? 'in' : 'out'}`}>
          <div className="last">
            <h1 className="fade move first">
              {locale === 'en' ? 'The Power of Lavender' : '라벤더의 힘'}
            </h1>
            <p className="fade move second">
              {locale === 'en' ? (
                <>
                  Lavender is an herb native to the Mediterranean region, named
                  after the ancient Romans who used it in their bathwater.
                  <br />
                  For centuries, it has been widely used for medicinal and
                  cosmetic purposes and continues to be utilized in various
                  forms today.
                </>
              ) : (
                <>
                  라벤더는 지중해 지역이 원산지인 허브로, 고대 로마인들이
                  <br />
                  목욕물에 넣어 사용하던 것에서 이름이 유래했습니다.
                  <br />
                  수세기 동안 약용 및 미용 목적으로 널리 사용되어 왔으며,
                  <br />
                  오늘날에도 다양한 형태로 활용되고 있는 재료입니다.
                </>
              )}
            </p>
            <div className="fade move third item__list">
              <div className="item">
                <div className="ellipse" />
                <h2>BODY / SKIN</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Anti-inflammatory and antibacterial effects,
                      <br />
                      relief of arthritis and muscle pain
                    </>
                  ) : (
                    '항염 및 항균 작용, 관절염, 근육통증 완화'
                  )}
                </p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>HAIR</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Promotes blood circulation in the scalp,
                      <br />
                      strengthens hair, and adds shine{' '}
                    </>
                  ) : (
                    '두피 혈액 순환 촉진, 모발 강화 및 윤기'
                  )}
                </p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>MIND</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Calms the mind and body, <br />
                      improves mood, alleviates insomnia{' '}
                    </>
                  ) : (
                    '심신 진정 및 기분 개선, 불면증 완화'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`section ${currentSection === 3 ? 'in' : 'out'}`}>
          <div className="final">
            <div className="fade move third item__list">
              <div className="item">
                <div className="ellipse" />
                <h2>BODY / SKIN</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Anti-inflammatory and antibacterial effects,
                      <br />
                      relief of arthritis and muscle pain
                    </>
                  ) : (
                    '항염 및 항균 작용, 관절염, 근육통증 완화'
                  )}
                </p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>HAIR</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Promotes blood circulation in the scalp,
                      <br />
                      strengthens hair, and adds shine{' '}
                    </>
                  ) : (
                    '두피 혈액 순환 촉진, 모발 강화 및 윤기'
                  )}
                </p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>MIND</h2>
                <p>
                  {locale === 'en' ? (
                    <>
                      Calms the mind and body, <br />
                      improves mood, alleviates insomnia{' '}
                    </>
                  ) : (
                    '심신 진정 및 기분 개선, 불면증 완화'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </LavenderInteractionStyled>
  );
};

const LavenderInteractionStyled = styled.div<{
  $sectionCount: number;
  $windowHeight: number;
}>`
  position: relative;

  height: ${({ $sectionCount, $windowHeight }) => {
    return `calc(100vh + ${$sectionCount * ($windowHeight / 3)}px)`;
  }};

  .background__image {
    position: sticky;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: ${({ $sectionCount, $windowHeight }) => {
      return `calc(100vh + ${$sectionCount * ($windowHeight / 3)}px)`;
    }};

    .section {
      position: sticky;
      top: 0;
      left: 0;

      width: 100%;
      height: 100vh;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      color: white;
      text-align: center;

      .intro {
        h1 {
          font-size: 5rem;
          font-family: 'NotoSansKR-Bold';
          margin: 0;
          letter-spacing: 0.1em;
        }

        h2 {
          font-size: 2rem;
          margin: 0;

          margin-bottom: 3rem;
        }

        p {
          font-size: 2rem;
          font-family: 'NotoSansKR-Medium';
          margin: 0;
        }
      }

      .last,
      .final {
        h1 {
          font-size: 3.5rem;
          font-family: 'NotoSansKR-Bold';
          margin: 0;

          margin-bottom: 3rem;
        }

        p {
          font-size: 1.875rem;
          font-family: 'NotoSansKR-Medium';
          line-height: 4.125rem;
          margin: 0;

          margin-bottom: 5rem;
        }

        .item__list {
          display: flex;
          justify-content: center;
          gap: 6.25rem;

          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            gap: 1.125rem;

            h2 {
              font-size: 1.875rem;
              font-family: 'NotoSansKR-Bold';
              margin: 0;
            }

            .ellipse {
              width: 0.625rem;
              height: 0.625rem;
              border-radius: 50%;
              background-color: white;
            }
          }
        }

        @media (max-width: 960px) {
          .item__list {
            display: flex;
            flex-direction: column;

            p {
              margin: 0;
            }

            gap: 4.875rem;
          }
        }
      }

      .fade {
        opacity: 0;
      }

      .move {
        transform: translateY(-3.125rem);
      }

      &.in {
        .fade.move {
          animation:
            fadeIn 1s forwards,
            moveIn 1s forwards;

          &.first {
            /* animation-delay: 0.3s; */
          }

          &.second {
            animation-delay: 0.3s;
          }

          &.third {
            animation-delay: 0.8s;
          }
        }
      }

      &.out {
        display: none;
      }
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  @keyframes moveIn {
    to {
      transform: translateY(0);
    }
  }

  @keyframes moveOut {
    to {
      transform: translateY(3.125rem);
    }
  }

  @media (max-width: 960px) {
    .section {
      &.in {
        .item__list.pc {
          display: none;
        }
      }
    }
  }
`;
