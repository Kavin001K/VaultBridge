import { useState, useRef, useCallback, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield, Send, Paperclip, FileText, X, Image as ImageIcon, File, FileArchive, FileVideo, FileAudio,
    Users, Plus, ArrowLeft, ArrowRight, Mail, Check, AlertTriangle, Activity, Cpu, Network, Zap,
    ChevronRight, Trash2, Clock, Inbox, CheckCircle2, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";

// ─── Constants ───────────────────────────────────────────────────────────────
const MAX_EMAIL_SIZE = 50 * 1024 * 1024; // 50MB total
const MAX_FILE_SIZE = 25 * 1024 * 1024;  // 25MB per file
const MAX_RECIPIENTS = 5;
const MAX_FILES = 10;

const STEPS = [
    { id: 1, label: "Attach", icon: Paperclip },
    { id: 2, label: "Recipients", icon: Users },
    { id: 3, label: "Review", icon: Send },
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return ImageIcon;
    if (type.startsWith("video/")) return FileVideo;
    if (type.startsWith("audio/")) return FileAudio;
    if (type.includes("zip") || type.includes("rar") || type.includes("tar") || type.includes("7z") || type.includes("gz"))
        return FileArchive;
    if (type.includes("pdf") || type.includes("doc") || type.includes("text") || type.includes("sheet"))
        return FileText;
    return File;
};

const getFileColor = (type: string) => {
    if (type.startsWith("image/")) return "text-blue-400 bg-blue-500/10 border-blue-500/20";
    if (type.startsWith("video/")) return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    if (type.startsWith("audio/")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    if (type.includes("zip") || type.includes("rar") || type.includes("tar"))
        return "text-orange-400 bg-orange-500/10 border-orange-500/20";
    if (type.includes("pdf")) return "text-red-400 bg-red-500/10 border-red-500/20";
    return "text-primary/70 bg-primary/10 border-primary/20";
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function GetItMailedPage() {
    const [step, setStep] = useState(1);
    const [emailFiles, setEmailFiles] = useState<File[]>([]);
    const [isSending, setIsSending] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const { toast } = useToast();
    const { play: playSound } = useSounds();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showSpamAlert, setShowSpamAlert] = useState(false);
    const [showConfirmSend, setShowConfirmSend] = useState(false);

    const [recipients, setRecipients] = useState<string[]>([]);
    const [recipientInput, setRecipientInput] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailBody, setEmailBody] = useState("");
    const [emailError, setEmailError] = useState("");

    const totalEmailSize = useMemo(
        () => emailFiles.reduce((acc, file) => acc + file.size, 0),
        [emailFiles]
    );
    const sizePercent = Math.min((totalEmailSize / MAX_EMAIL_SIZE) * 100, 100);
    const isOverLimit = totalEmailSize > MAX_EMAIL_SIZE;

    // ─── File Handlers ───────────────────────────────────────────────────────
    const addFiles = useCallback((newFiles: File[]) => {
        const oversized = newFiles.filter(f => f.size > MAX_FILE_SIZE);
        if (oversized.length > 0) {
            toast({
                variant: "destructive",
                title: "File too large",
                description: `${oversized[0].name} exceeds the 25 MB per-file limit.`,
            });
            return;
        }

        const currentCount = emailFiles.length;
        if (currentCount + newFiles.length > MAX_FILES) {
            toast({
                variant: "destructive",
                title: "Too many files",
                description: `Max ${MAX_FILES} files allowed. You have ${currentCount}.`,
            });
            return;
        }

        const newTotal = newFiles.reduce((a, f) => a + f.size, totalEmailSize);
        if (newTotal > MAX_EMAIL_SIZE) {
            toast({
                variant: "destructive",
                title: "Total size exceeded",
                description: `Adding these files would exceed the 50 MB limit.`,
            });
            return;
        }

        setEmailFiles(prev => [...prev, ...newFiles]);
        playSound?.("click");
    }, [emailFiles, totalEmailSize, toast, playSound]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            addFiles(Array.from(e.target.files));
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const removeEmailFile = (index: number) => {
        setEmailFiles(prev => prev.filter((_, i) => i !== index));
        playSound?.("click");
    };

    // Drag & Drop
    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            addFiles(Array.from(e.dataTransfer.files));
        }
    }, [addFiles]);

    // ─── Recipient Handlers ──────────────────────────────────────────────────
    const handleAddRecipient = () => {
        if (!recipientInput.trim()) return;
        const inputs = recipientInput.split(',').map(e => e.trim().toLowerCase()).filter(e => e);
        const validToAdd: string[] = [];
        let error = "";

        inputs.forEach(email => {
            if (!isValidEmail(email)) error = `"${email}" is not a valid email`;
            else if (recipients.includes(email)) error = `"${email}" is already added`;
            else if (recipients.length + validToAdd.length >= MAX_RECIPIENTS)
                error = `Maximum ${MAX_RECIPIENTS} recipients`;
            else validToAdd.push(email);
        });

        if (validToAdd.length > 0) {
            setRecipients(prev => [...prev, ...validToAdd]);
            setRecipientInput("");
            setEmailError("");
            playSound?.("click");
        } else if (error) {
            setEmailError(error);
        }
    };

    const removeRecipient = (index: number) => {
        setRecipients(prev => prev.filter((_, i) => i !== index));
        playSound?.("click");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
            e.preventDefault();
            handleAddRecipient();
        }
        if (e.key === "Backspace" && !recipientInput && recipients.length > 0) {
            removeRecipient(recipients.length - 1);
        }
    };

    const handleRecipientInputChange = (val: string) => {
        setRecipientInput(val);
        setEmailError("");
        if (val.endsWith(",") || val.endsWith(" ")) {
            const clean = val.replace(/[, ]+$/, "").trim();
            if (clean && isValidEmail(clean)) {
                setRecipientInput(clean);
                setTimeout(() => handleAddRecipient(), 0);
            }
        }
    };

    // ─── Step Validation ─────────────────────────────────────────────────────
    const canProceed = (s: number) => {
        if (s === 1) return emailFiles.length > 0 && !isOverLimit;
        if (s === 2) return recipients.length > 0;
        return true;
    };

    const nextStep = () => {
        if (canProceed(step) && step < 3) {
            setStep(step + 1);
            playSound?.("click");
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
            playSound?.("click");
        }
    };

    // ─── Send Handler ────────────────────────────────────────────────────────
    const handleSendEmail = async () => {
        setShowConfirmSend(false);
        setIsSending(true);

        const subject = emailSubject.trim() ||
            `Files shared via VaultBridge: ${emailFiles[0].name}${emailFiles.length > 1 ? ` and ${emailFiles.length - 1} more` : ""}`;

        try {
            const formData = new FormData();
            formData.append("to", recipients.join(","));
            formData.append("subject", subject);
            const finalBody = emailBody.trim() ||
                `You have received ${emailFiles.length} file(s) (${formatSize(totalEmailSize)}) via VaultBridge secure transfer.\n\nFiles: ${emailFiles.map(f => f.name).join(", ")}`;
            formData.append("body", finalBody);
            emailFiles.forEach(file => formData.append("files", file));

            const res = await fetch("/api/email/direct-multi", { method: "POST", body: formData });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Failed to send email");

            setShowSpamAlert(true);
            setEmailFiles([]);
            setRecipients([]);
            setEmailSubject("");
            setEmailBody("");
            setStep(1);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err: any) {
            toast({
                variant: "destructive",
                title: "Failed to send",
                description: err.message || "Something went wrong. Please try again.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="scanline pointer-events-none opacity-10" />

            {/* Header */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl safe-top">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex items-center justify-between">
                    <Link href="/">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-9 h-9 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden">
                                <img src="/icon-192x192.png" alt="VaultBridge" className="w-full h-full object-cover p-1.5 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h1 className="text-lg font-black font-mono tracking-widest text-white leading-none uppercase">VAULT<span className="text-primary">BRIDGE</span></h1>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white hover:bg-white/5 px-4 text-xs font-bold gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Return
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 pt-28 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        EPHEMERAL_RELAY_ACTIVE
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight text-white uppercase italic">
                        Get It <span className="text-primary">Mailed</span>
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium max-w-sm mx-auto">
                        Distribute encrypted fragments directly to target handlers with zero-persistence.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    {STEPS.map((s, idx) => (
                        <div key={s.id} className="flex items-center gap-2">
                            <button
                                onClick={() => (step > s.id) && setStep(s.id)}
                                className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
                                    step === s.id 
                                        ? 'bg-primary/10 text-primary border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                                        : step > s.id
                                            ? 'bg-primary/5 text-primary/60 border-primary/10'
                                            : 'bg-zinc-900 text-zinc-600 border-white/5'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    {step > s.id ? <Check className="w-3 h-3" /> : <s.icon className="w-3 h-3" />}
                                    {s.label}
                                </div>
                            </button>
                            {idx < STEPS.length - 1 && <ChevronRight className="w-4 h-4 text-zinc-800" />}
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card relative overflow-hidden mb-8">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 sm:p-10 space-y-8">
                                <div
                                    className={`
                                        relative border-2 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer group overflow-hidden
                                        ${isDragging ? "border-primary bg-primary/10 scale-[1.02]" : "border-zinc-800 hover:border-primary/40 hover:bg-primary/5"}
                                    `}
                                    onClick={() => fileInputRef.current?.click()}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileSelect} />
                                    <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                                        <Paperclip className="w-7 h-7 text-primary/70 group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-sm font-black text-white uppercase tracking-[0.2em] mb-2 italic">Inject Fragments</p>
                                    <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">
                                        Max {MAX_FILES} files • 50 MB total limit
                                    </p>
                                </div>

                                {emailFiles.length > 0 && (
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{emailFiles.length} Identifiers Detected</span>
                                            <span className={`text-xs font-mono font-black ${isOverLimit ? 'text-red-500' : 'text-primary'}`}>{formatSize(totalEmailSize)}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                                            <motion.div 
                                                initial={{ width: 0 }} animate={{ width: `${sizePercent}%` }} 
                                                className={`h-full shadow-[0_0_10px_rgba(16,185,129,0.5)] ${isOverLimit ? 'bg-red-500' : 'bg-primary'}`} 
                                            />
                                        </div>
                                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                            {emailFiles.map((file, idx) => {
                                                const Icon = getFileIcon(file.type);
                                                const colors = getFileColor(file.type);
                                                return (
                                                    <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-2xl border border-white/5 group">
                                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colors}`}><Icon className="w-5 h-5" /></div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-xs font-black text-white truncate uppercase italic">{file.name}</p>
                                                            <p className="text-[10px] font-mono text-zinc-500">{formatSize(file.size)}</p>
                                                        </div>
                                                        <button onClick={() => removeEmailFile(idx)} className="p-2 rounded-xl text-zinc-600 hover:text-red-400 hover:bg-red-500/5 transition-all opacity-0 group-hover:opacity-100">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 sm:p-10 space-y-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2 px-1">
                                        <Users className="w-3.5 h-3.5 text-primary" /> Target Handlers ({recipients.length}/{MAX_RECIPIENTS})
                                    </label>
                                    <div className={`bg-zinc-950 border rounded-2xl min-h-[64px] p-3 flex flex-wrap gap-2 transition-all duration-500 ${emailError ? "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]" : "border-white/5 focus-within:border-primary/50"}`}>
                                        <AnimatePresence mode="popLayout">
                                            {recipients.map((recipient, idx) => (
                                                <motion.div key={recipient} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-2 pl-3 pr-1.5 py-1.5 bg-primary/10 border border-primary/20 rounded-xl">
                                                    <span className="text-xs font-black text-primary uppercase italic tracking-tight">{recipient}</span>
                                                    <button onClick={() => removeRecipient(idx)} className="p-1 hover:bg-red-500/20 rounded-lg text-primary/50 hover:text-red-400 transition-colors"><X className="w-3 h-3" /></button>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                        {recipients.length < MAX_RECIPIENTS && (
                                            <Input
                                                placeholder={recipients.length === 0 ? "handler@vault.relay" : "Add target..."}
                                                value={recipientInput}
                                                onChange={(e) => handleRecipientInputChange(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                className="bg-transparent border-none h-10 p-0 focus-visible:ring-0 placeholder:text-zinc-700 text-sm font-bold uppercase italic flex-1 min-w-[150px]"
                                            />
                                        )}
                                    </div>
                                    {emailError && <p className="text-[10px] text-red-400 flex items-center gap-1.5 font-bold uppercase tracking-tight pl-1"><AlertTriangle className="w-3.5 h-3.5" /> {emailError}</p>}
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block px-1">Subject Header</label>
                                    <Input placeholder="ENCRYPTED_PAYLOAD_TRANSFER" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} className="h-14 bg-zinc-950 border-white/5 focus:border-primary/50 text-sm font-bold uppercase italic rounded-2xl shadow-2xl" />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block px-1">Encrypted Briefing</label>
                                    <Textarea placeholder="Initiating secure fragment distribution..." value={emailBody} onChange={(e) => setEmailBody(e.target.value)} className="min-h-[120px] bg-zinc-950 border-white/5 focus:border-primary/50 text-sm font-bold uppercase italic rounded-2xl shadow-2xl resize-none custom-scrollbar" />
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 sm:p-10 space-y-8">
                                <div className="bg-zinc-900/50 rounded-3xl border border-primary/20 p-8 space-y-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5"><Activity className="w-32 h-32 text-primary" /></div>
                                    <div className="space-y-4 relative z-10">
                                        <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2"><Paperclip className="w-4 h-4 text-primary" /> Binary Package</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {emailFiles.map((f, i) => (
                                                <div key={i} className="flex items-center gap-2 p-2.5 bg-black/40 rounded-xl border border-white/5">
                                                    <span className="text-[10px] font-black text-zinc-300 truncate uppercase italic">{f.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4 relative z-10">
                                        <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Deployment Targets</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {recipients.map((r) => (
                                                <span key={r} className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-xl text-[10px] font-black text-primary uppercase italic">{r}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                                    <Shield className="w-6 h-6 text-primary shrink-0" />
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase italic leading-tight">Fragments are distributed via memory-only relay. Zero persistence. Verification complete.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Footer Actions */}
                <div className="flex gap-4">
                    {step > 1 && (
                        <Button variant="ghost" onClick={prevStep} className="h-14 w-20 rounded-2xl border border-white/5 text-zinc-500 hover:text-white hover:bg-white/5"><ArrowLeft className="w-5 h-5" /></Button>
                    )}
                    
                    {step < 3 ? (
                        <Button onClick={nextStep} disabled={!canProceed(step)} className="h-14 flex-1 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            Continue <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button onClick={() => setShowConfirmSend(true)} disabled={isSending} className="h-14 flex-1 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            {isSending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Distributing...</> : <><Send className="w-4 h-4 mr-2" /> Execute Relay</>}
                        </Button>
                    )}
                </div>

                <p className="mt-8 text-[9px] text-center text-zinc-600 font-black uppercase tracking-[0.3em]">
                    By executing, you agree to our <Link href="/terms" className="text-primary/60 hover:text-primary transition-colors underline underline-offset-4">Terms</Link> & <Link href="/privacy" className="text-primary/60 hover:text-primary transition-colors underline underline-offset-4">Privacy</Link>
                </p>
            </main>

            {/* Dialogs */}
            <Dialog open={showConfirmSend} onOpenChange={setShowConfirmSend}>
                <DialogContent className="sm:max-w-md bg-zinc-950 border border-white/5 text-zinc-100 p-0 overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="h-24 bg-zinc-900 flex items-center justify-center relative"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent)]" /><Send className="w-8 h-8 text-primary relative z-10" /></div>
                    <div className="px-8 pb-8 pt-4">
                        <DialogHeader className="mb-6"><DialogTitle className="text-lg font-black text-center uppercase tracking-widest italic">Final Authorization</DialogTitle></DialogHeader>
                        <div className="space-y-4 bg-black/40 rounded-2xl p-5 border border-white/5 text-[10px] font-bold uppercase italic">
                            <div className="flex justify-between"><span>Package:</span><span className="text-primary">{emailFiles.length} fragments</span></div>
                            <div className="flex justify-between"><span>Payload:</span><span className="text-primary">{formatSize(totalEmailSize)}</span></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-8">
                            <Button variant="ghost" onClick={() => setShowConfirmSend(false)} className="h-12 rounded-xl text-[10px] font-black uppercase text-zinc-500">Abort</Button>
                            <Button onClick={handleSendEmail} className="h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase">Authorize</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={showSpamAlert} onOpenChange={setShowSpamAlert}>
                <DialogContent className="sm:max-w-md bg-zinc-950 border border-white/5 text-zinc-100 p-0 overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="h-24 bg-zinc-900 flex items-center justify-center relative"><CheckCircle2 className="w-10 h-10 text-primary relative z-10" /></div>
                    <div className="px-8 pb-8 pt-4 text-center">
                        <DialogHeader className="mb-6"><DialogTitle className="text-lg font-black text-center uppercase tracking-widest italic">Relay Successful</DialogTitle></DialogHeader>
                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-8"><p className="text-[9px] font-black text-primary uppercase tracking-wider">Reminder: Targets should check their spam folder if the relay doesn't arrive within 60 seconds.</p></div>
                        <Button onClick={() => setShowSpamAlert(false)} className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-[10px] font-black uppercase">Return to Portal</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
