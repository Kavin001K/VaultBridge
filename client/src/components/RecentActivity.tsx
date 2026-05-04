import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock, Download, Upload, Clipboard, Eye, EyeOff,
    ExternalLink, Copy, Check, Trash2, Mail, X,
    Monitor, Smartphone, Globe, ChevronDown, ChevronUp,
    Shield, FileText, Zap, AlertTriangle, Activity,
    HardDrive, Timer, Loader2, Flame, Binary, ShieldCheck,
    Fingerprint, Cpu, Network, Layers, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVaultHistory, type VaultHistoryRecord, type VaultRecordStatus } from "@/hooks/useVaultHistory";
import { getVaultIdentity } from "@/lib/cipherAvatar";

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
const statusConfig: Record<VaultRecordStatus, { color: string; bg: string; border: string; label: string; icon: any }> = {
    active: { color: "text-primary", bg: "bg-primary/10", border: "border-primary/20", label: "ACTIVE", icon: ShieldCheck },
    expired: { color: "text-zinc-500", bg: "bg-zinc-500/10", border: "border-zinc-500/20", label: "EXPIRED", icon: Timer },
    exhausted: { color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", label: "LIMIT_HIT", icon: AlertTriangle },
    burned: { color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", label: "PURGED", icon: Flame },
};

function StatusBadge({ status }: { status: VaultRecordStatus }) {
    const cfg = statusConfig[status];
    const Icon = cfg.icon;
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
            {status === "active" && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
            <Icon className="w-3 h-3" />
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
            if (diff <= 0) { setTimeLeft("EXPIRED"); return; }
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
    const isUrgent = diff > 0 && diff < 3600000;

    if (diff <= 0) return <span className="text-zinc-600 font-mono text-[10px]">EXPIRED</span>;

    return (
        <span className={`font-mono text-[10px] font-black tracking-widest ${isUrgent ? "text-red-500 animate-pulse" : "text-primary/70"}`}>
            {timeLeft}
        </span>
    );
}

// ─── Single Record Card ──────────────────────────────────────────────────────
function RecordCard({ record, onRemove, onCopy, onDeleteVault }: any) {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const isSent = record.action === "sent";
    const isClipboard = record.type === "clipboard";
    const identity = getVaultIdentity(record.accessCode.slice(0, 3));

    const handleCopy = () => {
        onCopy(record.accessCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const remaining = Math.max(0, record.maxDownloads - record.downloadCount);
    const usagePercent = record.maxDownloads > 0 ? Math.min(100, Math.round((record.downloadCount / record.maxDownloads) * 100)) : 0;

    const handleDeleteVault = async () => {
        if (!confirmDelete) {
            setConfirmDelete(true);
            setTimeout(() => setConfirmDelete(false), 5000);
            return;
        }
        setIsDeleting(true);
        try { await onDeleteVault(record); } finally { setIsDeleting(false); setConfirmDelete(false); }
    };

    return (
        <motion.div 
            layout 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className={`relative group p-6 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                record.status === 'active' 
                ? 'border-primary/20 bg-zinc-950/40 hover:bg-zinc-950/60 shadow-[0_0_50px_rgba(16,185,129,0.05)]' 
                : 'border-white/5 opacity-50 grayscale bg-zinc-950/20'
            }`}
        >
            {/* Background HUD elements for Active Bridges */}
            {record.status === 'active' && (
                <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 blur-2xl -ml-12 -mb-12" />
                    <div className="absolute top-4 right-4 flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="w-1 h-1 rounded-full bg-primary/20" />
                        <div className="w-1 h-1 rounded-full bg-primary/10" />
                    </div>
                </>
            )}

            <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-2xl overflow-hidden transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${isClipboard ? 'bg-gradient-to-br from-violet-500/20 to-indigo-500/20' : identity.color}`}>
                        {record.status === 'active' && (
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-primary/20"
                            />
                        )}
                        {isClipboard ? <Clipboard className="w-6 h-6 text-violet-400" /> : <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{identity.icon}</span>}
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base font-black text-white uppercase italic tracking-tighter truncate group-hover:text-primary transition-colors">
                                {isClipboard ? "SECURE_BUFFER_STREAM" : record.fileNames[0] || "BINARY_VAULT_NODE"}
                            </h4>
                            {record.fileCount > 1 && (
                                <span className="text-[8px] font-black font-mono bg-zinc-900 border border-primary/20 px-2 py-0.5 rounded-full text-primary">
                                    +{record.fileCount - 1}_ASSETS
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                            <span className={`flex items-center gap-1.5 ${isSent ? 'text-primary/70' : 'text-cyan-400/70'}`}>
                                {isSent ? <Upload className="w-3 h-3" /> : <Download className="w-3 h-3" />}
                                {isSent ? "OUTBOUND_SECURE" : "INBOUND_BRIDGE"}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-800" />
                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {formatRelativeTime(record.createdAt)}</span>
                        </div>
                    </div>
                </div>
                <StatusBadge status={record.status} />
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950 border border-white/5 hover:border-primary/50 transition-all group/pin">
                        <span className="font-mono text-xs font-black text-white tracking-[0.2em]">{record.accessCode.slice(0, 3)}·{record.accessCode.slice(3)}</span>
                        {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5 text-zinc-600 group-hover/pin:text-primary transition-colors" />}
                    </button>
                    {record.status === 'active' && <LiveCountdown expiresAt={record.expiresAt} />}
                </div>
                <div className="flex items-center gap-4">
                   <div className="text-right">
                       <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-0.5">Payload</span>
                       <span className="text-[10px] font-black font-mono text-zinc-300">{formatBytes(record.totalSize)}</span>
                   </div>
                   <button onClick={() => setExpanded(!expanded)} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
                        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                   </button>
                </div>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="pt-6 mt-6 border-t border-white/5 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block">System Node</span>
                                    <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400">
                                        {record.device.isMobile ? <Smartphone className="w-3.5 h-3.5" /> : <Monitor className="w-3.5 h-3.5" />}
                                        {record.device.browser} / {record.device.os}
                                    </div>
                                </div>
                                <div className="space-y-1 text-right">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block">Downloads</span>
                                    <div className="text-[10px] font-black text-zinc-400 font-mono">
                                        <span className="text-primary">{record.downloadCount}</span> / {record.maxDownloads}
                                    </div>
                                </div>
                            </div>
                            
                            {record.fileNames.length > 1 && (
                                <div className="space-y-2">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block">Encrypted Fragments</span>
                                    <div className="grid grid-cols-1 gap-1">
                                        {record.fileNames.map((name: string, i: number) => (
                                            <div key={i} className="flex items-center gap-2 text-[10px] font-medium text-zinc-400 bg-black/20 p-2 rounded-lg border border-white/5">
                                                <Layers className="w-3 h-3 text-primary/50" /> {name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center justify-between gap-4 pt-2">
                                <Link href={`/access#code=${record.accessCode}`}>
                                    <Button variant="ghost" size="sm" className="h-10 text-[10px] font-black tracking-widest text-primary hover:bg-primary/10 gap-2 uppercase">
                                        <ArrowRight className="w-3.5 h-3.5" /> RE-ENGAGE_VAULT
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" onClick={() => onRemove(record.id)} className="h-10 text-[10px] font-black tracking-widest text-zinc-500 hover:text-white uppercase">DISMISS</Button>
                                    {isSent && record.status === 'active' && (
                                        <Button onClick={handleDeleteVault} disabled={isDeleting} className={`h-10 text-[10px] font-black tracking-widest rounded-xl px-4 transition-all ${confirmDelete ? 'bg-red-600 text-white' : 'bg-red-500/10 text-red-500 hover:bg-red-500/20'}`}>
                                            {isDeleting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : confirmDelete ? "CONFIRM_PURGE" : "PURGE_VAULT"}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function RecentActivity() {
    const { records, removeRecord, updateRecord, clearAll } = useVaultHistory();
    const [filter, setFilter] = useState("all");
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleCopy = async (code: string) => {
        await navigator.clipboard.writeText(code);
        setToastMessage("KEY_COPIED_TO_BUFFER");
        setTimeout(() => setToastMessage(null), 2000);
    };

    const handleDeleteVault = async (record: any) => {
        try {
            const lookupId = record.accessCode.slice(0, 3);
            // Re-map to correct production endpoint
            const lookupRes = await fetch(`/api/vaults/code/${lookupId}`);
            if (!lookupRes.ok) { removeRecord(record.id); return; }
            const lookupData = await lookupRes.json();
            const deleteRes = await fetch(`/api/vaults/${lookupData.id}`, { method: "DELETE" });
            if (deleteRes.ok) {
                setToastMessage("VAULT_PURGED_FROM_INFRASTRUCTURE");
                updateRecord(record.accessCode, record.action, { status: "burned" });
                setTimeout(() => {
                    removeRecord(record.id);
                    setToastMessage(null);
                }, 1200);
            } else { removeRecord(record.id); }
        } catch (err) { removeRecord(record.id); }
    };

    if (records.length === 0) return null;

    const filtered = records.filter(r => {
        if (filter === "all") return true;
        if (filter === "sent") return r.action === "sent";
        if (filter === "received") return r.action === "received";
        return true;
    });

    return (
        <section className="w-full space-y-6">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Activity <span className="text-primary">Logs</span></h3>
                        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">{records.length} LOCAL_ENTRIES_FOUND</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {["all", "sent", "received"].map(f => (
                        <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-primary text-primary-foreground' : 'text-zinc-500 hover:text-white bg-white/5 border border-white/5'}`}>
                            {f}
                        </button>
                    ))}
                    <Button variant="ghost" size="icon" onClick={clearAll} className="h-8 w-8 text-zinc-500 hover:text-red-500"><Trash2 className="w-4 h-4" /></Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                    {filtered.map(record => (
                        <RecordCard key={record.id} record={record} onRemove={removeRecord} onCopy={handleCopy} onDeleteVault={handleDeleteVault} />
                    ))}
                </AnimatePresence>
            </div>

            {toastMessage && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-[10px] font-black tracking-widest shadow-2xl">
                    {toastMessage}
                </motion.div>
            )}
        </section>
    );
}
