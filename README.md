# VaultBridge

> **Privacy-First Ephemeral File Transfer Platform**

VaultBridge is a zero-knowledge, encrypted file transfer system. Files are encrypted in your browser before upload — we never see your files or encryption keys.

## 🔒 Security Features

- **Zero-Knowledge Encryption**: AES-256-GCM encryption happens entirely in your browser
- **Keys Never Leave Client**: Encryption keys are stored only in the URL fragment (never sent to server)
- **Auto-Delete**: All files automatically deleted after expiry or download limit reached
- **No Tracking**: No analytics, cookies, or fingerprinting
- **Public Computer Safe**: No localStorage, sessionStorage, or persistent data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (20+ recommended)
- Docker & Docker Compose (for Redis and MinIO)

### 1. Start Infrastructure

```bash
# Start Redis and MinIO
docker-compose up -d

# Wait for services to be ready
docker-compose logs -f minio-setup
```

### 2. Start Backend

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

### 3. Start Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Open the App

Navigate to `http://localhost:5173`

## 📁 Project Structure

```
VaultBridge/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── hooks/            # React hooks for upload/download
│   │   ├── lib/crypto/       # Client-side encryption
│   │   ├── pages/            # Route pages
│   │   ├── types/            # TypeScript types
│   │   └── utils/            # Helpers and API client
│   └── ...
├── backend/                  # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── middlewares/      # Security, validation, rate limiting
│   │   ├── workers/          # Background cleanup jobs
│   │   ├── types/            # TypeScript types
│   │   └── utils/            # Helpers
│   └── ...
└── docker-compose.yml        # Redis + MinIO setup
```

## 🔐 How It Works

### Upload Flow

1. User selects files in browser
2. Browser generates AES-256 encryption key
3. Files are chunked and encrypted client-side
4. Encrypted chunks uploaded to server
5. User receives short code + direct link (containing encryption key in URL fragment)

### Download Flow

1. Recipient opens link or enters code
2. Encryption key extracted from URL fragment (never sent to server)
3. Encrypted chunks downloaded from server
4. Browser decrypts chunks using key
5. Files saved locally
6. Vault deleted after download limit reached

### Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│ BROWSER (All encryption happens here)                   │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│ │ Generate    │→ │ Encrypt     │→ │ Upload      │      │
│ │ AES-256 Key │  │ Chunks      │  │ Encrypted   │      │
│ └─────────────┘  └─────────────┘  └─────────────┘      │
│        ↓                                                │
│ Key stored in URL fragment: example.com/d/ABC123#key=..│
└─────────────────────────────────────────────────────────┘
                          │
                          ▼ (Only encrypted data)
┌─────────────────────────────────────────────────────────┐
│ SERVER (Zero Knowledge)                                 │
│ - Never receives encryption keys                        │
│ - Never sees plaintext files                           │
│ - Only stores encrypted chunks                         │
│ - Auto-deletes after expiry                            │
└─────────────────────────────────────────────────────────┘
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/vault` | Create a new vault |
| `PUT` | `/api/v1/vault/:id/file/:fileId/chunk/:index` | Upload encrypted chunk |
| `GET` | `/api/v1/vault/:id` | Get vault info |
| `GET` | `/api/v1/vault/:id/file/:fileId/chunk/:index` | Download encrypted chunk |
| `POST` | `/api/v1/vault/:id/complete` | Mark download complete |
| `GET` | `/api/v1/code/:code` | Resolve short code to vault ID |
| `DELETE` | `/api/v1/vault/:id` | Delete vault |

## ⚙️ Configuration

### Backend Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Server port |
| `REDIS_URL` | `redis://localhost:6379` | Redis connection URL |
| `S3_ENDPOINT` | `http://localhost:9000` | S3-compatible storage endpoint |
| `S3_BUCKET` | `vaultbridge` | Storage bucket name |
| `S3_ACCESS_KEY` | `minioadmin` | S3 access key |
| `S3_SECRET_KEY` | `minioadmin` | S3 secret key |
| `CORS_ORIGIN` | `http://localhost:5173` | Allowed CORS origin |
| `DEFAULT_VAULT_TTL_HOURS` | `24` | Default vault expiry |
| `MAX_VAULT_TTL_HOURS` | `168` | Maximum vault expiry (7 days) |
| `MAX_FILE_SIZE_BYTES` | `5368709120` | Max total upload size (5GB) |

## 🛡️ Security Headers

The server implements strict security headers:

- **Content-Security-Policy**: Restricts resource loading
- **X-Frame-Options**: DENY (prevents clickjacking)
- **Referrer-Policy**: no-referrer
- **Cache-Control**: no-store (prevents caching)
- **Permissions-Policy**: Disables unnecessary APIs

## 📊 Rate Limits

| Action | Limit |
|--------|-------|
| General API | 100/minute |
| Uploads | 20/minute |
| Code attempts | 10/minute |
| Email triggers | 3/vault |

## 🧹 Auto-Cleanup

- Redis TTL automatically expires vault metadata
- Background worker runs every 10 minutes to clean orphaned S3 objects
- MinIO lifecycle policy deletes objects older than 7 days

## 🏗️ Production Deployment

For production, you should:

1. Use a managed Redis instance (e.g., AWS ElastiCache, Redis Cloud)
2. Use a proper S3-compatible storage (AWS S3, Cloudflare R2, Backblaze B2)
3. Set up HTTPS with proper certificates
4. Configure appropriate rate limits
5. Use environment-specific CORS origins
6. Consider adding Cloudflare or similar for DDoS protection



---

**VaultBridge** — *No accounts. No tracking. Zero knowledge.*
