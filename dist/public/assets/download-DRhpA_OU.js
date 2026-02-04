import { c as he, r as n, j as e, D as fe, P as te, a0 as ge, u as re, m as _, ab as ae, B as P, a5 as Z, h as ne, A as ve, af as be, ag as we, a9 as je, aa as ye, Z as Ne, ah as ke, ad as ze } from "./index-C6yyIA9d.js";
import { Q as Se, E as Ce } from "./index-4uTFYoSi.js";
import { I as De } from "./input-BshbKBn-.js";
import { H as Ie } from "./hard-drive-B2R_6qSM.js";
import { T as V } from "./triangle-alert-ZKt9ntTe.js";
import { a as Ee, C as G } from "./clock-BtX6r9C1.js";
import { D as ie } from "./download-C6YedVRM.js";
import { M as Pe } from "./mail-BMAJQxqx.js";
import { s as J, i as Le } from "./downloadStream-BkUhfvn2.js";
import { F as Ae } from "./file-BSrnutJP.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Me = he("LockOpen", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]]);
var K = "Progress", W = 100, [Te] = fe(K), [Re, Ue] = Te(K), oe = n.forwardRef((t, r) => {
  const { __scopeProgress: p, value: m = null, max: i, getValueLabel: z = Fe, ...y } = t;
  (i || i === 0) && !Y(i) && console.error($e(`${i}`, "Progress"));
  const o = Y(i) ? i : W;
  m !== null && !ee(m, o) && console.error(Ve(`${m}`, "Progress"));
  const x = ee(m, o) ? m : null, S = O(x) ? z(x, o) : void 0;
  return e.jsx(Re, { scope: p, value: x, max: o, children: e.jsx(te.div, { "aria-valuemax": o, "aria-valuemin": 0, "aria-valuenow": O(x) ? x : void 0, "aria-valuetext": S, role: "progressbar", "data-state": ce(x, o), "data-value": x ?? void 0, "data-max": o, ...y, ref: r }) });
});
oe.displayName = K;
var le = "ProgressIndicator", de = n.forwardRef((t, r) => {
  const { __scopeProgress: p, ...m } = t, i = Ue(le, p);
  return e.jsx(te.div, { "data-state": ce(i.value, i.max), "data-value": i.value ?? void 0, "data-max": i.max, ...m, ref: r });
});
de.displayName = le;
function Fe(t, r) {
  return `${Math.round(t / r * 100)}%`;
}
function ce(t, r) {
  return t == null ? "indeterminate" : t === r ? "complete" : "loading";
}
function O(t) {
  return typeof t == "number";
}
function Y(t) {
  return O(t) && !isNaN(t) && t > 0;
}
function ee(t, r) {
  return O(t) && !isNaN(t) && t <= r && t >= 0;
}
function $e(t, r) {
  return `Invalid prop \`max\` of value \`${t}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${W}\`.`;
}
function Ve(t, r) {
  return `Invalid prop \`value\` of value \`${t}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${W} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var me = oe, _e = de;
const xe = n.forwardRef(({ className: t, value: r, ...p }, m) => e.jsx(me, { ref: m, className: ge("relative h-4 w-full overflow-hidden rounded-full bg-secondary", t), ...p, children: e.jsx(_e, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (r || 0)}%)` } }) }));
xe.displayName = me.displayName;
function H({ value: t, label: r }) {
  return e.jsxs("div", { className: "flex flex-col items-center gap-1", children: [e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-primary/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative w-12 h-14 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center overflow-hidden", children: [e.jsx(ve, { mode: "popLayout", children: e.jsx(_.span, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: "font-mono text-2xl font-bold text-primary", children: t.toString().padStart(2, "0") }, t) }), e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 pointer-events-none" })] })] }), e.jsx("span", { className: "text-[10px] uppercase font-bold text-zinc-600 tracking-wider font-mono", children: r })] });
}
function se() {
  return e.jsx("div", { className: "flex flex-col justify-start pt-4 h-14", children: e.jsxs("div", { className: "space-y-2 animate-pulse", children: [e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" }), e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" })] }) });
}
function Oe({ vaultId: t, shortCode: r, fullLink: p, filesCount: m, totalSize: i, expiresAt: z, downloads: y, maxDownloads: o, onSendEmail: x, className: S, minimal: B = false }) {
  const [L, A] = n.useState(false), [k, T] = n.useState(false), [b, R] = n.useState(null), [C, U] = n.useState(""), [F, l] = n.useState(false), { toast: D } = re();
  n.useEffect(() => {
    const c = () => {
      const E = (/* @__PURE__ */ new Date()).getTime(), s = new Date(z).getTime() - E;
      if (s <= 0) {
        R(null);
        return;
      }
      const u = Math.floor(s / (1e3 * 60 * 60)), h = Math.floor(s % (1e3 * 60 * 60) / (1e3 * 60)), a = Math.floor(s % (1e3 * 60) / 1e3);
      R({ hours: u, minutes: h, seconds: a });
    };
    c();
    const w = setInterval(c, 1e3);
    return () => clearInterval(w);
  }, [z]);
  const M = async (c, w) => {
    try {
      await navigator.clipboard.writeText(c), w === "link" ? (A(true), setTimeout(() => A(false), 2e3)) : (T(true), setTimeout(() => T(false), 2e3)), D({ title: "Copied!", description: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(G, { className: "w-4 h-4 text-primary" }), e.jsxs("span", { children: [w === "link" ? "Secure link" : "Access code", " copied to clipboard."] })] }) });
    } catch {
      D({ variant: "destructive", title: "Failed to copy" });
    }
  }, $ = async () => {
    if (!(!C || !x)) {
      l(true);
      try {
        await x(C), U(""), D({ title: "Email Sent!", description: "Vault link sent successfully." });
      } catch {
        D({ variant: "destructive", title: "Failed to send email" });
      } finally {
        l(false);
      }
    }
  }, f = b === null, I = b ? b.hours === 0 && b.minutes < 60 : false;
  return e.jsxs(_.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4, ease: "easeOut" }, className: `glass-card overflow-hidden ring-1 ring-white/10 ${S}`, children: [e.jsx("div", { className: "relative h-1 w-full bg-zinc-900 pointer-events-none overflow-hidden", children: e.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-transparent ${f ? "via-rose-500" : "via-primary"} to-transparent w-1/2 animate-shimmer opacity-70` }) }), e.jsxs("div", { className: "p-5 md:p-8", children: [!B && e.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-10", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "relative shrink-0", children: [e.jsx("div", { className: "w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 shadow-inner", children: e.jsx(Ie, { className: `w-7 h-7 md:w-8 md:h-8 ${f ? "text-rose-500" : "text-primary"}` }) }), e.jsx("div", { className: "absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1 border border-zinc-800", children: f ? e.jsx(V, { className: "w-3 h-3 md:w-4 md:h-4 text-rose-500" }) : e.jsx(ae, { className: "w-3 h-3 md:w-4 md:h-4 text-primary" }) })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("h2", { className: "text-xl md:text-2xl font-bold font-mono tracking-tight text-foreground", children: "SECURE VAULT" }), e.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${f ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-primary/10 border-primary/20 text-primary"}`, children: f ? "Archived" : "Active" })] }), e.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground flex items-center gap-2", children: [e.jsx("span", { className: "font-medium text-foreground", children: m }), " ", m === 1 ? "file" : "files", e.jsx("span", { className: "w-1 h-1 rounded-full bg-zinc-700" }), e.jsx("span", { className: "font-medium text-foreground", children: (i / (1024 * 1024)).toFixed(2) }), " MB"] })] })] }), e.jsxs("div", { className: "flex flex-col items-end w-full md:w-auto mt-2 md:mt-0", children: [e.jsxs("div", { className: `flex items-center gap-2 mb-2 text-xs uppercase font-bold tracking-widest ${I || f ? "text-rose-500" : "text-primary"}`, children: [e.jsx(Ee, { className: "w-3.5 h-3.5" }), f ? "Vault Expired" : "Auto-Purge In"] }), f ? e.jsx("div", { className: "h-12 md:h-14 flex items-center px-4 bg-rose-500/10 border border-rose-500/20 rounded-lg w-full md:w-auto justify-center", children: e.jsx("span", { className: "font-mono text-lg md:text-xl font-bold text-rose-500 tracking-widest", children: "DELETED" }) }) : e.jsxs("div", { className: "flex items-center justify-center gap-1.5 md:gap-2 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/50 backdrop-blur-sm w-full md:w-auto", children: [e.jsx(H, { value: (b == null ? void 0 : b.hours) || 0, label: "HRS" }), e.jsx(se, {}), e.jsx(H, { value: (b == null ? void 0 : b.minutes) || 0, label: "MIN" }), e.jsx(se, {}), e.jsx(H, { value: (b == null ? void 0 : b.seconds) || 0, label: "SEC" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8", children: [e.jsxs("div", { className: "flex flex-col items-center order-1 lg:order-none", children: [e.jsxs("div", { className: "relative group w-full max-w-[240px] lg:max-w-none", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-tr from-primary/50 to-emerald-600/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative bg-zinc-950 p-4 md:p-6 rounded-xl border border-primary/20 shadow-2xl overflow-hidden aspect-square flex items-center justify-center", children: [e.jsx(_.div, { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-10", animate: { top: ["-100%", "100%"] }, transition: { duration: 3, repeat: 1 / 0, ease: "linear" } }), e.jsx("div", { className: "bg-white p-2 rounded-lg relative z-0 w-full h-full flex items-center justify-center", children: e.jsx(Se, { value: p, size: 200, className: "w-full h-full", level: "H", includeMargin: true, bgColor: "#FFFFFF", fgColor: "#16a34a", imageSettings: { src: "/vault-qr-icon.png", height: 48, width: 48, excavate: true } }) })] })] }), e.jsxs("p", { className: "mt-4 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [e.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), "Scan to Access"] })] }), e.jsxs("div", { className: "lg:col-span-2 space-y-4 md:space-y-5 order-2 lg:order-none", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative group overflow-hidden flex flex-col justify-between min-h-[110px]", children: [e.jsx("div", { className: "absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity z-10", children: e.jsx(P, { variant: "ghost", size: "icon", onClick: () => M(r, "code"), className: "h-8 w-8 hover:bg-zinc-800 text-zinc-400 hover:text-white", children: k ? e.jsx(G, { className: "w-4 h-4 text-primary" }) : e.jsx(Z, { className: "w-4 h-4" }) }) }), e.jsx("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1", children: "Access PIN" }), e.jsx("div", { className: "flex-1 flex items-center justify-center w-full", children: e.jsx("div", { className: "font-mono text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-widest drop-shadow-lg whitespace-nowrap", children: r }) })] }), e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative flex flex-col justify-between min-h-[110px]", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider flex items-center gap-1.5", children: [e.jsx(ie, { className: "w-3 h-3" }), "Downloads"] }), e.jsxs("span", { className: `font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${y >= o ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-300"}`, children: [o - y, " LEFT"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "flex gap-1 h-3 w-full", children: Array.from({ length: Math.min(o, 20) }).map((c, w) => {
    const E = w < y;
    return e.jsx("div", { className: `flex-1 rounded-sm transition-all duration-300 ${E ? "bg-zinc-800" : "bg-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]"}` }, w);
  }) }), e.jsxs("div", { className: "flex justify-between items-center text-[10px] font-mono text-zinc-500", children: [e.jsx("span", { children: "0" }), e.jsxs("span", { children: [y, " / ", o, " used"] }), e.jsx("span", { children: o })] })] })] })] }), e.jsx("div", { children: e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative flex items-center bg-zinc-900/80 border border-zinc-700 hover:border-primary/50 rounded-xl p-1 pr-2 transition-colors", children: [e.jsx("div", { className: "h-10 w-10 flex items-center justify-center text-zinc-500 shrink-0", children: e.jsx(Ce, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "flex-1 min-w-0 px-2 overflow-hidden", children: [e.jsx("div", { className: "text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5", children: "Secure Link" }), e.jsx("div", { className: "text-sm font-mono text-zinc-300 truncate selection:bg-primary/30", children: p })] }), e.jsxs(P, { variant: "secondary", size: "sm", onClick: () => M(p, "link"), className: "h-9 gap-2 shadow-sm font-medium shrink-0", children: [L ? e.jsx(G, { className: "w-3.5 h-3.5" }) : e.jsx(Z, { className: "w-3.5 h-3.5" }), e.jsx("span", { className: "hidden md:inline", children: L ? "Copied" : "Copy" })] })] })] }) }), x && !f && e.jsxs("div", { className: "pt-4 mt-2", children: [e.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [e.jsx("div", { className: "p-1.5 bg-zinc-800 rounded-md", children: e.jsx(Pe, { className: "w-4 h-4 text-zinc-400" }) }), e.jsx("span", { className: "text-sm font-medium text-foreground", children: "Secure Send" })] }), e.jsxs("div", { className: "flex flex-col md:flex-row gap-2", children: [e.jsx(De, { type: "email", placeholder: "Enter recipient email...", value: C, onChange: (c) => U(c.target.value), className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 focus:border-primary/50 transition-colors" }), e.jsx(P, { onClick: $, disabled: !C || F, className: "w-full md:w-auto min-w-[100px] cyber-btn", children: F ? e.jsx(ne, { className: "w-4 h-4 animate-spin" }) : "Send" })] }), e.jsx("p", { className: "text-[11px] text-zinc-500 mt-2 pl-1", children: "* Encrypted link sent only. No files attached." })] })] })] }), e.jsxs("div", { className: "mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start gap-4", children: [e.jsx("div", { className: "hidden md:block p-2 bg-rose-500/10 rounded-lg shrink-0", children: e.jsx(V, { className: "w-5 h-5 text-rose-500" }) }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 md:hidden mb-2 text-rose-500 font-bold text-sm", children: [e.jsx(V, { className: "w-4 h-4" }), e.jsx("span", { children: "Self-Destruction Protocol" })] }), e.jsx("h4", { className: "hidden md:block text-sm font-bold text-rose-500 mb-1", children: "Self-Destruction Protocol Active" }), e.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed max-w-2xl", children: ["This vault is encrypted with a unique key. Once the limit is reached or timer expires, data is permanently purged.", e.jsx("span", { className: "text-zinc-300 font-medium", children: " No recovery option." })] })] })] })] })] });
}
function es() {
  const [, t] = be("/v/:id"), r = t == null ? void 0 : t.id, [p, m] = n.useState(null), [i, z] = n.useState([]), [y, o] = n.useState(true), [x, S] = n.useState(null), [B, L] = n.useState(null), [A, k] = n.useState(0), [T, b] = n.useState(null), [R, C] = n.useState(false), [U, F] = n.useState(false), { data: l, isLoading: D, error: M } = we(r || ""), $ = je(), f = ye(), { toast: I } = re(), c = n.useRef(null);
  n.useEffect(() => (c.current = new Worker(new URL("/assets/encryption.worker-UhEl2skF.js", import.meta.url), { type: "module" }), () => {
    var _a;
    return (_a = c.current) == null ? void 0 : _a.terminate();
  }), []), n.useEffect(() => {
    const u = window.location.hash.replace("#key=", "");
    if (!u) {
      S("Missing decryption key. Invalid link."), o(false);
      return;
    }
    l && (async () => {
      if (l) try {
        const a = await ke(u);
        m(a);
        const j = (await ze(l.encryptedMetadata, a)).map((d) => {
          const v = l.files.find((N) => N.fileId === d.fileId);
          return { ...d, chunks: (v == null ? void 0 : v.chunkCount) || 0, isCompressed: (v == null ? void 0 : v.isCompressed) || false };
        });
        z(j), o(false);
      } catch (a) {
        console.error(a), S("Failed to decrypt vault. Key may be invalid."), o(false);
      }
    })();
  }, [l]);
  const w = async (s) => {
    const u = [];
    for (let a = 0; a < s.chunks; a += 10) {
      const g = [];
      for (let d = 0; d < 10 && a + d < s.chunks; d++) g.push($.mutateAsync({ vaultId: r, fileId: s.fileId, chunkIndex: a + d }).then((v) => ({ index: a + d, downloadUrl: v.downloadUrl })));
      const j = await Promise.all(g);
      u.push(...j), k(a / s.chunks * 10);
    }
    return u.sort((a, g) => a.index - g.index);
  }, E = async (s) => {
    if (!p || !r) return;
    L(s.fileId), k(0);
    const u = J(s.size);
    b(u ? "stream" : "memory");
    try {
      if (u) {
        I({ title: "Optimizing Download", description: "Preparing secure stream..." });
        const h = await w(s), a = await Le(s.fileId, p, h, { name: s.name, size: s.size, type: s.type, fileId: s.fileId, isCompressed: s.isCompressed }, (g) => {
          k(10 + g.progress * 0.9);
        });
        if (!a.success) throw new Error(a.error);
      } else {
        const h = [];
        let a = 0;
        for (let v = 0; v < s.chunks; v++) {
          const { downloadUrl: N } = await $.mutateAsync({ vaultId: r, fileId: s.fileId, chunkIndex: v }), Q = await (await fetch(N)).arrayBuffer(), ue = new Uint8Array(Q.slice(0, 12)), pe = Q.slice(12), X = await q(pe, ue, p, s.isCompressed);
          h.push(new Uint8Array(X)), a += X.byteLength, k(a / s.size * 100);
        }
        const g = new Blob(h, { type: s.type }), j = window.URL.createObjectURL(g), d = document.createElement("a");
        d.href = j, d.download = s.name, document.body.appendChild(d), d.click(), window.URL.revokeObjectURL(j), document.body.removeChild(d);
      }
      f.mutate(r), I({ title: "Download Complete", description: `Saved ${s.name}` }), ((l == null ? void 0 : l.maxDownloads) === 1 || ((l == null ? void 0 : l.downloadCount) || 0) + 1 >= ((l == null ? void 0 : l.maxDownloads) || 5)) && (setTimeout(() => {
        I({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), C(true);
      }, 2e3), setTimeout(() => {
        F(true);
      }, 4500));
    } catch (h) {
      console.error(h), I({ variant: "destructive", title: "Download Failed", description: "Encryption error or network failure." });
    } finally {
      L(null), k(0), b(null);
    }
  }, q = (s, u, h, a) => new Promise((g, j) => {
    if (!c.current) return j("Worker not ready");
    const d = Math.random(), v = (N) => {
      var _a;
      N.data.id === d && ((_a = c.current) == null ? void 0 : _a.removeEventListener("message", v), N.data.type === "error" ? j(N.data.error) : g(N.data.decryptedData));
    };
    c.current.addEventListener("message", v), c.current.postMessage({ type: "decrypt", data: s, iv: u, key: h, id: d, isCompressed: a }, [s]);
  });
  return U ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in duration-1000", children: e.jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [e.jsxs("div", { className: "w-20 h-20 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center mx-auto relative overflow-hidden group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent" }), e.jsx(ae, { className: "w-10 h-10 text-muted-foreground/50" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("h1", { className: "text-3xl font-bold font-mono text-muted-foreground uppercase tracking-widest", children: "Link Terminated" }), e.jsx("p", { className: "text-zinc-500", children: "This vault has self-destructed. No data remains." })] }), e.jsx(P, { onClick: () => window.location.href = "/", variant: "outline", className: "border-zinc-800 hover:bg-zinc-900 hover:text-white", children: "Return to Safety" })] }) }) : D ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: e.jsx(ne, { className: "w-10 h-10 text-primary animate-spin" }) }) : M || x ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4", children: e.jsxs("div", { className: "max-w-md w-full bg-card border border-destructive/30 rounded-xl p-8 text-center", children: [e.jsx("div", { className: "w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 text-destructive", children: e.jsx(V, { className: "w-8 h-8" }) }), e.jsx("h2", { className: "text-xl font-bold mb-2", children: "Access Denied" }), e.jsx("p", { className: "text-muted-foreground mb-6", children: x || (M == null ? void 0 : M.message) || "Vault not found" }), e.jsx(P, { onClick: () => window.location.href = "/", variant: "outline", children: "Go Home" })] }) }) : e.jsx("div", { className: `min-h-screen bg-background p-4 md:p-8 flex flex-col ${R ? "burn-container" : ""}`, children: e.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 md:space-y-8 w-full flex-1", children: [e.jsx("header", { className: "flex items-center justify-between mb-6 md:mb-8", children: e.jsxs("div", { className: "flex items-center gap-3 cursor-pointer", onClick: () => window.location.href = "/", children: [e.jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 overflow-hidden", children: e.jsx("img", { src: "/vault-logo.jpg", alt: "VaultBridge", className: "w-full h-full object-cover p-1" }) }), e.jsx("div", { children: e.jsxs("h1", { className: "text-lg md:text-xl font-bold font-mono tracking-tighter", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] }) })] }) }), l && e.jsx(Oe, { vaultId: l.id, shortCode: l.shortCode, fullLink: window.location.href.split("#")[0], filesCount: i.length, totalSize: i.reduce((s, u) => s + u.size, 0), expiresAt: l.expiresAt, downloads: l.downloadCount, maxDownloads: l.maxDownloads }), e.jsxs("div", { className: "space-y-4", children: [e.jsx("h3", { className: "text-base md:text-lg font-bold font-mono uppercase tracking-wider text-muted-foreground mb-2 md:mb-4", children: "Encrypted Contents" }), y ? e.jsxs("div", { className: "p-6 md:p-8 text-center text-muted-foreground animate-pulse", children: [e.jsx(Me, { className: "w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-50" }), e.jsx("p", { className: "text-sm md:text-base", children: "Decrypting metadata..." })] }) : i.map((s) => e.jsxs(_.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "bg-card border border-border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-primary/30 transition-colors", children: [e.jsxs("div", { className: "flex items-center gap-3 md:gap-4 overflow-hidden", children: [e.jsx("div", { className: "p-2 md:p-3 bg-secondary rounded-lg flex-shrink-0", children: e.jsx(Ae, { className: "w-5 h-5 md:w-6 md:h-6 text-primary" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium truncate text-sm md:text-base", children: s.name }), e.jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [(s.size / (1024 * 1024)).toFixed(2), " MB \u2022 ", s.type || "Unknown"] })] })] }), e.jsx("div", { className: "flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0", children: B === s.fileId ? e.jsxs("div", { className: "w-full md:w-48 space-y-2", children: [e.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [e.jsxs("span", { children: [T === "stream" ? "Stream " : "", "Decrypting..."] }), e.jsxs("span", { children: [Math.round(A), "%"] })] }), e.jsx(xe, { value: A, className: "h-1.5 md:h-2" })] }) : e.jsxs(P, { onClick: () => E(s), className: "w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm md:text-base h-10 md:h-11", children: [J(s.size) ? e.jsx(Ne, { className: "w-4 h-4 mr-2 text-amber-500" }) : e.jsx(ie, { className: "w-4 h-4 mr-2" }), "Download"] }) })] }, s.fileId))] })] }) });
}
export {
  es as default
};
