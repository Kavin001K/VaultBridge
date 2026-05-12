export interface UploadProgressSnapshot {
  totalBytes: number;
  encryptedBytes: number;
  uploadedBytes: number;
  confirmedBytes: number;
  progress: number;
  speed: number;
  eta: number;
}

type Sample = {
  at: number;
  uploadedBytes: number;
};

const DEFAULT_WINDOW_MS = 6000; // 6s window for more responsiveness
const MIN_SAMPLES = 2;

export class ByteProgressTracker {
  private totalBytes: number;
  private encryptedBytes = 0;
  private uploadedBytes = 0;
  private confirmedBytes = 0;
  private samples: Sample[] = [];
  private readonly windowMs: number;
  private startTime: number;

  constructor(totalBytes: number, windowMs = DEFAULT_WINDOW_MS) {
    this.totalBytes = Math.max(0, totalBytes);
    this.windowMs = windowMs;
    this.startTime = Date.now();
    this.recordSample();
  }

  setTotalBytes(totalBytes: number) {
    this.totalBytes = Math.max(0, totalBytes);
  }

  addEncrypted(bytes: number) {
    this.encryptedBytes = Math.min(this.totalBytes, this.encryptedBytes + this.safeBytes(bytes));
  }

  addUploaded(bytes: number) {
    this.uploadedBytes = Math.min(this.totalBytes, this.uploadedBytes + this.safeBytes(bytes));
    this.recordSample();
  }

  addConfirmed(bytes: number) {
    this.confirmedBytes = Math.min(this.totalBytes, this.confirmedBytes + this.safeBytes(bytes));
  }

  snapshot(): UploadProgressSnapshot {
    const now = Date.now();
    this.pruneSamples(now);

    const weightedDone =
      this.encryptedBytes * 0.2 +
      this.uploadedBytes * 0.6 +
      this.confirmedBytes * 0.2;
    
    const progress = this.totalBytes > 0 ? (weightedDone / this.totalBytes) * 100 : 0;
    const speed = this.calculateSpeed(now);
    const remainingBytes = Math.max(0, this.totalBytes - this.uploadedBytes);

    return {
      totalBytes: this.totalBytes,
      encryptedBytes: this.encryptedBytes,
      uploadedBytes: this.uploadedBytes,
      confirmedBytes: this.confirmedBytes,
      progress: Math.max(0, Math.min(100, progress)),
      speed,
      eta: speed > 0 ? Math.ceil(remainingBytes / speed) : 0,
    };
  }

  private recordSample() {
    const now = Date.now();
    this.samples.push({ at: now, uploadedBytes: this.uploadedBytes });
    this.pruneSamples(now);
  }

  private pruneSamples(now: number) {
    const cutoff = now - this.windowMs;
    this.samples = this.samples.filter((s) => s.at >= cutoff);
    
    // Always keep at least one baseline if possible
    if (this.samples.length === 0) {
      this.samples.push({ at: now - 100, uploadedBytes: this.uploadedBytes });
    }
  }

  private calculateSpeed(now: number) {
    if (this.samples.length < MIN_SAMPLES) {
      // Not enough data yet, use average since start
      const elapsed = (now - this.startTime) / 1000;
      return elapsed > 0.5 ? this.uploadedBytes / elapsed : 0;
    }

    const first = this.samples[0];
    const last = this.samples[this.samples.length - 1];
    
    const elapsedSeconds = (last.at - first.at) / 1000;
    
    // If the last sample is old, speed is dropping
    const timeSinceLastSample = (now - last.at) / 1000;
    
    if (elapsedSeconds <= 0.01) return 0;
    
    let currentSpeed = (last.uploadedBytes - first.uploadedBytes) / elapsedSeconds;
    
    // Apply decay if we haven't seen data in a while
    if (timeSinceLastSample > 1.5) {
      const decay = Math.max(0, 1 - (timeSinceLastSample - 1.5) / 3);
      currentSpeed *= decay;
    }

    return Math.max(0, currentSpeed);
  }

  private safeBytes(bytes: number) {
    return Number.isFinite(bytes) && bytes > 0 ? bytes : 0;
  }
}
