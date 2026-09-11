import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eén 404 voor adressen die nergens bij horen; nodig omdat de site twee
  // root layouts heeft (Nederlands en Engels).
  experimental: {
    globalNotFound: true,
  },
  images: {
    // AVIF eerst, dan WebP.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Oude routes van de eerste versie van de site.
    return [
      { source: "/prijzen", destination: "/duo-of-solo", permanent: true },
      { source: "/bedrijven", destination: "/", permanent: true },
      // Engelse routes die mensen zouden kunnen gokken.
      { source: "/en/prices", destination: "/en/duo-or-solo", permanent: true },
      { source: "/en/questions", destination: "/en/faq", permanent: true },
    ];
  },
};

export default nextConfig;
