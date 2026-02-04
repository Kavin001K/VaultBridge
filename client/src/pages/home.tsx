import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, Sparkles, Mail, Send, Paperclip, FileText, CheckCircle2, AlertCircle, X,
  Users, AtSign, Plus, Trash2, Volume2, VolumeX, Clipboard, AlertTriangle, Check
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
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useSounds } from "@/hooks/useSounds";
import { useCreateVault } from "@/hooks/use-vaults";
import { generateKey, generateSplitCode, wrapFileKey, encryptMetadata } from "@/lib/crypto";

// Enhanced spring animation configs
const springConfig = { type: "spring", stiffness: 400, damping: 25 };
const hoverSpring = { type: "spring", stiffness: 300, damping: 20 };

// Stagger animation for children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"vault" | "email" | "clipboard">("vault");
  const [emailFiles, setEmailFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const { play: playSound, isEnabled: isSoundEnabled, toggle: toggleSound } = useSounds();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [, setLocation] = useLocation();
  const [showSpamAlert, setShowSpamAlert] = useState(false);

  // Clipboard state
  const [clipboardText, setClipboardText] = useState("");
  const [clipboardExpiresIn, setClipboardExpiresIn] = useState([24]);
  const [clipboardMaxDownloads, setClipboardMaxDownloads] = useState([1]);
  const [isCreatingClipboard, setIsCreatingClipboard] = useState(false);
  const [createdVaultData, setCreatedVaultData] = useState<{
    code: string;
    fullCode: string;
    lookupId: string;
    wrappedKey: string;
    key: CryptoKey;
  } | null>(null);
  const createVault = useCreateVault();

  // Email form state
  const [recipients, setRecipients] = useState<string[]>([]);
  const [recipientInput, setRecipientInput] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const totalEmailSize = emailFiles.reduce((acc, file) => acc + file.size, 0);
  const MAX_EMAIL_SIZE = 25 * 1024 * 1024; // 25MB
  const MAX_RECIPIENTS = 5;

  // Email validation
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const newTotalSize = newFiles.reduce((acc, f) => acc + f.size, totalEmailSize);

      if (newTotalSize > MAX_EMAIL_SIZE) {
        toast({
          variant: "destructive",
          title: "Size Limit Exceeded",
          description: "Total attachment size cannot exceed 25MB.",
        });
        return;
      }

      setEmailFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeEmailFile = (index: number) => {
    setEmailFiles(prev => prev.filter((_, i) => i !== index));
    if (emailFiles.length <= 1 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAddRecipient = () => {
    if (!recipientInput.trim()) return;

    // Allow comma separation in input for power users, but convert to chips
    const inputs = recipientInput.split(',').map(e => e.trim().toLowerCase()).filter(e => e); // Normalize to lowercase
    const validToAdd: string[] = [];
    let errorMsg = "";

    inputs.forEach(email => {
      // Check case-insensitively against existing recipients
      const existingLower = recipients.map(r => r.toLowerCase());
      if (!isValidEmail(email)) {
        errorMsg = `Invalid email: ${email}`;
      } else if (existingLower.includes(email.toLowerCase())) {
        errorMsg = `Duplicate email: ${email}`;
      } else if (recipients.length + validToAdd.length >= MAX_RECIPIENTS) {
        errorMsg = `Max ${MAX_RECIPIENTS} recipients allowed`;
      } else {
        validToAdd.push(email.toLowerCase()); // Store normalized lowercase
      }
    });

    if (validToAdd.length > 0) {
      setRecipients(prev => [...prev, ...validToAdd]);
      setRecipientInput("");
    } else if (errorMsg) {
      toast({
        variant: "destructive",
        title: "Action skipped",
        description: errorMsg,
      });
    }
  };

  const removeRecipient = (index: number) => {
    setRecipients(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddRecipient();
    }
  };

  // Clean valid recipients for submission
  const getValidRecipients = (): string[] => {
    return recipients;
  };

  const handleSendEmail = async () => {
    const validRecipients = getValidRecipients();

    // Only files and recipients are truly required - subject and body will auto-generate if empty
    if (emailFiles.length === 0 || validRecipients.length === 0) {
      toast({
        variant: "destructive",
        title: "Missing required fields",
        description: "Please add at least one file and one valid recipient email address.",
      });
      return;
    }

    // Normalize all recipients to lowercase before sending
    const normalizedRecipients = validRecipients.map(email => email.trim().toLowerCase());

    setIsSending(true);

    try {
      const formData = new FormData();
      // Send recipients as comma-separated string for backend (normalized to lowercase)
      formData.append("to", normalizedRecipients.join(","));

      // Auto-generate subject if empty (server will also do this, but we show the user what's being sent)
      const finalSubject = emailSubject.trim() || `Files shared via VaultBridge: ${emailFiles.map(f => f.name).join(", ").substring(0, 50)}`;
      formData.append("subject", finalSubject);

      // Auto-generate body if empty (server will also do this, but we show the user what's being sent)
      const totalSize = emailFiles.reduce((acc, f) => acc + f.size, 0);
      const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
      };
      const finalBody = emailBody.trim() || `You have received ${emailFiles.length} file(s) (${formatSize(totalSize)}) via VaultBridge secure transfer.\n\nFiles: ${emailFiles.map(f => f.name).join(", ")}`;
      formData.append("body", finalBody);

      emailFiles.forEach(file => formData.append("files", file));

      const res = await fetch("/api/email/direct-multi", {
        method: "POST",
        body: formData,
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || "Failed to send email");
      }

      // Handle partial success
      if (responseData.failed && responseData.failed > 0) {
        toast({
          title: "⚠️ Partial Success",
          description: responseData.message || `Sent to ${responseData.delivered}/${normalizedRecipients.length} recipients`,
          className: "bg-amber-900/90 border-amber-500"
        });
        // Still show spam dialog for partial success
        setShowSpamAlert(true);
      } else {
        // Show the spam folder dialog
        setShowSpamAlert(true);
      }

      // Reset form
      setEmailFiles([]);
      setRecipients([]);
      setEmailSubject("");
      setEmailBody("");
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

  const validRecipientCount = recipients.length;

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-50" />
      <div className="scanline" />

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 overflow-hidden">
              <img src="/vault-logo.jpg" alt="VaultBridge" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-mono tracking-tight">
                VAULT<span className="text-primary">BRIDGE</span>
              </h1>
              <p className="hidden md:block text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Secure Transfer Protocol
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono text-primary uppercase">Online</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full">
        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mb-8 md:mb-12 w-full"
        >
          <div className="bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 flex items-center w-full max-w-[300px] md:max-w-fit justify-between">
            <motion.button
              onClick={() => {
                playSound('click');
                setActiveTab("vault");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all press-effect ${activeTab === "vault"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-3 h-3 md:w-4 md:h-4" />
                Secure Vault
              </div>
            </motion.button>
            <motion.button
              onClick={() => {
                playSound('click');
                setActiveTab("email");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all press-effect ${activeTab === "email"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                Direct Email
              </div>
            </motion.button>
            <motion.button
              onClick={() => {
                playSound('click');
                setActiveTab("clipboard");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all press-effect ${activeTab === "clipboard"
                ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clipboard className="w-3 h-3 md:w-4 md:h-4" />
                Clipboard
              </div>
            </motion.button>
          </div>

          {/* Sound Toggle Button */}
          <motion.button
            onClick={() => {
              const newState = toggleSound();
              setSoundEnabled(newState);
              if (newState) playSound('click');
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-primary/50 transition-all"
            title={soundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-primary" />
            ) : (
              <VolumeX className="w-4 h-4 text-muted-foreground" />
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "vault" ? (
            <motion.div
              key="vault"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Hero with stagger animation */}
              <motion.div
                className="text-center mb-10 md:mb-16 px-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
                  variants={itemVariants}
                >
                  Share files <motion.span
                    className="text-gradient inline-block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                  >secretly</motion.span>.
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
                  variants={itemVariants}
                >
                  End-to-end encrypted. Ephemeral. Anonymous.
                </motion.p>
                <motion.p
                  className="text-sm md:text-lg text-muted-foreground/70 max-w-xl mx-auto"
                  variants={itemVariants}
                >
                  Your files are encrypted in your browser before they ever leave your device.
                </motion.p>
              </motion.div>

              {/* Action Cards with enhanced animations */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl mx-auto px-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Upload Card */}
                <motion.div variants={itemVariants}>
                  <Link href="/upload">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={hoverSpring}
                      onClick={() => playSound('click')}
                      className="glass-card p-6 md:p-8 cursor-pointer group h-full flex flex-col justify-between card-hover-glow"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                          <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 shrink-0"
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Upload className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold">Upload Files</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Create a secure vault</p>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                          Drag & drop files, set expiration and download limits,
                          then share the encrypted link.
                        </p>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-primary font-mono font-bold uppercase tracking-wider transition-all text-sm md:text-base mt-2"
                      >
                        <span>Get Started</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Access Card */}
                <motion.div variants={itemVariants}>
                  <Link href="/access">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={hoverSpring}
                      onClick={() => playSound('click')}
                      className="glass-card p-6 md:p-8 cursor-pointer group h-full border-zinc-700 flex flex-col justify-between card-hover-glow"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                          <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 transition-all shrink-0"
                            whileHover={{ rotate: [0, 15, -15, 0], scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          >
                            <KeyRound className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-primary transition-colors" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold">Access Vault</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Enter your 6-digit code</p>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                          Have an access code? Enter it to unlock and download
                          encrypted files securely.
                        </p>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-zinc-400 font-mono font-bold uppercase tracking-wider group-hover:text-primary transition-all text-sm md:text-base mt-2"
                      >
                        <span>Unlock Vault</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : activeTab === "email" ? (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
              {/* Redesigned Direct Email Card */}
              <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-900/95 to-violet-950/30 shadow-2xl shadow-violet-500/10">
                {/* Decorative gradient orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl" />

                <div className="relative p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                        <Send className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-zinc-900">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Direct Email Relay
                      </h3>
                      <p className="text-sm text-zinc-400 flex items-center gap-2 mt-1">
                        <Shield className="w-3.5 h-3.5 text-violet-400" />
                        Transient "Hot Potato" Transfer
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* File Upload Zone */}
                    <div
                      className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer group ${emailFiles.length > 0
                        ? "border-violet-500/50 bg-violet-500/5"
                        : "border-zinc-700 hover:border-violet-500/50 hover:bg-violet-500/5"
                        }`}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        multiple
                        onChange={handleFileSelect}
                      />

                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto border border-violet-500/20 group-hover:scale-110 transition-transform">
                          <Paperclip className="w-8 h-8 text-violet-400" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-zinc-200">Drop files here or click to browse</p>
                          <p className="text-sm text-zinc-500 mt-1">
                            {(totalEmailSize / (1024 * 1024)).toFixed(2)} MB / 25 MB used
                          </p>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full max-w-xs mx-auto h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300"
                            style={{ width: `${Math.min((totalEmailSize / MAX_EMAIL_SIZE) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* File List */}
                    <AnimatePresence>
                      {emailFiles.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {emailFiles.map((file, idx) => (
                            <motion.div
                              key={`${file.name}-${idx}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/50 group hover:border-violet-500/30 transition-colors"
                            >
                              <div className="flex items-center gap-3 overflow-hidden">
                                <div className="p-2 bg-violet-500/10 rounded-lg flex-shrink-0">
                                  <FileText className="w-4 h-4 text-violet-400" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium truncate">{file.name}</p>
                                  <p className="text-xs text-zinc-500">{(file.size / 1024).toFixed(1)} KB</p>
                                </div>
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); removeEmailFile(idx); }}
                                className="p-2 hover:bg-rose-500/10 hover:text-rose-400 rounded-lg transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Recipients Section - REDESIGNED (Chips) */}
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-violet-400" />
                          Recipients ({recipients.length}/{MAX_RECIPIENTS})
                        </label>
                      </div>

                      <div className="bg-zinc-900/50 border border-zinc-800 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/20 rounded-xl min-h-[56px] p-2 flex flex-wrap gap-2 transition-all">
                        <AnimatePresence mode="popLayout">
                          {recipients.map((recipient, idx) => (
                            <motion.div
                              key={recipient}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center gap-1.5 pl-3 pr-2 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg group"
                            >
                              <span className="text-sm font-medium text-violet-100">{recipient}</span>
                              <button
                                onClick={() => removeRecipient(idx)}
                                className="p-0.5 hover:bg-violet-500/20 rounded-md text-violet-400 hover:text-rose-400 transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        <div className="flex-1 min-w-[200px] flex items-center relative">
                          <Input
                            placeholder={recipients.length === 0 ? "Enter email address..." : "Add another..."}
                            value={recipientInput}
                            onChange={(e) => setRecipientInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={recipients.length >= MAX_RECIPIENTS}
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
                      </div>

                      <p className="text-[10px] text-zinc-600 pl-1">
                        Press <kbd className="font-mono bg-zinc-800 px-1 rounded text-zinc-400">Enter</kbd> to add
                      </p>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">Subject</label>
                      <Input
                        placeholder="Secure files for you..."
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                        className="h-11 bg-zinc-900/50 border-zinc-800 focus:border-violet-500/50 text-base rounded-xl"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">Message</label>
                      <Textarea
                        placeholder="Add a personal message..."
                        className="min-h-[120px] bg-zinc-900/50 border-zinc-800 focus:border-violet-500/50 resize-none text-base rounded-xl"
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                      />
                    </div>

                    {/* Send Button */}
                    <Button
                      className="w-full h-14 text-base font-bold tracking-wide uppercase bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-500/20 rounded-xl transition-all hover:shadow-xl hover:shadow-violet-500/30"
                      size="lg"
                      onClick={handleSendEmail}
                      disabled={isSending || emailFiles.length === 0 || validRecipientCount === 0}
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Sending to {validRecipientCount} recipient(s)...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send to {validRecipientCount || 0} recipient{validRecipientCount !== 1 ? 's' : ''}
                        </>
                      )}
                    </Button>

                    {/* Security Notice */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 border border-violet-500/10">
                      <div className="p-2 bg-violet-500/10 rounded-lg flex-shrink-0">
                        <Shield className="w-5 h-5 text-violet-400" />
                      </div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        <p className="font-semibold text-zinc-300 mb-1">Zero-Knowledge Relay</p>
                        Files flow directly through server memory and are never stored.
                        No logs. No traces. Completely ephemeral.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === "clipboard" ? (
            <motion.div
              key="clipboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-900/95 to-cyan-950/30 shadow-2xl shadow-cyan-500/10 p-8 text-center cursor-pointer group hover:border-cyan-500/40 transition-all duration-500"
                onClick={() => setLocation("/clipboard")}
              >
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Clipboard className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      Universal Clipboard
                    </h2>
                    <p className="text-zinc-400 max-w-md mx-auto">
                      Share passwords, code snippets, and sensitive text across devices with end-to-end encryption.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-emerald-400" />
                      <span>AES-256</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Auto-Destruct</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-cyan-400" />
                      <span>Zero-Knowledge</span>
                    </div>
                  </div>

                  <Button className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white gap-2 px-8 h-12 rounded-full font-bold group-hover:scale-105 transition-transform">
                    Open Secure Clipboard <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="live"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features Footer (Only on Vault Tab) */}
        {
          activeTab === "vault" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 w-full max-w-4xl px-4"
            >
              {[
                {
                  icon: Shield,
                  title: "Client-Side Encryption",
                  desc: "AES-256-GCM encryption entirely in your browser."
                },
                {
                  icon: Zap,
                  title: "Auto-Destruct",
                  desc: "Vaults self-destruct after expiration or download limit."
                },
                {
                  icon: Eye,
                  title: "Zero Knowledge",
                  desc: "We never see your files. Keys stay with you."
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center p-4 md:p-6 bg-zinc-900/20 rounded-xl md:bg-transparent border border-white/5 md:border-transparent"
                >
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-semibold mb-2 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )
        }
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center px-4">
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-4">
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground/60">
          © 2025 Ace-Groups. All rights reserved.
        </p>
      </footer>

      {/* Redesigned Check Spam Folder Dialog */}
      <Dialog open={showSpamAlert} onOpenChange={setShowSpamAlert}>
        <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden">

          {/* Header Pattern */}
          <div className="relative h-24 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />

            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <Mail className="w-8 h-8 text-emerald-500" />
              <div className="absolute -bottom-2 -right-2 bg-zinc-950 rounded-full p-1 border border-zinc-800">
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-2 text-center">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl font-bold text-white text-center">Notification Sent</DialogTitle>
              <DialogDescription className="text-center text-zinc-400">
                The secure access link has been successfully dispatched.
              </DialogDescription>
            </DialogHeader>

            {/* Spam Alert - Redesigned */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-amber-500">Delivery Confirmation</p>
                  <p className="text-xs text-amber-200/70 leading-relaxed">
                    If the email is not visible in the inbox within 2 minutes, it is highly likely in the <strong className="text-amber-200">Spam</strong> or <strong className="text-amber-200">Junk</strong> folder.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide rounded-xl shadow-lg shadow-emerald-900/20 transition-all"
              onClick={() => setShowSpamAlert(false)}
            >
              UNDERSTOOD
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div >
  );
}
