import { c as Ie, r as l, j as e, am as Ce, a3 as we, m as X, l as Ee, an as Ae, B as F, a8 as de, e as te, A as Pe, ao as ce, ap as Le, af as Fe, ah as $e, f as Me, d as me, k as Re, aq as Te, aj as Ue } from "./index-ByPnYQL4.js";
import { I as Ve } from "./input-DolBa97i.js";
import { C as J, T as se } from "./triangle-alert-DeVGu1DU.js";
import { D as re, E as _e } from "./external-link-CWoGuLAF.js";
import { M as Oe } from "./mail-DFiQb-eb.js";
import { s as Y, i as ue } from "./downloadStream-BApq0bc3.js";
import { S as xe } from "./shield-check-BSGM-k8u.js";
import { F as Be } from "./file-O1zVvyH9.js";
import { Z as Ge } from "./zap-DvzBzPZR.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const He = Ie("LockOpen", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]]);
function qe(s, a = []) {
  let o = [];
  function c(f, h) {
    const m = l.createContext(h);
    m.displayName = f + "Context";
    const p = o.length;
    o = [...o, h];
    const k = (D) => {
      const { scope: S, children: A, ...b } = D, z = S?.[s]?.[p] || m, E = l.useMemo(() => b, Object.values(b));
      return e.jsx(z.Provider, { value: E, children: A });
    };
    k.displayName = f + "Provider";
    function $(D, S) {
      const A = S?.[s]?.[p] || m, b = l.useContext(A);
      if (b) return b;
      if (h !== void 0) return h;
      throw new Error(`\`${D}\` must be used within \`${f}\``);
    }
    return [k, $];
  }
  const x = () => {
    const f = o.map((h) => l.createContext(h));
    return function(m) {
      const p = m?.[s] || f;
      return l.useMemo(() => ({ [`__scope${s}`]: { ...m, [s]: p } }), [m, p]);
    };
  };
  return x.scopeName = s, [c, Ke(x, ...a)];
}
function Ke(...s) {
  const a = s[0];
  if (s.length === 1) return a;
  const o = () => {
    const c = s.map((x) => ({ useScope: x(), scopeName: x.scopeName }));
    return function(f) {
      const h = c.reduce((m, { useScope: p, scopeName: k }) => {
        const D = p(f)[`__scope${k}`];
        return { ...m, ...D };
      }, {});
      return l.useMemo(() => ({ [`__scope${a.scopeName}`]: h }), [h]);
    };
  };
  return o.scopeName = a.scopeName, o;
}
var We = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ve = We.reduce((s, a) => {
  const o = Ce(`Primitive.${a}`), c = l.forwardRef((x, f) => {
    const { asChild: h, ...m } = x, p = h ? o : a;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), e.jsx(p, { ...m, ref: f });
  });
  return c.displayName = `Primitive.${a}`, { ...s, [a]: c };
}, {}), ae = "Progress", ne = 100, [Xe] = qe(ae), [Ze, Qe] = Xe(ae), be = l.forwardRef((s, a) => {
  const { __scopeProgress: o, value: c = null, max: x, getValueLabel: f = Je, ...h } = s;
  (x || x === 0) && !pe(x) && console.error(Ye(`${x}`, "Progress"));
  const m = pe(x) ? x : ne;
  c !== null && !fe(c, m) && console.error(et(`${c}`, "Progress"));
  const p = fe(c, m) ? c : null, k = Z(p) ? f(p, m) : void 0;
  return e.jsx(Ze, { scope: o, value: p, max: m, children: e.jsx(ve.div, { "aria-valuemax": m, "aria-valuemin": 0, "aria-valuenow": Z(p) ? p : void 0, "aria-valuetext": k, role: "progressbar", "data-state": Ne(p, m), "data-value": p ?? void 0, "data-max": m, ...h, ref: a }) });
});
be.displayName = ae;
var ye = "ProgressIndicator", je = l.forwardRef((s, a) => {
  const { __scopeProgress: o, ...c } = s, x = Qe(ye, o);
  return e.jsx(ve.div, { "data-state": Ne(x.value, x.max), "data-value": x.value ?? void 0, "data-max": x.max, ...c, ref: a });
});
je.displayName = ye;
function Je(s, a) {
  return `${Math.round(s / a * 100)}%`;
}
function Ne(s, a) {
  return s == null ? "indeterminate" : s === a ? "complete" : "loading";
}
function Z(s) {
  return typeof s == "number";
}
function pe(s) {
  return Z(s) && !isNaN(s) && s > 0;
}
function fe(s, a) {
  return Z(s) && !isNaN(s) && s <= a && s >= 0;
}
function Ye(s, a) {
  return `Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ne}\`.`;
}
function et(s, a) {
  return `Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ne} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ke = be, tt = je;
const De = l.forwardRef(({ className: s, value: a, ...o }, c) => e.jsx(ke, { ref: c, className: we("relative h-4 w-full overflow-hidden rounded-full bg-secondary", s), ...o, children: e.jsx(tt, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (a || 0)}%)` } }) }));
De.displayName = ke.displayName;
const he = ["\u{1F510}", "\u{1F48E}", "\u{1F311}", "\u26A1", "\u{1F6E1}\uFE0F", "\u{1F52E}"];
function st({ shortCode: s, className: a, size: o = "md" }) {
  const c = parseInt(s, 36) % he.length, x = he[c], f = { sm: "w-8 h-8 text-lg", md: "w-12 h-12 text-2xl", lg: "w-16 h-16 text-3xl" };
  return e.jsx("div", { className: we("flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50", f[o], a), title: `Vault ${s}`, children: x });
}
function ee({ value: s, label: a }) {
  return e.jsxs("div", { className: "flex flex-col items-center gap-1", children: [e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-primary/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative w-12 h-14 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center overflow-hidden", children: [e.jsx(Pe, { mode: "popLayout", children: e.jsx(X.span, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: "font-mono text-2xl font-bold text-primary", children: s.toString().padStart(2, "0") }, s) }), e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 pointer-events-none" })] })] }), e.jsx("span", { className: "text-[10px] uppercase font-bold text-zinc-600 tracking-wider font-mono", children: a })] });
}
function ge() {
  return e.jsx("div", { className: "flex flex-col justify-start pt-4 h-14", children: e.jsxs("div", { className: "space-y-2 animate-pulse", children: [e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" }), e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" })] }) });
}
function rt({ vaultId: s, shortCode: a, fullLink: o, filesCount: c, totalSize: x, expiresAt: f, downloads: h, maxDownloads: m, onSendEmail: p, className: k, minimal: $ = false }) {
  const [D, S] = l.useState(false), [A, b] = l.useState(false), [z, E] = l.useState(null), [R, T] = l.useState(""), [_, U] = l.useState(false), { toast: y } = useToast();
  l.useEffect(() => {
    const j = () => {
      const P = (/* @__PURE__ */ new Date()).getTime(), M = new Date(f).getTime() - P;
      if (M <= 0) {
        E(null);
        return;
      }
      const L = Math.floor(M / (1e3 * 60 * 60)), H = Math.floor(M % (1e3 * 60 * 60) / (1e3 * 60)), Q = Math.floor(M % (1e3 * 60) / 1e3);
      E({ hours: L, minutes: H, seconds: Q });
    };
    j();
    const N = setInterval(j, 1e3);
    return () => clearInterval(N);
  }, [f]);
  const O = async (j, N) => {
    try {
      await navigator.clipboard.writeText(j), N === "link" ? (S(true), setTimeout(() => S(false), 2e3)) : (b(true), setTimeout(() => b(false), 2e3)), y({ title: "Copied!", description: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(J, { className: "w-4 h-4 text-primary" }), e.jsxs("span", { children: [N === "link" ? "Secure link" : "Access code", " copied to clipboard."] })] }) });
    } catch {
      y({ variant: "destructive", title: "Failed to copy" });
    }
  }, B = async () => {
    if (!(!R || !p)) {
      U(true);
      try {
        await p(R), T(""), y({ title: "Email Sent!", description: "Vault link sent successfully." });
      } catch {
        y({ variant: "destructive", title: "Failed to send email" });
      } finally {
        U(false);
      }
    }
  }, I = z === null, G = z ? z.hours === 0 && z.minutes < 60 : false;
  return e.jsxs(X.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4, ease: "easeOut" }, className: `glass-card overflow-hidden ring-1 ring-white/10 ${k}`, children: [e.jsx("div", { className: "relative h-1 w-full bg-zinc-900 pointer-events-none overflow-hidden", children: e.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-transparent ${I ? "via-rose-500" : "via-primary"} to-transparent w-1/2 animate-shimmer opacity-70` }) }), e.jsxs("div", { className: "p-5 md:p-8", children: [!$ && e.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-10", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(st, { shortCode: a, size: "lg" }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("h2", { className: "text-xl md:text-2xl font-bold font-display tracking-tight text-foreground", children: "SECURE VAULT" }), e.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${I ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-primary/10 border-primary/20 text-primary"}`, children: I ? "Archived" : "Active" })] }), e.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground flex items-center gap-2", children: [e.jsx("span", { className: "font-medium text-foreground", children: c }), " ", c === 1 ? "file" : "files", e.jsx("span", { className: "w-1 h-1 rounded-full bg-zinc-700" }), e.jsx("span", { className: "font-medium text-foreground", children: (x / (1024 * 1024)).toFixed(2) }), " MB"] })] })] }), e.jsxs("div", { className: "flex flex-col items-end w-full md:w-auto mt-2 md:mt-0", children: [e.jsxs("div", { className: `flex items-center gap-2 mb-2 text-xs uppercase font-bold tracking-widest ${G || I ? "text-rose-500" : "text-primary"}`, children: [e.jsx(Ee, { className: "w-3.5 h-3.5" }), I ? "Vault Expired" : "Auto-Purge In"] }), I ? e.jsx("div", { className: "h-12 md:h-14 flex items-center px-4 bg-rose-500/10 border border-rose-500/20 rounded-lg w-full md:w-auto justify-center", children: e.jsx("span", { className: "font-mono text-lg md:text-xl font-bold text-rose-500 tracking-widest", children: "DELETED" }) }) : e.jsxs("div", { className: "flex items-center justify-center gap-1.5 md:gap-2 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/50 backdrop-blur-sm w-full md:w-auto", children: [e.jsx(ee, { value: z?.hours || 0, label: "HRS" }), e.jsx(ge, {}), e.jsx(ee, { value: z?.minutes || 0, label: "MIN" }), e.jsx(ge, {}), e.jsx(ee, { value: z?.seconds || 0, label: "SEC" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8", children: [e.jsxs("div", { className: "flex flex-col items-center order-1 lg:order-none", children: [e.jsxs("div", { className: "relative group w-full max-w-[240px] lg:max-w-none", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-tr from-primary/50 to-emerald-600/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative bg-zinc-950 p-4 md:p-6 rounded-xl border border-primary/20 shadow-2xl overflow-hidden aspect-square flex items-center justify-center", children: [e.jsx(X.div, { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-10", animate: { top: ["-100%", "100%"] }, transition: { duration: 3, repeat: 1 / 0, ease: "linear" } }), e.jsx("div", { className: "bg-white p-2 rounded-lg relative z-0 w-full h-full flex items-center justify-center", children: e.jsx(Ae, { value: o, size: 200, className: "w-full h-full", level: "H", includeMargin: true, bgColor: "#FFFFFF", fgColor: "#16a34a", imageSettings: { src: "/vault-qr-icon.png", height: 48, width: 48, excavate: true } }) })] })] }), e.jsxs("p", { className: "mt-4 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [e.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), "Scan to Access"] })] }), e.jsxs("div", { className: "lg:col-span-2 space-y-4 md:space-y-5 order-2 lg:order-none", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative group overflow-hidden flex flex-col justify-between min-h-[110px]", children: [e.jsx("div", { className: "absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity z-10", children: e.jsx(F, { variant: "ghost", size: "icon", onClick: () => O(a, "code"), className: "h-8 w-8 hover:bg-zinc-800 text-zinc-400 hover:text-white", children: A ? e.jsx(J, { className: "w-4 h-4 text-primary" }) : e.jsx(de, { className: "w-4 h-4" }) }) }), e.jsx("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1", children: "Access PIN" }), e.jsx("div", { className: "flex-1 flex items-center justify-center w-full", children: e.jsx("div", { className: "font-mono text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-widest drop-shadow-lg whitespace-nowrap", children: a }) })] }), e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative flex flex-col justify-between min-h-[110px]", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider flex items-center gap-1.5", children: [e.jsx(re, { className: "w-3 h-3" }), "Downloads"] }), e.jsxs("span", { className: `font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${h >= m ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-300"}`, children: [m - h, " LEFT"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "flex gap-1 h-3 w-full", children: Array.from({ length: Math.min(m, 20) }).map((j, N) => {
    const P = N < h;
    return e.jsx("div", { className: `flex-1 rounded-sm transition-all duration-300 ${P ? "bg-zinc-800" : "bg-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]"}` }, N);
  }) }), e.jsxs("div", { className: "flex justify-between items-center text-[10px] font-mono text-zinc-500", children: [e.jsx("span", { children: "0" }), e.jsxs("span", { children: [h, " / ", m, " used"] }), e.jsx("span", { children: m })] })] })] })] }), e.jsx("div", { children: e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative flex items-center bg-zinc-900/80 border border-zinc-700 hover:border-primary/50 rounded-xl p-1 pr-2 transition-colors", children: [e.jsx("div", { className: "h-10 w-10 flex items-center justify-center text-zinc-500 shrink-0", children: e.jsx(_e, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "flex-1 min-w-0 px-2 overflow-hidden", children: [e.jsx("div", { className: "text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5", children: "Secure Link" }), e.jsx("div", { className: "text-sm font-mono text-zinc-300 truncate selection:bg-primary/30", children: o })] }), e.jsxs(F, { variant: "secondary", size: "sm", onClick: () => O(o, "link"), className: "h-9 gap-2 shadow-sm font-medium shrink-0", children: [D ? e.jsx(J, { className: "w-3.5 h-3.5" }) : e.jsx(de, { className: "w-3.5 h-3.5" }), e.jsx("span", { className: "hidden md:inline", children: D ? "Copied" : "Copy" })] })] })] }) }), p && !I && e.jsxs("div", { className: "pt-4 mt-2", children: [e.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [e.jsx("div", { className: "p-1.5 bg-zinc-800 rounded-md", children: e.jsx(Oe, { className: "w-4 h-4 text-zinc-400" }) }), e.jsx("span", { className: "text-sm font-medium text-foreground", children: "Secure Send" })] }), e.jsxs("div", { className: "flex flex-col md:flex-row gap-2", children: [e.jsx(Ve, { type: "email", placeholder: "Enter recipient email...", value: R, onChange: (j) => T(j.target.value), className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 focus:border-primary/50 transition-colors" }), e.jsx(F, { onClick: B, disabled: !R || _, className: "w-full md:w-auto min-w-[100px] cyber-btn", children: _ ? e.jsx(te, { className: "w-4 h-4 animate-spin" }) : "Send" })] }), e.jsx("p", { className: "text-[11px] text-zinc-500 mt-2 pl-1", children: "* Encrypted link sent only. No files attached." })] })] })] }), e.jsxs("div", { className: "mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start gap-4", children: [e.jsx("div", { className: "hidden md:block p-2 bg-rose-500/10 rounded-lg shrink-0", children: e.jsx(se, { className: "w-5 h-5 text-rose-500" }) }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 md:hidden mb-2 text-rose-500 font-bold text-sm", children: [e.jsx(se, { className: "w-4 h-4" }), e.jsx("span", { children: "Self-Destruction Protocol" })] }), e.jsx("h4", { className: "hidden md:block text-sm font-bold text-rose-500 mb-1", children: "Self-Destruction Protocol Active" }), e.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed max-w-2xl", children: ["This vault is encrypted with a unique key. Once the limit is reached or timer expires, data is permanently purged.", e.jsx("span", { className: "text-zinc-300 font-medium", children: " No recovery option." })] })] })] })] })] });
}
function xt() {
  const [, s] = ce("/v/:id"), [, a] = ce("/download/:id"), o = s?.id || a?.id, [c, x] = l.useState(null), [f, h] = l.useState([]), [m, p] = l.useState(true), [k, $] = l.useState(null), [D, S] = l.useState(null), [A, b] = l.useState(0), [z, E] = l.useState(null), [R, T] = l.useState(false), [_, U] = l.useState(false), { data: y, isLoading: O, error: B } = Le(o || ""), I = Fe(), G = $e(), { toast: j } = Me(), [N, P] = l.useState(/* @__PURE__ */ new Map()), [V, M] = l.useState(false), L = l.useRef(null);
  l.useEffect(() => (L.current = new Worker(new URL("/assets/encryption.worker-Dwb5LFOH.js", import.meta.url), { type: "module" }), () => L.current?.terminate()), []), l.useEffect(() => {
    const u = window.location.hash.replace("#key=", "");
    if (!u) {
      $("Missing decryption key. Invalid link."), p(false);
      return;
    }
    y && (async () => {
      if (y) try {
        const n = await Te(u);
        x(n);
        const d = (await Ue(y.encryptedMetadata, n)).map((w) => {
          const v = y.files.find((C) => C.fileId === w.fileId);
          return { ...w, chunks: v?.chunkCount || 0, isCompressed: v?.isCompressed || false };
        });
        h(d);
        const g = /* @__PURE__ */ new Map();
        for (const w of y.files) {
          const v = w.maxDownloads || y.maxDownloads || 5, C = w.downloadCount || 0;
          g.set(w.fileId, { fileId: w.fileId, maxDownloads: v, downloadCount: C, remainingDownloads: Math.max(0, v - C), isExhausted: C >= v });
        }
        P(g), p(false);
      } catch (n) {
        console.error(n), $("Failed to decrypt vault. Key may be invalid."), p(false);
      }
    })();
  }, [y]);
  const H = async (t) => {
    const u = [];
    for (let n = 0; n < t.chunks; n += 10) {
      const i = [];
      for (let g = 0; g < 10 && n + g < t.chunks; g++) i.push(I.mutateAsync({ vaultId: o, fileId: t.fileId, chunkIndex: n + g }).then((w) => ({ index: n + g, downloadUrl: w.downloadUrl })));
      const d = await Promise.all(i);
      u.push(...d), b(n / t.chunks * 10);
    }
    return u.sort((n, i) => n.index - i.index);
  }, Q = async (t) => {
    if (!c || !o) return;
    S(t.fileId), b(0);
    const u = Y(t.size);
    E(u ? "stream" : "memory");
    try {
      if (u) {
        j({ title: "Optimizing Download", description: "Preparing secure stream..." });
        const r = await H(t), n = await ue(t.fileId, c, r, { name: t.name, size: t.size, type: t.type, fileId: t.fileId, isCompressed: t.isCompressed }, (i) => {
          b(10 + i.progress * 0.9);
        });
        if (!n.success) throw new Error(n.error);
      } else {
        const r = [];
        let n = 0;
        for (let w = 0; w < t.chunks; w++) {
          const { downloadUrl: v } = await I.mutateAsync({ vaultId: o, fileId: t.fileId, chunkIndex: w }), q = await (await fetch(v)).arrayBuffer(), oe = new Uint8Array(q.slice(0, 12)), K = q.slice(12), W = await ie(K, oe, c, t.isCompressed);
          r.push(new Uint8Array(W)), n += W.byteLength, b(n / t.size * 100);
        }
        const i = new Blob(r, { type: t.type }), d = window.URL.createObjectURL(i), g = document.createElement("a");
        g.href = d, g.download = t.name, document.body.appendChild(g), g.click(), window.URL.revokeObjectURL(d), document.body.removeChild(g);
      }
      try {
        const r = await G.mutateAsync({ vaultId: o, fileId: t.fileId });
        r.files && r.files.length > 0 && P((n) => {
          const i = new Map(n);
          for (const d of r.files) i.set(d.fileId, { fileId: d.fileId, maxDownloads: d.maxDownloads, downloadCount: d.downloadCount, remainingDownloads: d.remainingDownloads, isExhausted: d.isExhausted });
          return i;
        }), j({ title: "Download Complete", description: `Saved ${t.name}` }), r.vaultExhausted && (setTimeout(() => {
          j({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), T(true);
        }, 2e3), setTimeout(() => {
          U(true);
        }, 4500));
      } catch (r) {
        console.error("File download tracking failed", r), j({ title: "Download Complete", description: `Saved ${t.name} (tracking failed)` });
      }
    } catch (r) {
      console.error(r), j({ variant: "destructive", title: "Download Failed", description: "Encryption error or network failure." });
    } finally {
      S(null), b(0), E(null);
    }
  }, Se = async () => {
    if (!c || !o || f.length === 0) return;
    const t = f.filter((u) => !N.get(u.fileId)?.isExhausted);
    if (t.length === 0) {
      j({ variant: "destructive", title: "No Downloads Available", description: "All files have reached their download limit." });
      return;
    }
    M(true);
    try {
      for (let u = 0; u < t.length; u++) {
        const r = t[u];
        S(r.fileId), b(0);
        const n = Y(r.size);
        E(n ? "stream" : "memory");
        try {
          if (n) {
            const i = await H(r), d = await ue(r.fileId, c, i, { name: r.name, size: r.size, type: r.type, fileId: r.fileId, isCompressed: r.isCompressed }, (g) => {
              b(10 + g.progress * 0.9);
            });
            if (!d.success) throw new Error(d.error);
          } else {
            const i = [];
            let d = 0;
            for (let C = 0; C < r.chunks; C++) {
              const { downloadUrl: q } = await I.mutateAsync({ vaultId: o, fileId: r.fileId, chunkIndex: C }), K = await (await fetch(q)).arrayBuffer(), W = new Uint8Array(K.slice(0, 12)), ze = K.slice(12), le = await ie(ze, W, c, r.isCompressed);
              i.push(new Uint8Array(le)), d += le.byteLength, b(d / r.size * 100);
            }
            const g = new Blob(i, { type: r.type }), w = window.URL.createObjectURL(g), v = document.createElement("a");
            v.href = w, v.download = r.name, document.body.appendChild(v), v.click(), window.URL.revokeObjectURL(w), document.body.removeChild(v);
          }
        } catch (i) {
          console.error(`Failed to download ${r.name}:`, i), j({ variant: "destructive", title: "Download Failed", description: `Failed to download ${r.name}` });
        }
      }
      try {
        const u = t.map((n) => n.fileId), r = await G.mutateAsync({ vaultId: o, fileId: u[0], fileIds: u });
        r.files && r.files.length > 0 && P((n) => {
          const i = new Map(n);
          for (const d of r.files) i.set(d.fileId, { fileId: d.fileId, maxDownloads: d.maxDownloads, downloadCount: d.downloadCount, remainingDownloads: d.remainingDownloads, isExhausted: d.isExhausted });
          return i;
        }), j({ title: "Download Complete", description: `${t.length} file(s) downloaded.` }), r.vaultExhausted && (setTimeout(() => {
          j({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), T(true);
        }, 2e3), setTimeout(() => {
          U(true);
        }, 4500));
      } catch (u) {
        console.error("Batch tracking failed", u);
      }
    } finally {
      S(null), b(0), E(null), M(false);
    }
  }, ie = (t, u, r, n) => new Promise((i, d) => {
    if (!L.current) return d("Worker not ready");
    const g = Math.random(), w = (v) => {
      v.data.id === g && (L.current?.removeEventListener("message", w), v.data.type === "error" ? d(v.data.error) : i(v.data.decryptedData));
    };
    L.current.addEventListener("message", w), L.current.postMessage({ type: "decrypt", data: t, iv: u, key: r, id: g, isCompressed: n }, [t]);
  });
  return _ ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in duration-1000", children: e.jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [e.jsxs("div", { className: "w-20 h-20 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center mx-auto relative overflow-hidden group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent" }), e.jsx(xe, { className: "w-10 h-10 text-muted-foreground/50" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("h1", { className: "text-3xl font-bold font-mono text-muted-foreground uppercase tracking-widest", children: "Link Terminated" }), e.jsx("p", { className: "text-zinc-500", children: "This vault has self-destructed. No data remains." })] }), e.jsx(F, { onClick: () => window.location.href = "/", variant: "outline", className: "border-zinc-800 hover:bg-zinc-900 hover:text-white", children: "Return to Safety" })] }) }) : O ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: e.jsx(te, { className: "w-10 h-10 text-primary animate-spin" }) }) : B || k ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4", children: e.jsxs("div", { className: "max-w-md w-full bg-card border border-destructive/30 rounded-xl p-8 text-center", children: [e.jsx("div", { className: "w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 text-destructive", children: e.jsx(se, { className: "w-8 h-8" }) }), e.jsx("h2", { className: "text-xl font-bold mb-2", children: "Access Denied" }), e.jsx("p", { className: "text-muted-foreground mb-6", children: k || B?.message || "Vault not found" }), e.jsx(F, { onClick: () => window.location.href = "/", variant: "outline", children: "Go Home" })] }) }) : e.jsx("div", { className: `min-h-screen bg-background p-4 md:p-8 flex flex-col ${R ? "burn-container" : ""}`, children: e.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 md:space-y-8 w-full flex-1", children: [e.jsxs("header", { className: "flex items-center justify-between mb-6 md:mb-8", children: [e.jsx(me, { href: "/", children: e.jsxs("div", { className: "flex items-center gap-3 cursor-pointer", children: [e.jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 overflow-hidden", children: e.jsx("img", { src: "/icon-192x192.png", alt: "VaultBridge", className: "w-full h-full object-cover p-1" }) }), e.jsx("div", { children: e.jsxs("h1", { className: "text-lg md:text-xl font-bold font-mono tracking-tighter", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] }) })] }) }), e.jsx(me, { href: "/", children: e.jsxs(F, { variant: "ghost", size: "sm", className: "gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50", children: [e.jsx(Re, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Return" })] }) })] }), y && e.jsx(rt, { vaultId: y.id, shortCode: y.shortCode, fullLink: window.location.href.split("#")[0], filesCount: f.length, totalSize: f.reduce((t, u) => t + u.size, 0), expiresAt: y.expiresAt, downloads: y.downloadCount, maxDownloads: y.maxDownloads }), e.jsxs("div", { className: "space-y-4", children: [e.jsx("h3", { className: "text-base md:text-lg font-bold font-mono uppercase tracking-wider text-muted-foreground mb-2 md:mb-4", children: "Encrypted Contents" }), m ? e.jsxs("div", { className: "p-6 md:p-8 text-center text-muted-foreground animate-pulse", children: [e.jsx(He, { className: "w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-50" }), e.jsx("p", { className: "text-sm md:text-base", children: "Decrypting metadata..." })] }) : e.jsxs(e.Fragment, { children: [f.map((t) => {
    const u = N.get(t.fileId), r = u?.remainingDownloads ?? 0, n = u?.maxDownloads ?? 0, i = u?.isExhausted ?? false;
    return e.jsxs(X.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: `bg-card border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors ${i ? "border-destructive/30 opacity-60" : "border-border hover:border-primary/30"}`, children: [e.jsxs("div", { className: "flex items-center gap-3 md:gap-4 overflow-hidden", children: [e.jsx("div", { className: "p-2 md:p-3 bg-secondary rounded-lg flex-shrink-0", children: e.jsx(Be, { className: `w-5 h-5 md:w-6 md:h-6 ${i ? "text-destructive" : "text-primary"}` }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium truncate text-sm md:text-base", children: t.name }), e.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [e.jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [(t.size / (1024 * 1024)).toFixed(2), " MB \u2022 ", t.type || "Unknown"] }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }), e.jsxs("span", { className: `text-[10px] font-bold uppercase ${i ? "text-destructive" : r <= 1 ? "text-amber-400" : "text-primary"}`, children: [r, "/", n, " DL"] })] })] })] }), e.jsx("div", { className: "flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0", children: D === t.fileId ? e.jsxs("div", { className: "w-full md:w-48 space-y-2", children: [e.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [e.jsxs("span", { children: [z === "stream" ? "Stream " : "", "Decrypting..."] }), e.jsxs("span", { children: [Math.round(A), "%"] })] }), e.jsx(De, { value: A, className: "h-1.5 md:h-2" })] }) : e.jsx(F, { onClick: () => Q(t), disabled: i || V, className: `w-full md:w-auto font-mono text-sm md:text-base h-10 md:h-11 ${i ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: i ? "Limit Reached" : Y(t.size) ? e.jsxs(e.Fragment, { children: [e.jsx(Ge, { className: "w-4 h-4 mr-2 text-amber-500" }), "Download"] }) : e.jsxs(e.Fragment, { children: [e.jsx(re, { className: "w-4 h-4 mr-2" }), "Download"] }) }) })] }, t.fileId);
  }), f.length > 1 && e.jsxs(e.Fragment, { children: [e.jsx(F, { onClick: Se, disabled: V || D !== null || Array.from(N.values()).every((t) => t.isExhausted) && N.size > 0, className: `w-full h-12 mt-4 font-mono text-sm md:text-base uppercase tracking-wider ${Array.from(N.values()).every((t) => t.isExhausted) && N.size > 0 ? "bg-muted text-muted-foreground cursor-not-allowed" : V ? "bg-primary/70 text-primary-foreground cursor-wait" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: V ? e.jsxs(e.Fragment, { children: [e.jsx(te, { className: "w-4 h-4 mr-2 animate-spin" }), "Downloading All..."] }) : Array.from(N.values()).every((t) => t.isExhausted) && N.size > 0 ? "All Limits Reached" : e.jsxs(e.Fragment, { children: [e.jsx(re, { className: "w-4 h-4 mr-2" }), "Download All Files"] }) }), e.jsx("p", { className: "text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70" })] })] })] }), e.jsx("div", { className: "mt-12 text-center pb-8 opacity-70 hover:opacity-100 transition-opacity", children: e.jsxs("div", { className: "inline-flex flex-col items-center", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx(xe, { className: "w-4 h-4 text-emerald-500" }), e.jsx("p", { className: "text-sm font-medium text-zinc-300", children: "Securely shared via VaultBridge" })] }), e.jsx("a", { href: "/", className: "text-xs text-primary hover:underline hover:text-emerald-400 transition-colors font-mono", children: "Free encrypted file sharing" })] }) })] }) });
}
export {
  xt as default
};
