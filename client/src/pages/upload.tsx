import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Upload, ArrowLeft, Shield, Timer, Zap, AlertTriangle, Play, X
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, generateUUID, generateSplitCode, wrapFileKey } from "@/lib/crypto";

// Advanced Features
import { getOptimalChunkConfig, ChunkConfig, NO_CHUNK_THRESHOLD, MIN_CHUNK_SIZE } from "@/lib/adaptiveChunk";
import {
    createUploadSession, markChunkUploaded as markLocalChunk,
    getPendingUploads, deleteUploadSession, UploadProgress,
    initResumableUploads, getUploadSession
} from "@/lib/resumableUpload";

// Compressible types for intelligent decision making
const COMPRESSIBLE_TYPES = [
    'text/', 'application/json', 'application/javascript', 'application/x-javascript',
    'application/xml', 'application/x-yaml', 'image/svg+xml', 'application/sql',
    'application/graphql', 'application/ld+json'
];

type UploadStage = "idle" | "encrypting" | "uploading" | "success" | "resuming";
type ProgressStep = "keys" | "metadata" | "transfer" | "done";

export default function UploadPage() {
    const [files, setFiles] = useState<File[]>([]);
    const [expiresIn, setExpiresIn] = useState([24]);
    const [maxDownloads, setMaxDownloads] = useState([5]);
    const [stage, setStage] = useState<UploadStage>("idle");
    const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [isDragActive, setIsDragActive] = useState(false);
    const [pendingUploads, setPendingUploads] = useState<UploadProgress[]>([]);

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const abortControllerRef = useRef<AbortController | null>(null);

    const createVault = useCreateVault();
    const getChunkUrl = useGetChunkUploadUrl();
    const markUploaded = useMarkChunkUploaded();

    // Initialize Resumable System
    useEffect(() => {
        const init = async () => {
            const { pendingUploads } = await initResumableUploads();
            setPendingUploads(pendingUploads);
        };
        init();

        return () => {
            // Cleanup active uploads if component unmounts?
            // Actually no, we want them to persist for resume.
        };
    }, []);

    const truncateName = (name: string, maxLength: number = 20) => {
        if (name.length <= maxLength) return name;
        const extIndex = name.lastIndexOf('.');
        if (extIndex !== -1) {
            const ext = name.substring(extIndex);
            const base = name.substring(0, extIndex);
            if (base.length > maxLength - ext.length - 3) {
                return base.substring(0, maxLength - ext.length - 3) + '...' + ext;
            }
        }
        return name.substring(0, maxLength - 3) + '...';
    };

    const isCompressible = (file: File) => {
        return COMPRESSIBLE_TYPES.some(t => file.type.startsWith(t)) ||
            ['.ts', '.tsx', '.js', '.jsx', '.json', '.txt', '.md', '.css', '.html'].some(ext => file.name.endsWith(ext));
    };

    const handleResume = async (upload: UploadProgress) => {
        // Logic to resume would go here. 
        // For now, simpler to just clean up stale ones if user wants to start over.
        // True resume requires re-selecting the file handle in browser (security restriction).
        // Or we implement the File System Access API for persistent handles (advanced).

        // MVP: We detect them and offer to "Clear" to avoid clutter, 
        // as re-selecting precise files matching ID is complex UI.
        // Advanced: We could prompt user to "Select file [Name] to resume".

        // For this iteration, we focus on NEW uploads being robust.
        alert("To resume, please re-select the file matching: " + upload.fileName);
    };

    const clearPending = async (uploadId: string) => {
        await deleteUploadSession(uploadId);
        setPendingUploads(prev => prev.filter(p => p.uploadId !== uploadId));
    };

    const handleUpload = async () => {
        if (files.length === 0) return;
        setStage("encrypting");
        setProgress(0);
        abortControllerRef.current = new AbortController();

        try {
            // Step 1: Generate Keys
            setCurrentStep("keys");
            setStatusText("Generating military-grade AES-256 keys...");
            await new Promise(r => setTimeout(r, 400));
            const key = await generateKey();

            // Generate Split-Code
            const splitCode = generateSplitCode();
            setStatusText("Deriving PIN-protective wrapper...");
            const wrappedKey = await wrapFileKey(key, splitCode.pin);

            // Export key for local persistence (resumability)
            const exportedKey = await exportKey(key);
            setProgress(10);

            // Step 2: Encrypt Metadata & Calculate Chunks
            setCurrentStep("metadata");
            setStatusText("Analyzing files & encrypting metadata...");

            const fileMetadata = files.map(f => ({
                name: f.name,
                type: f.type,
                size: f.size,
                fileId: generateUUID(),
                lastModified: f.lastModified
            }));

            const encryptedMetadata = await encryptMetadata(fileMetadata, key);

            // Adaptive Chunking Calculation
            const filesPayload = [];
            const chunkConfigs: ChunkConfig[] = [];

            for (let i = 0; i < files.length; i++) {
                const f = files[i];
                setStatusText(`Optimizing chunk size for ${truncateName(f.name)}...`);

                // Use our new Adaptive System
                const config = await getOptimalChunkConfig(f.size);
                chunkConfigs.push(config);

                const isSmallAndCompressible = isCompressible(f) && f.size < NO_CHUNK_THRESHOLD;

                filesPayload.push({
                    fileId: fileMetadata[i].fileId,
                    chunks: config.estimatedChunks,
                    size: f.size,
                    isCompressed: isSmallAndCompressible,
                    originalSize: f.size
                });
            }
            setProgress(20);

            // Step 3: Register Vault
            setStatusText("Securing vault location...");
            const vault = await createVault.mutateAsync({
                expiresIn: expiresIn[0],
                maxDownloads: maxDownloads[0],
                encryptedMetadata,
                lookupId: splitCode.lookupId,
                wrappedKey,
                files: filesPayload
            });

            // Initialize Resume Sessions
            setStatusText("Initializing resilient upload sessions...");
            const uploadIds: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const f = files[i];
                const id = await createUploadSession({
                    vaultId: vault.id,
                    fileId: filesPayload[i].fileId,
                    fileName: f.name,
                    fileSize: f.size,
                    fileType: f.type,
                    totalChunks: filesPayload[i].chunks,
                    chunkSize: chunkConfigs[i].chunkSize,
                    cryptoKeyExported: exportedKey,
                    isCompressed: filesPayload[i].isCompressed,
                    vaultConfig: {
                        expiresIn: expiresIn[0],
                        maxDownloads: maxDownloads[0],
                        lookupId: splitCode.lookupId
                    }
                });
                uploadIds.push(id);
            }
            setProgress(30);

            // Step 4: Upload Loop
            setStage("uploading");
            setCurrentStep("transfer");

            const totalChunksAllFiles = filesPayload.reduce((acc, f) => acc + f.chunks, 0);
            let globalChunkCount = 0;

            // Worker for heavy lifting
            const worker = new Worker(new URL('../encryption.worker.ts', import.meta.url), { type: 'module' });

            const encryptWithWorker = (data: ArrayBuffer, key: CryptoKey, mode: 'encrypt' | 'compress_and_encrypt') => {
                return new Promise<{ iv: Uint8Array, encryptedData: ArrayBuffer }>((resolve, reject) => {
                    const id = Math.random();
                    const handler = (e: MessageEvent) => {
                        if (e.data.id === id) {
                            worker.removeEventListener('message', handler);
                            if (e.data.type === 'error') reject(e.data.error);
                            else resolve(e.data);
                        }
                    };
                    worker.addEventListener('message', handler);
                    worker.postMessage({ type: mode, data, key, id }, [data]);
                });
            };

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileId = filesPayload[i].fileId;
                const config = chunkConfigs[i];
                const uploadId = uploadIds[i];
                const displayName = truncateName(file.name);
                const isCompressed = filesPayload[i].isCompressed;

                const session = await getUploadSession(uploadId);
                const uploadedSet = new Set(session?.uploadedChunks || []);

                for (let chunkIndex = 0; chunkIndex < config.estimatedChunks; chunkIndex++) {
                    // Check abort
                    if (abortControllerRef.current.signal.aborted) throw new Error("Upload cancelled");

                    // Resume Logic: Skip if already uploaded
                    if (uploadedSet.has(chunkIndex)) {
                        globalChunkCount++;
                        // Update progress purely visual
                        const perc = 30 + (globalChunkCount / totalChunksAllFiles) * 65;
                        setProgress(perc);
                        continue;
                    }

                    // Prepare Chunk
                    const start = chunkIndex * config.chunkSize;
                    const end = Math.min(start + config.chunkSize, file.size);
                    const chunkBlob = file.slice(start, end);
                    const chunkBuffer = await chunkBlob.arrayBuffer();

                    // Encrypt
                    const chunkLabel = config.estimatedChunks > 1 ? ` (part ${chunkIndex + 1}/${config.estimatedChunks})` : "";
                    setStatusText(`Encrypting ${displayName}${chunkLabel}...`);

                    const mode = (isCompressed && config.estimatedChunks === 1) ? 'compress_and_encrypt' : 'encrypt';
                    const { iv, encryptedData } = await encryptWithWorker(chunkBuffer, key, mode);

                    // Combine IV + Data
                    const combined = new Uint8Array(iv.byteLength + encryptedData.byteLength);
                    combined.set(iv, 0);
                    combined.set(new Uint8Array(encryptedData), iv.byteLength);

                    // Upload
                    setStatusText(`Sending ${displayName}${chunkLabel}...`);
                    const { uploadUrl, storagePath } = await getChunkUrl.mutateAsync({
                        vaultId: vault.id,
                        fileId,
                        chunkIndex,
                        size: combined.byteLength
                    });

                    await fetch(uploadUrl, { method: 'PUT', body: combined });

                    // Persistence Updates
                    await markUploaded.mutateAsync({ vaultId: vault.id, fileId, chunkIndex, storagePath });
                    await markLocalChunk(uploadId, chunkIndex);

                    globalChunkCount++;
                    const perc = 30 + (globalChunkCount / totalChunksAllFiles) * 65;
                    setProgress(perc);
                }

                // File Complete - cleanup local session
                await deleteUploadSession(uploadId);
            }

            worker.terminate();
            setCurrentStep("done");
            setProgress(100);
            setStatusText("Finalizing secure vault...");
            setStage("success");

            setTimeout(() => {
                setLocation(`/success/${vault.id}#code=${splitCode.fullCode}`);
            }, 800);

        } catch (err) {
            console.error(err);
            setStage("idle");
            if (err instanceof Error && err.message === "Upload cancelled") {
                toast({ title: "Upload Cancelled", variant: "default" });
            } else {
                toast({
                    variant: "destructive",
                    title: "Upload Failed",
                    description: err instanceof Error ? err.message : "An error occurred",
                });
            }
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 px-6 py-6 border-b border-white/5">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 cursor-pointer group"
                        >
                            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                                <Zap className="w-5 h-5 text-amber-500" />
                            </div>
                            <h1 className="text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors">
                                VAULT<span className="text-amber-500">BRIDGE</span>
                            </h1>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 py-12">

                {/* Pending Uploads Alert */}
                {pendingUploads.length > 0 && stage === 'idle' && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl backdrop-blur-md"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-amber-500/20 rounded-lg">
                                <AlertTriangle className="w-5 h-5 text-amber-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm mb-1">Interrupted Uploads Detected</h3>
                                <p className="text-xs text-zinc-400 mb-3">
                                    We found {pendingUploads.length} incomplete upload sessions from a previous visit.
                                </p>
                                <div className="space-y-2">
                                    {pendingUploads.map(p => (
                                        <div key={p.uploadId} className="flex items-center justify-between text-xs bg-zinc-950 p-2 rounded border border-zinc-800">
                                            <span className="truncate max-w-[200px]">{p.fileName}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-zinc-500">{p.progress}%</span>
                                                <button onClick={() => clearPending(p.uploadId)} className="text-zinc-500 hover:text-red-400">
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold mb-3">Secure Upload</h2>
                    <p className="text-zinc-400">
                        Create an encrypted vault for your files.
                    </p>
                </motion.div>

                {/* Upload Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl ${isDragActive ? 'ring-2 ring-amber-500 bg-amber-500/5' : ''}`}
                >
                    {/* Progress Overlay */}
                    <AnimatePresence>
                        {stage !== "idle" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center"
                            >
                                <EncryptionProgress
                                    stage={stage}
                                    step={currentStep}
                                    progress={progress}
                                    statusText={statusText}
                                />
                                {stage === 'uploading' && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => abortControllerRef.current?.abort()}
                                        className="mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10"
                                    >
                                        Cancel Upload
                                    </Button>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="space-y-6">
                        <FileDropzone
                            onFilesSelected={(newFiles) => {
                                const oversized = newFiles.some(f => f.size > 2 * 1024 * 1024 * 1024); // 2GB warning
                                if (oversized) {
                                    toast({
                                        variant: "destructive",
                                        title: "Large File Warning",
                                        description: "Files over 2GB may take longer to encrypt.",
                                    });
                                }
                                setFiles(newFiles);
                            }}
                            disabled={stage !== "idle"}
                            onDragStateChange={setIsDragActive}
                        />

                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                <Shield className="w-3 h-3 text-emerald-500" />
                                AES-256-GCM
                            </div>
                            <div className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                <Zap className="w-3 h-3 text-amber-500" />
                                Adaptive Chunking
                            </div>
                        </div>
                    </div>

                    {/* Settings */}
                    <div className="mt-8 space-y-8 border-t border-white/5 pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                        <Timer className="w-4 h-4 text-amber-500" />
                                        Expires In
                                    </label>
                                    <span className="text-sm font-mono text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded">{expiresIn[0]}h</span>
                                </div>
                                <Slider
                                    value={expiresIn}
                                    onValueChange={setExpiresIn}
                                    min={1}
                                    max={168}
                                    step={1}
                                    className="py-2"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-emerald-500" />
                                        Download Limit
                                    </label>
                                    <span className="text-sm font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                                        {maxDownloads[0] === 1 ? "BURN ON READ" : `${maxDownloads[0]}x`}
                                    </span>
                                </div>
                                <Slider
                                    value={maxDownloads}
                                    onValueChange={setMaxDownloads}
                                    min={1}
                                    max={100}
                                    step={1}
                                    disabled={maxDownloads[0] === 1}
                                    className={maxDownloads[0] === 1 ? "opacity-30" : ""}
                                />
                                <div
                                    onClick={() => setMaxDownloads(maxDownloads[0] === 1 ? [5] : [1])}
                                    className={`text-xs cursor-pointer select-none transition-colors text-center py-2 rounded border ${maxDownloads[0] === 1
                                            ? "bg-red-500/10 border-red-500/20 text-red-500"
                                            : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white"
                                        }`}
                                >
                                    {maxDownloads[0] === 1 ? "🔥 Burn-on-read Active (Auto-delete after 1 view)" : "Click to enable Burn-on-read"}
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleUpload}
                            disabled={files.length === 0 || stage !== "idle"}
                            className="w-full h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                        >
                            {stage !== "idle" ? "Processing..." : (
                                <>
                                    <Lock className="w-4 h-4 mr-2" />
                                    Encrypt & Upload
                                </>
                            )}
                        </Button>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center px-4"
                >
                    <p className="text-xs text-zinc-500">
                        Zero-Knowledge Architecture: Encryption happens entirely in your browser.
                        We never do not see your files, keys, or data.
                    </p>
                </motion.div>
            </main>
        </div>
    );
}
