import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lock, Copy, RefreshCw, Power,
    Globe, Shield, Eye, EyeOff, Wifi, QrCode,
    Trash2, CheckCircle2, Terminal, Clock,
    Activity, Binary, ShieldCheck, Zap, Smartphone,
    Network, Layers, Cpu, ArrowLeft, ArrowRight
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

const formatExpiry = (hours: number) => {
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const rem = hours % 24;
    return rem === 0 ? `${days}d` : `${days}d ${rem}h`;
};

export default function UniversalClipboard() {
    const { toast } = useToast();
    const { play } = useSounds();
    const { addRecord } = useVaultHistory();
    const [, setLocation] = useLocation();

    const [mode, setMode] = useState<"draft" | "live">("draft");
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [justCopied, setJustCopied] = useState(false);
    const [expiresIn, setExpiresIn] = useState([1]);
    const [showSettings, setShowSettings] = useState(false);

    const [vaultData, setVaultData] = useState<{
        pin: string; lookupId: string; fullCode: string;
        key: CryptoKey; wrappedKey: string;
    } | null>(null);

    const [lastSynced, setLastSynced] = useState<Date | null>(null);
    const [isSyncing, setIsSyncing] = useState(false);

    const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isTypingRef = useRef(false);
    const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
    const contentRef = useRef(content);
    contentRef.current = content;

    const createVault = useCreateVault();
    const updateVault = useUpdateClipboard();
    const { data: remoteData } = useClipboardSync(
        vaultData?.lookupId ?? "",
        mode === "live" && !!vaultData?.lookupId
    );

    useEffect(() => {
        if (mode !== "live" || !remoteData?.encryptedClipboardText || !vaultData) return;
        if (isTypingRef.current) return;

        const decrypt = async () => {
            try {
                const decryptedText = await decryptClipboardText(
                    remoteData.encryptedClipboardText!, vaultData.key
                );
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
    }, [remoteData, mode, vaultData, play]);

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
        if (!content.trim()) return;
        setIsCreating(true);
        play("click");
        try {
            const key = await generateKey();
            const splitCode = generateSplitCode();
            const { wrappedKey, salt } = await wrapFileKey(key, splitCode.pin);
            const encryptedContent = await encryptClipboardText(content, key);
            const encryptedMetadata = await encryptMetadata([], key);
            await createVault.mutateAsync({
                expiresIn: expiresIn[0], maxDownloads: 100,
                encryptedMetadata, lookupId: splitCode.lookupId,
                wrappedKey, pinSalt: salt, files: [], encryptedClipboardText: encryptedContent,
            });
            setVaultData({ ...splitCode, key, wrappedKey });
            setMode("live");
            setLastSynced(new Date());
            play("success");

            addRecord({
                type: "clipboard", action: "sent", accessCode: splitCode.fullCode,
                fileNames: [], fileCount: 0, totalSize: new TextEncoder().encode(content).byteLength,
                hasClipboard: true, clipboardPreview: content.trim().slice(0, 80),
                createdAt: Date.now(), expiresAt: Date.now() + expiresIn[0] * 3600000,
                maxDownloads: 100, downloadCount: 0,
            });

            toast({ title: "LIVE_BUFFER_ESTABLISHED", description: `Access Key: ${splitCode.fullCode}` });
        } catch (error) {
            toast({ variant: "destructive", title: "FAILURE", description: "Encryption protocol failed." });
        } finally {
            setIsCreating(false);
        }
    };

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setJustCopied(true);
        setTimeout(() => setJustCopied(false), 2000);
        toast({ title: "COPIED" });
    };

    const pinDisplay = vaultData ? `${vaultData.fullCode.slice(0, 3)}·${vaultData.fullCode.slice(3)}` : null;

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background effects */}
            <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="fixed inset-0 bg-primary/5 blur-[150px] pointer-events-none" />
            <div className="scanline pointer-events-none opacity-10" />

            {/* Header */}
            <header className="relative w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-8 h-8 bg-zinc-950 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
                                <Terminal className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-base font-black font-mono tracking-widest text-white uppercase italic">VAULT<span className="text-primary">BRIDGE</span></h1>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        {mode === "live" ? (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest animate-pulse">
                                <Activity className="w-3 h-3" /> LIVE_SYNC_ACTIVE
                            </div>
                        ) : (
                           <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)} className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-widest gap-2">
                               <Clock className="w-3.5 h-3.5" /> {formatExpiry(expiresIn[0])}
                           </Button>
                        )}
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white px-4 text-[10px] font-black tracking-widest gap-2">
                                <ArrowLeft className="w-4 h-4" /> RETURN
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="relative z-10 flex-1 w-full max-w-3xl mx-auto px-4 pt-12 sm:pt-16 pb-20 flex flex-col">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                   <div className="flex items-center justify-between mb-2">
                       <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">Universal <span className="text-primary">Clipboard</span></h2>
                       <div className="flex items-center gap-3">
                          <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{content.length} BYTES</span>
                          <div className={`w-2 h-2 rounded-full ${mode === 'live' ? 'bg-primary animate-pulse' : 'bg-zinc-800'}`} />
                       </div>
                   </div>
                   <p className="text-zinc-500 text-xs font-medium">Zero-knowledge secure buffer. Real-time cryptographic synchronization.</p>
                </motion.div>

                <AnimatePresence>
                    {showSettings && mode === "draft" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mb-6 overflow-hidden">
                            <div className="glass-card bg-white/[0.02] border border-white/5 p-8 space-y-6 shadow-inner">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Buffer Expiration</span>
                                    <span className="text-sm font-mono font-black text-primary px-3 py-1 rounded-lg bg-primary/10 border border-primary/20">{formatExpiry(expiresIn[0])}</span>
                                </div>
                                <div className="px-1 py-4 bg-black/20 rounded-2xl">
                                    <Slider value={expiresIn} onValueChange={setExpiresIn} max={24} step={1} min={1} className="py-2" />
                                </div>
                                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] px-1 text-center">Protocol: Automatic fragmentation after timeout</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex-1 flex flex-col gap-4">
                    <motion.div layout className={`flex-1 glass-card overflow-hidden flex flex-col border-2 transition-colors duration-500 ${mode === 'live' ? 'border-primary/20 bg-primary/5 shadow-[0_0_50px_rgba(16,185,129,0.05)]' : 'border-white/5'}`}>
                        {/* Toolbar */}
                        <div className="px-4 py-3 border-b border-white/5 bg-black/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-primary/50" />
                                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">AES-256 E2EE Buffer</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" onClick={() => setShowContent(!showContent)} className="h-8 w-8 text-zinc-500 hover:text-white">
                                    {showContent ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(content)} className="h-8 w-8 text-zinc-500 hover:text-white">
                                    <Copy className="w-4 h-4" />
                                </Button>
                                {mode === "draft" && content && (
                                    <Button variant="ghost" size="icon" onClick={() => setContent("")} className="h-8 w-8 text-zinc-500 hover:text-red-400">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Text Area */}
                        <div className="flex-1 relative">
                            <Textarea 
                                value={content}
                                onChange={e => handleContentChange(e.target.value)}
                                placeholder={mode === 'draft' ? "Initialize buffer input..." : "Establishing real-time link..."}
                                className={`absolute inset-0 w-full h-full bg-transparent border-0 resize-none p-8 text-lg font-mono leading-relaxed focus-visible:ring-0 placeholder:text-zinc-800 ${!showContent ? "text-security-disc" : "text-zinc-200"}`}
                                style={!showContent ? { WebkitTextSecurity: "disc" } as any : undefined}
                            />
                            {!content && mode === "draft" && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-10">
                                    <Cpu className="w-16 h-16 text-primary mb-4" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Ready for Injection</span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Bottom Action Section */}
                    <AnimatePresence mode="wait">
                        {mode === "draft" ? (
                            <motion.div key="draft-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                <Button 
                                    onClick={handleGoLive} 
                                    disabled={!content.trim() || isCreating} 
                                    className="w-full h-20 rounded-[1.5rem] bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-black uppercase tracking-[0.2em] text-xl shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:brightness-110 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center"
                                >
                                    {isCreating ? <RefreshCw className="w-8 h-8 animate-spin" /> : <>ESTABLISH SECURE LINK <Wifi className="w-6 h-6 ml-4" /></>}
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div key="live-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                                <div className="glass-card p-6 flex items-center justify-between gap-6 border-primary/30 relative overflow-hidden">
                                   <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                   <div className="relative">
                                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-2">Ephemeral Access Code</span>
                                      <div className="text-4xl font-mono font-black text-white tracking-[0.3em] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                         {pinDisplay}
                                      </div>
                                   </div>
                                   <div className="flex gap-2">
                                       <Dialog>
                                           <DialogTrigger asChild>
                                                <Button className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all flex items-center justify-center">
                                                   <QrCode className="w-5 h-5" />
                                                </Button>
                                           </DialogTrigger>
                                           <DialogContent className="bg-zinc-950 border-white/5 text-white max-w-sm rounded-3xl p-8">
                                               <DialogHeader className="mb-6">
                                                   <DialogTitle className="text-center uppercase italic font-black">Secure Link</DialogTitle>
                                                   <DialogDescription className="sr-only">Scan the QR code to access the secure link.</DialogDescription>
                                               </DialogHeader>
                                               <div className="bg-white p-6 rounded-3xl flex justify-center mb-6">
                                                  <QRCodeSVG value={`${window.location.origin}/access#code=${vaultData?.fullCode}`} size={200} />
                                               </div>
                                               <p className="text-center font-mono font-black text-2xl text-primary tracking-[0.3em]">{pinDisplay}</p>
                                           </DialogContent>
                                       </Dialog>
                                        <Button onClick={() => copyToClipboard(vaultData!.fullCode)} className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all flex items-center justify-center">
                                           <Copy className="w-5 h-5" />
                                        </Button>
                                        <Button onClick={() => window.location.reload()} className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-red-500 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 transition-all flex items-center justify-center">
                                           <Power className="w-5 h-5" />
                                        </Button>
                                   </div>
                                </div>
                                <div className="flex items-center justify-between px-2 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                                   <div className="flex items-center gap-2"><Network className="w-3.5 h-3.5" /> P2P SYNC ACTIVE</div>
                                   <div className="flex items-center gap-2">UPDATING EVERY 600MS <RefreshCw className="w-3 h-3 animate-spin" /></div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
