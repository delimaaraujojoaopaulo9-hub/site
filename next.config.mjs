/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Disable static generation timeout issues with Framer Motion SSR
  staticPageGenerationTimeout: 180,
};

export default nextConfig;
