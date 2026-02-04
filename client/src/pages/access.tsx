import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, KeyRound, ArrowLeft, Shield, AlertTriangle, Download, Loader2, Clock, HardDrive, FileText,
    Clipboard, Check, Copy, ShieldCheck, Sparkles, Eye, Zap, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { LiveClipboard } from "@/components/LiveClipboard";
import { useCodeLookup, useGetChunkDownloadUrl, useTrackDownload } from "@/hooks/use-vaults";
import { unwrapFileKey, decryptMetadata, decryptData, decryptClipboardText } from "@/lib/crypto";
import { initiateStreamDownload } from "@/lib/downloadStream";


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

    if (!timeLeft) return <span className="text-red-400 font-mono text-xs">Expired</span>;

    return (
        <div className="flex items-center gap-1 font-mono text-sm font-bold">
            <span className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400">{timeLeft.h.toString().padStart(2, '0')}</span>
            <span className="text-zinc-500">:</span>
            <span className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400">{timeLeft.m.toString().padStart(2, '0')}</span>
            <span className="text-zinc-500">:</span>
            <span className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400">{timeLeft.s.toString().padStart(2, '0')}</span>
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

    // Derived lookupId for sync
    const lookupId = stage === "ready" && accessCode.length === 6 ? accessCode.slice(0, 3) : "";

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const codeLookup = useCodeLookup();
    const getChunkUrl = useGetChunkDownloadUrl();
    const trackDownload = useTrackDownload();

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

                // Robust Fetch logic with retries
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
                    const inputBuffer = new Uint8Array(decryptedChunk as ArrayBuffer);
                    const decompressed = brotli.decompress(inputBuffer);
                    chunks.push(decompressed.buffer as ArrayBuffer);
                } else {
                    chunks.push(decryptedChunk);
                }
            }

            // OPTIMIZED: Create blob directly from chunks array to avoid double memory allocation
            setStatusText(`Assembling ${file.name}...`);
            const blob = new Blob(chunks, { type: file.type || 'application/octet-stream' });

            // Trigger Download
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
            console.error("Memory download failed:", error);
            throw error;
        }
    };

    const downloadFile = async (file: FileMetadata) => {
        if (!vaultData || !fileKey) return;

        try {
            // Check for Service Worker Support (Streamed Download)
            // Stream files > 10MB to save memory, provided SW is active
            let streamSuccess = false;

            if ('serviceWorker' in navigator && navigator.serviceWorker.controller && file.size > 10 * 1024 * 1024) {
                console.log("Attempting Streamed Download for " + file.name);
                setStatusText(`Preparing stream for ${file.name}...`);

                try {
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
                    streamSuccess = true;

                    if (stage === "ready") {
                        toast({ title: "Download Started", description: `Streaming ${file.name}...` });
                    }
                } catch (streamErr) {
                    console.warn("Stream download failed, falling back to memory:", streamErr);
                    streamSuccess = false;
                }
            }

            // Fallback to Memory Download if stream wasn't attempted or failed
            if (!streamSuccess) {
                console.log("Using Memory Download for " + file.name);
                await downloadFileInMemory(file);
            }

            // Track individual download (Shared logic)
            if (stage === "ready") {
                if (!streamSuccess) {
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
                title: "Download Failed",
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

            // Track download AFTER successful retrieval if doing bulk
            // Note: Individual tracking inside downloadFile handles the quota decrement better for partial failures
            // But we can re-sync here
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

    return (
        <div className={`min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 overflow-hidden transition-colors duration-1000 ${isBurned ? 'bg-black' : ''}`}>
            <BurnFilter />

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <header className="border-b border-zinc-800/50 backdrop-blur-xl bg-black/50">
                    <div className="container max-w-6xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <motion.div
                                    className="flex items-center gap-3 cursor-pointer group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                        <Lock className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-lg tracking-tight">
                                            VAULT<span className="text-cyan-400">BRIDGE</span>
                                        </h1>
                                        <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em]">ACCESS VAULT</p>
                                    </div>
                                </motion.div>
                            </Link>

                            <div className="flex items-center gap-3">
                                <Link href="/clipboard">
                                    <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2">
                                        <Clipboard className="w-4 h-4" />
                                        Create Clipboard
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 container max-w-6xl mx-auto px-4 py-8 md:py-12">
                    <AnimatePresence mode="wait">
                        {!isBurned ? (
                            <motion.div
                                key={stage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                {/* Input Stage */}
                                {stage === "input" && (
                                    <div className="max-w-xl mx-auto">
                                        {/* Hero */}
                                        <div className="text-center mb-8">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                                                <Sparkles className="w-3 h-3" />
                                                <span>ZERO-KNOWLEDGE DECRYPTION</span>
                                            </div>
                                            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                                                Access Secure{" "}
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                                                    Vault
                                                </span>
                                            </h1>
                                            <p className="text-zinc-400">
                                                Enter your 6-digit access code to unlock the vault
                                            </p>
                                        </div>

                                        {/* Access Card */}
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
                                            <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8">
                                                {/* PIN Input */}
                                                <div className="space-y-6">
                                                    <div className="space-y-4">
                                                        <label className="text-xs text-center block text-zinc-400 uppercase tracking-widest font-mono">
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
                                                                    const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
                                                                    setAccessCode(val);
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
                                                                                    borderColor: isFocused ? "rgb(6, 182, 212)" : isFilled ? "rgba(6, 182, 212, 0.3)" : "rgba(63, 63, 70, 1)",
                                                                                    backgroundColor: isFilled ? "rgba(6, 182, 212, 0.1)" : "rgba(24, 24, 27, 1)"
                                                                                }}
                                                                                className={`
                                                                                    w-12 h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-xl flex items-center justify-center 
                                                                                    text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${isFocused ? "shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/20" : ""}
                                                                                `}
                                                                            >
                                                                                <AnimatePresence mode="popLayout">
                                                                                    {num ? (
                                                                                        <motion.span
                                                                                            key={num}
                                                                                            initial={{ y: 20, opacity: 0 }}
                                                                                            animate={{ y: 0, opacity: 1 }}
                                                                                            exit={{ y: -20, opacity: 0 }}
                                                                                            className="text-cyan-400"
                                                                                        >
                                                                                            {num}
                                                                                        </motion.span>
                                                                                    ) : (
                                                                                        isFocused && (
                                                                                            <motion.div
                                                                                                layoutId="cursor"
                                                                                                className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"
                                                                                            />
                                                                                        )
                                                                                    )}
                                                                                </AnimatePresence>
                                                                            </motion.div>
                                                                        );
                                                                    })}
                                                                </div>

                                                                {/* Divider */}
                                                                <div className="w-4 md:w-6 flex items-center justify-center">
                                                                    <div className="w-full h-0.5 bg-zinc-700"></div>
                                                                </div>

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
                                                                                    borderColor: isFocused ? "rgb(16, 185, 129)" : isFilled ? "rgba(16, 185, 129, 0.3)" : "rgba(63, 63, 70, 1)",
                                                                                    backgroundColor: isFilled ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
                                                                                }}
                                                                                className={`
                                                                                    w-12 h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-xl flex items-center justify-center 
                                                                                    text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${isFocused ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/20" : ""}
                                                                                `}
                                                                            >
                                                                                <AnimatePresence mode="popLayout">
                                                                                    {num ? (
                                                                                        <motion.span
                                                                                            key={num}
                                                                                            initial={{ y: 20, opacity: 0 }}
                                                                                            animate={{ y: 0, opacity: 1 }}
                                                                                            exit={{ y: -20, opacity: 0 }}
                                                                                            className="text-emerald-400"
                                                                                        >
                                                                                            {num}
                                                                                        </motion.span>
                                                                                    ) : (
                                                                                        isFocused && (
                                                                                            <motion.div
                                                                                                layoutId="cursor"
                                                                                                className="w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"
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

                                                        <p className="text-xs text-zinc-500 text-center">
                                                            First 3 digits = Vault ID • Last 3 digits = PIN
                                                        </p>
                                                    </div>

                                                    {/* Submit Button */}
                                                    <Button
                                                        onClick={handleCodeSubmit}
                                                        disabled={accessCode.length !== 6}
                                                        className={`w-full h-14 font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 ${accessCode.length === 6
                                                            ? "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40 hover:scale-[1.02]"
                                                            : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`}
                                                    >
                                                        <KeyRound className={`w-5 h-5 mr-3 ${accessCode.length === 6 ? "opacity-100" : "opacity-50"}`} />
                                                        {accessCode.length === 6 ? "Unlock Vault" : "Enter Code"}
                                                    </Button>

                                                    {/* Trust Indicators */}
                                                    <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800">
                                                        {[
                                                            { icon: Lock, label: "AES-256" },
                                                            { icon: Shield, label: "Zero-Knowledge" },
                                                            { icon: Zap, label: "Auto-Destruct" },
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-zinc-500">
                                                                <item.icon className="w-3.5 h-3.5" />
                                                                <span className="text-xs">{item.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Warning */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
                                        >
                                            <div className="flex gap-3">
                                                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-sm text-amber-200 font-medium">Important</p>
                                                    <p className="text-xs text-amber-400/80 mt-1">
                                                        Access codes expire. If your code doesn't work,
                                                        the vault may have expired or reached its download limit.
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}

                                {/* Fetching / Decrypting Stage */}
                                {(stage === "fetching" || stage === "decrypting") && (
                                    <div className="max-w-md mx-auto">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50" />
                                            <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 text-center">
                                                <div className="w-20 h-20 mx-auto mb-6 relative">
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 animate-pulse" />
                                                    <div className="absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center">
                                                        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                    {stage === "fetching" ? "Locating Vault" : "Decrypting Content"}
                                                </h3>
                                                <p className="text-zinc-400 text-sm">{statusText}</p>
                                                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
                                                    <Shield className="w-3 h-3" />
                                                    <span>Decryption happens in your browser</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Ready Stage */}
                                {stage === "ready" && (
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        {/* Left Sidebar - Vault Info */}
                                        <div className="lg:col-span-1 space-y-6">
                                            {/* Success Card */}
                                            <div className="relative">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20" />
                                                <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring" }}
                                                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center"
                                                    >
                                                        <ShieldCheck className="w-8 h-8 text-emerald-400" />
                                                    </motion.div>
                                                    <h2 className="text-2xl font-bold text-center text-white mb-1">Vault Unlocked</h2>
                                                    <p className="text-sm text-zinc-400 text-center">Secure session established</p>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 space-y-3">
                                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-2 rounded-lg bg-zinc-800">
                                                            <Clock className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-bold uppercase tracking-wider">Expires</span>
                                                    </div>
                                                    <CountdownTimer expiresAt={vaultData.expiresAt} />
                                                </div>

                                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-2 rounded-lg bg-zinc-800">
                                                            <Download className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-bold uppercase tracking-wider">Downloads</span>
                                                    </div>
                                                    <span className="font-mono text-sm font-bold text-white">
                                                        {vaultData.maxDownloads - vaultData.downloadCount} <span className="text-zinc-600">/</span> {vaultData.maxDownloads}
                                                    </span>
                                                </div>

                                                {fileMetadata.length > 0 && (
                                                    <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                                        <div className="flex items-center gap-3 text-zinc-400">
                                                            <div className="p-2 rounded-lg bg-zinc-800">
                                                                <HardDrive className="w-4 h-4" />
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider">Size</span>
                                                        </div>
                                                        <span className="font-mono text-sm font-bold text-white">
                                                            {(fileMetadata.reduce((acc: any, f: any) => acc + f.size, 0) / (1024 * 1024)).toFixed(2)} MB
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Security Info */}
                                            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                                <div className="flex items-start gap-3">
                                                    <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
                                                    <div>
                                                        <p className="text-xs font-bold text-emerald-300">Zero-Knowledge Architecture</p>
                                                        <p className="text-xs text-emerald-400/70 mt-1">
                                                            Content decrypted locally in your browser. Server never sees plaintext.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Content - Files/Clipboard */}
                                        <div className="lg:col-span-2">
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50" />
                                                <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8">
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                                                            {fileMetadata.length + (clipboardContent ? 1 : 0)}
                                                        </span>
                                                        <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">
                                                            {fileMetadata.length > 0 ? "Available Content" : "Secure Clipboard"}
                                                        </h3>
                                                    </div>

                                                    {/* Live Universal Clipboard */}
                                                    {(clipboardContent !== null || !!vaultData.encryptedClipboardText) && (
                                                        <LiveClipboard
                                                            lookupId={lookupId}
                                                            fileKey={fileKey!}
                                                            wrappedKey={vaultData.wrappedKey}
                                                            initialContent={clipboardContent}
                                                        />
                                                    )}

                                                    {/* Files List */}
                                                    {fileMetadata.length > 0 && (
                                                        <>
                                                            <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar">
                                                                {fileMetadata.map((file, index) => (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: index * 0.05 }}
                                                                        key={file.fileId}
                                                                        className="group flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300"
                                                                    >
                                                                        <div className="flex items-center gap-4 min-w-0">
                                                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-cyan-500/50 transition-colors">
                                                                                <FileText className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
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
                                                                            className="bg-transparent border-zinc-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 shrink-0 transition-colors"
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

                                                            {/* Download All Button */}
                                                            <div className="pt-6 border-t border-zinc-800">
                                                                <Button
                                                                    onClick={handleDownload}
                                                                    className="w-full h-14 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-base uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40 hover:scale-[1.02] transition-all"
                                                                >
                                                                    <Download className="w-5 h-5 mr-3" />
                                                                    Download All Files
                                                                </Button>
                                                                <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mt-4 font-bold">
                                                                    {vaultData?.maxDownloads - vaultData?.downloadCount} Downloads remaining
                                                                </p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Downloading Stage */}
                                {stage === "downloading" && (
                                    <div className="max-w-md mx-auto">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50" />
                                            <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 text-center">
                                                <div className="w-20 h-20 mx-auto mb-6 relative">
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 animate-pulse" />
                                                    <div className="absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center">
                                                        <Download className="w-8 h-8 text-cyan-400 animate-bounce" />
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">Downloading Files</h3>
                                                <p className="text-zinc-400 text-sm">{statusText}</p>
                                                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
                                                    <Shield className="w-3 h-3" />
                                                    <span>Files are being decrypted in your browser</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            // Burned State
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 }}
                                className="max-w-lg mx-auto text-center"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl blur-xl opacity-50" />
                                    <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-red-900/50 rounded-3xl p-8">
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                                            <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
                                        </div>
                                        <h1 className="text-3xl font-black tracking-[0.15em] uppercase text-red-500 mb-4">
                                            Vault Incinerated
                                        </h1>
                                        <div className="space-y-2 font-mono text-sm text-zinc-500">
                                            <p>&gt; SYSTEM_PURGE_COMPLETE</p>
                                            <p>&gt; FILES_OVERWRITTEN</p>
                                            <p className="text-red-700">&gt; LINK_TERMINATED</p>
                                        </div>
                                        <div className="mt-8">
                                            <Link href="/">
                                                <Button variant="outline" className="border-red-900/50 hover:bg-red-500/10">
                                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                                    Return Home
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>

                {/* Footer */}
                <footer className="border-t border-zinc-800/50 py-6">
                    <div className="container max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-cyan-500" />
                                <span>End-to-end encrypted • Your data never leaves your device unencrypted</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
