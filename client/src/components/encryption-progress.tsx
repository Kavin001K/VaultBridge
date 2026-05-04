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
            className="w-full max-w-lg mx-auto text-center"
        >
            {/* ─── Executive Status Header ─── */}
            <div className="flex items-center justify-between mb-8 px-2">
                <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 flex items-center gap-1.5">
                        <Activity className="w-3 h-3" /> System Live
                    </span>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono font-bold text-zinc-400">ENCRYPTION_ENGINE_v2.4</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Worker Threads</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <motion.div 
                                key={i}
                                animate={{ opacity: stage === 'uploading' ? [0.3, 1, 0.3] : 0.3 }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                className="w-1.5 h-3 bg-primary/40 rounded-sm" 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Central Visualizer ─── */}
            <div className="relative w-40 h-40 mx-auto mb-10">
                {/* Orbital Rings */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-white/5 rounded-full"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-primary/10 rounded-full border-dashed"
                />
                
                {/* Center Nucleus */}
                <div className="absolute inset-8 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                    <AnimatePresence mode="wait">
                        {stage === 'success' ? (
                            <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                <CheckCircle className="w-12 h-12 text-primary shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                            </motion.div>
                        ) : (
                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
                                <Lock className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                                <motion.div 
                                    animate={{ height: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-primary/20 blur-xl"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Satellite Nodes */}
                {stage !== 'success' && [0, 90, 180, 270].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        style={{
                            top: '50%',
                            left: '50%',
                            marginTop: -4,
                            marginLeft: -4,
                        }}
                        animate={{
                            rotate: [angle, angle + 360],
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                            rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity },
                            opacity: { duration: 2, repeat: Infinity }
                        }}
                    >
                        <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 origin-left" />
                    </motion.div>
                ))}
            </div>

            {/* ─── Real-time Metrics ─── */}
            <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-1">
                    <Network className="w-4 h-4 text-blue-400 opacity-70" />
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Speed</span>
                    <span className="text-sm font-mono font-bold text-white">{formatSpeed(speed || 0)}</span>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-1">
                    <Timer className="w-4 h-4 text-amber-400 opacity-70" />
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Time Left</span>
                    <span className="text-sm font-mono font-bold text-white">{formatTime(eta || 0)}</span>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-1">
                    <Binary className="w-4 h-4 text-primary opacity-70" />
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Progress</span>
                    <span className="text-sm font-mono font-bold text-white">{Math.round(progress)}%</span>
                </div>
            </div>

            {/* ─── Main Progress Bar ─── */}
            <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                    <div className="flex flex-col items-start">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Process Status</span>
                        <span className="text-xs font-mono font-bold text-primary truncate max-w-[200px]">{statusText}</span>
                    </div>
                    <span className="text-3xl font-mono font-black text-white">{Math.round(progress)}%</span>
                </div>
                <div className="h-3 w-full bg-zinc-900 rounded-full border border-white/5 overflow-hidden p-[2px]">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full relative"
                    >
                        <motion.div 
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* ─── Security Fragments (Live Feed) ─── */}
            {(accessCode || masterKey) && (
                <div className="space-y-3 mb-10">
                    <AnimatePresence mode="popLayout">
                        {masterKey && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-zinc-900/80 border border-white/5 rounded-2xl p-4 text-left relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Shield className="w-8 h-8 text-blue-500" />
                                </div>
                                <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2 block">Cryptographic Identity</span>
                                <div className="text-[11px] font-mono text-zinc-400 leading-relaxed opacity-70 break-all select-all">
                                    {masterKey.slice(0, 64)}...
                                </div>
                            </motion.div>
                        )}
                        {accessCode && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2 block">Ephemeral Access Key</span>
                                <div className="text-4xl font-mono font-black text-white tracking-[0.3em] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                    {accessCode.slice(0, 3)}<span className="text-primary/50 font-sans mx-1">·</span>{accessCode.slice(3)}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* ─── Background Logs (Matrix/Terminal Style) ─── */}
            <div className="bg-black/40 border border-white/5 rounded-xl p-4 text-left h-32 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-zinc-950/80 to-transparent z-10" />
                <div className="flex flex-col gap-1.5 font-mono text-[10px] text-zinc-500">
                    <AnimatePresence>
                        {logs.map((log) => (
                            <motion.div 
                                key={log.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-primary/40">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                                <span className="text-zinc-400">{log.msg}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="absolute bottom-2 right-4 flex items-center gap-2">
                   <Layers className="w-3 h-3 text-zinc-600" />
                   <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Active Stack</span>
                </div>
            </div>
        </motion.div>
    );
}
