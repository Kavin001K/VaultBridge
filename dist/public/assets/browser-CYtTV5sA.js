import { c as Nr } from "./index-ByPnYQL4.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oe = Nr("Flame", [["path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z", key: "96xj49" }]]);
var Ur = {}, Pr = function(r, e, a, n, f) {
  var t = new Worker(Ur[e] || (Ur[e] = URL.createObjectURL(new Blob([r + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return t.onmessage = function(v) {
    var o = v.data, i = o.$e$;
    if (i) {
      var c = new Error(i[0]);
      c.code = i[1], c.stack = i[2], f(c, null);
    } else f(null, o);
  }, t.postMessage(a, n), t;
}, U = Uint8Array, S = Uint16Array, fr = Int32Array, vr = new U([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), or = new U([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), hr = new U([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ir = function(r, e) {
  for (var a = new S(31), n = 0; n < 31; ++n) a[n] = e += 1 << r[n - 1];
  for (var f = new fr(a[30]), n = 1; n < 30; ++n) for (var t = a[n]; t < a[n + 1]; ++t) f[t] = t - a[n] << 5 | n;
  return { b: a, r: f };
}, Sr = Ir(vr, 2), Qr = Sr.b, ar = Sr.r;
Qr[28] = 258, ar[258] = 28;
var Vr = Ir(or, 0), sr = Vr.r, nr = new S(32768);
for (var w = 0; w < 32768; ++w) {
  var N = (w & 43690) >> 1 | (w & 21845) << 1;
  N = (N & 52428) >> 2 | (N & 13107) << 2, N = (N & 61680) >> 4 | (N & 3855) << 4, nr[w] = ((N & 65280) >> 8 | (N & 255) << 8) >> 1;
}
var p = function(r, e, a) {
  for (var n = r.length, f = 0, t = new S(e); f < n; ++f) r[f] && ++t[r[f] - 1];
  var v = new S(e);
  for (f = 1; f < e; ++f) v[f] = v[f - 1] + t[f - 1] << 1;
  var o;
  if (a) {
    o = new S(1 << e);
    var i = 15 - e;
    for (f = 0; f < n; ++f) if (r[f]) for (var c = f << 4 | r[f], l = e - r[f], y = v[r[f] - 1]++ << l, x = y | (1 << l) - 1; y <= x; ++y) o[nr[y] >> i] = c;
  } else for (o = new S(n), f = 0; f < n; ++f) r[f] && (o[f] = nr[v[r[f] - 1]++] >> 15 - r[f]);
  return o;
}, P = new U(288);
for (var w = 0; w < 144; ++w) P[w] = 8;
for (var w = 144; w < 256; ++w) P[w] = 9;
for (var w = 256; w < 280; ++w) P[w] = 7;
for (var w = 280; w < 288; ++w) P[w] = 8;
var d = new U(32);
for (var w = 0; w < 32; ++w) d[w] = 5;
var Rr = p(P, 9, 0), jr = p(d, 5, 0), xr = function(r) {
  return (r + 7) / 8 | 0;
}, Mr = function(r, e, a) {
  return (e == null || e < 0) && (e = 0), (a == null || a > r.length) && (a = r.length), new U(r.subarray(e, a));
}, Xr = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], _ = function(r, e, a) {
  var n = new Error(e || Xr[r]);
  if (n.code = r, Error.captureStackTrace && Error.captureStackTrace(n, _), !a) throw n;
  return n;
}, Y = function(r, e, a) {
  a <<= e & 7;
  var n = e / 8 | 0;
  r[n] |= a, r[n + 1] |= a >> 8;
}, X = function(r, e, a) {
  a <<= e & 7;
  var n = e / 8 | 0;
  r[n] |= a, r[n + 1] |= a >> 8, r[n + 2] |= a >> 16;
}, er = function(r, e) {
  for (var a = [], n = 0; n < r.length; ++n) r[n] && a.push({ s: n, f: r[n] });
  var f = a.length, t = a.slice();
  if (!f) return { t: Fr, l: 0 };
  if (f == 1) {
    var v = new U(a[0].s + 1);
    return v[a[0].s] = 1, { t: v, l: 1 };
  }
  a.sort(function(k, O) {
    return k.f - O.f;
  }), a.push({ s: -1, f: 25001 });
  var o = a[0], i = a[1], c = 0, l = 1, y = 2;
  for (a[0] = { s: -1, f: o.f + i.f, l: o, r: i }; l != f - 1; ) o = a[a[c].f < a[y].f ? c++ : y++], i = a[c != l && a[c].f < a[y].f ? c++ : y++], a[l++] = { s: -1, f: o.f + i.f, l: o, r: i };
  for (var x = t[0].s, n = 1; n < f; ++n) t[n].s > x && (x = t[n].s);
  var m = new S(x + 1), B = tr(a[l - 1], m, 0);
  if (B > e) {
    var n = 0, M = 0, g = B - e, q = 1 << g;
    for (t.sort(function(O, F) {
      return m[F.s] - m[O.s] || O.f - F.f;
    }); n < f; ++n) {
      var I = t[n].s;
      if (m[I] > e) M += q - (1 << B - m[I]), m[I] = e;
      else break;
    }
    for (M >>= g; M > 0; ) {
      var E = t[n].s;
      m[E] < e ? M -= 1 << e - m[E]++ - 1 : ++n;
    }
    for (; n >= 0 && M; --n) {
      var s = t[n].s;
      m[s] == e && (--m[s], ++M);
    }
    B = e;
  }
  return { t: new U(m), l: B };
}, tr = function(r, e, a) {
  return r.s == -1 ? Math.max(tr(r.l, e, a + 1), tr(r.r, e, a + 1)) : e[r.s] = a;
}, gr = function(r) {
  for (var e = r.length; e && !r[--e]; ) ;
  for (var a = new S(++e), n = 0, f = r[0], t = 1, v = function(i) {
    a[n++] = i;
  }, o = 1; o <= e; ++o) if (r[o] == f && o != e) ++t;
  else {
    if (!f && t > 2) {
      for (; t > 138; t -= 138) v(32754);
      t > 2 && (v(t > 10 ? t - 11 << 5 | 28690 : t - 3 << 5 | 12305), t = 0);
    } else if (t > 3) {
      for (v(f), --t; t > 6; t -= 6) v(8304);
      t > 2 && (v(t - 3 << 5 | 8208), t = 0);
    }
    for (; t--; ) v(f);
    t = 1, f = r[o];
  }
  return { c: a.subarray(0, n), n: e };
}, Z = function(r, e) {
  for (var a = 0, n = 0; n < e.length; ++n) a += r[n] * e[n];
  return a;
}, mr = function(r, e, a) {
  var n = a.length, f = xr(e + 2);
  r[f] = n & 255, r[f + 1] = n >> 8, r[f + 2] = r[f] ^ 255, r[f + 3] = r[f + 1] ^ 255;
  for (var t = 0; t < n; ++t) r[f + t + 4] = a[t];
  return (f + 4 + n) * 8;
}, wr = function(r, e, a, n, f, t, v, o, i, c, l) {
  Y(e, l++, a), ++f[256];
  for (var y = er(f, 15), x = y.t, m = y.l, B = er(t, 15), M = B.t, g = B.l, q = gr(x), I = q.c, E = q.n, s = gr(M), k = s.c, O = s.n, F = new S(19), h = 0; h < I.length; ++h) ++F[I[h] & 31];
  for (var h = 0; h < k.length; ++h) ++F[k[h] & 31];
  for (var u = er(F, 7), T = u.t, G = u.l, D = 19; D > 4 && !T[hr[D - 1]]; --D) ;
  var J = c + 5 << 3, C = Z(f, P) + Z(t, d) + v, L = Z(f, x) + Z(t, M) + v + 14 + 3 * D + Z(F, T) + 2 * F[16] + 3 * F[17] + 7 * F[18];
  if (i >= 0 && J <= C && J <= L) return mr(e, l, r.subarray(i, i + c));
  var R, A, j, K;
  if (Y(e, l, 1 + (L < C)), l += 2, L < C) {
    R = p(x, m, 0), A = x, j = p(M, g, 0), K = M;
    var lr = p(T, G, 0);
    Y(e, l, E - 257), Y(e, l + 5, O - 1), Y(e, l + 10, D - 4), l += 14;
    for (var h = 0; h < D; ++h) Y(e, l + 3 * h, T[hr[h]]);
    l += 3 * D;
    for (var H = [I, k], b = 0; b < 2; ++b) for (var Q = H[b], h = 0; h < Q.length; ++h) {
      var W = Q[h] & 31;
      Y(e, l, lr[W]), l += T[W], W > 15 && (Y(e, l, Q[h] >> 5 & 127), l += Q[h] >> 12);
    }
  } else R = Rr, A = P, j = jr, K = d;
  for (var h = 0; h < o; ++h) {
    var $ = n[h];
    if ($ > 255) {
      var W = $ >> 18 & 31;
      X(e, l, R[W + 257]), l += A[W + 257], W > 7 && (Y(e, l, $ >> 23 & 31), l += vr[W]);
      var V = $ & 31;
      X(e, l, j[V]), l += K[V], V > 3 && (X(e, l, $ >> 5 & 8191), l += or[V]);
    } else X(e, l, R[$]), l += A[$];
  }
  return X(e, l, R[256]), l + A[256];
}, Hr = new fr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Fr = new U(0), Wr = function(r, e, a, n, f, t) {
  var v = t.z || r.length, o = new U(n + v + 5 * (1 + Math.ceil(v / 7e3)) + f), i = o.subarray(n, o.length - f), c = t.l, l = (t.r || 0) & 7;
  if (e) {
    l && (i[0] = t.r >> 3);
    for (var y = Hr[e - 1], x = y >> 13, m = y & 8191, B = (1 << a) - 1, M = t.p || new S(32768), g = t.h || new S(B + 1), q = Math.ceil(a / 3), I = 2 * q, E = function(cr) {
      return (r[cr] ^ r[cr + 1] << q ^ r[cr + 2] << I) & B;
    }, s = new fr(25e3), k = new S(288), O = new S(32), F = 0, h = 0, u = t.i || 0, T = 0, G = t.w || 0, D = 0; u + 2 < v; ++u) {
      var J = E(u), C = u & 32767, L = g[J];
      if (M[C] = L, g[J] = C, G <= u) {
        var R = v - u;
        if ((F > 7e3 || T > 24576) && (R > 423 || !c)) {
          l = wr(r, i, 0, s, k, O, h, T, D, u - D, l), T = F = h = 0, D = u;
          for (var A = 0; A < 286; ++A) k[A] = 0;
          for (var A = 0; A < 30; ++A) O[A] = 0;
        }
        var j = 2, K = 0, lr = m, H = C - L & 32767;
        if (R > 2 && J == E(u - H)) for (var b = Math.min(x, R) - 1, Q = Math.min(32767, u), W = Math.min(258, R); H <= Q && --lr && C != L; ) {
          if (r[u + j] == r[u + j - H]) {
            for (var $ = 0; $ < W && r[u + $] == r[u + $ - H]; ++$) ;
            if ($ > j) {
              if (j = $, K = H, $ > b) break;
              for (var V = Math.min(H, $ - 2), Tr = 0, A = 0; A < V; ++A) {
                var ir = u - H + A & 32767, Kr = M[ir], Er = ir - Kr & 32767;
                Er > Tr && (Tr = Er, L = ir);
              }
            }
          }
          C = L, L = M[C], H += C - L & 32767;
        }
        if (K) {
          s[T++] = 268435456 | ar[j] << 18 | sr[K];
          var Or = ar[j] & 31, Cr = sr[K] & 31;
          h += vr[Or] + or[Cr], ++k[257 + Or], ++O[Cr], G = u + j, ++F;
        } else s[T++] = r[u], ++k[r[u]];
      }
    }
    for (u = Math.max(u, G); u < v; ++u) s[T++] = r[u], ++k[r[u]];
    l = wr(r, i, c, s, k, O, h, T, D, u - D, l), c || (t.r = l & 7 | i[l / 8 | 0] << 3, l -= 7, t.h = g, t.p = M, t.i = u, t.w = G);
  } else {
    for (var u = t.w || 0; u < v + c; u += 65535) {
      var ur = u + 65535;
      ur >= v && (i[l / 8 | 0] = c, ur = v), l = mr(i, l + 1, r.subarray(u, ur));
    }
    t.i = v;
  }
  return Mr(o, 0, n + xr(l) + f);
}, Zr = function() {
  for (var r = new Int32Array(256), e = 0; e < 256; ++e) {
    for (var a = e, n = 9; --n; ) a = (a & 1 && -306674912) ^ a >>> 1;
    r[e] = a;
  }
  return r;
}(), pr = function() {
  var r = -1;
  return { p: function(e) {
    for (var a = r, n = 0; n < e.length; ++n) a = Zr[a & 255 ^ e[n]] ^ a >>> 8;
    r = a;
  }, d: function() {
    return ~r;
  } };
}, Yr = function() {
  var r = 1, e = 0;
  return { p: function(a) {
    for (var n = r, f = e, t = a.length | 0, v = 0; v != t; ) {
      for (var o = Math.min(v + 2655, t); v < o; ++v) f += n += a[v];
      n = (n & 65535) + 15 * (n >> 16), f = (f & 65535) + 15 * (f >> 16);
    }
    r = n, e = f;
  }, d: function() {
    return r %= 65521, e %= 65521, (r & 255) << 24 | (r & 65280) << 8 | (e & 255) << 8 | e >> 8;
  } };
}, Ar = function(r, e, a, n, f) {
  if (!f && (f = { l: 1 }, e.dictionary)) {
    var t = e.dictionary.subarray(-32768), v = new U(t.length + r.length);
    v.set(t), v.set(r, t.length), r = v, f.w = t.length;
  }
  return Wr(r, e.level == null ? 6 : e.level, e.mem == null ? f.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 20 : 12 + e.mem, a, n, f);
}, kr = function(r, e) {
  var a = {};
  for (var n in r) a[n] = r[n];
  for (var n in e) a[n] = e[n];
  return a;
}, Br = function(r, e, a) {
  for (var n = r(), f = r.toString(), t = f.slice(f.indexOf("[") + 1, f.lastIndexOf("]")).replace(/\s+/g, "").split(","), v = 0; v < n.length; ++v) {
    var o = n[v], i = t[v];
    if (typeof o == "function") {
      e += ";" + i + "=";
      var c = o.toString();
      if (o.prototype) if (c.indexOf("[native code]") != -1) {
        var l = c.indexOf(" ", 8) + 1;
        e += c.slice(l, c.indexOf("(", l));
      } else {
        e += c;
        for (var y in o.prototype) e += ";" + i + ".prototype." + y + "=" + o.prototype[y].toString();
      }
      else e += c;
    } else a[i] = o;
  }
  return e;
}, rr = [], _r = function(r) {
  var e = [];
  for (var a in r) r[a].buffer && e.push((r[a] = new r[a].constructor(r[a])).buffer);
  return e;
}, br = function(r, e, a, n) {
  if (!rr[a]) {
    for (var f = "", t = {}, v = r.length - 1, o = 0; o < v; ++o) f = Br(r[o], f, t);
    rr[a] = { c: Br(r[v], f, t), e: t };
  }
  var i = kr({}, rr[a].e);
  return Pr(rr[a].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", a, i, _r(i), n);
}, dr = function() {
  return [U, S, fr, vr, or, hr, ar, sr, Rr, P, jr, d, nr, Hr, Fr, p, Y, X, er, tr, gr, Z, mr, wr, xr, Mr, Wr, Ar, zr, Gr];
}, Gr = function(r) {
  return postMessage(r, [r.buffer]);
}, re = function(r, e, a, n, f, t) {
  var v = br(a, n, f, function(o, i) {
    v.terminate(), t(o, i);
  });
  return v.postMessage([r, e], e.consume ? [r.buffer] : []), function() {
    v.terminate();
  };
}, z = function(r, e, a) {
  for (; a; ++e) r[e] = a, a >>>= 8;
}, ee = function(r, e) {
  var a = e.level, n = a == 0 ? 0 : a < 6 ? 1 : a == 9 ? 3 : 2;
  if (r[0] = 120, r[1] = n << 6 | (e.dictionary && 32), r[1] |= 31 - (r[0] << 8 | r[1]) % 31, e.dictionary) {
    var f = Yr();
    f.p(e.dictionary), z(r, 2, f.d());
  }
};
function ae(r, e, a) {
  return a || (a = e, e = {}), typeof a != "function" && _(7), re(r, e, [dr], function(n) {
    return Gr(zr(n.data[0], n.data[1]));
  }, 0, a);
}
function zr(r, e) {
  return Ar(r, e || {}, 0, 0);
}
function le(r, e) {
  e || (e = {});
  var a = Yr();
  a.p(r);
  var n = Ar(r, e, e.dictionary ? 6 : 2, 4);
  return ee(n, e), z(n, n.length - 4, a.d()), n;
}
var Jr = function(r, e, a, n) {
  for (var f in r) {
    var t = r[f], v = e + f, o = n;
    Array.isArray(t) && (o = kr(n, t[1]), t = t[0]), t instanceof U ? a[v] = [t, o] : (a[v += "/"] = [new U(0), o], Jr(t, v, a, n));
  }
}, Dr = typeof TextEncoder < "u" && new TextEncoder(), ne = typeof TextDecoder < "u" && new TextDecoder(), te = 0;
try {
  ne.decode(Fr, { stream: true }), te = 1;
} catch {
}
function Lr(r, e) {
  var a;
  if (Dr) return Dr.encode(r);
  for (var n = r.length, f = new U(r.length + (r.length >> 1)), t = 0, v = function(c) {
    f[t++] = c;
  }, a = 0; a < n; ++a) {
    if (t + 5 > f.length) {
      var o = new U(t + 8 + (n - a << 1));
      o.set(f), f = o;
    }
    var i = r.charCodeAt(a);
    i < 128 || e ? v(i) : i < 2048 ? (v(192 | i >> 6), v(128 | i & 63)) : i > 55295 && i < 57344 ? (i = 65536 + (i & 1047552) | r.charCodeAt(++a) & 1023, v(240 | i >> 18), v(128 | i >> 12 & 63), v(128 | i >> 6 & 63), v(128 | i & 63)) : (v(224 | i >> 12), v(128 | i >> 6 & 63), v(128 | i & 63));
  }
  return Mr(f, 0, t);
}
var yr = function(r) {
  var e = 0;
  if (r) for (var a in r) {
    var n = r[a].length;
    n > 65535 && _(9), e += n + 4;
  }
  return e;
}, $r = function(r, e, a, n, f, t, v, o) {
  var i = n.length, c = a.extra, l = o && o.length, y = yr(c);
  z(r, e, v != null ? 33639248 : 67324752), e += 4, v != null && (r[e++] = 20, r[e++] = a.os), r[e] = 20, e += 2, r[e++] = a.flag << 1 | (t < 0 && 8), r[e++] = f && 8, r[e++] = a.compression & 255, r[e++] = a.compression >> 8;
  var x = new Date(a.mtime == null ? Date.now() : a.mtime), m = x.getFullYear() - 1980;
  if ((m < 0 || m > 119) && _(10), z(r, e, m << 25 | x.getMonth() + 1 << 21 | x.getDate() << 16 | x.getHours() << 11 | x.getMinutes() << 5 | x.getSeconds() >> 1), e += 4, t != -1 && (z(r, e, a.crc), z(r, e + 4, t < 0 ? -t - 2 : t), z(r, e + 8, a.size)), z(r, e + 12, i), z(r, e + 14, y), e += 16, v != null && (z(r, e, l), z(r, e + 6, a.attrs), z(r, e + 10, v), e += 14), r.set(n, e), e += i, y) for (var B in c) {
    var M = c[B], g = M.length;
    z(r, e, +B), z(r, e + 2, g), r.set(M, e + 4), e += 4 + g;
  }
  return l && (r.set(o, e), e += l), e;
}, fe = function(r, e, a, n, f) {
  z(r, e, 101010256), z(r, e + 8, a), z(r, e + 10, a), z(r, e + 12, n), z(r, e + 16, f);
};
function ie(r, e, a) {
  a || (a = e, e = {}), typeof a != "function" && _(7);
  var n = {};
  Jr(r, "", n, e);
  var f = Object.keys(n), t = f.length, v = 0, o = 0, i = t, c = new Array(t), l = [], y = function() {
    for (var g = 0; g < l.length; ++g) l[g]();
  }, x = function(g, q) {
    qr(function() {
      a(g, q);
    });
  };
  qr(function() {
    x = a;
  });
  var m = function() {
    var g = new U(o + 22), q = v, I = o - v;
    o = 0;
    for (var E = 0; E < i; ++E) {
      var s = c[E];
      try {
        var k = s.c.length;
        $r(g, o, s, s.f, s.u, k);
        var O = 30 + s.f.length + yr(s.extra), F = o + O;
        g.set(s.c, F), $r(g, v, s, s.f, s.u, k, o, s.m), v += 16 + O + (s.m ? s.m.length : 0), o = F + k;
      } catch (h) {
        return x(h, null);
      }
    }
    fe(g, v, c.length, I, q), x(null, g);
  };
  t || m();
  for (var B = function(g) {
    var q = f[g], I = n[q], E = I[0], s = I[1], k = pr(), O = E.length;
    k.p(E);
    var F = Lr(q), h = F.length, u = s.comment, T = u && Lr(u), G = T && T.length, D = yr(s.extra), J = s.level == 0 ? 0 : 8, C = function(L, R) {
      if (L) y(), x(L, null);
      else {
        var A = R.length;
        c[g] = kr(s, { size: O, crc: k.d(), c: R, f: F, m: T, u: h != q.length || T && u.length != G, compression: J }), v += 30 + h + D + A, o += 76 + 2 * (h + D) + (G || 0) + A, --t || m();
      }
    };
    if (h > 65535 && C(_(11, 0, 1), null), !J) C(null, E);
    else if (O < 16e4) try {
      C(null, zr(E, s));
    } catch (L) {
      C(L, null);
    }
    else l.push(ae(E, s, C));
  }, M = 0; M < i; ++M) B(M);
  return y;
}
var qr = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(r) {
  r();
};
export {
  oe as F,
  le as a,
  ie as z
};
