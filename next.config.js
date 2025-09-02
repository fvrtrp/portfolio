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
};

module.exports = withContentlayer(nextConfig);
