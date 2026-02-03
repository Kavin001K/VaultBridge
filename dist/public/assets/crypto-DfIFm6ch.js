async function b() {
  return window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
}
async function g(e) {
  const t = await window.crypto.subtle.exportKey("raw", e);
  return o(t);
}
async function A(e) {
  const t = c(e);
  return window.crypto.subtle.importKey("raw", t, "AES-GCM", true, ["encrypt", "decrypt"]);
}
async function p(e, t) {
  const n = window.crypto.getRandomValues(new Uint8Array(12)), r = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: n }, t, e);
  return { iv: n, encryptedData: r };
}
async function u(e, t, n) {
  return window.crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, n, e);
}
async function w(e, t) {
  const r = new TextEncoder().encode(JSON.stringify(e)), { iv: a, encryptedData: s } = await p(r, t);
  return JSON.stringify({ iv: o(a.buffer), data: o(s) });
}
async function f(e, t) {
  try {
    const { iv: n, data: r } = JSON.parse(e), a = c(n), s = c(r), y = await u(s, new Uint8Array(a), t), d = new TextDecoder();
    return JSON.parse(d.decode(y));
  } catch (n) {
    throw console.error("Decryption failed", n), new Error("Failed to decrypt metadata. Invalid key or corrupted data.");
  }
}
async function S(e, t) {
  return w({ clipboardText: e, timestamp: Date.now() }, t);
}
async function m(e, t) {
  return (await f(e, t)).clipboardText;
}
function o(e) {
  let t = "";
  const n = new Uint8Array(e), r = n.byteLength;
  for (let a = 0; a < r; a++) t += String.fromCharCode(n[a]);
  return window.btoa(t);
}
function c(e) {
  const t = window.atob(e), n = t.length, r = new Uint8Array(n);
  for (let a = 0; a < n; a++) r[a] = t.charCodeAt(a);
  return r.buffer;
}
function h() {
  return crypto.randomUUID();
}
const l = 1e5, K = "VaultBridge-PIN-v1";
function B() {
  const e = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10).toString()).join("");
  return { fullCode: e, lookupId: e.slice(0, 3), pin: e.slice(3, 6) };
}
async function i(e) {
  const t = new TextEncoder(), n = t.encode(e), r = await window.crypto.subtle.importKey("raw", n, "PBKDF2", false, ["deriveKey"]), a = t.encode(`${K}-${e}`);
  return window.crypto.subtle.deriveKey({ name: "PBKDF2", salt: a, iterations: l, hash: "SHA-256" }, r, { name: "AES-KW", length: 256 }, false, ["wrapKey", "unwrapKey"]);
}
async function E(e, t) {
  const n = await i(t), r = await window.crypto.subtle.wrapKey("raw", e, n, "AES-KW");
  return o(r);
}
async function C(e, t) {
  const n = await i(t), r = c(e);
  return window.crypto.subtle.unwrapKey("raw", r, n, "AES-KW", { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
}
export {
  B as a,
  w as b,
  h as c,
  p as d,
  S as e,
  f,
  b as g,
  m as h,
  u as i,
  A as j,
  g as k,
  C as u,
  E as w
};
