import { FixedLogo } from './Fixed/Logo';
import { FixedMenu } from './Fixed/Menu';
import { ScrollButton } from './Fixed/ScrollButton';

interface Props {
  children: React.ReactNode;
}

export const WebLayout = ({ children }: Props) => {
  return (
    <>
      <FixedLogo />
      <FixedMenu />
      <ScrollButton />
      {children}
    </>
  );
};
