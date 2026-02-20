import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, TimerReset, DatabaseZap, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  {
    title: "Client-Side Encryption",
    body: "Files are encrypted in the browser before transfer. Raw file payloads are never uploaded in plaintext.",
    icon: Lock,
  },
  {
    title: "Zero-Knowledge Architecture",
    body: "VaultBridge cannot decrypt file contents because decryption keys are generated and retained client-side.",
    icon: KeyRound,
  },
  {
    title: "Temporary Storage",
    body: "Vault payloads are short-lived by default and are removed after lifecycle conditions are met.",
    icon: TimerReset,
  },
  {
    title: "Minimal Data Collection",
    body: "No account is required for core flows and no behavioral profiling is performed for product usage.",
    icon: DatabaseZap,
  },
];

const lifecycle = [
  "User selects file in browser.",
  "Client encrypts payload and metadata locally.",
  "Encrypted blob is transferred over TLS.",
  "VaultBridge stores encrypted payload with TTL metadata.",
  "Recipient accesses vault with secure link and code.",
  "Vault auto-destructs on expiration, burn-on-read, or manual destruction.",
];

const keyFlow = [
  "Generate per-session entropy in browser runtime.",
  "Derive encryption material from access factors (e.g., code + random salt).",
  "Use symmetric encryption for payload chunks (AES-256 class model).",
  "Store only encrypted payload and lifecycle metadata server-side.",
  "Discard runtime key material once transfer/decryption flow ends.",
];

const securityTable = [
  { label: "Encryption Standard", value: "AES-256 class symmetric encryption model" },
  { label: "Transport Security", value: "TLS 1.3 for in-transit protection" },
  { label: "Key Management", value: "Ephemeral, client-generated session keys" },
  { label: "Access Model", value: "Link-based vault access + retrieval verification" },
];

const cannotDo = [
  "Read file contents in plaintext",
  "Decrypt encrypted payloads without user-held key material",
  "Build user identity profiles from account systems",
  "Retain files indefinitely outside configured lifecycle controls",
];

export default function SecurityPage() {
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

      <main className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Shield className="h-3.5 w-3.5" />
            Security Architecture
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">Security Architecture</h1>
          <p className="mt-4 max-w-3xl text-zinc-400">
            VaultBridge is designed so files remain private, encrypted, and outside direct platform control.
            Trust is enforced by system design, not just policy text.
          </p>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-semibold">Core Security Principles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="mb-3 text-xl font-semibold">Architecture Overview</h2>
            <p className="mb-4 text-sm text-zinc-400">
              Encryption occurs at the client boundary. Infrastructure only receives encrypted payloads and
              lifecycle metadata.
            </p>
            <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs leading-6 text-zinc-300">
{`[Client Browser]
   |  (Encrypt + key derivation)
   v
[TLS 1.3 Transport]
   |
   v
[VaultBridge API]
   |  stores encrypted chunks + TTL metadata
   v
[Ephemeral Storage Layer]
   |
   v
[Recipient Browser Decrypts Locally]`}
            </pre>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="mb-3 text-xl font-semibold">Key Generation Process</h2>
            <ol className="space-y-2 text-sm text-zinc-300">
              {keyFlow.map((step, index) => (
                <li key={step} className="rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                  <span className="mr-2 font-mono text-primary">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="mb-4 text-xl font-semibold">File Lifecycle</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {lifecycle.map((step, index) => (
              <div key={step} className="rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm">
                <span className="mr-2 font-mono text-primary">{index + 1}.</span>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="mb-4 text-xl font-semibold">Encryption Model</h2>
          <div className="space-y-2">
            {securityTable.map((row) => (
              <div key={row.label} className="grid gap-2 rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 md:grid-cols-[220px_1fr]">
                <div className="text-sm font-semibold text-zinc-200">{row.label}</div>
                <div className="text-sm text-zinc-400">{row.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="mb-3 text-xl font-semibold">Data Retention Policy</h2>
            <p className="text-sm text-zinc-400">
              VaultBridge does not permanently store files. Vault data is removed after expiration or destruction
              events. The platform is optimized for temporary transfer, not long-term archives.
            </p>
            <h3 className="mt-5 text-lg font-semibold">Auto-Destruct Logic</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>Time-based expiration is enforced via TTL metadata.</li>
              <li>Burn-on-read deletes vaults after configured successful retrievals.</li>
              <li>Manual destruction invalidates active access immediately.</li>
              <li>Cleanup workers remove expired artifacts from storage.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="mb-3 text-xl font-semibold">What VaultBridge Cannot Do</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {cannotDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-400">
              Transparency statement: privacy guarantees are architecture-driven. Operational policy follows the
              constraints established by the system design.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
          <h2 className="text-2xl font-semibold">Privacy by Architecture</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300">
            Explore the reasoning and product philosophy behind these technical choices.
          </p>
          <div className="mt-5">
            <Link href="/privacy-manifesto">
              <Button className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
                View Privacy Manifesto
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
