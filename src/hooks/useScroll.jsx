import { useMemo } from "react";
import { useWindowScroll } from "react-use";

export function useScroll() {
  const docScroll = useWindowScroll();

  const isDocHover = useMemo(() => {
    if (docScroll) return !!docScroll.y;
  }, [docScroll]);

  return isDocHover;
}
