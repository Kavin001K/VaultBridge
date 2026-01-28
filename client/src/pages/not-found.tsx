import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="bg-terminal relative overflow-hidden font-mono selection:bg-green-900 selection:text-green-100 min-h-screen">
      {/* Noise Layer (using existing SVG noise pattern) */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-0" />

      {/* CRT Effects */}
      <div className="crt-overlay fixed inset-0 pointer-events-none z-10" />
      <div className="crt-scan-line fixed inset-0 pointer-events-none z-20" />

      {/* Terminal Content */}
      <div className="terminal-text relative z-30 min-h-screen flex flex-col justify-center max-w-4xl mx-auto p-8 md:p-12 uppercase">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
          Error <span className="text-white">404</span>
        </h1>

        <div className="space-y-6 text-lg md:text-2xl leading-relaxed">
          <p className="terminal-output">
            The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
          </p>
          <p className="terminal-output">
            Please try to <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="terminal-link">go back</a> or <Link href="/" className="terminal-link">return to the homepage</Link>.
          </p>
          <p className="terminal-output text-emerald-500/80 animate-pulse">
            Good luck.
          </p>
        </div>
      </div>
    </div>
  );
}
