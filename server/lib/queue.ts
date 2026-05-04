import { EventEmitter } from "events";
import { storage } from "../storage";
import { log } from "../index";

/**
 * VaultBridge Task Queue (Mimics BullMQ pattern)
 * Handles high-latency operations like physical file deletion 
 * off the main request thread.
 */

type JobType = "burn_vault" | "cleanup_orphans";

interface Job {
    id: string;
    type: JobType;
    data: any;
    attempts: number;
    maxAttempts: number;
}

class TaskQueue extends EventEmitter {
    private queue: Job[] = [];
    private isProcessing: boolean = false;
    private maxConcurrent: number = 2;
    private activeCount: number = 0;

    constructor() {
        super();
        this.on("job_added", () => this.processNext());
    }

    /**
     * Add a job to the queue
     */
    async add(type: JobType, data: any, options = { maxAttempts: 3 }) {
        const job: Job = {
            id: Math.random().toString(36).substring(7),
            type,
            data,
            attempts: 0,
            maxAttempts: options.maxAttempts
        };

        this.queue.push(job);
        log(`Job added to queue: ${type} (${job.id})`, "queue");
        this.emit("job_added");
        return job;
    }

    /**
     * Process next available jobs
     */
    private async processNext() {
        if (this.activeCount >= this.maxConcurrent || this.queue.length === 0) {
            return;
        }

        const job = this.queue.shift()!;
        this.activeCount++;

        try {
            await this.processJob(job);
            log(`Job completed: ${job.type} (${job.id})`, "queue");
        } catch (error) {
            log(`Job failed: ${job.type} (${job.id}) - Attempt ${job.attempts + 1}`, "queue");
            
            if (job.attempts < job.maxAttempts) {
                job.attempts++;
                this.queue.push(job); // Retry
            } else {
                log(`Job failed permanently: ${job.type} (${job.id})`, "queue");
            }
        } finally {
            this.activeCount--;
            this.processNext();
        }
    }

    /**
     * Job Processor
     */
    private async processJob(job: Job) {
        switch (job.type) {
            case "burn_vault":
                const { vaultId } = job.data;
                log(`Burning vault resources for ${vaultId}...`, "worker");
                await storage.deleteVault(vaultId);
                break;
            
            case "cleanup_orphans":
                log(`Running system-wide orphan cleanup...`, "worker");
                await storage.cleanupExpiredVaults();
                break;

            default:
                throw new Error(`Unknown job type: ${job.type}`);
        }
    }

    /**
     * Get queue status
     */
    getStatus() {
        return {
            pending: this.queue.length,
            active: this.activeCount,
            totalProcessed: 0 // In-memory only for now
        };
    }
}

export const taskQueue = new TaskQueue();
