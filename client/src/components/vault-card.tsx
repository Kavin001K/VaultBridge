import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  Copy, Check, Clock, Download, HardDrive,
  Share2, Mail, AlertTriangle, ExternalLink
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
}: VaultCardProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [countdown, setCountdown] = useState("");
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
        setCountdown("EXPIRED");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
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
      toast({ title: "Copied!", description: `${type === 'link' ? 'Link' : 'Code'} copied to clipboard.` });
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

  const isExpiringSoon = new Date(expiresAt).getTime() - Date.now() < 3600000;
  const isExpired = countdown === "EXPIRED";
  const downloadProgress = (downloads / maxDownloads) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card overflow-hidden"
    >
      {/* Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary" />

      <div className="p-8">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
              <HardDrive className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-mono tracking-tight">SECURE VAULT</h2>
              <p className="text-sm text-muted-foreground">
                {filesCount} {filesCount === 1 ? 'file' : 'files'} • {(totalSize / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className={`text-right ${isExpired ? 'text-destructive' : isExpiringSoon ? 'text-rose-400' : 'text-muted-foreground'}`}>
            <div className="text-xs uppercase tracking-wider mb-1 flex items-center gap-1 justify-end">
              <Clock className="w-3 h-3" />
              {isExpired ? 'Expired' : 'Self-destructs in'}
            </div>
            <div className="font-mono text-2xl font-bold tracking-wider">
              {countdown.split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block ${char === ':' ? 'mx-0.5 text-muted-foreground' : 'countdown-digit mx-0.5 text-sm w-8 h-9'}`}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* QR Code */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl">
            <QRCodeSVG
              value={fullLink}
              size={140}
              level="H"
              includeMargin
              bgColor="#ffffff"
              fgColor="#09090b"
            />
            <p className="text-xs text-zinc-500 font-mono mt-3 uppercase tracking-wider">
              Scan to access
            </p>
          </div>

          {/* Access Details */}
          <div className="lg:col-span-2 space-y-4">
            {/* Short Code */}
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Access Code</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(shortCode, "code")}
                  className="h-7 px-2"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <div className="font-mono text-3xl font-bold text-primary tracking-[0.3em]">
                {shortCode}
              </div>
            </div>

            {/* Direct Link */}
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Direct Link</span>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(fullLink, "link")}
                    className="h-7 px-2"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(fullLink, '_blank')}
                    className="h-7 px-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <code className="block text-sm font-mono text-primary/80 truncate">
                {fullLink}
              </code>
            </div>

            {/* Download Progress */}
            <div className="flex items-center gap-4">
              <Download className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Downloads</span>
                  <span className="font-mono font-bold">{downloads} / {maxDownloads}</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${downloadProgress}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${downloadProgress >= 80 ? 'bg-rose-500' : 'bg-primary'
                      }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Section */}
        {onSendEmail && (
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Email this link</span>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="recipient@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleSendEmail}
                disabled={!emailInput || isSendingEmail}
                className="px-6"
              >
                {isSendingEmail ? "Sending..." : "Send"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              We'll send ONLY the link. No files are attached for security.
            </p>
          </div>
        )}

        {/* Warning */}
        <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-rose-400">Important</p>
            <p className="text-xs text-rose-300/80 mt-1">
              This link contains the encryption key. If you lose it, the files cannot be recovered.
              We do not store encryption keys.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
