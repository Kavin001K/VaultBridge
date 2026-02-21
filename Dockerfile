# Stage 1: Build Environment
FROM node:20-alpine AS builder

WORKDIR /app

# Enable corepack for faster installs if needed, though npm ci is fine
# Copy package files first
COPY package*.json ./

# Install ALL dependencies (devDependencies required for build)
RUN npm ci

# Copy full application code
COPY . .

# Run the build script (Vite frontend + ESBuild backend)
RUN npm run build

# Stage 2: Production Environment
FROM node:20-alpine AS runner

WORKDIR /app

# Optimize Node.js for production
ENV NODE_ENV=production
# Google Cloud Run expects the app to listen on the PORT env var (default 8080)
ENV PORT=8080

# Copy package files for production install
COPY package*.json ./

# Install ONLY production dependencies to keep image size small and secure
RUN npm ci --omit=dev && npm cache clean --force

# Copy only the compiled output from the builder stage
COPY --from=builder /app/dist ./dist

# Explicitly expose the Cloud Run expected port
EXPOSE 8080

# Directly invoke node for better signal handling (replaces npm start wrapper)
# This allows SIGTERM to be passed directly to the Node process for graceful shutdown
CMD ["node", "dist/index.cjs"]
