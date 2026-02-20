import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const manifestoBlocks = [
  {
    title: "Privacy Is Not Optional",
    body: "VaultBridge exists because privacy became optional in modern cloud platforms. Most systems optimize for retention, analytics, and engagement. VaultBridge optimizes for confidentiality, minimalism, and user control.",
  },
  {
    title: "We Believe Privacy Is a Right",
    body: "Privacy should not require accounts. Privacy should not require subscriptions. Privacy should not require trust. Privacy should be enforced by architecture.",
  },
  {
    title: "We Minimize Data, Not Maximize It",
    body: "VaultBridge does not build profiles. VaultBridge does not track behavior. VaultBridge does not monetize user activity. VaultBridge exists to transfer files securely, and nothing more.",
  },
  {
    title: "Files Should Not Exist Forever",
    body: "Permanent storage increases risk. VaultBridge is designed around temporary access, controlled lifecycle, and automatic deletion.",
  },
  {
    title: "Trust Should Be Technical, Not Marketing",
    body: "VaultBridge is built so user privacy does not depend on promises. It depends on system design.",
  },
];

export default function PrivacyManifestoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
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

      <main className="mx-auto max-w-4xl space-y-10 px-4 py-12">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Shield className="h-3.5 w-3.5" />
            Privacy Manifesto
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">Privacy Is Not Optional</h1>
          <p className="mt-4 text-zinc-400">
            VaultBridge exists to make secure sharing possible without surveillance economics.
          </p>
        </section>

        {manifestoBlocks.map((block) => (
          <section key={block.title} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-2xl font-semibold">{block.title}</h2>
            <p className="mt-3 text-zinc-300">{block.body}</p>
          </section>
        ))}

        <section className="rounded-xl border border-primary/30 bg-primary/10 p-6">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-200">
            <li>Privacy-first</li>
            <li>Minimal</li>
            <li>Transparent</li>
            <li>User-controlled</li>
            <li>Always</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
