/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
};

export default nextConfig;
