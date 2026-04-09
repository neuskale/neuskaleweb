/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.youtube.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://www.neuskale.com https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  async headers() {
    // Only apply strict CSP in production — dev mode uses eval() for webpack source maps
    if (process.env.NODE_ENV !== 'production') return [];
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [],
  },
  // Redirect old .html URLs to clean paths for SEO
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/pricing.html', destination: '/pricing', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/title-search.html', destination: '/title-search', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/best-title-search-companies.html', destination: '/best-title-search-companies', permanent: true },
    ];
  },
};

module.exports = nextConfig;
