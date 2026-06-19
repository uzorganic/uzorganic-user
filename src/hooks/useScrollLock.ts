import { useCallback, useEffect, useRef } from 'react';

import { SNAP_LOCK_MS } from '@/constants/scroll';

// 슬라이드가 마지막에 닿으면 Swiper 의 releaseOnEdges 가 남은 관성을 그대로
// 페이지 스크롤로 흘려보낸다. 한 박자 끊어 새 스크롤이 와야 다음으로 넘어가게 한다.
// 언마운트·재호출 시 타이머와 스타일을 반드시 되돌린다. 안 그러면 앱 전체 스크롤이 잠긴다.
//
// antd Modal 은 <style> 태그를 주입하는 방식이라(@rc-component/portal 의 useScrollLocker)
// 여기의 인라인 스타일과 부딪히지 않는다. 인라인이 우선이고, 이 훅이 값을 비워도
// Modal 쪽 규칙은 그대로 남는다. body 의 인라인 overflow 를 쓰는 곳은 이 훅뿐이다.
export const useScrollLock = () => {
  const timerRef = useRef<number>(undefined);

  useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
      document.body.style.overflow = '';
    };
  }, []);

  return useCallback(() => {
    document.body.style.overflow = 'hidden';

    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      document.body.style.overflow = '';
    }, SNAP_LOCK_MS);
  }, []);
};
