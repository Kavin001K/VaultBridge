/**
 * Simplified Upload Configuration for VaultBridge
 * ================================================
 * 
 * No chunking - files are uploaded as single encrypted blobs.
 * Lossless transfer with AES-256-GCM encryption.
 * 
 * @version 2.0.0
 */

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Maximum file size allowed (500MB)
 */
export const MAX_FILE_SIZE = 500 * 1024 * 1024;

/**
 * Maximum total upload size (all files combined)
 */
export const MAX_TOTAL_SIZE = 500 * 1024 * 1024;

// ============================================================================
// TYPES
// ============================================================================

export interface UploadConfig {
    /** Size of the file/folder in bytes */
    size: number;
    /** Whether the upload is valid (under limits) */
    isValid: boolean;
    /** Error message if invalid */
    errorMessage?: string;
    /** Formatted size string */
    formattedSize: string;
    /** Estimated upload time in seconds */
    estimatedUploadTime: number;
}

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

/**
 * Validate and get upload configuration for files
 * 
 * @param files - Array of files to upload
 * @returns UploadConfig - Configuration and validation result
 */
export function getUploadConfig(files: File[]): UploadConfig {
    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    const largestFile = Math.max(...files.map(f => f.size));

    // Check individual file size
    if (largestFile > MAX_FILE_SIZE) {
        const oversizedFile = files.find(f => f.size > MAX_FILE_SIZE);
        return {
            size: totalSize,
            isValid: false,
            errorMessage: `File "${oversizedFile?.name}" exceeds 500MB limit (${formatBytes(largestFile)})`,
            formattedSize: formatBytes(totalSize),
            estimatedUploadTime: 0
        };
    }

    // Check total size
    if (totalSize > MAX_TOTAL_SIZE) {
        return {
            size: totalSize,
            isValid: false,
            errorMessage: `Total upload size ${formatBytes(totalSize)} exceeds 500MB limit`,
            formattedSize: formatBytes(totalSize),
            estimatedUploadTime: 0
        };
    }

    // Estimate upload time (assume ~10 Mbps average)
    const estimatedTime = Math.ceil((totalSize * 8) / (10 * 1024 * 1024));

    return {
        size: totalSize,
        isValid: true,
        formattedSize: formatBytes(totalSize),
        estimatedUploadTime: estimatedTime
    };
}

/**
 * Validate a single file
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            error: `File "${file.name}" exceeds 500MB limit (${formatBytes(file.size)})`
        };
    }
    return { valid: true };
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
