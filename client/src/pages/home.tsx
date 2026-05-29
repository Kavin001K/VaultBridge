import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Upload,
  KeyRound,
  Shield,
  ArrowRight,
  RefreshCw,
  Mail,
  CheckCircle2,
  Clipboard,
  AlertTriangle,
  Github,
  ArrowUpRight,
  Zap,
  Globe,
  Code,
  Building,
  GraduationCap,
  Users,
  FileUp,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  Music,
  EyeOff,
  Trash2,
  Infinity as InfinityIcon,
  X
} from "lucide-react";
import { useSounds } from "@/hooks/useSounds";
import { RecentActivity } from "@/components/RecentActivity";

const RECENT_KEY = "vaultbridge_recent";
const LEGACY_KEY = "vaultbridge-recent-vault-link";
const CODE_RE = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{5}$/;
const okPath = (p: string) => { const n = p.endsWith("/") ? p.slice(0, -1) : p; return n === "/access" || n.startsWith("/download/") || n.startsWith("/v/"); };

// Premium SVG Technology Logo
function PremiumLogo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg className="w-full h-full text-[#10b981]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Tech rotating outer rings */}
          <circle cx="50" cy="50" r="44" stroke="#10b981" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="50" cy="50" r="38" stroke="url(#logo-grad)" strokeOpacity="0.3" strokeWidth="2" />
          {/* Shield Core */}
          <path d="M50 18C66 18 73 23 73 23C73 45 62 66 50 80C38 66 27 45 27 23C27 23 34 18 50 18Z" fill="url(#logo-grad)" fillOpacity="0.08" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Safe Lock Core Indicator */}
          <circle cx="50" cy="50" r="11" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
          <path d="M50 39V43" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 57V61" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <path d="M39 50H43" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <path d="M57 50H61" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-base font-bold tracking-tight text-white font-['Geist',system-ui,sans-serif]">
        Vault<span className="text-[#10b981]">Bridge</span>
      </span>
    </div>
  );
}

export default function Home() {
  const { play: playSound } = useSounds();
  const [, setLocation] = useLocation();
  const [stars, setStars] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [recent, setRecent] = useState<string | null>(null);
  const [clip, setClip] = useState<string | null>(null);
  const [showClip, setShowClip] = useState(false);
  const [stats, setStats] = useState<{ totalVaultsCreated: number; activeVaultsCount: number } | null>(null);
  const [tab, setTab] = useState<"upload" | "access">("upload");
  const [showPricing, setShowPricing] = useState(false);
  
  const inpRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

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

  const focusAccess = () => {
    setTab("access");
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => inpRef.current?.focus(), 400);
    }, 100);
  };

  const paste = async () => {
    if (!navigator.clipboard?.readText) { setErr("Clipboard unavailable."); return; }
    try { setInput((await navigator.clipboard.readText()).trim()); setErr(null); } catch { setErr("Clipboard blocked."); }
  };

  useEffect(() => {
    if (!window.isSecureContext || !navigator.clipboard?.readText) return;
    const t = setTimeout(async () => {
      try {
        const txt = (await navigator.clipboard.readText()).trim();
        if (!txt) return;
        const d = resolve(txt);
        if (!d) return;
        setClip(txt);
        setShowClip(true);
      } catch {}
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const comparisons = [
    { label: "Account required", us: false, them: true },
    { label: "Tracks you", us: false, them: true },
    { label: "Sells your data", us: false, them: true },
    { label: "Encrypted before upload", us: true, them: false },
    { label: "Auto-destruct after reading", us: true, them: false },
    { label: "Open source", us: true, them: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#020604] text-zinc-100 overflow-x-hidden selection:bg-[#10b981]/20 selection:text-white">
      {/* Background Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] radial-backlight rounded-full opacity-60 z-0" />
      <div className="absolute top-[20%] right-1/10 w-[400px] h-[400px] radial-backlight rounded-full opacity-40 z-0" />

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.03] bg-[#020604]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
            <PremiumLogo />
          </div>
          
          {/* Middle Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works">
              <span className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">How it works</span>
            </Link>
            <Link href="/security">
              <span className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">Security</span>
            </Link>
            <span onClick={() => { playSound("click"); setShowPricing(true); }} className="text-sm font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer">
              Pricing
            </span>
            <Link href="/access">
              <span className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">Access vault</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/upload">
              <button className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-[#10b981] hover:bg-[#34d399] text-black transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.25)] select-none cursor-pointer">
                <Upload className="w-4 h-4 text-black" strokeWidth={2.5} />
                Upload
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-10 md:pt-16 pb-12 px-5 max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (Hero copy and controls) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 text-[#10b981] text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Privacy is our foundation
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.06] mb-5 text-white"
          >
            Secure sharing <br />
            that puts you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-teal-400">in control.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 16 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-base md:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed"
          >
            End-to-end encrypted file sharing in your browser. No accounts. No tracking. Just complete privacy.
          </motion.p>

          {/* Action Row */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-10 w-full"
          >
            <Link href="/upload" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#10b981] hover:bg-[#34d399] text-black font-bold text-base rounded-xl px-7 py-4 transition-all shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-95 cursor-pointer">
                <Upload className="w-5 h-5" strokeWidth={2.5} />
                Upload files
              </button>
            </Link>
            <Link href="/access" className="w-full sm:w-auto">
              <button 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-[#10b981]/30 hover:border-[#10b981]/60 bg-white/[0.02] hover:bg-[#10b981]/5 text-white font-semibold text-base rounded-xl px-7 py-4 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <KeyRound className="w-5 h-5 text-[#10b981]" />
                Open vault
              </button>
            </Link>
          </motion.div>

          {/* Core Feature Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs font-semibold text-zinc-300">
              <Lock className="w-4 h-4 text-[#10b981]" />
              End-to-end encrypted
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs font-semibold text-zinc-300">
              <Zap className="w-4 h-4 text-[#10b981]" />
              Up to 1GB per file
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs font-semibold text-zinc-300">
              <Globe className="w-4 h-4 text-[#10b981]" />
              Works on any device
            </div>
          </motion.div>
        </div>

        {/* Right Column (Center 3D Safe Graphic, Backlight, Orbit vectors, and Animated floating cards) */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full h-[460px] md:h-[520px]">
          {/* Ambient Lighting Glow Behind Safe */}
          <div className="absolute w-[360px] h-[360px] radial-backlight rounded-full opacity-60 z-0 animate-pulse-slow" />
          
          {/* Basalt gyroscopic rotating orbits */}
          <div className="orbit-ring orbit-ring-1" />
          <div className="orbit-ring orbit-ring-2" />

          {/* 3D Safe Image Asset on rock base */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative z-10 w-[290px] h-[290px] sm:w-[350px] sm:h-[350px]"
          >
            <img 
              src="/home-asset.png" 
              alt="Secure Vault Pedestal" 
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
            />
          </motion.div>

          {/* ─── FLOATING CARDS ─── */}
          
          {/* Document Card (Top-Left) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            className="absolute top-[12%] left-[4%] sm:left-[8%] z-20 glass-card-floating rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">document.pdf</p>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">2.4 MB · Locked</p>
            </div>
          </motion.div>

          {/* Photo Card (Bottom-Left) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 }}
            className="absolute bottom-[16%] left-[0%] sm:left-[4%] z-20 glass-card-floating rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">image.png</p>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">12.8 MB · Encrypted</p>
            </div>
          </motion.div>

          {/* Shield Card (Top-Right) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[8%] right-[4%] sm:right-[8%] z-20 glass-card-floating rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#10b981] leading-none">AES-256 Verified</p>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">Zero-knowledge sealed</p>
            </div>
          </motion.div>

          {/* Audio Card (Bottom-Right) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.6 }}
            className="absolute bottom-[20%] right-[0%] sm:right-[4%] z-20 glass-card-floating rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">audio.mp3</p>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">4.5 MB · Encrypted</p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ─── RECENT ACTIVITY ─── */}
      <section className="px-5 pb-12 max-w-xl mx-auto w-full z-10 relative">
        <RecentActivity />
      </section>

      {/* ─── MIDDLE HORIZONTAL VALUE GRID ─── */}
      <section className="border-t border-white/[0.03] py-16 md:py-24 px-5 max-w-7xl mx-auto w-full z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Privacy by design</h2>
          <p className="text-zinc-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Every feature is designed with one absolute rule: the server must never see your data.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left shadow-2xl">
          {/* Value 1 */}
          <div className="p-4 flex flex-col items-start gap-4 border-b sm:border-b-0 sm:border-r border-zinc-800/40 last:border-0 pr-4">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">Encrypted in browser</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Your files are fully encrypted with AES-256 before they ever leave your device.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="p-4 flex flex-col items-start gap-4 border-b sm:border-b-0 md:border-r border-zinc-800/40 last:border-0 sm:pl-4 sm:pr-4">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">We never see your data</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Zero-knowledge encryption ensures that even we cannot inspect, read, or unlock your vault.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="p-4 flex flex-col items-start gap-4 border-b sm:border-b-0 sm:border-r border-zinc-800/40 last:border-0 sm:pl-4 sm:pr-4">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">Files disappear after reading</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Once downloaded, the files are deleted completely from memory and active servers instantly.
              </p>
            </div>
          </div>

          {/* Value 4 */}
          <div className="p-4 flex flex-col items-start gap-4 last:border-0 sm:pl-4">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">Share anywhere</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Generate a short secure code or QR link. Send it to anyone, anywhere in the world instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATISTICS ROW BAR ─── */}
      <section className="pb-16 px-5 max-w-7xl mx-auto w-full z-10 relative">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center shadow-2xl">
          {/* Active Vaults */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white tabular-nums">
              {stats?.activeVaultsCount ?? "0"}
            </div>
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-1.5">Active vaults</div>
            <div className="text-[10px] text-zinc-400 mt-1 font-semibold">No accounts required</div>
          </div>

          {/* Total Secured */}
          <div className="flex flex-col items-center border-l border-zinc-800/40">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white tabular-nums">
              {stats?.totalVaultsCreated?.toLocaleString() ?? "2"}
            </div>
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-1.5">Total secured</div>
            <div className="text-[10px] text-zinc-400 mt-1 font-semibold">E2E client-encrypted</div>
          </div>

          {/* Encryption Standard */}
          <div className="flex flex-col items-center border-l border-zinc-800/40">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-3">
              <KeyRound className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white">AES-256</div>
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-1.5">Encryption</div>
            <div className="text-[10px] text-zinc-400 mt-1 font-semibold">Industry standard GCM</div>
          </div>

          {/* Works Anywhere */}
          <div className="flex flex-col items-center border-l border-zinc-800/40">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-3">
              <InfinityIcon className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white">∞</div>
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-1.5">Works anywhere</div>
            <div className="text-[10px] text-zinc-400 mt-1 font-semibold">On any device, anytime</div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (Three Steps) ─── */}
      <section className="border-t border-white/[0.03] py-16 md:py-24 px-5 max-w-7xl mx-auto w-full z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">How it works</h2>
          <p className="text-zinc-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Three simple steps. Your files stay private at every single stage of transit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", icon: Upload, title: "Upload & Encrypt", desc: "Select any file. AES-256 GCM encryption occurs client-side in your browser before a single byte reaches our servers." },
            { step: "02", icon: KeyRound, title: "Share Secure Code", desc: "You are given a highly secure, non-ambiguous short access code. Share it safely however you want — no logins or links." },
            { step: "03", icon: Shield, title: "Vanish Forever", desc: "As soon as the recipient downloads the files, the vault completely self-destructs. No traces, no backups, no logs." },
          ].map((s, i) => (
            <motion.div 
              key={s.title} 
              initial={{ opacity: 0, y: 16 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981]">
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-500 font-mono tracking-widest mb-1">STEP {s.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="border-t border-white/[0.03] py-16 md:py-24 px-5 max-w-7xl mx-auto w-full z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">For everyone</h2>
          <p className="text-zinc-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Highly secure tools that easily adapt to how you work day-to-day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { i: Code, t: "Developers", d: "API keys, configs, secrets" },
            { i: Building, t: "Business", d: "Contracts, financial sheets" },
            { i: GraduationCap, t: "Students", d: "Projects, raw research data" },
            { i: Shield, t: "Journalists", d: "Sensitive leaks, docs" },
            { i: Users, t: "Anonymous", d: "Share without any logs" },
            { i: Globe, t: "Everyone", d: "Privacy is a human right" }
          ].map(uc => (
            <div key={uc.t} className="glass-panel p-4 sm:p-5 flex items-start gap-4.5 rounded-2xl">
              <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[#10b981] shrink-0">
                <uc.i className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white mb-0.5">{uc.t}</h3>
                <p className="text-xs text-zinc-500">{uc.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/[0.03] py-20 px-5 max-w-7xl mx-auto w-full text-center z-10 relative">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to share securely?</h2>
          <p className="text-zinc-400 mb-8 text-sm sm:text-base">No logins. No subscriptions. No ads. Just client-side encryption that works.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/upload" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#34d399] text-black font-bold text-base rounded-xl px-10 py-4 transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)] cursor-pointer">
                Start sharing now
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-800 bg-[#060c09]/30 hover:bg-[#10b981]/5 text-white font-semibold text-sm rounded-xl px-7 py-4 transition-all cursor-pointer">
                Learn more
                <ArrowUpRight className="w-4 h-4 text-[#10b981]" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.03] bg-[#020604] pt-16 pb-8 px-5 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <PremiumLogo />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed pr-4">
              Zero-knowledge client-encrypted ephemeral transfer system. Engineered with complete integrity and zero data tracking.
            </p>
          </div>
          {[
            ["Product", [["Upload console", "/upload"], ["Access vault", "/access"], ["Secure Clipboard", "/clipboard"]]],
            ["Info", [["How it works", "/how-it-works"], ["Security architecture", "/security"], ["Blog updates", "/blog"]]],
            ["Legal", [["Privacy guidelines", "/privacy"], ["Terms of service", "/terms"], ["Future Roadmap", "/roadmap"]]]
          ].map(col => (
            <div key={col[0]}>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 font-mono">{col[0]}</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-zinc-500">
                {col[1].map(([l, h]: any) => (
                  <li key={l}>
                    <Link href={h}>
                      <span className="hover:text-white transition-colors cursor-pointer">{l}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-medium">© 2026 VaultBridge</p>
          <div className="flex items-center gap-5">
            <Link href="/admin/stats">
              <span className="text-[11px] font-bold text-zinc-600 hover:text-[#10b981] transition-colors cursor-pointer">System Status</span>
            </Link>
            <a href="https://github.com/Kavin001K/VaultBridge" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Clipboard detection prompt overlay */}
      {showClip && clip && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-5 z-[60] mx-auto max-w-sm rounded-2xl border border-[#10b981]/20 bg-[#020a06]/95 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-[#10b981]">Vault link detected</p>
              <p className="mt-1 text-xs text-zinc-500 font-mono truncate max-w-[280px]">{clip}</p>
            </div>
            <button onClick={() => setShowClip(false)} className="text-zinc-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 bg-[#10b981] hover:bg-[#34d399] text-black font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer" onClick={() => { open(clip); setShowClip(false); }}>
              Open vault
            </button>
            <button className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer" onClick={() => { setInput(clip); setShowClip(false); }}>
              Paste in box
            </button>
          </div>
        </motion.div>
      )}

      {/* ─── PREMIUM PRICING MODAL ─── */}
      <AnimatePresence>
        {showPricing && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowPricing(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md glass-panel p-6 sm:p-8 rounded-3xl z-10 border border-[#10b981]/20 shadow-[0_0_50px_rgba(16,185,129,0.15)]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowPricing(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981] mx-auto mb-4">
                  <InfinityIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">Free. Always.</h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  VaultBridge is built as secure infrastructure, not for capital gain. We have zero accounts, zero analytics, and zero ads.
                </p>
              </div>

              <div className="space-y-3.5 mb-6">
                {[
                  "No credit card required. Ever.",
                  "AES-256 GCM client-side encryption",
                  "Ephemeral storage that auto-destructs",
                  "Full access to all security controls",
                  "100% audited open-source code"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setShowPricing(false)}
                className="w-full bg-[#10b981] hover:bg-[#34d399] text-black font-bold py-3.5 rounded-xl text-sm transition-colors cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                Launch free secure lane
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
