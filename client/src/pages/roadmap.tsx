import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
    ArrowLeft, CheckCircle2, Circle, Clock3, Activity, 
    Zap, Shield, Rocket, Target, Code, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";

const roadmap = [
    {
        phase: "Phase 01: Inception",
        status: "complete",
        label: "Now",
        items: [
            "Zero-Knowledge Architecture stabilization",
            "Universal Live Clipboard Beta",
            "Executive Console aesthetic overhaul",
            "Parallel Binary Ingestion Pipeline"
        ]
    },
    {
        phase: "Phase 02: Distribution",
        status: "active",
        label: "Next",
        items: [
            "Share-link reliability & abuse-hardening",
            "Programmatic SEO Infrastructure",
            "Advanced Burn-on-Read triggers",
            "Social metadata preview optimization"
        ]
    },
    {
        phase: "Phase 03: Expansion",
        status: "planned",
        label: "Later",
        items: [
            "Self-hosted deployment profiles",
            "Enterprise retention policy governance",
            "Quantum-resistant encryption layer",
            "Global Edge Relay network expansion"
        ]
    }
];

export default function RoadmapPage() {
    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background Effects */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Header */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl safe-top">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex items-center justify-between">
                    <Link href="/">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-9 h-9 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden">
                                <img src="/icon-192x192.png" alt="VaultBridge" className="w-full h-full object-cover p-1.5 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h1 className="text-lg font-black font-mono tracking-widest text-white leading-none uppercase">VAULT<span className="text-primary">BRIDGE</span></h1>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white hover:bg-white/5 px-4 text-xs font-bold gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Return
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 pt-28 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Rocket className="w-3.5 h-3.5" />
                        DEVELOPMENT_LOG_V2.0
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-white uppercase italic leading-none">
                        Project <span className="text-primary">Roadmap</span>
                    </h2>
                    <p className="text-zinc-500 text-sm sm:text-lg font-medium max-w-xl mx-auto uppercase italic">
                        Transparent evolution of the zero-knowledge ecosystem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {roadmap.map((col, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="transfer-panel p-8 group hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                                    col.status === 'complete' 
                                        ? 'bg-primary/10 text-primary border-primary/20' 
                                        : col.status === 'active'
                                            ? 'bg-amber-500/10 text-amber-500 border-amber-500/20 animate-pulse'
                                            : 'bg-zinc-900 text-zinc-600 border-white/5'
                                }`}>
                                    {col.label}
                                </div>
                                {col.status === 'complete' ? <CheckCircle2 className="w-4 h-4 text-primary" /> : <Clock3 className="w-4 h-4 text-zinc-700" />}
                            </div>
                            
                            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-6 italic">{col.phase}</h3>
                            
                            <div className="space-y-4">
                                {col.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors mt-1.5 shrink-0" />
                                        <p className="text-[11px] font-bold text-zinc-500 uppercase italic leading-relaxed group-hover/item:text-zinc-300 transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feedback Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="transfer-panel p-10 bg-primary/5 border border-primary/10 relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center shrink-0">
                            <Activity className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2 italic">Feedback Loop</h3>
                            <p className="text-xs font-bold text-zinc-500 uppercase italic leading-relaxed">
                                Our development priorities are continuously shaped by the privacy community and real-world security signals. 
                                We optimize for resilience and transparency at every layer of the stack.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 shrink-0">
                            <div className="flex flex-col items-center gap-2">
                                <Code className="w-5 h-5 text-zinc-700" />
                                <span className="text-[8px] font-black text-zinc-600 uppercase">Open Source</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Shield className="w-5 h-5 text-zinc-700" />
                                <span className="text-[8px] font-black text-zinc-600 uppercase">Verified</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Cpu className="w-5 h-5 text-zinc-700" />
                                <span className="text-[8px] font-black text-zinc-600 uppercase">Edge Core</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        VAULTBRIDGE ROADMAP • CONTINUOUS_INTEGRATION_ACTIVE
                    </p>
                </div>
            </footer>
        </div>
    );
}
