#!/usr/bin/env node
/* eslint-disable no-console */
// Ensure canonical domain env vars are provided and consistent before build/export.
const required = ['SITE_ORIGIN', 'NEXT_PUBLIC_SITE_ORIGIN'];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`\n[verify-env] Missing required environment variables: ${missing.join(', ')}`);
  console.error('Example: SITE_ORIGIN=https://agency.douglaspc.com NEXT_PUBLIC_SITE_ORIGIN=https://agency.douglaspc.com');
  process.exit(1);
}
if (process.env.SITE_ORIGIN !== process.env.NEXT_PUBLIC_SITE_ORIGIN) {
  console.error('\n[verify-env] SITE_ORIGIN and NEXT_PUBLIC_SITE_ORIGIN must match for canonical + sitemap consistency.');
  process.exit(1);
}
console.log(`[verify-env] Using canonical origin: ${process.env.SITE_ORIGIN}`);
