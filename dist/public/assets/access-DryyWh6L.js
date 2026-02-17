const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es-CQjWS-yX.js","assets/index-BkiWEDQ0.js","assets/index-C1LF5i6h.css","assets/input-a8G0CEfI.js","assets/browser-gjyt7kQ7.js","assets/key-round-CKkMdDWy.js","assets/share-2-DTOpvSYr.js","assets/file-text-DZiCbS3D.js","assets/downloadStream-BXjm0uOD.js","assets/triangle-alert-Dy2FAKBt.js","assets/shield-check-B2kuQ4ql.js","assets/download-Cf9O1dKT.js","assets/hard-drive-DzgN_3Li.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { c as wu, H as hl, I as yu, r as be, J as el, j as C, P as ii, K as wt, M as na, N as xu, O as Nu, Q as dl, R as pl, T as Yh, U as Jh, V as _u, W as Vs, Y as Xh, _ as Zh, $ as Qh, a0 as ed, a1 as td, a2 as nd, a3 as rd, a4 as id, a5 as ad, a6 as ai, s as sd, C as od, a7 as Es, l as Au, a8 as ld, a9 as cd, m as Or, aa as oc, B as Dr, ab as ud, ac as fd, ad as Lu, ae as hd, a as dd, u as pd, af as md, ag as gd, ah as bd, ai as vd, b as Gi, L as lc, q as wd, A as yd, aj as xd, S as Nd, Z as cc, i as _d, t as Ad, ak as Ld, al as Sd, am as kd, __tla as __tla_0 } from "./index-BkiWEDQ0.js";
import { I as Pd } from "./input-a8G0CEfI.js";
import { a as tl } from "./browser-gjyt7kQ7.js";
import { C as Su, K as Cd } from "./key-round-CKkMdDWy.js";
import { S as Id } from "./share-2-DTOpvSYr.js";
import { F as nl } from "./file-text-DZiCbS3D.js";
import { i as jd } from "./downloadStream-BXjm0uOD.js";
import { T as Ed } from "./triangle-alert-Dy2FAKBt.js";
import { S as Fd } from "./shield-check-B2kuQ4ql.js";
import { D as jo } from "./download-Cf9O1dKT.js";
import { H as Md } from "./hard-drive-DzgN_3Li.js";
let Lt, pp;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Rd = wu("Circle", [
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
  const Od = wu("FileType", [
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
  var Eo = "rovingFocusGroup.onEntryFocus", Dd = {
    bubbles: false,
    cancelable: true
  }, Ta = "RovingFocusGroup", [rl, ku, Td] = yu(Ta), [Bd, Pu] = hl(Ta, [
    Td
  ]), [qd, Ud] = Bd(Ta), Cu = be.forwardRef((n, e) => C.jsx(rl.Provider, {
    scope: n.__scopeRovingFocusGroup,
    children: C.jsx(rl.Slot, {
      scope: n.__scopeRovingFocusGroup,
      children: C.jsx(zd, {
        ...n,
        ref: e
      })
    })
  }));
  Cu.displayName = Ta;
  var zd = be.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, orientation: r, loop: s = false, dir: a, currentTabStopId: h, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: u, onEntryFocus: d, preventScrollOnEntryFocus: g = false, ...w } = n, S = be.useRef(null), p = na(e, S), I = xu(a), [M, D] = Nu({
      prop: h,
      defaultProp: l ?? null,
      onChange: u,
      caller: Ta
    }), [_, W] = be.useState(false), V = dl(d), q = ku(t), le = be.useRef(false), [xe, ge] = be.useState(0);
    return be.useEffect(() => {
      const ee = S.current;
      if (ee) return ee.addEventListener(Eo, V), () => ee.removeEventListener(Eo, V);
    }, [
      V
    ]), C.jsx(qd, {
      scope: t,
      orientation: r,
      dir: I,
      loop: s,
      currentTabStopId: M,
      onItemFocus: be.useCallback((ee) => D(ee), [
        D
      ]),
      onItemShiftTab: be.useCallback(() => W(true), []),
      onFocusableItemAdd: be.useCallback(() => ge((ee) => ee + 1), []),
      onFocusableItemRemove: be.useCallback(() => ge((ee) => ee - 1), []),
      children: C.jsx(ii.div, {
        tabIndex: _ || xe === 0 ? -1 : 0,
        "data-orientation": r,
        ...w,
        ref: p,
        style: {
          outline: "none",
          ...n.style
        },
        onMouseDown: wt(n.onMouseDown, () => {
          le.current = true;
        }),
        onFocus: wt(n.onFocus, (ee) => {
          const H = !le.current;
          if (ee.target === ee.currentTarget && H && !_) {
            const ie = new CustomEvent(Eo, Dd);
            if (ee.currentTarget.dispatchEvent(ie), !ie.defaultPrevented) {
              const L = q().filter((se) => se.focusable), O = L.find((se) => se.active), R = L.find((se) => se.id === M), te = [
                O,
                R,
                ...L
              ].filter(Boolean).map((se) => se.ref.current);
              Eu(te, g);
            }
          }
          le.current = false;
        }),
        onBlur: wt(n.onBlur, () => W(false))
      })
    });
  }), Iu = "RovingFocusGroupItem", ju = be.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, focusable: r = true, active: s = false, tabStopId: a, children: h, ...l } = n, u = el(), d = a || u, g = Ud(Iu, t), w = g.currentTabStopId === d, S = ku(t), { onFocusableItemAdd: p, onFocusableItemRemove: I, currentTabStopId: M } = g;
    return be.useEffect(() => {
      if (r) return p(), () => I();
    }, [
      r,
      p,
      I
    ]), C.jsx(rl.ItemSlot, {
      scope: t,
      id: d,
      focusable: r,
      active: s,
      children: C.jsx(ii.span, {
        tabIndex: w ? 0 : -1,
        "data-orientation": g.orientation,
        ...l,
        ref: e,
        onMouseDown: wt(n.onMouseDown, (D) => {
          r ? g.onItemFocus(d) : D.preventDefault();
        }),
        onFocus: wt(n.onFocus, () => g.onItemFocus(d)),
        onKeyDown: wt(n.onKeyDown, (D) => {
          if (D.key === "Tab" && D.shiftKey) {
            g.onItemShiftTab();
            return;
          }
          if (D.target !== D.currentTarget) return;
          const _ = Gd(D, g.orientation, g.dir);
          if (_ !== void 0) {
            if (D.metaKey || D.ctrlKey || D.altKey || D.shiftKey) return;
            D.preventDefault();
            let V = S().filter((q) => q.focusable).map((q) => q.ref.current);
            if (_ === "last") V.reverse();
            else if (_ === "prev" || _ === "next") {
              _ === "prev" && V.reverse();
              const q = V.indexOf(D.currentTarget);
              V = g.loop ? Vd(V, q + 1) : V.slice(q + 1);
            }
            setTimeout(() => Eu(V));
          }
        }),
        children: typeof h == "function" ? h({
          isCurrentTabStop: w,
          hasTabStop: M != null
        }) : h
      })
    });
  });
  ju.displayName = Iu;
  var Hd = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function Wd(n, e) {
    return e !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
  }
  function Gd(n, e, t) {
    const r = Wd(n.key, t);
    if (!(e === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(r)) && !(e === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(r))) return Hd[r];
  }
  function Eu(n, e = false) {
    const t = document.activeElement;
    for (const r of n) if (r === t || (r.focus({
      preventScroll: e
    }), document.activeElement !== t)) return;
  }
  function Vd(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  var $d = Cu, Kd = ju;
  function Yd(n) {
    const e = Jd(n), t = be.forwardRef((r, s) => {
      const { children: a, ...h } = r, l = be.Children.toArray(a), u = l.find(Zd);
      if (u) {
        const d = u.props.children, g = l.map((w) => w === u ? be.Children.count(d) > 1 ? be.Children.only(null) : be.isValidElement(d) ? d.props.children : null : w);
        return C.jsx(e, {
          ...h,
          ref: s,
          children: be.isValidElement(d) ? be.cloneElement(d, void 0, g) : null
        });
      }
      return C.jsx(e, {
        ...h,
        ref: s,
        children: a
      });
    });
    return t.displayName = `${n}.Slot`, t;
  }
  function Jd(n) {
    const e = be.forwardRef((t, r) => {
      const { children: s, ...a } = t;
      if (be.isValidElement(s)) {
        const h = e1(s), l = Qd(a, s.props);
        return s.type !== be.Fragment && (l.ref = r ? pl(r, h) : h), be.cloneElement(s, l);
      }
      return be.Children.count(s) > 1 ? be.Children.only(null) : null;
    });
    return e.displayName = `${n}.SlotClone`, e;
  }
  var Xd = Symbol("radix.slottable");
  function Zd(n) {
    return be.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Xd;
  }
  function Qd(n, e) {
    const t = {
      ...e
    };
    for (const r in e) {
      const s = n[r], a = e[r];
      /^on[A-Z]/.test(r) ? s && a ? t[r] = (...l) => {
        const u = a(...l);
        return s(...l), u;
      } : s && (t[r] = s) : r === "style" ? t[r] = {
        ...s,
        ...a
      } : r === "className" && (t[r] = [
        s,
        a
      ].filter(Boolean).join(" "));
    }
    return {
      ...n,
      ...t
    };
  }
  function e1(n) {
    var _a, _b;
    let e = (_a = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : _a.get, t = e && "isReactWarning" in e && e.isReactWarning;
    return t ? n.ref : (e = (_b = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : _b.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref);
  }
  var il = [
    "Enter",
    " "
  ], t1 = [
    "ArrowDown",
    "PageUp",
    "Home"
  ], Fu = [
    "ArrowUp",
    "PageDown",
    "End"
  ], n1 = [
    ...t1,
    ...Fu
  ], r1 = {
    ltr: [
      ...il,
      "ArrowRight"
    ],
    rtl: [
      ...il,
      "ArrowLeft"
    ]
  }, i1 = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  }, Ba = "Menu", [Ma, a1, s1] = yu(Ba), [Pi, Mu] = hl(Ba, [
    s1,
    _u,
    Pu
  ]), $s = _u(), Ru = Pu(), [o1, Ci] = Pi(Ba), [l1, qa] = Pi(Ba), Ou = (n) => {
    const { __scopeMenu: e, open: t = false, children: r, dir: s, onOpenChange: a, modal: h = true } = n, l = $s(e), [u, d] = be.useState(null), g = be.useRef(false), w = dl(a), S = xu(s);
    return be.useEffect(() => {
      const p = () => {
        g.current = true, document.addEventListener("pointerdown", I, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", I, {
          capture: true,
          once: true
        });
      }, I = () => g.current = false;
      return document.addEventListener("keydown", p, {
        capture: true
      }), () => {
        document.removeEventListener("keydown", p, {
          capture: true
        }), document.removeEventListener("pointerdown", I, {
          capture: true
        }), document.removeEventListener("pointermove", I, {
          capture: true
        });
      };
    }, []), C.jsx(Yh, {
      ...l,
      children: C.jsx(o1, {
        scope: e,
        open: t,
        onOpenChange: w,
        content: u,
        onContentChange: d,
        children: C.jsx(l1, {
          scope: e,
          onClose: be.useCallback(() => w(false), [
            w
          ]),
          isUsingKeyboardRef: g,
          dir: S,
          modal: h,
          children: r
        })
      })
    });
  };
  Ou.displayName = Ba;
  var c1 = "MenuAnchor", ml = be.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, s = $s(t);
    return C.jsx(Jh, {
      ...s,
      ...r,
      ref: e
    });
  });
  ml.displayName = c1;
  var gl = "MenuPortal", [u1, Du] = Pi(gl, {
    forceMount: void 0
  }), Tu = (n) => {
    const { __scopeMenu: e, forceMount: t, children: r, container: s } = n, a = Ci(gl, e);
    return C.jsx(u1, {
      scope: e,
      forceMount: t,
      children: C.jsx(Vs, {
        present: t || a.open,
        children: C.jsx(Xh, {
          asChild: true,
          container: s,
          children: r
        })
      })
    });
  };
  Tu.displayName = gl;
  var Gn = "MenuContent", [f1, bl] = Pi(Gn), Bu = be.forwardRef((n, e) => {
    const t = Du(Gn, n.__scopeMenu), { forceMount: r = t.forceMount, ...s } = n, a = Ci(Gn, n.__scopeMenu), h = qa(Gn, n.__scopeMenu);
    return C.jsx(Ma.Provider, {
      scope: n.__scopeMenu,
      children: C.jsx(Vs, {
        present: r || a.open,
        children: C.jsx(Ma.Slot, {
          scope: n.__scopeMenu,
          children: h.modal ? C.jsx(h1, {
            ...s,
            ref: e
          }) : C.jsx(d1, {
            ...s,
            ref: e
          })
        })
      })
    });
  }), h1 = be.forwardRef((n, e) => {
    const t = Ci(Gn, n.__scopeMenu), r = be.useRef(null), s = na(e, r);
    return be.useEffect(() => {
      const a = r.current;
      if (a) return Zh(a);
    }, []), C.jsx(vl, {
      ...n,
      ref: s,
      trapFocus: t.open,
      disableOutsidePointerEvents: t.open,
      disableOutsideScroll: true,
      onFocusOutside: wt(n.onFocusOutside, (a) => a.preventDefault(), {
        checkForDefaultPrevented: false
      }),
      onDismiss: () => t.onOpenChange(false)
    });
  }), d1 = be.forwardRef((n, e) => {
    const t = Ci(Gn, n.__scopeMenu);
    return C.jsx(vl, {
      ...n,
      ref: e,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => t.onOpenChange(false)
    });
  }), p1 = Yd("MenuContent.ScrollLock"), vl = be.forwardRef((n, e) => {
    const { __scopeMenu: t, loop: r = false, trapFocus: s, onOpenAutoFocus: a, onCloseAutoFocus: h, disableOutsidePointerEvents: l, onEntryFocus: u, onEscapeKeyDown: d, onPointerDownOutside: g, onFocusOutside: w, onInteractOutside: S, onDismiss: p, disableOutsideScroll: I, ...M } = n, D = Ci(Gn, t), _ = qa(Gn, t), W = $s(t), V = Ru(t), q = a1(t), [le, xe] = be.useState(null), ge = be.useRef(null), ee = na(e, ge, D.onContentChange), H = be.useRef(0), ie = be.useRef(""), L = be.useRef(0), O = be.useRef(null), R = be.useRef("right"), B = be.useRef(0), te = I ? td : be.Fragment, se = I ? {
      as: p1,
      allowPinchZoom: true
    } : void 0, oe = (X) => {
      var _a, _b;
      const _e = ie.current + X, de = q().filter((Q) => !Q.disabled), x = document.activeElement, T = (_a = de.find((Q) => Q.ref.current === x)) == null ? void 0 : _a.textValue, U = de.map((Q) => Q.textValue), $ = S1(U, _e, T), K = (_b = de.find((Q) => Q.textValue === $)) == null ? void 0 : _b.ref.current;
      (function Q(ce) {
        ie.current = ce, window.clearTimeout(H.current), ce !== "" && (H.current = window.setTimeout(() => Q(""), 1e3));
      })(_e), K && setTimeout(() => K.focus());
    };
    be.useEffect(() => () => window.clearTimeout(H.current), []), ed();
    const Y = be.useCallback((X) => {
      var _a, _b;
      return R.current === ((_a = O.current) == null ? void 0 : _a.side) && P1(X, (_b = O.current) == null ? void 0 : _b.area);
    }, []);
    return C.jsx(f1, {
      scope: t,
      searchRef: ie,
      onItemEnter: be.useCallback((X) => {
        Y(X) && X.preventDefault();
      }, [
        Y
      ]),
      onItemLeave: be.useCallback((X) => {
        var _a;
        Y(X) || ((_a = ge.current) == null ? void 0 : _a.focus(), xe(null));
      }, [
        Y
      ]),
      onTriggerLeave: be.useCallback((X) => {
        Y(X) && X.preventDefault();
      }, [
        Y
      ]),
      pointerGraceTimerRef: L,
      onPointerGraceIntentChange: be.useCallback((X) => {
        O.current = X;
      }, []),
      children: C.jsx(te, {
        ...se,
        children: C.jsx(nd, {
          asChild: true,
          trapped: s,
          onMountAutoFocus: wt(a, (X) => {
            var _a;
            X.preventDefault(), (_a = ge.current) == null ? void 0 : _a.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: h,
          children: C.jsx(rd, {
            asChild: true,
            disableOutsidePointerEvents: l,
            onEscapeKeyDown: d,
            onPointerDownOutside: g,
            onFocusOutside: w,
            onInteractOutside: S,
            onDismiss: p,
            children: C.jsx($d, {
              asChild: true,
              ...V,
              dir: _.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: le,
              onCurrentTabStopIdChange: xe,
              onEntryFocus: wt(u, (X) => {
                _.isUsingKeyboardRef.current || X.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: C.jsx(id, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": tf(D.open),
                "data-radix-menu-content": "",
                dir: _.dir,
                ...W,
                ...M,
                ref: ee,
                style: {
                  outline: "none",
                  ...M.style
                },
                onKeyDown: wt(M.onKeyDown, (X) => {
                  const de = X.target.closest("[data-radix-menu-content]") === X.currentTarget, x = X.ctrlKey || X.altKey || X.metaKey, T = X.key.length === 1;
                  de && (X.key === "Tab" && X.preventDefault(), !x && T && oe(X.key));
                  const U = ge.current;
                  if (X.target !== U || !n1.includes(X.key)) return;
                  X.preventDefault();
                  const K = q().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                  Fu.includes(X.key) && K.reverse(), A1(K);
                }),
                onBlur: wt(n.onBlur, (X) => {
                  X.currentTarget.contains(X.target) || (window.clearTimeout(H.current), ie.current = "");
                }),
                onPointerMove: wt(n.onPointerMove, Ra((X) => {
                  const _e = X.target, de = B.current !== X.clientX;
                  if (X.currentTarget.contains(_e) && de) {
                    const x = X.clientX > B.current ? "right" : "left";
                    R.current = x, B.current = X.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  Bu.displayName = Gn;
  var m1 = "MenuGroup", wl = be.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ii.div, {
      role: "group",
      ...r,
      ref: e
    });
  });
  wl.displayName = m1;
  var g1 = "MenuLabel", qu = be.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ii.div, {
      ...r,
      ref: e
    });
  });
  qu.displayName = g1;
  var qs = "MenuItem", uc = "menu.itemSelect", Ks = be.forwardRef((n, e) => {
    const { disabled: t = false, onSelect: r, ...s } = n, a = be.useRef(null), h = qa(qs, n.__scopeMenu), l = bl(qs, n.__scopeMenu), u = na(e, a), d = be.useRef(false), g = () => {
      const w = a.current;
      if (!t && w) {
        const S = new CustomEvent(uc, {
          bubbles: true,
          cancelable: true
        });
        w.addEventListener(uc, (p) => r == null ? void 0 : r(p), {
          once: true
        }), Qh(w, S), S.defaultPrevented ? d.current = false : h.onClose();
      }
    };
    return C.jsx(Uu, {
      ...s,
      ref: u,
      disabled: t,
      onClick: wt(n.onClick, g),
      onPointerDown: (w) => {
        var _a;
        (_a = n.onPointerDown) == null ? void 0 : _a.call(n, w), d.current = true;
      },
      onPointerUp: wt(n.onPointerUp, (w) => {
        var _a;
        d.current || ((_a = w.currentTarget) == null ? void 0 : _a.click());
      }),
      onKeyDown: wt(n.onKeyDown, (w) => {
        const S = l.searchRef.current !== "";
        t || S && w.key === " " || il.includes(w.key) && (w.currentTarget.click(), w.preventDefault());
      })
    });
  });
  Ks.displayName = qs;
  var Uu = be.forwardRef((n, e) => {
    const { __scopeMenu: t, disabled: r = false, textValue: s, ...a } = n, h = bl(qs, t), l = Ru(t), u = be.useRef(null), d = na(e, u), [g, w] = be.useState(false), [S, p] = be.useState("");
    return be.useEffect(() => {
      const I = u.current;
      I && p((I.textContent ?? "").trim());
    }, [
      a.children
    ]), C.jsx(Ma.ItemSlot, {
      scope: t,
      disabled: r,
      textValue: s ?? S,
      children: C.jsx(Kd, {
        asChild: true,
        ...l,
        focusable: !r,
        children: C.jsx(ii.div, {
          role: "menuitem",
          "data-highlighted": g ? "" : void 0,
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          ...a,
          ref: d,
          onPointerMove: wt(n.onPointerMove, Ra((I) => {
            r ? h.onItemLeave(I) : (h.onItemEnter(I), I.defaultPrevented || I.currentTarget.focus({
              preventScroll: true
            }));
          })),
          onPointerLeave: wt(n.onPointerLeave, Ra((I) => h.onItemLeave(I))),
          onFocus: wt(n.onFocus, () => w(true)),
          onBlur: wt(n.onBlur, () => w(false))
        })
      })
    });
  }), b1 = "MenuCheckboxItem", zu = be.forwardRef((n, e) => {
    const { checked: t = false, onCheckedChange: r, ...s } = n;
    return C.jsx($u, {
      scope: n.__scopeMenu,
      checked: t,
      children: C.jsx(Ks, {
        role: "menuitemcheckbox",
        "aria-checked": Us(t) ? "mixed" : t,
        ...s,
        ref: e,
        "data-state": xl(t),
        onSelect: wt(s.onSelect, () => r == null ? void 0 : r(Us(t) ? true : !t), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  zu.displayName = b1;
  var Hu = "MenuRadioGroup", [v1, w1] = Pi(Hu, {
    value: void 0,
    onValueChange: () => {
    }
  }), Wu = be.forwardRef((n, e) => {
    const { value: t, onValueChange: r, ...s } = n, a = dl(r);
    return C.jsx(v1, {
      scope: n.__scopeMenu,
      value: t,
      onValueChange: a,
      children: C.jsx(wl, {
        ...s,
        ref: e
      })
    });
  });
  Wu.displayName = Hu;
  var Gu = "MenuRadioItem", Vu = be.forwardRef((n, e) => {
    const { value: t, ...r } = n, s = w1(Gu, n.__scopeMenu), a = t === s.value;
    return C.jsx($u, {
      scope: n.__scopeMenu,
      checked: a,
      children: C.jsx(Ks, {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: e,
        "data-state": xl(a),
        onSelect: wt(r.onSelect, () => {
          var _a;
          return (_a = s.onValueChange) == null ? void 0 : _a.call(s, t);
        }, {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  Vu.displayName = Gu;
  var yl = "MenuItemIndicator", [$u, y1] = Pi(yl, {
    checked: false
  }), Ku = be.forwardRef((n, e) => {
    const { __scopeMenu: t, forceMount: r, ...s } = n, a = y1(yl, t);
    return C.jsx(Vs, {
      present: r || Us(a.checked) || a.checked === true,
      children: C.jsx(ii.span, {
        ...s,
        ref: e,
        "data-state": xl(a.checked)
      })
    });
  });
  Ku.displayName = yl;
  var x1 = "MenuSeparator", Yu = be.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ii.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: e
    });
  });
  Yu.displayName = x1;
  var N1 = "MenuArrow", Ju = be.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, s = $s(t);
    return C.jsx(ad, {
      ...s,
      ...r,
      ref: e
    });
  });
  Ju.displayName = N1;
  var _1 = "MenuSub", [dp, Xu] = Pi(_1), Ea = "MenuSubTrigger", Zu = be.forwardRef((n, e) => {
    const t = Ci(Ea, n.__scopeMenu), r = qa(Ea, n.__scopeMenu), s = Xu(Ea, n.__scopeMenu), a = bl(Ea, n.__scopeMenu), h = be.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = a, d = {
      __scopeMenu: n.__scopeMenu
    }, g = be.useCallback(() => {
      h.current && window.clearTimeout(h.current), h.current = null;
    }, []);
    return be.useEffect(() => g, [
      g
    ]), be.useEffect(() => {
      const w = l.current;
      return () => {
        window.clearTimeout(w), u(null);
      };
    }, [
      l,
      u
    ]), C.jsx(ml, {
      asChild: true,
      ...d,
      children: C.jsx(Uu, {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": s.contentId,
        "data-state": tf(t.open),
        ...n,
        ref: pl(e, s.onTriggerChange),
        onClick: (w) => {
          var _a;
          (_a = n.onClick) == null ? void 0 : _a.call(n, w), !(n.disabled || w.defaultPrevented) && (w.currentTarget.focus(), t.open || t.onOpenChange(true));
        },
        onPointerMove: wt(n.onPointerMove, Ra((w) => {
          a.onItemEnter(w), !w.defaultPrevented && !n.disabled && !t.open && !h.current && (a.onPointerGraceIntentChange(null), h.current = window.setTimeout(() => {
            t.onOpenChange(true), g();
          }, 100));
        })),
        onPointerLeave: wt(n.onPointerLeave, Ra((w) => {
          var _a, _b;
          g();
          const S = (_a = t.content) == null ? void 0 : _a.getBoundingClientRect();
          if (S) {
            const p = (_b = t.content) == null ? void 0 : _b.dataset.side, I = p === "right", M = I ? -5 : 5, D = S[I ? "left" : "right"], _ = S[I ? "right" : "left"];
            a.onPointerGraceIntentChange({
              area: [
                {
                  x: w.clientX + M,
                  y: w.clientY
                },
                {
                  x: D,
                  y: S.top
                },
                {
                  x: _,
                  y: S.top
                },
                {
                  x: _,
                  y: S.bottom
                },
                {
                  x: D,
                  y: S.bottom
                }
              ],
              side: p
            }), window.clearTimeout(l.current), l.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300);
          } else {
            if (a.onTriggerLeave(w), w.defaultPrevented) return;
            a.onPointerGraceIntentChange(null);
          }
        })),
        onKeyDown: wt(n.onKeyDown, (w) => {
          var _a;
          const S = a.searchRef.current !== "";
          n.disabled || S && w.key === " " || r1[r.dir].includes(w.key) && (t.onOpenChange(true), (_a = t.content) == null ? void 0 : _a.focus(), w.preventDefault());
        })
      })
    });
  });
  Zu.displayName = Ea;
  var Qu = "MenuSubContent", ef = be.forwardRef((n, e) => {
    const t = Du(Gn, n.__scopeMenu), { forceMount: r = t.forceMount, ...s } = n, a = Ci(Gn, n.__scopeMenu), h = qa(Gn, n.__scopeMenu), l = Xu(Qu, n.__scopeMenu), u = be.useRef(null), d = na(e, u);
    return C.jsx(Ma.Provider, {
      scope: n.__scopeMenu,
      children: C.jsx(Vs, {
        present: r || a.open,
        children: C.jsx(Ma.Slot, {
          scope: n.__scopeMenu,
          children: C.jsx(vl, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...s,
            ref: d,
            align: "start",
            side: h.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: (g) => {
              var _a;
              h.isUsingKeyboardRef.current && ((_a = u.current) == null ? void 0 : _a.focus()), g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: wt(n.onFocusOutside, (g) => {
              g.target !== l.trigger && a.onOpenChange(false);
            }),
            onEscapeKeyDown: wt(n.onEscapeKeyDown, (g) => {
              h.onClose(), g.preventDefault();
            }),
            onKeyDown: wt(n.onKeyDown, (g) => {
              var _a;
              const w = g.currentTarget.contains(g.target), S = i1[h.dir].includes(g.key);
              w && S && (a.onOpenChange(false), (_a = l.trigger) == null ? void 0 : _a.focus(), g.preventDefault());
            })
          })
        })
      })
    });
  });
  ef.displayName = Qu;
  function tf(n) {
    return n ? "open" : "closed";
  }
  function Us(n) {
    return n === "indeterminate";
  }
  function xl(n) {
    return Us(n) ? "indeterminate" : n ? "checked" : "unchecked";
  }
  function A1(n) {
    const e = document.activeElement;
    for (const t of n) if (t === e || (t.focus(), document.activeElement !== e)) return;
  }
  function L1(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  function S1(n, e, t) {
    const s = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, a = t ? n.indexOf(t) : -1;
    let h = L1(n, Math.max(a, 0));
    s.length === 1 && (h = h.filter((d) => d !== t));
    const u = h.find((d) => d.toLowerCase().startsWith(s.toLowerCase()));
    return u !== t ? u : void 0;
  }
  function k1(n, e) {
    const { x: t, y: r } = n;
    let s = false;
    for (let a = 0, h = e.length - 1; a < e.length; h = a++) {
      const l = e[a], u = e[h], d = l.x, g = l.y, w = u.x, S = u.y;
      g > r != S > r && t < (w - d) * (r - g) / (S - g) + d && (s = !s);
    }
    return s;
  }
  function P1(n, e) {
    if (!e) return false;
    const t = {
      x: n.clientX,
      y: n.clientY
    };
    return k1(t, e);
  }
  function Ra(n) {
    return (e) => e.pointerType === "mouse" ? n(e) : void 0;
  }
  var C1 = Ou, I1 = ml, j1 = Tu, E1 = Bu, F1 = wl, M1 = qu, R1 = Ks, O1 = zu, D1 = Wu, T1 = Vu, B1 = Ku, q1 = Yu, U1 = Ju, z1 = Zu, H1 = ef, Ys = "DropdownMenu", [W1] = hl(Ys, [
    Mu
  ]), _n = Mu(), [G1, nf] = W1(Ys), rf = (n) => {
    const { __scopeDropdownMenu: e, children: t, dir: r, open: s, defaultOpen: a, onOpenChange: h, modal: l = true } = n, u = _n(e), d = be.useRef(null), [g, w] = Nu({
      prop: s,
      defaultProp: a ?? false,
      onChange: h,
      caller: Ys
    });
    return C.jsx(G1, {
      scope: e,
      triggerId: el(),
      triggerRef: d,
      contentId: el(),
      open: g,
      onOpenChange: w,
      onOpenToggle: be.useCallback(() => w((S) => !S), [
        w
      ]),
      modal: l,
      children: C.jsx(C1, {
        ...u,
        open: g,
        onOpenChange: w,
        dir: r,
        modal: l,
        children: t
      })
    });
  };
  rf.displayName = Ys;
  var af = "DropdownMenuTrigger", sf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, disabled: r = false, ...s } = n, a = nf(af, t), h = _n(t);
    return C.jsx(I1, {
      asChild: true,
      ...h,
      children: C.jsx(ii.button, {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...s,
        ref: pl(e, a.triggerRef),
        onPointerDown: wt(n.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === false && (a.onOpenToggle(), a.open || l.preventDefault());
        }),
        onKeyDown: wt(n.onKeyDown, (l) => {
          r || ([
            "Enter",
            " "
          ].includes(l.key) && a.onOpenToggle(), l.key === "ArrowDown" && a.onOpenChange(true), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(l.key) && l.preventDefault());
        })
      })
    });
  });
  sf.displayName = af;
  var V1 = "DropdownMenuPortal", of = (n) => {
    const { __scopeDropdownMenu: e, ...t } = n, r = _n(e);
    return C.jsx(j1, {
      ...r,
      ...t
    });
  };
  of.displayName = V1;
  var lf = "DropdownMenuContent", cf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = nf(lf, t), a = _n(t), h = be.useRef(false);
    return C.jsx(E1, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...a,
      ...r,
      ref: e,
      onCloseAutoFocus: wt(n.onCloseAutoFocus, (l) => {
        var _a;
        h.current || ((_a = s.triggerRef.current) == null ? void 0 : _a.focus()), h.current = false, l.preventDefault();
      }),
      onInteractOutside: wt(n.onInteractOutside, (l) => {
        const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === true, g = u.button === 2 || d;
        (!s.modal || g) && (h.current = true);
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
  cf.displayName = lf;
  var $1 = "DropdownMenuGroup", K1 = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(F1, {
      ...s,
      ...r,
      ref: e
    });
  });
  K1.displayName = $1;
  var Y1 = "DropdownMenuLabel", uf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(M1, {
      ...s,
      ...r,
      ref: e
    });
  });
  uf.displayName = Y1;
  var J1 = "DropdownMenuItem", ff = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(R1, {
      ...s,
      ...r,
      ref: e
    });
  });
  ff.displayName = J1;
  var X1 = "DropdownMenuCheckboxItem", hf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(O1, {
      ...s,
      ...r,
      ref: e
    });
  });
  hf.displayName = X1;
  var Z1 = "DropdownMenuRadioGroup", Q1 = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(D1, {
      ...s,
      ...r,
      ref: e
    });
  });
  Q1.displayName = Z1;
  var e2 = "DropdownMenuRadioItem", df = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(T1, {
      ...s,
      ...r,
      ref: e
    });
  });
  df.displayName = e2;
  var t2 = "DropdownMenuItemIndicator", pf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(B1, {
      ...s,
      ...r,
      ref: e
    });
  });
  pf.displayName = t2;
  var n2 = "DropdownMenuSeparator", mf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(q1, {
      ...s,
      ...r,
      ref: e
    });
  });
  mf.displayName = n2;
  var r2 = "DropdownMenuArrow", i2 = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(U1, {
      ...s,
      ...r,
      ref: e
    });
  });
  i2.displayName = r2;
  var a2 = "DropdownMenuSubTrigger", gf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(z1, {
      ...s,
      ...r,
      ref: e
    });
  });
  gf.displayName = a2;
  var s2 = "DropdownMenuSubContent", bf = be.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(H1, {
      ...s,
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
  bf.displayName = s2;
  var o2 = rf, l2 = sf, c2 = of, vf = cf, wf = uf, yf = ff, xf = hf, Nf = df, _f = pf, Af = mf, Lf = gf, Sf = bf;
  const u2 = o2, f2 = l2, h2 = be.forwardRef(({ className: n, inset: e, children: t, ...r }, s) => C.jsxs(Lf, {
    ref: s,
    className: ai("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...r,
    children: [
      t,
      C.jsx(sd, {
        className: "ml-auto"
      })
    ]
  }));
  h2.displayName = Lf.displayName;
  const d2 = be.forwardRef(({ className: n, ...e }, t) => C.jsx(Sf, {
    ref: t,
    className: ai("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
    ...e
  }));
  d2.displayName = Sf.displayName;
  const kf = be.forwardRef(({ className: n, sideOffset: e = 4, ...t }, r) => C.jsx(c2, {
    children: C.jsx(vf, {
      ref: r,
      sideOffset: e,
      className: ai("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
      ...t
    })
  }));
  kf.displayName = vf.displayName;
  const Fs = be.forwardRef(({ className: n, inset: e, ...t }, r) => C.jsx(yf, {
    ref: r,
    className: ai("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...t
  }));
  Fs.displayName = yf.displayName;
  const p2 = be.forwardRef(({ className: n, children: e, checked: t, ...r }, s) => C.jsxs(xf, {
    ref: s,
    className: ai("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    checked: t,
    ...r,
    children: [
      C.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(_f, {
          children: C.jsx(od, {
            className: "h-4 w-4"
          })
        })
      }),
      e
    ]
  }));
  p2.displayName = xf.displayName;
  const m2 = be.forwardRef(({ className: n, children: e, ...t }, r) => C.jsxs(Nf, {
    ref: r,
    className: ai("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    ...t,
    children: [
      C.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(_f, {
          children: C.jsx(Rd, {
            className: "h-2 w-2 fill-current"
          })
        })
      }),
      e
    ]
  }));
  m2.displayName = Nf.displayName;
  const g2 = be.forwardRef(({ className: n, inset: e, ...t }, r) => C.jsx(wf, {
    ref: r,
    className: ai("px-2 py-1.5 text-sm font-semibold", e && "pl-8", n),
    ...t
  }));
  g2.displayName = wf.displayName;
  const b2 = be.forwardRef(({ className: n, ...e }, t) => C.jsx(Af, {
    ref: t,
    className: ai("-mx-1 my-1 h-px bg-muted", n),
    ...e
  }));
  b2.displayName = Af.displayName;
  Lt = function(n) {
    "@babel/helpers - typeof";
    return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Lt(n);
  };
  function v2(n) {
    if (Array.isArray(n)) return n;
  }
  function w2(n, e) {
    var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (t != null) {
      var r, s, a, h, l = [], u = true, d = false;
      try {
        if (a = (t = t.call(n)).next, e !== 0) for (; !(u = (r = a.call(t)).done) && (l.push(r.value), l.length !== e); u = true) ;
      } catch (g) {
        d = true, s = g;
      } finally {
        try {
          if (!u && t.return != null && (h = t.return(), Object(h) !== h)) return;
        } finally {
          if (d) throw s;
        }
      }
      return l;
    }
  }
  function fc(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  function y2(n, e) {
    if (n) {
      if (typeof n == "string") return fc(n, e);
      var t = {}.toString.call(n).slice(8, -1);
      return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? fc(n, e) : void 0;
    }
  }
  function x2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function hc(n, e) {
    return v2(n) || w2(n, e) || y2(n, e) || x2();
  }
  function dc(n, e = "utf8") {
    return new TextDecoder(e).decode(n);
  }
  const N2 = new TextEncoder();
  function _2(n) {
    return N2.encode(n);
  }
  const A2 = 1024 * 8, L2 = (() => {
    const n = new Uint8Array(4), e = new Uint32Array(n.buffer);
    return !((e[0] = 1) & n[0]);
  })(), Fo = {
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
  class Nl {
    constructor(e = A2, t = {}) {
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
      const s = t.offset ? t.offset >>> 0 : 0, a = e.byteLength - s;
      let h = s;
      (ArrayBuffer.isView(e) || e instanceof Nl) && (e.byteLength !== e.buffer.byteLength && (h = e.byteOffset + s), e = e.buffer), r ? this.lastWrittenByte = a : this.lastWrittenByte = 0, this.buffer = e, this.length = a, this.byteLength = a, this.byteOffset = h, this.offset = 0, this.littleEndian = true, this._data = new DataView(this.buffer, h, a), this._mark = 0, this._marks = [];
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
        const r = (this.offset + e) * 2, s = new Uint8Array(r);
        s.set(new Uint8Array(this.buffer)), this.buffer = s.buffer, this.length = r, this.byteLength = r, this._data = new DataView(this.buffer);
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
      const r = Fo[t].BYTES_PER_ELEMENT * e, s = this.byteOffset + this.offset, a = this.buffer.slice(s, s + r);
      if (this.littleEndian === L2 && t !== "uint8" && t !== "int8") {
        const l = new Uint8Array(this.buffer.slice(s, s + r));
        l.reverse();
        const u = new Fo[t](l.buffer);
        return this.offset += r, u.reverse(), u;
      }
      const h = new Fo[t](a);
      return this.offset += r, h;
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
      return dc(this.readBytes(e));
    }
    decodeText(e = 1, t = "utf8") {
      return dc(this.readBytes(e), t);
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
      return this.writeBytes(_2(e));
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
  function ra(n) {
    let e = n.length;
    for (; --e >= 0; ) n[e] = 0;
  }
  const S2 = 3, k2 = 258, Pf = 29, P2 = 256, C2 = P2 + 1 + Pf, Cf = 30, I2 = 512, j2 = new Array((C2 + 2) * 2);
  ra(j2);
  const E2 = new Array(Cf * 2);
  ra(E2);
  const F2 = new Array(I2);
  ra(F2);
  const M2 = new Array(k2 - S2 + 1);
  ra(M2);
  const R2 = new Array(Pf);
  ra(R2);
  const O2 = new Array(Cf);
  ra(O2);
  const D2 = (n, e, t, r) => {
    let s = n & 65535 | 0, a = n >>> 16 & 65535 | 0, h = 0;
    for (; t !== 0; ) {
      h = t > 2e3 ? 2e3 : t, t -= h;
      do
        s = s + e[r++] | 0, a = a + s | 0;
      while (--h);
      s %= 65521, a %= 65521;
    }
    return s | a << 16 | 0;
  };
  var al = D2;
  const T2 = () => {
    let n, e = [];
    for (var t = 0; t < 256; t++) {
      n = t;
      for (var r = 0; r < 8; r++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      e[t] = n;
    }
    return e;
  }, B2 = new Uint32Array(T2()), q2 = (n, e, t, r) => {
    const s = B2, a = r + t;
    n ^= -1;
    for (let h = r; h < a; h++) n = n >>> 8 ^ s[(n ^ e[h]) & 255];
    return n ^ -1;
  };
  var dr = q2, sl = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }, If = {
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
  const U2 = (n, e) => Object.prototype.hasOwnProperty.call(n, e);
  var z2 = function(n) {
    const e = Array.prototype.slice.call(arguments, 1);
    for (; e.length; ) {
      const t = e.shift();
      if (t) {
        if (typeof t != "object") throw new TypeError(t + "must be non-object");
        for (const r in t) U2(t, r) && (n[r] = t[r]);
      }
    }
    return n;
  }, H2 = (n) => {
    let e = 0;
    for (let r = 0, s = n.length; r < s; r++) e += n[r].length;
    const t = new Uint8Array(e);
    for (let r = 0, s = 0, a = n.length; r < a; r++) {
      let h = n[r];
      t.set(h, s), s += h.length;
    }
    return t;
  }, jf = {
    assign: z2,
    flattenChunks: H2
  };
  let Ef = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    Ef = false;
  }
  const Oa = new Uint8Array(256);
  for (let n = 0; n < 256; n++) Oa[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
  Oa[254] = Oa[254] = 1;
  var W2 = (n) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(n);
    let e, t, r, s, a, h = n.length, l = 0;
    for (s = 0; s < h; s++) t = n.charCodeAt(s), (t & 64512) === 55296 && s + 1 < h && (r = n.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    for (e = new Uint8Array(l), a = 0, s = 0; a < l; s++) t = n.charCodeAt(s), (t & 64512) === 55296 && s + 1 < h && (r = n.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), t < 128 ? e[a++] = t : t < 2048 ? (e[a++] = 192 | t >>> 6, e[a++] = 128 | t & 63) : t < 65536 ? (e[a++] = 224 | t >>> 12, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63) : (e[a++] = 240 | t >>> 18, e[a++] = 128 | t >>> 12 & 63, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63);
    return e;
  };
  const G2 = (n, e) => {
    if (e < 65534 && n.subarray && Ef) return String.fromCharCode.apply(null, n.length === e ? n : n.subarray(0, e));
    let t = "";
    for (let r = 0; r < e; r++) t += String.fromCharCode(n[r]);
    return t;
  };
  var V2 = (n, e) => {
    const t = e || n.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(n.subarray(0, e));
    let r, s;
    const a = new Array(t * 2);
    for (s = 0, r = 0; r < t; ) {
      let h = n[r++];
      if (h < 128) {
        a[s++] = h;
        continue;
      }
      let l = Oa[h];
      if (l > 4) {
        a[s++] = 65533, r += l - 1;
        continue;
      }
      for (h &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && r < t; ) h = h << 6 | n[r++] & 63, l--;
      if (l > 1) {
        a[s++] = 65533;
        continue;
      }
      h < 65536 ? a[s++] = h : (h -= 65536, a[s++] = 55296 | h >> 10 & 1023, a[s++] = 56320 | h & 1023);
    }
    return G2(a, s);
  }, $2 = (n, e) => {
    e = e || n.length, e > n.length && (e = n.length);
    let t = e - 1;
    for (; t >= 0 && (n[t] & 192) === 128; ) t--;
    return t < 0 || t === 0 ? e : t + Oa[n[t]] > e ? t : e;
  }, ol = {
    string2buf: W2,
    buf2string: V2,
    utf8border: $2
  };
  function K2() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  var Y2 = K2;
  const As = 16209, J2 = 16191;
  var X2 = function(e, t) {
    let r, s, a, h, l, u, d, g, w, S, p, I, M, D, _, W, V, q, le, xe, ge, ee, H, ie;
    const L = e.state;
    r = e.next_in, H = e.input, s = r + (e.avail_in - 5), a = e.next_out, ie = e.output, h = a - (t - e.avail_out), l = a + (e.avail_out - 257), u = L.dmax, d = L.wsize, g = L.whave, w = L.wnext, S = L.window, p = L.hold, I = L.bits, M = L.lencode, D = L.distcode, _ = (1 << L.lenbits) - 1, W = (1 << L.distbits) - 1;
    e: do {
      I < 15 && (p += H[r++] << I, I += 8, p += H[r++] << I, I += 8), V = M[p & _];
      t: for (; ; ) {
        if (q = V >>> 24, p >>>= q, I -= q, q = V >>> 16 & 255, q === 0) ie[a++] = V & 65535;
        else if (q & 16) {
          le = V & 65535, q &= 15, q && (I < q && (p += H[r++] << I, I += 8), le += p & (1 << q) - 1, p >>>= q, I -= q), I < 15 && (p += H[r++] << I, I += 8, p += H[r++] << I, I += 8), V = D[p & W];
          n: for (; ; ) {
            if (q = V >>> 24, p >>>= q, I -= q, q = V >>> 16 & 255, q & 16) {
              if (xe = V & 65535, q &= 15, I < q && (p += H[r++] << I, I += 8, I < q && (p += H[r++] << I, I += 8)), xe += p & (1 << q) - 1, xe > u) {
                e.msg = "invalid distance too far back", L.mode = As;
                break e;
              }
              if (p >>>= q, I -= q, q = a - h, xe > q) {
                if (q = xe - q, q > g && L.sane) {
                  e.msg = "invalid distance too far back", L.mode = As;
                  break e;
                }
                if (ge = 0, ee = S, w === 0) {
                  if (ge += d - q, q < le) {
                    le -= q;
                    do
                      ie[a++] = S[ge++];
                    while (--q);
                    ge = a - xe, ee = ie;
                  }
                } else if (w < q) {
                  if (ge += d + w - q, q -= w, q < le) {
                    le -= q;
                    do
                      ie[a++] = S[ge++];
                    while (--q);
                    if (ge = 0, w < le) {
                      q = w, le -= q;
                      do
                        ie[a++] = S[ge++];
                      while (--q);
                      ge = a - xe, ee = ie;
                    }
                  }
                } else if (ge += w - q, q < le) {
                  le -= q;
                  do
                    ie[a++] = S[ge++];
                  while (--q);
                  ge = a - xe, ee = ie;
                }
                for (; le > 2; ) ie[a++] = ee[ge++], ie[a++] = ee[ge++], ie[a++] = ee[ge++], le -= 3;
                le && (ie[a++] = ee[ge++], le > 1 && (ie[a++] = ee[ge++]));
              } else {
                ge = a - xe;
                do
                  ie[a++] = ie[ge++], ie[a++] = ie[ge++], ie[a++] = ie[ge++], le -= 3;
                while (le > 2);
                le && (ie[a++] = ie[ge++], le > 1 && (ie[a++] = ie[ge++]));
              }
            } else if (q & 64) {
              e.msg = "invalid distance code", L.mode = As;
              break e;
            } else {
              V = D[(V & 65535) + (p & (1 << q) - 1)];
              continue n;
            }
            break;
          }
        } else if (q & 64) if (q & 32) {
          L.mode = J2;
          break e;
        } else {
          e.msg = "invalid literal/length code", L.mode = As;
          break e;
        }
        else {
          V = M[(V & 65535) + (p & (1 << q) - 1)];
          continue t;
        }
        break;
      }
    } while (r < s && a < l);
    le = I >> 3, r -= le, I -= le << 3, p &= (1 << I) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < s ? 5 + (s - r) : 5 - (r - s), e.avail_out = a < l ? 257 + (l - a) : 257 - (a - l), L.hold = p, L.bits = I;
  };
  const Vi = 15, pc = 852, mc = 592, gc = 0, Mo = 1, bc = 2, Z2 = new Uint16Array([
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
  ]), Q2 = new Uint8Array([
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
  ]), e5 = new Uint16Array([
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
  ]), t5 = new Uint8Array([
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
  ]), n5 = (n, e, t, r, s, a, h, l) => {
    const u = l.bits;
    let d = 0, g = 0, w = 0, S = 0, p = 0, I = 0, M = 0, D = 0, _ = 0, W = 0, V, q, le, xe, ge, ee = null, H;
    const ie = new Uint16Array(Vi + 1), L = new Uint16Array(Vi + 1);
    let O = null, R, B, te;
    for (d = 0; d <= Vi; d++) ie[d] = 0;
    for (g = 0; g < r; g++) ie[e[t + g]]++;
    for (p = u, S = Vi; S >= 1 && ie[S] === 0; S--) ;
    if (p > S && (p = S), S === 0) return s[a++] = 1 << 24 | 64 << 16 | 0, s[a++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
    for (w = 1; w < S && ie[w] === 0; w++) ;
    for (p < w && (p = w), D = 1, d = 1; d <= Vi; d++) if (D <<= 1, D -= ie[d], D < 0) return -1;
    if (D > 0 && (n === gc || S !== 1)) return -1;
    for (L[1] = 0, d = 1; d < Vi; d++) L[d + 1] = L[d] + ie[d];
    for (g = 0; g < r; g++) e[t + g] !== 0 && (h[L[e[t + g]]++] = g);
    if (n === gc ? (ee = O = h, H = 20) : n === Mo ? (ee = Z2, O = Q2, H = 257) : (ee = e5, O = t5, H = 0), W = 0, g = 0, d = w, ge = a, I = p, M = 0, le = -1, _ = 1 << p, xe = _ - 1, n === Mo && _ > pc || n === bc && _ > mc) return 1;
    for (; ; ) {
      R = d - M, h[g] + 1 < H ? (B = 0, te = h[g]) : h[g] >= H ? (B = O[h[g] - H], te = ee[h[g] - H]) : (B = 96, te = 0), V = 1 << d - M, q = 1 << I, w = q;
      do
        q -= V, s[ge + (W >> M) + q] = R << 24 | B << 16 | te | 0;
      while (q !== 0);
      for (V = 1 << d - 1; W & V; ) V >>= 1;
      if (V !== 0 ? (W &= V - 1, W += V) : W = 0, g++, --ie[d] === 0) {
        if (d === S) break;
        d = e[t + h[g]];
      }
      if (d > p && (W & xe) !== le) {
        for (M === 0 && (M = p), ge += w, I = d - M, D = 1 << I; I + M < S && (D -= ie[I + M], !(D <= 0)); ) I++, D <<= 1;
        if (_ += 1 << I, n === Mo && _ > pc || n === bc && _ > mc) return 1;
        le = W & xe, s[le] = p << 24 | I << 16 | ge - a | 0;
      }
    }
    return W !== 0 && (s[ge + W] = d - M << 24 | 64 << 16 | 0), l.bits = p, 0;
  };
  var Fa = n5;
  const r5 = 0, Ff = 1, Mf = 2, { Z_FINISH: vc, Z_BLOCK: i5, Z_TREES: Ls, Z_OK: ki, Z_STREAM_END: a5, Z_NEED_DICT: s5, Z_STREAM_ERROR: Vn, Z_DATA_ERROR: Rf, Z_MEM_ERROR: Of, Z_BUF_ERROR: o5, Z_DEFLATED: wc } = If, Js = 16180, yc = 16181, xc = 16182, Nc = 16183, _c = 16184, Ac = 16185, Lc = 16186, Sc = 16187, kc = 16188, Pc = 16189, zs = 16190, Rr = 16191, Ro = 16192, Cc = 16193, Oo = 16194, Ic = 16195, jc = 16196, Ec = 16197, Fc = 16198, Ss = 16199, ks = 16200, Mc = 16201, Rc = 16202, Oc = 16203, Dc = 16204, Tc = 16205, Do = 16206, Bc = 16207, qc = 16208, Rt = 16209, Df = 16210, Tf = 16211, l5 = 852, c5 = 592, u5 = 15, f5 = u5, Uc = (n) => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
  function h5() {
    this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  const Ii = (n) => {
    if (!n) return 1;
    const e = n.state;
    return !e || e.strm !== n || e.mode < Js || e.mode > Tf ? 1 : 0;
  }, Bf = (n) => {
    if (Ii(n)) return Vn;
    const e = n.state;
    return n.total_in = n.total_out = e.total = 0, n.msg = "", e.wrap && (n.adler = e.wrap & 1), e.mode = Js, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(l5), e.distcode = e.distdyn = new Int32Array(c5), e.sane = 1, e.back = -1, ki;
  }, qf = (n) => {
    if (Ii(n)) return Vn;
    const e = n.state;
    return e.wsize = 0, e.whave = 0, e.wnext = 0, Bf(n);
  }, Uf = (n, e) => {
    let t;
    if (Ii(n)) return Vn;
    const r = n.state;
    return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Vn : (r.window !== null && r.wbits !== e && (r.window = null), r.wrap = t, r.wbits = e, qf(n));
  }, zf = (n, e) => {
    if (!n) return Vn;
    const t = new h5();
    n.state = t, t.strm = n, t.window = null, t.mode = Js;
    const r = Uf(n, e);
    return r !== ki && (n.state = null), r;
  }, d5 = (n) => zf(n, f5);
  let zc = true, To, Bo;
  const p5 = (n) => {
    if (zc) {
      To = new Int32Array(512), Bo = new Int32Array(32);
      let e = 0;
      for (; e < 144; ) n.lens[e++] = 8;
      for (; e < 256; ) n.lens[e++] = 9;
      for (; e < 280; ) n.lens[e++] = 7;
      for (; e < 288; ) n.lens[e++] = 8;
      for (Fa(Ff, n.lens, 0, 288, To, 0, n.work, {
        bits: 9
      }), e = 0; e < 32; ) n.lens[e++] = 5;
      Fa(Mf, n.lens, 0, 32, Bo, 0, n.work, {
        bits: 5
      }), zc = false;
    }
    n.lencode = To, n.lenbits = 9, n.distcode = Bo, n.distbits = 5;
  }, Hf = (n, e, t, r) => {
    let s;
    const a = n.state;
    return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), r >= a.wsize ? (a.window.set(e.subarray(t - a.wsize, t), 0), a.wnext = 0, a.whave = a.wsize) : (s = a.wsize - a.wnext, s > r && (s = r), a.window.set(e.subarray(t - r, t - r + s), a.wnext), r -= s, r ? (a.window.set(e.subarray(t - r, t), 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0;
  }, m5 = (n, e) => {
    let t, r, s, a, h, l, u, d, g, w, S, p, I, M, D = 0, _, W, V, q, le, xe, ge, ee;
    const H = new Uint8Array(4);
    let ie, L;
    const O = new Uint8Array([
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
    if (Ii(n) || !n.output || !n.input && n.avail_in !== 0) return Vn;
    t = n.state, t.mode === Rr && (t.mode = Ro), h = n.next_out, s = n.output, u = n.avail_out, a = n.next_in, r = n.input, l = n.avail_in, d = t.hold, g = t.bits, w = l, S = u, ee = ki;
    e: for (; ; ) switch (t.mode) {
      case Js:
        if (t.wrap === 0) {
          t.mode = Ro;
          break;
        }
        for (; g < 16; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (t.wrap & 2 && d === 35615) {
          t.wbits === 0 && (t.wbits = 15), t.check = 0, H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = dr(t.check, H, 2, 0), d = 0, g = 0, t.mode = yc;
          break;
        }
        if (t.head && (t.head.done = false), !(t.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
          n.msg = "incorrect header check", t.mode = Rt;
          break;
        }
        if ((d & 15) !== wc) {
          n.msg = "unknown compression method", t.mode = Rt;
          break;
        }
        if (d >>>= 4, g -= 4, ge = (d & 15) + 8, t.wbits === 0 && (t.wbits = ge), ge > 15 || ge > t.wbits) {
          n.msg = "invalid window size", t.mode = Rt;
          break;
        }
        t.dmax = 1 << t.wbits, t.flags = 0, n.adler = t.check = 1, t.mode = d & 512 ? Pc : Rr, d = 0, g = 0;
        break;
      case yc:
        for (; g < 16; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (t.flags = d, (t.flags & 255) !== wc) {
          n.msg = "unknown compression method", t.mode = Rt;
          break;
        }
        if (t.flags & 57344) {
          n.msg = "unknown header flags set", t.mode = Rt;
          break;
        }
        t.head && (t.head.text = d >> 8 & 1), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = dr(t.check, H, 2, 0)), d = 0, g = 0, t.mode = xc;
      case xc:
        for (; g < 32; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        t.head && (t.head.time = d), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, H[2] = d >>> 16 & 255, H[3] = d >>> 24 & 255, t.check = dr(t.check, H, 4, 0)), d = 0, g = 0, t.mode = Nc;
      case Nc:
        for (; g < 16; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        t.head && (t.head.xflags = d & 255, t.head.os = d >> 8), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = dr(t.check, H, 2, 0)), d = 0, g = 0, t.mode = _c;
      case _c:
        if (t.flags & 1024) {
          for (; g < 16; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.length = d, t.head && (t.head.extra_len = d), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = dr(t.check, H, 2, 0)), d = 0, g = 0;
        } else t.head && (t.head.extra = null);
        t.mode = Ac;
      case Ac:
        if (t.flags & 1024 && (p = t.length, p > l && (p = l), p && (t.head && (ge = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(r.subarray(a, a + p), ge)), t.flags & 512 && t.wrap & 4 && (t.check = dr(t.check, r, p, a)), l -= p, a += p, t.length -= p), t.length)) break e;
        t.length = 0, t.mode = Lc;
      case Lc:
        if (t.flags & 2048) {
          if (l === 0) break e;
          p = 0;
          do
            ge = r[a + p++], t.head && ge && t.length < 65536 && (t.head.name += String.fromCharCode(ge));
          while (ge && p < l);
          if (t.flags & 512 && t.wrap & 4 && (t.check = dr(t.check, r, p, a)), l -= p, a += p, ge) break e;
        } else t.head && (t.head.name = null);
        t.length = 0, t.mode = Sc;
      case Sc:
        if (t.flags & 4096) {
          if (l === 0) break e;
          p = 0;
          do
            ge = r[a + p++], t.head && ge && t.length < 65536 && (t.head.comment += String.fromCharCode(ge));
          while (ge && p < l);
          if (t.flags & 512 && t.wrap & 4 && (t.check = dr(t.check, r, p, a)), l -= p, a += p, ge) break e;
        } else t.head && (t.head.comment = null);
        t.mode = kc;
      case kc:
        if (t.flags & 512) {
          for (; g < 16; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          if (t.wrap & 4 && d !== (t.check & 65535)) {
            n.msg = "header crc mismatch", t.mode = Rt;
            break;
          }
          d = 0, g = 0;
        }
        t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = true), n.adler = t.check = 0, t.mode = Rr;
        break;
      case Pc:
        for (; g < 32; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        n.adler = t.check = Uc(d), d = 0, g = 0, t.mode = zs;
      case zs:
        if (t.havedict === 0) return n.next_out = h, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, s5;
        n.adler = t.check = 1, t.mode = Rr;
      case Rr:
        if (e === i5 || e === Ls) break e;
      case Ro:
        if (t.last) {
          d >>>= g & 7, g -= g & 7, t.mode = Do;
          break;
        }
        for (; g < 3; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        switch (t.last = d & 1, d >>>= 1, g -= 1, d & 3) {
          case 0:
            t.mode = Cc;
            break;
          case 1:
            if (p5(t), t.mode = Ss, e === Ls) {
              d >>>= 2, g -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = jc;
            break;
          case 3:
            n.msg = "invalid block type", t.mode = Rt;
        }
        d >>>= 2, g -= 2;
        break;
      case Cc:
        for (d >>>= g & 7, g -= g & 7; g < 32; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if ((d & 65535) !== (d >>> 16 ^ 65535)) {
          n.msg = "invalid stored block lengths", t.mode = Rt;
          break;
        }
        if (t.length = d & 65535, d = 0, g = 0, t.mode = Oo, e === Ls) break e;
      case Oo:
        t.mode = Ic;
      case Ic:
        if (p = t.length, p) {
          if (p > l && (p = l), p > u && (p = u), p === 0) break e;
          s.set(r.subarray(a, a + p), h), l -= p, a += p, u -= p, h += p, t.length -= p;
          break;
        }
        t.mode = Rr;
        break;
      case jc:
        for (; g < 14; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (t.nlen = (d & 31) + 257, d >>>= 5, g -= 5, t.ndist = (d & 31) + 1, d >>>= 5, g -= 5, t.ncode = (d & 15) + 4, d >>>= 4, g -= 4, t.nlen > 286 || t.ndist > 30) {
          n.msg = "too many length or distance symbols", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = Ec;
      case Ec:
        for (; t.have < t.ncode; ) {
          for (; g < 3; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.lens[O[t.have++]] = d & 7, d >>>= 3, g -= 3;
        }
        for (; t.have < 19; ) t.lens[O[t.have++]] = 0;
        if (t.lencode = t.lendyn, t.lenbits = 7, ie = {
          bits: t.lenbits
        }, ee = Fa(r5, t.lens, 0, 19, t.lencode, 0, t.work, ie), t.lenbits = ie.bits, ee) {
          n.msg = "invalid code lengths set", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = Fc;
      case Fc:
        for (; t.have < t.nlen + t.ndist; ) {
          for (; D = t.lencode[d & (1 << t.lenbits) - 1], _ = D >>> 24, W = D >>> 16 & 255, V = D & 65535, !(_ <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          if (V < 16) d >>>= _, g -= _, t.lens[t.have++] = V;
          else {
            if (V === 16) {
              for (L = _ + 2; g < L; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              if (d >>>= _, g -= _, t.have === 0) {
                n.msg = "invalid bit length repeat", t.mode = Rt;
                break;
              }
              ge = t.lens[t.have - 1], p = 3 + (d & 3), d >>>= 2, g -= 2;
            } else if (V === 17) {
              for (L = _ + 3; g < L; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              d >>>= _, g -= _, ge = 0, p = 3 + (d & 7), d >>>= 3, g -= 3;
            } else {
              for (L = _ + 7; g < L; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              d >>>= _, g -= _, ge = 0, p = 11 + (d & 127), d >>>= 7, g -= 7;
            }
            if (t.have + p > t.nlen + t.ndist) {
              n.msg = "invalid bit length repeat", t.mode = Rt;
              break;
            }
            for (; p--; ) t.lens[t.have++] = ge;
          }
        }
        if (t.mode === Rt) break;
        if (t.lens[256] === 0) {
          n.msg = "invalid code -- missing end-of-block", t.mode = Rt;
          break;
        }
        if (t.lenbits = 9, ie = {
          bits: t.lenbits
        }, ee = Fa(Ff, t.lens, 0, t.nlen, t.lencode, 0, t.work, ie), t.lenbits = ie.bits, ee) {
          n.msg = "invalid literal/lengths set", t.mode = Rt;
          break;
        }
        if (t.distbits = 6, t.distcode = t.distdyn, ie = {
          bits: t.distbits
        }, ee = Fa(Mf, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, ie), t.distbits = ie.bits, ee) {
          n.msg = "invalid distances set", t.mode = Rt;
          break;
        }
        if (t.mode = Ss, e === Ls) break e;
      case Ss:
        t.mode = ks;
      case ks:
        if (l >= 6 && u >= 258) {
          n.next_out = h, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, X2(n, S), h = n.next_out, s = n.output, u = n.avail_out, a = n.next_in, r = n.input, l = n.avail_in, d = t.hold, g = t.bits, t.mode === Rr && (t.back = -1);
          break;
        }
        for (t.back = 0; D = t.lencode[d & (1 << t.lenbits) - 1], _ = D >>> 24, W = D >>> 16 & 255, V = D & 65535, !(_ <= g); ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (W && !(W & 240)) {
          for (q = _, le = W, xe = V; D = t.lencode[xe + ((d & (1 << q + le) - 1) >> q)], _ = D >>> 24, W = D >>> 16 & 255, V = D & 65535, !(q + _ <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          d >>>= q, g -= q, t.back += q;
        }
        if (d >>>= _, g -= _, t.back += _, t.length = V, W === 0) {
          t.mode = Tc;
          break;
        }
        if (W & 32) {
          t.back = -1, t.mode = Rr;
          break;
        }
        if (W & 64) {
          n.msg = "invalid literal/length code", t.mode = Rt;
          break;
        }
        t.extra = W & 15, t.mode = Mc;
      case Mc:
        if (t.extra) {
          for (L = t.extra; g < L; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.length += d & (1 << t.extra) - 1, d >>>= t.extra, g -= t.extra, t.back += t.extra;
        }
        t.was = t.length, t.mode = Rc;
      case Rc:
        for (; D = t.distcode[d & (1 << t.distbits) - 1], _ = D >>> 24, W = D >>> 16 & 255, V = D & 65535, !(_ <= g); ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (!(W & 240)) {
          for (q = _, le = W, xe = V; D = t.distcode[xe + ((d & (1 << q + le) - 1) >> q)], _ = D >>> 24, W = D >>> 16 & 255, V = D & 65535, !(q + _ <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          d >>>= q, g -= q, t.back += q;
        }
        if (d >>>= _, g -= _, t.back += _, W & 64) {
          n.msg = "invalid distance code", t.mode = Rt;
          break;
        }
        t.offset = V, t.extra = W & 15, t.mode = Oc;
      case Oc:
        if (t.extra) {
          for (L = t.extra; g < L; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.offset += d & (1 << t.extra) - 1, d >>>= t.extra, g -= t.extra, t.back += t.extra;
        }
        if (t.offset > t.dmax) {
          n.msg = "invalid distance too far back", t.mode = Rt;
          break;
        }
        t.mode = Dc;
      case Dc:
        if (u === 0) break e;
        if (p = S - u, t.offset > p) {
          if (p = t.offset - p, p > t.whave && t.sane) {
            n.msg = "invalid distance too far back", t.mode = Rt;
            break;
          }
          p > t.wnext ? (p -= t.wnext, I = t.wsize - p) : I = t.wnext - p, p > t.length && (p = t.length), M = t.window;
        } else M = s, I = h - t.offset, p = t.length;
        p > u && (p = u), u -= p, t.length -= p;
        do
          s[h++] = M[I++];
        while (--p);
        t.length === 0 && (t.mode = ks);
        break;
      case Tc:
        if (u === 0) break e;
        s[h++] = t.length, u--, t.mode = ks;
        break;
      case Do:
        if (t.wrap) {
          for (; g < 32; ) {
            if (l === 0) break e;
            l--, d |= r[a++] << g, g += 8;
          }
          if (S -= u, n.total_out += S, t.total += S, t.wrap & 4 && S && (n.adler = t.check = t.flags ? dr(t.check, s, S, h - S) : al(t.check, s, S, h - S)), S = u, t.wrap & 4 && (t.flags ? d : Uc(d)) !== t.check) {
            n.msg = "incorrect data check", t.mode = Rt;
            break;
          }
          d = 0, g = 0;
        }
        t.mode = Bc;
      case Bc:
        if (t.wrap && t.flags) {
          for (; g < 32; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          if (t.wrap & 4 && d !== (t.total & 4294967295)) {
            n.msg = "incorrect length check", t.mode = Rt;
            break;
          }
          d = 0, g = 0;
        }
        t.mode = qc;
      case qc:
        ee = a5;
        break e;
      case Rt:
        ee = Rf;
        break e;
      case Df:
        return Of;
      case Tf:
      default:
        return Vn;
    }
    return n.next_out = h, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, (t.wsize || S !== n.avail_out && t.mode < Rt && (t.mode < Do || e !== vc)) && Hf(n, n.output, n.next_out, S - n.avail_out), w -= n.avail_in, S -= n.avail_out, n.total_in += w, n.total_out += S, t.total += S, t.wrap & 4 && S && (n.adler = t.check = t.flags ? dr(t.check, s, S, n.next_out - S) : al(t.check, s, S, n.next_out - S)), n.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Rr ? 128 : 0) + (t.mode === Ss || t.mode === Oo ? 256 : 0), (w === 0 && S === 0 || e === vc) && ee === ki && (ee = o5), ee;
  }, g5 = (n) => {
    if (Ii(n)) return Vn;
    let e = n.state;
    return e.window && (e.window = null), n.state = null, ki;
  }, b5 = (n, e) => {
    if (Ii(n)) return Vn;
    const t = n.state;
    return t.wrap & 2 ? (t.head = e, e.done = false, ki) : Vn;
  }, v5 = (n, e) => {
    const t = e.length;
    let r, s, a;
    return Ii(n) || (r = n.state, r.wrap !== 0 && r.mode !== zs) ? Vn : r.mode === zs && (s = 1, s = al(s, e, t, 0), s !== r.check) ? Rf : (a = Hf(n, e, t, t), a ? (r.mode = Df, Of) : (r.havedict = 1, ki));
  };
  var w5 = qf, y5 = Uf, x5 = Bf, N5 = d5, _5 = zf, A5 = m5, L5 = g5, S5 = b5, k5 = v5, P5 = "pako inflate (from Nodeca project)", Tr = {
    inflateReset: w5,
    inflateReset2: y5,
    inflateResetKeep: x5,
    inflateInit: N5,
    inflateInit2: _5,
    inflate: A5,
    inflateEnd: L5,
    inflateGetHeader: S5,
    inflateSetDictionary: k5,
    inflateInfo: P5
  };
  function C5() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  }
  var I5 = C5;
  const Wf = Object.prototype.toString, { Z_NO_FLUSH: j5, Z_FINISH: E5, Z_OK: Da, Z_STREAM_END: qo, Z_NEED_DICT: Uo, Z_STREAM_ERROR: F5, Z_DATA_ERROR: Hc, Z_MEM_ERROR: M5 } = If;
  function Ua(n) {
    this.options = jf.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ""
    }, n || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(n && n.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Y2(), this.strm.avail_out = 0;
    let t = Tr.inflateInit2(this.strm, e.windowBits);
    if (t !== Da) throw new Error(sl[t]);
    if (this.header = new I5(), Tr.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = ol.string2buf(e.dictionary) : Wf.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = Tr.inflateSetDictionary(this.strm, e.dictionary), t !== Da))) throw new Error(sl[t]);
  }
  Ua.prototype.push = function(n, e) {
    const t = this.strm, r = this.options.chunkSize, s = this.options.dictionary;
    let a, h, l;
    if (this.ended) return false;
    for (e === ~~e ? h = e : h = e === true ? E5 : j5, Wf.call(n) === "[object ArrayBuffer]" ? t.input = new Uint8Array(n) : t.input = n, t.next_in = 0, t.avail_in = t.input.length; ; ) {
      for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), a = Tr.inflate(t, h), a === Uo && s && (a = Tr.inflateSetDictionary(t, s), a === Da ? a = Tr.inflate(t, h) : a === Hc && (a = Uo)); t.avail_in > 0 && a === qo && t.state.wrap > 0 && n[t.next_in] !== 0; ) Tr.inflateReset(t), a = Tr.inflate(t, h);
      switch (a) {
        case F5:
        case Hc:
        case Uo:
        case M5:
          return this.onEnd(a), this.ended = true, false;
      }
      if (l = t.avail_out, t.next_out && (t.avail_out === 0 || a === qo)) if (this.options.to === "string") {
        let u = ol.utf8border(t.output, t.next_out), d = t.next_out - u, g = ol.buf2string(t.output, u);
        t.next_out = d, t.avail_out = r - d, d && t.output.set(t.output.subarray(u, u + d), 0), this.onData(g);
      } else this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
      if (!(a === Da && l === 0)) {
        if (a === qo) return a = Tr.inflateEnd(this.strm), this.onEnd(a), this.ended = true, true;
        if (t.avail_in === 0) break;
      }
    }
    return true;
  };
  Ua.prototype.onData = function(n) {
    this.chunks.push(n);
  };
  Ua.prototype.onEnd = function(n) {
    n === Da && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = jf.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
  };
  function R5(n, e) {
    const t = new Ua(e);
    if (t.push(n), t.err) throw t.msg || sl[t.err];
    return t.result;
  }
  var O5 = Ua, D5 = R5, T5 = {
    Inflate: O5,
    inflate: D5
  };
  const { Inflate: B5, inflate: q5 } = T5;
  var Wc = B5, U5 = q5;
  const Gf = [];
  for (let n = 0; n < 256; n++) {
    let e = n;
    for (let t = 0; t < 8; t++) e & 1 ? e = 3988292384 ^ e >>> 1 : e = e >>> 1;
    Gf[n] = e;
  }
  const Gc = 4294967295;
  function z5(n, e, t) {
    let r = n;
    for (let s = 0; s < t; s++) r = Gf[(r ^ e[s]) & 255] ^ r >>> 8;
    return r;
  }
  function H5(n, e) {
    return (z5(Gc, n, e) ^ Gc) >>> 0;
  }
  function Vc(n, e, t) {
    const r = n.readUint32(), s = H5(new Uint8Array(n.buffer, n.byteOffset + n.offset - e - 4, e), e);
    if (s !== r) throw new Error(`CRC mismatch for chunk ${t}. Expected ${r}, found ${s}`);
  }
  function Vf(n, e, t) {
    for (let r = 0; r < t; r++) e[r] = n[r];
  }
  function $f(n, e, t, r) {
    let s = 0;
    for (; s < r; s++) e[s] = n[s];
    for (; s < t; s++) e[s] = n[s] + e[s - r] & 255;
  }
  function Kf(n, e, t, r) {
    let s = 0;
    if (t.length === 0) for (; s < r; s++) e[s] = n[s];
    else for (; s < r; s++) e[s] = n[s] + t[s] & 255;
  }
  function Yf(n, e, t, r, s) {
    let a = 0;
    if (t.length === 0) {
      for (; a < s; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + (e[a - s] >> 1) & 255;
    } else {
      for (; a < s; a++) e[a] = n[a] + (t[a] >> 1) & 255;
      for (; a < r; a++) e[a] = n[a] + (e[a - s] + t[a] >> 1) & 255;
    }
  }
  function Jf(n, e, t, r, s) {
    let a = 0;
    if (t.length === 0) {
      for (; a < s; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + e[a - s] & 255;
    } else {
      for (; a < s; a++) e[a] = n[a] + t[a] & 255;
      for (; a < r; a++) e[a] = n[a] + W5(e[a - s], t[a], t[a - s]) & 255;
    }
  }
  function W5(n, e, t) {
    const r = n + e - t, s = Math.abs(r - n), a = Math.abs(r - e), h = Math.abs(r - t);
    return s <= a && s <= h ? n : a <= h ? e : t;
  }
  function G5(n, e, t, r, s, a) {
    switch (n) {
      case 0:
        Vf(e, t, s);
        break;
      case 1:
        $f(e, t, s, a);
        break;
      case 2:
        Kf(e, t, r, s);
        break;
      case 3:
        Yf(e, t, r, s, a);
        break;
      case 4:
        Jf(e, t, r, s, a);
        break;
      default:
        throw new Error(`Unsupported filter: ${n}`);
    }
  }
  const V5 = new Uint16Array([
    255
  ]), $5 = new Uint8Array(V5.buffer), K5 = $5[0] === 255;
  function Y5(n) {
    const { data: e, width: t, height: r, channels: s, depth: a } = n, h = [
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
    ], l = Math.ceil(a / 8) * s, u = new Uint8Array(r * t * l);
    let d = 0;
    for (let g = 0; g < 7; g++) {
      const w = h[g], S = Math.ceil((t - w.x) / w.xStep), p = Math.ceil((r - w.y) / w.yStep);
      if (S <= 0 || p <= 0) continue;
      const I = S * l, M = new Uint8Array(I);
      for (let D = 0; D < p; D++) {
        const _ = e[d++], W = e.subarray(d, d + I);
        d += I;
        const V = new Uint8Array(I);
        G5(_, W, V, M, I, l), M.set(V);
        for (let q = 0; q < S; q++) {
          const le = w.x + q * w.xStep, xe = w.y + D * w.yStep;
          if (!(le >= t || xe >= r)) for (let ge = 0; ge < l; ge++) u[(xe * t + le) * l + ge] = V[q * l + ge];
        }
      }
    }
    if (a === 16) {
      const g = new Uint16Array(u.buffer);
      if (K5) for (let w = 0; w < g.length; w++) g[w] = J5(g[w]);
      return g;
    } else return u;
  }
  function J5(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const X5 = new Uint16Array([
    255
  ]), Z5 = new Uint8Array(X5.buffer), Q5 = Z5[0] === 255, e0 = new Uint8Array(0);
  function $c(n) {
    const { data: e, width: t, height: r, channels: s, depth: a } = n, h = Math.ceil(a / 8) * s, l = Math.ceil(a / 8 * s * t), u = new Uint8Array(r * l);
    let d = e0, g = 0, w, S;
    for (let p = 0; p < r; p++) {
      switch (w = e.subarray(g + 1, g + 1 + l), S = u.subarray(p * l, (p + 1) * l), e[g]) {
        case 0:
          Vf(w, S, l);
          break;
        case 1:
          $f(w, S, l, h);
          break;
        case 2:
          Kf(w, S, d, l);
          break;
        case 3:
          Yf(w, S, d, l, h);
          break;
        case 4:
          Jf(w, S, d, l, h);
          break;
        default:
          throw new Error(`Unsupported filter: ${e[g]}`);
      }
      d = S, g += l + 1;
    }
    if (a === 16) {
      const p = new Uint16Array(u.buffer);
      if (Q5) for (let I = 0; I < p.length; I++) p[I] = t0(p[I]);
      return p;
    } else return u;
  }
  function t0(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const Ms = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
  function Kc(n) {
    if (!n0(n.readBytes(Ms.length))) throw new Error("wrong PNG signature");
  }
  function n0(n) {
    if (n.length < Ms.length) return false;
    for (let e = 0; e < Ms.length; e++) if (n[e] !== Ms[e]) return false;
    return true;
  }
  const r0 = "tEXt", i0 = 0, Xf = new TextDecoder("latin1");
  function a0(n) {
    if (o0(n), n.length === 0 || n.length > 79) throw new Error("keyword length must be between 1 and 79");
  }
  const s0 = /^[\u0000-\u00FF]*$/;
  function o0(n) {
    if (!s0.test(n)) throw new Error("invalid latin1 text");
  }
  function l0(n, e, t) {
    const r = Zf(e);
    n[r] = c0(e, t - r.length - 1);
  }
  function Zf(n) {
    for (n.mark(); n.readByte() !== i0; ) ;
    const e = n.offset;
    n.reset();
    const t = Xf.decode(n.readBytes(e - n.offset - 1));
    return n.skip(1), a0(t), t;
  }
  function c0(n, e) {
    return Xf.decode(n.readBytes(e));
  }
  const Rn = {
    UNKNOWN: -1,
    GREYSCALE: 0,
    TRUECOLOUR: 2,
    INDEXED_COLOUR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOUR_ALPHA: 6
  }, zo = {
    UNKNOWN: -1,
    DEFLATE: 0
  }, Yc = {
    UNKNOWN: -1,
    ADAPTIVE: 0
  }, Ho = {
    UNKNOWN: -1,
    NO_INTERLACE: 0,
    ADAM7: 1
  }, Ps = {
    NONE: 0,
    BACKGROUND: 1,
    PREVIOUS: 2
  }, Wo = {
    SOURCE: 0,
    OVER: 1
  };
  class u0 extends Nl {
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
      this._checkCrc = r, this._inflator = new Wc(), this._png = {
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
      }, this._end = false, this._hasPalette = false, this._palette = [], this._hasTransparency = false, this._transparency = new Uint16Array(0), this._compressionMethod = zo.UNKNOWN, this._filterMethod = Yc.UNKNOWN, this._interlaceMethod = Ho.UNKNOWN, this._colorType = Rn.UNKNOWN, this._isAnimated = false, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = false, this.setBigEndian();
    }
    decode() {
      for (Kc(this); !this._end; ) {
        const e = this.readUint32(), t = this.readChars(4);
        this.decodeChunk(e, t);
      }
      return this.decodeImage(), this._png;
    }
    decodeApng() {
      for (Kc(this); !this._end; ) {
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
        case r0:
          l0(this._png.text, this, e);
          break;
        case "pHYs":
          this.decodepHYs();
          break;
        default:
          this.skip(e);
          break;
      }
      if (this.offset - r !== e) throw new Error(`Length mismatch while decoding chunk ${t}`);
      this._checkCrc ? Vc(this, e + 4, t) : this.skip(4);
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
      this._checkCrc ? Vc(this, e + 4, t) : this.skip(4);
    }
    decodeIHDR() {
      const e = this._png;
      e.width = this.readUint32(), e.height = this.readUint32(), e.depth = f0(this.readUint8());
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
      if (this._png.channels = r, this._compressionMethod = this.readUint8(), this._compressionMethod !== zo.DEFLATE) throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
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
      for (let s = 0; s < t; s++) r.push([
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
      const t = Zf(this), r = this.readUint8();
      if (r !== zo.DEFLATE) throw new Error(`Unsupported iCCP compression method: ${r}`);
      const s = this.readBytes(e - t.length - 2);
      this._png.iccEmbeddedProfile = {
        name: t,
        profile: U5(s)
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
          if (r.data = $c({
            data: r.data,
            width: r.width,
            height: r.height,
            channels: this._apng.channels,
            depth: this._apng.depth
          }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), e === 0 || r.xOffset === 0 && r.yOffset === 0 && r.width === this._png.width && r.height === this._png.height) t.data = r.data;
          else {
            const s = this._apng.frames.at(e - 1);
            this.disposeFrame(r, s, t), this.addFrameDataToCanvas(t, r);
          }
          this._apng.frames.push(t);
        }
      }
      return this._apng;
    }
    disposeFrame(e, t, r) {
      switch (e.disposeOp) {
        case Ps.NONE:
          break;
        case Ps.BACKGROUND:
          for (let s = 0; s < this._png.height; s++) for (let a = 0; a < this._png.width; a++) {
            const h = (s * e.width + a) * this._png.channels;
            for (let l = 0; l < this._png.channels; l++) r.data[h + l] = 0;
          }
          break;
        case Ps.PREVIOUS:
          r.data.set(t.data);
          break;
        default:
          throw new Error("Unknown disposeOp");
      }
    }
    addFrameDataToCanvas(e, t) {
      const r = 1 << this._png.depth, s = (a, h) => {
        const l = ((a + t.yOffset) * this._png.width + t.xOffset + h) * this._png.channels, u = (a * t.width + h) * this._png.channels;
        return {
          index: l,
          frameIndex: u
        };
      };
      switch (t.blendOp) {
        case Wo.SOURCE:
          for (let a = 0; a < t.height; a++) for (let h = 0; h < t.width; h++) {
            const { index: l, frameIndex: u } = s(a, h);
            for (let d = 0; d < this._png.channels; d++) e.data[l + d] = t.data[u + d];
          }
          break;
        case Wo.OVER:
          for (let a = 0; a < t.height; a++) for (let h = 0; h < t.width; h++) {
            const { index: l, frameIndex: u } = s(a, h);
            for (let d = 0; d < this._png.channels; d++) {
              const g = t.data[u + this._png.channels - 1] / r, w = d % (this._png.channels - 1) === 0 ? 1 : t.data[u + d], S = Math.floor(g * w + (1 - g) * e.data[l + d]);
              e.data[l + d] += S;
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
      if (this._filterMethod !== Yc.ADAPTIVE) throw new Error(`Filter method ${this._filterMethod} not supported`);
      if (this._interlaceMethod === Ho.NO_INTERLACE) this._png.data = $c({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
      else if (this._interlaceMethod === Ho.ADAM7) this._png.data = Y5({
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
        disposeOp: Ps.NONE,
        blendOp: Wo.SOURCE,
        data: e
      }), this._inflator = new Wc(), this._writingDataChunks = false;
    }
  }
  function f0(n) {
    if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16) throw new Error(`invalid bit depth: ${n}`);
    return n;
  }
  var Jc;
  (function(n) {
    n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
  })(Jc || (Jc = {}));
  function h0(n, e) {
    return new u0(n, e).decode();
  }
  var Je = /* @__PURE__ */ function() {
    return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
  }();
  function Go() {
    Je.console && typeof Je.console.log == "function" && Je.console.log.apply(Je.console, arguments);
  }
  var Pt = {
    log: Go,
    warn: function(n) {
      Je.console && (typeof Je.console.warn == "function" ? Je.console.warn.apply(Je.console, arguments) : Go.call(null, arguments));
    },
    error: function(n) {
      Je.console && (typeof Je.console.error == "function" ? Je.console.error.apply(Je.console, arguments) : Go(n));
    }
  };
  function Vo(n, e, t) {
    var r = new XMLHttpRequest();
    r.open("GET", n), r.responseType = "blob", r.onload = function() {
      Ai(r.response, e, t);
    }, r.onerror = function() {
      Pt.error("could not download file");
    }, r.send();
  }
  function Xc(n) {
    var e = new XMLHttpRequest();
    e.open("HEAD", n, false);
    try {
      e.send();
    } catch {
    }
    return e.status >= 200 && e.status <= 299;
  }
  function Cs(n) {
    try {
      n.dispatchEvent(new MouseEvent("click"));
    } catch {
      var e = document.createEvent("MouseEvents");
      e.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), n.dispatchEvent(e);
    }
  }
  var Ai = Je.saveAs || ((typeof window > "u" ? "undefined" : Lt(window)) !== "object" || window !== Je ? function() {
  } : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, e, t) {
    var r = Je.URL || Je.webkitURL, s = document.createElement("a");
    e = e || n.name || "download", s.download = e, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? Xc(s.href) ? Vo(n, e, t) : Cs(s, s.target = "_blank") : Cs(s)) : (s.href = r.createObjectURL(n), setTimeout(function() {
      r.revokeObjectURL(s.href);
    }, 4e4), setTimeout(function() {
      Cs(s);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function(n, e, t) {
    if (e = e || n.name || "download", typeof n == "string") if (Xc(n)) Vo(n, e, t);
    else {
      var r = document.createElement("a");
      r.href = n, r.target = "_blank", setTimeout(function() {
        Cs(r);
      });
    }
    else navigator.msSaveOrOpenBlob(function(s, a) {
      return a === void 0 ? a = {
        autoBom: false
      } : Lt(a) !== "object" && (Pt.warn("Deprecated: Expected third argument to be a object"), a = {
        autoBom: !a
      }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob([
        "\uFEFF",
        s
      ], {
        type: s.type
      }) : s;
    }(n, t), e);
  } : function(n, e, t, r) {
    if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), typeof n == "string") return Vo(n, e, t);
    var s = n.type === "application/octet-stream", a = /constructor/i.test(Je.HTMLElement) || Je.safari, h = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((h || s && a) && (typeof FileReader > "u" ? "undefined" : Lt(FileReader)) === "object") {
      var l = new FileReader();
      l.onloadend = function() {
        var g = l.result;
        g = h ? g : g.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = g : location = g, r = null;
      }, l.readAsDataURL(n);
    } else {
      var u = Je.URL || Je.webkitURL, d = u.createObjectURL(n);
      r ? r.location = d : location.href = d, r = null, setTimeout(function() {
        u.revokeObjectURL(d);
      }, 4e4);
    }
  });
  function Qf(n) {
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
        process: function(l) {
          return [
            parseInt(l[1]),
            parseInt(l[2]),
            parseInt(l[3])
          ];
        }
      },
      {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: [
          "#00ff00",
          "336699"
        ],
        process: function(l) {
          return [
            parseInt(l[1], 16),
            parseInt(l[2], 16),
            parseInt(l[3], 16)
          ];
        }
      },
      {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: [
          "#fb0",
          "f0f"
        ],
        process: function(l) {
          return [
            parseInt(l[1] + l[1], 16),
            parseInt(l[2] + l[2], 16),
            parseInt(l[3] + l[3], 16)
          ];
        }
      }
    ], r = 0; r < t.length; r++) {
      var s = t[r].re, a = t[r].process, h = s.exec(n);
      h && (e = a(h), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = true);
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toHex = function() {
      var l = this.r.toString(16), u = this.g.toString(16), d = this.b.toString(16);
      return l.length == 1 && (l = "0" + l), u.length == 1 && (u = "0" + u), d.length == 1 && (d = "0" + d), "#" + l + u + d;
    };
  }
  var Rs = Je.atob.bind(Je), Zc = Je.btoa.bind(Je);
  function $o(n, e) {
    var t = n[0], r = n[1], s = n[2], a = n[3];
    t = mn(t, r, s, a, e[0], 7, -680876936), a = mn(a, t, r, s, e[1], 12, -389564586), s = mn(s, a, t, r, e[2], 17, 606105819), r = mn(r, s, a, t, e[3], 22, -1044525330), t = mn(t, r, s, a, e[4], 7, -176418897), a = mn(a, t, r, s, e[5], 12, 1200080426), s = mn(s, a, t, r, e[6], 17, -1473231341), r = mn(r, s, a, t, e[7], 22, -45705983), t = mn(t, r, s, a, e[8], 7, 1770035416), a = mn(a, t, r, s, e[9], 12, -1958414417), s = mn(s, a, t, r, e[10], 17, -42063), r = mn(r, s, a, t, e[11], 22, -1990404162), t = mn(t, r, s, a, e[12], 7, 1804603682), a = mn(a, t, r, s, e[13], 12, -40341101), s = mn(s, a, t, r, e[14], 17, -1502002290), t = gn(t, r = mn(r, s, a, t, e[15], 22, 1236535329), s, a, e[1], 5, -165796510), a = gn(a, t, r, s, e[6], 9, -1069501632), s = gn(s, a, t, r, e[11], 14, 643717713), r = gn(r, s, a, t, e[0], 20, -373897302), t = gn(t, r, s, a, e[5], 5, -701558691), a = gn(a, t, r, s, e[10], 9, 38016083), s = gn(s, a, t, r, e[15], 14, -660478335), r = gn(r, s, a, t, e[4], 20, -405537848), t = gn(t, r, s, a, e[9], 5, 568446438), a = gn(a, t, r, s, e[14], 9, -1019803690), s = gn(s, a, t, r, e[3], 14, -187363961), r = gn(r, s, a, t, e[8], 20, 1163531501), t = gn(t, r, s, a, e[13], 5, -1444681467), a = gn(a, t, r, s, e[2], 9, -51403784), s = gn(s, a, t, r, e[7], 14, 1735328473), t = bn(t, r = gn(r, s, a, t, e[12], 20, -1926607734), s, a, e[5], 4, -378558), a = bn(a, t, r, s, e[8], 11, -2022574463), s = bn(s, a, t, r, e[11], 16, 1839030562), r = bn(r, s, a, t, e[14], 23, -35309556), t = bn(t, r, s, a, e[1], 4, -1530992060), a = bn(a, t, r, s, e[4], 11, 1272893353), s = bn(s, a, t, r, e[7], 16, -155497632), r = bn(r, s, a, t, e[10], 23, -1094730640), t = bn(t, r, s, a, e[13], 4, 681279174), a = bn(a, t, r, s, e[0], 11, -358537222), s = bn(s, a, t, r, e[3], 16, -722521979), r = bn(r, s, a, t, e[6], 23, 76029189), t = bn(t, r, s, a, e[9], 4, -640364487), a = bn(a, t, r, s, e[12], 11, -421815835), s = bn(s, a, t, r, e[15], 16, 530742520), t = vn(t, r = bn(r, s, a, t, e[2], 23, -995338651), s, a, e[0], 6, -198630844), a = vn(a, t, r, s, e[7], 10, 1126891415), s = vn(s, a, t, r, e[14], 15, -1416354905), r = vn(r, s, a, t, e[5], 21, -57434055), t = vn(t, r, s, a, e[12], 6, 1700485571), a = vn(a, t, r, s, e[3], 10, -1894986606), s = vn(s, a, t, r, e[10], 15, -1051523), r = vn(r, s, a, t, e[1], 21, -2054922799), t = vn(t, r, s, a, e[8], 6, 1873313359), a = vn(a, t, r, s, e[15], 10, -30611744), s = vn(s, a, t, r, e[6], 15, -1560198380), r = vn(r, s, a, t, e[13], 21, 1309151649), t = vn(t, r, s, a, e[4], 6, -145523070), a = vn(a, t, r, s, e[11], 10, -1120210379), s = vn(s, a, t, r, e[2], 15, 718787259), r = vn(r, s, a, t, e[9], 21, -343485551), n[0] = ni(t, n[0]), n[1] = ni(r, n[1]), n[2] = ni(s, n[2]), n[3] = ni(a, n[3]);
  }
  function Xs(n, e, t, r, s, a) {
    return e = ni(ni(e, n), ni(r, a)), ni(e << s | e >>> 32 - s, t);
  }
  function mn(n, e, t, r, s, a, h) {
    return Xs(e & t | ~e & r, n, e, s, a, h);
  }
  function gn(n, e, t, r, s, a, h) {
    return Xs(e & r | t & ~r, n, e, s, a, h);
  }
  function bn(n, e, t, r, s, a, h) {
    return Xs(e ^ t ^ r, n, e, s, a, h);
  }
  function vn(n, e, t, r, s, a, h) {
    return Xs(t ^ (e | ~r), n, e, s, a, h);
  }
  function eh(n) {
    var e, t = n.length, r = [
      1732584193,
      -271733879,
      -1732584194,
      271733878
    ];
    for (e = 64; e <= n.length; e += 64) $o(r, d0(n.substring(e - 64, e)));
    n = n.substring(e - 64);
    var s = [
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
    for (e = 0; e < n.length; e++) s[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
    if (s[e >> 2] |= 128 << (e % 4 << 3), e > 55) for ($o(r, s), e = 0; e < 16; e++) s[e] = 0;
    return s[14] = 8 * t, $o(r, s), r;
  }
  function d0(n) {
    var e, t = [];
    for (e = 0; e < 64; e += 4) t[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
    return t;
  }
  var Qc = "0123456789abcdef".split("");
  function p0(n) {
    for (var e = "", t = 0; t < 4; t++) e += Qc[n >> 8 * t + 4 & 15] + Qc[n >> 8 * t & 15];
    return e;
  }
  function m0(n) {
    return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
  }
  function ll(n) {
    return eh(n).map(m0).join("");
  }
  var g0 = function(n) {
    for (var e = 0; e < n.length; e++) n[e] = p0(n[e]);
    return n.join("");
  }(eh("hello")) != "5d41402abc4b2a76b9719d911017c592";
  function ni(n, e) {
    if (g0) {
      var t = (65535 & n) + (65535 & e);
      return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    return n + e & 4294967295;
  }
  function cl(n, e) {
    var t, r, s, a;
    if (n !== t) {
      for (var h = (s = n, a = 1 + (256 / n.length | 0), new Array(a + 1).join(s)), l = [], u = 0; u < 256; u++) l[u] = u;
      var d = 0;
      for (u = 0; u < 256; u++) {
        var g = l[u];
        d = (d + g + h.charCodeAt(u)) % 256, l[u] = l[d], l[d] = g;
      }
      t = n, r = l;
    } else l = r;
    var w = e.length, S = 0, p = 0, I = "";
    for (u = 0; u < w; u++) p = (p + (g = l[S = (S + 1) % 256])) % 256, l[S] = l[p], l[p] = g, h = l[(l[S] + l[p]) % 256], I += String.fromCharCode(e.charCodeAt(u) ^ h);
    return I;
  }
  var eu = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
  };
  function Yi(n, e, t, r) {
    this.v = 1, this.r = 2;
    var s = 192;
    n.forEach(function(l) {
      if (eu.perm !== void 0) throw new Error("Invalid permission: " + l);
      s += eu[l];
    }), this.padding = "(\xBFN^Nu\x8AAd\0NV\xFF\xFA\b..\0\xB6\xD0h>\x80/\f\xA9\xFEdSiz";
    var a = (e + this.padding).substr(0, 32), h = (t + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(a, h), this.P = -(1 + (255 ^ s)), this.encryptionKey = ll(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = cl(this.encryptionKey, this.padding);
  }
  function Ji(n) {
    if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
    for (var e = "", t = n.length, r = 0; r < t; r++) {
      var s = n.charCodeAt(r);
      e += s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? "#" + ("0" + s.toString(16)).slice(-2) : n[r];
    }
    return e;
  }
  function tu(n) {
    if (Lt(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
    var e = {};
    this.subscribe = function(t, r, s) {
      if (s = s || false, typeof t != "string" || typeof r != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
      e.hasOwnProperty(t) || (e[t] = {});
      var a = Math.random().toString(35);
      return e[t][a] = [
        r,
        !!s
      ], a;
    }, this.unsubscribe = function(t) {
      for (var r in e) if (e[r][t]) return delete e[r][t], Object.keys(e[r]).length === 0 && delete e[r], true;
      return false;
    }, this.publish = function(t) {
      if (e.hasOwnProperty(t)) {
        var r = Array.prototype.slice.call(arguments, 1), s = [];
        for (var a in e[t]) {
          var h = e[t][a];
          try {
            h[0].apply(n, r);
          } catch (l) {
            Je.console && Pt.error("jsPDF PubSub Error", l.message, l);
          }
          h[1] && s.push(a);
        }
        s.length && s.forEach(this.unsubscribe);
      }
    }, this.getTopics = function() {
      return e;
    };
  }
  function Hs(n) {
    if (!(this instanceof Hs)) return new Hs(n);
    var e = "opacity,stroke-opacity".split(",");
    for (var t in n) n.hasOwnProperty(t) && e.indexOf(t) >= 0 && (this[t] = n[t]);
    this.id = "", this.objectNumber = -1;
  }
  function th(n, e) {
    this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1;
  }
  function Li(n, e, t, r, s) {
    if (!(this instanceof Li)) return new Li(n, e, t, r, s);
    this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = t, th.call(this, r, s);
  }
  function Xi(n, e, t, r, s) {
    if (!(this instanceof Xi)) return new Xi(n, e, t, r, s);
    this.boundingBox = n, this.xStep = e, this.yStep = t, this.stream = "", this.cloneIndex = 0, th.call(this, r, s);
  }
  function Be(n) {
    var e, t = typeof arguments[0] == "string" ? arguments[0] : "p", r = arguments[1], s = arguments[2], a = arguments[3], h = [], l = 1, u = 16, d = "S", g = null;
    Lt(n = n || {}) === "object" && (t = n.orientation, r = n.unit || r, s = n.format || s, a = n.compress || n.compressPdf || a, (g = n.encryption || null) !== null && (g.userPassword = g.userPassword || "", g.ownerPassword = g.ownerPassword || "", g.userPermissions = g.userPermissions || []), l = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (u = n.floatPrecision), d = n.defaultPathOperation || "S"), h = n.filters || (a === true ? [
      "FlateEncode"
    ] : h), r = r || "mm", t = ("" + (t || "P")).toLowerCase();
    var w = n.putOnlyUsedFonts || false, S = {}, p = {
      internal: {},
      __private__: {}
    };
    p.__private__.PubSub = tu;
    var I = "1.3", M = p.__private__.getPdfVersion = function() {
      return I;
    };
    p.__private__.setPdfVersion = function(c) {
      I = c;
    };
    var D = {
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
      return D;
    };
    var _ = p.__private__.getPageFormat = function(c) {
      return D[c];
    };
    s = s || "a4";
    var W = "compat", V = "advanced", q = W;
    function le() {
      this.saveGraphicsState(), P(new Ke(rt, 0, 0, -rt, 0, pi() * rt).toString() + " cm"), this.setFontSize(this.getFontSize() / rt), d = "n", q = V;
    }
    function xe() {
      this.restoreGraphicsState(), d = "S", q = W;
    }
    var ge = p.__private__.combineFontStyleAndFontWeight = function(c, b) {
      if (c == "bold" && b == "normal" || c == "bold" && b == 400 || c == "normal" && b == "italic" || c == "bold" && b == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
      return b && (c = b == 400 || b === "normal" ? c === "italic" ? "italic" : "normal" : b != 700 && b !== "bold" || c !== "normal" ? (b == 700 ? "bold" : b) + "" + c : "bold"), c;
    };
    p.advancedAPI = function(c) {
      var b = q === W;
      return b && le.call(this), typeof c != "function" || (c(this), b && xe.call(this)), this;
    }, p.compatAPI = function(c) {
      var b = q === V;
      return b && xe.call(this), typeof c != "function" || (c(this), b && le.call(this)), this;
    }, p.isAdvancedAPI = function() {
      return q === V;
    };
    var ee, H = function(c) {
      if (q !== V) throw new Error(c + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
    }, ie = p.roundToPrecision = p.__private__.roundToPrecision = function(c, b) {
      var F = e || b;
      if (isNaN(c) || isNaN(F)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
      return c.toFixed(F).replace(/0+$/, "");
    };
    ee = p.hpf = p.__private__.hpf = typeof u == "number" ? function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return ie(c, u);
    } : u === "smart" ? function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return ie(c, c > -1 && c < 1 ? 16 : 5);
    } : function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return ie(c, 16);
    };
    var L = p.f2 = p.__private__.f2 = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f2");
      return ie(c, 2);
    }, O = p.__private__.f3 = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f3");
      return ie(c, 3);
    }, R = p.scale = p.__private__.scale = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.scale");
      return q === W ? c * rt : q === V ? c : void 0;
    }, B = function(c) {
      return R(function(b) {
        return q === W ? pi() - b : q === V ? b : void 0;
      }(c));
    };
    p.__private__.setPrecision = p.setPrecision = function(c) {
      typeof parseInt(c, 10) == "number" && (e = parseInt(c, 10));
    };
    var te, se = "00000000000000000000000000000000", oe = p.__private__.getFileId = function() {
      return se;
    }, Y = p.__private__.setFileId = function(c) {
      return se = c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c) ? c.toUpperCase() : se.split("").map(function() {
        return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
      }).join(""), g !== null && (Zt = new Yi(g.userPermissions, g.userPassword, g.ownerPassword, se)), se;
    };
    p.setFileId = function(c) {
      return Y(c), this;
    }, p.getFileId = function() {
      return oe();
    };
    var X = p.__private__.convertDateToPDFDate = function(c) {
      var b = c.getTimezoneOffset(), F = b < 0 ? "+" : "-", z = Math.floor(Math.abs(b / 60)), Z = Math.abs(b % 60), pe = [
        F,
        U(z),
        "'",
        U(Z),
        "'"
      ].join("");
      return [
        "D:",
        c.getFullYear(),
        U(c.getMonth() + 1),
        U(c.getDate()),
        U(c.getHours()),
        U(c.getMinutes()),
        U(c.getSeconds()),
        pe
      ].join("");
    }, _e = p.__private__.convertPDFDateToDate = function(c) {
      var b = parseInt(c.substr(2, 4), 10), F = parseInt(c.substr(6, 2), 10) - 1, z = parseInt(c.substr(8, 2), 10), Z = parseInt(c.substr(10, 2), 10), pe = parseInt(c.substr(12, 2), 10), we = parseInt(c.substr(14, 2), 10);
      return new Date(b, F, z, Z, pe, we, 0);
    }, de = p.__private__.setCreationDate = function(c) {
      var b;
      if (c === void 0 && (c = /* @__PURE__ */ new Date()), c instanceof Date) b = X(c);
      else {
        if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(c)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
        b = c;
      }
      return te = b;
    }, x = p.__private__.getCreationDate = function(c) {
      var b = te;
      return c === "jsDate" && (b = _e(te)), b;
    };
    p.setCreationDate = function(c) {
      return de(c), this;
    }, p.getCreationDate = function(c) {
      return x(c);
    };
    var T, U = p.__private__.padd2 = function(c) {
      return ("0" + parseInt(c)).slice(-2);
    }, $ = p.__private__.padd2Hex = function(c) {
      return ("00" + (c = c.toString())).substr(c.length);
    }, K = 0, Q = [], ce = [], ue = 0, ve = [], Le = [], Pe = false, Ce = ce;
    p.__private__.setCustomOutputDestination = function(c) {
      Pe = true, Ce = c;
    };
    var We = function(c) {
      Pe || (Ce = c);
    };
    p.__private__.resetCustomOutputDestination = function() {
      Pe = false, Ce = ce;
    };
    var P = p.__private__.out = function(c) {
      return c = c.toString(), ue += c.length + 1, Ce.push(c), Ce;
    }, ke = p.__private__.write = function(c) {
      return P(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, " "));
    }, ot = p.__private__.getArrayBuffer = function(c) {
      for (var b = c.length, F = new ArrayBuffer(b), z = new Uint8Array(F); b--; ) z[b] = c.charCodeAt(b);
      return F;
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
    p.__private__.setFontSize = p.setFontSize = function(c) {
      return Ne = q === V ? c / rt : c, this;
    };
    var Ve, je = p.__private__.getFontSize = p.getFontSize = function() {
      return q === W ? Ne : Ne * rt;
    }, He = n.R2L || false;
    p.__private__.setR2L = p.setR2L = function(c) {
      return He = c, this;
    }, p.__private__.getR2L = p.getR2L = function() {
      return He;
    };
    var Ue, yt = p.__private__.setZoomMode = function(c) {
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) Ve = c;
      else if (isNaN(c)) {
        if ([
          void 0,
          null,
          "fullwidth",
          "fullheight",
          "fullpage",
          "original"
        ].indexOf(c) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + c + '" is not recognized.');
        Ve = c;
      } else Ve = parseInt(c, 10);
    };
    p.__private__.getZoomMode = function() {
      return Ve;
    };
    var ft, et = p.__private__.setPageMode = function(c) {
      if ([
        void 0,
        null,
        "UseNone",
        "UseOutlines",
        "UseThumbs",
        "FullScreen"
      ].indexOf(c) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + c + '" is not recognized.');
      Ue = c;
    };
    p.__private__.getPageMode = function() {
      return Ue;
    };
    var dt = p.__private__.setLayoutMode = function(c) {
      if ([
        void 0,
        null,
        "continuous",
        "single",
        "twoleft",
        "tworight",
        "two"
      ].indexOf(c) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + c + '" is not recognized.');
      ft = c;
    };
    p.__private__.getLayoutMode = function() {
      return ft;
    }, p.__private__.setDisplayMode = p.setDisplayMode = function(c, b, F) {
      return yt(c), dt(b), et(F), this;
    };
    var ht = {
      title: "",
      subject: "",
      author: "",
      keywords: "",
      creator: ""
    };
    p.__private__.getDocumentProperty = function(c) {
      if (Object.keys(ht).indexOf(c) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
      return ht[c];
    }, p.__private__.getDocumentProperties = function() {
      return ht;
    }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(c) {
      for (var b in ht) ht.hasOwnProperty(b) && c[b] && (ht[b] = c[b]);
      return this;
    }, p.__private__.setDocumentProperty = function(c, b) {
      if (Object.keys(ht).indexOf(c) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
      return ht[c] = b;
    };
    var Oe, rt, qe, Ut, gt, lt = {}, ct = {}, Ft = [], ze = {}, Ct = {}, Ye = {}, tt = {}, Mt = null, ut = 0, $e = [], xt = new tu(p), si = n.hotfixes || [], dn = {}, br = {}, ir = [], Ke = function c(b, F, z, Z, pe, we) {
      if (!(this instanceof c)) return new c(b, F, z, Z, pe, we);
      isNaN(b) && (b = 1), isNaN(F) && (F = 0), isNaN(z) && (z = 0), isNaN(Z) && (Z = 1), isNaN(pe) && (pe = 0), isNaN(we) && (we = 0), this._matrix = [
        b,
        F,
        z,
        Z,
        pe,
        we
      ];
    };
    Object.defineProperty(Ke.prototype, "sx", {
      get: function() {
        return this._matrix[0];
      },
      set: function(c) {
        this._matrix[0] = c;
      }
    }), Object.defineProperty(Ke.prototype, "shy", {
      get: function() {
        return this._matrix[1];
      },
      set: function(c) {
        this._matrix[1] = c;
      }
    }), Object.defineProperty(Ke.prototype, "shx", {
      get: function() {
        return this._matrix[2];
      },
      set: function(c) {
        this._matrix[2] = c;
      }
    }), Object.defineProperty(Ke.prototype, "sy", {
      get: function() {
        return this._matrix[3];
      },
      set: function(c) {
        this._matrix[3] = c;
      }
    }), Object.defineProperty(Ke.prototype, "tx", {
      get: function() {
        return this._matrix[4];
      },
      set: function(c) {
        this._matrix[4] = c;
      }
    }), Object.defineProperty(Ke.prototype, "ty", {
      get: function() {
        return this._matrix[5];
      },
      set: function(c) {
        this._matrix[5] = c;
      }
    }), Object.defineProperty(Ke.prototype, "a", {
      get: function() {
        return this._matrix[0];
      },
      set: function(c) {
        this._matrix[0] = c;
      }
    }), Object.defineProperty(Ke.prototype, "b", {
      get: function() {
        return this._matrix[1];
      },
      set: function(c) {
        this._matrix[1] = c;
      }
    }), Object.defineProperty(Ke.prototype, "c", {
      get: function() {
        return this._matrix[2];
      },
      set: function(c) {
        this._matrix[2] = c;
      }
    }), Object.defineProperty(Ke.prototype, "d", {
      get: function() {
        return this._matrix[3];
      },
      set: function(c) {
        this._matrix[3] = c;
      }
    }), Object.defineProperty(Ke.prototype, "e", {
      get: function() {
        return this._matrix[4];
      },
      set: function(c) {
        this._matrix[4] = c;
      }
    }), Object.defineProperty(Ke.prototype, "f", {
      get: function() {
        return this._matrix[5];
      },
      set: function(c) {
        this._matrix[5] = c;
      }
    }), Object.defineProperty(Ke.prototype, "rotation", {
      get: function() {
        return Math.atan2(this.shx, this.sx);
      }
    }), Object.defineProperty(Ke.prototype, "scaleX", {
      get: function() {
        return this.decompose().scale.sx;
      }
    }), Object.defineProperty(Ke.prototype, "scaleY", {
      get: function() {
        return this.decompose().scale.sy;
      }
    }), Object.defineProperty(Ke.prototype, "isIdentity", {
      get: function() {
        return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
      }
    }), Ke.prototype.join = function(c) {
      return [
        this.sx,
        this.shy,
        this.shx,
        this.sy,
        this.tx,
        this.ty
      ].map(ee).join(c);
    }, Ke.prototype.multiply = function(c) {
      var b = c.sx * this.sx + c.shy * this.shx, F = c.sx * this.shy + c.shy * this.sy, z = c.shx * this.sx + c.sy * this.shx, Z = c.shx * this.shy + c.sy * this.sy, pe = c.tx * this.sx + c.ty * this.shx + this.tx, we = c.tx * this.shy + c.ty * this.sy + this.ty;
      return new Ke(b, F, z, Z, pe, we);
    }, Ke.prototype.decompose = function() {
      var c = this.sx, b = this.shy, F = this.shx, z = this.sy, Z = this.tx, pe = this.ty, we = Math.sqrt(c * c + b * b), Fe = (c /= we) * F + (b /= we) * z;
      F -= c * Fe, z -= b * Fe;
      var De = Math.sqrt(F * F + z * z);
      return Fe /= De, c * (z /= De) < b * (F /= De) && (c = -c, b = -b, Fe = -Fe, we = -we), {
        scale: new Ke(we, 0, 0, De, 0, 0),
        translate: new Ke(1, 0, 0, 1, Z, pe),
        rotate: new Ke(c, b, -b, c, 0, 0),
        skew: new Ke(1, 0, Fe, 1, 0, 0)
      };
    }, Ke.prototype.toString = function(c) {
      return this.join(" ");
    }, Ke.prototype.inversed = function() {
      var c = this.sx, b = this.shy, F = this.shx, z = this.sy, Z = this.tx, pe = this.ty, we = 1 / (c * z - b * F), Fe = z * we, De = -b * we, Xe = -F * we, it = c * we;
      return new Ke(Fe, De, Xe, it, -Fe * Z - Xe * pe, -De * Z - it * pe);
    }, Ke.prototype.applyToPoint = function(c) {
      var b = c.x * this.sx + c.y * this.shx + this.tx, F = c.x * this.shy + c.y * this.sy + this.ty;
      return new Ar(b, F);
    }, Ke.prototype.applyToRectangle = function(c) {
      var b = this.applyToPoint(c), F = this.applyToPoint(new Ar(c.x + c.w, c.y + c.h));
      return new ha(b.x, b.y, F.x - b.x, F.y - b.y);
    }, Ke.prototype.clone = function() {
      var c = this.sx, b = this.shy, F = this.shx, z = this.sy, Z = this.tx, pe = this.ty;
      return new Ke(c, b, F, z, Z, pe);
    }, p.Matrix = Ke;
    var vr = p.matrixMult = function(c, b) {
      return b.multiply(c);
    }, wr = new Ke(1, 0, 0, 1, 0, 0);
    p.unitMatrix = p.identityMatrix = wr;
    var On = function(c, b) {
      if (!Ct[c]) {
        var F = (b instanceof Li ? "Sh" : "P") + (Object.keys(ze).length + 1).toString(10);
        b.id = F, Ct[c] = F, ze[F] = b, xt.publish("addPattern", b);
      }
    };
    p.ShadingPattern = Li, p.TilingPattern = Xi, p.addShadingPattern = function(c, b) {
      return H("addShadingPattern()"), On(c, b), this;
    }, p.beginTilingPattern = function(c) {
      H("beginTilingPattern()"), da(c.boundingBox[0], c.boundingBox[1], c.boundingBox[2] - c.boundingBox[0], c.boundingBox[3] - c.boundingBox[1], c.matrix);
    }, p.endTilingPattern = function(c, b) {
      H("endTilingPattern()"), b.stream = Le[T].join(`
`), On(c, b), xt.publish("endTilingPattern", b), ir.pop().restore();
    };
    var Dn, Dt = p.__private__.newObject = function() {
      var c = an();
      return on(c, true), c;
    }, an = p.__private__.newObjectDeferred = function() {
      return K++, Q[K] = function() {
        return ue;
      }, K;
    }, on = function(c, b) {
      return b = typeof b == "boolean" && b, Q[c] = ue, b && P(c + " 0 obj"), c;
    }, oi = p.__private__.newAdditionalObject = function() {
      var c = {
        objId: an(),
        content: ""
      };
      return ve.push(c), c;
    }, Br = an(), $n = an(), ar = p.__private__.decodeColorString = function(c) {
      var b = c.split(" ");
      if (b.length !== 2 || b[1] !== "g" && b[1] !== "G") b.length !== 5 || b[4] !== "k" && b[4] !== "K" || (b = [
        (1 - b[0]) * (1 - b[3]),
        (1 - b[1]) * (1 - b[3]),
        (1 - b[2]) * (1 - b[3]),
        "r"
      ]);
      else {
        var F = parseFloat(b[0]);
        b = [
          F,
          F,
          F,
          "r"
        ];
      }
      for (var z = "#", Z = 0; Z < 3; Z++) z += ("0" + Math.floor(255 * parseFloat(b[Z])).toString(16)).slice(-2);
      return z;
    }, Kn = p.__private__.encodeColorString = function(c) {
      var b;
      typeof c == "string" && (c = {
        ch1: c
      });
      var F = c.ch1, z = c.ch2, Z = c.ch3, pe = c.ch4, we = c.pdfColorType === "draw" ? [
        "G",
        "RG",
        "K"
      ] : [
        "g",
        "rg",
        "k"
      ];
      if (typeof F == "string" && F.charAt(0) !== "#") {
        var Fe = new Qf(F);
        if (Fe.ok) F = Fe.toHex();
        else if (!/^\d*\.?\d*$/.test(F)) throw new Error('Invalid color "' + F + '" passed to jsPDF.encodeColorString.');
      }
      if (typeof F == "string" && /^#[0-9A-Fa-f]{3}$/.test(F) && (F = "#" + F[1] + F[1] + F[2] + F[2] + F[3] + F[3]), typeof F == "string" && /^#[0-9A-Fa-f]{6}$/.test(F)) {
        var De = parseInt(F.substr(1), 16);
        F = De >> 16 & 255, z = De >> 8 & 255, Z = 255 & De;
      }
      if (z === void 0 || pe === void 0 && F === z && z === Z) b = typeof F == "string" ? F + " " + we[0] : c.precision === 2 ? L(F / 255) + " " + we[0] : O(F / 255) + " " + we[0];
      else if (pe === void 0 || Lt(pe) === "object") {
        if (pe && !isNaN(pe.a) && pe.a === 0) return [
          "1.",
          "1.",
          "1.",
          we[1]
        ].join(" ");
        b = typeof F == "string" ? [
          F,
          z,
          Z,
          we[1]
        ].join(" ") : c.precision === 2 ? [
          L(F / 255),
          L(z / 255),
          L(Z / 255),
          we[1]
        ].join(" ") : [
          O(F / 255),
          O(z / 255),
          O(Z / 255),
          we[1]
        ].join(" ");
      } else b = typeof F == "string" ? [
        F,
        z,
        Z,
        pe,
        we[2]
      ].join(" ") : c.precision === 2 ? [
        L(F),
        L(z),
        L(Z),
        L(pe),
        we[2]
      ].join(" ") : [
        O(F),
        O(z),
        O(Z),
        O(pe),
        we[2]
      ].join(" ");
      return b;
    }, Yn = p.__private__.getFilters = function() {
      return h;
    }, Tn = p.__private__.putStream = function(c) {
      var b = (c = c || {}).data || "", F = c.filters || Yn(), z = c.alreadyAppliedFilters || [], Z = c.addLength1 || false, pe = b.length, we = c.objectId, Fe = function(Qt) {
        return Qt;
      };
      if (g !== null && we === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
      g !== null && (Fe = Zt.encryptor(we, 0));
      var De = {};
      F === true && (F = [
        "FlateEncode"
      ]);
      var Xe = c.additionalKeyValues || [], it = (De = Be.API.processDataByFilters !== void 0 ? Be.API.processDataByFilters(b, F) : {
        data: b,
        reverseChain: []
      }).reverseChain + (Array.isArray(z) ? z.join(" ") : z.toString());
      if (De.data.length !== 0 && (Xe.push({
        key: "Length",
        value: De.data.length
      }), Z === true && Xe.push({
        key: "Length1",
        value: pe
      })), it.length != 0) if (it.split("/").length - 1 == 1) Xe.push({
        key: "Filter",
        value: it
      });
      else {
        Xe.push({
          key: "Filter",
          value: "[" + it + "]"
        });
        for (var bt = 0; bt < Xe.length; bt += 1) if (Xe[bt].key === "DecodeParms") {
          for (var Ot = [], Jt = 0; Jt < De.reverseChain.split("/").length - 1; Jt += 1) Ot.push("null");
          Ot.push(Xe[bt].value), Xe[bt].value = "[" + Ot.join(" ") + "]";
        }
      }
      P("<<");
      for (var It = 0; It < Xe.length; It++) P("/" + Xe[It].key + " " + Xe[It].value);
      P(">>"), De.data.length !== 0 && (P("stream"), P(Fe(De.data)), P("endstream"));
    }, li = p.__private__.putPage = function(c) {
      var b = c.number, F = c.data, z = c.objId, Z = c.contentsObjId;
      on(z, true), P("<</Type /Page"), P("/Parent " + c.rootDictionaryObjId + " 0 R"), P("/Resources " + c.resourceDictionaryObjId + " 0 R"), P("/MediaBox [" + parseFloat(ee(c.mediaBox.bottomLeftX)) + " " + parseFloat(ee(c.mediaBox.bottomLeftY)) + " " + ee(c.mediaBox.topRightX) + " " + ee(c.mediaBox.topRightY) + "]"), c.cropBox !== null && P("/CropBox [" + ee(c.cropBox.bottomLeftX) + " " + ee(c.cropBox.bottomLeftY) + " " + ee(c.cropBox.topRightX) + " " + ee(c.cropBox.topRightY) + "]"), c.bleedBox !== null && P("/BleedBox [" + ee(c.bleedBox.bottomLeftX) + " " + ee(c.bleedBox.bottomLeftY) + " " + ee(c.bleedBox.topRightX) + " " + ee(c.bleedBox.topRightY) + "]"), c.trimBox !== null && P("/TrimBox [" + ee(c.trimBox.bottomLeftX) + " " + ee(c.trimBox.bottomLeftY) + " " + ee(c.trimBox.topRightX) + " " + ee(c.trimBox.topRightY) + "]"), c.artBox !== null && P("/ArtBox [" + ee(c.artBox.bottomLeftX) + " " + ee(c.artBox.bottomLeftY) + " " + ee(c.artBox.topRightX) + " " + ee(c.artBox.topRightY) + "]"), typeof c.userUnit == "number" && c.userUnit !== 1 && P("/UserUnit " + c.userUnit), xt.publish("putPage", {
        objId: z,
        pageContext: $e[b],
        pageNumber: b,
        page: F
      }), P("/Contents " + Z + " 0 R"), P(">>"), P("endobj");
      var pe = F.join(`
`);
      return q === V && (pe += `
Q`), on(Z, true), Tn({
        data: pe,
        filters: Yn(),
        objectId: Z
      }), P("endobj"), z;
    }, sr = p.__private__.putPages = function() {
      var c, b, F = [];
      for (c = 1; c <= ut; c++) $e[c].objId = an(), $e[c].contentsObjId = an();
      for (c = 1; c <= ut; c++) F.push(li({
        number: c,
        data: Le[c],
        objId: $e[c].objId,
        contentsObjId: $e[c].contentsObjId,
        mediaBox: $e[c].mediaBox,
        cropBox: $e[c].cropBox,
        bleedBox: $e[c].bleedBox,
        trimBox: $e[c].trimBox,
        artBox: $e[c].artBox,
        userUnit: $e[c].userUnit,
        rootDictionaryObjId: Br,
        resourceDictionaryObjId: $n
      }));
      on(Br, true), P("<</Type /Pages");
      var z = "/Kids [";
      for (b = 0; b < ut; b++) z += F[b] + " 0 R ";
      P(z + "]"), P("/Count " + ut), P(">>"), P("endobj"), xt.publish("postPutPages");
    }, ci = function(c) {
      xt.publish("putFont", {
        font: c,
        out: P,
        newObject: Dt,
        putStream: Tn
      }), c.isAlreadyPutted !== true && (c.objectNumber = Dt(), P("<<"), P("/Type /Font"), P("/BaseFont /" + Ji(c.postScriptName)), P("/Subtype /Type1"), typeof c.encoding == "string" && P("/Encoding /" + c.encoding), P("/FirstChar 32"), P("/LastChar 255"), P(">>"), P("endobj"));
    }, Ei = function(c) {
      c.objectNumber = Dt();
      var b = [];
      b.push({
        key: "Type",
        value: "/XObject"
      }), b.push({
        key: "Subtype",
        value: "/Form"
      }), b.push({
        key: "BBox",
        value: "[" + [
          ee(c.x),
          ee(c.y),
          ee(c.x + c.width),
          ee(c.y + c.height)
        ].join(" ") + "]"
      }), b.push({
        key: "Matrix",
        value: "[" + c.matrix.toString() + "]"
      });
      var F = c.pages[1].join(`
`);
      Tn({
        data: F,
        additionalKeyValues: b,
        objectId: c.objectNumber
      }), P("endobj");
    }, Fi = function(c, b) {
      b || (b = 21);
      var F = Dt(), z = function(we, Fe) {
        var De, Xe = [], it = 1 / (Fe - 1);
        for (De = 0; De < 1; De += it) Xe.push(De);
        if (Xe.push(1), we[0].offset != 0) {
          var bt = {
            offset: 0,
            color: we[0].color
          };
          we.unshift(bt);
        }
        if (we[we.length - 1].offset != 1) {
          var Ot = {
            offset: 1,
            color: we[we.length - 1].color
          };
          we.push(Ot);
        }
        for (var Jt = "", It = 0, Qt = 0; Qt < Xe.length; Qt++) {
          for (De = Xe[Qt]; De > we[It + 1].offset; ) It++;
          var Xt = we[It].offset, ln = (De - Xt) / (we[It + 1].offset - Xt), kr = we[It].color, Xn = we[It + 1].color;
          Jt += $(Math.round((1 - ln) * kr[0] + ln * Xn[0]).toString(16)) + $(Math.round((1 - ln) * kr[1] + ln * Xn[1]).toString(16)) + $(Math.round((1 - ln) * kr[2] + ln * Xn[2]).toString(16));
        }
        return Jt.trim();
      }(c.colors, b), Z = [];
      Z.push({
        key: "FunctionType",
        value: "0"
      }), Z.push({
        key: "Domain",
        value: "[0.0 1.0]"
      }), Z.push({
        key: "Size",
        value: "[" + b + "]"
      }), Z.push({
        key: "BitsPerSample",
        value: "8"
      }), Z.push({
        key: "Range",
        value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
      }), Z.push({
        key: "Decode",
        value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
      }), Tn({
        data: z,
        additionalKeyValues: Z,
        alreadyAppliedFilters: [
          "/ASCIIHexDecode"
        ],
        objectId: F
      }), P("endobj"), c.objectNumber = Dt(), P("<< /ShadingType " + c.type), P("/ColorSpace /DeviceRGB");
      var pe = "/Coords [" + ee(parseFloat(c.coords[0])) + " " + ee(parseFloat(c.coords[1])) + " ";
      c.type === 2 ? pe += ee(parseFloat(c.coords[2])) + " " + ee(parseFloat(c.coords[3])) : pe += ee(parseFloat(c.coords[2])) + " " + ee(parseFloat(c.coords[3])) + " " + ee(parseFloat(c.coords[4])) + " " + ee(parseFloat(c.coords[5])), P(pe += "]"), c.matrix && P("/Matrix [" + c.matrix.toString() + "]"), P("/Function " + F + " 0 R"), P("/Extend [true true]"), P(">>"), P("endobj");
    }, Mi = function(c, b) {
      var F = an(), z = Dt();
      b.push({
        resourcesOid: F,
        objectOid: z
      }), c.objectNumber = z;
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
        value: "[" + c.boundingBox.map(ee).join(" ") + "]"
      }), Z.push({
        key: "XStep",
        value: ee(c.xStep)
      }), Z.push({
        key: "YStep",
        value: ee(c.yStep)
      }), Z.push({
        key: "Resources",
        value: F + " 0 R"
      }), c.matrix && Z.push({
        key: "Matrix",
        value: "[" + c.matrix.toString() + "]"
      }), Tn({
        data: c.stream,
        additionalKeyValues: Z,
        objectId: c.objectNumber
      }), P("endobj");
    }, Zs = function(c) {
      for (var b in c.objectNumber = Dt(), P("<<"), c) switch (b) {
        case "opacity":
          P("/ca " + L(c[b]));
          break;
        case "stroke-opacity":
          P("/CA " + L(c[b]));
      }
      P(">>"), P("endobj");
    }, ia = function(c) {
      on(c.resourcesOid, true), P("<<"), P("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), function() {
        for (var b in P("/Font <<"), lt) lt.hasOwnProperty(b) && (w === false || w === true && S.hasOwnProperty(b)) && P("/" + b + " " + lt[b].objectNumber + " 0 R");
        P(">>");
      }(), function() {
        if (Object.keys(ze).length > 0) {
          for (var b in P("/Shading <<"), ze) ze.hasOwnProperty(b) && ze[b] instanceof Li && ze[b].objectNumber >= 0 && P("/" + b + " " + ze[b].objectNumber + " 0 R");
          xt.publish("putShadingPatternDict"), P(">>");
        }
      }(), function(b) {
        if (Object.keys(ze).length > 0) {
          for (var F in P("/Pattern <<"), ze) ze.hasOwnProperty(F) && ze[F] instanceof p.TilingPattern && ze[F].objectNumber >= 0 && ze[F].objectNumber < b && P("/" + F + " " + ze[F].objectNumber + " 0 R");
          xt.publish("putTilingPatternDict"), P(">>");
        }
      }(c.objectOid), function() {
        if (Object.keys(Ye).length > 0) {
          var b;
          for (b in P("/ExtGState <<"), Ye) Ye.hasOwnProperty(b) && Ye[b].objectNumber >= 0 && P("/" + b + " " + Ye[b].objectNumber + " 0 R");
          xt.publish("putGStateDict"), P(">>");
        }
      }(), function() {
        for (var b in P("/XObject <<"), dn) dn.hasOwnProperty(b) && dn[b].objectNumber >= 0 && P("/" + b + " " + dn[b].objectNumber + " 0 R");
        xt.publish("putXobjectDict"), P(">>");
      }(), P(">>"), P("endobj");
    }, za = function(c) {
      ct[c.fontName] = ct[c.fontName] || {}, ct[c.fontName][c.fontStyle] = c.id;
    }, Ha = function(c, b, F, z, Z) {
      var pe = {
        id: "F" + (Object.keys(lt).length + 1).toString(10),
        postScriptName: c,
        fontName: b,
        fontStyle: F,
        encoding: z,
        isStandardFont: Z || false,
        metadata: {}
      };
      return xt.publish("addFont", {
        font: pe,
        instance: this
      }), lt[pe.id] = pe, za(pe), pe.id;
    }, Bn = p.__private__.pdfEscape = p.pdfEscape = function(c, b) {
      return function(F, z) {
        var Z, pe, we, Fe, De, Xe, it, bt, Ot;
        if (we = (z = z || {}).sourceEncoding || "Unicode", De = z.outputEncoding, (z.autoencode || De) && lt[Oe].metadata && lt[Oe].metadata[we] && lt[Oe].metadata[we].encoding && (Fe = lt[Oe].metadata[we].encoding, !De && lt[Oe].encoding && (De = lt[Oe].encoding), !De && Fe.codePages && (De = Fe.codePages[0]), typeof De == "string" && (De = Fe[De]), De)) {
          for (it = false, Xe = [], Z = 0, pe = F.length; Z < pe; Z++) (bt = De[F.charCodeAt(Z)]) ? Xe.push(String.fromCharCode(bt)) : Xe.push(F[Z]), Xe[Z].charCodeAt(0) >> 8 && (it = true);
          F = Xe.join("");
        }
        for (Z = F.length; it === void 0 && Z !== 0; ) F.charCodeAt(Z - 1) >> 8 && (it = true), Z--;
        if (!it) return F;
        for (Xe = z.noBOM ? [] : [
          254,
          255
        ], Z = 0, pe = F.length; Z < pe; Z++) {
          if ((Ot = (bt = F.charCodeAt(Z)) >> 8) >> 8) throw new Error("Character at position " + Z + " of string '" + F + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
          Xe.push(Ot), Xe.push(bt - (Ot << 8));
        }
        return String.fromCharCode.apply(void 0, Xe);
      }(c, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, aa = p.__private__.beginPage = function(c) {
      Le[++ut] = [], $e[ut] = {
        objId: 0,
        contentsObjId: 0,
        userUnit: Number(l),
        artBox: null,
        bleedBox: null,
        cropBox: null,
        trimBox: null,
        mediaBox: {
          bottomLeftX: 0,
          bottomLeftY: 0,
          topRightX: Number(c[0]),
          topRightY: Number(c[1])
        }
      }, Ga(ut), We(Le[T]);
    }, Wa = function(c, b) {
      var F, z, Z;
      switch (t = b || t, typeof c == "string" && (F = _(c.toLowerCase()), Array.isArray(F) && (z = F[0], Z = F[1])), Array.isArray(c) && (z = c[0] * rt, Z = c[1] * rt), isNaN(z) && (z = s[0], Z = s[1]), (z > 14400 || Z > 14400) && (Pt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), z = Math.min(14400, z), Z = Math.min(14400, Z)), s = [
        z,
        Z
      ], t.substr(0, 1)) {
        case "l":
          Z > z && (s = [
            Z,
            z
          ]);
          break;
        case "p":
          z > Z && (s = [
            Z,
            z
          ]);
      }
      aa(s), Ze(la), P(Ti), ua !== 0 && P(ua + " J"), fa !== 0 && P(fa + " j"), xt.publish("addPage", {
        pageNumber: ut
      });
    }, sa = function(c) {
      c > 0 && c <= ut && (Le.splice(c, 1), $e.splice(c, 1), ut--, T > ut && (T = ut), this.setPage(T));
    }, Ga = function(c) {
      c > 0 && c <= ut && (T = c);
    }, Va = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
      return Le.length - 1;
    }, $a = function(c, b, F) {
      var z, Z = void 0;
      return F = F || {}, c = c !== void 0 ? c : lt[Oe].fontName, b = b !== void 0 ? b : lt[Oe].fontStyle, z = c.toLowerCase(), ct[z] !== void 0 && ct[z][b] !== void 0 ? Z = ct[z][b] : ct[c] !== void 0 && ct[c][b] !== void 0 ? Z = ct[c][b] : F.disableWarning === false && Pt.warn("Unable to look up font label for font '" + c + "', '" + b + "'. Refer to getFontList() for available fonts."), Z || F.noFallback || (Z = ct.times[b]) == null && (Z = ct.times.normal), Z;
    }, or = p.__private__.putInfo = function() {
      var c = Dt(), b = function(z) {
        return z;
      };
      for (var F in g !== null && (b = Zt.encryptor(c, 0)), P("<<"), P("/Producer (" + Bn(b("jsPDF " + Be.version)) + ")"), ht) ht.hasOwnProperty(F) && ht[F] && P("/" + F.substr(0, 1).toUpperCase() + F.substr(1) + " (" + Bn(b(ht[F])) + ")");
      P("/CreationDate (" + Bn(b(te)) + ")"), P(">>"), P("endobj");
    }, Ri = p.__private__.putCatalog = function(c) {
      var b = (c = c || {}).rootDictionaryObjId || Br;
      switch (Dt(), P("<<"), P("/Type /Catalog"), P("/Pages " + b + " 0 R"), Ve || (Ve = "fullwidth"), Ve) {
        case "fullwidth":
          P("/OpenAction [3 0 R /FitH null]");
          break;
        case "fullheight":
          P("/OpenAction [3 0 R /FitV null]");
          break;
        case "fullpage":
          P("/OpenAction [3 0 R /Fit]");
          break;
        case "original":
          P("/OpenAction [3 0 R /XYZ null null 1]");
          break;
        default:
          var F = "" + Ve;
          F.substr(F.length - 1) === "%" && (Ve = parseInt(Ve) / 100), typeof Ve == "number" && P("/OpenAction [3 0 R /XYZ null null " + L(Ve) + "]");
      }
      switch (ft || (ft = "continuous"), ft) {
        case "continuous":
          P("/PageLayout /OneColumn");
          break;
        case "single":
          P("/PageLayout /SinglePage");
          break;
        case "two":
        case "twoleft":
          P("/PageLayout /TwoColumnLeft");
          break;
        case "tworight":
          P("/PageLayout /TwoColumnRight");
      }
      Ue && P("/PageMode /" + Ue), xt.publish("putCatalog"), P(">>"), P("endobj");
    }, Qs = p.__private__.putTrailer = function() {
      P("trailer"), P("<<"), P("/Size " + (K + 1)), P("/Root " + K + " 0 R"), P("/Info " + (K - 1) + " 0 R"), g !== null && P("/Encrypt " + Zt.oid + " 0 R"), P("/ID [ <" + se + "> <" + se + "> ]"), P(">>");
    }, Yt = p.__private__.putHeader = function() {
      P("%PDF-" + I), P("%\xBA\xDF\xAC\xE0");
    }, Ka = p.__private__.putXRef = function() {
      var c = "0000000000";
      P("xref"), P("0 " + (K + 1)), P("0000000000 65535 f ");
      for (var b = 1; b <= K; b++) typeof Q[b] == "function" ? P((c + Q[b]()).slice(-10) + " 00000 n ") : Q[b] !== void 0 ? P((c + Q[b]).slice(-10) + " 00000 n ") : P("0000000000 00000 n ");
    }, lr = p.__private__.buildDocument = function() {
      var c;
      K = 0, ue = 0, ce = [], Q = [], ve = [], Br = an(), $n = an(), We(ce), xt.publish("buildDocument"), Yt(), sr(), function() {
        xt.publish("putAdditionalObjects");
        for (var F = 0; F < ve.length; F++) {
          var z = ve[F];
          on(z.objId, true), P(z.content), P("endobj");
        }
        xt.publish("postPutAdditionalObjects");
      }(), c = [], function() {
        for (var F in lt) lt.hasOwnProperty(F) && (w === false || w === true && S.hasOwnProperty(F)) && ci(lt[F]);
      }(), function() {
        var F;
        for (F in Ye) Ye.hasOwnProperty(F) && Zs(Ye[F]);
      }(), function() {
        for (var F in dn) dn.hasOwnProperty(F) && Ei(dn[F]);
      }(), function(F) {
        var z;
        for (z in ze) ze.hasOwnProperty(z) && (ze[z] instanceof Li ? Fi(ze[z]) : ze[z] instanceof Xi && Mi(ze[z], F));
      }(c), xt.publish("putResources"), c.forEach(ia), ia({
        resourcesOid: $n,
        objectOid: Number.MAX_SAFE_INTEGER
      }), xt.publish("postPutResources"), g !== null && (Zt.oid = Dt(), P("<<"), P("/Filter /Standard"), P("/V " + Zt.v), P("/R " + Zt.r), P("/U <" + Zt.toHexString(Zt.U) + ">"), P("/O <" + Zt.toHexString(Zt.O) + ">"), P("/P " + Zt.P), P(">>"), P("endobj")), or(), Ri();
      var b = ue;
      return Ka(), Qs(), P("startxref"), P("" + b), P("%%EOF"), We(Le[T]), ce.join(`
`);
    }, Oi = p.__private__.getBlob = function(c) {
      return new Blob([
        ot(c)
      ], {
        type: "application/pdf"
      });
    }, Ya = p.output = p.__private__.output = (Dn = function(c, b) {
      switch (typeof (b = b || {}) == "string" ? b = {
        filename: b
      } : b.filename = b.filename || "generated.pdf", c) {
        case void 0:
          return lr();
        case "save":
          p.save(b.filename);
          break;
        case "arraybuffer":
          return ot(lr());
        case "blob":
          return Oi(lr());
        case "bloburi":
        case "bloburl":
          if (Je.URL !== void 0 && typeof Je.URL.createObjectURL == "function") return Je.URL && Je.URL.createObjectURL(Oi(lr())) || void 0;
          Pt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
          break;
        case "datauristring":
        case "dataurlstring":
          var F = "", z = lr();
          try {
            F = Zc(z);
          } catch {
            F = Zc(unescape(encodeURIComponent(z)));
          }
          return "data:application/pdf;filename=" + b.filename + ";base64," + F;
        case "pdfobjectnewwindow":
          if (Object.prototype.toString.call(Je) === "[object Window]") {
            var Z = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", pe = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
            b.pdfObjectUrl && (Z = b.pdfObjectUrl, pe = "");
            var we = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + Z + '"' + pe + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(b) + ");<\/script></body></html>", Fe = Je.open();
            return Fe !== null && Fe.document.write(we), Fe;
          }
          throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
        case "pdfjsnewwindow":
          if (Object.prototype.toString.call(Je) === "[object Window]") {
            var De = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (b.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + b.filename + '" width="500px" height="400px" /></body></html>', Xe = Je.open();
            if (Xe !== null) {
              Xe.document.write(De);
              var it = this;
              Xe.document.documentElement.querySelector("#pdfViewer").onload = function() {
                Xe.document.title = b.filename, Xe.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(it.output("bloburl"));
              };
            }
            return Xe;
          }
          throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
        case "dataurlnewwindow":
          if (Object.prototype.toString.call(Je) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
          var bt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", b) + '"></iframe></body></html>', Ot = Je.open();
          if (Ot !== null && (Ot.document.write(bt), Ot.document.title = b.filename), Ot || typeof safari > "u") return Ot;
          break;
        case "datauri":
        case "dataurl":
          return Je.document.location.href = this.output("datauristring", b);
        default:
          return null;
      }
    }, Dn.foo = function() {
      try {
        return Dn.apply(this, arguments);
      } catch (F) {
        var c = F.stack || "";
        ~c.indexOf(" at ") && (c = c.split(" at ")[1]);
        var b = "Error in function " + c.split(`
`)[0].split("<")[0] + ": " + F.message;
        if (!Je.console) throw new Error(b);
        Je.console.error(b, F), Je.alert && alert(b);
      }
    }, Dn.foo.bar = Dn, Dn.foo), qn = function(c) {
      return Array.isArray(si) === true && si.indexOf(c) > -1;
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
        rt = qn("px_scaling") == 1 ? 0.75 : 96 / 72;
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
    de(), Y();
    var yr = p.__private__.getPageInfo = p.getPageInfo = function(c) {
      if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
      return {
        objId: $e[c].objId,
        pageNumber: c,
        pageContext: $e[c]
      };
    }, Ja = p.__private__.getPageInfoByObjId = function(c) {
      if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
      for (var b in $e) if ($e[b].objId === c) break;
      return yr(b);
    }, eo = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
      return {
        objId: $e[T].objId,
        pageNumber: T,
        pageContext: $e[T]
      };
    };
    p.addPage = function() {
      return Wa.apply(this, arguments), this;
    }, p.setPage = function() {
      return Ga.apply(this, arguments), We.call(this, Le[T]), this;
    }, p.insertPage = function(c) {
      return this.addPage(), this.movePage(T, c), this;
    }, p.movePage = function(c, b) {
      var F, z;
      if (c > b) {
        F = Le[c], z = $e[c];
        for (var Z = c; Z > b; Z--) Le[Z] = Le[Z - 1], $e[Z] = $e[Z - 1];
        Le[b] = F, $e[b] = z, this.setPage(b);
      } else if (c < b) {
        F = Le[c], z = $e[c];
        for (var pe = c; pe < b; pe++) Le[pe] = Le[pe + 1], $e[pe] = $e[pe + 1];
        Le[b] = F, $e[b] = z, this.setPage(b);
      }
      return this;
    }, p.deletePage = function() {
      return sa.apply(this, arguments), this;
    }, p.__private__.text = p.text = function(c, b, F, z, Z) {
      var pe, we, Fe, De, Xe, it, bt, Ot, Jt, It = (z = z || {}).scope || this;
      if (typeof c == "number" && typeof b == "number" && (typeof F == "string" || Array.isArray(F))) {
        var Qt = F;
        F = b, b = c, c = Qt;
      }
      if (arguments[3] instanceof Ke == 0 ? (Fe = arguments[4], De = arguments[5], Lt(bt = arguments[3]) === "object" && bt !== null || (typeof Fe == "string" && (De = Fe, Fe = null), typeof bt == "string" && (De = bt, bt = null), typeof bt == "number" && (Fe = bt, bt = null), z = {
        flags: bt,
        angle: Fe,
        align: De
      })) : (H("The transform parameter of text() with a Matrix value"), Jt = Z), isNaN(b) || isNaN(F) || c == null) throw new Error("Invalid arguments passed to jsPDF.text");
      if (c.length === 0) return It;
      var Xt, ln = "", kr = typeof z.lineHeightFactor == "number" ? z.lineHeightFactor : fi, Xn = It.internal.scaleFactor;
      function Pr(Nt) {
        return Nt = Nt.split("	").join(Array(z.TabLen || 9).join(" ")), Bn(Nt, bt);
      }
      function ma(Nt) {
        for (var St, Ht = Nt.concat(), en = [], jr = Ht.length; jr--; ) typeof (St = Ht.shift()) == "string" ? en.push(St) : Array.isArray(Nt) && (St.length === 1 || St[1] === void 0 && St[2] === void 0) ? en.push(St[0]) : en.push([
          St[0],
          St[1],
          St[2]
        ]);
        return en;
      }
      function qi(Nt, St) {
        var Ht;
        if (typeof Nt == "string") Ht = St(Nt)[0];
        else if (Array.isArray(Nt)) {
          for (var en, jr, La = Nt.concat(), Hi = [], os = La.length; os--; ) typeof (en = La.shift()) == "string" ? Hi.push(St(en)[0]) : Array.isArray(en) && typeof en[0] == "string" && (jr = St(en[0], en[1], en[2]), Hi.push([
            jr[0],
            jr[1],
            jr[2]
          ]));
          Ht = Hi;
        }
        return Ht;
      }
      var qr = false, mi = true;
      if (typeof c == "string") qr = true;
      else if (Array.isArray(c)) {
        var gi = c.concat();
        we = [];
        for (var Ur, cn = gi.length; cn--; ) (typeof (Ur = gi.shift()) != "string" || Array.isArray(Ur) && typeof Ur[0] != "string") && (mi = false);
        qr = mi;
      }
      if (qr === false) throw new Error('Type of text must be string or Array. "' + c + '" is not recognized.');
      typeof c == "string" && (c = c.match(/[\r?\n]/) ? c.split(/\r\n|\r|\n/g) : [
        c
      ]);
      var bi = Ne / It.internal.scaleFactor, vi = bi * (kr - 1);
      switch (z.baseline) {
        case "bottom":
          F -= vi;
          break;
        case "top":
          F += bi - vi;
          break;
        case "hanging":
          F += bi - 2 * vi;
          break;
        case "middle":
          F += bi / 2 - vi;
      }
      if ((it = z.maxWidth || 0) > 0 && (typeof c == "string" ? c = It.splitTextToSize(c, it) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(Nt, St) {
        return Nt.concat(It.splitTextToSize(St, it));
      }, []))), pe = {
        text: c,
        x: b,
        y: F,
        options: z,
        mutex: {
          pdfEscape: Bn,
          activeFontKey: Oe,
          fonts: lt,
          activeFontSize: Ne
        }
      }, xt.publish("preProcessText", pe), c = pe.text, Fe = (z = pe.options).angle, Jt instanceof Ke == 0 && Fe && typeof Fe == "number") {
        Fe *= Math.PI / 180, z.rotationDirection === 0 && (Fe = -Fe), q === V && (Fe = -Fe);
        var ga = Math.cos(Fe), ba = Math.sin(Fe);
        Jt = new Ke(ga, ba, -ba, ga, 0, 0);
      } else Fe && Fe instanceof Ke && (Jt = Fe);
      q !== V || Jt || (Jt = wr), (Xe = z.charSpace || _r) !== void 0 && (ln += ee(R(Xe)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ot = z.horizontalScale) !== void 0 && (ln += ee(100 * Ot) + ` Tz
`), z.lang;
      var wn = -1, Cr = z.renderingMode !== void 0 ? z.renderingMode : z.stroke, Ui = It.internal.getCurrentPageInfo().pageContext;
      switch (Cr) {
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
      var as = Ui.usedRenderingMode !== void 0 ? Ui.usedRenderingMode : -1;
      wn !== -1 ? ln += wn + ` Tr
` : as !== -1 && (ln += `0 Tr
`), wn !== -1 && (Ui.usedRenderingMode = wn), De = z.align || "left";
      var Un, wi = Ne * kr, va = It.internal.pageSize.getWidth(), wa = lt[Oe];
      Xe = z.charSpace || _r, it = z.maxWidth || 0, bt = Object.assign({
        autoencode: true,
        noBOM: true
      }, z.flags);
      var zr = [], yi = function(Nt) {
        return It.getStringUnitWidth(Nt, {
          font: wa,
          charSpace: Xe,
          fontSize: Ne,
          doKerning: false
        }) * Ne / Xn;
      };
      if (Object.prototype.toString.call(c) === "[object Array]") {
        var kn;
        we = ma(c), De !== "left" && (Un = we.map(yi));
        var Pn, Hr = 0;
        if (De === "right") {
          b -= Un[0], c = [], cn = we.length;
          for (var Ir = 0; Ir < cn; Ir++) Ir === 0 ? (Pn = xr(b), kn = Nr(F)) : (Pn = R(Hr - Un[Ir]), kn = -wi), c.push([
            we[Ir],
            Pn,
            kn
          ]), Hr = Un[Ir];
        } else if (De === "center") {
          b -= Un[0] / 2, c = [], cn = we.length;
          for (var Wr = 0; Wr < cn; Wr++) Wr === 0 ? (Pn = xr(b), kn = Nr(F)) : (Pn = R((Hr - Un[Wr]) / 2), kn = -wi), c.push([
            we[Wr],
            Pn,
            kn
          ]), Hr = Un[Wr];
        } else if (De === "left") {
          c = [], cn = we.length;
          for (var ya = 0; ya < cn; ya++) c.push(we[ya]);
        } else if (De === "justify" && wa.encoding === "Identity-H") {
          c = [], cn = we.length, it = it !== 0 ? it : va;
          for (var zi = 0, zt = 0; zt < cn; zt++) if (kn = zt === 0 ? Nr(F) : -wi, Pn = zt === 0 ? xr(b) : zi, zt < cn - 1) {
            var ss = R((it - Un[zt]) / (we[zt].split(" ").length - 1)), ur = we[zt].split(" ");
            c.push([
              ur[0] + " ",
              Pn,
              kn
            ]), zi = 0;
            for (var fr = 1; fr < ur.length; fr++) {
              var xa = (yi(ur[fr - 1] + " " + ur[fr]) - yi(ur[fr])) * Xn + ss;
              fr == ur.length - 1 ? c.push([
                ur[fr],
                xa,
                0
              ]) : c.push([
                ur[fr] + " ",
                xa,
                0
              ]), zi -= xa;
            }
          } else c.push([
            we[zt],
            Pn,
            kn
          ]);
          c.push([
            "",
            zi,
            0
          ]);
        } else {
          if (De !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
          for (c = [], cn = we.length, it = it !== 0 ? it : va, zt = 0; zt < cn; zt++) {
            kn = zt === 0 ? Nr(F) : -wi, Pn = zt === 0 ? xr(b) : 0;
            var Na = we[zt].split(" ").length - 1, _a = Na > 0 ? (it - Un[zt]) / Na : 0;
            zt < cn - 1 ? zr.push(ee(R(_a))) : zr.push(0), c.push([
              we[zt],
              Pn,
              kn
            ]);
          }
        }
      }
      (typeof z.R2L == "boolean" ? z.R2L : He) === true && (c = qi(c, function(Nt, St, Ht) {
        return [
          Nt.split("").reverse().join(""),
          St,
          Ht
        ];
      })), pe = {
        text: c,
        x: b,
        y: F,
        options: z,
        mutex: {
          pdfEscape: Bn,
          activeFontKey: Oe,
          fonts: lt,
          activeFontSize: Ne
        }
      }, xt.publish("postProcessText", pe), c = pe.text, Xt = pe.mutex.isHex || false;
      var Aa = lt[Oe].encoding;
      Aa !== "WinAnsiEncoding" && Aa !== "StandardEncoding" || (c = qi(c, function(Nt, St, Ht) {
        return [
          Pr(Nt),
          St,
          Ht
        ];
      })), we = ma(c), c = [];
      for (var Gr, Vr, $r, xi = Array.isArray(we[0]) ? 1 : 0, Kr = "", Ni = function(Nt, St, Ht) {
        var en = "";
        return Ht instanceof Ke ? (Ht = typeof z.angle == "number" ? vr(Ht, new Ke(1, 0, 0, 1, Nt, St)) : vr(new Ke(1, 0, 0, 1, Nt, St), Ht), q === V && (Ht = vr(new Ke(1, 0, 0, -1, 0, 0), Ht)), en = Ht.join(" ") + ` Tm
`) : en = ee(Nt) + " " + ee(St) + ` Td
`, en;
      }, zn = 0; zn < we.length; zn++) {
        switch (Kr = "", xi) {
          case 1:
            $r = (Xt ? "<" : "(") + we[zn][0] + (Xt ? ">" : ")"), Gr = parseFloat(we[zn][1]), Vr = parseFloat(we[zn][2]);
            break;
          case 0:
            $r = (Xt ? "<" : "(") + we[zn] + (Xt ? ">" : ")"), Gr = xr(b), Vr = Nr(F);
        }
        zr !== void 0 && zr[zn] !== void 0 && (Kr = zr[zn] + ` Tw
`), zn === 0 ? c.push(Kr + Ni(Gr, Vr, Jt) + $r) : xi === 0 ? c.push(Kr + $r) : xi === 1 && c.push(Kr + Ni(Gr, Vr, Jt) + $r);
      }
      c = xi === 0 ? c.join(` Tj
T* `) : c.join(` Tj
`), c += ` Tj
`;
      var hr = `BT
/`;
      return hr += Oe + " " + Ne + ` Tf
`, hr += ee(Ne * kr) + ` TL
`, hr += hi + `
`, hr += ln, hr += c, P(hr += "ET"), S[Oe] = true, It;
    };
    var to = p.__private__.clip = p.clip = function(c) {
      return P(c === "evenodd" ? "W*" : "W"), this;
    };
    p.clipEvenOdd = function() {
      return to("evenodd");
    }, p.__private__.discardPath = p.discardPath = function() {
      return P("n"), this;
    };
    var cr = p.__private__.isValidStyle = function(c) {
      var b = false;
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
      ].indexOf(c) !== -1 && (b = true), b;
    };
    p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(c) {
      return cr(c) && (d = c), this;
    };
    var Xa = p.__private__.getStyle = p.getStyle = function(c) {
      var b = d;
      switch (c) {
        case "D":
        case "S":
          b = "S";
          break;
        case "F":
          b = "f";
          break;
        case "FD":
        case "DF":
          b = "B";
          break;
        case "f":
        case "f*":
        case "B":
        case "B*":
          b = c;
      }
      return b;
    }, Za = p.close = function() {
      return P("h"), this;
    };
    p.stroke = function() {
      return P("S"), this;
    }, p.fill = function(c) {
      return Di("f", c), this;
    }, p.fillEvenOdd = function(c) {
      return Di("f*", c), this;
    }, p.fillStroke = function(c) {
      return Di("B", c), this;
    }, p.fillStrokeEvenOdd = function(c) {
      return Di("B*", c), this;
    };
    var Di = function(c, b) {
      Lt(b) === "object" ? ro(b, c) : P(c);
    }, ui = function(c) {
      c === null || q === V && c === void 0 || (c = Xa(c), P(c));
    };
    function no(c, b, F, z, Z) {
      var pe = new Xi(b || this.boundingBox, F || this.xStep, z || this.yStep, this.gState, Z || this.matrix);
      pe.stream = this.stream;
      var we = c + "$$" + this.cloneIndex++ + "$$";
      return On(we, pe), pe;
    }
    var ro = function(c, b) {
      var F = Ct[c.key], z = ze[F];
      if (z instanceof Li) P("q"), P(io(b)), z.gState && p.setGState(z.gState), P(c.matrix.toString() + " cm"), P("/" + F + " sh"), P("Q");
      else if (z instanceof Xi) {
        var Z = new Ke(1, 0, 0, -1, 0, pi());
        c.matrix && (Z = Z.multiply(c.matrix || wr), F = no.call(z, c.key, c.boundingBox, c.xStep, c.yStep, Z).id), P("q"), P("/Pattern cs"), P("/" + F + " scn"), z.gState && p.setGState(z.gState), P(b), P("Q");
      }
    }, io = function(c) {
      switch (c) {
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
    }, oa = p.moveTo = function(c, b) {
      return P(ee(R(c)) + " " + ee(B(b)) + " m"), this;
    }, Qa = p.lineTo = function(c, b) {
      return P(ee(R(c)) + " " + ee(B(b)) + " l"), this;
    }, Jn = p.curveTo = function(c, b, F, z, Z, pe) {
      return P([
        ee(R(c)),
        ee(B(b)),
        ee(R(F)),
        ee(B(z)),
        ee(R(Z)),
        ee(B(pe)),
        "c"
      ].join(" ")), this;
    };
    p.__private__.line = p.line = function(c, b, F, z, Z) {
      if (isNaN(c) || isNaN(b) || isNaN(F) || isNaN(z) || !cr(Z)) throw new Error("Invalid arguments passed to jsPDF.line");
      return q === W ? this.lines([
        [
          F - c,
          z - b
        ]
      ], c, b, [
        1,
        1
      ], Z || "S") : this.lines([
        [
          F - c,
          z - b
        ]
      ], c, b, [
        1,
        1
      ]).stroke();
    }, p.__private__.lines = p.lines = function(c, b, F, z, Z, pe) {
      var we, Fe, De, Xe, it, bt, Ot, Jt, It, Qt, Xt, ln;
      if (typeof c == "number" && (ln = F, F = b, b = c, c = ln), z = z || [
        1,
        1
      ], pe = pe || false, isNaN(b) || isNaN(F) || !Array.isArray(c) || !Array.isArray(z) || !cr(Z) || typeof pe != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
      for (oa(b, F), we = z[0], Fe = z[1], Xe = c.length, Qt = b, Xt = F, De = 0; De < Xe; De++) (it = c[De]).length === 2 ? (Qt = it[0] * we + Qt, Xt = it[1] * Fe + Xt, Qa(Qt, Xt)) : (bt = it[0] * we + Qt, Ot = it[1] * Fe + Xt, Jt = it[2] * we + Qt, It = it[3] * Fe + Xt, Qt = it[4] * we + Qt, Xt = it[5] * Fe + Xt, Jn(bt, Ot, Jt, It, Qt, Xt));
      return pe && Za(), ui(Z), this;
    }, p.path = function(c) {
      for (var b = 0; b < c.length; b++) {
        var F = c[b], z = F.c;
        switch (F.op) {
          case "m":
            oa(z[0], z[1]);
            break;
          case "l":
            Qa(z[0], z[1]);
            break;
          case "c":
            Jn.apply(this, z);
            break;
          case "h":
            Za();
        }
      }
      return this;
    }, p.__private__.rect = p.rect = function(c, b, F, z, Z) {
      if (isNaN(c) || isNaN(b) || isNaN(F) || isNaN(z) || !cr(Z)) throw new Error("Invalid arguments passed to jsPDF.rect");
      return q === W && (z = -z), P([
        ee(R(c)),
        ee(B(b)),
        ee(R(F)),
        ee(R(z)),
        "re"
      ].join(" ")), ui(Z), this;
    }, p.__private__.triangle = p.triangle = function(c, b, F, z, Z, pe, we) {
      if (isNaN(c) || isNaN(b) || isNaN(F) || isNaN(z) || isNaN(Z) || isNaN(pe) || !cr(we)) throw new Error("Invalid arguments passed to jsPDF.triangle");
      return this.lines([
        [
          F - c,
          z - b
        ],
        [
          Z - F,
          pe - z
        ],
        [
          c - Z,
          b - pe
        ]
      ], c, b, [
        1,
        1
      ], we, true), this;
    }, p.__private__.roundedRect = p.roundedRect = function(c, b, F, z, Z, pe, we) {
      if (isNaN(c) || isNaN(b) || isNaN(F) || isNaN(z) || isNaN(Z) || isNaN(pe) || !cr(we)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
      var Fe = 4 / 3 * (Math.SQRT2 - 1);
      return Z = Math.min(Z, 0.5 * F), pe = Math.min(pe, 0.5 * z), this.lines([
        [
          F - 2 * Z,
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
          z - 2 * pe
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
          2 * Z - F,
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
          2 * pe - z
        ],
        [
          0,
          -pe * Fe,
          Z * Fe,
          -pe,
          Z,
          -pe
        ]
      ], c + Z, b, [
        1,
        1
      ], we, true), this;
    }, p.__private__.ellipse = p.ellipse = function(c, b, F, z, Z) {
      if (isNaN(c) || isNaN(b) || isNaN(F) || isNaN(z) || !cr(Z)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
      var pe = 4 / 3 * (Math.SQRT2 - 1) * F, we = 4 / 3 * (Math.SQRT2 - 1) * z;
      return oa(c + F, b), Jn(c + F, b - we, c + pe, b - z, c, b - z), Jn(c - pe, b - z, c - F, b - we, c - F, b), Jn(c - F, b + we, c - pe, b + z, c, b + z), Jn(c + pe, b + z, c + F, b + we, c + F, b), ui(Z), this;
    }, p.__private__.circle = p.circle = function(c, b, F, z) {
      if (isNaN(c) || isNaN(b) || isNaN(F) || !cr(z)) throw new Error("Invalid arguments passed to jsPDF.circle");
      return this.ellipse(c, b, F, F, z);
    }, p.setFont = function(c, b, F) {
      return F && (b = ge(b, F)), Oe = $a(c, b, {
        disableWarning: false
      }), this;
    };
    var ao = p.__private__.getFont = p.getFont = function() {
      return lt[$a.apply(p, arguments)];
    };
    p.__private__.getFontList = p.getFontList = function() {
      var c, b, F = {};
      for (c in ct) if (ct.hasOwnProperty(c)) for (b in F[c] = [], ct[c]) ct[c].hasOwnProperty(b) && F[c].push(b);
      return F;
    }, p.addFont = function(c, b, F, z, Z) {
      var pe = [
        "StandardEncoding",
        "MacRomanEncoding",
        "Identity-H",
        "WinAnsiEncoding"
      ];
      return arguments[3] && pe.indexOf(arguments[3]) !== -1 ? Z = arguments[3] : arguments[3] && pe.indexOf(arguments[3]) == -1 && (F = ge(F, z)), Ha.call(this, c, b, F, Z = Z || "Identity-H");
    };
    var fi, la = n.lineWidth || 0.200025, so = p.__private__.getLineWidth = p.getLineWidth = function() {
      return la;
    }, Ze = p.__private__.setLineWidth = p.setLineWidth = function(c) {
      return la = c, P(ee(R(c)) + " w"), this;
    };
    p.__private__.setLineDash = Be.API.setLineDash = Be.API.setLineDashPattern = function(c, b) {
      if (c = c || [], b = b || 0, isNaN(b) || !Array.isArray(c)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
      return c = c.map(function(F) {
        return ee(R(F));
      }).join(" "), b = ee(R(b)), P("[" + c + "] " + b + " d"), this;
    };
    var oo = p.__private__.getLineHeight = p.getLineHeight = function() {
      return Ne * fi;
    };
    p.__private__.getLineHeight = p.getLineHeight = function() {
      return Ne * fi;
    };
    var lo = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(c) {
      return typeof (c = c || 1.15) == "number" && (fi = c), this;
    }, co = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
      return fi;
    };
    lo(n.lineHeight);
    var xr = p.__private__.getHorizontalCoordinate = function(c) {
      return R(c);
    }, Nr = p.__private__.getVerticalCoordinate = function(c) {
      return q === V ? c : $e[T].mediaBox.topRightY - $e[T].mediaBox.bottomLeftY - R(c);
    }, uo = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(c) {
      return ee(xr(c));
    }, fo = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(c) {
      return ee(Nr(c));
    }, Ti = n.strokeColor || "0 G";
    p.__private__.getStrokeColor = p.getDrawColor = function() {
      return ar(Ti);
    }, p.__private__.setStrokeColor = p.setDrawColor = function(c, b, F, z) {
      return Ti = Kn({
        ch1: c,
        ch2: b,
        ch3: F,
        ch4: z,
        pdfColorType: "draw",
        precision: 2
      }), P(Ti), this;
    };
    var ca = n.fillColor || "0 g";
    p.__private__.getFillColor = p.getFillColor = function() {
      return ar(ca);
    }, p.__private__.setFillColor = p.setFillColor = function(c, b, F, z) {
      return ca = Kn({
        ch1: c,
        ch2: b,
        ch3: F,
        ch4: z,
        pdfColorType: "fill",
        precision: 2
      }), P(ca), this;
    };
    var hi = n.textColor || "0 g", ho = p.__private__.getTextColor = p.getTextColor = function() {
      return ar(hi);
    };
    p.__private__.setTextColor = p.setTextColor = function(c, b, F, z) {
      return hi = Kn({
        ch1: c,
        ch2: b,
        ch3: F,
        ch4: z,
        pdfColorType: "text",
        precision: 3
      }), this;
    };
    var _r = n.charSpace, po = p.__private__.getCharSpace = p.getCharSpace = function() {
      return parseFloat(_r || 0);
    };
    p.__private__.setCharSpace = p.setCharSpace = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
      return _r = c, this;
    };
    var ua = 0;
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
    }, p.__private__.setLineCap = p.setLineCap = function(c) {
      var b = p.CapJoinStyles[c];
      if (b === void 0) throw new Error("Line cap style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      return ua = b, P(b + " J"), this;
    };
    var fa = 0;
    p.__private__.setLineJoin = p.setLineJoin = function(c) {
      var b = p.CapJoinStyles[c];
      if (b === void 0) throw new Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      return fa = b, P(b + " j"), this;
    }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(c) {
      if (c = c || 0, isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
      return P(ee(R(c)) + " M"), this;
    }, p.GState = Hs, p.setGState = function(c) {
      (c = typeof c == "string" ? Ye[tt[c]] : es(null, c)).equals(Mt) || (P("/" + c.id + " gs"), Mt = c);
    };
    var es = function(c, b) {
      if (!c || !tt[c]) {
        var F = false;
        for (var z in Ye) if (Ye.hasOwnProperty(z) && Ye[z].equals(b)) {
          F = true;
          break;
        }
        if (F) b = Ye[z];
        else {
          var Z = "GS" + (Object.keys(Ye).length + 1).toString(10);
          Ye[Z] = b, b.id = Z;
        }
        return c && (tt[c] = b.id), xt.publish("addGState", b), b;
      }
    };
    p.addGState = function(c, b) {
      return es(c, b), this;
    }, p.saveGraphicsState = function() {
      return P("q"), Ft.push({
        key: Oe,
        size: Ne,
        color: hi
      }), this;
    }, p.restoreGraphicsState = function() {
      P("Q");
      var c = Ft.pop();
      return Oe = c.key, Ne = c.size, hi = c.color, Mt = null, this;
    }, p.setCurrentTransformationMatrix = function(c) {
      return P(c.toString() + " cm"), this;
    }, p.comment = function(c) {
      return P("#" + c), this;
    };
    var Ar = function(c, b) {
      var F = c || 0;
      Object.defineProperty(this, "x", {
        enumerable: true,
        get: function() {
          return F;
        },
        set: function(pe) {
          isNaN(pe) || (F = parseFloat(pe));
        }
      });
      var z = b || 0;
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return z;
        },
        set: function(pe) {
          isNaN(pe) || (z = parseFloat(pe));
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
    }, ha = function(c, b, F, z) {
      Ar.call(this, c, b), this.type = "rect";
      var Z = F || 0;
      Object.defineProperty(this, "w", {
        enumerable: true,
        get: function() {
          return Z;
        },
        set: function(we) {
          isNaN(we) || (Z = parseFloat(we));
        }
      });
      var pe = z || 0;
      return Object.defineProperty(this, "h", {
        enumerable: true,
        get: function() {
          return pe;
        },
        set: function(we) {
          isNaN(we) || (pe = parseFloat(we));
        }
      }), this;
    }, Bi = function() {
      this.page = ut, this.currentPage = T, this.pages = Le.slice(0), this.pagesContext = $e.slice(0), this.x = qe, this.y = Ut, this.matrix = gt, this.width = pa(T), this.height = ns(T), this.outputDestination = Ce, this.id = "", this.objectNumber = -1;
    };
    Bi.prototype.restore = function() {
      ut = this.page, T = this.currentPage, $e = this.pagesContext, Le = this.pages, qe = this.x, Ut = this.y, gt = this.matrix, ts(T, this.width), Lr(T, this.height), Ce = this.outputDestination;
    };
    var da = function(c, b, F, z, Z) {
      ir.push(new Bi()), ut = T = 0, Le = [], qe = c, Ut = b, gt = Z, aa([
        F,
        z
      ]);
    };
    for (var di in p.beginFormObject = function(c, b, F, z, Z) {
      return da(c, b, F, z, Z), this;
    }, p.endFormObject = function(c) {
      return function(b) {
        if (br[b]) ir.pop().restore();
        else {
          var F = new Bi(), z = "Xo" + (Object.keys(dn).length + 1).toString(10);
          F.id = z, br[b] = z, dn[z] = F, xt.publish("addFormObject", F), ir.pop().restore();
        }
      }(c), this;
    }, p.doFormObject = function(c, b) {
      var F = dn[br[c]];
      return P("q"), P(b.toString() + " cm"), P("/" + F.id + " Do"), P("Q"), this;
    }, p.getFormObject = function(c) {
      var b = dn[br[c]];
      return {
        x: b.x,
        y: b.y,
        width: b.width,
        height: b.height,
        matrix: b.matrix
      };
    }, p.save = function(c, b) {
      return c = c || "generated.pdf", (b = b || {}).returnPromise = b.returnPromise || false, b.returnPromise === false ? (Ai(Oi(lr()), c), typeof Ai.unload == "function" && Je.setTimeout && setTimeout(Ai.unload, 911), this) : new Promise(function(F, z) {
        try {
          var Z = Ai(Oi(lr()), c);
          typeof Ai.unload == "function" && Je.setTimeout && setTimeout(Ai.unload, 911), F(Z);
        } catch (pe) {
          z(pe.message);
        }
      });
    }, Be.API) Be.API.hasOwnProperty(di) && (di === "events" && Be.API.events.length ? function(c, b) {
      var F, z, Z;
      for (Z = b.length - 1; Z !== -1; Z--) F = b[Z][0], z = b[Z][1], c.subscribe.apply(c, [
        F
      ].concat(typeof z == "function" ? [
        z
      ] : z));
    }(xt, Be.API.events) : p[di] = Be.API[di]);
    function pa(c) {
      return $e[c].mediaBox.topRightX - $e[c].mediaBox.bottomLeftX;
    }
    function ts(c, b) {
      $e[c].mediaBox.topRightX = b + $e[c].mediaBox.bottomLeftX;
    }
    function ns(c) {
      return $e[c].mediaBox.topRightY - $e[c].mediaBox.bottomLeftY;
    }
    function Lr(c, b) {
      $e[c].mediaBox.topRightY = b + $e[c].mediaBox.bottomLeftY;
    }
    var Sr = p.getPageWidth = function(c) {
      return pa(c = c || T) / rt;
    }, rs = p.setPageWidth = function(c, b) {
      ts(c, b * rt);
    }, pi = p.getPageHeight = function(c) {
      return ns(c = c || T) / rt;
    }, is = p.setPageHeight = function(c, b) {
      Lr(c, b * rt);
    };
    return p.internal = {
      pdfEscape: Bn,
      getStyle: Xa,
      getFont: ao,
      getFontSize: je,
      getCharSpace: po,
      getTextColor: ho,
      getLineHeight: oo,
      getLineHeightFactor: co,
      getLineWidth: so,
      write: ke,
      getHorizontalCoordinate: xr,
      getVerticalCoordinate: Nr,
      getCoordinateString: uo,
      getVerticalCoordinateString: fo,
      collections: {},
      newObject: Dt,
      newAdditionalObject: oi,
      newObjectDeferred: an,
      newObjectDeferredBegin: on,
      getFilters: Yn,
      putStream: Tn,
      events: xt,
      scaleFactor: rt,
      pageSize: {
        getWidth: function() {
          return Sr(T);
        },
        setWidth: function(c) {
          rs(T, c);
        },
        getHeight: function() {
          return pi(T);
        },
        setHeight: function(c) {
          is(T, c);
        }
      },
      encryptionOptions: g,
      encryption: Zt,
      getEncryptor: function(c) {
        return g !== null ? Zt.encryptor(c, 0) : function(b) {
          return b;
        };
      },
      output: Ya,
      getNumberOfPages: Va,
      get pages() {
        return Le;
      },
      out: P,
      f2: L,
      f3: O,
      getPageInfo: yr,
      getPageInfoByObjId: Ja,
      getCurrentPageInfo: eo,
      getPDFVersion: M,
      Point: Ar,
      Rectangle: ha,
      Matrix: Ke,
      hasHotfix: qn
    }, Object.defineProperty(p.internal.pageSize, "width", {
      get: function() {
        return Sr(T);
      },
      set: function(c) {
        rs(T, c);
      },
      enumerable: true,
      configurable: true
    }), Object.defineProperty(p.internal.pageSize, "height", {
      get: function() {
        return pi(T);
      },
      set: function(c) {
        is(T, c);
      },
      enumerable: true,
      configurable: true
    }), (function(c) {
      for (var b = 0, F = Ge.length; b < F; b++) {
        var z = Ha.call(this, c[b][0], c[b][1], c[b][2], Ge[b][3], true);
        w === false && (S[z] = true);
        var Z = c[b][0].split("-");
        za({
          id: z,
          fontName: Z[0],
          fontStyle: Z[1] || ""
        });
      }
      xt.publish("addFonts", {
        fonts: lt,
        dictionary: ct
      });
    }).call(p, Ge), Oe = "F1", Wa(s, t), xt.publish("initialized"), p;
  }
  Yi.prototype.lsbFirstWord = function(n) {
    return String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
  }, Yi.prototype.toHexString = function(n) {
    return n.split("").map(function(e) {
      return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
    }).join("");
  }, Yi.prototype.hexToBytes = function(n) {
    for (var e = [], t = 0; t < n.length; t += 2) e.push(String.fromCharCode(parseInt(n.substr(t, 2), 16)));
    return e.join("");
  }, Yi.prototype.processOwnerPassword = function(n, e) {
    return cl(ll(e).substr(0, 5), n);
  }, Yi.prototype.encryptor = function(n, e) {
    var t = ll(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(r) {
      return cl(t, r);
    };
  }, Hs.prototype.equals = function(n) {
    var e, t = "id,objectNumber,equals";
    if (!n || Lt(n) !== Lt(this)) return false;
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
  var qt = Be.API, _l = 1, ji = function(n) {
    return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, $i = function(n) {
    return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
  }, Ws = function(n) {
    return n.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(e) {
      var t = e.charCodeAt(0).toString(16).toUpperCase();
      return "#" + (t.length === 1 ? "0" + t : t);
    });
  }, Qe = function(n) {
    return n.toFixed(2);
  }, ti = function(n) {
    return n.toFixed(5);
  };
  qt.__acroform__ = {};
  var Sn = function(n, e) {
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n;
  }, nu = function(n) {
    return n * _l;
  }, pr = function(n) {
    var e = new rh(), t = Ee.internal.getHeight(n) || 0, r = Ee.internal.getWidth(n) || 0;
    return e.BBox = [
      0,
      0,
      Number(Qe(r)),
      Number(Qe(t))
    ], e;
  }, b0 = qt.__acroform__.setBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    return n | 1 << e;
  }, v0 = qt.__acroform__.clearBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    return n & ~(1 << e);
  }, w0 = qt.__acroform__.getBit = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return n & 1 << e ? 1 : 0;
  }, Vt = qt.__acroform__.getBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return w0(n, e - 1);
  }, $t = qt.__acroform__.setBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return b0(n, e - 1);
  }, Kt = qt.__acroform__.clearBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return v0(n, e - 1);
  }, y0 = qt.__acroform__.calculateCoordinates = function(n, e) {
    var t = e.internal.getHorizontalCoordinate, r = e.internal.getVerticalCoordinate, s = n[0], a = n[1], h = n[2], l = n[3], u = {};
    return u.lowerLeft_X = t(s) || 0, u.lowerLeft_Y = r(a + l) || 0, u.upperRight_X = t(s + h) || 0, u.upperRight_Y = r(a) || 0, [
      Number(Qe(u.lowerLeft_X)),
      Number(Qe(u.lowerLeft_Y)),
      Number(Qe(u.upperRight_X)),
      Number(Qe(u.upperRight_Y))
    ];
  }, x0 = function(n) {
    if (n.appearanceStreamContent) return n.appearanceStreamContent;
    if (n.V || n.DV) {
      var e = [], t = n._V || n.DV, r = ul(n, t), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
      e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(n.scope.__private__.encodeColorString(n.color)), e.push("/" + s + " " + Qe(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
      var a = pr(n);
      return a.scope = n.scope, a.stream = e.join(`
`), a;
    }
  }, ul = function(n, e) {
    var t = n.fontSize === 0 ? n.maxFontSize : n.fontSize, r = {
      text: "",
      fontSize: ""
    }, s = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
    s = n.multiline ? s.map(function(L) {
      return L.split(`
`);
    }) : s.map(function(L) {
      return [
        L
      ];
    });
    var a = t, h = Ee.internal.getHeight(n) || 0;
    h = h < 0 ? -h : h;
    var l = Ee.internal.getWidth(n) || 0;
    l = l < 0 ? -l : l;
    var u = function(L, O, R) {
      if (L + 1 < s.length) {
        var B = O + " " + s[L + 1][0];
        return Is(B, n, R).width <= l - 4;
      }
      return false;
    };
    a++;
    e: for (; a > 0; ) {
      e = "", a--;
      var d, g, w = Is("3", n, a).height, S = n.multiline ? h - a : (h - w) / 2, p = S += 2, I = 0, M = 0, D = 0;
      if (a <= 0) {
        e = `(...) Tj
`, e += "% Width of Text: " + Is(e, n, a = 12).width + ", FieldWidth:" + l + `
`;
        break;
      }
      for (var _ = "", W = 0, V = 0; V < s.length; V++) if (s.hasOwnProperty(V)) {
        var q = false;
        if (s[V].length !== 1 && D !== s[V].length - 1) {
          if ((w + 2) * (W + 2) + 2 > h) continue e;
          _ += s[V][D], q = true, M = V, V--;
        } else {
          _ = (_ += s[V][D] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
          var le = parseInt(V), xe = u(le, _, a), ge = V >= s.length - 1;
          if (xe && !ge) {
            _ += " ", D = 0;
            continue;
          }
          if (xe || ge) {
            if (ge) M = le;
            else if (n.multiline && (w + 2) * (W + 2) + 2 > h) continue e;
          } else {
            if (!n.multiline || (w + 2) * (W + 2) + 2 > h) continue e;
            M = le;
          }
        }
        for (var ee = "", H = I; H <= M; H++) {
          var ie = s[H];
          if (n.multiline) {
            if (H === M) {
              ee += ie[D] + " ", D = (D + 1) % ie.length;
              continue;
            }
            if (H === I) {
              ee += ie[ie.length - 1] + " ";
              continue;
            }
          }
          ee += ie[0] + " ";
        }
        switch (ee = ee.substr(ee.length - 1) == " " ? ee.substr(0, ee.length - 1) : ee, g = Is(ee, n, a).width, n.textAlign) {
          case "right":
            d = l - g - 2;
            break;
          case "center":
            d = (l - g) / 2;
            break;
          default:
            d = 2;
        }
        e += Qe(d) + " " + Qe(p) + ` Td
`, e += "(" + ji(ee) + `) Tj
`, e += -Qe(d) + ` 0 Td
`, p = -(a + 2), g = 0, I = q ? M : M + 1, W++, _ = "";
      }
      break;
    }
    return r.text = e, r.fontSize = a, r;
  }, Is = function(n, e, t) {
    var r = e.scope.internal.getFont(e.fontName, e.fontStyle), s = e.scope.getStringUnitWidth(n, {
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
      width: s
    };
  }, N0 = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: false,
    internal: null,
    isInitialized: false
  }, _0 = function(n, e) {
    var t = {
      type: "reference",
      object: n
    };
    e.internal.getPageInfo(n.page).pageContext.annotations.find(function(r) {
      return r.type === t.type && r.object === t.object;
    }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(t);
  }, A0 = function(n, e) {
    if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === false)) {
      if (nr.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(N0)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
      _l = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new ih(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
        (function(t) {
          t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = true;
        })(n);
      }), n.internal.events.subscribe("buildDocument", function() {
        (function(t) {
          t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
          var r = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
          for (var s in r) if (r.hasOwnProperty(s)) {
            var a = r[s];
            a.objId = void 0, a.hasAnnotation && _0(a, t);
          }
        })(n);
      }), n.internal.events.subscribe("putCatalog", function() {
        (function(t) {
          if (t.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
          t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
        })(n);
      }), n.internal.events.subscribe("postPutPages", function(t) {
        (function(r, s) {
          var a = !r;
          for (var h in r || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), r = r || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (r.hasOwnProperty(h)) {
            var l = r[h], u = [], d = l.Rect;
            if (l.Rect && (l.Rect = y0(l.Rect, s)), s.internal.newObjectDeferredBegin(l.objId, true), l.DA = Ee.createDefaultAppearanceStream(l), Lt(l) === "object" && typeof l.getKeyValueListForStream == "function" && (u = l.getKeyValueListForStream()), l.Rect = d, l.hasAppearanceStream && !l.appearanceStreamContent) {
              var g = x0(l);
              u.push({
                key: "AP",
                value: "<</N " + g + ">>"
              }), s.internal.acroformPlugin.xForms.push(g);
            }
            if (l.appearanceStreamContent) {
              var w = "";
              for (var S in l.appearanceStreamContent) if (l.appearanceStreamContent.hasOwnProperty(S)) {
                var p = l.appearanceStreamContent[S];
                if (w += "/" + S + " ", w += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                  for (var h in p) if (p.hasOwnProperty(h)) {
                    var I = p[h];
                    typeof I == "function" && (I = I.call(s, l)), w += "/" + h + " " + I + " ", s.internal.acroformPlugin.xForms.indexOf(I) >= 0 || s.internal.acroformPlugin.xForms.push(I);
                  }
                } else typeof (I = p) == "function" && (I = I.call(s, l)), w += "/" + h + " " + I, s.internal.acroformPlugin.xForms.indexOf(I) >= 0 || s.internal.acroformPlugin.xForms.push(I);
                w += ">>";
              }
              u.push({
                key: "AP",
                value: `<<
` + w + ">>"
              });
            }
            s.internal.putStream({
              additionalKeyValues: u,
              objectId: l.objId
            }), s.internal.out("endobj");
          }
          a && function(M, D) {
            for (var _ in M) if (M.hasOwnProperty(_)) {
              var W = _, V = M[_];
              D.internal.newObjectDeferredBegin(V.objId, true), Lt(V) === "object" && typeof V.putStream == "function" && V.putStream(), delete M[W];
            }
          }(s.internal.acroformPlugin.xForms, s);
        })(t, n);
      }), n.internal.acroformPlugin.isInitialized = true;
    }
  }, nh = qt.__acroform__.arrayToPdfArray = function(n, e, t) {
    var r = function(h) {
      return h;
    };
    if (Array.isArray(n)) {
      for (var s = "[", a = 0; a < n.length; a++) switch (a !== 0 && (s += " "), Lt(n[a])) {
        case "boolean":
        case "number":
        case "object":
          s += n[a].toString();
          break;
        case "string":
          n[a].substr(0, 1) === "/" ? s += "/" + Ws(n[a].substr(1)) : (e !== void 0 && t && (r = t.internal.getEncryptor(e)), s += "(" + ji(r(n[a].toString())) + ")");
      }
      return s + "]";
    }
    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
  }, Ko = function(n, e, t) {
    var r = function(s) {
      return s;
    };
    return e !== void 0 && t && (r = t.internal.getEncryptor(e)), (n = n || "").toString(), "(" + ji(r(n)) + ")";
  }, mr = function() {
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
  mr.prototype.toString = function() {
    return this.objId + " 0 R";
  }, mr.prototype.putStream = function() {
    var n = this.getKeyValueListForStream();
    this.scope.internal.putStream({
      data: this.stream,
      additionalKeyValues: n,
      objectId: this.objId
    }), this.scope.internal.out("endobj");
  }, mr.prototype.getKeyValueListForStream = function() {
    var n = [], e = Object.getOwnPropertyNames(this).filter(function(a) {
      return a != "content" && a != "appearanceStreamContent" && a != "scope" && a != "objId" && a.substring(0, 1) != "_";
    });
    for (var t in e) if (Object.getOwnPropertyDescriptor(this, e[t]).configurable === false) {
      var r = e[t], s = this[r];
      s && (Array.isArray(s) ? n.push({
        key: r,
        value: nh(s, this.objId, this.scope)
      }) : s instanceof mr ? (s.scope = this.scope, n.push({
        key: r,
        value: s.objId + " 0 R"
      })) : typeof s != "function" && n.push({
        key: r,
        value: s
      }));
    }
    return n;
  };
  var rh = function() {
    mr.call(this), Object.defineProperty(this, "Type", {
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
  Sn(rh, mr);
  var ih = function() {
    mr.call(this);
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
          return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + ji(t(n)) + ")";
        }
      },
      set: function(t) {
        n = t;
      }
    });
  };
  Sn(ih, mr);
  var nr = function n() {
    mr.call(this);
    var e = 4;
    Object.defineProperty(this, "F", {
      enumerable: false,
      configurable: false,
      get: function() {
        return e;
      },
      set: function(_) {
        if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
        e = _;
      }
    }), Object.defineProperty(this, "showWhenPrinted", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(e, 3);
      },
      set: function(_) {
        _ ? this.F = $t(e, 3) : this.F = Kt(e, 3);
      }
    });
    var t = 0;
    Object.defineProperty(this, "Ff", {
      enumerable: false,
      configurable: false,
      get: function() {
        return t;
      },
      set: function(_) {
        if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
        t = _;
      }
    });
    var r = [];
    Object.defineProperty(this, "Rect", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (r.length !== 0) return r;
      },
      set: function(_) {
        r = _ !== void 0 ? _ : [];
      }
    }), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[0]) ? 0 : r[0];
      },
      set: function(_) {
        r[0] = _;
      }
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[1]) ? 0 : r[1];
      },
      set: function(_) {
        r[1] = _;
      }
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[2]) ? 0 : r[2];
      },
      set: function(_) {
        r[2] = _;
      }
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[3]) ? 0 : r[3];
      },
      set: function(_) {
        r[3] = _;
      }
    });
    var s = "";
    Object.defineProperty(this, "FT", {
      enumerable: true,
      configurable: false,
      get: function() {
        return s;
      },
      set: function(_) {
        switch (_) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            s = _;
            break;
          default:
            throw new Error('Invalid value "' + _ + '" for attribute FT supplied.');
        }
      }
    });
    var a = null;
    Object.defineProperty(this, "T", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!a || a.length < 1) {
          if (this instanceof Gs) return;
          a = "FieldObject" + n.FieldNum++;
        }
        var _ = function(W) {
          return W;
        };
        return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), "(" + ji(_(a)) + ")";
      },
      set: function(_) {
        a = _.toString();
      }
    }), Object.defineProperty(this, "fieldName", {
      configurable: true,
      enumerable: true,
      get: function() {
        return a;
      },
      set: function(_) {
        a = _;
      }
    });
    var h = "helvetica";
    Object.defineProperty(this, "fontName", {
      enumerable: true,
      configurable: true,
      get: function() {
        return h;
      },
      set: function(_) {
        h = _;
      }
    });
    var l = "normal";
    Object.defineProperty(this, "fontStyle", {
      enumerable: true,
      configurable: true,
      get: function() {
        return l;
      },
      set: function(_) {
        l = _;
      }
    });
    var u = 0;
    Object.defineProperty(this, "fontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return u;
      },
      set: function(_) {
        u = _;
      }
    });
    var d = void 0;
    Object.defineProperty(this, "maxFontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return d === void 0 ? 50 / _l : d;
      },
      set: function(_) {
        d = _;
      }
    });
    var g = "black";
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      get: function() {
        return g;
      },
      set: function(_) {
        g = _;
      }
    });
    var w = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!(!w || this instanceof Gs || this instanceof Si)) return Ko(w, this.objId, this.scope);
      },
      set: function(_) {
        _ = _.toString(), w = _;
      }
    });
    var S = null;
    Object.defineProperty(this, "DV", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (S) return this instanceof sn == 0 ? Ko(S, this.objId, this.scope) : S;
      },
      set: function(_) {
        _ = _.toString(), S = this instanceof sn == 0 ? _.substr(0, 1) === "(" ? $i(_.substr(1, _.length - 2)) : $i(_) : _;
      }
    }), Object.defineProperty(this, "defaultValue", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof sn == 1 ? $i(S.substr(1, S.length - 1)) : S;
      },
      set: function(_) {
        _ = _.toString(), S = this instanceof sn == 1 ? "/" + Ws(_) : _;
      }
    });
    var p = null;
    Object.defineProperty(this, "_V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return p;
      },
      set: function(_) {
        this.V = _;
      }
    }), Object.defineProperty(this, "V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return this instanceof sn == 0 ? Ko(p, this.objId, this.scope) : p;
      },
      set: function(_) {
        _ = _.toString(), p = this instanceof sn == 0 ? _.substr(0, 1) === "(" ? $i(_.substr(1, _.length - 2)) : $i(_) : _;
      }
    }), Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof sn == 1 ? $i(p.substr(1, p.length - 1)) : p;
      },
      set: function(_) {
        _ = _.toString(), p = this instanceof sn == 1 ? "/" + Ws(_) : _;
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
    var I, M = false;
    Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: true,
      configurable: true,
      get: function() {
        return M;
      },
      set: function(_) {
        _ = !!_, M = _;
      }
    }), Object.defineProperty(this, "page", {
      enumerable: true,
      configurable: true,
      get: function() {
        if (I) return I;
      },
      set: function(_) {
        I = _;
      }
    }), Object.defineProperty(this, "readOnly", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 1);
      },
      set: function(_) {
        _ ? this.Ff = $t(this.Ff, 1) : this.Ff = Kt(this.Ff, 1);
      }
    }), Object.defineProperty(this, "required", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 2);
      },
      set: function(_) {
        _ ? this.Ff = $t(this.Ff, 2) : this.Ff = Kt(this.Ff, 2);
      }
    }), Object.defineProperty(this, "noExport", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 3);
      },
      set: function(_) {
        _ ? this.Ff = $t(this.Ff, 3) : this.Ff = Kt(this.Ff, 3);
      }
    });
    var D = null;
    Object.defineProperty(this, "Q", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (D !== null) return D;
      },
      set: function(_) {
        if ([
          0,
          1,
          2
        ].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
        D = _;
      }
    }), Object.defineProperty(this, "textAlign", {
      get: function() {
        var _;
        switch (D) {
          case 0:
          default:
            _ = "left";
            break;
          case 1:
            _ = "center";
            break;
          case 2:
            _ = "right";
        }
        return _;
      },
      configurable: true,
      enumerable: true,
      set: function(_) {
        switch (_) {
          case "right":
          case 2:
            D = 2;
            break;
          case "center":
          case 1:
            D = 1;
            break;
          default:
            D = 0;
        }
      }
    });
  };
  Sn(nr, mr);
  var Zi = function() {
    nr.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
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
        return nh(e, this.objId, this.scope);
      },
      set: function(t) {
        var r, s;
        s = [], typeof (r = t) == "string" && (s = function(a, h, l) {
          l || (l = 1);
          for (var u, d = []; u = h.exec(a); ) d.push(u[l]);
          return d;
        }(r, /\((.*?)\)/g)), e = s;
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
        t ? this.Ff = $t(this.Ff, 18) : this.Ff = Kt(this.Ff, 18);
      }
    }), Object.defineProperty(this, "edit", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 19);
      },
      set: function(t) {
        this.combo === true && (t ? this.Ff = $t(this.Ff, 19) : this.Ff = Kt(this.Ff, 19));
      }
    }), Object.defineProperty(this, "sort", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 20);
      },
      set: function(t) {
        t ? (this.Ff = $t(this.Ff, 20), e.sort()) : this.Ff = Kt(this.Ff, 20);
      }
    }), Object.defineProperty(this, "multiSelect", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 22);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 22) : this.Ff = Kt(this.Ff, 22);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 23);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 23) : this.Ff = Kt(this.Ff, 23);
      }
    }), Object.defineProperty(this, "commitOnSelChange", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 27);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 27) : this.Ff = Kt(this.Ff, 27);
      }
    }), this.hasAppearanceStream = false;
  };
  Sn(Zi, nr);
  var Qi = function() {
    Zi.call(this), this.fontName = "helvetica", this.combo = false;
  };
  Sn(Qi, Zi);
  var ea = function() {
    Qi.call(this), this.combo = true;
  };
  Sn(ea, Qi);
  var Os = function() {
    ea.call(this), this.edit = true;
  };
  Sn(Os, ea);
  var sn = function() {
    nr.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 15);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 15) : this.Ff = Kt(this.Ff, 15);
      }
    }), Object.defineProperty(this, "radio", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 16);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 16) : this.Ff = Kt(this.Ff, 16);
      }
    }), Object.defineProperty(this, "pushButton", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 17);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 17) : this.Ff = Kt(this.Ff, 17);
      }
    }), Object.defineProperty(this, "radioIsUnison", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 26);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 26) : this.Ff = Kt(this.Ff, 26);
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
          var r, s = [];
          for (r in s.push("<<"), e) s.push("/" + r + " (" + ji(t(e[r])) + ")");
          return s.push(">>"), s.join(`
`);
        }
      },
      set: function(t) {
        Lt(t) === "object" && (e = t);
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
        n = "/" + Ws(t);
      }
    });
  };
  Sn(sn, nr);
  var Ds = function() {
    sn.call(this), this.pushButton = true;
  };
  Sn(Ds, sn);
  var ta = function() {
    sn.call(this), this.radio = true, this.pushButton = false;
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
  Sn(ta, sn);
  var Gs = function() {
    var n, e;
    nr.call(this), Object.defineProperty(this, "Parent", {
      enumerable: false,
      configurable: false,
      get: function() {
        return n;
      },
      set: function(s) {
        n = s;
      }
    }), Object.defineProperty(this, "optionName", {
      enumerable: false,
      configurable: true,
      get: function() {
        return e;
      },
      set: function(s) {
        e = s;
      }
    });
    var t, r = {};
    Object.defineProperty(this, "MK", {
      enumerable: false,
      configurable: false,
      get: function() {
        var s = function(l) {
          return l;
        };
        this.scope && (s = this.scope.internal.getEncryptor(this.objId));
        var a, h = [];
        for (a in h.push("<<"), r) h.push("/" + a + " (" + ji(s(r[a])) + ")");
        return h.push(">>"), h.join(`
`);
      },
      set: function(s) {
        Lt(s) === "object" && (r = s);
      }
    }), Object.defineProperty(this, "caption", {
      enumerable: true,
      configurable: true,
      get: function() {
        return r.CA || "";
      },
      set: function(s) {
        typeof s == "string" && (r.CA = s);
      }
    }), Object.defineProperty(this, "AS", {
      enumerable: false,
      configurable: false,
      get: function() {
        return t;
      },
      set: function(s) {
        t = s;
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: true,
      configurable: true,
      get: function() {
        return t.substr(1, t.length - 1);
      },
      set: function(s) {
        t = "/" + s;
      }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ee.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
  };
  Sn(Gs, nr), ta.prototype.setAppearance = function(n) {
    if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
      var t = this.Kids[e];
      t.appearanceStreamContent = n.createAppearanceStream(t.optionName), t.caption = n.getCA();
    }
  }, ta.prototype.createOption = function(n) {
    var e = new Gs();
    return e.Parent = this, e.optionName = n, this.Kids.push(e), L0.call(this.scope, e), e;
  };
  var Ts = function() {
    sn.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ee.CheckBox.createAppearanceStream();
  };
  Sn(Ts, sn);
  var Si = function() {
    nr.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 13);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 13) : this.Ff = Kt(this.Ff, 13);
      }
    }), Object.defineProperty(this, "fileSelect", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 21);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 21) : this.Ff = Kt(this.Ff, 21);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 23);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 23) : this.Ff = Kt(this.Ff, 23);
      }
    }), Object.defineProperty(this, "doNotScroll", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 24);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 24) : this.Ff = Kt(this.Ff, 24);
      }
    }), Object.defineProperty(this, "comb", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 25);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 25) : this.Ff = Kt(this.Ff, 25);
      }
    }), Object.defineProperty(this, "richText", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 26);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 26) : this.Ff = Kt(this.Ff, 26);
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
  Sn(Si, nr);
  var Bs = function() {
    Si.call(this), Object.defineProperty(this, "password", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Vt(this.Ff, 14);
      },
      set: function(n) {
        n ? this.Ff = $t(this.Ff, 14) : this.Ff = Kt(this.Ff, 14);
      }
    }), this.password = true;
  };
  Sn(Bs, Si);
  var Ee = {
    CheckBox: {
      createAppearanceStream: function() {
        return {
          N: {
            On: Ee.CheckBox.YesNormal
          },
          D: {
            On: Ee.CheckBox.YesPushDown,
            Off: Ee.CheckBox.OffPushDown
          }
        };
      },
      YesPushDown: function(n) {
        var e = pr(n);
        e.scope = n.scope;
        var t = [], r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), a = ul(n, n.caption);
        return t.push("0.749023 g"), t.push("0 0 " + Qe(Ee.internal.getWidth(n)) + " " + Qe(Ee.internal.getHeight(n)) + " re"), t.push("f"), t.push("BMC"), t.push("q"), t.push("0 0 1 rg"), t.push("/" + r + " " + Qe(a.fontSize) + " Tf " + s), t.push("BT"), t.push(a.text), t.push("ET"), t.push("Q"), t.push("EMC"), e.stream = t.join(`
`), e;
      },
      YesNormal: function(n) {
        var e = pr(n);
        e.scope = n.scope;
        var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color), s = [], a = Ee.internal.getHeight(n), h = Ee.internal.getWidth(n), l = ul(n, n.caption);
        return s.push("1 g"), s.push("0 0 " + Qe(h) + " " + Qe(a) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + Qe(h - 1) + " " + Qe(a - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + t + " " + Qe(l.fontSize) + " Tf " + r), s.push(l.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e;
      },
      OffPushDown: function(n) {
        var e = pr(n);
        e.scope = n.scope;
        var t = [];
        return t.push("0.749023 g"), t.push("0 0 " + Qe(Ee.internal.getWidth(n)) + " " + Qe(Ee.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
      }
    },
    RadioButton: {
      Circle: {
        createAppearanceStream: function(n) {
          var e = {
            D: {
              Off: Ee.RadioButton.Circle.OffPushDown
            },
            N: {}
          };
          return e.N[n] = Ee.RadioButton.Circle.YesNormal, e.D[n] = Ee.RadioButton.Circle.YesPushDown, e;
        },
        getCA: function() {
          return "l";
        },
        YesNormal: function(n) {
          var e = pr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.getWidth(n) <= Ee.internal.getHeight(n) ? Ee.internal.getWidth(n) / 4 : Ee.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Ee.internal.Bezier_C, a = Number((r * s).toFixed(5));
          return t.push("q"), t.push("1 0 0 1 " + ti(Ee.internal.getWidth(n) / 2) + " " + ti(Ee.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), t.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), t.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), t.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = pr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.getWidth(n) <= Ee.internal.getHeight(n) ? Ee.internal.getWidth(n) / 4 : Ee.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Number((2 * r).toFixed(5)), a = Number((s * Ee.internal.Bezier_C).toFixed(5)), h = Number((r * Ee.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ti(Ee.internal.getWidth(n) / 2) + " " + ti(Ee.internal.getHeight(n) / 2) + " cm"), t.push(s + " 0 m"), t.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), t.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), t.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), t.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), t.push("f"), t.push("Q"), t.push("0 g"), t.push("q"), t.push("1 0 0 1 " + ti(Ee.internal.getWidth(n) / 2) + " " + ti(Ee.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + h + " " + h + " " + r + " 0 " + r + " c"), t.push("-" + h + " " + r + " -" + r + " " + h + " -" + r + " 0 c"), t.push("-" + r + " -" + h + " -" + h + " -" + r + " 0 -" + r + " c"), t.push(h + " -" + r + " " + r + " -" + h + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = pr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.getWidth(n) <= Ee.internal.getHeight(n) ? Ee.internal.getWidth(n) / 4 : Ee.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Number((2 * r).toFixed(5)), a = Number((s * Ee.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ti(Ee.internal.getWidth(n) / 2) + " " + ti(Ee.internal.getHeight(n) / 2) + " cm"), t.push(s + " 0 m"), t.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), t.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), t.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), t.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        }
      },
      Cross: {
        createAppearanceStream: function(n) {
          var e = {
            D: {
              Off: Ee.RadioButton.Cross.OffPushDown
            },
            N: {}
          };
          return e.N[n] = Ee.RadioButton.Cross.YesNormal, e.D[n] = Ee.RadioButton.Cross.YesPushDown, e;
        },
        getCA: function() {
          return "8";
        },
        YesNormal: function(n) {
          var e = pr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.calculateCross(n);
          return t.push("q"), t.push("1 1 " + Qe(Ee.internal.getWidth(n) - 2) + " " + Qe(Ee.internal.getHeight(n) - 2) + " re"), t.push("W"), t.push("n"), t.push(Qe(r.x1.x) + " " + Qe(r.x1.y) + " m"), t.push(Qe(r.x2.x) + " " + Qe(r.x2.y) + " l"), t.push(Qe(r.x4.x) + " " + Qe(r.x4.y) + " m"), t.push(Qe(r.x3.x) + " " + Qe(r.x3.y) + " l"), t.push("s"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = pr(n);
          e.scope = n.scope;
          var t = Ee.internal.calculateCross(n), r = [];
          return r.push("0.749023 g"), r.push("0 0 " + Qe(Ee.internal.getWidth(n)) + " " + Qe(Ee.internal.getHeight(n)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + Qe(Ee.internal.getWidth(n) - 2) + " " + Qe(Ee.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(Qe(t.x1.x) + " " + Qe(t.x1.y) + " m"), r.push(Qe(t.x2.x) + " " + Qe(t.x2.y) + " l"), r.push(Qe(t.x4.x) + " " + Qe(t.x4.y) + " m"), r.push(Qe(t.x3.x) + " " + Qe(t.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = pr(n);
          e.scope = n.scope;
          var t = [];
          return t.push("0.749023 g"), t.push("0 0 " + Qe(Ee.internal.getWidth(n)) + " " + Qe(Ee.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
        }
      }
    },
    createDefaultAppearanceStream: function(n) {
      var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, t = n.scope.__private__.encodeColorString(n.color);
      return "/" + e + " " + n.fontSize + " Tf " + t;
    }
  };
  Ee.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function(n) {
      var e = Ee.internal.getWidth(n), t = Ee.internal.getHeight(n), r = Math.min(e, t);
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
  }, Ee.internal.getWidth = function(n) {
    var e = 0;
    return Lt(n) === "object" && (e = nu(n.Rect[2])), e;
  }, Ee.internal.getHeight = function(n) {
    var e = 0;
    return Lt(n) === "object" && (e = nu(n.Rect[3])), e;
  };
  var L0 = qt.addField = function(n) {
    if (A0(this, n), !(n instanceof nr)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = false, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
  };
  qt.AcroFormChoiceField = Zi, qt.AcroFormListBox = Qi, qt.AcroFormComboBox = ea, qt.AcroFormEditBox = Os, qt.AcroFormButton = sn, qt.AcroFormPushButton = Ds, qt.AcroFormRadioButton = ta, qt.AcroFormCheckBox = Ts, qt.AcroFormTextField = Si, qt.AcroFormPasswordField = Bs, qt.AcroFormAppearance = Ee, qt.AcroForm = {
    ChoiceField: Zi,
    ListBox: Qi,
    ComboBox: ea,
    EditBox: Os,
    Button: sn,
    PushButton: Ds,
    RadioButton: ta,
    CheckBox: Ts,
    TextField: Si,
    PasswordField: Bs,
    Appearance: Ee
  }, Be.AcroForm = {
    ChoiceField: Zi,
    ListBox: Qi,
    ComboBox: ea,
    EditBox: Os,
    Button: sn,
    PushButton: Ds,
    RadioButton: ta,
    CheckBox: Ts,
    TextField: Si,
    PasswordField: Bs,
    Appearance: Ee
  };
  Be.AcroForm;
  function ah(n) {
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
    }, s = n.__addimage__.getImageFileTypeByImageData = function(L, O) {
      var R, B, te, se, oe, Y = t;
      if ((O = O || t) === "RGBA" || L.data !== void 0 && L.data instanceof Uint8ClampedArray && "height" in L && "width" in L) return "RGBA";
      if (xe(L)) for (oe in r) for (te = r[oe], R = 0; R < te.length; R += 1) {
        for (se = true, B = 0; B < te[R].length; B += 1) if (te[R][B] !== void 0 && te[R][B] !== L[B]) {
          se = false;
          break;
        }
        if (se === true) {
          Y = oe;
          break;
        }
      }
      else for (oe in r) for (te = r[oe], R = 0; R < te.length; R += 1) {
        for (se = true, B = 0; B < te[R].length; B += 1) if (te[R][B] !== void 0 && te[R][B] !== L.charCodeAt(B)) {
          se = false;
          break;
        }
        if (se === true) {
          Y = oe;
          break;
        }
      }
      return Y === t && O !== t && (Y = O), Y;
    }, a = function L(O) {
      for (var R = this.internal.write, B = this.internal.putStream, te = (0, this.internal.getFilters)(); te.indexOf("FlateEncode") !== -1; ) te.splice(te.indexOf("FlateEncode"), 1);
      O.objectId = this.internal.newObject();
      var se = [];
      if (se.push({
        key: "Type",
        value: "/XObject"
      }), se.push({
        key: "Subtype",
        value: "/Image"
      }), se.push({
        key: "Width",
        value: O.width
      }), se.push({
        key: "Height",
        value: O.height
      }), O.colorSpace === _.INDEXED ? se.push({
        key: "ColorSpace",
        value: "[/Indexed /DeviceRGB " + (O.palette.length / 3 - 1) + " " + ("sMask" in O && O.sMask !== void 0 ? O.objectId + 2 : O.objectId + 1) + " 0 R]"
      }) : (se.push({
        key: "ColorSpace",
        value: "/" + O.colorSpace
      }), O.colorSpace === _.DEVICE_CMYK && se.push({
        key: "Decode",
        value: "[1 0 1 0 1 0 1 0]"
      })), se.push({
        key: "BitsPerComponent",
        value: O.bitsPerComponent
      }), "decodeParameters" in O && O.decodeParameters !== void 0 && se.push({
        key: "DecodeParms",
        value: "<<" + O.decodeParameters + ">>"
      }), "transparency" in O && Array.isArray(O.transparency) && O.transparency.length > 0) {
        for (var oe = "", Y = 0, X = O.transparency.length; Y < X; Y++) oe += O.transparency[Y] + " " + O.transparency[Y] + " ";
        se.push({
          key: "Mask",
          value: "[" + oe + "]"
        });
      }
      O.sMask !== void 0 && se.push({
        key: "SMask",
        value: O.objectId + 1 + " 0 R"
      });
      var _e = O.filter !== void 0 ? [
        "/" + O.filter
      ] : void 0;
      if (B({
        data: O.data,
        additionalKeyValues: se,
        alreadyAppliedFilters: _e,
        objectId: O.objectId
      }), R("endobj"), "sMask" in O && O.sMask !== void 0) {
        var de, x = (de = O.sMaskBitsPerComponent) !== null && de !== void 0 ? de : O.bitsPerComponent, T = {
          width: O.width,
          height: O.height,
          colorSpace: "DeviceGray",
          bitsPerComponent: x,
          data: O.sMask
        };
        "filter" in O && (T.decodeParameters = "/Predictor ".concat(O.predictor, " /Colors 1 /BitsPerComponent ").concat(x, " /Columns ").concat(O.width), T.filter = O.filter), L.call(this, T);
      }
      if (O.colorSpace === _.INDEXED) {
        var U = this.internal.newObject();
        B({
          data: ee(new Uint8Array(O.palette)),
          objectId: U
        }), R("endobj");
      }
    }, h = function() {
      var L = this.internal.collections[e + "images"];
      for (var O in L) a.call(this, L[O]);
    }, l = function() {
      var L, O = this.internal.collections[e + "images"], R = this.internal.write;
      for (var B in O) R("/I" + (L = O[B]).index, L.objectId, "0", "R");
    }, u = function() {
      this.internal.collections[e + "images"] || (this.internal.collections[e + "images"] = {}, this.internal.events.subscribe("putResources", h), this.internal.events.subscribe("putXobjectDict", l));
    }, d = function() {
      var L = this.internal.collections[e + "images"];
      return u.call(this), L;
    }, g = function() {
      return Object.keys(this.internal.collections[e + "images"]).length;
    }, w = function(L) {
      return typeof n["process" + L.toUpperCase()] == "function";
    }, S = function(L) {
      return Lt(L) === "object" && L.nodeType === 1;
    }, p = function(L, O) {
      if (L.nodeName === "IMG" && L.hasAttribute("src")) {
        var R = "" + L.getAttribute("src");
        if (R.indexOf("data:image/") === 0) return Rs(unescape(R).split("base64,").pop());
        var B = n.loadFile(R, true);
        if (B !== void 0) return B;
      }
      if (L.nodeName === "CANVAS") {
        if (L.width === 0 || L.height === 0) throw new Error("Given canvas must have data. Canvas width: " + L.width + ", height: " + L.height);
        var te;
        switch (O) {
          case "PNG":
            te = "image/png";
            break;
          case "WEBP":
            te = "image/webp";
            break;
          default:
            te = "image/jpeg";
        }
        return Rs(L.toDataURL(te, 1).split("base64,").pop());
      }
    }, I = function(L) {
      var O = this.internal.collections[e + "images"];
      if (O) {
        for (var R in O) if (L === O[R].alias) return O[R];
      }
    }, M = function(L, O, R) {
      return L || O || (L = -96, O = -96), L < 0 && (L = -1 * R.width * 72 / L / this.internal.scaleFactor), O < 0 && (O = -1 * R.height * 72 / O / this.internal.scaleFactor), L === 0 && (L = O * R.width / R.height), O === 0 && (O = L * R.height / R.width), [
        L,
        O
      ];
    }, D = function(L, O, R, B, te, se) {
      var oe = M.call(this, R, B, te), Y = this.internal.getCoordinateString, X = this.internal.getVerticalCoordinateString, _e = d.call(this);
      if (R = oe[0], B = oe[1], _e[te.index] = te, se) {
        se *= Math.PI / 180;
        var de = Math.cos(se), x = Math.sin(se), T = function($) {
          return $.toFixed(4);
        }, U = [
          T(de),
          T(x),
          T(-1 * x),
          T(de),
          0,
          0,
          "cm"
        ];
      }
      this.internal.write("q"), se ? (this.internal.write([
        1,
        "0",
        "0",
        1,
        Y(L),
        X(O + B),
        "cm"
      ].join(" ")), this.internal.write(U.join(" ")), this.internal.write([
        Y(R),
        "0",
        "0",
        Y(B),
        "0",
        "0",
        "cm"
      ].join(" "))) : this.internal.write([
        Y(R),
        "0",
        "0",
        Y(B),
        Y(L),
        X(O + B),
        "cm"
      ].join(" ")), this.isAdvancedAPI() && this.internal.write([
        1,
        0,
        0,
        -1,
        0,
        0,
        "cm"
      ].join(" ")), this.internal.write("/I" + te.index + " Do"), this.internal.write("Q");
    }, _ = n.color_spaces = {
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
    var W = n.image_compression = {
      NONE: "NONE",
      FAST: "FAST",
      MEDIUM: "MEDIUM",
      SLOW: "SLOW"
    }, V = n.__addimage__.sHashCode = function(L) {
      var O, R, B = 0;
      if (typeof L == "string") for (R = L.length, O = 0; O < R; O++) B = (B << 5) - B + L.charCodeAt(O), B |= 0;
      else if (xe(L)) for (R = L.byteLength / 2, O = 0; O < R; O++) B = (B << 5) - B + L[O], B |= 0;
      return B;
    }, q = n.__addimage__.validateStringAsBase64 = function(L) {
      (L = L || "").toString().trim();
      var O = true;
      return L.length === 0 && (O = false), L.length % 4 != 0 && (O = false), /^[A-Za-z0-9+/]+$/.test(L.substr(0, L.length - 2)) === false && (O = false), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(L.substr(-2)) === false && (O = false), O;
    }, le = n.__addimage__.extractImageFromDataUrl = function(L) {
      if (L == null || !(L = L.trim()).startsWith("data:")) return null;
      var O = L.indexOf(",");
      return O < 0 ? null : L.substring(0, O).trim().endsWith("base64") ? L.substring(O + 1) : null;
    };
    n.__addimage__.isArrayBuffer = function(L) {
      return L instanceof ArrayBuffer;
    };
    var xe = n.__addimage__.isArrayBufferView = function(L) {
      return L instanceof Int8Array || L instanceof Uint8Array || L instanceof Uint8ClampedArray || L instanceof Int16Array || L instanceof Uint16Array || L instanceof Int32Array || L instanceof Uint32Array || L instanceof Float32Array || L instanceof Float64Array;
    }, ge = n.__addimage__.binaryStringToUint8Array = function(L) {
      for (var O = L.length, R = new Uint8Array(O), B = 0; B < O; B++) R[B] = L.charCodeAt(B);
      return R;
    }, ee = n.__addimage__.arrayBufferToBinaryString = function(L) {
      for (var O = "", R = xe(L) ? L : new Uint8Array(L), B = 0; B < R.length; B += 8192) O += String.fromCharCode.apply(null, R.subarray(B, B + 8192));
      return O;
    };
    n.addImage = function() {
      var L, O, R, B, te, se, oe, Y, X;
      if (typeof arguments[1] == "number" ? (O = t, R = arguments[1], B = arguments[2], te = arguments[3], se = arguments[4], oe = arguments[5], Y = arguments[6], X = arguments[7]) : (O = arguments[1], R = arguments[2], B = arguments[3], te = arguments[4], se = arguments[5], oe = arguments[6], Y = arguments[7], X = arguments[8]), Lt(L = arguments[0]) === "object" && !S(L) && "imageData" in L) {
        var _e = L;
        L = _e.imageData, O = _e.format || O || t, R = _e.x || R || 0, B = _e.y || B || 0, te = _e.w || _e.width || te, se = _e.h || _e.height || se, oe = _e.alias || oe, Y = _e.compression || Y, X = _e.rotation || _e.angle || X;
      }
      var de = this.internal.getFilters();
      if (Y === void 0 && de.indexOf("FlateEncode") !== -1 && (Y = "SLOW"), isNaN(R) || isNaN(B)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
      u.call(this);
      var x = H.call(this, L, O, oe, Y);
      return D.call(this, R, B, te, se, x, X), this;
    };
    var H = function(L, O, R, B) {
      var te, se, oe;
      if (typeof L == "string" && s(L) === t) {
        L = unescape(L);
        var Y = ie(L, false);
        (Y !== "" || (Y = n.loadFile(L, true)) !== void 0) && (L = Y);
      }
      if (S(L) && (L = p(L, O)), O = s(L, O), !w(O)) throw new Error("addImage does not support files of type '" + O + "', please ensure that a plugin for '" + O + "' support is added.");
      if (((oe = R) == null || oe.length === 0) && (R = function(X) {
        return typeof X == "string" || xe(X) ? V(X) : xe(X.data) ? V(X.data) : null;
      }(L)), (te = I.call(this, R)) || (L instanceof Uint8Array || O === "RGBA" || (se = L, L = ge(L)), te = this["process" + O.toUpperCase()](L, g.call(this), R, function(X) {
        return X && typeof X == "string" && (X = X.toUpperCase()), X in n.image_compression ? X : W.NONE;
      }(B), se)), !te) throw new Error("An unknown error occurred whilst processing the image.");
      return te;
    }, ie = n.__addimage__.convertBase64ToBinaryString = function(L, O) {
      O = typeof O != "boolean" || O;
      var R, B = "";
      if (typeof L == "string") {
        var te;
        R = (te = le(L)) !== null && te !== void 0 ? te : L;
        try {
          B = Rs(R);
        } catch (se) {
          if (O) throw q(R) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + se.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
        }
      }
      return B;
    };
    n.getImageProperties = function(L) {
      var O, R, B = "";
      if (S(L) && (L = p(L)), typeof L == "string" && s(L) === t && ((B = ie(L, false)) === "" && (B = n.loadFile(L) || ""), L = B), R = s(L), !w(R)) throw new Error("addImage does not support files of type '" + R + "', please ensure that a plugin for '" + R + "' support is added.");
      if (L instanceof Uint8Array || (L = ge(L)), !(O = this["process" + R.toUpperCase()](L))) throw new Error("An unknown error occurred whilst processing the image");
      return O.fileType = R, O;
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
        for (var r, s, a, h = this.internal.getCoordinateString, l = this.internal.getVerticalCoordinateString, u = this.internal.getPageInfoByObjId(t.objId), d = t.pageContext.annotations, g = false, w = 0; w < d.length && !g; w++) switch ((r = d[w]).type) {
          case "link":
            (e(r.options.url) || e(r.options.pageNumber)) && (g = true);
            break;
          case "reference":
          case "text":
          case "freetext":
            g = true;
        }
        if (g != 0) {
          this.internal.write("/Annots [");
          for (var S = 0; S < d.length; S++) {
            r = d[S];
            var p = this.internal.pdfEscape, I = this.internal.getEncryptor(t.objId);
            switch (r.type) {
              case "reference":
                this.internal.write(" " + r.object.objId + " 0 R ");
                break;
              case "text":
                var M = this.internal.newAdditionalObject(), D = this.internal.newAdditionalObject(), _ = this.internal.getEncryptor(M.objId), W = r.title || "Note";
                a = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + h(r.bounds.x) + " " + l(r.bounds.y + r.bounds.h) + " " + h(r.bounds.x + r.bounds.w) + " " + l(r.bounds.y) + "] ") + "/Contents (" + p(_(r.contents)) + ")", a += " /Popup " + D.objId + " 0 R", a += " /P " + u.objId + " 0 R", a += " /T (" + p(_(W)) + ") >>", M.content = a;
                var V = M.objId + " 0 R";
                a = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + h(r.bounds.x + 30) + " " + l(r.bounds.y + r.bounds.h) + " " + h(r.bounds.x + r.bounds.w + 30) + " " + l(r.bounds.y) + "] ") + " /Parent " + V, r.open && (a += " /Open true"), a += " >>", D.content = a, this.internal.write(M.objId, "0 R", D.objId, "0 R");
                break;
              case "freetext":
                s = "/Rect [" + h(r.bounds.x) + " " + l(r.bounds.y) + " " + h(r.bounds.x + r.bounds.w) + " " + l(r.bounds.y + r.bounds.h) + "] ";
                var q = r.color || "#000000";
                a = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(I(r.contents)) + ")", a += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + q + ")", a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
                break;
              case "link":
                if (r.options.name) {
                  var le = this.annotations._nameMap[r.options.name];
                  r.options.pageNumber = le.page, r.options.top = le.y;
                } else r.options.top || (r.options.top = 0);
                if (s = "/Rect [" + r.finalBounds.x + " " + r.finalBounds.y + " " + r.finalBounds.w + " " + r.finalBounds.h + "] ", a = "", r.options.url) a = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + p(I(r.options.url)) + ") >>";
                else if (r.options.pageNumber) switch (a = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(r.options.pageNumber).objId + " 0 R", r.options.magFactor = r.options.magFactor || "XYZ", r.options.magFactor) {
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
                    var xe = l(r.options.top);
                    r.options.left = r.options.left || 0, r.options.zoom === void 0 && (r.options.zoom = 0), a += " /XYZ " + r.options.left + " " + xe + " " + r.options.zoom + "]";
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
    }, n.link = function(t, r, s, a, h) {
      var l = this.internal.getCurrentPageInfo(), u = this.internal.getCoordinateString, d = this.internal.getVerticalCoordinateString;
      l.pageContext.annotations.push({
        finalBounds: {
          x: u(t),
          y: d(r),
          w: u(t + s),
          h: d(r + a)
        },
        options: h,
        type: "link"
      });
    }, n.textWithLink = function(t, r, s, a) {
      var h, l, u = this.getTextWidth(t), d = this.internal.getLineHeight() / this.internal.scaleFactor;
      if (a.maxWidth !== void 0) {
        l = a.maxWidth;
        var g = this.splitTextToSize(t, l).length;
        h = Math.ceil(d * g);
      } else l = u, h = d;
      return this.text(t, r, s, a), s += 0.2 * d, a.align === "center" && (r -= u / 2), a.align === "right" && (r -= u), this.link(r, s - d, l, h, a), u;
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
    }, s = [
      1570,
      1571,
      1573,
      1575
    ];
    n.__arabicParser__ = {};
    var a = n.__arabicParser__.isInArabicSubstitutionA = function(M) {
      return e[M.charCodeAt(0)] !== void 0;
    }, h = n.__arabicParser__.isArabicLetter = function(M) {
      return typeof M == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(M);
    }, l = n.__arabicParser__.isArabicEndLetter = function(M) {
      return h(M) && a(M) && e[M.charCodeAt(0)].length <= 2;
    }, u = n.__arabicParser__.isArabicAlfLetter = function(M) {
      return h(M) && s.indexOf(M.charCodeAt(0)) >= 0;
    };
    n.__arabicParser__.arabicLetterHasIsolatedForm = function(M) {
      return h(M) && a(M) && e[M.charCodeAt(0)].length >= 1;
    };
    var d = n.__arabicParser__.arabicLetterHasFinalForm = function(M) {
      return h(M) && a(M) && e[M.charCodeAt(0)].length >= 2;
    };
    n.__arabicParser__.arabicLetterHasInitialForm = function(M) {
      return h(M) && a(M) && e[M.charCodeAt(0)].length >= 3;
    };
    var g = n.__arabicParser__.arabicLetterHasMedialForm = function(M) {
      return h(M) && a(M) && e[M.charCodeAt(0)].length == 4;
    }, w = n.__arabicParser__.resolveLigatures = function(M) {
      var D = 0, _ = t, W = "", V = 0;
      for (D = 0; D < M.length; D += 1) _[M.charCodeAt(D)] !== void 0 ? (V++, typeof (_ = _[M.charCodeAt(D)]) == "number" && (W += String.fromCharCode(_), _ = t, V = 0), D === M.length - 1 && (_ = t, W += M.charAt(D - (V - 1)), D -= V - 1, V = 0)) : (_ = t, W += M.charAt(D - V), D -= V, V = 0);
      return W;
    };
    n.__arabicParser__.isArabicDiacritic = function(M) {
      return M !== void 0 && r[M.charCodeAt(0)] !== void 0;
    };
    var S = n.__arabicParser__.getCorrectForm = function(M, D, _) {
      return h(M) ? a(M) === false ? -1 : !d(M) || !h(D) && !h(_) || !h(_) && l(D) || l(M) && !h(D) || l(M) && u(D) || l(M) && l(D) ? 0 : g(M) && h(D) && !l(D) && h(_) && d(_) ? 3 : l(M) || !h(_) ? 1 : 2 : -1;
    }, p = function(M) {
      var D = 0, _ = 0, W = 0, V = "", q = "", le = "", xe = (M = M || "").split("\\s+"), ge = [];
      for (D = 0; D < xe.length; D += 1) {
        for (ge.push(""), _ = 0; _ < xe[D].length; _ += 1) V = xe[D][_], q = xe[D][_ - 1], le = xe[D][_ + 1], h(V) ? (W = S(V, q, le), ge[D] += W !== -1 ? String.fromCharCode(e[V.charCodeAt(0)][W]) : V) : ge[D] += V;
        ge[D] = w(ge[D]);
      }
      return ge.join(" ");
    }, I = n.__arabicParser__.processArabic = n.processArabic = function() {
      var M, D = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, _ = [];
      if (Array.isArray(D)) {
        var W = 0;
        for (_ = [], W = 0; W < D.length; W += 1) Array.isArray(D[W]) ? _.push([
          p(D[W][0]),
          D[W][1],
          D[W][2]
        ]) : _.push([
          p(D[W])
        ]);
        M = _;
      } else M = p(D);
      return typeof arguments[0] == "string" ? M : (arguments[0].text = M, arguments[0]);
    };
    n.events.push([
      "preProcessText",
      I
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
        set: function(l) {
          t = l;
        }
      });
      var r = 150;
      Object.defineProperty(this, "width", {
        get: function() {
          return r;
        },
        set: function(l) {
          r = isNaN(l) || Number.isInteger(l) === false || l < 0 ? 150 : l, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = r + 1);
        }
      });
      var s = 300;
      Object.defineProperty(this, "height", {
        get: function() {
          return s;
        },
        set: function(l) {
          s = isNaN(l) || Number.isInteger(l) === false || l < 0 ? 300 : l, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = s + 1);
        }
      });
      var a = [];
      Object.defineProperty(this, "childNodes", {
        get: function() {
          return a;
        },
        set: function(l) {
          a = l;
        }
      });
      var h = {};
      Object.defineProperty(this, "style", {
        get: function() {
          return h;
        },
        set: function(l) {
          h = l;
        }
      }), Object.defineProperty(this, "parentNode", {});
    };
    e.prototype.getContext = function(t, r) {
      var s;
      if ((t = t || "2d") !== "2d") return null;
      for (s in r) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = r[s]);
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
      this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
    }, s = function() {
      this.internal.__cell__.lastCell = new a(), this.internal.__cell__.pages = 1;
    }, a = function() {
      var u = arguments[0];
      Object.defineProperty(this, "x", {
        enumerable: true,
        get: function() {
          return u;
        },
        set: function(M) {
          u = M;
        }
      });
      var d = arguments[1];
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return d;
        },
        set: function(M) {
          d = M;
        }
      });
      var g = arguments[2];
      Object.defineProperty(this, "width", {
        enumerable: true,
        get: function() {
          return g;
        },
        set: function(M) {
          g = M;
        }
      });
      var w = arguments[3];
      Object.defineProperty(this, "height", {
        enumerable: true,
        get: function() {
          return w;
        },
        set: function(M) {
          w = M;
        }
      });
      var S = arguments[4];
      Object.defineProperty(this, "text", {
        enumerable: true,
        get: function() {
          return S;
        },
        set: function(M) {
          S = M;
        }
      });
      var p = arguments[5];
      Object.defineProperty(this, "lineNumber", {
        enumerable: true,
        get: function() {
          return p;
        },
        set: function(M) {
          p = M;
        }
      });
      var I = arguments[6];
      return Object.defineProperty(this, "align", {
        enumerable: true,
        get: function() {
          return I;
        },
        set: function(M) {
          I = M;
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
      var g = (d = d || {}).fontSize || this.getFontSize(), w = d.font || this.getFont(), S = d.scaleFactor || this.internal.scaleFactor, p = 0, I = 0, M = 0, D = this;
      if (!Array.isArray(u) && typeof u != "string") {
        if (typeof u != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
        u = String(u);
      }
      var _ = d.maxWidth;
      _ > 0 ? typeof u == "string" ? u = this.splitTextToSize(u, _) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function(V, q) {
        return V.concat(D.splitTextToSize(q, _));
      }, [])) : u = Array.isArray(u) ? u : [
        u
      ];
      for (var W = 0; W < u.length; W++) p < (M = this.getStringUnitWidth(u[W], {
        font: w
      }) * g) && (p = M);
      return p !== 0 && (I = u.length), {
        w: p /= S,
        h: Math.max((I * g * this.getLineHeightFactor() - g * (this.getLineHeightFactor() - 1)) / S, 0)
      };
    }, n.cellAddPage = function() {
      r.call(this), this.addPage();
      var u = this.internal.__cell__.margins || e;
      return this.internal.__cell__.lastCell = new a(u.left, u.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
    };
    var h = n.cell = function() {
      var u;
      u = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), r.call(this);
      var d = this.internal.__cell__.lastCell, g = this.internal.__cell__.padding, w = this.internal.__cell__.margins || e, S = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
      return d.lineNumber !== void 0 && (d.lineNumber === u.lineNumber ? (u.x = (d.x || 0) + (d.width || 0), u.y = d.y || 0) : d.y + d.height + u.height + w.bottom > this.getPageHeight() ? (this.cellAddPage(), u.y = w.top, p && S && (this.printHeaderRow(u.lineNumber, true), u.y += S[0].height)) : u.y = d.y + d.height || u.y), u.text[0] !== void 0 && (this.rect(u.x, u.y, u.width, u.height, t === true ? "FD" : void 0), u.align === "right" ? this.text(u.text, u.x + u.width - g, u.y + g, {
        align: "right",
        baseline: "top"
      }) : u.align === "center" ? this.text(u.text, u.x + u.width / 2, u.y + g, {
        align: "center",
        baseline: "top",
        maxWidth: u.width - g - g
      }) : this.text(u.text, u.x + g, u.y + g, {
        align: "left",
        baseline: "top",
        maxWidth: u.width - g - g
      })), this.internal.__cell__.lastCell = u, this;
    };
    n.table = function(u, d, g, w, S) {
      if (r.call(this), !g) throw new Error("No data for PDF table.");
      var p, I, M, D, _ = [], W = [], V = [], q = {}, le = {}, xe = [], ge = [], ee = (S = S || {}).autoSize || false, H = S.printHeaders !== false, ie = S.css && S.css["font-size"] !== void 0 ? 16 * S.css["font-size"] : S.fontSize || 12, L = S.margins || Object.assign({
        width: this.getPageWidth()
      }, e), O = typeof S.padding == "number" ? S.padding : 3, R = S.headerBackgroundColor || "#c8c8c8", B = S.headerTextColor || "#000";
      if (s.call(this), this.internal.__cell__.printHeaders = H, this.internal.__cell__.margins = L, this.internal.__cell__.table_font_size = ie, this.internal.__cell__.padding = O, this.internal.__cell__.headerBackgroundColor = R, this.internal.__cell__.headerTextColor = B, this.setFontSize(ie), w == null) W = _ = Object.keys(g[0]), V = _.map(function() {
        return "left";
      });
      else if (Array.isArray(w) && Lt(w[0]) === "object") for (_ = w.map(function(_e) {
        return _e.name;
      }), W = w.map(function(_e) {
        return _e.prompt || _e.name || "";
      }), V = w.map(function(_e) {
        return _e.align || "left";
      }), p = 0; p < w.length; p += 1) le[w[p].name] = 0.7499990551181103 * w[p].width;
      else Array.isArray(w) && typeof w[0] == "string" && (W = _ = w, V = _.map(function() {
        return "left";
      }));
      if (ee || Array.isArray(w) && typeof w[0] == "string") for (p = 0; p < _.length; p += 1) {
        for (q[D = _[p]] = g.map(function(_e) {
          return _e[D];
        }), this.setFont(void 0, "bold"), xe.push(this.getTextDimensions(W[p], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w), I = q[D], this.setFont(void 0, "normal"), M = 0; M < I.length; M += 1) xe.push(this.getTextDimensions(I[M], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w);
        le[D] = Math.max.apply(null, xe) + O + O, xe = [];
      }
      if (H) {
        var te = {};
        for (p = 0; p < _.length; p += 1) te[_[p]] = {}, te[_[p]].text = W[p], te[_[p]].align = V[p];
        var se = l.call(this, te, le);
        ge = _.map(function(_e) {
          return new a(u, d, le[_e], se, te[_e].text, void 0, te[_e].align);
        }), this.setTableHeaderRow(ge), this.printHeaderRow(1, false);
      }
      var oe = w.reduce(function(_e, de) {
        return _e[de.name] = de.align, _e;
      }, {});
      for (p = 0; p < g.length; p += 1) {
        "rowStart" in S && S.rowStart instanceof Function && S.rowStart({
          row: p,
          data: g[p]
        }, this);
        var Y = l.call(this, g[p], le);
        for (M = 0; M < _.length; M += 1) {
          var X = g[p][_[M]];
          "cellStart" in S && S.cellStart instanceof Function && S.cellStart({
            row: p,
            col: M,
            data: X
          }, this), h.call(this, new a(u, d, le[_[M]], Y, X, p + 2, oe[_[M]]));
        }
      }
      return this.internal.__cell__.table_x = u, this.internal.__cell__.table_y = d, this;
    };
    var l = function(u, d) {
      var g = this.internal.__cell__.padding, w = this.internal.__cell__.table_font_size, S = this.internal.scaleFactor;
      return Object.keys(u).map(function(p) {
        var I = u[p];
        return this.splitTextToSize(I.hasOwnProperty("text") ? I.text : I, d[p] - g - g);
      }, this).map(function(p) {
        return this.getLineHeightFactor() * p.length * w / S + g + g;
      }, this).reduce(function(p, I) {
        return Math.max(p, I);
      }, 0);
    };
    n.setTableHeaderRow = function(u) {
      r.call(this), this.internal.__cell__.tableHeaderRow = u;
    }, n.printHeaderRow = function(u, d) {
      if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
      var g;
      if (t = true, typeof this.internal.__cell__.headerFunction == "function") {
        var w = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
        this.internal.__cell__.lastCell = new a(w[0], w[1], w[2], w[3], void 0, -1);
      }
      this.setFont(void 0, "bold");
      for (var S = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
        g = this.internal.__cell__.tableHeaderRow[p].clone(), d && (g.y = this.internal.__cell__.margins.top || 0, S.push(g)), g.lineNumber = u;
        var I = this.getTextColor();
        this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), h.call(this, g), this.setTextColor(I);
      }
      S.length > 0 && this.setTableHeaderRow(S), this.setFont(void 0, "normal"), t = false;
    };
  }(Be.API);
  var sh = {
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
  }, oh = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
  ], fl = ah(oh), lh = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], S0 = ah(lh);
  function Yo(n) {
    var e = n.family.replace(/"|'/g, "").toLowerCase(), t = function(a) {
      return sh[a = a || "normal"] ? a : "normal";
    }(n.style), r = function(a) {
      return a ? typeof a == "number" ? a >= 100 && a <= 900 && a % 100 == 0 ? a : 400 : /^\d00$/.test(a) ? parseInt(a) : a === "bold" ? 700 : 400 : 400;
    }(n.weight), s = function(a) {
      return typeof fl[a = a || "normal"] == "number" ? a : "normal";
    }(n.stretch);
    return {
      family: e,
      style: t,
      weight: r,
      stretch: s,
      src: n.src || [],
      ref: n.ref || {
        name: e,
        style: [
          s,
          t,
          r
        ].join(" ")
      }
    };
  }
  function ru(n, e, t, r) {
    var s;
    for (s = t; s >= 0 && s < e.length; s += r) if (n[e[s]]) return n[e[s]];
    for (s = t; s >= 0 && s < e.length; s -= r) if (n[e[s]]) return n[e[s]];
  }
  var k0 = {
    "sans-serif": "helvetica",
    fixed: "courier",
    monospace: "courier",
    terminal: "courier",
    cursive: "times",
    fantasy: "times",
    serif: "times"
  }, iu = {
    caption: "times",
    icon: "times",
    menu: "times",
    "message-box": "times",
    "small-caption": "times",
    "status-bar": "times"
  };
  function au(n) {
    return [
      n.stretch,
      n.style,
      n.weight,
      n.family
    ].join(" ");
  }
  function su(n) {
    return n.trimLeft();
  }
  function P0(n, e) {
    for (var t = 0; t < n.length; ) {
      if (n.charAt(t) === e) return [
        n.substring(0, t),
        n.substring(t + 1)
      ];
      t += 1;
    }
    return null;
  }
  function C0(n) {
    var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return e === null ? null : [
      e[0],
      n.substring(e[0].length)
    ];
  }
  var Ki, js, ou, lu, cu, Jo = [
    "times"
  ];
  function uu(n, e, t, r, s) {
    var a = 4, h = hu;
    switch (s) {
      case Be.API.image_compression.FAST:
        a = 1, h = fu;
        break;
      case Be.API.image_compression.MEDIUM:
        a = 6, h = du;
        break;
      case Be.API.image_compression.SLOW:
        a = 9, h = pu;
    }
    n = function(u, d, g, w) {
      for (var S, p = u.length / d, I = new Uint8Array(u.length + p), M = [
        I0,
        fu,
        hu,
        du,
        pu
      ], D = 0; D < p; D += 1) {
        var _ = D * d, W = u.subarray(_, _ + d);
        if (w) I.set(w(W, g, S), _ + D);
        else {
          for (var V = M.length, q = [], le = 0; le < V; le += 1) q[le] = M[le](W, g, S);
          var xe = E0(q.concat());
          I.set(q[xe], _ + D);
        }
        S = W;
      }
      return I;
    }(n, e, Math.ceil(t * r / 8), h);
    var l = tl(n, {
      level: a
    });
    return Be.API.__addimage__.arrayBufferToBinaryString(l);
  }
  function I0(n) {
    var e = Array.apply([], n);
    return e.unshift(0), e;
  }
  function fu(n, e) {
    var t = n.length, r = [];
    r[0] = 1;
    for (var s = 0; s < t; s += 1) {
      var a = n[s - e] || 0;
      r[s + 1] = n[s] - a + 256 & 255;
    }
    return r;
  }
  function hu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 2;
    for (var a = 0; a < r; a += 1) {
      var h = t && t[a] || 0;
      s[a + 1] = n[a] - h + 256 & 255;
    }
    return s;
  }
  function du(n, e, t) {
    var r = n.length, s = [];
    s[0] = 3;
    for (var a = 0; a < r; a += 1) {
      var h = n[a - e] || 0, l = t && t[a] || 0;
      s[a + 1] = n[a] + 256 - (h + l >>> 1) & 255;
    }
    return s;
  }
  function pu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 4;
    for (var a = 0; a < r; a += 1) {
      var h = j0(n[a - e] || 0, t && t[a] || 0, t && t[a - e] || 0);
      s[a + 1] = n[a] - h + 256 & 255;
    }
    return s;
  }
  function j0(n, e, t) {
    if (n === e && e === t) return n;
    var r = Math.abs(e - t), s = Math.abs(n - t), a = Math.abs(n + e - t - t);
    return r <= s && r <= a ? n : s <= a ? e : t;
  }
  function E0(n) {
    var e = n.map(function(t) {
      return t.reduce(function(r, s) {
        return r + Math.abs(s);
      }, 0);
    });
    return e.indexOf(Math.min.apply(null, e));
  }
  function Xo(n, e, t) {
    var r = e * t, s = Math.floor(r / 8), a = 16 - (r - 8 * s + t), h = (1 << t) - 1;
    return ch(n, s) >> a & h;
  }
  function mu(n, e, t, r) {
    var s = t * r, a = Math.floor(s / 8), h = 16 - (s - 8 * a + r), l = (1 << r) - 1, u = (e & l) << h;
    (function(d, g, w) {
      if (g + 1 < d.byteLength) d.setUint16(g, w, false);
      else {
        var S = w >> 8 & 255;
        d.setUint8(g, S);
      }
    })(n, a, ch(n, a) & ~(l << h) & 65535 | u);
  }
  function ch(n, e) {
    return e + 1 < n.byteLength ? n.getUint16(e, false) : n.getUint8(e) << 8;
  }
  function F0(n) {
    var e = 0;
    if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
    var t = n[e++] | n[e++] << 8, r = n[e++] | n[e++] << 8, s = n[e++], a = s >> 7, h = 1 << 1 + (7 & s);
    n[e++], n[e++];
    var l = null, u = null;
    a && (l = e, u = h, e += 3 * h);
    var d = true, g = [], w = 0, S = null, p = 0, I = null;
    for (this.width = t, this.height = r; d && e < n.length; ) switch (n[e++]) {
      case 33:
        switch (n[e++]) {
          case 255:
            if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, I = n[e++] | n[e++] << 8, e++;
            else for (e += 12; ; ) {
              if (!((L = n[e++]) >= 0)) throw Error("Invalid block size");
              if (L === 0) break;
              e += L;
            }
            break;
          case 249:
            if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
            var M = n[e++];
            w = n[e++] | n[e++] << 8, S = n[e++], 1 & M || (S = null), p = M >> 2 & 7, e++;
            break;
          case 254:
            for (; ; ) {
              if (!((L = n[e++]) >= 0)) throw Error("Invalid block size");
              if (L === 0) break;
              e += L;
            }
            break;
          default:
            throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16));
        }
        break;
      case 44:
        var D = n[e++] | n[e++] << 8, _ = n[e++] | n[e++] << 8, W = n[e++] | n[e++] << 8, V = n[e++] | n[e++] << 8, q = n[e++], le = q >> 6 & 1, xe = 1 << 1 + (7 & q), ge = l, ee = u, H = false;
        q >> 7 && (H = true, ge = e, ee = xe, e += 3 * xe);
        var ie = e;
        for (e++; ; ) {
          var L;
          if (!((L = n[e++]) >= 0)) throw Error("Invalid block size");
          if (L === 0) break;
          e += L;
        }
        g.push({
          x: D,
          y: _,
          width: W,
          height: V,
          has_local_palette: H,
          palette_offset: ge,
          palette_size: ee,
          data_offset: ie,
          data_length: e - ie,
          transparent_index: S,
          interlaced: !!le,
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
      return g.length;
    }, this.loopCount = function() {
      return I;
    }, this.frameInfo = function(O) {
      if (O < 0 || O >= g.length) throw new Error("Frame index out of range.");
      return g[O];
    }, this.decodeAndBlitFrameBGRA = function(O, R) {
      var B = this.frameInfo(O), te = B.width * B.height, se = new Uint8Array(te);
      gu(n, B.data_offset, se, te);
      var oe = B.palette_offset, Y = B.transparent_index;
      Y === null && (Y = 256);
      var X = B.width, _e = t - X, de = X, x = 4 * (B.y * t + B.x), T = 4 * ((B.y + B.height) * t + B.x), U = x, $ = 4 * _e;
      B.interlaced === true && ($ += 4 * t * 7);
      for (var K = 8, Q = 0, ce = se.length; Q < ce; ++Q) {
        var ue = se[Q];
        if (de === 0 && (de = X, (U += $) >= T && ($ = 4 * _e + 4 * t * (K - 1), U = x + (X + _e) * (K << 1), K >>= 1)), ue === Y) U += 4;
        else {
          var ve = n[oe + 3 * ue], Le = n[oe + 3 * ue + 1], Pe = n[oe + 3 * ue + 2];
          R[U++] = Pe, R[U++] = Le, R[U++] = ve, R[U++] = 255;
        }
        --de;
      }
    }, this.decodeAndBlitFrameRGBA = function(O, R) {
      var B = this.frameInfo(O), te = B.width * B.height, se = new Uint8Array(te);
      gu(n, B.data_offset, se, te);
      var oe = B.palette_offset, Y = B.transparent_index;
      Y === null && (Y = 256);
      var X = B.width, _e = t - X, de = X, x = 4 * (B.y * t + B.x), T = 4 * ((B.y + B.height) * t + B.x), U = x, $ = 4 * _e;
      B.interlaced === true && ($ += 4 * t * 7);
      for (var K = 8, Q = 0, ce = se.length; Q < ce; ++Q) {
        var ue = se[Q];
        if (de === 0 && (de = X, (U += $) >= T && ($ = 4 * _e + 4 * t * (K - 1), U = x + (X + _e) * (K << 1), K >>= 1)), ue === Y) U += 4;
        else {
          var ve = n[oe + 3 * ue], Le = n[oe + 3 * ue + 1], Pe = n[oe + 3 * ue + 2];
          R[U++] = ve, R[U++] = Le, R[U++] = Pe, R[U++] = 255;
        }
        --de;
      }
    };
  }
  function gu(n, e, t, r) {
    for (var s = n[e++], a = 1 << s, h = a + 1, l = h + 1, u = s + 1, d = (1 << u) - 1, g = 0, w = 0, S = 0, p = n[e++], I = new Int32Array(4096), M = null; ; ) {
      for (; g < 16 && p !== 0; ) w |= n[e++] << g, g += 8, p === 1 ? p = n[e++] : --p;
      if (g < u) break;
      var D = w & d;
      if (w >>= u, g -= u, D !== a) {
        if (D === h) break;
        for (var _ = D < l ? D : M, W = 0, V = _; V > a; ) V = I[V] >> 8, ++W;
        var q = V;
        if (S + W + (_ !== D ? 1 : 0) > r) return void Pt.log("Warning, gif stream longer than expected.");
        t[S++] = q;
        var le = S += W;
        for (_ !== D && (t[S++] = q), V = _; W--; ) V = I[V], t[--le] = 255 & V, V >>= 8;
        M !== null && l < 4096 && (I[l++] = M << 8 | q, l >= d + 1 && u < 12 && (++u, d = d << 1 | 1)), M = D;
      } else l = h + 1, d = (1 << (u = s + 1)) - 1, M = null;
    }
    return S !== r && Pt.log("Warning, gif stream shorter than expected."), t;
  }
  function Zo(n) {
    var e, t, r, s, a, h = Math.floor, l = new Array(64), u = new Array(64), d = new Array(64), g = new Array(64), w = new Array(65535), S = new Array(65535), p = new Array(64), I = new Array(64), M = [], D = 0, _ = 7, W = new Array(64), V = new Array(64), q = new Array(64), le = new Array(256), xe = new Array(2048), ge = [
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
    ], ee = [
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
    ], ie = [
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
    ], L = [
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
    ], O = [
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
    ], R = [
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
    ], B = [
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
    ], te = [
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
    function se(x, T) {
      for (var U = 0, $ = 0, K = new Array(), Q = 1; Q <= 16; Q++) {
        for (var ce = 1; ce <= x[Q]; ce++) K[T[$]] = [], K[T[$]][0] = U, K[T[$]][1] = Q, $++, U++;
        U *= 2;
      }
      return K;
    }
    function oe(x) {
      for (var T = x[0], U = x[1] - 1; U >= 0; ) T & 1 << U && (D |= 1 << _), U--, --_ < 0 && (D == 255 ? (Y(255), Y(0)) : Y(D), _ = 7, D = 0);
    }
    function Y(x) {
      M.push(x);
    }
    function X(x) {
      Y(x >> 8 & 255), Y(255 & x);
    }
    function _e(x, T, U, $, K) {
      for (var Q, ce = K[0], ue = K[240], ve = function(Ne, Ve) {
        var je, He, Ue, yt, ft, et, dt, ht, Oe, rt, qe = 0;
        for (Oe = 0; Oe < 8; ++Oe) {
          je = Ne[qe], He = Ne[qe + 1], Ue = Ne[qe + 2], yt = Ne[qe + 3], ft = Ne[qe + 4], et = Ne[qe + 5], dt = Ne[qe + 6];
          var Ut = je + (ht = Ne[qe + 7]), gt = je - ht, lt = He + dt, ct = He - dt, Ft = Ue + et, ze = Ue - et, Ct = yt + ft, Ye = yt - ft, tt = Ut + Ct, Mt = Ut - Ct, ut = lt + Ft, $e = lt - Ft;
          Ne[qe] = tt + ut, Ne[qe + 4] = tt - ut;
          var xt = 0.707106781 * ($e + Mt);
          Ne[qe + 2] = Mt + xt, Ne[qe + 6] = Mt - xt;
          var si = 0.382683433 * ((tt = Ye + ze) - ($e = ct + gt)), dn = 0.5411961 * tt + si, br = 1.306562965 * $e + si, ir = 0.707106781 * (ut = ze + ct), Ke = gt + ir, vr = gt - ir;
          Ne[qe + 5] = vr + dn, Ne[qe + 3] = vr - dn, Ne[qe + 1] = Ke + br, Ne[qe + 7] = Ke - br, qe += 8;
        }
        for (qe = 0, Oe = 0; Oe < 8; ++Oe) {
          je = Ne[qe], He = Ne[qe + 8], Ue = Ne[qe + 16], yt = Ne[qe + 24], ft = Ne[qe + 32], et = Ne[qe + 40], dt = Ne[qe + 48];
          var wr = je + (ht = Ne[qe + 56]), On = je - ht, Dn = He + dt, Dt = He - dt, an = Ue + et, on = Ue - et, oi = yt + ft, Br = yt - ft, $n = wr + oi, ar = wr - oi, Kn = Dn + an, Yn = Dn - an;
          Ne[qe] = $n + Kn, Ne[qe + 32] = $n - Kn;
          var Tn = 0.707106781 * (Yn + ar);
          Ne[qe + 16] = ar + Tn, Ne[qe + 48] = ar - Tn;
          var li = 0.382683433 * (($n = Br + on) - (Yn = Dt + On)), sr = 0.5411961 * $n + li, ci = 1.306562965 * Yn + li, Ei = 0.707106781 * (Kn = on + Dt), Fi = On + Ei, Mi = On - Ei;
          Ne[qe + 40] = Mi + sr, Ne[qe + 24] = Mi - sr, Ne[qe + 8] = Fi + ci, Ne[qe + 56] = Fi - ci, qe++;
        }
        for (Oe = 0; Oe < 64; ++Oe) rt = Ne[Oe] * Ve[Oe], p[Oe] = rt > 0 ? rt + 0.5 | 0 : rt - 0.5 | 0;
        return p;
      }(x, T), Le = 0; Le < 64; ++Le) I[ge[Le]] = ve[Le];
      var Pe = I[0] - U;
      U = I[0], Pe == 0 ? oe($[0]) : (oe($[S[Q = 32767 + Pe]]), oe(w[Q]));
      for (var Ce = 63; Ce > 0 && I[Ce] == 0; ) Ce--;
      if (Ce == 0) return oe(ce), U;
      for (var We, P = 1; P <= Ce; ) {
        for (var ke = P; I[P] == 0 && P <= Ce; ) ++P;
        var ot = P - ke;
        if (ot >= 16) {
          We = ot >> 4;
          for (var Ge = 1; Ge <= We; ++Ge) oe(ue);
          ot &= 15;
        }
        Q = 32767 + I[P], oe(K[(ot << 4) + S[Q]]), oe(w[Q]), P++;
      }
      return Ce != 63 && oe(ce), U;
    }
    function de(x) {
      x = Math.min(Math.max(x, 1), 100), a != x && (function(T) {
        for (var U = [
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
          var K = h((U[$] * T + 50) / 100);
          K = Math.min(Math.max(K, 1), 255), l[ge[$]] = K;
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
          var ue = h((Q[ce] * T + 50) / 100);
          ue = Math.min(Math.max(ue, 1), 255), u[ge[ce]] = ue;
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
        ], Le = 0, Pe = 0; Pe < 8; Pe++) for (var Ce = 0; Ce < 8; Ce++) d[Le] = 1 / (l[ge[Le]] * ve[Pe] * ve[Ce] * 8), g[Le] = 1 / (u[ge[Le]] * ve[Pe] * ve[Ce] * 8), Le++;
      }(x < 50 ? Math.floor(5e3 / x) : Math.floor(200 - 2 * x)), a = x);
    }
    this.encode = function(x, T) {
      T && de(T), M = new Array(), D = 0, _ = 7, X(65496), X(65504), X(16), Y(74), Y(70), Y(73), Y(70), Y(0), Y(1), Y(1), Y(0), X(1), X(1), Y(0), Y(0), function() {
        X(65499), X(132), Y(0);
        for (var He = 0; He < 64; He++) Y(l[He]);
        Y(1);
        for (var Ue = 0; Ue < 64; Ue++) Y(u[Ue]);
      }(), function(He, Ue) {
        X(65472), X(17), Y(8), X(Ue), X(He), Y(3), Y(1), Y(17), Y(0), Y(2), Y(17), Y(1), Y(3), Y(17), Y(1);
      }(x.width, x.height), function() {
        X(65476), X(418), Y(0);
        for (var He = 0; He < 16; He++) Y(ee[He + 1]);
        for (var Ue = 0; Ue <= 11; Ue++) Y(H[Ue]);
        Y(16);
        for (var yt = 0; yt < 16; yt++) Y(ie[yt + 1]);
        for (var ft = 0; ft <= 161; ft++) Y(L[ft]);
        Y(1);
        for (var et = 0; et < 16; et++) Y(O[et + 1]);
        for (var dt = 0; dt <= 11; dt++) Y(R[dt]);
        Y(17);
        for (var ht = 0; ht < 16; ht++) Y(B[ht + 1]);
        for (var Oe = 0; Oe <= 161; Oe++) Y(te[Oe]);
      }(), X(65498), X(12), Y(3), Y(1), Y(0), Y(2), Y(17), Y(3), Y(17), Y(0), Y(63), Y(0);
      var U = 0, $ = 0, K = 0;
      D = 0, _ = 7, this.encode.displayName = "_encode_";
      for (var Q, ce, ue, ve, Le, Pe, Ce, We, P, ke = x.data, ot = x.width, Ge = x.height, Ne = 4 * ot, Ve = 0; Ve < Ge; ) {
        for (Q = 0; Q < Ne; ) {
          for (Le = Ne * Ve + Q, Ce = -1, We = 0, P = 0; P < 64; P++) Pe = Le + (We = P >> 3) * Ne + (Ce = 4 * (7 & P)), Ve + We >= Ge && (Pe -= Ne * (Ve + 1 + We - Ge)), Q + Ce >= Ne && (Pe -= Q + Ce - Ne + 4), ce = ke[Pe++], ue = ke[Pe++], ve = ke[Pe++], W[P] = (xe[ce] + xe[ue + 256 | 0] + xe[ve + 512 | 0] >> 16) - 128, V[P] = (xe[ce + 768 | 0] + xe[ue + 1024 | 0] + xe[ve + 1280 | 0] >> 16) - 128, q[P] = (xe[ce + 1280 | 0] + xe[ue + 1536 | 0] + xe[ve + 1792 | 0] >> 16) - 128;
          U = _e(W, d, U, e, r), $ = _e(V, g, $, t, s), K = _e(q, g, K, t, s), Q += 32;
        }
        Ve += 8;
      }
      if (_ >= 0) {
        var je = [];
        je[1] = _ + 1, je[0] = (1 << _ + 1) - 1, oe(je);
      }
      return X(65497), new Uint8Array(M);
    }, n = n || 50, function() {
      for (var x = String.fromCharCode, T = 0; T < 256; T++) le[T] = x(T);
    }(), e = se(ee, H), t = se(O, R), r = se(ie, L), s = se(B, te), function() {
      for (var x = 1, T = 2, U = 1; U <= 15; U++) {
        for (var $ = x; $ < T; $++) S[32767 + $] = U, w[32767 + $] = [], w[32767 + $][1] = U, w[32767 + $][0] = $;
        for (var K = -(T - 1); K <= -x; K++) S[32767 + K] = U, w[32767 + K] = [], w[32767 + K][1] = U, w[32767 + K][0] = T - 1 + K;
        x <<= 1, T <<= 1;
      }
    }(), function() {
      for (var x = 0; x < 256; x++) xe[x] = 19595 * x, xe[x + 256 | 0] = 38470 * x, xe[x + 512 | 0] = 7471 * x + 32768, xe[x + 768 | 0] = -11059 * x, xe[x + 1024 | 0] = -21709 * x, xe[x + 1280 | 0] = 32768 * x + 8421375, xe[x + 1536 | 0] = -27439 * x, xe[x + 1792 | 0] = -5329 * x;
    }(), de(n);
  }
  function tr(n, e) {
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
  function bu(n) {
    function e(H) {
      if (!H) throw Error("assert :P");
    }
    function t(H, ie, L) {
      for (var O = 0; 4 > O; O++) if (H[ie + O] != L.charCodeAt(O)) return true;
      return false;
    }
    function r(H, ie, L, O, R) {
      for (var B = 0; B < R; B++) H[ie + B] = L[O + B];
    }
    function s(H, ie, L, O) {
      for (var R = 0; R < O; R++) H[ie + R] = L;
    }
    function a(H) {
      return new Int32Array(H);
    }
    function h(H, ie) {
      for (var L = [], O = 0; O < H; O++) L.push(new ie());
      return L;
    }
    function l(H, ie) {
      var L = [];
      return function O(R, B, te) {
        for (var se = te[B], oe = 0; oe < se && (R.push(te.length > B + 1 ? [] : new ie()), !(te.length < B + 1)); oe++) O(R[oe], B + 1, te);
      }(L, 0, H), L;
    }
    var u = function() {
      var H = this;
      function ie(i, o) {
        for (var f = 1 << o - 1 >>> 0; i & f; ) f >>>= 1;
        return f ? (i & f - 1) + f : i;
      }
      function L(i, o, f, m, v) {
        e(!(m % f));
        do
          i[o + (m -= f)] = v;
        while (0 < m);
      }
      function O(i, o, f, m, v) {
        if (e(2328 >= v), 512 >= v) var y = a(512);
        else if ((y = a(v)) == null) return 0;
        return function(N, A, k, j, G, ae) {
          var E, J, ne = A, fe = 1 << k, re = a(16), he = a(16);
          for (e(G != 0), e(j != null), e(N != null), e(0 < k), J = 0; J < G; ++J) {
            if (15 < j[J]) return 0;
            ++re[j[J]];
          }
          if (re[0] == G) return 0;
          for (he[1] = 0, E = 1; 15 > E; ++E) {
            if (re[E] > 1 << E) return 0;
            he[E + 1] = he[E] + re[E];
          }
          for (J = 0; J < G; ++J) E = j[J], 0 < j[J] && (ae[he[E]++] = J);
          if (he[15] == 1) return (j = new R()).g = 0, j.value = ae[0], L(N, ne, 1, fe, j), fe;
          var me, Ae = -1, ye = fe - 1, Te = 0, Ie = 1, at = 1, Me = 1 << k;
          for (J = 0, E = 1, G = 2; E <= k; ++E, G <<= 1) {
            if (Ie += at <<= 1, 0 > (at -= re[E])) return 0;
            for (; 0 < re[E]; --re[E]) (j = new R()).g = E, j.value = ae[J++], L(N, ne + Te, G, Me, j), Te = ie(Te, E);
          }
          for (E = k + 1, G = 2; 15 >= E; ++E, G <<= 1) {
            if (Ie += at <<= 1, 0 > (at -= re[E])) return 0;
            for (; 0 < re[E]; --re[E]) {
              if (j = new R(), (Te & ye) != Ae) {
                for (ne += Me, me = 1 << (Ae = E) - k; 15 > Ae && !(0 >= (me -= re[Ae])); ) ++Ae, me <<= 1;
                fe += Me = 1 << (me = Ae - k), N[A + (Ae = Te & ye)].g = me + k, N[A + Ae].value = ne - A - Ae;
              }
              j.g = E - k, j.value = ae[J++], L(N, ne + (Te >> k), G, Me, j), Te = ie(Te, E);
            }
          }
          return Ie != 2 * he[15] - 1 ? 0 : fe;
        }(i, o, f, m, v, y);
      }
      function R() {
        this.value = this.g = 0;
      }
      function B() {
        this.value = this.g = 0;
      }
      function te() {
        this.G = h(5, R), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = h(yi, B);
      }
      function se(i, o, f, m) {
        e(i != null), e(o != null), e(2147483648 > m), i.Ca = 254, i.I = 0, i.b = -8, i.Ka = 0, i.oa = o, i.pa = f, i.Jd = o, i.Yc = f + m, i.Zc = 4 <= m ? f + m - 4 + 1 : f, ce(i);
      }
      function oe(i, o) {
        for (var f = 0; 0 < o--; ) f |= ve(i, 128) << o;
        return f;
      }
      function Y(i, o) {
        var f = oe(i, o);
        return ue(i) ? -f : f;
      }
      function X(i, o, f, m) {
        var v, y = 0;
        for (e(i != null), e(o != null), e(4294967288 > m), i.Sb = m, i.Ra = 0, i.u = 0, i.h = 0, 4 < m && (m = 4), v = 0; v < m; ++v) y += o[f + v] << 8 * v;
        i.Ra = y, i.bb = m, i.oa = o, i.pa = f;
      }
      function _e(i) {
        for (; 8 <= i.u && i.bb < i.Sb; ) i.Ra >>>= 8, i.Ra += i.oa[i.pa + i.bb] << Hr - 8 >>> 0, ++i.bb, i.u -= 8;
        $(i) && (i.h = 1, i.u = 0);
      }
      function de(i, o) {
        if (e(0 <= o), !i.h && o <= Pn) {
          var f = U(i) & kn[o];
          return i.u += o, _e(i), f;
        }
        return i.h = 1, i.u = 0;
      }
      function x() {
        this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
      }
      function T() {
        this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
      }
      function U(i) {
        return i.Ra >>> (i.u & Hr - 1) >>> 0;
      }
      function $(i) {
        return e(i.bb <= i.Sb), i.h || i.bb == i.Sb && i.u > Hr;
      }
      function K(i, o) {
        i.u = o, i.h = $(i);
      }
      function Q(i) {
        i.u >= Ir && (e(i.u >= Ir), _e(i));
      }
      function ce(i) {
        e(i != null && i.oa != null), i.pa < i.Zc ? (i.I = (i.oa[i.pa++] | i.I << 8) >>> 0, i.b += 8) : (e(i != null && i.oa != null), i.pa < i.Yc ? (i.b += 8, i.I = i.oa[i.pa++] | i.I << 8) : i.Ka ? i.b = 0 : (i.I <<= 8, i.b += 8, i.Ka = 1));
      }
      function ue(i) {
        return oe(i, 1);
      }
      function ve(i, o) {
        var f = i.Ca;
        0 > i.b && ce(i);
        var m = i.b, v = f * o >>> 8, y = (i.I >>> m > v) + 0;
        for (y ? (f -= v, i.I -= v + 1 << m >>> 0) : f = v + 1, m = f, v = 0; 256 <= m; ) v += 8, m >>= 8;
        return m = 7 ^ v + Wr[m], i.b -= m, i.Ca = (f << m) - 1, y;
      }
      function Le(i, o, f) {
        i[o + 0] = f >> 24 & 255, i[o + 1] = f >> 16 & 255, i[o + 2] = f >> 8 & 255, i[o + 3] = 255 & f;
      }
      function Pe(i, o) {
        return i[o + 0] | i[o + 1] << 8;
      }
      function Ce(i, o) {
        return Pe(i, o) | i[o + 2] << 16;
      }
      function We(i, o) {
        return Pe(i, o) | Pe(i, o + 2) << 16;
      }
      function P(i, o) {
        var f = 1 << o;
        return e(i != null), e(0 < o), i.X = a(f), i.X == null ? 0 : (i.Mb = 32 - o, i.Xa = o, 1);
      }
      function ke(i, o) {
        e(i != null), e(o != null), e(i.Xa == o.Xa), r(o.X, 0, i.X, 0, 1 << o.Xa);
      }
      function ot() {
        this.X = [], this.Xa = this.Mb = 0;
      }
      function Ge(i, o, f, m) {
        e(f != null), e(m != null);
        var v = f[0], y = m[0];
        return v == 0 && (v = (i * y + o / 2) / o), y == 0 && (y = (o * v + i / 2) / i), 0 >= v || 0 >= y ? 0 : (f[0] = v, m[0] = y, 1);
      }
      function Ne(i, o) {
        return i + (1 << o) - 1 >>> o;
      }
      function Ve(i, o) {
        return ((4278255360 & i) + (4278255360 & o) >>> 0 & 4278255360) + ((16711935 & i) + (16711935 & o) >>> 0 & 16711935) >>> 0;
      }
      function je(i, o) {
        H[o] = function(f, m, v, y, N, A, k) {
          var j;
          for (j = 0; j < N; ++j) {
            var G = H[i](A[k + j - 1], v, y + j);
            A[k + j] = Ve(f[m + j], G);
          }
        };
      }
      function He() {
        this.ud = this.hd = this.jd = 0;
      }
      function Ue(i, o) {
        return ((4278124286 & (i ^ o)) >>> 1) + (i & o) >>> 0;
      }
      function yt(i) {
        return 0 <= i && 256 > i ? i : 0 > i ? 0 : 255 < i ? 255 : void 0;
      }
      function ft(i, o) {
        return yt(i + (i - o + 0.5 >> 1));
      }
      function et(i, o, f) {
        return Math.abs(o - f) - Math.abs(i - f);
      }
      function dt(i, o, f, m, v, y, N) {
        for (m = y[N - 1], f = 0; f < v; ++f) y[N + f] = m = Ve(i[o + f], m);
      }
      function ht(i, o, f, m, v) {
        var y;
        for (y = 0; y < f; ++y) {
          var N = i[o + y], A = N >> 8 & 255, k = 16711935 & (k = (k = 16711935 & N) + ((A << 16) + A));
          m[v + y] = (4278255360 & N) + k >>> 0;
        }
      }
      function Oe(i, o) {
        o.jd = 255 & i, o.hd = i >> 8 & 255, o.ud = i >> 16 & 255;
      }
      function rt(i, o, f, m, v, y) {
        var N;
        for (N = 0; N < m; ++N) {
          var A = o[f + N], k = A >>> 8, j = A, G = 255 & (G = (G = A >>> 16) + ((i.jd << 24 >> 24) * (k << 24 >> 24) >>> 5));
          j = 255 & (j = (j += (i.hd << 24 >> 24) * (k << 24 >> 24) >>> 5) + ((i.ud << 24 >> 24) * (G << 24 >> 24) >>> 5)), v[y + N] = (4278255360 & A) + (G << 16) + j;
        }
      }
      function qe(i, o, f, m, v) {
        H[o] = function(y, N, A, k, j, G, ae, E, J) {
          for (k = ae; k < E; ++k) for (ae = 0; ae < J; ++ae) j[G++] = v(A[m(y[N++])]);
        }, H[i] = function(y, N, A, k, j, G, ae) {
          var E = 8 >> y.b, J = y.Ea, ne = y.K[0], fe = y.w;
          if (8 > E) for (y = (1 << y.b) - 1, fe = (1 << E) - 1; N < A; ++N) {
            var re, he = 0;
            for (re = 0; re < J; ++re) re & y || (he = m(k[j++])), G[ae++] = v(ne[he & fe]), he >>= E;
          }
          else H["VP8LMapColor" + f](k, j, ne, fe, G, ae, N, A, J);
        };
      }
      function Ut(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = i[o++];
          m[v++] = y >> 16 & 255, m[v++] = y >> 8 & 255, m[v++] = 255 & y;
        }
      }
      function gt(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = i[o++];
          m[v++] = y >> 16 & 255, m[v++] = y >> 8 & 255, m[v++] = 255 & y, m[v++] = y >> 24 & 255;
        }
      }
      function lt(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = (N = i[o++]) >> 16 & 240 | N >> 12 & 15, N = 240 & N | N >> 28 & 15;
          m[v++] = y, m[v++] = N;
        }
      }
      function ct(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = (N = i[o++]) >> 16 & 248 | N >> 13 & 7, N = N >> 5 & 224 | N >> 3 & 31;
          m[v++] = y, m[v++] = N;
        }
      }
      function Ft(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = i[o++];
          m[v++] = 255 & y, m[v++] = y >> 8 & 255, m[v++] = y >> 16 & 255;
        }
      }
      function ze(i, o, f, m, v, y) {
        if (y == 0) for (f = o + f; o < f; ) Le(m, ((y = i[o++])[0] >> 24 | y[1] >> 8 & 65280 | y[2] << 8 & 16711680 | y[3] << 24) >>> 0), v += 32;
        else r(m, v, i, o, f);
      }
      function Ct(i, o) {
        H[o][0] = H[i + "0"], H[o][1] = H[i + "1"], H[o][2] = H[i + "2"], H[o][3] = H[i + "3"], H[o][4] = H[i + "4"], H[o][5] = H[i + "5"], H[o][6] = H[i + "6"], H[o][7] = H[i + "7"], H[o][8] = H[i + "8"], H[o][9] = H[i + "9"], H[o][10] = H[i + "10"], H[o][11] = H[i + "11"], H[o][12] = H[i + "12"], H[o][13] = H[i + "13"], H[o][14] = H[i + "0"], H[o][15] = H[i + "0"];
      }
      function Ye(i) {
        return i == bo || i == vo || i == ds || i == wo;
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
      function $e() {
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
      function si(i) {
        return alert("todo:WebPSamplerProcessPlane"), i.T;
      }
      function dn(i, o) {
        var f = i.T, m = o.ba.f.RGBA, v = m.eb, y = m.fb + i.ka * m.A, N = Wn[o.ba.S], A = i.y, k = i.O, j = i.f, G = i.N, ae = i.ea, E = i.W, J = o.cc, ne = o.dc, fe = o.Mc, re = o.Nc, he = i.ka, me = i.ka + i.T, Ae = i.U, ye = Ae + 1 >> 1;
        for (he == 0 ? N(A, k, null, null, j, G, ae, E, j, G, ae, E, v, y, null, null, Ae) : (N(o.ec, o.fc, A, k, J, ne, fe, re, j, G, ae, E, v, y - m.A, v, y, Ae), ++f); he + 2 < me; he += 2) J = j, ne = G, fe = ae, re = E, G += i.Rc, E += i.Rc, y += 2 * m.A, N(A, (k += 2 * i.fa) - i.fa, A, k, J, ne, fe, re, j, G, ae, E, v, y - m.A, v, y, Ae);
        return k += i.fa, i.j + me < i.o ? (r(o.ec, o.fc, A, k, Ae), r(o.cc, o.dc, j, G, ye), r(o.Mc, o.Nc, ae, E, ye), f--) : 1 & me || N(A, k, null, null, j, G, ae, E, j, G, ae, E, v, y + m.A, null, null, Ae), f;
      }
      function br(i, o, f) {
        var m = i.F, v = [
          i.J
        ];
        if (m != null) {
          var y = i.U, N = o.ba.S, A = N == hs || N == ds;
          o = o.ba.f.RGBA;
          var k = [
            0
          ], j = i.ka;
          k[0] = i.T, i.Kb && (j == 0 ? --k[0] : (--j, v[0] -= i.width), i.j + i.ka + i.T == i.o && (k[0] = i.o - i.j - j));
          var G = o.eb;
          j = o.fb + j * o.A, i = jl(m, v[0], i.width, y, k, G, j + (A ? 0 : 3), o.A), e(f == k), i && Ye(N) && Sa(G, j, A, y, k, o.A);
        }
        return 0;
      }
      function ir(i) {
        var o = i.ma, f = o.ba.S, m = 11 > f, v = f == us || f == fs || f == hs || f == go || f == 12 || Ye(f);
        if (o.memory = null, o.Ib = null, o.Jb = null, o.Nd = null, !va(o.Oa, i, v ? 11 : 12)) return 0;
        if (v && Ye(f) && ma(), i.da) alert("todo:use_scaling");
        else {
          if (m) {
            if (o.Ib = si, i.Kb) {
              if (f = i.U + 1 >> 1, o.memory = a(i.U + 2 * f), o.memory == null) return 0;
              o.ec = o.memory, o.fc = 0, o.cc = o.ec, o.dc = o.fc + i.U, o.Mc = o.cc, o.Nc = o.dc + f, o.Ib = dn, ma();
            }
          } else alert("todo:EmitYUV");
          v && (o.Jb = br, m && Xn());
        }
        if (m && !$l) {
          for (i = 0; 256 > i; ++i) Ih[i] = 89858 * (i - 128) + ms >> ps, Fh[i] = -22014 * (i - 128) + ms, Eh[i] = -45773 * (i - 128), jh[i] = 113618 * (i - 128) + ms >> ps;
          for (i = Pa; i < No; ++i) o = 76283 * (i - 16) + ms >> ps, Mh[i - Pa] = or(o, 255), Rh[i - Pa] = or(o + 8 >> 4, 15);
          $l = 1;
        }
        return 1;
      }
      function Ke(i) {
        var o = i.ma, f = i.U, m = i.T;
        return e(!(1 & i.ka)), 0 >= f || 0 >= m ? 0 : (f = o.Ib(i, o), o.Jb != null && o.Jb(i, o, f), o.Dc += f, 1);
      }
      function vr(i) {
        i.ma.memory = null;
      }
      function wr(i, o, f, m) {
        return de(i, 8) != 47 ? 0 : (o[0] = de(i, 14) + 1, f[0] = de(i, 14) + 1, m[0] = de(i, 1), de(i, 3) != 0 ? 0 : !i.h);
      }
      function On(i, o) {
        if (4 > i) return i + 1;
        var f = i - 2 >> 1;
        return (2 + (1 & i) << f) + de(o, f) + 1;
      }
      function Dn(i, o) {
        return 120 < o ? o - 120 : 1 <= (f = ((f = gh[o - 1]) >> 4) * i + (8 - (15 & f))) ? f : 1;
        var f;
      }
      function Dt(i, o, f) {
        var m = U(f), v = i[o += 255 & m].g - 8;
        return 0 < v && (K(f, f.u + 8), m = U(f), o += i[o].value, o += m & (1 << v) - 1), K(f, f.u + i[o].g), i[o].value;
      }
      function an(i, o, f) {
        return f.g += i.g, f.value += i.value << o >>> 0, e(8 >= f.g), i.g;
      }
      function on(i, o, f) {
        var m = i.xc;
        return e((o = m == 0 ? 0 : i.vc[i.md * (f >> m) + (o >> m)]) < i.Wb), i.Ya[o];
      }
      function oi(i, o, f, m) {
        var v = i.ab, y = i.c * o, N = i.C;
        o = N + o;
        var A = f, k = m;
        for (m = i.Ta, f = i.Ua; 0 < v--; ) {
          var j = i.gc[v], G = N, ae = o, E = A, J = k, ne = (k = m, A = f, j.Ea);
          switch (e(G < ae), e(ae <= j.nc), j.hc) {
            case 2:
              zt(E, J, (ae - G) * ne, k, A);
              break;
            case 0:
              var fe = G, re = ae, he = k, me = A, Ae = (Me = j).Ea;
              fe == 0 && (ya(E, J, null, null, 1, he, me), dt(E, J + 1, 0, 0, Ae - 1, he, me + 1), J += Ae, me += Ae, ++fe);
              for (var ye = 1 << Me.b, Te = ye - 1, Ie = Ne(Ae, Me.b), at = Me.K, Me = Me.w + (fe >> Me.b) * Ie; fe < re; ) {
                var pt = at, tn = Me, st = 1;
                for (zi(E, J, he, me - Ae, 1, he, me); st < Ae; ) {
                  var Re = (st & ~Te) + ye;
                  Re > Ae && (Re = Ae), (0, Na[pt[tn++] >> 8 & 15])(E, J + +st, he, me + st - Ae, Re - st, he, me + st), st = Re;
                }
                J += Ae, me += Ae, ++fe & Te || (Me += Ie);
              }
              ae != j.nc && r(k, A - ne, k, A + (ae - G - 1) * ne, ne);
              break;
            case 1:
              for (ne = E, re = J, Ae = (E = j.Ea) - (me = E & ~(he = (J = 1 << j.b) - 1)), fe = Ne(E, j.b), ye = j.K, j = j.w + (G >> j.b) * fe; G < ae; ) {
                for (Te = ye, Ie = j, at = new He(), Me = re + me, pt = re + E; re < Me; ) Oe(Te[Ie++], at), _a(at, ne, re, J, k, A), re += J, A += J;
                re < pt && (Oe(Te[Ie++], at), _a(at, ne, re, Ae, k, A), re += Ae, A += Ae), ++G & he || (j += fe);
              }
              break;
            case 3:
              if (E == k && J == A && 0 < j.b) {
                for (re = k, E = ne = A + (ae - G) * ne - (me = (ae - G) * Ne(j.Ea, j.b)), J = k, he = A, fe = [], me = (Ae = me) - 1; 0 <= me; --me) fe[me] = J[he + me];
                for (me = Ae - 1; 0 <= me; --me) re[E + me] = fe[me];
                ss(j, G, ae, k, ne, k, A);
              } else ss(j, G, ae, E, J, k, A);
          }
          A = m, k = f;
        }
        k != f && r(m, f, A, k, y);
      }
      function Br(i, o) {
        var f = i.V, m = i.Ba + i.c * i.C, v = o - i.C;
        if (e(o <= i.l.o), e(16 >= v), 0 < v) {
          var y = i.l, N = i.Ta, A = i.Ua, k = y.width;
          if (oi(i, v, f, m), v = A = [
            A
          ], e((f = i.C) < (m = o)), e(y.v < y.va), m > y.o && (m = y.o), f < y.j) {
            var j = y.j - f;
            f = y.j, v[0] += j * k;
          }
          if (f >= m ? f = 0 : (v[0] += 4 * y.v, y.ka = f - y.j, y.U = y.va - y.v, y.T = m - f, f = 1), f) {
            if (A = A[0], 11 > (f = i.ca).S) {
              var G = f.f.RGBA, ae = (m = f.S, v = y.U, y = y.T, j = G.eb, G.A), E = y;
              for (G = G.fb + i.Ma * G.A; 0 < E--; ) {
                var J = N, ne = A, fe = v, re = j, he = G;
                switch (m) {
                  case cs:
                    Aa(J, ne, fe, re, he);
                    break;
                  case us:
                    Gr(J, ne, fe, re, he);
                    break;
                  case bo:
                    Gr(J, ne, fe, re, he), Sa(re, he, 0, fe, 1, 0);
                    break;
                  case Tl:
                    xi(J, ne, fe, re, he);
                    break;
                  case fs:
                    ze(J, ne, fe, re, he, 1);
                    break;
                  case vo:
                    ze(J, ne, fe, re, he, 1), Sa(re, he, 0, fe, 1, 0);
                    break;
                  case hs:
                    ze(J, ne, fe, re, he, 0);
                    break;
                  case ds:
                    ze(J, ne, fe, re, he, 0), Sa(re, he, 1, fe, 1, 0);
                    break;
                  case go:
                    Vr(J, ne, fe, re, he);
                    break;
                  case wo:
                    Vr(J, ne, fe, re, he), Il(re, he, fe, 1, 0);
                    break;
                  case Bl:
                    $r(J, ne, fe, re, he);
                    break;
                  default:
                    e(0);
                }
                A += k, G += ae;
              }
              i.Ma += y;
            } else alert("todo:EmitRescaledRowsYUVA");
            e(i.Ma <= f.height);
          }
        }
        i.C = o, e(i.C <= i.i);
      }
      function $n(i) {
        var o;
        if (0 < i.ua) return 0;
        for (o = 0; o < i.Wb; ++o) {
          var f = i.Ya[o].G, m = i.Ya[o].H;
          if (0 < f[1][m[1] + 0].g || 0 < f[2][m[2] + 0].g || 0 < f[3][m[3] + 0].g) return 0;
        }
        return 1;
      }
      function ar(i, o, f, m, v, y) {
        if (i.Z != 0) {
          var N = i.qd, A = i.rd;
          for (e(Jr[i.Z] != null); o < f; ++o) Jr[i.Z](N, A, m, v, m, v, y), N = m, A = v, v += y;
          i.qd = N, i.rd = A;
        }
      }
      function Kn(i, o) {
        var f = i.l.ma, m = f.Z == 0 || f.Z == 1 ? i.l.j : i.C;
        if (m = i.C < m ? m : i.C, e(o <= i.l.o), o > m) {
          var v = i.l.width, y = f.ca, N = f.tb + v * m, A = i.V, k = i.Ba + i.c * m, j = i.gc;
          e(i.ab == 1), e(j[0].hc == 3), fr(j[0], m, o, A, k, y, N), ar(f, m, o, y, N, v);
        }
        i.C = i.Ma = o;
      }
      function Yn(i, o, f, m, v, y, N) {
        var A = i.$ / m, k = i.$ % m, j = i.m, G = i.s, ae = f + i.$, E = ae;
        v = f + m * v;
        var J = f + m * y, ne = 280 + G.ua, fe = i.Pb ? A : 16777216, re = 0 < G.ua ? G.Wa : null, he = G.wc, me = ae < J ? on(G, k, A) : null;
        e(i.C < y), e(J <= v);
        var Ae = false;
        e: for (; ; ) {
          for (; Ae || ae < J; ) {
            var ye = 0;
            if (A >= fe) {
              var Te = ae - f;
              e((fe = i).Pb), fe.wd = fe.m, fe.xd = Te, 0 < fe.s.ua && ke(fe.s.Wa, fe.s.vb), fe = A + vh;
            }
            if (k & he || (me = on(G, k, A)), e(me != null), me.Qb && (o[ae] = me.qb, Ae = true), !Ae) if (Q(j), me.jc) {
              ye = j, Te = o;
              var Ie = ae, at = me.pd[U(ye) & yi - 1];
              e(me.jc), 256 > at.g ? (K(ye, ye.u + at.g), Te[Ie] = at.value, ye = 0) : (K(ye, ye.u + at.g - 256), e(256 <= at.value), ye = at.value), ye == 0 && (Ae = true);
            } else ye = Dt(me.G[0], me.H[0], j);
            if (j.h) break;
            if (Ae || 256 > ye) {
              if (!Ae) if (me.nd) o[ae] = (me.qb | ye << 8) >>> 0;
              else {
                if (Q(j), Ae = Dt(me.G[1], me.H[1], j), Q(j), Te = Dt(me.G[2], me.H[2], j), Ie = Dt(me.G[3], me.H[3], j), j.h) break;
                o[ae] = (Ie << 24 | Ae << 16 | ye << 8 | Te) >>> 0;
              }
              if (Ae = false, ++ae, ++k >= m && (k = 0, ++A, N != null && A <= y && !(A % 16) && N(i, A), re != null)) for (; E < ae; ) ye = o[E++], re.X[(506832829 * ye & 4294967295) >>> re.Mb] = ye;
            } else if (280 > ye) {
              if (ye = On(ye - 256, j), Te = Dt(me.G[4], me.H[4], j), Q(j), Te = Dn(m, Te = On(Te, j)), j.h) break;
              if (ae - f < Te || v - ae < ye) break e;
              for (Ie = 0; Ie < ye; ++Ie) o[ae + Ie] = o[ae + Ie - Te];
              for (ae += ye, k += ye; k >= m; ) k -= m, ++A, N != null && A <= y && !(A % 16) && N(i, A);
              if (e(ae <= v), k & he && (me = on(G, k, A)), re != null) for (; E < ae; ) ye = o[E++], re.X[(506832829 * ye & 4294967295) >>> re.Mb] = ye;
            } else {
              if (!(ye < ne)) break e;
              for (Ae = ye - 280, e(re != null); E < ae; ) ye = o[E++], re.X[(506832829 * ye & 4294967295) >>> re.Mb] = ye;
              ye = ae, e(!(Ae >>> (Te = re).Xa)), o[ye] = Te.X[Ae], Ae = true;
            }
            Ae || e(j.h == $(j));
          }
          if (i.Pb && j.h && ae < v) e(i.m.h), i.a = 5, i.m = i.wd, i.$ = i.xd, 0 < i.s.ua && ke(i.s.vb, i.s.Wa);
          else {
            if (j.h) break e;
            N == null ? void 0 : N(i, A > y ? y : A), i.a = 0, i.$ = ae - f;
          }
          return 1;
        }
        return i.a = 3, 0;
      }
      function Tn(i) {
        e(i != null), i.vc = null, i.yc = null, i.Ya = null;
        var o = i.Wa;
        o != null && (o.X = null), i.vb = null, e(i != null);
      }
      function li() {
        var i = new Xe();
        return i == null ? null : (i.a = 0, i.xb = zl, Ct("Predictor", "VP8LPredictors"), Ct("Predictor", "VP8LPredictors_C"), Ct("PredictorAdd", "VP8LPredictorsAdd"), Ct("PredictorAdd", "VP8LPredictorsAdd_C"), zt = ht, _a = rt, Aa = Ut, Gr = gt, Vr = lt, $r = ct, xi = Ft, H.VP8LMapColor32b = ur, H.VP8LMapColor8b = xa, i);
      }
      function sr(i, o, f, m, v) {
        var y = 1, N = [
          i
        ], A = [
          o
        ], k = m.m, j = m.s, G = null, ae = 0;
        e: for (; ; ) {
          if (f) for (; y && de(k, 1); ) {
            var E = N, J = A, ne = m, fe = 1, re = ne.m, he = ne.gc[ne.ab], me = de(re, 2);
            if (ne.Oc & 1 << me) y = 0;
            else {
              switch (ne.Oc |= 1 << me, he.hc = me, he.Ea = E[0], he.nc = J[0], he.K = [
                null
              ], ++ne.ab, e(4 >= ne.ab), me) {
                case 0:
                case 1:
                  he.b = de(re, 3) + 2, fe = sr(Ne(he.Ea, he.b), Ne(he.nc, he.b), 0, ne, he.K), he.K = he.K[0];
                  break;
                case 3:
                  var Ae, ye = de(re, 8) + 1, Te = 16 < ye ? 0 : 4 < ye ? 1 : 2 < ye ? 2 : 3;
                  if (E[0] = Ne(he.Ea, Te), he.b = Te, Ae = fe = sr(ye, 1, 0, ne, he.K)) {
                    var Ie, at = ye, Me = he, pt = 1 << (8 >> Me.b), tn = a(pt);
                    if (tn == null) Ae = 0;
                    else {
                      var st = Me.K[0], Re = Me.w;
                      for (tn[0] = Me.K[0][0], Ie = 1; Ie < 1 * at; ++Ie) tn[Ie] = Ve(st[Re + Ie], tn[Ie - 1]);
                      for (; Ie < 4 * pt; ++Ie) tn[Ie] = 0;
                      Me.K[0] = null, Me.K[0] = tn, Ae = 1;
                    }
                  }
                  fe = Ae;
                  break;
                case 2:
                  break;
                default:
                  e(0);
              }
              y = fe;
            }
          }
          if (N = N[0], A = A[0], y && de(k, 1) && !(y = 1 <= (ae = de(k, 4)) && 11 >= ae)) {
            m.a = 3;
            break e;
          }
          var Se;
          if (Se = y) t: {
            var Wt, nt, mt, Et = m, un = N, yn = A, Tt = ae, pn = f, xn = Et.m, nn = Et.s, vt = [
              null
            ], _t = 1, Bt = 0, At = bh[Tt];
            n: for (; ; ) {
              if (pn && de(xn, 1)) {
                var fn = de(xn, 3) + 2, Qn = Ne(un, fn), Gt = Ne(yn, fn), An = Qn * Gt;
                if (!sr(Qn, Gt, 0, Et, vt)) break n;
                for (vt = vt[0], nn.xc = fn, Wt = 0; Wt < An; ++Wt) {
                  var kt = vt[Wt] >> 8 & 65535;
                  vt[Wt] = kt, kt >= _t && (_t = kt + 1);
                }
              }
              if (xn.h) break n;
              for (nt = 0; 5 > nt; ++nt) {
                var rn = ql[nt];
                !nt && 0 < Tt && (rn += 1 << Tt), Bt < rn && (Bt = rn);
              }
              var In = h(_t * At, R), Nn = _t, jn = h(Nn, te);
              if (jn == null) var En = null;
              else e(65536 >= Nn), En = jn;
              var Ln = a(Bt);
              if (En == null || Ln == null || In == null) {
                Et.a = 1;
                break n;
              }
              var Fn = In;
              for (Wt = mt = 0; Wt < _t; ++Wt) {
                var jt = En[Wt], Mn = jt.G, er = jt.H, _i = 0, Fr = 1, hn = 0;
                for (nt = 0; 5 > nt; ++nt) {
                  rn = ql[nt], Mn[nt] = Fn, er[nt] = mt, !nt && 0 < Tt && (rn += 1 << Tt);
                  i: {
                    var bs, _o = rn, vs = Et, Ca = Ln, Th = Fn, Bh = mt, Ao = 0, Xr = vs.m, qh = de(Xr, 1);
                    if (s(Ca, 0, 0, _o), qh) {
                      var Uh = de(Xr, 1) + 1, zh = de(Xr, 1), Jl = de(Xr, zh == 0 ? 1 : 8);
                      Ca[Jl] = 1, Uh == 2 && (Ca[Jl = de(Xr, 8)] = 1);
                      var ws = 1;
                    } else {
                      var Xl = a(19), Zl = de(Xr, 4) + 4;
                      if (19 < Zl) {
                        vs.a = 3;
                        var ys = 0;
                        break i;
                      }
                      for (bs = 0; bs < Zl; ++bs) Xl[mh[bs]] = de(Xr, 3);
                      var Lo = void 0, Ia = void 0, Ql = vs, Hh = Xl, xs = _o, ec = Ca, So = 0, Zr = Ql.m, tc = 8, nc = h(128, R);
                      r: for (; O(nc, 0, 7, Hh, 19); ) {
                        if (de(Zr, 1)) {
                          var Wh = 2 + 2 * de(Zr, 3);
                          if ((Lo = 2 + de(Zr, Wh)) > xs) break r;
                        } else Lo = xs;
                        for (Ia = 0; Ia < xs && Lo--; ) {
                          Q(Zr);
                          var rc = nc[0 + (127 & U(Zr))];
                          K(Zr, Zr.u + rc.g);
                          var Wi = rc.value;
                          if (16 > Wi) ec[Ia++] = Wi, Wi != 0 && (tc = Wi);
                          else {
                            var Gh = Wi == 16, ic = Wi - 16, Vh = dh[ic], ac = de(Zr, hh[ic]) + Vh;
                            if (Ia + ac > xs) break r;
                            for (var $h = Gh ? tc : 0; 0 < ac--; ) ec[Ia++] = $h;
                          }
                        }
                        So = 1;
                        break r;
                      }
                      So || (Ql.a = 3), ws = So;
                    }
                    (ws = ws && !Xr.h) && (Ao = O(Th, Bh, 8, Ca, _o)), ws && Ao != 0 ? ys = Ao : (vs.a = 3, ys = 0);
                  }
                  if (ys == 0) break n;
                  if (Fr && ph[nt] == 1 && (Fr = Fn[mt].g == 0), _i += Fn[mt].g, mt += ys, 3 >= nt) {
                    var ja, ko = Ln[0];
                    for (ja = 1; ja < rn; ++ja) Ln[ja] > ko && (ko = Ln[ja]);
                    hn += ko;
                  }
                }
                if (jt.nd = Fr, jt.Qb = 0, Fr && (jt.qb = (Mn[3][er[3] + 0].value << 24 | Mn[1][er[1] + 0].value << 16 | Mn[2][er[2] + 0].value) >>> 0, _i == 0 && 256 > Mn[0][er[0] + 0].value && (jt.Qb = 1, jt.qb += Mn[0][er[0] + 0].value << 8)), jt.jc = !jt.Qb && 6 > hn, jt.jc) {
                  var Ns, Mr = jt;
                  for (Ns = 0; Ns < yi; ++Ns) {
                    var Qr = Ns, ei = Mr.pd[Qr], _s = Mr.G[0][Mr.H[0] + Qr];
                    256 <= _s.value ? (ei.g = _s.g + 256, ei.value = _s.value) : (ei.g = 0, ei.value = 0, Qr >>= an(_s, 8, ei), Qr >>= an(Mr.G[1][Mr.H[1] + Qr], 16, ei), Qr >>= an(Mr.G[2][Mr.H[2] + Qr], 0, ei), an(Mr.G[3][Mr.H[3] + Qr], 24, ei));
                  }
                }
              }
              nn.vc = vt, nn.Wb = _t, nn.Ya = En, nn.yc = In, Se = 1;
              break t;
            }
            Se = 0;
          }
          if (!(y = Se)) {
            m.a = 3;
            break e;
          }
          if (0 < ae) {
            if (j.ua = 1 << ae, !P(j.Wa, ae)) {
              m.a = 1, y = 0;
              break e;
            }
          } else j.ua = 0;
          var Po = m, sc = N, Kh = A, Co = Po.s, Io = Co.xc;
          if (Po.c = sc, Po.i = Kh, Co.md = Ne(sc, Io), Co.wc = Io == 0 ? -1 : (1 << Io) - 1, f) {
            m.xb = Lh;
            break e;
          }
          if ((G = a(N * A)) == null) {
            m.a = 1, y = 0;
            break e;
          }
          y = (y = Yn(m, G, 0, N, A, A, null)) && !k.h;
          break e;
        }
        return y ? (v != null ? v[0] = G : (e(G == null), e(f)), m.$ = 0, f || Tn(j)) : Tn(j), y;
      }
      function ci(i, o) {
        var f = i.c * i.i, m = f + o + 16 * o;
        return e(i.c <= o), i.V = a(m), i.V == null ? (i.Ta = null, i.Ua = 0, i.a = 1, 0) : (i.Ta = i.V, i.Ua = i.Ba + f + o, 1);
      }
      function Ei(i, o) {
        var f = i.C, m = o - f, v = i.V, y = i.Ba + i.c * f;
        for (e(o <= i.l.o); 0 < m; ) {
          var N = 16 < m ? 16 : m, A = i.l.ma, k = i.l.width, j = k * N, G = A.ca, ae = A.tb + k * f, E = i.Ta, J = i.Ua;
          oi(i, N, v, y), El(E, J, G, ae, j), ar(A, f, f + N, G, ae, k), m -= N, v += N * i.c, f += N;
        }
        e(f == o), i.C = i.Ma = o;
      }
      function Fi() {
        this.ub = this.yd = this.td = this.Rb = 0;
      }
      function Mi() {
        this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
      }
      function Zs() {
        this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4);
      }
      function ia() {
        this.Yb = function() {
          var i = [];
          return function o(f, m, v) {
            for (var y = v[m], N = 0; N < y && (f.push(v.length > m + 1 ? [] : 0), !(v.length < m + 1)); N++) o(f[N], m + 1, v);
          }(i, 0, [
            3,
            11
          ]), i;
        }();
      }
      function za() {
        this.jb = a(3), this.Wc = l([
          4,
          8
        ], ia), this.Xc = l([
          4,
          17
        ], ia);
      }
      function Ha() {
        this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4);
      }
      function Bn() {
        this.ld = this.La = this.dd = this.tc = 0;
      }
      function aa() {
        this.Na = this.la = 0;
      }
      function Wa() {
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
      function sa() {
        this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
      }
      function Ga() {
        this.uc = this.M = this.Nb = 0, this.wa = Array(new Bn()), this.Y = 0, this.ya = Array(new sa()), this.aa = 0, this.l = new Ri();
      }
      function Va() {
        this.y = a(16), this.f = a(8), this.ea = a(8);
      }
      function $a() {
        this.cb = this.a = 0, this.sc = "", this.m = new x(), this.Od = new Fi(), this.Kc = new Mi(), this.ed = new Ha(), this.Qa = new Zs(), this.Ic = this.$c = this.Aa = 0, this.D = new Ga(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = h(8, x), this.ia = 0, this.pb = h(4, Wa), this.Pa = new za(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
          0,
          0,
          0,
          0
        ], this.Gd = Array(new Va()), this.Hd = 0, this.rb = Array(new aa()), this.sb = 0, this.wa = Array(new Bn()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new sa()), this.L = this.aa = 0, this.gd = l([
          4,
          2
        ], Bn), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
      }
      function or(i, o) {
        return 0 > i ? 0 : i > o ? o : i;
      }
      function Ri() {
        this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
      }
      function Qs() {
        var i = new $a();
        return i != null && (i.a = 0, i.sc = "OK", i.cb = 0, i.Xb = 0, ka || (ka = Oi)), i;
      }
      function Yt(i, o, f) {
        return i.a == 0 && (i.a = o, i.sc = f, i.cb = 0), 0;
      }
      function Ka(i, o, f) {
        return 3 <= f && i[o + 0] == 157 && i[o + 1] == 1 && i[o + 2] == 42;
      }
      function lr(i, o) {
        if (i == null) return 0;
        if (i.a = 0, i.sc = "OK", o == null) return Yt(i, 2, "null VP8Io passed to VP8GetHeaders()");
        var f = o.data, m = o.w, v = o.ha;
        if (4 > v) return Yt(i, 7, "Truncated header.");
        var y = f[m + 0] | f[m + 1] << 8 | f[m + 2] << 16, N = i.Od;
        if (N.Rb = !(1 & y), N.td = y >> 1 & 7, N.yd = y >> 4 & 1, N.ub = y >> 5, 3 < N.td) return Yt(i, 3, "Incorrect keyframe parameters.");
        if (!N.yd) return Yt(i, 4, "Frame not displayable.");
        m += 3, v -= 3;
        var A = i.Kc;
        if (N.Rb) {
          if (7 > v) return Yt(i, 7, "cannot parse picture header");
          if (!Ka(f, m, v)) return Yt(i, 3, "Bad code word");
          A.c = 16383 & (f[m + 4] << 8 | f[m + 3]), A.Td = f[m + 4] >> 6, A.i = 16383 & (f[m + 6] << 8 | f[m + 5]), A.Ud = f[m + 6] >> 6, m += 7, v -= 7, i.za = A.c + 15 >> 4, i.Ub = A.i + 15 >> 4, o.width = A.c, o.height = A.i, o.Da = 0, o.j = 0, o.v = 0, o.va = o.width, o.o = o.height, o.da = 0, o.ib = o.width, o.hb = o.height, o.U = o.width, o.T = o.height, s((y = i.Pa).jb, 0, 255, y.jb.length), e((y = i.Qa) != null), y.Cb = 0, y.Bb = 0, y.Fb = 1, s(y.Zb, 0, 0, y.Zb.length), s(y.Lb, 0, 0, y.Lb);
        }
        if (N.ub > v) return Yt(i, 7, "bad partition length");
        se(y = i.m, f, m, N.ub), m += N.ub, v -= N.ub, N.Rb && (A.Ld = ue(y), A.Kd = ue(y)), A = i.Qa;
        var k, j = i.Pa;
        if (e(y != null), e(A != null), A.Cb = ue(y), A.Cb) {
          if (A.Bb = ue(y), ue(y)) {
            for (A.Fb = ue(y), k = 0; 4 > k; ++k) A.Zb[k] = ue(y) ? Y(y, 7) : 0;
            for (k = 0; 4 > k; ++k) A.Lb[k] = ue(y) ? Y(y, 6) : 0;
          }
          if (A.Bb) for (k = 0; 3 > k; ++k) j.jb[k] = ue(y) ? oe(y, 8) : 255;
        } else A.Bb = 0;
        if (y.Ka) return Yt(i, 3, "cannot parse segment header");
        if ((A = i.ed).zd = ue(y), A.Tb = oe(y, 6), A.wb = oe(y, 3), A.Pc = ue(y), A.Pc && ue(y)) {
          for (j = 0; 4 > j; ++j) ue(y) && (A.vd[j] = Y(y, 6));
          for (j = 0; 4 > j; ++j) ue(y) && (A.od[j] = Y(y, 6));
        }
        if (i.L = A.Tb == 0 ? 0 : A.zd ? 1 : 2, y.Ka) return Yt(i, 3, "cannot parse filter header");
        var G = v;
        if (v = k = m, m = k + G, A = G, i.Xb = (1 << oe(i.m, 2)) - 1, G < 3 * (j = i.Xb)) f = 7;
        else {
          for (k += 3 * j, A -= 3 * j, G = 0; G < j; ++G) {
            var ae = f[v + 0] | f[v + 1] << 8 | f[v + 2] << 16;
            ae > A && (ae = A), se(i.Jc[+G], f, k, ae), k += ae, A -= ae, v += 3;
          }
          se(i.Jc[+j], f, k, A), f = k < m ? 0 : 5;
        }
        if (f != 0) return Yt(i, f, "cannot parse partitions");
        for (f = oe(k = i.m, 7), v = ue(k) ? Y(k, 4) : 0, m = ue(k) ? Y(k, 4) : 0, A = ue(k) ? Y(k, 4) : 0, j = ue(k) ? Y(k, 4) : 0, k = ue(k) ? Y(k, 4) : 0, G = i.Qa, ae = 0; 4 > ae; ++ae) {
          if (G.Cb) {
            var E = G.Zb[ae];
            G.Fb || (E += f);
          } else {
            if (0 < ae) {
              i.pb[ae] = i.pb[0];
              continue;
            }
            E = f;
          }
          var J = i.pb[ae];
          J.Sc[0] = yo[or(E + v, 127)], J.Sc[1] = xo[or(E + 0, 127)], J.Eb[0] = 2 * yo[or(E + m, 127)], J.Eb[1] = 101581 * xo[or(E + A, 127)] >> 16, 8 > J.Eb[1] && (J.Eb[1] = 8), J.Qc[0] = yo[or(E + j, 117)], J.Qc[1] = xo[or(E + k, 127)], J.lc = E + k;
        }
        if (!N.Rb) return Yt(i, 4, "Not a key frame.");
        for (ue(y), N = i.Pa, f = 0; 4 > f; ++f) {
          for (v = 0; 8 > v; ++v) for (m = 0; 3 > m; ++m) for (A = 0; 11 > A; ++A) j = ve(y, _h[f][v][m][A]) ? oe(y, 8) : xh[f][v][m][A], N.Wc[f][v].Yb[m][A] = j;
          for (v = 0; 17 > v; ++v) N.Xc[f][v] = N.Wc[f][Ah[v]];
        }
        return i.kc = ue(y), i.kc && (i.Bd = oe(y, 8)), i.cb = 1;
      }
      function Oi(i, o, f, m, v, y, N) {
        var A = o[v].Yb[f];
        for (f = 0; 16 > v; ++v) {
          if (!ve(i, A[f + 0])) return v;
          for (; !ve(i, A[f + 1]); ) if (A = o[++v].Yb[0], f = 0, v == 16) return 16;
          var k = o[v + 1].Yb;
          if (ve(i, A[f + 2])) {
            var j = i, G = 0;
            if (ve(j, (E = A)[(ae = f) + 3])) if (ve(j, E[ae + 6])) {
              for (A = 0, ae = 2 * (G = ve(j, E[ae + 8])) + (E = ve(j, E[ae + 9 + G])), G = 0, E = wh[ae]; E[A]; ++A) G += G + ve(j, E[A]);
              G += 3 + (8 << ae);
            } else ve(j, E[ae + 7]) ? (G = 7 + 2 * ve(j, 165), G += ve(j, 145)) : G = 5 + ve(j, 159);
            else G = ve(j, E[ae + 4]) ? 3 + ve(j, E[ae + 5]) : 2;
            A = k[2];
          } else G = 1, A = k[1];
          k = N + yh[v], 0 > (j = i).b && ce(j);
          var ae, E = j.b, J = (ae = j.Ca >> 1) - (j.I >> E) >> 31;
          --j.b, j.Ca += J, j.Ca |= 1, j.I -= (ae + 1 & J) << E, y[k] = ((G ^ J) - J) * m[(0 < v) + 0];
        }
        return 16;
      }
      function Ya(i) {
        var o = i.rb[i.sb - 1];
        o.la = 0, o.Na = 0, s(i.zc, 0, 0, i.zc.length), i.ja = 0;
      }
      function qn(i, o, f, m, v) {
        v = i[o + f + 32 * m] + (v >> 3), i[o + f + 32 * m] = -256 & v ? 0 > v ? 0 : 255 : v;
      }
      function Zt(i, o, f, m, v, y) {
        qn(i, o, 0, f, m + v), qn(i, o, 1, f, m + y), qn(i, o, 2, f, m - y), qn(i, o, 3, f, m - v);
      }
      function yr(i) {
        return (20091 * i >> 16) + i;
      }
      function Ja(i, o, f, m) {
        var v, y = 0, N = a(16);
        for (v = 0; 4 > v; ++v) {
          var A = i[o + 0] + i[o + 8], k = i[o + 0] - i[o + 8], j = (35468 * i[o + 4] >> 16) - yr(i[o + 12]), G = yr(i[o + 4]) + (35468 * i[o + 12] >> 16);
          N[y + 0] = A + G, N[y + 1] = k + j, N[y + 2] = k - j, N[y + 3] = A - G, y += 4, o++;
        }
        for (v = y = 0; 4 > v; ++v) A = (i = N[y + 0] + 4) + N[y + 8], k = i - N[y + 8], j = (35468 * N[y + 4] >> 16) - yr(N[y + 12]), qn(f, m, 0, 0, A + (G = yr(N[y + 4]) + (35468 * N[y + 12] >> 16))), qn(f, m, 1, 0, k + j), qn(f, m, 2, 0, k - j), qn(f, m, 3, 0, A - G), y++, m += 32;
      }
      function eo(i, o, f, m) {
        var v = i[o + 0] + 4, y = 35468 * i[o + 4] >> 16, N = yr(i[o + 4]), A = 35468 * i[o + 1] >> 16;
        Zt(f, m, 0, v + N, i = yr(i[o + 1]), A), Zt(f, m, 1, v + y, i, A), Zt(f, m, 2, v - y, i, A), Zt(f, m, 3, v - N, i, A);
      }
      function to(i, o, f, m, v) {
        Ja(i, o, f, m), v && Ja(i, o + 16, f, m + 4);
      }
      function cr(i, o, f, m) {
        Ni(i, o + 0, f, m, 1), Ni(i, o + 32, f, m + 128, 1);
      }
      function Xa(i, o, f, m) {
        var v;
        for (i = i[o + 0] + 4, v = 0; 4 > v; ++v) for (o = 0; 4 > o; ++o) qn(f, m, o, v, i);
      }
      function Za(i, o, f, m) {
        i[o + 0] && Nt(i, o + 0, f, m), i[o + 16] && Nt(i, o + 16, f, m + 4), i[o + 32] && Nt(i, o + 32, f, m + 128), i[o + 48] && Nt(i, o + 48, f, m + 128 + 4);
      }
      function Di(i, o, f, m) {
        var v, y = a(16);
        for (v = 0; 4 > v; ++v) {
          var N = i[o + 0 + v] + i[o + 12 + v], A = i[o + 4 + v] + i[o + 8 + v], k = i[o + 4 + v] - i[o + 8 + v], j = i[o + 0 + v] - i[o + 12 + v];
          y[0 + v] = N + A, y[8 + v] = N - A, y[4 + v] = j + k, y[12 + v] = j - k;
        }
        for (v = 0; 4 > v; ++v) N = (i = y[0 + 4 * v] + 3) + y[3 + 4 * v], A = y[1 + 4 * v] + y[2 + 4 * v], k = y[1 + 4 * v] - y[2 + 4 * v], j = i - y[3 + 4 * v], f[m + 0] = N + A >> 3, f[m + 16] = j + k >> 3, f[m + 32] = N - A >> 3, f[m + 48] = j - k >> 3, m += 64;
      }
      function ui(i, o, f) {
        var m, v = o - 32, y = Cn, N = 255 - i[v - 1];
        for (m = 0; m < f; ++m) {
          var A, k = y, j = N + i[o - 1];
          for (A = 0; A < f; ++A) i[o + A] = k[j + i[v + A]];
          o += 32;
        }
      }
      function no(i, o) {
        ui(i, o, 4);
      }
      function ro(i, o) {
        ui(i, o, 8);
      }
      function io(i, o) {
        ui(i, o, 16);
      }
      function oa(i, o) {
        var f;
        for (f = 0; 16 > f; ++f) r(i, o + 32 * f, i, o - 32, 16);
      }
      function Qa(i, o) {
        var f;
        for (f = 16; 0 < f; --f) s(i, o, i[o - 1], 16), o += 32;
      }
      function Jn(i, o, f) {
        var m;
        for (m = 0; 16 > m; ++m) s(o, f + 32 * m, i, 16);
      }
      function ao(i, o) {
        var f, m = 16;
        for (f = 0; 16 > f; ++f) m += i[o - 1 + 32 * f] + i[o + f - 32];
        Jn(m >> 5, i, o);
      }
      function fi(i, o) {
        var f, m = 8;
        for (f = 0; 16 > f; ++f) m += i[o - 1 + 32 * f];
        Jn(m >> 4, i, o);
      }
      function la(i, o) {
        var f, m = 8;
        for (f = 0; 16 > f; ++f) m += i[o + f - 32];
        Jn(m >> 4, i, o);
      }
      function so(i, o) {
        Jn(128, i, o);
      }
      function Ze(i, o, f) {
        return i + 2 * o + f + 2 >> 2;
      }
      function oo(i, o) {
        var f, m = o - 32;
        for (m = new Uint8Array([
          Ze(i[m - 1], i[m + 0], i[m + 1]),
          Ze(i[m + 0], i[m + 1], i[m + 2]),
          Ze(i[m + 1], i[m + 2], i[m + 3]),
          Ze(i[m + 2], i[m + 3], i[m + 4])
        ]), f = 0; 4 > f; ++f) r(i, o + 32 * f, m, 0, m.length);
      }
      function lo(i, o) {
        var f = i[o - 1], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96];
        Le(i, o + 0, 16843009 * Ze(i[o - 1 - 32], f, m)), Le(i, o + 32, 16843009 * Ze(f, m, v)), Le(i, o + 64, 16843009 * Ze(m, v, y)), Le(i, o + 96, 16843009 * Ze(v, y, y));
      }
      function co(i, o) {
        var f, m = 4;
        for (f = 0; 4 > f; ++f) m += i[o + f - 32] + i[o - 1 + 32 * f];
        for (m >>= 3, f = 0; 4 > f; ++f) s(i, o + 32 * f, m, 4);
      }
      function xr(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 - 32], N = i[o + 0 - 32], A = i[o + 1 - 32], k = i[o + 2 - 32], j = i[o + 3 - 32];
        i[o + 0 + 96] = Ze(m, v, i[o - 1 + 96]), i[o + 1 + 96] = i[o + 0 + 64] = Ze(f, m, v), i[o + 2 + 96] = i[o + 1 + 64] = i[o + 0 + 32] = Ze(y, f, m), i[o + 3 + 96] = i[o + 2 + 64] = i[o + 1 + 32] = i[o + 0 + 0] = Ze(N, y, f), i[o + 3 + 64] = i[o + 2 + 32] = i[o + 1 + 0] = Ze(A, N, y), i[o + 3 + 32] = i[o + 2 + 0] = Ze(k, A, N), i[o + 3 + 0] = Ze(j, k, A);
      }
      function Nr(i, o) {
        var f = i[o + 1 - 32], m = i[o + 2 - 32], v = i[o + 3 - 32], y = i[o + 4 - 32], N = i[o + 5 - 32], A = i[o + 6 - 32], k = i[o + 7 - 32];
        i[o + 0 + 0] = Ze(i[o + 0 - 32], f, m), i[o + 1 + 0] = i[o + 0 + 32] = Ze(f, m, v), i[o + 2 + 0] = i[o + 1 + 32] = i[o + 0 + 64] = Ze(m, v, y), i[o + 3 + 0] = i[o + 2 + 32] = i[o + 1 + 64] = i[o + 0 + 96] = Ze(v, y, N), i[o + 3 + 32] = i[o + 2 + 64] = i[o + 1 + 96] = Ze(y, N, A), i[o + 3 + 64] = i[o + 2 + 96] = Ze(N, A, k), i[o + 3 + 96] = Ze(A, k, k);
      }
      function uo(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 - 32], N = i[o + 0 - 32], A = i[o + 1 - 32], k = i[o + 2 - 32], j = i[o + 3 - 32];
        i[o + 0 + 0] = i[o + 1 + 64] = y + N + 1 >> 1, i[o + 1 + 0] = i[o + 2 + 64] = N + A + 1 >> 1, i[o + 2 + 0] = i[o + 3 + 64] = A + k + 1 >> 1, i[o + 3 + 0] = k + j + 1 >> 1, i[o + 0 + 96] = Ze(v, m, f), i[o + 0 + 64] = Ze(m, f, y), i[o + 0 + 32] = i[o + 1 + 96] = Ze(f, y, N), i[o + 1 + 32] = i[o + 2 + 96] = Ze(y, N, A), i[o + 2 + 32] = i[o + 3 + 96] = Ze(N, A, k), i[o + 3 + 32] = Ze(A, k, j);
      }
      function fo(i, o) {
        var f = i[o + 0 - 32], m = i[o + 1 - 32], v = i[o + 2 - 32], y = i[o + 3 - 32], N = i[o + 4 - 32], A = i[o + 5 - 32], k = i[o + 6 - 32], j = i[o + 7 - 32];
        i[o + 0 + 0] = f + m + 1 >> 1, i[o + 1 + 0] = i[o + 0 + 64] = m + v + 1 >> 1, i[o + 2 + 0] = i[o + 1 + 64] = v + y + 1 >> 1, i[o + 3 + 0] = i[o + 2 + 64] = y + N + 1 >> 1, i[o + 0 + 32] = Ze(f, m, v), i[o + 1 + 32] = i[o + 0 + 96] = Ze(m, v, y), i[o + 2 + 32] = i[o + 1 + 96] = Ze(v, y, N), i[o + 3 + 32] = i[o + 2 + 96] = Ze(y, N, A), i[o + 3 + 64] = Ze(N, A, k), i[o + 3 + 96] = Ze(A, k, j);
      }
      function Ti(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96];
        i[o + 0 + 0] = f + m + 1 >> 1, i[o + 2 + 0] = i[o + 0 + 32] = m + v + 1 >> 1, i[o + 2 + 32] = i[o + 0 + 64] = v + y + 1 >> 1, i[o + 1 + 0] = Ze(f, m, v), i[o + 3 + 0] = i[o + 1 + 32] = Ze(m, v, y), i[o + 3 + 32] = i[o + 1 + 64] = Ze(v, y, y), i[o + 3 + 64] = i[o + 2 + 64] = i[o + 0 + 96] = i[o + 1 + 96] = i[o + 2 + 96] = i[o + 3 + 96] = y;
      }
      function ca(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96], N = i[o - 1 - 32], A = i[o + 0 - 32], k = i[o + 1 - 32], j = i[o + 2 - 32];
        i[o + 0 + 0] = i[o + 2 + 32] = f + N + 1 >> 1, i[o + 0 + 32] = i[o + 2 + 64] = m + f + 1 >> 1, i[o + 0 + 64] = i[o + 2 + 96] = v + m + 1 >> 1, i[o + 0 + 96] = y + v + 1 >> 1, i[o + 3 + 0] = Ze(A, k, j), i[o + 2 + 0] = Ze(N, A, k), i[o + 1 + 0] = i[o + 3 + 32] = Ze(f, N, A), i[o + 1 + 32] = i[o + 3 + 64] = Ze(m, f, N), i[o + 1 + 64] = i[o + 3 + 96] = Ze(v, m, f), i[o + 1 + 96] = Ze(y, v, m);
      }
      function hi(i, o) {
        var f;
        for (f = 0; 8 > f; ++f) r(i, o + 32 * f, i, o - 32, 8);
      }
      function ho(i, o) {
        var f;
        for (f = 0; 8 > f; ++f) s(i, o, i[o - 1], 8), o += 32;
      }
      function _r(i, o, f) {
        var m;
        for (m = 0; 8 > m; ++m) s(o, f + 32 * m, i, 8);
      }
      function po(i, o) {
        var f, m = 8;
        for (f = 0; 8 > f; ++f) m += i[o + f - 32] + i[o - 1 + 32 * f];
        _r(m >> 4, i, o);
      }
      function ua(i, o) {
        var f, m = 4;
        for (f = 0; 8 > f; ++f) m += i[o + f - 32];
        _r(m >> 3, i, o);
      }
      function fa(i, o) {
        var f, m = 4;
        for (f = 0; 8 > f; ++f) m += i[o - 1 + 32 * f];
        _r(m >> 3, i, o);
      }
      function es(i, o) {
        _r(128, i, o);
      }
      function Ar(i, o, f) {
        var m = i[o - f], v = i[o + 0], y = 3 * (v - m) + mo[1020 + i[o - 2 * f] - i[o + f]], N = ls[112 + (y + 4 >> 3)];
        i[o - f] = Cn[255 + m + ls[112 + (y + 3 >> 3)]], i[o + 0] = Cn[255 + v - N];
      }
      function ha(i, o, f, m) {
        var v = i[o + 0], y = i[o + f];
        return Hn[255 + i[o - 2 * f] - i[o - f]] > m || Hn[255 + y - v] > m;
      }
      function Bi(i, o, f, m) {
        return 4 * Hn[255 + i[o - f] - i[o + 0]] + Hn[255 + i[o - 2 * f] - i[o + f]] <= m;
      }
      function da(i, o, f, m, v) {
        var y = i[o - 3 * f], N = i[o - 2 * f], A = i[o - f], k = i[o + 0], j = i[o + f], G = i[o + 2 * f], ae = i[o + 3 * f];
        return 4 * Hn[255 + A - k] + Hn[255 + N - j] > m ? 0 : Hn[255 + i[o - 4 * f] - y] <= v && Hn[255 + y - N] <= v && Hn[255 + N - A] <= v && Hn[255 + ae - G] <= v && Hn[255 + G - j] <= v && Hn[255 + j - k] <= v;
      }
      function di(i, o, f, m) {
        var v = 2 * m + 1;
        for (m = 0; 16 > m; ++m) Bi(i, o + m, f, v) && Ar(i, o + m, f);
      }
      function pa(i, o, f, m) {
        var v = 2 * m + 1;
        for (m = 0; 16 > m; ++m) Bi(i, o + m * f, 1, v) && Ar(i, o + m * f, 1);
      }
      function ts(i, o, f, m) {
        var v;
        for (v = 3; 0 < v; --v) di(i, o += 4 * f, f, m);
      }
      function ns(i, o, f, m) {
        var v;
        for (v = 3; 0 < v; --v) pa(i, o += 4, f, m);
      }
      function Lr(i, o, f, m, v, y, N, A) {
        for (y = 2 * y + 1; 0 < v--; ) {
          if (da(i, o, f, y, N)) if (ha(i, o, f, A)) Ar(i, o, f);
          else {
            var k = i, j = o, G = f, ae = k[j - 2 * G], E = k[j - G], J = k[j + 0], ne = k[j + G], fe = k[j + 2 * G], re = 27 * (me = mo[1020 + 3 * (J - E) + mo[1020 + ae - ne]]) + 63 >> 7, he = 18 * me + 63 >> 7, me = 9 * me + 63 >> 7;
            k[j - 3 * G] = Cn[255 + k[j - 3 * G] + me], k[j - 2 * G] = Cn[255 + ae + he], k[j - G] = Cn[255 + E + re], k[j + 0] = Cn[255 + J - re], k[j + G] = Cn[255 + ne - he], k[j + 2 * G] = Cn[255 + fe - me];
          }
          o += m;
        }
      }
      function Sr(i, o, f, m, v, y, N, A) {
        for (y = 2 * y + 1; 0 < v--; ) {
          if (da(i, o, f, y, N)) if (ha(i, o, f, A)) Ar(i, o, f);
          else {
            var k = i, j = o, G = f, ae = k[j - G], E = k[j + 0], J = k[j + G], ne = ls[112 + (4 + (fe = 3 * (E - ae)) >> 3)], fe = ls[112 + (fe + 3 >> 3)], re = ne + 1 >> 1;
            k[j - 2 * G] = Cn[255 + k[j - 2 * G] + re], k[j - G] = Cn[255 + ae + fe], k[j + 0] = Cn[255 + E - ne], k[j + G] = Cn[255 + J - re];
          }
          o += m;
        }
      }
      function rs(i, o, f, m, v, y) {
        Lr(i, o, f, 1, 16, m, v, y);
      }
      function pi(i, o, f, m, v, y) {
        Lr(i, o, 1, f, 16, m, v, y);
      }
      function is(i, o, f, m, v, y) {
        var N;
        for (N = 3; 0 < N; --N) Sr(i, o += 4 * f, f, 1, 16, m, v, y);
      }
      function c(i, o, f, m, v, y) {
        var N;
        for (N = 3; 0 < N; --N) Sr(i, o += 4, 1, f, 16, m, v, y);
      }
      function b(i, o, f, m, v, y, N, A) {
        Lr(i, o, v, 1, 8, y, N, A), Lr(f, m, v, 1, 8, y, N, A);
      }
      function F(i, o, f, m, v, y, N, A) {
        Lr(i, o, 1, v, 8, y, N, A), Lr(f, m, 1, v, 8, y, N, A);
      }
      function z(i, o, f, m, v, y, N, A) {
        Sr(i, o + 4 * v, v, 1, 8, y, N, A), Sr(f, m + 4 * v, v, 1, 8, y, N, A);
      }
      function Z(i, o, f, m, v, y, N, A) {
        Sr(i, o + 4, 1, v, 8, y, N, A), Sr(f, m + 4, 1, v, 8, y, N, A);
      }
      function pe() {
        this.ba = new ut(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xt(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
      }
      function we() {
        this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
      }
      function Fe() {
        this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
      }
      function De() {
        this.ua = 0, this.Wa = new ot(), this.vb = new ot(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new te(), this.yc = new R();
      }
      function Xe() {
        this.xb = this.a = 0, this.l = new Ri(), this.ca = new ut(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new T(), this.Pb = 0, this.wd = new T(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new De(), this.ab = 0, this.gc = h(4, Fe), this.Oc = 0;
      }
      function it() {
        this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Ri(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
      }
      function bt(i, o, f, m, v, y, N) {
        for (i = i == null ? 0 : i[o + 0], o = 0; o < N; ++o) v[y + o] = i + f[m + o] & 255, i = v[y + o];
      }
      function Ot(i, o, f, m, v, y, N) {
        var A;
        if (i == null) bt(null, null, f, m, v, y, N);
        else for (A = 0; A < N; ++A) v[y + A] = i[o + A] + f[m + A] & 255;
      }
      function Jt(i, o, f, m, v, y, N) {
        if (i == null) bt(null, null, f, m, v, y, N);
        else {
          var A, k = i[o + 0], j = k, G = k;
          for (A = 0; A < N; ++A) j = G + (k = i[o + A]) - j, G = f[m + A] + (-256 & j ? 0 > j ? 0 : 255 : j) & 255, j = k, v[y + A] = G;
        }
      }
      function It(i, o, f, m) {
        var v = o.width, y = o.o;
        if (e(i != null && o != null), 0 > f || 0 >= m || f + m > y) return null;
        if (!i.Cc) {
          if (i.ga == null) {
            var N;
            if (i.ga = new it(), (N = i.ga == null) || (N = o.width * o.o, e(i.Gb.length == 0), i.Gb = a(N), i.Uc = 0, i.Gb == null ? N = 0 : (i.mb = i.Gb, i.nb = i.Uc, i.rc = null, N = 1), N = !N), !N) {
              N = i.ga;
              var A = i.Fa, k = i.P, j = i.qc, G = i.mb, ae = i.nb, E = k + 1, J = j - 1, ne = N.l;
              if (e(A != null && G != null && o != null), Jr[0] = null, Jr[1] = bt, Jr[2] = Ot, Jr[3] = Jt, N.ca = G, N.tb = ae, N.c = o.width, N.i = o.height, e(0 < N.c && 0 < N.i), 1 >= j) o = 0;
              else if (N.$a = 3 & A[k + 0], N.Z = A[k + 0] >> 2 & 3, N.Lc = A[k + 0] >> 4 & 3, k = A[k + 0] >> 6 & 3, 0 > N.$a || 1 < N.$a || 4 <= N.Z || 1 < N.Lc || k) o = 0;
              else if (ne.put = Ke, ne.ac = ir, ne.bc = vr, ne.ma = N, ne.width = o.width, ne.height = o.height, ne.Da = o.Da, ne.v = o.v, ne.va = o.va, ne.j = o.j, ne.o = o.o, N.$a) e: {
                e(N.$a == 1), o = li();
                t: for (; ; ) {
                  if (o == null) {
                    o = 0;
                    break e;
                  }
                  if (e(N != null), N.mc = o, o.c = N.c, o.i = N.i, o.l = N.l, o.l.ma = N, o.l.width = N.c, o.l.height = N.i, o.a = 0, X(o.m, A, E, J), !sr(N.c, N.i, 1, o, null) || (o.ab == 1 && o.gc[0].hc == 3 && $n(o.s) ? (N.ic = 1, A = o.c * o.i, o.Ta = null, o.Ua = 0, o.V = a(A), o.Ba = 0, o.V == null ? (o.a = 1, o = 0) : o = 1) : (N.ic = 0, o = ci(o, N.c)), !o)) break t;
                  o = 1;
                  break e;
                }
                N.mc = null, o = 0;
              }
              else o = J >= N.c * N.i;
              N = !o;
            }
            if (N) return null;
            i.ga.Lc != 1 ? i.Ga = 0 : m = y - f;
          }
          e(i.ga != null), e(f + m <= y);
          e: {
            if (o = (A = i.ga).c, y = A.l.o, A.$a == 0) {
              if (E = i.rc, J = i.Vc, ne = i.Fa, k = i.P + 1 + f * o, j = i.mb, G = i.nb + f * o, e(k <= i.P + i.qc), A.Z != 0) for (e(Jr[A.Z] != null), N = 0; N < m; ++N) Jr[A.Z](E, J, ne, k, j, G, o), E = j, J = G, G += o, k += o;
              else for (N = 0; N < m; ++N) r(j, G, ne, k, o), E = j, J = G, G += o, k += o;
              i.rc = E, i.Vc = J;
            } else {
              if (e(A.mc != null), o = f + m, e((N = A.mc) != null), e(o <= N.i), N.C >= o) o = 1;
              else if (A.ic || Xn(), A.ic) {
                A = N.V, E = N.Ba, J = N.c;
                var fe = N.i, re = (ne = 1, k = N.$ / J, j = N.$ % J, G = N.m, ae = N.s, N.$), he = J * fe, me = J * o, Ae = ae.wc, ye = re < me ? on(ae, j, k) : null;
                e(re <= he), e(o <= fe), e($n(ae));
                t: for (; ; ) {
                  for (; !G.h && re < me; ) {
                    if (j & Ae || (ye = on(ae, j, k)), e(ye != null), Q(G), 256 > (fe = Dt(ye.G[0], ye.H[0], G))) A[E + re] = fe, ++re, ++j >= J && (j = 0, ++k <= o && !(k % 16) && Kn(N, k));
                    else {
                      if (!(280 > fe)) {
                        ne = 0;
                        break t;
                      }
                      fe = On(fe - 256, G);
                      var Te, Ie = Dt(ye.G[4], ye.H[4], G);
                      if (Q(G), !(re >= (Ie = Dn(J, Ie = On(Ie, G))) && he - re >= fe)) {
                        ne = 0;
                        break t;
                      }
                      for (Te = 0; Te < fe; ++Te) A[E + re + Te] = A[E + re + Te - Ie];
                      for (re += fe, j += fe; j >= J; ) j -= J, ++k <= o && !(k % 16) && Kn(N, k);
                      re < me && j & Ae && (ye = on(ae, j, k));
                    }
                    e(G.h == $(G));
                  }
                  Kn(N, k > o ? o : k);
                  break t;
                }
                !ne || G.h && re < he ? (ne = 0, N.a = G.h ? 5 : 3) : N.$ = re, o = ne;
              } else o = Yn(N, N.V, N.Ba, N.c, N.i, o, Ei);
              if (!o) {
                m = 0;
                break e;
              }
            }
            f + m >= y && (i.Cc = 1), m = 1;
          }
          if (!m) return null;
          if (i.Cc && ((m = i.ga) != null && (m.mc = null), i.ga = null, 0 < i.Ga)) return alert("todo:WebPDequantizeLevels"), null;
        }
        return i.nb + f * v;
      }
      function Qt(i, o, f, m, v, y) {
        for (; 0 < v--; ) {
          var N, A = i, k = o + (f ? 1 : 0), j = i, G = o + (f ? 0 : 3);
          for (N = 0; N < m; ++N) {
            var ae = j[G + 4 * N];
            ae != 255 && (ae *= 32897, A[k + 4 * N + 0] = A[k + 4 * N + 0] * ae >> 23, A[k + 4 * N + 1] = A[k + 4 * N + 1] * ae >> 23, A[k + 4 * N + 2] = A[k + 4 * N + 2] * ae >> 23);
          }
          o += y;
        }
      }
      function Xt(i, o, f, m, v) {
        for (; 0 < m--; ) {
          var y;
          for (y = 0; y < f; ++y) {
            var N = i[o + 2 * y + 0], A = 15 & (j = i[o + 2 * y + 1]), k = 4369 * A, j = (240 & j | j >> 4) * k >> 16;
            i[o + 2 * y + 0] = (240 & N | N >> 4) * k >> 16 & 240 | (15 & N | N << 4) * k >> 16 >> 4 & 15, i[o + 2 * y + 1] = 240 & j | A;
          }
          o += v;
        }
      }
      function ln(i, o, f, m, v, y, N, A) {
        var k, j, G = 255;
        for (j = 0; j < v; ++j) {
          for (k = 0; k < m; ++k) {
            var ae = i[o + k];
            y[N + 4 * k] = ae, G &= ae;
          }
          o += f, N += A;
        }
        return G != 255;
      }
      function kr(i, o, f, m, v) {
        var y;
        for (y = 0; y < v; ++y) f[m + y] = i[o + y] >> 8;
      }
      function Xn() {
        Sa = Qt, Il = Xt, jl = ln, El = kr;
      }
      function Pr(i, o, f) {
        H[i] = function(m, v, y, N, A, k, j, G, ae, E, J, ne, fe, re, he, me, Ae) {
          var ye, Te = Ae - 1 >> 1, Ie = A[k + 0] | j[G + 0] << 16, at = ae[E + 0] | J[ne + 0] << 16;
          e(m != null);
          var Me = 3 * Ie + at + 131074 >> 2;
          for (o(m[v + 0], 255 & Me, Me >> 16, fe, re), y != null && (Me = 3 * at + Ie + 131074 >> 2, o(y[N + 0], 255 & Me, Me >> 16, he, me)), ye = 1; ye <= Te; ++ye) {
            var pt = A[k + ye] | j[G + ye] << 16, tn = ae[E + ye] | J[ne + ye] << 16, st = Ie + pt + at + tn + 524296, Re = st + 2 * (pt + at) >> 3;
            Me = Re + Ie >> 1, Ie = (st = st + 2 * (Ie + tn) >> 3) + pt >> 1, o(m[v + 2 * ye - 1], 255 & Me, Me >> 16, fe, re + (2 * ye - 1) * f), o(m[v + 2 * ye - 0], 255 & Ie, Ie >> 16, fe, re + (2 * ye - 0) * f), y != null && (Me = st + at >> 1, Ie = Re + tn >> 1, o(y[N + 2 * ye - 1], 255 & Me, Me >> 16, he, me + (2 * ye - 1) * f), o(y[N + 2 * ye + 0], 255 & Ie, Ie >> 16, he, me + (2 * ye + 0) * f)), Ie = pt, at = tn;
          }
          1 & Ae || (Me = 3 * Ie + at + 131074 >> 2, o(m[v + Ae - 1], 255 & Me, Me >> 16, fe, re + (Ae - 1) * f), y != null && (Me = 3 * at + Ie + 131074 >> 2, o(y[N + Ae - 1], 255 & Me, Me >> 16, he, me + (Ae - 1) * f)));
        };
      }
      function ma() {
        Wn[cs] = Sh, Wn[us] = Hl, Wn[Tl] = kh, Wn[fs] = Wl, Wn[hs] = Gl, Wn[go] = Vl, Wn[Bl] = Ph, Wn[bo] = Hl, Wn[vo] = Wl, Wn[ds] = Gl, Wn[wo] = Vl;
      }
      function qi(i) {
        return i & -16384 ? 0 > i ? 0 : 255 : i >> Ch;
      }
      function qr(i, o) {
        return qi((19077 * i >> 8) + (26149 * o >> 8) - 14234);
      }
      function mi(i, o, f) {
        return qi((19077 * i >> 8) - (6419 * o >> 8) - (13320 * f >> 8) + 8708);
      }
      function gi(i, o) {
        return qi((19077 * i >> 8) + (33050 * o >> 8) - 17685);
      }
      function Ur(i, o, f, m, v) {
        m[v + 0] = qr(i, f), m[v + 1] = mi(i, o, f), m[v + 2] = gi(i, o);
      }
      function cn(i, o, f, m, v) {
        m[v + 0] = gi(i, o), m[v + 1] = mi(i, o, f), m[v + 2] = qr(i, f);
      }
      function bi(i, o, f, m, v) {
        var y = mi(i, o, f);
        o = y << 3 & 224 | gi(i, o) >> 3, m[v + 0] = 248 & qr(i, f) | y >> 5, m[v + 1] = o;
      }
      function vi(i, o, f, m, v) {
        var y = 240 & gi(i, o) | 15;
        m[v + 0] = 240 & qr(i, f) | mi(i, o, f) >> 4, m[v + 1] = y;
      }
      function ga(i, o, f, m, v) {
        m[v + 0] = 255, Ur(i, o, f, m, v + 1);
      }
      function ba(i, o, f, m, v) {
        cn(i, o, f, m, v), m[v + 3] = 255;
      }
      function wn(i, o, f, m, v) {
        Ur(i, o, f, m, v), m[v + 3] = 255;
      }
      function Cr(i, o, f) {
        H[i] = function(m, v, y, N, A, k, j, G, ae) {
          for (var E = G + (-2 & ae) * f; G != E; ) o(m[v + 0], y[N + 0], A[k + 0], j, G), o(m[v + 1], y[N + 0], A[k + 0], j, G + f), v += 2, ++N, ++k, G += 2 * f;
          1 & ae && o(m[v + 0], y[N + 0], A[k + 0], j, G);
        };
      }
      function Ui(i, o, f) {
        return f == 0 ? i == 0 ? o == 0 ? 6 : 5 : o == 0 ? 4 : 0 : f;
      }
      function as(i, o, f, m, v) {
        switch (i >>> 30) {
          case 3:
            Ni(o, f, m, v, 0);
            break;
          case 2:
            zn(o, f, m, v);
            break;
          case 1:
            Nt(o, f, m, v);
        }
      }
      function Un(i, o) {
        var f, m, v = o.M, y = o.Nb, N = i.oc, A = i.pc + 40, k = i.oc, j = i.pc + 584, G = i.oc, ae = i.pc + 600;
        for (f = 0; 16 > f; ++f) N[A + 32 * f - 1] = 129;
        for (f = 0; 8 > f; ++f) k[j + 32 * f - 1] = 129, G[ae + 32 * f - 1] = 129;
        for (0 < v ? N[A - 1 - 32] = k[j - 1 - 32] = G[ae - 1 - 32] = 129 : (s(N, A - 32 - 1, 127, 21), s(k, j - 32 - 1, 127, 9), s(G, ae - 32 - 1, 127, 9)), m = 0; m < i.za; ++m) {
          var E = o.ya[o.aa + m];
          if (0 < m) {
            for (f = -1; 16 > f; ++f) r(N, A + 32 * f - 4, N, A + 32 * f + 12, 4);
            for (f = -1; 8 > f; ++f) r(k, j + 32 * f - 4, k, j + 32 * f + 4, 4), r(G, ae + 32 * f - 4, G, ae + 32 * f + 4, 4);
          }
          var J = i.Gd, ne = i.Hd + m, fe = E.ad, re = E.Hc;
          if (0 < v && (r(N, A - 32, J[ne].y, 0, 16), r(k, j - 32, J[ne].f, 0, 8), r(G, ae - 32, J[ne].ea, 0, 8)), E.Za) {
            var he = N, me = A - 32 + 16;
            for (0 < v && (m >= i.za - 1 ? s(he, me, J[ne].y[15], 4) : r(he, me, J[ne + 1].y, 0, 4)), f = 0; 4 > f; f++) he[me + 128 + f] = he[me + 256 + f] = he[me + 384 + f] = he[me + 0 + f];
            for (f = 0; 16 > f; ++f, re <<= 2) he = N, me = A + Kl[f], Zn[E.Ob[f]](he, me), as(re, fe, 16 * +f, he, me);
          } else if (he = Ui(m, v, E.Ob[0]), Yr[he](N, A), re != 0) for (f = 0; 16 > f; ++f, re <<= 2) as(re, fe, 16 * +f, N, A + Kl[f]);
          for (f = E.Gc, he = Ui(m, v, E.Dd), Er[he](k, j), Er[he](G, ae), re = fe, he = k, me = j, 255 & (E = 0 | f) && (170 & E ? hr(re, 256, he, me) : St(re, 256, he, me)), E = G, re = ae, 255 & (f >>= 8) && (170 & f ? hr(fe, 320, E, re) : St(fe, 320, E, re)), v < i.Ub - 1 && (r(J[ne].y, 0, N, A + 480, 16), r(J[ne].f, 0, k, j + 224, 8), r(J[ne].ea, 0, G, ae + 224, 8)), f = 8 * y * i.B, J = i.sa, ne = i.ta + 16 * m + 16 * y * i.R, fe = i.qa, E = i.ra + 8 * m + f, re = i.Ha, he = i.Ia + 8 * m + f, f = 0; 16 > f; ++f) r(J, ne + f * i.R, N, A + 32 * f, 16);
          for (f = 0; 8 > f; ++f) r(fe, E + f * i.B, k, j + 32 * f, 8), r(re, he + f * i.B, G, ae + 32 * f, 8);
        }
      }
      function wi(i, o, f, m, v, y, N, A, k) {
        var j = [
          0
        ], G = [
          0
        ], ae = 0, E = k != null ? k.kd : 0, J = k ?? new we();
        if (i == null || 12 > f) return 7;
        J.data = i, J.w = o, J.ha = f, o = [
          o
        ], f = [
          f
        ], J.gb = [
          J.gb
        ];
        e: {
          var ne = o, fe = f, re = J.gb;
          if (e(i != null), e(fe != null), e(re != null), re[0] = 0, 12 <= fe[0] && !t(i, ne[0], "RIFF")) {
            if (t(i, ne[0] + 8, "WEBP")) {
              re = 3;
              break e;
            }
            var he = We(i, ne[0] + 4);
            if (12 > he || 4294967286 < he) {
              re = 3;
              break e;
            }
            if (E && he > fe[0] - 8) {
              re = 7;
              break e;
            }
            re[0] = he, ne[0] += 12, fe[0] -= 12;
          }
          re = 0;
        }
        if (re != 0) return re;
        for (he = 0 < J.gb[0], f = f[0]; ; ) {
          e: {
            var me = i;
            fe = o, re = f;
            var Ae = j, ye = G, Te = ne = [
              0
            ];
            if ((Me = ae = [
              ae
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
                var Ie = We(me, fe[0] + 8), at = 1 + Ce(me, fe[0] + 12);
                if (2147483648 <= at * (me = 1 + Ce(me, fe[0] + 15))) {
                  re = 3;
                  break e;
                }
                Te != null && (Te[0] = Ie), Ae != null && (Ae[0] = at), ye != null && (ye[0] = me), fe[0] += 18, re[0] -= 18, Me[0] = 1;
              }
              re = 0;
            }
          }
          if (ae = ae[0], ne = ne[0], re != 0) return re;
          if (fe = !!(2 & ne), !he && ae) return 3;
          if (y != null && (y[0] = !!(16 & ne)), N != null && (N[0] = fe), A != null && (A[0] = 0), N = j[0], ne = G[0], ae && fe && k == null) {
            re = 0;
            break;
          }
          if (4 > f) {
            re = 7;
            break;
          }
          if (he && ae || !he && !ae && !t(i, o[0], "ALPH")) {
            f = [
              f
            ], J.na = [
              J.na
            ], J.P = [
              J.P
            ], J.Sa = [
              J.Sa
            ];
            e: {
              Ie = i, re = o, he = f;
              var Me = J.gb;
              Ae = J.na, ye = J.P, Te = J.Sa, at = 22, e(Ie != null), e(he != null), me = re[0];
              var pt = he[0];
              for (e(Ae != null), e(Te != null), Ae[0] = null, ye[0] = null, Te[0] = 0; ; ) {
                if (re[0] = me, he[0] = pt, 8 > pt) {
                  re = 7;
                  break e;
                }
                var tn = We(Ie, me + 4);
                if (4294967286 < tn) {
                  re = 3;
                  break e;
                }
                var st = 8 + tn + 1 & -2;
                if (at += st, 0 < Me && at > Me) {
                  re = 3;
                  break e;
                }
                if (!t(Ie, me, "VP8 ") || !t(Ie, me, "VP8L")) {
                  re = 0;
                  break e;
                }
                if (pt[0] < st) {
                  re = 7;
                  break e;
                }
                t(Ie, me, "ALPH") || (Ae[0] = Ie, ye[0] = me + 8, Te[0] = tn), me += st, pt -= st;
              }
            }
            if (f = f[0], J.na = J.na[0], J.P = J.P[0], J.Sa = J.Sa[0], re != 0) break;
          }
          f = [
            f
          ], J.Ja = [
            J.Ja
          ], J.xa = [
            J.xa
          ];
          e: if (Me = i, re = o, he = f, Ae = J.gb[0], ye = J.Ja, Te = J.xa, Ie = re[0], me = !t(Me, Ie, "VP8 "), at = !t(Me, Ie, "VP8L"), e(Me != null), e(he != null), e(ye != null), e(Te != null), 8 > he[0]) re = 7;
          else {
            if (me || at) {
              if (Me = We(Me, Ie + 4), 12 <= Ae && Me > Ae - 12) {
                re = 3;
                break e;
              }
              if (E && Me > he[0] - 8) {
                re = 7;
                break e;
              }
              ye[0] = Me, re[0] += 8, he[0] -= 8, Te[0] = at;
            } else Te[0] = 5 <= he[0] && Me[Ie + 0] == 47 && !(Me[Ie + 4] >> 5), ye[0] = he[0];
            re = 0;
          }
          if (f = f[0], J.Ja = J.Ja[0], J.xa = J.xa[0], o = o[0], re != 0) break;
          if (4294967286 < J.Ja) return 3;
          if (A == null || fe || (A[0] = J.xa ? 2 : 1), N = [
            N
          ], ne = [
            ne
          ], J.xa) {
            if (5 > f) {
              re = 7;
              break;
            }
            A = N, E = ne, fe = y, i == null || 5 > f ? i = 0 : 5 <= f && i[o + 0] == 47 && !(i[o + 4] >> 5) ? (he = [
              0
            ], Me = [
              0
            ], Ae = [
              0
            ], X(ye = new T(), i, o, f), wr(ye, he, Me, Ae) ? (A != null && (A[0] = he[0]), E != null && (E[0] = Me[0]), fe != null && (fe[0] = Ae[0]), i = 1) : i = 0) : i = 0;
          } else {
            if (10 > f) {
              re = 7;
              break;
            }
            A = ne, i == null || 10 > f || !Ka(i, o + 3, f - 3) ? i = 0 : (E = i[o + 0] | i[o + 1] << 8 | i[o + 2] << 16, fe = 16383 & (i[o + 7] << 8 | i[o + 6]), i = 16383 & (i[o + 9] << 8 | i[o + 8]), 1 & E || 3 < (E >> 1 & 7) || !(E >> 4 & 1) || E >> 5 >= J.Ja || !fe || !i ? i = 0 : (N && (N[0] = fe), A && (A[0] = i), i = 1));
          }
          if (!i || (N = N[0], ne = ne[0], ae && (j[0] != N || G[0] != ne))) return 3;
          k != null && (k[0] = J, k.offset = o - k.w, e(4294967286 > o - k.w), e(k.offset == k.ha - f));
          break;
        }
        return re == 0 || re == 7 && ae && k == null ? (y != null && (y[0] |= J.na != null && 0 < J.na.length), m != null && (m[0] = N), v != null && (v[0] = ne), 0) : re;
      }
      function va(i, o, f) {
        var m = o.width, v = o.height, y = 0, N = 0, A = m, k = v;
        if (o.Da = i != null && 0 < i.Da, o.Da && (A = i.cd, k = i.bd, y = i.v, N = i.j, 11 > f || (y &= -2, N &= -2), 0 > y || 0 > N || 0 >= A || 0 >= k || y + A > m || N + k > v)) return 0;
        if (o.v = y, o.j = N, o.va = y + A, o.o = N + k, o.U = A, o.T = k, o.da = i != null && 0 < i.da, o.da) {
          if (!Ge(A, k, f = [
            i.ib
          ], y = [
            i.hb
          ])) return 0;
          o.ib = f[0], o.hb = y[0];
        }
        return o.ob = i != null && i.ob, o.Kb = i == null || !i.Sd, o.da && (o.ob = o.ib < 3 * m / 4 && o.hb < 3 * v / 4, o.Kb = 0), 1;
      }
      function wa(i) {
        if (i == null) return 2;
        if (11 > i.S) {
          var o = i.f.RGBA;
          o.fb += (i.height - 1) * o.A, o.A = -o.A;
        } else o = i.f.kb, i = i.height, o.O += (i - 1) * o.fa, o.fa = -o.fa, o.N += (i - 1 >> 1) * o.Ab, o.Ab = -o.Ab, o.W += (i - 1 >> 1) * o.Db, o.Db = -o.Db, o.F != null && (o.J += (i - 1) * o.lb, o.lb = -o.lb);
        return 0;
      }
      function zr(i, o, f, m) {
        if (m == null || 0 >= i || 0 >= o) return 2;
        if (f != null) {
          if (f.Da) {
            var v = f.cd, y = f.bd, N = -2 & f.v, A = -2 & f.j;
            if (0 > N || 0 > A || 0 >= v || 0 >= y || N + v > i || A + y > o) return 2;
            i = v, o = y;
          }
          if (f.da) {
            if (!Ge(i, o, v = [
              f.ib
            ], y = [
              f.hb
            ])) return 2;
            i = v[0], o = y[0];
          }
        }
        m.width = i, m.height = o;
        e: {
          var k = m.width, j = m.height;
          if (i = m.S, 0 >= k || 0 >= j || !(i >= cs && 13 > i)) i = 2;
          else {
            if (0 >= m.Rd && m.sd == null) {
              N = y = v = o = 0;
              var G = (A = k * Yl[i]) * j;
              if (11 > i || (y = (j + 1) / 2 * (o = (k + 1) / 2), i == 12 && (N = (v = k) * j)), (j = a(G + 2 * y + N)) == null) {
                i = 1;
                break e;
              }
              m.sd = j, 11 > i ? ((k = m.f.RGBA).eb = j, k.fb = 0, k.A = A, k.size = G) : ((k = m.f.kb).y = j, k.O = 0, k.fa = A, k.Fd = G, k.f = j, k.N = 0 + G, k.Ab = o, k.Cd = y, k.ea = j, k.W = 0 + G + y, k.Db = o, k.Ed = y, i == 12 && (k.F = j, k.J = 0 + G + 2 * y), k.Tc = N, k.lb = v);
            }
            if (o = 1, v = m.S, y = m.width, N = m.height, v >= cs && 13 > v) if (11 > v) i = m.f.RGBA, o &= (A = Math.abs(i.A)) * (N - 1) + y <= i.size, o &= A >= y * Yl[v], o &= i.eb != null;
            else {
              i = m.f.kb, A = (y + 1) / 2, G = (N + 1) / 2, k = Math.abs(i.fa), j = Math.abs(i.Ab);
              var ae = Math.abs(i.Db), E = Math.abs(i.lb), J = E * (N - 1) + y;
              o &= k * (N - 1) + y <= i.Fd, o &= j * (G - 1) + A <= i.Cd, o = (o &= ae * (G - 1) + A <= i.Ed) & k >= y & j >= A & ae >= A, o &= i.y != null, o &= i.f != null, o &= i.ea != null, v == 12 && (o &= E >= y, o &= J <= i.Tc, o &= i.F != null);
            }
            else o = 0;
            i = o ? 0 : 2;
          }
        }
        return i != 0 || f != null && f.fd && (i = wa(m)), i;
      }
      var yi = 64, kn = [
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
      ], Pn = 24, Hr = 32, Ir = 8, Wr = [
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
      je("Predictor0", "PredictorAdd0"), H.Predictor0 = function() {
        return 4278190080;
      }, H.Predictor1 = function(i) {
        return i;
      }, H.Predictor2 = function(i, o, f) {
        return o[f + 0];
      }, H.Predictor3 = function(i, o, f) {
        return o[f + 1];
      }, H.Predictor4 = function(i, o, f) {
        return o[f - 1];
      }, H.Predictor5 = function(i, o, f) {
        return Ue(Ue(i, o[f + 1]), o[f + 0]);
      }, H.Predictor6 = function(i, o, f) {
        return Ue(i, o[f - 1]);
      }, H.Predictor7 = function(i, o, f) {
        return Ue(i, o[f + 0]);
      }, H.Predictor8 = function(i, o, f) {
        return Ue(o[f - 1], o[f + 0]);
      }, H.Predictor9 = function(i, o, f) {
        return Ue(o[f + 0], o[f + 1]);
      }, H.Predictor10 = function(i, o, f) {
        return Ue(Ue(i, o[f - 1]), Ue(o[f + 0], o[f + 1]));
      }, H.Predictor11 = function(i, o, f) {
        var m = o[f + 0];
        return 0 >= et(m >> 24 & 255, i >> 24 & 255, (o = o[f - 1]) >> 24 & 255) + et(m >> 16 & 255, i >> 16 & 255, o >> 16 & 255) + et(m >> 8 & 255, i >> 8 & 255, o >> 8 & 255) + et(255 & m, 255 & i, 255 & o) ? m : i;
      }, H.Predictor12 = function(i, o, f) {
        var m = o[f + 0];
        return (yt((i >> 24 & 255) + (m >> 24 & 255) - ((o = o[f - 1]) >> 24 & 255)) << 24 | yt((i >> 16 & 255) + (m >> 16 & 255) - (o >> 16 & 255)) << 16 | yt((i >> 8 & 255) + (m >> 8 & 255) - (o >> 8 & 255)) << 8 | yt((255 & i) + (255 & m) - (255 & o))) >>> 0;
      }, H.Predictor13 = function(i, o, f) {
        var m = o[f - 1];
        return (ft((i = Ue(i, o[f + 0])) >> 24 & 255, m >> 24 & 255) << 24 | ft(i >> 16 & 255, m >> 16 & 255) << 16 | ft(i >> 8 & 255, m >> 8 & 255) << 8 | ft(255 & i, 255 & m)) >>> 0;
      };
      var ya = H.PredictorAdd0;
      H.PredictorAdd1 = dt, je("Predictor2", "PredictorAdd2"), je("Predictor3", "PredictorAdd3"), je("Predictor4", "PredictorAdd4"), je("Predictor5", "PredictorAdd5"), je("Predictor6", "PredictorAdd6"), je("Predictor7", "PredictorAdd7"), je("Predictor8", "PredictorAdd8"), je("Predictor9", "PredictorAdd9"), je("Predictor10", "PredictorAdd10"), je("Predictor11", "PredictorAdd11"), je("Predictor12", "PredictorAdd12"), je("Predictor13", "PredictorAdd13");
      var zi = H.PredictorAdd2;
      qe("ColorIndexInverseTransform", "MapARGB", "32b", function(i) {
        return i >> 8 & 255;
      }, function(i) {
        return i;
      }), qe("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(i) {
        return i;
      }, function(i) {
        return i >> 8 & 255;
      });
      var zt, ss = H.ColorIndexInverseTransform, ur = H.MapARGB, fr = H.VP8LColorIndexInverseTransformAlpha, xa = H.MapAlpha, Na = H.VP8LPredictorsAdd = [];
      Na.length = 16, (H.VP8LPredictors = []).length = 16, (H.VP8LPredictorsAdd_C = []).length = 16, (H.VP8LPredictors_C = []).length = 16;
      var _a, Aa, Gr, Vr, $r, xi, Kr, Ni, zn, hr, Nt, St, Ht, en, jr, La, Hi, os, Al, Ll, Sl, kl, Pl, Cl, Sa, Il, jl, El, Fl = a(511), Ml = a(2041), Rl = a(225), Ol = a(767), Dl = 0, mo = Ml, ls = Rl, Cn = Ol, Hn = Fl, cs = 0, us = 1, Tl = 2, fs = 3, hs = 4, go = 5, Bl = 6, bo = 7, vo = 8, ds = 9, wo = 10, hh = [
        2,
        3,
        7
      ], dh = [
        3,
        3,
        11
      ], ql = [
        280,
        256,
        256,
        256,
        40
      ], ph = [
        0,
        1,
        1,
        1,
        0
      ], mh = [
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
      ], gh = [
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
      ], bh = [
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
      ], vh = 8, yo = [
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
      ], xo = [
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
      ], ka = null, wh = [
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
      ], yh = [
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
      ], Ul = [
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
      ], xh = [
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
      ], Nh = [
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
      ], _h = [
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
      ], Ah = [
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
      ], Yr = [], Zn = [], Er = [], Lh = 1, zl = 2, Jr = [], Wn = [];
      Pr("UpsampleRgbLinePair", Ur, 3), Pr("UpsampleBgrLinePair", cn, 3), Pr("UpsampleRgbaLinePair", wn, 4), Pr("UpsampleBgraLinePair", ba, 4), Pr("UpsampleArgbLinePair", ga, 4), Pr("UpsampleRgba4444LinePair", vi, 2), Pr("UpsampleRgb565LinePair", bi, 2);
      var Sh = H.UpsampleRgbLinePair, kh = H.UpsampleBgrLinePair, Hl = H.UpsampleRgbaLinePair, Wl = H.UpsampleBgraLinePair, Gl = H.UpsampleArgbLinePair, Vl = H.UpsampleRgba4444LinePair, Ph = H.UpsampleRgb565LinePair, ps = 16, ms = 1 << ps - 1, Pa = -227, No = 482, Ch = 6, $l = 0, Ih = a(256), jh = a(256), Eh = a(256), Fh = a(256), Mh = a(No - Pa), Rh = a(No - Pa);
      Cr("YuvToRgbRow", Ur, 3), Cr("YuvToBgrRow", cn, 3), Cr("YuvToRgbaRow", wn, 4), Cr("YuvToBgraRow", ba, 4), Cr("YuvToArgbRow", ga, 4), Cr("YuvToRgba4444Row", vi, 2), Cr("YuvToRgb565Row", bi, 2);
      var Kl = [
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
      ], gs = [
        0,
        2,
        8
      ], Oh = [
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
      ], Dh = 1;
      this.WebPDecodeRGBA = function(i, o, f, m, v) {
        var y = us, N = new pe(), A = new ut();
        N.ba = A, A.S = y, A.width = [
          A.width
        ], A.height = [
          A.height
        ];
        var k = A.width, j = A.height, G = new $e();
        if (G == null || i == null) var ae = 2;
        else e(G != null), ae = wi(i, o, f, G.width, G.height, G.Pd, G.Qd, G.format, null);
        if (ae != 0 ? k = 0 : (k != null && (k[0] = G.width[0]), j != null && (j[0] = G.height[0]), k = 1), k) {
          A.width = A.width[0], A.height = A.height[0], m != null && (m[0] = A.width), v != null && (v[0] = A.height);
          e: {
            if (m = new Ri(), (v = new we()).data = i, v.w = o, v.ha = f, v.kd = 1, o = [
              0
            ], e(v != null), ((i = wi(v.data, v.w, v.ha, null, null, null, o, null, v)) == 0 || i == 7) && o[0] && (i = 4), (o = i) == 0) {
              if (e(N != null), m.data = v.data, m.w = v.w + v.offset, m.ha = v.ha - v.offset, m.put = Ke, m.ac = ir, m.bc = vr, m.ma = N, v.xa) {
                if ((i = li()) == null) {
                  N = 1;
                  break e;
                }
                if (function(E, J) {
                  var ne = [
                    0
                  ], fe = [
                    0
                  ], re = [
                    0
                  ];
                  t: for (; ; ) {
                    if (E == null) return 0;
                    if (J == null) return E.a = 2, 0;
                    if (E.l = J, E.a = 0, X(E.m, J.data, J.w, J.ha), !wr(E.m, ne, fe, re)) {
                      E.a = 3;
                      break t;
                    }
                    if (E.xb = zl, J.width = ne[0], J.height = fe[0], !sr(ne[0], fe[0], 1, E, null)) break t;
                    return 1;
                  }
                  return e(E.a != 0), 0;
                }(i, m)) {
                  if (m = (o = zr(m.width, m.height, N.Oa, N.ba)) == 0) {
                    t: {
                      m = i;
                      n: for (; ; ) {
                        if (m == null) {
                          m = 0;
                          break t;
                        }
                        if (e(m.s.yc != null), e(m.s.Ya != null), e(0 < m.s.Wb), e((f = m.l) != null), e((v = f.ma) != null), m.xb != 0) {
                          if (m.ca = v.ba, m.tb = v.tb, e(m.ca != null), !va(v.Oa, f, fs)) {
                            m.a = 2;
                            break n;
                          }
                          if (!ci(m, f.width) || f.da) break n;
                          if ((f.da || Ye(m.ca.S)) && Xn(), 11 > m.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), m.ca.f.kb.F != null && Xn()), m.Pb && 0 < m.s.ua && m.s.vb.X == null && !P(m.s.vb, m.s.Wa.Xa)) {
                            m.a = 1;
                            break n;
                          }
                          m.xb = 0;
                        }
                        if (!Yn(m, m.V, m.Ba, m.c, m.i, f.o, Br)) break n;
                        v.Dc = m.Ma, m = 1;
                        break t;
                      }
                      e(m.a != 0), m = 0;
                    }
                    m = !m;
                  }
                  m && (o = i.a);
                } else o = i.a;
              } else {
                if ((i = new Qs()) == null) {
                  N = 1;
                  break e;
                }
                if (i.Fa = v.na, i.P = v.P, i.qc = v.Sa, lr(i, m)) {
                  if ((o = zr(m.width, m.height, N.Oa, N.ba)) == 0) {
                    if (i.Aa = 0, f = N.Oa, e((v = i) != null), f != null) {
                      if (0 < (k = 0 > (k = f.Md) ? 0 : 100 < k ? 255 : 255 * k / 100)) {
                        for (j = G = 0; 4 > j; ++j) 12 > (ae = v.pb[j]).lc && (ae.ia = k * Oh[0 > ae.lc ? 0 : ae.lc] >> 3), G |= ae.ia;
                        G && (alert("todo:VP8InitRandom"), v.ia = 1);
                      }
                      v.Ga = f.Id, 100 < v.Ga ? v.Ga = 100 : 0 > v.Ga && (v.Ga = 0);
                    }
                    (function(E, J) {
                      if (E == null) return 0;
                      if (J == null) return Yt(E, 2, "NULL VP8Io parameter in VP8Decode().");
                      if (!E.cb && !lr(E, J)) return 0;
                      if (e(E.cb), J.ac == null || J.ac(J)) {
                        J.ob && (E.L = 0);
                        var ne = gs[E.L];
                        if (E.L == 2 ? (E.yb = 0, E.zb = 0) : (E.yb = J.v - ne >> 4, E.zb = J.j - ne >> 4, 0 > E.yb && (E.yb = 0), 0 > E.zb && (E.zb = 0)), E.Va = J.o + 15 + ne >> 4, E.Hb = J.va + 15 + ne >> 4, E.Hb > E.za && (E.Hb = E.za), E.Va > E.Ub && (E.Va = E.Ub), 0 < E.L) {
                          var fe = E.ed;
                          for (ne = 0; 4 > ne; ++ne) {
                            var re;
                            if (E.Qa.Cb) {
                              var he = E.Qa.Lb[ne];
                              E.Qa.Fb || (he += fe.Tb);
                            } else he = fe.Tb;
                            for (re = 0; 1 >= re; ++re) {
                              var me = E.gd[ne][re], Ae = he;
                              if (fe.Pc && (Ae += fe.vd[0], re && (Ae += fe.od[0])), 0 < (Ae = 0 > Ae ? 0 : 63 < Ae ? 63 : Ae)) {
                                var ye = Ae;
                                0 < fe.wb && (ye = 4 < fe.wb ? ye >> 2 : ye >> 1) > 9 - fe.wb && (ye = 9 - fe.wb), 1 > ye && (ye = 1), me.dd = ye, me.tc = 2 * Ae + ye, me.ld = 40 <= Ae ? 2 : 15 <= Ae ? 1 : 0;
                              } else me.tc = 0;
                              me.La = re;
                            }
                          }
                        }
                        ne = 0;
                      } else Yt(E, 6, "Frame setup failed"), ne = E.a;
                      if (ne = ne == 0) {
                        if (ne) {
                          E.$c = 0, 0 < E.Aa || (E.Ic = Dh);
                          t: {
                            ne = E.Ic, fe = 4 * (ye = E.za);
                            var Te = 32 * ye, Ie = ye + 1, at = 0 < E.L ? ye * (0 < E.Aa ? 2 : 1) : 0, Me = (E.Aa == 2 ? 2 : 1) * ye;
                            if ((me = fe + 832 + (re = 3 * (16 * ne + gs[E.L]) / 2 * Te) + (he = E.Fa != null && 0 < E.Fa.length ? E.Kc.c * E.Kc.i : 0)) != me) ne = 0;
                            else {
                              if (me > E.Vb) {
                                if (E.Vb = 0, E.Ec = a(me), E.Fc = 0, E.Ec == null) {
                                  ne = Yt(E, 1, "no memory during frame initialization.");
                                  break t;
                                }
                                E.Vb = me;
                              }
                              me = E.Ec, Ae = E.Fc, E.Ac = me, E.Bc = Ae, Ae += fe, E.Gd = h(Te, Va), E.Hd = 0, E.rb = h(Ie + 1, aa), E.sb = 1, E.wa = at ? h(at, Bn) : null, E.Y = 0, E.D.Nb = 0, E.D.wa = E.wa, E.D.Y = E.Y, 0 < E.Aa && (E.D.Y += ye), e(true), E.oc = me, E.pc = Ae, Ae += 832, E.ya = h(Me, sa), E.aa = 0, E.D.ya = E.ya, E.D.aa = E.aa, E.Aa == 2 && (E.D.aa += ye), E.R = 16 * ye, E.B = 8 * ye, ye = (Te = gs[E.L]) * E.R, Te = Te / 2 * E.B, E.sa = me, E.ta = Ae + ye, E.qa = E.sa, E.ra = E.ta + 16 * ne * E.R + Te, E.Ha = E.qa, E.Ia = E.ra + 8 * ne * E.B + Te, E.$c = 0, Ae += re, E.mb = he ? me : null, E.nb = he ? Ae : null, e(Ae + he <= E.Fc + E.Vb), Ya(E), s(E.Ac, E.Bc, 0, fe), ne = 1;
                            }
                          }
                          if (ne) {
                            if (J.ka = 0, J.y = E.sa, J.O = E.ta, J.f = E.qa, J.N = E.ra, J.ea = E.Ha, J.Vd = E.Ia, J.fa = E.R, J.Rc = E.B, J.F = null, J.J = 0, !Dl) {
                              for (ne = -255; 255 >= ne; ++ne) Fl[255 + ne] = 0 > ne ? -ne : ne;
                              for (ne = -1020; 1020 >= ne; ++ne) Ml[1020 + ne] = -128 > ne ? -128 : 127 < ne ? 127 : ne;
                              for (ne = -112; 112 >= ne; ++ne) Rl[112 + ne] = -16 > ne ? -16 : 15 < ne ? 15 : ne;
                              for (ne = -255; 510 >= ne; ++ne) Ol[255 + ne] = 0 > ne ? 0 : 255 < ne ? 255 : ne;
                              Dl = 1;
                            }
                            Kr = Di, Ni = to, hr = cr, Nt = Xa, St = Za, zn = eo, Ht = rs, en = pi, jr = b, La = F, Hi = is, os = c, Al = z, Ll = Z, Sl = di, kl = pa, Pl = ts, Cl = ns, Zn[0] = co, Zn[1] = no, Zn[2] = oo, Zn[3] = lo, Zn[4] = xr, Zn[5] = uo, Zn[6] = Nr, Zn[7] = fo, Zn[8] = ca, Zn[9] = Ti, Yr[0] = ao, Yr[1] = io, Yr[2] = oa, Yr[3] = Qa, Yr[4] = fi, Yr[5] = la, Yr[6] = so, Er[0] = po, Er[1] = ro, Er[2] = hi, Er[3] = ho, Er[4] = fa, Er[5] = ua, Er[6] = es, ne = 1;
                          } else ne = 0;
                        }
                        ne && (ne = function(pt, tn) {
                          for (pt.M = 0; pt.M < pt.Va; ++pt.M) {
                            var st, Re = pt.Jc[pt.M & pt.Xb], Se = pt.m, Wt = pt;
                            for (st = 0; st < Wt.za; ++st) {
                              var nt = Se, mt = Wt, Et = mt.Ac, un = mt.Bc + 4 * st, yn = mt.zc, Tt = mt.ya[mt.aa + st];
                              if (mt.Qa.Bb ? Tt.$b = ve(nt, mt.Pa.jb[0]) ? 2 + ve(nt, mt.Pa.jb[2]) : ve(nt, mt.Pa.jb[1]) : Tt.$b = 0, mt.kc && (Tt.Ad = ve(nt, mt.Bd)), Tt.Za = !ve(nt, 145) + 0, Tt.Za) {
                                var pn = Tt.Ob, xn = 0;
                                for (mt = 0; 4 > mt; ++mt) {
                                  var nn, vt = yn[0 + mt];
                                  for (nn = 0; 4 > nn; ++nn) {
                                    vt = Nh[Et[un + nn]][vt];
                                    for (var _t = Ul[ve(nt, vt[0])]; 0 < _t; ) _t = Ul[2 * _t + ve(nt, vt[_t])];
                                    vt = -_t, Et[un + nn] = vt;
                                  }
                                  r(pn, xn, Et, un, 4), xn += 4, yn[0 + mt] = vt;
                                }
                              } else vt = ve(nt, 156) ? ve(nt, 128) ? 1 : 3 : ve(nt, 163) ? 2 : 0, Tt.Ob[0] = vt, s(Et, un, vt, 4), s(yn, 0, vt, 4);
                              Tt.Dd = ve(nt, 142) ? ve(nt, 114) ? ve(nt, 183) ? 1 : 3 : 2 : 0;
                            }
                            if (Wt.m.Ka) return Yt(pt, 7, "Premature end-of-partition0 encountered.");
                            for (; pt.ja < pt.za; ++pt.ja) {
                              if (Wt = Re, nt = (Se = pt).rb[Se.sb - 1], Et = Se.rb[Se.sb + Se.ja], st = Se.ya[Se.aa + Se.ja], un = Se.kc ? st.Ad : 0) nt.la = Et.la = 0, st.Za || (nt.Na = Et.Na = 0), st.Hc = 0, st.Gc = 0, st.ia = 0;
                              else {
                                var Bt, At;
                                if (nt = Et, Et = Wt, un = Se.Pa.Xc, yn = Se.ya[Se.aa + Se.ja], Tt = Se.pb[yn.$b], mt = yn.ad, pn = 0, xn = Se.rb[Se.sb - 1], vt = nn = 0, s(mt, pn, 0, 384), yn.Za) var fn = 0, Qn = un[3];
                                else {
                                  _t = a(16);
                                  var Gt = nt.Na + xn.Na;
                                  if (Gt = ka(Et, un[1], Gt, Tt.Eb, 0, _t, 0), nt.Na = xn.Na = (0 < Gt) + 0, 1 < Gt) Kr(_t, 0, mt, pn);
                                  else {
                                    var An = _t[0] + 3 >> 3;
                                    for (_t = 0; 256 > _t; _t += 16) mt[pn + _t] = An;
                                  }
                                  fn = 1, Qn = un[0];
                                }
                                var kt = 15 & nt.la, rn = 15 & xn.la;
                                for (_t = 0; 4 > _t; ++_t) {
                                  var In = 1 & rn;
                                  for (An = At = 0; 4 > An; ++An) kt = kt >> 1 | (In = (Gt = ka(Et, Qn, Gt = In + (1 & kt), Tt.Sc, fn, mt, pn)) > fn) << 7, At = At << 2 | (3 < Gt ? 3 : 1 < Gt ? 2 : mt[pn + 0] != 0), pn += 16;
                                  kt >>= 4, rn = rn >> 1 | In << 7, nn = (nn << 8 | At) >>> 0;
                                }
                                for (Qn = kt, fn = rn >> 4, Bt = 0; 4 > Bt; Bt += 2) {
                                  for (At = 0, kt = nt.la >> 4 + Bt, rn = xn.la >> 4 + Bt, _t = 0; 2 > _t; ++_t) {
                                    for (In = 1 & rn, An = 0; 2 > An; ++An) Gt = In + (1 & kt), kt = kt >> 1 | (In = 0 < (Gt = ka(Et, un[2], Gt, Tt.Qc, 0, mt, pn))) << 3, At = At << 2 | (3 < Gt ? 3 : 1 < Gt ? 2 : mt[pn + 0] != 0), pn += 16;
                                    kt >>= 2, rn = rn >> 1 | In << 5;
                                  }
                                  vt |= At << 4 * Bt, Qn |= kt << 4 << Bt, fn |= (240 & rn) << Bt;
                                }
                                nt.la = Qn, xn.la = fn, yn.Hc = nn, yn.Gc = vt, yn.ia = 43690 & vt ? 0 : Tt.ia, un = !(nn | vt);
                              }
                              if (0 < Se.L && (Se.wa[Se.Y + Se.ja] = Se.gd[st.$b][st.Za], Se.wa[Se.Y + Se.ja].La |= !un), Wt.Ka) return Yt(pt, 7, "Premature end-of-file encountered.");
                            }
                            if (Ya(pt), Se = tn, Wt = 1, st = (Re = pt).D, nt = 0 < Re.L && Re.M >= Re.zb && Re.M <= Re.Va, Re.Aa == 0) t: {
                              if (st.M = Re.M, st.uc = nt, Un(Re, st), Wt = 1, st = (At = Re.D).Nb, nt = (vt = gs[Re.L]) * Re.R, Et = vt / 2 * Re.B, _t = 16 * st * Re.R, An = 8 * st * Re.B, un = Re.sa, yn = Re.ta - nt + _t, Tt = Re.qa, mt = Re.ra - Et + An, pn = Re.Ha, xn = Re.Ia - Et + An, rn = (kt = At.M) == 0, nn = kt >= Re.Va - 1, Re.Aa == 2 && Un(Re, At), At.uc) for (In = (Gt = Re).D.M, e(Gt.D.uc), At = Gt.yb; At < Gt.Hb; ++At) {
                                fn = At, Qn = In;
                                var Nn = (jn = (hn = Gt).D).Nb;
                                Bt = hn.R;
                                var jn = jn.wa[jn.Y + fn], En = hn.sa, Ln = hn.ta + 16 * Nn * Bt + 16 * fn, Fn = jn.dd, jt = jn.tc;
                                if (jt != 0) if (e(3 <= jt), hn.L == 1) 0 < fn && kl(En, Ln, Bt, jt + 4), jn.La && Cl(En, Ln, Bt, jt), 0 < Qn && Sl(En, Ln, Bt, jt + 4), jn.La && Pl(En, Ln, Bt, jt);
                                else {
                                  var Mn = hn.B, er = hn.qa, _i = hn.ra + 8 * Nn * Mn + 8 * fn, Fr = hn.Ha, hn = hn.Ia + 8 * Nn * Mn + 8 * fn;
                                  Nn = jn.ld, 0 < fn && (en(En, Ln, Bt, jt + 4, Fn, Nn), La(er, _i, Fr, hn, Mn, jt + 4, Fn, Nn)), jn.La && (os(En, Ln, Bt, jt, Fn, Nn), Ll(er, _i, Fr, hn, Mn, jt, Fn, Nn)), 0 < Qn && (Ht(En, Ln, Bt, jt + 4, Fn, Nn), jr(er, _i, Fr, hn, Mn, jt + 4, Fn, Nn)), jn.La && (Hi(En, Ln, Bt, jt, Fn, Nn), Al(er, _i, Fr, hn, Mn, jt, Fn, Nn));
                                }
                              }
                              if (Re.ia && alert("todo:DitherRow"), Se.put != null) {
                                if (At = 16 * kt, kt = 16 * (kt + 1), rn ? (Se.y = Re.sa, Se.O = Re.ta + _t, Se.f = Re.qa, Se.N = Re.ra + An, Se.ea = Re.Ha, Se.W = Re.Ia + An) : (At -= vt, Se.y = un, Se.O = yn, Se.f = Tt, Se.N = mt, Se.ea = pn, Se.W = xn), nn || (kt -= vt), kt > Se.o && (kt = Se.o), Se.F = null, Se.J = null, Re.Fa != null && 0 < Re.Fa.length && At < kt && (Se.J = It(Re, Se, At, kt - At), Se.F = Re.mb, Se.F == null && Se.F.length == 0)) {
                                  Wt = Yt(Re, 3, "Could not decode alpha data.");
                                  break t;
                                }
                                At < Se.j && (vt = Se.j - At, At = Se.j, e(!(1 & vt)), Se.O += Re.R * vt, Se.N += Re.B * (vt >> 1), Se.W += Re.B * (vt >> 1), Se.F != null && (Se.J += Se.width * vt)), At < kt && (Se.O += Se.v, Se.N += Se.v >> 1, Se.W += Se.v >> 1, Se.F != null && (Se.J += Se.v), Se.ka = At - Se.j, Se.U = Se.va - Se.v, Se.T = kt - At, Wt = Se.put(Se));
                              }
                              st + 1 != Re.Ic || nn || (r(Re.sa, Re.ta - nt, un, yn + 16 * Re.R, nt), r(Re.qa, Re.ra - Et, Tt, mt + 8 * Re.B, Et), r(Re.Ha, Re.Ia - Et, pn, xn + 8 * Re.B, Et));
                            }
                            if (!Wt) return Yt(pt, 6, "Output aborted.");
                          }
                          return 1;
                        }(E, J)), J.bc != null && J.bc(J), ne &= 1;
                      }
                      return ne ? (E.cb = 0, ne) : 0;
                    })(i, m) || (o = i.a);
                  }
                } else o = i.a;
              }
              o == 0 && N.Oa != null && N.Oa.fd && (o = wa(N.ba));
            }
            N = o;
          }
          y = N != 0 ? null : 11 > y ? A.f.RGBA.eb : A.f.kb.y;
        } else y = null;
        return y;
      };
      var Yl = [
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
    function d(H, ie) {
      for (var L = "", O = 0; O < 4; O++) L += String.fromCharCode(H[ie++]);
      return L;
    }
    function g(H, ie) {
      return H[ie + 0] | H[ie + 1] << 8;
    }
    function w(H, ie) {
      return (H[ie + 0] | H[ie + 1] << 8 | H[ie + 2] << 16) >>> 0;
    }
    function S(H, ie) {
      return (H[ie + 0] | H[ie + 1] << 8 | H[ie + 2] << 16 | H[ie + 3] << 24) >>> 0;
    }
    new u();
    var p = [
      0
    ], I = [
      0
    ], M = [], D = new u(), _ = n, W = function(H, ie) {
      var L = {}, O = 0, R = false, B = 0, te = 0;
      if (L.frames = [], !function(x, T) {
        for (var U = 0; U < 4; U++) if (x[T + U] != "RIFF".charCodeAt(U)) return true;
        return false;
      }(H, ie)) {
        for (S(H, ie += 4), ie += 8; ie < H.length; ) {
          var se = d(H, ie), oe = S(H, ie += 4);
          ie += 4;
          var Y = oe + (1 & oe);
          switch (se) {
            case "VP8 ":
            case "VP8L":
              L.frames[O] === void 0 && (L.frames[O] = {}), (de = L.frames[O]).src_off = R ? te : ie - 8, de.src_size = B + oe + 8, O++, R && (R = false, B = 0, te = 0);
              break;
            case "VP8X":
              (de = L.header = {}).feature_flags = H[ie];
              var X = ie + 4;
              de.canvas_width = 1 + w(H, X), X += 3, de.canvas_height = 1 + w(H, X), X += 3;
              break;
            case "ALPH":
              R = true, B = Y + 8, te = ie - 8;
              break;
            case "ANIM":
              (de = L.header).bgcolor = S(H, ie), X = ie + 4, de.loop_count = g(H, X), X += 2;
              break;
            case "ANMF":
              var _e, de;
              (de = L.frames[O] = {}).offset_x = 2 * w(H, ie), ie += 3, de.offset_y = 2 * w(H, ie), ie += 3, de.width = 1 + w(H, ie), ie += 3, de.height = 1 + w(H, ie), ie += 3, de.duration = w(H, ie), ie += 3, _e = H[ie++], de.dispose = 1 & _e, de.blend = _e >> 1 & 1;
          }
          se != "ANMF" && (ie += Y);
        }
        return L;
      }
    }(_, 0);
    W.response = _, W.rgbaoutput = true, W.dataurl = false;
    var V = W.header ? W.header : null, q = W.frames ? W.frames : null;
    if (V) {
      V.loop_counter = V.loop_count, p = [
        V.canvas_height
      ], I = [
        V.canvas_width
      ];
      for (var le = 0; le < q.length && q[le].blend != 0; le++) ;
    }
    var xe = q[0], ge = D.WebPDecodeRGBA(_, xe.src_off, xe.src_size, I, p);
    xe.rgba = ge, xe.imgwidth = I[0], xe.imgheight = p[0];
    for (var ee = 0; ee < I[0] * p[0] * 4; ee++) M[ee] = ge[ee];
    return this.width = I, this.height = p, this.data = M, this;
  }
  function M0() {
    var n, e = this.internal.__metadata__.metadata, t = unescape(encodeURIComponent(e));
    n = this.internal.__metadata__.rawXml ? t : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + n.length + " >>"), this.internal.write("stream"), this.internal.write(n), this.internal.write("endstream"), this.internal.write("endobj");
  }
  function R0() {
    this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
  }
  (function(n) {
    var e, t, r, s, a, h, l, u, d, g = function(x) {
      return x = x || {}, this.isStrokeTransparent = x.isStrokeTransparent || false, this.strokeOpacity = x.strokeOpacity || 1, this.strokeStyle = x.strokeStyle || "#000000", this.fillStyle = x.fillStyle || "#000000", this.isFillTransparent = x.isFillTransparent || false, this.fillOpacity = x.fillOpacity || 1, this.font = x.font || "10px sans-serif", this.textBaseline = x.textBaseline || "alphabetic", this.textAlign = x.textAlign || "left", this.lineWidth = x.lineWidth || 1, this.lineJoin = x.lineJoin || "miter", this.lineCap = x.lineCap || "butt", this.path = x.path || [], this.transform = x.transform !== void 0 ? x.transform.clone() : new u(), this.globalCompositeOperation = x.globalCompositeOperation || "normal", this.globalAlpha = x.globalAlpha || 1, this.clip_path = x.clip_path || [], this.currentPoint = x.currentPoint || new h(), this.miterLimit = x.miterLimit || 10, this.lastPoint = x.lastPoint || new h(), this.lineDashOffset = x.lineDashOffset || 0, this.lineDash = x.lineDash || [], this.margin = x.margin || [
        0,
        0,
        0,
        0
      ], this.prevPageLastElemOffset = x.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof x.ignoreClearRect != "boolean" || x.ignoreClearRect, this;
    };
    n.events.push([
      "initialized",
      function() {
        this.context2d = new w(this), e = this.internal.f2, t = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, h = this.internal.Point, l = this.internal.Rectangle, u = this.internal.Matrix, d = new g();
      }
    ]);
    var w = function(x) {
      Object.defineProperty(this, "canvas", {
        get: function() {
          return {
            parentNode: false,
            style: false
          };
        }
      });
      var T = x;
      Object.defineProperty(this, "pdf", {
        get: function() {
          return T;
        }
      });
      var U = false;
      Object.defineProperty(this, "pageWrapXEnabled", {
        get: function() {
          return U;
        },
        set: function(P) {
          U = !!P;
        }
      });
      var $ = false;
      Object.defineProperty(this, "pageWrapYEnabled", {
        get: function() {
          return $;
        },
        set: function(P) {
          $ = !!P;
        }
      });
      var K = 0;
      Object.defineProperty(this, "posX", {
        get: function() {
          return K;
        },
        set: function(P) {
          isNaN(P) || (K = P);
        }
      });
      var Q = 0;
      Object.defineProperty(this, "posY", {
        get: function() {
          return Q;
        },
        set: function(P) {
          isNaN(P) || (Q = P);
        }
      }), Object.defineProperty(this, "margin", {
        get: function() {
          return d.margin;
        },
        set: function(P) {
          var ke;
          typeof P == "number" ? ke = [
            P,
            P,
            P,
            P
          ] : ((ke = new Array(4))[0] = P[0], ke[1] = P.length >= 2 ? P[1] : ke[0], ke[2] = P.length >= 3 ? P[2] : ke[0], ke[3] = P.length >= 4 ? P[3] : ke[1]), d.margin = ke;
        }
      });
      var ce = false;
      Object.defineProperty(this, "autoPaging", {
        get: function() {
          return ce;
        },
        set: function(P) {
          ce = P;
        }
      });
      var ue = 0;
      Object.defineProperty(this, "lastBreak", {
        get: function() {
          return ue;
        },
        set: function(P) {
          ue = P;
        }
      });
      var ve = [];
      Object.defineProperty(this, "pageBreaks", {
        get: function() {
          return ve;
        },
        set: function(P) {
          ve = P;
        }
      }), Object.defineProperty(this, "ctx", {
        get: function() {
          return d;
        },
        set: function(P) {
          P instanceof g && (d = P);
        }
      }), Object.defineProperty(this, "path", {
        get: function() {
          return d.path;
        },
        set: function(P) {
          d.path = P;
        }
      });
      var Le = [];
      Object.defineProperty(this, "ctxStack", {
        get: function() {
          return Le;
        },
        set: function(P) {
          Le = P;
        }
      }), Object.defineProperty(this, "fillStyle", {
        get: function() {
          return this.ctx.fillStyle;
        },
        set: function(P) {
          var ke;
          ke = S(P), this.ctx.fillStyle = ke.style, this.ctx.isFillTransparent = ke.a === 0, this.ctx.fillOpacity = ke.a, this.pdf.setFillColor(ke.r, ke.g, ke.b, {
            a: ke.a
          }), this.pdf.setTextColor(ke.r, ke.g, ke.b, {
            a: ke.a
          });
        }
      }), Object.defineProperty(this, "strokeStyle", {
        get: function() {
          return this.ctx.strokeStyle;
        },
        set: function(P) {
          var ke = S(P);
          this.ctx.strokeStyle = ke.style, this.ctx.isStrokeTransparent = ke.a === 0, this.ctx.strokeOpacity = ke.a, ke.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (ke.a, this.pdf.setDrawColor(ke.r, ke.g, ke.b));
        }
      }), Object.defineProperty(this, "lineCap", {
        get: function() {
          return this.ctx.lineCap;
        },
        set: function(P) {
          [
            "butt",
            "round",
            "square"
          ].indexOf(P) !== -1 && (this.ctx.lineCap = P, this.pdf.setLineCap(P));
        }
      }), Object.defineProperty(this, "lineWidth", {
        get: function() {
          return this.ctx.lineWidth;
        },
        set: function(P) {
          isNaN(P) || (this.ctx.lineWidth = P, this.pdf.setLineWidth(P));
        }
      }), Object.defineProperty(this, "lineJoin", {
        get: function() {
          return this.ctx.lineJoin;
        },
        set: function(P) {
          [
            "bevel",
            "round",
            "miter"
          ].indexOf(P) !== -1 && (this.ctx.lineJoin = P, this.pdf.setLineJoin(P));
        }
      }), Object.defineProperty(this, "miterLimit", {
        get: function() {
          return this.ctx.miterLimit;
        },
        set: function(P) {
          isNaN(P) || (this.ctx.miterLimit = P, this.pdf.setMiterLimit(P));
        }
      }), Object.defineProperty(this, "textBaseline", {
        get: function() {
          return this.ctx.textBaseline;
        },
        set: function(P) {
          this.ctx.textBaseline = P;
        }
      }), Object.defineProperty(this, "textAlign", {
        get: function() {
          return this.ctx.textAlign;
        },
        set: function(P) {
          [
            "right",
            "end",
            "center",
            "left",
            "start"
          ].indexOf(P) !== -1 && (this.ctx.textAlign = P);
        }
      });
      var Pe = null, Ce = null, We = null;
      Object.defineProperty(this, "fontFaces", {
        get: function() {
          return We;
        },
        set: function(P) {
          Pe = null, Ce = null, We = P;
        }
      }), Object.defineProperty(this, "font", {
        get: function() {
          return this.ctx.font;
        },
        set: function(P) {
          var ke;
          if (this.ctx.font = P, (ke = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(P)) !== null) {
            var ot = ke[1];
            ke[2];
            var Ge = ke[3], Ne = ke[4];
            ke[5];
            var Ve = ke[6], je = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ne)[2];
            Ne = Math.floor(je === "px" ? parseFloat(Ne) * this.pdf.internal.scaleFactor : je === "em" ? parseFloat(Ne) * this.pdf.getFontSize() : parseFloat(Ne) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Ne);
            var He = function(qe) {
              var Ut, gt, lt = [], ct = qe.trim();
              if (ct === "") return Jo;
              if (ct in iu) return [
                iu[ct]
              ];
              for (; ct !== ""; ) {
                switch (gt = null, Ut = (ct = su(ct)).charAt(0)) {
                  case '"':
                  case "'":
                    gt = P0(ct.substring(1), Ut);
                    break;
                  default:
                    gt = C0(ct);
                }
                if (gt === null || (lt.push(gt[0]), (ct = su(gt[1])) !== "" && ct.charAt(0) !== ",")) return Jo;
                ct = ct.replace(/^,/, "");
              }
              return lt;
            }(Ve);
            if (this.fontFaces) {
              var Ue = function(qe, Ut) {
                var gt = qe.getFontList(), lt = JSON.stringify(gt);
                if (Pe === null || Ce !== lt) {
                  var ct = function(Ft) {
                    var ze = [];
                    return Object.keys(Ft).forEach(function(Ct) {
                      Ft[Ct].forEach(function(Ye) {
                        var tt = null;
                        switch (Ye) {
                          case "bold":
                            tt = {
                              family: Ct,
                              weight: "bold"
                            };
                            break;
                          case "italic":
                            tt = {
                              family: Ct,
                              style: "italic"
                            };
                            break;
                          case "bolditalic":
                            tt = {
                              family: Ct,
                              weight: "bold",
                              style: "italic"
                            };
                            break;
                          case "":
                          case "normal":
                            tt = {
                              family: Ct
                            };
                        }
                        tt !== null && (tt.ref = {
                          name: Ct,
                          style: Ye
                        }, ze.push(tt));
                      });
                    }), ze;
                  }(gt);
                  Pe = function(Ft) {
                    for (var ze = {}, Ct = 0; Ct < Ft.length; ++Ct) {
                      var Ye = Yo(Ft[Ct]), tt = Ye.family, Mt = Ye.stretch, ut = Ye.style, $e = Ye.weight;
                      ze[tt] = ze[tt] || {}, ze[tt][Mt] = ze[tt][Mt] || {}, ze[tt][Mt][ut] = ze[tt][Mt][ut] || {}, ze[tt][Mt][ut][$e] = Ye;
                    }
                    return ze;
                  }(ct.concat(Ut)), Ce = lt;
                }
                return Pe;
              }(this.pdf, this.fontFaces), yt = He.map(function(qe) {
                return {
                  family: qe,
                  stretch: "normal",
                  weight: Ge,
                  style: ot
                };
              }), ft = function(qe, Ut, gt) {
                for (var lt = (gt = gt || {}).defaultFontFamily || "times", ct = Object.assign({}, k0, gt.genericFontFamilies || {}), Ft = null, ze = null, Ct = 0; Ct < Ut.length; ++Ct) if (ct[(Ft = Yo(Ut[Ct])).family] && (Ft.family = ct[Ft.family]), qe.hasOwnProperty(Ft.family)) {
                  ze = qe[Ft.family];
                  break;
                }
                if (!(ze = ze || qe[lt])) throw new Error("Could not find a font-family for the rule '" + au(Ft) + "' and default family '" + lt + "'.");
                if (ze = function(Ye, tt) {
                  if (tt[Ye]) return tt[Ye];
                  var Mt = fl[Ye], ut = Mt <= fl.normal ? -1 : 1, $e = ru(tt, oh, Mt, ut);
                  if (!$e) throw new Error("Could not find a matching font-stretch value for " + Ye);
                  return $e;
                }(Ft.stretch, ze), ze = function(Ye, tt) {
                  if (tt[Ye]) return tt[Ye];
                  for (var Mt = sh[Ye], ut = 0; ut < Mt.length; ++ut) if (tt[Mt[ut]]) return tt[Mt[ut]];
                  throw new Error("Could not find a matching font-style for " + Ye);
                }(Ft.style, ze), !(ze = function(Ye, tt) {
                  if (tt[Ye]) return tt[Ye];
                  if (Ye === 400 && tt[500]) return tt[500];
                  if (Ye === 500 && tt[400]) return tt[400];
                  var Mt = S0[Ye], ut = ru(tt, lh, Mt, Ye < 400 ? -1 : 1);
                  if (!ut) throw new Error("Could not find a matching font-weight for value " + Ye);
                  return ut;
                }(Ft.weight, ze))) throw new Error("Failed to resolve a font for the rule '" + au(Ft) + "'.");
                return ze;
              }(Ue, yt);
              this.pdf.setFont(ft.ref.name, ft.ref.style);
            } else {
              var et = "";
              (Ge === "bold" || parseInt(Ge, 10) >= 700 || ot === "bold") && (et = "bold"), ot === "italic" && (et += "italic"), et.length === 0 && (et = "normal");
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
        set: function(P) {
          this.ctx.globalCompositeOperation = P;
        }
      }), Object.defineProperty(this, "globalAlpha", {
        get: function() {
          return this.ctx.globalAlpha;
        },
        set: function(P) {
          this.ctx.globalAlpha = P;
        }
      }), Object.defineProperty(this, "lineDashOffset", {
        get: function() {
          return this.ctx.lineDashOffset;
        },
        set: function(P) {
          this.ctx.lineDashOffset = P, de.call(this);
        }
      }), Object.defineProperty(this, "lineDash", {
        get: function() {
          return this.ctx.lineDash;
        },
        set: function(P) {
          this.ctx.lineDash = P, de.call(this);
        }
      }), Object.defineProperty(this, "ignoreClearRect", {
        get: function() {
          return this.ctx.ignoreClearRect;
        },
        set: function(P) {
          this.ctx.ignoreClearRect = !!P;
        }
      });
    };
    w.prototype.setLineDash = function(x) {
      this.lineDash = x;
    }, w.prototype.getLineDash = function() {
      return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
    }, w.prototype.fill = function() {
      q.call(this, "fill", false);
    }, w.prototype.stroke = function() {
      q.call(this, "stroke", false);
    }, w.prototype.beginPath = function() {
      this.path = [
        {
          type: "begin"
        }
      ];
    }, w.prototype.moveTo = function(x, T) {
      if (isNaN(x) || isNaN(T)) throw Pt.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
      var U = this.ctx.transform.applyToPoint(new h(x, T));
      this.path.push({
        type: "mt",
        x: U.x,
        y: U.y
      }), this.ctx.lastPoint = new h(x, T);
    }, w.prototype.closePath = function() {
      var x = new h(0, 0), T = 0;
      for (T = this.path.length - 1; T !== -1; T--) if (this.path[T].type === "begin" && Lt(this.path[T + 1]) === "object" && typeof this.path[T + 1].x == "number") {
        x = new h(this.path[T + 1].x, this.path[T + 1].y);
        break;
      }
      this.path.push({
        type: "close"
      }), this.ctx.lastPoint = new h(x.x, x.y);
    }, w.prototype.lineTo = function(x, T) {
      if (isNaN(x) || isNaN(T)) throw Pt.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
      var U = this.ctx.transform.applyToPoint(new h(x, T));
      this.path.push({
        type: "lt",
        x: U.x,
        y: U.y
      }), this.ctx.lastPoint = new h(U.x, U.y);
    }, w.prototype.clip = function() {
      this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), q.call(this, null, true);
    }, w.prototype.quadraticCurveTo = function(x, T, U, $) {
      if (isNaN(U) || isNaN($) || isNaN(x) || isNaN(T)) throw Pt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
      var K = this.ctx.transform.applyToPoint(new h(U, $)), Q = this.ctx.transform.applyToPoint(new h(x, T));
      this.path.push({
        type: "qct",
        x1: Q.x,
        y1: Q.y,
        x: K.x,
        y: K.y
      }), this.ctx.lastPoint = new h(K.x, K.y);
    }, w.prototype.bezierCurveTo = function(x, T, U, $, K, Q) {
      if (isNaN(K) || isNaN(Q) || isNaN(x) || isNaN(T) || isNaN(U) || isNaN($)) throw Pt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
      var ce = this.ctx.transform.applyToPoint(new h(K, Q)), ue = this.ctx.transform.applyToPoint(new h(x, T)), ve = this.ctx.transform.applyToPoint(new h(U, $));
      this.path.push({
        type: "bct",
        x1: ue.x,
        y1: ue.y,
        x2: ve.x,
        y2: ve.y,
        x: ce.x,
        y: ce.y
      }), this.ctx.lastPoint = new h(ce.x, ce.y);
    }, w.prototype.arc = function(x, T, U, $, K, Q) {
      if (isNaN(x) || isNaN(T) || isNaN(U) || isNaN($) || isNaN(K)) throw Pt.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
      if (Q = !!Q, !this.ctx.transform.isIdentity) {
        var ce = this.ctx.transform.applyToPoint(new h(x, T));
        x = ce.x, T = ce.y;
        var ue = this.ctx.transform.applyToPoint(new h(0, U)), ve = this.ctx.transform.applyToPoint(new h(0, 0));
        U = Math.sqrt(Math.pow(ue.x - ve.x, 2) + Math.pow(ue.y - ve.y, 2));
      }
      Math.abs(K - $) >= 2 * Math.PI && ($ = 0, K = 2 * Math.PI), this.path.push({
        type: "arc",
        x,
        y: T,
        radius: U,
        startAngle: $,
        endAngle: K,
        counterclockwise: Q
      });
    }, w.prototype.arcTo = function(x, T, U, $, K) {
      throw new Error("arcTo not implemented.");
    }, w.prototype.rect = function(x, T, U, $) {
      if (isNaN(x) || isNaN(T) || isNaN(U) || isNaN($)) throw Pt.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
      this.moveTo(x, T), this.lineTo(x + U, T), this.lineTo(x + U, T + $), this.lineTo(x, T + $), this.lineTo(x, T), this.lineTo(x + U, T), this.lineTo(x, T);
    }, w.prototype.fillRect = function(x, T, U, $) {
      if (isNaN(x) || isNaN(T) || isNaN(U) || isNaN($)) throw Pt.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
      if (!p.call(this)) {
        var K = {};
        this.lineCap !== "butt" && (K.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (K.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(x, T, U, $), this.fill(), K.hasOwnProperty("lineCap") && (this.lineCap = K.lineCap), K.hasOwnProperty("lineJoin") && (this.lineJoin = K.lineJoin);
      }
    }, w.prototype.strokeRect = function(x, T, U, $) {
      if (isNaN(x) || isNaN(T) || isNaN(U) || isNaN($)) throw Pt.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
      I.call(this) || (this.beginPath(), this.rect(x, T, U, $), this.stroke());
    }, w.prototype.clearRect = function(x, T, U, $) {
      if (isNaN(x) || isNaN(T) || isNaN(U) || isNaN($)) throw Pt.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
      this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(x, T, U, $));
    }, w.prototype.save = function(x) {
      x = typeof x != "boolean" || x;
      for (var T = this.pdf.internal.getCurrentPageInfo().pageNumber, U = 0; U < this.pdf.internal.getNumberOfPages(); U++) this.pdf.setPage(U + 1), this.pdf.internal.out("q");
      if (this.pdf.setPage(T), x) {
        this.ctx.fontSize = this.pdf.internal.getFontSize();
        var $ = new g(this.ctx);
        this.ctxStack.push(this.ctx), this.ctx = $;
      }
    }, w.prototype.restore = function(x) {
      x = typeof x != "boolean" || x;
      for (var T = this.pdf.internal.getCurrentPageInfo().pageNumber, U = 0; U < this.pdf.internal.getNumberOfPages(); U++) this.pdf.setPage(U + 1), this.pdf.internal.out("Q");
      this.pdf.setPage(T), x && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
    }, w.prototype.toDataURL = function() {
      throw new Error("toDataUrl not implemented.");
    };
    var S = function(x) {
      var T, U, $, K;
      if (x.isCanvasGradient === true && (x = x.getColor()), !x) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        style: x
      };
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(x)) T = 0, U = 0, $ = 0, K = 0;
      else {
        var Q = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(x);
        if (Q !== null) T = parseInt(Q[1]), U = parseInt(Q[2]), $ = parseInt(Q[3]), K = 1;
        else if ((Q = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(x)) !== null) T = parseInt(Q[1]), U = parseInt(Q[2]), $ = parseInt(Q[3]), K = parseFloat(Q[4]);
        else {
          if (K = 1, typeof x == "string" && x.charAt(0) !== "#") {
            var ce = new Qf(x);
            x = ce.ok ? ce.toHex() : "#000000";
          }
          x.length === 4 ? (T = x.substring(1, 2), T += T, U = x.substring(2, 3), U += U, $ = x.substring(3, 4), $ += $) : (T = x.substring(1, 3), U = x.substring(3, 5), $ = x.substring(5, 7)), T = parseInt(T, 16), U = parseInt(U, 16), $ = parseInt($, 16);
        }
      }
      return {
        r: T,
        g: U,
        b: $,
        a: K,
        style: x
      };
    }, p = function() {
      return this.ctx.isFillTransparent || this.globalAlpha == 0;
    }, I = function() {
      return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
    };
    w.prototype.fillText = function(x, T, U, $) {
      if (isNaN(T) || isNaN(U) || typeof x != "string") throw Pt.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
      if ($ = isNaN($) ? void 0 : $, !p.call(this)) {
        var K = Y(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
        O.call(this, {
          text: x,
          x: T,
          y: U,
          scale: Q,
          angle: K,
          align: this.textAlign,
          maxWidth: $
        });
      }
    }, w.prototype.strokeText = function(x, T, U, $) {
      if (isNaN(T) || isNaN(U) || typeof x != "string") throw Pt.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
      if (!I.call(this)) {
        $ = isNaN($) ? void 0 : $;
        var K = Y(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
        O.call(this, {
          text: x,
          x: T,
          y: U,
          scale: Q,
          renderingMode: "stroke",
          angle: K,
          align: this.textAlign,
          maxWidth: $
        });
      }
    }, w.prototype.measureText = function(x) {
      if (typeof x != "string") throw Pt.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
      var T = this.pdf, U = this.pdf.internal.scaleFactor, $ = T.internal.getFontSize(), K = T.getStringUnitWidth(x) * $ / T.internal.scaleFactor;
      return new function(Q) {
        var ce = (Q = Q || {}).width || 0;
        return Object.defineProperty(this, "width", {
          get: function() {
            return ce;
          }
        }), this;
      }({
        width: K *= Math.round(96 * U / 72 * 1e4) / 1e4
      });
    }, w.prototype.scale = function(x, T) {
      if (isNaN(x) || isNaN(T)) throw Pt.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
      var U = new u(x, 0, 0, T, 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(U);
    }, w.prototype.rotate = function(x) {
      if (isNaN(x)) throw Pt.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
      var T = new u(Math.cos(x), Math.sin(x), -Math.sin(x), Math.cos(x), 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(T);
    }, w.prototype.translate = function(x, T) {
      if (isNaN(x) || isNaN(T)) throw Pt.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
      var U = new u(1, 0, 0, 1, x, T);
      this.ctx.transform = this.ctx.transform.multiply(U);
    }, w.prototype.transform = function(x, T, U, $, K, Q) {
      if (isNaN(x) || isNaN(T) || isNaN(U) || isNaN($) || isNaN(K) || isNaN(Q)) throw Pt.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
      var ce = new u(x, T, U, $, K, Q);
      this.ctx.transform = this.ctx.transform.multiply(ce);
    }, w.prototype.setTransform = function(x, T, U, $, K, Q) {
      x = isNaN(x) ? 1 : x, T = isNaN(T) ? 0 : T, U = isNaN(U) ? 0 : U, $ = isNaN($) ? 1 : $, K = isNaN(K) ? 0 : K, Q = isNaN(Q) ? 0 : Q, this.ctx.transform = new u(x, T, U, $, K, Q);
    };
    var M = function() {
      return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
    };
    w.prototype.drawImage = function(x, T, U, $, K, Q, ce, ue, ve) {
      var Le = this.pdf.getImageProperties(x), Pe = 1, Ce = 1, We = 1, P = 1;
      $ !== void 0 && ue !== void 0 && (We = ue / $, P = ve / K, Pe = Le.width / $ * ue / $, Ce = Le.height / K * ve / K), Q === void 0 && (Q = T, ce = U, T = 0, U = 0), $ !== void 0 && ue === void 0 && (ue = $, ve = K), $ === void 0 && ue === void 0 && (ue = Le.width, ve = Le.height);
      var ke = this.ctx.transform.decompose(), ot = Y(ke.rotate.shx), Ge = new u(), Ne = (Ge = (Ge = (Ge = Ge.multiply(ke.translate)).multiply(ke.skew)).multiply(ke.scale)).applyToRectangle(new l(Q - T * We, ce - U * P, $ * Pe, K * Ce));
      if (this.autoPaging) {
        for (var Ve, je = D.call(this, Ne), He = [], Ue = 0; Ue < je.length; Ue += 1) He.indexOf(je[Ue]) === -1 && He.push(je[Ue]);
        V(He);
        for (var yt = He[0], ft = He[He.length - 1], et = yt; et < ft + 1; et++) {
          this.pdf.setPage(et);
          var dt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ht = et === 1 ? this.posY + this.margin[0] : this.margin[0], Oe = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], rt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], qe = et === 1 ? 0 : Oe + (et - 2) * rt;
          if (this.ctx.clip_path.length !== 0) {
            var Ut = this.path;
            Ve = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = W(Ve, this.posX + this.margin[3], -qe + ht + this.ctx.prevPageLastElemOffset), le.call(this, "fill", true), this.path = Ut;
          }
          var gt = JSON.parse(JSON.stringify(Ne));
          gt = W([
            gt
          ], this.posX + this.margin[3], -qe + ht + this.ctx.prevPageLastElemOffset)[0];
          var lt = (et > yt || et < ft) && M.call(this);
          lt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], dt, rt, null).clip().discardPath()), this.pdf.addImage(x, "JPEG", gt.x, gt.y, gt.w, gt.h, null, null, ot), lt && this.pdf.restoreGraphicsState();
        }
      } else this.pdf.addImage(x, "JPEG", Ne.x, Ne.y, Ne.w, Ne.h, null, null, ot);
    };
    var D = function(x, T, U) {
      var $ = [];
      T = T || this.pdf.internal.pageSize.width, U = U || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
      var K = this.posY + this.ctx.prevPageLastElemOffset;
      switch (x.type) {
        default:
        case "mt":
        case "lt":
          $.push(Math.floor((x.y + K) / U) + 1);
          break;
        case "arc":
          $.push(Math.floor((x.y + K - x.radius) / U) + 1), $.push(Math.floor((x.y + K + x.radius) / U) + 1);
          break;
        case "qct":
          var Q = X(this.ctx.lastPoint.x, this.ctx.lastPoint.y, x.x1, x.y1, x.x, x.y);
          $.push(Math.floor((Q.y + K) / U) + 1), $.push(Math.floor((Q.y + Q.h + K) / U) + 1);
          break;
        case "bct":
          var ce = _e(this.ctx.lastPoint.x, this.ctx.lastPoint.y, x.x1, x.y1, x.x2, x.y2, x.x, x.y);
          $.push(Math.floor((ce.y + K) / U) + 1), $.push(Math.floor((ce.y + ce.h + K) / U) + 1);
          break;
        case "rect":
          $.push(Math.floor((x.y + K) / U) + 1), $.push(Math.floor((x.y + x.h + K) / U) + 1);
      }
      for (var ue = 0; ue < $.length; ue += 1) for (; this.pdf.internal.getNumberOfPages() < $[ue]; ) _.call(this);
      return $;
    }, _ = function() {
      var x = this.fillStyle, T = this.strokeStyle, U = this.font, $ = this.lineCap, K = this.lineWidth, Q = this.lineJoin;
      this.pdf.addPage(), this.fillStyle = x, this.strokeStyle = T, this.font = U, this.lineCap = $, this.lineWidth = K, this.lineJoin = Q;
    }, W = function(x, T, U) {
      for (var $ = 0; $ < x.length; $++) switch (x[$].type) {
        case "bct":
          x[$].x2 += T, x[$].y2 += U;
        case "qct":
          x[$].x1 += T, x[$].y1 += U;
        default:
          x[$].x += T, x[$].y += U;
      }
      return x;
    }, V = function(x) {
      return x.sort(function(T, U) {
        return T - U;
      });
    }, q = function(x, T) {
      var U = this.fillStyle, $ = this.strokeStyle, K = this.lineCap, Q = this.lineWidth, ce = Math.abs(Q * this.ctx.transform.scaleX), ue = this.lineJoin;
      if (this.autoPaging) {
        for (var ve, Le, Pe = JSON.parse(JSON.stringify(this.path)), Ce = JSON.parse(JSON.stringify(this.path)), We = [], P = 0; P < Ce.length; P++) if (Ce[P].x !== void 0) for (var ke = D.call(this, Ce[P]), ot = 0; ot < ke.length; ot += 1) We.indexOf(ke[ot]) === -1 && We.push(ke[ot]);
        for (var Ge = 0; Ge < We.length; Ge++) for (; this.pdf.internal.getNumberOfPages() < We[Ge]; ) _.call(this);
        V(We);
        for (var Ne = We[0], Ve = We[We.length - 1], je = Ne; je < Ve + 1; je++) {
          this.pdf.setPage(je), this.fillStyle = U, this.strokeStyle = $, this.lineCap = K, this.lineWidth = ce, this.lineJoin = ue;
          var He = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Ue = je === 1 ? this.posY + this.margin[0] : this.margin[0], yt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ft = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], et = je === 1 ? 0 : yt + (je - 2) * ft;
          if (this.ctx.clip_path.length !== 0) {
            var dt = this.path;
            ve = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = W(ve, this.posX + this.margin[3], -et + Ue + this.ctx.prevPageLastElemOffset), le.call(this, x, true), this.path = dt;
          }
          if (Le = JSON.parse(JSON.stringify(Pe)), this.path = W(Le, this.posX + this.margin[3], -et + Ue + this.ctx.prevPageLastElemOffset), T === false || je === 0) {
            var ht = (je > Ne || je < Ve) && M.call(this);
            ht && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], He, ft, null).clip().discardPath()), le.call(this, x, T), ht && this.pdf.restoreGraphicsState();
          }
          this.lineWidth = Q;
        }
        this.path = Pe;
      } else this.lineWidth = ce, le.call(this, x, T), this.lineWidth = Q;
    }, le = function(x, T) {
      if ((x !== "stroke" || T || !I.call(this)) && (x === "stroke" || T || !p.call(this))) {
        for (var U, $, K = [], Q = this.path, ce = 0; ce < Q.length; ce++) {
          var ue = Q[ce];
          switch (ue.type) {
            case "begin":
              K.push({
                begin: true
              });
              break;
            case "close":
              K.push({
                close: true
              });
              break;
            case "mt":
              K.push({
                start: ue,
                deltas: [],
                abs: []
              });
              break;
            case "lt":
              var ve = K.length;
              if (Q[ce - 1] && !isNaN(Q[ce - 1].x) && (U = [
                ue.x - Q[ce - 1].x,
                ue.y - Q[ce - 1].y
              ], ve > 0)) {
                for (; ve >= 0; ve--) if (K[ve - 1].close !== true && K[ve - 1].begin !== true) {
                  K[ve - 1].deltas.push(U), K[ve - 1].abs.push(ue);
                  break;
                }
              }
              break;
            case "bct":
              U = [
                ue.x1 - Q[ce - 1].x,
                ue.y1 - Q[ce - 1].y,
                ue.x2 - Q[ce - 1].x,
                ue.y2 - Q[ce - 1].y,
                ue.x - Q[ce - 1].x,
                ue.y - Q[ce - 1].y
              ], K[K.length - 1].deltas.push(U);
              break;
            case "qct":
              var Le = Q[ce - 1].x + 2 / 3 * (ue.x1 - Q[ce - 1].x), Pe = Q[ce - 1].y + 2 / 3 * (ue.y1 - Q[ce - 1].y), Ce = ue.x + 2 / 3 * (ue.x1 - ue.x), We = ue.y + 2 / 3 * (ue.y1 - ue.y), P = ue.x, ke = ue.y;
              U = [
                Le - Q[ce - 1].x,
                Pe - Q[ce - 1].y,
                Ce - Q[ce - 1].x,
                We - Q[ce - 1].y,
                P - Q[ce - 1].x,
                ke - Q[ce - 1].y
              ], K[K.length - 1].deltas.push(U);
              break;
            case "arc":
              K.push({
                deltas: [],
                abs: [],
                arc: true
              }), Array.isArray(K[K.length - 1].abs) && K[K.length - 1].abs.push(ue);
          }
        }
        $ = T ? null : x === "stroke" ? "stroke" : "fill";
        for (var ot = false, Ge = 0; Ge < K.length; Ge++) if (K[Ge].arc) for (var Ne = K[Ge].abs, Ve = 0; Ve < Ne.length; Ve++) {
          var je = Ne[Ve];
          je.type === "arc" ? ee.call(this, je.x, je.y, je.radius, je.startAngle, je.endAngle, je.counterclockwise, void 0, T, !ot) : R.call(this, je.x, je.y), ot = true;
        }
        else if (K[Ge].close === true) this.pdf.internal.out("h"), ot = false;
        else if (K[Ge].begin !== true) {
          var He = K[Ge].start.x, Ue = K[Ge].start.y;
          B.call(this, K[Ge].deltas, He, Ue), ot = true;
        }
        $ && H.call(this, $), T && ie.call(this);
      }
    }, xe = function(x) {
      var T = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, U = T * (this.pdf.internal.getLineHeightFactor() - 1);
      switch (this.ctx.textBaseline) {
        case "bottom":
          return x - U;
        case "top":
          return x + T - U;
        case "hanging":
          return x + T - 2 * U;
        case "middle":
          return x + T / 2 - U;
        default:
          return x;
      }
    }, ge = function(x) {
      return x + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
    };
    w.prototype.createLinearGradient = function() {
      var x = function() {
      };
      return x.colorStops = [], x.addColorStop = function(T, U) {
        this.colorStops.push([
          T,
          U
        ]);
      }, x.getColor = function() {
        return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
      }, x.isCanvasGradient = true, x;
    }, w.prototype.createPattern = function() {
      return this.createLinearGradient();
    }, w.prototype.createRadialGradient = function() {
      return this.createLinearGradient();
    };
    var ee = function(x, T, U, $, K, Q, ce, ue, ve) {
      for (var Le = se.call(this, U, $, K, Q), Pe = 0; Pe < Le.length; Pe++) {
        var Ce = Le[Pe];
        Pe === 0 && (ve ? L.call(this, Ce.x1 + x, Ce.y1 + T) : R.call(this, Ce.x1 + x, Ce.y1 + T)), te.call(this, x, T, Ce.x2, Ce.y2, Ce.x3, Ce.y3, Ce.x4, Ce.y4);
      }
      ue ? ie.call(this) : H.call(this, ce);
    }, H = function(x) {
      switch (x) {
        case "stroke":
          this.pdf.internal.out("S");
          break;
        case "fill":
          this.pdf.internal.out("f");
      }
    }, ie = function() {
      this.pdf.clip(), this.pdf.discardPath();
    }, L = function(x, T) {
      this.pdf.internal.out(t(x) + " " + r(T) + " m");
    }, O = function(x) {
      var T;
      switch (x.align) {
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
      var U, $, K, Q = this.pdf.getTextDimensions(x.text), ce = xe.call(this, x.y), ue = ge.call(this, ce) - Q.h, ve = this.ctx.transform.applyToPoint(new h(x.x, ce));
      if (this.autoPaging) {
        var Le = this.ctx.transform.decompose(), Pe = new u();
        Pe = (Pe = (Pe = Pe.multiply(Le.translate)).multiply(Le.skew)).multiply(Le.scale);
        for (var Ce = this.ctx.transform.applyToRectangle(new l(x.x, ce, Q.w, Q.h)), We = Pe.applyToRectangle(new l(x.x, ue, Q.w, Q.h)), P = D.call(this, We), ke = [], ot = 0; ot < P.length; ot += 1) ke.indexOf(P[ot]) === -1 && ke.push(P[ot]);
        V(ke);
        for (var Ge = ke[0], Ne = ke[ke.length - 1], Ve = Ge; Ve < Ne + 1; Ve++) {
          this.pdf.setPage(Ve);
          var je = Ve === 1 ? this.posY + this.margin[0] : this.margin[0], He = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ue = this.pdf.internal.pageSize.height - this.margin[2], yt = Ue - this.margin[0], ft = this.pdf.internal.pageSize.width - this.margin[1], et = ft - this.margin[3], dt = Ve === 1 ? 0 : He + (Ve - 2) * yt;
          if (this.ctx.clip_path.length !== 0) {
            var ht = this.path;
            U = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = W(U, this.posX + this.margin[3], -1 * dt + je), le.call(this, "fill", true), this.path = ht;
          }
          var Oe = W([
            JSON.parse(JSON.stringify(We))
          ], this.posX + this.margin[3], -dt + je + this.ctx.prevPageLastElemOffset)[0];
          x.scale >= 0.01 && ($ = this.pdf.internal.getFontSize(), this.pdf.setFontSize($ * x.scale), K = this.lineWidth, this.lineWidth = K * x.scale);
          var rt = this.autoPaging !== "text";
          if (rt || Oe.y + Oe.h <= Ue) {
            if (rt || Oe.y >= je && Oe.x <= ft) {
              var qe = rt ? x.text : this.pdf.splitTextToSize(x.text, x.maxWidth || ft - Oe.x)[0], Ut = W([
                JSON.parse(JSON.stringify(Ce))
              ], this.posX + this.margin[3], -dt + je + this.ctx.prevPageLastElemOffset)[0], gt = rt && (Ve > Ge || Ve < Ne) && M.call(this);
              gt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], et, yt, null).clip().discardPath()), this.pdf.text(qe, Ut.x, Ut.y, {
                angle: x.angle,
                align: T,
                renderingMode: x.renderingMode
              }), gt && this.pdf.restoreGraphicsState();
            }
          } else Oe.y < Ue && (this.ctx.prevPageLastElemOffset += Ue - Oe.y);
          x.scale >= 0.01 && (this.pdf.setFontSize($), this.lineWidth = K);
        }
      } else x.scale >= 0.01 && ($ = this.pdf.internal.getFontSize(), this.pdf.setFontSize($ * x.scale), K = this.lineWidth, this.lineWidth = K * x.scale), this.pdf.text(x.text, ve.x + this.posX, ve.y + this.posY, {
        angle: x.angle,
        align: T,
        renderingMode: x.renderingMode,
        maxWidth: x.maxWidth
      }), x.scale >= 0.01 && (this.pdf.setFontSize($), this.lineWidth = K);
    }, R = function(x, T, U, $) {
      U = U || 0, $ = $ || 0, this.pdf.internal.out(t(x + U) + " " + r(T + $) + " l");
    }, B = function(x, T, U) {
      return this.pdf.lines(x, T, U, null, null);
    }, te = function(x, T, U, $, K, Q, ce, ue) {
      this.pdf.internal.out([
        e(s(U + x)),
        e(a($ + T)),
        e(s(K + x)),
        e(a(Q + T)),
        e(s(ce + x)),
        e(a(ue + T)),
        "c"
      ].join(" "));
    }, se = function(x, T, U, $) {
      for (var K = 2 * Math.PI, Q = Math.PI / 2; T > U; ) T -= K;
      var ce = Math.abs(U - T);
      ce < K && $ && (ce = K - ce);
      for (var ue = [], ve = $ ? -1 : 1, Le = T; ce > 1e-5; ) {
        var Pe = Le + ve * Math.min(ce, Q);
        ue.push(oe.call(this, x, Le, Pe)), ce -= Math.abs(Pe - Le), Le = Pe;
      }
      return ue;
    }, oe = function(x, T, U) {
      var $ = (U - T) / 2, K = x * Math.cos($), Q = x * Math.sin($), ce = K, ue = -Q, ve = ce * ce + ue * ue, Le = ve + ce * K + ue * Q, Pe = 4 / 3 * (Math.sqrt(2 * ve * Le) - Le) / (ce * Q - ue * K), Ce = ce - Pe * ue, We = ue + Pe * ce, P = Ce, ke = -We, ot = $ + T, Ge = Math.cos(ot), Ne = Math.sin(ot);
      return {
        x1: x * Math.cos(T),
        y1: x * Math.sin(T),
        x2: Ce * Ge - We * Ne,
        y2: Ce * Ne + We * Ge,
        x3: P * Ge - ke * Ne,
        y3: P * Ne + ke * Ge,
        x4: x * Math.cos(U),
        y4: x * Math.sin(U)
      };
    }, Y = function(x) {
      return 180 * x / Math.PI;
    }, X = function(x, T, U, $, K, Q) {
      var ce = x + 0.5 * (U - x), ue = T + 0.5 * ($ - T), ve = K + 0.5 * (U - K), Le = Q + 0.5 * ($ - Q), Pe = Math.min(x, K, ce, ve), Ce = Math.max(x, K, ce, ve), We = Math.min(T, Q, ue, Le), P = Math.max(T, Q, ue, Le);
      return new l(Pe, We, Ce - Pe, P - We);
    }, _e = function(x, T, U, $, K, Q, ce, ue) {
      var ve, Le, Pe, Ce, We, P, ke, ot, Ge, Ne, Ve, je, He, Ue, yt = U - x, ft = $ - T, et = K - U, dt = Q - $, ht = ce - K, Oe = ue - Q;
      for (Le = 0; Le < 41; Le++) Ge = (ke = (Pe = x + (ve = Le / 40) * yt) + ve * ((We = U + ve * et) - Pe)) + ve * (We + ve * (K + ve * ht - We) - ke), Ne = (ot = (Ce = T + ve * ft) + ve * ((P = $ + ve * dt) - Ce)) + ve * (P + ve * (Q + ve * Oe - P) - ot), Le == 0 ? (Ve = Ge, je = Ne, He = Ge, Ue = Ne) : (Ve = Math.min(Ve, Ge), je = Math.min(je, Ne), He = Math.max(He, Ge), Ue = Math.max(Ue, Ne));
      return new l(Math.round(Ve), Math.round(je), Math.round(He - Ve), Math.round(Ue - je));
    }, de = function() {
      if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
        var x, T, U = (x = this.ctx.lineDash, T = this.ctx.lineDashOffset, JSON.stringify({
          lineDash: x,
          lineDashOffset: T
        }));
        this.prevLineDash !== U && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = U);
      }
    };
  })(Be.API), function(n) {
    var e = function(h) {
      var l, u, d, g, w, S, p, I, M, D;
      for (u = [], d = 0, g = (h += l = "\0\0\0\0".slice(h.length % 4 || 4)).length; g > d; d += 4) (w = (h.charCodeAt(d) << 24) + (h.charCodeAt(d + 1) << 16) + (h.charCodeAt(d + 2) << 8) + h.charCodeAt(d + 3)) !== 0 ? (S = (w = ((w = ((w = ((w = (w - (D = w % 85)) / 85) - (M = w % 85)) / 85) - (I = w % 85)) / 85) - (p = w % 85)) / 85) % 85, u.push(S + 33, p + 33, I + 33, M + 33, D + 33)) : u.push(122);
      return function(_, W) {
        for (var V = W; V > 0; V--) _.pop();
      }(u, l.length), String.fromCharCode.apply(String, u) + "~>";
    }, t = function(h) {
      var l, u, d, g, w, S = String, p = "length", I = 255, M = "charCodeAt", D = "slice", _ = "replace";
      for (h[D](-2), h = h[D](0, -2)[_](/\s/g, "")[_]("z", "!!!!!"), d = [], g = 0, w = (h += l = "uuuuu"[D](h[p] % 5 || 5))[p]; w > g; g += 5) u = 52200625 * (h[M](g) - 33) + 614125 * (h[M](g + 1) - 33) + 7225 * (h[M](g + 2) - 33) + 85 * (h[M](g + 3) - 33) + (h[M](g + 4) - 33), d.push(I & u >> 24, I & u >> 16, I & u >> 8, I & u);
      return function(W, V) {
        for (var q = V; q > 0; q--) W.pop();
      }(d, l[p]), S.fromCharCode.apply(S, d);
    }, r = function(h) {
      return h.split("").map(function(l) {
        return ("0" + l.charCodeAt().toString(16)).slice(-2);
      }).join("") + ">";
    }, s = function(h) {
      var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
      if ((h = h.replace(/\s/g, "")).indexOf(">") !== -1 && (h = h.substr(0, h.indexOf(">"))), h.length % 2 && (h += "0"), l.test(h) === false) return "";
      for (var u = "", d = 0; d < h.length; d += 2) u += String.fromCharCode("0x" + (h[d] + h[d + 1]));
      return u;
    }, a = function(h) {
      for (var l = new Uint8Array(h.length), u = h.length; u--; ) l[u] = h.charCodeAt(u);
      return (l = tl(l)).reduce(function(d, g) {
        return d + String.fromCharCode(g);
      }, "");
    };
    n.processDataByFilters = function(h, l) {
      var u = 0, d = h || "", g = [];
      for (typeof (l = l || []) == "string" && (l = [
        l
      ]), u = 0; u < l.length; u += 1) switch (l[u]) {
        case "ASCII85Decode":
        case "/ASCII85Decode":
          d = t(d), g.push("/ASCII85Encode");
          break;
        case "ASCII85Encode":
        case "/ASCII85Encode":
          d = e(d), g.push("/ASCII85Decode");
          break;
        case "ASCIIHexDecode":
        case "/ASCIIHexDecode":
          d = s(d), g.push("/ASCIIHexEncode");
          break;
        case "ASCIIHexEncode":
        case "/ASCIIHexEncode":
          d = r(d), g.push("/ASCIIHexDecode");
          break;
        case "FlateEncode":
        case "/FlateEncode":
          d = a(d), g.push("/FlateDecode");
          break;
        default:
          throw new Error('The filter: "' + l[u] + '" is not implemented');
      }
      return {
        data: d,
        reverseChain: g.reverse().join(" ")
      };
    };
  }(Be.API), function(n) {
    n.loadFile = function(e, t, r) {
      return function(s, a, h) {
        a = a !== false, h = typeof h == "function" ? h : function() {
        };
        var l = void 0;
        try {
          l = function(u, d, g) {
            var w = new XMLHttpRequest(), S = 0, p = function(I) {
              var M = I.length, D = [], _ = String.fromCharCode;
              for (S = 0; S < M; S += 1) D.push(_(255 & I.charCodeAt(S)));
              return D.join("");
            };
            if (w.open("GET", u, !d), w.overrideMimeType("text/plain; charset=x-user-defined"), d === false && (w.onload = function() {
              w.status === 200 ? g(p(this.responseText)) : g(void 0);
            }), w.send(null), d && w.status === 200) return p(w.responseText);
          }(s, a, h);
        } catch {
        }
        return l;
      }(e, t, r);
    }, n.allowFsRead = void 0, n.loadImageFile = n.loadFile;
  }(Be.API), function(n) {
    function e() {
      return (Je.html2canvas ? Promise.resolve(Je.html2canvas) : Es(() => import("./html2canvas.esm-BfxBtG_O.js"), [])).catch(function(l) {
        return Promise.reject(new Error("Could not load html2canvas: " + l));
      }).then(function(l) {
        return l.default ? l.default : l;
      });
    }
    function t() {
      return (Je.DOMPurify ? Promise.resolve(Je.DOMPurify) : Es(() => import("./purify.es-B9ZVCkUG.js"), [])).catch(function(l) {
        return Promise.reject(new Error("Could not load dompurify: " + l));
      }).then(function(l) {
        return l.default ? l.default : l;
      });
    }
    var r = function(l) {
      var u = Lt(l);
      return u === "undefined" ? "undefined" : u === "string" || l instanceof String ? "string" : u === "number" || l instanceof Number ? "number" : u === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : u === "object" ? "object" : "unknown";
    }, s = function(l, u) {
      var d = document.createElement(l);
      for (var g in u.className && (d.className = u.className), u.innerHTML && u.dompurify && (d.innerHTML = u.dompurify.sanitize(u.innerHTML)), u.style) d.style[g] = u.style[g];
      return d;
    }, a = function l(u, d) {
      for (var g = u.nodeType === 3 ? document.createTextNode(u.nodeValue) : u.cloneNode(false), w = u.firstChild; w; w = w.nextSibling) d !== true && w.nodeType === 1 && w.nodeName === "SCRIPT" || g.appendChild(l(w, d));
      return u.nodeType === 1 && (u.nodeName === "CANVAS" ? (g.width = u.width, g.height = u.height, g.getContext("2d").drawImage(u, 0, 0)) : u.nodeName !== "TEXTAREA" && u.nodeName !== "SELECT" || (g.value = u.value), g.addEventListener("load", function() {
        g.scrollTop = u.scrollTop, g.scrollLeft = u.scrollLeft;
      }, true)), g;
    }, h = function l(u) {
      var d = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), g = l.convert(Promise.resolve(), d);
      return (g = g.setProgress(1, l, 1, [
        l
      ])).set(u);
    };
    (h.prototype = Object.create(Promise.prototype)).constructor = h, h.convert = function(l, u) {
      return l.__proto__ = u || h.prototype, l;
    }, h.template = {
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
    }, h.prototype.from = function(l, u) {
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
        }(l), u) {
          case "string":
            return this.then(t).then(function(d) {
              return this.set({
                src: s("div", {
                  innerHTML: l,
                  dompurify: d
                })
              });
            });
          case "element":
            return this.set({
              src: l
            });
          case "canvas":
            return this.set({
              canvas: l
            });
          case "img":
            return this.set({
              img: l
            });
          default:
            return this.error("Unknown source type.");
        }
      });
    }, h.prototype.to = function(l) {
      switch (l) {
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
    }, h.prototype.toContainer = function() {
      return this.thenList([
        function() {
          return this.prop.src || this.error("Cannot duplicate - no source HTML.");
        },
        function() {
          return this.prop.pageSize || this.setPageSize();
        }
      ]).then(function() {
        var l = {
          position: "relative",
          display: "inline-block",
          width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
          left: 0,
          right: 0,
          top: 0,
          margin: "auto",
          backgroundColor: this.opt.backgroundColor
        }, u = a(this.prop.src, this.opt.html2canvas.javascriptEnabled);
        u.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", {
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
        }), this.prop.container = s("div", {
          className: "html2pdf__container",
          style: l
        }), this.prop.container.appendChild(u), this.prop.container.firstChild.appendChild(s("div", {
          style: {
            clear: "both",
            border: "0 none transparent",
            margin: 0,
            padding: 0,
            height: 0
          }
        })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
      });
    }, h.prototype.toCanvas = function() {
      var l = [
        function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }
      ];
      return this.thenList(l).then(e).then(function(u) {
        var d = Object.assign({}, this.opt.html2canvas);
        return delete d.onrendered, u(this.prop.container, d);
      }).then(function(u) {
        (this.opt.html2canvas.onrendered || function() {
        })(u), this.prop.canvas = u, document.body.removeChild(this.prop.overlay);
      });
    }, h.prototype.toContext2d = function() {
      var l = [
        function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }
      ];
      return this.thenList(l).then(e).then(function(u) {
        var d = this.opt.jsPDF, g = this.opt.fontFaces, w = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, S = Object.assign({
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
        if (delete S.onrendered, d.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, d.context2d.posX = this.opt.x, d.context2d.posY = this.opt.y, d.context2d.margin = this.opt.margin, d.context2d.fontFaces = g, g) for (var p = 0; p < g.length; ++p) {
          var I = g[p], M = I.src.find(function(D) {
            return D.format === "truetype";
          });
          M && d.addFont(M.url, I.ref.name, I.ref.style);
        }
        return S.windowHeight = S.windowHeight || 0, S.windowHeight = S.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : S.windowHeight, d.context2d.save(true), u(this.prop.container, S);
      }).then(function(u) {
        this.opt.jsPDF.context2d.restore(true), (this.opt.html2canvas.onrendered || function() {
        })(u), this.prop.canvas = u, document.body.removeChild(this.prop.overlay);
      });
    }, h.prototype.toImg = function() {
      return this.thenList([
        function() {
          return this.prop.canvas || this.toCanvas();
        }
      ]).then(function() {
        var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
        this.prop.img = document.createElement("img"), this.prop.img.src = l;
      });
    }, h.prototype.toPdf = function() {
      return this.thenList([
        function() {
          return this.toContext2d();
        }
      ]).then(function() {
        this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
      });
    }, h.prototype.output = function(l, u, d) {
      return (d = d || "pdf").toLowerCase() === "img" || d.toLowerCase() === "image" ? this.outputImg(l, u) : this.outputPdf(l, u);
    }, h.prototype.outputPdf = function(l, u) {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).then(function() {
        return this.prop.pdf.output(l, u);
      });
    }, h.prototype.outputImg = function(l) {
      return this.thenList([
        function() {
          return this.prop.img || this.toImg();
        }
      ]).then(function() {
        switch (l) {
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
            throw 'Image output type "' + l + '" is not supported.';
        }
      });
    }, h.prototype.save = function(l) {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).set(l ? {
        filename: l
      } : null).then(function() {
        this.prop.pdf.save(this.opt.filename);
      });
    }, h.prototype.doCallback = function() {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).then(function() {
        this.prop.callback(this.prop.pdf);
      });
    }, h.prototype.set = function(l) {
      if (r(l) !== "object") return this;
      var u = Object.keys(l || {}).map(function(d) {
        if (d in h.template.prop) return function() {
          this.prop[d] = l[d];
        };
        switch (d) {
          case "margin":
            return this.setMargin.bind(this, l.margin);
          case "jsPDF":
            return function() {
              return this.opt.jsPDF = l.jsPDF, this.setPageSize();
            };
          case "pageSize":
            return this.setPageSize.bind(this, l.pageSize);
          default:
            return function() {
              this.opt[d] = l[d];
            };
        }
      }, this);
      return this.then(function() {
        return this.thenList(u);
      });
    }, h.prototype.get = function(l, u) {
      return this.then(function() {
        var d = l in h.template.prop ? this.prop[l] : this.opt[l];
        return u ? u(d) : d;
      });
    }, h.prototype.setMargin = function(l) {
      return this.then(function() {
        switch (r(l)) {
          case "number":
            l = [
              l,
              l,
              l,
              l
            ];
          case "array":
            if (l.length === 2 && (l = [
              l[0],
              l[1],
              l[0],
              l[1]
            ]), l.length === 4) break;
          default:
            return this.error("Invalid margin array.");
        }
        this.opt.margin = l;
      }).then(this.setPageSize);
    }, h.prototype.setPageSize = function(l) {
      function u(d, g) {
        return Math.floor(d * g / 72 * 96);
      }
      return this.then(function() {
        (l = l || Be.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = {
          width: l.width - this.opt.margin[1] - this.opt.margin[3],
          height: l.height - this.opt.margin[0] - this.opt.margin[2]
        }, l.inner.px = {
          width: u(l.inner.width, l.k),
          height: u(l.inner.height, l.k)
        }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
      });
    }, h.prototype.setProgress = function(l, u, d, g) {
      return l != null && (this.progress.val = l), u != null && (this.progress.state = u), d != null && (this.progress.n = d), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
    }, h.prototype.updateProgress = function(l, u, d, g) {
      return this.setProgress(l ? this.progress.val + l : null, u || null, d ? this.progress.n + d : null, g ? this.progress.stack.concat(g) : null);
    }, h.prototype.then = function(l, u) {
      var d = this;
      return this.thenCore(l, u, function(g, w) {
        return d.updateProgress(null, null, 1, [
          g
        ]), Promise.prototype.then.call(this, function(S) {
          return d.updateProgress(null, g), S;
        }).then(g, w).then(function(S) {
          return d.updateProgress(1), S;
        });
      });
    }, h.prototype.thenCore = function(l, u, d) {
      d = d || Promise.prototype.then;
      var g = this;
      l && (l = l.bind(g)), u && (u = u.bind(g));
      var w = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? g : h.convert(Object.assign({}, g), Promise.prototype), S = d.call(w, l, u);
      return h.convert(S, g.__proto__);
    }, h.prototype.thenExternal = function(l, u) {
      return Promise.prototype.then.call(this, l, u);
    }, h.prototype.thenList = function(l) {
      var u = this;
      return l.forEach(function(d) {
        u = u.thenCore(d);
      }), u;
    }, h.prototype.catch = function(l) {
      l && (l = l.bind(this));
      var u = Promise.prototype.catch.call(this, l);
      return h.convert(u, this);
    }, h.prototype.catchExternal = function(l) {
      return Promise.prototype.catch.call(this, l);
    }, h.prototype.error = function(l) {
      return this.then(function() {
        throw new Error(l);
      });
    }, h.prototype.using = h.prototype.set, h.prototype.saveAs = h.prototype.save, h.prototype.export = h.prototype.output, h.prototype.run = h.prototype.then, Be.getPageSize = function(l, u, d) {
      if (Lt(l) === "object") {
        var g = l;
        l = g.orientation, u = g.unit || u, d = g.format || d;
      }
      u = u || "mm", d = d || "a4", l = ("" + (l || "P")).toLowerCase();
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
      var I, M = 0, D = 0;
      if (p.hasOwnProperty(S)) M = p[S][1] / w, D = p[S][0] / w;
      else try {
        M = d[1], D = d[0];
      } catch {
        throw new Error("Invalid format: " + d);
      }
      if (l === "p" || l === "portrait") l = "p", D > M && (I = D, D = M, M = I);
      else {
        if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
        l = "l", M > D && (I = D, D = M, M = I);
      }
      return {
        width: D,
        height: M,
        unit: u,
        k: w,
        orientation: l
      };
    }, n.html = function(l, u) {
      (u = u || {}).callback = u.callback || function() {
      }, u.html2canvas = u.html2canvas || {}, u.html2canvas.canvas = u.html2canvas.canvas || this.canvas, u.jsPDF = u.jsPDF || this, u.fontFaces = u.fontFaces ? u.fontFaces.map(Yo) : null;
      var d = new h(u);
      return u.worker ? d : d.from(l).doCallback();
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
        if (this.outline.root.children.length > 0) for (var s = t.outline.render().split(/\r\n/), a = 0; a < s.length; a++) {
          var h = s[a], l = r.exec(h);
          if (l != null) {
            var u = l[1];
            t.internal.newObjectDeferredBegin(u, false);
          }
          t.internal.write(h);
        }
        if (this.outline.createNamedDestinations) {
          var d = this.internal.pages.length, g = [];
          for (a = 0; a < d; a++) {
            var w = t.internal.newObject();
            g.push(w);
            var S = t.internal.getPageInfo(a + 1);
            t.internal.write("<< /D[" + S.objId + " 0 R /XYZ null null null]>> endobj");
          }
          var p = t.internal.newObject();
          for (t.internal.write("<< /Names [ "), a = 0; a < g.length; a++) t.internal.write("(page_" + (a + 1) + ")" + g[a] + " 0 R");
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
        }, t.outline.add = function(r, s, a) {
          var h = {
            title: s,
            options: a,
            children: []
          };
          return r == null && (r = this.root), r.children.push(h), h;
        }, t.outline.render = function() {
          return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
        }, t.outline.genIds_r = function(r) {
          r.id = t.internal.newObjectDeferred();
          for (var s = 0; s < r.children.length; s++) this.genIds_r(r.children[s]);
        }, t.outline.renderRoot = function(r) {
          this.objStart(r), this.line("/Type /Outlines"), r.children.length > 0 && (this.line("/First " + this.makeRef(r.children[0])), this.line("/Last " + this.makeRef(r.children[r.children.length - 1]))), this.line("/Count " + this.count_r({
            count: 0
          }, r)), this.objEnd();
        }, t.outline.renderItems = function(r) {
          for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, a = 0; a < r.children.length; a++) {
            var h = r.children[a];
            this.objStart(h), this.line("/Title " + this.makeString(h.title)), this.line("/Parent " + this.makeRef(r)), a > 0 && this.line("/Prev " + this.makeRef(r.children[a - 1])), a < r.children.length - 1 && this.line("/Next " + this.makeRef(r.children[a + 1])), h.children.length > 0 && (this.line("/First " + this.makeRef(h.children[0])), this.line("/Last " + this.makeRef(h.children[h.children.length - 1])));
            var l = this.count = this.count_r({
              count: 0
            }, h);
            if (l > 0 && this.line("/Count " + l), h.options && h.options.pageNumber) {
              var u = t.internal.getPageInfo(h.options.pageNumber);
              this.line("/Dest [" + u.objId + " 0 R /XYZ 0 " + s(0) + " 0]");
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
        }, t.outline.count_r = function(r, s) {
          for (var a = 0; a < s.children.length; a++) r.count++, this.count_r(r, s.children[a]);
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
    n.processJPEG = function(t, r, s, a, h, l) {
      var u, d = this.decode.DCT_DECODE, g = null;
      if (typeof t == "string" || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
        switch (t = h || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, u = function(w) {
          for (var S, p = 256 * w.charCodeAt(4) + w.charCodeAt(5), I = w.length, M = {
            width: 0,
            height: 0,
            numcomponents: 1
          }, D = 4; D < I; D += 2) {
            if (D += p, e.indexOf(w.charCodeAt(D + 1)) !== -1) {
              S = 256 * w.charCodeAt(D + 5) + w.charCodeAt(D + 6), M = {
                width: 256 * w.charCodeAt(D + 7) + w.charCodeAt(D + 8),
                height: S,
                numcomponents: w.charCodeAt(D + 9)
              };
              break;
            }
            p = 256 * w.charCodeAt(D + 2) + w.charCodeAt(D + 3);
          }
          return M;
        }(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t), u.numcomponents) {
          case 1:
            l = this.color_spaces.DEVICE_GRAY;
            break;
          case 4:
            l = this.color_spaces.DEVICE_CMYK;
            break;
          case 3:
            l = this.color_spaces.DEVICE_RGB;
        }
        g = {
          data: t,
          width: u.width,
          height: u.height,
          colorSpace: l,
          bitsPerComponent: 8,
          filter: d,
          index: r,
          alias: s
        };
      }
      return g;
    };
  }(Be.API), Be.API.processPNG = function(n, e, t, r) {
    if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
      var s, a = h0(n, {
        checkCrc: true
      }), h = a.width, l = a.height, u = a.channels, d = a.palette, g = a.depth;
      s = d && u === 1 ? function(ee) {
        for (var H = ee.width, ie = ee.height, L = ee.data, O = ee.palette, R = ee.depth, B = false, te = [], se = [], oe = void 0, Y = false, X = 0, _e = 0; _e < O.length; _e++) {
          var de = hc(O[_e], 4), x = de[0], T = de[1], U = de[2], $ = de[3];
          te.push(x, T, U), $ != null && ($ === 0 ? (X++, se.length < 1 && se.push(_e)) : $ < 255 && (Y = true));
        }
        if (Y || X > 1) {
          B = true, se = void 0;
          var K = H * ie;
          oe = new Uint8Array(K);
          for (var Q = new DataView(L.buffer), ce = 0; ce < K; ce++) {
            var ue = Xo(Q, ce, R), ve = hc(O[ue], 4)[3];
            oe[ce] = ve;
          }
        } else X === 0 && (se = void 0);
        return {
          colorSpace: "Indexed",
          colorsPerPixel: 1,
          sMaskBitsPerComponent: B ? 8 : void 0,
          colorBytes: L,
          alphaBytes: oe,
          needSMask: B,
          palette: te,
          mask: se
        };
      }(a) : u === 2 || u === 4 ? function(ee) {
        for (var H = ee.data, ie = ee.width, L = ee.height, O = ee.channels, R = ee.depth, B = O === 2 ? "DeviceGray" : "DeviceRGB", te = O - 1, se = ie * L, oe = te, Y = se * oe, X = 1 * se, _e = Math.ceil(Y * R / 8), de = Math.ceil(X * R / 8), x = new Uint8Array(_e), T = new Uint8Array(de), U = new DataView(H.buffer), $ = new DataView(x.buffer), K = new DataView(T.buffer), Q = false, ce = 0; ce < se; ce++) {
          for (var ue = ce * O, ve = 0; ve < oe; ve++) mu($, Xo(U, ue + ve, R), ce * oe + ve, R);
          var Le = Xo(U, ue + oe, R);
          Le < (1 << R) - 1 && (Q = true), mu(K, Le, 1 * ce, R);
        }
        return {
          colorSpace: B,
          colorsPerPixel: te,
          sMaskBitsPerComponent: Q ? R : void 0,
          colorBytes: x,
          alphaBytes: T,
          needSMask: Q
        };
      }(a) : function(ee) {
        var H = ee.data, ie = ee.channels === 1 ? "DeviceGray" : "DeviceRGB";
        return {
          colorSpace: ie,
          colorsPerPixel: ie === "DeviceGray" ? 1 : 3,
          colorBytes: H instanceof Uint16Array ? function(L) {
            for (var O = L.length, R = new Uint8Array(2 * O), B = new DataView(R.buffer, R.byteOffset, R.byteLength), te = 0; te < O; te++) B.setUint16(2 * te, L[te], false);
            return R;
          }(H) : H,
          needSMask: false
        };
      }(a);
      var w, S, p, I = s, M = I.colorSpace, D = I.colorsPerPixel, _ = I.sMaskBitsPerComponent, W = I.colorBytes, V = I.alphaBytes, q = I.needSMask, le = I.palette, xe = I.mask, ge = null;
      return r !== Be.API.image_compression.NONE && typeof tl == "function" ? (ge = function(ee) {
        var H;
        switch (ee) {
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
      }(r), w = this.decode.FLATE_DECODE, S = "/Predictor ".concat(ge, " /Colors ").concat(D, " /BitsPerComponent ").concat(g, " /Columns ").concat(h), n = uu(W, Math.ceil(h * D * g / 8), D, g, r), q && (p = uu(V, Math.ceil(h * _ / 8), 1, _, r))) : (w = void 0, S = void 0, n = W, q && (p = V)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), {
        alias: t,
        data: n,
        index: e,
        filter: w,
        decodeParameters: S,
        transparency: xe,
        palette: le,
        sMask: p,
        predictor: ge,
        width: h,
        height: l,
        bitsPerComponent: g,
        sMaskBitsPerComponent: _,
        colorSpace: M
      };
    }
  }, function(n) {
    n.processGIF89A = function(e, t, r, s) {
      var a = new F0(e), h = a.width, l = a.height, u = [];
      a.decodeAndBlitFrameRGBA(0, u);
      var d = {
        data: u,
        width: h,
        height: l
      }, g = new Zo(100).encode(d, 100);
      return n.processJPEG.call(this, g, t, r, s);
    }, n.processGIF87A = n.processGIF89A;
  }(Be.API), tr.prototype.parseHeader = function() {
    if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
      var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
      this.palette = new Array(n);
      for (var e = 0; e < n; e++) {
        var t = this.datav.getUint8(this.pos++, true), r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true);
        this.palette[e] = {
          red: s,
          green: r,
          blue: t,
          quad: a
        };
      }
    }
    this.height < 0 && (this.height *= -1, this.bottom_up = false);
  }, tr.prototype.parseBGR = function() {
    this.pos = this.offset;
    var n = "bit" + this.bitPP, e = this.width * this.height * 4;
    if (e > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    this.data = new Uint8Array(e);
    try {
      this[n]();
    } catch (t) {
      Pt.log("bit decode error:" + t);
    }
  }, tr.prototype.bit1 = function() {
    var n, e = Math.ceil(this.width / 8), t = e % 4;
    for (n = this.height - 1; n >= 0; n--) {
      for (var r = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++) for (var a = this.datav.getUint8(this.pos++, true), h = r * this.width * 4 + 8 * s * 4, l = 0; l < 8 && 8 * s + l < this.width; l++) {
        var u = this.palette[a >> 7 - l & 1];
        this.data[h + 4 * l] = u.blue, this.data[h + 4 * l + 1] = u.green, this.data[h + 4 * l + 2] = u.red, this.data[h + 4 * l + 3] = 255;
      }
      t !== 0 && (this.pos += 4 - t);
    }
  }, tr.prototype.bit4 = function() {
    for (var n = Math.ceil(this.width / 2), e = n % 4, t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, s = 0; s < n; s++) {
        var a = this.datav.getUint8(this.pos++, true), h = r * this.width * 4 + 2 * s * 4, l = a >> 4, u = 15 & a, d = this.palette[l];
        if (this.data[h] = d.blue, this.data[h + 1] = d.green, this.data[h + 2] = d.red, this.data[h + 3] = 255, 2 * s + 1 >= this.width) break;
        d = this.palette[u], this.data[h + 4] = d.blue, this.data[h + 4 + 1] = d.green, this.data[h + 4 + 2] = d.red, this.data[h + 4 + 3] = 255;
      }
      e !== 0 && (this.pos += 4 - e);
    }
  }, tr.prototype.bit8 = function() {
    for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
      for (var t = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
        var s = this.datav.getUint8(this.pos++, true), a = t * this.width * 4 + 4 * r;
        if (s < this.palette.length) {
          var h = this.palette[s];
          this.data[a] = h.red, this.data[a + 1] = h.green, this.data[a + 2] = h.blue, this.data[a + 3] = 255;
        } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
      }
      n !== 0 && (this.pos += 4 - n);
    }
  }, tr.prototype.bit15 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, s = 0; s < this.width; s++) {
        var a = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var h = (a & e) / e * 255 | 0, l = (a >> 5 & e) / e * 255 | 0, u = (a >> 10 & e) / e * 255 | 0, d = a >> 15 ? 255 : 0, g = r * this.width * 4 + 4 * s;
        this.data[g] = u, this.data[g + 1] = l, this.data[g + 2] = h, this.data[g + 3] = d;
      }
      this.pos += n;
    }
  }, tr.prototype.bit16 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
      for (var s = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
        var h = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var l = (h & e) / e * 255 | 0, u = (h >> 5 & t) / t * 255 | 0, d = (h >> 11) / e * 255 | 0, g = s * this.width * 4 + 4 * a;
        this.data[g] = d, this.data[g + 1] = u, this.data[g + 2] = l, this.data[g + 3] = 255;
      }
      this.pos += n;
    }
  }, tr.prototype.bit24 = function() {
    for (var n = this.height - 1; n >= 0; n--) {
      for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
        var r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), h = e * this.width * 4 + 4 * t;
        this.data[h] = a, this.data[h + 1] = s, this.data[h + 2] = r, this.data[h + 3] = 255;
      }
      this.pos += this.width % 4;
    }
  }, tr.prototype.bit32 = function() {
    for (var n = this.height - 1; n >= 0; n--) for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
      var r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), h = this.datav.getUint8(this.pos++, true), l = e * this.width * 4 + 4 * t;
      this.data[l] = a, this.data[l + 1] = s, this.data[l + 2] = r, this.data[l + 3] = h;
    }
  }, tr.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processBMP = function(e, t, r, s) {
      var a = new tr(e, false), h = a.width, l = a.height, u = {
        data: a.getData(),
        width: h,
        height: l
      }, d = new Zo(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, s);
    };
  }(Be.API), bu.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processWEBP = function(e, t, r, s) {
      var a = new bu(e), h = a.width, l = a.height, u = {
        data: a.getData(),
        width: h,
        height: l
      }, d = new Zo(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, s);
    };
  }(Be.API), Be.API.processRGBA = function(n, e, t) {
    for (var r = n.data, s = r.length, a = new Uint8Array(s / 4 * 3), h = new Uint8Array(s / 4), l = 0, u = 0, d = 0; d < s; d += 4) {
      var g = r[d], w = r[d + 1], S = r[d + 2], p = r[d + 3];
      a[l++] = g, a[l++] = w, a[l++] = S, h[u++] = p;
    }
    var I = this.__addimage__.arrayBufferToBinaryString(a);
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(h),
      data: I,
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
  }, Ki = Be.API, js = Ki.getCharWidthsArray = function(n, e) {
    var t, r, s = (e = e || {}).font || this.internal.getFont(), a = e.fontSize || this.internal.getFontSize(), h = e.charSpace || this.internal.getCharSpace(), l = e.widths ? e.widths : s.metadata.Unicode.widths, u = l.fof ? l.fof : 1, d = e.kerning ? e.kerning : s.metadata.Unicode.kerning, g = d.fof ? d.fof : 1, w = e.doKerning !== false, S = 0, p = n.length, I = 0, M = l[0] || u, D = [];
    for (t = 0; t < p; t++) r = n.charCodeAt(t), typeof s.metadata.widthOfString == "function" ? D.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(r)) + h * (1e3 / a) || 0) / 1e3) : (S = w && Lt(d[r]) === "object" && !isNaN(parseInt(d[r][I], 10)) ? d[r][I] / g : 0, D.push((l[r] || M) / u + S)), I = r;
    return D;
  }, ou = Ki.getStringUnitWidth = function(n, e) {
    var t = (e = e || {}).fontSize || this.internal.getFontSize(), r = e.font || this.internal.getFont(), s = e.charSpace || this.internal.getCharSpace();
    return Ki.processArabic && (n = Ki.processArabic(n)), typeof r.metadata.widthOfString == "function" ? r.metadata.widthOfString(n, t, s) / t : js.apply(this, arguments).reduce(function(a, h) {
      return a + h;
    }, 0);
  }, lu = function(n, e, t, r) {
    for (var s = [], a = 0, h = n.length, l = 0; a !== h && l + e[a] < t; ) l += e[a], a++;
    s.push(n.slice(0, a));
    var u = a;
    for (l = 0; a !== h; ) l + e[a] > r && (s.push(n.slice(u, a)), l = 0, u = a), l += e[a], a++;
    return u !== a && s.push(n.slice(u, a)), s;
  }, cu = function(n, e, t) {
    t || (t = {});
    var r, s, a, h, l, u, d, g = [], w = [
      g
    ], S = t.textIndent || 0, p = 0, I = 0, M = n.split(" "), D = js.apply(this, [
      " ",
      t
    ])[0];
    if (u = t.lineIndent === -1 ? M[0].length + 2 : t.lineIndent || 0) {
      var _ = Array(u).join(" "), W = [];
      M.map(function(q) {
        (q = q.split(/\s*\n/)).length > 1 ? W = W.concat(q.map(function(le, xe) {
          return (xe && le.length ? `
` : "") + le;
        })) : W.push(q[0]);
      }), M = W, u = ou.apply(this, [
        _,
        t
      ]);
    }
    for (a = 0, h = M.length; a < h; a++) {
      var V = 0;
      if (r = M[a], u && r[0] == `
` && (r = r.substr(1), V = 1), S + p + (I = (s = js.apply(this, [
        r,
        t
      ])).reduce(function(q, le) {
        return q + le;
      }, 0)) > e || V) {
        if (I > e) {
          for (l = lu.apply(this, [
            r,
            s,
            e - (S + p),
            e
          ]), g.push(l.shift()), g = [
            l.pop()
          ]; l.length; ) w.push([
            l.shift()
          ]);
          I = s.slice(r.length - (g[0] ? g[0].length : 0)).reduce(function(q, le) {
            return q + le;
          }, 0);
        } else g = [
          r
        ];
        w.push(g), S = I + u, p = D;
      } else g.push(r), S += p + I, p = D;
    }
    return d = u ? function(q, le) {
      return (le ? _ : "") + q.join(" ");
    } : function(q) {
      return q.join(" ");
    }, w.map(d);
  }, Ki.splitTextToSize = function(n, e, t) {
    var r, s = (t = t || {}).fontSize || this.internal.getFontSize(), a = (function(g) {
      if (g.widths && g.kerning) return {
        widths: g.widths,
        kerning: g.kerning
      };
      var w = this.internal.getFont(g.fontName, g.fontStyle), S = "Unicode";
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
    var h = 1 * this.internal.scaleFactor * e / s;
    a.textIndent = t.textIndent ? 1 * t.textIndent * this.internal.scaleFactor / s : 0, a.lineIndent = t.lineIndent;
    var l, u, d = [];
    for (l = 0, u = r.length; l < u; l++) d = d.concat(cu.apply(this, [
      r[l],
      h,
      a
    ]));
    return d;
  }, function(n) {
    n.__fontmetrics__ = n.__fontmetrics__ || {};
    for (var e = "0123456789abcdef", t = "klmnopqrstuvwxyz", r = {}, s = {}, a = 0; a < 16; a++) r[t[a]] = e[a], s[e[a]] = t[a];
    var h = function(S) {
      return "0x" + parseInt(S, 10).toString(16);
    }, l = n.__fontmetrics__.compress = function(S) {
      var p, I, M, D, _ = [
        "{"
      ];
      for (var W in S) {
        if (p = S[W], isNaN(parseInt(W, 10)) ? I = "'" + W + "'" : (W = parseInt(W, 10), I = (I = h(W).slice(2)).slice(0, -1) + s[I.slice(-1)]), typeof p == "number") p < 0 ? (M = h(p).slice(3), D = "-") : (M = h(p).slice(2), D = ""), M = D + M.slice(0, -1) + s[M.slice(-1)];
        else {
          if (Lt(p) !== "object") throw new Error("Don't know what to do with value type " + Lt(p) + ".");
          M = l(p);
        }
        _.push(I + M);
      }
      return _.push("}"), _.join("");
    }, u = n.__fontmetrics__.uncompress = function(S) {
      if (typeof S != "string") throw new Error("Invalid argument passed to uncompress.");
      for (var p, I, M, D, _ = {}, W = 1, V = _, q = [], le = "", xe = "", ge = S.length - 1, ee = 1; ee < ge; ee += 1) (D = S[ee]) == "'" ? p ? (M = p.join(""), p = void 0) : p = [] : p ? p.push(D) : D == "{" ? (q.push([
        V,
        M
      ]), V = {}, M = void 0) : D == "}" ? ((I = q.pop())[0][I[1]] = V, M = void 0, V = I[0]) : D == "-" ? W = -1 : M === void 0 ? r.hasOwnProperty(D) ? (le += r[D], M = parseInt(le, 16) * W, W = 1, le = "") : le += D : r.hasOwnProperty(D) ? (xe += r[D], V[M] = parseInt(xe, 16) * W, W = 1, M = void 0, xe = "") : xe += D;
      return _;
    }, d = {
      codePages: [
        "WinAnsiEncoding"
      ],
      WinAnsiEncoding: u("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
    }, g = {
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
        var p = S.font, I = w.Unicode[p.postScriptName];
        I && (p.metadata.Unicode = {}, p.metadata.Unicode.widths = I.widths, p.metadata.Unicode.kerning = I.kerning);
        var M = g.Unicode[p.postScriptName];
        M && (p.metadata.Unicode.encoding = M, p.encoding = M.codePages[0]);
      }
    ]);
  }(Be.API), function(n) {
    var e = function(t) {
      for (var r = t.length, s = new Uint8Array(r), a = 0; a < r; a++) s[a] = t.charCodeAt(a);
      return s;
    };
    n.API.events.push([
      "addFont",
      function(t) {
        var r = void 0, s = t.font, a = t.instance;
        if (!s.isStandardFont) {
          if (a === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
          if (typeof (r = a.existsFileInVFS(s.postScriptName) === false ? a.loadFile(s.postScriptName) : a.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
          (function(h, l) {
            l = /^\x00\x01\x00\x00/.test(l) ? e(l) : e(Rs(l)), h.metadata = n.API.TTFFont.open(l), h.metadata.Unicode = h.metadata.Unicode || {
              encoding: {},
              kerning: {},
              widths: []
            }, h.metadata.glyIdsUsed = [
              0
            ];
          })(s, r);
        }
      }
    ]);
  }(Be), Be.API.addSvgAsImage = function(n, e, t, r, s, a, h, l) {
    if (isNaN(e) || isNaN(t)) throw Pt.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(r) || isNaN(s)) throw Pt.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var u = document.createElement("canvas");
    u.width = r, u.height = s;
    var d = u.getContext("2d");
    d.fillStyle = "#fff", d.fillRect(0, 0, u.width, u.height);
    var g = {
      ignoreMouse: true,
      ignoreAnimation: true,
      ignoreDimensions: true
    }, w = this;
    return (Je.canvg ? Promise.resolve(Je.canvg) : Es(() => import("./index.es-CQjWS-yX.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).catch(function(S) {
      return Promise.reject(new Error("Could not load canvg: " + S));
    }).then(function(S) {
      return S.default ? S.default : S;
    }).then(function(S) {
      return S.fromString(d, n, g);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(S) {
      return S.render(g);
    }).then(function() {
      w.addImage(u.toDataURL("image/jpeg", 1), e, t, r, s, h, l);
    });
  }, Be.API.putTotalPages = function(n) {
    var e, t = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), t = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), t = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for (var r = 1; r <= this.internal.getNumberOfPages(); r++) for (var s = 0; s < this.internal.pages[r].length; s++) this.internal.pages[r][s] = this.internal.pages[r][s].replace(e, t);
    return this;
  }, Be.API.viewerPreferences = function(n, e) {
    var t;
    n = n || {}, e = e || false;
    var r, s, a, h = {
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
    }, l = Object.keys(h), u = [], d = 0, g = 0, w = 0;
    function S(I, M) {
      var D, _ = false;
      for (D = 0; D < I.length; D += 1) I[D] === M && (_ = true);
      return _;
    }
    if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(h)), this.internal.viewerpreferences.isSubscribed = false), t = this.internal.viewerpreferences.configuration, n === "reset" || e === true) {
      var p = l.length;
      for (w = 0; w < p; w += 1) t[l[w]].value = t[l[w]].defaultValue, t[l[w]].explicitSet = false;
    }
    if (Lt(n) === "object") {
      for (s in n) if (a = n[s], S(l, s) && a !== void 0) {
        if (t[s].type === "boolean" && typeof a == "boolean") t[s].value = a;
        else if (t[s].type === "name" && S(t[s].valueSet, a)) t[s].value = a;
        else if (t[s].type === "integer" && Number.isInteger(a)) t[s].value = a;
        else if (t[s].type === "array") {
          for (d = 0; d < a.length; d += 1) if (r = true, a[d].length === 1 && typeof a[d][0] == "number") u.push(String(a[d] - 1));
          else if (a[d].length > 1) {
            for (g = 0; g < a[d].length; g += 1) typeof a[d][g] != "number" && (r = false);
            r === true && u.push([
              a[d][0] - 1,
              a[d][1] - 1
            ].join(" "));
          }
          t[s].value = "[" + u.join(" ") + "]";
        } else t[s].value = t[s].defaultValue;
        t[s].explicitSet = true;
      }
    }
    return this.internal.viewerpreferences.isSubscribed === false && (this.internal.events.subscribe("putCatalog", function() {
      var I, M = [];
      for (I in t) t[I].explicitSet === true && (t[I].type === "name" ? M.push("/" + I + " /" + t[I].value) : M.push("/" + I + " " + t[I].value));
      M.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + M.join(`
`) + `
>>`);
    }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = t, this;
  }, Be.API.addMetadata = function(n, e) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
      metadata: n,
      namespaceUri: e ?? "http://jspdf.default.namespaceuri/",
      rawXml: typeof e == "boolean" && e
    }, this.internal.events.subscribe("putCatalog", R0), this.internal.events.subscribe("postPutResources", M0)), this;
  }, function(n) {
    var e = n.API, t = e.pdfEscape16 = function(a, h) {
      for (var l, u = h.metadata.Unicode.widths, d = [
        "",
        "0",
        "00",
        "000",
        "0000"
      ], g = [
        ""
      ], w = 0, S = a.length; w < S; ++w) {
        if (l = h.metadata.characterToGlyph(a.charCodeAt(w)), h.metadata.glyIdsUsed.push(l), h.metadata.toUnicode[l] = a.charCodeAt(w), u.indexOf(l) == -1 && (u.push(l), u.push([
          parseInt(h.metadata.widthOfGlyph(l), 10)
        ])), l == "0") return g.join("");
        l = l.toString(16), g.push(d[4 - l.length], l);
      }
      return g.join("");
    }, r = function(a) {
      var h, l, u, d, g, w, S;
      for (g = `/CIDInit /ProcSet findresource begin
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
endcodespacerange`, u = [], w = 0, S = (l = Object.keys(a).sort(function(p, I) {
        return p - I;
      })).length; w < S; w++) h = l[w], u.length >= 100 && (g += `
` + u.length + ` beginbfchar
` + u.join(`
`) + `
endbfchar`, u = []), a[h] !== void 0 && a[h] !== null && typeof a[h].toString == "function" && (d = ("0000" + a[h].toString(16)).slice(-4), h = ("0000" + (+h).toString(16)).slice(-4), u.push("<" + h + "><" + d + ">"));
      return u.length && (g += `
` + u.length + ` beginbfchar
` + u.join(`
`) + `
endbfchar
`), g + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
    };
    e.events.push([
      "putFont",
      function(a) {
        (function(h) {
          var l = h.font, u = h.out, d = h.newObject, g = h.putStream;
          if (l.metadata instanceof n.API.TTFFont && l.encoding === "Identity-H") {
            for (var w = l.metadata.Unicode.widths, S = l.metadata.subset.encode(l.metadata.glyIdsUsed, 1), p = "", I = 0; I < S.length; I++) p += String.fromCharCode(S[I]);
            var M = d();
            g({
              data: p,
              addLength1: true,
              objectId: M
            }), u("endobj");
            var D = d();
            g({
              data: r(l.metadata.toUnicode),
              addLength1: true,
              objectId: D
            }), u("endobj");
            var _ = d();
            u("<<"), u("/Type /FontDescriptor"), u("/FontName /" + Ji(l.fontName)), u("/FontFile2 " + M + " 0 R"), u("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), u("/Flags " + l.metadata.flags), u("/StemV " + l.metadata.stemV), u("/ItalicAngle " + l.metadata.italicAngle), u("/Ascent " + l.metadata.ascender), u("/Descent " + l.metadata.decender), u("/CapHeight " + l.metadata.capHeight), u(">>"), u("endobj");
            var W = d();
            u("<<"), u("/Type /Font"), u("/BaseFont /" + Ji(l.fontName)), u("/FontDescriptor " + _ + " 0 R"), u("/W " + n.API.PDFObject.convert(w)), u("/CIDToGIDMap /Identity"), u("/DW 1000"), u("/Subtype /CIDFontType2"), u("/CIDSystemInfo"), u("<<"), u("/Supplement 0"), u("/Registry (Adobe)"), u("/Ordering (" + l.encoding + ")"), u(">>"), u(">>"), u("endobj"), l.objectNumber = d(), u("<<"), u("/Type /Font"), u("/Subtype /Type0"), u("/ToUnicode " + D + " 0 R"), u("/BaseFont /" + Ji(l.fontName)), u("/Encoding /" + l.encoding), u("/DescendantFonts [" + W + " 0 R]"), u(">>"), u("endobj"), l.isAlreadyPutted = true;
          }
        })(a);
      }
    ]), e.events.push([
      "putFont",
      function(a) {
        (function(h) {
          var l = h.font, u = h.out, d = h.newObject, g = h.putStream;
          if (l.metadata instanceof n.API.TTFFont && l.encoding === "WinAnsiEncoding") {
            for (var w = l.metadata.rawData, S = "", p = 0; p < w.length; p++) S += String.fromCharCode(w[p]);
            var I = d();
            g({
              data: S,
              addLength1: true,
              objectId: I
            }), u("endobj");
            var M = d();
            g({
              data: r(l.metadata.toUnicode),
              addLength1: true,
              objectId: M
            }), u("endobj");
            var D = d();
            u("<<"), u("/Descent " + l.metadata.decender), u("/CapHeight " + l.metadata.capHeight), u("/StemV " + l.metadata.stemV), u("/Type /FontDescriptor"), u("/FontFile2 " + I + " 0 R"), u("/Flags 96"), u("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), u("/FontName /" + Ji(l.fontName)), u("/ItalicAngle " + l.metadata.italicAngle), u("/Ascent " + l.metadata.ascender), u(">>"), u("endobj"), l.objectNumber = d();
            for (var _ = 0; _ < l.metadata.hmtx.widths.length; _++) l.metadata.hmtx.widths[_] = parseInt(l.metadata.hmtx.widths[_] * (1e3 / l.metadata.head.unitsPerEm));
            u("<</Subtype/TrueType/Type/Font/ToUnicode " + M + " 0 R/BaseFont/" + Ji(l.fontName) + "/FontDescriptor " + D + " 0 R/Encoding/" + l.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(l.metadata.hmtx.widths) + ">>"), u("endobj"), l.isAlreadyPutted = true;
          }
        })(a);
      }
    ]);
    var s = function(a) {
      var h, l = a.text || "", u = a.x, d = a.y, g = a.options || {}, w = a.mutex || {}, S = w.pdfEscape, p = w.activeFontKey, I = w.fonts, M = p, D = "", _ = 0, W = "", V = I[M].encoding;
      if (I[M].encoding !== "Identity-H") return {
        text: l,
        x: u,
        y: d,
        options: g,
        mutex: w
      };
      for (W = l, M = p, Array.isArray(l) && (W = l[0]), _ = 0; _ < W.length; _ += 1) I[M].metadata.hasOwnProperty("cmap") && (h = I[M].metadata.cmap.unicode.codeMap[W[_].charCodeAt(0)]), h || W[_].charCodeAt(0) < 256 && I[M].metadata.hasOwnProperty("Unicode") ? D += W[_] : D += "";
      var q = "";
      return parseInt(M.slice(1)) < 14 || V === "WinAnsiEncoding" ? q = S(D, M).split("").map(function(le) {
        return le.charCodeAt(0).toString(16);
      }).join("") : V === "Identity-H" && (q = t(D, I[M])), w.isHex = true, {
        text: q,
        x: u,
        y: d,
        options: g,
        mutex: w
      };
    };
    e.events.push([
      "postProcessText",
      function(a) {
        var h = a.text || "", l = [], u = {
          text: h,
          x: a.x,
          y: a.y,
          options: a.options,
          mutex: a.mutex
        };
        if (Array.isArray(h)) {
          var d = 0;
          for (d = 0; d < h.length; d += 1) Array.isArray(h[d]) && h[d].length === 3 ? l.push([
            s(Object.assign({}, u, {
              text: h[d][0]
            })).text,
            h[d][1],
            h[d][2]
          ]) : l.push(s(Object.assign({}, u, {
            text: h[d]
          })).text);
          a.text = l;
        } else a.text = s(Object.assign({}, u, {
          text: h
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
      var s, a, h, l, u, d, g, w = e, S = [
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
      ], I = {
        L: 0,
        R: 1,
        EN: 2,
        AN: 3,
        N: 4,
        B: 5,
        S: 6
      }, M = {
        0: 0,
        5: 1,
        6: 2,
        7: 3,
        32: 4,
        251: 5,
        254: 6,
        255: 7
      }, D = [
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
      ], _ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), W = false, V = 0;
      this.__bidiEngine__ = {};
      var q = function(L) {
        var O = L.charCodeAt(), R = O >> 8, B = M[R];
        return B !== void 0 ? w[256 * B + (255 & O)] : R === 252 || R === 253 ? "AL" : _.test(R) ? "L" : R === 8 ? "R" : "N";
      }, le = function(L) {
        for (var O, R = 0; R < L.length; R++) {
          if ((O = q(L.charAt(R))) === "L") return false;
          if (O === "R") return true;
        }
        return false;
      }, xe = function(L, O, R, B) {
        var te, se, oe, Y, X = O[B];
        switch (X) {
          case "L":
          case "R":
          case "LRE":
          case "RLE":
          case "LRO":
          case "RLO":
          case "PDF":
            W = false;
            break;
          case "N":
          case "AN":
            break;
          case "EN":
            W && (X = "AN");
            break;
          case "AL":
            W = true, X = "R";
            break;
          case "WS":
          case "BN":
            X = "N";
            break;
          case "CS":
            B < 1 || B + 1 >= O.length || (te = R[B - 1]) !== "EN" && te !== "AN" || (se = O[B + 1]) !== "EN" && se !== "AN" ? X = "N" : W && (se = "AN"), X = se === te ? se : "N";
            break;
          case "ES":
            X = (te = B > 0 ? R[B - 1] : "B") === "EN" && B + 1 < O.length && O[B + 1] === "EN" ? "EN" : "N";
            break;
          case "ET":
            if (B > 0 && R[B - 1] === "EN") {
              X = "EN";
              break;
            }
            if (W) {
              X = "N";
              break;
            }
            for (oe = B + 1, Y = O.length; oe < Y && O[oe] === "ET"; ) oe++;
            X = oe < Y && O[oe] === "EN" ? "EN" : "N";
            break;
          case "NSM":
            if (h && !l) {
              for (Y = O.length, oe = B + 1; oe < Y && O[oe] === "NSM"; ) oe++;
              if (oe < Y) {
                var _e = L[B], de = _e >= 1425 && _e <= 2303 || _e === 64286;
                if (te = O[oe], de && (te === "R" || te === "AL")) {
                  X = "R";
                  break;
                }
              }
            }
            X = B < 1 || (te = O[B - 1]) === "B" ? "N" : R[B - 1];
            break;
          case "B":
            W = false, s = true, X = V;
            break;
          case "S":
            a = true, X = "N";
        }
        return X;
      }, ge = function(L, O, R) {
        var B = L.split("");
        return R && ee(B, R, {
          hiLevel: V
        }), B.reverse(), O && O.reverse(), B.join("");
      }, ee = function(L, O, R) {
        var B, te, se, oe, Y, X = -1, _e = L.length, de = 0, x = [], T = V ? p : S, U = [];
        for (W = false, s = false, a = false, te = 0; te < _e; te++) U[te] = q(L[te]);
        for (se = 0; se < _e; se++) {
          if (Y = de, x[se] = xe(L, U, x, se), B = 240 & (de = T[Y][I[x[se]]]), de &= 15, O[se] = oe = T[de][5], B > 0) if (B === 16) {
            for (te = X; te < se; te++) O[te] = 1;
            X = -1;
          } else X = -1;
          if (T[de][6]) X === -1 && (X = se);
          else if (X > -1) {
            for (te = X; te < se; te++) O[te] = oe;
            X = -1;
          }
          U[se] === "B" && (O[se] = 0), R.hiLevel |= oe;
        }
        a && function($, K, Q) {
          for (var ce = 0; ce < Q; ce++) if ($[ce] === "S") {
            K[ce] = V;
            for (var ue = ce - 1; ue >= 0 && $[ue] === "WS"; ue--) K[ue] = V;
          }
        }(U, O, _e);
      }, H = function(L, O, R, B, te) {
        if (!(te.hiLevel < L)) {
          if (L === 1 && V === 1 && !s) return O.reverse(), void (R && R.reverse());
          for (var se, oe, Y, X, _e = O.length, de = 0; de < _e; ) {
            if (B[de] >= L) {
              for (Y = de + 1; Y < _e && B[Y] >= L; ) Y++;
              for (X = de, oe = Y - 1; X < oe; X++, oe--) se = O[X], O[X] = O[oe], O[oe] = se, R && (se = R[X], R[X] = R[oe], R[oe] = se);
              de = Y;
            }
            de++;
          }
        }
      }, ie = function(L, O, R) {
        var B = L.split(""), te = {
          hiLevel: V
        };
        return R || (R = []), ee(B, R, te), function(se, oe, Y) {
          if (Y.hiLevel !== 0 && g) for (var X, _e = 0; _e < se.length; _e++) oe[_e] === 1 && (X = D.indexOf(se[_e])) >= 0 && (se[_e] = D[X + 1]);
        }(B, R, te), H(2, B, O, R, te), H(1, B, O, R, te), B.join("");
      };
      return this.__bidiEngine__.doBidiReorder = function(L, O, R) {
        if (function(te, se) {
          if (se) for (var oe = 0; oe < te.length; oe++) se[oe] = oe;
          l === void 0 && (l = le(te)), d === void 0 && (d = le(te));
        }(L, O), h || !u || d) if (h && u && l ^ d) V = l ? 1 : 0, L = ge(L, O, R);
        else if (!h && u && d) V = l ? 1 : 0, L = ie(L, O, R), L = ge(L, O);
        else if (!h || l || u || d) {
          if (h && !u && l ^ d) L = ge(L, O), l ? (V = 0, L = ie(L, O, R)) : (V = 1, L = ie(L, O, R), L = ge(L, O));
          else if (h && l && !u && d) V = 1, L = ie(L, O, R), L = ge(L, O);
          else if (!h && !u && l ^ d) {
            var B = g;
            l ? (V = 1, L = ie(L, O, R), V = 0, g = false, L = ie(L, O, R), g = B) : (V = 0, L = ie(L, O, R), L = ge(L, O), V = 1, g = false, L = ie(L, O, R), g = B, L = ge(L, O));
          }
        } else V = 0, L = ie(L, O, R);
        else V = l ? 1 : 0, L = ie(L, O, R);
        return L;
      }, this.__bidiEngine__.setOptions = function(L) {
        L && (h = L.isInputVisual, u = L.isOutputVisual, l = L.isInputRtl, d = L.isOutputRtl, g = L.isSymmetricSwapping);
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
        var s = r.text;
        r.x, r.y;
        var a = r.options || {};
        r.mutex, a.lang;
        var h = [];
        if (a.isInputVisual = typeof a.isInputVisual != "boolean" || a.isInputVisual, t.setOptions(a), Object.prototype.toString.call(s) === "[object Array]") {
          var l = 0;
          for (h = [], l = 0; l < s.length; l += 1) Object.prototype.toString.call(s[l]) === "[object Array]" ? h.push([
            t.doBidiReorder(s[l][0]),
            s[l][1],
            s[l][2]
          ]) : h.push([
            t.doBidiReorder(s[l])
          ]);
          r.text = h;
        } else r.text = t.doBidiReorder(s);
        t.setOptions({
          isInputVisual: true
        });
      }
    ]);
  }(Be), Be.API.TTFFont = function() {
    function n(e) {
      var t;
      if (this.rawData = e, t = this.contents = new ri(e), this.contents.pos = 4, t.readString(4) === "ttcf") throw new Error("TTCF not supported.");
      t.pos = 0, this.parse(), this.subset = new J0(this), this.registerTTF();
    }
    return n.open = function(e) {
      return new n(e);
    }, n.prototype.parse = function() {
      return this.directory = new O0(this.contents), this.head = new T0(this), this.name = new H0(this), this.cmap = new uh(this), this.toUnicode = {}, this.hhea = new B0(this), this.maxp = new W0(this), this.hmtx = new G0(this), this.post = new U0(this), this.os2 = new q0(this), this.loca = new Y0(this), this.glyf = new V0(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
        this.head.xMin,
        this.head.yMin,
        this.head.xMax,
        this.head.yMax
      ];
    }, n.prototype.registerTTF = function() {
      var e, t, r, s, a;
      if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
        var h, l, u, d;
        for (d = [], h = 0, l = (u = this.bbox).length; h < l; h++) e = u[h], d.push(Math.round(e * this.scaleFactor));
        return d;
      }).call(this), this.stemV = 0, this.post.exists ? (r = 255 & (s = this.post.italic_angle), 32768 & (t = s >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + r)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (a = this.familyClass) === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
    }, n.prototype.characterToGlyph = function(e) {
      var t;
      return ((t = this.cmap.unicode) != null ? t.codeMap[e] : void 0) || 0;
    }, n.prototype.widthOfGlyph = function(e) {
      var t;
      return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t;
    }, n.prototype.widthOfString = function(e, t, r) {
      var s, a, h, l;
      for (h = 0, a = 0, l = (e = "" + e).length; 0 <= l ? a < l : a > l; a = 0 <= l ? ++a : --a) s = e.charCodeAt(a), h += this.widthOfGlyph(this.characterToGlyph(s)) + r * (1e3 / t) || 0;
      return h * (t / 1e3);
    }, n.prototype.lineHeight = function(e, t) {
      var r;
      return t == null && (t = false), r = t ? this.lineGap : 0, (this.ascender + r - this.decender) / 1e3 * e;
    }, n;
  }();
  var rr, ri = function() {
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
      var t, r, s;
      for (s = [], t = 0, r = e.length; 0 <= r ? t < r : t > r; t = 0 <= r ? ++t : --t) s.push(this.writeByte(e.charCodeAt(t)));
      return s;
    }, n.prototype.readShort = function() {
      return this.readInt16();
    }, n.prototype.writeShort = function(e) {
      return this.writeInt16(e);
    }, n.prototype.readLongLong = function() {
      var e, t, r, s, a, h, l, u;
      return e = this.readByte(), t = this.readByte(), r = this.readByte(), s = this.readByte(), a = this.readByte(), h = this.readByte(), l = this.readByte(), u = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ a) + 65536 * (255 ^ h) + 256 * (255 ^ l) + (255 ^ u) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * r + 4294967296 * s + 16777216 * a + 65536 * h + 256 * l + u;
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
      var t, r, s, a;
      for (a = [], r = 0, s = e.length; r < s; r++) t = e[r], a.push(this.writeByte(t));
      return a;
    }, n;
  }(), O0 = function() {
    var n;
    function e(t) {
      var r, s, a;
      for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, s = 0, a = this.tableCount; 0 <= a ? s < a : s > a; s = 0 <= a ? ++s : --s) r = {
        tag: t.readString(4),
        checksum: t.readInt(),
        offset: t.readInt(),
        length: t.readInt()
      }, this.tables[r.tag] = r;
    }
    return e.prototype.encode = function(t) {
      var r, s, a, h, l, u, d, g, w, S, p, I, M;
      for (M in p = Object.keys(t).length, u = Math.log(2), w = 16 * Math.floor(Math.log(p) / u), h = Math.floor(w / u), g = 16 * p - w, (s = new ri()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(w), s.writeShort(h), s.writeShort(g), a = 16 * p, d = s.pos + a, l = null, I = [], t) for (S = t[M], s.writeString(M), s.writeInt(n(S)), s.writeInt(d), s.writeInt(S.length), I = I.concat(S), M === "head" && (l = d), d += S.length; d % 4; ) I.push(0), d++;
      return s.write(I), r = 2981146554 - n(s.data), s.pos = l + 8, s.writeUInt32(r), s.data;
    }, n = function(t) {
      var r, s, a, h;
      for (t = fh.call(t); t.length % 4; ) t.push(0);
      for (a = new ri(t), s = 0, r = 0, h = t.length; r < h; r = r += 4) s += a.readUInt32();
      return 4294967295 & s;
    }, e;
  }(), D0 = {}.hasOwnProperty, gr = function(n, e) {
    for (var t in e) D0.call(e, t) && (n[t] = e[t]);
    function r() {
      this.constructor = n;
    }
    return r.prototype = e.prototype, n.prototype = new r(), n.__super__ = e.prototype, n;
  };
  rr = function() {
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
  var T0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "head", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort();
    }, n.prototype.encode = function(e) {
      var t;
      return (t = new ri()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data;
    }, n;
  }(), vu = function() {
    function n(e, t) {
      var r, s, a, h, l, u, d, g, w, S, p, I, M, D, _, W, V;
      switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), w = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
        case 0:
          for (u = 0; u < 256; ++u) this.codeMap[u] = e.readByte();
          break;
        case 4:
          for (p = e.readUInt16(), S = p / 2, e.pos += 6, a = function() {
            var q, le;
            for (le = [], u = q = 0; 0 <= S ? q < S : q > S; u = 0 <= S ? ++q : --q) le.push(e.readUInt16());
            return le;
          }(), e.pos += 2, M = function() {
            var q, le;
            for (le = [], u = q = 0; 0 <= S ? q < S : q > S; u = 0 <= S ? ++q : --q) le.push(e.readUInt16());
            return le;
          }(), d = function() {
            var q, le;
            for (le = [], u = q = 0; 0 <= S ? q < S : q > S; u = 0 <= S ? ++q : --q) le.push(e.readUInt16());
            return le;
          }(), g = function() {
            var q, le;
            for (le = [], u = q = 0; 0 <= S ? q < S : q > S; u = 0 <= S ? ++q : --q) le.push(e.readUInt16());
            return le;
          }(), s = (this.length - e.pos + this.offset) / 2, l = function() {
            var q, le;
            for (le = [], u = q = 0; 0 <= s ? q < s : q > s; u = 0 <= s ? ++q : --q) le.push(e.readUInt16());
            return le;
          }(), u = _ = 0, V = a.length; _ < V; u = ++_) for (D = a[u], r = W = I = M[u]; I <= D ? W <= D : W >= D; r = I <= D ? ++W : --W) g[u] === 0 ? h = r + d[u] : (h = l[g[u] / 2 + (r - I) - (S - u)] || 0) !== 0 && (h += d[u]), this.codeMap[r] = 65535 & h;
      }
      e.pos = w;
    }
    return n.encode = function(e, t) {
      var r, s, a, h, l, u, d, g, w, S, p, I, M, D, _, W, V, q, le, xe, ge, ee, H, ie, L, O, R, B, te, se, oe, Y, X, _e, de, x, T, U, $, K, Q, ce, ue, ve, Le, Pe;
      switch (B = new ri(), h = Object.keys(e).sort(function(Ce, We) {
        return Ce - We;
      }), t) {
        case "macroman":
          for (M = 0, D = function() {
            var Ce = [];
            for (I = 0; I < 256; ++I) Ce.push(0);
            return Ce;
          }(), W = {
            0: 0
          }, a = {}, te = 0, X = h.length; te < X; te++) W[ue = e[s = h[te]]] == null && (W[ue] = ++M), a[s] = {
            old: e[s],
            new: W[e[s]]
          }, D[s] = W[e[s]];
          return B.writeUInt16(1), B.writeUInt16(0), B.writeUInt32(12), B.writeUInt16(0), B.writeUInt16(262), B.writeUInt16(0), B.write(D), {
            charMap: a,
            subtable: B.data,
            maxGlyphID: M + 1
          };
        case "unicode":
          for (O = [], w = [], V = 0, W = {}, r = {}, _ = d = null, se = 0, _e = h.length; se < _e; se++) W[le = e[s = h[se]]] == null && (W[le] = ++V), r[s] = {
            old: le,
            new: W[le]
          }, l = W[le] - s, _ != null && l === d || (_ && w.push(_), O.push(s), d = l), _ = s;
          for (_ && w.push(_), w.push(65535), O.push(65535), ie = 2 * (H = O.length), ee = 2 * Math.pow(Math.log(H) / Math.LN2, 2), S = Math.log(ee / 2) / Math.LN2, ge = 2 * H - ee, u = [], xe = [], p = [], I = oe = 0, de = O.length; oe < de; I = ++oe) {
            if (L = O[I], g = w[I], L === 65535) {
              u.push(0), xe.push(0);
              break;
            }
            if (L - (R = r[L].new) >= 32768) for (u.push(0), xe.push(2 * (p.length + H - I)), s = Y = L; L <= g ? Y <= g : Y >= g; s = L <= g ? ++Y : --Y) p.push(r[s].new);
            else u.push(R - L), xe.push(0);
          }
          for (B.writeUInt16(3), B.writeUInt16(1), B.writeUInt32(12), B.writeUInt16(4), B.writeUInt16(16 + 8 * H + 2 * p.length), B.writeUInt16(0), B.writeUInt16(ie), B.writeUInt16(ee), B.writeUInt16(S), B.writeUInt16(ge), Q = 0, x = w.length; Q < x; Q++) s = w[Q], B.writeUInt16(s);
          for (B.writeUInt16(0), ce = 0, T = O.length; ce < T; ce++) s = O[ce], B.writeUInt16(s);
          for (ve = 0, U = u.length; ve < U; ve++) l = u[ve], B.writeUInt16(l);
          for (Le = 0, $ = xe.length; Le < $; Le++) q = xe[Le], B.writeUInt16(q);
          for (Pe = 0, K = p.length; Pe < K; Pe++) M = p[Pe], B.writeUInt16(M);
          return {
            charMap: r,
            subtable: B.data,
            maxGlyphID: V + 1
          };
      }
    }, n;
  }(), uh = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "cmap", n.prototype.parse = function(e) {
      var t, r, s;
      for (e.pos = this.offset, this.version = e.readUInt16(), s = e.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= s ? r < s : r > s; r = 0 <= s ? ++r : --r) t = new vu(e, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
      return true;
    }, n.encode = function(e, t) {
      var r, s;
      return t == null && (t = "macroman"), r = vu.encode(e, t), (s = new ri()).writeUInt16(0), s.writeUInt16(1), r.table = s.data.concat(r.subtable), r;
    }, n;
  }(), B0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "hhea", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16();
    }, n;
  }(), q0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "OS/2", n.prototype.parse = function(e) {
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
  }(), U0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "post", n.prototype.parse = function(e) {
      var t, r, s;
      switch (e.pos = this.offset, this.format = e.readInt(), this.italicAngle = e.readInt(), this.underlinePosition = e.readShort(), this.underlineThickness = e.readShort(), this.isFixedPitch = e.readInt(), this.minMemType42 = e.readInt(), this.maxMemType42 = e.readInt(), this.minMemType1 = e.readInt(), this.maxMemType1 = e.readInt(), this.format) {
        case 65536:
        case 196608:
          break;
        case 131072:
          var a;
          for (r = e.readUInt16(), this.glyphNameIndex = [], a = 0; 0 <= r ? a < r : a > r; a = 0 <= r ? ++a : --a) this.glyphNameIndex.push(e.readUInt16());
          for (this.names = [], s = []; e.pos < this.offset + this.length; ) t = e.readByte(), s.push(this.names.push(e.readString(t)));
          return s;
        case 151552:
          return r = e.readUInt16(), this.offsets = e.read(r);
        case 262144:
          return this.map = (function() {
            var h, l, u;
            for (u = [], a = h = 0, l = this.file.maxp.numGlyphs; 0 <= l ? h < l : h > l; a = 0 <= l ? ++h : --h) u.push(e.readUInt32());
            return u;
          }).call(this);
      }
    }, n;
  }(), z0 = function(n, e) {
    this.raw = n, this.length = n.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
  }, H0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "name", n.prototype.parse = function(e) {
      var t, r, s, a, h, l, u, d, g, w, S;
      for (e.pos = this.offset, e.readShort(), t = e.readShort(), l = e.readShort(), r = [], a = 0; 0 <= t ? a < t : a > t; a = 0 <= t ? ++a : --a) r.push({
        platformID: e.readShort(),
        encodingID: e.readShort(),
        languageID: e.readShort(),
        nameID: e.readShort(),
        length: e.readShort(),
        offset: this.offset + l + e.readShort()
      });
      for (u = {}, a = g = 0, w = r.length; g < w; a = ++g) s = r[a], e.pos = s.offset, d = e.readString(s.length), h = new z0(d, s), u[S = s.nameID] == null && (u[S] = []), u[s.nameID].push(h);
      this.strings = u, this.copyright = u[0], this.fontFamily = u[1], this.fontSubfamily = u[2], this.uniqueSubfamily = u[3], this.fontName = u[4], this.version = u[5];
      try {
        this.postscriptName = u[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      } catch {
        this.postscriptName = u[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      }
      return this.trademark = u[7], this.manufacturer = u[8], this.designer = u[9], this.description = u[10], this.vendorUrl = u[11], this.designerUrl = u[12], this.license = u[13], this.licenseUrl = u[14], this.preferredFamily = u[15], this.preferredSubfamily = u[17], this.compatibleFull = u[18], this.sampleText = u[19];
    }, n;
  }(), W0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "maxp", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16();
    }, n;
  }(), G0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "hmtx", n.prototype.parse = function(e) {
      var t, r, s, a, h, l, u;
      for (e.pos = this.offset, this.metrics = [], t = 0, l = this.file.hhea.numberOfMetrics; 0 <= l ? t < l : t > l; t = 0 <= l ? ++t : --t) this.metrics.push({
        advance: e.readUInt16(),
        lsb: e.readInt16()
      });
      for (s = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
        var d, g;
        for (g = [], t = d = 0; 0 <= s ? d < s : d > s; t = 0 <= s ? ++d : --d) g.push(e.readInt16());
        return g;
      }(), this.widths = (function() {
        var d, g, w, S;
        for (S = [], d = 0, g = (w = this.metrics).length; d < g; d++) a = w[d], S.push(a.advance);
        return S;
      }).call(this), r = this.widths[this.widths.length - 1], u = [], t = h = 0; 0 <= s ? h < s : h > s; t = 0 <= s ? ++h : --h) u.push(this.widths.push(r));
      return u;
    }, n.prototype.forGlyph = function(e) {
      return e in this.metrics ? this.metrics[e] : {
        advance: this.metrics[this.metrics.length - 1].advance,
        lsb: this.leftSideBearings[e - this.metrics.length]
      };
    }, n;
  }(), fh = [].slice, V0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "glyf", n.prototype.parse = function() {
      return this.cache = {};
    }, n.prototype.glyphFor = function(e) {
      var t, r, s, a, h, l, u, d, g, w;
      return e in this.cache ? this.cache[e] : (a = this.file.loca, t = this.file.contents, r = a.indexOf(e), (s = a.lengthOf(e)) === 0 ? this.cache[e] = null : (t.pos = this.offset + r, h = (l = new ri(t.read(s))).readShort(), d = l.readShort(), w = l.readShort(), u = l.readShort(), g = l.readShort(), this.cache[e] = h === -1 ? new K0(l, d, w, u, g) : new $0(l, h, d, w, u, g), this.cache[e]));
    }, n.prototype.encode = function(e, t, r) {
      var s, a, h, l, u;
      for (h = [], a = [], l = 0, u = t.length; l < u; l++) s = e[t[l]], a.push(h.length), s && (h = h.concat(s.encode(r)));
      return a.push(h.length), {
        table: h,
        offsets: a
      };
    }, n;
  }(), $0 = function() {
    function n(e, t, r, s, a, h) {
      this.raw = e, this.numberOfContours = t, this.xMin = r, this.yMin = s, this.xMax = a, this.yMax = h, this.compound = false;
    }
    return n.prototype.encode = function() {
      return this.raw.data;
    }, n;
  }(), K0 = function() {
    function n(e, t, r, s, a) {
      var h, l;
      for (this.raw = e, this.xMin = t, this.yMin = r, this.xMax = s, this.yMax = a, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], h = this.raw; l = h.readShort(), this.glyphOffsets.push(h.pos), this.glyphIDs.push(h.readUInt16()), 32 & l; ) h.pos += 1 & l ? 4 : 2, 128 & l ? h.pos += 8 : 64 & l ? h.pos += 4 : 8 & l && (h.pos += 2);
    }
    return n.prototype.encode = function() {
      var e, t, r;
      for (t = new ri(fh.call(this.raw.data)), e = 0, r = this.glyphIDs.length; e < r; ++e) t.pos = this.glyphOffsets[e];
      return t.data;
    }, n;
  }(), Y0 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return gr(n, rr), n.prototype.tag = "loca", n.prototype.parse = function(e) {
      var t, r;
      return e.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = t === 0 ? (function() {
        var s, a;
        for (a = [], r = 0, s = this.length; r < s; r += 2) a.push(2 * e.readUInt16());
        return a;
      }).call(this) : (function() {
        var s, a;
        for (a = [], r = 0, s = this.length; r < s; r += 4) a.push(e.readUInt32());
        return a;
      }).call(this);
    }, n.prototype.indexOf = function(e) {
      return this.offsets[e];
    }, n.prototype.lengthOf = function(e) {
      return this.offsets[e + 1] - this.offsets[e];
    }, n.prototype.encode = function(e, t) {
      for (var r = new Uint32Array(this.offsets.length), s = 0, a = 0, h = 0; h < r.length; ++h) if (r[h] = s, a < t.length && t[a] == h) {
        ++a, r[h] = s;
        var l = this.offsets[h], u = this.offsets[h + 1] - l;
        u > 0 && (s += u);
      }
      for (var d = new Array(4 * r.length), g = 0; g < r.length; ++g) d[4 * g + 3] = 255 & r[g], d[4 * g + 2] = (65280 & r[g]) >> 8, d[4 * g + 1] = (16711680 & r[g]) >> 16, d[4 * g] = (4278190080 & r[g]) >> 24;
      return d;
    }, n;
  }(), J0 = function() {
    function n(e) {
      this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
    }
    return n.prototype.generateCmap = function() {
      var e, t, r, s, a;
      for (t in s = this.font.cmap.tables[0].codeMap, e = {}, a = this.subset) r = a[t], e[t] = s[r];
      return e;
    }, n.prototype.glyphsFor = function(e) {
      var t, r, s, a, h, l, u;
      for (s = {}, h = 0, l = e.length; h < l; h++) s[a = e[h]] = this.font.glyf.glyphFor(a);
      for (a in t = [], s) (r = s[a]) != null && r.compound && t.push.apply(t, r.glyphIDs);
      if (t.length > 0) for (a in u = this.glyphsFor(t)) r = u[a], s[a] = r;
      return s;
    }, n.prototype.encode = function(e, t) {
      var r, s, a, h, l, u, d, g, w, S, p, I, M, D, _;
      for (s in r = uh.encode(this.generateCmap(), "unicode"), h = this.glyphsFor(e), p = {
        0: 0
      }, _ = r.charMap) p[(u = _[s]).old] = u.new;
      for (I in S = r.maxGlyphID, h) I in p || (p[I] = S++);
      return g = function(W) {
        var V, q;
        for (V in q = {}, W) q[W[V]] = V;
        return q;
      }(p), w = Object.keys(g).sort(function(W, V) {
        return W - V;
      }), M = function() {
        var W, V, q;
        for (q = [], W = 0, V = w.length; W < V; W++) l = w[W], q.push(g[l]);
        return q;
      }(), a = this.font.glyf.encode(h, M, p), d = this.font.loca.encode(a.offsets, M), D = {
        cmap: this.font.cmap.raw(),
        glyf: a.table,
        loca: d,
        hmtx: this.font.hmtx.raw(),
        hhea: this.font.hhea.raw(),
        maxp: this.font.maxp.raw(),
        post: this.font.post.raw(),
        name: this.font.name.raw(),
        head: this.font.head.encode(t)
      }, this.font.os2.exists && (D["OS/2"] = this.font.os2.raw()), this.font.directory.encode(D);
    }, n;
  }();
  Be.API.PDFObject = function() {
    var n;
    function e() {
    }
    return n = function(t, r) {
      return (Array(r + 1).join("0") + t).slice(-r);
    }, e.convert = function(t) {
      var r, s, a, h;
      if (Array.isArray(t)) return "[" + function() {
        var l, u, d;
        for (d = [], l = 0, u = t.length; l < u; l++) r = t[l], d.push(e.convert(r));
        return d;
      }().join(" ") + "]";
      if (typeof t == "string") return "/" + t;
      if (t == null ? void 0 : t.isString) return "(" + t + ")";
      if (t instanceof Date) return "(D:" + n(t.getUTCFullYear(), 4) + n(t.getUTCMonth(), 2) + n(t.getUTCDate(), 2) + n(t.getUTCHours(), 2) + n(t.getUTCMinutes(), 2) + n(t.getUTCSeconds(), 2) + "Z)";
      if ({}.toString.call(t) === "[object Object]") {
        for (s in a = [
          "<<"
        ], t) h = t[s], a.push("/" + s + " " + e.convert(h));
        return a.push(">>"), a.join(`
`);
      }
      return "" + t;
    }, e;
  }();
  function X0({ lookupId: n, fileKey: e, wrappedKey: t, initialContent: r }) {
    const { toast: s } = Au(), [a, h] = be.useState(r), [l, u] = be.useState(false), [d, g] = be.useState(null), { data: w, refetch: S, isRefetching: p } = ld(n, !!n), I = cd();
    be.useEffect(() => {
      (w == null ? void 0 : w.encryptedClipboardText) && e && !l && (async () => {
        try {
          const W = await Lu(w.encryptedClipboardText, e);
          W !== a && (h(W), w.updatedAt && g(new Date(w.updatedAt)));
        } catch (W) {
          console.error("Sync decryption failed", W);
        }
      })();
    }, [
      w,
      e,
      l,
      a
    ]);
    const M = async (_) => {
      if (e) try {
        const W = await hd(_, e);
        await I.mutateAsync({
          lookupId: n,
          encryptedClipboardText: W,
          wrappedKey: t
        }), g(/* @__PURE__ */ new Date());
      } catch {
        s({
          variant: "destructive",
          title: "Failed to save"
        });
      }
    }, D = (_) => {
      if (a) {
        switch (_) {
          case "txt":
            const W = new Blob([
              a
            ], {
              type: "text/plain"
            }), V = URL.createObjectURL(W), q = document.createElement("a");
            q.href = V, q.download = `clipboard-${n}.txt`, q.click(), URL.revokeObjectURL(V);
            break;
          case "pdf":
            const le = new Be(), xe = le.splitTextToSize(a, 180);
            le.text(xe, 10, 10), le.save(`clipboard-${n}.pdf`);
            break;
          case "doc":
            const ge = `<html><body><pre>${a}</pre></body></html>`, ee = new Blob([
              ge
            ], {
              type: "application/msword"
            }), H = URL.createObjectURL(ee), ie = document.createElement("a");
            ie.href = H, ie.download = `clipboard-${n}.doc`, ie.click(), URL.revokeObjectURL(H);
            break;
        }
        s({
          title: `Exported as ${_.toUpperCase()}`
        });
      }
    };
    return C.jsxs(Or.div, {
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
        C.jsxs("div", {
          className: "flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/80",
          children: [
            C.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                C.jsx("div", {
                  className: "w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-900/20",
                  children: C.jsx(Su, {
                    className: "w-4 h-4 text-white"
                  })
                }),
                C.jsxs("div", {
                  children: [
                    C.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        C.jsx("p", {
                          className: "text-sm font-bold text-cyan-100",
                          children: "Live Clipboard"
                        }),
                        (I.isPending || p) && C.jsx(oc, {
                          className: "w-3 h-3 text-cyan-400 animate-spin"
                        })
                      ]
                    }),
                    C.jsx("p", {
                      className: "text-[10px] text-cyan-400/60 font-mono",
                      children: d ? `Synced ${d.toLocaleTimeString()}` : "Ready to sync"
                    })
                  ]
                })
              ]
            }),
            C.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                C.jsx(Dr, {
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 w-8 p-0 text-zinc-400 hover:text-cyan-400",
                  onClick: () => S(),
                  title: "Force Sync",
                  children: C.jsx(oc, {
                    className: `w-4 h-4 ${p ? "animate-spin" : ""}`
                  })
                }),
                C.jsxs(u2, {
                  children: [
                    C.jsx(f2, {
                      asChild: true,
                      children: C.jsx(Dr, {
                        variant: "ghost",
                        size: "sm",
                        className: "h-8 w-8 p-0 text-zinc-400 hover:text-white",
                        children: C.jsx(Id, {
                          className: "w-4 h-4"
                        })
                      })
                    }),
                    C.jsxs(kf, {
                      align: "end",
                      className: "bg-zinc-900 border-zinc-800",
                      children: [
                        C.jsxs(Fs, {
                          onClick: () => D("txt"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(nl, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to TXT"
                          ]
                        }),
                        C.jsxs(Fs, {
                          onClick: () => D("pdf"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(Od, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to PDF"
                          ]
                        }),
                        C.jsxs(Fs, {
                          onClick: () => D("doc"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(nl, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to DOC"
                          ]
                        })
                      ]
                    })
                  ]
                }),
                C.jsx(Dr, {
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 text-zinc-400 hover:text-cyan-400",
                  onClick: async () => {
                    await navigator.clipboard.writeText(a || ""), s({
                      title: "Copied!"
                    });
                  },
                  children: C.jsx(ud, {
                    className: "w-4 h-4"
                  })
                })
              ]
            })
          ]
        }),
        C.jsxs("div", {
          className: "relative",
          children: [
            C.jsx(fd, {
              value: a || "",
              onChange: (_) => {
                h(_.target.value), u(true);
              },
              onBlur: () => {
                u(false), a && M(a);
              },
              className: "min-h-[120px] bg-transparent border-0 resize-none focus-visible:ring-0 text-zinc-300 font-mono text-sm leading-relaxed p-4 custom-scrollbar",
              placeholder: "Type shared content here..."
            }),
            l && C.jsx("div", {
              className: "absolute bottom-2 right-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2",
              children: C.jsx("span", {
                className: "text-[10px] text-zinc-500 font-mono bg-black/50 px-2 py-1 rounded-full border border-zinc-800",
                children: "Editing..."
              })
            })
          ]
        })
      ]
    });
  }
  const Qo = 768;
  function Z0() {
    const [n, e] = be.useState(void 0);
    return be.useEffect(() => {
      const t = window.matchMedia(`(max-width: ${Qo - 1}px)`), r = () => {
        e(window.innerWidth < Qo);
      };
      return t.addEventListener("change", r), e(window.innerWidth < Qo), () => t.removeEventListener("change", r);
    }, []), !!n;
  }
  const Q0 = () => C.jsx("svg", {
    style: {
      position: "absolute",
      width: 0,
      height: 0
    },
    children: C.jsx("defs", {
      children: C.jsxs("filter", {
        id: "heat-wave",
        children: [
          C.jsx("feTurbulence", {
            type: "fractalNoise",
            baseFrequency: "0.01",
            numOctaves: "3",
            result: "noise",
            children: C.jsx("animate", {
              attributeName: "baseFrequency",
              dur: "2s",
              values: "0.01;0.05;0.2",
              repeatCount: "1"
            })
          }),
          C.jsx("feDisplacementMap", {
            in: "SourceGraphic",
            in2: "noise",
            scale: "20"
          })
        ]
      })
    })
  });
  function ep({ expiresAt: n, isMobile: e }) {
    const [t, r] = be.useState(null);
    return be.useEffect(() => {
      const s = () => {
        const h = (/* @__PURE__ */ new Date()).getTime(), u = new Date(n).getTime() - h;
        if (u <= 0) {
          r(null);
          return;
        }
        r({
          h: Math.floor(u / 36e5),
          m: Math.floor(u % 36e5 / 6e4),
          s: Math.floor(u % 6e4 / 1e3)
        });
      };
      s();
      const a = setInterval(s, 1e3);
      return () => clearInterval(a);
    }, [
      n
    ]), t ? C.jsxs("div", {
      className: `flex items-center gap-1 font-mono font-bold ${e ? "text-xs" : "text-sm"}`,
      children: [
        C.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400",
          children: t.h.toString().padStart(2, "0")
        }),
        C.jsx("span", {
          className: "text-zinc-500",
          children: ":"
        }),
        C.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400",
          children: t.m.toString().padStart(2, "0")
        }),
        C.jsx("span", {
          className: "text-zinc-500",
          children: ":"
        }),
        C.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg min-w-[2ch] text-center text-cyan-400",
          children: t.s.toString().padStart(2, "0")
        })
      ]
    }) : C.jsx("span", {
      className: "text-red-400 font-mono text-xs",
      children: "Expired"
    });
  }
  function tp() {
    const n = Z0(), [e, t] = be.useState(""), [r, s] = be.useState("input"), [a, h] = be.useState(""), [l, u] = be.useState([]), [d, g] = be.useState(null), [w, S] = be.useState(null), [p, I] = be.useState(false), [M, D] = be.useState(null), [_, W] = be.useState(/* @__PURE__ */ new Map()), V = r === "ready" && e.length === 6 ? e.slice(0, 3) : "";
    dd();
    const { toast: q } = Au(), { play: le } = pd(), xe = md(), ge = gd();
    bd();
    const ee = vd(), H = async () => {
      const R = e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (R.length !== 6) {
        q({
          variant: "destructive",
          title: "Invalid Code",
          description: "Please enter a 6-character code."
        });
        return;
      }
      s("fetching"), h("Looking up vault...");
      try {
        const B = R.slice(0, 3), te = R.slice(3, 6), se = await xe.mutateAsync(B);
        g(se);
        const oe = /* @__PURE__ */ new Map();
        for (const x of se.files) oe.set(x.fileId, {
          fileId: x.fileId,
          maxDownloads: x.maxDownloads,
          downloadCount: x.downloadCount,
          remainingDownloads: x.remainingDownloads,
          isExhausted: x.remainingDownloads <= 0
        });
        W(oe), s("decrypting"), h("Unwrapping encryption key with PIN...");
        const Y = await Ld(se.wrappedKey, te);
        S(Y), h("Decrypting file metadata...");
        const X = await Sd(se.encryptedMetadata, Y);
        if (u(X), se.encryptedClipboardText) {
          h("Decrypting clipboard content...");
          try {
            const x = await Lu(se.encryptedClipboardText, Y);
            D(x);
          } catch (x) {
            console.error("Failed to decrypt clipboard:", x);
          }
        }
        s("ready");
        const _e = X.length > 0, de = se.encryptedClipboardText;
        h(_e ? "Files ready for download!" : de ? "Clipboard content ready!" : "Vault unlocked!"), le("unlock"), q({
          title: "Vault Unlocked!",
          description: _e ? `${X.length} file(s) ready for download.` : de ? "Secure clipboard content available." : "Vault accessed successfully."
        });
      } catch (B) {
        le("error"), s("input"), console.error("Access error:", B);
        let te = "Invalid or expired code. Please check and try again.";
        B instanceof Error && (B.message.includes("unwrap") ? te = "Invalid PIN. The second half of your code is incorrect." : B.message.includes("expired") && (te = "This vault has expired or reached its download limit.")), q({
          variant: "destructive",
          title: "Access Denied",
          description: te
        });
      }
    }, ie = async (R) => {
      if (!(!d || !w)) try {
        h(`Downloading ${R.name}...`);
        const B = d.files.find((X) => X.fileId === R.fileId);
        if (!B) throw new Error("File metadata not found in vault");
        const te = [];
        for (let X = 0; X < B.chunkCount; X++) {
          h(`Decrypting ${R.name} [${X + 1}/${B.chunkCount}]...`);
          const { downloadUrl: _e } = await ge.mutateAsync({
            vaultId: d.id,
            fileId: R.fileId,
            chunkIndex: X
          });
          let de = null;
          for (let K = 0; K < 3; K++) try {
            if (de = await fetch(_e), de.ok) break;
            throw de.status >= 400 && de.status < 500 ? new Error(`Server returned ${de.status}`) : new Error(`Server error ${de.status}`);
          } catch {
            K < 2 && await new Promise((ce) => setTimeout(ce, 500 * Math.pow(2, K)));
          }
          if (!de || !de.ok) throw new Error("Failed to download chunk");
          const x = await de.arrayBuffer();
          if (x.byteLength < 12) throw new Error("Chunk too small");
          const T = new Uint8Array(x, 0, 12), U = new Uint8Array(x, 12), $ = await kd(U, T, w);
          if (R.isCompressed) {
            const K = await Es(() => import("./index.web-Bqyr3zbv.js"), []);
            await K.default;
            const Q = new Uint8Array($), ce = K.decompress(Q);
            te.push(ce.buffer);
          } else te.push($);
        }
        h(`Assembling ${R.name}...`);
        const se = new Blob(te, {
          type: R.type || "application/octet-stream"
        }), oe = URL.createObjectURL(se), Y = document.createElement("a");
        return Y.href = oe, Y.download = R.name, document.body.appendChild(Y), Y.click(), document.body.removeChild(Y), URL.revokeObjectURL(oe), true;
      } catch (B) {
        throw console.error("Memory download failed:", B), B;
      }
    }, L = async (R, B = false) => {
      if (!(!d || !w)) try {
        let te = false;
        const se = n ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
        if ("serviceWorker" in navigator && navigator.serviceWorker.controller && R.size > se) {
          console.log("Attempting Streamed Download for " + R.name), h(`Preparing stream for ${R.name}...`);
          try {
            const oe = d.files.find((X) => X.fileId === R.fileId);
            if (!oe) throw new Error("File not found");
            const Y = [];
            for (let X = 0; X < oe.chunkCount; X++) {
              const { downloadUrl: _e } = await ge.mutateAsync({
                vaultId: d.id,
                fileId: R.fileId,
                chunkIndex: X
              });
              Y.push({
                downloadUrl: _e,
                index: X
              });
            }
            await jd(R.fileId, w, Y, R), te = true, r === "ready" && q({
              title: "Download Started",
              description: `Streaming ${R.name}...`
            });
          } catch (oe) {
            console.warn("Stream download failed, falling back to memory:", oe), te = false;
          }
        }
        if (te || (console.log("Using Memory Download for " + R.name), await ie(R)), r === "ready" && !te && q({
          title: "File Downloaded",
          description: `${R.name} saved.`
        }), !B && r === "ready") try {
          const oe = await ee.mutateAsync({
            vaultId: d.id,
            fileId: R.fileId
          });
          if (oe.files && oe.files.length > 0) {
            W((X) => {
              const _e = new Map(X);
              for (const de of oe.files) _e.set(de.fileId, {
                fileId: de.fileId,
                maxDownloads: de.maxDownloads,
                downloadCount: de.downloadCount,
                remainingDownloads: de.remainingDownloads,
                isExhausted: de.isExhausted
              });
              return _e;
            });
            const Y = oe.files.find((X) => X.fileId === R.fileId);
            Y && Y.remainingDownloads > 0 && q({
              title: "Download Tracked",
              description: `${Y.remainingDownloads} download(s) remaining for ${R.name}.`
            });
          }
          oe.vaultExhausted && (q({
            title: "Vault Depleted",
            description: "All files have reached their download limit. Initiating self-destruct...",
            variant: "destructive"
          }), setTimeout(() => I(true), 1500));
        } catch (oe) {
          console.error("File download tracking failed", oe);
        }
      } catch (te) {
        if (console.error("Download failed", te), q({
          variant: "destructive",
          title: "Download Failed",
          description: te instanceof Error ? te.message : "Failed to download file"
        }), r === "downloading") throw te;
      }
    }, O = async () => {
      if (!(!d || !w || l.length === 0)) {
        s("downloading");
        try {
          const R = l.filter((oe) => {
            var _a;
            return !((_a = _.get(oe.fileId)) == null ? void 0 : _a.isExhausted);
          });
          if (R.length === 0) {
            q({
              variant: "destructive",
              title: "No Downloads Available",
              description: "All files have reached their download limit."
            }), s("ready");
            return;
          }
          let B = 0;
          for (const oe of R) h(`Downloading ${oe.name} (${B + 1}/${R.length})...`), await L(oe, true), B++;
          const te = R.map((oe) => oe.fileId), se = await ee.mutateAsync({
            vaultId: d.id,
            fileId: te[0],
            fileIds: te
          });
          se.files && se.files.length > 0 && W((oe) => {
            const Y = new Map(oe);
            for (const X of se.files) Y.set(X.fileId, {
              fileId: X.fileId,
              maxDownloads: X.maxDownloads,
              downloadCount: X.downloadCount,
              remainingDownloads: X.remainingDownloads,
              isExhausted: X.isExhausted
            });
            return Y;
          }), s("ready"), h("All files downloaded!"), q({
            title: "Download Complete!",
            description: `${B} file(s) downloaded successfully.`
          }), se.vaultExhausted && (q({
            title: "Vault Depleted",
            description: "All files have reached their download limit. Initiating self-destruct...",
            variant: "destructive"
          }), setTimeout(() => I(true), 1500));
        } catch (R) {
          s("ready"), console.error("Download error:", R), q({
            variant: "destructive",
            title: "Download Failed",
            description: R instanceof Error ? R.message : "An error occurred during download."
          });
        }
      }
    };
    return C.jsxs("div", {
      className: `min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 overflow-hidden transition-colors duration-1000 ${p ? "bg-black" : ""}`,
      children: [
        !n && C.jsx(Q0, {}),
        C.jsxs("div", {
          className: "fixed inset-0 pointer-events-none overflow-hidden",
          children: [
            !n && C.jsxs(C.Fragment, {
              children: [
                C.jsx("div", {
                  className: "absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px]"
                }),
                C.jsx("div", {
                  className: "absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]"
                }),
                C.jsx("div", {
                  className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]"
                })
              ]
            }),
            n && C.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-zinc-950/20"
            }),
            C.jsx("div", {
              className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
            })
          ]
        }),
        C.jsxs("div", {
          className: "relative z-10 min-h-screen flex flex-col",
          children: [
            C.jsx("header", {
              className: "border-b border-zinc-800/50 backdrop-blur-xl bg-black/50",
              children: C.jsx("div", {
                className: "container max-w-6xl mx-auto px-4 py-4",
                children: C.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    C.jsx("div", {
                      className: "flex items-center gap-3",
                      children: C.jsx(Gi, {
                        href: "/",
                        children: C.jsxs(Or.div, {
                          className: "flex items-center gap-2 sm:gap-3 cursor-pointer group",
                          whileHover: n ? {} : {
                            scale: 1.02
                          },
                          whileTap: {
                            scale: 0.98
                          },
                          children: [
                            C.jsx("div", {
                              className: "w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors",
                              children: C.jsx(lc, {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-cyan-400"
                              })
                            }),
                            C.jsxs("div", {
                              children: [
                                C.jsxs("h1", {
                                  className: "font-bold text-base sm:text-lg tracking-tight",
                                  children: [
                                    "VAULT",
                                    C.jsx("span", {
                                      className: "text-cyan-400",
                                      children: "BRIDGE"
                                    })
                                  ]
                                }),
                                !n && C.jsx("p", {
                                  className: "text-[10px] text-zinc-500 font-mono tracking-[0.2em]",
                                  children: "ACCESS VAULT"
                                })
                              ]
                            })
                          ]
                        })
                      })
                    }),
                    C.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        C.jsx(Gi, {
                          href: "/clipboard",
                          children: C.jsxs(Dr, {
                            variant: "outline",
                            size: "sm",
                            className: "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2 h-9 sm:h-10 px-3",
                            children: [
                              C.jsx(Su, {
                                className: "w-4 h-4"
                              }),
                              C.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Create Clipboard"
                              }),
                              C.jsx("span", {
                                className: "inline sm:hidden",
                                children: "Clipboard"
                              })
                            ]
                          })
                        }),
                        C.jsx(Gi, {
                          href: "/",
                          children: C.jsxs(Dr, {
                            variant: "ghost",
                            size: "sm",
                            className: "gap-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors h-9 sm:h-10",
                            children: [
                              C.jsx(wd, {
                                className: "w-4 h-4"
                              }),
                              C.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Return"
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            }),
            C.jsx("main", {
              className: "flex-1 container max-w-6xl mx-auto px-4 py-6 md:py-12 flex flex-col justify-center",
              children: C.jsx(yd, {
                mode: "wait",
                children: p ? C.jsxs(Or.div, {
                  initial: {
                    opacity: 0,
                    scale: 0.9
                  },
                  animate: {
                    opacity: 1,
                    scale: 1
                  },
                  className: "w-full max-w-md mx-auto text-center",
                  children: [
                    C.jsx("div", {
                      className: "w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20",
                      children: C.jsx(cc, {
                        className: "w-10 h-10 text-red-500"
                      })
                    }),
                    C.jsx("h2", {
                      className: "text-3xl font-black text-white mb-2 uppercase tracking-widest",
                      children: "Vault Incinerated"
                    }),
                    C.jsx("p", {
                      className: "text-zinc-500 mb-8",
                      children: "All contents have been permanently purged from existence."
                    }),
                    C.jsx(Gi, {
                      href: "/",
                      children: C.jsx(Dr, {
                        variant: "outline",
                        className: "border-zinc-800 text-zinc-400 hover:text-white",
                        children: "Return Home"
                      })
                    })
                  ]
                }, "burned") : C.jsxs(Or.div, {
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
                  className: "w-full",
                  children: [
                    r === "input" && C.jsxs("div", {
                      className: "max-w-xl mx-auto w-full",
                      children: [
                        C.jsxs("div", {
                          className: "text-center mb-6 md:mb-8",
                          children: [
                            C.jsxs("div", {
                              className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-mono mb-4 md:mb-6",
                              children: [
                                C.jsx(xd, {
                                  className: "w-3 h-3"
                                }),
                                C.jsx("span", {
                                  children: "ZERO-KNOWLEDGE DECRYPTION"
                                })
                              ]
                            }),
                            C.jsxs("h1", {
                              className: "text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 sm:mb-4",
                              children: [
                                "Access Secure",
                                " ",
                                C.jsx("span", {
                                  className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
                                  children: "Vault"
                                })
                              ]
                            }),
                            C.jsx("p", {
                              className: "text-sm sm:text-base text-zinc-400 px-4",
                              children: "Enter your 6-digit access code to unlock the vault"
                            })
                          ]
                        }),
                        C.jsxs("div", {
                          className: "relative",
                          children: [
                            !n && C.jsx("div", {
                              className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50"
                            }),
                            C.jsx("div", {
                              className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-8",
                              children: C.jsxs("div", {
                                className: "space-y-6",
                                children: [
                                  C.jsxs("div", {
                                    className: "space-y-4",
                                    children: [
                                      C.jsx("label", {
                                        className: "text-xs text-center block text-zinc-400 uppercase tracking-widest font-mono",
                                        children: "Enter 6-Digit Code"
                                      }),
                                      C.jsxs("div", {
                                        className: "flex justify-center gap-2 relative",
                                        children: [
                                          C.jsx(Pd, {
                                            type: "search",
                                            inputMode: "numeric",
                                            pattern: "[0-9]*",
                                            value: e,
                                            onChange: (R) => {
                                              const B = R.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
                                              t(B);
                                            },
                                            onKeyDown: (R) => {
                                              R.key === "Enter" && e.length === 6 && H();
                                            },
                                            className: "absolute inset-0 opacity-0 cursor-pointer z-10 h-20 w-full",
                                            autoFocus: !n,
                                            autoComplete: "off",
                                            spellCheck: "false",
                                            name: "vault_access_code_search",
                                            id: "vault_access_code_search"
                                          }),
                                          C.jsxs("div", {
                                            className: "flex items-center gap-1 sm:gap-2",
                                            children: [
                                              C.jsx("div", {
                                                className: "flex gap-1 sm:gap-2",
                                                children: Array.from({
                                                  length: 3
                                                }).map((R, B) => {
                                                  const te = B, se = e[te] || "", oe = e.length === te, Y = !!se;
                                                  return C.jsx(Or.div, {
                                                    initial: false,
                                                    animate: {
                                                      scale: oe && !n ? 1.05 : 1,
                                                      borderColor: oe ? "rgb(6, 182, 212)" : Y ? "rgba(6, 182, 212, 0.3)" : "rgba(63, 63, 70, 1)",
                                                      backgroundColor: Y ? "rgba(6, 182, 212, 0.1)" : "rgba(24, 24, 27, 1)"
                                                    },
                                                    className: `
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${oe ? "shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/20" : ""}
                                                                                `,
                                                    children: se ? C.jsx("span", {
                                                      className: "text-cyan-400",
                                                      children: se
                                                    }) : oe && C.jsx("div", {
                                                      className: "w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"
                                                    })
                                                  }, te);
                                                })
                                              }),
                                              C.jsx("div", {
                                                className: "w-3 sm:w-6 flex items-center justify-center",
                                                children: C.jsx("div", {
                                                  className: "w-full h-0.5 bg-zinc-700"
                                                })
                                              }),
                                              C.jsx("div", {
                                                className: "flex gap-1 sm:gap-2",
                                                children: Array.from({
                                                  length: 3
                                                }).map((R, B) => {
                                                  const te = B + 3, se = e[te] || "", oe = e.length === te, Y = !!se;
                                                  return C.jsx(Or.div, {
                                                    initial: false,
                                                    animate: {
                                                      scale: oe && !n ? 1.05 : 1,
                                                      borderColor: oe ? "rgb(16, 185, 129)" : Y ? "rgba(16, 185, 129, 0.3)" : "rgba(63, 63, 70, 1)",
                                                      backgroundColor: Y ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
                                                    },
                                                    className: `
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${oe ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/20" : ""}
                                                                                `,
                                                    children: se ? C.jsx("span", {
                                                      className: "text-emerald-400",
                                                      children: se
                                                    }) : oe && C.jsx("div", {
                                                      className: "w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"
                                                    })
                                                  }, te);
                                                })
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      C.jsx("p", {
                                        className: "text-[10px] sm:text-xs text-zinc-500 text-center",
                                        children: "First 3 digits = Vault ID \u2022 Last 3 digits = PIN"
                                      })
                                    ]
                                  }),
                                  C.jsxs(Dr, {
                                    onClick: H,
                                    disabled: e.length !== 6,
                                    className: `w-full h-12 sm:h-14 font-bold uppercase tracking-wider text-sm sm:text-base rounded-xl transition-all duration-300 ${e.length === 6 ? "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40" : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`,
                                    children: [
                                      C.jsx(Cd, {
                                        className: `w-4 h-4 sm:w-5 sm:h-5 mr-3 ${e.length === 6 ? "opacity-100" : "opacity-50"}`
                                      }),
                                      e.length === 6 ? "Unlock Vault" : "Enter Code"
                                    ]
                                  }),
                                  C.jsx("div", {
                                    className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-zinc-800",
                                    children: [
                                      {
                                        icon: lc,
                                        label: "AES-256"
                                      },
                                      {
                                        icon: Nd,
                                        label: "Zero-Knowledge"
                                      },
                                      {
                                        icon: cc,
                                        label: "Auto-Destruct"
                                      }
                                    ].map((R, B) => C.jsxs("div", {
                                      className: "flex items-center gap-1.5 sm:gap-2 text-zinc-500",
                                      children: [
                                        C.jsx(R.icon, {
                                          className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                        }),
                                        C.jsx("span", {
                                          className: "text-[10px] sm:text-xs",
                                          children: R.label
                                        })
                                      ]
                                    }, B))
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        C.jsx(Or.div, {
                          initial: {
                            opacity: 0
                          },
                          animate: {
                            opacity: 1
                          },
                          transition: {
                            delay: 0.3
                          },
                          className: "mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mx-4 sm:mx-0",
                          children: C.jsxs("div", {
                            className: "flex gap-3",
                            children: [
                              C.jsx(Ed, {
                                className: "w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                              }),
                              C.jsxs("div", {
                                children: [
                                  C.jsx("p", {
                                    className: "text-sm text-amber-200 font-medium",
                                    children: "Important"
                                  }),
                                  C.jsx("p", {
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
                    (r === "fetching" || r === "decrypting") && C.jsx("div", {
                      className: "max-w-md mx-auto w-full px-4",
                      children: C.jsxs("div", {
                        className: "relative",
                        children: [
                          !n && C.jsx("div", {
                            className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50"
                          }),
                          C.jsxs("div", {
                            className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 text-center",
                            children: [
                              C.jsxs("div", {
                                className: "w-20 h-20 mx-auto mb-6 relative",
                                children: [
                                  C.jsx("div", {
                                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 animate-pulse"
                                  }),
                                  C.jsx("div", {
                                    className: "absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center",
                                    children: C.jsx(_d, {
                                      className: "w-8 h-8 text-cyan-400 animate-spin"
                                    })
                                  })
                                ]
                              }),
                              C.jsx("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: r === "fetching" ? "Locating Vault" : "Decrypting Content"
                              }),
                              C.jsx("p", {
                                className: "text-zinc-400 text-sm",
                                children: a
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    r === "ready" && C.jsxs("div", {
                      className: "grid lg:grid-cols-3 gap-6 lg:gap-8",
                      children: [
                        C.jsxs("div", {
                          className: "lg:col-span-1 space-y-4 sm:space-y-6",
                          children: [
                            C.jsxs("div", {
                              className: "relative",
                              children: [
                                !n && C.jsx("div", {
                                  className: "absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20"
                                }),
                                C.jsxs("div", {
                                  className: "relative bg-zinc-950 border border-zinc-800 rounded-2xl p-6",
                                  children: [
                                    C.jsx(Or.div, {
                                      initial: {
                                        scale: 0
                                      },
                                      animate: {
                                        scale: 1
                                      },
                                      className: "w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center",
                                      children: C.jsx(Fd, {
                                        className: "w-8 h-8 text-emerald-400"
                                      })
                                    }),
                                    C.jsx("h2", {
                                      className: "text-xl sm:text-2xl font-bold text-center text-white mb-1",
                                      children: "Vault Unlocked"
                                    }),
                                    C.jsx("p", {
                                      className: "text-xs sm:text-sm text-zinc-400 text-center",
                                      children: "Secure session established"
                                    })
                                  ]
                                })
                              ]
                            }),
                            C.jsxs("div", {
                              className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3",
                              children: [
                                C.jsxs("div", {
                                  className: "flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50",
                                  children: [
                                    C.jsxs("div", {
                                      className: "flex items-center gap-3 text-zinc-400",
                                      children: [
                                        C.jsx("div", {
                                          className: "p-2 rounded-lg bg-zinc-800 shrink-0",
                                          children: C.jsx(Ad, {
                                            className: "w-4 h-4"
                                          })
                                        }),
                                        C.jsx("span", {
                                          className: "text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline",
                                          children: "Expires"
                                        })
                                      ]
                                    }),
                                    C.jsx(ep, {
                                      expiresAt: d.expiresAt,
                                      isMobile: n
                                    })
                                  ]
                                }),
                                C.jsxs("div", {
                                  className: "flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50",
                                  children: [
                                    C.jsxs("div", {
                                      className: "flex items-center gap-3 text-zinc-400",
                                      children: [
                                        C.jsx("div", {
                                          className: "p-2 rounded-lg bg-zinc-800 shrink-0",
                                          children: C.jsx(jo, {
                                            className: "w-4 h-4"
                                          })
                                        }),
                                        C.jsx("span", {
                                          className: "text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline",
                                          children: "Downloads"
                                        })
                                      ]
                                    }),
                                    C.jsx("span", {
                                      className: "font-mono text-xs sm:text-sm font-bold text-white",
                                      children: (() => {
                                        const R = Array.from(_.values()).reduce((oe, Y) => oe + Y.remainingDownloads, 0), B = Array.from(_.values()).reduce((oe, Y) => oe + Y.maxDownloads, 0), te = _.size > 0 ? R : d.maxDownloads - d.downloadCount, se = _.size > 0 ? B : d.maxDownloads;
                                        return C.jsxs(C.Fragment, {
                                          children: [
                                            te,
                                            " ",
                                            C.jsx("span", {
                                              className: "text-zinc-600",
                                              children: "/"
                                            }),
                                            " ",
                                            se
                                          ]
                                        });
                                      })()
                                    })
                                  ]
                                }),
                                l.length > 0 && C.jsxs("div", {
                                  className: "flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50",
                                  children: [
                                    C.jsxs("div", {
                                      className: "flex items-center gap-3 text-zinc-400",
                                      children: [
                                        C.jsx("div", {
                                          className: "p-2 rounded-lg bg-zinc-800 shrink-0",
                                          children: C.jsx(Md, {
                                            className: "w-4 h-4"
                                          })
                                        }),
                                        C.jsx("span", {
                                          className: "text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline",
                                          children: "Size"
                                        })
                                      ]
                                    }),
                                    C.jsxs("span", {
                                      className: "font-mono text-xs sm:text-sm font-bold text-white",
                                      children: [
                                        (l.reduce((R, B) => R + B.size, 0) / (1024 * 1024)).toFixed(2),
                                        " MB"
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        C.jsx("div", {
                          className: "lg:col-span-2",
                          children: C.jsxs("div", {
                            className: "relative",
                            children: [
                              !n && C.jsx("div", {
                                className: "absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50"
                              }),
                              C.jsxs("div", {
                                className: "relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-8",
                                children: [
                                  C.jsxs("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                      C.jsx("span", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30",
                                        children: l.length + (M ? 1 : 0)
                                      }),
                                      C.jsx("h3", {
                                        className: "text-sm font-bold text-zinc-300 uppercase tracking-widest",
                                        children: l.length > 0 ? "Available Content" : "Secure Clipboard"
                                      })
                                    ]
                                  }),
                                  (M !== null || !!d.encryptedClipboardText) && C.jsx("div", {
                                    className: "mb-6",
                                    children: C.jsx(X0, {
                                      lookupId: V,
                                      fileKey: w,
                                      wrappedKey: d.wrappedKey,
                                      initialContent: M
                                    })
                                  }),
                                  l.length > 0 && C.jsxs(C.Fragment, {
                                    children: [
                                      C.jsx("div", {
                                        className: "space-y-3 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar",
                                        children: l.map((R, B) => {
                                          var _a;
                                          const te = _.get(R.fileId), se = (te == null ? void 0 : te.remainingDownloads) ?? (d == null ? void 0 : d.maxDownloads) ?? 1, oe = (te == null ? void 0 : te.maxDownloads) ?? (d == null ? void 0 : d.maxDownloads) ?? 1, Y = (te == null ? void 0 : te.isExhausted) ?? false;
                                          return C.jsxs(Or.div, {
                                            initial: {
                                              opacity: 0,
                                              y: 10
                                            },
                                            animate: {
                                              opacity: 1,
                                              y: 0
                                            },
                                            transition: {
                                              delay: B * 0.05
                                            },
                                            className: `group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/50 border rounded-xl hover:bg-zinc-900/80 transition-all duration-300 gap-4 sm:gap-0 ${Y ? "border-red-500/30 opacity-60" : "border-zinc-800 hover:border-zinc-700"}`,
                                            children: [
                                              C.jsxs("div", {
                                                className: "flex items-center gap-4 min-w-0",
                                                children: [
                                                  C.jsx("div", {
                                                    className: `w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border transition-colors ${Y ? "border-red-500/30" : "border-zinc-700 group-hover:border-cyan-500/50"}`,
                                                    children: C.jsx(nl, {
                                                      className: `w-5 h-5 sm:w-6 sm:h-6 transition-colors ${Y ? "text-red-400" : "text-zinc-400 group-hover:text-cyan-400"}`
                                                    })
                                                  }),
                                                  C.jsxs("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                      C.jsx("p", {
                                                        className: "text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs",
                                                        children: R.name
                                                      }),
                                                      C.jsxs("div", {
                                                        className: "flex items-center gap-3 mt-1",
                                                        children: [
                                                          C.jsxs("span", {
                                                            className: "text-xs text-zinc-500 font-mono",
                                                            children: [
                                                              (R.size / 1024 / 1024).toFixed(2),
                                                              " MB"
                                                            ]
                                                          }),
                                                          C.jsx("span", {
                                                            className: "w-1 h-1 rounded-full bg-zinc-700"
                                                          }),
                                                          C.jsx("span", {
                                                            className: "text-[10px] text-zinc-500 uppercase font-bold",
                                                            children: ((_a = R.type) == null ? void 0 : _a.split("/")[1]) || "FILE"
                                                          }),
                                                          C.jsx("span", {
                                                            className: "w-1 h-1 rounded-full bg-zinc-700"
                                                          }),
                                                          C.jsxs("span", {
                                                            className: `text-[10px] font-bold uppercase ${Y ? "text-red-400" : se <= 1 ? "text-amber-400" : "text-cyan-400"}`,
                                                            children: [
                                                              se,
                                                              "/",
                                                              oe,
                                                              " DL"
                                                            ]
                                                          })
                                                        ]
                                                      })
                                                    ]
                                                  })
                                                ]
                                              }),
                                              C.jsxs(Dr, {
                                                size: "sm",
                                                variant: "outline",
                                                disabled: Y,
                                                className: `w-full sm:w-auto shrink-0 transition-colors h-10 sm:h-9 ${Y ? "bg-transparent border-red-500/30 text-red-400 cursor-not-allowed" : "bg-transparent border-zinc-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400"}`,
                                                onClick: (X) => {
                                                  X.stopPropagation(), X.preventDefault(), Y || L(R);
                                                },
                                                children: [
                                                  C.jsx(jo, {
                                                    className: "w-4 h-4 mr-2"
                                                  }),
                                                  Y ? "Limit Reached" : "Download"
                                                ]
                                              })
                                            ]
                                          }, R.fileId);
                                        })
                                      }),
                                      C.jsx(Dr, {
                                        size: "lg",
                                        className: `w-full font-bold h-12 transition-all ${Array.from(_.values()).every((R) => R.isExhausted) && _.size > 0 ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-red-500/20" : "bg-cyan-600 hover:bg-cyan-500 text-white"}`,
                                        onClick: O,
                                        disabled: Array.from(_.values()).every((R) => R.isExhausted) && _.size > 0,
                                        children: Array.from(_.values()).every((R) => R.isExhausted) && _.size > 0 ? "All Limits Reached" : C.jsxs(C.Fragment, {
                                          children: [
                                            C.jsx(jo, {
                                              className: "w-4 h-4 mr-2"
                                            }),
                                            "Download All Files"
                                          ]
                                        })
                                      }),
                                      C.jsxs("p", {
                                        className: "text-[10px] md:text-xs text-center text-muted-foreground mt-4 opacity-70",
                                        children: [
                                          "By continuing, you agree to our ",
                                          C.jsx(Gi, {
                                            href: "/terms",
                                            className: "underline hover:text-primary transition-colors",
                                            children: "Terms of Service"
                                          }),
                                          " & ",
                                          C.jsx(Gi, {
                                            href: "/privacy",
                                            className: "underline hover:text-primary transition-colors",
                                            children: "Privacy Policy"
                                          }),
                                          "."
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
                    })
                  ]
                }, r)
              })
            })
          ]
        })
      ]
    });
  }
  pp = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tp
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Lt as _,
  __tla,
  pp as a
};
