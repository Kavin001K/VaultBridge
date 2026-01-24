import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Supabase Configuration
// Prioritize Service Role Key for backend operations to bypass RLS
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY;
const IS_LOCAL = process.env.STORAGE_PROVIDER === 'local';

if ((!SUPABASE_URL || !SUPABASE_KEY) && !IS_LOCAL) {
    throw new Error("Missing Supabase credentials in environment variables (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)");
}

// Initialize only if credentials exist or we are not in strict cloud mode
// If local and no creds, we create a dummy client or undefined to avoid runtime crash on load, 
// assuming methods won't be called.
export const supabase: SupabaseClient | null = (SUPABASE_URL && SUPABASE_KEY)
    ? createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;

const BUCKET_NAME = "vaults";

export class SupabaseStorageService {
    /**
     * Generate a Signed Upload URL for a chunk.
     * The client will PUT the chunk data directly to Supabase Storage.
     * 
     * @param storagePath - The exact path in the bucket (e.g. "vaultId/fileId/chunkIndex")
     */
    async getUploadUrl(storagePath: string): Promise<string> {
        if (!supabase) throw new Error("Supabase client not initialized (Local Mode active?)");

        // Create a signed URL for uploading (valid for 1 hour)
        const { data, error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .createSignedUploadUrl(storagePath);

        if (error) {
            console.error("Supabase Storage Error:", error);
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
        if (!supabase) throw new Error("Supabase client not initialized (Local Mode active?)");

        // Create a signed URL for downloading (valid for 1 hour)
        const { data, error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .createSignedUrl(storagePath, 3600);

        if (error) {
            console.error("Supabase Download Error:", error);
            throw new Error(`Failed to generate download URL: ${error.message}`);
        }

        return data.signedUrl;
    }

    /**
     * Construct a storage path for a chunk
     */
    getStoragePath(vaultId: string, fileId: string, chunkIndex: number): string {
        return `${vaultId}/${fileId}/${chunkIndex}.enc`;
    }

    /**
     * Delete files from storage
     */
    async deleteFiles(paths: string[]): Promise<void> {
        if (paths.length === 0) return;
        if (!supabase) return; // Silent return for local mode cleanup if erroneously called

        const { error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .remove(paths);

        if (error) {
            console.error("Supabase Delete Error:", error);
            // We don't throw here to avoid blocking the DB cleanup if storage fails (orphan risk > blocking flow)
        } else {
            console.log(`[Storage] Successfully deleted ${paths.length} chunks from bucket.`);
        }
    }
}

export const supabaseStorage = new SupabaseStorageService();
