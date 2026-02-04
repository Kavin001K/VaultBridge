const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es-BzY8SKgb.js","assets/index-C6yyIA9d.js","assets/index-DngfvkGO.css","assets/input-BshbKBn-.js","assets/clock-BtX6r9C1.js","assets/browser-gjyt7kQ7.js","assets/share-2-5X_qqV6Z.js","assets/file-text-1AGBaxeP.js","assets/downloadStream-BkUhfvn2.js","assets/triangle-alert-ZKt9ntTe.js","assets/download-C6YedVRM.js","assets/hard-drive-B2R_6qSM.js","assets/arrow-left-BQHktBRJ.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { c as Rc, r as oe, R as Dd, x as Bd, y as qa, z as Ei, j as P, P as Br, D as Oc, F as Ju, G as wt, H as Zu, I as Qu, J as ef, M as qd, N as Ud, O as ss, Q as zd, U as Hd, V as Wd, W as Gd, Y as Vd, _ as Kd, $ as tf, a0 as si, a1 as Go, u as nf, a2 as $d, a3 as Yd, m as On, C as rf, a4 as El, B as ii, a5 as Xd, T as Jd, a6 as af, a7 as Zd, b as Qd, a as e1, a8 as t1, a9 as n1, aa as r1, e as $i, L as Vs, A as Ks, S as i1, K as a1, g as Io, Z as o1, h as s1, ab as c1, ac as l1, ad as u1, ae as f1, __tla as __tla_0 } from "./index-C6yyIA9d.js";
import { I as h1 } from "./input-BshbKBn-.js";
import { C as d1, a as p1 } from "./clock-BtX6r9C1.js";
import { a as Nc } from "./browser-gjyt7kQ7.js";
import { S as m1 } from "./share-2-5X_qqV6Z.js";
import { F as _c } from "./file-text-1AGBaxeP.js";
import { i as g1 } from "./downloadStream-BkUhfvn2.js";
import { T as Il } from "./triangle-alert-ZKt9ntTe.js";
import { D as jo } from "./download-C6YedVRM.js";
import { H as v1 } from "./hard-drive-B2R_6qSM.js";
import { A as b1 } from "./arrow-left-BQHktBRJ.js";
let St, zm;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const w1 = Rc("ChevronRight", [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ]);
  const y1 = Rc("Circle", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ]
  ]);
  const x1 = Rc("FileType", [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
      }
    ],
    [
      "path",
      {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
      }
    ],
    [
      "path",
      {
        d: "M9 13v-1h6v1",
        key: "1bb014"
      }
    ],
    [
      "path",
      {
        d: "M12 12v6",
        key: "3ahymv"
      }
    ],
    [
      "path",
      {
        d: "M11 18h2",
        key: "12mj7e"
      }
    ]
  ]);
  var N1 = Dd[" useId ".trim().toString()] || (() => {
  }), _1 = 0;
  function Ac(n) {
    const [e, t] = oe.useState(N1());
    return Bd(() => {
      t((r) => r ?? String(_1++));
    }, [
      n
    ]), n || (e ? `radix-${e}` : "");
  }
  var $s = 0;
  function A1() {
    oe.useEffect(() => {
      const n = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", n[0] ?? jl()), document.body.insertAdjacentElement("beforeend", n[1] ?? jl()), $s++, () => {
        $s === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), $s--;
      };
    }, []);
  }
  function jl() {
    const n = document.createElement("span");
    return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
  }
  var Ys = "focusScope.autoFocusOnMount", Xs = "focusScope.autoFocusOnUnmount", Fl = {
    bubbles: false,
    cancelable: true
  }, S1 = "FocusScope", of = oe.forwardRef((n, e) => {
    const { loop: t = false, trapped: r = false, onMountAutoFocus: o, onUnmountAutoFocus: a, ...f } = n, [c, u] = oe.useState(null), d = qa(o), m = qa(a), w = oe.useRef(null), S = Ei(e, (L) => u(L)), p = oe.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    oe.useEffect(() => {
      if (r) {
        let L = function(G) {
          if (p.paused || !c) return;
          const D = G.target;
          c.contains(D) ? w.current = D : ri(w.current, {
            select: true
          });
        }, j = function(G) {
          if (p.paused || !c) return;
          const D = G.relatedTarget;
          D !== null && (c.contains(D) || ri(w.current, {
            select: true
          }));
        }, N = function(G) {
          if (document.activeElement === document.body) for (const ae of G) ae.removedNodes.length > 0 && ri(c);
        };
        document.addEventListener("focusin", L), document.addEventListener("focusout", j);
        const z = new MutationObserver(N);
        return c && z.observe(c, {
          childList: true,
          subtree: true
        }), () => {
          document.removeEventListener("focusin", L), document.removeEventListener("focusout", j), z.disconnect();
        };
      }
    }, [
      r,
      c,
      p.paused
    ]), oe.useEffect(() => {
      if (c) {
        Rl.add(p);
        const L = document.activeElement;
        if (!c.contains(L)) {
          const N = new CustomEvent(Ys, Fl);
          c.addEventListener(Ys, d), c.dispatchEvent(N), N.defaultPrevented || (L1(I1(sf(c)), {
            select: true
          }), document.activeElement === L && ri(c));
        }
        return () => {
          c.removeEventListener(Ys, d), setTimeout(() => {
            const N = new CustomEvent(Xs, Fl);
            c.addEventListener(Xs, m), c.dispatchEvent(N), N.defaultPrevented || ri(L ?? document.body, {
              select: true
            }), c.removeEventListener(Xs, m), Rl.remove(p);
          }, 0);
        };
      }
    }, [
      c,
      d,
      m,
      p
    ]);
    const E = oe.useCallback((L) => {
      if (!t && !r || p.paused) return;
      const j = L.key === "Tab" && !L.altKey && !L.ctrlKey && !L.metaKey, N = document.activeElement;
      if (j && N) {
        const z = L.currentTarget, [G, D] = k1(z);
        G && D ? !L.shiftKey && N === D ? (L.preventDefault(), t && ri(G, {
          select: true
        })) : L.shiftKey && N === G && (L.preventDefault(), t && ri(D, {
          select: true
        })) : N === z && L.preventDefault();
      }
    }, [
      t,
      r,
      p.paused
    ]);
    return P.jsx(Br.div, {
      tabIndex: -1,
      ...f,
      ref: S,
      onKeyDown: E
    });
  });
  of.displayName = S1;
  function L1(n, { select: e = false } = {}) {
    const t = document.activeElement;
    for (const r of n) if (ri(r, {
      select: e
    }), document.activeElement !== t) return;
  }
  function k1(n) {
    const e = sf(n), t = Ml(e, n), r = Ml(e.reverse(), n);
    return [
      t,
      r
    ];
  }
  function sf(n) {
    const e = [], t = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; t.nextNode(); ) e.push(t.currentNode);
    return e;
  }
  function Ml(n, e) {
    for (const t of n) if (!C1(t, {
      upTo: e
    })) return t;
  }
  function C1(n, { upTo: e }) {
    if (getComputedStyle(n).visibility === "hidden") return true;
    for (; n; ) {
      if (e !== void 0 && n === e) return false;
      if (getComputedStyle(n).display === "none") return true;
      n = n.parentElement;
    }
    return false;
  }
  function P1(n) {
    return n instanceof HTMLInputElement && "select" in n;
  }
  function ri(n, { select: e = false } = {}) {
    if (n && n.focus) {
      const t = document.activeElement;
      n.focus({
        preventScroll: true
      }), n !== t && P1(n) && e && n.select();
    }
  }
  var Rl = E1();
  function E1() {
    let n = [];
    return {
      add(e) {
        const t = n[0];
        e !== t && (t == null ? void 0 : t.pause()), n = Ol(n, e), n.unshift(e);
      },
      remove(e) {
        var _a;
        n = Ol(n, e), (_a = n[0]) == null ? void 0 : _a.resume();
      }
    };
  }
  function Ol(n, e) {
    const t = [
      ...n
    ], r = t.indexOf(e);
    return r !== -1 && t.splice(r, 1), t;
  }
  function I1(n) {
    return n.filter((e) => e.tagName !== "A");
  }
  var Js = "rovingFocusGroup.onEntryFocus", j1 = {
    bubbles: false,
    cancelable: true
  }, cs = "RovingFocusGroup", [Sc, cf, F1] = Ju(cs), [M1, lf] = Oc(cs, [
    F1
  ]), [R1, O1] = M1(cs), uf = oe.forwardRef((n, e) => P.jsx(Sc.Provider, {
    scope: n.__scopeRovingFocusGroup,
    children: P.jsx(Sc.Slot, {
      scope: n.__scopeRovingFocusGroup,
      children: P.jsx(T1, {
        ...n,
        ref: e
      })
    })
  }));
  uf.displayName = cs;
  var T1 = oe.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, orientation: r, loop: o = false, dir: a, currentTabStopId: f, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: u, onEntryFocus: d, preventScrollOnEntryFocus: m = false, ...w } = n, S = oe.useRef(null), p = Ei(e, S), E = Zu(a), [L = null, j] = Qu({
      prop: f,
      defaultProp: c,
      onChange: u
    }), [N, z] = oe.useState(false), G = qa(d), D = cf(t), ae = oe.useRef(false), [be, he] = oe.useState(0);
    return oe.useEffect(() => {
      const J = S.current;
      if (J) return J.addEventListener(Js, G), () => J.removeEventListener(Js, G);
    }, [
      G
    ]), P.jsx(R1, {
      scope: t,
      orientation: r,
      dir: E,
      loop: o,
      currentTabStopId: L,
      onItemFocus: oe.useCallback((J) => j(J), [
        j
      ]),
      onItemShiftTab: oe.useCallback(() => z(true), []),
      onFocusableItemAdd: oe.useCallback(() => he((J) => J + 1), []),
      onFocusableItemRemove: oe.useCallback(() => he((J) => J - 1), []),
      children: P.jsx(Br.div, {
        tabIndex: N || be === 0 ? -1 : 0,
        "data-orientation": r,
        ...w,
        ref: p,
        style: {
          outline: "none",
          ...n.style
        },
        onMouseDown: wt(n.onMouseDown, () => {
          ae.current = true;
        }),
        onFocus: wt(n.onFocus, (J) => {
          const H = !ae.current;
          if (J.target === J.currentTarget && H && !N) {
            const V = new CustomEvent(Js, j1);
            if (J.currentTarget.dispatchEvent(V), !V.defaultPrevented) {
              const x = D().filter((le) => le.focusable), I = x.find((le) => le.active), B = x.find((le) => le.id === L), se = [
                I,
                B,
                ...x
              ].filter(Boolean).map((le) => le.ref.current);
              df(se, m);
            }
          }
          ae.current = false;
        }),
        onBlur: wt(n.onBlur, () => z(false))
      })
    });
  }), ff = "RovingFocusGroupItem", hf = oe.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, focusable: r = true, active: o = false, tabStopId: a, ...f } = n, c = Ac(), u = a || c, d = O1(ff, t), m = d.currentTabStopId === u, w = cf(t), { onFocusableItemAdd: S, onFocusableItemRemove: p } = d;
    return oe.useEffect(() => {
      if (r) return S(), () => p();
    }, [
      r,
      S,
      p
    ]), P.jsx(Sc.ItemSlot, {
      scope: t,
      id: u,
      focusable: r,
      active: o,
      children: P.jsx(Br.span, {
        tabIndex: m ? 0 : -1,
        "data-orientation": d.orientation,
        ...f,
        ref: e,
        onMouseDown: wt(n.onMouseDown, (E) => {
          r ? d.onItemFocus(u) : E.preventDefault();
        }),
        onFocus: wt(n.onFocus, () => d.onItemFocus(u)),
        onKeyDown: wt(n.onKeyDown, (E) => {
          if (E.key === "Tab" && E.shiftKey) {
            d.onItemShiftTab();
            return;
          }
          if (E.target !== E.currentTarget) return;
          const L = q1(E, d.orientation, d.dir);
          if (L !== void 0) {
            if (E.metaKey || E.ctrlKey || E.altKey || E.shiftKey) return;
            E.preventDefault();
            let N = w().filter((z) => z.focusable).map((z) => z.ref.current);
            if (L === "last") N.reverse();
            else if (L === "prev" || L === "next") {
              L === "prev" && N.reverse();
              const z = N.indexOf(E.currentTarget);
              N = d.loop ? U1(N, z + 1) : N.slice(z + 1);
            }
            setTimeout(() => df(N));
          }
        })
      })
    });
  });
  hf.displayName = ff;
  var D1 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function B1(n, e) {
    return e !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
  }
  function q1(n, e, t) {
    const r = B1(n.key, t);
    if (!(e === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(r)) && !(e === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(r))) return D1[r];
  }
  function df(n, e = false) {
    const t = document.activeElement;
    for (const r of n) if (r === t || (r.focus({
      preventScroll: e
    }), document.activeElement !== t)) return;
  }
  function U1(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  var z1 = uf, H1 = hf, W1 = function(n) {
    if (typeof document > "u") return null;
    var e = Array.isArray(n) ? n[0] : n;
    return e.ownerDocument.body;
  }, Yi = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Mo = {}, Zs = 0, pf = function(n) {
    return n && (n.host || pf(n.parentNode));
  }, G1 = function(n, e) {
    return e.map(function(t) {
      if (n.contains(t)) return t;
      var r = pf(t);
      return r && n.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", n, ". Doing nothing"), null);
    }).filter(function(t) {
      return !!t;
    });
  }, V1 = function(n, e, t, r) {
    var o = G1(e, Array.isArray(n) ? n : [
      n
    ]);
    Mo[t] || (Mo[t] = /* @__PURE__ */ new WeakMap());
    var a = Mo[t], f = [], c = /* @__PURE__ */ new Set(), u = new Set(o), d = function(w) {
      !w || c.has(w) || (c.add(w), d(w.parentNode));
    };
    o.forEach(d);
    var m = function(w) {
      !w || u.has(w) || Array.prototype.forEach.call(w.children, function(S) {
        if (c.has(S)) m(S);
        else try {
          var p = S.getAttribute(r), E = p !== null && p !== "false", L = (Yi.get(S) || 0) + 1, j = (a.get(S) || 0) + 1;
          Yi.set(S, L), a.set(S, j), f.push(S), L === 1 && E && Fo.set(S, true), j === 1 && S.setAttribute(t, "true"), E || S.setAttribute(r, "true");
        } catch (N) {
          console.error("aria-hidden: cannot operate on ", S, N);
        }
      });
    };
    return m(e), c.clear(), Zs++, function() {
      f.forEach(function(w) {
        var S = Yi.get(w) - 1, p = a.get(w) - 1;
        Yi.set(w, S), a.set(w, p), S || (Fo.has(w) || w.removeAttribute(r), Fo.delete(w)), p || w.removeAttribute(t);
      }), Zs--, Zs || (Yi = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Mo = {});
    };
  }, K1 = function(n, e, t) {
    t === void 0 && (t = "data-aria-hidden");
    var r = Array.from(Array.isArray(n) ? n : [
      n
    ]), o = W1(n);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), V1(r, o, t, "aria-hidden")) : function() {
      return null;
    };
  }, gr = function() {
    return gr = Object.assign || function(e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      }
      return e;
    }, gr.apply(this, arguments);
  };
  function mf(n, e) {
    var t = {};
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (t[r[o]] = n[r[o]]);
    return t;
  }
  function $1(n, e, t) {
    if (t || arguments.length === 2) for (var r = 0, o = e.length, a; r < o; r++) (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
    return n.concat(a || Array.prototype.slice.call(e));
  }
  var Vo = "right-scroll-bar-position", Ko = "width-before-scroll-bar", Y1 = "with-scroll-bars-hidden", X1 = "--removed-body-scroll-bar-size";
  function Qs(n, e) {
    return typeof n == "function" ? n(e) : n && (n.current = e), n;
  }
  function J1(n, e) {
    var t = oe.useState(function() {
      return {
        value: n,
        callback: e,
        facade: {
          get current() {
            return t.value;
          },
          set current(r) {
            var o = t.value;
            o !== r && (t.value = r, t.callback(r, o));
          }
        }
      };
    })[0];
    return t.callback = e, t.facade;
  }
  var Z1 = typeof window < "u" ? oe.useLayoutEffect : oe.useEffect, Tl = /* @__PURE__ */ new WeakMap();
  function Q1(n, e) {
    var t = J1(null, function(r) {
      return n.forEach(function(o) {
        return Qs(o, r);
      });
    });
    return Z1(function() {
      var r = Tl.get(t);
      if (r) {
        var o = new Set(r), a = new Set(n), f = t.current;
        o.forEach(function(c) {
          a.has(c) || Qs(c, null);
        }), a.forEach(function(c) {
          o.has(c) || Qs(c, f);
        });
      }
      Tl.set(t, n);
    }, [
      n
    ]), t;
  }
  function e2(n) {
    return n;
  }
  function t2(n, e) {
    e === void 0 && (e = e2);
    var t = [], r = false, o = {
      read: function() {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return t.length ? t[t.length - 1] : n;
      },
      useMedium: function(a) {
        var f = e(a, r);
        return t.push(f), function() {
          t = t.filter(function(c) {
            return c !== f;
          });
        };
      },
      assignSyncMedium: function(a) {
        for (r = true; t.length; ) {
          var f = t;
          t = [], f.forEach(a);
        }
        t = {
          push: function(c) {
            return a(c);
          },
          filter: function() {
            return t;
          }
        };
      },
      assignMedium: function(a) {
        r = true;
        var f = [];
        if (t.length) {
          var c = t;
          t = [], c.forEach(a), f = t;
        }
        var u = function() {
          var m = f;
          f = [], m.forEach(a);
        }, d = function() {
          return Promise.resolve().then(u);
        };
        d(), t = {
          push: function(m) {
            f.push(m), d();
          },
          filter: function(m) {
            return f = f.filter(m), t;
          }
        };
      }
    };
    return o;
  }
  function n2(n) {
    n === void 0 && (n = {});
    var e = t2(null);
    return e.options = gr({
      async: true,
      ssr: false
    }, n), e;
  }
  var gf = function(n) {
    var e = n.sideCar, t = mf(n, [
      "sideCar"
    ]);
    if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = e.read();
    if (!r) throw new Error("Sidecar medium not found");
    return oe.createElement(r, gr({}, t));
  };
  gf.isSideCarExport = true;
  function r2(n, e) {
    return n.useMedium(e), gf;
  }
  var vf = n2(), ec = function() {
  }, ls = oe.forwardRef(function(n, e) {
    var t = oe.useRef(null), r = oe.useState({
      onScrollCapture: ec,
      onWheelCapture: ec,
      onTouchMoveCapture: ec
    }), o = r[0], a = r[1], f = n.forwardProps, c = n.children, u = n.className, d = n.removeScrollBar, m = n.enabled, w = n.shards, S = n.sideCar, p = n.noIsolation, E = n.inert, L = n.allowPinchZoom, j = n.as, N = j === void 0 ? "div" : j, z = n.gapMode, G = mf(n, [
      "forwardProps",
      "children",
      "className",
      "removeScrollBar",
      "enabled",
      "shards",
      "sideCar",
      "noIsolation",
      "inert",
      "allowPinchZoom",
      "as",
      "gapMode"
    ]), D = S, ae = Q1([
      t,
      e
    ]), be = gr(gr({}, G), o);
    return oe.createElement(oe.Fragment, null, m && oe.createElement(D, {
      sideCar: vf,
      removeScrollBar: d,
      shards: w,
      noIsolation: p,
      inert: E,
      setCallbacks: a,
      allowPinchZoom: !!L,
      lockRef: t,
      gapMode: z
    }), f ? oe.cloneElement(oe.Children.only(c), gr(gr({}, be), {
      ref: ae
    })) : oe.createElement(N, gr({}, be, {
      className: u,
      ref: ae
    }), c));
  });
  ls.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  ls.classNames = {
    fullWidth: Ko,
    zeroRight: Vo
  };
  var i2 = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function a2() {
    if (!document) return null;
    var n = document.createElement("style");
    n.type = "text/css";
    var e = i2();
    return e && n.setAttribute("nonce", e), n;
  }
  function o2(n, e) {
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
  function s2(n) {
    var e = document.head || document.getElementsByTagName("head")[0];
    e.appendChild(n);
  }
  var c2 = function() {
    var n = 0, e = null;
    return {
      add: function(t) {
        n == 0 && (e = a2()) && (o2(e, t), s2(e)), n++;
      },
      remove: function() {
        n--, !n && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
      }
    };
  }, l2 = function() {
    var n = c2();
    return function(e, t) {
      oe.useEffect(function() {
        return n.add(e), function() {
          n.remove();
        };
      }, [
        e && t
      ]);
    };
  }, bf = function() {
    var n = l2(), e = function(t) {
      var r = t.styles, o = t.dynamic;
      return n(r, o), null;
    };
    return e;
  }, u2 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  }, tc = function(n) {
    return parseInt(n || "", 10) || 0;
  }, f2 = function(n) {
    var e = window.getComputedStyle(document.body), t = e[n === "padding" ? "paddingLeft" : "marginLeft"], r = e[n === "padding" ? "paddingTop" : "marginTop"], o = e[n === "padding" ? "paddingRight" : "marginRight"];
    return [
      tc(t),
      tc(r),
      tc(o)
    ];
  }, h2 = function(n) {
    if (n === void 0 && (n = "margin"), typeof window > "u") return u2;
    var e = f2(n), t = document.documentElement.clientWidth, r = window.innerWidth;
    return {
      left: e[0],
      top: e[1],
      right: e[2],
      gap: Math.max(0, r - t + e[2] - e[0])
    };
  }, d2 = bf(), ia = "data-scroll-locked", p2 = function(n, e, t, r) {
    var o = n.left, a = n.top, f = n.right, c = n.gap;
    return t === void 0 && (t = "margin"), `
  .`.concat(Y1, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(ia, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
      e && "position: relative ".concat(r, ";"),
      t === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
      t === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
    ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vo, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Ko, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Vo, " .").concat(Vo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ko, " .").concat(Ko, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ia, `] {
    `).concat(X1, ": ").concat(c, `px;
  }
`);
  }, Dl = function() {
    var n = parseInt(document.body.getAttribute(ia) || "0", 10);
    return isFinite(n) ? n : 0;
  }, m2 = function() {
    oe.useEffect(function() {
      return document.body.setAttribute(ia, (Dl() + 1).toString()), function() {
        var n = Dl() - 1;
        n <= 0 ? document.body.removeAttribute(ia) : document.body.setAttribute(ia, n.toString());
      };
    }, []);
  }, g2 = function(n) {
    var e = n.noRelative, t = n.noImportant, r = n.gapMode, o = r === void 0 ? "margin" : r;
    m2();
    var a = oe.useMemo(function() {
      return h2(o);
    }, [
      o
    ]);
    return oe.createElement(d2, {
      styles: p2(a, !e, o, t ? "" : "!important")
    });
  }, Lc = false;
  if (typeof window < "u") try {
    var Ro = Object.defineProperty({}, "passive", {
      get: function() {
        return Lc = true, true;
      }
    });
    window.addEventListener("test", Ro, Ro), window.removeEventListener("test", Ro, Ro);
  } catch {
    Lc = false;
  }
  var Xi = Lc ? {
    passive: false
  } : false, v2 = function(n) {
    return n.tagName === "TEXTAREA";
  }, wf = function(n, e) {
    if (!(n instanceof Element)) return false;
    var t = window.getComputedStyle(n);
    return t[e] !== "hidden" && !(t.overflowY === t.overflowX && !v2(n) && t[e] === "visible");
  }, b2 = function(n) {
    return wf(n, "overflowY");
  }, w2 = function(n) {
    return wf(n, "overflowX");
  }, Bl = function(n, e) {
    var t = e.ownerDocument, r = e;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = yf(n, r);
      if (o) {
        var a = xf(n, r), f = a[1], c = a[2];
        if (f > c) return true;
      }
      r = r.parentNode;
    } while (r && r !== t.body);
    return false;
  }, y2 = function(n) {
    var e = n.scrollTop, t = n.scrollHeight, r = n.clientHeight;
    return [
      e,
      t,
      r
    ];
  }, x2 = function(n) {
    var e = n.scrollLeft, t = n.scrollWidth, r = n.clientWidth;
    return [
      e,
      t,
      r
    ];
  }, yf = function(n, e) {
    return n === "v" ? b2(e) : w2(e);
  }, xf = function(n, e) {
    return n === "v" ? y2(e) : x2(e);
  }, N2 = function(n, e) {
    return n === "h" && e === "rtl" ? -1 : 1;
  }, _2 = function(n, e, t, r, o) {
    var a = N2(n, window.getComputedStyle(e).direction), f = a * r, c = t.target, u = e.contains(c), d = false, m = f > 0, w = 0, S = 0;
    do {
      var p = xf(n, c), E = p[0], L = p[1], j = p[2], N = L - j - a * E;
      (E || N) && yf(n, c) && (w += N, S += E), c instanceof ShadowRoot ? c = c.host : c = c.parentNode;
    } while (!u && c !== document.body || u && (e.contains(c) || e === c));
    return (m && Math.abs(w) < 1 || !m && Math.abs(S) < 1) && (d = true), d;
  }, Oo = function(n) {
    return "changedTouches" in n ? [
      n.changedTouches[0].clientX,
      n.changedTouches[0].clientY
    ] : [
      0,
      0
    ];
  }, ql = function(n) {
    return [
      n.deltaX,
      n.deltaY
    ];
  }, Ul = function(n) {
    return n && "current" in n ? n.current : n;
  }, A2 = function(n, e) {
    return n[0] === e[0] && n[1] === e[1];
  }, S2 = function(n) {
    return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
  }, L2 = 0, Ji = [];
  function k2(n) {
    var e = oe.useRef([]), t = oe.useRef([
      0,
      0
    ]), r = oe.useRef(), o = oe.useState(L2++)[0], a = oe.useState(bf)[0], f = oe.useRef(n);
    oe.useEffect(function() {
      f.current = n;
    }, [
      n
    ]), oe.useEffect(function() {
      if (n.inert) {
        document.body.classList.add("block-interactivity-".concat(o));
        var L = $1([
          n.lockRef.current
        ], (n.shards || []).map(Ul), true).filter(Boolean);
        return L.forEach(function(j) {
          return j.classList.add("allow-interactivity-".concat(o));
        }), function() {
          document.body.classList.remove("block-interactivity-".concat(o)), L.forEach(function(j) {
            return j.classList.remove("allow-interactivity-".concat(o));
          });
        };
      }
    }, [
      n.inert,
      n.lockRef.current,
      n.shards
    ]);
    var c = oe.useCallback(function(L, j) {
      if ("touches" in L && L.touches.length === 2 || L.type === "wheel" && L.ctrlKey) return !f.current.allowPinchZoom;
      var N = Oo(L), z = t.current, G = "deltaX" in L ? L.deltaX : z[0] - N[0], D = "deltaY" in L ? L.deltaY : z[1] - N[1], ae, be = L.target, he = Math.abs(G) > Math.abs(D) ? "h" : "v";
      if ("touches" in L && he === "h" && be.type === "range") return false;
      var J = Bl(he, be);
      if (!J) return true;
      if (J ? ae = he : (ae = he === "v" ? "h" : "v", J = Bl(he, be)), !J) return false;
      if (!r.current && "changedTouches" in L && (G || D) && (r.current = ae), !ae) return true;
      var H = r.current || ae;
      return _2(H, j, L, H === "h" ? G : D);
    }, []), u = oe.useCallback(function(L) {
      var j = L;
      if (!(!Ji.length || Ji[Ji.length - 1] !== a)) {
        var N = "deltaY" in j ? ql(j) : Oo(j), z = e.current.filter(function(ae) {
          return ae.name === j.type && (ae.target === j.target || j.target === ae.shadowParent) && A2(ae.delta, N);
        })[0];
        if (z && z.should) {
          j.cancelable && j.preventDefault();
          return;
        }
        if (!z) {
          var G = (f.current.shards || []).map(Ul).filter(Boolean).filter(function(ae) {
            return ae.contains(j.target);
          }), D = G.length > 0 ? c(j, G[0]) : !f.current.noIsolation;
          D && j.cancelable && j.preventDefault();
        }
      }
    }, []), d = oe.useCallback(function(L, j, N, z) {
      var G = {
        name: L,
        delta: j,
        target: N,
        should: z,
        shadowParent: C2(N)
      };
      e.current.push(G), setTimeout(function() {
        e.current = e.current.filter(function(D) {
          return D !== G;
        });
      }, 1);
    }, []), m = oe.useCallback(function(L) {
      t.current = Oo(L), r.current = void 0;
    }, []), w = oe.useCallback(function(L) {
      d(L.type, ql(L), L.target, c(L, n.lockRef.current));
    }, []), S = oe.useCallback(function(L) {
      d(L.type, Oo(L), L.target, c(L, n.lockRef.current));
    }, []);
    oe.useEffect(function() {
      return Ji.push(a), n.setCallbacks({
        onScrollCapture: w,
        onWheelCapture: w,
        onTouchMoveCapture: S
      }), document.addEventListener("wheel", u, Xi), document.addEventListener("touchmove", u, Xi), document.addEventListener("touchstart", m, Xi), function() {
        Ji = Ji.filter(function(L) {
          return L !== a;
        }), document.removeEventListener("wheel", u, Xi), document.removeEventListener("touchmove", u, Xi), document.removeEventListener("touchstart", m, Xi);
      };
    }, []);
    var p = n.removeScrollBar, E = n.inert;
    return oe.createElement(oe.Fragment, null, E ? oe.createElement(a, {
      styles: S2(o)
    }) : null, p ? oe.createElement(g2, {
      gapMode: n.gapMode
    }) : null);
  }
  function C2(n) {
    for (var e = null; n !== null; ) n instanceof ShadowRoot && (e = n.host, n = n.host), n = n.parentNode;
    return e;
  }
  const P2 = r2(vf, k2);
  var Nf = oe.forwardRef(function(n, e) {
    return oe.createElement(ls, gr({}, n, {
      ref: e,
      sideCar: P2
    }));
  });
  Nf.classNames = ls.classNames;
  var kc = [
    "Enter",
    " "
  ], E2 = [
    "ArrowDown",
    "PageUp",
    "Home"
  ], _f = [
    "ArrowUp",
    "PageDown",
    "End"
  ], I2 = [
    ...E2,
    ..._f
  ], j2 = {
    ltr: [
      ...kc,
      "ArrowRight"
    ],
    rtl: [
      ...kc,
      "ArrowLeft"
    ]
  }, F2 = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  }, Ga = "Menu", [Ua, M2, R2] = Ju(Ga), [Ii, Af] = Oc(Ga, [
    R2,
    ef,
    lf
  ]), us = ef(), Sf = lf(), [O2, ji] = Ii(Ga), [T2, Va] = Ii(Ga), Lf = (n) => {
    const { __scopeMenu: e, open: t = false, children: r, dir: o, onOpenChange: a, modal: f = true } = n, c = us(e), [u, d] = oe.useState(null), m = oe.useRef(false), w = qa(a), S = Zu(o);
    return oe.useEffect(() => {
      const p = () => {
        m.current = true, document.addEventListener("pointerdown", E, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", E, {
          capture: true,
          once: true
        });
      }, E = () => m.current = false;
      return document.addEventListener("keydown", p, {
        capture: true
      }), () => {
        document.removeEventListener("keydown", p, {
          capture: true
        }), document.removeEventListener("pointerdown", E, {
          capture: true
        }), document.removeEventListener("pointermove", E, {
          capture: true
        });
      };
    }, []), P.jsx(qd, {
      ...c,
      children: P.jsx(O2, {
        scope: e,
        open: t,
        onOpenChange: w,
        content: u,
        onContentChange: d,
        children: P.jsx(T2, {
          scope: e,
          onClose: oe.useCallback(() => w(false), [
            w
          ]),
          isUsingKeyboardRef: m,
          dir: S,
          modal: f,
          children: r
        })
      })
    });
  };
  Lf.displayName = Ga;
  var D2 = "MenuAnchor", Tc = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, o = us(t);
    return P.jsx(Ud, {
      ...o,
      ...r,
      ref: e
    });
  });
  Tc.displayName = D2;
  var Dc = "MenuPortal", [B2, kf] = Ii(Dc, {
    forceMount: void 0
  }), Cf = (n) => {
    const { __scopeMenu: e, forceMount: t, children: r, container: o } = n, a = ji(Dc, e);
    return P.jsx(B2, {
      scope: e,
      forceMount: t,
      children: P.jsx(ss, {
        present: t || a.open,
        children: P.jsx(zd, {
          asChild: true,
          container: o,
          children: r
        })
      })
    });
  };
  Cf.displayName = Dc;
  var Vn = "MenuContent", [q2, Bc] = Ii(Vn), Pf = oe.forwardRef((n, e) => {
    const t = kf(Vn, n.__scopeMenu), { forceMount: r = t.forceMount, ...o } = n, a = ji(Vn, n.__scopeMenu), f = Va(Vn, n.__scopeMenu);
    return P.jsx(Ua.Provider, {
      scope: n.__scopeMenu,
      children: P.jsx(ss, {
        present: r || a.open,
        children: P.jsx(Ua.Slot, {
          scope: n.__scopeMenu,
          children: f.modal ? P.jsx(U2, {
            ...o,
            ref: e
          }) : P.jsx(z2, {
            ...o,
            ref: e
          })
        })
      })
    });
  }), U2 = oe.forwardRef((n, e) => {
    const t = ji(Vn, n.__scopeMenu), r = oe.useRef(null), o = Ei(e, r);
    return oe.useEffect(() => {
      const a = r.current;
      if (a) return K1(a);
    }, []), P.jsx(qc, {
      ...n,
      ref: o,
      trapFocus: t.open,
      disableOutsidePointerEvents: t.open,
      disableOutsideScroll: true,
      onFocusOutside: wt(n.onFocusOutside, (a) => a.preventDefault(), {
        checkForDefaultPrevented: false
      }),
      onDismiss: () => t.onOpenChange(false)
    });
  }), z2 = oe.forwardRef((n, e) => {
    const t = ji(Vn, n.__scopeMenu);
    return P.jsx(qc, {
      ...n,
      ref: e,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => t.onOpenChange(false)
    });
  }), H2 = Wd("MenuContent.ScrollLock"), qc = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, loop: r = false, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: f, disableOutsidePointerEvents: c, onEntryFocus: u, onEscapeKeyDown: d, onPointerDownOutside: m, onFocusOutside: w, onInteractOutside: S, onDismiss: p, disableOutsideScroll: E, ...L } = n, j = ji(Vn, t), N = Va(Vn, t), z = us(t), G = Sf(t), D = M2(t), [ae, be] = oe.useState(null), he = oe.useRef(null), J = Ei(e, he, j.onContentChange), H = oe.useRef(0), V = oe.useRef(""), x = oe.useRef(0), I = oe.useRef(null), B = oe.useRef("right"), U = oe.useRef(0), se = E ? Nf : oe.Fragment, le = E ? {
      as: H2,
      allowPinchZoom: true
    } : void 0, ge = (te) => {
      var _a, _b;
      const Ae = V.current + te, we = D().filter((Q) => !Q.disabled), A = document.activeElement, T = (_a = we.find((Q) => Q.ref.current === A)) == null ? void 0 : _a.textValue, q = we.map((Q) => Q.textValue), $ = t0(q, Ae, T), Y = (_b = we.find((Q) => Q.textValue === $)) == null ? void 0 : _b.ref.current;
      (function Q(ce) {
        V.current = ce, window.clearTimeout(H.current), ce !== "" && (H.current = window.setTimeout(() => Q(""), 1e3));
      })(Ae), Y && setTimeout(() => Y.focus());
    };
    oe.useEffect(() => () => window.clearTimeout(H.current), []), A1();
    const ne = oe.useCallback((te) => {
      var _a, _b;
      return B.current === ((_a = I.current) == null ? void 0 : _a.side) && r0(te, (_b = I.current) == null ? void 0 : _b.area);
    }, []);
    return P.jsx(q2, {
      scope: t,
      searchRef: V,
      onItemEnter: oe.useCallback((te) => {
        ne(te) && te.preventDefault();
      }, [
        ne
      ]),
      onItemLeave: oe.useCallback((te) => {
        var _a;
        ne(te) || ((_a = he.current) == null ? void 0 : _a.focus(), be(null));
      }, [
        ne
      ]),
      onTriggerLeave: oe.useCallback((te) => {
        ne(te) && te.preventDefault();
      }, [
        ne
      ]),
      pointerGraceTimerRef: x,
      onPointerGraceIntentChange: oe.useCallback((te) => {
        I.current = te;
      }, []),
      children: P.jsx(se, {
        ...le,
        children: P.jsx(of, {
          asChild: true,
          trapped: o,
          onMountAutoFocus: wt(a, (te) => {
            var _a;
            te.preventDefault(), (_a = he.current) == null ? void 0 : _a.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: f,
          children: P.jsx(Gd, {
            asChild: true,
            disableOutsidePointerEvents: c,
            onEscapeKeyDown: d,
            onPointerDownOutside: m,
            onFocusOutside: w,
            onInteractOutside: S,
            onDismiss: p,
            children: P.jsx(z1, {
              asChild: true,
              ...G,
              dir: N.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: ae,
              onCurrentTabStopIdChange: be,
              onEntryFocus: wt(u, (te) => {
                N.isUsingKeyboardRef.current || te.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: P.jsx(Vd, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Gf(j.open),
                "data-radix-menu-content": "",
                dir: N.dir,
                ...z,
                ...L,
                ref: J,
                style: {
                  outline: "none",
                  ...L.style
                },
                onKeyDown: wt(L.onKeyDown, (te) => {
                  const we = te.target.closest("[data-radix-menu-content]") === te.currentTarget, A = te.ctrlKey || te.altKey || te.metaKey, T = te.key.length === 1;
                  we && (te.key === "Tab" && te.preventDefault(), !A && T && ge(te.key));
                  const q = he.current;
                  if (te.target !== q || !I2.includes(te.key)) return;
                  te.preventDefault();
                  const Y = D().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                  _f.includes(te.key) && Y.reverse(), Q2(Y);
                }),
                onBlur: wt(n.onBlur, (te) => {
                  te.currentTarget.contains(te.target) || (window.clearTimeout(H.current), V.current = "");
                }),
                onPointerMove: wt(n.onPointerMove, za((te) => {
                  const Ae = te.target, we = U.current !== te.clientX;
                  if (te.currentTarget.contains(Ae) && we) {
                    const A = te.clientX > U.current ? "right" : "left";
                    B.current = A, U.current = te.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  Pf.displayName = Vn;
  var W2 = "MenuGroup", Uc = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return P.jsx(Br.div, {
      role: "group",
      ...r,
      ref: e
    });
  });
  Uc.displayName = W2;
  var G2 = "MenuLabel", Ef = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return P.jsx(Br.div, {
      ...r,
      ref: e
    });
  });
  Ef.displayName = G2;
  var ts = "MenuItem", zl = "menu.itemSelect", fs = oe.forwardRef((n, e) => {
    const { disabled: t = false, onSelect: r, ...o } = n, a = oe.useRef(null), f = Va(ts, n.__scopeMenu), c = Bc(ts, n.__scopeMenu), u = Ei(e, a), d = oe.useRef(false), m = () => {
      const w = a.current;
      if (!t && w) {
        const S = new CustomEvent(zl, {
          bubbles: true,
          cancelable: true
        });
        w.addEventListener(zl, (p) => r == null ? void 0 : r(p), {
          once: true
        }), Hd(w, S), S.defaultPrevented ? d.current = false : f.onClose();
      }
    };
    return P.jsx(If, {
      ...o,
      ref: u,
      disabled: t,
      onClick: wt(n.onClick, m),
      onPointerDown: (w) => {
        var _a;
        (_a = n.onPointerDown) == null ? void 0 : _a.call(n, w), d.current = true;
      },
      onPointerUp: wt(n.onPointerUp, (w) => {
        var _a;
        d.current || ((_a = w.currentTarget) == null ? void 0 : _a.click());
      }),
      onKeyDown: wt(n.onKeyDown, (w) => {
        const S = c.searchRef.current !== "";
        t || S && w.key === " " || kc.includes(w.key) && (w.currentTarget.click(), w.preventDefault());
      })
    });
  });
  fs.displayName = ts;
  var If = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, disabled: r = false, textValue: o, ...a } = n, f = Bc(ts, t), c = Sf(t), u = oe.useRef(null), d = Ei(e, u), [m, w] = oe.useState(false), [S, p] = oe.useState("");
    return oe.useEffect(() => {
      const E = u.current;
      E && p((E.textContent ?? "").trim());
    }, [
      a.children
    ]), P.jsx(Ua.ItemSlot, {
      scope: t,
      disabled: r,
      textValue: o ?? S,
      children: P.jsx(H1, {
        asChild: true,
        ...c,
        focusable: !r,
        children: P.jsx(Br.div, {
          role: "menuitem",
          "data-highlighted": m ? "" : void 0,
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          ...a,
          ref: d,
          onPointerMove: wt(n.onPointerMove, za((E) => {
            r ? f.onItemLeave(E) : (f.onItemEnter(E), E.defaultPrevented || E.currentTarget.focus({
              preventScroll: true
            }));
          })),
          onPointerLeave: wt(n.onPointerLeave, za((E) => f.onItemLeave(E))),
          onFocus: wt(n.onFocus, () => w(true)),
          onBlur: wt(n.onBlur, () => w(false))
        })
      })
    });
  }), V2 = "MenuCheckboxItem", jf = oe.forwardRef((n, e) => {
    const { checked: t = false, onCheckedChange: r, ...o } = n;
    return P.jsx(Tf, {
      scope: n.__scopeMenu,
      checked: t,
      children: P.jsx(fs, {
        role: "menuitemcheckbox",
        "aria-checked": ns(t) ? "mixed" : t,
        ...o,
        ref: e,
        "data-state": Hc(t),
        onSelect: wt(o.onSelect, () => r == null ? void 0 : r(ns(t) ? true : !t), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  jf.displayName = V2;
  var Ff = "MenuRadioGroup", [K2, $2] = Ii(Ff, {
    value: void 0,
    onValueChange: () => {
    }
  }), Mf = oe.forwardRef((n, e) => {
    const { value: t, onValueChange: r, ...o } = n, a = qa(r);
    return P.jsx(K2, {
      scope: n.__scopeMenu,
      value: t,
      onValueChange: a,
      children: P.jsx(Uc, {
        ...o,
        ref: e
      })
    });
  });
  Mf.displayName = Ff;
  var Rf = "MenuRadioItem", Of = oe.forwardRef((n, e) => {
    const { value: t, ...r } = n, o = $2(Rf, n.__scopeMenu), a = t === o.value;
    return P.jsx(Tf, {
      scope: n.__scopeMenu,
      checked: a,
      children: P.jsx(fs, {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: e,
        "data-state": Hc(a),
        onSelect: wt(r.onSelect, () => {
          var _a;
          return (_a = o.onValueChange) == null ? void 0 : _a.call(o, t);
        }, {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  Of.displayName = Rf;
  var zc = "MenuItemIndicator", [Tf, Y2] = Ii(zc, {
    checked: false
  }), Df = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, forceMount: r, ...o } = n, a = Y2(zc, t);
    return P.jsx(ss, {
      present: r || ns(a.checked) || a.checked === true,
      children: P.jsx(Br.span, {
        ...o,
        ref: e,
        "data-state": Hc(a.checked)
      })
    });
  });
  Df.displayName = zc;
  var X2 = "MenuSeparator", Bf = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return P.jsx(Br.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: e
    });
  });
  Bf.displayName = X2;
  var J2 = "MenuArrow", qf = oe.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, o = us(t);
    return P.jsx(Kd, {
      ...o,
      ...r,
      ref: e
    });
  });
  qf.displayName = J2;
  var Z2 = "MenuSub", [Um, Uf] = Ii(Z2), Da = "MenuSubTrigger", zf = oe.forwardRef((n, e) => {
    const t = ji(Da, n.__scopeMenu), r = Va(Da, n.__scopeMenu), o = Uf(Da, n.__scopeMenu), a = Bc(Da, n.__scopeMenu), f = oe.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = a, d = {
      __scopeMenu: n.__scopeMenu
    }, m = oe.useCallback(() => {
      f.current && window.clearTimeout(f.current), f.current = null;
    }, []);
    return oe.useEffect(() => m, [
      m
    ]), oe.useEffect(() => {
      const w = c.current;
      return () => {
        window.clearTimeout(w), u(null);
      };
    }, [
      c,
      u
    ]), P.jsx(Tc, {
      asChild: true,
      ...d,
      children: P.jsx(If, {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": Gf(t.open),
        ...n,
        ref: tf(e, o.onTriggerChange),
        onClick: (w) => {
          var _a;
          (_a = n.onClick) == null ? void 0 : _a.call(n, w), !(n.disabled || w.defaultPrevented) && (w.currentTarget.focus(), t.open || t.onOpenChange(true));
        },
        onPointerMove: wt(n.onPointerMove, za((w) => {
          a.onItemEnter(w), !w.defaultPrevented && !n.disabled && !t.open && !f.current && (a.onPointerGraceIntentChange(null), f.current = window.setTimeout(() => {
            t.onOpenChange(true), m();
          }, 100));
        })),
        onPointerLeave: wt(n.onPointerLeave, za((w) => {
          var _a, _b;
          m();
          const S = (_a = t.content) == null ? void 0 : _a.getBoundingClientRect();
          if (S) {
            const p = (_b = t.content) == null ? void 0 : _b.dataset.side, E = p === "right", L = E ? -5 : 5, j = S[E ? "left" : "right"], N = S[E ? "right" : "left"];
            a.onPointerGraceIntentChange({
              area: [
                {
                  x: w.clientX + L,
                  y: w.clientY
                },
                {
                  x: j,
                  y: S.top
                },
                {
                  x: N,
                  y: S.top
                },
                {
                  x: N,
                  y: S.bottom
                },
                {
                  x: j,
                  y: S.bottom
                }
              ],
              side: p
            }), window.clearTimeout(c.current), c.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300);
          } else {
            if (a.onTriggerLeave(w), w.defaultPrevented) return;
            a.onPointerGraceIntentChange(null);
          }
        })),
        onKeyDown: wt(n.onKeyDown, (w) => {
          var _a;
          const S = a.searchRef.current !== "";
          n.disabled || S && w.key === " " || j2[r.dir].includes(w.key) && (t.onOpenChange(true), (_a = t.content) == null ? void 0 : _a.focus(), w.preventDefault());
        })
      })
    });
  });
  zf.displayName = Da;
  var Hf = "MenuSubContent", Wf = oe.forwardRef((n, e) => {
    const t = kf(Vn, n.__scopeMenu), { forceMount: r = t.forceMount, ...o } = n, a = ji(Vn, n.__scopeMenu), f = Va(Vn, n.__scopeMenu), c = Uf(Hf, n.__scopeMenu), u = oe.useRef(null), d = Ei(e, u);
    return P.jsx(Ua.Provider, {
      scope: n.__scopeMenu,
      children: P.jsx(ss, {
        present: r || a.open,
        children: P.jsx(Ua.Slot, {
          scope: n.__scopeMenu,
          children: P.jsx(qc, {
            id: c.contentId,
            "aria-labelledby": c.triggerId,
            ...o,
            ref: d,
            align: "start",
            side: f.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: (m) => {
              var _a;
              f.isUsingKeyboardRef.current && ((_a = u.current) == null ? void 0 : _a.focus()), m.preventDefault();
            },
            onCloseAutoFocus: (m) => m.preventDefault(),
            onFocusOutside: wt(n.onFocusOutside, (m) => {
              m.target !== c.trigger && a.onOpenChange(false);
            }),
            onEscapeKeyDown: wt(n.onEscapeKeyDown, (m) => {
              f.onClose(), m.preventDefault();
            }),
            onKeyDown: wt(n.onKeyDown, (m) => {
              var _a;
              const w = m.currentTarget.contains(m.target), S = F2[f.dir].includes(m.key);
              w && S && (a.onOpenChange(false), (_a = c.trigger) == null ? void 0 : _a.focus(), m.preventDefault());
            })
          })
        })
      })
    });
  });
  Wf.displayName = Hf;
  function Gf(n) {
    return n ? "open" : "closed";
  }
  function ns(n) {
    return n === "indeterminate";
  }
  function Hc(n) {
    return ns(n) ? "indeterminate" : n ? "checked" : "unchecked";
  }
  function Q2(n) {
    const e = document.activeElement;
    for (const t of n) if (t === e || (t.focus(), document.activeElement !== e)) return;
  }
  function e0(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  function t0(n, e, t) {
    const o = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, a = t ? n.indexOf(t) : -1;
    let f = e0(n, Math.max(a, 0));
    o.length === 1 && (f = f.filter((d) => d !== t));
    const u = f.find((d) => d.toLowerCase().startsWith(o.toLowerCase()));
    return u !== t ? u : void 0;
  }
  function n0(n, e) {
    const { x: t, y: r } = n;
    let o = false;
    for (let a = 0, f = e.length - 1; a < e.length; f = a++) {
      const c = e[a].x, u = e[a].y, d = e[f].x, m = e[f].y;
      u > r != m > r && t < (d - c) * (r - u) / (m - u) + c && (o = !o);
    }
    return o;
  }
  function r0(n, e) {
    if (!e) return false;
    const t = {
      x: n.clientX,
      y: n.clientY
    };
    return n0(t, e);
  }
  function za(n) {
    return (e) => e.pointerType === "mouse" ? n(e) : void 0;
  }
  var i0 = Lf, a0 = Tc, o0 = Cf, s0 = Pf, c0 = Uc, l0 = Ef, u0 = fs, f0 = jf, h0 = Mf, d0 = Of, p0 = Df, m0 = Bf, g0 = qf, v0 = zf, b0 = Wf, Wc = "DropdownMenu", [w0] = Oc(Wc, [
    Af
  ]), _n = Af(), [y0, Vf] = w0(Wc), Kf = (n) => {
    const { __scopeDropdownMenu: e, children: t, dir: r, open: o, defaultOpen: a, onOpenChange: f, modal: c = true } = n, u = _n(e), d = oe.useRef(null), [m = false, w] = Qu({
      prop: o,
      defaultProp: a,
      onChange: f
    });
    return P.jsx(y0, {
      scope: e,
      triggerId: Ac(),
      triggerRef: d,
      contentId: Ac(),
      open: m,
      onOpenChange: w,
      onOpenToggle: oe.useCallback(() => w((S) => !S), [
        w
      ]),
      modal: c,
      children: P.jsx(i0, {
        ...u,
        open: m,
        onOpenChange: w,
        dir: r,
        modal: c,
        children: t
      })
    });
  };
  Kf.displayName = Wc;
  var $f = "DropdownMenuTrigger", Yf = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, disabled: r = false, ...o } = n, a = Vf($f, t), f = _n(t);
    return P.jsx(a0, {
      asChild: true,
      ...f,
      children: P.jsx(Br.button, {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: tf(e, a.triggerRef),
        onPointerDown: wt(n.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === false && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: wt(n.onKeyDown, (c) => {
          r || ([
            "Enter",
            " "
          ].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(true), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(c.key) && c.preventDefault());
        })
      })
    });
  });
  Yf.displayName = $f;
  var x0 = "DropdownMenuPortal", Xf = (n) => {
    const { __scopeDropdownMenu: e, ...t } = n, r = _n(e);
    return P.jsx(o0, {
      ...r,
      ...t
    });
  };
  Xf.displayName = x0;
  var Jf = "DropdownMenuContent", Zf = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = Vf(Jf, t), a = _n(t), f = oe.useRef(false);
    return P.jsx(s0, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...a,
      ...r,
      ref: e,
      onCloseAutoFocus: wt(n.onCloseAutoFocus, (c) => {
        var _a;
        f.current || ((_a = o.triggerRef.current) == null ? void 0 : _a.focus()), f.current = false, c.preventDefault();
      }),
      onInteractOutside: wt(n.onInteractOutside, (c) => {
        const u = c.detail.originalEvent, d = u.button === 0 && u.ctrlKey === true, m = u.button === 2 || d;
        (!o.modal || m) && (f.current = true);
      }),
      style: {
        ...n.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  Zf.displayName = Jf;
  var N0 = "DropdownMenuGroup", _0 = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(c0, {
      ...o,
      ...r,
      ref: e
    });
  });
  _0.displayName = N0;
  var A0 = "DropdownMenuLabel", Qf = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(l0, {
      ...o,
      ...r,
      ref: e
    });
  });
  Qf.displayName = A0;
  var S0 = "DropdownMenuItem", eh = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(u0, {
      ...o,
      ...r,
      ref: e
    });
  });
  eh.displayName = S0;
  var L0 = "DropdownMenuCheckboxItem", th = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(f0, {
      ...o,
      ...r,
      ref: e
    });
  });
  th.displayName = L0;
  var k0 = "DropdownMenuRadioGroup", C0 = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(h0, {
      ...o,
      ...r,
      ref: e
    });
  });
  C0.displayName = k0;
  var P0 = "DropdownMenuRadioItem", nh = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(d0, {
      ...o,
      ...r,
      ref: e
    });
  });
  nh.displayName = P0;
  var E0 = "DropdownMenuItemIndicator", rh = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(p0, {
      ...o,
      ...r,
      ref: e
    });
  });
  rh.displayName = E0;
  var I0 = "DropdownMenuSeparator", ih = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(m0, {
      ...o,
      ...r,
      ref: e
    });
  });
  ih.displayName = I0;
  var j0 = "DropdownMenuArrow", F0 = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(g0, {
      ...o,
      ...r,
      ref: e
    });
  });
  F0.displayName = j0;
  var M0 = "DropdownMenuSubTrigger", ah = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(v0, {
      ...o,
      ...r,
      ref: e
    });
  });
  ah.displayName = M0;
  var R0 = "DropdownMenuSubContent", oh = oe.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, o = _n(t);
    return P.jsx(b0, {
      ...o,
      ...r,
      ref: e,
      style: {
        ...n.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  oh.displayName = R0;
  var O0 = Kf, T0 = Yf, D0 = Xf, sh = Zf, ch = Qf, lh = eh, uh = th, fh = nh, hh = rh, dh = ih, ph = ah, mh = oh;
  const B0 = O0, q0 = T0, U0 = oe.forwardRef(({ className: n, inset: e, children: t, ...r }, o) => P.jsxs(ph, {
    ref: o,
    className: si("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...r,
    children: [
      t,
      P.jsx(w1, {
        className: "ml-auto"
      })
    ]
  }));
  U0.displayName = ph.displayName;
  const z0 = oe.forwardRef(({ className: n, ...e }, t) => P.jsx(mh, {
    ref: t,
    className: si("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
    ...e
  }));
  z0.displayName = mh.displayName;
  const gh = oe.forwardRef(({ className: n, sideOffset: e = 4, ...t }, r) => P.jsx(D0, {
    children: P.jsx(sh, {
      ref: r,
      sideOffset: e,
      className: si("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
      ...t
    })
  }));
  gh.displayName = sh.displayName;
  const $o = oe.forwardRef(({ className: n, inset: e, ...t }, r) => P.jsx(lh, {
    ref: r,
    className: si("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...t
  }));
  $o.displayName = lh.displayName;
  const H0 = oe.forwardRef(({ className: n, children: e, checked: t, ...r }, o) => P.jsxs(uh, {
    ref: o,
    className: si("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    checked: t,
    ...r,
    children: [
      P.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: P.jsx(hh, {
          children: P.jsx(d1, {
            className: "h-4 w-4"
          })
        })
      }),
      e
    ]
  }));
  H0.displayName = uh.displayName;
  const W0 = oe.forwardRef(({ className: n, children: e, ...t }, r) => P.jsxs(fh, {
    ref: r,
    className: si("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    ...t,
    children: [
      P.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: P.jsx(hh, {
          children: P.jsx(y1, {
            className: "h-2 w-2 fill-current"
          })
        })
      }),
      e
    ]
  }));
  W0.displayName = fh.displayName;
  const G0 = oe.forwardRef(({ className: n, inset: e, ...t }, r) => P.jsx(ch, {
    ref: r,
    className: si("px-2 py-1.5 text-sm font-semibold", e && "pl-8", n),
    ...t
  }));
  G0.displayName = ch.displayName;
  const V0 = oe.forwardRef(({ className: n, ...e }, t) => P.jsx(dh, {
    ref: t,
    className: si("-mx-1 my-1 h-px bg-muted", n),
    ...e
  }));
  V0.displayName = dh.displayName;
  St = function(n) {
    "@babel/helpers - typeof";
    return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, St(n);
  };
  function K0(n) {
    if (Array.isArray(n)) return n;
  }
  function $0(n, e) {
    var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (t != null) {
      var r, o, a, f, c = [], u = true, d = false;
      try {
        if (a = (t = t.call(n)).next, e !== 0) for (; !(u = (r = a.call(t)).done) && (c.push(r.value), c.length !== e); u = true) ;
      } catch (m) {
        d = true, o = m;
      } finally {
        try {
          if (!u && t.return != null && (f = t.return(), Object(f) !== f)) return;
        } finally {
          if (d) throw o;
        }
      }
      return c;
    }
  }
  function Hl(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  function Y0(n, e) {
    if (n) {
      if (typeof n == "string") return Hl(n, e);
      var t = {}.toString.call(n).slice(8, -1);
      return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Hl(n, e) : void 0;
    }
  }
  function X0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Wl(n, e) {
    return K0(n) || $0(n, e) || Y0(n, e) || X0();
  }
  function Gl(n, e = "utf8") {
    return new TextDecoder(e).decode(n);
  }
  const J0 = new TextEncoder();
  function Z0(n) {
    return J0.encode(n);
  }
  const Q0 = 1024 * 8, e5 = (() => {
    const n = new Uint8Array(4), e = new Uint32Array(n.buffer);
    return !((e[0] = 1) & n[0]);
  })(), nc = {
    int8: globalThis.Int8Array,
    uint8: globalThis.Uint8Array,
    int16: globalThis.Int16Array,
    uint16: globalThis.Uint16Array,
    int32: globalThis.Int32Array,
    uint32: globalThis.Uint32Array,
    uint64: globalThis.BigUint64Array,
    int64: globalThis.BigInt64Array,
    float32: globalThis.Float32Array,
    float64: globalThis.Float64Array
  };
  class Gc {
    constructor(e = Q0, t = {}) {
      __publicField(this, "buffer");
      __publicField(this, "byteLength");
      __publicField(this, "byteOffset");
      __publicField(this, "length");
      __publicField(this, "offset");
      __publicField(this, "lastWrittenByte");
      __publicField(this, "littleEndian");
      __publicField(this, "_data");
      __publicField(this, "_mark");
      __publicField(this, "_marks");
      let r = false;
      typeof e == "number" ? e = new ArrayBuffer(e) : (r = true, this.lastWrittenByte = e.byteLength);
      const o = t.offset ? t.offset >>> 0 : 0, a = e.byteLength - o;
      let f = o;
      (ArrayBuffer.isView(e) || e instanceof Gc) && (e.byteLength !== e.buffer.byteLength && (f = e.byteOffset + o), e = e.buffer), r ? this.lastWrittenByte = a : this.lastWrittenByte = 0, this.buffer = e, this.length = a, this.byteLength = a, this.byteOffset = f, this.offset = 0, this.littleEndian = true, this._data = new DataView(this.buffer, f, a), this._mark = 0, this._marks = [];
    }
    available(e = 1) {
      return this.offset + e <= this.length;
    }
    isLittleEndian() {
      return this.littleEndian;
    }
    setLittleEndian() {
      return this.littleEndian = true, this;
    }
    isBigEndian() {
      return !this.littleEndian;
    }
    setBigEndian() {
      return this.littleEndian = false, this;
    }
    skip(e = 1) {
      return this.offset += e, this;
    }
    back(e = 1) {
      return this.offset -= e, this;
    }
    seek(e) {
      return this.offset = e, this;
    }
    mark() {
      return this._mark = this.offset, this;
    }
    reset() {
      return this.offset = this._mark, this;
    }
    pushMark() {
      return this._marks.push(this.offset), this;
    }
    popMark() {
      const e = this._marks.pop();
      if (e === void 0) throw new Error("Mark stack empty");
      return this.seek(e), this;
    }
    rewind() {
      return this.offset = 0, this;
    }
    ensureAvailable(e = 1) {
      if (!this.available(e)) {
        const r = (this.offset + e) * 2, o = new Uint8Array(r);
        o.set(new Uint8Array(this.buffer)), this.buffer = o.buffer, this.length = r, this.byteLength = r, this._data = new DataView(this.buffer);
      }
      return this;
    }
    readBoolean() {
      return this.readUint8() !== 0;
    }
    readInt8() {
      return this._data.getInt8(this.offset++);
    }
    readUint8() {
      return this._data.getUint8(this.offset++);
    }
    readByte() {
      return this.readUint8();
    }
    readBytes(e = 1) {
      return this.readArray(e, "uint8");
    }
    readArray(e, t) {
      const r = nc[t].BYTES_PER_ELEMENT * e, o = this.byteOffset + this.offset, a = this.buffer.slice(o, o + r);
      if (this.littleEndian === e5 && t !== "uint8" && t !== "int8") {
        const c = new Uint8Array(this.buffer.slice(o, o + r));
        c.reverse();
        const u = new nc[t](c.buffer);
        return this.offset += r, u.reverse(), u;
      }
      const f = new nc[t](a);
      return this.offset += r, f;
    }
    readInt16() {
      const e = this._data.getInt16(this.offset, this.littleEndian);
      return this.offset += 2, e;
    }
    readUint16() {
      const e = this._data.getUint16(this.offset, this.littleEndian);
      return this.offset += 2, e;
    }
    readInt32() {
      const e = this._data.getInt32(this.offset, this.littleEndian);
      return this.offset += 4, e;
    }
    readUint32() {
      const e = this._data.getUint32(this.offset, this.littleEndian);
      return this.offset += 4, e;
    }
    readFloat32() {
      const e = this._data.getFloat32(this.offset, this.littleEndian);
      return this.offset += 4, e;
    }
    readFloat64() {
      const e = this._data.getFloat64(this.offset, this.littleEndian);
      return this.offset += 8, e;
    }
    readBigInt64() {
      const e = this._data.getBigInt64(this.offset, this.littleEndian);
      return this.offset += 8, e;
    }
    readBigUint64() {
      const e = this._data.getBigUint64(this.offset, this.littleEndian);
      return this.offset += 8, e;
    }
    readChar() {
      return String.fromCharCode(this.readInt8());
    }
    readChars(e = 1) {
      let t = "";
      for (let r = 0; r < e; r++) t += this.readChar();
      return t;
    }
    readUtf8(e = 1) {
      return Gl(this.readBytes(e));
    }
    decodeText(e = 1, t = "utf8") {
      return Gl(this.readBytes(e), t);
    }
    writeBoolean(e) {
      return this.writeUint8(e ? 255 : 0), this;
    }
    writeInt8(e) {
      return this.ensureAvailable(1), this._data.setInt8(this.offset++, e), this._updateLastWrittenByte(), this;
    }
    writeUint8(e) {
      return this.ensureAvailable(1), this._data.setUint8(this.offset++, e), this._updateLastWrittenByte(), this;
    }
    writeByte(e) {
      return this.writeUint8(e);
    }
    writeBytes(e) {
      this.ensureAvailable(e.length);
      for (let t = 0; t < e.length; t++) this._data.setUint8(this.offset++, e[t]);
      return this._updateLastWrittenByte(), this;
    }
    writeInt16(e) {
      return this.ensureAvailable(2), this._data.setInt16(this.offset, e, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
    }
    writeUint16(e) {
      return this.ensureAvailable(2), this._data.setUint16(this.offset, e, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
    }
    writeInt32(e) {
      return this.ensureAvailable(4), this._data.setInt32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
    }
    writeUint32(e) {
      return this.ensureAvailable(4), this._data.setUint32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
    }
    writeFloat32(e) {
      return this.ensureAvailable(4), this._data.setFloat32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
    }
    writeFloat64(e) {
      return this.ensureAvailable(8), this._data.setFloat64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
    }
    writeBigInt64(e) {
      return this.ensureAvailable(8), this._data.setBigInt64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
    }
    writeBigUint64(e) {
      return this.ensureAvailable(8), this._data.setBigUint64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
    }
    writeChar(e) {
      return this.writeUint8(e.charCodeAt(0));
    }
    writeChars(e) {
      for (let t = 0; t < e.length; t++) this.writeUint8(e.charCodeAt(t));
      return this;
    }
    writeUtf8(e) {
      return this.writeBytes(Z0(e));
    }
    toArray() {
      return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
    }
    getWrittenByteLength() {
      return this.lastWrittenByte - this.byteOffset;
    }
    _updateLastWrittenByte() {
      this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
    }
  }
  function la(n) {
    let e = n.length;
    for (; --e >= 0; ) n[e] = 0;
  }
  const t5 = 3, n5 = 258, vh = 29, r5 = 256, i5 = r5 + 1 + vh, bh = 30, a5 = 512, o5 = new Array((i5 + 2) * 2);
  la(o5);
  const s5 = new Array(bh * 2);
  la(s5);
  const c5 = new Array(a5);
  la(c5);
  const l5 = new Array(n5 - t5 + 1);
  la(l5);
  const u5 = new Array(vh);
  la(u5);
  const f5 = new Array(bh);
  la(f5);
  const h5 = (n, e, t, r) => {
    let o = n & 65535 | 0, a = n >>> 16 & 65535 | 0, f = 0;
    for (; t !== 0; ) {
      f = t > 2e3 ? 2e3 : t, t -= f;
      do
        o = o + e[r++] | 0, a = a + o | 0;
      while (--f);
      o %= 65521, a %= 65521;
    }
    return o | a << 16 | 0;
  };
  var Cc = h5;
  const d5 = () => {
    let n, e = [];
    for (var t = 0; t < 256; t++) {
      n = t;
      for (var r = 0; r < 8; r++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      e[t] = n;
    }
    return e;
  }, p5 = new Uint32Array(d5()), m5 = (n, e, t, r) => {
    const o = p5, a = r + t;
    n ^= -1;
    for (let f = r; f < a; f++) n = n >>> 8 ^ o[(n ^ e[f]) & 255];
    return n ^ -1;
  };
  var pr = m5, Pc = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }, wh = {
    Z_NO_FLUSH: 0,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_DEFLATED: 8
  };
  const g5 = (n, e) => Object.prototype.hasOwnProperty.call(n, e);
  var v5 = function(n) {
    const e = Array.prototype.slice.call(arguments, 1);
    for (; e.length; ) {
      const t = e.shift();
      if (t) {
        if (typeof t != "object") throw new TypeError(t + "must be non-object");
        for (const r in t) g5(t, r) && (n[r] = t[r]);
      }
    }
    return n;
  }, b5 = (n) => {
    let e = 0;
    for (let r = 0, o = n.length; r < o; r++) e += n[r].length;
    const t = new Uint8Array(e);
    for (let r = 0, o = 0, a = n.length; r < a; r++) {
      let f = n[r];
      t.set(f, o), o += f.length;
    }
    return t;
  }, yh = {
    assign: v5,
    flattenChunks: b5
  };
  let xh = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    xh = false;
  }
  const Ha = new Uint8Array(256);
  for (let n = 0; n < 256; n++) Ha[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
  Ha[254] = Ha[254] = 1;
  var w5 = (n) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(n);
    let e, t, r, o, a, f = n.length, c = 0;
    for (o = 0; o < f; o++) t = n.charCodeAt(o), (t & 64512) === 55296 && o + 1 < f && (r = n.charCodeAt(o + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), o++)), c += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    for (e = new Uint8Array(c), a = 0, o = 0; a < c; o++) t = n.charCodeAt(o), (t & 64512) === 55296 && o + 1 < f && (r = n.charCodeAt(o + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), o++)), t < 128 ? e[a++] = t : t < 2048 ? (e[a++] = 192 | t >>> 6, e[a++] = 128 | t & 63) : t < 65536 ? (e[a++] = 224 | t >>> 12, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63) : (e[a++] = 240 | t >>> 18, e[a++] = 128 | t >>> 12 & 63, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63);
    return e;
  };
  const y5 = (n, e) => {
    if (e < 65534 && n.subarray && xh) return String.fromCharCode.apply(null, n.length === e ? n : n.subarray(0, e));
    let t = "";
    for (let r = 0; r < e; r++) t += String.fromCharCode(n[r]);
    return t;
  };
  var x5 = (n, e) => {
    const t = e || n.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(n.subarray(0, e));
    let r, o;
    const a = new Array(t * 2);
    for (o = 0, r = 0; r < t; ) {
      let f = n[r++];
      if (f < 128) {
        a[o++] = f;
        continue;
      }
      let c = Ha[f];
      if (c > 4) {
        a[o++] = 65533, r += c - 1;
        continue;
      }
      for (f &= c === 2 ? 31 : c === 3 ? 15 : 7; c > 1 && r < t; ) f = f << 6 | n[r++] & 63, c--;
      if (c > 1) {
        a[o++] = 65533;
        continue;
      }
      f < 65536 ? a[o++] = f : (f -= 65536, a[o++] = 55296 | f >> 10 & 1023, a[o++] = 56320 | f & 1023);
    }
    return y5(a, o);
  }, N5 = (n, e) => {
    e = e || n.length, e > n.length && (e = n.length);
    let t = e - 1;
    for (; t >= 0 && (n[t] & 192) === 128; ) t--;
    return t < 0 || t === 0 ? e : t + Ha[n[t]] > e ? t : e;
  }, Ec = {
    string2buf: w5,
    buf2string: x5,
    utf8border: N5
  };
  function _5() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  var A5 = _5;
  const To = 16209, S5 = 16191;
  var L5 = function(e, t) {
    let r, o, a, f, c, u, d, m, w, S, p, E, L, j, N, z, G, D, ae, be, he, J, H, V;
    const x = e.state;
    r = e.next_in, H = e.input, o = r + (e.avail_in - 5), a = e.next_out, V = e.output, f = a - (t - e.avail_out), c = a + (e.avail_out - 257), u = x.dmax, d = x.wsize, m = x.whave, w = x.wnext, S = x.window, p = x.hold, E = x.bits, L = x.lencode, j = x.distcode, N = (1 << x.lenbits) - 1, z = (1 << x.distbits) - 1;
    e: do {
      E < 15 && (p += H[r++] << E, E += 8, p += H[r++] << E, E += 8), G = L[p & N];
      t: for (; ; ) {
        if (D = G >>> 24, p >>>= D, E -= D, D = G >>> 16 & 255, D === 0) V[a++] = G & 65535;
        else if (D & 16) {
          ae = G & 65535, D &= 15, D && (E < D && (p += H[r++] << E, E += 8), ae += p & (1 << D) - 1, p >>>= D, E -= D), E < 15 && (p += H[r++] << E, E += 8, p += H[r++] << E, E += 8), G = j[p & z];
          n: for (; ; ) {
            if (D = G >>> 24, p >>>= D, E -= D, D = G >>> 16 & 255, D & 16) {
              if (be = G & 65535, D &= 15, E < D && (p += H[r++] << E, E += 8, E < D && (p += H[r++] << E, E += 8)), be += p & (1 << D) - 1, be > u) {
                e.msg = "invalid distance too far back", x.mode = To;
                break e;
              }
              if (p >>>= D, E -= D, D = a - f, be > D) {
                if (D = be - D, D > m && x.sane) {
                  e.msg = "invalid distance too far back", x.mode = To;
                  break e;
                }
                if (he = 0, J = S, w === 0) {
                  if (he += d - D, D < ae) {
                    ae -= D;
                    do
                      V[a++] = S[he++];
                    while (--D);
                    he = a - be, J = V;
                  }
                } else if (w < D) {
                  if (he += d + w - D, D -= w, D < ae) {
                    ae -= D;
                    do
                      V[a++] = S[he++];
                    while (--D);
                    if (he = 0, w < ae) {
                      D = w, ae -= D;
                      do
                        V[a++] = S[he++];
                      while (--D);
                      he = a - be, J = V;
                    }
                  }
                } else if (he += w - D, D < ae) {
                  ae -= D;
                  do
                    V[a++] = S[he++];
                  while (--D);
                  he = a - be, J = V;
                }
                for (; ae > 2; ) V[a++] = J[he++], V[a++] = J[he++], V[a++] = J[he++], ae -= 3;
                ae && (V[a++] = J[he++], ae > 1 && (V[a++] = J[he++]));
              } else {
                he = a - be;
                do
                  V[a++] = V[he++], V[a++] = V[he++], V[a++] = V[he++], ae -= 3;
                while (ae > 2);
                ae && (V[a++] = V[he++], ae > 1 && (V[a++] = V[he++]));
              }
            } else if (D & 64) {
              e.msg = "invalid distance code", x.mode = To;
              break e;
            } else {
              G = j[(G & 65535) + (p & (1 << D) - 1)];
              continue n;
            }
            break;
          }
        } else if (D & 64) if (D & 32) {
          x.mode = S5;
          break e;
        } else {
          e.msg = "invalid literal/length code", x.mode = To;
          break e;
        }
        else {
          G = L[(G & 65535) + (p & (1 << D) - 1)];
          continue t;
        }
        break;
      }
    } while (r < o && a < c);
    ae = E >> 3, r -= ae, E -= ae << 3, p &= (1 << E) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < o ? 5 + (o - r) : 5 - (r - o), e.avail_out = a < c ? 257 + (c - a) : 257 - (a - c), x.hold = p, x.bits = E;
  };
  const Zi = 15, Vl = 852, Kl = 592, $l = 0, rc = 1, Yl = 2, k5 = new Uint16Array([
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ]), C5 = new Uint8Array([
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ]), P5 = new Uint16Array([
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ]), E5 = new Uint8Array([
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ]), I5 = (n, e, t, r, o, a, f, c) => {
    const u = c.bits;
    let d = 0, m = 0, w = 0, S = 0, p = 0, E = 0, L = 0, j = 0, N = 0, z = 0, G, D, ae, be, he, J = null, H;
    const V = new Uint16Array(Zi + 1), x = new Uint16Array(Zi + 1);
    let I = null, B, U, se;
    for (d = 0; d <= Zi; d++) V[d] = 0;
    for (m = 0; m < r; m++) V[e[t + m]]++;
    for (p = u, S = Zi; S >= 1 && V[S] === 0; S--) ;
    if (p > S && (p = S), S === 0) return o[a++] = 1 << 24 | 64 << 16 | 0, o[a++] = 1 << 24 | 64 << 16 | 0, c.bits = 1, 0;
    for (w = 1; w < S && V[w] === 0; w++) ;
    for (p < w && (p = w), j = 1, d = 1; d <= Zi; d++) if (j <<= 1, j -= V[d], j < 0) return -1;
    if (j > 0 && (n === $l || S !== 1)) return -1;
    for (x[1] = 0, d = 1; d < Zi; d++) x[d + 1] = x[d] + V[d];
    for (m = 0; m < r; m++) e[t + m] !== 0 && (f[x[e[t + m]]++] = m);
    if (n === $l ? (J = I = f, H = 20) : n === rc ? (J = k5, I = C5, H = 257) : (J = P5, I = E5, H = 0), z = 0, m = 0, d = w, he = a, E = p, L = 0, ae = -1, N = 1 << p, be = N - 1, n === rc && N > Vl || n === Yl && N > Kl) return 1;
    for (; ; ) {
      B = d - L, f[m] + 1 < H ? (U = 0, se = f[m]) : f[m] >= H ? (U = I[f[m] - H], se = J[f[m] - H]) : (U = 96, se = 0), G = 1 << d - L, D = 1 << E, w = D;
      do
        D -= G, o[he + (z >> L) + D] = B << 24 | U << 16 | se | 0;
      while (D !== 0);
      for (G = 1 << d - 1; z & G; ) G >>= 1;
      if (G !== 0 ? (z &= G - 1, z += G) : z = 0, m++, --V[d] === 0) {
        if (d === S) break;
        d = e[t + f[m]];
      }
      if (d > p && (z & be) !== ae) {
        for (L === 0 && (L = p), he += w, E = d - L, j = 1 << E; E + L < S && (j -= V[E + L], !(j <= 0)); ) E++, j <<= 1;
        if (N += 1 << E, n === rc && N > Vl || n === Yl && N > Kl) return 1;
        ae = z & be, o[ae] = p << 24 | E << 16 | he - a | 0;
      }
    }
    return z !== 0 && (o[he + z] = d - L << 24 | 64 << 16 | 0), c.bits = p, 0;
  };
  var Ba = I5;
  const j5 = 0, Nh = 1, _h = 2, { Z_FINISH: Xl, Z_BLOCK: F5, Z_TREES: Do, Z_OK: Pi, Z_STREAM_END: M5, Z_NEED_DICT: R5, Z_STREAM_ERROR: Kn, Z_DATA_ERROR: Ah, Z_MEM_ERROR: Sh, Z_BUF_ERROR: O5, Z_DEFLATED: Jl } = wh, hs = 16180, Zl = 16181, Ql = 16182, eu = 16183, tu = 16184, nu = 16185, ru = 16186, iu = 16187, au = 16188, ou = 16189, rs = 16190, Tr = 16191, ic = 16192, su = 16193, ac = 16194, cu = 16195, lu = 16196, uu = 16197, fu = 16198, Bo = 16199, qo = 16200, hu = 16201, du = 16202, pu = 16203, mu = 16204, gu = 16205, oc = 16206, vu = 16207, bu = 16208, Rt = 16209, Lh = 16210, kh = 16211, T5 = 852, D5 = 592, B5 = 15, q5 = B5, wu = (n) => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
  function U5() {
    this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  const Fi = (n) => {
    if (!n) return 1;
    const e = n.state;
    return !e || e.strm !== n || e.mode < hs || e.mode > kh ? 1 : 0;
  }, Ch = (n) => {
    if (Fi(n)) return Kn;
    const e = n.state;
    return n.total_in = n.total_out = e.total = 0, n.msg = "", e.wrap && (n.adler = e.wrap & 1), e.mode = hs, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(T5), e.distcode = e.distdyn = new Int32Array(D5), e.sane = 1, e.back = -1, Pi;
  }, Ph = (n) => {
    if (Fi(n)) return Kn;
    const e = n.state;
    return e.wsize = 0, e.whave = 0, e.wnext = 0, Ch(n);
  }, Eh = (n, e) => {
    let t;
    if (Fi(n)) return Kn;
    const r = n.state;
    return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Kn : (r.window !== null && r.wbits !== e && (r.window = null), r.wrap = t, r.wbits = e, Ph(n));
  }, Ih = (n, e) => {
    if (!n) return Kn;
    const t = new U5();
    n.state = t, t.strm = n, t.window = null, t.mode = hs;
    const r = Eh(n, e);
    return r !== Pi && (n.state = null), r;
  }, z5 = (n) => Ih(n, q5);
  let yu = true, sc, cc;
  const H5 = (n) => {
    if (yu) {
      sc = new Int32Array(512), cc = new Int32Array(32);
      let e = 0;
      for (; e < 144; ) n.lens[e++] = 8;
      for (; e < 256; ) n.lens[e++] = 9;
      for (; e < 280; ) n.lens[e++] = 7;
      for (; e < 288; ) n.lens[e++] = 8;
      for (Ba(Nh, n.lens, 0, 288, sc, 0, n.work, {
        bits: 9
      }), e = 0; e < 32; ) n.lens[e++] = 5;
      Ba(_h, n.lens, 0, 32, cc, 0, n.work, {
        bits: 5
      }), yu = false;
    }
    n.lencode = sc, n.lenbits = 9, n.distcode = cc, n.distbits = 5;
  }, jh = (n, e, t, r) => {
    let o;
    const a = n.state;
    return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), r >= a.wsize ? (a.window.set(e.subarray(t - a.wsize, t), 0), a.wnext = 0, a.whave = a.wsize) : (o = a.wsize - a.wnext, o > r && (o = r), a.window.set(e.subarray(t - r, t - r + o), a.wnext), r -= o, r ? (a.window.set(e.subarray(t - r, t), 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += o, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += o))), 0;
  }, W5 = (n, e) => {
    let t, r, o, a, f, c, u, d, m, w, S, p, E, L, j = 0, N, z, G, D, ae, be, he, J;
    const H = new Uint8Array(4);
    let V, x;
    const I = new Uint8Array([
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ]);
    if (Fi(n) || !n.output || !n.input && n.avail_in !== 0) return Kn;
    t = n.state, t.mode === Tr && (t.mode = ic), f = n.next_out, o = n.output, u = n.avail_out, a = n.next_in, r = n.input, c = n.avail_in, d = t.hold, m = t.bits, w = c, S = u, J = Pi;
    e: for (; ; ) switch (t.mode) {
      case hs:
        if (t.wrap === 0) {
          t.mode = ic;
          break;
        }
        for (; m < 16; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        if (t.wrap & 2 && d === 35615) {
          t.wbits === 0 && (t.wbits = 15), t.check = 0, H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0), d = 0, m = 0, t.mode = Zl;
          break;
        }
        if (t.head && (t.head.done = false), !(t.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
          n.msg = "incorrect header check", t.mode = Rt;
          break;
        }
        if ((d & 15) !== Jl) {
          n.msg = "unknown compression method", t.mode = Rt;
          break;
        }
        if (d >>>= 4, m -= 4, he = (d & 15) + 8, t.wbits === 0 && (t.wbits = he), he > 15 || he > t.wbits) {
          n.msg = "invalid window size", t.mode = Rt;
          break;
        }
        t.dmax = 1 << t.wbits, t.flags = 0, n.adler = t.check = 1, t.mode = d & 512 ? ou : Tr, d = 0, m = 0;
        break;
      case Zl:
        for (; m < 16; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        if (t.flags = d, (t.flags & 255) !== Jl) {
          n.msg = "unknown compression method", t.mode = Rt;
          break;
        }
        if (t.flags & 57344) {
          n.msg = "unknown header flags set", t.mode = Rt;
          break;
        }
        t.head && (t.head.text = d >> 8 & 1), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0)), d = 0, m = 0, t.mode = Ql;
      case Ql:
        for (; m < 32; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        t.head && (t.head.time = d), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, H[2] = d >>> 16 & 255, H[3] = d >>> 24 & 255, t.check = pr(t.check, H, 4, 0)), d = 0, m = 0, t.mode = eu;
      case eu:
        for (; m < 16; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        t.head && (t.head.xflags = d & 255, t.head.os = d >> 8), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0)), d = 0, m = 0, t.mode = tu;
      case tu:
        if (t.flags & 1024) {
          for (; m < 16; ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          t.length = d, t.head && (t.head.extra_len = d), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0)), d = 0, m = 0;
        } else t.head && (t.head.extra = null);
        t.mode = nu;
      case nu:
        if (t.flags & 1024 && (p = t.length, p > c && (p = c), p && (t.head && (he = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(r.subarray(a, a + p), he)), t.flags & 512 && t.wrap & 4 && (t.check = pr(t.check, r, p, a)), c -= p, a += p, t.length -= p), t.length)) break e;
        t.length = 0, t.mode = ru;
      case ru:
        if (t.flags & 2048) {
          if (c === 0) break e;
          p = 0;
          do
            he = r[a + p++], t.head && he && t.length < 65536 && (t.head.name += String.fromCharCode(he));
          while (he && p < c);
          if (t.flags & 512 && t.wrap & 4 && (t.check = pr(t.check, r, p, a)), c -= p, a += p, he) break e;
        } else t.head && (t.head.name = null);
        t.length = 0, t.mode = iu;
      case iu:
        if (t.flags & 4096) {
          if (c === 0) break e;
          p = 0;
          do
            he = r[a + p++], t.head && he && t.length < 65536 && (t.head.comment += String.fromCharCode(he));
          while (he && p < c);
          if (t.flags & 512 && t.wrap & 4 && (t.check = pr(t.check, r, p, a)), c -= p, a += p, he) break e;
        } else t.head && (t.head.comment = null);
        t.mode = au;
      case au:
        if (t.flags & 512) {
          for (; m < 16; ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          if (t.wrap & 4 && d !== (t.check & 65535)) {
            n.msg = "header crc mismatch", t.mode = Rt;
            break;
          }
          d = 0, m = 0;
        }
        t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = true), n.adler = t.check = 0, t.mode = Tr;
        break;
      case ou:
        for (; m < 32; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        n.adler = t.check = wu(d), d = 0, m = 0, t.mode = rs;
      case rs:
        if (t.havedict === 0) return n.next_out = f, n.avail_out = u, n.next_in = a, n.avail_in = c, t.hold = d, t.bits = m, R5;
        n.adler = t.check = 1, t.mode = Tr;
      case Tr:
        if (e === F5 || e === Do) break e;
      case ic:
        if (t.last) {
          d >>>= m & 7, m -= m & 7, t.mode = oc;
          break;
        }
        for (; m < 3; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        switch (t.last = d & 1, d >>>= 1, m -= 1, d & 3) {
          case 0:
            t.mode = su;
            break;
          case 1:
            if (H5(t), t.mode = Bo, e === Do) {
              d >>>= 2, m -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = lu;
            break;
          case 3:
            n.msg = "invalid block type", t.mode = Rt;
        }
        d >>>= 2, m -= 2;
        break;
      case su:
        for (d >>>= m & 7, m -= m & 7; m < 32; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        if ((d & 65535) !== (d >>> 16 ^ 65535)) {
          n.msg = "invalid stored block lengths", t.mode = Rt;
          break;
        }
        if (t.length = d & 65535, d = 0, m = 0, t.mode = ac, e === Do) break e;
      case ac:
        t.mode = cu;
      case cu:
        if (p = t.length, p) {
          if (p > c && (p = c), p > u && (p = u), p === 0) break e;
          o.set(r.subarray(a, a + p), f), c -= p, a += p, u -= p, f += p, t.length -= p;
          break;
        }
        t.mode = Tr;
        break;
      case lu:
        for (; m < 14; ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        if (t.nlen = (d & 31) + 257, d >>>= 5, m -= 5, t.ndist = (d & 31) + 1, d >>>= 5, m -= 5, t.ncode = (d & 15) + 4, d >>>= 4, m -= 4, t.nlen > 286 || t.ndist > 30) {
          n.msg = "too many length or distance symbols", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = uu;
      case uu:
        for (; t.have < t.ncode; ) {
          for (; m < 3; ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          t.lens[I[t.have++]] = d & 7, d >>>= 3, m -= 3;
        }
        for (; t.have < 19; ) t.lens[I[t.have++]] = 0;
        if (t.lencode = t.lendyn, t.lenbits = 7, V = {
          bits: t.lenbits
        }, J = Ba(j5, t.lens, 0, 19, t.lencode, 0, t.work, V), t.lenbits = V.bits, J) {
          n.msg = "invalid code lengths set", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = fu;
      case fu:
        for (; t.have < t.nlen + t.ndist; ) {
          for (; j = t.lencode[d & (1 << t.lenbits) - 1], N = j >>> 24, z = j >>> 16 & 255, G = j & 65535, !(N <= m); ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          if (G < 16) d >>>= N, m -= N, t.lens[t.have++] = G;
          else {
            if (G === 16) {
              for (x = N + 2; m < x; ) {
                if (c === 0) break e;
                c--, d += r[a++] << m, m += 8;
              }
              if (d >>>= N, m -= N, t.have === 0) {
                n.msg = "invalid bit length repeat", t.mode = Rt;
                break;
              }
              he = t.lens[t.have - 1], p = 3 + (d & 3), d >>>= 2, m -= 2;
            } else if (G === 17) {
              for (x = N + 3; m < x; ) {
                if (c === 0) break e;
                c--, d += r[a++] << m, m += 8;
              }
              d >>>= N, m -= N, he = 0, p = 3 + (d & 7), d >>>= 3, m -= 3;
            } else {
              for (x = N + 7; m < x; ) {
                if (c === 0) break e;
                c--, d += r[a++] << m, m += 8;
              }
              d >>>= N, m -= N, he = 0, p = 11 + (d & 127), d >>>= 7, m -= 7;
            }
            if (t.have + p > t.nlen + t.ndist) {
              n.msg = "invalid bit length repeat", t.mode = Rt;
              break;
            }
            for (; p--; ) t.lens[t.have++] = he;
          }
        }
        if (t.mode === Rt) break;
        if (t.lens[256] === 0) {
          n.msg = "invalid code -- missing end-of-block", t.mode = Rt;
          break;
        }
        if (t.lenbits = 9, V = {
          bits: t.lenbits
        }, J = Ba(Nh, t.lens, 0, t.nlen, t.lencode, 0, t.work, V), t.lenbits = V.bits, J) {
          n.msg = "invalid literal/lengths set", t.mode = Rt;
          break;
        }
        if (t.distbits = 6, t.distcode = t.distdyn, V = {
          bits: t.distbits
        }, J = Ba(_h, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, V), t.distbits = V.bits, J) {
          n.msg = "invalid distances set", t.mode = Rt;
          break;
        }
        if (t.mode = Bo, e === Do) break e;
      case Bo:
        t.mode = qo;
      case qo:
        if (c >= 6 && u >= 258) {
          n.next_out = f, n.avail_out = u, n.next_in = a, n.avail_in = c, t.hold = d, t.bits = m, L5(n, S), f = n.next_out, o = n.output, u = n.avail_out, a = n.next_in, r = n.input, c = n.avail_in, d = t.hold, m = t.bits, t.mode === Tr && (t.back = -1);
          break;
        }
        for (t.back = 0; j = t.lencode[d & (1 << t.lenbits) - 1], N = j >>> 24, z = j >>> 16 & 255, G = j & 65535, !(N <= m); ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        if (z && !(z & 240)) {
          for (D = N, ae = z, be = G; j = t.lencode[be + ((d & (1 << D + ae) - 1) >> D)], N = j >>> 24, z = j >>> 16 & 255, G = j & 65535, !(D + N <= m); ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          d >>>= D, m -= D, t.back += D;
        }
        if (d >>>= N, m -= N, t.back += N, t.length = G, z === 0) {
          t.mode = gu;
          break;
        }
        if (z & 32) {
          t.back = -1, t.mode = Tr;
          break;
        }
        if (z & 64) {
          n.msg = "invalid literal/length code", t.mode = Rt;
          break;
        }
        t.extra = z & 15, t.mode = hu;
      case hu:
        if (t.extra) {
          for (x = t.extra; m < x; ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          t.length += d & (1 << t.extra) - 1, d >>>= t.extra, m -= t.extra, t.back += t.extra;
        }
        t.was = t.length, t.mode = du;
      case du:
        for (; j = t.distcode[d & (1 << t.distbits) - 1], N = j >>> 24, z = j >>> 16 & 255, G = j & 65535, !(N <= m); ) {
          if (c === 0) break e;
          c--, d += r[a++] << m, m += 8;
        }
        if (!(z & 240)) {
          for (D = N, ae = z, be = G; j = t.distcode[be + ((d & (1 << D + ae) - 1) >> D)], N = j >>> 24, z = j >>> 16 & 255, G = j & 65535, !(D + N <= m); ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          d >>>= D, m -= D, t.back += D;
        }
        if (d >>>= N, m -= N, t.back += N, z & 64) {
          n.msg = "invalid distance code", t.mode = Rt;
          break;
        }
        t.offset = G, t.extra = z & 15, t.mode = pu;
      case pu:
        if (t.extra) {
          for (x = t.extra; m < x; ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          t.offset += d & (1 << t.extra) - 1, d >>>= t.extra, m -= t.extra, t.back += t.extra;
        }
        if (t.offset > t.dmax) {
          n.msg = "invalid distance too far back", t.mode = Rt;
          break;
        }
        t.mode = mu;
      case mu:
        if (u === 0) break e;
        if (p = S - u, t.offset > p) {
          if (p = t.offset - p, p > t.whave && t.sane) {
            n.msg = "invalid distance too far back", t.mode = Rt;
            break;
          }
          p > t.wnext ? (p -= t.wnext, E = t.wsize - p) : E = t.wnext - p, p > t.length && (p = t.length), L = t.window;
        } else L = o, E = f - t.offset, p = t.length;
        p > u && (p = u), u -= p, t.length -= p;
        do
          o[f++] = L[E++];
        while (--p);
        t.length === 0 && (t.mode = qo);
        break;
      case gu:
        if (u === 0) break e;
        o[f++] = t.length, u--, t.mode = qo;
        break;
      case oc:
        if (t.wrap) {
          for (; m < 32; ) {
            if (c === 0) break e;
            c--, d |= r[a++] << m, m += 8;
          }
          if (S -= u, n.total_out += S, t.total += S, t.wrap & 4 && S && (n.adler = t.check = t.flags ? pr(t.check, o, S, f - S) : Cc(t.check, o, S, f - S)), S = u, t.wrap & 4 && (t.flags ? d : wu(d)) !== t.check) {
            n.msg = "incorrect data check", t.mode = Rt;
            break;
          }
          d = 0, m = 0;
        }
        t.mode = vu;
      case vu:
        if (t.wrap && t.flags) {
          for (; m < 32; ) {
            if (c === 0) break e;
            c--, d += r[a++] << m, m += 8;
          }
          if (t.wrap & 4 && d !== (t.total & 4294967295)) {
            n.msg = "incorrect length check", t.mode = Rt;
            break;
          }
          d = 0, m = 0;
        }
        t.mode = bu;
      case bu:
        J = M5;
        break e;
      case Rt:
        J = Ah;
        break e;
      case Lh:
        return Sh;
      case kh:
      default:
        return Kn;
    }
    return n.next_out = f, n.avail_out = u, n.next_in = a, n.avail_in = c, t.hold = d, t.bits = m, (t.wsize || S !== n.avail_out && t.mode < Rt && (t.mode < oc || e !== Xl)) && jh(n, n.output, n.next_out, S - n.avail_out), w -= n.avail_in, S -= n.avail_out, n.total_in += w, n.total_out += S, t.total += S, t.wrap & 4 && S && (n.adler = t.check = t.flags ? pr(t.check, o, S, n.next_out - S) : Cc(t.check, o, S, n.next_out - S)), n.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Tr ? 128 : 0) + (t.mode === Bo || t.mode === ac ? 256 : 0), (w === 0 && S === 0 || e === Xl) && J === Pi && (J = O5), J;
  }, G5 = (n) => {
    if (Fi(n)) return Kn;
    let e = n.state;
    return e.window && (e.window = null), n.state = null, Pi;
  }, V5 = (n, e) => {
    if (Fi(n)) return Kn;
    const t = n.state;
    return t.wrap & 2 ? (t.head = e, e.done = false, Pi) : Kn;
  }, K5 = (n, e) => {
    const t = e.length;
    let r, o, a;
    return Fi(n) || (r = n.state, r.wrap !== 0 && r.mode !== rs) ? Kn : r.mode === rs && (o = 1, o = Cc(o, e, t, 0), o !== r.check) ? Ah : (a = jh(n, e, t, t), a ? (r.mode = Lh, Sh) : (r.havedict = 1, Pi));
  };
  var $5 = Ph, Y5 = Eh, X5 = Ch, J5 = z5, Z5 = Ih, Q5 = W5, ep = G5, tp = V5, np = K5, rp = "pako inflate (from Nodeca project)", Dr = {
    inflateReset: $5,
    inflateReset2: Y5,
    inflateResetKeep: X5,
    inflateInit: J5,
    inflateInit2: Z5,
    inflate: Q5,
    inflateEnd: ep,
    inflateGetHeader: tp,
    inflateSetDictionary: np,
    inflateInfo: rp
  };
  function ip() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  }
  var ap = ip;
  const Fh = Object.prototype.toString, { Z_NO_FLUSH: op, Z_FINISH: sp, Z_OK: Wa, Z_STREAM_END: lc, Z_NEED_DICT: uc, Z_STREAM_ERROR: cp, Z_DATA_ERROR: xu, Z_MEM_ERROR: lp } = wh;
  function Ka(n) {
    this.options = yh.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ""
    }, n || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(n && n.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new A5(), this.strm.avail_out = 0;
    let t = Dr.inflateInit2(this.strm, e.windowBits);
    if (t !== Wa) throw new Error(Pc[t]);
    if (this.header = new ap(), Dr.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Ec.string2buf(e.dictionary) : Fh.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = Dr.inflateSetDictionary(this.strm, e.dictionary), t !== Wa))) throw new Error(Pc[t]);
  }
  Ka.prototype.push = function(n, e) {
    const t = this.strm, r = this.options.chunkSize, o = this.options.dictionary;
    let a, f, c;
    if (this.ended) return false;
    for (e === ~~e ? f = e : f = e === true ? sp : op, Fh.call(n) === "[object ArrayBuffer]" ? t.input = new Uint8Array(n) : t.input = n, t.next_in = 0, t.avail_in = t.input.length; ; ) {
      for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), a = Dr.inflate(t, f), a === uc && o && (a = Dr.inflateSetDictionary(t, o), a === Wa ? a = Dr.inflate(t, f) : a === xu && (a = uc)); t.avail_in > 0 && a === lc && t.state.wrap > 0 && n[t.next_in] !== 0; ) Dr.inflateReset(t), a = Dr.inflate(t, f);
      switch (a) {
        case cp:
        case xu:
        case uc:
        case lp:
          return this.onEnd(a), this.ended = true, false;
      }
      if (c = t.avail_out, t.next_out && (t.avail_out === 0 || a === lc)) if (this.options.to === "string") {
        let u = Ec.utf8border(t.output, t.next_out), d = t.next_out - u, m = Ec.buf2string(t.output, u);
        t.next_out = d, t.avail_out = r - d, d && t.output.set(t.output.subarray(u, u + d), 0), this.onData(m);
      } else this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
      if (!(a === Wa && c === 0)) {
        if (a === lc) return a = Dr.inflateEnd(this.strm), this.onEnd(a), this.ended = true, true;
        if (t.avail_in === 0) break;
      }
    }
    return true;
  };
  Ka.prototype.onData = function(n) {
    this.chunks.push(n);
  };
  Ka.prototype.onEnd = function(n) {
    n === Wa && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = yh.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
  };
  function up(n, e) {
    const t = new Ka(e);
    if (t.push(n), t.err) throw t.msg || Pc[t.err];
    return t.result;
  }
  var fp = Ka, hp = up, dp = {
    Inflate: fp,
    inflate: hp
  };
  const { Inflate: pp, inflate: mp } = dp;
  var Nu = pp, gp = mp;
  const Mh = [];
  for (let n = 0; n < 256; n++) {
    let e = n;
    for (let t = 0; t < 8; t++) e & 1 ? e = 3988292384 ^ e >>> 1 : e = e >>> 1;
    Mh[n] = e;
  }
  const _u = 4294967295;
  function vp(n, e, t) {
    let r = n;
    for (let o = 0; o < t; o++) r = Mh[(r ^ e[o]) & 255] ^ r >>> 8;
    return r;
  }
  function bp(n, e) {
    return (vp(_u, n, e) ^ _u) >>> 0;
  }
  function Au(n, e, t) {
    const r = n.readUint32(), o = bp(new Uint8Array(n.buffer, n.byteOffset + n.offset - e - 4, e), e);
    if (o !== r) throw new Error(`CRC mismatch for chunk ${t}. Expected ${r}, found ${o}`);
  }
  function Rh(n, e, t) {
    for (let r = 0; r < t; r++) e[r] = n[r];
  }
  function Oh(n, e, t, r) {
    let o = 0;
    for (; o < r; o++) e[o] = n[o];
    for (; o < t; o++) e[o] = n[o] + e[o - r] & 255;
  }
  function Th(n, e, t, r) {
    let o = 0;
    if (t.length === 0) for (; o < r; o++) e[o] = n[o];
    else for (; o < r; o++) e[o] = n[o] + t[o] & 255;
  }
  function Dh(n, e, t, r, o) {
    let a = 0;
    if (t.length === 0) {
      for (; a < o; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + (e[a - o] >> 1) & 255;
    } else {
      for (; a < o; a++) e[a] = n[a] + (t[a] >> 1) & 255;
      for (; a < r; a++) e[a] = n[a] + (e[a - o] + t[a] >> 1) & 255;
    }
  }
  function Bh(n, e, t, r, o) {
    let a = 0;
    if (t.length === 0) {
      for (; a < o; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + e[a - o] & 255;
    } else {
      for (; a < o; a++) e[a] = n[a] + t[a] & 255;
      for (; a < r; a++) e[a] = n[a] + wp(e[a - o], t[a], t[a - o]) & 255;
    }
  }
  function wp(n, e, t) {
    const r = n + e - t, o = Math.abs(r - n), a = Math.abs(r - e), f = Math.abs(r - t);
    return o <= a && o <= f ? n : a <= f ? e : t;
  }
  function yp(n, e, t, r, o, a) {
    switch (n) {
      case 0:
        Rh(e, t, o);
        break;
      case 1:
        Oh(e, t, o, a);
        break;
      case 2:
        Th(e, t, r, o);
        break;
      case 3:
        Dh(e, t, r, o, a);
        break;
      case 4:
        Bh(e, t, r, o, a);
        break;
      default:
        throw new Error(`Unsupported filter: ${n}`);
    }
  }
  const xp = new Uint16Array([
    255
  ]), Np = new Uint8Array(xp.buffer), _p = Np[0] === 255;
  function Ap(n) {
    const { data: e, width: t, height: r, channels: o, depth: a } = n, f = [
      {
        x: 0,
        y: 0,
        xStep: 8,
        yStep: 8
      },
      {
        x: 4,
        y: 0,
        xStep: 8,
        yStep: 8
      },
      {
        x: 0,
        y: 4,
        xStep: 4,
        yStep: 8
      },
      {
        x: 2,
        y: 0,
        xStep: 4,
        yStep: 4
      },
      {
        x: 0,
        y: 2,
        xStep: 2,
        yStep: 4
      },
      {
        x: 1,
        y: 0,
        xStep: 2,
        yStep: 2
      },
      {
        x: 0,
        y: 1,
        xStep: 1,
        yStep: 2
      }
    ], c = Math.ceil(a / 8) * o, u = new Uint8Array(r * t * c);
    let d = 0;
    for (let m = 0; m < 7; m++) {
      const w = f[m], S = Math.ceil((t - w.x) / w.xStep), p = Math.ceil((r - w.y) / w.yStep);
      if (S <= 0 || p <= 0) continue;
      const E = S * c, L = new Uint8Array(E);
      for (let j = 0; j < p; j++) {
        const N = e[d++], z = e.subarray(d, d + E);
        d += E;
        const G = new Uint8Array(E);
        yp(N, z, G, L, E, c), L.set(G);
        for (let D = 0; D < S; D++) {
          const ae = w.x + D * w.xStep, be = w.y + j * w.yStep;
          if (!(ae >= t || be >= r)) for (let he = 0; he < c; he++) u[(be * t + ae) * c + he] = G[D * c + he];
        }
      }
    }
    if (a === 16) {
      const m = new Uint16Array(u.buffer);
      if (_p) for (let w = 0; w < m.length; w++) m[w] = Sp(m[w]);
      return m;
    } else return u;
  }
  function Sp(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const Lp = new Uint16Array([
    255
  ]), kp = new Uint8Array(Lp.buffer), Cp = kp[0] === 255, Pp = new Uint8Array(0);
  function Su(n) {
    const { data: e, width: t, height: r, channels: o, depth: a } = n, f = Math.ceil(a / 8) * o, c = Math.ceil(a / 8 * o * t), u = new Uint8Array(r * c);
    let d = Pp, m = 0, w, S;
    for (let p = 0; p < r; p++) {
      switch (w = e.subarray(m + 1, m + 1 + c), S = u.subarray(p * c, (p + 1) * c), e[m]) {
        case 0:
          Rh(w, S, c);
          break;
        case 1:
          Oh(w, S, c, f);
          break;
        case 2:
          Th(w, S, d, c);
          break;
        case 3:
          Dh(w, S, d, c, f);
          break;
        case 4:
          Bh(w, S, d, c, f);
          break;
        default:
          throw new Error(`Unsupported filter: ${e[m]}`);
      }
      d = S, m += c + 1;
    }
    if (a === 16) {
      const p = new Uint16Array(u.buffer);
      if (Cp) for (let E = 0; E < p.length; E++) p[E] = Ep(p[E]);
      return p;
    } else return u;
  }
  function Ep(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const Yo = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
  function Lu(n) {
    if (!Ip(n.readBytes(Yo.length))) throw new Error("wrong PNG signature");
  }
  function Ip(n) {
    if (n.length < Yo.length) return false;
    for (let e = 0; e < Yo.length; e++) if (n[e] !== Yo[e]) return false;
    return true;
  }
  const jp = "tEXt", Fp = 0, qh = new TextDecoder("latin1");
  function Mp(n) {
    if (Op(n), n.length === 0 || n.length > 79) throw new Error("keyword length must be between 1 and 79");
  }
  const Rp = /^[\u0000-\u00FF]*$/;
  function Op(n) {
    if (!Rp.test(n)) throw new Error("invalid latin1 text");
  }
  function Tp(n, e, t) {
    const r = Uh(e);
    n[r] = Dp(e, t - r.length - 1);
  }
  function Uh(n) {
    for (n.mark(); n.readByte() !== Fp; ) ;
    const e = n.offset;
    n.reset();
    const t = qh.decode(n.readBytes(e - n.offset - 1));
    return n.skip(1), Mp(t), t;
  }
  function Dp(n, e) {
    return qh.decode(n.readBytes(e));
  }
  const Rn = {
    UNKNOWN: -1,
    GREYSCALE: 0,
    TRUECOLOUR: 2,
    INDEXED_COLOUR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOUR_ALPHA: 6
  }, fc = {
    UNKNOWN: -1,
    DEFLATE: 0
  }, ku = {
    UNKNOWN: -1,
    ADAPTIVE: 0
  }, hc = {
    UNKNOWN: -1,
    NO_INTERLACE: 0,
    ADAM7: 1
  }, Uo = {
    NONE: 0,
    BACKGROUND: 1,
    PREVIOUS: 2
  }, dc = {
    SOURCE: 0,
    OVER: 1
  };
  class Bp extends Gc {
    constructor(e, t = {}) {
      super(e);
      __publicField(this, "_checkCrc");
      __publicField(this, "_inflator");
      __publicField(this, "_png");
      __publicField(this, "_apng");
      __publicField(this, "_end");
      __publicField(this, "_hasPalette");
      __publicField(this, "_palette");
      __publicField(this, "_hasTransparency");
      __publicField(this, "_transparency");
      __publicField(this, "_compressionMethod");
      __publicField(this, "_filterMethod");
      __publicField(this, "_interlaceMethod");
      __publicField(this, "_colorType");
      __publicField(this, "_isAnimated");
      __publicField(this, "_numberOfFrames");
      __publicField(this, "_numberOfPlays");
      __publicField(this, "_frames");
      __publicField(this, "_writingDataChunks");
      const { checkCrc: r = false } = t;
      this._checkCrc = r, this._inflator = new Nu(), this._png = {
        width: -1,
        height: -1,
        channels: -1,
        data: new Uint8Array(0),
        depth: 1,
        text: {}
      }, this._apng = {
        width: -1,
        height: -1,
        channels: -1,
        depth: 1,
        numberOfFrames: 1,
        numberOfPlays: 0,
        text: {},
        frames: []
      }, this._end = false, this._hasPalette = false, this._palette = [], this._hasTransparency = false, this._transparency = new Uint16Array(0), this._compressionMethod = fc.UNKNOWN, this._filterMethod = ku.UNKNOWN, this._interlaceMethod = hc.UNKNOWN, this._colorType = Rn.UNKNOWN, this._isAnimated = false, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = false, this.setBigEndian();
    }
    decode() {
      for (Lu(this); !this._end; ) {
        const e = this.readUint32(), t = this.readChars(4);
        this.decodeChunk(e, t);
      }
      return this.decodeImage(), this._png;
    }
    decodeApng() {
      for (Lu(this); !this._end; ) {
        const e = this.readUint32(), t = this.readChars(4);
        this.decodeApngChunk(e, t);
      }
      return this.decodeApngImage(), this._apng;
    }
    decodeChunk(e, t) {
      const r = this.offset;
      switch (t) {
        case "IHDR":
          this.decodeIHDR();
          break;
        case "PLTE":
          this.decodePLTE(e);
          break;
        case "IDAT":
          this.decodeIDAT(e);
          break;
        case "IEND":
          this._end = true;
          break;
        case "tRNS":
          this.decodetRNS(e);
          break;
        case "iCCP":
          this.decodeiCCP(e);
          break;
        case jp:
          Tp(this._png.text, this, e);
          break;
        case "pHYs":
          this.decodepHYs();
          break;
        default:
          this.skip(e);
          break;
      }
      if (this.offset - r !== e) throw new Error(`Length mismatch while decoding chunk ${t}`);
      this._checkCrc ? Au(this, e + 4, t) : this.skip(4);
    }
    decodeApngChunk(e, t) {
      const r = this.offset;
      switch (t !== "fdAT" && t !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), t) {
        case "acTL":
          this.decodeACTL();
          break;
        case "fcTL":
          this.decodeFCTL();
          break;
        case "fdAT":
          this.decodeFDAT(e);
          break;
        default:
          this.decodeChunk(e, t), this.offset = r + e;
          break;
      }
      if (this.offset - r !== e) throw new Error(`Length mismatch while decoding chunk ${t}`);
      this._checkCrc ? Au(this, e + 4, t) : this.skip(4);
    }
    decodeIHDR() {
      const e = this._png;
      e.width = this.readUint32(), e.height = this.readUint32(), e.depth = qp(this.readUint8());
      const t = this.readUint8();
      this._colorType = t;
      let r;
      switch (t) {
        case Rn.GREYSCALE:
          r = 1;
          break;
        case Rn.TRUECOLOUR:
          r = 3;
          break;
        case Rn.INDEXED_COLOUR:
          r = 1;
          break;
        case Rn.GREYSCALE_ALPHA:
          r = 2;
          break;
        case Rn.TRUECOLOUR_ALPHA:
          r = 4;
          break;
        case Rn.UNKNOWN:
        default:
          throw new Error(`Unknown color type: ${t}`);
      }
      if (this._png.channels = r, this._compressionMethod = this.readUint8(), this._compressionMethod !== fc.DEFLATE) throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
      this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
    }
    decodeACTL() {
      this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = true;
    }
    decodeFCTL() {
      const e = {
        sequenceNumber: this.readUint32(),
        width: this.readUint32(),
        height: this.readUint32(),
        xOffset: this.readUint32(),
        yOffset: this.readUint32(),
        delayNumber: this.readUint16(),
        delayDenominator: this.readUint16(),
        disposeOp: this.readUint8(),
        blendOp: this.readUint8(),
        data: new Uint8Array(0)
      };
      this._frames.push(e);
    }
    decodePLTE(e) {
      if (e % 3 !== 0) throw new RangeError(`PLTE field length must be a multiple of 3. Got ${e}`);
      const t = e / 3;
      this._hasPalette = true;
      const r = [];
      this._palette = r;
      for (let o = 0; o < t; o++) r.push([
        this.readUint8(),
        this.readUint8(),
        this.readUint8()
      ]);
    }
    decodeIDAT(e) {
      this._writingDataChunks = true;
      const t = e, r = this.offset + this.byteOffset;
      if (this._inflator.push(new Uint8Array(this.buffer, r, t)), this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
      this.skip(e);
    }
    decodeFDAT(e) {
      this._writingDataChunks = true;
      let t = e, r = this.offset + this.byteOffset;
      if (r += 4, t -= 4, this._inflator.push(new Uint8Array(this.buffer, r, t)), this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
      this.skip(e);
    }
    decodetRNS(e) {
      switch (this._colorType) {
        case Rn.GREYSCALE:
        case Rn.TRUECOLOUR: {
          if (e % 2 !== 0) throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${e}`);
          if (e / 2 > this._png.width * this._png.height) throw new Error(`tRNS chunk contains more alpha values than there are pixels (${e / 2} vs ${this._png.width * this._png.height})`);
          this._hasTransparency = true, this._transparency = new Uint16Array(e / 2);
          for (let t = 0; t < e / 2; t++) this._transparency[t] = this.readUint16();
          break;
        }
        case Rn.INDEXED_COLOUR: {
          if (e > this._palette.length) throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${e} vs ${this._palette.length})`);
          let t = 0;
          for (; t < e; t++) {
            const r = this.readByte();
            this._palette[t].push(r);
          }
          for (; t < this._palette.length; t++) this._palette[t].push(255);
          break;
        }
        case Rn.UNKNOWN:
        case Rn.GREYSCALE_ALPHA:
        case Rn.TRUECOLOUR_ALPHA:
        default:
          throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
      }
    }
    decodeiCCP(e) {
      const t = Uh(this), r = this.readUint8();
      if (r !== fc.DEFLATE) throw new Error(`Unsupported iCCP compression method: ${r}`);
      const o = this.readBytes(e - t.length - 2);
      this._png.iccEmbeddedProfile = {
        name: t,
        profile: gp(o)
      };
    }
    decodepHYs() {
      const e = this.readUint32(), t = this.readUint32(), r = this.readByte();
      this._png.resolution = {
        x: e,
        y: t,
        unit: r
      };
    }
    decodeApngImage() {
      this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
      for (let e = 0; e < this._numberOfFrames; e++) {
        const t = {
          sequenceNumber: this._frames[e].sequenceNumber,
          delayNumber: this._frames[e].delayNumber,
          delayDenominator: this._frames[e].delayDenominator,
          data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
        }, r = this._frames.at(e);
        if (r) {
          if (r.data = Su({
            data: r.data,
            width: r.width,
            height: r.height,
            channels: this._apng.channels,
            depth: this._apng.depth
          }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), e === 0 || r.xOffset === 0 && r.yOffset === 0 && r.width === this._png.width && r.height === this._png.height) t.data = r.data;
          else {
            const o = this._apng.frames.at(e - 1);
            this.disposeFrame(r, o, t), this.addFrameDataToCanvas(t, r);
          }
          this._apng.frames.push(t);
        }
      }
      return this._apng;
    }
    disposeFrame(e, t, r) {
      switch (e.disposeOp) {
        case Uo.NONE:
          break;
        case Uo.BACKGROUND:
          for (let o = 0; o < this._png.height; o++) for (let a = 0; a < this._png.width; a++) {
            const f = (o * e.width + a) * this._png.channels;
            for (let c = 0; c < this._png.channels; c++) r.data[f + c] = 0;
          }
          break;
        case Uo.PREVIOUS:
          r.data.set(t.data);
          break;
        default:
          throw new Error("Unknown disposeOp");
      }
    }
    addFrameDataToCanvas(e, t) {
      const r = 1 << this._png.depth, o = (a, f) => {
        const c = ((a + t.yOffset) * this._png.width + t.xOffset + f) * this._png.channels, u = (a * t.width + f) * this._png.channels;
        return {
          index: c,
          frameIndex: u
        };
      };
      switch (t.blendOp) {
        case dc.SOURCE:
          for (let a = 0; a < t.height; a++) for (let f = 0; f < t.width; f++) {
            const { index: c, frameIndex: u } = o(a, f);
            for (let d = 0; d < this._png.channels; d++) e.data[c + d] = t.data[u + d];
          }
          break;
        case dc.OVER:
          for (let a = 0; a < t.height; a++) for (let f = 0; f < t.width; f++) {
            const { index: c, frameIndex: u } = o(a, f);
            for (let d = 0; d < this._png.channels; d++) {
              const m = t.data[u + this._png.channels - 1] / r, w = d % (this._png.channels - 1) === 0 ? 1 : t.data[u + d], S = Math.floor(m * w + (1 - m) * e.data[c + d]);
              e.data[c + d] += S;
            }
          }
          break;
        default:
          throw new Error("Unknown blendOp");
      }
    }
    decodeImage() {
      var _a;
      if (this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
      const e = this._isAnimated ? ((_a = this._frames) == null ? void 0 : _a.at(0)).data : this._inflator.result;
      if (this._filterMethod !== ku.ADAPTIVE) throw new Error(`Filter method ${this._filterMethod} not supported`);
      if (this._interlaceMethod === hc.NO_INTERLACE) this._png.data = Su({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
      else if (this._interlaceMethod === hc.ADAM7) this._png.data = Ap({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
      else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
      this._hasPalette && (this._png.palette = this._palette), this._hasTransparency && (this._png.transparency = this._transparency);
    }
    pushDataToFrame() {
      const e = this._inflator.result, t = this._frames.at(-1);
      t ? t.data = e : this._frames.push({
        sequenceNumber: 0,
        width: this._png.width,
        height: this._png.height,
        xOffset: 0,
        yOffset: 0,
        delayNumber: 0,
        delayDenominator: 0,
        disposeOp: Uo.NONE,
        blendOp: dc.SOURCE,
        data: e
      }), this._inflator = new Nu(), this._writingDataChunks = false;
    }
  }
  function qp(n) {
    if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16) throw new Error(`invalid bit depth: ${n}`);
    return n;
  }
  var Cu;
  (function(n) {
    n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
  })(Cu || (Cu = {}));
  function Up(n, e) {
    return new Bp(n, e).decode();
  }
  var Xe = /* @__PURE__ */ function() {
    return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
  }();
  function pc() {
    Xe.console && typeof Xe.console.log == "function" && Xe.console.log.apply(Xe.console, arguments);
  }
  var Ct = {
    log: pc,
    warn: function(n) {
      Xe.console && (typeof Xe.console.warn == "function" ? Xe.console.warn.apply(Xe.console, arguments) : pc.call(null, arguments));
    },
    error: function(n) {
      Xe.console && (typeof Xe.console.error == "function" ? Xe.console.error.apply(Xe.console, arguments) : pc(n));
    }
  };
  function mc(n, e, t) {
    var r = new XMLHttpRequest();
    r.open("GET", n), r.responseType = "blob", r.onload = function() {
      Li(r.response, e, t);
    }, r.onerror = function() {
      Ct.error("could not download file");
    }, r.send();
  }
  function Pu(n) {
    var e = new XMLHttpRequest();
    e.open("HEAD", n, false);
    try {
      e.send();
    } catch {
    }
    return e.status >= 200 && e.status <= 299;
  }
  function zo(n) {
    try {
      n.dispatchEvent(new MouseEvent("click"));
    } catch {
      var e = document.createEvent("MouseEvents");
      e.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), n.dispatchEvent(e);
    }
  }
  var Li = Xe.saveAs || ((typeof window > "u" ? "undefined" : St(window)) !== "object" || window !== Xe ? function() {
  } : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, e, t) {
    var r = Xe.URL || Xe.webkitURL, o = document.createElement("a");
    e = e || n.name || "download", o.download = e, o.rel = "noopener", typeof n == "string" ? (o.href = n, o.origin !== location.origin ? Pu(o.href) ? mc(n, e, t) : zo(o, o.target = "_blank") : zo(o)) : (o.href = r.createObjectURL(n), setTimeout(function() {
      r.revokeObjectURL(o.href);
    }, 4e4), setTimeout(function() {
      zo(o);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function(n, e, t) {
    if (e = e || n.name || "download", typeof n == "string") if (Pu(n)) mc(n, e, t);
    else {
      var r = document.createElement("a");
      r.href = n, r.target = "_blank", setTimeout(function() {
        zo(r);
      });
    }
    else navigator.msSaveOrOpenBlob(function(o, a) {
      return a === void 0 ? a = {
        autoBom: false
      } : St(a) !== "object" && (Ct.warn("Deprecated: Expected third argument to be a object"), a = {
        autoBom: !a
      }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type) ? new Blob([
        "\uFEFF",
        o
      ], {
        type: o.type
      }) : o;
    }(n, t), e);
  } : function(n, e, t, r) {
    if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), typeof n == "string") return mc(n, e, t);
    var o = n.type === "application/octet-stream", a = /constructor/i.test(Xe.HTMLElement) || Xe.safari, f = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((f || o && a) && (typeof FileReader > "u" ? "undefined" : St(FileReader)) === "object") {
      var c = new FileReader();
      c.onloadend = function() {
        var m = c.result;
        m = f ? m : m.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = m : location = m, r = null;
      }, c.readAsDataURL(n);
    } else {
      var u = Xe.URL || Xe.webkitURL, d = u.createObjectURL(n);
      r ? r.location = d : location.href = d, r = null, setTimeout(function() {
        u.revokeObjectURL(d);
      }, 4e4);
    }
  });
  function zh(n) {
    var e;
    n = n || "", this.ok = false, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32"
    }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
    for (var t = [
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: [
          "rgb(123, 234, 45)",
          "rgb(255,234,245)"
        ],
        process: function(c) {
          return [
            parseInt(c[1]),
            parseInt(c[2]),
            parseInt(c[3])
          ];
        }
      },
      {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: [
          "#00ff00",
          "336699"
        ],
        process: function(c) {
          return [
            parseInt(c[1], 16),
            parseInt(c[2], 16),
            parseInt(c[3], 16)
          ];
        }
      },
      {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: [
          "#fb0",
          "f0f"
        ],
        process: function(c) {
          return [
            parseInt(c[1] + c[1], 16),
            parseInt(c[2] + c[2], 16),
            parseInt(c[3] + c[3], 16)
          ];
        }
      }
    ], r = 0; r < t.length; r++) {
      var o = t[r].re, a = t[r].process, f = o.exec(n);
      f && (e = a(f), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = true);
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toHex = function() {
      var c = this.r.toString(16), u = this.g.toString(16), d = this.b.toString(16);
      return c.length == 1 && (c = "0" + c), u.length == 1 && (u = "0" + u), d.length == 1 && (d = "0" + d), "#" + c + u + d;
    };
  }
  var Xo = Xe.atob.bind(Xe), Eu = Xe.btoa.bind(Xe);
  function gc(n, e) {
    var t = n[0], r = n[1], o = n[2], a = n[3];
    t = mn(t, r, o, a, e[0], 7, -680876936), a = mn(a, t, r, o, e[1], 12, -389564586), o = mn(o, a, t, r, e[2], 17, 606105819), r = mn(r, o, a, t, e[3], 22, -1044525330), t = mn(t, r, o, a, e[4], 7, -176418897), a = mn(a, t, r, o, e[5], 12, 1200080426), o = mn(o, a, t, r, e[6], 17, -1473231341), r = mn(r, o, a, t, e[7], 22, -45705983), t = mn(t, r, o, a, e[8], 7, 1770035416), a = mn(a, t, r, o, e[9], 12, -1958414417), o = mn(o, a, t, r, e[10], 17, -42063), r = mn(r, o, a, t, e[11], 22, -1990404162), t = mn(t, r, o, a, e[12], 7, 1804603682), a = mn(a, t, r, o, e[13], 12, -40341101), o = mn(o, a, t, r, e[14], 17, -1502002290), t = gn(t, r = mn(r, o, a, t, e[15], 22, 1236535329), o, a, e[1], 5, -165796510), a = gn(a, t, r, o, e[6], 9, -1069501632), o = gn(o, a, t, r, e[11], 14, 643717713), r = gn(r, o, a, t, e[0], 20, -373897302), t = gn(t, r, o, a, e[5], 5, -701558691), a = gn(a, t, r, o, e[10], 9, 38016083), o = gn(o, a, t, r, e[15], 14, -660478335), r = gn(r, o, a, t, e[4], 20, -405537848), t = gn(t, r, o, a, e[9], 5, 568446438), a = gn(a, t, r, o, e[14], 9, -1019803690), o = gn(o, a, t, r, e[3], 14, -187363961), r = gn(r, o, a, t, e[8], 20, 1163531501), t = gn(t, r, o, a, e[13], 5, -1444681467), a = gn(a, t, r, o, e[2], 9, -51403784), o = gn(o, a, t, r, e[7], 14, 1735328473), t = vn(t, r = gn(r, o, a, t, e[12], 20, -1926607734), o, a, e[5], 4, -378558), a = vn(a, t, r, o, e[8], 11, -2022574463), o = vn(o, a, t, r, e[11], 16, 1839030562), r = vn(r, o, a, t, e[14], 23, -35309556), t = vn(t, r, o, a, e[1], 4, -1530992060), a = vn(a, t, r, o, e[4], 11, 1272893353), o = vn(o, a, t, r, e[7], 16, -155497632), r = vn(r, o, a, t, e[10], 23, -1094730640), t = vn(t, r, o, a, e[13], 4, 681279174), a = vn(a, t, r, o, e[0], 11, -358537222), o = vn(o, a, t, r, e[3], 16, -722521979), r = vn(r, o, a, t, e[6], 23, 76029189), t = vn(t, r, o, a, e[9], 4, -640364487), a = vn(a, t, r, o, e[12], 11, -421815835), o = vn(o, a, t, r, e[15], 16, 530742520), t = bn(t, r = vn(r, o, a, t, e[2], 23, -995338651), o, a, e[0], 6, -198630844), a = bn(a, t, r, o, e[7], 10, 1126891415), o = bn(o, a, t, r, e[14], 15, -1416354905), r = bn(r, o, a, t, e[5], 21, -57434055), t = bn(t, r, o, a, e[12], 6, 1700485571), a = bn(a, t, r, o, e[3], 10, -1894986606), o = bn(o, a, t, r, e[10], 15, -1051523), r = bn(r, o, a, t, e[1], 21, -2054922799), t = bn(t, r, o, a, e[8], 6, 1873313359), a = bn(a, t, r, o, e[15], 10, -30611744), o = bn(o, a, t, r, e[6], 15, -1560198380), r = bn(r, o, a, t, e[13], 21, 1309151649), t = bn(t, r, o, a, e[4], 6, -145523070), a = bn(a, t, r, o, e[11], 10, -1120210379), o = bn(o, a, t, r, e[2], 15, 718787259), r = bn(r, o, a, t, e[9], 21, -343485551), n[0] = ai(t, n[0]), n[1] = ai(r, n[1]), n[2] = ai(o, n[2]), n[3] = ai(a, n[3]);
  }
  function ds(n, e, t, r, o, a) {
    return e = ai(ai(e, n), ai(r, a)), ai(e << o | e >>> 32 - o, t);
  }
  function mn(n, e, t, r, o, a, f) {
    return ds(e & t | ~e & r, n, e, o, a, f);
  }
  function gn(n, e, t, r, o, a, f) {
    return ds(e & r | t & ~r, n, e, o, a, f);
  }
  function vn(n, e, t, r, o, a, f) {
    return ds(e ^ t ^ r, n, e, o, a, f);
  }
  function bn(n, e, t, r, o, a, f) {
    return ds(t ^ (e | ~r), n, e, o, a, f);
  }
  function Hh(n) {
    var e, t = n.length, r = [
      1732584193,
      -271733879,
      -1732584194,
      271733878
    ];
    for (e = 64; e <= n.length; e += 64) gc(r, zp(n.substring(e - 64, e)));
    n = n.substring(e - 64);
    var o = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    for (e = 0; e < n.length; e++) o[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
    if (o[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (gc(r, o), e = 0; e < 16; e++) o[e] = 0;
    return o[14] = 8 * t, gc(r, o), r;
  }
  function zp(n) {
    var e, t = [];
    for (e = 0; e < 64; e += 4) t[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
    return t;
  }
  var Iu = "0123456789abcdef".split("");
  function Hp(n) {
    for (var e = "", t = 0; t < 4; t++) e += Iu[n >> 8 * t + 4 & 15] + Iu[n >> 8 * t & 15];
    return e;
  }
  function Wp(n) {
    return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
  }
  function Ic(n) {
    return Hh(n).map(Wp).join("");
  }
  var Gp = function(n) {
    for (var e = 0; e < n.length; e++) n[e] = Hp(n[e]);
    return n.join("");
  }(Hh("hello")) != "5d41402abc4b2a76b9719d911017c592";
  function ai(n, e) {
    if (Gp) {
      var t = (65535 & n) + (65535 & e);
      return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    return n + e & 4294967295;
  }
  function jc(n, e) {
    var t, r, o, a;
    if (n !== t) {
      for (var f = (o = n, a = 1 + (256 / n.length | 0), new Array(a + 1).join(o)), c = [], u = 0; u < 256; u++) c[u] = u;
      var d = 0;
      for (u = 0; u < 256; u++) {
        var m = c[u];
        d = (d + m + f.charCodeAt(u)) % 256, c[u] = c[d], c[d] = m;
      }
      t = n, r = c;
    } else c = r;
    var w = e.length, S = 0, p = 0, E = "";
    for (u = 0; u < w; u++) p = (p + (m = c[S = (S + 1) % 256])) % 256, c[S] = c[p], c[p] = m, f = c[(c[S] + c[p]) % 256], E += String.fromCharCode(e.charCodeAt(u) ^ f);
    return E;
  }
  var ju = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
  };
  function ta(n, e, t, r) {
    this.v = 1, this.r = 2;
    var o = 192;
    n.forEach(function(c) {
      if (ju.perm !== void 0) throw new Error("Invalid permission: " + c);
      o += ju[c];
    }), this.padding = "(\xBFN^Nu\x8AAd\0NV\xFF\xFA\b..\0\xB6\xD0h>\x80/\f\xA9\xFEdSiz";
    var a = (e + this.padding).substr(0, 32), f = (t + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(a, f), this.P = -(1 + (255 ^ o)), this.encryptionKey = Ic(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = jc(this.encryptionKey, this.padding);
  }
  function na(n) {
    if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
    for (var e = "", t = n.length, r = 0; r < t; r++) {
      var o = n.charCodeAt(r);
      e += o < 33 || o === 35 || o === 37 || o === 40 || o === 41 || o === 47 || o === 60 || o === 62 || o === 91 || o === 93 || o === 123 || o === 125 || o > 126 ? "#" + ("0" + o.toString(16)).slice(-2) : n[r];
    }
    return e;
  }
  function Fu(n) {
    if (St(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
    var e = {};
    this.subscribe = function(t, r, o) {
      if (o = o || false, typeof t != "string" || typeof r != "function" || typeof o != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
      e.hasOwnProperty(t) || (e[t] = {});
      var a = Math.random().toString(35);
      return e[t][a] = [
        r,
        !!o
      ], a;
    }, this.unsubscribe = function(t) {
      for (var r in e) if (e[r][t]) return delete e[r][t], Object.keys(e[r]).length === 0 && delete e[r], true;
      return false;
    }, this.publish = function(t) {
      if (e.hasOwnProperty(t)) {
        var r = Array.prototype.slice.call(arguments, 1), o = [];
        for (var a in e[t]) {
          var f = e[t][a];
          try {
            f[0].apply(n, r);
          } catch (c) {
            Xe.console && Ct.error("jsPDF PubSub Error", c.message, c);
          }
          f[1] && o.push(a);
        }
        o.length && o.forEach(this.unsubscribe);
      }
    }, this.getTopics = function() {
      return e;
    };
  }
  function is(n) {
    if (!(this instanceof is)) return new is(n);
    var e = "opacity,stroke-opacity".split(",");
    for (var t in n) n.hasOwnProperty(t) && e.indexOf(t) >= 0 && (this[t] = n[t]);
    this.id = "", this.objectNumber = -1;
  }
  function Wh(n, e) {
    this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1;
  }
  function ki(n, e, t, r, o) {
    if (!(this instanceof ki)) return new ki(n, e, t, r, o);
    this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = t, Wh.call(this, r, o);
  }
  function ra(n, e, t, r, o) {
    if (!(this instanceof ra)) return new ra(n, e, t, r, o);
    this.boundingBox = n, this.xStep = e, this.yStep = t, this.stream = "", this.cloneIndex = 0, Wh.call(this, r, o);
  }
  function Be(n) {
    var e, t = typeof arguments[0] == "string" ? arguments[0] : "p", r = arguments[1], o = arguments[2], a = arguments[3], f = [], c = 1, u = 16, d = "S", m = null;
    St(n = n || {}) === "object" && (t = n.orientation, r = n.unit || r, o = n.format || o, a = n.compress || n.compressPdf || a, (m = n.encryption || null) !== null && (m.userPassword = m.userPassword || "", m.ownerPassword = m.ownerPassword || "", m.userPermissions = m.userPermissions || []), c = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (u = n.floatPrecision), d = n.defaultPathOperation || "S"), f = n.filters || (a === true ? [
      "FlateEncode"
    ] : f), r = r || "mm", t = ("" + (t || "P")).toLowerCase();
    var w = n.putOnlyUsedFonts || false, S = {}, p = {
      internal: {},
      __private__: {}
    };
    p.__private__.PubSub = Fu;
    var E = "1.3", L = p.__private__.getPdfVersion = function() {
      return E;
    };
    p.__private__.setPdfVersion = function(l) {
      E = l;
    };
    var j = {
      a0: [
        2383.94,
        3370.39
      ],
      a1: [
        1683.78,
        2383.94
      ],
      a2: [
        1190.55,
        1683.78
      ],
      a3: [
        841.89,
        1190.55
      ],
      a4: [
        595.28,
        841.89
      ],
      a5: [
        419.53,
        595.28
      ],
      a6: [
        297.64,
        419.53
      ],
      a7: [
        209.76,
        297.64
      ],
      a8: [
        147.4,
        209.76
      ],
      a9: [
        104.88,
        147.4
      ],
      a10: [
        73.7,
        104.88
      ],
      b0: [
        2834.65,
        4008.19
      ],
      b1: [
        2004.09,
        2834.65
      ],
      b2: [
        1417.32,
        2004.09
      ],
      b3: [
        1000.63,
        1417.32
      ],
      b4: [
        708.66,
        1000.63
      ],
      b5: [
        498.9,
        708.66
      ],
      b6: [
        354.33,
        498.9
      ],
      b7: [
        249.45,
        354.33
      ],
      b8: [
        175.75,
        249.45
      ],
      b9: [
        124.72,
        175.75
      ],
      b10: [
        87.87,
        124.72
      ],
      c0: [
        2599.37,
        3676.54
      ],
      c1: [
        1836.85,
        2599.37
      ],
      c2: [
        1298.27,
        1836.85
      ],
      c3: [
        918.43,
        1298.27
      ],
      c4: [
        649.13,
        918.43
      ],
      c5: [
        459.21,
        649.13
      ],
      c6: [
        323.15,
        459.21
      ],
      c7: [
        229.61,
        323.15
      ],
      c8: [
        161.57,
        229.61
      ],
      c9: [
        113.39,
        161.57
      ],
      c10: [
        79.37,
        113.39
      ],
      dl: [
        311.81,
        623.62
      ],
      letter: [
        612,
        792
      ],
      "government-letter": [
        576,
        756
      ],
      legal: [
        612,
        1008
      ],
      "junior-legal": [
        576,
        360
      ],
      ledger: [
        1224,
        792
      ],
      tabloid: [
        792,
        1224
      ],
      "credit-card": [
        153,
        243
      ]
    };
    p.__private__.getPageFormats = function() {
      return j;
    };
    var N = p.__private__.getPageFormat = function(l) {
      return j[l];
    };
    o = o || "a4";
    var z = "compat", G = "advanced", D = z;
    function ae() {
      this.saveGraphicsState(), F(new $e(rt, 0, 0, -rt, 0, gi() * rt).toString() + " cm"), this.setFontSize(this.getFontSize() / rt), d = "n", D = G;
    }
    function be() {
      this.restoreGraphicsState(), d = "S", D = z;
    }
    var he = p.__private__.combineFontStyleAndFontWeight = function(l, v) {
      if (l == "bold" && v == "normal" || l == "bold" && v == 400 || l == "normal" && v == "italic" || l == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
      return v && (l = v == 400 || v === "normal" ? l === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || l !== "normal" ? (v == 700 ? "bold" : v) + "" + l : "bold"), l;
    };
    p.advancedAPI = function(l) {
      var v = D === z;
      return v && ae.call(this), typeof l != "function" || (l(this), v && be.call(this)), this;
    }, p.compatAPI = function(l) {
      var v = D === G;
      return v && be.call(this), typeof l != "function" || (l(this), v && ae.call(this)), this;
    }, p.isAdvancedAPI = function() {
      return D === G;
    };
    var J, H = function(l) {
      if (D !== G) throw new Error(l + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
    }, V = p.roundToPrecision = p.__private__.roundToPrecision = function(l, v) {
      var O = e || v;
      if (isNaN(l) || isNaN(O)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
      return l.toFixed(O).replace(/0+$/, "");
    };
    J = p.hpf = p.__private__.hpf = typeof u == "number" ? function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return V(l, u);
    } : u === "smart" ? function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return V(l, l > -1 && l < 1 ? 16 : 5);
    } : function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return V(l, 16);
    };
    var x = p.f2 = p.__private__.f2 = function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f2");
      return V(l, 2);
    }, I = p.__private__.f3 = function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f3");
      return V(l, 3);
    }, B = p.scale = p.__private__.scale = function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.scale");
      return D === z ? l * rt : D === G ? l : void 0;
    }, U = function(l) {
      return B(function(v) {
        return D === z ? gi() - v : D === G ? v : void 0;
      }(l));
    };
    p.__private__.setPrecision = p.setPrecision = function(l) {
      typeof parseInt(l, 10) == "number" && (e = parseInt(l, 10));
    };
    var se, le = "00000000000000000000000000000000", ge = p.__private__.getFileId = function() {
      return le;
    }, ne = p.__private__.setFileId = function(l) {
      return le = l !== void 0 && /^[a-fA-F0-9]{32}$/.test(l) ? l.toUpperCase() : le.split("").map(function() {
        return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
      }).join(""), m !== null && (Zt = new ta(m.userPermissions, m.userPassword, m.ownerPassword, le)), le;
    };
    p.setFileId = function(l) {
      return ne(l), this;
    }, p.getFileId = function() {
      return ge();
    };
    var te = p.__private__.convertDateToPDFDate = function(l) {
      var v = l.getTimezoneOffset(), O = v < 0 ? "+" : "-", W = Math.floor(Math.abs(v / 60)), Z = Math.abs(v % 60), pe = [
        O,
        q(W),
        "'",
        q(Z),
        "'"
      ].join("");
      return [
        "D:",
        l.getFullYear(),
        q(l.getMonth() + 1),
        q(l.getDate()),
        q(l.getHours()),
        q(l.getMinutes()),
        q(l.getSeconds()),
        pe
      ].join("");
    }, Ae = p.__private__.convertPDFDateToDate = function(l) {
      var v = parseInt(l.substr(2, 4), 10), O = parseInt(l.substr(6, 2), 10) - 1, W = parseInt(l.substr(8, 2), 10), Z = parseInt(l.substr(10, 2), 10), pe = parseInt(l.substr(12, 2), 10), ye = parseInt(l.substr(14, 2), 10);
      return new Date(v, O, W, Z, pe, ye, 0);
    }, we = p.__private__.setCreationDate = function(l) {
      var v;
      if (l === void 0 && (l = /* @__PURE__ */ new Date()), l instanceof Date) v = te(l);
      else {
        if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(l)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
        v = l;
      }
      return se = v;
    }, A = p.__private__.getCreationDate = function(l) {
      var v = se;
      return l === "jsDate" && (v = Ae(se)), v;
    };
    p.setCreationDate = function(l) {
      return we(l), this;
    }, p.getCreationDate = function(l) {
      return A(l);
    };
    var T, q = p.__private__.padd2 = function(l) {
      return ("0" + parseInt(l)).slice(-2);
    }, $ = p.__private__.padd2Hex = function(l) {
      return ("00" + (l = l.toString())).substr(l.length);
    }, Y = 0, Q = [], ce = [], ue = 0, ve = [], Se = [], Ce = false, Pe = ce;
    p.__private__.setCustomOutputDestination = function(l) {
      Ce = true, Pe = l;
    };
    var We = function(l) {
      Ce || (Pe = l);
    };
    p.__private__.resetCustomOutputDestination = function() {
      Ce = false, Pe = ce;
    };
    var F = p.__private__.out = function(l) {
      return l = l.toString(), ue += l.length + 1, Pe.push(l), Pe;
    }, ke = p.__private__.write = function(l) {
      return F(arguments.length === 1 ? l.toString() : Array.prototype.join.call(arguments, " "));
    }, st = p.__private__.getArrayBuffer = function(l) {
      for (var v = l.length, O = new ArrayBuffer(v), W = new Uint8Array(O); v--; ) W[v] = l.charCodeAt(v);
      return O;
    }, Ge = [
      [
        "Helvetica",
        "helvetica",
        "normal",
        "WinAnsiEncoding"
      ],
      [
        "Helvetica-Bold",
        "helvetica",
        "bold",
        "WinAnsiEncoding"
      ],
      [
        "Helvetica-Oblique",
        "helvetica",
        "italic",
        "WinAnsiEncoding"
      ],
      [
        "Helvetica-BoldOblique",
        "helvetica",
        "bolditalic",
        "WinAnsiEncoding"
      ],
      [
        "Courier",
        "courier",
        "normal",
        "WinAnsiEncoding"
      ],
      [
        "Courier-Bold",
        "courier",
        "bold",
        "WinAnsiEncoding"
      ],
      [
        "Courier-Oblique",
        "courier",
        "italic",
        "WinAnsiEncoding"
      ],
      [
        "Courier-BoldOblique",
        "courier",
        "bolditalic",
        "WinAnsiEncoding"
      ],
      [
        "Times-Roman",
        "times",
        "normal",
        "WinAnsiEncoding"
      ],
      [
        "Times-Bold",
        "times",
        "bold",
        "WinAnsiEncoding"
      ],
      [
        "Times-Italic",
        "times",
        "italic",
        "WinAnsiEncoding"
      ],
      [
        "Times-BoldItalic",
        "times",
        "bolditalic",
        "WinAnsiEncoding"
      ],
      [
        "ZapfDingbats",
        "zapfdingbats",
        "normal",
        null
      ],
      [
        "Symbol",
        "symbol",
        "normal",
        null
      ]
    ];
    p.__private__.getStandardFonts = function() {
      return Ge;
    };
    var Ne = n.fontSize || 16;
    p.__private__.setFontSize = p.setFontSize = function(l) {
      return Ne = D === G ? l / rt : l, this;
    };
    var Ve, Ie = p.__private__.getFontSize = p.getFontSize = function() {
      return D === z ? Ne : Ne * rt;
    }, He = n.R2L || false;
    p.__private__.setR2L = p.setR2L = function(l) {
      return He = l, this;
    }, p.__private__.getR2L = p.getR2L = function() {
      return He;
    };
    var Ue, yt = p.__private__.setZoomMode = function(l) {
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(l)) Ve = l;
      else if (isNaN(l)) {
        if ([
          void 0,
          null,
          "fullwidth",
          "fullheight",
          "fullpage",
          "original"
        ].indexOf(l) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + l + '" is not recognized.');
        Ve = l;
      } else Ve = parseInt(l, 10);
    };
    p.__private__.getZoomMode = function() {
      return Ve;
    };
    var ft, et = p.__private__.setPageMode = function(l) {
      if ([
        void 0,
        null,
        "UseNone",
        "UseOutlines",
        "UseThumbs",
        "FullScreen"
      ].indexOf(l) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + l + '" is not recognized.');
      Ue = l;
    };
    p.__private__.getPageMode = function() {
      return Ue;
    };
    var dt = p.__private__.setLayoutMode = function(l) {
      if ([
        void 0,
        null,
        "continuous",
        "single",
        "twoleft",
        "tworight",
        "two"
      ].indexOf(l) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + l + '" is not recognized.');
      ft = l;
    };
    p.__private__.getLayoutMode = function() {
      return ft;
    }, p.__private__.setDisplayMode = p.setDisplayMode = function(l, v, O) {
      return yt(l), dt(v), et(O), this;
    };
    var ht = {
      title: "",
      subject: "",
      author: "",
      keywords: "",
      creator: ""
    };
    p.__private__.getDocumentProperty = function(l) {
      if (Object.keys(ht).indexOf(l) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
      return ht[l];
    }, p.__private__.getDocumentProperties = function() {
      return ht;
    }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(l) {
      for (var v in ht) ht.hasOwnProperty(v) && l[v] && (ht[v] = l[v]);
      return this;
    }, p.__private__.setDocumentProperty = function(l, v) {
      if (Object.keys(ht).indexOf(l) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
      return ht[l] = v;
    };
    var Oe, rt, qe, Ut, gt, ct = {}, lt = {}, Ft = [], ze = {}, Pt = {}, Ye = {}, tt = {}, Mt = null, ut = 0, Ke = [], xt = new Fu(p), ci = n.hotfixes || [], dn = {}, wr = {}, ar = [], $e = function l(v, O, W, Z, pe, ye) {
      if (!(this instanceof l)) return new l(v, O, W, Z, pe, ye);
      isNaN(v) && (v = 1), isNaN(O) && (O = 0), isNaN(W) && (W = 0), isNaN(Z) && (Z = 1), isNaN(pe) && (pe = 0), isNaN(ye) && (ye = 0), this._matrix = [
        v,
        O,
        W,
        Z,
        pe,
        ye
      ];
    };
    Object.defineProperty($e.prototype, "sx", {
      get: function() {
        return this._matrix[0];
      },
      set: function(l) {
        this._matrix[0] = l;
      }
    }), Object.defineProperty($e.prototype, "shy", {
      get: function() {
        return this._matrix[1];
      },
      set: function(l) {
        this._matrix[1] = l;
      }
    }), Object.defineProperty($e.prototype, "shx", {
      get: function() {
        return this._matrix[2];
      },
      set: function(l) {
        this._matrix[2] = l;
      }
    }), Object.defineProperty($e.prototype, "sy", {
      get: function() {
        return this._matrix[3];
      },
      set: function(l) {
        this._matrix[3] = l;
      }
    }), Object.defineProperty($e.prototype, "tx", {
      get: function() {
        return this._matrix[4];
      },
      set: function(l) {
        this._matrix[4] = l;
      }
    }), Object.defineProperty($e.prototype, "ty", {
      get: function() {
        return this._matrix[5];
      },
      set: function(l) {
        this._matrix[5] = l;
      }
    }), Object.defineProperty($e.prototype, "a", {
      get: function() {
        return this._matrix[0];
      },
      set: function(l) {
        this._matrix[0] = l;
      }
    }), Object.defineProperty($e.prototype, "b", {
      get: function() {
        return this._matrix[1];
      },
      set: function(l) {
        this._matrix[1] = l;
      }
    }), Object.defineProperty($e.prototype, "c", {
      get: function() {
        return this._matrix[2];
      },
      set: function(l) {
        this._matrix[2] = l;
      }
    }), Object.defineProperty($e.prototype, "d", {
      get: function() {
        return this._matrix[3];
      },
      set: function(l) {
        this._matrix[3] = l;
      }
    }), Object.defineProperty($e.prototype, "e", {
      get: function() {
        return this._matrix[4];
      },
      set: function(l) {
        this._matrix[4] = l;
      }
    }), Object.defineProperty($e.prototype, "f", {
      get: function() {
        return this._matrix[5];
      },
      set: function(l) {
        this._matrix[5] = l;
      }
    }), Object.defineProperty($e.prototype, "rotation", {
      get: function() {
        return Math.atan2(this.shx, this.sx);
      }
    }), Object.defineProperty($e.prototype, "scaleX", {
      get: function() {
        return this.decompose().scale.sx;
      }
    }), Object.defineProperty($e.prototype, "scaleY", {
      get: function() {
        return this.decompose().scale.sy;
      }
    }), Object.defineProperty($e.prototype, "isIdentity", {
      get: function() {
        return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
      }
    }), $e.prototype.join = function(l) {
      return [
        this.sx,
        this.shy,
        this.shx,
        this.sy,
        this.tx,
        this.ty
      ].map(J).join(l);
    }, $e.prototype.multiply = function(l) {
      var v = l.sx * this.sx + l.shy * this.shx, O = l.sx * this.shy + l.shy * this.sy, W = l.shx * this.sx + l.sy * this.shx, Z = l.shx * this.shy + l.sy * this.sy, pe = l.tx * this.sx + l.ty * this.shx + this.tx, ye = l.tx * this.shy + l.ty * this.sy + this.ty;
      return new $e(v, O, W, Z, pe, ye);
    }, $e.prototype.decompose = function() {
      var l = this.sx, v = this.shy, O = this.shx, W = this.sy, Z = this.tx, pe = this.ty, ye = Math.sqrt(l * l + v * v), Fe = (l /= ye) * O + (v /= ye) * W;
      O -= l * Fe, W -= v * Fe;
      var Te = Math.sqrt(O * O + W * W);
      return Fe /= Te, l * (W /= Te) < v * (O /= Te) && (l = -l, v = -v, Fe = -Fe, ye = -ye), {
        scale: new $e(ye, 0, 0, Te, 0, 0),
        translate: new $e(1, 0, 0, 1, Z, pe),
        rotate: new $e(l, v, -v, l, 0, 0),
        skew: new $e(1, 0, Fe, 1, 0, 0)
      };
    }, $e.prototype.toString = function(l) {
      return this.join(" ");
    }, $e.prototype.inversed = function() {
      var l = this.sx, v = this.shy, O = this.shx, W = this.sy, Z = this.tx, pe = this.ty, ye = 1 / (l * W - v * O), Fe = W * ye, Te = -v * ye, Je = -O * ye, it = l * ye;
      return new $e(Fe, Te, Je, it, -Fe * Z - Je * pe, -Te * Z - it * pe);
    }, $e.prototype.applyToPoint = function(l) {
      var v = l.x * this.sx + l.y * this.shx + this.tx, O = l.x * this.shy + l.y * this.sy + this.ty;
      return new Lr(v, O);
    }, $e.prototype.applyToRectangle = function(l) {
      var v = this.applyToPoint(l), O = this.applyToPoint(new Lr(l.x + l.w, l.y + l.h));
      return new ba(v.x, v.y, O.x - v.x, O.y - v.y);
    }, $e.prototype.clone = function() {
      var l = this.sx, v = this.shy, O = this.shx, W = this.sy, Z = this.tx, pe = this.ty;
      return new $e(l, v, O, W, Z, pe);
    }, p.Matrix = $e;
    var yr = p.matrixMult = function(l, v) {
      return v.multiply(l);
    }, xr = new $e(1, 0, 0, 1, 0, 0);
    p.unitMatrix = p.identityMatrix = xr;
    var Tn = function(l, v) {
      if (!Pt[l]) {
        var O = (v instanceof ki ? "Sh" : "P") + (Object.keys(ze).length + 1).toString(10);
        v.id = O, Pt[l] = O, ze[O] = v, xt.publish("addPattern", v);
      }
    };
    p.ShadingPattern = ki, p.TilingPattern = ra, p.addShadingPattern = function(l, v) {
      return H("addShadingPattern()"), Tn(l, v), this;
    }, p.beginTilingPattern = function(l) {
      H("beginTilingPattern()"), wa(l.boundingBox[0], l.boundingBox[1], l.boundingBox[2] - l.boundingBox[0], l.boundingBox[3] - l.boundingBox[1], l.matrix);
    }, p.endTilingPattern = function(l, v) {
      H("endTilingPattern()"), v.stream = Se[T].join(`
`), Tn(l, v), xt.publish("endTilingPattern", v), ar.pop().restore();
    };
    var Dn, Tt = p.__private__.newObject = function() {
      var l = an();
      return sn(l, true), l;
    }, an = p.__private__.newObjectDeferred = function() {
      return Y++, Q[Y] = function() {
        return ue;
      }, Y;
    }, sn = function(l, v) {
      return v = typeof v == "boolean" && v, Q[l] = ue, v && F(l + " 0 obj"), l;
    }, li = p.__private__.newAdditionalObject = function() {
      var l = {
        objId: an(),
        content: ""
      };
      return ve.push(l), l;
    }, qr = an(), $n = an(), or = p.__private__.decodeColorString = function(l) {
      var v = l.split(" ");
      if (v.length !== 2 || v[1] !== "g" && v[1] !== "G") v.length !== 5 || v[4] !== "k" && v[4] !== "K" || (v = [
        (1 - v[0]) * (1 - v[3]),
        (1 - v[1]) * (1 - v[3]),
        (1 - v[2]) * (1 - v[3]),
        "r"
      ]);
      else {
        var O = parseFloat(v[0]);
        v = [
          O,
          O,
          O,
          "r"
        ];
      }
      for (var W = "#", Z = 0; Z < 3; Z++) W += ("0" + Math.floor(255 * parseFloat(v[Z])).toString(16)).slice(-2);
      return W;
    }, Yn = p.__private__.encodeColorString = function(l) {
      var v;
      typeof l == "string" && (l = {
        ch1: l
      });
      var O = l.ch1, W = l.ch2, Z = l.ch3, pe = l.ch4, ye = l.pdfColorType === "draw" ? [
        "G",
        "RG",
        "K"
      ] : [
        "g",
        "rg",
        "k"
      ];
      if (typeof O == "string" && O.charAt(0) !== "#") {
        var Fe = new zh(O);
        if (Fe.ok) O = Fe.toHex();
        else if (!/^\d*\.?\d*$/.test(O)) throw new Error('Invalid color "' + O + '" passed to jsPDF.encodeColorString.');
      }
      if (typeof O == "string" && /^#[0-9A-Fa-f]{3}$/.test(O) && (O = "#" + O[1] + O[1] + O[2] + O[2] + O[3] + O[3]), typeof O == "string" && /^#[0-9A-Fa-f]{6}$/.test(O)) {
        var Te = parseInt(O.substr(1), 16);
        O = Te >> 16 & 255, W = Te >> 8 & 255, Z = 255 & Te;
      }
      if (W === void 0 || pe === void 0 && O === W && W === Z) v = typeof O == "string" ? O + " " + ye[0] : l.precision === 2 ? x(O / 255) + " " + ye[0] : I(O / 255) + " " + ye[0];
      else if (pe === void 0 || St(pe) === "object") {
        if (pe && !isNaN(pe.a) && pe.a === 0) return [
          "1.",
          "1.",
          "1.",
          ye[1]
        ].join(" ");
        v = typeof O == "string" ? [
          O,
          W,
          Z,
          ye[1]
        ].join(" ") : l.precision === 2 ? [
          x(O / 255),
          x(W / 255),
          x(Z / 255),
          ye[1]
        ].join(" ") : [
          I(O / 255),
          I(W / 255),
          I(Z / 255),
          ye[1]
        ].join(" ");
      } else v = typeof O == "string" ? [
        O,
        W,
        Z,
        pe,
        ye[2]
      ].join(" ") : l.precision === 2 ? [
        x(O),
        x(W),
        x(Z),
        x(pe),
        ye[2]
      ].join(" ") : [
        I(O),
        I(W),
        I(Z),
        I(pe),
        ye[2]
      ].join(" ");
      return v;
    }, Xn = p.__private__.getFilters = function() {
      return f;
    }, Bn = p.__private__.putStream = function(l) {
      var v = (l = l || {}).data || "", O = l.filters || Xn(), W = l.alreadyAppliedFilters || [], Z = l.addLength1 || false, pe = v.length, ye = l.objectId, Fe = function(Qt) {
        return Qt;
      };
      if (m !== null && ye === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
      m !== null && (Fe = Zt.encryptor(ye, 0));
      var Te = {};
      O === true && (O = [
        "FlateEncode"
      ]);
      var Je = l.additionalKeyValues || [], it = (Te = Be.API.processDataByFilters !== void 0 ? Be.API.processDataByFilters(v, O) : {
        data: v,
        reverseChain: []
      }).reverseChain + (Array.isArray(W) ? W.join(" ") : W.toString());
      if (Te.data.length !== 0 && (Je.push({
        key: "Length",
        value: Te.data.length
      }), Z === true && Je.push({
        key: "Length1",
        value: pe
      })), it.length != 0) if (it.split("/").length - 1 == 1) Je.push({
        key: "Filter",
        value: it
      });
      else {
        Je.push({
          key: "Filter",
          value: "[" + it + "]"
        });
        for (var vt = 0; vt < Je.length; vt += 1) if (Je[vt].key === "DecodeParms") {
          for (var Ot = [], Xt = 0; Xt < Te.reverseChain.split("/").length - 1; Xt += 1) Ot.push("null");
          Ot.push(Je[vt].value), Je[vt].value = "[" + Ot.join(" ") + "]";
        }
      }
      F("<<");
      for (var Et = 0; Et < Je.length; Et++) F("/" + Je[Et].key + " " + Je[Et].value);
      F(">>"), Te.data.length !== 0 && (F("stream"), F(Fe(Te.data)), F("endstream"));
    }, ui = p.__private__.putPage = function(l) {
      var v = l.number, O = l.data, W = l.objId, Z = l.contentsObjId;
      sn(W, true), F("<</Type /Page"), F("/Parent " + l.rootDictionaryObjId + " 0 R"), F("/Resources " + l.resourceDictionaryObjId + " 0 R"), F("/MediaBox [" + parseFloat(J(l.mediaBox.bottomLeftX)) + " " + parseFloat(J(l.mediaBox.bottomLeftY)) + " " + J(l.mediaBox.topRightX) + " " + J(l.mediaBox.topRightY) + "]"), l.cropBox !== null && F("/CropBox [" + J(l.cropBox.bottomLeftX) + " " + J(l.cropBox.bottomLeftY) + " " + J(l.cropBox.topRightX) + " " + J(l.cropBox.topRightY) + "]"), l.bleedBox !== null && F("/BleedBox [" + J(l.bleedBox.bottomLeftX) + " " + J(l.bleedBox.bottomLeftY) + " " + J(l.bleedBox.topRightX) + " " + J(l.bleedBox.topRightY) + "]"), l.trimBox !== null && F("/TrimBox [" + J(l.trimBox.bottomLeftX) + " " + J(l.trimBox.bottomLeftY) + " " + J(l.trimBox.topRightX) + " " + J(l.trimBox.topRightY) + "]"), l.artBox !== null && F("/ArtBox [" + J(l.artBox.bottomLeftX) + " " + J(l.artBox.bottomLeftY) + " " + J(l.artBox.topRightX) + " " + J(l.artBox.topRightY) + "]"), typeof l.userUnit == "number" && l.userUnit !== 1 && F("/UserUnit " + l.userUnit), xt.publish("putPage", {
        objId: W,
        pageContext: Ke[v],
        pageNumber: v,
        page: O
      }), F("/Contents " + Z + " 0 R"), F(">>"), F("endobj");
      var pe = O.join(`
`);
      return D === G && (pe += `
Q`), sn(Z, true), Bn({
        data: pe,
        filters: Xn(),
        objectId: Z
      }), F("endobj"), W;
    }, sr = p.__private__.putPages = function() {
      var l, v, O = [];
      for (l = 1; l <= ut; l++) Ke[l].objId = an(), Ke[l].contentsObjId = an();
      for (l = 1; l <= ut; l++) O.push(ui({
        number: l,
        data: Se[l],
        objId: Ke[l].objId,
        contentsObjId: Ke[l].contentsObjId,
        mediaBox: Ke[l].mediaBox,
        cropBox: Ke[l].cropBox,
        bleedBox: Ke[l].bleedBox,
        trimBox: Ke[l].trimBox,
        artBox: Ke[l].artBox,
        userUnit: Ke[l].userUnit,
        rootDictionaryObjId: qr,
        resourceDictionaryObjId: $n
      }));
      sn(qr, true), F("<</Type /Pages");
      var W = "/Kids [";
      for (v = 0; v < ut; v++) W += O[v] + " 0 R ";
      F(W + "]"), F("/Count " + ut), F(">>"), F("endobj"), xt.publish("postPutPages");
    }, fi = function(l) {
      xt.publish("putFont", {
        font: l,
        out: F,
        newObject: Tt,
        putStream: Bn
      }), l.isAlreadyPutted !== true && (l.objectNumber = Tt(), F("<<"), F("/Type /Font"), F("/BaseFont /" + na(l.postScriptName)), F("/Subtype /Type1"), typeof l.encoding == "string" && F("/Encoding /" + l.encoding), F("/FirstChar 32"), F("/LastChar 255"), F(">>"), F("endobj"));
    }, Ri = function(l) {
      l.objectNumber = Tt();
      var v = [];
      v.push({
        key: "Type",
        value: "/XObject"
      }), v.push({
        key: "Subtype",
        value: "/Form"
      }), v.push({
        key: "BBox",
        value: "[" + [
          J(l.x),
          J(l.y),
          J(l.x + l.width),
          J(l.y + l.height)
        ].join(" ") + "]"
      }), v.push({
        key: "Matrix",
        value: "[" + l.matrix.toString() + "]"
      });
      var O = l.pages[1].join(`
`);
      Bn({
        data: O,
        additionalKeyValues: v,
        objectId: l.objectNumber
      }), F("endobj");
    }, Oi = function(l, v) {
      v || (v = 21);
      var O = Tt(), W = function(ye, Fe) {
        var Te, Je = [], it = 1 / (Fe - 1);
        for (Te = 0; Te < 1; Te += it) Je.push(Te);
        if (Je.push(1), ye[0].offset != 0) {
          var vt = {
            offset: 0,
            color: ye[0].color
          };
          ye.unshift(vt);
        }
        if (ye[ye.length - 1].offset != 1) {
          var Ot = {
            offset: 1,
            color: ye[ye.length - 1].color
          };
          ye.push(Ot);
        }
        for (var Xt = "", Et = 0, Qt = 0; Qt < Je.length; Qt++) {
          for (Te = Je[Qt]; Te > ye[Et + 1].offset; ) Et++;
          var Jt = ye[Et].offset, cn = (Te - Jt) / (ye[Et + 1].offset - Jt), Pr = ye[Et].color, Zn = ye[Et + 1].color;
          Xt += $(Math.round((1 - cn) * Pr[0] + cn * Zn[0]).toString(16)) + $(Math.round((1 - cn) * Pr[1] + cn * Zn[1]).toString(16)) + $(Math.round((1 - cn) * Pr[2] + cn * Zn[2]).toString(16));
        }
        return Xt.trim();
      }(l.colors, v), Z = [];
      Z.push({
        key: "FunctionType",
        value: "0"
      }), Z.push({
        key: "Domain",
        value: "[0.0 1.0]"
      }), Z.push({
        key: "Size",
        value: "[" + v + "]"
      }), Z.push({
        key: "BitsPerSample",
        value: "8"
      }), Z.push({
        key: "Range",
        value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
      }), Z.push({
        key: "Decode",
        value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
      }), Bn({
        data: W,
        additionalKeyValues: Z,
        alreadyAppliedFilters: [
          "/ASCIIHexDecode"
        ],
        objectId: O
      }), F("endobj"), l.objectNumber = Tt(), F("<< /ShadingType " + l.type), F("/ColorSpace /DeviceRGB");
      var pe = "/Coords [" + J(parseFloat(l.coords[0])) + " " + J(parseFloat(l.coords[1])) + " ";
      l.type === 2 ? pe += J(parseFloat(l.coords[2])) + " " + J(parseFloat(l.coords[3])) : pe += J(parseFloat(l.coords[2])) + " " + J(parseFloat(l.coords[3])) + " " + J(parseFloat(l.coords[4])) + " " + J(parseFloat(l.coords[5])), F(pe += "]"), l.matrix && F("/Matrix [" + l.matrix.toString() + "]"), F("/Function " + O + " 0 R"), F("/Extend [true true]"), F(">>"), F("endobj");
    }, Ti = function(l, v) {
      var O = an(), W = Tt();
      v.push({
        resourcesOid: O,
        objectOid: W
      }), l.objectNumber = W;
      var Z = [];
      Z.push({
        key: "Type",
        value: "/Pattern"
      }), Z.push({
        key: "PatternType",
        value: "1"
      }), Z.push({
        key: "PaintType",
        value: "1"
      }), Z.push({
        key: "TilingType",
        value: "1"
      }), Z.push({
        key: "BBox",
        value: "[" + l.boundingBox.map(J).join(" ") + "]"
      }), Z.push({
        key: "XStep",
        value: J(l.xStep)
      }), Z.push({
        key: "YStep",
        value: J(l.yStep)
      }), Z.push({
        key: "Resources",
        value: O + " 0 R"
      }), l.matrix && Z.push({
        key: "Matrix",
        value: "[" + l.matrix.toString() + "]"
      }), Bn({
        data: l.stream,
        additionalKeyValues: Z,
        objectId: l.objectNumber
      }), F("endobj");
    }, ps = function(l) {
      for (var v in l.objectNumber = Tt(), F("<<"), l) switch (v) {
        case "opacity":
          F("/ca " + x(l[v]));
          break;
        case "stroke-opacity":
          F("/CA " + x(l[v]));
      }
      F(">>"), F("endobj");
    }, ua = function(l) {
      sn(l.resourcesOid, true), F("<<"), F("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), function() {
        for (var v in F("/Font <<"), ct) ct.hasOwnProperty(v) && (w === false || w === true && S.hasOwnProperty(v)) && F("/" + v + " " + ct[v].objectNumber + " 0 R");
        F(">>");
      }(), function() {
        if (Object.keys(ze).length > 0) {
          for (var v in F("/Shading <<"), ze) ze.hasOwnProperty(v) && ze[v] instanceof ki && ze[v].objectNumber >= 0 && F("/" + v + " " + ze[v].objectNumber + " 0 R");
          xt.publish("putShadingPatternDict"), F(">>");
        }
      }(), function(v) {
        if (Object.keys(ze).length > 0) {
          for (var O in F("/Pattern <<"), ze) ze.hasOwnProperty(O) && ze[O] instanceof p.TilingPattern && ze[O].objectNumber >= 0 && ze[O].objectNumber < v && F("/" + O + " " + ze[O].objectNumber + " 0 R");
          xt.publish("putTilingPatternDict"), F(">>");
        }
      }(l.objectOid), function() {
        if (Object.keys(Ye).length > 0) {
          var v;
          for (v in F("/ExtGState <<"), Ye) Ye.hasOwnProperty(v) && Ye[v].objectNumber >= 0 && F("/" + v + " " + Ye[v].objectNumber + " 0 R");
          xt.publish("putGStateDict"), F(">>");
        }
      }(), function() {
        for (var v in F("/XObject <<"), dn) dn.hasOwnProperty(v) && dn[v].objectNumber >= 0 && F("/" + v + " " + dn[v].objectNumber + " 0 R");
        xt.publish("putXobjectDict"), F(">>");
      }(), F(">>"), F("endobj");
    }, $a = function(l) {
      lt[l.fontName] = lt[l.fontName] || {}, lt[l.fontName][l.fontStyle] = l.id;
    }, Ya = function(l, v, O, W, Z) {
      var pe = {
        id: "F" + (Object.keys(ct).length + 1).toString(10),
        postScriptName: l,
        fontName: v,
        fontStyle: O,
        encoding: W,
        isStandardFont: Z || false,
        metadata: {}
      };
      return xt.publish("addFont", {
        font: pe,
        instance: this
      }), ct[pe.id] = pe, $a(pe), pe.id;
    }, qn = p.__private__.pdfEscape = p.pdfEscape = function(l, v) {
      return function(O, W) {
        var Z, pe, ye, Fe, Te, Je, it, vt, Ot;
        if (ye = (W = W || {}).sourceEncoding || "Unicode", Te = W.outputEncoding, (W.autoencode || Te) && ct[Oe].metadata && ct[Oe].metadata[ye] && ct[Oe].metadata[ye].encoding && (Fe = ct[Oe].metadata[ye].encoding, !Te && ct[Oe].encoding && (Te = ct[Oe].encoding), !Te && Fe.codePages && (Te = Fe.codePages[0]), typeof Te == "string" && (Te = Fe[Te]), Te)) {
          for (it = false, Je = [], Z = 0, pe = O.length; Z < pe; Z++) (vt = Te[O.charCodeAt(Z)]) ? Je.push(String.fromCharCode(vt)) : Je.push(O[Z]), Je[Z].charCodeAt(0) >> 8 && (it = true);
          O = Je.join("");
        }
        for (Z = O.length; it === void 0 && Z !== 0; ) O.charCodeAt(Z - 1) >> 8 && (it = true), Z--;
        if (!it) return O;
        for (Je = W.noBOM ? [] : [
          254,
          255
        ], Z = 0, pe = O.length; Z < pe; Z++) {
          if ((Ot = (vt = O.charCodeAt(Z)) >> 8) >> 8) throw new Error("Character at position " + Z + " of string '" + O + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
          Je.push(Ot), Je.push(vt - (Ot << 8));
        }
        return String.fromCharCode.apply(void 0, Je);
      }(l, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, fa = p.__private__.beginPage = function(l) {
      Se[++ut] = [], Ke[ut] = {
        objId: 0,
        contentsObjId: 0,
        userUnit: Number(c),
        artBox: null,
        bleedBox: null,
        cropBox: null,
        trimBox: null,
        mediaBox: {
          bottomLeftX: 0,
          bottomLeftY: 0,
          topRightX: Number(l[0]),
          topRightY: Number(l[1])
        }
      }, Ja(ut), We(Se[T]);
    }, Xa = function(l, v) {
      var O, W, Z;
      switch (t = v || t, typeof l == "string" && (O = N(l.toLowerCase()), Array.isArray(O) && (W = O[0], Z = O[1])), Array.isArray(l) && (W = l[0] * rt, Z = l[1] * rt), isNaN(W) && (W = o[0], Z = o[1]), (W > 14400 || Z > 14400) && (Ct.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), W = Math.min(14400, W), Z = Math.min(14400, Z)), o = [
        W,
        Z
      ], t.substr(0, 1)) {
        case "l":
          Z > W && (o = [
            Z,
            W
          ]);
          break;
        case "p":
          W > Z && (o = [
            Z,
            W
          ]);
      }
      fa(o), Ze(pa), F(Ui), ga !== 0 && F(ga + " J"), va !== 0 && F(va + " j"), xt.publish("addPage", {
        pageNumber: ut
      });
    }, ha = function(l) {
      l > 0 && l <= ut && (Se.splice(l, 1), Ke.splice(l, 1), ut--, T > ut && (T = ut), this.setPage(T));
    }, Ja = function(l) {
      l > 0 && l <= ut && (T = l);
    }, Za = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
      return Se.length - 1;
    }, Qa = function(l, v, O) {
      var W, Z = void 0;
      return O = O || {}, l = l !== void 0 ? l : ct[Oe].fontName, v = v !== void 0 ? v : ct[Oe].fontStyle, W = l.toLowerCase(), lt[W] !== void 0 && lt[W][v] !== void 0 ? Z = lt[W][v] : lt[l] !== void 0 && lt[l][v] !== void 0 ? Z = lt[l][v] : O.disableWarning === false && Ct.warn("Unable to look up font label for font '" + l + "', '" + v + "'. Refer to getFontList() for available fonts."), Z || O.noFallback || (Z = lt.times[v]) == null && (Z = lt.times.normal), Z;
    }, cr = p.__private__.putInfo = function() {
      var l = Tt(), v = function(W) {
        return W;
      };
      for (var O in m !== null && (v = Zt.encryptor(l, 0)), F("<<"), F("/Producer (" + qn(v("jsPDF " + Be.version)) + ")"), ht) ht.hasOwnProperty(O) && ht[O] && F("/" + O.substr(0, 1).toUpperCase() + O.substr(1) + " (" + qn(v(ht[O])) + ")");
      F("/CreationDate (" + qn(v(se)) + ")"), F(">>"), F("endobj");
    }, Di = p.__private__.putCatalog = function(l) {
      var v = (l = l || {}).rootDictionaryObjId || qr;
      switch (Tt(), F("<<"), F("/Type /Catalog"), F("/Pages " + v + " 0 R"), Ve || (Ve = "fullwidth"), Ve) {
        case "fullwidth":
          F("/OpenAction [3 0 R /FitH null]");
          break;
        case "fullheight":
          F("/OpenAction [3 0 R /FitV null]");
          break;
        case "fullpage":
          F("/OpenAction [3 0 R /Fit]");
          break;
        case "original":
          F("/OpenAction [3 0 R /XYZ null null 1]");
          break;
        default:
          var O = "" + Ve;
          O.substr(O.length - 1) === "%" && (Ve = parseInt(Ve) / 100), typeof Ve == "number" && F("/OpenAction [3 0 R /XYZ null null " + x(Ve) + "]");
      }
      switch (ft || (ft = "continuous"), ft) {
        case "continuous":
          F("/PageLayout /OneColumn");
          break;
        case "single":
          F("/PageLayout /SinglePage");
          break;
        case "two":
        case "twoleft":
          F("/PageLayout /TwoColumnLeft");
          break;
        case "tworight":
          F("/PageLayout /TwoColumnRight");
      }
      Ue && F("/PageMode /" + Ue), xt.publish("putCatalog"), F(">>"), F("endobj");
    }, ms = p.__private__.putTrailer = function() {
      F("trailer"), F("<<"), F("/Size " + (Y + 1)), F("/Root " + Y + " 0 R"), F("/Info " + (Y - 1) + " 0 R"), m !== null && F("/Encrypt " + Zt.oid + " 0 R"), F("/ID [ <" + le + "> <" + le + "> ]"), F(">>");
    }, Yt = p.__private__.putHeader = function() {
      F("%PDF-" + E), F("%\xBA\xDF\xAC\xE0");
    }, eo = p.__private__.putXRef = function() {
      var l = "0000000000";
      F("xref"), F("0 " + (Y + 1)), F("0000000000 65535 f ");
      for (var v = 1; v <= Y; v++) typeof Q[v] == "function" ? F((l + Q[v]()).slice(-10) + " 00000 n ") : Q[v] !== void 0 ? F((l + Q[v]).slice(-10) + " 00000 n ") : F("0000000000 00000 n ");
    }, lr = p.__private__.buildDocument = function() {
      var l;
      Y = 0, ue = 0, ce = [], Q = [], ve = [], qr = an(), $n = an(), We(ce), xt.publish("buildDocument"), Yt(), sr(), function() {
        xt.publish("putAdditionalObjects");
        for (var O = 0; O < ve.length; O++) {
          var W = ve[O];
          sn(W.objId, true), F(W.content), F("endobj");
        }
        xt.publish("postPutAdditionalObjects");
      }(), l = [], function() {
        for (var O in ct) ct.hasOwnProperty(O) && (w === false || w === true && S.hasOwnProperty(O)) && fi(ct[O]);
      }(), function() {
        var O;
        for (O in Ye) Ye.hasOwnProperty(O) && ps(Ye[O]);
      }(), function() {
        for (var O in dn) dn.hasOwnProperty(O) && Ri(dn[O]);
      }(), function(O) {
        var W;
        for (W in ze) ze.hasOwnProperty(W) && (ze[W] instanceof ki ? Oi(ze[W]) : ze[W] instanceof ra && Ti(ze[W], O));
      }(l), xt.publish("putResources"), l.forEach(ua), ua({
        resourcesOid: $n,
        objectOid: Number.MAX_SAFE_INTEGER
      }), xt.publish("postPutResources"), m !== null && (Zt.oid = Tt(), F("<<"), F("/Filter /Standard"), F("/V " + Zt.v), F("/R " + Zt.r), F("/U <" + Zt.toHexString(Zt.U) + ">"), F("/O <" + Zt.toHexString(Zt.O) + ">"), F("/P " + Zt.P), F(">>"), F("endobj")), cr(), Di();
      var v = ue;
      return eo(), ms(), F("startxref"), F("" + v), F("%%EOF"), We(Se[T]), ce.join(`
`);
    }, Bi = p.__private__.getBlob = function(l) {
      return new Blob([
        st(l)
      ], {
        type: "application/pdf"
      });
    }, to = p.output = p.__private__.output = (Dn = function(l, v) {
      switch (typeof (v = v || {}) == "string" ? v = {
        filename: v
      } : v.filename = v.filename || "generated.pdf", l) {
        case void 0:
          return lr();
        case "save":
          p.save(v.filename);
          break;
        case "arraybuffer":
          return st(lr());
        case "blob":
          return Bi(lr());
        case "bloburi":
        case "bloburl":
          if (Xe.URL !== void 0 && typeof Xe.URL.createObjectURL == "function") return Xe.URL && Xe.URL.createObjectURL(Bi(lr())) || void 0;
          Ct.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
          break;
        case "datauristring":
        case "dataurlstring":
          var O = "", W = lr();
          try {
            O = Eu(W);
          } catch {
            O = Eu(unescape(encodeURIComponent(W)));
          }
          return "data:application/pdf;filename=" + v.filename + ";base64," + O;
        case "pdfobjectnewwindow":
          if (Object.prototype.toString.call(Xe) === "[object Window]") {
            var Z = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", pe = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
            v.pdfObjectUrl && (Z = v.pdfObjectUrl, pe = "");
            var ye = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + Z + '"' + pe + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(v) + ");<\/script></body></html>", Fe = Xe.open();
            return Fe !== null && Fe.document.write(ye), Fe;
          }
          throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
        case "pdfjsnewwindow":
          if (Object.prototype.toString.call(Xe) === "[object Window]") {
            var Te = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (v.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + v.filename + '" width="500px" height="400px" /></body></html>', Je = Xe.open();
            if (Je !== null) {
              Je.document.write(Te);
              var it = this;
              Je.document.documentElement.querySelector("#pdfViewer").onload = function() {
                Je.document.title = v.filename, Je.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(it.output("bloburl"));
              };
            }
            return Je;
          }
          throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
        case "dataurlnewwindow":
          if (Object.prototype.toString.call(Xe) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
          var vt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", v) + '"></iframe></body></html>', Ot = Xe.open();
          if (Ot !== null && (Ot.document.write(vt), Ot.document.title = v.filename), Ot || typeof safari > "u") return Ot;
          break;
        case "datauri":
        case "dataurl":
          return Xe.document.location.href = this.output("datauristring", v);
        default:
          return null;
      }
    }, Dn.foo = function() {
      try {
        return Dn.apply(this, arguments);
      } catch (O) {
        var l = O.stack || "";
        ~l.indexOf(" at ") && (l = l.split(" at ")[1]);
        var v = "Error in function " + l.split(`
`)[0].split("<")[0] + ": " + O.message;
        if (!Xe.console) throw new Error(v);
        Xe.console.error(v, O), Xe.alert && alert(v);
      }
    }, Dn.foo.bar = Dn, Dn.foo), Un = function(l) {
      return Array.isArray(ci) === true && ci.indexOf(l) > -1;
    };
    switch (r) {
      case "pt":
        rt = 1;
        break;
      case "mm":
        rt = 72 / 25.4;
        break;
      case "cm":
        rt = 72 / 2.54;
        break;
      case "in":
        rt = 72;
        break;
      case "px":
        rt = Un("px_scaling") == 1 ? 0.75 : 96 / 72;
        break;
      case "pc":
      case "em":
        rt = 12;
        break;
      case "ex":
        rt = 6;
        break;
      default:
        if (typeof r != "number") throw new Error("Invalid unit: " + r);
        rt = r;
    }
    var Zt = null;
    we(), ne();
    var Nr = p.__private__.getPageInfo = p.getPageInfo = function(l) {
      if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
      return {
        objId: Ke[l].objId,
        pageNumber: l,
        pageContext: Ke[l]
      };
    }, no = p.__private__.getPageInfoByObjId = function(l) {
      if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
      for (var v in Ke) if (Ke[v].objId === l) break;
      return Nr(v);
    }, gs = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
      return {
        objId: Ke[T].objId,
        pageNumber: T,
        pageContext: Ke[T]
      };
    };
    p.addPage = function() {
      return Xa.apply(this, arguments), this;
    }, p.setPage = function() {
      return Ja.apply(this, arguments), We.call(this, Se[T]), this;
    }, p.insertPage = function(l) {
      return this.addPage(), this.movePage(T, l), this;
    }, p.movePage = function(l, v) {
      var O, W;
      if (l > v) {
        O = Se[l], W = Ke[l];
        for (var Z = l; Z > v; Z--) Se[Z] = Se[Z - 1], Ke[Z] = Ke[Z - 1];
        Se[v] = O, Ke[v] = W, this.setPage(v);
      } else if (l < v) {
        O = Se[l], W = Ke[l];
        for (var pe = l; pe < v; pe++) Se[pe] = Se[pe + 1], Ke[pe] = Ke[pe + 1];
        Se[v] = O, Ke[v] = W, this.setPage(v);
      }
      return this;
    }, p.deletePage = function() {
      return ha.apply(this, arguments), this;
    }, p.__private__.text = p.text = function(l, v, O, W, Z) {
      var pe, ye, Fe, Te, Je, it, vt, Ot, Xt, Et = (W = W || {}).scope || this;
      if (typeof l == "number" && typeof v == "number" && (typeof O == "string" || Array.isArray(O))) {
        var Qt = O;
        O = v, v = l, l = Qt;
      }
      if (arguments[3] instanceof $e == 0 ? (Fe = arguments[4], Te = arguments[5], St(vt = arguments[3]) === "object" && vt !== null || (typeof Fe == "string" && (Te = Fe, Fe = null), typeof vt == "string" && (Te = vt, vt = null), typeof vt == "number" && (Fe = vt, vt = null), W = {
        flags: vt,
        angle: Fe,
        align: Te
      })) : (H("The transform parameter of text() with a Matrix value"), Xt = Z), isNaN(v) || isNaN(O) || l == null) throw new Error("Invalid arguments passed to jsPDF.text");
      if (l.length === 0) return Et;
      var Jt, cn = "", Pr = typeof W.lineHeightFactor == "number" ? W.lineHeightFactor : di, Zn = Et.internal.scaleFactor;
      function Er(Nt) {
        return Nt = Nt.split("	").join(Array(W.TabLen || 9).join(" ")), qn(Nt, vt);
      }
      function xa(Nt) {
        for (var Lt, Ht = Nt.concat(), en = [], Fr = Ht.length; Fr--; ) typeof (Lt = Ht.shift()) == "string" ? en.push(Lt) : Array.isArray(Nt) && (Lt.length === 1 || Lt[1] === void 0 && Lt[2] === void 0) ? en.push(Lt[0]) : en.push([
          Lt[0],
          Lt[1],
          Lt[2]
        ]);
        return en;
      }
      function Hi(Nt, Lt) {
        var Ht;
        if (typeof Nt == "string") Ht = Lt(Nt)[0];
        else if (Array.isArray(Nt)) {
          for (var en, Fr, Ia = Nt.concat(), Vi = [], po = Ia.length; po--; ) typeof (en = Ia.shift()) == "string" ? Vi.push(Lt(en)[0]) : Array.isArray(en) && typeof en[0] == "string" && (Fr = Lt(en[0], en[1], en[2]), Vi.push([
            Fr[0],
            Fr[1],
            Fr[2]
          ]));
          Ht = Vi;
        }
        return Ht;
      }
      var Ur = false, vi = true;
      if (typeof l == "string") Ur = true;
      else if (Array.isArray(l)) {
        var bi = l.concat();
        ye = [];
        for (var zr, ln = bi.length; ln--; ) (typeof (zr = bi.shift()) != "string" || Array.isArray(zr) && typeof zr[0] != "string") && (vi = false);
        Ur = vi;
      }
      if (Ur === false) throw new Error('Type of text must be string or Array. "' + l + '" is not recognized.');
      typeof l == "string" && (l = l.match(/[\r?\n]/) ? l.split(/\r\n|\r|\n/g) : [
        l
      ]);
      var wi = Ne / Et.internal.scaleFactor, yi = wi * (Pr - 1);
      switch (W.baseline) {
        case "bottom":
          O -= yi;
          break;
        case "top":
          O += wi - yi;
          break;
        case "hanging":
          O += wi - 2 * yi;
          break;
        case "middle":
          O += wi / 2 - yi;
      }
      if ((it = W.maxWidth || 0) > 0 && (typeof l == "string" ? l = Et.splitTextToSize(l, it) : Object.prototype.toString.call(l) === "[object Array]" && (l = l.reduce(function(Nt, Lt) {
        return Nt.concat(Et.splitTextToSize(Lt, it));
      }, []))), pe = {
        text: l,
        x: v,
        y: O,
        options: W,
        mutex: {
          pdfEscape: qn,
          activeFontKey: Oe,
          fonts: ct,
          activeFontSize: Ne
        }
      }, xt.publish("preProcessText", pe), l = pe.text, Fe = (W = pe.options).angle, Xt instanceof $e == 0 && Fe && typeof Fe == "number") {
        Fe *= Math.PI / 180, W.rotationDirection === 0 && (Fe = -Fe), D === G && (Fe = -Fe);
        var Na = Math.cos(Fe), _a = Math.sin(Fe);
        Xt = new $e(Na, _a, -_a, Na, 0, 0);
      } else Fe && Fe instanceof $e && (Xt = Fe);
      D !== G || Xt || (Xt = xr), (Je = W.charSpace || Sr) !== void 0 && (cn += J(B(Je)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ot = W.horizontalScale) !== void 0 && (cn += J(100 * Ot) + ` Tz
`), W.lang;
      var wn = -1, Ir = W.renderingMode !== void 0 ? W.renderingMode : W.stroke, Wi = Et.internal.getCurrentPageInfo().pageContext;
      switch (Ir) {
        case 0:
        case false:
        case "fill":
          wn = 0;
          break;
        case 1:
        case true:
        case "stroke":
          wn = 1;
          break;
        case 2:
        case "fillThenStroke":
          wn = 2;
          break;
        case 3:
        case "invisible":
          wn = 3;
          break;
        case 4:
        case "fillAndAddForClipping":
          wn = 4;
          break;
        case 5:
        case "strokeAndAddPathForClipping":
          wn = 5;
          break;
        case 6:
        case "fillThenStrokeAndAddToPathForClipping":
          wn = 6;
          break;
        case 7:
        case "addToPathForClipping":
          wn = 7;
      }
      var fo = Wi.usedRenderingMode !== void 0 ? Wi.usedRenderingMode : -1;
      wn !== -1 ? cn += wn + ` Tr
` : fo !== -1 && (cn += `0 Tr
`), wn !== -1 && (Wi.usedRenderingMode = wn), Te = W.align || "left";
      var zn, xi = Ne * Pr, Aa = Et.internal.pageSize.getWidth(), Sa = ct[Oe];
      Je = W.charSpace || Sr, it = W.maxWidth || 0, vt = Object.assign({
        autoencode: true,
        noBOM: true
      }, W.flags);
      var Hr = [], Ni = function(Nt) {
        return Et.getStringUnitWidth(Nt, {
          font: Sa,
          charSpace: Je,
          fontSize: Ne,
          doKerning: false
        }) * Ne / Zn;
      };
      if (Object.prototype.toString.call(l) === "[object Array]") {
        var kn;
        ye = xa(l), Te !== "left" && (zn = ye.map(Ni));
        var Cn, Wr = 0;
        if (Te === "right") {
          v -= zn[0], l = [], ln = ye.length;
          for (var jr = 0; jr < ln; jr++) jr === 0 ? (Cn = _r(v), kn = Ar(O)) : (Cn = B(Wr - zn[jr]), kn = -xi), l.push([
            ye[jr],
            Cn,
            kn
          ]), Wr = zn[jr];
        } else if (Te === "center") {
          v -= zn[0] / 2, l = [], ln = ye.length;
          for (var Gr = 0; Gr < ln; Gr++) Gr === 0 ? (Cn = _r(v), kn = Ar(O)) : (Cn = B((Wr - zn[Gr]) / 2), kn = -xi), l.push([
            ye[Gr],
            Cn,
            kn
          ]), Wr = zn[Gr];
        } else if (Te === "left") {
          l = [], ln = ye.length;
          for (var La = 0; La < ln; La++) l.push(ye[La]);
        } else if (Te === "justify" && Sa.encoding === "Identity-H") {
          l = [], ln = ye.length, it = it !== 0 ? it : Aa;
          for (var Gi = 0, zt = 0; zt < ln; zt++) if (kn = zt === 0 ? Ar(O) : -xi, Cn = zt === 0 ? _r(v) : Gi, zt < ln - 1) {
            var ho = B((it - zn[zt]) / (ye[zt].split(" ").length - 1)), fr = ye[zt].split(" ");
            l.push([
              fr[0] + " ",
              Cn,
              kn
            ]), Gi = 0;
            for (var hr = 1; hr < fr.length; hr++) {
              var ka = (Ni(fr[hr - 1] + " " + fr[hr]) - Ni(fr[hr])) * Zn + ho;
              hr == fr.length - 1 ? l.push([
                fr[hr],
                ka,
                0
              ]) : l.push([
                fr[hr] + " ",
                ka,
                0
              ]), Gi -= ka;
            }
          } else l.push([
            ye[zt],
            Cn,
            kn
          ]);
          l.push([
            "",
            Gi,
            0
          ]);
        } else {
          if (Te !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
          for (l = [], ln = ye.length, it = it !== 0 ? it : Aa, zt = 0; zt < ln; zt++) {
            kn = zt === 0 ? Ar(O) : -xi, Cn = zt === 0 ? _r(v) : 0;
            var Ca = ye[zt].split(" ").length - 1, Pa = Ca > 0 ? (it - zn[zt]) / Ca : 0;
            zt < ln - 1 ? Hr.push(J(B(Pa))) : Hr.push(0), l.push([
              ye[zt],
              Cn,
              kn
            ]);
          }
        }
      }
      (typeof W.R2L == "boolean" ? W.R2L : He) === true && (l = Hi(l, function(Nt, Lt, Ht) {
        return [
          Nt.split("").reverse().join(""),
          Lt,
          Ht
        ];
      })), pe = {
        text: l,
        x: v,
        y: O,
        options: W,
        mutex: {
          pdfEscape: qn,
          activeFontKey: Oe,
          fonts: ct,
          activeFontSize: Ne
        }
      }, xt.publish("postProcessText", pe), l = pe.text, Jt = pe.mutex.isHex || false;
      var Ea = ct[Oe].encoding;
      Ea !== "WinAnsiEncoding" && Ea !== "StandardEncoding" || (l = Hi(l, function(Nt, Lt, Ht) {
        return [
          Er(Nt),
          Lt,
          Ht
        ];
      })), ye = xa(l), l = [];
      for (var Vr, Kr, $r, _i = Array.isArray(ye[0]) ? 1 : 0, Yr = "", Ai = function(Nt, Lt, Ht) {
        var en = "";
        return Ht instanceof $e ? (Ht = typeof W.angle == "number" ? yr(Ht, new $e(1, 0, 0, 1, Nt, Lt)) : yr(new $e(1, 0, 0, 1, Nt, Lt), Ht), D === G && (Ht = yr(new $e(1, 0, 0, -1, 0, 0), Ht)), en = Ht.join(" ") + ` Tm
`) : en = J(Nt) + " " + J(Lt) + ` Td
`, en;
      }, Hn = 0; Hn < ye.length; Hn++) {
        switch (Yr = "", _i) {
          case 1:
            $r = (Jt ? "<" : "(") + ye[Hn][0] + (Jt ? ">" : ")"), Vr = parseFloat(ye[Hn][1]), Kr = parseFloat(ye[Hn][2]);
            break;
          case 0:
            $r = (Jt ? "<" : "(") + ye[Hn] + (Jt ? ">" : ")"), Vr = _r(v), Kr = Ar(O);
        }
        Hr !== void 0 && Hr[Hn] !== void 0 && (Yr = Hr[Hn] + ` Tw
`), Hn === 0 ? l.push(Yr + Ai(Vr, Kr, Xt) + $r) : _i === 0 ? l.push(Yr + $r) : _i === 1 && l.push(Yr + Ai(Vr, Kr, Xt) + $r);
      }
      l = _i === 0 ? l.join(` Tj
T* `) : l.join(` Tj
`), l += ` Tj
`;
      var dr = `BT
/`;
      return dr += Oe + " " + Ne + ` Tf
`, dr += J(Ne * Pr) + ` TL
`, dr += pi + `
`, dr += cn, dr += l, F(dr += "ET"), S[Oe] = true, Et;
    };
    var vs = p.__private__.clip = p.clip = function(l) {
      return F(l === "evenodd" ? "W*" : "W"), this;
    };
    p.clipEvenOdd = function() {
      return vs("evenodd");
    }, p.__private__.discardPath = p.discardPath = function() {
      return F("n"), this;
    };
    var ur = p.__private__.isValidStyle = function(l) {
      var v = false;
      return [
        void 0,
        null,
        "S",
        "D",
        "F",
        "DF",
        "FD",
        "f",
        "f*",
        "B",
        "B*",
        "n"
      ].indexOf(l) !== -1 && (v = true), v;
    };
    p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(l) {
      return ur(l) && (d = l), this;
    };
    var ro = p.__private__.getStyle = p.getStyle = function(l) {
      var v = d;
      switch (l) {
        case "D":
        case "S":
          v = "S";
          break;
        case "F":
          v = "f";
          break;
        case "FD":
        case "DF":
          v = "B";
          break;
        case "f":
        case "f*":
        case "B":
        case "B*":
          v = l;
      }
      return v;
    }, io = p.close = function() {
      return F("h"), this;
    };
    p.stroke = function() {
      return F("S"), this;
    }, p.fill = function(l) {
      return qi("f", l), this;
    }, p.fillEvenOdd = function(l) {
      return qi("f*", l), this;
    }, p.fillStroke = function(l) {
      return qi("B", l), this;
    }, p.fillStrokeEvenOdd = function(l) {
      return qi("B*", l), this;
    };
    var qi = function(l, v) {
      St(v) === "object" ? ws(v, l) : F(l);
    }, hi = function(l) {
      l === null || D === G && l === void 0 || (l = ro(l), F(l));
    };
    function bs(l, v, O, W, Z) {
      var pe = new ra(v || this.boundingBox, O || this.xStep, W || this.yStep, this.gState, Z || this.matrix);
      pe.stream = this.stream;
      var ye = l + "$$" + this.cloneIndex++ + "$$";
      return Tn(ye, pe), pe;
    }
    var ws = function(l, v) {
      var O = Pt[l.key], W = ze[O];
      if (W instanceof ki) F("q"), F(ys(v)), W.gState && p.setGState(W.gState), F(l.matrix.toString() + " cm"), F("/" + O + " sh"), F("Q");
      else if (W instanceof ra) {
        var Z = new $e(1, 0, 0, -1, 0, gi());
        l.matrix && (Z = Z.multiply(l.matrix || xr), O = bs.call(W, l.key, l.boundingBox, l.xStep, l.yStep, Z).id), F("q"), F("/Pattern cs"), F("/" + O + " scn"), W.gState && p.setGState(W.gState), F(v), F("Q");
      }
    }, ys = function(l) {
      switch (l) {
        case "f":
        case "F":
        case "n":
          return "W n";
        case "f*":
          return "W* n";
        case "B":
        case "S":
          return "W S";
        case "B*":
          return "W* S";
      }
    }, da = p.moveTo = function(l, v) {
      return F(J(B(l)) + " " + J(U(v)) + " m"), this;
    }, ao = p.lineTo = function(l, v) {
      return F(J(B(l)) + " " + J(U(v)) + " l"), this;
    }, Jn = p.curveTo = function(l, v, O, W, Z, pe) {
      return F([
        J(B(l)),
        J(U(v)),
        J(B(O)),
        J(U(W)),
        J(B(Z)),
        J(U(pe)),
        "c"
      ].join(" ")), this;
    };
    p.__private__.line = p.line = function(l, v, O, W, Z) {
      if (isNaN(l) || isNaN(v) || isNaN(O) || isNaN(W) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.line");
      return D === z ? this.lines([
        [
          O - l,
          W - v
        ]
      ], l, v, [
        1,
        1
      ], Z || "S") : this.lines([
        [
          O - l,
          W - v
        ]
      ], l, v, [
        1,
        1
      ]).stroke();
    }, p.__private__.lines = p.lines = function(l, v, O, W, Z, pe) {
      var ye, Fe, Te, Je, it, vt, Ot, Xt, Et, Qt, Jt, cn;
      if (typeof l == "number" && (cn = O, O = v, v = l, l = cn), W = W || [
        1,
        1
      ], pe = pe || false, isNaN(v) || isNaN(O) || !Array.isArray(l) || !Array.isArray(W) || !ur(Z) || typeof pe != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
      for (da(v, O), ye = W[0], Fe = W[1], Je = l.length, Qt = v, Jt = O, Te = 0; Te < Je; Te++) (it = l[Te]).length === 2 ? (Qt = it[0] * ye + Qt, Jt = it[1] * Fe + Jt, ao(Qt, Jt)) : (vt = it[0] * ye + Qt, Ot = it[1] * Fe + Jt, Xt = it[2] * ye + Qt, Et = it[3] * Fe + Jt, Qt = it[4] * ye + Qt, Jt = it[5] * Fe + Jt, Jn(vt, Ot, Xt, Et, Qt, Jt));
      return pe && io(), hi(Z), this;
    }, p.path = function(l) {
      for (var v = 0; v < l.length; v++) {
        var O = l[v], W = O.c;
        switch (O.op) {
          case "m":
            da(W[0], W[1]);
            break;
          case "l":
            ao(W[0], W[1]);
            break;
          case "c":
            Jn.apply(this, W);
            break;
          case "h":
            io();
        }
      }
      return this;
    }, p.__private__.rect = p.rect = function(l, v, O, W, Z) {
      if (isNaN(l) || isNaN(v) || isNaN(O) || isNaN(W) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.rect");
      return D === z && (W = -W), F([
        J(B(l)),
        J(U(v)),
        J(B(O)),
        J(B(W)),
        "re"
      ].join(" ")), hi(Z), this;
    }, p.__private__.triangle = p.triangle = function(l, v, O, W, Z, pe, ye) {
      if (isNaN(l) || isNaN(v) || isNaN(O) || isNaN(W) || isNaN(Z) || isNaN(pe) || !ur(ye)) throw new Error("Invalid arguments passed to jsPDF.triangle");
      return this.lines([
        [
          O - l,
          W - v
        ],
        [
          Z - O,
          pe - W
        ],
        [
          l - Z,
          v - pe
        ]
      ], l, v, [
        1,
        1
      ], ye, true), this;
    }, p.__private__.roundedRect = p.roundedRect = function(l, v, O, W, Z, pe, ye) {
      if (isNaN(l) || isNaN(v) || isNaN(O) || isNaN(W) || isNaN(Z) || isNaN(pe) || !ur(ye)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
      var Fe = 4 / 3 * (Math.SQRT2 - 1);
      return Z = Math.min(Z, 0.5 * O), pe = Math.min(pe, 0.5 * W), this.lines([
        [
          O - 2 * Z,
          0
        ],
        [
          Z * Fe,
          0,
          Z,
          pe - pe * Fe,
          Z,
          pe
        ],
        [
          0,
          W - 2 * pe
        ],
        [
          0,
          pe * Fe,
          -Z * Fe,
          pe,
          -Z,
          pe
        ],
        [
          2 * Z - O,
          0
        ],
        [
          -Z * Fe,
          0,
          -Z,
          -pe * Fe,
          -Z,
          -pe
        ],
        [
          0,
          2 * pe - W
        ],
        [
          0,
          -pe * Fe,
          Z * Fe,
          -pe,
          Z,
          -pe
        ]
      ], l + Z, v, [
        1,
        1
      ], ye, true), this;
    }, p.__private__.ellipse = p.ellipse = function(l, v, O, W, Z) {
      if (isNaN(l) || isNaN(v) || isNaN(O) || isNaN(W) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
      var pe = 4 / 3 * (Math.SQRT2 - 1) * O, ye = 4 / 3 * (Math.SQRT2 - 1) * W;
      return da(l + O, v), Jn(l + O, v - ye, l + pe, v - W, l, v - W), Jn(l - pe, v - W, l - O, v - ye, l - O, v), Jn(l - O, v + ye, l - pe, v + W, l, v + W), Jn(l + pe, v + W, l + O, v + ye, l + O, v), hi(Z), this;
    }, p.__private__.circle = p.circle = function(l, v, O, W) {
      if (isNaN(l) || isNaN(v) || isNaN(O) || !ur(W)) throw new Error("Invalid arguments passed to jsPDF.circle");
      return this.ellipse(l, v, O, O, W);
    }, p.setFont = function(l, v, O) {
      return O && (v = he(v, O)), Oe = Qa(l, v, {
        disableWarning: false
      }), this;
    };
    var xs = p.__private__.getFont = p.getFont = function() {
      return ct[Qa.apply(p, arguments)];
    };
    p.__private__.getFontList = p.getFontList = function() {
      var l, v, O = {};
      for (l in lt) if (lt.hasOwnProperty(l)) for (v in O[l] = [], lt[l]) lt[l].hasOwnProperty(v) && O[l].push(v);
      return O;
    }, p.addFont = function(l, v, O, W, Z) {
      var pe = [
        "StandardEncoding",
        "MacRomanEncoding",
        "Identity-H",
        "WinAnsiEncoding"
      ];
      return arguments[3] && pe.indexOf(arguments[3]) !== -1 ? Z = arguments[3] : arguments[3] && pe.indexOf(arguments[3]) == -1 && (O = he(O, W)), Ya.call(this, l, v, O, Z = Z || "Identity-H");
    };
    var di, pa = n.lineWidth || 0.200025, Ns = p.__private__.getLineWidth = p.getLineWidth = function() {
      return pa;
    }, Ze = p.__private__.setLineWidth = p.setLineWidth = function(l) {
      return pa = l, F(J(B(l)) + " w"), this;
    };
    p.__private__.setLineDash = Be.API.setLineDash = Be.API.setLineDashPattern = function(l, v) {
      if (l = l || [], v = v || 0, isNaN(v) || !Array.isArray(l)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
      return l = l.map(function(O) {
        return J(B(O));
      }).join(" "), v = J(B(v)), F("[" + l + "] " + v + " d"), this;
    };
    var _s = p.__private__.getLineHeight = p.getLineHeight = function() {
      return Ne * di;
    };
    p.__private__.getLineHeight = p.getLineHeight = function() {
      return Ne * di;
    };
    var As = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(l) {
      return typeof (l = l || 1.15) == "number" && (di = l), this;
    }, Ss = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
      return di;
    };
    As(n.lineHeight);
    var _r = p.__private__.getHorizontalCoordinate = function(l) {
      return B(l);
    }, Ar = p.__private__.getVerticalCoordinate = function(l) {
      return D === G ? l : Ke[T].mediaBox.topRightY - Ke[T].mediaBox.bottomLeftY - B(l);
    }, Ls = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(l) {
      return J(_r(l));
    }, ks = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(l) {
      return J(Ar(l));
    }, Ui = n.strokeColor || "0 G";
    p.__private__.getStrokeColor = p.getDrawColor = function() {
      return or(Ui);
    }, p.__private__.setStrokeColor = p.setDrawColor = function(l, v, O, W) {
      return Ui = Yn({
        ch1: l,
        ch2: v,
        ch3: O,
        ch4: W,
        pdfColorType: "draw",
        precision: 2
      }), F(Ui), this;
    };
    var ma = n.fillColor || "0 g";
    p.__private__.getFillColor = p.getFillColor = function() {
      return or(ma);
    }, p.__private__.setFillColor = p.setFillColor = function(l, v, O, W) {
      return ma = Yn({
        ch1: l,
        ch2: v,
        ch3: O,
        ch4: W,
        pdfColorType: "fill",
        precision: 2
      }), F(ma), this;
    };
    var pi = n.textColor || "0 g", Cs = p.__private__.getTextColor = p.getTextColor = function() {
      return or(pi);
    };
    p.__private__.setTextColor = p.setTextColor = function(l, v, O, W) {
      return pi = Yn({
        ch1: l,
        ch2: v,
        ch3: O,
        ch4: W,
        pdfColorType: "text",
        precision: 3
      }), this;
    };
    var Sr = n.charSpace, Ps = p.__private__.getCharSpace = p.getCharSpace = function() {
      return parseFloat(Sr || 0);
    };
    p.__private__.setCharSpace = p.setCharSpace = function(l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
      return Sr = l, this;
    };
    var ga = 0;
    p.CapJoinStyles = {
      0: 0,
      butt: 0,
      but: 0,
      miter: 0,
      1: 1,
      round: 1,
      rounded: 1,
      circle: 1,
      2: 2,
      projecting: 2,
      project: 2,
      square: 2,
      bevel: 2
    }, p.__private__.setLineCap = p.setLineCap = function(l) {
      var v = p.CapJoinStyles[l];
      if (v === void 0) throw new Error("Line cap style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      return ga = v, F(v + " J"), this;
    };
    var va = 0;
    p.__private__.setLineJoin = p.setLineJoin = function(l) {
      var v = p.CapJoinStyles[l];
      if (v === void 0) throw new Error("Line join style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      return va = v, F(v + " j"), this;
    }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(l) {
      if (l = l || 0, isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
      return F(J(B(l)) + " M"), this;
    }, p.GState = is, p.setGState = function(l) {
      (l = typeof l == "string" ? Ye[tt[l]] : oo(null, l)).equals(Mt) || (F("/" + l.id + " gs"), Mt = l);
    };
    var oo = function(l, v) {
      if (!l || !tt[l]) {
        var O = false;
        for (var W in Ye) if (Ye.hasOwnProperty(W) && Ye[W].equals(v)) {
          O = true;
          break;
        }
        if (O) v = Ye[W];
        else {
          var Z = "GS" + (Object.keys(Ye).length + 1).toString(10);
          Ye[Z] = v, v.id = Z;
        }
        return l && (tt[l] = v.id), xt.publish("addGState", v), v;
      }
    };
    p.addGState = function(l, v) {
      return oo(l, v), this;
    }, p.saveGraphicsState = function() {
      return F("q"), Ft.push({
        key: Oe,
        size: Ne,
        color: pi
      }), this;
    }, p.restoreGraphicsState = function() {
      F("Q");
      var l = Ft.pop();
      return Oe = l.key, Ne = l.size, pi = l.color, Mt = null, this;
    }, p.setCurrentTransformationMatrix = function(l) {
      return F(l.toString() + " cm"), this;
    }, p.comment = function(l) {
      return F("#" + l), this;
    };
    var Lr = function(l, v) {
      var O = l || 0;
      Object.defineProperty(this, "x", {
        enumerable: true,
        get: function() {
          return O;
        },
        set: function(pe) {
          isNaN(pe) || (O = parseFloat(pe));
        }
      });
      var W = v || 0;
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return W;
        },
        set: function(pe) {
          isNaN(pe) || (W = parseFloat(pe));
        }
      });
      var Z = "pt";
      return Object.defineProperty(this, "type", {
        enumerable: true,
        get: function() {
          return Z;
        },
        set: function(pe) {
          Z = pe.toString();
        }
      }), this;
    }, ba = function(l, v, O, W) {
      Lr.call(this, l, v), this.type = "rect";
      var Z = O || 0;
      Object.defineProperty(this, "w", {
        enumerable: true,
        get: function() {
          return Z;
        },
        set: function(ye) {
          isNaN(ye) || (Z = parseFloat(ye));
        }
      });
      var pe = W || 0;
      return Object.defineProperty(this, "h", {
        enumerable: true,
        get: function() {
          return pe;
        },
        set: function(ye) {
          isNaN(ye) || (pe = parseFloat(ye));
        }
      }), this;
    }, zi = function() {
      this.page = ut, this.currentPage = T, this.pages = Se.slice(0), this.pagesContext = Ke.slice(0), this.x = qe, this.y = Ut, this.matrix = gt, this.width = ya(T), this.height = co(T), this.outputDestination = Pe, this.id = "", this.objectNumber = -1;
    };
    zi.prototype.restore = function() {
      ut = this.page, T = this.currentPage, Ke = this.pagesContext, Se = this.pages, qe = this.x, Ut = this.y, gt = this.matrix, so(T, this.width), kr(T, this.height), Pe = this.outputDestination;
    };
    var wa = function(l, v, O, W, Z) {
      ar.push(new zi()), ut = T = 0, Se = [], qe = l, Ut = v, gt = Z, fa([
        O,
        W
      ]);
    };
    for (var mi in p.beginFormObject = function(l, v, O, W, Z) {
      return wa(l, v, O, W, Z), this;
    }, p.endFormObject = function(l) {
      return function(v) {
        if (wr[v]) ar.pop().restore();
        else {
          var O = new zi(), W = "Xo" + (Object.keys(dn).length + 1).toString(10);
          O.id = W, wr[v] = W, dn[W] = O, xt.publish("addFormObject", O), ar.pop().restore();
        }
      }(l), this;
    }, p.doFormObject = function(l, v) {
      var O = dn[wr[l]];
      return F("q"), F(v.toString() + " cm"), F("/" + O.id + " Do"), F("Q"), this;
    }, p.getFormObject = function(l) {
      var v = dn[wr[l]];
      return {
        x: v.x,
        y: v.y,
        width: v.width,
        height: v.height,
        matrix: v.matrix
      };
    }, p.save = function(l, v) {
      return l = l || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || false, v.returnPromise === false ? (Li(Bi(lr()), l), typeof Li.unload == "function" && Xe.setTimeout && setTimeout(Li.unload, 911), this) : new Promise(function(O, W) {
        try {
          var Z = Li(Bi(lr()), l);
          typeof Li.unload == "function" && Xe.setTimeout && setTimeout(Li.unload, 911), O(Z);
        } catch (pe) {
          W(pe.message);
        }
      });
    }, Be.API) Be.API.hasOwnProperty(mi) && (mi === "events" && Be.API.events.length ? function(l, v) {
      var O, W, Z;
      for (Z = v.length - 1; Z !== -1; Z--) O = v[Z][0], W = v[Z][1], l.subscribe.apply(l, [
        O
      ].concat(typeof W == "function" ? [
        W
      ] : W));
    }(xt, Be.API.events) : p[mi] = Be.API[mi]);
    function ya(l) {
      return Ke[l].mediaBox.topRightX - Ke[l].mediaBox.bottomLeftX;
    }
    function so(l, v) {
      Ke[l].mediaBox.topRightX = v + Ke[l].mediaBox.bottomLeftX;
    }
    function co(l) {
      return Ke[l].mediaBox.topRightY - Ke[l].mediaBox.bottomLeftY;
    }
    function kr(l, v) {
      Ke[l].mediaBox.topRightY = v + Ke[l].mediaBox.bottomLeftY;
    }
    var Cr = p.getPageWidth = function(l) {
      return ya(l = l || T) / rt;
    }, lo = p.setPageWidth = function(l, v) {
      so(l, v * rt);
    }, gi = p.getPageHeight = function(l) {
      return co(l = l || T) / rt;
    }, uo = p.setPageHeight = function(l, v) {
      kr(l, v * rt);
    };
    return p.internal = {
      pdfEscape: qn,
      getStyle: ro,
      getFont: xs,
      getFontSize: Ie,
      getCharSpace: Ps,
      getTextColor: Cs,
      getLineHeight: _s,
      getLineHeightFactor: Ss,
      getLineWidth: Ns,
      write: ke,
      getHorizontalCoordinate: _r,
      getVerticalCoordinate: Ar,
      getCoordinateString: Ls,
      getVerticalCoordinateString: ks,
      collections: {},
      newObject: Tt,
      newAdditionalObject: li,
      newObjectDeferred: an,
      newObjectDeferredBegin: sn,
      getFilters: Xn,
      putStream: Bn,
      events: xt,
      scaleFactor: rt,
      pageSize: {
        getWidth: function() {
          return Cr(T);
        },
        setWidth: function(l) {
          lo(T, l);
        },
        getHeight: function() {
          return gi(T);
        },
        setHeight: function(l) {
          uo(T, l);
        }
      },
      encryptionOptions: m,
      encryption: Zt,
      getEncryptor: function(l) {
        return m !== null ? Zt.encryptor(l, 0) : function(v) {
          return v;
        };
      },
      output: to,
      getNumberOfPages: Za,
      get pages() {
        return Se;
      },
      out: F,
      f2: x,
      f3: I,
      getPageInfo: Nr,
      getPageInfoByObjId: no,
      getCurrentPageInfo: gs,
      getPDFVersion: L,
      Point: Lr,
      Rectangle: ba,
      Matrix: $e,
      hasHotfix: Un
    }, Object.defineProperty(p.internal.pageSize, "width", {
      get: function() {
        return Cr(T);
      },
      set: function(l) {
        lo(T, l);
      },
      enumerable: true,
      configurable: true
    }), Object.defineProperty(p.internal.pageSize, "height", {
      get: function() {
        return gi(T);
      },
      set: function(l) {
        uo(T, l);
      },
      enumerable: true,
      configurable: true
    }), (function(l) {
      for (var v = 0, O = Ge.length; v < O; v++) {
        var W = Ya.call(this, l[v][0], l[v][1], l[v][2], Ge[v][3], true);
        w === false && (S[W] = true);
        var Z = l[v][0].split("-");
        $a({
          id: W,
          fontName: Z[0],
          fontStyle: Z[1] || ""
        });
      }
      xt.publish("addFonts", {
        fonts: ct,
        dictionary: lt
      });
    }).call(p, Ge), Oe = "F1", Xa(o, t), xt.publish("initialized"), p;
  }
  ta.prototype.lsbFirstWord = function(n) {
    return String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
  }, ta.prototype.toHexString = function(n) {
    return n.split("").map(function(e) {
      return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
    }).join("");
  }, ta.prototype.hexToBytes = function(n) {
    for (var e = [], t = 0; t < n.length; t += 2) e.push(String.fromCharCode(parseInt(n.substr(t, 2), 16)));
    return e.join("");
  }, ta.prototype.processOwnerPassword = function(n, e) {
    return jc(Ic(e).substr(0, 5), n);
  }, ta.prototype.encryptor = function(n, e) {
    var t = Ic(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(r) {
      return jc(t, r);
    };
  }, is.prototype.equals = function(n) {
    var e, t = "id,objectNumber,equals";
    if (!n || St(n) !== St(this)) return false;
    var r = 0;
    for (e in this) if (!(t.indexOf(e) >= 0)) {
      if (this.hasOwnProperty(e) && !n.hasOwnProperty(e) || this[e] !== n[e]) return false;
      r++;
    }
    for (e in n) n.hasOwnProperty(e) && t.indexOf(e) < 0 && r--;
    return r === 0;
  }, Be.API = {
    events: []
  }, Be.version = "4.1.0";
  var qt = Be.API, Vc = 1, Mi = function(n) {
    return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Qi = function(n) {
    return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
  }, as = function(n) {
    return n.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(e) {
      var t = e.charCodeAt(0).toString(16).toUpperCase();
      return "#" + (t.length === 1 ? "0" + t : t);
    });
  }, Qe = function(n) {
    return n.toFixed(2);
  }, ni = function(n) {
    return n.toFixed(5);
  };
  qt.__acroform__ = {};
  var Ln = function(n, e) {
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n;
  }, Mu = function(n) {
    return n * Vc;
  }, mr = function(n) {
    var e = new Vh(), t = je.internal.getHeight(n) || 0, r = je.internal.getWidth(n) || 0;
    return e.BBox = [
      0,
      0,
      Number(Qe(r)),
      Number(Qe(t))
    ], e;
  }, Vp = qt.__acroform__.setBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    return n | 1 << e;
  }, Kp = qt.__acroform__.clearBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    return n & ~(1 << e);
  }, $p = qt.__acroform__.getBit = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return n & 1 << e ? 1 : 0;
  }, Vt = qt.__acroform__.getBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return $p(n, e - 1);
  }, Kt = qt.__acroform__.setBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return Vp(n, e - 1);
  }, $t = qt.__acroform__.clearBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return Kp(n, e - 1);
  }, Yp = qt.__acroform__.calculateCoordinates = function(n, e) {
    var t = e.internal.getHorizontalCoordinate, r = e.internal.getVerticalCoordinate, o = n[0], a = n[1], f = n[2], c = n[3], u = {};
    return u.lowerLeft_X = t(o) || 0, u.lowerLeft_Y = r(a + c) || 0, u.upperRight_X = t(o + f) || 0, u.upperRight_Y = r(a) || 0, [
      Number(Qe(u.lowerLeft_X)),
      Number(Qe(u.lowerLeft_Y)),
      Number(Qe(u.upperRight_X)),
      Number(Qe(u.upperRight_Y))
    ];
  }, Xp = function(n) {
    if (n.appearanceStreamContent) return n.appearanceStreamContent;
    if (n.V || n.DV) {
      var e = [], t = n._V || n.DV, r = Fc(n, t), o = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
      e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(n.scope.__private__.encodeColorString(n.color)), e.push("/" + o + " " + Qe(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
      var a = mr(n);
      return a.scope = n.scope, a.stream = e.join(`
`), a;
    }
  }, Fc = function(n, e) {
    var t = n.fontSize === 0 ? n.maxFontSize : n.fontSize, r = {
      text: "",
      fontSize: ""
    }, o = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
    o = n.multiline ? o.map(function(x) {
      return x.split(`
`);
    }) : o.map(function(x) {
      return [
        x
      ];
    });
    var a = t, f = je.internal.getHeight(n) || 0;
    f = f < 0 ? -f : f;
    var c = je.internal.getWidth(n) || 0;
    c = c < 0 ? -c : c;
    var u = function(x, I, B) {
      if (x + 1 < o.length) {
        var U = I + " " + o[x + 1][0];
        return Ho(U, n, B).width <= c - 4;
      }
      return false;
    };
    a++;
    e: for (; a > 0; ) {
      e = "", a--;
      var d, m, w = Ho("3", n, a).height, S = n.multiline ? f - a : (f - w) / 2, p = S += 2, E = 0, L = 0, j = 0;
      if (a <= 0) {
        e = `(...) Tj
`, e += "% Width of Text: " + Ho(e, n, a = 12).width + ", FieldWidth:" + c + `
`;
        break;
      }
      for (var N = "", z = 0, G = 0; G < o.length; G++) if (o.hasOwnProperty(G)) {
        var D = false;
        if (o[G].length !== 1 && j !== o[G].length - 1) {
          if ((w + 2) * (z + 2) + 2 > f) continue e;
          N += o[G][j], D = true, L = G, G--;
        } else {
          N = (N += o[G][j] + " ").substr(N.length - 1) == " " ? N.substr(0, N.length - 1) : N;
          var ae = parseInt(G), be = u(ae, N, a), he = G >= o.length - 1;
          if (be && !he) {
            N += " ", j = 0;
            continue;
          }
          if (be || he) {
            if (he) L = ae;
            else if (n.multiline && (w + 2) * (z + 2) + 2 > f) continue e;
          } else {
            if (!n.multiline || (w + 2) * (z + 2) + 2 > f) continue e;
            L = ae;
          }
        }
        for (var J = "", H = E; H <= L; H++) {
          var V = o[H];
          if (n.multiline) {
            if (H === L) {
              J += V[j] + " ", j = (j + 1) % V.length;
              continue;
            }
            if (H === E) {
              J += V[V.length - 1] + " ";
              continue;
            }
          }
          J += V[0] + " ";
        }
        switch (J = J.substr(J.length - 1) == " " ? J.substr(0, J.length - 1) : J, m = Ho(J, n, a).width, n.textAlign) {
          case "right":
            d = c - m - 2;
            break;
          case "center":
            d = (c - m) / 2;
            break;
          default:
            d = 2;
        }
        e += Qe(d) + " " + Qe(p) + ` Td
`, e += "(" + Mi(J) + `) Tj
`, e += -Qe(d) + ` 0 Td
`, p = -(a + 2), m = 0, E = D ? L : L + 1, z++, N = "";
      }
      break;
    }
    return r.text = e, r.fontSize = a, r;
  }, Ho = function(n, e, t) {
    var r = e.scope.internal.getFont(e.fontName, e.fontStyle), o = e.scope.getStringUnitWidth(n, {
      font: r,
      fontSize: parseFloat(t),
      charSpace: 0
    }) * parseFloat(t);
    return {
      height: e.scope.getStringUnitWidth("3", {
        font: r,
        fontSize: parseFloat(t),
        charSpace: 0
      }) * parseFloat(t) * 1.5,
      width: o
    };
  }, Jp = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: false,
    internal: null,
    isInitialized: false
  }, Zp = function(n, e) {
    var t = {
      type: "reference",
      object: n
    };
    e.internal.getPageInfo(n.page).pageContext.annotations.find(function(r) {
      return r.type === t.type && r.object === t.object;
    }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(t);
  }, Qp = function(n, e) {
    if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === false)) {
      if (rr.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(Jp)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
      Vc = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new Kh(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
        (function(t) {
          t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = true;
        })(n);
      }), n.internal.events.subscribe("buildDocument", function() {
        (function(t) {
          t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
          var r = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
          for (var o in r) if (r.hasOwnProperty(o)) {
            var a = r[o];
            a.objId = void 0, a.hasAnnotation && Zp(a, t);
          }
        })(n);
      }), n.internal.events.subscribe("putCatalog", function() {
        (function(t) {
          if (t.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
          t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
        })(n);
      }), n.internal.events.subscribe("postPutPages", function(t) {
        (function(r, o) {
          var a = !r;
          for (var f in r || (o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), r = r || o.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (r.hasOwnProperty(f)) {
            var c = r[f], u = [], d = c.Rect;
            if (c.Rect && (c.Rect = Yp(c.Rect, o)), o.internal.newObjectDeferredBegin(c.objId, true), c.DA = je.createDefaultAppearanceStream(c), St(c) === "object" && typeof c.getKeyValueListForStream == "function" && (u = c.getKeyValueListForStream()), c.Rect = d, c.hasAppearanceStream && !c.appearanceStreamContent) {
              var m = Xp(c);
              u.push({
                key: "AP",
                value: "<</N " + m + ">>"
              }), o.internal.acroformPlugin.xForms.push(m);
            }
            if (c.appearanceStreamContent) {
              var w = "";
              for (var S in c.appearanceStreamContent) if (c.appearanceStreamContent.hasOwnProperty(S)) {
                var p = c.appearanceStreamContent[S];
                if (w += "/" + S + " ", w += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                  for (var f in p) if (p.hasOwnProperty(f)) {
                    var E = p[f];
                    typeof E == "function" && (E = E.call(o, c)), w += "/" + f + " " + E + " ", o.internal.acroformPlugin.xForms.indexOf(E) >= 0 || o.internal.acroformPlugin.xForms.push(E);
                  }
                } else typeof (E = p) == "function" && (E = E.call(o, c)), w += "/" + f + " " + E, o.internal.acroformPlugin.xForms.indexOf(E) >= 0 || o.internal.acroformPlugin.xForms.push(E);
                w += ">>";
              }
              u.push({
                key: "AP",
                value: `<<
` + w + ">>"
              });
            }
            o.internal.putStream({
              additionalKeyValues: u,
              objectId: c.objId
            }), o.internal.out("endobj");
          }
          a && function(L, j) {
            for (var N in L) if (L.hasOwnProperty(N)) {
              var z = N, G = L[N];
              j.internal.newObjectDeferredBegin(G.objId, true), St(G) === "object" && typeof G.putStream == "function" && G.putStream(), delete L[z];
            }
          }(o.internal.acroformPlugin.xForms, o);
        })(t, n);
      }), n.internal.acroformPlugin.isInitialized = true;
    }
  }, Gh = qt.__acroform__.arrayToPdfArray = function(n, e, t) {
    var r = function(f) {
      return f;
    };
    if (Array.isArray(n)) {
      for (var o = "[", a = 0; a < n.length; a++) switch (a !== 0 && (o += " "), St(n[a])) {
        case "boolean":
        case "number":
        case "object":
          o += n[a].toString();
          break;
        case "string":
          n[a].substr(0, 1) === "/" ? o += "/" + as(n[a].substr(1)) : (e !== void 0 && t && (r = t.internal.getEncryptor(e)), o += "(" + Mi(r(n[a].toString())) + ")");
      }
      return o + "]";
    }
    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
  }, vc = function(n, e, t) {
    var r = function(o) {
      return o;
    };
    return e !== void 0 && t && (r = t.internal.getEncryptor(e)), (n = n || "").toString(), "(" + Mi(r(n)) + ")";
  }, vr = function() {
    this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
      get: function() {
        if (this._objId === void 0) {
          if (this.scope === void 0) return;
          this._objId = this.scope.internal.newObjectDeferred();
        }
        return this._objId;
      },
      set: function(n) {
        this._objId = n;
      }
    }), Object.defineProperty(this, "scope", {
      value: this._scope,
      writable: true
    });
  };
  vr.prototype.toString = function() {
    return this.objId + " 0 R";
  }, vr.prototype.putStream = function() {
    var n = this.getKeyValueListForStream();
    this.scope.internal.putStream({
      data: this.stream,
      additionalKeyValues: n,
      objectId: this.objId
    }), this.scope.internal.out("endobj");
  }, vr.prototype.getKeyValueListForStream = function() {
    var n = [], e = Object.getOwnPropertyNames(this).filter(function(a) {
      return a != "content" && a != "appearanceStreamContent" && a != "scope" && a != "objId" && a.substring(0, 1) != "_";
    });
    for (var t in e) if (Object.getOwnPropertyDescriptor(this, e[t]).configurable === false) {
      var r = e[t], o = this[r];
      o && (Array.isArray(o) ? n.push({
        key: r,
        value: Gh(o, this.objId, this.scope)
      }) : o instanceof vr ? (o.scope = this.scope, n.push({
        key: r,
        value: o.objId + " 0 R"
      })) : typeof o != "function" && n.push({
        key: r,
        value: o
      }));
    }
    return n;
  };
  var Vh = function() {
    vr.call(this), Object.defineProperty(this, "Type", {
      value: "/XObject",
      configurable: false,
      writable: true
    }), Object.defineProperty(this, "Subtype", {
      value: "/Form",
      configurable: false,
      writable: true
    }), Object.defineProperty(this, "FormType", {
      value: 1,
      configurable: false,
      writable: true
    });
    var n, e = [];
    Object.defineProperty(this, "BBox", {
      configurable: false,
      get: function() {
        return e;
      },
      set: function(t) {
        e = t;
      }
    }), Object.defineProperty(this, "Resources", {
      value: "2 0 R",
      configurable: false,
      writable: true
    }), Object.defineProperty(this, "stream", {
      enumerable: false,
      configurable: true,
      set: function(t) {
        n = t.trim();
      },
      get: function() {
        return n || null;
      }
    });
  };
  Ln(Vh, vr);
  var Kh = function() {
    vr.call(this);
    var n, e = [];
    Object.defineProperty(this, "Kids", {
      enumerable: false,
      configurable: true,
      get: function() {
        return e.length > 0 ? e : void 0;
      }
    }), Object.defineProperty(this, "Fields", {
      enumerable: false,
      configurable: false,
      get: function() {
        return e;
      }
    }), Object.defineProperty(this, "DA", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (n) {
          var t = function(r) {
            return r;
          };
          return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + Mi(t(n)) + ")";
        }
      },
      set: function(t) {
        n = t;
      }
    });
  };
  Ln(Kh, vr);
  var rr = function n() {
    vr.call(this);
    var e = 4;
    Object.defineProperty(this, "F", {
      enumerable: false,
      configurable: false,
      get: function() {
        return e;
      },
      set: function(N) {
        if (isNaN(N)) throw new Error('Invalid value "' + N + '" for attribute F supplied.');
        e = N;
      }
    }), Object.defineProperty(this, "showWhenPrinted", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(e, 3);
      },
      set: function(N) {
        N ? this.F = Kt(e, 3) : this.F = $t(e, 3);
      }
    });
    var t = 0;
    Object.defineProperty(this, "Ff", {
      enumerable: false,
      configurable: false,
      get: function() {
        return t;
      },
      set: function(N) {
        if (isNaN(N)) throw new Error('Invalid value "' + N + '" for attribute Ff supplied.');
        t = N;
      }
    });
    var r = [];
    Object.defineProperty(this, "Rect", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (r.length !== 0) return r;
      },
      set: function(N) {
        r = N !== void 0 ? N : [];
      }
    }), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[0]) ? 0 : r[0];
      },
      set: function(N) {
        r[0] = N;
      }
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[1]) ? 0 : r[1];
      },
      set: function(N) {
        r[1] = N;
      }
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[2]) ? 0 : r[2];
      },
      set: function(N) {
        r[2] = N;
      }
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[3]) ? 0 : r[3];
      },
      set: function(N) {
        r[3] = N;
      }
    });
    var o = "";
    Object.defineProperty(this, "FT", {
      enumerable: true,
      configurable: false,
      get: function() {
        return o;
      },
      set: function(N) {
        switch (N) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            o = N;
            break;
          default:
            throw new Error('Invalid value "' + N + '" for attribute FT supplied.');
        }
      }
    });
    var a = null;
    Object.defineProperty(this, "T", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!a || a.length < 1) {
          if (this instanceof os) return;
          a = "FieldObject" + n.FieldNum++;
        }
        var N = function(z) {
          return z;
        };
        return this.scope && (N = this.scope.internal.getEncryptor(this.objId)), "(" + Mi(N(a)) + ")";
      },
      set: function(N) {
        a = N.toString();
      }
    }), Object.defineProperty(this, "fieldName", {
      configurable: true,
      enumerable: true,
      get: function() {
        return a;
      },
      set: function(N) {
        a = N;
      }
    });
    var f = "helvetica";
    Object.defineProperty(this, "fontName", {
      enumerable: true,
      configurable: true,
      get: function() {
        return f;
      },
      set: function(N) {
        f = N;
      }
    });
    var c = "normal";
    Object.defineProperty(this, "fontStyle", {
      enumerable: true,
      configurable: true,
      get: function() {
        return c;
      },
      set: function(N) {
        c = N;
      }
    });
    var u = 0;
    Object.defineProperty(this, "fontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return u;
      },
      set: function(N) {
        u = N;
      }
    });
    var d = void 0;
    Object.defineProperty(this, "maxFontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return d === void 0 ? 50 / Vc : d;
      },
      set: function(N) {
        d = N;
      }
    });
    var m = "black";
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      get: function() {
        return m;
      },
      set: function(N) {
        m = N;
      }
    });
    var w = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!(!w || this instanceof os || this instanceof Ci)) return vc(w, this.objId, this.scope);
      },
      set: function(N) {
        N = N.toString(), w = N;
      }
    });
    var S = null;
    Object.defineProperty(this, "DV", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (S) return this instanceof on == 0 ? vc(S, this.objId, this.scope) : S;
      },
      set: function(N) {
        N = N.toString(), S = this instanceof on == 0 ? N.substr(0, 1) === "(" ? Qi(N.substr(1, N.length - 2)) : Qi(N) : N;
      }
    }), Object.defineProperty(this, "defaultValue", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof on == 1 ? Qi(S.substr(1, S.length - 1)) : S;
      },
      set: function(N) {
        N = N.toString(), S = this instanceof on == 1 ? "/" + as(N) : N;
      }
    });
    var p = null;
    Object.defineProperty(this, "_V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return p;
      },
      set: function(N) {
        this.V = N;
      }
    }), Object.defineProperty(this, "V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return this instanceof on == 0 ? vc(p, this.objId, this.scope) : p;
      },
      set: function(N) {
        N = N.toString(), p = this instanceof on == 0 ? N.substr(0, 1) === "(" ? Qi(N.substr(1, N.length - 2)) : Qi(N) : N;
      }
    }), Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof on == 1 ? Qi(p.substr(1, p.length - 1)) : p;
      },
      set: function(N) {
        N = N.toString(), p = this instanceof on == 1 ? "/" + as(N) : N;
      }
    }), Object.defineProperty(this, "hasAnnotation", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this.Rect;
      }
    }), Object.defineProperty(this, "Type", {
      enumerable: true,
      configurable: false,
      get: function() {
        return this.hasAnnotation ? "/Annot" : null;
      }
    }), Object.defineProperty(this, "Subtype", {
      enumerable: true,
      configurable: false,
      get: function() {
        return this.hasAnnotation ? "/Widget" : null;
      }
    });
    var E, L = false;
    Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: true,
      configurable: true,
      get: function() {
        return L;
      },
      set: function(N) {
        N = !!N, L = N;
      }
    }), Object.defineProperty(this, "page", {
      enumerable: true,
      configurable: true,
      get: function() {
        if (E) return E;
      },
      set: function(N) {
        E = N;
      }
    }), Object.defineProperty(this, "readOnly", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 1);
      },
      set: function(N) {
        N ? this.Ff = Kt(this.Ff, 1) : this.Ff = $t(this.Ff, 1);
      }
    }), Object.defineProperty(this, "required", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 2);
      },
      set: function(N) {
        N ? this.Ff = Kt(this.Ff, 2) : this.Ff = $t(this.Ff, 2);
      }
    }), Object.defineProperty(this, "noExport", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 3);
      },
      set: function(N) {
        N ? this.Ff = Kt(this.Ff, 3) : this.Ff = $t(this.Ff, 3);
      }
    });
    var j = null;
    Object.defineProperty(this, "Q", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (j !== null) return j;
      },
      set: function(N) {
        if ([
          0,
          1,
          2
        ].indexOf(N) === -1) throw new Error('Invalid value "' + N + '" for attribute Q supplied.');
        j = N;
      }
    }), Object.defineProperty(this, "textAlign", {
      get: function() {
        var N;
        switch (j) {
          case 0:
          default:
            N = "left";
            break;
          case 1:
            N = "center";
            break;
          case 2:
            N = "right";
        }
        return N;
      },
      configurable: true,
      enumerable: true,
      set: function(N) {
        switch (N) {
          case "right":
          case 2:
            j = 2;
            break;
          case "center":
          case 1:
            j = 1;
            break;
          default:
            j = 0;
        }
      }
    });
  };
  Ln(rr, vr);
  var aa = function() {
    rr.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
    var n = 0;
    Object.defineProperty(this, "TI", {
      enumerable: true,
      configurable: false,
      get: function() {
        return n;
      },
      set: function(t) {
        n = t;
      }
    }), Object.defineProperty(this, "topIndex", {
      enumerable: true,
      configurable: true,
      get: function() {
        return n;
      },
      set: function(t) {
        n = t;
      }
    });
    var e = [];
    Object.defineProperty(this, "Opt", {
      enumerable: true,
      configurable: false,
      get: function() {
        return Gh(e, this.objId, this.scope);
      },
      set: function(t) {
        var r, o;
        o = [], typeof (r = t) == "string" && (o = function(a, f, c) {
          c || (c = 1);
          for (var u, d = []; u = f.exec(a); ) d.push(u[c]);
          return d;
        }(r, /\((.*?)\)/g)), e = o;
      }
    }), this.getOptions = function() {
      return e;
    }, this.setOptions = function(t) {
      e = t, this.sort && e.sort();
    }, this.addOption = function(t) {
      t = (t = t || "").toString(), e.push(t), this.sort && e.sort();
    }, this.removeOption = function(t, r) {
      for (r = r || false, t = (t = t || "").toString(); e.indexOf(t) !== -1 && (e.splice(e.indexOf(t), 1), r !== false); ) ;
    }, Object.defineProperty(this, "combo", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 18);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 18) : this.Ff = $t(this.Ff, 18);
      }
    }), Object.defineProperty(this, "edit", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 19);
      },
      set: function(t) {
        this.combo === true && (t ? this.Ff = Kt(this.Ff, 19) : this.Ff = $t(this.Ff, 19));
      }
    }), Object.defineProperty(this, "sort", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 20);
      },
      set: function(t) {
        t ? (this.Ff = Kt(this.Ff, 20), e.sort()) : this.Ff = $t(this.Ff, 20);
      }
    }), Object.defineProperty(this, "multiSelect", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 22);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 22) : this.Ff = $t(this.Ff, 22);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 23);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 23) : this.Ff = $t(this.Ff, 23);
      }
    }), Object.defineProperty(this, "commitOnSelChange", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 27);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 27) : this.Ff = $t(this.Ff, 27);
      }
    }), this.hasAppearanceStream = false;
  };
  Ln(aa, rr);
  var oa = function() {
    aa.call(this), this.fontName = "helvetica", this.combo = false;
  };
  Ln(oa, aa);
  var sa = function() {
    oa.call(this), this.combo = true;
  };
  Ln(sa, oa);
  var Jo = function() {
    sa.call(this), this.edit = true;
  };
  Ln(Jo, sa);
  var on = function() {
    rr.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 15);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 15) : this.Ff = $t(this.Ff, 15);
      }
    }), Object.defineProperty(this, "radio", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 16);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 16) : this.Ff = $t(this.Ff, 16);
      }
    }), Object.defineProperty(this, "pushButton", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 17);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 17) : this.Ff = $t(this.Ff, 17);
      }
    }), Object.defineProperty(this, "radioIsUnison", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 26);
      },
      set: function(t) {
        t ? this.Ff = Kt(this.Ff, 26) : this.Ff = $t(this.Ff, 26);
      }
    });
    var n, e = {};
    Object.defineProperty(this, "MK", {
      enumerable: false,
      configurable: false,
      get: function() {
        var t = function(a) {
          return a;
        };
        if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
          var r, o = [];
          for (r in o.push("<<"), e) o.push("/" + r + " (" + Mi(t(e[r])) + ")");
          return o.push(">>"), o.join(`
`);
        }
      },
      set: function(t) {
        St(t) === "object" && (e = t);
      }
    }), Object.defineProperty(this, "caption", {
      enumerable: true,
      configurable: true,
      get: function() {
        return e.CA || "";
      },
      set: function(t) {
        typeof t == "string" && (e.CA = t);
      }
    }), Object.defineProperty(this, "AS", {
      enumerable: false,
      configurable: false,
      get: function() {
        return n;
      },
      set: function(t) {
        n = t;
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: true,
      configurable: true,
      get: function() {
        return n.substr(1, n.length - 1);
      },
      set: function(t) {
        n = "/" + as(t);
      }
    });
  };
  Ln(on, rr);
  var Zo = function() {
    on.call(this), this.pushButton = true;
  };
  Ln(Zo, on);
  var ca = function() {
    on.call(this), this.radio = true, this.pushButton = false;
    var n = [];
    Object.defineProperty(this, "Kids", {
      enumerable: true,
      configurable: false,
      get: function() {
        return n;
      },
      set: function(e) {
        n = e !== void 0 ? e : [];
      }
    });
  };
  Ln(ca, on);
  var os = function() {
    var n, e;
    rr.call(this), Object.defineProperty(this, "Parent", {
      enumerable: false,
      configurable: false,
      get: function() {
        return n;
      },
      set: function(o) {
        n = o;
      }
    }), Object.defineProperty(this, "optionName", {
      enumerable: false,
      configurable: true,
      get: function() {
        return e;
      },
      set: function(o) {
        e = o;
      }
    });
    var t, r = {};
    Object.defineProperty(this, "MK", {
      enumerable: false,
      configurable: false,
      get: function() {
        var o = function(c) {
          return c;
        };
        this.scope && (o = this.scope.internal.getEncryptor(this.objId));
        var a, f = [];
        for (a in f.push("<<"), r) f.push("/" + a + " (" + Mi(o(r[a])) + ")");
        return f.push(">>"), f.join(`
`);
      },
      set: function(o) {
        St(o) === "object" && (r = o);
      }
    }), Object.defineProperty(this, "caption", {
      enumerable: true,
      configurable: true,
      get: function() {
        return r.CA || "";
      },
      set: function(o) {
        typeof o == "string" && (r.CA = o);
      }
    }), Object.defineProperty(this, "AS", {
      enumerable: false,
      configurable: false,
      get: function() {
        return t;
      },
      set: function(o) {
        t = o;
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: true,
      configurable: true,
      get: function() {
        return t.substr(1, t.length - 1);
      },
      set: function(o) {
        t = "/" + o;
      }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = je.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
  };
  Ln(os, rr), ca.prototype.setAppearance = function(n) {
    if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
      var t = this.Kids[e];
      t.appearanceStreamContent = n.createAppearanceStream(t.optionName), t.caption = n.getCA();
    }
  }, ca.prototype.createOption = function(n) {
    var e = new os();
    return e.Parent = this, e.optionName = n, this.Kids.push(e), em.call(this.scope, e), e;
  };
  var Qo = function() {
    on.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = je.CheckBox.createAppearanceStream();
  };
  Ln(Qo, on);
  var Ci = function() {
    rr.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 13);
      },
      set: function(e) {
        e ? this.Ff = Kt(this.Ff, 13) : this.Ff = $t(this.Ff, 13);
      }
    }), Object.defineProperty(this, "fileSelect", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 21);
      },
      set: function(e) {
        e ? this.Ff = Kt(this.Ff, 21) : this.Ff = $t(this.Ff, 21);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 23);
      },
      set: function(e) {
        e ? this.Ff = Kt(this.Ff, 23) : this.Ff = $t(this.Ff, 23);
      }
    }), Object.defineProperty(this, "doNotScroll", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 24);
      },
      set: function(e) {
        e ? this.Ff = Kt(this.Ff, 24) : this.Ff = $t(this.Ff, 24);
      }
    }), Object.defineProperty(this, "comb", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 25);
      },
      set: function(e) {
        e ? this.Ff = Kt(this.Ff, 25) : this.Ff = $t(this.Ff, 25);
      }
    }), Object.defineProperty(this, "richText", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 26);
      },
      set: function(e) {
        e ? this.Ff = Kt(this.Ff, 26) : this.Ff = $t(this.Ff, 26);
      }
    });
    var n = null;
    Object.defineProperty(this, "MaxLen", {
      enumerable: true,
      configurable: false,
      get: function() {
        return n;
      },
      set: function(e) {
        n = e;
      }
    }), Object.defineProperty(this, "maxLength", {
      enumerable: true,
      configurable: true,
      get: function() {
        return n;
      },
      set: function(e) {
        Number.isInteger(e) && (n = e);
      }
    }), Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this.V || this.DV;
      }
    });
  };
  Ln(Ci, rr);
  var es = function() {
    Ci.call(this), Object.defineProperty(this, "password", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 14);
      },
      set: function(n) {
        n ? this.Ff = Kt(this.Ff, 14) : this.Ff = $t(this.Ff, 14);
      }
    }), this.password = true;
  };
  Ln(es, Ci);
  var je = {
    CheckBox: {
      createAppearanceStream: function() {
        return {
          N: {
            On: je.CheckBox.YesNormal
          },
          D: {
            On: je.CheckBox.YesPushDown,
            Off: je.CheckBox.OffPushDown
          }
        };
      },
      YesPushDown: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = [], r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, o = n.scope.__private__.encodeColorString(n.color), a = Fc(n, n.caption);
        return t.push("0.749023 g"), t.push("0 0 " + Qe(je.internal.getWidth(n)) + " " + Qe(je.internal.getHeight(n)) + " re"), t.push("f"), t.push("BMC"), t.push("q"), t.push("0 0 1 rg"), t.push("/" + r + " " + Qe(a.fontSize) + " Tf " + o), t.push("BT"), t.push(a.text), t.push("ET"), t.push("Q"), t.push("EMC"), e.stream = t.join(`
`), e;
      },
      YesNormal: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color), o = [], a = je.internal.getHeight(n), f = je.internal.getWidth(n), c = Fc(n, n.caption);
        return o.push("1 g"), o.push("0 0 " + Qe(f) + " " + Qe(a) + " re"), o.push("f"), o.push("q"), o.push("0 0 1 rg"), o.push("0 0 " + Qe(f - 1) + " " + Qe(a - 1) + " re"), o.push("W"), o.push("n"), o.push("0 g"), o.push("BT"), o.push("/" + t + " " + Qe(c.fontSize) + " Tf " + r), o.push(c.text), o.push("ET"), o.push("Q"), e.stream = o.join(`
`), e;
      },
      OffPushDown: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = [];
        return t.push("0.749023 g"), t.push("0 0 " + Qe(je.internal.getWidth(n)) + " " + Qe(je.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
      }
    },
    RadioButton: {
      Circle: {
        createAppearanceStream: function(n) {
          var e = {
            D: {
              Off: je.RadioButton.Circle.OffPushDown
            },
            N: {}
          };
          return e.N[n] = je.RadioButton.Circle.YesNormal, e.D[n] = je.RadioButton.Circle.YesPushDown, e;
        },
        getCA: function() {
          return "l";
        },
        YesNormal: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = je.internal.getWidth(n) <= je.internal.getHeight(n) ? je.internal.getWidth(n) / 4 : je.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var o = je.internal.Bezier_C, a = Number((r * o).toFixed(5));
          return t.push("q"), t.push("1 0 0 1 " + ni(je.internal.getWidth(n) / 2) + " " + ni(je.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), t.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), t.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), t.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = je.internal.getWidth(n) <= je.internal.getHeight(n) ? je.internal.getWidth(n) / 4 : je.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var o = Number((2 * r).toFixed(5)), a = Number((o * je.internal.Bezier_C).toFixed(5)), f = Number((r * je.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ni(je.internal.getWidth(n) / 2) + " " + ni(je.internal.getHeight(n) / 2) + " cm"), t.push(o + " 0 m"), t.push(o + " " + a + " " + a + " " + o + " 0 " + o + " c"), t.push("-" + a + " " + o + " -" + o + " " + a + " -" + o + " 0 c"), t.push("-" + o + " -" + a + " -" + a + " -" + o + " 0 -" + o + " c"), t.push(a + " -" + o + " " + o + " -" + a + " " + o + " 0 c"), t.push("f"), t.push("Q"), t.push("0 g"), t.push("q"), t.push("1 0 0 1 " + ni(je.internal.getWidth(n) / 2) + " " + ni(je.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + f + " " + f + " " + r + " 0 " + r + " c"), t.push("-" + f + " " + r + " -" + r + " " + f + " -" + r + " 0 c"), t.push("-" + r + " -" + f + " -" + f + " -" + r + " 0 -" + r + " c"), t.push(f + " -" + r + " " + r + " -" + f + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = je.internal.getWidth(n) <= je.internal.getHeight(n) ? je.internal.getWidth(n) / 4 : je.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var o = Number((2 * r).toFixed(5)), a = Number((o * je.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ni(je.internal.getWidth(n) / 2) + " " + ni(je.internal.getHeight(n) / 2) + " cm"), t.push(o + " 0 m"), t.push(o + " " + a + " " + a + " " + o + " 0 " + o + " c"), t.push("-" + a + " " + o + " -" + o + " " + a + " -" + o + " 0 c"), t.push("-" + o + " -" + a + " -" + a + " -" + o + " 0 -" + o + " c"), t.push(a + " -" + o + " " + o + " -" + a + " " + o + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        }
      },
      Cross: {
        createAppearanceStream: function(n) {
          var e = {
            D: {
              Off: je.RadioButton.Cross.OffPushDown
            },
            N: {}
          };
          return e.N[n] = je.RadioButton.Cross.YesNormal, e.D[n] = je.RadioButton.Cross.YesPushDown, e;
        },
        getCA: function() {
          return "8";
        },
        YesNormal: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = je.internal.calculateCross(n);
          return t.push("q"), t.push("1 1 " + Qe(je.internal.getWidth(n) - 2) + " " + Qe(je.internal.getHeight(n) - 2) + " re"), t.push("W"), t.push("n"), t.push(Qe(r.x1.x) + " " + Qe(r.x1.y) + " m"), t.push(Qe(r.x2.x) + " " + Qe(r.x2.y) + " l"), t.push(Qe(r.x4.x) + " " + Qe(r.x4.y) + " m"), t.push(Qe(r.x3.x) + " " + Qe(r.x3.y) + " l"), t.push("s"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = je.internal.calculateCross(n), r = [];
          return r.push("0.749023 g"), r.push("0 0 " + Qe(je.internal.getWidth(n)) + " " + Qe(je.internal.getHeight(n)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + Qe(je.internal.getWidth(n) - 2) + " " + Qe(je.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(Qe(t.x1.x) + " " + Qe(t.x1.y) + " m"), r.push(Qe(t.x2.x) + " " + Qe(t.x2.y) + " l"), r.push(Qe(t.x4.x) + " " + Qe(t.x4.y) + " m"), r.push(Qe(t.x3.x) + " " + Qe(t.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [];
          return t.push("0.749023 g"), t.push("0 0 " + Qe(je.internal.getWidth(n)) + " " + Qe(je.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
        }
      }
    },
    createDefaultAppearanceStream: function(n) {
      var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, t = n.scope.__private__.encodeColorString(n.color);
      return "/" + e + " " + n.fontSize + " Tf " + t;
    }
  };
  je.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function(n) {
      var e = je.internal.getWidth(n), t = je.internal.getHeight(n), r = Math.min(e, t);
      return {
        x1: {
          x: (e - r) / 2,
          y: (t - r) / 2 + r
        },
        x2: {
          x: (e - r) / 2 + r,
          y: (t - r) / 2
        },
        x3: {
          x: (e - r) / 2,
          y: (t - r) / 2
        },
        x4: {
          x: (e - r) / 2 + r,
          y: (t - r) / 2 + r
        }
      };
    }
  }, je.internal.getWidth = function(n) {
    var e = 0;
    return St(n) === "object" && (e = Mu(n.Rect[2])), e;
  }, je.internal.getHeight = function(n) {
    var e = 0;
    return St(n) === "object" && (e = Mu(n.Rect[3])), e;
  };
  var em = qt.addField = function(n) {
    if (Qp(this, n), !(n instanceof rr)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = false, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
  };
  qt.AcroFormChoiceField = aa, qt.AcroFormListBox = oa, qt.AcroFormComboBox = sa, qt.AcroFormEditBox = Jo, qt.AcroFormButton = on, qt.AcroFormPushButton = Zo, qt.AcroFormRadioButton = ca, qt.AcroFormCheckBox = Qo, qt.AcroFormTextField = Ci, qt.AcroFormPasswordField = es, qt.AcroFormAppearance = je, qt.AcroForm = {
    ChoiceField: aa,
    ListBox: oa,
    ComboBox: sa,
    EditBox: Jo,
    Button: on,
    PushButton: Zo,
    RadioButton: ca,
    CheckBox: Qo,
    TextField: Ci,
    PasswordField: es,
    Appearance: je
  }, Be.AcroForm = {
    ChoiceField: aa,
    ListBox: oa,
    ComboBox: sa,
    EditBox: Jo,
    Button: on,
    PushButton: Zo,
    RadioButton: ca,
    CheckBox: Qo,
    TextField: Ci,
    PasswordField: es,
    Appearance: je
  };
  Be.AcroForm;
  function $h(n) {
    return n.reduce(function(e, t, r) {
      return e[t] = r, e;
    }, {});
  }
  (function(n) {
    var e = "addImage_";
    n.__addimage__ = {};
    var t = "UNKNOWN", r = {
      PNG: [
        [
          137,
          80,
          78,
          71
        ]
      ],
      TIFF: [
        [
          77,
          77,
          0,
          42
        ],
        [
          73,
          73,
          42,
          0
        ]
      ],
      JPEG: [
        [
          255,
          216,
          255,
          224,
          void 0,
          void 0,
          74,
          70,
          73,
          70,
          0
        ],
        [
          255,
          216,
          255,
          225,
          void 0,
          void 0,
          69,
          120,
          105,
          102,
          0,
          0
        ],
        [
          255,
          216,
          255,
          219
        ],
        [
          255,
          216,
          255,
          238
        ]
      ],
      JPEG2000: [
        [
          0,
          0,
          0,
          12,
          106,
          80,
          32,
          32
        ]
      ],
      GIF87a: [
        [
          71,
          73,
          70,
          56,
          55,
          97
        ]
      ],
      GIF89a: [
        [
          71,
          73,
          70,
          56,
          57,
          97
        ]
      ],
      WEBP: [
        [
          82,
          73,
          70,
          70,
          void 0,
          void 0,
          void 0,
          void 0,
          87,
          69,
          66,
          80
        ]
      ],
      BMP: [
        [
          66,
          77
        ],
        [
          66,
          65
        ],
        [
          67,
          73
        ],
        [
          67,
          80
        ],
        [
          73,
          67
        ],
        [
          80,
          84
        ]
      ]
    }, o = n.__addimage__.getImageFileTypeByImageData = function(x, I) {
      var B, U, se, le, ge, ne = t;
      if ((I = I || t) === "RGBA" || x.data !== void 0 && x.data instanceof Uint8ClampedArray && "height" in x && "width" in x) return "RGBA";
      if (be(x)) for (ge in r) for (se = r[ge], B = 0; B < se.length; B += 1) {
        for (le = true, U = 0; U < se[B].length; U += 1) if (se[B][U] !== void 0 && se[B][U] !== x[U]) {
          le = false;
          break;
        }
        if (le === true) {
          ne = ge;
          break;
        }
      }
      else for (ge in r) for (se = r[ge], B = 0; B < se.length; B += 1) {
        for (le = true, U = 0; U < se[B].length; U += 1) if (se[B][U] !== void 0 && se[B][U] !== x.charCodeAt(U)) {
          le = false;
          break;
        }
        if (le === true) {
          ne = ge;
          break;
        }
      }
      return ne === t && I !== t && (ne = I), ne;
    }, a = function x(I) {
      for (var B = this.internal.write, U = this.internal.putStream, se = (0, this.internal.getFilters)(); se.indexOf("FlateEncode") !== -1; ) se.splice(se.indexOf("FlateEncode"), 1);
      I.objectId = this.internal.newObject();
      var le = [];
      if (le.push({
        key: "Type",
        value: "/XObject"
      }), le.push({
        key: "Subtype",
        value: "/Image"
      }), le.push({
        key: "Width",
        value: I.width
      }), le.push({
        key: "Height",
        value: I.height
      }), I.colorSpace === N.INDEXED ? le.push({
        key: "ColorSpace",
        value: "[/Indexed /DeviceRGB " + (I.palette.length / 3 - 1) + " " + ("sMask" in I && I.sMask !== void 0 ? I.objectId + 2 : I.objectId + 1) + " 0 R]"
      }) : (le.push({
        key: "ColorSpace",
        value: "/" + I.colorSpace
      }), I.colorSpace === N.DEVICE_CMYK && le.push({
        key: "Decode",
        value: "[1 0 1 0 1 0 1 0]"
      })), le.push({
        key: "BitsPerComponent",
        value: I.bitsPerComponent
      }), "decodeParameters" in I && I.decodeParameters !== void 0 && le.push({
        key: "DecodeParms",
        value: "<<" + I.decodeParameters + ">>"
      }), "transparency" in I && Array.isArray(I.transparency) && I.transparency.length > 0) {
        for (var ge = "", ne = 0, te = I.transparency.length; ne < te; ne++) ge += I.transparency[ne] + " " + I.transparency[ne] + " ";
        le.push({
          key: "Mask",
          value: "[" + ge + "]"
        });
      }
      I.sMask !== void 0 && le.push({
        key: "SMask",
        value: I.objectId + 1 + " 0 R"
      });
      var Ae = I.filter !== void 0 ? [
        "/" + I.filter
      ] : void 0;
      if (U({
        data: I.data,
        additionalKeyValues: le,
        alreadyAppliedFilters: Ae,
        objectId: I.objectId
      }), B("endobj"), "sMask" in I && I.sMask !== void 0) {
        var we, A = (we = I.sMaskBitsPerComponent) !== null && we !== void 0 ? we : I.bitsPerComponent, T = {
          width: I.width,
          height: I.height,
          colorSpace: "DeviceGray",
          bitsPerComponent: A,
          data: I.sMask
        };
        "filter" in I && (T.decodeParameters = "/Predictor ".concat(I.predictor, " /Colors 1 /BitsPerComponent ").concat(A, " /Columns ").concat(I.width), T.filter = I.filter), x.call(this, T);
      }
      if (I.colorSpace === N.INDEXED) {
        var q = this.internal.newObject();
        U({
          data: J(new Uint8Array(I.palette)),
          objectId: q
        }), B("endobj");
      }
    }, f = function() {
      var x = this.internal.collections[e + "images"];
      for (var I in x) a.call(this, x[I]);
    }, c = function() {
      var x, I = this.internal.collections[e + "images"], B = this.internal.write;
      for (var U in I) B("/I" + (x = I[U]).index, x.objectId, "0", "R");
    }, u = function() {
      this.internal.collections[e + "images"] || (this.internal.collections[e + "images"] = {}, this.internal.events.subscribe("putResources", f), this.internal.events.subscribe("putXobjectDict", c));
    }, d = function() {
      var x = this.internal.collections[e + "images"];
      return u.call(this), x;
    }, m = function() {
      return Object.keys(this.internal.collections[e + "images"]).length;
    }, w = function(x) {
      return typeof n["process" + x.toUpperCase()] == "function";
    }, S = function(x) {
      return St(x) === "object" && x.nodeType === 1;
    }, p = function(x, I) {
      if (x.nodeName === "IMG" && x.hasAttribute("src")) {
        var B = "" + x.getAttribute("src");
        if (B.indexOf("data:image/") === 0) return Xo(unescape(B).split("base64,").pop());
        var U = n.loadFile(B, true);
        if (U !== void 0) return U;
      }
      if (x.nodeName === "CANVAS") {
        if (x.width === 0 || x.height === 0) throw new Error("Given canvas must have data. Canvas width: " + x.width + ", height: " + x.height);
        var se;
        switch (I) {
          case "PNG":
            se = "image/png";
            break;
          case "WEBP":
            se = "image/webp";
            break;
          default:
            se = "image/jpeg";
        }
        return Xo(x.toDataURL(se, 1).split("base64,").pop());
      }
    }, E = function(x) {
      var I = this.internal.collections[e + "images"];
      if (I) {
        for (var B in I) if (x === I[B].alias) return I[B];
      }
    }, L = function(x, I, B) {
      return x || I || (x = -96, I = -96), x < 0 && (x = -1 * B.width * 72 / x / this.internal.scaleFactor), I < 0 && (I = -1 * B.height * 72 / I / this.internal.scaleFactor), x === 0 && (x = I * B.width / B.height), I === 0 && (I = x * B.height / B.width), [
        x,
        I
      ];
    }, j = function(x, I, B, U, se, le) {
      var ge = L.call(this, B, U, se), ne = this.internal.getCoordinateString, te = this.internal.getVerticalCoordinateString, Ae = d.call(this);
      if (B = ge[0], U = ge[1], Ae[se.index] = se, le) {
        le *= Math.PI / 180;
        var we = Math.cos(le), A = Math.sin(le), T = function($) {
          return $.toFixed(4);
        }, q = [
          T(we),
          T(A),
          T(-1 * A),
          T(we),
          0,
          0,
          "cm"
        ];
      }
      this.internal.write("q"), le ? (this.internal.write([
        1,
        "0",
        "0",
        1,
        ne(x),
        te(I + U),
        "cm"
      ].join(" ")), this.internal.write(q.join(" ")), this.internal.write([
        ne(B),
        "0",
        "0",
        ne(U),
        "0",
        "0",
        "cm"
      ].join(" "))) : this.internal.write([
        ne(B),
        "0",
        "0",
        ne(U),
        ne(x),
        te(I + U),
        "cm"
      ].join(" ")), this.isAdvancedAPI() && this.internal.write([
        1,
        0,
        0,
        -1,
        0,
        0,
        "cm"
      ].join(" ")), this.internal.write("/I" + se.index + " Do"), this.internal.write("Q");
    }, N = n.color_spaces = {
      DEVICE_RGB: "DeviceRGB",
      DEVICE_GRAY: "DeviceGray",
      DEVICE_CMYK: "DeviceCMYK",
      CAL_GREY: "CalGray",
      CAL_RGB: "CalRGB",
      LAB: "Lab",
      ICC_BASED: "ICCBased",
      INDEXED: "Indexed",
      PATTERN: "Pattern",
      SEPARATION: "Separation",
      DEVICE_N: "DeviceN"
    };
    n.decode = {
      DCT_DECODE: "DCTDecode",
      FLATE_DECODE: "FlateDecode",
      LZW_DECODE: "LZWDecode",
      JPX_DECODE: "JPXDecode",
      JBIG2_DECODE: "JBIG2Decode",
      ASCII85_DECODE: "ASCII85Decode",
      ASCII_HEX_DECODE: "ASCIIHexDecode",
      RUN_LENGTH_DECODE: "RunLengthDecode",
      CCITT_FAX_DECODE: "CCITTFaxDecode"
    };
    var z = n.image_compression = {
      NONE: "NONE",
      FAST: "FAST",
      MEDIUM: "MEDIUM",
      SLOW: "SLOW"
    }, G = n.__addimage__.sHashCode = function(x) {
      var I, B, U = 0;
      if (typeof x == "string") for (B = x.length, I = 0; I < B; I++) U = (U << 5) - U + x.charCodeAt(I), U |= 0;
      else if (be(x)) for (B = x.byteLength / 2, I = 0; I < B; I++) U = (U << 5) - U + x[I], U |= 0;
      return U;
    }, D = n.__addimage__.validateStringAsBase64 = function(x) {
      (x = x || "").toString().trim();
      var I = true;
      return x.length === 0 && (I = false), x.length % 4 != 0 && (I = false), /^[A-Za-z0-9+/]+$/.test(x.substr(0, x.length - 2)) === false && (I = false), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(x.substr(-2)) === false && (I = false), I;
    }, ae = n.__addimage__.extractImageFromDataUrl = function(x) {
      if (x == null || !(x = x.trim()).startsWith("data:")) return null;
      var I = x.indexOf(",");
      return I < 0 ? null : x.substring(0, I).trim().endsWith("base64") ? x.substring(I + 1) : null;
    };
    n.__addimage__.isArrayBuffer = function(x) {
      return x instanceof ArrayBuffer;
    };
    var be = n.__addimage__.isArrayBufferView = function(x) {
      return x instanceof Int8Array || x instanceof Uint8Array || x instanceof Uint8ClampedArray || x instanceof Int16Array || x instanceof Uint16Array || x instanceof Int32Array || x instanceof Uint32Array || x instanceof Float32Array || x instanceof Float64Array;
    }, he = n.__addimage__.binaryStringToUint8Array = function(x) {
      for (var I = x.length, B = new Uint8Array(I), U = 0; U < I; U++) B[U] = x.charCodeAt(U);
      return B;
    }, J = n.__addimage__.arrayBufferToBinaryString = function(x) {
      for (var I = "", B = be(x) ? x : new Uint8Array(x), U = 0; U < B.length; U += 8192) I += String.fromCharCode.apply(null, B.subarray(U, U + 8192));
      return I;
    };
    n.addImage = function() {
      var x, I, B, U, se, le, ge, ne, te;
      if (typeof arguments[1] == "number" ? (I = t, B = arguments[1], U = arguments[2], se = arguments[3], le = arguments[4], ge = arguments[5], ne = arguments[6], te = arguments[7]) : (I = arguments[1], B = arguments[2], U = arguments[3], se = arguments[4], le = arguments[5], ge = arguments[6], ne = arguments[7], te = arguments[8]), St(x = arguments[0]) === "object" && !S(x) && "imageData" in x) {
        var Ae = x;
        x = Ae.imageData, I = Ae.format || I || t, B = Ae.x || B || 0, U = Ae.y || U || 0, se = Ae.w || Ae.width || se, le = Ae.h || Ae.height || le, ge = Ae.alias || ge, ne = Ae.compression || ne, te = Ae.rotation || Ae.angle || te;
      }
      var we = this.internal.getFilters();
      if (ne === void 0 && we.indexOf("FlateEncode") !== -1 && (ne = "SLOW"), isNaN(B) || isNaN(U)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
      u.call(this);
      var A = H.call(this, x, I, ge, ne);
      return j.call(this, B, U, se, le, A, te), this;
    };
    var H = function(x, I, B, U) {
      var se, le, ge;
      if (typeof x == "string" && o(x) === t) {
        x = unescape(x);
        var ne = V(x, false);
        (ne !== "" || (ne = n.loadFile(x, true)) !== void 0) && (x = ne);
      }
      if (S(x) && (x = p(x, I)), I = o(x, I), !w(I)) throw new Error("addImage does not support files of type '" + I + "', please ensure that a plugin for '" + I + "' support is added.");
      if (((ge = B) == null || ge.length === 0) && (B = function(te) {
        return typeof te == "string" || be(te) ? G(te) : be(te.data) ? G(te.data) : null;
      }(x)), (se = E.call(this, B)) || (x instanceof Uint8Array || I === "RGBA" || (le = x, x = he(x)), se = this["process" + I.toUpperCase()](x, m.call(this), B, function(te) {
        return te && typeof te == "string" && (te = te.toUpperCase()), te in n.image_compression ? te : z.NONE;
      }(U), le)), !se) throw new Error("An unknown error occurred whilst processing the image.");
      return se;
    }, V = n.__addimage__.convertBase64ToBinaryString = function(x, I) {
      I = typeof I != "boolean" || I;
      var B, U = "";
      if (typeof x == "string") {
        var se;
        B = (se = ae(x)) !== null && se !== void 0 ? se : x;
        try {
          U = Xo(B);
        } catch (le) {
          if (I) throw D(B) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + le.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
        }
      }
      return U;
    };
    n.getImageProperties = function(x) {
      var I, B, U = "";
      if (S(x) && (x = p(x)), typeof x == "string" && o(x) === t && ((U = V(x, false)) === "" && (U = n.loadFile(x) || ""), x = U), B = o(x), !w(B)) throw new Error("addImage does not support files of type '" + B + "', please ensure that a plugin for '" + B + "' support is added.");
      if (x instanceof Uint8Array || (x = he(x)), !(I = this["process" + B.toUpperCase()](x))) throw new Error("An unknown error occurred whilst processing the image");
      return I.fileType = B, I;
    };
  })(Be.API), function(n) {
    var e = function(t) {
      if (t !== void 0 && t != "") return true;
    };
    Be.API.events.push([
      "addPage",
      function(t) {
        this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
      }
    ]), n.events.push([
      "putPage",
      function(t) {
        for (var r, o, a, f = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString, u = this.internal.getPageInfoByObjId(t.objId), d = t.pageContext.annotations, m = false, w = 0; w < d.length && !m; w++) switch ((r = d[w]).type) {
          case "link":
            (e(r.options.url) || e(r.options.pageNumber)) && (m = true);
            break;
          case "reference":
          case "text":
          case "freetext":
            m = true;
        }
        if (m != 0) {
          this.internal.write("/Annots [");
          for (var S = 0; S < d.length; S++) {
            r = d[S];
            var p = this.internal.pdfEscape, E = this.internal.getEncryptor(t.objId);
            switch (r.type) {
              case "reference":
                this.internal.write(" " + r.object.objId + " 0 R ");
                break;
              case "text":
                var L = this.internal.newAdditionalObject(), j = this.internal.newAdditionalObject(), N = this.internal.getEncryptor(L.objId), z = r.title || "Note";
                a = "<</Type /Annot /Subtype /Text " + (o = "/Rect [" + f(r.bounds.x) + " " + c(r.bounds.y + r.bounds.h) + " " + f(r.bounds.x + r.bounds.w) + " " + c(r.bounds.y) + "] ") + "/Contents (" + p(N(r.contents)) + ")", a += " /Popup " + j.objId + " 0 R", a += " /P " + u.objId + " 0 R", a += " /T (" + p(N(z)) + ") >>", L.content = a;
                var G = L.objId + " 0 R";
                a = "<</Type /Annot /Subtype /Popup " + (o = "/Rect [" + f(r.bounds.x + 30) + " " + c(r.bounds.y + r.bounds.h) + " " + f(r.bounds.x + r.bounds.w + 30) + " " + c(r.bounds.y) + "] ") + " /Parent " + G, r.open && (a += " /Open true"), a += " >>", j.content = a, this.internal.write(L.objId, "0 R", j.objId, "0 R");
                break;
              case "freetext":
                o = "/Rect [" + f(r.bounds.x) + " " + c(r.bounds.y) + " " + f(r.bounds.x + r.bounds.w) + " " + c(r.bounds.y + r.bounds.h) + "] ";
                var D = r.color || "#000000";
                a = "<</Type /Annot /Subtype /FreeText " + o + "/Contents (" + p(E(r.contents)) + ")", a += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + D + ")", a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
                break;
              case "link":
                if (r.options.name) {
                  var ae = this.annotations._nameMap[r.options.name];
                  r.options.pageNumber = ae.page, r.options.top = ae.y;
                } else r.options.top || (r.options.top = 0);
                if (o = "/Rect [" + r.finalBounds.x + " " + r.finalBounds.y + " " + r.finalBounds.w + " " + r.finalBounds.h + "] ", a = "", r.options.url) a = "<</Type /Annot /Subtype /Link " + o + "/Border [0 0 0] /A <</S /URI /URI (" + p(E(r.options.url)) + ") >>";
                else if (r.options.pageNumber) switch (a = "<</Type /Annot /Subtype /Link " + o + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(r.options.pageNumber).objId + " 0 R", r.options.magFactor = r.options.magFactor || "XYZ", r.options.magFactor) {
                  case "Fit":
                    a += " /Fit]";
                    break;
                  case "FitH":
                    a += " /FitH " + r.options.top + "]";
                    break;
                  case "FitV":
                    r.options.left = r.options.left || 0, a += " /FitV " + r.options.left + "]";
                    break;
                  default:
                    var be = c(r.options.top);
                    r.options.left = r.options.left || 0, r.options.zoom === void 0 && (r.options.zoom = 0), a += " /XYZ " + r.options.left + " " + be + " " + r.options.zoom + "]";
                }
                a != "" && (a += " >>", this.internal.write(a));
            }
          }
          this.internal.write("]");
        }
      }
    ]), n.createAnnotation = function(t) {
      var r = this.internal.getCurrentPageInfo();
      switch (t.type) {
        case "link":
          this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
          break;
        case "text":
        case "freetext":
          r.pageContext.annotations.push(t);
      }
    }, n.link = function(t, r, o, a, f) {
      var c = this.internal.getCurrentPageInfo(), u = this.internal.getCoordinateString, d = this.internal.getVerticalCoordinateString;
      c.pageContext.annotations.push({
        finalBounds: {
          x: u(t),
          y: d(r),
          w: u(t + o),
          h: d(r + a)
        },
        options: f,
        type: "link"
      });
    }, n.textWithLink = function(t, r, o, a) {
      var f, c, u = this.getTextWidth(t), d = this.internal.getLineHeight() / this.internal.scaleFactor;
      if (a.maxWidth !== void 0) {
        c = a.maxWidth;
        var m = this.splitTextToSize(t, c).length;
        f = Math.ceil(d * m);
      } else c = u, f = d;
      return this.text(t, r, o, a), o += 0.2 * d, a.align === "center" && (r -= u / 2), a.align === "right" && (r -= u), this.link(r, o - d, c, f, a), u;
    }, n.getTextWidth = function(t) {
      var r = this.internal.getFontSize();
      return this.getStringUnitWidth(t) * r / this.internal.scaleFactor;
    };
  }(Be.API), function(n) {
    var e = {
      1569: [
        65152
      ],
      1570: [
        65153,
        65154
      ],
      1571: [
        65155,
        65156
      ],
      1572: [
        65157,
        65158
      ],
      1573: [
        65159,
        65160
      ],
      1574: [
        65161,
        65162,
        65163,
        65164
      ],
      1575: [
        65165,
        65166
      ],
      1576: [
        65167,
        65168,
        65169,
        65170
      ],
      1577: [
        65171,
        65172
      ],
      1578: [
        65173,
        65174,
        65175,
        65176
      ],
      1579: [
        65177,
        65178,
        65179,
        65180
      ],
      1580: [
        65181,
        65182,
        65183,
        65184
      ],
      1581: [
        65185,
        65186,
        65187,
        65188
      ],
      1582: [
        65189,
        65190,
        65191,
        65192
      ],
      1583: [
        65193,
        65194
      ],
      1584: [
        65195,
        65196
      ],
      1585: [
        65197,
        65198
      ],
      1586: [
        65199,
        65200
      ],
      1587: [
        65201,
        65202,
        65203,
        65204
      ],
      1588: [
        65205,
        65206,
        65207,
        65208
      ],
      1589: [
        65209,
        65210,
        65211,
        65212
      ],
      1590: [
        65213,
        65214,
        65215,
        65216
      ],
      1591: [
        65217,
        65218,
        65219,
        65220
      ],
      1592: [
        65221,
        65222,
        65223,
        65224
      ],
      1593: [
        65225,
        65226,
        65227,
        65228
      ],
      1594: [
        65229,
        65230,
        65231,
        65232
      ],
      1601: [
        65233,
        65234,
        65235,
        65236
      ],
      1602: [
        65237,
        65238,
        65239,
        65240
      ],
      1603: [
        65241,
        65242,
        65243,
        65244
      ],
      1604: [
        65245,
        65246,
        65247,
        65248
      ],
      1605: [
        65249,
        65250,
        65251,
        65252
      ],
      1606: [
        65253,
        65254,
        65255,
        65256
      ],
      1607: [
        65257,
        65258,
        65259,
        65260
      ],
      1608: [
        65261,
        65262
      ],
      1609: [
        65263,
        65264,
        64488,
        64489
      ],
      1610: [
        65265,
        65266,
        65267,
        65268
      ],
      1649: [
        64336,
        64337
      ],
      1655: [
        64477
      ],
      1657: [
        64358,
        64359,
        64360,
        64361
      ],
      1658: [
        64350,
        64351,
        64352,
        64353
      ],
      1659: [
        64338,
        64339,
        64340,
        64341
      ],
      1662: [
        64342,
        64343,
        64344,
        64345
      ],
      1663: [
        64354,
        64355,
        64356,
        64357
      ],
      1664: [
        64346,
        64347,
        64348,
        64349
      ],
      1667: [
        64374,
        64375,
        64376,
        64377
      ],
      1668: [
        64370,
        64371,
        64372,
        64373
      ],
      1670: [
        64378,
        64379,
        64380,
        64381
      ],
      1671: [
        64382,
        64383,
        64384,
        64385
      ],
      1672: [
        64392,
        64393
      ],
      1676: [
        64388,
        64389
      ],
      1677: [
        64386,
        64387
      ],
      1678: [
        64390,
        64391
      ],
      1681: [
        64396,
        64397
      ],
      1688: [
        64394,
        64395
      ],
      1700: [
        64362,
        64363,
        64364,
        64365
      ],
      1702: [
        64366,
        64367,
        64368,
        64369
      ],
      1705: [
        64398,
        64399,
        64400,
        64401
      ],
      1709: [
        64467,
        64468,
        64469,
        64470
      ],
      1711: [
        64402,
        64403,
        64404,
        64405
      ],
      1713: [
        64410,
        64411,
        64412,
        64413
      ],
      1715: [
        64406,
        64407,
        64408,
        64409
      ],
      1722: [
        64414,
        64415
      ],
      1723: [
        64416,
        64417,
        64418,
        64419
      ],
      1726: [
        64426,
        64427,
        64428,
        64429
      ],
      1728: [
        64420,
        64421
      ],
      1729: [
        64422,
        64423,
        64424,
        64425
      ],
      1733: [
        64480,
        64481
      ],
      1734: [
        64473,
        64474
      ],
      1735: [
        64471,
        64472
      ],
      1736: [
        64475,
        64476
      ],
      1737: [
        64482,
        64483
      ],
      1739: [
        64478,
        64479
      ],
      1740: [
        64508,
        64509,
        64510,
        64511
      ],
      1744: [
        64484,
        64485,
        64486,
        64487
      ],
      1746: [
        64430,
        64431
      ],
      1747: [
        64432,
        64433
      ]
    }, t = {
      65247: {
        65154: 65269,
        65156: 65271,
        65160: 65273,
        65166: 65275
      },
      65248: {
        65154: 65270,
        65156: 65272,
        65160: 65274,
        65166: 65276
      },
      65165: {
        65247: {
          65248: {
            65258: 65010
          }
        }
      },
      1617: {
        1612: 64606,
        1613: 64607,
        1614: 64608,
        1615: 64609,
        1616: 64610
      }
    }, r = {
      1612: 64606,
      1613: 64607,
      1614: 64608,
      1615: 64609,
      1616: 64610
    }, o = [
      1570,
      1571,
      1573,
      1575
    ];
    n.__arabicParser__ = {};
    var a = n.__arabicParser__.isInArabicSubstitutionA = function(L) {
      return e[L.charCodeAt(0)] !== void 0;
    }, f = n.__arabicParser__.isArabicLetter = function(L) {
      return typeof L == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(L);
    }, c = n.__arabicParser__.isArabicEndLetter = function(L) {
      return f(L) && a(L) && e[L.charCodeAt(0)].length <= 2;
    }, u = n.__arabicParser__.isArabicAlfLetter = function(L) {
      return f(L) && o.indexOf(L.charCodeAt(0)) >= 0;
    };
    n.__arabicParser__.arabicLetterHasIsolatedForm = function(L) {
      return f(L) && a(L) && e[L.charCodeAt(0)].length >= 1;
    };
    var d = n.__arabicParser__.arabicLetterHasFinalForm = function(L) {
      return f(L) && a(L) && e[L.charCodeAt(0)].length >= 2;
    };
    n.__arabicParser__.arabicLetterHasInitialForm = function(L) {
      return f(L) && a(L) && e[L.charCodeAt(0)].length >= 3;
    };
    var m = n.__arabicParser__.arabicLetterHasMedialForm = function(L) {
      return f(L) && a(L) && e[L.charCodeAt(0)].length == 4;
    }, w = n.__arabicParser__.resolveLigatures = function(L) {
      var j = 0, N = t, z = "", G = 0;
      for (j = 0; j < L.length; j += 1) N[L.charCodeAt(j)] !== void 0 ? (G++, typeof (N = N[L.charCodeAt(j)]) == "number" && (z += String.fromCharCode(N), N = t, G = 0), j === L.length - 1 && (N = t, z += L.charAt(j - (G - 1)), j -= G - 1, G = 0)) : (N = t, z += L.charAt(j - G), j -= G, G = 0);
      return z;
    };
    n.__arabicParser__.isArabicDiacritic = function(L) {
      return L !== void 0 && r[L.charCodeAt(0)] !== void 0;
    };
    var S = n.__arabicParser__.getCorrectForm = function(L, j, N) {
      return f(L) ? a(L) === false ? -1 : !d(L) || !f(j) && !f(N) || !f(N) && c(j) || c(L) && !f(j) || c(L) && u(j) || c(L) && c(j) ? 0 : m(L) && f(j) && !c(j) && f(N) && d(N) ? 3 : c(L) || !f(N) ? 1 : 2 : -1;
    }, p = function(L) {
      var j = 0, N = 0, z = 0, G = "", D = "", ae = "", be = (L = L || "").split("\\s+"), he = [];
      for (j = 0; j < be.length; j += 1) {
        for (he.push(""), N = 0; N < be[j].length; N += 1) G = be[j][N], D = be[j][N - 1], ae = be[j][N + 1], f(G) ? (z = S(G, D, ae), he[j] += z !== -1 ? String.fromCharCode(e[G.charCodeAt(0)][z]) : G) : he[j] += G;
        he[j] = w(he[j]);
      }
      return he.join(" ");
    }, E = n.__arabicParser__.processArabic = n.processArabic = function() {
      var L, j = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, N = [];
      if (Array.isArray(j)) {
        var z = 0;
        for (N = [], z = 0; z < j.length; z += 1) Array.isArray(j[z]) ? N.push([
          p(j[z][0]),
          j[z][1],
          j[z][2]
        ]) : N.push([
          p(j[z])
        ]);
        L = N;
      } else L = p(j);
      return typeof arguments[0] == "string" ? L : (arguments[0].text = L, arguments[0]);
    };
    n.events.push([
      "preProcessText",
      E
    ]);
  }(Be.API), Be.API.autoPrint = function(n) {
    var e;
    return (n = n || {}).variant = n.variant || "non-conform", n.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
      e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
    }), this.internal.events.subscribe("putCatalog", function() {
      this.internal.out("/OpenAction " + e + " 0 R");
    })), this;
  }, function(n) {
    var e = function() {
      var t = void 0;
      Object.defineProperty(this, "pdf", {
        get: function() {
          return t;
        },
        set: function(c) {
          t = c;
        }
      });
      var r = 150;
      Object.defineProperty(this, "width", {
        get: function() {
          return r;
        },
        set: function(c) {
          r = isNaN(c) || Number.isInteger(c) === false || c < 0 ? 150 : c, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = r + 1);
        }
      });
      var o = 300;
      Object.defineProperty(this, "height", {
        get: function() {
          return o;
        },
        set: function(c) {
          o = isNaN(c) || Number.isInteger(c) === false || c < 0 ? 300 : c, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = o + 1);
        }
      });
      var a = [];
      Object.defineProperty(this, "childNodes", {
        get: function() {
          return a;
        },
        set: function(c) {
          a = c;
        }
      });
      var f = {};
      Object.defineProperty(this, "style", {
        get: function() {
          return f;
        },
        set: function(c) {
          f = c;
        }
      }), Object.defineProperty(this, "parentNode", {});
    };
    e.prototype.getContext = function(t, r) {
      var o;
      if ((t = t || "2d") !== "2d") return null;
      for (o in r) this.pdf.context2d.hasOwnProperty(o) && (this.pdf.context2d[o] = r[o]);
      return this.pdf.context2d._canvas = this, this.pdf.context2d;
    }, e.prototype.toDataURL = function() {
      throw new Error("toDataURL is not implemented.");
    }, n.events.push([
      "initialized",
      function() {
        this.canvas = new e(), this.canvas.pdf = this;
      }
    ]);
  }(Be.API), function(n) {
    var e = {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    }, t = false, r = function() {
      this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), o.call(this));
    }, o = function() {
      this.internal.__cell__.lastCell = new a(), this.internal.__cell__.pages = 1;
    }, a = function() {
      var u = arguments[0];
      Object.defineProperty(this, "x", {
        enumerable: true,
        get: function() {
          return u;
        },
        set: function(L) {
          u = L;
        }
      });
      var d = arguments[1];
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return d;
        },
        set: function(L) {
          d = L;
        }
      });
      var m = arguments[2];
      Object.defineProperty(this, "width", {
        enumerable: true,
        get: function() {
          return m;
        },
        set: function(L) {
          m = L;
        }
      });
      var w = arguments[3];
      Object.defineProperty(this, "height", {
        enumerable: true,
        get: function() {
          return w;
        },
        set: function(L) {
          w = L;
        }
      });
      var S = arguments[4];
      Object.defineProperty(this, "text", {
        enumerable: true,
        get: function() {
          return S;
        },
        set: function(L) {
          S = L;
        }
      });
      var p = arguments[5];
      Object.defineProperty(this, "lineNumber", {
        enumerable: true,
        get: function() {
          return p;
        },
        set: function(L) {
          p = L;
        }
      });
      var E = arguments[6];
      return Object.defineProperty(this, "align", {
        enumerable: true,
        get: function() {
          return E;
        },
        set: function(L) {
          E = L;
        }
      }), this;
    };
    a.prototype.clone = function() {
      return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
    }, a.prototype.toArray = function() {
      return [
        this.x,
        this.y,
        this.width,
        this.height,
        this.text,
        this.lineNumber,
        this.align
      ];
    }, n.setHeaderFunction = function(u) {
      return r.call(this), this.internal.__cell__.headerFunction = typeof u == "function" ? u : void 0, this;
    }, n.getTextDimensions = function(u, d) {
      r.call(this);
      var m = (d = d || {}).fontSize || this.getFontSize(), w = d.font || this.getFont(), S = d.scaleFactor || this.internal.scaleFactor, p = 0, E = 0, L = 0, j = this;
      if (!Array.isArray(u) && typeof u != "string") {
        if (typeof u != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
        u = String(u);
      }
      var N = d.maxWidth;
      N > 0 ? typeof u == "string" ? u = this.splitTextToSize(u, N) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function(G, D) {
        return G.concat(j.splitTextToSize(D, N));
      }, [])) : u = Array.isArray(u) ? u : [
        u
      ];
      for (var z = 0; z < u.length; z++) p < (L = this.getStringUnitWidth(u[z], {
        font: w
      }) * m) && (p = L);
      return p !== 0 && (E = u.length), {
        w: p /= S,
        h: Math.max((E * m * this.getLineHeightFactor() - m * (this.getLineHeightFactor() - 1)) / S, 0)
      };
    }, n.cellAddPage = function() {
      r.call(this), this.addPage();
      var u = this.internal.__cell__.margins || e;
      return this.internal.__cell__.lastCell = new a(u.left, u.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
    };
    var f = n.cell = function() {
      var u;
      u = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), r.call(this);
      var d = this.internal.__cell__.lastCell, m = this.internal.__cell__.padding, w = this.internal.__cell__.margins || e, S = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
      return d.lineNumber !== void 0 && (d.lineNumber === u.lineNumber ? (u.x = (d.x || 0) + (d.width || 0), u.y = d.y || 0) : d.y + d.height + u.height + w.bottom > this.getPageHeight() ? (this.cellAddPage(), u.y = w.top, p && S && (this.printHeaderRow(u.lineNumber, true), u.y += S[0].height)) : u.y = d.y + d.height || u.y), u.text[0] !== void 0 && (this.rect(u.x, u.y, u.width, u.height, t === true ? "FD" : void 0), u.align === "right" ? this.text(u.text, u.x + u.width - m, u.y + m, {
        align: "right",
        baseline: "top"
      }) : u.align === "center" ? this.text(u.text, u.x + u.width / 2, u.y + m, {
        align: "center",
        baseline: "top",
        maxWidth: u.width - m - m
      }) : this.text(u.text, u.x + m, u.y + m, {
        align: "left",
        baseline: "top",
        maxWidth: u.width - m - m
      })), this.internal.__cell__.lastCell = u, this;
    };
    n.table = function(u, d, m, w, S) {
      if (r.call(this), !m) throw new Error("No data for PDF table.");
      var p, E, L, j, N = [], z = [], G = [], D = {}, ae = {}, be = [], he = [], J = (S = S || {}).autoSize || false, H = S.printHeaders !== false, V = S.css && S.css["font-size"] !== void 0 ? 16 * S.css["font-size"] : S.fontSize || 12, x = S.margins || Object.assign({
        width: this.getPageWidth()
      }, e), I = typeof S.padding == "number" ? S.padding : 3, B = S.headerBackgroundColor || "#c8c8c8", U = S.headerTextColor || "#000";
      if (o.call(this), this.internal.__cell__.printHeaders = H, this.internal.__cell__.margins = x, this.internal.__cell__.table_font_size = V, this.internal.__cell__.padding = I, this.internal.__cell__.headerBackgroundColor = B, this.internal.__cell__.headerTextColor = U, this.setFontSize(V), w == null) z = N = Object.keys(m[0]), G = N.map(function() {
        return "left";
      });
      else if (Array.isArray(w) && St(w[0]) === "object") for (N = w.map(function(Ae) {
        return Ae.name;
      }), z = w.map(function(Ae) {
        return Ae.prompt || Ae.name || "";
      }), G = w.map(function(Ae) {
        return Ae.align || "left";
      }), p = 0; p < w.length; p += 1) ae[w[p].name] = 0.7499990551181103 * w[p].width;
      else Array.isArray(w) && typeof w[0] == "string" && (z = N = w, G = N.map(function() {
        return "left";
      }));
      if (J || Array.isArray(w) && typeof w[0] == "string") for (p = 0; p < N.length; p += 1) {
        for (D[j = N[p]] = m.map(function(Ae) {
          return Ae[j];
        }), this.setFont(void 0, "bold"), be.push(this.getTextDimensions(z[p], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w), E = D[j], this.setFont(void 0, "normal"), L = 0; L < E.length; L += 1) be.push(this.getTextDimensions(E[L], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w);
        ae[j] = Math.max.apply(null, be) + I + I, be = [];
      }
      if (H) {
        var se = {};
        for (p = 0; p < N.length; p += 1) se[N[p]] = {}, se[N[p]].text = z[p], se[N[p]].align = G[p];
        var le = c.call(this, se, ae);
        he = N.map(function(Ae) {
          return new a(u, d, ae[Ae], le, se[Ae].text, void 0, se[Ae].align);
        }), this.setTableHeaderRow(he), this.printHeaderRow(1, false);
      }
      var ge = w.reduce(function(Ae, we) {
        return Ae[we.name] = we.align, Ae;
      }, {});
      for (p = 0; p < m.length; p += 1) {
        "rowStart" in S && S.rowStart instanceof Function && S.rowStart({
          row: p,
          data: m[p]
        }, this);
        var ne = c.call(this, m[p], ae);
        for (L = 0; L < N.length; L += 1) {
          var te = m[p][N[L]];
          "cellStart" in S && S.cellStart instanceof Function && S.cellStart({
            row: p,
            col: L,
            data: te
          }, this), f.call(this, new a(u, d, ae[N[L]], ne, te, p + 2, ge[N[L]]));
        }
      }
      return this.internal.__cell__.table_x = u, this.internal.__cell__.table_y = d, this;
    };
    var c = function(u, d) {
      var m = this.internal.__cell__.padding, w = this.internal.__cell__.table_font_size, S = this.internal.scaleFactor;
      return Object.keys(u).map(function(p) {
        var E = u[p];
        return this.splitTextToSize(E.hasOwnProperty("text") ? E.text : E, d[p] - m - m);
      }, this).map(function(p) {
        return this.getLineHeightFactor() * p.length * w / S + m + m;
      }, this).reduce(function(p, E) {
        return Math.max(p, E);
      }, 0);
    };
    n.setTableHeaderRow = function(u) {
      r.call(this), this.internal.__cell__.tableHeaderRow = u;
    }, n.printHeaderRow = function(u, d) {
      if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
      var m;
      if (t = true, typeof this.internal.__cell__.headerFunction == "function") {
        var w = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
        this.internal.__cell__.lastCell = new a(w[0], w[1], w[2], w[3], void 0, -1);
      }
      this.setFont(void 0, "bold");
      for (var S = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
        m = this.internal.__cell__.tableHeaderRow[p].clone(), d && (m.y = this.internal.__cell__.margins.top || 0, S.push(m)), m.lineNumber = u;
        var E = this.getTextColor();
        this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), f.call(this, m), this.setTextColor(E);
      }
      S.length > 0 && this.setTableHeaderRow(S), this.setFont(void 0, "normal"), t = false;
    };
  }(Be.API);
  var Yh = {
    italic: [
      "italic",
      "oblique",
      "normal"
    ],
    oblique: [
      "oblique",
      "italic",
      "normal"
    ],
    normal: [
      "normal",
      "oblique",
      "italic"
    ]
  }, Xh = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
  ], Mc = $h(Xh), Jh = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], tm = $h(Jh);
  function bc(n) {
    var e = n.family.replace(/"|'/g, "").toLowerCase(), t = function(a) {
      return Yh[a = a || "normal"] ? a : "normal";
    }(n.style), r = function(a) {
      return a ? typeof a == "number" ? a >= 100 && a <= 900 && a % 100 == 0 ? a : 400 : /^\d00$/.test(a) ? parseInt(a) : a === "bold" ? 700 : 400 : 400;
    }(n.weight), o = function(a) {
      return typeof Mc[a = a || "normal"] == "number" ? a : "normal";
    }(n.stretch);
    return {
      family: e,
      style: t,
      weight: r,
      stretch: o,
      src: n.src || [],
      ref: n.ref || {
        name: e,
        style: [
          o,
          t,
          r
        ].join(" ")
      }
    };
  }
  function Ru(n, e, t, r) {
    var o;
    for (o = t; o >= 0 && o < e.length; o += r) if (n[e[o]]) return n[e[o]];
    for (o = t; o >= 0 && o < e.length; o -= r) if (n[e[o]]) return n[e[o]];
  }
  var nm = {
    "sans-serif": "helvetica",
    fixed: "courier",
    monospace: "courier",
    terminal: "courier",
    cursive: "times",
    fantasy: "times",
    serif: "times"
  }, Ou = {
    caption: "times",
    icon: "times",
    menu: "times",
    "message-box": "times",
    "small-caption": "times",
    "status-bar": "times"
  };
  function Tu(n) {
    return [
      n.stretch,
      n.style,
      n.weight,
      n.family
    ].join(" ");
  }
  function Du(n) {
    return n.trimLeft();
  }
  function rm(n, e) {
    for (var t = 0; t < n.length; ) {
      if (n.charAt(t) === e) return [
        n.substring(0, t),
        n.substring(t + 1)
      ];
      t += 1;
    }
    return null;
  }
  function im(n) {
    var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return e === null ? null : [
      e[0],
      n.substring(e[0].length)
    ];
  }
  var ea, Wo, Bu, qu, Uu, wc = [
    "times"
  ];
  function zu(n, e, t, r, o) {
    var a = 4, f = Wu;
    switch (o) {
      case Be.API.image_compression.FAST:
        a = 1, f = Hu;
        break;
      case Be.API.image_compression.MEDIUM:
        a = 6, f = Gu;
        break;
      case Be.API.image_compression.SLOW:
        a = 9, f = Vu;
    }
    n = function(u, d, m, w) {
      for (var S, p = u.length / d, E = new Uint8Array(u.length + p), L = [
        am,
        Hu,
        Wu,
        Gu,
        Vu
      ], j = 0; j < p; j += 1) {
        var N = j * d, z = u.subarray(N, N + d);
        if (w) E.set(w(z, m, S), N + j);
        else {
          for (var G = L.length, D = [], ae = 0; ae < G; ae += 1) D[ae] = L[ae](z, m, S);
          var be = sm(D.concat());
          E.set(D[be], N + j);
        }
        S = z;
      }
      return E;
    }(n, e, Math.ceil(t * r / 8), f);
    var c = Nc(n, {
      level: a
    });
    return Be.API.__addimage__.arrayBufferToBinaryString(c);
  }
  function am(n) {
    var e = Array.apply([], n);
    return e.unshift(0), e;
  }
  function Hu(n, e) {
    var t = n.length, r = [];
    r[0] = 1;
    for (var o = 0; o < t; o += 1) {
      var a = n[o - e] || 0;
      r[o + 1] = n[o] - a + 256 & 255;
    }
    return r;
  }
  function Wu(n, e, t) {
    var r = n.length, o = [];
    o[0] = 2;
    for (var a = 0; a < r; a += 1) {
      var f = t && t[a] || 0;
      o[a + 1] = n[a] - f + 256 & 255;
    }
    return o;
  }
  function Gu(n, e, t) {
    var r = n.length, o = [];
    o[0] = 3;
    for (var a = 0; a < r; a += 1) {
      var f = n[a - e] || 0, c = t && t[a] || 0;
      o[a + 1] = n[a] + 256 - (f + c >>> 1) & 255;
    }
    return o;
  }
  function Vu(n, e, t) {
    var r = n.length, o = [];
    o[0] = 4;
    for (var a = 0; a < r; a += 1) {
      var f = om(n[a - e] || 0, t && t[a] || 0, t && t[a - e] || 0);
      o[a + 1] = n[a] - f + 256 & 255;
    }
    return o;
  }
  function om(n, e, t) {
    if (n === e && e === t) return n;
    var r = Math.abs(e - t), o = Math.abs(n - t), a = Math.abs(n + e - t - t);
    return r <= o && r <= a ? n : o <= a ? e : t;
  }
  function sm(n) {
    var e = n.map(function(t) {
      return t.reduce(function(r, o) {
        return r + Math.abs(o);
      }, 0);
    });
    return e.indexOf(Math.min.apply(null, e));
  }
  function yc(n, e, t) {
    var r = e * t, o = Math.floor(r / 8), a = 16 - (r - 8 * o + t), f = (1 << t) - 1;
    return Zh(n, o) >> a & f;
  }
  function Ku(n, e, t, r) {
    var o = t * r, a = Math.floor(o / 8), f = 16 - (o - 8 * a + r), c = (1 << r) - 1, u = (e & c) << f;
    (function(d, m, w) {
      if (m + 1 < d.byteLength) d.setUint16(m, w, false);
      else {
        var S = w >> 8 & 255;
        d.setUint8(m, S);
      }
    })(n, a, Zh(n, a) & ~(c << f) & 65535 | u);
  }
  function Zh(n, e) {
    return e + 1 < n.byteLength ? n.getUint16(e, false) : n.getUint8(e) << 8;
  }
  function cm(n) {
    var e = 0;
    if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
    var t = n[e++] | n[e++] << 8, r = n[e++] | n[e++] << 8, o = n[e++], a = o >> 7, f = 1 << 1 + (7 & o);
    n[e++], n[e++];
    var c = null, u = null;
    a && (c = e, u = f, e += 3 * f);
    var d = true, m = [], w = 0, S = null, p = 0, E = null;
    for (this.width = t, this.height = r; d && e < n.length; ) switch (n[e++]) {
      case 33:
        switch (n[e++]) {
          case 255:
            if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, E = n[e++] | n[e++] << 8, e++;
            else for (e += 12; ; ) {
              if (!((x = n[e++]) >= 0)) throw Error("Invalid block size");
              if (x === 0) break;
              e += x;
            }
            break;
          case 249:
            if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
            var L = n[e++];
            w = n[e++] | n[e++] << 8, S = n[e++], 1 & L || (S = null), p = L >> 2 & 7, e++;
            break;
          case 254:
            for (; ; ) {
              if (!((x = n[e++]) >= 0)) throw Error("Invalid block size");
              if (x === 0) break;
              e += x;
            }
            break;
          default:
            throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16));
        }
        break;
      case 44:
        var j = n[e++] | n[e++] << 8, N = n[e++] | n[e++] << 8, z = n[e++] | n[e++] << 8, G = n[e++] | n[e++] << 8, D = n[e++], ae = D >> 6 & 1, be = 1 << 1 + (7 & D), he = c, J = u, H = false;
        D >> 7 && (H = true, he = e, J = be, e += 3 * be);
        var V = e;
        for (e++; ; ) {
          var x;
          if (!((x = n[e++]) >= 0)) throw Error("Invalid block size");
          if (x === 0) break;
          e += x;
        }
        m.push({
          x: j,
          y: N,
          width: z,
          height: G,
          has_local_palette: H,
          palette_offset: he,
          palette_size: J,
          data_offset: V,
          data_length: e - V,
          transparent_index: S,
          interlaced: !!ae,
          delay: w,
          disposal: p
        });
        break;
      case 59:
        d = false;
        break;
      default:
        throw new Error("Unknown gif block: 0x" + n[e - 1].toString(16));
    }
    this.numFrames = function() {
      return m.length;
    }, this.loopCount = function() {
      return E;
    }, this.frameInfo = function(I) {
      if (I < 0 || I >= m.length) throw new Error("Frame index out of range.");
      return m[I];
    }, this.decodeAndBlitFrameBGRA = function(I, B) {
      var U = this.frameInfo(I), se = U.width * U.height, le = new Uint8Array(se);
      $u(n, U.data_offset, le, se);
      var ge = U.palette_offset, ne = U.transparent_index;
      ne === null && (ne = 256);
      var te = U.width, Ae = t - te, we = te, A = 4 * (U.y * t + U.x), T = 4 * ((U.y + U.height) * t + U.x), q = A, $ = 4 * Ae;
      U.interlaced === true && ($ += 4 * t * 7);
      for (var Y = 8, Q = 0, ce = le.length; Q < ce; ++Q) {
        var ue = le[Q];
        if (we === 0 && (we = te, (q += $) >= T && ($ = 4 * Ae + 4 * t * (Y - 1), q = A + (te + Ae) * (Y << 1), Y >>= 1)), ue === ne) q += 4;
        else {
          var ve = n[ge + 3 * ue], Se = n[ge + 3 * ue + 1], Ce = n[ge + 3 * ue + 2];
          B[q++] = Ce, B[q++] = Se, B[q++] = ve, B[q++] = 255;
        }
        --we;
      }
    }, this.decodeAndBlitFrameRGBA = function(I, B) {
      var U = this.frameInfo(I), se = U.width * U.height, le = new Uint8Array(se);
      $u(n, U.data_offset, le, se);
      var ge = U.palette_offset, ne = U.transparent_index;
      ne === null && (ne = 256);
      var te = U.width, Ae = t - te, we = te, A = 4 * (U.y * t + U.x), T = 4 * ((U.y + U.height) * t + U.x), q = A, $ = 4 * Ae;
      U.interlaced === true && ($ += 4 * t * 7);
      for (var Y = 8, Q = 0, ce = le.length; Q < ce; ++Q) {
        var ue = le[Q];
        if (we === 0 && (we = te, (q += $) >= T && ($ = 4 * Ae + 4 * t * (Y - 1), q = A + (te + Ae) * (Y << 1), Y >>= 1)), ue === ne) q += 4;
        else {
          var ve = n[ge + 3 * ue], Se = n[ge + 3 * ue + 1], Ce = n[ge + 3 * ue + 2];
          B[q++] = ve, B[q++] = Se, B[q++] = Ce, B[q++] = 255;
        }
        --we;
      }
    };
  }
  function $u(n, e, t, r) {
    for (var o = n[e++], a = 1 << o, f = a + 1, c = f + 1, u = o + 1, d = (1 << u) - 1, m = 0, w = 0, S = 0, p = n[e++], E = new Int32Array(4096), L = null; ; ) {
      for (; m < 16 && p !== 0; ) w |= n[e++] << m, m += 8, p === 1 ? p = n[e++] : --p;
      if (m < u) break;
      var j = w & d;
      if (w >>= u, m -= u, j !== a) {
        if (j === f) break;
        for (var N = j < c ? j : L, z = 0, G = N; G > a; ) G = E[G] >> 8, ++z;
        var D = G;
        if (S + z + (N !== j ? 1 : 0) > r) return void Ct.log("Warning, gif stream longer than expected.");
        t[S++] = D;
        var ae = S += z;
        for (N !== j && (t[S++] = D), G = N; z--; ) G = E[G], t[--ae] = 255 & G, G >>= 8;
        L !== null && c < 4096 && (E[c++] = L << 8 | D, c >= d + 1 && u < 12 && (++u, d = d << 1 | 1)), L = j;
      } else c = f + 1, d = (1 << (u = o + 1)) - 1, L = null;
    }
    return S !== r && Ct.log("Warning, gif stream shorter than expected."), t;
  }
  function xc(n) {
    var e, t, r, o, a, f = Math.floor, c = new Array(64), u = new Array(64), d = new Array(64), m = new Array(64), w = new Array(65535), S = new Array(65535), p = new Array(64), E = new Array(64), L = [], j = 0, N = 7, z = new Array(64), G = new Array(64), D = new Array(64), ae = new Array(256), be = new Array(2048), he = [
      0,
      1,
      5,
      6,
      14,
      15,
      27,
      28,
      2,
      4,
      7,
      13,
      16,
      26,
      29,
      42,
      3,
      8,
      12,
      17,
      25,
      30,
      41,
      43,
      9,
      11,
      18,
      24,
      31,
      40,
      44,
      53,
      10,
      19,
      23,
      32,
      39,
      45,
      52,
      54,
      20,
      22,
      33,
      38,
      46,
      51,
      55,
      60,
      21,
      34,
      37,
      47,
      50,
      56,
      59,
      61,
      35,
      36,
      48,
      49,
      57,
      58,
      62,
      63
    ], J = [
      0,
      0,
      1,
      5,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ], H = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ], V = [
      0,
      0,
      2,
      1,
      3,
      3,
      2,
      4,
      3,
      5,
      5,
      4,
      4,
      0,
      0,
      1,
      125
    ], x = [
      1,
      2,
      3,
      0,
      4,
      17,
      5,
      18,
      33,
      49,
      65,
      6,
      19,
      81,
      97,
      7,
      34,
      113,
      20,
      50,
      129,
      145,
      161,
      8,
      35,
      66,
      177,
      193,
      21,
      82,
      209,
      240,
      36,
      51,
      98,
      114,
      130,
      9,
      10,
      22,
      23,
      24,
      25,
      26,
      37,
      38,
      39,
      40,
      41,
      42,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ], I = [
      0,
      0,
      3,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
    ], B = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ], U = [
      0,
      0,
      2,
      1,
      2,
      4,
      4,
      3,
      4,
      7,
      5,
      4,
      4,
      0,
      1,
      2,
      119
    ], se = [
      0,
      1,
      2,
      3,
      17,
      4,
      5,
      33,
      49,
      6,
      18,
      65,
      81,
      7,
      97,
      113,
      19,
      34,
      50,
      129,
      8,
      20,
      66,
      145,
      161,
      177,
      193,
      9,
      35,
      51,
      82,
      240,
      21,
      98,
      114,
      209,
      10,
      22,
      36,
      52,
      225,
      37,
      241,
      23,
      24,
      25,
      26,
      38,
      39,
      40,
      41,
      42,
      53,
      54,
      55,
      56,
      57,
      58,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ];
    function le(A, T) {
      for (var q = 0, $ = 0, Y = new Array(), Q = 1; Q <= 16; Q++) {
        for (var ce = 1; ce <= A[Q]; ce++) Y[T[$]] = [], Y[T[$]][0] = q, Y[T[$]][1] = Q, $++, q++;
        q *= 2;
      }
      return Y;
    }
    function ge(A) {
      for (var T = A[0], q = A[1] - 1; q >= 0; ) T & 1 << q && (j |= 1 << N), q--, --N < 0 && (j == 255 ? (ne(255), ne(0)) : ne(j), N = 7, j = 0);
    }
    function ne(A) {
      L.push(A);
    }
    function te(A) {
      ne(A >> 8 & 255), ne(255 & A);
    }
    function Ae(A, T, q, $, Y) {
      for (var Q, ce = Y[0], ue = Y[240], ve = function(Ne, Ve) {
        var Ie, He, Ue, yt, ft, et, dt, ht, Oe, rt, qe = 0;
        for (Oe = 0; Oe < 8; ++Oe) {
          Ie = Ne[qe], He = Ne[qe + 1], Ue = Ne[qe + 2], yt = Ne[qe + 3], ft = Ne[qe + 4], et = Ne[qe + 5], dt = Ne[qe + 6];
          var Ut = Ie + (ht = Ne[qe + 7]), gt = Ie - ht, ct = He + dt, lt = He - dt, Ft = Ue + et, ze = Ue - et, Pt = yt + ft, Ye = yt - ft, tt = Ut + Pt, Mt = Ut - Pt, ut = ct + Ft, Ke = ct - Ft;
          Ne[qe] = tt + ut, Ne[qe + 4] = tt - ut;
          var xt = 0.707106781 * (Ke + Mt);
          Ne[qe + 2] = Mt + xt, Ne[qe + 6] = Mt - xt;
          var ci = 0.382683433 * ((tt = Ye + ze) - (Ke = lt + gt)), dn = 0.5411961 * tt + ci, wr = 1.306562965 * Ke + ci, ar = 0.707106781 * (ut = ze + lt), $e = gt + ar, yr = gt - ar;
          Ne[qe + 5] = yr + dn, Ne[qe + 3] = yr - dn, Ne[qe + 1] = $e + wr, Ne[qe + 7] = $e - wr, qe += 8;
        }
        for (qe = 0, Oe = 0; Oe < 8; ++Oe) {
          Ie = Ne[qe], He = Ne[qe + 8], Ue = Ne[qe + 16], yt = Ne[qe + 24], ft = Ne[qe + 32], et = Ne[qe + 40], dt = Ne[qe + 48];
          var xr = Ie + (ht = Ne[qe + 56]), Tn = Ie - ht, Dn = He + dt, Tt = He - dt, an = Ue + et, sn = Ue - et, li = yt + ft, qr = yt - ft, $n = xr + li, or = xr - li, Yn = Dn + an, Xn = Dn - an;
          Ne[qe] = $n + Yn, Ne[qe + 32] = $n - Yn;
          var Bn = 0.707106781 * (Xn + or);
          Ne[qe + 16] = or + Bn, Ne[qe + 48] = or - Bn;
          var ui = 0.382683433 * (($n = qr + sn) - (Xn = Tt + Tn)), sr = 0.5411961 * $n + ui, fi = 1.306562965 * Xn + ui, Ri = 0.707106781 * (Yn = sn + Tt), Oi = Tn + Ri, Ti = Tn - Ri;
          Ne[qe + 40] = Ti + sr, Ne[qe + 24] = Ti - sr, Ne[qe + 8] = Oi + fi, Ne[qe + 56] = Oi - fi, qe++;
        }
        for (Oe = 0; Oe < 64; ++Oe) rt = Ne[Oe] * Ve[Oe], p[Oe] = rt > 0 ? rt + 0.5 | 0 : rt - 0.5 | 0;
        return p;
      }(A, T), Se = 0; Se < 64; ++Se) E[he[Se]] = ve[Se];
      var Ce = E[0] - q;
      q = E[0], Ce == 0 ? ge($[0]) : (ge($[S[Q = 32767 + Ce]]), ge(w[Q]));
      for (var Pe = 63; Pe > 0 && E[Pe] == 0; ) Pe--;
      if (Pe == 0) return ge(ce), q;
      for (var We, F = 1; F <= Pe; ) {
        for (var ke = F; E[F] == 0 && F <= Pe; ) ++F;
        var st = F - ke;
        if (st >= 16) {
          We = st >> 4;
          for (var Ge = 1; Ge <= We; ++Ge) ge(ue);
          st &= 15;
        }
        Q = 32767 + E[F], ge(Y[(st << 4) + S[Q]]), ge(w[Q]), F++;
      }
      return Pe != 63 && ge(ce), q;
    }
    function we(A) {
      A = Math.min(Math.max(A, 1), 100), a != A && (function(T) {
        for (var q = [
          16,
          11,
          10,
          16,
          24,
          40,
          51,
          61,
          12,
          12,
          14,
          19,
          26,
          58,
          60,
          55,
          14,
          13,
          16,
          24,
          40,
          57,
          69,
          56,
          14,
          17,
          22,
          29,
          51,
          87,
          80,
          62,
          18,
          22,
          37,
          56,
          68,
          109,
          103,
          77,
          24,
          35,
          55,
          64,
          81,
          104,
          113,
          92,
          49,
          64,
          78,
          87,
          103,
          121,
          120,
          101,
          72,
          92,
          95,
          98,
          112,
          100,
          103,
          99
        ], $ = 0; $ < 64; $++) {
          var Y = f((q[$] * T + 50) / 100);
          Y = Math.min(Math.max(Y, 1), 255), c[he[$]] = Y;
        }
        for (var Q = [
          17,
          18,
          24,
          47,
          99,
          99,
          99,
          99,
          18,
          21,
          26,
          66,
          99,
          99,
          99,
          99,
          24,
          26,
          56,
          99,
          99,
          99,
          99,
          99,
          47,
          66,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99
        ], ce = 0; ce < 64; ce++) {
          var ue = f((Q[ce] * T + 50) / 100);
          ue = Math.min(Math.max(ue, 1), 255), u[he[ce]] = ue;
        }
        for (var ve = [
          1,
          1.387039845,
          1.306562965,
          1.175875602,
          1,
          0.785694958,
          0.5411961,
          0.275899379
        ], Se = 0, Ce = 0; Ce < 8; Ce++) for (var Pe = 0; Pe < 8; Pe++) d[Se] = 1 / (c[he[Se]] * ve[Ce] * ve[Pe] * 8), m[Se] = 1 / (u[he[Se]] * ve[Ce] * ve[Pe] * 8), Se++;
      }(A < 50 ? Math.floor(5e3 / A) : Math.floor(200 - 2 * A)), a = A);
    }
    this.encode = function(A, T) {
      T && we(T), L = new Array(), j = 0, N = 7, te(65496), te(65504), te(16), ne(74), ne(70), ne(73), ne(70), ne(0), ne(1), ne(1), ne(0), te(1), te(1), ne(0), ne(0), function() {
        te(65499), te(132), ne(0);
        for (var He = 0; He < 64; He++) ne(c[He]);
        ne(1);
        for (var Ue = 0; Ue < 64; Ue++) ne(u[Ue]);
      }(), function(He, Ue) {
        te(65472), te(17), ne(8), te(Ue), te(He), ne(3), ne(1), ne(17), ne(0), ne(2), ne(17), ne(1), ne(3), ne(17), ne(1);
      }(A.width, A.height), function() {
        te(65476), te(418), ne(0);
        for (var He = 0; He < 16; He++) ne(J[He + 1]);
        for (var Ue = 0; Ue <= 11; Ue++) ne(H[Ue]);
        ne(16);
        for (var yt = 0; yt < 16; yt++) ne(V[yt + 1]);
        for (var ft = 0; ft <= 161; ft++) ne(x[ft]);
        ne(1);
        for (var et = 0; et < 16; et++) ne(I[et + 1]);
        for (var dt = 0; dt <= 11; dt++) ne(B[dt]);
        ne(17);
        for (var ht = 0; ht < 16; ht++) ne(U[ht + 1]);
        for (var Oe = 0; Oe <= 161; Oe++) ne(se[Oe]);
      }(), te(65498), te(12), ne(3), ne(1), ne(0), ne(2), ne(17), ne(3), ne(17), ne(0), ne(63), ne(0);
      var q = 0, $ = 0, Y = 0;
      j = 0, N = 7, this.encode.displayName = "_encode_";
      for (var Q, ce, ue, ve, Se, Ce, Pe, We, F, ke = A.data, st = A.width, Ge = A.height, Ne = 4 * st, Ve = 0; Ve < Ge; ) {
        for (Q = 0; Q < Ne; ) {
          for (Se = Ne * Ve + Q, Pe = -1, We = 0, F = 0; F < 64; F++) Ce = Se + (We = F >> 3) * Ne + (Pe = 4 * (7 & F)), Ve + We >= Ge && (Ce -= Ne * (Ve + 1 + We - Ge)), Q + Pe >= Ne && (Ce -= Q + Pe - Ne + 4), ce = ke[Ce++], ue = ke[Ce++], ve = ke[Ce++], z[F] = (be[ce] + be[ue + 256 | 0] + be[ve + 512 | 0] >> 16) - 128, G[F] = (be[ce + 768 | 0] + be[ue + 1024 | 0] + be[ve + 1280 | 0] >> 16) - 128, D[F] = (be[ce + 1280 | 0] + be[ue + 1536 | 0] + be[ve + 1792 | 0] >> 16) - 128;
          q = Ae(z, d, q, e, r), $ = Ae(G, m, $, t, o), Y = Ae(D, m, Y, t, o), Q += 32;
        }
        Ve += 8;
      }
      if (N >= 0) {
        var Ie = [];
        Ie[1] = N + 1, Ie[0] = (1 << N + 1) - 1, ge(Ie);
      }
      return te(65497), new Uint8Array(L);
    }, n = n || 50, function() {
      for (var A = String.fromCharCode, T = 0; T < 256; T++) ae[T] = A(T);
    }(), e = le(J, H), t = le(I, B), r = le(V, x), o = le(U, se), function() {
      for (var A = 1, T = 2, q = 1; q <= 15; q++) {
        for (var $ = A; $ < T; $++) S[32767 + $] = q, w[32767 + $] = [], w[32767 + $][1] = q, w[32767 + $][0] = $;
        for (var Y = -(T - 1); Y <= -A; Y++) S[32767 + Y] = q, w[32767 + Y] = [], w[32767 + Y][1] = q, w[32767 + Y][0] = T - 1 + Y;
        A <<= 1, T <<= 1;
      }
    }(), function() {
      for (var A = 0; A < 256; A++) be[A] = 19595 * A, be[A + 256 | 0] = 38470 * A, be[A + 512 | 0] = 7471 * A + 32768, be[A + 768 | 0] = -11059 * A, be[A + 1024 | 0] = -21709 * A, be[A + 1280 | 0] = 32768 * A + 8421375, be[A + 1536 | 0] = -27439 * A, be[A + 1792 | 0] = -5329 * A;
    }(), we(n);
  }
  function nr(n, e) {
    if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!e, this.bottom_up = true, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, [
      "BM",
      "BA",
      "CI",
      "CP",
      "IC",
      "PT"
    ].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
    this.parseHeader(), this.parseBGR();
  }
  function Yu(n) {
    function e(H) {
      if (!H) throw Error("assert :P");
    }
    function t(H, V, x) {
      for (var I = 0; 4 > I; I++) if (H[V + I] != x.charCodeAt(I)) return true;
      return false;
    }
    function r(H, V, x, I, B) {
      for (var U = 0; U < B; U++) H[V + U] = x[I + U];
    }
    function o(H, V, x, I) {
      for (var B = 0; B < I; B++) H[V + B] = x;
    }
    function a(H) {
      return new Int32Array(H);
    }
    function f(H, V) {
      for (var x = [], I = 0; I < H; I++) x.push(new V());
      return x;
    }
    function c(H, V) {
      var x = [];
      return function I(B, U, se) {
        for (var le = se[U], ge = 0; ge < le && (B.push(se.length > U + 1 ? [] : new V()), !(se.length < U + 1)); ge++) I(B[ge], U + 1, se);
      }(x, 0, H), x;
    }
    var u = function() {
      var H = this;
      function V(i, s) {
        for (var h = 1 << s - 1 >>> 0; i & h; ) h >>>= 1;
        return h ? (i & h - 1) + h : i;
      }
      function x(i, s, h, g, b) {
        e(!(g % h));
        do
          i[s + (g -= h)] = b;
        while (0 < g);
      }
      function I(i, s, h, g, b) {
        if (e(2328 >= b), 512 >= b) var y = a(512);
        else if ((y = a(b)) == null) return 0;
        return function(_, k, C, M, K, ie) {
          var R, X, ee = k, fe = 1 << C, re = a(16), de = a(16);
          for (e(K != 0), e(M != null), e(_ != null), e(0 < C), X = 0; X < K; ++X) {
            if (15 < M[X]) return 0;
            ++re[M[X]];
          }
          if (re[0] == K) return 0;
          for (de[1] = 0, R = 1; 15 > R; ++R) {
            if (re[R] > 1 << R) return 0;
            de[R + 1] = de[R] + re[R];
          }
          for (X = 0; X < K; ++X) R = M[X], 0 < M[X] && (ie[de[R]++] = X);
          if (de[15] == 1) return (M = new B()).g = 0, M.value = ie[0], x(_, ee, 1, fe, M), fe;
          var me, _e = -1, xe = fe - 1, De = 0, Ee = 1, at = 1, Me = 1 << C;
          for (X = 0, R = 1, K = 2; R <= C; ++R, K <<= 1) {
            if (Ee += at <<= 1, 0 > (at -= re[R])) return 0;
            for (; 0 < re[R]; --re[R]) (M = new B()).g = R, M.value = ie[X++], x(_, ee + De, K, Me, M), De = V(De, R);
          }
          for (R = C + 1, K = 2; 15 >= R; ++R, K <<= 1) {
            if (Ee += at <<= 1, 0 > (at -= re[R])) return 0;
            for (; 0 < re[R]; --re[R]) {
              if (M = new B(), (De & xe) != _e) {
                for (ee += Me, me = 1 << (_e = R) - C; 15 > _e && !(0 >= (me -= re[_e])); ) ++_e, me <<= 1;
                fe += Me = 1 << (me = _e - C), _[k + (_e = De & xe)].g = me + C, _[k + _e].value = ee - k - _e;
              }
              M.g = R - C, M.value = ie[X++], x(_, ee + (De >> C), K, Me, M), De = V(De, R);
            }
          }
          return Ee != 2 * de[15] - 1 ? 0 : fe;
        }(i, s, h, g, b, y);
      }
      function B() {
        this.value = this.g = 0;
      }
      function U() {
        this.value = this.g = 0;
      }
      function se() {
        this.G = f(5, B), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = f(Ni, U);
      }
      function le(i, s, h, g) {
        e(i != null), e(s != null), e(2147483648 > g), i.Ca = 254, i.I = 0, i.b = -8, i.Ka = 0, i.oa = s, i.pa = h, i.Jd = s, i.Yc = h + g, i.Zc = 4 <= g ? h + g - 4 + 1 : h, ce(i);
      }
      function ge(i, s) {
        for (var h = 0; 0 < s--; ) h |= ve(i, 128) << s;
        return h;
      }
      function ne(i, s) {
        var h = ge(i, s);
        return ue(i) ? -h : h;
      }
      function te(i, s, h, g) {
        var b, y = 0;
        for (e(i != null), e(s != null), e(4294967288 > g), i.Sb = g, i.Ra = 0, i.u = 0, i.h = 0, 4 < g && (g = 4), b = 0; b < g; ++b) y += s[h + b] << 8 * b;
        i.Ra = y, i.bb = g, i.oa = s, i.pa = h;
      }
      function Ae(i) {
        for (; 8 <= i.u && i.bb < i.Sb; ) i.Ra >>>= 8, i.Ra += i.oa[i.pa + i.bb] << Wr - 8 >>> 0, ++i.bb, i.u -= 8;
        $(i) && (i.h = 1, i.u = 0);
      }
      function we(i, s) {
        if (e(0 <= s), !i.h && s <= Cn) {
          var h = q(i) & kn[s];
          return i.u += s, Ae(i), h;
        }
        return i.h = 1, i.u = 0;
      }
      function A() {
        this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
      }
      function T() {
        this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
      }
      function q(i) {
        return i.Ra >>> (i.u & Wr - 1) >>> 0;
      }
      function $(i) {
        return e(i.bb <= i.Sb), i.h || i.bb == i.Sb && i.u > Wr;
      }
      function Y(i, s) {
        i.u = s, i.h = $(i);
      }
      function Q(i) {
        i.u >= jr && (e(i.u >= jr), Ae(i));
      }
      function ce(i) {
        e(i != null && i.oa != null), i.pa < i.Zc ? (i.I = (i.oa[i.pa++] | i.I << 8) >>> 0, i.b += 8) : (e(i != null && i.oa != null), i.pa < i.Yc ? (i.b += 8, i.I = i.oa[i.pa++] | i.I << 8) : i.Ka ? i.b = 0 : (i.I <<= 8, i.b += 8, i.Ka = 1));
      }
      function ue(i) {
        return ge(i, 1);
      }
      function ve(i, s) {
        var h = i.Ca;
        0 > i.b && ce(i);
        var g = i.b, b = h * s >>> 8, y = (i.I >>> g > b) + 0;
        for (y ? (h -= b, i.I -= b + 1 << g >>> 0) : h = b + 1, g = h, b = 0; 256 <= g; ) b += 8, g >>= 8;
        return g = 7 ^ b + Gr[g], i.b -= g, i.Ca = (h << g) - 1, y;
      }
      function Se(i, s, h) {
        i[s + 0] = h >> 24 & 255, i[s + 1] = h >> 16 & 255, i[s + 2] = h >> 8 & 255, i[s + 3] = 255 & h;
      }
      function Ce(i, s) {
        return i[s + 0] | i[s + 1] << 8;
      }
      function Pe(i, s) {
        return Ce(i, s) | i[s + 2] << 16;
      }
      function We(i, s) {
        return Ce(i, s) | Ce(i, s + 2) << 16;
      }
      function F(i, s) {
        var h = 1 << s;
        return e(i != null), e(0 < s), i.X = a(h), i.X == null ? 0 : (i.Mb = 32 - s, i.Xa = s, 1);
      }
      function ke(i, s) {
        e(i != null), e(s != null), e(i.Xa == s.Xa), r(s.X, 0, i.X, 0, 1 << s.Xa);
      }
      function st() {
        this.X = [], this.Xa = this.Mb = 0;
      }
      function Ge(i, s, h, g) {
        e(h != null), e(g != null);
        var b = h[0], y = g[0];
        return b == 0 && (b = (i * y + s / 2) / s), y == 0 && (y = (s * b + i / 2) / i), 0 >= b || 0 >= y ? 0 : (h[0] = b, g[0] = y, 1);
      }
      function Ne(i, s) {
        return i + (1 << s) - 1 >>> s;
      }
      function Ve(i, s) {
        return ((4278255360 & i) + (4278255360 & s) >>> 0 & 4278255360) + ((16711935 & i) + (16711935 & s) >>> 0 & 16711935) >>> 0;
      }
      function Ie(i, s) {
        H[s] = function(h, g, b, y, _, k, C) {
          var M;
          for (M = 0; M < _; ++M) {
            var K = H[i](k[C + M - 1], b, y + M);
            k[C + M] = Ve(h[g + M], K);
          }
        };
      }
      function He() {
        this.ud = this.hd = this.jd = 0;
      }
      function Ue(i, s) {
        return ((4278124286 & (i ^ s)) >>> 1) + (i & s) >>> 0;
      }
      function yt(i) {
        return 0 <= i && 256 > i ? i : 0 > i ? 0 : 255 < i ? 255 : void 0;
      }
      function ft(i, s) {
        return yt(i + (i - s + 0.5 >> 1));
      }
      function et(i, s, h) {
        return Math.abs(s - h) - Math.abs(i - h);
      }
      function dt(i, s, h, g, b, y, _) {
        for (g = y[_ - 1], h = 0; h < b; ++h) y[_ + h] = g = Ve(i[s + h], g);
      }
      function ht(i, s, h, g, b) {
        var y;
        for (y = 0; y < h; ++y) {
          var _ = i[s + y], k = _ >> 8 & 255, C = 16711935 & (C = (C = 16711935 & _) + ((k << 16) + k));
          g[b + y] = (4278255360 & _) + C >>> 0;
        }
      }
      function Oe(i, s) {
        s.jd = 255 & i, s.hd = i >> 8 & 255, s.ud = i >> 16 & 255;
      }
      function rt(i, s, h, g, b, y) {
        var _;
        for (_ = 0; _ < g; ++_) {
          var k = s[h + _], C = k >>> 8, M = k, K = 255 & (K = (K = k >>> 16) + ((i.jd << 24 >> 24) * (C << 24 >> 24) >>> 5));
          M = 255 & (M = (M += (i.hd << 24 >> 24) * (C << 24 >> 24) >>> 5) + ((i.ud << 24 >> 24) * (K << 24 >> 24) >>> 5)), b[y + _] = (4278255360 & k) + (K << 16) + M;
        }
      }
      function qe(i, s, h, g, b) {
        H[s] = function(y, _, k, C, M, K, ie, R, X) {
          for (C = ie; C < R; ++C) for (ie = 0; ie < X; ++ie) M[K++] = b(k[g(y[_++])]);
        }, H[i] = function(y, _, k, C, M, K, ie) {
          var R = 8 >> y.b, X = y.Ea, ee = y.K[0], fe = y.w;
          if (8 > R) for (y = (1 << y.b) - 1, fe = (1 << R) - 1; _ < k; ++_) {
            var re, de = 0;
            for (re = 0; re < X; ++re) re & y || (de = g(C[M++])), K[ie++] = b(ee[de & fe]), de >>= R;
          }
          else H["VP8LMapColor" + h](C, M, ee, fe, K, ie, _, k, X);
        };
      }
      function Ut(i, s, h, g, b) {
        for (h = s + h; s < h; ) {
          var y = i[s++];
          g[b++] = y >> 16 & 255, g[b++] = y >> 8 & 255, g[b++] = 255 & y;
        }
      }
      function gt(i, s, h, g, b) {
        for (h = s + h; s < h; ) {
          var y = i[s++];
          g[b++] = y >> 16 & 255, g[b++] = y >> 8 & 255, g[b++] = 255 & y, g[b++] = y >> 24 & 255;
        }
      }
      function ct(i, s, h, g, b) {
        for (h = s + h; s < h; ) {
          var y = (_ = i[s++]) >> 16 & 240 | _ >> 12 & 15, _ = 240 & _ | _ >> 28 & 15;
          g[b++] = y, g[b++] = _;
        }
      }
      function lt(i, s, h, g, b) {
        for (h = s + h; s < h; ) {
          var y = (_ = i[s++]) >> 16 & 248 | _ >> 13 & 7, _ = _ >> 5 & 224 | _ >> 3 & 31;
          g[b++] = y, g[b++] = _;
        }
      }
      function Ft(i, s, h, g, b) {
        for (h = s + h; s < h; ) {
          var y = i[s++];
          g[b++] = 255 & y, g[b++] = y >> 8 & 255, g[b++] = y >> 16 & 255;
        }
      }
      function ze(i, s, h, g, b, y) {
        if (y == 0) for (h = s + h; s < h; ) Se(g, ((y = i[s++])[0] >> 24 | y[1] >> 8 & 65280 | y[2] << 8 & 16711680 | y[3] << 24) >>> 0), b += 32;
        else r(g, b, i, s, h);
      }
      function Pt(i, s) {
        H[s][0] = H[i + "0"], H[s][1] = H[i + "1"], H[s][2] = H[i + "2"], H[s][3] = H[i + "3"], H[s][4] = H[i + "4"], H[s][5] = H[i + "5"], H[s][6] = H[i + "6"], H[s][7] = H[i + "7"], H[s][8] = H[i + "8"], H[s][9] = H[i + "9"], H[s][10] = H[i + "10"], H[s][11] = H[i + "11"], H[s][12] = H[i + "12"], H[s][13] = H[i + "13"], H[s][14] = H[i + "0"], H[s][15] = H[i + "0"];
      }
      function Ye(i) {
        return i == js || i == Fs || i == yo || i == Ms;
      }
      function tt() {
        this.eb = [], this.size = this.A = this.fb = 0;
      }
      function Mt() {
        this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
      }
      function ut() {
        this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new tt(), this.f.kb = new Mt(), this.sd = null;
      }
      function Ke() {
        this.width = [
          0
        ], this.height = [
          0
        ], this.Pd = [
          0
        ], this.Qd = [
          0
        ], this.format = [
          0
        ];
      }
      function xt() {
        this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
      }
      function ci(i) {
        return alert("todo:WebPSamplerProcessPlane"), i.T;
      }
      function dn(i, s) {
        var h = i.T, g = s.ba.f.RGBA, b = g.eb, y = g.fb + i.ka * g.A, _ = Gn[s.ba.S], k = i.y, C = i.O, M = i.f, K = i.N, ie = i.ea, R = i.W, X = s.cc, ee = s.dc, fe = s.Mc, re = s.Nc, de = i.ka, me = i.ka + i.T, _e = i.U, xe = _e + 1 >> 1;
        for (de == 0 ? _(k, C, null, null, M, K, ie, R, M, K, ie, R, b, y, null, null, _e) : (_(s.ec, s.fc, k, C, X, ee, fe, re, M, K, ie, R, b, y - g.A, b, y, _e), ++h); de + 2 < me; de += 2) X = M, ee = K, fe = ie, re = R, K += i.Rc, R += i.Rc, y += 2 * g.A, _(k, (C += 2 * i.fa) - i.fa, k, C, X, ee, fe, re, M, K, ie, R, b, y - g.A, b, y, _e);
        return C += i.fa, i.j + me < i.o ? (r(s.ec, s.fc, k, C, _e), r(s.cc, s.dc, M, K, xe), r(s.Mc, s.Nc, ie, R, xe), h--) : 1 & me || _(k, C, null, null, M, K, ie, R, M, K, ie, R, b, y + g.A, null, null, _e), h;
      }
      function wr(i, s, h) {
        var g = i.F, b = [
          i.J
        ];
        if (g != null) {
          var y = i.U, _ = s.ba.S, k = _ == wo || _ == yo;
          s = s.ba.f.RGBA;
          var C = [
            0
          ], M = i.ka;
          C[0] = i.T, i.Kb && (M == 0 ? --C[0] : (--M, b[0] -= i.width), i.j + i.ka + i.T == i.o && (C[0] = i.o - i.j - M));
          var K = s.eb;
          M = s.fb + M * s.A, i = el(g, b[0], i.width, y, C, K, M + (k ? 0 : 3), s.A), e(h == C), i && Ye(_) && ja(K, M, k, y, C, s.A);
        }
        return 0;
      }
      function ar(i) {
        var s = i.ma, h = s.ba.S, g = 11 > h, b = h == vo || h == bo || h == wo || h == Is || h == 12 || Ye(h);
        if (s.memory = null, s.Ib = null, s.Jb = null, s.Nd = null, !Aa(s.Oa, i, b ? 11 : 12)) return 0;
        if (b && Ye(h) && xa(), i.da) alert("todo:use_scaling");
        else {
          if (g) {
            if (s.Ib = ci, i.Kb) {
              if (h = i.U + 1 >> 1, s.memory = a(i.U + 2 * h), s.memory == null) return 0;
              s.ec = s.memory, s.fc = 0, s.cc = s.ec, s.dc = s.fc + i.U, s.Mc = s.cc, s.Nc = s.dc + h, s.Ib = dn, xa();
            }
          } else alert("todo:EmitYUV");
          b && (s.Jb = wr, g && Zn());
        }
        if (g && !gl) {
          for (i = 0; 256 > i; ++i) wd[i] = 89858 * (i - 128) + No >> xo, Nd[i] = -22014 * (i - 128) + No, xd[i] = -45773 * (i - 128), yd[i] = 113618 * (i - 128) + No >> xo;
          for (i = Ma; i < Ts; ++i) s = 76283 * (i - 16) + No >> xo, _d[i - Ma] = cr(s, 255), Ad[i - Ma] = cr(s + 8 >> 4, 15);
          gl = 1;
        }
        return 1;
      }
      function $e(i) {
        var s = i.ma, h = i.U, g = i.T;
        return e(!(1 & i.ka)), 0 >= h || 0 >= g ? 0 : (h = s.Ib(i, s), s.Jb != null && s.Jb(i, s, h), s.Dc += h, 1);
      }
      function yr(i) {
        i.ma.memory = null;
      }
      function xr(i, s, h, g) {
        return we(i, 8) != 47 ? 0 : (s[0] = we(i, 14) + 1, h[0] = we(i, 14) + 1, g[0] = we(i, 1), we(i, 3) != 0 ? 0 : !i.h);
      }
      function Tn(i, s) {
        if (4 > i) return i + 1;
        var h = i - 2 >> 1;
        return (2 + (1 & i) << h) + we(s, h) + 1;
      }
      function Dn(i, s) {
        return 120 < s ? s - 120 : 1 <= (h = ((h = ad[s - 1]) >> 4) * i + (8 - (15 & h))) ? h : 1;
        var h;
      }
      function Tt(i, s, h) {
        var g = q(h), b = i[s += 255 & g].g - 8;
        return 0 < b && (Y(h, h.u + 8), g = q(h), s += i[s].value, s += g & (1 << b) - 1), Y(h, h.u + i[s].g), i[s].value;
      }
      function an(i, s, h) {
        return h.g += i.g, h.value += i.value << s >>> 0, e(8 >= h.g), i.g;
      }
      function sn(i, s, h) {
        var g = i.xc;
        return e((s = g == 0 ? 0 : i.vc[i.md * (h >> g) + (s >> g)]) < i.Wb), i.Ya[s];
      }
      function li(i, s, h, g) {
        var b = i.ab, y = i.c * s, _ = i.C;
        s = _ + s;
        var k = h, C = g;
        for (g = i.Ta, h = i.Ua; 0 < b--; ) {
          var M = i.gc[b], K = _, ie = s, R = k, X = C, ee = (C = g, k = h, M.Ea);
          switch (e(K < ie), e(ie <= M.nc), M.hc) {
            case 2:
              zt(R, X, (ie - K) * ee, C, k);
              break;
            case 0:
              var fe = K, re = ie, de = C, me = k, _e = (Me = M).Ea;
              fe == 0 && (La(R, X, null, null, 1, de, me), dt(R, X + 1, 0, 0, _e - 1, de, me + 1), X += _e, me += _e, ++fe);
              for (var xe = 1 << Me.b, De = xe - 1, Ee = Ne(_e, Me.b), at = Me.K, Me = Me.w + (fe >> Me.b) * Ee; fe < re; ) {
                var pt = at, tn = Me, ot = 1;
                for (Gi(R, X, de, me - _e, 1, de, me); ot < _e; ) {
                  var Re = (ot & ~De) + xe;
                  Re > _e && (Re = _e), (0, Ca[pt[tn++] >> 8 & 15])(R, X + +ot, de, me + ot - _e, Re - ot, de, me + ot), ot = Re;
                }
                X += _e, me += _e, ++fe & De || (Me += Ee);
              }
              ie != M.nc && r(C, k - ee, C, k + (ie - K - 1) * ee, ee);
              break;
            case 1:
              for (ee = R, re = X, _e = (R = M.Ea) - (me = R & ~(de = (X = 1 << M.b) - 1)), fe = Ne(R, M.b), xe = M.K, M = M.w + (K >> M.b) * fe; K < ie; ) {
                for (De = xe, Ee = M, at = new He(), Me = re + me, pt = re + R; re < Me; ) Oe(De[Ee++], at), Pa(at, ee, re, X, C, k), re += X, k += X;
                re < pt && (Oe(De[Ee++], at), Pa(at, ee, re, _e, C, k), re += _e, k += _e), ++K & de || (M += fe);
              }
              break;
            case 3:
              if (R == C && X == k && 0 < M.b) {
                for (re = C, R = ee = k + (ie - K) * ee - (me = (ie - K) * Ne(M.Ea, M.b)), X = C, de = k, fe = [], me = (_e = me) - 1; 0 <= me; --me) fe[me] = X[de + me];
                for (me = _e - 1; 0 <= me; --me) re[R + me] = fe[me];
                ho(M, K, ie, C, ee, C, k);
              } else ho(M, K, ie, R, X, C, k);
          }
          k = g, C = h;
        }
        C != h && r(g, h, k, C, y);
      }
      function qr(i, s) {
        var h = i.V, g = i.Ba + i.c * i.C, b = s - i.C;
        if (e(s <= i.l.o), e(16 >= b), 0 < b) {
          var y = i.l, _ = i.Ta, k = i.Ua, C = y.width;
          if (li(i, b, h, g), b = k = [
            k
          ], e((h = i.C) < (g = s)), e(y.v < y.va), g > y.o && (g = y.o), h < y.j) {
            var M = y.j - h;
            h = y.j, b[0] += M * C;
          }
          if (h >= g ? h = 0 : (b[0] += 4 * y.v, y.ka = h - y.j, y.U = y.va - y.v, y.T = g - h, h = 1), h) {
            if (k = k[0], 11 > (h = i.ca).S) {
              var K = h.f.RGBA, ie = (g = h.S, b = y.U, y = y.T, M = K.eb, K.A), R = y;
              for (K = K.fb + i.Ma * K.A; 0 < R--; ) {
                var X = _, ee = k, fe = b, re = M, de = K;
                switch (g) {
                  case go:
                    Ea(X, ee, fe, re, de);
                    break;
                  case vo:
                    Vr(X, ee, fe, re, de);
                    break;
                  case js:
                    Vr(X, ee, fe, re, de), ja(re, de, 0, fe, 1, 0);
                    break;
                  case sl:
                    _i(X, ee, fe, re, de);
                    break;
                  case bo:
                    ze(X, ee, fe, re, de, 1);
                    break;
                  case Fs:
                    ze(X, ee, fe, re, de, 1), ja(re, de, 0, fe, 1, 0);
                    break;
                  case wo:
                    ze(X, ee, fe, re, de, 0);
                    break;
                  case yo:
                    ze(X, ee, fe, re, de, 0), ja(re, de, 1, fe, 1, 0);
                    break;
                  case Is:
                    Kr(X, ee, fe, re, de);
                    break;
                  case Ms:
                    Kr(X, ee, fe, re, de), Qc(re, de, fe, 1, 0);
                    break;
                  case cl:
                    $r(X, ee, fe, re, de);
                    break;
                  default:
                    e(0);
                }
                k += C, K += ie;
              }
              i.Ma += y;
            } else alert("todo:EmitRescaledRowsYUVA");
            e(i.Ma <= h.height);
          }
        }
        i.C = s, e(i.C <= i.i);
      }
      function $n(i) {
        var s;
        if (0 < i.ua) return 0;
        for (s = 0; s < i.Wb; ++s) {
          var h = i.Ya[s].G, g = i.Ya[s].H;
          if (0 < h[1][g[1] + 0].g || 0 < h[2][g[2] + 0].g || 0 < h[3][g[3] + 0].g) return 0;
        }
        return 1;
      }
      function or(i, s, h, g, b, y) {
        if (i.Z != 0) {
          var _ = i.qd, k = i.rd;
          for (e(Jr[i.Z] != null); s < h; ++s) Jr[i.Z](_, k, g, b, g, b, y), _ = g, k = b, b += y;
          i.qd = _, i.rd = k;
        }
      }
      function Yn(i, s) {
        var h = i.l.ma, g = h.Z == 0 || h.Z == 1 ? i.l.j : i.C;
        if (g = i.C < g ? g : i.C, e(s <= i.l.o), s > g) {
          var b = i.l.width, y = h.ca, _ = h.tb + b * g, k = i.V, C = i.Ba + i.c * g, M = i.gc;
          e(i.ab == 1), e(M[0].hc == 3), hr(M[0], g, s, k, C, y, _), or(h, g, s, y, _, b);
        }
        i.C = i.Ma = s;
      }
      function Xn(i, s, h, g, b, y, _) {
        var k = i.$ / g, C = i.$ % g, M = i.m, K = i.s, ie = h + i.$, R = ie;
        b = h + g * b;
        var X = h + g * y, ee = 280 + K.ua, fe = i.Pb ? k : 16777216, re = 0 < K.ua ? K.Wa : null, de = K.wc, me = ie < X ? sn(K, C, k) : null;
        e(i.C < y), e(X <= b);
        var _e = false;
        e: for (; ; ) {
          for (; _e || ie < X; ) {
            var xe = 0;
            if (k >= fe) {
              var De = ie - h;
              e((fe = i).Pb), fe.wd = fe.m, fe.xd = De, 0 < fe.s.ua && ke(fe.s.Wa, fe.s.vb), fe = k + sd;
            }
            if (C & de || (me = sn(K, C, k)), e(me != null), me.Qb && (s[ie] = me.qb, _e = true), !_e) if (Q(M), me.jc) {
              xe = M, De = s;
              var Ee = ie, at = me.pd[q(xe) & Ni - 1];
              e(me.jc), 256 > at.g ? (Y(xe, xe.u + at.g), De[Ee] = at.value, xe = 0) : (Y(xe, xe.u + at.g - 256), e(256 <= at.value), xe = at.value), xe == 0 && (_e = true);
            } else xe = Tt(me.G[0], me.H[0], M);
            if (M.h) break;
            if (_e || 256 > xe) {
              if (!_e) if (me.nd) s[ie] = (me.qb | xe << 8) >>> 0;
              else {
                if (Q(M), _e = Tt(me.G[1], me.H[1], M), Q(M), De = Tt(me.G[2], me.H[2], M), Ee = Tt(me.G[3], me.H[3], M), M.h) break;
                s[ie] = (Ee << 24 | _e << 16 | xe << 8 | De) >>> 0;
              }
              if (_e = false, ++ie, ++C >= g && (C = 0, ++k, _ != null && k <= y && !(k % 16) && _(i, k), re != null)) for (; R < ie; ) xe = s[R++], re.X[(506832829 * xe & 4294967295) >>> re.Mb] = xe;
            } else if (280 > xe) {
              if (xe = Tn(xe - 256, M), De = Tt(me.G[4], me.H[4], M), Q(M), De = Dn(g, De = Tn(De, M)), M.h) break;
              if (ie - h < De || b - ie < xe) break e;
              for (Ee = 0; Ee < xe; ++Ee) s[ie + Ee] = s[ie + Ee - De];
              for (ie += xe, C += xe; C >= g; ) C -= g, ++k, _ != null && k <= y && !(k % 16) && _(i, k);
              if (e(ie <= b), C & de && (me = sn(K, C, k)), re != null) for (; R < ie; ) xe = s[R++], re.X[(506832829 * xe & 4294967295) >>> re.Mb] = xe;
            } else {
              if (!(xe < ee)) break e;
              for (_e = xe - 280, e(re != null); R < ie; ) xe = s[R++], re.X[(506832829 * xe & 4294967295) >>> re.Mb] = xe;
              xe = ie, e(!(_e >>> (De = re).Xa)), s[xe] = De.X[_e], _e = true;
            }
            _e || e(M.h == $(M));
          }
          if (i.Pb && M.h && ie < b) e(i.m.h), i.a = 5, i.m = i.wd, i.$ = i.xd, 0 < i.s.ua && ke(i.s.vb, i.s.Wa);
          else {
            if (M.h) break e;
            _ == null ? void 0 : _(i, k > y ? y : k), i.a = 0, i.$ = ie - h;
          }
          return 1;
        }
        return i.a = 3, 0;
      }
      function Bn(i) {
        e(i != null), i.vc = null, i.yc = null, i.Ya = null;
        var s = i.Wa;
        s != null && (s.X = null), i.vb = null, e(i != null);
      }
      function ui() {
        var i = new Je();
        return i == null ? null : (i.a = 0, i.xb = fl, Pt("Predictor", "VP8LPredictors"), Pt("Predictor", "VP8LPredictors_C"), Pt("PredictorAdd", "VP8LPredictorsAdd"), Pt("PredictorAdd", "VP8LPredictorsAdd_C"), zt = ht, Pa = rt, Ea = Ut, Vr = gt, Kr = ct, $r = lt, _i = Ft, H.VP8LMapColor32b = fr, H.VP8LMapColor8b = ka, i);
      }
      function sr(i, s, h, g, b) {
        var y = 1, _ = [
          i
        ], k = [
          s
        ], C = g.m, M = g.s, K = null, ie = 0;
        e: for (; ; ) {
          if (h) for (; y && we(C, 1); ) {
            var R = _, X = k, ee = g, fe = 1, re = ee.m, de = ee.gc[ee.ab], me = we(re, 2);
            if (ee.Oc & 1 << me) y = 0;
            else {
              switch (ee.Oc |= 1 << me, de.hc = me, de.Ea = R[0], de.nc = X[0], de.K = [
                null
              ], ++ee.ab, e(4 >= ee.ab), me) {
                case 0:
                case 1:
                  de.b = we(re, 3) + 2, fe = sr(Ne(de.Ea, de.b), Ne(de.nc, de.b), 0, ee, de.K), de.K = de.K[0];
                  break;
                case 3:
                  var _e, xe = we(re, 8) + 1, De = 16 < xe ? 0 : 4 < xe ? 1 : 2 < xe ? 2 : 3;
                  if (R[0] = Ne(de.Ea, De), de.b = De, _e = fe = sr(xe, 1, 0, ee, de.K)) {
                    var Ee, at = xe, Me = de, pt = 1 << (8 >> Me.b), tn = a(pt);
                    if (tn == null) _e = 0;
                    else {
                      var ot = Me.K[0], Re = Me.w;
                      for (tn[0] = Me.K[0][0], Ee = 1; Ee < 1 * at; ++Ee) tn[Ee] = Ve(ot[Re + Ee], tn[Ee - 1]);
                      for (; Ee < 4 * pt; ++Ee) tn[Ee] = 0;
                      Me.K[0] = null, Me.K[0] = tn, _e = 1;
                    }
                  }
                  fe = _e;
                  break;
                case 2:
                  break;
                default:
                  e(0);
              }
              y = fe;
            }
          }
          if (_ = _[0], k = k[0], y && we(C, 1) && !(y = 1 <= (ie = we(C, 4)) && 11 >= ie)) {
            g.a = 3;
            break e;
          }
          var Le;
          if (Le = y) t: {
            var Wt, nt, mt, jt = g, un = _, yn = k, Dt = ie, pn = h, xn = jt.m, nn = jt.s, bt = [
              null
            ], _t = 1, Bt = 0, At = od[Dt];
            n: for (; ; ) {
              if (pn && we(xn, 1)) {
                var fn = we(xn, 3) + 2, er = Ne(un, fn), Gt = Ne(yn, fn), An = er * Gt;
                if (!sr(er, Gt, 0, jt, bt)) break n;
                for (bt = bt[0], nn.xc = fn, Wt = 0; Wt < An; ++Wt) {
                  var kt = bt[Wt] >> 8 & 65535;
                  bt[Wt] = kt, kt >= _t && (_t = kt + 1);
                }
              }
              if (xn.h) break n;
              for (nt = 0; 5 > nt; ++nt) {
                var rn = ll[nt];
                !nt && 0 < Dt && (rn += 1 << Dt), Bt < rn && (Bt = rn);
              }
              var En = f(_t * At, B), Nn = _t, In = f(Nn, se);
              if (In == null) var jn = null;
              else e(65536 >= Nn), jn = In;
              var Sn = a(Bt);
              if (jn == null || Sn == null || En == null) {
                jt.a = 1;
                break n;
              }
              var Fn = En;
              for (Wt = mt = 0; Wt < _t; ++Wt) {
                var It = jn[Wt], Mn = It.G, tr = It.H, Si = 0, Rr = 1, hn = 0;
                for (nt = 0; 5 > nt; ++nt) {
                  rn = ll[nt], Mn[nt] = Fn, tr[nt] = mt, !nt && 0 < Dt && (rn += 1 << Dt);
                  i: {
                    var Ao, Ds = rn, So = jt, Ra = Sn, kd = Fn, Cd = mt, Bs = 0, Zr = So.m, Pd = we(Zr, 1);
                    if (o(Ra, 0, 0, Ds), Pd) {
                      var Ed = we(Zr, 1) + 1, Id = we(Zr, 1), wl = we(Zr, Id == 0 ? 1 : 8);
                      Ra[wl] = 1, Ed == 2 && (Ra[wl = we(Zr, 8)] = 1);
                      var Lo = 1;
                    } else {
                      var yl = a(19), xl = we(Zr, 4) + 4;
                      if (19 < xl) {
                        So.a = 3;
                        var ko = 0;
                        break i;
                      }
                      for (Ao = 0; Ao < xl; ++Ao) yl[id[Ao]] = we(Zr, 3);
                      var qs = void 0, Oa = void 0, Nl = So, jd = yl, Co = Ds, _l = Ra, Us = 0, Qr = Nl.m, Al = 8, Sl = f(128, B);
                      r: for (; I(Sl, 0, 7, jd, 19); ) {
                        if (we(Qr, 1)) {
                          var Fd = 2 + 2 * we(Qr, 3);
                          if ((qs = 2 + we(Qr, Fd)) > Co) break r;
                        } else qs = Co;
                        for (Oa = 0; Oa < Co && qs--; ) {
                          Q(Qr);
                          var Ll = Sl[0 + (127 & q(Qr))];
                          Y(Qr, Qr.u + Ll.g);
                          var Ki = Ll.value;
                          if (16 > Ki) _l[Oa++] = Ki, Ki != 0 && (Al = Ki);
                          else {
                            var Md = Ki == 16, kl = Ki - 16, Rd = nd[kl], Cl = we(Qr, td[kl]) + Rd;
                            if (Oa + Cl > Co) break r;
                            for (var Od = Md ? Al : 0; 0 < Cl--; ) _l[Oa++] = Od;
                          }
                        }
                        Us = 1;
                        break r;
                      }
                      Us || (Nl.a = 3), Lo = Us;
                    }
                    (Lo = Lo && !Zr.h) && (Bs = I(kd, Cd, 8, Ra, Ds)), Lo && Bs != 0 ? ko = Bs : (So.a = 3, ko = 0);
                  }
                  if (ko == 0) break n;
                  if (Rr && rd[nt] == 1 && (Rr = Fn[mt].g == 0), Si += Fn[mt].g, mt += ko, 3 >= nt) {
                    var Ta, zs = Sn[0];
                    for (Ta = 1; Ta < rn; ++Ta) Sn[Ta] > zs && (zs = Sn[Ta]);
                    hn += zs;
                  }
                }
                if (It.nd = Rr, It.Qb = 0, Rr && (It.qb = (Mn[3][tr[3] + 0].value << 24 | Mn[1][tr[1] + 0].value << 16 | Mn[2][tr[2] + 0].value) >>> 0, Si == 0 && 256 > Mn[0][tr[0] + 0].value && (It.Qb = 1, It.qb += Mn[0][tr[0] + 0].value << 8)), It.jc = !It.Qb && 6 > hn, It.jc) {
                  var Po, Or = It;
                  for (Po = 0; Po < Ni; ++Po) {
                    var ei = Po, ti = Or.pd[ei], Eo = Or.G[0][Or.H[0] + ei];
                    256 <= Eo.value ? (ti.g = Eo.g + 256, ti.value = Eo.value) : (ti.g = 0, ti.value = 0, ei >>= an(Eo, 8, ti), ei >>= an(Or.G[1][Or.H[1] + ei], 16, ti), ei >>= an(Or.G[2][Or.H[2] + ei], 0, ti), an(Or.G[3][Or.H[3] + ei], 24, ti));
                  }
                }
              }
              nn.vc = bt, nn.Wb = _t, nn.Ya = jn, nn.yc = En, Le = 1;
              break t;
            }
            Le = 0;
          }
          if (!(y = Le)) {
            g.a = 3;
            break e;
          }
          if (0 < ie) {
            if (M.ua = 1 << ie, !F(M.Wa, ie)) {
              g.a = 1, y = 0;
              break e;
            }
          } else M.ua = 0;
          var Hs = g, Pl = _, Td = k, Ws = Hs.s, Gs = Ws.xc;
          if (Hs.c = Pl, Hs.i = Td, Ws.md = Ne(Pl, Gs), Ws.wc = Gs == 0 ? -1 : (1 << Gs) - 1, h) {
            g.xb = pd;
            break e;
          }
          if ((K = a(_ * k)) == null) {
            g.a = 1, y = 0;
            break e;
          }
          y = (y = Xn(g, K, 0, _, k, k, null)) && !C.h;
          break e;
        }
        return y ? (b != null ? b[0] = K : (e(K == null), e(h)), g.$ = 0, h || Bn(M)) : Bn(M), y;
      }
      function fi(i, s) {
        var h = i.c * i.i, g = h + s + 16 * s;
        return e(i.c <= s), i.V = a(g), i.V == null ? (i.Ta = null, i.Ua = 0, i.a = 1, 0) : (i.Ta = i.V, i.Ua = i.Ba + h + s, 1);
      }
      function Ri(i, s) {
        var h = i.C, g = s - h, b = i.V, y = i.Ba + i.c * h;
        for (e(s <= i.l.o); 0 < g; ) {
          var _ = 16 < g ? 16 : g, k = i.l.ma, C = i.l.width, M = C * _, K = k.ca, ie = k.tb + C * h, R = i.Ta, X = i.Ua;
          li(i, _, b, y), tl(R, X, K, ie, M), or(k, h, h + _, K, ie, C), g -= _, b += _ * i.c, h += _;
        }
        e(h == s), i.C = i.Ma = s;
      }
      function Oi() {
        this.ub = this.yd = this.td = this.Rb = 0;
      }
      function Ti() {
        this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
      }
      function ps() {
        this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4);
      }
      function ua() {
        this.Yb = function() {
          var i = [];
          return function s(h, g, b) {
            for (var y = b[g], _ = 0; _ < y && (h.push(b.length > g + 1 ? [] : 0), !(b.length < g + 1)); _++) s(h[_], g + 1, b);
          }(i, 0, [
            3,
            11
          ]), i;
        }();
      }
      function $a() {
        this.jb = a(3), this.Wc = c([
          4,
          8
        ], ua), this.Xc = c([
          4,
          17
        ], ua);
      }
      function Ya() {
        this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4);
      }
      function qn() {
        this.ld = this.La = this.dd = this.tc = 0;
      }
      function fa() {
        this.Na = this.la = 0;
      }
      function Xa() {
        this.Sc = [
          0,
          0
        ], this.Eb = [
          0,
          0
        ], this.Qc = [
          0,
          0
        ], this.ia = this.lc = 0;
      }
      function ha() {
        this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
      }
      function Ja() {
        this.uc = this.M = this.Nb = 0, this.wa = Array(new qn()), this.Y = 0, this.ya = Array(new ha()), this.aa = 0, this.l = new Di();
      }
      function Za() {
        this.y = a(16), this.f = a(8), this.ea = a(8);
      }
      function Qa() {
        this.cb = this.a = 0, this.sc = "", this.m = new A(), this.Od = new Oi(), this.Kc = new Ti(), this.ed = new Ya(), this.Qa = new ps(), this.Ic = this.$c = this.Aa = 0, this.D = new Ja(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = f(8, A), this.ia = 0, this.pb = f(4, Xa), this.Pa = new $a(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
          0,
          0,
          0,
          0
        ], this.Gd = Array(new Za()), this.Hd = 0, this.rb = Array(new fa()), this.sb = 0, this.wa = Array(new qn()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new ha()), this.L = this.aa = 0, this.gd = c([
          4,
          2
        ], qn), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
      }
      function cr(i, s) {
        return 0 > i ? 0 : i > s ? s : i;
      }
      function Di() {
        this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
      }
      function ms() {
        var i = new Qa();
        return i != null && (i.a = 0, i.sc = "OK", i.cb = 0, i.Xb = 0, Fa || (Fa = Bi)), i;
      }
      function Yt(i, s, h) {
        return i.a == 0 && (i.a = s, i.sc = h, i.cb = 0), 0;
      }
      function eo(i, s, h) {
        return 3 <= h && i[s + 0] == 157 && i[s + 1] == 1 && i[s + 2] == 42;
      }
      function lr(i, s) {
        if (i == null) return 0;
        if (i.a = 0, i.sc = "OK", s == null) return Yt(i, 2, "null VP8Io passed to VP8GetHeaders()");
        var h = s.data, g = s.w, b = s.ha;
        if (4 > b) return Yt(i, 7, "Truncated header.");
        var y = h[g + 0] | h[g + 1] << 8 | h[g + 2] << 16, _ = i.Od;
        if (_.Rb = !(1 & y), _.td = y >> 1 & 7, _.yd = y >> 4 & 1, _.ub = y >> 5, 3 < _.td) return Yt(i, 3, "Incorrect keyframe parameters.");
        if (!_.yd) return Yt(i, 4, "Frame not displayable.");
        g += 3, b -= 3;
        var k = i.Kc;
        if (_.Rb) {
          if (7 > b) return Yt(i, 7, "cannot parse picture header");
          if (!eo(h, g, b)) return Yt(i, 3, "Bad code word");
          k.c = 16383 & (h[g + 4] << 8 | h[g + 3]), k.Td = h[g + 4] >> 6, k.i = 16383 & (h[g + 6] << 8 | h[g + 5]), k.Ud = h[g + 6] >> 6, g += 7, b -= 7, i.za = k.c + 15 >> 4, i.Ub = k.i + 15 >> 4, s.width = k.c, s.height = k.i, s.Da = 0, s.j = 0, s.v = 0, s.va = s.width, s.o = s.height, s.da = 0, s.ib = s.width, s.hb = s.height, s.U = s.width, s.T = s.height, o((y = i.Pa).jb, 0, 255, y.jb.length), e((y = i.Qa) != null), y.Cb = 0, y.Bb = 0, y.Fb = 1, o(y.Zb, 0, 0, y.Zb.length), o(y.Lb, 0, 0, y.Lb);
        }
        if (_.ub > b) return Yt(i, 7, "bad partition length");
        le(y = i.m, h, g, _.ub), g += _.ub, b -= _.ub, _.Rb && (k.Ld = ue(y), k.Kd = ue(y)), k = i.Qa;
        var C, M = i.Pa;
        if (e(y != null), e(k != null), k.Cb = ue(y), k.Cb) {
          if (k.Bb = ue(y), ue(y)) {
            for (k.Fb = ue(y), C = 0; 4 > C; ++C) k.Zb[C] = ue(y) ? ne(y, 7) : 0;
            for (C = 0; 4 > C; ++C) k.Lb[C] = ue(y) ? ne(y, 6) : 0;
          }
          if (k.Bb) for (C = 0; 3 > C; ++C) M.jb[C] = ue(y) ? ge(y, 8) : 255;
        } else k.Bb = 0;
        if (y.Ka) return Yt(i, 3, "cannot parse segment header");
        if ((k = i.ed).zd = ue(y), k.Tb = ge(y, 6), k.wb = ge(y, 3), k.Pc = ue(y), k.Pc && ue(y)) {
          for (M = 0; 4 > M; ++M) ue(y) && (k.vd[M] = ne(y, 6));
          for (M = 0; 4 > M; ++M) ue(y) && (k.od[M] = ne(y, 6));
        }
        if (i.L = k.Tb == 0 ? 0 : k.zd ? 1 : 2, y.Ka) return Yt(i, 3, "cannot parse filter header");
        var K = b;
        if (b = C = g, g = C + K, k = K, i.Xb = (1 << ge(i.m, 2)) - 1, K < 3 * (M = i.Xb)) h = 7;
        else {
          for (C += 3 * M, k -= 3 * M, K = 0; K < M; ++K) {
            var ie = h[b + 0] | h[b + 1] << 8 | h[b + 2] << 16;
            ie > k && (ie = k), le(i.Jc[+K], h, C, ie), C += ie, k -= ie, b += 3;
          }
          le(i.Jc[+M], h, C, k), h = C < g ? 0 : 5;
        }
        if (h != 0) return Yt(i, h, "cannot parse partitions");
        for (h = ge(C = i.m, 7), b = ue(C) ? ne(C, 4) : 0, g = ue(C) ? ne(C, 4) : 0, k = ue(C) ? ne(C, 4) : 0, M = ue(C) ? ne(C, 4) : 0, C = ue(C) ? ne(C, 4) : 0, K = i.Qa, ie = 0; 4 > ie; ++ie) {
          if (K.Cb) {
            var R = K.Zb[ie];
            K.Fb || (R += h);
          } else {
            if (0 < ie) {
              i.pb[ie] = i.pb[0];
              continue;
            }
            R = h;
          }
          var X = i.pb[ie];
          X.Sc[0] = Rs[cr(R + b, 127)], X.Sc[1] = Os[cr(R + 0, 127)], X.Eb[0] = 2 * Rs[cr(R + g, 127)], X.Eb[1] = 101581 * Os[cr(R + k, 127)] >> 16, 8 > X.Eb[1] && (X.Eb[1] = 8), X.Qc[0] = Rs[cr(R + M, 117)], X.Qc[1] = Os[cr(R + C, 127)], X.lc = R + C;
        }
        if (!_.Rb) return Yt(i, 4, "Not a key frame.");
        for (ue(y), _ = i.Pa, h = 0; 4 > h; ++h) {
          for (b = 0; 8 > b; ++b) for (g = 0; 3 > g; ++g) for (k = 0; 11 > k; ++k) M = ve(y, hd[h][b][g][k]) ? ge(y, 8) : ud[h][b][g][k], _.Wc[h][b].Yb[g][k] = M;
          for (b = 0; 17 > b; ++b) _.Xc[h][b] = _.Wc[h][dd[b]];
        }
        return i.kc = ue(y), i.kc && (i.Bd = ge(y, 8)), i.cb = 1;
      }
      function Bi(i, s, h, g, b, y, _) {
        var k = s[b].Yb[h];
        for (h = 0; 16 > b; ++b) {
          if (!ve(i, k[h + 0])) return b;
          for (; !ve(i, k[h + 1]); ) if (k = s[++b].Yb[0], h = 0, b == 16) return 16;
          var C = s[b + 1].Yb;
          if (ve(i, k[h + 2])) {
            var M = i, K = 0;
            if (ve(M, (R = k)[(ie = h) + 3])) if (ve(M, R[ie + 6])) {
              for (k = 0, ie = 2 * (K = ve(M, R[ie + 8])) + (R = ve(M, R[ie + 9 + K])), K = 0, R = cd[ie]; R[k]; ++k) K += K + ve(M, R[k]);
              K += 3 + (8 << ie);
            } else ve(M, R[ie + 7]) ? (K = 7 + 2 * ve(M, 165), K += ve(M, 145)) : K = 5 + ve(M, 159);
            else K = ve(M, R[ie + 4]) ? 3 + ve(M, R[ie + 5]) : 2;
            k = C[2];
          } else K = 1, k = C[1];
          C = _ + ld[b], 0 > (M = i).b && ce(M);
          var ie, R = M.b, X = (ie = M.Ca >> 1) - (M.I >> R) >> 31;
          --M.b, M.Ca += X, M.Ca |= 1, M.I -= (ie + 1 & X) << R, y[C] = ((K ^ X) - X) * g[(0 < b) + 0];
        }
        return 16;
      }
      function to(i) {
        var s = i.rb[i.sb - 1];
        s.la = 0, s.Na = 0, o(i.zc, 0, 0, i.zc.length), i.ja = 0;
      }
      function Un(i, s, h, g, b) {
        b = i[s + h + 32 * g] + (b >> 3), i[s + h + 32 * g] = -256 & b ? 0 > b ? 0 : 255 : b;
      }
      function Zt(i, s, h, g, b, y) {
        Un(i, s, 0, h, g + b), Un(i, s, 1, h, g + y), Un(i, s, 2, h, g - y), Un(i, s, 3, h, g - b);
      }
      function Nr(i) {
        return (20091 * i >> 16) + i;
      }
      function no(i, s, h, g) {
        var b, y = 0, _ = a(16);
        for (b = 0; 4 > b; ++b) {
          var k = i[s + 0] + i[s + 8], C = i[s + 0] - i[s + 8], M = (35468 * i[s + 4] >> 16) - Nr(i[s + 12]), K = Nr(i[s + 4]) + (35468 * i[s + 12] >> 16);
          _[y + 0] = k + K, _[y + 1] = C + M, _[y + 2] = C - M, _[y + 3] = k - K, y += 4, s++;
        }
        for (b = y = 0; 4 > b; ++b) k = (i = _[y + 0] + 4) + _[y + 8], C = i - _[y + 8], M = (35468 * _[y + 4] >> 16) - Nr(_[y + 12]), Un(h, g, 0, 0, k + (K = Nr(_[y + 4]) + (35468 * _[y + 12] >> 16))), Un(h, g, 1, 0, C + M), Un(h, g, 2, 0, C - M), Un(h, g, 3, 0, k - K), y++, g += 32;
      }
      function gs(i, s, h, g) {
        var b = i[s + 0] + 4, y = 35468 * i[s + 4] >> 16, _ = Nr(i[s + 4]), k = 35468 * i[s + 1] >> 16;
        Zt(h, g, 0, b + _, i = Nr(i[s + 1]), k), Zt(h, g, 1, b + y, i, k), Zt(h, g, 2, b - y, i, k), Zt(h, g, 3, b - _, i, k);
      }
      function vs(i, s, h, g, b) {
        no(i, s, h, g), b && no(i, s + 16, h, g + 4);
      }
      function ur(i, s, h, g) {
        Ai(i, s + 0, h, g, 1), Ai(i, s + 32, h, g + 128, 1);
      }
      function ro(i, s, h, g) {
        var b;
        for (i = i[s + 0] + 4, b = 0; 4 > b; ++b) for (s = 0; 4 > s; ++s) Un(h, g, s, b, i);
      }
      function io(i, s, h, g) {
        i[s + 0] && Nt(i, s + 0, h, g), i[s + 16] && Nt(i, s + 16, h, g + 4), i[s + 32] && Nt(i, s + 32, h, g + 128), i[s + 48] && Nt(i, s + 48, h, g + 128 + 4);
      }
      function qi(i, s, h, g) {
        var b, y = a(16);
        for (b = 0; 4 > b; ++b) {
          var _ = i[s + 0 + b] + i[s + 12 + b], k = i[s + 4 + b] + i[s + 8 + b], C = i[s + 4 + b] - i[s + 8 + b], M = i[s + 0 + b] - i[s + 12 + b];
          y[0 + b] = _ + k, y[8 + b] = _ - k, y[4 + b] = M + C, y[12 + b] = M - C;
        }
        for (b = 0; 4 > b; ++b) _ = (i = y[0 + 4 * b] + 3) + y[3 + 4 * b], k = y[1 + 4 * b] + y[2 + 4 * b], C = y[1 + 4 * b] - y[2 + 4 * b], M = i - y[3 + 4 * b], h[g + 0] = _ + k >> 3, h[g + 16] = M + C >> 3, h[g + 32] = _ - k >> 3, h[g + 48] = M - C >> 3, g += 64;
      }
      function hi(i, s, h) {
        var g, b = s - 32, y = Pn, _ = 255 - i[b - 1];
        for (g = 0; g < h; ++g) {
          var k, C = y, M = _ + i[s - 1];
          for (k = 0; k < h; ++k) i[s + k] = C[M + i[b + k]];
          s += 32;
        }
      }
      function bs(i, s) {
        hi(i, s, 4);
      }
      function ws(i, s) {
        hi(i, s, 8);
      }
      function ys(i, s) {
        hi(i, s, 16);
      }
      function da(i, s) {
        var h;
        for (h = 0; 16 > h; ++h) r(i, s + 32 * h, i, s - 32, 16);
      }
      function ao(i, s) {
        var h;
        for (h = 16; 0 < h; --h) o(i, s, i[s - 1], 16), s += 32;
      }
      function Jn(i, s, h) {
        var g;
        for (g = 0; 16 > g; ++g) o(s, h + 32 * g, i, 16);
      }
      function xs(i, s) {
        var h, g = 16;
        for (h = 0; 16 > h; ++h) g += i[s - 1 + 32 * h] + i[s + h - 32];
        Jn(g >> 5, i, s);
      }
      function di(i, s) {
        var h, g = 8;
        for (h = 0; 16 > h; ++h) g += i[s - 1 + 32 * h];
        Jn(g >> 4, i, s);
      }
      function pa(i, s) {
        var h, g = 8;
        for (h = 0; 16 > h; ++h) g += i[s + h - 32];
        Jn(g >> 4, i, s);
      }
      function Ns(i, s) {
        Jn(128, i, s);
      }
      function Ze(i, s, h) {
        return i + 2 * s + h + 2 >> 2;
      }
      function _s(i, s) {
        var h, g = s - 32;
        for (g = new Uint8Array([
          Ze(i[g - 1], i[g + 0], i[g + 1]),
          Ze(i[g + 0], i[g + 1], i[g + 2]),
          Ze(i[g + 1], i[g + 2], i[g + 3]),
          Ze(i[g + 2], i[g + 3], i[g + 4])
        ]), h = 0; 4 > h; ++h) r(i, s + 32 * h, g, 0, g.length);
      }
      function As(i, s) {
        var h = i[s - 1], g = i[s - 1 + 32], b = i[s - 1 + 64], y = i[s - 1 + 96];
        Se(i, s + 0, 16843009 * Ze(i[s - 1 - 32], h, g)), Se(i, s + 32, 16843009 * Ze(h, g, b)), Se(i, s + 64, 16843009 * Ze(g, b, y)), Se(i, s + 96, 16843009 * Ze(b, y, y));
      }
      function Ss(i, s) {
        var h, g = 4;
        for (h = 0; 4 > h; ++h) g += i[s + h - 32] + i[s - 1 + 32 * h];
        for (g >>= 3, h = 0; 4 > h; ++h) o(i, s + 32 * h, g, 4);
      }
      function _r(i, s) {
        var h = i[s - 1 + 0], g = i[s - 1 + 32], b = i[s - 1 + 64], y = i[s - 1 - 32], _ = i[s + 0 - 32], k = i[s + 1 - 32], C = i[s + 2 - 32], M = i[s + 3 - 32];
        i[s + 0 + 96] = Ze(g, b, i[s - 1 + 96]), i[s + 1 + 96] = i[s + 0 + 64] = Ze(h, g, b), i[s + 2 + 96] = i[s + 1 + 64] = i[s + 0 + 32] = Ze(y, h, g), i[s + 3 + 96] = i[s + 2 + 64] = i[s + 1 + 32] = i[s + 0 + 0] = Ze(_, y, h), i[s + 3 + 64] = i[s + 2 + 32] = i[s + 1 + 0] = Ze(k, _, y), i[s + 3 + 32] = i[s + 2 + 0] = Ze(C, k, _), i[s + 3 + 0] = Ze(M, C, k);
      }
      function Ar(i, s) {
        var h = i[s + 1 - 32], g = i[s + 2 - 32], b = i[s + 3 - 32], y = i[s + 4 - 32], _ = i[s + 5 - 32], k = i[s + 6 - 32], C = i[s + 7 - 32];
        i[s + 0 + 0] = Ze(i[s + 0 - 32], h, g), i[s + 1 + 0] = i[s + 0 + 32] = Ze(h, g, b), i[s + 2 + 0] = i[s + 1 + 32] = i[s + 0 + 64] = Ze(g, b, y), i[s + 3 + 0] = i[s + 2 + 32] = i[s + 1 + 64] = i[s + 0 + 96] = Ze(b, y, _), i[s + 3 + 32] = i[s + 2 + 64] = i[s + 1 + 96] = Ze(y, _, k), i[s + 3 + 64] = i[s + 2 + 96] = Ze(_, k, C), i[s + 3 + 96] = Ze(k, C, C);
      }
      function Ls(i, s) {
        var h = i[s - 1 + 0], g = i[s - 1 + 32], b = i[s - 1 + 64], y = i[s - 1 - 32], _ = i[s + 0 - 32], k = i[s + 1 - 32], C = i[s + 2 - 32], M = i[s + 3 - 32];
        i[s + 0 + 0] = i[s + 1 + 64] = y + _ + 1 >> 1, i[s + 1 + 0] = i[s + 2 + 64] = _ + k + 1 >> 1, i[s + 2 + 0] = i[s + 3 + 64] = k + C + 1 >> 1, i[s + 3 + 0] = C + M + 1 >> 1, i[s + 0 + 96] = Ze(b, g, h), i[s + 0 + 64] = Ze(g, h, y), i[s + 0 + 32] = i[s + 1 + 96] = Ze(h, y, _), i[s + 1 + 32] = i[s + 2 + 96] = Ze(y, _, k), i[s + 2 + 32] = i[s + 3 + 96] = Ze(_, k, C), i[s + 3 + 32] = Ze(k, C, M);
      }
      function ks(i, s) {
        var h = i[s + 0 - 32], g = i[s + 1 - 32], b = i[s + 2 - 32], y = i[s + 3 - 32], _ = i[s + 4 - 32], k = i[s + 5 - 32], C = i[s + 6 - 32], M = i[s + 7 - 32];
        i[s + 0 + 0] = h + g + 1 >> 1, i[s + 1 + 0] = i[s + 0 + 64] = g + b + 1 >> 1, i[s + 2 + 0] = i[s + 1 + 64] = b + y + 1 >> 1, i[s + 3 + 0] = i[s + 2 + 64] = y + _ + 1 >> 1, i[s + 0 + 32] = Ze(h, g, b), i[s + 1 + 32] = i[s + 0 + 96] = Ze(g, b, y), i[s + 2 + 32] = i[s + 1 + 96] = Ze(b, y, _), i[s + 3 + 32] = i[s + 2 + 96] = Ze(y, _, k), i[s + 3 + 64] = Ze(_, k, C), i[s + 3 + 96] = Ze(k, C, M);
      }
      function Ui(i, s) {
        var h = i[s - 1 + 0], g = i[s - 1 + 32], b = i[s - 1 + 64], y = i[s - 1 + 96];
        i[s + 0 + 0] = h + g + 1 >> 1, i[s + 2 + 0] = i[s + 0 + 32] = g + b + 1 >> 1, i[s + 2 + 32] = i[s + 0 + 64] = b + y + 1 >> 1, i[s + 1 + 0] = Ze(h, g, b), i[s + 3 + 0] = i[s + 1 + 32] = Ze(g, b, y), i[s + 3 + 32] = i[s + 1 + 64] = Ze(b, y, y), i[s + 3 + 64] = i[s + 2 + 64] = i[s + 0 + 96] = i[s + 1 + 96] = i[s + 2 + 96] = i[s + 3 + 96] = y;
      }
      function ma(i, s) {
        var h = i[s - 1 + 0], g = i[s - 1 + 32], b = i[s - 1 + 64], y = i[s - 1 + 96], _ = i[s - 1 - 32], k = i[s + 0 - 32], C = i[s + 1 - 32], M = i[s + 2 - 32];
        i[s + 0 + 0] = i[s + 2 + 32] = h + _ + 1 >> 1, i[s + 0 + 32] = i[s + 2 + 64] = g + h + 1 >> 1, i[s + 0 + 64] = i[s + 2 + 96] = b + g + 1 >> 1, i[s + 0 + 96] = y + b + 1 >> 1, i[s + 3 + 0] = Ze(k, C, M), i[s + 2 + 0] = Ze(_, k, C), i[s + 1 + 0] = i[s + 3 + 32] = Ze(h, _, k), i[s + 1 + 32] = i[s + 3 + 64] = Ze(g, h, _), i[s + 1 + 64] = i[s + 3 + 96] = Ze(b, g, h), i[s + 1 + 96] = Ze(y, b, g);
      }
      function pi(i, s) {
        var h;
        for (h = 0; 8 > h; ++h) r(i, s + 32 * h, i, s - 32, 8);
      }
      function Cs(i, s) {
        var h;
        for (h = 0; 8 > h; ++h) o(i, s, i[s - 1], 8), s += 32;
      }
      function Sr(i, s, h) {
        var g;
        for (g = 0; 8 > g; ++g) o(s, h + 32 * g, i, 8);
      }
      function Ps(i, s) {
        var h, g = 8;
        for (h = 0; 8 > h; ++h) g += i[s + h - 32] + i[s - 1 + 32 * h];
        Sr(g >> 4, i, s);
      }
      function ga(i, s) {
        var h, g = 4;
        for (h = 0; 8 > h; ++h) g += i[s + h - 32];
        Sr(g >> 3, i, s);
      }
      function va(i, s) {
        var h, g = 4;
        for (h = 0; 8 > h; ++h) g += i[s - 1 + 32 * h];
        Sr(g >> 3, i, s);
      }
      function oo(i, s) {
        Sr(128, i, s);
      }
      function Lr(i, s, h) {
        var g = i[s - h], b = i[s + 0], y = 3 * (b - g) + Es[1020 + i[s - 2 * h] - i[s + h]], _ = mo[112 + (y + 4 >> 3)];
        i[s - h] = Pn[255 + g + mo[112 + (y + 3 >> 3)]], i[s + 0] = Pn[255 + b - _];
      }
      function ba(i, s, h, g) {
        var b = i[s + 0], y = i[s + h];
        return Wn[255 + i[s - 2 * h] - i[s - h]] > g || Wn[255 + y - b] > g;
      }
      function zi(i, s, h, g) {
        return 4 * Wn[255 + i[s - h] - i[s + 0]] + Wn[255 + i[s - 2 * h] - i[s + h]] <= g;
      }
      function wa(i, s, h, g, b) {
        var y = i[s - 3 * h], _ = i[s - 2 * h], k = i[s - h], C = i[s + 0], M = i[s + h], K = i[s + 2 * h], ie = i[s + 3 * h];
        return 4 * Wn[255 + k - C] + Wn[255 + _ - M] > g ? 0 : Wn[255 + i[s - 4 * h] - y] <= b && Wn[255 + y - _] <= b && Wn[255 + _ - k] <= b && Wn[255 + ie - K] <= b && Wn[255 + K - M] <= b && Wn[255 + M - C] <= b;
      }
      function mi(i, s, h, g) {
        var b = 2 * g + 1;
        for (g = 0; 16 > g; ++g) zi(i, s + g, h, b) && Lr(i, s + g, h);
      }
      function ya(i, s, h, g) {
        var b = 2 * g + 1;
        for (g = 0; 16 > g; ++g) zi(i, s + g * h, 1, b) && Lr(i, s + g * h, 1);
      }
      function so(i, s, h, g) {
        var b;
        for (b = 3; 0 < b; --b) mi(i, s += 4 * h, h, g);
      }
      function co(i, s, h, g) {
        var b;
        for (b = 3; 0 < b; --b) ya(i, s += 4, h, g);
      }
      function kr(i, s, h, g, b, y, _, k) {
        for (y = 2 * y + 1; 0 < b--; ) {
          if (wa(i, s, h, y, _)) if (ba(i, s, h, k)) Lr(i, s, h);
          else {
            var C = i, M = s, K = h, ie = C[M - 2 * K], R = C[M - K], X = C[M + 0], ee = C[M + K], fe = C[M + 2 * K], re = 27 * (me = Es[1020 + 3 * (X - R) + Es[1020 + ie - ee]]) + 63 >> 7, de = 18 * me + 63 >> 7, me = 9 * me + 63 >> 7;
            C[M - 3 * K] = Pn[255 + C[M - 3 * K] + me], C[M - 2 * K] = Pn[255 + ie + de], C[M - K] = Pn[255 + R + re], C[M + 0] = Pn[255 + X - re], C[M + K] = Pn[255 + ee - de], C[M + 2 * K] = Pn[255 + fe - me];
          }
          s += g;
        }
      }
      function Cr(i, s, h, g, b, y, _, k) {
        for (y = 2 * y + 1; 0 < b--; ) {
          if (wa(i, s, h, y, _)) if (ba(i, s, h, k)) Lr(i, s, h);
          else {
            var C = i, M = s, K = h, ie = C[M - K], R = C[M + 0], X = C[M + K], ee = mo[112 + (4 + (fe = 3 * (R - ie)) >> 3)], fe = mo[112 + (fe + 3 >> 3)], re = ee + 1 >> 1;
            C[M - 2 * K] = Pn[255 + C[M - 2 * K] + re], C[M - K] = Pn[255 + ie + fe], C[M + 0] = Pn[255 + R - ee], C[M + K] = Pn[255 + X - re];
          }
          s += g;
        }
      }
      function lo(i, s, h, g, b, y) {
        kr(i, s, h, 1, 16, g, b, y);
      }
      function gi(i, s, h, g, b, y) {
        kr(i, s, 1, h, 16, g, b, y);
      }
      function uo(i, s, h, g, b, y) {
        var _;
        for (_ = 3; 0 < _; --_) Cr(i, s += 4 * h, h, 1, 16, g, b, y);
      }
      function l(i, s, h, g, b, y) {
        var _;
        for (_ = 3; 0 < _; --_) Cr(i, s += 4, 1, h, 16, g, b, y);
      }
      function v(i, s, h, g, b, y, _, k) {
        kr(i, s, b, 1, 8, y, _, k), kr(h, g, b, 1, 8, y, _, k);
      }
      function O(i, s, h, g, b, y, _, k) {
        kr(i, s, 1, b, 8, y, _, k), kr(h, g, 1, b, 8, y, _, k);
      }
      function W(i, s, h, g, b, y, _, k) {
        Cr(i, s + 4 * b, b, 1, 8, y, _, k), Cr(h, g + 4 * b, b, 1, 8, y, _, k);
      }
      function Z(i, s, h, g, b, y, _, k) {
        Cr(i, s + 4, 1, b, 8, y, _, k), Cr(h, g + 4, 1, b, 8, y, _, k);
      }
      function pe() {
        this.ba = new ut(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xt(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
      }
      function ye() {
        this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
      }
      function Fe() {
        this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
      }
      function Te() {
        this.ua = 0, this.Wa = new st(), this.vb = new st(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new se(), this.yc = new B();
      }
      function Je() {
        this.xb = this.a = 0, this.l = new Di(), this.ca = new ut(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new T(), this.Pb = 0, this.wd = new T(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Te(), this.ab = 0, this.gc = f(4, Fe), this.Oc = 0;
      }
      function it() {
        this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Di(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
      }
      function vt(i, s, h, g, b, y, _) {
        for (i = i == null ? 0 : i[s + 0], s = 0; s < _; ++s) b[y + s] = i + h[g + s] & 255, i = b[y + s];
      }
      function Ot(i, s, h, g, b, y, _) {
        var k;
        if (i == null) vt(null, null, h, g, b, y, _);
        else for (k = 0; k < _; ++k) b[y + k] = i[s + k] + h[g + k] & 255;
      }
      function Xt(i, s, h, g, b, y, _) {
        if (i == null) vt(null, null, h, g, b, y, _);
        else {
          var k, C = i[s + 0], M = C, K = C;
          for (k = 0; k < _; ++k) M = K + (C = i[s + k]) - M, K = h[g + k] + (-256 & M ? 0 > M ? 0 : 255 : M) & 255, M = C, b[y + k] = K;
        }
      }
      function Et(i, s, h, g) {
        var b = s.width, y = s.o;
        if (e(i != null && s != null), 0 > h || 0 >= g || h + g > y) return null;
        if (!i.Cc) {
          if (i.ga == null) {
            var _;
            if (i.ga = new it(), (_ = i.ga == null) || (_ = s.width * s.o, e(i.Gb.length == 0), i.Gb = a(_), i.Uc = 0, i.Gb == null ? _ = 0 : (i.mb = i.Gb, i.nb = i.Uc, i.rc = null, _ = 1), _ = !_), !_) {
              _ = i.ga;
              var k = i.Fa, C = i.P, M = i.qc, K = i.mb, ie = i.nb, R = C + 1, X = M - 1, ee = _.l;
              if (e(k != null && K != null && s != null), Jr[0] = null, Jr[1] = vt, Jr[2] = Ot, Jr[3] = Xt, _.ca = K, _.tb = ie, _.c = s.width, _.i = s.height, e(0 < _.c && 0 < _.i), 1 >= M) s = 0;
              else if (_.$a = 3 & k[C + 0], _.Z = k[C + 0] >> 2 & 3, _.Lc = k[C + 0] >> 4 & 3, C = k[C + 0] >> 6 & 3, 0 > _.$a || 1 < _.$a || 4 <= _.Z || 1 < _.Lc || C) s = 0;
              else if (ee.put = $e, ee.ac = ar, ee.bc = yr, ee.ma = _, ee.width = s.width, ee.height = s.height, ee.Da = s.Da, ee.v = s.v, ee.va = s.va, ee.j = s.j, ee.o = s.o, _.$a) e: {
                e(_.$a == 1), s = ui();
                t: for (; ; ) {
                  if (s == null) {
                    s = 0;
                    break e;
                  }
                  if (e(_ != null), _.mc = s, s.c = _.c, s.i = _.i, s.l = _.l, s.l.ma = _, s.l.width = _.c, s.l.height = _.i, s.a = 0, te(s.m, k, R, X), !sr(_.c, _.i, 1, s, null) || (s.ab == 1 && s.gc[0].hc == 3 && $n(s.s) ? (_.ic = 1, k = s.c * s.i, s.Ta = null, s.Ua = 0, s.V = a(k), s.Ba = 0, s.V == null ? (s.a = 1, s = 0) : s = 1) : (_.ic = 0, s = fi(s, _.c)), !s)) break t;
                  s = 1;
                  break e;
                }
                _.mc = null, s = 0;
              }
              else s = X >= _.c * _.i;
              _ = !s;
            }
            if (_) return null;
            i.ga.Lc != 1 ? i.Ga = 0 : g = y - h;
          }
          e(i.ga != null), e(h + g <= y);
          e: {
            if (s = (k = i.ga).c, y = k.l.o, k.$a == 0) {
              if (R = i.rc, X = i.Vc, ee = i.Fa, C = i.P + 1 + h * s, M = i.mb, K = i.nb + h * s, e(C <= i.P + i.qc), k.Z != 0) for (e(Jr[k.Z] != null), _ = 0; _ < g; ++_) Jr[k.Z](R, X, ee, C, M, K, s), R = M, X = K, K += s, C += s;
              else for (_ = 0; _ < g; ++_) r(M, K, ee, C, s), R = M, X = K, K += s, C += s;
              i.rc = R, i.Vc = X;
            } else {
              if (e(k.mc != null), s = h + g, e((_ = k.mc) != null), e(s <= _.i), _.C >= s) s = 1;
              else if (k.ic || Zn(), k.ic) {
                k = _.V, R = _.Ba, X = _.c;
                var fe = _.i, re = (ee = 1, C = _.$ / X, M = _.$ % X, K = _.m, ie = _.s, _.$), de = X * fe, me = X * s, _e = ie.wc, xe = re < me ? sn(ie, M, C) : null;
                e(re <= de), e(s <= fe), e($n(ie));
                t: for (; ; ) {
                  for (; !K.h && re < me; ) {
                    if (M & _e || (xe = sn(ie, M, C)), e(xe != null), Q(K), 256 > (fe = Tt(xe.G[0], xe.H[0], K))) k[R + re] = fe, ++re, ++M >= X && (M = 0, ++C <= s && !(C % 16) && Yn(_, C));
                    else {
                      if (!(280 > fe)) {
                        ee = 0;
                        break t;
                      }
                      fe = Tn(fe - 256, K);
                      var De, Ee = Tt(xe.G[4], xe.H[4], K);
                      if (Q(K), !(re >= (Ee = Dn(X, Ee = Tn(Ee, K))) && de - re >= fe)) {
                        ee = 0;
                        break t;
                      }
                      for (De = 0; De < fe; ++De) k[R + re + De] = k[R + re + De - Ee];
                      for (re += fe, M += fe; M >= X; ) M -= X, ++C <= s && !(C % 16) && Yn(_, C);
                      re < me && M & _e && (xe = sn(ie, M, C));
                    }
                    e(K.h == $(K));
                  }
                  Yn(_, C > s ? s : C);
                  break t;
                }
                !ee || K.h && re < de ? (ee = 0, _.a = K.h ? 5 : 3) : _.$ = re, s = ee;
              } else s = Xn(_, _.V, _.Ba, _.c, _.i, s, Ri);
              if (!s) {
                g = 0;
                break e;
              }
            }
            h + g >= y && (i.Cc = 1), g = 1;
          }
          if (!g) return null;
          if (i.Cc && ((g = i.ga) != null && (g.mc = null), i.ga = null, 0 < i.Ga)) return alert("todo:WebPDequantizeLevels"), null;
        }
        return i.nb + h * b;
      }
      function Qt(i, s, h, g, b, y) {
        for (; 0 < b--; ) {
          var _, k = i, C = s + (h ? 1 : 0), M = i, K = s + (h ? 0 : 3);
          for (_ = 0; _ < g; ++_) {
            var ie = M[K + 4 * _];
            ie != 255 && (ie *= 32897, k[C + 4 * _ + 0] = k[C + 4 * _ + 0] * ie >> 23, k[C + 4 * _ + 1] = k[C + 4 * _ + 1] * ie >> 23, k[C + 4 * _ + 2] = k[C + 4 * _ + 2] * ie >> 23);
          }
          s += y;
        }
      }
      function Jt(i, s, h, g, b) {
        for (; 0 < g--; ) {
          var y;
          for (y = 0; y < h; ++y) {
            var _ = i[s + 2 * y + 0], k = 15 & (M = i[s + 2 * y + 1]), C = 4369 * k, M = (240 & M | M >> 4) * C >> 16;
            i[s + 2 * y + 0] = (240 & _ | _ >> 4) * C >> 16 & 240 | (15 & _ | _ << 4) * C >> 16 >> 4 & 15, i[s + 2 * y + 1] = 240 & M | k;
          }
          s += b;
        }
      }
      function cn(i, s, h, g, b, y, _, k) {
        var C, M, K = 255;
        for (M = 0; M < b; ++M) {
          for (C = 0; C < g; ++C) {
            var ie = i[s + C];
            y[_ + 4 * C] = ie, K &= ie;
          }
          s += h, _ += k;
        }
        return K != 255;
      }
      function Pr(i, s, h, g, b) {
        var y;
        for (y = 0; y < b; ++y) h[g + y] = i[s + y] >> 8;
      }
      function Zn() {
        ja = Qt, Qc = Jt, el = cn, tl = Pr;
      }
      function Er(i, s, h) {
        H[i] = function(g, b, y, _, k, C, M, K, ie, R, X, ee, fe, re, de, me, _e) {
          var xe, De = _e - 1 >> 1, Ee = k[C + 0] | M[K + 0] << 16, at = ie[R + 0] | X[ee + 0] << 16;
          e(g != null);
          var Me = 3 * Ee + at + 131074 >> 2;
          for (s(g[b + 0], 255 & Me, Me >> 16, fe, re), y != null && (Me = 3 * at + Ee + 131074 >> 2, s(y[_ + 0], 255 & Me, Me >> 16, de, me)), xe = 1; xe <= De; ++xe) {
            var pt = k[C + xe] | M[K + xe] << 16, tn = ie[R + xe] | X[ee + xe] << 16, ot = Ee + pt + at + tn + 524296, Re = ot + 2 * (pt + at) >> 3;
            Me = Re + Ee >> 1, Ee = (ot = ot + 2 * (Ee + tn) >> 3) + pt >> 1, s(g[b + 2 * xe - 1], 255 & Me, Me >> 16, fe, re + (2 * xe - 1) * h), s(g[b + 2 * xe - 0], 255 & Ee, Ee >> 16, fe, re + (2 * xe - 0) * h), y != null && (Me = ot + at >> 1, Ee = Re + tn >> 1, s(y[_ + 2 * xe - 1], 255 & Me, Me >> 16, de, me + (2 * xe - 1) * h), s(y[_ + 2 * xe + 0], 255 & Ee, Ee >> 16, de, me + (2 * xe + 0) * h)), Ee = pt, at = tn;
          }
          1 & _e || (Me = 3 * Ee + at + 131074 >> 2, s(g[b + _e - 1], 255 & Me, Me >> 16, fe, re + (_e - 1) * h), y != null && (Me = 3 * at + Ee + 131074 >> 2, s(y[_ + _e - 1], 255 & Me, Me >> 16, de, me + (_e - 1) * h)));
        };
      }
      function xa() {
        Gn[go] = md, Gn[vo] = hl, Gn[sl] = gd, Gn[bo] = dl, Gn[wo] = pl, Gn[Is] = ml, Gn[cl] = vd, Gn[js] = hl, Gn[Fs] = dl, Gn[yo] = pl, Gn[Ms] = ml;
      }
      function Hi(i) {
        return i & -16384 ? 0 > i ? 0 : 255 : i >> bd;
      }
      function Ur(i, s) {
        return Hi((19077 * i >> 8) + (26149 * s >> 8) - 14234);
      }
      function vi(i, s, h) {
        return Hi((19077 * i >> 8) - (6419 * s >> 8) - (13320 * h >> 8) + 8708);
      }
      function bi(i, s) {
        return Hi((19077 * i >> 8) + (33050 * s >> 8) - 17685);
      }
      function zr(i, s, h, g, b) {
        g[b + 0] = Ur(i, h), g[b + 1] = vi(i, s, h), g[b + 2] = bi(i, s);
      }
      function ln(i, s, h, g, b) {
        g[b + 0] = bi(i, s), g[b + 1] = vi(i, s, h), g[b + 2] = Ur(i, h);
      }
      function wi(i, s, h, g, b) {
        var y = vi(i, s, h);
        s = y << 3 & 224 | bi(i, s) >> 3, g[b + 0] = 248 & Ur(i, h) | y >> 5, g[b + 1] = s;
      }
      function yi(i, s, h, g, b) {
        var y = 240 & bi(i, s) | 15;
        g[b + 0] = 240 & Ur(i, h) | vi(i, s, h) >> 4, g[b + 1] = y;
      }
      function Na(i, s, h, g, b) {
        g[b + 0] = 255, zr(i, s, h, g, b + 1);
      }
      function _a(i, s, h, g, b) {
        ln(i, s, h, g, b), g[b + 3] = 255;
      }
      function wn(i, s, h, g, b) {
        zr(i, s, h, g, b), g[b + 3] = 255;
      }
      function Ir(i, s, h) {
        H[i] = function(g, b, y, _, k, C, M, K, ie) {
          for (var R = K + (-2 & ie) * h; K != R; ) s(g[b + 0], y[_ + 0], k[C + 0], M, K), s(g[b + 1], y[_ + 0], k[C + 0], M, K + h), b += 2, ++_, ++C, K += 2 * h;
          1 & ie && s(g[b + 0], y[_ + 0], k[C + 0], M, K);
        };
      }
      function Wi(i, s, h) {
        return h == 0 ? i == 0 ? s == 0 ? 6 : 5 : s == 0 ? 4 : 0 : h;
      }
      function fo(i, s, h, g, b) {
        switch (i >>> 30) {
          case 3:
            Ai(s, h, g, b, 0);
            break;
          case 2:
            Hn(s, h, g, b);
            break;
          case 1:
            Nt(s, h, g, b);
        }
      }
      function zn(i, s) {
        var h, g, b = s.M, y = s.Nb, _ = i.oc, k = i.pc + 40, C = i.oc, M = i.pc + 584, K = i.oc, ie = i.pc + 600;
        for (h = 0; 16 > h; ++h) _[k + 32 * h - 1] = 129;
        for (h = 0; 8 > h; ++h) C[M + 32 * h - 1] = 129, K[ie + 32 * h - 1] = 129;
        for (0 < b ? _[k - 1 - 32] = C[M - 1 - 32] = K[ie - 1 - 32] = 129 : (o(_, k - 32 - 1, 127, 21), o(C, M - 32 - 1, 127, 9), o(K, ie - 32 - 1, 127, 9)), g = 0; g < i.za; ++g) {
          var R = s.ya[s.aa + g];
          if (0 < g) {
            for (h = -1; 16 > h; ++h) r(_, k + 32 * h - 4, _, k + 32 * h + 12, 4);
            for (h = -1; 8 > h; ++h) r(C, M + 32 * h - 4, C, M + 32 * h + 4, 4), r(K, ie + 32 * h - 4, K, ie + 32 * h + 4, 4);
          }
          var X = i.Gd, ee = i.Hd + g, fe = R.ad, re = R.Hc;
          if (0 < b && (r(_, k - 32, X[ee].y, 0, 16), r(C, M - 32, X[ee].f, 0, 8), r(K, ie - 32, X[ee].ea, 0, 8)), R.Za) {
            var de = _, me = k - 32 + 16;
            for (0 < b && (g >= i.za - 1 ? o(de, me, X[ee].y[15], 4) : r(de, me, X[ee + 1].y, 0, 4)), h = 0; 4 > h; h++) de[me + 128 + h] = de[me + 256 + h] = de[me + 384 + h] = de[me + 0 + h];
            for (h = 0; 16 > h; ++h, re <<= 2) de = _, me = k + vl[h], Qn[R.Ob[h]](de, me), fo(re, fe, 16 * +h, de, me);
          } else if (de = Wi(g, b, R.Ob[0]), Xr[de](_, k), re != 0) for (h = 0; 16 > h; ++h, re <<= 2) fo(re, fe, 16 * +h, _, k + vl[h]);
          for (h = R.Gc, de = Wi(g, b, R.Dd), Mr[de](C, M), Mr[de](K, ie), re = fe, de = C, me = M, 255 & (R = 0 | h) && (170 & R ? dr(re, 256, de, me) : Lt(re, 256, de, me)), R = K, re = ie, 255 & (h >>= 8) && (170 & h ? dr(fe, 320, R, re) : Lt(fe, 320, R, re)), b < i.Ub - 1 && (r(X[ee].y, 0, _, k + 480, 16), r(X[ee].f, 0, C, M + 224, 8), r(X[ee].ea, 0, K, ie + 224, 8)), h = 8 * y * i.B, X = i.sa, ee = i.ta + 16 * g + 16 * y * i.R, fe = i.qa, R = i.ra + 8 * g + h, re = i.Ha, de = i.Ia + 8 * g + h, h = 0; 16 > h; ++h) r(X, ee + h * i.R, _, k + 32 * h, 16);
          for (h = 0; 8 > h; ++h) r(fe, R + h * i.B, C, M + 32 * h, 8), r(re, de + h * i.B, K, ie + 32 * h, 8);
        }
      }
      function xi(i, s, h, g, b, y, _, k, C) {
        var M = [
          0
        ], K = [
          0
        ], ie = 0, R = C != null ? C.kd : 0, X = C ?? new ye();
        if (i == null || 12 > h) return 7;
        X.data = i, X.w = s, X.ha = h, s = [
          s
        ], h = [
          h
        ], X.gb = [
          X.gb
        ];
        e: {
          var ee = s, fe = h, re = X.gb;
          if (e(i != null), e(fe != null), e(re != null), re[0] = 0, 12 <= fe[0] && !t(i, ee[0], "RIFF")) {
            if (t(i, ee[0] + 8, "WEBP")) {
              re = 3;
              break e;
            }
            var de = We(i, ee[0] + 4);
            if (12 > de || 4294967286 < de) {
              re = 3;
              break e;
            }
            if (R && de > fe[0] - 8) {
              re = 7;
              break e;
            }
            re[0] = de, ee[0] += 12, fe[0] -= 12;
          }
          re = 0;
        }
        if (re != 0) return re;
        for (de = 0 < X.gb[0], h = h[0]; ; ) {
          e: {
            var me = i;
            fe = s, re = h;
            var _e = M, xe = K, De = ee = [
              0
            ];
            if ((Me = ie = [
              ie
            ])[0] = 0, 8 > re[0]) re = 7;
            else {
              if (!t(me, fe[0], "VP8X")) {
                if (We(me, fe[0] + 4) != 10) {
                  re = 3;
                  break e;
                }
                if (18 > re[0]) {
                  re = 7;
                  break e;
                }
                var Ee = We(me, fe[0] + 8), at = 1 + Pe(me, fe[0] + 12);
                if (2147483648 <= at * (me = 1 + Pe(me, fe[0] + 15))) {
                  re = 3;
                  break e;
                }
                De != null && (De[0] = Ee), _e != null && (_e[0] = at), xe != null && (xe[0] = me), fe[0] += 18, re[0] -= 18, Me[0] = 1;
              }
              re = 0;
            }
          }
          if (ie = ie[0], ee = ee[0], re != 0) return re;
          if (fe = !!(2 & ee), !de && ie) return 3;
          if (y != null && (y[0] = !!(16 & ee)), _ != null && (_[0] = fe), k != null && (k[0] = 0), _ = M[0], ee = K[0], ie && fe && C == null) {
            re = 0;
            break;
          }
          if (4 > h) {
            re = 7;
            break;
          }
          if (de && ie || !de && !ie && !t(i, s[0], "ALPH")) {
            h = [
              h
            ], X.na = [
              X.na
            ], X.P = [
              X.P
            ], X.Sa = [
              X.Sa
            ];
            e: {
              Ee = i, re = s, de = h;
              var Me = X.gb;
              _e = X.na, xe = X.P, De = X.Sa, at = 22, e(Ee != null), e(de != null), me = re[0];
              var pt = de[0];
              for (e(_e != null), e(De != null), _e[0] = null, xe[0] = null, De[0] = 0; ; ) {
                if (re[0] = me, de[0] = pt, 8 > pt) {
                  re = 7;
                  break e;
                }
                var tn = We(Ee, me + 4);
                if (4294967286 < tn) {
                  re = 3;
                  break e;
                }
                var ot = 8 + tn + 1 & -2;
                if (at += ot, 0 < Me && at > Me) {
                  re = 3;
                  break e;
                }
                if (!t(Ee, me, "VP8 ") || !t(Ee, me, "VP8L")) {
                  re = 0;
                  break e;
                }
                if (pt[0] < ot) {
                  re = 7;
                  break e;
                }
                t(Ee, me, "ALPH") || (_e[0] = Ee, xe[0] = me + 8, De[0] = tn), me += ot, pt -= ot;
              }
            }
            if (h = h[0], X.na = X.na[0], X.P = X.P[0], X.Sa = X.Sa[0], re != 0) break;
          }
          h = [
            h
          ], X.Ja = [
            X.Ja
          ], X.xa = [
            X.xa
          ];
          e: if (Me = i, re = s, de = h, _e = X.gb[0], xe = X.Ja, De = X.xa, Ee = re[0], me = !t(Me, Ee, "VP8 "), at = !t(Me, Ee, "VP8L"), e(Me != null), e(de != null), e(xe != null), e(De != null), 8 > de[0]) re = 7;
          else {
            if (me || at) {
              if (Me = We(Me, Ee + 4), 12 <= _e && Me > _e - 12) {
                re = 3;
                break e;
              }
              if (R && Me > de[0] - 8) {
                re = 7;
                break e;
              }
              xe[0] = Me, re[0] += 8, de[0] -= 8, De[0] = at;
            } else De[0] = 5 <= de[0] && Me[Ee + 0] == 47 && !(Me[Ee + 4] >> 5), xe[0] = de[0];
            re = 0;
          }
          if (h = h[0], X.Ja = X.Ja[0], X.xa = X.xa[0], s = s[0], re != 0) break;
          if (4294967286 < X.Ja) return 3;
          if (k == null || fe || (k[0] = X.xa ? 2 : 1), _ = [
            _
          ], ee = [
            ee
          ], X.xa) {
            if (5 > h) {
              re = 7;
              break;
            }
            k = _, R = ee, fe = y, i == null || 5 > h ? i = 0 : 5 <= h && i[s + 0] == 47 && !(i[s + 4] >> 5) ? (de = [
              0
            ], Me = [
              0
            ], _e = [
              0
            ], te(xe = new T(), i, s, h), xr(xe, de, Me, _e) ? (k != null && (k[0] = de[0]), R != null && (R[0] = Me[0]), fe != null && (fe[0] = _e[0]), i = 1) : i = 0) : i = 0;
          } else {
            if (10 > h) {
              re = 7;
              break;
            }
            k = ee, i == null || 10 > h || !eo(i, s + 3, h - 3) ? i = 0 : (R = i[s + 0] | i[s + 1] << 8 | i[s + 2] << 16, fe = 16383 & (i[s + 7] << 8 | i[s + 6]), i = 16383 & (i[s + 9] << 8 | i[s + 8]), 1 & R || 3 < (R >> 1 & 7) || !(R >> 4 & 1) || R >> 5 >= X.Ja || !fe || !i ? i = 0 : (_ && (_[0] = fe), k && (k[0] = i), i = 1));
          }
          if (!i || (_ = _[0], ee = ee[0], ie && (M[0] != _ || K[0] != ee))) return 3;
          C != null && (C[0] = X, C.offset = s - C.w, e(4294967286 > s - C.w), e(C.offset == C.ha - h));
          break;
        }
        return re == 0 || re == 7 && ie && C == null ? (y != null && (y[0] |= X.na != null && 0 < X.na.length), g != null && (g[0] = _), b != null && (b[0] = ee), 0) : re;
      }
      function Aa(i, s, h) {
        var g = s.width, b = s.height, y = 0, _ = 0, k = g, C = b;
        if (s.Da = i != null && 0 < i.Da, s.Da && (k = i.cd, C = i.bd, y = i.v, _ = i.j, 11 > h || (y &= -2, _ &= -2), 0 > y || 0 > _ || 0 >= k || 0 >= C || y + k > g || _ + C > b)) return 0;
        if (s.v = y, s.j = _, s.va = y + k, s.o = _ + C, s.U = k, s.T = C, s.da = i != null && 0 < i.da, s.da) {
          if (!Ge(k, C, h = [
            i.ib
          ], y = [
            i.hb
          ])) return 0;
          s.ib = h[0], s.hb = y[0];
        }
        return s.ob = i != null && i.ob, s.Kb = i == null || !i.Sd, s.da && (s.ob = s.ib < 3 * g / 4 && s.hb < 3 * b / 4, s.Kb = 0), 1;
      }
      function Sa(i) {
        if (i == null) return 2;
        if (11 > i.S) {
          var s = i.f.RGBA;
          s.fb += (i.height - 1) * s.A, s.A = -s.A;
        } else s = i.f.kb, i = i.height, s.O += (i - 1) * s.fa, s.fa = -s.fa, s.N += (i - 1 >> 1) * s.Ab, s.Ab = -s.Ab, s.W += (i - 1 >> 1) * s.Db, s.Db = -s.Db, s.F != null && (s.J += (i - 1) * s.lb, s.lb = -s.lb);
        return 0;
      }
      function Hr(i, s, h, g) {
        if (g == null || 0 >= i || 0 >= s) return 2;
        if (h != null) {
          if (h.Da) {
            var b = h.cd, y = h.bd, _ = -2 & h.v, k = -2 & h.j;
            if (0 > _ || 0 > k || 0 >= b || 0 >= y || _ + b > i || k + y > s) return 2;
            i = b, s = y;
          }
          if (h.da) {
            if (!Ge(i, s, b = [
              h.ib
            ], y = [
              h.hb
            ])) return 2;
            i = b[0], s = y[0];
          }
        }
        g.width = i, g.height = s;
        e: {
          var C = g.width, M = g.height;
          if (i = g.S, 0 >= C || 0 >= M || !(i >= go && 13 > i)) i = 2;
          else {
            if (0 >= g.Rd && g.sd == null) {
              _ = y = b = s = 0;
              var K = (k = C * bl[i]) * M;
              if (11 > i || (y = (M + 1) / 2 * (s = (C + 1) / 2), i == 12 && (_ = (b = C) * M)), (M = a(K + 2 * y + _)) == null) {
                i = 1;
                break e;
              }
              g.sd = M, 11 > i ? ((C = g.f.RGBA).eb = M, C.fb = 0, C.A = k, C.size = K) : ((C = g.f.kb).y = M, C.O = 0, C.fa = k, C.Fd = K, C.f = M, C.N = 0 + K, C.Ab = s, C.Cd = y, C.ea = M, C.W = 0 + K + y, C.Db = s, C.Ed = y, i == 12 && (C.F = M, C.J = 0 + K + 2 * y), C.Tc = _, C.lb = b);
            }
            if (s = 1, b = g.S, y = g.width, _ = g.height, b >= go && 13 > b) if (11 > b) i = g.f.RGBA, s &= (k = Math.abs(i.A)) * (_ - 1) + y <= i.size, s &= k >= y * bl[b], s &= i.eb != null;
            else {
              i = g.f.kb, k = (y + 1) / 2, K = (_ + 1) / 2, C = Math.abs(i.fa), M = Math.abs(i.Ab);
              var ie = Math.abs(i.Db), R = Math.abs(i.lb), X = R * (_ - 1) + y;
              s &= C * (_ - 1) + y <= i.Fd, s &= M * (K - 1) + k <= i.Cd, s = (s &= ie * (K - 1) + k <= i.Ed) & C >= y & M >= k & ie >= k, s &= i.y != null, s &= i.f != null, s &= i.ea != null, b == 12 && (s &= R >= y, s &= X <= i.Tc, s &= i.F != null);
            }
            else s = 0;
            i = s ? 0 : 2;
          }
        }
        return i != 0 || h != null && h.fd && (i = Sa(g)), i;
      }
      var Ni = 64, kn = [
        0,
        1,
        3,
        7,
        15,
        31,
        63,
        127,
        255,
        511,
        1023,
        2047,
        4095,
        8191,
        16383,
        32767,
        65535,
        131071,
        262143,
        524287,
        1048575,
        2097151,
        4194303,
        8388607,
        16777215
      ], Cn = 24, Wr = 32, jr = 8, Gr = [
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7
      ];
      Ie("Predictor0", "PredictorAdd0"), H.Predictor0 = function() {
        return 4278190080;
      }, H.Predictor1 = function(i) {
        return i;
      }, H.Predictor2 = function(i, s, h) {
        return s[h + 0];
      }, H.Predictor3 = function(i, s, h) {
        return s[h + 1];
      }, H.Predictor4 = function(i, s, h) {
        return s[h - 1];
      }, H.Predictor5 = function(i, s, h) {
        return Ue(Ue(i, s[h + 1]), s[h + 0]);
      }, H.Predictor6 = function(i, s, h) {
        return Ue(i, s[h - 1]);
      }, H.Predictor7 = function(i, s, h) {
        return Ue(i, s[h + 0]);
      }, H.Predictor8 = function(i, s, h) {
        return Ue(s[h - 1], s[h + 0]);
      }, H.Predictor9 = function(i, s, h) {
        return Ue(s[h + 0], s[h + 1]);
      }, H.Predictor10 = function(i, s, h) {
        return Ue(Ue(i, s[h - 1]), Ue(s[h + 0], s[h + 1]));
      }, H.Predictor11 = function(i, s, h) {
        var g = s[h + 0];
        return 0 >= et(g >> 24 & 255, i >> 24 & 255, (s = s[h - 1]) >> 24 & 255) + et(g >> 16 & 255, i >> 16 & 255, s >> 16 & 255) + et(g >> 8 & 255, i >> 8 & 255, s >> 8 & 255) + et(255 & g, 255 & i, 255 & s) ? g : i;
      }, H.Predictor12 = function(i, s, h) {
        var g = s[h + 0];
        return (yt((i >> 24 & 255) + (g >> 24 & 255) - ((s = s[h - 1]) >> 24 & 255)) << 24 | yt((i >> 16 & 255) + (g >> 16 & 255) - (s >> 16 & 255)) << 16 | yt((i >> 8 & 255) + (g >> 8 & 255) - (s >> 8 & 255)) << 8 | yt((255 & i) + (255 & g) - (255 & s))) >>> 0;
      }, H.Predictor13 = function(i, s, h) {
        var g = s[h - 1];
        return (ft((i = Ue(i, s[h + 0])) >> 24 & 255, g >> 24 & 255) << 24 | ft(i >> 16 & 255, g >> 16 & 255) << 16 | ft(i >> 8 & 255, g >> 8 & 255) << 8 | ft(255 & i, 255 & g)) >>> 0;
      };
      var La = H.PredictorAdd0;
      H.PredictorAdd1 = dt, Ie("Predictor2", "PredictorAdd2"), Ie("Predictor3", "PredictorAdd3"), Ie("Predictor4", "PredictorAdd4"), Ie("Predictor5", "PredictorAdd5"), Ie("Predictor6", "PredictorAdd6"), Ie("Predictor7", "PredictorAdd7"), Ie("Predictor8", "PredictorAdd8"), Ie("Predictor9", "PredictorAdd9"), Ie("Predictor10", "PredictorAdd10"), Ie("Predictor11", "PredictorAdd11"), Ie("Predictor12", "PredictorAdd12"), Ie("Predictor13", "PredictorAdd13");
      var Gi = H.PredictorAdd2;
      qe("ColorIndexInverseTransform", "MapARGB", "32b", function(i) {
        return i >> 8 & 255;
      }, function(i) {
        return i;
      }), qe("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(i) {
        return i;
      }, function(i) {
        return i >> 8 & 255;
      });
      var zt, ho = H.ColorIndexInverseTransform, fr = H.MapARGB, hr = H.VP8LColorIndexInverseTransformAlpha, ka = H.MapAlpha, Ca = H.VP8LPredictorsAdd = [];
      Ca.length = 16, (H.VP8LPredictors = []).length = 16, (H.VP8LPredictorsAdd_C = []).length = 16, (H.VP8LPredictors_C = []).length = 16;
      var Pa, Ea, Vr, Kr, $r, _i, Yr, Ai, Hn, dr, Nt, Lt, Ht, en, Fr, Ia, Vi, po, Kc, $c, Yc, Xc, Jc, Zc, ja, Qc, el, tl, nl = a(511), rl = a(2041), il = a(225), al = a(767), ol = 0, Es = rl, mo = il, Pn = al, Wn = nl, go = 0, vo = 1, sl = 2, bo = 3, wo = 4, Is = 5, cl = 6, js = 7, Fs = 8, yo = 9, Ms = 10, td = [
        2,
        3,
        7
      ], nd = [
        3,
        3,
        11
      ], ll = [
        280,
        256,
        256,
        256,
        40
      ], rd = [
        0,
        1,
        1,
        1,
        0
      ], id = [
        17,
        18,
        0,
        1,
        2,
        3,
        4,
        5,
        16,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ], ad = [
        24,
        7,
        23,
        25,
        40,
        6,
        39,
        41,
        22,
        26,
        38,
        42,
        56,
        5,
        55,
        57,
        21,
        27,
        54,
        58,
        37,
        43,
        72,
        4,
        71,
        73,
        20,
        28,
        53,
        59,
        70,
        74,
        36,
        44,
        88,
        69,
        75,
        52,
        60,
        3,
        87,
        89,
        19,
        29,
        86,
        90,
        35,
        45,
        68,
        76,
        85,
        91,
        51,
        61,
        104,
        2,
        103,
        105,
        18,
        30,
        102,
        106,
        34,
        46,
        84,
        92,
        67,
        77,
        101,
        107,
        50,
        62,
        120,
        1,
        119,
        121,
        83,
        93,
        17,
        31,
        100,
        108,
        66,
        78,
        118,
        122,
        33,
        47,
        117,
        123,
        49,
        63,
        99,
        109,
        82,
        94,
        0,
        116,
        124,
        65,
        79,
        16,
        32,
        98,
        110,
        48,
        115,
        125,
        81,
        95,
        64,
        114,
        126,
        97,
        111,
        80,
        113,
        127,
        96,
        112
      ], od = [
        2954,
        2956,
        2958,
        2962,
        2970,
        2986,
        3018,
        3082,
        3212,
        3468,
        3980,
        5004
      ], sd = 8, Rs = [
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        17,
        18,
        19,
        20,
        20,
        21,
        21,
        22,
        22,
        23,
        23,
        24,
        25,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        91,
        93,
        95,
        96,
        98,
        100,
        101,
        102,
        104,
        106,
        108,
        110,
        112,
        114,
        116,
        118,
        122,
        124,
        126,
        128,
        130,
        132,
        134,
        136,
        138,
        140,
        143,
        145,
        148,
        151,
        154,
        157
      ], Os = [
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        60,
        62,
        64,
        66,
        68,
        70,
        72,
        74,
        76,
        78,
        80,
        82,
        84,
        86,
        88,
        90,
        92,
        94,
        96,
        98,
        100,
        102,
        104,
        106,
        108,
        110,
        112,
        114,
        116,
        119,
        122,
        125,
        128,
        131,
        134,
        137,
        140,
        143,
        146,
        149,
        152,
        155,
        158,
        161,
        164,
        167,
        170,
        173,
        177,
        181,
        185,
        189,
        193,
        197,
        201,
        205,
        209,
        213,
        217,
        221,
        225,
        229,
        234,
        239,
        245,
        249,
        254,
        259,
        264,
        269,
        274,
        279,
        284
      ], Fa = null, cd = [
        [
          173,
          148,
          140,
          0
        ],
        [
          176,
          155,
          140,
          135,
          0
        ],
        [
          180,
          157,
          141,
          134,
          130,
          0
        ],
        [
          254,
          254,
          243,
          230,
          196,
          177,
          153,
          140,
          133,
          130,
          129,
          0
        ]
      ], ld = [
        0,
        1,
        4,
        8,
        5,
        2,
        3,
        6,
        9,
        12,
        13,
        10,
        7,
        11,
        14,
        15
      ], ul = [
        -0,
        1,
        -1,
        2,
        -2,
        3,
        4,
        6,
        -3,
        5,
        -4,
        -5,
        -6,
        7,
        -7,
        8,
        -8,
        -9
      ], ud = [
        [
          [
            [
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              253,
              136,
              254,
              255,
              228,
              219,
              128,
              128,
              128,
              128,
              128
            ],
            [
              189,
              129,
              242,
              255,
              227,
              213,
              255,
              219,
              128,
              128,
              128
            ],
            [
              106,
              126,
              227,
              252,
              214,
              209,
              255,
              255,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              98,
              248,
              255,
              236,
              226,
              255,
              255,
              128,
              128,
              128
            ],
            [
              181,
              133,
              238,
              254,
              221,
              234,
              255,
              154,
              128,
              128,
              128
            ],
            [
              78,
              134,
              202,
              247,
              198,
              180,
              255,
              219,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              185,
              249,
              255,
              243,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              184,
              150,
              247,
              255,
              236,
              224,
              128,
              128,
              128,
              128,
              128
            ],
            [
              77,
              110,
              216,
              255,
              236,
              230,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              101,
              251,
              255,
              241,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              170,
              139,
              241,
              252,
              236,
              209,
              255,
              255,
              128,
              128,
              128
            ],
            [
              37,
              116,
              196,
              243,
              228,
              255,
              255,
              255,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              204,
              254,
              255,
              245,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              207,
              160,
              250,
              255,
              238,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              102,
              103,
              231,
              255,
              211,
              171,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              152,
              252,
              255,
              240,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              177,
              135,
              243,
              255,
              234,
              225,
              128,
              128,
              128,
              128,
              128
            ],
            [
              80,
              129,
              211,
              255,
              194,
              224,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              1,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              246,
              1,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ]
        ],
        [
          [
            [
              198,
              35,
              237,
              223,
              193,
              187,
              162,
              160,
              145,
              155,
              62
            ],
            [
              131,
              45,
              198,
              221,
              172,
              176,
              220,
              157,
              252,
              221,
              1
            ],
            [
              68,
              47,
              146,
              208,
              149,
              167,
              221,
              162,
              255,
              223,
              128
            ]
          ],
          [
            [
              1,
              149,
              241,
              255,
              221,
              224,
              255,
              255,
              128,
              128,
              128
            ],
            [
              184,
              141,
              234,
              253,
              222,
              220,
              255,
              199,
              128,
              128,
              128
            ],
            [
              81,
              99,
              181,
              242,
              176,
              190,
              249,
              202,
              255,
              255,
              128
            ]
          ],
          [
            [
              1,
              129,
              232,
              253,
              214,
              197,
              242,
              196,
              255,
              255,
              128
            ],
            [
              99,
              121,
              210,
              250,
              201,
              198,
              255,
              202,
              128,
              128,
              128
            ],
            [
              23,
              91,
              163,
              242,
              170,
              187,
              247,
              210,
              255,
              255,
              128
            ]
          ],
          [
            [
              1,
              200,
              246,
              255,
              234,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              109,
              178,
              241,
              255,
              231,
              245,
              255,
              255,
              128,
              128,
              128
            ],
            [
              44,
              130,
              201,
              253,
              205,
              192,
              255,
              255,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              132,
              239,
              251,
              219,
              209,
              255,
              165,
              128,
              128,
              128
            ],
            [
              94,
              136,
              225,
              251,
              218,
              190,
              255,
              255,
              128,
              128,
              128
            ],
            [
              22,
              100,
              174,
              245,
              186,
              161,
              255,
              199,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              182,
              249,
              255,
              232,
              235,
              128,
              128,
              128,
              128,
              128
            ],
            [
              124,
              143,
              241,
              255,
              227,
              234,
              128,
              128,
              128,
              128,
              128
            ],
            [
              35,
              77,
              181,
              251,
              193,
              211,
              255,
              205,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              157,
              247,
              255,
              236,
              231,
              255,
              255,
              128,
              128,
              128
            ],
            [
              121,
              141,
              235,
              255,
              225,
              227,
              255,
              255,
              128,
              128,
              128
            ],
            [
              45,
              99,
              188,
              251,
              195,
              217,
              255,
              224,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              1,
              251,
              255,
              213,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              203,
              1,
              248,
              255,
              255,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              137,
              1,
              177,
              255,
              224,
              255,
              128,
              128,
              128,
              128,
              128
            ]
          ]
        ],
        [
          [
            [
              253,
              9,
              248,
              251,
              207,
              208,
              255,
              192,
              128,
              128,
              128
            ],
            [
              175,
              13,
              224,
              243,
              193,
              185,
              249,
              198,
              255,
              255,
              128
            ],
            [
              73,
              17,
              171,
              221,
              161,
              179,
              236,
              167,
              255,
              234,
              128
            ]
          ],
          [
            [
              1,
              95,
              247,
              253,
              212,
              183,
              255,
              255,
              128,
              128,
              128
            ],
            [
              239,
              90,
              244,
              250,
              211,
              209,
              255,
              255,
              128,
              128,
              128
            ],
            [
              155,
              77,
              195,
              248,
              188,
              195,
              255,
              255,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              24,
              239,
              251,
              218,
              219,
              255,
              205,
              128,
              128,
              128
            ],
            [
              201,
              51,
              219,
              255,
              196,
              186,
              128,
              128,
              128,
              128,
              128
            ],
            [
              69,
              46,
              190,
              239,
              201,
              218,
              255,
              228,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              191,
              251,
              255,
              255,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              223,
              165,
              249,
              255,
              213,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              141,
              124,
              248,
              255,
              255,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              16,
              248,
              255,
              255,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              190,
              36,
              230,
              255,
              236,
              255,
              128,
              128,
              128,
              128,
              128
            ],
            [
              149,
              1,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              226,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              247,
              192,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              240,
              128,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              134,
              252,
              255,
              255,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              213,
              62,
              250,
              255,
              255,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              55,
              93,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ],
          [
            [
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ]
        ],
        [
          [
            [
              202,
              24,
              213,
              235,
              186,
              191,
              220,
              160,
              240,
              175,
              255
            ],
            [
              126,
              38,
              182,
              232,
              169,
              184,
              228,
              174,
              255,
              187,
              128
            ],
            [
              61,
              46,
              138,
              219,
              151,
              178,
              240,
              170,
              255,
              216,
              128
            ]
          ],
          [
            [
              1,
              112,
              230,
              250,
              199,
              191,
              247,
              159,
              255,
              255,
              128
            ],
            [
              166,
              109,
              228,
              252,
              211,
              215,
              255,
              174,
              128,
              128,
              128
            ],
            [
              39,
              77,
              162,
              232,
              172,
              180,
              245,
              178,
              255,
              255,
              128
            ]
          ],
          [
            [
              1,
              52,
              220,
              246,
              198,
              199,
              249,
              220,
              255,
              255,
              128
            ],
            [
              124,
              74,
              191,
              243,
              183,
              193,
              250,
              221,
              255,
              255,
              128
            ],
            [
              24,
              71,
              130,
              219,
              154,
              170,
              243,
              182,
              255,
              255,
              128
            ]
          ],
          [
            [
              1,
              182,
              225,
              249,
              219,
              240,
              255,
              224,
              128,
              128,
              128
            ],
            [
              149,
              150,
              226,
              252,
              216,
              205,
              255,
              171,
              128,
              128,
              128
            ],
            [
              28,
              108,
              170,
              242,
              183,
              194,
              254,
              223,
              255,
              255,
              128
            ]
          ],
          [
            [
              1,
              81,
              230,
              252,
              204,
              203,
              255,
              192,
              128,
              128,
              128
            ],
            [
              123,
              102,
              209,
              247,
              188,
              196,
              255,
              233,
              128,
              128,
              128
            ],
            [
              20,
              95,
              153,
              243,
              164,
              173,
              255,
              203,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              222,
              248,
              255,
              216,
              213,
              128,
              128,
              128,
              128,
              128
            ],
            [
              168,
              175,
              246,
              252,
              235,
              205,
              255,
              255,
              128,
              128,
              128
            ],
            [
              47,
              116,
              215,
              255,
              211,
              212,
              255,
              255,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              121,
              236,
              253,
              212,
              214,
              255,
              255,
              128,
              128,
              128
            ],
            [
              141,
              84,
              213,
              252,
              201,
              202,
              255,
              219,
              128,
              128,
              128
            ],
            [
              42,
              80,
              160,
              240,
              162,
              185,
              255,
              205,
              128,
              128,
              128
            ]
          ],
          [
            [
              1,
              1,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              244,
              1,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ],
            [
              238,
              1,
              255,
              128,
              128,
              128,
              128,
              128,
              128,
              128,
              128
            ]
          ]
        ]
      ], fd = [
        [
          [
            231,
            120,
            48,
            89,
            115,
            113,
            120,
            152,
            112
          ],
          [
            152,
            179,
            64,
            126,
            170,
            118,
            46,
            70,
            95
          ],
          [
            175,
            69,
            143,
            80,
            85,
            82,
            72,
            155,
            103
          ],
          [
            56,
            58,
            10,
            171,
            218,
            189,
            17,
            13,
            152
          ],
          [
            114,
            26,
            17,
            163,
            44,
            195,
            21,
            10,
            173
          ],
          [
            121,
            24,
            80,
            195,
            26,
            62,
            44,
            64,
            85
          ],
          [
            144,
            71,
            10,
            38,
            171,
            213,
            144,
            34,
            26
          ],
          [
            170,
            46,
            55,
            19,
            136,
            160,
            33,
            206,
            71
          ],
          [
            63,
            20,
            8,
            114,
            114,
            208,
            12,
            9,
            226
          ],
          [
            81,
            40,
            11,
            96,
            182,
            84,
            29,
            16,
            36
          ]
        ],
        [
          [
            134,
            183,
            89,
            137,
            98,
            101,
            106,
            165,
            148
          ],
          [
            72,
            187,
            100,
            130,
            157,
            111,
            32,
            75,
            80
          ],
          [
            66,
            102,
            167,
            99,
            74,
            62,
            40,
            234,
            128
          ],
          [
            41,
            53,
            9,
            178,
            241,
            141,
            26,
            8,
            107
          ],
          [
            74,
            43,
            26,
            146,
            73,
            166,
            49,
            23,
            157
          ],
          [
            65,
            38,
            105,
            160,
            51,
            52,
            31,
            115,
            128
          ],
          [
            104,
            79,
            12,
            27,
            217,
            255,
            87,
            17,
            7
          ],
          [
            87,
            68,
            71,
            44,
            114,
            51,
            15,
            186,
            23
          ],
          [
            47,
            41,
            14,
            110,
            182,
            183,
            21,
            17,
            194
          ],
          [
            66,
            45,
            25,
            102,
            197,
            189,
            23,
            18,
            22
          ]
        ],
        [
          [
            88,
            88,
            147,
            150,
            42,
            46,
            45,
            196,
            205
          ],
          [
            43,
            97,
            183,
            117,
            85,
            38,
            35,
            179,
            61
          ],
          [
            39,
            53,
            200,
            87,
            26,
            21,
            43,
            232,
            171
          ],
          [
            56,
            34,
            51,
            104,
            114,
            102,
            29,
            93,
            77
          ],
          [
            39,
            28,
            85,
            171,
            58,
            165,
            90,
            98,
            64
          ],
          [
            34,
            22,
            116,
            206,
            23,
            34,
            43,
            166,
            73
          ],
          [
            107,
            54,
            32,
            26,
            51,
            1,
            81,
            43,
            31
          ],
          [
            68,
            25,
            106,
            22,
            64,
            171,
            36,
            225,
            114
          ],
          [
            34,
            19,
            21,
            102,
            132,
            188,
            16,
            76,
            124
          ],
          [
            62,
            18,
            78,
            95,
            85,
            57,
            50,
            48,
            51
          ]
        ],
        [
          [
            193,
            101,
            35,
            159,
            215,
            111,
            89,
            46,
            111
          ],
          [
            60,
            148,
            31,
            172,
            219,
            228,
            21,
            18,
            111
          ],
          [
            112,
            113,
            77,
            85,
            179,
            255,
            38,
            120,
            114
          ],
          [
            40,
            42,
            1,
            196,
            245,
            209,
            10,
            25,
            109
          ],
          [
            88,
            43,
            29,
            140,
            166,
            213,
            37,
            43,
            154
          ],
          [
            61,
            63,
            30,
            155,
            67,
            45,
            68,
            1,
            209
          ],
          [
            100,
            80,
            8,
            43,
            154,
            1,
            51,
            26,
            71
          ],
          [
            142,
            78,
            78,
            16,
            255,
            128,
            34,
            197,
            171
          ],
          [
            41,
            40,
            5,
            102,
            211,
            183,
            4,
            1,
            221
          ],
          [
            51,
            50,
            17,
            168,
            209,
            192,
            23,
            25,
            82
          ]
        ],
        [
          [
            138,
            31,
            36,
            171,
            27,
            166,
            38,
            44,
            229
          ],
          [
            67,
            87,
            58,
            169,
            82,
            115,
            26,
            59,
            179
          ],
          [
            63,
            59,
            90,
            180,
            59,
            166,
            93,
            73,
            154
          ],
          [
            40,
            40,
            21,
            116,
            143,
            209,
            34,
            39,
            175
          ],
          [
            47,
            15,
            16,
            183,
            34,
            223,
            49,
            45,
            183
          ],
          [
            46,
            17,
            33,
            183,
            6,
            98,
            15,
            32,
            183
          ],
          [
            57,
            46,
            22,
            24,
            128,
            1,
            54,
            17,
            37
          ],
          [
            65,
            32,
            73,
            115,
            28,
            128,
            23,
            128,
            205
          ],
          [
            40,
            3,
            9,
            115,
            51,
            192,
            18,
            6,
            223
          ],
          [
            87,
            37,
            9,
            115,
            59,
            77,
            64,
            21,
            47
          ]
        ],
        [
          [
            104,
            55,
            44,
            218,
            9,
            54,
            53,
            130,
            226
          ],
          [
            64,
            90,
            70,
            205,
            40,
            41,
            23,
            26,
            57
          ],
          [
            54,
            57,
            112,
            184,
            5,
            41,
            38,
            166,
            213
          ],
          [
            30,
            34,
            26,
            133,
            152,
            116,
            10,
            32,
            134
          ],
          [
            39,
            19,
            53,
            221,
            26,
            114,
            32,
            73,
            255
          ],
          [
            31,
            9,
            65,
            234,
            2,
            15,
            1,
            118,
            73
          ],
          [
            75,
            32,
            12,
            51,
            192,
            255,
            160,
            43,
            51
          ],
          [
            88,
            31,
            35,
            67,
            102,
            85,
            55,
            186,
            85
          ],
          [
            56,
            21,
            23,
            111,
            59,
            205,
            45,
            37,
            192
          ],
          [
            55,
            38,
            70,
            124,
            73,
            102,
            1,
            34,
            98
          ]
        ],
        [
          [
            125,
            98,
            42,
            88,
            104,
            85,
            117,
            175,
            82
          ],
          [
            95,
            84,
            53,
            89,
            128,
            100,
            113,
            101,
            45
          ],
          [
            75,
            79,
            123,
            47,
            51,
            128,
            81,
            171,
            1
          ],
          [
            57,
            17,
            5,
            71,
            102,
            57,
            53,
            41,
            49
          ],
          [
            38,
            33,
            13,
            121,
            57,
            73,
            26,
            1,
            85
          ],
          [
            41,
            10,
            67,
            138,
            77,
            110,
            90,
            47,
            114
          ],
          [
            115,
            21,
            2,
            10,
            102,
            255,
            166,
            23,
            6
          ],
          [
            101,
            29,
            16,
            10,
            85,
            128,
            101,
            196,
            26
          ],
          [
            57,
            18,
            10,
            102,
            102,
            213,
            34,
            20,
            43
          ],
          [
            117,
            20,
            15,
            36,
            163,
            128,
            68,
            1,
            26
          ]
        ],
        [
          [
            102,
            61,
            71,
            37,
            34,
            53,
            31,
            243,
            192
          ],
          [
            69,
            60,
            71,
            38,
            73,
            119,
            28,
            222,
            37
          ],
          [
            68,
            45,
            128,
            34,
            1,
            47,
            11,
            245,
            171
          ],
          [
            62,
            17,
            19,
            70,
            146,
            85,
            55,
            62,
            70
          ],
          [
            37,
            43,
            37,
            154,
            100,
            163,
            85,
            160,
            1
          ],
          [
            63,
            9,
            92,
            136,
            28,
            64,
            32,
            201,
            85
          ],
          [
            75,
            15,
            9,
            9,
            64,
            255,
            184,
            119,
            16
          ],
          [
            86,
            6,
            28,
            5,
            64,
            255,
            25,
            248,
            1
          ],
          [
            56,
            8,
            17,
            132,
            137,
            255,
            55,
            116,
            128
          ],
          [
            58,
            15,
            20,
            82,
            135,
            57,
            26,
            121,
            40
          ]
        ],
        [
          [
            164,
            50,
            31,
            137,
            154,
            133,
            25,
            35,
            218
          ],
          [
            51,
            103,
            44,
            131,
            131,
            123,
            31,
            6,
            158
          ],
          [
            86,
            40,
            64,
            135,
            148,
            224,
            45,
            183,
            128
          ],
          [
            22,
            26,
            17,
            131,
            240,
            154,
            14,
            1,
            209
          ],
          [
            45,
            16,
            21,
            91,
            64,
            222,
            7,
            1,
            197
          ],
          [
            56,
            21,
            39,
            155,
            60,
            138,
            23,
            102,
            213
          ],
          [
            83,
            12,
            13,
            54,
            192,
            255,
            68,
            47,
            28
          ],
          [
            85,
            26,
            85,
            85,
            128,
            128,
            32,
            146,
            171
          ],
          [
            18,
            11,
            7,
            63,
            144,
            171,
            4,
            4,
            246
          ],
          [
            35,
            27,
            10,
            146,
            174,
            171,
            12,
            26,
            128
          ]
        ],
        [
          [
            190,
            80,
            35,
            99,
            180,
            80,
            126,
            54,
            45
          ],
          [
            85,
            126,
            47,
            87,
            176,
            51,
            41,
            20,
            32
          ],
          [
            101,
            75,
            128,
            139,
            118,
            146,
            116,
            128,
            85
          ],
          [
            56,
            41,
            15,
            176,
            236,
            85,
            37,
            9,
            62
          ],
          [
            71,
            30,
            17,
            119,
            118,
            255,
            17,
            18,
            138
          ],
          [
            101,
            38,
            60,
            138,
            55,
            70,
            43,
            26,
            142
          ],
          [
            146,
            36,
            19,
            30,
            171,
            255,
            97,
            27,
            20
          ],
          [
            138,
            45,
            61,
            62,
            219,
            1,
            81,
            188,
            64
          ],
          [
            32,
            41,
            20,
            117,
            151,
            142,
            20,
            21,
            163
          ],
          [
            112,
            19,
            12,
            61,
            195,
            128,
            48,
            4,
            24
          ]
        ]
      ], hd = [
        [
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              176,
              246,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              223,
              241,
              252,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              249,
              253,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              244,
              252,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              234,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              246,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              239,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              248,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              251,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              251,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              253,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              250,
              255,
              254,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ]
        ],
        [
          [
            [
              217,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              225,
              252,
              241,
              253,
              255,
              255,
              254,
              255,
              255,
              255,
              255
            ],
            [
              234,
              250,
              241,
              250,
              253,
              255,
              253,
              254,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              223,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              238,
              253,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              248,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              249,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              247,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              252,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              250,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ]
        ],
        [
          [
            [
              186,
              251,
              250,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              234,
              251,
              244,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              251,
              251,
              243,
              253,
              254,
              255,
              254,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              236,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              251,
              253,
              253,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ]
        ],
        [
          [
            [
              248,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              250,
              254,
              252,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              248,
              254,
              249,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              253,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              246,
              253,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              252,
              254,
              251,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              254,
              252,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              248,
              254,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              253,
              255,
              254,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              251,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              245,
              251,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              253,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              251,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              252,
              253,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              252,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              249,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              253,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              250,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ],
          [
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              254,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ],
            [
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255,
              255
            ]
          ]
        ]
      ], dd = [
        0,
        1,
        2,
        3,
        6,
        4,
        5,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        7,
        0
      ], Xr = [], Qn = [], Mr = [], pd = 1, fl = 2, Jr = [], Gn = [];
      Er("UpsampleRgbLinePair", zr, 3), Er("UpsampleBgrLinePair", ln, 3), Er("UpsampleRgbaLinePair", wn, 4), Er("UpsampleBgraLinePair", _a, 4), Er("UpsampleArgbLinePair", Na, 4), Er("UpsampleRgba4444LinePair", yi, 2), Er("UpsampleRgb565LinePair", wi, 2);
      var md = H.UpsampleRgbLinePair, gd = H.UpsampleBgrLinePair, hl = H.UpsampleRgbaLinePair, dl = H.UpsampleBgraLinePair, pl = H.UpsampleArgbLinePair, ml = H.UpsampleRgba4444LinePair, vd = H.UpsampleRgb565LinePair, xo = 16, No = 1 << xo - 1, Ma = -227, Ts = 482, bd = 6, gl = 0, wd = a(256), yd = a(256), xd = a(256), Nd = a(256), _d = a(Ts - Ma), Ad = a(Ts - Ma);
      Ir("YuvToRgbRow", zr, 3), Ir("YuvToBgrRow", ln, 3), Ir("YuvToRgbaRow", wn, 4), Ir("YuvToBgraRow", _a, 4), Ir("YuvToArgbRow", Na, 4), Ir("YuvToRgba4444Row", yi, 2), Ir("YuvToRgb565Row", wi, 2);
      var vl = [
        0,
        4,
        8,
        12,
        128,
        132,
        136,
        140,
        256,
        260,
        264,
        268,
        384,
        388,
        392,
        396
      ], _o = [
        0,
        2,
        8
      ], Sd = [
        8,
        7,
        6,
        4,
        4,
        2,
        2,
        2,
        1,
        1,
        1,
        1
      ], Ld = 1;
      this.WebPDecodeRGBA = function(i, s, h, g, b) {
        var y = vo, _ = new pe(), k = new ut();
        _.ba = k, k.S = y, k.width = [
          k.width
        ], k.height = [
          k.height
        ];
        var C = k.width, M = k.height, K = new Ke();
        if (K == null || i == null) var ie = 2;
        else e(K != null), ie = xi(i, s, h, K.width, K.height, K.Pd, K.Qd, K.format, null);
        if (ie != 0 ? C = 0 : (C != null && (C[0] = K.width[0]), M != null && (M[0] = K.height[0]), C = 1), C) {
          k.width = k.width[0], k.height = k.height[0], g != null && (g[0] = k.width), b != null && (b[0] = k.height);
          e: {
            if (g = new Di(), (b = new ye()).data = i, b.w = s, b.ha = h, b.kd = 1, s = [
              0
            ], e(b != null), ((i = xi(b.data, b.w, b.ha, null, null, null, s, null, b)) == 0 || i == 7) && s[0] && (i = 4), (s = i) == 0) {
              if (e(_ != null), g.data = b.data, g.w = b.w + b.offset, g.ha = b.ha - b.offset, g.put = $e, g.ac = ar, g.bc = yr, g.ma = _, b.xa) {
                if ((i = ui()) == null) {
                  _ = 1;
                  break e;
                }
                if (function(R, X) {
                  var ee = [
                    0
                  ], fe = [
                    0
                  ], re = [
                    0
                  ];
                  t: for (; ; ) {
                    if (R == null) return 0;
                    if (X == null) return R.a = 2, 0;
                    if (R.l = X, R.a = 0, te(R.m, X.data, X.w, X.ha), !xr(R.m, ee, fe, re)) {
                      R.a = 3;
                      break t;
                    }
                    if (R.xb = fl, X.width = ee[0], X.height = fe[0], !sr(ee[0], fe[0], 1, R, null)) break t;
                    return 1;
                  }
                  return e(R.a != 0), 0;
                }(i, g)) {
                  if (g = (s = Hr(g.width, g.height, _.Oa, _.ba)) == 0) {
                    t: {
                      g = i;
                      n: for (; ; ) {
                        if (g == null) {
                          g = 0;
                          break t;
                        }
                        if (e(g.s.yc != null), e(g.s.Ya != null), e(0 < g.s.Wb), e((h = g.l) != null), e((b = h.ma) != null), g.xb != 0) {
                          if (g.ca = b.ba, g.tb = b.tb, e(g.ca != null), !Aa(b.Oa, h, bo)) {
                            g.a = 2;
                            break n;
                          }
                          if (!fi(g, h.width) || h.da) break n;
                          if ((h.da || Ye(g.ca.S)) && Zn(), 11 > g.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), g.ca.f.kb.F != null && Zn()), g.Pb && 0 < g.s.ua && g.s.vb.X == null && !F(g.s.vb, g.s.Wa.Xa)) {
                            g.a = 1;
                            break n;
                          }
                          g.xb = 0;
                        }
                        if (!Xn(g, g.V, g.Ba, g.c, g.i, h.o, qr)) break n;
                        b.Dc = g.Ma, g = 1;
                        break t;
                      }
                      e(g.a != 0), g = 0;
                    }
                    g = !g;
                  }
                  g && (s = i.a);
                } else s = i.a;
              } else {
                if ((i = new ms()) == null) {
                  _ = 1;
                  break e;
                }
                if (i.Fa = b.na, i.P = b.P, i.qc = b.Sa, lr(i, g)) {
                  if ((s = Hr(g.width, g.height, _.Oa, _.ba)) == 0) {
                    if (i.Aa = 0, h = _.Oa, e((b = i) != null), h != null) {
                      if (0 < (C = 0 > (C = h.Md) ? 0 : 100 < C ? 255 : 255 * C / 100)) {
                        for (M = K = 0; 4 > M; ++M) 12 > (ie = b.pb[M]).lc && (ie.ia = C * Sd[0 > ie.lc ? 0 : ie.lc] >> 3), K |= ie.ia;
                        K && (alert("todo:VP8InitRandom"), b.ia = 1);
                      }
                      b.Ga = h.Id, 100 < b.Ga ? b.Ga = 100 : 0 > b.Ga && (b.Ga = 0);
                    }
                    (function(R, X) {
                      if (R == null) return 0;
                      if (X == null) return Yt(R, 2, "NULL VP8Io parameter in VP8Decode().");
                      if (!R.cb && !lr(R, X)) return 0;
                      if (e(R.cb), X.ac == null || X.ac(X)) {
                        X.ob && (R.L = 0);
                        var ee = _o[R.L];
                        if (R.L == 2 ? (R.yb = 0, R.zb = 0) : (R.yb = X.v - ee >> 4, R.zb = X.j - ee >> 4, 0 > R.yb && (R.yb = 0), 0 > R.zb && (R.zb = 0)), R.Va = X.o + 15 + ee >> 4, R.Hb = X.va + 15 + ee >> 4, R.Hb > R.za && (R.Hb = R.za), R.Va > R.Ub && (R.Va = R.Ub), 0 < R.L) {
                          var fe = R.ed;
                          for (ee = 0; 4 > ee; ++ee) {
                            var re;
                            if (R.Qa.Cb) {
                              var de = R.Qa.Lb[ee];
                              R.Qa.Fb || (de += fe.Tb);
                            } else de = fe.Tb;
                            for (re = 0; 1 >= re; ++re) {
                              var me = R.gd[ee][re], _e = de;
                              if (fe.Pc && (_e += fe.vd[0], re && (_e += fe.od[0])), 0 < (_e = 0 > _e ? 0 : 63 < _e ? 63 : _e)) {
                                var xe = _e;
                                0 < fe.wb && (xe = 4 < fe.wb ? xe >> 2 : xe >> 1) > 9 - fe.wb && (xe = 9 - fe.wb), 1 > xe && (xe = 1), me.dd = xe, me.tc = 2 * _e + xe, me.ld = 40 <= _e ? 2 : 15 <= _e ? 1 : 0;
                              } else me.tc = 0;
                              me.La = re;
                            }
                          }
                        }
                        ee = 0;
                      } else Yt(R, 6, "Frame setup failed"), ee = R.a;
                      if (ee = ee == 0) {
                        if (ee) {
                          R.$c = 0, 0 < R.Aa || (R.Ic = Ld);
                          t: {
                            ee = R.Ic, fe = 4 * (xe = R.za);
                            var De = 32 * xe, Ee = xe + 1, at = 0 < R.L ? xe * (0 < R.Aa ? 2 : 1) : 0, Me = (R.Aa == 2 ? 2 : 1) * xe;
                            if ((me = fe + 832 + (re = 3 * (16 * ee + _o[R.L]) / 2 * De) + (de = R.Fa != null && 0 < R.Fa.length ? R.Kc.c * R.Kc.i : 0)) != me) ee = 0;
                            else {
                              if (me > R.Vb) {
                                if (R.Vb = 0, R.Ec = a(me), R.Fc = 0, R.Ec == null) {
                                  ee = Yt(R, 1, "no memory during frame initialization.");
                                  break t;
                                }
                                R.Vb = me;
                              }
                              me = R.Ec, _e = R.Fc, R.Ac = me, R.Bc = _e, _e += fe, R.Gd = f(De, Za), R.Hd = 0, R.rb = f(Ee + 1, fa), R.sb = 1, R.wa = at ? f(at, qn) : null, R.Y = 0, R.D.Nb = 0, R.D.wa = R.wa, R.D.Y = R.Y, 0 < R.Aa && (R.D.Y += xe), e(true), R.oc = me, R.pc = _e, _e += 832, R.ya = f(Me, ha), R.aa = 0, R.D.ya = R.ya, R.D.aa = R.aa, R.Aa == 2 && (R.D.aa += xe), R.R = 16 * xe, R.B = 8 * xe, xe = (De = _o[R.L]) * R.R, De = De / 2 * R.B, R.sa = me, R.ta = _e + xe, R.qa = R.sa, R.ra = R.ta + 16 * ee * R.R + De, R.Ha = R.qa, R.Ia = R.ra + 8 * ee * R.B + De, R.$c = 0, _e += re, R.mb = de ? me : null, R.nb = de ? _e : null, e(_e + de <= R.Fc + R.Vb), to(R), o(R.Ac, R.Bc, 0, fe), ee = 1;
                            }
                          }
                          if (ee) {
                            if (X.ka = 0, X.y = R.sa, X.O = R.ta, X.f = R.qa, X.N = R.ra, X.ea = R.Ha, X.Vd = R.Ia, X.fa = R.R, X.Rc = R.B, X.F = null, X.J = 0, !ol) {
                              for (ee = -255; 255 >= ee; ++ee) nl[255 + ee] = 0 > ee ? -ee : ee;
                              for (ee = -1020; 1020 >= ee; ++ee) rl[1020 + ee] = -128 > ee ? -128 : 127 < ee ? 127 : ee;
                              for (ee = -112; 112 >= ee; ++ee) il[112 + ee] = -16 > ee ? -16 : 15 < ee ? 15 : ee;
                              for (ee = -255; 510 >= ee; ++ee) al[255 + ee] = 0 > ee ? 0 : 255 < ee ? 255 : ee;
                              ol = 1;
                            }
                            Yr = qi, Ai = vs, dr = ur, Nt = ro, Lt = io, Hn = gs, Ht = lo, en = gi, Fr = v, Ia = O, Vi = uo, po = l, Kc = W, $c = Z, Yc = mi, Xc = ya, Jc = so, Zc = co, Qn[0] = Ss, Qn[1] = bs, Qn[2] = _s, Qn[3] = As, Qn[4] = _r, Qn[5] = Ls, Qn[6] = Ar, Qn[7] = ks, Qn[8] = ma, Qn[9] = Ui, Xr[0] = xs, Xr[1] = ys, Xr[2] = da, Xr[3] = ao, Xr[4] = di, Xr[5] = pa, Xr[6] = Ns, Mr[0] = Ps, Mr[1] = ws, Mr[2] = pi, Mr[3] = Cs, Mr[4] = va, Mr[5] = ga, Mr[6] = oo, ee = 1;
                          } else ee = 0;
                        }
                        ee && (ee = function(pt, tn) {
                          for (pt.M = 0; pt.M < pt.Va; ++pt.M) {
                            var ot, Re = pt.Jc[pt.M & pt.Xb], Le = pt.m, Wt = pt;
                            for (ot = 0; ot < Wt.za; ++ot) {
                              var nt = Le, mt = Wt, jt = mt.Ac, un = mt.Bc + 4 * ot, yn = mt.zc, Dt = mt.ya[mt.aa + ot];
                              if (mt.Qa.Bb ? Dt.$b = ve(nt, mt.Pa.jb[0]) ? 2 + ve(nt, mt.Pa.jb[2]) : ve(nt, mt.Pa.jb[1]) : Dt.$b = 0, mt.kc && (Dt.Ad = ve(nt, mt.Bd)), Dt.Za = !ve(nt, 145) + 0, Dt.Za) {
                                var pn = Dt.Ob, xn = 0;
                                for (mt = 0; 4 > mt; ++mt) {
                                  var nn, bt = yn[0 + mt];
                                  for (nn = 0; 4 > nn; ++nn) {
                                    bt = fd[jt[un + nn]][bt];
                                    for (var _t = ul[ve(nt, bt[0])]; 0 < _t; ) _t = ul[2 * _t + ve(nt, bt[_t])];
                                    bt = -_t, jt[un + nn] = bt;
                                  }
                                  r(pn, xn, jt, un, 4), xn += 4, yn[0 + mt] = bt;
                                }
                              } else bt = ve(nt, 156) ? ve(nt, 128) ? 1 : 3 : ve(nt, 163) ? 2 : 0, Dt.Ob[0] = bt, o(jt, un, bt, 4), o(yn, 0, bt, 4);
                              Dt.Dd = ve(nt, 142) ? ve(nt, 114) ? ve(nt, 183) ? 1 : 3 : 2 : 0;
                            }
                            if (Wt.m.Ka) return Yt(pt, 7, "Premature end-of-partition0 encountered.");
                            for (; pt.ja < pt.za; ++pt.ja) {
                              if (Wt = Re, nt = (Le = pt).rb[Le.sb - 1], jt = Le.rb[Le.sb + Le.ja], ot = Le.ya[Le.aa + Le.ja], un = Le.kc ? ot.Ad : 0) nt.la = jt.la = 0, ot.Za || (nt.Na = jt.Na = 0), ot.Hc = 0, ot.Gc = 0, ot.ia = 0;
                              else {
                                var Bt, At;
                                if (nt = jt, jt = Wt, un = Le.Pa.Xc, yn = Le.ya[Le.aa + Le.ja], Dt = Le.pb[yn.$b], mt = yn.ad, pn = 0, xn = Le.rb[Le.sb - 1], bt = nn = 0, o(mt, pn, 0, 384), yn.Za) var fn = 0, er = un[3];
                                else {
                                  _t = a(16);
                                  var Gt = nt.Na + xn.Na;
                                  if (Gt = Fa(jt, un[1], Gt, Dt.Eb, 0, _t, 0), nt.Na = xn.Na = (0 < Gt) + 0, 1 < Gt) Yr(_t, 0, mt, pn);
                                  else {
                                    var An = _t[0] + 3 >> 3;
                                    for (_t = 0; 256 > _t; _t += 16) mt[pn + _t] = An;
                                  }
                                  fn = 1, er = un[0];
                                }
                                var kt = 15 & nt.la, rn = 15 & xn.la;
                                for (_t = 0; 4 > _t; ++_t) {
                                  var En = 1 & rn;
                                  for (An = At = 0; 4 > An; ++An) kt = kt >> 1 | (En = (Gt = Fa(jt, er, Gt = En + (1 & kt), Dt.Sc, fn, mt, pn)) > fn) << 7, At = At << 2 | (3 < Gt ? 3 : 1 < Gt ? 2 : mt[pn + 0] != 0), pn += 16;
                                  kt >>= 4, rn = rn >> 1 | En << 7, nn = (nn << 8 | At) >>> 0;
                                }
                                for (er = kt, fn = rn >> 4, Bt = 0; 4 > Bt; Bt += 2) {
                                  for (At = 0, kt = nt.la >> 4 + Bt, rn = xn.la >> 4 + Bt, _t = 0; 2 > _t; ++_t) {
                                    for (En = 1 & rn, An = 0; 2 > An; ++An) Gt = En + (1 & kt), kt = kt >> 1 | (En = 0 < (Gt = Fa(jt, un[2], Gt, Dt.Qc, 0, mt, pn))) << 3, At = At << 2 | (3 < Gt ? 3 : 1 < Gt ? 2 : mt[pn + 0] != 0), pn += 16;
                                    kt >>= 2, rn = rn >> 1 | En << 5;
                                  }
                                  bt |= At << 4 * Bt, er |= kt << 4 << Bt, fn |= (240 & rn) << Bt;
                                }
                                nt.la = er, xn.la = fn, yn.Hc = nn, yn.Gc = bt, yn.ia = 43690 & bt ? 0 : Dt.ia, un = !(nn | bt);
                              }
                              if (0 < Le.L && (Le.wa[Le.Y + Le.ja] = Le.gd[ot.$b][ot.Za], Le.wa[Le.Y + Le.ja].La |= !un), Wt.Ka) return Yt(pt, 7, "Premature end-of-file encountered.");
                            }
                            if (to(pt), Le = tn, Wt = 1, ot = (Re = pt).D, nt = 0 < Re.L && Re.M >= Re.zb && Re.M <= Re.Va, Re.Aa == 0) t: {
                              if (ot.M = Re.M, ot.uc = nt, zn(Re, ot), Wt = 1, ot = (At = Re.D).Nb, nt = (bt = _o[Re.L]) * Re.R, jt = bt / 2 * Re.B, _t = 16 * ot * Re.R, An = 8 * ot * Re.B, un = Re.sa, yn = Re.ta - nt + _t, Dt = Re.qa, mt = Re.ra - jt + An, pn = Re.Ha, xn = Re.Ia - jt + An, rn = (kt = At.M) == 0, nn = kt >= Re.Va - 1, Re.Aa == 2 && zn(Re, At), At.uc) for (En = (Gt = Re).D.M, e(Gt.D.uc), At = Gt.yb; At < Gt.Hb; ++At) {
                                fn = At, er = En;
                                var Nn = (In = (hn = Gt).D).Nb;
                                Bt = hn.R;
                                var In = In.wa[In.Y + fn], jn = hn.sa, Sn = hn.ta + 16 * Nn * Bt + 16 * fn, Fn = In.dd, It = In.tc;
                                if (It != 0) if (e(3 <= It), hn.L == 1) 0 < fn && Xc(jn, Sn, Bt, It + 4), In.La && Zc(jn, Sn, Bt, It), 0 < er && Yc(jn, Sn, Bt, It + 4), In.La && Jc(jn, Sn, Bt, It);
                                else {
                                  var Mn = hn.B, tr = hn.qa, Si = hn.ra + 8 * Nn * Mn + 8 * fn, Rr = hn.Ha, hn = hn.Ia + 8 * Nn * Mn + 8 * fn;
                                  Nn = In.ld, 0 < fn && (en(jn, Sn, Bt, It + 4, Fn, Nn), Ia(tr, Si, Rr, hn, Mn, It + 4, Fn, Nn)), In.La && (po(jn, Sn, Bt, It, Fn, Nn), $c(tr, Si, Rr, hn, Mn, It, Fn, Nn)), 0 < er && (Ht(jn, Sn, Bt, It + 4, Fn, Nn), Fr(tr, Si, Rr, hn, Mn, It + 4, Fn, Nn)), In.La && (Vi(jn, Sn, Bt, It, Fn, Nn), Kc(tr, Si, Rr, hn, Mn, It, Fn, Nn));
                                }
                              }
                              if (Re.ia && alert("todo:DitherRow"), Le.put != null) {
                                if (At = 16 * kt, kt = 16 * (kt + 1), rn ? (Le.y = Re.sa, Le.O = Re.ta + _t, Le.f = Re.qa, Le.N = Re.ra + An, Le.ea = Re.Ha, Le.W = Re.Ia + An) : (At -= bt, Le.y = un, Le.O = yn, Le.f = Dt, Le.N = mt, Le.ea = pn, Le.W = xn), nn || (kt -= bt), kt > Le.o && (kt = Le.o), Le.F = null, Le.J = null, Re.Fa != null && 0 < Re.Fa.length && At < kt && (Le.J = Et(Re, Le, At, kt - At), Le.F = Re.mb, Le.F == null && Le.F.length == 0)) {
                                  Wt = Yt(Re, 3, "Could not decode alpha data.");
                                  break t;
                                }
                                At < Le.j && (bt = Le.j - At, At = Le.j, e(!(1 & bt)), Le.O += Re.R * bt, Le.N += Re.B * (bt >> 1), Le.W += Re.B * (bt >> 1), Le.F != null && (Le.J += Le.width * bt)), At < kt && (Le.O += Le.v, Le.N += Le.v >> 1, Le.W += Le.v >> 1, Le.F != null && (Le.J += Le.v), Le.ka = At - Le.j, Le.U = Le.va - Le.v, Le.T = kt - At, Wt = Le.put(Le));
                              }
                              ot + 1 != Re.Ic || nn || (r(Re.sa, Re.ta - nt, un, yn + 16 * Re.R, nt), r(Re.qa, Re.ra - jt, Dt, mt + 8 * Re.B, jt), r(Re.Ha, Re.Ia - jt, pn, xn + 8 * Re.B, jt));
                            }
                            if (!Wt) return Yt(pt, 6, "Output aborted.");
                          }
                          return 1;
                        }(R, X)), X.bc != null && X.bc(X), ee &= 1;
                      }
                      return ee ? (R.cb = 0, ee) : 0;
                    })(i, g) || (s = i.a);
                  }
                } else s = i.a;
              }
              s == 0 && _.Oa != null && _.Oa.fd && (s = Sa(_.ba));
            }
            _ = s;
          }
          y = _ != 0 ? null : 11 > y ? k.f.RGBA.eb : k.f.kb.y;
        } else y = null;
        return y;
      };
      var bl = [
        3,
        4,
        3,
        4,
        4,
        2,
        2,
        4,
        4,
        4,
        2,
        1,
        1
      ];
    };
    function d(H, V) {
      for (var x = "", I = 0; I < 4; I++) x += String.fromCharCode(H[V++]);
      return x;
    }
    function m(H, V) {
      return H[V + 0] | H[V + 1] << 8;
    }
    function w(H, V) {
      return (H[V + 0] | H[V + 1] << 8 | H[V + 2] << 16) >>> 0;
    }
    function S(H, V) {
      return (H[V + 0] | H[V + 1] << 8 | H[V + 2] << 16 | H[V + 3] << 24) >>> 0;
    }
    new u();
    var p = [
      0
    ], E = [
      0
    ], L = [], j = new u(), N = n, z = function(H, V) {
      var x = {}, I = 0, B = false, U = 0, se = 0;
      if (x.frames = [], !function(A, T) {
        for (var q = 0; q < 4; q++) if (A[T + q] != "RIFF".charCodeAt(q)) return true;
        return false;
      }(H, V)) {
        for (S(H, V += 4), V += 8; V < H.length; ) {
          var le = d(H, V), ge = S(H, V += 4);
          V += 4;
          var ne = ge + (1 & ge);
          switch (le) {
            case "VP8 ":
            case "VP8L":
              x.frames[I] === void 0 && (x.frames[I] = {}), (we = x.frames[I]).src_off = B ? se : V - 8, we.src_size = U + ge + 8, I++, B && (B = false, U = 0, se = 0);
              break;
            case "VP8X":
              (we = x.header = {}).feature_flags = H[V];
              var te = V + 4;
              we.canvas_width = 1 + w(H, te), te += 3, we.canvas_height = 1 + w(H, te), te += 3;
              break;
            case "ALPH":
              B = true, U = ne + 8, se = V - 8;
              break;
            case "ANIM":
              (we = x.header).bgcolor = S(H, V), te = V + 4, we.loop_count = m(H, te), te += 2;
              break;
            case "ANMF":
              var Ae, we;
              (we = x.frames[I] = {}).offset_x = 2 * w(H, V), V += 3, we.offset_y = 2 * w(H, V), V += 3, we.width = 1 + w(H, V), V += 3, we.height = 1 + w(H, V), V += 3, we.duration = w(H, V), V += 3, Ae = H[V++], we.dispose = 1 & Ae, we.blend = Ae >> 1 & 1;
          }
          le != "ANMF" && (V += ne);
        }
        return x;
      }
    }(N, 0);
    z.response = N, z.rgbaoutput = true, z.dataurl = false;
    var G = z.header ? z.header : null, D = z.frames ? z.frames : null;
    if (G) {
      G.loop_counter = G.loop_count, p = [
        G.canvas_height
      ], E = [
        G.canvas_width
      ];
      for (var ae = 0; ae < D.length && D[ae].blend != 0; ae++) ;
    }
    var be = D[0], he = j.WebPDecodeRGBA(N, be.src_off, be.src_size, E, p);
    be.rgba = he, be.imgwidth = E[0], be.imgheight = p[0];
    for (var J = 0; J < E[0] * p[0] * 4; J++) L[J] = he[J];
    return this.width = E, this.height = p, this.data = L, this;
  }
  function lm() {
    var n, e = this.internal.__metadata__.metadata, t = unescape(encodeURIComponent(e));
    n = this.internal.__metadata__.rawXml ? t : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + n.length + " >>"), this.internal.write("stream"), this.internal.write(n), this.internal.write("endstream"), this.internal.write("endobj");
  }
  function um() {
    this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
  }
  (function(n) {
    var e, t, r, o, a, f, c, u, d, m = function(A) {
      return A = A || {}, this.isStrokeTransparent = A.isStrokeTransparent || false, this.strokeOpacity = A.strokeOpacity || 1, this.strokeStyle = A.strokeStyle || "#000000", this.fillStyle = A.fillStyle || "#000000", this.isFillTransparent = A.isFillTransparent || false, this.fillOpacity = A.fillOpacity || 1, this.font = A.font || "10px sans-serif", this.textBaseline = A.textBaseline || "alphabetic", this.textAlign = A.textAlign || "left", this.lineWidth = A.lineWidth || 1, this.lineJoin = A.lineJoin || "miter", this.lineCap = A.lineCap || "butt", this.path = A.path || [], this.transform = A.transform !== void 0 ? A.transform.clone() : new u(), this.globalCompositeOperation = A.globalCompositeOperation || "normal", this.globalAlpha = A.globalAlpha || 1, this.clip_path = A.clip_path || [], this.currentPoint = A.currentPoint || new f(), this.miterLimit = A.miterLimit || 10, this.lastPoint = A.lastPoint || new f(), this.lineDashOffset = A.lineDashOffset || 0, this.lineDash = A.lineDash || [], this.margin = A.margin || [
        0,
        0,
        0,
        0
      ], this.prevPageLastElemOffset = A.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof A.ignoreClearRect != "boolean" || A.ignoreClearRect, this;
    };
    n.events.push([
      "initialized",
      function() {
        this.context2d = new w(this), e = this.internal.f2, t = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, o = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, f = this.internal.Point, c = this.internal.Rectangle, u = this.internal.Matrix, d = new m();
      }
    ]);
    var w = function(A) {
      Object.defineProperty(this, "canvas", {
        get: function() {
          return {
            parentNode: false,
            style: false
          };
        }
      });
      var T = A;
      Object.defineProperty(this, "pdf", {
        get: function() {
          return T;
        }
      });
      var q = false;
      Object.defineProperty(this, "pageWrapXEnabled", {
        get: function() {
          return q;
        },
        set: function(F) {
          q = !!F;
        }
      });
      var $ = false;
      Object.defineProperty(this, "pageWrapYEnabled", {
        get: function() {
          return $;
        },
        set: function(F) {
          $ = !!F;
        }
      });
      var Y = 0;
      Object.defineProperty(this, "posX", {
        get: function() {
          return Y;
        },
        set: function(F) {
          isNaN(F) || (Y = F);
        }
      });
      var Q = 0;
      Object.defineProperty(this, "posY", {
        get: function() {
          return Q;
        },
        set: function(F) {
          isNaN(F) || (Q = F);
        }
      }), Object.defineProperty(this, "margin", {
        get: function() {
          return d.margin;
        },
        set: function(F) {
          var ke;
          typeof F == "number" ? ke = [
            F,
            F,
            F,
            F
          ] : ((ke = new Array(4))[0] = F[0], ke[1] = F.length >= 2 ? F[1] : ke[0], ke[2] = F.length >= 3 ? F[2] : ke[0], ke[3] = F.length >= 4 ? F[3] : ke[1]), d.margin = ke;
        }
      });
      var ce = false;
      Object.defineProperty(this, "autoPaging", {
        get: function() {
          return ce;
        },
        set: function(F) {
          ce = F;
        }
      });
      var ue = 0;
      Object.defineProperty(this, "lastBreak", {
        get: function() {
          return ue;
        },
        set: function(F) {
          ue = F;
        }
      });
      var ve = [];
      Object.defineProperty(this, "pageBreaks", {
        get: function() {
          return ve;
        },
        set: function(F) {
          ve = F;
        }
      }), Object.defineProperty(this, "ctx", {
        get: function() {
          return d;
        },
        set: function(F) {
          F instanceof m && (d = F);
        }
      }), Object.defineProperty(this, "path", {
        get: function() {
          return d.path;
        },
        set: function(F) {
          d.path = F;
        }
      });
      var Se = [];
      Object.defineProperty(this, "ctxStack", {
        get: function() {
          return Se;
        },
        set: function(F) {
          Se = F;
        }
      }), Object.defineProperty(this, "fillStyle", {
        get: function() {
          return this.ctx.fillStyle;
        },
        set: function(F) {
          var ke;
          ke = S(F), this.ctx.fillStyle = ke.style, this.ctx.isFillTransparent = ke.a === 0, this.ctx.fillOpacity = ke.a, this.pdf.setFillColor(ke.r, ke.g, ke.b, {
            a: ke.a
          }), this.pdf.setTextColor(ke.r, ke.g, ke.b, {
            a: ke.a
          });
        }
      }), Object.defineProperty(this, "strokeStyle", {
        get: function() {
          return this.ctx.strokeStyle;
        },
        set: function(F) {
          var ke = S(F);
          this.ctx.strokeStyle = ke.style, this.ctx.isStrokeTransparent = ke.a === 0, this.ctx.strokeOpacity = ke.a, ke.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (ke.a, this.pdf.setDrawColor(ke.r, ke.g, ke.b));
        }
      }), Object.defineProperty(this, "lineCap", {
        get: function() {
          return this.ctx.lineCap;
        },
        set: function(F) {
          [
            "butt",
            "round",
            "square"
          ].indexOf(F) !== -1 && (this.ctx.lineCap = F, this.pdf.setLineCap(F));
        }
      }), Object.defineProperty(this, "lineWidth", {
        get: function() {
          return this.ctx.lineWidth;
        },
        set: function(F) {
          isNaN(F) || (this.ctx.lineWidth = F, this.pdf.setLineWidth(F));
        }
      }), Object.defineProperty(this, "lineJoin", {
        get: function() {
          return this.ctx.lineJoin;
        },
        set: function(F) {
          [
            "bevel",
            "round",
            "miter"
          ].indexOf(F) !== -1 && (this.ctx.lineJoin = F, this.pdf.setLineJoin(F));
        }
      }), Object.defineProperty(this, "miterLimit", {
        get: function() {
          return this.ctx.miterLimit;
        },
        set: function(F) {
          isNaN(F) || (this.ctx.miterLimit = F, this.pdf.setMiterLimit(F));
        }
      }), Object.defineProperty(this, "textBaseline", {
        get: function() {
          return this.ctx.textBaseline;
        },
        set: function(F) {
          this.ctx.textBaseline = F;
        }
      }), Object.defineProperty(this, "textAlign", {
        get: function() {
          return this.ctx.textAlign;
        },
        set: function(F) {
          [
            "right",
            "end",
            "center",
            "left",
            "start"
          ].indexOf(F) !== -1 && (this.ctx.textAlign = F);
        }
      });
      var Ce = null, Pe = null, We = null;
      Object.defineProperty(this, "fontFaces", {
        get: function() {
          return We;
        },
        set: function(F) {
          Ce = null, Pe = null, We = F;
        }
      }), Object.defineProperty(this, "font", {
        get: function() {
          return this.ctx.font;
        },
        set: function(F) {
          var ke;
          if (this.ctx.font = F, (ke = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(F)) !== null) {
            var st = ke[1];
            ke[2];
            var Ge = ke[3], Ne = ke[4];
            ke[5];
            var Ve = ke[6], Ie = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ne)[2];
            Ne = Math.floor(Ie === "px" ? parseFloat(Ne) * this.pdf.internal.scaleFactor : Ie === "em" ? parseFloat(Ne) * this.pdf.getFontSize() : parseFloat(Ne) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Ne);
            var He = function(qe) {
              var Ut, gt, ct = [], lt = qe.trim();
              if (lt === "") return wc;
              if (lt in Ou) return [
                Ou[lt]
              ];
              for (; lt !== ""; ) {
                switch (gt = null, Ut = (lt = Du(lt)).charAt(0)) {
                  case '"':
                  case "'":
                    gt = rm(lt.substring(1), Ut);
                    break;
                  default:
                    gt = im(lt);
                }
                if (gt === null || (ct.push(gt[0]), (lt = Du(gt[1])) !== "" && lt.charAt(0) !== ",")) return wc;
                lt = lt.replace(/^,/, "");
              }
              return ct;
            }(Ve);
            if (this.fontFaces) {
              var Ue = function(qe, Ut) {
                var gt = qe.getFontList(), ct = JSON.stringify(gt);
                if (Ce === null || Pe !== ct) {
                  var lt = function(Ft) {
                    var ze = [];
                    return Object.keys(Ft).forEach(function(Pt) {
                      Ft[Pt].forEach(function(Ye) {
                        var tt = null;
                        switch (Ye) {
                          case "bold":
                            tt = {
                              family: Pt,
                              weight: "bold"
                            };
                            break;
                          case "italic":
                            tt = {
                              family: Pt,
                              style: "italic"
                            };
                            break;
                          case "bolditalic":
                            tt = {
                              family: Pt,
                              weight: "bold",
                              style: "italic"
                            };
                            break;
                          case "":
                          case "normal":
                            tt = {
                              family: Pt
                            };
                        }
                        tt !== null && (tt.ref = {
                          name: Pt,
                          style: Ye
                        }, ze.push(tt));
                      });
                    }), ze;
                  }(gt);
                  Ce = function(Ft) {
                    for (var ze = {}, Pt = 0; Pt < Ft.length; ++Pt) {
                      var Ye = bc(Ft[Pt]), tt = Ye.family, Mt = Ye.stretch, ut = Ye.style, Ke = Ye.weight;
                      ze[tt] = ze[tt] || {}, ze[tt][Mt] = ze[tt][Mt] || {}, ze[tt][Mt][ut] = ze[tt][Mt][ut] || {}, ze[tt][Mt][ut][Ke] = Ye;
                    }
                    return ze;
                  }(lt.concat(Ut)), Pe = ct;
                }
                return Ce;
              }(this.pdf, this.fontFaces), yt = He.map(function(qe) {
                return {
                  family: qe,
                  stretch: "normal",
                  weight: Ge,
                  style: st
                };
              }), ft = function(qe, Ut, gt) {
                for (var ct = (gt = gt || {}).defaultFontFamily || "times", lt = Object.assign({}, nm, gt.genericFontFamilies || {}), Ft = null, ze = null, Pt = 0; Pt < Ut.length; ++Pt) if (lt[(Ft = bc(Ut[Pt])).family] && (Ft.family = lt[Ft.family]), qe.hasOwnProperty(Ft.family)) {
                  ze = qe[Ft.family];
                  break;
                }
                if (!(ze = ze || qe[ct])) throw new Error("Could not find a font-family for the rule '" + Tu(Ft) + "' and default family '" + ct + "'.");
                if (ze = function(Ye, tt) {
                  if (tt[Ye]) return tt[Ye];
                  var Mt = Mc[Ye], ut = Mt <= Mc.normal ? -1 : 1, Ke = Ru(tt, Xh, Mt, ut);
                  if (!Ke) throw new Error("Could not find a matching font-stretch value for " + Ye);
                  return Ke;
                }(Ft.stretch, ze), ze = function(Ye, tt) {
                  if (tt[Ye]) return tt[Ye];
                  for (var Mt = Yh[Ye], ut = 0; ut < Mt.length; ++ut) if (tt[Mt[ut]]) return tt[Mt[ut]];
                  throw new Error("Could not find a matching font-style for " + Ye);
                }(Ft.style, ze), !(ze = function(Ye, tt) {
                  if (tt[Ye]) return tt[Ye];
                  if (Ye === 400 && tt[500]) return tt[500];
                  if (Ye === 500 && tt[400]) return tt[400];
                  var Mt = tm[Ye], ut = Ru(tt, Jh, Mt, Ye < 400 ? -1 : 1);
                  if (!ut) throw new Error("Could not find a matching font-weight for value " + Ye);
                  return ut;
                }(Ft.weight, ze))) throw new Error("Failed to resolve a font for the rule '" + Tu(Ft) + "'.");
                return ze;
              }(Ue, yt);
              this.pdf.setFont(ft.ref.name, ft.ref.style);
            } else {
              var et = "";
              (Ge === "bold" || parseInt(Ge, 10) >= 700 || st === "bold") && (et = "bold"), st === "italic" && (et += "italic"), et.length === 0 && (et = "normal");
              for (var dt = "", ht = {
                arial: "Helvetica",
                Arial: "Helvetica",
                verdana: "Helvetica",
                Verdana: "Helvetica",
                helvetica: "Helvetica",
                Helvetica: "Helvetica",
                "sans-serif": "Helvetica",
                fixed: "Courier",
                monospace: "Courier",
                terminal: "Courier",
                cursive: "Times",
                fantasy: "Times",
                serif: "Times"
              }, Oe = 0; Oe < He.length; Oe++) {
                if (this.pdf.internal.getFont(He[Oe], et, {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) {
                  dt = He[Oe];
                  break;
                }
                if (et === "bolditalic" && this.pdf.internal.getFont(He[Oe], "bold", {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) dt = He[Oe], et = "bold";
                else if (this.pdf.internal.getFont(He[Oe], "normal", {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) {
                  dt = He[Oe], et = "normal";
                  break;
                }
              }
              if (dt === "") {
                for (var rt = 0; rt < He.length; rt++) if (ht[He[rt]]) {
                  dt = ht[He[rt]];
                  break;
                }
              }
              dt = dt === "" ? "Times" : dt, this.pdf.setFont(dt, et);
            }
          }
        }
      }), Object.defineProperty(this, "globalCompositeOperation", {
        get: function() {
          return this.ctx.globalCompositeOperation;
        },
        set: function(F) {
          this.ctx.globalCompositeOperation = F;
        }
      }), Object.defineProperty(this, "globalAlpha", {
        get: function() {
          return this.ctx.globalAlpha;
        },
        set: function(F) {
          this.ctx.globalAlpha = F;
        }
      }), Object.defineProperty(this, "lineDashOffset", {
        get: function() {
          return this.ctx.lineDashOffset;
        },
        set: function(F) {
          this.ctx.lineDashOffset = F, we.call(this);
        }
      }), Object.defineProperty(this, "lineDash", {
        get: function() {
          return this.ctx.lineDash;
        },
        set: function(F) {
          this.ctx.lineDash = F, we.call(this);
        }
      }), Object.defineProperty(this, "ignoreClearRect", {
        get: function() {
          return this.ctx.ignoreClearRect;
        },
        set: function(F) {
          this.ctx.ignoreClearRect = !!F;
        }
      });
    };
    w.prototype.setLineDash = function(A) {
      this.lineDash = A;
    }, w.prototype.getLineDash = function() {
      return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
    }, w.prototype.fill = function() {
      D.call(this, "fill", false);
    }, w.prototype.stroke = function() {
      D.call(this, "stroke", false);
    }, w.prototype.beginPath = function() {
      this.path = [
        {
          type: "begin"
        }
      ];
    }, w.prototype.moveTo = function(A, T) {
      if (isNaN(A) || isNaN(T)) throw Ct.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
      var q = this.ctx.transform.applyToPoint(new f(A, T));
      this.path.push({
        type: "mt",
        x: q.x,
        y: q.y
      }), this.ctx.lastPoint = new f(A, T);
    }, w.prototype.closePath = function() {
      var A = new f(0, 0), T = 0;
      for (T = this.path.length - 1; T !== -1; T--) if (this.path[T].type === "begin" && St(this.path[T + 1]) === "object" && typeof this.path[T + 1].x == "number") {
        A = new f(this.path[T + 1].x, this.path[T + 1].y);
        break;
      }
      this.path.push({
        type: "close"
      }), this.ctx.lastPoint = new f(A.x, A.y);
    }, w.prototype.lineTo = function(A, T) {
      if (isNaN(A) || isNaN(T)) throw Ct.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
      var q = this.ctx.transform.applyToPoint(new f(A, T));
      this.path.push({
        type: "lt",
        x: q.x,
        y: q.y
      }), this.ctx.lastPoint = new f(q.x, q.y);
    }, w.prototype.clip = function() {
      this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), D.call(this, null, true);
    }, w.prototype.quadraticCurveTo = function(A, T, q, $) {
      if (isNaN(q) || isNaN($) || isNaN(A) || isNaN(T)) throw Ct.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
      var Y = this.ctx.transform.applyToPoint(new f(q, $)), Q = this.ctx.transform.applyToPoint(new f(A, T));
      this.path.push({
        type: "qct",
        x1: Q.x,
        y1: Q.y,
        x: Y.x,
        y: Y.y
      }), this.ctx.lastPoint = new f(Y.x, Y.y);
    }, w.prototype.bezierCurveTo = function(A, T, q, $, Y, Q) {
      if (isNaN(Y) || isNaN(Q) || isNaN(A) || isNaN(T) || isNaN(q) || isNaN($)) throw Ct.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
      var ce = this.ctx.transform.applyToPoint(new f(Y, Q)), ue = this.ctx.transform.applyToPoint(new f(A, T)), ve = this.ctx.transform.applyToPoint(new f(q, $));
      this.path.push({
        type: "bct",
        x1: ue.x,
        y1: ue.y,
        x2: ve.x,
        y2: ve.y,
        x: ce.x,
        y: ce.y
      }), this.ctx.lastPoint = new f(ce.x, ce.y);
    }, w.prototype.arc = function(A, T, q, $, Y, Q) {
      if (isNaN(A) || isNaN(T) || isNaN(q) || isNaN($) || isNaN(Y)) throw Ct.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
      if (Q = !!Q, !this.ctx.transform.isIdentity) {
        var ce = this.ctx.transform.applyToPoint(new f(A, T));
        A = ce.x, T = ce.y;
        var ue = this.ctx.transform.applyToPoint(new f(0, q)), ve = this.ctx.transform.applyToPoint(new f(0, 0));
        q = Math.sqrt(Math.pow(ue.x - ve.x, 2) + Math.pow(ue.y - ve.y, 2));
      }
      Math.abs(Y - $) >= 2 * Math.PI && ($ = 0, Y = 2 * Math.PI), this.path.push({
        type: "arc",
        x: A,
        y: T,
        radius: q,
        startAngle: $,
        endAngle: Y,
        counterclockwise: Q
      });
    }, w.prototype.arcTo = function(A, T, q, $, Y) {
      throw new Error("arcTo not implemented.");
    }, w.prototype.rect = function(A, T, q, $) {
      if (isNaN(A) || isNaN(T) || isNaN(q) || isNaN($)) throw Ct.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
      this.moveTo(A, T), this.lineTo(A + q, T), this.lineTo(A + q, T + $), this.lineTo(A, T + $), this.lineTo(A, T), this.lineTo(A + q, T), this.lineTo(A, T);
    }, w.prototype.fillRect = function(A, T, q, $) {
      if (isNaN(A) || isNaN(T) || isNaN(q) || isNaN($)) throw Ct.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
      if (!p.call(this)) {
        var Y = {};
        this.lineCap !== "butt" && (Y.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Y.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(A, T, q, $), this.fill(), Y.hasOwnProperty("lineCap") && (this.lineCap = Y.lineCap), Y.hasOwnProperty("lineJoin") && (this.lineJoin = Y.lineJoin);
      }
    }, w.prototype.strokeRect = function(A, T, q, $) {
      if (isNaN(A) || isNaN(T) || isNaN(q) || isNaN($)) throw Ct.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
      E.call(this) || (this.beginPath(), this.rect(A, T, q, $), this.stroke());
    }, w.prototype.clearRect = function(A, T, q, $) {
      if (isNaN(A) || isNaN(T) || isNaN(q) || isNaN($)) throw Ct.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
      this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(A, T, q, $));
    }, w.prototype.save = function(A) {
      A = typeof A != "boolean" || A;
      for (var T = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("q");
      if (this.pdf.setPage(T), A) {
        this.ctx.fontSize = this.pdf.internal.getFontSize();
        var $ = new m(this.ctx);
        this.ctxStack.push(this.ctx), this.ctx = $;
      }
    }, w.prototype.restore = function(A) {
      A = typeof A != "boolean" || A;
      for (var T = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("Q");
      this.pdf.setPage(T), A && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
    }, w.prototype.toDataURL = function() {
      throw new Error("toDataUrl not implemented.");
    };
    var S = function(A) {
      var T, q, $, Y;
      if (A.isCanvasGradient === true && (A = A.getColor()), !A) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        style: A
      };
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(A)) T = 0, q = 0, $ = 0, Y = 0;
      else {
        var Q = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(A);
        if (Q !== null) T = parseInt(Q[1]), q = parseInt(Q[2]), $ = parseInt(Q[3]), Y = 1;
        else if ((Q = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(A)) !== null) T = parseInt(Q[1]), q = parseInt(Q[2]), $ = parseInt(Q[3]), Y = parseFloat(Q[4]);
        else {
          if (Y = 1, typeof A == "string" && A.charAt(0) !== "#") {
            var ce = new zh(A);
            A = ce.ok ? ce.toHex() : "#000000";
          }
          A.length === 4 ? (T = A.substring(1, 2), T += T, q = A.substring(2, 3), q += q, $ = A.substring(3, 4), $ += $) : (T = A.substring(1, 3), q = A.substring(3, 5), $ = A.substring(5, 7)), T = parseInt(T, 16), q = parseInt(q, 16), $ = parseInt($, 16);
        }
      }
      return {
        r: T,
        g: q,
        b: $,
        a: Y,
        style: A
      };
    }, p = function() {
      return this.ctx.isFillTransparent || this.globalAlpha == 0;
    }, E = function() {
      return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
    };
    w.prototype.fillText = function(A, T, q, $) {
      if (isNaN(T) || isNaN(q) || typeof A != "string") throw Ct.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
      if ($ = isNaN($) ? void 0 : $, !p.call(this)) {
        var Y = ne(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
        I.call(this, {
          text: A,
          x: T,
          y: q,
          scale: Q,
          angle: Y,
          align: this.textAlign,
          maxWidth: $
        });
      }
    }, w.prototype.strokeText = function(A, T, q, $) {
      if (isNaN(T) || isNaN(q) || typeof A != "string") throw Ct.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
      if (!E.call(this)) {
        $ = isNaN($) ? void 0 : $;
        var Y = ne(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
        I.call(this, {
          text: A,
          x: T,
          y: q,
          scale: Q,
          renderingMode: "stroke",
          angle: Y,
          align: this.textAlign,
          maxWidth: $
        });
      }
    }, w.prototype.measureText = function(A) {
      if (typeof A != "string") throw Ct.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
      var T = this.pdf, q = this.pdf.internal.scaleFactor, $ = T.internal.getFontSize(), Y = T.getStringUnitWidth(A) * $ / T.internal.scaleFactor;
      return new function(Q) {
        var ce = (Q = Q || {}).width || 0;
        return Object.defineProperty(this, "width", {
          get: function() {
            return ce;
          }
        }), this;
      }({
        width: Y *= Math.round(96 * q / 72 * 1e4) / 1e4
      });
    }, w.prototype.scale = function(A, T) {
      if (isNaN(A) || isNaN(T)) throw Ct.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
      var q = new u(A, 0, 0, T, 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(q);
    }, w.prototype.rotate = function(A) {
      if (isNaN(A)) throw Ct.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
      var T = new u(Math.cos(A), Math.sin(A), -Math.sin(A), Math.cos(A), 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(T);
    }, w.prototype.translate = function(A, T) {
      if (isNaN(A) || isNaN(T)) throw Ct.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
      var q = new u(1, 0, 0, 1, A, T);
      this.ctx.transform = this.ctx.transform.multiply(q);
    }, w.prototype.transform = function(A, T, q, $, Y, Q) {
      if (isNaN(A) || isNaN(T) || isNaN(q) || isNaN($) || isNaN(Y) || isNaN(Q)) throw Ct.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
      var ce = new u(A, T, q, $, Y, Q);
      this.ctx.transform = this.ctx.transform.multiply(ce);
    }, w.prototype.setTransform = function(A, T, q, $, Y, Q) {
      A = isNaN(A) ? 1 : A, T = isNaN(T) ? 0 : T, q = isNaN(q) ? 0 : q, $ = isNaN($) ? 1 : $, Y = isNaN(Y) ? 0 : Y, Q = isNaN(Q) ? 0 : Q, this.ctx.transform = new u(A, T, q, $, Y, Q);
    };
    var L = function() {
      return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
    };
    w.prototype.drawImage = function(A, T, q, $, Y, Q, ce, ue, ve) {
      var Se = this.pdf.getImageProperties(A), Ce = 1, Pe = 1, We = 1, F = 1;
      $ !== void 0 && ue !== void 0 && (We = ue / $, F = ve / Y, Ce = Se.width / $ * ue / $, Pe = Se.height / Y * ve / Y), Q === void 0 && (Q = T, ce = q, T = 0, q = 0), $ !== void 0 && ue === void 0 && (ue = $, ve = Y), $ === void 0 && ue === void 0 && (ue = Se.width, ve = Se.height);
      var ke = this.ctx.transform.decompose(), st = ne(ke.rotate.shx), Ge = new u(), Ne = (Ge = (Ge = (Ge = Ge.multiply(ke.translate)).multiply(ke.skew)).multiply(ke.scale)).applyToRectangle(new c(Q - T * We, ce - q * F, $ * Ce, Y * Pe));
      if (this.autoPaging) {
        for (var Ve, Ie = j.call(this, Ne), He = [], Ue = 0; Ue < Ie.length; Ue += 1) He.indexOf(Ie[Ue]) === -1 && He.push(Ie[Ue]);
        G(He);
        for (var yt = He[0], ft = He[He.length - 1], et = yt; et < ft + 1; et++) {
          this.pdf.setPage(et);
          var dt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ht = et === 1 ? this.posY + this.margin[0] : this.margin[0], Oe = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], rt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], qe = et === 1 ? 0 : Oe + (et - 2) * rt;
          if (this.ctx.clip_path.length !== 0) {
            var Ut = this.path;
            Ve = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = z(Ve, this.posX + this.margin[3], -qe + ht + this.ctx.prevPageLastElemOffset), ae.call(this, "fill", true), this.path = Ut;
          }
          var gt = JSON.parse(JSON.stringify(Ne));
          gt = z([
            gt
          ], this.posX + this.margin[3], -qe + ht + this.ctx.prevPageLastElemOffset)[0];
          var ct = (et > yt || et < ft) && L.call(this);
          ct && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], dt, rt, null).clip().discardPath()), this.pdf.addImage(A, "JPEG", gt.x, gt.y, gt.w, gt.h, null, null, st), ct && this.pdf.restoreGraphicsState();
        }
      } else this.pdf.addImage(A, "JPEG", Ne.x, Ne.y, Ne.w, Ne.h, null, null, st);
    };
    var j = function(A, T, q) {
      var $ = [];
      T = T || this.pdf.internal.pageSize.width, q = q || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
      var Y = this.posY + this.ctx.prevPageLastElemOffset;
      switch (A.type) {
        default:
        case "mt":
        case "lt":
          $.push(Math.floor((A.y + Y) / q) + 1);
          break;
        case "arc":
          $.push(Math.floor((A.y + Y - A.radius) / q) + 1), $.push(Math.floor((A.y + Y + A.radius) / q) + 1);
          break;
        case "qct":
          var Q = te(this.ctx.lastPoint.x, this.ctx.lastPoint.y, A.x1, A.y1, A.x, A.y);
          $.push(Math.floor((Q.y + Y) / q) + 1), $.push(Math.floor((Q.y + Q.h + Y) / q) + 1);
          break;
        case "bct":
          var ce = Ae(this.ctx.lastPoint.x, this.ctx.lastPoint.y, A.x1, A.y1, A.x2, A.y2, A.x, A.y);
          $.push(Math.floor((ce.y + Y) / q) + 1), $.push(Math.floor((ce.y + ce.h + Y) / q) + 1);
          break;
        case "rect":
          $.push(Math.floor((A.y + Y) / q) + 1), $.push(Math.floor((A.y + A.h + Y) / q) + 1);
      }
      for (var ue = 0; ue < $.length; ue += 1) for (; this.pdf.internal.getNumberOfPages() < $[ue]; ) N.call(this);
      return $;
    }, N = function() {
      var A = this.fillStyle, T = this.strokeStyle, q = this.font, $ = this.lineCap, Y = this.lineWidth, Q = this.lineJoin;
      this.pdf.addPage(), this.fillStyle = A, this.strokeStyle = T, this.font = q, this.lineCap = $, this.lineWidth = Y, this.lineJoin = Q;
    }, z = function(A, T, q) {
      for (var $ = 0; $ < A.length; $++) switch (A[$].type) {
        case "bct":
          A[$].x2 += T, A[$].y2 += q;
        case "qct":
          A[$].x1 += T, A[$].y1 += q;
        default:
          A[$].x += T, A[$].y += q;
      }
      return A;
    }, G = function(A) {
      return A.sort(function(T, q) {
        return T - q;
      });
    }, D = function(A, T) {
      var q = this.fillStyle, $ = this.strokeStyle, Y = this.lineCap, Q = this.lineWidth, ce = Math.abs(Q * this.ctx.transform.scaleX), ue = this.lineJoin;
      if (this.autoPaging) {
        for (var ve, Se, Ce = JSON.parse(JSON.stringify(this.path)), Pe = JSON.parse(JSON.stringify(this.path)), We = [], F = 0; F < Pe.length; F++) if (Pe[F].x !== void 0) for (var ke = j.call(this, Pe[F]), st = 0; st < ke.length; st += 1) We.indexOf(ke[st]) === -1 && We.push(ke[st]);
        for (var Ge = 0; Ge < We.length; Ge++) for (; this.pdf.internal.getNumberOfPages() < We[Ge]; ) N.call(this);
        G(We);
        for (var Ne = We[0], Ve = We[We.length - 1], Ie = Ne; Ie < Ve + 1; Ie++) {
          this.pdf.setPage(Ie), this.fillStyle = q, this.strokeStyle = $, this.lineCap = Y, this.lineWidth = ce, this.lineJoin = ue;
          var He = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Ue = Ie === 1 ? this.posY + this.margin[0] : this.margin[0], yt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ft = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], et = Ie === 1 ? 0 : yt + (Ie - 2) * ft;
          if (this.ctx.clip_path.length !== 0) {
            var dt = this.path;
            ve = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = z(ve, this.posX + this.margin[3], -et + Ue + this.ctx.prevPageLastElemOffset), ae.call(this, A, true), this.path = dt;
          }
          if (Se = JSON.parse(JSON.stringify(Ce)), this.path = z(Se, this.posX + this.margin[3], -et + Ue + this.ctx.prevPageLastElemOffset), T === false || Ie === 0) {
            var ht = (Ie > Ne || Ie < Ve) && L.call(this);
            ht && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], He, ft, null).clip().discardPath()), ae.call(this, A, T), ht && this.pdf.restoreGraphicsState();
          }
          this.lineWidth = Q;
        }
        this.path = Ce;
      } else this.lineWidth = ce, ae.call(this, A, T), this.lineWidth = Q;
    }, ae = function(A, T) {
      if ((A !== "stroke" || T || !E.call(this)) && (A === "stroke" || T || !p.call(this))) {
        for (var q, $, Y = [], Q = this.path, ce = 0; ce < Q.length; ce++) {
          var ue = Q[ce];
          switch (ue.type) {
            case "begin":
              Y.push({
                begin: true
              });
              break;
            case "close":
              Y.push({
                close: true
              });
              break;
            case "mt":
              Y.push({
                start: ue,
                deltas: [],
                abs: []
              });
              break;
            case "lt":
              var ve = Y.length;
              if (Q[ce - 1] && !isNaN(Q[ce - 1].x) && (q = [
                ue.x - Q[ce - 1].x,
                ue.y - Q[ce - 1].y
              ], ve > 0)) {
                for (; ve >= 0; ve--) if (Y[ve - 1].close !== true && Y[ve - 1].begin !== true) {
                  Y[ve - 1].deltas.push(q), Y[ve - 1].abs.push(ue);
                  break;
                }
              }
              break;
            case "bct":
              q = [
                ue.x1 - Q[ce - 1].x,
                ue.y1 - Q[ce - 1].y,
                ue.x2 - Q[ce - 1].x,
                ue.y2 - Q[ce - 1].y,
                ue.x - Q[ce - 1].x,
                ue.y - Q[ce - 1].y
              ], Y[Y.length - 1].deltas.push(q);
              break;
            case "qct":
              var Se = Q[ce - 1].x + 2 / 3 * (ue.x1 - Q[ce - 1].x), Ce = Q[ce - 1].y + 2 / 3 * (ue.y1 - Q[ce - 1].y), Pe = ue.x + 2 / 3 * (ue.x1 - ue.x), We = ue.y + 2 / 3 * (ue.y1 - ue.y), F = ue.x, ke = ue.y;
              q = [
                Se - Q[ce - 1].x,
                Ce - Q[ce - 1].y,
                Pe - Q[ce - 1].x,
                We - Q[ce - 1].y,
                F - Q[ce - 1].x,
                ke - Q[ce - 1].y
              ], Y[Y.length - 1].deltas.push(q);
              break;
            case "arc":
              Y.push({
                deltas: [],
                abs: [],
                arc: true
              }), Array.isArray(Y[Y.length - 1].abs) && Y[Y.length - 1].abs.push(ue);
          }
        }
        $ = T ? null : A === "stroke" ? "stroke" : "fill";
        for (var st = false, Ge = 0; Ge < Y.length; Ge++) if (Y[Ge].arc) for (var Ne = Y[Ge].abs, Ve = 0; Ve < Ne.length; Ve++) {
          var Ie = Ne[Ve];
          Ie.type === "arc" ? J.call(this, Ie.x, Ie.y, Ie.radius, Ie.startAngle, Ie.endAngle, Ie.counterclockwise, void 0, T, !st) : B.call(this, Ie.x, Ie.y), st = true;
        }
        else if (Y[Ge].close === true) this.pdf.internal.out("h"), st = false;
        else if (Y[Ge].begin !== true) {
          var He = Y[Ge].start.x, Ue = Y[Ge].start.y;
          U.call(this, Y[Ge].deltas, He, Ue), st = true;
        }
        $ && H.call(this, $), T && V.call(this);
      }
    }, be = function(A) {
      var T = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, q = T * (this.pdf.internal.getLineHeightFactor() - 1);
      switch (this.ctx.textBaseline) {
        case "bottom":
          return A - q;
        case "top":
          return A + T - q;
        case "hanging":
          return A + T - 2 * q;
        case "middle":
          return A + T / 2 - q;
        default:
          return A;
      }
    }, he = function(A) {
      return A + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
    };
    w.prototype.createLinearGradient = function() {
      var A = function() {
      };
      return A.colorStops = [], A.addColorStop = function(T, q) {
        this.colorStops.push([
          T,
          q
        ]);
      }, A.getColor = function() {
        return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
      }, A.isCanvasGradient = true, A;
    }, w.prototype.createPattern = function() {
      return this.createLinearGradient();
    }, w.prototype.createRadialGradient = function() {
      return this.createLinearGradient();
    };
    var J = function(A, T, q, $, Y, Q, ce, ue, ve) {
      for (var Se = le.call(this, q, $, Y, Q), Ce = 0; Ce < Se.length; Ce++) {
        var Pe = Se[Ce];
        Ce === 0 && (ve ? x.call(this, Pe.x1 + A, Pe.y1 + T) : B.call(this, Pe.x1 + A, Pe.y1 + T)), se.call(this, A, T, Pe.x2, Pe.y2, Pe.x3, Pe.y3, Pe.x4, Pe.y4);
      }
      ue ? V.call(this) : H.call(this, ce);
    }, H = function(A) {
      switch (A) {
        case "stroke":
          this.pdf.internal.out("S");
          break;
        case "fill":
          this.pdf.internal.out("f");
      }
    }, V = function() {
      this.pdf.clip(), this.pdf.discardPath();
    }, x = function(A, T) {
      this.pdf.internal.out(t(A) + " " + r(T) + " m");
    }, I = function(A) {
      var T;
      switch (A.align) {
        case "right":
        case "end":
          T = "right";
          break;
        case "center":
          T = "center";
          break;
        default:
          T = "left";
      }
      var q, $, Y, Q = this.pdf.getTextDimensions(A.text), ce = be.call(this, A.y), ue = he.call(this, ce) - Q.h, ve = this.ctx.transform.applyToPoint(new f(A.x, ce));
      if (this.autoPaging) {
        var Se = this.ctx.transform.decompose(), Ce = new u();
        Ce = (Ce = (Ce = Ce.multiply(Se.translate)).multiply(Se.skew)).multiply(Se.scale);
        for (var Pe = this.ctx.transform.applyToRectangle(new c(A.x, ce, Q.w, Q.h)), We = Ce.applyToRectangle(new c(A.x, ue, Q.w, Q.h)), F = j.call(this, We), ke = [], st = 0; st < F.length; st += 1) ke.indexOf(F[st]) === -1 && ke.push(F[st]);
        G(ke);
        for (var Ge = ke[0], Ne = ke[ke.length - 1], Ve = Ge; Ve < Ne + 1; Ve++) {
          this.pdf.setPage(Ve);
          var Ie = Ve === 1 ? this.posY + this.margin[0] : this.margin[0], He = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ue = this.pdf.internal.pageSize.height - this.margin[2], yt = Ue - this.margin[0], ft = this.pdf.internal.pageSize.width - this.margin[1], et = ft - this.margin[3], dt = Ve === 1 ? 0 : He + (Ve - 2) * yt;
          if (this.ctx.clip_path.length !== 0) {
            var ht = this.path;
            q = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = z(q, this.posX + this.margin[3], -1 * dt + Ie), ae.call(this, "fill", true), this.path = ht;
          }
          var Oe = z([
            JSON.parse(JSON.stringify(We))
          ], this.posX + this.margin[3], -dt + Ie + this.ctx.prevPageLastElemOffset)[0];
          A.scale >= 0.01 && ($ = this.pdf.internal.getFontSize(), this.pdf.setFontSize($ * A.scale), Y = this.lineWidth, this.lineWidth = Y * A.scale);
          var rt = this.autoPaging !== "text";
          if (rt || Oe.y + Oe.h <= Ue) {
            if (rt || Oe.y >= Ie && Oe.x <= ft) {
              var qe = rt ? A.text : this.pdf.splitTextToSize(A.text, A.maxWidth || ft - Oe.x)[0], Ut = z([
                JSON.parse(JSON.stringify(Pe))
              ], this.posX + this.margin[3], -dt + Ie + this.ctx.prevPageLastElemOffset)[0], gt = rt && (Ve > Ge || Ve < Ne) && L.call(this);
              gt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], et, yt, null).clip().discardPath()), this.pdf.text(qe, Ut.x, Ut.y, {
                angle: A.angle,
                align: T,
                renderingMode: A.renderingMode
              }), gt && this.pdf.restoreGraphicsState();
            }
          } else Oe.y < Ue && (this.ctx.prevPageLastElemOffset += Ue - Oe.y);
          A.scale >= 0.01 && (this.pdf.setFontSize($), this.lineWidth = Y);
        }
      } else A.scale >= 0.01 && ($ = this.pdf.internal.getFontSize(), this.pdf.setFontSize($ * A.scale), Y = this.lineWidth, this.lineWidth = Y * A.scale), this.pdf.text(A.text, ve.x + this.posX, ve.y + this.posY, {
        angle: A.angle,
        align: T,
        renderingMode: A.renderingMode,
        maxWidth: A.maxWidth
      }), A.scale >= 0.01 && (this.pdf.setFontSize($), this.lineWidth = Y);
    }, B = function(A, T, q, $) {
      q = q || 0, $ = $ || 0, this.pdf.internal.out(t(A + q) + " " + r(T + $) + " l");
    }, U = function(A, T, q) {
      return this.pdf.lines(A, T, q, null, null);
    }, se = function(A, T, q, $, Y, Q, ce, ue) {
      this.pdf.internal.out([
        e(o(q + A)),
        e(a($ + T)),
        e(o(Y + A)),
        e(a(Q + T)),
        e(o(ce + A)),
        e(a(ue + T)),
        "c"
      ].join(" "));
    }, le = function(A, T, q, $) {
      for (var Y = 2 * Math.PI, Q = Math.PI / 2; T > q; ) T -= Y;
      var ce = Math.abs(q - T);
      ce < Y && $ && (ce = Y - ce);
      for (var ue = [], ve = $ ? -1 : 1, Se = T; ce > 1e-5; ) {
        var Ce = Se + ve * Math.min(ce, Q);
        ue.push(ge.call(this, A, Se, Ce)), ce -= Math.abs(Ce - Se), Se = Ce;
      }
      return ue;
    }, ge = function(A, T, q) {
      var $ = (q - T) / 2, Y = A * Math.cos($), Q = A * Math.sin($), ce = Y, ue = -Q, ve = ce * ce + ue * ue, Se = ve + ce * Y + ue * Q, Ce = 4 / 3 * (Math.sqrt(2 * ve * Se) - Se) / (ce * Q - ue * Y), Pe = ce - Ce * ue, We = ue + Ce * ce, F = Pe, ke = -We, st = $ + T, Ge = Math.cos(st), Ne = Math.sin(st);
      return {
        x1: A * Math.cos(T),
        y1: A * Math.sin(T),
        x2: Pe * Ge - We * Ne,
        y2: Pe * Ne + We * Ge,
        x3: F * Ge - ke * Ne,
        y3: F * Ne + ke * Ge,
        x4: A * Math.cos(q),
        y4: A * Math.sin(q)
      };
    }, ne = function(A) {
      return 180 * A / Math.PI;
    }, te = function(A, T, q, $, Y, Q) {
      var ce = A + 0.5 * (q - A), ue = T + 0.5 * ($ - T), ve = Y + 0.5 * (q - Y), Se = Q + 0.5 * ($ - Q), Ce = Math.min(A, Y, ce, ve), Pe = Math.max(A, Y, ce, ve), We = Math.min(T, Q, ue, Se), F = Math.max(T, Q, ue, Se);
      return new c(Ce, We, Pe - Ce, F - We);
    }, Ae = function(A, T, q, $, Y, Q, ce, ue) {
      var ve, Se, Ce, Pe, We, F, ke, st, Ge, Ne, Ve, Ie, He, Ue, yt = q - A, ft = $ - T, et = Y - q, dt = Q - $, ht = ce - Y, Oe = ue - Q;
      for (Se = 0; Se < 41; Se++) Ge = (ke = (Ce = A + (ve = Se / 40) * yt) + ve * ((We = q + ve * et) - Ce)) + ve * (We + ve * (Y + ve * ht - We) - ke), Ne = (st = (Pe = T + ve * ft) + ve * ((F = $ + ve * dt) - Pe)) + ve * (F + ve * (Q + ve * Oe - F) - st), Se == 0 ? (Ve = Ge, Ie = Ne, He = Ge, Ue = Ne) : (Ve = Math.min(Ve, Ge), Ie = Math.min(Ie, Ne), He = Math.max(He, Ge), Ue = Math.max(Ue, Ne));
      return new c(Math.round(Ve), Math.round(Ie), Math.round(He - Ve), Math.round(Ue - Ie));
    }, we = function() {
      if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
        var A, T, q = (A = this.ctx.lineDash, T = this.ctx.lineDashOffset, JSON.stringify({
          lineDash: A,
          lineDashOffset: T
        }));
        this.prevLineDash !== q && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = q);
      }
    };
  })(Be.API), function(n) {
    var e = function(f) {
      var c, u, d, m, w, S, p, E, L, j;
      for (u = [], d = 0, m = (f += c = "\0\0\0\0".slice(f.length % 4 || 4)).length; m > d; d += 4) (w = (f.charCodeAt(d) << 24) + (f.charCodeAt(d + 1) << 16) + (f.charCodeAt(d + 2) << 8) + f.charCodeAt(d + 3)) !== 0 ? (S = (w = ((w = ((w = ((w = (w - (j = w % 85)) / 85) - (L = w % 85)) / 85) - (E = w % 85)) / 85) - (p = w % 85)) / 85) % 85, u.push(S + 33, p + 33, E + 33, L + 33, j + 33)) : u.push(122);
      return function(N, z) {
        for (var G = z; G > 0; G--) N.pop();
      }(u, c.length), String.fromCharCode.apply(String, u) + "~>";
    }, t = function(f) {
      var c, u, d, m, w, S = String, p = "length", E = 255, L = "charCodeAt", j = "slice", N = "replace";
      for (f[j](-2), f = f[j](0, -2)[N](/\s/g, "")[N]("z", "!!!!!"), d = [], m = 0, w = (f += c = "uuuuu"[j](f[p] % 5 || 5))[p]; w > m; m += 5) u = 52200625 * (f[L](m) - 33) + 614125 * (f[L](m + 1) - 33) + 7225 * (f[L](m + 2) - 33) + 85 * (f[L](m + 3) - 33) + (f[L](m + 4) - 33), d.push(E & u >> 24, E & u >> 16, E & u >> 8, E & u);
      return function(z, G) {
        for (var D = G; D > 0; D--) z.pop();
      }(d, c[p]), S.fromCharCode.apply(S, d);
    }, r = function(f) {
      return f.split("").map(function(c) {
        return ("0" + c.charCodeAt().toString(16)).slice(-2);
      }).join("") + ">";
    }, o = function(f) {
      var c = new RegExp(/^([0-9A-Fa-f]{2})+$/);
      if ((f = f.replace(/\s/g, "")).indexOf(">") !== -1 && (f = f.substr(0, f.indexOf(">"))), f.length % 2 && (f += "0"), c.test(f) === false) return "";
      for (var u = "", d = 0; d < f.length; d += 2) u += String.fromCharCode("0x" + (f[d] + f[d + 1]));
      return u;
    }, a = function(f) {
      for (var c = new Uint8Array(f.length), u = f.length; u--; ) c[u] = f.charCodeAt(u);
      return (c = Nc(c)).reduce(function(d, m) {
        return d + String.fromCharCode(m);
      }, "");
    };
    n.processDataByFilters = function(f, c) {
      var u = 0, d = f || "", m = [];
      for (typeof (c = c || []) == "string" && (c = [
        c
      ]), u = 0; u < c.length; u += 1) switch (c[u]) {
        case "ASCII85Decode":
        case "/ASCII85Decode":
          d = t(d), m.push("/ASCII85Encode");
          break;
        case "ASCII85Encode":
        case "/ASCII85Encode":
          d = e(d), m.push("/ASCII85Decode");
          break;
        case "ASCIIHexDecode":
        case "/ASCIIHexDecode":
          d = o(d), m.push("/ASCIIHexEncode");
          break;
        case "ASCIIHexEncode":
        case "/ASCIIHexEncode":
          d = r(d), m.push("/ASCIIHexDecode");
          break;
        case "FlateEncode":
        case "/FlateEncode":
          d = a(d), m.push("/FlateDecode");
          break;
        default:
          throw new Error('The filter: "' + c[u] + '" is not implemented');
      }
      return {
        data: d,
        reverseChain: m.reverse().join(" ")
      };
    };
  }(Be.API), function(n) {
    n.loadFile = function(e, t, r) {
      return function(o, a, f) {
        a = a !== false, f = typeof f == "function" ? f : function() {
        };
        var c = void 0;
        try {
          c = function(u, d, m) {
            var w = new XMLHttpRequest(), S = 0, p = function(E) {
              var L = E.length, j = [], N = String.fromCharCode;
              for (S = 0; S < L; S += 1) j.push(N(255 & E.charCodeAt(S)));
              return j.join("");
            };
            if (w.open("GET", u, !d), w.overrideMimeType("text/plain; charset=x-user-defined"), d === false && (w.onload = function() {
              w.status === 200 ? m(p(this.responseText)) : m(void 0);
            }), w.send(null), d && w.status === 200) return p(w.responseText);
          }(o, a, f);
        } catch {
        }
        return c;
      }(e, t, r);
    }, n.allowFsRead = void 0, n.loadImageFile = n.loadFile;
  }(Be.API), function(n) {
    function e() {
      return (Xe.html2canvas ? Promise.resolve(Xe.html2canvas) : Go(() => import("./html2canvas.esm-BfxBtG_O.js"), [])).catch(function(c) {
        return Promise.reject(new Error("Could not load html2canvas: " + c));
      }).then(function(c) {
        return c.default ? c.default : c;
      });
    }
    function t() {
      return (Xe.DOMPurify ? Promise.resolve(Xe.DOMPurify) : Go(() => import("./purify.es-B9ZVCkUG.js"), [])).catch(function(c) {
        return Promise.reject(new Error("Could not load dompurify: " + c));
      }).then(function(c) {
        return c.default ? c.default : c;
      });
    }
    var r = function(c) {
      var u = St(c);
      return u === "undefined" ? "undefined" : u === "string" || c instanceof String ? "string" : u === "number" || c instanceof Number ? "number" : u === "function" || c instanceof Function ? "function" : c && c.constructor === Array ? "array" : c && c.nodeType === 1 ? "element" : u === "object" ? "object" : "unknown";
    }, o = function(c, u) {
      var d = document.createElement(c);
      for (var m in u.className && (d.className = u.className), u.innerHTML && u.dompurify && (d.innerHTML = u.dompurify.sanitize(u.innerHTML)), u.style) d.style[m] = u.style[m];
      return d;
    }, a = function c(u, d) {
      for (var m = u.nodeType === 3 ? document.createTextNode(u.nodeValue) : u.cloneNode(false), w = u.firstChild; w; w = w.nextSibling) d !== true && w.nodeType === 1 && w.nodeName === "SCRIPT" || m.appendChild(c(w, d));
      return u.nodeType === 1 && (u.nodeName === "CANVAS" ? (m.width = u.width, m.height = u.height, m.getContext("2d").drawImage(u, 0, 0)) : u.nodeName !== "TEXTAREA" && u.nodeName !== "SELECT" || (m.value = u.value), m.addEventListener("load", function() {
        m.scrollTop = u.scrollTop, m.scrollLeft = u.scrollLeft;
      }, true)), m;
    }, f = function c(u) {
      var d = Object.assign(c.convert(Promise.resolve()), JSON.parse(JSON.stringify(c.template))), m = c.convert(Promise.resolve(), d);
      return (m = m.setProgress(1, c, 1, [
        c
      ])).set(u);
    };
    (f.prototype = Object.create(Promise.prototype)).constructor = f, f.convert = function(c, u) {
      return c.__proto__ = u || f.prototype, c;
    }, f.template = {
      prop: {
        src: null,
        container: null,
        overlay: null,
        canvas: null,
        img: null,
        pdf: null,
        pageSize: null,
        callback: function() {
        }
      },
      progress: {
        val: 0,
        state: null,
        n: 0,
        stack: []
      },
      opt: {
        filename: "file.pdf",
        margin: [
          0,
          0,
          0,
          0
        ],
        enableLinks: true,
        x: 0,
        y: 0,
        html2canvas: {},
        jsPDF: {},
        backgroundColor: "transparent"
      }
    }, f.prototype.from = function(c, u) {
      return this.then(function() {
        switch (u = u || function(d) {
          switch (r(d)) {
            case "string":
              return "string";
            case "element":
              return d.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
            default:
              return "unknown";
          }
        }(c), u) {
          case "string":
            return this.then(t).then(function(d) {
              return this.set({
                src: o("div", {
                  innerHTML: c,
                  dompurify: d
                })
              });
            });
          case "element":
            return this.set({
              src: c
            });
          case "canvas":
            return this.set({
              canvas: c
            });
          case "img":
            return this.set({
              img: c
            });
          default:
            return this.error("Unknown source type.");
        }
      });
    }, f.prototype.to = function(c) {
      switch (c) {
        case "container":
          return this.toContainer();
        case "canvas":
          return this.toCanvas();
        case "img":
          return this.toImg();
        case "pdf":
          return this.toPdf();
        default:
          return this.error("Invalid target.");
      }
    }, f.prototype.toContainer = function() {
      return this.thenList([
        function() {
          return this.prop.src || this.error("Cannot duplicate - no source HTML.");
        },
        function() {
          return this.prop.pageSize || this.setPageSize();
        }
      ]).then(function() {
        var c = {
          position: "relative",
          display: "inline-block",
          width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
          left: 0,
          right: 0,
          top: 0,
          margin: "auto",
          backgroundColor: this.opt.backgroundColor
        }, u = a(this.prop.src, this.opt.html2canvas.javascriptEnabled);
        u.tagName === "BODY" && (c.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", {
          className: "html2pdf__overlay",
          style: {
            position: "fixed",
            overflow: "hidden",
            zIndex: 1e3,
            left: "-100000px",
            right: 0,
            bottom: 0,
            top: 0
          }
        }), this.prop.container = o("div", {
          className: "html2pdf__container",
          style: c
        }), this.prop.container.appendChild(u), this.prop.container.firstChild.appendChild(o("div", {
          style: {
            clear: "both",
            border: "0 none transparent",
            margin: 0,
            padding: 0,
            height: 0
          }
        })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
      });
    }, f.prototype.toCanvas = function() {
      var c = [
        function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }
      ];
      return this.thenList(c).then(e).then(function(u) {
        var d = Object.assign({}, this.opt.html2canvas);
        return delete d.onrendered, u(this.prop.container, d);
      }).then(function(u) {
        (this.opt.html2canvas.onrendered || function() {
        })(u), this.prop.canvas = u, document.body.removeChild(this.prop.overlay);
      });
    }, f.prototype.toContext2d = function() {
      var c = [
        function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }
      ];
      return this.thenList(c).then(e).then(function(u) {
        var d = this.opt.jsPDF, m = this.opt.fontFaces, w = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, S = Object.assign({
          async: true,
          allowTaint: true,
          scale: w,
          scrollX: this.opt.scrollX || 0,
          scrollY: this.opt.scrollY || 0,
          backgroundColor: "#ffffff",
          imageTimeout: 15e3,
          logging: true,
          proxy: null,
          removeContainer: true,
          foreignObjectRendering: false,
          useCORS: false
        }, this.opt.html2canvas);
        if (delete S.onrendered, d.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, d.context2d.posX = this.opt.x, d.context2d.posY = this.opt.y, d.context2d.margin = this.opt.margin, d.context2d.fontFaces = m, m) for (var p = 0; p < m.length; ++p) {
          var E = m[p], L = E.src.find(function(j) {
            return j.format === "truetype";
          });
          L && d.addFont(L.url, E.ref.name, E.ref.style);
        }
        return S.windowHeight = S.windowHeight || 0, S.windowHeight = S.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : S.windowHeight, d.context2d.save(true), u(this.prop.container, S);
      }).then(function(u) {
        this.opt.jsPDF.context2d.restore(true), (this.opt.html2canvas.onrendered || function() {
        })(u), this.prop.canvas = u, document.body.removeChild(this.prop.overlay);
      });
    }, f.prototype.toImg = function() {
      return this.thenList([
        function() {
          return this.prop.canvas || this.toCanvas();
        }
      ]).then(function() {
        var c = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
        this.prop.img = document.createElement("img"), this.prop.img.src = c;
      });
    }, f.prototype.toPdf = function() {
      return this.thenList([
        function() {
          return this.toContext2d();
        }
      ]).then(function() {
        this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
      });
    }, f.prototype.output = function(c, u, d) {
      return (d = d || "pdf").toLowerCase() === "img" || d.toLowerCase() === "image" ? this.outputImg(c, u) : this.outputPdf(c, u);
    }, f.prototype.outputPdf = function(c, u) {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).then(function() {
        return this.prop.pdf.output(c, u);
      });
    }, f.prototype.outputImg = function(c) {
      return this.thenList([
        function() {
          return this.prop.img || this.toImg();
        }
      ]).then(function() {
        switch (c) {
          case void 0:
          case "img":
            return this.prop.img;
          case "datauristring":
          case "dataurlstring":
            return this.prop.img.src;
          case "datauri":
          case "dataurl":
            return document.location.href = this.prop.img.src;
          default:
            throw 'Image output type "' + c + '" is not supported.';
        }
      });
    }, f.prototype.save = function(c) {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).set(c ? {
        filename: c
      } : null).then(function() {
        this.prop.pdf.save(this.opt.filename);
      });
    }, f.prototype.doCallback = function() {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).then(function() {
        this.prop.callback(this.prop.pdf);
      });
    }, f.prototype.set = function(c) {
      if (r(c) !== "object") return this;
      var u = Object.keys(c || {}).map(function(d) {
        if (d in f.template.prop) return function() {
          this.prop[d] = c[d];
        };
        switch (d) {
          case "margin":
            return this.setMargin.bind(this, c.margin);
          case "jsPDF":
            return function() {
              return this.opt.jsPDF = c.jsPDF, this.setPageSize();
            };
          case "pageSize":
            return this.setPageSize.bind(this, c.pageSize);
          default:
            return function() {
              this.opt[d] = c[d];
            };
        }
      }, this);
      return this.then(function() {
        return this.thenList(u);
      });
    }, f.prototype.get = function(c, u) {
      return this.then(function() {
        var d = c in f.template.prop ? this.prop[c] : this.opt[c];
        return u ? u(d) : d;
      });
    }, f.prototype.setMargin = function(c) {
      return this.then(function() {
        switch (r(c)) {
          case "number":
            c = [
              c,
              c,
              c,
              c
            ];
          case "array":
            if (c.length === 2 && (c = [
              c[0],
              c[1],
              c[0],
              c[1]
            ]), c.length === 4) break;
          default:
            return this.error("Invalid margin array.");
        }
        this.opt.margin = c;
      }).then(this.setPageSize);
    }, f.prototype.setPageSize = function(c) {
      function u(d, m) {
        return Math.floor(d * m / 72 * 96);
      }
      return this.then(function() {
        (c = c || Be.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (c.inner = {
          width: c.width - this.opt.margin[1] - this.opt.margin[3],
          height: c.height - this.opt.margin[0] - this.opt.margin[2]
        }, c.inner.px = {
          width: u(c.inner.width, c.k),
          height: u(c.inner.height, c.k)
        }, c.inner.ratio = c.inner.height / c.inner.width), this.prop.pageSize = c;
      });
    }, f.prototype.setProgress = function(c, u, d, m) {
      return c != null && (this.progress.val = c), u != null && (this.progress.state = u), d != null && (this.progress.n = d), m != null && (this.progress.stack = m), this.progress.ratio = this.progress.val / this.progress.state, this;
    }, f.prototype.updateProgress = function(c, u, d, m) {
      return this.setProgress(c ? this.progress.val + c : null, u || null, d ? this.progress.n + d : null, m ? this.progress.stack.concat(m) : null);
    }, f.prototype.then = function(c, u) {
      var d = this;
      return this.thenCore(c, u, function(m, w) {
        return d.updateProgress(null, null, 1, [
          m
        ]), Promise.prototype.then.call(this, function(S) {
          return d.updateProgress(null, m), S;
        }).then(m, w).then(function(S) {
          return d.updateProgress(1), S;
        });
      });
    }, f.prototype.thenCore = function(c, u, d) {
      d = d || Promise.prototype.then;
      var m = this;
      c && (c = c.bind(m)), u && (u = u.bind(m));
      var w = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? m : f.convert(Object.assign({}, m), Promise.prototype), S = d.call(w, c, u);
      return f.convert(S, m.__proto__);
    }, f.prototype.thenExternal = function(c, u) {
      return Promise.prototype.then.call(this, c, u);
    }, f.prototype.thenList = function(c) {
      var u = this;
      return c.forEach(function(d) {
        u = u.thenCore(d);
      }), u;
    }, f.prototype.catch = function(c) {
      c && (c = c.bind(this));
      var u = Promise.prototype.catch.call(this, c);
      return f.convert(u, this);
    }, f.prototype.catchExternal = function(c) {
      return Promise.prototype.catch.call(this, c);
    }, f.prototype.error = function(c) {
      return this.then(function() {
        throw new Error(c);
      });
    }, f.prototype.using = f.prototype.set, f.prototype.saveAs = f.prototype.save, f.prototype.export = f.prototype.output, f.prototype.run = f.prototype.then, Be.getPageSize = function(c, u, d) {
      if (St(c) === "object") {
        var m = c;
        c = m.orientation, u = m.unit || u, d = m.format || d;
      }
      u = u || "mm", d = d || "a4", c = ("" + (c || "P")).toLowerCase();
      var w, S = ("" + d).toLowerCase(), p = {
        a0: [
          2383.94,
          3370.39
        ],
        a1: [
          1683.78,
          2383.94
        ],
        a2: [
          1190.55,
          1683.78
        ],
        a3: [
          841.89,
          1190.55
        ],
        a4: [
          595.28,
          841.89
        ],
        a5: [
          419.53,
          595.28
        ],
        a6: [
          297.64,
          419.53
        ],
        a7: [
          209.76,
          297.64
        ],
        a8: [
          147.4,
          209.76
        ],
        a9: [
          104.88,
          147.4
        ],
        a10: [
          73.7,
          104.88
        ],
        b0: [
          2834.65,
          4008.19
        ],
        b1: [
          2004.09,
          2834.65
        ],
        b2: [
          1417.32,
          2004.09
        ],
        b3: [
          1000.63,
          1417.32
        ],
        b4: [
          708.66,
          1000.63
        ],
        b5: [
          498.9,
          708.66
        ],
        b6: [
          354.33,
          498.9
        ],
        b7: [
          249.45,
          354.33
        ],
        b8: [
          175.75,
          249.45
        ],
        b9: [
          124.72,
          175.75
        ],
        b10: [
          87.87,
          124.72
        ],
        c0: [
          2599.37,
          3676.54
        ],
        c1: [
          1836.85,
          2599.37
        ],
        c2: [
          1298.27,
          1836.85
        ],
        c3: [
          918.43,
          1298.27
        ],
        c4: [
          649.13,
          918.43
        ],
        c5: [
          459.21,
          649.13
        ],
        c6: [
          323.15,
          459.21
        ],
        c7: [
          229.61,
          323.15
        ],
        c8: [
          161.57,
          229.61
        ],
        c9: [
          113.39,
          161.57
        ],
        c10: [
          79.37,
          113.39
        ],
        dl: [
          311.81,
          623.62
        ],
        letter: [
          612,
          792
        ],
        "government-letter": [
          576,
          756
        ],
        legal: [
          612,
          1008
        ],
        "junior-legal": [
          576,
          360
        ],
        ledger: [
          1224,
          792
        ],
        tabloid: [
          792,
          1224
        ],
        "credit-card": [
          153,
          243
        ]
      };
      switch (u) {
        case "pt":
          w = 1;
          break;
        case "mm":
          w = 72 / 25.4;
          break;
        case "cm":
          w = 72 / 2.54;
          break;
        case "in":
          w = 72;
          break;
        case "px":
          w = 0.75;
          break;
        case "pc":
        case "em":
          w = 12;
          break;
        case "ex":
          w = 6;
          break;
        default:
          throw "Invalid unit: " + u;
      }
      var E, L = 0, j = 0;
      if (p.hasOwnProperty(S)) L = p[S][1] / w, j = p[S][0] / w;
      else try {
        L = d[1], j = d[0];
      } catch {
        throw new Error("Invalid format: " + d);
      }
      if (c === "p" || c === "portrait") c = "p", j > L && (E = j, j = L, L = E);
      else {
        if (c !== "l" && c !== "landscape") throw "Invalid orientation: " + c;
        c = "l", L > j && (E = j, j = L, L = E);
      }
      return {
        width: j,
        height: L,
        unit: u,
        k: w,
        orientation: c
      };
    }, n.html = function(c, u) {
      (u = u || {}).callback = u.callback || function() {
      }, u.html2canvas = u.html2canvas || {}, u.html2canvas.canvas = u.html2canvas.canvas || this.canvas, u.jsPDF = u.jsPDF || this, u.fontFaces = u.fontFaces ? u.fontFaces.map(bc) : null;
      var d = new f(u);
      return u.worker ? d : d.from(c).doCallback();
    };
  }(Be.API), Be.API.addJS = function(n) {
    var e, t, r = n;
    return this.internal.events.subscribe("postPutResources", function() {
      e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (e + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + r + ")"), this.internal.out(">>"), this.internal.out("endobj");
    }), this.internal.events.subscribe("putCatalog", function() {
      e !== void 0 && t !== void 0 && this.internal.out("/Names <</JavaScript " + e + " 0 R>>");
    }), this;
  }, function(n) {
    var e;
    n.events.push([
      "postPutResources",
      function() {
        var t = this, r = /^(\d+) 0 obj$/;
        if (this.outline.root.children.length > 0) for (var o = t.outline.render().split(/\r\n/), a = 0; a < o.length; a++) {
          var f = o[a], c = r.exec(f);
          if (c != null) {
            var u = c[1];
            t.internal.newObjectDeferredBegin(u, false);
          }
          t.internal.write(f);
        }
        if (this.outline.createNamedDestinations) {
          var d = this.internal.pages.length, m = [];
          for (a = 0; a < d; a++) {
            var w = t.internal.newObject();
            m.push(w);
            var S = t.internal.getPageInfo(a + 1);
            t.internal.write("<< /D[" + S.objId + " 0 R /XYZ null null null]>> endobj");
          }
          var p = t.internal.newObject();
          for (t.internal.write("<< /Names [ "), a = 0; a < m.length; a++) t.internal.write("(page_" + (a + 1) + ")" + m[a] + " 0 R");
          t.internal.write(" ] >>", "endobj"), e = t.internal.newObject(), t.internal.write("<< /Dests " + p + " 0 R"), t.internal.write(">>", "endobj");
        }
      }
    ]), n.events.push([
      "putCatalog",
      function() {
        var t = this;
        t.outline.root.children.length > 0 && (t.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && t.internal.write("/Names " + e + " 0 R"));
      }
    ]), n.events.push([
      "initialized",
      function() {
        var t = this;
        t.outline = {
          createNamedDestinations: false,
          root: {
            children: []
          }
        }, t.outline.add = function(r, o, a) {
          var f = {
            title: o,
            options: a,
            children: []
          };
          return r == null && (r = this.root), r.children.push(f), f;
        }, t.outline.render = function() {
          return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
        }, t.outline.genIds_r = function(r) {
          r.id = t.internal.newObjectDeferred();
          for (var o = 0; o < r.children.length; o++) this.genIds_r(r.children[o]);
        }, t.outline.renderRoot = function(r) {
          this.objStart(r), this.line("/Type /Outlines"), r.children.length > 0 && (this.line("/First " + this.makeRef(r.children[0])), this.line("/Last " + this.makeRef(r.children[r.children.length - 1]))), this.line("/Count " + this.count_r({
            count: 0
          }, r)), this.objEnd();
        }, t.outline.renderItems = function(r) {
          for (var o = this.ctx.pdf.internal.getVerticalCoordinateString, a = 0; a < r.children.length; a++) {
            var f = r.children[a];
            this.objStart(f), this.line("/Title " + this.makeString(f.title)), this.line("/Parent " + this.makeRef(r)), a > 0 && this.line("/Prev " + this.makeRef(r.children[a - 1])), a < r.children.length - 1 && this.line("/Next " + this.makeRef(r.children[a + 1])), f.children.length > 0 && (this.line("/First " + this.makeRef(f.children[0])), this.line("/Last " + this.makeRef(f.children[f.children.length - 1])));
            var c = this.count = this.count_r({
              count: 0
            }, f);
            if (c > 0 && this.line("/Count " + c), f.options && f.options.pageNumber) {
              var u = t.internal.getPageInfo(f.options.pageNumber);
              this.line("/Dest [" + u.objId + " 0 R /XYZ 0 " + o(0) + " 0]");
            }
            this.objEnd();
          }
          for (var d = 0; d < r.children.length; d++) this.renderItems(r.children[d]);
        }, t.outline.line = function(r) {
          this.ctx.val += r + `\r
`;
        }, t.outline.makeRef = function(r) {
          return r.id + " 0 R";
        }, t.outline.makeString = function(r) {
          return "(" + t.internal.pdfEscape(r) + ")";
        }, t.outline.objStart = function(r) {
          this.ctx.val += `\r
` + r.id + ` 0 obj\r
<<\r
`;
        }, t.outline.objEnd = function() {
          this.ctx.val += `>> \r
endobj\r
`;
        }, t.outline.count_r = function(r, o) {
          for (var a = 0; a < o.children.length; a++) r.count++, this.count_r(r, o.children[a]);
          return r.count;
        };
      }
    ]);
  }(Be.API), function(n) {
    var e = [
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199
    ];
    n.processJPEG = function(t, r, o, a, f, c) {
      var u, d = this.decode.DCT_DECODE, m = null;
      if (typeof t == "string" || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
        switch (t = f || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, u = function(w) {
          for (var S, p = 256 * w.charCodeAt(4) + w.charCodeAt(5), E = w.length, L = {
            width: 0,
            height: 0,
            numcomponents: 1
          }, j = 4; j < E; j += 2) {
            if (j += p, e.indexOf(w.charCodeAt(j + 1)) !== -1) {
              S = 256 * w.charCodeAt(j + 5) + w.charCodeAt(j + 6), L = {
                width: 256 * w.charCodeAt(j + 7) + w.charCodeAt(j + 8),
                height: S,
                numcomponents: w.charCodeAt(j + 9)
              };
              break;
            }
            p = 256 * w.charCodeAt(j + 2) + w.charCodeAt(j + 3);
          }
          return L;
        }(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t), u.numcomponents) {
          case 1:
            c = this.color_spaces.DEVICE_GRAY;
            break;
          case 4:
            c = this.color_spaces.DEVICE_CMYK;
            break;
          case 3:
            c = this.color_spaces.DEVICE_RGB;
        }
        m = {
          data: t,
          width: u.width,
          height: u.height,
          colorSpace: c,
          bitsPerComponent: 8,
          filter: d,
          index: r,
          alias: o
        };
      }
      return m;
    };
  }(Be.API), Be.API.processPNG = function(n, e, t, r) {
    if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
      var o, a = Up(n, {
        checkCrc: true
      }), f = a.width, c = a.height, u = a.channels, d = a.palette, m = a.depth;
      o = d && u === 1 ? function(J) {
        for (var H = J.width, V = J.height, x = J.data, I = J.palette, B = J.depth, U = false, se = [], le = [], ge = void 0, ne = false, te = 0, Ae = 0; Ae < I.length; Ae++) {
          var we = Wl(I[Ae], 4), A = we[0], T = we[1], q = we[2], $ = we[3];
          se.push(A, T, q), $ != null && ($ === 0 ? (te++, le.length < 1 && le.push(Ae)) : $ < 255 && (ne = true));
        }
        if (ne || te > 1) {
          U = true, le = void 0;
          var Y = H * V;
          ge = new Uint8Array(Y);
          for (var Q = new DataView(x.buffer), ce = 0; ce < Y; ce++) {
            var ue = yc(Q, ce, B), ve = Wl(I[ue], 4)[3];
            ge[ce] = ve;
          }
        } else te === 0 && (le = void 0);
        return {
          colorSpace: "Indexed",
          colorsPerPixel: 1,
          sMaskBitsPerComponent: U ? 8 : void 0,
          colorBytes: x,
          alphaBytes: ge,
          needSMask: U,
          palette: se,
          mask: le
        };
      }(a) : u === 2 || u === 4 ? function(J) {
        for (var H = J.data, V = J.width, x = J.height, I = J.channels, B = J.depth, U = I === 2 ? "DeviceGray" : "DeviceRGB", se = I - 1, le = V * x, ge = se, ne = le * ge, te = 1 * le, Ae = Math.ceil(ne * B / 8), we = Math.ceil(te * B / 8), A = new Uint8Array(Ae), T = new Uint8Array(we), q = new DataView(H.buffer), $ = new DataView(A.buffer), Y = new DataView(T.buffer), Q = false, ce = 0; ce < le; ce++) {
          for (var ue = ce * I, ve = 0; ve < ge; ve++) Ku($, yc(q, ue + ve, B), ce * ge + ve, B);
          var Se = yc(q, ue + ge, B);
          Se < (1 << B) - 1 && (Q = true), Ku(Y, Se, 1 * ce, B);
        }
        return {
          colorSpace: U,
          colorsPerPixel: se,
          sMaskBitsPerComponent: Q ? B : void 0,
          colorBytes: A,
          alphaBytes: T,
          needSMask: Q
        };
      }(a) : function(J) {
        var H = J.data, V = J.channels === 1 ? "DeviceGray" : "DeviceRGB";
        return {
          colorSpace: V,
          colorsPerPixel: V === "DeviceGray" ? 1 : 3,
          colorBytes: H instanceof Uint16Array ? function(x) {
            for (var I = x.length, B = new Uint8Array(2 * I), U = new DataView(B.buffer, B.byteOffset, B.byteLength), se = 0; se < I; se++) U.setUint16(2 * se, x[se], false);
            return B;
          }(H) : H,
          needSMask: false
        };
      }(a);
      var w, S, p, E = o, L = E.colorSpace, j = E.colorsPerPixel, N = E.sMaskBitsPerComponent, z = E.colorBytes, G = E.alphaBytes, D = E.needSMask, ae = E.palette, be = E.mask, he = null;
      return r !== Be.API.image_compression.NONE && typeof Nc == "function" ? (he = function(J) {
        var H;
        switch (J) {
          case Be.API.image_compression.FAST:
            H = 11;
            break;
          case Be.API.image_compression.MEDIUM:
            H = 13;
            break;
          case Be.API.image_compression.SLOW:
            H = 14;
            break;
          default:
            H = 12;
        }
        return H;
      }(r), w = this.decode.FLATE_DECODE, S = "/Predictor ".concat(he, " /Colors ").concat(j, " /BitsPerComponent ").concat(m, " /Columns ").concat(f), n = zu(z, Math.ceil(f * j * m / 8), j, m, r), D && (p = zu(G, Math.ceil(f * N / 8), 1, N, r))) : (w = void 0, S = void 0, n = z, D && (p = G)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), {
        alias: t,
        data: n,
        index: e,
        filter: w,
        decodeParameters: S,
        transparency: be,
        palette: ae,
        sMask: p,
        predictor: he,
        width: f,
        height: c,
        bitsPerComponent: m,
        sMaskBitsPerComponent: N,
        colorSpace: L
      };
    }
  }, function(n) {
    n.processGIF89A = function(e, t, r, o) {
      var a = new cm(e), f = a.width, c = a.height, u = [];
      a.decodeAndBlitFrameRGBA(0, u);
      var d = {
        data: u,
        width: f,
        height: c
      }, m = new xc(100).encode(d, 100);
      return n.processJPEG.call(this, m, t, r, o);
    }, n.processGIF87A = n.processGIF89A;
  }(Be.API), nr.prototype.parseHeader = function() {
    if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
      var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
      this.palette = new Array(n);
      for (var e = 0; e < n; e++) {
        var t = this.datav.getUint8(this.pos++, true), r = this.datav.getUint8(this.pos++, true), o = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true);
        this.palette[e] = {
          red: o,
          green: r,
          blue: t,
          quad: a
        };
      }
    }
    this.height < 0 && (this.height *= -1, this.bottom_up = false);
  }, nr.prototype.parseBGR = function() {
    this.pos = this.offset;
    var n = "bit" + this.bitPP, e = this.width * this.height * 4;
    if (e > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    this.data = new Uint8Array(e);
    try {
      this[n]();
    } catch (t) {
      Ct.log("bit decode error:" + t);
    }
  }, nr.prototype.bit1 = function() {
    var n, e = Math.ceil(this.width / 8), t = e % 4;
    for (n = this.height - 1; n >= 0; n--) {
      for (var r = this.bottom_up ? n : this.height - 1 - n, o = 0; o < e; o++) for (var a = this.datav.getUint8(this.pos++, true), f = r * this.width * 4 + 8 * o * 4, c = 0; c < 8 && 8 * o + c < this.width; c++) {
        var u = this.palette[a >> 7 - c & 1];
        this.data[f + 4 * c] = u.blue, this.data[f + 4 * c + 1] = u.green, this.data[f + 4 * c + 2] = u.red, this.data[f + 4 * c + 3] = 255;
      }
      t !== 0 && (this.pos += 4 - t);
    }
  }, nr.prototype.bit4 = function() {
    for (var n = Math.ceil(this.width / 2), e = n % 4, t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, o = 0; o < n; o++) {
        var a = this.datav.getUint8(this.pos++, true), f = r * this.width * 4 + 2 * o * 4, c = a >> 4, u = 15 & a, d = this.palette[c];
        if (this.data[f] = d.blue, this.data[f + 1] = d.green, this.data[f + 2] = d.red, this.data[f + 3] = 255, 2 * o + 1 >= this.width) break;
        d = this.palette[u], this.data[f + 4] = d.blue, this.data[f + 4 + 1] = d.green, this.data[f + 4 + 2] = d.red, this.data[f + 4 + 3] = 255;
      }
      e !== 0 && (this.pos += 4 - e);
    }
  }, nr.prototype.bit8 = function() {
    for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
      for (var t = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
        var o = this.datav.getUint8(this.pos++, true), a = t * this.width * 4 + 4 * r;
        if (o < this.palette.length) {
          var f = this.palette[o];
          this.data[a] = f.red, this.data[a + 1] = f.green, this.data[a + 2] = f.blue, this.data[a + 3] = 255;
        } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
      }
      n !== 0 && (this.pos += 4 - n);
    }
  }, nr.prototype.bit15 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, o = 0; o < this.width; o++) {
        var a = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var f = (a & e) / e * 255 | 0, c = (a >> 5 & e) / e * 255 | 0, u = (a >> 10 & e) / e * 255 | 0, d = a >> 15 ? 255 : 0, m = r * this.width * 4 + 4 * o;
        this.data[m] = u, this.data[m + 1] = c, this.data[m + 2] = f, this.data[m + 3] = d;
      }
      this.pos += n;
    }
  }, nr.prototype.bit16 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
      for (var o = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
        var f = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var c = (f & e) / e * 255 | 0, u = (f >> 5 & t) / t * 255 | 0, d = (f >> 11) / e * 255 | 0, m = o * this.width * 4 + 4 * a;
        this.data[m] = d, this.data[m + 1] = u, this.data[m + 2] = c, this.data[m + 3] = 255;
      }
      this.pos += n;
    }
  }, nr.prototype.bit24 = function() {
    for (var n = this.height - 1; n >= 0; n--) {
      for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
        var r = this.datav.getUint8(this.pos++, true), o = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), f = e * this.width * 4 + 4 * t;
        this.data[f] = a, this.data[f + 1] = o, this.data[f + 2] = r, this.data[f + 3] = 255;
      }
      this.pos += this.width % 4;
    }
  }, nr.prototype.bit32 = function() {
    for (var n = this.height - 1; n >= 0; n--) for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
      var r = this.datav.getUint8(this.pos++, true), o = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), f = this.datav.getUint8(this.pos++, true), c = e * this.width * 4 + 4 * t;
      this.data[c] = a, this.data[c + 1] = o, this.data[c + 2] = r, this.data[c + 3] = f;
    }
  }, nr.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processBMP = function(e, t, r, o) {
      var a = new nr(e, false), f = a.width, c = a.height, u = {
        data: a.getData(),
        width: f,
        height: c
      }, d = new xc(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, o);
    };
  }(Be.API), Yu.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processWEBP = function(e, t, r, o) {
      var a = new Yu(e), f = a.width, c = a.height, u = {
        data: a.getData(),
        width: f,
        height: c
      }, d = new xc(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, o);
    };
  }(Be.API), Be.API.processRGBA = function(n, e, t) {
    for (var r = n.data, o = r.length, a = new Uint8Array(o / 4 * 3), f = new Uint8Array(o / 4), c = 0, u = 0, d = 0; d < o; d += 4) {
      var m = r[d], w = r[d + 1], S = r[d + 2], p = r[d + 3];
      a[c++] = m, a[c++] = w, a[c++] = S, f[u++] = p;
    }
    var E = this.__addimage__.arrayBufferToBinaryString(a);
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(f),
      data: E,
      index: e,
      alias: t,
      colorSpace: "DeviceRGB",
      bitsPerComponent: 8,
      width: n.width,
      height: n.height
    };
  }, Be.API.setLanguage = function(n) {
    return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = false), {
      af: "Afrikaans",
      sq: "Albanian",
      ar: "Arabic (Standard)",
      "ar-DZ": "Arabic (Algeria)",
      "ar-BH": "Arabic (Bahrain)",
      "ar-EG": "Arabic (Egypt)",
      "ar-IQ": "Arabic (Iraq)",
      "ar-JO": "Arabic (Jordan)",
      "ar-KW": "Arabic (Kuwait)",
      "ar-LB": "Arabic (Lebanon)",
      "ar-LY": "Arabic (Libya)",
      "ar-MA": "Arabic (Morocco)",
      "ar-OM": "Arabic (Oman)",
      "ar-QA": "Arabic (Qatar)",
      "ar-SA": "Arabic (Saudi Arabia)",
      "ar-SY": "Arabic (Syria)",
      "ar-TN": "Arabic (Tunisia)",
      "ar-AE": "Arabic (U.A.E.)",
      "ar-YE": "Arabic (Yemen)",
      an: "Aragonese",
      hy: "Armenian",
      as: "Assamese",
      ast: "Asturian",
      az: "Azerbaijani",
      eu: "Basque",
      be: "Belarusian",
      bn: "Bengali",
      bs: "Bosnian",
      br: "Breton",
      bg: "Bulgarian",
      my: "Burmese",
      ca: "Catalan",
      ch: "Chamorro",
      ce: "Chechen",
      zh: "Chinese",
      "zh-HK": "Chinese (Hong Kong)",
      "zh-CN": "Chinese (PRC)",
      "zh-SG": "Chinese (Singapore)",
      "zh-TW": "Chinese (Taiwan)",
      cv: "Chuvash",
      co: "Corsican",
      cr: "Cree",
      hr: "Croatian",
      cs: "Czech",
      da: "Danish",
      nl: "Dutch (Standard)",
      "nl-BE": "Dutch (Belgian)",
      en: "English",
      "en-AU": "English (Australia)",
      "en-BZ": "English (Belize)",
      "en-CA": "English (Canada)",
      "en-IE": "English (Ireland)",
      "en-JM": "English (Jamaica)",
      "en-NZ": "English (New Zealand)",
      "en-PH": "English (Philippines)",
      "en-ZA": "English (South Africa)",
      "en-TT": "English (Trinidad & Tobago)",
      "en-GB": "English (United Kingdom)",
      "en-US": "English (United States)",
      "en-ZW": "English (Zimbabwe)",
      eo: "Esperanto",
      et: "Estonian",
      fo: "Faeroese",
      fj: "Fijian",
      fi: "Finnish",
      fr: "French (Standard)",
      "fr-BE": "French (Belgium)",
      "fr-CA": "French (Canada)",
      "fr-FR": "French (France)",
      "fr-LU": "French (Luxembourg)",
      "fr-MC": "French (Monaco)",
      "fr-CH": "French (Switzerland)",
      fy: "Frisian",
      fur: "Friulian",
      gd: "Gaelic (Scots)",
      "gd-IE": "Gaelic (Irish)",
      gl: "Galacian",
      ka: "Georgian",
      de: "German (Standard)",
      "de-AT": "German (Austria)",
      "de-DE": "German (Germany)",
      "de-LI": "German (Liechtenstein)",
      "de-LU": "German (Luxembourg)",
      "de-CH": "German (Switzerland)",
      el: "Greek",
      gu: "Gujurati",
      ht: "Haitian",
      he: "Hebrew",
      hi: "Hindi",
      hu: "Hungarian",
      is: "Icelandic",
      id: "Indonesian",
      iu: "Inuktitut",
      ga: "Irish",
      it: "Italian (Standard)",
      "it-CH": "Italian (Switzerland)",
      ja: "Japanese",
      kn: "Kannada",
      ks: "Kashmiri",
      kk: "Kazakh",
      km: "Khmer",
      ky: "Kirghiz",
      tlh: "Klingon",
      ko: "Korean",
      "ko-KP": "Korean (North Korea)",
      "ko-KR": "Korean (South Korea)",
      la: "Latin",
      lv: "Latvian",
      lt: "Lithuanian",
      lb: "Luxembourgish",
      mk: "North Macedonia",
      ms: "Malay",
      ml: "Malayalam",
      mt: "Maltese",
      mi: "Maori",
      mr: "Marathi",
      mo: "Moldavian",
      nv: "Navajo",
      ng: "Ndonga",
      ne: "Nepali",
      no: "Norwegian",
      nb: "Norwegian (Bokmal)",
      nn: "Norwegian (Nynorsk)",
      oc: "Occitan",
      or: "Oriya",
      om: "Oromo",
      fa: "Persian",
      "fa-IR": "Persian/Iran",
      pl: "Polish",
      pt: "Portuguese",
      "pt-BR": "Portuguese (Brazil)",
      pa: "Punjabi",
      "pa-IN": "Punjabi (India)",
      "pa-PK": "Punjabi (Pakistan)",
      qu: "Quechua",
      rm: "Rhaeto-Romanic",
      ro: "Romanian",
      "ro-MO": "Romanian (Moldavia)",
      ru: "Russian",
      "ru-MO": "Russian (Moldavia)",
      sz: "Sami (Lappish)",
      sg: "Sango",
      sa: "Sanskrit",
      sc: "Sardinian",
      sd: "Sindhi",
      si: "Singhalese",
      sr: "Serbian",
      sk: "Slovak",
      sl: "Slovenian",
      so: "Somani",
      sb: "Sorbian",
      es: "Spanish",
      "es-AR": "Spanish (Argentina)",
      "es-BO": "Spanish (Bolivia)",
      "es-CL": "Spanish (Chile)",
      "es-CO": "Spanish (Colombia)",
      "es-CR": "Spanish (Costa Rica)",
      "es-DO": "Spanish (Dominican Republic)",
      "es-EC": "Spanish (Ecuador)",
      "es-SV": "Spanish (El Salvador)",
      "es-GT": "Spanish (Guatemala)",
      "es-HN": "Spanish (Honduras)",
      "es-MX": "Spanish (Mexico)",
      "es-NI": "Spanish (Nicaragua)",
      "es-PA": "Spanish (Panama)",
      "es-PY": "Spanish (Paraguay)",
      "es-PE": "Spanish (Peru)",
      "es-PR": "Spanish (Puerto Rico)",
      "es-ES": "Spanish (Spain)",
      "es-UY": "Spanish (Uruguay)",
      "es-VE": "Spanish (Venezuela)",
      sx: "Sutu",
      sw: "Swahili",
      sv: "Swedish",
      "sv-FI": "Swedish (Finland)",
      "sv-SV": "Swedish (Sweden)",
      ta: "Tamil",
      tt: "Tatar",
      te: "Teluga",
      th: "Thai",
      tig: "Tigre",
      ts: "Tsonga",
      tn: "Tswana",
      tr: "Turkish",
      tk: "Turkmen",
      uk: "Ukrainian",
      hsb: "Upper Sorbian",
      ur: "Urdu",
      ve: "Venda",
      vi: "Vietnamese",
      vo: "Volapuk",
      wa: "Walloon",
      cy: "Welsh",
      xh: "Xhosa",
      ji: "Yiddish",
      zu: "Zulu"
    }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === false && (this.internal.events.subscribe("putCatalog", function() {
      this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
    }), this.internal.languageSettings.isSubscribed = true)), this;
  }, ea = Be.API, Wo = ea.getCharWidthsArray = function(n, e) {
    var t, r, o = (e = e || {}).font || this.internal.getFont(), a = e.fontSize || this.internal.getFontSize(), f = e.charSpace || this.internal.getCharSpace(), c = e.widths ? e.widths : o.metadata.Unicode.widths, u = c.fof ? c.fof : 1, d = e.kerning ? e.kerning : o.metadata.Unicode.kerning, m = d.fof ? d.fof : 1, w = e.doKerning !== false, S = 0, p = n.length, E = 0, L = c[0] || u, j = [];
    for (t = 0; t < p; t++) r = n.charCodeAt(t), typeof o.metadata.widthOfString == "function" ? j.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(r)) + f * (1e3 / a) || 0) / 1e3) : (S = w && St(d[r]) === "object" && !isNaN(parseInt(d[r][E], 10)) ? d[r][E] / m : 0, j.push((c[r] || L) / u + S)), E = r;
    return j;
  }, Bu = ea.getStringUnitWidth = function(n, e) {
    var t = (e = e || {}).fontSize || this.internal.getFontSize(), r = e.font || this.internal.getFont(), o = e.charSpace || this.internal.getCharSpace();
    return ea.processArabic && (n = ea.processArabic(n)), typeof r.metadata.widthOfString == "function" ? r.metadata.widthOfString(n, t, o) / t : Wo.apply(this, arguments).reduce(function(a, f) {
      return a + f;
    }, 0);
  }, qu = function(n, e, t, r) {
    for (var o = [], a = 0, f = n.length, c = 0; a !== f && c + e[a] < t; ) c += e[a], a++;
    o.push(n.slice(0, a));
    var u = a;
    for (c = 0; a !== f; ) c + e[a] > r && (o.push(n.slice(u, a)), c = 0, u = a), c += e[a], a++;
    return u !== a && o.push(n.slice(u, a)), o;
  }, Uu = function(n, e, t) {
    t || (t = {});
    var r, o, a, f, c, u, d, m = [], w = [
      m
    ], S = t.textIndent || 0, p = 0, E = 0, L = n.split(" "), j = Wo.apply(this, [
      " ",
      t
    ])[0];
    if (u = t.lineIndent === -1 ? L[0].length + 2 : t.lineIndent || 0) {
      var N = Array(u).join(" "), z = [];
      L.map(function(D) {
        (D = D.split(/\s*\n/)).length > 1 ? z = z.concat(D.map(function(ae, be) {
          return (be && ae.length ? `
` : "") + ae;
        })) : z.push(D[0]);
      }), L = z, u = Bu.apply(this, [
        N,
        t
      ]);
    }
    for (a = 0, f = L.length; a < f; a++) {
      var G = 0;
      if (r = L[a], u && r[0] == `
` && (r = r.substr(1), G = 1), S + p + (E = (o = Wo.apply(this, [
        r,
        t
      ])).reduce(function(D, ae) {
        return D + ae;
      }, 0)) > e || G) {
        if (E > e) {
          for (c = qu.apply(this, [
            r,
            o,
            e - (S + p),
            e
          ]), m.push(c.shift()), m = [
            c.pop()
          ]; c.length; ) w.push([
            c.shift()
          ]);
          E = o.slice(r.length - (m[0] ? m[0].length : 0)).reduce(function(D, ae) {
            return D + ae;
          }, 0);
        } else m = [
          r
        ];
        w.push(m), S = E + u, p = j;
      } else m.push(r), S += p + E, p = j;
    }
    return d = u ? function(D, ae) {
      return (ae ? N : "") + D.join(" ");
    } : function(D) {
      return D.join(" ");
    }, w.map(d);
  }, ea.splitTextToSize = function(n, e, t) {
    var r, o = (t = t || {}).fontSize || this.internal.getFontSize(), a = (function(m) {
      if (m.widths && m.kerning) return {
        widths: m.widths,
        kerning: m.kerning
      };
      var w = this.internal.getFont(m.fontName, m.fontStyle), S = "Unicode";
      return w.metadata[S] ? {
        widths: w.metadata[S].widths || {
          0: 1
        },
        kerning: w.metadata[S].kerning || {}
      } : {
        font: w.metadata,
        fontSize: this.internal.getFontSize(),
        charSpace: this.internal.getCharSpace()
      };
    }).call(this, t);
    r = Array.isArray(n) ? n : String(n).split(/\r?\n/);
    var f = 1 * this.internal.scaleFactor * e / o;
    a.textIndent = t.textIndent ? 1 * t.textIndent * this.internal.scaleFactor / o : 0, a.lineIndent = t.lineIndent;
    var c, u, d = [];
    for (c = 0, u = r.length; c < u; c++) d = d.concat(Uu.apply(this, [
      r[c],
      f,
      a
    ]));
    return d;
  }, function(n) {
    n.__fontmetrics__ = n.__fontmetrics__ || {};
    for (var e = "0123456789abcdef", t = "klmnopqrstuvwxyz", r = {}, o = {}, a = 0; a < 16; a++) r[t[a]] = e[a], o[e[a]] = t[a];
    var f = function(S) {
      return "0x" + parseInt(S, 10).toString(16);
    }, c = n.__fontmetrics__.compress = function(S) {
      var p, E, L, j, N = [
        "{"
      ];
      for (var z in S) {
        if (p = S[z], isNaN(parseInt(z, 10)) ? E = "'" + z + "'" : (z = parseInt(z, 10), E = (E = f(z).slice(2)).slice(0, -1) + o[E.slice(-1)]), typeof p == "number") p < 0 ? (L = f(p).slice(3), j = "-") : (L = f(p).slice(2), j = ""), L = j + L.slice(0, -1) + o[L.slice(-1)];
        else {
          if (St(p) !== "object") throw new Error("Don't know what to do with value type " + St(p) + ".");
          L = c(p);
        }
        N.push(E + L);
      }
      return N.push("}"), N.join("");
    }, u = n.__fontmetrics__.uncompress = function(S) {
      if (typeof S != "string") throw new Error("Invalid argument passed to uncompress.");
      for (var p, E, L, j, N = {}, z = 1, G = N, D = [], ae = "", be = "", he = S.length - 1, J = 1; J < he; J += 1) (j = S[J]) == "'" ? p ? (L = p.join(""), p = void 0) : p = [] : p ? p.push(j) : j == "{" ? (D.push([
        G,
        L
      ]), G = {}, L = void 0) : j == "}" ? ((E = D.pop())[0][E[1]] = G, L = void 0, G = E[0]) : j == "-" ? z = -1 : L === void 0 ? r.hasOwnProperty(j) ? (ae += r[j], L = parseInt(ae, 16) * z, z = 1, ae = "") : ae += j : r.hasOwnProperty(j) ? (be += r[j], G[L] = parseInt(be, 16) * z, z = 1, L = void 0, be = "") : be += j;
      return N;
    }, d = {
      codePages: [
        "WinAnsiEncoding"
      ],
      WinAnsiEncoding: u("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
    }, m = {
      Unicode: {
        Courier: d,
        "Courier-Bold": d,
        "Courier-BoldOblique": d,
        "Courier-Oblique": d,
        Helvetica: d,
        "Helvetica-Bold": d,
        "Helvetica-BoldOblique": d,
        "Helvetica-Oblique": d,
        "Times-Roman": d,
        "Times-Bold": d,
        "Times-BoldItalic": d,
        "Times-Italic": d
      }
    }, w = {
      Unicode: {
        "Courier-Oblique": u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
        "Times-BoldItalic": u("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
        "Helvetica-Bold": u("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
        Courier: u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
        "Courier-BoldOblique": u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
        "Times-Bold": u("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
        Symbol: u("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
        Helvetica: u("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
        "Helvetica-BoldOblique": u("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
        ZapfDingbats: u("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
        "Courier-Bold": u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
        "Times-Italic": u("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
        "Times-Roman": u("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
        "Helvetica-Oblique": u("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
      }
    };
    n.events.push([
      "addFont",
      function(S) {
        var p = S.font, E = w.Unicode[p.postScriptName];
        E && (p.metadata.Unicode = {}, p.metadata.Unicode.widths = E.widths, p.metadata.Unicode.kerning = E.kerning);
        var L = m.Unicode[p.postScriptName];
        L && (p.metadata.Unicode.encoding = L, p.encoding = L.codePages[0]);
      }
    ]);
  }(Be.API), function(n) {
    var e = function(t) {
      for (var r = t.length, o = new Uint8Array(r), a = 0; a < r; a++) o[a] = t.charCodeAt(a);
      return o;
    };
    n.API.events.push([
      "addFont",
      function(t) {
        var r = void 0, o = t.font, a = t.instance;
        if (!o.isStandardFont) {
          if (a === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + o.postScriptName + "').");
          if (typeof (r = a.existsFileInVFS(o.postScriptName) === false ? a.loadFile(o.postScriptName) : a.getFileFromVFS(o.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + o.postScriptName + "').");
          (function(f, c) {
            c = /^\x00\x01\x00\x00/.test(c) ? e(c) : e(Xo(c)), f.metadata = n.API.TTFFont.open(c), f.metadata.Unicode = f.metadata.Unicode || {
              encoding: {},
              kerning: {},
              widths: []
            }, f.metadata.glyIdsUsed = [
              0
            ];
          })(o, r);
        }
      }
    ]);
  }(Be), Be.API.addSvgAsImage = function(n, e, t, r, o, a, f, c) {
    if (isNaN(e) || isNaN(t)) throw Ct.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(r) || isNaN(o)) throw Ct.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var u = document.createElement("canvas");
    u.width = r, u.height = o;
    var d = u.getContext("2d");
    d.fillStyle = "#fff", d.fillRect(0, 0, u.width, u.height);
    var m = {
      ignoreMouse: true,
      ignoreAnimation: true,
      ignoreDimensions: true
    }, w = this;
    return (Xe.canvg ? Promise.resolve(Xe.canvg) : Go(() => import("./index.es-BzY8SKgb.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).catch(function(S) {
      return Promise.reject(new Error("Could not load canvg: " + S));
    }).then(function(S) {
      return S.default ? S.default : S;
    }).then(function(S) {
      return S.fromString(d, n, m);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(S) {
      return S.render(m);
    }).then(function() {
      w.addImage(u.toDataURL("image/jpeg", 1), e, t, r, o, f, c);
    });
  }, Be.API.putTotalPages = function(n) {
    var e, t = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), t = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), t = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for (var r = 1; r <= this.internal.getNumberOfPages(); r++) for (var o = 0; o < this.internal.pages[r].length; o++) this.internal.pages[r][o] = this.internal.pages[r][o].replace(e, t);
    return this;
  }, Be.API.viewerPreferences = function(n, e) {
    var t;
    n = n || {}, e = e || false;
    var r, o, a, f = {
      HideToolbar: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.3
      },
      HideMenubar: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.3
      },
      HideWindowUI: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.3
      },
      FitWindow: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.3
      },
      CenterWindow: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.3
      },
      DisplayDocTitle: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.4
      },
      NonFullScreenPageMode: {
        defaultValue: "UseNone",
        value: "UseNone",
        type: "name",
        explicitSet: false,
        valueSet: [
          "UseNone",
          "UseOutlines",
          "UseThumbs",
          "UseOC"
        ],
        pdfVersion: 1.3
      },
      Direction: {
        defaultValue: "L2R",
        value: "L2R",
        type: "name",
        explicitSet: false,
        valueSet: [
          "L2R",
          "R2L"
        ],
        pdfVersion: 1.3
      },
      ViewArea: {
        defaultValue: "CropBox",
        value: "CropBox",
        type: "name",
        explicitSet: false,
        valueSet: [
          "MediaBox",
          "CropBox",
          "TrimBox",
          "BleedBox",
          "ArtBox"
        ],
        pdfVersion: 1.4
      },
      ViewClip: {
        defaultValue: "CropBox",
        value: "CropBox",
        type: "name",
        explicitSet: false,
        valueSet: [
          "MediaBox",
          "CropBox",
          "TrimBox",
          "BleedBox",
          "ArtBox"
        ],
        pdfVersion: 1.4
      },
      PrintArea: {
        defaultValue: "CropBox",
        value: "CropBox",
        type: "name",
        explicitSet: false,
        valueSet: [
          "MediaBox",
          "CropBox",
          "TrimBox",
          "BleedBox",
          "ArtBox"
        ],
        pdfVersion: 1.4
      },
      PrintClip: {
        defaultValue: "CropBox",
        value: "CropBox",
        type: "name",
        explicitSet: false,
        valueSet: [
          "MediaBox",
          "CropBox",
          "TrimBox",
          "BleedBox",
          "ArtBox"
        ],
        pdfVersion: 1.4
      },
      PrintScaling: {
        defaultValue: "AppDefault",
        value: "AppDefault",
        type: "name",
        explicitSet: false,
        valueSet: [
          "AppDefault",
          "None"
        ],
        pdfVersion: 1.6
      },
      Duplex: {
        defaultValue: "",
        value: "none",
        type: "name",
        explicitSet: false,
        valueSet: [
          "Simplex",
          "DuplexFlipShortEdge",
          "DuplexFlipLongEdge",
          "none"
        ],
        pdfVersion: 1.7
      },
      PickTrayByPDFSize: {
        defaultValue: false,
        value: false,
        type: "boolean",
        explicitSet: false,
        valueSet: [
          true,
          false
        ],
        pdfVersion: 1.7
      },
      PrintPageRange: {
        defaultValue: "",
        value: "",
        type: "array",
        explicitSet: false,
        valueSet: null,
        pdfVersion: 1.7
      },
      NumCopies: {
        defaultValue: 1,
        value: 1,
        type: "integer",
        explicitSet: false,
        valueSet: null,
        pdfVersion: 1.7
      }
    }, c = Object.keys(f), u = [], d = 0, m = 0, w = 0;
    function S(E, L) {
      var j, N = false;
      for (j = 0; j < E.length; j += 1) E[j] === L && (N = true);
      return N;
    }
    if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(f)), this.internal.viewerpreferences.isSubscribed = false), t = this.internal.viewerpreferences.configuration, n === "reset" || e === true) {
      var p = c.length;
      for (w = 0; w < p; w += 1) t[c[w]].value = t[c[w]].defaultValue, t[c[w]].explicitSet = false;
    }
    if (St(n) === "object") {
      for (o in n) if (a = n[o], S(c, o) && a !== void 0) {
        if (t[o].type === "boolean" && typeof a == "boolean") t[o].value = a;
        else if (t[o].type === "name" && S(t[o].valueSet, a)) t[o].value = a;
        else if (t[o].type === "integer" && Number.isInteger(a)) t[o].value = a;
        else if (t[o].type === "array") {
          for (d = 0; d < a.length; d += 1) if (r = true, a[d].length === 1 && typeof a[d][0] == "number") u.push(String(a[d] - 1));
          else if (a[d].length > 1) {
            for (m = 0; m < a[d].length; m += 1) typeof a[d][m] != "number" && (r = false);
            r === true && u.push([
              a[d][0] - 1,
              a[d][1] - 1
            ].join(" "));
          }
          t[o].value = "[" + u.join(" ") + "]";
        } else t[o].value = t[o].defaultValue;
        t[o].explicitSet = true;
      }
    }
    return this.internal.viewerpreferences.isSubscribed === false && (this.internal.events.subscribe("putCatalog", function() {
      var E, L = [];
      for (E in t) t[E].explicitSet === true && (t[E].type === "name" ? L.push("/" + E + " /" + t[E].value) : L.push("/" + E + " " + t[E].value));
      L.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + L.join(`
`) + `
>>`);
    }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = t, this;
  }, Be.API.addMetadata = function(n, e) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
      metadata: n,
      namespaceUri: e ?? "http://jspdf.default.namespaceuri/",
      rawXml: typeof e == "boolean" && e
    }, this.internal.events.subscribe("putCatalog", um), this.internal.events.subscribe("postPutResources", lm)), this;
  }, function(n) {
    var e = n.API, t = e.pdfEscape16 = function(a, f) {
      for (var c, u = f.metadata.Unicode.widths, d = [
        "",
        "0",
        "00",
        "000",
        "0000"
      ], m = [
        ""
      ], w = 0, S = a.length; w < S; ++w) {
        if (c = f.metadata.characterToGlyph(a.charCodeAt(w)), f.metadata.glyIdsUsed.push(c), f.metadata.toUnicode[c] = a.charCodeAt(w), u.indexOf(c) == -1 && (u.push(c), u.push([
          parseInt(f.metadata.widthOfGlyph(c), 10)
        ])), c == "0") return m.join("");
        c = c.toString(16), m.push(d[4 - c.length], c);
      }
      return m.join("");
    }, r = function(a) {
      var f, c, u, d, m, w, S;
      for (m = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, u = [], w = 0, S = (c = Object.keys(a).sort(function(p, E) {
        return p - E;
      })).length; w < S; w++) f = c[w], u.length >= 100 && (m += `
` + u.length + ` beginbfchar
` + u.join(`
`) + `
endbfchar`, u = []), a[f] !== void 0 && a[f] !== null && typeof a[f].toString == "function" && (d = ("0000" + a[f].toString(16)).slice(-4), f = ("0000" + (+f).toString(16)).slice(-4), u.push("<" + f + "><" + d + ">"));
      return u.length && (m += `
` + u.length + ` beginbfchar
` + u.join(`
`) + `
endbfchar
`), m + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
    };
    e.events.push([
      "putFont",
      function(a) {
        (function(f) {
          var c = f.font, u = f.out, d = f.newObject, m = f.putStream;
          if (c.metadata instanceof n.API.TTFFont && c.encoding === "Identity-H") {
            for (var w = c.metadata.Unicode.widths, S = c.metadata.subset.encode(c.metadata.glyIdsUsed, 1), p = "", E = 0; E < S.length; E++) p += String.fromCharCode(S[E]);
            var L = d();
            m({
              data: p,
              addLength1: true,
              objectId: L
            }), u("endobj");
            var j = d();
            m({
              data: r(c.metadata.toUnicode),
              addLength1: true,
              objectId: j
            }), u("endobj");
            var N = d();
            u("<<"), u("/Type /FontDescriptor"), u("/FontName /" + na(c.fontName)), u("/FontFile2 " + L + " 0 R"), u("/FontBBox " + n.API.PDFObject.convert(c.metadata.bbox)), u("/Flags " + c.metadata.flags), u("/StemV " + c.metadata.stemV), u("/ItalicAngle " + c.metadata.italicAngle), u("/Ascent " + c.metadata.ascender), u("/Descent " + c.metadata.decender), u("/CapHeight " + c.metadata.capHeight), u(">>"), u("endobj");
            var z = d();
            u("<<"), u("/Type /Font"), u("/BaseFont /" + na(c.fontName)), u("/FontDescriptor " + N + " 0 R"), u("/W " + n.API.PDFObject.convert(w)), u("/CIDToGIDMap /Identity"), u("/DW 1000"), u("/Subtype /CIDFontType2"), u("/CIDSystemInfo"), u("<<"), u("/Supplement 0"), u("/Registry (Adobe)"), u("/Ordering (" + c.encoding + ")"), u(">>"), u(">>"), u("endobj"), c.objectNumber = d(), u("<<"), u("/Type /Font"), u("/Subtype /Type0"), u("/ToUnicode " + j + " 0 R"), u("/BaseFont /" + na(c.fontName)), u("/Encoding /" + c.encoding), u("/DescendantFonts [" + z + " 0 R]"), u(">>"), u("endobj"), c.isAlreadyPutted = true;
          }
        })(a);
      }
    ]), e.events.push([
      "putFont",
      function(a) {
        (function(f) {
          var c = f.font, u = f.out, d = f.newObject, m = f.putStream;
          if (c.metadata instanceof n.API.TTFFont && c.encoding === "WinAnsiEncoding") {
            for (var w = c.metadata.rawData, S = "", p = 0; p < w.length; p++) S += String.fromCharCode(w[p]);
            var E = d();
            m({
              data: S,
              addLength1: true,
              objectId: E
            }), u("endobj");
            var L = d();
            m({
              data: r(c.metadata.toUnicode),
              addLength1: true,
              objectId: L
            }), u("endobj");
            var j = d();
            u("<<"), u("/Descent " + c.metadata.decender), u("/CapHeight " + c.metadata.capHeight), u("/StemV " + c.metadata.stemV), u("/Type /FontDescriptor"), u("/FontFile2 " + E + " 0 R"), u("/Flags 96"), u("/FontBBox " + n.API.PDFObject.convert(c.metadata.bbox)), u("/FontName /" + na(c.fontName)), u("/ItalicAngle " + c.metadata.italicAngle), u("/Ascent " + c.metadata.ascender), u(">>"), u("endobj"), c.objectNumber = d();
            for (var N = 0; N < c.metadata.hmtx.widths.length; N++) c.metadata.hmtx.widths[N] = parseInt(c.metadata.hmtx.widths[N] * (1e3 / c.metadata.head.unitsPerEm));
            u("<</Subtype/TrueType/Type/Font/ToUnicode " + L + " 0 R/BaseFont/" + na(c.fontName) + "/FontDescriptor " + j + " 0 R/Encoding/" + c.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(c.metadata.hmtx.widths) + ">>"), u("endobj"), c.isAlreadyPutted = true;
          }
        })(a);
      }
    ]);
    var o = function(a) {
      var f, c = a.text || "", u = a.x, d = a.y, m = a.options || {}, w = a.mutex || {}, S = w.pdfEscape, p = w.activeFontKey, E = w.fonts, L = p, j = "", N = 0, z = "", G = E[L].encoding;
      if (E[L].encoding !== "Identity-H") return {
        text: c,
        x: u,
        y: d,
        options: m,
        mutex: w
      };
      for (z = c, L = p, Array.isArray(c) && (z = c[0]), N = 0; N < z.length; N += 1) E[L].metadata.hasOwnProperty("cmap") && (f = E[L].metadata.cmap.unicode.codeMap[z[N].charCodeAt(0)]), f || z[N].charCodeAt(0) < 256 && E[L].metadata.hasOwnProperty("Unicode") ? j += z[N] : j += "";
      var D = "";
      return parseInt(L.slice(1)) < 14 || G === "WinAnsiEncoding" ? D = S(j, L).split("").map(function(ae) {
        return ae.charCodeAt(0).toString(16);
      }).join("") : G === "Identity-H" && (D = t(j, E[L])), w.isHex = true, {
        text: D,
        x: u,
        y: d,
        options: m,
        mutex: w
      };
    };
    e.events.push([
      "postProcessText",
      function(a) {
        var f = a.text || "", c = [], u = {
          text: f,
          x: a.x,
          y: a.y,
          options: a.options,
          mutex: a.mutex
        };
        if (Array.isArray(f)) {
          var d = 0;
          for (d = 0; d < f.length; d += 1) Array.isArray(f[d]) && f[d].length === 3 ? c.push([
            o(Object.assign({}, u, {
              text: f[d][0]
            })).text,
            f[d][1],
            f[d][2]
          ]) : c.push(o(Object.assign({}, u, {
            text: f[d]
          })).text);
          a.text = c;
        } else a.text = o(Object.assign({}, u, {
          text: f
        })).text;
      }
    ]);
  }(Be), function(n) {
    var e = function() {
      return this.internal.vFS === void 0 && (this.internal.vFS = {}), true;
    };
    n.existsFileInVFS = function(t) {
      return e.call(this), this.internal.vFS[t] !== void 0;
    }, n.addFileToVFS = function(t, r) {
      return e.call(this), this.internal.vFS[t] = r, this;
    }, n.getFileFromVFS = function(t) {
      return e.call(this), this.internal.vFS[t] !== void 0 ? this.internal.vFS[t] : null;
    };
  }(Be.API), function(n) {
    n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(r) {
      var o, a, f, c, u, d, m, w = e, S = [
        [
          0,
          3,
          0,
          1,
          0,
          0,
          0
        ],
        [
          0,
          3,
          0,
          1,
          2,
          2,
          0
        ],
        [
          0,
          3,
          0,
          17,
          2,
          0,
          1
        ],
        [
          0,
          3,
          5,
          5,
          4,
          1,
          0
        ],
        [
          0,
          3,
          21,
          21,
          4,
          0,
          1
        ],
        [
          0,
          3,
          5,
          5,
          4,
          2,
          0
        ]
      ], p = [
        [
          2,
          0,
          1,
          1,
          0,
          1,
          0
        ],
        [
          2,
          0,
          1,
          1,
          0,
          2,
          0
        ],
        [
          2,
          0,
          2,
          1,
          3,
          2,
          0
        ],
        [
          2,
          0,
          2,
          33,
          3,
          1,
          1
        ]
      ], E = {
        L: 0,
        R: 1,
        EN: 2,
        AN: 3,
        N: 4,
        B: 5,
        S: 6
      }, L = {
        0: 0,
        5: 1,
        6: 2,
        7: 3,
        32: 4,
        251: 5,
        254: 6,
        255: 7
      }, j = [
        "(",
        ")",
        "(",
        "<",
        ">",
        "<",
        "[",
        "]",
        "[",
        "{",
        "}",
        "{",
        "\xAB",
        "\xBB",
        "\xAB",
        "\u2039",
        "\u203A",
        "\u2039",
        "\u2045",
        "\u2046",
        "\u2045",
        "\u207D",
        "\u207E",
        "\u207D",
        "\u208D",
        "\u208E",
        "\u208D",
        "\u2264",
        "\u2265",
        "\u2264",
        "\u2329",
        "\u232A",
        "\u2329",
        "\uFE59",
        "\uFE5A",
        "\uFE59",
        "\uFE5B",
        "\uFE5C",
        "\uFE5B",
        "\uFE5D",
        "\uFE5E",
        "\uFE5D",
        "\uFE64",
        "\uFE65",
        "\uFE64"
      ], N = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), z = false, G = 0;
      this.__bidiEngine__ = {};
      var D = function(x) {
        var I = x.charCodeAt(), B = I >> 8, U = L[B];
        return U !== void 0 ? w[256 * U + (255 & I)] : B === 252 || B === 253 ? "AL" : N.test(B) ? "L" : B === 8 ? "R" : "N";
      }, ae = function(x) {
        for (var I, B = 0; B < x.length; B++) {
          if ((I = D(x.charAt(B))) === "L") return false;
          if (I === "R") return true;
        }
        return false;
      }, be = function(x, I, B, U) {
        var se, le, ge, ne, te = I[U];
        switch (te) {
          case "L":
          case "R":
          case "LRE":
          case "RLE":
          case "LRO":
          case "RLO":
          case "PDF":
            z = false;
            break;
          case "N":
          case "AN":
            break;
          case "EN":
            z && (te = "AN");
            break;
          case "AL":
            z = true, te = "R";
            break;
          case "WS":
          case "BN":
            te = "N";
            break;
          case "CS":
            U < 1 || U + 1 >= I.length || (se = B[U - 1]) !== "EN" && se !== "AN" || (le = I[U + 1]) !== "EN" && le !== "AN" ? te = "N" : z && (le = "AN"), te = le === se ? le : "N";
            break;
          case "ES":
            te = (se = U > 0 ? B[U - 1] : "B") === "EN" && U + 1 < I.length && I[U + 1] === "EN" ? "EN" : "N";
            break;
          case "ET":
            if (U > 0 && B[U - 1] === "EN") {
              te = "EN";
              break;
            }
            if (z) {
              te = "N";
              break;
            }
            for (ge = U + 1, ne = I.length; ge < ne && I[ge] === "ET"; ) ge++;
            te = ge < ne && I[ge] === "EN" ? "EN" : "N";
            break;
          case "NSM":
            if (f && !c) {
              for (ne = I.length, ge = U + 1; ge < ne && I[ge] === "NSM"; ) ge++;
              if (ge < ne) {
                var Ae = x[U], we = Ae >= 1425 && Ae <= 2303 || Ae === 64286;
                if (se = I[ge], we && (se === "R" || se === "AL")) {
                  te = "R";
                  break;
                }
              }
            }
            te = U < 1 || (se = I[U - 1]) === "B" ? "N" : B[U - 1];
            break;
          case "B":
            z = false, o = true, te = G;
            break;
          case "S":
            a = true, te = "N";
        }
        return te;
      }, he = function(x, I, B) {
        var U = x.split("");
        return B && J(U, B, {
          hiLevel: G
        }), U.reverse(), I && I.reverse(), U.join("");
      }, J = function(x, I, B) {
        var U, se, le, ge, ne, te = -1, Ae = x.length, we = 0, A = [], T = G ? p : S, q = [];
        for (z = false, o = false, a = false, se = 0; se < Ae; se++) q[se] = D(x[se]);
        for (le = 0; le < Ae; le++) {
          if (ne = we, A[le] = be(x, q, A, le), U = 240 & (we = T[ne][E[A[le]]]), we &= 15, I[le] = ge = T[we][5], U > 0) if (U === 16) {
            for (se = te; se < le; se++) I[se] = 1;
            te = -1;
          } else te = -1;
          if (T[we][6]) te === -1 && (te = le);
          else if (te > -1) {
            for (se = te; se < le; se++) I[se] = ge;
            te = -1;
          }
          q[le] === "B" && (I[le] = 0), B.hiLevel |= ge;
        }
        a && function($, Y, Q) {
          for (var ce = 0; ce < Q; ce++) if ($[ce] === "S") {
            Y[ce] = G;
            for (var ue = ce - 1; ue >= 0 && $[ue] === "WS"; ue--) Y[ue] = G;
          }
        }(q, I, Ae);
      }, H = function(x, I, B, U, se) {
        if (!(se.hiLevel < x)) {
          if (x === 1 && G === 1 && !o) return I.reverse(), void (B && B.reverse());
          for (var le, ge, ne, te, Ae = I.length, we = 0; we < Ae; ) {
            if (U[we] >= x) {
              for (ne = we + 1; ne < Ae && U[ne] >= x; ) ne++;
              for (te = we, ge = ne - 1; te < ge; te++, ge--) le = I[te], I[te] = I[ge], I[ge] = le, B && (le = B[te], B[te] = B[ge], B[ge] = le);
              we = ne;
            }
            we++;
          }
        }
      }, V = function(x, I, B) {
        var U = x.split(""), se = {
          hiLevel: G
        };
        return B || (B = []), J(U, B, se), function(le, ge, ne) {
          if (ne.hiLevel !== 0 && m) for (var te, Ae = 0; Ae < le.length; Ae++) ge[Ae] === 1 && (te = j.indexOf(le[Ae])) >= 0 && (le[Ae] = j[te + 1]);
        }(U, B, se), H(2, U, I, B, se), H(1, U, I, B, se), U.join("");
      };
      return this.__bidiEngine__.doBidiReorder = function(x, I, B) {
        if (function(se, le) {
          if (le) for (var ge = 0; ge < se.length; ge++) le[ge] = ge;
          c === void 0 && (c = ae(se)), d === void 0 && (d = ae(se));
        }(x, I), f || !u || d) if (f && u && c ^ d) G = c ? 1 : 0, x = he(x, I, B);
        else if (!f && u && d) G = c ? 1 : 0, x = V(x, I, B), x = he(x, I);
        else if (!f || c || u || d) {
          if (f && !u && c ^ d) x = he(x, I), c ? (G = 0, x = V(x, I, B)) : (G = 1, x = V(x, I, B), x = he(x, I));
          else if (f && c && !u && d) G = 1, x = V(x, I, B), x = he(x, I);
          else if (!f && !u && c ^ d) {
            var U = m;
            c ? (G = 1, x = V(x, I, B), G = 0, m = false, x = V(x, I, B), m = U) : (G = 0, x = V(x, I, B), x = he(x, I), G = 1, m = false, x = V(x, I, B), m = U, x = he(x, I));
          }
        } else G = 0, x = V(x, I, B);
        else G = c ? 1 : 0, x = V(x, I, B);
        return x;
      }, this.__bidiEngine__.setOptions = function(x) {
        x && (f = x.isInputVisual, u = x.isOutputVisual, c = x.isInputRtl, d = x.isOutputRtl, m = x.isSymmetricSwapping);
      }, this.__bidiEngine__.setOptions(r), this.__bidiEngine__;
    };
    var e = [
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "S",
      "B",
      "S",
      "WS",
      "B",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "B",
      "B",
      "B",
      "S",
      "WS",
      "N",
      "N",
      "ET",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "N",
      "ES",
      "CS",
      "ES",
      "CS",
      "CS",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "CS",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "N",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "B",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "CS",
      "N",
      "ET",
      "ET",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "L",
      "N",
      "N",
      "BN",
      "N",
      "N",
      "ET",
      "ET",
      "EN",
      "EN",
      "N",
      "L",
      "N",
      "N",
      "N",
      "EN",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "ET",
      "N",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "R",
      "NSM",
      "R",
      "NSM",
      "NSM",
      "R",
      "NSM",
      "NSM",
      "R",
      "NSM",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "N",
      "N",
      "N",
      "N",
      "N",
      "R",
      "R",
      "R",
      "R",
      "R",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "N",
      "N",
      "AL",
      "ET",
      "ET",
      "AL",
      "CS",
      "AL",
      "N",
      "N",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "AL",
      "AL",
      "N",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "AN",
      "ET",
      "AN",
      "AN",
      "AL",
      "AL",
      "AL",
      "NSM",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "AN",
      "N",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "AL",
      "AL",
      "NSM",
      "NSM",
      "N",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "AL",
      "AL",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "N",
      "AL",
      "AL",
      "NSM",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "N",
      "N",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "AL",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "R",
      "R",
      "N",
      "N",
      "N",
      "N",
      "R",
      "N",
      "N",
      "N",
      "N",
      "N",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "WS",
      "BN",
      "BN",
      "BN",
      "L",
      "R",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "WS",
      "B",
      "LRE",
      "RLE",
      "PDF",
      "LRO",
      "RLO",
      "CS",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "CS",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "WS",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "N",
      "LRI",
      "RLI",
      "FSI",
      "PDI",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "EN",
      "L",
      "N",
      "N",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "ES",
      "ES",
      "N",
      "N",
      "N",
      "L",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "ES",
      "ES",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "R",
      "NSM",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "ES",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "N",
      "R",
      "R",
      "R",
      "R",
      "R",
      "N",
      "R",
      "N",
      "R",
      "R",
      "N",
      "R",
      "R",
      "N",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "NSM",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "CS",
      "N",
      "CS",
      "N",
      "N",
      "CS",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "ET",
      "N",
      "N",
      "ES",
      "ES",
      "N",
      "N",
      "N",
      "N",
      "N",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "N",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "N",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "AL",
      "N",
      "N",
      "BN",
      "N",
      "N",
      "N",
      "ET",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "N",
      "ES",
      "CS",
      "ES",
      "CS",
      "CS",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "EN",
      "CS",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
      "N",
      "N",
      "L",
      "L",
      "L",
      "N",
      "N",
      "N",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "ET",
      "ET",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N"
    ], t = new n.__bidiEngine__({
      isInputVisual: true
    });
    n.API.events.push([
      "postProcessText",
      function(r) {
        var o = r.text;
        r.x, r.y;
        var a = r.options || {};
        r.mutex, a.lang;
        var f = [];
        if (a.isInputVisual = typeof a.isInputVisual != "boolean" || a.isInputVisual, t.setOptions(a), Object.prototype.toString.call(o) === "[object Array]") {
          var c = 0;
          for (f = [], c = 0; c < o.length; c += 1) Object.prototype.toString.call(o[c]) === "[object Array]" ? f.push([
            t.doBidiReorder(o[c][0]),
            o[c][1],
            o[c][2]
          ]) : f.push([
            t.doBidiReorder(o[c])
          ]);
          r.text = f;
        } else r.text = t.doBidiReorder(o);
        t.setOptions({
          isInputVisual: true
        });
      }
    ]);
  }(Be), Be.API.TTFFont = function() {
    function n(e) {
      var t;
      if (this.rawData = e, t = this.contents = new oi(e), this.contents.pos = 4, t.readString(4) === "ttcf") throw new Error("TTCF not supported.");
      t.pos = 0, this.parse(), this.subset = new Sm(this), this.registerTTF();
    }
    return n.open = function(e) {
      return new n(e);
    }, n.prototype.parse = function() {
      return this.directory = new fm(this.contents), this.head = new dm(this), this.name = new bm(this), this.cmap = new Qh(this), this.toUnicode = {}, this.hhea = new pm(this), this.maxp = new wm(this), this.hmtx = new ym(this), this.post = new gm(this), this.os2 = new mm(this), this.loca = new Am(this), this.glyf = new xm(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
        this.head.xMin,
        this.head.yMin,
        this.head.xMax,
        this.head.yMax
      ];
    }, n.prototype.registerTTF = function() {
      var e, t, r, o, a;
      if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
        var f, c, u, d;
        for (d = [], f = 0, c = (u = this.bbox).length; f < c; f++) e = u[f], d.push(Math.round(e * this.scaleFactor));
        return d;
      }).call(this), this.stemV = 0, this.post.exists ? (r = 255 & (o = this.post.italic_angle), 32768 & (t = o >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + r)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (a = this.familyClass) === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
    }, n.prototype.characterToGlyph = function(e) {
      var t;
      return ((t = this.cmap.unicode) != null ? t.codeMap[e] : void 0) || 0;
    }, n.prototype.widthOfGlyph = function(e) {
      var t;
      return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t;
    }, n.prototype.widthOfString = function(e, t, r) {
      var o, a, f, c;
      for (f = 0, a = 0, c = (e = "" + e).length; 0 <= c ? a < c : a > c; a = 0 <= c ? ++a : --a) o = e.charCodeAt(a), f += this.widthOfGlyph(this.characterToGlyph(o)) + r * (1e3 / t) || 0;
      return f * (t / 1e3);
    }, n.prototype.lineHeight = function(e, t) {
      var r;
      return t == null && (t = false), r = t ? this.lineGap : 0, (this.ascender + r - this.decender) / 1e3 * e;
    }, n;
  }();
  var ir, oi = function() {
    function n(e) {
      this.data = e ?? [], this.pos = 0, this.length = this.data.length;
    }
    return n.prototype.readByte = function() {
      return this.data[this.pos++];
    }, n.prototype.writeByte = function(e) {
      return this.data[this.pos++] = e;
    }, n.prototype.readUInt32 = function() {
      return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
    }, n.prototype.writeUInt32 = function(e) {
      return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
    }, n.prototype.readInt32 = function() {
      var e;
      return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
    }, n.prototype.writeInt32 = function(e) {
      return e < 0 && (e += 4294967296), this.writeUInt32(e);
    }, n.prototype.readUInt16 = function() {
      return this.readByte() << 8 | this.readByte();
    }, n.prototype.writeUInt16 = function(e) {
      return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
    }, n.prototype.readInt16 = function() {
      var e;
      return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
    }, n.prototype.writeInt16 = function(e) {
      return e < 0 && (e += 65536), this.writeUInt16(e);
    }, n.prototype.readString = function(e) {
      var t, r;
      for (r = [], t = 0; 0 <= e ? t < e : t > e; t = 0 <= e ? ++t : --t) r[t] = String.fromCharCode(this.readByte());
      return r.join("");
    }, n.prototype.writeString = function(e) {
      var t, r, o;
      for (o = [], t = 0, r = e.length; 0 <= r ? t < r : t > r; t = 0 <= r ? ++t : --t) o.push(this.writeByte(e.charCodeAt(t)));
      return o;
    }, n.prototype.readShort = function() {
      return this.readInt16();
    }, n.prototype.writeShort = function(e) {
      return this.writeInt16(e);
    }, n.prototype.readLongLong = function() {
      var e, t, r, o, a, f, c, u;
      return e = this.readByte(), t = this.readByte(), r = this.readByte(), o = this.readByte(), a = this.readByte(), f = this.readByte(), c = this.readByte(), u = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ o) + 16777216 * (255 ^ a) + 65536 * (255 ^ f) + 256 * (255 ^ c) + (255 ^ u) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * r + 4294967296 * o + 16777216 * a + 65536 * f + 256 * c + u;
    }, n.prototype.writeLongLong = function(e) {
      var t, r;
      return t = Math.floor(e / 4294967296), r = 4294967295 & e, this.writeByte(t >> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t), this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r);
    }, n.prototype.readInt = function() {
      return this.readInt32();
    }, n.prototype.writeInt = function(e) {
      return this.writeInt32(e);
    }, n.prototype.read = function(e) {
      var t, r;
      for (t = [], r = 0; 0 <= e ? r < e : r > e; r = 0 <= e ? ++r : --r) t.push(this.readByte());
      return t;
    }, n.prototype.write = function(e) {
      var t, r, o, a;
      for (a = [], r = 0, o = e.length; r < o; r++) t = e[r], a.push(this.writeByte(t));
      return a;
    }, n;
  }(), fm = function() {
    var n;
    function e(t) {
      var r, o, a;
      for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, o = 0, a = this.tableCount; 0 <= a ? o < a : o > a; o = 0 <= a ? ++o : --o) r = {
        tag: t.readString(4),
        checksum: t.readInt(),
        offset: t.readInt(),
        length: t.readInt()
      }, this.tables[r.tag] = r;
    }
    return e.prototype.encode = function(t) {
      var r, o, a, f, c, u, d, m, w, S, p, E, L;
      for (L in p = Object.keys(t).length, u = Math.log(2), w = 16 * Math.floor(Math.log(p) / u), f = Math.floor(w / u), m = 16 * p - w, (o = new oi()).writeInt(this.scalarType), o.writeShort(p), o.writeShort(w), o.writeShort(f), o.writeShort(m), a = 16 * p, d = o.pos + a, c = null, E = [], t) for (S = t[L], o.writeString(L), o.writeInt(n(S)), o.writeInt(d), o.writeInt(S.length), E = E.concat(S), L === "head" && (c = d), d += S.length; d % 4; ) E.push(0), d++;
      return o.write(E), r = 2981146554 - n(o.data), o.pos = c + 8, o.writeUInt32(r), o.data;
    }, n = function(t) {
      var r, o, a, f;
      for (t = ed.call(t); t.length % 4; ) t.push(0);
      for (a = new oi(t), o = 0, r = 0, f = t.length; r < f; r = r += 4) o += a.readUInt32();
      return 4294967295 & o;
    }, e;
  }(), hm = {}.hasOwnProperty, br = function(n, e) {
    for (var t in e) hm.call(e, t) && (n[t] = e[t]);
    function r() {
      this.constructor = n;
    }
    return r.prototype = e.prototype, n.prototype = new r(), n.__super__ = e.prototype, n;
  };
  ir = function() {
    function n(e) {
      var t;
      this.file = e, t = this.file.directory.tables[this.tag], this.exists = !!t, t && (this.offset = t.offset, this.length = t.length, this.parse(this.file.contents));
    }
    return n.prototype.parse = function() {
    }, n.prototype.encode = function() {
    }, n.prototype.raw = function() {
      return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
    }, n;
  }();
  var dm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "head", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort();
    }, n.prototype.encode = function(e) {
      var t;
      return (t = new oi()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data;
    }, n;
  }(), Xu = function() {
    function n(e, t) {
      var r, o, a, f, c, u, d, m, w, S, p, E, L, j, N, z, G;
      switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), w = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
        case 0:
          for (u = 0; u < 256; ++u) this.codeMap[u] = e.readByte();
          break;
        case 4:
          for (p = e.readUInt16(), S = p / 2, e.pos += 6, a = function() {
            var D, ae;
            for (ae = [], u = D = 0; 0 <= S ? D < S : D > S; u = 0 <= S ? ++D : --D) ae.push(e.readUInt16());
            return ae;
          }(), e.pos += 2, L = function() {
            var D, ae;
            for (ae = [], u = D = 0; 0 <= S ? D < S : D > S; u = 0 <= S ? ++D : --D) ae.push(e.readUInt16());
            return ae;
          }(), d = function() {
            var D, ae;
            for (ae = [], u = D = 0; 0 <= S ? D < S : D > S; u = 0 <= S ? ++D : --D) ae.push(e.readUInt16());
            return ae;
          }(), m = function() {
            var D, ae;
            for (ae = [], u = D = 0; 0 <= S ? D < S : D > S; u = 0 <= S ? ++D : --D) ae.push(e.readUInt16());
            return ae;
          }(), o = (this.length - e.pos + this.offset) / 2, c = function() {
            var D, ae;
            for (ae = [], u = D = 0; 0 <= o ? D < o : D > o; u = 0 <= o ? ++D : --D) ae.push(e.readUInt16());
            return ae;
          }(), u = N = 0, G = a.length; N < G; u = ++N) for (j = a[u], r = z = E = L[u]; E <= j ? z <= j : z >= j; r = E <= j ? ++z : --z) m[u] === 0 ? f = r + d[u] : (f = c[m[u] / 2 + (r - E) - (S - u)] || 0) !== 0 && (f += d[u]), this.codeMap[r] = 65535 & f;
      }
      e.pos = w;
    }
    return n.encode = function(e, t) {
      var r, o, a, f, c, u, d, m, w, S, p, E, L, j, N, z, G, D, ae, be, he, J, H, V, x, I, B, U, se, le, ge, ne, te, Ae, we, A, T, q, $, Y, Q, ce, ue, ve, Se, Ce;
      switch (U = new oi(), f = Object.keys(e).sort(function(Pe, We) {
        return Pe - We;
      }), t) {
        case "macroman":
          for (L = 0, j = function() {
            var Pe = [];
            for (E = 0; E < 256; ++E) Pe.push(0);
            return Pe;
          }(), z = {
            0: 0
          }, a = {}, se = 0, te = f.length; se < te; se++) z[ue = e[o = f[se]]] == null && (z[ue] = ++L), a[o] = {
            old: e[o],
            new: z[e[o]]
          }, j[o] = z[e[o]];
          return U.writeUInt16(1), U.writeUInt16(0), U.writeUInt32(12), U.writeUInt16(0), U.writeUInt16(262), U.writeUInt16(0), U.write(j), {
            charMap: a,
            subtable: U.data,
            maxGlyphID: L + 1
          };
        case "unicode":
          for (I = [], w = [], G = 0, z = {}, r = {}, N = d = null, le = 0, Ae = f.length; le < Ae; le++) z[ae = e[o = f[le]]] == null && (z[ae] = ++G), r[o] = {
            old: ae,
            new: z[ae]
          }, c = z[ae] - o, N != null && c === d || (N && w.push(N), I.push(o), d = c), N = o;
          for (N && w.push(N), w.push(65535), I.push(65535), V = 2 * (H = I.length), J = 2 * Math.pow(Math.log(H) / Math.LN2, 2), S = Math.log(J / 2) / Math.LN2, he = 2 * H - J, u = [], be = [], p = [], E = ge = 0, we = I.length; ge < we; E = ++ge) {
            if (x = I[E], m = w[E], x === 65535) {
              u.push(0), be.push(0);
              break;
            }
            if (x - (B = r[x].new) >= 32768) for (u.push(0), be.push(2 * (p.length + H - E)), o = ne = x; x <= m ? ne <= m : ne >= m; o = x <= m ? ++ne : --ne) p.push(r[o].new);
            else u.push(B - x), be.push(0);
          }
          for (U.writeUInt16(3), U.writeUInt16(1), U.writeUInt32(12), U.writeUInt16(4), U.writeUInt16(16 + 8 * H + 2 * p.length), U.writeUInt16(0), U.writeUInt16(V), U.writeUInt16(J), U.writeUInt16(S), U.writeUInt16(he), Q = 0, A = w.length; Q < A; Q++) o = w[Q], U.writeUInt16(o);
          for (U.writeUInt16(0), ce = 0, T = I.length; ce < T; ce++) o = I[ce], U.writeUInt16(o);
          for (ve = 0, q = u.length; ve < q; ve++) c = u[ve], U.writeUInt16(c);
          for (Se = 0, $ = be.length; Se < $; Se++) D = be[Se], U.writeUInt16(D);
          for (Ce = 0, Y = p.length; Ce < Y; Ce++) L = p[Ce], U.writeUInt16(L);
          return {
            charMap: r,
            subtable: U.data,
            maxGlyphID: G + 1
          };
      }
    }, n;
  }(), Qh = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "cmap", n.prototype.parse = function(e) {
      var t, r, o;
      for (e.pos = this.offset, this.version = e.readUInt16(), o = e.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= o ? r < o : r > o; r = 0 <= o ? ++r : --r) t = new Xu(e, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
      return true;
    }, n.encode = function(e, t) {
      var r, o;
      return t == null && (t = "macroman"), r = Xu.encode(e, t), (o = new oi()).writeUInt16(0), o.writeUInt16(1), r.table = o.data.concat(r.subtable), r;
    }, n;
  }(), pm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "hhea", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16();
    }, n;
  }(), mm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "OS/2", n.prototype.parse = function(e) {
      if (e.pos = this.offset, this.version = e.readUInt16(), this.averageCharWidth = e.readShort(), this.weightClass = e.readUInt16(), this.widthClass = e.readUInt16(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort(), this.ySubscriptYSize = e.readShort(), this.ySubscriptXOffset = e.readShort(), this.ySubscriptYOffset = e.readShort(), this.ySuperscriptXSize = e.readShort(), this.ySuperscriptYSize = e.readShort(), this.ySuperscriptXOffset = e.readShort(), this.ySuperscriptYOffset = e.readShort(), this.yStrikeoutSize = e.readShort(), this.yStrikeoutPosition = e.readShort(), this.familyClass = e.readShort(), this.panose = function() {
        var t, r;
        for (r = [], t = 0; t < 10; ++t) r.push(e.readByte());
        return r;
      }(), this.charRange = function() {
        var t, r;
        for (r = [], t = 0; t < 4; ++t) r.push(e.readInt());
        return r;
      }(), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort(), this.descent = e.readShort(), this.lineGap = e.readShort(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = function() {
        var t, r;
        for (r = [], t = 0; t < 2; t = ++t) r.push(e.readInt());
        return r;
      }(), this.version > 1)) return this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort();
    }, n;
  }(), gm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "post", n.prototype.parse = function(e) {
      var t, r, o;
      switch (e.pos = this.offset, this.format = e.readInt(), this.italicAngle = e.readInt(), this.underlinePosition = e.readShort(), this.underlineThickness = e.readShort(), this.isFixedPitch = e.readInt(), this.minMemType42 = e.readInt(), this.maxMemType42 = e.readInt(), this.minMemType1 = e.readInt(), this.maxMemType1 = e.readInt(), this.format) {
        case 65536:
        case 196608:
          break;
        case 131072:
          var a;
          for (r = e.readUInt16(), this.glyphNameIndex = [], a = 0; 0 <= r ? a < r : a > r; a = 0 <= r ? ++a : --a) this.glyphNameIndex.push(e.readUInt16());
          for (this.names = [], o = []; e.pos < this.offset + this.length; ) t = e.readByte(), o.push(this.names.push(e.readString(t)));
          return o;
        case 151552:
          return r = e.readUInt16(), this.offsets = e.read(r);
        case 262144:
          return this.map = (function() {
            var f, c, u;
            for (u = [], a = f = 0, c = this.file.maxp.numGlyphs; 0 <= c ? f < c : f > c; a = 0 <= c ? ++f : --f) u.push(e.readUInt32());
            return u;
          }).call(this);
      }
    }, n;
  }(), vm = function(n, e) {
    this.raw = n, this.length = n.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
  }, bm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "name", n.prototype.parse = function(e) {
      var t, r, o, a, f, c, u, d, m, w, S;
      for (e.pos = this.offset, e.readShort(), t = e.readShort(), c = e.readShort(), r = [], a = 0; 0 <= t ? a < t : a > t; a = 0 <= t ? ++a : --a) r.push({
        platformID: e.readShort(),
        encodingID: e.readShort(),
        languageID: e.readShort(),
        nameID: e.readShort(),
        length: e.readShort(),
        offset: this.offset + c + e.readShort()
      });
      for (u = {}, a = m = 0, w = r.length; m < w; a = ++m) o = r[a], e.pos = o.offset, d = e.readString(o.length), f = new vm(d, o), u[S = o.nameID] == null && (u[S] = []), u[o.nameID].push(f);
      this.strings = u, this.copyright = u[0], this.fontFamily = u[1], this.fontSubfamily = u[2], this.uniqueSubfamily = u[3], this.fontName = u[4], this.version = u[5];
      try {
        this.postscriptName = u[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      } catch {
        this.postscriptName = u[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      }
      return this.trademark = u[7], this.manufacturer = u[8], this.designer = u[9], this.description = u[10], this.vendorUrl = u[11], this.designerUrl = u[12], this.license = u[13], this.licenseUrl = u[14], this.preferredFamily = u[15], this.preferredSubfamily = u[17], this.compatibleFull = u[18], this.sampleText = u[19];
    }, n;
  }(), wm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "maxp", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16();
    }, n;
  }(), ym = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "hmtx", n.prototype.parse = function(e) {
      var t, r, o, a, f, c, u;
      for (e.pos = this.offset, this.metrics = [], t = 0, c = this.file.hhea.numberOfMetrics; 0 <= c ? t < c : t > c; t = 0 <= c ? ++t : --t) this.metrics.push({
        advance: e.readUInt16(),
        lsb: e.readInt16()
      });
      for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
        var d, m;
        for (m = [], t = d = 0; 0 <= o ? d < o : d > o; t = 0 <= o ? ++d : --d) m.push(e.readInt16());
        return m;
      }(), this.widths = (function() {
        var d, m, w, S;
        for (S = [], d = 0, m = (w = this.metrics).length; d < m; d++) a = w[d], S.push(a.advance);
        return S;
      }).call(this), r = this.widths[this.widths.length - 1], u = [], t = f = 0; 0 <= o ? f < o : f > o; t = 0 <= o ? ++f : --f) u.push(this.widths.push(r));
      return u;
    }, n.prototype.forGlyph = function(e) {
      return e in this.metrics ? this.metrics[e] : {
        advance: this.metrics[this.metrics.length - 1].advance,
        lsb: this.leftSideBearings[e - this.metrics.length]
      };
    }, n;
  }(), ed = [].slice, xm = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "glyf", n.prototype.parse = function() {
      return this.cache = {};
    }, n.prototype.glyphFor = function(e) {
      var t, r, o, a, f, c, u, d, m, w;
      return e in this.cache ? this.cache[e] : (a = this.file.loca, t = this.file.contents, r = a.indexOf(e), (o = a.lengthOf(e)) === 0 ? this.cache[e] = null : (t.pos = this.offset + r, f = (c = new oi(t.read(o))).readShort(), d = c.readShort(), w = c.readShort(), u = c.readShort(), m = c.readShort(), this.cache[e] = f === -1 ? new _m(c, d, w, u, m) : new Nm(c, f, d, w, u, m), this.cache[e]));
    }, n.prototype.encode = function(e, t, r) {
      var o, a, f, c, u;
      for (f = [], a = [], c = 0, u = t.length; c < u; c++) o = e[t[c]], a.push(f.length), o && (f = f.concat(o.encode(r)));
      return a.push(f.length), {
        table: f,
        offsets: a
      };
    }, n;
  }(), Nm = function() {
    function n(e, t, r, o, a, f) {
      this.raw = e, this.numberOfContours = t, this.xMin = r, this.yMin = o, this.xMax = a, this.yMax = f, this.compound = false;
    }
    return n.prototype.encode = function() {
      return this.raw.data;
    }, n;
  }(), _m = function() {
    function n(e, t, r, o, a) {
      var f, c;
      for (this.raw = e, this.xMin = t, this.yMin = r, this.xMax = o, this.yMax = a, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], f = this.raw; c = f.readShort(), this.glyphOffsets.push(f.pos), this.glyphIDs.push(f.readUInt16()), 32 & c; ) f.pos += 1 & c ? 4 : 2, 128 & c ? f.pos += 8 : 64 & c ? f.pos += 4 : 8 & c && (f.pos += 2);
    }
    return n.prototype.encode = function() {
      var e, t, r;
      for (t = new oi(ed.call(this.raw.data)), e = 0, r = this.glyphIDs.length; e < r; ++e) t.pos = this.glyphOffsets[e];
      return t.data;
    }, n;
  }(), Am = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "loca", n.prototype.parse = function(e) {
      var t, r;
      return e.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = t === 0 ? (function() {
        var o, a;
        for (a = [], r = 0, o = this.length; r < o; r += 2) a.push(2 * e.readUInt16());
        return a;
      }).call(this) : (function() {
        var o, a;
        for (a = [], r = 0, o = this.length; r < o; r += 4) a.push(e.readUInt32());
        return a;
      }).call(this);
    }, n.prototype.indexOf = function(e) {
      return this.offsets[e];
    }, n.prototype.lengthOf = function(e) {
      return this.offsets[e + 1] - this.offsets[e];
    }, n.prototype.encode = function(e, t) {
      for (var r = new Uint32Array(this.offsets.length), o = 0, a = 0, f = 0; f < r.length; ++f) if (r[f] = o, a < t.length && t[a] == f) {
        ++a, r[f] = o;
        var c = this.offsets[f], u = this.offsets[f + 1] - c;
        u > 0 && (o += u);
      }
      for (var d = new Array(4 * r.length), m = 0; m < r.length; ++m) d[4 * m + 3] = 255 & r[m], d[4 * m + 2] = (65280 & r[m]) >> 8, d[4 * m + 1] = (16711680 & r[m]) >> 16, d[4 * m] = (4278190080 & r[m]) >> 24;
      return d;
    }, n;
  }(), Sm = function() {
    function n(e) {
      this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
    }
    return n.prototype.generateCmap = function() {
      var e, t, r, o, a;
      for (t in o = this.font.cmap.tables[0].codeMap, e = {}, a = this.subset) r = a[t], e[t] = o[r];
      return e;
    }, n.prototype.glyphsFor = function(e) {
      var t, r, o, a, f, c, u;
      for (o = {}, f = 0, c = e.length; f < c; f++) o[a = e[f]] = this.font.glyf.glyphFor(a);
      for (a in t = [], o) (r = o[a]) != null && r.compound && t.push.apply(t, r.glyphIDs);
      if (t.length > 0) for (a in u = this.glyphsFor(t)) r = u[a], o[a] = r;
      return o;
    }, n.prototype.encode = function(e, t) {
      var r, o, a, f, c, u, d, m, w, S, p, E, L, j, N;
      for (o in r = Qh.encode(this.generateCmap(), "unicode"), f = this.glyphsFor(e), p = {
        0: 0
      }, N = r.charMap) p[(u = N[o]).old] = u.new;
      for (E in S = r.maxGlyphID, f) E in p || (p[E] = S++);
      return m = function(z) {
        var G, D;
        for (G in D = {}, z) D[z[G]] = G;
        return D;
      }(p), w = Object.keys(m).sort(function(z, G) {
        return z - G;
      }), L = function() {
        var z, G, D;
        for (D = [], z = 0, G = w.length; z < G; z++) c = w[z], D.push(m[c]);
        return D;
      }(), a = this.font.glyf.encode(f, L, p), d = this.font.loca.encode(a.offsets, L), j = {
        cmap: this.font.cmap.raw(),
        glyf: a.table,
        loca: d,
        hmtx: this.font.hmtx.raw(),
        hhea: this.font.hhea.raw(),
        maxp: this.font.maxp.raw(),
        post: this.font.post.raw(),
        name: this.font.name.raw(),
        head: this.font.head.encode(t)
      }, this.font.os2.exists && (j["OS/2"] = this.font.os2.raw()), this.font.directory.encode(j);
    }, n;
  }();
  Be.API.PDFObject = function() {
    var n;
    function e() {
    }
    return n = function(t, r) {
      return (Array(r + 1).join("0") + t).slice(-r);
    }, e.convert = function(t) {
      var r, o, a, f;
      if (Array.isArray(t)) return "[" + function() {
        var c, u, d;
        for (d = [], c = 0, u = t.length; c < u; c++) r = t[c], d.push(e.convert(r));
        return d;
      }().join(" ") + "]";
      if (typeof t == "string") return "/" + t;
      if (t == null ? void 0 : t.isString) return "(" + t + ")";
      if (t instanceof Date) return "(D:" + n(t.getUTCFullYear(), 4) + n(t.getUTCMonth(), 2) + n(t.getUTCDate(), 2) + n(t.getUTCHours(), 2) + n(t.getUTCMinutes(), 2) + n(t.getUTCSeconds(), 2) + "Z)";
      if ({}.toString.call(t) === "[object Object]") {
        for (o in a = [
          "<<"
        ], t) f = t[o], a.push("/" + o + " " + e.convert(f));
        return a.push(">>"), a.join(`
`);
      }
      return "" + t;
    }, e;
  }();
  function Lm({ lookupId: n, fileKey: e, wrappedKey: t, initialContent: r }) {
    const { toast: o } = nf(), [a, f] = oe.useState(r), [c, u] = oe.useState(false), [d, m] = oe.useState(null), { data: w, refetch: S, isRefetching: p } = $d(n, !!n), E = Yd();
    oe.useEffect(() => {
      (w == null ? void 0 : w.encryptedClipboardText) && e && !c && (async () => {
        try {
          const z = await af(w.encryptedClipboardText, e);
          z !== a && (f(z), w.updatedAt && m(new Date(w.updatedAt)));
        } catch (z) {
          console.error("Sync decryption failed", z);
        }
      })();
    }, [
      w,
      e,
      c,
      a
    ]);
    const L = async (N) => {
      if (e) try {
        const z = await Zd(N, e);
        await E.mutateAsync({
          lookupId: n,
          encryptedClipboardText: z,
          wrappedKey: t
        }), m(/* @__PURE__ */ new Date());
      } catch {
        o({
          variant: "destructive",
          title: "Failed to save"
        });
      }
    }, j = (N) => {
      if (a) {
        switch (N) {
          case "txt":
            const z = new Blob([
              a
            ], {
              type: "text/plain"
            }), G = URL.createObjectURL(z), D = document.createElement("a");
            D.href = G, D.download = `clipboard-${n}.txt`, D.click(), URL.revokeObjectURL(G);
            break;
          case "pdf":
            const ae = new Be(), be = ae.splitTextToSize(a, 180);
            ae.text(be, 10, 10), ae.save(`clipboard-${n}.pdf`);
            break;
          case "doc":
            const he = `<html><body><pre>${a}</pre></body></html>`, J = new Blob([
              he
            ], {
              type: "application/msword"
            }), H = URL.createObjectURL(J), V = document.createElement("a");
            V.href = H, V.download = `clipboard-${n}.doc`, V.click(), URL.revokeObjectURL(H);
            break;
        }
        o({
          title: `Exported as ${N.toUpperCase()}`
        });
      }
    };
    return P.jsxs(On.div, {
      initial: {
        opacity: 0,
        y: 10
      },
      animate: {
        opacity: 1,
        y: 0
      },
      className: "mb-6 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm",
      children: [
        P.jsxs("div", {
          className: "flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/80",
          children: [
            P.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                P.jsx("div", {
                  className: "w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-900/20",
                  children: P.jsx(rf, {
                    className: "w-4 h-4 text-white"
                  })
                }),
                P.jsxs("div", {
                  children: [
                    P.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        P.jsx("p", {
                          className: "text-sm font-bold text-cyan-100",
                          children: "Live Clipboard"
                        }),
                        (E.isPending || p) && P.jsx(El, {
                          className: "w-3 h-3 text-cyan-400 animate-spin"
                        })
                      ]
                    }),
                    P.jsx("p", {
                      className: "text-[10px] text-cyan-400/60 font-mono",
                      children: d ? `Synced ${d.toLocaleTimeString()}` : "Ready to sync"
                    })
                  ]
                })
              ]
            }),
            P.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                P.jsx(ii, {
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 w-8 p-0 text-zinc-400 hover:text-cyan-400",
                  onClick: () => S(),
                  title: "Force Sync",
                  children: P.jsx(El, {
                    className: `w-4 h-4 ${p ? "animate-spin" : ""}`
                  })
                }),
                P.jsxs(B0, {
                  children: [
                    P.jsx(q0, {
                      asChild: true,
                      children: P.jsx(ii, {
                        variant: "ghost",
                        size: "sm",
                        className: "h-8 w-8 p-0 text-zinc-400 hover:text-white",
                        children: P.jsx(m1, {
                          className: "w-4 h-4"
                        })
                      })
                    }),
                    P.jsxs(gh, {
                      align: "end",
                      className: "bg-zinc-900 border-zinc-800",
                      children: [
                        P.jsxs($o, {
                          onClick: () => j("txt"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            P.jsx(_c, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to TXT"
                          ]
                        }),
                        P.jsxs($o, {
                          onClick: () => j("pdf"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            P.jsx(x1, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to PDF"
                          ]
                        }),
                        P.jsxs($o, {
                          onClick: () => j("doc"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            P.jsx(_c, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to DOC"
                          ]
                        })
                      ]
                    })
                  ]
                }),
                P.jsx(ii, {
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 text-zinc-400 hover:text-cyan-400",
                  onClick: async () => {
                    await navigator.clipboard.writeText(a || ""), o({
                      title: "Copied!"
                    });
                  },
                  children: P.jsx(Xd, {
                    className: "w-4 h-4"
                  })
                })
              ]
            })
          ]
        }),
        P.jsxs("div", {
          className: "relative",
          children: [
            P.jsx(Jd, {
              value: a || "",
              onChange: (N) => {
                f(N.target.value), u(true);
              },
              onBlur: () => {
                u(false), a && L(a);
              },
              className: "min-h-[120px] bg-transparent border-0 resize-none focus-visible:ring-0 text-zinc-300 font-mono text-sm leading-relaxed p-4 custom-scrollbar",
              placeholder: "Type shared content here..."
            }),
            c && P.jsx("div", {
              className: "absolute bottom-2 right-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2",
              children: P.jsx("span", {
                className: "text-[10px] text-zinc-500 font-mono bg-black/50 px-2 py-1 rounded-full border border-zinc-800",
                children: "Editing..."
              })
            })
          ]
        })
      ]
    });
  }
  const km = () => P.jsx("svg", {
    style: {
      position: "absolute",
      width: 0,
      height: 0
    },
    children: P.jsx("defs", {
      children: P.jsxs("filter", {
        id: "heat-wave",
        children: [
          P.jsx("feTurbulence", {
            type: "fractalNoise",
            baseFrequency: "0.01",
            numOctaves: "3",
            result: "noise",
            children: P.jsx("animate", {
              attributeName: "baseFrequency",
              dur: "2s",
              values: "0.01;0.05;0.2",
              repeatCount: "1"
            })
          }),
          P.jsx("feDisplacementMap", {
            in: "SourceGraphic",
            in2: "noise",
            scale: "20"
          })
        ]
      })
    })
  });
  function Cm({ expiresAt: n }) {
    const [e, t] = oe.useState(null);
    return oe.useEffect(() => {
      const r = () => {
        const a = (/* @__PURE__ */ new Date()).getTime(), c = new Date(n).getTime() - a;
        if (c <= 0) {
          t(null);
          return;
        }
        t({
          h: Math.floor(c / 36e5),
          m: Math.floor(c % 36e5 / 6e4),
          s: Math.floor(c % 6e4 / 1e3)
        });
      };
      r();
      const o = setInterval(r, 1e3);
      return () => clearInterval(o);
    }, [
      n
    ]), e ? P.jsxs("div", {
      className: "flex items-center gap-1 font-mono text-sm font-bold",
      children: [
        P.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400",
          children: e.h.toString().padStart(2, "0")
        }),
        P.jsx("span", {
          className: "text-zinc-500",
          children: ":"
        }),
        P.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400",
          children: e.m.toString().padStart(2, "0")
        }),
        P.jsx("span", {
          className: "text-zinc-500",
          children: ":"
        }),
        P.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400",
          children: e.s.toString().padStart(2, "0")
        })
      ]
    }) : P.jsx("span", {
      className: "text-red-400 font-mono text-xs",
      children: "Expired"
    });
  }
  function Pm() {
    const [n, e] = oe.useState(""), [t, r] = oe.useState("input"), [o, a] = oe.useState(""), [f, c] = oe.useState([]), [u, d] = oe.useState(null), [m, w] = oe.useState(null), [S, p] = oe.useState(false), [E, L] = oe.useState(null), j = t === "ready" && n.length === 6 ? n.slice(0, 3) : "";
    Qd();
    const { toast: N } = nf(), { play: z } = e1(), G = t1(), D = n1(), ae = r1(), be = async () => {
      const V = n.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (V.length !== 6) {
        N({
          variant: "destructive",
          title: "Invalid Code",
          description: "Please enter a 6-character code."
        });
        return;
      }
      r("fetching"), a("Looking up vault...");
      try {
        const x = V.slice(0, 3), I = V.slice(3, 6), B = await G.mutateAsync(x);
        d(B), r("decrypting"), a("Unwrapping encryption key with PIN...");
        const U = await l1(B.wrappedKey, I);
        w(U), a("Decrypting file metadata...");
        const se = await u1(B.encryptedMetadata, U);
        if (c(se), B.encryptedClipboardText) {
          a("Decrypting clipboard content...");
          try {
            const ne = await af(B.encryptedClipboardText, U);
            L(ne);
          } catch (ne) {
            console.error("Failed to decrypt clipboard:", ne);
          }
        }
        r("ready");
        const le = se.length > 0, ge = B.encryptedClipboardText;
        a(le ? "Files ready for download!" : ge ? "Clipboard content ready!" : "Vault unlocked!"), z("unlock"), N({
          title: "Vault Unlocked!",
          description: le ? `${se.length} file(s) ready for download.` : ge ? "Secure clipboard content available." : "Vault accessed successfully."
        });
      } catch (x) {
        z("error"), r("input"), console.error("Access error:", x);
        let I = "Invalid or expired code. Please check and try again.";
        x instanceof Error && (x.message.includes("unwrap") ? I = "Invalid PIN. The second half of your code is incorrect." : x.message.includes("expired") && (I = "This vault has expired or reached its download limit.")), N({
          variant: "destructive",
          title: "Access Denied",
          description: I
        });
      }
    }, he = async (V) => {
      if (!(!u || !m)) try {
        a(`Downloading ${V.name}...`);
        const x = u.files.find((te) => te.fileId === V.fileId);
        if (!x) throw new Error("File metadata not found in vault");
        const I = [];
        for (let te = 0; te < x.chunkCount; te++) {
          a(`Decrypting ${V.name} [${te + 1}/${x.chunkCount}]...`);
          const { downloadUrl: Ae } = await D.mutateAsync({
            vaultId: u.id,
            fileId: V.fileId,
            chunkIndex: te
          });
          let we = null;
          for (let Y = 0; Y < 3; Y++) try {
            if (we = await fetch(Ae), we.ok) break;
            throw we.status >= 400 && we.status < 500 ? new Error(`Server returned ${we.status}`) : new Error(`Server error ${we.status}`);
          } catch {
            Y < 2 && await new Promise((ce) => setTimeout(ce, 500 * Math.pow(2, Y)));
          }
          if (!we || !we.ok) throw new Error("Failed to download chunk");
          const A = await we.arrayBuffer();
          if (A.byteLength < 12) throw new Error("Chunk too small");
          const T = new Uint8Array(A, 0, 12), q = new Uint8Array(A, 12), $ = await f1(q, T, m);
          if (V.isCompressed) {
            const Y = await Go(() => import("./index.web-Bqyr3zbv.js"), []);
            await Y.default;
            const Q = new Uint8Array($), ce = Y.decompress(Q);
            I.push(ce.buffer);
          } else I.push($);
        }
        const B = I.reduce((te, Ae) => te + Ae.byteLength, 0), U = new Uint8Array(B);
        let se = 0;
        for (const te of I) U.set(new Uint8Array(te), se), se += te.byteLength;
        const le = new Blob([
          U
        ], {
          type: V.type || "application/octet-stream"
        }), ge = URL.createObjectURL(le), ne = document.createElement("a");
        return ne.href = ge, ne.download = V.name, document.body.appendChild(ne), ne.click(), document.body.removeChild(ne), URL.revokeObjectURL(ge), true;
      } catch (x) {
        throw x;
      }
    }, J = async (V) => {
      if (!(!u || !m)) try {
        if ("serviceWorker" in navigator && navigator.serviceWorker.controller && V.size > 10 * 1024 * 1024) {
          console.log("Using Streamed Download for " + V.name), a(`Preparing stream for ${V.name}...`);
          const x = u.files.find((B) => B.fileId === V.fileId);
          if (!x) throw new Error("File not found");
          const I = [];
          for (let B = 0; B < x.chunkCount; B++) {
            const { downloadUrl: U } = await D.mutateAsync({
              vaultId: u.id,
              fileId: V.fileId,
              chunkIndex: B
            });
            I.push({
              downloadUrl: U,
              index: B
            });
          }
          await g1(V.fileId, m, I, V), t === "ready" && N({
            title: "Download Started",
            description: `Streaming ${V.name}...`
          });
        } else console.log("Using Memory Download for " + V.name), await he(V);
        if (t === "ready") {
          "serviceWorker" in navigator && navigator.serviceWorker.controller && V.size > 10 * 1024 * 1024 || N({
            title: "File Downloaded",
            description: `${V.name} saved.`
          });
          try {
            const x = await ae.mutateAsync(u.id);
            d((I) => ({
              ...I,
              downloadCount: I.maxDownloads - x.remainingDownloads
            })), x.remainingDownloads <= 0 && (N({
              title: "Vault Depleted",
              description: "Initiating self-destruct sequence...",
              variant: "destructive"
            }), setTimeout(() => p(true), 1500));
          } catch (x) {
            console.error("Tracking failed", x);
          }
        }
      } catch (x) {
        if (console.error("Download failed", x), N({
          variant: "destructive",
          title: "Download Error",
          description: x instanceof Error ? x.message : "Failed to download file"
        }), t === "downloading") throw x;
      }
    }, H = async () => {
      if (!(!u || !m || f.length === 0)) {
        r("downloading");
        try {
          for (const x of f) await J(x);
          const V = await ae.mutateAsync(u.id);
          d((x) => ({
            ...x,
            downloadCount: x.maxDownloads - V.remainingDownloads
          })), r("ready"), a("All files downloaded!"), N({
            title: "Download Complete!",
            description: `${f.length} file(s) downloaded successfully.`
          }), V.remainingDownloads <= 0 && (N({
            title: "Vault Depleted",
            description: "Initiating self-destruct sequence...",
            variant: "destructive"
          }), setTimeout(() => p(true), 1500));
        } catch (V) {
          r("ready"), console.error("Download error:", V), N({
            variant: "destructive",
            title: "Download Failed",
            description: V instanceof Error ? V.message : "An error occurred during download."
          });
        }
      }
    };
    return P.jsxs("div", {
      className: `min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 overflow-hidden transition-colors duration-1000 ${S ? "bg-black" : ""}`,
      children: [
        P.jsx(km, {}),
        P.jsxs("div", {
          className: "fixed inset-0 pointer-events-none overflow-hidden",
          children: [
            P.jsx("div", {
              className: "absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px]"
            }),
            P.jsx("div", {
              className: "absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]"
            }),
            P.jsx("div", {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]"
            }),
            P.jsx("div", {
              className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
            }),
            P.jsx("div", {
              className: "absolute inset-0 opacity-[0.015]",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
              }
            })
          ]
        }),
        P.jsxs("div", {
          className: "relative z-10 min-h-screen flex flex-col",
          children: [
            P.jsx("header", {
              className: "border-b border-zinc-800/50 backdrop-blur-xl bg-black/50",
              children: P.jsx("div", {
                className: "container max-w-6xl mx-auto px-4 py-4",
                children: P.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    P.jsx($i, {
                      href: "/",
                      children: P.jsxs(On.div, {
                        className: "flex items-center gap-3 cursor-pointer group",
                        whileHover: {
                          scale: 1.02
                        },
                        whileTap: {
                          scale: 0.98
                        },
                        children: [
                          P.jsx("div", {
                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors",
                            children: P.jsx(Vs, {
                              className: "w-5 h-5 text-cyan-400"
                            })
                          }),
                          P.jsxs("div", {
                            children: [
                              P.jsxs("h1", {
                                className: "font-bold text-lg tracking-tight",
                                children: [
                                  "VAULT",
                                  P.jsx("span", {
                                    className: "text-cyan-400",
                                    children: "BRIDGE"
                                  })
                                ]
                              }),
                              P.jsx("p", {
                                className: "text-[10px] text-zinc-500 font-mono tracking-[0.2em]",
                                children: "ACCESS VAULT"
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    P.jsx("div", {
                      className: "flex items-center gap-3",
                      children: P.jsx($i, {
                        href: "/clipboard",
                        children: P.jsxs(ii, {
                          variant: "outline",
                          size: "sm",
                          className: "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2",
                          children: [
                            P.jsx(rf, {
                              className: "w-4 h-4"
                            }),
                            "Create Clipboard"
                          ]
                        })
                      })
                    })
                  ]
                })
              })
            }),
            P.jsx("main", {
              className: "flex-1 container max-w-6xl mx-auto px-4 py-8 md:py-12",
              children: P.jsx(Ks, {
                mode: "wait",
                children: S ? P.jsx(On.div, {
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: {
                    delay: 2
                  },
                  className: "max-w-lg mx-auto text-center",
                  children: P.jsxs("div", {
                    className: "relative",
                    children: [
                      P.jsx("div", {
                        className: "absolute -inset-1 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl blur-xl opacity-50"
                      }),
                      P.jsxs("div", {
                        className: "relative bg-zinc-950/90 backdrop-blur-xl border border-red-900/50 rounded-3xl p-8",
                        children: [
                          P.jsx("div", {
                            className: "w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center",
                            children: P.jsx(Il, {
                              className: "w-10 h-10 text-red-500 animate-pulse"
                            })
                          }),
                          P.jsx("h1", {
                            className: "text-3xl font-black tracking-[0.15em] uppercase text-red-500 mb-4",
                            children: "Vault Incinerated"
                          }),
                          P.jsxs("div", {
                            className: "space-y-2 font-mono text-sm text-zinc-500",
                            children: [
                              P.jsx("p", {
                                children: "> SYSTEM_PURGE_COMPLETE"
                              }),
                              P.jsx("p", {
                                children: "> FILES_OVERWRITTEN"
                              }),
                              P.jsx("p", {
                                className: "text-red-700",
                                children: "> LINK_TERMINATED"
                              })
                            ]
                          }),
                          P.jsx("div", {
                            className: "mt-8",
                            children: P.jsx($i, {
                              href: "/",
                              children: P.jsxs(ii, {
                                variant: "outline",
                                className: "border-red-900/50 hover:bg-red-500/10",
                                children: [
                                  P.jsx(b1, {
                                    className: "w-4 h-4 mr-2"
                                  }),
                                  "Return Home"
                                ]
                              })
                            })
                          })
                        ]
                      })
                    ]
                  })
                }) : P.jsxs(On.div, {
                  initial: {
                    opacity: 0,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  exit: {
                    opacity: 0,
                    y: -20
                  },
                  children: [
                    t === "input" && P.jsxs("div", {
                      className: "max-w-xl mx-auto",
                      children: [
                        P.jsxs("div", {
                          className: "text-center mb-8",
                          children: [
                            P.jsxs("div", {
                              className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6",
                              children: [
                                P.jsx(i1, {
                                  className: "w-3 h-3"
                                }),
                                P.jsx("span", {
                                  children: "ZERO-KNOWLEDGE DECRYPTION"
                                })
                              ]
                            }),
                            P.jsxs("h1", {
                              className: "text-3xl md:text-4xl font-black tracking-tight mb-4",
                              children: [
                                "Access Secure",
                                " ",
                                P.jsx("span", {
                                  className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
                                  children: "Vault"
                                })
                              ]
                            }),
                            P.jsx("p", {
                              className: "text-zinc-400",
                              children: "Enter your 6-digit access code to unlock the vault"
                            })
                          ]
                        }),
                        P.jsxs("div", {
                          className: "relative",
                          children: [
                            P.jsx("div", {
                              className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50"
                            }),
                            P.jsx("div", {
                              className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8",
                              children: P.jsxs("div", {
                                className: "space-y-6",
                                children: [
                                  P.jsxs("div", {
                                    className: "space-y-4",
                                    children: [
                                      P.jsx("label", {
                                        className: "text-xs text-center block text-zinc-400 uppercase tracking-widest font-mono",
                                        children: "Enter 6-Digit Code"
                                      }),
                                      P.jsxs("div", {
                                        className: "flex justify-center gap-2 md:gap-3 relative",
                                        children: [
                                          P.jsx(h1, {
                                            type: "search",
                                            inputMode: "numeric",
                                            pattern: "[0-9]*",
                                            value: n,
                                            onChange: (V) => {
                                              const x = V.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
                                              e(x);
                                            },
                                            onKeyDown: (V) => {
                                              V.key === "Enter" && n.length === 6 && be();
                                            },
                                            className: "absolute inset-0 opacity-0 cursor-pointer z-10 h-16 w-full",
                                            autoFocus: true,
                                            autoComplete: "off",
                                            spellCheck: "false",
                                            name: "vault_access_code_search",
                                            id: "vault_access_code_search"
                                          }),
                                          P.jsxs("div", {
                                            className: "flex items-center gap-1 md:gap-2",
                                            children: [
                                              P.jsx("div", {
                                                className: "flex gap-1.5 md:gap-2",
                                                children: Array.from({
                                                  length: 3
                                                }).map((V, x) => {
                                                  const I = x, B = n[I] || "", U = n.length === I, se = !!B;
                                                  return P.jsx(On.div, {
                                                    initial: false,
                                                    animate: {
                                                      scale: U ? 1.05 : 1,
                                                      borderColor: U ? "rgb(6, 182, 212)" : se ? "rgba(6, 182, 212, 0.3)" : "rgba(63, 63, 70, 1)",
                                                      backgroundColor: se ? "rgba(6, 182, 212, 0.1)" : "rgba(24, 24, 27, 1)"
                                                    },
                                                    className: `
                                                                                    w-12 h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-xl flex items-center justify-center 
                                                                                    text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${U ? "shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/20" : ""}
                                                                                `,
                                                    children: P.jsx(Ks, {
                                                      mode: "popLayout",
                                                      children: B ? P.jsx(On.span, {
                                                        initial: {
                                                          y: 20,
                                                          opacity: 0
                                                        },
                                                        animate: {
                                                          y: 0,
                                                          opacity: 1
                                                        },
                                                        exit: {
                                                          y: -20,
                                                          opacity: 0
                                                        },
                                                        className: "text-cyan-400",
                                                        children: B
                                                      }, B) : U && P.jsx(On.div, {
                                                        layoutId: "cursor",
                                                        className: "w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"
                                                      })
                                                    })
                                                  }, I);
                                                })
                                              }),
                                              P.jsx("div", {
                                                className: "w-4 md:w-6 flex items-center justify-center",
                                                children: P.jsx("div", {
                                                  className: "w-full h-0.5 bg-zinc-700"
                                                })
                                              }),
                                              P.jsx("div", {
                                                className: "flex gap-1.5 md:gap-2",
                                                children: Array.from({
                                                  length: 3
                                                }).map((V, x) => {
                                                  const I = x + 3, B = n[I] || "", U = n.length === I, se = !!B;
                                                  return P.jsx(On.div, {
                                                    initial: false,
                                                    animate: {
                                                      scale: U ? 1.05 : 1,
                                                      borderColor: U ? "rgb(16, 185, 129)" : se ? "rgba(16, 185, 129, 0.3)" : "rgba(63, 63, 70, 1)",
                                                      backgroundColor: se ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
                                                    },
                                                    className: `
                                                                                    w-12 h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-xl flex items-center justify-center 
                                                                                    text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${U ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/20" : ""}
                                                                                `,
                                                    children: P.jsx(Ks, {
                                                      mode: "popLayout",
                                                      children: B ? P.jsx(On.span, {
                                                        initial: {
                                                          y: 20,
                                                          opacity: 0
                                                        },
                                                        animate: {
                                                          y: 0,
                                                          opacity: 1
                                                        },
                                                        exit: {
                                                          y: -20,
                                                          opacity: 0
                                                        },
                                                        className: "text-emerald-400",
                                                        children: B
                                                      }, B) : U && P.jsx(On.div, {
                                                        layoutId: "cursor",
                                                        className: "w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"
                                                      })
                                                    })
                                                  }, I);
                                                })
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      P.jsx("p", {
                                        className: "text-xs text-zinc-500 text-center",
                                        children: "First 3 digits = Vault ID \u2022 Last 3 digits = PIN"
                                      })
                                    ]
                                  }),
                                  P.jsxs(ii, {
                                    onClick: be,
                                    disabled: n.length !== 6,
                                    className: `w-full h-14 font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 ${n.length === 6 ? "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40 hover:scale-[1.02]" : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`,
                                    children: [
                                      P.jsx(a1, {
                                        className: `w-5 h-5 mr-3 ${n.length === 6 ? "opacity-100" : "opacity-50"}`
                                      }),
                                      n.length === 6 ? "Unlock Vault" : "Enter Code"
                                    ]
                                  }),
                                  P.jsx("div", {
                                    className: "flex items-center justify-center gap-6 pt-4 border-t border-zinc-800",
                                    children: [
                                      {
                                        icon: Vs,
                                        label: "AES-256"
                                      },
                                      {
                                        icon: Io,
                                        label: "Zero-Knowledge"
                                      },
                                      {
                                        icon: o1,
                                        label: "Auto-Destruct"
                                      }
                                    ].map((V, x) => P.jsxs("div", {
                                      className: "flex items-center gap-2 text-zinc-500",
                                      children: [
                                        P.jsx(V.icon, {
                                          className: "w-3.5 h-3.5"
                                        }),
                                        P.jsx("span", {
                                          className: "text-xs",
                                          children: V.label
                                        })
                                      ]
                                    }, x))
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        P.jsx(On.div, {
                          initial: {
                            opacity: 0
                          },
                          animate: {
                            opacity: 1
                          },
                          transition: {
                            delay: 0.3
                          },
                          className: "mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
                          children: P.jsxs("div", {
                            className: "flex gap-3",
                            children: [
                              P.jsx(Il, {
                                className: "w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                              }),
                              P.jsxs("div", {
                                children: [
                                  P.jsx("p", {
                                    className: "text-sm text-amber-200 font-medium",
                                    children: "Important"
                                  }),
                                  P.jsx("p", {
                                    className: "text-xs text-amber-400/80 mt-1",
                                    children: "Access codes expire. If your code doesn't work, the vault may have expired or reached its download limit."
                                  })
                                ]
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    (t === "fetching" || t === "decrypting") && P.jsx("div", {
                      className: "max-w-md mx-auto",
                      children: P.jsxs("div", {
                        className: "relative",
                        children: [
                          P.jsx("div", {
                            className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50"
                          }),
                          P.jsxs("div", {
                            className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 text-center",
                            children: [
                              P.jsxs("div", {
                                className: "w-20 h-20 mx-auto mb-6 relative",
                                children: [
                                  P.jsx("div", {
                                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 animate-pulse"
                                  }),
                                  P.jsx("div", {
                                    className: "absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center",
                                    children: P.jsx(s1, {
                                      className: "w-8 h-8 text-cyan-400 animate-spin"
                                    })
                                  })
                                ]
                              }),
                              P.jsx("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: t === "fetching" ? "Locating Vault" : "Decrypting Content"
                              }),
                              P.jsx("p", {
                                className: "text-zinc-400 text-sm",
                                children: o
                              }),
                              P.jsxs("div", {
                                className: "mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500",
                                children: [
                                  P.jsx(Io, {
                                    className: "w-3 h-3"
                                  }),
                                  P.jsx("span", {
                                    children: "Decryption happens in your browser"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    t === "ready" && P.jsxs("div", {
                      className: "grid lg:grid-cols-3 gap-8",
                      children: [
                        P.jsxs("div", {
                          className: "lg:col-span-1 space-y-6",
                          children: [
                            P.jsxs("div", {
                              className: "relative",
                              children: [
                                P.jsx("div", {
                                  className: "absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20"
                                }),
                                P.jsxs("div", {
                                  className: "relative bg-zinc-950 border border-zinc-800 rounded-2xl p-6",
                                  children: [
                                    P.jsx(On.div, {
                                      initial: {
                                        scale: 0
                                      },
                                      animate: {
                                        scale: 1
                                      },
                                      transition: {
                                        type: "spring"
                                      },
                                      className: "w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center",
                                      children: P.jsx(c1, {
                                        className: "w-8 h-8 text-emerald-400"
                                      })
                                    }),
                                    P.jsx("h2", {
                                      className: "text-2xl font-bold text-center text-white mb-1",
                                      children: "Vault Unlocked"
                                    }),
                                    P.jsx("p", {
                                      className: "text-sm text-zinc-400 text-center",
                                      children: "Secure session established"
                                    })
                                  ]
                                })
                              ]
                            }),
                            P.jsxs("div", {
                              className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 space-y-3",
                              children: [
                                P.jsxs("div", {
                                  className: "flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50",
                                  children: [
                                    P.jsxs("div", {
                                      className: "flex items-center gap-3 text-zinc-400",
                                      children: [
                                        P.jsx("div", {
                                          className: "p-2 rounded-lg bg-zinc-800",
                                          children: P.jsx(p1, {
                                            className: "w-4 h-4"
                                          })
                                        }),
                                        P.jsx("span", {
                                          className: "text-xs font-bold uppercase tracking-wider",
                                          children: "Expires"
                                        })
                                      ]
                                    }),
                                    P.jsx(Cm, {
                                      expiresAt: u.expiresAt
                                    })
                                  ]
                                }),
                                P.jsxs("div", {
                                  className: "flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50",
                                  children: [
                                    P.jsxs("div", {
                                      className: "flex items-center gap-3 text-zinc-400",
                                      children: [
                                        P.jsx("div", {
                                          className: "p-2 rounded-lg bg-zinc-800",
                                          children: P.jsx(jo, {
                                            className: "w-4 h-4"
                                          })
                                        }),
                                        P.jsx("span", {
                                          className: "text-xs font-bold uppercase tracking-wider",
                                          children: "Downloads"
                                        })
                                      ]
                                    }),
                                    P.jsxs("span", {
                                      className: "font-mono text-sm font-bold text-white",
                                      children: [
                                        u.maxDownloads - u.downloadCount,
                                        " ",
                                        P.jsx("span", {
                                          className: "text-zinc-600",
                                          children: "/"
                                        }),
                                        " ",
                                        u.maxDownloads
                                      ]
                                    })
                                  ]
                                }),
                                f.length > 0 && P.jsxs("div", {
                                  className: "flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50",
                                  children: [
                                    P.jsxs("div", {
                                      className: "flex items-center gap-3 text-zinc-400",
                                      children: [
                                        P.jsx("div", {
                                          className: "p-2 rounded-lg bg-zinc-800",
                                          children: P.jsx(v1, {
                                            className: "w-4 h-4"
                                          })
                                        }),
                                        P.jsx("span", {
                                          className: "text-xs font-bold uppercase tracking-wider",
                                          children: "Size"
                                        })
                                      ]
                                    }),
                                    P.jsxs("span", {
                                      className: "font-mono text-sm font-bold text-white",
                                      children: [
                                        (f.reduce((V, x) => V + x.size, 0) / (1024 * 1024)).toFixed(2),
                                        " MB"
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            P.jsx("div", {
                              className: "p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20",
                              children: P.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [
                                  P.jsx(Io, {
                                    className: "w-5 h-5 text-emerald-400 mt-0.5"
                                  }),
                                  P.jsxs("div", {
                                    children: [
                                      P.jsx("p", {
                                        className: "text-xs font-bold text-emerald-300",
                                        children: "Zero-Knowledge Architecture"
                                      }),
                                      P.jsx("p", {
                                        className: "text-xs text-emerald-400/70 mt-1",
                                        children: "Content decrypted locally in your browser. Server never sees plaintext."
                                      })
                                    ]
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        P.jsx("div", {
                          className: "lg:col-span-2",
                          children: P.jsxs("div", {
                            className: "relative",
                            children: [
                              P.jsx("div", {
                                className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50"
                              }),
                              P.jsxs("div", {
                                className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8",
                                children: [
                                  P.jsxs("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                      P.jsx("span", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30",
                                        children: f.length + (E ? 1 : 0)
                                      }),
                                      P.jsx("h3", {
                                        className: "text-sm font-bold text-zinc-300 uppercase tracking-widest",
                                        children: f.length > 0 ? "Available Content" : "Secure Clipboard"
                                      })
                                    ]
                                  }),
                                  (E !== null || !!u.encryptedClipboardText) && P.jsx(Lm, {
                                    lookupId: j,
                                    fileKey: m,
                                    wrappedKey: u.wrappedKey,
                                    initialContent: E
                                  }),
                                  f.length > 0 && P.jsxs(P.Fragment, {
                                    children: [
                                      P.jsx("div", {
                                        className: "space-y-3 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar",
                                        children: f.map((V, x) => {
                                          var _a;
                                          return P.jsxs(On.div, {
                                            initial: {
                                              opacity: 0,
                                              y: 10
                                            },
                                            animate: {
                                              opacity: 1,
                                              y: 0
                                            },
                                            transition: {
                                              delay: x * 0.05
                                            },
                                            className: "group flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300",
                                            children: [
                                              P.jsxs("div", {
                                                className: "flex items-center gap-4 min-w-0",
                                                children: [
                                                  P.jsx("div", {
                                                    className: "w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-cyan-500/50 transition-colors",
                                                    children: P.jsx(_c, {
                                                      className: "w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors"
                                                    })
                                                  }),
                                                  P.jsxs("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                      P.jsx("p", {
                                                        className: "text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs",
                                                        children: V.name
                                                      }),
                                                      P.jsxs("div", {
                                                        className: "flex items-center gap-3 mt-1",
                                                        children: [
                                                          P.jsxs("span", {
                                                            className: "text-xs text-zinc-500 font-mono",
                                                            children: [
                                                              (V.size / 1024 / 1024).toFixed(2),
                                                              " MB"
                                                            ]
                                                          }),
                                                          P.jsx("span", {
                                                            className: "w-1 h-1 rounded-full bg-zinc-700"
                                                          }),
                                                          P.jsx("span", {
                                                            className: "text-[10px] text-zinc-500 uppercase font-bold",
                                                            children: ((_a = V.type) == null ? void 0 : _a.split("/")[1]) || "FILE"
                                                          })
                                                        ]
                                                      })
                                                    ]
                                                  })
                                                ]
                                              }),
                                              P.jsxs(ii, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "bg-transparent border-zinc-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 shrink-0 transition-colors",
                                                onClick: (I) => {
                                                  I.stopPropagation(), I.preventDefault(), J(V);
                                                },
                                                children: [
                                                  P.jsx(jo, {
                                                    className: "w-4 h-4 mr-2"
                                                  }),
                                                  "Download"
                                                ]
                                              })
                                            ]
                                          }, V.fileId);
                                        })
                                      }),
                                      P.jsxs("div", {
                                        className: "pt-6 border-t border-zinc-800",
                                        children: [
                                          P.jsxs(ii, {
                                            onClick: H,
                                            className: "w-full h-14 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-base uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40 hover:scale-[1.02] transition-all",
                                            children: [
                                              P.jsx(jo, {
                                                className: "w-5 h-5 mr-3"
                                              }),
                                              "Download All Files"
                                            ]
                                          }),
                                          P.jsxs("p", {
                                            className: "text-center text-[10px] uppercase tracking-widest text-zinc-600 mt-4 font-bold",
                                            children: [
                                              (u == null ? void 0 : u.maxDownloads) - (u == null ? void 0 : u.downloadCount),
                                              " Downloads remaining"
                                            ]
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    t === "downloading" && P.jsx("div", {
                      className: "max-w-md mx-auto",
                      children: P.jsxs("div", {
                        className: "relative",
                        children: [
                          P.jsx("div", {
                            className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50"
                          }),
                          P.jsxs("div", {
                            className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 text-center",
                            children: [
                              P.jsxs("div", {
                                className: "w-20 h-20 mx-auto mb-6 relative",
                                children: [
                                  P.jsx("div", {
                                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 animate-pulse"
                                  }),
                                  P.jsx("div", {
                                    className: "absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center",
                                    children: P.jsx(jo, {
                                      className: "w-8 h-8 text-cyan-400 animate-bounce"
                                    })
                                  })
                                ]
                              }),
                              P.jsx("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Downloading Files"
                              }),
                              P.jsx("p", {
                                className: "text-zinc-400 text-sm",
                                children: o
                              }),
                              P.jsxs("div", {
                                className: "mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500",
                                children: [
                                  P.jsx(Io, {
                                    className: "w-3 h-3"
                                  }),
                                  P.jsx("span", {
                                    children: "Files are being decrypted in your browser"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                }, t)
              })
            }),
            P.jsx("footer", {
              className: "border-t border-zinc-800/50 py-6",
              children: P.jsx("div", {
                className: "container max-w-6xl mx-auto px-4",
                children: P.jsxs("div", {
                  className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500",
                  children: [
                    P.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        P.jsx(Vs, {
                          className: "w-4 h-4 text-cyan-500"
                        }),
                        P.jsx("span", {
                          children: "End-to-end encrypted \u2022 Your data never leaves your device unencrypted"
                        })
                      ]
                    }),
                    P.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        P.jsx($i, {
                          href: "/privacy",
                          className: "hover:text-white transition-colors",
                          children: "Privacy"
                        }),
                        P.jsx($i, {
                          href: "/terms",
                          className: "hover:text-white transition-colors",
                          children: "Terms"
                        }),
                        P.jsx($i, {
                          href: "/how-it-works",
                          className: "hover:text-white transition-colors",
                          children: "How It Works"
                        })
                      ]
                    })
                  ]
                })
              })
            })
          ]
        })
      ]
    });
  }
  zm = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pm
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  St as _,
  __tla,
  zm as a
};
