export const dynamic = "force-static";

import type { MetadataRoute } from "next";

const baseUrl = "https://marrow-and-tide.vercel.app";
const lastModified = new Date("2026-03-29T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/suppers/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/pantry/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
