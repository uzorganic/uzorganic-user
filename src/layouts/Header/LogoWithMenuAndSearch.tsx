import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Menu } from '@/contents/Menu';
import styled from 'styled-components';

interface Props {
  className?: string;

  fillColor?: string;
}

export const LogoWithMenuAndSearch = ({ className, fillColor }: Props) => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link
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
          </Link>
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

    filter: ${({ $fillColor }) =>
      $fillColor === 'white' ? 'invert(0)' : 'invert(1)'};

    cursor: pointer;
  }

  .right {
    display: flex;

    gap: 1.25rem;
  }

  .language {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${({ $fillColor }) => ($fillColor === 'white' ? '#fff' : '#000')};
    font-size: 0.875rem;
    font-family: 'NotoSansKR-Medium';

    .image__wrapper {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  .center {
    position: relative;

    width: 19.5rem;
    height: 2rem;

    filter: ${({ $fillColor }) =>
      $fillColor === 'white' ? 'invert(0)' : 'invert(1)'};

    cursor: pointer;
  }
`;
