/**
 * Smart Transfer Estimator
 * Uses real device/browser/network data to estimate transfer times
 */

export interface DeviceProfile {
  cores: number;
  memoryGB: number | undefined;
  browser: string;
  os: string;
  isMobile: boolean;
}

export interface TransferEstimate {
  // Times in seconds
  encryptTime: number;
  uploadTime: number;
  totalTime: number;
  // Bytes per second
  estimatedSpeed: number;
  // Human-readable
  quality: "Excellent" | "Good" | "Fair" | "Slow" | "Very Slow";
  // Display strings
  speedLabel: string;
  etaLabel: string;
  // Recommendations
  recommendedConcurrency: number;
  // Raw data
  connectionMbps: number;
  fileSizeBytes: number;
  chunkCount: number;
}

export function getDeviceProfile(): DeviceProfile {
  const ua = navigator.userAgent;
  return {
    cores: navigator.hardwareConcurrency || 4,
    memoryGB: (navigator as any).deviceMemory as number | undefined,
    browser: detectBrowser(ua),
    os: detectOS(ua),
    isMobile: /Mobi|Android|iPhone|iPad/i.test(ua),
  };
}

function detectBrowser(ua: string): string {
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Unknown";
}

function detectOS(ua: string): string {
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  return "Unknown";
}

export function estimateTransfer(
  fileSizeBytes: number,
  connectionMbps: number,
  device?: Partial<DeviceProfile>,
): TransferEstimate {
  const dp = { ...getDeviceProfile(), ...device };

  // Encryption speed: ~50-150 MB/s per core depending on browser
  // Chrome/Firefox are faster, Safari is slower
  const encryptPerCoreMbps = dp.browser === "Safari" ? 40 : dp.browser === "Firefox" ? 60 : 80;
  const encryptSpeedBps = dp.cores * encryptPerCoreMbps * 1024 * 1024;
  const encryptTime = fileSizeBytes / encryptSpeedBps;

  // Upload time: file size / (connection speed * overhead factor)
  // Overhead: ~15% for encryption overhead + HTTP headers
  const overheadFactor = 1.25;
  const effectiveSpeedBps = (connectionMbps * 1024 * 1024) / 8 / overheadFactor;
  const uploadTime = fileSizeBytes / Math.max(1, effectiveSpeedBps);

  const totalTime = encryptTime + uploadTime;

  // Quality
  let quality: TransferEstimate["quality"] = "Very Slow";
  if (connectionMbps >= 50) quality = "Excellent";
  else if (connectionMbps >= 20) quality = "Good";
  else if (connectionMbps >= 10) quality = "Fair";
  else if (connectionMbps >= 5) quality = "Slow";

  // Recommended concurrency
  let recommendedConcurrency = 4;
  if (quality === "Excellent") recommendedConcurrency = 6;
  else if (quality === "Good") recommendedConcurrency = 5;
  else if (quality === "Slow" || quality === "Very Slow") recommendedConcurrency = 2;
  // Clamp
  recommendedConcurrency = Math.min(6, Math.max(2, recommendedConcurrency));

  // Chunk count estimate
  const avgChunkSize = quality === "Very Slow" || quality === "Slow"
    ? 2 * 1024 * 1024  // 2MB chunks for slow connections
    : 5 * 1024 * 1024; // 5MB chunks for fast connections
  const chunkCount = Math.max(1, Math.ceil(fileSizeBytes / avgChunkSize));

  return {
    encryptTime,
    uploadTime,
    totalTime,
    estimatedSpeed: effectiveSpeedBps,
    quality,
    speedLabel: formatSpeedLabel(connectionMbps),
    etaLabel: formatEtaLabel(totalTime),
    recommendedConcurrency,
    connectionMbps,
    fileSizeBytes,
    chunkCount,
  };
}

function formatSpeedLabel(mbps: number): string {
  if (mbps >= 1000) return `${(mbps / 1000).toFixed(1)} Gbps`;
  if (mbps >= 1) return `${mbps.toFixed(0)} Mbps`;
  return `${(mbps * 1000).toFixed(0)} Kbps`;
}

function formatEtaLabel(seconds: number): string {
  if (!seconds || seconds <= 0 || !Number.isFinite(seconds)) return "a few seconds";
  if (seconds < 60) return `~${Math.round(seconds)} seconds`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  if (mins < 60) return secs > 0 ? `~${mins}m ${secs}s` : `~${mins} minutes`;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return remainingMins > 0 ? `~${hours}h ${remainingMins}m` : `~${hours} hours`;
}

export function getTransferSummary(estimate: TransferEstimate): string {
  const sizeLabel = formatBytes(estimate.fileSizeBytes);
  if (estimate.quality === "Excellent") return `${sizeLabel} · Should take ${estimate.etaLabel}`;
  if (estimate.quality === "Good") return `${sizeLabel} · Estimated ${estimate.etaLabel} on your connection`;
  if (estimate.quality === "Fair") return `${sizeLabel} · May take ${estimate.etaLabel} — consider smaller files`;
  return `${sizeLabel} · This might take a while on your connection (${estimate.etaLabel})`;
}

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  if (b < 1024 * 1024 * 1024) return `${(b / (1024 * 1024)).toFixed(1)} MB`;
  return `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
