import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Shield, Zap, Binary, Trash2, Lock } from "lucide-react";

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

  const particleCount = isMobile ? 60 : 180;
  const shardCount = isMobile ? 8 : 22;

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap for mobile perf
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const cx = W / 2;
    const cy = H / 2;

    const colors = [
      "#ef4444", "#f87171", "#fbbf24", "#fb923c", "#f97316",
      "#10b981", "#22d3ee", "#a78bfa", "#ffffff", "#fca5a5",
    ];
    const binaryChars = ["0", "1"];

    // Init particles — explosion from center
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = rand(0, TWO_PI);
      const speed = rand(30, 350);
      const life = rand(0.6, 3.5);
      particles.push({
        id: i,
        x: cx + rand(-40, 40),
        y: cy + rand(-40, 40),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - rand(0, 120),
        life,
        maxLife: life,
        size: rand(2, isMobile ? 8 : 14),
        color: colors[Math.floor(Math.random() * colors.length)],
        char: Math.random() > 0.6 ? binaryChars[Math.floor(Math.random() * 2)] : undefined,
        rotation: rand(0, TWO_PI),
        rotationSpeed: rand(-8, 8),
      });
    }
    particlesRef.current = particles;

    // Init shards — rectangular fragments
    const shards: Shard[] = [];
    for (let i = 0; i < shardCount; i++) {
      const angle = rand(0, TWO_PI);
      const dist = rand(20, 200);
      shards.push({
        id: i,
        x: cx + Math.cos(angle) * rand(0, 60),
        y: cy + Math.sin(angle) * rand(0, 60),
        w: rand(15, isMobile ? 50 : 90),
        h: rand(3, isMobile ? 10 : 20),
        vx: Math.cos(angle) * rand(20, 180),
        vy: Math.sin(angle) * rand(20, 180) - rand(0, 80),
        rotation: rand(0, TWO_PI),
        rotationSpeed: rand(-4, 4),
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    shardsRef.current = shards;

    // ─── Animation loop with real-time physics ───
    const gravity = 60; // px/s²
    const friction = 0.985;
    let lastTime = performance.now();
    frameRef.current = 0;

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // cap dt to prevent spiral
      lastTime = now;
      frameRef.current++;

      ctx.clearRect(0, 0, W, H);

      // ─── Background glow pulse ───
      const pulseAlpha = 0.03 + Math.sin(frameRef.current * 0.04) * 0.02;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.6);
      gradient.addColorStop(0, `rgba(239, 68, 68, ${pulseAlpha * 2})`);
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
        s.opacity -= 0.25 * dt;

        if (s.opacity <= 0) continue;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;
        ctx.fillRect(-s.w / 2, -s.h / 2, s.w, s.h);
        ctx.restore();
      }

      // ─── Update & draw particles ───
      for (const p of particlesRef.current) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += gravity * dt * 0.3;
        p.vx *= friction;
        p.vy *= friction;
        p.life -= dt;
        p.rotation += p.rotationSpeed * dt;

        if (p.life <= 0) continue;

        const alpha = p.life / p.maxLife;
        const size = p.size * (0.5 + alpha * 0.5);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;

        if (p.char) {
          // Binary character particle
          ctx.fillStyle = p.color;
          ctx.font = `${size * 1.2}px "JetBrains Mono", monospace`;
          ctx.fillText(p.char, -size / 2, size / 2);
        } else {
          // Glowing dot
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = size * 0.8;
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, TWO_PI);
          ctx.fill();
        }
        ctx.restore();
      }

      // ─── Central destruction ring ───
      const ringAlpha = 0.15 + Math.sin(frameRef.current * 0.06) * 0.1;
      const ringRadius = 40 + frameRef.current * 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, ringRadius % (Math.max(W, H) * 0.7), 0, TWO_PI);
      ctx.strokeStyle = `rgba(239, 68, 68, ${ringAlpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Continue animation while particles are alive
      const allDead = particlesRef.current.every((p) => p.life <= 0) && shardsRef.current.every((s) => s.opacity <= 0);

      if (!allDead && frameRef.current < 300) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
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

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const canvasRef = useDestructionPhysics(phase === "destroying", isMobile);

  // Destruction sequence
  useEffect(() => {
    if (!isActive) return;

    // Phase 1: Warning countdown (3 seconds)
    setPhase("warning");
    setCountdown(3);

    const t1 = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(t1);
          setPhase("destroying");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(t1);
  }, [isActive]);

  // Destruction progress & completion
  useEffect(() => {
    if (phase !== "destroying") return;

    const startTime = Date.now();
    const duration = 4000; // 4 second destruction

    const t2 = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(t2);
        setTimeout(() => {
          setPhase("complete");
          if (!completeCalled.current) {
            completeCalled.current = true;
            onComplete?.();
          }
        }, 800);
      }
    }, 16); // ~60fps

    return () => clearInterval(t2);
  }, [phase, onComplete]);

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
          className="fixed inset-0 z-[300] bg-black/95 flex flex-col items-center justify-center overflow-hidden"
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
                animate={{ scale: [1, 1.15, 1], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mx-auto mb-6"
              >
                <Flame className="w-12 h-12 text-red-500" />
              </motion.div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-red-400 text-sm font-medium uppercase tracking-[0.3em] mb-3"
              >
                Vault Limit Reached
              </motion.div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
                Self-Destruct in{" "}
                <motion.span
                  key={countdown}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-red-500 font-mono tabular-nums"
                >
                  {countdown}
                </motion.span>
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-zinc-500">
                {codeFormatted && (
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono">
                    Vault {codeFormatted}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Binary className="w-3 h-3" />
                  {fileCount} files
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
              className="relative z-10 text-center px-6 w-full max-w-md"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center mx-auto mb-6"
              >
                <Zap className="w-10 h-10 text-red-400" />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Vault Destroyed
              </h2>

              {/* Progress bar */}
              <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-red-500 rounded-full transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Real-time stats */}
              <div className="grid grid-cols-3 gap-2 text-center mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-lg font-mono font-bold text-red-400 tabular-nums">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-0.5">Wiped</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-lg font-mono font-bold text-amber-400 tabular-nums">
                    {Math.max(0, Math.round(fileCount * (1 - progress / 100)))}/{fileCount}
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-0.5">Fragments</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-lg font-mono font-bold text-orange-400 tabular-nums">
                    {Math.round((totalSize / 1024) * (1 - progress / 100))}
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-0.5">KB left</div>
                </div>
              </div>

              <p className="text-xs text-zinc-500">
                Cryptographic keys destroyed. Data fragments vaporized from all storage nodes.
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
                className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-6"
              >
                <Trash2 className="w-10 h-10 text-zinc-500" />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Vault Purged
              </h2>
              <p className="text-sm text-zinc-500 mb-1">
                All traces have been eliminated from the network.
              </p>
              <p className="text-xs text-zinc-600">
                This vault no longer exists. No recovery possible.
              </p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => (window.location.href = "/")}
                className="mt-8 px-8 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-sm font-medium hover:bg-white/[0.08] transition-colors"
              >
                Return home
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
