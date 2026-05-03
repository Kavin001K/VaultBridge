import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectsCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// ═══════════════════════════════════════════════════════════════════════════════
//  Cloudflare R2 Storage Service — S3-Compatible Object Storage
//
//  Features:
//    • Lazy-init S3 client (only created when credentials exist)
//    • Signed URL generation for direct browser uploads/downloads
//    • Batch delete (up to 1000 objects per request)
//    • Retry logic for transient failures
//    • Credential validation at startup
// ═══════════════════════════════════════════════════════════════════════════════

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || "vaultbridgefiles";

// Signed URL expiry (1 hour for uploads, 2 hours for downloads)
const UPLOAD_URL_EXPIRY = 3600;  // 1 hour
const DOWNLOAD_URL_EXPIRY = 7200; // 2 hours (extra buffer for large files)

// Retry configuration
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 500;

// Lazy-init the S3 client (only created when R2 credentials exist)
let _s3Client: S3Client | null = null;

function getS3Client(): S3Client {
    if (!_s3Client) {
        if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
            throw new Error(
                "Missing Cloudflare R2 credentials. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY in env."
            );
        }
        _s3Client = new S3Client({
            region: "auto",
            endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: R2_ACCESS_KEY_ID,
                secretAccessKey: R2_SECRET_ACCESS_KEY,
            },
            // Optimize for R2
            forcePathStyle: true,
        });
        console.log("[R2 Storage] ✅ Client initialized successfully.");
    }
    return _s3Client;
}

/**
 * Retry helper for transient S3/R2 failures.
 */
async function withRetry<T>(operation: () => Promise<T>, label: string): Promise<T> {
    let lastError: Error | undefined;

    for (let attempt = 1; attempt <= MAX_RETRIES + 1; attempt++) {
        try {
            return await operation();
        } catch (err: any) {
            lastError = err;
            const isTransient = err.name === 'ServiceUnavailable'
                || err.name === 'InternalError'
                || err.name === 'SlowDown'
                || err.code === 'ECONNRESET'
                || err.code === 'ETIMEDOUT';

            if (isTransient && attempt <= MAX_RETRIES) {
                const delay = RETRY_DELAY_MS * attempt;
                console.warn(`[R2 Storage] ${label} — transient error (attempt ${attempt}/${MAX_RETRIES + 1}), retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }
            break;
        }
    }

    throw lastError;
}

export class CloudflareR2StorageService {
    /**
     * Generate a signed upload URL for a chunk.
     * The client PUTs encrypted data directly to R2.
     */
    async getUploadUrl(storagePath: string): Promise<string> {
        return withRetry(async () => {
            const command = new PutObjectCommand({
                Bucket: R2_BUCKET_NAME,
                Key: storagePath,
            });
            return await getSignedUrl(getS3Client(), command, { expiresIn: UPLOAD_URL_EXPIRY });
        }, `getUploadUrl(${storagePath})`);
    }

    /**
     * Generate a signed download URL for a chunk.
     */
    async getDownloadUrl(storagePath: string): Promise<string> {
        return withRetry(async () => {
            const command = new GetObjectCommand({
                Bucket: R2_BUCKET_NAME,
                Key: storagePath,
            });
            return await getSignedUrl(getS3Client(), command, { expiresIn: DOWNLOAD_URL_EXPIRY });
        }, `getDownloadUrl(${storagePath})`);
    }

    /**
     * Construct a storage path for a file (mirrors Supabase format)
     */
    getStoragePath(vaultId: string, fileId: string, chunkIndex: number = 0): string {
        return `${vaultId}/${fileId}/${chunkIndex}.enc`;
    }

    /**
     * Delete files from R2 storage.
     * R2 supports batch delete via the S3 DeleteObjects API (max 1000 per request).
     */
    async deleteFiles(paths: string[]): Promise<void> {
        if (paths.length === 0) return;

        const batchSize = 1000;
        for (let i = 0; i < paths.length; i += batchSize) {
            const batch = paths.slice(i, i + batchSize);
            const batchNum = Math.floor(i / batchSize) + 1;

            try {
                await withRetry(async () => {
                    const command = new DeleteObjectsCommand({
                        Bucket: R2_BUCKET_NAME,
                        Delete: {
                            Objects: batch.map(p => ({ Key: p })),
                            Quiet: true, // Suppress individual success responses
                        },
                    });
                    await getS3Client().send(command);
                }, `deleteFiles(batch ${batchNum})`);

                console.log(`[R2 Storage] 🗑️  Deleted ${batch.length} files (batch ${batchNum}).`);
            } catch (error) {
                console.error(`[R2 Storage] ❌ Delete error (batch ${batchNum}):`, error);
                // Don't throw — allow DB cleanup to continue even if physical delete fails
            }
        }
    }

    /**
     * Check if R2 credentials are configured.
     */
    isConfigured(): boolean {
        return !!(R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY);
    }
}

export const cloudflareStorage = new CloudflareR2StorageService();
