import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Lock, Zap, Globe, Cpu, Activity } from 'lucide-react';

interface VaultDialProps {
    totalVaults?: number;
    activeVaults?: number;
}

export const VaultDial: React.FC<VaultDialProps> = ({ 
    totalVaults = 0, 
    activeVaults = 0 
}) => {
    const mainControls = useAnimation();
    
    useEffect(() => {
        mainControls.start({
            rotate: 360,
            transition: { duration: 60, repeat: Infinity, ease: "linear" }
        });
    }, [mainControls]);

    // Generate random star/particle positions for the background
    const particles = useMemo(() => {
        return [...Array(12)].map((_, i) => ({
            id: i,
            x: Math.cos((i * 30 * Math.PI) / 180) * 120,
            y: Math.sin((i * 30 * Math.PI) / 180) * 120,
            delay: i * 0.2
        }));
    }, []);

    return (
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center select-none">
            {/* 1. Deep Background Glow (Atmosphere) */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] animate-pulse" />
            <div className="absolute inset-[20%] rounded-full bg-cyan-500/5 blur-[40px] animate-pulse-slow" />
            
            {/* 2. Concentric Orbitals (Staggered Rotation) */}
            {/* Outer Slow Ring */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/10 border-dashed"
            />
            
            {/* Middle Fast Ring */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-primary/20 border-dotted"
            />

            {/* Inner Technical Ring (Scanning) */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border-t-2 border-r-2 border-primary/30 border-l-transparent border-b-transparent"
            />

            {/* 3. Pulsing Security Node Background */}
            <div className="absolute inset-24 rounded-full bg-zinc-950/40 backdrop-blur-xl border border-white/5 flex items-center justify-center overflow-hidden">
                {/* Hexagon Grid Background (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                
                {/* Floating Particles */}
                {particles.map(p => (
                    <motion.div 
                        key={p.id}
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: p.delay }}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{ x: p.x, y: p.y }}
                    />
                ))}
            </div>
            
            {/* 4. The Core Console */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-b from-zinc-900 to-black border border-primary/40 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.15)] group z-10"
            >
                {/* Core Scanning Beam */}
                <motion.div 
                    animate={{ top: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
                />

                <div className="absolute -top-3 px-3 py-1 bg-zinc-950 border border-primary/50 rounded-full flex items-center gap-1.5 shadow-lg group-hover:border-primary transition-colors">
                    <Activity className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">Live Bridge</span>
                </div>

                <div className="text-center">
                    <motion.div 
                        key={activeVaults}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            {activeVaults}
                        </span>
                        {/* Glow behind number */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl -z-10 rounded-full" />
                    </motion.div>
                    
                    <p className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-[0.1em] mt-1">
                        Active <span className="text-zinc-300">Vaults</span>
                    </p>
                </div>

                {/* Bottom Stats Badge */}
                <div className="absolute -bottom-10 flex flex-col items-center">
                    <div className="h-4 w-[1px] bg-gradient-to-b from-primary/40 to-transparent" />
                    <div className="px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex flex-col items-center gap-0.5">
                        <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">Total Secured</span>
                        <span className="text-xs font-mono font-bold text-zinc-200">{totalVaults.toLocaleString()}</span>
                    </div>
                </div>

                {/* Orbiting Elements (Advanced) */}
                <TechnicalOrbit delay={0} distance={isMobileSize() ? 110 : 130} speed={12}>
                    <Shield className="w-3.5 h-3.5 text-primary/80" />
                </TechnicalOrbit>
                <TechnicalOrbit delay={3} distance={isMobileSize() ? 110 : 130} speed={12}>
                    <Lock className="w-3.5 h-3.5 text-cyan-400/80" />
                </TechnicalOrbit>
                <TechnicalOrbit delay={6} distance={isMobileSize() ? 110 : 130} speed={12}>
                    <Zap className="w-3.5 h-3.5 text-emerald-400/80" />
                </TechnicalOrbit>
                <TechnicalOrbit delay={9} distance={isMobileSize() ? 110 : 130} speed={12}>
                    <Activity className="w-3.5 h-3.5 text-blue-400/80" />
                </TechnicalOrbit>
            </motion.div>

            {/* 5. SVG Decorative Technical HUD Arcs */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {/* Top Left Arc */}
                <motion.path 
                    d="M 50,20 A 180,180 0 0 1 150,20"
                    fill="none" stroke="currentColor" strokeWidth="1"
                    className="text-primary/20"
                    style={{ transformOrigin: 'center', transform: 'scale(0.8) translate(50px, 50px)' }}
                />
                
                {/* Bottom Right Arc with dots */}
                <motion.circle 
                    cx="50%" cy="50%" r="45%"
                    fill="none" stroke="currentColor" strokeWidth="0.5"
                    strokeDasharray="1 15"
                    className="text-primary/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    );
};

const isMobileSize = () => typeof window !== 'undefined' && window.innerWidth < 640;

const TechnicalOrbit: React.FC<{ children: React.ReactNode, delay: number, distance: number, speed: number }> = ({ children, delay, distance, speed }) => {
    return (
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: -delay }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
            <div 
                style={{ transform: `translate(${distance}px, 0) rotate(-${(delay/speed) * 360}deg)` }}
                className="relative"
            >
                {/* Ghosting effect tail */}
                <div className="absolute -left-4 w-4 h-[1px] bg-gradient-to-r from-transparent to-primary/20" />
                
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: -delay }}
                    className="bg-zinc-950/90 p-1.5 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md"
                >
                    {children}
                </motion.div>
            </div>
        </motion.div>
    );
};
