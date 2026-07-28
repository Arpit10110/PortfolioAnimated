import type { MetadataRoute } from 'next'
import { getBlogSitemapEntries } from '@/lib/blogs'
import { absoluteUrl } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogEntries = await getBlogSitemapEntries()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/blog'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogEntries.map((entry) => ({
    url: absoluteUrl(`/blog/${entry.id}`),
    lastModified: new Date(entry.lastModified),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}
