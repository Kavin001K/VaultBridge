import { r as l, j as e, L as c, S as x, B as u, k as y, m as s, d as g } from "./index-B5eeqRPK.js";
import { C as f } from "./chevron-up-2c_phMUQ.js";
import { S as b } from "./shield-check-DgUGgLfn.js";
function j() {
  const [d, m] = l.useState(false);
  l.useEffect(() => {
    const t = () => {
      m(window.scrollY > 500);
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }, []);
  const h = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, o = (t) => t.split(/(\*\*.*?\*\*)/g).map((r, i) => r.startsWith("**") && r.endsWith("**") ? e.jsx("strong", { className: "text-emerald-400 font-bold", children: r.slice(2, -2) }, i) : r), n = [{ id: "core-axiom", title: "1. The Core Axiom", content: `
### We cannot disclose what we do not know.

VaultBridge is architected to be "blind." We strictly limit our technical capability to collect data. If a government agency, hacker, or alien civilization demanded your data, we could only offer them encrypted static\u2014mathematical noise that is useless without the keys held exclusively in your volatile memory.
            ` }, { id: "live-clipboard", title: "2. Live Clipboard Specifics", content: `
When utilizing the Universal Live Clipboard feature:

1.  **Transient State**: Data is treated as a WebSocket "stream." It flows through our volatile memory (RAM) only to route it to your other devices.
2.  **Encryption Layer**: Content is wrapped in AES-256-GCM client-side. The server sees only the encrypted blob and the routing metadata.
3.  **Persistence**: Unlike Vault files, Clipboard data is NEVER written to disk. It vanishes instantly upon session termination or server restart.
4.  **Termination**: The "Burn" or "Terminate" command executes a cryptographic erase of your session keys locally and force-closes the server connection.
            ` }, { id: "data-collection", title: "3. Data Collection Manifesto", content: `
### What We Collect (The Minimum Viable)
* **Encrypted Blobs**: The AES-256 encrypted binary data.
* **Routing IDs (Partial Keys)**: We see the first 3 digits of your Access Code to route traffic. We DO NOT see the full 6-digit PIN used for decryption.
* **Ephemeral Metadata**: File size, upload timestamp, and expiration timer (TTL).
* **Access Logs**: IP addresses are logged for 24 hours strictly for DDoS mitigation and abuse prevention, then sanitized.

### Storage Architecture
* **Multi-Cloud Redundancy**: Encrypted blobs are distributed across Cloudflare R2 (Primary) and Supabase Storage (Secondary). We hold no keys for either.
* **Memory-Only Mode**: During database outages, the system fails over to volatile RAM. Metadata stored in this state is lost instantly upon server restart.

### What We DO NOT Collect
* **Your Decryption Keys**: The full 6-digit PIN never leaves your device. Even when sharing via QR Codes or direct links, the PIN is passed exclusively via URL hash fragments (#code), ensuring it is completely invisible to our servers and network logs.
* **Your Content**: Streaming decryption ensures even large files are never realized on our server's disk in plaintext.
* **Lost Codes / PINs**: We offer **absolutely no code recovery options**. If you lose your 6-digit access PIN, your encrypted data is permanently inaccessible. We cannot recover it for you because we never had it to begin with.
* **Your Identity**: No accounts. No emails.
* **Analytics**: No Google Analytics. No Facebook Pixels. No tracking cookies.
            ` }, { id: "infrastructure", title: "4. Infrastructure", content: `
Our servers act as a blind courier. They take a locked briefcase (your encrypted data) from Point A and hand it to Point B. They do not have the key to the briefcase, nor do they care what is inside.

* **Hardware-Accelerated Edge Loading**: We use dynamic ultra-fast edge loading with native splash screens to minimize time-to-interact to near zero milliseconds. No data rests in these edge caches.
* **Adaptive Streaming**: Large files are piped directly to your browser without caching fully on our side.
* **Volatile Fallback**: We maintain a "break-glass" in-memory database that activates automatically if our primary storage goes dark, ensuring uptime without persistence.
            ` }, { id: "legal-compliance", title: "5. Legal Compliance & Disclosure", content: `
Because we possess zero knowledge of content:
1.  We cannot comply with DMCA takedowns regarding specific content (we can't see it).
2.  We cannot provide decrypted data to law enforcement.

*Your privacy is not a policy. It is physics.*
            ` }];
  return e.jsxs("div", { className: "min-h-screen bg-black text-zinc-300 font-sans selection:bg-emerald-500/30", children: [e.jsx("header", { className: "sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl", children: e.jsxs("div", { className: "container flex h-16 items-center justify-between px-4 max-w-5xl mx-auto", children: [e.jsx(c, { href: "/", children: e.jsxs("div", { className: "flex items-center gap-2 cursor-pointer group", children: [e.jsx(x, { className: "w-5 h-5 text-emerald-500 transition-colors group-hover:text-emerald-400" }), e.jsxs("span", { className: "text-lg font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors", children: ["VAULT", e.jsx("span", { className: "text-emerald-500", children: "BRIDGE" })] })] }) }), e.jsx(c, { href: "/", children: e.jsxs(u, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [e.jsx(y, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Return Home" })] }) })] }) }), e.jsxs("main", { className: "container max-w-4xl mx-auto px-4 py-12 md:py-16", children: [e.jsxs("div", { className: "mb-12 md:mb-16 space-y-4", children: [e.jsxs(s.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider", children: [e.jsx(g, { className: "w-3 h-3" }), "Effective Immediately"] }), e.jsx(s.h1, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "text-4xl md:text-5xl font-black text-white tracking-tight", children: "Privacy Protocol" }), e.jsxs(s.p, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed", children: ["Security Level: ", e.jsx("span", { className: "text-emerald-400 font-bold", children: "Zero-Knowledge" })] })] }), e.jsxs("div", { className: "grid md:grid-cols-[240px_1fr] gap-12 items-start", children: [e.jsxs("div", { className: "hidden md:block sticky top-24 space-y-1", children: [e.jsx("p", { className: "text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2", children: "Contents" }), n.map((t) => e.jsx("a", { href: `#${t.id}`, className: "block px-3 py-2 text-sm text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/5 rounded-lg transition-colors border-l-2 border-transparent hover:border-emerald-500", children: t.title.split(". ")[1] }, t.id))] }), e.jsx("div", { className: "space-y-16", children: n.map((t, p) => e.jsxs(s.section, { id: t.id, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.5 }, className: "scroll-mt-24", children: [e.jsx("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3", children: t.title }), e.jsx("div", { className: "prose prose-invert prose-zinc max-w-none prose-emerald prose-headings:text-zinc-100 prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-emerald-400", children: t.content.split(`
`).map((r, i) => {
    const a = r.trim();
    return a.startsWith("###") ? e.jsx("h3", { className: "text-xl font-bold text-white mt-6 mb-3", children: o(a.replace("###", "").trim()) }, i) : a.startsWith("* ") ? e.jsx("li", { className: "ml-4 list-disc pl-1", children: o(a.replace("* ", "").trim()) }, i) : a.match(/^\d+\./) ? e.jsx("li", { className: "ml-4 list-decimal pl-1", children: o(a.replace(/^\d+\./, "").trim()) }, i) : a === "" ? e.jsx("br", {}, i) : a.startsWith("*") && a.endsWith("*") && a.length > 2 ? e.jsx("p", { className: "text-emerald-400/80 italic text-center mt-8 text-lg font-mono border-t border-emerald-500/20 pt-8", children: a.slice(1, -1) }, i) : e.jsx("p", { children: o(r) }, i);
  }) })] }, t.id)) })] }), e.jsx(s.button, { initial: { opacity: 0 }, animate: { opacity: d ? 1 : 0 }, onClick: h, className: "fixed bottom-8 right-8 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 transition-colors z-50", children: e.jsx(f, { className: "w-5 h-5" }) })] }), e.jsxs("footer", { className: "border-t border-white/5 py-12 mt-24 bg-zinc-950 text-center overflow-hidden relative", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none" }), e.jsxs("div", { className: "container px-4 text-center max-w-4xl mx-auto relative z-10", children: [e.jsx(b, { className: "w-12 h-12 text-zinc-900 mx-auto mb-6" }), e.jsx("p", { className: "text-zinc-600 text-sm font-mono uppercase tracking-widest", children: "Last Updated: 2026 \u2022 VaultBridge Security Team" }), e.jsxs(s.div, { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 mt-4 cursor-default group hover:border-emerald-500/20 transition-colors", whileHover: { scale: 1.05 }, children: [e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }), e.jsx("span", { className: "text-[10px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors", children: "v1.3.0 (Quantum + R2)" })] })] })] })] });
}
export {
  j as default
};
