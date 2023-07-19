/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    host: process.env.HOST,
  },
}


module.exports = nextConfig
