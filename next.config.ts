// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'],
  },
  experimental: {
    turbo: false, // ✅ Disable Turbopack to avoid internal font module errors
  },
};

module.exports = nextConfig;
