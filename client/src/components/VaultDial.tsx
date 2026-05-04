import React, { useEffect, useMemo, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Zap, Activity, Cpu, Database, ChevronUp } from 'lucide-react';

interface VaultDialProps {
    totalVaults?: number;
    activeVaults?: number;
}

export const VaultDial: React.FC<VaultDialProps> = ({ 
    totalVaults = 0, 
    activeVaults = 0 
}) => {
    const [displayActive, setDisplayActive] = useState(0);
    
    // Count up animation for the number
    useEffect(() => {
        let start = 0;
        const end = activeVaults;
        if (start === end) return;

        let totalDuration = 1000;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(totalDuration / (end - start)));
        
        let timer = setInterval(() => {
            start += increment;
            setDisplayActive(start);
            if (start === end) clearInterval(timer);
        }, Math.max(stepTime, 20));

        return () => clearInterval(timer);
    }, [activeVaults]);

    const particles = useMemo(() => {
        return [...Array(24)].map((_, i) => ({
            id: i,
            angle: (i * (360 / 24) * Math.PI) / 180,
            distance: 80 + Math.random() * 40,
            size: 1 + Math.random() * 2,
            delay: Math.random() * 2
        }));
    }, []);

    return (
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center select-none perspective-1000">
            {/* 1. Atmospheric Layers */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-[80px] animate-pulse opacity-60" />
            <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-[100px] animate-pulse-slow delay-700" />
            
            {/* 2. Technical Orbitals */}
            {/* Outer HUD Ring */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-emerald-500/10"
            >
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
                        style={{ 
                            left: '50%', 
                            top: '50%', 
                            transform: `rotate(${i * 45}deg) translate(0, -180px)` 
                        }} 
                    />
                ))}
            </motion.div>

            {/* Rotating Data Ring */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20"
            />

            {/* Scanning HUD Arc */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-t-2 border-emerald-500/40 border-r-transparent border-b-transparent border-l-transparent shadow-[0_-10px_20px_-5px_rgba(16,185,129,0.3)]"
            />

            {/* 3. Central HUD Core Container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Orbital Particles */}
                {particles.map(p => (
                    <motion.div 
                        key={p.id}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: [0, 0.5, 0],
                            scale: [0.5, 1.2, 0.5],
                            x: [Math.cos(p.angle) * p.distance, Math.cos(p.angle + 0.5) * (p.distance + 20)],
                            y: [Math.sin(p.angle) * p.distance, Math.sin(p.angle + 0.5) * (p.distance + 20)]
                        }}
                        transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: p.delay }}
                        className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
                    />
                ))}

                {/* The Primary Console */}
                <motion.div 
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-zinc-950/40 backdrop-blur-2xl border border-white/10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(16,185,129,0.1)] group z-20 overflow-hidden"
                >
                    {/* Interior Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
                    
                    {/* Top Status Header */}
                    <div className="absolute top-4 flex items-center gap-2">
                        <div className="flex gap-0.5">
                            <div className="w-1 h-3 bg-emerald-500/40 rounded-full animate-pulse" />
                            <div className="w-1 h-3 bg-emerald-500/60 rounded-full animate-pulse delay-75" />
                            <div className="w-1 h-3 bg-emerald-500/80 rounded-full animate-pulse delay-150" />
                        </div>
                        <span className="text-[9px] font-mono font-black text-emerald-500 tracking-[0.3em] uppercase opacity-70">Secured_Nodes</span>
                    </div>

                    {/* Main Counter Display */}
                    <div className="relative mt-2">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={displayActive}
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                                className="flex items-center justify-center"
                            >
                                <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                                    {displayActive}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Sub-label */}
                        <div className="flex flex-col items-center -mt-1">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-1" />
                            <p className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-[0.2em]">
                                Active_Bridges
                            </p>
                        </div>
                    </div>

                    {/* Bottom Telemetry */}
                    <div className="absolute bottom-4 flex flex-col items-center">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-center">
                                <span className="text-[8px] text-zinc-600 font-bold uppercase tracking-tighter">Throughput</span>
                                <span className="text-[10px] text-emerald-400 font-mono font-black">94.2<span className="text-[8px] opacity-50 ml-0.5">GB</span></span>
                            </div>
                            <div className="w-px h-6 bg-white/5" />
                            <div className="flex flex-col items-center">
                                <span className="text-[8px] text-zinc-600 font-bold uppercase tracking-tighter">Integrity</span>
                                <span className="text-[10px] text-cyan-400 font-mono font-black">100<span className="text-[8px] opacity-50 ml-0.5">%</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Floating HUD Brackets */}
                    <div className="absolute inset-2 border-x border-white/5 rounded-full pointer-events-none group-hover:border-emerald-500/20 transition-colors duration-700" />
                </motion.div>

                {/* Total Secured Floating Badge (Evolved) */}
                <div className="absolute -bottom-16 flex flex-col items-center group/total">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-2 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 flex flex-col items-center gap-0.5 shadow-2xl group-hover/total:border-primary/40 transition-all duration-500"
                    >
                        <span className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.15em] opacity-80 flex items-center gap-2">
                            <Database className="w-3 h-3 text-primary" />
                            Global Reconciliation
                        </span>
                        <div className="flex items-center gap-2">
                            <ChevronUp className="w-3 h-3 text-emerald-500 animate-bounce" />
                            <span className="text-lg font-mono font-black text-white tracking-wider">
                                {totalVaults.toLocaleString()}
                            </span>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">Secured</span>
                        </div>
                    </motion.div>
                    <div className="w-px h-6 bg-gradient-to-t from-primary/30 to-transparent -mt-2 opacity-50" />
                </div>

                {/* High-Fidelity Orbital Elements */}
                <AdvancedOrbit delay={0} distance={isMobileSize() ? 120 : 150} speed={15} color="emerald">
                    <Shield className="w-4 h-4" />
                </AdvancedOrbit>
                <AdvancedOrbit delay={3.75} distance={isMobileSize() ? 120 : 150} speed={15} color="cyan">
                    <Lock className="w-4 h-4" />
                </AdvancedOrbit>
                <AdvancedOrbit delay={7.5} distance={isMobileSize() ? 120 : 150} speed={15} color="blue">
                    <Activity className="w-4 h-4" />
                </AdvancedOrbit>
                <AdvancedOrbit delay={11.25} distance={isMobileSize() ? 120 : 150} speed={15} color="emerald">
                    <Zap className="w-4 h-4" />
                </AdvancedOrbit>
            </div>

            {/* Background SVG Telemetry Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible opacity-30">
                <circle cx="50%" cy="50%" r="48%" fill="none" stroke="url(#emerald-grad)" strokeWidth="0.5" strokeDasharray="4 8" />
                <defs>
                    <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

const isMobileSize = () => typeof window !== 'undefined' && window.innerWidth < 640;

const AdvancedOrbit: React.FC<{ children: React.ReactNode, delay: number, distance: number, speed: number, color: 'emerald' | 'cyan' | 'blue' }> = ({ children, delay, distance, speed, color }) => {
    const colors = {
        emerald: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 shadow-emerald-500/20',
        cyan: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10 shadow-cyan-500/20',
        blue: 'text-blue-400 border-blue-500/40 bg-blue-500/10 shadow-blue-500/20'
    };

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
                {/* Orbit Trail */}
                <div className={`absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent via-${color}-500/20 to-transparent`} />
                
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: -delay }}
                    className={`p-2 rounded-xl border backdrop-blur-xl shadow-lg flex items-center justify-center ${colors[color]}`}
                >
                    {children}
                </motion.div>
            </div>
        </motion.div>
    );
};
