import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const baseUrl = 'https://inhometvrepair.com';
    const currentDate = new Date().toISOString();

    // Define your URLs here
    const urls = [
        {
            loc: baseUrl,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '1.0'
        },
        // Add more URLs here if needed
    ];

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
            .map(
                (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
            )
            .join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
