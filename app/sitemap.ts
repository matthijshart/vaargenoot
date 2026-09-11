import type { MetadataRoute } from "next";
import { site } from "@/content/config";
import { paden } from "@/lib/taal";

/** Elke pagina in beide talen, met een verwijzing naar de andere taal. */
export default function sitemap(): MetadataRoute.Sitemap {
  const nl = ["/", "/duo-of-solo", "/zo-werkt-het", "/sloepen", "/vragen", "/over", "/proefvaren", "/reserveer"];
  return nl.flatMap((p) => {
    const en = paden[p];
    const alternates = { languages: { nl: `${site.domein}${p}`, en: `${site.domein}${en}` } };
    return [
      { url: `${site.domein}${p}`, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7, alternates },
      { url: `${site.domein}${en}`, changeFrequency: "monthly" as const, priority: p === "/" ? 0.9 : 0.6, alternates },
    ];
  });
}
