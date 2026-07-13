import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "hanutech-website.vercel.app" },
    ],
  },
};

export default nextConfig;
