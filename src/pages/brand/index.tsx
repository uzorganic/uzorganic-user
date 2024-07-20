import Image from 'next/image';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SwiperComponent } from '@/components/Swiper/SwiperComponent';
import { FixedIcon } from '@/layouts/Fixed/Icon';

const BrandPage = () => {
  return (
    <>
      <FixedIcon src="/images/icons/menu.png" top left />
      <FixedIcon
        src="/images/logo/logo.png"
        top
        centerHorizontal
        width="19.5rem"
        height="2rem"
      />
      <FixedIcon src="/images/icons/search.png" top right />

      <SwiperComponent
        effect="fade"
        mousewheel
        direction="horizontal"
        pagination
        paginationType="custom"
      >
        <ImageOverlayChild
          src="/images/brand/1.png"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        >
          <div
            style={{
              position: 'relative',
              width: '75rem',
              height: '7.75rem',
            }}
          >
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              fill
              sizes="100%"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ImageOverlayChild>
        <ImageOverlayChild
          src="/images/brand/2.png"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        ></ImageOverlayChild>
        <ImageOverlayChild
          src="/images/brand/3.png"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        ></ImageOverlayChild>
        <ImageOverlayChild
          src="/images/brand/4.png"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        ></ImageOverlayChild>
        <ImageOverlayChild
          src="/images/brand/5.png"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        ></ImageOverlayChild>
        <ImageOverlayChild
          src="/images/brand/6.png"
          width="100%"
          height="100vh"
          centerVertical
          centerHorizontal
        ></ImageOverlayChild>
      </SwiperComponent>
    </>
  );
};

BrandPage.layout = (page: React.ReactNode) => page;

BrandPage.layoutFillColor = 'black';

export default BrandPage;
