import { FixedLanguage } from './Fixed/Language';
import { FixedLogo } from './Fixed/Logo';
import { FixedScrollButton } from './Fixed/ScrollButton';
import { FixedSearch } from './Fixed/Search';
import { FixedTextMenu } from './Fixed/TextMenu';
import { Version1Footer } from './Footer/Version1';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo top left />
      <FixedLanguage top right />
      {/* <FixedSearch /> */}
      <FixedTextMenu />
      {children}
      <Version1Footer />
    </>
  );
};
