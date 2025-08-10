# Cloudflare Pages Deployment Notes

## Standard Next.js Build (Server Rendering Needed)
Cloudflare Pages currently focuses on static hosting. For dynamic SSR you can:
1. Use **Next on Pages** (Beta) adapter.
2. Or deploy to Cloudflare Workers with Wrangler + next-on-pages.

### Using next-on-pages (high-level)
```
npm install -D @cloudflare/next-on-pages wrangler
npx @cloudflare/next-on-pages setup
```
This generates a `wrangler.toml` and modifies output for deployment.

Then CI step:
```
npx @cloudflare/next-on-pages build
npx wrangler pages deploy .vercel/output/static
```

## Pure Static Export (If acceptable)
If all routes are static and no server runtime needed:
```
next build && next export
```
Set Pages output dir to `out`.

## Environment Variables
Add in Cloudflare dashboard:
- NODE_VERSION=18
- Any NEXT_PUBLIC_* variables

## Caching
Leverage Cloudflare edge caching for images and static assets under `/_next/static/*`.

## Post-Deployment
- Verify canonical URL in `app/head.js` matches production.
- Add redirects if old paths change.
