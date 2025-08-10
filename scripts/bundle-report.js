#!/usr/bin/env node
/* eslint-disable no-console */
/*
 * Simple bundle size reporter using source-map-explorer or next build stats.
 */
const { execSync } = require('child_process');

function run(cmd) {
  return execSync(cmd, { stdio: 'inherit' });
}

try {
  console.log('> Building production bundle (ANALYZE)...');
  process.env.ANALYZE = 'true';
  run('npm run build');
  console.log('\n> Bundle analysis (source-map-explorer)');
  // If .next/static/chunks exists, run explorer against main app bundle.
  // This is a lightweight placeholder; adjust targets as the app grows.
  try {
    run('npx source-map-explorer ".next/static/chunks/*.js" --html bundle-report.html');
    console.log('\nGenerated bundle-report.html');
  } catch (e) {
    console.warn('source-map-explorer failed or no chunks found.');
  }
} catch (error) {
  console.error('Bundle report failed:', error.message);
  process.exit(1);
}
