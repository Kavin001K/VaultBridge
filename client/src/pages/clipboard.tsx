import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clipboard, Lock, Shield, Zap, Copy, ArrowRight, ArrowLeft,
    CheckCircle2, AlertCircle, RefreshCw, Smartphone, Globe, Laptop,
    Eye, EyeOff, Timer, Fingerprint, KeyRound, ShieldCheck, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault } from "@/hooks/use-vaults";
import { generateKey, generateSplitCode, wrapFileKey, encryptMetadata, encryptClipboardText } from "@/lib/crypto";

// Security strength indicator
function SecurityMeter({ strength }: { strength: number }) {
    const levels = [
        { min: 0, label: "Weak", color: "bg-red-500" },
        { min: 30, label: "Fair", color: "bg-amber-500" },
        { min: 60, label: "Strong", color: "bg-emerald-500" },
        { min: 90, label: "Military", color: "bg-cyan-500" },
    ];
    const current = levels.filter(l => strength >= l.min).pop()!;

    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${current.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${strength}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>
            <span className={`text-xs font-mono uppercase tracking-wider ${current.color.replace('bg-', 'text-')}`}>
                {current.label}
            </span>
        </div>
    );
}

// Animated security badge
function SecurityBadge({ icon: Icon, label, active }: { icon: any; label: string; active: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: active ? 1 : 0.4, scale: active ? 1 : 0.95 }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${active
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-zinc-800 bg-zinc-900/50 text-zinc-500'
                }`}
        >
            <Icon className="w-4 h-4" />
            <span className="text-xs font-medium">{label}</span>
            {active && <CheckCircle2 className="w-3 h-3 ml-auto" />}
        </motion.div>
    );
}

export default function ClipboardPage() {
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const { play } = useSounds();
    const createVault = useCreateVault();

    // Form state
    const [clipboardText, setClipboardText] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [expiresIn, setExpiresIn] = useState([24]);
    const [maxDownloads, setMaxDownloads] = useState([1]); // Default to single use for security
    const [burnAfterRead, setBurnAfterRead] = useState(true);

    // Success state
    const [createdData, setCreatedData] = useState<{
        code: string;
        lookupId: string;
        wrappedKey: string;
        key: CryptoKey;
    } | null>(null);

    // Calculate security strength
    const calculateSecurity = useCallback(() => {
        let score = 40; // Base encryption score
        if (clipboardText.length > 0) score += 10;
        if (expiresIn[0] <= 24) score += 15;
        if (expiresIn[0] <= 1) score += 10;
        if (maxDownloads[0] === 1) score += 15;
        if (burnAfterRead) score += 10;
        return Math.min(100, score);
    }, [clipboardText, expiresIn, maxDownloads, burnAfterRead]);

    const securityScore = calculateSecurity();

    // Create secure clipboard
    const handleCreate = async () => {
        if (!clipboardText.trim()) {
            toast({
                variant: "destructive",
                title: "Empty Content",
                description: "Enter content to create a secure clipboard.",
            });
            play("error");
            return;
        }

        setIsCreating(true);
        play("click");

        try {
            // Generate cryptographic materials
            const key = await generateKey();
            const splitCode = generateSplitCode();
            const wrappedKey = await wrapFileKey(key, splitCode.pin);

            // Encrypt content client-side
            const encryptedClipboard = await encryptClipboardText(clipboardText, key);
            const encryptedMetadataStr = await encryptMetadata([], key);

            // Create vault on server (server never sees plaintext)
            await createVault.mutateAsync({
                expiresIn: expiresIn[0],
                maxDownloads: burnAfterRead ? 1 : maxDownloads[0],
                encryptedMetadata: encryptedMetadataStr,
                lookupId: splitCode.lookupId,
                wrappedKey,
                files: [],
                encryptedClipboardText: encryptedClipboard,
            });

            play("success");
            setCreatedData({
                code: splitCode.fullCode,
                lookupId: splitCode.lookupId,
                wrappedKey,
                key
            });

        } catch (err: any) {
            console.error(err);
            play("error");
            toast({
                variant: "destructive",
                title: "Creation Failed",
                description: err.message || "Could not create secure clipboard.",
            });
        } finally {
            setIsCreating(false);
        }
    };

    // Copy PIN to clipboard
    const copyPin = () => {
        if (createdData) {
            navigator.clipboard.writeText(createdData.code);
            toast({ title: "PIN Copied!", description: "Share this 6-digit code securely." });
            play("click");
        }
    };

    // Reset to create another
    const handleReset = () => {
        setCreatedData(null);
        setClipboardText("");
        play("click");
    };

    return (
        <div className="min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 overflow-hidden">
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
                                        <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em]">SECURE CLIPBOARD</p>
                                    </div>
                                </motion.div>
                            </Link>

                            <div className="flex items-center gap-3">
                                <Link href="/access">
                                    <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2">
                                        <KeyRound className="w-4 h-4" />
                                        Access Vault
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 container max-w-6xl mx-auto px-4 py-8 md:py-12">
                    <AnimatePresence mode="wait">
                        {createdData ? (
                            // SUCCESS STATE
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-xl mx-auto"
                            >
                                {/* Success Header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.1 }}
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-6"
                                    >
                                        <ShieldCheck className="w-10 h-10 text-emerald-400" />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Secure Clipboard Created</h2>
                                    <p className="text-zinc-400">Share this PIN to grant one-time access</p>
                                </div>

                                {/* PIN Display Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                                    <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                                        {/* PIN */}
                                        <div className="text-center mb-6">
                                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-4">Your Access PIN</p>
                                            <div className="flex items-center justify-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    {createdData.code.split('').map((digit, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.3 + i * 0.05 }}
                                                            className={`w-12 h-16 flex items-center justify-center text-3xl font-mono font-bold rounded-lg ${i === 3 ? 'ml-4' : ''
                                                                } bg-zinc-900 border border-zinc-700 text-white`}
                                                        >
                                                            {digit}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    onClick={copyPin}
                                                    className="rounded-full hover:bg-emerald-500/20 text-emerald-400 h-12 w-12"
                                                >
                                                    <Copy className="w-5 h-5" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Security Info */}
                                        <div className="grid grid-cols-3 gap-3 mb-6">
                                            <div className="bg-zinc-900/50 rounded-lg p-3 text-center border border-zinc-800">
                                                <Timer className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                                                <p className="text-xs text-zinc-400">Expires in</p>
                                                <p className="text-sm font-semibold text-white">{expiresIn[0]}h</p>
                                            </div>
                                            <div className="bg-zinc-900/50 rounded-lg p-3 text-center border border-zinc-800">
                                                <Eye className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                                                <p className="text-xs text-zinc-400">Access</p>
                                                <p className="text-sm font-semibold text-white">{burnAfterRead ? 'Once' : `${maxDownloads[0]}x`}</p>
                                            </div>
                                            <div className="bg-zinc-900/50 rounded-lg p-3 text-center border border-zinc-800">
                                                <Shield className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                                                <p className="text-xs text-zinc-400">Encryption</p>
                                                <p className="text-sm font-semibold text-white">AES-256</p>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            <Button
                                                variant="outline"
                                                className="flex-1 border-zinc-700 hover:bg-zinc-800"
                                                onClick={handleReset}
                                            >
                                                <RefreshCw className="w-4 h-4 mr-2" />
                                                Create Another
                                            </Button>
                                            <Button
                                                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white"
                                                onClick={() => setLocation("/access")}
                                            >
                                                Access Vault
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Security Notice */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
                                >
                                    <div className="flex gap-3">
                                        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-amber-200 font-medium">Security Notice</p>
                                            <p className="text-xs text-amber-400/80 mt-1">
                                                Share this PIN through a secure channel. Once accessed, the content will be permanently destroyed.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ) : (
                            // CREATE STATE
                            <motion.div
                                key="create"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid lg:grid-cols-5 gap-8 lg:gap-12"
                            >
                                {/* Left Column - Hero & Security Info */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Hero */}
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                                            <Sparkles className="w-3 h-3" />
                                            <span>ZERO-KNOWLEDGE ENCRYPTION</span>
                                        </div>
                                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                                            Universal<br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
                                                Secure Clipboard
                                            </span>
                                        </h1>
                                        <p className="text-lg text-zinc-400 leading-relaxed">
                                            Share passwords, API keys, and sensitive data with end-to-end encryption.
                                            Your content never touches our servers in plain text.
                                        </p>
                                    </div>

                                    {/* Security Strength */}
                                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                                        <h3 className="text-sm font-semibold text-zinc-300 mb-4 flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-cyan-400" />
                                            Security Strength
                                        </h3>
                                        <SecurityMeter strength={securityScore} />

                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                            <SecurityBadge icon={Lock} label="E2E Encrypted" active={true} />
                                            <SecurityBadge icon={Timer} label="Auto-Destruct" active={expiresIn[0] <= 24} />
                                            <SecurityBadge icon={Eye} label="Single View" active={maxDownloads[0] === 1 || burnAfterRead} />
                                            <SecurityBadge icon={Fingerprint} label="PIN Protected" active={true} />
                                        </div>
                                    </div>

                                    {/* How it Works */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-amber-400" />
                                            How It Works
                                        </h3>
                                        {[
                                            { step: "1", text: "Content encrypted in your browser" },
                                            { step: "2", text: "6-digit PIN generated locally" },
                                            { step: "3", text: "Share PIN through secure channel" },
                                            { step: "4", text: "Content self-destructs after access" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-mono text-cyan-400">
                                                    {item.step}
                                                </div>
                                                <span className="text-sm text-zinc-400">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column - Create Form */}
                                <div className="lg:col-span-3">
                                    <div className="relative">
                                        {/* Glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

                                        <div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8">
                                            {/* Header */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                                    <Clipboard className="w-7 h-7 text-white" />
                                                </div>
                                                <div>
                                                    <h2 className="text-xl font-bold text-white">New Secure Clipboard</h2>
                                                    <p className="text-sm text-zinc-500">Content self-destructs after access</p>
                                                </div>
                                            </div>

                                            {/* Content Input */}
                                            <div className="space-y-6">
                                                <div>
                                                    <div className="flex items-center justify-between mb-3">
                                                        <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                                            <Lock className="w-3 h-3" />
                                                            Sensitive Content
                                                        </label>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs text-zinc-600">{clipboardText.length}/5000</span>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="h-6 w-6 p-0"
                                                                onClick={() => setShowContent(!showContent)}
                                                            >
                                                                {showContent ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <Textarea
                                                            placeholder="Paste your sensitive data here..."
                                                            className={`min-h-[180px] bg-zinc-900/70 border-zinc-700 focus:border-cyan-500/50 resize-none font-mono text-sm p-4 rounded-xl ${!showContent ? 'text-security-disc' : ''
                                                                }`}
                                                            style={!showContent ? { WebkitTextSecurity: 'disc' } as any : {}}
                                                            value={clipboardText}
                                                            onChange={e => setClipboardText(e.target.value.slice(0, 5000))}
                                                        />
                                                        {clipboardText && (
                                                            <div className="absolute bottom-3 right-3">
                                                                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                                                                    <Lock className="w-2.5 h-2.5" />
                                                                    Encrypted
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Security Options */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {/* Expiry */}
                                                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <label className="text-xs font-mono uppercase text-zinc-500 flex items-center gap-2">
                                                                <Timer className="w-3 h-3" />
                                                                Auto-Destruct
                                                            </label>
                                                            <span className="text-lg font-bold text-amber-400">{expiresIn[0]}h</span>
                                                        </div>
                                                        <Slider
                                                            value={expiresIn}
                                                            onValueChange={setExpiresIn}
                                                            min={1}
                                                            max={72}
                                                            step={1}
                                                            className="w-full"
                                                        />
                                                        <div className="flex justify-between mt-2 text-[10px] text-zinc-600">
                                                            <span>1 hour</span>
                                                            <span>72 hours</span>
                                                        </div>
                                                    </div>

                                                    {/* Access Limit */}
                                                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <label className="text-xs font-mono uppercase text-zinc-500 flex items-center gap-2">
                                                                <Eye className="w-3 h-3" />
                                                                Access Limit
                                                            </label>
                                                            <span className="text-lg font-bold text-cyan-400">
                                                                {burnAfterRead ? '1x' : `${maxDownloads[0]}x`}
                                                            </span>
                                                        </div>
                                                        <Slider
                                                            value={maxDownloads}
                                                            onValueChange={(v) => {
                                                                setMaxDownloads(v);
                                                                if (v[0] > 1) setBurnAfterRead(false);
                                                            }}
                                                            min={1}
                                                            max={10}
                                                            step={1}
                                                            className="w-full"
                                                            disabled={burnAfterRead}
                                                        />
                                                        <div className="flex justify-between mt-2 text-[10px] text-zinc-600">
                                                            <span>Single use</span>
                                                            <span>10 views</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Burn After Read Toggle */}
                                                <div
                                                    onClick={() => setBurnAfterRead(!burnAfterRead)}
                                                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${burnAfterRead
                                                        ? 'bg-red-500/10 border-red-500/30'
                                                        : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${burnAfterRead ? 'bg-red-500/20' : 'bg-zinc-800'
                                                            }`}>
                                                            <Zap className={`w-5 h-5 ${burnAfterRead ? 'text-red-400' : 'text-zinc-500'}`} />
                                                        </div>
                                                        <div>
                                                            <p className={`text-sm font-semibold ${burnAfterRead ? 'text-red-300' : 'text-zinc-300'}`}>
                                                                Burn After Reading
                                                            </p>
                                                            <p className="text-xs text-zinc-500">Content destroyed after first view</p>
                                                        </div>
                                                    </div>
                                                    <div className={`w-12 h-6 rounded-full p-1 transition-colors ${burnAfterRead ? 'bg-red-500' : 'bg-zinc-700'
                                                        }`}>
                                                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${burnAfterRead ? 'translate-x-6' : 'translate-x-0'
                                                            }`} />
                                                    </div>
                                                </div>

                                                {/* Create Button */}
                                                <Button
                                                    className="w-full h-14 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-base uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-900/30 transition-all hover:shadow-cyan-800/40 hover:scale-[1.02]"
                                                    onClick={handleCreate}
                                                    disabled={isCreating || !clipboardText.trim()}
                                                >
                                                    {isCreating ? (
                                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        <>
                                                            <Shield className="w-5 h-5 mr-2" />
                                                            Create Secure Link
                                                        </>
                                                    )}
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
