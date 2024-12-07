import { useState } from 'react';

import { useRouter } from 'next/router';

import { FixedIcon } from './Icon';

import { LanguageRoutList } from '@/contents/LanguageRoutList';
import styled from 'styled-components';

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;

  invert?: boolean;
}

export const FixedRouteLanguage = ({
  top = false,
  bottom = false,
  left = false,
  right = false,
  centerVertical = false,
  centerHorizontal = false,

  invert = false,
}: Props) => {
  const router = useRouter();
  const { locale } = router;

  const [open, setOpen] = useState(false);

  return (
    <FixedRouteLanguageStyled $invert={invert}>
      <FixedIcon
        className="public"
        src="/images/icons/public.svg"
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        centerVertical={centerVertical}
        centerHorizontal={centerHorizontal}
        width="1.875rem"
        height="1.875rem"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* <div className="language">{locale === 'uz' ? 'EN' : 'UZ'}</div> */}
      </FixedIcon>

      <LanguageRoutList open={open} setOpen={setOpen} />
    </FixedRouteLanguageStyled>
  );
};

const FixedRouteLanguageStyled = styled.div<{
  $invert?: boolean;
}>`
  .public {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* right: calc(var(--fixed-padding) * 2 + 1.25rem); */

    .icon {
      img {
        filter: ${({ $invert }) => ($invert ? 'invert(1)' : 'none')};
      }

      @media (max-width: 960px) {
        width: 3rem;
        height: 3rem;
      }
    }

    .language {
      color: ${({ $invert }) => ($invert ? '#000' : '#fff')};
      font-size: 0.875rem;
      font-family: 'NotoSansKR-Medium';

      @media (max-width: 960px) {
        font-size: 1.75rem;
      }
    }
  }
`;
