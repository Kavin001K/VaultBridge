import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, Sparkles, Mail, Send, Paperclip, FileText, CheckCircle2, AlertCircle, X,
  Users, AtSign, Plus, Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"vault" | "email" | "live">("vault");
  const [emailFiles, setEmailFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Email form state - now supports multiple recipients
  const [recipients, setRecipients] = useState<string[]>([""]);
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

  const addRecipient = () => {
    if (recipients.length < MAX_RECIPIENTS) {
      setRecipients(prev => [...prev, ""]);
    }
  };

  const removeRecipient = (index: number) => {
    if (recipients.length > 1) {
      setRecipients(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateRecipient = (index: number, value: string) => {
    setRecipients(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // Parse comma-separated emails
  const parseEmails = (input: string): string[] => {
    return input.split(',').map(e => e.trim()).filter(e => e.length > 0);
  };

  const getValidRecipients = (): string[] => {
    const allEmails: string[] = [];
    recipients.forEach(r => {
      const parsed = parseEmails(r);
      parsed.forEach(email => {
        if (isValidEmail(email) && !allEmails.includes(email)) {
          allEmails.push(email);
        }
      });
    });
    return allEmails.slice(0, MAX_RECIPIENTS);
  };

  const handleSendEmail = async () => {
    const validRecipients = getValidRecipients();

    if (emailFiles.length === 0 || validRecipients.length === 0 || !emailSubject || !emailBody) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill in all fields, add valid recipients, and attach at least one file.",
      });
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData();
      // Send recipients as comma-separated string for backend
      formData.append("to", validRecipients.join(","));
      formData.append("subject", emailSubject);
      formData.append("body", emailBody);

      emailFiles.forEach(file => formData.append("files", file));

      const res = await fetch("/api/email/direct-multi", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send email");
      }

      toast({
        title: "✅ Emails Sent Successfully",
        description: `${emailFiles.length} file(s) sent to ${validRecipients.length} recipient(s)`,
        className: "bg-emerald-900/90 border-emerald-500"
      });

      // Reset form
      setEmailFiles([]);
      setRecipients([""]);
      setEmailSubject("");
      setEmailBody("");
      if (fileInputRef.current) fileInputRef.current.value = "";

    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Failed to send",
        description: err.message || "Something went wrong.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const validRecipientCount = getValidRecipients().length;

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
            <button
              onClick={() => setActiveTab("vault")}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === "vault"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-3 h-3 md:w-4 md:h-4" />
                Secure Vault
              </div>
            </button>
            <button
              onClick={() => setActiveTab("email")}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === "email"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                Direct Email
              </div>
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === "live"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                Live Share
              </div>
            </button>
          </div>
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
              {/* Hero */}
              <div className="text-center mb-10 md:mb-16 px-2">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
                  Share files <span className="text-gradient">secretly</span>.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
                  End-to-end encrypted. Ephemeral. Anonymous.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground/70 max-w-xl mx-auto">
                  Your files are encrypted in your browser before they ever leave your device.
                </p>
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl mx-auto px-2">
                {/* Upload Card */}
                <Link href="/upload">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-6 md:p-8 cursor-pointer group h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:animate-pulse-glow transition-all shrink-0">
                          <Upload className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
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

                    <div className="flex items-center gap-2 text-primary font-mono font-bold uppercase tracking-wider group-hover:gap-4 transition-all text-sm md:text-base mt-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </motion.div>
                </Link>

                {/* Access Card */}
                <Link href="/access">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-6 md:p-8 cursor-pointer group h-full border-zinc-700 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 transition-all shrink-0">
                          <KeyRound className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-primary transition-colors" />
                        </div>
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

                    <div className="flex items-center gap-2 text-zinc-400 font-mono font-bold uppercase tracking-wider group-hover:text-primary group-hover:gap-4 transition-all text-sm md:text-base mt-2">
                      <span>Unlock Vault</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </motion.div>
                </Link>
              </div>
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

                    {/* Recipients Section - REDESIGNED */}
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-violet-400" />
                          Recipients ({validRecipientCount}/{MAX_RECIPIENTS})
                        </label>
                        {recipients.length < MAX_RECIPIENTS && (
                          <button
                            onClick={addRecipient}
                            className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            Add recipient
                          </button>
                        )}
                      </div>

                      <div className="space-y-2">
                        {recipients.map((recipient, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2"
                          >
                            <div className="relative flex-1">
                              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                              <Input
                                placeholder={idx === 0 ? "email@example.com (comma-separate for multiple)" : "another@example.com"}
                                value={recipient}
                                onChange={(e) => updateRecipient(idx, e.target.value)}
                                className="pl-10 h-11 bg-zinc-900/50 border-zinc-800 focus:border-violet-500/50 text-base rounded-xl"
                              />
                            </div>
                            {recipients.length > 1 && (
                              <button
                                onClick={() => removeRecipient(idx)}
                                className="p-2.5 hover:bg-rose-500/10 hover:text-rose-400 rounded-lg transition-colors border border-zinc-800"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-xs text-zinc-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        You can enter multiple emails separated by commas
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
          ) : (
            <motion.div
              key="live"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
              <div className="glass-card p-8 border-amber-500/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/30 shrink-0 animate-pulse-glow">
                    <Zap className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Live P2P Link</h3>
                    <p className="text-sm text-muted-foreground">Serverless WebRTC Transfer</p>
                  </div>
                </div>

                <div className="space-y-6 text-center py-8">
                  <p className="text-lg text-zinc-300">
                    Establish a direct encrypted tunnel between devices.
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Files are transferred directly via WebRTC. Maximum privacy, no server storage involved.
                    Requires both parties to be online.
                  </p>

                  <Link href="/live">
                    <Button className="w-full max-w-xs h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-500/20 mt-6 uppercase tracking-widest">
                      Start Live Session
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features Footer (Only on Vault Tab) */}
        {activeTab === "vault" && (
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
        )}
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
    </div>
  );
}
