import { MetadataRoute } from 'next'
import { seoData } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoData.canonicalUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
