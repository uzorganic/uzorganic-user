import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;

  id?: string;
}

export const LanguageRoutList = ({ open, setOpen, id }: Props) => {
  const router = useRouter();
  const { pathname, asPath, locale, query } = router;

  const [active, setActive] = useState(0);

  const languageList = [
    { name: 'KO', path: '' },
    { name: 'UZ', path: '' },
    { name: 'EN', path: '' },
  ];

  useEffect(() => {
    if (locale === 'uz') {
      setActive(1);
    } else if (locale === 'en') {
      setActive(2);
    } else {
      setActive(0);
    }
  }, [router.pathname]);

  return (
    <MenuStyled open={open} onClick={() => setOpen(!open)}>
      <div className="menu__list">
        {languageList.map((item, index) => (
          <div
            key={index}
            className={`item ${index === active ? 'active' : ''}`}
            onClick={() => {
              setActive(index);

              if (index === 0) {
                router.push({ pathname, query }, asPath, { locale: 'ko' });

                return;
              } else if (index === 1) {
                router.push({ pathname, query }, asPath, { locale: 'uz' });

                return;
              } else if (index === 2) {
                router.push({ pathname, query }, asPath, { locale: 'en' });

                return;
              }
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </MenuStyled>
  );
};

const MenuStyled = styled.div<{
  open: boolean;
}>`
  display: ${({ open }) => (open ? 'block' : 'none')};

  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;
  width: 100%;
  height: 100%;

  background-color: rgba(243, 240, 235, 0.95);

  .menu__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    width: 100%;
    height: 100%;

    .item {
      padding: 0 3rem;

      color: #484036;
      font-size: 6.25rem;

      cursor: pointer;
    }

    .active {
      font-family: 'NotoSansKR-ExtraBold';
      border-bottom: 0.5rem solid #9f7bac;
    }

    @media (max-width: 960px) {
      .sns__list {
        margin-top: 3rem;

        .icon {
          svg {
            width: 3rem;
            height: 3rem;
          }
        }
      }
    }
  }
`;
