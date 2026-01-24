import {
    type Vault,
    type FileRecord,
    type ChunkRecord,
    type CreateVaultRequest
} from "@shared/schema";
import { supabase, supabaseStorage } from "./services/supabase_storage";
import { randomUUID } from "crypto";

export interface IStorage {
    createVault(data: CreateVaultRequest): Promise<Vault>;
    getVault(id: string): Promise<Vault | undefined>;
    getVaultByShortCode(code: string): Promise<Vault | undefined>;
    getVaultByLookupId(lookupId: string): Promise<Vault | undefined>;
    createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number): Promise<FileRecord>;
    getFiles(vaultId: string): Promise<FileRecord[]>;
    createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord>;
    updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string): Promise<void>;
    getChunk(fileId: string, chunkIndex: number): Promise<ChunkRecord | undefined>;
    incrementDownloadCount(vaultId: string): Promise<number>;
    cleanupExpiredVaults(): Promise<void>;
    deleteVault(id: string): Promise<void>;
}

// Helper to map snake_case DB result to camelCase Vault object
// Note: We use 'any' for input because standard Supabase types might not match our exact schema structure perfectly in this loosely typed context
function mapVault(row: any): Vault {
    return {
        id: row.id,
        shortCode: row.short_code,
        lookupId: row.lookup_id,
        wrappedKey: row.wrapped_key,
        encryptedMetadata: row.encrypted_metadata,
        createdAt: new Date(row.created_at),
        expiresAt: new Date(row.expires_at),
        maxDownloads: row.max_downloads,
        downloadCount: row.download_count,
        isDeleted: row.is_deleted
    };
}

function mapFile(row: any): FileRecord {
    return {
        id: row.id,
        vaultId: row.vault_id,
        fileId: row.file_id,
        chunkCount: row.chunk_count,
        totalSize: row.total_size
    };
}

function mapChunk(row: any): ChunkRecord {
    return {
        id: row.id,
        fileId: row.file_id,
        chunkIndex: row.chunk_index,
        size: row.size,
        storagePath: row.storage_path,
        isUploaded: row.is_uploaded
    };
}

export class DatabaseStorage implements IStorage {
    async createVault(data: CreateVaultRequest): Promise<Vault> {
        // Generate a unique 6-char short code
        let shortCode = "";
        let isUnique = false;

        // Retry loop for unique code
        while (!isUnique) {
            shortCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            const { data: existing } = await supabase
                .from('vaults')
                .select('id')
                .eq('short_code', shortCode)
                .single();
            if (!existing) isUnique = true;
        }

        const expiresAt = new Date(Date.now() + data.expiresIn * 60 * 60 * 1000);

        const { data: vault, error } = await supabase
            .from('vaults')
            .insert({
                short_code: shortCode,
                lookup_id: data.lookupId,
                wrapped_key: data.wrappedKey,
                encrypted_metadata: data.encryptedMetadata,
                expires_at: expiresAt.toISOString(),
                max_downloads: data.maxDownloads,
            })
            .select()
            .single();

        if (error) {
            console.error("Supabase Create Enc Error:", error);
            throw new Error(error.message);
        }

        const mappedVault = mapVault(vault);

        // Create file records
        for (const f of data.files) {
            await this.createFile(mappedVault.id, f.fileId, f.chunks, f.size);
        }

        return mappedVault;
    }

    async getVault(id: string): Promise<Vault | undefined> {
        const { data, error } = await supabase
            .from('vaults')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !data) return undefined;
        return mapVault(data);
    }

    async getVaultByShortCode(code: string): Promise<Vault | undefined> {
        const { data, error } = await supabase
            .from('vaults')
            .select('*')
            .eq('short_code', code)
            .single();

        if (error || !data) return undefined;
        return mapVault(data);
    }

    async getVaultByLookupId(lookupId: string): Promise<Vault | undefined> {
        const { data, error } = await supabase
            .from('vaults')
            .select('*')
            .eq('lookup_id', lookupId)
            .single();

        if (error || !data) return undefined;
        return mapVault(data);
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number): Promise<FileRecord> {
        const { data, error } = await supabase
            .from('files')
            .insert({
                vault_id: vaultId,
                file_id: fileId,
                chunk_count: chunkCount,
                total_size: totalSize
            })
            .select()
            .single();

        if (error) throw new Error(error.message);
        return mapFile(data);
    }

    async getFiles(vaultId: string): Promise<FileRecord[]> {
        const { data, error } = await supabase
            .from('files')
            .select('*')
            .eq('vault_id', vaultId);

        if (error) return [];
        return data.map(mapFile);
    }

    async createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord> {
        // Find internal ID for fileId (which is external UUID)
        const { data: file } = await supabase.from('files').select('id').eq('file_id', fileId).single();
        if (!file) throw new Error("File not found");

        // Try select first
        const { data: existing } = await supabase.from('chunks')
            .select('*')
            .match({ file_id: file.id, chunk_index: chunkIndex })
            .single();

        if (existing) return mapChunk(existing);

        const { data: chunk, error } = await supabase
            .from('chunks')
            .insert({
                file_id: file.id, // Internal ID reference
                chunk_index: chunkIndex,
                size: size,
                is_uploaded: false
            })
            .select()
            .single();

        if (error) throw new Error(error.message);
        return mapChunk(chunk);
    }

    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string): Promise<void> {
        const { data: file } = await supabase.from('files').select('id').eq('file_id', fileId).single();
        if (!file) throw new Error("File not found");

        await supabase
            .from('chunks')
            .update({ is_uploaded: true, storage_path: storagePath })
            .match({ file_id: file.id, chunk_index: chunkIndex });
    }

    async getChunk(fileId: string, chunkIndex: number): Promise<ChunkRecord | undefined> {
        const { data: file } = await supabase.from('files').select('id').eq('file_id', fileId).single();
        if (!file) return undefined;

        const { data: chunk } = await supabase.from('chunks')
            .select('*')
            .match({ file_id: file.id, chunk_index: chunkIndex })
            .single();

        if (!chunk) return undefined;
        return mapChunk(chunk);
    }

    async incrementDownloadCount(vaultId: string): Promise<number> {
        // RPC approach is cleaner for concurrency, but direct update with read is fallback
        // Supabase-js doesn't support 'increment' naturally without a function.
        // We will read, increment, update. (Potential race condition but acceptable for MVP)

        const { data: vault } = await supabase.from('vaults').select('download_count').eq('id', vaultId).single();
        if (!vault) return 0;

        const newCount = (vault.download_count || 0) + 1;
        const { data: updated } = await supabase
            .from('vaults')
            .update({ download_count: newCount })
            .eq('id', vaultId)
            .select()
            .single();

        return updated ? updated.download_count : newCount;
    }

    async cleanupExpiredVaults(): Promise<void> {
        const now = new Date().toISOString();
        console.log(`[Cleanup] Checking for expired vaults at ${now}...`);

        // 1. Time expired vaults
        const { data: expired } = await supabase
            .from('vaults')
            .select('id, short_code')
            .lt('expires_at', now);

        if (expired && expired.length > 0) {
            console.log(`[Cleanup] Found ${expired.length} time-expired vaults.`);
            for (const v of expired) {
                console.log(`[Cleanup] Expired vault ${v.short_code} (${v.id}). Deleting...`);
                await this.deleteVault(v.id);
            }
        } else {
            console.log("[Cleanup] No expired vaults found.");
        }
    }

    async deleteVault(id: string): Promise<void> {
        // 1. Find all files/chunks to delete from Object Storage
        try {
            const files = await this.getFiles(id);
            const fileIds = files.map(f => f.id);

            if (fileIds.length > 0) {
                const { data: chunks } = await supabase
                    .from('chunks')
                    .select('storage_path')
                    .in('file_id', fileIds);

                const paths = chunks?.map((c: any) => c.storage_path).filter(Boolean) || [];

                if (paths.length > 0) {
                    console.log(`[Storage] Deleting ${paths.length} chunks for vault ${id}...`);
                    await supabaseStorage.deleteFiles(paths);
                }
            }
        } catch (err) {
            console.error(`[Storage] Error cleaning up files for vault ${id}:`, err);
            // Continue to DB delete so we don't get stuck with metadata but no files
        }

        // 2. Delete metadata from DB
        await supabase.from('vaults').delete().eq('id', id);
        console.log(`[Storage] Vault ${id} deleted from DB.`);
    }
}

export const storage = new DatabaseStorage();
