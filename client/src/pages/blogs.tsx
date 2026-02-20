import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@shared/blog";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/">
            <div className="cursor-pointer font-mono text-lg font-bold tracking-tight">
              VAULT<span className="text-primary">BRIDGE</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 text-zinc-300">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <BookOpen className="h-3.5 w-3.5" />
            VaultBridge Blog
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">Privacy and Security Guides</h1>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Technical write-ups focused on secure file transfer, encrypted workflows, and privacy-first sharing operations.
          </p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs uppercase tracking-wider text-primary">{post.readTime}</p>
              <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm text-zinc-400">{post.excerpt}</p>
              <p className="mt-4 text-xs text-zinc-500">Updated: {post.lastUpdated}</p>
              <div className="mt-5">
                <Link href={`/blog/${post.slug}`}>
                  <Button className="h-10 rounded-full bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
