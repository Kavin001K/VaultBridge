import { c as V, r as u, j as e, i as re, A as q, m as p, C as Pe, X as Le, b as B, a as Re, k as Oe, u as Ve, l as _e, n as Ke, o as Ge, L as W, B as E, p as ue, d as Z, E as We, q as Ze, s as qe, Z as ae, t as fe, v as he, w as He, D as Xe, e as Je, f as Qe, g as Ye, h as et, x as tt, y as st, z as at, F as rt, H as it, I as nt } from "./index-Bp-iVgYV.js";
import { z as ot } from "./browser-gjyt7kQ7.js";
import { H as ge } from "./hard-drive-D1tOq5On.js";
import { F as ke } from "./file-CRUYaZb7.js";
import { K as lt } from "./key-BTwBHWBB.js";
import { F as Se } from "./file-text-CFFKTbHS.js";
import { U as ct } from "./upload-fmNAfe41.js";
import { P as ie, I as dt, F as mt, a as xt, b as pt } from "./paperclip-B5r8a_O0.js";
import { T as ut } from "./triangle-alert-DNIgbHuX.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ne = V("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ft = V("CloudOff", [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ht = V("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gt = V("Flame", [["path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z", key: "96xj49" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bt = V("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]), yt = "vaultbridge-file-cache", jt = 1, D = "pending-files", U = "upload-settings";
function _() {
  return new Promise((t, r) => {
    const s = indexedDB.open(yt, jt);
    s.onerror = () => r(s.error), s.onsuccess = () => t(s.result), s.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(D) || i.createObjectStore(D, { keyPath: "id" }), i.objectStoreNames.contains(U) || i.createObjectStore(U, { keyPath: "id" });
    };
  });
}
function wt(t) {
  return `${t.name}-${t.size}-${t.lastModified}`;
}
async function Fe(t) {
  if (t.length === 0) {
    await oe();
    return;
  }
  try {
    const r = t.map(async (a) => ({ file: a, buffer: await a.arrayBuffer() })), s = await Promise.all(r), n = await _(), i = n.transaction(D, "readwrite"), o = i.objectStore(D);
    o.clear();
    for (const { file: a, buffer: f } of s) {
      const d = { id: wt(a), name: a.name, type: a.type, size: a.size, lastModified: a.lastModified, data: f, addedAt: Date.now() };
      o.put(d);
    }
    await new Promise((a, f) => {
      i.oncomplete = () => a(), i.onerror = () => f(i.error);
    }), n.close();
  } catch (r) {
    console.warn("[FileStorage] Failed to save files:", r);
  }
}
async function vt() {
  try {
    const t = await _(), n = t.transaction(D, "readonly").objectStore(D).getAll(), i = await new Promise((d, g) => {
      n.onsuccess = () => d(n.result || []), n.onerror = () => g(n.error);
    });
    t.close();
    const o = i.map((d) => new File([d.data], d.name, { type: d.type, lastModified: d.lastModified })), a = Date.now() - 24 * 60 * 60 * 1e3, f = i.filter((d) => d.addedAt > a);
    if (f.length !== i.length) {
      const d = f.map((g) => new File([g.data], g.name, { type: g.type, lastModified: g.lastModified }));
      return await Fe(d), d;
    }
    return o;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load files:", t), [];
  }
}
async function oe() {
  try {
    const t = await _(), r = t.transaction(D, "readwrite");
    r.objectStore(D).clear(), await new Promise((n, i) => {
      r.oncomplete = () => n(), r.onerror = () => i(r.error);
    }), t.close();
  } catch (t) {
    console.warn("[FileStorage] Failed to clear files:", t);
  }
}
async function Nt(t, r) {
  try {
    const s = await _(), n = s.transaction(U, "readwrite"), i = n.objectStore(U), o = { id: "current", expiresIn: t, maxDownloads: r };
    i.put(o), await new Promise((a, f) => {
      n.oncomplete = () => a(), n.onerror = () => f(n.error);
    }), s.close();
  } catch (s) {
    console.warn("[FileStorage] Failed to save settings:", s);
  }
}
async function zt() {
  try {
    const t = await _(), n = t.transaction(U, "readonly").objectStore(U).get("current"), i = await new Promise((o, a) => {
      n.onsuccess = () => o(n.result), n.onerror = () => a(n.error);
    });
    return t.close(), i ? { expiresIn: i.expiresIn, maxDownloads: i.maxDownloads } : null;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load settings:", t), null;
  }
}
function kt({ onFilesSelected: t, disabled: r, onDragStateChange: s }) {
  const [n, i] = u.useState(false), [o, a] = u.useState([]), [f, d] = u.useState("idle"), g = u.useRef(true), S = u.useRef(null);
  u.useEffect(() => {
    (async () => {
      try {
        const c = await vt();
        c.length > 0 && (a(c), t(c), d("restored"), setTimeout(() => d("idle"), 3e3));
      } catch (c) {
        console.warn("[FileDropzone] Failed to load persisted files:", c);
      }
    })();
  }, []), u.useEffect(() => {
    if (g.current) {
      g.current = false;
      return;
    }
    return S.current && clearTimeout(S.current), S.current = setTimeout(async () => {
      try {
        d("saving"), await Fe(o), d(o.length > 0 ? "saved" : "idle"), o.length > 0 && setTimeout(() => d("idle"), 2e3);
      } catch (m) {
        console.warn("[FileDropzone] Failed to persist files:", m), d("error");
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [o]), u.useEffect(() => {
    s?.(n);
  }, [n, s]);
  const A = (m) => {
    m.preventDefault(), r || i(true);
  }, H = () => i(false), [F, I] = u.useState(false), v = (m) => new Promise((c) => {
    if (m.isFile) m.file((C) => {
      c({ [m.fullPath]: C });
    });
    else if (m.isDirectory) {
      const C = m.createReader();
      (() => {
        C.readEntries(async (h) => {
          if (h.length === 0) {
            c({});
            return;
          }
          const w = h.map((k) => v(k)), M = (await Promise.all(w)).reduce((k, P) => ({ ...k, ...P }), {});
          c(M);
        });
      })();
    } else c({});
  }), X = async (m) => {
    if (m.preventDefault(), i(false), r) return;
    const c = m.dataTransfer.items;
    if (!c || c.length === 0) return;
    let C = false;
    const z = [];
    for (let h = 0; h < c.length; h++) {
      const w = c[h].webkitGetAsEntry();
      w && (z.push(w), w.isDirectory && (C = true));
    }
    if (C) {
      I(true);
      try {
        const h = {};
        for (const N of z) {
          const M = await v(N);
          Object.assign(h, M);
        }
        const w = {};
        for (const [N, M] of Object.entries(h)) {
          const k = N.startsWith("/") ? N.slice(1) : N, P = new Uint8Array(await M.arrayBuffer());
          w[k] = P;
        }
        ot(w, { level: 6 }, (N, M) => {
          if (N) {
            console.error("Zipping failed", N), I(false);
            return;
          }
          const k = new File([M], "archive.zip", { type: "application/zip" });
          a([k]), t([k]), I(false);
        });
      } catch (h) {
        console.error("Folder scan failed", h), I(false);
      }
    } else if (m.dataTransfer.files && m.dataTransfer.files.length > 0) {
      const h = Array.from(m.dataTransfer.files);
      a(h), t(h);
    }
  }, J = (m) => {
    if (m.target.files && m.target.files.length > 0) {
      const c = Array.from(m.target.files);
      a(c), t(c);
    }
  }, $ = (m) => {
    const c = o.filter((C, z) => z !== m);
    a(c), t(c);
  }, K = o.reduce((m, c) => m + c.size, 0);
  return e.jsxs("div", { className: "w-full space-y-4", children: [e.jsxs("div", { onDragOver: A, onDragLeave: H, onDrop: X, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${n ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${r ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [e.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: J, disabled: r }), e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: F ? e.jsx(re, { className: "w-8 h-8 text-primary animate-spin" }) : n ? e.jsx(bt, { className: "w-8 h-8 text-primary" }) : e.jsx(ht, { className: "w-8 h-8 text-muted-foreground" }) }), e.jsx("h3", { className: "text-lg font-semibold mb-1", children: n ? "Drop folder or files" : F ? "Zipping..." : "Drag & drop files or folders here" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: 500 MB" })] }), e.jsx(q, { children: o.length > 0 && e.jsxs(p.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-3", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs uppercase tracking-wider font-mono text-muted-foreground", children: ["Selected Files (", o.length, ")"] }), e.jsxs(q, { mode: "wait", children: [f === "restored" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20", children: [e.jsx(ge, { className: "w-3 h-3 text-blue-400" }), e.jsx("span", { className: "text-[10px] font-mono text-blue-400", children: "Restored" })] }, "restored"), f === "saving" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20", children: [e.jsx(re, { className: "w-3 h-3 text-amber-400 animate-spin" }), e.jsx("span", { className: "text-[10px] font-mono text-amber-400", children: "Saving..." })] }, "saving"), f === "saved" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: [e.jsx(Pe, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: "Saved" })] }, "saved"), f === "error" && e.jsxs(p.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20", children: [e.jsx(ft, { className: "w-3 h-3 text-red-400" }), e.jsx("span", { className: "text-[10px] font-mono text-red-400", children: "Error" })] }, "error")] })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: [(K / (1024 * 1024)).toFixed(2), " MB"] }), !r && o.length > 1 && e.jsx("button", { onClick: async () => {
    a([]), t([]), await oe();
  }, className: "text-[10px] font-mono uppercase tracking-wider text-red-400/70 hover:text-red-400 transition-colors", children: "Clear All" })] })] }), f === "restored" && e.jsxs(p.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "flex items-center gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10", children: [e.jsx(ge, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }), e.jsx("p", { className: "text-xs text-blue-300", children: "Files restored from your last session. Ready to encrypt!" })] }), o.map((m, c) => e.jsxs(p.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: "p-2 bg-background rounded-md", children: e.jsx(ke, { className: "w-4 h-4 text-primary" }) }), e.jsxs("div", { className: "truncate", children: [e.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: m.name }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [(m.size / 1024).toFixed(1), " KB"] })] })] }), !r && e.jsx("button", { onClick: () => $(c), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: e.jsx(Le, { className: "w-4 h-4" }) })] }, `${m.name}-${c}`))] }) })] });
}
const be = [{ id: "keys", label: "Generating Keys", icon: lt }, { id: "metadata", label: "Encrypting Metadata", icon: Se }, { id: "transfer", label: "Encrypting & Uploading", icon: ct }, { id: "done", label: "Complete", icon: ne }];
function St({ stage: t, step: r, progress: s, statusText: n }) {
  const i = be.findIndex((o) => o.id === r);
  return e.jsxs(p.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [e.jsxs(p.div, { animate: { rotate: t === "encrypting" ? [0, 10, -10, 0] : 0, scale: t === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: t === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [e.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${t === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: t === "success" ? e.jsx(ne, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : e.jsx(B, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), t !== "success" && e.jsx(e.Fragment, { children: [0, 1, 2].map((o) => e.jsx(p.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: o * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, o)) })] }), e.jsx(p.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: n }, n), e.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: e.jsx(p.div, { initial: { width: 0 }, animate: { width: `${s}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), e.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(s), "%"] }), e.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: be.map((o, a) => {
    const f = o.id === r, d = a < i, g = a > i, S = o.icon;
    return e.jsxs(p.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: a * 0.1 }, className: `progress-step ${f ? "active" : ""} ${d ? "completed" : ""} ${g ? "pending" : ""}`, children: [e.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${d ? "bg-primary/20" : f ? "bg-primary/10" : "bg-zinc-800"}`, children: d ? e.jsx(ne, { className: "w-4 h-4 text-primary" }) : f ? e.jsx(re, { className: "w-4 h-4 text-primary animate-spin" }) : e.jsx(S, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: o.label })] }, o.id);
  }) }), e.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: e.jsx(p.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (o, a) => e.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, a)) }) }), e.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
const ye = 500 * 1024 * 1024, Ft = 500 * 1024 * 1024;
function je(t) {
  const r = t.reduce((i, o) => i + o.size, 0), s = Math.max(...t.map((i) => i.size));
  if (s > ye) {
    const i = t.find((o) => o.size > ye);
    return { size: r, isValid: false, errorMessage: `File "${i?.name}" exceeds 500MB limit (${R(s)})`, formattedSize: R(r), estimatedUploadTime: 0 };
  }
  if (r > Ft) return { size: r, isValid: false, errorMessage: `Total upload size ${R(r)} exceeds 500MB limit`, formattedSize: R(r), estimatedUploadTime: 0 };
  const n = Math.ceil(r * 8 / (10 * 1024 * 1024));
  return { size: r, isValid: true, formattedSize: R(r), estimatedUploadTime: n };
}
function R(t) {
  if (t === 0) return "0 Bytes";
  const r = 1024, s = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(r));
  return parseFloat((t / Math.pow(r, n)).toFixed(2)) + " " + s[n];
}
const we = [{ id: 1, label: "Select", icon: ie }, { id: 2, label: "Configure", icon: We }], O = (t) => t === 0 ? "0 B" : t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(1)} MB`, ve = (t) => t.startsWith("image/") ? dt : t.startsWith("video/") ? mt : t.startsWith("audio/") ? xt : t.includes("zip") || t.includes("rar") || t.includes("tar") || t.includes("7z") || t.includes("gz") ? pt : t.includes("pdf") || t.includes("doc") || t.includes("text") || t.includes("sheet") ? Se : ke, Ne = (t) => t.startsWith("image/") ? "text-sky-400 bg-sky-500/10 border-sky-500/20" : t.startsWith("video/") ? "text-rose-400 bg-rose-500/10 border-rose-500/20" : t.startsWith("audio/") ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : t.includes("zip") || t.includes("rar") || t.includes("tar") ? "text-orange-400 bg-orange-500/10 border-orange-500/20" : t.includes("pdf") ? "text-red-400 bg-red-500/10 border-red-500/20" : "text-amber-400 bg-amber-500/10 border-amber-500/20", ze = (t) => {
  if (t < 24) return `${t}h`;
  const r = Math.floor(t / 24), s = t % 24;
  return s === 0 ? `${r}d` : `${r}d ${s}h`;
};
function Pt() {
  const [t, r] = u.useState(1), [s, n] = u.useState([]), [i, o] = u.useState([24]), [a, f] = u.useState([5]), [d, g] = u.useState("idle"), [S, A] = u.useState("keys"), [H, F] = u.useState(0), [I, v] = u.useState(""), [X, J] = u.useState(false), [$, K] = u.useState(null), [m, c] = u.useState(false), [, C] = Re(), { toast: z } = Oe(), { play: h } = Ve(), w = u.useRef(null), N = _e(), M = Ke(), k = Ge();
  u.useEffect(() => {
    (async () => {
      const x = await zt();
      x && (o([x.expiresIn]), f([x.maxDownloads]));
    })();
  }, []), u.useEffect(() => {
    Nt(i[0], a[0]);
  }, [i, a]);
  const P = (l, x = 20) => {
    if (l.length <= x) return l;
    const b = l.lastIndexOf(".");
    if (b !== -1) {
      const j = l.substring(b), T = l.substring(0, b);
      if (T.length > x - j.length - 3) return T.substring(0, x - j.length - 3) + "..." + j;
    }
    return l.substring(0, x - 3) + "...";
  }, Ce = (l) => {
    K(null);
    const x = je(l);
    if (!x.isValid) {
      h("error"), K(x.errorMessage || "Invalid files"), z({ variant: "destructive", title: "Upload Limit Exceeded", description: x.errorMessage });
      return;
    }
    h("drop"), n(l);
  }, Me = async () => {
    if (c(false), s.length === 0) return;
    const l = je(s);
    if (!l.isValid) {
      z({ variant: "destructive", title: "Upload Error", description: l.errorMessage });
      return;
    }
    g("encrypting"), F(0), w.current = new AbortController();
    try {
      const x = Date.now();
      A("keys"), v("Generating military-grade AES-256 keys..."), await new Promise((y) => setTimeout(y, 300));
      const b = await tt(), j = st();
      v("Deriving PIN-protective wrapper...");
      const T = await at(b, j.pin);
      F(10), A("metadata"), v("Encrypting metadata...");
      const le = s.map((y) => ({ name: y.name, type: y.type, size: y.size, fileId: rt(), lastModified: y.lastModified })), Ee = await it(le, b), ce = le.map((y) => ({ fileId: y.fileId, chunks: 1, size: y.size, isCompressed: false, originalSize: y.size }));
      F(20), v("Securing vault location...");
      const Y = await N.mutateAsync({ expiresIn: i[0], maxDownloads: a[0], encryptedMetadata: Ee, lookupId: j.lookupId, wrappedKey: T, files: ce });
      F(30), g("uploading"), A("transfer");
      const Ae = s.length;
      for (let y = 0; y < s.length; y++) {
        if (w.current.signal.aborted) throw new Error("Upload cancelled");
        const ee = s[y], me = ce[y].fileId, te = P(ee.name);
        v(`Reading ${te}...`);
        const $e = await ee.arrayBuffer();
        v(`Encrypting ${te}...`);
        const { iv: se, encryptedData: xe } = await nt($e, b), G = new Uint8Array(se.byteLength + xe.byteLength);
        G.set(se, 0), G.set(new Uint8Array(xe), se.byteLength), v(`Uploading ${te}...`);
        const { uploadUrl: Te, storagePath: Be } = await M.mutateAsync({ vaultId: Y.id, fileId: me, chunkIndex: 0, size: G.byteLength }), pe = await fetch(Te, { method: "PUT", body: G, signal: w.current.signal });
        if (!pe.ok) throw new Error(`Upload failed for ${ee.name}: ${pe.statusText}`);
        await k.mutateAsync({ vaultId: Y.id, fileId: me, chunkIndex: 0, storagePath: Be });
        const Ue = 30 + (y + 1) / Ae * 65;
        F(Ue);
      }
      A("done"), F(100), v("Finalizing secure vault..."), g("success"), h("success"), await oe();
      const de = Date.now() - x, Ie = L / (de / 1e3);
      setTimeout(() => {
        C(`/success/${Y.id}#code=${j.fullCode}&time=${de}&speed=${Math.floor(Ie)}`);
      }, 800);
    } catch (x) {
      console.error(x), h("error"), g("idle"), x instanceof Error && x.message === "Upload cancelled" ? z({ title: "Upload Cancelled", variant: "default" }) : z({ variant: "destructive", title: "Upload Failed", description: x instanceof Error ? x.message : "An error occurred" });
    }
  }, L = s.reduce((l, x) => l + x.size, 0), Q = Math.min(L / (500 * 1024 * 1024) * 100, 100), De = t === 1 ? s.length > 0 && !$ : true;
  return e.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [e.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), e.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), e.jsx("header", { className: "relative z-10 px-6 py-6 border-b border-white/5", children: e.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [e.jsx(W, { href: "/", children: e.jsxs(p.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group", children: [e.jsx("div", { className: "w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors", children: e.jsx(B, { className: "w-5 h-5 text-amber-500" }) }), e.jsxs("h1", { className: "text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors", children: ["VAULT", e.jsx("span", { className: "text-amber-500", children: "BRIDGE" })] })] }) }), e.jsx(W, { href: "/", children: e.jsxs(E, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [e.jsx(ue, { className: "w-4 h-4" }), "Back"] }) })] }) }), e.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 py-12", children: [e.jsxs(p.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-8", children: [e.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4", children: [e.jsx(Z, { className: "w-3.5 h-3.5" }), "End-to-End Encrypted Vault"] }), e.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent", children: "Secure Upload" }), e.jsx("p", { className: "text-zinc-400 text-sm max-w-md mx-auto", children: "Select files, configure vault settings, then encrypt & upload \u2014 all client-side, zero-knowledge." })] }), e.jsx(p.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "flex items-center justify-center gap-3 mb-8", children: we.map((l, x) => {
    const b = t > l.id, j = t === l.id, T = l.icon;
    return e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("button", { onClick: () => {
      b && r(l.id);
    }, disabled: !b && !j, className: `flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${b ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20" : j ? "bg-amber-500/15 text-amber-300 border border-amber-500/30" : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 cursor-not-allowed"}`, children: [b ? e.jsx(Ze, { className: "w-3.5 h-3.5" }) : e.jsx(T, { className: "w-3.5 h-3.5" }), l.label] }), x < we.length - 1 && e.jsx(qe, { className: `w-4 h-4 ${t > l.id ? "text-emerald-500/50" : "text-zinc-700"}` })] }, l.id);
  }) }), e.jsxs(p.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 }, className: `bg-zinc-900/50 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl ${X ? "ring-2 ring-amber-500 bg-amber-500/5" : ""}`, children: [e.jsx(q, { children: d !== "idle" && e.jsxs(p.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [e.jsx(St, { stage: d, step: S, progress: H, statusText: I }), d === "uploading" && e.jsx(E, { variant: "outline", size: "sm", onClick: () => w.current?.abort(), className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), e.jsxs(q, { mode: "wait", children: [t === 1 && e.jsxs(p.div, { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 }, transition: { duration: 0.25 }, className: "p-8 space-y-6", children: [e.jsx(kt, { onFilesSelected: Ce, disabled: d !== "idle", onDragStateChange: J }), $ && e.jsxs(p.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3", children: [e.jsx(ut, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-red-400", children: $ }), e.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Maximum file size: 500 MB" })] })] }), s.length > 0 && e.jsxs(p.div, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between items-center text-xs", children: [e.jsxs("span", { className: "text-zinc-400", children: [s.length, " file", s.length > 1 ? "s" : "", " selected"] }), e.jsxs("span", { className: "font-mono text-amber-400", children: [O(L), " / 500 MB"] })] }), e.jsx("div", { className: "h-1.5 bg-zinc-800 rounded-full overflow-hidden", children: e.jsx(p.div, { initial: { width: 0 }, animate: { width: `${Q}%` }, className: `h-full rounded-full transition-colors ${Q > 90 ? "bg-red-500" : Q > 70 ? "bg-amber-500" : "bg-amber-500/70"}` }) })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 justify-center pt-2", children: [e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(Z, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(B, { className: "w-3 h-3 text-amber-500" }), "Lossless Transfer"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(ae, { className: "w-3 h-3 text-blue-500" }), "Max 500MB"] })] })] }, "step-1"), t === 2 && e.jsxs(p.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 }, transition: { duration: 0.25 }, className: "p-8 space-y-6", children: [e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-5 space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ie, { className: "w-4 h-4 text-amber-400" }), e.jsx("span", { className: "text-sm font-semibold text-zinc-200", children: "Attachments" })] }), e.jsx("span", { className: "text-xs font-mono text-zinc-500", children: O(L) })] }), e.jsx("div", { className: "space-y-1.5 max-h-32 overflow-y-auto", children: s.map((l, x) => {
    const b = ve(l.type), j = Ne(l.type);
    return e.jsxs("div", { className: "flex items-center gap-3 py-1.5", children: [e.jsx("div", { className: `w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${j}`, children: e.jsx(b, { className: "w-3.5 h-3.5" }) }), e.jsx("span", { className: "text-sm text-zinc-300 truncate flex-1", children: l.name }), e.jsx("span", { className: "text-xs font-mono text-zinc-500 flex-shrink-0", children: O(l.size) })] }, x);
  }) })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-5 space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(fe, { className: "w-4 h-4 text-amber-400" }), "Auto-Destruct"] }), e.jsx("span", { className: "text-sm font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-lg", children: ze(i[0]) })] }), e.jsx(he, { value: i, onValueChange: o, min: 1, max: 168, step: 1, className: "py-2" }), e.jsx("p", { className: "text-[10px] text-zinc-600 leading-relaxed", children: "Vault & all encrypted files will be permanently erased after this time." })] }), e.jsxs("div", { className: "bg-zinc-800/30 border border-zinc-700/30 rounded-2xl p-5 space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(ae, { className: "w-4 h-4 text-emerald-400" }), "Download Limit"] }), e.jsx("span", { className: `text-sm font-mono font-bold px-2.5 py-0.5 rounded-lg ${a[0] === 1 ? "text-red-400 bg-red-500/10" : "text-emerald-400 bg-emerald-500/10"}`, children: a[0] === 1 ? "BURN" : `${a[0]}\xD7` })] }), e.jsx(he, { value: a, onValueChange: f, min: 1, max: 100, step: 1, disabled: a[0] === 1, className: a[0] === 1 ? "opacity-30" : "" }), e.jsxs("button", { onClick: () => f(a[0] === 1 ? [5] : [1]), className: `w-full text-xs cursor-pointer select-none transition-all py-2.5 rounded-xl border flex items-center justify-center gap-2 ${a[0] === 1 ? "bg-red-500/10 border-red-500/25 text-red-400" : "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"}`, children: [e.jsx(gt, { className: `w-3.5 h-3.5 ${a[0] === 1 ? "text-red-400" : ""}` }), a[0] === 1 ? "Burn-on-Read Active (1 view)" : "Enable Burn-on-Read"] })] })] }), e.jsxs("div", { className: "bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 flex items-start gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0", children: e.jsx(Z, { className: "w-4.5 h-4.5 text-amber-400" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-amber-300", children: "Zero-Knowledge Encryption" }), e.jsx("p", { className: "text-xs text-zinc-500 mt-0.5 leading-relaxed", children: "Encryption happens entirely in your browser. We never see your files, keys, or data." })] })] })] }, "step-2")] })] }), e.jsxs(p.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mt-6 flex gap-3", children: [t > 1 && e.jsxs(E, { onClick: () => r(t - 1), variant: "outline", className: "flex-1 h-14 text-base border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl", children: [e.jsx(ue, { className: "w-4 h-4 mr-2" }), "Back"] }), t === 1 && e.jsxs(E, { onClick: () => r(2), disabled: !De, className: "flex-1 h-14 text-base font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100", children: ["Continue", e.jsx(He, { className: "w-4 h-4 ml-2" })] }), t === 2 && e.jsxs(E, { onClick: () => c(true), disabled: s.length === 0 || d !== "idle" || !!$, className: "flex-1 h-14 text-base font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100", children: [e.jsx(B, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] })] }), e.jsx(p.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-6 text-center", children: e.jsxs("p", { className: "text-[10px] md:text-xs text-center text-muted-foreground opacity-70", children: ["By continuing, you agree to our ", e.jsx(W, { href: "/terms", className: "underline hover:text-primary transition-colors", children: "Terms of Service" }), " & ", e.jsx(W, { href: "/privacy", className: "underline hover:text-primary transition-colors", children: "Privacy Policy" }), "."] }) })] }), e.jsx(Xe, { open: m, onOpenChange: c, children: e.jsxs(Je, { className: "sm:max-w-md bg-zinc-950 border border-zinc-800/80 text-zinc-100 shadow-2xl p-0 overflow-hidden rounded-2xl", children: [e.jsxs("div", { className: "relative h-20 bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-amber-950/60 flex items-center justify-center overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12),transparent)]" }), e.jsx(p.div, { initial: { scale: 0, rotate: -20 }, animate: { scale: 1, rotate: 0 }, transition: { type: "spring", stiffness: 400, damping: 25 }, className: "w-12 h-12 bg-amber-500/15 rounded-xl border border-amber-500/25 flex items-center justify-center relative z-10", children: e.jsx(B, { className: "w-6 h-6 text-amber-400" }) })] }), e.jsxs("div", { className: "px-6 pb-6 pt-4", children: [e.jsxs(Qe, { className: "mb-4", children: [e.jsx(Ye, { className: "text-lg font-bold text-center", children: "Confirm Encryption" }), e.jsx(et, { className: "text-center text-zinc-500 text-sm", children: "Review your vault configuration before encrypting" })] }), e.jsxs("div", { className: "space-y-3 mb-5", children: [e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [e.jsx(ie, { className: "w-3.5 h-3.5 text-amber-400" }), e.jsxs("span", { className: "text-xs font-semibold text-zinc-300", children: [s.length, " file", s.length > 1 ? "s" : ""] }), e.jsx("span", { className: "text-xs font-mono text-zinc-600 ml-auto", children: O(L) })] }), e.jsx("div", { className: "space-y-1.5 max-h-24 overflow-y-auto", children: s.map((l, x) => {
    const b = ve(l.type), j = Ne(l.type);
    return e.jsxs("div", { className: "flex items-center gap-2.5", children: [e.jsx("div", { className: `w-6 h-6 rounded-md border flex items-center justify-center ${j}`, children: e.jsx(b, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs text-zinc-400 truncate flex-1", children: l.name }), e.jsx("span", { className: "text-[10px] font-mono text-zinc-600", children: O(l.size) })] }, x);
  }) })] }), e.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [e.jsx(Z, { className: "w-3.5 h-3.5 text-emerald-400" }), e.jsx("span", { className: "text-xs font-semibold text-zinc-300", children: "Vault Settings" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(fe, { className: "w-3 h-3 text-amber-400" }), e.jsx("span", { className: "text-xs text-zinc-400", children: "Expires:" }), e.jsx("span", { className: "text-xs font-mono text-amber-400", children: ze(i[0]) })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ae, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-xs text-zinc-400", children: "Limit:" }), e.jsx("span", { className: `text-xs font-mono ${a[0] === 1 ? "text-red-400" : "text-emerald-400"}`, children: a[0] === 1 ? "Burn-on-Read" : `${a[0]}\xD7 downloads` })] })] })] })] }), e.jsxs("div", { className: "flex gap-3", children: [e.jsx(E, { variant: "outline", onClick: () => c(false), className: "flex-1 h-12 border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-xl", children: "Go Back" }), e.jsxs(E, { onClick: Me, className: "flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20", children: [e.jsx(B, { className: "w-4 h-4 mr-2" }), "Encrypt Now"] })] })] })] }) })] });
}
export {
  Pt as default
};
