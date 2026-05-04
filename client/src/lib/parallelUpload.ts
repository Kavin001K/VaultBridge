/**
 * Parallel Upload System for VaultBridge
 * Manages concurrent chunk uploads with a controlled concurrency limit.
 */

export interface ChunkTask {
    file: File;
    chunkIndex: number;
    totalChunks: number;
    start: number;
    end: number;
    fileId: string;
    displayName: string;
}

export type UploadChunkFn = (task: ChunkTask) => Promise<void>;

export class ParallelUploadQueue {
    private queue: ChunkTask[] = [];
    private activeCount: number = 0;
    private concurrency: number;
    private onProgress: (progress: number, stats?: { speed: number, eta: number }) => void;
    private onError: (error: Error) => void;
    private isAborted: boolean = false;
    public totalTasks: number = 0;
    public completedTasks: number = 0;
    private maxRetries: number;
    private startTime: number = 0;
    private speedHistory: number[] = []; // Windowed history for accurate average
    private lastCompletedTime: number = 0;
    private currentSpeed = 0; // Bytes per second
    private activeBytes = 0; // Bytes currently being uploaded
    private readonly SPEED_WINDOW_SIZE = 10; // Number of samples for windowed average

    constructor(options: {
        concurrency?: number;
        onProgress: (progress: number, stats?: { speed: number, eta: number }) => void;
        onError: (error: Error) => void;
        maxRetries?: number;
    }) {
        this.concurrency = options.concurrency || 6;
        this.onProgress = options.onProgress;
        this.onError = options.onError;
        this.maxRetries = options.maxRetries || 10;
    }

    add(task: ChunkTask) {
        this.queue.push(task);
        this.totalTasks++;
    }

    async start(uploadFn: UploadChunkFn) {
        this.startTime = Date.now();
        this.lastCompletedTime = this.startTime;
        
        const workers = Array(Math.min(this.concurrency, this.queue.length))
            .fill(null)
            .map(() => this.worker(uploadFn));
        
        await Promise.all(workers);
    }

    private updateStats(chunkSize: number, durationMs: number) {
        const now = Date.now();
        
        if (durationMs > 0) {
            const instantSpeed = (chunkSize / durationMs) * 1000;
            
            // Push to history and keep window size
            this.speedHistory.push(instantSpeed);
            if (this.speedHistory.length > this.SPEED_WINDOW_SIZE) {
                this.speedHistory.shift();
            }

            // Calculate average from windowed history (Simple Moving Average for stability)
            this.currentSpeed = this.speedHistory.reduce((a, b) => a + b, 0) / this.speedHistory.length;
        }

        // Calculate accurate remaining bytes
        const remainingBytesInQueue = this.queue.reduce((acc, task) => acc + (task.end - task.start), 0);
        // Accurate total remaining includes queued bytes AND bytes currently in-flight
        const totalRemaining = remainingBytesInQueue + this.activeBytes;
        const eta = this.currentSpeed > 0 ? Math.ceil(totalRemaining / this.currentSpeed) : 0;

        const progress = this.totalTasks > 0 ? (this.completedTasks / this.totalTasks) * 100 : 0;

        this.onProgress(progress, {
            speed: this.currentSpeed,
            eta
        });
    }

    private async worker(uploadFn: UploadChunkFn) {
        while (this.queue.length > 0 && !this.isAborted) {
            const task = this.queue.shift()!;
            const chunkSize = task.end - task.start;
            this.activeCount++;
            this.activeBytes += chunkSize;

            let attempts = 0;
            let success = false;

            while (attempts < this.maxRetries && !success && !this.isAborted) {
                try {
                    const chunkStart = Date.now();
                    await uploadFn(task);
                    const chunkDuration = Date.now() - chunkStart;
                    
                    success = true;
                    this.completedTasks++;
                    this.activeBytes -= chunkSize;
                    
                    this.updateStats(chunkSize, chunkDuration);
                    
                } catch (error) {
                    attempts++;
                    if (attempts >= this.maxRetries) {
                        this.isAborted = true;
                        this.activeBytes -= chunkSize; // Clean up on failure
                        this.onError(error as Error);
                        break;
                    }
                    
                    const delay = Math.min(500 * Math.pow(2, attempts - 1), 10000);
                    await new Promise(r => setTimeout(r, delay));
                }
            }

            this.activeCount--;
        }
    }

    abort() {
        this.isAborted = true;
    }
}
