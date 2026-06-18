import { useState } from 'react';

import { useRouter } from 'next/router';

import Instagram from '@/assets/images/icons/instagram.svg';
import Mail from '@/assets/images/icons/mail.svg';
import Youtube from '@/assets/images/icons/youtube.svg';
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
      <div
        className={`icon ${hoveredIcon === 'mail' ? 'hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('mail')}
        onMouseLeave={handleMouseLeave}
        onClick={() => router.push('/contact')}
      >
        <Mail />
      </div>

      <div
        className={`icon ${hoveredIcon === 'instagram' ? 'hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('instagram')}
        onMouseLeave={handleMouseLeave}
        onClick={() => window.open(instagramUrl(locale))}
      >
        <Instagram />
      </div>
      <div
        className={`icon ${hoveredIcon === 'youtube' ? 'hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('youtube')}
        onMouseLeave={handleMouseLeave}
        // onClick={() => window.open('https://www.youtube.com/@user-vd6fe1ev3v')}
        onClick={() => window.open(instagramUrl(locale))}
      >
        <Youtube />
      </div>
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
