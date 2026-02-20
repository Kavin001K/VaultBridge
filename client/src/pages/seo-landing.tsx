import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOLandingContent } from "@shared/seo-generator";

const whyVaultBridge = [
  "No login required",
  "Zero tracking",
  "Encrypted transfers",
  "Temporary file lifecycle",
];

export default function SEOLandingPage() {
  const [location] = useLocation();
  const landingContent = generateSEOLandingContent();

  // Normalize location slightly to handle potential trailing slashes
  const normalizedLocation = location.endsWith('/') && location.length > 1
    ? location.slice(0, -1)
    : location;

  const content = landingContent[normalizedLocation] || landingContent["/secure-file-sharing-free"];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto max-w-5xl space-y-10 px-4 py-14">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center md:p-10">
          <h1 className="text-3xl font-bold md:text-5xl">{content.title}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">{content.intro}</p>
          <div className="mt-6">
            <Link href="/upload">
              <Button className="h-11 rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
                Upload Secure File
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="mt-3 text-zinc-300">{content.explanation}</p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-semibold">Why VaultBridge</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-300">
              {whyVaultBridge.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-semibold">Use Cases</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-300">
              {content.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-primary/30 bg-primary/10 p-6">
          <h2 className="text-xl font-semibold">SEO Context</h2>
          <p className="mt-2 text-zinc-200">{content.seoFooter}</p>
        </section>
      </main>
    </div>
  );
}
