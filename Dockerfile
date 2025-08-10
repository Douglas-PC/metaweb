FROM node:18-alpine AS base
WORKDIR /app

# Dependencies layer
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --production

# Build layer (needs dev deps for Next.js build)
FROM base AS build
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

# Static export stage
FROM build AS export
RUN npm run export

# Production runtime (static) using nginx
FROM nginx:1.27-alpine AS runner
COPY --from=export /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
