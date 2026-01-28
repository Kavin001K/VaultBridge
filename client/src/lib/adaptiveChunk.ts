/**
 * Adaptive Chunking System for VaultBridge
 * =========================================
 * 
 * Dynamically determines optimal chunk sizes based on:
 * - File size (no chunking for files < 50MB)
 * - Network connection speed
 * - Device memory constraints
 * 
 * This reduces HTTP overhead for small files while ensuring
 * large files are chunked appropriately for the connection.
 * 
 * @version 1.0.0
 */

import { measureConnectionSpeed, type ConnectionInfo } from './connectionSpeed';

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Minimum chunk size (1MB) - prevents excessive HTTP requests
 */
export const MIN_CHUNK_SIZE = 1 * 1024 * 1024;

/**
 * Maximum chunk size (50MB) - prevents memory issues
 */
export const MAX_CHUNK_SIZE = 50 * 1024 * 1024;

/**
 * Files under this threshold are uploaded as a single payload
 */
export const NO_CHUNK_THRESHOLD = 50 * 1024 * 1024;

/**
 * Default chunk size when connection speed cannot be determined
 */
export const DEFAULT_CHUNK_SIZE = 5 * 1024 * 1024;

// ============================================================================
// TYPES
// ============================================================================

export interface ChunkConfig {
    /** Optimal chunk size in bytes */
    chunkSize: number;
    /** Whether file should be chunked at all */
    shouldChunk: boolean;
    /** Estimated number of chunks */
    estimatedChunks: number;
    /** Estimated upload time in seconds */
    estimatedUploadTime: number;
    /** Connection speed used for calculation (Mbps) */
    connectionSpeedMbps: number;
    /** Recommendation message */
    recommendation: string;
}

export interface AdaptiveChunkOptions {
    /** Force a specific chunk size (overrides adaptive logic) */
    forceChunkSize?: number;
    /** Always chunk regardless of file size */
    alwaysChunk?: boolean;
    /** Minimum connection speed to assume (Mbps) */
    minConnectionSpeed?: number;
}

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

/**
 * Calculate optimal chunk configuration for a file
 * 
 * @param fileSize - Size of the file in bytes
 * @param options - Optional configuration overrides
 * @returns Promise<ChunkConfig> - Optimal chunking configuration
 * 
 * @example
 * ```typescript
 * const config = await getOptimalChunkConfig(file.size);
 * if (config.shouldChunk) {
 *   // Upload in chunks
 *   for (let i = 0; i < file.size; i += config.chunkSize) {
 *     const chunk = file.slice(i, i + config.chunkSize);
 *     await uploadChunk(chunk, i / config.chunkSize);
 *   }
 * } else {
 *   // Upload as single file
 *   await uploadSingleFile(file);
 * }
 * ```
 */
export async function getOptimalChunkConfig(
    fileSize: number,
    options: AdaptiveChunkOptions = {}
): Promise<ChunkConfig> {
    const { forceChunkSize, alwaysChunk = false, minConnectionSpeed = 1 } = options;

    // If chunk size is forced, use it
    if (forceChunkSize) {
        const chunkSize = Math.max(MIN_CHUNK_SIZE, Math.min(MAX_CHUNK_SIZE, forceChunkSize));
        return createConfig(fileSize, chunkSize, 10, true);
    }

    // For small files, no chunking unless forced
    if (!alwaysChunk && fileSize <= NO_CHUNK_THRESHOLD) {
        return {
            chunkSize: fileSize,
            shouldChunk: false,
            estimatedChunks: 1,
            estimatedUploadTime: estimateTime(fileSize, 10),
            connectionSpeedMbps: 10,
            recommendation: 'File is small enough for single-request upload (optimal performance)'
        };
    }

    // Measure connection speed
    let connectionInfo: ConnectionInfo;
    try {
        connectionInfo = await measureConnectionSpeed();
    } catch (e) {
        console.warn('[AdaptiveChunk] Could not measure connection, using defaults');
        connectionInfo = {
            speedMbps: 10,
            type: 'unknown',
            effectiveType: '4g',
            isReliable: false,
            method: 'fallback'
        };
    }

    const speedMbps = Math.max(connectionInfo.speedMbps, minConnectionSpeed);

    // Calculate optimal chunk size based on connection speed
    const chunkSize = calculateChunkSize(speedMbps, connectionInfo);

    return createConfig(fileSize, chunkSize, speedMbps, true);
}

/**
 * Calculate chunk size based on connection speed
 */
function calculateChunkSize(speedMbps: number, info: ConnectionInfo): number {
    let chunkSize: number;

    // Slower connections = smaller chunks (better for resumability)
    // Faster connections = larger chunks (less HTTP overhead)
    if (speedMbps < 2) {
        // Very slow (< 2 Mbps): 1MB chunks
        chunkSize = 1 * 1024 * 1024;
    } else if (speedMbps < 5) {
        // Slow (2-5 Mbps): 2MB chunks
        chunkSize = 2 * 1024 * 1024;
    } else if (speedMbps < 10) {
        // Medium-slow (5-10 Mbps): 5MB chunks
        chunkSize = 5 * 1024 * 1024;
    } else if (speedMbps < 25) {
        // Medium (10-25 Mbps): 10MB chunks
        chunkSize = 10 * 1024 * 1024;
    } else if (speedMbps < 50) {
        // Fast (25-50 Mbps): 15MB chunks
        chunkSize = 15 * 1024 * 1024;
    } else if (speedMbps < 100) {
        // Very fast (50-100 Mbps): 20MB chunks
        chunkSize = 20 * 1024 * 1024;
    } else {
        // Ultra-fast (100+ Mbps): 25MB chunks
        chunkSize = 25 * 1024 * 1024;
    }

    // Adjust for connection reliability
    if (!info.isReliable) {
        // Use smaller chunks for unreliable connections
        chunkSize = Math.min(chunkSize, 5 * 1024 * 1024);
    }

    // If on cellular, be more conservative
    if (info.type === 'cellular') {
        chunkSize = Math.min(chunkSize, 5 * 1024 * 1024);
    }

    // Clamp to bounds
    return Math.max(MIN_CHUNK_SIZE, Math.min(MAX_CHUNK_SIZE, chunkSize));
}

/**
 * Create a ChunkConfig object
 */
function createConfig(
    fileSize: number,
    chunkSize: number,
    speedMbps: number,
    shouldChunk: boolean
): ChunkConfig {
    const estimatedChunks = shouldChunk ? Math.ceil(fileSize / chunkSize) : 1;
    const estimatedTime = estimateTime(fileSize, speedMbps);

    let recommendation: string;
    if (!shouldChunk) {
        recommendation = 'Single-request upload for optimal performance';
    } else if (estimatedChunks <= 5) {
        recommendation = 'Moderate chunking for balanced performance and reliability';
    } else if (estimatedChunks <= 20) {
        recommendation = 'Multi-chunk upload for large file with resumability';
    } else {
        recommendation = 'Extended chunking for very large file - consider stable connection';
    }

    return {
        chunkSize,
        shouldChunk,
        estimatedChunks,
        estimatedUploadTime: estimatedTime,
        connectionSpeedMbps: speedMbps,
        recommendation
    };
}

/**
 * Estimate upload time in seconds
 */
function estimateTime(fileSize: number, speedMbps: number): number {
    // Convert file size to megabits
    const fileSizeMbits = (fileSize * 8) / (1024 * 1024);
    // Basic estimate + overhead for encryption and HTTP
    const overhead = 1.3; // 30% overhead estimate
    return Math.ceil((fileSizeMbits / speedMbps) * overhead);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format bytes to human-readable string
 */
export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Format seconds to human-readable duration
 */
export function formatDuration(seconds: number): string {
    if (seconds < 60) {
        return `${seconds} seconds`;
    } else if (seconds < 3600) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return secs > 0 ? `${mins}m ${secs}s` : `${mins} minutes`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        return mins > 0 ? `${hours}h ${mins}m` : `${hours} hours`;
    }
}

/**
 * Get a human-friendly chunk size recommendation
 */
export function getChunkRecommendation(config: ChunkConfig): string {
    const chunkSizeStr = formatBytes(config.chunkSize);
    const timeStr = formatDuration(config.estimatedUploadTime);

    if (!config.shouldChunk) {
        return `Upload as single file (~${timeStr} estimated)`;
    }

    return `${config.estimatedChunks} chunks of ${chunkSizeStr} (~${timeStr} estimated)`;
}
