/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  
  // Optimize images
  images: {
    unoptimized: true,  // оставляем оптимизацию включенной
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