export const dynamic = "force-static";

import type { MetadataRoute } from "next";

const baseUrl = "https://marrow-and-tide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/suppers", "/pantry", "/contact"].map((path) => ({
    url: `${baseUrl}${path}/`.replace(/\/$/, path === "" ? "/" : "/"),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
