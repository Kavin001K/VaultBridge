import { c as m, r as c, j as e, m as a, b as d, B as g, q as h } from "./index-Brl99K9S.js";
import { F as b } from "./file-text-Chx9CnBq.js";
import { C as y } from "./chevron-up-B6hr-vmt.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const f = m("Scale", [["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }], ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }], ["path", { d: "M7 21h10", key: "1b0cd5" }], ["path", { d: "M12 3v18", key: "108xh3" }], ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const v = m("ShieldAlert", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]]);
function k() {
  const [x, p] = c.useState(false);
  c.useEffect(() => {
    const t = () => {
      p(window.scrollY > 500);
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }, []);
  const u = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, n = (t) => t.split(/(\*\*.*?\*\*)/g).map((i, s) => i.startsWith("**") && i.endsWith("**") ? e.jsx("strong", { className: "text-red-400 font-bold tracking-tight", children: i.slice(2, -2) }, s) : i), o = [{ id: "agreement", title: "1. The Agreement", content: `
By initializing a secure channel on VaultBridge, you agree to these terms. If you intend to use this platform for malicious acts, leave now.
            ` }, { id: "service", title: "2. The Service", content: `
VaultBridge provides ephemeral, encrypted data transfer focused on Zero-Knowledge architecture.
* **Universal Live Clipboard**: Real-time, RAM-only synchronization between devices via WebSocket.
* **Secure Vaults**: Time-limited encrypted file storage with adaptive streaming decryption and **Dual-Provider Storage Routing** (R2/Supabase).
* **The "Burn" Protocol**: A manual override to instantly incinerate session data from our volatile memory.
* **Burn-on-Read**: Option to auto-destruct a vault immediately after its first successful download.
            ` }, { id: "usage", title: `3. Usage Rules (The "Don't Be Evil" Clause)`, content: `
You agree NOT to use VaultBridge for:
* Hosting malware, ransomware, or C2 infrastructure.
* Distributing child exploitation material (CSAM).
* Phishing or social engineering.
* **DoS / Resource Abuse**: Intentionally holding WebSocket connections open to exhaust server memory or flooding the synchronization pipeline.

**Abuse Policy:** While we cannot read your files, we monitor network traffic patterns (metadata only). If your connection behaves like a botnet, we will ban your IP range immediately.
            ` }, { id: "warranties", title: '4. No Warranties (The "Use At Your Own Risk" Clause)', content: `
This software is provided "as is."
* We guarantee the **math** (AES-256-GCM is verified).
* We do NOT guarantee **availability**. We are not a backup service. If your timer runs out, your data is incinerated. If our server catches fire, your data is gone.
* **Live Clipboard Volatility**: Clipboard data exists ONLY in RAM. If the server restarts, data is lost. This is a feature, not a bug.
* **Memory Storage Fallback**: In the event of primary database failure, the system automatically switches to **Volatile Memory Storage**. Data stored in this mode exists ONLY in RAM and will be lost if the server restarts. We do not guarantee persistence in this state.
            ` }, { id: "liability", title: "5. Liability", content: `
You acknowledge that you are solely responsible for the custody of your encryption keys (PINs/Links). If you lose them, we cannot help you. If you share them with the wrong person, we cannot stop them. We possess **Zero Knowledge** of your keys.
            ` }, { id: "termination", title: "6. Termination", content: `
We reserve the right to terminate connections that destabilize our infrastructure. You also have the right to terminate us: use the "Burn" button to forcefully wipe your session data from our existence.
            ` }, { id: "governing-law", title: "7. Governing Law", content: `
Code is Law. But for the lawyers: These terms are governed by the laws of the State of Delaware.

*Encrypt everything. Trust nothing.*
            ` }];
  return e.jsxs("div", { className: "min-h-screen bg-black text-zinc-300 font-sans selection:bg-red-500/30 relative overflow-hidden", children: [e.jsxs("div", { className: "fixed inset-0 pointer-events-none", children: [e.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" }), e.jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" }), e.jsx("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" })] }), e.jsx(a.header, { className: "sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl", initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.5 }, children: e.jsxs("div", { className: "container flex h-16 items-center justify-between px-6 max-w-5xl mx-auto", children: [e.jsx(d, { href: "/", children: e.jsxs("div", { className: "flex items-center gap-3 cursor-pointer group", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors", children: e.jsx(f, { className: "w-4 h-4 text-red-500" }) }), e.jsxs("span", { className: "text-lg font-bold tracking-tight text-white group-hover:text-red-50 transition-colors", children: ["VAULT", e.jsx("span", { className: "text-red-500", children: "BRIDGE" })] })] }) }), e.jsx(d, { href: "/", children: e.jsxs(g, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [e.jsx(h, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Return Home" })] }) })] }) }), e.jsxs("main", { className: "relative z-10 container max-w-4xl mx-auto px-6 py-16 md:py-20", children: [e.jsxs("div", { className: "mb-20 space-y-6 text-center md:text-left", children: [e.jsxs(a.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider", children: [e.jsx(b, { className: "w-3 h-3" }), "Version 3.1 (Quantum + R2)"] }), e.jsxs(a.h1, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "text-5xl md:text-7xl font-black text-white tracking-tighter", children: ["Terms of", e.jsx("br", { className: "hidden md:block" }), " ", e.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-600", children: "Engagement" })] }), e.jsx(a.p, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed", children: "Binding protocols for the encrypted age." })] }), e.jsxs("div", { className: "grid lg:grid-cols-[280px_1fr] gap-16 items-start", children: [e.jsx("div", { className: "hidden lg:block sticky top-32", children: e.jsxs(a.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.3 }, className: "p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm", children: [e.jsx("p", { className: "text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6", children: "Navigation" }), e.jsx("div", { className: "space-y-1", children: o.map((t) => e.jsxs("a", { href: `#${t.id}`, className: "block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group flex items-center justify-between", children: [e.jsx("span", { children: t.title.split(". ")[1] }), e.jsx(h, { className: "w-3 h-3 text-red-500 opacity-0 group-hover:opacity-100 rotate-180 transition-all" })] }, t.id)) })] }) }), e.jsx("div", { className: "space-y-20", children: o.map((t, l) => e.jsxs(a.section, { id: t.id, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.5 }, className: "scroll-mt-32 relative group", children: [e.jsx("div", { className: "absolute -left-12 top-0 text-zinc-800 font-black text-6xl -z-10 opacity-0 lg:opacity-50 select-none group-hover:text-red-900/20 transition-colors", children: l + 1 }), e.jsx("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4", children: t.title }), e.jsx("div", { className: "space-y-4 text-lg text-zinc-400 leading-relaxed", children: t.content.split(`
`).map((i, s) => {
    const r = i.trim();
    return r.startsWith("###") ? e.jsx("h3", { className: "text-xl font-bold text-white mt-8 mb-4", children: n(r.replace("###", "").trim()) }, s) : r.startsWith("* ") ? e.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors", children: [e.jsx("div", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" }), e.jsx("span", { className: "text-zinc-300", children: n(r.replace("* ", "").trim()) })] }, s) : r.match(/^\d+\./) ? e.jsxs("div", { className: "flex items-start gap-3 ml-2", children: [e.jsxs("span", { className: "font-mono text-red-500/80", children: [r.split(".")[0], "."] }), e.jsx("span", { children: n(r.replace(/^\d+\./, "").trim()) })] }, s) : r === "" ? null : r.startsWith("*Encrypt") ? e.jsx("div", { className: "mt-20 pt-12 border-t border-white/5 text-center", children: e.jsx("p", { className: "text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 font-mono tracking-tighter uppercase", children: r.replace(/\*/g, "") }) }, s) : e.jsx("p", { children: n(i) }, s);
  }) })] }, t.id)) })] }), e.jsx(a.button, { initial: { opacity: 0 }, animate: { opacity: x ? 1 : 0 }, onClick: u, className: "fixed bottom-8 right-8 p-4 bg-red-600 text-white rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all hover:scale-110 z-50", children: e.jsx(y, { className: "w-5 h-5" }) })] }), e.jsxs("footer", { className: "border-t border-white/5 py-12 relative z-10 bg-black text-center overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent pointer-events-none" }), e.jsxs("div", { className: "container px-4 text-center max-w-4xl mx-auto relative z-10", children: [e.jsx(v, { className: "w-12 h-12 text-zinc-900 mx-auto mb-6" }), e.jsx("p", { className: "text-zinc-600 text-sm font-mono uppercase tracking-widest", children: "VaultBridge Legal Protocol \u2022 Binding Agreement" }), e.jsxs(a.div, { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 mt-4 cursor-default group hover:border-red-500/20 transition-colors", whileHover: { scale: 1.05 }, children: [e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" }), e.jsx("span", { className: "text-[10px] font-mono text-zinc-400 group-hover:text-red-400 transition-colors", children: "v1.3.0 (Quantum + R2)" })] })] })] })] });
}
export {
  k as default
};
