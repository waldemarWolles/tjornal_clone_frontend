/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'nypost.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
