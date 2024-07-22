import { useState } from 'react';

import Instagram from '@/assets/images/icons/instagram.svg';
import Telegram from '@/assets/images/icons/telegram.svg';
import Youtube from '@/assets/images/icons/youtube.svg';

import styled from 'styled-components';

interface Props {
  color?: string;
  hoverColor?: string;

  gap?: string;
}

export const SnsList = ({
  color = '#fff',
  hoverColor = '#000',
  gap = '1rem',
}: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <SnsListStyled $color={color} $hoverColor={hoverColor} $gap={gap}>
      <div
        className={`icon ${hoveredIcon === 'telegram' ? 'hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('telegram')}
        onMouseLeave={handleMouseLeave}
      >
        <Telegram />
      </div>

      <div
        className={`icon ${hoveredIcon === 'instagram' ? 'hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('instagram')}
        onMouseLeave={handleMouseLeave}
      >
        <Instagram />
      </div>
      <div
        className={`icon ${hoveredIcon === 'youtube' ? 'hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('youtube')}
        onMouseLeave={handleMouseLeave}
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
