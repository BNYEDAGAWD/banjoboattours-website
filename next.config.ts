import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/banjoboattours-website',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
};

export default nextConfig;
