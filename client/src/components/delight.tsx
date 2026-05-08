import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, PartyPopper, Shield } from "lucide-react";

// ─── Confetti Particle System ───
interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
  origin?: { x: number; y: number };
  count?: number;
}

export function ConfettiParty({ trigger, onComplete, origin, count = 18 }: ConfettiProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string; rotation: number; scale: number; delay: number }[]>([]);
  const triggered = useRef(false);

  useEffect(() => {
    if (trigger && !triggered.current) {
      triggered.current = true;
      const colors = ["#10b981", "#34d399", "#22d3ee", "#a78bfa", "#fbbf24", "#f472b6", "#818cf8", "#fb923c"];
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 300,
        y: -(Math.random() * 200 + 80),
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 720 - 360,
        scale: 0.4 + Math.random() * 0.8,
        delay: Math.random() * 0.3,
      }));
      setParticles(newParticles);

      if (onComplete) {
        setTimeout(onComplete, 1500);
      }

      // Reset
      setTimeout(() => {
        triggered.current = false;
        setParticles([]);
      }, 2000);
    }
  }, [trigger, count, onComplete]);

  return (
    <AnimatePresence>
      {particles.length > 0 && (
        <div
          className="fixed inset-0 pointer-events-none z-[200]"
          style={{
            left: origin?.x ?? "50%",
            top: origin?.y ?? "50%",
            position: "fixed",
          }}
        >
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
              animate={{
                x: p.x,
                y: p.y,
                scale: 0,
                opacity: 0,
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9 + Math.random() * 0.6,
                delay: p.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute rounded-sm"
              style={{
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
                background: p.color,
                marginLeft: -4,
                marginTop: -4,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

// ─── Achievement Toast ───
interface AchievementToastProps {
  show: boolean;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onDismiss?: () => void;
}

export function AchievementToast({ show, title, subtitle, icon, onDismiss }: AchievementToastProps) {
  useEffect(() => {
    if (show && onDismiss) {
      const timer = setTimeout(onDismiss, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 20, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[150] pointer-events-none"
        >
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-primary/30 rounded-2xl px-5 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(16,185,129,0.15)] flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, -10, 10, -5, 0], scale: [1, 1.3, 0.9, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary"
            >
              {icon || <PartyPopper className="w-5 h-5" />}
            </motion.div>
            <div>
              <p className="text-sm font-bold text-white">{title}</p>
              {subtitle && <p className="text-[11px] text-zinc-400 font-medium">{subtitle}</p>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Ripple Button Effect ───
export function useRipple() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextId = useRef(0);

  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextId.current++;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  const RippleContainer = useCallback(
    ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <div className={`relative overflow-hidden ${className || ""}`} onClick={createRipple}>
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple absolute rounded-full pointer-events-none"
            style={{ left: r.x, top: r.y, width: 20, height: 20, marginLeft: -10, marginTop: -10 }}
          />
        ))}
      </div>
    ),
    [ripples, createRipple],
  );

  return { createRipple, RippleContainer };
}

// ─── Magnetic Hover Hook ───
export function useMagnetic(strength = 0.15) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength],
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 400);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}

// ─── Encrypted Text Reveal ───
export function DecryptText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [displayed, setDisplayed] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let iterations = 0;
      const maxIterations = 12;
      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          setDisplayed(text);
          setRevealed(true);
          clearInterval(interval);
          return;
        }
        const scrambled = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (iterations > maxIterations * 0.6 && i < (iterations / maxIterations) * text.length) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        setDisplayed(scrambled);
        iterations++;
      }, 40);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={`font-mono ${className} ${revealed ? "decrypt-reveal" : ""}`}>
      {displayed || text.replace(/./g, "•")}
    </span>
  );
}

// ─── Pulse Dot (subtle breathing indicator) ───
export function PulseDot({ color = "primary", size = "sm" }: { color?: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-1.5 h-1.5", md: "w-2.5 h-2.5", lg: "w-4 h-4" };
  const colorClasses: Record<string, string> = {
    primary: "bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    emerald: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    red: "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    amber: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]",
  };

  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={`${sizeClasses[size]} rounded-full ${colorClasses[color] || colorClasses.primary}`}
    />
  );
}
