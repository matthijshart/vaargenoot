import type { MetadataRoute } from "next";
import { site } from "@/content/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/aanbod", "/en/offer"] },
    sitemap: `${site.domein}/sitemap.xml`,
  };
}
