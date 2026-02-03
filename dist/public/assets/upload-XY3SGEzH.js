import { c as be, r as I, j as i, d as Se, X as xr, b as pr, u as hr, L as qe, B as ke } from "./index-BpGdq6cX.js";
import { A as Fe, u as vr, a as gr, b as yr } from "./use-vaults-CXcaDl-K.js";
import { m as B } from "./proxy-D0nqRSzh.js";
import { H as Ge } from "./hard-drive-XNuwHd5K.js";
import { C as wr } from "./circle-check-BGDcmhrb.js";
import { F as br } from "./file-qpZt66M1.js";
import { K as jr } from "./key-C626WeXf.js";
import { F as Nr, u as zr } from "./useSounds-C6CHmDat.js";
import { U as kr } from "./upload-BMWPtMtN.js";
import { L as Ae } from "./lock-BzYYw8g5.js";
import { S as Ze } from "./slider-CuHWbT1C.js";
import { g as Mr, a as Sr, w as Fr, c as Ar, b as Er, d as Tr } from "./crypto-DfIFm6ch.js";
import { Z as Me } from "./zap-BdzjHAbs.js";
import { A as Dr } from "./arrow-left-utdTbWmy.js";
import { T as Cr } from "./triangle-alert-BcLzU2C0.js";
import { S as Ir } from "./shield-ruK06BFf.js";
import { T as Ur } from "./timer-DslQ3KLo.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ee = be("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Br = be("CloudOff", [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $r = be("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pr = be("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]);
var _e = {}, Or = function(e, r, t, a, n) {
  var s = new Worker(_e[r] || (_e[r] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return s.onmessage = function(o) {
    var c = o.data, l = c.$e$;
    if (l) {
      var u = new Error(l[0]);
      u.code = l[1], u.stack = l[2], n(u, null);
    } else n(null, c);
  }, s.postMessage(t, a), s;
}, R = Uint8Array, q = Uint16Array, je = Int32Array, Ne = new R([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), ze = new R([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Te = new R([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), tr = function(e, r) {
  for (var t = new q(31), a = 0; a < 31; ++a) t[a] = r += 1 << e[a - 1];
  for (var n = new je(t[30]), a = 1; a < 30; ++a) for (var s = t[a]; s < t[a + 1]; ++s) n[s] = s - t[a] << 5 | a;
  return { b: t, r: n };
}, ar = tr(Ne, 2), Lr = ar.b, ge = ar.r;
Lr[28] = 258, ge[258] = 28;
var Rr = tr(ze, 0), De = Rr.r, ye = new q(32768);
for (var F = 0; F < 32768; ++F) {
  var W = (F & 43690) >> 1 | (F & 21845) << 1;
  W = (W & 52428) >> 2 | (W & 13107) << 2, W = (W & 61680) >> 4 | (W & 3855) << 4, ye[F] = ((W & 65280) >> 8 | (W & 255) << 8) >> 1;
}
var oe = function(e, r, t) {
  for (var a = e.length, n = 0, s = new q(r); n < a; ++n) e[n] && ++s[e[n] - 1];
  var o = new q(r);
  for (n = 1; n < r; ++n) o[n] = o[n - 1] + s[n - 1] << 1;
  var c;
  if (t) {
    c = new q(1 << r);
    var l = 15 - r;
    for (n = 0; n < a; ++n) if (e[n]) for (var u = n << 4 | e[n], d = r - e[n], g = o[e[n] - 1]++ << d, j = g | (1 << d) - 1; g <= j; ++g) c[ye[g] >> l] = u;
  } else for (c = new q(a), n = 0; n < a; ++n) e[n] && (c[n] = ye[o[e[n] - 1]++] >> 15 - e[n]);
  return c;
}, X = new R(288);
for (var F = 0; F < 144; ++F) X[F] = 8;
for (var F = 144; F < 256; ++F) X[F] = 9;
for (var F = 256; F < 280; ++F) X[F] = 7;
for (var F = 280; F < 288; ++F) X[F] = 8;
var me = new R(32);
for (var F = 0; F < 32; ++F) me[F] = 5;
var nr = oe(X, 9, 0), sr = oe(me, 5, 0), Be = function(e) {
  return (e + 7) / 8 | 0;
}, $e = function(e, r, t) {
  return (r == null || r < 0) && (r = 0), (t == null || t > e.length) && (t = e.length), new R(e.subarray(r, t));
}, Vr = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], le = function(e, r, t) {
  var a = new Error(r || Vr[e]);
  if (a.code = e, Error.captureStackTrace && Error.captureStackTrace(a, le), !t) throw a;
  return a;
}, _ = function(e, r, t) {
  t <<= r & 7;
  var a = r / 8 | 0;
  e[a] |= t, e[a + 1] |= t >> 8;
}, ne = function(e, r, t) {
  t <<= r & 7;
  var a = r / 8 | 0;
  e[a] |= t, e[a + 1] |= t >> 8, e[a + 2] |= t >> 16;
}, ve = function(e, r) {
  for (var t = [], a = 0; a < e.length; ++a) e[a] && t.push({ s: a, f: e[a] });
  var n = t.length, s = t.slice();
  if (!n) return { t: Oe, l: 0 };
  if (n == 1) {
    var o = new R(t[0].s + 1);
    return o[t[0].s] = 1, { t: o, l: 1 };
  }
  t.sort(function(m, M) {
    return m.f - M.f;
  }), t.push({ s: -1, f: 25001 });
  var c = t[0], l = t[1], u = 0, d = 1, g = 2;
  for (t[0] = { s: -1, f: c.f + l.f, l: c, r: l }; d != n - 1; ) c = t[t[u].f < t[g].f ? u++ : g++], l = t[u != d && t[u].f < t[g].f ? u++ : g++], t[d++] = { s: -1, f: c.f + l.f, l: c, r: l };
  for (var j = s[0].s, a = 1; a < n; ++a) s[a].s > j && (j = s[a].s);
  var v = new q(j + 1), T = we(t[d - 1], v, 0);
  if (T > r) {
    var a = 0, N = 0, y = T - r, U = 1 << y;
    for (s.sort(function(M, z) {
      return v[z.s] - v[M.s] || M.f - z.f;
    }); a < n; ++a) {
      var P = s[a].s;
      if (v[P] > r) N += U - (1 << T - v[P]), v[P] = r;
      else break;
    }
    for (N >>= y; N > 0; ) {
      var A = s[a].s;
      v[A] < r ? N -= 1 << r - v[A]++ - 1 : ++a;
    }
    for (; a >= 0 && N; --a) {
      var f = s[a].s;
      v[f] == r && (--v[f], ++N);
    }
    T = r;
  }
  return { t: new R(v), l: T };
}, we = function(e, r, t) {
  return e.s == -1 ? Math.max(we(e.l, r, t + 1), we(e.r, r, t + 1)) : r[e.s] = t;
}, Ce = function(e) {
  for (var r = e.length; r && !e[--r]; ) ;
  for (var t = new q(++r), a = 0, n = e[0], s = 1, o = function(l) {
    t[a++] = l;
  }, c = 1; c <= r; ++c) if (e[c] == n && c != r) ++s;
  else {
    if (!n && s > 2) {
      for (; s > 138; s -= 138) o(32754);
      s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
    } else if (s > 3) {
      for (o(n), --s; s > 6; s -= 6) o(8304);
      s > 2 && (o(s - 3 << 5 | 8208), s = 0);
    }
    for (; s--; ) o(n);
    s = 1, n = e[c];
  }
  return { c: t.subarray(0, a), n: r };
}, se = function(e, r) {
  for (var t = 0, a = 0; a < r.length; ++a) t += e[a] * r[a];
  return t;
}, Pe = function(e, r, t) {
  var a = t.length, n = Be(r + 2);
  e[n] = a & 255, e[n + 1] = a >> 8, e[n + 2] = e[n] ^ 255, e[n + 3] = e[n + 1] ^ 255;
  for (var s = 0; s < a; ++s) e[n + s + 4] = t[s];
  return (n + 4 + a) * 8;
}, Ie = function(e, r, t, a, n, s, o, c, l, u, d) {
  _(r, d++, t), ++n[256];
  for (var g = ve(n, 15), j = g.t, v = g.l, T = ve(s, 15), N = T.t, y = T.l, U = Ce(j), P = U.c, A = U.n, f = Ce(N), m = f.c, M = f.n, z = new q(19), x = 0; x < P.length; ++x) ++z[P[x] & 31];
  for (var x = 0; x < m.length; ++x) ++z[m[x] & 31];
  for (var p = ve(z, 7), w = p.t, $ = p.l, k = 19; k > 4 && !w[Te[k - 1]]; --k) ;
  var b = u + 5 << 3, h = se(n, X) + se(s, me) + o, E = se(n, j) + se(s, N) + o + 14 + 3 * k + se(z, w) + 2 * z[16] + 3 * z[17] + 7 * z[18];
  if (l >= 0 && b <= h && b <= E) return Pe(r, d, e.subarray(l, l + u));
  var C, S, V, Z;
  if (_(r, d, 1 + (E < h)), d += 2, E < h) {
    C = oe(j, v, 0), S = j, V = oe(N, y, 0), Z = N;
    var ee = oe(w, $, 0);
    _(r, d, A - 257), _(r, d + 5, M - 1), _(r, d + 10, k - 4), d += 14;
    for (var x = 0; x < k; ++x) _(r, d + 3 * x, w[Te[x]]);
    d += 3 * k;
    for (var K = [P, m], J = 0; J < 2; ++J) for (var Q = K[J], x = 0; x < Q.length; ++x) {
      var G = Q[x] & 31;
      _(r, d, ee[G]), d += w[G], G > 15 && (_(r, d, Q[x] >> 5 & 127), d += Q[x] >> 12);
    }
  } else C = nr, S = X, V = sr, Z = me;
  for (var x = 0; x < c; ++x) {
    var O = a[x];
    if (O > 255) {
      var G = O >> 18 & 31;
      ne(r, d, C[G + 257]), d += S[G + 257], G > 7 && (_(r, d, O >> 23 & 31), d += Ne[G]);
      var D = O & 31;
      ne(r, d, V[D]), d += Z[D], D > 3 && (ne(r, d, O >> 5 & 8191), d += ze[D]);
    } else ne(r, d, C[O]), d += S[O];
  }
  return ne(r, d, C[256]), d + S[256];
}, ir = new je([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Oe = new R(0), or = function(e, r, t, a, n, s) {
  var o = s.z || e.length, c = new R(a + o + 5 * (1 + Math.ceil(o / 7e3)) + n), l = c.subarray(a, c.length - n), u = s.l, d = (s.r || 0) & 7;
  if (r) {
    d && (l[0] = s.r >> 3);
    for (var g = ir[r - 1], j = g >> 13, v = g & 8191, T = (1 << t) - 1, N = s.p || new q(32768), y = s.h || new q(T + 1), U = Math.ceil(t / 3), P = 2 * U, A = function(ue) {
      return (e[ue] ^ e[ue + 1] << U ^ e[ue + 2] << P) & T;
    }, f = new je(25e3), m = new q(288), M = new q(32), z = 0, x = 0, p = s.i || 0, w = 0, $ = s.w || 0, k = 0; p + 2 < o; ++p) {
      var b = A(p), h = p & 32767, E = y[b];
      if (N[h] = E, y[b] = h, $ <= p) {
        var C = o - p;
        if ((z > 7e3 || w > 24576) && (C > 423 || !u)) {
          d = Ie(e, l, 0, f, m, M, x, w, k, p - k, d), w = z = x = 0, k = p;
          for (var S = 0; S < 286; ++S) m[S] = 0;
          for (var S = 0; S < 30; ++S) M[S] = 0;
        }
        var V = 2, Z = 0, ee = v, K = h - E & 32767;
        if (C > 2 && b == A(p - K)) for (var J = Math.min(j, C) - 1, Q = Math.min(32767, p), G = Math.min(258, C); K <= Q && --ee && h != E; ) {
          if (e[p + V] == e[p + V - K]) {
            for (var O = 0; O < G && e[p + O] == e[p + O - K]; ++O) ;
            if (O > V) {
              if (V = O, Z = K, O > J) break;
              for (var D = Math.min(K, O - 2), re = 0, S = 0; S < D; ++S) {
                var te = p - K + S & 32767, de = N[te], pe = te - de & 32767;
                pe > re && (re = pe, E = te);
              }
            }
          }
          h = E, E = N[h], K += h - E & 32767;
        }
        if (Z) {
          f[w++] = 268435456 | ge[V] << 18 | De[Z];
          var ae = ge[V] & 31, fe = De[Z] & 31;
          x += Ne[ae] + ze[fe], ++m[257 + ae], ++M[fe], $ = p + V, ++z;
        } else f[w++] = e[p], ++m[e[p]];
      }
    }
    for (p = Math.max(p, $); p < o; ++p) f[w++] = e[p], ++m[e[p]];
    d = Ie(e, l, u, f, m, M, x, w, k, p - k, d), u || (s.r = d & 7 | l[d / 8 | 0] << 3, d -= 7, s.h = y, s.p = N, s.i = p, s.w = $);
  } else {
    for (var p = s.w || 0; p < o + u; p += 65535) {
      var H = p + 65535;
      H >= o && (l[d / 8 | 0] = u, H = o), d = Pe(l, d + 1, e.subarray(p, H));
    }
    s.i = o;
  }
  return $e(c, 0, a + Be(d) + n);
}, Kr = function() {
  for (var e = new Int32Array(256), r = 0; r < 256; ++r) {
    for (var t = r, a = 9; --a; ) t = (t & 1 && -306674912) ^ t >>> 1;
    e[r] = t;
  }
  return e;
}(), qr = function() {
  var e = -1;
  return { p: function(r) {
    for (var t = e, a = 0; a < r.length; ++a) t = Kr[t & 255 ^ r[a]] ^ t >>> 8;
    e = t;
  }, d: function() {
    return ~e;
  } };
}, lr = function(e, r, t, a, n) {
  if (!n && (n = { l: 1 }, r.dictionary)) {
    var s = r.dictionary.subarray(-32768), o = new R(s.length + e.length);
    o.set(s), o.set(e, s.length), e = o, n.w = s.length;
  }
  return or(e, r.level == null ? 6 : r.level, r.mem == null ? n.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + r.mem, t, a, n);
}, Le = function(e, r) {
  var t = {};
  for (var a in e) t[a] = e[a];
  for (var a in r) t[a] = r[a];
  return t;
}, He = function(e, r, t) {
  for (var a = e(), n = e.toString(), s = n.slice(n.indexOf("[") + 1, n.lastIndexOf("]")).replace(/\s+/g, "").split(","), o = 0; o < a.length; ++o) {
    var c = a[o], l = s[o];
    if (typeof c == "function") {
      r += ";" + l + "=";
      var u = c.toString();
      if (c.prototype) if (u.indexOf("[native code]") != -1) {
        var d = u.indexOf(" ", 8) + 1;
        r += u.slice(d, u.indexOf("(", d));
      } else {
        r += u;
        for (var g in c.prototype) r += ";" + l + ".prototype." + g + "=" + c.prototype[g].toString();
      }
      else r += u;
    } else t[l] = c;
  }
  return r;
}, he = [], Gr = function(e) {
  var r = [];
  for (var t in e) e[t].buffer && r.push((e[t] = new e[t].constructor(e[t])).buffer);
  return r;
}, Zr = function(e, r, t, a) {
  if (!he[t]) {
    for (var n = "", s = {}, o = e.length - 1, c = 0; c < o; ++c) n = He(e[c], n, s);
    he[t] = { c: He(e[o], n, s), e: s };
  }
  var l = Le({}, he[t].e);
  return Or(he[t].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + r.toString() + "}", t, l, Gr(l), a);
}, _r = function() {
  return [R, q, je, Ne, ze, Te, ge, De, nr, X, sr, me, ye, ir, Oe, oe, _, ne, ve, we, Ce, se, Pe, Ie, Be, $e, or, lr, Re, cr];
}, cr = function(e) {
  return postMessage(e, [e.buffer]);
}, Hr = function(e, r, t, a, n, s) {
  var o = Zr(t, a, n, function(c, l) {
    o.terminate(), s(c, l);
  });
  return o.postMessage([e, r], r.consume ? [e.buffer] : []), function() {
    o.terminate();
  };
}, L = function(e, r, t) {
  for (; t; ++r) e[r] = t, t >>>= 8;
};
function Wr(e, r, t) {
  return t || (t = r, r = {}), typeof t != "function" && le(7), Hr(e, r, [_r], function(a) {
    return cr(Re(a.data[0], a.data[1]));
  }, 0, t);
}
function Re(e, r) {
  return lr(e, r || {}, 0, 0);
}
var dr = function(e, r, t, a) {
  for (var n in e) {
    var s = e[n], o = r + n, c = a;
    Array.isArray(s) && (c = Le(a, s[1]), s = s[0]), s instanceof R ? t[o] = [s, c] : (t[o += "/"] = [new R(0), c], dr(s, o, t, a));
  }
}, We = typeof TextEncoder < "u" && new TextEncoder(), Xr = typeof TextDecoder < "u" && new TextDecoder(), Yr = 0;
try {
  Xr.decode(Oe, { stream: true }), Yr = 1;
} catch {
}
function Xe(e, r) {
  var t;
  if (We) return We.encode(e);
  for (var a = e.length, n = new R(e.length + (e.length >> 1)), s = 0, o = function(u) {
    n[s++] = u;
  }, t = 0; t < a; ++t) {
    if (s + 5 > n.length) {
      var c = new R(s + 8 + (a - t << 1));
      c.set(n), n = c;
    }
    var l = e.charCodeAt(t);
    l < 128 || r ? o(l) : l < 2048 ? (o(192 | l >> 6), o(128 | l & 63)) : l > 55295 && l < 57344 ? (l = 65536 + (l & 1047552) | e.charCodeAt(++t) & 1023, o(240 | l >> 18), o(128 | l >> 12 & 63), o(128 | l >> 6 & 63), o(128 | l & 63)) : (o(224 | l >> 12), o(128 | l >> 6 & 63), o(128 | l & 63));
  }
  return $e(n, 0, s);
}
var Ue = function(e) {
  var r = 0;
  if (e) for (var t in e) {
    var a = e[t].length;
    a > 65535 && le(9), r += a + 4;
  }
  return r;
}, Ye = function(e, r, t, a, n, s, o, c) {
  var l = a.length, u = t.extra, d = c && c.length, g = Ue(u);
  L(e, r, o != null ? 33639248 : 67324752), r += 4, o != null && (e[r++] = 20, e[r++] = t.os), e[r] = 20, r += 2, e[r++] = t.flag << 1 | (s < 0 && 8), e[r++] = n && 8, e[r++] = t.compression & 255, e[r++] = t.compression >> 8;
  var j = new Date(t.mtime == null ? Date.now() : t.mtime), v = j.getFullYear() - 1980;
  if ((v < 0 || v > 119) && le(10), L(e, r, v << 25 | j.getMonth() + 1 << 21 | j.getDate() << 16 | j.getHours() << 11 | j.getMinutes() << 5 | j.getSeconds() >> 1), r += 4, s != -1 && (L(e, r, t.crc), L(e, r + 4, s < 0 ? -s - 2 : s), L(e, r + 8, t.size)), L(e, r + 12, l), L(e, r + 14, g), r += 16, o != null && (L(e, r, d), L(e, r + 6, t.attrs), L(e, r + 10, o), r += 14), e.set(a, r), r += l, g) for (var T in u) {
    var N = u[T], y = N.length;
    L(e, r, +T), L(e, r + 2, y), e.set(N, r + 4), r += 4 + y;
  }
  return d && (e.set(c, r), r += d), r;
}, Jr = function(e, r, t, a, n) {
  L(e, r, 101010256), L(e, r + 8, t), L(e, r + 10, t), L(e, r + 12, a), L(e, r + 16, n);
};
function Qr(e, r, t) {
  t || (t = r, r = {}), typeof t != "function" && le(7);
  var a = {};
  dr(e, "", a, r);
  var n = Object.keys(a), s = n.length, o = 0, c = 0, l = s, u = new Array(s), d = [], g = function() {
    for (var y = 0; y < d.length; ++y) d[y]();
  }, j = function(y, U) {
    Je(function() {
      t(y, U);
    });
  };
  Je(function() {
    j = t;
  });
  var v = function() {
    var y = new R(c + 22), U = o, P = c - o;
    c = 0;
    for (var A = 0; A < l; ++A) {
      var f = u[A];
      try {
        var m = f.c.length;
        Ye(y, c, f, f.f, f.u, m);
        var M = 30 + f.f.length + Ue(f.extra), z = c + M;
        y.set(f.c, z), Ye(y, o, f, f.f, f.u, m, c, f.m), o += 16 + M + (f.m ? f.m.length : 0), c = z + m;
      } catch (x) {
        return j(x, null);
      }
    }
    Jr(y, o, u.length, P, U), j(null, y);
  };
  s || v();
  for (var T = function(y) {
    var U = n[y], P = a[U], A = P[0], f = P[1], m = qr(), M = A.length;
    m.p(A);
    var z = Xe(U), x = z.length, p = f.comment, w = p && Xe(p), $ = w && w.length, k = Ue(f.extra), b = f.level == 0 ? 0 : 8, h = function(E, C) {
      if (E) g(), j(E, null);
      else {
        var S = C.length;
        u[y] = Le(f, { size: M, crc: m.d(), c: C, f: z, m: w, u: x != U.length || w && p.length != $, compression: b }), o += 30 + x + k + S, c += 76 + 2 * (x + k) + ($ || 0) + S, --s || v();
      }
    };
    if (x > 65535 && h(le(11, 0, 1), null), !b) h(null, A);
    else if (M < 16e4) try {
      h(null, Re(A, f));
    } catch (E) {
      h(E, null);
    }
    else d.push(Wr(A, f, h));
  }, N = 0; N < l; ++N) T(N);
  return g;
}
var Je = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
  e();
};
const et = "vaultbridge-file-cache", rt = 1, Y = "pending-files", ce = "upload-settings";
function xe() {
  return new Promise((e, r) => {
    const t = indexedDB.open(et, rt);
    t.onerror = () => r(t.error), t.onsuccess = () => e(t.result), t.onupgradeneeded = (a) => {
      const n = a.target.result;
      n.objectStoreNames.contains(Y) || n.createObjectStore(Y, { keyPath: "id" }), n.objectStoreNames.contains(ce) || n.createObjectStore(ce, { keyPath: "id" });
    };
  });
}
function tt(e) {
  return `${e.name}-${e.size}-${e.lastModified}`;
}
async function fr(e) {
  if (e.length === 0) {
    await Ve();
    return;
  }
  try {
    const r = await xe(), t = r.transaction(Y, "readwrite"), a = t.objectStore(Y);
    a.clear();
    for (const n of e) {
      const s = await n.arrayBuffer(), o = { id: tt(n), name: n.name, type: n.type, size: n.size, lastModified: n.lastModified, data: s, addedAt: Date.now() };
      a.put(o);
    }
    await new Promise((n, s) => {
      t.oncomplete = () => n(), t.onerror = () => s(t.error);
    }), r.close();
  } catch (r) {
    console.warn("[FileStorage] Failed to save files:", r);
  }
}
async function at() {
  try {
    const e = await xe(), a = e.transaction(Y, "readonly").objectStore(Y).getAll(), n = await new Promise((l, u) => {
      a.onsuccess = () => l(a.result || []), a.onerror = () => u(a.error);
    });
    e.close();
    const s = n.map((l) => new File([l.data], l.name, { type: l.type, lastModified: l.lastModified })), o = Date.now() - 24 * 60 * 60 * 1e3, c = n.filter((l) => l.addedAt > o);
    if (c.length !== n.length) {
      const l = c.map((u) => new File([u.data], u.name, { type: u.type, lastModified: u.lastModified }));
      return await fr(l), l;
    }
    return s;
  } catch (e) {
    return console.warn("[FileStorage] Failed to load files:", e), [];
  }
}
async function Ve() {
  try {
    const e = await xe(), r = e.transaction(Y, "readwrite");
    r.objectStore(Y).clear(), await new Promise((a, n) => {
      r.oncomplete = () => a(), r.onerror = () => n(r.error);
    }), e.close();
  } catch (e) {
    console.warn("[FileStorage] Failed to clear files:", e);
  }
}
async function nt(e, r) {
  try {
    const t = await xe(), a = t.transaction(ce, "readwrite"), n = a.objectStore(ce), s = { id: "current", expiresIn: e, maxDownloads: r };
    n.put(s), await new Promise((o, c) => {
      a.oncomplete = () => o(), a.onerror = () => c(a.error);
    }), t.close();
  } catch (t) {
    console.warn("[FileStorage] Failed to save settings:", t);
  }
}
async function st() {
  try {
    const e = await xe(), a = e.transaction(ce, "readonly").objectStore(ce).get("current"), n = await new Promise((s, o) => {
      a.onsuccess = () => s(a.result), a.onerror = () => o(a.error);
    });
    return e.close(), n ? { expiresIn: n.expiresIn, maxDownloads: n.maxDownloads } : null;
  } catch (e) {
    return console.warn("[FileStorage] Failed to load settings:", e), null;
  }
}
function it({ onFilesSelected: e, disabled: r, onDragStateChange: t }) {
  const [a, n] = I.useState(false), [s, o] = I.useState([]), [c, l] = I.useState("idle"), u = I.useRef(true), d = I.useRef(null);
  I.useEffect(() => {
    (async () => {
      try {
        const m = await at();
        m.length > 0 && (o(m), e(m), l("restored"), setTimeout(() => l("idle"), 3e3));
      } catch (m) {
        console.warn("[FileDropzone] Failed to load persisted files:", m);
      }
    })();
  }, []), I.useEffect(() => {
    if (u.current) {
      u.current = false;
      return;
    }
    return d.current && clearTimeout(d.current), d.current = setTimeout(async () => {
      try {
        l("saving"), await fr(s), l(s.length > 0 ? "saved" : "idle"), s.length > 0 && setTimeout(() => l("idle"), 2e3);
      } catch (f) {
        console.warn("[FileDropzone] Failed to persist files:", f), l("error");
      }
    }, 500), () => {
      d.current && clearTimeout(d.current);
    };
  }, [s]), I.useEffect(() => {
    t == null ? void 0 : t(a);
  }, [a, t]);
  const g = (f) => {
    f.preventDefault(), r || n(true);
  }, j = () => n(false), [v, T] = I.useState(false), N = (f) => new Promise((m) => {
    if (f.isFile) f.file((M) => {
      m({ [f.fullPath]: M });
    });
    else if (f.isDirectory) {
      const M = f.createReader();
      (() => {
        M.readEntries(async (x) => {
          if (x.length === 0) {
            m({});
            return;
          }
          const p = x.map((k) => N(k)), $ = (await Promise.all(p)).reduce((k, b) => ({ ...k, ...b }), {});
          m($);
        });
      })();
    } else m({});
  }), y = async (f) => {
    if (f.preventDefault(), n(false), r) return;
    const m = f.dataTransfer.items;
    if (!m || m.length === 0) return;
    let M = false;
    const z = [];
    for (let x = 0; x < m.length; x++) {
      const p = m[x].webkitGetAsEntry();
      p && (z.push(p), p.isDirectory && (M = true));
    }
    if (M) {
      T(true);
      try {
        const x = {};
        for (const w of z) {
          const $ = await N(w);
          Object.assign(x, $);
        }
        const p = {};
        for (const [w, $] of Object.entries(x)) {
          const k = w.startsWith("/") ? w.slice(1) : w, b = new Uint8Array(await $.arrayBuffer());
          p[k] = b;
        }
        Qr(p, { level: 6 }, (w, $) => {
          if (w) {
            console.error("Zipping failed", w), T(false);
            return;
          }
          const k = new File([$], "archive.zip", { type: "application/zip" });
          o([k]), e([k]), T(false);
        });
      } catch (x) {
        console.error("Folder scan failed", x), T(false);
      }
    } else if (f.dataTransfer.files && f.dataTransfer.files.length > 0) {
      const x = Array.from(f.dataTransfer.files);
      o(x), e(x);
    }
  }, U = (f) => {
    if (f.target.files && f.target.files.length > 0) {
      const m = Array.from(f.target.files);
      o(m), e(m);
    }
  }, P = (f) => {
    const m = s.filter((M, z) => z !== f);
    o(m), e(m);
  }, A = s.reduce((f, m) => f + m.size, 0);
  return i.jsxs("div", { className: "w-full space-y-4", children: [i.jsxs("div", { onDragOver: g, onDragLeave: j, onDrop: y, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${a ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${r ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [i.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: U, disabled: r }), i.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: v ? i.jsx(Se, { className: "w-8 h-8 text-primary animate-spin" }) : a ? i.jsx(Pr, { className: "w-8 h-8 text-primary" }) : i.jsx($r, { className: "w-8 h-8 text-muted-foreground" }) }), i.jsx("h3", { className: "text-lg font-semibold mb-1", children: a ? "Drop folder or files" : v ? "Zipping..." : "Drag & drop files or folders here" }), i.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), i.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: 500 MB" })] }), i.jsx(Fe, { children: s.length > 0 && i.jsxs(B.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-3", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("div", { className: "flex items-center gap-3", children: [i.jsxs("span", { className: "text-xs uppercase tracking-wider font-mono text-muted-foreground", children: ["Selected Files (", s.length, ")"] }), i.jsxs(Fe, { mode: "wait", children: [c === "restored" && i.jsxs(B.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20", children: [i.jsx(Ge, { className: "w-3 h-3 text-blue-400" }), i.jsx("span", { className: "text-[10px] font-mono text-blue-400", children: "Restored" })] }, "restored"), c === "saving" && i.jsxs(B.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20", children: [i.jsx(Se, { className: "w-3 h-3 text-amber-400 animate-spin" }), i.jsx("span", { className: "text-[10px] font-mono text-amber-400", children: "Saving..." })] }, "saving"), c === "saved" && i.jsxs(B.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: [i.jsx(wr, { className: "w-3 h-3 text-emerald-400" }), i.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: "Saved" })] }, "saved"), c === "error" && i.jsxs(B.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20", children: [i.jsx(Br, { className: "w-3 h-3 text-red-400" }), i.jsx("span", { className: "text-[10px] font-mono text-red-400", children: "Error" })] }, "error")] })] }), i.jsxs("div", { className: "flex items-center gap-3", children: [i.jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: [(A / (1024 * 1024)).toFixed(2), " MB"] }), !r && s.length > 1 && i.jsx("button", { onClick: async () => {
    o([]), e([]), await Ve();
  }, className: "text-[10px] font-mono uppercase tracking-wider text-red-400/70 hover:text-red-400 transition-colors", children: "Clear All" })] })] }), c === "restored" && i.jsxs(B.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "flex items-center gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10", children: [i.jsx(Ge, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }), i.jsx("p", { className: "text-xs text-blue-300", children: "Files restored from your last session. Ready to encrypt!" })] }), s.map((f, m) => i.jsxs(B.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [i.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [i.jsx("div", { className: "p-2 bg-background rounded-md", children: i.jsx(br, { className: "w-4 h-4 text-primary" }) }), i.jsxs("div", { className: "truncate", children: [i.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: f.name }), i.jsxs("p", { className: "text-xs text-muted-foreground", children: [(f.size / 1024).toFixed(1), " KB"] })] })] }), !r && i.jsx("button", { onClick: () => P(m), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: i.jsx(xr, { className: "w-4 h-4" }) })] }, `${f.name}-${m}`))] }) })] });
}
const Qe = [{ id: "keys", label: "Generating Keys", icon: jr }, { id: "metadata", label: "Encrypting Metadata", icon: Nr }, { id: "transfer", label: "Encrypting & Uploading", icon: kr }, { id: "done", label: "Complete", icon: Ee }];
function ot({ stage: e, step: r, progress: t, statusText: a }) {
  const n = Qe.findIndex((s) => s.id === r);
  return i.jsxs(B.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [i.jsxs(B.div, { animate: { rotate: e === "encrypting" ? [0, 10, -10, 0] : 0, scale: e === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: e === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [i.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${e === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: e === "success" ? i.jsx(Ee, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : i.jsx(Ae, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), e !== "success" && i.jsx(i.Fragment, { children: [0, 1, 2].map((s) => i.jsx(B.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: s * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, s)) })] }), i.jsx(B.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: a }, a), i.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: i.jsx(B.div, { initial: { width: 0 }, animate: { width: `${t}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), i.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(t), "%"] }), i.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: Qe.map((s, o) => {
    const c = s.id === r, l = o < n, u = o > n, d = s.icon;
    return i.jsxs(B.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: o * 0.1 }, className: `progress-step ${c ? "active" : ""} ${l ? "completed" : ""} ${u ? "pending" : ""}`, children: [i.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${l ? "bg-primary/20" : c ? "bg-primary/10" : "bg-zinc-800"}`, children: l ? i.jsx(Ee, { className: "w-4 h-4 text-primary" }) : c ? i.jsx(Se, { className: "w-4 h-4 text-primary animate-spin" }) : i.jsx(d, { className: "w-3 h-3" }) }), i.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: s.label })] }, s.id);
  }) }), i.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: i.jsx(B.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (s, o) => i.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, o)) }) }), i.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
const er = 500 * 1024 * 1024, lt = 500 * 1024 * 1024;
function rr(e) {
  const r = e.reduce((n, s) => n + s.size, 0), t = Math.max(...e.map((n) => n.size));
  if (t > er) {
    const n = e.find((s) => s.size > er);
    return { size: r, isValid: false, errorMessage: `File "${n == null ? void 0 : n.name}" exceeds 500MB limit (${ie(t)})`, formattedSize: ie(r), estimatedUploadTime: 0 };
  }
  if (r > lt) return { size: r, isValid: false, errorMessage: `Total upload size ${ie(r)} exceeds 500MB limit`, formattedSize: ie(r), estimatedUploadTime: 0 };
  const a = Math.ceil(r * 8 / (10 * 1024 * 1024));
  return { size: r, isValid: true, formattedSize: ie(r), estimatedUploadTime: a };
}
function ie(e) {
  if (e === 0) return "0 Bytes";
  const r = 1024, t = ["Bytes", "KB", "MB", "GB", "TB"], a = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, a)).toFixed(2)) + " " + t[a];
}
function Mt() {
  const [e, r] = I.useState([]), [t, a] = I.useState([24]), [n, s] = I.useState([5]), [o, c] = I.useState("idle"), [l, u] = I.useState("keys"), [d, g] = I.useState(0), [j, v] = I.useState(""), [T, N] = I.useState(false), [y, U] = I.useState(null), [, P] = pr(), { toast: A } = hr(), { play: f } = zr(), m = I.useRef(null), M = vr(), z = gr(), x = yr();
  I.useEffect(() => {
    (async () => {
      const h = await st();
      h && (a([h.expiresIn]), s([h.maxDownloads]));
    })();
  }, []), I.useEffect(() => {
    nt(t[0], n[0]);
  }, [t, n]);
  const p = (b, h = 20) => {
    if (b.length <= h) return b;
    const E = b.lastIndexOf(".");
    if (E !== -1) {
      const C = b.substring(E), S = b.substring(0, E);
      if (S.length > h - C.length - 3) return S.substring(0, h - C.length - 3) + "..." + C;
    }
    return b.substring(0, h - 3) + "...";
  }, w = (b) => {
    U(null);
    const h = rr(b);
    if (!h.isValid) {
      f("error"), U(h.errorMessage || "Invalid files"), A({ variant: "destructive", title: "Upload Limit Exceeded", description: h.errorMessage });
      return;
    }
    f("drop"), r(b);
  }, $ = async () => {
    if (e.length === 0) return;
    const b = rr(e);
    if (!b.isValid) {
      A({ variant: "destructive", title: "Upload Error", description: b.errorMessage });
      return;
    }
    c("encrypting"), g(0), m.current = new AbortController();
    try {
      const h = Date.now();
      u("keys"), v("Generating military-grade AES-256 keys..."), await new Promise((D) => setTimeout(D, 300));
      const E = await Mr(), C = Sr();
      v("Deriving PIN-protective wrapper...");
      const S = await Fr(E, C.pin);
      g(10), u("metadata"), v("Encrypting metadata...");
      const V = e.map((D) => ({ name: D.name, type: D.type, size: D.size, fileId: Ar(), lastModified: D.lastModified })), Z = await Er(V, E), ee = V.map((D) => ({ fileId: D.fileId, chunks: 1, size: D.size, isCompressed: false, originalSize: D.size }));
      g(20), v("Securing vault location...");
      const K = await M.mutateAsync({ expiresIn: t[0], maxDownloads: n[0], encryptedMetadata: Z, lookupId: C.lookupId, wrappedKey: S, files: ee });
      g(30), c("uploading"), u("transfer");
      const J = e.length;
      for (let D = 0; D < e.length; D++) {
        if (m.current.signal.aborted) throw new Error("Upload cancelled");
        const re = e[D], te = ee[D].fileId, de = p(re.name);
        v(`Reading ${de}...`);
        const pe = await re.arrayBuffer();
        v(`Encrypting ${de}...`);
        const { iv: ae, encryptedData: fe } = await Tr(pe, E), H = new Uint8Array(ae.byteLength + fe.byteLength);
        H.set(ae, 0), H.set(new Uint8Array(fe), ae.byteLength), v(`Uploading ${de}...`);
        const { uploadUrl: ue, storagePath: ur } = await z.mutateAsync({ vaultId: K.id, fileId: te, chunkIndex: 0, size: H.byteLength }), Ke = await fetch(ue, { method: "PUT", body: H, signal: m.current.signal });
        if (!Ke.ok) throw new Error(`Upload failed for ${re.name}: ${Ke.statusText}`);
        await x.mutateAsync({ vaultId: K.id, fileId: te, chunkIndex: 0, storagePath: ur });
        const mr = 30 + (D + 1) / J * 65;
        g(mr);
      }
      u("done"), g(100), v("Finalizing secure vault..."), c("success"), f("success"), await Ve();
      const G = Date.now() - h, O = k / (G / 1e3);
      setTimeout(() => {
        P(`/success/${K.id}#code=${C.fullCode}&time=${G}&speed=${Math.floor(O)}`);
      }, 800);
    } catch (h) {
      console.error(h), f("error"), c("idle"), h instanceof Error && h.message === "Upload cancelled" ? A({ title: "Upload Cancelled", variant: "default" }) : A({ variant: "destructive", title: "Upload Failed", description: h instanceof Error ? h.message : "An error occurred" });
    }
  }, k = e.reduce((b, h) => b + h.size, 0);
  return i.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [i.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), i.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), i.jsx("header", { className: "relative z-10 px-6 py-6 border-b border-white/5", children: i.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [i.jsx(qe, { href: "/", children: i.jsxs(B.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group", children: [i.jsx("div", { className: "w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors", children: i.jsx(Me, { className: "w-5 h-5 text-amber-500" }) }), i.jsxs("h1", { className: "text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors", children: ["VAULT", i.jsx("span", { className: "text-amber-500", children: "BRIDGE" })] })] }) }), i.jsx(qe, { href: "/", children: i.jsxs(ke, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [i.jsx(Dr, { className: "w-4 h-4" }), "Back"] }) })] }) }), i.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 py-12", children: [i.jsxs(B.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-10", children: [i.jsx("h2", { className: "text-3xl font-bold mb-3", children: "Secure Upload" }), i.jsx("p", { className: "text-zinc-400", children: "Create an encrypted vault for your files." })] }), i.jsxs(B.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: `bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl ${T ? "ring-2 ring-amber-500 bg-amber-500/5" : ""}`, children: [i.jsx(Fe, { children: o !== "idle" && i.jsxs(B.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [i.jsx(ot, { stage: o, step: l, progress: d, statusText: j }), o === "uploading" && i.jsx(ke, { variant: "outline", size: "sm", onClick: () => {
    var _a;
    return (_a = m.current) == null ? void 0 : _a.abort();
  }, className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), i.jsxs("div", { className: "space-y-6", children: [i.jsx(it, { onFilesSelected: w, disabled: o !== "idle", onDragStateChange: N }), y && i.jsxs(B.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3", children: [i.jsx(Cr, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), i.jsxs("div", { children: [i.jsx("p", { className: "text-sm text-red-400", children: y }), i.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Maximum file size: 500 MB" })] })] }), i.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(Ir, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(Ae, { className: "w-3 h-3 text-amber-500" }), "Lossless Transfer"] }), i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(Me, { className: "w-3 h-3 text-blue-500" }), "Max 500MB"] })] }), e.length > 0 && i.jsxs("div", { className: "text-center text-sm text-zinc-400", children: [e.length, " file", e.length > 1 ? "s" : "", " selected \u2022 ", ie(k), " total"] })] }), i.jsxs("div", { className: "mt-8 space-y-8 border-t border-white/5 pt-8", children: [i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [i.jsxs("div", { className: "space-y-4", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [i.jsx(Ur, { className: "w-4 h-4 text-amber-500" }), "Expires In"] }), i.jsxs("span", { className: "text-sm font-mono text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded", children: [t[0], "h"] })] }), i.jsx(Ze, { value: t, onValueChange: a, min: 1, max: 168, step: 1, className: "py-2" })] }), i.jsxs("div", { className: "space-y-4", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [i.jsx(Me, { className: "w-4 h-4 text-emerald-500" }), "Download Limit"] }), i.jsx("span", { className: "text-sm font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded", children: n[0] === 1 ? "BURN ON READ" : `${n[0]}x` })] }), i.jsx(Ze, { value: n, onValueChange: s, min: 1, max: 100, step: 1, disabled: n[0] === 1, className: n[0] === 1 ? "opacity-30" : "" }), i.jsx("div", { onClick: () => s(n[0] === 1 ? [5] : [1]), className: `text-xs cursor-pointer select-none transition-colors text-center py-2 rounded border ${n[0] === 1 ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white"}`, children: n[0] === 1 ? "\u{1F525} Burn-on-read Active (Auto-delete after 1 view)" : "Click to enable Burn-on-read" })] })] }), i.jsx(ke, { onClick: $, disabled: e.length === 0 || o !== "idle" || !!y, className: "w-full h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed", children: o !== "idle" ? "Processing..." : i.jsxs(i.Fragment, { children: [i.jsx(Ae, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] }) })] })] }), i.jsx(B.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-8 text-center px-4", children: i.jsx("p", { className: "text-xs text-zinc-500", children: "Zero-Knowledge Architecture: Encryption happens entirely in your browser. We never see your files, keys, or data." }) })] })] });
}
export {
  Mt as default
};
