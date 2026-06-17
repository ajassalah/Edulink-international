/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-edulink',
        permanent: true,
      },
      {
        source: '/life',
        destination: '/life-at-edulink',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/edulink-news-events',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
