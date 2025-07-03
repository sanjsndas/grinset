/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'placehold.co',
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com'
    ],
  },
  experimental: {
    appDir: true,
    // Optional: Enable new Next.js features you want to use
    serverComponentsExternalPackages: ['sharp', 'onnxruntime-node'],
  },
  // Enable static HTML export if needed
  // output: 'export',
  // Configure Webpack (optional)
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here if needed
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  // Configure headers (optional)
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],
  // Configure redirects (optional)
  redirects: async () => [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true,
    },
  ],
  // Internationalization configuration (optional)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // For larger applications with lots of static pages
  // swcMinify: true,
}
