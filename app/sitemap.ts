import type { MetadataRoute } from "next";
import { site } from "@/content/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paden = ["/", "/duo-of-solo", "/zo-werkt-het", "/sloepen", "/vragen", "/over", "/proefvaren", "/reserveer"];
  return paden.map((p) => ({ url: `${site.domein}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
