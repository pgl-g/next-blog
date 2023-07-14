import { BsGithub } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import UnstyledLink from "@/components/links/UnstyledLink";
import { useEffect, useState } from "react";

const THEM_BUTTON = {
  light: <FiMoon />,
  dark: <FiSun />,
};

const Icon = () => {
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
        className="cursor-pointer"
      >
        <BsGithub />
      </UnstyledLink>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {themeButton}
      </button>
    </div>
  );
};
export default Icon;