/**
 * IStorage — shared contract for all storage implementations.
 * Extracted into its own file to avoid circular dependencies
 * between storage.ts and memory_storage.ts.
 */
import type { Vault, FileRecord, ChunkRecord, CreateVaultRequest } from "@shared/schema";

export interface IStorage {
    createVault(data: CreateVaultRequest): Promise<Vault>;
    getVault(id: string): Promise<Vault | undefined>;
    getVaultByShortCode(code: string): Promise<Vault | undefined>;
    getVaultByLookupId(lookupId: string): Promise<Vault | undefined>;
    createFile(vaultId: string, fileId: string, chunkCount: number, totalSize: number, isCompressed?: boolean, originalSize?: number, maxDownloads?: number): Promise<FileRecord>;
    getFiles(vaultId: string): Promise<FileRecord[]>;
    getFileByFileId(fileId: string): Promise<FileRecord | undefined>;
    createChunk(fileId: string, chunkIndex: number, size: number): Promise<ChunkRecord>;
    getChunk(fileId: string, chunkIndex: number): Promise<ChunkRecord | undefined>;
    updateChunkStatus(fileId: string, chunkIndex: number, storagePath: string): Promise<void>;
    incrementDownloadCount(vaultId: string): Promise<number>;
    incrementFileDownloadCount(fileIds: string[]): Promise<{
        fileId: string;
        downloadCount: number;
        maxDownloads: number;
        remainingDownloads: number;
        isExhausted: boolean;
    }[]>;
    areAllFilesExhausted(vaultId: string): Promise<boolean>;
    updateClipboard(lookupId: string, encryptedClipboardText: string): Promise<Date>;
    deleteVault(id: string): Promise<void>;
    cleanupExpiredVaults(): Promise<void>;
}
