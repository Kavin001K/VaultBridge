import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  Copy, Check, Clock, Download, HardDrive,
  Mail, AlertTriangle, ExternalLink, ShieldCheck, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface VaultCardProps {
  vaultId: string;
  shortCode: string;
  fullLink: string;
  filesCount: number;
  totalSize: number;
  expiresAt: string;
  downloads: number;
  maxDownloads: number;
  onSendEmail?: (email: string) => Promise<void>;
}

// -----------------------------------------------------------------------------
// SUB-COMPONENTS
// -----------------------------------------------------------------------------

function CountdownDigit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-primary/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative w-12 h-14 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="font-mono text-2xl font-bold text-primary"
            >
              {value.toString().padStart(2, "0")}
            </motion.span>
          </AnimatePresence>

          {/* Scanline overlay for digits */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 pointer-events-none" />
        </div>
      </div>
      <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-wider font-mono">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col justify-start pt-4 h-14">
      <div className="space-y-2 animate-pulse">
        <div className="w-1 h-1 bg-zinc-600 rounded-full" />
        <div className="w-1 h-1 bg-zinc-600 rounded-full" />
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------

export function VaultCard({
  vaultId,
  shortCode,
  fullLink,
  filesCount,
  totalSize,
  expiresAt,
  downloads,
  maxDownloads,
  onSendEmail,
  className,
  minimal = false,
}: VaultCardProps & { className?: string; minimal?: boolean }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const { toast } = useToast();

  // Calculate countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const expiry = new Date(expiresAt).getTime();
      const diff = expiry - now;

      if (diff <= 0) {
        setTimeLeft(null); // Expired
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  const copyToClipboard = async (text: string, type: "link" | "code") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "link") {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }
      toast({
        title: "Copied!",
        description: (
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>{type === 'link' ? 'Secure link' : 'Access code'} copied to clipboard.</span>
          </div>
        )
      });
    } catch (err) {
      toast({ variant: "destructive", title: "Failed to copy" });
    }
  };

  const handleSendEmail = async () => {
    if (!emailInput || !onSendEmail) return;
    setIsSendingEmail(true);
    try {
      await onSendEmail(emailInput);
      setEmailInput("");
      toast({ title: "Email Sent!", description: "Vault link sent successfully." });
    } catch (err) {
      toast({ variant: "destructive", title: "Failed to send email" });
    } finally {
      setIsSendingEmail(false);
    }
  };

  const isExpired = timeLeft === null;
  const isExpiringSoon = timeLeft ? timeLeft.hours === 0 && timeLeft.minutes < 60 : false;
  const downloadProgress = (downloads / maxDownloads) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`glass-card overflow-hidden ring-1 ring-white/10 ${className}`}
    >
      {/* Header Stripe & Active Status */}
      <div className="relative h-1 w-full bg-zinc-900 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isExpired ? 'via-rose-500' : 'via-primary'} to-transparent w-1/2 animate-shimmer opacity-70`} />
      </div>

      <div className="p-5 md:p-8">

        {/* Optional Header Row */}
        {!minimal && (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-10">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 shadow-inner">
                  <HardDrive className={`w-7 h-7 md:w-8 md:h-8 ${isExpired ? 'text-rose-500' : 'text-primary'}`} />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1 border border-zinc-800">
                  {isExpired ? <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-rose-500" /> : <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-primary" />}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-2xl font-bold font-mono tracking-tight text-foreground">SECURE VAULT</h2>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${isExpired
                    ? 'bg-rose-500/10 border-rose-500/20 text-rose-500'
                    : 'bg-primary/10 border-primary/20 text-primary'
                    }`}>
                    {isExpired ? 'Archived' : 'Active'}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                  <span className="font-medium text-foreground">{filesCount}</span> {filesCount === 1 ? 'file' : 'files'}
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-medium text-foreground">{(totalSize / (1024 * 1024)).toFixed(2)}</span> MB
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex flex-col items-end w-full md:w-auto mt-2 md:mt-0">
              <div className={`flex items-center gap-2 mb-2 text-xs uppercase font-bold tracking-widest ${isExpiringSoon || isExpired ? 'text-rose-500' : 'text-primary'}`}>
                <Clock className="w-3.5 h-3.5" />
                {isExpired ? 'Vault Expired' : 'Auto-Purge In'}
              </div>

              {isExpired ? (
                <div className="h-12 md:h-14 flex items-center px-4 bg-rose-500/10 border border-rose-500/20 rounded-lg w-full md:w-auto justify-center">
                  <span className="font-mono text-lg md:text-xl font-bold text-rose-500 tracking-widest">DELETED</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-1.5 md:gap-2 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/50 backdrop-blur-sm w-full md:w-auto">
                  <CountdownDigit value={timeLeft?.hours || 0} label="HRS" />
                  <Separator />
                  <CountdownDigit value={timeLeft?.minutes || 0} label="MIN" />
                  <Separator />
                  <CountdownDigit value={timeLeft?.seconds || 0} label="SEC" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Cyber QR Layout - Centered on Mobile */}
          <div className="flex flex-col items-center order-1 lg:order-none">
            <div className="relative group w-full max-w-[240px] lg:max-w-none">
              {/* QR Container Frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/50 to-emerald-600/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-zinc-950 p-4 md:p-6 rounded-xl border border-primary/20 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">

                {/* Scanning Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-10"
                  animate={{ top: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="bg-white p-2 rounded-lg relative z-0 w-full h-full flex items-center justify-center">
                  <QRCodeSVG
                    value={fullLink}
                    size={200}
                    className="w-full h-full"
                    level="H"
                    includeMargin={true}
                    bgColor="#FFFFFF"
                    fgColor="#16a34a"
                    imageSettings={{
                      src: "/vault-qr-icon.png",
                      height: 48,
                      width: 48,
                      excavate: true,
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Scan to Access
            </p>
          </div>

          {/* Access Details Panel */}
          <div className="lg:col-span-2 space-y-4 md:space-y-5 order-2 lg:order-none">
            {/* Short Code & Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Code Box - Optimized to prevent breaking */}
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative group overflow-hidden flex flex-col justify-between min-h-[110px]">
                <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(shortCode, "code")}
                    className="h-8 w-8 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    {copiedCode ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">Access PIN</div>

                <div className="flex-1 flex items-center justify-center w-full">
                  <div className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-widest drop-shadow-lg whitespace-nowrap">
                    {shortCode}
                  </div>
                </div>
              </div>

              {/* Downloads Box - Redesigned */}
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider flex items-center gap-1.5">
                    <Download className="w-3 h-3" />
                    Downloads
                  </div>
                  <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${downloads >= maxDownloads
                    ? 'bg-rose-500/10 border-rose-500/20 text-rose-500'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-300'
                    }`}>
                    {maxDownloads - downloads} LEFT
                  </span>
                </div>

                {/* Segmented Progress Bar */}
                <div className="space-y-2">
                  <div className="flex gap-1 h-3 w-full">
                    {Array.from({ length: Math.min(maxDownloads, 20) }).map((_, i) => {
                      const isUsed = i < downloads;
                      // Calculate if this segment should be active (reverse logic: filled bars = used downloads? 
                      // Typically "Downloads Remaining" implies empty bars or filled bars representing used count.
                      // Let's make "filled" = used.
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-300 ${isUsed
                            ? 'bg-zinc-800' // Used downloads are dark/empty
                            : 'bg-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]' // Remaining are bright/filled
                            }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                    <span>0</span>
                    <span>{downloads} / {maxDownloads} used</span>
                    <span>{maxDownloads}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link Field */}
            <div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative flex items-center bg-zinc-900/80 border border-zinc-700 hover:border-primary/50 rounded-xl p-1 pr-2 transition-colors">
                  <div className="h-10 w-10 flex items-center justify-center text-zinc-500 shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 px-2 overflow-hidden">
                    <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">Secure Link</div>
                    <div className="text-sm font-mono text-zinc-300 truncate selection:bg-primary/30">
                      {fullLink}
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => copyToClipboard(fullLink, "link")}
                    className="h-9 gap-2 shadow-sm font-medium shrink-0"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden md:inline">{copiedLink ? "Copied" : "Copy"}</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Email Section */}
            {onSendEmail && !isExpired && (
              <div className="pt-4 mt-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-zinc-800 rounded-md">
                    <Mail className="w-4 h-4 text-zinc-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Secure Send</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter recipient email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 focus:border-primary/50 transition-colors"
                  />
                  <Button
                    onClick={handleSendEmail}
                    disabled={!emailInput || isSendingEmail}
                    className="w-full md:w-auto min-w-[100px] cyber-btn"
                  >
                    {isSendingEmail ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send"}
                  </Button>
                </div>
                <p className="text-[11px] text-zinc-500 mt-2 pl-1">
                  * Encrypted link sent only. No files attached.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Security Footer - Simplified on Mobile */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start gap-4">
          <div className="hidden md:block p-2 bg-rose-500/10 rounded-lg shrink-0">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <div className="flex items-center gap-2 md:hidden mb-2 text-rose-500 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Self-Destruction Protocol</span>
            </div>
            <h4 className="hidden md:block text-sm font-bold text-rose-500 mb-1">Self-Destruction Protocol Active</h4>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl">
              This vault is encrypted with a unique key.
              Once the limit is reached or timer expires, data is permanently purged.
              <span className="text-zinc-300 font-medium"> No recovery option.</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

