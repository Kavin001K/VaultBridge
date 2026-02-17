/**
 * Smart Storage Router — Intelligent Dual-Provider Storage Management
 * 
 * Architecture:
 *   PRIMARY:  Cloudflare R2  (10 GB, zero egress fees — ideal for file transfers)
 *   BACKUP:   Supabase       (500 MB, overflow buffer when R2 is full)
 *   FALLBACK: Local disk     (development only, via STORAGE_PROVIDER=local)
 * 
 * Flow:
 *   1. Upload request comes in → router checks R2 capacity first
 *   2. If R2 has space → route to R2
 *   3. If R2 is full/unconfigured → route to Supabase
 *   4. If both full → reject upload with 507 (Insufficient Storage)
 *   5. When vaults expire/self-destruct, capacity is freed automatically
 *   6. Storage path prefix ("r2:" or "sb:") tells downloads which provider to use
 * 
 * Self-Healing:
 *   - cleanupExpiredVaults() runs on schedule, deleting files + freeing tracked bytes
 *   - As R2 space frees up, it becomes primary again
 */

import { cloudflareStorage } from "./cloudflare_storage";
import { supabaseStorage } from "./supabase_storage";
import { localStorage } from "./local_storage";

// === PROVIDER IDENTIFIERS ===
export type StorageProvider = "r2" | "supabase" | "local";

// Storage path prefixes — embedded in the storagePath stored in DB
export const PROVIDER_PREFIX = {
    r2: "r2:",
    supabase: "sb:",
    local: "local:",
} as const;

// === CAPACITY LIMITS ===
const R2_MAX_BYTES = 10 * 1024 * 1024 * 1024;       // 10 GB
const SUPABASE_MAX_BYTES = 500 * 1024 * 1024;         // 500 MB
const CAPACITY_BUFFER_PERCENT = 0.05;                  // 5% safety margin

// Effective limits (with safety buffer)
const R2_EFFECTIVE_LIMIT = R2_MAX_BYTES * (1 - CAPACITY_BUFFER_PERCENT);          // ~9.5 GB
const SUPABASE_EFFECTIVE_LIMIT = SUPABASE_MAX_BYTES * (1 - CAPACITY_BUFFER_PERCENT); // ~475 MB

// === LIVE USAGE TRACKER ===
// In-memory tracker that stays in sync with actual uploads/deletes.
// Initialize from 0 — on server restart, reconciliation updates these.
let r2UsedBytes = 0;
let supabaseUsedBytes = 0;

// === ENV CONFIG ===
const USE_LOCAL_STORAGE = process.env.STORAGE_PROVIDER === "local";
const R2_AVAILABLE = cloudflareStorage.isConfigured();

/**
 * Get a human-readable summary of current storage status
 */
export function getStorageStatus() {
    return {
        r2: {
            available: R2_AVAILABLE,
            usedBytes: r2UsedBytes,
            limitBytes: R2_MAX_BYTES,
            effectiveLimitBytes: R2_EFFECTIVE_LIMIT,
            usedPercent: R2_MAX_BYTES > 0 ? Math.round((r2UsedBytes / R2_MAX_BYTES) * 100 * 100) / 100 : 0,
            remainingBytes: Math.max(0, R2_EFFECTIVE_LIMIT - r2UsedBytes),
            isFull: r2UsedBytes >= R2_EFFECTIVE_LIMIT,
        },
        supabase: {
            usedBytes: supabaseUsedBytes,
            limitBytes: SUPABASE_MAX_BYTES,
            effectiveLimitBytes: SUPABASE_EFFECTIVE_LIMIT,
            usedPercent: SUPABASE_MAX_BYTES > 0 ? Math.round((supabaseUsedBytes / SUPABASE_MAX_BYTES) * 100 * 100) / 100 : 0,
            remainingBytes: Math.max(0, SUPABASE_EFFECTIVE_LIMIT - supabaseUsedBytes),
            isFull: supabaseUsedBytes >= SUPABASE_EFFECTIVE_LIMIT,
        },
        totalUsedBytes: r2UsedBytes + supabaseUsedBytes,
        totalLimitBytes: R2_MAX_BYTES + SUPABASE_MAX_BYTES,
        isLocal: USE_LOCAL_STORAGE,
    };
}

/**
 * Determine which provider to use for a new upload.
 * Priority: R2 first (free egress) → Supabase (overflow) → reject
 * 
 * @param chunkSizeBytes - Size in bytes of chunk to upload
 * @returns Provider ID or null if both are full
 */
export function resolveUploadProvider(chunkSizeBytes: number): StorageProvider | null {
    if (USE_LOCAL_STORAGE) return "local";

    // Validate input
    if (chunkSizeBytes <= 0 || !Number.isFinite(chunkSizeBytes)) {
        console.warn(`[Storage Router] Invalid chunk size: ${chunkSizeBytes}, defaulting to Supabase`);
        return "supabase";
    }

    // Priority 1: Cloudflare R2 (free egress, 10GB)
    if (R2_AVAILABLE && (r2UsedBytes + chunkSizeBytes) <= R2_EFFECTIVE_LIMIT) {
        return "r2";
    }

    // Priority 2: Supabase (500MB overflow)
    if ((supabaseUsedBytes + chunkSizeBytes) <= SUPABASE_EFFECTIVE_LIMIT) {
        return "supabase";
    }

    // Both providers full
    return null;
}

/**
 * Parse provider from a prefixed storage path.
 * e.g. "r2:vaultId/fileId/0.enc" → { provider: "r2", rawPath: "vaultId/fileId/0.enc" }
 */
export function parseStoragePath(prefixedPath: string): { provider: StorageProvider; rawPath: string } {
    if (!prefixedPath || typeof prefixedPath !== 'string') {
        console.warn(`[Storage Router] Invalid storage path: ${prefixedPath}, assuming Supabase`);
        return { provider: "supabase", rawPath: prefixedPath || "" };
    }

    if (prefixedPath.startsWith(PROVIDER_PREFIX.r2)) {
        return { provider: "r2", rawPath: prefixedPath.slice(PROVIDER_PREFIX.r2.length) };
    }
    if (prefixedPath.startsWith(PROVIDER_PREFIX.supabase)) {
        return { provider: "supabase", rawPath: prefixedPath.slice(PROVIDER_PREFIX.supabase.length) };
    }
    if (prefixedPath.startsWith(PROVIDER_PREFIX.local)) {
        return { provider: "local", rawPath: prefixedPath.slice(PROVIDER_PREFIX.local.length) };
    }
    // Legacy paths without prefix (pre-R2 era) — assume Supabase
    return { provider: "supabase", rawPath: prefixedPath };
}

/**
 * Build a prefixed storage path for a new upload
 */
export function buildPrefixedPath(provider: StorageProvider, rawPath: string): string {
    return `${PROVIDER_PREFIX[provider]}${rawPath}`;
}

/**
 * Get a signed upload URL from the correct provider
 */
export async function getUploadUrl(provider: StorageProvider, rawPath: string): Promise<string> {
    switch (provider) {
        case "r2":
            return cloudflareStorage.getUploadUrl(rawPath);
        case "supabase":
            return supabaseStorage.getUploadUrl(rawPath);
        case "local":
            return `/api/local/upload?path=${encodeURIComponent(rawPath)}`;
    }
}

/**
 * Get a signed download URL from the correct provider (auto-detected from path prefix)
 */
export async function getDownloadUrl(prefixedPath: string): Promise<string> {
    const { provider, rawPath } = parseStoragePath(prefixedPath);

    switch (provider) {
        case "r2":
            return cloudflareStorage.getDownloadUrl(rawPath);
        case "supabase":
            return supabaseStorage.getDownloadUrl(rawPath);
        case "local":
            return `/api/local/download?path=${encodeURIComponent(rawPath)}`;
    }
}

/**
 * Delete files across providers (automatically routes based on path prefix)
 */
export async function deleteFiles(prefixedPaths: string[]): Promise<void> {
    if (!prefixedPaths || prefixedPaths.length === 0) return;

    // Group by provider
    const r2Paths: string[] = [];
    const supabasePaths: string[] = [];
    const localPaths: string[] = [];

    for (const p of prefixedPaths) {
        if (!p) continue; // Skip null/undefined paths
        const { provider, rawPath } = parseStoragePath(p);
        switch (provider) {
            case "r2": r2Paths.push(rawPath); break;
            case "supabase": supabasePaths.push(rawPath); break;
            case "local": localPaths.push(rawPath); break;
        }
    }

    // Delete from each provider in parallel
    const promises: Promise<void>[] = [];

    if (r2Paths.length > 0) {
        promises.push(
            cloudflareStorage.deleteFiles(r2Paths).then(() => {
                console.log(`[Storage Router] 🗑️  Freed ${r2Paths.length} files from R2.`);
            }).catch(err => {
                console.error(`[Storage Router] R2 delete error (${r2Paths.length} files):`, err);
            })
        );
    }

    if (supabasePaths.length > 0) {
        promises.push(
            supabaseStorage.deleteFiles(supabasePaths).then(() => {
                console.log(`[Storage Router] 🗑️  Freed ${supabasePaths.length} files from Supabase.`);
            }).catch(err => {
                console.error(`[Storage Router] Supabase delete error (${supabasePaths.length} files):`, err);
            })
        );
    }

    if (localPaths.length > 0) {
        const path = await import("path");
        for (const p of localPaths) {
            const filename = path.basename(p);
            promises.push(
                localStorage.deleteFile(filename).catch(err => {
                    console.error(`[Storage Router] Local delete error (${filename}):`, err);
                })
            );
        }
    }

    await Promise.allSettled(promises); // Use allSettled to never throw
}

/**
 * Track bytes after a successful upload
 */
export function trackUpload(provider: StorageProvider, bytes: number): void {
    if (bytes <= 0 || !Number.isFinite(bytes)) return;

    switch (provider) {
        case "r2":
            r2UsedBytes += bytes;
            break;
        case "supabase":
            supabaseUsedBytes += bytes;
            break;
    }
}

/**
 * Track bytes freed after a successful deletion
 */
export function trackDeletion(provider: StorageProvider, bytes: number): void {
    if (bytes <= 0 || !Number.isFinite(bytes)) return;

    switch (provider) {
        case "r2":
            r2UsedBytes = Math.max(0, r2UsedBytes - bytes);
            break;
        case "supabase":
            supabaseUsedBytes = Math.max(0, supabaseUsedBytes - bytes);
            break;
    }
}

/**
 * Reconcile tracked usage from database totals.
 * Called on server startup and periodically to correct drift.
 */
export function reconcileUsage(r2Bytes: number, supabaseBytes: number): void {
    // Validate inputs
    const safeR2 = Number.isFinite(r2Bytes) && r2Bytes >= 0 ? r2Bytes : 0;
    const safeSb = Number.isFinite(supabaseBytes) && supabaseBytes >= 0 ? supabaseBytes : 0;

    const oldR2 = r2UsedBytes;
    const oldSb = supabaseUsedBytes;
    r2UsedBytes = safeR2;
    supabaseUsedBytes = safeSb;

    if (oldR2 !== safeR2 || oldSb !== safeSb) {
        console.log(`[Storage Router] Usage reconciled:`);
        console.log(`  R2:       ${formatBytes(oldR2)} → ${formatBytes(safeR2)} / ${formatBytes(R2_MAX_BYTES)}`);
        console.log(`  Supabase: ${formatBytes(oldSb)} → ${formatBytes(safeSb)} / ${formatBytes(SUPABASE_MAX_BYTES)}`);
    }
}

/**
 * Format bytes to human-readable string
 */
function formatBytes(bytes: number): string {
    if (bytes === 0 || !Number.isFinite(bytes)) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

/**
 * Log current storage status (for startup/debugging)
 */
export function logStorageStatus(): void {
    const status = getStorageStatus();
    console.log("═══════════════════════════════════════════════════════");
    console.log("📦 STORAGE STATUS");
    console.log("═══════════════════════════════════════════════════════");

    if (status.isLocal) {
        console.log("  Mode: LOCAL DISK (development)");
    } else {
        console.log(`  ☁️  Cloudflare R2:  ${formatBytes(status.r2.usedBytes)} / ${formatBytes(status.r2.limitBytes)} (${status.r2.usedPercent}%) ${status.r2.available ? "✅" : "❌ Not configured"}`);
        console.log(`  🗄️  Supabase:      ${formatBytes(status.supabase.usedBytes)} / ${formatBytes(status.supabase.limitBytes)} (${status.supabase.usedPercent}%)`);
        console.log(`  📊 Total:         ${formatBytes(status.totalUsedBytes)} / ${formatBytes(status.totalLimitBytes)}`);
    }

    console.log("═══════════════════════════════════════════════════════");
}
