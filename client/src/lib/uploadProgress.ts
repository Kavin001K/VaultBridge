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

const DEFAULT_WINDOW_MS = 8000;

export class ByteProgressTracker {
  private totalBytes: number;
  private encryptedBytes = 0;
  private uploadedBytes = 0;
  private confirmedBytes = 0;
  private samples: Sample[] = [];
  private readonly windowMs: number;

  constructor(totalBytes: number, windowMs = DEFAULT_WINDOW_MS) {
    this.totalBytes = Math.max(0, totalBytes);
    this.windowMs = windowMs;
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
    const weightedDone =
      this.encryptedBytes * 0.2 +
      this.uploadedBytes * 0.6 +
      this.confirmedBytes * 0.2;
    const progress = this.totalBytes > 0 ? (weightedDone / this.totalBytes) * 100 : 0;
    const speed = this.calculateSpeed();
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
    this.samples = this.samples.filter((sample) => now - sample.at <= this.windowMs);
    if (this.samples.length === 1) {
      this.samples.unshift({ at: now - 1, uploadedBytes: this.uploadedBytes });
    }
  }

  private calculateSpeed() {
    if (this.samples.length < 2) return 0;
    const first = this.samples[0];
    const last = this.samples[this.samples.length - 1];
    const elapsedSeconds = Math.max(0.001, (last.at - first.at) / 1000);
    return Math.max(0, (last.uploadedBytes - first.uploadedBytes) / elapsedSeconds);
  }

  private safeBytes(bytes: number) {
    return Number.isFinite(bytes) && bytes > 0 ? bytes : 0;
  }
}
