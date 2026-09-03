import type { MetadataRoute } from "next";
import { siteMeta } from "./_lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMeta.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
