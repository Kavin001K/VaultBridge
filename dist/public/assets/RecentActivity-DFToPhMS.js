import { c as D, r as c, ah as P, j as e, m as u, B as f, am as k, A as y, S as R, a9 as U, l as q, G, L as O, X as K, e as Z } from "./index-B5eeqRPK.js";
import { A as W } from "./activity-ZfMOsVM4.js";
import { C as A } from "./chevron-up-2c_phMUQ.js";
import { H as X, Z as _ } from "./zap-CO9dCU-d.js";
import { C as B, T as J } from "./triangle-alert-bbypd66C.js";
import { F } from "./flame-l2a2LcpR.js";
import { T as Q, S as Y } from "./timer-CEQm-Smt.js";
import { U as ee } from "./upload-cE3y_YaH.js";
import { D as T, E as te } from "./external-link-BLYwroqP.js";
import { F as se } from "./file-text-5AMAkaqP.js";
import { M as ae } from "./mail-CdmXftMJ.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const I = D("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const M = D("Clipboard", [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ne = D("Monitor", [["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }], ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]]), S = 768;
function ye() {
  const [t, a] = c.useState(false);
  return c.useEffect(() => {
    const i = () => {
      a(window.innerWidth < S);
    };
    i();
    const l = window.matchMedia(`(max-width: ${S - 1}px)`), n = () => i();
    return l.addEventListener("change", n), window.addEventListener("resize", n), () => {
      l.removeEventListener("change", n), window.removeEventListener("resize", n);
    };
  }, []), t;
}
function V(t) {
  return t === 0 ? "0 B" : t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : t < 1024 * 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(1)} MB` : `${(t / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
function L(t) {
  const a = Date.now() - t, i = Math.floor(a / 1e3);
  if (i < 60) return "just now";
  const l = Math.floor(i / 60);
  if (l < 60) return `${l}m ago`;
  const n = Math.floor(l / 60);
  if (n < 24) return `${n}h ago`;
  const r = Math.floor(n / 24);
  return r < 7 ? `${r}d ago` : new Date(t).toLocaleDateString();
}
const H = { active: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/25", label: "Active", icon: R }, expired: { color: "text-zinc-500", bg: "bg-zinc-500/10", border: "border-zinc-500/25", label: "Expired", icon: Q }, exhausted: { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/25", label: "Limit Hit", icon: J }, burned: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/25", label: "Burned", icon: _ } };
function ie({ status: t }) {
  const a = H[t], i = a.icon;
  return e.jsxs("span", { className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${a.color} ${a.bg} ${a.border}`, children: [t === "active" && e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }), e.jsx(i, { className: "w-2.5 h-2.5" }), a.label] });
}
function le({ expiresAt: t }) {
  const [a, i] = c.useState("");
  c.useEffect(() => {
    const r = () => {
      const p = t - Date.now();
      if (p <= 0) {
        i("Expired");
        return;
      }
      const x = Math.floor(p / 36e5), m = Math.floor(p % 36e5 / 6e4), h = Math.floor(p % 6e4 / 1e3);
      x > 0 ? i(`${x}h ${m}m`) : m > 0 ? i(`${m}m ${h}s`) : i(`${h}s`);
    };
    r();
    const d = setInterval(r, 1e3);
    return () => clearInterval(d);
  }, [t]);
  const l = t - Date.now(), n = l > 0 && l < 36e5;
  return l <= 0 ? e.jsx("span", { className: "text-zinc-600 font-mono text-xs", children: "Expired" }) : e.jsx("span", { className: `font-mono text-xs font-bold ${n ? "text-red-400 animate-pulse" : "text-cyan-400"}`, children: a });
}
function oe({ record: t, onRemove: a, onCopy: i, onDeleteVault: l }) {
  const [n, r] = c.useState(false), [d, p] = c.useState(false), [x, m] = c.useState(false), [h, o] = c.useState(false), b = t.action === "sent", g = t.type === "clipboard";
  H[t.status];
  const N = () => {
    i(t.accessCode), r(true), setTimeout(() => r(false), 1500);
  }, w = Math.max(0, t.maxDownloads - t.downloadCount), v = t.maxDownloads > 0 ? Math.min(100, Math.round(t.downloadCount / t.maxDownloads * 100)) : 0, z = async () => {
    if (!h) {
      o(true), setTimeout(() => o(false), 5e3);
      return;
    }
    m(true);
    try {
      await l(t);
    } finally {
      m(false), o(false);
    }
  };
  return e.jsx(u.div, { initial: { opacity: 0, y: 12, scale: 0.97 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, scale: 0.95, y: -8 }, transition: { type: "spring", stiffness: 400, damping: 30 }, className: `group relative rounded-2xl border backdrop-blur-lg transition-all duration-300 ${t.status === "active" ? "border-zinc-800/60 bg-zinc-900/50 hover:border-cyan-500/30 hover:bg-zinc-900/70" : "border-zinc-800/30 bg-zinc-950/30 opacity-70 hover:opacity-90"}`, children: e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [e.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [e.jsx("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${g ? "bg-violet-500/10 border-violet-500/25" : b ? "bg-cyan-500/10 border-cyan-500/25" : "bg-emerald-500/10 border-emerald-500/25"}`, children: g ? e.jsx(M, { className: "w-4 h-4 text-violet-400" }) : b ? e.jsx(ee, { className: "w-4 h-4 text-cyan-400" }) : e.jsx(T, { className: "w-4 h-4 text-emerald-400" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [e.jsx("p", { className: "text-sm font-bold text-zinc-200 truncate", children: g ? "Clipboard" : t.fileNames[0] || "Vault" }), t.fileCount > 1 && e.jsxs("span", { className: "text-[10px] text-zinc-500 font-mono bg-zinc-800/60 px-1.5 py-0.5 rounded-md shrink-0", children: ["+", t.fileCount - 1] })] }), e.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-zinc-500 font-mono", children: [e.jsx("span", { children: b ? "Sent" : "Received" }), e.jsx("span", { className: "text-zinc-700", children: "\u2022" }), e.jsx("span", { children: L(t.createdAt) }), t.totalSize > 0 && e.jsxs(e.Fragment, { children: [e.jsx("span", { className: "text-zinc-700", children: "\u2022" }), e.jsx("span", { children: V(t.totalSize) })] })] })] })] }), e.jsx("div", { className: "flex items-center gap-1.5 shrink-0", children: e.jsx(ie, { status: t.status }) })] }), e.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [e.jsxs("button", { onClick: N, className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/40 hover:border-cyan-500/40 transition-all group/pin", children: [e.jsxs("span", { className: "font-mono text-xs font-bold text-zinc-300 tracking-widest", children: [t.accessCode.slice(0, 3), "-", t.accessCode.slice(3)] }), n ? e.jsx(B, { className: "w-3 h-3 text-emerald-400" }) : e.jsx(U, { className: "w-3 h-3 text-zinc-500 group-hover/pin:text-cyan-400 transition-colors" })] }), t.status === "active" && e.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-zinc-500", children: [e.jsx(q, { className: "w-3 h-3" }), e.jsx(le, { expiresAt: t.expiresAt })] }), t.maxDownloads > 0 && t.type === "vault" && e.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-zinc-500 ml-auto", children: [e.jsx(T, { className: "w-3 h-3" }), e.jsxs("span", { className: "font-mono font-bold", children: [e.jsx("span", { className: w <= 2 ? "text-amber-400" : "text-zinc-300", children: w }), e.jsxs("span", { className: "text-zinc-600", children: ["/", t.maxDownloads] })] })] })] }), t.maxDownloads > 0 && t.type === "vault" && e.jsx("div", { className: "w-full h-1 bg-zinc-800/60 rounded-full overflow-hidden mb-2", children: e.jsx(u.div, { className: `h-full rounded-full ${v >= 90 ? "bg-red-500" : v >= 60 ? "bg-amber-500" : "bg-cyan-500"}`, initial: { width: 0 }, animate: { width: `${v}%` }, transition: { type: "spring", stiffness: 100, damping: 20 } }) }), t.hasClipboard && t.clipboardPreview && e.jsx("div", { className: "px-3 py-2 rounded-lg bg-zinc-800/30 border border-zinc-700/20 mb-2", children: e.jsxs("p", { className: "text-[11px] text-zinc-400 font-mono truncate leading-relaxed", children: [e.jsx(M, { className: "w-3 h-3 inline mr-1.5 text-violet-400" }), t.clipboardPreview] }) }), e.jsx(y, { children: d && e.jsx(u.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "overflow-hidden", children: e.jsxs("div", { className: "pt-2 mt-2 border-t border-zinc-800/40 space-y-2", children: [e.jsxs("div", { className: "flex items-center gap-3 text-[10px] text-zinc-500", children: [t.device.isMobile ? e.jsx(Y, { className: "w-3 h-3" }) : e.jsx(ne, { className: "w-3 h-3" }), e.jsxs("span", { children: [t.device.browser, " \u2022 ", t.device.os] }), e.jsx(G, { className: "w-3 h-3 ml-auto" }), e.jsx("span", { children: t.device.language })] }), t.fileNames.length > 1 && e.jsx("div", { className: "space-y-1", children: t.fileNames.map((C, s) => e.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-zinc-400", children: [e.jsx(se, { className: "w-3 h-3 text-zinc-600" }), e.jsx("span", { className: "truncate", children: C })] }, s)) }), t.lastEmailedTo && e.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-zinc-500", children: [e.jsx(ae, { className: "w-3 h-3 text-cyan-400" }), e.jsxs("span", { children: ["Emailed to ", t.lastEmailedTo] }), t.lastEmailedAt && e.jsxs("span", { className: "text-zinc-600", children: ["(", L(t.lastEmailedAt), ")"] })] }), e.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [e.jsx(O, { href: `/access?code=${t.accessCode}`, children: e.jsxs(f, { variant: "ghost", size: "sm", className: "h-7 text-[10px] text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 gap-1.5", children: [e.jsx(te, { className: "w-3 h-3" }), " Open Vault"] }) }), e.jsxs(f, { variant: "ghost", size: "sm", className: "h-7 text-[10px] text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 gap-1.5", onClick: () => a(t.id), children: [e.jsx(K, { className: "w-3 h-3" }), " Dismiss"] }), t.status === "active" && t.action === "sent" && e.jsx(f, { variant: "ghost", size: "sm", className: `h-7 text-[10px] gap-1.5 ml-auto transition-all ${h ? "text-white bg-red-600 hover:bg-red-700 border border-red-500 font-bold" : "text-red-400 hover:text-red-300 hover:bg-red-500/10"}`, onClick: z, disabled: x, children: x ? e.jsxs(e.Fragment, { children: [e.jsx(Z, { className: "w-3 h-3 animate-spin" }), " Destroying..."] }) : h ? e.jsxs(e.Fragment, { children: [e.jsx(F, { className: "w-3 h-3" }), " Confirm Destroy"] }) : e.jsxs(e.Fragment, { children: [e.jsx(k, { className: "w-3 h-3" }), " Delete Vault"] }) }), t.status !== "active" && e.jsxs(f, { variant: "ghost", size: "sm", className: "h-7 text-[10px] text-zinc-600 hover:text-red-400 hover:bg-red-500/10 gap-1.5 ml-auto", onClick: () => a(t.id), children: [e.jsx(k, { className: "w-3 h-3" }), " Remove"] })] })] }) }) }), e.jsx("button", { onClick: () => p(!d), className: "flex items-center justify-center w-full pt-1 text-zinc-600 hover:text-zinc-400 transition-colors", children: d ? e.jsx(A, { className: "w-3.5 h-3.5" }) : e.jsx(I, { className: "w-3.5 h-3.5" }) })] }) });
}
function Ne() {
  const { records: t, removeRecord: a, updateRecord: i, clearAll: l } = P(), [n, r] = c.useState("all"), [d, p] = c.useState(false), [x, m] = c.useState(null), [h, o] = c.useState(null), b = async (s) => {
    await navigator.clipboard.writeText(s), m(s), setTimeout(() => m(null), 1500);
  }, g = async (s) => {
    try {
      const j = s.accessCode.slice(0, 3), $ = await fetch(`/api/vault/code/${j}`);
      if (!$.ok) {
        a(s.id), o("Vault already expired or deleted."), setTimeout(() => o(null), 3e3);
        return;
      }
      const E = (await $.json()).id || s.vaultId;
      if (!E) {
        a(s.id), o("Vault not found \u2014 removed from history."), setTimeout(() => o(null), 3e3);
        return;
      }
      (await fetch(`/api/vaults/${E}`, { method: "DELETE" })).ok ? (i(s.accessCode, s.action, { status: "burned" }), setTimeout(() => a(s.id), 800), o("Vault destroyed permanently.")) : (a(s.id), o("Vault removed from history."));
    } catch (j) {
      console.error("[RecentActivity] Delete failed:", j), a(s.id), o("Error deleting \u2014 removed from history.");
    }
    setTimeout(() => o(null), 3e3);
  };
  if (t.length === 0) return null;
  const N = t.filter((s) => n === "all" ? true : n === "sent" ? s.action === "sent" : n === "received" ? s.action === "received" : n === "clipboard" ? s.type === "clipboard" : true), w = t.filter((s) => s.status === "active").length, v = t.filter((s) => s.action === "sent").length, z = t.filter((s) => s.action === "received").length, C = [{ key: "all", label: "All", count: t.length }, { key: "sent", label: "Sent", count: v }, { key: "received", label: "Received", count: z }, { key: "clipboard", label: "Clipboard" }];
  return e.jsxs("section", { className: "w-full", children: [e.jsxs(u.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "rounded-3xl border border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40", children: [e.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-zinc-800/40", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 border border-cyan-500/25 flex items-center justify-center", children: e.jsx(W, { className: "w-4 h-4 text-cyan-400" }) }), e.jsxs("div", { children: [e.jsx("h3", { className: "text-sm font-bold text-zinc-200 tracking-tight", children: "Recent Activity" }), e.jsxs("p", { className: "text-[10px] text-zinc-500 font-mono", children: [w, " active \u2022 ", t.length, " total"] })] })] }), e.jsxs("div", { className: "flex items-center gap-1.5", children: [t.length > 0 && e.jsxs(f, { variant: "ghost", size: "sm", className: "h-7 px-2 text-[10px] text-zinc-500 hover:text-red-400 hover:bg-red-500/10", onClick: l, children: [e.jsx(k, { className: "w-3 h-3 mr-1" }), " Clear"] }), e.jsx(f, { variant: "ghost", size: "sm", className: "h-7 w-7 p-0 text-zinc-500 hover:text-zinc-300", onClick: () => p(!d), children: d ? e.jsx(I, { className: "w-4 h-4" }) : e.jsx(A, { className: "w-4 h-4" }) })] })] }), e.jsx(y, { children: !d && e.jsxs(u.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 25 }, children: [e.jsx("div", { className: "flex px-3 pt-3 gap-1", children: C.map((s) => e.jsxs("button", { onClick: () => r(s.key), className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${n === s.key ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent"}`, children: [s.label, s.count !== void 0 && e.jsx("span", { className: `font-mono ${n === s.key ? "text-cyan-300" : "text-zinc-600"}`, children: s.count })] }, s.key)) }), e.jsx("div", { className: "p-3 space-y-2 max-h-[480px] overflow-y-auto custom-scrollbar", children: e.jsx(y, { mode: "popLayout", children: N.length > 0 ? N.map((s) => e.jsx(oe, { record: s, onRemove: a, onCopy: b, onDeleteVault: g }, s.id)) : e.jsx(u.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center py-8 text-zinc-600 text-xs font-mono", children: "No records match this filter." }) }) }), e.jsxs("div", { className: "px-5 py-3 border-t border-zinc-800/30 flex items-center justify-between text-[10px] text-zinc-600 font-mono", children: [e.jsxs("span", { className: "flex items-center gap-1.5", children: [e.jsx(X, { className: "w-3 h-3" }), V(t.reduce((s, j) => s + j.totalSize, 0)), " total transferred"] }), e.jsxs("span", { className: "flex items-center gap-1.5", children: [e.jsx(R, { className: "w-3 h-3" }), "Stored locally only"] })] })] }) })] }), e.jsx(y, { children: x && e.jsxs(u.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono py-2 px-4 rounded-full shadow-2xl", children: [e.jsx(B, { className: "w-3 h-3 inline mr-1.5" }), "Code copied: ", x.slice(0, 3), "-", x.slice(3)] }) }), e.jsx(y, { children: h && e.jsxs(u.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-red-500/30 text-red-400 text-xs font-mono py-2 px-4 rounded-full shadow-2xl", children: [e.jsx(F, { className: "w-3 h-3 inline mr-1.5" }), h] }) })] });
}
export {
  M as C,
  Ne as R,
  ye as u
};
