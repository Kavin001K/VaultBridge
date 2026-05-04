import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, FileText, Scale, Gavel, Lock, Eye, ArrowLeft, Activity, ShieldAlert, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
                {/* Title area */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <Scale className="w-3.5 h-3.5" />
                        LEGAL_PROTOCOL_V1.0
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-white uppercase italic">
                        Terms of <span className="text-primary">Service</span>
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium max-w-sm mx-auto">
                        The legal framework governing our zero-knowledge ephemeral relay systems.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {/* Summary Card */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-8 border-primary/20 bg-primary/5">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shrink-0">
                                <ShieldAlert className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xs font-black text-white uppercase tracking-widest mb-2">Executive Summary</h3>
                                <p className="text-xs font-bold text-zinc-400 uppercase italic leading-relaxed">
                                    VaultBridge is a strictly ephemeral, zero-knowledge relay service. We do not store, log, or monitor your data. 
                                    By using this platform, you acknowledge that once data is purged or keys are lost, recovery is mathematically impossible.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Detailed Sections */}
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            {
                                icon: Lock,
                                title: "Zero-Knowledge Architecture",
                                content: "Our system is designed to be blind. Encryption occurs exclusively on the client-side. We never possess the decryption keys, nor do we have the technical capability to decrypt your data. You are solely responsible for key management."
                            },
                            {
                                icon: Activity,
                                title: "Ephemeral Nature",
                                content: "Data uploaded to VaultBridge is transient. Upon retrieval or expiration of the specified TTL (Time To Live), all fragments are permanently wiped from memory. No residual traces remain on our infrastructure."
                            },
                            {
                                icon: Shield,
                                title: "Acceptable Use",
                                content: "Users are prohibited from using VaultBridge for illegal activities, including the distribution of malware, copyrighted material without authorization, or prohibited content. We reserve the right to terminate access for protocol violations."
                            },
                            {
                                icon: Gavel,
                                title: "Liability & Indemnity",
                                content: "VaultBridge provides a 'blind courier' service. We are not liable for the content of the data transmitted nor for any loss of data resulting from forgotten access codes or infrastructure interruptions."
                            }
                        ].map((section, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 group"
                            >
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-primary/40 transition-all duration-500">
                                        <section.icon className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xs font-black text-white uppercase tracking-widest">{section.title}</h3>
                                        <p className="text-xs font-bold text-zinc-500 uppercase italic leading-relaxed group-hover:text-zinc-400 transition-colors">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Infrastructure Footer */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <Cpu className="w-5 h-5 text-zinc-700" />
                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Client-Side Logic</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Network className="w-5 h-5 text-zinc-700" />
                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">TLS 1.3 Encryption</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Lock className="w-5 h-5 text-zinc-700" />
                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Zero Retention</span>
                        </div>
                    </motion.div>
                </div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        &copy; {new Date().getFullYear()} VaultBridge • Secure Ephemeral Distribution
                    </p>
                </div>
            </footer>
        </div>
    );
}
