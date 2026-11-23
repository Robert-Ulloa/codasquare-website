import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/solutions', '/process', '/work', '/pricing', '/about', '/contact', '/privacy', '/terms', '/refund']
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.7,
  }))
}
