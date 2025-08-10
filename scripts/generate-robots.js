#!/usr/bin/env node
/* Generate robots.txt */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const robotsPath = path.join(outDir, 'robots.txt');
const origin = process.env.SITE_ORIGIN || 'https://example.com';

if (!fs.existsSync(outDir)) {
  console.error('Missing out/ directory. Run npm run export first.');
  process.exit(1);
}

const body = [
  'User-agent: *',
  'Allow: /',
  `Sitemap: ${origin}/sitemap.xml`,
  '\n',
].join('\n');

fs.writeFileSync(robotsPath, body);
console.log('Generated robots.txt');
