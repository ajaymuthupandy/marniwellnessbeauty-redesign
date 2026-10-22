import type { MetadataRoute } from "next";
import { posts } from "@/data/news";
import { packages } from "@/data/packages";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/bali/",
    "/wellness-in-bali/",
    "/microblading-in-bali/",
    "/marni-villa-ubud/",
    "/package/",
    "/marni-gallery/",
    "/news/",
    "/contacts/",
  ];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, priority: p === "/" ? 1 : 0.8 })),
    ...packages.map((p) => ({ url: `${SITE_URL}/${p.slug}/`, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${SITE_URL}/news/${p.slug}/`, lastModified: p.date, priority: 0.4 })),
  ];
}
