import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://inhometvrepair.com';
    const lastModified = new Date().toISOString();

    // Define your routes here
    const routes = [
        {
            url: baseUrl,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Add more routes as your site grows
    ];

    // Manual XML construction with XSL stylesheet reference
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
            .map((route) => {
                return `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    return new NextResponse(sitemapXml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}
