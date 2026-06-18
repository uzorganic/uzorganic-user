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
      className={className}
      width={width}
      $color={color}
      $padding={padding}
      onClick={onClick}
    >
      <p>{text}</p>
      <span className="standard__arrow__button">→</span>
      <div className="hover__arrow__button">
        <div className="hover__arrow__button__container">
          <Arrow />
        </div>
      </div>
    </HoverArrowButtonStyled>
  );
};

const HoverArrowButtonStyled = styled.div<{
  width?: string;
  $color: string;

  $padding: string;
}>`
  position: relative;

  display: inline-block;

  width: ${({ width }) => width || 'auto'};

  cursor: pointer;

  border: 0.125rem solid ${({ $color }) => $color};
  transition: border 0.3s;

  padding: ${({ $padding }) => $padding};

  p {
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
