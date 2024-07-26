import { LavenderDescription } from '@/contents/LavenderDescription';
import { LavenderInteraction } from '@/contents/LavenderInteraction';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLanguage } from '@/layouts/Fixed/Language';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { Version1Footer } from '@/layouts/Footer/Version1';
import styled from 'styled-components';

const LavenderPage = () => {
  return (
    <LavenderPageStyled>
      <MenuButton top left />
      <FixedLogo className="logo" top centerHorizontal />
      <FixedLanguage top right />
      {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

      <LavenderInteraction />
      <LavenderDescription />

      <Version1Footer />
    </LavenderPageStyled>
  );
};

const LavenderPageStyled = styled.div`
  @media (max-width: 960px) {
    .logo {
      top: calc(var(--fixed-padding) + 0.5rem);
    }
  }
`;

LavenderPage.layout = (page: React.ReactNode) => page;

export default LavenderPage;
