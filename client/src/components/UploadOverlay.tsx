import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Zap, Clock, Activity, CheckCircle2, Lock,
  Binary, Network, Gauge, Cpu, Globe, Sparkles, Layers,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

type UploadStage = "idle" | "encrypting" | "uploading" | "success";

interface UploadOverlayProps {
  show: boolean;
  stage: UploadStage;
  progress: number;
  statusText: string;
  speed?: number;
  eta?: number;
  accessCode?: string;
  masterKey?: string;
  fileCount: number;
  totalSize: number;
  chunkCount: number;
  providerTrail?: string[];
  encryptedBytes?: number;
  uploadedBytes?: number;
  confirmedBytes?: number;
  onCancel?: () => void;
}

const formatBytes = (b: number) => {
  if (!b || b < 0) return "0 B";
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  if (b < 1024 * 1024 * 1024) return `${(b / (1024 * 1024)).toFixed(1)} MB`;
  return `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

const formatSpeed = (bps: number) => {
  if (!bps || bps <= 0) return "—";
  if (bps < 1024 * 1024) return `${(bps / 1024).toFixed(0)} KB/s`;
  return `${(bps / (1024 * 1024)).toFixed(1)} MB/s`;
};

const formatEta = (s: number) => {
  if (!s || s <= 0 || !Number.isFinite(s)) return "—";
  if (s < 60) return `${Math.round(s)}s`;
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return sec > 0 ? `${m}m ${sec}s` : `${m}m`;
};

const formatCode = (code?: string) => {
  if (!code) return "";
  const clean = code.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  return clean.length > 3 ? `${clean.slice(0, 3)}-${clean.slice(3)}` : clean;
};

export function UploadOverlay({
  show, stage, progress, statusText, speed = 0, eta = 0,
  accessCode, masterKey, fileCount, totalSize, chunkCount,
  providerTrail = [], encryptedBytes = 0, uploadedBytes = 0,
  confirmedBytes = 0, onCancel,
}: UploadOverlayProps) {
  const pct = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-full max-w-lg bg-[#0a0f16] border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={stage === "uploading" ? { rotate: 360 } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                >
                  {stage === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : stage === "encrypting" ? (
                    <Lock className="w-5 h-5 text-primary" />
                  ) : (
                    <Zap className="w-5 h-5 text-primary" />
                  )}
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {stage === "success" ? "Transfer Complete" :
                     stage === "encrypting" ? "Encrypting Files" :
                     "Transferring Files"}
                  </p>
                  <p className="text-[11px] text-zinc-500">{statusText}</p>
                </div>
              </div>
              <span className="font-mono text-3xl font-bold text-white tabular-nums">{pct}%</span>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4">
              <div className="h-3 rounded-full bg-white/[0.06] overflow-hidden border border-white/[0.04]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-primary/80 relative overflow-hidden"
                >
                  {/* Shimmer on the bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="px-6 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <Stat icon={Gauge} label="Speed" value={formatSpeed(speed)} />
              <Stat icon={Clock} label="ETA" value={formatEta(eta)} />
              <Stat icon={Layers} label="Chunks" value={chunkCount > 0 ? String(chunkCount) : "—"} />
              <Stat icon={Shield} label="Size" value={formatBytes(totalSize)} />
            </div>

            {/* Byte Progress */}
            {(encryptedBytes > 0 || uploadedBytes > 0) && (
              <div className="px-6 py-2 space-y-1.5">
                <ByteLine label="Encrypted" value={encryptedBytes} total={totalSize} color="bg-amber-400" />
                <ByteLine label="Uploaded" value={uploadedBytes} total={totalSize} color="bg-blue-400" />
                <ByteLine label="Confirmed" value={confirmedBytes} total={totalSize} color="bg-primary" />
              </div>
            )}

            {/* Provider trail */}
            {providerTrail.length > 0 && (
              <div className="px-6 py-3 flex items-center gap-2 text-[10px] text-zinc-500">
                <Globe className="w-3 h-3" />
                {providerTrail.map((p, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-white/[0.04] font-mono text-zinc-400">{p}</span>
                ))}
              </div>
            )}

            {/* Access Code (shown during transfer) */}
            {accessCode && (
              <div className="mx-6 my-2 p-4 rounded-2xl bg-primary/[0.06] border border-primary/15">
                <p className="text-[10px] font-medium text-primary/70 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <KeyRoundUI className="w-3 h-3" />
                  Your access code
                </p>
                <p className="font-mono text-3xl font-bold text-white tracking-wider">
                  {formatCode(accessCode)}
                </p>
                <p className="text-[10px] text-zinc-500 mt-1.5">
                  Save this — it's the only way to access your files.
                </p>
              </div>
            )}

            {/* Master key (collapsible) */}
            {masterKey && (
              <details className="mx-6 mb-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
                <summary className="text-[10px] text-zinc-500 cursor-pointer font-medium">
                  Master key fragment
                </summary>
                <p className="mt-2 font-mono text-[10px] text-zinc-400 break-all">{masterKey}</p>
              </details>
            )}

            {/* Cancel button */}
            {stage !== "success" && onCancel && (
              <div className="px-6 py-4 border-t border-white/[0.05] flex justify-center">
                <button
                  onClick={onCancel}
                  className="text-[11px] font-medium text-zinc-500 hover:text-red-400 transition-colors px-4 py-2 rounded-xl hover:bg-red-500/[0.06]"
                >
                  Cancel transfer
                </button>
              </div>
            )}

            {/* Success state */}
            {stage === "success" && (
              <div className="px-6 pb-6 pt-2 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.2 }}
                  className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3"
                >
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </motion.div>
                <p className="text-sm font-medium text-white">Files secured</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Redirecting to your vault...</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 text-center">
      <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 mb-1">
        <Icon className="w-3 h-3" />
        {label}
      </div>
      <p className="font-mono text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function ByteLine({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  const pct = total > 0 ? Math.min(100, (value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2.5 text-[10px]">
      <span className="text-zinc-500 w-14 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="font-mono text-zinc-400 w-14 text-right tabular-nums">{formatBytes(value)}</span>
    </div>
  );
}

function KeyRoundUI({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12l8 0" />
      <path d="M16 8l0 8" />
    </svg>
  );
}
