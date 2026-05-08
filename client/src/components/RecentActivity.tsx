import { useState, useEffect, useRef, forwardRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, Upload, Download, Clipboard, Copy, Check, Trash2,
  Monitor, Smartphone, ChevronDown, ChevronUp,
  Shield, Zap, Flame, Timer, AlertTriangle,
  Layers, ArrowRight, Loader2, Activity,
} from "lucide-react";
import { useVaultHistory, type VaultRecordStatus } from "@/hooks/useVaultHistory";
import { getVaultIdentity } from "@/lib/cipherAvatar";

const formatBytes = (bytes: number) => {
  if (!bytes) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

const formatTime = (ts: number) => {
  const diff = Date.now() - ts;
  const s = Math.floor(diff / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}d ago`;
  return new Date(ts).toLocaleDateString();
};

const statusCfg: Record<VaultRecordStatus, { color: string; bg: string; label: string; icon: any }> = {
  active: { color: "text-primary", bg: "bg-primary/10", label: "Active", icon: Shield },
  expired: { color: "text-zinc-500", bg: "bg-zinc-500/10", label: "Expired", icon: Timer },
  exhausted: { color: "text-amber-400", bg: "bg-amber-500/10", label: "Used", icon: AlertTriangle },
  burned: { color: "text-red-400", bg: "bg-red-500/10", label: "Burned", icon: Flame },
};

function StatusBadge({ status }: { status: VaultRecordStatus }) {
  const c = statusCfg[status];
  const Icon = c.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${c.color} ${c.bg}`}>
      {status === "active" && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />}
      <Icon className="w-3 h-3" />
      {c.label}
    </span>
  );
}

function LiveCountdown({ expiresAt }: { expiresAt: number }) {
  const [label, setLabel] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = expiresAt - Date.now();
      if (d <= 0) { setLabel("Expired"); return; }
      const h = Math.floor(d / 3600000);
      const m = Math.floor((d % 3600000) / 60000);
      const s = Math.floor((d % 60000) / 1000);
      setLabel(h > 0 ? `${h}h ${m}m` : m > 0 ? `${m}m ${s}s` : `${s}s`);
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [expiresAt]);

  const urgent = expiresAt - Date.now() < 3600000 && expiresAt > Date.now();
  return (
    <span className={`font-mono text-[10px] font-medium tabular-nums ${expiresAt <= Date.now() ? "text-zinc-500" : urgent ? "text-red-400" : "text-primary/60"}`}>
      {label}
    </span>
  );
}

const RecordCard = forwardRef<HTMLDivElement, any>(({ record, onRemove, onCopy, onDeleteVault }, ref) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const sent = record.action === "sent";
  const clip = record.type === "clipboard";
  const id = getVaultIdentity(record.accessCode.slice(0, 3));
  const codeFmt = `${record.accessCode.slice(0, 3)}-${record.accessCode.slice(3)}`;

  const doCopy = () => { onCopy(record.accessCode); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  const doDelete = async () => {
    if (!confirmDelete) { setConfirmDelete(true); setTimeout(() => setConfirmDelete(false), 5000); return; }
    setDeleting(true);
    try { await onDeleteVault(record); } finally { setDeleting(false); setConfirmDelete(false); }
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`surface-card p-4 sm:p-5 ${record.status !== "active" ? "opacity-50" : ""}`}
    >
      {/* Top row: icon + info + status */}
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${clip ? "bg-violet-500/10 border border-violet-500/20" : `${id.color} border border-white/[0.06]`}`}>
          {clip ? <Clipboard className="w-5 h-5 text-violet-400" /> : <span className="text-lg">{id.icon}</span>}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="text-sm font-semibold text-white truncate">
              {clip ? "Clipboard sync" : record.fileNames[0] || "Vault"}
            </h4>
            {record.fileCount > 1 && (
              <span className="text-[10px] text-zinc-500 font-mono">+{record.fileCount - 1}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <span className="flex items-center gap-1">
              {sent ? <Upload className="w-3 h-3" /> : <Download className="w-3 h-3" />}
              {sent ? "Sent" : "Received"}
            </span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{formatTime(record.createdAt)}</span>
            <span className="text-zinc-700">·</span>
            <span>{formatBytes(record.totalSize)}</span>
          </div>
        </div>
        <StatusBadge status={record.status} />
      </div>

      {/* Bottom row: code + countdown + expand */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.04]">
        <div className="flex items-center gap-3">
          <button onClick={doCopy} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 transition-colors text-xs font-mono font-medium text-white tracking-wider">
            {codeFmt}
            {copied ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3 text-zinc-500" />}
          </button>
          {record.status === "active" && <LiveCountdown expiresAt={record.expiresAt} />}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setExpanded(!expanded)} className="w-7 h-7 rounded-lg bg-white/[0.03] flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pt-4 mt-3 border-t border-white/[0.04] space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Device</span>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-zinc-400">
                    {record.device.isMobile ? <Smartphone className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
                    {record.device.browser} / {record.device.os}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Downloads</span>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    <span className="text-primary">{record.downloadCount}</span> / {record.maxDownloads}
                  </div>
                </div>
              </div>

              {record.fileNames.length > 1 && (
                <div>
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Files</span>
                  <div className="mt-1.5 space-y-1">
                    {record.fileNames.map((name: string, i: number) => (
                      <div key={i} className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-primary/40 shrink-0" /> {name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <Link href={`/access#code=${record.accessCode}`}>
                  <button className="btn-ghost px-3 py-1.5 text-[11px] text-primary">
                    <ArrowRight className="w-3 h-3" /> Open vault
                  </button>
                </Link>
                <div className="flex items-center gap-2">
                  <button onClick={() => onRemove(record.id)} className="btn-ghost px-3 py-1.5 text-[11px]">
                    Dismiss
                  </button>
                  {sent && record.status === "active" && (
                    <button onClick={doDelete} disabled={deleting} className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${confirmDelete ? "bg-red-500 text-white" : "text-red-400 hover:bg-red-500/10"}`}>
                      {deleting ? <Loader2 className="w-3 h-3 animate-spin" /> : confirmDelete ? "Confirm" : "Purge"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

export function RecentActivity() {
  const { records, removeRecord, updateRecord, clearAll } = useVaultHistory();
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState<string | null>(null);

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setToast("Code copied");
    setTimeout(() => setToast(null), 1500);
  };

  const deleteVault = async (record: any) => {
    try {
      const lookupId = record.accessCode.slice(0, 3);
      const res = await fetch(`/api/vaults/code/${lookupId}`);
      if (!res.ok) { removeRecord(record.id); return; }
      const data = await res.json();
      const del = await fetch(`/api/vaults/${data.id}`, { method: "DELETE" });
      if (del.ok) {
        updateRecord(record.accessCode, record.action, { status: "burned" });
        setTimeout(() => removeRecord(record.id), 1000);
      } else removeRecord(record.id);
    } catch { removeRecord(record.id); }
  };

  if (records.length === 0) return null;

  const filtered = records.filter((r) => {
    if (filter === "all") return true;
    if (filter === "sent") return r.action === "sent";
    if (filter === "received") return r.action === "received";
    return true;
  });

  return (
    <section className="w-full space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-primary" />
          <h3 className="text-base font-semibold text-white">Activity</h3>
          <span className="text-[11px] text-zinc-500 font-medium">{records.length} entries</span>
        </div>
        <div className="flex items-center gap-1.5">
          {["all", "sent", "received"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-[11px] font-medium capitalize transition-colors ${
                filter === f ? "bg-primary/10 text-primary border border-primary/20" : "text-zinc-500 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {f}
            </button>
          ))}
          <button onClick={clearAll} className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors" title="Clear all">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((r) => (
            <RecordCard key={r.id} record={r} onRemove={removeRecord} onCopy={copyCode} onDeleteVault={deleteVault} />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-medium shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
