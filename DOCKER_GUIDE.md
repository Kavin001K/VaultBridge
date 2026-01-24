# 🐳 Docker Deployment Guide for VaultBridge

This guide provides a comprehensive, step-by-step explanation of how VaultBridge is containerized using Docker. It covers the `Dockerfile` structure, the `.dockerignore` strategy, and how to build and run the container locally or in production.

---

## 📂 1. The `Dockerfile` Explained

The `Dockerfile` is the blueprint for creating the container image. It defines the environment, dependencies, and build process.

```dockerfile
# -----------------------------------------------------------------------------
# 1. BASE IMAGE
# -----------------------------------------------------------------------------
# We use Node.js version 20 based on Alpine Linux.
# Alpine is a super lightweight Linux distribution (~5MB), which keeps our
# final image small and secure (fewer attack vectors).
FROM node:20-alpine

# -----------------------------------------------------------------------------
# 2. WORKING DIRECTORY
# -----------------------------------------------------------------------------
# Create and set '/app' as the directory where all our commands will run
# inside the container. This keeps our file system organized.
WORKDIR /app

# -----------------------------------------------------------------------------
# 3. DEPENDENCY INSTALLATION (Caching Layer)
# -----------------------------------------------------------------------------
# We copy ONLY 'package.json' and 'package-lock.json' first.
# Why? Docker caches layers. If you change your code but NOT your dependencies,
# Docker will skip this step and use the cached 'node_modules', making builds
# super fast (seconds instead of minutes).
COPY package*.json ./

# Install ALL dependencies, including 'devDependencies' (like TypeScript, Vite).
# We need these tools to compile the app in the next step.
RUN npm install

# -----------------------------------------------------------------------------
# 4. SOURCE CODE & BUILD
# -----------------------------------------------------------------------------
# Now copy the rest of the application source code into the container.
COPY . .

# Run the build script (defined in package.json as "tsx script/build.ts").
# This does two things:
# 1. Compiles the React Frontend (Vite) -> outputs to dist/public
# 2. Compiles the Express Backend (esbuild) -> outputs to dist/index.cjs
RUN npm run build

# -----------------------------------------------------------------------------
# 5. RUNTIME CONFIGURATION
# -----------------------------------------------------------------------------
# Document that the container listens on port 5000.
# (You still need to map this port when running with -p).
EXPOSE 5000

# Set the environment to production.
# This optimizes Express (faster, less verbose logs) and React/Vite.
ENV NODE_ENV=production

# -----------------------------------------------------------------------------
# 6. START COMMAND
# -----------------------------------------------------------------------------
# The command that runs when the container starts.
# We use "npm start" which runs "node dist/index.cjs".
CMD ["npm", "start"]
```

---

## 🚫 2. The `.dockerignore` File

This file tells Docker what **NOT** to copy into the container. This is crucial for:
1.  **Speed**: Less data to copy = faster builds.
2.  **Safety**: Prevents leaking secrets keys (like `.env`) or bloated local folders (`node_modules`) into the image.

**File Content:**
```text
node_modules   # Don't copy local dependencies; we install fresh ones inside Docker
.git           # Don't copy git history (hefty and unneeded)
.env           # SECURITY CRITICAL: Never bake secrets into the image!
dist           # Don't copy local build artifacts; we build fresh inside Docker
```

---

## 🛠️ 3. How to Build & Run

### Prerequisites
- Docker Desktop installed and running.

### Step 1: Build the Image
Run this command in your project terminal:
```bash
docker build -t vaultbridge-app .
```
- `-t vaultbridge-app`: Tags (names) the image "vaultbridge-app" so you can refer to it later.
- `.`: Tells Docker to look for the `Dockerfile` in the current directory.

### Step 2: Run the Container
Run the container, mapping your local port 5000 to the container's port 5000.
**Crucial:** Since we ignored `.env`, we must pass environment variables at runtime!

```bash
docker run -p 5000:5000 \
  -e PORT=5000 \
  -e DATABASE_URL="postgresql://..." \
  -e SUPABASE_URL="https://..." \
  -e SUPABASE_SERVICE_ROLE_KEY="..." \
  -e APP_URL="http://localhost:5000" \
  vaultbridge-app
```

**Or, create a `.env.docker` file and pass it:**
```bash
docker run -p 5000:5000 --env-file .env.docker vaultbridge-app
```

### Step 3: Verify
Open your browser and visit: `http://localhost:5000`. You should see the VaultBridge app running.

---

## ☁️ 4. Production Deployment

This Docker setup is "Production Ready". You can deploy it to:
- **AWS App Runner** (Easiest, auto-scales)
- **Google Cloud Run**
- **DigitalOcean App Platform**
- **Any VPS** (EC2, Droplet) with Docker installed.

**The process is always:**
1.  Push your code to GitHub.
2.  Connect your cloud provider to your repo (or push the Docker image to a registry like Docker Hub/ECR).
3.  Set your environment variables in the cloud provider's dashboard.
4.  Deploy!
