## Douglas PC – Digital Innovation Agency

AI strategy, intelligent automation, custom software engineering, data & ML enablement, and growth-focused digital product delivery.

### Key Service Pillars
- AI Strategy & Roadmapping – Prioritize high‑impact use cases with measurable ROI.
- Custom Software Engineering – Domain-driven, API-first, cloud-native platforms.
- Intelligent Automation – Event-driven orchestration that removes manual friction.
- Data & ML Enablement – Pipelines, feature stores, and safe model operationalization.
- Product Acceleration – From idea to validated MVP in weeks, not quarters.

### Tech Stack
Next.js 15 (App Router, static export), React 18, Tailwind CSS, Framer Motion, Node.js 18.

### Local Development
```bash
npm install
npm run dev
# http://localhost:3000
```

Production build:
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t douglaspc/metaweb .
docker run -p 3000:3000 douglaspc/metaweb
```

### SEO / Metadata
Defined in `app/layout.js`: Open Graph, Twitter Card, basic canonical tag. Blog posts include Article JSON-LD.

### Cloudflare Pages Deployment (Subdomain: `agency.douglaspc.com`)
Static export is enabled (`output: 'export'`). Deployment uploads the `out/` directory.

1. Set required env vars (must match):
```
SITE_ORIGIN=https://agency.douglaspc.com
NEXT_PUBLIC_SITE_ORIGIN=https://agency.douglaspc.com
```
`prebuild` script fails if they're missing/mismatched.

2. Cloudflare Pages settings:
- Build command: `npm run build && npx next export -o out || true`
- Output directory: `out`
- Node: 18+

3. Add custom domain in Pages > Custom domains: `agency.douglaspc.com` (auto CNAME if Cloudflare DNS). Else manually create CNAME to `<project>.pages.dev`.

4. (Optional) Preview env: set preview origins (e.g. `https://preview-agency.douglaspc.com`).

5. Generate sitemap & robots locally after a production build if you want committed artifacts:
```
npm run build
npm run sitemap
npm run robots
```
Commit the updated `sitemap.xml` if changed.

6. Post-deploy checks:
- Canonical tag uses production origin
- `/sitemap.xml` lists blog posts
- `/robots.txt` references sitemap
- `/blog` index + individual posts render

7. Caching: Rely on Cloudflare default. Add `_headers` adjustments if needed for longer max-age.

### GitHub Actions (CI)
Workflow (added) runs lint + build on pushes and PRs to `main`.

### Testing
Jest + Testing Library are configured.
Run:
```bash
npm test
```
Add test files under `__tests__/` with suffix `.test.jsx`.

### Conventions
- Commits: `feat:`, `chore:`, `fix:`, `docs:`, `refactor:`, etc.
- Components in `components/`, motion / layout sections in `sections/`.
- Shared styling tokens in `styles/index.js`.

### Roadmap Ideas
- RSS / Atom feed (`/feed.xml`).
- Tag pages for blog taxonomy.
- Contact / quote form with email integration.
- Case studies & client outcomes page.
- Analytics & event tracking.

### Contact
Phone: 1 (888) 784-8140  
Twitter: @DouglasPCtech  
LinkedIn: DouglasPCtech  

---
© {new Date().getFullYear()} Douglas PC. All rights reserved.
