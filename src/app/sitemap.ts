import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const SITE_URL = "https://mohamedabdullah.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cv`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/posts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: `${SITE_URL}/posts/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
