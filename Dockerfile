# Production Dockerfile for Landing Page
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS build

# Copy source files
COPY . .

# Build Next.js application
RUN pnpm build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Copy built application from build stage
# Next.js standalone output includes server.js and necessary files
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Expose port
EXPOSE 3000

# Set PORT environment variable
ENV PORT=3000

# Start the application
CMD ["node", "server.js"]

