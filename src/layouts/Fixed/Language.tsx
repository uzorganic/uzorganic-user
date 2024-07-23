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

  invert?: boolean;
}

export const FixedLanguage = ({
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

  return (
    <FixedLanguageStyled $invert={invert}>
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
          router.push(router.pathname, router.pathname, {
            locale: locale === 'en' ? 'ko' : 'en',
          });
        }}
      >
        <div className="language">{locale === 'ko' ? 'EN' : 'KO'}</div>
      </FixedIcon>
    </FixedLanguageStyled>
  );
};

const FixedLanguageStyled = styled.div<{
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
    }

    .language {
      color: ${({ $invert }) => ($invert ? '#000' : '#fff')};
      font-size: 0.875rem;
      font-family: 'NotoSansKR-Medium';
    }
  }
`;
