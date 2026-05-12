import { useEffect, useState, useRef } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Copy, Check, Key, Share2, Mail, Trash2, Shield,
  Clock, Download, HardDrive, CheckCircle2, Send, AlertTriangle,
  Flame, Layers, File, Timer, ExternalLink, Gauge, Activity,
  ArrowRight, Smartphone, Loader2,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetVault } from "@/hooks/use-vaults";
import { useToast } from "@/hooks/use-toast";
import { useVaultHistory } from "@/hooks/useVaultHistory";
import { getVaultIdentity } from "@/lib/cipherAvatar";
import { VaultDestruction } from "@/components/VaultDestruction";
import { cn } from "@/lib/utils";
import { Sparkles, LayoutGrid, Cpu, Globe, Rocket, ShieldCheck } from "lucide-react";

const formatBytes = (b: number) => {
  if (!b) return "0 B";
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
};

const formatTimeLeft = (expiresAt: string) => {
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return "Expired";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 24) return `${Math.floor(h / 24)}d ${h % 24}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
};

export default function SuccessPage() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/success/:id");
  const [splitCode, setSplitCode] = useState("");
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"link" | "email" | "burn">("link");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDestruction, setShowDestruction] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showSpamAlert, setShowSpamAlert] = useState(false);
  const { addRecord } = useVaultHistory();
  const historySavedRef = useRef(false);

  const vaultId = params?.id || "";
  const { data: vault } = useGetVault(vaultId);
  const identity = vault ? getVaultIdentity(vault.shortCode) : null;

  useEffect(() => {
    const hash = window.location.hash;
    const hashParams = new URLSearchParams(hash.replace("#", ""));
    const code = hashParams.get("code");
    if (code) setSplitCode(code);
  }, []);

  useEffect(() => {
    if (vault && splitCode && !historySavedRef.current) {
      historySavedRef.current = true;
      addRecord({
        type: "vault",
        action: "sent",
        accessCode: splitCode,
        vaultId: vault.id,
        fileNames: vault.files?.map((f: any) => f.fileId?.slice(0, 6) || "File") || [],
        fileCount: vault.files?.length || 0,
        totalSize: vault.files?.reduce((acc: number, f: any) => acc + (f.totalSize || 0), 0) || 0,
        hasClipboard: false,
        createdAt: Date.now(),
        expiresAt: new Date(vault.expiresAt).getTime(),
        maxDownloads: vault.maxDownloads || 0,
        downloadCount: vault.downloadCount || 0,
      });
    }
  }, [vault, splitCode]);

  useEffect(() => {
    if (vault && vault.maxDownloads > 0 && vault.downloadCount >= vault.maxDownloads && !showDestruction) {
      const timer = setTimeout(() => setShowDestruction(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [vault, showDestruction]);

  const shareLink = `${window.location.origin}/access#code=${splitCode}`;

  const handleCopy = async (text: string, type: "link" | "code") => {
    await navigator.clipboard.writeText(text);
    if (type === "link") { setCopiedLink(true); setTimeout(() => setCopiedLink(false), 2000); }
    else { setCopiedCode(true); setTimeout(() => setCopiedCode(false), 2000); }
    toast({ title: "Copied" });
  };

  const handleSendEmail = async () => {
    if (!email) return;
    setIsSending(true);
    try {
      const response = await fetch(`/api/vaults/${vaultId}/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email.trim().toLowerCase(), fullCode: splitCode }),
      });
      if (response.ok) setShowSpamAlert(true);
    } catch { toast({ variant: "destructive", title: "Failed to send email" }); }
    finally { setIsSending(false); }
  };

  const handleBurn = async () => {
    if (!params?.id) return;
    setIsDeleting(true);
    try {
      await fetch(`/api/vaults/${params.id}`, { method: "DELETE" });
      setShowDestruction(true);
    } catch { setIsDeleting(false); toast({ variant: "destructive", title: "Failed to burn vault" }); }
  };

  const handleDestructionComplete = () => {
    setTimeout(() => setLocation("/"), 2500);
  };

  const files = vault?.files || [];
  const vaultMax = vault?.maxDownloads || 0;
  const vaultUsed = vault?.downloadCount || 0;
  const vaultRemaining = Math.max(0, vaultMax - vaultUsed);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Background with dynamic orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#020408]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/[0.05] blur-[140px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary/[0.03] blur-[140px] rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }} />
        
        {/* Modern grid background */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }} 
        />
        
        {/* Floating particles (CSS only) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {[...Array(15)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute bg-primary rounded-full blur-[1px]"
                    style={{
                        width: Math.random() * 3 + 'px',
                        height: Math.random() * 3 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                        animationDelay: `-${Math.random() * 10}s`
                    }}
                />
            ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/[0.05] bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 group-hover:border-primary/40 transition-all">
                <Shield className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-sm font-black text-white tracking-tight uppercase italic">Vault<span className="text-primary">Bridge</span></span>
            </div>
          </Link>
          <button onClick={() => setLocation("/")} className="btn-ghost px-3 py-1.5 text-xs">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </button>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 pt-8 sm:pt-12 pb-16">
        {/* Success Header & Identity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 15 }}
            className="inline-flex flex-col items-center mb-8"
          >
            <div className={cn(
              "w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_0_50px_rgba(45,212,191,0.2)] mb-5 relative group transition-all duration-500 hover:rotate-6",
              "bg-zinc-950/50 backdrop-blur-2xl border border-white/10 ring-4 ring-white/[0.02]"
            )}>
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 rounded-[2.5rem]", identity?.color)} />
              <div className="relative z-10 filter drop-shadow-lg">{identity?.icon || "🔒"}</div>
              
              {/* Spinning ring */}
              <div className="absolute -inset-1 border border-primary/20 rounded-[2.7rem] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-black text-primary tracking-[0.5em] uppercase px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    {identity?.name || "Secured"} Node
                </span>
                <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-2" />
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 leading-tight">
            Vault <span className="text-primary glitch-text" data-text="Encrypted">Encrypted</span>
          </h1>
          <p className="text-sm text-zinc-500 font-medium max-w-md mx-auto leading-relaxed">
            Your files have been split into encrypted fragments and distributed across our secure nodes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Main Dashboard Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent"
          >
            <div className="bg-[#0c111a]/95 backdrop-blur-3xl rounded-[2.4rem] p-6 sm:p-8 overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
              
              {/* Access Code Block */}
              <div className="text-center relative z-10 mb-10">
                <p className="text-[10px] font-black text-zinc-500 mb-8 uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                    Security Clearance Key
                </p>
                <div className="relative inline-block group/code">
                    <button
                      onClick={() => handleCopy(splitCode, "code")}
                      className="text-5xl sm:text-7xl font-mono font-black text-white tracking-[0.2em] transition-all active:scale-[0.98] cursor-pointer select-all relative z-10 hover:text-primary"
                    >
                      {splitCode.slice(0, 3)}<span className="text-primary/30 mx-2">-</span>{splitCode.slice(3)}
                    </button>
                    <div className="absolute -inset-8 bg-primary/20 blur-[40px] opacity-0 group-hover/code:opacity-100 transition-opacity -z-10" />
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-2">
                  {copiedCode ? (
                    <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Key Copied</span>
                    </motion.div>
                  ) : (
                    <span className="text-[11px] font-black text-zinc-600 uppercase tracking-widest animate-pulse flex items-center gap-2">
                        Tap code to duplicate <Copy className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>

              {/* URL & QR */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/30 transition-all group/link">
                  <Globe className="w-4 h-4 text-zinc-600 group-hover/link:text-primary transition-colors shrink-0" />
                  <p className="flex-1 text-[11px] text-zinc-500 font-mono truncate tracking-tight">{shareLink}</p>
                  <button 
                    onClick={() => handleCopy(shareLink, "link")} 
                    className="h-10 px-6 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] active:scale-95 transition-all"
                  >
                    {copiedLink ? "Synced" : "Copy_Link"}
                  </button>
                </div>

                <div className="flex items-center justify-center py-4">
                  <div className="relative group/qr">
                    <div className="absolute -inset-6 bg-primary/5 blur-2xl opacity-0 group-hover/qr:opacity-100 transition-all duration-700" />
                    <div className="relative z-10 p-4 bg-white rounded-[2rem] shadow-2xl transition-transform hover:scale-105 duration-500">
                        <QRCodeSVG level="H" value={shareLink} size={180} bgColor="#ffffff" fgColor="#000000" />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover/qr:opacity-100 transition-opacity">
                         <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">Direct Handshake Protocol</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Telemetry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-zinc-950/50 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 group hover:border-primary/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Gauge className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Vault Health</h3>
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase">Active</span>
                </div>
                <div className="space-y-4">
                  <div className="h-1.5 rounded-full bg-zinc-900 border border-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: `${vaultMax > 0 ? (vaultUsed / vaultMax) * 100 : 0}%` }} 
                      className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    <span>Downloads used</span>
                    <span className="text-zinc-300 font-mono">{vaultUsed} / {vaultMax}</span>
                  </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-950/50 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 group hover:border-primary/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Clock className="w-4 h-4 text-amber-500" />
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Expiraton</h3>
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-2xl font-mono font-black text-white tracking-tighter">
                            {vault ? formatTimeLeft(vault.expiresAt) : "..."}
                        </p>
                        <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] mt-1">Time remaining</p>
                    </div>
                    <div className="w-10 h-10 border-2 border-amber-500/10 border-t-amber-500 rounded-full animate-spin-slow" />
                </div>
            </motion.div>
          </div>

          {/* Fragments List */}
          {files.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }} 
              className="bg-zinc-950/50 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                 <LayoutGrid className="w-4 h-4 text-zinc-600" />
                 <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Object Manifest ({files.length})</h3>
              </div>
              <div className="grid gap-3">
                {files.map((f: any, i: number) => {
                  const exhausted = (f.maxDownloads || vaultMax) <= (f.downloadCount || 0);
                  return (
                    <div key={f.fileId || i} className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/[0.03] hover:border-white/10 transition-all group/file">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover/file:border-primary/30 transition-all">
                        {exhausted ? <Flame className="w-5 h-5 text-red-500" /> : <Rocket className="w-5 h-5 text-zinc-600 group-hover/file:text-primary transition-colors" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-zinc-200 truncate uppercase tracking-tight">{f.fileId?.slice(0, 20) || `Object_${i + 1}`}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{formatBytes(f.totalSize || f.size || 0)}</span>
                            <span className="w-1 h-1 rounded-full bg-zinc-800" />
                            <span className="text-[9px] font-black text-primary uppercase tracking-widest">Verified</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-mono font-black text-zinc-400">{Math.max(0, (f.maxDownloads || vaultMax) - (f.downloadCount || 0))}</p>
                        <p className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Left</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Destructive Actions */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pt-6">
            <button 
              onClick={handleBurn} 
              disabled={isDeleting} 
              className="w-full group relative p-6 rounded-[2.5rem] border border-red-500/10 bg-red-500/[0.02] hover:bg-red-500/[0.08] hover:border-red-500/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-all">
                    <Flame className="w-7 h-7 text-red-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-black text-red-500 uppercase italic tracking-tighter">Self-Destruct Sequence</h4>
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mt-1">Irreversible zero-trace elimination</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-red-500/30 group-hover:text-red-500 group-hover:translate-x-2 transition-all" />
              </div>
            </button>
          </motion.div>
        </div>
      </main>

      {/* Destruction overlay */}
      <VaultDestruction
        isActive={showDestruction}
        vaultCode={splitCode}
        fileCount={files.length}
        totalSize={files.reduce((a: number, f: any) => a + (f.totalSize || 0), 0)}
        onComplete={handleDestructionComplete}
      />

      {/* Spam dialog */}
      <Dialog open={showSpamAlert} onOpenChange={setShowSpamAlert}>
        <DialogContent className="bg-background border border-white/[0.08] rounded-2xl max-w-sm p-6">
          <DialogHeader>
            <DialogTitle className="text-white text-base">Email sent</DialogTitle>
            <DialogDescription className="text-zinc-400 text-xs">Check spam folder if not received.</DialogDescription>
          </DialogHeader>
          <button onClick={() => setShowSpamAlert(false)} className="btn-primary w-full py-2.5 text-sm rounded-xl mt-2">OK</button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
