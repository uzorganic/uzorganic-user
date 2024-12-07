import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LanguageRoutList } from '@/contents/LanguageRoutList';
import { Menu } from '@/contents/Menu';
import styled from 'styled-components';

interface Props {
  className?: string;

  fillColor?: string;
}

export const LogoWithMenuAndSearch = ({ className, fillColor }: Props) => {
  const router = useRouter();
  const { locale, asPath } = router;

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <LogoWithMenuAndSearchStyled className={className} $fillColor={fillColor}>
      <div className="image__wrapper">
        {!menuOpen && (
          <Image
            src="/images/icons/menu.svg"
            alt="Menu"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>
      <div className="center">
        <Image
          src="/images/logo/logo.svg"
          alt="Logo"
          fill
          sizes="100%"
          style={{ objectFit: 'contain' }}
          priority
          onClick={() => router.push('/')}
        />
      </div>

      <div className="right">
        <div className="language">
          {/* <Link
            href={asPath}
            locale={locale === 'en' ? 'ko' : 'en'}
            style={{ textDecoration: 'none' }}
          >
            <div className="image__wrapper">
              <Image
                src="/images/icons/public.svg"
                alt="Language"
                fill
                sizes="100%"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="language">{locale === 'ko' ? 'EN' : 'KO'}</div>
          </Link> */}
          <div
            className="image__wrapper"
            onClick={() => {
              setLanguageOpen(!languageOpen);
            }}
          >
            <Image
              src="/images/icons/public.svg"
              alt="Language"
              fill
              sizes="100%"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        {/* <div className="image__wrapper">
          <Image
            src="/images/icons/search.svg"
            alt="Search"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
          />
        </div> */}
      </div>

      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <LanguageRoutList
        open={languageOpen}
        setOpen={setLanguageOpen}
        id={router.query.id as string}
      />
    </LogoWithMenuAndSearchStyled>
  );
};

const LogoWithMenuAndSearchStyled = styled.div<{
  $fillColor?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--fixed-padding);

  background-color: var(--content-main-color);

  .image__wrapper {
    position: relative;

    display: flex;

    width: 2.75rem;
    height: 2.75rem;

    @media (max-width: 960px) {
      width: 4rem;
      height: 4rem;
    }

    filter: ${({ $fillColor }) =>
      $fillColor === 'white' ? 'invert(0)' : 'invert(1)'};

    cursor: pointer;
  }

  .right {
    display: flex;

    gap: 1.25rem;

    .language {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: ${({ $fillColor }) => ($fillColor === 'white' ? '#fff' : '#000')};
      font-size: 0.875rem;
      font-family: 'NotoSansKR-Medium';

      @media (max-width: 960px) {
        font-size: 1rem;
      }

      .image__wrapper {
        width: 2.5rem;
        height: 2.5rem;

        @media (max-width: 960px) {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }

  .center {
    position: relative;

    width: 19.5rem;
    height: 2rem;

    filter: ${({ $fillColor }) =>
      $fillColor === 'white' ? 'invert(0)' : 'invert(1)'};

    cursor: pointer;

    @media (max-width: 960px) {
      width: 29.25rem;
      height: 3rem;
    }
  }
`;
