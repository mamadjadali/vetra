import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';


const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
