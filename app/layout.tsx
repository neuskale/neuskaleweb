import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neuskale.com'),
  title: {
    default: 'Title Search Services from $10 | Neuskale - Nationwide Coverage',
    template: '%s | Neuskale',
  },
  description: 'Fast, affordable title searches across 20+ states starting at $10. Less than 24-hour turnaround with 24/7 expert support. Order your title search today.',
  keywords: ['title search', 'property title search', 'lien search', 'nationwide title search', 'affordable title search', 'title search company'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Neuskale Title Services',
    images: [{ url: '/assets/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neuskale',
  },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <Script src="/assets/analytics-config.js" strategy="beforeInteractive" />
      </head>
      <body className="has-mobile-sticky">
        <hr className="gradient-line" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001, margin: 0 }} />
        <Header />
        {children}
        <Footer />
        <Script src="/assets/analytics.js" strategy="afterInteractive" />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8HGP4HVX2C" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8HGP4HVX2C');
        `}</Script>
      </body>
    </html>
  );
}
