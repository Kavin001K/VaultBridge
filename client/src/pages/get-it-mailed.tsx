import { useState, useRef, useCallback, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield, Send, Paperclip, FileText, X, Image as ImageIcon, File, FileArchive, FileVideo, FileAudio,
    Users, Plus, ArrowLeft, ArrowRight, Mail, Check, AlertTriangle, Sparkles, Eye, ChevronRight, Trash2,
    Clock, Inbox, CheckCircle2, ArrowUpRight
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
    { id: 3, label: "Review", icon: Eye },
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
    if (type.startsWith("image/")) return "text-sky-400 bg-sky-500/10 border-sky-500/20";
    if (type.startsWith("video/")) return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    if (type.startsWith("audio/")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    if (type.includes("zip") || type.includes("rar") || type.includes("tar"))
        return "text-orange-400 bg-orange-500/10 border-orange-500/20";
    if (type.includes("pdf")) return "text-red-400 bg-red-500/10 border-red-500/20";
    return "text-violet-400 bg-violet-500/10 border-violet-500/20";
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

    // Snapshot of what was sent (captured before reset)
    const [sendSummary, setSendSummary] = useState<{
        fileCount: number;
        fileNames: string[];
        totalSize: number;
        recipients: string[];
        subject: string;
    } | null>(null);

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

    const clearAllFiles = () => {
        setEmailFiles([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
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
        // Auto-add on comma or space after valid email
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

        // Capture summary BEFORE clearing state
        const summary = {
            fileCount: emailFiles.length,
            fileNames: emailFiles.map(f => f.name),
            totalSize: totalEmailSize,
            recipients: [...recipients],
            subject: emailSubject.trim() ||
                `Files shared via VaultBridge: ${emailFiles.map(f => f.name).join(", ").substring(0, 50)}`,
        };

        try {
            const formData = new FormData();
            formData.append("to", recipients.join(","));
            formData.append("subject", summary.subject);
            const finalBody = emailBody.trim() ||
                `You have received ${emailFiles.length} file(s) (${formatSize(totalEmailSize)}) via VaultBridge secure transfer.\n\nFiles: ${emailFiles.map(f => f.name).join(", ")}`;
            formData.append("body", finalBody);
            emailFiles.forEach(file => formData.append("files", file));

            const res = await fetch("/api/email/direct-multi", { method: "POST", body: formData });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Failed to send email");

            if (data.failed && data.failed > 0) {
                toast({
                    title: "⚠️ Partial Success",
                    description: data.message || `Sent to ${data.delivered}/${recipients.length} recipients`,
                    className: "bg-amber-900/90 border-amber-500",
                });
            }

            setSendSummary(summary);
            setShowSpamAlert(true);

            // Reset form
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

    // ─── Render ──────────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_50%)]" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.05),transparent_50%)]" />

            {/* Header */}
            <header className="relative z-10 px-6 py-5 border-b border-white/5 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="w-9 h-9 bg-violet-500/10 rounded-xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-400/50 transition-colors">
                                <Mail className="w-4 h-4 text-violet-400" />
                            </div>
                            <h1 className="text-lg font-bold font-mono tracking-tight group-hover:text-violet-300 transition-colors">
                                VAULT<span className="text-violet-400">BRIDGE</span>
                            </h1>
                        </motion.div>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2 text-zinc-500 hover:text-white hover:bg-white/5 text-xs">
                            <ArrowLeft className="w-3.5 h-3.5" /> Back
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main */}
            <main className="relative z-10 flex-1 w-full max-w-3xl mx-auto px-6 py-10">
                {/* Title */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/15 rounded-full text-xs text-violet-300 font-medium mb-4">
                        <Sparkles className="w-3 h-3" /> Zero-Knowledge Email Relay
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
                        Get it Mailed
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md mx-auto">
                        Attach files, add recipients, review and send — all ephemeral, never stored.
                    </p>
                </motion.div>

                {/* ─── Step Indicator ──────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-center gap-0">
                        {STEPS.map((s, idx) => {
                            const Icon = s.icon;
                            const isActive = step === s.id;
                            const isCompleted = step > s.id;
                            return (
                                <div key={s.id} className="flex items-center">
                                    <button
                                        onClick={() => {
                                            // Allow going back to completed steps
                                            if (isCompleted || isActive) setStep(s.id);
                                        }}
                                        className={`
                                            flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all
                                            ${isActive
                                                ? "bg-violet-500/15 text-violet-300 border border-violet-500/30 shadow-lg shadow-violet-500/10"
                                                : isCompleted
                                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/15"
                                                    : "bg-zinc-900/50 text-zinc-600 border border-zinc-800/50"
                                            }
                                        `}
                                    >
                                        {isCompleted ? (
                                            <Check className="w-3.5 h-3.5" />
                                        ) : (
                                            <Icon className="w-3.5 h-3.5" />
                                        )}
                                        {s.label}
                                    </button>
                                    {idx < STEPS.length - 1 && (
                                        <ChevronRight className={`w-4 h-4 mx-1 ${step > s.id ? "text-emerald-500/50" : "text-zinc-800"}`} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ─── Step Content ────────────────────────────────────────── */}
                <AnimatePresence mode="wait">
                    {/* ── STEP 1: FILES ─────────────────────────────────────── */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-5"
                        >
                            {/* Drop Zone */}
                            <div
                                className={`
                                    relative border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer group
                                    ${isDragging
                                        ? "border-violet-400 bg-violet-500/10 scale-[1.02]"
                                        : emailFiles.length > 0
                                            ? "border-violet-500/30 bg-violet-500/5"
                                            : "border-zinc-700/50 hover:border-violet-500/40 hover:bg-violet-500/5"
                                    }
                                `}
                                onClick={() => fileInputRef.current?.click()}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileSelect} />
                                <AnimatePresence mode="wait">
                                    {isDragging ? (
                                        <motion.div key="dragging" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                                            <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-violet-400/30 animate-pulse">
                                                <Paperclip className="w-7 h-7 text-violet-300" />
                                            </div>
                                            <p className="text-lg font-semibold text-violet-300">Release to attach</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <div className="w-16 h-16 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-violet-500/15 group-hover:scale-105 transition-transform">
                                                <Paperclip className="w-7 h-7 text-violet-400" />
                                            </div>
                                            <p className="text-base font-semibold text-zinc-200">Drop files here or click to browse</p>
                                            <p className="text-xs text-zinc-500 mt-2">Up to {MAX_FILES} files • 25 MB per file • 50 MB total</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Size Bar */}
                            {emailFiles.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex-1 h-2 bg-zinc-800/80 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full rounded-full ${isOverLimit
                                                ? "bg-gradient-to-r from-red-500 to-rose-500"
                                                : sizePercent > 80
                                                    ? "bg-gradient-to-r from-amber-500 to-orange-500"
                                                    : "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                                }`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${sizePercent}%` }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    </div>
                                    <span className={`text-xs font-mono whitespace-nowrap ${isOverLimit ? "text-red-400" : "text-zinc-500"}`}>
                                        {formatSize(totalEmailSize)} / {formatSize(MAX_EMAIL_SIZE)}
                                    </span>
                                </motion.div>
                            )}

                            {/* File List */}
                            <AnimatePresence>
                                {emailFiles.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                                                {emailFiles.length} file{emailFiles.length !== 1 ? "s" : ""} attached
                                            </p>
                                            <button
                                                onClick={clearAllFiles}
                                                className="text-xs text-zinc-600 hover:text-rose-400 transition-colors flex items-center gap-1"
                                            >
                                                <Trash2 className="w-3 h-3" /> Clear all
                                            </button>
                                        </div>
                                        <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
                                            {emailFiles.map((file, idx) => {
                                                const Icon = getFileIcon(file.type);
                                                const colorClass = getFileColor(file.type);
                                                return (
                                                    <motion.div
                                                        key={`${file.name}-${idx}-${file.size}`}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        transition={{ delay: idx * 0.03 }}
                                                        className="flex items-center gap-3 p-3 bg-zinc-900/60 rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 group transition-colors"
                                                    >
                                                        <div className={`p-2 rounded-lg border ${colorClass} flex-shrink-0`}>
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">{file.name}</p>
                                                            <p className="text-[11px] text-zinc-500">{formatSize(file.size)}</p>
                                                        </div>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); removeEmailFile(idx); }}
                                                            className="p-1.5 rounded-lg text-zinc-600 hover:text-rose-400 hover:bg-rose-500/10 transition-colors opacity-0 group-hover:opacity-100"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {/* ── STEP 2: RECIPIENTS ───────────────────────────────── */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-6"
                        >
                            {/* Recipients Input */}
                            <div className="space-y-3">
                                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                    <Users className="w-3.5 h-3.5 text-violet-400" />
                                    Recipients ({recipients.length}/{MAX_RECIPIENTS})
                                </label>
                                <div className={`
                                    bg-zinc-900/50 border rounded-xl min-h-[56px] p-2.5 flex flex-wrap gap-2 transition-all
                                    ${emailError ? "border-rose-500/50 ring-1 ring-rose-500/20" : "border-zinc-800 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/20"}
                                `}>
                                    <AnimatePresence mode="popLayout">
                                        {recipients.map((recipient, idx) => (
                                            <motion.div
                                                key={recipient}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg"
                                            >
                                                <span className="text-sm font-medium text-violet-100">{recipient}</span>
                                                <button
                                                    onClick={() => removeRecipient(idx)}
                                                    className="p-1 hover:bg-rose-500/20 rounded-md text-violet-400 hover:text-rose-400 transition-colors"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    {recipients.length < MAX_RECIPIENTS && (
                                        <div className="flex-1 min-w-[200px] flex items-center relative">
                                            <Input
                                                placeholder={recipients.length === 0 ? "name@example.com" : "Add another..."}
                                                value={recipientInput}
                                                onChange={(e) => handleRecipientInputChange(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                onBlur={() => { if (recipientInput.trim()) handleAddRecipient(); }}
                                                className="bg-transparent border-none h-9 p-0 focus-visible:ring-0 placeholder:text-zinc-600 text-base w-full"
                                            />
                                            {recipientInput && (
                                                <button
                                                    onClick={handleAddRecipient}
                                                    className="absolute right-0 p-1.5 bg-violet-500/20 hover:bg-violet-500 text-violet-300 hover:text-white rounded-lg transition-all"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <AnimatePresence>
                                    {emailError && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-xs text-rose-400 flex items-center gap-1 pl-1"
                                        >
                                            <AlertTriangle className="w-3 h-3" /> {emailError}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                                {!emailError && (
                                    <p className="text-[11px] text-zinc-600 pl-1">
                                        Press <kbd className="font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">Enter</kbd>,{" "}
                                        <kbd className="font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">Tab</kbd>, or{" "}
                                        <kbd className="font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">,</kbd> to add
                                    </p>
                                )}
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">Subject</label>
                                    <span className="text-[10px] text-zinc-600">Optional — auto-generated if empty</span>
                                </div>
                                <Input
                                    placeholder="Secure files for you..."
                                    value={emailSubject}
                                    onChange={(e) => setEmailSubject(e.target.value)}
                                    className="h-11 bg-zinc-900/50 border-zinc-800 focus:border-violet-500/50 text-base rounded-xl"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">Message</label>
                                    <span className="text-[10px] text-zinc-600">Optional</span>
                                </div>
                                <Textarea
                                    placeholder="Hey! Here are those files you requested..."
                                    value={emailBody}
                                    onChange={(e) => setEmailBody(e.target.value)}
                                    className="min-h-[100px] bg-zinc-900/50 border-zinc-800 focus:border-violet-500/50 resize-none text-base rounded-xl"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* ── STEP 3: REVIEW ────────────────────────────────────── */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-5"
                        >
                            {/* Summary Card */}
                            <div className="rounded-2xl border border-violet-500/15 bg-gradient-to-br from-zinc-900/80 to-violet-950/20 overflow-hidden">
                                {/* Files Summary */}
                                <div className="p-5 border-b border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Paperclip className="w-4 h-4 text-violet-400" />
                                        <h3 className="text-sm font-semibold text-zinc-200">Attachments</h3>
                                        <span className="text-xs text-zinc-500 ml-auto">{formatSize(totalEmailSize)}</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {emailFiles.map((file, idx) => {
                                            const Icon = getFileIcon(file.type);
                                            const colorClass = getFileColor(file.type);
                                            return (
                                                <div key={idx} className="flex items-center gap-2 p-2 bg-zinc-800/30 rounded-lg">
                                                    <div className={`p-1.5 rounded-md border ${colorClass}`}>
                                                        <Icon className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-xs truncate flex-1">{file.name}</span>
                                                    <span className="text-[10px] text-zinc-500 flex-shrink-0">{formatSize(file.size)}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Recipients Summary */}
                                <div className="p-5 border-b border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Users className="w-4 h-4 text-violet-400" />
                                        <h3 className="text-sm font-semibold text-zinc-200">Sending to</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {recipients.map((r) => (
                                            <span key={r} className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg text-sm text-violet-200">
                                                {r}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Subject & Message Summary */}
                                <div className="p-5">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Subject</p>
                                            <p className="text-sm text-zinc-200">
                                                {emailSubject || <span className="text-zinc-600 italic">Auto-generated from file names</span>}
                                            </p>
                                        </div>
                                        {emailBody && (
                                            <div>
                                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Message</p>
                                                <p className="text-sm text-zinc-300 whitespace-pre-wrap bg-zinc-800/30 p-3 rounded-lg">
                                                    {emailBody}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/10">
                                <div className="p-2 bg-emerald-500/10 rounded-lg flex-shrink-0">
                                    <Shield className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="text-xs text-zinc-400 leading-relaxed">
                                    <p className="font-semibold text-emerald-300 mb-0.5">Zero-Knowledge Relay</p>
                                    Files pass through server memory only — never stored, logged, or inspected.
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ─── Navigation Buttons ──────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-8 space-y-3"
                >
                    <div className="flex gap-3">
                        {step > 1 && (
                            <Button
                                variant="outline"
                                className="flex-1 h-13 text-sm font-semibold border-zinc-800 text-zinc-300 hover:bg-zinc-800/50 hover:text-white rounded-xl"
                                onClick={prevStep}
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                        )}
                        {step < 3 ? (
                            <Button
                                className={`flex-1 h-13 text-sm font-bold uppercase tracking-wide rounded-xl shadow-lg transition-all
                                    ${canProceed(step)
                                        ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-violet-500/20 hover:shadow-violet-500/30"
                                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed shadow-none"
                                    }`}
                                onClick={nextStep}
                                disabled={!canProceed(step)}
                            >
                                Continue <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button
                                className="flex-1 h-13 text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-500/20 rounded-xl transition-all hover:shadow-xl hover:shadow-violet-500/30"
                                onClick={() => setShowConfirmSend(true)}
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" /> Sending...</>
                                ) : (
                                    <><Send className="w-4 h-4 mr-2" /> Send to {recipients.length} Recipient{recipients.length !== 1 ? "s" : ""}</>
                                )}
                            </Button>
                        )}
                    </div>
                    <p className="text-[10px] text-center text-zinc-600">
                        By sending, you agree to our{" "}
                        <Link href="/terms" className="underline hover:text-violet-400 transition-colors">Terms</Link> &{" "}
                        <Link href="/privacy" className="underline hover:text-violet-400 transition-colors">Privacy Policy</Link>.
                    </p>
                </motion.div>
            </main>

            {/* ─── Confirm Send Dialog ────────────────────────────────────── */}
            <Dialog open={showConfirmSend} onOpenChange={setShowConfirmSend}>
                <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl">
                    {/* Header */}
                    <div className="relative h-20 bg-gradient-to-r from-violet-950/60 via-fuchsia-950/40 to-violet-950/60 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent)]" />
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="w-12 h-12 bg-violet-500/15 rounded-xl border border-violet-500/25 flex items-center justify-center relative z-10"
                        >
                            <Send className="w-6 h-6 text-violet-400" />
                        </motion.div>
                    </div>

                    <div className="px-6 pb-6 pt-3">
                        <DialogHeader className="mb-4">
                            <DialogTitle className="text-lg font-bold text-center">Confirm & Send</DialogTitle>
                            <DialogDescription className="text-center text-zinc-500 text-sm">
                                Review your delivery before sending
                            </DialogDescription>
                        </DialogHeader>

                        {/* Summary */}
                        <div className="space-y-3 mb-5">
                            {/* Files */}
                            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Paperclip className="w-3.5 h-3.5 text-violet-400" />
                                    <span className="text-xs font-semibold text-zinc-300">{emailFiles.length} file{emailFiles.length !== 1 ? "s" : ""}</span>
                                    <span className="text-[10px] text-zinc-600 ml-auto">{formatSize(totalEmailSize)}</span>
                                </div>
                                <div className="space-y-1">
                                    {emailFiles.slice(0, 3).map((f, i) => {
                                        const Icon = getFileIcon(f.type);
                                        const colorClass = getFileColor(f.type);
                                        return (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className={`p-1 rounded border ${colorClass}`}><Icon className="w-2.5 h-2.5" /></div>
                                                <span className="text-xs text-zinc-400 truncate">{f.name}</span>
                                                <span className="text-[10px] text-zinc-600 ml-auto flex-shrink-0">{formatSize(f.size)}</span>
                                            </div>
                                        );
                                    })}
                                    {emailFiles.length > 3 && (
                                        <p className="text-[10px] text-zinc-600 pl-7">+{emailFiles.length - 3} more</p>
                                    )}
                                </div>
                            </div>

                            {/* Recipients */}
                            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-3.5 h-3.5 text-violet-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Sending to</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {recipients.map(r => (
                                        <span key={r} className="px-2 py-1 bg-violet-500/10 border border-violet-500/15 rounded-md text-[11px] text-violet-200">
                                            {r}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                variant="outline"
                                className="h-11 border-zinc-800 text-zinc-400 hover:bg-zinc-800/50 hover:text-white rounded-xl"
                                onClick={() => setShowConfirmSend(false)}
                            >
                                Go Back
                            </Button>
                            <Button
                                className="h-11 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-lg shadow-violet-500/15"
                                onClick={handleSendEmail}
                            >
                                <Send className="w-4 h-4 mr-1.5" /> Send Now
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* ─── Success Dialog ─────────────────────────────────────────── */}
            <Dialog open={showSpamAlert} onOpenChange={(open) => { setShowSpamAlert(open); if (!open) setSendSummary(null); }}>
                <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl">
                    {/* Animated Header */}
                    <div className="relative h-36 bg-gradient-to-br from-emerald-950/50 via-zinc-900/60 to-violet-950/30 flex items-center justify-center overflow-hidden">
                        {/* Animated rings */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 3, opacity: 0 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            className="absolute w-16 h-16 rounded-full border border-emerald-400/30"
                        />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="absolute w-16 h-16 rounded-full border border-emerald-400/20"
                        />
                        {/* Gradient background pulse */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_70%)]" />
                        {/* Floating particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, x: (i % 2 === 0 ? -1 : 1) * (10 + i * 8) }}
                                animate={{
                                    opacity: [0, 0.6, 0],
                                    y: [20, -30 - i * 10],
                                    x: (i % 2 === 0 ? -1 : 1) * (15 + i * 12),
                                }}
                                transition={{ duration: 1.5 + i * 0.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                className="absolute w-1.5 h-1.5 rounded-full"
                                style={{ background: i % 3 === 0 ? "#34d399" : i % 3 === 1 ? "#a78bfa" : "#f0abfc" }}
                            />
                        ))}
                        {/* Main icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-18 h-18 relative z-10"
                        >
                            <div className="w-[72px] h-[72px] bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-2xl border border-emerald-500/25 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                                <Mail className="w-9 h-9 text-emerald-400" />
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                                className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1.5 shadow-lg shadow-emerald-500/30"
                            >
                                <Check className="w-3.5 h-3.5 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="px-6 pb-6 pt-3">
                        <DialogHeader className="mb-5">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                                <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                                    Successfully Delivered!
                                </DialogTitle>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                                <DialogDescription className="text-center text-zinc-500 text-sm">
                                    Your files have been securely relayed via zero-knowledge transfer.
                                </DialogDescription>
                            </motion.div>
                        </DialogHeader>

                        {/* Delivery Receipt */}
                        {sendSummary && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4 mb-4 space-y-3"
                            >
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Delivery Receipt</p>
                                </div>
                                {/* Files row */}
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 bg-violet-500/10 rounded-lg mt-0.5">
                                        <Paperclip className="w-3.5 h-3.5 text-violet-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-zinc-400 mb-0.5">{sendSummary.fileCount} file{sendSummary.fileCount !== 1 ? "s" : ""} • {formatSize(sendSummary.totalSize)}</p>
                                        <p className="text-[11px] text-zinc-600 truncate">{sendSummary.fileNames.join(", ")}</p>
                                    </div>
                                </div>
                                {/* Recipients row */}
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 bg-emerald-500/10 rounded-lg mt-0.5">
                                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap gap-1">
                                            {sendSummary.recipients.map(r => (
                                                <span key={r} className="px-2 py-0.5 bg-emerald-500/8 border border-emerald-500/15 rounded text-[11px] text-emerald-300/80">
                                                    {r}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Timestamp */}
                                <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/50">
                                    <Clock className="w-3 h-3 text-zinc-600" />
                                    <p className="text-[10px] text-zinc-600">
                                        {new Date().toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, month: "short", day: "numeric" })}
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Spam Alert */}
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-amber-500/5 border border-amber-500/12 rounded-xl p-3.5 mb-5 text-left"
                        >
                            <div className="flex items-start gap-2.5">
                                <div className="p-1.5 bg-amber-500/10 rounded-lg shrink-0">
                                    <Inbox className="w-3.5 h-3.5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-amber-400 mb-0.5">Check spam folder</p>
                                    <p className="text-[11px] text-amber-200/50 leading-relaxed">
                                        If the email doesn't appear within 2 minutes, look in <strong className="text-amber-200/70">Spam</strong> or <strong className="text-amber-200/70">Junk</strong>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Actions */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-2.5">
                            <Button
                                className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold tracking-wide rounded-xl shadow-lg shadow-emerald-900/20 transition-all"
                                onClick={() => setShowSpamAlert(false)}
                            >
                                <Check className="w-4 h-4 mr-2" /> Done
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full h-10 text-zinc-500 hover:text-violet-300 text-xs gap-1.5"
                                onClick={() => { setShowSpamAlert(false); setStep(1); }}
                            >
                                <ArrowUpRight className="w-3.5 h-3.5" /> Send Another
                            </Button>
                        </motion.div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
