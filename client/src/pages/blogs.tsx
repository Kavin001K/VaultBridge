import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, Activity, Zap } from "lucide-react";
import { blogPosts } from "@shared/blog";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
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

            <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 pt-28 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono font-black tracking-[0.2em] uppercase mb-4">
                        <BookOpen className="w-3.5 h-3.5" />
                        INTELLIGENCE_REPOSITORY
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-white uppercase italic leading-none">
                        Secure <span className="text-primary">Briefings</span>
                    </h2>
                    <p className="text-zinc-500 text-sm sm:text-lg font-medium max-w-xl mx-auto uppercase italic">
                        Technical insights on zero-knowledge encryption and secure relay protocols.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.article 
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card group flex flex-col h-full"
                        >
                            <div className="p-8 space-y-4 flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-widest">
                                        <Zap className="w-3 h-3" /> {post.readTime}
                                    </div>
                                    <div className="flex items-center gap-2 text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" /> {post.lastUpdated}
                                    </div>
                                </div>
                                
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight italic group-hover:text-primary transition-colors duration-500">
                                    {post.title}
                                </h2>
                                
                                <p className="text-sm font-bold text-zinc-500 uppercase italic leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>
                            
                            <div className="px-8 pb-8 pt-0 mt-auto">
                                <Link href={`/blog/${post.slug}`}>
                                    <Button className="w-full h-12 rounded-xl bg-primary/5 hover:bg-primary border border-primary/20 text-primary hover:text-black font-black text-[10px] uppercase tracking-widest transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                        Extract Intelligence
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Status Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 rounded-3xl bg-zinc-900/40 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <Activity className="w-10 h-10 text-primary/40" />
                        <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Briefing Updates</p>
                            <p className="text-[10px] font-bold text-zinc-600 uppercase italic">New protocols documented weekly</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl">
                            <span className="text-[9px] font-black text-primary uppercase tracking-widest">v2.1_Security_Guides</span>
                        </div>
                    </div>
                </motion.div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md text-center">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        VAULTBRIDGE REPOSITORY • VERIFIED_STABLE_V1.0
                    </p>
                </div>
            </footer>
        </div>
    );
}
