import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Circle, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusIcon = {
  active: CheckCircle2,
  planned: Clock3,
  backlog: Circle,
} as const;

type RoadmapStatus = keyof typeof statusIcon;

interface RoadmapColumn {
  phase: string;
  status: RoadmapStatus;
  items: string[];
}

const roadmap: RoadmapColumn[] = [
  {
    phase: "Now",
    status: "active",
    items: [
      "Security architecture transparency pages",
      "Programmatic SEO landing pages",
      "Share-preview and social metadata improvements",
    ],
  },
  {
    phase: "Next",
    status: "planned",
    items: [
      "Public share-link reliability and abuse-hardening",
      "Expanded lifecycle controls for enterprise retention policies",
      "Improved onboarding for new secure-transfer users",
    ],
  },
  {
    phase: "Later",
    status: "planned",
    items: [
      "Self-hosted deployment profile",
      "Advanced governance controls for teams",
      "Operational transparency dashboard",
    ],
  },
];

export default function RoadmapPage() {
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

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          <h1 className="text-3xl font-bold md:text-5xl">Public Roadmap</h1>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Transparent progress for privacy-first secure sharing. Priorities are user trust, protocol integrity,
            and low-friction adoption.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {roadmap.map((column) => {
            const Icon = statusIcon[column.status];
            return (
              <div key={column.phase} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <h2 className="text-xl font-semibold">{column.phase}</h2>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="rounded-xl border border-primary/30 bg-primary/10 p-6">
          <h2 className="text-2xl font-semibold">Feedback Loop</h2>
          <p className="mt-2 text-zinc-300">
            Product direction is continuously shaped by developer feedback, privacy community input, and production
            reliability signals.
          </p>
        </section>
      </main>
    </div>
  );
}
