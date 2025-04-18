import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { SnsList } from '@/components/SnsList';
import { FixedChild } from '@/layouts/Fixed/Child';
import styled from 'styled-components';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Menu = ({ open, setOpen }: Props) => {
  const router = useRouter();
  const { locale } = router;

  const [active, setActive] = useState(0);

  const menuList = [
    {
      name: '스토어',
      enName: 'STORE',
      uzName: "Do'kon",
      path: '/store',
    },
    {
      name: '브랜드',
      enName: 'BRAND',
      uzName: 'Brend',
      path: '/brand',
    },
    // { name: '갤러리', path: '/gallery' },
    {
      name: '라벤더',
      enName: 'LAVENDER',
      uzName: 'Lavanda',
      path: '/lavender',
    },
    {
      name: '문의하기',
      enName: 'CONTACT',
      uzName: 'Biz bilan Aloqa',
      path: '/contact',
    },
  ];

  useEffect(() => {
    const path = router.pathname;

    const index = menuList.findIndex(item => item.path === path);

    if (index !== -1) {
      setActive(index);
    }
  }, [router.pathname]);

  return (
    <MenuStyled open={open} onClick={() => setOpen(!open)}>
      <div className="menu__list">
        {menuList.map((item, index) => (
          <div
            key={index}
            className={`item ${index === active ? 'active' : ''}`}
            onClick={() => router.push(item.path)}
          >
            {locale === 'ko'
              ? item.name
              : locale === 'uz'
                ? item.uzName
                : item.enName}
          </div>
        ))}
        <SnsList
          className="sns__list"
          color="#929292"
          hoverColor="#484036"
          gap="5rem"
        />
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
