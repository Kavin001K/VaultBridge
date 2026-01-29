import { useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, File as FileIcon, X, AlertCircle, FolderArchive, Loader2 } from "lucide-react";
import { zip, type Zippable } from "fflate";

interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  disabled?: boolean;
  onDragStateChange?: (isDragging: boolean) => void;
}

export function FileDropzone({ onFilesSelected, disabled, onDragStateChange }: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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
            className="space-y-2"
          >
            <div className="flex justify-between items-center text-xs uppercase tracking-wider font-mono text-muted-foreground mb-2">
              <span>Selected Files ({selectedFiles.length})</span>
              <span>{(totalSize / (1024 * 1024)).toFixed(2)} MB Total</span>
            </div>

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
