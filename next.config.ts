import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/asset/:path*",
        destination: "/asset/:path*",
      },
    ];
  },
};

export default nextConfig;
