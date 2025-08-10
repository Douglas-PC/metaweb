/* eslint-disable react/no-danger */
const siteName = 'Douglas PC | Digital Innovation Agency';
const title = 'Douglas PC – AI, Automation, Product Engineering & Digital Growth';
const description = 'Douglas PC is a digital innovation agency delivering AI strategy, custom software engineering, intelligent automation, data platforms, and growth-focused product development.';
const url = 'https://www.douglaspc.com'; // adjust when live
const image = '/cover.png';

const Head = () => (
  <>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#1A232E" />
    <meta name="robots" content="index,follow" />
    <meta name="author" content="Douglas PC" />
    <link rel="icon" href="/metadroid-fav.png" />
    <link rel="canonical" href={url} />
    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content="Douglas PC innovation visual" />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:site" content="@DouglasPCtech" />
    {/* Structured Data */}
    {/* eslint-disable-next-line react/no-danger */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Douglas PC',
          url,
          logo: '/metadroid-fav.png',
          sameAs: [
            'https://twitter.com/DouglasPCtech',
            'https://www.linkedin.com/company/DouglasPCtech',
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
          description,
        }),
      }}
    />
  </>
);

export default Head;
