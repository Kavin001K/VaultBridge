import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Upload, ArrowLeft, Shield, Timer, Zap, AlertTriangle, X
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, generateUUID, generateSplitCode, wrapFileKey, encryptData } from "@/lib/crypto";
import { getUploadConfig, formatBytes, MAX_FILE_SIZE } from "@/lib/uploadConfig";
import { clearStoredFiles, saveUploadSettings, loadUploadSettings } from "@/lib/fileStorage";

type UploadStage = "idle" | "encrypting" | "uploading" | "success";
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
    const [uploadError, setUploadError] = useState<string | null>(null);

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

            // Generate Split-Code
            const splitCode = generateSplitCode();
            setStatusText("Deriving PIN-protective wrapper...");
            const wrappedKey = await wrapFileKey(key, splitCode.pin);
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
            setStatusText("Securing vault location...");
            const vault = await createVault.mutateAsync({
                expiresIn: expiresIn[0],
                maxDownloads: maxDownloads[0],
                encryptedMetadata,
                lookupId: splitCode.lookupId,
                wrappedKey,
                files: filesPayload
            });
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

                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                <Shield className="w-3 h-3 text-emerald-500" />
                                AES-256-GCM
                            </div>
                            <div className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                <Lock className="w-3 h-3 text-amber-500" />
                                Lossless Transfer
                            </div>
                            <div className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                                <Zap className="w-3 h-3 text-blue-500" />
                                Max 500MB
                            </div>
                        </div>

                        {/* Size Display */}
                        {files.length > 0 && (
                            <div className="text-center text-sm text-zinc-400">
                                {files.length} file{files.length > 1 ? 's' : ''} selected • {formatBytes(totalSize)} total
                            </div>
                        )}
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
                            disabled={files.length === 0 || stage !== "idle" || !!uploadError}
                            className="w-full h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
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
                        We never see your files, keys, or data.
                    </p>
                </motion.div>
            </main>
        </div>
    );
}
