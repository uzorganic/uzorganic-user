import Image from 'next/image';

import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { SwiperComponent } from '@/components/Swiper/SwiperComponent';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';

const BrandPage = () => {
  return (
    <>
      <MenuButton top left />
      <FixedLogo top centerHorizontal />
      {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

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
