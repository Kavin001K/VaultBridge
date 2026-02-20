import { Link, useRoute } from "wouter";
import { ArrowLeft, Link as LinkIcon } from "lucide-react";
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
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-zinc-100">
        <div className="w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
          <h1 className="text-2xl font-semibold">Blog post not found</h1>
          <p className="mt-3 text-sm text-zinc-400">The requested article does not exist or was removed.</p>
          <div className="mt-5 flex justify-center gap-3">
            <Link href="/blog">
              <Button className="rounded-full bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
                Back to Blogs
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="rounded-full border-zinc-700">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2 text-zinc-300">
              <ArrowLeft className="h-4 w-4" />
              All Blogs
            </Button>
          </Link>
          <Link href="/">
            <div className="cursor-pointer font-mono text-lg font-bold tracking-tight">
              VAULT<span className="text-primary">BRIDGE</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <p className="text-xs uppercase tracking-wider text-primary">{post.readTime}</p>
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-zinc-300">{post.description}</p>
          <p className="mt-3 text-xs text-zinc-500">Updated: {post.lastUpdated}</p>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-zinc-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-xl font-semibold">Useful Backlinks</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Use these pages for deeper technical detail and product-specific implementation references.
          </p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {coreBacklinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-primary">
                    <LinkIcon className="h-4 w-4" />
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-xl font-semibold">Other Blog Articles</h2>
          <ul className="mt-4 space-y-2">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link href={`/blog/${related.slug}`}>
                  <span className="text-sm text-zinc-300 transition-colors hover:text-primary">
                    {related.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
