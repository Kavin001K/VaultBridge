import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, KeyRound, ArrowLeft, Shield, AlertTriangle, Download, Loader2, Clock, HardDrive, FileText,
    Clipboard, Copy, Check, Save, RefreshCw, FileType, Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCodeLookup, useGetChunkDownloadUrl, useTrackDownload, useUpdateClipboard, useClipboardSync } from "@/hooks/use-vaults";
import { unwrapFileKey, decryptMetadata, decryptData, decryptClipboardText, encryptClipboardText } from "@/lib/crypto";
import { initiateStreamDownload } from "@/lib/downloadStream";
import { jsPDF } from "jspdf";

type AccessStage = "input" | "fetching" | "decrypting" | "ready" | "downloading";

interface FileMetadata {
    name: string;
    type: string;
    size: number;
    fileId: string;
    isCompressed?: boolean;
    lastModified: number;
}

// SVG Filter for Heat Distortion
const BurnFilter = () => (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
            <filter id="heat-wave">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.01"
                    numOctaves="3"
                    result="noise"
                >
                    <animate
                        attributeName="baseFrequency"
                        dur="2s"
                        values="0.01;0.05;0.2"
                        repeatCount="1"
                    />
                </feTurbulence>
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="20"
                />
            </filter>
        </defs>
    </svg>
);

function CountdownTimer({ expiresAt }: { expiresAt: string }) {
    const [timeLeft, setTimeLeft] = useState<{ h: number, m: number, s: number } | null>(null);

    useEffect(() => {
        const update = () => {
            const now = new Date().getTime();
            const end = new Date(expiresAt).getTime();
            const diff = end - now;

            if (diff <= 0) {
                setTimeLeft(null);
                return;
            }
            setTimeLeft({
                h: Math.floor(diff / (1000 * 60 * 60)),
                m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                s: Math.floor((diff % (1000 * 60)) / 1000)
            });
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [expiresAt]);

    if (!timeLeft) return <span className="text-zinc-500 font-mono text-xs">Expired</span>;

    return (
        <div className="flex items-center gap-1 font-mono text-sm font-bold text-primary">
            <span className="bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded min-w-[2ch] text-center">{timeLeft.h.toString().padStart(2, '0')}</span>
            <span className="text-zinc-500">:</span>
            <span className="bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded min-w-[2ch] text-center">{timeLeft.m.toString().padStart(2, '0')}</span>
            <span className="text-zinc-500">:</span>
            <span className="bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded min-w-[2ch] text-center">{timeLeft.s.toString().padStart(2, '0')}</span>
        </div>
    );
}

export default function AccessPage() {
    const [accessCode, setAccessCode] = useState("");
    const [stage, setStage] = useState<AccessStage>("input");
    const [statusText, setStatusText] = useState("");
    const [fileMetadata, setFileMetadata] = useState<FileMetadata[]>([]);
    const [vaultData, setVaultData] = useState<any>(null);
    const [fileKey, setFileKey] = useState<CryptoKey | null>(null);
    const [isBurned, setIsBurned] = useState(false);
    const [clipboardContent, setClipboardContent] = useState<string | null>(null);
    const [clipboardCopied, setClipboardCopied] = useState(false);

    // Live Clipboard State
    const [isEditing, setIsEditing] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const updateClipboard = useUpdateClipboard();

    // Derived lookupId for sync
    const lookupId = stage === "ready" && accessCode.length === 6 ? accessCode.slice(0, 3) : "";

    // Sync hook
    const { data: syncData } = useClipboardSync(lookupId, stage === "ready" && !!fileKey);

    // Sync Effect
    useEffect(() => {
        if (syncData?.encryptedClipboardText && fileKey && !isEditing) {
            const decryptSync = async () => {
                try {
                    const decrypted = await decryptClipboardText(syncData.encryptedClipboardText!, fileKey);
                    // Only update if difference is meaningful
                    if (decrypted !== clipboardContent) {
                        setClipboardContent(decrypted);
                        if (syncData.updatedAt) {
                            setLastSaved(new Date(syncData.updatedAt));
                        }
                    }
                } catch (e) {
                    console.error("Sync decryption failed", e);
                }
            };
            decryptSync();
        }
    }, [syncData, fileKey, isEditing, clipboardContent]);

    const handleSaveClipboard = async (text: string) => {
        if (!fileKey || !lookupId || !vaultData?.wrappedKey) return;
        try {
            const encrypted = await encryptClipboardText(text, fileKey);
            await updateClipboard.mutateAsync({
                lookupId,
                encryptedClipboardText: encrypted,
                wrappedKey: vaultData.wrappedKey
            });
            setLastSaved(new Date());
        } catch (e) {
            console.error("Save failed", e);
            toast({ variant: "destructive", title: "Failed to save clipboard" });
        }
    };

    const handleExport = (format: 'txt' | 'pdf' | 'doc') => {
        if (!clipboardContent) return;

        switch (format) {
            case 'txt':
                const blob = new Blob([clipboardContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `clipboard-${lookupId}.txt`;
                a.click();
                URL.revokeObjectURL(url);
                break;
            case 'pdf':
                const doc = new jsPDF();
                const splitText = doc.splitTextToSize(clipboardContent, 180);
                doc.text(splitText, 10, 10);
                doc.save(`clipboard-${lookupId}.pdf`);
                break;
            case 'doc':
                // Simple HTML blob for DOC
                const html = `<html><body><pre style="white-space: pre-wrap; font-family: monospace;">${clipboardContent}</pre></body></html>`;
                const docBlob = new Blob([html], { type: 'application/msword' });
                const docUrl = URL.createObjectURL(docBlob);
                const docLink = document.createElement('a');
                docLink.href = docUrl;
                docLink.download = `clipboard-${lookupId}.doc`;
                docLink.click();
                URL.revokeObjectURL(docUrl);
                break;
        }
        toast({ title: `Exported as ${format.toUpperCase()}` });
    };

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const codeLookup = useCodeLookup();
    const getChunkUrl = useGetChunkDownloadUrl();
    const trackDownload = useTrackDownload();

    // Format the code as XXX-XXX
    const formatCodeDisplay = (code: string) => {
        if (code.length <= 3) return code;
        return `${code.slice(0, 3)}-${code.slice(3)}`;
    };

    const handleCodeSubmit = async () => {
        // Validate 6-char alphanumeric code
        const cleanCode = accessCode.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        if (cleanCode.length !== 6) {
            toast({
                variant: "destructive",
                title: "Invalid Code",
                description: "Please enter a 6-character code."
            });
            return;
        }

        setStage("fetching");
        setStatusText("Looking up vault...");

        try {
            // Split the code into lookupId (first 3) and PIN (last 3)
            const lookupId = cleanCode.slice(0, 3);
            const pin = cleanCode.slice(3, 6);

            // Fetch vault data using only the lookupId
            // The server never sees the PIN!
            const vault = await codeLookup.mutateAsync(lookupId);
            setVaultData(vault);

            setStage("decrypting");
            setStatusText("Unwrapping encryption key with PIN...");

            // Unwrap the file key using the PIN
            const key = await unwrapFileKey(vault.wrappedKey, pin);
            setFileKey(key);

            setStatusText("Decrypting file metadata...");

            // Decrypt the metadata to show file names
            const metadata = await decryptMetadata(vault.encryptedMetadata, key);
            setFileMetadata(metadata);

            // Decrypt clipboard content if present
            if (vault.encryptedClipboardText) {
                setStatusText("Decrypting clipboard content...");
                try {
                    const clipText = await decryptClipboardText(vault.encryptedClipboardText, key);
                    setClipboardContent(clipText);
                } catch (clipErr) {
                    console.error("Failed to decrypt clipboard:", clipErr);
                }
            }

            setStage("ready");
            const hasFiles = metadata.length > 0;
            const hasClipboard = vault.encryptedClipboardText;
            setStatusText(hasFiles ? "Files ready for download!" : (hasClipboard ? "Clipboard content ready!" : "Vault unlocked!"));
            playSound('unlock');

            toast({
                title: "Vault Unlocked!",
                description: hasFiles
                    ? `${metadata.length} file(s) ready for download.`
                    : hasClipboard
                        ? "Secure clipboard content available."
                        : "Vault accessed successfully.",
            });

        } catch (err) {
            playSound('error');
            setStage("input");
            console.error("Access error:", err);

            let errorMessage = "Invalid or expired code. Please check and try again.";
            if (err instanceof Error) {
                if (err.message.includes("unwrap")) {
                    errorMessage = "Invalid PIN. The second half of your code is incorrect.";
                } else if (err.message.includes("expired")) {
                    errorMessage = "This vault has expired or reached its download limit.";
                }
            }

            toast({
                variant: "destructive",
                title: "Access Denied",
                description: errorMessage
            });
        }
    };

    const downloadFileInMemory = async (file: FileMetadata) => {
        if (!vaultData || !fileKey) return;

        try {
            setStatusText(`Downloading ${file.name}...`);
            const vaultFile = vaultData.files.find((f: any) => f.fileId === file.fileId);
            if (!vaultFile) throw new Error("File metadata not found in vault");

            const chunks: ArrayBuffer[] = [];

            // Download and decrypt each chunk
            for (let i = 0; i < vaultFile.chunkCount; i++) {
                setStatusText(`Decrypting ${file.name} [${i + 1}/${vaultFile.chunkCount}]...`);

                const { downloadUrl } = await getChunkUrl.mutateAsync({
                    vaultId: vaultData.id,
                    fileId: file.fileId,
                    chunkIndex: i,
                });

                // Fetch logic...
                let response: Response | null = null;
                for (let attempt = 0; attempt < 3; attempt++) {
                    try {
                        response = await fetch(downloadUrl);
                        if (response.ok) break;
                        if (response.status >= 400 && response.status < 500) throw new Error(`Server returned ${response.status}`);
                        throw new Error(`Server error ${response.status}`);
                    } catch (err) {
                        if (attempt < 2) await new Promise(r => setTimeout(r, 500 * Math.pow(2, attempt)));
                    }
                }

                if (!response || !response.ok) throw new Error("Failed to download chunk");

                const encryptedChunk = await response.arrayBuffer();
                // Validate size
                if (encryptedChunk.byteLength < 12) throw new Error("Chunk too small");

                const iv = new Uint8Array(encryptedChunk, 0, 12);
                const encryptedData = new Uint8Array(encryptedChunk, 12);
                // Decrypt the chunk
                const decryptedChunk = await decryptData(encryptedData, iv, fileKey);

                if (file.isCompressed) {
                    // Lazy load Brotli
                    const brotli = await import("brotli-wasm");
                    await brotli.default; // init
                    // Explicitly cast to ArrayBuffer to satisfy strict type checks
                    const inputBuffer = new Uint8Array(decryptedChunk as ArrayBuffer);
                    const decompressed = brotli.decompress(inputBuffer);
                    chunks.push(decompressed.buffer as ArrayBuffer);
                } else {
                    chunks.push(decryptedChunk);
                }
            }

            // Create blob
            const totalSize = chunks.reduce((acc, chunk) => acc + chunk.byteLength, 0);
            const combinedBuffer = new Uint8Array(totalSize);
            let offset = 0;
            for (const chunk of chunks) {
                combinedBuffer.set(new Uint8Array(chunk), offset);
                offset += chunk.byteLength;
            }

            const blob = new Blob([combinedBuffer], { type: file.type || 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            return true;
        } catch (error) {
            throw error;
        }
    };

    const downloadFile = async (file: FileMetadata) => {
        if (!vaultData || !fileKey) return;

        try {
            // Check for Service Worker Support (Streamed Download)
            if ('serviceWorker' in navigator && navigator.serviceWorker.controller && file.size > 10 * 1024 * 1024) { // Only stream > 10MB to verify optimization
                console.log("Using Streamed Download for " + file.name);
                setStatusText(`Preparing stream for ${file.name}...`);

                const vaultFile = vaultData.files.find((f: any) => f.fileId === file.fileId);
                if (!vaultFile) throw new Error("File not found");

                // Generate all chunk URLs upfront
                const chunks = [];
                for (let i = 0; i < vaultFile.chunkCount; i++) {
                    const { downloadUrl } = await getChunkUrl.mutateAsync({
                        vaultId: vaultData.id,
                        fileId: file.fileId,
                        chunkIndex: i
                    });
                    chunks.push({ downloadUrl, index: i });
                }

                await initiateStreamDownload(file.fileId, fileKey, chunks, file);

                if (stage === "ready") {
                    toast({ title: "Download Started", description: `Streaming ${file.name}...` });
                }
            } else {
                // Fallback to Memory Download
                console.log("Using Memory Download for " + file.name);
                await downloadFileInMemory(file);
            }

            // Track individual download (Shared logic)
            if (stage === "ready") {
                if ('serviceWorker' in navigator && navigator.serviceWorker.controller && file.size > 10 * 1024 * 1024) {
                    // For stream, we tracked start. Completion is hard to track from here seamlessly without bi-directional comms.
                    // We assume success for tracking purposes or track immediately.
                } else {
                    toast({ title: "File Downloaded", description: `${file.name} saved.` });
                }

                try {
                    const res = await trackDownload.mutateAsync(vaultData.id);
                    setVaultData((prev: any) => ({
                        ...prev,
                        downloadCount: prev.maxDownloads - res.remainingDownloads
                    }));

                    if (res.remainingDownloads <= 0) {
                        toast({
                            title: "Vault Depleted",
                            description: "Initiating self-destruct sequence...",
                            variant: "destructive"
                        });
                        setTimeout(() => setIsBurned(true), 1500);
                    }
                } catch (e) {
                    console.error("Tracking failed", e);
                }
            }

        } catch (error) {
            console.error("Download failed", error);
            toast({
                variant: "destructive",
                title: "Download Error",
                description: error instanceof Error ? error.message : "Failed to download file"
            });
            if (stage === "downloading") throw error;
        }
    };

    const handleDownload = async () => {
        if (!vaultData || !fileKey || fileMetadata.length === 0) return;

        setStage("downloading");

        try {
            for (const file of fileMetadata) {
                await downloadFile(file);
            }

            // Track download AFTER successful retrieval
            const res = await trackDownload.mutateAsync(vaultData.id);

            setVaultData((prev: any) => ({
                ...prev,
                downloadCount: prev.maxDownloads - res.remainingDownloads
            }));

            setStage("ready");
            setStatusText("All files downloaded!");

            toast({
                title: "Download Complete!",
                description: `${fileMetadata.length} file(s) downloaded successfully.`,
            });

            if (res.remainingDownloads <= 0) {
                toast({
                    title: "Vault Depleted",
                    description: "Initiating self-destruct sequence...",
                    variant: "destructive"
                });
                setTimeout(() => setIsBurned(true), 1500);
            }

        } catch (err) {
            setStage("ready");
            console.error("Download error:", err);
            toast({
                variant: "destructive",
                title: "Download Failed",
                description: err instanceof Error ? err.message : "An error occurred during download.",
            });
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && accessCode.replace(/\D/g, '').length === 6 && stage === "input") {
            handleCodeSubmit();
        }
    };

    // Format input as XXX-XXX
    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setAccessCode(value);
    };

    return (
        <div className={`min-h-screen relative overflow-hidden flex flex-col transition-colors duration-1000 ${isBurned ? 'bg-black' : ''}`}>
            <BurnFilter />
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-50" />
            <div className="scanline" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 px-4 md:px-6 py-6 md:py-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                <Lock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-lg md:text-xl font-bold font-mono tracking-tight">
                                    VAULT<span className="text-primary">BRIDGE</span>
                                </h1>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className={`relative z-10 flex-1 flex flex-col items-center justify-center w-full mx-auto px-4 md:px-6 py-8 transition-all duration-500 ${stage === "ready" ? "max-w-5xl" : "max-w-lg"}`}>
                {stage !== "ready" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8 md:mb-10"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700">
                                <KeyRound className="w-6 h-6 md:w-8 md:h-8 text-zinc-400" />
                            </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Access Vault</h2>
                        <p className="text-sm md:text-base text-muted-foreground">
                            Enter your 6-digit access code to unlock the vault
                        </p>
                    </motion.div>
                )}

                {/* Access Card */}
                <AnimatePresence mode="wait">
                    {!isBurned ? (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: -50,
                                filter: 'url(#heat-wave) grayscale(100%) contrast(200%)',
                                transition: { duration: 2 }
                            }}
                            style={{ filter: isBurned ? 'url(#heat-wave)' : 'none' }}
                            transition={{ delay: 0.1 }}
                            className={`w-full transition-all duration-500 overflow-hidden ${stage === "ready" ? "bg-zinc-950/90 backdrop-blur-2xl border border-zinc-800 rounded-3xl shadow-2xl" : "glass-card p-6 md:p-8"}`}
                        >
                            {stage === "input" && (
                                <div className="space-y-6 md:space-y-8">
                                    {/* 6-Digit PIN Input */}
                                    <div className="space-y-4">
                                        <label className="text-xs md:text-sm text-center block text-muted-foreground uppercase tracking-widest font-mono">
                                            Enter 6-Digit Code
                                        </label>

                                        <div className="flex justify-center gap-2 md:gap-3 relative">
                                            {/* Invisible input for handling focus/typing */}
                                            <Input
                                                type="search"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={accessCode}
                                                onChange={(e) => {
                                                    // Allow alphanumeric, max 6 chars, uppercase
                                                    const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
                                                    setAccessCode(val);
                                                    if (val.length === 6) {
                                                        // Optional: Auto-submit or focus button
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && accessCode.length === 6) {
                                                        handleCodeSubmit();
                                                    }
                                                }}
                                                className="absolute inset-0 opacity-0 cursor-pointer z-10 h-16 w-full"
                                                autoFocus
                                                autoComplete="off"
                                                spellCheck="false"
                                                name="vault_access_code_search"
                                                id="vault_access_code_search"
                                            />

                                            {/* Visual Boxes */}
                                            <div className="flex items-center gap-1 md:gap-2">
                                                {/* First 3 Digits (Lookup ID) */}
                                                <div className="flex gap-1.5 md:gap-2">
                                                    {Array.from({ length: 3 }).map((_, i) => {
                                                        const index = i;
                                                        const num = accessCode[index] || "";
                                                        const isFocused = accessCode.length === index;
                                                        const isFilled = !!num;

                                                        return (
                                                            <motion.div
                                                                key={index}
                                                                initial={false}
                                                                animate={{
                                                                    scale: isFocused ? 1.05 : 1,
                                                                    borderColor: isFocused ? "var(--primary)" : isFilled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                                                                    backgroundColor: isFilled ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)"
                                                                }}
                                                                className={`
                                                            w-10 h-12 md:w-14 md:h-20
                                                            border-2 rounded-lg md:rounded-xl flex items-center justify-center 
                                                            text-xl md:text-3xl font-mono font-bold
                                                            transition-colors duration-200
                                                            ${isFocused ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-primary/20" : ""}
                                                        `}
                                                            >
                                                                <AnimatePresence mode="popLayout">
                                                                    {num ? (
                                                                        <motion.span
                                                                            key={num}
                                                                            initial={{ y: 20, opacity: 0 }}
                                                                            animate={{ y: 0, opacity: 1 }}
                                                                            exit={{ y: -20, opacity: 0 }}
                                                                            className="text-primary"
                                                                        >
                                                                            {num}
                                                                        </motion.span>
                                                                    ) : (
                                                                        isFocused && (
                                                                            <motion.div
                                                                                layoutId="cursor"
                                                                                className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/50 rounded-full animate-pulse"
                                                                            />
                                                                        )
                                                                    )}
                                                                </AnimatePresence>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>

                                                {/* Divider */}
                                                <div className="w-2 md:w-4 border-t-2 border-zinc-700/50"></div>

                                                {/* Last 3 Digits (PIN) */}
                                                <div className="flex gap-1.5 md:gap-2">
                                                    {Array.from({ length: 3 }).map((_, i) => {
                                                        const index = i + 3;
                                                        const num = accessCode[index] || "";
                                                        const isFocused = accessCode.length === index;
                                                        const isFilled = !!num;

                                                        return (
                                                            <motion.div
                                                                key={index}
                                                                initial={false}
                                                                animate={{
                                                                    scale: isFocused ? 1.05 : 1,
                                                                    borderColor: isFocused ? "var(--primary)" : isFilled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                                                                    backgroundColor: isFilled ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)"
                                                                }}
                                                                className={`
                                                            w-10 h-12 md:w-14 md:h-20
                                                            border-2 rounded-lg md:rounded-xl flex items-center justify-center 
                                                            text-xl md:text-3xl font-mono font-bold
                                                            transition-colors duration-200
                                                            ${isFocused ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-primary/20" : ""}
                                                        `}
                                                            >
                                                                <AnimatePresence mode="popLayout">
                                                                    {num ? (
                                                                        <motion.span
                                                                            key={num}
                                                                            initial={{ y: 20, opacity: 0 }}
                                                                            animate={{ y: 0, opacity: 1 }}
                                                                            exit={{ y: -20, opacity: 0 }}
                                                                            className="text-primary" // PIN is also shown for confirmation, could obscure if desired but usually helpful to see
                                                                        >
                                                                            {num}
                                                                        </motion.span>
                                                                    ) : (
                                                                        isFocused && (
                                                                            <motion.div
                                                                                layoutId="cursor"
                                                                                className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/50 rounded-full animate-pulse"
                                                                            />
                                                                        )
                                                                    )}
                                                                </AnimatePresence>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-muted-foreground text-center px-4">
                                            Check your email or secure message for the code
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        onClick={handleCodeSubmit}
                                        disabled={accessCode.length !== 6}
                                        size="lg"
                                        className={`
                                    w-full h-12 md:h-14 font-mono font-bold uppercase tracking-wider text-sm md:text-base
                                    transition-all duration-300
                                    ${accessCode.length === 6
                                                ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:scale-[1.02]"
                                                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}
                                `}
                                    >
                                        <Lock className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 ${accessCode.length === 6 ? "opacity-100" : "opacity-50"}`} />
                                        {accessCode.length === 6 ? "Unlock Vault" : "Enter Code"}
                                    </Button>
                                </div>
                            )}

                            {(stage === "fetching" || stage === "decrypting") && (
                                <div className="text-center py-8">
                                    <Loader2 className="w-10 h-10 md:w-12 md:h-12 text-primary animate-spin mx-auto mb-4" />
                                    <p className="text-base md:text-lg font-medium">{statusText}</p>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-2">
                                        Decryption happens in your browser
                                    </p>
                                </div>
                            )}

                            {stage === "ready" && (
                                <div className="flex flex-col md:grid md:grid-cols-12 min-h-[550px]">
                                    {/* LEFT SIDEBAR (Vault Info) */}
                                    <div className="md:col-span-4 bg-zinc-900/50 border-r border-white/5 p-6 md:p-8 flex flex-col relative group">
                                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                        <div className="relative z-10">
                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                                            >
                                                <Shield className="w-8 h-8 text-emerald-500" />
                                            </motion.div>

                                            <h3 className="text-3xl font-bold text-white tracking-tight mb-2">Unlocked</h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                                Secure session established.<br />
                                                End-to-end encrypted.
                                            </p>

                                            {/* Stats List */}
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-1.5 rounded bg-zinc-900">
                                                            <Clock className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-bold uppercase tracking-wider">Expires</span>
                                                    </div>
                                                    <CountdownTimer expiresAt={vaultData.expiresAt} />
                                                </div>

                                                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-1.5 rounded bg-zinc-900">
                                                            <Download className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-bold uppercase tracking-wider">Downloads</span>
                                                    </div>
                                                    <span className="font-mono text-sm font-bold text-zinc-200">
                                                        {vaultData.maxDownloads - vaultData.downloadCount} <span className="text-zinc-600">/</span> {vaultData.maxDownloads}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-1.5 rounded bg-zinc-900">
                                                            <HardDrive className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-bold uppercase tracking-wider">Size</span>
                                                    </div>
                                                    <span className="font-mono text-sm font-bold text-zinc-200">
                                                        {(fileMetadata.reduce((acc: any, f: any) => acc + f.size, 0) / (1024 * 1024)).toFixed(2)} MB
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-8 relative z-10">
                                            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                                                <Shield className="w-5 h-5 text-emerald-500 mt-0.5" />
                                                <div className="space-y-1">
                                                    <p className="text-xs text-emerald-200/60 leading-relaxed font-bold">
                                                        Zero-Knowledge Architecture
                                                    </p>
                                                    <p className="text-xs text-emerald-200/60 leading-relaxed">
                                                        Files are decrypted locally. Use {('serviceWorker' in navigator) ? <span className="text-emerald-400 font-bold">Streamed Mode</span> : "High Speed Mode"} for large files.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT CONTENT (File List) */}
                                    <div className="md:col-span-8 p-6 md:p-8 bg-black/20 flex flex-col">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-xs font-bold text-white border border-zinc-700">
                                                    {fileMetadata.length + (clipboardContent ? 1 : 0)}
                                                </span>
                                                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                                                    {fileMetadata.length > 0 ? "Available Content" : "Secure Clipboard"}
                                                </h4>
                                            </div>

                                            {/* Desktop actions could go here */}
                                        </div>

                                        {/* Live Universal Clipboard */}
                                        {clipboardContent !== null && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mb-6 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm"
                                            >
                                                {/* Header */}
                                                <div className="flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/80">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-900/20">
                                                            <Clipboard className="w-4 h-4 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-sm font-bold text-cyan-100">Live Clipboard</p>
                                                                {updateClipboard.isPending && <RefreshCw className="w-3 h-3 text-cyan-400 animate-spin" />}
                                                            </div>
                                                            <p className="text-[10px] text-cyan-400/60 font-mono">
                                                                {lastSaved ? `Synced ${lastSaved.toLocaleTimeString()}` : 'Ready to sync'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-zinc-400 hover:text-white">
                                                                    <Share2 className="w-4 h-4" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                                                                <DropdownMenuItem onClick={() => handleExport('txt')} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                                                                    <FileText className="w-4 h-4 mr-2" /> Export to TXT
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => handleExport('pdf')} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                                                                    <FileType className="w-4 h-4 mr-2" /> Export to PDF
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => handleExport('doc')} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                                                                    <FileText className="w-4 h-4 mr-2" /> Export to DOC
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>

                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            className="h-8 text-zinc-400 hover:text-cyan-400"
                                                            onClick={async () => {
                                                                await navigator.clipboard.writeText(clipboardContent || "");
                                                                toast({ title: "Copied!" });
                                                            }}
                                                        >
                                                            <Copy className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>

                                                {/* Live Editor */}
                                                <div className="relative">
                                                    <Textarea
                                                        value={clipboardContent || ""}
                                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                                            setClipboardContent(e.target.value);
                                                            setIsEditing(true);
                                                        }}
                                                        onBlur={() => {
                                                            setIsEditing(false);
                                                            if (clipboardContent) handleSaveClipboard(clipboardContent);
                                                        }}
                                                        className="min-h-[120px] bg-transparent border-0 resize-none focus-visible:ring-0 text-zinc-300 font-mono text-sm leading-relaxed p-4 custom-scrollbar"
                                                        placeholder="Type shared content here..."
                                                    />
                                                    {isEditing && (
                                                        <div className="absolute bottom-2 right-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                                                            <span className="text-[10px] text-zinc-500 font-mono bg-black/50 px-2 py-1 rounded-full border border-zinc-800">
                                                                Editing...
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3 mb-6 min-h-[300px] max-h-[500px]">
                                            {fileMetadata.map((file, index) => (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    key={file.fileId}
                                                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300"
                                                >
                                                    <div className="flex items-center gap-4 min-w-0 mb-3 sm:mb-0">
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-primary/50 group-hover:from-primary/10 group-hover:to-zinc-900 transition-colors">
                                                            <FileText className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                                                            <div className="flex items-center gap-3 mt-1">
                                                                <span className="text-xs text-zinc-500 font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                                                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                                <span className="text-[10px] text-zinc-500 uppercase font-bold">{file.type?.split('/')[1] || 'FILE'}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="bg-transparent border-zinc-700 hover:bg-zinc-800 hover:text-white group-hover:border-zinc-600 shrink-0"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            downloadFile(file);
                                                        }}
                                                    >
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Download
                                                    </Button>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/5">
                                            <Button
                                                onClick={handleDownload}
                                                className="w-full h-16 cyber-btn text-lg font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:shadow-[0_0_60px_rgba(16,185,129,0.2)]"
                                            >
                                                <Download className="w-6 h-6 mr-3" />
                                                Download All Files
                                            </Button>
                                            <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mt-4 font-bold">
                                                {vaultData?.maxDownloads - vaultData?.downloadCount} Downloads remaining
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {stage === "downloading" && (
                                <div className="text-center py-8">
                                    <Loader2 className="w-10 h-10 md:w-12 md:h-12 text-primary animate-spin mx-auto mb-4" />
                                    <p className="text-base md:text-lg font-medium">{statusText}</p>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-2">
                                        Files are being decrypted in your browser
                                    </p>
                                </div>
                            )}


                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="flex flex-col items-center justify-center p-8 font-mono text-red-500 w-full"
                        >
                            <AlertTriangle className="w-16 h-16 mb-4 animate-pulse" />
                            <h1 className="text-2xl md:text-4xl tracking-[0.2em] uppercase font-bold text-center mb-4">Vault Incinerated</h1>
                            <div className="text-sm md:text-base text-zinc-500 space-y-2 text-center">
                                <p className="typing-effect">&gt; SYSTEM_PURGE_COMPLETE</p>
                                <p className="typing-effect delay-100">&gt; FILES_OVERWRITTEN</p>
                                <p className="typing-effect delay-200 text-red-700">&gt; LINK_TERMINATED</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Or use direct link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 md:mt-8 text-center px-2"
                >
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                        <div className="flex items-start gap-3 text-left">
                            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-rose-400">Important</p>
                                <p className="text-xs text-rose-300/80 mt-1">
                                    Access codes expire. If your code doesn't work,
                                    the vault may have expired or reached its download limit.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
