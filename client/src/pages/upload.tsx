import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Upload, ArrowLeft, Shield, Timer, Zap
} from "lucide-react";
import { FileDropzone } from "@/components/file-dropzone";
import { EncryptionProgress } from "@/components/encryption-progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useCreateVault, useGetChunkUploadUrl, useMarkChunkUploaded } from "@/hooks/use-vaults";
import { generateKey, exportKey, encryptMetadata, encryptData, generateUUID, generateSplitCode, wrapFileKey } from "@/lib/crypto";

const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks

type UploadStage = "idle" | "encrypting" | "uploading" | "success";
type ProgressStep = "keys" | "metadata" | "chunks" | "upload" | "done";

export default function UploadPage() {
    const [files, setFiles] = useState<File[]>([]);
    const [expiresIn, setExpiresIn] = useState([24]);
    const [maxDownloads, setMaxDownloads] = useState([5]);
    const [stage, setStage] = useState<UploadStage>("idle");
    const [currentStep, setCurrentStep] = useState<ProgressStep>("keys");
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [isDragActive, setIsDragActive] = useState(false);

    const [, setLocation] = useLocation();
    const { toast } = useToast();

    const createVault = useCreateVault();
    const getChunkUrl = useGetChunkUploadUrl();
    const markUploaded = useMarkChunkUploaded();

    const handleUpload = async () => {
        if (files.length === 0) return;
        setStage("encrypting");
        setProgress(0);

        try {
            // Step 1: Generate Keys and Split-Code
            setCurrentStep("keys");
            setStatusText("Generating AES-256-GCM encryption key...");
            await new Promise(r => setTimeout(r, 500));
            const key = await generateKey();

            // Generate 6-digit split code for air-gapped transfer
            const splitCode = generateSplitCode();
            setStatusText("Wrapping key with PIN protection...");

            // Wrap the file key with the PIN-derived wrapper key
            // This ensures the server never sees the raw file key
            const wrappedKey = await wrapFileKey(key, splitCode.pin);
            setProgress(10);

            // Step 2: Encrypt Metadata
            setCurrentStep("metadata");
            setStatusText("Encrypting file metadata...");
            const fileMetadata = files.map(f => ({
                name: f.name,
                type: f.type,
                size: f.size,
                fileId: generateUUID(),
                lastModified: f.lastModified
            }));
            const encryptedMetadata = await encryptMetadata(fileMetadata, key);
            setProgress(20);

            // Step 3: Create Vault with Split-Code
            setStatusText("Registering secure vault...");
            const filesPayload = files.map((f, index) => ({
                fileId: fileMetadata[index].fileId,
                chunks: Math.ceil(f.size / CHUNK_SIZE),
                size: f.size
            }));

            const vault = await createVault.mutateAsync({
                expiresIn: expiresIn[0],
                maxDownloads: maxDownloads[0],
                encryptedMetadata,
                lookupId: splitCode.lookupId, // 3-digit public ID
                wrappedKey, // PIN-encrypted file key
                files: filesPayload
            });
            setProgress(30);

            // Step 4: Encrypt & Upload Chunks
            setStage("uploading");
            setCurrentStep("chunks");
            const totalChunks = filesPayload.reduce((acc, f) => acc + f.chunks, 0);
            let processedChunks = 0;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileId = fileMetadata[i].fileId;
                const totalFileChunks = Math.ceil(file.size / CHUNK_SIZE);

                for (let chunkIndex = 0; chunkIndex < totalFileChunks; chunkIndex++) {
                    setStatusText(`Encrypting ${file.name} [${chunkIndex + 1}/${totalFileChunks}]`);
                    setCurrentStep("chunks");

                    const start = chunkIndex * CHUNK_SIZE;
                    const end = Math.min(start + CHUNK_SIZE, file.size);
                    const chunkBlob = file.slice(start, end);
                    const chunkBuffer = await chunkBlob.arrayBuffer();

                    const { iv, encryptedData } = await encryptData(chunkBuffer, key);
                    const combinedBuffer = new Uint8Array(iv.byteLength + encryptedData.byteLength);
                    combinedBuffer.set(iv, 0);
                    combinedBuffer.set(new Uint8Array(encryptedData), iv.byteLength);

                    setCurrentStep("upload");
                    setStatusText(`Uploading ${file.name} [${chunkIndex + 1}/${totalFileChunks}]`);

                    const { uploadUrl, storagePath } = await getChunkUrl.mutateAsync({
                        vaultId: vault.id,
                        fileId,
                        chunkIndex,
                        size: combinedBuffer.byteLength
                    });

                    await fetch(uploadUrl, { method: 'PUT', body: combinedBuffer });

                    await markUploaded.mutateAsync({
                        vaultId: vault.id,
                        fileId,
                        chunkIndex,
                        storagePath
                    });

                    processedChunks++;
                    setProgress(30 + (processedChunks / totalChunks) * 65);
                }
            }

            setCurrentStep("done");
            setProgress(100);
            setStatusText("Vault created successfully!");
            setStage("success");

            setTimeout(() => {
                // Pass the full 6-digit code in URL for display on success page
                setLocation(`/success/${vault.id}#code=${splitCode.fullCode}`);
            }, 800);

        } catch (err) {
            console.error(err);
            setStage("idle");
            toast({
                variant: "destructive",
                title: "Upload Failed",
                description: err instanceof Error ? err.message : "An error occurred",
            });
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-50" />
            <div className="scanline" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 px-6 py-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                <Lock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold font-mono tracking-tight">
                                    VAULT<span className="text-primary">BRIDGE</span>
                                </h1>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-2xl mx-auto px-6 py-8">
                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                            <Upload className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Upload Files</h2>
                    <p className="text-muted-foreground">
                        Create a secure, encrypted vault for your files
                    </p>
                </motion.div>

                {/* Upload Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`glass-card p-8 relative ${isDragActive ? 'dropzone-glow active' : ''}`}
                >
                    {/* Progress Overlay */}
                    <AnimatePresence>
                        {stage !== "idle" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-background/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 rounded-2xl"
                            >
                                <EncryptionProgress
                                    stage={stage}
                                    step={currentStep}
                                    progress={progress}
                                    statusText={statusText}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <FileDropzone
                        onFilesSelected={setFiles}
                        disabled={stage !== "idle"}
                        onDragStateChange={setIsDragActive}
                    />

                    {/* Settings */}
                    <div className="mt-8 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Timer className="w-4 h-4" />
                                        Expires In
                                    </label>
                                    <span className="text-sm font-mono text-primary font-bold">{expiresIn[0]}h</span>
                                </div>
                                <Slider
                                    value={expiresIn}
                                    onValueChange={setExpiresIn}
                                    min={1}
                                    max={168}
                                    step={1}
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        Max Downloads
                                    </label>
                                    <span className="text-sm font-mono text-primary font-bold">{maxDownloads[0]}</span>
                                </div>
                                <Slider
                                    value={maxDownloads}
                                    onValueChange={setMaxDownloads}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </div>
                        </div>

                        <Button
                            onClick={handleUpload}
                            disabled={files.length === 0 || stage !== "idle"}
                            className="w-full h-14 cyber-btn text-base"
                        >
                            <Shield className="w-5 h-5 mr-2" />
                            Encrypt & Upload
                        </Button>
                    </div>
                </motion.div>

                {/* Security Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        🔐 Files are encrypted in your browser with AES-256-GCM before upload.
                        <br />
                        We never see your files or encryption keys.
                    </p>
                </motion.div>
            </main>
        </div>
    );
}
