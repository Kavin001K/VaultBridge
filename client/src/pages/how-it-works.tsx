import { motion } from "framer-motion";
import { Link } from "wouter";
import {
    ArrowLeft, Shield, Lock, Zap, Eye, Server, Globe,
    Upload, Download, Key, RefreshCw, Folder, Users,
    Wifi, WifiOff, Clock, Trash2, FileKey, Fingerprint,
    ChevronDown, CheckCircle2, XCircle, AlertTriangle,
    Layers, Cpu, Share2, Mail, QrCode, Smartphone,
    HardDrive, Cloud, ShieldCheck, Binary, Timer,
    LockKeyhole, FileArchive, ArrowRight, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HowItWorksPage() {
    const [expandedSection, setExpandedSection] = useState<string | null>("encryption");

    // Core workflow steps
    const workflowSteps = [
        {
            icon: Lock,
            title: "Client-Side Encryption",
            subtitle: "Your browser does all the heavy lifting",
            desc: "Before your file leaves your device, your browser generates a random 256-bit AES-GCM encryption key using cryptographically secure random number generation. This unbreakable key encrypts your file chunks instantly within your browser tab. The key exists only in your browser's memory—we never see it, receive it, or store it.",
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            borderColor: "border-emerald-400/30",
            technical: [
                "AES-256-GCM authenticated encryption",
                "96-bit random IV per chunk",
                "Web Crypto API for native performance",
                "Zero server-side key exposure"
            ]
        },
        {
            icon: Server,
            title: "Encrypted Upload",
            subtitle: "We only see encrypted noise",
            desc: "Only the encrypted 'shards' of your file are transmitted to our secure servers. Since we don't possess the encryption key, these shards appear as completely random, meaningless data to us. Even if someone intercepted the data, they couldn't make sense of it without the key you hold.",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            borderColor: "border-blue-400/30",
            technical: [
                "TLS 1.3 transport encryption",
                "Adaptive chunk sizing based on network",
                "Resumable uploads with IndexedDB",
                "Brotli compression for efficiency"
            ]
        },
        {
            icon: Globe,
            title: "Zero-Knowledge Link",
            subtitle: "The key stays with you",
            desc: "A unique sharing link is generated containing the decryption key in the URL 'hash' segment (the part after the # symbol). This is a fundamental web security feature: the hash portion of a URL is NEVER transmitted to servers in HTTP requests. Your browser keeps it completely local.",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            borderColor: "border-purple-400/30",
            technical: [
                "URL fragment (hash) never sent to server",
                "Split-code option separates lookup from decryption",
                "Optional password protection layer",
                "QR code generation for offline sharing"
            ]
        },
        {
            icon: Zap,
            title: "Ephemeral Storage",
            subtitle: "Your data has a built-in self-destruct",
            desc: "Every vault lives on a countdown timer. Once your specified expiration time is reached, or when the download limit is exhausted, the encrypted data is permanently and irrecoverably deleted from our storage. This isn't a soft delete—the file chunks are wiped from existence.",
            color: "text-amber-400",
            bg: "bg-amber-400/10",
            borderColor: "border-amber-400/30",
            technical: [
                "Automatic deletion on expiry",
                "Burn-on-read for single downloads",
                "No server-side backups maintained",
                "Audit-compliant permanent deletion"
            ]
        }
    ];

    // Detailed feature sections
    const features = [
        {
            id: "encryption",
            icon: LockKeyhole,
            title: "Military-Grade Encryption",
            color: "text-emerald-400",
            description: "Your files are protected by the same encryption standard used by governments, banks, and security organizations worldwide. AES-256-GCM (Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode) is considered computationally unbreakable with current and foreseeable technology.",
            details: [
                {
                    title: "How AES-256-GCM Works",
                    content: "AES-256-GCM combines the proven AES algorithm with Galois/Counter Mode, providing both confidentiality (your data remains secret) and integrity (you can detect if data has been tampered with). Each chunk of your file is encrypted with a unique 96-bit initialization vector (IV), ensuring that even identical data produces different ciphertext."
                },
                {
                    title: "Key Generation",
                    content: "Your encryption key is generated using the Web Crypto API's cryptographically secure random number generator (CSPRNG). This is the same quality of randomness used for SSL certificates and other critical security applications. The key exists only in your browser's memory and is never transmitted over the network."
                },
                {
                    title: "Why This Matters",
                    content: "Breaking AES-256 through brute force would require more energy than the sun produces in a billion years. Even with the most powerful supercomputers imaginable, it would take longer than the age of the universe to try all possible keys. Your files are mathematically secure."
                }
            ]
        },
        {
            id: "zero-knowledge",
            icon: Eye,
            title: "True Zero-Knowledge Architecture",
            color: "text-purple-400",
            description: "Zero-knowledge isn't just a marketing term for us—it's a technical reality built into every layer of our system. We are fundamentally incapable of accessing your file contents, not because we choose not to, but because we literally don't have the means to decrypt them.",
            details: [
                {
                    title: "The URL Fragment Trick",
                    content: "When you share a VaultBridge link like 'vaultbridge.app/v/abc123#encryptionkey', the portion after the # (the 'fragment' or 'hash') is never sent to any server. This is a core browser security feature, not something we invented. Using this, we can give you a link that only works in your browser."
                },
                {
                    title: "Split-Code System",
                    content: "For even more security, our split-code system separates your 6-digit code into two parts. The first 3 digits (the Lookup ID) help us find your vault. The last 3 digits (the PIN) never leave your browser and are used locally to derive the decryption key. We literally cannot complete the access process."
                },
                {
                    title: "What We Can't Do",
                    content: "We cannot view your files. We cannot read your file names. We cannot recover lost keys. We cannot respond to legal requests for file contents (because we don't have them). We cannot scan your files for any purpose. This protects your privacy absolutely."
                }
            ]
        },
        {
            id: "streaming",
            icon: Download,
            title: "Memory-Efficient Streamed Downloads",
            color: "text-blue-400",
            description: "Traditional file downloads load the entire file into memory before saving. This crashes browsers when downloading large files. VaultBridge uses Service Workers to stream decryption—chunks are fetched, decrypted, and written to disk in real-time, allowing downloads of files larger than your available RAM.",
            details: [
                {
                    title: "Service Worker Magic",
                    content: "A Service Worker runs in the background of your browser, independent of our webpage. When you start a download, we register the file details with the Service Worker. It then intercepts the download request, fetches encrypted chunks one at a time, decrypts them on-the-fly, and streams them directly to your download manager."
                },
                {
                    title: "10GB+ File Support",
                    content: "This streaming approach means you can download 10, 20, or even 50 gigabyte files on a device with only 4GB of RAM. Each chunk is processed individually and immediately written to disk, so memory usage stays constant regardless of file size."
                },
                {
                    title: "Automatic Fallback",
                    content: "For browsers that don't support Service Workers (rare these days), or for small files where the overhead isn't worth it, we automatically fall back to in-memory downloads. Files under 10MB use the faster in-memory approach."
                }
            ]
        },
        {
            id: "chunking",
            icon: Layers,
            title: "Adaptive Intelligent Chunking",
            color: "text-cyan-400",
            description: "Not all files and connections are the same. VaultBridge dynamically determines the optimal chunk size based on your file size and network conditions. Small files may not be chunked at all, while large files are split intelligently to balance speed and reliability.",
            details: [
                {
                    title: "Connection Speed Detection",
                    content: "When you start an upload, we measure your connection speed using the Navigator.connection API or timing-based probes. This tells us if you're on a fast fiber connection (larger chunks = less overhead) or a slow mobile connection (smaller chunks = easier recovery)."
                },
                {
                    title: "Smart Size Thresholds",
                    content: "Files under 50MB are typically uploaded as a single encrypted payload—no chunking overhead needed. For larger files, chunks range from 1MB (very slow connections) to 25MB (ultra-fast connections), always staying within bounds that prevent memory issues."
                },
                {
                    title: "Resumability Benefits",
                    content: "Smaller chunks mean less data lost if your connection drops. If you're uploading a 5GB file and lose connection at 4.8GB, you only need to re-upload the current chunk—not start over from the beginning."
                }
            ]
        },
        {
            id: "resumable",
            icon: RefreshCw,
            title: "Resumable Uploads",
            color: "text-orange-400",
            description: "Network issues happen. Browsers crash. Laptops run out of battery. VaultBridge remembers your progress and lets you pick up exactly where you left off. Using browser-native IndexedDB storage, we track which chunks have successfully uploaded and resume from the next one.",
            details: [
                {
                    title: "How Progress Is Tracked",
                    content: "When you start an upload, we create a record in IndexedDB (a browser-native database) containing your file info, chunk status, and encrypted key material. After each successful chunk, we update this record. If your session is interrupted, the record persists."
                },
                {
                    title: "Resuming Interrupted Uploads",
                    content: "When you return to VaultBridge, we check for any incomplete uploads. If found, you'll see a banner offering to resume. Click resume, and we pick up from the last successful chunk. No need to re-upload what's already done."
                },
                {
                    title: "Automatic Cleanup",
                    content: "Completed and old (7+ days) upload records are automatically cleaned up to prevent privacy issues. We don't leave traces. When your upload completes, the IndexedDB record is immediately deleted."
                }
            ]
        },
        {
            id: "folder",
            icon: Folder,
            title: "Folder & Multi-File Upload",
            color: "text-yellow-400",
            description: "Need to share an entire project folder with dozens of files and subfolders? Just drag and drop the folder onto VaultBridge. We recursively scan the directory structure, compress everything into a single ZIP archive (preserving folder hierarchy), encrypt it, and upload it as one secure vault.",
            details: [
                {
                    title: "Folder Structure Preservation",
                    content: "When you drop a folder on VaultBridge, we use the FileSystem API to recursively scan all files and subdirectories. The original folder structure is perfectly preserved in the resulting ZIP archive. When your recipient extracts it, everything is exactly as you organized it."
                },
                {
                    title: "Client-Side ZIP Creation",
                    content: "The ZIP archive is created entirely in your browser using the fflate library—no server involvement. This means your file names and contents remain completely private, visible only to whoever has the decryption key."
                },
                {
                    title: "Compression Benefits",
                    content: "Text files, documents, and many other file types compress significantly, reducing upload time and storage. A folder of text files might compress to 20% of original size. Binary files like images may not compress as much, but never expand."
                }
            ]
        },
        {
            id: "p2p",
            icon: Users,
            title: "WebRTC Peer-to-Peer Transfer",
            color: "text-pink-400",
            description: "For the ultimate in privacy, VaultBridge offers 'Live Link' mode—direct peer-to-peer file transfer using WebRTC. When both sender and receiver are online simultaneously, files can stream directly between browsers without ever touching our servers. Complete end-to-end privacy.",
            details: [
                {
                    title: "How P2P Works",
                    content: "WebRTC enables direct browser-to-browser connections. We act as a signaling server—helping the two browsers find each other and exchange connection details—but once the connection is established, data flows directly between you and your recipient."
                },
                {
                    title: "When to Use P2P",
                    content: "P2P is ideal when privacy is paramount and both parties can be online at the same time. It's perfect for real-time collaboration, sharing sensitive documents in meetings, or transferring large files without storage costs."
                },
                {
                    title: "Automatic Fallback",
                    content: "If a direct P2P connection can't be established (due to firewalls, NAT issues, etc.), VaultBridge automatically falls back to the traditional upload-and-download method. You still get secure transfer—it just routes through our servers."
                }
            ]
        },
        {
            id: "password",
            icon: Fingerprint,
            title: "Optional Password Protection (2FA)",
            color: "text-red-400",
            description: "Add an extra layer of security with password protection. Even if someone intercepts your sharing link or access code, they can't access the files without the password you set. This is true two-factor security: something you share (the link) plus something you know (the password).",
            details: [
                {
                    title: "How Password Encryption Works",
                    content: "When you set a password, we use PBKDF2 with 600,000 iterations to derive a key from your password. This derived key wraps (encrypts) the file encryption key. Even with the vault link, the actual decryption key can't be recovered without your password."
                },
                {
                    title: "Brute-Force Resistance",
                    content: "600,000 PBKDF2 iterations means each password guess takes significant computational effort. This makes brute-force attacks impractical. Combined with rate limiting on access attempts, your password-protected vaults are highly secure."
                },
                {
                    title: "Decoy Vault Mode",
                    content: "For advanced threat scenarios, VaultBridge supports decoy vaults. You can set a real password that unlocks your actual files, and a 'duress password' that unlocks convincing fake files. Under coercion, provide the duress password—attackers get decoy data."
                }
            ]
        },
        {
            id: "burn",
            icon: Trash2,
            title: "Burn-On-Read Self-Destruction",
            color: "text-red-500",
            description: "Set your vault to self-destruct after a single download. As soon as the recipient completes their download, the vault is permanently deleted—encrypted chunks wiped from storage, database records removed, no traces left. Perfect for one-time secure sharing.",
            details: [
                {
                    title: "How Burn-On-Read Works",
                    content: "When the download limit is set to 1, our server triggers immediate deletion the moment the final chunk is successfully delivered. Before the recipient even finishes saving the file to disk, the source data is already being wiped."
                },
                {
                    title: "Visual Confirmation",
                    content: "When you access a vault that burns on read, you'll see a dramatic visual effect—the page dissolves with heat distortion, particle effects, and fades to show the vault has been 'incinerated.' This theatrical feedback confirms the destruction is complete."
                },
                {
                    title: "No Recovery Possible",
                    content: "This is true deletion, not 'move to trash.' We don't maintain backups of vault data. Once burned, the data is gone forever. Even we cannot recover it. This is by design for maximum security."
                }
            ]
        },
        {
            id: "access",
            icon: QrCode,
            title: "Multiple Access Methods",
            color: "text-indigo-400",
            description: "Share your vault however works best for your situation. Generate a direct link for click-and-go access. Use the split-code for calling someone and reading a code over the phone. Generate a QR code for in-person sharing. Send via email from within the app.",
            details: [
                {
                    title: "Direct Link",
                    content: "The simplest option. A complete URL containing the vault ID and decryption key. Just send it via any messaging platform—anyone with the link can access the vault. Best for trusted channels like encrypted messengers."
                },
                {
                    title: "Split Code (XXX-XXX)",
                    content: "A 6-digit code that can be easily read aloud or typed. Share the full code via secure channel, or split it: send XXX-XXX via one channel and give the last 3 digits by different means. Only the lookup portion ever reaches our servers."
                },
                {
                    title: "QR Code",
                    content: "Perfect for in-person sharing. Show the QR code on your screen; they scan with their phone's camera. The full access URL is encoded in the QR. No need to type anything—works across devices instantly."
                }
            ]
        }
    ];

    // Comparison table data
    const comparisonFeatures = [
        { feature: "Your files readable by the company", vaultbridge: false, others: true },
        { feature: "Keys stored on server", vaultbridge: false, others: true },
        { feature: "Can respond to legal requests for file contents", vaultbridge: false, others: true },
        { feature: "Account registration required", vaultbridge: false, others: true },
        { feature: "Files scan for advertising", vaultbridge: false, others: true },
        { feature: "True end-to-end encryption", vaultbridge: true, others: false },
        { feature: "Automatic file expiration", vaultbridge: true, others: false },
        { feature: "Burn-on-read self-destruct", vaultbridge: true, others: false },
        { feature: "Zero-knowledge architecture", vaultbridge: true, others: false },
        { feature: "P2P transfer option", vaultbridge: true, others: false },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="scanline" />

            {/* Animated gradient orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Header */}
            <header className="relative z-10 px-6 py-8 border-b border-white/5">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-colors">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-bold font-mono tracking-tight">
                                VAULT<span className="text-primary">BRIDGE</span>
                            </h1>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/upload">
                            <Button className="gap-2 hidden sm:flex">
                                <Upload className="w-4 h-4" />
                                Start Uploading
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="relative z-10 flex-1">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-mono text-primary mb-8">
                            <Lock className="w-4 h-4" />
                            Zero-Knowledge Encrypted File Transfer
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            How <span className="text-primary">VaultBridge</span> Protects
                            <br className="hidden md:block" />
                            Your Privacy
                        </h2>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            We didn't just add encryption on top—we architected privacy from the ground up.
                            Here's exactly how your data moves through our system, and why we mathematically
                            cannot access your files.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>AES-256-GCM Encryption</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>Client-Side Only</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>No Account Required</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>Auto-Destruction</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Core Workflow Section */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold mb-4">The Secure Transfer Process</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From upload to delivery, your data is protected at every step.
                            Here's the complete workflow.
                        </p>
                    </div>

                    {/* Visual Workflow Timeline */}
                    <div className="relative mb-20 hidden lg:block">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-primary/50 to-amber-500/0 -translate-y-1/2 z-0" />
                        <div className="grid grid-cols-4 gap-4 relative z-10">
                            {workflowSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`w-16 h-16 rounded-full ${step.bg} border-2 ${step.borderColor} flex items-center justify-center mb-4 bg-background shadow-lg`}>
                                        <step.icon className={`w-8 h-8 ${step.color}`} />
                                    </div>
                                    <div className="text-xs font-mono font-bold text-muted-foreground">{`STEP 0${i + 1}`}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Step Cards */}
                    <div className="space-y-8">
                        {workflowSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`glass-card p-8 border ${step.borderColor} hover:border-opacity-50 transition-colors`}
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className={`p-4 rounded-xl ${step.bg} flex-shrink-0`}>
                                        <step.icon className={`w-10 h-10 ${step.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-mono px-2 py-1 rounded bg-muted/50 text-muted-foreground">
                                                STEP {i + 1}
                                            </span>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-2 ${step.color}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">{step.subtitle}</p>
                                        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                            {step.desc}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {step.technical.map((item, j) => (
                                                <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className={`w-4 h-4 ${step.color} flex-shrink-0`} />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Feature Deep Dives */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold mb-4">Feature Deep Dives</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Click each feature to learn exactly how it works under the hood.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedSection(expandedSection === feature.id ? null : feature.id)}
                                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div className={`p-3 rounded-xl bg-muted/20`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground line-clamp-1">{feature.description}</p>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-muted-foreground transition-transform ${expandedSection === feature.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {expandedSection === feature.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6"
                                    >
                                        <div className="pt-4 border-t border-white/10">
                                            <p className="text-foreground/80 mb-6">{feature.description}</p>
                                            <div className="space-y-4">
                                                {feature.details.map((detail, i) => (
                                                    <div key={i} className="pl-4 border-l-2 border-primary/30">
                                                        <h5 className="font-semibold mb-2">{detail.title}</h5>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {detail.content}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold mb-4">VaultBridge vs. Traditional Cloud Storage</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See how true zero-knowledge encryption compares to typical file sharing services.
                        </p>
                    </div>

                    <div className="glass-card overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-4 font-semibold">Feature</th>
                                        <th className="text-center p-4 font-semibold text-primary">VaultBridge</th>
                                        <th className="text-center p-4 font-semibold text-muted-foreground">Others</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0">
                                            <td className="p-4 text-sm">{row.feature}</td>
                                            <td className="p-4 text-center">
                                                {row.vaultbridge ? (
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                                                ) : (
                                                    <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                                                )}
                                            </td>
                                            <td className="p-4 text-center">
                                                {row.others ? (
                                                    <AlertTriangle className="w-5 h-5 text-amber-400 mx-auto" />
                                                ) : (
                                                    <XCircle className="w-5 h-5 text-red-400/50 mx-auto" />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Zero Knowledge Proof Section */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl p-12 border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-purple-500/10"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                                    <Eye className="w-12 h-12 text-primary" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4">True Zero-Knowledge Guarantee</h3>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Because the encryption key is generated in your browser and passed via the URL fragment
                                    (the part after the #), it is <strong className="text-foreground">technically impossible</strong> for
                                    our servers to see it. The URL fragment is never sent in HTTP requests—this is a fundamental
                                    web security feature, not something we invented. We couldn't access your files even if we wanted to.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-sm bg-white/5 rounded-full px-4 py-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                        Mathematically Secure
                                    </div>
                                    <div className="flex items-center gap-2 text-sm bg-white/5 rounded-full px-4 py-2">
                                        <Binary className="w-4 h-4 text-blue-400" />
                                        Open Source Verification
                                    </div>
                                    <div className="flex items-center gap-2 text-sm bg-white/5 rounded-full px-4 py-2">
                                        <Timer className="w-4 h-4 text-amber-400" />
                                        Independent Audits
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Experience True Privacy?
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Start sharing files with military-grade encryption, zero-knowledge architecture,
                            and automatic destruction. No account required.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/upload">
                                <Button size="lg" className="gap-2 text-lg px-8">
                                    <Upload className="w-5 h-5" />
                                    Start Secure Upload
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/access">
                                <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                                    <Key className="w-5 h-5" />
                                    Access a Vault
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <Link href="/terms" className="hover:text-foreground transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/privacy" className="hover:text-foreground transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/how-it-works" className="hover:text-foreground transition-colors text-primary">
                                How It Works
                            </Link>
                        </div>
                        <p className="text-xs text-muted-foreground/60">
                            © 2026 VaultBridge. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
