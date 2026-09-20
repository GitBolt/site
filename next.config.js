/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/resonance',
        destination: '/resonance.pdf',
      },
    ];
  },
}

module.exports = nextConfig
