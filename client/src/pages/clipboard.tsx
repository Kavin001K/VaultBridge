import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Zap, Copy, RefreshCw, Share2, Power,
    Globe, Shield, Key, Eye, EyeOff, Wifi, Save,
    Smartphone, QrCode, Trash2, AlertTriangle, Check, ArrowLeft,
    Clock, Type, CheckCircle2, Sparkles, Send, ArrowRight, Terminal, ChevronRight
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault, useClipboardSync, useUpdateClipboard } from "@/hooks/use-vaults";
import { generateKey, generateSplitCode, wrapFileKey, encryptMetadata, encryptClipboardText, decryptClipboardText } from "@/lib/crypto";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

// ─── Constants ───────────────────────────────────────────────────────────────
const MAX_CLIPBOARD_LENGTH = 50000; // 50K chars

const STEPS = [
    { id: 1, label: "Compose", icon: Type },
    { id: 2, label: "Configure", icon: Eye },
] as const;

// --- Components ---

const SecurityBadge = ({ active, icon: Icon, label }: { active: boolean, icon: any, label: string }) => (
    <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-mono transition-all duration-300 ${active ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-zinc-900/50 text-zinc-600 border border-zinc-800/50'}`}>
        <Icon className="w-3 h-3" />
        {label}
    </div>
);

const PulseIndicator = ({ status }: { status: 'idle' | 'syncing' | 'live' }) => {
    const colors = {
        idle: 'bg-zinc-600',
        syncing: 'bg-amber-400',
        live: 'bg-emerald-500'
    };

    return (
        <div className="flex items-center gap-2">
            <div className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colors[status]}`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors[status]}`}></span>
            </div>
            <span className={`text-xs font-mono uppercase ${status === 'syncing' ? 'text-amber-400' : status === 'live' ? 'text-emerald-400' : 'text-zinc-500'}`}>
                {status === 'idle' ? 'Draft Mode' : status === 'syncing' ? 'Syncing...' : 'Live Link Active'}
            </span>
        </div>
    );
};

const formatExpiry = (hours: number) => {
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    if (remainingHours === 0) return `${days}d`;
    return `${days}d ${remainingHours}h`;
};

export default function UniversalClipboard() {
    const { toast } = useToast();
    const { play } = useSounds();

    // --- State ---
    const [step, setStep] = useState(1);
    const [mode, setMode] = useState<'draft' | 'live'>('draft');
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [justCopied, setJustCopied] = useState(false);

    // Config
    const [expiresIn, setExpiresIn] = useState([24]);
    const [burnAfterRead, setBurnAfterRead] = useState(false);

    // Live Data
    const [vaultData, setVaultData] = useState<{
        pin: string;
        lookupId: string;
        fullCode: string;
        key: CryptoKey;
        wrappedKey: string;
    } | null>(null);

    const [lastSynced, setLastSynced] = useState<Date | null>(null);
    const [isSyncing, setIsSyncing] = useState(false);
    const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // --- Hooks ---
    const createVault = useCreateVault();
    const updateVault = useUpdateClipboard();

    // Only fetch sync data if we are in live mode and have a lookup ID
    const { data: remoteData, refetch: refreshRemote } = useClipboardSync(
        vaultData?.lookupId || "",
        mode === 'live' && !!vaultData?.lookupId
    );

    // --- Logic ---

    // 1. Creation Handler
    const handleGoLive = async () => {
        setShowConfirmDialog(false);
        if (!content.trim()) {
            toast({ variant: "destructive", title: "Empty Content", description: "Add some text before going live." });
            return;
        }

        setIsCreating(true);
        play("click");

        try {
            // Crypto Gen
            const key = await generateKey();
            const splitCode = generateSplitCode(); // { lookupId, pin, fullCode }
            const wrappedKey = await wrapFileKey(key, splitCode.pin);

            const encryptedContent = await encryptClipboardText(content, key);
            const encryptedMetadata = await encryptMetadata([], key);

            // Server Mutation
            await createVault.mutateAsync({
                expiresIn: expiresIn[0],
                maxDownloads: 100, // Clipboard allows multiple fetches for sync
                encryptedMetadata,
                lookupId: splitCode.lookupId,
                wrappedKey,
                files: [],
                encryptedClipboardText: encryptedContent,
            });

            // State Transition
            setVaultData({
                ...splitCode,
                key,
                wrappedKey
            });
            setMode('live');
            setLastSynced(new Date());
            play("success");

            toast({
                title: "Live Link Established",
                description: "Secure channel is active. Share the PIN to sync.",
                className: "bg-emerald-950 border-emerald-500 text-emerald-400"
            });

        } catch (error) {
            console.error(error);
            toast({ variant: "destructive", title: "Initialization Failed", description: "Could not establish secure link." });
        } finally {
            setIsCreating(false);
        }
    };

    // 2. Incoming Sync Handler
    useEffect(() => {
        if (mode === 'live' && remoteData?.encryptedClipboardText && vaultData) {
            const decrypt = async () => {
                try {
                    const decryptedText = await decryptClipboardText(remoteData.encryptedClipboardText!, vaultData.key);
                    if (decryptedText !== content) {
                        setContent(decryptedText);
                        setLastSynced(new Date());
                        play("pop"); // Subtle sound on incoming change
                    }
                } catch (e) {
                    console.error("Decryption sync failed", e);
                }
            };
            decrypt();
        }
    }, [remoteData, mode, vaultData]); // Intentionally omitting 'content' to avoid loops

    // 3. Outgoing Sync Handler (Debounced)
    const handleContentChange = (newText: string) => {
        // Enforce max length
        if (newText.length > MAX_CLIPBOARD_LENGTH) {
            newText = newText.substring(0, MAX_CLIPBOARD_LENGTH);
            toast({ variant: "destructive", title: "Character Limit", description: `Maximum ${MAX_CLIPBOARD_LENGTH.toLocaleString()} characters.` });
        }
        setContent(newText);

        if (mode === 'live' && vaultData) {
            setIsSyncing(true);

            // Clear existing timeout
            if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

            // Set new timeout (500ms debounce)
            syncTimeoutRef.current = setTimeout(async () => {
                try {
                    const encrypted = await encryptClipboardText(newText, vaultData.key);
                    await updateVault.mutateAsync({
                        lookupId: vaultData.lookupId,
                        encryptedClipboardText: encrypted,
                        wrappedKey: vaultData.wrappedKey
                    });
                    setLastSynced(new Date());
                    setIsSyncing(false);
                } catch (e) {
                    console.error("Upload failed", e);
                    setIsSyncing(false);
                }
            }, 500);
        }
    };

    // 4. Utility Functions
    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setJustCopied(true);
        setTimeout(() => setJustCopied(false), 2000);
        toast({ title: "Copied to clipboard" });
    };

    const terminateSession = () => {
        setMode('draft');
        setStep(1);
        setVaultData(null);
        setContent("");
        play("off");
        toast({ title: "Session Terminated", description: "Local keys purged." });
    };

    const canProceed = content.trim().length > 0;
    const charPercentage = Math.min((content.length / MAX_CLIPBOARD_LENGTH) * 100, 100);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-hidden flex flex-col">

            {/* Background FX */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/3 rounded-full blur-[120px]" />
            </div>

            {/* ─── HEADER ─── */}
            <motion.header
                layout
                className={`relative z-20 border-b transition-all duration-500 ${mode === 'live' ? 'bg-zinc-950/80 border-emerald-500/30 backdrop-blur-md' : 'bg-transparent border-white/5'}`}
            >
                <div className="container max-w-5xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <div className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${mode === 'live' ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-emerald-500/8 border-emerald-500/20 group-hover:border-emerald-500/40'}`}>
                                    <Terminal className={`w-5 h-5 ${mode === 'live' ? 'text-emerald-400' : 'text-emerald-500/70 group-hover:text-emerald-400'} transition-colors`} />
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="font-bold tracking-tight text-lg group-hover:text-emerald-400 transition-colors">
                                        VAULT<span className={mode === 'live' ? 'text-emerald-400' : 'text-emerald-500/70'}>BRIDGE</span>
                                    </h1>
                                </div>
                            </div>
                        </Link>

                        {/* LIVE CONTROLS */}
                        <AnimatePresence>
                            {mode === 'live' && vaultData && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="flex items-center gap-3 md:gap-6"
                                >
                                    {/* PIN Display */}
                                    <div className="flex flex-col items-end md:items-center">
                                        <span className="text-[10px] text-emerald-500/70 font-mono uppercase tracking-wider mb-0.5">Access PIN</span>
                                        <div
                                            onClick={() => copyToClipboard(vaultData.fullCode)}
                                            className="flex items-center gap-2 cursor-pointer group"
                                        >
                                            <span className="text-2xl md:text-3xl font-mono font-black text-white tracking-widest drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:text-emerald-400 transition-colors">
                                                {vaultData.fullCode.slice(0, 3)}-{vaultData.fullCode.slice(3)}
                                            </span>
                                            <AnimatePresence mode="wait">
                                                {justCopied ? (
                                                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                        <Copy className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 transition-all" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-8 w-px bg-zinc-800 hidden md:block" />

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button size="icon" variant="ghost" className="hover:bg-zinc-800 text-zinc-400 hover:text-white">
                                                    <QrCode className="w-5 h-5" />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-sm bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl">
                                                {/* QR Header */}
                                                <div className="relative h-16 bg-gradient-to-r from-emerald-950/60 via-teal-950/40 to-emerald-950/60 flex items-center justify-center overflow-hidden">
                                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent)]" />
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                        className="w-10 h-10 bg-emerald-500/15 rounded-xl border border-emerald-500/25 flex items-center justify-center relative z-10"
                                                    >
                                                        <QrCode className="w-5 h-5 text-emerald-400" />
                                                    </motion.div>
                                                </div>
                                                <div className="px-6 pb-6 pt-4">
                                                    <DialogHeader className="mb-4">
                                                        <DialogTitle className="text-center text-lg font-bold">Scan to Connect</DialogTitle>
                                                        <DialogDescription className="text-center text-sm text-zinc-500">
                                                            Scan with your phone camera to open this clipboard instantly.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex justify-center p-5 bg-white rounded-xl mx-auto my-2">
                                                        <QRCodeSVG value={`${window.location.origin}/access#code=${vaultData.fullCode}`} size={180} />
                                                    </div>
                                                    <div className="mt-4 flex items-center justify-center gap-2">
                                                        <span className="text-xs font-mono text-zinc-500">PIN:</span>
                                                        <span className="text-sm font-mono font-bold text-emerald-400 tracking-widest">
                                                            {vaultData.fullCode.slice(0, 3)}-{vaultData.fullCode.slice(3)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="border-red-900/30 text-red-400 hover:bg-red-950/30 hover:text-red-300 hover:border-red-500/50"
                                            onClick={terminateSession}
                                        >
                                            <Power className="w-4 h-4 mr-2" />
                                            End
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Link href="/">
                            <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Back</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* ─── MAIN CONTENT ─── */}
            <main className="flex-1 relative z-10 container max-w-3xl mx-auto px-4 py-8 flex flex-col">

                {/* Title Area (Draft Mode Only) */}
                {mode === 'draft' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            Encrypted Text Bridge
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-200 via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                            Universal Clipboard
                        </h2>
                        <p className="text-zinc-400 text-sm max-w-md mx-auto">
                            Type or paste text, configure settings, and create a live encrypted link — syncs in real-time across devices.
                        </p>
                    </motion.div>
                )}

                {/* Step Indicators (Draft Mode Only) */}
                {mode === 'draft' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        {STEPS.map((s, i) => {
                            const isCompleted = step > s.id;
                            const isCurrent = step === s.id;
                            const StepIcon = s.icon;

                            return (
                                <div key={s.id} className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            if (isCompleted) setStep(s.id);
                                        }}
                                        disabled={!isCompleted && !isCurrent}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${isCompleted
                                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20"
                                            : isCurrent
                                                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/25"
                                                : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 cursor-not-allowed"
                                            }`}
                                    >
                                        {isCompleted ? <Check className="w-3.5 h-3.5" /> : <StepIcon className="w-3.5 h-3.5" />}
                                        {s.label}
                                    </button>
                                    {i < STEPS.length - 1 && (
                                        <ChevronRight className={`w-4 h-4 ${step > s.id ? "text-emerald-500/50" : "text-zinc-700"}`} />
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>
                )}

                {/* Main Card */}
                <motion.div
                    layout
                    className={`flex-1 flex flex-col relative rounded-3xl border overflow-hidden transition-all duration-700 ${mode === 'live' ? 'bg-zinc-900/40 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.05)]' : 'bg-zinc-900/50 border-zinc-800/50 shadow-2xl backdrop-blur-xl'}`}
                >
                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/20">
                        <div className="flex items-center gap-4">
                            <PulseIndicator status={mode === 'draft' ? 'idle' : (isSyncing || isCreating) ? 'syncing' : 'live'} />

                            {mode === 'live' && (
                                <span className="text-xs font-mono text-zinc-600 hidden sm:block">
                                    Last Sync: {lastSynced ? lastSynced.toLocaleTimeString() : 'Just now'}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-1">
                            {/* Character Counter */}
                            {content.length > 0 && (
                                <span className={`text-[10px] font-mono mr-2 ${charPercentage > 90 ? 'text-red-400' : charPercentage > 70 ? 'text-amber-400' : 'text-zinc-600'}`}>
                                    {content.length.toLocaleString()}/{MAX_CLIPBOARD_LENGTH.toLocaleString()}
                                </span>
                            )}
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 hover:bg-zinc-800"
                                onClick={() => setShowContent(!showContent)}
                                title="Toggle Visibility"
                            >
                                {showContent ? <Eye className="w-4 h-4 text-zinc-400" /> : <EyeOff className="w-4 h-4 text-zinc-400" />}
                            </Button>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 hover:bg-zinc-800"
                                onClick={() => copyToClipboard(content)}
                                title="Copy Content"
                                disabled={!content}
                            >
                                <Copy className="w-4 h-4 text-zinc-400" />
                            </Button>
                            {content && mode === 'draft' && (
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-8 w-8 p-0 hover:bg-red-500/10"
                                    onClick={() => setContent("")}
                                    title="Clear Content"
                                >
                                    <Trash2 className="w-4 h-4 text-zinc-500 hover:text-red-400" />
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="relative flex-1 group">
                        <Textarea
                            className={`w-full h-full min-h-[350px] bg-transparent border-0 resize-none p-6 text-base md:text-lg font-mono leading-relaxed focus-visible:ring-0 transition-colors placeholder:text-zinc-700 ${!showContent ? 'text-security-disc' : 'text-zinc-200'}`}
                            style={!showContent ? { WebkitTextSecurity: 'disc' } as any : {}}
                            placeholder={mode === 'draft' ? "Paste or type your sensitive text here..." : "Typing syncs instantly across connected devices..."}
                            value={content}
                            onChange={(e) => handleContentChange(e.target.value)}
                            spellCheck={false}
                        />

                        {/* Empty State (Draft Mode) */}
                        {mode === 'draft' && !content && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-30">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative mb-6"
                                >
                                    <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full" />
                                    <div className="w-24 h-24 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative z-10">
                                        <Terminal className="w-12 h-12 text-emerald-500/50" />
                                    </div>
                                </motion.div>
                                <p className="text-sm font-mono text-emerald-500/70 uppercase tracking-[0.15em] font-bold">
                                    Ready for Input
                                </p>
                                <p className="text-xs text-zinc-600 mt-2 font-mono">
                                    Paste sensitive data to get started
                                </p>
                            </div>
                        )}

                        {/* Char Progress Bar */}
                        {content.length > 0 && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-800/50">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${charPercentage}%` }}
                                    className={`h-full transition-colors ${charPercentage > 90 ? 'bg-red-500' : charPercentage > 70 ? 'bg-amber-500' : 'bg-emerald-500/30'}`}
                                />
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* ─── NAVIGATION / ACTION AREA ─── */}
                {mode === 'draft' && (
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="nav-step-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-6"
                            >
                                <Button
                                    onClick={() => setStep(2)}
                                    disabled={!canProceed}
                                    className="w-full h-14 text-base font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Continue
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="nav-step-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-6 space-y-5"
                            >
                                {/* Settings Card */}
                                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-5 space-y-5 backdrop-blur-xl">
                                    {/* Content Summary */}
                                    <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Type className="w-3.5 h-3.5 text-emerald-400" />
                                            <span className="text-xs font-semibold text-zinc-300">Content Preview</span>
                                            <span className="text-[10px] font-mono text-zinc-600 ml-auto">{content.length.toLocaleString()} chars</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 truncate mt-1 font-mono">
                                            {showContent ? content.substring(0, 80) + (content.length > 80 ? '...' : '') : '••••••••••••••••••••'}
                                        </p>
                                    </div>

                                    {/* Settings Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Expiry */}
                                        <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-4 space-y-3">
                                            <div className="flex justify-between items-center">
                                                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-emerald-400" />
                                                    Auto-Destruct
                                                </label>
                                                <span className="text-sm font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-lg">
                                                    {formatExpiry(expiresIn[0])}
                                                </span>
                                            </div>
                                            <Slider
                                                value={expiresIn}
                                                onValueChange={setExpiresIn}
                                                max={24}
                                                step={1}
                                                min={1}
                                                className="py-2"
                                            />
                                            <p className="text-[10px] text-zinc-600 leading-relaxed">
                                                Clipboard & encrypted data will be permanently erased after this time.
                                            </p>
                                        </div>

                                        {/* Security Info */}
                                        <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-4 space-y-3">
                                            <span className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-emerald-400" />
                                                Security Features
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                <SecurityBadge active={true} icon={Shield} label="AES-256" />
                                                <SecurityBadge active={true} icon={Globe} label="Zero-Knowledge" />
                                                <SecurityBadge active={expiresIn[0] <= 1} icon={Zap} label="Urgent" />
                                            </div>
                                            <p className="text-[10px] text-zinc-600 leading-relaxed">
                                                End-to-end encrypted. We never see your content, keys, or data.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <Button
                                        onClick={() => setStep(1)}
                                        variant="outline"
                                        className="flex-1 h-14 text-base border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back
                                    </Button>
                                    <Button
                                        className="flex-1 h-14 text-base font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                                        onClick={() => setShowConfirmDialog(true)}
                                        disabled={isCreating}
                                    >
                                        {isCreating ? (
                                            <RefreshCw className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                <Wifi className="w-4 h-4 mr-2" />
                                                Go Live
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

                {/* Info Footer */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-zinc-600 font-mono flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3" />
                        End-to-End Encrypted • Ephemeral Storage • No Logs
                    </p>
                </div>
            </main>

            {/* ─── Confirmation Dialog ─── */}
            <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl">
                    {/* Header */}
                    <div className="relative h-20 bg-gradient-to-r from-emerald-950/60 via-teal-950/40 to-emerald-950/60 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent)]" />
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="w-12 h-12 bg-emerald-500/15 rounded-xl border border-emerald-500/25 flex items-center justify-center relative z-10"
                        >
                            <Wifi className="w-6 h-6 text-emerald-400" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 pt-4">
                        <DialogHeader className="mb-4">
                            <DialogTitle className="text-lg font-bold text-center">Initialize Live Link?</DialogTitle>
                            <DialogDescription className="text-center text-zinc-500 text-sm">
                                Review before creating your encrypted session
                            </DialogDescription>
                        </DialogHeader>

                        {/* Summary */}
                        <div className="space-y-3 mb-5">
                            {/* Content Preview */}
                            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Type className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Content</span>
                                    <span className="text-[10px] font-mono text-zinc-600 ml-auto">{content.length.toLocaleString()} chars</span>
                                </div>
                                <p className="text-xs text-zinc-500 font-mono leading-relaxed line-clamp-2">
                                    {showContent ? content.substring(0, 120) + (content.length > 120 ? '...' : '') : '••••••••••••••••••••'}
                                </p>
                            </div>

                            {/* Settings */}
                            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4 space-y-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Session Settings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3 text-emerald-400" />
                                    <span className="text-xs text-zinc-400">Auto-Destruct:</span>
                                    <span className="text-xs font-mono text-emerald-400">{formatExpiry(expiresIn[0])}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Wifi className="w-3 h-3 text-emerald-400" />
                                    <span className="text-xs text-zinc-400">Mode:</span>
                                    <span className="text-xs font-mono text-emerald-400">Real-time sync</span>
                                </div>
                            </div>
                        </div>

                        {/* What happens next */}
                        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 mb-5 text-left">
                            <p className="text-[11px] text-emerald-400/80 font-medium mb-1 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" />
                                What happens next
                            </p>
                            <p className="text-[11px] text-zinc-500 leading-relaxed">
                                A 6-digit PIN will be generated. Share it with anyone to give them real-time access to this clipboard. All data is encrypted end-to-end.
                            </p>
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
                                onClick={handleGoLive}
                                disabled={isCreating}
                                className="flex-1 h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20"
                            >
                                {isCreating ? (
                                    <RefreshCw className="w-4 h-4 animate-spin" />
                                ) : (
                                    <>
                                        <Wifi className="w-4 h-4 mr-2" />
                                        Go Live
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
