import { FixedLogo } from './Fixed/Logo';
import { FixedRouteLanguage } from './Fixed/RouteLanguage';
import { FixedScrollButton } from './Fixed/ScrollButton';
import { FixedSearch } from './Fixed/Search';
import { FixedTextMenu } from './Fixed/TextMenu';
import { FixedToggleLanguage } from './Fixed/ToggleLanguage';
import { Version1Footer } from './Footer/Version1';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo top left />
      <FixedRouteLanguage top right />
      {/* <FixedLanguage top right /> */}
      {/* <FixedSearch /> */}
      <FixedTextMenu />
      {children}
      <Version1Footer />
    </>
  );
};
