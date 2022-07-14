/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    "NEXT_PUBLIC_APP_ENV": process.env.APP_ENV || "local",
    "NEXT_PUBLIC_APP_VERSION": process.env.CF_PAGES_COMMIT_SHA,
    "NEXT_PUBLIC_APP_HOST": process.env.APP_HOST,
    "NEXT_PUBLIC_SUPABASE_API_URL": process.env.SUPABASE_API_URL,
    "NEXT_PUBLIC_SUPABASE_API_TOKEN": process.env.SUPABASE_API_TOKEN,
    "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY": process.env.UNSPLASH_ACCESS_KEY,
  },
  reactStrictMode: true,
  experimental: {
    emotion: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  optimizeFonts: true,
  optimization: {
    mergeDuplicateChunks: true,
  },
};

module.exports = nextConfig;
