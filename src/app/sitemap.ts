import { MetadataRoute } from 'next';

/**
 * Sitemap for TV Repair landing page
 * Simple single-page structure optimized for SEO
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clt-tp.com'; // Update with your actual domain
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
