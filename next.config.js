/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    'NEXT_PUBLIC_APP_ENV': process.env.APP_ENV
  },
  experimental: {
    emotion: true,
  },
}

module.exports = nextConfig
