import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Shield, Zap, Binary, Trash2, Lock, AlertOctagon, Terminal, Copy } from "lucide-react";
import { useSounds } from "@/hooks/useSounds";
import { useToast } from "@/hooks/use-toast";

// ─── Math helpers for particle physics ───
const rand = (min: number, max: number) => min + Math.random() * (max - min);
const TWO_PI = Math.PI * 2;

interface Particle {
  id: number;
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
  color: string;
  char?: string;
  rotation: number;
  rotationSpeed: number;
}

interface Shard {
  id: number;
  x: number; y: number;
  w: number; h: number;
  vx: number; vy: number;
  rotation: number; rotationSpeed: number;
  opacity: number;
  color: string;
}

// ─── Physics engine — runs in requestAnimationFrame ───
function useDestructionPhysics(isActive: boolean, isMobile: boolean) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const shardsRef = useRef<Shard[]>([]);
  const frameRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  const particleCount = isMobile ? 80 : 250; // Increased density
  const shardCount = isMobile ? 12 : 35; // Increased shards

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); 
    
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    
    resize();
    window.addEventListener("resize", resize);

    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const cx = W / 2;
    const cy = H / 2;

    const colors = [
      "#ef4444", "#f87171", "#fbbf24", "#fb923c", "#f97316",
      "#10b981", "#22d3ee", "#a78bfa", "#ffffff", "#fca5a5",
    ];
    const binaryChars = ["0", "1", "$", "@", "!", "#", "%", "&"]; // More digital noise chars

    // Init particles — explosion from center
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = rand(0, TWO_PI);
      const speed = rand(50, 450); // Faster
      const life = rand(0.4, 3.8);
      particles.push({
        id: i,
        x: cx + rand(-50, 50),
        y: cy + rand(-50, 50),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - rand(0, 150),
        life,
        maxLife: life,
        size: rand(2, isMobile ? 10 : 18), // Larger
        color: colors[Math.floor(Math.random() * colors.length)],
        char: Math.random() > 0.5 ? binaryChars[Math.floor(Math.random() * binaryChars.length)] : undefined,
        rotation: rand(0, TWO_PI),
        rotationSpeed: rand(-12, 12),
      });
    }
    particlesRef.current = particles;

    // Init shards — rectangular fragments
    const shards: Shard[] = [];
    for (let i = 0; i < shardCount; i++) {
      const angle = rand(0, TWO_PI);
      shards.push({
        id: i,
        x: cx + Math.cos(angle) * rand(0, 80),
        y: cy + Math.sin(angle) * rand(0, 80),
        w: rand(20, isMobile ? 60 : 120),
        h: rand(4, isMobile ? 12 : 25),
        vx: Math.cos(angle) * rand(40, 250),
        vy: Math.sin(angle) * rand(40, 250) - rand(0, 100),
        rotation: rand(0, TWO_PI),
        rotationSpeed: rand(-6, 6),
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    shardsRef.current = shards;

    // ─── Animation loop with real-time physics ───
    const gravity = 80; // Heavier gravity
    const friction = 0.98; // Less friction
    let lastTime = performance.now();
    frameRef.current = 0;

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); 
      lastTime = now;
      frameRef.current++;

      ctx.clearRect(0, 0, W, H);

      // ─── Background glow pulse ───
      const pulseAlpha = 0.04 + Math.sin(frameRef.current * 0.06) * 0.03;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.7);
      gradient.addColorStop(0, `rgba(239, 68, 68, ${pulseAlpha * 2.5})`);
      gradient.addColorStop(0.5, `rgba(239, 68, 68, ${pulseAlpha})`);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);

      // ─── Update & draw shards ───
      for (const s of shardsRef.current) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.vy += gravity * dt;
        s.vx *= friction;
        s.vy *= friction;
        s.rotation += s.rotationSpeed * dt;
        s.opacity -= 0.22 * dt;

        if (s.opacity <= 0) continue;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.fillRect(-s.w / 2, -s.h / 2, s.w, s.h);
        ctx.restore();
      }

      // ─── Update & draw particles ───
      for (const p of particlesRef.current) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += gravity * dt * 0.4;
        p.vx *= friction;
        p.vy *= friction;
        p.life -= dt;
        p.rotation += p.rotationSpeed * dt;

        if (p.life <= 0) continue;

        const alpha = p.life / p.maxLife;
        const size = p.size * (0.4 + alpha * 0.6);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;

        if (p.char) {
          ctx.fillStyle = p.color;
          ctx.font = `black ${size * 1.3}px "JetBrains Mono", monospace`;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 5;
          ctx.fillText(p.char, -size / 2, size / 2);
        } else {
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = size;
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, TWO_PI);
          ctx.fill();
        }
        ctx.restore();
      }

      // ─── Central destruction rings ───
      for (let i = 0; i < 3; i++) {
        const ringAlpha = (0.2 + Math.sin(frameRef.current * 0.08 + i) * 0.1) * (1 - frameRef.current / 300);
        const ringRadius = (40 + frameRef.current * (2.5 + i * 1.5)) % (Math.max(W, H) * 1.2);
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, TWO_PI);
        ctx.strokeStyle = `rgba(239, 68, 68, ${ringAlpha})`;
        ctx.lineWidth = 1 + i;
        ctx.stroke();
      }

      const allDead = particlesRef.current.every((p) => p.life <= 0) && shardsRef.current.every((s) => s.opacity <= 0);

      if (!allDead && frameRef.current < 400) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
      particlesRef.current = [];
      shardsRef.current = [];
    };
  }, [isActive, isMobile]);

  return canvasRef;
}

// ─── Main Component ───
interface VaultDestructionProps {
  isActive: boolean;
  vaultCode?: string;
  fileCount?: number;
  totalSize?: number;
  onComplete?: () => void;
}

export function VaultDestruction({ isActive, vaultCode, fileCount = 0, totalSize = 0, onComplete }: VaultDestructionProps) {
  const [phase, setPhase] = useState<"pending" | "warning" | "destroying" | "complete">("pending");
  const [countdown, setCountdown] = useState(3);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const completeCalled = useRef(false);
  const { play: playSound } = useSounds();
  const { toast } = useToast();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const canvasRef = useDestructionPhysics(phase === "destroying", isMobile);

  // Destruction sequence
  useEffect(() => {
    if (!isActive) return;

    setPhase("warning");
    setCountdown(3);
    playSound('error', 0.5);

    const t1 = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(t1);
          setPhase("destroying");
          playSound('destruction', 0.8);
          return 0;
        }
        playSound('tick', 0.4);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(t1);
  }, [isActive, playSound]);

  // Destruction progress & completion
  useEffect(() => {
    if (phase !== "destroying") return;

    const startTime = Date.now();
    const duration = 5000; // Slightly longer 5s destruction for more drama

    const t2 = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(t2);
        const completionTimer = setTimeout(() => {
          setPhase("complete");
          playSound('off', 0.6);
          if (!completeCalled.current) {
            completeCalled.current = true;
            onComplete?.();
            
            const redirectTimer = setTimeout(() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/";
                }
            }, 4500);
            return () => clearTimeout(redirectTimer);
          }
        }, 1000);
        return () => clearTimeout(completionTimer);
      }
    }, 16); 

    return () => clearInterval(t2);
  }, [phase, onComplete, playSound]);

  const codeFormatted = vaultCode
    ? `${vaultCode.slice(0, 3)}-${vaultCode.slice(3)}`
    : null;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[300] bg-black/95 flex flex-col items-center justify-center overflow-hidden ${phase === "destroying" ? "animate-shake" : ""}`}
        >
          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          />

          {/* Phase: Warning */}
          {phase === "warning" && (
            <motion.div
              key="warning"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="relative z-10 text-center px-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-28 h-28 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
              >
                <AlertOctagon className="w-14 h-14 text-red-500" />
              </motion.div>

              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-zinc-500 text-sm font-black uppercase tracking-[0.4em] mb-4"
              >
                SECURITY PROTOCOL FINALIZED
              </motion.div>

              <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 uppercase italic tracking-tighter">
                Dissolving in{" "}
                <motion.span
                  key={countdown}
                  initial={{ scale: 2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-zinc-500 font-mono tabular-nums inline-block"
                >
                  {countdown}
                </motion.span>
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                {codeFormatted && (
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(codeFormatted.replace(/-/g, ''));
                      toast({ title: "Code copied", description: "Vault code saved to clipboard" });
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 font-mono hover:bg-red-500/10 transition-colors active:scale-95 group"
                  >
                    NODE_{codeFormatted}
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                )}
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  {fileCount} FRAGMENTS
                </span>
              </div>
            </motion.div>
          )}

          {/* Phase: Destroying */}
          {phase === "destroying" && (
            <motion.div
              key="destroying"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative z-10 text-center px-6 w-full max-w-lg"
            >
              <div className="relative mb-10">
                <motion.div
                    animate={{ 
                        scale: [1, 1.3, 1], 
                        rotate: [0, 15, -15, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                    className="w-24 h-24 rounded-3xl bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center mx-auto shadow-[0_0_80px_rgba(239,68,68,0.4)]"
                >
                    <Zap className="w-12 h-12 text-red-400 fill-red-400/20" />
                </motion.div>
                <div className="absolute inset-0 animate-pulse bg-red-500/5 blur-3xl rounded-full" />
              </div>

              <h2 
                className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter glitch-text"
                data-text="SYSTEM VAPORIZING"
              >
                SYSTEM VAPORIZING
              </h2>

              <div className="h-3 rounded-full bg-white/[0.04] border border-white/5 overflow-hidden mb-8 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center mb-10">
                {[
                    { label: "WIPED", val: `${Math.round(progress)}%`, color: "text-red-500" },
                    { label: "ORPHANED", val: Math.max(0, Math.round(fileCount * (1 - progress / 100))), color: "text-amber-500" },
                    { label: "ENTROPY", val: Math.round((totalSize / 1024) * (1 - progress / 100)), color: "text-orange-500" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.1 }}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
                    >
                        <div className={`text-xl font-mono font-black ${stat.color} tabular-nums mb-1`}>
                            {stat.val}
                        </div>
                        <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
              </div>

              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed opacity-60">
                Overwriting all physical sectors with randomized entropy. Cryptographic keys have been zeroed. Storage nodes disconnected.
              </p>
            </motion.div>
          )}

          {/* Phase: Complete */}
          {phase === "complete" && (
            <motion.div
              key="complete"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 text-center px-6"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
                className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Trash2 className="w-12 h-12 text-zinc-600" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
                Vault <span className="text-zinc-600">Vanished</span>
              </h2>
              
              <div className="space-y-2 mb-10">
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                  Zero-Trace Elimination Complete
                </p>
                <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em]">
                  No recovery possible • Network sanitized
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="h-1 bg-zinc-800 rounded-full overflow-hidden"
                  >
                      <div className="h-full bg-zinc-600" />
                  </motion.div>
                  <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest animate-pulse">
                    Returning to home screen...
                  </p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => (window.location.href = "/")}
                className="mt-8 px-10 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:text-white transition-all"
              >
                Bypass Delay
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
