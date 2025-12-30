import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';
import Script from 'next/script';

// Initialize Telegram bot when server starts
if (typeof window === 'undefined') {
  import('@/lib/telegram-bot').then(({ initializeTelegramBot }) => {
    initializeTelegramBot();
  });
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inhometvrepair.com'),
  title: 'In-Home TV Repair & Installation Charlotte NC | We Come to You',
  description: 'Professional in-home TV repair and installation services in Charlotte, NC. We come to you! No need to unplug or move your TV. Fix all brands - power issues, connectivity, smart TV setup, wall mounting. Same-day service available.',
  keywords: 'in-home TV repair, TV installation, TV repair Charlotte NC, television repair at home, on-site TV repair, power board repair, HDMI repair, smart TV repair, TV wall mounting, Samsung TV repair, LG TV repair, Sony TV repair',
  authors: [{ name: 'In-Home TV Repair & Installation' }],
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'In-Home TV Repair & Installation Charlotte NC | We Come to You',
    description: 'Expert in-home TV repair and installation services in Charlotte, NC. We come directly to you! All brands serviced. Same-day appointments available. Licensed & insured technicians.',
    type: 'website',
    locale: 'en_US',
    url: 'https://inhometvrepair.com',
    siteName: 'In-Home TV Repair & Installation',
    images: [
      {
        url: '/services/tv-repair.jpg', // Ensure this image exists or use a valid one
        width: 1200,
        height: 630,
        alt: 'In-Home TV Repair Technician in Charlotte',
      },
    ],
  },
  // Local Business Schema
  other: {
    'geo.region': 'US-NC',
    'geo.placename': 'Charlotte',
    'geo.position': '35.2271;-80.8431',
    'ICBM': '35.2271, -80.8431',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Local Business Schema for Google Business */}
        <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "In-Home TV Repair & Installation",
            "image": "https://inhometvrepair.com/services/tv-repair.jpg",
            "@id": "https://inhometvrepair.com",
            "url": "https://inhometvrepair.com",
            "telephone": "+19809870005",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Charlotte",
              "addressRegion": "NC",
              "postalCode": "28277",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.2271,
              "longitude": -80.8431
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "21:00"
              }
            ],
            "areaServed": {
              "@type": "City",
              "name": "Charlotte",
              "@id": "https://www.wikidata.org/wiki/Q16565"
            },
            "serviceType": "TV Repair & Installation",
            "description": "Professional TV repair and installation services in Charlotte, NC. We fix all brands - power issues, connectivity problems, smart TV setup, and professional mounting. Same-day service available.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "TV Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "TV Power Issue Repair",
                    "description": "Diagnosis and repair of power cycling or no-power issues"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Board Replacement",
                    "description": "Expert replacement of faulty internal components"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Smart TV Setup",
                    "description": "Smart TV configuration and connectivity setup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HDMI Repair",
                    "description": "HDMI port and connection repair"
                  }
                }
              ]
            }
          }
          `}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body className="antialiased bg-white">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
