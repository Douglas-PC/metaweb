##########
# Builder stage: build and export static Next.js site
##########
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies (cached layer)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source
COPY . .

# Static export (includes build)
RUN npm run export

##########
# Runtime stage: Nginx to serve static assets
##########
FROM nginx:1.27-alpine AS runner
LABEL org.opencontainers.image.title="Douglas PC Static Site" \
	org.opencontainers.image.description="Static export of Next.js site served via Nginx" \
	org.opencontainers.image.source="https://github.com/vignesh-gupta/meta-droid" \
	org.opencontainers.image.licenses="MIT"

# Copy custom nginx config (caching, gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy exported site
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -q -O - http://localhost/healthz || exit 1

# Provide a simple health file (optional); if not present, healthcheck hits index.html
RUN echo "ok" > /usr/share/nginx/html/healthz

CMD ["nginx", "-g", "daemon off;"]
