import { c as Ke, r as j, j as i, b as nt, X as Et, d as Ct, e as At, f as Pt, g as re, P as ge, h as de, i as It, a as Tt, k as Rt, u as Ft, L as Ye, B as ze } from "./index-BEXpglIW.js";
import { A as at } from "./index-B9yx715H.js";
import { m as _ } from "./proxy-Lv5dKC3a.js";
import { F as Ut } from "./file-BCQbN_KY.js";
import { K as Bt } from "./key-BEe3b3Uw.js";
import { F as Kt } from "./file-text-B6h2_QQS.js";
import { U as Lt } from "./upload-DocmHL3r.js";
import { L as De } from "./lock-CPRABK7_.js";
import { u as $t, a as Vt, b as _t } from "./use-vaults-BzNhWpsb.js";
import { g as Ot, a as Ht, w as Gt, b as Yt, e as Zt, c as Xt } from "./crypto--QUY4fPy.js";
import { Z as ke } from "./zap-bT4MCgSC.js";
import { A as qt } from "./arrow-left-BTQVjDo_.js";
import { T as Wt } from "./triangle-alert-Ca9Rqc-C.js";
import { S as Jt } from "./shield-D3x6C8LK.js";
import { T as Qt } from "./timer-BojKUzfA.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ee = Ke("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const er = Ke("CloudUpload", [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tr = Ke("FolderArchive", [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]]);
var Ze = {}, rr = function(e, t, r, n, s) {
  var a = new Worker(Ze[t] || (Ze[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return a.onmessage = function(o) {
    var l = o.data, c = l.$e$;
    if (c) {
      var h = new Error(c[0]);
      h.code = c[1], h.stack = c[2], s(h, null);
    } else s(null, l);
  }, a.postMessage(r, n), a;
}, $ = Uint8Array, H = Uint16Array, ye = Int32Array, we = new $([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), be = new $([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Ce = new $([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), st = function(e, t) {
  for (var r = new H(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
  for (var s = new ye(r[30]), n = 1; n < 30; ++n) for (var a = r[n]; a < r[n + 1]; ++a) s[a] = a - r[n] << 5 | n;
  return { b: r, r: s };
}, it = st(we, 2), nr = it.b, ve = it.r;
nr[28] = 258, ve[258] = 28;
var ar = st(be, 0), Ae = ar.r, xe = new H(32768);
for (var U = 0; U < 32768; ++U) {
  var W = (U & 43690) >> 1 | (U & 21845) << 1;
  W = (W & 52428) >> 2 | (W & 13107) << 2, W = (W & 61680) >> 4 | (W & 3855) << 4, xe[U] = ((W & 65280) >> 8 | (W & 255) << 8) >> 1;
}
var ne = function(e, t, r) {
  for (var n = e.length, s = 0, a = new H(t); s < n; ++s) e[s] && ++a[e[s] - 1];
  var o = new H(t);
  for (s = 1; s < t; ++s) o[s] = o[s - 1] + a[s - 1] << 1;
  var l;
  if (r) {
    l = new H(1 << t);
    var c = 15 - t;
    for (s = 0; s < n; ++s) if (e[s]) for (var h = s << 4 | e[s], d = t - e[s], m = o[e[s] - 1]++ << d, x = m | (1 << d) - 1; m <= x; ++m) l[xe[m] >> c] = h;
  } else for (l = new H(n), s = 0; s < n; ++s) e[s] && (l[s] = xe[o[e[s] - 1]++] >> 15 - e[s]);
  return l;
}, J = new $(288);
for (var U = 0; U < 144; ++U) J[U] = 8;
for (var U = 144; U < 256; ++U) J[U] = 9;
for (var U = 256; U < 280; ++U) J[U] = 7;
for (var U = 280; U < 288; ++U) J[U] = 8;
var ce = new $(32);
for (var U = 0; U < 32; ++U) ce[U] = 5;
var ot = ne(J, 9, 0), lt = ne(ce, 5, 0), Le = function(e) {
  return (e + 7) / 8 | 0;
}, $e = function(e, t, r) {
  return (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length), new $(e.subarray(t, r));
}, sr = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], ae = function(e, t, r) {
  var n = new Error(t || sr[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, ae), !r) throw n;
  return n;
}, Y = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, Q = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8, e[n + 2] |= r >> 16;
}, he = function(e, t) {
  for (var r = [], n = 0; n < e.length; ++n) e[n] && r.push({ s: n, f: e[n] });
  var s = r.length, a = r.slice();
  if (!s) return { t: _e, l: 0 };
  if (s == 1) {
    var o = new $(r[0].s + 1);
    return o[r[0].s] = 1, { t: o, l: 1 };
  }
  r.sort(function(N, k) {
    return N.f - k.f;
  }), r.push({ s: -1, f: 25001 });
  var l = r[0], c = r[1], h = 0, d = 1, m = 2;
  for (r[0] = { s: -1, f: l.f + c.f, l, r: c }; d != s - 1; ) l = r[r[h].f < r[m].f ? h++ : m++], c = r[h != d && r[h].f < r[m].f ? h++ : m++], r[d++] = { s: -1, f: l.f + c.f, l, r: c };
  for (var x = a[0].s, n = 1; n < s; ++n) a[n].s > x && (x = a[n].s);
  var p = new H(x + 1), D = pe(r[d - 1], p, 0);
  if (D > t) {
    var n = 0, w = 0, u = D - t, v = 1 << u;
    for (a.sort(function(k, M) {
      return p[M.s] - p[k.s] || k.f - M.f;
    }); n < s; ++n) {
      var E = a[n].s;
      if (p[E] > t) w += v - (1 << D - p[E]), p[E] = t;
      else break;
    }
    for (w >>= u; w > 0; ) {
      var b = a[n].s;
      p[b] < t ? w -= 1 << t - p[b]++ - 1 : ++n;
    }
    for (; n >= 0 && w; --n) {
      var f = a[n].s;
      p[f] == t && (--p[f], ++w);
    }
    D = t;
  }
  return { t: new $(p), l: D };
}, pe = function(e, t, r) {
  return e.s == -1 ? Math.max(pe(e.l, t, r + 1), pe(e.r, t, r + 1)) : t[e.s] = r;
}, Pe = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var r = new H(++t), n = 0, s = e[0], a = 1, o = function(c) {
    r[n++] = c;
  }, l = 1; l <= t; ++l) if (e[l] == s && l != t) ++a;
  else {
    if (!s && a > 2) {
      for (; a > 138; a -= 138) o(32754);
      a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
    } else if (a > 3) {
      for (o(s), --a; a > 6; a -= 6) o(8304);
      a > 2 && (o(a - 3 << 5 | 8208), a = 0);
    }
    for (; a--; ) o(s);
    a = 1, s = e[l];
  }
  return { c: r.subarray(0, n), n: t };
}, ee = function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n) r += e[n] * t[n];
  return r;
}, Ve = function(e, t, r) {
  var n = r.length, s = Le(t + 2);
  e[s] = n & 255, e[s + 1] = n >> 8, e[s + 2] = e[s] ^ 255, e[s + 3] = e[s + 1] ^ 255;
  for (var a = 0; a < n; ++a) e[s + a + 4] = r[a];
  return (s + 4 + n) * 8;
}, Ie = function(e, t, r, n, s, a, o, l, c, h, d) {
  Y(t, d++, r), ++s[256];
  for (var m = he(s, 15), x = m.t, p = m.l, D = he(a, 15), w = D.t, u = D.l, v = Pe(x), E = v.c, b = v.n, f = Pe(w), N = f.c, k = f.n, M = new H(19), g = 0; g < E.length; ++g) ++M[E[g] & 31];
  for (var g = 0; g < N.length; ++g) ++M[N[g] & 31];
  for (var y = he(M, 7), I = y.t, T = y.l, S = 19; S > 4 && !I[Ce[S - 1]]; --S) ;
  var z = h + 5 << 3, A = ee(s, J) + ee(a, ce) + o, R = ee(s, x) + ee(a, w) + o + 14 + 3 * S + ee(M, I) + 2 * M[16] + 3 * M[17] + 7 * M[18];
  if (c >= 0 && z <= A && z <= R) return Ve(t, d, e.subarray(c, c + h));
  var F, C, B, V;
  if (Y(t, d, 1 + (R < A)), d += 2, R < A) {
    F = ne(x, p, 0), C = x, B = ne(w, u, 0), V = w;
    var ie = ne(I, T, 0);
    Y(t, d, b - 257), Y(t, d + 5, k - 1), Y(t, d + 10, S - 4), d += 14;
    for (var g = 0; g < S; ++g) Y(t, d + 3 * g, I[Ce[g]]);
    d += 3 * S;
    for (var P = [E, N], Z = 0; Z < 2; ++Z) for (var X = P[Z], g = 0; g < X.length; ++g) {
      var O = X[g] & 31;
      Y(t, d, ie[O]), d += I[O], O > 15 && (Y(t, d, X[g] >> 5 & 127), d += X[g] >> 12);
    }
  } else F = ot, C = J, B = lt, V = ce;
  for (var g = 0; g < l; ++g) {
    var K = n[g];
    if (K > 255) {
      var O = K >> 18 & 31;
      Q(t, d, F[O + 257]), d += C[O + 257], O > 7 && (Y(t, d, K >> 23 & 31), d += we[O]);
      var G = K & 31;
      Q(t, d, B[G]), d += V[G], G > 3 && (Q(t, d, K >> 5 & 8191), d += be[G]);
    } else Q(t, d, F[K]), d += C[K];
  }
  return Q(t, d, F[256]), d + C[256];
}, ct = new ye([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), _e = new $(0), dt = function(e, t, r, n, s, a) {
  var o = a.z || e.length, l = new $(n + o + 5 * (1 + Math.ceil(o / 7e3)) + s), c = l.subarray(n, l.length - s), h = a.l, d = (a.r || 0) & 7;
  if (t) {
    d && (c[0] = a.r >> 3);
    for (var m = ct[t - 1], x = m >> 13, p = m & 8191, D = (1 << r) - 1, w = a.p || new H(32768), u = a.h || new H(D + 1), v = Math.ceil(r / 3), E = 2 * v, b = function(Me) {
      return (e[Me] ^ e[Me + 1] << v ^ e[Me + 2] << E) & D;
    }, f = new ye(25e3), N = new H(288), k = new H(32), M = 0, g = 0, y = a.i || 0, I = 0, T = a.w || 0, S = 0; y + 2 < o; ++y) {
      var z = b(y), A = y & 32767, R = u[z];
      if (w[A] = R, u[z] = A, T <= y) {
        var F = o - y;
        if ((M > 7e3 || I > 24576) && (F > 423 || !h)) {
          d = Ie(e, c, 0, f, N, k, g, I, S, y - S, d), I = M = g = 0, S = y;
          for (var C = 0; C < 286; ++C) N[C] = 0;
          for (var C = 0; C < 30; ++C) k[C] = 0;
        }
        var B = 2, V = 0, ie = p, P = A - R & 32767;
        if (F > 2 && z == b(y - P)) for (var Z = Math.min(x, F) - 1, X = Math.min(32767, y), O = Math.min(258, F); P <= X && --ie && A != R; ) {
          if (e[y + B] == e[y + B - P]) {
            for (var K = 0; K < O && e[y + K] == e[y + K - P]; ++K) ;
            if (K > B) {
              if (B = K, V = P, K > Z) break;
              for (var G = Math.min(P, K - 2), oe = 0, C = 0; C < G; ++C) {
                var q = y - P + C & 32767, Se = w[q], ue = q - Se & 32767;
                ue > oe && (oe = ue, R = q);
              }
            }
          }
          A = R, R = w[A], P += A - R & 32767;
        }
        if (V) {
          f[I++] = 268435456 | ve[B] << 18 | Ae[V];
          var le = ve[B] & 31, fe = Ae[V] & 31;
          g += we[le] + be[fe], ++N[257 + le], ++k[fe], T = y + B, ++M;
        } else f[I++] = e[y], ++N[e[y]];
      }
    }
    for (y = Math.max(y, T); y < o; ++y) f[I++] = e[y], ++N[e[y]];
    d = Ie(e, c, h, f, N, k, g, I, S, y - S, d), h || (a.r = d & 7 | c[d / 8 | 0] << 3, d -= 7, a.h = u, a.p = w, a.i = y, a.w = T);
  } else {
    for (var y = a.w || 0; y < o + h; y += 65535) {
      var Ne = y + 65535;
      Ne >= o && (c[d / 8 | 0] = h, Ne = o), d = Ve(c, d + 1, e.subarray(y, Ne));
    }
    a.i = o;
  }
  return $e(l, 0, n + Le(d) + s);
}, ir = function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var r = t, n = 9; --n; ) r = (r & 1 && -306674912) ^ r >>> 1;
    e[t] = r;
  }
  return e;
}(), or = function() {
  var e = -1;
  return { p: function(t) {
    for (var r = e, n = 0; n < t.length; ++n) r = ir[r & 255 ^ t[n]] ^ r >>> 8;
    e = r;
  }, d: function() {
    return ~e;
  } };
}, ut = function(e, t, r, n, s) {
  if (!s && (s = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), o = new $(a.length + e.length);
    o.set(a), o.set(e, a.length), e = o, s.w = a.length;
  }
  return dt(e, t.level == null ? 6 : t.level, t.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, s);
}, Oe = function(e, t) {
  var r = {};
  for (var n in e) r[n] = e[n];
  for (var n in t) r[n] = t[n];
  return r;
}, Xe = function(e, t, r) {
  for (var n = e(), s = e.toString(), a = s.slice(s.indexOf("[") + 1, s.lastIndexOf("]")).replace(/\s+/g, "").split(","), o = 0; o < n.length; ++o) {
    var l = n[o], c = a[o];
    if (typeof l == "function") {
      t += ";" + c + "=";
      var h = l.toString();
      if (l.prototype) if (h.indexOf("[native code]") != -1) {
        var d = h.indexOf(" ", 8) + 1;
        t += h.slice(d, h.indexOf("(", d));
      } else {
        t += h;
        for (var m in l.prototype) t += ";" + c + ".prototype." + m + "=" + l.prototype[m].toString();
      }
      else t += h;
    } else r[c] = l;
  }
  return t;
}, me = [], lr = function(e) {
  var t = [];
  for (var r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
  return t;
}, cr = function(e, t, r, n) {
  if (!me[r]) {
    for (var s = "", a = {}, o = e.length - 1, l = 0; l < o; ++l) s = Xe(e[l], s, a);
    me[r] = { c: Xe(e[o], s, a), e: a };
  }
  var c = Oe({}, me[r].e);
  return rr(me[r].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", r, c, lr(c), n);
}, dr = function() {
  return [$, H, ye, we, be, Ce, ve, Ae, ot, J, lt, ce, xe, ct, _e, ne, Y, Q, he, pe, Pe, ee, Ve, Ie, Le, $e, dt, ut, He, ft];
}, ft = function(e) {
  return postMessage(e, [e.buffer]);
}, ur = function(e, t, r, n, s, a) {
  var o = cr(r, n, s, function(l, c) {
    o.terminate(), a(l, c);
  });
  return o.postMessage([e, t], t.consume ? [e.buffer] : []), function() {
    o.terminate();
  };
}, L = function(e, t, r) {
  for (; r; ++t) e[t] = r, r >>>= 8;
};
function fr(e, t, r) {
  return r || (r = t, t = {}), typeof r != "function" && ae(7), ur(e, t, [dr], function(n) {
    return ft(He(n.data[0], n.data[1]));
  }, 0, r);
}
function He(e, t) {
  return ut(e, t || {}, 0, 0);
}
var mt = function(e, t, r, n) {
  for (var s in e) {
    var a = e[s], o = t + s, l = n;
    Array.isArray(a) && (l = Oe(n, a[1]), a = a[0]), a instanceof $ ? r[o] = [a, l] : (r[o += "/"] = [new $(0), l], mt(a, o, r, n));
  }
}, qe = typeof TextEncoder < "u" && new TextEncoder(), mr = typeof TextDecoder < "u" && new TextDecoder(), hr = 0;
try {
  mr.decode(_e, { stream: true }), hr = 1;
} catch {
}
function We(e, t) {
  var r;
  if (qe) return qe.encode(e);
  for (var n = e.length, s = new $(e.length + (e.length >> 1)), a = 0, o = function(h) {
    s[a++] = h;
  }, r = 0; r < n; ++r) {
    if (a + 5 > s.length) {
      var l = new $(a + 8 + (n - r << 1));
      l.set(s), s = l;
    }
    var c = e.charCodeAt(r);
    c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1047552) | e.charCodeAt(++r) & 1023, o(240 | c >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | c & 63)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | c & 63));
  }
  return $e(s, 0, a);
}
var Te = function(e) {
  var t = 0;
  if (e) for (var r in e) {
    var n = e[r].length;
    n > 65535 && ae(9), t += n + 4;
  }
  return t;
}, Je = function(e, t, r, n, s, a, o, l) {
  var c = n.length, h = r.extra, d = l && l.length, m = Te(h);
  L(e, t, o != null ? 33639248 : 67324752), t += 4, o != null && (e[t++] = 20, e[t++] = r.os), e[t] = 20, t += 2, e[t++] = r.flag << 1 | (a < 0 && 8), e[t++] = s && 8, e[t++] = r.compression & 255, e[t++] = r.compression >> 8;
  var x = new Date(r.mtime == null ? Date.now() : r.mtime), p = x.getFullYear() - 1980;
  if ((p < 0 || p > 119) && ae(10), L(e, t, p << 25 | x.getMonth() + 1 << 21 | x.getDate() << 16 | x.getHours() << 11 | x.getMinutes() << 5 | x.getSeconds() >> 1), t += 4, a != -1 && (L(e, t, r.crc), L(e, t + 4, a < 0 ? -a - 2 : a), L(e, t + 8, r.size)), L(e, t + 12, c), L(e, t + 14, m), t += 16, o != null && (L(e, t, d), L(e, t + 6, r.attrs), L(e, t + 10, o), t += 14), e.set(n, t), t += c, m) for (var D in h) {
    var w = h[D], u = w.length;
    L(e, t, +D), L(e, t + 2, u), e.set(w, t + 4), t += 4 + u;
  }
  return d && (e.set(l, t), t += d), t;
}, vr = function(e, t, r, n, s) {
  L(e, t, 101010256), L(e, t + 8, r), L(e, t + 10, r), L(e, t + 12, n), L(e, t + 16, s);
};
function xr(e, t, r) {
  r || (r = t, t = {}), typeof r != "function" && ae(7);
  var n = {};
  mt(e, "", n, t);
  var s = Object.keys(n), a = s.length, o = 0, l = 0, c = a, h = new Array(a), d = [], m = function() {
    for (var u = 0; u < d.length; ++u) d[u]();
  }, x = function(u, v) {
    Qe(function() {
      r(u, v);
    });
  };
  Qe(function() {
    x = r;
  });
  var p = function() {
    var u = new $(l + 22), v = o, E = l - o;
    l = 0;
    for (var b = 0; b < c; ++b) {
      var f = h[b];
      try {
        var N = f.c.length;
        Je(u, l, f, f.f, f.u, N);
        var k = 30 + f.f.length + Te(f.extra), M = l + k;
        u.set(f.c, M), Je(u, o, f, f.f, f.u, N, l, f.m), o += 16 + k + (f.m ? f.m.length : 0), l = M + N;
      } catch (g) {
        return x(g, null);
      }
    }
    vr(u, o, h.length, E, v), x(null, u);
  };
  a || p();
  for (var D = function(u) {
    var v = s[u], E = n[v], b = E[0], f = E[1], N = or(), k = b.length;
    N.p(b);
    var M = We(v), g = M.length, y = f.comment, I = y && We(y), T = I && I.length, S = Te(f.extra), z = f.level == 0 ? 0 : 8, A = function(R, F) {
      if (R) m(), x(R, null);
      else {
        var C = F.length;
        h[u] = Oe(f, { size: k, crc: N.d(), c: F, f: M, m: I, u: g != v.length || I && y.length != T, compression: z }), o += 30 + g + S + C, l += 76 + 2 * (g + S) + (T || 0) + C, --a || p();
      }
    };
    if (g > 65535 && A(ae(11, 0, 1), null), !z) A(null, b);
    else if (k < 16e4) try {
      A(null, He(b, f));
    } catch (R) {
      A(R, null);
    }
    else d.push(fr(b, f, A));
  }, w = 0; w < c; ++w) D(w);
  return m;
}
var Qe = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
  e();
};
function pr({ onFilesSelected: e, disabled: t, onDragStateChange: r }) {
  const [n, s] = j.useState(false), [a, o] = j.useState([]);
  j.useEffect(() => {
    r == null ? void 0 : r(n);
  }, [n, r]);
  const l = (u) => {
    u.preventDefault(), t || s(true);
  }, c = () => s(false), [h, d] = j.useState(false), m = (u) => new Promise((v) => {
    if (u.isFile) u.file((E) => {
      v({ [u.fullPath]: E });
    });
    else if (u.isDirectory) {
      const E = u.createReader();
      (() => {
        E.readEntries(async (f) => {
          if (f.length === 0) {
            v({});
            return;
          }
          const N = f.map((g) => m(g)), M = (await Promise.all(N)).reduce((g, y) => ({ ...g, ...y }), {});
          v(M);
        });
      })();
    } else v({});
  }), x = async (u) => {
    if (u.preventDefault(), s(false), t) return;
    const v = u.dataTransfer.items;
    if (!v || v.length === 0) return;
    let E = false;
    const b = [];
    for (let f = 0; f < v.length; f++) {
      const N = v[f].webkitGetAsEntry();
      N && (b.push(N), N.isDirectory && (E = true));
    }
    if (E) {
      d(true);
      try {
        const f = {};
        for (const k of b) {
          const M = await m(k);
          Object.assign(f, M);
        }
        const N = {};
        for (const [k, M] of Object.entries(f)) {
          const g = k.startsWith("/") ? k.slice(1) : k, y = new Uint8Array(await M.arrayBuffer());
          N[g] = y;
        }
        xr(N, { level: 6 }, (k, M) => {
          if (k) {
            console.error("Zipping failed", k), d(false);
            return;
          }
          const g = new File([M], "archive.zip", { type: "application/zip" });
          o([g]), e([g]), d(false);
        });
      } catch (f) {
        console.error("Folder scan failed", f), d(false);
      }
    } else if (u.dataTransfer.files && u.dataTransfer.files.length > 0) {
      const f = Array.from(u.dataTransfer.files);
      o(f), e(f);
    }
  }, p = (u) => {
    if (u.target.files && u.target.files.length > 0) {
      const v = Array.from(u.target.files);
      o(v), e(v);
    }
  }, D = (u) => {
    const v = a.filter((E, b) => b !== u);
    o(v), e(v);
  }, w = a.reduce((u, v) => u + v.size, 0);
  return i.jsxs("div", { className: "w-full space-y-4", children: [i.jsxs("div", { onDragOver: l, onDragLeave: c, onDrop: x, className: `
          relative group cursor-pointer
          border-2 border-dashed rounded-xl p-10
          transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center
          ${n ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]" : "border-border hover:border-primary/50 hover:bg-secondary/30"}
          ${t ? "opacity-50 cursor-not-allowed" : ""}
        `, children: [i.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed", onChange: p, disabled: t }), i.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: h ? i.jsx(nt, { className: "w-8 h-8 text-primary animate-spin" }) : n ? i.jsx(tr, { className: "w-8 h-8 text-primary" }) : i.jsx(er, { className: "w-8 h-8 text-muted-foreground" }) }), i.jsx("h3", { className: "text-lg font-semibold mb-1", children: n ? "Drop folder or files" : h ? "Zipping..." : "Drag & drop files or folders here" }), i.jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse from your device" }), i.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-mono", children: "Max file size: 500 MB" })] }), i.jsx(at, { children: a.length > 0 && i.jsxs(_.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-2", children: [i.jsxs("div", { className: "flex justify-between items-center text-xs uppercase tracking-wider font-mono text-muted-foreground mb-2", children: [i.jsxs("span", { children: ["Selected Files (", a.length, ")"] }), i.jsxs("span", { children: [(w / (1024 * 1024)).toFixed(2), " MB Total"] })] }), a.map((u, v) => i.jsxs(_.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border group", children: [i.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [i.jsx("div", { className: "p-2 bg-background rounded-md", children: i.jsx(Ut, { className: "w-4 h-4 text-primary" }) }), i.jsxs("div", { className: "truncate", children: [i.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: u.name }), i.jsxs("p", { className: "text-xs text-muted-foreground", children: [(u.size / 1024).toFixed(1), " KB"] })] })] }), !t && i.jsx("button", { onClick: () => D(v), className: "p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors", children: i.jsx(Et, { className: "w-4 h-4" }) })] }, `${u.name}-${v}`))] }) })] });
}
const et = [{ id: "keys", label: "Generating Keys", icon: Bt }, { id: "metadata", label: "Encrypting Metadata", icon: Kt }, { id: "transfer", label: "Encrypting & Uploading", icon: Lt }, { id: "done", label: "Complete", icon: Ee }];
function gr({ stage: e, step: t, progress: r, statusText: n }) {
  const s = et.findIndex((a) => a.id === t);
  return i.jsxs(_.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-auto text-center px-4", children: [i.jsxs(_.div, { animate: { rotate: e === "encrypting" ? [0, 10, -10, 0] : 0, scale: e === "success" ? [1, 1.2, 1] : 1 }, transition: { duration: 0.5, repeat: e === "encrypting" ? 1 / 0 : 0, repeatDelay: 1 }, className: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative", children: [i.jsx("div", { className: `w-full h-full rounded-2xl flex items-center justify-center ${e === "success" ? "bg-primary/20 border-2 border-primary" : "bg-zinc-800 border border-zinc-700"}`, children: e === "success" ? i.jsx(Ee, { className: "w-8 h-8 md:w-10 md:h-10 text-primary" }) : i.jsx(De, { className: "w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" }) }), e !== "success" && i.jsx(i.Fragment, { children: [0, 1, 2].map((a) => i.jsx(_.div, { className: "absolute w-2 h-2 bg-primary rounded-full", animate: { x: [0, 40, 0, -40, 0], y: [-40, 0, 40, 0, -40], opacity: [0.3, 1, 0.3] }, transition: { duration: 3, repeat: 1 / 0, delay: a * 1, ease: "easeInOut" }, style: { top: "50%", left: "50%", marginLeft: -4, marginTop: -4 } }, a)) })] }), i.jsx(_.h3, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-lg md:text-xl font-bold mb-2 font-mono break-words line-clamp-2 min-h-[3.5rem] flex items-center justify-center", children: n }, n), i.jsx("div", { className: "w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6", children: i.jsx(_.div, { initial: { width: 0 }, animate: { width: `${r}%` }, transition: { duration: 0.3, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full", style: { backgroundSize: "200% 100%", animation: "shimmer 2s linear infinite" } }) }), i.jsxs("div", { className: "text-3xl md:text-4xl font-mono font-bold text-primary mb-8", children: [Math.round(r), "%"] }), i.jsx("div", { className: "space-y-2 text-left bg-zinc-900/50 p-4 rounded-xl", children: et.map((a, o) => {
    const l = a.id === t, c = o < s, h = o > s, d = a.icon;
    return i.jsxs(_.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: o * 0.1 }, className: `progress-step ${l ? "active" : ""} ${c ? "completed" : ""} ${h ? "pending" : ""}`, children: [i.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${c ? "bg-primary/20" : l ? "bg-primary/10" : "bg-zinc-800"}`, children: c ? i.jsx(Ee, { className: "w-4 h-4 text-primary" }) : l ? i.jsx(nt, { className: "w-4 h-4 text-primary animate-spin" }) : i.jsx(d, { className: "w-3 h-3" }) }), i.jsx("span", { className: "text-xs md:text-sm font-mono truncate", children: a.label })] }, a.id);
  }) }), i.jsx("div", { className: "mt-8 font-mono text-[10px] text-primary/30 overflow-hidden", children: i.jsx(_.div, { animate: { y: [-20, 0] }, transition: { duration: 2, repeat: 1 / 0, ease: "linear" }, children: Array.from({ length: 3 }, (a, o) => i.jsx("div", { className: "opacity-50", children: Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join("") }, o)) }) }), i.jsx("style", { children: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      ` })] });
}
function ht(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var yr = j.createContext(void 0);
function wr(e) {
  const t = j.useContext(yr);
  return e || t || "ltr";
}
function br(e) {
  const t = j.useRef({ value: e, previous: e });
  return j.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var vt = ["PageUp", "PageDown"], xt = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], pt = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, se = "Slider", [Re, jr, Sr] = Pt(se), [gt] = At(se, [Sr]), [Nr, je] = gt(se), yt = j.forwardRef((e, t) => {
  const { name: r, min: n = 0, max: s = 100, step: a = 1, orientation: o = "horizontal", disabled: l = false, minStepsBetweenThumbs: c = 0, defaultValue: h = [n], value: d, onValueChange: m = () => {
  }, onValueCommit: x = () => {
  }, inverted: p = false, form: D, ...w } = e, u = j.useRef(/* @__PURE__ */ new Set()), v = j.useRef(0), b = o === "horizontal" ? Mr : zr, [f = [], N] = Ct({ prop: d, defaultProp: h, onChange: (T) => {
    var _a;
    (_a = [...u.current][v.current]) == null ? void 0 : _a.focus(), m(T);
  } }), k = j.useRef(f);
  function M(T) {
    const S = Ar(f, T);
    I(T, S);
  }
  function g(T) {
    I(T, v.current);
  }
  function y() {
    const T = k.current[v.current];
    f[v.current] !== T && x(f);
  }
  function I(T, S, { commit: z } = { commit: false }) {
    const A = Rr(a), R = Fr(Math.round((T - n) / a) * a + n, A), F = ht(R, [n, s]);
    N((C = []) => {
      const B = Er(C, F, S);
      if (Tr(B, c * a)) {
        v.current = B.indexOf(F);
        const V = String(B) !== String(C);
        return V && z && x(B), V ? B : C;
      } else return C;
    });
  }
  return i.jsx(Nr, { scope: e.__scopeSlider, name: r, disabled: l, min: n, max: s, valueIndexToChangeRef: v, thumbs: u.current, values: f, orientation: o, form: D, children: i.jsx(Re.Provider, { scope: e.__scopeSlider, children: i.jsx(Re.Slot, { scope: e.__scopeSlider, children: i.jsx(b, { "aria-disabled": l, "data-disabled": l ? "" : void 0, ...w, ref: t, onPointerDown: re(w.onPointerDown, () => {
    l || (k.current = f);
  }), min: n, max: s, inverted: p, onSlideStart: l ? void 0 : M, onSlideMove: l ? void 0 : g, onSlideEnd: l ? void 0 : y, onHomeKeyDown: () => !l && I(n, 0, { commit: true }), onEndKeyDown: () => !l && I(s, f.length - 1, { commit: true }), onStepKeyDown: ({ event: T, direction: S }) => {
    if (!l) {
      const R = vt.includes(T.key) || T.shiftKey && xt.includes(T.key) ? 10 : 1, F = v.current, C = f[F], B = a * R * S;
      I(C + B, F, { commit: true });
    }
  } }) }) }) });
});
yt.displayName = se;
var [wt, bt] = gt(se, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), Mr = j.forwardRef((e, t) => {
  const { min: r, max: n, dir: s, inverted: a, onSlideStart: o, onSlideMove: l, onSlideEnd: c, onStepKeyDown: h, ...d } = e, [m, x] = j.useState(null), p = de(t, (b) => x(b)), D = j.useRef(void 0), w = wr(s), u = w === "ltr", v = u && !a || !u && a;
  function E(b) {
    const f = D.current || m.getBoundingClientRect(), N = [0, f.width], M = Ge(N, v ? [r, n] : [n, r]);
    return D.current = f, M(b - f.left);
  }
  return i.jsx(wt, { scope: e.__scopeSlider, startEdge: v ? "left" : "right", endEdge: v ? "right" : "left", direction: v ? 1 : -1, size: "width", children: i.jsx(jt, { dir: w, "data-orientation": "horizontal", ...d, ref: p, style: { ...d.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (b) => {
    const f = E(b.clientX);
    o == null ? void 0 : o(f);
  }, onSlideMove: (b) => {
    const f = E(b.clientX);
    l == null ? void 0 : l(f);
  }, onSlideEnd: () => {
    D.current = void 0, c == null ? void 0 : c();
  }, onStepKeyDown: (b) => {
    const N = pt[v ? "from-left" : "from-right"].includes(b.key);
    h == null ? void 0 : h({ event: b, direction: N ? -1 : 1 });
  } }) });
}), zr = j.forwardRef((e, t) => {
  const { min: r, max: n, inverted: s, onSlideStart: a, onSlideMove: o, onSlideEnd: l, onStepKeyDown: c, ...h } = e, d = j.useRef(null), m = de(t, d), x = j.useRef(void 0), p = !s;
  function D(w) {
    const u = x.current || d.current.getBoundingClientRect(), v = [0, u.height], b = Ge(v, p ? [n, r] : [r, n]);
    return x.current = u, b(w - u.top);
  }
  return i.jsx(wt, { scope: e.__scopeSlider, startEdge: p ? "bottom" : "top", endEdge: p ? "top" : "bottom", size: "height", direction: p ? 1 : -1, children: i.jsx(jt, { "data-orientation": "vertical", ...h, ref: m, style: { ...h.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (w) => {
    const u = D(w.clientY);
    a == null ? void 0 : a(u);
  }, onSlideMove: (w) => {
    const u = D(w.clientY);
    o == null ? void 0 : o(u);
  }, onSlideEnd: () => {
    x.current = void 0, l == null ? void 0 : l();
  }, onStepKeyDown: (w) => {
    const v = pt[p ? "from-bottom" : "from-top"].includes(w.key);
    c == null ? void 0 : c({ event: w, direction: v ? -1 : 1 });
  } }) });
}), jt = j.forwardRef((e, t) => {
  const { __scopeSlider: r, onSlideStart: n, onSlideMove: s, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: l, onStepKeyDown: c, ...h } = e, d = je(se, r);
  return i.jsx(ge.span, { ...h, ref: t, onKeyDown: re(e.onKeyDown, (m) => {
    m.key === "Home" ? (o(m), m.preventDefault()) : m.key === "End" ? (l(m), m.preventDefault()) : vt.concat(xt).includes(m.key) && (c(m), m.preventDefault());
  }), onPointerDown: re(e.onPointerDown, (m) => {
    const x = m.target;
    x.setPointerCapture(m.pointerId), m.preventDefault(), d.thumbs.has(x) ? x.focus() : n(m);
  }), onPointerMove: re(e.onPointerMove, (m) => {
    m.target.hasPointerCapture(m.pointerId) && s(m);
  }), onPointerUp: re(e.onPointerUp, (m) => {
    const x = m.target;
    x.hasPointerCapture(m.pointerId) && (x.releasePointerCapture(m.pointerId), a(m));
  }) });
}), St = "SliderTrack", Nt = j.forwardRef((e, t) => {
  const { __scopeSlider: r, ...n } = e, s = je(St, r);
  return i.jsx(ge.span, { "data-disabled": s.disabled ? "" : void 0, "data-orientation": s.orientation, ...n, ref: t });
});
Nt.displayName = St;
var Fe = "SliderRange", Mt = j.forwardRef((e, t) => {
  const { __scopeSlider: r, ...n } = e, s = je(Fe, r), a = bt(Fe, r), o = j.useRef(null), l = de(t, o), c = s.values.length, h = s.values.map((x) => kt(x, s.min, s.max)), d = c > 1 ? Math.min(...h) : 0, m = 100 - Math.max(...h);
  return i.jsx(ge.span, { "data-orientation": s.orientation, "data-disabled": s.disabled ? "" : void 0, ...n, ref: l, style: { ...e.style, [a.startEdge]: d + "%", [a.endEdge]: m + "%" } });
});
Mt.displayName = Fe;
var Ue = "SliderThumb", zt = j.forwardRef((e, t) => {
  const r = jr(e.__scopeSlider), [n, s] = j.useState(null), a = de(t, (l) => s(l)), o = j.useMemo(() => n ? r().findIndex((l) => l.ref.current === n) : -1, [r, n]);
  return i.jsx(kr, { ...e, ref: a, index: o });
}), kr = j.forwardRef((e, t) => {
  const { __scopeSlider: r, index: n, name: s, ...a } = e, o = je(Ue, r), l = bt(Ue, r), [c, h] = j.useState(null), d = de(t, (E) => h(E)), m = c ? o.form || !!c.closest("form") : true, x = It(c), p = o.values[n], D = p === void 0 ? 0 : kt(p, o.min, o.max), w = Cr(n, o.values.length), u = x == null ? void 0 : x[l.size], v = u ? Pr(u, D, l.direction) : 0;
  return j.useEffect(() => {
    if (c) return o.thumbs.add(c), () => {
      o.thumbs.delete(c);
    };
  }, [c, o.thumbs]), i.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [l.startEdge]: `calc(${D}% + ${v}px)` }, children: [i.jsx(Re.ItemSlot, { scope: e.__scopeSlider, children: i.jsx(ge.span, { role: "slider", "aria-label": e["aria-label"] || w, "aria-valuemin": o.min, "aria-valuenow": p, "aria-valuemax": o.max, "aria-orientation": o.orientation, "data-orientation": o.orientation, "data-disabled": o.disabled ? "" : void 0, tabIndex: o.disabled ? void 0 : 0, ...a, ref: d, style: p === void 0 ? { display: "none" } : e.style, onFocus: re(e.onFocus, () => {
    o.valueIndexToChangeRef.current = n;
  }) }) }), m && i.jsx(Dr, { name: s ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), form: o.form, value: p }, n)] });
});
zt.displayName = Ue;
var Dr = (e) => {
  const { value: t, ...r } = e, n = j.useRef(null), s = br(t);
  return j.useEffect(() => {
    const a = n.current, o = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(o, "value").set;
    if (s !== t && c) {
      const h = new Event("input", { bubbles: true });
      c.call(a, t), a.dispatchEvent(h);
    }
  }, [s, t]), i.jsx("input", { style: { display: "none" }, ...r, ref: n, defaultValue: t });
};
function Er(e = [], t, r) {
  const n = [...e];
  return n[r] = t, n.sort((s, a) => s - a);
}
function kt(e, t, r) {
  const a = 100 / (r - t) * (e - t);
  return ht(a, [0, 100]);
}
function Cr(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Ar(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((s) => Math.abs(s - t)), n = Math.min(...r);
  return r.indexOf(n);
}
function Pr(e, t, r) {
  const n = e / 2, a = Ge([0, 50], [0, n]);
  return (n - a(t) * r) * r;
}
function Ir(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function Tr(e, t) {
  if (t > 0) {
    const r = Ir(e);
    return Math.min(...r) >= t;
  }
  return true;
}
function Ge(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Rr(e) {
  return (String(e).split(".")[1] || "").length;
}
function Fr(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var Dt = yt, Ur = Nt, Br = Mt, Kr = zt;
const Be = j.forwardRef(({ className: e, ...t }, r) => i.jsxs(Dt, { ref: r, className: Tt("relative flex w-full touch-none select-none items-center", e), ...t, children: [i.jsx(Ur, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: i.jsx(Br, { className: "absolute h-full bg-primary" }) }), i.jsx(Kr, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })] }));
Be.displayName = Dt.displayName;
const tt = 500 * 1024 * 1024, Lr = 500 * 1024 * 1024;
function rt(e) {
  const t = e.reduce((s, a) => s + a.size, 0), r = Math.max(...e.map((s) => s.size));
  if (r > tt) {
    const s = e.find((a) => a.size > tt);
    return { size: t, isValid: false, errorMessage: `File "${s == null ? void 0 : s.name}" exceeds 500MB limit (${te(r)})`, formattedSize: te(t), estimatedUploadTime: 0 };
  }
  if (t > Lr) return { size: t, isValid: false, errorMessage: `Total upload size ${te(t)} exceeds 500MB limit`, formattedSize: te(t), estimatedUploadTime: 0 };
  const n = Math.ceil(t * 8 / (10 * 1024 * 1024));
  return { size: t, isValid: true, formattedSize: te(t), estimatedUploadTime: n };
}
function te(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, n)).toFixed(2)) + " " + r[n];
}
function rn() {
  const [e, t] = j.useState([]), [r, n] = j.useState([24]), [s, a] = j.useState([5]), [o, l] = j.useState("idle"), [c, h] = j.useState("keys"), [d, m] = j.useState(0), [x, p] = j.useState(""), [D, w] = j.useState(false), [u, v] = j.useState(null), [, E] = Rt(), { toast: b } = Ft(), f = j.useRef(null), N = $t(), k = Vt(), M = _t(), g = (S, z = 20) => {
    if (S.length <= z) return S;
    const A = S.lastIndexOf(".");
    if (A !== -1) {
      const R = S.substring(A), F = S.substring(0, A);
      if (F.length > z - R.length - 3) return F.substring(0, z - R.length - 3) + "..." + R;
    }
    return S.substring(0, z - 3) + "...";
  }, y = (S) => {
    v(null);
    const z = rt(S);
    if (!z.isValid) {
      v(z.errorMessage || "Invalid files"), b({ variant: "destructive", title: "Upload Limit Exceeded", description: z.errorMessage });
      return;
    }
    t(S);
  }, I = async () => {
    if (e.length === 0) return;
    const S = rt(e);
    if (!S.isValid) {
      b({ variant: "destructive", title: "Upload Error", description: S.errorMessage });
      return;
    }
    l("encrypting"), m(0), f.current = new AbortController();
    try {
      h("keys"), p("Generating military-grade AES-256 keys..."), await new Promise((P) => setTimeout(P, 300));
      const z = await Ot(), A = Ht();
      p("Deriving PIN-protective wrapper...");
      const R = await Gt(z, A.pin);
      m(10), h("metadata"), p("Encrypting metadata...");
      const F = e.map((P) => ({ name: P.name, type: P.type, size: P.size, fileId: Yt(), lastModified: P.lastModified })), C = await Zt(F, z), B = F.map((P) => ({ fileId: P.fileId, chunks: 1, size: P.size, isCompressed: false, originalSize: P.size }));
      m(20), p("Securing vault location...");
      const V = await N.mutateAsync({ expiresIn: r[0], maxDownloads: s[0], encryptedMetadata: C, lookupId: A.lookupId, wrappedKey: R, files: B });
      m(30), l("uploading"), h("transfer");
      const ie = e.length;
      for (let P = 0; P < e.length; P++) {
        if (f.current.signal.aborted) throw new Error("Upload cancelled");
        const Z = e[P], X = B[P].fileId, O = g(Z.name);
        p(`Reading ${O}...`);
        const K = await Z.arrayBuffer();
        p(`Encrypting ${O}...`);
        const { iv: G, encryptedData: oe } = await Xt(K, z), q = new Uint8Array(G.byteLength + oe.byteLength);
        q.set(G, 0), q.set(new Uint8Array(oe), G.byteLength), p(`Uploading ${O}...`);
        const { uploadUrl: Se, storagePath: ue } = await k.mutateAsync({ vaultId: V.id, fileId: X, chunkIndex: 0, size: q.byteLength }), le = await fetch(Se, { method: "PUT", body: q, signal: f.current.signal });
        if (!le.ok) throw new Error(`Upload failed for ${Z.name}: ${le.statusText}`);
        await M.mutateAsync({ vaultId: V.id, fileId: X, chunkIndex: 0, storagePath: ue });
        const fe = 30 + (P + 1) / ie * 65;
        m(fe);
      }
      h("done"), m(100), p("Finalizing secure vault..."), l("success"), setTimeout(() => {
        E(`/success/${V.id}#code=${A.fullCode}`);
      }, 800);
    } catch (z) {
      console.error(z), l("idle"), z instanceof Error && z.message === "Upload cancelled" ? b({ title: "Upload Cancelled", variant: "default" }) : b({ variant: "destructive", title: "Upload Failed", description: z instanceof Error ? z.message : "An error occurred" });
    }
  }, T = e.reduce((S, z) => S + z.size, 0);
  return i.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col font-sans text-zinc-100 bg-zinc-950", children: [i.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), i.jsx("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }), i.jsx("header", { className: "relative z-10 px-6 py-6 border-b border-white/5", children: i.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [i.jsx(Ye, { href: "/", children: i.jsxs(_.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "flex items-center gap-2 cursor-pointer group", children: [i.jsx("div", { className: "w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors", children: i.jsx(ke, { className: "w-5 h-5 text-amber-500" }) }), i.jsxs("h1", { className: "text-xl font-bold font-mono tracking-tight group-hover:text-amber-500 transition-colors", children: ["VAULT", i.jsx("span", { className: "text-amber-500", children: "BRIDGE" })] })] }) }), i.jsx(Ye, { href: "/", children: i.jsxs(ze, { variant: "ghost", size: "sm", className: "gap-2 text-zinc-400 hover:text-white hover:bg-white/5", children: [i.jsx(qt, { className: "w-4 h-4" }), "Back"] }) })] }) }), i.jsxs("main", { className: "relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 py-12", children: [i.jsxs(_.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-10", children: [i.jsx("h2", { className: "text-3xl font-bold mb-3", children: "Secure Upload" }), i.jsx("p", { className: "text-zinc-400", children: "Create an encrypted vault for your files." })] }), i.jsxs(_.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: `bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl ${D ? "ring-2 ring-amber-500 bg-amber-500/5" : ""}`, children: [i.jsx(at, { children: o !== "idle" && i.jsxs(_.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute inset-0 bg-zinc-950/95 z-20 flex flex-col items-center justify-center p-8 text-center", children: [i.jsx(gr, { stage: o, step: c, progress: d, statusText: x }), o === "uploading" && i.jsx(ze, { variant: "outline", size: "sm", onClick: () => {
    var _a;
    return (_a = f.current) == null ? void 0 : _a.abort();
  }, className: "mt-8 border-red-500/20 text-red-400 hover:bg-red-500/10", children: "Cancel Upload" })] }) }), i.jsxs("div", { className: "space-y-6", children: [i.jsx(pr, { onFilesSelected: y, disabled: o !== "idle", onDragStateChange: w }), u && i.jsxs(_.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3", children: [i.jsx(Wt, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), i.jsxs("div", { children: [i.jsx("p", { className: "text-sm text-red-400", children: u }), i.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Maximum file size: 500 MB" })] })] }), i.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(Jt, { className: "w-3 h-3 text-emerald-500" }), "AES-256-GCM"] }), i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(De, { className: "w-3 h-3 text-amber-500" }), "Lossless Transfer"] }), i.jsxs("div", { className: "px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5", children: [i.jsx(ke, { className: "w-3 h-3 text-blue-500" }), "Max 500MB"] })] }), e.length > 0 && i.jsxs("div", { className: "text-center text-sm text-zinc-400", children: [e.length, " file", e.length > 1 ? "s" : "", " selected \u2022 ", te(T), " total"] })] }), i.jsxs("div", { className: "mt-8 space-y-8 border-t border-white/5 pt-8", children: [i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [i.jsxs("div", { className: "space-y-4", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [i.jsx(Qt, { className: "w-4 h-4 text-amber-500" }), "Expires In"] }), i.jsxs("span", { className: "text-sm font-mono text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded", children: [r[0], "h"] })] }), i.jsx(Be, { value: r, onValueChange: n, min: 1, max: 168, step: 1, className: "py-2" })] }), i.jsxs("div", { className: "space-y-4", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsxs("label", { className: "text-sm font-medium text-zinc-300 flex items-center gap-2", children: [i.jsx(ke, { className: "w-4 h-4 text-emerald-500" }), "Download Limit"] }), i.jsx("span", { className: "text-sm font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded", children: s[0] === 1 ? "BURN ON READ" : `${s[0]}x` })] }), i.jsx(Be, { value: s, onValueChange: a, min: 1, max: 100, step: 1, disabled: s[0] === 1, className: s[0] === 1 ? "opacity-30" : "" }), i.jsx("div", { onClick: () => a(s[0] === 1 ? [5] : [1]), className: `text-xs cursor-pointer select-none transition-colors text-center py-2 rounded border ${s[0] === 1 ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white"}`, children: s[0] === 1 ? "\u{1F525} Burn-on-read Active (Auto-delete after 1 view)" : "Click to enable Burn-on-read" })] })] }), i.jsx(ze, { onClick: I, disabled: e.length === 0 || o !== "idle" || !!u, className: "w-full h-14 text-base font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed", children: o !== "idle" ? "Processing..." : i.jsxs(i.Fragment, { children: [i.jsx(De, { className: "w-4 h-4 mr-2" }), "Encrypt & Upload"] }) })] })] }), i.jsx(_.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mt-8 text-center px-4", children: i.jsx("p", { className: "text-xs text-zinc-500", children: "Zero-Knowledge Architecture: Encryption happens entirely in your browser. We never see your files, keys, or data." }) })] })] });
}
export {
  rn as default
};
