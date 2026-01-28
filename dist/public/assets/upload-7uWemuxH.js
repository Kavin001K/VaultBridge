import { c as Ve, r as j, j as i, b as dt, X as ut, d as Xt, e as Zt, f as Jt, g as ce, P as Ce, h as ve, i as Qt, a as en, k as tn, u as nn, L as tt, B as Ie } from "./index-YOfmkex7.js";
import { A as ft } from "./index-2TAiR71A.js";
import { m as H } from "./proxy-B4MdC-kl.js";
import { F as rn } from "./file-D0u5NXPl.js";
import { K as an } from "./key-CYYZk1OD.js";
import { F as sn } from "./file-text-CCKoIjFG.js";
import { U as on } from "./upload-YnvFdXN6.js";
import { L as mt } from "./lock-BzrikEyi.js";
import { u as ln, a as cn, b as dn } from "./use-vaults-C2paA_jW.js";
import { g as un, a as fn, w as mn, e as pn, b as hn, c as vn } from "./crypto-B7jyo7TG.js";
import { Z as Ee } from "./zap-BQS0DDYY.js";
import { A as xn } from "./arrow-left-j2_1CXen.js";
import { T as gn } from "./triangle-alert-Bx0eBFtd.js";
import { S as yn } from "./shield-6khoS6J-.js";
import { T as wn } from "./timer-Crir-Ku6.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ue = Ve("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bn = Ve("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sn = Ve("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]);
var nt = {}, jn = function(e, t, n, r, a) {
  var s = new Worker(nt[t] || (nt[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return s.onmessage = function(o) {
    var l = o.data, c = l.$e$;
    if (c) {
      var p = new Error(c[0]);
      p.code = c[1], p.stack = c[2], a(p, null);
    } else a(null, l);
  }, s.postMessage(n, r), s;
}, O = Uint8Array, q = Uint16Array, Ne = Int32Array, Me = new O([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), ze = new O([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Pe = new O([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), pt = function(e, t) {
  for (var n = new q(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
  for (var a = new Ne(n[30]), r = 1; r < 30; ++r) for (var s = n[r]; s < n[r + 1]; ++s) a[s] = s - n[r] << 5 | r;
  return { b: n, r: a };
}, ht = pt(Me, 2), kn = ht.b, be = ht.r;
kn[28] = 258, be[258] = 28;
var Cn = pt(ze, 0), Re = Cn.r, Se = new q(32768);
for (var B = 0; B < 32768; ++B) {
  var ae = (B & 43690) >> 1 | (B & 21845) << 1;
  ae = (ae & 52428) >> 2 | (ae & 13107) << 2, ae = (ae & 61680) >> 4 | (ae & 3855) << 4, Se[B] = ((ae & 65280) >> 8 | (ae & 255) << 8) >> 1;
}
var de = function(e, t, n) {
  for (var r = e.length, a = 0, s = new q(t); a < r; ++a) e[a] && ++s[e[a] - 1];
  var o = new q(t);
  for (a = 1; a < t; ++a) o[a] = o[a - 1] + s[a - 1] << 1;
  var l;
  if (n) {
    l = new q(1 << t);
    var c = 15 - t;
    for (a = 0; a < r; ++a) if (e[a]) for (var p = a << 4 | e[a], d = t - e[a], f = o[e[a] - 1]++ << d, g = f | (1 << d) - 1; f <= g; ++f) l[Se[f] >> c] = p;
  } else for (l = new q(r), a = 0; a < r; ++a) e[a] && (l[a] = Se[o[e[a] - 1]++] >> 15 - e[a]);
  return l;
}, se = new O(288);
for (var B = 0; B < 144; ++B) se[B] = 8;
for (var B = 144; B < 256; ++B) se[B] = 9;
for (var B = 256; B < 280; ++B) se[B] = 7;
for (var B = 280; B < 288; ++B) se[B] = 8;
var he = new O(32);
for (var B = 0; B < 32; ++B) he[B] = 5;
var vt = de(se, 9, 0), xt = de(he, 5, 0), He = function(e) {
  return (e + 7) / 8 | 0;
}, qe = function(e, t, n) {
  return (t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length), new O(e.subarray(t, n));
}, Nn = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], ue = function(e, t, n) {
  var r = new Error(t || Nn[e]);
  if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, ue), !n) throw r;
  return r;
}, J = function(e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n, e[r + 1] |= n >> 8;
}, ie = function(e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, we = function(e, t) {
  for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
  var a = n.length, s = n.slice();
  if (!a) return { t: Ge, l: 0 };
  if (a == 1) {
    var o = new O(n[0].s + 1);
    return o[n[0].s] = 1, { t: o, l: 1 };
  }
  n.sort(function(C, M) {
    return C.f - M.f;
  }), n.push({ s: -1, f: 25001 });
  var l = n[0], c = n[1], p = 0, d = 1, f = 2;
  for (n[0] = { s: -1, f: l.f + c.f, l, r: c }; d != a - 1; ) l = n[n[p].f < n[f].f ? p++ : f++], c = n[p != d && n[p].f < n[f].f ? p++ : f++], n[d++] = { s: -1, f: l.f + c.f, l, r: c };
  for (var g = s[0].s, r = 1; r < a; ++r) s[r].s > g && (g = s[r].s);
  var x = new q(g + 1), z = je(n[d - 1], x, 0);
  if (z > t) {
    var r = 0, b = 0, u = z - t, h = 1 << u;
    for (s.sort(function(M, N) {
      return x[N.s] - x[M.s] || M.f - N.f;
    }); r < a; ++r) {
      var D = s[r].s;
      if (x[D] > t) b += h - (1 << z - x[D]), x[D] = t;
      else break;
    }
    for (b >>= u; b > 0; ) {
      var S = s[r].s;
      x[S] < t ? b -= 1 << t - x[S]++ - 1 : ++r;
    }
    for (; r >= 0 && b; --r) {
      var m = s[r].s;
      x[m] == t && (--x[m], ++b);
    }
    z = t;
  }
  return { t: new O(x), l: z };
}, je = function(e, t, n) {
  return e.s == -1 ? Math.max(je(e.l, t, n + 1), je(e.r, t, n + 1)) : t[e.s] = n;
}, Te = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var n = new q(++t), r = 0, a = e[0], s = 1, o = function(c) {
    n[r++] = c;
  }, l = 1; l <= t; ++l) if (e[l] == a && l != t) ++s;
  else {
    if (!a && s > 2) {
      for (; s > 138; s -= 138) o(32754);
      s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
    } else if (s > 3) {
      for (o(a), --s; s > 6; s -= 6) o(8304);
      s > 2 && (o(s - 3 << 5 | 8208), s = 0);
    }
    for (; s--; ) o(a);
    s = 1, a = e[l];
  }
  return { c: n.subarray(0, r), n: t };
}, le = function(e, t) {
  for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
  return n;
}, We = function(e, t, n) {
  var r = n.length, a = He(t + 2);
  e[a] = r & 255, e[a + 1] = r >> 8, e[a + 2] = e[a] ^ 255, e[a + 3] = e[a + 1] ^ 255;
  for (var s = 0; s < r; ++s) e[a + s + 4] = n[s];
  return (a + 4 + r) * 8;
}, Fe = function(e, t, n, r, a, s, o, l, c, p, d) {
  J(t, d++, n), ++a[256];
  for (var f = we(a, 15), g = f.t, x = f.l, z = we(s, 15), b = z.t, u = z.l, h = Te(g), D = h.c, S = h.n, m = Te(b), C = m.c, M = m.n, N = new q(19), y = 0; y < D.length; ++y) ++N[D[y] & 31];
  for (var y = 0; y < C.length; ++y) ++N[C[y] & 31];
  for (var w = we(N, 7), P = w.t, R = w.l, v = 19; v > 4 && !P[Pe[v - 1]]; --v) ;
  var A = p + 5 << 3, I = le(a, se) + le(s, he) + o, T = le(a, g) + le(s, b) + o + 14 + 3 * v + le(N, P) + 2 * N[16] + 3 * N[17] + 7 * N[18];
  if (c >= 0 && A <= I && A <= T) return We(t, d, e.subarray(c, c + p));
  var F, E, U, $;
  if (J(t, d, 1 + (T < I)), d += 2, T < I) {
    F = de(g, x, 0), E = g, U = de(b, u, 0), $ = b;
    var Q = de(P, R, 0);
    J(t, d, S - 257), J(t, d + 5, M - 1), J(t, d + 10, v - 4), d += 14;
    for (var y = 0; y < v; ++y) J(t, d + 3 * y, P[Pe[y]]);
    d += 3 * v;
    for (var W = [D, C], ee = 0; ee < 2; ++ee) for (var X = W[ee], y = 0; y < X.length; ++y) {
      var V = X[y] & 31;
      J(t, d, Q[V]), d += P[V], V > 15 && (J(t, d, X[y] >> 5 & 127), d += X[y] >> 12);
    }
  } else F = vt, E = se, U = xt, $ = he;
  for (var y = 0; y < l; ++y) {
    var K = r[y];
    if (K > 255) {
      var V = K >> 18 & 31;
      ie(t, d, F[V + 257]), d += E[V + 257], V > 7 && (J(t, d, K >> 23 & 31), d += Me[V]);
      var k = K & 31;
      ie(t, d, U[k]), d += $[k], k > 3 && (ie(t, d, K >> 5 & 8191), d += ze[k]);
    } else ie(t, d, F[K]), d += E[K];
  }
  return ie(t, d, F[256]), d + E[256];
}, gt = new Ne([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Ge = new O(0), yt = function(e, t, n, r, a, s) {
  var o = s.z || e.length, l = new O(r + o + 5 * (1 + Math.ceil(o / 7e3)) + a), c = l.subarray(r, l.length - a), p = s.l, d = (s.r || 0) & 7;
  if (t) {
    d && (c[0] = s.r >> 3);
    for (var f = gt[t - 1], g = f >> 13, x = f & 8191, z = (1 << n) - 1, b = s.p || new q(32768), u = s.h || new q(z + 1), h = Math.ceil(n / 3), D = 2 * h, S = function(pe) {
      return (e[pe] ^ e[pe + 1] << h ^ e[pe + 2] << D) & z;
    }, m = new Ne(25e3), C = new q(288), M = new q(32), N = 0, y = 0, w = s.i || 0, P = 0, R = s.w || 0, v = 0; w + 2 < o; ++w) {
      var A = S(w), I = w & 32767, T = u[A];
      if (b[I] = T, u[A] = I, R <= w) {
        var F = o - w;
        if ((N > 7e3 || P > 24576) && (F > 423 || !p)) {
          d = Fe(e, c, 0, m, C, M, y, P, v, w - v, d), P = N = y = 0, v = w;
          for (var E = 0; E < 286; ++E) C[E] = 0;
          for (var E = 0; E < 30; ++E) M[E] = 0;
        }
        var U = 2, $ = 0, Q = x, W = I - T & 32767;
        if (F > 2 && A == S(w - W)) for (var ee = Math.min(g, F) - 1, X = Math.min(32767, w), V = Math.min(258, F); W <= X && --Q && I != T; ) {
          if (e[w + U] == e[w + U - W]) {
            for (var K = 0; K < V && e[w + K] == e[w + K - W]; ++K) ;
            if (K > U) {
              if (U = K, $ = W, K > ee) break;
              for (var k = Math.min(W, K - 2), _ = 0, E = 0; E < k; ++E) {
                var G = w - W + E & 32767, Y = b[G], te = G - Y & 32767;
                te > _ && (_ = te, T = G);
              }
            }
          }
          I = T, T = b[I], W += I - T & 32767;
        }
        if ($) {
          m[P++] = 268435456 | be[U] << 18 | Re[$];
          var ne = be[U] & 31, oe = Re[$] & 31;
          y += Me[ne] + ze[oe], ++C[257 + ne], ++M[oe], R = w + U, ++N;
        } else m[P++] = e[w], ++C[e[w]];
      }
    }
    for (w = Math.max(w, R); w < o; ++w) m[P++] = e[w], ++C[e[w]];
    d = Fe(e, c, p, m, C, M, y, P, v, w - v, d), p || (s.r = d & 7 | c[d / 8 | 0] << 3, d -= 7, s.h = u, s.p = b, s.i = w, s.w = R);
  } else {
    for (var w = s.w || 0; w < o + p; w += 65535) {
      var Z = w + 65535;
      Z >= o && (c[d / 8 | 0] = p, Z = o), d = We(c, d + 1, e.subarray(w, Z));
    }
    s.i = o;
  }
  return qe(l, 0, r + He(d) + a);
}, Mn = function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var n = t, r = 9; --r; ) n = (n & 1 && -306674912) ^ n >>> 1;
    e[t] = n;
  }
  return e;
}(), zn = function() {
  var e = -1;
  return { p: function(t) {
    for (var n = e, r = 0; r < t.length; ++r) n = Mn[n & 255 ^ t[r]] ^ n >>> 8;
    e = n;
  }, d: function() {
    return ~e;
  } };
}, wt = function(e, t, n, r, a) {
  if (!a && (a = { l: 1 }, t.dictionary)) {
    var s = t.dictionary.subarray(-32768), o = new O(s.length + e.length);
    o.set(s), o.set(e, s.length), e = o, a.w = s.length;
  }
  return yt(e, t.level == null ? 6 : t.level, t.mem == null ? a.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, r, a);
}, Ye = function(e, t) {
  var n = {};
  for (var r in e) n[r] = e[r];
  for (var r in t) n[r] = t[r];
  return n;
}, rt = function(e, t, n) {
  for (var r = e(), a = e.toString(), s = a.slice(a.indexOf("[") + 1, a.lastIndexOf("]")).replace(/\s+/g, "").split(","), o = 0; o < r.length; ++o) {
    var l = r[o], c = s[o];
    if (typeof l == "function") {
      t += ";" + c + "=";
      var p = l.toString();
      if (l.prototype) if (p.indexOf("[native code]") != -1) {
        var d = p.indexOf(" ", 8) + 1;
        t += p.slice(d, p.indexOf("(", d));
      } else {
        t += p;
        for (var f in l.prototype) t += ";" + c + ".prototype." + f + "=" + l.prototype[f].toString();
      }
      else t += p;
    } else n[c] = l;
  }
  return t;
}, ge = [], An = function(e) {
  var t = [];
  for (var n in e) e[n].buffer && t.push((e[n] = new e[n].constructor(e[n])).buffer);
  return t;
}, Dn = function(e, t, n, r) {
  if (!ge[n]) {
    for (var a = "", s = {}, o = e.length - 1, l = 0; l < o; ++l) a = rt(e[l], a, s);
    ge[n] = { c: rt(e[o], a, s), e: s };
  }
  var c = Ye({}, ge[n].e);
  return jn(ge[n].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", n, c, An(c), r);
}, In = function() {
  return [O, q, Ne, Me, ze, Pe, be, Re, vt, se, xt, he, Se, gt, Ge, de, J, ie, we, je, Te, le, We, Fe, He, qe, yt, wt, Xe, bt];
}, bt = function(e) {
  return postMessage(e, [e.buffer]);
}, En = function(e, t, n, r, a, s) {
  var o = Dn(n, r, a, function(l, c) {
    o.terminate(), s(l, c);
  });
  return o.postMessage([e, t], t.consume ? [e.buffer] : []), function() {
    o.terminate();
  };
}, L = function(e, t, n) {
  for (; n; ++t) e[t] = n, n >>>= 8;
};
function Un(e, t, n) {
  return n || (n = t, t = {}), typeof n != "function" && ue(7), En(e, t, [In], function(r) {
    return bt(Xe(r.data[0], r.data[1]));
  }, 0, n);
}
function Xe(e, t) {
  return wt(e, t || {}, 0, 0);
}
var St = function(e, t, n, r) {
  for (var a in e) {
    var s = e[a], o = t + a, l = r;
    Array.isArray(s) && (l = Ye(r, s[1]), s = s[0]), s instanceof O ? n[o] = [s, l] : (n[o += "/"] = [new O(0), l], St(s, o, n, r));
  }
}, at = typeof TextEncoder < "u" && new TextEncoder(), Pn = typeof TextDecoder < "u" && new TextDecoder(), Rn = 0;
try {
  Pn.decode(Ge, { stream: true }), Rn = 1;
} catch {
}
function st(e, t) {
  var n;
  if (at) return at.encode(e);
  for (var r = e.length, a = new O(e.length + (e.length >> 1)), s = 0, o = function(p) {
    a[s++] = p;
  }, n = 0; n < r; ++n) {
    if (s + 5 > a.length) {
      var l = new O(s + 8 + (r - n << 1));
      l.set(a), a = l;
    }
    var c = e.charCodeAt(n);
    c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1047552) | e.charCodeAt(++n) & 1023, o(240 | c >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | c & 63)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | c & 63));
  }
  return qe(a, 0, s);
}
var Be = function(e) {
  var t = 0;
  if (e) for (var n in e) {
    var r = e[n].length;
    r > 65535 && ue(9), t += r + 4;
  }
  return t;
}, ot = function(e, t, n, r, a, s, o, l) {
  var c = r.length, p = n.extra, d = l && l.length, f = Be(p);
  L(e, t, o != null ? 33639248 : 67324752), t += 4, o != null && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (s < 0 && 8), e[t++] = a && 8, e[t++] = n.compression & 255, e[t++] = n.compression >> 8;
  var g = new Date(n.mtime == null ? Date.now() : n.mtime), x = g.getFullYear() - 1980;
  if ((x < 0 || x > 119) && ue(10), L(e, t, x << 25 | g.getMonth() + 1 << 21 | g.getDate() << 16 | g.getHours() << 11 | g.getMinutes() << 5 | g.getSeconds() >> 1), t += 4, s != -1 && (L(e, t, n.crc), L(e, t + 4, s < 0 ? -s - 2 : s), L(e, t + 8, n.size)), L(e, t + 12, c), L(e, t + 14, f), t += 16, o != null && (L(e, t, d), L(e, t + 6, n.attrs), L(e, t + 10, o), t += 14), e.set(r, t), t += c, f) for (var z in p) {
    var b = p[z], u = b.length;
    L(e, t, +z), L(e, t + 2, u), e.set(b, t + 4), t += 4 + u;
  }
  return d && (e.set(l, t), t += d), t;
}, Tn = function(e, t, n, r, a) {
  L(e, t, 101010256), L(e, t + 8, n), L(e, t + 10, n), L(e, t + 12, r), L(e, t + 16, a);
};
function Fn(e, t, n) {
  n || (n = t, t = {}), typeof n != "function" && ue(7);
  var r = {};
  St(e, "", r, t);
  var a = Object.keys(r), s = a.length, o = 0, l = 0, c = s, p = new Array(s), d = [], f = function() {
    for (var u = 0; u < d.length; ++u) d[u]();
  }, g = function(u, h) {
    it(function() {
      n(u, h);
    });
  };
  it(function() {
    g = n;
  });
  var x = function() {
    var u = new O(l + 22), h = o, D = l - o;
    l = 0;
    for (var S = 0; S < c; ++S) {
      var m = p[S];
      try {
        var C = m.c.length;
        ot(u, l, m, m.f, m.u, C);
        var M = 30 + m.f.length + Be(m.extra), N = l + M;
        u.set(m.c, N), ot(u, o, m, m.f, m.u, C, l, m.m), o += 16 + M + (m.m ? m.m.length : 0), l = N + C;
      } catch (y) {
        return g(y, null);
      }
    }
    Tn(u, o, p.length, D, h), g(null, u);
  };
  s || x();
  for (var z = function(u) {
    var h = a[u], D = r[h], S = D[0], m = D[1], C = zn(), M = S.length;
    C.p(S);
    var N = st(h), y = N.length, w = m.comment, P = w && st(w), R = P && P.length, v = Be(m.extra), A = m.level == 0 ? 0 : 8, I = function(T, F) {
      if (T) f(), g(T, null);
      else {
        var E = F.length;
        p[u] = Ye(m, { size: M, crc: C.d(), c: F, f: N, m: P, u: y != h.length || P && w.length != R, compression: A }), o += 30 + y + v + E, l += 76 + 2 * (y + v) + (R || 0) + E, --s || x();
      }
    };
    if (y > 65535 && I(ue(11, 0, 1), null), !A) I(null, S);
    else if (M < 16e4) try {
      I(null, Xe(S, m));
    } catch (T) {
      I(T, null);
    }
    else d.push(Un(S, m, I));
  }, b = 0; b < c; ++b) z(b);
  return f;
}
var it = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
  e();
};
function Bn({ onFilesSelected: e, disabled: t, onDragStateChange: n }) {
  const [r, a] = j.useState(false), [s, o] = j.useState([]);
  j.useEffect(() => {
    n == null ? void 0 : n(r);
  }, [r, n]);
  const l = (u) => {
    u.preventDefault(), t || a(true);
  }, c = () => a(false), [p, d] = j.useState(false), f = (u) => new Promise((h) => {
    if (u.isFile) u.file((D) => {
      h({ [u.fullPath]: D });
    });
    else if (u.isDirectory) {
      const D = u.createReader();
      (() => {
        D.readEntries(async (m) => {
          if (m.length === 0) {
            h({});
            return;
          }
          const C = m.map((y) => f(y)), N = (await Promise.all(C)).reduce((y, w) => ({ ...y, ...w }), {});
          h(N);
        });
      })();
    } else h({});
  }), g = async (u) => {
    if (u.preventDefault(), a(false), t) return;
    const h = u.dataTransfer.items;
    if (!h || h.length === 0) return;
    let D = false;
    const S = [];
    for (let m = 0; m < h.length; m++) {
      const C = h[m].webkitGetAsEntry();
      C && (S.push(C), C.isDirectory && (D = true));
    }
    if (D) {
      d(true);
      try {
        const m = {};
        for (const M of S) {
          const N = await f(M);
          Object.assign(m, N);
        }
        const C = {};
        for (const [M, N] of Object.entries(m)) {
          const y = M.startsWith("/") ? M.slice(1) : M, w = new Uint8Array(await N.arrayBuffer());
          C[y] = w;
        }
        Fn(C, { level: 6 }, (M, N) => {
          if (M) {
            console.error("Zipping failed", M), d(false);
            return;
          }
          const y = new File([N], "archive.zip", { type: "application/zip" });
          o([y]), e([y]), d(false);
        });
      } catch (m) {
        console.error("Folder scan failed", m), d(false);
      }
    } else if (u.dataTransfer.files && u.dataTransfer.files.length > 0) {
      const m = Array.from(u.dataTransfer.files);
      o(m), e(m);
    }
  }, x = (u) => {
    if (u.target.files && u.target.files.length > 0) {
      const h = Array.from(u.target.files);
      o(h), e(h);
    }
  }, z = (u) => {
    const h = s.filter((D, S) => S !== u);
    o(h), e(h);
  }, b = s.reduce((u, h) => u + h.size, 0);
  return i.jsxs("div", { className: "w-full space-y-4", children: [i.jsxs("div", { onDragOver: l, onDragLeave: c, onDrop: g, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${r ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${t ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [i.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: x, disabled: t }), i.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: p ? i.jsx(dt, { className: "w-8 h-8 text-primary animate-spin" }) : r ? i.jsx(Sn, { className: "w-8 h-8 text-primary" }) : i.jsx(bn, { className: "w-8 h-8 text-muted-foreground" }) }), i.jsx("h3", { className: "text-lg font-semibold mb-1", children: r ? "Drop folder or files" : p ? "Zipping..." : "Drag & drop files or folders here" }), i.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), i.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: Unlimited (Chunked Upload)" })] }), i.jsx(ft, { children: s.length > 0 && i.jsxs(H.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-2", children: [i.jsxs("div", { className: "flex justify-between items-center text-xs uppercase tracking-wider font-mono text-muted-foreground mb-2", children: [i.jsxs("span", { children: ["Selected Files (", s.length, ")"] }), i.jsxs("span", { children: [(b / (1024 * 1024)).toFixed(2), " MB Total"] })] }), s.map((u, h) => i.jsxs(H.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [i.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [i.jsx("div", { className: "p-2 bg-background rounded-md", children: i.jsx(rn, { className: "w-4 h-4 text-primary" }) }), i.jsxs("div", { className: "truncate", children: [i.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: u.name }), i.jsxs("p", { className: "text-xs text-muted-foreground", children: [(u.size / 1024).toFixed(1), " KB"] })] })] }), !t && i.jsx("button", { onClick: () => z(h), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: i.jsx(ut, { className: "w-4 h-4" }) })] }, `${u.name}-${h}`))] }) })] });
}
const lt = [{ id: "keys", label: "Generating Keys", icon: an }, { id: "metadata", label: "Encrypting Metadata", icon: sn }, { id: "transfer", label: "Encrypting & Uploading", icon: on }, { id: "done", label: "Complete", icon: Ue }];
function _n({ stage: e, step: t, progress: n, statusText: r }) {
  const a = lt.findIndex((s) => s.id === t);
  return i.jsxs(H.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [i.jsxs(H.div, { animate: { rotate: e === "encrypting" ? [0, 10, -10, 0] : 0, scale: e === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: e === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [i.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${e === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: e === "success" ? i.jsx(Ue, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : i.jsx(mt, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), e !== "success" && i.jsx(i.Fragment, { children: [0, 1, 2].map((s) => i.jsx(H.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: s * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, s)) })] }), i.jsx(H.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: r }, r), i.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: i.jsx(H.div, { initial: { width: 0 }, animate: { width: `${n}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), i.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(n), "%"] }), i.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: lt.map((s, o) => {
    const l = s.id === t, c = o < a, p = o > a, d = s.icon;
    return i.jsxs(H.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: o * 0.1 }, className: `progress-step ${l ? "active" : ""} ${c ? "completed" : ""} ${p ? "pending" : ""}`, children: [i.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${c ? "bg-primary/20" : l ? "bg-primary/10" : "bg-zinc-800"}`, children: c ? i.jsx(Ue, { className: "w-4 h-4 text-primary" }) : l ? i.jsx(dt, { className: "w-4 h-4 text-primary animate-spin" }) : i.jsx(d, { className: "w-3 h-3" }) }), i.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: s.label })] }, s.id);
  }) }), i.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: i.jsx(H.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (s, o) => i.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, o)) }) }), i.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
function jt(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Kn = j.createContext(void 0);
function Ln(e) {
  const t = j.useContext(Kn);
  return e || t || "ltr";
}
function On(e) {
  const t = j.useRef({ value: e, previous: e });
  return j.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var kt = ["PageUp", "PageDown"], Ct = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Nt = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, fe = "Slider", [_e, $n, Vn] = Jt(fe), [Mt] = Zt(fe, [Vn]), [Hn, Ae] = Mt(fe), zt = j.forwardRef((e, t) => {
  const { name: n, min: r = 0, max: a = 100, step: s = 1, orientation: o = "horizontal", disabled: l = false, minStepsBetweenThumbs: c = 0, defaultValue: p = [r], value: d, onValueChange: f = () => {
  }, onValueCommit: g = () => {
  }, inverted: x = false, form: z, ...b } = e, u = j.useRef(/* @__PURE__ */ new Set()), h = j.useRef(0), S = o === "horizontal" ? qn : Wn, [m = [], C] = Xt({ prop: d, defaultProp: p, onChange: (R) => {
    var _a;
    (_a = [...u.current][h.current]) == null ? void 0 : _a.focus(), f(R);
  } }), M = j.useRef(m);
  function N(R) {
    const v = Jn(m, R);
    P(R, v);
  }
  function y(R) {
    P(R, h.current);
  }
  function w() {
    const R = M.current[h.current];
    m[h.current] !== R && g(m);
  }
  function P(R, v, { commit: A } = { commit: false }) {
    const I = nr(s), T = rr(Math.round((R - r) / s) * s + r, I), F = jt(T, [r, a]);
    C((E = []) => {
      const U = Xn(E, F, v);
      if (tr(U, c * s)) {
        h.current = U.indexOf(F);
        const $ = String(U) !== String(E);
        return $ && A && g(U), $ ? U : E;
      } else return E;
    });
  }
  return i.jsx(Hn, { scope: e.__scopeSlider, name: n, disabled: l, min: r, max: a, valueIndexToChangeRef: h, thumbs: u.current, values: m, orientation: o, form: z, children: i.jsx(_e.Provider, { scope: e.__scopeSlider, children: i.jsx(_e.Slot, { scope: e.__scopeSlider, children: i.jsx(S, { "aria-disabled": l, "data-disabled": l ? "" : void 0, ...b, ref: t, onPointerDown: ce(b.onPointerDown, () => {
    l || (M.current = m);
  }), min: r, max: a, inverted: x, onSlideStart: l ? void 0 : N, onSlideMove: l ? void 0 : y, onSlideEnd: l ? void 0 : w, onHomeKeyDown: () => !l && P(r, 0, { commit: true }), onEndKeyDown: () => !l && P(a, m.length - 1, { commit: true }), onStepKeyDown: ({ event: R, direction: v }) => {
    if (!l) {
      const T = kt.includes(R.key) || R.shiftKey && Ct.includes(R.key) ? 10 : 1, F = h.current, E = m[F], U = s * T * v;
      P(E + U, F, { commit: true });
    }
  } }) }) }) });
});
zt.displayName = fe;
var [At, Dt] = Mt(fe, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), qn = j.forwardRef((e, t) => {
  const { min: n, max: r, dir: a, inverted: s, onSlideStart: o, onSlideMove: l, onSlideEnd: c, onStepKeyDown: p, ...d } = e, [f, g] = j.useState(null), x = ve(t, (S) => g(S)), z = j.useRef(void 0), b = Ln(a), u = b === "ltr", h = u && !s || !u && s;
  function D(S) {
    const m = z.current || f.getBoundingClientRect(), C = [0, m.width], N = Ze(C, h ? [n, r] : [r, n]);
    return z.current = m, N(S - m.left);
  }
  return i.jsx(At, { scope: e.__scopeSlider, startEdge: h ? "left" : "right", endEdge: h ? "right" : "left", direction: h ? 1 : -1, size: "width", children: i.jsx(It, { dir: b, "data-orientation": "horizontal", ...d, ref: x, style: { ...d.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (S) => {
    const m = D(S.clientX);
    o == null ? void 0 : o(m);
  }, onSlideMove: (S) => {
    const m = D(S.clientX);
    l == null ? void 0 : l(m);
  }, onSlideEnd: () => {
    z.current = void 0, c == null ? void 0 : c();
  }, onStepKeyDown: (S) => {
    const C = Nt[h ? "from-left" : "from-right"].includes(S.key);
    p == null ? void 0 : p({ event: S, direction: C ? -1 : 1 });
  } }) });
}), Wn = j.forwardRef((e, t) => {
  const { min: n, max: r, inverted: a, onSlideStart: s, onSlideMove: o, onSlideEnd: l, onStepKeyDown: c, ...p } = e, d = j.useRef(null), f = ve(t, d), g = j.useRef(void 0), x = !a;
  function z(b) {
    const u = g.current || d.current.getBoundingClientRect(), h = [0, u.height], S = Ze(h, x ? [r, n] : [n, r]);
    return g.current = u, S(b - u.top);
  }
  return i.jsx(At, { scope: e.__scopeSlider, startEdge: x ? "bottom" : "top", endEdge: x ? "top" : "bottom", size: "height", direction: x ? 1 : -1, children: i.jsx(It, { "data-orientation": "vertical", ...p, ref: f, style: { ...p.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (b) => {
    const u = z(b.clientY);
    s == null ? void 0 : s(u);
  }, onSlideMove: (b) => {
    const u = z(b.clientY);
    o == null ? void 0 : o(u);
  }, onSlideEnd: () => {
    g.current = void 0, l == null ? void 0 : l();
  }, onStepKeyDown: (b) => {
    const h = Nt[x ? "from-bottom" : "from-top"].includes(b.key);
    c == null ? void 0 : c({ event: b, direction: h ? -1 : 1 });
  } }) });
}), It = j.forwardRef((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: a, onSlideEnd: s, onHomeKeyDown: o, onEndKeyDown: l, onStepKeyDown: c, ...p } = e, d = Ae(fe, n);
  return i.jsx(Ce.span, { ...p, ref: t, onKeyDown: ce(e.onKeyDown, (f) => {
    f.key === "Home" ? (o(f), f.preventDefault()) : f.key === "End" ? (l(f), f.preventDefault()) : kt.concat(Ct).includes(f.key) && (c(f), f.preventDefault());
  }), onPointerDown: ce(e.onPointerDown, (f) => {
    const g = f.target;
    g.setPointerCapture(f.pointerId), f.preventDefault(), d.thumbs.has(g) ? g.focus() : r(f);
  }), onPointerMove: ce(e.onPointerMove, (f) => {
    f.target.hasPointerCapture(f.pointerId) && a(f);
  }), onPointerUp: ce(e.onPointerUp, (f) => {
    const g = f.target;
    g.hasPointerCapture(f.pointerId) && (g.releasePointerCapture(f.pointerId), s(f));
  }) });
}), Et = "SliderTrack", Ut = j.forwardRef((e, t) => {
  const { __scopeSlider: n, ...r } = e, a = Ae(Et, n);
  return i.jsx(Ce.span, { "data-disabled": a.disabled ? "" : void 0, "data-orientation": a.orientation, ...r, ref: t });
});
Ut.displayName = Et;
var Ke = "SliderRange", Pt = j.forwardRef((e, t) => {
  const { __scopeSlider: n, ...r } = e, a = Ae(Ke, n), s = Dt(Ke, n), o = j.useRef(null), l = ve(t, o), c = a.values.length, p = a.values.map((g) => Tt(g, a.min, a.max)), d = c > 1 ? Math.min(...p) : 0, f = 100 - Math.max(...p);
  return i.jsx(Ce.span, { "data-orientation": a.orientation, "data-disabled": a.disabled ? "" : void 0, ...r, ref: l, style: { ...e.style, [s.startEdge]: d + "%", [s.endEdge]: f + "%" } });
});
Pt.displayName = Ke;
var Le = "SliderThumb", Rt = j.forwardRef((e, t) => {
  const n = $n(e.__scopeSlider), [r, a] = j.useState(null), s = ve(t, (l) => a(l)), o = j.useMemo(() => r ? n().findIndex((l) => l.ref.current === r) : -1, [n, r]);
  return i.jsx(Gn, { ...e, ref: s, index: o });
}), Gn = j.forwardRef((e, t) => {
  const { __scopeSlider: n, index: r, name: a, ...s } = e, o = Ae(Le, n), l = Dt(Le, n), [c, p] = j.useState(null), d = ve(t, (D) => p(D)), f = c ? o.form || !!c.closest("form") : true, g = Qt(c), x = o.values[r], z = x === void 0 ? 0 : Tt(x, o.min, o.max), b = Zn(r, o.values.length), u = g == null ? void 0 : g[l.size], h = u ? Qn(u, z, l.direction) : 0;
  return j.useEffect(() => {
    if (c) return o.thumbs.add(c), () => {
      o.thumbs.delete(c);
    };
  }, [c, o.thumbs]), i.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [l.startEdge]: `calc(${z}% + ${h}px)` }, children: [i.jsx(_e.ItemSlot, { scope: e.__scopeSlider, children: i.jsx(Ce.span, { role: "slider", "aria-label": e["aria-label"] || b, "aria-valuemin": o.min, "aria-valuenow": x, "aria-valuemax": o.max, "aria-orientation": o.orientation, "data-orientation": o.orientation, "data-disabled": o.disabled ? "" : void 0, tabIndex: o.disabled ? void 0 : 0, ...s, ref: d, style: x === void 0 ? { display: "none" } : e.style, onFocus: ce(e.onFocus, () => {
    o.valueIndexToChangeRef.current = r;
  }) }) }), f && i.jsx(Yn, { name: a ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), form: o.form, value: x }, r)] });
});
Rt.displayName = Le;
var Yn = (e) => {
  const { value: t, ...n } = e, r = j.useRef(null), a = On(t);
  return j.useEffect(() => {
    const s = r.current, o = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(o, "value").set;
    if (a !== t && c) {
      const p = new Event("input", { bubbles: true });
      c.call(s, t), s.dispatchEvent(p);
    }
  }, [a, t]), i.jsx("input", { style: { display: "none" }, ...n, ref: r, defaultValue: t });
};
function Xn(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((a, s) => a - s);
}
function Tt(e, t, n) {
  const s = 100 / (n - t) * (e - t);
  return jt(s, [0, 100]);
}
function Zn(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Jn(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((a) => Math.abs(a - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function Qn(e, t, n) {
  const r = e / 2, s = Ze([0, 50], [0, r]);
  return (r - s(t) * n) * n;
}
function er(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function tr(e, t) {
  if (t > 0) {
    const n = er(e);
    return Math.min(...n) >= t;
  }
  return true;
}
function Ze(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function nr(e) {
  return (String(e).split(".")[1] || "").length;
}
function rr(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Ft = zt, ar = Ut, sr = Pt, or = Rt;
const Oe = j.forwardRef(({ className: e, ...t }, n) => i.jsxs(Ft, { ref: n, className: en("relative flex w-full touch-none select-none items-center", e), ...t, children: [i.jsx(ar, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: i.jsx(sr, { className: "absolute h-full bg-primary" }) }), i.jsx(or, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })] }));
Oe.displayName = Ft.displayName;
async function ir() {
  const e = lr();
  if (e && e.speedMbps > 0) return e;
  try {
    return await cr();
  } catch (t) {
    console.warn("[ConnectionSpeed] Timing measurement failed:", t);
  }
  return { speedMbps: 10, type: "unknown", effectiveType: "4g", isReliable: false, method: "fallback" };
}
function lr() {
  const e = navigator, t = e.connection || e.mozConnection || e.webkitConnection;
  if (!t) return null;
  const n = t.downlink || 0, r = t.effectiveType || "unknown", a = t.rtt, s = t.type || "unknown";
  let o = "unknown";
  s === "wifi" ? o = "wifi" : s === "cellular" ? o = "cellular" : s === "ethernet" && (o = "ethernet");
  const l = t.saveData || o === "cellular";
  return { speedMbps: n, type: o, effectiveType: r, isReliable: n > 0, rtt: a, isMetered: l, method: "navigator" };
}
async function cr() {
  const e = "/api/health", t = [];
  for (let s = 0; s < 3; s++) {
    const o = performance.now();
    try {
      if ((await fetch(e, { method: "GET", cache: "no-store", headers: { "Cache-Control": "no-cache" } })).ok) {
        const c = performance.now();
        t.push(c - o);
      }
    } catch {
    }
    s < 2 && await new Promise((l) => setTimeout(l, 100));
  }
  if (t.length === 0) throw new Error("All measurements failed");
  const n = t.reduce((s, o) => s + o, 0) / t.length;
  let r, a;
  return n < 50 ? (r = 100, a = "4g") : n < 100 ? (r = 50, a = "4g") : n < 200 ? (r = 20, a = "4g") : n < 400 ? (r = 10, a = "3g") : n < 800 ? (r = 5, a = "3g") : (r = 2, a = "2g"), { speedMbps: r, type: "unknown", effectiveType: a, isReliable: t.length >= 2, rtt: Math.round(n), method: "timing" };
}
const Bt = 1 * 1024 * 1024, _t = 50 * 1024 * 1024, Kt = 50 * 1024 * 1024;
async function dr(e, t = {}) {
  const { forceChunkSize: n, alwaysChunk: r = false, minConnectionSpeed: a = 1 } = t;
  if (n) {
    const c = Math.max(Bt, Math.min(_t, n));
    return ct(e, c, 10, true);
  }
  if (!r && e <= Kt) return { chunkSize: e, shouldChunk: false, estimatedChunks: 1, estimatedUploadTime: Lt(e, 10), connectionSpeedMbps: 10, recommendation: "File is small enough for single-request upload (optimal performance)" };
  let s;
  try {
    s = await ir();
  } catch {
    console.warn("[AdaptiveChunk] Could not measure connection, using defaults"), s = { speedMbps: 10, type: "unknown", effectiveType: "4g", isReliable: false, method: "fallback" };
  }
  const o = Math.max(s.speedMbps, a), l = ur(o, s);
  return ct(e, l, o, true);
}
function ur(e, t) {
  let n;
  return e < 2 ? n = 1 * 1024 * 1024 : e < 5 ? n = 2 * 1024 * 1024 : e < 10 ? n = 5 * 1024 * 1024 : e < 25 ? n = 10 * 1024 * 1024 : e < 50 ? n = 15 * 1024 * 1024 : e < 100 ? n = 20 * 1024 * 1024 : n = 25 * 1024 * 1024, t.isReliable || (n = Math.min(n, 5 * 1024 * 1024)), t.type === "cellular" && (n = Math.min(n, 5 * 1024 * 1024)), Math.max(Bt, Math.min(_t, n));
}
function ct(e, t, n, r) {
  const a = r ? Math.ceil(e / t) : 1, s = Lt(e, n);
  let o;
  return a <= 5 ? o = "Moderate chunking for balanced performance and reliability" : a <= 20 ? o = "Multi-chunk upload for large file with resumability" : o = "Extended chunking for very large file - consider stable connection", { chunkSize: t, shouldChunk: r, estimatedChunks: a, estimatedUploadTime: s, connectionSpeedMbps: n, recommendation: o };
}
function Lt(e, t) {
  const n = e * 8 / 1048576;
  return Math.ceil(n / t * 1.3);
}
const fr = "vaultbridge-uploads", mr = 1, ke = "upload-state";
let ye = null;
async function Ot() {
  return ye || new Promise((e, t) => {
    const n = indexedDB.open(fr, mr);
    n.onerror = () => {
      console.error("[ResumableUpload] Failed to open IndexedDB:", n.error), t(n.error);
    }, n.onsuccess = () => {
      ye = n.result, console.log("[ResumableUpload] IndexedDB initialized"), e(ye);
    }, n.onupgradeneeded = (r) => {
      const a = r.target.result;
      if (!a.objectStoreNames.contains(ke)) {
        const s = a.createObjectStore(ke, { keyPath: "uploadId" });
        s.createIndex("status", "status", { unique: false }), s.createIndex("startedAt", "startedAt", { unique: false }), s.createIndex("vaultId", "vaultId", { unique: false }), console.log("[ResumableUpload] Object store created");
      }
    };
  });
}
async function me(e = "readonly") {
  return (await Ot()).transaction(ke, e).objectStore(ke);
}
async function pr(e) {
  const t = crypto.randomUUID(), n = Date.now(), r = { uploadId: t, vaultId: e.vaultId, fileId: e.fileId, fileName: e.fileName, fileSize: e.fileSize, fileType: e.fileType, totalChunks: e.totalChunks, uploadedChunks: [], chunkSize: e.chunkSize, cryptoKeyExported: e.cryptoKeyExported, isCompressed: e.isCompressed, vaultConfig: e.vaultConfig, startedAt: n, lastUpdatedAt: n, status: "in_progress" }, a = await me("readwrite");
  return new Promise((s, o) => {
    const l = a.add(r);
    l.onsuccess = () => s(t), l.onerror = () => o(l.error);
  });
}
async function hr(e, t) {
  const n = await me("readwrite");
  return new Promise((r, a) => {
    const s = n.get(e);
    s.onsuccess = () => {
      const o = s.result;
      if (!o) {
        a(new Error("Upload session not found"));
        return;
      }
      o.uploadedChunks.includes(t) || (o.uploadedChunks.push(t), o.uploadedChunks.sort((c, p) => c - p)), o.lastUpdatedAt = Date.now(), o.uploadedChunks.length >= o.totalChunks && (o.status = "completed");
      const l = n.put(o);
      l.onsuccess = () => r(), l.onerror = () => a(l.error);
    }, s.onerror = () => a(s.error);
  });
}
async function vr(e) {
  const t = await me("readonly");
  return new Promise((n, r) => {
    const a = t.get(e);
    a.onsuccess = () => n(a.result || null), a.onerror = () => r(a.error);
  });
}
async function $e(e) {
  const t = await me("readwrite");
  return new Promise((n, r) => {
    const a = t.delete(e);
    a.onsuccess = () => n(), a.onerror = () => r(a.error);
  });
}
async function xr() {
  const e = await me("readonly");
  return new Promise((t, n) => {
    const r = e.getAll();
    r.onsuccess = () => {
      const a = r.result, s = Date.now(), o = 7 * 24 * 60 * 60 * 1e3, l = a.filter((c) => !(c.status === "completed" || s - c.startedAt > o)).map((c) => ({ uploadId: c.uploadId, fileName: c.fileName, progress: Math.round(c.uploadedChunks.length / c.totalChunks * 100), uploadedChunks: c.uploadedChunks.length, totalChunks: c.totalChunks, canResume: c.status === "in_progress" || c.status === "paused", startedAt: new Date(c.startedAt), lastUpdatedAt: new Date(c.lastUpdatedAt) }));
      t(l);
    }, r.onerror = () => n(r.error);
  });
}
async function gr() {
  const e = await me("readwrite");
  return new Promise((t, n) => {
    const r = e.getAll();
    r.onsuccess = async () => {
      const a = r.result, s = Date.now(), o = 7 * 24 * 60 * 60 * 1e3;
      let l = 0;
      for (const c of a) if (c.status === "completed" || s - c.startedAt > o) try {
        await $e(c.uploadId), l++;
      } catch {
        console.warn("[ResumableUpload] Failed to delete stale session:", c.uploadId);
      }
      console.log(`[ResumableUpload] Cleaned up ${l} stale sessions`), t(l);
    }, r.onerror = () => n(r.error);
  });
}
async function yr() {
  try {
    await Ot(), await gr();
    const e = await xr();
    return { pendingCount: e.length, pendingUploads: e };
  } catch (e) {
    return console.error("[ResumableUpload] Initialization failed:", e), { pendingCount: 0, pendingUploads: [] };
  }
}
const wr = ["text/", "application/json", "application/javascript", "application/x-javascript", "application/xml", "application/x-yaml", "image/svg+xml", "application/sql", "application/graphql", "application/ld+json"];
function Fr() {
  const [e, t] = j.useState([]), [n, r] = j.useState([24]), [a, s] = j.useState([5]), [o, l] = j.useState("idle"), [c, p] = j.useState("keys"), [d, f] = j.useState(0), [g, x] = j.useState(""), [z, b] = j.useState(false), [u, h] = j.useState([]), [, D] = tn(), { toast: S } = nn(), m = j.useRef(null), C = ln(), M = cn(), N = dn();
  j.useEffect(() => ((async () => {
    const { pendingUploads: A } = await yr();
    h(A);
  })(), () => {
  }), []);
  const y = (v, A = 20) => {
    if (v.length <= A) return v;
    const I = v.lastIndexOf(".");
    if (I !== -1) {
      const T = v.substring(I), F = v.substring(0, I);
      if (F.length > A - T.length - 3) return F.substring(0, A - T.length - 3) + "..." + T;
    }
    return v.substring(0, A - 3) + "...";
  }, w = (v) => wr.some((A) => v.type.startsWith(A)) || [".ts", ".tsx", ".js", ".jsx", ".json", ".txt", ".md", ".css", ".html"].some((A) => v.name.endsWith(A)), P = async (v) => {
    await $e(v), h((A) => A.filter((I) => I.uploadId !== v));
  }, R = async () => {
    if (e.length !== 0) {
      l("encrypting"), f(0), m.current = new AbortController();
      try {
        p("keys"), x("Generating military-grade AES-256 keys..."), await new Promise((k) => setTimeout(k, 400));
        const v = await un(), A = fn();
        x("Deriving PIN-protective wrapper...");
        const I = await mn(v, A.pin), T = await pn(v);
        f(10), p("metadata"), x("Analyzing files & encrypting metadata...");
        const F = e.map((k) => ({ name: k.name, type: k.type, size: k.size, fileId: hn(), lastModified: k.lastModified })), E = await vn(F, v), U = [], $ = [];
        for (let k = 0; k < e.length; k++) {
          const _ = e[k];
          x(`Optimizing chunk size for ${y(_.name)}...`);
          const G = await dr(_.size);
          $.push(G);
          const Y = w(_) && _.size < Kt;
          U.push({ fileId: F[k].fileId, chunks: G.estimatedChunks, size: _.size, isCompressed: Y, originalSize: _.size });
        }
        f(20), x("Securing vault location...");
        const Q = await C.mutateAsync({ expiresIn: n[0], maxDownloads: a[0], encryptedMetadata: E, lookupId: A.lookupId, wrappedKey: I, files: U });
        x("Initializing resilient upload sessions...");
        const W = [];
        for (let k = 0; k < e.length; k++) {
          const _ = e[k], G = await pr({ vaultId: Q.id, fileId: U[k].fileId, fileName: _.name, fileSize: _.size, fileType: _.type, totalChunks: U[k].chunks, chunkSize: $[k].chunkSize, cryptoKeyExported: T, isCompressed: U[k].isCompressed, vaultConfig: { expiresIn: n[0], maxDownloads: a[0], lookupId: A.lookupId } });
          W.push(G);
        }
        f(30), l("uploading"), p("transfer");
        const ee = U.reduce((k, _) => k + _.chunks, 0);
        let X = 0;
        const V = new Worker(new URL("/assets/encryption.worker-UhEl2skF.js", import.meta.url), { type: "module" }), K = (k, _, G) => new Promise((Y, te) => {
          const ne = Math.random(), oe = (Z) => {
            Z.data.id === ne && (V.removeEventListener("message", oe), Z.data.type === "error" ? te(Z.data.error) : Y(Z.data));
          };
          V.addEventListener("message", oe), V.postMessage({ type: G, data: k, key: _, id: ne }, [k]);
        });
        for (let k = 0; k < e.length; k++) {
          const _ = e[k], G = U[k].fileId, Y = $[k], te = W[k], ne = y(_.name), oe = U[k].isCompressed, Z = await vr(te), pe = new Set((Z == null ? void 0 : Z.uploadedChunks) || []);
          for (let re = 0; re < Y.estimatedChunks; re++) {
            if (m.current.signal.aborted) throw new Error("Upload cancelled");
            if (pe.has(re)) {
              X++;
              const Yt = 30 + X / ee * 65;
              f(Yt);
              continue;
            }
            const Je = re * Y.chunkSize, $t = Math.min(Je + Y.chunkSize, _.size), Vt = await _.slice(Je, $t).arrayBuffer(), Qe = Y.estimatedChunks > 1 ? ` (part ${re + 1}/${Y.estimatedChunks})` : "";
            x(`Encrypting ${ne}${Qe}...`);
            const Ht = oe && Y.estimatedChunks === 1 ? "compress_and_encrypt" : "encrypt", { iv: De, encryptedData: et } = await K(Vt, v, Ht), xe = new Uint8Array(De.byteLength + et.byteLength);
            xe.set(De, 0), xe.set(new Uint8Array(et), De.byteLength), x(`Sending ${ne}${Qe}...`);
            const { uploadUrl: qt, storagePath: Wt } = await M.mutateAsync({ vaultId: Q.id, fileId: G, chunkIndex: re, size: xe.byteLength });
            await fetch(qt, { method: "PUT", body: xe }), await N.mutateAsync({ vaultId: Q.id, fileId: G, chunkIndex: re, storagePath: Wt }), await hr(te, re), X++;
            const Gt = 30 + X / ee * 65;
            f(Gt);
          }
          await $e(te);
        }
        V.terminate(), p("done"), f(100), x("Finalizing secure vault..."), l("success"), setTimeout(() => {
          D(`/success/${Q.id}#code=${A.fullCode}`);
        }, 800);
      } catch (v) {
        console.error(v), l("idle"), v instanceof Error && v.message === "Upload cancelled" ? S({ title: "Upload Cancelled", variant: "default" }) : S({ variant: "destructive", title: "Upload Failed", description: v instanceof Error ? v.message : "An error occurred" });
      }
    }
  };
  return i.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [i.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), i.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), i.jsx("header", { className: "relative z-10 px-6 py-6 border-b border-white/5", children: i.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [i.jsx(tt, { href: "/", children: i.jsxs(H.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group", children: [i.jsx("div", { className: "w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors", children: i.jsx(Ee, { className: "w-5 h-5 text-amber-500" }) }), i.jsxs("h1", { className: "text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors", children: ["VAULT", i.jsx("span", { className: "text-amber-500", children: "BRIDGE" })] })] }) }), i.jsx(tt, { href: "/", children: i.jsxs(Ie, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [i.jsx(xn, { className: "w-4 h-4" }), "Back"] }) })] }) }), i.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 py-12", children: [u.length > 0 && o === "idle" && i.jsx(H.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "mb-8 p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl backdrop-blur-md", children: i.jsxs("div", { className: "flex items-start gap-4", children: [i.jsx("div", { className: "p-2 bg-amber-500/20 rounded-lg", children: i.jsx(gn, { className: "w-5 h-5 text-amber-500" }) }), i.jsxs("div", { className: "flex-1", children: [i.jsx("h3", { className: "font-bold text-sm mb-1", children: "Interrupted Uploads Detected" }), i.jsxs("p", { className: "text-xs text-zinc-400 mb-3", children: ["We found ", u.length, " incomplete upload sessions from a previous visit."] }), i.jsx("div", { className: "space-y-2", children: u.map((v) => i.jsxs("div", { className: "flex items-center justify-between text-xs bg-zinc-950 p-2 rounded border border-zinc-800", children: [i.jsx("span", { className: "truncate max-w-[200px]", children: v.fileName }), i.jsxs("div", { className: "flex items-center gap-3", children: [i.jsxs("span", { className: "text-zinc-500", children: [v.progress, "%"] }), i.jsx("button", { onClick: () => P(v.uploadId), className: "text-zinc-500 hover:text-red-400", children: i.jsx(ut, { className: "w-3 h-3" }) })] })] }, v.uploadId)) })] })] }) }), i.jsxs(H.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-10", children: [i.jsx("h2", { className: "text-3xl font-bold mb-3", children: "Secure Upload" }), i.jsx("p", { className: "text-zinc-400", children: "Create an encrypted vault for your files." })] }), i.jsxs(H.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: `bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl ${z ? "ring-2 ring-amber-500 bg-amber-500/5" : ""}`, children: [i.jsx(ft, { children: o !== "idle" && i.jsxs(H.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [i.jsx(_n, { stage: o, step: c, progress: d, statusText: g }), o === "uploading" && i.jsx(Ie, { variant: "outline", size: "sm", onClick: () => {
    var _a;
    return (_a = m.current) == null ? void 0 : _a.abort();
  }, className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), i.jsxs("div", { className: "space-y-6", children: [i.jsx(Bn, { onFilesSelected: (v) => {
    v.some((I) => I.size > 2147483648) && S({ variant: "destructive", title: "Large File Warning", description: "Files over 2GB may take longer to encrypt." }), t(v);
  }, disabled: o !== "idle", onDragStateChange: b }), i.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(yn, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(Ee, { className: "w-3 h-3 text-amber-500" }), "Adaptive Chunking"] })] })] }), i.jsxs("div", { className: "mt-8 space-y-8 border-t border-white/5 pt-8", children: [i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [i.jsxs("div", { className: "space-y-4", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [i.jsx(wn, { className: "w-4 h-4 text-amber-500" }), "Expires In"] }), i.jsxs("span", { className: "text-sm font-mono text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded", children: [n[0], "h"] })] }), i.jsx(Oe, { value: n, onValueChange: r, min: 1, max: 168, step: 1, className: "py-2" })] }), i.jsxs("div", { className: "space-y-4", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [i.jsx(Ee, { className: "w-4 h-4 text-emerald-500" }), "Download Limit"] }), i.jsx("span", { className: "text-sm font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded", children: a[0] === 1 ? "BURN ON READ" : `${a[0]}x` })] }), i.jsx(Oe, { value: a, onValueChange: s, min: 1, max: 100, step: 1, disabled: a[0] === 1, className: a[0] === 1 ? "opacity-30" : "" }), i.jsx("div", { onClick: () => s(a[0] === 1 ? [5] : [1]), className: `text-xs cursor-pointer select-none transition-colors text-center py-2 rounded border ${a[0] === 1 ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white"}`, children: a[0] === 1 ? "\u{1F525} Burn-on-read Active (Auto-delete after 1 view)" : "Click to enable Burn-on-read" })] })] }), i.jsx(Ie, { onClick: R, disabled: e.length === 0 || o !== "idle", className: "w-full h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99]", children: o !== "idle" ? "Processing..." : i.jsxs(i.Fragment, { children: [i.jsx(mt, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] }) })] })] }), i.jsx(H.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-8 text-center px-4", children: i.jsx("p", { className: "text-xs text-zinc-500", children: "Zero-Knowledge Architecture: Encryption happens entirely in your browser. We never do not see your files, keys, or data." }) })] })] });
}
export {
  Fr as default
};
