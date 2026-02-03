import { useCallback, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, File as FileIcon, X, AlertCircle, FolderArchive, Loader2, CheckCircle2, CloudOff, HardDrive } from "lucide-react";
import { zip, type Zippable } from "fflate";
import { saveFilesToStorage, loadFilesFromStorage, clearStoredFiles } from "@/lib/fileStorage";

interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  disabled?: boolean;
  onDragStateChange?: (isDragging: boolean) => void;
}

export function FileDropzone({ onFilesSelected, disabled, onDragStateChange }: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [persistenceStatus, setPersistenceStatus] = useState<'idle' | 'saving' | 'saved' | 'restored' | 'error'>('idle');
  const isInitialMount = useRef(true);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load persisted files on mount
  useEffect(() => {
    const loadPersistedFiles = async () => {
      try {
        const storedFiles = await loadFilesFromStorage();
        if (storedFiles.length > 0) {
          setSelectedFiles(storedFiles);
          onFilesSelected(storedFiles);
          setPersistenceStatus('restored');

          // Clear the 'restored' status after 3 seconds
          setTimeout(() => setPersistenceStatus('idle'), 3000);
        }
      } catch (error) {
        console.warn('[FileDropzone] Failed to load persisted files:', error);
      }
    };

    loadPersistedFiles();
  }, []); // Empty deps - only run on mount

  // Save files to IndexedDB when they change (debounced)
  useEffect(() => {
    // Skip initial mount to avoid clearing storage
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Debounce save to avoid excessive writes
    saveTimeoutRef.current = setTimeout(async () => {
      try {
        setPersistenceStatus('saving');
        await saveFilesToStorage(selectedFiles);
        setPersistenceStatus(selectedFiles.length > 0 ? 'saved' : 'idle');

        // Auto-clear 'saved' status after 2 seconds
        if (selectedFiles.length > 0) {
          setTimeout(() => setPersistenceStatus('idle'), 2000);
        }
      } catch (error) {
        console.warn('[FileDropzone] Failed to persist files:', error);
        setPersistenceStatus('error');
      }
    }, 500);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [selectedFiles]);

  // Notify parent of drag state changes
  useEffect(() => {
    onDragStateChange?.(isDragging);
  }, [isDragging, onDragStateChange]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const [isScanning, setIsScanning] = useState(false);

  // Helper to read FileEntry
  const scanEntry = (entry: any): Promise<{ [path: string]: File }> => {
    return new Promise((resolve) => {
      if (entry.isFile) {
        entry.file((file: File) => {
          resolve({ [entry.fullPath]: file });
        });
      } else if (entry.isDirectory) {
        const reader = entry.createReader();
        const readEntries = () => {
          reader.readEntries(async (entries: any[]) => {
            if (entries.length === 0) {
              resolve({});
              return;
            }
            const promises = entries.map(e => scanEntry(e));
            const results = await Promise.all(promises);
            const combined = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});

            // Recursively read more if limit not reached (handled by browser usually but readEntries might need loop)
            // Simplified for standard cases
            resolve(combined);
          });
        };
        readEntries();
      } else {
        resolve({});
      }
    });
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const items = e.dataTransfer.items;
    if (!items || items.length === 0) return;

    // Check for directory
    let hasDirectory = false;
    const entries: any[] = [];
    for (let i = 0; i < items.length; i++) {
      const entry = items[i].webkitGetAsEntry();
      if (entry) {
        entries.push(entry);
        if (entry.isDirectory) hasDirectory = true;
      }
    }

    if (hasDirectory) {
      setIsScanning(true);
      try {
        const allFiles: { [path: string]: File } = {};

        // Scan Recursively
        for (const entry of entries) {
          const result = await scanEntry(entry);
          Object.assign(allFiles, result);
        }

        // Create Zip Structure
        const zipData: Zippable = {};
        for (const [fullPath, file] of Object.entries(allFiles)) {
          // Remove leading slash for zip path
          const zipPath = fullPath.startsWith('/') ? fullPath.slice(1) : fullPath;
          const buffer = new Uint8Array(await file.arrayBuffer());
          zipData[zipPath] = buffer;
        }

        // Zip It
        zip(zipData, { level: 6 }, (err, data) => {
          if (err) {
            console.error("Zipping failed", err);
            setIsScanning(false);
            return;
          }

          // Create Archive File
          const zipFile = new File([data as any], "archive.zip", { type: "application/zip" });
          setSelectedFiles([zipFile]);
          onFilesSelected([zipFile]);
          setIsScanning(false);
        });
      } catch (e) {
        console.error("Folder scan failed", e);
        setIsScanning(false);
      }
    } else {
      // Standard File Drop
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const newFiles = Array.from(e.dataTransfer.files);
        setSelectedFiles(newFiles);
        onFilesSelected(newFiles);
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(newFiles);
      onFilesSelected(newFiles);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
  };

  const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

  return (
    <div className="w-full space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${isDragging
            ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]"
            : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <input
          type="file"
          multiple
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          onChange={handleFileInput}
          disabled={disabled}
        />

        <div className="w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {isScanning ? (
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          ) : isDragging ? (
            <FolderArchive className="w-8 h-8 text-primary" />
          ) : (
            <UploadCloud className="w-8 h-8 text-muted-foreground" />
          )}
        </div>

        <h3 className="text-lg font-semibold mb-1">
          {isDragging ? "Drop folder or files" : isScanning ? "Zipping..." : "Drag & drop files or folders here"}
        </h3>
        <p className="text-sm text-muted-foreground">
          or click to browse from your device
        </p>
        <p className="text-xs text-muted-foreground mt-4 font-mono">
          Max file size: 500 MB
        </p>
      </div>

      <AnimatePresence>
        {selectedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            {/* Header Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground">
                  Selected Files ({selectedFiles.length})
                </span>

                {/* Persistence Status Indicator */}
                <AnimatePresence mode="wait">
                  {persistenceStatus === 'restored' && (
                    <motion.div
                      key="restored"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20"
                    >
                      <HardDrive className="w-3 h-3 text-blue-400" />
                      <span className="text-[10px] font-mono text-blue-400">Restored</span>
                    </motion.div>
                  )}
                  {persistenceStatus === 'saving' && (
                    <motion.div
                      key="saving"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20"
                    >
                      <Loader2 className="w-3 h-3 text-amber-400 animate-spin" />
                      <span className="text-[10px] font-mono text-amber-400">Saving...</span>
                    </motion.div>
                  )}
                  {persistenceStatus === 'saved' && (
                    <motion.div
                      key="saved"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] font-mono text-emerald-400">Saved</span>
                    </motion.div>
                  )}
                  {persistenceStatus === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20"
                    >
                      <CloudOff className="w-3 h-3 text-red-400" />
                      <span className="text-[10px] font-mono text-red-400">Error</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground">
                  {(totalSize / (1024 * 1024)).toFixed(2)} MB
                </span>
                {!disabled && selectedFiles.length > 1 && (
                  <button
                    onClick={async () => {
                      setSelectedFiles([]);
                      onFilesSelected([]);
                      await clearStoredFiles();
                    }}
                    className="text-[10px] font-mono uppercase tracking-wider text-red-400/70 hover:text-red-400 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Info Banner for Restored Files */}
            {persistenceStatus === 'restored' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10"
              >
                <HardDrive className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-xs text-blue-300">
                  Files restored from your last session. Ready to encrypt!
                </p>
              </motion.div>
            )}

            {/* File List */}
            {selectedFiles.map((file, idx) => (
              <motion.div
                key={`${file.name}-${idx}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-background rounded-md">
                    <FileIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="truncate">
                    <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>

                {!disabled && (
                  <button
                    onClick={() => removeFile(idx)}
                    className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
