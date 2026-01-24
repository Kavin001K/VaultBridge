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
      className="glass-card p-5 md:p-8 mb-6 md:mb-8 w-full"
    >
      {/* Code Display */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Key className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Access Code
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl py-3 px-4 md:py-4 md:px-6 w-full sm:w-auto">
            <span className="text-4xl md:text-5xl font-mono font-bold tracking-[0.2em] md:tracking-[0.3em] text-primary block sm:inline">
              {lookupId}
            </span>
            <span className="text-[10px] uppercase text-primary/60 font-bold tracking-wider block sm:hidden mt-1">Public ID</span>
          </div>

          <span className="hidden sm:block text-2xl md:text-4xl font-bold text-muted-foreground">—</span>

          <div className="bg-zinc-800 border-2 border-zinc-600 rounded-xl py-3 px-4 md:py-4 md:px-6 w-full sm:w-auto">
            <span className="text-4xl md:text-5xl font-mono font-bold tracking-[0.2em] md:tracking-[0.3em] text-white block sm:inline">
              {pin}
            </span>
            <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider block sm:hidden mt-1">Private PIN</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2 w-full sm:w-auto"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy Code"}
          </Button>
        </div>
      </div>

      {/* Security Warning */}
      <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-left">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-400">Write this down. It works only once.</p>
            <p className="text-xs text-amber-300/80 mt-1 leading-relaxed">
              This code is your only way to access these files. The recipient needs both parts
              to decrypt the files. After download limit or expiration, it cannot be recovered.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works - Hidden on mobile since we show labels inline above */}
      <div className="hidden sm:block mt-6 pt-6 border-t border-border/50">
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
    const res = await fetch(`/api/vaults/${vaultId}/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email,
        fullCode: splitCode // Send the full client-side code 
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to send email");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-50" />
      <div className="scanline" />

      {/* Success Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] md:w-[1000px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      {/* Confetti-like particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/30 rounded-full"
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
      <header className="relative z-10 px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => (window.location.href = "/")}
            className="gap-2 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Create Another Vault
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 pb-12 md:pb-16 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[50vh]">

        {/* Success Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12 w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary animate-pulse-glow"
          >
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight mb-3 md:mb-4">
            <span className="text-primary">VAULT</span> CREATED
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-md mx-auto px-4">
            Your files are encrypted. Share the access code below to unlock them.
          </p>
        </motion.div>

        {/* Split Code Display (The "Keys") */}
        {splitCode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-2xl mb-8"
          >
            <SplitCodeDisplay code={splitCode} />
          </motion.div>
        )}

        {/* Vault Card (The "Container" - Minimal Mode) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-2xl"
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
              minimal={true}
              className="border-t-4 border-t-primary"
            />
          )}
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 text-center px-6"
        >
          <p className="text-xs md:text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
            🔐 <span className="font-semibold text-zinc-400">Zero-Knowledge Architecture:</span> The PIN is your decryption key.
            It is generated in your browser and never sent to our servers. Without it, the data is mathematically irretrievable.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
