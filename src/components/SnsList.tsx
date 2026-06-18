import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Instagram, Mail, Youtube } from '@/components/Icons';
import { instagramUrl } from '@/constants/sns';

import styled from 'styled-components';

interface Props {
  color?: string;
  hoverColor?: string;

  gap?: string;

  className?: string;
}

export const SnsList = ({
  color = '#fff',
  hoverColor = '#000',
  gap = '1rem',

  className,
}: Props) => {
  const router = useRouter();
  const { locale } = router;

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <SnsListStyled
      className={className}
      $color={color}
      $hoverColor={hoverColor}
      $gap={gap}
    >
      <Link
        className={`icon ${hoveredIcon === 'mail' ? 'hover' : ''}`}
        href="/contact"
        aria-label={locale === 'ko' ? '문의하기' : 'Contact us'}
        onMouseEnter={() => handleMouseEnter('mail')}
        onMouseLeave={handleMouseLeave}
      >
        <Mail />
      </Link>

      <a
        className={`icon ${hoveredIcon === 'instagram' ? 'hover' : ''}`}
        href={instagramUrl(locale)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        onMouseEnter={() => handleMouseEnter('instagram')}
        onMouseLeave={handleMouseLeave}
      >
        <Instagram />
      </a>
      <a
        className={`icon ${hoveredIcon === 'youtube' ? 'hover' : ''}`}
        // 유튜브 아이콘이지만 인스타그램으로 보내는 것은 의도된 임시 조치다(2026-08 확인).
        // 유튜브를 다시 쓰게 되면 이 URL로: https://www.youtube.com/@user-vd6fe1ev3v
        href={instagramUrl(locale)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        onMouseEnter={() => handleMouseEnter('youtube')}
        onMouseLeave={handleMouseLeave}
      >
        <Youtube />
      </a>
    </SnsListStyled>
  );
};

const SnsListStyled = styled.div<{
  $color: string;
  $hoverColor: string;
  $gap: string;
}>`
  display: flex;
  gap: ${({ $gap }) => $gap};

  .icon {
    position: relative;

    display: block;

    width: 2.125rem;
    height: 2.125rem;

    cursor: pointer;

    img {
      object-fit: contain;
    }

    svg {
      width: 100%;
      height: 100%;

      color: ${({ $color }) => $color};
    }
  }

  .hover {
    svg {
      color: ${({ $hoverColor }) => $hoverColor};
    }
  }
`;
