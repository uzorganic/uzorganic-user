import { SEO } from '@/components/SEO';
import { ContactForm } from '@/contents/ContactForm';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { FixedRouteLanguage } from '@/layouts/Fixed/RouteLanguage';
import { FixedToggleLanguage } from '@/layouts/Fixed/ToggleLanguage';
import { Version1Footer } from '@/layouts/Footer/Version1';
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="I’m ORGANIC - Contact Us"
        description="Get in touch with us for any inquiries or support regarding our organic products."
        url="https://uzorganic.com/contact"
      />
      <ContactPageStyled>
        <MenuButton top left />
        <FixedLogo className="header__logo" top centerHorizontal />
        <FixedRouteLanguage top right />
        {/* <FixedToggleLanguage top right /> */}
        {/* <FixedIcon src="/images/icons/search.svg" top right /> */}

        <ContactForm />

        <Version1Footer />
      </ContactPageStyled>
    </>
  );
};

const ContactPageStyled = styled.div`
  @media (max-width: 960px) {
    .header__logo {
      top: calc(var(--fixed-padding) + 0.5rem);
    }
  }
`;

ContactPage.layout = (page: React.ReactNode) => page;

export default ContactPage;
