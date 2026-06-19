import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

// 형제 노드가 곧 섹션이다. 개수를 상수로 박지 않고 실제 DOM에서 읽는다.
// window.innerHeight 로 위치를 계산하면 모바일 주소창 때문에 100vh 와 어긋난다.
export const FixedScrollButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const self = ref.current;
    const siblings = Array.from(self?.parentElement?.children ?? []).filter(
      (el): el is HTMLElement => el !== self && el instanceof HTMLElement,
    );
    setSections(siblings);

    // 화면 세로 중앙선을 지나는 섹션이 현재 섹션.
    // 위아래 -50% 로 루트를 한 줄로 만들면 항상 한 섹션만 걸린다.
    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.find(entry => entry.isIntersecting);
        if (hit) {
          setCurrentPage(siblings.indexOf(hit.target as HTMLElement));
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    siblings.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollButtonStyled ref={ref}>
      {sections.map((section, i) => (
        <button
          key={i}
          type="button"
          className="scroll__button__container"
          aria-label={`${i + 1}번째 화면으로 이동`}
          aria-current={currentPage === i}
          onClick={() => section.scrollIntoView({ behavior: 'smooth' })}
        >
          <div
            className={`scroll__button ${currentPage === i ? 'active' : ''}`}
          />
        </button>
      ))}
    </ScrollButtonStyled>
  );
};

const ScrollButtonStyled = styled.div`
  /* 부모의 > * 스냅 규칙에 걸리지 않도록 명시적으로 제외 */
  scroll-snap-align: none;

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
