import { FixedLogo } from './Fixed/Logo';
import { FixedScrollButton } from './Fixed/ScrollButton';
import { FixedSearch } from './Fixed/Search';
import { FixedTextMenu } from './Fixed/TextMenu';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo top left />
      <FixedSearch />
      <FixedTextMenu />
      <FixedScrollButton />
      {children}
    </>
  );
};
