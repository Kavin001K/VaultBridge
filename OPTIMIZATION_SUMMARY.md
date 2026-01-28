# Optimization & Stability Update

## Completed Features
1.  **Adaptive Chunking**:
    *   `UploadPage` now calculates optimal chunk sizes based on network conditions using `getOptimalChunkConfig`.
    *   Small files (<50MB) are uploaded as single chunks for speed.
    *   Large files are chunked dynamically.

2.  **Resumable Uploads**:
    *   Upload state is persisted in IndexedDB.
    *   Users can resume interrupted uploads (currently requires re-selecting files due to browser security).
    *   UI added for managing pending uploads.

3.  **Streamed Downloads (Large File Support)**:
    *   `DownloadPage` detects large files (>10MB).
    *   Uses Service Worker (`sw.js`) to fetch encrypted chunks, decrypt them on-the-fly, and stream the result to the user.
    *   Prevents browser memory crashes for files >1GB.
    *   Fallback to in-memory reassembly for smaller files or when SW is unavailable.

4.  **Compression Support**:
    *   `encryption.worker.ts` now supports `compress_and_encrypt` using GZIP (via `fflate`).
    *   `sw.js` sets `Content-Encoding: gzip` for compressed files, allowing automatic browser decompression during streaming.
    *   Memory download fallback handles decompression explicitly.

5.  **Code Quality**:
    *   Resolved all TypeScript lint errors.
    *   Improved type definitions for `NetworkInformation`, `WorkerMessage`, and `VaultMetadata`.
    *   Fixed potential null-reference bugs in Service Worker communication.

## Next Steps
1.  **Folder Uploads**: Integrate `folder-uploader.tsx` component into `UploadPage`.
2.  **Download All**: Implement client-side ZIP generation for downloading multiple files at once.
3.  **Burn-on-Read Visuals**: Enhance the "self-destruct" animation.
