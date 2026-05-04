import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Lock, Eye, ArrowLeft, Activity, ShieldCheck, ChevronUp, Cpu, Network, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const sections = [
        {
            id: "core-axiom",
            title: "The Core Axiom",
            content: "We cannot disclose what we do not know. VaultBridge is architected to be 'blind.' We strictly limit our technical capability to collect data. If any entity demanded your data, we could only offer encrypted static—mathematical noise that is useless without the keys held exclusively in your volatile memory."
        },
        {
            id: "encryption-protocol",
            title: "Encryption Protocol",
            content: "Security is implemented via AES-256-GCM client-side. Decryption keys never touch our servers. Even when using QR codes or direct links, the PIN is passed via URL hash fragments (#code), ensuring it remains invisible to network logs and infrastructure."
        },
        {
            id: "ephemeral-state",
            title: "Ephemeral State",
            content: "Data in the relay is transient. Upon retrieval or TTL expiration, all fragments are cryptographically purged from memory and storage. No residual traces, no recovery options. Your privacy is enforced by the laws of mathematics."
        },
        {
            id: "data-minimization",
            title: "Data Minimization",
            content: "We collect only the bare essentials: encrypted blobs, partial routing IDs (first 3 digits only), and ephemeral metadata (file size, timestamp). IP addresses are purged every 24 hours. No accounts, no emails, no tracking pixels."
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="scanline pointer-events-none opacity-10" />

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

            <main className="relative z-10 flex-1 w-full max-w-3xl mx-auto px-4 pt-28 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Lock className="w-3.5 h-3.5" />
                        PRIVACY_PROTOCOL_ACTIVE
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-white uppercase italic">
                        Privacy <span className="text-primary">Manifesto</span>
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium max-w-sm mx-auto uppercase italic">
                        Your privacy is not a policy. It is physics.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, idx) => (
                        <motion.section
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex gap-5">
                                <div className="shrink-0 pt-1">
                                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                                        <span className="text-xs font-mono font-black text-primary/40 group-hover:text-primary">0{idx + 1}</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-black text-white uppercase tracking-widest italic">{section.title}</h3>
                                    <p className="text-xs font-bold text-zinc-500 uppercase italic leading-relaxed group-hover:text-zinc-400 transition-colors">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-8 bg-primary/5 border border-primary/10 rounded-3xl text-center"
                    >
                        <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Zero-Knowledge Verification</p>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase italic max-w-xs mx-auto">
                            The security of your data is guaranteed by cryptographic truth. We are incapable of disclosure.
                        </p>
                    </motion.div>
                </div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        VAULTBRIDGE INFRASTRUCTURE • PRIVACY_BY_DESIGN
                    </p>
                </div>
            </footer>

            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-black rounded-2xl flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all z-50"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
