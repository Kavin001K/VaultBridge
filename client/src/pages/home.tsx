import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, Sparkles, Mail, Send, CheckCircle2, AlertCircle,
  Clipboard, AlertTriangle, Check, Github, Volume2, VolumeX
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSounds } from "@/hooks/useSounds";

import { useIsMobile } from "@/hooks/use-mobile";

// Enhanced spring animation configs
const springConfig = { type: "spring", stiffness: 400, damping: 25 };
const hoverSpring = { type: "spring", stiffness: 300, damping: 20 };

export default function Home() {
  const [activeTab, setActiveTab] = useState<"vault" | "email" | "clipboard">("vault");
  const { play: playSound, isEnabled: isSoundEnabled, toggle: toggleSound } = useSounds();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [, setLocation] = useLocation();
  const [showSpamAlert, setShowSpamAlert] = useState(false);
  const [githubStars, setGithubStars] = useState<number | null>(null);

  const isMobile = useIsMobile();

  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: isMobile ? 0.05 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springConfig
    }
  };

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


  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-50" />
      <div className="scanline" />

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 overflow-hidden">
              <img src="/vault-logo.jpg" alt="VaultBridge" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-mono tracking-tight">
                VAULT<span className="text-primary">BRIDGE</span>
              </h1>
              <p className="hidden md:block text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Secure Transfer Protocol
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <a
              href="https://github.com/Kavin001K/VaultBridge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700 hover:border-primary/50 hover:bg-zinc-800 transition-all group"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              {githubStars !== null && (
                <span className="text-xs font-mono font-medium text-zinc-400 group-hover:text-white border-l border-zinc-700 pl-2 ml-1 flex items-center gap-1">
                  {githubStars} <span className="text-amber-400">★</span>
                </span>
              )}
            </a>
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono text-primary uppercase">Online</span>
            </div>
          </motion.div>
        </div>
      </header >

      {/* Main Content */}
      < main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full" >
        {/* Toggle Switch */}
        < motion.div
          initial={{ opacity: 0, y: -20 }
          }
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mb-8 md:mb-12 w-full"
        >
          <div className="bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 flex items-center w-full max-w-[300px] md:max-w-fit justify-between">
            <motion.button
              onClick={() => {
                playSound('click');
                setActiveTab("vault");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all press-effect ${activeTab === "vault"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-3 h-3 md:w-4 md:h-4" />
                Secure Vault
              </div>
            </motion.button>
            <motion.button
              onClick={() => {
                playSound('click');
                setActiveTab("email");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all press-effect ${activeTab === "email"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                Get it Mailed
              </div>
            </motion.button>
            <motion.button
              onClick={() => {
                playSound('click');
                setActiveTab("clipboard");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all press-effect ${activeTab === "clipboard"
                ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/25"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clipboard className="w-3 h-3 md:w-4 md:h-4" />
                Clipboard
              </div>
            </motion.button>
          </div>

          {/* Sound Toggle Button */}
          <motion.button
            onClick={() => {
              const newState = toggleSound();
              setSoundEnabled(newState);
              if (newState) playSound('click');
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-primary/50 transition-all"
            title={soundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-primary" />
            ) : (
              <VolumeX className="w-4 h-4 text-muted-foreground" />
            )}
          </motion.button>
        </motion.div >

        <AnimatePresence mode="wait">
          {activeTab === "vault" ? (
            <motion.div
              key="vault"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Hero with stagger animation */}
              <motion.div
                className="text-center mb-10 md:mb-16 px-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
                  variants={itemVariants}
                >
                  Share files <motion.span
                    className="text-gradient inline-block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                  >secretly</motion.span>.
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
                  variants={itemVariants}
                >
                  End-to-end encrypted. Ephemeral. Anonymous.
                </motion.p>
                <motion.p
                  className="text-sm md:text-lg text-muted-foreground/70 max-w-xl mx-auto"
                  variants={itemVariants}
                >
                  Your files are encrypted in your browser before they ever leave your device.
                </motion.p>
              </motion.div>

              {/* Action Cards with enhanced animations */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl mx-auto px-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Upload Card */}
                <motion.div variants={itemVariants}>
                  <Link href="/upload">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={hoverSpring}
                      onClick={() => playSound('click')}
                      className="glass-card p-6 md:p-8 cursor-pointer group h-full flex flex-col justify-between card-hover-glow"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                          <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 shrink-0"
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Upload className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold">Upload Files</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Create a secure vault</p>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                          Drag & drop files, set expiration and download limits,
                          then share the encrypted link.
                        </p>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-primary font-mono font-bold uppercase tracking-wider transition-all text-sm md:text-base mt-2"
                      >
                        <span>Get Started</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Access Card */}
                <motion.div variants={itemVariants}>
                  <Link href="/access">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={hoverSpring}
                      onClick={() => playSound('click')}
                      className="glass-card p-6 md:p-8 cursor-pointer group h-full border-zinc-700 flex flex-col justify-between card-hover-glow"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                          <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 transition-all shrink-0"
                            whileHover={{ rotate: [0, 15, -15, 0], scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          >
                            <KeyRound className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-primary transition-colors" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold">Access Vault</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Enter your 6-digit code</p>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                          Have an access code? Enter it to unlock and download
                          encrypted files securely.
                        </p>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-zinc-400 font-mono font-bold uppercase tracking-wider group-hover:text-primary transition-all text-sm md:text-base mt-2"
                      >
                        <span>Unlock Vault</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : activeTab === "email" ? (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-900/95 to-violet-950/30 shadow-2xl shadow-violet-500/10 p-8 text-center cursor-pointer group hover:border-violet-500/40 transition-all duration-500"
                onClick={() => setLocation("/get-it-mailed")}
              >
                <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-700 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Send className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                      Get it Mailed
                    </h2>
                    <p className="text-zinc-400 max-w-md mx-auto">
                      Send files securely to anyone via email. Zero-knowledge relay — no logs, no traces.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-violet-400" />
                      <span>Encrypted Relay</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Ephemeral</span>
                    </div>
                  </div>

                  <Button className="mt-2 bg-violet-600 hover:bg-violet-500 text-white gap-2 px-8 h-12 rounded-full font-bold group-hover:scale-105 transition-transform">
                    Send Files Securely <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70">
                    By continuing, you agree to our <Link href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</Link> & <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : activeTab === "clipboard" ? (
            <motion.div
              key="clipboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-900/95 to-cyan-950/30 shadow-2xl shadow-cyan-500/10 p-8 text-center cursor-pointer group hover:border-cyan-500/40 transition-all duration-500"
                onClick={() => setLocation("/clipboard")}
              >
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Clipboard className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      Universal Clipboard
                    </h2>
                    <p className="text-zinc-400 max-w-md mx-auto">
                      Share passwords, code snippets, and sensitive text across devices with end-to-end encryption.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-emerald-400" />
                      <span>AES-256</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Auto-Destruct</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-cyan-400" />
                      <span>Zero-Knowledge</span>
                    </div>
                  </div>

                  <Button className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white gap-2 px-8 h-12 rounded-full font-bold group-hover:scale-105 transition-transform">
                    Open Secure Clipboard <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70">
                    By continuing, you agree to our <Link href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</Link> & <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="live"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto px-2"
            >
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features Footer (Only on Vault Tab) */}
        {
          activeTab === "vault" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 w-full max-w-4xl px-4"
            >
              {[
                {
                  icon: Shield,
                  title: "Client-Side Encryption",
                  desc: "AES-256-GCM encryption entirely in your browser."
                },
                {
                  icon: Zap,
                  title: "Auto-Destruct",
                  desc: "Vaults self-destruct after expiration or download limit."
                },
                {
                  icon: Eye,
                  title: "Zero Knowledge",
                  desc: "We never see your files. Keys stay with you."
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center p-4 md:p-6 bg-zinc-900/20 rounded-xl md:bg-transparent border border-white/5 md:border-transparent"
                >
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-semibold mb-2 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )
        }
      </main >

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent pointer-events-none" />

        <div className="flex items-center justify-center gap-8 text-sm font-medium text-zinc-500 mb-8 relative z-10">
          {[
            { text: "Terms of Service", href: "/terms" },
            { text: "Privacy Policy", href: "/privacy" },
            { text: "How It Works", href: "/how-it-works" }
          ].map((link) => (
            <Link key={link.text} href={link.href}>
              <motion.span
                className="hover:text-emerald-400 transition-colors cursor-pointer inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
              </motion.span>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <p className="text-xs md:text-sm text-zinc-600 mb-2">
            © 2026 Ace-Groups. <span className="text-zinc-700">Zero Knowledge Architecture.</span>
          </p>

          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 mt-4 cursor-default group hover:border-emerald-500/20 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">v1.3.0 (Quantum)</span>
          </motion.div>
        </motion.div>
      </footer>

      {/* Redesigned Check Spam Folder Dialog */}
      < Dialog open={showSpamAlert} onOpenChange={setShowSpamAlert} >
        <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden">

          {/* Header Pattern */}
          <div className="relative h-24 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />

            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <Mail className="w-8 h-8 text-emerald-500" />
              <div className="absolute -bottom-2 -right-2 bg-zinc-950 rounded-full p-1 border border-zinc-800">
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-2 text-center">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl font-bold text-white text-center">Notification Sent</DialogTitle>
              <DialogDescription className="text-center text-zinc-400">
                The secure access link has been successfully dispatched.
              </DialogDescription>
            </DialogHeader>

            {/* Spam Alert - Redesigned */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-amber-500">Delivery Confirmation</p>
                  <p className="text-xs text-amber-200/70 leading-relaxed">
                    If the email is not visible in the inbox within 2 minutes, it is highly likely in the <strong className="text-amber-200">Spam</strong> or <strong className="text-amber-200">Junk</strong> folder.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide rounded-xl shadow-lg shadow-emerald-900/20 transition-all"
              onClick={() => setShowSpamAlert(false)}
            >
              UNDERSTOOD
            </Button>
          </div>
        </DialogContent>
      </Dialog >
    </div >
  );
}
