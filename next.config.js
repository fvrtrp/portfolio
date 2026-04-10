const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/yt',
        destination: 'https://youtube.com/fevertrip',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/game',
        destination: 'https://pew-pew-six.vercel.app/',
      },
      {
        source: '/game/:path*',
        destination: 'https://pew-pew-six.vercel.app/:path*',
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
