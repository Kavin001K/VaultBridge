import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Lock, Upload, KeyRound, Shield, Zap, Eye,
  ArrowRight, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-50" />
      <div className="scanline" />

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 animate-pulse-glow">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-mono tracking-tight">
                VAULT<span className="text-primary">BRIDGE</span>
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Zero-Knowledge Transfer
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase">Encrypted</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/30 animate-pulse-glow"
          >
            <Sparkles className="w-12 h-12 text-primary" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Share files <span className="text-gradient">secretly</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            End-to-end encrypted. Ephemeral. Anonymous.
          </p>
          <p className="text-lg text-muted-foreground/70 max-w-xl mx-auto">
            Your files are encrypted in your browser before they ever leave your device.
            We never see your files or encryption keys.
          </p>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        >
          {/* Upload Card */}
          <Link href="/upload">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-8 cursor-pointer group h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:animate-pulse-glow transition-all">
                  <Upload className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Upload Files</h3>
                  <p className="text-sm text-muted-foreground">Create a secure vault</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Drag & drop files, set expiration and download limits,
                then share the encrypted link.
              </p>

              <div className="flex items-center gap-2 text-primary font-mono font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </Link>

          {/* Access Card */}
          <Link href="/access">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-8 cursor-pointer group h-full border-zinc-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 transition-all">
                  <KeyRound className="w-7 h-7 text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Access Vault</h3>
                  <p className="text-sm text-muted-foreground">Enter your 6-digit code</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Have an access code? Enter it to unlock and download
                encrypted files securely.
              </p>

              <div className="flex items-center gap-2 text-zinc-400 font-mono font-bold uppercase tracking-wider group-hover:text-primary group-hover:gap-4 transition-all">
                <span>Unlock Vault</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl"
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
              className="text-center p-6"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          🔐 Zero-Knowledge • End-to-End Encrypted • Privacy First
        </p>
      </footer>
    </div>
  );
}
