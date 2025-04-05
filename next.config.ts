import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatar.vercel.sh'], 
  },
};

export default nextConfig;

