/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export', // enable static HTML export
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Note: custom headers removed due to static export (output: 'export').
  // If deploying with a server/edge later, reintroduce headers() for security headers.
};

module.exports = withBundleAnalyzer(nextConfig);
