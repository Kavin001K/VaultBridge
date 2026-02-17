import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import {
    Shield, Lock, Zap, Eye, Server, Wifi,
    Upload, ArrowLeft, ArrowRight, CheckCircle2,
    Activity, Radio, Fingerprint, Database,
    Network, Binary, Key, Cpu, ChevronUp, HardDrive, Mail, Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function HowItWorksPage() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const { scrollY } = useScroll();

    // Parallax effect for hero elements
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black text-zinc-200 selection:bg-emerald-500/30 relative overflow-hidden">
            {/* Grid & Fog */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <motion.header
                className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                <Shield className="w-4 h-4 text-emerald-500" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">
                                VAULT<span className="text-emerald-500">BRIDGE</span>
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Kavin001K/VaultBridge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-400 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Return</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.header>

            <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">

                {/* Hero */}
                <motion.div
                    style={{ y: y1, opacity: opacityHero }}
                    className="text-center mb-32 relative"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-8">
                            <Lock className="w-3 h-3" />
                            Protocol Architecture
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-700 drop-shadow-2xl">
                            TRUST <br className="md:hidden" /> NO ONE.
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-mono leading-relaxed">
                            We built VaultBridge on a single paranoid assumption: <br className="hidden md:block" />
                            <span className="text-emerald-500 font-bold border-b border-emerald-500/30 pb-0.5">That our servers are compromised.</span>
                        </p>
                    </motion.div>
                </motion.div>

                {/* Core Pillars */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-32">
                    {[
                        {
                            icon: Binary,
                            title: "Browser-Bound Encryption",
                            desc: "Encryption happens 100% on your device. We receive only static noise."
                        },
                        {
                            icon: Key,
                            title: "Ephemeral Keys",
                            desc: "Keys are generated in RAM and destroyed on tab close. We never see them."
                        },
                        {
                            icon: Database,
                            title: "Zero-Log Policy",
                            desc: "We don't know who you are, what you sent, or who you sent it to."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* The Live Clipboard Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-20 pointer-events-none" />

                    <div className="border border-emerald-500/20 bg-zinc-950/80 backdrop-blur-md rounded-3xl p-8 md:p-16 relative overflow-hidden group">

                        {/* Animated background noise */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <Activity className="w-48 h-48 text-emerald-500 rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
                                <Radio className="w-3 h-3 animate-pulse" />
                                LIVE FEATURE SPOTLIGHT
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">Universal Live <span className="text-emerald-500">Clipboard</span></h2>
                            <p className="text-xl text-zinc-400 max-w-3xl mb-12 leading-relaxed">
                                A real-time, encrypted bridge between devices. Type on your laptop, watch it appear on your phone instantly. No login. No history. Just pure data synchronization.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <div className="p-2 rounded bg-emerald-500/20">
                                            <Network className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        The Mechanism
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed border-l-2 border-white/10 pl-4">
                                        When you initialize a Live Session, we create a secure WebSocket channel.
                                        Every keystroke is encrypted locally with a transient AES-256 key, then pushed to the channel.
                                        Connected devices pull the blob, decrypt it locally, and update the UI.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <div className="p-2 rounded bg-emerald-500/20">
                                            <Fingerprint className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        The Security
                                    </h3>
                                    <ul className="space-y-4 text-zinc-400">
                                        {[
                                            "Session ID is separated from Decryption PIN.",
                                            "Data is overwritten in memory, never stored on disk.",
                                            "\"Burn\" command instantly severs connection and purges cache."
                                        ].map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Secure Vaults Section (New) */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-[2.5rem] blur-xl opacity-20 pointer-events-none" />

                    <div className="border border-cyan-500/20 bg-zinc-950/80 backdrop-blur-md rounded-3xl p-8 md:p-16 relative overflow-hidden group">

                        {/* Animated background noise */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <HardDrive className="w-48 h-48 text-cyan-500 -rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8">
                                <Database className="w-3 h-3 animate-pulse" />
                                VAULT ARCHITECTURE
                            </div>

                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="flex-1">
                                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">Secure <span className="text-cyan-500">Vaults</span></h2>
                                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                        Send files of any size without them ever touching the cloud in plaintext. Our adaptive streaming engine pipes encrypted chunks directly from sender to receiver.
                                    </p>

                                    <ul className="space-y-4 text-zinc-400">
                                        {[
                                            "Brotli (Wasm) Compression before encryption.",
                                            "Client-side AES-256-GCM chunking.",
                                            "Partial Key Routing (Server sees 3 digits, you hold 6).",
                                            "Multi-Cloud Routing: Encrypted blobs in Cloudflare R2 / Supabase.",
                                            "Zero-Knowledge storage (we strictly store blobs)."
                                        ].map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-1 w-full bg-black/40 rounded-2xl p-6 border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Key className="w-4 h-4 text-cyan-400" /> The Split-Key Protocol
                                    </h3>
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center shrink-0">
                                                <span className="text-xs text-zinc-500">User</span>
                                                <span className="text-emerald-400 font-bold">PIN</span>
                                            </div>
                                            <div className="h-px flex-1 bg-zinc-800 relative">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-zinc-600 text-[10px]">COMBINED LOCALLY</div>
                                            </div>
                                            <div className="w-16 h-16 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center shrink-0">
                                                <span className="text-xs text-zinc-500">Link</span>
                                                <span className="text-cyan-400 font-bold">UUID</span>
                                            </div>
                                        </div>
                                        <p className="text-zinc-500 text-xs leading-relaxed p-4 bg-zinc-900/50 rounded-lg border border-white/5">
                                            The server only knows the routing ID (derived from the Link). The decryption PIN stays in your head (or clipboard). Without both, the data is just static noise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Secure Email Section (New) */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-[2.5rem] blur-xl opacity-20 pointer-events-none" />

                    <div className="border border-violet-500/20 bg-zinc-950/80 backdrop-blur-md rounded-3xl p-8 md:p-16 relative overflow-hidden group">

                        {/* Animated background noise */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <Mail className="w-48 h-48 text-violet-500 rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-8">
                                <Zap className="w-3 h-3 animate-pulse" />
                                EPHEMERAL RELAY
                            </div>

                            <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                                <div className="flex-1">
                                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">Direct <span className="text-violet-500">Email</span></h2>
                                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                        Bypass attachment limits and privacy concerns. We act as a blind courier, streaming your files directly to the recipient's inbox through a transient memory tunnel.
                                    </p>

                                    <ul className="space-y-4 text-zinc-400">
                                        {[
                                            "RAM-Only Processing (No Disk I/O).",
                                            "On-the-fly MIME construction.",
                                            "Instant zero-fill memory wipe after dispatch.",
                                            "TLS 1.3 End-to-End Transport Layer."
                                        ].map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-1 w-full bg-black/40 rounded-2xl p-6 border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Server className="w-4 h-4 text-violet-400" /> The Hot-Potato Protocol
                                    </h3>
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="grid grid-cols-3 gap-2 text-center items-center">
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2">
                                                    <Upload className="w-5 h-5 text-zinc-400" />
                                                </div>
                                                <span className="text-[10px] text-zinc-500">Upload</span>
                                            </div>
                                            <div className="relative h-px bg-zinc-800">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2">
                                                    <Mail className="w-5 h-5 text-violet-400" />
                                                </div>
                                                <span className="text-[10px] text-zinc-500">Inbox</span>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-zinc-900/50 rounded-lg border border-white/5 space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-zinc-500">Storage Time:</span>
                                                <span className="text-emerald-400 font-bold">0.00s</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-zinc-500">Disk Usage:</span>
                                                <span className="text-emerald-400 font-bold">0 Bytes</span>
                                            </div>
                                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-2">
                                                <div className="h-full bg-violet-500 w-full animate-[progress_1s_ease-in-out_infinite]" />
                                            </div>
                                            <p className="text-[10px] text-zinc-600 mt-2 text-center">
                                                Streamed directly through memory buffers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Technical Stack */}
                <div className="text-center border-t border-white/5 pt-24">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-12">Cryptographic Primitives & Stack</h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-3xl mx-auto">
                        {['AES-256-GCM', 'PBKDF2 SHA-256', 'Web Crypto API', 'WebSockets', 'React', 'Drizzle ORM'].map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 rounded-full border border-white/10 bg-zinc-900/50 hover:bg-emerald-950/30 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 font-mono text-xs md:text-sm transition-all cursor-default"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-24">
                    <Link href="/clipboard">
                        <Button size="lg" className="h-16 px-10 bg-white text-black hover:bg-zinc-200 hover:scale-105 font-bold rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300">
                            Open Secure Channel
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>

                {/* Back to Top */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showBackToTop ? 1 : 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-emerald-600 text-white rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-emerald-500 transition-all hover:scale-110 z-50"
                >
                    <ChevronUp className="w-5 h-5" />
                </motion.button>

            </main>

            <footer className="border-t border-white/5 py-12 bg-black text-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />
                <div className="container px-4 text-center max-w-4xl mx-auto relative z-10">
                    <p className="text-zinc-600 text-sm font-mono uppercase tracking-widest">
                        VaultBridge Security Team • Zero Knowledge Architecture
                    </p>

                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 mt-4 cursor-default group hover:border-cyan-500/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors">v1.3.0 (Quantum + R2)</span>
                    </motion.div>
                </div>
            </footer>
        </div >
    );
}
