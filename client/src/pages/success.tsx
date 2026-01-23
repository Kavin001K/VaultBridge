import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VaultCard } from "@/components/vault-card";
import { useGetVault } from "@/hooks/use-vaults";

export default function Success() {
  const [, params] = useRoute("/success/:id");
  const [fullLink, setFullLink] = useState("");
  const [keyPart, setKeyPart] = useState("");

  const vaultId = params?.id || "";
  const { data: vault } = useGetVault(vaultId);

  useEffect(() => {
    // Reconstruct the full share link from current URL
    const hash = window.location.hash; // #key=...
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/v/${params?.id}${hash}`;

    setFullLink(shareUrl);
    setKeyPart(hash.replace("#key=", ""));
  }, [params?.id]);

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
            Your files are encrypted and ready to share. Copy the link or scan
            the QR code.
          </p>
        </motion.div>

        {/* Vault Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {vault && (
            <VaultCard
              vaultId={vault.id}
              shortCode={vault.shortCode || "------"}
              fullLink={fullLink}
              filesCount={vault.files?.length || 0}
              totalSize={vault.files?.reduce((acc, f) => acc + f.totalSize, 0) || 0}
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
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            🔐 The encryption key is stored only in the URL fragment (after #).
            <br />
            It is never sent to our servers.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
