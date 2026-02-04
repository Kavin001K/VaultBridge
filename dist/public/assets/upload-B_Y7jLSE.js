import { c as R, r as p, j as e, h as W, A as J, m as x, i as je, X as ve, L as Q, b as Ne, u as ze, a as Se, d as ke, k as Fe, l as Me, e as oe, Z as H, B as X, g as Ae, n as De, o as le, p as Ee, q as Ie, w as Ce, s as Te, t as Ue, v as Be } from "./index-Bq8HZXb3.js";
import { z as $e } from "./browser-gjyt7kQ7.js";
import { H as ce } from "./hard-drive-Km78CrOZ.js";
import { F as Pe } from "./file-DQOBAqOq.js";
import { K as Le } from "./key-C5wPARg8.js";
import { F as Oe } from "./file-text-0mXCl0aq.js";
import { U as Re } from "./upload-Bh4fvG6m.js";
import { A as _e } from "./arrow-left-55-mmipE.js";
import { T as Ve } from "./triangle-alert-CQJ6UKRp.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Y = R("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ke = R("CloudOff", [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ge = R("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ze = R("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]), qe = "vaultbridge-file-cache", He = 1, F = "pending-files", T = "upload-settings";
function B() {
  return new Promise((t, a) => {
    const n = indexedDB.open(qe, He);
    n.onerror = () => a(n.error), n.onsuccess = () => t(n.result), n.onupgradeneeded = (i) => {
      const s = i.target.result;
      s.objectStoreNames.contains(F) || s.createObjectStore(F, { keyPath: "id" }), s.objectStoreNames.contains(T) || s.createObjectStore(T, { keyPath: "id" });
    };
  });
}
function Xe(t) {
  return `${t.name}-${t.size}-${t.lastModified}`;
}
async function xe(t) {
  if (t.length === 0) {
    await ee();
    return;
  }
  try {
    const a = await B(), n = a.transaction(F, "readwrite"), i = n.objectStore(F);
    i.clear();
    for (const s of t) {
      const r = await s.arrayBuffer(), c = { id: Xe(s), name: s.name, type: s.type, size: s.size, lastModified: s.lastModified, data: r, addedAt: Date.now() };
      i.put(c);
    }
    await new Promise((s, r) => {
      n.oncomplete = () => s(), n.onerror = () => r(n.error);
    }), a.close();
  } catch (a) {
    console.warn("[FileStorage] Failed to save files:", a);
  }
}
async function We() {
  try {
    const t = await B(), i = t.transaction(F, "readonly").objectStore(F).getAll(), s = await new Promise((d, h) => {
      i.onsuccess = () => d(i.result || []), i.onerror = () => h(i.error);
    });
    t.close();
    const r = s.map((d) => new File([d.data], d.name, { type: d.type, lastModified: d.lastModified })), c = Date.now() - 24 * 60 * 60 * 1e3, u = s.filter((d) => d.addedAt > c);
    if (u.length !== s.length) {
      const d = u.map((h) => new File([h.data], h.name, { type: h.type, lastModified: h.lastModified }));
      return await xe(d), d;
    }
    return r;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load files:", t), [];
  }
}
async function ee() {
  try {
    const t = await B(), a = t.transaction(F, "readwrite");
    a.objectStore(F).clear(), await new Promise((i, s) => {
      a.oncomplete = () => i(), a.onerror = () => s(a.error);
    }), t.close();
  } catch (t) {
    console.warn("[FileStorage] Failed to clear files:", t);
  }
}
async function Je(t, a) {
  try {
    const n = await B(), i = n.transaction(T, "readwrite"), s = i.objectStore(T), r = { id: "current", expiresIn: t, maxDownloads: a };
    s.put(r), await new Promise((c, u) => {
      i.oncomplete = () => c(), i.onerror = () => u(i.error);
    }), n.close();
  } catch (n) {
    console.warn("[FileStorage] Failed to save settings:", n);
  }
}
async function Qe() {
  try {
    const t = await B(), i = t.transaction(T, "readonly").objectStore(T).get("current"), s = await new Promise((r, c) => {
      i.onsuccess = () => r(i.result), i.onerror = () => c(i.error);
    });
    return t.close(), s ? { expiresIn: s.expiresIn, maxDownloads: s.maxDownloads } : null;
  } catch (t) {
    return console.warn("[FileStorage] Failed to load settings:", t), null;
  }
}
function Ye({ onFilesSelected: t, disabled: a, onDragStateChange: n }) {
  const [i, s] = p.useState(false), [r, c] = p.useState([]), [u, d] = p.useState("idle"), h = p.useRef(true), N = p.useRef(null);
  p.useEffect(() => {
    (async () => {
      try {
        const l = await We();
        l.length > 0 && (c(l), t(l), d("restored"), setTimeout(() => d("idle"), 3e3));
      } catch (l) {
        console.warn("[FileDropzone] Failed to load persisted files:", l);
      }
    })();
  }, []), p.useEffect(() => {
    if (h.current) {
      h.current = false;
      return;
    }
    return N.current && clearTimeout(N.current), N.current = setTimeout(async () => {
      try {
        d("saving"), await xe(r), d(r.length > 0 ? "saved" : "idle"), r.length > 0 && setTimeout(() => d("idle"), 2e3);
      } catch (o) {
        console.warn("[FileDropzone] Failed to persist files:", o), d("error");
      }
    }, 500), () => {
      N.current && clearTimeout(N.current);
    };
  }, [r]), p.useEffect(() => {
    n == null ? void 0 : n(i);
  }, [i, n]);
  const k = (o) => {
    o.preventDefault(), a || s(true);
  }, _ = () => s(false), [b, E] = p.useState(false), $ = (o) => new Promise((l) => {
    if (o.isFile) o.file((z) => {
      l({ [o.fullPath]: z });
    });
    else if (o.isDirectory) {
      const z = o.createReader();
      (() => {
        z.readEntries(async (y) => {
          if (y.length === 0) {
            l({});
            return;
          }
          const v = y.map((j) => $(j)), S = (await Promise.all(v)).reduce((j, f) => ({ ...j, ...f }), {});
          l(S);
        });
      })();
    } else l({});
  }), U = async (o) => {
    if (o.preventDefault(), s(false), a) return;
    const l = o.dataTransfer.items;
    if (!l || l.length === 0) return;
    let z = false;
    const M = [];
    for (let y = 0; y < l.length; y++) {
      const v = l[y].webkitGetAsEntry();
      v && (M.push(v), v.isDirectory && (z = true));
    }
    if (z) {
      E(true);
      try {
        const y = {};
        for (const w of M) {
          const S = await $(w);
          Object.assign(y, S);
        }
        const v = {};
        for (const [w, S] of Object.entries(y)) {
          const j = w.startsWith("/") ? w.slice(1) : w, f = new Uint8Array(await S.arrayBuffer());
          v[j] = f;
        }
        $e(v, { level: 6 }, (w, S) => {
          if (w) {
            console.error("Zipping failed", w), E(false);
            return;
          }
          const j = new File([S], "archive.zip", { type: "application/zip" });
          c([j]), t([j]), E(false);
        });
      } catch (y) {
        console.error("Folder scan failed", y), E(false);
      }
    } else if (o.dataTransfer.files && o.dataTransfer.files.length > 0) {
      const y = Array.from(o.dataTransfer.files);
      c(y), t(y);
    }
  }, P = (o) => {
    if (o.target.files && o.target.files.length > 0) {
      const l = Array.from(o.target.files);
      c(l), t(l);
    }
  }, V = (o) => {
    const l = r.filter((z, M) => M !== o);
    c(l), t(l);
  }, I = r.reduce((o, l) => o + l.size, 0);
  return e.jsxs("div", { className: "w-full space-y-4", children: [e.jsxs("div", { onDragOver: k, onDragLeave: _, onDrop: U, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${i ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${a ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [e.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: P, disabled: a }), e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: b ? e.jsx(W, { className: "w-8 h-8 text-primary animate-spin" }) : i ? e.jsx(Ze, { className: "w-8 h-8 text-primary" }) : e.jsx(Ge, { className: "w-8 h-8 text-muted-foreground" }) }), e.jsx("h3", { className: "text-lg font-semibold mb-1", children: i ? "Drop folder or files" : b ? "Zipping..." : "Drag & drop files or folders here" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: 500 MB" })] }), e.jsx(J, { children: r.length > 0 && e.jsxs(x.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-3", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs uppercase tracking-wider font-mono text-muted-foreground", children: ["Selected Files (", r.length, ")"] }), e.jsxs(J, { mode: "wait", children: [u === "restored" && e.jsxs(x.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20", children: [e.jsx(ce, { className: "w-3 h-3 text-blue-400" }), e.jsx("span", { className: "text-[10px] font-mono text-blue-400", children: "Restored" })] }, "restored"), u === "saving" && e.jsxs(x.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20", children: [e.jsx(W, { className: "w-3 h-3 text-amber-400 animate-spin" }), e.jsx("span", { className: "text-[10px] font-mono text-amber-400", children: "Saving..." })] }, "saving"), u === "saved" && e.jsxs(x.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: [e.jsx(je, { className: "w-3 h-3 text-emerald-400" }), e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: "Saved" })] }, "saved"), u === "error" && e.jsxs(x.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20", children: [e.jsx(Ke, { className: "w-3 h-3 text-red-400" }), e.jsx("span", { className: "text-[10px] font-mono text-red-400", children: "Error" })] }, "error")] })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: [(I / (1024 * 1024)).toFixed(2), " MB"] }), !a && r.length > 1 && e.jsx("button", { onClick: async () => {
    c([]), t([]), await ee();
  }, className: "text-[10px] font-mono uppercase tracking-wider text-red-400/70 hover:text-red-400 transition-colors", children: "Clear All" })] })] }), u === "restored" && e.jsxs(x.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "flex items-center gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10", children: [e.jsx(ce, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }), e.jsx("p", { className: "text-xs text-blue-300", children: "Files restored from your last session. Ready to encrypt!" })] }), r.map((o, l) => e.jsxs(x.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: "p-2 bg-background rounded-md", children: e.jsx(Pe, { className: "w-4 h-4 text-primary" }) }), e.jsxs("div", { className: "truncate", children: [e.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: o.name }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [(o.size / 1024).toFixed(1), " KB"] })] })] }), !a && e.jsx("button", { onClick: () => V(l), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: e.jsx(ve, { className: "w-4 h-4" }) })] }, `${o.name}-${l}`))] }) })] });
}
const de = [{ id: "keys", label: "Generating Keys", icon: Le }, { id: "metadata", label: "Encrypting Metadata", icon: Oe }, { id: "transfer", label: "Encrypting & Uploading", icon: Re }, { id: "done", label: "Complete", icon: Y }];
function et({ stage: t, step: a, progress: n, statusText: i }) {
  const s = de.findIndex((r) => r.id === a);
  return e.jsxs(x.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [e.jsxs(x.div, { animate: { rotate: t === "encrypting" ? [0, 10, -10, 0] : 0, scale: t === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: t === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [e.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${t === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: t === "success" ? e.jsx(Y, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : e.jsx(Q, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), t !== "success" && e.jsx(e.Fragment, { children: [0, 1, 2].map((r) => e.jsx(x.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: r * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, r)) })] }), e.jsx(x.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: i }, i), e.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: e.jsx(x.div, { initial: { width: 0 }, animate: { width: `${n}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), e.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(n), "%"] }), e.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: de.map((r, c) => {
    const u = r.id === a, d = c < s, h = c > s, N = r.icon;
    return e.jsxs(x.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: c * 0.1 }, className: `progress-step ${u ? "active" : ""} ${d ? "completed" : ""} ${h ? "pending" : ""}`, children: [e.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${d ? "bg-primary/20" : u ? "bg-primary/10" : "bg-zinc-800"}`, children: d ? e.jsx(Y, { className: "w-4 h-4 text-primary" }) : u ? e.jsx(W, { className: "w-4 h-4 text-primary animate-spin" }) : e.jsx(N, { className: "w-3 h-3" }) }), e.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: r.label })] }, r.id);
  }) }), e.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: e.jsx(x.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (r, c) => e.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, c)) }) }), e.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
const me = 500 * 1024 * 1024, tt = 500 * 1024 * 1024;
function pe(t) {
  const a = t.reduce((s, r) => s + r.size, 0), n = Math.max(...t.map((s) => s.size));
  if (n > me) {
    const s = t.find((r) => r.size > me);
    return { size: a, isValid: false, errorMessage: `File "${s == null ? void 0 : s.name}" exceeds 500MB limit (${C(n)})`, formattedSize: C(a), estimatedUploadTime: 0 };
  }
  if (a > tt) return { size: a, isValid: false, errorMessage: `Total upload size ${C(a)} exceeds 500MB limit`, formattedSize: C(a), estimatedUploadTime: 0 };
  const i = Math.ceil(a * 8 / (10 * 1024 * 1024));
  return { size: a, isValid: true, formattedSize: C(a), estimatedUploadTime: i };
}
function C(t) {
  if (t === 0) return "0 Bytes";
  const a = 1024, n = ["Bytes", "KB", "MB", "GB", "TB"], i = Math.floor(Math.log(t) / Math.log(a));
  return parseFloat((t / Math.pow(a, i)).toFixed(2)) + " " + n[i];
}
function pt() {
  const [t, a] = p.useState([]), [n, i] = p.useState([24]), [s, r] = p.useState([5]), [c, u] = p.useState("idle"), [d, h] = p.useState("keys"), [N, k] = p.useState(0), [_, b] = p.useState(""), [E, $] = p.useState(false), [U, P] = p.useState(null), [, V] = Ne(), { toast: I } = ze(), { play: o } = Se(), l = p.useRef(null), z = ke(), M = Fe(), y = Me();
  p.useEffect(() => {
    (async () => {
      const m = await Qe();
      m && (i([m.expiresIn]), r([m.maxDownloads]));
    })();
  }, []), p.useEffect(() => {
    Je(n[0], s[0]);
  }, [n, s]);
  const v = (f, m = 20) => {
    if (f.length <= m) return f;
    const A = f.lastIndexOf(".");
    if (A !== -1) {
      const D = f.substring(A), L = f.substring(0, A);
      if (L.length > m - D.length - 3) return L.substring(0, m - D.length - 3) + "..." + D;
    }
    return f.substring(0, m - 3) + "...";
  }, w = (f) => {
    P(null);
    const m = pe(f);
    if (!m.isValid) {
      o("error"), P(m.errorMessage || "Invalid files"), I({ variant: "destructive", title: "Upload Limit Exceeded", description: m.errorMessage });
      return;
    }
    o("drop"), a(f);
  }, S = async () => {
    if (t.length === 0) return;
    const f = pe(t);
    if (!f.isValid) {
      I({ variant: "destructive", title: "Upload Error", description: f.errorMessage });
      return;
    }
    u("encrypting"), k(0), l.current = new AbortController();
    try {
      const m = Date.now();
      h("keys"), b("Generating military-grade AES-256 keys..."), await new Promise((g) => setTimeout(g, 300));
      const A = await Ee(), D = Ie();
      b("Deriving PIN-protective wrapper...");
      const L = await Ce(A, D.pin);
      k(10), h("metadata"), b("Encrypting metadata...");
      const te = t.map((g) => ({ name: g.name, type: g.type, size: g.size, fileId: Te(), lastModified: g.lastModified })), ue = await Ue(te, A), se = te.map((g) => ({ fileId: g.fileId, chunks: 1, size: g.size, isCompressed: false, originalSize: g.size }));
      k(20), b("Securing vault location...");
      const K = await z.mutateAsync({ expiresIn: n[0], maxDownloads: s[0], encryptedMetadata: ue, lookupId: D.lookupId, wrappedKey: L, files: se });
      k(30), u("uploading"), h("transfer");
      const fe = t.length;
      for (let g = 0; g < t.length; g++) {
        if (l.current.signal.aborted) throw new Error("Upload cancelled");
        const G = t[g], re = se[g].fileId, Z = v(G.name);
        b(`Reading ${Z}...`);
        const ye = await G.arrayBuffer();
        b(`Encrypting ${Z}...`);
        const { iv: q, encryptedData: ie } = await Be(ye, A), O = new Uint8Array(q.byteLength + ie.byteLength);
        O.set(q, 0), O.set(new Uint8Array(ie), q.byteLength), b(`Uploading ${Z}...`);
        const { uploadUrl: ge, storagePath: be } = await M.mutateAsync({ vaultId: K.id, fileId: re, chunkIndex: 0, size: O.byteLength }), ne = await fetch(ge, { method: "PUT", body: O, signal: l.current.signal });
        if (!ne.ok) throw new Error(`Upload failed for ${G.name}: ${ne.statusText}`);
        await y.mutateAsync({ vaultId: K.id, fileId: re, chunkIndex: 0, storagePath: be });
        const we = 30 + (g + 1) / fe * 65;
        k(we);
      }
      h("done"), k(100), b("Finalizing secure vault..."), u("success"), o("success"), await ee();
      const ae = Date.now() - m, he = j / (ae / 1e3);
      setTimeout(() => {
        V(`/success/${K.id}#code=${D.fullCode}&time=${ae}&speed=${Math.floor(he)}`);
      }, 800);
    } catch (m) {
      console.error(m), o("error"), u("idle"), m instanceof Error && m.message === "Upload cancelled" ? I({ title: "Upload Cancelled", variant: "default" }) : I({ variant: "destructive", title: "Upload Failed", description: m instanceof Error ? m.message : "An error occurred" });
    }
  }, j = t.reduce((f, m) => f + m.size, 0);
  return e.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [e.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), e.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), e.jsx("header", { className: "relative z-10 px-6 py-6 border-b border-white/5", children: e.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [e.jsx(oe, { href: "/", children: e.jsxs(x.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group", children: [e.jsx("div", { className: "w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors", children: e.jsx(H, { className: "w-5 h-5 text-amber-500" }) }), e.jsxs("h1", { className: "text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors", children: ["VAULT", e.jsx("span", { className: "text-amber-500", children: "BRIDGE" })] })] }) }), e.jsx(oe, { href: "/", children: e.jsxs(X, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [e.jsx(_e, { className: "w-4 h-4" }), "Back"] }) })] }) }), e.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 py-12", children: [e.jsxs(x.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-10", children: [e.jsx("h2", { className: "text-3xl font-bold mb-3", children: "Secure Upload" }), e.jsx("p", { className: "text-zinc-400", children: "Create an encrypted vault for your files." })] }), e.jsxs(x.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: `bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl ${E ? "ring-2 ring-amber-500 bg-amber-500/5" : ""}`, children: [e.jsx(J, { children: c !== "idle" && e.jsxs(x.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [e.jsx(et, { stage: c, step: d, progress: N, statusText: _ }), c === "uploading" && e.jsx(X, { variant: "outline", size: "sm", onClick: () => {
    var _a;
    return (_a = l.current) == null ? void 0 : _a.abort();
  }, className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), e.jsxs("div", { className: "space-y-6", children: [e.jsx(Ye, { onFilesSelected: w, disabled: c !== "idle", onDragStateChange: $ }), U && e.jsxs(x.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3", children: [e.jsx(Ve, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-red-400", children: U }), e.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Maximum file size: 500 MB" })] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(Ae, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(Q, { className: "w-3 h-3 text-amber-500" }), "Lossless Transfer"] }), e.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [e.jsx(H, { className: "w-3 h-3 text-blue-500" }), "Max 500MB"] })] }), t.length > 0 && e.jsxs("div", { className: "text-center text-sm text-zinc-400", children: [t.length, " file", t.length > 1 ? "s" : "", " selected \u2022 ", C(j), " total"] })] }), e.jsxs("div", { className: "mt-8 space-y-8 border-t border-white/5 pt-8", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(De, { className: "w-4 h-4 text-amber-500" }), "Expires In"] }), e.jsxs("span", { className: "text-sm font-mono text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded", children: [n[0], "h"] })] }), e.jsx(le, { value: n, onValueChange: i, min: 1, max: 168, step: 1, className: "py-2" })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [e.jsx(H, { className: "w-4 h-4 text-emerald-500" }), "Download Limit"] }), e.jsx("span", { className: "text-sm font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded", children: s[0] === 1 ? "BURN ON READ" : `${s[0]}x` })] }), e.jsx(le, { value: s, onValueChange: r, min: 1, max: 100, step: 1, disabled: s[0] === 1, className: s[0] === 1 ? "opacity-30" : "" }), e.jsx("div", { onClick: () => r(s[0] === 1 ? [5] : [1]), className: `text-xs cursor-pointer select-none transition-colors text-center py-2 rounded border ${s[0] === 1 ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white"}`, children: s[0] === 1 ? "\u{1F525} Burn-on-read Active (Auto-delete after 1 view)" : "Click to enable Burn-on-read" })] })] }), e.jsx(X, { onClick: S, disabled: t.length === 0 || c !== "idle" || !!U, className: "w-full h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed", children: c !== "idle" ? "Processing..." : e.jsxs(e.Fragment, { children: [e.jsx(Q, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] }) })] })] }), e.jsx(x.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-8 text-center px-4", children: e.jsx("p", { className: "text-xs text-zinc-500", children: "Zero-Knowledge Architecture: Encryption happens entirely in your browser. We never see your files, keys, or data." }) })] })] });
}
export {
  pt as default
};
