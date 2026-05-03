export interface UploadSettings {
  bandwidthBps: number;
  latencyMs: number;
  chunkSize: number;
  parallelUploads: number;
  workerCount: number;
}

export interface EncryptionResult {
  iv: Uint8Array;
  encryptedData: ArrayBuffer;
  compressedSize?: number;
  originalSize?: number;
}

export interface UploadProgressCallbacks {
  onFileProgress?: (fileName: string, percent: number) => void;
  onTotalProgress?: (bytesProcessed: number, totalBytes: number) => void;
  onStatus?: (status: string) => void;
}

export function estimateNetworkParameters(): UploadSettings {
  const connection = (navigator as any).connection;
  const downlinkMbps = connection?.downlink || 10;
  const effectiveType = connection?.effectiveType || "4g";
  const bandwidthBps = Math.max(1e6, downlinkMbps * 1_000_000);
  const latencyMs = estimateLatencyMs(effectiveType);
  const minSize = 524_288;
  const maxSize = 33_554_432;
  const chunkSize = clamp(Math.round((bandwidthBps * latencyMs) / 8000), minSize, maxSize);
  const hardware = Math.max(1, navigator.hardwareConcurrency || 4);
  const parallelUploads = Math.max(1, Math.min(Math.floor(bandwidthBps / (chunkSize * 8)) || 1, hardware, 6));
  const workerCount = Math.max(1, Math.min(hardware - 1, 4));

  return { bandwidthBps, latencyMs, chunkSize, parallelUploads, workerCount };
}

function estimateLatencyMs(effectiveType: string): number {
  switch (effectiveType) {
    case "slow-2g":
      return 300;
    case "2g":
      return 200;
    case "3g":
      return 120;
    case "4g":
    default:
      return 80;
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export async function sampleFileEntropy(file: File, sampleSize: number = 64 * 1024): Promise<number> {
  const slice = file.slice(0, Math.min(sampleSize, file.size));
  const arrayBuffer = await slice.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  return calculateShannonEntropy(bytes);
}

function calculateShannonEntropy(data: Uint8Array): number {
  if (!data.length) return 0;

  const counts = new Uint32Array(256);
  for (let i = 0; i < data.length; i++) {
    counts[data[i]]++;
  }

  const entropy = Array.from(counts).reduce((acc, count) => {
    if (count === 0) return acc;
    const p = count / data.length;
    return acc - p * Math.log2(p);
  }, 0);

  return entropy;
}

export function shouldCompressFile(entropy: number, bandwidthBps: number, fileSize: number): boolean {
  return entropy < 6.5 && bandwidthBps < 5_000_000 && fileSize > 50_000;
}

export function createConcurrencyLimiter(maxConcurrency: number) {
  let active = 0;
  const queue: Array<() => void> = [];

  const next = () => {
    if (queue.length === 0 || active >= maxConcurrency) return;
    active += 1;
    const resolve = queue.shift();
    resolve?.();
  };

  return async function <T>(work: () => Promise<T>): Promise<T> {
    if (active >= maxConcurrency) {
      await new Promise<void>((resolve) => queue.push(resolve));
    } else {
      active += 1;
    }

    try {
      return await work();
    } finally {
      active -= 1;
      next();
    }
  };
}

export class EncryptionWorkerPool {
  private workers: Worker[];
  private requestMap = new Map<number, {
    resolve: (value: EncryptionResult) => void;
    reject: (error: unknown) => void;
  }>;
  private nextId = 1;
  private roundRobin = 0;

  constructor(workerCount: number) {
    this.workers = Array.from({ length: workerCount }, () => this.createWorker());
  }

  private createWorker() {
    const worker = new Worker(new URL("../encryption.worker.ts", import.meta.url), { type: "module" });
    worker.onmessage = (event: MessageEvent) => {
      const { id, type, iv, encryptedData, error } = event.data;
      const request = this.requestMap.get(id);
      if (!request) return;
      this.requestMap.delete(id);

      if (type === "encrypt_success") {
        request.resolve({ iv, encryptedData });
      } else if (type === "error") {
        request.reject(new Error(error || "Encryption worker failed"));
      }
    };
    return worker;
  }

  async encrypt(data: ArrayBuffer, key: CryptoKey, compress: boolean): Promise<EncryptionResult> {
    const id = this.nextId++;
    const worker = this.workers[this.roundRobin];
    this.roundRobin = (this.roundRobin + 1) % this.workers.length;

    return new Promise<EncryptionResult>((resolve, reject) => {
      this.requestMap.set(id, { resolve, reject });
      worker.postMessage(
        {
          type: compress ? "compress_and_encrypt" : "encrypt",
          data,
          key,
          id,
        },
        [data]
      );
    });
  }

  terminate() {
    this.workers.forEach((worker) => worker.terminate());
  }
}

export function combineIvAndEncrypted(result: EncryptionResult): Uint8Array {
  const iv = result.iv;
  const encryptedData = new Uint8Array(result.encryptedData);
  const combined = new Uint8Array(iv.byteLength + encryptedData.byteLength);
  combined.set(iv, 0);
  combined.set(encryptedData, iv.byteLength);
  return combined;
}

export async function uploadChunkBinary(
  uploadUrl: string,
  body: ArrayBuffer | Uint8Array,
  signal?: AbortSignal
): Promise<void> {
  const response = await fetch(uploadUrl, {
    method: "PUT",
    body,
    signal,
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
  }
}
