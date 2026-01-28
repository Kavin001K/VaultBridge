/**
 * Folder Upload Component for VaultBridge
 * ========================================
 * 
 * Enables drag-and-drop folder uploads with:
 * - Recursive directory scanning
 * - Client-side ZIP compression using fflate
 * - Progress tracking during folder processing
 * - Preserves folder structure in ZIP
 * 
 * @version 1.0.0
 */

import { useState, useCallback, useRef } from 'react';
import { zipSync, strToU8 } from 'fflate';

// ============================================================================
// TYPES
// ============================================================================

export interface FolderFile {
    /** Full path within folder structure */
    path: string;
    /** File data as Uint8Array */
    data: Uint8Array;
    /** Original file name */
    name: string;
    /** File size in bytes */
    size: number;
    /** MIME type */
    type: string;
    /** Last modified timestamp */
    lastModified: number;
}

export interface FolderProcessResult {
    /** Resulting ZIP file */
    zipFile: File;
    /** Number of files processed */
    fileCount: number;
    /** Number of folders scanned */
    folderCount: number;
    /** Total uncompressed size */
    originalSize: number;
    /** Size of resulting ZIP */
    compressedSize: number;
    /** Compression ratio (0-1) */
    compressionRatio: number;
    /** Root folder name */
    folderName: string;
}

export interface FolderUploadState {
    /** Is currently processing */
    isProcessing: boolean;
    /** Processing progress (0-100) */
    progress: number;
    /** Current status message */
    statusMessage: string;
    /** Any error that occurred */
    error: string | null;
    /** Resulting ZIP file if successful */
    result: FolderProcessResult | null;
}

// ============================================================================
// FOLDER UPLOAD HOOK
// ============================================================================

/**
 * Hook for handling folder uploads
 * 
 * @example
 * ```tsx
 * const { processFolder, state } = useFolderUpload();
 * 
 * const handleDrop = async (e: DragEvent) => {
 *   const items = Array.from(e.dataTransfer.items);
 *   const entries = items.map(item => item.webkitGetAsEntry()).filter(Boolean);
 *   
 *   if (entries.length > 0) {
 *     const result = await processFolder(entries);
 *     // result.zipFile is ready for upload
 *   }
 * };
 * ```
 */
export function useFolderUpload() {
    const [state, setState] = useState<FolderUploadState>({
        isProcessing: false,
        progress: 0,
        statusMessage: '',
        error: null,
        result: null
    });

    const abortRef = useRef(false);

    /**
     * Process dropped folder entries into a ZIP file
     */
    const processFolder = useCallback(async (entries: FileSystemEntry[]): Promise<FolderProcessResult | null> => {
        if (entries.length === 0) {
            setState(prev => ({ ...prev, error: 'No entries to process' }));
            return null;
        }

        abortRef.current = false;

        setState({
            isProcessing: true,
            progress: 0,
            statusMessage: 'Scanning folder structure...',
            error: null,
            result: null
        });

        try {
            const files: FolderFile[] = [];
            let folderCount = 0;
            let totalSize = 0;

            // Recursively scan all entries
            const scanEntry = async (entry: FileSystemEntry, basePath: string = ''): Promise<void> => {
                if (abortRef.current) return;

                if (entry.isFile) {
                    const fileEntry = entry as FileSystemFileEntry;
                    const file = await new Promise<File>((resolve, reject) => {
                        fileEntry.file(resolve, reject);
                    });

                    const data = new Uint8Array(await file.arrayBuffer());
                    const path = basePath ? `${basePath}/${file.name}` : file.name;

                    files.push({
                        path,
                        data,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        lastModified: file.lastModified
                    });

                    totalSize += file.size;

                    // Update progress during scan
                    setState(prev => ({
                        ...prev,
                        statusMessage: `Scanning: ${files.length} files found...`,
                        progress: Math.min(40, (files.length / 100) * 40) // Cap at 40% during scan
                    }));

                } else if (entry.isDirectory) {
                    folderCount++;
                    const dirEntry = entry as FileSystemDirectoryEntry;
                    const reader = dirEntry.createReader();

                    // Read all entries (may need multiple reads for large folders)
                    const readAllEntries = async (): Promise<FileSystemEntry[]> => {
                        const allEntries: FileSystemEntry[] = [];
                        let batch: FileSystemEntry[];

                        do {
                            batch = await new Promise<FileSystemEntry[]>((resolve, reject) => {
                                reader.readEntries(resolve, reject);
                            });
                            allEntries.push(...batch);
                        } while (batch.length > 0);

                        return allEntries;
                    };

                    const subEntries = await readAllEntries();
                    const newPath = basePath ? `${basePath}/${entry.name}` : entry.name;

                    for (const subEntry of subEntries) {
                        await scanEntry(subEntry, newPath);
                    }
                }
            };

            // Process all dropped entries
            for (const entry of entries) {
                await scanEntry(entry);
            }

            if (files.length === 0) {
                throw new Error('No files found in the folder');
            }

            setState(prev => ({
                ...prev,
                progress: 50,
                statusMessage: `Compressing ${files.length} files...`
            }));

            // Create ZIP using fflate
            const zipData: { [path: string]: Uint8Array } = {};
            files.forEach(f => {
                zipData[f.path] = f.data;
            });

            // Compress with fflate
            const zipped = zipSync(zipData, {
                level: 6, // Balanced compression
                mtime: new Date()
            });

            setState(prev => ({
                ...prev,
                progress: 90,
                statusMessage: 'Finalizing archive...'
            }));

            // Determine folder name from first entry
            const rootName = entries[0]?.name || 'archive';
            const zipFileName = `${rootName}.zip`;

            // Create File object
            const zipBlob = new Blob([zipped], { type: 'application/zip' });
            const zipFile = new File([zipBlob], zipFileName, {
                type: 'application/zip',
                lastModified: Date.now()
            });

            const result: FolderProcessResult = {
                zipFile,
                fileCount: files.length,
                folderCount,
                originalSize: totalSize,
                compressedSize: zipFile.size,
                compressionRatio: 1 - (zipFile.size / totalSize),
                folderName: rootName
            };

            setState({
                isProcessing: false,
                progress: 100,
                statusMessage: 'Folder processed successfully!',
                error: null,
                result
            });

            return result;

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to process folder';

            setState({
                isProcessing: false,
                progress: 0,
                statusMessage: '',
                error: errorMessage,
                result: null
            });

            return null;
        }
    }, []);

    /**
     * Cancel ongoing folder processing
     */
    const cancel = useCallback(() => {
        abortRef.current = true;
        setState({
            isProcessing: false,
            progress: 0,
            statusMessage: 'Cancelled',
            error: null,
            result: null
        });
    }, []);

    /**
     * Reset state
     */
    const reset = useCallback(() => {
        abortRef.current = true;
        setState({
            isProcessing: false,
            progress: 0,
            statusMessage: '',
            error: null,
            result: null
        });
    }, []);

    return {
        processFolder,
        cancel,
        reset,
        state
    };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if an entry is a directory
 */
export function isDirectory(entry: FileSystemEntry): entry is FileSystemDirectoryEntry {
    return entry.isDirectory;
}

/**
 * Check if browser supports folder upload
 */
export function isFolderUploadSupported(): boolean {
    // Check for webkitGetAsEntry support
    const dt = new DataTransfer();
    return 'items' in dt &&
        typeof DataTransferItem !== 'undefined' &&
        'webkitGetAsEntry' in DataTransferItem.prototype;
}

/**
 * Get entries from a drop event
 */
export function getEntriesFromDrop(event: DragEvent): FileSystemEntry[] {
    if (!event.dataTransfer?.items) {
        return [];
    }

    const entries: FileSystemEntry[] = [];

    for (let i = 0; i < event.dataTransfer.items.length; i++) {
        const item = event.dataTransfer.items[i];
        if (item.kind === 'file') {
            const entry = item.webkitGetAsEntry?.();
            if (entry) {
                entries.push(entry);
            }
        }
    }

    return entries;
}

/**
 * Format size for display
 */
export function formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Format compression ratio for display
 */
export function formatCompressionRatio(ratio: number): string {
    return `${Math.round(ratio * 100)}% smaller`;
}
