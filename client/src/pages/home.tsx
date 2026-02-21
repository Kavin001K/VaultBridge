import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, RefreshCw, Sparkles, Mail, Send, CheckCircle2, AlertCircle,
  Clipboard, AlertTriangle, Check, Github, Volume2, VolumeX,
  ServerOff, Globe, Users, Code, Building, GraduationCap, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSounds } from "@/hooks/useSounds";
import { useIsMobile } from "@/hooks/use-mobile";
import { RecentActivity } from "@/components/RecentActivity";

// Enhanced spring animation configs
const springConfig = { type: "spring", stiffness: 400, damping: 25 };
const hoverSpring = { type: "spring", stiffness: 300, damping: 20 };
const RECENT_VAULT_STORAGE_KEY = "vaultbridge_recent";
const LEGACY_RECENT_VAULT_STORAGE_KEY = "vaultbridge-recent-vault-link";
const ACCESS_CODE_PATTERN = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{3}$/;

const normalizeVaultPath = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

const isAllowedVaultPath = (pathname: string) => {
  const normalized = normalizeVaultPath(pathname);
  return (
    normalized === "/access" ||
    normalized.startsWith("/download/") ||
    normalized.startsWith("/v/")
  );
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
  const [showRecoveryDialog, setShowRecoveryDialog] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryStatus, setRecoveryStatus] = useState<string | null>(null);
  const [isRecoverySending, setIsRecoverySending] = useState(false);
  const vaultAccessPanelRef = useRef<HTMLDivElement | null>(null);
  const vaultInputRef = useRef<HTMLInputElement | null>(null);

  const isMobile = useIsMobile();

  // Fetch GitHub stars
  useEffect(() => {
    fetch('https://api.github.com/repos/Kavin001K/VaultBridge')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setGithubStars(data.stargazers_count);
        }
      })
      .catch(err => console.error("Failed to fetch Github stars", err));
  }, []);

  useEffect(() => {
    const stored =
      localStorage.getItem(RECENT_VAULT_STORAGE_KEY) ||
      localStorage.getItem(LEGACY_RECENT_VAULT_STORAGE_KEY);
    if (stored) {
      setRecentVault(stored);
    }
  }, []);

  const extractAccessCode = (value: string | null): string | null => {
    if (!value) return null;
    const direct = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if (direct.length === 6) return direct;

    try {
      const parsed = value.startsWith("http")
        ? new URL(value)
        : new URL(value, window.location.origin);
      const queryCode = parsed.searchParams.get("code");
      if (queryCode) {
        const cleaned = queryCode.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
        if (cleaned.length === 6) return cleaned;
      }
      const hash = parsed.hash.startsWith("#") ? parsed.hash.slice(1) : parsed.hash;
      const hashCode = new URLSearchParams(hash).get("code");
      if (hashCode) {
        const cleaned = hashCode.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
        if (cleaned.length === 6) return cleaned;
      }
    } catch {
      return null;
    }

    return null;
  };

  const normalizeVaultDestination = (rawInput: string): string | null => {
    const trimmed = rawInput.trim();
    if (!trimmed) return null;

    if (ACCESS_CODE_PATTERN.test(trimmed)) {
      const code = trimmed.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
      return `/access?code=${code}`;
    }

    const candidates = [trimmed];
    if (/^(access|download\/|v\/)/i.test(trimmed)) {
      candidates.push(`/${trimmed}`);
    }
    if (/^(vaultbridge\.org|www\.vaultbridge\.org)/i.test(trimmed)) {
      candidates.push(`https://${trimmed}`);
    }

    for (const candidate of candidates) {
      try {
        const parsed = candidate.startsWith("/")
          ? new URL(candidate, window.location.origin)
          : new URL(candidate);

        if (isAllowedVaultPath(parsed.pathname)) {
          if (parsed.origin === window.location.origin) {
            return `${parsed.pathname}${parsed.search}${parsed.hash}`;
          }
          return parsed.toString();
        }
      } catch {
        continue;
      }
    }

    return null;
  };

  const saveRecentVault = (value: string) => {
    localStorage.setItem(RECENT_VAULT_STORAGE_KEY, value);
    localStorage.setItem(LEGACY_RECENT_VAULT_STORAGE_KEY, value);
    setRecentVault(value);
  };

  const openVault = (rawInput: string) => {
    const destination = normalizeVaultDestination(rawInput);
    if (!destination) {
      setVaultInputError("Paste a valid vault link or a 6-character access code.");
      return;
    }

    setVaultInputError(null);
    const cleanInput = rawInput.trim();
    if (cleanInput) {
      saveRecentVault(cleanInput);
    }

    if (destination.startsWith("http://") || destination.startsWith("https://")) {
      const parsed = new URL(destination);
      if (parsed.origin === window.location.origin) {
        setLocation(`${parsed.pathname}${parsed.search}${parsed.hash}`);
      } else {
        window.location.href = destination;
      }
      return;
    }

    setLocation(destination);
  };

  const focusVaultAccess = () => {
    vaultAccessPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => vaultInputRef.current?.focus(), 220);
  };

  const handleSendRecovery = async () => {
    const email = recoveryEmail.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setRecoveryStatus("Enter a valid email address.");
      return;
    }

    const codeCandidate = extractAccessCode(vaultInput) || extractAccessCode(recentVault) || extractAccessCode(clipboardVault);
    if (!codeCandidate) {
      setRecoveryStatus("Paste your vault code or link first, then try recovery.");
      return;
    }

    setIsRecoverySending(true);
    setRecoveryStatus(null);

    try {
      const lookupId = codeCandidate.slice(0, 3);
      const lookupRes = await fetch(`/api/vault/code/${lookupId}`);
      const lookupData = await lookupRes.json();
      if (!lookupRes.ok || !lookupData?.id) {
        throw new Error("Vault lookup failed");
      }

      const emailRes = await fetch(`/api/vaults/${lookupData.id}/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          fullCode: codeCandidate,
        }),
      });
      const emailData = await emailRes.json();
      if (!emailRes.ok || !emailData?.success) {
        throw new Error(emailData?.message || "Unable to send recovery email");
      }

      setRecoveryStatus("Recovery link sent. Check your inbox and spam folder.");
      setRecoveryEmail("");
    } catch (error) {
      setRecoveryStatus(error instanceof Error ? error.message : "Recovery failed. Please try again.");
    } finally {
      setIsRecoverySending(false);
    }
  };

  const handlePasteFromClipboard = async () => {
    if (!navigator.clipboard?.readText) {
      setVaultInputError("Clipboard access is not available in this browser.");
      return;
    }

    try {
      const text = await navigator.clipboard.readText();
      setVaultInput(text.trim());
      setVaultInputError(null);
    } catch {
      setVaultInputError("Clipboard read is blocked. Paste the link manually.");
    }
  };

  useEffect(() => {
    if (!window.isSecureContext || !navigator.clipboard?.readText) return;

    const timer = window.setTimeout(async () => {
      try {
        const clipText = (await navigator.clipboard.readText()).trim();
        if (!clipText) return;
        const detectedDestination = normalizeVaultDestination(clipText);
        if (!detectedDestination) return;
        setClipboardVault(clipText);
        setShowClipboardPrompt(true);
      } catch {
        // Ignore permission denials and unsupported clipboard read cases.
      }
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0.05 : 0.1, delayChildren: isMobile ? 0.05 : 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: { opacity: 1, y: 0, transition: springConfig }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col bg-zinc-950 text-zinc-50">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-40 mix-blend-screen pointer-events-none" />
      <div className="scanline pointer-events-none opacity-20" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <img src="/icon-192x192.png" alt="VaultBridge" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-mono tracking-tight">VAULT<span className="text-primary">BRIDGE</span></h1>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-zinc-700 bg-zinc-900/50 px-5 text-zinc-200 hover:border-primary/60 hover:bg-zinc-900"
              onClick={focusVaultAccess}
            >
              Access Vault
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6" onClick={() => setLocation('/upload')}>
              Upload
            </Button>
            <a
              href="https://github.com/Kavin001K/VaultBridge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition-all group"
            >
              <Github className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              <span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white flex items-center gap-1">
                {githubStars !== null ? (
                  <>
                    {githubStars} <span className="text-amber-400">★</span>
                  </>
                ) : (
                  "Star us"
                )}
              </span>
            </a>
            <motion.button
              onClick={() => {
                const newState = toggleSound();
                setSoundEnabled(newState);
                if (newState) playSound('click');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all text-muted-foreground hover:text-primary"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </motion.button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 relative z-10 pt-24">

        {/* SECTION 1 — Hero (simplified, action-first) */}
        <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Compact headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 leading-tight">
              Share Securely.{" "}
              <span style={{ backgroundImage: "linear-gradient(to right, #10b981, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
                No Login.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8">
              Encrypt files in your browser and share with a 6-digit code. Gone after first read.
            </p>

            {/* ── 3 Big Action Cards ── */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {/* Upload */}
              <Link href="/upload">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => playSound('click')}
                  className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-primary/50 hover:bg-zinc-900 transition-all p-5 text-left cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-3">
                    <Upload className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-base font-bold text-zinc-100">Upload File</p>
                  <p className="text-xs text-zinc-500 mt-1">Encrypt & share with a secure link</p>
                  <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-zinc-700 group-hover:text-primary transition-colors" />
                </motion.div>
              </Link>

              {/* Access Vault */}
              <motion.div
                ref={vaultAccessPanelRef}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { playSound('click'); focusVaultAccess(); }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-cyan-500/40 hover:bg-zinc-900 transition-all p-5 text-left cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center mb-3">
                  <KeyRound className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-base font-bold text-zinc-100">Access Vault</p>
                <p className="text-xs text-zinc-500 mt-1">Enter code to retrieve files</p>
                <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-zinc-700 group-hover:text-cyan-400 transition-colors" />
              </motion.div>

              {/* Clipboard */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { playSound('click'); setLocation('/clipboard'); }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/40 hover:bg-zinc-900 transition-all p-5 text-left cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mb-3">
                  <Clipboard className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-base font-bold text-zinc-100">Clipboard Sync</p>
                <p className="text-xs text-zinc-500 mt-1">Share text across devices instantly</p>
                <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-zinc-700 group-hover:text-emerald-400 transition-colors" />
              </motion.div>
            </div>

            {/* ── Vault Access Input Panel ── */}
            <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-left backdrop-blur-sm">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Input
                    ref={vaultInputRef}
                    type="text"
                    value={vaultInput}
                    onChange={(e) => {
                      setVaultInput(e.target.value);
                      if (vaultInputError) setVaultInputError(null);
                    }}
                    onKeyDown={(e) => { if (e.key === "Enter") openVault(vaultInput); }}
                    placeholder="Paste vault link or 6-digit code…"
                    className="flex-1 h-11 border-zinc-700 bg-zinc-950/70 text-sm text-zinc-200 placeholder:text-zinc-600 focus-visible:ring-primary/40"
                  />
                  <Button
                    type="button"
                    className="h-11 rounded-xl bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90 flex-shrink-0"
                    onClick={() => openVault(vaultInput)}
                  >
                    Open
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePasteFromClipboard}
                    className="flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium text-zinc-400 bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/60 transition-colors"
                  >
                    <Clipboard className="h-3.5 w-3.5" />
                    Paste
                  </button>
                  {recentVault && (
                    <button
                      type="button"
                      onClick={() => openVault(recentVault)}
                      className="flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium text-zinc-400 bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/60 transition-colors"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Recent Vault
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => { playSound('click'); setLocation('/get-it-mailed'); }}
                    className="flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Get It Mailed
                  </button>
                  <button
                    type="button"
                    onClick={() => { setRecoveryStatus(null); setShowRecoveryDialog(true); }}
                    className="h-8 px-3 rounded-lg text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Lost your code?
                  </button>
                </div>

                {recentVault && (
                  <p className="truncate text-xs text-zinc-600">Recent: {recentVault}</p>
                )}
                {vaultInputError && (
                  <p className="text-xs text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {vaultInputError}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs font-medium text-zinc-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> No login required
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> End-to-end secure
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Free forever
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Instant sharing
              </div>
            </div>
          </motion.div>
        </section>

        {/* Recent Vault Activity (stored in browser) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-12">
          <RecentActivity />
        </section>

        {/* SECTION 2 — Product Demo Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative rounded-2xl md:rounded-[2rem] border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            {/* Fake Browser Chrome */}
            <div className="h-12 border-b border-zinc-800/60 bg-zinc-900/80 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-4 flex justify-center">
                <div className="h-6 w-full max-w-md bg-zinc-950/50 rounded flex items-center px-3 border border-zinc-800">
                  <Lock className="w-3 h-3 text-emerald-500 mr-2" />
                  <span className="text-xs text-zinc-400 font-mono">vaultbridge.org</span>
                </div>
              </div>
            </div>

            {/* Demo Sequence Container */}
            <div className="p-8 md:p-16 flex flex-col items-center justify-center min-h-[400px]">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 w-full max-w-4xl justify-between relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -z-10 -translate-y-1/2" />
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 -z-10 -translate-y-1/2 demo-line-anim origin-left" />

                {[
                  { icon: Upload, label: "Upload", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
                  { icon: Lock, label: "Encrypt", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
                  { icon: Send, label: "Share Link", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
                  { icon: CheckCircle2, label: "Done", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" }
                ].map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3, duration: 0.5 }}
                    className="flex flex-col items-center gap-4 bg-zinc-950 p-4 rounded-xl z-10"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border ${step.bg} ${step.border} shadow-lg`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <span className="font-semibold text-zinc-300">{step.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3 — Why VaultBridge (Trust Triggers) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Privacy by Design</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Built from the ground up to protect your data. We remove friction so you can focus on sharing securely.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Zero Tracking", desc: "No analytics, no cookies, no tracking pixels. What you share is your business." },
              { icon: Globe, title: "No Data Selling", desc: "We don't monetize your data. The product is the encryption, not the user." },
              { icon: X, title: "No Ads", desc: "A clean, distraction-free interface focused purely on secure file transfer." },
              { icon: Lock, title: "No Account Required", desc: "Skip the signup forms. Upload and share instantly without giving up personal info." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — How it Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900/20 border-y border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Radically Simple</h2>
            <p className="text-xl text-zinc-400">Secure sharing shouldn't require a manual.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Upload your file", desc: "Drag and drop any file up to 500MB directly into your browser." },
              { num: "02", title: "We encrypt it", desc: "Files are encrypted locally using AES-256 before upload. We never see the key." },
              { num: "03", title: "Share instantly", desc: "Copy the secure link and send it. Set it to self-destruct after downloading." }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="relative p-8 rounded-3xl bg-zinc-950 border border-zinc-800"
              >
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-950/0 absolute top-4 right-6 pointer-events-none">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-zinc-400 relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — Use Cases */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Everyone</h2>
            <p className="text-xl text-zinc-400">Versatile privacy tools for every workflow.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Code, title: "For developers", desc: "Share API keys, passwords, and config files securely." },
              { icon: Building, title: "For businesses", desc: "Transfer legal documents and financial data without risk." },
              { icon: GraduationCap, title: "For students", desc: "Share large project files and datasets seamlessly." },
              { icon: Shield, title: "Confidential sharing", desc: "For journalists and activists needing ultimate privacy." },
              { icon: Users, title: "Anonymous transfers", desc: "Send files without revealing your identity or IP." }
            ].map((useCase, i) => (
              <motion.div
                key={useCase.title}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-zinc-800 text-primary shrink-0"><useCase.icon className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{useCase.title}</h4>
                  <p className="text-sm text-zinc-400">{useCase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — Privacy by Architecture (Comparison Section) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Privacy by Architecture</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">VaultBridge is built around privacy. Traditional cloud platforms are built around retention and monetization.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* VaultBridge Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-10 rounded-[2rem] border border-primary/30 bg-zinc-900/60 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col"
              style={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-8 -mt-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Privacy Optimized
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">VaultBridge</h3>
                  <p className="text-sm text-primary">Privacy-First by Design</p>
                </div>
              </div>

              <ul className="space-y-5 mb-10 flex-1">
                {[
                  "No account required",
                  "Zero tracking policy",
                  "Auto-destruct links built-in",
                  "Temporary encrypted vaults",
                  "Ad-free experience",
                  "Instant sharing",
                  "No data monetization",
                  "Minimal data retention"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all rounded-xl h-14 text-lg mt-auto" onClick={() => { playSound('click'); setLocation('/upload'); }}>
                Start Secure Sharing
              </Button>
            </motion.div>

            {/* Traditional Cloud Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-[2rem] border border-zinc-800 bg-zinc-950/50 flex flex-col opacity-80"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 text-zinc-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-300">Traditional Cloud</h3>
                  <p className="text-sm text-zinc-500">Built for Data Ecosystems</p>
                </div>
              </div>

              <ul className="space-y-5 flex-1">
                {[
                  "Account mandatory",
                  "Usage analytics enabled",
                  "Limited self-destruct options",
                  "Designed for permanent storage",
                  "Monetization-driven",
                  "Login-gated sharing",
                  "Data retention by default"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 opacity-60">
                    <span className="text-zinc-500 font-mono text-lg mt-[-2px] shrink-0">–</span>
                    <span className="text-zinc-400 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-semibold text-zinc-300 italic mb-12">
              "VaultBridge is designed to disappear when your file does. <br className="hidden md:block" /> Traditional cloud is designed to keep your data forever."
            </p>

            {/* Philosophy Comparison Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm py-8 border-y border-zinc-800/50 bg-zinc-900/10 rounded-3xl">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold">Built for: Privacy</span>
                <span className="text-zinc-600">vs</span>
                <span className="text-zinc-500 font-medium">Built for: Platform Growth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold">Model: Not user data</span>
                <span className="text-zinc-600">vs</span>
                <span className="text-zinc-500 font-medium">Model: Engagement metrics</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold">Lifecycle: Temporary</span>
                <span className="text-zinc-600">vs</span>
                <span className="text-zinc-500 font-medium">Lifecycle: Permanent</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 7 — Social Proof */}
        <section className="py-20 px-4 border-y border-white/5 bg-primary/5 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
            <Globe className="w-12 h-12 text-primary/50 mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed italic">
              "Used by developers, students, and privacy-focused users worldwide to share sensitive data without leaving a trace."
            </p>
          </motion.div>
        </section>

        {/* SECTION 8 — Call to Action */}
        <section className="py-32 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] z-0" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to regain your privacy?</h2>
            <p className="text-xl text-zinc-400 mb-10">Start sharing files securely right now. No signup. No tracking. Just encryption.</p>
            <Link href="/upload">
              <Button size="lg" className="text-lg h-16 px-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105 transition-all w-full sm:w-auto">
                Start Secure Sharing Now
              </Button>
            </Link>
          </motion.div>
        </section>

        <AnimatePresence>
          {showClipboardPrompt && clipboardVault && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-xl rounded-xl border border-emerald-500/30 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-emerald-300">Vault link detected in clipboard</p>
                  <p className="mt-1 truncate text-xs text-zinc-400">{clipboardVault}</p>
                </div>
                <button
                  type="button"
                  aria-label="Dismiss clipboard prompt"
                  className="rounded-md p-1 text-zinc-500 transition-colors hover:text-zinc-200"
                  onClick={() => setShowClipboardPrompt(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  size="sm"
                  className="rounded-lg bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    openVault(clipboardVault);
                    setShowClipboardPrompt(false);
                  }}
                >
                  Open Vault
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-lg border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800"
                  onClick={() => {
                    setVaultInput(clipboardVault);
                    setShowClipboardPrompt(false);
                  }}
                >
                  Use in Access Box
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Dialog open={showRecoveryDialog} onOpenChange={setShowRecoveryDialog}>
          <DialogContent className="border-zinc-800 bg-zinc-950 text-zinc-100 sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-left">Recover Vault via Email</DialogTitle>
              <DialogDescription className="text-left text-zinc-400">
                Enter your email. VaultBridge will send access details using your latest code/link context.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <Input
                type="email"
                value={recoveryEmail}
                onChange={(event) => {
                  setRecoveryEmail(event.target.value);
                  if (recoveryStatus) setRecoveryStatus(null);
                }}
                placeholder="you@example.com"
                className="h-11 border-zinc-700 bg-zinc-900/70 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-primary/40"
              />
              <Button
                type="button"
                className="h-11 w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                disabled={isRecoverySending}
                onClick={handleSendRecovery}
              >
                {isRecoverySending ? "Sending..." : "Send Recovery Link"}
              </Button>
              {recoveryStatus && (
                <p className={`text-xs ${recoveryStatus.includes("sent") ? "text-emerald-400" : "text-rose-400"}`}>
                  {recoveryStatus}
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>

      </main>

      {/* SECTION 9 — Footer (SEO Critical) */}
      <footer className="relative z-10 border-t border-zinc-800 bg-zinc-950 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                <img src="/icon-192x192.png" alt="VaultBridge Logo" className="w-full h-full object-cover p-1" />
              </div>
              <span className="font-bold text-xl tracking-tight">VAULTBRIDGE</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              The premier platform for Secure File Sharing, Encrypted Transfer, and Private Uploads.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Kavin001K/VaultBridge" className="text-zinc-500 hover:text-white"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link href="/upload"><span className="hover:text-primary cursor-pointer transition-colors">Secure Upload</span></Link></li>
              <li><Link href="/access"><span className="hover:text-primary cursor-pointer transition-colors">Access Vault</span></Link></li>
              <li><Link href="/get-it-mailed"><span className="hover:text-primary cursor-pointer transition-colors">Secure Email Relay</span></Link></li>
              <li><Link href="/clipboard"><span className="hover:text-primary cursor-pointer transition-colors">Encrypted Clipboard</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link href="/blog"><span className="hover:text-primary cursor-pointer transition-colors">Blog Hub</span></Link></li>
              <li><Link href="/security"><span className="hover:text-primary cursor-pointer transition-colors">Security</span></Link></li>
              <li><Link href="/privacy-manifesto"><span className="hover:text-primary cursor-pointer transition-colors">Privacy Manifesto</span></Link></li>
              <li><Link href="/roadmap"><span className="hover:text-primary cursor-pointer transition-colors">Roadmap</span></Link></li>
              <li><Link href="/how-it-works"><span className="hover:text-primary cursor-pointer transition-colors">How it Works</span></Link></li>
              <li><Link href="/privacy"><span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span></Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-primary cursor-pointer transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Blogs</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link href="/blog/secure-file-sharing-best-practices"><span className="hover:text-primary cursor-pointer transition-colors">Secure File Sharing Best Practices</span></Link></li>
              <li><Link href="/blog/encrypted-file-transfer-vs-cloud-storage"><span className="hover:text-primary cursor-pointer transition-colors">Encrypted Transfer vs Cloud Storage</span></Link></li>
              <li><Link href="/blog/anonymous-file-sharing-without-login"><span className="hover:text-primary cursor-pointer transition-colors">Anonymous Sharing Without Login</span></Link></li>
              <li><Link href="/blog/temporary-file-links-and-auto-destruct"><span className="hover:text-primary cursor-pointer transition-colors">Temporary Links & Auto-Destruct</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600">
          <p>© 2026 VaultBridge by Ace-Groups. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span>Anonymous File Sharing</span>
            <span>•</span>
            <span>End-to-End Encrypted Transfer</span>
          </div>
        </div>
      </footer>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes demoLineGrow {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(1); opacity: 0; }
        }
        .demo-line-anim {
          animation: demoLineGrow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
