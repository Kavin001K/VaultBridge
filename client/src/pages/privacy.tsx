import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, ChevronUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
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
                return <strong key={index} className="text-emerald-400 font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const sections = [
        {
            id: "core-axiom",
            title: "1. The Core Axiom",
            content: `
### We cannot disclose what we do not know.

VaultBridge is architected to be "blind." We strictly limit our technical capability to collect data. If a government agency, hacker, or alien civilization demanded your data, we could only offer them encrypted static—mathematical noise that is useless without the keys held exclusively in your volatile memory.
            `
        },
        {
            id: "live-clipboard",
            title: "2. Live Clipboard Specifics",
            content: `
When utilizing the Universal Live Clipboard feature:

1.  **Transient State**: Data is treated as a WebSocket "stream." It flows through our volatile memory (RAM) only to route it to your other devices.
2.  **Encryption Layer**: Content is wrapped in AES-256-GCM client-side. The server sees only the encrypted blob and the routing metadata.
3.  **Persistence**: Unlike Vault files, Clipboard data is NEVER written to disk. It vanishes instantly upon session termination or server restart.
4.  **Termination**: The "Burn" or "Terminate" command executes a cryptographic erase of your session keys locally and force-closes the server connection.
            `
        },
        {
            id: "data-collection",
            title: "3. Data Collection Manifesto",
            content: `
### What We Collect (The Minimum Viable)
* **Encrypted Blobs**: The AES-256 encrypted binary data.
* **Routing IDs (Partial Keys)**: We see the first 3 digits of your Access Code to route traffic. We DO NOT see the full 6-digit PIN used for decryption.
* **Ephemeral Metadata**: File size, upload timestamp, and expiration timer (TTL).
* **Access Logs**: IP addresses are logged for 24 hours strictly for DDoS mitigation and abuse prevention, then sanitized.

### What We DO NOT Collect
* **Your Decryption Keys**: The full 6-digit PIN never leaves your device.
* **Your Content**: Streaming decryption ensures even large files are never realized on our server's disk in plaintext.
* **Your Identity**: No accounts. No emails.
* **Analytics**: No Google Analytics. No Facebook Pixels. No tracking cookies.
            `
        },
        {
            id: "infrastructure",
            title: "4. Infrastructure",
            content: `
Our servers act as a blind courier. They take a locked briefcase (your encrypted data) from Point A and hand it to Point B. They do not have the key to the briefcase, nor do they care what is inside. Large file transfers use **Adaptive Streaming** to pipe data directly to your browser without caching it fully on our side.
            `
        },
        {
            id: "legal-compliance",
            title: "5. Legal Compliance & Disclosure",
            content: `
Because we possess zero knowledge of content:
1.  We cannot comply with DMCA takedowns regarding specific content (we can't see it).
2.  We cannot provide decrypted data to law enforcement.

*Your privacy is not a policy. It is physics.*
            `
        }
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-emerald-500/30">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
                <div className="container flex h-16 items-center justify-between px-4 max-w-5xl mx-auto">
                    <Link href="/">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <Shield className="w-5 h-5 text-emerald-500 transition-colors group-hover:text-emerald-400" />
                            <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">
                                VAULT<span className="text-emerald-500">BRIDGE</span>
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
            </header>

            <main className="container max-w-4xl mx-auto px-4 py-12 md:py-16">

                {/* Title Section */}
                <div className="mb-12 md:mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider"
                    >
                        <Lock className="w-3 h-3" />
                        Effective Immediately
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        Privacy Protocol
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        Security Level: <span className="text-emerald-400 font-bold">Zero-Knowledge</span>
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-[240px_1fr] gap-12 items-start">
                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="hidden md:block sticky top-24 space-y-1">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Contents</p>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="block px-3 py-2 text-sm text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/5 rounded-lg transition-colors border-l-2 border-transparent hover:border-emerald-500"
                            >
                                {section.title.split('. ')[1]}
                            </a>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="space-y-16">
                        {sections.map((section, index) => (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="scroll-mt-24"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    {section.title}
                                </h2>
                                <div className="prose prose-invert prose-zinc max-w-none prose-emerald prose-headings:text-zinc-100 prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-emerald-400">
                                    {section.content.split('\n').map((line, i) => {
                                        const trimmed = line.trim();
                                        if (trimmed.startsWith('###')) return <h3 key={i} className="text-xl font-bold text-white mt-6 mb-3">{renderContent(trimmed.replace('###', '').trim())}</h3>;
                                        if (trimmed.startsWith('* ')) return <li key={i} className="ml-4 list-disc pl-1">{renderContent(trimmed.replace('* ', '').trim())}</li>;
                                        if (trimmed.match(/^\d+\./)) return <li key={i} className="ml-4 list-decimal pl-1">{renderContent(trimmed.replace(/^\d+\./, '').trim())}</li>;
                                        if (trimmed === '') return <br key={i} />;

                                        // Handle italic block at the end specially
                                        if (trimmed.startsWith('*') && trimmed.endsWith('*') && trimmed.length > 2) {
                                            return <p key={i} className="text-emerald-400/80 italic text-center mt-8 text-lg font-mono border-t border-emerald-500/20 pt-8">{trimmed.slice(1, -1)}</p>;
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
                    className="fixed bottom-8 right-8 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 transition-colors z-50"
                >
                    <ChevronUp className="w-5 h-5" />
                </motion.button>
            </main>

            <footer className="border-t border-white/5 py-12 mt-24 bg-zinc-950">
                <div className="container px-4 text-center max-w-4xl mx-auto">
                    <ShieldCheck className="w-12 h-12 text-zinc-800 mx-auto mb-6" />
                    <p className="text-zinc-500 text-sm">
                        Last Updated: 2024 • VaultBridge Security Team
                    </p>
                </div>
            </footer>
        </div>
    );
}
