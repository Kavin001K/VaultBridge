import { useEffect, useState, useRef } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Unlock, File, Download as DownloadIcon, Loader2, AlertTriangle,
  ShieldCheck, Zap, ArrowLeft, Shield, Binary, Cpu,
  Fingerprint, Activity, Layers, HardDrive, RefreshCw,
  Clock, CheckCircle2, Flame, Globe, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useGetVault, useGetChunkDownloadUrl, useTrackFileDownload } from "@/hooks/use-vaults";
import { importKey, decryptMetadata } from "@/lib/crypto";
import { 
  initiateStreamDownload, 
  shouldUseStreamedDownload, 
  ChunkInfo, 
  DownloadProgress 
} from "@/lib/downloadStream";

// Enhanced spring animation configs
const springConfig = { type: "spring", stiffness: 400, damping: 25 };

interface DecryptedFile {
  fileId: string;
  name: string;
  size: number;
  type: string;
  chunks: number;
  isCompressed?: boolean;
}

export default function DownloadPage() {
  const [, paramsV] = useRoute("/v/:id");
  const [, paramsDownload] = useRoute("/download/:id");
  const vaultId = paramsV?.id || paramsDownload?.id;
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
  const trackFileDownload = useTrackFileDownload();
  const { toast } = useToast();

  const [fileDownloadStates, setFileDownloadStates] = useState<Map<string, {
    fileId: string; maxDownloads: number; downloadCount: number;
    remainingDownloads: number; isExhausted: boolean;
  }>>(new Map());
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  // Worker Management
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('../encryption.worker.ts', import.meta.url), { type: 'module' });
    return () => workerRef.current?.terminate();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const keyStr = hash.replace('#key=', '');

    if (!keyStr) {
      setError("Cryptographic key missing from sequence.");
      setIsDecrypting(false);
      return;
    }

    const initVault = async () => {
      if (!vault) return;
      try {
        const key = await importKey(keyStr);
        setDecryptionKey(key);
        const metadata = await decryptMetadata(vault.encryptedMetadata, key);

        const mergedFiles = metadata.map((meta: any) => {
          const backendFile = vault.files.find((f: any) => f.fileId === meta.fileId);
          return {
            ...meta,
            chunks: backendFile?.chunkCount || 0,
            isCompressed: backendFile?.isCompressed || false
          };
        });

        setFiles(mergedFiles);

        const fileStates = new Map();
        for (const file of vault.files) {
          const maxDl = file.maxDownloads || vault.maxDownloads || 5;
          const dlCount = file.downloadCount || 0;
          fileStates.set(file.fileId, {
            fileId: file.fileId,
            maxDownloads: maxDl,
            downloadCount: dlCount,
            remainingDownloads: Math.max(0, maxDl - dlCount),
            isExhausted: dlCount >= maxDl
          });
        }
        setFileDownloadStates(fileStates);
        setIsDecrypting(false);
      } catch (err) {
        setError("Cryptographic handshake failed. Key invalid or corrupted.");
        setIsDecrypting(false);
      }
    };

    if (vault) initVault();
  }, [vault]);

  const fetchChunkUrls = async (file: DecryptedFile) => {
    const urls: ChunkInfo[] = [];
    const batchSize = 10;
    for (let i = 0; i < file.chunks; i += batchSize) {
      const batchPromises = [];
      for (let j = 0; j < batchSize && (i + j) < file.chunks; j++) {
        batchPromises.push(
          getDownloadUrl.mutateAsync({
            vaultId: vaultId!,
            fileId: file.fileId,
            chunkIndex: i + j
          }).then(res => ({ index: i + j, downloadUrl: res.downloadUrl }))
        );
      }
      const batchResults = await Promise.all(batchPromises);
      urls.push(...batchResults);
      setDownloadProgress((i / file.chunks) * 5); 
    }
    return urls.sort((a, b) => a.index - b.index);
  };

  const decryptWithWorker = (data: ArrayBuffer, iv: Uint8Array, key: CryptoKey, isCompressed?: boolean) => {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      if (!workerRef.current) return reject("Worker offline");
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

  const handleDownload = async (file: DecryptedFile) => {
    if (!decryptionKey || !vaultId) return;
    setActiveDownload(file.fileId);
    setDownloadProgress(0);
    const useStream = shouldUseStreamedDownload(file.size);
    setDownloadMethod(useStream ? 'stream' : 'memory');

    try {
      if (useStream) {
        const chunkUrls = await fetchChunkUrls(file);
        const result = await initiateStreamDownload(
          file.fileId, decryptionKey, chunkUrls,
          { name: file.name, size: file.size, type: file.type, fileId: file.fileId, isCompressed: file.isCompressed },
          (prog: DownloadProgress) => setDownloadProgress(5 + (prog.progress * 0.95))
        );
        if (!result.success) throw new Error(result.error);
      } else {
        const chunks: Uint8Array[] = [];
        let downloadedSize = 0;
        for (let i = 0; i < file.chunks; i++) {
          const { downloadUrl } = await getDownloadUrl.mutateAsync({ vaultId, fileId: file.fileId, chunkIndex: i });
          const res = await fetch(downloadUrl);
          const buffer = await res.arrayBuffer();
          const iv = new Uint8Array(buffer.slice(0, 12));
          const encryptedData = buffer.slice(12);
          const decryptedBuffer = await decryptWithWorker(encryptedData, iv, decryptionKey, file.isCompressed);
          chunks.push(new Uint8Array(decryptedBuffer as ArrayBuffer));
          downloadedSize += (decryptedBuffer as ArrayBuffer).byteLength;
          setDownloadProgress((downloadedSize / file.size) * 100);
        }
        const blob = new Blob(chunks as BlobPart[], { type: file.type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = file.name;
        document.body.appendChild(a); a.click();
        window.URL.revokeObjectURL(url); document.body.removeChild(a);
      }

      const res = await trackFileDownload.mutateAsync({ vaultId, fileId: file.fileId });
      if (res.files) {
        setFileDownloadStates(prev => {
          const newMap = new Map(prev);
          for (const f of res.files) newMap.set(f.fileId, f);
          return newMap;
        });
      }

      if (res.vaultExhausted) {
        setTimeout(() => setIsDestructing(true), 2000);
        setTimeout(() => setIsDestroyed(true), 6000);
      }
    } catch (err) {
      toast({ variant: "destructive", title: "SEQUENCE_ERROR", description: "Cryptographic failure or stream interruption." });
    } finally {
      setActiveDownload(null);
      setDownloadProgress(0);
    }
  };

  const handleDownloadAll = async () => {
    if (!decryptionKey || !vaultId || files.length === 0) return;
    const downloadableFiles = files.filter(f => !fileDownloadStates.get(f.fileId)?.isExhausted);
    if (downloadableFiles.length === 0) return;

    setIsDownloadingAll(true);
    try {
      for (const file of downloadableFiles) await handleDownload(file);
    } finally {
      setIsDownloadingAll(false);
    }
  };

  function formatBytes(bytes: number) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  if (isDestroyed) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card max-w-md w-full p-8 text-center relative z-10 border-red-500/20 bg-red-500/5">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Vault <span className="text-red-500">Purged</span></h1>
            <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.2em] mb-8 leading-relaxed">Cryptographic keys destroyed. <br/> Binary data has been wiped from memory nodes.</p>
            <Button onClick={() => window.location.href = '/'} className="w-full h-14 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black tracking-widest uppercase rounded-2xl">Return to Terminal</Button>
        </motion.div>
      </div>
    );
  }

  if (isLoading || isDecrypting) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="text-center relative z-10">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-16 h-16 border-2 border-primary/20 border-t-primary rounded-full mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] animate-pulse">Initializing Security Protocol...</p>
        </div>
      </div>
    );
  }

  if (apiError || error) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden">
         <div className="absolute inset-0 grid-bg opacity-20" />
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card max-w-md w-full p-8 text-center relative z-10 border-red-500/20">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Handshake <span className="text-red-500">Failed</span></h1>
            <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.15em] mb-8">{error || "The specified vault is no longer accessible."}</p>
            <Button onClick={() => window.location.href = '/'} variant="outline" className="w-full h-14 border-white/10 text-white font-black tracking-widest uppercase rounded-2xl hover:bg-white/5">Exit Terminal</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-zinc-950 text-white selection:bg-primary/30 relative flex flex-col overflow-x-hidden ${isDestructing ? 'burn-container' : ''}`}>
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="fixed inset-0 scanline opacity-10 pointer-events-none" />
      
      <header className="relative z-20 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-primary/50 transition-all shadow-2xl">
                <img src="/icon-192x192.png" alt="VB" className="w-full h-full p-1.5" />
              </div>
              <div>
                <h1 className="text-lg font-black font-mono tracking-tighter">VAULT<span className="text-primary">BRIDGE</span></h1>
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block -mt-1">Verified Node</span>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">E2E_VERIFIED</span>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-white/5 font-black uppercase tracking-widest text-[10px]">Close</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Vault Header Identity */}
          {vault && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors" />
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl shrink-0">
                         <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                         <Binary className="w-12 h-12 text-primary" />
                         <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-3">
                            <span className="text-[10px] font-black bg-zinc-900 border border-white/10 px-3 py-1 rounded-full text-zinc-400 tracking-widest">#{vault.shortCode}</span>
                            <span className="text-[10px] font-black bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary tracking-widest uppercase">Secured_Vault</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">Binary <span className="text-primary">Package</span></h2>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
                             <span className="flex items-center gap-2"><Layers className="w-3.5 h-3.5" /> {files.length} Fragments</span>
                             <span className="flex items-center gap-2"><HardDrive className="w-3.5 h-3.5" /> {formatBytes(files.reduce((a,f) => a+f.size, 0))} Total</span>
                             <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Exp: {new Date(vault.expiresAt).toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-center md:items-end gap-2">
                        <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Access Limit</div>
                        <div className="flex items-center gap-3">
                             <div className="h-2 w-32 bg-zinc-900 rounded-full border border-white/5 overflow-hidden">
                                  <motion.div initial={{ width: 0 }} animate={{ width: `${(vault.downloadCount / vault.maxDownloads) * 100}%` }} className="h-full bg-primary" />
                             </div>
                             <span className="text-xs font-black font-mono text-zinc-400">{vault.downloadCount}/{vault.maxDownloads}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
          )}

          {/* Fragment Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2 px-2">
                <h3 className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] flex items-center gap-3">
                    <Fingerprint className="w-4 h-4 text-primary" /> Verified_Objects
                </h3>
                {files.length > 1 && (
                    <Button onClick={handleDownloadAll} disabled={isDownloadingAll || activeDownload !== null} className="h-10 px-6 bg-primary text-primary-foreground font-black tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20 uppercase text-[10px]">
                        {isDownloadingAll ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-2" /> : <DownloadIcon className="w-3.5 h-3.5 mr-2" />}
                        Retrieve_All
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 gap-4">
                {files.map((file, idx) => {
                    const state = fileDownloadStates.get(file.fileId);
                    const isExhausted = state?.isExhausted;
                    const isDownloading = activeDownload === file.fileId;
                    
                    return (
                        <motion.div key={file.fileId} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className={`glass-card p-5 group transition-all duration-500 ${isExhausted ? 'opacity-40 grayscale pointer-events-none' : 'hover:border-primary/30'}`}>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${isDownloading ? 'bg-primary/20 border-primary animate-pulse' : 'bg-zinc-950 border-white/5 group-hover:border-primary/20'}`}>
                                    {isDownloading ? <RefreshCw className="w-6 h-6 text-primary animate-spin" /> : <File className="w-6 h-6 text-zinc-600 group-hover:text-primary transition-colors" />}
                                </div>
                                <div className="flex-1 min-w-0 text-center md:text-left">
                                    <h4 className="text-sm font-black text-white uppercase italic tracking-tight truncate mb-1">{file.name}</h4>
                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                                        <span>{formatBytes(file.size)}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-800" />
                                        <span>{file.type || 'BINARY'}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-800" />
                                        <span className={isExhausted ? 'text-red-500' : 'text-primary/70'}>{state?.remainingDownloads || 0}/{state?.maxDownloads || 0} REMAINING</span>
                                    </div>
                                </div>
                                <div className="shrink-0 w-full md:w-auto">
                                    {isDownloading ? (
                                        <div className="w-full md:w-48 space-y-2">
                                             <div className="flex justify-between items-center text-[9px] font-black text-primary uppercase tracking-widest">
                                                 <span>{downloadMethod === 'stream' ? 'Streaming' : 'Buffering'}...</span>
                                                 <span>{Math.round(downloadProgress)}%</span>
                                             </div>
                                             <div className="h-1.5 w-full bg-zinc-900 rounded-full border border-white/5 overflow-hidden">
                                                 <motion.div initial={{ width: 0 }} animate={{ width: `${downloadProgress}%` }} className="h-full bg-primary" />
                                             </div>
                                        </div>
                                    ) : (
                                        <Button onClick={() => handleDownload(file)} disabled={isExhausted || isDownloadingAll} className={`w-full md:w-auto h-12 px-8 font-black tracking-widest rounded-2xl transition-all shadow-xl uppercase text-[10px] ${isExhausted ? 'bg-zinc-900 text-zinc-700' : 'bg-zinc-950 border border-white/5 hover:border-primary/50 text-white'}`}>
                                            {isExhausted ? 'LIMIT_REACHED' : (
                                                <span className="flex items-center gap-2">
                                                    {shouldUseStreamedDownload(file.size) && <Zap className="w-3 h-3 text-amber-500" />}
                                                    DOWNLOAD_OBJECT
                                                </span>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
          </div>

          {/* System Telemetry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                {[
                    { icon: Shield, label: "Encryption", val: "AES-GCM 256" },
                    { icon: Globe, label: "Integrity", val: "Verified" },
                    { icon: Cpu, label: "Transfer", val: "TLS 1.3" }
                ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-zinc-900/40 border border-white/5">
                        <stat.icon className="w-4 h-4 text-zinc-500" />
                        <div>
                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block">{stat.label}</span>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{stat.val}</span>
                        </div>
                    </div>
                ))}
          </div>
        </div>
      </main>

      <footer className="relative z-20 py-10 px-6 border-t border-white/5 bg-zinc-950/60 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-4 opacity-50">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Encrypted Handshake Node</span>
              </div>
              <p className="text-[11px] font-medium text-zinc-500 max-w-sm leading-relaxed">VaultBridge uses browser-native WebCrypto API. Decryption occurs purely on your hardware. We never see your data or keys.</p>
          </div>
      </footer>
    </div>
  );
}
