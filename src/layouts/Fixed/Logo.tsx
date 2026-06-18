import Link from 'next/link';

import { FixedIcon } from './Icon';

import styled from 'styled-components';

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;

  className?: string;
}

export const FixedLogo = ({
  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,

  className,
}: Props) => {
  return (
    <FixedLogoStyled href="/">
      <FixedIcon
        className={className}
        src="/images/logo/logo.svg"
        alt="I’m ORGANIC"
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        centerVertical={centerVertical}
        centerHorizontal={centerHorizontal}
        width="19.5rem"
        height="2rem"
      />
    </FixedLogoStyled>
  );
};

const FixedLogoStyled = styled(Link)`
  cursor: pointer;

  .icon {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    .icon {
      width: 29.25rem;
      height: 3rem;
    }
  }
`;
