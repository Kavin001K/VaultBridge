/**
 * Streamed Download Utility for VaultBridge
 * ==========================================
 * 
 * Coordinates between main thread and Service Worker for
 * memory-efficient large file downloads via streaming decryption.
 * 
 * Features:
 * - Service Worker registration and health checks
 * - Download progress tracking
 * - Fallback to in-memory download if SW unavailable
 * - Proper key export for SW communication
 * 
 * @version 2.0.0
 */

import { exportKey } from './crypto';

// ============================================================================
// TYPES
// ============================================================================

export interface ChunkInfo {
    /** Signed URL for downloading this chunk */
    downloadUrl: string;
    /** Chunk index (0-based) */
    index: number;
}

export interface FileMetadata {
    /** File name for download */
    name: string;
    /** File size in bytes */
    size: number;
    /** MIME type */
    type: string;
    /** Client file ID */
    fileId: string;
    /** Whether file is compressed */
    isCompressed?: boolean;
}

export interface DownloadProgress {
    /** File ID */
    fileId: string;
    /** Progress percentage (0-100) */
    progress: number;
    /** Number of chunks processed */
    processedChunks: number;
    /** Total number of chunks */
    totalChunks: number;
    /** File name */
    fileName?: string;
}

export interface StreamDownloadResult {
    /** Whether download was initiated successfully */
    success: boolean;
    /** Method used (streamed or memory) */
    method: 'streamed' | 'memory' | 'failed';
    /** Error message if failed */
    error?: string;
}

// ============================================================================
// SERVICE WORKER MANAGEMENT
// ============================================================================

/**
 * Check if Service Worker is available and active
 */
export function isServiceWorkerAvailable(): boolean {
    return 'serviceWorker' in navigator &&
        navigator.serviceWorker.controller !== null;
}

/**
 * Register the VaultBridge Service Worker
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
    if (!('serviceWorker' in navigator)) {
        console.warn('[StreamDownload] Service Workers not supported');
        return null;
    }

    try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        });

        console.log('[StreamDownload] Service Worker registered:', registration.scope);

        // Wait for the Service Worker to be ready
        await navigator.serviceWorker.ready;

        return registration;
    } catch (error) {
        console.error('[StreamDownload] Service Worker registration failed:', error);
        return null;
    }
}

/**
 * Check Service Worker health with ping/pong
 */
export async function checkServiceWorkerHealth(): Promise<boolean> {
    if (!navigator.serviceWorker.controller) {
        return false;
    }

    return new Promise((resolve) => {
        const timeout = setTimeout(() => resolve(false), 2000);

        const handler = (event: MessageEvent) => {
            if (event.data?.type === 'PONG') {
                clearTimeout(timeout);
                navigator.serviceWorker.removeEventListener('message', handler);
                resolve(true);
            }
        };

        navigator.serviceWorker.addEventListener('message', handler);
        navigator.serviceWorker.controller!.postMessage({ type: 'PING' });
    });
}

// ============================================================================
// STREAM DOWNLOAD
// ============================================================================

/**
 * Initiate a streamed download via Service Worker
 * 
 * @param fileId - Unique file identifier
 * @param key - CryptoKey for decryption
 * @param chunks - Array of chunk information
 * @param metadata - File metadata
 * @param onProgress - Optional progress callback
 * @returns Promise<StreamDownloadResult>
 */
export async function initiateStreamDownload(
    fileId: string,
    key: CryptoKey,
    chunks: ChunkInfo[],
    metadata: FileMetadata,
    onProgress?: (progress: DownloadProgress) => void
): Promise<StreamDownloadResult> {
    // Check SW availability
    if (!isServiceWorkerAvailable()) {
        console.warn('[StreamDownload] Service Worker not available, cannot stream');
        return {
            success: false,
            method: 'failed',
            error: 'Service Worker not available'
        };
    }

    try {
        // Export the key to base64 for SW (CryptoKey can be cloned but base64 is safer)
        const keyBase64 = await exportKey(key);

        // Set up progress listener before registering download
        const progressHandler = (event: MessageEvent) => {
            const data = event.data;

            if (data?.fileId === fileId) {
                switch (data.type) {
                    case 'DOWNLOAD_PROGRESS':
                        onProgress?.({
                            fileId: data.fileId,
                            progress: data.progress,
                            processedChunks: data.processedChunks,
                            totalChunks: data.totalChunks,
                            fileName: data.fileName
                        });
                        break;

                    case 'DOWNLOAD_COMPLETE':
                        console.log(`[StreamDownload] Download complete: ${data.fileName}`);
                        navigator.serviceWorker.removeEventListener('message', progressHandler);
                        break;

                    case 'DOWNLOAD_ERROR':
                        console.error(`[StreamDownload] Download error: ${data.error}`);
                        navigator.serviceWorker.removeEventListener('message', progressHandler);
                        break;
                }
            }
        };

        navigator.serviceWorker.addEventListener('message', progressHandler);

        // Register download with Service Worker
        navigator.serviceWorker.controller!.postMessage({
            type: 'REGISTER_DOWNLOAD',
            fileId,
            keyBase64,
            chunks: chunks.map(c => ({
                downloadUrl: c.downloadUrl,
                index: c.index
            })),
            metadata: {
                name: metadata.name,
                size: metadata.size,
                type: metadata.type,
                fileId: metadata.fileId
            },
            isCompressed: metadata.isCompressed || false
        });

        // Wait for registration confirmation
        await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Download registration timeout'));
            }, 5000);

            const confirmHandler = (event: MessageEvent) => {
                if (event.data?.type === 'DOWNLOAD_REGISTERED' && event.data.fileId === fileId) {
                    clearTimeout(timeout);
                    navigator.serviceWorker.removeEventListener('message', confirmHandler);
                    resolve();
                }
            };

            navigator.serviceWorker.addEventListener('message', confirmHandler);
        });

        // Small delay to ensure SW is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        // Trigger download by navigating to the stream URL
        // Use an invisible iframe to avoid leaving the page
        const iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:absolute;width:0;height:0;border:none;visibility:hidden;';
        iframe.src = `/stream-download/${fileId}`;
        document.body.appendChild(iframe);

        // Set up completion/error handling
        const downloadComplete = new Promise<void>((resolve, reject) => {
            const handler = (event: MessageEvent) => {
                if (event.data?.fileId !== fileId) return;

                if (event.data.type === 'DOWNLOAD_COMPLETE') {
                    navigator.serviceWorker.removeEventListener('message', handler);
                    resolve();
                } else if (event.data.type === 'DOWNLOAD_ERROR') {
                    navigator.serviceWorker.removeEventListener('message', handler);
                    reject(new Error(event.data.error));
                }
            };

            navigator.serviceWorker.addEventListener('message', handler);

            // Timeout for very large files (2 hours max)
            setTimeout(() => {
                navigator.serviceWorker.removeEventListener('message', handler);
                resolve(); // Don't reject on timeout, download might still be working
            }, 2 * 60 * 60 * 1000);
        });

        // Wait for completion
        await downloadComplete;

        // Cleanup iframe
        if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
        }

        return {
            success: true,
            method: 'streamed'
        };

    } catch (error) {
        console.error('[StreamDownload] Stream download failed:', error);
        return {
            success: false,
            method: 'failed',
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Cancel an ongoing stream download
 */
export function cancelStreamDownload(fileId: string): void {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'CANCEL_DOWNLOAD',
            fileId
        });
    }
}

// ============================================================================
// THRESHOLD HELPERS
// ============================================================================

/**
 * Minimum file size to use streamed download (10MB)
 * Below this, in-memory download is more efficient
 */
export const STREAM_DOWNLOAD_THRESHOLD = 10 * 1024 * 1024;

/**
 * Check if a file should use streamed download
 */
export function shouldUseStreamedDownload(fileSize: number): boolean {
    if (!isServiceWorkerAvailable()) {
        return false;
    }

    return fileSize > STREAM_DOWNLOAD_THRESHOLD;
}

/**
 * Get download method recommendation
 */
export function getDownloadRecommendation(fileSize: number): {
    method: 'streamed' | 'memory';
    reason: string;
} {
    if (!isServiceWorkerAvailable()) {
        return {
            method: 'memory',
            reason: 'Service Worker not available'
        };
    }

    if (fileSize <= STREAM_DOWNLOAD_THRESHOLD) {
        return {
            method: 'memory',
            reason: 'Small file, in-memory download is faster'
        };
    }

    return {
        method: 'streamed',
        reason: 'Large file, streaming prevents memory issues'
    };
}
