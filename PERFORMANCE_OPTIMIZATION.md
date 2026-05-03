# Performance Optimization Implementation Guide

## Overview

This document outlines the three major performance improvements implemented in VaultBridge to optimize file transfer speeds and reduce memory overhead.

---

## 1. Binary Upload Optimization (Zero-Copy)

### What Changed
- **Before:** Mixed base64 and binary uploads with potential encoding overhead
- **After:** Pure binary uploads with zero-copy transfer semantics using `ArrayBuffer` transferables

### Implementation

#### Client-Side: `/client/src/lib/uploadPipeline.ts`
```typescript
// Enhanced uploadChunkBinary with retry logic and streaming support
export async function uploadChunkBinary(
  uploadUrl: string,
  body: ArrayBuffer | Uint8Array,
  signal?: AbortSignal,
  retries: number = 3
): Promise<void>
```

**Key Features:**
- Uses `application/octet-stream` MIME type for pure binary
- Automatic retry with exponential backoff (100ms, 200ms, 400ms)
- ReadableStream support for chunks >10MB
- Content-Length header for server validation
- Zero-copy ArrayBuffer transfers to Workers

#### Performance Gains
- **33% size reduction** (no base64 padding/encoding)
- **Faster upload speeds** due to no encoding/decoding overhead
- **Better server-side processing** with binary data

### Usage
```typescript
const encryptedData = await encryptLimiter(async () => {
  const buffer = await file.slice(start, end).arrayBuffer();
  const encrypted = await workerPool.encrypt(buffer, key, compress);
  return combineIvAndEncrypted(encrypted);
});

// Automatic binary upload with retries
await uploadChunkBinary(uploadUrl, encryptedData, signal);
```

---

## 2. Web Worker/Semaphore Pattern for Parallel Encryption

### What Changed
- **Before:** Simple round-robin worker distribution
- **After:** Semaphore-based concurrency control with timeout protection

### Implementation

#### New File: `/client/src/lib/semaphore.ts`
```typescript
export class Semaphore {
  async acquire(): Promise<void>  // Request a permit
  release(): void                   // Release a permit
  async run<T>(fn: () => Promise<T>): Promise<T>  // Execute with auto-release
}

export class MultiSemaphore {
  // Manage multiple resource pools (workers + bandwidth)
}
```

#### Enhanced Worker Pool: `/client/src/lib/uploadPipeline.ts`
```typescript
export class EncryptionWorkerPool {
  private workerSemaphore: ConcurrencyLimiter;  // New!
  private activeEncryptions: number = 0;         // Track load

  async encrypt(data: ArrayBuffer, key: CryptoKey, compress: boolean): Promise<EncryptionResult> {
    return this.workerSemaphore.run(async () => {
      // ... protected encryption with timeout
      const timeout = setTimeout(() => reject(), 30000); // 30s timeout
    });
  }
}
```

**Key Features:**
- Fair FIFO queuing prevents starvation
- Timeout protection (30s) catches hung workers
- Automatic worker error handling
- Tracks active encryption count for monitoring

#### Performance Gains
- **Predictable latency** via fair semaphore scheduling
- **Memory efficiency** - limits concurrent operations
- **Fault tolerance** - detects and recovers from hung workers

### Usage
```typescript
// Encryption is automatically limited by semaphore
const result = await workerPool.encrypt(data, key, true);

// Monitor load
const active = workerPool.getActiveEncryptions();
```

---

## 3. TransformStream for Large File Handling

### What Changed
- **Before:** Whole-file buffering approach
- **After:** Streaming pipeline with minimal memory footprint

### Implementation

#### Server-Side: `/server/streamProcessing.ts`
```typescript
// Create decryption transform stream
function createDecryptionStream(options: DecryptionOptions): Transform

// Create decompression transform stream
function createDecompressionStream(): Transform

// Build complete pipeline
function createFileProcessingPipeline(source, options)
```

**Features:**
- 64KB highWaterMark for efficient buffering
- Authentication tag validation for AES-GCM
- Automatic decompression (Brotli/gzip)
- Backpressure-aware streaming

#### Client-Side: `/client/src/lib/streamDownload.ts`
```typescript
// TransformStream-based decryption
function createDecryptionTransform(
  iv: Uint8Array,
  key: CryptoKey
): TransformStream<Uint8Array, Uint8Array>

// Progressive file download with decryption
async function downloadAndDecryptFile(
  url: string,
  decryptionKey: CryptoKey,
  iv: Uint8Array,
  options: StreamDownloadOptions
): Promise<Blob>
```

**Key Features:**
- Native DecompressionStream when available
- Fallback for older browsers
- Progress tracking during download
- Automatic blob construction with minimal memory

#### Performance Gains
- **Memory usage** - O(chunkSize) instead of O(fileSize)
- **Latency** - start decryption before entire file arrives
- **Throughput** - pipelined operations reduce bottlenecks
- **Scalability** - handles gigabyte files on limited devices

### Usage

**Server-side file processing:**
```typescript
import { createFileProcessingPipeline } from './streamProcessing';

const { source, destination } = setupStreams();
createFileProcessingPipeline(source, {
  iv: Buffer.from(ivArray),
  key: encryptionKey,
  isCompressed: true,
  destination
});
```

**Client-side file download:**
```typescript
import { downloadAndDecryptFile } from '@/lib/streamDownload';

const blob = await downloadAndDecryptFile(fileUrl, cryptoKey, iv, {
  onProgress: (received, total) => {
    console.log(`Downloaded: ${received}/${total} bytes`);
  },
  signal: abortController.signal
});
```

---

## Performance Benchmark Targets

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Upload size (100MB file) | 133MB | 100MB | 25% ↓ |
| Memory peak | ~200MB | ~100MB | 50% ↓ |
| Encryption latency (worker timeout) | None | 30s | Fault tolerance ✓ |
| Download time (1GB) | Blocked | Streaming | 40-60% faster |
| Max file size | 500MB | Unlimited | Infinite ↑ |

---

## Configuration

### Adjust Worker Pool Size
```typescript
const settings = estimateNetworkParameters();
const workerPool = new EncryptionWorkerPool(settings.workerCount); // Auto-tuned
```

### Customize Chunk Size
```typescript
const settings: UploadSettings = {
  chunkSize: 16 * 1024 * 1024, // 16MB chunks
  parallelUploads: 4,
  workerCount: 2
};
```

### Control Stream Buffer
```typescript
// In TransformStream highWaterMark
export function createDecryptionStream(options: DecryptionOptions): Transform {
  return new Transform({
    highWaterMark: 128 * 1024, // Increase for faster networks
    // ...
  });
}
```

---

## Migration Guide

### Existing Code
If you have existing upload/download code:

1. **Replace fetch uploads:**
   ```typescript
   // Old
   const formData = new FormData();
   formData.append('data', btoa(binaryData));
   await fetch(url, { method: 'POST', body: formData });

   // New
   await uploadChunkBinary(url, binaryData);
   ```

2. **Use new semaphore for concurrency:**
   ```typescript
   // Old
   const limiter = createConcurrencyLimiter(4);
   await limiter(async () => { /* work */ });

   // New
   const semaphore = new ConcurrencyLimiter(4);
   await semaphore.run(async () => { /* work */ });
   ```

3. **Stream downloads:**
   ```typescript
   // Old
   const blob = await fetch(url).then(r => r.blob());

   // New
   const blob = await downloadAndDecryptFile(url, key, iv, { onProgress });
   ```

---

## Debugging

### Monitor Worker Pool
```typescript
workerPool.getActiveEncryptions(); // Number of active operations
```

### Track Semaphore State
```typescript
const limiter = new ConcurrencyLimiter(4);
console.log(limiter.available()); // Remaining permits
```

### Stream Backpressure
```typescript
backpressureStream.on('pause', () => console.log('Buffer full'));
backpressureStream.on('resume', () => console.log('Buffer drained'));
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| TransformStream | 67+ | 102+ | 14.1+ | 79+ |
| DecompressionStream | 123+ | N/A | 17.2+ | 123+ |
| Web Crypto API | 37+ | 34+ | 11+ | 79+ |
| ReadableStream | 52+ | 65+ | 10.1+ | 79+ |
| Transferable Objects | 18+ | 20+ | 5.1+ | 14+ |

---

## Future Optimizations

- [ ] Implement WASM-based encryption for 3-5× speedup
- [ ] Add adaptive chunking based on network conditions
- [ ] Support WebAssembly decompression (Brotli/Zstd)
- [ ] P2P transfer with WebRTC data channels
- [ ] Multi-part upload with resume capability
