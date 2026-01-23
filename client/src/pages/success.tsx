import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, AlertTriangle, Copy, Check, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VaultCard } from "@/components/vault-card";
import { useGetVault } from "@/hooks/use-vaults";
import { useToast } from "@/hooks/use-toast";

// Component to display the split code prominently
function SplitCodeDisplay({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const lookupId = code.slice(0, 3);
  const pin = code.slice(3, 6);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Code Copied!",
      description: "The access code has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-8 mb-8"
    >
      {/* Code Display */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Key className="w-6 h-6 text-primary" />
          <span className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Access Code
          </span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl py-4 px-6">
            <span className="text-5xl font-mono font-bold tracking-[0.3em] text-primary">
              {lookupId}
            </span>
          </div>
          <span className="text-4xl font-bold text-muted-foreground">—</span>
          <div className="bg-zinc-800 border-2 border-zinc-600 rounded-xl py-4 px-6">
            <span className="text-5xl font-mono font-bold tracking-[0.3em] text-white">
              {pin}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy Code"}
          </Button>
        </div>
      </div>

      {/* Security Warning */}
      <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-400">Write this down. It works only once.</p>
            <p className="text-xs text-amber-300/80 mt-1">
              This code is your only way to access these files. The recipient needs both parts
              to decrypt the files. After download limit or expiration, it cannot be recovered.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          <span className="text-primary font-semibold">{lookupId}</span> = Public ID (finds the file on server) •
          <span className="text-white font-semibold ml-1">{pin}</span> = Private PIN (decrypts the key locally)
        </p>
      </div>
    </motion.div>
  );
}

export default function Success() {
  const [, params] = useRoute("/success/:id");
  const [splitCode, setSplitCode] = useState("");
  const { toast } = useToast();

  const vaultId = params?.id || "";
  const { data: vault } = useGetVault(vaultId);

  useEffect(() => {
    // Extract the split code from URL hash
    const hash = window.location.hash;
    const codeMatch = hash.match(/#code=(\d{6})/);
    if (codeMatch) {
      setSplitCode(codeMatch[1]);
    }
  }, []);

  const handleSendEmail = async (email: string) => {
    const res = await fetch(`/api/v1/vault/${vaultId}/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: email }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to send email");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-50" />
      <div className="scanline" />

      {/* Success Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Confetti-like particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => (window.location.href = "/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Create Another Vault
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary animate-pulse-glow"
          >
            <Sparkles className="w-10 h-10 text-primary" />
          </motion.div>

          <h1 className="text-4xl font-bold font-mono tracking-tight mb-3">
            <span className="text-primary">VAULT</span> CREATED
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your files are encrypted and ready to share. Share the access code below.
          </p>
        </motion.div>

        {/* Split Code Display */}
        {splitCode && <SplitCodeDisplay code={splitCode} />}

        {/* Vault Card (optional metadata) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {vault && (
            <VaultCard
              vaultId={vault.id}
              shortCode={splitCode ? `${splitCode.slice(0, 3)}-${splitCode.slice(3, 6)}` : vault.shortCode || "------"}
              fullLink={`${window.location.origin}/access`}
              filesCount={vault.files?.length || 0}
              totalSize={vault.files?.reduce((acc: number, f: { totalSize: number }) => acc + f.totalSize, 0) || 0}
              expiresAt={vault.expiresAt}
              downloads={vault.downloadCount}
              maxDownloads={vault.maxDownloads}
              onSendEmail={handleSendEmail}
            />
          )}
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            🔐 Zero-Knowledge Transfer: The PIN never touches our servers.
            <br />
            Only the recipient with the full 6-digit code can decrypt the files.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
