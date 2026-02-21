import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Upload, ArrowLeft, Shield, Timer, Zap, AlertTriangle, X,
    Paperclip, FileText, Image as ImageIcon, FileArchive, FileVideo, FileAudio,
    File, ChevronRight, Check, Eye, ArrowRight, Flame, Clock, CheckCircle2,
    Send, Trash2, HardDrive, UploadCloud, FolderArchive, Loader2
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
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, generateUUID, generateSplitCode, wrapFileKey, encryptData } from "@/lib/crypto";
import { getUploadConfig, formatBytes, MAX_FILE_SIZE } from "@/lib/uploadConfig";
import { clearStoredFiles, saveUploadSettings, loadUploadSettings } from "@/lib/fileStorage";

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
    if (type.startsWith("image/")) return "text-sky-400 bg-sky-500/10 border-sky-500/20";
    if (type.startsWith("video/")) return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    if (type.startsWith("audio/")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    if (type.includes("zip") || type.includes("rar") || type.includes("tar"))
        return "text-orange-400 bg-orange-500/10 border-orange-500/20";
    if (type.includes("pdf")) return "text-red-400 bg-red-500/10 border-red-500/20";
    return "text-amber-400 bg-amber-500/10 border-amber-500/20";
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
    const [expiresIn, setExpiresIn] = useState([24]);
    const [maxDownloads, setMaxDownloads] = useState([5]);
    const [stage, setStage] = useState<UploadStage>("idle");
    const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [isDragActive, setIsDragActive] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const abortControllerRef = useRef<AbortController | null>(null);

    const createVault = useCreateVault();
    const getChunkUrl = useGetChunkUploadUrl();
    const markUploaded = useMarkChunkUploaded();

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

    const handleFilesSelected = (newFiles: File[]) => {
        setUploadError(null);

        // Validate files
        const config = getUploadConfig(newFiles);
        if (!config.isValid) {
            playSound('error');
            setUploadError(config.errorMessage || "Invalid files");
            toast({
                variant: "destructive",
                title: "Upload Limit Exceeded",
                description: config.errorMessage,
            });
            return;
        }

        playSound('drop');
        setFiles(newFiles);
    };

    const handleUpload = async () => {
        setShowConfirmDialog(false);
        if (files.length === 0) return;

        // Final validation
        const config = getUploadConfig(files);
        if (!config.isValid) {
            toast({
                variant: "destructive",
                title: "Upload Error",
                description: config.errorMessage,
            });
            return;
        }

        setStage("encrypting");
        setProgress(0);
        abortControllerRef.current = new AbortController();

        try {
            const startTime = Date.now();

            // Step 1: Generate Keys
            setCurrentStep("keys");
            setStatusText("Generating military-grade AES-256 keys...");
            await new Promise(r => setTimeout(r, 300));
            const key = await generateKey();
            setProgress(10);

            // Step 2: Encrypt Metadata
            setCurrentStep("metadata");
            setStatusText("Encrypting metadata...");

            const fileMetadata = files.map(f => ({
                name: f.name,
                type: f.type,
                size: f.size,
                fileId: generateUUID(),
                lastModified: f.lastModified
            }));

            const encryptedMetadata = await encryptMetadata(fileMetadata, key);

            // Prepare files payload - 1 chunk per file (no chunking)
            const filesPayload = fileMetadata.map(fm => ({
                fileId: fm.fileId,
                chunks: 1,
                size: fm.size,
                isCompressed: false,
                originalSize: fm.size
            }));
            setProgress(20);

            // Step 3: Register Vault
            const maxLookupRetries = 5;
            let splitCode: ReturnType<typeof generateSplitCode> | null = null;
            let wrappedKey = "";
            let vault: Awaited<ReturnType<typeof createVault.mutateAsync>> | null = null;

            for (let attempt = 0; attempt <= maxLookupRetries; attempt++) {
                splitCode = generateSplitCode();
                setStatusText(`Deriving PIN-protective wrapper (attempt ${attempt + 1})...`);
                wrappedKey = await wrapFileKey(key, splitCode.pin);

                try {
                    setStatusText("Securing vault location...");
                    vault = await createVault.mutateAsync({
                        expiresIn: expiresIn[0],
                        maxDownloads: maxDownloads[0],
                        encryptedMetadata,
                        lookupId: splitCode.lookupId,
                        wrappedKey,
                        files: filesPayload
                    });
                    break;
                } catch (err) {
                    const typedError = err as Error & { status?: number; code?: string };
                    const isLookupCollision =
                        typedError.status === 409 || typedError.code === "LOOKUP_ID_CONFLICT";
                    if (!isLookupCollision || attempt === maxLookupRetries) {
                        throw err;
                    }
                }
            }

            if (!vault || !splitCode) {
                throw new Error("Could not allocate a unique access code. Please retry.");
            }

            setProgress(30);

            // Step 4: Encrypt & Upload Each File (No Chunking - Single Blob)
            setStage("uploading");
            setCurrentStep("transfer");

            const totalFiles = files.length;

            for (let i = 0; i < files.length; i++) {
                // Check abort
                if (abortControllerRef.current.signal.aborted) {
                    throw new Error("Upload cancelled");
                }

                const file = files[i];
                const fileId = filesPayload[i].fileId;
                const displayName = truncateName(file.name);

                // Read entire file
                setStatusText(`Reading ${displayName}...`);
                const fileBuffer = await file.arrayBuffer();

                // Encrypt entire file
                setStatusText(`Encrypting ${displayName}...`);
                const { iv, encryptedData } = await encryptData(fileBuffer, key);

                // Combine IV + encrypted data
                const combined = new Uint8Array(iv.byteLength + encryptedData.byteLength);
                combined.set(iv, 0);
                combined.set(new Uint8Array(encryptedData), iv.byteLength);

                // Get upload URL
                setStatusText(`Uploading ${displayName}...`);
                const { uploadUrl, storagePath } = await getChunkUrl.mutateAsync({
                    vaultId: vault.id,
                    fileId,
                    chunkIndex: 0,
                    size: combined.byteLength
                });

                // Upload to Supabase
                const response = await fetch(uploadUrl, {
                    method: 'PUT',
                    body: combined,
                    signal: abortControllerRef.current.signal
                });

                if (!response.ok) {
                    throw new Error(`Upload failed for ${file.name}: ${response.statusText}`);
                }

                // Mark as uploaded
                await markUploaded.mutateAsync({
                    vaultId: vault.id,
                    fileId,
                    chunkIndex: 0,
                    storagePath
                });

                // Update progress
                const perc = 30 + ((i + 1) / totalFiles) * 65;
                setProgress(perc);
            }

            setCurrentStep("done");
            setProgress(100);
            setStatusText("Finalizing secure vault...");
            setStage("success");
            playSound('success');

            // Clear persisted files after successful upload
            await clearStoredFiles();

            // Stats Calculation
            const endTime = Date.now();
            const duration = endTime - startTime; // ms
            const speed = totalSize / (duration / 1000); // Bytes/sec

            setTimeout(() => {
                setLocation(`/success/${vault.id}#code=${splitCode.fullCode}&time=${duration}&speed=${Math.floor(speed)}`);
            }, 800);

        } catch (err) {
            console.error(err);
            playSound('error');
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

    // Calculate total size for display
    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    const sizePercentage = Math.min((totalSize / (500 * 1024 * 1024)) * 100, 100);

    const canProceed = step === 1 ? files.length > 0 && !uploadError : true;

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 px-4 sm:px-6 py-4 sm:py-6 border-b border-white/5 safe-top">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 cursor-pointer group shrink-0"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                            </div>
                            <h1 className="text-lg sm:text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors">
                                VAULT<span className="text-amber-500">BRIDGE</span>
                            </h1>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-1.5 sm:gap-2 text-zinc-400 hover:text-white hover:bg-white/5 px-2 sm:px-3 text-xs sm:text-sm">
                            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Back</span>
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-3 sm:px-6 py-6 sm:py-12 safe-bottom">

                {/* Title Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6 sm:mb-8"
                >
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 text-amber-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4">
                        <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        End-to-End Encrypted Vault
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent">
                        Secure Upload
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto px-2">
                        Select files, configure vault settings, then encrypt & upload — all client-side, zero-knowledge.
                    </p>
                </motion.div>

                {/* Step Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-8"
                >
                    {STEPS.map((s, i) => {
                        const isCompleted = step > s.id;
                        const isCurrent = step === s.id;
                        const StepIcon = s.icon;

                        return (
                            <div key={s.id} className="flex items-center gap-1.5 sm:gap-3">
                                <button
                                    onClick={() => {
                                        if (isCompleted) setStep(s.id);
                                    }}
                                    disabled={!isCompleted && !isCurrent}
                                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${isCompleted
                                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20"
                                        : isCurrent
                                            ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                                            : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 cursor-not-allowed"
                                        }`}
                                >
                                    {isCompleted ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <StepIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                                    <span className="hidden sm:inline">{s.label}</span>
                                </button>
                                {i < STEPS.length - 1 && (
                                    <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 ${step > s.id ? "text-emerald-500/50" : "text-zinc-700"}`} />
                                )}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Upload Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className={`bg-zinc-900/50 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl ${isDragActive ? 'ring-2 ring-amber-500 bg-amber-500/5' : ''}`}
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

                    <AnimatePresence mode="wait">
                        {/* ─── STEP 1: SELECT FILES ─── */}
                        {step === 1 && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.25 }}
                                className="p-4 sm:p-8 space-y-4 sm:space-y-6"
                            >
                                <FileDropzone
                                    onFilesSelected={handleFilesSelected}
                                    disabled={stage !== "idle"}
                                    onDragStateChange={setIsDragActive}
                                />

                                {/* Error Display */}
                                {uploadError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3"
                                    >
                                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-red-400">{uploadError}</p>
                                            <p className="text-xs text-zinc-500 mt-1">Maximum file size: 500 MB</p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Size Progress Bar */}
                                {files.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-zinc-400">
                                                {files.length} file{files.length > 1 ? 's' : ''} selected
                                            </span>
                                            <span className="font-mono text-amber-400">{formatSize(totalSize)} / 500 MB</span>
                                        </div>
                                        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${sizePercentage}%` }}
                                                className={`h-full rounded-full transition-colors ${sizePercentage > 90 ? 'bg-red-500' : sizePercentage > 70 ? 'bg-amber-500' : 'bg-amber-500/70'}`}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Security Badges */}
                                <div className="flex flex-wrap gap-2 justify-center pt-2">
                                    <div className="px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                        <Shield className="w-3 h-3 text-emerald-500" />
                                        AES-256-GCM
                                    </div>
                                    <div className="px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                        <Lock className="w-3 h-3 text-amber-500" />
                                        Lossless Transfer
                                    </div>
                                    <div className="px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                        <Zap className="w-3 h-3 text-blue-500" />
                                        Max 500MB
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* ─── STEP 2: CONFIGURE & REVIEW ─── */}
                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.25 }}
                                className="p-4 sm:p-8 space-y-4 sm:space-y-6"
                            >
                                {/* Files Summary Card */}
                                <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-2 sm:space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Paperclip className="w-4 h-4 text-amber-400" />
                                            <span className="text-sm font-semibold text-zinc-200">Attachments</span>
                                        </div>
                                        <span className="text-xs font-mono text-zinc-500">{formatSize(totalSize)}</span>
                                    </div>
                                    <div className="space-y-1.5 max-h-32 overflow-y-auto">
                                        {files.map((file, i) => {
                                            const Icon = getFileIcon(file.type);
                                            const colorClasses = getFileColor(file.type);
                                            return (
                                                <div key={i} className="flex items-center gap-3 py-1.5">
                                                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorClasses}`}>
                                                        <Icon className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="text-sm text-zinc-300 truncate flex-1">{file.name}</span>
                                                    <span className="text-xs font-mono text-zinc-500 flex-shrink-0">{formatSize(file.size)}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Settings Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    {/* Expiry Slider */}
                                    <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-3 sm:space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-amber-400" />
                                                Auto-Destruct
                                            </label>
                                            <span className="text-sm font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-lg">
                                                {formatExpiry(expiresIn[0])}
                                            </span>
                                        </div>
                                        <Slider
                                            value={expiresIn}
                                            onValueChange={setExpiresIn}
                                            min={1}
                                            max={168}
                                            step={1}
                                            className="py-2"
                                        />
                                        <p className="text-[10px] text-zinc-600 leading-relaxed">
                                            Vault & all encrypted files will be permanently erased after this time.
                                        </p>
                                    </div>

                                    {/* Download Limit */}
                                    <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-3 sm:space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-emerald-400" />
                                                Download Limit
                                            </label>
                                            <span className={`text-sm font-mono font-bold px-2.5 py-0.5 rounded-lg ${maxDownloads[0] === 1
                                                ? "text-red-400 bg-red-500/10"
                                                : "text-emerald-400 bg-emerald-500/10"
                                                }`}>
                                                {maxDownloads[0] === 1 ? "BURN" : `${maxDownloads[0]}×`}
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
                                        <button
                                            onClick={() => setMaxDownloads(maxDownloads[0] === 1 ? [5] : [1])}
                                            className={`w-full text-xs cursor-pointer select-none transition-all py-2.5 rounded-xl border flex items-center justify-center gap-2 ${maxDownloads[0] === 1
                                                ? "bg-red-500/10 border-red-500/25 text-red-400"
                                                : "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"
                                                }`}
                                        >
                                            <Flame className={`w-3.5 h-3.5 ${maxDownloads[0] === 1 ? "text-red-400" : ""}`} />
                                            {maxDownloads[0] === 1 ? "Burn-on-Read Active (1 view)" : "Enable Burn-on-Read"}
                                        </button>
                                    </div>
                                </div>

                                {/* Zero-Knowledge Note */}
                                <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-3 sm:p-4 flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-4.5 h-4.5 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-amber-300">Zero-Knowledge Encryption</p>
                                        <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                                            Encryption happens entirely in your browser. We never see your files, keys, or data.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Navigation Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3"
                >
                    {step > 1 && (
                        <Button
                            onClick={() => setStep(step - 1)}
                            variant="outline"
                            className="flex-1 h-12 sm:h-14 text-sm sm:text-base border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    )}

                    {step === 1 && (
                        <Button
                            onClick={() => setStep(2)}
                            disabled={!canProceed}
                            className="flex-1 h-12 sm:h-14 text-sm sm:text-base font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full"
                        >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}

                    {step === 2 && (
                        <Button
                            onClick={() => setShowConfirmDialog(true)}
                            disabled={files.length === 0 || stage !== "idle" || !!uploadError}
                            className="flex-1 h-12 sm:h-14 text-sm sm:text-base font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full"
                        >
                            <Lock className="w-4 h-4 mr-2" />
                            Encrypt & Upload
                        </Button>
                    )}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-center"
                >
                    <p className="text-[10px] md:text-xs text-center text-muted-foreground opacity-70">
                        By continuing, you agree to our <Link href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</Link>, <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link> & <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Sitemap</a>.
                    </p>
                </motion.div>
            </main>

            {/* ─── Confirmation Dialog ─── */}
            <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl">
                    {/* Header */}
                    <div className="relative h-20 bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-amber-950/60 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12),transparent)]" />
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="w-12 h-12 bg-amber-500/15 rounded-xl border border-amber-500/25 flex items-center justify-center relative z-10"
                        >
                            <Lock className="w-6 h-6 text-amber-400" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 pt-4">
                        <DialogHeader className="mb-4">
                            <DialogTitle className="text-lg font-bold text-center">Confirm Encryption</DialogTitle>
                            <DialogDescription className="text-center text-zinc-500 text-sm">
                                Review your vault configuration before encrypting
                            </DialogDescription>
                        </DialogHeader>

                        {/* Summary */}
                        <div className="space-y-3 mb-5">
                            {/* Files */}
                            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2.5">
                                    <Paperclip className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="text-xs font-semibold text-zinc-300">{files.length} file{files.length > 1 ? 's' : ''}</span>
                                    <span className="text-xs font-mono text-zinc-600 ml-auto">{formatSize(totalSize)}</span>
                                </div>
                                <div className="space-y-1.5 max-h-24 overflow-y-auto">
                                    {files.map((file, i) => {
                                        const Icon = getFileIcon(file.type);
                                        const colorClasses = getFileColor(file.type);
                                        return (
                                            <div key={i} className="flex items-center gap-2.5">
                                                <div className={`w-6 h-6 rounded-md border flex items-center justify-center ${colorClasses}`}>
                                                    <Icon className="w-3 h-3" />
                                                </div>
                                                <span className="text-xs text-zinc-400 truncate flex-1">{file.name}</span>
                                                <span className="text-[10px] font-mono text-zinc-600">{formatSize(file.size)}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Settings Summary */}
                            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2.5">
                                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Vault Settings</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3 h-3 text-amber-400" />
                                        <span className="text-xs text-zinc-400">Expires:</span>
                                        <span className="text-xs font-mono text-amber-400">{formatExpiry(expiresIn[0])}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-3 h-3 text-emerald-400" />
                                        <span className="text-xs text-zinc-400">Limit:</span>
                                        <span className={`text-xs font-mono ${maxDownloads[0] === 1 ? "text-red-400" : "text-emerald-400"}`}>
                                            {maxDownloads[0] === 1 ? "Burn-on-Read" : `${maxDownloads[0]}× downloads`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setShowConfirmDialog(false)}
                                className="flex-1 h-12 border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl"
                            >
                                Go Back
                            </Button>
                            <Button
                                onClick={handleUpload}
                                className="flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20"
                            >
                                <Lock className="w-4 h-4 mr-2" />
                                Encrypt Now
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
