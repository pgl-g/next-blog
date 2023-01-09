import * as React from "react";

import Link from "next/link";

export default function TableOfContents({ toc, activeSection, minLevel }) {
  //#region  //*=========== Scroll into view ===========
  const lastPosition = React.useRef(0);

  React.useEffect(() => {
    const container = document.getElementById("toc-container");
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [activeSection]);
  //#endregion  //*======== Scroll into view ===========

  return (
    <div
      id="toc-container"
      className="block max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 text-white"
    >
      <h3 className="text-xl">目录</h3>
      <div className="flex flex-col mt-4 space-y-2 text-sm">
        {toc
          ? toc.map(({ id, level, text }) => (
              <Link key={id} href={`#${id}`}>
                {text}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
