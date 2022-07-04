/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
