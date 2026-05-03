/**
 * Resumable Uploads System for VaultBridge
 * =========================================
 * 
 * Uses IndexedDB to persist upload state, enabling resume after:
 * - Browser crash or close
 * - Network interruption
 * - Device sleep/hibernate
 * 
 * Architecture:
 * 1. Before upload starts, save file metadata and encryption state
 * 2. After each chunk uploads, update progress in IndexedDB
 * 3. On page load, check for incomplete uploads
 * 4. Resume from last successful chunk
 * 
 * @version 1.0.0
 */

// ============================================================================
// TYPES
// ============================================================================

export interface UploadState {
    /** Unique identifier for this upload session */
    uploadId: string;
    /** Vault ID returned from server after initial creation */
    vaultId: string;
    /** Client-generated file ID */
    fileId: string;
    /** Original file name */
    fileName: string;
    /** Original file size in bytes */
    fileSize: number;
    /** File MIME type */
    fileType: string;
    /** Total number of chunks */
    totalChunks: number;
    /** Indices of successfully uploaded chunks */
    uploadedChunks: number[];
    /** Chunk size used for this upload */
    chunkSize: number;
    /** Exported encryption key (base64) for resuming */
    cryptoKeyExported: string;
    /** Whether compression was applied */
    isCompressed: boolean;
    /** Vault configuration */
    vaultConfig: {
        expiresIn: number;
        maxDownloads: number;
        lookupId?: string;
    };
    /** Upload start timestamp */
    startedAt: number;
    /** Last activity timestamp */
    lastUpdatedAt: number;
    /** Current status */
    status: 'in_progress' | 'paused' | 'completed' | 'failed';
    /** Error message if failed */
    errorMessage?: string;
}

export interface UploadProgress {
    uploadId: string;
    fileName: string;
    progress: number;
    uploadedChunks: number;
    totalChunks: number;
    canResume: boolean;
    startedAt: Date;
    lastUpdatedAt: Date;
}

// ============================================================================
// DATABASE SETUP
// ============================================================================

const DB_NAME = 'vaultbridge-uploads';
const DB_VERSION = 1;
const STORE_NAME = 'upload-state';

let dbInstance: IDBDatabase | null = null;

/**
 * Initialize the IndexedDB database
 */
async function initDB(): Promise<IDBDatabase> {
    if (dbInstance) {
        return dbInstance;
    }

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            console.error('[ResumableUpload] Failed to open IndexedDB:', request.error);
            reject(request.error);
        };

        request.onsuccess = () => {
            dbInstance = request.result;
            console.log('[ResumableUpload] IndexedDB initialized');
            resolve(dbInstance);
        };

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            // Create object store if it doesn't exist
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, { keyPath: 'uploadId' });

                // Create indices for efficient queries
                store.createIndex('status', 'status', { unique: false });
                store.createIndex('startedAt', 'startedAt', { unique: false });
                store.createIndex('vaultId', 'vaultId', { unique: false });

                console.log('[ResumableUpload] Object store created');
            }
        };
    });
}

/**
 * Get the object store for operations
 */
async function getStore(mode: IDBTransactionMode = 'readonly'): Promise<IDBObjectStore> {
    const db = await initDB();
    const transaction = db.transaction(STORE_NAME, mode);
    return transaction.objectStore(STORE_NAME);
}

// ============================================================================
// CORE OPERATIONS
// ============================================================================

/**
 * Create a new upload session
 */
export async function createUploadSession(params: {
    vaultId: string;
    fileId: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    totalChunks: number;
    chunkSize: number;
    cryptoKeyExported: string;
    isCompressed: boolean;
    vaultConfig: UploadState['vaultConfig'];
}): Promise<string> {
    const uploadId = crypto.randomUUID();
    const now = Date.now();

    const state: UploadState = {
        uploadId,
        vaultId: params.vaultId,
        fileId: params.fileId,
        fileName: params.fileName,
        fileSize: params.fileSize,
        fileType: params.fileType,
        totalChunks: params.totalChunks,
        uploadedChunks: [],
        chunkSize: params.chunkSize,
        cryptoKeyExported: params.cryptoKeyExported,
        isCompressed: params.isCompressed,
        vaultConfig: params.vaultConfig,
        startedAt: now,
        lastUpdatedAt: now,
        status: 'in_progress'
    };

    const store = await getStore('readwrite');

    return new Promise((resolve, reject) => {
        const request = store.add(state);
        request.onsuccess = () => resolve(uploadId);
        request.onerror = () => reject(request.error);
    });
}

/**
 * Mark a chunk as successfully uploaded
 */
export async function markChunkUploaded(uploadId: string, chunkIndex: number): Promise<void> {
    const store = await getStore('readwrite');

    return new Promise((resolve, reject) => {
        const getRequest = store.get(uploadId);

        getRequest.onsuccess = () => {
            const state = getRequest.result as UploadState;
            if (!state) {
                reject(new Error('Upload session not found'));
                return;
            }

            // Add chunk to uploaded list if not already there
            if (!state.uploadedChunks.includes(chunkIndex)) {
                state.uploadedChunks.push(chunkIndex);
                state.uploadedChunks.sort((a, b) => a - b);
            }
            state.lastUpdatedAt = Date.now();

            // Check if complete
            if (state.uploadedChunks.length >= state.totalChunks) {
                state.status = 'completed';
            }

            const putRequest = store.put(state);
            putRequest.onsuccess = () => resolve();
            putRequest.onerror = () => reject(putRequest.error);
        };

        getRequest.onerror = () => reject(getRequest.error);
    });
}

/**
 * Get upload session by ID
 */
export async function getUploadSession(uploadId: string): Promise<UploadState | null> {
    const store = await getStore('readonly');

    return new Promise((resolve, reject) => {
        const request = store.get(uploadId);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
    });
}

/**
 * Update upload session status
 */
export async function updateUploadStatus(
    uploadId: string,
    status: UploadState['status'],
    errorMessage?: string
): Promise<void> {
    const store = await getStore('readwrite');

    return new Promise((resolve, reject) => {
        const getRequest = store.get(uploadId);

        getRequest.onsuccess = () => {
            const state = getRequest.result as UploadState;
            if (!state) {
                reject(new Error('Upload session not found'));
                return;
            }

            state.status = status;
            state.lastUpdatedAt = Date.now();
            if (errorMessage) {
                state.errorMessage = errorMessage;
            }

            const putRequest = store.put(state);
            putRequest.onsuccess = () => resolve();
            putRequest.onerror = () => reject(putRequest.error);
        };

        getRequest.onerror = () => reject(getRequest.error);
    });
}

/**
 * Delete upload session (after completion or manual cancel)
 */
export async function deleteUploadSession(uploadId: string): Promise<void> {
    const store = await getStore('readwrite');

    return new Promise((resolve, reject) => {
        const request = store.delete(uploadId);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

/**
 * Get all pending (incomplete) uploads
 */
export async function getPendingUploads(): Promise<UploadProgress[]> {
    const store = await getStore('readonly');

    return new Promise((resolve, reject) => {
        const request = store.getAll();

        request.onsuccess = () => {
            const allStates = request.result as UploadState[];
            const now = Date.now();
            const MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days

            const pending = allStates
                .filter(state => {
                    // Filter out completed, too old, or already expired
                    if (state.status === 'completed') return false;
                    if (now - state.startedAt > MAX_AGE) return false;
                    return true;
                })
                .map(state => ({
                    uploadId: state.uploadId,
                    fileName: state.fileName,
                    progress: Math.round((state.uploadedChunks.length / state.totalChunks) * 100),
                    uploadedChunks: state.uploadedChunks.length,
                    totalChunks: state.totalChunks,
                    canResume: state.status === 'in_progress' || state.status === 'paused',
                    startedAt: new Date(state.startedAt),
                    lastUpdatedAt: new Date(state.lastUpdatedAt)
                }));

            resolve(pending);
        };

        request.onerror = () => reject(request.error);
    });
}

/**
 * Get the next chunk index to upload for a resumable session
 */
export async function getNextChunkToUpload(uploadId: string): Promise<number | null> {
    const state = await getUploadSession(uploadId);
    if (!state) return null;

    // Find first chunk that hasn't been uploaded
    for (let i = 0; i < state.totalChunks; i++) {
        if (!state.uploadedChunks.includes(i)) {
            return i;
        }
    }

    // All chunks uploaded
    return null;
}

/**
 * Clean up old/stale upload sessions
 */
export async function cleanupStaleUploads(): Promise<number> {
    const store = await getStore('readwrite');

    return new Promise((resolve, reject) => {
        const request = store.getAll();

        request.onsuccess = async () => {
            const allStates = request.result as UploadState[];
            const now = Date.now();
            const MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days

            let deletedCount = 0;

            for (const state of allStates) {
                const shouldDelete =
                    state.status === 'completed' ||
                    (now - state.startedAt > MAX_AGE);

                if (shouldDelete) {
                    try {
                        await deleteUploadSession(state.uploadId);
                        deletedCount++;
                    } catch (e) {
                        console.warn('[ResumableUpload] Failed to delete stale session:', state.uploadId);
                    }
                }
            }

            console.log(`[ResumableUpload] Cleaned up ${deletedCount} stale sessions`);
            resolve(deletedCount);
        };

        request.onerror = () => reject(request.error);
    });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize the resumable upload system
 * Should be called on app startup
 */
export async function initResumableUploads(): Promise<{
    pendingCount: number;
    pendingUploads: UploadProgress[];
}> {
    try {
        await initDB();
        await cleanupStaleUploads();
        const pending = await getPendingUploads();

        return {
            pendingCount: pending.length,
            pendingUploads: pending
        };
    } catch (e) {
        console.error('[ResumableUpload] Initialization failed:', e);
        return {
            pendingCount: 0,
            pendingUploads: []
        };
    }
}

// ============================================================================
// HOOKS & UTILITIES
// ============================================================================

/**
 * Check if IndexedDB is available
 */
export function isResumableSupported(): boolean {
    return typeof indexedDB !== 'undefined';
}

/**
 * Format upload progress for display
 */
export function formatUploadProgress(progress: UploadProgress): string {
    const timeAgo = formatTimeAgo(progress.lastUpdatedAt);
    return `${progress.fileName} - ${progress.progress}% (${progress.uploadedChunks}/${progress.totalChunks} chunks) - ${timeAgo}`;
}

/**
 * Format time ago
 */
function formatTimeAgo(date: Date): string {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
}
