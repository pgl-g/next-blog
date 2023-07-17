import * as React from "react";

export function useRafFn(fn) {
  const isActive = React.useRef(false);
  let rafId = null;

  const loop = () => {
    if (!isActive.current || !window) return;

    fn();
    rafId = window.requestAnimationFrame(loop);
  };

  const resume = () => {
    if (!isActive.current && window) {
      isActive.current = true;
      loop();
    }
  };

  const pause = () => {
    isActive.current = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  return {
    isActive,
    pause,
    resume,
  };
}
