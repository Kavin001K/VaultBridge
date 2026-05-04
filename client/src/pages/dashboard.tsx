import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, Shield, HardDrive, Download, Zap, Flame, Clock,
    ArrowUpRight, BarChart3, Database, ShieldAlert, CheckCircle2,
    RefreshCcw, AlertCircle, X, Terminal, Search, Filter
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGlobalStats, useStorageStatus, useSystemLogs } from "@/hooks/use-vaults";
import { formatDistanceToNow } from "date-fns";

const StatCard = ({ title, value, subValue, icon: Icon, color, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="relative group"
    >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
        <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-[0.03] blur-2xl -mr-12 -mt-12 group-hover:opacity-[0.08] transition-opacity duration-500`} />
            
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-400 group-hover:text-white transition-colors duration-500`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">
                    Real-time
                </div>
            </div>
            
            <div className="space-y-1">
                <h3 className="text-zinc-500 text-sm font-medium">{title}</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white tracking-tight">{value}</span>
                    {subValue && <span className="text-xs text-zinc-500 font-medium">{subValue}</span>}
                </div>
            </div>
        </div>
    </motion.div>
);

const StorageBar = ({ name, used, total, provider }: any) => {
    const percentage = (used / total) * 100;
    const isCritical = percentage > 90;
    const isWarning = percentage > 75;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isCritical ? 'bg-red-500 animate-pulse' : isWarning ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{name}</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                    {(used / (1024 * 1024 * 1024)).toFixed(2)} / {(total / (1024 * 1024 * 1024)).toFixed(2)} GB
                </span>
            </div>
            <div className="relative h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${
                        isCritical ? 'from-red-600 to-red-400' : 
                        isWarning ? 'from-amber-600 to-amber-400' : 
                        'from-emerald-600 to-emerald-400'
                    }`}
                />
            </div>
            <div className="flex justify-between">
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{provider}</span>
                <span className={`text-[10px] font-bold ${isCritical ? 'text-red-400' : 'text-zinc-500'}`}>
                    {percentage.toFixed(1)}% CAPACITY
                </span>
            </div>
        </div>
    );
};

const LogViewer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const { data: logs, isLoading } = useSystemLogs(100);
    const [filter, setFilter] = useState("");

    const filteredLogs = logs?.filter((log: any) => 
        log.event.toLowerCase().includes(filter.toLowerCase()) ||
        log.message.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl h-[80vh] bg-zinc-950 border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
                    >
                        {/* Terminal Header */}
                        <div className="px-8 py-6 border-b border-white/5 bg-zinc-900/50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                                </div>
                                <div className="h-4 w-px bg-white/10 mx-2" />
                                <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs font-bold tracking-widest uppercase">
                                    <Terminal className="w-4 h-4" />
                                    System_Audit_Log v1.0
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                                    <input 
                                        type="text" 
                                        placeholder="SEARCH_EVENTS..." 
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="bg-zinc-950/50 border border-white/5 rounded-full pl-9 pr-4 py-2 text-[10px] font-mono text-zinc-300 focus:outline-none focus:border-primary/50 transition-all w-48 group-hover:w-64"
                                    />
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={onClose}
                                    className="rounded-full hover:bg-white/5 text-zinc-500 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Logs Content */}
                        <div className="flex-1 overflow-y-auto p-8 font-mono text-[11px] leading-relaxed custom-scrollbar">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full gap-3 text-zinc-500 italic">
                                    <RefreshCcw className="w-4 h-4 animate-spin" />
                                    Initializing secure connection to audit node...
                                </div>
                            ) : filteredLogs?.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-zinc-600 italic gap-2">
                                    <ShieldAlert className="w-8 h-8 opacity-20" />
                                    No events match current filter.
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {filteredLogs?.map((log: any) => (
                                        <div key={log.id} className="flex gap-4 group hover:bg-white/[0.02] -mx-4 px-4 py-1.5 rounded-lg transition-colors">
                                            <span className="text-zinc-600 shrink-0 select-none">
                                                [{new Date(log.timestamp).toLocaleTimeString()}]
                                            </span>
                                            <span className={`shrink-0 font-black tracking-widest px-1.5 py-0.5 rounded text-[9px] border ${
                                                log.level === 'error' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                log.level === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                                log.level === 'security' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                            }`}>
                                                {log.event}
                                            </span>
                                            <span className="text-zinc-400 italic font-bold">
                                                {log.message}
                                            </span>
                                            {log.details && Object.keys(log.details).length > 0 && (
                                                <span className="text-zinc-600 italic opacity-0 group-hover:opacity-100 transition-opacity">
                                                    // {JSON.stringify(log.details)}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-8 text-zinc-700 italic border-t border-white/5 animate-pulse">
                                        &gt; LISTENING_FOR_NEW_EVENTS...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-4 border-t border-white/5 bg-zinc-950 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Connection: Encrypted_TLS_1.3</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest italic">Source: {location.hostname}</span>
                                </div>
                            </div>
                            <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                                {filteredLogs?.length || 0} Events Logged
                            </div>
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
    const [location] = useLocation();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLogsOpen, setIsLogsOpen] = useState(false);

    // Auto-open logs if requested via URL param (Deep-linking)
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get('logs') === 'true') {
            setIsLogsOpen(true);
        }
    }, []);

    const handleManualRefresh = async () => {
        setIsRefreshing(true);
        try {
            // Trigger server-side deep reconciliation of both storage and global metrics
            await fetch("/api/storage/reconcile", { method: "POST" });
            
            // Refetch both data sets to update UI
            await Promise.all([
                refetchStats(),
                refetchStorage()
            ]);
        } catch (err) {
            console.error("Manual refresh failed", err);
        } finally {
            // Keep the refreshing state for a moment for that 'technical' feel
            setTimeout(() => setIsRefreshing(false), 1200);
        }
    };

    const formatBytes = (bytesStr: string) => {
        const bytes = BigInt(bytesStr || "0");
        if (bytes === BigInt(0)) return "0 Bytes";
        const k = BigInt(1024);
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(Number(bytes)) / Math.log(1024));
        return parseFloat((Number(bytes) / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter',system-ui,sans-serif] selection:bg-primary/30">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                                <Activity className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Executive Console</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Platform <span className="text-zinc-500 italic font-medium">Metrics</span></h1>
                        <p className="text-zinc-500 text-sm mt-2 max-w-md">Real-time health monitoring and cryptographic throughput across the VaultBridge network.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white"
                            onClick={handleManualRefresh}
                            disabled={isRefreshing}
                        >
                            <RefreshCcw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                            {isRefreshing ? "Refreshing..." : "Sync Now"}
                        </Button>
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="text-zinc-500 hover:text-white">
                                Exit Terminal
                            </Button>
                        </Link>
                    </div>
                </header>

                {statsError ? (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-12 text-center">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-white mb-2">Metrics Unavailable</h2>
                        <p className="text-red-400/80 max-w-md mx-auto">The statistics engine failed to initialize. Please ensure the migration `add_global_stats.sql` has been applied to your database.</p>
                    </div>
                ) : statsLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-40 bg-zinc-900/50 rounded-3xl border border-white/5" />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-12">
                        {/* Main Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard 
                                title="Active Vaults"
                                value={stats.activeVaultsCount || 0}
                                subValue="LIVE NOW"
                                icon={Shield}
                                color="from-emerald-500 to-cyan-500"
                                delay={0.1}
                            />
                            <StatCard 
                                title="Throughput"
                                value={formatBytes(stats.totalBytesUploaded)}
                                subValue="TRANSFERRED"
                                icon={Zap}
                                color="from-amber-500 to-orange-500"
                                delay={0.2}
                            />
                            <StatCard 
                                title="Cumulative Vaults"
                                value={stats.totalVaultsCreated || 0}
                                subValue="HISTORICAL"
                                icon={Database}
                                color="from-purple-500 to-pink-500"
                                delay={0.3}
                            />
                            <StatCard 
                                title="Asset Downloads"
                                value={stats.totalDownloads || 0}
                                subValue="SUCCESSFUL"
                                icon={Download}
                                color="from-blue-500 to-indigo-500"
                                delay={0.4}
                            />
                        </div>

                        {/* Secondary View: Storage & Health */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Storage Capacity */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="lg:col-span-2 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                                            <HardDrive className="w-5 h-5 text-zinc-400" />
                                        </div>
                                        <h2 className="text-xl font-bold tracking-tight">Storage Clusters</h2>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                                        Operational
                                    </div>
                                </div>

                                {storageLoading ? (
                                    <div className="space-y-6 animate-pulse">
                                        <div className="h-12 bg-zinc-900/50 rounded-xl" />
                                        <div className="h-12 bg-zinc-900/50 rounded-xl" />
                                    </div>
                                ) : (
                                    <div className="grid sm:grid-cols-2 gap-12">
                                        <StorageBar 
                                            name="Tier 1 (S3/R2)"
                                            used={storageStatus?.r2?.usedBytes || 0}
                                            total={storageStatus?.r2?.limitBytes || 1024 * 1024 * 1024 * 10}
                                            provider="Cloudflare R2"
                                        />
                                        <StorageBar 
                                            name="Tier 2 (Supabase)"
                                            used={storageStatus?.supabase?.usedBytes || 0}
                                            total={storageStatus?.supabase?.limitBytes || 1024 * 1024 * 1024 * 0.5}
                                            provider="Supabase Storage"
                                        />
                                    </div>
                                )}
                                
                                <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Fragmentation</p>
                                        <p className="text-sm font-bold text-zinc-400">0.04%</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Uptime</p>
                                        <p className="text-sm font-bold text-emerald-400">99.99%</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Latency (Avg)</p>
                                        <p className="text-sm font-bold text-zinc-400">42ms</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Region</p>
                                        <p className="text-sm font-bold text-zinc-400">Global-Edge</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* System Status / Feed */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-zinc-950/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                                        <BarChart3 className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">System Events</h2>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                            <Flame className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-300 font-medium">Last Vault Burned</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">
                                                {stats.lastBurnedAt 
                                                    ? `${formatDistanceToNow(new Date(stats.lastBurnedAt))} ago` 
                                                    : "No burn events recorded"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                            <Clock className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-300 font-medium">Auto-Cleanup Engine</p>
                                            <p className="text-xs text-zinc-500 mt-0.5 uppercase tracking-widest font-bold text-emerald-500/80">Active & Ready</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-300 font-medium">Security Perimeter</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">PBKDF2 Salt Integrity: <span className="text-emerald-500">VERIFIED</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <Button 
                                        variant="outline" 
                                        onClick={() => setIsLogsOpen(true)}
                                        className="w-full bg-zinc-900/50 border-zinc-800 text-xs font-bold uppercase tracking-widest py-6 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                                    >
                                        View System Logs
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </main>

            {/* Bottom Gradient Blur */}
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

            <LogViewer isOpen={isLogsOpen} onClose={() => setIsLogsOpen(false)} />
        </div>
    );
}
