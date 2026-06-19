import styled from 'styled-components';

interface Props {
  sections: HTMLElement[];
  current: number;
  onSelect: (section: HTMLElement) => void;
}

export const FixedScrollButton = ({ sections, current, onSelect }: Props) => {
  return (
    <ScrollButtonStyled>
      {sections.map((section, i) => (
        <button
          key={i}
          type="button"
          className="scroll__button__container"
          aria-label={`${i + 1}번째 화면으로 이동`}
          aria-current={current === i}
          onClick={() => onSelect(section)}
        >
          <div className={`scroll__button ${current === i ? 'active' : ''}`} />
        </button>
      ))}
    </ScrollButtonStyled>
  );
};

const ScrollButtonStyled = styled.div`
  position: fixed;
  bottom: var(--fixed-padding);
  right: var(--fixed-padding);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1.5rem;

  .scroll__button__container {
    height: 1.5rem;

    padding: 0;
    background: none;
    border: none;

    .scroll__button {
      width: calc(1.5rem / 3 * 2);
      height: calc(1.5rem / 3 * 2);

      border-radius: 25%;

      background-color: #fff;

      cursor: pointer;

      transition: 0.2s;

      &.active {
        width: 1.5rem;
        height: 1.5rem;
        background-color: #aaa;

        transition: 0.2s;
      }

      &:hover {
        width: 1.5rem;
        height: 1.5rem;

        transition: 0.2s;
      }
    }
  }

  @media (max-width: 960px) {
    gap: 2rem;

    .scroll__button__container {
      height: 1.5rem;

      .scroll__button {
        width: calc(2rem / 3 * 2);
        height: calc(2rem / 3 * 2);

        &.active {
          width: 2rem;
          height: 2rem;
        }

        &:hover {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
