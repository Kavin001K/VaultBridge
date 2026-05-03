/**
 * Semaphore-based concurrency limiter for fine-grained control over parallel operations
 * Useful for limiting Worker thread utilization and network bandwidth
 */
export class Semaphore {
  private permits: number;
  private waitQueue: Array<() => void> = [];

  constructor(permits: number) {
    this.permits = permits;
  }

  async acquire(): Promise<void> {
    if (this.permits > 0) {
      this.permits--;
      return;
    }

    return new Promise<void>((resolve) => {
      this.waitQueue.push(() => {
        this.permits--;
        resolve();
      });
    });
  }

  release(): void {
    this.permits++;
    const next = this.waitQueue.shift();
    if (next) {
      next();
    }
  }

  /**
   * Execute a function with a permit, automatically releasing it when done
   */
  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }

  /**
   * Get current number of available permits
   */
  available(): number {
    return this.permits;
  }
}

/**
 * Multi-semaphore for managing multiple resource pools (e.g., encryption workers + network bandwidth)
 */
export class MultiSemaphore {
  private semaphores: Map<string, Semaphore> = new Map();

  constructor(resourceLimits: Record<string, number>) {
    for (const [resource, limit] of Object.entries(resourceLimits)) {
      this.semaphores.set(resource, new Semaphore(limit));
    }
  }

  async acquire(...resources: string[]): Promise<() => void> {
    const semaphores = resources
      .map((r) => this.semaphores.get(r))
      .filter((s) => s !== undefined) as Semaphore[];

    for (const sem of semaphores) {
      await sem.acquire();
    }

    return () => {
      for (const sem of semaphores) {
        sem.release();
      }
    };
  }

  async run<T>(resources: string[], fn: () => Promise<T>): Promise<T> {
    const release = await this.acquire(...resources);
    try {
      return await fn();
    } finally {
      release();
    }
  }
}
