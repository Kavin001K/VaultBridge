import { c as re, r as p, j as e, e as he, A as se, m as u, b as mt, X as xt, L as V, a as pt, f as ut, u as ht, g as ft, h as yt, i as gt, d as ee, B as T, k as Fe, S as te, E as bt, l as Ee, n as De, D as wt, o as jt, p as vt, q as Nt, s as zt, t as kt, v as St, w as Mt, x as Ct, y as Ft } from "./index-ByPnYQL4.js";
import { z as Et, F as Dt } from "./browser-CYtTV5sA.js";
import { H as Pe } from "./hard-drive-H81IJ4GU.js";
import { F as Oe } from "./file-O1zVvyH9.js";
import { K as Pt } from "./key-DLNwn6wb.js";
import { F as _e } from "./file-text-S9aBAa-T.js";
import { U as At } from "./upload-DThiedef.js";
import { P as fe, I as It, F as Bt, a as Tt, b as $t } from "./paperclip-BC62ZmYn.js";
import { C as Ut, T as Lt } from "./triangle-alert-DeVGu1DU.js";
import { C as Rt } from "./chevron-right-BLrWMnSe.js";
import { Z as ue } from "./zap-DvzBzPZR.js";
import { A as Ot } from "./arrow-right-4eZVoUly.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ye = re("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _t = re("CloudOff", [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vt = re("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qt = re("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]), Wt = "vaultbridge-file-cache", Kt = 1, I = "pending-files", W = "upload-settings";
function H() {
  return new Promise((t, s) => {
    const r = indexedDB.open(Wt, Kt);
    r.onerror = () => s(r.error), r.onsuccess = () => t(r.result), r.onupgradeneeded = (a) => {
      const n = a.target.result;
      n.objectStoreNames.contains(I) || n.createObjectStore(I, { keyPath: "id" }), n.objectStoreNames.contains(W) || n.createObjectStore(W, { keyPath: "id" });
    };
  });
}
function Gt(t) {
  return `${t.name}-${t.size}-${t.lastModified}`;
}
async function Ve(t) {
  if (t.length === 0) {
    await ge();
    return;
  }
  try {
    const s = t.map(async (i) => ({ file: i, buffer: await i.arrayBuffer() })), r = await Promise.all(s), a = await H(), n = a.transaction(I, "readwrite"), o = n.objectStore(I);
    o.clear();
    for (const { file: i, buffer: x } of r) {
      const c = { id: Gt(i), name: i.name, type: i.type, size: i.size, lastModified: i.lastModified, data: x, addedAt: Date.now() };
      o.put(c);
    }
    await new Promise((i, x) => {
      n.oncomplete = () => i(), n.onerror = () => x(n.error);
    }), a.close();
  } catch (s) {
    console.warn("[FileStorage] Failed to save files:", s);
  }
}
async function Zt() {
  try {
    const t = await H(), a = t.transaction(I, "readonly").objectStore(I).getAll(), n = await new Promise((c, g) => {
      a.onsuccess = () => c(a.result || []), a.onerror = () => g(a.error);
    });
    t.close();
    const o = n.map((c) => new File([c.data], c.name, { type: c.type, lastModified: c.lastModified })), i = Date.now() - 24 * 60 * 60 * 1e3, x = n.filter((c) => c.addedAt > i);
    if (x.length !== n.length) {
      const c = x.map((g) => new File([g.data], g.name, { type: g.type, lastModified: g.lastModified }));
      return await Ve(c), c;
    }
    return o;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load files:", t), [];
  }
}
async function ge() {
  try {
    const t = await H(), s = t.transaction(I, "readwrite");
    s.objectStore(I).clear(), await new Promise((a, n) => {
      s.oncomplete = () => a(), s.onerror = () => n(s.error);
    }), t.close();
  } catch (t) {
    console.warn("[FileStorage] Failed to clear files:", t);
  }
}
async function Ht(t, s) {
  try {
    const r = await H(), a = r.transaction(W, "readwrite"), n = a.objectStore(W), o = { id: "current", expiresIn: t, maxDownloads: s };
    n.put(o), await new Promise((i, x) => {
      a.oncomplete = () => i(), a.onerror = () => x(a.error);
    }), r.close();
  } catch (r) {
    console.warn("[FileStorage] Failed to save settings:", r);
  }
}
async function Xt() {
  try {
    const t = await H(), a = t.transaction(W, "readonly").objectStore(W).get("current"), n = await new Promise((o, i) => {
      a.onsuccess = () => o(a.result), a.onerror = () => i(a.error);
    });
    return t.close(), n ? { expiresIn: n.expiresIn, maxDownloads: n.maxDownloads } : null;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load settings:", t), null;
  }
}
function Jt({ onFilesSelected: t, disabled: s, onDragStateChange: r }) {
  const [a, n] = p.useState(false), [o, i] = p.useState([]), [x, c] = p.useState("idle"), g = p.useRef(true), N = p.useRef(null);
  p.useEffect(() => {
    (async () => {
      try {
        const m = await Zt();
        m.length > 0 && (i(m), t(m), c("restored"), setTimeout(() => c("idle"), 3e3));
      } catch (m) {
        console.warn("[FileDropzone] Failed to load persisted files:", m);
      }
    })();
  }, []), p.useEffect(() => {
    if (g.current) {
      g.current = false;
      return;
    }
    return N.current && clearTimeout(N.current), N.current = setTimeout(async () => {
      try {
        c("saving"), await Ve(o), c(o.length > 0 ? "saved" : "idle"), o.length > 0 && setTimeout(() => c("idle"), 2e3);
      } catch (d) {
        console.warn("[FileDropzone] Failed to persist files:", d), c("error");
      }
    }, 500), () => {
      N.current && clearTimeout(N.current);
    };
  }, [o]), p.useEffect(() => {
    r?.(a);
  }, [a, r]);
  const $ = (d) => {
    d.preventDefault(), s || n(true);
  }, ae = () => n(false), [E, U] = p.useState(false), k = (d) => new Promise((m) => {
    if (d.isFile) d.file((D) => {
      m({ [d.fullPath]: D });
    });
    else if (d.isDirectory) {
      const D = d.createReader();
      (() => {
        D.readEntries(async (w) => {
          if (w.length === 0) {
            m({});
            return;
          }
          const M = w.map((F) => k(F)), C = (await Promise.all(M)).reduce((F, A) => ({ ...F, ...A }), {});
          m(C);
        });
      })();
    } else m({});
  }), ne = async (d) => {
    if (d.preventDefault(), n(false), s) return;
    const m = d.dataTransfer.items;
    if (!m || m.length === 0) return;
    let D = false;
    const S = [];
    for (let w = 0; w < m.length; w++) {
      const M = m[w].webkitGetAsEntry();
      M && (S.push(M), M.isDirectory && (D = true));
    }
    if (D) {
      U(true);
      try {
        const w = {};
        for (const j of S) {
          const C = await k(j);
          Object.assign(w, C);
        }
        const M = {};
        for (const [j, C] of Object.entries(w)) {
          const F = j.startsWith("/") ? j.slice(1) : j, A = new Uint8Array(await C.arrayBuffer());
          M[F] = A;
        }
        Et(M, { level: 6 }, (j, C) => {
          if (j) {
            console.error("Zipping failed", j), U(false);
            return;
          }
          const F = new File([C], "archive.zip", { type: "application/zip" });
          i([F]), t([F]), U(false);
        });
      } catch (w) {
        console.error("Folder scan failed", w), U(false);
      }
    } else if (d.dataTransfer.files && d.dataTransfer.files.length > 0) {
      const w = Array.from(d.dataTransfer.files);
      i(w), t(w);
    }
  }, X = (d) => {
    if (d.target.files && d.target.files.length > 0) {
      const m = Array.from(d.target.files);
      i(m), t(m);
    }
  }, ie = (d) => {
    const m = o.filter((D, S) => S !== d);
    i(m), t(m);
  }, oe = o.reduce((d, m) => d + m.size, 0);
  return e.jsxs("div", { className: "w-full space-y-4", children: [e.jsxs("div", { onDragOver: $, onDragLeave: ae, onDrop: ne, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${a ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${s ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [e.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: X, disabled: s }), e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: E ? e.jsx(he, { className: "w-8 h-8 text-primary animate-spin" }) : a ? e.jsx(qt, { className: "w-8 h-8 text-primary" }) : e.jsx(Vt, { className: "w-8 h-8 text-muted-foreground" }) }), e.jsx("h3", { className: "text-lg font-semibold mb-1", children: a ? "Drop folder or files" : E ? "Zipping..." : "Drag & drop files or folders here" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: 500 MB" })] }), e.jsx(se, { children: o.length > 0 && e.jsxs(u.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-3", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs uppercase tracking-wider font-mono text-muted-foreground", children: ["Selected Files (", o.length, ")"] }), e.jsxs(se, { mode: "wait", children: [x === "restored" && e.jsxs(u.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20", children: [e.jsx(Pe, { className: "w-3 h-3 text-blue-400" }), e.jsx("span", { className: "text-[10px] font-mono text-blue-400", children: "Restored" })] }, "restored"), x === "saving" && e.jsxs(u.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20", children: [e.jsx(he, { className: "w-3 h-3 text-amber-400 animate-spin" }), e.jsx("span", { className: "text-[10px] font-mono text-amber-400", children: "Saving..." })] }, "saving"), x === "saved" && e.jsxs(u.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: [e.jsx(mt, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: "Saved" })] }, "saved"), x === "error" && e.jsxs(u.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20", children: [e.jsx(_t, { className: "w-3 h-3 text-red-400" }), e.jsx("span", { className: "text-[10px] font-mono text-red-400", children: "Error" })] }, "error")] })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: [(oe / (1024 * 1024)).toFixed(2), " MB"] }), !s && o.length > 1 && e.jsx("button", { onClick: async () => {
    i([]), t([]), await ge();
  }, className: "text-[10px] font-mono uppercase tracking-wider text-red-400/70 hover:text-red-400 transition-colors", children: "Clear All" })] })] }), x === "restored" && e.jsxs(u.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "flex items-center gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10", children: [e.jsx(Pe, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }), e.jsx("p", { className: "text-xs text-blue-300", children: "Files restored from your last session. Ready to encrypt!" })] }), o.map((d, m) => e.jsxs(u.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: "p-2 bg-background rounded-md", children: e.jsx(Oe, { className: "w-4 h-4 text-primary" }) }), e.jsxs("div", { className: "truncate", children: [e.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: d.name }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [(d.size / 1024).toFixed(1), " KB"] })] })] }), !s && e.jsx("button", { onClick: () => ie(m), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: e.jsx(xt, { className: "w-4 h-4" }) })] }, `${d.name}-${m}`))] }) })] });
}
const Ae = [{ id: "keys", label: "Generating Keys", icon: Pt }, { id: "metadata", label: "Encrypting Metadata", icon: _e }, { id: "transfer", label: "Encrypting & Uploading", icon: At }, { id: "done", label: "Complete", icon: ye }];
function Qt({ stage: t, step: s, progress: r, statusText: a }) {
  const n = Ae.findIndex((o) => o.id === s);
  return e.jsxs(u.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [e.jsxs(u.div, { animate: { rotate: t === "encrypting" ? [0, 10, -10, 0] : 0, scale: t === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: t === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [e.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${t === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: t === "success" ? e.jsx(ye, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : e.jsx(V, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), t !== "success" && e.jsx(e.Fragment, { children: [0, 1, 2].map((o) => e.jsx(u.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: o * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, o)) })] }), e.jsx(u.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: a }, a), typeof bytesProcessed == "number" && typeof bytesTotal == "number" && e.jsxs("div", { className: "mb-4 text-xs text-zinc-500 font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2", children: [e.jsxs("span", { children: [(bytesProcessed / 1024 / 1024).toFixed(1), " / ", (bytesTotal / 1024 / 1024).toFixed(1), " MB"] }), e.jsx("span", { className: "text-primary", children: "\u2022" }), e.jsxs("span", { children: [Math.round(bytesProcessed / Math.max(bytesTotal, 1) * 100), "%"] })] }), e.jsx("div", { className: "waveform mb-6", children: e.jsx("span", { style: { width: `${Math.max(20, Math.min(100, r))}%` } }) }), e.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: e.jsx(u.div, { initial: { width: 0 }, animate: { width: `${r}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), e.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(r), "%"] }), e.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: Ae.map((o, i) => {
    const x = o.id === s, c = i < n, g = i > n, N = o.icon;
    return e.jsxs(u.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: i * 0.1 }, className: `progress-step ${x ? "active" : ""} ${c ? "completed" : ""} ${g ? "pending" : ""}`, children: [e.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${c ? "bg-primary/20" : x ? "bg-primary/10" : "bg-zinc-800"}`, children: c ? e.jsx(ye, { className: "w-4 h-4 text-primary" }) : x ? e.jsx(he, { className: "w-4 h-4 text-primary animate-spin" }) : e.jsx(N, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: o.label })] }, o.id);
  }) }), e.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: e.jsx(u.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (o, i) => e.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, i)) }) }), e.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
const Ie = 500 * 1024 * 1024, Yt = 500 * 1024 * 1024;
function Be(t) {
  const s = t.reduce((n, o) => n + o.size, 0), r = Math.max(...t.map((n) => n.size));
  if (r > Ie) {
    const n = t.find((o) => o.size > Ie);
    return { size: s, isValid: false, errorMessage: `File "${n?.name}" exceeds 500MB limit (${q(r)})`, formattedSize: q(s), estimatedUploadTime: 0 };
  }
  if (s > Yt) return { size: s, isValid: false, errorMessage: `Total upload size ${q(s)} exceeds 500MB limit`, formattedSize: q(s), estimatedUploadTime: 0 };
  const a = Math.ceil(s * 8 / (10 * 1024 * 1024));
  return { size: s, isValid: true, formattedSize: q(s), estimatedUploadTime: a };
}
function q(t) {
  if (t === 0) return "0 Bytes";
  const s = 1024, r = ["Bytes", "KB", "MB", "GB", "TB"], a = Math.floor(Math.log(t) / Math.log(s));
  return parseFloat((t / Math.pow(s, a)).toFixed(2)) + " " + r[a];
}
function es() {
  const t = navigator.connection, s = t?.downlink || 10, r = t?.effectiveType || "4g", a = Math.max(1e6, s * 1e6), n = ts(r), x = ss(Math.round(a * n / 8e3), 524288, 33554432), c = Math.max(1, navigator.hardwareConcurrency || 4), g = Math.max(1, Math.min(Math.floor(a / (x * 8)) || 1, c, 6)), N = Math.max(1, Math.min(c - 1, 4));
  return { bandwidthBps: a, latencyMs: n, chunkSize: x, parallelUploads: g, workerCount: N };
}
function ts(t) {
  switch (t) {
    case "slow-2g":
      return 300;
    case "2g":
      return 200;
    case "3g":
      return 120;
    case "4g":
    default:
      return 80;
  }
}
function ss(t, s, r) {
  return Math.min(r, Math.max(s, t));
}
async function rs(t, s = 64 * 1024) {
  const a = await t.slice(0, Math.min(s, t.size)).arrayBuffer(), n = new Uint8Array(a);
  return as(n);
}
function as(t) {
  if (!t.length) return 0;
  const s = new Uint32Array(256);
  for (let a = 0; a < t.length; a++) s[t[a]]++;
  return Array.from(s).reduce((a, n) => {
    if (n === 0) return a;
    const o = n / t.length;
    return a - o * Math.log2(o);
  }, 0);
}
function ns(t, s, r) {
  return t < 6.5 && s < 5e6 && r > 5e4;
}
function Te(t) {
  let s = 0;
  const r = [], a = () => {
    if (r.length === 0 || s >= t) return;
    s += 1, r.shift()?.();
  };
  return async function(n) {
    s >= t ? await new Promise((o) => r.push(o)) : s += 1;
    try {
      return await n();
    } finally {
      s -= 1, a();
    }
  };
}
class is {
  constructor(s) {
    this.requestMap = /* @__PURE__ */ new Map(), this.nextId = 1, this.roundRobin = 0, this.workers = Array.from({ length: s }, () => this.createWorker());
  }
  createWorker() {
    const s = new Worker(new URL("/assets/encryption.worker-Dwb5LFOH.js", import.meta.url), { type: "module" });
    return s.onmessage = (r) => {
      const { id: a, type: n, iv: o, encryptedData: i, error: x } = r.data, c = this.requestMap.get(a);
      c && (this.requestMap.delete(a), n === "encrypt_success" ? c.resolve({ iv: o, encryptedData: i }) : n === "error" && c.reject(new Error(x || "Encryption worker failed")));
    }, s;
  }
  async encrypt(s, r, a) {
    const n = this.nextId++, o = this.workers[this.roundRobin];
    return this.roundRobin = (this.roundRobin + 1) % this.workers.length, new Promise((i, x) => {
      this.requestMap.set(n, { resolve: i, reject: x }), o.postMessage({ type: a ? "compress_and_encrypt" : "encrypt", data: s, key: r, id: n }, [s]);
    });
  }
  terminate() {
    this.workers.forEach((s) => s.terminate());
  }
}
function os(t) {
  const s = t.iv, r = new Uint8Array(t.encryptedData), a = new Uint8Array(s.byteLength + r.byteLength);
  return a.set(s, 0), a.set(r, s.byteLength), a;
}
async function ls(t, s, r) {
  const a = await fetch(t, { method: "PUT", body: s, signal: r, headers: { "Content-Type": "application/octet-stream" } });
  if (!a.ok) throw new Error(`Upload failed: ${a.status} ${a.statusText}`);
}
const $e = [{ id: 1, label: "Select", icon: fe }, { id: 2, label: "Configure", icon: bt }], _ = (t) => t === 0 ? "0 B" : t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(1)} MB`, Ue = (t) => t.startsWith("image/") ? It : t.startsWith("video/") ? Bt : t.startsWith("audio/") ? Tt : t.includes("zip") || t.includes("rar") || t.includes("tar") || t.includes("7z") || t.includes("gz") ? $t : t.includes("pdf") || t.includes("doc") || t.includes("text") || t.includes("sheet") ? _e : Oe, Le = (t) => t.startsWith("image/") ? "text-sky-400 bg-sky-500/10 border-sky-500/20" : t.startsWith("video/") ? "text-rose-400 bg-rose-500/10 border-rose-500/20" : t.startsWith("audio/") ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : t.includes("zip") || t.includes("rar") || t.includes("tar") ? "text-orange-400 bg-orange-500/10 border-orange-500/20" : t.includes("pdf") ? "text-red-400 bg-red-500/10 border-red-500/20" : "text-amber-400 bg-amber-500/10 border-amber-500/20", Re = (t) => {
  if (t < 24) return `${t}h`;
  const s = Math.floor(t / 24), r = t % 24;
  return r === 0 ? `${s}d` : `${s}d ${r}h`;
};
function Ns() {
  const [t, s] = p.useState(1), [r, a] = p.useState([]), [n, o] = p.useState([1]), [i, x] = p.useState([5]), [c, g] = p.useState("idle"), [N, $] = p.useState("keys"), [ae, E] = p.useState(0), [U, k] = p.useState(""), [ne, X] = p.useState(0), [ie, oe] = p.useState(0), [d, m] = p.useState({}), [D, S] = p.useState("-------"), [w, M] = p.useState(false), [j, C] = p.useState(null), [F, A] = p.useState(false), [, qe] = pt(), { toast: J } = ut(), { play: Q } = ht(), K = p.useRef(null), We = ft(), Ke = yt(), Ge = gt();
  p.useEffect(() => {
    (async () => {
      const h = await Xt();
      h && (o([h.expiresIn]), x([h.maxDownloads]));
    })();
  }, []), p.useEffect(() => {
    Ht(n[0], i[0]);
  }, [n, i]);
  const Ze = (l, h = 20) => {
    if (l.length <= h) return l;
    const b = l.lastIndexOf(".");
    if (b !== -1) {
      const y = l.substring(b), v = l.substring(0, b);
      if (v.length > h - y.length - 3) return v.substring(0, h - y.length - 3) + "..." + y;
    }
    return l.substring(0, h - 3) + "...";
  }, He = (l) => {
    C(null);
    const h = Be(l);
    if (!h.isValid) {
      Q("error"), C(h.errorMessage || "Invalid files"), J({ variant: "destructive", title: "Upload Limit Exceeded", description: h.errorMessage });
      return;
    }
    Q("drop"), a(l);
  }, Xe = async () => {
    if (A(false), r.length === 0) return;
    const l = Be(r);
    if (!l.isValid) {
      J({ variant: "destructive", title: "Upload Error", description: l.errorMessage });
      return;
    }
    const h = r.reduce((y, v) => y + v.size, 0);
    oe(h), X(0), m(r.reduce((y, v) => ({ ...y, [v.name]: 0 }), {})), S("-------"), g("encrypting"), E(0), K.current = new AbortController();
    let b = null;
    try {
      const y = Date.now();
      $("keys"), k("Generating military-grade AES-256 keys..."), await new Promise((f) => setTimeout(f, 300));
      const v = await kt();
      E(10), $("metadata"), k("Encrypting metadata...");
      const be = r.map((f) => ({ name: f.name, type: f.type, size: f.size, fileId: St(), lastModified: f.lastModified })), Qe = await Mt(be, v), P = es();
      k(`Calibrating transfer at ${q(P.chunkSize)} chunks with ${P.parallelUploads} streams...`);
      const Ye = Te(P.parallelUploads), et = Te(P.workerCount);
      b = new is(P.workerCount);
      const ce = await Promise.all(r.map(async (f, z) => {
        const O = await rs(f), Z = ns(O, P.bandwidthBps, f.size), me = Math.max(1, Math.ceil(f.size / P.chunkSize));
        return { file: f, compressed: Z, chunkCount: me, fileId: be[z].fileId };
      })), tt = ce.map((f) => ({ fileId: f.fileId, chunks: f.chunkCount, size: f.file.size, isCompressed: f.compressed, originalSize: f.file.size }));
      E(20);
      const we = 5;
      let L = null, je = "", G = null;
      for (let f = 0; f <= we; f++) {
        L = Ct(), k(`Deriving PIN-protective wrapper (attempt ${f + 1})...`), je = await Ft(v, L.pin);
        try {
          k("Securing vault location..."), G = await We.mutateAsync({ expiresIn: n[0], maxDownloads: i[0], encryptedMetadata: Qe, lookupId: L.lookupId, wrappedKey: je, files: tt });
          break;
        } catch (z) {
          const O = z;
          if (!(O.status === 409 || O.code === "LOOKUP_ID_CONFLICT") || f === we) throw z;
        }
      }
      if (!G || !L) throw new Error("Could not allocate a unique access code. Please retry.");
      E(30), g("uploading"), $("transfer");
      const R = L.fullCode;
      S(R.replace(/./g, "\u2022"));
      const ve = ce.length;
      let de = 0;
      for (const f of ce) {
        if (K.current.signal.aborted) throw new Error("Upload cancelled");
        const { file: z, compressed: O, fileId: Z, chunkCount: me } = f, rt = Ze(z.name);
        k(`Preparing ${rt}...`), m((B) => ({ ...B, [z.name]: 5 }));
        const ze = [];
        let ke = 0;
        for (let B = 0; B < me; B++) {
          const xe = B * P.chunkSize, Se = Math.min(xe + P.chunkSize, z.size), Me = Se - xe, it = et(async () => {
            if (K.current.signal.aborted) throw new Error("Upload cancelled");
            const ot = await z.slice(xe, Se).arrayBuffer(), lt = await b.encrypt(ot, v, O), Ce = os(lt), { uploadUrl: ct, storagePath: dt } = await Ke.mutateAsync({ vaultId: G.id, fileId: Z, chunkIndex: B, size: Ce.byteLength });
            await Ye(async () => {
              await ls(ct, Ce, K.current.signal);
            }), await Ge.mutateAsync({ vaultId: G.id, fileId: Z, chunkIndex: B, storagePath: dt }), ke += Me, X((pe) => pe + Me), m((pe) => ({ ...pe, [z.name]: Math.min(100, Math.round(ke / z.size * 100)) }));
          });
          ze.push(it);
        }
        await Promise.all(ze), de += 1;
        const at = Math.min(R.length, Math.ceil(de / ve * R.length));
        S(R.slice(0, at).padEnd(R.length, "\u2022"));
        const nt = 30 + de / ve * 65;
        E(nt);
      }
      b.terminate(), $("done"), E(100), k("Finalizing secure vault..."), S(R), g("success"), Q("success"), await ge();
      const Ne = Date.now() - y, st = h / (Ne / 1e3);
      setTimeout(() => {
        qe(`/success/${G.id}#code=${L.fullCode}&time=${Ne}&speed=${Math.floor(st)}`);
      }, 800);
    } catch (y) {
      console.error(y), Q("error"), g("idle"), y instanceof Error && y.message === "Upload cancelled" ? J({ title: "Upload Cancelled", variant: "default" }) : J({ variant: "destructive", title: "Upload Failed", description: y instanceof Error ? y.message : "An error occurred" });
    } finally {
      b?.terminate();
    }
  }, Y = r.reduce((l, h) => l + h.size, 0), le = Math.min(Y / (500 * 1024 * 1024) * 100, 100), Je = t === 1 ? r.length > 0 && !j : true;
  return e.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [e.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), e.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), e.jsx("header", { className: "relative z-10 px-4 sm:px-6 py-4 sm:py-6 border-b border-white/5 safe-top", children: e.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [e.jsx(ee, { href: "/", children: e.jsxs(u.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group shrink-0", children: [e.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors", children: e.jsx(V, { className: "w-4 h-4 sm:w-5 sm:h-5 text-primary" }) }), e.jsxs("h1", { className: "text-lg sm:text-xl font-bold font-display tracking-tight group-hover:text-primary transition-colors uppercase", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] })] }) }), e.jsx(ee, { href: "/", children: e.jsxs(T, { variant: "ghost", size: "sm", className: "gap-1.5 sm:gap-2 text-zinc-400 hover:text-white hover:bg-white/5 px-2 sm:px-3 text-xs sm:text-sm", children: [e.jsx(Fe, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Back" })] }) })] }) }), e.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-3 sm:px-6 py-6 sm:py-12 safe-bottom", children: [e.jsxs(u.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-6 sm:mb-8", children: [e.jsxs("div", { className: "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4", children: [e.jsx(te, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }), "End-to-End Encrypted Vault"] }), e.jsx("h2", { className: "text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 font-display tracking-tight text-white", children: "Secure Upload" }), e.jsx("p", { className: "text-zinc-400 text-xs sm:text-sm max-w-md mx-auto px-2 font-sans", children: "Select files, configure vault settings, then encrypt & upload \u2014 all client-side, zero-knowledge." })] }), e.jsx(u.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "flex items-center justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-8", children: $e.map((l, h) => {
    const b = t > l.id, y = t === l.id, v = l.icon;
    return e.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-3", children: [e.jsxs("button", { onClick: () => {
      b && s(l.id);
    }, disabled: !b && !y, className: `flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${b ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/20" : y ? "bg-primary/10 text-primary border border-primary/20" : "bg-zinc-900/50 text-zinc-500 border border-zinc-800/50 cursor-not-allowed"}`, children: [b ? e.jsx(Ut, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }) : e.jsx(v, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }), e.jsx("span", { className: "hidden sm:inline", children: l.label })] }), h < $e.length - 1 && e.jsx(Rt, { className: `w-3 h-3 sm:w-4 sm:h-4 ${t > l.id ? "text-emerald-500/50" : "text-zinc-700"}` })] }, l.id);
  }) }), e.jsxs(u.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 }, className: `bg-zinc-900/40 border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-2xl ${w ? "ring-2 ring-primary bg-primary/5" : ""}`, children: [e.jsx(se, { children: c !== "idle" && e.jsxs(u.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [e.jsx(Qt, { stage: c, step: N, progress: ae, statusText: U, bytesProcessed: ne, bytesTotal: ie }), c === "uploading" && e.jsx(T, { variant: "outline", size: "sm", onClick: () => K.current?.abort(), className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), e.jsxs(se, { mode: "wait", children: [t === 1 && e.jsxs(u.div, { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 }, transition: { duration: 0.25 }, className: "p-4 sm:p-8 space-y-4 sm:space-y-6", children: [e.jsx(Jt, { onFilesSelected: He, disabled: c !== "idle", onDragStateChange: M }), j && e.jsxs(u.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3", children: [e.jsx(Lt, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-red-400", children: j }), e.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Maximum file size: 500 MB" })] })] }), r.length > 0 && e.jsxs(u.div, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between items-center text-xs", children: [e.jsxs("span", { className: "text-zinc-400", children: [r.length, " file", r.length > 1 ? "s" : "", " selected"] }), e.jsxs("span", { className: "font-mono text-primary", children: [_(Y), " / 500 MB"] })] }), e.jsx("div", { className: "h-1.5 bg-zinc-800 rounded-full overflow-hidden", children: e.jsx(u.div, { initial: { width: 0 }, animate: { width: `${le}%` }, className: `h-full rounded-full transition-colors ${le > 90 ? "bg-red-500" : le > 70 ? "bg-amber-500" : "bg-primary"}` }) })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 justify-center pt-2", children: [e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(te, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(V, { className: "w-3 h-3 text-amber-500" }), "Lossless Transfer"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(ue, { className: "w-3 h-3 text-blue-500" }), "Max 500MB"] })] })] }, "step-1"), t === 2 && e.jsxs(u.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 }, transition: { duration: 0.25 }, className: "p-4 sm:p-8 space-y-4 sm:space-y-6", children: [e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-2 sm:space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(fe, { className: "w-4 h-4 text-primary" }), e.jsx("span", { className: "text-sm font-bold text-zinc-200", children: "Attachments" })] }), e.jsx("span", { className: "text-xs font-mono text-zinc-500", children: _(Y) })] }), e.jsx("div", { className: "space-y-1.5 max-h-32 overflow-y-auto", children: r.map((l, h) => {
    const b = Ue(l.type), y = Le(l.type);
    return e.jsxs("div", { className: "flex items-center gap-3 py-1.5", children: [e.jsx("div", { className: `w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${y}`, children: e.jsx(b, { className: "w-3.5 h-3.5" }) }), e.jsx("span", { className: "text-sm text-zinc-300 truncate flex-1", children: l.name }), e.jsx("span", { className: "text-xs font-mono text-zinc-500 flex-shrink-0", children: _(l.size) })] }, h);
  }) })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6", children: [e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-3 sm:space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(Ee, { className: "w-4 h-4 text-amber-400" }), "Auto-Destruct"] }), e.jsx("span", { className: "text-sm font-mono text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-lg", children: Re(n[0]) })] }), e.jsx(De, { value: n, onValueChange: o, min: 1, max: 168, step: 1, className: "py-2" }), e.jsx("p", { className: "text-[10px] text-zinc-600 leading-relaxed", children: "Vault & all encrypted files will be permanently erased after this time." })] }), e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-3 sm:space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(ue, { className: "w-4 h-4 text-emerald-400" }), "Download Limit"] }), e.jsx("span", { className: `text-sm font-mono font-bold px-2.5 py-0.5 rounded-lg ${i[0] === 1 ? "text-red-400 bg-red-500/10" : "text-emerald-400 bg-emerald-500/10"}`, children: i[0] === 1 ? "BURN" : `${i[0]}\xD7` })] }), e.jsx(De, { value: i, onValueChange: x, min: 1, max: 100, step: 1, disabled: i[0] === 1, className: i[0] === 1 ? "opacity-30" : "" }), e.jsxs("button", { onClick: () => x(i[0] === 1 ? [5] : [1]), className: `w-full text-xs cursor-pointer select-none transition-all py-2.5 rounded-xl border flex items-center justify-center gap-2 ${i[0] === 1 ? "bg-red-500/10 border-red-500/25 text-red-400" : "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"}`, children: [e.jsx(Dt, { className: `w-3.5 h-3.5 ${i[0] === 1 ? "text-red-400" : ""}` }), i[0] === 1 ? "Burn-on-Read Active (1 view)" : "Enable Burn-on-Read"] })] })] }), e.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 flex items-start gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0", children: e.jsx(te, { className: "w-4.5 h-4.5 text-primary" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-bold text-zinc-200", children: "Zero-Knowledge Encryption" }), e.jsx("p", { className: "text-xs text-zinc-500 mt-0.5 leading-relaxed", children: "Encryption happens entirely in your browser. We never see your files, keys, or data." })] })] }), r.length > 0 && e.jsxs("div", { className: "grid gap-4", children: [e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-700/40 rounded-2xl p-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsx("span", { className: "text-[10px] uppercase tracking-[0.35em] text-zinc-500 font-mono", children: "Vault Code Preview" }), e.jsx("span", { className: "text-[10px] uppercase tracking-[0.35em] text-emerald-400 font-mono", children: c === "uploading" ? "Live" : "Ready" })] }), e.jsx("div", { className: "flex flex-wrap gap-2 justify-center text-2xl sm:text-[2.2rem] font-black font-mono tracking-[0.35em] text-white", children: D.split("").map((l, h) => e.jsx("span", { className: "w-9 h-12 flex items-center justify-center rounded-2xl bg-zinc-950/80 border border-zinc-800", children: l }, h)) }), e.jsx("p", { className: "text-xs text-zinc-500 mt-3", children: "Code reveals as files finish encrypting and uploading." })] }), e.jsx("div", { className: "space-y-3", children: r.map((l) => e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-700/40 rounded-2xl p-3", children: [e.jsxs("div", { className: "flex items-center justify-between gap-4 mb-2", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-zinc-100 truncate", children: l.name }), e.jsx("p", { className: "text-[11px] text-zinc-500 font-mono", children: _(l.size) })] }), e.jsxs("span", { className: "text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-400", children: [Math.round(d[l.name] || 0), "%"] })] }), e.jsx("div", { className: "h-2 bg-zinc-800 rounded-full overflow-hidden", children: e.jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-primary", style: { width: `${Math.min(100, Math.max(0, d[l.name] || 0))}%` } }) })] }, l.name)) })] })] }, "step-2")] })] }), e.jsxs(u.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3", children: [t > 1 && e.jsxs(T, { onClick: () => s(t - 1), variant: "outline", className: "flex-1 h-12 sm:h-14 text-sm sm:text-base border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl", children: [e.jsx(Fe, { className: "w-4 h-4 mr-2" }), "Back"] }), t === 1 && e.jsxs(T, { onClick: () => s(2), disabled: !Je, className: "flex-1 h-12 sm:h-14 text-sm sm:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full", children: ["Continue", e.jsx(Ot, { className: "w-4 h-4 ml-2" })] }), t === 2 && e.jsxs(T, { onClick: () => A(true), disabled: r.length === 0 || c !== "idle" || !!j, className: "flex-1 h-12 sm:h-14 text-sm sm:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full", children: [e.jsx(V, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] })] }), e.jsx(u.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-6 text-center", children: e.jsxs("p", { className: "text-[10px] md:text-xs text-center text-muted-foreground opacity-70", children: ["By continuing, you agree to our ", e.jsx(ee, { href: "/terms", className: "underline hover:text-primary transition-colors", children: "Terms of Service" }), ", ", e.jsx(ee, { href: "/privacy", className: "underline hover:text-primary transition-colors", children: "Privacy Policy" }), " & ", e.jsx("a", { href: "/sitemap.xml", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-primary transition-colors", children: "Sitemap" }), "."] }) })] }), e.jsx(wt, { open: F, onOpenChange: A, children: e.jsxs(jt, { className: "sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl", children: [e.jsxs("div", { className: "relative h-20 bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-amber-950/60 flex items-center justify-center overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12),transparent)]" }), e.jsx(u.div, { initial: { scale: 0, rotate: -20 }, animate: { scale: 1, rotate: 0 }, transition: { type: "spring", stiffness: 400, damping: 25 }, className: "w-12 h-12 bg-amber-500/15 rounded-xl border border-amber-500/25 flex items-center justify-center relative z-10", children: e.jsx(V, { className: "w-6 h-6 text-amber-400" }) })] }), e.jsxs("div", { className: "px-6 pb-6 pt-4", children: [e.jsxs(vt, { className: "mb-4", children: [e.jsx(Nt, { className: "text-lg font-bold text-center", children: "Confirm Encryption" }), e.jsx(zt, { className: "text-center text-zinc-500 text-sm", children: "Review your vault configuration before encrypting" })] }), e.jsxs("div", { className: "space-y-3 mb-5", children: [e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [e.jsx(fe, { className: "w-3.5 h-3.5 text-amber-400" }), e.jsxs("span", { className: "text-xs font-semibold text-zinc-300", children: [r.length, " file", r.length > 1 ? "s" : ""] }), e.jsx("span", { className: "text-xs font-mono text-zinc-600 ml-auto", children: _(Y) })] }), e.jsx("div", { className: "space-y-1.5 max-h-24 overflow-y-auto", children: r.map((l, h) => {
    const b = Ue(l.type), y = Le(l.type);
    return e.jsxs("div", { className: "flex items-center gap-2.5", children: [e.jsx("div", { className: `w-6 h-6 rounded-md border flex items-center justify-center ${y}`, children: e.jsx(b, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs text-zinc-400 truncate flex-1", children: l.name }), e.jsx("span", { className: "text-[10px] font-mono text-zinc-600", children: _(l.size) })] }, h);
  }) })] }), e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [e.jsx(te, { className: "w-3.5 h-3.5 text-emerald-400" }), e.jsx("span", { className: "text-xs font-semibold text-zinc-300", children: "Vault Settings" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ee, { className: "w-3 h-3 text-amber-400" }), e.jsx("span", { className: "text-xs text-zinc-400", children: "Expires:" }), e.jsx("span", { className: "text-xs font-mono text-amber-400", children: Re(n[0]) })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ue, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-xs text-zinc-400", children: "Limit:" }), e.jsx("span", { className: `text-xs font-mono ${i[0] === 1 ? "text-red-400" : "text-emerald-400"}`, children: i[0] === 1 ? "Burn-on-Read" : `${i[0]}\xD7 downloads` })] })] })] })] }), e.jsxs("div", { className: "flex gap-3", children: [e.jsx(T, { variant: "outline", onClick: () => A(false), className: "flex-1 h-12 border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl", children: "Go Back" }), e.jsxs(T, { onClick: Xe, className: "flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20", children: [e.jsx(V, { className: "w-4 h-4 mr-2" }), "Encrypt Now"] })] })] })] }) })] });
}
export {
  Ns as default
};
