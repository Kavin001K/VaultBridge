async function l() {
  return window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
}
async function K(e) {
  const t = await window.crypto.subtle.exportKey("raw", e);
  return o(t);
}
async function b(e) {
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
async function g(e, t) {
  const r = new TextEncoder().encode(JSON.stringify(e)), { iv: a, encryptedData: y } = await p(r, t);
  return JSON.stringify({ iv: o(a.buffer), data: o(y) });
}
async function A(e, t) {
  try {
    const { iv: n, data: r } = JSON.parse(e), a = c(n), y = c(r), s = await u(y, new Uint8Array(a), t), d = new TextDecoder();
    return JSON.parse(d.decode(s));
  } catch (n) {
    throw console.error("Decryption failed", n), new Error("Failed to decrypt metadata. Invalid key or corrupted data.");
  }
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
function S() {
  return crypto.randomUUID();
}
const w = 1e5, f = "VaultBridge-PIN-v1";
function m() {
  const e = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10).toString()).join("");
  return { fullCode: e, lookupId: e.slice(0, 3), pin: e.slice(3, 6) };
}
async function i(e) {
  const t = new TextEncoder(), n = t.encode(e), r = await window.crypto.subtle.importKey("raw", n, "PBKDF2", false, ["deriveKey"]), a = t.encode(`${f}-${e}`);
  return window.crypto.subtle.deriveKey({ name: "PBKDF2", salt: a, iterations: w, hash: "SHA-256" }, r, { name: "AES-KW", length: 256 }, false, ["wrapKey", "unwrapKey"]);
}
async function h(e, t) {
  const n = await i(t), r = await window.crypto.subtle.wrapKey("raw", e, n, "AES-KW");
  return o(r);
}
async function B(e, t) {
  const n = await i(t), r = c(e);
  return window.crypto.subtle.unwrapKey("raw", r, n, "AES-KW", { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
}
export {
  m as a,
  S as b,
  g as c,
  A as d,
  K as e,
  u as f,
  l as g,
  b as i,
  B as u,
  h as w
};
