import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for TV Repair landing page
 * Optimized for search engine crawling
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://clt-tp.com/sitemap.xml', // Update with your actual domain
  };
}
