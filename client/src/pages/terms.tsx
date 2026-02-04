import { Link } from "wouter";
import { ArrowLeft, Scale, FileText, ChevronUp, ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TermsPage() {
    const [showBackToTop, setShowBackToTop] = useState(false);

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

    const renderContent = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className="text-red-400 font-bold tracking-tight">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    // The text content - strictly matching user request
    const sections = [
        {
            id: "agreement",
            title: "1. The Agreement",
            content: `
By initializing a secure channel on VaultBridge, you agree to these terms. If you intend to use this platform for malicious acts, leave now.
            `
        },
        {
            id: "service",
            title: "2. The Service",
            content: `
VaultBridge provides ephemeral, encrypted data transfer focused on Zero-Knowledge architecture.
* **Universal Live Clipboard**: Real-time, RAM-only synchronization between devices via WebSocket.
* **Secure Vaults**: Time-limited encrypted file storage with adaptive streaming decryption.
* **The "Burn" Protocol**: A manual override to instantly incinerate session data from our volatile memory.
            `
        },
        {
            id: "usage",
            title: "3. Usage Rules (The \"Don't Be Evil\" Clause)",
            content: `
You agree NOT to use VaultBridge for:
* Hosting malware, ransomware, or C2 infrastructure.
* Distributing child exploitation material (CSAM).
* Phishing or social engineering.
* **DoS / Resource Abuse**: Intentionally holding WebSocket connections open to exhaust server memory or flooding the synchronization pipeline.

**Abuse Policy:** While we cannot read your files, we monitor network traffic patterns (metadata only). If your connection behaves like a botnet, we will ban your IP range immediately.
            `
        },
        {
            id: "warranties",
            title: "4. No Warranties (The \"Use At Your Own Risk\" Clause)",
            content: `
This software is provided "as is."
* We guarantee the **math** (AES-256-GCM is verified).
* We do NOT guarantee **availability**. We are not a backup service. If your timer runs out, your data is incinerated. If our server catches fire, your data is gone.
* **Live Clipboard Volatility**: Clipboard data exists ONLY in RAM. If the server restarts, data is lost. This is a feature, not a bug.
            `
        },
        {
            id: "liability",
            title: "5. Liability",
            content: `
You acknowledge that you are solely responsible for the custody of your encryption keys (PINs/Links). If you lose them, we cannot help you. If you share them with the wrong person, we cannot stop them. We possess **Zero Knowledge** of your keys.
            `
        },
        {
            id: "termination",
            title: "6. Termination",
            content: `
We reserve the right to terminate connections that destabilize our infrastructure. You also have the right to terminate us: use the "Burn" button to forcefully wipe your session data from our existence.
            `
        },
        {
            id: "governing-law",
            title: "7. Governing Law",
            content: `
Code is Law. But for the lawyers: These terms are governed by the laws of the State of Delaware.

*Encrypt everything. Trust nothing.*
            `
        }
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-red-500/30 relative overflow-hidden">

            {/* --- Background FX (Added for alignment with How-It-Works) --- */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Header */}
            <motion.header
                className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container flex h-16 items-center justify-between px-6 max-w-5xl mx-auto">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                                <Scale className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white group-hover:text-red-50 transition-colors">
                                VAULT<span className="text-red-500">BRIDGE</span>
                            </span>
                        </div>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Return Home</span>
                        </Button>
                    </Link>
                </div>
            </motion.header>

            <main className="relative z-10 container max-w-4xl mx-auto px-6 py-16 md:py-20">

                {/* Title Section */}
                <div className="mb-20 space-y-6 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider"
                    >
                        <FileText className="w-3 h-3" />
                        Version 3.0 (Quantum)
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter"
                    >
                        Terms of<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-600">Engagement</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        Binding protocols for the encrypted age.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">
                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="hidden lg:block sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm"
                        >
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Navigation</p>
                            <div className="space-y-1">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group flex items-center justify-between"
                                    >
                                        <span>{section.title.split('. ')[1]}</span>
                                        <ArrowLeft className="w-3 h-3 text-red-500 opacity-0 group-hover:opacity-100 rotate-180 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="space-y-20">
                        {sections.map((section, index) => (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="scroll-mt-32 relative group"
                            >
                                {/* Section Number Decoration */}
                                <div className="absolute -left-12 top-0 text-zinc-800 font-black text-6xl -z-10 opacity-0 lg:opacity-50 select-none group-hover:text-red-900/20 transition-colors">
                                    {index + 1}
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                                    {section.title}
                                </h2>
                                <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
                                    {section.content.split('\n').map((line, i) => {
                                        const trimmed = line.trim();
                                        if (trimmed.startsWith('###')) {
                                            return <h3 key={i} className="text-xl font-bold text-white mt-8 mb-4">{renderContent(trimmed.replace('###', '').trim())}</h3>;
                                        }
                                        if (trimmed.startsWith('* ')) {
                                            return (
                                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                                    <span className="text-zinc-300">{renderContent(trimmed.replace('* ', '').trim())}</span>
                                                </div>
                                            );
                                        }
                                        if (trimmed.match(/^\d+\./)) {
                                            return (
                                                <div key={i} className="flex items-start gap-3 ml-2">
                                                    <span className="font-mono text-red-500/80">{trimmed.split('.')[0]}.</span>
                                                    <span>{renderContent(trimmed.replace(/^\d+\./, '').trim())}</span>
                                                </div>
                                            );
                                        }
                                        if (trimmed === '') return null;

                                        // Handle the Footer Mantra
                                        if (trimmed.startsWith('*Encrypt')) {
                                            return (
                                                <div key={i} className="mt-20 pt-12 border-t border-white/5 text-center">
                                                    <p className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 font-mono tracking-tighter uppercase">
                                                        {trimmed.replace(/\*/g, '')}
                                                    </p>
                                                </div>
                                            );
                                        }

                                        return <p key={i}>{renderContent(line)}</p>;
                                    })}
                                </div>
                            </motion.section>
                        ))}
                    </div>
                </div>

                {/* Back to Top */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showBackToTop ? 1 : 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-red-600 text-white rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all hover:scale-110 z-50"
                >
                    <ChevronUp className="w-5 h-5" />
                </motion.button>
            </main>

            <footer className="border-t border-white/5 py-12 relative z-10 bg-black">
                <div className="container px-4 text-center max-w-4xl mx-auto">
                    <ShieldAlert className="w-12 h-12 text-zinc-900 mx-auto mb-6" />
                    <p className="text-zinc-600 text-sm font-mono uppercase tracking-widest">
                        VaultBridge Legal Protocol • Binding Agreement
                    </p>
                </div>
            </footer>
        </div>
    );
}
