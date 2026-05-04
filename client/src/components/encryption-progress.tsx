import { motion, AnimatePresence } from "framer-motion";
import { 
    Key, FileText, Lock, Upload, CheckCircle, Loader2, Zap, Timer, 
    Activity, Cpu, Network, Shield, Binary, Layers 
} from "lucide-react";
import { useState, useEffect } from "react";

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
    if (!bps || bps <= 0) return "0 B/s";
    if (bps < 1024) return `${bps.toFixed(1)} B/s`;
    if (bps < 1024 * 1024) return `${(bps / 1024).toFixed(1)} KB/s`;
    return `${(bps / (1024 * 1024)).toFixed(1)} MB/s`;
};

const formatTime = (seconds: number) => {
    if (!seconds || seconds <= 0) return "--:--";
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
};

export function EncryptionProgress({ stage, step, progress, statusText, speed, eta, accessCode, masterKey }: EncryptionProgressProps) {
    const [logs, setLogs] = useState<{ id: string, msg: string, type: 'info' | 'success' | 'warn' }[]>([]);

    useEffect(() => {
        if (statusText) {
            setLogs(prev => [
                { id: Math.random().toString(36), msg: statusText, type: 'info' },
                ...prev.slice(0, 5)
            ]);
        }
    }, [statusText]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto flex flex-col gap-8 relative"
        >
            {/* ─── Premium Background Grid Decoration ─── */}
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />
            <div className="absolute -inset-x-10 top-0 bottom-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none -z-10" />

            {/* ─── Status HUD ─── */}
            <div className="flex items-center justify-between px-6 py-5 bg-zinc-950/40 border border-white/5 rounded-3xl backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Activity className="w-5 h-5 text-primary animate-pulse" />
                        <div className="absolute inset-0 bg-primary/20 blur-lg animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">System_Operational</span>
                        <span className="text-[9px] font-mono font-bold text-zinc-600">KERNEL_REVISION_4.12.0</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end mr-2">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Load_Factor</span>
                        <span className="text-[10px] font-mono text-primary">0.04 ms</span>
                    </div>
                    <div className="h-8 w-px bg-white/10" />
                    <div className="flex gap-1.5 h-6 items-end">
                        {[1, 2, 3, 4, 5].map(i => (
                            <motion.div 
                                key={i}
                                animate={{ height: stage === 'uploading' ? [8, 20, 8] : 8 }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                                className="w-1.5 bg-primary/40 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Central Handshake Hub ─── */}
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-white/5">
                <div className="glass-card p-12 bg-zinc-950/80 rounded-[2.4rem] relative overflow-hidden border-none shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                    {/* Inner Glow and Effects */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 blur-[80px] rounded-full" />
                    
                    {/* Core Identity Molecule */}
                    <div className="relative w-40 h-40 mx-auto mb-12">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[3px] border-primary/10 rounded-full border-dashed"
                        />
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-6 border border-white/5 rounded-full"
                        />
                        
                        <div className="absolute inset-0 rounded-[3rem] bg-zinc-950 border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.15)] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
                            <AnimatePresence mode="wait">
                                {stage === 'success' ? (
                                    <motion.div key="success" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                                        <ShieldCheck className="w-16 h-16 text-primary drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <Lock className="w-16 h-16 text-primary drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
                                        </motion.div>
                                        <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Telemetry Readout */}
                    <div className="text-center mb-12">
                        <AnimatePresence mode="wait">
                            <motion.h3 
                                key={statusText}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="text-lg font-black text-white uppercase tracking-[0.4em] mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                            >
                                {statusText}
                            </motion.h3>
                        </AnimatePresence>

                        <div className="flex justify-center items-center gap-10">
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                    <Network className="w-3 h-3" /> Bandwidth
                                </span>
                                <span className="text-sm font-mono font-black text-zinc-300">{formatSpeed(speed || 0)}</span>
                            </div>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                    <Timer className="w-3 h-3" /> Time Remaining
                                </span>
                                <span className="text-sm font-mono font-black text-zinc-300">{formatTime(eta || 0)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Glass Progress Engine */}
                    <div className="space-y-4 px-2">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-3">
                                <Binary className="w-4 h-4 text-primary animate-pulse" />
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Cryptographic_Handshake</span>
                            </div>
                            <span className="text-4xl font-mono font-black text-white tracking-tighter">
                                {Math.round(progress)}<span className="text-primary text-xl ml-1">%</span>
                            </span>
                        </div>
                        <div className="h-6 w-full bg-zinc-950 rounded-2xl border border-white/5 overflow-hidden p-[4px] relative shadow-inner">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-emerald-600 via-primary to-emerald-400 rounded-xl relative shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                            >
                                {/* Shimmer Effect */}
                                <motion.div 
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                                />
                                {/* Progress Grain */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Security Keys HUD ─── */}
            {(accessCode || masterKey) && (
                <div className="grid grid-cols-1 gap-5">
                    {masterKey && (
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 text-left relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Key className="w-12 h-12 text-blue-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-3.5 h-3.5 text-blue-500" />
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Master_Key_Fragment</span>
                            </div>
                            <div className="text-[11px] font-mono text-zinc-500 break-all bg-black/40 p-4 rounded-xl border border-white/5 group-hover:text-zinc-300 transition-colors leading-relaxed selection:bg-blue-500/20">
                                {masterKey}
                            </div>
                        </motion.div>
                    )}
                    {accessCode && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-emerald-500/5 border border-primary/20 rounded-[2.5rem] p-10 text-center relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] group"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 blur-[50px] rounded-full" />
                            
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Fingerprint className="w-4 h-4 text-primary" />
                                <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Ephemeral_Handshake_Key</span>
                            </div>
                            
                            <div className="text-5xl sm:text-7xl font-mono font-black text-white tracking-[0.3em] flex items-center justify-center drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                                {accessCode.slice(0, 3)}
                                <motion.span 
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-primary mx-3"
                                >
                                    ·
                                </motion.span>
                                {accessCode.slice(3)}
                            </div>
                            
                            <div className="mt-8 flex justify-center">
                                <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.2em] animate-pulse">
                                    Awaiting Handshake Confirmation
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            )}

            {/* ─── Real-time Matrix Feed ─── */}
            <div className="bg-zinc-950/80 border border-white/5 rounded-[2rem] p-6 h-40 overflow-hidden relative shadow-inner group">
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <div className="absolute top-4 right-6">
                    <Database className="w-4 h-4 text-zinc-800 group-hover:text-primary/20 transition-colors" />
                </div>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-600">
                    <AnimatePresence>
                        {logs.map((log, i) => (
                            <motion.div 
                                key={log.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 py-0.5 border-b border-white/[0.02]"
                            >
                                <span className="text-primary/30 w-16 tabular-nums">{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                                <span className="w-2 h-2 rounded-full bg-zinc-800 flex-shrink-0" />
                                <span className={`${log.type === 'success' ? 'text-primary/70' : 'text-zinc-500'} tracking-tight`}>
                                    {log.msg.toUpperCase().replace(/ /g, '_')}
                                </span>
                                {i === 0 && <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-3 bg-primary/40 ml-1" />}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
