/**
 * Cleanup Worker for VaultBridge
 * 
 * Runs periodically to:
 * 1. Clean up expired vaults from the ephemeral store
 * 2. Delete orphaned chunks from object storage
 */

import { storage } from "../storage";
import { log } from "../index";

// Track known storage paths for orphan detection
let lastCleanupRun = new Date();

/**
 * Main cleanup job
 */
export async function runCleanup(): Promise<void> {
    const startTime = Date.now();
    log("Starting cleanup job...", "cleanup");

    try {
        // Delegate cleanup to storage service (which now handles DB + Object Storage)
        await storage.cleanupExpiredVaults();

        const duration = Date.now() - startTime;
        log(`Cleanup complete in ${duration}ms.`, "cleanup");

        lastCleanupRun = new Date();
    } catch (error) {
        log(`Cleanup job failed: ${error}`, "cleanup");
    }
}

/**
 * Start the cleanup worker
 * Runs every 10 minutes
 */
export function startCleanupWorker(): void {
    const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

    log("Cleanup worker started. Interval: 10 minutes.", "cleanup");

    // Run immediately on startup
    runCleanup();

    // Schedule periodic runs
    setInterval(runCleanup, CLEANUP_INTERVAL_MS);
}

/**
 * Get cleanup status for health checks
 */
export function getCleanupStatus(): { lastRun: Date; isHealthy: boolean } {
    const timeSinceLastRun = Date.now() - lastCleanupRun.getTime();
    const isHealthy = timeSinceLastRun < 15 * 60 * 1000; // Should run within 15 mins

    return { lastRun: lastCleanupRun, isHealthy };
}
