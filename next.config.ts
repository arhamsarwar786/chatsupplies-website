/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'],
  },
  experimental: {
    turbo: {
      // Disable Turbopack (use Webpack instead)
      enabled: false,
    },
  },
};

module.exports = nextConfig;
