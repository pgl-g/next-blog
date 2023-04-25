import {
  SiNextdotjs,
  SiShopify,
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi'
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
    category: 'Mini System',
    child: [
      {
        title: 'mini-webpack',
        description: "Webpack is a small packaging tool",
        link: "https://github.com/pgl-g/mini-webpack",
        icon: <FiCpu />
      }
    ]
  }
];
