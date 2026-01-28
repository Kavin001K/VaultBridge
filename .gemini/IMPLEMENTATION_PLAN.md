# VaultBridge Implementation Plan
## Technical & Architectural Improvements

**Date Generated:** 2026-01-28
**Current State Analysis:** Complete

---

## Executive Summary

This plan outlines the implementation of 15+ major features across 4 phases, transforming VaultBridge from a solid encrypted file transfer platform into an enterprise-grade, privacy-first solution with advanced capabilities like streamed decryption, P2P transfers, resumable uploads, and enhanced security features.

---

## Phase 1: Core Infrastructure (Service Workers for Large Files)
**Priority: CRITICAL** | **Estimated Effort: 3-5 days**

### 1.1 Service Worker for Streamed Decryption

**Current Problem:**
- The `downloadFileInMemory()` function in `access.tsx` downloads ALL chunks into memory before creating a Blob
- Files >1GB will crash browsers on mobile devices with limited RAM
- The existing `downloadStream.ts` utility exists but the Service Worker itself is NOT implemented

**Implementation:**

#### A. Create Service Worker (`client/public/sw.js`)
```javascript
// Service Worker for streamed decryption
const CACHE_NAME = 'vaultbridge-v1';
const downloadRegistry = new Map();

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data.type === 'REGISTER_DOWNLOAD') {
    const { fileId, fileKeyJson, chunks, metadata } = event.data;
    downloadRegistry.set(fileId, { fileKeyJson, chunks, metadata, status: 'pending' });
  }
  if (event.data.type === 'CANCEL_DOWNLOAD') {
    downloadRegistry.delete(event.data.fileId);
  }
});

// Intercept fetch for /stream-download/:fileId
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const match = url.pathname.match(/^\/stream-download\/(.+)$/);
  
  if (match) {
    const fileId = match[1];
    const downloadInfo = downloadRegistry.get(fileId);
    
    if (downloadInfo) {
      event.respondWith(createStreamedResponse(fileId, downloadInfo));
    }
  }
});

async function createStreamedResponse(fileId, info) {
  const { fileKeyJson, chunks, metadata } = info;
  
  // Import the encryption key
  const key = await crypto.subtle.importKey(
    'raw',
    base64ToArrayBuffer(fileKeyJson),
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
  
  // Create a ReadableStream that decrypts chunks on-the-fly
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for (const chunk of chunks) {
          const response = await fetch(chunk.downloadUrl);
          const encryptedData = await response.arrayBuffer();
          
          // Extract IV (first 12 bytes) and ciphertext
          const iv = new Uint8Array(encryptedData, 0, 12);
          const ciphertext = new Uint8Array(encryptedData, 12);
          
          // Decrypt
          const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv },
            key,
            ciphertext
          );
          
          // Handle decompression if needed
          let finalData = new Uint8Array(decrypted);
          // TODO: Add brotli decompression support
          
          controller.enqueue(finalData);
        }
        controller.close();
        
        // Notify main thread
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({ type: 'DOWNLOAD_COMPLETE', fileId });
          });
        });
        
      } catch (error) {
        controller.error(error);
      }
    }
  });
  
  return new Response(stream, {
    headers: {
      'Content-Type': metadata.type || 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${metadata.name}"`,
      'Content-Length': metadata.size.toString(),
    }
  });
}

// Utility functions
function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
```

#### B. Register Service Worker (`client/src/main.tsx`)
```typescript
// Add SW registration at app startup
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(reg => console.log('Service Worker registered'))
    .catch(err => console.error('SW registration failed:', err));
}
```

#### C. Update `downloadStream.ts` to export key properly
- The current implementation passes `CryptoKey` directly, but SWs cannot receive CryptoKey objects via postMessage
- Must export key to raw format first, then pass base64 string

**Files to Create/Modify:**
- [ ] `client/public/sw.js` (NEW)
- [ ] `client/src/main.tsx` (MODIFY - add SW registration)
- [ ] `client/src/lib/downloadStream.ts` (MODIFY - fix key transfer)
- [ ] `client/src/lib/crypto.ts` (ADD - exportKey function already exists, good!)

---

### 1.2 Adaptive Chunking

**Current State:**
- Fixed chunk size of 5MB in `download.tsx` and `upload.tsx`
- No dynamic sizing based on connection or file size

**Implementation:**

#### A. Create Adaptive Chunking Utility (`client/src/lib/adaptiveChunk.ts`)
```typescript
import { measureConnectionSpeed } from './connectionSpeed';

export interface ChunkConfig {
  chunkSize: number;
  shouldChunk: boolean;
  estimatedChunks: number;
}

const MIN_CHUNK_SIZE = 1 * 1024 * 1024;  // 1MB
const MAX_CHUNK_SIZE = 50 * 1024 * 1024; // 50MB
const NO_CHUNK_THRESHOLD = 50 * 1024 * 1024; // 50MB

export async function getOptimalChunkConfig(fileSize: number): Promise<ChunkConfig> {
  // Files under 50MB: No chunking
  if (fileSize <= NO_CHUNK_THRESHOLD) {
    return {
      chunkSize: fileSize,
      shouldChunk: false,
      estimatedChunks: 1
    };
  }
  
  // Measure connection speed
  const speedMbps = await measureConnectionSpeed();
  
  // Dynamic chunk sizing based on connection
  let chunkSize: number;
  if (speedMbps < 5) {
    chunkSize = 2 * 1024 * 1024; // 2MB for slow connections
  } else if (speedMbps < 20) {
    chunkSize = 5 * 1024 * 1024; // 5MB for medium
  } else if (speedMbps < 50) {
    chunkSize = 10 * 1024 * 1024; // 10MB for fast
  } else {
    chunkSize = 20 * 1024 * 1024; // 20MB for very fast
  }
  
  // Clamp to bounds
  chunkSize = Math.max(MIN_CHUNK_SIZE, Math.min(MAX_CHUNK_SIZE, chunkSize));
  
  return {
    chunkSize,
    shouldChunk: true,
    estimatedChunks: Math.ceil(fileSize / chunkSize)
  };
}
```

#### B. Connection Speed Measurement (`client/src/lib/connectionSpeed.ts`)
```typescript
export async function measureConnectionSpeed(): Promise<number> {
  // Use Navigator.connection if available
  const connection = (navigator as any).connection;
  if (connection?.downlink) {
    return connection.downlink;
  }
  
  // Fallback: measure with small test fetch
  const testUrl = '/api/health';
  const startTime = performance.now();
  
  try {
    await fetch(testUrl);
    const duration = performance.now() - startTime;
    // Rough estimate based on response time
    return duration < 100 ? 50 : duration < 300 ? 20 : duration < 500 ? 10 : 5;
  } catch {
    return 10; // Default to medium
  }
}
```

**Files to Create/Modify:**
- [ ] `client/src/lib/adaptiveChunk.ts` (NEW)
- [ ] `client/src/lib/connectionSpeed.ts` (NEW)
- [ ] `client/src/pages/upload.tsx` (MODIFY - integrate adaptive chunking)
- [ ] `shared/schema.ts` (MODIFY - add chunkSize to file metadata)

---

## Phase 2: UX Improvements (Folder Uploads & Multi-File Download)
**Priority: HIGH** | **Estimated Effort: 2-3 days**

### 2.1 Directory/Folder Uploads

**Implementation:**

#### A. Create Folder Upload Component (`client/src/components/folder-uploader.tsx`)
```typescript
import { useCallback, useState } from 'react';
import { zipSync } from 'fflate';

interface FolderFile {
  path: string;
  data: Uint8Array;
  lastModified: number;
}

export function useFolderUpload() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const processFolder = useCallback(async (items: FileSystemEntry[]): Promise<File> => {
    setIsProcessing(true);
    const files: FolderFile[] = [];
    
    async function scanDirectory(entry: FileSystemEntry, path: string = '') {
      if (entry.isFile) {
        const fileEntry = entry as FileSystemFileEntry;
        const file = await new Promise<File>((resolve) => {
          fileEntry.file(resolve);
        });
        const data = new Uint8Array(await file.arrayBuffer());
        files.push({ 
          path: path + file.name, 
          data,
          lastModified: file.lastModified 
        });
      } else if (entry.isDirectory) {
        const dirEntry = entry as FileSystemDirectoryEntry;
        const reader = dirEntry.createReader();
        const entries = await new Promise<FileSystemEntry[]>((resolve) => {
          reader.readEntries(resolve);
        });
        for (const subEntry of entries) {
          await scanDirectory(subEntry, path + entry.name + '/');
        }
      }
    }
    
    // Scan all dropped items
    for (let i = 0; i < items.length; i++) {
      await scanDirectory(items[i]);
      setProgress(((i + 1) / items.length) * 50);
    }
    
    // Create ZIP using fflate
    const zipData: { [path: string]: Uint8Array } = {};
    files.forEach(f => { zipData[f.path] = f.data; });
    
    setProgress(75);
    const zipped = zipSync(zipData);
    setProgress(100);
    
    const folderName = items[0]?.name || 'archive';
    const zipBlob = new Blob([zipped], { type: 'application/zip' });
    const zipFile = new File([zipBlob], `${folderName}.zip`, { type: 'application/zip' });
    
    setIsProcessing(false);
    return zipFile;
  }, []);
  
  return { processFolder, isProcessing, progress };
}
```

**Files to Create/Modify:**
- [ ] `client/src/components/folder-uploader.tsx` (NEW - hook and component)
- [ ] `client/src/pages/upload.tsx` (MODIFY - integrate folder drop support)
- [ ] `fflate` is already in package.json ✓

---

### 2.2 Multiple File "Download All" (Client-Side Zip)

**Current State:**
- Multi-file vaults are supported in schema
- No "Download All as ZIP" functionality

**Implementation:**

Add to `access.tsx`:
```typescript
import { zipSync } from 'fflate';

const handleDownloadAllAsZip = async () => {
  if (!vaultData || !fileKey || fileMetadata.length === 0) return;
  
  setStage('downloading');
  setStatusText('Preparing archive...');
  
  const filesForZip: { [name: string]: Uint8Array } = {};
  
  for (let i = 0; i < fileMetadata.length; i++) {
    const file = fileMetadata[i];
    setStatusText(`Downloading ${file.name} (${i + 1}/${fileMetadata.length})...`);
    
    // Download and decrypt file (reuse existing logic)
    const decryptedData = await downloadAndDecryptFile(file);
    filesForZip[file.name] = new Uint8Array(decryptedData);
  }
  
  setStatusText('Creating archive...');
  const zipped = zipSync(filesForZip);
  
  const blob = new Blob([zipped], { type: 'application/zip' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vault_${vaultData.id.slice(0, 8)}_files.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  setStage('ready');
};
```

**Files to Modify:**
- [ ] `client/src/pages/access.tsx` (MODIFY - add download all as ZIP)

---

### 2.3 "Burn-on-Read" Visual Feedback

**Current State:**
- Server deletes vault when download limit reached ✓
- `access.tsx` has `isBurned` state and heat distortion filter ✓
- Missing: synchronous storage deletion verification

**Enhancements Needed:**

#### A. Enhanced Burn Animation with Sound
```typescript
// Add to access.tsx
const playBurnSound = () => {
  const audio = new Audio('/sounds/burn.mp3');
  audio.volume = 0.3;
  audio.play().catch(() => {}); // Ignore if blocked
};

// Enhance the burn sequence
if (res.remainingDownloads <= 0) {
  toast({
    title: "Vault Depleted",
    description: "Initiating self-destruct sequence...",
    variant: "destructive"
  });
  playBurnSound();
  
  // Trigger particle explosion effect
  setShowParticles(true);
  
  setTimeout(() => setIsBurned(true), 1500);
}
```

#### B. Verify Physical File Deletion on Backend
**File:** `server/storage.ts`
```typescript
async deleteVault(id: string): Promise<void> {
  // Get all chunks first
  const files = await this.getFiles(id);
  const chunks = await Promise.all(files.map(f => this.getChunks(f.id)));
  
  // Delete from object storage FIRST (synchronous)
  for (const fileChunks of chunks) {
    for (const chunk of fileChunks) {
      if (chunk.storagePath) {
        await supabaseStorage.delete(chunk.storagePath);
      }
    }
  }
  
  // THEN delete from database
  await db.delete(vaults).where(eq(vaults.id, id));
}
```

**Files to Create/Modify:**
- [ ] `client/public/sounds/burn.mp3` (NEW - asset)
- [ ] `client/src/pages/access.tsx` (MODIFY - enhanced animation)
- [ ] `server/storage.ts` (MODIFY - synchronous deletion)

---

## Phase 3: Resilience (Resumable Uploads)
**Priority: HIGH** | **Estimated Effort: 3-4 days**

### 3.1 Resumable Uploads using IndexedDB

**Implementation Architecture:**

#### A. IndexedDB State Manager (`client/src/lib/resumableUpload.ts`)
```typescript
import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface UploadState {
  vaultId: string;
  fileId: string;
  fileName: string;
  fileSize: number;
  totalChunks: number;
  uploadedChunks: number[];
  encryptedChunks: ArrayBuffer[]; // Cached encrypted chunks
  cryptoKeyExported: string; // Base64 exported key
  startedAt: number;
  lastUpdatedAt: number;
}

interface VaultBridgeDB extends DBSchema {
  'upload-state': {
    key: string; // fileId
    value: UploadState;
  };
}

let db: IDBPDatabase<VaultBridgeDB>;

export async function initDB() {
  db = await openDB<VaultBridgeDB>('vaultbridge-uploads', 1, {
    upgrade(db) {
      db.createObjectStore('upload-state', { keyPath: 'fileId' });
    }
  });
}

export async function saveUploadProgress(state: UploadState) {
  state.lastUpdatedAt = Date.now();
  await db.put('upload-state', state);
}

export async function getUploadProgress(fileId: string): Promise<UploadState | undefined> {
  return db.get('upload-state', fileId);
}

export async function clearUploadProgress(fileId: string) {
  await db.delete('upload-state', fileId);
}

export async function getAllPendingUploads(): Promise<UploadState[]> {
  const all = await db.getAll('upload-state');
  // Filter out stale uploads (>24 hours old)
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  return all.filter(u => u.lastUpdatedAt > cutoff);
}
```

#### B. Resume Detection Component (`client/src/components/resume-uploads-banner.tsx`)
```typescript
export function ResumeUploadsBanner() {
  const [pendingUploads, setPendingUploads] = useState<UploadState[]>([]);
  
  useEffect(() => {
    getAllPendingUploads().then(setPendingUploads);
  }, []);
  
  if (pendingUploads.length === 0) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-amber-900/20 border border-amber-800/50 rounded-xl p-4 mb-6"
    >
      <div className="flex items-center gap-3">
        <RefreshCw className="w-5 h-5 text-amber-500" />
        <div>
          <p className="font-medium text-amber-200">Incomplete Uploads Detected</p>
          <p className="text-sm text-amber-400/70">
            {pendingUploads.length} upload(s) can be resumed
          </p>
        </div>
        <Button variant="outline" size="sm" className="ml-auto">
          Resume
        </Button>
      </div>
    </motion.div>
  );
}
```

**Files to Create/Modify:**
- [ ] `client/src/lib/resumableUpload.ts` (NEW)
- [ ] `client/src/components/resume-uploads-banner.tsx` (NEW)
- [ ] `client/src/pages/upload.tsx` (MODIFY - integrate resumable logic)
- [ ] Add `idb` to package.json

---

## Phase 4: Creative & Advanced (WebRTC P2P)
**Priority: MEDIUM** | **Estimated Effort: 4-5 days**

### 4.1 WebRTC "Live" Transfer (P2P Mode)

**Current State:**
- `client/src/lib/webrtc.ts` has P2P client implementation ✓
- `server/websocket.ts` has signaling server ✓
- `client/src/pages/live.tsx` exists but needs integration ✓

**Implementation Enhancements:**

#### A. Create Live Transfer Flow (`client/src/pages/live.tsx` Enhancement)
```typescript
// Add sender/receiver modes
// Add file transfer over DataChannel
// Add fallback to store-and-forward if P2P fails

const handleP2PTransfer = async (files: File[]) => {
  // Generate room ID
  const roomId = crypto.randomUUID().slice(0, 8);
  
  // Create P2P client as initiator
  const p2p = new P2PClient(roomId, true);
  p2p.connect();
  
  // Listen for connection
  p2p.on('connected', () => {
    // Start streaming files
    for (const file of files) {
      streamFileP2P(file, p2p);
    }
  });
  
  p2p.on('failed', () => {
    // Fallback to regular upload
    toast({ title: 'P2P Failed', description: 'Falling back to secure server transfer...' });
    handleRegularUpload(files);
  });
};

const streamFileP2P = async (file: File, p2p: P2PClient) => {
  const CHUNK_SIZE = 16 * 1024; // 16KB chunks for WebRTC
  const reader = file.stream().getReader();
  
  // Send file metadata first
  p2p.sendData(JSON.stringify({
    type: 'file-meta',
    name: file.name,
    size: file.size,
    mimeType: file.type
  }));
  
  // Stream chunks
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    p2p.sendData(value.buffer);
  }
  
  p2p.sendData(JSON.stringify({ type: 'file-complete' }));
};
```

**Files to Modify:**
- [ ] `client/src/pages/live.tsx` (MODIFY - full implementation)
- [ ] `client/src/lib/webrtc.ts` (MODIFY - add file streaming helpers)
- [ ] `server/websocket.ts` (MODIFY - add TURN server fallback config)

---

## Phase 5: Security Hardening
**Priority: HIGH** | **Estimated Effort: 2-3 days**

### 5.1 Client-Side Password (2FA)

**Implementation:**

#### A. Password-Protected Vaults (`client/src/lib/crypto.ts`)
```typescript
// Add password-based key derivation
export async function derivePasswordKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 600000, // High iterations for security
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['wrapKey', 'unwrapKey']
  );
}

// Wrap file key with password
export async function wrapWithPassword(fileKey: CryptoKey, password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const passwordKey = await derivePasswordKey(password, salt);
  
  const wrapped = await crypto.subtle.wrapKey('raw', fileKey, passwordKey, 'AES-KW');
  
  // Return salt + wrapped key as base64
  const combined = new Uint8Array(salt.length + wrapped.byteLength);
  combined.set(salt);
  combined.set(new Uint8Array(wrapped), salt.length);
  
  return arrayBufferToBase64(combined.buffer);
}
```

#### B. Upload Page Password UI
```typescript
// Add to upload form
const [passwordProtect, setPasswordProtect] = useState(false);
const [vaultPassword, setVaultPassword] = useState('');

// In handleUpload:
if (passwordProtect && vaultPassword) {
  // Wrap file key with password before including in URL
  const wrappedKey = await wrapWithPassword(fileKey, vaultPassword);
  // The URL will now only contain the password-wrapped key
  // User must enter password to unwrap
}
```

**Files to Modify:**
- [ ] `client/src/lib/crypto.ts` (MODIFY - add password functions)
- [ ] `client/src/pages/upload.tsx` (MODIFY - add password UI)
- [ ] `client/src/pages/access.tsx` (MODIFY - add password prompt)

---

### 5.2 Decoy Vaults (Duress Password)

**Concept:** Allow creation of a fake vault that opens with a "duress" password.

**Implementation:**

```typescript
// During upload, optionally create a decoy
interface DecoyConfig {
  enabled: boolean;
  duressPassword: string;
  decoyFiles: File[]; // Dummy files to show
}

// When accessing with duress password:
// 1. Show decoy files instead of real ones
// 2. Still decrement download counter
// 3. Log access attempt (optional, for audit)
```

**Files to Modify:**
- [ ] `client/src/pages/upload.tsx` (MODIFY - decoy creation)
- [ ] `shared/schema.ts` (MODIFY - add decoy metadata fields)
- [ ] `client/src/pages/access.tsx` (MODIFY - detect duress password)

---

## Additional Improvements

### ATM-Style Mobile Keypad UI

The current `access.tsx` already has a numeric keypad style - enhance with:
- Larger buttons (100x100px minimum on mobile)
- Sound feedback on key press
- High contrast mode option
- QR code scanner integration

### Visual Encryption Feedback

Add a "Matrix Rain" effect during encryption:
```typescript
// component: MatrixRain.tsx
// Shows animated falling characters during upload
// Morphs file icon into "noise" to represent encryption
```

---

## Implementation Checklist

### Phase 1 (CRITICAL - 3-5 days)
- [ ] Create `client/public/sw.js` - Service Worker
- [ ] Update `client/src/main.tsx` - SW registration
- [ ] Fix `client/src/lib/downloadStream.ts` - key export
- [ ] Create `client/src/lib/adaptiveChunk.ts`
- [ ] Create `client/src/lib/connectionSpeed.ts`
- [ ] Update `client/src/pages/upload.tsx` - adaptive chunking

### Phase 2 (HIGH - 2-3 days)
- [ ] Create `client/src/components/folder-uploader.tsx`
- [ ] Update `client/src/pages/upload.tsx` - folder support
- [ ] Update `client/src/pages/access.tsx` - ZIP download
- [ ] Update `server/storage.ts` - sync deletion
- [ ] Add burn sound asset

### Phase 3 (HIGH - 3-4 days)
- [ ] Add `idb` dependency
- [ ] Create `client/src/lib/resumableUpload.ts`
- [ ] Create `client/src/components/resume-uploads-banner.tsx`
- [ ] Update `client/src/pages/upload.tsx` - resumable logic

### Phase 4 (MEDIUM - 4-5 days)
- [ ] Enhance `client/src/pages/live.tsx` - full P2P flow
- [ ] Enhance `client/src/lib/webrtc.ts` - file streaming
- [ ] Add TURN server configuration

### Phase 5 (HIGH - 2-3 days)
- [ ] Update `client/src/lib/crypto.ts` - password functions
- [ ] Update upload/access pages - password UI
- [ ] Implement decoy vaults (optional)

---

## Dependencies to Add

```json
{
  "idb": "^8.0.0"  // For IndexedDB wrapper (resumable uploads)
}
```

*Note: `fflate` and `brotli-wasm` are already installed.*

---

## Testing Strategy

1. **Service Worker Tests**
   - Test with 500MB+ files on mobile
   - Verify memory usage stays constant
   - Test offline/online transitions

2. **Resumable Upload Tests**
   - Simulate network interruption at 50%
   - Verify IndexedDB state persistence
   - Test resume after browser restart

3. **P2P Transfer Tests**
   - Test with NAT traversal scenarios
   - Verify fallback to server mode
   - Measure transfer speeds vs server

4. **Security Tests**
   - Password-protected vault access
   - Key derivation timing attacks
   - Decoy vault detection resistance

---

## Next Steps

**Recommended Order:**
1. Start with Phase 1 (Service Workers) - fixes critical memory issues
2. Then Phase 3 (Resumable Uploads) - improves reliability
3. Then Phase 2 (Folder/ZIP) - UX improvements
4. Then Phase 5 (Security) - hardening
5. Finally Phase 4 (WebRTC) - advanced feature

Would you like me to start implementing **Phase 1 (Service Workers for Streamed Decryption)** now?
