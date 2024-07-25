import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  text: string;

  width?: string;
  color?: string;

  onClick?: () => void;

  className?: string;
}

export const HoverArrowButton = ({
  text,
  width,
  color = '#fff',
  onClick,
  className,
}: Props) => {
  return (
    <HoverArrowButtonStyled
      className={className}
      width={width}
      $color={color}
      onClick={onClick}
    >
      <p>{text} </p>
      <span className="standard__arrow__button">→</span>
      <div className="hover__arrow__button">
        <div className="hover__arrow__button__container">
          <Image src="/images/assets/arrow.svg" alt="Arrow" fill />
        </div>
      </div>
    </HoverArrowButtonStyled>
  );
};

const HoverArrowButtonStyled = styled.div<{ width?: string; $color: string }>`
  position: relative;

  display: inline-block;

  width: ${({ width }) => width || 'auto'};

  cursor: pointer;

  border: 0.125rem solid ${({ $color }) => $color};

  padding: 1rem 5rem;

  p {
    color: ${({ $color }) => $color};
    font-size: 1.5rem;
  }

  .standard__arrow__button {
    position: absolute;
    top: 50%;
    right: 1.5rem;
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
      }
    }
  }
`;
