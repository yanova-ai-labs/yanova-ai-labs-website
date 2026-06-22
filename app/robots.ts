import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yanovalabs.com/sitemap.xml",
    host: "https://yanovalabs.com",
  };
}
