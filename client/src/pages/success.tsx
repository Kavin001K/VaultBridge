import { useEffect, useState, useRef } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Copy, Check, Key, Share2, Mail, Trash2, Shield,
  Clock, Download, HardDrive, CheckCircle2, Send, AlertTriangle,
  Flame, Layers, File, Timer, ExternalLink,
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
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/[0.02] blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/[0.05] bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-bold text-white">VaultBridge</span>
            </div>
          </Link>
          <button onClick={() => setLocation("/")} className="btn-ghost px-3 py-1.5 text-xs">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </button>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 pt-8 sm:pt-12 pb-16">
        {/* Success badge */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/[0.06] border border-primary/15 text-primary text-[11px] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" /> Vault created
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold mt-3 mb-1">Files secured</h1>
          <p className="text-sm text-zinc-500">Share the link below. Files auto-destruct after limits.</p>
        </motion.div>

        {/* Vault limits info */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="surface-card p-4 sm:p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Vault limits</h3>
            <span className="text-[11px] text-zinc-500 flex items-center gap-1">
              <Timer className="w-3 h-3" />
              {vault ? formatTimeLeft(vault.expiresAt) : "..."}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${vaultMax > 0 ? (vaultUsed / vaultMax) * 100 : 0}%` }} />
            </div>
            <span className="text-xs font-mono text-zinc-400 tabular-nums">{vaultRemaining}/{vaultMax} downloads left</span>
          </div>
        </motion.div>

        {/* Per-file limits */}
        {files.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="surface-card p-4 sm:p-5 mb-4">
            <h3 className="text-sm font-semibold mb-3">Files ({files.length})</h3>
            <div className="space-y-2">
              {files.map((f: any, i: number) => {
                const fileMax = f.maxDownloads || vaultMax;
                const fileUsed = f.downloadCount || 0;
                const fileRemaining = Math.max(0, fileMax - fileUsed);
                const exhausted = fileRemaining <= 0;
                return (
                  <div key={f.fileId || i} className={`flex items-center gap-3 p-2.5 rounded-xl ${exhausted ? "bg-red-500/[0.04] border border-red-500/10" : "bg-white/[0.02] border border-white/[0.04]"}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${exhausted ? "bg-red-500/10" : "bg-white/[0.04]"}`}>
                      {exhausted ? <Flame className="w-4 h-4 text-red-400" /> : <File className="w-4 h-4 text-zinc-400" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs font-medium truncate ${exhausted ? "text-red-400" : "text-zinc-300"}`}>
                        {f.fileId?.slice(0, 8) || `File ${i + 1}`}
                      </p>
                      <p className="text-[10px] text-zinc-500">{formatBytes(f.totalSize || f.size || 0)}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`text-xs font-mono font-medium ${exhausted ? "text-red-400" : "text-zinc-400"}`}>
                        {fileRemaining}/{fileMax}
                      </span>
                      <p className="text-[9px] text-zinc-500">left</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Access code & link */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="surface-card p-5 sm:p-6 mb-4">
          <div className="text-center mb-4">
            <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wide">Access code</p>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-[0.3em] mb-3">
              {splitCode.slice(0, 3)}<span className="text-primary/40 mx-1">-</span>{splitCode.slice(3)}
            </div>
            <button onClick={() => handleCopy(splitCode, "code")} className="btn-ghost px-3 py-1.5 text-[11px]">
              {copiedCode ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3" />}
              {copiedCode ? "Copied" : "Copy code"}
            </button>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <ExternalLink className="w-4 h-4 text-zinc-500 shrink-0" />
            <p className="flex-1 text-[11px] text-zinc-400 font-mono truncate">{shareLink}</p>
            <button onClick={() => handleCopy(shareLink, "link")} className="btn-primary px-3 py-1.5 text-[10px] rounded-lg shrink-0">
              {copiedLink ? "Copied" : "Copy"}
            </button>
          </div>

          {/* QR */}
          <div className="flex justify-center mt-4">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <QRCodeSVG level="H" includeMargin value={shareLink} size={140} bgColor="transparent" fgColor="#2dd4bf" />
            </div>
          </div>
          <p className="text-center text-[10px] text-zinc-600 mt-2">Scan for mobile access</p>
        </motion.div>

        {/* Email & Burn actions */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="space-y-3">
          {/* Email */}
          <div className="surface-card p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> Send via email</h3>
            <div className="flex gap-2">
              <input
                placeholder="recipient@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/30 transition-colors"
              />
              <button onClick={handleSendEmail} disabled={isSending || !email} className="btn-primary px-4 py-2 text-xs rounded-xl">
                {isSending ? "..." : "Send"}
              </button>
            </div>
          </div>

          {/* Burn */}
          <button onClick={handleBurn} disabled={isDeleting} className="w-full p-4 rounded-2xl border border-red-500/15 bg-red-500/[0.03] hover:bg-red-500/[0.06] transition-colors text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/15 transition-colors">
                <Flame className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-red-400">Burn vault now</p>
                <p className="text-[11px] text-zinc-500">Irreversibly destroy all files immediately</p>
              </div>
            </div>
          </button>
        </motion.div>
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
