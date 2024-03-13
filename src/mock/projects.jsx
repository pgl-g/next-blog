import {
  SiNextdotjs,
  SiShopify,
  SiKashflow,
  SiCapacitor,
  FiCpu,
  BiWind,
  MdWifiTethering,
  GiReloadGunBarrel,
  FaClone
} from "@/components/iconCpm";


export const projectsConfig = [
  {
    category: "Next Ecosystem",
    child: [
      {
        title: "nextjs-blog",
        description:
          "The most beautiful blog in modern times, using Next.js, Tailwind CSS, Welcome to visit",
        link: "",
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
        link: "",
        icon: <SiShopify className="text-shopCor" />,
      },
    ],
  },
  {
    category: "Mini System",
    child: [
      {
        title: "mini-webpack",
        description: "Webpack is a small packaging tool",
        link: "",
        icon: <FiCpu className="text-sysCor" />,
      },
      {
        title: "pgl-cli",
        description: "脚手架",
        link: "",
        icon: <BiWind className="text-cliCor" />,
      },
    ],
  },
  {
    category: "Utils",
    child: [
      {
        title: "json-to-ts",
        description: "json data to typescript",
        link: "",
        icon: <SiKashflow className="text-jsonCor" />,
      },
      {
        title: "pgl-wills",
        description: "🚀🚀🚀前端工作流 - 集成解决方案",
        link: "",
        icon: <SiCapacitor className="text-willsCor" />,
      },
      {
        title: "pgl-request",
        description: "🚀🚀🚀前端工程流 - 网关配置",
        link: "",
        icon: <MdWifiTethering className="text-reqCor" />,
      },
      {
        title: "umi-plugin-reload",
        description: "🚀🚀🚀前端工程流 - build workflow",
        link: "",
        icon: <GiReloadGunBarrel className="text-reloadCor" />,
      },
      {
        title: "clone",
        description: "🐍clone all code",
        link: "",
        icon: <FaClone className="text-cloneCor" />,
      }
    ],
  },
];
