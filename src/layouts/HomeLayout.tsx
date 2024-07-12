import { FixedLogo } from './Fixed/Logo';
import { FixedMenu } from './Fixed/Menu';
import { FixedScrollButton } from './Fixed/ScrollButton';
import { FixedSearch } from './Fixed/Search';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo />
      <FixedSearch />
      <FixedMenu />
      <FixedScrollButton />
      {children}
    </>
  );
};
