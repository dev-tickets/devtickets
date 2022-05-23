/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    'NEXT_PUBLIC_APP_ENV': process.env.APP_ENV,
    'NEXT_PUBLIC_APP_VERSION': process.env.CF_PAGES_COMMIT_SHA || "local"
  },
  experimental: {
    emotion: true,
  },
}

module.exports = nextConfig
