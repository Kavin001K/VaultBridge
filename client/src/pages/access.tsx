import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, KeyRound, ArrowLeft, Shield, AlertTriangle, Download, Loader2, Clock, HardDrive, FileText,
    Clipboard, Sparkles, ShieldCheck, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { LiveClipboard } from "@/components/LiveClipboard";
import { useCodeLookup, useGetChunkDownloadUrl, useTrackDownload, useTrackFileDownload } from "@/hooks/use-vaults";
import { unwrapFileKey, decryptMetadata, decryptData, decryptClipboardPayload, type ClipboardPayload } from "@/lib/crypto";
import { initiateStreamDownload } from "@/lib/downloadStream";
import { useIsMobile } from "@/hooks/use-mobile"; // Installed Mobile SDK
import { useVaultHistory } from "@/hooks/useVaultHistory";
import { RecentActivity } from "@/components/RecentActivity";

type AccessStage = "input" | "fetching" | "decrypting" | "ready" | "downloading";

interface FileMetadata {
    name: string;
    type: string;
    size: number;
    fileId: string;
    isCompressed?: boolean;
    lastModified: number;
}

// Per-file download state
interface FileDownloadState {
    fileId: string;
    maxDownloads: number;
    downloadCount: number;
    remainingDownloads: number;
    isExhausted: boolean;
}

const RECENT_VAULT_STORAGE_KEY = "vaultbridge_recent";
const LEGACY_RECENT_VAULT_STORAGE_KEY = "vaultbridge-recent-vault-link";
const ACCESS_CODE_PATTERN = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{3}$/;

const normalizeVaultPath = (pathname: string) =>
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

const isAllowedVaultPath = (pathname: string) => {
    const normalized = normalizeVaultPath(pathname);
    return (
        normalized === "/access" ||
        normalized.startsWith("/download/") ||
        normalized.startsWith("/v/")
    );
};

// SVG Filter for Heat Distortion (Heavy on mobile GPU, will be conditional)
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

function CountdownTimer({ expiresAt, isMobile }: { expiresAt: string, isMobile: boolean }) {
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
        <div className={`flex items-center gap-1 font-mono font-bold ${isMobile ? 'text-xs' : 'text-sm'}`}>
            <span className="bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400">{timeLeft.h.toString().padStart(2, '0')}</span>
            <span className="text-zinc-500">:</span>
            <span className="bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400">{timeLeft.m.toString().padStart(2, '0')}</span>
            <span className="text-zinc-500">:</span>
            <span className="bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400">{timeLeft.s.toString().padStart(2, '0')}</span>
        </div>
    );
}

export default function AccessPage() {
    const isMobile = useIsMobile(); // Mobile SDK Hook
    const [accessCode, setAccessCode] = useState("");
    const [stage, setStage] = useState<AccessStage>("input");
    const [statusText, setStatusText] = useState("");
    const [fileMetadata, setFileMetadata] = useState<FileMetadata[]>([]);
    const [vaultData, setVaultData] = useState<any>(null);
    const [fileKey, setFileKey] = useState<CryptoKey | null>(null);
    const [isBurned, setIsBurned] = useState(false);
    const [clipboardPayload, setClipboardPayload] = useState<ClipboardPayload | null>(null);
    const [vaultLinkInput, setVaultLinkInput] = useState("");
    const [vaultLinkError, setVaultLinkError] = useState<string | null>(null);
    const [recentVaultLink, setRecentVaultLink] = useState<string | null>(null);

    // Per-file download tracking
    const [fileDownloadStates, setFileDownloadStates] = useState<Map<string, FileDownloadState>>(new Map());

    // Derived lookupId for sync
    const lookupId = stage === "ready" && accessCode.length === 6 ? accessCode.slice(0, 3) : "";
    const hasClipboardData = Boolean(
        clipboardPayload &&
        (clipboardPayload.plainText.trim().length > 0 || clipboardPayload.attachments.length > 0)
    );

    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const codeLookup = useCodeLookup();
    const getChunkUrl = useGetChunkDownloadUrl();
    const trackDownload = useTrackDownload();
    const trackFileDownload = useTrackFileDownload();
    const { addRecord, updateRecord } = useVaultHistory();
    const accessHistorySavedRef = useRef(false);

    const extractAccessCode = (value: string | null): string | null => {
        if (!value) return null;
        const direct = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
        if (direct.length === 6) return direct;

        try {
            const parsed = value.startsWith("http")
                ? new URL(value)
                : new URL(value, window.location.origin);
            const queryCode = parsed.searchParams.get("code");
            if (queryCode) {
                const cleaned = queryCode.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
                if (cleaned.length === 6) return cleaned;
            }

            const hash = parsed.hash.startsWith("#") ? parsed.hash.slice(1) : parsed.hash;
            const hashCode = new URLSearchParams(hash).get("code");
            if (hashCode) {
                const cleaned = hashCode.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
                if (cleaned.length === 6) return cleaned;
            }
        } catch {
            return null;
        }

        return null;
    };

    const resolveVaultDestination = (rawInput: string): string | null => {
        const trimmed = rawInput.trim();
        if (!trimmed) return null;

        if (ACCESS_CODE_PATTERN.test(trimmed)) {
            const code = trimmed.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
            return `/access?code=${code}`;
        }

        const candidates = [trimmed];
        if (/^(access|download\/|v\/)/i.test(trimmed)) {
            candidates.push(`/${trimmed}`);
        }
        if (/^(vaultbridge\.org|www\.vaultbridge\.org)/i.test(trimmed)) {
            candidates.push(`https://${trimmed}`);
        }

        for (const candidate of candidates) {
            try {
                const parsed = candidate.startsWith("/")
                    ? new URL(candidate, window.location.origin)
                    : new URL(candidate);

                if (isAllowedVaultPath(parsed.pathname)) {
                    if (parsed.origin === window.location.origin) {
                        return `${parsed.pathname}${parsed.search}${parsed.hash}`;
                    }
                    return parsed.toString();
                }
            } catch {
                continue;
            }
        }

        return null;
    };

    const openVaultLink = (rawInput: string) => {
        const destination = resolveVaultDestination(rawInput);
        if (!destination) {
            setVaultLinkError("Paste a valid vault link or 6-character access code.");
            return;
        }

        setVaultLinkError(null);
        const cleanInput = rawInput.trim();
        if (cleanInput) {
            localStorage.setItem(RECENT_VAULT_STORAGE_KEY, cleanInput);
            localStorage.setItem(LEGACY_RECENT_VAULT_STORAGE_KEY, cleanInput);
            setRecentVaultLink(cleanInput);
        }

        const localAccessCode = extractAccessCode(destination);
        if (destination.startsWith("/access") && localAccessCode) {
            setAccessCode(localAccessCode);
            return;
        }

        if (destination.startsWith("http://") || destination.startsWith("https://")) {
            const parsed = new URL(destination);
            if (parsed.origin === window.location.origin) {
                const localDestination = `${parsed.pathname}${parsed.search}${parsed.hash}`;
                const code = extractAccessCode(localDestination);
                if (normalizeVaultPath(parsed.pathname) === "/access" && code) {
                    setAccessCode(code);
                    return;
                }
                setLocation(localDestination);
            } else {
                window.location.href = destination;
            }
            return;
        }

        setLocation(destination);
    };

    const handlePasteVaultLink = async () => {
        if (!navigator.clipboard?.readText) {
            setVaultLinkError("Clipboard access is not available in this browser.");
            return;
        }

        try {
            const text = await navigator.clipboard.readText();
            setVaultLinkInput(text.trim());
            setVaultLinkError(null);
        } catch {
            setVaultLinkError("Clipboard read is blocked. Paste manually.");
        }
    };

    useEffect(() => {
        const fromQuery = new URLSearchParams(window.location.search).get("code");
        const fromHash = new URLSearchParams(window.location.hash.replace("#", "")).get("code");
        const fromRecent =
            localStorage.getItem(RECENT_VAULT_STORAGE_KEY) ||
            localStorage.getItem(LEGACY_RECENT_VAULT_STORAGE_KEY);
        const preloadCode = extractAccessCode(fromQuery) || extractAccessCode(fromHash) || extractAccessCode(fromRecent);

        if (preloadCode) {
            setAccessCode(preloadCode);
            // Auto-submit instantly if accessed via share link or QR (Hash/Query)
            if (extractAccessCode(fromQuery) || extractAccessCode(fromHash)) {
                setTimeout(() => submitCode(preloadCode), 50);
            }
        }
        if (fromRecent) {
            setRecentVaultLink(fromRecent);
        }
    }, []);

    const submitCode = async (overrideCode?: string) => {
        // Validate 6-char alphanumeric code
        const codeToProcess = overrideCode || accessCode;
        const cleanCode = codeToProcess.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        if (cleanCode.length !== 6) {
            toast({
                variant: "destructive",
                title: "Invalid Code",
                description: "Please enter a 6-character code."
            });
            return;
        }

        const recentAccessValue = `/access?code=${cleanCode}`;
        localStorage.setItem(RECENT_VAULT_STORAGE_KEY, recentAccessValue);
        localStorage.setItem(LEGACY_RECENT_VAULT_STORAGE_KEY, recentAccessValue);
        setRecentVaultLink(recentAccessValue);

        setStage("fetching");
        setStatusText("Looking up vault...");
        setClipboardPayload(null);

        try {
            // Split the code into lookupId (first 3) and PIN (last 3)
            const lookupId = cleanCode.slice(0, 3);
            const pin = cleanCode.slice(3, 6);

            // Fetch vault data using only the lookupId
            const vault = await codeLookup.mutateAsync(lookupId);
            setVaultData(vault);

            // Initialize per-file download states
            const fileStates = new Map<string, FileDownloadState>();
            for (const file of vault.files) {
                fileStates.set(file.fileId, {
                    fileId: file.fileId,
                    maxDownloads: file.maxDownloads,
                    downloadCount: file.downloadCount,
                    remainingDownloads: file.remainingDownloads,
                    isExhausted: file.remainingDownloads <= 0
                });
            }
            setFileDownloadStates(fileStates);

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
                    const decryptedPayload = await decryptClipboardPayload(vault.encryptedClipboardText, key);
                    setClipboardPayload(decryptedPayload);
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

            // Save to vault history (received)
            if (!accessHistorySavedRef.current) {
                accessHistorySavedRef.current = true;
                const clipPreview = clipboardPayload?.plainText?.trim().slice(0, 80) || undefined;
                addRecord({
                    type: hasClipboard && !hasFiles ? "clipboard" : "vault",
                    action: "received",
                    accessCode: cleanCode,
                    vaultId: vault.id,
                    fileNames: metadata.map((f: any) => f.name || "Unknown"),
                    fileCount: metadata.length,
                    totalSize: metadata.reduce((acc: number, f: any) => acc + (f.size || 0), 0),
                    hasClipboard: !!hasClipboard,
                    clipboardPreview: clipPreview,
                    createdAt: Date.now(),
                    expiresAt: new Date(vault.expiresAt).getTime(),
                    maxDownloads: vault.maxDownloads || 0,
                    downloadCount: vault.downloadCount || 0,
                });
            }

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

            for (let i = 0; i < vaultFile.chunkCount; i++) {
                setStatusText(`Decrypting ${file.name} [${i + 1}/${vaultFile.chunkCount}]...`);

                const { downloadUrl } = await getChunkUrl.mutateAsync({
                    vaultId: vaultData.id,
                    fileId: file.fileId,
                    chunkIndex: i,
                });

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
                if (encryptedChunk.byteLength < 12) throw new Error("Chunk too small");

                const iv = new Uint8Array(encryptedChunk, 0, 12);
                const encryptedData = new Uint8Array(encryptedChunk, 12);
                const decryptedChunk = await decryptData(encryptedData, iv, fileKey);

                if (file.isCompressed) {
                    const brotli = await import("brotli-wasm");
                    await brotli.default;
                    const inputBuffer = new Uint8Array(decryptedChunk as ArrayBuffer);
                    const decompressed = brotli.decompress(inputBuffer);
                    chunks.push(decompressed.buffer as ArrayBuffer);
                } else {
                    chunks.push(decryptedChunk);
                }
            }

            setStatusText(`Assembling ${file.name}...`);
            const blob = new Blob(chunks, { type: file.type || 'application/octet-stream' });

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

    const downloadFile = async (file: FileMetadata, skipTracking = false) => {
        if (!vaultData || !fileKey) return;

        try {
            let streamSuccess = false;

            // Check for SW + File Size Limit (Mobile browsers often have tighter RAM constraints)
            // On mobile, force stream for anything over 5MB to be safe
            const streamThreshold = isMobile ? 5 * 1024 * 1024 : 10 * 1024 * 1024;

            if ('serviceWorker' in navigator && navigator.serviceWorker.controller && file.size > streamThreshold) {
                console.log("Attempting Streamed Download for " + file.name);
                setStatusText(`Preparing stream for ${file.name}...`);

                try {
                    const vaultFile = vaultData.files.find((f: any) => f.fileId === file.fileId);
                    if (!vaultFile) throw new Error("File not found");

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

            if (!streamSuccess) {
                console.log("Using Memory Download for " + file.name);
                await downloadFileInMemory(file);
            }

            if (stage === "ready" && !streamSuccess) {
                toast({ title: "File Downloaded", description: `${file.name} saved.` });
            }

            // Track per-file download (skip when called from Download All — bulk tracking happens there)
            if (!skipTracking && stage === "ready") {
                try {
                    const res = await trackFileDownload.mutateAsync({
                        vaultId: vaultData.id,
                        fileId: file.fileId
                    });

                    // Update per-file download states
                    if (res.files && res.files.length > 0) {
                        setFileDownloadStates(prev => {
                            const newMap = new Map(prev);
                            for (const fileResult of res.files) {
                                newMap.set(fileResult.fileId, {
                                    fileId: fileResult.fileId,
                                    maxDownloads: fileResult.maxDownloads,
                                    downloadCount: fileResult.downloadCount,
                                    remainingDownloads: fileResult.remainingDownloads,
                                    isExhausted: fileResult.isExhausted
                                });
                            }
                            return newMap;
                        });

                        // Show remaining downloads for this file
                        const fileResult = res.files.find((f: any) => f.fileId === file.fileId);
                        if (fileResult && fileResult.remainingDownloads > 0) {
                            toast({
                                title: "Download Tracked",
                                description: `${fileResult.remainingDownloads} download(s) remaining for ${file.name}.`
                            });
                        }
                    }

                    // Check if vault should be burned
                    if (res.vaultExhausted) {
                        toast({
                            title: "Vault Depleted",
                            description: "All files have reached their download limit. Initiating self-destruct...",
                            variant: "destructive"
                        });
                        setTimeout(() => setIsBurned(true), 1500);
                    }
                } catch (e) {
                    console.error("File download tracking failed", e);
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
            // Filter out already-exhausted files
            const downloadableFiles = fileMetadata.filter(file => {
                const fileState = fileDownloadStates.get(file.fileId);
                return !fileState?.isExhausted;
            });

            if (downloadableFiles.length === 0) {
                toast({
                    variant: "destructive",
                    title: "No Downloads Available",
                    description: "All files have reached their download limit."
                });
                setStage("ready");
                return;
            }

            // Download all files sequentially, skipping per-file tracking
            let downloadedCount = 0;
            for (const file of downloadableFiles) {
                setStatusText(`Downloading ${file.name} (${downloadedCount + 1}/${downloadableFiles.length})...`);
                await downloadFile(file, true); // skipTracking = true
                downloadedCount++;
            }

            // Track all downloaded files in a single batch request
            const downloadedFileIds = downloadableFiles.map(f => f.fileId);
            const res = await trackFileDownload.mutateAsync({
                vaultId: vaultData.id,
                fileId: downloadedFileIds[0], // Primary file for URL
                fileIds: downloadedFileIds // All files to track
            });

            // Update all file download states from the batch response
            if (res.files && res.files.length > 0) {
                setFileDownloadStates(prev => {
                    const newMap = new Map(prev);
                    for (const fileResult of res.files) {
                        newMap.set(fileResult.fileId, {
                            fileId: fileResult.fileId,
                            maxDownloads: fileResult.maxDownloads,
                            downloadCount: fileResult.downloadCount,
                            remainingDownloads: fileResult.remainingDownloads,
                            isExhausted: fileResult.isExhausted
                        });
                    }
                    return newMap;
                });
            }

            setStage("ready");
            setStatusText("All files downloaded!");

            toast({
                title: "Download Complete!",
                description: `${downloadedCount} file(s) downloaded successfully.`,
            });

            // Check if vault should be burned
            if (res.vaultExhausted) {
                toast({
                    title: "Vault Depleted",
                    description: "All files have reached their download limit. Initiating self-destruct...",
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

            {/* Optimization: Disable Heavy SVG Filters on Mobile */}
            {!isMobile && <BurnFilter />}

            {/* Ambient Background - Simplified for Mobile */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {!isMobile && (
                    <>
                        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]" />
                    </>
                )}
                {/* Mobile uses simpler gradient to save battery */}
                {isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-zinc-950/20" />
                )}

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <header className="border-b border-zinc-800/50 backdrop-blur-xl bg-black/50">
                    <div className="container max-w-6xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                                <Link href="/">
                                    <motion.div
                                        className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
                                        whileHover={!isMobile ? { scale: 1.02 } : {}}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-base sm:text-lg tracking-tight">
                                                VAULT<span className="text-cyan-400">BRIDGE</span>
                                            </h1>
                                            {!isMobile && <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em]">ACCESS VAULT</p>}
                                        </div>
                                    </motion.div>
                                </Link>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link href="/clipboard">
                                    <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2 h-9 sm:h-10 px-3">
                                        <Clipboard className="w-4 h-4" />
                                        <span className="hidden sm:inline">Create Clipboard</span>
                                        <span className="inline sm:hidden">Clipboard</span>
                                    </Button>
                                </Link>

                                <Link href="/">
                                    <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors h-9 sm:h-10">
                                        <ArrowLeft className="w-4 h-4" />
                                        <span className="hidden sm:inline">Return</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 container max-w-6xl mx-auto px-4 py-6 md:py-12 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {!isBurned ? (
                            <motion.div
                                key={stage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full"
                            >
                                {/* Input Stage */}
                                {stage === "input" && (
                                    <div className="max-w-xl mx-auto w-full">
                                        {/* Hero */}
                                        <div className="text-center mb-6 md:mb-8">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-mono mb-4 md:mb-6">
                                                <Sparkles className="w-3 h-3" />
                                                <span>ZERO-KNOWLEDGE DECRYPTION</span>
                                            </div>
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 sm:mb-4">
                                                Access Secure{" "}
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                                                    Vault
                                                </span>
                                            </h1>
                                            <p className="text-sm sm:text-base text-zinc-400 px-4">
                                                Enter your 6-digit access code to unlock the vault
                                            </p>
                                        </div>

                                        <div className="mb-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                                                Paste Vault Link
                                            </p>
                                            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                                                <Input
                                                    type="text"
                                                    value={vaultLinkInput}
                                                    onChange={(event) => {
                                                        setVaultLinkInput(event.target.value);
                                                        if (vaultLinkError) setVaultLinkError(null);
                                                    }}
                                                    placeholder="https://vaultbridge.org/v/... or ABC123"
                                                    className="h-10 border-zinc-700 bg-zinc-950/70 text-sm text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-cyan-500/40"
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    className="h-10 border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800"
                                                    onClick={handlePasteVaultLink}
                                                >
                                                    Paste
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="h-10 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:from-cyan-500 hover:to-emerald-500"
                                                    onClick={() => openVaultLink(vaultLinkInput)}
                                                >
                                                    Open Vault
                                                </Button>
                                            </div>
                                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                                {recentVaultLink && (
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        className="h-8 px-2 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                                                        onClick={() => openVaultLink(recentVaultLink)}
                                                    >
                                                        Open recent vault
                                                    </Button>
                                                )}
                                                {vaultLinkError && (
                                                    <p className="text-xs text-rose-400">{vaultLinkError}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Access Card */}
                                        <div className="relative">
                                            {!isMobile && <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />}
                                            <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-8">
                                                {/* PIN Input */}
                                                <div className="space-y-6">
                                                    <div className="space-y-4">
                                                        <label className="text-xs text-center block text-zinc-400 uppercase tracking-widest font-mono">
                                                            Enter 6-Digit Code
                                                        </label>

                                                        <div className="flex justify-center gap-2 relative">
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
                                                                        submitCode();
                                                                    }
                                                                }}
                                                                className="absolute inset-0 opacity-0 cursor-pointer z-10 h-20 w-full"
                                                                autoFocus={!isMobile} // Disable autofocus on mobile to prevent keyboard popping up immediately
                                                                autoComplete="off"
                                                                spellCheck="false"
                                                                name="vault_access_code_search"
                                                                id="vault_access_code_search"
                                                            />

                                                            {/* Visual Boxes - Responsive Sizing */}
                                                            <div className="flex items-center gap-1 sm:gap-2">
                                                                <div className="flex gap-1 sm:gap-2">
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
                                                                                    scale: isFocused && !isMobile ? 1.05 : 1, // Disable scale anim on mobile
                                                                                    borderColor: isFocused ? "rgb(6, 182, 212)" : isFilled ? "rgba(6, 182, 212, 0.3)" : "rgba(63, 63, 70, 1)",
                                                                                    backgroundColor: isFilled ? "rgba(6, 182, 212, 0.1)" : "rgba(24, 24, 27, 1)"
                                                                                }}
                                                                                className={`
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${isFocused ? "shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/20" : ""}
                                                                                `}
                                                                            >
                                                                                {num ? (
                                                                                    <span className="text-cyan-400">{num}</span>
                                                                                ) : (
                                                                                    isFocused && (
                                                                                        <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse" />
                                                                                    )
                                                                                )}
                                                                            </motion.div>
                                                                        );
                                                                    })}
                                                                </div>

                                                                <div className="w-3 sm:w-6 flex items-center justify-center">
                                                                    <div className="w-full h-0.5 bg-zinc-700"></div>
                                                                </div>

                                                                <div className="flex gap-1 sm:gap-2">
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
                                                                                    scale: isFocused && !isMobile ? 1.05 : 1,
                                                                                    borderColor: isFocused ? "rgb(16, 185, 129)" : isFilled ? "rgba(16, 185, 129, 0.3)" : "rgba(63, 63, 70, 1)",
                                                                                    backgroundColor: isFilled ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
                                                                                }}
                                                                                className={`
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${isFocused ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/20" : ""}
                                                                                `}
                                                                            >
                                                                                {num ? (
                                                                                    <span className="text-emerald-400">{num}</span>
                                                                                ) : (
                                                                                    isFocused && (
                                                                                        <div className="w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse" />
                                                                                    )
                                                                                )}
                                                                            </motion.div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <p className="text-[10px] sm:text-xs text-zinc-500 text-center">
                                                            First 3 digits = Vault ID • Last 3 digits = PIN
                                                        </p>
                                                    </div>

                                                    <Button
                                                        onClick={() => submitCode()}
                                                        disabled={accessCode.length !== 6}
                                                        className={`w-full h-12 sm:h-14 font-bold uppercase tracking-wider text-sm sm:text-base rounded-xl transition-all duration-300 ${accessCode.length === 6
                                                            ? "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40" // Removed hover scale on mobile
                                                            : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`}
                                                    >
                                                        <KeyRound className={`w-4 h-4 sm:w-5 sm:h-5 mr-3 ${accessCode.length === 6 ? "opacity-100" : "opacity-50"}`} />
                                                        {accessCode.length === 6 ? "Unlock Vault" : "Enter Code"}
                                                    </Button>

                                                    {/* Trust Indicators - Simplified on Mobile */}
                                                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-zinc-800">
                                                        {[
                                                            { icon: Lock, label: "AES-256" },
                                                            { icon: Shield, label: "Zero-Knowledge" },
                                                            { icon: Zap, label: "Auto-Destruct" },
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-zinc-500">
                                                                <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                                <span className="text-[10px] sm:text-xs">{item.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mx-4 sm:mx-0"
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

                                        {/* Recent Activity */}
                                        <div className="mt-6 mx-4 sm:mx-0">
                                            <RecentActivity />
                                        </div>
                                    </div>
                                )}

                                {/* Fetching / Decrypting Stage */}
                                {(stage === "fetching" || stage === "decrypting") && (
                                    <div className="max-w-md mx-auto w-full px-4">
                                        <div className="relative">
                                            {!isMobile && <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50" />}
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
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Ready Stage */}
                                {stage === "ready" && (
                                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                                        {/* Left Sidebar - Vault Info */}
                                        <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                                            {/* Success Card */}
                                            <div className="relative">
                                                {!isMobile && <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20" />}
                                                <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center"
                                                    >
                                                        <ShieldCheck className="w-8 h-8 text-emerald-400" />
                                                    </motion.div>
                                                    <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-1">Vault Unlocked</h2>
                                                    <p className="text-xs sm:text-sm text-zinc-400 text-center">Secure session established</p>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-2 rounded-lg bg-zinc-800 shrink-0">
                                                            <Clock className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline">Expires</span>
                                                    </div>
                                                    <CountdownTimer expiresAt={vaultData.expiresAt} isMobile={isMobile} />
                                                </div>

                                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                                    <div className="flex items-center gap-3 text-zinc-400">
                                                        <div className="p-2 rounded-lg bg-zinc-800 shrink-0">
                                                            <Download className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline">Downloads</span>
                                                    </div>
                                                    <span className="font-mono text-xs sm:text-sm font-bold text-white">
                                                        {(() => {
                                                            // Calculate combined totals from per-file states
                                                            const totalRemaining = Array.from(fileDownloadStates.values()).reduce((sum, f) => sum + f.remainingDownloads, 0);
                                                            const totalMax = Array.from(fileDownloadStates.values()).reduce((sum, f) => sum + f.maxDownloads, 0);
                                                            // Fallback to vault data if no file states yet
                                                            const remaining = fileDownloadStates.size > 0 ? totalRemaining : (vaultData.maxDownloads - vaultData.downloadCount);
                                                            const max = fileDownloadStates.size > 0 ? totalMax : vaultData.maxDownloads;
                                                            return <>{remaining} <span className="text-zinc-600">/</span> {max}</>;
                                                        })()}
                                                    </span>
                                                </div>

                                                {fileMetadata.length > 0 && (
                                                    <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                                        <div className="flex items-center gap-3 text-zinc-400">
                                                            <div className="p-2 rounded-lg bg-zinc-800 shrink-0">
                                                                <HardDrive className="w-4 h-4" />
                                                            </div>
                                                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline">Size</span>
                                                        </div>
                                                        <span className="font-mono text-xs sm:text-sm font-bold text-white">
                                                            {(fileMetadata.reduce((acc: any, f: any) => acc + f.size, 0) / (1024 * 1024)).toFixed(2)} MB
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Content - Files/Clipboard */}
                                        <div className="lg:col-span-2">
                                            <div className="relative">
                                                {!isMobile && <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50" />}
                                                <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-8">
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                                                            {fileMetadata.length + (hasClipboardData ? 1 : 0)}
                                                        </span>
                                                        <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">
                                                            {fileMetadata.length > 0 ? "Available Content" : "Secure Clipboard"}
                                                        </h3>
                                                    </div>

                                                    {(hasClipboardData || !!vaultData.encryptedClipboardText) && (
                                                        <div className="mb-6">
                                                            <LiveClipboard
                                                                lookupId={lookupId}
                                                                fileKey={fileKey!}
                                                                wrappedKey={vaultData.wrappedKey}
                                                                initialContent={clipboardPayload?.plainText || null}
                                                                size="large"
                                                            />
                                                        </div>
                                                    )}

                                                    {fileMetadata.length > 0 && (
                                                        <>
                                                            <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar">
                                                                {fileMetadata.map((file, index) => {
                                                                    const fileState = fileDownloadStates.get(file.fileId);
                                                                    const remaining = fileState?.remainingDownloads ?? vaultData?.maxDownloads ?? 1;
                                                                    const maxDl = fileState?.maxDownloads ?? vaultData?.maxDownloads ?? 1;
                                                                    const isExhausted = fileState?.isExhausted ?? false;

                                                                    return (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, y: 10 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            transition={{ delay: index * 0.05 }}
                                                                            key={file.fileId}
                                                                            className={`group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/50 border rounded-xl hover:bg-zinc-900/80 transition-all duration-300 gap-4 sm:gap-0 ${isExhausted ? 'border-red-500/30 opacity-60' : 'border-zinc-800 hover:border-zinc-700'}`}
                                                                        >
                                                                            <div className="flex items-center gap-4 min-w-0">
                                                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border transition-colors ${isExhausted ? 'border-red-500/30' : 'border-zinc-700 group-hover:border-cyan-500/50'}`}>
                                                                                    <FileText className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isExhausted ? 'text-red-400' : 'text-zinc-400 group-hover:text-cyan-400'}`} />
                                                                                </div>
                                                                                <div className="min-w-0 flex-1">
                                                                                    <p className="text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                                                                                    <div className="flex items-center gap-3 mt-1">
                                                                                        <span className="text-xs text-zinc-500 font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                                                                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                                                        <span className="text-[10px] text-zinc-500 uppercase font-bold">{file.type?.split('/')[1] || 'FILE'}</span>
                                                                                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                                                        <span className={`text-[10px] font-bold uppercase ${isExhausted ? 'text-red-400' : remaining <= 1 ? 'text-amber-400' : 'text-cyan-400'}`}>
                                                                                            {remaining}/{maxDl} DL
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <Button
                                                                                size="sm"
                                                                                variant="outline"
                                                                                disabled={isExhausted}
                                                                                className={`w-full sm:w-auto shrink-0 transition-colors h-10 sm:h-9 ${isExhausted ? 'bg-transparent border-red-500/30 text-red-400 cursor-not-allowed' : 'bg-transparent border-zinc-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400'}`}
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    e.preventDefault();
                                                                                    if (!isExhausted) downloadFile(file);
                                                                                }}
                                                                            >
                                                                                <Download className="w-4 h-4 mr-2" />
                                                                                {isExhausted ? 'Limit Reached' : 'Download'}
                                                                            </Button>
                                                                        </motion.div>
                                                                    );
                                                                })}
                                                            </div>

                                                            <Button
                                                                size="lg"
                                                                className={`w-full font-bold h-12 transition-all ${Array.from(fileDownloadStates.values()).every(f => f.isExhausted) && fileDownloadStates.size > 0
                                                                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-red-500/20"
                                                                    : "bg-cyan-600 hover:bg-cyan-500 text-white"
                                                                    }`}
                                                                onClick={handleDownload}
                                                                disabled={Array.from(fileDownloadStates.values()).every(f => f.isExhausted) && fileDownloadStates.size > 0}
                                                            >
                                                                {Array.from(fileDownloadStates.values()).every(f => f.isExhausted) && fileDownloadStates.size > 0 ? (
                                                                    'All Limits Reached'
                                                                ) : (
                                                                    <>
                                                                        <Download className="w-4 h-4 mr-2" />
                                                                        Download All Files
                                                                    </>
                                                                )}
                                                            </Button>
                                                            <p className="text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70">
                                                                By continuing, you agree to our <Link href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</Link>, <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link> & <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Sitemap</a>.
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            // Burned State (Simplified)
                            <motion.div
                                key="burned"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full max-w-md mx-auto text-center"
                            >
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                    <Zap className="w-10 h-10 text-red-500" />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-widest">Vault Incinerated</h2>
                                <p className="text-zinc-500 mb-8">All contents have been permanently purged from existence.</p>
                                <Link href="/">
                                    <Button variant="outline" className="border-zinc-800 text-zinc-400 hover:text-white">
                                        Return Home
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Attribution Footer */}
                    <div className="mt-12 text-center pb-8 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="inline-flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                <p className="text-sm font-medium text-zinc-300">Securely shared via VaultBridge</p>
                            </div>
                            <a href="/" className="text-xs text-cyan-400 hover:underline hover:text-cyan-300 transition-colors font-mono">
                                Free encrypted file sharing
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
