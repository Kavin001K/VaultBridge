import { useEffect, useState, useRef } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import {
  Unlock, File, Download as DownloadIcon, Loader2, AlertTriangle,
  ShieldCheck, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useGetVault, useGetChunkDownloadUrl, useTrackDownload } from "@/hooks/use-vaults";
import { importKey, decryptMetadata, decryptData, exportKey } from "@/lib/crypto";
import { VaultCard } from "@/components/vault-card";

// Streamed Download Support
import {
  initiateStreamDownload,
  shouldUseStreamedDownload,
  isServiceWorkerAvailable,
  ChunkInfo,
  DownloadProgress
} from "@/lib/downloadStream";

interface DecryptedFile {
  fileId: string;
  name: string;
  size: number;
  type: string;
  chunks: number;
  isCompressed?: boolean;
}

export default function DownloadPage() {
  const [, params] = useRoute("/v/:id");
  const vaultId = params?.id;
  const [decryptionKey, setDecryptionKey] = useState<CryptoKey | null>(null);
  const [files, setFiles] = useState<DecryptedFile[]>([]);
  const [isDecrypting, setIsDecrypting] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Download State
  const [activeDownload, setActiveDownload] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadMethod, setDownloadMethod] = useState<'memory' | 'stream' | null>(null);

  // Self-Destruct State
  const [isDestructing, setIsDestructing] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  const { data: vault, isLoading, error: apiError } = useGetVault(vaultId || "");
  const getDownloadUrl = useGetChunkDownloadUrl();
  const trackDownload = useTrackDownload();
  const { toast } = useToast();

  // Worker Management
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('../encryption.worker.ts', import.meta.url), { type: 'module' });
    return () => workerRef.current?.terminate();
  }, []);

  useEffect(() => {
    // 1. Extract Key from URL Hash
    const hash = window.location.hash;
    const keyStr = hash.replace('#key=', '');

    if (!keyStr) {
      setError("Missing decryption key. Invalid link.");
      setIsDecrypting(false);
      return;
    }

    // 2. Import Key & Decrypt Metadata
    const initVault = async () => {
      if (!vault) return;

      try {
        const key = await importKey(keyStr);
        setDecryptionKey(key);

        const metadata = await decryptMetadata(vault.encryptedMetadata, key);

        // Merge metadata with backend info
        const mergedFiles = metadata.map((meta: any) => {
          const backendFile = vault.files.find((f: any) => f.fileId === meta.fileId);
          return {
            ...meta,
            chunks: backendFile?.chunkCount || 0,
            isCompressed: backendFile?.isCompressed || false // Ensure schema supports this or we rely on metadata
          };
        });

        setFiles(mergedFiles);
        setIsDecrypting(false);
      } catch (err) {
        console.error(err);
        setError("Failed to decrypt vault. Key may be invalid.");
        setIsDecrypting(false);
      }
    };

    if (vault) initVault();
  }, [vault]);

  const fetchChunkUrls = async (file: DecryptedFile) => {
    const urls: ChunkInfo[] = [];
    const batchSize = 10; // Request 10 URLs at a time

    for (let i = 0; i < file.chunks; i += batchSize) {
      const batchPromises = [];
      for (let j = 0; j < batchSize && (i + j) < file.chunks; j++) {
        batchPromises.push(
          getDownloadUrl.mutateAsync({
            vaultId: vaultId!,
            fileId: file.fileId,
            chunkIndex: i + j
          }).then(res => ({
            index: i + j,
            downloadUrl: res.downloadUrl
          }))
        );
      }
      const batchResults = await Promise.all(batchPromises);
      urls.push(...batchResults);

      // Update progress purely for UX during preparation
      setDownloadProgress((i / file.chunks) * 10); // First 10% is prep
    }
    return urls.sort((a, b) => a.index - b.index);
  };

  const handleDownload = async (file: DecryptedFile) => {
    if (!decryptionKey || !vaultId) return;

    setActiveDownload(file.fileId);
    setDownloadProgress(0);

    const useStream = shouldUseStreamedDownload(file.size);
    setDownloadMethod(useStream ? 'stream' : 'memory');

    try {
      if (useStream) {
        // === STREAMED DOWNLOAD ===
        toast({ title: "Optimizing Download", description: "Preparing secure stream..." });

        // 1. Fetch ALL chunk URLs (this takes time for large files)
        // Ideally backend would have a "get all URLs" endpoint, but we batch it.
        const chunkUrls = await fetchChunkUrls(file);

        // 2. Initiate Stream
        const result = await initiateStreamDownload(
          file.fileId,
          decryptionKey,
          chunkUrls,
          {
            name: file.name,
            size: file.size,
            type: file.type,
            fileId: file.fileId,
            isCompressed: file.isCompressed
          },
          (prog: DownloadProgress) => {
            // Normalize progress (10-100%)
            setDownloadProgress(10 + (prog.progress * 0.9));
          }
        );

        if (!result.success) throw new Error(result.error);

      } else {
        // === MEMORY DOWNLOAD (Fallback/Small Files) ===
        const chunks: Uint8Array[] = [];
        let downloadedSize = 0;

        for (let i = 0; i < file.chunks; i++) {
          // 1. Get Signed URL
          const { downloadUrl } = await getDownloadUrl.mutateAsync({
            vaultId,
            fileId: file.fileId,
            chunkIndex: i
          });

          // 2. Fetch Encrypted Chunk
          const res = await fetch(downloadUrl);
          const buffer = await res.arrayBuffer();

          // 3. Separate IV and Data
          const iv = new Uint8Array(buffer.slice(0, 12));
          const encryptedData = buffer.slice(12);

          // 4. Decrypt via Worker
          const decryptedBuffer = await decryptWithWorker(encryptedData, iv, decryptionKey, file.isCompressed);
          chunks.push(new Uint8Array(decryptedBuffer as ArrayBuffer));

          // Update Progress
          downloadedSize += (decryptedBuffer as ArrayBuffer).byteLength;
          setDownloadProgress((downloadedSize / file.size) * 100);
        }

        // 5. Reassemble & Save
        const blob = new Blob(chunks as BlobPart[], { type: file.type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }

      // === POST DOWNLOAD ACTIONS ===
      trackDownload.mutate(vaultId);
      toast({ title: "Download Complete", description: `Saved ${file.name}` });

      // Self-Destruct if limit reached
      if (vault?.maxDownloads === 1 || (vault?.downloadCount || 0) + 1 >= (vault?.maxDownloads || 5)) {
        setTimeout(() => {
          toast({
            title: "Self-Destruct Initiated",
            description: "This link is burning...",
            variant: "destructive"
          });
          setIsDestructing(true);
        }, 2000);

        setTimeout(() => {
          setIsDestroyed(true);
        }, 4500);
      }

    } catch (err) {
      console.error(err);
      toast({ variant: "destructive", title: "Download Failed", description: "Encryption error or network failure." });
    } finally {
      setActiveDownload(null);
      setDownloadProgress(0);
      setDownloadMethod(null);
    }
  };

  const decryptWithWorker = (data: ArrayBuffer, iv: Uint8Array, key: CryptoKey, isCompressed?: boolean) => {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      if (!workerRef.current) return reject("Worker not ready");
      const id = Math.random();

      const handler = (e: MessageEvent) => {
        if (e.data.id === id) {
          workerRef.current?.removeEventListener('message', handler);
          if (e.data.type === 'error') reject(e.data.error);
          else resolve(e.data.decryptedData);
        }
      };

      workerRef.current.addEventListener('message', handler);
      workerRef.current.postMessage({ type: 'decrypt', data, iv, key, id, isCompressed }, [data]);
    });
  };

  // === RENDER STATES ===

  if (isDestroyed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in duration-1000">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent" />
            <ShieldCheck className="w-10 h-10 text-muted-foreground/50" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-mono text-muted-foreground uppercase tracking-widest">
              Link Terminated
            </h1>
            <p className="text-zinc-500">
              This vault has self-destructed. No data remains.
            </p>
          </div>
          <Button onClick={() => window.location.href = '/'} variant="outline" className="border-zinc-800 hover:bg-zinc-900 hover:text-white">
            Return to Safety
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (apiError || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full bg-card border border-destructive/30 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 text-destructive">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold mb-2">Access Denied</h2>
          <p className="text-muted-foreground mb-6">
            {error || (apiError as Error)?.message || "Vault not found"}
          </p>
          <Button onClick={() => window.location.href = '/'} variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background p-4 md:p-8 flex flex-col ${isDestructing ? 'burn-container' : ''}`}>
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 w-full flex-1">

        {/* Header */}
        <header className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 overflow-hidden">
              <img src="/vault-logo.jpg" alt="VaultBridge" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-mono tracking-tighter">VAULT<span className="text-primary">BRIDGE</span></h1>
            </div>
          </div>
        </header>

        {/* Vault Info */}
        {vault && (
          <VaultCard
            vaultId={vault.id}
            shortCode={vault.shortCode}
            fullLink={window.location.href.split('#')[0]}
            filesCount={files.length}
            totalSize={files.reduce((acc, f) => acc + f.size, 0)}
            expiresAt={vault.expiresAt}
            downloads={vault.downloadCount}
            maxDownloads={vault.maxDownloads}
          />
        )}

        {/* File List */}
        <div className="space-y-4">
          <h3 className="text-base md:text-lg font-bold font-mono uppercase tracking-wider text-muted-foreground mb-2 md:mb-4">
            Encrypted Contents
          </h3>

          {isDecrypting ? (
            <div className="p-6 md:p-8 text-center text-muted-foreground animate-pulse">
              <Unlock className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm md:text-base">Decrypting metadata...</p>
            </div>
          ) : (
            files.map((file) => (
              <motion.div
                key={file.fileId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                  <div className="p-2 md:p-3 bg-secondary rounded-lg flex-shrink-0">
                    <File className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate text-sm md:text-base">{file.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB • {file.type || 'Unknown'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                  {activeDownload === file.fileId ? (
                    <div className="w-full md:w-48 space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{downloadMethod === 'stream' ? 'Stream ' : ''}Decrypting...</span>
                        <span>{Math.round(downloadProgress)}%</span>
                      </div>
                      <Progress value={downloadProgress} className="h-1.5 md:h-2" />
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleDownload(file)}
                      className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm md:text-base h-10 md:h-11"
                    >
                      {shouldUseStreamedDownload(file.size) ? (
                        <Zap className="w-4 h-4 mr-2 text-amber-500" />
                      ) : (
                        <DownloadIcon className="w-4 h-4 mr-2" />
                      )}
                      Download
                    </Button>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
