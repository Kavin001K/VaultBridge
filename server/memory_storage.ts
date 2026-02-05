
import {
    type Vault, type FileRecord, type ChunkRecord, type CreateVaultRequest
} from "@shared/schema";
import { localStorage } from "./services/local_storage";
import { supabaseStorage } from "./services/supabase_storage";
import { randomUUID } from "node:crypto";
import path from "path";

const USE_LOCAL_STORAGE = process.env.STORAGE_PROVIDER === 'local';

export class MemoryStorage {
    private vaults: Map<string, Vault> = new Map();
    private files: Map<string, FileRecord> = new Map();
    private chunks: Map<number, ChunkRecord> = new Map();
    private chunkIdCounter = 1;

    async createVault(data: CreateVaultRequest): Promise<Vault> {
        let shortCode = "", isUnique = false;
        while (!isUnique) {
            shortCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            if (!this.getVaultByShortCodeSync(shortCode)) isUnique = true;
        }

        const expiresAt = new Date(Date.now() + data.expiresIn * 60 * 60 * 1000);

        const vault: Vault = {
            id: randomUUID(),
            shortCode,
            lookupId: data.lookupId || null,
            wrappedKey: data.wrappedKey || null,
            encryptedMetadata: data.encryptedMetadata,
            encryptedClipboardText: data.encryptedClipboardText || null, // Store encrypted clipboard text
            createdAt: new Date(),
            expiresAt,
            maxDownloads: data.maxDownloads,
            downloadCount: 0,
            isDeleted: false
        };

        this.vaults.set(vault.id, vault);

        // Create file records with per-file maxDownloads (defaults to vault's maxDownloads)
        for (const f of data.files) {
            const fileMaxDownloads = (f as any).maxDownloads ?? data.maxDownloads;
            await this.createFile(vault.id, f.fileId, f.chunks, f.size, f.isCompressed, f.originalSize, fileMaxDownloads);
        }

        return vault;
    }

    private getVaultByShortCodeSync(code: string): Vault | undefined {
        for (const v of Array.from(this.vaults.values())) {
            if (v.shortCode === code && !v.isDeleted) return v;
        }
        return undefined;
    }

    async getVault(id: string) {
        const v = this.vaults.get(id);
        return v && !v.isDeleted ? v : undefined;
    }

    async getVaultByShortCode(code: string) {
        return this.getVaultByShortCodeSync(code);
    }

    async getVaultByLookupId(lookupId: string) {
        for (const v of Array.from(this.vaults.values())) {
            if (v.lookupId === lookupId && !v.isDeleted) return v;
        }
        return undefined;
    }

    async createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number, isCompressed = false, originalSize?: number, maxDownloads = 1) {
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

    async getFiles(vaultId: string) {
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

    async createChunk(fileId: string, chunkIndex: number, size: number) {
        // Resolve internal file ID from client fileId if needed, but schema says createChunk takes fileId (internal or external?)
        // In storage.ts: createChunk(fileId: string...) 
        // -> const [file] = await db.select().from(files).where(eq(files.fileId, fileId));
        // So the argument `fileId` is the CLIENT ID (string), not the UUID PK.

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

    async getChunk(clientFileId: string, chunkIndex: number) {
        // Join logic
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

    async updateChunkStatus(clientFileId: string, chunkIndex: number, storagePath: string) {
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

    // Vault-level download count (legacy)
    async incrementDownloadCount(vaultId: string) {
        const v = this.vaults.get(vaultId);
        if (v) {
            v.downloadCount += 1;
            this.vaults.set(vaultId, v);
            return v.downloadCount;
        }
        return 0;
    }

    // Per-file download count increment
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

        return results;
    }

    // Check if all files in a vault are exhausted
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

    async deleteVault(id: string) {
        // Gather paths for deletion
        const vaultFiles = await this.getFiles(id);

        for (const file of vaultFiles) {
            const fileChunks: ChunkRecord[] = [];
            for (const c of Array.from(this.chunks.values())) {
                if (c.fileId === file.id) fileChunks.push(c);
            }

            const validPaths = fileChunks
                .map(c => c.storagePath)
                .filter(p => p !== null && p !== undefined) as string[];

            if (validPaths.length > 0) {
                if (USE_LOCAL_STORAGE) {
                    for (const p of validPaths) {
                        const filename = path.basename(p);
                        await localStorage.deleteFile(filename);
                    }
                } else {
                    await supabaseStorage.deleteFiles(validPaths);
                }
            }

            // Cleanup chunks from memory
            for (const c of fileChunks) {
                this.chunks.delete(c.id);
            }
            // Cleanup file from memory
            this.files.delete(file.id);
        }

        this.vaults.delete(id); // Or mark isDeleted
        console.log(`[MemoryStorage] Deleted vault ${id} and resources.`);
    }

    async cleanupExpiredVaults() {
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

    // Proxy to storage providers
    async getUploadUrl(path: string) {
        if (USE_LOCAL_STORAGE) return `/api/local/upload?path=${encodeURIComponent(path)}`;
        return supabaseStorage.getUploadUrl(path);
    }

    async getDownloadUrl(path: string) {
        if (USE_LOCAL_STORAGE) return `/api/local/download?path=${encodeURIComponent(path)}`;
        return supabaseStorage.getDownloadUrl(path);
    }
}
