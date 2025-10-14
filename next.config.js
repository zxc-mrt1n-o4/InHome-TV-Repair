/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains for flexibility
      },
    ],
    unoptimized: false,
  },

  // Enable compression
  compress: true,

  // Disable static optimization for dynamic pages
  trailingSlash: false,
  
  // Optimize bundle
  poweredByHeader: false,
  
  // Ensure consistent rendering between dev and prod
  reactStrictMode: true,
  
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ESLint configuration for consistent builds
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // TypeScript configuration for consistent builds
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 