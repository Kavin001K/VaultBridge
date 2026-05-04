
/**
 * VaultBridge Encryption Worker Manager
 * Offloads AES-256-GCM encryption and Brotli compression to background threads.
 */

export interface WorkerJob {
    id: string;
    type: 'encrypt' | 'compress_and_encrypt';
    data: ArrayBuffer;
    key: CryptoKey;
}

export interface WorkerResponse {
    type: 'success' | 'error';
    id: string;
    iv?: Uint8Array;
    encryptedData?: ArrayBuffer;
    error?: string;
    originalSize?: number;
    compressedSize?: number;
}

class EncryptionWorkerManager {
    private workers: Worker[] = [];
    private maxWorkers: number;
    private jobQueue: { job: WorkerJob; resolve: (res: any) => void; reject: (err: any) => void }[] = [];
    private activeJobs = new Map<string, { resolve: (res: any) => void; reject: (err: any) => void }>();

    constructor(maxWorkers = 4) {
        this.maxWorkers = maxWorkers;
    }

    private createWorker() {
        // Vite-compatible worker initialization
        const worker = new Worker(new URL('../../encryption.worker.ts', import.meta.url), {
            type: 'module'
        });

        worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
            const { id, type, error, ...result } = e.data;
            const handlers = this.activeJobs.get(id);

            if (handlers) {
                this.activeJobs.delete(id);
                if (type === 'success') {
                    handlers.resolve(result);
                } else {
                    handlers.reject(new Error(error || 'Worker execution failed'));
                }
                this.processQueue();
            }
        };

        return worker;
    }

    async runJob(type: 'encrypt' | 'compress_and_encrypt', data: ArrayBuffer, key: CryptoKey): Promise<{ iv: Uint8Array; encryptedData: ArrayBuffer; originalSize?: number; compressedSize?: number }> {
        const id = Math.random().toString(36).substring(7);

        return new Promise((resolve, reject) => {
            this.jobQueue.push({
                job: { id, type, data, key },
                resolve,
                reject
            });
            this.processQueue();
        });
    }

    private processQueue() {
        while (this.workers.length < this.maxWorkers && this.jobQueue.length > 0) {
            const worker = this.createWorker();
            this.workers.push(worker);
        }

        // Simple round-robin or first available (here we just spawn up to max and use them)
        // For a more robust pool, we'd reuse workers. Let's reuse them.
        
        if (this.jobQueue.length === 0) return;

        // In this simple implementation, we'll use a pool of persistent workers
        // Let's refactor to reuse workers.
    }
}

// Re-implementing with persistent pool
class PersistentWorkerPool {
    private workers: { worker: Worker; busy: boolean }[] = [];
    private queue: { type: any; data: ArrayBuffer; key: CryptoKey; resolve: any; reject: any; id: string }[] = [];
    private maxWorkers: number;

    constructor(maxWorkers = navigator.hardwareConcurrency || 4) {
        this.maxWorkers = Math.min(maxWorkers, 4); // Cap at 4 for stability
    }

    private getAvailableWorker() {
        const workerObj = this.workers.find(w => !w.busy);
        if (workerObj) return workerObj;

        if (this.workers.length < this.maxWorkers) {
            const worker = new Worker(new URL('../../encryption.worker.ts', import.meta.url), {
                type: 'module'
            });
            const newWorkerObj = { worker, busy: false };
            this.workers.push(newWorkerObj);
            return newWorkerObj;
        }

        return null;
    }

    async encrypt(data: ArrayBuffer, key: CryptoKey): Promise<{ iv: Uint8Array; encryptedData: ArrayBuffer }> {
        return this.enqueue('encrypt', data, key);
    }

    async compressAndEncrypt(data: ArrayBuffer, key: CryptoKey): Promise<{ iv: Uint8Array; encryptedData: ArrayBuffer; originalSize: number; compressedSize: number }> {
        return this.enqueue('compress_and_encrypt', data, key);
    }

    private async enqueue(type: any, data: ArrayBuffer, key: CryptoKey): Promise<any> {
        const id = Math.random().toString(36).substring(7);
        return new Promise((resolve, reject) => {
            this.queue.push({ type, data, key, resolve, reject, id });
            this.process();
        });
    }

    private process() {
        const workerObj = this.getAvailableWorker();
        if (!workerObj || this.queue.length === 0) return;

        const task = this.queue.shift()!;
        workerObj.busy = true;

        const { worker } = workerObj;

        const handler = (e: MessageEvent) => {
            if (e.data.id === task.id) {
                worker.removeEventListener('message', handler);
                workerObj.busy = false;
                
                if (e.data.type === 'success') {
                    task.resolve(e.data);
                } else {
                    task.reject(new Error(e.data.error));
                }
                this.process();
            }
        };

        worker.addEventListener('message', handler);
        worker.postMessage({
            type: task.type,
            data: task.data,
            key: task.key,
            id: task.id
        }, [task.data]); // Transfer the buffer
    }
}

export const workerPool = new PersistentWorkerPool();
