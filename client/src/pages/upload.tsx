import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Upload, ArrowLeft, Shield, Timer, Zap, AlertTriangle, X,
    Paperclip, FileText, Image as ImageIcon, FileVideo, FileAudio,
    File, ChevronRight, Check, Eye, ArrowRight, Flame, Clock, CheckCircle2,
    Send, Trash2, HardDrive, UploadCloud, FolderArchive, Loader2, Activity, Cpu, Network
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded, useUpdateVault } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, generateUUID, generateSplitCode, wrapFileKey } from "@/lib/crypto";
import { getUploadConfig, MAX_FILE_SIZE } from "@/lib/uploadConfig";
import { saveUploadSettings, loadUploadSettings } from "@/lib/fileStorage";
import { ParallelUploadQueue, type ChunkTask } from "@/lib/parallelUpload";
import { workerPool } from "@/lib/workerManager";

type UploadStage = "idle" | "encrypting" | "uploading" | "success";
type ProgressStep = "keys" | "metadata" | "transfer" | "done";

// ─── Constants ───────────────────────────────────────────────────────────────
const STEPS = [
    { id: 1, label: "Select", icon: Paperclip },
    { id: 2, label: "Configure", icon: Eye },
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────
const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return ImageIcon;
    if (type.startsWith("video/")) return FileVideo;
    if (type.startsWith("audio/")) return FileAudio;
    if (type.includes("zip") || type.includes("rar") || type.includes("tar") || type.includes("7z") || type.includes("gz"))
        return FileArchive;
    if (type.includes("pdf") || type.includes("doc") || type.includes("text") || type.includes("sheet"))
        return FileText;
    return File;
};

const getFileColor = (type: string) => {
    if (type.startsWith("image/")) return "text-blue-400 bg-blue-500/10 border-blue-500/20";
    if (type.startsWith("video/")) return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    if (type.startsWith("audio/")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    if (type.includes("zip") || type.includes("rar") || type.includes("tar"))
        return "text-orange-400 bg-orange-500/10 border-orange-500/20";
    if (type.includes("pdf")) return "text-red-400 bg-red-500/10 border-red-500/20";
    return "text-primary/70 bg-primary/10 border-primary/20";
};

const formatExpiry = (hours: number) => {
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    if (remainingHours === 0) return `${days}d`;
    return `${days}d ${remainingHours}h`;
};


export default function UploadPage() {
    const [step, setStep] = useState(1);
    const [files, setFiles] = useState<File[]>([]);
    const [expiresIn, setExpiresIn] = useState([1]); // Default to 1 hour
    const [maxDownloads, setMaxDownloads] = useState([5]); // Default to 5 downloads
    const [stage, setStage] = useState<UploadStage>("idle");
    const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [isDragActive, setIsDragActive] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [uploadStats, setUploadStats] = useState<{ speed: number, eta: number }>({ speed: 0, eta: 0 });
    const [showCodeDuringUpload, setShowCodeDuringUpload] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const abortControllerRef = useRef<AbortController | null>(null);

    const createVault = useCreateVault();
    const getChunkUrl = useGetChunkUploadUrl();
    const markUploaded = useMarkChunkUploaded();
    const updateVault = useUpdateVault();

    const backgroundVaultRef = useRef<any>(null);
    const backgroundSplitCodeRef = useRef<any>(null);
    const backgroundKeyRef = useRef<any>(null);
    const [masterKeyString, setMasterKeyString] = useState<string | undefined>();
    const backgroundQueueRef = useRef<ParallelUploadQueue | null>(null);
    const isPreparingRef = useRef(false);

    const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks

    // Load persisted settings on mount
    useEffect(() => {
        const loadSettings = async () => {
            const settings = await loadUploadSettings();
            if (settings) {
                setExpiresIn([settings.expiresIn]);
                setMaxDownloads([settings.maxDownloads]);
            }
        };
        loadSettings();
    }, []);

    // Save settings when they change
    useEffect(() => {
        saveUploadSettings(expiresIn[0], maxDownloads[0]);
    }, [expiresIn, maxDownloads]);

    const handleFilesSelected = (newFiles: File[]) => {
        setUploadError(null);
        const config = getUploadConfig(newFiles);
        if (!config.isValid) {
            playSound('error');
            setUploadError(config.errorMessage || "Invalid files");
            toast({ variant: "destructive", title: "Upload Limit Exceeded", description: config.errorMessage });
            return;
        }

        playSound('drop');
        setFiles(newFiles);
        setStep(2);
    };

    // ─── Background Pre-upload Logic (PROPERLY ACCELERATED) ───────────────────────────────────────────
    useEffect(() => {
        if (files.length === 0 || backgroundVaultRef.current || isPreparingRef.current) return;

        const startBackgroundUpload = async () => {
            isPreparingRef.current = true;
            try {
                setStatusText("Initializing secure channel...");
                const key = await generateKey();
                backgroundKeyRef.current = key;
                const exported = await exportKey(key);
                setMasterKeyString(exported);

                const fileMetadata = files.map(f => ({
                    name: f.name, type: f.type, size: f.size,
                    fileId: generateUUID(), lastModified: f.lastModified
                }));
                const encryptedMetadata = await encryptMetadata(fileMetadata, key);

                const filesPayload = fileMetadata.map(fm => ({
                    fileId: fm.fileId,
                    chunks: Math.ceil(fm.size / CHUNK_SIZE) || 1,
                    size: fm.size,
                    isCompressed: false,
                    originalSize: fm.size
                }));

                let vaultResult = null;
                let splitCodeResult = null;
                
                for (let attempt = 0; attempt < 5; attempt++) {
                    const splitCode = generateSplitCode();
                    const { wrappedKey, salt } = await wrapFileKey(key, splitCode.pin);
                    try {
                        vaultResult = await createVault.mutateAsync({
                            expiresIn: expiresIn[0],
                            maxDownloads: maxDownloads[0],
                            encryptedMetadata,
                            lookupId: splitCode.lookupId,
                            wrappedKey,
                            pinSalt: salt,
                            files: filesPayload
                        });
                        splitCodeResult = splitCode;
                        break;
                    } catch (err: any) {
                        if (err.status !== 409) throw err;
                    }
                }

                if (!vaultResult || !splitCodeResult) throw new Error("Vault allocation failed.");

                backgroundVaultRef.current = vaultResult;
                backgroundSplitCodeRef.current = splitCodeResult;
                setShowCodeDuringUpload(true);

                const queue = new ParallelUploadQueue({
                    concurrency: 6,
                    maxRetries: 15,
                    onProgress: (perc, stats) => {
                        if (stage === "uploading") {
                            setProgress(10 + (perc * 0.9));
                            if (stats) setUploadStats(stats);
                        }
                    },
                    onError: (err) => {
                        console.error("[Background Queue Error]", err);
                        if (stage === "uploading") {
                            setUploadError(err.message);
                            setStage("idle");
                        }
                    }
                });

                backgroundQueueRef.current = queue;

                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fm = filesPayload[i];
                    const fileId = fm.fileId;
                    const totalChunks = fm.chunks;

                    for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
                        queue.add({
                            file, chunkIndex, totalChunks,
                            start: chunkIndex * CHUNK_SIZE,
                            end: Math.min((chunkIndex + 1) * CHUNK_SIZE, file.size),
                            fileId,
                            displayName: file.name
                        });
                    }
                }

                const uploadFn = async (task: ChunkTask) => {
                    const chunkBlob = task.file.slice(task.start, task.end);
                    const chunkBuffer = await chunkBlob.arrayBuffer();
                    const { iv, encryptedData } = await workerPool.encrypt(chunkBuffer, key);
                    const combined = new Uint8Array(iv.byteLength + encryptedData.byteLength);
                    combined.set(iv, 0);
                    combined.set(new Uint8Array(encryptedData), iv.byteLength);

                    const { uploadUrl, storagePath } = await getChunkUrl.mutateAsync({
                        vaultId: vaultResult!.id, fileId: task.fileId,
                        chunkIndex: task.chunkIndex, size: combined.byteLength
                    });

                    const response = await fetch(uploadUrl, {
                        method: 'PUT', body: combined,
                        headers: { 'Content-Type': 'application/octet-stream' }
                    });

                    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

                    await markUploaded.mutateAsync({
                        vaultId: vaultResult!.id, fileId: task.fileId,
                        chunkIndex: task.chunkIndex, storagePath
                    });
                };

                queue.start(uploadFn).then(() => {
                    if (stage === "uploading") {
                        finalizeUpload(vaultResult!.id, splitCodeResult!.fullCode);
                    }
                });

            } catch (err) {
                console.error("[Background Pre-upload Failed]", err);
                isPreparingRef.current = false;
            }
        };

        startBackgroundUpload();
    }, [files]);

    const finalizeUpload = (vaultId: string, fullCode: string) => {
        playSound('success');
        setCurrentStep("done");
        setProgress(100);
        setStatusText("Encryption integrity verified. Vault secured.");
        setStage("success");
        setTimeout(() => {
            const statsParam = uploadStats.speed > 0 ? `&speed=${Math.round(uploadStats.speed)}` : "";
            setLocation(`/success/${vaultId}#code=${fullCode}${statsParam}`);
        }, 1200);
    };

    const handleUpload = async () => {
        setShowConfirmDialog(false);
        if (files.length === 0) return;

        if (!backgroundVaultRef.current) {
            setStatusText("Syncing secure bridge...");
            setStage("encrypting");
            let waitCount = 0;
            while (!backgroundVaultRef.current && waitCount < 50) {
                await new Promise(r => setTimeout(r, 100));
                waitCount++;
            }
            if (!backgroundVaultRef.current) {
                toast({ title: "Latency Detected", description: "Preparing secure buffer, please stand by...", variant: "default" });
                return;
            }
        }

        setStage("uploading");
        setCurrentStep("transfer");
        setStatusText("Fragmenting and distributing binary data...");

        try {
            await updateVault.mutateAsync({
                id: backgroundVaultRef.current.id,
                expiresIn: expiresIn[0],
                maxDownloads: maxDownloads[0]
            });
        } catch (err) { /* Non-fatal */ }

        if (backgroundQueueRef.current && (backgroundQueueRef.current as any).completedTasks === (backgroundQueueRef.current as any).totalTasks) {
            finalizeUpload(backgroundVaultRef.current.id, backgroundSplitCodeRef.current.fullCode);
        }
    };

    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    const sizePercentage = Math.min((totalSize / MAX_FILE_SIZE) * 100, 100);

    return (
        <div className="min-h-screen relative flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background Effects (Unified with Home) */}
            <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="scanline pointer-events-none opacity-10" />

            {/* Header (Premium Navigation) */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl safe-top">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex items-center justify-between">
                    <Link href="/">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-9 h-9 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden">
                                <img src="/icon-192x192.png" alt="VaultBridge" className="w-full h-full object-cover p-1.5 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h1 className="text-lg font-black font-mono tracking-widest text-white leading-none">VAULT<span className="text-primary">BRIDGE</span></h1>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white hover:bg-white/5 px-4 text-xs font-bold gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Return
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 pt-32 pb-20">
                
                {/* Executive Title area */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        SECURE_LINK_ACTIVE
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight text-white uppercase italic">
                        Binary <span className="text-primary">Ingestion</span>
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium max-w-sm mx-auto">
                        Zero-knowledge infrastructure. Your files never touch our servers unencrypted.
                    </p>
                </motion.div>

                {/* Step Indicators (Premium) */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    {STEPS.map((s) => (
                        <div key={s.id} className="flex items-center gap-2">
                            <div className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
                                step >= s.id ? 'bg-primary/10 text-primary border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'bg-zinc-900 text-zinc-600 border-white/5'
                            }`}>
                                {s.label}
                            </div>
                            {s.id === 1 && <ChevronRight className="w-4 h-4 text-zinc-800" />}
                        </div>
                    ))}
                </div>

                {/* Main Action Card */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card relative overflow-hidden mb-8">
                    <AnimatePresence>
                        {stage !== "idle" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-8">
                                <EncryptionProgress
                                    stage={stage} step={currentStep} progress={progress}
                                    statusText={statusText} speed={uploadStats.speed} eta={uploadStats.eta}
                                    accessCode={showCodeDuringUpload ? backgroundSplitCodeRef.current?.fullCode : undefined}
                                    masterKey={masterKeyString}
                                />
                                {stage === 'uploading' && (
                                    <Button variant="ghost" size="sm" onClick={() => window.location.reload()} className="mt-10 text-red-400 hover:text-red-300 hover:bg-red-500/5 rounded-xl text-[10px] font-black tracking-widest uppercase">
                                        Terminate Connection
                                    </Button>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 sm:p-10 space-y-8">
                                <FileDropzone onFilesSelected={handleFilesSelected} disabled={stage !== "idle"} onDragStateChange={setIsDragActive} />
                                
                                {uploadError && (
                                    <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex gap-4 items-center">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                        <p className="text-xs font-mono font-bold text-red-400 uppercase tracking-tight">{uploadError}</p>
                                    </div>
                                )}

                                {files.length > 0 && (
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{files.length} Fragments Detected</span>
                                            <span className="text-xs font-mono font-black text-primary">{formatSize(totalSize)}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${sizePercentage}%` }} className="h-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                                    <div className="flex flex-col items-center gap-2">
                                        <Shield className="w-5 h-5 text-zinc-600" />
                                        <span className="text-[9px] font-black text-zinc-500 uppercase">AES-256</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Cpu className="w-5 h-5 text-zinc-600" />
                                        <span className="text-[9px] font-black text-zinc-500 uppercase">Client-Side</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Network className="w-5 h-5 text-zinc-600" />
                                        <span className="text-[9px] font-black text-zinc-500 uppercase">Accelerated</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="p-6 sm:p-10 space-y-8">
                                {/* Files Mini-List */}
                                <div className="bg-zinc-900/50 rounded-2xl p-5 border border-white/5 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Binary Payload</span>
                                        <span className="text-xs font-mono font-bold text-white">{formatSize(totalSize)}</span>
                                    </div>
                                    <div className="space-y-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                        {files.map((file, i) => {
                                            const Icon = getFileIcon(file.type);
                                            const colors = getFileColor(file.type);
                                            return (
                                                <div key={i} className="flex items-center gap-3 p-2 bg-black/20 rounded-xl border border-white/5">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colors}`}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-xs font-bold text-zinc-300 truncate flex-1">{file.name}</span>
                                                    <span className="text-[10px] font-mono text-zinc-600">{formatSize(file.size)}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Configurations */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1.5"><Clock className="w-3 h-3" /> Expiry</span>
                                            <span className="text-xs font-mono font-black text-primary">{formatExpiry(expiresIn[0])}</span>
                                        </div>
                                        <Slider value={expiresIn} onValueChange={setExpiresIn} min={1} max={168} step={1} className="py-2" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1.5"><Zap className="w-3 h-3" /> Access</span>
                                            <span className="text-xs font-mono font-black text-primary">{maxDownloads[0]}× Views</span>
                                        </div>
                                        <Slider value={maxDownloads} onValueChange={setMaxDownloads} min={1} max={100} step={1} className="py-2" />
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setMaxDownloads(maxDownloads[0] === 1 ? [5] : [1])}
                                    className={`w-full py-3 rounded-xl border font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                                        maxDownloads[0] === 1 ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-zinc-900 border-white/5 text-zinc-500 hover:text-zinc-300'
                                    }`}
                                >
                                    <Flame className="w-3.5 h-3.5" />
                                    {maxDownloads[0] === 1 ? "Protocol: Burn-on-Read Active" : "Enable Burn-on-Read Protocol"}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Footer Actions */}
                <div className="flex gap-4">
                    {step === 2 && (
                        <Button variant="ghost" onClick={() => setStep(1)} className="h-14 w-20 rounded-2xl border border-white/5 text-zinc-500 hover:text-white hover:bg-white/5">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    )}
                    <Button 
                        onClick={step === 1 ? () => setStep(2) : handleUpload} 
                        disabled={files.length === 0 || !!uploadError}
                        className="h-14 flex-1 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(16,185,129,0.2)] group"
                    >
                        {step === 1 ? "Configure" : "Establish Secure Bridge"}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </main>
        </div>
    );
}
