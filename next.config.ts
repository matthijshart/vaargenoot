import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF eerst, dan WebP. Scheelt veel bij de echte foto's.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
