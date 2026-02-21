import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock, Download, Upload, Clipboard, Eye, EyeOff,
    ExternalLink, Copy, Check, Trash2, Mail, X,
    Monitor, Smartphone, Globe, ChevronDown, ChevronUp,
    Shield, FileText, Zap, AlertTriangle, Activity,
    HardDrive, Timer, Loader2, Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVaultHistory, type VaultHistoryRecord, type VaultRecordStatus } from "@/hooks/useVaultHistory";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatBytes(bytes: number): string {
    if (bytes === 0) return "0 B";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function formatRelativeTime(timestamp: number): string {
    const diff = Date.now() - timestamp;
    const secs = Math.floor(diff / 1000);
    if (secs < 60) return "just now";
    const mins = Math.floor(secs / 60);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString();
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
const statusConfig: Record<VaultRecordStatus, { color: string; bg: string; border: string; label: string; icon: typeof Shield }> = {
    active: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/25", label: "Active", icon: Shield },
    expired: { color: "text-zinc-500", bg: "bg-zinc-500/10", border: "border-zinc-500/25", label: "Expired", icon: Timer },
    exhausted: { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/25", label: "Limit Hit", icon: AlertTriangle },
    burned: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/25", label: "Burned", icon: Zap },
};

function StatusBadge({ status }: { status: VaultRecordStatus }) {
    const cfg = statusConfig[status];
    const Icon = cfg.icon;
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
            {status === "active" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
            <Icon className="w-2.5 h-2.5" />
            {cfg.label}
        </span>
    );
}

// ─── Live Countdown ───────────────────────────────────────────────────────────
function LiveCountdown({ expiresAt }: { expiresAt: number }) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const update = () => {
            const diff = expiresAt - Date.now();
            if (diff <= 0) { setTimeLeft("Expired"); return; }
            const h = Math.floor(diff / (3600000));
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            if (h > 0) setTimeLeft(`${h}h ${m}m`);
            else if (m > 0) setTimeLeft(`${m}m ${s}s`);
            else setTimeLeft(`${s}s`);
        };
        update();
        const iv = setInterval(update, 1000);
        return () => clearInterval(iv);
    }, [expiresAt]);

    const diff = expiresAt - Date.now();
    const isUrgent = diff > 0 && diff < 3600000; // < 1 hour

    if (diff <= 0) return <span className="text-zinc-600 font-mono text-xs">Expired</span>;

    return (
        <span className={`font-mono text-xs font-bold ${isUrgent ? "text-red-400 animate-pulse" : "text-cyan-400"}`}>
            {timeLeft}
        </span>
    );
}

// ─── Single Record Card ──────────────────────────────────────────────────────
function RecordCard({
    record,
    onRemove,
    onCopy,
    onDeleteVault,
}: {
    record: VaultHistoryRecord;
    onRemove: (id: string) => void;
    onCopy: (text: string) => void;
    onDeleteVault: (record: VaultHistoryRecord) => Promise<void>;
}) {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const isSent = record.action === "sent";
    const isClipboard = record.type === "clipboard";
    const statusCfg = statusConfig[record.status];

    const handleCopy = () => {
        onCopy(record.accessCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const remaining = Math.max(0, record.maxDownloads - record.downloadCount);
    const usagePercent = record.maxDownloads > 0
        ? Math.min(100, Math.round((record.downloadCount / record.maxDownloads) * 100))
        : 0;

    const handleDeleteVault = async () => {
        if (!confirmDelete) {
            setConfirmDelete(true);
            setTimeout(() => setConfirmDelete(false), 5000); // auto-reset after 5s
            return;
        }
        setIsDeleting(true);
        try {
            await onDeleteVault(record);
        } finally {
            setIsDeleting(false);
            setConfirmDelete(false);
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`group relative rounded-2xl border backdrop-blur-lg transition-all duration-300 ${record.status === "active"
                ? "border-zinc-800/60 bg-zinc-900/50 hover:border-cyan-500/30 hover:bg-zinc-900/70"
                : "border-zinc-800/30 bg-zinc-950/30 opacity-70 hover:opacity-90"
                }`}
        >
            <div className="p-4">
                {/* Top row: icon + type + status + time */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                        {/* Type icon */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${isClipboard
                            ? "bg-violet-500/10 border-violet-500/25"
                            : isSent
                                ? "bg-cyan-500/10 border-cyan-500/25"
                                : "bg-emerald-500/10 border-emerald-500/25"
                            }`}>
                            {isClipboard
                                ? <Clipboard className="w-4 h-4 text-violet-400" />
                                : isSent
                                    ? <Upload className="w-4 h-4 text-cyan-400" />
                                    : <Download className="w-4 h-4 text-emerald-400" />
                            }
                        </div>

                        {/* Title + meta */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                                <p className="text-sm font-bold text-zinc-200 truncate">
                                    {isClipboard ? "Clipboard" : record.fileNames[0] || "Vault"}
                                </p>
                                {record.fileCount > 1 && (
                                    <span className="text-[10px] text-zinc-500 font-mono bg-zinc-800/60 px-1.5 py-0.5 rounded-md shrink-0">
                                        +{record.fileCount - 1}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                                <span>{isSent ? "Sent" : "Received"}</span>
                                <span className="text-zinc-700">•</span>
                                <span>{formatRelativeTime(record.createdAt)}</span>
                                {record.totalSize > 0 && (
                                    <>
                                        <span className="text-zinc-700">•</span>
                                        <span>{formatBytes(record.totalSize)}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                        <StatusBadge status={record.status} />
                    </div>
                </div>

                {/* PIN + Countdown + Downloads bar */}
                <div className="flex items-center gap-3 mb-2">
                    {/* Access code */}
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/40 hover:border-cyan-500/40 transition-all group/pin"
                    >
                        <span className="font-mono text-xs font-bold text-zinc-300 tracking-widest">
                            {record.accessCode.slice(0, 3)}-{record.accessCode.slice(3)}
                        </span>
                        {copied
                            ? <Check className="w-3 h-3 text-emerald-400" />
                            : <Copy className="w-3 h-3 text-zinc-500 group-hover/pin:text-cyan-400 transition-colors" />
                        }
                    </button>

                    {/* Countdown */}
                    {record.status === "active" && (
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                            <Clock className="w-3 h-3" />
                            <LiveCountdown expiresAt={record.expiresAt} />
                        </div>
                    )}

                    {/* Downloads remaining */}
                    {record.maxDownloads > 0 && record.type === "vault" && (
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 ml-auto">
                            <Download className="w-3 h-3" />
                            <span className="font-mono font-bold">
                                <span className={remaining <= 2 ? "text-amber-400" : "text-zinc-300"}>{remaining}</span>
                                <span className="text-zinc-600">/{record.maxDownloads}</span>
                            </span>
                        </div>
                    )}
                </div>

                {/* Download usage bar */}
                {record.maxDownloads > 0 && record.type === "vault" && (
                    <div className="w-full h-1 bg-zinc-800/60 rounded-full overflow-hidden mb-2">
                        <motion.div
                            className={`h-full rounded-full ${usagePercent >= 90 ? "bg-red-500" : usagePercent >= 60 ? "bg-amber-500" : "bg-cyan-500"
                                }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${usagePercent}%` }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                    </div>
                )}

                {/* Clipboard preview */}
                {record.hasClipboard && record.clipboardPreview && (
                    <div className="px-3 py-2 rounded-lg bg-zinc-800/30 border border-zinc-700/20 mb-2">
                        <p className="text-[11px] text-zinc-400 font-mono truncate leading-relaxed">
                            <Clipboard className="w-3 h-3 inline mr-1.5 text-violet-400" />
                            {record.clipboardPreview}
                        </p>
                    </div>
                )}

                {/* Expandable details */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 mt-2 border-t border-zinc-800/40 space-y-2">
                                {/* Device info */}
                                <div className="flex items-center gap-3 text-[10px] text-zinc-500">
                                    {record.device.isMobile
                                        ? <Smartphone className="w-3 h-3" />
                                        : <Monitor className="w-3 h-3" />
                                    }
                                    <span>{record.device.browser} • {record.device.os}</span>
                                    <Globe className="w-3 h-3 ml-auto" />
                                    <span>{record.device.language}</span>
                                </div>

                                {/* File list (if > 1 file) */}
                                {record.fileNames.length > 1 && (
                                    <div className="space-y-1">
                                        {record.fileNames.map((name, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-400">
                                                <FileText className="w-3 h-3 text-zinc-600" />
                                                <span className="truncate">{name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Email info */}
                                {record.lastEmailedTo && (
                                    <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                                        <Mail className="w-3 h-3 text-cyan-400" />
                                        <span>Emailed to {record.lastEmailedTo}</span>
                                        {record.lastEmailedAt && (
                                            <span className="text-zinc-600">({formatRelativeTime(record.lastEmailedAt)})</span>
                                        )}
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex items-center gap-2 pt-1">
                                    <Link href={`/access?code=${record.accessCode}`}>
                                        <Button variant="ghost" size="sm" className="h-7 text-[10px] text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 gap-1.5">
                                            <ExternalLink className="w-3 h-3" /> Open Vault
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="ghost" size="sm"
                                        className="h-7 text-[10px] text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 gap-1.5"
                                        onClick={() => onRemove(record.id)}
                                    >
                                        <X className="w-3 h-3" /> Dismiss
                                    </Button>
                                    {record.status === "active" && record.action === "sent" && (
                                        <Button
                                            variant="ghost" size="sm"
                                            className={`h-7 text-[10px] gap-1.5 ml-auto transition-all ${confirmDelete
                                                ? "text-white bg-red-600 hover:bg-red-700 border border-red-500 font-bold"
                                                : "text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                                }`}
                                            onClick={handleDeleteVault}
                                            disabled={isDeleting}
                                        >
                                            {isDeleting ? (
                                                <><Loader2 className="w-3 h-3 animate-spin" /> Destroying...</>
                                            ) : confirmDelete ? (
                                                <><Flame className="w-3 h-3" /> Confirm Destroy</>
                                            ) : (
                                                <><Trash2 className="w-3 h-3" /> Delete Vault</>
                                            )}
                                        </Button>
                                    )}
                                    {record.status !== "active" && (
                                        <Button
                                            variant="ghost" size="sm"
                                            className="h-7 text-[10px] text-zinc-600 hover:text-red-400 hover:bg-red-500/10 gap-1.5 ml-auto"
                                            onClick={() => onRemove(record.id)}
                                        >
                                            <Trash2 className="w-3 h-3" /> Remove
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Expand toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center justify-center w-full pt-1 text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                    {expanded
                        ? <ChevronUp className="w-3.5 h-3.5" />
                        : <ChevronDown className="w-3.5 h-3.5" />
                    }
                </button>
            </div>
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
type FilterTab = "all" | "sent" | "received" | "clipboard";

export function RecentActivity() {
    const { records, removeRecord, updateRecord, clearAll } = useVaultHistory();
    const [filter, setFilter] = useState<FilterTab>("all");
    const [collapsed, setCollapsed] = useState(false);
    const [copiedToast, setCopiedToast] = useState<string | null>(null);
    const [deleteToast, setDeleteToast] = useState<string | null>(null);

    const handleCopy = async (code: string) => {
        await navigator.clipboard.writeText(code);
        setCopiedToast(code);
        setTimeout(() => setCopiedToast(null), 1500);
    };

    const handleDeleteVault = async (record: VaultHistoryRecord) => {
        try {
            // First look up the vault ID via the access code
            const lookupId = record.accessCode.slice(0, 3);
            const lookupRes = await fetch(`/api/vault/code/${lookupId}`);

            if (!lookupRes.ok) {
                // Vault may already be deleted — just remove from local history
                removeRecord(record.id);
                setDeleteToast("Vault already expired or deleted.");
                setTimeout(() => setDeleteToast(null), 3000);
                return;
            }

            const lookupData = await lookupRes.json();
            const vaultId = lookupData.id || record.vaultId;

            if (!vaultId) {
                removeRecord(record.id);
                setDeleteToast("Vault not found — removed from history.");
                setTimeout(() => setDeleteToast(null), 3000);
                return;
            }

            // Delete the vault from the server
            const deleteRes = await fetch(`/api/vaults/${vaultId}`, { method: "DELETE" });

            if (deleteRes.ok) {
                // Mark as burned then remove
                updateRecord(record.accessCode, record.action, { status: "burned" });
                setTimeout(() => removeRecord(record.id), 800); // brief delay for animation
                setDeleteToast("Vault destroyed permanently.");
            } else {
                // Still remove from local history if server says it's gone
                removeRecord(record.id);
                setDeleteToast("Vault removed from history.");
            }
        } catch (err) {
            console.error("[RecentActivity] Delete failed:", err);
            removeRecord(record.id);
            setDeleteToast("Error deleting — removed from history.");
        }
        setTimeout(() => setDeleteToast(null), 3000);
    };

    if (records.length === 0) return null;

    const filtered = records.filter(r => {
        if (filter === "all") return true;
        if (filter === "sent") return r.action === "sent";
        if (filter === "received") return r.action === "received";
        if (filter === "clipboard") return r.type === "clipboard";
        return true;
    });

    const activeCount = records.filter(r => r.status === "active").length;
    const sentCount = records.filter(r => r.action === "sent").length;
    const receivedCount = records.filter(r => r.action === "received").length;

    const tabs: { key: FilterTab; label: string; count?: number }[] = [
        { key: "all", label: "All", count: records.length },
        { key: "sent", label: "Sent", count: sentCount },
        { key: "received", label: "Received", count: receivedCount },
        { key: "clipboard", label: "Clipboard" },
    ];

    return (
        <section className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl border border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/40">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 border border-cyan-500/25 flex items-center justify-center">
                            <Activity className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-zinc-200 tracking-tight">Recent Activity</h3>
                            <p className="text-[10px] text-zinc-500 font-mono">
                                {activeCount} active • {records.length} total
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        {records.length > 0 && (
                            <Button
                                variant="ghost" size="sm"
                                className="h-7 px-2 text-[10px] text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
                                onClick={clearAll}
                            >
                                <Trash2 className="w-3 h-3 mr-1" /> Clear
                            </Button>
                        )}
                        <Button
                            variant="ghost" size="sm"
                            className="h-7 w-7 p-0 text-zinc-500 hover:text-zinc-300"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>

                <AnimatePresence>
                    {!collapsed && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            {/* Filter tabs */}
                            <div className="flex px-3 pt-3 gap-1">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setFilter(tab.key)}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${filter === tab.key
                                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25"
                                            : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent"
                                            }`}
                                    >
                                        {tab.label}
                                        {tab.count !== undefined && (
                                            <span className={`font-mono ${filter === tab.key ? "text-cyan-300" : "text-zinc-600"}`}>
                                                {tab.count}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Records */}
                            <div className="p-3 space-y-2 max-h-[480px] overflow-y-auto custom-scrollbar">
                                <AnimatePresence mode="popLayout">
                                    {filtered.length > 0 ? (
                                        filtered.map(record => (
                                            <RecordCard
                                                key={record.id}
                                                record={record}
                                                onRemove={removeRecord}
                                                onCopy={handleCopy}
                                                onDeleteVault={handleDeleteVault}
                                            />
                                        ))
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-center py-8 text-zinc-600 text-xs font-mono"
                                        >
                                            No records match this filter.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Footer stats */}
                            <div className="px-5 py-3 border-t border-zinc-800/30 flex items-center justify-between text-[10px] text-zinc-600 font-mono">
                                <span className="flex items-center gap-1.5">
                                    <HardDrive className="w-3 h-3" />
                                    {formatBytes(records.reduce((sum, r) => sum + r.totalSize, 0))} total transferred
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Shield className="w-3 h-3" />
                                    Stored locally only
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Copied toast */}
            <AnimatePresence>
                {copiedToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono py-2 px-4 rounded-full shadow-2xl"
                    >
                        <Check className="w-3 h-3 inline mr-1.5" />
                        Code copied: {copiedToast.slice(0, 3)}-{copiedToast.slice(3)}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Delete toast */}
            <AnimatePresence>
                {deleteToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-red-500/30 text-red-400 text-xs font-mono py-2 px-4 rounded-full shadow-2xl"
                    >
                        <Flame className="w-3 h-3 inline mr-1.5" />
                        {deleteToast}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
