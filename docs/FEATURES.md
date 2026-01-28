# VaultBridge Feature Documentation

> **Complete Technical Reference for VaultBridge v2.0**

This document provides comprehensive documentation for every feature, function, button, and capability in the VaultBridge platform. VaultBridge is a zero-knowledge, encrypted file transfer system designed for maximum privacy and security.

---

## Table of Contents

1. [Core Features Overview](#core-features-overview)
2. [Upload System](#upload-system)
3. [Encryption Engine](#encryption-engine)
4. [Download System](#download-system)
5. [Access Control](#access-control)
6. [Service Worker Architecture](#service-worker-architecture)
7. [Adaptive Chunking](#adaptive-chunking)
8. [Resumable Uploads](#resumable-uploads)
9. [Folder Upload Support](#folder-upload-support)
10. [WebRTC P2P Transfer](#webrtc-p2p-transfer)
11. [Security Features](#security-features)
12. [API Reference](#api-reference)
13. [UI Components](#ui-components)
14. [Configuration Options](#configuration-options)

---

## Core Features Overview

### Zero-Knowledge Architecture

VaultBridge operates on a zero-knowledge principle, meaning:

- **All encryption happens in your browser** - Files are encrypted using AES-256-GCM before leaving your device
- **Encryption keys never touch the server** - Keys are stored only in the URL fragment (hash), which browsers don't send to servers
- **Metadata is encrypted** - Even file names and types are encrypted before upload
- **No accounts required** - True anonymity without user tracking

### Key Technologies

| Technology | Purpose | Location |
|-----------|---------|----------|
| AES-256-GCM | File encryption | `client/src/lib/crypto.ts` |
| PBKDF2 | Key derivation from PIN/password | `client/src/lib/crypto.ts` |
| Web Workers | Off-thread encryption | `client/src/encryption.worker.ts` |
| Service Workers | Streamed decryption | `client/public/sw.js` |
| IndexedDB | Resumable upload state | `client/src/lib/resumableUpload.ts` |
| WebRTC | P2P file transfer | `client/src/lib/webrtc.ts` |
| fflate | Client-side ZIP compression | `client/src/components/folder-uploader.tsx` |
| Brotli WASM | Advanced compression | `brotli-wasm` package |

---

## Upload System

### File Selection

**Location:** `client/src/pages/upload.tsx`

#### Features:
- **Drag & Drop Zone** - Drop files directly onto the upload area
- **Click to Upload** - Traditional file picker dialog
- **Multiple Files** - Select multiple files simultaneously
- **Folder Upload** - Drop entire folders (creates ZIP automatically)

#### Button: "Select Files"
```
Purpose: Opens native file picker dialog
Location: Upload page center panel
Behavior: Triggers file input click, supports multiple selection
```

#### Drop Zone Behavior
```
States:
- Default: Shows upload icon and instructions
- Hover: Border color changes to primary (green)
- Invalid: Shows warning for unsupported operations
- Files Selected: Shows file list with previews
```

### File Processing Pipeline

1. **Selection** - User selects files via drag-drop or picker
2. **Validation** - Check file size limits, count limits
3. **Compression Check** - Determine if file is compressible
4. **Key Generation** - Generate AES-256 encryption key
5. **Chunking** - Split large files based on adaptive chunking
6. **Encryption** - Encrypt each chunk with Web Worker
7. **Upload** - Upload encrypted chunks to storage
8. **Finalization** - Create vault record, generate access codes

### Configuration Options

**Location:** Upload page right panel

#### Expiration Time
```
Control: Dropdown selector
Options: 1 hour, 6 hours, 12 hours, 24 hours, 48 hours, 7 days
Default: 24 hours
Effect: Vault auto-deletes after this duration
```

#### Download Limit
```
Control: Number input with +/- buttons
Range: 1-100 downloads
Default: 1 (burn-on-read)
Effect: Vault deletes after this many downloads
```

#### Access Mode Toggle
```
Options:
- "Split Code" (default): Generates XXX-XXX code for access
- "Direct Link": Creates shareable URL with embedded key

Security Trade-offs:
- Split Code: More secure (key derived from PIN)
- Direct Link: More convenient (single link sharing)
```

### Upload Progress UI

```
Visual Elements:
- Progress bar: Shows overall upload progress
- Stage indicator: Current phase (Encrypting, Uploading, Finalizing)
- Chunk counter: X of Y chunks completed
- Speed indicator: Current upload speed (MB/s)
- Time remaining: Estimated time to completion
```

---

## Encryption Engine

### Location
- Main library: `client/src/lib/crypto.ts`
- Web Worker: `client/src/encryption.worker.ts`

### Core Functions

#### `generateKey()`
```typescript
Purpose: Generate a new AES-256-GCM encryption key
Returns: Promise<CryptoKey>
Usage: Called once per vault creation

Example:
const key = await generateKey();
```

#### `exportKey(key: CryptoKey)`
```typescript
Purpose: Export CryptoKey to Base64 string for URL storage
Returns: Promise<string>
Usage: Creating shareable links

Example:
const keyString = await exportKey(key);
// keyString can be added to URL fragment
```

#### `importKey(base64Key: string)`
```typescript
Purpose: Import Base64 key string back to CryptoKey
Returns: Promise<CryptoKey>
Usage: Downloading/decrypting files

Example:
const key = await importKey(urlFragment);
```

#### `encryptData(data: BufferSource, key: CryptoKey)`
```typescript
Purpose: Encrypt raw data using AES-256-GCM
Returns: Promise<{ iv: Uint8Array, encryptedData: ArrayBuffer }>
Usage: Encrypting file chunks

Example:
const { iv, encryptedData } = await encryptData(chunk, key);
// iv is 12 bytes, must be stored with encrypted data
```

#### `decryptData(encryptedData: BufferSource, iv: Uint8Array, key: CryptoKey)`
```typescript
Purpose: Decrypt AES-256-GCM encrypted data
Returns: Promise<ArrayBuffer>
Usage: Decrypting downloaded chunks

Example:
const decrypted = await decryptData(encrypted, iv, key);
```

### Metadata Encryption

#### `encryptMetadata(metadata: object, key: CryptoKey)`
```typescript
Purpose: Encrypt file metadata (names, types, sizes)
Returns: Promise<string> (JSON string with IV and encrypted data)
Usage: Protecting file information from server

Example:
const encryptedMeta = await encryptMetadata({
  files: [{ name: 'secret.pdf', type: 'application/pdf', size: 12345 }]
}, key);
```

#### `decryptMetadata(encryptedMetadataStr: string, key: CryptoKey)`
```typescript
Purpose: Decrypt metadata string back to object
Returns: Promise<any>
Usage: Reading file information before download

Example:
const metadata = await decryptMetadata(vault.encryptedMetadata, key);
console.log(metadata.files[0].name); // 'secret.pdf'
```

### Split-Code System (Zero-Knowledge)

VaultBridge uses a split-code system for maximum security:

```
Full Code: 123456
         ↓ ↓ ↓
    [123]   [456]
      ↓       ↓
  Lookup ID   PIN

- Lookup ID (123): Sent to server to find vault
- PIN (456): NEVER sent to server, used locally to derive decryption key
```

#### `generateSplitCode()`
```typescript
Purpose: Generate 6-digit code split into lookup ID and PIN
Returns: { fullCode: string, lookupId: string, pin: string }
Usage: Creating new vaults with split-code access

Example:
const { fullCode, lookupId, pin } = generateSplitCode();
// fullCode: "123456"
// lookupId: "123" (sent to server)
// pin: "456" (never sent to server)
```

#### `wrapFileKey(fileKey: CryptoKey, pin: string)`
```typescript
Purpose: Encrypt file key with PIN-derived key
Returns: Promise<string> (Base64 wrapped key)
Usage: Storing key on server without exposing it

Example:
const wrappedKey = await wrapFileKey(fileKey, pin);
// wrappedKey can be stored on server - useless without PIN
```

#### `unwrapFileKey(wrappedKeyBase64: string, pin: string)`
```typescript
Purpose: Decrypt file key using PIN
Returns: Promise<CryptoKey>
Usage: Recovering file key during download

Example:
const fileKey = await unwrapFileKey(vault.wrappedKey, userEnteredPin);
// fileKey is now available for decryption
```

### Password-Based Encryption (2FA)

For additional security, vaults can be password-protected:

#### `wrapKeyWithPassword(fileKey: CryptoKey, password: string)`
```typescript
Purpose: Encrypt file key with user-chosen password
Returns: Promise<string> (Base64 salt + wrapped key)
Usage: Adding password protection to vaults

Security: Uses PBKDF2 with 600,000 iterations
```

#### `unwrapKeyWithPassword(wrappedData: string, password: string)`
```typescript
Purpose: Decrypt file key with password
Returns: Promise<CryptoKey>
Usage: Accessing password-protected vaults
```

### Decoy Vault System

For plausible deniability under duress:

#### `createDecoyVault(realKey, realPassword, duressPassword, decoyKey)`
```typescript
Purpose: Create vault with real and decoy contents
Returns: { realWrapped: string, decoyWrapped: string }
Usage: Protecting sensitive data under threat

Behavior:
- Real password → Access real files
- Duress password → Access decoy files
- Server cannot tell which is which
```

---

## Download System

### Location
- Download page: `client/src/pages/download.tsx`
- Access page: `client/src/pages/access.tsx`
- Stream utility: `client/src/lib/downloadStream.ts`

### Download Methods

#### 1. In-Memory Download (Default for small files)
```
Threshold: Files < 10MB
Process:
1. Download all encrypted chunks to memory
2. Decrypt all chunks
3. Combine into single Blob
4. Trigger browser download

Pros: Fast, simple
Cons: Uses RAM equal to file size
```

#### 2. Streamed Download (Service Worker)
```
Threshold: Files > 10MB
Process:
1. Register download with Service Worker
2. SW intercepts stream-download URL
3. SW fetches chunks on-demand
4. SW decrypts and streams directly to browser
5. Browser saves to disk incrementally

Pros: Minimal RAM usage, supports 10GB+ files
Cons: Requires Service Worker support
```

### Download UI Elements

#### Access Page (`/access`)
```
Elements:
- 6-digit code input with visual boxes
- Keys display: XXX-XXX format
- Submit button: "Unlock Vault"
- Loading spinner during decryption
- File list after successful unlock
```

#### File List View
```
Per-file displays:
- File icon (based on type)
- File name (truncated if long)
- File size (formatted: KB/MB/GB)
- File type badge
- Individual download button
```

#### Download All Button
```
Purpose: Download all files as ZIP archive
Location: Bottom of file list
Behavior:
1. Downloads and decrypts all files
2. Creates client-side ZIP
3. Triggers single archive download
```

### Burn-on-Read Animation

When download limit is reached:
```
Visual sequence:
1. Toast notification: "Vault Depleted"
2. 1.5 second delay
3. Heat distortion filter activates
4. Page content fades with noise effect
5. "Vault Incinerated" message appears
6. All vault data deleted from server
```

---

## Access Control

### Access Modes

#### Direct Link Mode
```
URL Format: https://vaultbridge.app/v/{vaultId}#{key}

Components:
- /v/{vaultId}: Server-visible path (identifies vault)
- #{key}: Fragment (never sent to server, contains encryption key)

Security: Link itself is the complete key
Risk: Anyone with link has full access
```

#### Split-Code Mode
```
Access Flow:
1. User receives 6-digit code (XXX-XXX)
2. User goes to /access page
3. Enters full code
4. First 3 digits lookup vault
5. Last 3 digits decrypt locally

Security: Server only sees lookup portion
Risk: Both halves needed for access
```

### Rate Limiting

```
Endpoint: /api/vaults/code/:code
Limit: 5 attempts per minute per IP
Response on limit: 429 Too Many Requests

Purpose: Prevent brute-force code guessing
```

---

## Service Worker Architecture

### Location
`client/public/sw.js`

### Registration
```javascript
// In main.tsx or App.tsx
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(reg => console.log('SW registered'))
    .catch(err => console.error('SW failed:', err));
}
```

### Message Types

#### REGISTER_DOWNLOAD
```javascript
// Sent from main thread to SW
{
  type: 'REGISTER_DOWNLOAD',
  fileId: string,
  keyBase64: string,      // Exported encryption key
  chunks: [{
    downloadUrl: string,
    index: number
  }],
  metadata: {
    name: string,
    size: number,
    type: string,
    fileId: string
  },
  isCompressed: boolean
}
```

#### DOWNLOAD_PROGRESS
```javascript
// Sent from SW to main thread
{
  type: 'DOWNLOAD_PROGRESS',
  fileId: string,
  progress: number,       // 0-100
  processedChunks: number,
  totalChunks: number,
  fileName: string
}
```

#### DOWNLOAD_COMPLETE
```javascript
// Sent from SW to main thread
{
  type: 'DOWNLOAD_COMPLETE',
  fileId: string,
  fileName: string,
  success: true
}
```

#### DOWNLOAD_ERROR
```javascript
// Sent from SW to main thread
{
  type: 'DOWNLOAD_ERROR',
  fileId: string,
  error: string,
  fileName: string
}
```

### Stream Interception

The SW intercepts requests to `/stream-download/{fileId}`:

```javascript
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  if (url.pathname.startsWith('/stream-download/')) {
    const fileId = url.pathname.slice('/stream-download/'.length);
    const config = downloadConfigs.get(fileId);
    
    if (config) {
      event.respondWith(createStreamedResponse(fileId, config));
    }
  }
});
```

---

## Adaptive Chunking

### Location
`client/src/lib/adaptiveChunk.ts`

### Algorithm

```typescript
async function getOptimalChunkConfig(fileSize: number): Promise<ChunkConfig> {
  // Files < 50MB: No chunking
  if (fileSize <= 50 * 1024 * 1024) {
    return { shouldChunk: false, chunkSize: fileSize };
  }
  
  // Measure connection speed
  const speed = await measureConnectionSpeed();
  
  // Dynamic chunk sizing
  if (speed < 2 Mbps)  → 1MB chunks
  if (speed < 5 Mbps)  → 2MB chunks
  if (speed < 10 Mbps) → 5MB chunks
  if (speed < 25 Mbps) → 10MB chunks
  if (speed < 50 Mbps) → 15MB chunks
  if (speed < 100 Mbps) → 20MB chunks
  else                 → 25MB chunks
}
```

### Benefits

1. **Reduced Overhead** - Small files don't pay chunking overhead
2. **Network Adaptation** - Chunk size matches connection quality
3. **Mobile Friendly** - Smaller chunks on cellular connections
4. **Resumability** - Smaller chunks = less to re-upload on failure

---

## Resumable Uploads

### Location
`client/src/lib/resumableUpload.ts`

### IndexedDB Schema

```typescript
interface UploadState {
  uploadId: string;           // Unique session ID
  vaultId: string;            // Server vault ID
  fileId: string;             // Client file ID
  fileName: string;           // Original name
  fileSize: number;           // Total bytes
  totalChunks: number;        // Expected chunks
  uploadedChunks: number[];   // Completed chunk indices
  cryptoKeyExported: string;  // Base64 key for resume
  isCompressed: boolean;      // Compression flag
  startedAt: number;          // Timestamp
  lastUpdatedAt: number;      // Last activity
  status: 'in_progress' | 'paused' | 'completed' | 'failed';
}
```

### Resume Flow

```
1. App Startup
   ↓
2. Check IndexedDB for pending uploads
   ↓
3. Display resume banner if found
   ↓
4. User clicks "Resume"
   ↓
5. Load saved state
   ↓
6. Import saved encryption key
   ↓
7. Continue from next unuploaded chunk
   ↓
8. Complete and cleanup
```

### Functions

#### `createUploadSession(params)`
- Creates new upload record in IndexedDB
- Called when upload starts
- Returns unique uploadId

#### `markChunkUploaded(uploadId, chunkIndex)`
- Marks chunk as completed
- Updates lastUpdatedAt timestamp
- Called after each successful chunk upload

#### `getNextChunkToUpload(uploadId)`
- Returns first missing chunk index
- Returns null if all chunks uploaded

#### `getPendingUploads()`
- Returns all incomplete uploads
- Filters out stale (>7 days) entries
- Used for resume banner display

---

## Folder Upload Support

### Location
`client/src/components/folder-uploader.tsx`

### Process

```
1. User drops folder
   ↓
2. Recursively scan all files
   ↓
3. Preserve folder structure
   ↓
4. Create ZIP using fflate
   ↓
5. Return single File object
   ↓
6. Process as normal upload
```

### Hook Usage

```typescript
const { processFolder, state } = useFolderUpload();

// In drop handler
const entries = getEntriesFromDrop(event);
if (entries.some(e => e.isDirectory)) {
  const result = await processFolder(entries);
  // result.zipFile is ready for upload
}
```

### State Object

```typescript
interface FolderUploadState {
  isProcessing: boolean;     // Currently scanning/zipping
  progress: number;          // 0-100%
  statusMessage: string;     // Current operation
  error: string | null;      // Any errors
  result: {
    zipFile: File;           // Resulting ZIP
    fileCount: number;       // Files in ZIP
    folderCount: number;     // Folders scanned
    originalSize: number;    // Uncompressed size
    compressedSize: number;  // ZIP size
    compressionRatio: number;// Savings (0-1)
    folderName: string;      // Root folder name
  } | null;
}
```

---

## WebRTC P2P Transfer

### Location
`client/src/lib/webrtc.ts`

### Architecture

```
Sender Browser ←→ Signaling Server ←→ Receiver Browser
      ↓                                      ↓
      └────────── WebRTC Data Channel ───────┘
                 (Direct P2P transfer)
```

### Flow

```
1. Sender creates "Live Link"
   ↓
2. Generates unique room ID
   ↓
3. Receiver opens link
   ↓
4. Both connect to WebSocket signaling server
   ↓
5. Exchange ICE candidates and SDP
   ↓
6. Establish direct P2P connection
   ↓
7. Transfer encrypted file data directly
   ↓
8. If P2P fails → Fallback to server upload
```

### P2PClient Class

```typescript
const p2p = new P2PClient(roomId, isInitiator);

// Connect to signaling server
p2p.connect();

// Listen for events
p2p.on('status', (msg) => console.log(msg));
p2p.on('connected', () => startTransfer());
p2p.on('data', (chunk) => handleReceivedChunk(chunk));
p2p.on('failed', () => fallbackToServer());

// Send data
p2p.sendData(encryptedChunk);

// Cleanup
p2p.close();
```

### Benefits

- **Maximum Privacy** - Data never touches server
- **Faster Speeds** - Direct connection, no server hop
- **No Storage Costs** - Files not stored on server
- **Real-time** - Immediate transfer when both online

---

## Security Features

### Encryption Standards

| Feature | Algorithm | Key Size | Notes |
|---------|-----------|----------|-------|
| File Encryption | AES-GCM | 256-bit | Authenticated encryption |
| Key Derivation (PIN) | PBKDF2-HMAC-SHA256 | 100K iterations | For split-code |
| Key Derivation (Password) | PBKDF2-HMAC-SHA256 | 600K iterations | For 2FA |
| IV Generation | CSRNG | 96-bit | Per-chunk unique |
| Random Codes | CSRNG | N/A | Cryptographically secure |

### Security Headers

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Cache-Control: no-store, no-cache, must-revalidate
Clear-Site-Data: "cache", "storage"
```

### No Persistent Storage

VaultBridge intentionally does not use:
- localStorage
- sessionStorage
- Cookies (except session if auth enabled)
- IndexedDB (except for resumable uploads, cleared after use)

This ensures no trace is left on public computers.

### Auto-Delete Guarantees

```
Deletion Triggers:
1. Expiration time reached → Background cleanup job
2. Download limit reached → Immediate deletion after final download
3. Manual deletion → User-initiated (if enabled)

Deletion Scope:
- Vault metadata record
- All chunk records
- All files in object storage (Supabase/S3)
```

---

## API Reference

### Vault Endpoints

#### `POST /api/vaults`
Create a new vault.

**Request:**
```json
{
  "expiresIn": 24,
  "maxDownloads": 1,
  "encryptedMetadata": "base64...",
  "lookupId": "123",
  "wrappedKey": "base64...",
  "files": [{
    "fileId": "uuid",
    "chunks": 5,
    "size": 52428800,
    "isCompressed": false
  }]
}
```

**Response:**
```json
{
  "id": "uuid",
  "shortCode": "ABC123",
  "expiresAt": "2024-01-30T12:00:00Z",
  "directLink": "/v/uuid"
}
```

#### `GET /api/vaults/:id`
Get vault information.

**Response:**
```json
{
  "id": "uuid",
  "shortCode": "ABC123",
  "encryptedMetadata": "base64...",
  "expiresAt": "2024-01-30T12:00:00Z",
  "maxDownloads": 1,
  "downloadCount": 0,
  "files": [{
    "fileId": "uuid",
    "chunkCount": 5,
    "totalSize": 52428800
  }]
}
```

#### `GET /api/vaults/code/:code`
Resolve short code to vault ID.

**Response:**
```json
{
  "id": "uuid"
}
```

#### `GET /api/vaults/lookup/:lookupId`
Zero-knowledge lookup by first 3 digits.

**Response:**
```json
{
  "id": "uuid",
  "wrappedKey": "base64...",
  "encryptedMetadata": "base64...",
  "expiresAt": "2024-01-30T12:00:00Z",
  "maxDownloads": 1,
  "downloadCount": 0,
  "files": [...]
}
```

#### `POST /api/vaults/:id/download`
Track download and trigger burn-on-read if limit reached.

**Response:**
```json
{
  "success": true,
  "remainingDownloads": 0
}
```

### Chunk Endpoints

#### `POST /api/vaults/:id/files/:fileId/chunks/:chunkIndex/upload-url`
Get presigned upload URL for chunk.

**Request:**
```json
{
  "size": 5242880
}
```

**Response:**
```json
{
  "uploadUrl": "https://storage.example.com/signed-url...",
  "storagePath": "vaultId/fileId/0.enc"
}
```

#### `PUT /api/vaults/:id/files/:fileId/chunks/:chunkIndex`
Mark chunk as uploaded.

**Request:**
```json
{
  "storagePath": "vaultId/fileId/0.enc"
}
```

#### `GET /api/vaults/:id/files/:fileId/chunks/:chunkIndex/download-url`
Get presigned download URL for chunk.

**Response:**
```json
{
  "downloadUrl": "https://storage.example.com/signed-url..."
}
```

### Email Endpoint

#### `POST /api/vaults/:id/email`
Send vault access via email.

**Request:**
```json
{
  "to": "recipient@example.com",
  "senderName": "John Doe",
  "fullCode": "123456"
}
```

---

## UI Components

### VaultCard
```
Location: client/src/components/vault-card.tsx
Purpose: Display vault information in compact card format
Props:
  - vault: VaultData
  - onDownload: () => void
  - minimal?: boolean
```

### CountdownTimer
```
Location: client/src/pages/access.tsx
Purpose: Real-time expiration countdown
Props:
  - expiresAt: string (ISO date)
Display: HH:MM:SS format with styled boxes
```

### BurnFilter
```
Location: client/src/pages/access.tsx
Purpose: SVG filter for vault destruction animation
Effect: Heat distortion + noise + fade
```

### ProgressIndicator
```
Location: client/src/pages/upload.tsx
Purpose: Multi-stage upload progress
Stages: Encrypting → Uploading → Finalizing
```

---

## Configuration Options

### Environment Variables

```bash
# Database
DATABASE_URL=postgresql://...

# Supabase Storage
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Optional: Local Storage
STORAGE_PROVIDER=supabase  # or 'local'

# Optional: Email (Resend)
RESEND_API_KEY=re_...

# Server
PORT=5000
NODE_ENV=production
```

### Chunk Size Constants

```typescript
// client/src/lib/adaptiveChunk.ts
MIN_CHUNK_SIZE = 1 * 1024 * 1024      // 1MB
MAX_CHUNK_SIZE = 50 * 1024 * 1024     // 50MB
NO_CHUNK_THRESHOLD = 50 * 1024 * 1024 // 50MB
DEFAULT_CHUNK_SIZE = 5 * 1024 * 1024  // 5MB
```

### Security Constants

```typescript
// client/src/lib/crypto.ts
PBKDF2_ITERATIONS = 100000            // For PIN derivation
PASSWORD_PBKDF2_ITERATIONS = 600000   // For password derivation
IV_LENGTH = 12                        // 96 bits for AES-GCM
KEY_LENGTH = 256                      // AES-256
```

---

## Glossary

| Term | Definition |
|------|------------|
| **Vault** | A container for one or more encrypted files |
| **Chunk** | A piece of an encrypted file (typically 5-25MB) |
| **Split-Code** | 6-digit access code where first 3 digits identify vault, last 3 decrypt |
| **Lookup ID** | First 3 digits of split-code, sent to server |
| **PIN** | Last 3 digits of split-code, never sent to server |
| **Wrapped Key** | Encryption key protected by PIN-derived key |
| **Zero-Knowledge** | Server cannot decrypt or view file contents |
| **Burn-on-Read** | Vault self-destructs after download limit reached |
| **Service Worker** | Background script enabling streamed decryption |
| **P2P** | Peer-to-peer direct transfer between browsers |
| **CSRNG** | Cryptographically Secure Random Number Generator |

---

*Last Updated: January 2026*
*VaultBridge v2.0.0*
