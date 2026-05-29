import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, KeyRound, ArrowLeft, Shield, AlertTriangle, Download, Loader2, Clock, HardDrive, FileText,
    Clipboard, Sparkles, ShieldCheck, Zap, Activity, Binary, ChevronRight, Fingerprint, ShieldAlert,
    Trash2, Eye, ShieldQuestion, Database, Smartphone, Globe, Layers, Cpu, ArrowRight, RefreshCw, Mail, X
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
import { VaultDestruction } from "@/components/VaultDestruction";

type AccessStage = "input" | "fetching" | "decrypting" | "ready" | "downloading";

const RECENT_KEY = "vaultbridge_recent";
const LEGACY_KEY = "vaultbridge-recent-vault-link";
const CODE_RE = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{5}$/;
const okPath = (p: string) => { const n = p.endsWith("/") ? p.slice(0, -1) : p; return n === "/access" || n.startsWith("/download/") || n.startsWith("/v/"); };

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
    const [recent, setRecent] = useState<string | null>(null);
    const [clip, setClip] = useState<string | null>(null);
    const [showClip, setShowClip] = useState(false);
    const [cardState, setCardState] = useState<"locked" | "entering">("locked");

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
        const code = hashParams.get("code") || new URLSearchParams(window.location.search).get("code");
        
        if (code) {
            const clean = code.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            if (clean.length === 8) {
                setAccessCode(formatAccessCode(clean));
                setTimeout(() => submitCode(clean), 500);
            }
        }
    }, []);

    const resolve = (raw: string): string | null => {
        const t = raw.trim(); if (!t) return null;
        if (CODE_RE.test(t)) return `/access?code=${t.replace(/[^A-Za-z0-9]/g, "").toUpperCase()}`;
        const c = [t]; if (/^(access|download\/|v\/)/i.test(t)) c.push(`/${t}`);
        for (const x of c) { try { const u = x.startsWith("/") ? new URL(x, location.origin) : new URL(x); if (okPath(u.pathname)) return u.origin === location.origin ? `${u.pathname}${u.search}${u.hash}` : u.toString(); } catch { continue; } }
        return null;
    };

    useEffect(() => {
        const s = localStorage.getItem(RECENT_KEY) || localStorage.getItem(LEGACY_KEY);
        if (s) setRecent(s);
    }, []);

    const paste = async () => {
        if (!navigator.clipboard?.readText) {
            toast({ variant: "destructive", title: "Clipboard unavailable", description: "Clipboard read permissions are unavailable or blocked." });
            return;
        }
        try {
            const text = (await navigator.clipboard.readText()).trim();
            const d = resolve(text);
            if (d) {
                const codeParam = new URLSearchParams(d.split("?")[1] || "").get("code");
                if (codeParam) {
                    setAccessCode(formatAccessCode(codeParam));
                    toast({ title: "Auto-filled", description: "Vault code parsed from clipboard!" });
                    return;
                }
            }
            setAccessCode(formatAccessCode(text));
        } catch {
            toast({ variant: "destructive", title: "Clipboard blocked", description: "Clipboard read permissions are unavailable or blocked." });
        }
    };

    useEffect(() => {
        if (!window.isSecureContext || !navigator.clipboard?.readText) return;
        const t = setTimeout(async () => {
            try {
                const txt = (await navigator.clipboard.readText()).trim();
                if (!txt) return;
                const d = resolve(txt);
                if (!d) return;
                const codeParam = new URLSearchParams(d.split("?")[1] || "").get("code");
                if (codeParam) {
                    setClip(txt);
                    setShowClip(true);
                }
            } catch {}
        }, 1500);
        return () => clearTimeout(t);
    }, []);

    const formatAccessCode = (raw: string): string => {
        const clean = raw.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 8);
        if (clean.length > 3) return clean.slice(0, 3) + "-" + clean.slice(3);
        return clean;
    };

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

            // Save to recent vaults list
            localStorage.setItem(RECENT_KEY, cleanCode);
            localStorage.setItem(LEGACY_KEY, cleanCode);
            setRecent(cleanCode);

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
            toast({ variant: "destructive", title: "Access Denied", description: "Verification failed. The code may be invalid or the vault has expired." });
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
            toast({ variant: "destructive", title: "Download Failed", description: "Could not complete the download. Please check your connection and try again." });
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
        <div className="min-h-screen relative flex flex-col font-sans text-zinc-100 bg-[#020604]">
            {/* Background effects */}
            <div className="fixed top-0 left-1/4 w-[500px] h-[500px] radial-backlight rounded-full opacity-50 pointer-events-none" />

            {/* Header */}
            <header className="relative w-full z-50 border-b border-white/[0.03] bg-[#020604]/80 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer select-none">
                            <div className="relative w-9 h-9 flex items-center justify-center">
                                <svg className="w-full h-full text-[#10b981]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="44" stroke="#10b981" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="8 6" />
                                    <circle cx="50" cy="50" r="38" stroke="#10b981" strokeOpacity="0.3" strokeWidth="2" />
                                    <path d="M50 18C66 18 73 23 73 23C73 45 62 66 50 80C38 66 27 45 27 23C27 23 34 18 50 18Z" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="2.5" />
                                    <circle cx="50" cy="50" r="11" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                                    <path d="M50 39V43" stroke="#10b981" strokeWidth="2" />
                                    <path d="M50 57V61" stroke="#10b981" strokeWidth="2" />
                                    <path d="M39 50H43" stroke="#10b981" strokeWidth="2" />
                                    <path d="M57 50H61" stroke="#10b981" strokeWidth="2" />
                                </svg>
                            </div>
                            <span className="text-base font-bold tracking-tight text-white font-['Geist',system-ui,sans-serif]">
                                Vault<span className="text-[#10b981]">Bridge</span>
                            </span>
                        </div>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white px-4 text-xs font-semibold gap-2 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Return home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className={cn(
                "relative z-10 flex-1 w-full mx-auto px-4 pt-8 sm:pt-12 pb-20 flex flex-col justify-center",
                stage === "input" ? "max-w-5xl" : "max-w-2xl"
            )}>
                <AnimatePresence mode="wait">
                    {stage === "input" && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                            {/* Left Side: Mockup Safe Container */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="col-span-1 lg:col-span-7 flex flex-col items-center justify-center relative rounded-3xl overflow-hidden border border-white/[0.03] bg-zinc-950/20 p-4 h-[380px] sm:h-[450px] shadow-2xl"
                            >
                                <div className="absolute inset-0 radial-backlight rounded-full opacity-45 pointer-events-none z-0" />
                                <img 
                                    src="/access-safe.png" 
                                    alt="Mockup Secure Safe Pedestal" 
                                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(16,185,129,0.1)] z-10"
                                />
                            </motion.div>

                            {/* Right Side: Morphing Lock Card */}
                            <div className="col-span-1 lg:col-span-5 flex justify-center w-full">
                                <AnimatePresence mode="wait">
                                    {cardState === "locked" ? (
                                        /* ─── LOCKED BIOMETRIC VIEW ─── */
                                        <motion.div
                                            key="locked"
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            onClick={() => { playSound("click"); setCardState("entering"); }}
                                            className="w-full max-w-[350px] h-[460px] glass-panel rounded-3xl p-8 flex flex-col justify-between items-center relative border border-[#10b981]/15 shadow-[0_0_35px_rgba(16,185,129,0.1)] hover:border-[#10b981]/30 hover:shadow-[0_0_45px_rgba(16,185,129,0.18)] cursor-pointer transition-all group select-none overflow-hidden"
                                        >
                                            {/* Fingerprint Scanning Area */}
                                            <div className="flex flex-col items-center gap-4 mt-6">
                                                <motion.div 
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-20 h-20 rounded-full border-2 border-[#10b981]/30 group-hover:border-[#10b981] flex items-center justify-center text-[#10b981] transition-all bg-[#020d07]/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                                >
                                                    <Fingerprint className="w-9 h-9" />
                                                </motion.div>
                                                <p className="text-[11px] font-bold text-[#10b981]/80 tracking-widest uppercase font-mono group-hover:text-[#10b981] transition-colors">handshake scanner</p>
                                            </div>

                                            {/* Dot Matrix Indicators (○ ○ ○ ○ ○ ○) */}
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="flex items-center gap-3.5">
                                                    {[...Array(6)].map((_, i) => (
                                                        <div 
                                                            key={i} 
                                                            className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                                                                accessCode.replace(/[^a-zA-Z0-9]/g, '').length > i 
                                                                    ? "bg-[#10b981] border-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                                                                    : "border-zinc-700 bg-transparent"
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase mt-2">entrance key pin</p>
                                            </div>

                                            {/* Large Lock Dial Knob at Bottom */}
                                            <div className="flex flex-col items-center gap-2 mb-4">
                                                <div className="w-18 h-18 rounded-full border border-zinc-800/80 bg-[#020a06]/90 flex items-center justify-center shadow-lg group-hover:border-[#10b981]/40 transition-colors shadow-black/40">
                                                    <Lock className="w-5 h-5 text-zinc-400 group-hover:text-[#10b981] transition-colors" />
                                                </div>
                                                <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">tap card to unlock</p>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* ─── ENTERING KEY INPUT VIEW (Morphs in!) ─── */
                                        <motion.div
                                            key="entering"
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            className="w-full max-w-[350px] h-[460px] glass-panel rounded-3xl p-6 flex flex-col justify-between items-center relative border border-[#10b981]/20 shadow-[0_0_35px_rgba(16,185,129,0.15)]"
                                        >
                                            {/* Top Control Header */}
                                            <div className="w-full flex items-center justify-between border-b border-zinc-800/60 pb-3">
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); playSound("click"); setCardState("locked"); }}
                                                    className="inline-flex items-center gap-1 text-[10px] font-bold text-zinc-500 hover:text-white transition-colors cursor-pointer"
                                                >
                                                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                                                </button>
                                                <span className="text-[9px] font-bold text-[#10b981] tracking-widest uppercase font-mono bg-[#10b981]/5 px-2.5 py-1 rounded-md border border-[#10b981]/15">entering key</span>
                                            </div>

                                            {/* Key Input Pad Area */}
                                            <div className="w-full space-y-4 my-2">
                                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1 block text-left">Secure Entrance Key</label>
                                                <Input
                                                    autoFocus
                                                    placeholder="XXX-XXXXX"
                                                    value={accessCode}
                                                    onChange={e => setAccessCode(formatAccessCode(e.target.value))}
                                                    onKeyDown={e => e.key === 'Enter' && submitCode()}
                                                    className="h-16 bg-zinc-950/80 border-white/10 rounded-2xl text-center text-2xl font-mono font-black tracking-[0.25em] text-white focus:border-[#10b981]/40 focus:ring-1 focus:ring-[#10b981]/10 transition-all shadow-2xl"
                                                />

                                                {/* Helpers Pill Row inside Card */}
                                                <div className="flex flex-col gap-2 pt-1">
                                                    <button 
                                                        type="button" 
                                                        onClick={paste} 
                                                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:bg-zinc-800 text-[11px] font-semibold text-zinc-300 transition-colors cursor-pointer select-none"
                                                    >
                                                        <Clipboard className="w-3.5 h-3.5 text-[#10b981]" />
                                                        Paste from clipboard
                                                    </button>
                                                    {recent && (
                                                        <button 
                                                            type="button" 
                                                            onClick={() => { playSound('click'); setAccessCode(formatAccessCode(recent)); }} 
                                                            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:bg-zinc-800 text-[11px] font-semibold text-zinc-300 transition-colors cursor-pointer select-none"
                                                        >
                                                            <RefreshCw className="w-3.5 h-3.5 text-[#10b981] animate-spin-slow" />
                                                            Recent ({recent.slice(0, 3)}-{recent.slice(3)})
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Primary Establish Handshake Button */}
                                            <div className="w-full space-y-3">
                                                <Button 
                                                    onClick={() => submitCode()} 
                                                    disabled={accessCode.replace(/[^a-zA-Z0-9]/g, '').length < 8}
                                                    className="w-full h-14 rounded-2xl bg-[#10b981] hover:bg-[#34d399] text-black font-extrabold uppercase tracking-[0.15em] text-xs shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer border-none"
                                                >
                                                    Establish Handshake
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>

                                                {/* Mini Security Indicators */}
                                                <div className="flex items-center justify-between text-[9px] font-bold text-zinc-500 uppercase tracking-widest pt-2 border-t border-zinc-800/50">
                                                    <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#10b981]/60" /> E2E</div>
                                                    <div className="flex items-center gap-1"><Cpu className="w-3 h-3 text-[#10b981]/60" /> Client</div>
                                                    <div className="flex items-center gap-1"><Globe className="w-3 h-3 text-[#10b981]/60" /> Encrypted</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
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
                            <div className="transfer-panel p-6 flex items-center justify-between gap-6 relative overflow-hidden">
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
                            <div className="transfer-panel overflow-hidden">
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
                                            <Button 
                                                onClick={() => downloadFile(file)} 
                                                className="h-10 px-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-all font-black uppercase tracking-[0.15em] text-[10px]"
                                            >
                                                <Download className="w-3.5 h-3.5 mr-2" /> EXTRACT
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-zinc-900/50 flex flex-col gap-4">
                                    <Button 
                                        onClick={handleDownloadAll} 
                                        className="w-full h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-black uppercase tracking-[0.2em] text-base shadow-[0_15px_40px_rgba(16,185,129,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center"
                                    >
                                        Extract Entire Payload
                                        <Zap className="w-6 h-6 ml-4 fill-current" />
                                    </Button>
                                </div>
                            </div>

                            {/* Clipboard Section */}
                            {clipboardPayload && (
                                <div className="transfer-panel p-6 space-y-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clipboard className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Decrypted Secure Buffer</span>
                                    </div>
                                    <div className="bg-zinc-950/80 p-5 rounded-2xl border border-white/5 font-mono text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
                                        {clipboardPayload.plainText}
                                    </div>
                                    <Button 
                                        onClick={() => navigator.clipboard.writeText(clipboardPayload.plainText)} 
                                        className="w-full h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all font-black uppercase tracking-[0.15em] text-xs"
                                    >
                                        Copy Buffer Content
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <VaultDestruction 
                isActive={isBurned}
                vaultCode={vaultData?.shortCode}
                fileCount={fileMetadata.length}
                totalSize={fileMetadata.reduce((acc, f) => acc + (f.size || 0), 0)}
            />

            {/* Clipboard detection prompt overlay */}
            {showClip && clip && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-5 z-[60] mx-auto max-w-sm rounded-2xl border border-[#10b981]/20 bg-[#020a06]/95 p-4 shadow-2xl backdrop-blur-xl"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p className="text-sm font-bold text-[#10b981]">Vault link detected</p>
                            <p className="mt-1 text-xs text-zinc-500 font-mono truncate max-w-[280px]">{clip}</p>
                        </div>
                        <button onClick={() => setShowClip(false)} className="text-zinc-500 hover:text-white cursor-pointer">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="mt-3 flex gap-2">
                        <button 
                            className="flex-1 bg-[#10b981] hover:bg-[#34d399] text-black font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer" 
                            onClick={() => { 
                                const codeParam = new URLSearchParams(resolve(clip)?.split("?")[1] || "").get("code");
                                if (codeParam) {
                                    setAccessCode(formatAccessCode(codeParam));
                                    submitCode(codeParam);
                                }
                                setShowClip(false); 
                            }}
                        >
                            Open vault
                        </button>
                        <button 
                            className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer" 
                            onClick={() => { 
                                const codeParam = new URLSearchParams(resolve(clip)?.split("?")[1] || "").get("code");
                                if (codeParam) {
                                    setAccessCode(formatAccessCode(codeParam));
                                }
                                setShowClip(false); 
                            }}
                        >
                            Paste in box
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
