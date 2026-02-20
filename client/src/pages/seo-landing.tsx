import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LandingContent {
  title: string;
  intro: string;
  explanation: string;
  useCases: string[];
  seoFooter: string;
}

const landingContent: Record<string, LandingContent> = {
  "/secure-file-sharing-free": {
    title: "Secure File Sharing Free",
    intro: "Share files securely without login, tracking, or permanent storage.",
    explanation:
      "VaultBridge provides secure file sharing using encrypted transfer and temporary storage. Files remain private and automatically expire based on lifecycle settings.",
    useCases: ["Developers sharing builds", "Business document exchange", "Personal private transfer"],
    seoFooter:
      "VaultBridge provides free secure file sharing, encrypted file transfer, anonymous upload, and privacy-focused sharing.",
  },
  "/encrypted-file-transfer": {
    title: "Encrypted File Transfer",
    intro: "Transfer files with end-to-end privacy defaults and temporary retention.",
    explanation:
      "VaultBridge encrypts data before storage and moves payloads over secure transport. Access is short-lived and optimized for controlled sharing, not permanent archives.",
    useCases: ["Engineering handoffs", "Security review artifacts", "Client file delivery"],
    seoFooter:
      "Encrypted file transfer with temporary storage and secure access links for privacy-sensitive workflows.",
  },
  "/private-file-sharing": {
    title: "Private File Sharing",
    intro: "Private file sharing for teams and individuals who do not want tracking layers.",
    explanation:
      "VaultBridge minimizes data collection and enforces temporary lifecycle controls so files are shared with clear expiration behavior.",
    useCases: ["Confidential team collaboration", "Sensitive student project exchange", "Legal and finance workflows"],
    seoFooter:
      "Private file sharing platform with encrypted transfer, no required account, and lifecycle-based deletion.",
  },
  "/anonymous-file-sharing": {
    title: "Anonymous File Sharing",
    intro: "Share files anonymously without account creation.",
    explanation:
      "VaultBridge supports anonymous secure sharing flows where users can transfer encrypted content without persistent identity profiles.",
    useCases: ["No-login secure sharing", "Ad hoc transfer needs", "Privacy-first communities"],
    seoFooter:
      "Anonymous file sharing with encrypted transfer and controlled expiration.",
  },
  "/free-encrypted-upload": {
    title: "Free Encrypted Upload",
    intro: "Encrypted upload workflow with zero-friction access and privacy-first defaults.",
    explanation:
      "VaultBridge enables free encrypted upload and short-lived vault delivery for users who need secure transfer without heavy onboarding.",
    useCases: ["Freelancer file exchange", "Secure one-time links", "Cross-device secure handoff"],
    seoFooter:
      "Free encrypted upload service with secure links, temporary storage, and minimal data collection.",
  },
  "/send-files-securely": {
    title: "Send Files Securely",
    intro: "Send files securely with encrypted transfer and temporary access controls.",
    explanation:
      "VaultBridge is built for secure file delivery with architecture-focused privacy controls and a fast no-login user flow.",
    useCases: ["Operational file delivery", "Vendor handoffs", "Personal secure sharing"],
    seoFooter:
      "Send files securely with encrypted file transfer, private access links, and automatic expiration behavior.",
  },
};

const whyVaultBridge = [
  "No login required",
  "Zero tracking",
  "Encrypted transfers",
  "Temporary file lifecycle",
];

export default function SEOLandingPage() {
  const [location] = useLocation();
  const content = landingContent[location] || landingContent["/secure-file-sharing-free"];

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
