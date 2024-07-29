import { useState } from 'react';

import { FixedIcon } from './Icon';

import { Menu } from '@/contents/Menu';
import styled from 'styled-components';

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
}

export const GoTop = ({
  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <GoTopStyled>
      <FixedIcon
        className="go__top"
        src="/images/assets/up.svg"
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        centerVertical={centerVertical}
        centerHorizontal={centerHorizontal}
        disable={open}
        width="3rem"
        height="3rem"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      />

      <Menu open={open} setOpen={setOpen} />
    </GoTopStyled>
  );
};

const GoTopStyled = styled.div`
  @media (max-width: 960px) {
    .go__top {
      .icon {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;
