import { c as i, j as e, L as r, B as c, k as n, C as l } from "./index-B1Hr3-ke.js";
import { C as o } from "./circle-MnxoWqh8.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const d = i("Clock3", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]]), p = { active: l, planned: d, backlog: o }, m = [{ phase: "Now", status: "active", items: ["Security architecture transparency pages", "Programmatic SEO landing pages", "Share-preview and social metadata improvements"] }, { phase: "Next", status: "planned", items: ["Public share-link reliability and abuse-hardening", "Expanded lifecycle controls for enterprise retention policies", "Improved onboarding for new secure-transfer users"] }, { phase: "Later", status: "planned", items: ["Self-hosted deployment profile", "Advanced governance controls for teams", "Operational transparency dashboard"] }];
function u() {
  return e.jsxs("div", { className: "min-h-screen bg-zinc-950 text-zinc-100", children: [e.jsx("header", { className: "sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur", children: e.jsxs("div", { className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-4", children: [e.jsx(r, { href: "/", children: e.jsxs("div", { className: "cursor-pointer font-mono text-lg font-bold tracking-tight", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] }) }), e.jsx(r, { href: "/", children: e.jsxs(c, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-300", children: [e.jsx(n, { className: "h-4 w-4" }), "Home"] }) })] }) }), e.jsxs("main", { className: "mx-auto max-w-5xl space-y-8 px-4 py-12", children: [e.jsxs("section", { className: "rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8", children: [e.jsx("h1", { className: "text-3xl font-bold md:text-5xl", children: "Public Roadmap" }), e.jsx("p", { className: "mt-4 max-w-3xl text-zinc-400", children: "Transparent progress for privacy-first secure sharing. Priorities are user trust, protocol integrity, and low-friction adoption." })] }), e.jsx("section", { className: "grid gap-4 md:grid-cols-3", children: m.map((s) => {
    const t = p[s.status];
    return e.jsxs("div", { className: "rounded-xl border border-zinc-800 bg-zinc-900/30 p-5", children: [e.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [e.jsx(t, { className: "h-4 w-4 text-primary" }), e.jsx("h2", { className: "text-xl font-semibold", children: s.phase })] }), e.jsx("ul", { className: "list-disc space-y-2 pl-5 text-sm text-zinc-300", children: s.items.map((a) => e.jsx("li", { children: a }, a)) })] }, s.phase);
  }) }), e.jsxs("section", { className: "rounded-xl border border-primary/30 bg-primary/10 p-6", children: [e.jsx("h2", { className: "text-2xl font-semibold", children: "Feedback Loop" }), e.jsx("p", { className: "mt-2 text-zinc-300", children: "Product direction is continuously shaped by developer feedback, privacy community input, and production reliability signals." })] })] })] });
}
export {
  u as default
};
