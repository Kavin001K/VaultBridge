# 🌉 VaultBridge
> **Zero-Knowledge. Ephemeral. Secure.**
> *The privacy-first file transfer platform for the modern web.*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/frontend-React_18-61DAFB.svg)
![Node](https://img.shields.io/badge/backend-Node.js-339933.svg)
![Supabase](https://img.shields.io/badge/database-Supabase-3ECF8E.svg)
![Mobile Ready](https://img.shields.io/badge/mobile-PWA%20Ready-purple.svg)

---

## 🌟 Overview

**VaultBridge** is a secure, ephemeral file transfer tool designed with **Zero-Knowledge** architecture at its core. Now optimized for mobile with a native-like PWA experience.

- **Files are encrypted in your browser** before they ever touch our servers.
- **We never see your files or keys.** The decryption key is part of the URL fragment (`#`) and is never sent to the backend.
- **Auto-Destruction:** Vaults automatically burn after a set number of downloads or time expiry.
- **Mobile Optimized:** Touch-friendly interface, battery-aware animations, and PWA support.

Perfect for sharing sensitive documents, code snippets, or private data without leaving a digital footprint.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 🔒 **End-to-End Encryption** | AES-256-GCM encryption performed entirely client-side. |
| 🗑️ **Burn-on-Read** | Set vaults to self-destruct immediately after 1 successful download. |
| ⚡ **Streamed Transfers** | Handle large files (1GB+) with low memory usage via chunked streaming. |
| 📱 **Mobile SDK & PWA** | Native-like experience with touch optimizations, battery awareness, and home screen installation. |
| 🛡️ **Zero Tracking** | No cookies, no analytics, no user accounts, no logs. |
| 📋 **Live Clipboard** | Securely share text snippets and secrets across devices instantly. |
| ☁️ **Dual-Cloud Storage** | **Cloudflare R2** (Primary) for massive scale + **Supabase** (Backup) for redundancy. |
| 💾 **Memory Fallback** | Automatic fallback to volatile memory storage if primary storage fails. |
| 📧 **Direct Email** | Send secure access codes directly to recipients (keys remain with you). |

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Mobile SDK:** Custom hook-based SDK for device capabilities (battery, network, touch)
- **Backend:** Node.js, Express
- **Database:** Supabase (PostgreSQL)
- **Object Storage:** Cloudflare R2 (Primary) + Supabase Storage (Backup)
- **Security:** Web Crypto API (AES-GCM), Argon2 hashing

---

## 🚀 Self-Hosting Guide (Localhost)

Follow these steps to run your own instance of VaultBridge locally.

### 1️⃣ Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v20 or higher)
*   [Git](https://git-scm.com/)
*   A [Supabase](https://supabase.com/) project (Free tier works perfectly)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/Kavin001K/VaultBridge.git
cd VaultBridge
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Open `.env` and fill in your Supabase credentials. You can find these in your Supabase Project Settings -> API.

```env
# Database Connection (Transaction Pooler works best)
DATABASE_URL="postgres://postgres.xxxx:password@aws-0-region.pooler.supabase.com:6543/postgres"

# Supabase API (Project Settings -> API)
SUPABASE_URL="https://your-project-id.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key-eyJh..."

# Cloudflare R2 (Optional - For Zero Egress Fees)
R2_ACCOUNT_ID="your-cloudflare-account-id"
R2_ACCESS_KEY_ID="your-r2-access-key"
R2_SECRET_ACCESS_KEY="your-r2-secret-key"
R2_BUCKET_NAME="vaultbridgefiles"
```

> **Storage Logic:** The system automatically prioritizes **Cloudflare R2** (if configured) for uploads to save on bandwidth costs. If R2 is full or unconfigured, it seamlessly fails over to **Supabase Storage**.


> **Note:** The `SUPABASE_SERVICE_ROLE_KEY` is required because the backend manages storage buckets and file lifecycles directly.

### 4️⃣ Setup Database Schema

1.  Go to your Supabase Dashboard -> **SQL Editor**.
2.  Open the `supabase-schema.sql` file from this repository.
3.  Copy the contents and paste them into the Supabase SQL Editor.
4.  Click **Run** to create the necessary tables (`vaults`, `files`, `chunks`) and security policies.

### 5️⃣ Install & Run

Install dependencies and start the development server:

```bash
# Install dependencies
npm install

# Start the dev server (Frontend + Backend)
npm run dev
```

Visit **`http://localhost:5000`** in your browser. 🎉

---

## 🐳 Docker Hosting

Prefer containers? We have a ready-to-use Docker setup.

```bash
# Build the image
docker build -t vaultbridge .

# Run the container
docker run -p 5000:5000 --env-file .env vaultbridge
```

See the full [Docker Guide](DOCKER_GUIDE.md) for production deployment details.

---

## 📸 Screenshots

*(Add your screenshots here)*

| Secure Vault | Download Page |
| :---: | :---: |
| *Create a secure vault with custom expiry* | *Decrypt and download files locally* |

---

## 🤝 Contributing

Contributions are welcome! secure file sharing should be accessible to everyone.
1.  Fork the repo
2.  Create a feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Kavin001K">Kavin</a></sub>
</div>
