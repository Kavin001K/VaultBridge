import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Binary, CheckCircle2, Clock, KeyRound, Network, ShieldCheck, Copy, Check } from "lucide-react";

type ProgressStep = "keys" | "metadata" | "transfer" | "done";
type UploadStage = "idle" | "encrypting" | "uploading" | "success" | "resuming";

interface EncryptionProgressProps {
  stage: UploadStage;
  step: ProgressStep;
  progress: number;
  statusText: string;
  speed?: number;
  eta?: number;
  accessCode?: string;
  masterKey?: string;
}

const formatSpeed = (bps: number) => {
  if (!bps || bps <= 0) return "measuring";
  if (bps < 1024) return `${bps.toFixed(0)} B/s`;
  if (bps < 1024 * 1024) return `${(bps / 1024).toFixed(1)} KB/s`;
  return `${(bps / (1024 * 1024)).toFixed(1)} MB/s`;
};

const formatTime = (seconds: number) => {
  if (!seconds || seconds <= 0 || !Number.isFinite(seconds)) return "estimating";
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs ? `${mins}m ${secs}s` : `${mins}m`;
};

const formatDisplayCode = (code: string): string => {
  const clean = code.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  return clean.length > 3 ? `${clean.slice(0, 3)}-${clean.slice(3)}` : clean;
};

const stepLabels: Record<ProgressStep, string> = {
  keys: "Key setup",
  metadata: "Manifest",
  transfer: "Binary transfer",
  done: "Sealed",
};

export function EncryptionProgress({
  stage,
  step,
  progress,
  statusText,
  speed = 0,
  eta = 0,
  accessCode,
  masterKey,
}: EncryptionProgressProps) {
  const roundedProgress = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
            {stage === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-primary" />
            ) : (
              <Activity className="h-5 w-5 animate-pulse text-primary" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{stage === "success" ? "Transfer complete" : stepLabels[step]}</p>
            <p className="text-xs text-muted-foreground">{statusText}</p>
          </div>
        </div>
        <p className="font-mono text-2xl font-semibold text-white">{roundedProgress}%</p>
      </div>

      <div className="h-3 overflow-hidden rounded-full border border-white/[0.06] bg-black/30 p-0.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${roundedProgress}%` }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <MiniStat icon={Network} label="speed" value={formatSpeed(speed)} />
        <MiniStat icon={Clock} label="eta" value={formatTime(eta)} />
      </div>

      {accessCode && (
        <CodeCopyBlock code={accessCode} />
      )}

      {masterKey && (
        <details className="rounded-xl border border-white/[0.06] bg-black/20 p-3">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Master key fragment
          </summary>
          <p className="mt-3 break-all rounded-lg bg-black/30 p-3 font-mono text-[11px] leading-5 text-muted-foreground">
            {masterKey}
          </p>
        </details>
      )}

      <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-xs text-muted-foreground">
        <Binary className="h-4 w-4 text-primary" />
        AES-256-GCM encrypted binary chunks. Keys stay in the browser.
      </div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
      <div className="mb-1 flex items-center gap-2 text-[11px] text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="font-mono text-sm text-white">{value}</p>
    </div>
  );
}

function CodeCopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const clean = code.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  const display = clean.length > 3 ? `${clean.slice(0, 3)}-${clean.slice(3)}` : clean;

  const copy = async () => {
    await navigator.clipboard.writeText(clean);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
      <p className="mb-2 flex items-center gap-2 text-xs text-primary">
        <KeyRound className="h-4 w-4" />
        Access code
      </p>
      <button onClick={copy} className="w-full text-left font-mono text-3xl font-semibold tracking-wide text-white hover:text-primary transition-colors active:scale-[0.98] cursor-pointer select-all flex items-center justify-between gap-2 group">
        <span>{display}</span>
        {copied ? <Check className="w-5 h-5 text-primary shrink-0" /> : <Copy className="w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />}
      </button>
      {copied && <p className="text-[10px] text-primary/70 mt-1.5">Copied to clipboard</p>}
    </div>
  );
}
