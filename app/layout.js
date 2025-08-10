import '../styles/globals.css';
import Link from 'next/link';

const RootLayout = ({ children }) => {
  const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://example.com';
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Douglas PC',
    url: origin,
    logo: `${origin}/metadroid-fav.png`,
    sameAs: [
      'https://www.linkedin.com/company/douglaspctech',
      'https://twitter.com/DouglasPCtech',
    ],
  };
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Douglas PC',
    url: origin,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin}/blog?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        <link rel="canonical" href={origin} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Douglas PC – Innovation partner for AI strategy, automation, and full‑stack product engineering." />
        <meta name="theme-color" content="#000000" />
        <meta property="og:site_name" content="Douglas PC" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Douglas PC – Innovation Partner" />
        <meta property="og:description" content="AI workflow orchestration, platform engineering, and growth enablement." />
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
