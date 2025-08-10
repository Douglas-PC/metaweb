## Douglas PC – Digital Innovation Agency

AI strategy, intelligent automation, custom software engineering, data & ML enablement, and growth-focused digital product delivery.

### Key Service Pillars
- AI Strategy & Roadmapping – Prioritize high‑impact use cases with measurable ROI.
- Custom Software Engineering – Domain-driven, API-first, cloud-native platforms.
- Intelligent Automation – Event-driven orchestration that removes manual friction.
- Data & ML Enablement – Pipelines, feature stores, and safe model operationalization.
- Product Acceleration – From idea to validated MVP in weeks, not quarters.

### Tech Stack
Next.js 13 (App Router), React 18, Tailwind CSS (JIT), Framer Motion, Node.js 18.

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
Defined in `app/head.js`: Open Graph, Twitter Card, structured data (Organization), canonical URL placeholder (update when deployed).

### Cloudflare Pages Deployment
1. Create a new Cloudflare Pages project and connect the GitHub repo.
2. Framework: None (auto-detect) or set Build command: `npm run build`
3. Output directory: `.next`
4. Set environment variable: `NODE_VERSION=18` (or use Cloudflare default Node 18+ environment).
5. (Optional) Add `NEXT_PUBLIC_*` env vars for runtime config.
6. Enable caching & asset compression in Cloudflare dashboard.

Because Next.js (server mode) requires a Node server, consider one of:
- Use Cloudflare Pages + Functions (experimental) with Next.js adapter.
- Or export a static version if all routes are static: `next build && next export` (set output dir to `out`).

If you need server rendering on Cloudflare Workers, migrate to the Next.js Edge / Middleware compatible approach or use a platform like Vercel/Fly/Render.

### GitHub Actions (CI)
Workflow (added) runs lint + build on pushes and PRs to `main`.

### Conventions
- Commits: `feat:`, `chore:`, `fix:`, `docs:`, `refactor:`, etc.
- Components in `components/`, motion / layout sections in `sections/`.
- Shared styling tokens in `styles/index.js`.

### Roadmap Ideas
- Blog content system (MDX) for insights & resources.
- Contact / quote form with email integration.
- Case studies & client outcomes page.
- Analytics & event tracking.

### Contact
Phone: 1 (888) 784-8140  
Twitter: @DouglasPCtech  
LinkedIn: DouglasPCtech  

---
© {new Date().getFullYear()} Douglas PC. All rights reserved.
