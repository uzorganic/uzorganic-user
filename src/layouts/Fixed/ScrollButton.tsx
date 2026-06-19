import { useEffect, useState } from 'react';

import styled from 'styled-components';

interface Props {
  sections: HTMLElement[];
  onSelect: (section: HTMLElement) => void;
}

export const FixedScrollButton = ({ sections, onSelect }: Props) => {
  // 현재 섹션은 점 표시에만 쓰이므로 여기서 들고 있는다.
  // 페이지가 들고 있으면 섹션을 지날 때마다 페이지 전체가 다시 그려진다.
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!sections.length) return;

    // 화면 세로 중앙선을 지나는 섹션이 현재 섹션.
    // 위아래 -50% 로 루트를 한 줄로 만들면 항상 한 섹션만 걸린다.
    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.find(entry => entry.isIntersecting);
        if (hit) setCurrent(sections.indexOf(hit.target as HTMLElement));
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    sections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

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
