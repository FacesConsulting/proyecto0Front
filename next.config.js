/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.google.com', "images.unsplash.com"],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**'
      }
    ]
  }
}

module.exports = nextConfig
