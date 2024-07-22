import { useRouter } from 'next/router';

import { FixedIcon } from './Icon';

import styled from 'styled-components';

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
}

export const FixedLogo = ({
  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,
}: Props) => {
  const router = useRouter();

  return (
    <FixedLogoStyled>
      <FixedIcon
        src="/images/logo/logo.svg"
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        centerVertical={centerVertical}
        centerHorizontal={centerHorizontal}
        width="19.5rem"
        height="2rem"
        onClick={() => router.push('/')}
      />
    </FixedLogoStyled>
  );
};

const FixedLogoStyled = styled.div`
  cursor: pointer;
`;
