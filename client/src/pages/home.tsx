import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap,
  ArrowRight, RefreshCw, Mail, CheckCircle2, AlertCircle,
  Clipboard, AlertTriangle, Github, Volume2, VolumeX,
  Globe, Users, Code, Building, GraduationCap, X, Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSounds } from "@/hooks/useSounds";
import { useIsMobile } from "@/hooks/use-mobile";
import { RecentActivity } from "@/components/RecentActivity";
import { VaultDial } from "@/components/VaultDial";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

const RECENT_VAULT_STORAGE_KEY = "vaultbridge_recent";
const LEGACY_RECENT_VAULT_STORAGE_KEY = "vaultbridge-recent-vault-link";
const ACCESS_CODE_PATTERN = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{5}$/;

const normalizeVaultPath = (p: string) => p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
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
    fetch("https://api.github.com/repos/Kavin001K/VaultBridge").then(r => r.json()).then(d => { if (d.stargazers_count !== undefined) setGithubStars(d.stargazers_count); }).catch(() => {});
  }, []);
  useEffect(() => { fetch("/api/stats").then(r => r.json()).then(d => setStats(d)).catch(() => {}); }, []);
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_VAULT_STORAGE_KEY) || localStorage.getItem(LEGACY_RECENT_VAULT_STORAGE_KEY);
    if (stored) setRecentVault(stored);
  }, []);

  const normalizeVaultDestination = (raw: string): string | null => {
    const t = raw.trim(); if (!t) return null;
    if (ACCESS_CODE_PATTERN.test(t)) return `/access?code=${t.replace(/[^A-Za-z0-9]/g, "").toUpperCase()}`;
    const candidates = [t];
    if (/^(access|download\/|v\/)/i.test(t)) candidates.push(`/${t}`);
    if (/^(vaultbridge\.org|www\.vaultbridge\.org)/i.test(t)) candidates.push(`https://${t}`);
    for (const c of candidates) {
      try {
        const parsed = c.startsWith("/") ? new URL(c, window.location.origin) : new URL(c);
        if (isAllowedVaultPath(parsed.pathname)) return parsed.origin === window.location.origin ? `${parsed.pathname}${parsed.search}${parsed.hash}` : parsed.toString();
      } catch { continue; }
    }
    return null;
  };

  const openVault = (raw: string) => {
    const dest = normalizeVaultDestination(raw);
    if (!dest) { setVaultInputError("Paste a vault link or access code (XXX-XXXXX)."); return; }
    setVaultInputError(null);
    const clean = raw.trim();
    if (clean) { localStorage.setItem(RECENT_VAULT_STORAGE_KEY, clean); localStorage.setItem(LEGACY_RECENT_VAULT_STORAGE_KEY, clean); setRecentVault(clean); }
    if (dest.startsWith("http")) { const p = new URL(dest); p.origin === window.location.origin ? setLocation(`${p.pathname}${p.search}${p.hash}`) : (window.location.href = dest); return; }
    setLocation(dest);
  };

  const focusAccess = () => { accessSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => vaultInputRef.current?.focus(), 300); };
  const handleClipboardPaste = async () => {
    if (!navigator.clipboard?.readText) { setVaultInputError("Clipboard access unavailable."); return; }
    try { const text = await navigator.clipboard.readText(); setVaultInput(text.trim()); setVaultInputError(null); } catch { setVaultInputError("Clipboard read blocked. Paste manually."); }
  };
  useEffect(() => {
    if (!window.isSecureContext || !navigator.clipboard?.readText) return;
    const timer = setTimeout(async () => {
      try { const text = (await navigator.clipboard.readText()).trim(); if (!text) return; const dest = normalizeVaultDestination(text); if (!dest) return; setClipboardVault(text); setShowClipboardPrompt(true); } catch {}
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // ─── Desktop Header ───
  const DesktopHeader = () => (
    <header className="relative w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative w-10 h-10 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden">
            <img src="/icon-192x192.png" alt="VB" className="relative w-full h-full object-cover p-1.5 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div>
            <h1 className="text-sm font-black font-mono tracking-widest text-white leading-none">VAULT<span className="text-primary">BRIDGE</span></h1>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Zero-Knowledge</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /><span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">System Operational</span>
          </div>
          <Button size="sm" variant="ghost" className="rounded-full text-xs" onClick={focusAccess}>Access</Button>
          <Button size="sm" className="h-10 px-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-black uppercase tracking-[0.2em] text-[10px] shadow-[0_8px_20px_rgba(16,185,129,0.3)] hover:brightness-110" onClick={() => setLocation("/upload")}>Upload</Button>
          <a href="https://github.com/Kavin001K/VaultBridge" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition-all group">
            <Github className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" /><span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white">{githubStars !== null ? <>{githubStars} ★</> : "Star"}</span>
          </a>
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => { const s = toggleSound(); setSoundEnabled(s); if (s) playSound("click"); }} className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all text-zinc-500 hover:text-primary tap-sm">
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>
    </header>
  );

  // ─── Mobile Header ───
  const MobileHeader = () => (
    <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <img src="/icon-192x192.png" alt="VB" className="w-5 h-5" />
          </div>
          <span className="text-sm font-bold tracking-tight text-white">Vault<span className="text-primary">Bridge</span></span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={focusAccess} className="btn-ghost px-3 py-2 text-xs">Access</button>
          <Link href="/upload"><button className="btn-primary px-4 py-2 text-xs"><Upload className="w-3.5 h-3.5" />Upload</button></Link>
        </div>
      </div>
    </header>
  );

  // ─── Mobile Home ───
  const MobileHome = () => (
    <main className="flex-1">
      <section className="relative pt-16 pb-8 px-4">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/15 text-primary text-[11px] font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />End-to-end encrypted sharing
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-bold tracking-tight leading-[1.05] mb-4 text-balance">
            Share files with <span className="text-primary">complete privacy.</span><br /><span className="text-zinc-500">No accounts. No tracking.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-sm text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Files encrypted in your browser. Only the person with the code can access them. Once read, they disappear.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-10">
            <Link href="/upload"><button className="btn-primary px-8 py-3.5 text-base w-full"><Upload className="w-4 h-4" />Upload a file</button></Link>
            <button onClick={focusAccess} className="btn-secondary px-8 py-3.5 text-base w-full"><KeyRound className="w-4 h-4" />Open a vault</button>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="text-center"><div className="text-2xl font-bold text-white tabular-nums">{stats?.activeVaultsCount ?? "—"}</div><div className="text-xs text-zinc-500 mt-1">Active vaults</div></div>
            <div className="text-center"><div className="text-2xl font-bold text-white tabular-nums">{stats?.totalVaultsCreated?.toLocaleString() ?? "—"}</div><div className="text-xs text-zinc-500 mt-1">Total secured</div></div>
            <div className="text-center"><div className="flex items-center justify-center gap-1.5 text-2xl font-bold text-white"><Lock className="w-5 h-5 text-primary" />AES-256</div><div className="text-xs text-zinc-500 mt-1">Encryption</div></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Access Panel */}
      <section ref={accessSectionRef} className="px-4 pb-12">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <div className="transfer-panel p-4">
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">Open a vault</label>
            <div className="flex gap-2.5">
              <div className="relative flex-1">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input ref={vaultInputRef} type="text" value={vaultInput} onChange={e => { setVaultInput(e.target.value); if (vaultInputError) setVaultInputError(null); }} onKeyDown={e => { if (e.key === "Enter") openVault(vaultInput); }} placeholder="XXX-XXXXX or paste link" className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/40 transition-colors" />
              </div>
              <button onClick={() => openVault(vaultInput)} className="btn-primary px-5 shrink-0 text-sm">Open<ArrowRight className="w-3.5 h-3.5" /></button>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <button onClick={handleClipboardPaste} className="btn-ghost px-3 py-1.5 text-[11px]"><Clipboard className="w-3 h-3" />Paste</button>
              {recentVault && <button onClick={() => openVault(recentVault)} className="btn-ghost px-3 py-1.5 text-[11px]"><RefreshCw className="w-3 h-3" />Recent</button>}
              <Link href="/get-it-mailed"><button className="btn-ghost px-3 py-1.5 text-[11px] text-primary"><Mail className="w-3 h-3" />Email me</button></Link>
            </div>
            <AnimatePresence>{vaultInputError && <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xs text-red-400 flex items-center gap-1.5 mt-3"><AlertTriangle className="w-3 h-3 shrink-0" />{vaultInputError}</motion.p>}</AnimatePresence>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-3 text-[11px] text-zinc-500">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />No account</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />E2E encrypted</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />Free forever</span>
          </div>
        </motion.div>
      </section>

      <section className="px-4 pb-12 max-w-xl mx-auto"><RecentActivity /></section>

      {/* How it works */}
      <section className="border-t border-white/[0.04] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-2xl font-bold mb-3">How it works</h2><p className="text-sm text-zinc-500">Three steps. Zero knowledge. Complete privacy.</p></div>
          <div className="grid grid-cols-1 gap-4">
            {[{ step: "1", title: "Upload", desc: "Drop any file up to 1GB. Encryption happens right in your browser.", icon: Upload }, { step: "2", title: "Share", desc: "Get a secure link with an access code. Send it however you want.", icon: Mail }, { step: "3", title: "Vanish", desc: "Once downloaded, the vault self-destructs. No traces left behind.", icon: Shield }].map(s => (
              <div key={s.title} className="surface-card p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary shrink-0"><s.icon className="w-5 h-5" /></div>
                <div><div className="text-[10px] font-mono text-zinc-500 mb-0.5">Step {s.step}</div><h3 className="text-base font-semibold mb-1">{s.title}</h3><p className="text-sm text-zinc-400">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy comparison */}
      <section className="border-t border-white/[0.04] py-16 px-4">
        <div className="text-center mb-10"><h2 className="text-2xl font-bold mb-3">Privacy by design</h2><p className="text-sm text-zinc-500">Built to disappear. Not to monetize your data.</p></div>
        <div className="max-w-lg mx-auto space-y-3">
          <div className="surface-card-accent p-5">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center"><Shield className="w-4 h-4 text-primary" /></div><h3 className="font-semibold text-white">VaultBridge</h3></div>
            <ul className="space-y-2">{["No account required", "No tracking or analytics", "Auto-destruct after reading", "Encrypted before upload"].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>)}</ul>
          </div>
          <div className="surface-card p-5 opacity-50">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"><Building className="w-4 h-4 text-zinc-400" /></div><h3 className="font-semibold text-zinc-400">Traditional cloud</h3></div>
            <ul className="space-y-2">{["Account mandatory", "Analytics tracking", "Permanent storage", "Server-side encryption"].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-zinc-500"><span className="text-zinc-600 mt-0.5">—</span>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.04] py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to share securely?</h2>
        <p className="text-sm text-zinc-400 mb-8">No signup. No tracking. Just encryption.</p>
        <Link href="/upload"><button className="btn-primary px-10 py-3.5 text-base">Start sharing now<ArrowRight className="w-4 h-4" /></button></Link>
      </section>
    </main>
  );

  // ─── Desktop Home ───
  const DesktopHome = () => (
    <main className="flex-1 relative z-10">
      {/* Background effects */}
      <div className="fixed inset-0 grid-bg opacity-30 mix-blend-screen pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full" />
        <motion.div animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
      </div>

      {/* HUD Corners */}
      <div className="fixed top-24 left-8 w-32 h-32 border-l border-t border-primary/20 rounded-tl-3xl pointer-events-none opacity-50" />
      <div className="fixed top-24 right-8 w-32 h-32 border-r border-t border-primary/20 rounded-tr-3xl pointer-events-none opacity-50" />
      <div className="fixed bottom-8 left-8 w-32 h-32 border-l border-b border-primary/20 rounded-bl-3xl pointer-events-none opacity-50" />
      <div className="fixed bottom-8 right-8 w-32 h-32 border-r border-b border-primary/20 rounded-br-3xl pointer-events-none opacity-50" />

      {/* HERO */}
      <section className="relative pt-24 sm:pt-32 pb-10 px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 leading-[1.15]">
            Share Securely.{" "}
            <span style={{ backgroundImage: "linear-gradient(to right, #10b981, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              No Login.
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-zinc-400 max-w-xl mb-8">Encrypt files in your browser and share with a secure code. Gone after first read.</p>

          {/* VaultDial */}
          <div className="mb-10"><VaultDial totalVaults={stats?.totalVaultsCreated || 0} activeVaults={stats?.activeVaultsCount || 0} /></div>

          {/* 3 Glass Action Cards */}
          <div className="w-full grid grid-cols-3 gap-5 mb-10">
            {[
              { href: "/upload", icon: Upload, label: "Upload", sub: "Secure_File_Fragmenting", accent: "primary", borderColor: "border-primary/40", iconColor: "text-primary", iconGlow: "drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]" },
              { onClick: focusAccess, icon: KeyRound, label: "Access", sub: "Zero_Knowledge_Unlock", accent: "cyan", borderColor: "border-cyan-500/40", iconColor: "text-cyan-400", iconGlow: "drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" },
              { href: "/clipboard", icon: Clipboard, label: "Clipboard", sub: "Instant_Secure_Sync", accent: "violet", borderColor: "border-violet-500/40", iconColor: "text-violet-400", iconGlow: "drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" },
            ].map((card, i) => {
              const content = (
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => { playSound("click"); if ("onClick" in card) (card as any).onClick(); }}
                  className={`group relative flex flex-col items-center justify-center rounded-[2.5rem] border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 hover:${card.borderColor} transition-all p-8 py-10 cursor-pointer overflow-hidden h-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`relative w-20 h-20 shrink-0 rounded-[2rem] bg-zinc-950 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-700`}>
                    <card.icon className={`relative w-9 h-9 ${card.iconColor} ${card.iconGlow}`} />
                  </div>
                  <div className="text-center relative">
                    <h3 className="text-xl font-black text-white group-hover:text-white transition-colors tracking-tight uppercase">{card.label}</h3>
                    <p className="text-[10px] text-zinc-500 mt-2 font-black uppercase tracking-[0.2em] opacity-80">{card.sub}</p>
                  </div>
                </motion.div>
              );
              return "href" in card ? <Link key={card.label} href={(card as any).href}>{content}</Link> : <div key={card.label}>{content}</div>;
            })}
          </div>

          {/* Access Panel */}
          <div ref={accessSectionRef} className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-emerald-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative w-full rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 text-left backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-mono font-black text-primary/80 uppercase tracking-[0.3em]">Secure_Access_Bridge</span>
              </div>
              <div className="flex gap-2.5">
                <div className="relative flex-1">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-primary transition-colors" />
                  <Input ref={vaultInputRef} type="text" value={vaultInput} onChange={e => { setVaultInput(e.target.value); if (vaultInputError) setVaultInputError(null); }} onKeyDown={e => { if (e.key === "Enter") openVault(vaultInput); }} placeholder="Enter Code (XXX-XXXXX) or Paste Link" className="w-full h-14 pl-12 rounded-2xl border-white/5 bg-zinc-900/50 text-base font-mono text-white placeholder:text-zinc-600 focus-visible:ring-primary/40 transition-all" />
                </div>
                <Button type="button" className="h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-black uppercase tracking-[0.2em] text-xs px-10 shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all" onClick={() => openVault(vaultInput)}>Authenticate</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 mt-3">
                <button onClick={handleClipboardPaste} className="flex items-center gap-2 h-9 px-4 rounded-xl text-xs font-bold text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/5 transition-all"><Clipboard className="h-3.5 w-3.5" />Paste from Clipboard</button>
                {recentVault && <button onClick={() => openVault(recentVault)} className="flex items-center gap-2 h-9 px-4 rounded-xl text-xs font-bold text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/5 transition-all"><RefreshCw className="h-3.5 w-3.5" />Reconnect</button>}
                <button onClick={() => { playSound("click"); setLocation("/get-it-mailed"); }} className="flex items-center gap-2 h-9 px-4 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/10 transition-all"><Mail className="h-3.5 w-3.5" />Get via Email</button>
              </div>
              <AnimatePresence>{vaultInputError && <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-bold text-rose-500 flex items-center gap-2 mt-3"><AlertTriangle className="w-4 h-4 shrink-0" />{vaultInputError}</motion.p>}</AnimatePresence>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-6 text-[11px] font-medium text-zinc-600">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />No login</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />E2E encrypted</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />Free forever</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />Instant sharing</span>
          </div>
        </motion.div>
      </section>

      {/* Recent Activity */}
      <section className="px-6 lg:px-8 max-w-4xl mx-auto pb-10"><RecentActivity /></section>

      {/* How it works */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Radically Simple</h2>
          <p className="text-sm sm:text-xl text-zinc-400">Secure sharing shouldn't require a manual.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ num: "01", title: "Upload your file", desc: "Drag and drop any file up to 1GB directly into your browser." }, { num: "02", title: "We encrypt it", desc: "Files are encrypted locally using AES-256 before upload. We never see the key." }, { num: "03", title: "Share instantly", desc: "Copy the secure link and send it. Set it to self-destruct after downloading." }].map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-950/0 absolute top-4 right-6 pointer-events-none">{s.num}</div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{s.title}</h3>
              <p className="text-zinc-400 text-sm relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Privacy comparison */}
      <section className="py-16 px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Privacy by Architecture</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">VaultBridge is built around privacy. Traditional cloud platforms are built around retention and monetization.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative p-8 rounded-[2rem] border border-primary/30 bg-zinc-900/60 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col" style={{ scale: 1.02 }}>
            <div className="absolute top-0 right-8 -mt-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">Privacy Optimized</div>
            <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30"><Shield className="w-6 h-6 text-primary" /></div><div><h3 className="text-xl font-bold">VaultBridge</h3><p className="text-sm text-primary">Privacy-First by Design</p></div></div>
            <ul className="space-y-4 flex-1 mb-6">{["No account required", "Zero tracking policy", "Auto-destruct links built-in", "Temporary encrypted vaults", "No data monetization"].map((item, i) => <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-zinc-200 font-medium">{item}</span></li>)}</ul>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all rounded-xl h-14 text-lg mt-auto" onClick={() => { playSound("click"); setLocation("/upload"); }}>Start Secure Sharing</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-[2rem] border border-zinc-800 bg-zinc-950/50 flex flex-col opacity-80">
            <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 text-zinc-400"><Building className="w-6 h-6" /></div><div><h3 className="text-xl font-bold text-zinc-300">Traditional Cloud</h3><p className="text-sm text-zinc-500">Built for Data Ecosystems</p></div></div>
            <ul className="space-y-4 flex-1">{["Account mandatory", "Usage analytics enabled", "Designed for permanent storage", "Monetization-driven", "Data retention by default"].map((item, i) => <li key={i} className="flex items-start gap-3 opacity-60"><span className="text-zinc-500 font-mono mt-[-2px] shrink-0">–</span><span className="text-zinc-400 font-medium">{item}</span></li>)}</ul>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12"><h2 className="text-3xl md:text-5xl font-bold mb-3">Built for Everyone</h2><p className="text-xl text-zinc-400">Versatile privacy tools for every workflow.</p></div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[{ icon: Code, title: "Developers", desc: "Share API keys and configs securely." }, { icon: Building, title: "Business", desc: "Transfer legal docs without risk." }, { icon: GraduationCap, title: "Students", desc: "Share large project files seamlessly." }, { icon: Shield, title: "Journalists", desc: "For sources needing ultimate privacy." }, { icon: Users, title: "Anonymous", desc: "Send files without revealing identity." }].map(uc => (
            <motion.div key={uc.title} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-primary shrink-0"><uc.icon className="w-5 h-5" /></div>
              <div><h3 className="font-bold text-base mb-0.5">{uc.title}</h3><p className="text-sm text-zinc-400">{uc.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 border-y border-white/5 bg-primary/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto relative z-10">
          <Globe className="w-12 h-12 text-primary/50 mx-auto mb-6 animate-pulse" />
          <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed italic">"The gold standard for zero-knowledge file sharing. Encrypt anything, share anywhere, leave no trace."</p>
        </motion.div>
      </section>

      {/* Security Ticker */}
      <div className="w-full bg-zinc-950 border-y border-white/5 py-3 overflow-hidden whitespace-nowrap relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex items-center gap-12 text-[10px] font-mono font-black text-zinc-500 uppercase tracking-[0.2em]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="flex items-center gap-2"><Shield className="w-3 h-3 text-primary" />SYSTEM: <span className="text-emerald-400">OPTIMAL</span></span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="flex items-center gap-2"><Lock className="w-3 h-3 text-primary" />CIPHER: <span className="text-cyan-400">AES_256_GCM</span></span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-primary" />LATENCY: <span className="text-emerald-400">12MS</span></span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-primary" />NODES: <span className="text-cyan-400">GLOBAL</span></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] z-0" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Ready to regain your privacy?</h2>
          <p className="text-lg text-zinc-400 mb-8">Start sharing files securely right now. No signup. No tracking. Just encryption.</p>
          <Link href="/upload"><Button size="lg" className="text-base h-16 px-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105 transition-all">Start Secure Sharing Now</Button></Link>
        </motion.div>
      </section>
    </main>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      {isMobile ? <MobileHome /> : <DesktopHome />}

      {/* Footer — same for both */}
      <footer className="border-t border-white/[0.04] bg-background pt-14 pb-8 px-4 sm:px-6 lg:px-8 safe-bottom">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"><img src="/icon-192x192.png" alt="VB" className="w-4 h-4" /></div>
              <span className="font-bold text-white">VaultBridge</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">Zero-knowledge encrypted file sharing. Built for privacy.</p>
          </div>
          <div><h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">Product</h4><ul className="space-y-2.5 text-sm text-zinc-500"><li><Link href="/upload"><span className="hover:text-white transition-colors cursor-pointer">Upload</span></Link></li><li><Link href="/access"><span className="hover:text-white transition-colors cursor-pointer">Access</span></Link></li><li><Link href="/clipboard"><span className="hover:text-white transition-colors cursor-pointer">Clipboard</span></Link></li></ul></div>
          <div><h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">Info</h4><ul className="space-y-2.5 text-sm text-zinc-500"><li><Link href="/how-it-works"><span className="hover:text-white transition-colors cursor-pointer">How it works</span></Link></li><li><Link href="/security"><span className="hover:text-white transition-colors cursor-pointer">Security</span></Link></li><li><Link href="/blog"><span className="hover:text-white transition-colors cursor-pointer">Blog</span></Link></li></ul></div>
          <div><h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">Legal</h4><ul className="space-y-2.5 text-sm text-zinc-500"><li><Link href="/privacy"><span className="hover:text-white transition-colors cursor-pointer">Privacy</span></Link></li><li><Link href="/terms"><span className="hover:text-white transition-colors cursor-pointer">Terms</span></Link></li><li><Link href="/roadmap"><span className="hover:text-white transition-colors cursor-pointer">Roadmap</span></Link></li></ul></div>
        </div>
        <div className="max-w-5xl mx-auto pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-zinc-600">© 2026 VaultBridge</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Kavin001K/VaultBridge" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <Link href="/admin/stats"><span className="text-[10px] text-zinc-600 hover:text-primary transition-colors cursor-pointer">Status</span></Link>
          </div>
        </div>
      </footer>

      {/* Clipboard prompt */}
      <AnimatePresence>
        {showClipboardPrompt && clipboardVault && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold text-primary">Vault link in clipboard</p><p className="mt-1 text-xs text-zinc-500 font-mono truncate">{clipboardVault}</p></div><button className="p-1.5 rounded-lg text-zinc-500 hover:text-white transition-colors" onClick={() => setShowClipboardPrompt(false)}><X className="w-4 h-4" /></button></div>
            <div className="mt-3 flex gap-2"><button className="btn-primary px-4 py-2 text-xs" onClick={() => { openVault(clipboardVault); setShowClipboardPrompt(false); }}>Open vault</button><button className="btn-secondary px-4 py-2 text-xs" onClick={() => { setVaultInput(clipboardVault); setShowClipboardPrompt(false); }}>Use in access box</button></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
