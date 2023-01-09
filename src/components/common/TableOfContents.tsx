import React, { useRef, useEffect } from "react";

import UnstyledLink from "@/components/links/UnstyledLink";

export default function TableOfContents({ toc, activeSection, minLevel }) {
  const lastPosition = useRef(0);

  useEffect(() => {
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
              <UnstyledLink
                href={`#${id}`}
                id={`link-${id}`}
                className={`
                 font-medium hover:text-gray-200 focus:outline-none
                focus-visible:text-gray-200 ${
                  activeSection === id ? "text-gray-100" : "text-gray-500"
                }`}
                style={{ marginLeft: (level - minLevel) * 8 }}
              >
                {text}
              </UnstyledLink>
            ))
          : null}
      </div>
    </div>
  );
}
