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

export const localStorage = {
    async uploadFile(filename: string, fileStream: any) {
        const filePath = path.join(UPLOAD_DIR, filename);
        const writeStream = createWriteStream(filePath);
        await pipeline(fileStream, writeStream);
        return { path: filePath };
    },

    async downloadFile(filename: string) {
        const filePath = path.join(UPLOAD_DIR, filename);
        if (!fs.existsSync(filePath)) {
            throw new Error("File not found on local disk");
        }
        return createReadStream(filePath);
    },

    async deleteFile(filename: string) {
        const filePath = path.join(UPLOAD_DIR, filename);
        if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath);
        }
    },

    // Basic cleanup for old files
    async cleanupOldFiles() {
        console.log("[Local Storage] Cleanup logic placeholder");
    }
};
