import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

// This folder will be mapped to your physical hard drive via Docker
const UPLOAD_DIR = path.resolve(process.cwd(), 'storage_data');

// Ensure directory exists on startup
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

/**
 * Sanitize and validate a file path to prevent path traversal attacks.
 * Ensures the resolved path is always within UPLOAD_DIR.
 */
function safePath(filename: string): string {
    // Remove null bytes and normalize
    const sanitized = filename.replace(/\0/g, '');
    const resolved = path.resolve(UPLOAD_DIR, sanitized);
    
    // SECURITY: Ensure the resolved path is within UPLOAD_DIR
    if (!resolved.startsWith(UPLOAD_DIR + path.sep) && resolved !== UPLOAD_DIR) {
        throw new Error("Path traversal detected: access denied");
    }
    
    return resolved;
}

export const localStorage = {
    async uploadFile(filename: string, fileStream: any) {
        const filePath = safePath(filename);

        // Ensure parent directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const writeStream = createWriteStream(filePath);
        await pipeline(fileStream, writeStream);
        return { path: filePath };
    },

    async downloadFile(filename: string) {
        const filePath = safePath(filename);
        if (!fs.existsSync(filePath)) {
            throw new Error("File not found on local disk");
        }
        return createReadStream(filePath);
    },

    async deleteFile(filename: string) {
        const filePath = safePath(filename);
        if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath);
        }
    },

    // Basic cleanup for old files
    async cleanupOldFiles() {
        console.log("[Local Storage] Cleanup logic placeholder");
    }
};
