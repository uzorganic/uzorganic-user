import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

// 휠 한 번 = 다음 섹션 하나. 방향은 deltaY 부호로만 정한다.
// CSS scroll-snap 은 "가장 가까운" 지점으로 붙어서 살짝 굴린 휠이 되돌아가므로 쓰지 않는다.
// 터치는 관성 스크롤이 있어 CSS mandatory 스냅으로 충분하다(index.tsx 의 SnapScroll).

// ponytail: 잠금은 고정 시간이다. 트랙패드 관성이 이보다 길게 이어지는 기기에서
// 두 칸 넘어가면 scrollend 이벤트 + 유휴 시간 조합으로 올려야 한다.
const LOCK_MS = 800;

export const useSnapScroll = (containerRef: RefObject<HTMLElement | null>) => {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [current, setCurrent] = useState(0);

  const sectionsRef = useRef<HTMLElement[]>([]);
  const lockRef = useRef(false);

  const goTo = useCallback((target: HTMLElement) => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, LOCK_MS);

    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const list = Array.from(container.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement,
    );
    sectionsRef.current = list;
    setSections(list);

    // 화면 세로 중앙선을 지나는 섹션이 현재 섹션.
    // 위아래 -50% 로 루트를 한 줄로 만들면 항상 한 섹션만 걸린다.
    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.find(entry => entry.isIntersecting);
        if (hit) setCurrent(list.indexOf(hit.target as HTMLElement));
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    list.forEach(el => observer.observe(el));

    const onWheel = (event: WheelEvent) => {
      // 가로 휠(shift + 휠)은 방향이 없다.
      if (event.deltaY === 0) return;

      const node = event.target as Node | null;
      // 모달·메시지는 포털이라 컨테이너 밖이다. 그쪽 스크롤은 건드리지 않는다.
      if (!node || !container.contains(node)) return;
      if (node instanceof Element && node.closest('textarea')) return;

      // 부드러운 스크롤이 몇 px 덜 가서 멈추면 현재 섹션을 "아래 섹션"으로 잘못 잡는다.
      // 화면 높이의 2% 안쪽은 정렬된 것으로 본다.
      const tolerance = window.innerHeight * 0.02;

      // 아직 안 지나간 첫 섹션 / 이미 지나간 마지막 섹션.
      // 남은 섹션이 없으면(최상단·푸터) 기본 스크롤에 맡긴다.
      const target =
        event.deltaY > 0
          ? sectionsRef.current.find(
              el => el.getBoundingClientRect().top > tolerance,
            )
          : sectionsRef.current
              .slice()
              .reverse()
              .find(el => el.getBoundingClientRect().top < -tolerance);

      if (!target) return;

      event.preventDefault();
      if (lockRef.current) return;

      goTo(target);
    };

    // preventDefault 를 쓰므로 passive 를 명시적으로 끈다.
    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', onWheel);
    };
  }, [containerRef, goTo]);

  return { sections, current, goTo };
};
