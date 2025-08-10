/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export', // enable static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
