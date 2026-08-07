import { useEffect, useState } from 'react';

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
  const [scrolled, setScrolled] = useState(false);

  // 맨 위에서는 갈 곳이 없으니 숨긴다. 새로고침·뒤로가기로 중간에 착지할 수 있어 처음에도 한 번 잰다.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0);

    update();
    window.addEventListener('scroll', update, { passive: true });

    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <GoTopStyled>
      <FixedIcon
        className={`go__top ${scrolled ? 'visible' : ''}`}
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
  .go__top {
    /* visibility 까지 꺼야 안 보이는 버튼에 탭 포커스가 걸리지 않는다.
       메뉴가 열렸을 때의 disable 은 display: none 이라 여기와 부딪히지 않는다. */
    opacity: 0;
    visibility: hidden;

    transition:
      opacity 0.3s,
      visibility 0.3s;

    &.visible {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .go__top {
      transition: none;
    }
  }

  @media (max-width: 960px) {
    .go__top {
      .icon {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;
