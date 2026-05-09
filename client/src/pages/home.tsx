import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Lock, Upload, KeyRound, Shield, ArrowRight, RefreshCw, Mail, CheckCircle2, Clipboard, AlertTriangle, Github, ArrowUpRight, Zap, Globe, Code, Building, GraduationCap, Users, } from "lucide-react";
import { useSounds } from "@/hooks/useSounds";
import { useIsMobile } from "@/hooks/use-mobile";
import { RecentActivity } from "@/components/RecentActivity";

const RECENT_KEY = "vaultbridge_recent";
const LEGACY_KEY = "vaultbridge-recent-vault-link";
const CODE_RE = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{5}$/;
const okPath = (p: string) => { const n = p.endsWith("/") ? p.slice(0, -1) : p; return n === "/access" || n.startsWith("/download/") || n.startsWith("/v/"); };

export default function Home() {
  const { play: playSound, toggle: toggleSound } = useSounds();
  const [, setLocation] = useLocation();
  const [stars, setStars] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [recent, setRecent] = useState<string | null>(null);
  const [clip, setClip] = useState<string | null>(null);
  const [showClip, setShowClip] = useState(false);
  const [stats, setStats] = useState<{ totalVaultsCreated: number; activeVaultsCount: number } | null>(null);
  const inpRef = useRef<HTMLInputElement | null>(null);
  const secRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => { fetch("https://api.github.com/repos/Kavin001K/VaultBridge").then(r => r.json()).then(d => d.stargazers_count && setStars(d.stargazers_count)).catch(() => {}); }, []);
  useEffect(() => { fetch("/api/stats").then(r => r.json()).then(setStats).catch(() => {}); }, []);
  useEffect(() => { const s = localStorage.getItem(RECENT_KEY) || localStorage.getItem(LEGACY_KEY); if (s) setRecent(s); }, []);

  const resolve = (raw: string): string | null => {
    const t = raw.trim(); if (!t) return null;
    if (CODE_RE.test(t)) return `/access?code=${t.replace(/[^A-Za-z0-9]/g, "").toUpperCase()}`;
    const c = [t]; if (/^(access|download\/|v\/)/i.test(t)) c.push(`/${t}`);
    for (const x of c) { try { const u = x.startsWith("/") ? new URL(x, location.origin) : new URL(x); if (okPath(u.pathname)) return u.origin === location.origin ? `${u.pathname}${u.search}${u.hash}` : u.toString(); } catch { continue; } }
    return null;
  };
  const open = (raw: string) => {
    const d = resolve(raw); if (!d) { setErr("Paste a vault link or access code (XXX-XXXXX)."); return; }
    setErr(null); const c = raw.trim(); if (c) { localStorage.setItem(RECENT_KEY, c); localStorage.setItem(LEGACY_KEY, c); setRecent(c); }
    if (d.startsWith("http")) { const p = new URL(d); p.origin === location.origin ? setLocation(`${p.pathname}${p.search}${p.hash}`) : (location.href = d); return; }
    setLocation(d);
  };
  const focus = () => { secRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => inpRef.current?.focus(), 350); };
  const paste = async () => { if (!navigator.clipboard?.readText) { setErr("Clipboard unavailable."); return; } try { setInput((await navigator.clipboard.readText()).trim()); setErr(null); } catch { setErr("Clipboard blocked."); } };
  useEffect(() => { if (!window.isSecureContext || !navigator.clipboard?.readText) return; const t = setTimeout(async () => { try { const txt = (await navigator.clipboard.readText()).trim(); if (!txt) return; const d = resolve(txt); if (!d) return; setClip(txt); setShowClip(true); } catch {} }, 1500); return () => clearTimeout(t); }, []);

  const features = [
    { icon: Upload, title: "Upload & encrypt", desc: "Drop files up to 1 GB. AES-256-GCM encryption happens in your browser before anything leaves your device.", href: "/upload" },
    { icon: KeyRound, title: "Open any vault", desc: "Enter an access code or paste a vault link. No account needed — just the code.", action: focus },
    { icon: Shield, title: "Zero knowledge", desc: "We never see your files or keys. Everything is encrypted client-side. Your privacy is mathematically guaranteed.", href: null },
  ];

  const comparisons = [
    { label: "Account required", us: false, them: true },
    { label: "Tracks you", us: false, them: true },
    { label: "Sells your data", us: false, them: true },
    { label: "Encrypted before upload", us: true, them: false },
    { label: "Auto-destruct after reading", us: true, them: false },
    { label: "Open source", us: true, them: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.04] bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"><img src="/icon-192x192.png" alt="VB" className="w-5 h-5" /></div>
            <span className="text-sm font-semibold tracking-tight text-white">Vault<span className="text-primary">Bridge</span></span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={focus} className="btn-ghost px-3 py-2 text-xs sm:text-sm">Access vault</button>
            <Link href="/upload"><button className="btn-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm"><Upload className="w-3.5 h-3.5" />Upload</button></Link>
            <a href="https://github.com/Kavin001K/VaultBridge" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-zinc-500 hover:text-white transition-colors"><Github className="w-3.5 h-3.5" />{stars ?? "Star"}</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative section-padding px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/15 text-primary text-[11px] sm:text-xs font-medium tracking-wide mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              End-to-end encrypted file sharing
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.06] mb-5 sm:mb-6 text-balance">
            Share files with<br />
            <span className="text-primary">complete privacy.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Your files are encrypted in the browser before upload. Only someone with the secure code can access them. After reading, they vanish — no traces left behind.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 sm:mb-16">
            <Link href="/upload"><button className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto">Upload a file<ArrowRight className="w-4 h-4" /></button></Link>
            <button onClick={focus} className="btn-secondary px-8 py-3.5 text-base w-full sm:w-auto">Open a vault<KeyRound className="w-4 h-4" /></button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pb-8 sm:pb-12">
            {[
              { v: stats?.activeVaultsCount ?? "—", l: "Active vaults" },
              { v: stats?.totalVaultsCreated?.toLocaleString() ?? "—", l: "Total secured" },
              { v: "AES-256", l: "Encryption standard" },
            ].map((s, i) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.v}</div>
                <div className="text-xs text-zinc-500 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Access panel */}
          <motion.div ref={secRef} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="max-w-xl mx-auto">
            <div className="card-accent p-4 sm:p-5">
              <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">Open a vault</label>
              <div className="flex gap-2.5">
                <div className="relative flex-1">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input ref={inpRef} type="text" value={input} onChange={e => { setInput(e.target.value); if (err) setErr(null); }} onKeyDown={e => e.key === "Enter" && open(input)} placeholder="XXX-XXXXX or paste a vault link"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/30 transition-colors" />
                </div>
                <button onClick={() => open(input)} className="btn-primary px-6 shrink-0 text-sm">Open<ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button onClick={paste} className="btn-ghost px-3 py-1.5 text-[11px]"><Clipboard className="w-3 h-3" />Paste</button>
                {recent && <button onClick={() => open(recent)} className="btn-ghost px-3 py-1.5 text-[11px]"><RefreshCw className="w-3 h-3" />Recent</button>}
                <Link href="/get-it-mailed"><button className="btn-ghost px-3 py-1.5 text-[11px] text-primary"><Mail className="w-3 h-3" />Email code</button></Link>
              </div>
              {err && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-400 flex items-center gap-1.5 mt-3"><AlertTriangle className="w-3 h-3 shrink-0" />{err}</motion.p>}
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-3 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />No account</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />End-to-end encrypted</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />Free, always</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── RECENT ACTIVITY ─── */}
      <section className="px-4 sm:px-6 pb-8 max-w-xl mx-auto"><RecentActivity /></section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="border-t border-white/[0.04] section-padding px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">How it works</h2>
            <p className="text-sm sm:text-base text-zinc-500 max-w-md mx-auto">Three simple steps. Your files stay private at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { step: "01", icon: Upload, title: "Upload", desc: "Drop any file. Encryption happens right in your browser using AES-256-GCM before a single byte leaves your device." },
              { step: "02", icon: KeyRound, title: "Share code", desc: "You get a short access code. Share it via any channel — message, email, or in person. No accounts needed." },
              { step: "03", icon: Shield, title: "Vanish", desc: "Once the recipient downloads your file, the vault self-destructs. No data retained. No traces anywhere." },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-elevated p-6 sm:p-8 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] border border-primary/12 flex items-center justify-center text-primary"><s.icon className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 mb-1.5 tracking-wider">STEP {s.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY COMPARISON ─── */}
      <section className="border-t border-white/[0.04] section-padding px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Privacy by design</h2>
            <p className="text-sm sm:text-base text-zinc-500">Every architecture decision starts with one question: does this protect the user?</p>
          </div>
          <div className="card-accent overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/[0.04]">
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Feature</div>
                {comparisons.map((c, i) => <div key={i} className="py-2.5 text-sm font-medium text-white border-b border-white/[0.02] last:border-0">{c.label}</div>)}
              </div>
              <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/[0.04] bg-primary/[0.02]">
                <div className="text-xs font-medium text-primary uppercase tracking-wider mb-3">VaultBridge</div>
                {comparisons.map((c, i) => <div key={i} className="py-2.5 text-sm border-b border-white/[0.02] last:border-0 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /><span className="text-zinc-300">{c.us ? "Yes" : "No"}</span></div>)}
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Traditional cloud</div>
                {comparisons.map((c, i) => <div key={i} className="py-2.5 text-sm border-b border-white/[0.02] last:border-0 flex items-center gap-2"><span className="text-zinc-600 w-4 h-4 flex items-center justify-center text-xs">—</span><span className="text-zinc-500">{c.them ? "Yes" : "No"}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="border-t border-white/[0.04] section-padding px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">For everyone</h2>
            <p className="text-sm sm:text-base text-zinc-500">Privacy tools that adapt to how you work.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[{ i: Code, t: "Developers", d: "API keys, configs, env files" }, { i: Building, t: "Business", d: "Contracts, financial data" }, { i: GraduationCap, t: "Students", d: "Projects, research data" }, { i: Shield, t: "Journalists", d: "Sources, sensitive docs" }, { i: Users, t: "Anonymous", d: "Share without identity" }, { i: Globe, t: "Everyone", d: "Privacy is a right" }].map(uc => (
              <div key={uc.t} className="card-elevated p-4 sm:p-5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/[0.03] text-primary shrink-0"><uc.i className="w-4 h-4" /></div>
                <div><h3 className="font-medium text-sm mb-0.5">{uc.t}</h3><p className="text-xs text-zinc-500">{uc.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/[0.04] section-padding px-4 sm:px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to share securely?</h2>
          <p className="text-sm sm:text-base text-zinc-400 mb-8">No signup. No tracking. Just encryption that works.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/upload"><button className="btn-primary px-10 py-3.5 text-base">Start sharing now<ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="/how-it-works"><button className="btn-ghost px-6 py-3.5 text-sm">Learn more<ArrowUpRight className="w-3.5 h-3.5" /></button></Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary/60" />AES-256-GCM</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-primary/60" />Zero-knowledge</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-primary/60" />Open source</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.04] bg-background pt-14 sm:pt-20 pb-8 px-4 sm:px-6 safe-bottom">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4"><div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"><img src="/icon-192x192.png" alt="VB" className="w-4 h-4" /></div><span className="font-semibold text-white">VaultBridge</span></div>
            <p className="text-xs text-zinc-500 leading-relaxed">Zero-knowledge encrypted file sharing. Built for privacy, not profit.</p>
          </div>
          {[["Product", [["Upload", "/upload"], ["Access", "/access"], ["Clipboard", "/clipboard"]]], ["Info", [["How it works", "/how-it-works"], ["Security", "/security"], ["Blog", "/blog"]]], ["Legal", [["Privacy", "/privacy"], ["Terms", "/terms"], ["Roadmap", "/roadmap"]]]].map(col => (
            <div key={col[0]}><h4 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">{col[0]}</h4><ul className="space-y-2.5 text-sm text-zinc-500">{col[1].map(([l, h]: any) => <li key={l}><Link href={h}><span className="hover:text-white transition-colors cursor-pointer">{l}</span></Link></li>)}</ul></div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-zinc-600">© 2026 VaultBridge</p>
          <div className="flex items-center gap-4"><Link href="/admin/stats"><span className="text-[10px] text-zinc-600 hover:text-primary transition-colors cursor-pointer">Status</span></Link><a href="https://github.com/Kavin001K/VaultBridge" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a></div>
        </div>
      </footer>

      {/* Clipboard prompt */}
      {showClip && clip && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold text-primary">Vault link detected</p><p className="mt-1 text-xs text-zinc-500 font-mono truncate">{clip}</p></div></div>
          <div className="mt-3 flex gap-2"><button className="btn-primary px-4 py-2 text-xs" onClick={() => { open(clip); setShowClip(false); }}>Open vault</button><button className="btn-secondary px-4 py-2 text-xs" onClick={() => { setInput(clip); setShowClip(false); }}>Use in access box</button></div>
        </motion.div>
      )}
    </div>
  );
}
