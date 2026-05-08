import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
    Shield, Lock, Zap, Server, Share2, ArrowRight, ArrowLeft, 
    Cpu, Network, Activity, Key, Database, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
    const steps = [
        {
            icon: Shield,
            title: "Client-Side Ingestion",
            desc: "Files are processed entirely within your browser's secure memory space. No raw binary data ever touches our servers before being transformed into encrypted fragments.",
            code: "AES-256-GCM"
        },
        {
            icon: Key,
            title: "Access Code Generation",
            desc: "The system generates a dual-component 8-character access protocol. The lookup segment identifies the relay, while the PIN segment remains exclusively in your possession.",
            code: "3+5 Protocol"
        },
        {
            icon: Zap,
            title: "Ephemeral Relay",
            desc: "Encrypted payloads are distributed via a memory-only relay. We serve as a blind courier, holding fragments until they are retrieved or their session expires.",
            code: "Zero-Knowledge"
        },
        {
            icon: Lock,
            title: "Burn-on-Read",
            desc: "Once the recipient authenticates and reassembles the fragments, the data is instantly purged from the relay. Mathematical certainty of non-retention.",
            code: "Auto-Destruct"
        }
    ];

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

            <main className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 pt-28 pb-20">
                {/* Title area */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Activity className="w-3.5 h-3.5" />
                        SYSTEM_ARCHITECTURE_OVERVIEW
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-white uppercase italic leading-none">
                        How It <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-zinc-500 text-sm sm:text-lg font-medium max-w-xl mx-auto uppercase italic">
                        Military-grade encryption meets ephemeral distribution protocols.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="transfer-panel p-8 group hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500 shadow-2xl">
                                    <step.icon className="w-7 h-7 text-zinc-500 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-[10px] font-mono font-black text-primary/40 group-hover:text-primary transition-colors tracking-[0.3em]">
                                    {step.code}
                                </span>
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-3 italic">
                                {idx + 1}. {step.title}
                            </h3>
                            <p className="text-sm font-bold text-zinc-500 uppercase italic leading-relaxed group-hover:text-zinc-400 transition-colors">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Specs Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="transfer-panel p-10 border-primary/20 bg-primary/5 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="shrink-0">
                            <div className="w-24 h-24 bg-primary/10 rounded-[32px] border border-primary/20 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                                <Shield className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] mb-4 italic">The Vault Standard</h3>
                            <p className="text-sm font-bold text-zinc-400 uppercase italic leading-relaxed mb-8">
                                VaultBridge employs a state-of-the-art Zero-Knowledge security architecture. Your decryption PIN is never sent to the server; it exists only in your local memory and as a URL hash fragment that is never transmitted over the wire.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {[
                                    { icon: Cpu, label: "AES-256" },
                                    { icon: Network, label: "TLS 1.3" },
                                    { icon: Database, label: "0-LOGS" },
                                    { icon: Globe, label: "CDN-CORE" }
                                ].map((spec, idx) => (
                                    <div key={idx} className="flex flex-col items-center md:items-start gap-2">
                                        <spec.icon className="w-5 h-5 text-primary" />
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{spec.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <Link href="/upload">
                        <Button className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(16,185,129,0.2)] group">
                            Initiate Secure Relay
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        VAULTBRIDGE INFRASTRUCTURE • VERIFIED_STABLE_V1.0
                    </p>
                </div>
            </footer>
        </div>
    );
}
