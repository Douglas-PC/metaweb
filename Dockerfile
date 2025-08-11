##########
# Builder stage: build and export static Next.js site
# Upgraded to Node 20 (current LTS) to address security advisories flagged in Node 18 image.
##########
FROM node:20.15.1-slim AS builder
WORKDIR /app

# Install dependencies (cached layer)
COPY package.json package-lock.json* ./
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates \
	&& rm -rf /var/lib/apt/lists/* \
	&& (npm ci --no-audit --no-fund || npm install --no-audit --no-fund)

# Provide defaults for canonical origin so prebuild (verify-env) passes inside container.
ARG SITE_ORIGIN=https://agency.douglaspc.com
ARG NEXT_PUBLIC_SITE_ORIGIN=${SITE_ORIGIN}
ENV SITE_ORIGIN=${SITE_ORIGIN} \
		NEXT_PUBLIC_SITE_ORIGIN=${NEXT_PUBLIC_SITE_ORIGIN}

# Copy source
COPY . .

# Build & static export (Next.js 15 with output: 'export')
RUN npm run build

##########
# Runtime stage: Nginx to serve static assets
##########
FROM nginx:1.27.0-alpine-slim AS runner
LABEL org.opencontainers.image.title="Douglas PC Static Site" \
	org.opencontainers.image.description="Static export of Next.js site served via Nginx" \
	org.opencontainers.image.source="https://github.com/Douglas-PC/metaweb" \
	org.opencontainers.image.licenses="MIT"

# Copy custom nginx config (caching, gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy exported site
COPY --from=builder /app/out /usr/share/nginx/html

# Ensure correct permissions for static files
RUN chown -R nginx:nginx /usr/share/nginx/html


EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -q -O - http://127.0.0.1/healthz || exit 1

# Provide a simple health file (optional); if not present, healthcheck hits index.html
RUN echo "ok" > /usr/share/nginx/html/healthz

CMD ["nginx", "-g", "daemon off;"]
