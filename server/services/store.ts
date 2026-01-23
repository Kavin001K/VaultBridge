/**
 * Ephemeral Storage Service for VaultBridge
 * 
 * Abstracts vault metadata storage. Uses in-memory Map with TTL auto-cleanup
 * as a Redis-like ephemeral store. In production, replace with actual Redis.
 */

import { randomUUID } from "crypto";

export interface VaultMetadata {
    id: string;
    shortCode: string;
    encryptedMetadata: string;
    createdAt: Date;
    expiresAt: Date;
    maxDownloads: number;
    downloadCount: number;
    files: {
        fileId: string;
        chunkCount: number;
        totalSize: number;
        storagePaths: string[];
    }[];
}

export interface CreateVaultInput {
    expiresIn: number; // Hours
    maxDownloads: number;
    encryptedMetadata: string;
    files: {
        fileId: string;
        chunks: number;
        size: number;
    }[];
}

class EphemeralStore {
    private vaults: Map<string, VaultMetadata> = new Map();
    private codeIndex: Map<string, string> = new Map(); // shortCode -> vaultId
    private cleanupInterval: NodeJS.Timeout | null = null;

    constructor() {
        // Auto-cleanup every minute
        this.cleanupInterval = setInterval(() => this.cleanupExpired(), 60 * 1000);
    }

    /**
     * Generate a unique 6-character alphanumeric short code
     */
    private generateShortCode(): string {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // No I, O, 0, 1 for readability
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    /**
     * Create a new vault with auto-expiry TTL
     */
    async createVault(input: CreateVaultInput): Promise<VaultMetadata> {
        const id = randomUUID();

        // Generate unique short code
        let shortCode: string;
        do {
            shortCode = this.generateShortCode();
        } while (this.codeIndex.has(shortCode));

        const now = new Date();
        const expiresAt = new Date(now.getTime() + input.expiresIn * 60 * 60 * 1000);

        const vault: VaultMetadata = {
            id,
            shortCode,
            encryptedMetadata: input.encryptedMetadata,
            createdAt: now,
            expiresAt,
            maxDownloads: input.maxDownloads,
            downloadCount: 0,
            files: input.files.map(f => ({
                fileId: f.fileId,
                chunkCount: f.chunks,
                totalSize: f.size,
                storagePaths: new Array(f.chunks).fill(null),
            })),
        };

        this.vaults.set(id, vault);
        this.codeIndex.set(shortCode, id);

        // Schedule auto-delete
        setTimeout(() => this.deleteVault(id), input.expiresIn * 60 * 60 * 1000);

        return vault;
    }

    /**
     * Get vault by ID
     */
    async getVault(id: string): Promise<VaultMetadata | null> {
        const vault = this.vaults.get(id);
        if (!vault) return null;

        // Check if expired
        if (new Date() > vault.expiresAt) {
            await this.deleteVault(id);
            return null;
        }

        return vault;
    }

    /**
     * Get vault by short code
     */
    async getVaultByShortCode(code: string): Promise<VaultMetadata | null> {
        const vaultId = this.codeIndex.get(code.toUpperCase());
        if (!vaultId) return null;
        return this.getVault(vaultId);
    }

    /**
     * Update chunk storage path
     */
    async updateChunkPath(vaultId: string, fileId: string, chunkIndex: number, storagePath: string): Promise<void> {
        const vault = this.vaults.get(vaultId);
        if (!vault) return;

        const file = vault.files.find(f => f.fileId === fileId);
        if (file && chunkIndex >= 0 && chunkIndex < file.storagePaths.length) {
            file.storagePaths[chunkIndex] = storagePath;
        }
    }

    /**
     * Get chunk storage path
     */
    async getChunkPath(vaultId: string, fileId: string, chunkIndex: number): Promise<string | null> {
        const vault = await this.getVault(vaultId);
        if (!vault) return null;

        const file = vault.files.find(f => f.fileId === fileId);
        if (!file || chunkIndex < 0 || chunkIndex >= file.storagePaths.length) {
            return null;
        }

        return file.storagePaths[chunkIndex];
    }

    /**
     * Increment download count
     */
    async incrementDownloadCount(id: string): Promise<boolean> {
        const vault = this.vaults.get(id);
        if (!vault) return false;

        vault.downloadCount++;

        // Auto-delete if max downloads reached
        if (vault.downloadCount >= vault.maxDownloads) {
            // Delay deletion slightly to allow current download to complete
            setTimeout(() => this.deleteVault(id), 5000);
        }

        return true;
    }

    /**
     * Delete vault and return storage paths for cleanup
     */
    async deleteVault(id: string): Promise<string[]> {
        const vault = this.vaults.get(id);
        if (!vault) return [];

        const storagePaths: string[] = [];
        for (const file of vault.files) {
            storagePaths.push(...file.storagePaths.filter(p => p !== null));
        }

        this.vaults.delete(id);
        this.codeIndex.delete(vault.shortCode);

        console.log(`[store] Vault ${id} deleted. ${storagePaths.length} chunks marked for cleanup.`);
        return storagePaths;
    }

    /**
     * Get all expired vaults for cleanup
     */
    async getExpiredVaults(): Promise<VaultMetadata[]> {
        const now = new Date();
        const expired: VaultMetadata[] = [];

        for (const vault of this.vaults.values()) {
            if (now > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
                expired.push(vault);
            }
        }

        return expired;
    }

    /**
     * Cleanup expired vaults
     */
    private async cleanupExpired(): Promise<void> {
        const expired = await this.getExpiredVaults();
        for (const vault of expired) {
            await this.deleteVault(vault.id);
        }
        if (expired.length > 0) {
            console.log(`[store] Auto-cleaned ${expired.length} expired vaults.`);
        }
    }

    /**
     * Get all storage paths (for orphan detection)
     */
    getAllStoragePaths(): Set<string> {
        const paths = new Set<string>();
        for (const vault of this.vaults.values()) {
            for (const file of vault.files) {
                for (const path of file.storagePaths) {
                    if (path) paths.add(path);
                }
            }
        }
        return paths;
    }

    /**
     * Get stats for monitoring
     */
    getStats(): { vaultCount: number; totalChunks: number } {
        let totalChunks = 0;
        for (const vault of this.vaults.values()) {
            for (const file of vault.files) {
                totalChunks += file.storagePaths.filter(p => p !== null).length;
            }
        }
        return { vaultCount: this.vaults.size, totalChunks };
    }

    destroy(): void {
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
        }
    }
}

// Singleton export
export const ephemeralStore = new EphemeralStore();
