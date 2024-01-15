/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.xinc818.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  // webpack: (config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': path.resolve(__dirname),
  //     '@/components': path.resolve(__dirname, 'components'),
  //   }
  //   return config
  // },
};

module.exports = nextConfig;
