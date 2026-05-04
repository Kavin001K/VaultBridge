import {
    vaults, files, chunks, globalStats, emailUsage,
    type Vault, type FileRecord, type ChunkRecord, type CreateVaultRequest, type GlobalStats
} from "@shared/schema";
import { db } from "./db";
import { eq, sql, lt, and, or } from "drizzle-orm";
import crypto from "crypto";


// Smart Storage Router — manages R2 / Supabase / Local
import {
    resolveUploadProvider,
    buildPrefixedPath,
    getUploadUrl as routerGetUploadUrl,
    getDownloadUrl as routerGetDownloadUrl,
    deleteFiles as routerDeleteFiles,
    parseStoragePath,
    trackUpload,
    trackDeletion,
    reconcileUsage,
    getStorageStatus,
    type StorageProvider,
} from "./services/storage_router";

// ═══════════════════════════════════════════════════════════════════════════════
//  STORAGE INTERFACE — imported from separate file to avoid circular dependency
// ═══════════════════════════════════════════════════════════════════════════════

import type { IStorage } from "./storage_interface";
export type { IStorage };

// ═══════════════════════════════════════════════════════════════════════════════
//  DATABASE STORAGE — Production storage backed by Drizzle/PostgreSQL
// ═══════════════════════════════════════════════════════════════════════════════

export class DatabaseStorage implements IStorage {
    private async updateStats(deltas: { vaults?: number, bytes?: number, downloads?: number, active?: number, burned?: boolean }) {
        try {
            // Use an UPSERT-like pattern to ensure row 1 exists
            const [stats] = await db.select().from(globalStats).where(eq(globalStats.id, 1));
            if (!stats) {
                await db.insert(globalStats).values({
                    id: 1,
                    totalVaultsCreated: Math.max(0, deltas.vaults || 0),
                    totalBytesUploaded: Math.max(0, deltas.bytes || 0).toString(),
                    totalDownloads: Math.max(0, deltas.downloads || 0),
                    activeVaultsCount: Math.max(0, deltas.active || 0),
                    lastBurnedAt: deltas.burned ? new Date() : null,
                });
                return;
            }

            const currentBytes = BigInt(stats.totalBytesUploaded || "0");
            const newBytes = (currentBytes + BigInt(deltas.bytes || 0)).toString();
            
            await db.update(globalStats)
                .set({
                    totalVaultsCreated: sql`${globalStats.totalVaultsCreated} + ${deltas.vaults || 0}`,
                    totalBytesUploaded: newBytes,
                    totalDownloads: sql`${globalStats.totalDownloads} + ${deltas.downloads || 0}`,
                    activeVaultsCount: sql`${globalStats.activeVaultsCount} + ${deltas.active || 0}`,
                    lastBurnedAt: deltas.burned ? new Date() : stats.lastBurnedAt,
                    updatedAt: new Date(),
                })
                .where(eq(globalStats.id, 1));
        } catch (err) {
            console.error("[Stats] Failed to update global stats:", err);
        }
    }

    async getGlobalStats(): Promise<GlobalStats> {
        const [stats] = await db.select().from(globalStats).where(eq(globalStats.id, 1));
        if (!stats) {
            const [newStats] = await db.insert(globalStats).values({ id: 1 }).returning();
            return newStats;
        }
        return stats;
    }

    async createVault(data: CreateVaultRequest): Promise<Vault> {
        let shortCode = "", isUnique = false;
        while (!isUnique) {
            shortCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            const existing = await this.getVaultByShortCode(shortCode);
            if (!existing) isUnique = true;
        }

        const expiresAt = new Date(Date.now() + data.expiresIn * 60 * 60 * 1000);
        const pinSalt = data.pinSalt || crypto.randomBytes(16).toString("base64");

        let vault: Vault;
        try {
            [vault] = await db.insert(vaults).values({
                shortCode,
                lookupId: data.lookupId,
                wrappedKey: data.wrappedKey,
                encryptedMetadata: data.encryptedMetadata,
                encryptedClipboardText: data.encryptedClipboardText,
                expiresAt,
                maxDownloads: data.maxDownloads,
                downloadCount: 0,
                isDeleted: false,
                pinSalt
            }).returning();
        } catch (error: any) {
            const isLookupConflict =
                error?.code === "23505" &&
                (String(error?.constraint || "").includes("lookup_id") ||
                    String(error?.message || "").includes("lookup_id"));

            if (isLookupConflict) {
                const conflictError = new Error("Lookup ID collision. Retrying with a new access code is required.") as Error & {
                    status?: number;
                    code?: string;
                };
                conflictError.status = 409;
                conflictError.code = "LOOKUP_ID_CONFLICT";
                throw conflictError;
            }

            throw error;
        }

        for (const f of data.files) {
            const fileMaxDownloads = f.maxDownloads ?? data.maxDownloads;
            await this.createFile(vault.id, f.fileId, f.chunks, f.size, f.isCompressed, f.originalSize, fileMaxDownloads);
        }

        // Update Global Stats
        const totalSize = data.files.reduce((sum, f) => sum + f.size, 0);
        await this.updateStats({ vaults: 1, active: 1, bytes: totalSize });

        return vault;
    }

    async getVault(id: string): Promise<Vault | undefined> {
        const [vault] = await db.select().from(vaults).where(and(eq(vaults.id, id), eq(vaults.isDeleted, false)));
        return vault;
    }
    
    async updateVault(id: string, updates: Partial<Vault>): Promise<void> {
        await db.update(vaults).set({ ...updates, updatedAt: new Date() }).where(eq(vaults.id, id));
    }

    async getVaultByShortCode(code: string): Promise<Vault | undefined> {
        const [vault] = await db.select().from(vaults).where(and(eq(vaults.shortCode, code), eq(vaults.isDeleted, false))).limit(1);
        return vault;
    }

    async getVaultByLookupId(lookupId: string): Promise<Vault | undefined> {
        const [vault] = await db.select().from(vaults).where(and(eq(vaults.lookupId, lookupId), eq(vaults.isDeleted, false))).limit(1);
        return vault;
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number, isCompressed = false, originalSize?: number, maxDownloads = 1): Promise<FileRecord> {
        const [file] = await db.insert(files).values({
            vaultId,
            fileId,
            chunkCount,
            totalSize,
            isCompressed,
            originalSize,
            maxDownloads,
            downloadCount: 0
        }).returning();
        return file;
    }

    async getFiles(vaultId: string): Promise<FileRecord[]> {
        return db.select().from(files).where(eq(files.vaultId, vaultId));
    }

    async getFileByFileId(fileId: string): Promise<FileRecord | undefined> {
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        return file;
    }

    async createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord> {
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!file) {
            throw new Error(`File not found for ID: ${fileId}`);
        }

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

    async getChunk(fileId: string, chunkIndex: number): Promise<ChunkRecord | undefined> {
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

    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string): Promise<void> {
        const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        if (!file) {
            console.error(`File not found for ID during update: ${fileId}`);
            return;
        }

        await db.update(chunks)
            .set({ isUploaded: true, storagePath })
            .where(sql`${chunks.fileId} = ${file.id} AND ${chunks.chunkIndex} = ${chunkIndex}`);
    }

    async incrementDownloadCount(vaultId: string): Promise<number> {
        const [updated] = await db.update(vaults)
            .set({ downloadCount: sql`${vaults.downloadCount} + 1` })
            .where(eq(vaults.id, vaultId))
            .returning();
        
        if (updated) {
            await this.updateStats({ downloads: 1 });
        }
        return updated?.downloadCount || 0;
    }

    async incrementFileDownloadCount(fileIds: string[]): Promise<{
        fileId: string;
        downloadCount: number;
        maxDownloads: number;
        remainingDownloads: number;
        isExhausted: boolean;
    }[]> {
        const results = [];

        for (const fileId of fileIds) {
            const [updated] = await db.update(files)
                .set({ downloadCount: sql`${files.downloadCount} + 1` })
                .where(eq(files.fileId, fileId))
                .returning();

            if (updated) {
                const remaining = Math.max(0, updated.maxDownloads - updated.downloadCount);
                results.push({
                    fileId: updated.fileId,
                    downloadCount: updated.downloadCount,
                    maxDownloads: updated.maxDownloads,
                    remainingDownloads: remaining,
                    isExhausted: remaining <= 0
                });
            }
        }

        if (results.length > 0) {
            await this.updateStats({ downloads: results.length });
        }

        return results;
    }

    async areAllFilesExhausted(vaultId: string): Promise<boolean> {
        const vaultFiles = await this.getFiles(vaultId);
        return vaultFiles.every(f => f.downloadCount >= f.maxDownloads);
    }

    async updateClipboard(lookupId: string, encryptedClipboardText: string): Promise<Date> {
        const [updated] = await db.update(vaults)
            .set({ encryptedClipboardText })
            .where(eq(vaults.lookupId, lookupId))
            .returning();

        if (!updated) throw new Error("Vault not found");
        return new Date();
    }

    // --- SMART FILE DELETION (Multi-Provider) ---
    async deleteVault(id: string): Promise<void> {
        try {
            const vaultFiles = await db.select({ id: files.id }).from(files).where(eq(files.vaultId, id));

            const allPrefixedPaths: string[] = [];
            const bytesPerProvider: Record<string, number> = { r2: 0, supabase: 0 };

            for (const file of vaultFiles) {
                const fileChunks = await db.select({ storagePath: chunks.storagePath, size: chunks.size })
                    .from(chunks)
                    .where(eq(chunks.fileId, file.id));

                for (const c of fileChunks) {
                    if (c.storagePath) {
                        allPrefixedPaths.push(c.storagePath);
                        const { provider } = parseStoragePath(c.storagePath);
                        if (provider in bytesPerProvider) {
                            bytesPerProvider[provider] += c.size || 0;
                        }
                    }
                }
            }

            if (allPrefixedPaths.length > 0) {
                await routerDeleteFiles(allPrefixedPaths);
                if (bytesPerProvider.r2 > 0) trackDeletion("r2", bytesPerProvider.r2);
                if (bytesPerProvider.supabase > 0) trackDeletion("supabase", bytesPerProvider.supabase);
            }
        } catch (err) {
            console.error(`[Cleanup Error] Failed to delete physical files for vault ${id}:`, err);
        }

        await db.delete(vaults).where(eq(vaults.id, id));
        await this.updateStats({ active: -1, burned: true });
        console.log(`[Storage] Deleted vault ${id} and resources.`);
    }

    async softDeleteVault(id: string): Promise<void> {
        await db.update(vaults).set({ isDeleted: true }).where(eq(vaults.id, id));
        console.log(`[Storage] Vault ${id} marked for background deletion.`);
    }

    async cleanupExpiredVaults(): Promise<void> {
        const now = new Date();
        const expiredVaults = await db.select({ id: vaults.id })
            .from(vaults)
            .where(or(
                lt(vaults.expiresAt, now),
                eq(vaults.isDeleted, true)
            ));

        if (expiredVaults.length > 0) {
            console.log(`[Cleanup] Found ${expiredVaults.length} vaults to purge. Processing background queue...`);
            for (const vault of expiredVaults) {
                await this.deleteVault(vault.id);
            }
        }
    }

    // --- SMART UPLOAD URL (Multi-Provider Routing) ---
    async getSmartUploadUrl(vaultId: string, fileId: string, chunkIndex: number, chunkSize: number): Promise<{
        uploadUrl: string;
        storagePath: string;
        provider: StorageProvider;
    }> {
        const provider = resolveUploadProvider(chunkSize);

        if (!provider) {
            throw new Error("STORAGE_FULL: Both R2 and Supabase storage are at capacity. Please wait for expired vaults to be cleaned up.");
        }

        const rawPath = `${vaultId}/${fileId}/${chunkIndex}.enc`;
        const uploadUrl = await routerGetUploadUrl(provider, rawPath);
        const storagePath = buildPrefixedPath(provider, rawPath);

        trackUpload(provider, chunkSize);
        console.log(`[Storage Router] Upload → ${provider.toUpperCase()} | ${rawPath} | ${chunkSize} bytes`);

        return { uploadUrl, storagePath, provider };
    }

    // --- SMART DOWNLOAD URL (Auto-Detect Provider from Path) ---
    async getDownloadUrl(prefixedPath: string): Promise<string> {
        return routerGetDownloadUrl(prefixedPath);
    }

    // --- LEGACY: Simple upload URL ---
    async getUploadUrl(storagePath: string): Promise<string> {
        const { provider, rawPath } = parseStoragePath(storagePath);
        return routerGetUploadUrl(provider, rawPath);
    }

    // --- STORAGE STATUS ---
    getStorageStatus() {
        return getStorageStatus();
    }

    // --- Reconcile usage from DB on startup ---
    async reconcileStorageUsage(): Promise<void> {
        try {
            const allChunks = await db.select({
                storagePath: chunks.storagePath,
                size: chunks.size,
                isUploaded: chunks.isUploaded,
            }).from(chunks);

            let r2Total = 0;
            let supabaseTotal = 0;

            for (const chunk of allChunks) {
                if (!chunk.storagePath || !chunk.isUploaded) continue;
                const { provider } = parseStoragePath(chunk.storagePath);
                if (provider === "r2") r2Total += chunk.size || 0;
                else if (provider === "supabase") supabaseTotal += chunk.size || 0;
            }

            reconcileUsage(r2Total, supabaseTotal);
        } catch (err) {
            console.error("[Storage] Failed to reconcile usage from DB:", err);
        }
    }

    async incrementVaultEmailCount(vaultId: string): Promise<number> {
        const [vault] = await db.update(vaults)
            .set({ emailSentCount: sql`${vaults.emailSentCount} + 1` })
            .where(eq(vaults.id, vaultId))
            .returning();
        return vault?.emailSentCount || 0;
    }

    async getEmailUsage(date: string): Promise<any> {
        const [usage] = await db.select().from(emailUsage).where(eq(emailUsage.date, date));
        return usage || { date, resendCount: 0, brevoCount: 0, msg91Count: 0 };
    }

    async incrementEmailUsage(date: string, provider: "resend" | "brevo" | "msg91"): Promise<void> {
        const [usage] = await db.select().from(emailUsage).where(eq(emailUsage.date, date));
        
        if (!usage) {
            await db.insert(emailUsage).values({
                date,
                resendCount: provider === "resend" ? 1 : 0,
                brevoCount: provider === "brevo" ? 1 : 0,
                msg91Count: provider === "msg91" ? 1 : 0,
            });
        } else {
            const update: any = { lastUpdated: new Date() };
            if (provider === "resend") update.resendCount = usage.resendCount + 1;
            if (provider === "brevo") update.brevoCount = usage.brevoCount + 1;
            if (provider === "msg91") update.msg91Count = usage.msg91Count + 1;
            
            await db.update(emailUsage).set(update).where(eq(emailUsage.date, date));
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  FALLBACK STORAGE — Auto-switches to MemoryStorage if DB is unavailable
//  Uses a proper typed interface instead of `any` to preserve type safety.
// ═══════════════════════════════════════════════════════════════════════════════

import { MemoryStorage } from "./memory_storage";

class FallbackStorage implements IStorage {
    private primary: DatabaseStorage;
    private memory: MemoryStorage;
    private usingMemory: boolean = false;

    constructor() {
        this.primary = new DatabaseStorage();
        this.memory = new MemoryStorage();
    }

    /**
     * Execute an operation with automatic fallback to memory storage.
     * Uses typed IStorage interface instead of `any` — preserves full type safety.
     */
    private async execute<T>(operation: (s: IStorage) => Promise<T>): Promise<T> {
        if (this.usingMemory) {
            return operation(this.memory);
        }

        try {
            return await operation(this.primary);
        } catch (err: any) {
            // Detect fatal DB errors and switch to memory
            const isFatalDb = err.code === 'ECONNREFUSED'
                || err.code === '57P03'
                || err.code === 'ENOTFOUND'
                || err.message?.includes('connect')
                || err.message?.includes('getaddrinfo');

            if (isFatalDb) {
                console.error("═══════════════════════════════════════════════════════════");
                console.error("❌ DATABASE UNAVAILABLE — SWITCHING TO MEMORY STORAGE");
                console.error("   Reason:", err.message);

                if (err.message?.includes('ENETUNREACH') || err.message?.includes('ENOTFOUND') || err.message?.includes('supabase')) {
                    console.error("   ⚠️ SUPABASE IPv6 CONNECTION ERROR DETECTED!");
                    console.error("   Supabase has phased out IPv4 on direct connections (`db.[ref].supabase.co`).");
                    console.error("   Render instances often fail to connect via IPv6 by default.");
                    console.error("   FIX: Update your DATABASE_URL in Render to use the Connection Pooler URL.");
                    console.error("   Go to Supabase -> Database -> Connection Pooler and copy the Session URL.");
                }

                console.error("   Note: Data will be lost when server restarts.");
                console.error("═══════════════════════════════════════════════════════════");
                this.usingMemory = true;
                return operation(this.memory);
            }
            throw err;
        }
    }

    // --- IStorage implementation (fully typed) ---
    async createVault(data: CreateVaultRequest): Promise<Vault> {
        return this.execute(s => s.createVault(data));
    }
    async getVault(id: string): Promise<Vault | undefined> {
        return this.execute(s => s.getVault(id));
    }
    
    async updateVault(id: string, updates: Partial<Vault>): Promise<void> {
        return this.execute(s => s.updateVault(id, updates));
    }
    async getVaultByShortCode(code: string): Promise<Vault | undefined> {
        return this.execute(s => s.getVaultByShortCode(code));
    }
    async getVaultByLookupId(lookupId: string): Promise<Vault | undefined> {
        return this.execute(s => s.getVaultByLookupId(lookupId));
    }
    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number, isCompressed = false, originalSize?: number, maxDownloads = 1): Promise<FileRecord> {
        return this.execute(s => s.createFile(vaultId, fileId, chunkCount, totalSize, isCompressed, originalSize, maxDownloads));
    }
    async getFiles(vaultId: string): Promise<FileRecord[]> {
        return this.execute(s => s.getFiles(vaultId));
    }
    async getFileByFileId(fileId: string): Promise<FileRecord | undefined> {
        return this.execute(s => s.getFileByFileId(fileId));
    }
    async createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord> {
        return this.execute(s => s.createChunk(fileId, chunkIndex, size));
    }
    async getChunk(fileId: string, chunkIndex: number): Promise<ChunkRecord | undefined> {
        return this.execute(s => s.getChunk(fileId, chunkIndex));
    }
    async updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string): Promise<void> {
        return this.execute(s => s.updateChunkStatus(fileId, chunkIndex, storagePath));
    }
    async incrementDownloadCount(vaultId: string): Promise<number> {
        return this.execute(s => s.incrementDownloadCount(vaultId));
    }
    async incrementFileDownloadCount(fileIds: string[]): Promise<{
        fileId: string;
        downloadCount: number;
        maxDownloads: number;
        remainingDownloads: number;
        isExhausted: boolean;
    }[]> {
        return this.execute(s => s.incrementFileDownloadCount(fileIds));
    }
    async areAllFilesExhausted(vaultId: string): Promise<boolean> {
        return this.execute(s => s.areAllFilesExhausted(vaultId));
    }
    async updateClipboard(lookupId: string, encryptedClipboardText: string): Promise<Date> {
        return this.execute(s => s.updateClipboard(lookupId, encryptedClipboardText));
    }
    async softDeleteVault(id: string): Promise<void> {
        return this.execute(s => s.softDeleteVault(id));
    }
    async deleteVault(id: string): Promise<void> {
        return this.execute(s => s.deleteVault(id));
    }
    async cleanupExpiredVaults(): Promise<void> {
        return this.execute(s => s.cleanupExpiredVaults());
    }
    async getGlobalStats(): Promise<GlobalStats> {
        return this.execute(s => s.getGlobalStats());
    }
    async incrementVaultEmailCount(vaultId: string): Promise<number> {
        return this.execute(s => s.incrementVaultEmailCount(vaultId));
    }
    async getEmailUsage(date: string): Promise<any> {
        return this.execute(s => s.getEmailUsage(date));
    }
    async incrementEmailUsage(date: string, provider: "resend" | "brevo" | "msg91"): Promise<void> {
        return this.execute(s => s.incrementEmailUsage(date, provider));
    }

    // --- Extended methods (not part of IStorage — always use primary) ---
    async getSmartUploadUrl(vaultId: string, fileId: string, chunkIndex: number, chunkSize: number) {
        return this.primary.getSmartUploadUrl(vaultId, fileId, chunkIndex, chunkSize);
    }
    async getDownloadUrl(path: string) {
        return this.primary.getDownloadUrl(path);
    }
    async getUploadUrl(path: string) {
        return this.primary.getUploadUrl(path);
    }
    getStorageStatus() {
        return this.primary.getStorageStatus();
    }
    async reconcileStorageUsage() {
        return this.primary.reconcileStorageUsage();
    }
}

export const storage = new FallbackStorage();
