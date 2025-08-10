# Metrics & Recommendations

## Performance / Web Vitals
Track: LCP, INP (replaces FID), CLS, TTFB, Time to Interactive.
- Use Lighthouse CI or WebPageTest monthly.
- Add real-user monitoring (Cloudflare Analytics or Segment + custom events).

## Engineering Quality
- CI gates: lint (no warnings), build, optional type check (migrate to TS).
- Dependency audit weekly (npm audit / Dependabot).
- Bundle size: add `next-bundle-analyzer` to monitor growth.

## AI / Automation Impact
- Track hours saved per automation.
- Model cost per request vs. baseline.
- Latency (P50/P95) for AI-assisted flows.

## Delivery Metrics
- Lead time: commit -> deploy.
- Deployment frequency.
- Change failure rate (rollbacks, hotfixes).
- MTTR for production incidents.

## Suggested Next Steps
1. Migrate to latest Next.js for stable App Router improvements.
2. Introduce TypeScript incrementally (`tsconfig.json`).
3. Add MDX blog for insights / SEO.
4. Implement analytics + consent banner.
5. Add error monitoring (Sentry / OpenTelemetry) & structured logging.
6. Add Accessibility checks (axe) in CI.
7. Add `tel:` link on phone CTA and structured data for Service offerings.
8. Add sitemap.xml & robots.txt (static export friendly).
9. Visual regression tests (Playwright) for key sections.
10. Security headers via Cloudflare (CSP, Permissions-Policy).

## Example KPIs
| Area | KPI | Target |
|------|-----|--------|
| Performance | LCP | < 2.5s |
| Performance | CLS | < 0.1 |
| Delivery | Deploy Frequency | Daily (if changes) |
| Automation | Hours Saved / Month | +50% QoQ |
| Reliability | Uptime | 99.9% |

---
Revisit quarterly: prune unused code/assets, refresh dependencies, reassess architecture decisions.
