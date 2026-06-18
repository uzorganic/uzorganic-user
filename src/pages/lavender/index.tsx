import { SEO } from '@/components/SEO';
import { LavenderDescription } from '@/contents/LavenderDescription';
import { LavenderInteraction } from '@/contents/LavenderInteraction';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { FixedRouteLanguage } from '@/layouts/Fixed/RouteLanguage';
import { FixedToggleLanguage } from '@/layouts/Fixed/ToggleLanguage';
import { Version1Footer } from '@/layouts/Footer/Version1';
import styled from 'styled-components';

const LavenderPage = () => {
  return (
    <>
      <SEO
        title="I’m ORGANIC - Lavender"
        description="Discover the soothing benefits of lavender with our organic products. Embrace nature's tranquility and enhance your well-being."
      />

      <LavenderPageStyled>
        <MenuButton top left />
        <FixedLogo className="header__logo" top centerHorizontal />
        <FixedRouteLanguage top right />
        {/* <FixedToggleLanguage top right /> */}
        {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

        <LavenderInteraction />
        <LavenderDescription />

        <Version1Footer />
      </LavenderPageStyled>
    </>
  );
};

const LavenderPageStyled = styled.div`
  @media (max-width: 960px) {
    .header__logo {
      top: calc(var(--fixed-padding) + 0.5rem);
    }
  }
`;

LavenderPage.layout = (page: React.ReactNode) => page;

export default LavenderPage;
