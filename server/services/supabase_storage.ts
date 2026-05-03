import { createClient } from "@supabase/supabase-js";
import { logger } from "../logger";

// Supabase Configuration
// Prioritize Service Role Key for backend operations to bypass RLS
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Missing Supabase credentials in environment variables (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const BUCKET_NAME = "vaults";

export class SupabaseStorageService {
    /**
     * Generate a Signed Upload URL for a chunk.
     * The client will PUT the chunk data directly to Supabase Storage.
     * 
     * @param storagePath - The exact path in the bucket (e.g. "vaultId/fileId/chunkIndex")
     */
    async getUploadUrl(storagePath: string): Promise<string> {
        // Create a signed URL for uploading (valid for 1 hour)
        const { data, error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .createSignedUploadUrl(storagePath);

        if (error) {
            logger.error({ err: error }, "Supabase Storage Error");
            throw new Error(`Failed to generate upload URL: ${error.message}`);
        }

        return data.signedUrl;
    }

    /**
     * Generate a Signed Download URL for a chunk.
     * 
     * @param storagePath - The exact path in the bucket
     */
    async getDownloadUrl(storagePath: string): Promise<string> {
        // Create a signed URL for downloading (valid for 1 hour)
        const { data, error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .createSignedUrl(storagePath, 3600);

        if (error) {
            logger.error({ err: error }, "Supabase Download Error");
            throw new Error(`Failed to generate download URL: ${error.message}`);
        }

        return data.signedUrl;
    }

    /**
     * Construct a storage path for a file (single encrypted blob)
     * Uses chunkIndex 0 for all files (no chunking)
     */
    getStoragePath(vaultId: string, fileId: string, chunkIndex: number = 0): string {
        return `${vaultId}/${fileId}/${chunkIndex}.enc`;
    }

    /**
     * Delete files from storage
     */
    async deleteFiles(paths: string[]): Promise<void> {
        if (paths.length === 0) return;

        const { error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .remove(paths);

        if (error) {
            logger.error({ err: error }, "Supabase Delete Error");
            // We don't throw here to avoid blocking the DB cleanup if storage fails (orphan risk > blocking flow)
        } else {
            logger.info({ count: paths.length }, "[Storage] Successfully deleted chunks from bucket.");
        }
    }
}

export const supabaseStorage = new SupabaseStorageService();
