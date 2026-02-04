/**
 * IndexedDB File Storage
 * Persists selected files across page refreshes for better UX
 */

const DB_NAME = 'vaultbridge-file-cache';
const DB_VERSION = 1;
const STORE_NAME = 'pending-files';
const SETTINGS_STORE = 'upload-settings';

interface StoredFile {
    id: string;
    name: string;
    type: string;
    size: number;
    lastModified: number;
    data: ArrayBuffer;
    addedAt: number;
}

interface UploadSettings {
    id: string;
    expiresIn: number;
    maxDownloads: number;
}

// Open Database
function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            // Files store
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }

            // Settings store
            if (!db.objectStoreNames.contains(SETTINGS_STORE)) {
                db.createObjectStore(SETTINGS_STORE, { keyPath: 'id' });
            }
        };
    });
}

// Generate unique ID for file
function generateFileId(file: File): string {
    return `${file.name}-${file.size}-${file.lastModified}`;
}

/**
 * Save files to IndexedDB
 */
export async function saveFilesToStorage(files: File[]): Promise<void> {
    if (files.length === 0) {
        await clearStoredFiles();
        return;
    }

    try {
        // CRITICAL: Read all file buffers BEFORE starting the transaction.
        // IndexedDB transactions auto-commit when the event loop is idle,
        // so async operations like arrayBuffer() must complete first.
        const fileDataPromises = files.map(async (file) => ({
            file,
            buffer: await file.arrayBuffer()
        }));
        const fileData = await Promise.all(fileDataPromises);

        // Now start the transaction with all data ready
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);

        // Clear existing files first
        store.clear();

        // Save each file (synchronous puts, no async inside transaction)
        for (const { file, buffer } of fileData) {
            const storedFile: StoredFile = {
                id: generateFileId(file),
                name: file.name,
                type: file.type,
                size: file.size,
                lastModified: file.lastModified,
                data: buffer,
                addedAt: Date.now()
            };
            store.put(storedFile);
        }

        await new Promise<void>((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });

        db.close();
    } catch (error) {
        console.warn('[FileStorage] Failed to save files:', error);
    }
}

/**
 * Load files from IndexedDB
 */
export async function loadFilesFromStorage(): Promise<File[]> {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);

        const request = store.getAll();

        const storedFiles = await new Promise<StoredFile[]>((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });

        db.close();

        // Convert back to File objects
        const files: File[] = storedFiles.map(sf => {
            return new File([sf.data], sf.name, {
                type: sf.type,
                lastModified: sf.lastModified
            });
        });

        // Filter out files older than 24 hours (auto-cleanup)
        const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
        const validFiles = storedFiles.filter(sf => sf.addedAt > oneDayAgo);

        if (validFiles.length !== storedFiles.length) {
            // Re-save only valid files
            const validFileObjs = validFiles.map(sf =>
                new File([sf.data], sf.name, { type: sf.type, lastModified: sf.lastModified })
            );
            await saveFilesToStorage(validFileObjs);
            return validFileObjs;
        }

        return files;
    } catch (error) {
        console.warn('[FileStorage] Failed to load files:', error);
        return [];
    }
}

/**
 * Clear all stored files
 */
export async function clearStoredFiles(): Promise<void> {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.clear();

        await new Promise<void>((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });

        db.close();
    } catch (error) {
        console.warn('[FileStorage] Failed to clear files:', error);
    }
}

/**
 * Save upload settings
 */
export async function saveUploadSettings(expiresIn: number, maxDownloads: number): Promise<void> {
    try {
        const db = await openDB();
        const tx = db.transaction(SETTINGS_STORE, 'readwrite');
        const store = tx.objectStore(SETTINGS_STORE);

        const settings: UploadSettings = {
            id: 'current',
            expiresIn,
            maxDownloads
        };

        store.put(settings);

        await new Promise<void>((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });

        db.close();
    } catch (error) {
        console.warn('[FileStorage] Failed to save settings:', error);
    }
}

/**
 * Load upload settings
 */
export async function loadUploadSettings(): Promise<{ expiresIn: number; maxDownloads: number } | null> {
    try {
        const db = await openDB();
        const tx = db.transaction(SETTINGS_STORE, 'readonly');
        const store = tx.objectStore(SETTINGS_STORE);

        const request = store.get('current');

        const settings = await new Promise<UploadSettings | undefined>((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        db.close();

        if (settings) {
            return { expiresIn: settings.expiresIn, maxDownloads: settings.maxDownloads };
        }

        return null;
    } catch (error) {
        console.warn('[FileStorage] Failed to load settings:', error);
        return null;
    }
}

/**
 * Check if there are stored files
 */
export async function hasStoredFiles(): Promise<boolean> {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);

        const request = store.count();

        const count = await new Promise<number>((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        db.close();
        return count > 0;
    } catch (error) {
        return false;
    }
}
