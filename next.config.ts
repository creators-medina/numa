import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pixieset.com",
      },
      {
        protocol: "https",
        hostname: "*.pixieset.com",
      },
    ],
  },
};

export default nextConfig;
