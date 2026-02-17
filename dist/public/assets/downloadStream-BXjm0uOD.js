import { as as f } from "./index-BkiWEDQ0.js";
function c() {
  return "serviceWorker" in navigator && navigator.serviceWorker.controller !== null;
}
async function E(o, m, v, t, u) {
  if (!c()) return console.warn("[StreamDownload] Service Worker not available, cannot stream"), { success: false, method: "failed", error: "Service Worker not available" };
  try {
    const n = await f(m), d = (r) => {
      const e = r.data;
      if ((e == null ? void 0 : e.fileId) === o) switch (e.type) {
        case "DOWNLOAD_PROGRESS":
          u == null ? void 0 : u({ fileId: e.fileId, progress: e.progress, processedChunks: e.processedChunks, totalChunks: e.totalChunks, fileName: e.fileName });
          break;
        case "DOWNLOAD_COMPLETE":
          console.log(`[StreamDownload] Download complete: ${e.fileName}`), navigator.serviceWorker.removeEventListener("message", d);
          break;
        case "DOWNLOAD_ERROR":
          console.error(`[StreamDownload] Download error: ${e.error}`), navigator.serviceWorker.removeEventListener("message", d);
          break;
      }
    };
    navigator.serviceWorker.addEventListener("message", d), navigator.serviceWorker.controller.postMessage({ type: "REGISTER_DOWNLOAD", fileId: o, keyBase64: n, chunks: v.map((r) => ({ downloadUrl: r.downloadUrl, index: r.index })), metadata: { name: t.name, size: t.size, type: t.type, fileId: t.fileId }, isCompressed: t.isCompressed || false }), await new Promise((r, e) => {
      const s = setTimeout(() => {
        e(new Error("Download registration timeout"));
      }, 5e3), a = (l) => {
        var _a;
        ((_a = l.data) == null ? void 0 : _a.type) === "DOWNLOAD_REGISTERED" && l.data.fileId === o && (clearTimeout(s), navigator.serviceWorker.removeEventListener("message", a), r());
      };
      navigator.serviceWorker.addEventListener("message", a);
    }), await new Promise((r) => setTimeout(r, 100));
    const i = document.createElement("iframe");
    return i.style.cssText = "position:absolute;width:0;height:0;border:none;visibility:hidden;", i.src = `/stream-download/${o}`, document.body.appendChild(i), await new Promise((r, e) => {
      const s = (a) => {
        var _a;
        ((_a = a.data) == null ? void 0 : _a.fileId) === o && (a.data.type === "DOWNLOAD_COMPLETE" ? (navigator.serviceWorker.removeEventListener("message", s), r()) : a.data.type === "DOWNLOAD_ERROR" && (navigator.serviceWorker.removeEventListener("message", s), e(new Error(a.data.error))));
      };
      navigator.serviceWorker.addEventListener("message", s), setTimeout(() => {
        navigator.serviceWorker.removeEventListener("message", s), r();
      }, 2 * 60 * 60 * 1e3);
    }), document.body.contains(i) && document.body.removeChild(i), { success: true, method: "streamed" };
  } catch (n) {
    return console.error("[StreamDownload] Stream download failed:", n), { success: false, method: "failed", error: n instanceof Error ? n.message : "Unknown error" };
  }
}
const g = 10 * 1024 * 1024;
function k(o) {
  return c() ? o > g : false;
}
export {
  E as i,
  k as s
};
