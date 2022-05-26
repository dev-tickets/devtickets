/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    "NEXT_PUBLIC_APP_ENV": process.env.APP_ENV,
    "NEXT_PUBLIC_APP_VERSION": process.env.CF_PAGES_COMMIT_SHA,
    "NEXT_PUBLIC_APP_HOST": process.env.APP_HOST,
    "NEXT_PUBLIC_SUPABASE_API_URL": process.env.SUPABASE_API_URL,
    "NEXT_PUBLIC_SUPABASE_API_TOKEN": process.env.SUPABASE_API_TOKEN,
  },
  reactStrictMode: true,
  experimental: {
    emotion: true,
  },
  optimizeFonts: true,
};

module.exports = nextConfig;
