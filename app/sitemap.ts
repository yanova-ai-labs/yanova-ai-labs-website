import type { MetadataRoute } from "next";

const BASE_URL = "https://yanovalabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/solutions", "/resources", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
