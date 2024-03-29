import React, { useRef, useEffect } from "react";

import UnstyledLink from "@/components/customCpm/UnstyledLink";

export default function TableContents({ toc, activeSection, minLevel }) {
  const lastPosition = useRef(0);

  useEffect(() => {
    const container = document.getElementById("toc-container");
    const activeLink = document.getElementById(`link-${activeSection}`);

    console.log(container, activeLink, '矛点滚动')
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
      // className="block max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4"
      className="block pb-4"
    >
      <h3 className="text-gray-900 dark: text-white">目录</h3>
      <div className="flex flex-col mt-4 space-y-2 text-sm">
        {toc &&
          toc.map(({ id, level, text }) => (
            <UnstyledLink
              key={id}
              href={`#${id}`}
              id={`link-${id}`}
              className={`
                 font-medium hover:text-gray-700 focus:outline-none
                 dark:hover:text-gray-200 dark:focus-visible:text-gray-200
                focus-visible:text-gray-700 ${activeSection === id
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-400 dark:text-gray-500"
                }`}
              style={{ marginLeft: (level - minLevel) * 8 }}
            >
              {text}
            </UnstyledLink>
          ))}
      </div>
    </div>
  );
}
