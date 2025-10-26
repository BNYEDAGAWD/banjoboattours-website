import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/banjoboattours-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
