import { FixedLogo } from './Fixed/Logo';
import { FixedRouteLanguage } from './Fixed/RouteLanguage';
import { FixedTextMenu } from './Fixed/TextMenu';
import { Version1Footer } from './Footer/Version1';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo top left />
      <FixedRouteLanguage top right />
      {/* <FixedSearch /> */}
      <FixedTextMenu />
      {children}
      <Version1Footer />
    </>
  );
};
