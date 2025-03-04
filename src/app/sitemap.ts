import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arpitdev.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://arpitdev.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}