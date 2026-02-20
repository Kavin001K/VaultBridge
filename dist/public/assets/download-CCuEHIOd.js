import { c as ze, r as o, j as e, ao as De, a8 as Se, f as fe, m as W, o as Ce, ap as Ie, B as F, l as Y, ad as ce, e as se, A as Ee, aq as Ae, ar as Pe, ai as Le, ak as Fe, L as me, k as $e, Z as Me, as as Re, am as Ue } from "./index-CEhpL4yt.js";
import { I as Te } from "./input-C6yDTsSL.js";
import { H as Ve } from "./hard-drive-B90JW1K_.js";
import { T as K } from "./triangle-alert-Bd2ctTNp.js";
import { S as re } from "./shield-check-CNtBn1P8.js";
import { D as ae } from "./download-DAt1L8VC.js";
import { E as _e } from "./external-link-DYuo47KN.js";
import { M as Be } from "./mail-BQ8-gR5P.js";
import { s as ee, i as ue } from "./downloadStream-BHn03XQ0.js";
import { F as Oe } from "./file-CzUUUaRq.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ge = ze("LockOpen", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]]);
function He(s, a = []) {
  let u = [];
  function p(b, h) {
    const d = o.createContext(h);
    d.displayName = b + "Context";
    const x = u.length;
    u = [...u, h];
    const D = (k) => {
      const { scope: P, children: j, ...E } = k, N = P?.[s]?.[x] || d, R = o.useMemo(() => E, Object.values(E));
      return e.jsx(N.Provider, { value: R, children: j });
    };
    D.displayName = b + "Provider";
    function $(k, P) {
      const j = P?.[s]?.[x] || d, E = o.useContext(j);
      if (E) return E;
      if (h !== void 0) return h;
      throw new Error(`\`${k}\` must be used within \`${b}\``);
    }
    return [D, $];
  }
  const l = () => {
    const b = u.map((h) => o.createContext(h));
    return function(d) {
      const x = d?.[s] || b;
      return o.useMemo(() => ({ [`__scope${s}`]: { ...d, [s]: x } }), [d, x]);
    };
  };
  return l.scopeName = s, [p, qe(l, ...a)];
}
function qe(...s) {
  const a = s[0];
  if (s.length === 1) return a;
  const u = () => {
    const p = s.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function(b) {
      const h = p.reduce((d, { useScope: x, scopeName: D }) => {
        const k = x(b)[`__scope${D}`];
        return { ...d, ...k };
      }, {});
      return o.useMemo(() => ({ [`__scope${a.scopeName}`]: h }), [h]);
    };
  };
  return u.scopeName = a.scopeName, u;
}
var Ke = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ge = Ke.reduce((s, a) => {
  const u = De(`Primitive.${a}`), p = o.forwardRef((l, b) => {
    const { asChild: h, ...d } = l, x = h ? u : a;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), e.jsx(x, { ...d, ref: b });
  });
  return p.displayName = `Primitive.${a}`, { ...s, [a]: p };
}, {}), ne = "Progress", ie = 100, [We] = He(ne), [Xe, Ze] = We(ne), we = o.forwardRef((s, a) => {
  const { __scopeProgress: u, value: p = null, max: l, getValueLabel: b = Qe, ...h } = s;
  (l || l === 0) && !xe(l) && console.error(Je(`${l}`, "Progress"));
  const d = xe(l) ? l : ie;
  p !== null && !pe(p, d) && console.error(Ye(`${p}`, "Progress"));
  const x = pe(p, d) ? p : null, D = X(x) ? b(x, d) : void 0;
  return e.jsx(Xe, { scope: u, value: x, max: d, children: e.jsx(ge.div, { "aria-valuemax": d, "aria-valuemin": 0, "aria-valuenow": X(x) ? x : void 0, "aria-valuetext": D, role: "progressbar", "data-state": ye(x, d), "data-value": x ?? void 0, "data-max": d, ...h, ref: a }) });
});
we.displayName = ne;
var ve = "ProgressIndicator", be = o.forwardRef((s, a) => {
  const { __scopeProgress: u, ...p } = s, l = Ze(ve, u);
  return e.jsx(ge.div, { "data-state": ye(l.value, l.max), "data-value": l.value ?? void 0, "data-max": l.max, ...p, ref: a });
});
be.displayName = ve;
function Qe(s, a) {
  return `${Math.round(s / a * 100)}%`;
}
function ye(s, a) {
  return s == null ? "indeterminate" : s === a ? "complete" : "loading";
}
function X(s) {
  return typeof s == "number";
}
function xe(s) {
  return X(s) && !isNaN(s) && s > 0;
}
function pe(s, a) {
  return X(s) && !isNaN(s) && s <= a && s >= 0;
}
function Je(s, a) {
  return `Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ie}\`.`;
}
function Ye(s, a) {
  return `Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ie} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var je = we, et = be;
const Ne = o.forwardRef(({ className: s, value: a, ...u }, p) => e.jsx(je, { ref: p, className: Se("relative h-4 w-full overflow-hidden rounded-full bg-secondary", s), ...u, children: e.jsx(et, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (a || 0)}%)` } }) }));
Ne.displayName = je.displayName;
function te({ value: s, label: a }) {
  return e.jsxs("div", { className: "flex flex-col items-center gap-1", children: [e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-primary/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative w-12 h-14 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center overflow-hidden", children: [e.jsx(Ee, { mode: "popLayout", children: e.jsx(W.span, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: "font-mono text-2xl font-bold text-primary", children: s.toString().padStart(2, "0") }, s) }), e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 pointer-events-none" })] })] }), e.jsx("span", { className: "text-[10px] uppercase font-bold text-zinc-600 tracking-wider font-mono", children: a })] });
}
function he() {
  return e.jsx("div", { className: "flex flex-col justify-start pt-4 h-14", children: e.jsxs("div", { className: "space-y-2 animate-pulse", children: [e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" }), e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" })] }) });
}
function tt({ vaultId: s, shortCode: a, fullLink: u, filesCount: p, totalSize: l, expiresAt: b, downloads: h, maxDownloads: d, onSendEmail: x, className: D, minimal: $ = false }) {
  const [k, P] = o.useState(false), [j, E] = o.useState(false), [N, R] = o.useState(null), [M, B] = o.useState(""), [T, y] = o.useState(false), { toast: U } = fe();
  o.useEffect(() => {
    const v = () => {
      const L = (/* @__PURE__ */ new Date()).getTime(), I = new Date(b).getTime() - L;
      if (I <= 0) {
        R(null);
        return;
      }
      const O = Math.floor(I / (1e3 * 60 * 60)), Q = Math.floor(I % (1e3 * 60 * 60) / (1e3 * 60)), J = Math.floor(I % (1e3 * 60) / 1e3);
      R({ hours: O, minutes: Q, seconds: J });
    };
    v();
    const C = setInterval(v, 1e3);
    return () => clearInterval(C);
  }, [b]);
  const V = async (v, C) => {
    try {
      await navigator.clipboard.writeText(v), C === "link" ? (P(true), setTimeout(() => P(false), 2e3)) : (E(true), setTimeout(() => E(false), 2e3)), U({ title: "Copied!", description: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Y, { className: "w-4 h-4 text-primary" }), e.jsxs("span", { children: [C === "link" ? "Secure link" : "Access code", " copied to clipboard."] })] }) });
    } catch {
      U({ variant: "destructive", title: "Failed to copy" });
    }
  }, _ = async () => {
    if (!(!M || !x)) {
      y(true);
      try {
        await x(M), B(""), U({ title: "Email Sent!", description: "Vault link sent successfully." });
      } catch {
        U({ variant: "destructive", title: "Failed to send email" });
      } finally {
        y(false);
      }
    }
  }, z = N === null, S = N ? N.hours === 0 && N.minutes < 60 : false;
  return e.jsxs(W.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4, ease: "easeOut" }, className: `glass-card overflow-hidden ring-1 ring-white/10 ${D}`, children: [e.jsx("div", { className: "relative h-1 w-full bg-zinc-900 pointer-events-none overflow-hidden", children: e.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-transparent ${z ? "via-rose-500" : "via-primary"} to-transparent w-1/2 animate-shimmer opacity-70` }) }), e.jsxs("div", { className: "p-5 md:p-8", children: [!$ && e.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-10", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "relative shrink-0", children: [e.jsx("div", { className: "w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 shadow-inner", children: e.jsx(Ve, { className: `w-7 h-7 md:w-8 md:h-8 ${z ? "text-rose-500" : "text-primary"}` }) }), e.jsx("div", { className: "absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1 border border-zinc-800", children: z ? e.jsx(K, { className: "w-3 h-3 md:w-4 md:h-4 text-rose-500" }) : e.jsx(re, { className: "w-3 h-3 md:w-4 md:h-4 text-primary" }) })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("h2", { className: "text-xl md:text-2xl font-bold font-mono tracking-tight text-foreground", children: "SECURE VAULT" }), e.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${z ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-primary/10 border-primary/20 text-primary"}`, children: z ? "Archived" : "Active" })] }), e.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground flex items-center gap-2", children: [e.jsx("span", { className: "font-medium text-foreground", children: p }), " ", p === 1 ? "file" : "files", e.jsx("span", { className: "w-1 h-1 rounded-full bg-zinc-700" }), e.jsx("span", { className: "font-medium text-foreground", children: (l / (1024 * 1024)).toFixed(2) }), " MB"] })] })] }), e.jsxs("div", { className: "flex flex-col items-end w-full md:w-auto mt-2 md:mt-0", children: [e.jsxs("div", { className: `flex items-center gap-2 mb-2 text-xs uppercase font-bold tracking-widest ${S || z ? "text-rose-500" : "text-primary"}`, children: [e.jsx(Ce, { className: "w-3.5 h-3.5" }), z ? "Vault Expired" : "Auto-Purge In"] }), z ? e.jsx("div", { className: "h-12 md:h-14 flex items-center px-4 bg-rose-500/10 border border-rose-500/20 rounded-lg w-full md:w-auto justify-center", children: e.jsx("span", { className: "font-mono text-lg md:text-xl font-bold text-rose-500 tracking-widest", children: "DELETED" }) }) : e.jsxs("div", { className: "flex items-center justify-center gap-1.5 md:gap-2 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/50 backdrop-blur-sm w-full md:w-auto", children: [e.jsx(te, { value: N?.hours || 0, label: "HRS" }), e.jsx(he, {}), e.jsx(te, { value: N?.minutes || 0, label: "MIN" }), e.jsx(he, {}), e.jsx(te, { value: N?.seconds || 0, label: "SEC" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8", children: [e.jsxs("div", { className: "flex flex-col items-center order-1 lg:order-none", children: [e.jsxs("div", { className: "relative group w-full max-w-[240px] lg:max-w-none", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-tr from-primary/50 to-emerald-600/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative bg-zinc-950 p-4 md:p-6 rounded-xl border border-primary/20 shadow-2xl overflow-hidden aspect-square flex items-center justify-center", children: [e.jsx(W.div, { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-10", animate: { top: ["-100%", "100%"] }, transition: { duration: 3, repeat: 1 / 0, ease: "linear" } }), e.jsx("div", { className: "bg-white p-2 rounded-lg relative z-0 w-full h-full flex items-center justify-center", children: e.jsx(Ie, { value: u, size: 200, className: "w-full h-full", level: "H", includeMargin: true, bgColor: "#FFFFFF", fgColor: "#16a34a", imageSettings: { src: "/vault-qr-icon.png", height: 48, width: 48, excavate: true } }) })] })] }), e.jsxs("p", { className: "mt-4 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [e.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), "Scan to Access"] })] }), e.jsxs("div", { className: "lg:col-span-2 space-y-4 md:space-y-5 order-2 lg:order-none", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative group overflow-hidden flex flex-col justify-between min-h-[110px]", children: [e.jsx("div", { className: "absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity z-10", children: e.jsx(F, { variant: "ghost", size: "icon", onClick: () => V(a, "code"), className: "h-8 w-8 hover:bg-zinc-800 text-zinc-400 hover:text-white", children: j ? e.jsx(Y, { className: "w-4 h-4 text-primary" }) : e.jsx(ce, { className: "w-4 h-4" }) }) }), e.jsx("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1", children: "Access PIN" }), e.jsx("div", { className: "flex-1 flex items-center justify-center w-full", children: e.jsx("div", { className: "font-mono text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-widest drop-shadow-lg whitespace-nowrap", children: a }) })] }), e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative flex flex-col justify-between min-h-[110px]", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider flex items-center gap-1.5", children: [e.jsx(ae, { className: "w-3 h-3" }), "Downloads"] }), e.jsxs("span", { className: `font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${h >= d ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-300"}`, children: [d - h, " LEFT"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "flex gap-1 h-3 w-full", children: Array.from({ length: Math.min(d, 20) }).map((v, C) => {
    const L = C < h;
    return e.jsx("div", { className: `flex-1 rounded-sm transition-all duration-300 ${L ? "bg-zinc-800" : "bg-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]"}` }, C);
  }) }), e.jsxs("div", { className: "flex justify-between items-center text-[10px] font-mono text-zinc-500", children: [e.jsx("span", { children: "0" }), e.jsxs("span", { children: [h, " / ", d, " used"] }), e.jsx("span", { children: d })] })] })] })] }), e.jsx("div", { children: e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative flex items-center bg-zinc-900/80 border border-zinc-700 hover:border-primary/50 rounded-xl p-1 pr-2 transition-colors", children: [e.jsx("div", { className: "h-10 w-10 flex items-center justify-center text-zinc-500 shrink-0", children: e.jsx(_e, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "flex-1 min-w-0 px-2 overflow-hidden", children: [e.jsx("div", { className: "text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5", children: "Secure Link" }), e.jsx("div", { className: "text-sm font-mono text-zinc-300 truncate selection:bg-primary/30", children: u })] }), e.jsxs(F, { variant: "secondary", size: "sm", onClick: () => V(u, "link"), className: "h-9 gap-2 shadow-sm font-medium shrink-0", children: [k ? e.jsx(Y, { className: "w-3.5 h-3.5" }) : e.jsx(ce, { className: "w-3.5 h-3.5" }), e.jsx("span", { className: "hidden md:inline", children: k ? "Copied" : "Copy" })] })] })] }) }), x && !z && e.jsxs("div", { className: "pt-4 mt-2", children: [e.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [e.jsx("div", { className: "p-1.5 bg-zinc-800 rounded-md", children: e.jsx(Be, { className: "w-4 h-4 text-zinc-400" }) }), e.jsx("span", { className: "text-sm font-medium text-foreground", children: "Secure Send" })] }), e.jsxs("div", { className: "flex flex-col md:flex-row gap-2", children: [e.jsx(Te, { type: "email", placeholder: "Enter recipient email...", value: M, onChange: (v) => B(v.target.value), className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 focus:border-primary/50 transition-colors" }), e.jsx(F, { onClick: _, disabled: !M || T, className: "w-full md:w-auto min-w-[100px] cyber-btn", children: T ? e.jsx(se, { className: "w-4 h-4 animate-spin" }) : "Send" })] }), e.jsx("p", { className: "text-[11px] text-zinc-500 mt-2 pl-1", children: "* Encrypted link sent only. No files attached." })] })] })] }), e.jsxs("div", { className: "mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start gap-4", children: [e.jsx("div", { className: "hidden md:block p-2 bg-rose-500/10 rounded-lg shrink-0", children: e.jsx(K, { className: "w-5 h-5 text-rose-500" }) }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 md:hidden mb-2 text-rose-500 font-bold text-sm", children: [e.jsx(K, { className: "w-4 h-4" }), e.jsx("span", { children: "Self-Destruction Protocol" })] }), e.jsx("h4", { className: "hidden md:block text-sm font-bold text-rose-500 mb-1", children: "Self-Destruction Protocol Active" }), e.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed max-w-2xl", children: ["This vault is encrypted with a unique key. Once the limit is reached or timer expires, data is permanently purged.", e.jsx("span", { className: "text-zinc-300 font-medium", children: " No recovery option." })] })] })] })] })] });
}
function ut() {
  const [, s] = Ae("/v/:id"), a = s?.id, [u, p] = o.useState(null), [l, b] = o.useState([]), [h, d] = o.useState(true), [x, D] = o.useState(null), [$, k] = o.useState(null), [P, j] = o.useState(0), [E, N] = o.useState(null), [R, M] = o.useState(false), [B, T] = o.useState(false), { data: y, isLoading: U, error: V } = Pe(a || ""), _ = Le(), z = Fe(), { toast: S } = fe(), [v, C] = o.useState(/* @__PURE__ */ new Map()), [L, Z] = o.useState(false), I = o.useRef(null);
  o.useEffect(() => (I.current = new Worker(new URL("/assets/encryption.worker-UhEl2skF.js", import.meta.url), { type: "module" }), () => I.current?.terminate()), []), o.useEffect(() => {
    const m = window.location.hash.replace("#key=", "");
    if (!m) {
      D("Missing decryption key. Invalid link."), d(false);
      return;
    }
    y && (async () => {
      if (y) try {
        const n = await Re(m);
        p(n);
        const c = (await Ue(y.encryptedMetadata, n)).map((g) => {
          const w = y.files.find((A) => A.fileId === g.fileId);
          return { ...g, chunks: w?.chunkCount || 0, isCompressed: w?.isCompressed || false };
        });
        b(c);
        const f = /* @__PURE__ */ new Map();
        for (const g of y.files) {
          const w = g.maxDownloads || y.maxDownloads || 5, A = g.downloadCount || 0;
          f.set(g.fileId, { fileId: g.fileId, maxDownloads: w, downloadCount: A, remainingDownloads: Math.max(0, w - A), isExhausted: A >= w });
        }
        C(f), d(false);
      } catch (n) {
        console.error(n), D("Failed to decrypt vault. Key may be invalid."), d(false);
      }
    })();
  }, [y]);
  const O = async (t) => {
    const m = [];
    for (let n = 0; n < t.chunks; n += 10) {
      const i = [];
      for (let f = 0; f < 10 && n + f < t.chunks; f++) i.push(_.mutateAsync({ vaultId: a, fileId: t.fileId, chunkIndex: n + f }).then((g) => ({ index: n + f, downloadUrl: g.downloadUrl })));
      const c = await Promise.all(i);
      m.push(...c), j(n / t.chunks * 10);
    }
    return m.sort((n, i) => n.index - i.index);
  }, Q = async (t) => {
    if (!u || !a) return;
    k(t.fileId), j(0);
    const m = ee(t.size);
    N(m ? "stream" : "memory");
    try {
      if (m) {
        S({ title: "Optimizing Download", description: "Preparing secure stream..." });
        const r = await O(t), n = await ue(t.fileId, u, r, { name: t.name, size: t.size, type: t.type, fileId: t.fileId, isCompressed: t.isCompressed }, (i) => {
          j(10 + i.progress * 0.9);
        });
        if (!n.success) throw new Error(n.error);
      } else {
        const r = [];
        let n = 0;
        for (let g = 0; g < t.chunks; g++) {
          const { downloadUrl: w } = await _.mutateAsync({ vaultId: a, fileId: t.fileId, chunkIndex: g }), G = await (await fetch(w)).arrayBuffer(), le = new Uint8Array(G.slice(0, 12)), H = G.slice(12), q = await oe(H, le, u, t.isCompressed);
          r.push(new Uint8Array(q)), n += q.byteLength, j(n / t.size * 100);
        }
        const i = new Blob(r, { type: t.type }), c = window.URL.createObjectURL(i), f = document.createElement("a");
        f.href = c, f.download = t.name, document.body.appendChild(f), f.click(), window.URL.revokeObjectURL(c), document.body.removeChild(f);
      }
      try {
        const r = await z.mutateAsync({ vaultId: a, fileId: t.fileId });
        r.files && r.files.length > 0 && C((n) => {
          const i = new Map(n);
          for (const c of r.files) i.set(c.fileId, { fileId: c.fileId, maxDownloads: c.maxDownloads, downloadCount: c.downloadCount, remainingDownloads: c.remainingDownloads, isExhausted: c.isExhausted });
          return i;
        }), S({ title: "Download Complete", description: `Saved ${t.name}` }), r.vaultExhausted && (setTimeout(() => {
          S({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), M(true);
        }, 2e3), setTimeout(() => {
          T(true);
        }, 4500));
      } catch (r) {
        console.error("File download tracking failed", r), S({ title: "Download Complete", description: `Saved ${t.name} (tracking failed)` });
      }
    } catch (r) {
      console.error(r), S({ variant: "destructive", title: "Download Failed", description: "Encryption error or network failure." });
    } finally {
      k(null), j(0), N(null);
    }
  }, J = async () => {
    if (!u || !a || l.length === 0) return;
    const t = l.filter((m) => !v.get(m.fileId)?.isExhausted);
    if (t.length === 0) {
      S({ variant: "destructive", title: "No Downloads Available", description: "All files have reached their download limit." });
      return;
    }
    Z(true);
    try {
      for (let m = 0; m < t.length; m++) {
        const r = t[m];
        k(r.fileId), j(0);
        const n = ee(r.size);
        N(n ? "stream" : "memory");
        try {
          if (n) {
            const i = await O(r), c = await ue(r.fileId, u, i, { name: r.name, size: r.size, type: r.type, fileId: r.fileId, isCompressed: r.isCompressed }, (f) => {
              j(10 + f.progress * 0.9);
            });
            if (!c.success) throw new Error(c.error);
          } else {
            const i = [];
            let c = 0;
            for (let A = 0; A < r.chunks; A++) {
              const { downloadUrl: G } = await _.mutateAsync({ vaultId: a, fileId: r.fileId, chunkIndex: A }), H = await (await fetch(G)).arrayBuffer(), q = new Uint8Array(H.slice(0, 12)), ke = H.slice(12), de = await oe(ke, q, u, r.isCompressed);
              i.push(new Uint8Array(de)), c += de.byteLength, j(c / r.size * 100);
            }
            const f = new Blob(i, { type: r.type }), g = window.URL.createObjectURL(f), w = document.createElement("a");
            w.href = g, w.download = r.name, document.body.appendChild(w), w.click(), window.URL.revokeObjectURL(g), document.body.removeChild(w);
          }
        } catch (i) {
          console.error(`Failed to download ${r.name}:`, i), S({ variant: "destructive", title: "Download Failed", description: `Failed to download ${r.name}` });
        }
      }
      try {
        const m = t.map((n) => n.fileId), r = await z.mutateAsync({ vaultId: a, fileId: m[0], fileIds: m });
        r.files && r.files.length > 0 && C((n) => {
          const i = new Map(n);
          for (const c of r.files) i.set(c.fileId, { fileId: c.fileId, maxDownloads: c.maxDownloads, downloadCount: c.downloadCount, remainingDownloads: c.remainingDownloads, isExhausted: c.isExhausted });
          return i;
        }), S({ title: "Download Complete", description: `${t.length} file(s) downloaded.` }), r.vaultExhausted && (setTimeout(() => {
          S({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), M(true);
        }, 2e3), setTimeout(() => {
          T(true);
        }, 4500));
      } catch (m) {
        console.error("Batch tracking failed", m);
      }
    } finally {
      k(null), j(0), N(null), Z(false);
    }
  }, oe = (t, m, r, n) => new Promise((i, c) => {
    if (!I.current) return c("Worker not ready");
    const f = Math.random(), g = (w) => {
      w.data.id === f && (I.current?.removeEventListener("message", g), w.data.type === "error" ? c(w.data.error) : i(w.data.decryptedData));
    };
    I.current.addEventListener("message", g), I.current.postMessage({ type: "decrypt", data: t, iv: m, key: r, id: f, isCompressed: n }, [t]);
  });
  return B ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in duration-1000", children: e.jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [e.jsxs("div", { className: "w-20 h-20 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center mx-auto relative overflow-hidden group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent" }), e.jsx(re, { className: "w-10 h-10 text-muted-foreground/50" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("h1", { className: "text-3xl font-bold font-mono text-muted-foreground uppercase tracking-widest", children: "Link Terminated" }), e.jsx("p", { className: "text-zinc-500", children: "This vault has self-destructed. No data remains." })] }), e.jsx(F, { onClick: () => window.location.href = "/", variant: "outline", className: "border-zinc-800 hover:bg-zinc-900 hover:text-white", children: "Return to Safety" })] }) }) : U ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: e.jsx(se, { className: "w-10 h-10 text-primary animate-spin" }) }) : V || x ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4", children: e.jsxs("div", { className: "max-w-md w-full bg-card border border-destructive/30 rounded-xl p-8 text-center", children: [e.jsx("div", { className: "w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 text-destructive", children: e.jsx(K, { className: "w-8 h-8" }) }), e.jsx("h2", { className: "text-xl font-bold mb-2", children: "Access Denied" }), e.jsx("p", { className: "text-muted-foreground mb-6", children: x || V?.message || "Vault not found" }), e.jsx(F, { onClick: () => window.location.href = "/", variant: "outline", children: "Go Home" })] }) }) : e.jsx("div", { className: `min-h-screen bg-background p-4 md:p-8 flex flex-col ${R ? "burn-container" : ""}`, children: e.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 md:space-y-8 w-full flex-1", children: [e.jsxs("header", { className: "flex items-center justify-between mb-6 md:mb-8", children: [e.jsx(me, { href: "/", children: e.jsxs("div", { className: "flex items-center gap-3 cursor-pointer", children: [e.jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 overflow-hidden", children: e.jsx("img", { src: "/og-image.png", alt: "VaultBridge", className: "w-full h-full object-cover p-1" }) }), e.jsx("div", { children: e.jsxs("h1", { className: "text-lg md:text-xl font-bold font-mono tracking-tighter", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] }) })] }) }), e.jsx(me, { href: "/", children: e.jsxs(F, { variant: "ghost", size: "sm", className: "gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50", children: [e.jsx($e, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Return" })] }) })] }), y && e.jsx(tt, { vaultId: y.id, shortCode: y.shortCode, fullLink: window.location.href.split("#")[0], filesCount: l.length, totalSize: l.reduce((t, m) => t + m.size, 0), expiresAt: y.expiresAt, downloads: y.downloadCount, maxDownloads: y.maxDownloads }), e.jsxs("div", { className: "space-y-4", children: [e.jsx("h3", { className: "text-base md:text-lg font-bold font-mono uppercase tracking-wider text-muted-foreground mb-2 md:mb-4", children: "Encrypted Contents" }), h ? e.jsxs("div", { className: "p-6 md:p-8 text-center text-muted-foreground animate-pulse", children: [e.jsx(Ge, { className: "w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-50" }), e.jsx("p", { className: "text-sm md:text-base", children: "Decrypting metadata..." })] }) : e.jsxs(e.Fragment, { children: [l.map((t) => {
    const m = v.get(t.fileId), r = m?.remainingDownloads ?? 0, n = m?.maxDownloads ?? 0, i = m?.isExhausted ?? false;
    return e.jsxs(W.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: `bg-card border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors ${i ? "border-destructive/30 opacity-60" : "border-border hover:border-primary/30"}`, children: [e.jsxs("div", { className: "flex items-center gap-3 md:gap-4 overflow-hidden", children: [e.jsx("div", { className: "p-2 md:p-3 bg-secondary rounded-lg flex-shrink-0", children: e.jsx(Oe, { className: `w-5 h-5 md:w-6 md:h-6 ${i ? "text-destructive" : "text-primary"}` }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium truncate text-sm md:text-base", children: t.name }), e.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [e.jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [(t.size / (1024 * 1024)).toFixed(2), " MB \u2022 ", t.type || "Unknown"] }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }), e.jsxs("span", { className: `text-[10px] font-bold uppercase ${i ? "text-destructive" : r <= 1 ? "text-amber-400" : "text-primary"}`, children: [r, "/", n, " DL"] })] })] })] }), e.jsx("div", { className: "flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0", children: $ === t.fileId ? e.jsxs("div", { className: "w-full md:w-48 space-y-2", children: [e.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [e.jsxs("span", { children: [E === "stream" ? "Stream " : "", "Decrypting..."] }), e.jsxs("span", { children: [Math.round(P), "%"] })] }), e.jsx(Ne, { value: P, className: "h-1.5 md:h-2" })] }) : e.jsx(F, { onClick: () => Q(t), disabled: i || L, className: `w-full md:w-auto font-mono text-sm md:text-base h-10 md:h-11 ${i ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: i ? "Limit Reached" : ee(t.size) ? e.jsxs(e.Fragment, { children: [e.jsx(Me, { className: "w-4 h-4 mr-2 text-amber-500" }), "Download"] }) : e.jsxs(e.Fragment, { children: [e.jsx(ae, { className: "w-4 h-4 mr-2" }), "Download"] }) }) })] }, t.fileId);
  }), l.length > 1 && e.jsxs(e.Fragment, { children: [e.jsx(F, { onClick: J, disabled: L || $ !== null || Array.from(v.values()).every((t) => t.isExhausted) && v.size > 0, className: `w-full h-12 mt-4 font-mono text-sm md:text-base uppercase tracking-wider ${Array.from(v.values()).every((t) => t.isExhausted) && v.size > 0 ? "bg-muted text-muted-foreground cursor-not-allowed" : L ? "bg-primary/70 text-primary-foreground cursor-wait" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: L ? e.jsxs(e.Fragment, { children: [e.jsx(se, { className: "w-4 h-4 mr-2 animate-spin" }), "Downloading All..."] }) : Array.from(v.values()).every((t) => t.isExhausted) && v.size > 0 ? "All Limits Reached" : e.jsxs(e.Fragment, { children: [e.jsx(ae, { className: "w-4 h-4 mr-2" }), "Download All Files"] }) }), e.jsx("p", { className: "text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70" })] })] })] }), e.jsx("div", { className: "mt-12 text-center pb-8 opacity-70 hover:opacity-100 transition-opacity", children: e.jsxs("div", { className: "inline-flex flex-col items-center", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx(re, { className: "w-4 h-4 text-emerald-500" }), e.jsx("p", { className: "text-sm font-medium text-zinc-300", children: "Securely shared via VaultBridge" })] }), e.jsx("a", { href: "/", className: "text-xs text-primary hover:underline hover:text-emerald-400 transition-colors font-mono", children: "Free encrypted file sharing" })] }) })] }) });
}
export {
  ut as default
};
