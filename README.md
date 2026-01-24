# VaultBridge

> **Privacy-First Ephemeral File Transfer Platform**

VaultBridge is a zero-knowledge, encrypted file transfer system. Files are encrypted in your browser before upload — we never see your files or encryption keys.

## 🔒 Security Features

- **Zero-Knowledge Encryption**: AES-256-GCM encryption happens entirely in your browser
- **Keys Never Leave Client**: Encryption keys are stored only in the URL fragment (never sent to server)
- **Auto-Delete**: All files automatically deleted after expiry or download limit reached
- **No Tracking**: No analytics, cookies, or fingerprinting
- **Public Computer Safe**: No localStorage, sessionStorage, or persistent data

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js 20+
- PostgreSQL Database
- Supabase Project (for Storage & DB)

### 1. Setup Environment

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

This command starts both the frontend and backend in development mode:

```bash
npm run dev
```

Open `http://localhost:5000` in your browser.

## 🐳 Docker Deployment

To build and run VaultBridge using Docker, please refer to the detailed [Docker Guide](DOCKER_GUIDE.md).

## 📁 Project Structure

```
VaultBridge/
├── client/                   # React + TypeScript + Vite Frontend
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── hooks/            # React hooks
│   │   ├── lib/crypto/       # Client-side encryption logic
│   │   ├── pages/            # Route pages
│   │   └── ...
├── server/                   # Node.js + Express Backend
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Database adapter
│   ├── services/             # Email & Supabase services
│   └── ...
├── shared/                   # Shared types & schemas
└── DOCKER_GUIDE.md           # Docker instructions
```

## 🔐 How It Works

### Upload Flow

1. User selects files in browser
2. Browser generates AES-256 encryption key
3. Files are chunked and encrypted client-side
4. Encrypted chunks uploaded to server
5. User receives a **Short Code** (for manual access) + **Direct Link** (containing encryption key in URL fragment)

### Download Flow

1. Recipient opens link or enters code
2. Encryption key extracted from URL fragment (never sent to server)
3. Encrypted chunks downloaded from server
4. Browser decrypts chunks using key
5. Files saved locally
6. Vault deleted after download limit reached

### Email Flow

1. Sender enters recipient email
2. Server sends an email with the **Short Code** and a link to the Access Page
3. Recipient clicks link -> enters Code -> Browser decrypts locally

**Note:** The email link does *not* contain the decryption key directly for security reasons (Zero Knowledge). The user enters the code to unlock the vault.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/vaults` | Create a new vault |
| `POST` | `/api/chunks/upload` | Get upload URL for chunk |
| `GET` | `/api/vaults/:id` | Get vault info |
| `GET` | `/api/chunks/download` | Get download URL for chunk |
| `GET` | `/api/vaults/code/:code` | Resolve short code |
| `POST` | `/api/vaults/:id/email` | Send vault access via email |

## 🛡️ Security Headers

The server implements strict security headers:
- **Content-Security-Policy**
- **X-Frame-Options**: DENY
- **Referrer-Policy**: no-referrer
- **Cache-Control**: no-store

## 🏗️ Production Deployment

VaultBridge is designed for:
- **AWS Amplify** (Frontend/Backend)
- **Docker** (Any container platform)
- **Supabase** (Backend storage/DB)

See `DOCKER_GUIDE.md` for containerization details.

---

**VaultBridge** — *No accounts. No tracking. Zero knowledge.*
