/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.si.com'],
    remotePatterns: [
      {
        // Don't use this in production, this is just an example!
        protocol: 'https',
        hostname: '*',
      },
      {
        // Don't use this in production, this is just an example!
        protocol: 'http',
        hostname: '*',
      }
    ]
  }
}

module.exports = nextConfig
