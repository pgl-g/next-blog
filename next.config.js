/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  largePageDataBytes: 128 * 100000,
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
};

module.exports = nextConfig;
