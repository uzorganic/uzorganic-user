import { Arrow } from '@/components/Icons';

import styled from 'styled-components';

interface Props {
  text: string;

  width?: string;
  color?: string;

  padding?: string;

  onClick?: () => void;

  className?: string;
}

export const HoverArrowButton = ({
  text,
  width,
  color = '#fff',
  padding = '0.5rem 5rem',
  onClick,
  className,
}: Props) => {
  return (
    <HoverArrowButtonStyled
      // antd Form 안에서도 쓰이므로 submit 기본값을 명시적으로 끈다
      type="button"
      className={className}
      $width={width}
      $color={color}
      $padding={padding}
      onClick={onClick}
    >
      <span className="text">{text}</span>
      <span className="standard__arrow__button">→</span>
      <div className="hover__arrow__button">
        <div className="hover__arrow__button__container">
          <Arrow />
        </div>
      </div>
    </HoverArrowButtonStyled>
  );
};

const HoverArrowButtonStyled = styled.button<{
  $width?: string;
  $color: string;

  $padding: string;
}>`
  position: relative;

  display: inline-block;

  width: ${({ $width }) => $width || 'auto'};

  cursor: pointer;

  background: none;
  font: inherit;

  border: 0.125rem solid ${({ $color }) => $color};
  transition: border 0.3s;

  padding: ${({ $padding }) => $padding};

  .text {
    display: block;

    padding-right: 2rem;
    text-align: center;

    color: ${({ $color }) => $color};

    font-size: 1.75rem;
    letter-spacing: 0.1rem;
  }

  .standard__arrow__button {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);

    color: ${({ $color }) => $color};
    font-size: 1.5rem;
  }

  .hover__arrow__button {
    display: none;
    opacity: 0;
  }

  &:hover {
    border: 0.125rem solid transparent;
    border-bottom: 0.125rem solid ${({ $color }) => $color};

    transition: border 0.3s;

    .standard__arrow__button {
      display: none;
      opacity: 0;
    }

    .hover__arrow__button {
      display: block;
      opacity: 1;
      position: absolute;
      bottom: -0.45rem;
      right: -0.45rem;

      .hover__arrow__button__container {
        position: relative;

        width: 0.8rem;
        height: 0.8rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ $color }) => $color};
      }
    }
  }
`;
