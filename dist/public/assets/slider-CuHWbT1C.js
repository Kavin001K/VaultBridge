import { r as l, e as ce, j as d, f as le, g as de, h as C, P as I, i as A, k as ue, a as fe } from "./index-BpGdq6cX.js";
function Y(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var me = l.createContext(void 0);
function Se(e) {
  const t = l.useContext(me);
  return e || t || "ltr";
}
function pe(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var $ = ["PageUp", "PageDown"], X = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], G = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, M = "Slider", [z, he, ge] = de(M), [W] = le(M, [ge]), [ve, V] = W(M), q = l.forwardRef((e, t) => {
  const { name: n, min: o = 0, max: i = 100, step: a = 1, orientation: r = "horizontal", disabled: c = false, minStepsBetweenThumbs: u = 0, defaultValue: g = [o], value: w, onValueChange: s = () => {
  }, onValueCommit: f = () => {
  }, inverted: v = false, form: y, ...h } = e, S = l.useRef(/* @__PURE__ */ new Set()), m = l.useRef(0), x = r === "horizontal" ? xe : be, [p = [], _] = ce({ prop: w, defaultProp: g, onChange: (b) => {
    var _a;
    (_a = [...S.current][m.current]) == null ? void 0 : _a.focus(), s(b);
  } }), k = l.useRef(p);
  function T(b) {
    const P = De(p, b);
    j(b, P);
  }
  function se(b) {
    j(b, m.current);
  }
  function ae() {
    const b = k.current[m.current];
    p[m.current] !== b && f(p);
  }
  function j(b, P, { commit: B } = { commit: false }) {
    const F = _e(a), N = je(Math.round((b - o) / a) * a + o, F), K = Y(N, [o, i]);
    _((E = []) => {
      const R = Pe(E, K, P);
      if (Me(R, u * a)) {
        m.current = R.indexOf(K);
        const U = String(R) !== String(E);
        return U && B && f(R), U ? R : E;
      } else return E;
    });
  }
  return d.jsx(ve, { scope: e.__scopeSlider, name: n, disabled: c, min: o, max: i, valueIndexToChangeRef: m, thumbs: S.current, values: p, orientation: r, form: y, children: d.jsx(z.Provider, { scope: e.__scopeSlider, children: d.jsx(z.Slot, { scope: e.__scopeSlider, children: d.jsx(x, { "aria-disabled": c, "data-disabled": c ? "" : void 0, ...h, ref: t, onPointerDown: C(h.onPointerDown, () => {
    c || (k.current = p);
  }), min: o, max: i, inverted: v, onSlideStart: c ? void 0 : T, onSlideMove: c ? void 0 : se, onSlideEnd: c ? void 0 : ae, onHomeKeyDown: () => !c && j(o, 0, { commit: true }), onEndKeyDown: () => !c && j(i, p.length - 1, { commit: true }), onStepKeyDown: ({ event: b, direction: P }) => {
    if (!c) {
      const N = $.includes(b.key) || b.shiftKey && X.includes(b.key) ? 10 : 1, K = m.current, E = p[K], R = a * N * P;
      j(E + R, K, { commit: true });
    }
  } }) }) }) });
});
q.displayName = M;
var [J, Q] = W(M, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), xe = l.forwardRef((e, t) => {
  const { min: n, max: o, dir: i, inverted: a, onSlideStart: r, onSlideMove: c, onSlideEnd: u, onStepKeyDown: g, ...w } = e, [s, f] = l.useState(null), v = A(t, (x) => f(x)), y = l.useRef(void 0), h = Se(i), S = h === "ltr", m = S && !a || !S && a;
  function D(x) {
    const p = y.current || s.getBoundingClientRect(), _ = [0, p.width], T = L(_, m ? [n, o] : [o, n]);
    return y.current = p, T(x - p.left);
  }
  return d.jsx(J, { scope: e.__scopeSlider, startEdge: m ? "left" : "right", endEdge: m ? "right" : "left", direction: m ? 1 : -1, size: "width", children: d.jsx(Z, { dir: h, "data-orientation": "horizontal", ...w, ref: v, style: { ...w.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (x) => {
    const p = D(x.clientX);
    r == null ? void 0 : r(p);
  }, onSlideMove: (x) => {
    const p = D(x.clientX);
    c == null ? void 0 : c(p);
  }, onSlideEnd: () => {
    y.current = void 0, u == null ? void 0 : u();
  }, onStepKeyDown: (x) => {
    const _ = G[m ? "from-left" : "from-right"].includes(x.key);
    g == null ? void 0 : g({ event: x, direction: _ ? -1 : 1 });
  } }) });
}), be = l.forwardRef((e, t) => {
  const { min: n, max: o, inverted: i, onSlideStart: a, onSlideMove: r, onSlideEnd: c, onStepKeyDown: u, ...g } = e, w = l.useRef(null), s = A(t, w), f = l.useRef(void 0), v = !i;
  function y(h) {
    const S = f.current || w.current.getBoundingClientRect(), m = [0, S.height], x = L(m, v ? [o, n] : [n, o]);
    return f.current = S, x(h - S.top);
  }
  return d.jsx(J, { scope: e.__scopeSlider, startEdge: v ? "bottom" : "top", endEdge: v ? "top" : "bottom", size: "height", direction: v ? 1 : -1, children: d.jsx(Z, { "data-orientation": "vertical", ...g, ref: s, style: { ...g.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (h) => {
    const S = y(h.clientY);
    a == null ? void 0 : a(S);
  }, onSlideMove: (h) => {
    const S = y(h.clientY);
    r == null ? void 0 : r(S);
  }, onSlideEnd: () => {
    f.current = void 0, c == null ? void 0 : c();
  }, onStepKeyDown: (h) => {
    const m = G[v ? "from-bottom" : "from-top"].includes(h.key);
    u == null ? void 0 : u({ event: h, direction: m ? -1 : 1 });
  } }) });
}), Z = l.forwardRef((e, t) => {
  const { __scopeSlider: n, onSlideStart: o, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: r, onEndKeyDown: c, onStepKeyDown: u, ...g } = e, w = V(M, n);
  return d.jsx(I.span, { ...g, ref: t, onKeyDown: C(e.onKeyDown, (s) => {
    s.key === "Home" ? (r(s), s.preventDefault()) : s.key === "End" ? (c(s), s.preventDefault()) : $.concat(X).includes(s.key) && (u(s), s.preventDefault());
  }), onPointerDown: C(e.onPointerDown, (s) => {
    const f = s.target;
    f.setPointerCapture(s.pointerId), s.preventDefault(), w.thumbs.has(f) ? f.focus() : o(s);
  }), onPointerMove: C(e.onPointerMove, (s) => {
    s.target.hasPointerCapture(s.pointerId) && i(s);
  }), onPointerUp: C(e.onPointerUp, (s) => {
    const f = s.target;
    f.hasPointerCapture(s.pointerId) && (f.releasePointerCapture(s.pointerId), a(s));
  }) });
}), ee = "SliderTrack", te = l.forwardRef((e, t) => {
  const { __scopeSlider: n, ...o } = e, i = V(ee, n);
  return d.jsx(I.span, { "data-disabled": i.disabled ? "" : void 0, "data-orientation": i.orientation, ...o, ref: t });
});
te.displayName = ee;
var H = "SliderRange", ne = l.forwardRef((e, t) => {
  const { __scopeSlider: n, ...o } = e, i = V(H, n), a = Q(H, n), r = l.useRef(null), c = A(t, r), u = i.values.length, g = i.values.map((f) => re(f, i.min, i.max)), w = u > 1 ? Math.min(...g) : 0, s = 100 - Math.max(...g);
  return d.jsx(I.span, { "data-orientation": i.orientation, "data-disabled": i.disabled ? "" : void 0, ...o, ref: c, style: { ...e.style, [a.startEdge]: w + "%", [a.endEdge]: s + "%" } });
});
ne.displayName = H;
var O = "SliderThumb", oe = l.forwardRef((e, t) => {
  const n = he(e.__scopeSlider), [o, i] = l.useState(null), a = A(t, (c) => i(c)), r = l.useMemo(() => o ? n().findIndex((c) => c.ref.current === o) : -1, [n, o]);
  return d.jsx(we, { ...e, ref: a, index: r });
}), we = l.forwardRef((e, t) => {
  const { __scopeSlider: n, index: o, name: i, ...a } = e, r = V(O, n), c = Q(O, n), [u, g] = l.useState(null), w = A(t, (D) => g(D)), s = u ? r.form || !!u.closest("form") : true, f = ue(u), v = r.values[o], y = v === void 0 ? 0 : re(v, r.min, r.max), h = Re(o, r.values.length), S = f == null ? void 0 : f[c.size], m = S ? Ee(S, y, c.direction) : 0;
  return l.useEffect(() => {
    if (u) return r.thumbs.add(u), () => {
      r.thumbs.delete(u);
    };
  }, [u, r.thumbs]), d.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [c.startEdge]: `calc(${y}% + ${m}px)` }, children: [d.jsx(z.ItemSlot, { scope: e.__scopeSlider, children: d.jsx(I.span, { role: "slider", "aria-label": e["aria-label"] || h, "aria-valuemin": r.min, "aria-valuenow": v, "aria-valuemax": r.max, "aria-orientation": r.orientation, "data-orientation": r.orientation, "data-disabled": r.disabled ? "" : void 0, tabIndex: r.disabled ? void 0 : 0, ...a, ref: w, style: v === void 0 ? { display: "none" } : e.style, onFocus: C(e.onFocus, () => {
    r.valueIndexToChangeRef.current = o;
  }) }) }), s && d.jsx(ye, { name: i ?? (r.name ? r.name + (r.values.length > 1 ? "[]" : "") : void 0), form: r.form, value: v }, o)] });
});
oe.displayName = O;
var ye = (e) => {
  const { value: t, ...n } = e, o = l.useRef(null), i = pe(t);
  return l.useEffect(() => {
    const a = o.current, r = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(r, "value").set;
    if (i !== t && u) {
      const g = new Event("input", { bubbles: true });
      u.call(a, t), a.dispatchEvent(g);
    }
  }, [i, t]), d.jsx("input", { style: { display: "none" }, ...n, ref: o, defaultValue: t });
};
function Pe(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((i, a) => i - a);
}
function re(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Y(a, [0, 100]);
}
function Re(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function De(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((i) => Math.abs(i - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function Ee(e, t, n) {
  const o = e / 2, a = L([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function Ce(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Me(e, t) {
  if (t > 0) {
    const n = Ce(e);
    return Math.min(...n) >= t;
  }
  return true;
}
function L(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function _e(e) {
  return (String(e).split(".")[1] || "").length;
}
function je(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var ie = q, Ke = te, Ae = ne, Ie = oe;
const Ve = l.forwardRef(({ className: e, ...t }, n) => d.jsxs(ie, { ref: n, className: fe("relative flex w-full touch-none select-none items-center", e), ...t, children: [d.jsx(Ke, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: d.jsx(Ae, { className: "absolute h-full bg-primary" }) }), d.jsx(Ie, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })] }));
Ve.displayName = ie.displayName;
export {
  Ve as S
};
