import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, KeyRound, ArrowLeft, Shield, AlertTriangle, Download, Loader2, Clock, HardDrive, FileText,
    Clipboard, Sparkles, ShieldCheck, Zap, Activity, Binary, ChevronRight, Fingerprint, ShieldAlert,
    Trash2, Eye, ShieldQuestion, Database, Smartphone, Globe, Layers, Cpu, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { LiveClipboard } from "@/components/LiveClipboard";
import { useCodeLookup, useGetChunkDownloadUrl, useTrackDownload, useTrackFileDownload } from "@/hooks/use-vaults";
import { unwrapFileKey, decryptMetadata, decryptData, decryptClipboardPayload, type ClipboardPayload } from "@/lib/crypto";
import { initiateStreamDownload } from "@/lib/downloadStream";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVaultHistory } from "@/hooks/useVaultHistory";
import { getVaultIdentity } from "@/lib/cipherAvatar";

type AccessStage = "input" | "fetching" | "decrypting" | "ready" | "downloading";

interface FileMetadata {
    name: string;
    type: string;
    size: number;
    fileId: string;
    isCompressed?: boolean;
    lastModified: number;
}

interface FileDownloadState {
    fileId: string;
    maxDownloads: number;
    downloadCount: number;
    remainingDownloads: number;
    isExhausted: boolean;
}

const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

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

    if (!timeLeft) return <span className="text-red-500 font-mono font-bold text-[10px]">EXPIRED</span>;

    return (
        <div className="flex items-center gap-1.5 font-mono font-bold text-xs">
            <span className="bg-zinc-900 border border-white/5 px-1.5 py-1 rounded text-primary">{timeLeft.h.toString().padStart(2, '0')}</span>
            <span className="text-zinc-600">:</span>
            <span className="bg-zinc-900 border border-white/5 px-1.5 py-1 rounded text-primary">{timeLeft.m.toString().padStart(2, '0')}</span>
            <span className="text-zinc-600">:</span>
            <span className="bg-zinc-900 border border-white/5 px-1.5 py-1 rounded text-primary">{timeLeft.s.toString().padStart(2, '0')}</span>
        </div>
    );
}

export default function AccessPage() {
    const isMobile = useIsMobile();
    const [accessCode, setAccessCode] = useState("");
    const [stage, setStage] = useState<AccessStage>("input");
    const [statusText, setStatusText] = useState("");
    const [fileMetadata, setFileMetadata] = useState<FileMetadata[]>([]);
    const [vaultData, setVaultData] = useState<any>(null);
    const [fileKey, setFileKey] = useState<CryptoKey | null>(null);
    const [isBurned, setIsBurned] = useState(false);
    const [clipboardPayload, setClipboardPayload] = useState<ClipboardPayload | null>(null);
    const [fileDownloadStates, setFileDownloadStates] = useState<Map<string, FileDownloadState>>(new Map());

    const identity = vaultData ? getVaultIdentity(vaultData.shortCode) : null;
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const codeLookup = useCodeLookup();
    const getChunkUrl = useGetChunkDownloadUrl();
    const trackFileDownload = useTrackFileDownload();
    const { addRecord } = useVaultHistory();
    const accessHistorySavedRef = useRef(false);

    useEffect(() => {
        const hash = window.location.hash;
        const hashParams = new URLSearchParams(hash.replace("#", ""));
        const code = hashParams.get("code");
        
        if (code) {
            const clean = code.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            if (clean.length === 8) {
                setAccessCode(clean);
                setTimeout(() => submitCode(clean), 500);
            }
        }
    }, []);

    const submitCode = async (overrideCode?: string) => {
        const cleanCode = (overrideCode || accessCode).replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        if (cleanCode.length !== 8) return;

        setStage("fetching");
        setStatusText("Resolving secure node...");

        try {
            const lookupId = cleanCode.slice(0, 3);
            const pin = cleanCode.slice(3, 8);

            const vault = await codeLookup.mutateAsync(lookupId);
            setVaultData(vault);

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
            setStatusText("Synthesizing decryption key...");
            
            const key = await unwrapFileKey(vault.wrappedKey, pin, vault.pinSalt || undefined);
            setFileKey(key);

            setStatusText("Decoding metadata manifest...");
            const metadata = await decryptMetadata(vault.encryptedMetadata, key);
            setFileMetadata(metadata);

            if (vault.encryptedClipboardText) {
                setStatusText("Processing clipboard data...");
                const decryptedPayload = await decryptClipboardPayload(vault.encryptedClipboardText, key);
                setClipboardPayload(decryptedPayload);
            }

            setStage("ready");
            setStatusText("Vault Unlocked");
            playSound('unlock');

            if (!accessHistorySavedRef.current) {
                accessHistorySavedRef.current = true;
                addRecord({
                    type: vault.encryptedClipboardText && metadata.length === 0 ? "clipboard" : "vault",
                    action: "received",
                    accessCode: cleanCode,
                    vaultId: vault.id,
                    fileNames: metadata.map((f: any) => f.name),
                    fileCount: metadata.length,
                    totalSize: metadata.reduce((acc: number, f: any) => acc + (f.size || 0), 0),
                    hasClipboard: !!vault.encryptedClipboardText,
                    createdAt: Date.now(),
                    expiresAt: new Date(vault.expiresAt).getTime(),
                    maxDownloads: vault.maxDownloads || 0,
                    downloadCount: vault.downloadCount || 0,
                });
            }
        } catch (err) {
            setStage("input");
            toast({ variant: "destructive", title: "ACCESS_DENIED", description: "Verification failure. Code may be invalid or expired." });
        }
    };

    const downloadFile = async (file: FileMetadata, skipTracking = false) => {
        if (!vaultData || !fileKey) return;
        try {
            setStatusText(`Downloading ${file.name}...`);
            const vaultFile = vaultData.files.find((f: any) => f.fileId === file.fileId);
            if (!vaultFile) throw new Error("File metadata not found");

            const streamThreshold = isMobile ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
            let success = false;

            if (file.size > streamThreshold) {
                try {
                    const chunks = [];
                    for (let i = 0; i < vaultFile.chunkCount; i++) {
                        const { downloadUrl } = await getChunkUrl.mutateAsync({
                            vaultId: vaultData.id, fileId: file.fileId, chunkIndex: i
                        });
                        chunks.push({ downloadUrl, index: i });
                    }
                    await initiateStreamDownload(file.fileId, fileKey, chunks, file);
                    success = true;
                } catch (e) { success = false; }
            }

            if (!success) {
                const chunks: ArrayBuffer[] = [];
                for (let i = 0; i < vaultFile.chunkCount; i++) {
                    const { downloadUrl } = await getChunkUrl.mutateAsync({
                        vaultId: vaultData.id, fileId: file.fileId, chunkIndex: i
                    });
                    const res = await fetch(downloadUrl);
                    const enc = await res.arrayBuffer();
                    const iv = new Uint8Array(enc, 0, 12);
                    const data = new Uint8Array(enc, 12);
                    const dec = await decryptData(data, iv, fileKey);
                    chunks.push(dec);
                }
                const blob = new Blob(chunks, { type: file.type });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = file.name;
                a.click();
                URL.revokeObjectURL(url);
            }

            if (!skipTracking) {
                const res = await trackFileDownload.mutateAsync({ vaultId: vaultData.id, fileId: file.fileId });
                if (res.vaultExhausted) setIsBurned(true);
            }
        } catch (e) {
            toast({ variant: "destructive", title: "DOWNLOAD_ERROR", description: "Packet loss or encryption failure." });
        }
    };

    const handleDownloadAll = async () => {
        setStage("downloading");
        try {
            for (const file of fileMetadata) {
                await downloadFile(file, true);
            }
            const res = await trackFileDownload.mutateAsync({ 
                vaultId: vaultData.id, 
                fileId: fileMetadata[0].fileId,
                fileIds: fileMetadata.map(f => f.fileId)
            });
            if (res.vaultExhausted) setIsBurned(true);
            setStage("ready");
        } catch (e) { setStage("ready"); }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background effects */}
            <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="fixed inset-0 bg-primary/5 blur-[150px] pointer-events-none" />
            <div className="scanline pointer-events-none opacity-10" />

            {/* Header */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-8 h-8 bg-zinc-950 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-base font-black font-mono tracking-widest text-white">VAULT<span className="text-primary">BRIDGE</span></h1>
                        </div>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white px-4 text-[10px] font-black tracking-widest gap-2">
                            <ArrowLeft className="w-4 h-4" /> RETURN
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 pt-28 pb-20 flex flex-col">
                <AnimatePresence mode="wait">
                    {stage === "input" && (
                        <motion.div key="input" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-10">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-4">
                                    <Fingerprint className="w-3.5 h-3.5" /> Handshake Pending
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight text-white uppercase italic">
                                    Vault <span className="text-primary">Access</span>
                                </h2>
                                <p className="text-zinc-500 text-sm font-medium">Authentication required to reconstruct cryptographic fragments.</p>
                            </div>

                            <div className="glass-card p-10 space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                   <KeyRound className="w-16 h-16 text-primary" />
                                </div>
                                
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Secure Entrance Key</label>
                                    <Input
                                        placeholder="XXX-XXXXX"
                                        value={accessCode}
                                        onChange={e => setAccessCode(e.target.value.toUpperCase())}
                                        onKeyDown={e => e.key === 'Enter' && submitCode()}
                                        className="h-20 bg-zinc-950 border-white/10 rounded-2xl text-center text-3xl font-mono font-black tracking-[0.3em] text-white focus:border-primary/50 transition-all shadow-2xl"
                                    />
                                </div>

                                <Button 
                                    onClick={() => submitCode()} 
                                    disabled={accessCode.length < 8}
                                    className="h-16 w-full rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform"
                                >
                                    Establish Handshake
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                                   <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary/50" /> End-to-End</div>
                                   <div className="flex items-center gap-2"><Cpu className="w-3 h-3 text-primary/50" /> Client-Side</div>
                                   <div className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary/50" /> Encrypted</div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {(stage === "fetching" || stage === "decrypting" || stage === "downloading") && (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                            <div className="relative w-32 h-32 mb-10">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-primary/20 rounded-full border-t-primary shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
                                <div className="absolute inset-4 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5">
                                    <Lock className="w-8 h-8 text-primary animate-pulse" />
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-white uppercase italic tracking-widest mb-2">{stage}...</h3>
                            <p className="text-zinc-500 font-mono text-xs">{statusText}</p>
                        </motion.div>
                    )}

                    {stage === "ready" && (
                        <motion.div key="ready" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                            {/* Vault Identity Card */}
                            <div className="glass-card p-6 flex items-center justify-between gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5"><Binary className="w-20 h-20" /></div>
                                <div className="flex items-center gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${identity?.color} flex items-center justify-center text-3xl border border-white/10 shadow-xl`}>
                                        {identity?.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white uppercase italic">Vault {identity?.name}</h3>
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Handshake Verified</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">Session TTL</span>
                                    <CountdownTimer expiresAt={vaultData.expiresAt} />
                                </div>
                            </div>

                            {/* Files Manifest */}
                            <div className="glass-card overflow-hidden">
                                <div className="p-4 border-b border-white/5 bg-zinc-900/30 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                        <Layers className="w-3.5 h-3.5" /> Binary Manifest
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-zinc-500">{fileMetadata.length} Objects</span>
                                </div>
                                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                                    {fileMetadata.map((file, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-colors">
                                                    <FileText className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-zinc-300 truncate max-w-[200px]">{file.name}</p>
                                                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">{formatSize(file.size)} • {file.type.split('/')[1] || 'BINARY'}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm" onClick={() => downloadFile(file)} className="text-[10px] font-black text-primary hover:bg-primary/10 rounded-full">
                                                <Download className="w-3.5 h-3.5 mr-2" /> EXTRACT
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-zinc-900/50 flex flex-col gap-4">
                                    <Button onClick={handleDownloadAll} className="h-14 w-full rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                                        Extract Entire Payload
                                        <Zap className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>

                            {/* Clipboard Section */}
                            {clipboardPayload && (
                                <div className="glass-card p-6 space-y-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clipboard className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Decrypted Secure Buffer</span>
                                    </div>
                                    <div className="bg-zinc-950/80 p-5 rounded-2xl border border-white/5 font-mono text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
                                        {clipboardPayload.plainText}
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(clipboardPayload.plainText)} className="w-full border-white/5 hover:bg-primary/10 hover:text-primary text-[10px] font-black uppercase tracking-widest">
                                        Copy Buffer Content
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
