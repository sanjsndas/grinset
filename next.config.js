/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com'
    ],
  },
  // Remove experimental.appDir as it's now stable in Next.js 13+
  experimental: {
    serverComponentsExternalPackages: ['@heroicons/react'], // Add heroicons here
    optimizePackageImports: ['@heroicons/react'] // Optional: Improves performance
  },
  // Webpack configuration to handle module resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, 'components'),
      '@/app': path.resolve(__dirname, 'app')
    }
    return config
  },
  // Required for Vercel deployments
  output: 'standalone', // Creates optimized deployment files
  // Remove headers/redirects/i18n if not needed
}

module.exports = nextConfig
