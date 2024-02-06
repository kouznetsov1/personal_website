/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  transpilePackages: ["geist"],
};

module.exports = nextConfig;
