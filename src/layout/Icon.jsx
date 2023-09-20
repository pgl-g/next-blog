import { BsGithub } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import UnstyledLink from "@/components/customCpm/UnstyledLink";
import { useEffect, useState } from "react";
import clsx from "clsx";

// 测试文件
const THEM_BUTTON = {
  light: <FiMoon />,
  dark: <FiSun />,
};

const Icon = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [themeButton, setThemeButton] = useState();

  useEffect(() => {
    setThemeButton(THEM_BUTTON[theme]);
  }, [theme]);

  return (
    <div className="flex items-center space-x-3 text-base">
      <UnstyledLink
        href="https://github.com/pgl-g"
        rel="noreferrer"
        target="_blank"
        className={clsx("cursor-pointer", className)}
      >
        <BsGithub />
      </UnstyledLink>
      <button
        className={className}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {themeButton}
      </button>
    </div>
  );
};
export default Icon;
