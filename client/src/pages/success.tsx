import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Sparkles, AlertTriangle, Copy, Check, Key,
  Share2, Mail, Trash2, Smartphone, Monitor, Shield, ExternalLink, Loader2,
  Clock, Download, HardDrive
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetVault } from "@/hooks/use-vaults";
import { useToast } from "@/hooks/use-toast";

function CountdownTimer({ expiresAt }: { expiresAt: string }) {
  const [timeLeft, setTimeLeft] = useState<{ h: number, m: number, s: number } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const end = new Date(expiresAt).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }
      setTimeLeft({
        h: Math.floor(diff / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  if (!timeLeft) return <span className="text-zinc-500 font-mono">Expired</span>;

  return (
    <div className="flex items-center gap-2 font-mono text-sm md:text-base font-bold text-primary">
      <span className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded min-w-[2.5ch] text-center">{timeLeft.h.toString().padStart(2, '0')}</span>
      <span className="text-zinc-500">:</span>
      <span className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded min-w-[2.5ch] text-center">{timeLeft.m.toString().padStart(2, '0')}</span>
      <span className="text-zinc-500">:</span>
      <span className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded min-w-[2.5ch] text-center">{timeLeft.s.toString().padStart(2, '0')}</span>
    </div>
  );
}

export default function Success() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/success/:id");
  const [splitCode, setSplitCode] = useState("");
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'link' | 'email' | 'burn'>('link');
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleBurn = async () => {
    if (!params?.id) return;

    setIsBurning(true);
    try {
      const res = await fetch(`/api/vaults/${params.id}`, { method: 'DELETE' });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to delete");

      toast({
        title: "Vault Destroyed",
        description: "The vault has been securely erased.",
        className: "bg-emerald-950/50 border-emerald-500 text-emerald-400",
      });

      // Give user a moment to see the success message
      setTimeout(() => setLocation("/"), 1500);

    } catch (error) {
      toast({
        title: "Deletion Failed",
        description: "Could not destroy the vault. It may have already been deleted.",
        variant: "destructive"
      });
      setIsBurning(false);
    }
  };

  const vaultId = params?.id || "";
  const { data: vault } = useGetVault(vaultId);

  useEffect(() => {
    const hash = window.location.hash;
    const codeMatch = hash.match(/#code=(\d{6})/);
    if (codeMatch) {
      setSplitCode(codeMatch[1]);
    }
  }, []);

  const shareLink = `${window.location.origin}/v/${vaultId}#key=${vault?.wrappedKey || ''}`;

  const handleCopy = async (text: string, type: 'link' | 'code') => {
    await navigator.clipboard.writeText(text);
    if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
    toast({
      title: "Copied to clipboard",
      description: type === 'link' ? "Secure link ready to share." : "Access code ready to share.",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Secure Vault',
          text: 'Here is the comprehensive secure link to access the files.',
          url: shareLink
        });
      } catch (err) {
        console.error("Share failed", err);
      }
    } else {
      handleCopy(shareLink, 'link');
    }
  };

  const handleSendEmail = async () => {
    if (!email) return;
    setIsSending(true);
    try {
      await fetch(`/api/vaults/${vaultId}/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, fullCode: splitCode }),
      });
      toast({ title: "Email Sent", description: "Recipient notified securely." });
      setEmail("");
    } catch (e) {
      toast({ variant: "destructive", title: "Failed to send", description: "Could not send email." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col bg-background text-foreground selection:bg-primary/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-6 py-6 flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-bold font-mono tracking-tight text-lg leading-none">SECURE<span className="text-primary">VAULT</span></h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Encrypted Transfer</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.href = '/'}
          className="gap-2 border-zinc-800 hover:bg-zinc-900"
        >
          <ArrowLeft className="w-4 h-4" /> New Transfer
        </Button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 md:px-6 py-4 flex flex-col gap-8">

        {/* Hero Section: PIN & Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* PIN Display */}
          {splitCode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-6 md:p-8 flex flex-col items-center justify-center text-center border-l-4 border-l-primary relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 animate-pulse rounded-3xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Key className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Access PIN</span>
              </div>

              <div className="flex items-center gap-4 mb-4 scale-110">
                <div className="font-mono text-5xl md:text-6xl font-black tracking-widest text-white drop-shadow-[0_0_25px_rgba(16,185,129,0.3)] select-all">
                  {splitCode.slice(0, 3)}-{splitCode.slice(3, 6)}
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-zinc-500 hover:text-white hover:bg-white/5"
                onClick={() => handleCopy(splitCode, 'code')}
              >
                {copiedCode ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copiedCode ? "Copied" : "Copy Code"}
              </Button>
            </motion.div>
          )}

          {/* Dashboard / Usefull Insights */}
          {vault && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 flex flex-col justify-between gap-6"
            >
              {/* Timer */}
              <div className="flex items-center justify-between p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="p-2 bg-zinc-900 rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Expiration</p>
                    <p className="text-[10px] text-zinc-500">Auto-deletion timer</p>
                  </div>
                </div>
                <CountdownTimer expiresAt={vault.expiresAt} />
              </div>

              {/* Download Limit */}
              <div className="flex items-center justify-between p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="p-2 bg-zinc-900 rounded-lg">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Downloads</p>
                    <p className="text-[10px] text-zinc-500">Remaining limit</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xl font-bold text-white">
                    {vault.maxDownloads - vault.downloadCount}
                  </span>
                  <span className="text-zinc-600 text-sm font-mono mx-1">/</span>
                  <span className="text-zinc-600 text-sm font-mono">{vault.maxDownloads}</span>
                </div>
              </div>

              {/* File Size */}
              <div className="flex items-center justify-between p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="p-2 bg-zinc-900 rounded-lg">
                    <HardDrive className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Total Size</p>
                    <p className="text-[10px] text-zinc-500">{vault.files.length} Files</p>
                  </div>
                </div>
                <span className="font-mono text-base font-bold text-zinc-300">
                  {(vault.files.reduce((acc: any, f: any) => acc + f.totalSize, 0) / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>

            </motion.div>
          )}
        </div>


        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: QR (Dark Theme) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-1 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="bg-zinc-950/80 p-8 rounded-[22px] flex flex-col items-center text-center relative overflow-hidden group">

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scanline pointer-events-none" />

                <div className="relative bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl shadow-2xl mb-6 group-hover:border-primary/50 transition-colors duration-500">
                  {/* Clean Dark Themed QR */}
                  <QRCodeSVG
                    value={shareLink}
                    size={200}
                    level="H"
                    includeMargin={true}
                    bgColor="#09090b"  // zinc-950 background
                    fgColor="#10b981"  // emerald-500 (primary) modules
                    className="w-full h-full rounded-lg"
                  />
                  {/* Glowing Corners */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl opacity-50" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-xl opacity-50" />
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-xl opacity-50" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl opacity-50" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Scan to Download
                  </h2>
                  <p className="text-xs text-zinc-500 mx-auto">
                    Instant mobile access. No app required.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Actions */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card h-full min-h-[450px] flex flex-col"
            >
              {/* Tabs */}
              <div className="flex border-b border-white/5">
                <button
                  onClick={() => setActiveTab('link')}
                  className={`flex-1 py-5 text-sm font-medium flex items-center justify-center gap-2 transition-all ${activeTab === 'link' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}`}
                >
                  <Share2 className="w-4 h-4" /> Share Link
                </button>
                <button
                  onClick={() => setActiveTab('email')}
                  className={`flex-1 py-5 text-sm font-medium flex items-center justify-center gap-2 transition-all ${activeTab === 'email' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}`}
                >
                  <Mail className="w-4 h-4" /> Email
                </button>
                <button
                  onClick={() => setActiveTab('burn')}
                  className={`flex-1 py-5 text-sm font-medium flex items-center justify-center gap-2 transition-all ${activeTab === 'burn' ? 'text-rose-500 border-b-2 border-rose-500 bg-rose-500/5' : 'text-zinc-500 hover:text-rose-400 hover:bg-rose-900/10'}`}
                >
                  <Trash2 className="w-4 h-4" /> Burn
                </button>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'link' && (
                    <motion.div
                      key="link"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 flex flex-col justify-center space-y-8"
                    >
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight">Ready to Share</h3>
                        <p className="text-zinc-400">Copy the secure link below or use the share sheet.</p>
                      </div>

                      <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex items-center gap-4 group hover:border-primary/30 transition-colors">
                        <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <ExternalLink className="w-6 h-6 text-zinc-500 group-hover:text-primary" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Encrypted Link</p>
                          <p className="text-sm md:text-base font-mono text-zinc-300 truncate selection:bg-primary/30">{shareLink}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button size="lg" className="cyber-btn w-full h-14 text-base" onClick={() => handleCopy(shareLink, 'link')}>
                          {copiedLink ? "COPIED!" : "COPY LINK"}
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full h-14 text-base border-zinc-700 bg-zinc-800 hover:bg-zinc-700" onClick={handleShare}>
                          OPEN SHARE SHEET
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'email' && (
                    <motion.div
                      key="email"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 flex flex-col justify-center space-y-8"
                    >
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight">Secure Dispatch</h3>
                        <p className="text-zinc-400">Send an automated email notification with access details.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-bold text-zinc-500 ml-1">Recipient Email</label>
                          <Input
                            placeholder="recipient@example.com"
                            className="h-14 text-lg bg-zinc-950 border-zinc-800 focus:ring-primary/20"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <Button size="lg" className="cyber-btn w-full h-14 text-base" onClick={handleSendEmail} disabled={isSending}>
                          {isSending ? <Loader2 className="w-6 h-6 animate-spin" /> : "SEND NOTIFICATION"}
                        </Button>
                      </div>

                      <div className="py-4 px-6 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-primary/80 leading-relaxed">
                          Security Note: We only send the unique access link and code. Actual files are never attached to emails, ensuring zero-knowledge privacy.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'burn' && (
                    <motion.div
                      key="burn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 flex flex-col justify-center space-y-8 text-center"
                    >
                      <div className="w-24 h-24 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                        <Trash2 className="w-10 h-10 text-rose-500" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-rose-500">Initiate Self-Destruct</h3>
                        <p className="text-zinc-400 max-w-md mx-auto">
                          This will immediately purge all encryption keys, metadata, and file chunks from the server.
                        </p>
                      </div>

                      <div className="p-4 bg-rose-950/30 border border-rose-900/50 rounded-xl">
                        <p className="text-sm text-rose-300 font-bold">WARNING: THIS ACTION CANNOT BE UNDONE.</p>
                      </div>

                      <Button
                        size="lg"
                        variant="destructive"
                        className="w-full h-14 text-base bg-rose-600 hover:bg-rose-700 font-bold tracking-wider"
                        onClick={handleBurn}
                        disabled={isBurning}
                      >
                        {isBurning ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            DESTROYING...
                          </>
                        ) : "CONFIRM DESTRUCTION"}

                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

    </div>
  );
}
