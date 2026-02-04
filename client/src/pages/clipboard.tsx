import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Zap, Copy, RefreshCw, Share2, Power,
    Globe, Shield, Key, Eye, EyeOff, Wifi, Save,
    Smartphone, QrCode, Trash2, AlertTriangle, Check, ArrowLeft
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

// --- Components ---

const SecurityBadge = ({ active, icon: Icon, label }: { active: boolean, icon: any, label: string }) => (
    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-mono transition-colors ${active ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-zinc-900 text-zinc-600 border border-zinc-800'}`}>
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
            <span className={`text-xs font-mono uppercase ${status === 'syncing' ? 'text-amber-400' : 'text-zinc-500'}`}>
                {status === 'idle' ? 'Offline' : status === 'syncing' ? 'Syncing...' : 'Live Link Active'}
            </span>
        </div>
    );
};

export default function UniversalClipboard() {
    const { toast } = useToast();
    const { play } = useSounds();

    // --- State ---
    const [mode, setMode] = useState<'draft' | 'live'>('draft');
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(true);
    const [isCreating, setIsCreating] = useState(false);

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
        if (!content.trim()) {
            toast({ variant: "destructive", title: "Empty Protocol", description: "Input data before initializing uplink." });
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
                title: "Uplink Established",
                description: "Secure channel is live. Share PIN to sync.",
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
    }, [remoteData, mode, vaultData]); // Intentionally omitting 'content' to avoid loops, only trigger on remote data change

    // 3. Outgoing Sync Handler (Debounced)
    const handleContentChange = (newText: string) => {
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
        toast({ title: "Copied to local clipboard" });
    };

    const terminateSession = () => {
        // In a real app we might send a DELETE request here
        setMode('draft');
        setVaultData(null);
        setContent("");
        play("off");
        toast({ title: "Session Terminated", description: "Local keys purged." });
    };

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-hidden flex flex-col">

            {/* Background FX */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* --- TOP NAV / LIVE HEADER --- */}
            <motion.header
                layout
                className={`relative z-20 border-b transition-all duration-500 ${mode === 'live' ? 'bg-zinc-950/80 border-emerald-500/30 backdrop-blur-md' : 'bg-transparent border-transparent pt-6'}`}
            >
                <div className="container max-w-5xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo / Title Area */}

                        <Link href="/">
                            <div className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${mode === 'live' ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-zinc-900 border-zinc-800'}`}>
                                    <Zap className={`w-5 h-5 ${mode === 'live' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="font-bold tracking-tight text-lg">Universal<span className={mode === 'live' ? 'text-emerald-400' : 'text-zinc-400'}>Clipboard</span></h1>
                                    <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                                        {mode === 'live' ? 'Quantum Sync Active' : 'Secure Text Bridge'}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* LIVE CONTROLS (Only visible when Live) */}
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
                                            <Copy className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all" />
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
                                            <DialogContent className="bg-zinc-950 border-zinc-800">
                                                <DialogHeader>
                                                    <DialogTitle className="text-center">Scan to Connect</DialogTitle>
                                                </DialogHeader>
                                                <div className="flex justify-center p-6 bg-white rounded-xl mx-auto my-4">
                                                    <QRCodeSVG value={`${window.location.origin}/access#code=${vaultData.fullCode}`} size={200} />
                                                </div>
                                                <p className="text-center text-sm text-zinc-500">
                                                    Scan with mobile camera to open this clipboard instantly.
                                                </p>
                                            </DialogContent>
                                        </Dialog>

                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="border-red-900/30 text-red-400 hover:bg-red-950/30 hover:text-red-300 hover:border-red-500/50"
                                            onClick={terminateSession}
                                        >
                                            <Power className="w-4 h-4 mr-2" />
                                            Terminate
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Link href="/">
                            <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Return</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.header>


            {/* --- MAIN EDITOR --- */}
            <main className="flex-1 relative z-10 container max-w-5xl mx-auto px-4 py-8 flex flex-col">

                <motion.div
                    layout
                    className={`flex-1 flex flex-col relative rounded-3xl border overflow-hidden transition-all duration-700 ${mode === 'live' ? 'bg-zinc-900/40 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.05)]' : 'bg-zinc-900/80 border-zinc-800 shadow-2xl'}`}
                >
                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/20">
                        <div className="flex items-center gap-4">
                            <PulseIndicator status={mode === 'draft' ? 'idle' : (isSyncing || isCreating) ? 'syncing' : 'live'} />

                            {/* Metadata / Timestamp */}
                            {mode === 'live' && (
                                <span className="text-xs font-mono text-zinc-600 hidden sm:block">
                                    Last Sync: {lastSynced ? lastSynced.toLocaleTimeString() : 'Just now'}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => setShowContent(!showContent)}
                                title="Toggle Visibility"
                            >
                                {showContent ? <Eye className="w-4 h-4 text-zinc-400" /> : <EyeOff className="w-4 h-4 text-zinc-400" />}
                            </Button>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => copyToClipboard(content)}
                                title="Copy Content"
                            >
                                <Copy className="w-4 h-4 text-zinc-400" />
                            </Button>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="relative flex-1 group">
                        <Textarea
                            className={`w-full h-full min-h-[400px] bg-transparent border-0 resize-none p-6 text-base md:text-lg font-mono leading-relaxed focus-visible:ring-0 transition-colors ${!showContent ? 'text-security-disc' : 'text-zinc-200'}`}
                            style={!showContent ? { WebkitTextSecurity: 'disc' } as any : {}}
                            placeholder={mode === 'draft' ? "Initialize secure clipboard session..." : "Typing syncs instantly..."}
                            value={content}
                            onChange={(e) => handleContentChange(e.target.value)}
                            spellCheck={false}
                        />

                        {/* Empty State Prompt (Draft Mode) */}
                        {mode === 'draft' && !content && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative mb-6"
                                >
                                    <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full" />
                                    <img
                                        src="/vault-icon.png"
                                        alt="Secure Vault"
                                        className="w-48 h-48 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                                    />
                                </motion.div>
                                <p className="text-sm font-mono text-emerald-500/80 uppercase tracking-[0.2em] font-bold">
                                    Secure Terminal Ready
                                </p>
                                <p className="text-xs text-zinc-600 mt-2 font-mono">
                                    Paste sensitive data to initialize uplink
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer / Action Area (Draft Mode Only) */}
                    <AnimatePresence>
                        {mode === 'draft' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t border-white/5 bg-zinc-950/50 p-4 md:p-6"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Security Config */}
                                    <div className="space-y-4">
                                        <div className="flex gap-2">
                                            <SecurityBadge active={true} icon={Shield} label="AES-256-GCM" />
                                            <SecurityBadge active={true} icon={Globe} label="Zero-Knowledge" />
                                            <SecurityBadge active={expiresIn[0] <= 1} icon={Zap} label="High-Urgency" />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-mono text-zinc-500 uppercase">
                                                <span>Auto-Destruct Timer</span>
                                                <span className="text-emerald-400">{expiresIn[0]} Hours</span>
                                            </div>
                                            <Slider
                                                value={expiresIn}
                                                onValueChange={setExpiresIn}
                                                max={24}
                                                step={1}
                                                min={1}
                                                className="py-2"
                                            />
                                        </div>
                                    </div>

                                    {/* Go Live Button */}
                                    <Button
                                        size="lg"
                                        className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform hover:scale-[1.02]"
                                        onClick={handleGoLive}
                                        disabled={isCreating}
                                    >
                                        {isCreating ? (
                                            <RefreshCw className="w-6 h-6 animate-spin" />
                                        ) : (
                                            <>
                                                <Wifi className="w-5 h-5 mr-3" />
                                                Initialize Live Link
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Info Footer */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-zinc-600 font-mono flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3" />
                        End-to-End Encrypted • Ephemeral Storage • No Logs
                    </p>
                </div>
            </main>
        </div>
    );
}
