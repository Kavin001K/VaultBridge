import { c as Se, r as o, j as e, an as Ce, a5 as Ie, f as ge, m as Z, l as Ee, ao as Ae, B as F, a9 as ce, e as se, A as Pe, ap as me, aq as Le, ae as Fe, ag as $e, L as ue, k as Me, ar as Re, aj as Ue } from "./index-B5eeqRPK.js";
import { I as Te } from "./input-C-pTQCG0.js";
import { H as Ve, Z as _e } from "./zap-CO9dCU-d.js";
import { T as X, C as Y } from "./triangle-alert-bbypd66C.js";
import { S as re } from "./shield-check-DgUGgLfn.js";
import { D as ae, E as Be } from "./external-link-BLYwroqP.js";
import { M as Oe } from "./mail-CdmXftMJ.js";
import { s as ee, i as xe } from "./downloadStream-DsUNh4ar.js";
import { F as Ge } from "./file-Cx8dJWJZ.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const He = Se("LockOpen", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]]);
function qe(s, a = []) {
  let d = [];
  function u(h, f) {
    const c = o.createContext(f);
    c.displayName = h + "Context";
    const x = d.length;
    d = [...d, f];
    const z = (D) => {
      const { scope: S, children: A, ...b } = D, C = S?.[s]?.[x] || c, E = o.useMemo(() => b, Object.values(b));
      return e.jsx(C.Provider, { value: E, children: A });
    };
    z.displayName = h + "Provider";
    function $(D, S) {
      const A = S?.[s]?.[x] || c, b = o.useContext(A);
      if (b) return b;
      if (f !== void 0) return f;
      throw new Error(`\`${D}\` must be used within \`${h}\``);
    }
    return [z, $];
  }
  const p = () => {
    const h = d.map((f) => o.createContext(f));
    return function(c) {
      const x = c?.[s] || h;
      return o.useMemo(() => ({ [`__scope${s}`]: { ...c, [s]: x } }), [c, x]);
    };
  };
  return p.scopeName = s, [u, Ke(p, ...a)];
}
function Ke(...s) {
  const a = s[0];
  if (s.length === 1) return a;
  const d = () => {
    const u = s.map((p) => ({ useScope: p(), scopeName: p.scopeName }));
    return function(h) {
      const f = u.reduce((c, { useScope: x, scopeName: z }) => {
        const D = x(h)[`__scope${z}`];
        return { ...c, ...D };
      }, {});
      return o.useMemo(() => ({ [`__scope${a.scopeName}`]: f }), [f]);
    };
  };
  return d.scopeName = a.scopeName, d;
}
var We = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], we = We.reduce((s, a) => {
  const d = Ce(`Primitive.${a}`), u = o.forwardRef((p, h) => {
    const { asChild: f, ...c } = p, x = f ? d : a;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), e.jsx(x, { ...c, ref: h });
  });
  return u.displayName = `Primitive.${a}`, { ...s, [a]: u };
}, {}), ne = "Progress", ie = 100, [Xe] = qe(ne), [Ze, Qe] = Xe(ne), ve = o.forwardRef((s, a) => {
  const { __scopeProgress: d, value: u = null, max: p, getValueLabel: h = Je, ...f } = s;
  (p || p === 0) && !pe(p) && console.error(Ye(`${p}`, "Progress"));
  const c = pe(p) ? p : ie;
  u !== null && !he(u, c) && console.error(et(`${u}`, "Progress"));
  const x = he(u, c) ? u : null, z = Q(x) ? h(x, c) : void 0;
  return e.jsx(Ze, { scope: d, value: x, max: c, children: e.jsx(we.div, { "aria-valuemax": c, "aria-valuemin": 0, "aria-valuenow": Q(x) ? x : void 0, "aria-valuetext": z, role: "progressbar", "data-state": je(x, c), "data-value": x ?? void 0, "data-max": c, ...f, ref: a }) });
});
ve.displayName = ne;
var be = "ProgressIndicator", ye = o.forwardRef((s, a) => {
  const { __scopeProgress: d, ...u } = s, p = Qe(be, d);
  return e.jsx(we.div, { "data-state": je(p.value, p.max), "data-value": p.value ?? void 0, "data-max": p.max, ...u, ref: a });
});
ye.displayName = be;
function Je(s, a) {
  return `${Math.round(s / a * 100)}%`;
}
function je(s, a) {
  return s == null ? "indeterminate" : s === a ? "complete" : "loading";
}
function Q(s) {
  return typeof s == "number";
}
function pe(s) {
  return Q(s) && !isNaN(s) && s > 0;
}
function he(s, a) {
  return Q(s) && !isNaN(s) && s <= a && s >= 0;
}
function Ye(s, a) {
  return `Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ie}\`.`;
}
function et(s, a) {
  return `Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ie} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ne = ve, tt = ye;
const ke = o.forwardRef(({ className: s, value: a, ...d }, u) => e.jsx(Ne, { ref: u, className: Ie("relative h-4 w-full overflow-hidden rounded-full bg-secondary", s), ...d, children: e.jsx(tt, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (a || 0)}%)` } }) }));
ke.displayName = Ne.displayName;
function te({ value: s, label: a }) {
  return e.jsxs("div", { className: "flex flex-col items-center gap-1", children: [e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-primary/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative w-12 h-14 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center overflow-hidden", children: [e.jsx(Pe, { mode: "popLayout", children: e.jsx(Z.span, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: "font-mono text-2xl font-bold text-primary", children: s.toString().padStart(2, "0") }, s) }), e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 pointer-events-none" })] })] }), e.jsx("span", { className: "text-[10px] uppercase font-bold text-zinc-600 tracking-wider font-mono", children: a })] });
}
function fe() {
  return e.jsx("div", { className: "flex flex-col justify-start pt-4 h-14", children: e.jsxs("div", { className: "space-y-2 animate-pulse", children: [e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" }), e.jsx("div", { className: "w-1 h-1 bg-zinc-600 rounded-full" })] }) });
}
function st({ vaultId: s, shortCode: a, fullLink: d, filesCount: u, totalSize: p, expiresAt: h, downloads: f, maxDownloads: c, onSendEmail: x, className: z, minimal: $ = false }) {
  const [D, S] = o.useState(false), [A, b] = o.useState(false), [C, E] = o.useState(null), [R, U] = o.useState(""), [_, T] = o.useState(false), { toast: y } = ge();
  o.useEffect(() => {
    const j = () => {
      const P = (/* @__PURE__ */ new Date()).getTime(), M = new Date(h).getTime() - P;
      if (M <= 0) {
        E(null);
        return;
      }
      const L = Math.floor(M / (1e3 * 60 * 60)), H = Math.floor(M % (1e3 * 60 * 60) / (1e3 * 60)), J = Math.floor(M % (1e3 * 60) / 1e3);
      E({ hours: L, minutes: H, seconds: J });
    };
    j();
    const N = setInterval(j, 1e3);
    return () => clearInterval(N);
  }, [h]);
  const B = async (j, N) => {
    try {
      await navigator.clipboard.writeText(j), N === "link" ? (S(true), setTimeout(() => S(false), 2e3)) : (b(true), setTimeout(() => b(false), 2e3)), y({ title: "Copied!", description: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Y, { className: "w-4 h-4 text-primary" }), e.jsxs("span", { children: [N === "link" ? "Secure link" : "Access code", " copied to clipboard."] })] }) });
    } catch {
      y({ variant: "destructive", title: "Failed to copy" });
    }
  }, O = async () => {
    if (!(!R || !x)) {
      T(true);
      try {
        await x(R), U(""), y({ title: "Email Sent!", description: "Vault link sent successfully." });
      } catch {
        y({ variant: "destructive", title: "Failed to send email" });
      } finally {
        T(false);
      }
    }
  }, k = C === null, G = C ? C.hours === 0 && C.minutes < 60 : false;
  return e.jsxs(Z.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4, ease: "easeOut" }, className: `glass-card overflow-hidden ring-1 ring-white/10 ${z}`, children: [e.jsx("div", { className: "relative h-1 w-full bg-zinc-900 pointer-events-none overflow-hidden", children: e.jsx("div", { className: `absolute inset-0 bg-gradient-to-r from-transparent ${k ? "via-rose-500" : "via-primary"} to-transparent w-1/2 animate-shimmer opacity-70` }) }), e.jsxs("div", { className: "p-5 md:p-8", children: [!$ && e.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-10", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "relative shrink-0", children: [e.jsx("div", { className: "w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 shadow-inner", children: e.jsx(Ve, { className: `w-7 h-7 md:w-8 md:h-8 ${k ? "text-rose-500" : "text-primary"}` }) }), e.jsx("div", { className: "absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1 border border-zinc-800", children: k ? e.jsx(X, { className: "w-3 h-3 md:w-4 md:h-4 text-rose-500" }) : e.jsx(re, { className: "w-3 h-3 md:w-4 md:h-4 text-primary" }) })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("h2", { className: "text-xl md:text-2xl font-bold font-mono tracking-tight text-foreground", children: "SECURE VAULT" }), e.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${k ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-primary/10 border-primary/20 text-primary"}`, children: k ? "Archived" : "Active" })] }), e.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground flex items-center gap-2", children: [e.jsx("span", { className: "font-medium text-foreground", children: u }), " ", u === 1 ? "file" : "files", e.jsx("span", { className: "w-1 h-1 rounded-full bg-zinc-700" }), e.jsx("span", { className: "font-medium text-foreground", children: (p / (1024 * 1024)).toFixed(2) }), " MB"] })] })] }), e.jsxs("div", { className: "flex flex-col items-end w-full md:w-auto mt-2 md:mt-0", children: [e.jsxs("div", { className: `flex items-center gap-2 mb-2 text-xs uppercase font-bold tracking-widest ${G || k ? "text-rose-500" : "text-primary"}`, children: [e.jsx(Ee, { className: "w-3.5 h-3.5" }), k ? "Vault Expired" : "Auto-Purge In"] }), k ? e.jsx("div", { className: "h-12 md:h-14 flex items-center px-4 bg-rose-500/10 border border-rose-500/20 rounded-lg w-full md:w-auto justify-center", children: e.jsx("span", { className: "font-mono text-lg md:text-xl font-bold text-rose-500 tracking-widest", children: "DELETED" }) }) : e.jsxs("div", { className: "flex items-center justify-center gap-1.5 md:gap-2 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/50 backdrop-blur-sm w-full md:w-auto", children: [e.jsx(te, { value: C?.hours || 0, label: "HRS" }), e.jsx(fe, {}), e.jsx(te, { value: C?.minutes || 0, label: "MIN" }), e.jsx(fe, {}), e.jsx(te, { value: C?.seconds || 0, label: "SEC" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8", children: [e.jsxs("div", { className: "flex flex-col items-center order-1 lg:order-none", children: [e.jsxs("div", { className: "relative group w-full max-w-[240px] lg:max-w-none", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-tr from-primary/50 to-emerald-600/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative bg-zinc-950 p-4 md:p-6 rounded-xl border border-primary/20 shadow-2xl overflow-hidden aspect-square flex items-center justify-center", children: [e.jsx(Z.div, { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-10", animate: { top: ["-100%", "100%"] }, transition: { duration: 3, repeat: 1 / 0, ease: "linear" } }), e.jsx("div", { className: "bg-white p-2 rounded-lg relative z-0 w-full h-full flex items-center justify-center", children: e.jsx(Ae, { value: d, size: 200, className: "w-full h-full", level: "H", includeMargin: true, bgColor: "#FFFFFF", fgColor: "#16a34a", imageSettings: { src: "/vault-qr-icon.png", height: 48, width: 48, excavate: true } }) })] })] }), e.jsxs("p", { className: "mt-4 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2", children: [e.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), "Scan to Access"] })] }), e.jsxs("div", { className: "lg:col-span-2 space-y-4 md:space-y-5 order-2 lg:order-none", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative group overflow-hidden flex flex-col justify-between min-h-[110px]", children: [e.jsx("div", { className: "absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity z-10", children: e.jsx(F, { variant: "ghost", size: "icon", onClick: () => B(a, "code"), className: "h-8 w-8 hover:bg-zinc-800 text-zinc-400 hover:text-white", children: A ? e.jsx(Y, { className: "w-4 h-4 text-primary" }) : e.jsx(ce, { className: "w-4 h-4" }) }) }), e.jsx("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1", children: "Access PIN" }), e.jsx("div", { className: "flex-1 flex items-center justify-center w-full", children: e.jsx("div", { className: "font-mono text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-widest drop-shadow-lg whitespace-nowrap", children: a }) })] }), e.jsxs("div", { className: "p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative flex flex-col justify-between min-h-[110px]", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("div", { className: "text-[10px] uppercase font-bold text-zinc-500 tracking-wider flex items-center gap-1.5", children: [e.jsx(ae, { className: "w-3 h-3" }), "Downloads"] }), e.jsxs("span", { className: `font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${f >= c ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-300"}`, children: [c - f, " LEFT"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "flex gap-1 h-3 w-full", children: Array.from({ length: Math.min(c, 20) }).map((j, N) => {
    const P = N < f;
    return e.jsx("div", { className: `flex-1 rounded-sm transition-all duration-300 ${P ? "bg-zinc-800" : "bg-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]"}` }, N);
  }) }), e.jsxs("div", { className: "flex justify-between items-center text-[10px] font-mono text-zinc-500", children: [e.jsx("span", { children: "0" }), e.jsxs("span", { children: [f, " / ", c, " used"] }), e.jsx("span", { children: c })] })] })] })] }), e.jsx("div", { children: e.jsxs("div", { className: "relative group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative flex items-center bg-zinc-900/80 border border-zinc-700 hover:border-primary/50 rounded-xl p-1 pr-2 transition-colors", children: [e.jsx("div", { className: "h-10 w-10 flex items-center justify-center text-zinc-500 shrink-0", children: e.jsx(Be, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "flex-1 min-w-0 px-2 overflow-hidden", children: [e.jsx("div", { className: "text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5", children: "Secure Link" }), e.jsx("div", { className: "text-sm font-mono text-zinc-300 truncate selection:bg-primary/30", children: d })] }), e.jsxs(F, { variant: "secondary", size: "sm", onClick: () => B(d, "link"), className: "h-9 gap-2 shadow-sm font-medium shrink-0", children: [D ? e.jsx(Y, { className: "w-3.5 h-3.5" }) : e.jsx(ce, { className: "w-3.5 h-3.5" }), e.jsx("span", { className: "hidden md:inline", children: D ? "Copied" : "Copy" })] })] })] }) }), x && !k && e.jsxs("div", { className: "pt-4 mt-2", children: [e.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [e.jsx("div", { className: "p-1.5 bg-zinc-800 rounded-md", children: e.jsx(Oe, { className: "w-4 h-4 text-zinc-400" }) }), e.jsx("span", { className: "text-sm font-medium text-foreground", children: "Secure Send" })] }), e.jsxs("div", { className: "flex flex-col md:flex-row gap-2", children: [e.jsx(Te, { type: "email", placeholder: "Enter recipient email...", value: R, onChange: (j) => U(j.target.value), className: "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 focus:border-primary/50 transition-colors" }), e.jsx(F, { onClick: O, disabled: !R || _, className: "w-full md:w-auto min-w-[100px] cyber-btn", children: _ ? e.jsx(se, { className: "w-4 h-4 animate-spin" }) : "Send" })] }), e.jsx("p", { className: "text-[11px] text-zinc-500 mt-2 pl-1", children: "* Encrypted link sent only. No files attached." })] })] })] }), e.jsxs("div", { className: "mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start gap-4", children: [e.jsx("div", { className: "hidden md:block p-2 bg-rose-500/10 rounded-lg shrink-0", children: e.jsx(X, { className: "w-5 h-5 text-rose-500" }) }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 md:hidden mb-2 text-rose-500 font-bold text-sm", children: [e.jsx(X, { className: "w-4 h-4" }), e.jsx("span", { children: "Self-Destruction Protocol" })] }), e.jsx("h4", { className: "hidden md:block text-sm font-bold text-rose-500 mb-1", children: "Self-Destruction Protocol Active" }), e.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed max-w-2xl", children: ["This vault is encrypted with a unique key. Once the limit is reached or timer expires, data is permanently purged.", e.jsx("span", { className: "text-zinc-300 font-medium", children: " No recovery option." })] })] })] })] })] });
}
function ut() {
  const [, s] = me("/v/:id"), [, a] = me("/download/:id"), d = s?.id || a?.id, [u, p] = o.useState(null), [h, f] = o.useState([]), [c, x] = o.useState(true), [z, $] = o.useState(null), [D, S] = o.useState(null), [A, b] = o.useState(0), [C, E] = o.useState(null), [R, U] = o.useState(false), [_, T] = o.useState(false), { data: y, isLoading: B, error: O } = Le(d || ""), k = Fe(), G = $e(), { toast: j } = ge(), [N, P] = o.useState(/* @__PURE__ */ new Map()), [V, M] = o.useState(false), L = o.useRef(null);
  o.useEffect(() => (L.current = new Worker(new URL("/assets/encryption.worker-UhEl2skF.js", import.meta.url), { type: "module" }), () => L.current?.terminate()), []), o.useEffect(() => {
    const m = window.location.hash.replace("#key=", "");
    if (!m) {
      $("Missing decryption key. Invalid link."), x(false);
      return;
    }
    y && (async () => {
      if (y) try {
        const n = await Re(m);
        p(n);
        const l = (await Ue(y.encryptedMetadata, n)).map((w) => {
          const v = y.files.find((I) => I.fileId === w.fileId);
          return { ...w, chunks: v?.chunkCount || 0, isCompressed: v?.isCompressed || false };
        });
        f(l);
        const g = /* @__PURE__ */ new Map();
        for (const w of y.files) {
          const v = w.maxDownloads || y.maxDownloads || 5, I = w.downloadCount || 0;
          g.set(w.fileId, { fileId: w.fileId, maxDownloads: v, downloadCount: I, remainingDownloads: Math.max(0, v - I), isExhausted: I >= v });
        }
        P(g), x(false);
      } catch (n) {
        console.error(n), $("Failed to decrypt vault. Key may be invalid."), x(false);
      }
    })();
  }, [y]);
  const H = async (t) => {
    const m = [];
    for (let n = 0; n < t.chunks; n += 10) {
      const i = [];
      for (let g = 0; g < 10 && n + g < t.chunks; g++) i.push(k.mutateAsync({ vaultId: d, fileId: t.fileId, chunkIndex: n + g }).then((w) => ({ index: n + g, downloadUrl: w.downloadUrl })));
      const l = await Promise.all(i);
      m.push(...l), b(n / t.chunks * 10);
    }
    return m.sort((n, i) => n.index - i.index);
  }, J = async (t) => {
    if (!u || !d) return;
    S(t.fileId), b(0);
    const m = ee(t.size);
    E(m ? "stream" : "memory");
    try {
      if (m) {
        j({ title: "Optimizing Download", description: "Preparing secure stream..." });
        const r = await H(t), n = await xe(t.fileId, u, r, { name: t.name, size: t.size, type: t.type, fileId: t.fileId, isCompressed: t.isCompressed }, (i) => {
          b(10 + i.progress * 0.9);
        });
        if (!n.success) throw new Error(n.error);
      } else {
        const r = [];
        let n = 0;
        for (let w = 0; w < t.chunks; w++) {
          const { downloadUrl: v } = await k.mutateAsync({ vaultId: d, fileId: t.fileId, chunkIndex: w }), q = await (await fetch(v)).arrayBuffer(), le = new Uint8Array(q.slice(0, 12)), K = q.slice(12), W = await oe(K, le, u, t.isCompressed);
          r.push(new Uint8Array(W)), n += W.byteLength, b(n / t.size * 100);
        }
        const i = new Blob(r, { type: t.type }), l = window.URL.createObjectURL(i), g = document.createElement("a");
        g.href = l, g.download = t.name, document.body.appendChild(g), g.click(), window.URL.revokeObjectURL(l), document.body.removeChild(g);
      }
      try {
        const r = await G.mutateAsync({ vaultId: d, fileId: t.fileId });
        r.files && r.files.length > 0 && P((n) => {
          const i = new Map(n);
          for (const l of r.files) i.set(l.fileId, { fileId: l.fileId, maxDownloads: l.maxDownloads, downloadCount: l.downloadCount, remainingDownloads: l.remainingDownloads, isExhausted: l.isExhausted });
          return i;
        }), j({ title: "Download Complete", description: `Saved ${t.name}` }), r.vaultExhausted && (setTimeout(() => {
          j({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), U(true);
        }, 2e3), setTimeout(() => {
          T(true);
        }, 4500));
      } catch (r) {
        console.error("File download tracking failed", r), j({ title: "Download Complete", description: `Saved ${t.name} (tracking failed)` });
      }
    } catch (r) {
      console.error(r), j({ variant: "destructive", title: "Download Failed", description: "Encryption error or network failure." });
    } finally {
      S(null), b(0), E(null);
    }
  }, ze = async () => {
    if (!u || !d || h.length === 0) return;
    const t = h.filter((m) => !N.get(m.fileId)?.isExhausted);
    if (t.length === 0) {
      j({ variant: "destructive", title: "No Downloads Available", description: "All files have reached their download limit." });
      return;
    }
    M(true);
    try {
      for (let m = 0; m < t.length; m++) {
        const r = t[m];
        S(r.fileId), b(0);
        const n = ee(r.size);
        E(n ? "stream" : "memory");
        try {
          if (n) {
            const i = await H(r), l = await xe(r.fileId, u, i, { name: r.name, size: r.size, type: r.type, fileId: r.fileId, isCompressed: r.isCompressed }, (g) => {
              b(10 + g.progress * 0.9);
            });
            if (!l.success) throw new Error(l.error);
          } else {
            const i = [];
            let l = 0;
            for (let I = 0; I < r.chunks; I++) {
              const { downloadUrl: q } = await k.mutateAsync({ vaultId: d, fileId: r.fileId, chunkIndex: I }), K = await (await fetch(q)).arrayBuffer(), W = new Uint8Array(K.slice(0, 12)), De = K.slice(12), de = await oe(De, W, u, r.isCompressed);
              i.push(new Uint8Array(de)), l += de.byteLength, b(l / r.size * 100);
            }
            const g = new Blob(i, { type: r.type }), w = window.URL.createObjectURL(g), v = document.createElement("a");
            v.href = w, v.download = r.name, document.body.appendChild(v), v.click(), window.URL.revokeObjectURL(w), document.body.removeChild(v);
          }
        } catch (i) {
          console.error(`Failed to download ${r.name}:`, i), j({ variant: "destructive", title: "Download Failed", description: `Failed to download ${r.name}` });
        }
      }
      try {
        const m = t.map((n) => n.fileId), r = await G.mutateAsync({ vaultId: d, fileId: m[0], fileIds: m });
        r.files && r.files.length > 0 && P((n) => {
          const i = new Map(n);
          for (const l of r.files) i.set(l.fileId, { fileId: l.fileId, maxDownloads: l.maxDownloads, downloadCount: l.downloadCount, remainingDownloads: l.remainingDownloads, isExhausted: l.isExhausted });
          return i;
        }), j({ title: "Download Complete", description: `${t.length} file(s) downloaded.` }), r.vaultExhausted && (setTimeout(() => {
          j({ title: "Self-Destruct Initiated", description: "This link is burning...", variant: "destructive" }), U(true);
        }, 2e3), setTimeout(() => {
          T(true);
        }, 4500));
      } catch (m) {
        console.error("Batch tracking failed", m);
      }
    } finally {
      S(null), b(0), E(null), M(false);
    }
  }, oe = (t, m, r, n) => new Promise((i, l) => {
    if (!L.current) return l("Worker not ready");
    const g = Math.random(), w = (v) => {
      v.data.id === g && (L.current?.removeEventListener("message", w), v.data.type === "error" ? l(v.data.error) : i(v.data.decryptedData));
    };
    L.current.addEventListener("message", w), L.current.postMessage({ type: "decrypt", data: t, iv: m, key: r, id: g, isCompressed: n }, [t]);
  });
  return _ ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in duration-1000", children: e.jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [e.jsxs("div", { className: "w-20 h-20 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center mx-auto relative overflow-hidden group", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent" }), e.jsx(re, { className: "w-10 h-10 text-muted-foreground/50" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("h1", { className: "text-3xl font-bold font-mono text-muted-foreground uppercase tracking-widest", children: "Link Terminated" }), e.jsx("p", { className: "text-zinc-500", children: "This vault has self-destructed. No data remains." })] }), e.jsx(F, { onClick: () => window.location.href = "/", variant: "outline", className: "border-zinc-800 hover:bg-zinc-900 hover:text-white", children: "Return to Safety" })] }) }) : B ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: e.jsx(se, { className: "w-10 h-10 text-primary animate-spin" }) }) : O || z ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4", children: e.jsxs("div", { className: "max-w-md w-full bg-card border border-destructive/30 rounded-xl p-8 text-center", children: [e.jsx("div", { className: "w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 text-destructive", children: e.jsx(X, { className: "w-8 h-8" }) }), e.jsx("h2", { className: "text-xl font-bold mb-2", children: "Access Denied" }), e.jsx("p", { className: "text-muted-foreground mb-6", children: z || O?.message || "Vault not found" }), e.jsx(F, { onClick: () => window.location.href = "/", variant: "outline", children: "Go Home" })] }) }) : e.jsx("div", { className: `min-h-screen bg-background p-4 md:p-8 flex flex-col ${R ? "burn-container" : ""}`, children: e.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 md:space-y-8 w-full flex-1", children: [e.jsxs("header", { className: "flex items-center justify-between mb-6 md:mb-8", children: [e.jsx(ue, { href: "/", children: e.jsxs("div", { className: "flex items-center gap-3 cursor-pointer", children: [e.jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 overflow-hidden", children: e.jsx("img", { src: "/icon-192x192.png", alt: "VaultBridge", className: "w-full h-full object-cover p-1" }) }), e.jsx("div", { children: e.jsxs("h1", { className: "text-lg md:text-xl font-bold font-mono tracking-tighter", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] }) })] }) }), e.jsx(ue, { href: "/", children: e.jsxs(F, { variant: "ghost", size: "sm", className: "gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50", children: [e.jsx(Me, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Return" })] }) })] }), y && e.jsx(st, { vaultId: y.id, shortCode: y.shortCode, fullLink: window.location.href.split("#")[0], filesCount: h.length, totalSize: h.reduce((t, m) => t + m.size, 0), expiresAt: y.expiresAt, downloads: y.downloadCount, maxDownloads: y.maxDownloads }), e.jsxs("div", { className: "space-y-4", children: [e.jsx("h3", { className: "text-base md:text-lg font-bold font-mono uppercase tracking-wider text-muted-foreground mb-2 md:mb-4", children: "Encrypted Contents" }), c ? e.jsxs("div", { className: "p-6 md:p-8 text-center text-muted-foreground animate-pulse", children: [e.jsx(He, { className: "w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-50" }), e.jsx("p", { className: "text-sm md:text-base", children: "Decrypting metadata..." })] }) : e.jsxs(e.Fragment, { children: [h.map((t) => {
    const m = N.get(t.fileId), r = m?.remainingDownloads ?? 0, n = m?.maxDownloads ?? 0, i = m?.isExhausted ?? false;
    return e.jsxs(Z.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: `bg-card border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors ${i ? "border-destructive/30 opacity-60" : "border-border hover:border-primary/30"}`, children: [e.jsxs("div", { className: "flex items-center gap-3 md:gap-4 overflow-hidden", children: [e.jsx("div", { className: "p-2 md:p-3 bg-secondary rounded-lg flex-shrink-0", children: e.jsx(Ge, { className: `w-5 h-5 md:w-6 md:h-6 ${i ? "text-destructive" : "text-primary"}` }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium truncate text-sm md:text-base", children: t.name }), e.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [e.jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [(t.size / (1024 * 1024)).toFixed(2), " MB \u2022 ", t.type || "Unknown"] }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }), e.jsxs("span", { className: `text-[10px] font-bold uppercase ${i ? "text-destructive" : r <= 1 ? "text-amber-400" : "text-primary"}`, children: [r, "/", n, " DL"] })] })] })] }), e.jsx("div", { className: "flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0", children: D === t.fileId ? e.jsxs("div", { className: "w-full md:w-48 space-y-2", children: [e.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [e.jsxs("span", { children: [C === "stream" ? "Stream " : "", "Decrypting..."] }), e.jsxs("span", { children: [Math.round(A), "%"] })] }), e.jsx(ke, { value: A, className: "h-1.5 md:h-2" })] }) : e.jsx(F, { onClick: () => J(t), disabled: i || V, className: `w-full md:w-auto font-mono text-sm md:text-base h-10 md:h-11 ${i ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: i ? "Limit Reached" : ee(t.size) ? e.jsxs(e.Fragment, { children: [e.jsx(_e, { className: "w-4 h-4 mr-2 text-amber-500" }), "Download"] }) : e.jsxs(e.Fragment, { children: [e.jsx(ae, { className: "w-4 h-4 mr-2" }), "Download"] }) }) })] }, t.fileId);
  }), h.length > 1 && e.jsxs(e.Fragment, { children: [e.jsx(F, { onClick: ze, disabled: V || D !== null || Array.from(N.values()).every((t) => t.isExhausted) && N.size > 0, className: `w-full h-12 mt-4 font-mono text-sm md:text-base uppercase tracking-wider ${Array.from(N.values()).every((t) => t.isExhausted) && N.size > 0 ? "bg-muted text-muted-foreground cursor-not-allowed" : V ? "bg-primary/70 text-primary-foreground cursor-wait" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: V ? e.jsxs(e.Fragment, { children: [e.jsx(se, { className: "w-4 h-4 mr-2 animate-spin" }), "Downloading All..."] }) : Array.from(N.values()).every((t) => t.isExhausted) && N.size > 0 ? "All Limits Reached" : e.jsxs(e.Fragment, { children: [e.jsx(ae, { className: "w-4 h-4 mr-2" }), "Download All Files"] }) }), e.jsx("p", { className: "text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70" })] })] })] }), e.jsx("div", { className: "mt-12 text-center pb-8 opacity-70 hover:opacity-100 transition-opacity", children: e.jsxs("div", { className: "inline-flex flex-col items-center", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx(re, { className: "w-4 h-4 text-emerald-500" }), e.jsx("p", { className: "text-sm font-medium text-zinc-300", children: "Securely shared via VaultBridge" })] }), e.jsx("a", { href: "/", className: "text-xs text-primary hover:underline hover:text-emerald-400 transition-colors font-mono", children: "Free encrypted file sharing" })] }) })] }) });
}
export {
  ut as default
};
