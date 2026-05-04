import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Zap, Activity } from 'lucide-react';

interface VaultDialProps {
    totalVaults?: number;
    activeVaults?: number;
}

export const VaultDial: React.FC<VaultDialProps> = ({ 
    totalVaults = 0, 
    activeVaults = 0 
}) => {
    const [displayActive, setDisplayActive] = useState(0);
    
    useEffect(() => {
        setDisplayActive(activeVaults);
    }, [activeVaults]);

    return (
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center select-none">
            {/* 1. Subtle Glow Background */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-[60px]" />
            
            {/* 2. Elegant Concentric Rings */}
            {/* Outer Ring - Slow Rotation */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-emerald-500/10 border-dashed"
            />

            {/* Middle Ring - Reverse Rotation */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-emerald-500/5"
            />

            {/* Inner Ring - Accent */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border-t border-emerald-500/30 border-transparent"
            />

            {/* 3. The Core Metric */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-zinc-950/50 backdrop-blur-xl border border-white/5 flex flex-col items-center justify-center shadow-2xl z-20">
                <div className="flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.span 
                            key={displayActive}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tighter"
                        >
                            {displayActive}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-[10px] font-mono font-bold text-emerald-500/60 uppercase tracking-[0.3em] mt-1">
                        Live Bridges
                    </span>
                </div>
            </div>

            {/* 4. Minimalist Orbital Icons */}
            <Orbital delay={0} distance={isMobileSize() ? 110 : 140} speed={25}>
                <Shield className="w-3 h-3 text-emerald-500/40" />
            </Orbital>
            <Orbital delay={6.25} distance={isMobileSize() ? 110 : 140} speed={25}>
                <Lock className="w-3 h-3 text-emerald-500/40" />
            </Orbital>
            <Orbital delay={12.5} distance={isMobileSize() ? 110 : 140} speed={25}>
                <Zap className="w-3 h-3 text-emerald-500/40" />
            </Orbital>
            <Orbital delay={18.75} distance={isMobileSize() ? 110 : 140} speed={25}>
                <Activity className="w-3 h-3 text-emerald-500/40" />
            </Orbital>

            {/* 5. Total Counter (Clean Footer) */}
            <div className="absolute -bottom-12 flex flex-col items-center">
                <div className="h-6 w-px bg-gradient-to-b from-emerald-500/20 to-transparent" />
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 backdrop-blur-md">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Total Secured:</span>
                    <span className="text-xs font-mono font-bold text-zinc-200">{totalVaults.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

const isMobileSize = () => typeof window !== 'undefined' && window.innerWidth < 640;

const Orbital: React.FC<{ children: React.ReactNode, delay: number, distance: number, speed: number }> = ({ children, delay, distance, speed }) => {
    return (
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: -delay }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
            <div 
                style={{ transform: `translate(${distance}px, 0)` }}
                className="relative"
            >
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: -delay }}
                    className="p-1.5"
                >
                    {children}
                </motion.div>
            </div>
        </motion.div>
    );
};
