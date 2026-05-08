import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap,
  ArrowRight, RefreshCw, Mail, CheckCircle2, AlertCircle,
  Clipboard, AlertTriangle, Github, Volume2, VolumeX,
  Globe, Users, Code, Building, GraduationCap, X, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSounds } from "@/hooks/useSounds";
import { useIsMobile } from "@/hooks/use-mobile";
import { RecentActivity } from "@/components/RecentActivity";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const RECENT_VAULT_STORAGE_KEY = "vaultbridge_recent";
const LEGACY_RECENT_VAULT_STORAGE_KEY = "vaultbridge-recent-vault-link";
const ACCESS_CODE_PATTERN = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{5}$/;

const normalizeVaultPath = (p: string) =>
  p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;

const isAllowedVaultPath = (p: string) => {
  const n = normalizeVaultPath(p);
  return n === "/access" || n.startsWith("/download/") || n.startsWith("/v/");
};

export default function Home() {
  const { play: playSound, isEnabled: isSoundEnabled, toggle: toggleSound } = useSounds();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [, setLocation] = useLocation();
  const [githubStars, setGithubStars] = useState<number | null>(null);
  const [vaultInput, setVaultInput] = useState("");
  const [vaultInputError, setVaultInputError] = useState<string | null>(null);
  const [recentVault, setRecentVault] = useState<string | null>(null);
  const [clipboardVault, setClipboardVault] = useState<string | null>(null);
  const [showClipboardPrompt, setShowClipboardPrompt] = useState(false);
  const [stats, setStats] = useState<{ totalVaultsCreated: number; activeVaultsCount: number } | null>(null);
  const vaultInputRef = useRef<HTMLInputElement | null>(null);
  const accessSectionRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetch("https://api.github.com/repos/Kavin001K/VaultBridge")
      .then((r) => r.json())
      .then((d) => { if (d.stargazers_count !== undefined) setGithubStars(d.stargazers_count); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => setStats(d))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(RECENT_VAULT_STORAGE_KEY) || localStorage.getItem(LEGACY_RECENT_VAULT_STORAGE_KEY);
    if (stored) setRecentVault(stored);
  }, []);

  // ─── Vault navigation logic ───
  const normalizeVaultDestination = (raw: string): string | null => {
    const t = raw.trim();
    if (!t) return null;
    if (ACCESS_CODE_PATTERN.test(t)) {
      return `/access?code=${t.replace(/[^A-Za-z0-9]/g, "").toUpperCase()}`;
    }
    const candidates = [t];
    if (/^(access|download\/|v\/)/i.test(t)) candidates.push(`/${t}`);
    if (/^(vaultbridge\.org|www\.vaultbridge\.org)/i.test(t)) candidates.push(`https://${t}`);
    for (const c of candidates) {
      try {
        const parsed = c.startsWith("/") ? new URL(c, window.location.origin) : new URL(c);
        if (isAllowedVaultPath(parsed.pathname)) {
          return parsed.origin === window.location.origin
            ? `${parsed.pathname}${parsed.search}${parsed.hash}`
            : parsed.toString();
        }
      } catch { continue; }
    }
    return null;
  };

  const openVault = (raw: string) => {
    const dest = normalizeVaultDestination(raw);
    if (!dest) {
      setVaultInputError("Paste a vault link or access code (XXX-XXXXX).");
      return;
    }
    setVaultInputError(null);
    const clean = raw.trim();
    if (clean) {
      localStorage.setItem(RECENT_VAULT_STORAGE_KEY, clean);
      localStorage.setItem(LEGACY_RECENT_VAULT_STORAGE_KEY, clean);
      setRecentVault(clean);
    }
    if (dest.startsWith("http")) {
      const parsed = new URL(dest);
      if (parsed.origin === window.location.origin) setLocation(`${parsed.pathname}${parsed.search}${parsed.hash}`);
      else window.location.href = dest;
      return;
    }
    setLocation(dest);
  };

  const focusAccess = () => {
    accessSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => vaultInputRef.current?.focus(), 300);
  };

  const handleClipboardPaste = async () => {
    if (!navigator.clipboard?.readText) {
      setVaultInputError("Clipboard access unavailable in this browser.");
      return;
    }
    try {
      const text = await navigator.clipboard.readText();
      setVaultInput(text.trim());
      setVaultInputError(null);
    } catch { setVaultInputError("Clipboard read blocked. Paste manually."); }
  };

  useEffect(() => {
    if (!window.isSecureContext || !navigator.clipboard?.readText) return;
    const timer = setTimeout(async () => {
      try {
        const text = (await navigator.clipboard.readText()).trim();
        if (!text) return;
        const dest = normalizeVaultDestination(text);
        if (!dest) return;
        setClipboardVault(text);
        setShowClipboardPrompt(true);
      } catch {}
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <img src="/icon-192x192.png" alt="VB" className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight text-white">
                Vault<span className="text-primary">Bridge</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={focusAccess}
              className="btn-ghost px-3 py-2 text-xs sm:text-sm"
            >
              Access vault
            </button>
            <Link href="/upload">
              <button className="btn-primary px-5 py-2.5 text-xs sm:text-sm">
                <Upload className="w-3.5 h-3.5" />
                Upload
              </button>
            </Link>
            <a
              href="https://github.com/Kavin001K/VaultBridge"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              {githubStars ?? "Star"}
            </a>
            <button
              onClick={() => { const s = toggleSound(); setSoundEnabled(s); if (s) playSound("click"); }}
              className="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-colors tap-sm"
              aria-label={soundEnabled ? "Mute" : "Unmute"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative pt-16 sm:pt-28 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/15 text-primary text-[11px] sm:text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                End-to-end encrypted file sharing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-5 text-balance"
            >
              Share files with{" "}
              <span className="text-primary">complete privacy.</span>
              <br />
              <span className="text-zinc-500">No accounts. No tracking.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed"
            >
              Files are encrypted in your browser before upload. Only the person with the secure code can access them. Once read, they disappear.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <Link href="/upload">
                <button className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto">
                  <Upload className="w-4 h-4" />
                  Upload a file
                </button>
              </Link>
              <button
                onClick={focusAccess}
                className="btn-secondary px-8 py-3.5 text-base w-full sm:w-auto"
              >
                <KeyRound className="w-4 h-4" />
                Open a vault
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {stats?.activeVaultsCount ?? "—"}
                </div>
                <div className="text-xs text-zinc-500 mt-1">Active vaults</div>
              </div>
              <div className="w-px h-8 bg-white/[0.06] hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {stats?.totalVaultsCreated?.toLocaleString() ?? "—"}
                </div>
                <div className="text-xs text-zinc-500 mt-1">Total secured</div>
              </div>
              <div className="w-px h-8 bg-white/[0.06] hidden sm:block" />
              <div className="text-center">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-white">
                  <Lock className="w-5 h-5 text-primary" />
                  AES-256
                </div>
                <div className="text-xs text-zinc-500 mt-1">Encryption standard</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── ACCESS PANEL ─── */}
        <section ref={accessSectionRef} className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <div className="transfer-panel p-5 sm:p-6">
              <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">
                Open a vault
              </label>

              <div className="flex gap-2.5">
                <div className="relative flex-1">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    ref={vaultInputRef}
                    type="text"
                    value={vaultInput}
                    onChange={(e) => { setVaultInput(e.target.value); if (vaultInputError) setVaultInputError(null); }}
                    onKeyDown={(e) => { if (e.key === "Enter") openVault(vaultInput); }}
                    placeholder="XXX-XXXXX or paste a link"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/40 transition-colors"
                  />
                </div>
                <button
                  onClick={() => openVault(vaultInput)}
                  className="btn-primary px-6 shrink-0 text-sm"
                >
                  Open
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick actions */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button onClick={handleClipboardPaste} className="btn-ghost px-3 py-1.5 text-[11px]">
                  <Clipboard className="w-3 h-3" />
                  Paste from clipboard
                </button>
                {recentVault && (
                  <button onClick={() => openVault(recentVault)} className="btn-ghost px-3 py-1.5 text-[11px]">
                    <RefreshCw className="w-3 h-3" />
                    Recent vault
                  </button>
                )}
                <Link href="/get-it-mailed">
                  <button className="btn-ghost px-3 py-1.5 text-[11px] text-primary">
                    <Mail className="w-3 h-3" />
                    Email me a code
                  </button>
                </Link>
              </div>

              {/* Error */}
              <AnimatePresence>
                {vaultInputError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-400 flex items-center gap-1.5 mt-3"
                  >
                    <AlertTriangle className="w-3 h-3 shrink-0" />
                    {vaultInputError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-5 mt-4 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> No account needed</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> End-to-end encrypted</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Free, always</span>
            </div>
          </motion.div>
        </section>

        {/* ─── RECENT ACTIVITY ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 max-w-xl mx-auto">
          <RecentActivity />
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="border-t border-white/[0.04] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">How it works</h2>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                Three simple steps. Zero knowledge. Complete privacy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { step: "1", title: "Upload", desc: "Drop any file up to 1GB. Encryption happens right in your browser before anything leaves your device.", icon: Upload },
                { step: "2", title: "Share", desc: "Get a secure link with an access code. Send it however you want — message, email, anywhere.", icon: Mail },
                { step: "3", title: "Vanish", desc: "Once the recipient downloads the file, the vault self-destructs. No traces left behind.", icon: Shield },
              ].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="surface-card p-6 sm:p-8 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 mb-1">Step {s.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRIVACY COMPARISON ─── */}
        <section className="border-t border-white/[0.04] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Privacy by design</h2>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                Built to disappear. Not to monetize your data.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="surface-card-accent p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">VaultBridge</h3>
                </div>
                <ul className="space-y-3">
                  {["No account required", "No tracking or analytics", "Auto-destruct after reading", "Encrypted before upload", "No data retention"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="surface-card p-6 sm:p-8 opacity-60"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zinc-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-zinc-300">Traditional cloud</h3>
                </div>
                <ul className="space-y-3">
                  {["Account mandatory", "Full analytics tracking", "Permanent storage", "Server-side encryption", "Data retained indefinitely"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <span className="text-zinc-600 mt-0.5 shrink-0">—</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── USE CASES ─── */}
        <section className="border-t border-white/[0.04] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">For everyone</h2>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                Privacy tools that work for any workflow.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Code, title: "Developers", desc: "API keys, configs, env files" },
                { icon: Building, title: "Business", desc: "Contracts, legal, financial data" },
                { icon: GraduationCap, title: "Students", desc: "Projects, datasets, research" },
                { icon: Shield, title: "Journalists", desc: "Sources, sensitive documents" },
                { icon: Users, title: "Anonymous", desc: "Share without identity" },
                { icon: Globe, title: "Everyone", desc: "Privacy is a right" },
              ].map((uc) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="surface-card p-4 sm:p-5 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/[0.03] text-primary shrink-0">
                    <uc.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-0.5">{uc.title}</h3>
                    <p className="text-xs text-zinc-500">{uc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="border-t border-white/[0.04] py-16 sm:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to share securely?</h2>
            <p className="text-sm text-zinc-400 mb-8">No signup. No tracking. Just encryption.</p>
            <Link href="/upload">
              <button className="btn-primary px-10 py-3.5 text-base">
                Start sharing now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.04] bg-background pt-14 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 safe-bottom">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <img src="/icon-192x192.png" alt="VB" className="w-4 h-4" />
              </div>
              <span className="font-bold text-white">VaultBridge</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Zero-knowledge encrypted file sharing. Built for privacy.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li><Link href="/upload"><span className="hover:text-white transition-colors cursor-pointer">Upload</span></Link></li>
              <li><Link href="/access"><span className="hover:text-white transition-colors cursor-pointer">Access</span></Link></li>
              <li><Link href="/clipboard"><span className="hover:text-white transition-colors cursor-pointer">Clipboard</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">Info</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li><Link href="/how-it-works"><span className="hover:text-white transition-colors cursor-pointer">How it works</span></Link></li>
              <li><Link href="/security"><span className="hover:text-white transition-colors cursor-pointer">Security</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-white transition-colors cursor-pointer">Blog</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li><Link href="/privacy"><span className="hover:text-white transition-colors cursor-pointer">Privacy</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-white transition-colors cursor-pointer">Terms</span></Link></li>
              <li><Link href="/roadmap"><span className="hover:text-white transition-colors cursor-pointer">Roadmap</span></Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-zinc-600">© 2026 VaultBridge</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Kavin001K/VaultBridge" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <Link href="/admin/stats">
              <span className="text-[10px] text-zinc-600 hover:text-primary transition-colors cursor-pointer">Status</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* ─── CLIPBOARD PROMPT ─── */}
      <AnimatePresence>
        {showClipboardPrompt && clipboardVault && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-primary">Vault link in clipboard</p>
                <p className="mt-1 text-xs text-zinc-500 font-mono truncate">{clipboardVault}</p>
              </div>
              <button
                className="p-1.5 rounded-lg text-zinc-500 hover:text-white transition-colors"
                onClick={() => setShowClipboardPrompt(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                className="btn-primary px-4 py-2 text-xs"
                onClick={() => { openVault(clipboardVault); setShowClipboardPrompt(false); }}
              >
                Open vault
              </button>
              <button
                className="btn-secondary px-4 py-2 text-xs"
                onClick={() => { setVaultInput(clipboardVault); setShowClipboardPrompt(false); }}
              >
                Use in access box
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
