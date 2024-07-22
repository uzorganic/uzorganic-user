import { ContactForm } from '@/contents/ContactForm';
import { FixedIcon } from '@/layouts/Fixed/Icon';
import { FixedLanguage } from '@/layouts/Fixed/Language';
import { FixedLogo } from '@/layouts/Fixed/Logo';
import { MenuButton } from '@/layouts/Fixed/MenuButton';
import { Version1Footer } from '@/layouts/Footer/Version1';

const ContactPage = () => {
  return (
    <>
      <MenuButton top left />
      <FixedLogo top centerHorizontal />
      <FixedLanguage top right />
      <FixedIcon src="/images/icons/search.png" top right />

      <ContactForm />

      <Version1Footer />
    </>
  );
};

ContactPage.layout = (page: React.ReactNode) => page;

export default ContactPage;
