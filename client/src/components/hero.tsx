import React from 'react';
import { motion } from 'framer-motion';
import { Upload, KeyRound, Clipboard, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { VaultDial } from './vault-dial';

interface HeroProps {
  vaultsCreatedToday: number;
  activityTicker: string[];
  tickerIndex: number;
  vaultInput: string;
  setVaultInput: (v: string) => void;
  vaultInputError: string | null;
  openVault: (v: string) => void;
  focusVaultAccess: () => void;
  handlePasteFromClipboard: () => void;
  recentVault: string | null;
  playSound: (s: string) => void;
  vaultAccessPanelRef: React.RefObject<HTMLDivElement>;
  vaultInputRef: React.RefObject<HTMLInputElement>;
}

export const Hero: React.FC<HeroProps> = ({
  vaultsCreatedToday,
  activityTicker,
  tickerIndex,
  vaultInput,
  setVaultInput,
  vaultInputError,
  openVault,
  focusVaultAccess,
  handlePasteFromClipboard,
  recentVault,
  playSound,
  vaultAccessPanelRef,
  vaultInputRef
}) => {
  return (
    <section className="relative pt-16 sm:pt-20 pb-10 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <VaultDial />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center w-full"
      >
        <div className="ghost-number top-10 left-1/2 -translate-x-1/2 hidden md:block">01</div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-4 leading-[1.1] text-white">
          Vault<span className="text-primary">Bridge</span>
        </h1>
        
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mb-8 font-sans">
          The anonymous bridge for secure file transfers. 
          <span className="text-zinc-200 block mt-2">Zero trust. Zero tracking. Just encryption.</span>
        </p>

        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
          <div className="flex-1 w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Network Load</span>
            <span className="text-3xl font-bold text-white tracking-tight mt-1 block font-display">
              {vaultsCreatedToday.toLocaleString()} <span className="text-sm font-mono text-zinc-500 font-normal">Active Vaults</span>
            </span>
          </div>
          <div className="flex-[1.5] w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Cipher Stream</span>
            <p className="mt-2 text-sm text-zinc-300 font-medium font-mono h-5 overflow-hidden">
              {activityTicker[tickerIndex] || 'Synchronizing with global nodes...'}
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-3 sm:gap-6 mb-10">
          {[
            { icon: Upload, label: "Seal", sub: "New Vault", color: "primary", href: "/upload" },
            { icon: KeyRound, label: "Unlock", sub: "Access Code", onClick: focusVaultAccess },
            { icon: Clipboard, label: "Sync", sub: "Clipboard", href: "/clipboard" }
          ].map((action, i) => (
            <motion.div
              key={action.label}
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                playSound('click');
                if (action.onClick) action.onClick();
                else if (action.href) window.location.hash = action.href; // simplified for this component
              }}
              className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-6 sm:py-10 cursor-pointer transition-all duration-300 shadow-2xl"
            >
              <div className={`mb-4 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-${action.color || 'zinc-800'}/10 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500`}>
                <action.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${action.color === 'primary' ? 'primary' : 'zinc-400'} group-hover:text-primary`} />
              </div>
              <p className="text-sm sm:text-lg font-bold text-white group-hover:text-primary transition-colors">{action.label}</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">{action.sub}</p>
            </motion.div>
          ))}
        </div>

        <div ref={vaultAccessPanelRef} className="w-full max-w-2xl rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Input
                  ref={vaultInputRef}
                  type="text"
                  value={vaultInput}
                  onChange={(e) => setVaultInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") openVault(vaultInput); }}
                  placeholder="Enter 7-character access code..."
                  className="h-14 border-white/5 bg-white/5 text-lg font-mono tracking-widest uppercase placeholder:tracking-normal placeholder:text-zinc-600 focus-visible:ring-primary/40 rounded-2xl"
                />
              </div>
              <Button
                className="h-14 rounded-2xl bg-primary px-8 font-bold text-lg text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                onClick={() => openVault(vaultInput)}
              >
                OPEN
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePasteFromClipboard}
                className="flex items-center gap-2 h-10 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
              >
                <Clipboard className="h-4 w-4" />
                Paste from Clipboard
              </button>
              {recentVault && (
                <p className="text-[10px] font-mono text-zinc-600 truncate flex-1 text-left">
                  Last Access: {recentVault}
                </p>
              )}
            </div>

            {vaultInputError && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-rose-500 font-bold flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                {vaultInputError}
              </motion.p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> End-to-End Encrypted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> No Login Required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Self-Destructing
          </div>
        </div>
      </motion.div>
    </section>
  );
};
