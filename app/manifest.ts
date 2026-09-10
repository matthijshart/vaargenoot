import type { MetadataRoute } from "next";
import { site } from "@/content/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.naam,
    short_name: site.naam,
    description: site.omschrijving,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
