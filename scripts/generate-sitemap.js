#!/usr/bin/env node
/* Minimal sitemap generator for static export */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const domain = process.env.SITE_ORIGIN || 'https://example.com';
const outDir = path.join(process.cwd(), 'out');
const sitemapPath = path.join(outDir, 'sitemap.xml');

function collectHtml(dir, base = '') {
  return fs.readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    const rel = path.join(base, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      return collectHtml(full, rel);
    }
    if (entry === 'index.html') {
      const urlPath = rel.replace(/index.html$/, '');
      return [urlPath];
    }
    return [];
  });
}

if (!fs.existsSync(outDir)) {
  console.error('Missing out/ directory. Run npm run export first.');
  process.exit(1);
}

const pages = collectHtml(outDir).map((p) => p.replace(/\\/g, '/'));

// add blog index if blog posts exist
const blogContentDir = path.join(process.cwd(), 'content', 'blog');
if (fs.existsSync(blogContentDir) && !pages.includes('/blog/')) {
  pages.push('/blog/');
}

const urls = pages.map((p) => {
  const loc = `${domain}${p.startsWith('/') ? p : `/${p}`}`;
  const isBlog = loc.includes('/blog/');
  const changefreq = isBlog ? 'monthly' : 'weekly';
  const priority = p === '/' ? '1.0' : (isBlog ? (p === '/blog/' ? '0.8' : '0.6') : '0.7');
  return `  <url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
});

const xml = `${'<?xml version="1.0" encoding="UTF-8"?>'}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
fs.writeFileSync(sitemapPath, xml);
console.log('Generated sitemap.xml with', urls.length, 'entries');
