import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, ArrowLeft, Lock, Zap, EyeOff, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyManifestoPage() {
    const blocks = [
        {
            icon: Shield,
            title: "Privacy Is Not Optional",
            body: "VaultBridge exists because privacy became optional in modern cloud platforms. Most systems optimize for retention, analytics, and engagement. VaultBridge optimizes for confidentiality, minimalism, and user control."
        },
        {
            icon: EyeOff,
            title: "Enforced by Physics",
            body: "Privacy should not require accounts. Privacy should not require subscriptions. Privacy should not require trust. Privacy should be enforced by architecture, where data is mathematically inaccessible to any third party."
        },
        {
            icon: Zap,
            title: "Zero Surveillance Economics",
            body: "VaultBridge does not build profiles. VaultBridge does not track behavior. VaultBridge does not monetize user activity. VaultBridge exists to transfer files securely, and nothing more."
        },
        {
            icon: Sparkles,
            title: "Ephemeral Excellence",
            body: "Permanent storage increases risk. VaultBridge is designed around temporary access, controlled lifecycle, and automatic deletion. We believe files should not exist a second longer than necessary."
        },
        {
            icon: ShieldCheck,
            title: "Technical Truth",
            body: "VaultBridge is built so user privacy does not depend on promises or marketing. It depends on system design, open-source code, and client-side encryption protocols."
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Heart className="w-3.5 h-3.5" />
                        CORE_PHILOSOPHY_V1.0
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-white uppercase italic leading-none">
                        Privacy <span className="text-primary">Manifesto</span>
                    </h2>
                    <p className="text-zinc-500 text-sm sm:text-lg font-medium max-w-xl mx-auto uppercase italic">
                        Our commitment to a surveillance-free digital exchange.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {blocks.map((block, idx) => (
                        <motion.section 
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-8 items-start"
                        >
                            <div className="shrink-0 pt-2">
                                <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center shadow-2xl group hover:border-primary/40 transition-all duration-500">
                                    <block.icon className="w-8 h-8 text-primary/60" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight italic">{block.title}</h3>
                                <p className="text-sm font-bold text-zinc-500 uppercase italic leading-relaxed hover:text-zinc-400 transition-colors">
                                    {block.body}
                                </p>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Final Commitment */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-24 p-12 rounded-[40px] bg-primary/5 border border-primary/10 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5"><Shield className="w-48 h-48 text-primary" /></div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-6 italic relative z-10">Our Commitment</h3>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 relative z-10">
                        {["Privacy-First", "Minimal", "Transparent", "User-Controlled"].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        VAULTBRIDGE PHILOSOPHY • {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    );
}
