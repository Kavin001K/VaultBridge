import { ShieldCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function EncryptionBadge() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 w-fit mx-auto"
    >
      <ShieldCheck className="w-3 h-3" />
      <span className="uppercase tracking-wider">End-to-End Encrypted (AES-256-GCM)</span>
    </motion.div>
  );
}

export function ZeroKnowledgeBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur border border-border rounded-lg shadow-lg text-muted-foreground text-xs font-mono">
      <Lock className="w-3 h-3 text-primary" />
      <span>Zero-Knowledge Architecture</span>
    </div>
  );
}
