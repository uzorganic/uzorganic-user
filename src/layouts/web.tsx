import { FixedLogo } from './Fixed/Logo';
import { FixedMenu } from './Fixed/Menu';
import { ScrollButton } from './Fixed/ScrollButton';
import { Search } from './Fixed/Search';

interface Props {
  children: React.ReactNode;
}

export const WebLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo />
      <Search />
      <FixedMenu />
      <ScrollButton />
      {children}
    </>
  );
};
