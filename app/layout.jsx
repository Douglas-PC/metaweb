import '../styles/globals.css';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL('https://www.douglaspc.com'),
  title: 'Douglas PC – AI, Automation, Product Engineering & Digital Growth',
  description: 'Douglas PC is a digital innovation agency delivering AI strategy, custom software engineering, intelligent automation, data platforms, and growth-focused product development.',
  robots: 'index,follow',
  author: 'Douglas PC',
  icons: {
    icon: '/metadroid-fav.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Douglas PC | Digital Innovation Agency',
    title: 'Douglas PC – AI, Automation, Product Engineering & Digital Growth',
    description: 'Douglas PC is a digital innovation agency delivering AI strategy, custom software engineering, intelligent automation, data platforms, and growth-focused product development.',
    url: 'https://www.douglaspc.com',
    images: [
      {
        url: '/cover.png',
        alt: 'Douglas PC innovation visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Douglas PC – AI, Automation, Product Engineering & Digital Growth',
    description: 'Douglas PC is a digital innovation agency delivering AI strategy, custom software engineering, intelligent automation, data platforms, and growth-focused product development.',
    images: ['/cover.png'],
    site: '@DouglasPCtech',
  },
};

export const viewport = {
  themeColor: '#1A232E',
};

const RootLayout = ({ children }) => {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Douglas PC',
    url: 'https://www.douglaspc.com',
    logo: '/metadroid-fav.png',
    sameAs: [
      'https://www.linkedin.com/company/douglaspctech',
      'https://twitter.com/DouglasPCtech',
      'https://www.instagram.com/DouglasPCtech',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-888-784-8140',
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['en'],
      },
    ],
    description: 'Douglas PC is a digital innovation agency delivering AI strategy, custom software engineering, intelligent automation, data platforms, and growth-focused product development.',
  };

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Douglas PC',
    url: 'https://www.douglaspc.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.douglaspc.com/blog?query={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      </head>
      <body>
        <nav className="flex gap-4 border-b border-neutral-800 px-4 py-3">
          <Link href="/" className="font-semibold">Home</Link>
          <Link href="/blog" className="font-medium">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
