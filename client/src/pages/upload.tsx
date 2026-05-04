import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Upload, ArrowLeft, Shield, Timer, Zap, AlertTriangle, X,
    Paperclip, FileText, Image as ImageIcon, FileVideo, FileAudio,
    File, ChevronRight, Check, Eye, ArrowRight, Flame, Clock, CheckCircle2,
    Send, Trash2, HardDrive, UploadCloud, FileArchive, Loader2, Activity, Cpu, Network,
    ShieldCheck, Fingerprint, Database, Binary
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
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
    const [expiresIn, setExpiresIn] = useState([1]);
    const [maxDownloads, setMaxDownloads] = useState([5]);
    const [stage, setStage] = useState<UploadStage>("idle");
    const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [isDragActive, setIsDragActive] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [uploadStats, setUploadStats] = useState<{ speed: number, eta: number }>({ speed: 0, eta: 0 });
    const [showCodeDuringUpload, setShowCodeDuringUpload] = useState(false);

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();

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
    const stageRef = useRef<UploadStage>("idle");

    // Keep stageRef in sync with stage state
    useEffect(() => { stageRef.current = stage; }, [stage]);

    const CHUNK_SIZE = 5 * 1024 * 1024;

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
    };

    const removeFile = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
        if (newFiles.length === 0) {
            setStep(1);
        }
    };

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
                        if (stageRef.current === "uploading") {
                            setProgress(10 + (perc * 0.9));
                            if (stats) setUploadStats(stats);
                        }
                    },
                    onError: (err) => {
                        console.error("[Background Queue Error]", err);
                        if (stageRef.current === "uploading") {
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
                    if (stageRef.current === "uploading") {
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

    return (
        <div className="flex flex-col min-h-screen bg-black text-zinc-100 font-sans selection:bg-primary/30 selection:text-white">
            {/* ─── Background Infrastructure ─── */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 grid-bg opacity-[0.15]" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-50" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse-slow delay-700" />
                <div className="scanline opacity-10" />
            </div>

            {/* ─── Persistent Executive Header (FLOW BASED) ─── */}
            <header className="relative z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl shrink-0">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex flex-col text-left">
                                <h1 className="text-lg font-black font-mono tracking-widest text-white leading-none uppercase">VAULT<span className="text-primary">BRIDGE</span></h1>
                                <span className="text-[9px] font-black text-zinc-600 tracking-[0.3em] uppercase mt-1">Security_Protocol_v2.4</span>
                            </div>
                        </div>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase">Nodes_Operational</span>
                        </div>
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white px-6 h-10 text-[10px] font-black tracking-[0.2em] gap-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                <ArrowLeft className="w-4 h-4" /> DISCONNECT
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* ─── Main Ingestion Pipeline ─── */}
            <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-24 pb-20 flex-1">
                
                {/* 1. Executive Title & Context */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                        <Activity className="w-4 h-4 animate-pulse" />
                        Awaiting_Binary_Payload
                    </div>
                    <div className="relative inline-block">
                        <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-[1.1]">
                            Binary <span className="text-primary drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">Ingestion</span>
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full blur-[1px]" />
                    </div>
                    <p className="text-zinc-500 text-base font-medium max-w-lg mx-auto mt-8 leading-relaxed">
                        Establishing a zero-knowledge tunnel. Your sensitive data is fragmented and encrypted before leaving this terminal.
                    </p>
                </motion.div>

                {/* 2. Process Stage Tracker */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    {STEPS.map((s) => (
                        <div key={s.id} className="flex items-center gap-4">
                            <motion.div 
                                animate={{ 
                                    scale: step === s.id ? 1.05 : 1,
                                    borderColor: step >= s.id ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.05)'
                                }}
                                className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-700 border flex items-center gap-3 ${
                                    step >= s.id 
                                        ? 'bg-primary/10 text-primary shadow-[0_10px_30px_rgba(16,185,129,0.1)]' 
                                        : 'bg-zinc-900/50 text-zinc-600'
                                }`}
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${step >= s.id ? 'bg-primary animate-pulse' : 'bg-zinc-800'}`} />
                                {s.label}
                            </motion.div>
                            {s.id === 1 && <ChevronRight className="w-5 h-5 text-zinc-800" />}
                        </div>
                    ))}
                </div>

                {/* 3. Primary Action Terminal */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="glass-card relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
                    >
                        <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        
                        <div className="p-1">
                            <AnimatePresence mode="wait">
                                {stage !== "idle" && (
                                    <motion.div 
                                        initial={{ opacity: 0 }} 
                                        animate={{ opacity: 1 }} 
                                        exit={{ opacity: 0 }} 
                                        className="absolute inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-start pt-16 pb-12 px-8 overflow-y-auto custom-scrollbar"
                                    >
                                        <div className="w-full max-w-xl">
                                            <EncryptionProgress
                                                stage={stage} step={currentStep} progress={progress}
                                                statusText={statusText} speed={uploadStats.speed} eta={uploadStats.eta}
                                                accessCode={showCodeDuringUpload ? backgroundSplitCodeRef.current?.fullCode : undefined}
                                                masterKey={masterKeyString}
                                            />
                                            {stage === 'uploading' && (
                                                <div className="mt-12 flex justify-center">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm" 
                                                        onClick={() => window.location.reload()} 
                                                        className="h-12 px-8 rounded-2xl text-red-500 hover:text-red-400 hover:bg-red-500/5 border border-red-500/10 hover:border-red-500/20 text-xs font-black tracking-[0.2em] uppercase transition-all"
                                                    >
                                                        <Activity className="w-4 h-4 mr-3" /> Terminate Secure Handshake
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="p-8 sm:p-12">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-3 px-2">
                                                        <UploadCloud className="w-5 h-5 text-primary" />
                                                        <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Input Channels</span>
                                                    </div>
                                                    <FileDropzone onFilesSelected={handleFilesSelected} disabled={stage !== "idle"} onDragStateChange={setIsDragActive} />
                                                </div>
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-3 px-2">
                                                        <Binary className="w-5 h-5 text-primary" />
                                                        <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Active Buffer</span>
                                                    </div>
                                                    <div className="glass-card bg-black/40 rounded-[2rem] p-6 h-[260px] flex flex-col border-white/5">
                                                        {files.length === 0 ? (
                                                            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30 grayscale">
                                                                <Database className="w-10 h-10 mb-4 text-zinc-600" />
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Buffer_Empty</p>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-2">
                                                                    {files.map((file, i) => {
                                                                        const Icon = getFileIcon(file.type);
                                                                        const colors = getFileColor(file.type);
                                                                        return (
                                                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group/file">
                                                                                <div className="flex items-center gap-3 truncate">
                                                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${colors} border-opacity-20`}>
                                                                                        <Icon className="w-3.5 h-3.5" />
                                                                                    </div>
                                                                                    <span className="text-xs font-bold text-zinc-300 truncate">{file.name}</span>
                                                                                </div>
                                                                                <button onClick={() => removeFile(i)} className="p-1.5 hover:bg-red-500/10 rounded-lg text-zinc-600 hover:text-red-500 transition-all">
                                                                                    <Trash2 className="w-3.5 h-3.5" />
                                                                                </button>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">Total Payload</span>
                                                                    <span className="text-[11px] font-mono font-bold text-primary">{formatSize(totalSize)}</span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center justify-center pt-10">
                                                <Button 
                                                    disabled={files.length === 0} 
                                                    onClick={() => setStep(2)} 
                                                    className="w-full max-w-md h-20 rounded-[1.5rem] bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-black uppercase tracking-[0.2em] text-xl shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:brightness-110 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center"
                                                >
                                                    Initialize Engine <ChevronRight className="ml-4 w-7 h-7" />
                                                </Button>
                                                <p className="mt-6 text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em] animate-pulse">Awaiting secure payload confirmation</p>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                            <div className="max-w-xl mx-auto space-y-10">
                                                <div className="flex items-center gap-3 mb-4 justify-center">
                                                    <Cpu className="w-5 h-5 text-primary" />
                                                    <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.4em]">Tunnel_Configuration</span>
                                                </div>
                                                
                                                <div className="grid grid-cols-1 gap-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 shadow-inner">
                                                    <div className="space-y-6">
                                                        <div className="flex justify-between items-center px-1">
                                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Buffer Expiration</span>
                                                            <span className="text-sm font-mono font-black text-primary px-3 py-1 rounded-lg bg-primary/10 border border-primary/20">{formatExpiry(expiresIn[0])}</span>
                                                        </div>
                                                        <div className="px-1 py-4 bg-black/20 rounded-2xl">
                                                            <Slider value={expiresIn} onValueChange={setExpiresIn} min={1} max={168} step={1} className="py-2" />
                                                        </div>
                                                        <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] px-1 text-center">Data will be vaporized from all nodes after this period</p>
                                                    </div>
                                                    
                                                    <div className="space-y-6">
                                                        <div className="flex justify-between items-center px-1">
                                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2"><Eye className="w-4 h-4 text-primary" /> Access Threshold</span>
                                                            <span className="text-sm font-mono font-black text-primary px-3 py-1 rounded-lg bg-primary/10 border border-primary/20">{maxDownloads[0]}× Views</span>
                                                        </div>
                                                        <div className="px-1 py-4 bg-black/20 rounded-2xl">
                                                            <Slider value={maxDownloads} onValueChange={setMaxDownloads} min={1} max={100} step={1} className="py-2" />
                                                        </div>
                                                        <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] px-1 text-center">Maximum number of successful cryptographic retrievals allowed</p>
                                                    </div>
                                                </div>

                                                <button 
                                                    onClick={() => setMaxDownloads(maxDownloads[0] === 1 ? [5] : [1])}
                                                    className={`w-full py-4 rounded-[1.5rem] border font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${
                                                        maxDownloads[0] === 1 ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-zinc-900 border-white/5 text-zinc-500 hover:text-zinc-300'
                                                    }`}
                                                >
                                                    <Flame className="w-4 h-4" />
                                                    {maxDownloads[0] === 1 ? "Protocol: Burn-on-Read Active" : "Enable Burn-on-Read Protocol"}
                                                </button>
                                            </div>

                                            <div className="flex flex-col items-center gap-8 pt-12 border-t border-white/5">
                                                <Button 
                                                    onClick={handleUpload} 
                                                    className="w-full max-w-md h-20 rounded-[1.5rem] bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-black uppercase tracking-[0.2em] text-xl shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:brightness-110 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center"
                                                >
                                                    ESTABLISH SECURE BRIDGE <Zap className="ml-4 w-6 h-6 fill-current" />
                                                </Button>
                                                
                                                <Button 
                                                    onClick={() => setStep(1)} 
                                                    className="px-10 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all font-black uppercase tracking-[0.15em]"
                                                >
                                                    <ArrowLeft className="w-4 h-4 mr-2" /> Return to Selection
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 4. Infrastructure Stats (Footer) */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10">
                    <div className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/30 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all">
                        <ShieldCheck className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary transition-colors" />
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Security</span>
                        <span className="text-xs font-bold text-zinc-400">AES-256-GCM_TUNNEL</span>
                    </div>
                    <div className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/30 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all">
                        <Fingerprint className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary transition-colors" />
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Identity</span>
                        <span className="text-xs font-bold text-zinc-400">ZERO_KNOWLEDGE_PROOF</span>
                    </div>
                    <div className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/30 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-all">
                        <Lock className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary transition-colors" />
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Persistence</span>
                        <span className="text-xs font-bold text-zinc-400">EPHEMERAL_BURN_LOGIC</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
