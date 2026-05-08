import {
    type Vault, type FileRecord, type ChunkRecord, type CreateVaultRequest, type GlobalStats, type SystemLog
} from "@shared/schema";
import { randomUUID } from "node:crypto";
import type { IStorage } from "./storage_interface";
import {
    deleteFiles as routerDeleteFiles,
    parseStoragePath,
    trackDeletion,
} from "./services/storage_router";

/**
 * In-Memory Storage — fallback when PostgreSQL is unavailable.
 * Implements the same IStorage interface as DatabaseStorage.
 * Data is lost on server restart.
 */
export class MemoryStorage implements IStorage {
    private vaults: Map<string, Vault> = new Map();
    private files: Map<string, FileRecord> = new Map();
    private chunks: Map<number, ChunkRecord> = new Map();
    private chunkIdCounter = 1;
    private stats: GlobalStats = {
        id: 1,
        totalVaultsCreated: 0,
        totalBytesUploaded: "0",
        totalDownloads: 0,
        activeVaultsCount: 0,
        lastBurnedAt: null,
        updatedAt: new Date()
    };
    private emailUsage: Map<string, any> = new Map();
    private logs: SystemLog[] = [];
    private logIdCounter = 1;

    private updateStats(deltas: { vaults?: number, bytes?: number, downloads?: number, active?: number, burned?: boolean }) {
        this.stats.totalVaultsCreated = Math.max(0, this.stats.totalVaultsCreated + (deltas.vaults || 0));
        this.stats.totalBytesUploaded = (BigInt(this.stats.totalBytesUploaded) + BigInt(deltas.bytes || 0)).toString();
        this.stats.totalDownloads = Math.max(0, this.stats.totalDownloads + (deltas.downloads || 0));
        this.stats.activeVaultsCount = Math.max(0, this.stats.activeVaultsCount + (deltas.active || 0));
        if (deltas.burned) this.stats.lastBurnedAt = new Date();
        this.stats.updatedAt = new Date();
    }

    async getGlobalStats(): Promise<GlobalStats> {
        return { ...this.stats };
    }

    async recalculateStats(): Promise<void> {
        const activeVaults = Array.from(this.vaults.values()).filter((vault) => !vault.isDeleted);
        const uploadedBytes = Array.from(this.chunks.values())
            .filter((chunk) => chunk.isUploaded)
            .reduce((sum, chunk) => sum + chunk.size, 0);
        const downloads = Array.from(this.files.values())
            .reduce((sum, file) => sum + file.downloadCount, 0);

        this.stats = {
            ...this.stats,
            totalVaultsCreated: this.vaults.size,
            totalBytesUploaded: uploadedBytes.toString(),
            totalDownloads: downloads,
            activeVaultsCount: activeVaults.length,
            updatedAt: new Date(),
        };
    }

    async createLog(level: string, event: string, message: string, details?: any): Promise<void> {
        const log: SystemLog = {
            id: this.logIdCounter++,
            level,
            event,
            message,
            timestamp: new Date(),
            details: details || {}
        };
        this.logs.unshift(log); // Add to beginning
        if (this.logs.length > 500) this.logs.pop(); // Cap at 500 logs
    }

    async getSystemLogs(limit = 50): Promise<SystemLog[]> {
        return this.logs.slice(0, limit);
    }

    async createVault(data: CreateVaultRequest): Promise<Vault> {
        let shortCode = "", isUnique = false;
        while (!isUnique) {
            shortCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            if (!this.getVaultByShortCodeSync(shortCode)) isUnique = true;
        }

        if (data.lookupId && (await this.getVaultByLookupId(data.lookupId))) {
            const conflictError = new Error("Lookup ID collision. Retrying with a new access code is required.") as Error & {
                status?: number;
                code?: string;
            };
            conflictError.status = 409;
            conflictError.code = "LOOKUP_ID_CONFLICT";
            throw conflictError;
        }

        const expiresAt = new Date(Date.now() + data.expiresIn * 60 * 60 * 1000);

        const vault: Vault = {
            id: randomUUID(),
            shortCode,
            lookupId: data.lookupId || null,
            wrappedKey: data.wrappedKey || null,
            encryptedMetadata: data.encryptedMetadata,
            encryptedClipboardText: data.encryptedClipboardText || null,
            createdAt: new Date(),
            expiresAt,
            maxDownloads: data.maxDownloads,
            downloadCount: 0,
            isDeleted: false,
            emailSentCount: 0,
            pinSalt: data.pinSalt || null
        };

        this.vaults.set(vault.id, vault);

        for (const f of data.files) {
            const fileMaxDownloads = (f as any).maxDownloads ?? data.maxDownloads;
            await this.createFile(vault.id, f.fileId, f.chunks, f.size, f.isCompressed, f.originalSize, fileMaxDownloads);
        }

        // Update Stats
        const totalSize = data.files.reduce((sum, f) => sum + f.size, 0);
        this.updateStats({ vaults: 1, active: 1, bytes: totalSize });

        await this.createLog("info", "VAULT_CREATED", `New secure vault established: ${vault.id.substring(0,8)}`, { 
            vaultId: vault.id, 
            size: totalSize, 
            files: data.files.length 
        });

        return vault;
    }

    private getVaultByShortCodeSync(code: string): Vault | undefined {
        for (const v of Array.from(this.vaults.values())) {
            if (v.shortCode === code && !v.isDeleted) return v;
        }
        return undefined;
    }

    async getVault(id: string): Promise<Vault | undefined> {
        const v = this.vaults.get(id);
        return v && !v.isDeleted ? v : undefined;
    }

    async updateVault(id: string, updates: Partial<Vault>): Promise<void> {
        const vault = this.vaults.get(id);
        if (vault) {
            this.vaults.set(id, { ...vault, ...updates });
        }
    }

    async getVaultByShortCode(code: string): Promise<Vault | undefined> {
        return this.getVaultByShortCodeSync(code);
    }

    async getVaultByLookupId(lookupId: string): Promise<Vault | undefined> {
        for (const v of Array.from(this.vaults.values())) {
            if (v.lookupId === lookupId && !v.isDeleted) return v;
        }
        return undefined;
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number, isCompressed = false, originalSize?: number, maxDownloads = 1): Promise<FileRecord> {
        const file: FileRecord = {
            id: randomUUID(),
            vaultId,
            fileId,
            chunkCount,
            totalSize,
            isCompressed,
            originalSize: originalSize || null,
            maxDownloads,
            downloadCount: 0
        };
        this.files.set(file.id, file);
        return file;
    }

    async getFiles(vaultId: string): Promise<FileRecord[]> {
        const result: FileRecord[] = [];
        for (const f of Array.from(this.files.values())) {
            if (f.vaultId === vaultId) result.push(f);
        }
        return result;
    }

    async getFileByFileId(fileId: string): Promise<FileRecord | undefined> {
        for (const f of Array.from(this.files.values())) {
            if (f.fileId === fileId) return f;
        }
        return undefined;
    }

    async createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord> {
        // Resolve internal file from client fileId
        let internalFile: FileRecord | undefined;
        for (const f of Array.from(this.files.values())) {
            if (f.fileId === fileId) {
                internalFile = f;
                break;
            }
        }

        if (!internalFile) throw new Error(`File not found for ID: ${fileId}`);

        // Idempotent check
        for (const c of Array.from(this.chunks.values())) {
            if (c.fileId === internalFile.id && c.chunkIndex === chunkIndex) {
                return c;
            }
        }

        const chunk: ChunkRecord = {
            id: this.chunkIdCounter++,
            fileId: internalFile.id,
            chunkIndex,
            size,
            isUploaded: false,
            storagePath: null
        };
        this.chunks.set(chunk.id, chunk);
        return chunk;
    }

    async getChunk(clientFileId: string, chunkIndex: number): Promise<ChunkRecord | undefined> {
        let internalFile: FileRecord | undefined;
        for (const f of Array.from(this.files.values())) {
            if (f.fileId === clientFileId) {
                internalFile = f;
                break;
            }
        }
        if (!internalFile) return undefined;

        for (const c of Array.from(this.chunks.values())) {
            if (c.fileId === internalFile.id && c.chunkIndex === chunkIndex) {
                return c;
            }
        }
        return undefined;
    }

    async updateChunkStatus(clientFileId: string, chunkIndex: number, storagePath: string): Promise<void> {
        let internalFile: FileRecord | undefined;
        for (const f of Array.from(this.files.values())) {
            if (f.fileId === clientFileId) {
                internalFile = f;
                break;
            }
        }
        if (!internalFile) return;

        for (const c of Array.from(this.chunks.values())) {
            if (c.fileId === internalFile.id && c.chunkIndex === chunkIndex) {
                const updated = { ...c, isUploaded: true, storagePath };
                this.chunks.set(c.id, updated);
                break;
            }
        }
    }

    async incrementDownloadCount(vaultId: string): Promise<number> {
        const v = this.vaults.get(vaultId);
        if (v) {
            v.downloadCount += 1;
            this.vaults.set(vaultId, v);
            this.updateStats({ downloads: 1 });
            await this.createLog("info", "VAULT_ACCESS", `Secure vault accessed for download: ${vaultId.substring(0,8)}`, { vaultId });
            return v.downloadCount;
        }
        return 0;
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
            let file: FileRecord | undefined;
            for (const f of Array.from(this.files.values())) {
                if (f.fileId === fileId) {
                    file = f;
                    break;
                }
            }

            if (file) {
                file.downloadCount += 1;
                this.files.set(file.id, file);

                const remaining = Math.max(0, file.maxDownloads - file.downloadCount);
                results.push({
                    fileId: file.fileId,
                    downloadCount: file.downloadCount,
                    maxDownloads: file.maxDownloads,
                    remainingDownloads: remaining,
                    isExhausted: remaining <= 0
                });
            }
        }

        if (results.length > 0) {
            this.updateStats({ downloads: results.length });
            await this.createLog("info", "FILE_DOWNLOADED", `${results.length} secure fragments retrieved from storage`, { count: results.length });
        }

        return results;
    }

    async areAllFilesExhausted(vaultId: string): Promise<boolean> {
        const vaultFiles = await this.getFiles(vaultId);
        return vaultFiles.every(f => f.downloadCount >= f.maxDownloads);
    }

    async updateClipboard(lookupId: string, encryptedClipboardText: string): Promise<Date> {
        for (const v of Array.from(this.vaults.values())) {
            if (v.lookupId === lookupId && !v.isDeleted) {
                v.encryptedClipboardText = encryptedClipboardText;
                this.vaults.set(v.id, v);
                return new Date();
            }
        }
        throw new Error("Vault not found");
    }

    async softDeleteVault(id: string): Promise<void> {
        const v = this.vaults.get(id);
        if (v) {
            v.isDeleted = true;
            this.vaults.set(id, v);
            console.log(`[MemoryStorage] Soft deleted vault ${id}`);
        }
    }

    async deleteVault(id: string): Promise<void> {
        const vaultFiles = await this.getFiles(id);

        // Gather all storage paths and sizes for proper cleanup
        const allPrefixedPaths: string[] = [];
        const bytesPerProvider: Record<string, number> = { r2: 0, supabase: 0 };

        for (const file of vaultFiles) {
            const fileChunks: ChunkRecord[] = [];
            for (const c of Array.from(this.chunks.values())) {
                if (c.fileId === file.id) fileChunks.push(c);
            }

            for (const c of fileChunks) {
                if (c.storagePath) {
                    allPrefixedPaths.push(c.storagePath);
                    const { provider } = parseStoragePath(c.storagePath);
                    if (provider in bytesPerProvider) {
                        bytesPerProvider[provider] += c.size || 0;
                    }
                }
            }

            // Cleanup chunks from memory
            for (const c of fileChunks) {
                this.chunks.delete(c.id);
            }
            // Cleanup file from memory
            this.files.delete(file.id);
        }

        // Delete from cloud storage providers via router
        if (allPrefixedPaths.length > 0) {
            try {
                await routerDeleteFiles(allPrefixedPaths);
                if (bytesPerProvider.r2 > 0) trackDeletion("r2", bytesPerProvider.r2);
                if (bytesPerProvider.supabase > 0) trackDeletion("supabase", bytesPerProvider.supabase);
            } catch (err) {
                console.error(`[MemoryStorage] Failed to delete physical files:`, err);
            }
        }

        this.vaults.delete(id);
        this.updateStats({ active: -1, burned: true });
        console.log(`[MemoryStorage] Deleted vault ${id} and resources.`);
        await this.createLog("info", "VAULT_BURNED", `Secure vault and all associated fragments purged: ${id.substring(0,8)}`, { vaultId: id });
    }

    async cleanupExpiredVaults(): Promise<void> {
        const now = new Date();
        const expiredIds: string[] = [];
        for (const v of Array.from(this.vaults.values())) {
            if (v.expiresAt < now) expiredIds.push(v.id);
        }

        if (expiredIds.length > 0) {
            console.log(`[Cleanup] Found ${expiredIds.length} expired vaults. Purging from memory...`);
            for (const id of expiredIds) {
                await this.deleteVault(id);
            }
        }
    }
    
    async incrementVaultEmailCount(vaultId: string): Promise<number> {
        const v = this.vaults.get(vaultId);
        if (v) {
            v.emailSentCount = (v.emailSentCount || 0) + 1;
            this.vaults.set(vaultId, v);
            return v.emailSentCount;
        }
        return 0;
    }

    async getEmailUsage(date: string): Promise<any> {
        return this.emailUsage.get(date) || { date, resendCount: 0, brevoCount: 0, msg91Count: 0 };
    }

    async incrementEmailUsage(date: string, provider: "resend" | "brevo" | "msg91"): Promise<void> {
        const usage = await this.getEmailUsage(date);
        if (provider === "resend") usage.resendCount++;
        if (provider === "brevo") usage.brevoCount++;
        if (provider === "msg91") usage.msg91Count++;
        this.emailUsage.set(date, usage);
    }
}
