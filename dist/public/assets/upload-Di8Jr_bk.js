import { c as Y, r as u, j as e, e as ne, A as Q, m as p, b as Le, X as Re, d as U, a as Oe, f as _e, u as Ve, g as Ke, h as Ge, i as We, L as X, B as E, k as fe, S as J, E as qe, l as ge, n as be, D as Ze, o as He, p as Xe, q as Je, s as Qe, t as Ye, v as et, w as tt, x as st, y as at, z as rt } from "./index-B5eeqRPK.js";
import { z as it } from "./browser-gjyt7kQ7.js";
import { H as ye, Z as ie } from "./zap-CO9dCU-d.js";
import { F as Fe } from "./file-Cx8dJWJZ.js";
import { K as nt } from "./key-CdShLzp3.js";
import { F as Ce } from "./file-text-5AMAkaqP.js";
import { U as ot } from "./upload-cE3y_YaH.js";
import { P as oe, I as lt, F as ct, a as dt, b as mt } from "./paperclip-C3XnrEIS.js";
import { C as xt, T as pt } from "./triangle-alert-bbypd66C.js";
import { C as ut } from "./chevron-right-DzU99w6m.js";
import { F as ht } from "./flame-l2a2LcpR.js";
import { A as ft } from "./arrow-right-PS2x-sn_.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const le = Y("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gt = Y("CloudOff", [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bt = Y("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yt = Y("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]), jt = "vaultbridge-file-cache", wt = 1, D = "pending-files", P = "upload-settings";
function W() {
  return new Promise((t, r) => {
    const s = indexedDB.open(jt, wt);
    s.onerror = () => r(s.error), s.onsuccess = () => t(s.result), s.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(D) || i.createObjectStore(D, { keyPath: "id" }), i.objectStoreNames.contains(P) || i.createObjectStore(P, { keyPath: "id" });
    };
  });
}
function vt(t) {
  return `${t.name}-${t.size}-${t.lastModified}`;
}
async function Me(t) {
  if (t.length === 0) {
    await ce();
    return;
  }
  try {
    const r = t.map(async (a) => ({ file: a, buffer: await a.arrayBuffer() })), s = await Promise.all(r), n = await W(), i = n.transaction(D, "readwrite"), o = i.objectStore(D);
    o.clear();
    for (const { file: a, buffer: h } of s) {
      const d = { id: vt(a), name: a.name, type: a.type, size: a.size, lastModified: a.lastModified, data: h, addedAt: Date.now() };
      o.put(d);
    }
    await new Promise((a, h) => {
      i.oncomplete = () => a(), i.onerror = () => h(i.error);
    }), n.close();
  } catch (r) {
    console.warn("[FileStorage] Failed to save files:", r);
  }
}
async function Nt() {
  try {
    const t = await W(), n = t.transaction(D, "readonly").objectStore(D).getAll(), i = await new Promise((d, b) => {
      n.onsuccess = () => d(n.result || []), n.onerror = () => b(n.error);
    });
    t.close();
    const o = i.map((d) => new File([d.data], d.name, { type: d.type, lastModified: d.lastModified })), a = Date.now() - 24 * 60 * 60 * 1e3, h = i.filter((d) => d.addedAt > a);
    if (h.length !== i.length) {
      const d = h.map((b) => new File([b.data], b.name, { type: b.type, lastModified: b.lastModified }));
      return await Me(d), d;
    }
    return o;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load files:", t), [];
  }
}
async function ce() {
  try {
    const t = await W(), r = t.transaction(D, "readwrite");
    r.objectStore(D).clear(), await new Promise((n, i) => {
      r.oncomplete = () => n(), r.onerror = () => i(r.error);
    }), t.close();
  } catch (t) {
    console.warn("[FileStorage] Failed to clear files:", t);
  }
}
async function zt(t, r) {
  try {
    const s = await W(), n = s.transaction(P, "readwrite"), i = n.objectStore(P), o = { id: "current", expiresIn: t, maxDownloads: r };
    i.put(o), await new Promise((a, h) => {
      n.oncomplete = () => a(), n.onerror = () => h(n.error);
    }), s.close();
  } catch (s) {
    console.warn("[FileStorage] Failed to save settings:", s);
  }
}
async function kt() {
  try {
    const t = await W(), n = t.transaction(P, "readonly").objectStore(P).get("current"), i = await new Promise((o, a) => {
      n.onsuccess = () => o(n.result), n.onerror = () => a(n.error);
    });
    return t.close(), i ? { expiresIn: i.expiresIn, maxDownloads: i.maxDownloads } : null;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load settings:", t), null;
  }
}
function St({ onFilesSelected: t, disabled: r, onDragStateChange: s }) {
  const [n, i] = u.useState(false), [o, a] = u.useState([]), [h, d] = u.useState("idle"), b = u.useRef(true), S = u.useRef(null);
  u.useEffect(() => {
    (async () => {
      try {
        const c = await Nt();
        c.length > 0 && (a(c), t(c), d("restored"), setTimeout(() => d("idle"), 3e3));
      } catch (c) {
        console.warn("[FileDropzone] Failed to load persisted files:", c);
      }
    })();
  }, []), u.useEffect(() => {
    if (b.current) {
      b.current = false;
      return;
    }
    return S.current && clearTimeout(S.current), S.current = setTimeout(async () => {
      try {
        d("saving"), await Me(o), d(o.length > 0 ? "saved" : "idle"), o.length > 0 && setTimeout(() => d("idle"), 2e3);
      } catch (m) {
        console.warn("[FileDropzone] Failed to persist files:", m), d("error");
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [o]), u.useEffect(() => {
    s?.(n);
  }, [n, s]);
  const I = (m) => {
    m.preventDefault(), r || i(true);
  }, ee = () => i(false), [F, A] = u.useState(false), v = (m) => new Promise((c) => {
    if (m.isFile) m.file((C) => {
      c({ [m.fullPath]: C });
    });
    else if (m.isDirectory) {
      const C = m.createReader();
      (() => {
        C.readEntries(async (g) => {
          if (g.length === 0) {
            c({});
            return;
          }
          const j = g.map((k) => v(k)), M = (await Promise.all(j)).reduce((k, L) => ({ ...k, ...L }), {});
          c(M);
        });
      })();
    } else c({});
  }), te = async (m) => {
    if (m.preventDefault(), i(false), r) return;
    const c = m.dataTransfer.items;
    if (!c || c.length === 0) return;
    let C = false;
    const z = [];
    for (let g = 0; g < c.length; g++) {
      const j = c[g].webkitGetAsEntry();
      j && (z.push(j), j.isDirectory && (C = true));
    }
    if (C) {
      A(true);
      try {
        const g = {};
        for (const N of z) {
          const M = await v(N);
          Object.assign(g, M);
        }
        const j = {};
        for (const [N, M] of Object.entries(g)) {
          const k = N.startsWith("/") ? N.slice(1) : N, L = new Uint8Array(await M.arrayBuffer());
          j[k] = L;
        }
        it(j, { level: 6 }, (N, M) => {
          if (N) {
            console.error("Zipping failed", N), A(false);
            return;
          }
          const k = new File([M], "archive.zip", { type: "application/zip" });
          a([k]), t([k]), A(false);
        });
      } catch (g) {
        console.error("Folder scan failed", g), A(false);
      }
    } else if (m.dataTransfer.files && m.dataTransfer.files.length > 0) {
      const g = Array.from(m.dataTransfer.files);
      a(g), t(g);
    }
  }, se = (m) => {
    if (m.target.files && m.target.files.length > 0) {
      const c = Array.from(m.target.files);
      a(c), t(c);
    }
  }, $ = (m) => {
    const c = o.filter((C, z) => z !== m);
    a(c), t(c);
  }, q = o.reduce((m, c) => m + c.size, 0);
  return e.jsxs("div", { className: "w-full space-y-4", children: [e.jsxs("div", { onDragOver: I, onDragLeave: ee, onDrop: te, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${n ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${r ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [e.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: se, disabled: r }), e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: F ? e.jsx(ne, { className: "w-8 h-8 text-primary animate-spin" }) : n ? e.jsx(yt, { className: "w-8 h-8 text-primary" }) : e.jsx(bt, { className: "w-8 h-8 text-muted-foreground" }) }), e.jsx("h3", { className: "text-lg font-semibold mb-1", children: n ? "Drop folder or files" : F ? "Zipping..." : "Drag & drop files or folders here" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: 500 MB" })] }), e.jsx(Q, { children: o.length > 0 && e.jsxs(p.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-3", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs uppercase tracking-wider font-mono text-muted-foreground", children: ["Selected Files (", o.length, ")"] }), e.jsxs(Q, { mode: "wait", children: [h === "restored" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20", children: [e.jsx(ye, { className: "w-3 h-3 text-blue-400" }), e.jsx("span", { className: "text-[10px] font-mono text-blue-400", children: "Restored" })] }, "restored"), h === "saving" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20", children: [e.jsx(ne, { className: "w-3 h-3 text-amber-400 animate-spin" }), e.jsx("span", { className: "text-[10px] font-mono text-amber-400", children: "Saving..." })] }, "saving"), h === "saved" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: [e.jsx(Le, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: "Saved" })] }, "saved"), h === "error" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20", children: [e.jsx(gt, { className: "w-3 h-3 text-red-400" }), e.jsx("span", { className: "text-[10px] font-mono text-red-400", children: "Error" })] }, "error")] })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: [(q / (1024 * 1024)).toFixed(2), " MB"] }), !r && o.length > 1 && e.jsx("button", { onClick: async () => {
    a([]), t([]), await ce();
  }, className: "text-[10px] font-mono uppercase tracking-wider text-red-400/70 hover:text-red-400 transition-colors", children: "Clear All" })] })] }), h === "restored" && e.jsxs(p.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "flex items-center gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10", children: [e.jsx(ye, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }), e.jsx("p", { className: "text-xs text-blue-300", children: "Files restored from your last session. Ready to encrypt!" })] }), o.map((m, c) => e.jsxs(p.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: "p-2 bg-background rounded-md", children: e.jsx(Fe, { className: "w-4 h-4 text-primary" }) }), e.jsxs("div", { className: "truncate", children: [e.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: m.name }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [(m.size / 1024).toFixed(1), " KB"] })] })] }), !r && e.jsx("button", { onClick: () => $(c), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: e.jsx(Re, { className: "w-4 h-4" }) })] }, `${m.name}-${c}`))] }) })] });
}
const je = [{ id: "keys", label: "Generating Keys", icon: nt }, { id: "metadata", label: "Encrypting Metadata", icon: Ce }, { id: "transfer", label: "Encrypting & Uploading", icon: ot }, { id: "done", label: "Complete", icon: le }];
function Ft({ stage: t, step: r, progress: s, statusText: n }) {
  const i = je.findIndex((o) => o.id === r);
  return e.jsxs(p.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [e.jsxs(p.div, { animate: { rotate: t === "encrypting" ? [0, 10, -10, 0] : 0, scale: t === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: t === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [e.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${t === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: t === "success" ? e.jsx(le, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : e.jsx(U, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), t !== "success" && e.jsx(e.Fragment, { children: [0, 1, 2].map((o) => e.jsx(p.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: o * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, o)) })] }), e.jsx(p.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: n }, n), e.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: e.jsx(p.div, { initial: { width: 0 }, animate: { width: `${s}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), e.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(s), "%"] }), e.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: je.map((o, a) => {
    const h = o.id === r, d = a < i, b = a > i, S = o.icon;
    return e.jsxs(p.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: a * 0.1 }, className: `progress-step ${h ? "active" : ""} ${d ? "completed" : ""} ${b ? "pending" : ""}`, children: [e.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${d ? "bg-primary/20" : h ? "bg-primary/10" : "bg-zinc-800"}`, children: d ? e.jsx(le, { className: "w-4 h-4 text-primary" }) : h ? e.jsx(ne, { className: "w-4 h-4 text-primary animate-spin" }) : e.jsx(S, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: o.label })] }, o.id);
  }) }), e.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: e.jsx(p.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (o, a) => e.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, a)) }) }), e.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
const we = 500 * 1024 * 1024, Ct = 500 * 1024 * 1024;
function ve(t) {
  const r = t.reduce((i, o) => i + o.size, 0), s = Math.max(...t.map((i) => i.size));
  if (s > we) {
    const i = t.find((o) => o.size > we);
    return { size: r, isValid: false, errorMessage: `File "${i?.name}" exceeds 500MB limit (${K(s)})`, formattedSize: K(r), estimatedUploadTime: 0 };
  }
  if (r > Ct) return { size: r, isValid: false, errorMessage: `Total upload size ${K(r)} exceeds 500MB limit`, formattedSize: K(r), estimatedUploadTime: 0 };
  const n = Math.ceil(r * 8 / (10 * 1024 * 1024));
  return { size: r, isValid: true, formattedSize: K(r), estimatedUploadTime: n };
}
function K(t) {
  if (t === 0) return "0 Bytes";
  const r = 1024, s = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(r));
  return parseFloat((t / Math.pow(r, n)).toFixed(2)) + " " + s[n];
}
const Ne = [{ id: 1, label: "Select", icon: oe }, { id: 2, label: "Configure", icon: qe }], G = (t) => t === 0 ? "0 B" : t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(1)} MB`, ze = (t) => t.startsWith("image/") ? lt : t.startsWith("video/") ? ct : t.startsWith("audio/") ? dt : t.includes("zip") || t.includes("rar") || t.includes("tar") || t.includes("7z") || t.includes("gz") ? mt : t.includes("pdf") || t.includes("doc") || t.includes("text") || t.includes("sheet") ? Ce : Fe, ke = (t) => t.startsWith("image/") ? "text-sky-400 bg-sky-500/10 border-sky-500/20" : t.startsWith("video/") ? "text-rose-400 bg-rose-500/10 border-rose-500/20" : t.startsWith("audio/") ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : t.includes("zip") || t.includes("rar") || t.includes("tar") ? "text-orange-400 bg-orange-500/10 border-orange-500/20" : t.includes("pdf") ? "text-red-400 bg-red-500/10 border-red-500/20" : "text-amber-400 bg-amber-500/10 border-amber-500/20", Se = (t) => {
  if (t < 24) return `${t}h`;
  const r = Math.floor(t / 24), s = t % 24;
  return s === 0 ? `${r}d` : `${r}d ${s}h`;
};
function _t() {
  const [t, r] = u.useState(1), [s, n] = u.useState([]), [i, o] = u.useState([1]), [a, h] = u.useState([5]), [d, b] = u.useState("idle"), [S, I] = u.useState("keys"), [ee, F] = u.useState(0), [A, v] = u.useState(""), [te, se] = u.useState(false), [$, q] = u.useState(null), [m, c] = u.useState(false), [, C] = Oe(), { toast: z } = _e(), { play: g } = Ve(), j = u.useRef(null), N = Ke(), M = Ge(), k = We();
  u.useEffect(() => {
    (async () => {
      const x = await kt();
      x && (o([x.expiresIn]), h([x.maxDownloads]));
    })();
  }, []), u.useEffect(() => {
    zt(i[0], a[0]);
  }, [i, a]);
  const L = (l, x = 20) => {
    if (l.length <= x) return l;
    const y = l.lastIndexOf(".");
    if (y !== -1) {
      const w = l.substring(y), T = l.substring(0, y);
      if (T.length > x - w.length - 3) return T.substring(0, x - w.length - 3) + "..." + w;
    }
    return l.substring(0, x - 3) + "...";
  }, De = (l) => {
    q(null);
    const x = ve(l);
    if (!x.isValid) {
      g("error"), q(x.errorMessage || "Invalid files"), z({ variant: "destructive", title: "Upload Limit Exceeded", description: x.errorMessage });
      return;
    }
    g("drop"), n(l);
  }, Ee = async () => {
    if (c(false), s.length === 0) return;
    const l = ve(s);
    if (!l.isValid) {
      z({ variant: "destructive", title: "Upload Error", description: l.errorMessage });
      return;
    }
    b("encrypting"), F(0), j.current = new AbortController();
    try {
      const x = Date.now();
      I("keys"), v("Generating military-grade AES-256 keys..."), await new Promise((f) => setTimeout(f, 300));
      const y = await Ye();
      F(10), I("metadata"), v("Encrypting metadata...");
      const w = s.map((f) => ({ name: f.name, type: f.type, size: f.size, fileId: et(), lastModified: f.lastModified })), T = await tt(w, y), de = w.map((f) => ({ fileId: f.fileId, chunks: 1, size: f.size, isCompressed: false, originalSize: f.size }));
      F(20);
      const me = 5;
      let O = null, xe = "", _ = null;
      for (let f = 0; f <= me; f++) {
        O = st(), v(`Deriving PIN-protective wrapper (attempt ${f + 1})...`), xe = await at(y, O.pin);
        try {
          v("Securing vault location..."), _ = await N.mutateAsync({ expiresIn: i[0], maxDownloads: a[0], encryptedMetadata: T, lookupId: O.lookupId, wrappedKey: xe, files: de });
          break;
        } catch (B) {
          const V = B;
          if (!(V.status === 409 || V.code === "LOOKUP_ID_CONFLICT") || f === me) throw B;
        }
      }
      if (!_ || !O) throw new Error("Could not allocate a unique access code. Please retry.");
      F(30), b("uploading"), I("transfer");
      const Ae = s.length;
      for (let f = 0; f < s.length; f++) {
        if (j.current.signal.aborted) throw new Error("Upload cancelled");
        const B = s[f], V = de[f].fileId, Z = L(B.name);
        v(`Reading ${Z}...`);
        const Te = await B.arrayBuffer();
        v(`Encrypting ${Z}...`);
        const { iv: re, encryptedData: ue } = await rt(Te, y), H = new Uint8Array(re.byteLength + ue.byteLength);
        H.set(re, 0), H.set(new Uint8Array(ue), re.byteLength), v(`Uploading ${Z}...`);
        const { uploadUrl: Be, storagePath: Ue } = await M.mutateAsync({ vaultId: _.id, fileId: V, chunkIndex: 0, size: H.byteLength }), he = await fetch(Be, { method: "PUT", body: H, signal: j.current.signal });
        if (!he.ok) throw new Error(`Upload failed for ${B.name}: ${he.statusText}`);
        await k.mutateAsync({ vaultId: _.id, fileId: V, chunkIndex: 0, storagePath: Ue });
        const Pe = 30 + (f + 1) / Ae * 65;
        F(Pe);
      }
      I("done"), F(100), v("Finalizing secure vault..."), b("success"), g("success"), await ce();
      const pe = Date.now() - x, $e = R / (pe / 1e3);
      setTimeout(() => {
        C(`/success/${_.id}#code=${O.fullCode}&time=${pe}&speed=${Math.floor($e)}`);
      }, 800);
    } catch (x) {
      console.error(x), g("error"), b("idle"), x instanceof Error && x.message === "Upload cancelled" ? z({ title: "Upload Cancelled", variant: "default" }) : z({ variant: "destructive", title: "Upload Failed", description: x instanceof Error ? x.message : "An error occurred" });
    }
  }, R = s.reduce((l, x) => l + x.size, 0), ae = Math.min(R / (500 * 1024 * 1024) * 100, 100), Ie = t === 1 ? s.length > 0 && !$ : true;
  return e.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [e.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), e.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), e.jsx("header", { className: "relative z-10 px-4 sm:px-6 py-4 sm:py-6 border-b border-white/5 safe-top", children: e.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [e.jsx(X, { href: "/", children: e.jsxs(p.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group shrink-0", children: [e.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors", children: e.jsx(U, { className: "w-4 h-4 sm:w-5 sm:h-5 text-amber-500" }) }), e.jsxs("h1", { className: "text-lg sm:text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors", children: ["VAULT", e.jsx("span", { className: "text-amber-500", children: "BRIDGE" })] })] }) }), e.jsx(X, { href: "/", children: e.jsxs(E, { variant: "ghost", size: "sm", className: "gap-1.5 sm:gap-2 text-zinc-400 hover:text-white hover:bg-white/5 px-2 sm:px-3 text-xs sm:text-sm", children: [e.jsx(fe, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "Back" })] }) })] }) }), e.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-3 sm:px-6 py-6 sm:py-12 safe-bottom", children: [e.jsxs(p.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-6 sm:mb-8", children: [e.jsxs("div", { className: "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 text-amber-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4", children: [e.jsx(J, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }), "End-to-End Encrypted Vault"] }), e.jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent", children: "Secure Upload" }), e.jsx("p", { className: "text-zinc-400 text-xs sm:text-sm max-w-md mx-auto px-2", children: "Select files, configure vault settings, then encrypt & upload \u2014 all client-side, zero-knowledge." })] }), e.jsx(p.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "flex items-center justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-8", children: Ne.map((l, x) => {
    const y = t > l.id, w = t === l.id, T = l.icon;
    return e.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-3", children: [e.jsxs("button", { onClick: () => {
      y && r(l.id);
    }, disabled: !y && !w, className: `flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${y ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20" : w ? "bg-amber-500/15 text-amber-300 border border-amber-500/30" : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 cursor-not-allowed"}`, children: [y ? e.jsx(xt, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }) : e.jsx(T, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }), e.jsx("span", { className: "hidden sm:inline", children: l.label })] }), x < Ne.length - 1 && e.jsx(ut, { className: `w-3 h-3 sm:w-4 sm:h-4 ${t > l.id ? "text-emerald-500/50" : "text-zinc-700"}` })] }, l.id);
  }) }), e.jsxs(p.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 }, className: `bg-zinc-900/50 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl ${te ? "ring-2 ring-amber-500 bg-amber-500/5" : ""}`, children: [e.jsx(Q, { children: d !== "idle" && e.jsxs(p.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [e.jsx(Ft, { stage: d, step: S, progress: ee, statusText: A }), d === "uploading" && e.jsx(E, { variant: "outline", size: "sm", onClick: () => j.current?.abort(), className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), e.jsxs(Q, { mode: "wait", children: [t === 1 && e.jsxs(p.div, { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 }, transition: { duration: 0.25 }, className: "p-4 sm:p-8 space-y-4 sm:space-y-6", children: [e.jsx(St, { onFilesSelected: De, disabled: d !== "idle", onDragStateChange: se }), $ && e.jsxs(p.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3", children: [e.jsx(pt, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-red-400", children: $ }), e.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Maximum file size: 500 MB" })] })] }), s.length > 0 && e.jsxs(p.div, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between items-center text-xs", children: [e.jsxs("span", { className: "text-zinc-400", children: [s.length, " file", s.length > 1 ? "s" : "", " selected"] }), e.jsxs("span", { className: "font-mono text-amber-400", children: [G(R), " / 500 MB"] })] }), e.jsx("div", { className: "h-1.5 bg-zinc-800 rounded-full overflow-hidden", children: e.jsx(p.div, { initial: { width: 0 }, animate: { width: `${ae}%` }, className: `h-full rounded-full transition-colors ${ae > 90 ? "bg-red-500" : ae > 70 ? "bg-amber-500" : "bg-amber-500/70"}` }) })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 justify-center pt-2", children: [e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(J, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(U, { className: "w-3 h-3 text-amber-500" }), "Lossless Transfer"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(ie, { className: "w-3 h-3 text-blue-500" }), "Max 500MB"] })] })] }, "step-1"), t === 2 && e.jsxs(p.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 }, transition: { duration: 0.25 }, className: "p-4 sm:p-8 space-y-4 sm:space-y-6", children: [e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-2 sm:space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(oe, { className: "w-4 h-4 text-amber-400" }), e.jsx("span", { className: "text-sm font-semibold text-zinc-200", children: "Attachments" })] }), e.jsx("span", { className: "text-xs font-mono text-zinc-500", children: G(R) })] }), e.jsx("div", { className: "space-y-1.5 max-h-32 overflow-y-auto", children: s.map((l, x) => {
    const y = ze(l.type), w = ke(l.type);
    return e.jsxs("div", { className: "flex items-center gap-3 py-1.5", children: [e.jsx("div", { className: `w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${w}`, children: e.jsx(y, { className: "w-3.5 h-3.5" }) }), e.jsx("span", { className: "text-sm text-zinc-300 truncate flex-1", children: l.name }), e.jsx("span", { className: "text-xs font-mono text-zinc-500 flex-shrink-0", children: G(l.size) })] }, x);
  }) })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6", children: [e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-3 sm:space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(ge, { className: "w-4 h-4 text-amber-400" }), "Auto-Destruct"] }), e.jsx("span", { className: "text-sm font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-lg", children: Se(i[0]) })] }), e.jsx(be, { value: i, onValueChange: o, min: 1, max: 168, step: 1, className: "py-2" }), e.jsx("p", { className: "text-[10px] text-zinc-600 leading-relaxed", children: "Vault & all encrypted files will be permanently erased after this time." })] }), e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-4 sm:p-5 space-y-3 sm:space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(ie, { className: "w-4 h-4 text-emerald-400" }), "Download Limit"] }), e.jsx("span", { className: `text-sm font-mono font-bold px-2.5 py-0.5 rounded-lg ${a[0] === 1 ? "text-red-400 bg-red-500/10" : "text-emerald-400 bg-emerald-500/10"}`, children: a[0] === 1 ? "BURN" : `${a[0]}\xD7` })] }), e.jsx(be, { value: a, onValueChange: h, min: 1, max: 100, step: 1, disabled: a[0] === 1, className: a[0] === 1 ? "opacity-30" : "" }), e.jsxs("button", { onClick: () => h(a[0] === 1 ? [5] : [1]), className: `w-full text-xs cursor-pointer select-none transition-all py-2.5 rounded-xl border flex items-center justify-center gap-2 ${a[0] === 1 ? "bg-red-500/10 border-red-500/25 text-red-400" : "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"}`, children: [e.jsx(ht, { className: `w-3.5 h-3.5 ${a[0] === 1 ? "text-red-400" : ""}` }), a[0] === 1 ? "Burn-on-Read Active (1 view)" : "Enable Burn-on-Read"] })] })] }), e.jsxs("div", { className: "bg-amber-500/5 border border-amber-500/10 rounded-2xl p-3 sm:p-4 flex items-start gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0", children: e.jsx(J, { className: "w-4.5 h-4.5 text-amber-400" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-amber-300", children: "Zero-Knowledge Encryption" }), e.jsx("p", { className: "text-xs text-zinc-500 mt-0.5 leading-relaxed", children: "Encryption happens entirely in your browser. We never see your files, keys, or data." })] })] })] }, "step-2")] })] }), e.jsxs(p.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3", children: [t > 1 && e.jsxs(E, { onClick: () => r(t - 1), variant: "outline", className: "flex-1 h-12 sm:h-14 text-sm sm:text-base border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl", children: [e.jsx(fe, { className: "w-4 h-4 mr-2" }), "Back"] }), t === 1 && e.jsxs(E, { onClick: () => r(2), disabled: !Ie, className: "flex-1 h-12 sm:h-14 text-sm sm:text-base font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full", children: ["Continue", e.jsx(ft, { className: "w-4 h-4 ml-2" })] }), t === 2 && e.jsxs(E, { onClick: () => c(true), disabled: s.length === 0 || d !== "idle" || !!$, className: "flex-1 h-12 sm:h-14 text-sm sm:text-base font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 w-full", children: [e.jsx(U, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] })] }), e.jsx(p.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-6 text-center", children: e.jsxs("p", { className: "text-[10px] md:text-xs text-center text-muted-foreground opacity-70", children: ["By continuing, you agree to our ", e.jsx(X, { href: "/terms", className: "underline hover:text-primary transition-colors", children: "Terms of Service" }), ", ", e.jsx(X, { href: "/privacy", className: "underline hover:text-primary transition-colors", children: "Privacy Policy" }), " & ", e.jsx("a", { href: "/sitemap.xml", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-primary transition-colors", children: "Sitemap" }), "."] }) })] }), e.jsx(Ze, { open: m, onOpenChange: c, children: e.jsxs(He, { className: "sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl", children: [e.jsxs("div", { className: "relative h-20 bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-amber-950/60 flex items-center justify-center overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12),transparent)]" }), e.jsx(p.div, { initial: { scale: 0, rotate: -20 }, animate: { scale: 1, rotate: 0 }, transition: { type: "spring", stiffness: 400, damping: 25 }, className: "w-12 h-12 bg-amber-500/15 rounded-xl border border-amber-500/25 flex items-center justify-center relative z-10", children: e.jsx(U, { className: "w-6 h-6 text-amber-400" }) })] }), e.jsxs("div", { className: "px-6 pb-6 pt-4", children: [e.jsxs(Xe, { className: "mb-4", children: [e.jsx(Je, { className: "text-lg font-bold text-center", children: "Confirm Encryption" }), e.jsx(Qe, { className: "text-center text-zinc-500 text-sm", children: "Review your vault configuration before encrypting" })] }), e.jsxs("div", { className: "space-y-3 mb-5", children: [e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [e.jsx(oe, { className: "w-3.5 h-3.5 text-amber-400" }), e.jsxs("span", { className: "text-xs font-semibold text-zinc-300", children: [s.length, " file", s.length > 1 ? "s" : ""] }), e.jsx("span", { className: "text-xs font-mono text-zinc-600 ml-auto", children: G(R) })] }), e.jsx("div", { className: "space-y-1.5 max-h-24 overflow-y-auto", children: s.map((l, x) => {
    const y = ze(l.type), w = ke(l.type);
    return e.jsxs("div", { className: "flex items-center gap-2.5", children: [e.jsx("div", { className: `w-6 h-6 rounded-md border flex items-center justify-center ${w}`, children: e.jsx(y, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs text-zinc-400 truncate flex-1", children: l.name }), e.jsx("span", { className: "text-[10px] font-mono text-zinc-600", children: G(l.size) })] }, x);
  }) })] }), e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [e.jsx(J, { className: "w-3.5 h-3.5 text-emerald-400" }), e.jsx("span", { className: "text-xs font-semibold text-zinc-300", children: "Vault Settings" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ge, { className: "w-3 h-3 text-amber-400" }), e.jsx("span", { className: "text-xs text-zinc-400", children: "Expires:" }), e.jsx("span", { className: "text-xs font-mono text-amber-400", children: Se(i[0]) })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ie, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-xs text-zinc-400", children: "Limit:" }), e.jsx("span", { className: `text-xs font-mono ${a[0] === 1 ? "text-red-400" : "text-emerald-400"}`, children: a[0] === 1 ? "Burn-on-Read" : `${a[0]}\xD7 downloads` })] })] })] })] }), e.jsxs("div", { className: "flex gap-3", children: [e.jsx(E, { variant: "outline", onClick: () => c(false), className: "flex-1 h-12 border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl", children: "Go Back" }), e.jsxs(E, { onClick: Ee, className: "flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20", children: [e.jsx(U, { className: "w-4 h-4 mr-2" }), "Encrypt Now"] })] })] })] }) })] });
}
export {
  _t as default
};
