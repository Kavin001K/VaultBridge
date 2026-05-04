import { useEffect, useState, useRef } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Sparkles, AlertTriangle, Copy, Check, Key,
  Share2, Mail, Trash2, Smartphone, Monitor, Shield, ExternalLink, Loader2,
  Clock, Download, HardDrive, Timer, Zap, Activity, ChevronRight, Binary, Cpu, CheckCircle2
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGetVault } from "@/hooks/use-vaults";
import { useToast } from "@/hooks/use-toast";
import { useVaultHistory } from "@/hooks/useVaultHistory";
import { getVaultIdentity } from "@/lib/cipherAvatar";

export default function SuccessPage() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/success/:id");
  const [splitCode, setSplitCode] = useState("");
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'link' | 'email' | 'burn'>('link');
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBurned, setIsBurned] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [uploadStats, setUploadStats] = useState<{ time: number, speed: number } | null>(null);
  const [showSpamAlert, setShowSpamAlert] = useState(false);
  const { addRecord, updateRecord } = useVaultHistory();
  const historySavedRef = useRef(false);

  const vaultId = params?.id || "";
  const { data: vault } = useGetVault(vaultId);
  const identity = vault ? getVaultIdentity(vault.shortCode) : null;

  useEffect(() => {
    const hash = window.location.hash;
    const hashParams = new URLSearchParams(hash.replace("#", ""));
    const code = hashParams.get("code");
    if (code) setSplitCode(code);

    const speed = hashParams.get("speed");
    if (speed) {
      setUploadStats({
        time: 0,
        speed: parseInt(speed)
      });
    }
  }, []);

  useEffect(() => {
    if (vault && splitCode && !historySavedRef.current) {
      historySavedRef.current = true;
      const fileNames = vault.files?.map((f: any) => f.originalName || f.fileName || `File ${f.fileId?.slice(0, 6)}`) || [];
      const totalSize = vault.files?.reduce((acc: number, f: any) => acc + (f.totalSize || f.size || 0), 0) || 0;

      addRecord({
        type: vault.encryptedClipboardText ? "clipboard" : "vault",
        action: "sent",
        accessCode: splitCode,
        vaultId: vault.id,
        fileNames,
        fileCount: vault.files?.length || 0,
        totalSize,
        hasClipboard: !!vault.encryptedClipboardText,
        createdAt: Date.now(),
        expiresAt: new Date(vault.expiresAt).getTime(),
        maxDownloads: vault.maxDownloads || 0,
        downloadCount: vault.downloadCount || 0,
      });
    }
  }, [vault, splitCode, addRecord]);

  const shareLink = `${window.location.origin}/access#code=${splitCode}`;

  const handleCopy = async (text: string, type: 'link' | 'code') => {
    await navigator.clipboard.writeText(text);
    if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
    toast({ title: "COPIED_TO_CLIPBOARD", description: type === 'link' ? "SECURE_LINK_READY" : "ACCESS_CODE_READY" });
  };

  const handleBurn = async () => {
    if (!params?.id) return;
    setIsDeleting(true);
    try {
      await fetch(`/api/vaults/${params.id}`, { method: 'DELETE' });
      setIsBurned(true);
      toast({ title: "SELF_DESTRUCT_INITIATED", description: "Vaporizing data from all nodes..." });
      setTimeout(() => setLocation("/"), 2500);
    } catch (error) {
      setIsDeleting(false);
    }
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
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className={`fixed inset-0 bg-primary/5 blur-[150px] transition-opacity duration-1000 ${isBurned ? 'opacity-0' : 'opacity-100'}`} />
      <div className="scanline pointer-events-none opacity-10" />

      {/* Header */}
      <header className="relative w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 bg-zinc-950 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-base font-black font-mono tracking-widest text-white">VAULT<span className="text-primary">BRIDGE</span></h1>
            </div>
          </Link>
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="rounded-full text-zinc-400 hover:text-white hover:bg-white/5 px-4 text-[10px] font-black tracking-widest gap-2">
            <ArrowLeft className="w-4 h-4" /> NEW_SESSION
          </Button>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 pt-12 sm:pt-16 pb-20">
        
        {/* Status Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" /> VAULT_ESTABLISHED_SUCCESSFULLY
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tighter text-white uppercase italic">
            Transmission <span className="text-primary">Complete</span>
          </h2>
          <p className="text-zinc-500 text-sm font-medium">Your data is now fragmented across the secure cloud. Protocol: Zero-Knowledge.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Security Identity & QR */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 text-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Binary className="w-12 h-12 text-primary" />
               </div>
               
               {identity && (
                 <div className="mb-8 flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${identity.color} flex items-center justify-center text-4xl shadow-2xl mb-4 border border-white/10 group-hover:scale-105 transition-transform duration-500`}>
                      {identity.icon}
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-white uppercase italic">Vault {identity.name}</h3>
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-1">SECURE_NODE_ID</span>
                 </div>
               )}

               <div className="relative aspect-square w-full max-w-[200px] mx-auto bg-zinc-950 p-4 rounded-3xl border border-white/5 shadow-2xl group-hover:border-primary/30 transition-colors">
                  <QRCodeSVG
                    value={shareLink}
                    size={200}
                    level="H"
                    includeMargin={true}
                    bgColor="transparent"
                    fgColor="#10b981"
                    className="w-full h-full"
                  />
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
               </div>
               <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mt-6">Scan for instant mobile access</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-center">
                  <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1">Fragments</span>
                  <span className="text-lg font-mono font-black text-white">{vault?.files?.length || 0}</span>
               </div>
               <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-center">
                  <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1">Efficiency</span>
                  <span className="text-lg font-mono font-black text-primary">99.9%</span>
               </div>
            </div>
          </div>

          {/* Right: Main Access Panel */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card flex flex-col h-full overflow-hidden">
               {/* Access Tabs */}
               <div className="flex border-b border-white/5">
                  {(['link', 'email', 'burn'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-5 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${
                        activeTab === tab 
                          ? (tab === 'burn' ? 'text-red-500 border-b-2 border-red-500 bg-red-500/5' : 'text-primary border-b-2 border-primary bg-primary/5')
                          : 'text-zinc-500 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {tab === 'link' && <Share2 className="w-3.5 h-3.5" />}
                      {tab === 'email' && <Mail className="w-3.5 h-3.5" />}
                      {tab === 'burn' && <Trash2 className="w-3.5 h-3.5" />}
                      {tab}
                    </button>
                  ))}
               </div>

               <div className="p-8 sm:p-12 flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {activeTab === 'link' && (
                      <motion.div key="link" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                         <div className="text-center">
                            <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">Access Key Terminal</h3>
                            <p className="text-zinc-500 text-xs font-medium">Distribute the secure link to authorized recipients only.</p>
                         </div>

                         <div className="space-y-6">
                            <div className="bg-zinc-950 p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                               <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4">EPHEMERAL_ACCESS_CODE</span>
                               <div className="text-4xl sm:text-5xl font-mono font-black text-white tracking-[0.4em] drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-4">
                                  {splitCode.slice(0,3)}<span className="text-primary/50 font-sans mx-2">·</span>{splitCode.slice(3)}
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => handleCopy(splitCode, 'code')} className="text-[10px] font-black text-primary hover:bg-primary/10 rounded-full h-8 px-6">
                                   {copiedCode ? "CODE_COPIED" : "COPY_CODE"}
                                </Button>
                            </div>

                            <div className="relative group">
                               <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur opacity-30 group-hover:opacity-100 transition duration-1000" />
                               <div className="relative bg-zinc-950 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                                  <div className="p-3 bg-zinc-900 rounded-xl text-zinc-500 group-hover:text-primary transition-colors">
                                     <ExternalLink className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 overflow-hidden">
                                     <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-0.5">Secure Transfer URI</span>
                                     <p className="text-xs font-mono text-zinc-400 truncate">{shareLink}</p>
                                  </div>
                                  <Button onClick={() => handleCopy(shareLink, 'link')} className="rounded-xl h-10 px-6 text-[10px] font-black bg-primary text-primary-foreground uppercase tracking-widest">
                                     {copiedLink ? "COPIED" : "COPY_URI"}
                                  </Button>
                               </div>
                            </div>
                         </div>
                      </motion.div>
                    )}

                    {activeTab === 'email' && (
                      <motion.div key="email" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                         <div className="text-center">
                            <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">Secure Dispatch</h3>
                            <p className="text-zinc-500 text-xs font-medium">Encrypt and notify recipient via automated SMTP relay.</p>
                         </div>
                         <div className="space-y-4">
                            <div className="relative">
                               <Input 
                                 placeholder="recipient@secure.node" 
                                 value={email}
                                 onChange={e => setEmail(e.target.value)}
                                 className="h-16 bg-zinc-950 border-white/5 rounded-2xl px-6 text-lg font-mono focus:border-primary/50 transition-all shadow-2xl"
                               />
                               <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-700" />
                            </div>
                            <Button onClick={handleSendEmail} disabled={isSending} className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform">
                               {isSending ? <Loader2 className="w-6 h-6 animate-spin" /> : "TRANSMIT NOTIFICATION"}
                            </Button>
                         </div>
                         <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start gap-4">
                            <Shield className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <p className="text-[10px] font-bold text-primary/70 leading-relaxed uppercase tracking-widest">
                               Metadata Protection: Actual file fragments are never transmitted via email. Only secure handshake tokens are provided.
                            </p>
                         </div>
                      </motion.div>
                    )}

                    {activeTab === 'burn' && (
                      <motion.div key="burn" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8 text-center">
                         <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                            <Trash2 className="w-10 h-10 text-red-500" />
                         </div>
                         <div>
                            <h3 className="text-2xl font-black text-red-500 uppercase italic tracking-tight mb-2">Protocol: Self-Destruct</h3>
                            <p className="text-zinc-500 text-xs font-medium">Irreversible vaporization of all cryptographic fragments from the network.</p>
                         </div>
                         <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-4">
                            <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Data will be unrecoverable across all nodes after activation.</p>
                         </div>
                         <Button onClick={handleBurn} disabled={isDeleting} variant="destructive" className="w-full h-16 rounded-2xl bg-red-600 hover:bg-red-700 font-black uppercase tracking-[0.2em] shadow-lg shadow-red-900/20">
                            {isDeleting ? <Loader2 className="w-6 h-6 animate-spin" /> : "CONFIRM_SELF_DESTRUCT"}
                         </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Spam Alert Dialog */}
      <Dialog open={showSpamAlert} onOpenChange={setShowSpamAlert}>
        <DialogContent className="bg-zinc-950 border border-white/5 text-zinc-100 p-0 overflow-hidden rounded-3xl max-w-sm">
          <div className="h-2 bg-primary animate-pulse" />
          <div className="p-8 text-center space-y-6">
             <div className="w-16 h-16 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-primary" />
             </div>
             <div>
                <h3 className="text-xl font-black uppercase italic tracking-tight text-white mb-2">Dispatch Logged</h3>
                <p className="text-zinc-500 text-xs font-medium">Notification has been transmitted through our secure SMTP relay.</p>
             </div>
             <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 text-left">
                <div className="flex gap-3">
                   <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                   <p className="text-[10px] font-bold text-amber-500/70 uppercase tracking-widest leading-relaxed">
                      Handshake verification failure? Check "Junk" or "Spam" directories in the recipient's terminal.
                   </p>
                </div>
             </div>
             <Button onClick={() => setShowSpamAlert(false)} className="w-full h-12 rounded-xl bg-zinc-900 border border-white/5 text-white font-black uppercase tracking-widest text-[10px]">
                Acknowledge
             </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
