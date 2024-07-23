import { useEffect, useState } from 'react';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import styled from 'styled-components';

export const LavenderInteraction = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [sectionCount, setSectionCount] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight) {
        setCurrentSection(1);
      } else {
        setCurrentSection(2);
      }
    };

    const sections = document.querySelectorAll('.section');
    setSectionCount(sections.length);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <LavenderInteractionStyled
      style={{ height: `${sectionCount * 100 + 100}vh` }}
    >
      <div className="background__image">
        <ImageOverlayChild
          src="/images/main/9.jpg"
          width="100%"
          height="100vh"
        />
      </div>

      <div
        className="content"
        style={{ height: `${sectionCount * 100 + 100}vh` }}
      >
        <div className={`section ${currentSection === 1 ? 'in' : 'out'}`}>
          <div className="intro">
            <h1 className="fade move first">LAVENDER</h1>
            <h2 className="fade move first">우리의 첫번째 자연,</h2>
            <p className="fade move second">
              저희의 여정은 자연의 순환 속에서 피부의 건강과 아름다움을 추구하는
              모든 이들과 함께합니다.
            </p>
          </div>
        </div>

        <div className={`section ${currentSection === 2 ? 'in' : 'out'}`}>
          <div className="last">
            <h1 className="fade move first">자연의 힘</h1>
            <p className="fade move second">
              저희는 한여름의 뜨거운 태양 아래서도 평온하게 피어나는 라벤더에서
              강인함과 치유력을 발견했습니다.
              <br />
              라벤더는 지중해 지역이 원산지인 허브로, 고대 로마인들이 목욕물에
              넣어 사용하던 것에서 이름이 유래했습니다.
              <br />
              수세기 동안 약용 및 미용 목적으로 널리 사용되어 왔으며, 오늘날에도
              다양한 형태로 활용되고 있는 재료입니다.
            </p>
            <div className="fade move third item__list">
              <div className="item">
                <div className="ellipse" />
                <h2>BODY / SKIN</h2>
                <p>항염 및 항균 작용, 관절염, 근육통증 완화</p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>HAIR</h2>
                <p>두피 혈액 순환 촉진, 모발 강화 및 윤기</p>
              </div>
              <div className="item">
                <div className="ellipse" />
                <h2>MIND</h2>
                <p>심신 진정 및 기분 개선, 불면증 완화</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LavenderInteractionStyled>
  );
};

const LavenderInteractionStyled = styled.div`
  position: relative;
  height: 200vh;

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

          margin-bottom: 11.875rem;
        }

        p {
          font-size: 2rem;
          font-family: 'NotoSansKR-Medium';
          margin: 0;
        }
      }

      .last {
        h1 {
          font-size: 2.25rem;
          font-family: 'NotoSansKR-Bold';
          margin: 0;

          margin-bottom: 1.25rem;
        }

        p {
          font-size: 1.875rem;
          font-family: 'NotoSansKR-Medium';
          line-height: 4.125rem;
          margin: 0;

          margin-bottom: 3.75rem;
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

            margin-bottom: 3.125rem;

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
            animation-delay: 0.3s;
          }

          &.second {
            animation-delay: 0.6s;
          }

          &.third {
            animation-delay: 1.2s;
          }
        }
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
`;
