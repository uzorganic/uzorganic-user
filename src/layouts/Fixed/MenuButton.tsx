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

export const MenuButton = ({
  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuButtonStyled>
      <FixedIcon
        className="menu__button"
        src="/images/icons/menu.svg"
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        centerVertical={centerVertical}
        centerHorizontal={centerHorizontal}
        disable={open}
        onClick={() => setOpen(!open)}
      />

      <Menu open={open} setOpen={setOpen} />
    </MenuButtonStyled>
  );
};

const MenuButtonStyled = styled.div`
  @media (max-width: 960px) {
    .menu__button {
      .icon {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;
