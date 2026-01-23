import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowLeft, Share2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Success() {
  const [, params] = useRoute("/success/:id");
  const [fullLink, setFullLink] = useState("");
  const [keyPart, setKeyPart] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Reconstruct the full share link from current URL
    // We expect the hash to be present in window.location
    const hash = window.location.hash; // #key=...
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/v/${params?.id}${hash}`;
    
    setFullLink(shareUrl);
    setKeyPart(hash.replace('#key=', ''));
  }, [params?.id]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullLink);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Secure link copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ variant: "destructive", title: "Failed to copy" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="scanline" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="w-full max-w-2xl bg-card border border-border/50 rounded-2xl p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/50 text-primary">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold font-mono tracking-tight text-primary">VAULT CREATED</h1>
          <p className="text-muted-foreground mt-2">
            Your files are encrypted and ready to share.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* QR Code */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-inner">
            <QRCodeSVG value={fullLink} size={160} level="H" />
            <p className="text-xs text-zinc-500 font-mono mt-4 uppercase tracking-wider">Scan to download</p>
          </div>

          {/* Info & Warning */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="p-4 bg-secondary/30 rounded-lg border border-border">
              <h3 className="font-bold text-sm mb-1 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-primary" />
                Share this link
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Send this link to the recipient. It contains the decryption key.
              </p>
            </div>
            
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <h3 className="font-bold text-sm text-destructive mb-1">Warning</h3>
              <p className="text-xs text-destructive/80 leading-relaxed">
                If you lose this link, the files are lost forever. We do not store the encryption key.
              </p>
            </div>
          </div>
        </div>

        {/* Link Input */}
        <div className="space-y-2 mb-8">
          <label className="text-xs font-mono uppercase text-muted-foreground">Secure Link</label>
          <div className="flex gap-2">
            <code className="flex-1 bg-black/50 border border-primary/30 rounded-lg p-3 text-sm font-mono text-primary truncate">
              {fullLink}
            </code>
            <Button onClick={copyToClipboard} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => window.location.href = '/'} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Create Another Vault
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
