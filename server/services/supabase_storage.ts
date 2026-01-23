import { createClient } from "@supabase/supabase-js";

// Supabase Configuration
// In production, move these to process.env.SUPABASE_URL and process.env.SUPABASE_KEY
const SUPABASE_URL = "https://kigljmhbgzbbhrtgtxmk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZ2xqbWhiZ3piYmhydGd0eG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxOTAxNzAsImV4cCI6MjA4NDc2NjE3MH0.12vTRdR8k_s0C5HuvpU8H-Jvd0U5g2lyaAa1qCgMYpQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
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
}

export const supabaseStorage = new SupabaseStorageService();
