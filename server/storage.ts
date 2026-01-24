import {
    vaults, files, chunks,
    type Vault, type FileRecord, type ChunkRecord, type CreateVaultRequest
} from "@shared/schema";
import { db } from "./db";
import { eq, sql, lt } from "drizzle-orm";
import { localStorage } from "./services/local_storage";
import { supabaseStorage } from "./services/supabase_storage";

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
            await this.createFile(vault.id, f.fileId, f.chunks, f.size);
        }

        return vault;
    }

    async getVault(id: string) {
        // Handle uuid validation or let db throw/return nothing
        try {
            const [vault] = await db.select().from(vaults).where(eq(vaults.id, id));
            return vault;
        } catch (e) {
            return undefined;
        }
    }

    async getVaultByShortCode(code: string) {
        const [vault] = await db.select().from(vaults).where(eq(vaults.shortCode, code));
        return vault;
    }

    async getVaultByLookupId(lookupId: string) {
        const [vault] = await db.select().from(vaults).where(eq(vaults.lookupId, lookupId));
        return vault;
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number) {
        const [file] = await db.insert(files).values({ vaultId, fileId, chunkCount, totalSize }).returning();
        return file;
    }

    async getFiles(vaultId: string) {
        return db.select().from(files).where(eq(files.vaultId, vaultId));
    }

    async createChunk(fileId: string, chunkIndex: number, size: number) {
        // Resolve internal file ID first (Foreign Key Logic)
        // The 'fileId' passed here is likely the Client UUID.
        // The 'chunks' table likely references the internal 'files.id'.
        const [fileRecord] = await db.select().from(files).where(eq(files.fileId, fileId));

        if (!fileRecord) {
            throw new Error(`File record not found for public fileId: ${fileId}`);
        }

        // Idempotent check using the resolved internal ID if necessary, 
        // or simplistic check if using client ID. 
        // Safer: Check if chunk exists using the resolved internal reference if possible, 
        // or just proceed to try insert which might fail uniquely.
        // Actually, we should check `getChunk` first. 
        // CAUTION: getChunk currently uses 'fileId' raw. 
        // If getChunk is broken too, we need to fix it. 
        // Let's assume getChunk works or we fix it later. For now, createChunk is the blocker.

        // We use fileRecord.id for the insert if the FK expects it.
        // BUT wait, Drizzle schema 'fileId' in 'chunks' table... does it map to 'file_id' column?
        // If we change the value we insert to 'fileRecord.id', we satisfy the FK.

        // Check if chunk exists
        const existing = await this.getChunk(fileId, chunkIndex);
        if (existing) return existing;

        // Use the INTERNAL ID for the relation
        // We cast this to any because if the type definition is loose (string), it matches.
        const [chunk] = await db.insert(chunks).values({
            fileId: fileRecord.id as unknown as string, // <--- THE FIX: Use internal ID
            chunkIndex,
            size,
            isUploaded: false
        }).returning();
        return chunk;
    }

    async getChunk(fileId: string, chunkIndex: number) {
        // To be safe, we should probably lookup the file first here too, 
        // or assume the query uses the raw column which might match internal ID?
        // If we stored Internal ID in createChunk, we must query by Internal ID here.
        // So we translate Client ID -> Internal ID.
        const [fileRecord] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!fileRecord) return undefined;

        const [chunk] = await db.select().from(chunks)
            .where(sql`${chunks.fileId} = ${fileRecord.id} AND ${chunks.chunkIndex} = ${chunkIndex}`);
        return chunk;
    }

    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string) {
        const [fileRecord] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!fileRecord) return;

        await db.update(chunks)
            .set({ isUploaded: true, storagePath })
            .where(sql`${chunks.fileId} = ${fileRecord.id} AND ${chunks.chunkIndex} = ${chunkIndex}`);
    }

    async incrementDownloadCount(vaultId: string) {
        const [updated] = await db.update(vaults)
            .set({ downloadCount: sql`${vaults.downloadCount} + 1` })
            .where(eq(vaults.id, vaultId))
            .returning();
        return updated?.downloadCount || 0;
    }

    async deleteVault(id: string) {
        await db.delete(vaults).where(eq(vaults.id, id));
    }

    async cleanupExpiredVaults() {
        const now = new Date();
        await db.delete(vaults).where(lt(vaults.expiresAt, now));
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

export const storage = new DatabaseStorage();
