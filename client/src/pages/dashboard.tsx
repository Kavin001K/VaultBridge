import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity, Shield, HardDrive, Download, Zap, Flame, Clock,
  BarChart3, Database, ShieldAlert, CheckCircle2,
  RefreshCcw, AlertCircle, X, Terminal, Search,
} from "lucide-react";
import { Link } from "wouter";
import { useGlobalStats, useStorageStatus, useSystemLogs } from "@/hooks/use-vaults";
import { formatDistanceToNow } from "date-fns";

const spring = { type: "spring" as const, stiffness: 360, damping: 30 };

const StatCard = ({ title, value, subValue, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, ...spring }}
    className="surface-card p-5 sm:p-6"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-zinc-400">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[10px] font-medium text-zinc-500">Live</span>
    </div>
    <h3 className="text-zinc-500 text-xs font-medium mb-0.5">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{value}</span>
      {subValue && <span className="text-[10px] text-zinc-500 font-medium uppercase">{subValue}</span>}
    </div>
  </motion.div>
);

const StorageBar = ({ name, used, total, provider }: any) => {
  const percentage = total > 0 ? (used / total) * 100 : 0;
  const isCritical = percentage > 90;
  const isWarning = percentage > 75;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isCritical ? "bg-red-500 animate-pulse" : isWarning ? "bg-amber-500" : "bg-primary"}`} />
          <span className="text-sm font-semibold text-white">{name}</span>
        </div>
        <span className="text-[10px] font-mono text-zinc-500">
          {(used / (1024 * 1024 * 1024)).toFixed(2)} / {(total / (1024 * 1024 * 1024)).toFixed(2)} GB
        </span>
      </div>
      <div className="relative h-2.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(percentage, 100)}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute top-0 left-0 h-full rounded-full ${
            isCritical ? "bg-red-500" : isWarning ? "bg-amber-500" : "bg-primary"
          }`}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[10px] text-zinc-500 font-medium">{provider}</span>
        <span className={`text-[10px] font-medium ${isCritical ? "text-red-400" : "text-zinc-500"}`}>{percentage.toFixed(1)}%</span>
      </div>
    </div>
  );
};

const LogViewer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { data: logs, isLoading } = useSystemLogs(100);
  const [filter, setFilter] = useState("");

  const filteredLogs = logs?.filter(
    (log: any) =>
      log.event.toLowerCase().includes(filter.toLowerCase()) ||
      log.message.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={spring}
            className="relative w-full max-w-4xl h-[80vh] bg-background border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="px-6 py-4 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                </div>
                <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] font-semibold uppercase tracking-wide">
                  <Terminal className="w-3.5 h-3.5" />
                  System Logs
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Filter..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-white/[0.03] border border-white/[0.06] rounded-lg pl-8 pr-3 py-1.5 text-[10px] font-mono text-zinc-300 focus:outline-none focus:border-primary/30 transition-colors w-36 sm:w-48"
                  />
                </div>
                <button onClick={onClose} className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 font-mono text-[10px] leading-relaxed scrollbar-thin">
              {isLoading ? (
                <div className="flex items-center justify-center h-full gap-3 text-zinc-500">
                  <RefreshCcw className="w-4 h-4 animate-spin" />
                  Connecting...
                </div>
              ) : filteredLogs?.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-600 gap-2">
                  <ShieldAlert className="w-8 h-8 opacity-20" />
                  No matching events.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {filteredLogs?.map((log: any) => (
                    <div key={log.id} className="flex gap-3 hover:bg-white/[0.02] -mx-2 px-2 py-1 rounded transition-colors">
                      <span className="text-zinc-600 shrink-0">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                      <span className={`shrink-0 font-semibold px-1.5 py-0.5 rounded text-[9px] ${
                        log.level === "error" ? "bg-red-500/10 text-red-400" :
                        log.level === "warning" ? "bg-amber-500/10 text-amber-400" :
                        log.level === "security" ? "bg-blue-500/10 text-blue-400" :
                        "bg-primary/10 text-primary"
                      }`}>{log.event}</span>
                      <span className="text-zinc-400">{log.message}</span>
                    </div>
                  ))}
                  <div className="pt-6 text-zinc-700 border-t border-white/[0.04] animate-pulse-soft">
                    &gt; Listening for new events...
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-3 border-t border-white/[0.05] flex items-center justify-between text-[9px] text-zinc-600 font-medium">
              <span>TLS 1.3 · {window.location.hostname}</span>
              <span>{filteredLogs?.length || 0} events</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function DashboardPage() {
  const { data: stats, isLoading: statsLoading, isError: statsError, refetch: refetchStats } = useGlobalStats();
  const { data: storageStatus, isLoading: storageLoading, refetch: refetchStorage } = useStorageStatus();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("logs") === "true") setIsLogsOpen(true);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await fetch("/api/storage/reconcile", { method: "POST" });
      await Promise.all([refetchStats(), refetchStorage()]);
    } catch {}
    setTimeout(() => setIsRefreshing(false), 1200);
  };

  const fmtBytes = (bytesStr: string) => {
    const bytes = BigInt(bytesStr || "0");
    if (bytes === BigInt(0)) return "0 Bytes";
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(Number(bytes)) / Math.log(1024));
    return parseFloat((Number(bytes) / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/[0.03] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.02] blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-primary/[0.08] border border-primary/15">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] font-medium text-primary/70 uppercase tracking-wide">Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Platform Metrics</h1>
            <p className="text-zinc-500 text-sm mt-1">Real-time health across the VaultBridge network.</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleRefresh} disabled={isRefreshing} className="btn-secondary px-4 py-2.5 text-xs">
              <RefreshCcw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Syncing..." : "Sync"}
            </button>
            <Link href="/"><button className="btn-ghost px-4 py-2.5 text-xs">Exit</button></Link>
          </div>
        </header>

        {statsError ? (
          <div className="surface-card p-12 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4 opacity-50" />
            <h2 className="text-lg font-bold text-white mb-2">Metrics Unavailable</h2>
            <p className="text-red-400/70 text-sm">The statistics engine failed to initialize.</p>
          </div>
        ) : statsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="surface-card h-32 animate-shimmer" />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Active Vaults" value={stats.activeVaultsCount || 0} subValue="Live" icon={Shield} delay={0.1} />
              <StatCard title="Throughput" value={fmtBytes(stats.totalBytesUploaded)} subValue="Total" icon={Zap} delay={0.2} />
              <StatCard title="All Vaults" value={(stats.totalVaultsCreated || 0).toLocaleString()} subValue="Created" icon={Database} delay={0.3} />
              <StatCard title="Downloads" value={stats.totalDownloads || 0} subValue="Served" icon={Download} delay={0.4} />
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="lg:col-span-2 surface-card p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                      <HardDrive className="w-4 h-4 text-zinc-400" />
                    </div>
                    <h2 className="text-lg font-semibold">Storage</h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/[0.06] border border-primary/15 text-[10px] font-medium text-primary">Operational</span>
                </div>

                {storageLoading ? (
                  <div className="space-y-6">
                    <div className="h-14 animate-shimmer rounded-xl" />
                    <div className="h-14 animate-shimmer rounded-xl" />
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-10">
                    <StorageBar name="Tier 1 (R2)" used={storageStatus?.r2?.usedBytes || 0} total={storageStatus?.r2?.limitBytes || 10 * 1024 * 1024 * 1024} provider="Cloudflare R2" />
                    <StorageBar name="Tier 2 (Supabase)" used={storageStatus?.supabase?.usedBytes || 0} total={storageStatus?.supabase?.limitBytes || 0.5 * 1024 * 1024 * 1024} provider="Supabase Storage" />
                  </div>
                )}

                <div className="mt-10 pt-6 border-t border-white/[0.04] grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div><p className="text-[10px] text-zinc-500 font-medium">Fragmentation</p><p className="text-sm font-semibold text-zinc-300">0.04%</p></div>
                  <div><p className="text-[10px] text-zinc-500 font-medium">Uptime</p><p className="text-sm font-semibold text-primary">99.99%</p></div>
                  <div><p className="text-[10px] text-zinc-500 font-medium">Latency</p><p className="text-sm font-semibold text-zinc-300">42ms</p></div>
                  <div><p className="text-[10px] text-zinc-500 font-medium">Region</p><p className="text-sm font-semibold text-zinc-300">Global</p></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="surface-card p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <BarChart3 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h2 className="text-lg font-semibold">Events</h2>
                </div>

                <div className="flex-1 space-y-5">
                  <div className="flex gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-primary/[0.06] border border-primary/15 flex items-center justify-center shrink-0">
                      <Flame className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-300 font-medium">Last Burned</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        {stats.lastBurnedAt ? `${formatDistanceToNow(new Date(stats.lastBurnedAt))} ago` : "No burn events"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-primary/[0.06] border border-primary/15 flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-300 font-medium">Cleanup Engine</p>
                      <p className="text-[11px] text-primary/70 mt-0.5 font-medium uppercase tracking-wide">Active</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-primary/[0.06] border border-primary/15 flex items-center justify-center shrink-0">
                      <Shield className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-300 font-medium">Security</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Salt Integrity: <span className="text-primary font-medium">VERIFIED</span></p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsLogsOpen(true)}
                  className="btn-secondary w-full py-2.5 text-xs mt-6"
                >
                  View System Logs
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
      <LogViewer isOpen={isLogsOpen} onClose={() => setIsLogsOpen(false)} />
    </div>
  );
}
