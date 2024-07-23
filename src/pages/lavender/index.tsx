import { ImageOverlayChild } from '@/components/ImageOverlayChild';
import { LavenderDescription } from '@/contents/LavenderDescription';
import { LavenderInteraction } from '@/contents/LavenderInteraction';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLanguage } from '@/layouts/Fixed/Language';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { Version1Footer } from '@/layouts/Footer/Version1';

const LavenderPage = () => {
  return (
    <>
      <MenuButton top left />
      <FixedLogo top centerHorizontal />
      <FixedLanguage top right />
      {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

      <LavenderInteraction />

      <LavenderDescription />

      <Version1Footer />
    </>
  );
};

LavenderPage.layout = (page: React.ReactNode) => page;

export default LavenderPage;
