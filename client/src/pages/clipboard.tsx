import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Copy, RefreshCw, Power,
    Globe, Shield, Eye, EyeOff, Wifi, QrCode,
    Trash2, CheckCircle2, Terminal, Clock
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault, useClipboardSync, useUpdateClipboard } from "@/hooks/use-vaults";
import { generateKey, generateSplitCode, wrapFileKey, encryptMetadata, encryptClipboardText, decryptClipboardText } from "@/lib/crypto";
import { useVaultHistory } from "@/hooks/useVaultHistory";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";

const formatExpiry = (hours: number) => {
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const rem = hours % 24;
    return rem === 0 ? `${days}d` : `${days}d ${rem}h`;
};

const PulseIndicator = ({ status }: { status: "idle" | "syncing" | "live" }) => {
    const colors = { idle: "bg-zinc-600", syncing: "bg-amber-400", live: "bg-emerald-500" };
    const labels = { idle: "Draft", syncing: "Syncing…", live: "Live" };
    return (
        <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
                {status !== "idle" && (
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${colors[status]}`} />
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${colors[status]}`} />
            </div>
            <span className={`text-[11px] font-mono uppercase tracking-wider ${status === "live" ? "text-emerald-400" :
                status === "syncing" ? "text-amber-400" : "text-zinc-500"
                }`}>{labels[status]}</span>
        </div>
    );
};

export default function UniversalClipboard() {
    const { toast } = useToast();
    const { play } = useSounds();
    const { addRecord } = useVaultHistory();

    const [mode, setMode] = useState<"draft" | "live">("draft");
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [justCopied, setJustCopied] = useState(false);
    const [expiresIn, setExpiresIn] = useState([1]); // Default to 1 hour
    const [showSettings, setShowSettings] = useState(false);

    const [vaultData, setVaultData] = useState<{
        pin: string; lookupId: string; fullCode: string;
        key: CryptoKey; wrappedKey: string;
    } | null>(null);

    const [lastSynced, setLastSynced] = useState<Date | null>(null);
    const [isSyncing, setIsSyncing] = useState(false);

    const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    // FIX: prevent remote data overwriting while user is actively typing
    const isTypingRef = useRef(false);
    const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
    // Keep a ref of content for the sync effect to compare without being a dep
    const contentRef = useRef(content);
    contentRef.current = content;

    const createVault = useCreateVault();
    const updateVault = useUpdateClipboard();
    const { data: remoteData } = useClipboardSync(
        vaultData?.lookupId ?? "",
        mode === "live" && !!vaultData?.lookupId
    );

    // Incoming sync — guarded by isTypingRef to prevent overwriting mid-edit
    useEffect(() => {
        if (mode !== "live" || !remoteData?.encryptedClipboardText || !vaultData) return;
        if (isTypingRef.current) return; // user is typing, skip

        const decrypt = async () => {
            try {
                const decryptedText = await decryptClipboardText(
                    remoteData.encryptedClipboardText!, vaultData.key
                );
                // Use ref to compare without adding content to deps (avoids outgoing loop)
                if (decryptedText !== contentRef.current) {
                    setContent(decryptedText);
                    setLastSynced(new Date());
                    play("pop");
                }
            } catch (e) {
                console.error("Decryption sync failed", e);
            }
        };
        decrypt();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remoteData, mode, vaultData]);

    // Outgoing sync, debounced 600ms
    const handleContentChange = useCallback((newText: string) => {
        setContent(newText);
        isTypingRef.current = true;
        if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
        typingTimerRef.current = setTimeout(() => { isTypingRef.current = false; }, 600);

        if (mode === "live" && vaultData) {
            setIsSyncing(true);
            if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
            syncTimeoutRef.current = setTimeout(async () => {
                try {
                    const encrypted = await encryptClipboardText(newText, vaultData.key);
                    await updateVault.mutateAsync({
                        lookupId: vaultData.lookupId,
                        encryptedClipboardText: encrypted,
                        wrappedKey: vaultData.wrappedKey,
                    });
                    setLastSynced(new Date());
                } catch (e) {
                    console.error("Upload failed", e);
                } finally {
                    setIsSyncing(false);
                }
            }, 600);
        }
    }, [mode, vaultData, updateVault]);

    const handleGoLive = async () => {
        if (!content.trim()) {
            toast({ variant: "destructive", title: "Empty content", description: "Add some text first." });
            return;
        }
        setIsCreating(true);
        play("click");
        try {
            const key = await generateKey();
            const splitCode = generateSplitCode();
            const wrappedKey = await wrapFileKey(key, splitCode.pin);
            const encryptedContent = await encryptClipboardText(content, key);
            const encryptedMetadata = await encryptMetadata([], key);
            await createVault.mutateAsync({
                expiresIn: expiresIn[0], maxDownloads: 100,
                encryptedMetadata, lookupId: splitCode.lookupId,
                wrappedKey, files: [], encryptedClipboardText: encryptedContent,
            });
            setVaultData({ ...splitCode, key, wrappedKey });
            setMode("live");
            setLastSynced(new Date());
            play("success");

            // Save clipboard session to browser history
            addRecord({
                type: "clipboard",
                action: "sent",
                accessCode: splitCode.fullCode,
                fileNames: [],
                fileCount: 0,
                totalSize: new TextEncoder().encode(content).byteLength,
                hasClipboard: true,
                clipboardPreview: content.trim().slice(0, 80),
                createdAt: Date.now(),
                expiresAt: Date.now() + expiresIn[0] * 3600000,
                maxDownloads: 100,
                downloadCount: 0,
            });

            toast({
                title: "Live link active",
                description: `Share PIN ${splitCode.fullCode.slice(0, 3)}-${splitCode.fullCode.slice(3)}`,
                className: "bg-emerald-950 border-emerald-500/50 text-emerald-200",
            });
        } catch (error) {
            console.error(error);
            toast({ variant: "destructive", title: "Failed", description: "Could not establish secure link." });
        } finally {
            setIsCreating(false);
        }
    };

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setJustCopied(true);
        setTimeout(() => setJustCopied(false), 2000);
        toast({ title: "Copied!" });
    };

    const terminateSession = () => {
        setMode("draft");
        setVaultData(null);
        setContent("");
        play("off");
        toast({ title: "Session ended", description: "Keys purged locally." });
    };

    const syncStatus = mode === "draft" ? "idle" : isSyncing || isCreating ? "syncing" : "live";
    const pinDisplay = vaultData
        ? `${vaultData.fullCode.slice(0, 3)}-${vaultData.fullCode.slice(3)}`
        : null;

    return (
        <div className="min-h-screen bg-[#1C1C1E] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30">
            {/* ambient glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/4 rounded-full blur-[130px]" />
            </div>

            {/* ── HEADER ── */}
            <header className={`sticky top-0 z-30 transition-all duration-500 border-b ${mode === "live"
                ? "bg-[#1C1C1E]/90 border-emerald-500/25 backdrop-blur-xl"
                : "bg-[#1C1C1E]/80 border-white/5 backdrop-blur-xl"
                }`}>
                <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-3">

                    {/* Back + brand */}
                    <Link href="/">
                        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                            <div className="hidden sm:flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                                </div>
                                <span className="text-sm font-bold tracking-tight font-mono">
                                    VAULT<span className="text-emerald-400">BRIDGE</span>
                                </span>
                            </div>
                            <span className="sm:hidden text-sm font-semibold">Back</span>
                        </button>
                    </Link>

                    {/* Center status */}
                    <div className="flex-1 flex justify-center">
                        <PulseIndicator status={syncStatus} />
                    </div>

                    {/* Right controls */}
                    <AnimatePresence mode="wait">
                        {mode === "live" && vaultData ? (
                            <motion.div
                                key="live-controls"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center gap-2"
                            >
                                {/* PIN copy button */}
                                <button
                                    onClick={() => copyToClipboard(vaultData.fullCode)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:border-emerald-500/40 transition-all group"
                                >
                                    <span className="font-mono font-bold text-sm text-white tracking-widest">{pinDisplay}</span>
                                    {justCopied
                                        ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                        : <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                    }
                                </button>

                                {/* QR */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size="icon" variant="ghost" className="w-8 h-8 text-zinc-400 hover:text-white hover:bg-zinc-800">
                                            <QrCode className="w-4 h-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-xs bg-[#1C1C1E] border-zinc-800 text-zinc-100 rounded-2xl p-6">
                                        <DialogHeader>
                                            <DialogTitle className="text-center">Scan to Connect</DialogTitle>
                                            <DialogDescription className="text-center text-zinc-500 text-sm">
                                                Scan with your phone camera to open this clipboard instantly.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex justify-center p-4 bg-white rounded-xl mt-2">
                                            <QRCodeSVG value={`${window.location.origin}/access#code=${vaultData.fullCode}`} size={160} />
                                        </div>
                                        <p className="text-center text-sm font-mono font-bold text-emerald-400 tracking-widest mt-3">
                                            {pinDisplay}
                                        </p>
                                    </DialogContent>
                                </Dialog>

                                {/* End session */}
                                <Button
                                    size="sm" variant="ghost"
                                    onClick={terminateSession}
                                    className="h-8 px-2.5 text-red-400/70 hover:text-red-300 hover:bg-red-950/30"
                                    title="End session"
                                >
                                    <Power className="w-3.5 h-3.5" />
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div key="settings-toggle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <Button
                                    size="sm" variant="ghost"
                                    onClick={() => setShowSettings(s => !s)}
                                    className={`h-8 px-3 text-xs font-medium transition-colors ${showSettings ? "text-emerald-400 bg-emerald-500/10" : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                >
                                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                                    {formatExpiry(expiresIn[0])}
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            {/* ── BODY ── */}
            <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 pb-4 pt-3 gap-3">

                {/* Title — draft mode only */}
                <AnimatePresence>
                    {mode === "draft" && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center justify-between"
                        >
                            <div>
                                <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Encrypted Clipboard</h1>
                                <p className="text-xs text-zinc-500 mt-0.5">Paste text → share PIN → syncs everywhere</p>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-600">
                                <Lock className="w-3 h-3" /> AES-256
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Settings drawer */}
                <AnimatePresence>
                    {showSettings && mode === "draft" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-emerald-400" /> Auto-destruct
                                    </span>
                                    <span className="text-sm font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-lg">
                                        {formatExpiry(expiresIn[0])}
                                    </span>
                                </div>
                                <Slider value={expiresIn} onValueChange={setExpiresIn} max={24} step={1} min={1} className="py-1" />
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { icon: Shield, label: "AES-256" },
                                        { icon: Globe, label: "Zero-Knowledge" },
                                        { icon: Eye, label: "E2E Encrypted" },
                                    ].map(({ icon: Icon, label }) => (
                                        <div key={label} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider uppercase border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                                            <Icon className="w-3 h-3" /> {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notes card */}
                <motion.div
                    layout
                    className={`flex-1 flex flex-col rounded-2xl border overflow-hidden transition-all duration-500 ${mode === "live"
                        ? "border-emerald-500/30 bg-zinc-900/50 shadow-[0_0_40px_rgba(16,185,129,0.04)]"
                        : "border-zinc-800/60 bg-zinc-900/50"
                        }`}
                    style={{ minHeight: "calc(100vh - 260px)" }}
                >
                    {/* Card toolbar */}
                    <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/[0.04] bg-black/10">
                        <div>
                            {mode === "live" && lastSynced && (
                                <span className="text-[10px] font-mono text-zinc-600">{lastSynced.toLocaleTimeString()}</span>
                            )}
                        </div>
                        <div className="flex items-center gap-0.5">
                            {content.length > 0 && (
                                <span className="text-[10px] font-mono text-zinc-600 mr-1.5">{content.length.toLocaleString()} ch</span>
                            )}
                            <Button
                                size="sm" variant="ghost"
                                className="h-7 w-7 p-0 hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300"
                                onClick={() => setShowContent(v => !v)}
                            >
                                {showContent ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                            </Button>
                            <Button
                                size="sm" variant="ghost"
                                className="h-7 w-7 p-0 hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300"
                                onClick={() => copyToClipboard(content)}
                                disabled={!content}
                            >
                                <Copy className="w-3.5 h-3.5" />
                            </Button>
                            {content && mode === "draft" && (
                                <Button
                                    size="sm" variant="ghost"
                                    className="h-7 w-7 p-0 hover:bg-red-500/10 text-zinc-600 hover:text-red-400"
                                    onClick={() => setContent("")}
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Text area */}
                    <div className="relative flex-1">
                        <Textarea
                            className={`absolute inset-0 w-full h-full bg-transparent border-0 resize-none px-5 py-4 text-[15px] leading-relaxed focus-visible:ring-0 placeholder:text-zinc-700 custom-scrollbar ${!showContent ? "text-security-disc" : "text-zinc-200"
                                }`}
                            style={!showContent ? { WebkitTextSecurity: "disc" } as any : undefined}
                            placeholder={mode === "draft"
                                ? "Paste or type anything here…"
                                : "Typing syncs to all connected devices in real-time…"
                            }
                            value={content}
                            onChange={(e) => handleContentChange(e.target.value)}
                            spellCheck={false}
                            autoFocus
                        />
                        {!content && mode === "draft" && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                                    <Terminal className="w-8 h-8 text-emerald-500/60" />
                                </div>
                                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Ready for input</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Action area */}
                <AnimatePresence mode="wait">
                    {mode === "draft" ? (
                        <motion.div key="go-live" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
                            <Button
                                onClick={handleGoLive}
                                disabled={!content.trim() || isCreating}
                                className="w-full text-base font-bold rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/20"
                                style={{ height: "52px" }}
                            >
                                {isCreating ? (
                                    <><RefreshCw className="w-4 h-4 animate-spin mr-2" />Creating secure link…</>
                                ) : (
                                    <><Wifi className="w-4 h-4 mr-2" />Go Live &amp; Share</>
                                )}
                            </Button>
                            <p className="text-center text-[11px] text-zinc-600 mt-2 font-mono">
                                <Lock className="w-2.5 h-2.5 inline mr-1" />
                                End-to-end encrypted · {formatExpiry(expiresIn[0])} expiry · No logs
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div key="live-status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="space-y-3">
                            <div className="bg-zinc-900/60 border border-emerald-500/20 rounded-2xl p-4">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">Share this PIN to connect</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl font-mono font-black text-white tracking-widest drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                                                {pinDisplay}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(vaultData!.fullCode)}
                                                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                                            >
                                                {justCopied
                                                    ? <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                    : <Copy className="w-4 h-4 text-zinc-400" />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-lg">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                                        </div>
                                        {lastSynced && (
                                            <p className="text-[10px] text-zinc-600 font-mono">{lastSynced.toLocaleTimeString()}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-[11px] text-zinc-600 font-mono">
                                <Lock className="w-2.5 h-2.5 inline mr-1" />
                                Syncing every 3s · Expires in {formatExpiry(expiresIn[0])} · Zero-knowledge
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
