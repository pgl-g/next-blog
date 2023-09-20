import {
  SiNextdotjs,
  SiShopify,
  SiKashflow,
  SiCapacitor,
} from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { BiWind } from "react-icons/bi";
import { MdWifiTethering } from "react-icons/md";

export const projectsConfig = [
  {
    category: "Next Ecosystem",
    child: [
      {
        title: "nextjs-blog",
        description:
          "The most beautiful blog in modern times, using Next.js, Tailwind CSS, Welcome to visit",
        link: "https://github.com/pgl-g/next-blog",
        icon: <SiNextdotjs />,
      },
    ],
  },
  {
    category: "Vue Ecosystem",
    child: [
      {
        title: "vue-spuermarket",
        description:
          "Vue2.0 family bucket development e-commerce management system",
        link: "https://github.com/pgl-g/HY-supermarket",
        icon: <SiShopify />,
      },
    ],
  },
  {
    category: "Mini System",
    child: [
      {
        title: "mini-webpack",
        description: "Webpack is a small packaging tool",
        link: "https://github.com/pgl-g/mini-webpack",
        icon: <FiCpu />,
      },
    ],
  },
  {
    category: "Utils",
    child: [
      {
        title: "json-to-ts",
        description: "json data to typescript",
        link: "https://github.com/pgl-g/json-to-ts",
        icon: <SiKashflow />,
      },
      {
        title: "pgl-wills",
        description: "前端工作流集成解决方案",
        link: "https://github.com/pgl-g/wills-pub",
        icon: <SiCapacitor />,
      },
      {
        title: "pgl-cli",
        description: "脚手架",
        link: "https://github.com/pgl-g/cli",
        icon: <BiWind />,
      },
      {
        title: "pgl-request",
        description: "工程化网关配置",
        link: "https://github.com/pgl-g/pglRequest",
        icon: <MdWifiTethering />,
      },
    ],
  },
];
