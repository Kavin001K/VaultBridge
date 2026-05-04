import { motion, AnimatePresence } from "framer-motion";
import { 
    Key, FileText, Lock, Upload, CheckCircle, Loader2, Zap, Timer, 
    Activity, Cpu, Network, Shield, Binary, Layers,
    ShieldCheck, Fingerprint, Database
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
    if (!bps || bps <= 0) return "Calculating...";
    if (bps < 1024) return `${bps.toFixed(0)} B/s`;
    if (bps < 1024 * 1024) return `${(bps / 1024).toFixed(1)} KB/s`;
    return `${(bps / (1024 * 1024)).toFixed(1)} MB/s`;
};

const formatTime = (seconds: number) => {
    if (!seconds || seconds <= 0 || !isFinite(seconds)) return "Estimating...";
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
};

/** Format access code as XXX-XXXXX for display */
const formatDisplayCode = (code: string): string => {
    const clean = code.replace(/[^A-Za-z0-9]/g, '');
    if (clean.length > 3) return clean.slice(0, 3) + '-' + clean.slice(3);
    return clean;
};

export function EncryptionProgress({ stage, step, progress, statusText, speed, eta, accessCode, masterKey }: EncryptionProgressProps) {
    const [logs, setLogs] = useState<{ id: string, msg: string, type: 'info' | 'success' | 'warn' }[]>([]);

    useEffect(() => {
        if (statusText) {
            setLogs(prev => [
                { id: Math.random().toString(36), msg: statusText, type: 'info' },
                ...prev.slice(0, 4)
            ]);
        }
    }, [statusText]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto flex flex-col gap-8 relative"
        >
            {/* ─── Subtle Background Glow ─── */}
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

            {/* ─── Status HUD ─── */}
            <div className="flex items-center justify-between px-6 py-5 bg-zinc-950/40 border border-white/5 rounded-3xl backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Activity className="w-5 h-5 text-primary animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                            {stage === 'success' ? 'Transfer Complete' : 'Processing'}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 h-6 items-end">
                        {[1, 2, 3].map(i => (
                            <motion.div 
                                key={i}
                                animate={{ height: stage === 'uploading' ? [8, 20, 8] : 8 }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                                className="w-1.5 bg-primary/40 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Central Progress Hub ─── */}
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-white/5">
                <div className="glass-card p-12 bg-zinc-950/80 rounded-[2.4rem] relative overflow-hidden border-none shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    
                    {/* Core Identity — Single clean spinner */}
                    <div className="relative w-36 h-36 mx-auto mb-10">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[3px] border-primary/10 rounded-full border-dashed"
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
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Status + Telemetry */}
                    <div className="text-center mb-10">
                        <AnimatePresence mode="wait">
                            <motion.h3 
                                key={statusText}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="text-base font-black text-white uppercase tracking-[0.3em] mb-6"
                            >
                                {statusText}
                            </motion.h3>
                        </AnimatePresence>

                        <div className="flex justify-center items-center gap-10">
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                    <Network className="w-3 h-3" /> Speed
                                </span>
                                <span className="text-sm font-mono font-black text-zinc-300">{formatSpeed(speed || 0)}</span>
                            </div>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                    <Timer className="w-3 h-3" /> ETA
                                </span>
                                <span className="text-sm font-mono font-black text-zinc-300">{formatTime(eta || 0)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-4 px-2">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-3">
                                <Binary className="w-4 h-4 text-primary animate-pulse" />
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
                                    {stage === 'success' ? 'Transfer Complete' : 'Encrypting & Uploading'}
                                </span>
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
                                <motion.div 
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Access Code Display ─── */}
            {(accessCode || masterKey) && (
                <div className="grid grid-cols-1 gap-5">
                    {masterKey && (
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 text-left relative overflow-hidden group"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-3.5 h-3.5 text-blue-500" />
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Master Key Fragment</span>
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
                            
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Fingerprint className="w-4 h-4 text-primary" />
                                <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Your Access Code</span>
                            </div>
                            
                            <div className="text-5xl sm:text-7xl font-mono font-black text-white tracking-[0.3em] flex items-center justify-center drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                                {formatDisplayCode(accessCode)}
                            </div>
                            
                            <div className="mt-8 flex justify-center">
                                <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.2em] animate-pulse">
                                    Share this code to grant access
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            )}

            {/* ─── Activity Log ─── */}
            <div className="bg-zinc-950/80 border border-white/5 rounded-[2rem] p-6 h-36 overflow-hidden relative shadow-inner group">
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
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
                                    {log.msg}
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
