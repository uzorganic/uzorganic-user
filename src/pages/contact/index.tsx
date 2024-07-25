import { ContactForm } from '@/contents/ContactForm';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLanguage } from '@/layouts/Fixed/Language';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { Version1Footer } from '@/layouts/Footer/Version1';
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <MenuButton top left />
      <FixedLogo className="logo" top centerHorizontal />
      <FixedLanguage top right />
      {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

      <ContactForm />

      <Version1Footer />
    </ContactPageStyled>
  );
};

const ContactPageStyled = styled.div`
  @media (max-width: 960px) {
    .logo {
      top: calc(var(--fixed-padding) + 0.5rem);
    }
  }
`;

ContactPage.layout = (page: React.ReactNode) => page;

export default ContactPage;
