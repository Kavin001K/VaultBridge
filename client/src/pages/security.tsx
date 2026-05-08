import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
    Shield, Lock, Key, Activity, Cpu, Network, Database, 
    ArrowLeft, ShieldCheck, Zap, Globe, Gavel
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecurityPage() {
    const principles = [
        {
            icon: Lock,
            title: "Client-Side Encryption",
            desc: "Encryption happens locally in your browser memory. Raw file payloads never leave your device in plaintext.",
            tag: "AES-256-GCM"
        },
        {
            icon: ShieldCheck,
            title: "Zero-Knowledge",
            desc: "We cannot decrypt your contents. We serve only as a blind courier, handling encrypted fragments we cannot read.",
            tag: "Mathematical Trust"
        },
        {
            icon: Zap,
            title: "Ephemeral Life",
            desc: "Vaults are transient by design. Data auto-destructs after retrieval or TTL expiration with zero residual traces.",
            tag: "Non-Persistent"
        },
        {
            icon: Database,
            title: "Data Minimization",
            desc: "No accounts, no profiling, no tracking. We store only the minimum metadata required for secure routing.",
            tag: "0-Log Policy"
        }
    ];

    const specs = [
        { label: "Encryption Standard", value: "AES-256 Symmetric Chain" },
        { label: "Transport Security", value: "TLS 1.3 End-to-End" },
        { label: "Key Management", value: "Client-Side Volatile" },
        { label: "Access Control", value: "Dual-Factor PIN Protocol" }
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Shield className="w-3.5 h-3.5 animate-pulse" />
                        SECURITY_PROTOCOL_OVERVIEW
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-white uppercase italic leading-none">
                        Secure <span className="text-primary">Architecture</span>
                    </h2>
                    <p className="text-zinc-500 text-sm sm:text-lg font-medium max-w-xl mx-auto uppercase italic">
                        Trust is enforced by mathematical system design, not just policy.
                    </p>
                </motion.div>

                {/* Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {principles.map((p, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="transfer-panel p-8 group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500 shadow-2xl">
                                    <p.icon className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-[10px] font-mono font-black text-primary/30 tracking-widest">{p.tag}</span>
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2 italic">{p.title}</h3>
                            <p className="text-xs font-bold text-zinc-500 uppercase italic leading-relaxed group-hover:text-zinc-400 transition-colors">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Specs Table */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="transfer-panel p-1 p-0 overflow-hidden mb-12"
                >
                    <div className="bg-zinc-900/40 border-b border-white/5 p-6">
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3 italic">
                            <Cpu className="w-4 h-4 text-primary" /> Technical Specifications
                        </h3>
                    </div>
                    <div className="p-0">
                        {specs.map((spec, i) => (
                            <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 ${i !== specs.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}>
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-0">{spec.label}</span>
                                <span className="text-xs font-black text-primary uppercase italic tracking-tight">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Diagram Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="transfer-panel p-8 bg-primary/5 border-primary/20">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-primary" /> Key Flow Protocol
                        </h3>
                        <div className="space-y-4">
                            {[
                                "Client Entropy Generation",
                                "Local Key Derivation",
                                "Volatile Chunking Engine",
                                "Encrypted Relay Handshake",
                                "Recipient-Side Reassembly"
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 text-[11px] font-bold text-zinc-400 uppercase italic">
                                    <span className="w-6 h-6 rounded-lg bg-black border border-white/5 flex items-center justify-center text-primary text-[10px]">{i + 1}</span>
                                    {step}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="transfer-panel p-8 bg-zinc-900/40">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Gavel className="w-4 h-4 text-primary" /> What We Cannot Do
                        </h3>
                        <div className="space-y-4">
                            {[
                                "Read plaintext contents",
                                "Bypass encryption layers",
                                "Recover lost access PINs",
                                "Identity data association",
                                "Permanent file retention"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-zinc-500 uppercase italic">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Final Verification */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="p-10 rounded-3xl bg-primary/5 border border-primary/10 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
                    <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6 relative z-10" />
                    <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 relative z-10 italic">Privacy by Physics</h3>
                    <p className="text-xs font-bold text-zinc-500 uppercase italic leading-relaxed max-w-sm mx-auto relative z-10 mb-8">
                        Our code is open-source. Our encryption is military-grade. Our retention is zero.
                    </p>
                    <Link href="/privacy-manifesto">
                        <Button className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-[10px] uppercase tracking-widest relative z-10 shadow-xl shadow-primary/20">
                            Manifesto Protocol
                        </Button>
                    </Link>
                </motion.div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        VAULTBRIDGE SECURITY INFRASTRUCTURE • VERIFIED_V1.0
                    </p>
                </div>
            </footer>
        </div>
    );
}
