import { useRef } from 'react';

import { ArrowNavigationSwiper } from '@/components/ArrowNavigationSwiper';
import { DualTypography } from '@/components/DualTypography';
import { FullScreenImage } from '@/components/FullScreenImage';
import { ProductInfo } from '@/components/ProductInfo';
import { SquarePaginationSwiper } from '@/components/SquarePaginationSwiper';
import { StepTypography } from '@/components/StepTypography';
import styled from 'styled-components';

interface Props {
  headerHeight: number;
}

const StoreDetail = ({ headerHeight = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <StoreDetailStyle $headerHeight={headerHeight}>
      <div className="first one__page">
        <SquarePaginationSwiper className="half">
          <FullScreenImage
            src="/images/main/1.png"
            alt="1"
            height={`calc(100vh - ${headerHeight}px)`}
          />
          <FullScreenImage
            src="/images/main/2.png"
            alt="2"
            height={`calc(100vh - ${headerHeight}px)`}
          />
          <FullScreenImage
            src="/images/main/3.png"
            alt="3"
            height={`calc(100vh - ${headerHeight}px)`}
          />
        </SquarePaginationSwiper>

        <ProductInfo className="half" headerHeight={headerHeight} />
      </div>

      <div className="second one__page">
        <h1 ref={ref}>건강한 성분을 듬뿍</h1>
        <ArrowNavigationSwiper>
          <div
            className="container"
            style={{
              height: `calc((100vh - ${headerHeight}px - ${ref.current?.clientHeight}px - 3.125rem * 3))`,
            }}
          >
            <FullScreenImage
              src="/images/main/1.png"
              alt="1"
              height={`calc((100vh - ${headerHeight}px - ${ref.current?.clientHeight}px - 3.125rem * 4) / 2)`}
            />
            <div className="text__content">
              <h2>자연유래 추출물 11</h2>
              <h3>엄선된 12가지의 자연유래 추출물로 매일 사용해도 자극없이</h3>
              <p>· 구기자추출물</p>
              <p>· 구기자추출물</p>
              <p>· 구기자추출물</p>
              <p>· 구기자추출물</p>
            </div>
          </div>
          <div
            className="container"
            style={{
              height: `calc((100vh - ${headerHeight}px - ${ref.current?.clientHeight}px - 3.125rem * 3))`,
            }}
          >
            <FullScreenImage
              src="/images/main/2.png"
              alt="2"
              height={`calc((100vh - ${headerHeight}px - ${ref.current?.clientHeight}px - 3.125rem * 4) / 2)`}
            />
            <div className="text__content">
              <h2>자연유래 추출물 11</h2>
              <h3>엄선된 12가지의 자연유래 추출물로 매일 사용해도 자극없이</h3>
              <p>· 구기자추출물</p>
              <p>· 구기자추출물</p>
              <p>· 구기자추출물</p>
              <p>· 구기자추출물</p>
            </div>
          </div>
        </ArrowNavigationSwiper>
      </div>

      <div className="one__page">
        <FullScreenImage src="/images/main/3.png" alt="3" height="44.125rem" />

        <DualTypography
          className="dual__typography"
          primaryText="은은하게 퍼지는 라벤더 향"
          secondaryText="천연 100% 라벤더향으로 차분한 클렌징 시간을 선사합니다."
        />
      </div>

      <div className="forth one__page pc">
        <h1>함께 사용해보세요</h1>
        <div className="container">
          <div className="half"></div>
          <div className="half ">
            <h2 className="space">두피 청정 라벤더 솔루션</h2>
            <div className="line" />

            <div className="step__container">
              <StepTypography />
              <StepTypography />
              <StepTypography />
              <StepTypography />
            </div>
          </div>
        </div>
      </div>

      <div className="forth mobile">
        <div className="one__page forth__top">
          <h1>함께 사용해보세요</h1>
        </div>

        <div className="one__page forth__bottom">
          <h2>두피 청정 라벤더 솔루션</h2>
          <div className="line" />

          <div className="step__container">
            <StepTypography />
            <StepTypography />
            <StepTypography />
            <StepTypography />
          </div>
        </div>
      </div>
    </StoreDetailStyle>
  );
};

const StoreDetailStyle = styled.div<{
  $headerHeight: number;
}>`
  .one__page {
    height: calc(100vh - ${({ $headerHeight }) => $headerHeight}px);
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

      .text__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 50%;

        gap: 1.25rem;

        h2 {
          color: #484036;

          font-size: 1.875rem;
          font-family: 'NotoSansKR-Medium';
        }

        h3 {
          color: #777777;

          font-size: 1.875rem;
        }

        p {
          color: #777777;

          font-size: 1.25rem;
        }
      }
    }
  }

  .dual__typography {
    padding: 3.125rem;
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
      }
    }
  }
`;

StoreDetail.layoutFillColor = 'black';

export default StoreDetail;
