import {
    vaults, files, chunks,
    type Vault, type FileRecord, type ChunkRecord, type CreateVaultRequest
} from "@shared/schema";
import { db } from "./db";
import { eq, sql, lt } from "drizzle-orm";
import { localStorage } from "./services/local_storage";
import { supabaseStorage } from "./services/supabase_storage";
import path from "path";

// THE SWITCH: Checks .env to decide storage mode
const USE_LOCAL_STORAGE = process.env.STORAGE_PROVIDER === 'local';

export class DatabaseStorage {
    // --- DATABASE OPERATIONS (Using Drizzle - Works for both Local & Cloud) ---

    async createVault(data: CreateVaultRequest): Promise<Vault> {
        let shortCode = "", isUnique = false;
        // Retry loop for unique code
        while (!isUnique) {
            shortCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            const existing = await this.getVaultByShortCode(shortCode);
            if (!existing) isUnique = true;
        }

        const expiresAt = new Date(Date.now() + data.expiresIn * 60 * 60 * 1000);

        const [vault] = await db.insert(vaults).values({
            shortCode,
            lookupId: data.lookupId,
            wrappedKey: data.wrappedKey,
            encryptedMetadata: data.encryptedMetadata,
            expiresAt,
            maxDownloads: data.maxDownloads,
            downloadCount: 0,
            isDeleted: false
        }).returning();

        // Create file records
        for (const f of data.files) {
            await this.createFile(vault.id, f.fileId, f.chunks, f.size, f.isCompressed, f.originalSize);
        }

        return vault;
    }

    async getVault(id: string) {
        const [vault] = await db.select().from(vaults).where(eq(vaults.id, id));
        return vault;
    }

    async getVaultByShortCode(code: string) {
        const [vault] = await db.select().from(vaults).where(eq(vaults.shortCode, code));
        return vault;
    }

    async getVaultByLookupId(lookupId: string) {
        const [vault] = await db.select().from(vaults).where(eq(vaults.lookupId, lookupId));
        return vault;
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number, isCompressed = false, originalSize?: number) {
        const [file] = await db.insert(files).values({
            vaultId,
            fileId,
            chunkCount,
            totalSize,
            isCompressed,
            originalSize
        }).returning();
        return file;
    }

    async getFiles(vaultId: string) {
        return db.select().from(files).where(eq(files.vaultId, vaultId));
    }

    async createChunk(fileId: string, chunkIndex: number, size: number) {
        // Resolve internal file ID
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!file) {
            throw new Error(`File not found for ID: ${fileId}`);
        }

        // Idempotent check using internal ID
        const [existing] = await db.select().from(chunks).where(
            sql`${chunks.fileId} = ${file.id} AND ${chunks.chunkIndex} = ${chunkIndex}`
        );
        if (existing) return existing;

        const [chunk] = await db.insert(chunks).values({
            fileId: file.id,
            chunkIndex,
            size,
            isUploaded: false
        }).returning();
        return chunk;
    }

    async getChunk(fileId: string, chunkIndex: number) {
        // Find the chunk by matching fileId (client ID) and index
        // Join with files table to resolve fileId
        const [chunk] = await db.select({
            id: chunks.id,
            fileId: chunks.fileId,
            chunkIndex: chunks.chunkIndex,
            storagePath: chunks.storagePath,
            size: chunks.size,
            isUploaded: chunks.isUploaded
        })
            .from(chunks)
            .innerJoin(files, eq(chunks.fileId, files.id))
            .where(sql`${files.fileId} = ${fileId} AND ${chunks.chunkIndex} = ${chunkIndex}`);
        return chunk;
    }

    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string) {
        // Resolve internal file ID
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!file) {
            console.error(`File not found for ID during update: ${fileId}`);
            return;
        }

        await db.update(chunks)
            .set({ isUploaded: true, storagePath })
            .where(sql`${chunks.fileId} = ${file.id} AND ${chunks.chunkIndex} = ${chunkIndex}`);
    }

    async incrementDownloadCount(vaultId: string) {
        const [updated] = await db.update(vaults)
            .set({ downloadCount: sql`${vaults.downloadCount} + 1` })
            .where(eq(vaults.id, vaultId))
            .returning();
        return updated?.downloadCount || 0;
    }



    async deleteVault(id: string) {
        // 1. Gather all file paths for this vault
        try {
            const vaultFiles = await db.select({ id: files.id }).from(files).where(eq(files.vaultId, id));

            for (const file of vaultFiles) {
                const fileChunks = await db.select({ storagePath: chunks.storagePath })
                    .from(chunks)
                    .where(eq(chunks.fileId, file.id));

                const validPaths = fileChunks
                    .map(c => c.storagePath)
                    .filter(p => p !== null && p !== undefined) as string[];

                if (validPaths.length > 0) {
                    if (USE_LOCAL_STORAGE) {
                        // Local: Delete one by one
                        for (const p of validPaths) {
                            // DB stores absolute path for local.
                            // localStorage.deleteFile expects relative filename (it joins UPLOAD_DIR).
                            const filename = path.basename(p);
                            await localStorage.deleteFile(filename);
                        }
                    } else {
                        // Supabase: Batch delete
                        await supabaseStorage.deleteFiles(validPaths);
                    }
                }
            }
        } catch (err) {
            console.error(`[Cleanup Error] Failed to delete physical files for vault ${id}:`, err);
            // Continue to delete DB record anyway to prevent loop
        }

        // 2. Delete DB Record (Cascades to files/chunks)
        await db.delete(vaults).where(eq(vaults.id, id));
        console.log(`[Storage] Deleted vault ${id} and resources.`);
    }

    async cleanupExpiredVaults() {
        const now = new Date();
        const expiredVaults = await db.select({ id: vaults.id })
            .from(vaults)
            .where(lt(vaults.expiresAt, now));

        if (expiredVaults.length > 0) {
            console.log(`[Cleanup] Found ${expiredVaults.length} expired vaults. Purging...`);
            for (const vault of expiredVaults) {
                await this.deleteVault(vault.id);
            }
        }
    }

    // --- FILE STORAGE SWITCHER ---
    // Routes to either Local Disk or Supabase S3 based on env var

    async getUploadUrl(path: string) {
        // If Local, we don't need a signed URL, just the API path
        if (USE_LOCAL_STORAGE) return `/api/local/upload?path=${encodeURIComponent(path)}`;
        return supabaseStorage.getUploadUrl(path);
    }

    async getDownloadUrl(path: string) {
        if (USE_LOCAL_STORAGE) return `/api/local/download?path=${encodeURIComponent(path)}`;
        return supabaseStorage.getDownloadUrl(path);
    }
}

import { MemoryStorage } from "./memory_storage";

// --- PROXY STORAGE (Auto-Switching) ---

class FallbackStorage {
    private primary: DatabaseStorage;
    private memory: MemoryStorage;
    private usingMemory: boolean = false;

    constructor() {
        this.primary = new DatabaseStorage();
        this.memory = new MemoryStorage();
    }

    private async execute<T>(operation: (s: any) => Promise<T>): Promise<T> {
        if (this.usingMemory) {
            return operation(this.memory);
        }

        try {
            return await operation(this.primary);
        } catch (err: any) {
            // Detect Connection Refused or other fatal DB errors
            if (err.code === 'ECONNREFUSED' || err.code === '57P03' || err.message?.includes('connect')) {
                console.error("===============================================================");
                console.error("❌ DATABASE UNAVAILABLE - SWITCHING TO MEMORY STORAGE");
                console.error("   Reason:", err.message);
                console.error("   Note: Data will be lost when server restarts.");
                console.error("===============================================================");
                this.usingMemory = true;
                return operation(this.memory);
            }
            throw err;
        }
    }

    async createVault(data: CreateVaultRequest) { return this.execute(s => s.createVault(data)); }
    async getVault(id: string) { return this.execute(s => s.getVault(id)); }
    async getVaultByShortCode(code: string) { return this.execute(s => s.getVaultByShortCode(code)); }
    async getVaultByLookupId(lookupId: string) { return this.execute(s => s.getVaultByLookupId(lookupId)); }
    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number) { return this.execute(s => s.createFile(vaultId, fileId, chunkCount, totalSize)); }
    async getFiles(vaultId: string) { return this.execute(s => s.getFiles(vaultId)); }
    async createChunk(fileId: string, chunkIndex: number, size: number) { return this.execute(s => s.createChunk(fileId, chunkIndex, size)); }
    async getChunk(fileId: string, chunkIndex: number) { return this.execute(s => s.getChunk(fileId, chunkIndex)); }
    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string) { return this.execute(s => s.updateChunkStatus(fileId, chunkIndex, storagePath)); }
    async incrementDownloadCount(vaultId: string) { return this.execute(s => s.incrementDownloadCount(vaultId)); }
    async deleteVault(id: string) { return this.execute(s => s.deleteVault(id)); }
    async cleanupExpiredVaults() { return this.execute(s => s.cleanupExpiredVaults()); }

    // These methods don't use DB, but are part of the interface. 
    // They are stateless in DatabaseStorage, but we can just use the primary one or delegate.
    async getUploadUrl(path: string) { return this.primary.getUploadUrl(path); }
    async getDownloadUrl(path: string) { return this.primary.getDownloadUrl(path); }
}

export const storage = new FallbackStorage();
