import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF eerst, dan WebP.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Oude routes van de eerste versie van de site.
    return [
      { source: "/prijzen", destination: "/duo-of-solo", permanent: true },
      { source: "/bedrijven", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
