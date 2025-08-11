# Meta-Droid Project Instructions for AI Agents

## Architecture

This is a Next.js 15 application that uses the App Router and is configured for static export (`output: 'export' in next.config.js`). The primary goal is to create a fast, static website that can be deployed to services like Cloudflare Pages.

- **`app/`**: Contains the main application structure, with `layout.jsx` serving as the root layout. All global metadata and styling are centralized here.
- **`components/`**: Contains reusable, general-purpose React components.
- **`sections/`**: Contains larger, page-level components that define the structure of a page (e.g., `Hero.jsx`, `About.jsx`).
- **`styles/`**: Contains global styles and Tailwind CSS configuration. Shared styling tokens are in `styles/index.js`.
- **`public/`**: Contains static assets like images and fonts.
- **`utils/`**: Contains utility functions, such as motion variants for Framer Motion in `utils/motion.js`.

## Developer Workflow

### Local Development

To run the application locally, use the following commands:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

To create a production-ready static build, run:

```bash
npm run build
```

This will generate the static site in the `out/` directory.

### Testing

The project is configured with Jest and React Testing Library. To run the test suite:

```bash
npm test
```

Test files are located in the `__tests__/` directory and should have a `.test.jsx` suffix.

### Docker

The project includes a `Dockerfile` for containerized builds and deployments.

To build the Docker image:

```bash
docker build -t meta-droid .
```

To run the application in a Docker container:

```bash
docker run -p 8080:80 meta-droid
```

The application will be accessible at `http://localhost:8080`.

## Conventions

- **Commit Messages**: Follow the Conventional Commits specification (e.g., `feat:`, `fix:`, `chore:`, `docs:`).
- **Styling**: Use Tailwind CSS for styling. For shared styling values, use the tokens defined in `styles/index.js`.
- **Metadata**: All global SEO and metadata are managed in `app/layout.jsx`. This includes Open Graph, Twitter Card, and other meta tags.

## Deployment

The application is designed for deployment on Cloudflare Pages.

- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Environment Variables**:
  - `SITE_ORIGIN`: The production URL of the site.
  - `NEXT_PUBLIC_SITE_ORIGIN`: The public-facing production URL.

These must be set correctly for the prebuild verification to pass.
