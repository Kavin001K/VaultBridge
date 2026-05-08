import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Link as LinkIcon, BookOpen, Calendar, Zap, Share2 } from "lucide-react";
import { blogPostBySlug, blogPosts } from "@shared/blog";
import { Button } from "@/components/ui/button";

const coreBacklinks = [
    { href: "/upload", label: "Secure Upload Flow" },
    { href: "/security", label: "Security Architecture" },
    { href: "/how-it-works", label: "How VaultBridge Works" },
    { href: "/privacy-manifesto", label: "Privacy Manifesto" },
];

export default function BlogPostPage() {
    const [, params] = useRoute("/blog/:slug");
    const slug = params?.slug || "";
    const post = blogPostBySlug[slug];

    if (!post) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="transfer-panel p-10 text-center max-w-md">
                    <h1 className="text-2xl font-black text-white uppercase italic mb-4">Intelligence Missing</h1>
                    <p className="text-sm font-bold text-zinc-500 uppercase italic mb-8">The requested briefing is not available in our current repository.</p>
                    <Link href="/blog">
                        <Button className="bg-primary text-black font-black uppercase tracking-widest px-8 h-12 rounded-xl">Return to Repository</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-black">
            {/* Background Effects */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Header */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl safe-top">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex items-center justify-between">
                    <Link href="/blog">
                        <Button variant="ghost" size="sm" className="rounded-full text-zinc-400 hover:text-white hover:bg-white/5 px-4 text-xs font-bold gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Repository
                        </Button>
                    </Link>
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <h1 className="text-lg font-black font-mono tracking-widest text-white leading-none uppercase">VAULT<span className="text-primary">BRIDGE</span></h1>
                        </div>
                    </Link>
                </div>
            </header>

            <main className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 pt-28 pb-20">
                <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="transfer-panel p-8 md:p-12 mb-12"
                >
                    <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-white/5 pb-8">
                        <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-widest">
                            <Zap className="w-3 h-3" /> {post.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                            <Calendar className="w-3 h-3" /> Updated: {post.lastUpdated}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight italic leading-none mb-8">
                        {post.title}
                    </h1>

                    <p className="text-lg md:text-xl font-bold text-zinc-400 uppercase italic leading-relaxed mb-12 border-l-4 border-primary pl-6 py-2">
                        {post.description}
                    </p>

                    <div className="space-y-12">
                        {post.sections.map((section, idx) => (
                            <section key={idx} className="space-y-6">
                                <h2 className="text-2xl font-black text-white uppercase tracking-wider italic flex items-center gap-3">
                                    <span className="text-primary/40 font-mono text-sm">0{idx + 1}</span> {section.heading}
                                </h2>
                                <div className="space-y-4 text-sm font-bold text-zinc-500 uppercase italic leading-relaxed">
                                    {section.paragraphs.map((p, pIdx) => (
                                        <p key={pIdx} className="hover:text-zinc-300 transition-colors">{p}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </motion.article>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Backlinks */}
                    <motion.section 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="transfer-panel p-8 bg-primary/5 border-primary/20"
                    >
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2 italic">
                            <LinkIcon className="w-4 h-4 text-primary" /> Intelligence Links
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {coreBacklinks.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <div className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5 hover:border-primary/50 transition-all cursor-pointer group">
                                        <span className="text-[10px] font-black text-zinc-400 group-hover:text-white uppercase italic">{link.label}</span>
                                        <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.section>

                    {/* Related */}
                    <motion.section 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="transfer-panel p-8"
                    >
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2 italic">
                            <BookOpen className="w-4 h-4 text-primary" /> Related Briefings
                        </h3>
                        <div className="space-y-4">
                            {relatedPosts.map((related) => (
                                <Link key={related.slug} href={`/blog/${related.slug}`}>
                                    <div className="group cursor-pointer">
                                        <h4 className="text-xs font-black text-zinc-500 group-hover:text-primary uppercase italic transition-colors line-clamp-2 leading-snug">
                                            {related.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* Engagement Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 p-8 text-center"
                >
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4">
                        VAULTBRIDGE BRIEFING SYSTEM • ENCRYPTED_AND_VERIFIED
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="ghost" size="sm" className="rounded-xl border border-white/5 text-zinc-500 hover:text-white hover:bg-white/5 gap-2 font-black text-[9px] uppercase tracking-widest">
                            <Share2 className="w-3 h-3" /> Share Intelligence
                        </Button>
                    </div>
                </motion.div>
            </main>

            <footer className="relative z-10 py-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                        &copy; {new Date().getFullYear()} VaultBridge • Intelligence Repository
                    </p>
                </div>
            </footer>
        </div>
    );
}
