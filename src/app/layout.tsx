import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';
import Script from 'next/script';

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
  keywords: 'TV repair near me, TV repair Charlotte NC, in-home TV repair, mobile TV repair service, TV repair visit, television repair Charlotte, TV doctor Charlotte, TV fix near me, Samsung TV repair Charlotte, LG TV repair Charlotte, Sony TV repair Charlotte, Vizio TV repair, TCL TV repair, Hisense TV repair, Panasonic TV repair, Sharp TV repair, Philips TV repair, TV wall mounting Charlotte, TV mounting service, flatscreen repair, LED TV repair, OLED TV repair, QLED TV repair, plasma TV repair, LCD TV repair, 4K TV repair, 8K TV repair, smart TV repair, curved TV repair, TV power supply repair, TV main board repair, TV backlight repair, TV no picture, TV no sound, TV won\'t turn on, TV blinking red light, TV turns off by itself, affordable TV repair, cheap TV repair, fast TV repair, same day TV repair, emergency TV repair, weekend TV repair, home electronics repair, audio video repair, geek squad alternative, local TV repair shop, authorized TV repair, certified TV technician, TV mechanic, fix my TV, broken TV repair, 28202, 28203, 28204, 28205, 28206, 28207, 28208, 28209, 28210, 28211, 28212, 28213, 28214, 28215, 28216, 28217, 28226, 28227, 28244, 28262, 28269, 28270, 28273, 28277, 28278, 28280, 28282, Matthews TV repair, Pineville TV repair, Mint Hill TV repair, Huntersville TV repair, Ballantyne TV repair, SouthPark TV repair, Dilworth TV repair, Myers Park TV repair, NoDa TV repair, Plaza Midwood TV repair, University City TV repair',
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
    siteName: 'inHomeTvRepair',
    images: [
      {
        url: '/services/tv-repair.png', // Ensure this image exists or use a valid one
        width: 1200,
        height: 630,
        alt: 'In-Home TV Repair Technician in Charlotte',
      },
    ],
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.png', sizes: '192x192', type: 'image/png' },
      { rel: 'shortcut icon', url: '/favicon.png', type: 'image/png' },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
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
            "name": "inHomeTvRepair",
            "image": "https://inhometvrepair.com/services/tv-repair.png",
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
              "latitude": 35.0266, 
              "longitude": -80.8494
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
            "areaServed": [
              {
                "@type": "City",
                "name": "Charlotte",
                "@id": "https://www.wikidata.org/wiki/Q16565"
              },
              {
                "@type": "City",
                "name": "Matthews"
              },
              {
                "@type": "City",
                "name": "Pineville"
              },
              {
                "@type": "City",
                "name": "Mint Hill"
              },
              {
                "@type": "City",
                "name": "Huntersville"
              },
              {
                "@type": "PostalCode",
                "postalCode": "28277"
              }
            ],
            "serviceType": "TV Repair",
            "description": "Top-rated in-home TV repair service in Charlotte, NC. We are the 'TV repair near me' experts who come to your house. Fix power issues, black screens, and smart TV setups for Samsung, LG, Sony, Vizio, and more. Call for a TV repair visit today.",
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

        {/* WebSite Schema for Site Name in Search */}
        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "In-Home TV Repair",
            "alternateName": "In-Home TV Repair Charlotte",
            "url": "https://inhometvrepair.com"
          }
          `}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF5722" />
      </head>
      <body className="antialiased bg-white">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
