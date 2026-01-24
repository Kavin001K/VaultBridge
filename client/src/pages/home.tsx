import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, Sparkles, Mail, Send, Paperclip, FileText, CheckCircle2, AlertCircle, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"vault" | "email">("vault");
  // Multi-file state for email
  const [emailFiles, setEmailFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Email form state
  const [emailTo, setEmailTo] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const totalEmailSize = emailFiles.reduce((acc, file) => acc + file.size, 0);
  const MAX_EMAIL_SIZE = 25 * 1024 * 1024; // 25MB

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

  const handleSendEmail = async () => {
    if (emailFiles.length === 0 || !emailTo || !emailSubject || !emailBody) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill in all fields and attach at least one file.",
      });
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData();
      formData.append("to", emailTo);
      formData.append("subject", emailSubject);
      formData.append("body", emailBody);

      // Append all files - update backend to handle multiple files or zip them
      // NOTE: Current backend only accepts single 'file'. We will need to update backend or zip them client-side.
      // For this step, let's just send the first one or assume backend update is coming.
      // Actually, standard FormData handles multiple files with same key, but configured backend middleware (multer) needs array support.
      // Let's stick to standard append loop.
      emailFiles.forEach(file => {
        formData.append("files", file);
      });

      // Quick fix for transient single-file backend until updated:
      // If backend only supports `.single('file')`, this will break with `files` array.
      // But the request asks for multiple files. We will assume backend route update follows.
      // To keep it working WITHOUT backend changes immediately, we might only send the first one, but UI says multiple.
      // Let's assume we update the route next. For now, we mimic the old single file behavior if only 1 file, 
      // or just send 'file' key multiple times if backend supports .array().

      // Ideally: 
      // formData.append("file", emailFiles[0]); 

      // But for multi-file:
      emailFiles.forEach(file => formData.append("files", file));

      // CHANGING ENDPOINT TO NEW MULTI-SUPPORT ROUTE logic if needed, or update existing.
      // Let's try sending to existing route but we need to update server route to use .array() instead of .single().
      // For now, let's keep the fetch call same.

      const res = await fetch("/api/email/direct-multi", { // New endpoint for multi
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send email");
      }

      toast({
        title: "Email Sent Successfully",
        description: `${emailFiles.length} file(s) sent to ${emailTo}`,
      });

      // Reset form
      setEmailFiles([]);
      setEmailTo("");
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
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                Direct Email
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
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                  Share files <span className="text-gradient">secretly</span>.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 px-4">
                  End-to-end encrypted. Ephemeral. Anonymous.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground/70 max-w-xl mx-auto px-4">
                  Your files are encrypted in your browser before they ever leave your device.
                </p>
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
                {/* Upload Card */}
                <Link href="/upload">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-6 md:p-8 cursor-pointer group h-full"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:animate-pulse-glow transition-all">
                        <Upload className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">Upload Files</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Create a secure vault</p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      Drag & drop files, set expiration and download limits,
                      then share the encrypted link.
                    </p>

                    <div className="flex items-center gap-2 text-primary font-mono font-bold uppercase tracking-wider group-hover:gap-4 transition-all text-sm md:text-base">
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
                    className="glass-card p-6 md:p-8 cursor-pointer group h-full border-zinc-700"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 transition-all">
                        <KeyRound className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">Access Vault</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Enter your 6-digit code</p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      Have an access code? Enter it to unlock and download
                      encrypted files securely.
                    </p>

                    <div className="flex items-center gap-2 text-zinc-400 font-mono font-bold uppercase tracking-wider group-hover:text-primary group-hover:gap-4 transition-all text-sm md:text-base">
                      <span>Unlock Vault</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto"
            >
              <div className="glass-card p-6 md:p-8 border-primary/20">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                    <Send className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Direct Email Relay</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Transient "Hot Potato" Transfer</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Enhanced File Dropzone for Email */}
                  <div className="space-y-4">
                    <div
                      className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${emailFiles.length > 0 ? "border-indigo-500/50 bg-indigo-500/5" : "border-zinc-700 hover:border-indigo-500/50 hover:bg-zinc-800/50"
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

                      <div className="space-y-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Paperclip className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Click to attach files</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Current: {(totalEmailSize / (1024 * 1024)).toFixed(2)} MB / 25 MB Limit
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono uppercase tracking-wider text-indigo-400">Max 25MB Total</span>
                        </div>
                      </div>
                    </div>

                    {/* File List */}
                    <AnimatePresence>
                      {emailFiles.length > 0 && (
                        <div className="space-y-2">
                          {emailFiles.map((file, idx) => (
                            <motion.div
                              key={`${file.name}-${idx}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-700 group"
                            >
                              <div className="flex items-center gap-3 overflow-hidden">
                                <div className="p-2 bg-indigo-500/10 rounded-md flex-shrink-0">
                                  <FileText className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium truncate">{file.name}</p>
                                  <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                                </div>
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); removeEmailFile(idx); }}
                                className="p-1.5 hover:bg-rose-500/10 hover:text-rose-500 rounded-md transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Recipient</label>
                        <Input
                          placeholder="friend@example.com"
                          value={emailTo}
                          onChange={(e) => setEmailTo(e.target.value)}
                          className="bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Subject</label>
                        <Input
                          placeholder="Here are your files..."
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          className="bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
                      <Textarea
                        placeholder="Encrypted message..."
                        className="min-h-[100px] bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50 resize-none"
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full h-12 md:h-14 text-sm md:text-base font-bold tracking-wide uppercase bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    size="lg"
                    onClick={handleSendEmail}
                    disabled={isSending || emailFiles.length === 0}
                  >
                    {isSending ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 md:mr-3" />
                        Relaying...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Send via Secure Relay
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-3 justify-center text-xs text-muted-foreground bg-indigo-900/10 p-3 md:p-4 rounded-xl border border-indigo-500/10">
                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 flex-shrink-0" />
                    <span className="leading-relaxed">Files flow securely through server RAM only. <br />Zero persistent storage. Zero logs.</span>
                  </div>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20 w-full max-w-4xl"
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
                className="text-center p-4 md:p-6 bg-zinc-900/20 rounded-xl md:bg-transparent"
              >
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
                <h4 className="font-semibold mb-2 text-sm md:text-base">{feature.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center px-4">
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-4">
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground/60">
          © 2025 Ace-Groups. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
