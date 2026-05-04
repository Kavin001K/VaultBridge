/**
 * Cleanup Worker for VaultBridge
 * 
 * Runs periodically to:
 * 1. Clean up expired vaults from the ephemeral store
 * 2. Delete orphaned chunks from object storage
 */

import { taskQueue } from "../lib/queue";
import { log } from "../index";

// Track known storage status for health checks
let lastQueuePush = new Date();

/**
 * Main cleanup job - now just pushes to the resilient queue
 */
export async function runCleanup(): Promise<void> {
    log("Pushing cleanup job to task queue...", "cleanup");
    await taskQueue.add("cleanup_orphans", {});
    lastQueuePush = new Date();
}

/**
 * Start the cleanup worker
 * Runs every 5 minutes (reduced interval as it only pushes to queue)
 */
export function startCleanupWorker(): void {
    const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; 

    log("Cleanup scheduler started (Queue-based).", "cleanup");

    // Run immediately on startup
    runCleanup();

    // Schedule periodic pushes
    setInterval(runCleanup, CLEANUP_INTERVAL_MS);
}

/**
 * Get cleanup status for health checks
 */
export function getCleanupStatus(): { lastRun: Date; isHealthy: boolean } {
    const timeSinceLastRun = Date.now() - lastQueuePush.getTime();
    const isHealthy = timeSinceLastRun < 15 * 60 * 1000; // Should run within 15 mins

    return { lastRun: lastQueuePush, isHealthy };
}
