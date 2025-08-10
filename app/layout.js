import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://example.com'} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Douglas PC – Innovation partner for AI strategy, automation, and full‑stack product engineering." />
      <meta name="theme-color" content="#000000" />
      <meta property="og:site_name" content="Douglas PC" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Douglas PC – Innovation Partner" />
      <meta property="og:description" content="AI workflow orchestration, platform engineering, and growth enablement." />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
