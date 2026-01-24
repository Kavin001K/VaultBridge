import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, Zap, Eye, Server, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
    const steps = [
        {
            icon: Lock,
            title: "1. Client-Side Encryption",
            desc: "Before your file leaves your device, your browser generates a random AES-256-GCM key. This key encrypts your file chunks instantly within your browser tab. We never see this key.",
            color: "text-emerald-400",
            bg: "bg-emerald-400/10"
        },
        {
            icon: Server,
            title: "2. Encrypted Upload",
            desc: "Only the encrypted 'shards' of your file are sent to our server. Since we don't have the key, these shards are just random noise to us.",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            icon: Globe,
            title: "3. The 'Key' Link",
            desc: "A unique link is generated containing the decryption key in the URL 'hash' segment (after the #). This part of the URL is NEVER sent to our servers by your browser.",
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        },
        {
            icon: Zap,
            title: "4. Ephemeral Storage",
            desc: "Your data lives on a countdown. Once the expiration time is reached or the download limit is hit, the file is permanently nuked from our storage.",
            color: "text-amber-400",
            bg: "bg-amber-400/10"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="scanline" />

            {/* Header */}
            <header className="relative z-10 px-6 py-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-bold font-mono tracking-tight">
                                VAULT<span className="text-primary">BRIDGE</span>
                            </h1>
                        </div>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="relative z-10 flex-1 max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We prioritize privacy above all else. Here is exactly how your data moves (and doesn't move) through our system.
                    </p>
                </div>

                {/* Visual Workflow Diagram */}
                <div className="relative mb-24 hidden md:block">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-primary/50 to-emerald-500/0 -translate-y-1/2 z-0" />
                    <div className="grid grid-cols-4 gap-4 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-16 h-16 rounded-full ${step.bg} border-2 ${step.color.replace('text', 'border')} flex items-center justify-center mb-4 bg-background`}>
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                </div>
                                <div className="text-sm font-mono font-bold">{`Step 0${i + 1}`}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Steps */}
                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start"
                        >
                            <div className={`p-4 rounded-xl ${step.bg} flex-shrink-0`}>
                                <step.icon className={`w-8 h-8 ${step.color}`} />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold mb-3 ${step.color}`}>{step.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Zero Knowledge Proof */}
                <div className="mt-24 text-center bg-primary/5 rounded-3xl p-12 border border-primary/20">
                    <Eye className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">True Zero Knowledge</h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Because the encryption key is generated in your browser and passed via the URL fragment (the part after the #),
                        it is technically impossible for our server to see it. It is never sent in an HTTP request.
                    </p>
                </div>
            </main>

            <footer className="relative z-10 py-8 text-center border-t border-white/5 mt-12">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-4">
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/how-it-works">How It Works</Link>
                </div>
                <p className="text-xs text-muted-foreground/60">
                    © 2025 Ace-Groups. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
