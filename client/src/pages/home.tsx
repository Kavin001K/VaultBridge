import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, Sparkles, Mail, Send, Paperclip, FileText, CheckCircle2, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"vault" | "email">("vault");
  const [emailFile, setEmailFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Email form state
  const [emailTo, setEmailTo] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Max file size is 10MB for direct email.",
        });
        return;
      }
      setEmailFile(file);
    }
  };

  const handleSendEmail = async () => {
    if (!emailFile || !emailTo || !emailSubject || !emailBody) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill in all fields and attach a file.",
      });
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData();
      formData.append("to", emailTo);
      formData.append("subject", emailSubject);
      formData.append("body", emailBody);
      formData.append("file", emailFile);

      const res = await fetch("/api/email/direct", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send email");
      }

      toast({
        title: "Email Sent Successfully",
        description: `File sent to ${emailTo}`,
      });

      // Reset form
      setEmailFile(null);
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
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 animate-pulse-glow">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-mono tracking-tight">
                VAULT<span className="text-primary">BRIDGE</span>
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Secure Transfer Protocol
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase">System Online</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-12">
        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 flex items-center">
            <button
              onClick={() => setActiveTab("vault")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "vault"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Secure Vault
              </div>
            </button>
            <button
              onClick={() => setActiveTab("email")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "email"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
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
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                  Share files <span className="text-gradient">secretly</span>.
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                  End-to-end encrypted. Ephemeral. Anonymous.
                </p>
                <p className="text-lg text-muted-foreground/70 max-w-xl mx-auto">
                  Your files are encrypted in your browser before they ever leave your device.
                  We never see your files or encryption keys.
                </p>
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                {/* Upload Card */}
                <Link href="/upload">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-8 cursor-pointer group h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:animate-pulse-glow transition-all">
                        <Upload className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Upload Files</h3>
                        <p className="text-sm text-muted-foreground">Create a secure vault</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      Drag & drop files, set expiration and download limits,
                      then share the encrypted link.
                    </p>

                    <div className="flex items-center gap-2 text-primary font-mono font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </Link>

                {/* Access Card */}
                <Link href="/access">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-8 cursor-pointer group h-full border-zinc-700"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 transition-all">
                        <KeyRound className="w-7 h-7 text-zinc-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Access Vault</h3>
                        <p className="text-sm text-muted-foreground">Enter your 6-digit code</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      Have an access code? Enter it to unlock and download
                      encrypted files securely.
                    </p>

                    <div className="flex items-center gap-2 text-zinc-400 font-mono font-bold uppercase tracking-wider group-hover:text-primary group-hover:gap-4 transition-all">
                      <span>Unlock Vault</span>
                      <ArrowRight className="w-5 h-5" />
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
              <div className="glass-card p-8 border-primary/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                    <Send className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Direct Email Relay</h3>
                    <p className="text-sm text-muted-foreground">Transient "Hot Potato" Transfer</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* File Upload Area */}
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${emailFile ? "border-primary bg-primary/5" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50"
                      }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                    {emailFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div className="text-left">
                          <p className="font-medium">{emailFile.name}</p>
                          <p className="text-xs text-muted-foreground">{(emailFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-4 h-8" onClick={(e) => {
                          e.stopPropagation();
                          setEmailFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}>Remove</Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Paperclip className="w-8 h-8 text-muted-foreground mx-auto" />
                        <p className="text-sm font-medium">Click to attach a file</p>
                        <p className="text-xs text-muted-foreground">Max 10MB • Held only in RAM</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Recipient Email</label>
                      <Input
                        placeholder="friend@example.com"
                        value={emailTo}
                        onChange={(e) => setEmailTo(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input
                        placeholder="Here is the file..."
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="I'm sending you this securely..."
                        className="min-h-[100px]"
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full h-12 text-base"
                    size="lg"
                    onClick={handleSendEmail}
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Relaying File...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Direct Email
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                    <AlertCircle className="w-4 h-4 text-indigo-400" />
                    <span>File flows through server memory only. Never saved to disk/DB.</span>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl"
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
                className="text-center p-6"
              >
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          🔐 Zero-Knowledge • End-to-End Encrypted • Privacy First
        </p>
      </footer>
    </div>
  );
}
