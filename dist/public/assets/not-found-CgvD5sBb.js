import { j as e, L as s } from "./index-CzGRSC1U.js";
function n() {
  return e.jsxs("div", { className: "bg-terminal relative overflow-hidden font-mono selection:bg-green-900 selection:text-green-100 min-h-screen", children: [e.jsx("div", { className: "fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-0" }), e.jsx("div", { className: "crt-overlay fixed inset-0 pointer-events-none z-10" }), e.jsx("div", { className: "crt-scan-line fixed inset-0 pointer-events-none z-20" }), e.jsxs("div", { className: "terminal-text relative z-30 min-h-screen flex flex-col justify-center max-w-4xl mx-auto p-8 md:p-12 uppercase", children: [e.jsxs("h1", { className: "text-6xl md:text-8xl font-bold mb-8 tracking-tighter", children: ["Error ", e.jsx("span", { className: "text-white", children: "404" })] }), e.jsxs("div", { className: "space-y-6 text-lg md:text-2xl leading-relaxed", children: [e.jsx("p", { className: "terminal-output", children: "The page you are looking for might have been removed, had its name changed or is temporarily unavailable." }), e.jsxs("p", { className: "terminal-output", children: ["Please try to ", e.jsx("a", { href: "#", onClick: (t) => {
    t.preventDefault(), window.history.back();
  }, className: "terminal-link", children: "go back" }), " or ", e.jsx(s, { href: "/", className: "terminal-link", children: "return to the homepage" }), "."] }), e.jsx("p", { className: "terminal-output text-emerald-500/80 animate-pulse", children: "Good luck." })] })] })] });
}
export {
  n as default
};
