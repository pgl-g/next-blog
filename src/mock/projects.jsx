import {
  SiNextdotjs,
  SiShopify
} from 'react-icons/si';
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
  }
];
