import type { MetadataRoute } from "next";

const BASE_URL = "https://yanovalabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/corporate-profile",
    "/our-products",
    "/our-services",
    "/portfolio",
    "/careers",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
