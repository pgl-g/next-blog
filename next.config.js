/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
