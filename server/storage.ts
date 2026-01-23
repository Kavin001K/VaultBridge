import {
    vaults,
    files,
    chunks,
    type Vault,
    type FileRecord,
    type ChunkRecord,
    type CreateVaultRequest
} from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";
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
    incrementDownloadCount(vaultId: string): Promise<void>;
    cleanupExpiredVaults(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
    async createVault(data: CreateVaultRequest): Promise<Vault> {
        // Generate a unique 6-char short code
        let shortCode = "";
        let isUnique = false;
        while (!isUnique) {
            shortCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            const existing = await this.getVaultByShortCode(shortCode);
            if (!existing) isUnique = true;
        }

        const expiresAt = new Date(Date.now() + data.expiresIn * 60 * 60 * 1000);

        const [vault] = await db.insert(vaults).values({
            shortCode,
            lookupId: data.lookupId,   // Store the 3-digit lookup ID
            wrappedKey: data.wrappedKey, // Store the PIN-encrypted key
            encryptedMetadata: data.encryptedMetadata,
            expiresAt,
            maxDownloads: data.maxDownloads,
        }).returning();

        // Create file records
        for (const f of data.files) {
            await db.insert(files).values({
                vaultId: vault.id,
                fileId: f.fileId,
                chunkCount: f.chunks,
                totalSize: f.size,
            });
            // Note: Chunk records are created on-demand via createChunk
        }

        return vault;
    }

    async getVault(id: string): Promise<Vault | undefined> {
        const [vault] = await db.select().from(vaults).where(eq(vaults.id, id));
        return vault;
    }

    async getVaultByShortCode(code: string): Promise<Vault | undefined> {
        const [vault] = await db.select().from(vaults).where(eq(vaults.shortCode, code));
        return vault;
    }

    async getVaultByLookupId(lookupId: string): Promise<Vault | undefined> {
        const [vault] = await db.select().from(vaults).where(eq(vaults.lookupId, lookupId));
        return vault;
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number): Promise<FileRecord> {
        const [file] = await db.insert(files).values({
            vaultId,
            fileId,
            chunkCount,
            totalSize
        }).returning();
        return file;
    }

    async getFiles(vaultId: string): Promise<FileRecord[]> {
        return db.select().from(files).where(eq(files.vaultId, vaultId));
    }

    async createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord> {
        // Upsert chunk (in case of retry)
        const existing = await this.getChunk(fileId, chunkIndex);
        if (existing) return existing;

        const [chunk] = await db.insert(chunks).values({
            fileId,
            chunkIndex,
            size,
            isUploaded: false,
        }).returning();
        return chunk;
    }

    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string): Promise<void> {
        // First find the chunk
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!file) throw new Error("File not found");

        await db.update(chunks)
            .set({ isUploaded: true, storagePath })
            .where(sql`${chunks.fileId} = ${file.id} AND ${chunks.chunkIndex} = ${chunkIndex}`);
    }

    async getChunk(fileId: string, chunkIndex: number): Promise<ChunkRecord | undefined> {
        // Join to get internal file ID
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!file) return undefined;

        const [chunk] = await db.select().from(chunks)
            .where(sql`${chunks.fileId} = ${file.id} AND ${chunks.chunkIndex} = ${chunkIndex}`);
        return chunk;
    }

    async incrementDownloadCount(vaultId: string): Promise<void> {
        await db.update(vaults)
            .set({ downloadCount: sql`${vaults.downloadCount} + 1` })
            .where(eq(vaults.id, vaultId));
    }

    async cleanupExpiredVaults(): Promise<void> {
        await db.update(vaults)
            .set({ isDeleted: true })
            .where(sql`${vaults.expiresAt} < NOW() OR ${vaults.downloadCount} >= ${vaults.maxDownloads}`);
    }
}

export const storage = new DatabaseStorage();
