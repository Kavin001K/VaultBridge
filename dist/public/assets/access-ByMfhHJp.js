const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es-DSrcuiOj.js","assets/index-Bp-iVgYV.js","assets/index-mQkNEeE1.css","assets/input-BqWSKQPL.js","assets/circle-CUAf5keK.js","assets/browser-gjyt7kQ7.js","assets/use-mobile-C9RPC97M.js","assets/share-2-CO2XqBJB.js","assets/file-text-CFFKTbHS.js","assets/downloadStream-ph3HMbeo.js","assets/key-round-CuLnDLFO.js","assets/triangle-alert-DNIgbHuX.js","assets/shield-check-DyT0YqmR.js","assets/download-DTsuWBc0.js","assets/hard-drive-D1tOq5On.js"])))=>i.map(i=>d[i]);
import { c as Zh, J as dl, K as Nu, r as ge, M as tl, j as C, P as ii, N as wt, O as na, Q as _u, R as Au, T as pl, U as ml, V as Qh, W as ed, Y as Lu, _ as Gs, $ as td, a0 as nd, a1 as rd, a2 as id, a3 as ad, a4 as sd, a5 as od, a6 as ld, a7 as cd, a8 as ai, s as ud, q as fd, a9 as Es, k as Su, aa as hd, ab as dd, m as Dr, ac as lc, B as Vn, ad as pd, ae as md, af as ku, ag as gd, a as bd, u as vd, ah as wd, ai as yd, aj as xd, ak as Nd, L as Vi, b as cc, p as _d, A as Ad, S as Ld, d as Sd, Z as uc, i as kd, t as Pd, al as Cd, am as Id, an as jd, __tla as __tla_0 } from "./index-Bp-iVgYV.js";
import { I as fc } from "./input-BqWSKQPL.js";
import { C as Ed } from "./circle-CUAf5keK.js";
import { a as nl } from "./browser-gjyt7kQ7.js";
import { C as Pu, u as Fd } from "./use-mobile-C9RPC97M.js";
import { S as Md } from "./share-2-CO2XqBJB.js";
import { F as rl } from "./file-text-CFFKTbHS.js";
import { i as Rd } from "./downloadStream-ph3HMbeo.js";
import { K as Od } from "./key-round-CuLnDLFO.js";
import { T as Dd } from "./triangle-alert-DNIgbHuX.js";
import { S as hc } from "./shield-check-DyT0YqmR.js";
import { D as jo } from "./download-DTsuWBc0.js";
import { H as Td } from "./hard-drive-D1tOq5On.js";
let Lt, yp;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Bd = Zh("FileType", [
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
  var Eo = "rovingFocusGroup.onEntryFocus", qd = {
    bubbles: false,
    cancelable: true
  }, Ta = "RovingFocusGroup", [il, Cu, Ud] = Nu(Ta), [zd, Iu] = dl(Ta, [
    Ud
  ]), [Hd, Wd] = zd(Ta), ju = ge.forwardRef((n, e) => C.jsx(il.Provider, {
    scope: n.__scopeRovingFocusGroup,
    children: C.jsx(il.Slot, {
      scope: n.__scopeRovingFocusGroup,
      children: C.jsx(Vd, {
        ...n,
        ref: e
      })
    })
  }));
  ju.displayName = Ta;
  var Vd = ge.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, orientation: r, loop: s = false, dir: a, currentTabStopId: h, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: u, onEntryFocus: d, preventScrollOnEntryFocus: g = false, ...w } = n, S = ge.useRef(null), p = na(e, S), j = _u(a), [R, D] = Au({
      prop: h,
      defaultProp: l ?? null,
      onChange: u,
      caller: Ta
    }), [L, Y] = ge.useState(false), $ = pl(d), U = Cu(t), le = ge.useRef(false), [ve, fe] = ge.useState(0);
    return ge.useEffect(() => {
      const ee = S.current;
      if (ee) return ee.addEventListener(Eo, $), () => ee.removeEventListener(Eo, $);
    }, [
      $
    ]), C.jsx(Hd, {
      scope: t,
      orientation: r,
      dir: j,
      loop: s,
      currentTabStopId: R,
      onItemFocus: ge.useCallback((ee) => D(ee), [
        D
      ]),
      onItemShiftTab: ge.useCallback(() => Y(true), []),
      onFocusableItemAdd: ge.useCallback(() => fe((ee) => ee + 1), []),
      onFocusableItemRemove: ge.useCallback(() => fe((ee) => ee - 1), []),
      children: C.jsx(ii.div, {
        tabIndex: L || ve === 0 ? -1 : 0,
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
          if (ee.target === ee.currentTarget && H && !L) {
            const ne = new CustomEvent(Eo, qd);
            if (ee.currentTarget.dispatchEvent(ne), !ne.defaultPrevented) {
              const _ = U().filter((ue) => ue.focusable), O = _.find((ue) => ue.active), G = _.find((ue) => ue.id === R), ce = [
                O,
                G,
                ..._
              ].filter(Boolean).map((ue) => ue.ref.current);
              Mu(ce, g);
            }
          }
          le.current = false;
        }),
        onBlur: wt(n.onBlur, () => Y(false))
      })
    });
  }), Eu = "RovingFocusGroupItem", Fu = ge.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, focusable: r = true, active: s = false, tabStopId: a, children: h, ...l } = n, u = tl(), d = a || u, g = Wd(Eu, t), w = g.currentTabStopId === d, S = Cu(t), { onFocusableItemAdd: p, onFocusableItemRemove: j, currentTabStopId: R } = g;
    return ge.useEffect(() => {
      if (r) return p(), () => j();
    }, [
      r,
      p,
      j
    ]), C.jsx(il.ItemSlot, {
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
          const L = Kd(D, g.orientation, g.dir);
          if (L !== void 0) {
            if (D.metaKey || D.ctrlKey || D.altKey || D.shiftKey) return;
            D.preventDefault();
            let $ = S().filter((U) => U.focusable).map((U) => U.ref.current);
            if (L === "last") $.reverse();
            else if (L === "prev" || L === "next") {
              L === "prev" && $.reverse();
              const U = $.indexOf(D.currentTarget);
              $ = g.loop ? Yd($, U + 1) : $.slice(U + 1);
            }
            setTimeout(() => Mu($));
          }
        }),
        children: typeof h == "function" ? h({
          isCurrentTabStop: w,
          hasTabStop: R != null
        }) : h
      })
    });
  });
  Fu.displayName = Eu;
  var Gd = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function $d(n, e) {
    return e !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
  }
  function Kd(n, e, t) {
    const r = $d(n.key, t);
    if (!(e === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(r)) && !(e === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(r))) return Gd[r];
  }
  function Mu(n, e = false) {
    const t = document.activeElement;
    for (const r of n) if (r === t || (r.focus({
      preventScroll: e
    }), document.activeElement !== t)) return;
  }
  function Yd(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  var Jd = ju, Xd = Fu;
  function Zd(n) {
    const e = Qd(n), t = ge.forwardRef((r, s) => {
      const { children: a, ...h } = r, l = ge.Children.toArray(a), u = l.find(t1);
      if (u) {
        const d = u.props.children, g = l.map((w) => w === u ? ge.Children.count(d) > 1 ? ge.Children.only(null) : ge.isValidElement(d) ? d.props.children : null : w);
        return C.jsx(e, {
          ...h,
          ref: s,
          children: ge.isValidElement(d) ? ge.cloneElement(d, void 0, g) : null
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
  function Qd(n) {
    const e = ge.forwardRef((t, r) => {
      const { children: s, ...a } = t;
      if (ge.isValidElement(s)) {
        const h = r1(s), l = n1(a, s.props);
        return s.type !== ge.Fragment && (l.ref = r ? ml(r, h) : h), ge.cloneElement(s, l);
      }
      return ge.Children.count(s) > 1 ? ge.Children.only(null) : null;
    });
    return e.displayName = `${n}.SlotClone`, e;
  }
  var e1 = Symbol("radix.slottable");
  function t1(n) {
    return ge.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === e1;
  }
  function n1(n, e) {
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
  function r1(n) {
    let e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning;
    return t ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref);
  }
  var al = [
    "Enter",
    " "
  ], i1 = [
    "ArrowDown",
    "PageUp",
    "Home"
  ], Ru = [
    "ArrowUp",
    "PageDown",
    "End"
  ], a1 = [
    ...i1,
    ...Ru
  ], s1 = {
    ltr: [
      ...al,
      "ArrowRight"
    ],
    rtl: [
      ...al,
      "ArrowLeft"
    ]
  }, o1 = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  }, Ba = "Menu", [Ma, l1, c1] = Nu(Ba), [Pi, Ou] = dl(Ba, [
    c1,
    Lu,
    Iu
  ]), $s = Lu(), Du = Iu(), [u1, Ci] = Pi(Ba), [f1, qa] = Pi(Ba), Tu = (n) => {
    const { __scopeMenu: e, open: t = false, children: r, dir: s, onOpenChange: a, modal: h = true } = n, l = $s(e), [u, d] = ge.useState(null), g = ge.useRef(false), w = pl(a), S = _u(s);
    return ge.useEffect(() => {
      const p = () => {
        g.current = true, document.addEventListener("pointerdown", j, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", j, {
          capture: true,
          once: true
        });
      }, j = () => g.current = false;
      return document.addEventListener("keydown", p, {
        capture: true
      }), () => {
        document.removeEventListener("keydown", p, {
          capture: true
        }), document.removeEventListener("pointerdown", j, {
          capture: true
        }), document.removeEventListener("pointermove", j, {
          capture: true
        });
      };
    }, []), C.jsx(Qh, {
      ...l,
      children: C.jsx(u1, {
        scope: e,
        open: t,
        onOpenChange: w,
        content: u,
        onContentChange: d,
        children: C.jsx(f1, {
          scope: e,
          onClose: ge.useCallback(() => w(false), [
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
  Tu.displayName = Ba;
  var h1 = "MenuAnchor", gl = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, s = $s(t);
    return C.jsx(ed, {
      ...s,
      ...r,
      ref: e
    });
  });
  gl.displayName = h1;
  var bl = "MenuPortal", [d1, Bu] = Pi(bl, {
    forceMount: void 0
  }), qu = (n) => {
    const { __scopeMenu: e, forceMount: t, children: r, container: s } = n, a = Ci(bl, e);
    return C.jsx(d1, {
      scope: e,
      forceMount: t,
      children: C.jsx(Gs, {
        present: t || a.open,
        children: C.jsx(td, {
          asChild: true,
          container: s,
          children: r
        })
      })
    });
  };
  qu.displayName = bl;
  var Gn = "MenuContent", [p1, vl] = Pi(Gn), Uu = ge.forwardRef((n, e) => {
    const t = Bu(Gn, n.__scopeMenu), { forceMount: r = t.forceMount, ...s } = n, a = Ci(Gn, n.__scopeMenu), h = qa(Gn, n.__scopeMenu);
    return C.jsx(Ma.Provider, {
      scope: n.__scopeMenu,
      children: C.jsx(Gs, {
        present: r || a.open,
        children: C.jsx(Ma.Slot, {
          scope: n.__scopeMenu,
          children: h.modal ? C.jsx(m1, {
            ...s,
            ref: e
          }) : C.jsx(g1, {
            ...s,
            ref: e
          })
        })
      })
    });
  }), m1 = ge.forwardRef((n, e) => {
    const t = Ci(Gn, n.__scopeMenu), r = ge.useRef(null), s = na(e, r);
    return ge.useEffect(() => {
      const a = r.current;
      if (a) return nd(a);
    }, []), C.jsx(wl, {
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
  }), g1 = ge.forwardRef((n, e) => {
    const t = Ci(Gn, n.__scopeMenu);
    return C.jsx(wl, {
      ...n,
      ref: e,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => t.onOpenChange(false)
    });
  }), b1 = Zd("MenuContent.ScrollLock"), wl = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, loop: r = false, trapFocus: s, onOpenAutoFocus: a, onCloseAutoFocus: h, disableOutsidePointerEvents: l, onEntryFocus: u, onEscapeKeyDown: d, onPointerDownOutside: g, onFocusOutside: w, onInteractOutside: S, onDismiss: p, disableOutsideScroll: j, ...R } = n, D = Ci(Gn, t), L = qa(Gn, t), Y = $s(t), $ = Du(t), U = l1(t), [le, ve] = ge.useState(null), fe = ge.useRef(null), ee = na(e, fe, D.onContentChange), H = ge.useRef(0), ne = ge.useRef(""), _ = ge.useRef(0), O = ge.useRef(null), G = ge.useRef("right"), V = ge.useRef(0), ce = j ? ad : ge.Fragment, ue = j ? {
      as: b1,
      allowPinchZoom: true
    } : void 0, be = (ie) => {
      const Le = ne.current + ie, xe = U().filter((W) => !W.disabled), N = document.activeElement, T = xe.find((W) => W.ref.current === N)?.textValue, P = xe.map((W) => W.textValue), B = C1(P, Le, T), q = xe.find((W) => W.textValue === B)?.ref.current;
      (function W(J) {
        ne.current = J, window.clearTimeout(H.current), J !== "" && (H.current = window.setTimeout(() => W(""), 1e3));
      })(Le), q && setTimeout(() => q.focus());
    };
    ge.useEffect(() => () => window.clearTimeout(H.current), []), id();
    const oe = ge.useCallback((ie) => G.current === O.current?.side && j1(ie, O.current?.area), []);
    return C.jsx(p1, {
      scope: t,
      searchRef: ne,
      onItemEnter: ge.useCallback((ie) => {
        oe(ie) && ie.preventDefault();
      }, [
        oe
      ]),
      onItemLeave: ge.useCallback((ie) => {
        oe(ie) || (fe.current?.focus(), ve(null));
      }, [
        oe
      ]),
      onTriggerLeave: ge.useCallback((ie) => {
        oe(ie) && ie.preventDefault();
      }, [
        oe
      ]),
      pointerGraceTimerRef: _,
      onPointerGraceIntentChange: ge.useCallback((ie) => {
        O.current = ie;
      }, []),
      children: C.jsx(ce, {
        ...ue,
        children: C.jsx(sd, {
          asChild: true,
          trapped: s,
          onMountAutoFocus: wt(a, (ie) => {
            ie.preventDefault(), fe.current?.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: h,
          children: C.jsx(od, {
            asChild: true,
            disableOutsidePointerEvents: l,
            onEscapeKeyDown: d,
            onPointerDownOutside: g,
            onFocusOutside: w,
            onInteractOutside: S,
            onDismiss: p,
            children: C.jsx(Jd, {
              asChild: true,
              ...$,
              dir: L.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: le,
              onCurrentTabStopIdChange: ve,
              onEntryFocus: wt(u, (ie) => {
                L.isUsingKeyboardRef.current || ie.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: C.jsx(ld, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": rf(D.open),
                "data-radix-menu-content": "",
                dir: L.dir,
                ...Y,
                ...R,
                ref: ee,
                style: {
                  outline: "none",
                  ...R.style
                },
                onKeyDown: wt(R.onKeyDown, (ie) => {
                  const xe = ie.target.closest("[data-radix-menu-content]") === ie.currentTarget, N = ie.ctrlKey || ie.altKey || ie.metaKey, T = ie.key.length === 1;
                  xe && (ie.key === "Tab" && ie.preventDefault(), !N && T && be(ie.key));
                  const P = fe.current;
                  if (ie.target !== P || !a1.includes(ie.key)) return;
                  ie.preventDefault();
                  const q = U().filter((W) => !W.disabled).map((W) => W.ref.current);
                  Ru.includes(ie.key) && q.reverse(), k1(q);
                }),
                onBlur: wt(n.onBlur, (ie) => {
                  ie.currentTarget.contains(ie.target) || (window.clearTimeout(H.current), ne.current = "");
                }),
                onPointerMove: wt(n.onPointerMove, Ra((ie) => {
                  const Le = ie.target, xe = V.current !== ie.clientX;
                  if (ie.currentTarget.contains(Le) && xe) {
                    const N = ie.clientX > V.current ? "right" : "left";
                    G.current = N, V.current = ie.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  Uu.displayName = Gn;
  var v1 = "MenuGroup", yl = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ii.div, {
      role: "group",
      ...r,
      ref: e
    });
  });
  yl.displayName = v1;
  var w1 = "MenuLabel", zu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ii.div, {
      ...r,
      ref: e
    });
  });
  zu.displayName = w1;
  var qs = "MenuItem", dc = "menu.itemSelect", Ks = ge.forwardRef((n, e) => {
    const { disabled: t = false, onSelect: r, ...s } = n, a = ge.useRef(null), h = qa(qs, n.__scopeMenu), l = vl(qs, n.__scopeMenu), u = na(e, a), d = ge.useRef(false), g = () => {
      const w = a.current;
      if (!t && w) {
        const S = new CustomEvent(dc, {
          bubbles: true,
          cancelable: true
        });
        w.addEventListener(dc, (p) => r?.(p), {
          once: true
        }), rd(w, S), S.defaultPrevented ? d.current = false : h.onClose();
      }
    };
    return C.jsx(Hu, {
      ...s,
      ref: u,
      disabled: t,
      onClick: wt(n.onClick, g),
      onPointerDown: (w) => {
        n.onPointerDown?.(w), d.current = true;
      },
      onPointerUp: wt(n.onPointerUp, (w) => {
        d.current || w.currentTarget?.click();
      }),
      onKeyDown: wt(n.onKeyDown, (w) => {
        const S = l.searchRef.current !== "";
        t || S && w.key === " " || al.includes(w.key) && (w.currentTarget.click(), w.preventDefault());
      })
    });
  });
  Ks.displayName = qs;
  var Hu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, disabled: r = false, textValue: s, ...a } = n, h = vl(qs, t), l = Du(t), u = ge.useRef(null), d = na(e, u), [g, w] = ge.useState(false), [S, p] = ge.useState("");
    return ge.useEffect(() => {
      const j = u.current;
      j && p((j.textContent ?? "").trim());
    }, [
      a.children
    ]), C.jsx(Ma.ItemSlot, {
      scope: t,
      disabled: r,
      textValue: s ?? S,
      children: C.jsx(Xd, {
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
          onPointerMove: wt(n.onPointerMove, Ra((j) => {
            r ? h.onItemLeave(j) : (h.onItemEnter(j), j.defaultPrevented || j.currentTarget.focus({
              preventScroll: true
            }));
          })),
          onPointerLeave: wt(n.onPointerLeave, Ra((j) => h.onItemLeave(j))),
          onFocus: wt(n.onFocus, () => w(true)),
          onBlur: wt(n.onBlur, () => w(false))
        })
      })
    });
  }), y1 = "MenuCheckboxItem", Wu = ge.forwardRef((n, e) => {
    const { checked: t = false, onCheckedChange: r, ...s } = n;
    return C.jsx(Yu, {
      scope: n.__scopeMenu,
      checked: t,
      children: C.jsx(Ks, {
        role: "menuitemcheckbox",
        "aria-checked": Us(t) ? "mixed" : t,
        ...s,
        ref: e,
        "data-state": Nl(t),
        onSelect: wt(s.onSelect, () => r?.(Us(t) ? true : !t), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  Wu.displayName = y1;
  var Vu = "MenuRadioGroup", [x1, N1] = Pi(Vu, {
    value: void 0,
    onValueChange: () => {
    }
  }), Gu = ge.forwardRef((n, e) => {
    const { value: t, onValueChange: r, ...s } = n, a = pl(r);
    return C.jsx(x1, {
      scope: n.__scopeMenu,
      value: t,
      onValueChange: a,
      children: C.jsx(yl, {
        ...s,
        ref: e
      })
    });
  });
  Gu.displayName = Vu;
  var $u = "MenuRadioItem", Ku = ge.forwardRef((n, e) => {
    const { value: t, ...r } = n, s = N1($u, n.__scopeMenu), a = t === s.value;
    return C.jsx(Yu, {
      scope: n.__scopeMenu,
      checked: a,
      children: C.jsx(Ks, {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: e,
        "data-state": Nl(a),
        onSelect: wt(r.onSelect, () => s.onValueChange?.(t), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  Ku.displayName = $u;
  var xl = "MenuItemIndicator", [Yu, _1] = Pi(xl, {
    checked: false
  }), Ju = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, forceMount: r, ...s } = n, a = _1(xl, t);
    return C.jsx(Gs, {
      present: r || Us(a.checked) || a.checked === true,
      children: C.jsx(ii.span, {
        ...s,
        ref: e,
        "data-state": Nl(a.checked)
      })
    });
  });
  Ju.displayName = xl;
  var A1 = "MenuSeparator", Xu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ii.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: e
    });
  });
  Xu.displayName = A1;
  var L1 = "MenuArrow", Zu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, s = $s(t);
    return C.jsx(cd, {
      ...s,
      ...r,
      ref: e
    });
  });
  Zu.displayName = L1;
  var S1 = "MenuSub", [wp, Qu] = Pi(S1), Ea = "MenuSubTrigger", ef = ge.forwardRef((n, e) => {
    const t = Ci(Ea, n.__scopeMenu), r = qa(Ea, n.__scopeMenu), s = Qu(Ea, n.__scopeMenu), a = vl(Ea, n.__scopeMenu), h = ge.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = a, d = {
      __scopeMenu: n.__scopeMenu
    }, g = ge.useCallback(() => {
      h.current && window.clearTimeout(h.current), h.current = null;
    }, []);
    return ge.useEffect(() => g, [
      g
    ]), ge.useEffect(() => {
      const w = l.current;
      return () => {
        window.clearTimeout(w), u(null);
      };
    }, [
      l,
      u
    ]), C.jsx(gl, {
      asChild: true,
      ...d,
      children: C.jsx(Hu, {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": s.contentId,
        "data-state": rf(t.open),
        ...n,
        ref: ml(e, s.onTriggerChange),
        onClick: (w) => {
          n.onClick?.(w), !(n.disabled || w.defaultPrevented) && (w.currentTarget.focus(), t.open || t.onOpenChange(true));
        },
        onPointerMove: wt(n.onPointerMove, Ra((w) => {
          a.onItemEnter(w), !w.defaultPrevented && !n.disabled && !t.open && !h.current && (a.onPointerGraceIntentChange(null), h.current = window.setTimeout(() => {
            t.onOpenChange(true), g();
          }, 100));
        })),
        onPointerLeave: wt(n.onPointerLeave, Ra((w) => {
          g();
          const S = t.content?.getBoundingClientRect();
          if (S) {
            const p = t.content?.dataset.side, j = p === "right", R = j ? -5 : 5, D = S[j ? "left" : "right"], L = S[j ? "right" : "left"];
            a.onPointerGraceIntentChange({
              area: [
                {
                  x: w.clientX + R,
                  y: w.clientY
                },
                {
                  x: D,
                  y: S.top
                },
                {
                  x: L,
                  y: S.top
                },
                {
                  x: L,
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
          const S = a.searchRef.current !== "";
          n.disabled || S && w.key === " " || s1[r.dir].includes(w.key) && (t.onOpenChange(true), t.content?.focus(), w.preventDefault());
        })
      })
    });
  });
  ef.displayName = Ea;
  var tf = "MenuSubContent", nf = ge.forwardRef((n, e) => {
    const t = Bu(Gn, n.__scopeMenu), { forceMount: r = t.forceMount, ...s } = n, a = Ci(Gn, n.__scopeMenu), h = qa(Gn, n.__scopeMenu), l = Qu(tf, n.__scopeMenu), u = ge.useRef(null), d = na(e, u);
    return C.jsx(Ma.Provider, {
      scope: n.__scopeMenu,
      children: C.jsx(Gs, {
        present: r || a.open,
        children: C.jsx(Ma.Slot, {
          scope: n.__scopeMenu,
          children: C.jsx(wl, {
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
              h.isUsingKeyboardRef.current && u.current?.focus(), g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: wt(n.onFocusOutside, (g) => {
              g.target !== l.trigger && a.onOpenChange(false);
            }),
            onEscapeKeyDown: wt(n.onEscapeKeyDown, (g) => {
              h.onClose(), g.preventDefault();
            }),
            onKeyDown: wt(n.onKeyDown, (g) => {
              const w = g.currentTarget.contains(g.target), S = o1[h.dir].includes(g.key);
              w && S && (a.onOpenChange(false), l.trigger?.focus(), g.preventDefault());
            })
          })
        })
      })
    });
  });
  nf.displayName = tf;
  function rf(n) {
    return n ? "open" : "closed";
  }
  function Us(n) {
    return n === "indeterminate";
  }
  function Nl(n) {
    return Us(n) ? "indeterminate" : n ? "checked" : "unchecked";
  }
  function k1(n) {
    const e = document.activeElement;
    for (const t of n) if (t === e || (t.focus(), document.activeElement !== e)) return;
  }
  function P1(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  function C1(n, e, t) {
    const s = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, a = t ? n.indexOf(t) : -1;
    let h = P1(n, Math.max(a, 0));
    s.length === 1 && (h = h.filter((d) => d !== t));
    const u = h.find((d) => d.toLowerCase().startsWith(s.toLowerCase()));
    return u !== t ? u : void 0;
  }
  function I1(n, e) {
    const { x: t, y: r } = n;
    let s = false;
    for (let a = 0, h = e.length - 1; a < e.length; h = a++) {
      const l = e[a], u = e[h], d = l.x, g = l.y, w = u.x, S = u.y;
      g > r != S > r && t < (w - d) * (r - g) / (S - g) + d && (s = !s);
    }
    return s;
  }
  function j1(n, e) {
    if (!e) return false;
    const t = {
      x: n.clientX,
      y: n.clientY
    };
    return I1(t, e);
  }
  function Ra(n) {
    return (e) => e.pointerType === "mouse" ? n(e) : void 0;
  }
  var E1 = Tu, F1 = gl, M1 = qu, R1 = Uu, O1 = yl, D1 = zu, T1 = Ks, B1 = Wu, q1 = Gu, U1 = Ku, z1 = Ju, H1 = Xu, W1 = Zu, V1 = ef, G1 = nf, Ys = "DropdownMenu", [$1] = dl(Ys, [
    Ou
  ]), _n = Ou(), [K1, af] = $1(Ys), sf = (n) => {
    const { __scopeDropdownMenu: e, children: t, dir: r, open: s, defaultOpen: a, onOpenChange: h, modal: l = true } = n, u = _n(e), d = ge.useRef(null), [g, w] = Au({
      prop: s,
      defaultProp: a ?? false,
      onChange: h,
      caller: Ys
    });
    return C.jsx(K1, {
      scope: e,
      triggerId: tl(),
      triggerRef: d,
      contentId: tl(),
      open: g,
      onOpenChange: w,
      onOpenToggle: ge.useCallback(() => w((S) => !S), [
        w
      ]),
      modal: l,
      children: C.jsx(E1, {
        ...u,
        open: g,
        onOpenChange: w,
        dir: r,
        modal: l,
        children: t
      })
    });
  };
  sf.displayName = Ys;
  var of = "DropdownMenuTrigger", lf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, disabled: r = false, ...s } = n, a = af(of, t), h = _n(t);
    return C.jsx(F1, {
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
        ref: ml(e, a.triggerRef),
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
  lf.displayName = of;
  var Y1 = "DropdownMenuPortal", cf = (n) => {
    const { __scopeDropdownMenu: e, ...t } = n, r = _n(e);
    return C.jsx(M1, {
      ...r,
      ...t
    });
  };
  cf.displayName = Y1;
  var uf = "DropdownMenuContent", ff = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = af(uf, t), a = _n(t), h = ge.useRef(false);
    return C.jsx(R1, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...a,
      ...r,
      ref: e,
      onCloseAutoFocus: wt(n.onCloseAutoFocus, (l) => {
        h.current || s.triggerRef.current?.focus(), h.current = false, l.preventDefault();
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
  ff.displayName = uf;
  var J1 = "DropdownMenuGroup", X1 = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(O1, {
      ...s,
      ...r,
      ref: e
    });
  });
  X1.displayName = J1;
  var Z1 = "DropdownMenuLabel", hf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(D1, {
      ...s,
      ...r,
      ref: e
    });
  });
  hf.displayName = Z1;
  var Q1 = "DropdownMenuItem", df = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(T1, {
      ...s,
      ...r,
      ref: e
    });
  });
  df.displayName = Q1;
  var e2 = "DropdownMenuCheckboxItem", pf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(B1, {
      ...s,
      ...r,
      ref: e
    });
  });
  pf.displayName = e2;
  var t2 = "DropdownMenuRadioGroup", n2 = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(q1, {
      ...s,
      ...r,
      ref: e
    });
  });
  n2.displayName = t2;
  var r2 = "DropdownMenuRadioItem", mf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(U1, {
      ...s,
      ...r,
      ref: e
    });
  });
  mf.displayName = r2;
  var i2 = "DropdownMenuItemIndicator", gf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(z1, {
      ...s,
      ...r,
      ref: e
    });
  });
  gf.displayName = i2;
  var a2 = "DropdownMenuSeparator", bf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(H1, {
      ...s,
      ...r,
      ref: e
    });
  });
  bf.displayName = a2;
  var s2 = "DropdownMenuArrow", o2 = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(W1, {
      ...s,
      ...r,
      ref: e
    });
  });
  o2.displayName = s2;
  var l2 = "DropdownMenuSubTrigger", vf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(V1, {
      ...s,
      ...r,
      ref: e
    });
  });
  vf.displayName = l2;
  var c2 = "DropdownMenuSubContent", wf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(G1, {
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
  wf.displayName = c2;
  var u2 = sf, f2 = lf, h2 = cf, yf = ff, xf = hf, Nf = df, _f = pf, Af = mf, Lf = gf, Sf = bf, kf = vf, Pf = wf;
  const d2 = u2, p2 = f2, m2 = ge.forwardRef(({ className: n, inset: e, children: t, ...r }, s) => C.jsxs(kf, {
    ref: s,
    className: ai("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...r,
    children: [
      t,
      C.jsx(ud, {
        className: "ml-auto"
      })
    ]
  }));
  m2.displayName = kf.displayName;
  const g2 = ge.forwardRef(({ className: n, ...e }, t) => C.jsx(Pf, {
    ref: t,
    className: ai("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
    ...e
  }));
  g2.displayName = Pf.displayName;
  const Cf = ge.forwardRef(({ className: n, sideOffset: e = 4, ...t }, r) => C.jsx(h2, {
    children: C.jsx(yf, {
      ref: r,
      sideOffset: e,
      className: ai("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
      ...t
    })
  }));
  Cf.displayName = yf.displayName;
  const Fs = ge.forwardRef(({ className: n, inset: e, ...t }, r) => C.jsx(Nf, {
    ref: r,
    className: ai("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...t
  }));
  Fs.displayName = Nf.displayName;
  const b2 = ge.forwardRef(({ className: n, children: e, checked: t, ...r }, s) => C.jsxs(_f, {
    ref: s,
    className: ai("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    checked: t,
    ...r,
    children: [
      C.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(Lf, {
          children: C.jsx(fd, {
            className: "h-4 w-4"
          })
        })
      }),
      e
    ]
  }));
  b2.displayName = _f.displayName;
  const v2 = ge.forwardRef(({ className: n, children: e, ...t }, r) => C.jsxs(Af, {
    ref: r,
    className: ai("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    ...t,
    children: [
      C.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(Lf, {
          children: C.jsx(Ed, {
            className: "h-2 w-2 fill-current"
          })
        })
      }),
      e
    ]
  }));
  v2.displayName = Af.displayName;
  const w2 = ge.forwardRef(({ className: n, inset: e, ...t }, r) => C.jsx(xf, {
    ref: r,
    className: ai("px-2 py-1.5 text-sm font-semibold", e && "pl-8", n),
    ...t
  }));
  w2.displayName = xf.displayName;
  const y2 = ge.forwardRef(({ className: n, ...e }, t) => C.jsx(Sf, {
    ref: t,
    className: ai("-mx-1 my-1 h-px bg-muted", n),
    ...e
  }));
  y2.displayName = Sf.displayName;
  Lt = function(n) {
    "@babel/helpers - typeof";
    return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Lt(n);
  };
  function x2(n) {
    if (Array.isArray(n)) return n;
  }
  function N2(n, e) {
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
  function pc(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  function _2(n, e) {
    if (n) {
      if (typeof n == "string") return pc(n, e);
      var t = {}.toString.call(n).slice(8, -1);
      return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? pc(n, e) : void 0;
    }
  }
  function A2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function mc(n, e) {
    return x2(n) || N2(n, e) || _2(n, e) || A2();
  }
  function gc(n, e = "utf8") {
    return new TextDecoder(e).decode(n);
  }
  const L2 = new TextEncoder();
  function S2(n) {
    return L2.encode(n);
  }
  const k2 = 1024 * 8, P2 = (() => {
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
  class _l {
    buffer;
    byteLength;
    byteOffset;
    length;
    offset;
    lastWrittenByte;
    littleEndian;
    _data;
    _mark;
    _marks;
    constructor(e = k2, t = {}) {
      let r = false;
      typeof e == "number" ? e = new ArrayBuffer(e) : (r = true, this.lastWrittenByte = e.byteLength);
      const s = t.offset ? t.offset >>> 0 : 0, a = e.byteLength - s;
      let h = s;
      (ArrayBuffer.isView(e) || e instanceof _l) && (e.byteLength !== e.buffer.byteLength && (h = e.byteOffset + s), e = e.buffer), r ? this.lastWrittenByte = a : this.lastWrittenByte = 0, this.buffer = e, this.length = a, this.byteLength = a, this.byteOffset = h, this.offset = 0, this.littleEndian = true, this._data = new DataView(this.buffer, h, a), this._mark = 0, this._marks = [];
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
      if (this.littleEndian === P2 && t !== "uint8" && t !== "int8") {
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
      return gc(this.readBytes(e));
    }
    decodeText(e = 1, t = "utf8") {
      return gc(this.readBytes(e), t);
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
      return this.writeBytes(S2(e));
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
  const C2 = 3, I2 = 258, If = 29, j2 = 256, E2 = j2 + 1 + If, jf = 30, F2 = 512, M2 = new Array((E2 + 2) * 2);
  ra(M2);
  const R2 = new Array(jf * 2);
  ra(R2);
  const O2 = new Array(F2);
  ra(O2);
  const D2 = new Array(I2 - C2 + 1);
  ra(D2);
  const T2 = new Array(If);
  ra(T2);
  const B2 = new Array(jf);
  ra(B2);
  const q2 = (n, e, t, r) => {
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
  var sl = q2;
  const U2 = () => {
    let n, e = [];
    for (var t = 0; t < 256; t++) {
      n = t;
      for (var r = 0; r < 8; r++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      e[t] = n;
    }
    return e;
  }, z2 = new Uint32Array(U2()), H2 = (n, e, t, r) => {
    const s = z2, a = r + t;
    n ^= -1;
    for (let h = r; h < a; h++) n = n >>> 8 ^ s[(n ^ e[h]) & 255];
    return n ^ -1;
  };
  var pr = H2, ol = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }, Ef = {
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
  const W2 = (n, e) => Object.prototype.hasOwnProperty.call(n, e);
  var V2 = function(n) {
    const e = Array.prototype.slice.call(arguments, 1);
    for (; e.length; ) {
      const t = e.shift();
      if (t) {
        if (typeof t != "object") throw new TypeError(t + "must be non-object");
        for (const r in t) W2(t, r) && (n[r] = t[r]);
      }
    }
    return n;
  }, G2 = (n) => {
    let e = 0;
    for (let r = 0, s = n.length; r < s; r++) e += n[r].length;
    const t = new Uint8Array(e);
    for (let r = 0, s = 0, a = n.length; r < a; r++) {
      let h = n[r];
      t.set(h, s), s += h.length;
    }
    return t;
  }, Ff = {
    assign: V2,
    flattenChunks: G2
  };
  let Mf = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    Mf = false;
  }
  const Oa = new Uint8Array(256);
  for (let n = 0; n < 256; n++) Oa[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
  Oa[254] = Oa[254] = 1;
  var $2 = (n) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(n);
    let e, t, r, s, a, h = n.length, l = 0;
    for (s = 0; s < h; s++) t = n.charCodeAt(s), (t & 64512) === 55296 && s + 1 < h && (r = n.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    for (e = new Uint8Array(l), a = 0, s = 0; a < l; s++) t = n.charCodeAt(s), (t & 64512) === 55296 && s + 1 < h && (r = n.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), t < 128 ? e[a++] = t : t < 2048 ? (e[a++] = 192 | t >>> 6, e[a++] = 128 | t & 63) : t < 65536 ? (e[a++] = 224 | t >>> 12, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63) : (e[a++] = 240 | t >>> 18, e[a++] = 128 | t >>> 12 & 63, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63);
    return e;
  };
  const K2 = (n, e) => {
    if (e < 65534 && n.subarray && Mf) return String.fromCharCode.apply(null, n.length === e ? n : n.subarray(0, e));
    let t = "";
    for (let r = 0; r < e; r++) t += String.fromCharCode(n[r]);
    return t;
  };
  var Y2 = (n, e) => {
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
    return K2(a, s);
  }, J2 = (n, e) => {
    e = e || n.length, e > n.length && (e = n.length);
    let t = e - 1;
    for (; t >= 0 && (n[t] & 192) === 128; ) t--;
    return t < 0 || t === 0 ? e : t + Oa[n[t]] > e ? t : e;
  }, ll = {
    string2buf: $2,
    buf2string: Y2,
    utf8border: J2
  };
  function X2() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  var Z2 = X2;
  const As = 16209, Q2 = 16191;
  var e0 = function(e, t) {
    let r, s, a, h, l, u, d, g, w, S, p, j, R, D, L, Y, $, U, le, ve, fe, ee, H, ne;
    const _ = e.state;
    r = e.next_in, H = e.input, s = r + (e.avail_in - 5), a = e.next_out, ne = e.output, h = a - (t - e.avail_out), l = a + (e.avail_out - 257), u = _.dmax, d = _.wsize, g = _.whave, w = _.wnext, S = _.window, p = _.hold, j = _.bits, R = _.lencode, D = _.distcode, L = (1 << _.lenbits) - 1, Y = (1 << _.distbits) - 1;
    e: do {
      j < 15 && (p += H[r++] << j, j += 8, p += H[r++] << j, j += 8), $ = R[p & L];
      t: for (; ; ) {
        if (U = $ >>> 24, p >>>= U, j -= U, U = $ >>> 16 & 255, U === 0) ne[a++] = $ & 65535;
        else if (U & 16) {
          le = $ & 65535, U &= 15, U && (j < U && (p += H[r++] << j, j += 8), le += p & (1 << U) - 1, p >>>= U, j -= U), j < 15 && (p += H[r++] << j, j += 8, p += H[r++] << j, j += 8), $ = D[p & Y];
          n: for (; ; ) {
            if (U = $ >>> 24, p >>>= U, j -= U, U = $ >>> 16 & 255, U & 16) {
              if (ve = $ & 65535, U &= 15, j < U && (p += H[r++] << j, j += 8, j < U && (p += H[r++] << j, j += 8)), ve += p & (1 << U) - 1, ve > u) {
                e.msg = "invalid distance too far back", _.mode = As;
                break e;
              }
              if (p >>>= U, j -= U, U = a - h, ve > U) {
                if (U = ve - U, U > g && _.sane) {
                  e.msg = "invalid distance too far back", _.mode = As;
                  break e;
                }
                if (fe = 0, ee = S, w === 0) {
                  if (fe += d - U, U < le) {
                    le -= U;
                    do
                      ne[a++] = S[fe++];
                    while (--U);
                    fe = a - ve, ee = ne;
                  }
                } else if (w < U) {
                  if (fe += d + w - U, U -= w, U < le) {
                    le -= U;
                    do
                      ne[a++] = S[fe++];
                    while (--U);
                    if (fe = 0, w < le) {
                      U = w, le -= U;
                      do
                        ne[a++] = S[fe++];
                      while (--U);
                      fe = a - ve, ee = ne;
                    }
                  }
                } else if (fe += w - U, U < le) {
                  le -= U;
                  do
                    ne[a++] = S[fe++];
                  while (--U);
                  fe = a - ve, ee = ne;
                }
                for (; le > 2; ) ne[a++] = ee[fe++], ne[a++] = ee[fe++], ne[a++] = ee[fe++], le -= 3;
                le && (ne[a++] = ee[fe++], le > 1 && (ne[a++] = ee[fe++]));
              } else {
                fe = a - ve;
                do
                  ne[a++] = ne[fe++], ne[a++] = ne[fe++], ne[a++] = ne[fe++], le -= 3;
                while (le > 2);
                le && (ne[a++] = ne[fe++], le > 1 && (ne[a++] = ne[fe++]));
              }
            } else if (U & 64) {
              e.msg = "invalid distance code", _.mode = As;
              break e;
            } else {
              $ = D[($ & 65535) + (p & (1 << U) - 1)];
              continue n;
            }
            break;
          }
        } else if (U & 64) if (U & 32) {
          _.mode = Q2;
          break e;
        } else {
          e.msg = "invalid literal/length code", _.mode = As;
          break e;
        }
        else {
          $ = R[($ & 65535) + (p & (1 << U) - 1)];
          continue t;
        }
        break;
      }
    } while (r < s && a < l);
    le = j >> 3, r -= le, j -= le << 3, p &= (1 << j) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < s ? 5 + (s - r) : 5 - (r - s), e.avail_out = a < l ? 257 + (l - a) : 257 - (a - l), _.hold = p, _.bits = j;
  };
  const Gi = 15, bc = 852, vc = 592, wc = 0, Mo = 1, yc = 2, t0 = new Uint16Array([
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
  ]), n0 = new Uint8Array([
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
  ]), r0 = new Uint16Array([
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
  ]), i0 = new Uint8Array([
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
  ]), a0 = (n, e, t, r, s, a, h, l) => {
    const u = l.bits;
    let d = 0, g = 0, w = 0, S = 0, p = 0, j = 0, R = 0, D = 0, L = 0, Y = 0, $, U, le, ve, fe, ee = null, H;
    const ne = new Uint16Array(Gi + 1), _ = new Uint16Array(Gi + 1);
    let O = null, G, V, ce;
    for (d = 0; d <= Gi; d++) ne[d] = 0;
    for (g = 0; g < r; g++) ne[e[t + g]]++;
    for (p = u, S = Gi; S >= 1 && ne[S] === 0; S--) ;
    if (p > S && (p = S), S === 0) return s[a++] = 1 << 24 | 64 << 16 | 0, s[a++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
    for (w = 1; w < S && ne[w] === 0; w++) ;
    for (p < w && (p = w), D = 1, d = 1; d <= Gi; d++) if (D <<= 1, D -= ne[d], D < 0) return -1;
    if (D > 0 && (n === wc || S !== 1)) return -1;
    for (_[1] = 0, d = 1; d < Gi; d++) _[d + 1] = _[d] + ne[d];
    for (g = 0; g < r; g++) e[t + g] !== 0 && (h[_[e[t + g]]++] = g);
    if (n === wc ? (ee = O = h, H = 20) : n === Mo ? (ee = t0, O = n0, H = 257) : (ee = r0, O = i0, H = 0), Y = 0, g = 0, d = w, fe = a, j = p, R = 0, le = -1, L = 1 << p, ve = L - 1, n === Mo && L > bc || n === yc && L > vc) return 1;
    for (; ; ) {
      G = d - R, h[g] + 1 < H ? (V = 0, ce = h[g]) : h[g] >= H ? (V = O[h[g] - H], ce = ee[h[g] - H]) : (V = 96, ce = 0), $ = 1 << d - R, U = 1 << j, w = U;
      do
        U -= $, s[fe + (Y >> R) + U] = G << 24 | V << 16 | ce | 0;
      while (U !== 0);
      for ($ = 1 << d - 1; Y & $; ) $ >>= 1;
      if ($ !== 0 ? (Y &= $ - 1, Y += $) : Y = 0, g++, --ne[d] === 0) {
        if (d === S) break;
        d = e[t + h[g]];
      }
      if (d > p && (Y & ve) !== le) {
        for (R === 0 && (R = p), fe += w, j = d - R, D = 1 << j; j + R < S && (D -= ne[j + R], !(D <= 0)); ) j++, D <<= 1;
        if (L += 1 << j, n === Mo && L > bc || n === yc && L > vc) return 1;
        le = Y & ve, s[le] = p << 24 | j << 16 | fe - a | 0;
      }
    }
    return Y !== 0 && (s[fe + Y] = d - R << 24 | 64 << 16 | 0), l.bits = p, 0;
  };
  var Fa = a0;
  const s0 = 0, Rf = 1, Of = 2, { Z_FINISH: xc, Z_BLOCK: o0, Z_TREES: Ls, Z_OK: ki, Z_STREAM_END: l0, Z_NEED_DICT: c0, Z_STREAM_ERROR: $n, Z_DATA_ERROR: Df, Z_MEM_ERROR: Tf, Z_BUF_ERROR: u0, Z_DEFLATED: Nc } = Ef, Js = 16180, _c = 16181, Ac = 16182, Lc = 16183, Sc = 16184, kc = 16185, Pc = 16186, Cc = 16187, Ic = 16188, jc = 16189, zs = 16190, Or = 16191, Ro = 16192, Ec = 16193, Oo = 16194, Fc = 16195, Mc = 16196, Rc = 16197, Oc = 16198, Ss = 16199, ks = 16200, Dc = 16201, Tc = 16202, Bc = 16203, qc = 16204, Uc = 16205, Do = 16206, zc = 16207, Hc = 16208, Rt = 16209, Bf = 16210, qf = 16211, f0 = 852, h0 = 592, d0 = 15, p0 = d0, Wc = (n) => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
  function m0() {
    this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  const Ii = (n) => {
    if (!n) return 1;
    const e = n.state;
    return !e || e.strm !== n || e.mode < Js || e.mode > qf ? 1 : 0;
  }, Uf = (n) => {
    if (Ii(n)) return $n;
    const e = n.state;
    return n.total_in = n.total_out = e.total = 0, n.msg = "", e.wrap && (n.adler = e.wrap & 1), e.mode = Js, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(f0), e.distcode = e.distdyn = new Int32Array(h0), e.sane = 1, e.back = -1, ki;
  }, zf = (n) => {
    if (Ii(n)) return $n;
    const e = n.state;
    return e.wsize = 0, e.whave = 0, e.wnext = 0, Uf(n);
  }, Hf = (n, e) => {
    let t;
    if (Ii(n)) return $n;
    const r = n.state;
    return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? $n : (r.window !== null && r.wbits !== e && (r.window = null), r.wrap = t, r.wbits = e, zf(n));
  }, Wf = (n, e) => {
    if (!n) return $n;
    const t = new m0();
    n.state = t, t.strm = n, t.window = null, t.mode = Js;
    const r = Hf(n, e);
    return r !== ki && (n.state = null), r;
  }, g0 = (n) => Wf(n, p0);
  let Vc = true, To, Bo;
  const b0 = (n) => {
    if (Vc) {
      To = new Int32Array(512), Bo = new Int32Array(32);
      let e = 0;
      for (; e < 144; ) n.lens[e++] = 8;
      for (; e < 256; ) n.lens[e++] = 9;
      for (; e < 280; ) n.lens[e++] = 7;
      for (; e < 288; ) n.lens[e++] = 8;
      for (Fa(Rf, n.lens, 0, 288, To, 0, n.work, {
        bits: 9
      }), e = 0; e < 32; ) n.lens[e++] = 5;
      Fa(Of, n.lens, 0, 32, Bo, 0, n.work, {
        bits: 5
      }), Vc = false;
    }
    n.lencode = To, n.lenbits = 9, n.distcode = Bo, n.distbits = 5;
  }, Vf = (n, e, t, r) => {
    let s;
    const a = n.state;
    return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), r >= a.wsize ? (a.window.set(e.subarray(t - a.wsize, t), 0), a.wnext = 0, a.whave = a.wsize) : (s = a.wsize - a.wnext, s > r && (s = r), a.window.set(e.subarray(t - r, t - r + s), a.wnext), r -= s, r ? (a.window.set(e.subarray(t - r, t), 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0;
  }, v0 = (n, e) => {
    let t, r, s, a, h, l, u, d, g, w, S, p, j, R, D = 0, L, Y, $, U, le, ve, fe, ee;
    const H = new Uint8Array(4);
    let ne, _;
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
    if (Ii(n) || !n.output || !n.input && n.avail_in !== 0) return $n;
    t = n.state, t.mode === Or && (t.mode = Ro), h = n.next_out, s = n.output, u = n.avail_out, a = n.next_in, r = n.input, l = n.avail_in, d = t.hold, g = t.bits, w = l, S = u, ee = ki;
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
          t.wbits === 0 && (t.wbits = 15), t.check = 0, H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0), d = 0, g = 0, t.mode = _c;
          break;
        }
        if (t.head && (t.head.done = false), !(t.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
          n.msg = "incorrect header check", t.mode = Rt;
          break;
        }
        if ((d & 15) !== Nc) {
          n.msg = "unknown compression method", t.mode = Rt;
          break;
        }
        if (d >>>= 4, g -= 4, fe = (d & 15) + 8, t.wbits === 0 && (t.wbits = fe), fe > 15 || fe > t.wbits) {
          n.msg = "invalid window size", t.mode = Rt;
          break;
        }
        t.dmax = 1 << t.wbits, t.flags = 0, n.adler = t.check = 1, t.mode = d & 512 ? jc : Or, d = 0, g = 0;
        break;
      case _c:
        for (; g < 16; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (t.flags = d, (t.flags & 255) !== Nc) {
          n.msg = "unknown compression method", t.mode = Rt;
          break;
        }
        if (t.flags & 57344) {
          n.msg = "unknown header flags set", t.mode = Rt;
          break;
        }
        t.head && (t.head.text = d >> 8 & 1), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0)), d = 0, g = 0, t.mode = Ac;
      case Ac:
        for (; g < 32; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        t.head && (t.head.time = d), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, H[2] = d >>> 16 & 255, H[3] = d >>> 24 & 255, t.check = pr(t.check, H, 4, 0)), d = 0, g = 0, t.mode = Lc;
      case Lc:
        for (; g < 16; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        t.head && (t.head.xflags = d & 255, t.head.os = d >> 8), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0)), d = 0, g = 0, t.mode = Sc;
      case Sc:
        if (t.flags & 1024) {
          for (; g < 16; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.length = d, t.head && (t.head.extra_len = d), t.flags & 512 && t.wrap & 4 && (H[0] = d & 255, H[1] = d >>> 8 & 255, t.check = pr(t.check, H, 2, 0)), d = 0, g = 0;
        } else t.head && (t.head.extra = null);
        t.mode = kc;
      case kc:
        if (t.flags & 1024 && (p = t.length, p > l && (p = l), p && (t.head && (fe = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(r.subarray(a, a + p), fe)), t.flags & 512 && t.wrap & 4 && (t.check = pr(t.check, r, p, a)), l -= p, a += p, t.length -= p), t.length)) break e;
        t.length = 0, t.mode = Pc;
      case Pc:
        if (t.flags & 2048) {
          if (l === 0) break e;
          p = 0;
          do
            fe = r[a + p++], t.head && fe && t.length < 65536 && (t.head.name += String.fromCharCode(fe));
          while (fe && p < l);
          if (t.flags & 512 && t.wrap & 4 && (t.check = pr(t.check, r, p, a)), l -= p, a += p, fe) break e;
        } else t.head && (t.head.name = null);
        t.length = 0, t.mode = Cc;
      case Cc:
        if (t.flags & 4096) {
          if (l === 0) break e;
          p = 0;
          do
            fe = r[a + p++], t.head && fe && t.length < 65536 && (t.head.comment += String.fromCharCode(fe));
          while (fe && p < l);
          if (t.flags & 512 && t.wrap & 4 && (t.check = pr(t.check, r, p, a)), l -= p, a += p, fe) break e;
        } else t.head && (t.head.comment = null);
        t.mode = Ic;
      case Ic:
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
        t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = true), n.adler = t.check = 0, t.mode = Or;
        break;
      case jc:
        for (; g < 32; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        n.adler = t.check = Wc(d), d = 0, g = 0, t.mode = zs;
      case zs:
        if (t.havedict === 0) return n.next_out = h, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, c0;
        n.adler = t.check = 1, t.mode = Or;
      case Or:
        if (e === o0 || e === Ls) break e;
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
            t.mode = Ec;
            break;
          case 1:
            if (b0(t), t.mode = Ss, e === Ls) {
              d >>>= 2, g -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = Mc;
            break;
          case 3:
            n.msg = "invalid block type", t.mode = Rt;
        }
        d >>>= 2, g -= 2;
        break;
      case Ec:
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
        t.mode = Fc;
      case Fc:
        if (p = t.length, p) {
          if (p > l && (p = l), p > u && (p = u), p === 0) break e;
          s.set(r.subarray(a, a + p), h), l -= p, a += p, u -= p, h += p, t.length -= p;
          break;
        }
        t.mode = Or;
        break;
      case Mc:
        for (; g < 14; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (t.nlen = (d & 31) + 257, d >>>= 5, g -= 5, t.ndist = (d & 31) + 1, d >>>= 5, g -= 5, t.ncode = (d & 15) + 4, d >>>= 4, g -= 4, t.nlen > 286 || t.ndist > 30) {
          n.msg = "too many length or distance symbols", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = Rc;
      case Rc:
        for (; t.have < t.ncode; ) {
          for (; g < 3; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.lens[O[t.have++]] = d & 7, d >>>= 3, g -= 3;
        }
        for (; t.have < 19; ) t.lens[O[t.have++]] = 0;
        if (t.lencode = t.lendyn, t.lenbits = 7, ne = {
          bits: t.lenbits
        }, ee = Fa(s0, t.lens, 0, 19, t.lencode, 0, t.work, ne), t.lenbits = ne.bits, ee) {
          n.msg = "invalid code lengths set", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = Oc;
      case Oc:
        for (; t.have < t.nlen + t.ndist; ) {
          for (; D = t.lencode[d & (1 << t.lenbits) - 1], L = D >>> 24, Y = D >>> 16 & 255, $ = D & 65535, !(L <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          if ($ < 16) d >>>= L, g -= L, t.lens[t.have++] = $;
          else {
            if ($ === 16) {
              for (_ = L + 2; g < _; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              if (d >>>= L, g -= L, t.have === 0) {
                n.msg = "invalid bit length repeat", t.mode = Rt;
                break;
              }
              fe = t.lens[t.have - 1], p = 3 + (d & 3), d >>>= 2, g -= 2;
            } else if ($ === 17) {
              for (_ = L + 3; g < _; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              d >>>= L, g -= L, fe = 0, p = 3 + (d & 7), d >>>= 3, g -= 3;
            } else {
              for (_ = L + 7; g < _; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              d >>>= L, g -= L, fe = 0, p = 11 + (d & 127), d >>>= 7, g -= 7;
            }
            if (t.have + p > t.nlen + t.ndist) {
              n.msg = "invalid bit length repeat", t.mode = Rt;
              break;
            }
            for (; p--; ) t.lens[t.have++] = fe;
          }
        }
        if (t.mode === Rt) break;
        if (t.lens[256] === 0) {
          n.msg = "invalid code -- missing end-of-block", t.mode = Rt;
          break;
        }
        if (t.lenbits = 9, ne = {
          bits: t.lenbits
        }, ee = Fa(Rf, t.lens, 0, t.nlen, t.lencode, 0, t.work, ne), t.lenbits = ne.bits, ee) {
          n.msg = "invalid literal/lengths set", t.mode = Rt;
          break;
        }
        if (t.distbits = 6, t.distcode = t.distdyn, ne = {
          bits: t.distbits
        }, ee = Fa(Of, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, ne), t.distbits = ne.bits, ee) {
          n.msg = "invalid distances set", t.mode = Rt;
          break;
        }
        if (t.mode = Ss, e === Ls) break e;
      case Ss:
        t.mode = ks;
      case ks:
        if (l >= 6 && u >= 258) {
          n.next_out = h, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, e0(n, S), h = n.next_out, s = n.output, u = n.avail_out, a = n.next_in, r = n.input, l = n.avail_in, d = t.hold, g = t.bits, t.mode === Or && (t.back = -1);
          break;
        }
        for (t.back = 0; D = t.lencode[d & (1 << t.lenbits) - 1], L = D >>> 24, Y = D >>> 16 & 255, $ = D & 65535, !(L <= g); ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (Y && !(Y & 240)) {
          for (U = L, le = Y, ve = $; D = t.lencode[ve + ((d & (1 << U + le) - 1) >> U)], L = D >>> 24, Y = D >>> 16 & 255, $ = D & 65535, !(U + L <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          d >>>= U, g -= U, t.back += U;
        }
        if (d >>>= L, g -= L, t.back += L, t.length = $, Y === 0) {
          t.mode = Uc;
          break;
        }
        if (Y & 32) {
          t.back = -1, t.mode = Or;
          break;
        }
        if (Y & 64) {
          n.msg = "invalid literal/length code", t.mode = Rt;
          break;
        }
        t.extra = Y & 15, t.mode = Dc;
      case Dc:
        if (t.extra) {
          for (_ = t.extra; g < _; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.length += d & (1 << t.extra) - 1, d >>>= t.extra, g -= t.extra, t.back += t.extra;
        }
        t.was = t.length, t.mode = Tc;
      case Tc:
        for (; D = t.distcode[d & (1 << t.distbits) - 1], L = D >>> 24, Y = D >>> 16 & 255, $ = D & 65535, !(L <= g); ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (!(Y & 240)) {
          for (U = L, le = Y, ve = $; D = t.distcode[ve + ((d & (1 << U + le) - 1) >> U)], L = D >>> 24, Y = D >>> 16 & 255, $ = D & 65535, !(U + L <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          d >>>= U, g -= U, t.back += U;
        }
        if (d >>>= L, g -= L, t.back += L, Y & 64) {
          n.msg = "invalid distance code", t.mode = Rt;
          break;
        }
        t.offset = $, t.extra = Y & 15, t.mode = Bc;
      case Bc:
        if (t.extra) {
          for (_ = t.extra; g < _; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.offset += d & (1 << t.extra) - 1, d >>>= t.extra, g -= t.extra, t.back += t.extra;
        }
        if (t.offset > t.dmax) {
          n.msg = "invalid distance too far back", t.mode = Rt;
          break;
        }
        t.mode = qc;
      case qc:
        if (u === 0) break e;
        if (p = S - u, t.offset > p) {
          if (p = t.offset - p, p > t.whave && t.sane) {
            n.msg = "invalid distance too far back", t.mode = Rt;
            break;
          }
          p > t.wnext ? (p -= t.wnext, j = t.wsize - p) : j = t.wnext - p, p > t.length && (p = t.length), R = t.window;
        } else R = s, j = h - t.offset, p = t.length;
        p > u && (p = u), u -= p, t.length -= p;
        do
          s[h++] = R[j++];
        while (--p);
        t.length === 0 && (t.mode = ks);
        break;
      case Uc:
        if (u === 0) break e;
        s[h++] = t.length, u--, t.mode = ks;
        break;
      case Do:
        if (t.wrap) {
          for (; g < 32; ) {
            if (l === 0) break e;
            l--, d |= r[a++] << g, g += 8;
          }
          if (S -= u, n.total_out += S, t.total += S, t.wrap & 4 && S && (n.adler = t.check = t.flags ? pr(t.check, s, S, h - S) : sl(t.check, s, S, h - S)), S = u, t.wrap & 4 && (t.flags ? d : Wc(d)) !== t.check) {
            n.msg = "incorrect data check", t.mode = Rt;
            break;
          }
          d = 0, g = 0;
        }
        t.mode = zc;
      case zc:
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
        t.mode = Hc;
      case Hc:
        ee = l0;
        break e;
      case Rt:
        ee = Df;
        break e;
      case Bf:
        return Tf;
      case qf:
      default:
        return $n;
    }
    return n.next_out = h, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, (t.wsize || S !== n.avail_out && t.mode < Rt && (t.mode < Do || e !== xc)) && Vf(n, n.output, n.next_out, S - n.avail_out), w -= n.avail_in, S -= n.avail_out, n.total_in += w, n.total_out += S, t.total += S, t.wrap & 4 && S && (n.adler = t.check = t.flags ? pr(t.check, s, S, n.next_out - S) : sl(t.check, s, S, n.next_out - S)), n.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Or ? 128 : 0) + (t.mode === Ss || t.mode === Oo ? 256 : 0), (w === 0 && S === 0 || e === xc) && ee === ki && (ee = u0), ee;
  }, w0 = (n) => {
    if (Ii(n)) return $n;
    let e = n.state;
    return e.window && (e.window = null), n.state = null, ki;
  }, y0 = (n, e) => {
    if (Ii(n)) return $n;
    const t = n.state;
    return t.wrap & 2 ? (t.head = e, e.done = false, ki) : $n;
  }, x0 = (n, e) => {
    const t = e.length;
    let r, s, a;
    return Ii(n) || (r = n.state, r.wrap !== 0 && r.mode !== zs) ? $n : r.mode === zs && (s = 1, s = sl(s, e, t, 0), s !== r.check) ? Df : (a = Vf(n, e, t, t), a ? (r.mode = Bf, Tf) : (r.havedict = 1, ki));
  };
  var N0 = zf, _0 = Hf, A0 = Uf, L0 = g0, S0 = Wf, k0 = v0, P0 = w0, C0 = y0, I0 = x0, j0 = "pako inflate (from Nodeca project)", Tr = {
    inflateReset: N0,
    inflateReset2: _0,
    inflateResetKeep: A0,
    inflateInit: L0,
    inflateInit2: S0,
    inflate: k0,
    inflateEnd: P0,
    inflateGetHeader: C0,
    inflateSetDictionary: I0,
    inflateInfo: j0
  };
  function E0() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  }
  var F0 = E0;
  const Gf = Object.prototype.toString, { Z_NO_FLUSH: M0, Z_FINISH: R0, Z_OK: Da, Z_STREAM_END: qo, Z_NEED_DICT: Uo, Z_STREAM_ERROR: O0, Z_DATA_ERROR: Gc, Z_MEM_ERROR: D0 } = Ef;
  function Ua(n) {
    this.options = Ff.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ""
    }, n || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(n && n.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Z2(), this.strm.avail_out = 0;
    let t = Tr.inflateInit2(this.strm, e.windowBits);
    if (t !== Da) throw new Error(ol[t]);
    if (this.header = new F0(), Tr.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = ll.string2buf(e.dictionary) : Gf.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = Tr.inflateSetDictionary(this.strm, e.dictionary), t !== Da))) throw new Error(ol[t]);
  }
  Ua.prototype.push = function(n, e) {
    const t = this.strm, r = this.options.chunkSize, s = this.options.dictionary;
    let a, h, l;
    if (this.ended) return false;
    for (e === ~~e ? h = e : h = e === true ? R0 : M0, Gf.call(n) === "[object ArrayBuffer]" ? t.input = new Uint8Array(n) : t.input = n, t.next_in = 0, t.avail_in = t.input.length; ; ) {
      for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), a = Tr.inflate(t, h), a === Uo && s && (a = Tr.inflateSetDictionary(t, s), a === Da ? a = Tr.inflate(t, h) : a === Gc && (a = Uo)); t.avail_in > 0 && a === qo && t.state.wrap > 0 && n[t.next_in] !== 0; ) Tr.inflateReset(t), a = Tr.inflate(t, h);
      switch (a) {
        case O0:
        case Gc:
        case Uo:
        case D0:
          return this.onEnd(a), this.ended = true, false;
      }
      if (l = t.avail_out, t.next_out && (t.avail_out === 0 || a === qo)) if (this.options.to === "string") {
        let u = ll.utf8border(t.output, t.next_out), d = t.next_out - u, g = ll.buf2string(t.output, u);
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
    n === Da && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Ff.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
  };
  function T0(n, e) {
    const t = new Ua(e);
    if (t.push(n), t.err) throw t.msg || ol[t.err];
    return t.result;
  }
  var B0 = Ua, q0 = T0, U0 = {
    Inflate: B0,
    inflate: q0
  };
  const { Inflate: z0, inflate: H0 } = U0;
  var $c = z0, W0 = H0;
  const $f = [];
  for (let n = 0; n < 256; n++) {
    let e = n;
    for (let t = 0; t < 8; t++) e & 1 ? e = 3988292384 ^ e >>> 1 : e = e >>> 1;
    $f[n] = e;
  }
  const Kc = 4294967295;
  function V0(n, e, t) {
    let r = n;
    for (let s = 0; s < t; s++) r = $f[(r ^ e[s]) & 255] ^ r >>> 8;
    return r;
  }
  function G0(n, e) {
    return (V0(Kc, n, e) ^ Kc) >>> 0;
  }
  function Yc(n, e, t) {
    const r = n.readUint32(), s = G0(new Uint8Array(n.buffer, n.byteOffset + n.offset - e - 4, e), e);
    if (s !== r) throw new Error(`CRC mismatch for chunk ${t}. Expected ${r}, found ${s}`);
  }
  function Kf(n, e, t) {
    for (let r = 0; r < t; r++) e[r] = n[r];
  }
  function Yf(n, e, t, r) {
    let s = 0;
    for (; s < r; s++) e[s] = n[s];
    for (; s < t; s++) e[s] = n[s] + e[s - r] & 255;
  }
  function Jf(n, e, t, r) {
    let s = 0;
    if (t.length === 0) for (; s < r; s++) e[s] = n[s];
    else for (; s < r; s++) e[s] = n[s] + t[s] & 255;
  }
  function Xf(n, e, t, r, s) {
    let a = 0;
    if (t.length === 0) {
      for (; a < s; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + (e[a - s] >> 1) & 255;
    } else {
      for (; a < s; a++) e[a] = n[a] + (t[a] >> 1) & 255;
      for (; a < r; a++) e[a] = n[a] + (e[a - s] + t[a] >> 1) & 255;
    }
  }
  function Zf(n, e, t, r, s) {
    let a = 0;
    if (t.length === 0) {
      for (; a < s; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + e[a - s] & 255;
    } else {
      for (; a < s; a++) e[a] = n[a] + t[a] & 255;
      for (; a < r; a++) e[a] = n[a] + $0(e[a - s], t[a], t[a - s]) & 255;
    }
  }
  function $0(n, e, t) {
    const r = n + e - t, s = Math.abs(r - n), a = Math.abs(r - e), h = Math.abs(r - t);
    return s <= a && s <= h ? n : a <= h ? e : t;
  }
  function K0(n, e, t, r, s, a) {
    switch (n) {
      case 0:
        Kf(e, t, s);
        break;
      case 1:
        Yf(e, t, s, a);
        break;
      case 2:
        Jf(e, t, r, s);
        break;
      case 3:
        Xf(e, t, r, s, a);
        break;
      case 4:
        Zf(e, t, r, s, a);
        break;
      default:
        throw new Error(`Unsupported filter: ${n}`);
    }
  }
  const Y0 = new Uint16Array([
    255
  ]), J0 = new Uint8Array(Y0.buffer), X0 = J0[0] === 255;
  function Z0(n) {
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
      const j = S * l, R = new Uint8Array(j);
      for (let D = 0; D < p; D++) {
        const L = e[d++], Y = e.subarray(d, d + j);
        d += j;
        const $ = new Uint8Array(j);
        K0(L, Y, $, R, j, l), R.set($);
        for (let U = 0; U < S; U++) {
          const le = w.x + U * w.xStep, ve = w.y + D * w.yStep;
          if (!(le >= t || ve >= r)) for (let fe = 0; fe < l; fe++) u[(ve * t + le) * l + fe] = $[U * l + fe];
        }
      }
    }
    if (a === 16) {
      const g = new Uint16Array(u.buffer);
      if (X0) for (let w = 0; w < g.length; w++) g[w] = Q0(g[w]);
      return g;
    } else return u;
  }
  function Q0(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const e5 = new Uint16Array([
    255
  ]), t5 = new Uint8Array(e5.buffer), n5 = t5[0] === 255, r5 = new Uint8Array(0);
  function Jc(n) {
    const { data: e, width: t, height: r, channels: s, depth: a } = n, h = Math.ceil(a / 8) * s, l = Math.ceil(a / 8 * s * t), u = new Uint8Array(r * l);
    let d = r5, g = 0, w, S;
    for (let p = 0; p < r; p++) {
      switch (w = e.subarray(g + 1, g + 1 + l), S = u.subarray(p * l, (p + 1) * l), e[g]) {
        case 0:
          Kf(w, S, l);
          break;
        case 1:
          Yf(w, S, l, h);
          break;
        case 2:
          Jf(w, S, d, l);
          break;
        case 3:
          Xf(w, S, d, l, h);
          break;
        case 4:
          Zf(w, S, d, l, h);
          break;
        default:
          throw new Error(`Unsupported filter: ${e[g]}`);
      }
      d = S, g += l + 1;
    }
    if (a === 16) {
      const p = new Uint16Array(u.buffer);
      if (n5) for (let j = 0; j < p.length; j++) p[j] = i5(p[j]);
      return p;
    } else return u;
  }
  function i5(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const Ms = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
  function Xc(n) {
    if (!a5(n.readBytes(Ms.length))) throw new Error("wrong PNG signature");
  }
  function a5(n) {
    if (n.length < Ms.length) return false;
    for (let e = 0; e < Ms.length; e++) if (n[e] !== Ms[e]) return false;
    return true;
  }
  const s5 = "tEXt", o5 = 0, Qf = new TextDecoder("latin1");
  function l5(n) {
    if (u5(n), n.length === 0 || n.length > 79) throw new Error("keyword length must be between 1 and 79");
  }
  const c5 = /^[\u0000-\u00FF]*$/;
  function u5(n) {
    if (!c5.test(n)) throw new Error("invalid latin1 text");
  }
  function f5(n, e, t) {
    const r = eh(e);
    n[r] = h5(e, t - r.length - 1);
  }
  function eh(n) {
    for (n.mark(); n.readByte() !== o5; ) ;
    const e = n.offset;
    n.reset();
    const t = Qf.decode(n.readBytes(e - n.offset - 1));
    return n.skip(1), l5(t), t;
  }
  function h5(n, e) {
    return Qf.decode(n.readBytes(e));
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
  }, Zc = {
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
  class d5 extends _l {
    _checkCrc;
    _inflator;
    _png;
    _apng;
    _end;
    _hasPalette;
    _palette;
    _hasTransparency;
    _transparency;
    _compressionMethod;
    _filterMethod;
    _interlaceMethod;
    _colorType;
    _isAnimated;
    _numberOfFrames;
    _numberOfPlays;
    _frames;
    _writingDataChunks;
    constructor(e, t = {}) {
      super(e);
      const { checkCrc: r = false } = t;
      this._checkCrc = r, this._inflator = new $c(), this._png = {
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
      }, this._end = false, this._hasPalette = false, this._palette = [], this._hasTransparency = false, this._transparency = new Uint16Array(0), this._compressionMethod = zo.UNKNOWN, this._filterMethod = Zc.UNKNOWN, this._interlaceMethod = Ho.UNKNOWN, this._colorType = Rn.UNKNOWN, this._isAnimated = false, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = false, this.setBigEndian();
    }
    decode() {
      for (Xc(this); !this._end; ) {
        const e = this.readUint32(), t = this.readChars(4);
        this.decodeChunk(e, t);
      }
      return this.decodeImage(), this._png;
    }
    decodeApng() {
      for (Xc(this); !this._end; ) {
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
        case s5:
          f5(this._png.text, this, e);
          break;
        case "pHYs":
          this.decodepHYs();
          break;
        default:
          this.skip(e);
          break;
      }
      if (this.offset - r !== e) throw new Error(`Length mismatch while decoding chunk ${t}`);
      this._checkCrc ? Yc(this, e + 4, t) : this.skip(4);
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
      this._checkCrc ? Yc(this, e + 4, t) : this.skip(4);
    }
    decodeIHDR() {
      const e = this._png;
      e.width = this.readUint32(), e.height = this.readUint32(), e.depth = p5(this.readUint8());
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
      const t = eh(this), r = this.readUint8();
      if (r !== zo.DEFLATE) throw new Error(`Unsupported iCCP compression method: ${r}`);
      const s = this.readBytes(e - t.length - 2);
      this._png.iccEmbeddedProfile = {
        name: t,
        profile: W0(s)
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
          if (r.data = Jc({
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
      if (this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
      const e = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
      if (this._filterMethod !== Zc.ADAPTIVE) throw new Error(`Filter method ${this._filterMethod} not supported`);
      if (this._interlaceMethod === Ho.NO_INTERLACE) this._png.data = Jc({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
      else if (this._interlaceMethod === Ho.ADAM7) this._png.data = Z0({
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
      }), this._inflator = new $c(), this._writingDataChunks = false;
    }
  }
  function p5(n) {
    if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16) throw new Error(`invalid bit depth: ${n}`);
    return n;
  }
  var Qc;
  (function(n) {
    n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
  })(Qc || (Qc = {}));
  function m5(n, e) {
    return new d5(n, e).decode();
  }
  var Xe = /* @__PURE__ */ function() {
    return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
  }();
  function Vo() {
    Xe.console && typeof Xe.console.log == "function" && Xe.console.log.apply(Xe.console, arguments);
  }
  var Pt = {
    log: Vo,
    warn: function(n) {
      Xe.console && (typeof Xe.console.warn == "function" ? Xe.console.warn.apply(Xe.console, arguments) : Vo.call(null, arguments));
    },
    error: function(n) {
      Xe.console && (typeof Xe.console.error == "function" ? Xe.console.error.apply(Xe.console, arguments) : Vo(n));
    }
  };
  function Go(n, e, t) {
    var r = new XMLHttpRequest();
    r.open("GET", n), r.responseType = "blob", r.onload = function() {
      Ai(r.response, e, t);
    }, r.onerror = function() {
      Pt.error("could not download file");
    }, r.send();
  }
  function eu(n) {
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
  var Ai = Xe.saveAs || ((typeof window > "u" ? "undefined" : Lt(window)) !== "object" || window !== Xe ? function() {
  } : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, e, t) {
    var r = Xe.URL || Xe.webkitURL, s = document.createElement("a");
    e = e || n.name || "download", s.download = e, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? eu(s.href) ? Go(n, e, t) : Cs(s, s.target = "_blank") : Cs(s)) : (s.href = r.createObjectURL(n), setTimeout(function() {
      r.revokeObjectURL(s.href);
    }, 4e4), setTimeout(function() {
      Cs(s);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function(n, e, t) {
    if (e = e || n.name || "download", typeof n == "string") if (eu(n)) Go(n, e, t);
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
    if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), typeof n == "string") return Go(n, e, t);
    var s = n.type === "application/octet-stream", a = /constructor/i.test(Xe.HTMLElement) || Xe.safari, h = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((h || s && a) && (typeof FileReader > "u" ? "undefined" : Lt(FileReader)) === "object") {
      var l = new FileReader();
      l.onloadend = function() {
        var g = l.result;
        g = h ? g : g.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = g : location = g, r = null;
      }, l.readAsDataURL(n);
    } else {
      var u = Xe.URL || Xe.webkitURL, d = u.createObjectURL(n);
      r ? r.location = d : location.href = d, r = null, setTimeout(function() {
        u.revokeObjectURL(d);
      }, 4e4);
    }
  });
  function th(n) {
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
  var Rs = Xe.atob.bind(Xe), tu = Xe.btoa.bind(Xe);
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
  function nh(n) {
    var e, t = n.length, r = [
      1732584193,
      -271733879,
      -1732584194,
      271733878
    ];
    for (e = 64; e <= n.length; e += 64) $o(r, g5(n.substring(e - 64, e)));
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
  function g5(n) {
    var e, t = [];
    for (e = 0; e < 64; e += 4) t[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
    return t;
  }
  var nu = "0123456789abcdef".split("");
  function b5(n) {
    for (var e = "", t = 0; t < 4; t++) e += nu[n >> 8 * t + 4 & 15] + nu[n >> 8 * t & 15];
    return e;
  }
  function v5(n) {
    return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
  }
  function cl(n) {
    return nh(n).map(v5).join("");
  }
  var w5 = function(n) {
    for (var e = 0; e < n.length; e++) n[e] = b5(n[e]);
    return n.join("");
  }(nh("hello")) != "5d41402abc4b2a76b9719d911017c592";
  function ni(n, e) {
    if (w5) {
      var t = (65535 & n) + (65535 & e);
      return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    return n + e & 4294967295;
  }
  function ul(n, e) {
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
    var w = e.length, S = 0, p = 0, j = "";
    for (u = 0; u < w; u++) p = (p + (g = l[S = (S + 1) % 256])) % 256, l[S] = l[p], l[p] = g, h = l[(l[S] + l[p]) % 256], j += String.fromCharCode(e.charCodeAt(u) ^ h);
    return j;
  }
  var ru = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
  };
  function Yi(n, e, t, r) {
    this.v = 1, this.r = 2;
    var s = 192;
    n.forEach(function(l) {
      if (ru.perm !== void 0) throw new Error("Invalid permission: " + l);
      s += ru[l];
    }), this.padding = "(\xBFN^Nu\x8AAd\0NV\xFF\xFA\b..\0\xB6\xD0h>\x80/\f\xA9\xFEdSiz";
    var a = (e + this.padding).substr(0, 32), h = (t + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(a, h), this.P = -(1 + (255 ^ s)), this.encryptionKey = cl(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = ul(this.encryptionKey, this.padding);
  }
  function Ji(n) {
    if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
    for (var e = "", t = n.length, r = 0; r < t; r++) {
      var s = n.charCodeAt(r);
      e += s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? "#" + ("0" + s.toString(16)).slice(-2) : n[r];
    }
    return e;
  }
  function iu(n) {
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
            Xe.console && Pt.error("jsPDF PubSub Error", l.message, l);
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
  function rh(n, e) {
    this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1;
  }
  function Li(n, e, t, r, s) {
    if (!(this instanceof Li)) return new Li(n, e, t, r, s);
    this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = t, rh.call(this, r, s);
  }
  function Xi(n, e, t, r, s) {
    if (!(this instanceof Xi)) return new Xi(n, e, t, r, s);
    this.boundingBox = n, this.xStep = e, this.yStep = t, this.stream = "", this.cloneIndex = 0, rh.call(this, r, s);
  }
  function qe(n) {
    var e, t = typeof arguments[0] == "string" ? arguments[0] : "p", r = arguments[1], s = arguments[2], a = arguments[3], h = [], l = 1, u = 16, d = "S", g = null;
    Lt(n = n || {}) === "object" && (t = n.orientation, r = n.unit || r, s = n.format || s, a = n.compress || n.compressPdf || a, (g = n.encryption || null) !== null && (g.userPassword = g.userPassword || "", g.ownerPassword = g.ownerPassword || "", g.userPermissions = g.userPermissions || []), l = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (u = n.floatPrecision), d = n.defaultPathOperation || "S"), h = n.filters || (a === true ? [
      "FlateEncode"
    ] : h), r = r || "mm", t = ("" + (t || "P")).toLowerCase();
    var w = n.putOnlyUsedFonts || false, S = {}, p = {
      internal: {},
      __private__: {}
    };
    p.__private__.PubSub = iu;
    var j = "1.3", R = p.__private__.getPdfVersion = function() {
      return j;
    };
    p.__private__.setPdfVersion = function(c) {
      j = c;
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
    var L = p.__private__.getPageFormat = function(c) {
      return D[c];
    };
    s = s || "a4";
    var Y = "compat", $ = "advanced", U = Y;
    function le() {
      this.saveGraphicsState(), I(new Ke(it, 0, 0, -it, 0, pi() * it).toString() + " cm"), this.setFontSize(this.getFontSize() / it), d = "n", U = $;
    }
    function ve() {
      this.restoreGraphicsState(), d = "S", U = Y;
    }
    var fe = p.__private__.combineFontStyleAndFontWeight = function(c, b) {
      if (c == "bold" && b == "normal" || c == "bold" && b == 400 || c == "normal" && b == "italic" || c == "bold" && b == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
      return b && (c = b == 400 || b === "normal" ? c === "italic" ? "italic" : "normal" : b != 700 && b !== "bold" || c !== "normal" ? (b == 700 ? "bold" : b) + "" + c : "bold"), c;
    };
    p.advancedAPI = function(c) {
      var b = U === Y;
      return b && le.call(this), typeof c != "function" || (c(this), b && ve.call(this)), this;
    }, p.compatAPI = function(c) {
      var b = U === $;
      return b && ve.call(this), typeof c != "function" || (c(this), b && le.call(this)), this;
    }, p.isAdvancedAPI = function() {
      return U === $;
    };
    var ee, H = function(c) {
      if (U !== $) throw new Error(c + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
    }, ne = p.roundToPrecision = p.__private__.roundToPrecision = function(c, b) {
      var M = e || b;
      if (isNaN(c) || isNaN(M)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
      return c.toFixed(M).replace(/0+$/, "");
    };
    ee = p.hpf = p.__private__.hpf = typeof u == "number" ? function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return ne(c, u);
    } : u === "smart" ? function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return ne(c, c > -1 && c < 1 ? 16 : 5);
    } : function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
      return ne(c, 16);
    };
    var _ = p.f2 = p.__private__.f2 = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f2");
      return ne(c, 2);
    }, O = p.__private__.f3 = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f3");
      return ne(c, 3);
    }, G = p.scale = p.__private__.scale = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.scale");
      return U === Y ? c * it : U === $ ? c : void 0;
    }, V = function(c) {
      return G(function(b) {
        return U === Y ? pi() - b : U === $ ? b : void 0;
      }(c));
    };
    p.__private__.setPrecision = p.setPrecision = function(c) {
      typeof parseInt(c, 10) == "number" && (e = parseInt(c, 10));
    };
    var ce, ue = "00000000000000000000000000000000", be = p.__private__.getFileId = function() {
      return ue;
    }, oe = p.__private__.setFileId = function(c) {
      return ue = c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c) ? c.toUpperCase() : ue.split("").map(function() {
        return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
      }).join(""), g !== null && (Zt = new Yi(g.userPermissions, g.userPassword, g.ownerPassword, ue)), ue;
    };
    p.setFileId = function(c) {
      return oe(c), this;
    }, p.getFileId = function() {
      return be();
    };
    var ie = p.__private__.convertDateToPDFDate = function(c) {
      var b = c.getTimezoneOffset(), M = b < 0 ? "+" : "-", z = Math.floor(Math.abs(b / 60)), Z = Math.abs(b % 60), pe = [
        M,
        P(z),
        "'",
        P(Z),
        "'"
      ].join("");
      return [
        "D:",
        c.getFullYear(),
        P(c.getMonth() + 1),
        P(c.getDate()),
        P(c.getHours()),
        P(c.getMinutes()),
        P(c.getSeconds()),
        pe
      ].join("");
    }, Le = p.__private__.convertPDFDateToDate = function(c) {
      var b = parseInt(c.substr(2, 4), 10), M = parseInt(c.substr(6, 2), 10) - 1, z = parseInt(c.substr(8, 2), 10), Z = parseInt(c.substr(10, 2), 10), pe = parseInt(c.substr(12, 2), 10), we = parseInt(c.substr(14, 2), 10);
      return new Date(b, M, z, Z, pe, we, 0);
    }, xe = p.__private__.setCreationDate = function(c) {
      var b;
      if (c === void 0 && (c = /* @__PURE__ */ new Date()), c instanceof Date) b = ie(c);
      else {
        if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(c)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
        b = c;
      }
      return ce = b;
    }, N = p.__private__.getCreationDate = function(c) {
      var b = ce;
      return c === "jsDate" && (b = Le(ce)), b;
    };
    p.setCreationDate = function(c) {
      return xe(c), this;
    }, p.getCreationDate = function(c) {
      return N(c);
    };
    var T, P = p.__private__.padd2 = function(c) {
      return ("0" + parseInt(c)).slice(-2);
    }, B = p.__private__.padd2Hex = function(c) {
      return ("00" + (c = c.toString())).substr(c.length);
    }, q = 0, W = [], J = [], Q = 0, se = [], _e = [], Se = false, Ce = J;
    p.__private__.setCustomOutputDestination = function(c) {
      Se = true, Ce = c;
    };
    var je = function(c) {
      Se || (Ce = c);
    };
    p.__private__.resetCustomOutputDestination = function() {
      Se = false, Ce = J;
    };
    var I = p.__private__.out = function(c) {
      return c = c.toString(), Q += c.length + 1, Ce.push(c), Ce;
    }, Pe = p.__private__.write = function(c) {
      return I(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, " "));
    }, Je = p.__private__.getArrayBuffer = function(c) {
      for (var b = c.length, M = new ArrayBuffer(b), z = new Uint8Array(M); b--; ) z[b] = c.charCodeAt(b);
      return M;
    }, ze = [
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
      return ze;
    };
    var Ne = n.fontSize || 16;
    p.__private__.setFontSize = p.setFontSize = function(c) {
      return Ne = U === $ ? c / it : c, this;
    };
    var Ge, Ee = p.__private__.getFontSize = p.getFontSize = function() {
      return U === Y ? Ne : Ne * it;
    }, Ve = n.R2L || false;
    p.__private__.setR2L = p.setR2L = function(c) {
      return Ve = c, this;
    }, p.__private__.getR2L = p.getR2L = function() {
      return Ve;
    };
    var He, yt = p.__private__.setZoomMode = function(c) {
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) Ge = c;
      else if (isNaN(c)) {
        if ([
          void 0,
          null,
          "fullwidth",
          "fullheight",
          "fullpage",
          "original"
        ].indexOf(c) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + c + '" is not recognized.');
        Ge = c;
      } else Ge = parseInt(c, 10);
    };
    p.__private__.getZoomMode = function() {
      return Ge;
    };
    var ft, tt = p.__private__.setPageMode = function(c) {
      if ([
        void 0,
        null,
        "UseNone",
        "UseOutlines",
        "UseThumbs",
        "FullScreen"
      ].indexOf(c) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + c + '" is not recognized.');
      He = c;
    };
    p.__private__.getPageMode = function() {
      return He;
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
    }, p.__private__.setDisplayMode = p.setDisplayMode = function(c, b, M) {
      return yt(c), dt(b), tt(M), this;
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
    var De, it, Ue, Ut, gt, lt = {}, ct = {}, Ft = [], We = {}, Ct = {}, Ye = {}, nt = {}, Mt = null, ut = 0, $e = [], xt = new iu(p), si = n.hotfixes || [], dn = {}, vr = {}, ar = [], Ke = function c(b, M, z, Z, pe, we) {
      if (!(this instanceof c)) return new c(b, M, z, Z, pe, we);
      isNaN(b) && (b = 1), isNaN(M) && (M = 0), isNaN(z) && (z = 0), isNaN(Z) && (Z = 1), isNaN(pe) && (pe = 0), isNaN(we) && (we = 0), this._matrix = [
        b,
        M,
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
      var b = c.sx * this.sx + c.shy * this.shx, M = c.sx * this.shy + c.shy * this.sy, z = c.shx * this.sx + c.sy * this.shx, Z = c.shx * this.shy + c.sy * this.sy, pe = c.tx * this.sx + c.ty * this.shx + this.tx, we = c.tx * this.shy + c.ty * this.sy + this.ty;
      return new Ke(b, M, z, Z, pe, we);
    }, Ke.prototype.decompose = function() {
      var c = this.sx, b = this.shy, M = this.shx, z = this.sy, Z = this.tx, pe = this.ty, we = Math.sqrt(c * c + b * b), Me = (c /= we) * M + (b /= we) * z;
      M -= c * Me, z -= b * Me;
      var Te = Math.sqrt(M * M + z * z);
      return Me /= Te, c * (z /= Te) < b * (M /= Te) && (c = -c, b = -b, Me = -Me, we = -we), {
        scale: new Ke(we, 0, 0, Te, 0, 0),
        translate: new Ke(1, 0, 0, 1, Z, pe),
        rotate: new Ke(c, b, -b, c, 0, 0),
        skew: new Ke(1, 0, Me, 1, 0, 0)
      };
    }, Ke.prototype.toString = function(c) {
      return this.join(" ");
    }, Ke.prototype.inversed = function() {
      var c = this.sx, b = this.shy, M = this.shx, z = this.sy, Z = this.tx, pe = this.ty, we = 1 / (c * z - b * M), Me = z * we, Te = -b * we, Ze = -M * we, at = c * we;
      return new Ke(Me, Te, Ze, at, -Me * Z - Ze * pe, -Te * Z - at * pe);
    }, Ke.prototype.applyToPoint = function(c) {
      var b = c.x * this.sx + c.y * this.shx + this.tx, M = c.x * this.shy + c.y * this.sy + this.ty;
      return new Lr(b, M);
    }, Ke.prototype.applyToRectangle = function(c) {
      var b = this.applyToPoint(c), M = this.applyToPoint(new Lr(c.x + c.w, c.y + c.h));
      return new ha(b.x, b.y, M.x - b.x, M.y - b.y);
    }, Ke.prototype.clone = function() {
      var c = this.sx, b = this.shy, M = this.shx, z = this.sy, Z = this.tx, pe = this.ty;
      return new Ke(c, b, M, z, Z, pe);
    }, p.Matrix = Ke;
    var wr = p.matrixMult = function(c, b) {
      return b.multiply(c);
    }, yr = new Ke(1, 0, 0, 1, 0, 0);
    p.unitMatrix = p.identityMatrix = yr;
    var On = function(c, b) {
      if (!Ct[c]) {
        var M = (b instanceof Li ? "Sh" : "P") + (Object.keys(We).length + 1).toString(10);
        b.id = M, Ct[c] = M, We[M] = b, xt.publish("addPattern", b);
      }
    };
    p.ShadingPattern = Li, p.TilingPattern = Xi, p.addShadingPattern = function(c, b) {
      return H("addShadingPattern()"), On(c, b), this;
    }, p.beginTilingPattern = function(c) {
      H("beginTilingPattern()"), da(c.boundingBox[0], c.boundingBox[1], c.boundingBox[2] - c.boundingBox[0], c.boundingBox[3] - c.boundingBox[1], c.matrix);
    }, p.endTilingPattern = function(c, b) {
      H("endTilingPattern()"), b.stream = _e[T].join(`
`), On(c, b), xt.publish("endTilingPattern", b), ar.pop().restore();
    };
    var Dn, Dt = p.__private__.newObject = function() {
      var c = an();
      return on(c, true), c;
    }, an = p.__private__.newObjectDeferred = function() {
      return q++, W[q] = function() {
        return Q;
      }, q;
    }, on = function(c, b) {
      return b = typeof b == "boolean" && b, W[c] = Q, b && I(c + " 0 obj"), c;
    }, oi = p.__private__.newAdditionalObject = function() {
      var c = {
        objId: an(),
        content: ""
      };
      return se.push(c), c;
    }, Br = an(), Kn = an(), sr = p.__private__.decodeColorString = function(c) {
      var b = c.split(" ");
      if (b.length !== 2 || b[1] !== "g" && b[1] !== "G") b.length !== 5 || b[4] !== "k" && b[4] !== "K" || (b = [
        (1 - b[0]) * (1 - b[3]),
        (1 - b[1]) * (1 - b[3]),
        (1 - b[2]) * (1 - b[3]),
        "r"
      ]);
      else {
        var M = parseFloat(b[0]);
        b = [
          M,
          M,
          M,
          "r"
        ];
      }
      for (var z = "#", Z = 0; Z < 3; Z++) z += ("0" + Math.floor(255 * parseFloat(b[Z])).toString(16)).slice(-2);
      return z;
    }, Yn = p.__private__.encodeColorString = function(c) {
      var b;
      typeof c == "string" && (c = {
        ch1: c
      });
      var M = c.ch1, z = c.ch2, Z = c.ch3, pe = c.ch4, we = c.pdfColorType === "draw" ? [
        "G",
        "RG",
        "K"
      ] : [
        "g",
        "rg",
        "k"
      ];
      if (typeof M == "string" && M.charAt(0) !== "#") {
        var Me = new th(M);
        if (Me.ok) M = Me.toHex();
        else if (!/^\d*\.?\d*$/.test(M)) throw new Error('Invalid color "' + M + '" passed to jsPDF.encodeColorString.');
      }
      if (typeof M == "string" && /^#[0-9A-Fa-f]{3}$/.test(M) && (M = "#" + M[1] + M[1] + M[2] + M[2] + M[3] + M[3]), typeof M == "string" && /^#[0-9A-Fa-f]{6}$/.test(M)) {
        var Te = parseInt(M.substr(1), 16);
        M = Te >> 16 & 255, z = Te >> 8 & 255, Z = 255 & Te;
      }
      if (z === void 0 || pe === void 0 && M === z && z === Z) b = typeof M == "string" ? M + " " + we[0] : c.precision === 2 ? _(M / 255) + " " + we[0] : O(M / 255) + " " + we[0];
      else if (pe === void 0 || Lt(pe) === "object") {
        if (pe && !isNaN(pe.a) && pe.a === 0) return [
          "1.",
          "1.",
          "1.",
          we[1]
        ].join(" ");
        b = typeof M == "string" ? [
          M,
          z,
          Z,
          we[1]
        ].join(" ") : c.precision === 2 ? [
          _(M / 255),
          _(z / 255),
          _(Z / 255),
          we[1]
        ].join(" ") : [
          O(M / 255),
          O(z / 255),
          O(Z / 255),
          we[1]
        ].join(" ");
      } else b = typeof M == "string" ? [
        M,
        z,
        Z,
        pe,
        we[2]
      ].join(" ") : c.precision === 2 ? [
        _(M),
        _(z),
        _(Z),
        _(pe),
        we[2]
      ].join(" ") : [
        O(M),
        O(z),
        O(Z),
        O(pe),
        we[2]
      ].join(" ");
      return b;
    }, Jn = p.__private__.getFilters = function() {
      return h;
    }, Tn = p.__private__.putStream = function(c) {
      var b = (c = c || {}).data || "", M = c.filters || Jn(), z = c.alreadyAppliedFilters || [], Z = c.addLength1 || false, pe = b.length, we = c.objectId, Me = function(Qt) {
        return Qt;
      };
      if (g !== null && we === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
      g !== null && (Me = Zt.encryptor(we, 0));
      var Te = {};
      M === true && (M = [
        "FlateEncode"
      ]);
      var Ze = c.additionalKeyValues || [], at = (Te = qe.API.processDataByFilters !== void 0 ? qe.API.processDataByFilters(b, M) : {
        data: b,
        reverseChain: []
      }).reverseChain + (Array.isArray(z) ? z.join(" ") : z.toString());
      if (Te.data.length !== 0 && (Ze.push({
        key: "Length",
        value: Te.data.length
      }), Z === true && Ze.push({
        key: "Length1",
        value: pe
      })), at.length != 0) if (at.split("/").length - 1 == 1) Ze.push({
        key: "Filter",
        value: at
      });
      else {
        Ze.push({
          key: "Filter",
          value: "[" + at + "]"
        });
        for (var bt = 0; bt < Ze.length; bt += 1) if (Ze[bt].key === "DecodeParms") {
          for (var Ot = [], Jt = 0; Jt < Te.reverseChain.split("/").length - 1; Jt += 1) Ot.push("null");
          Ot.push(Ze[bt].value), Ze[bt].value = "[" + Ot.join(" ") + "]";
        }
      }
      I("<<");
      for (var It = 0; It < Ze.length; It++) I("/" + Ze[It].key + " " + Ze[It].value);
      I(">>"), Te.data.length !== 0 && (I("stream"), I(Me(Te.data)), I("endstream"));
    }, li = p.__private__.putPage = function(c) {
      var b = c.number, M = c.data, z = c.objId, Z = c.contentsObjId;
      on(z, true), I("<</Type /Page"), I("/Parent " + c.rootDictionaryObjId + " 0 R"), I("/Resources " + c.resourceDictionaryObjId + " 0 R"), I("/MediaBox [" + parseFloat(ee(c.mediaBox.bottomLeftX)) + " " + parseFloat(ee(c.mediaBox.bottomLeftY)) + " " + ee(c.mediaBox.topRightX) + " " + ee(c.mediaBox.topRightY) + "]"), c.cropBox !== null && I("/CropBox [" + ee(c.cropBox.bottomLeftX) + " " + ee(c.cropBox.bottomLeftY) + " " + ee(c.cropBox.topRightX) + " " + ee(c.cropBox.topRightY) + "]"), c.bleedBox !== null && I("/BleedBox [" + ee(c.bleedBox.bottomLeftX) + " " + ee(c.bleedBox.bottomLeftY) + " " + ee(c.bleedBox.topRightX) + " " + ee(c.bleedBox.topRightY) + "]"), c.trimBox !== null && I("/TrimBox [" + ee(c.trimBox.bottomLeftX) + " " + ee(c.trimBox.bottomLeftY) + " " + ee(c.trimBox.topRightX) + " " + ee(c.trimBox.topRightY) + "]"), c.artBox !== null && I("/ArtBox [" + ee(c.artBox.bottomLeftX) + " " + ee(c.artBox.bottomLeftY) + " " + ee(c.artBox.topRightX) + " " + ee(c.artBox.topRightY) + "]"), typeof c.userUnit == "number" && c.userUnit !== 1 && I("/UserUnit " + c.userUnit), xt.publish("putPage", {
        objId: z,
        pageContext: $e[b],
        pageNumber: b,
        page: M
      }), I("/Contents " + Z + " 0 R"), I(">>"), I("endobj");
      var pe = M.join(`
`);
      return U === $ && (pe += `
Q`), on(Z, true), Tn({
        data: pe,
        filters: Jn(),
        objectId: Z
      }), I("endobj"), z;
    }, or = p.__private__.putPages = function() {
      var c, b, M = [];
      for (c = 1; c <= ut; c++) $e[c].objId = an(), $e[c].contentsObjId = an();
      for (c = 1; c <= ut; c++) M.push(li({
        number: c,
        data: _e[c],
        objId: $e[c].objId,
        contentsObjId: $e[c].contentsObjId,
        mediaBox: $e[c].mediaBox,
        cropBox: $e[c].cropBox,
        bleedBox: $e[c].bleedBox,
        trimBox: $e[c].trimBox,
        artBox: $e[c].artBox,
        userUnit: $e[c].userUnit,
        rootDictionaryObjId: Br,
        resourceDictionaryObjId: Kn
      }));
      on(Br, true), I("<</Type /Pages");
      var z = "/Kids [";
      for (b = 0; b < ut; b++) z += M[b] + " 0 R ";
      I(z + "]"), I("/Count " + ut), I(">>"), I("endobj"), xt.publish("postPutPages");
    }, ci = function(c) {
      xt.publish("putFont", {
        font: c,
        out: I,
        newObject: Dt,
        putStream: Tn
      }), c.isAlreadyPutted !== true && (c.objectNumber = Dt(), I("<<"), I("/Type /Font"), I("/BaseFont /" + Ji(c.postScriptName)), I("/Subtype /Type1"), typeof c.encoding == "string" && I("/Encoding /" + c.encoding), I("/FirstChar 32"), I("/LastChar 255"), I(">>"), I("endobj"));
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
      var M = c.pages[1].join(`
`);
      Tn({
        data: M,
        additionalKeyValues: b,
        objectId: c.objectNumber
      }), I("endobj");
    }, Fi = function(c, b) {
      b || (b = 21);
      var M = Dt(), z = function(we, Me) {
        var Te, Ze = [], at = 1 / (Me - 1);
        for (Te = 0; Te < 1; Te += at) Ze.push(Te);
        if (Ze.push(1), we[0].offset != 0) {
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
        for (var Jt = "", It = 0, Qt = 0; Qt < Ze.length; Qt++) {
          for (Te = Ze[Qt]; Te > we[It + 1].offset; ) It++;
          var Xt = we[It].offset, ln = (Te - Xt) / (we[It + 1].offset - Xt), Pr = we[It].color, Zn = we[It + 1].color;
          Jt += B(Math.round((1 - ln) * Pr[0] + ln * Zn[0]).toString(16)) + B(Math.round((1 - ln) * Pr[1] + ln * Zn[1]).toString(16)) + B(Math.round((1 - ln) * Pr[2] + ln * Zn[2]).toString(16));
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
        objectId: M
      }), I("endobj"), c.objectNumber = Dt(), I("<< /ShadingType " + c.type), I("/ColorSpace /DeviceRGB");
      var pe = "/Coords [" + ee(parseFloat(c.coords[0])) + " " + ee(parseFloat(c.coords[1])) + " ";
      c.type === 2 ? pe += ee(parseFloat(c.coords[2])) + " " + ee(parseFloat(c.coords[3])) : pe += ee(parseFloat(c.coords[2])) + " " + ee(parseFloat(c.coords[3])) + " " + ee(parseFloat(c.coords[4])) + " " + ee(parseFloat(c.coords[5])), I(pe += "]"), c.matrix && I("/Matrix [" + c.matrix.toString() + "]"), I("/Function " + M + " 0 R"), I("/Extend [true true]"), I(">>"), I("endobj");
    }, Mi = function(c, b) {
      var M = an(), z = Dt();
      b.push({
        resourcesOid: M,
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
        value: M + " 0 R"
      }), c.matrix && Z.push({
        key: "Matrix",
        value: "[" + c.matrix.toString() + "]"
      }), Tn({
        data: c.stream,
        additionalKeyValues: Z,
        objectId: c.objectNumber
      }), I("endobj");
    }, Zs = function(c) {
      for (var b in c.objectNumber = Dt(), I("<<"), c) switch (b) {
        case "opacity":
          I("/ca " + _(c[b]));
          break;
        case "stroke-opacity":
          I("/CA " + _(c[b]));
      }
      I(">>"), I("endobj");
    }, ia = function(c) {
      on(c.resourcesOid, true), I("<<"), I("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), function() {
        for (var b in I("/Font <<"), lt) lt.hasOwnProperty(b) && (w === false || w === true && S.hasOwnProperty(b)) && I("/" + b + " " + lt[b].objectNumber + " 0 R");
        I(">>");
      }(), function() {
        if (Object.keys(We).length > 0) {
          for (var b in I("/Shading <<"), We) We.hasOwnProperty(b) && We[b] instanceof Li && We[b].objectNumber >= 0 && I("/" + b + " " + We[b].objectNumber + " 0 R");
          xt.publish("putShadingPatternDict"), I(">>");
        }
      }(), function(b) {
        if (Object.keys(We).length > 0) {
          for (var M in I("/Pattern <<"), We) We.hasOwnProperty(M) && We[M] instanceof p.TilingPattern && We[M].objectNumber >= 0 && We[M].objectNumber < b && I("/" + M + " " + We[M].objectNumber + " 0 R");
          xt.publish("putTilingPatternDict"), I(">>");
        }
      }(c.objectOid), function() {
        if (Object.keys(Ye).length > 0) {
          var b;
          for (b in I("/ExtGState <<"), Ye) Ye.hasOwnProperty(b) && Ye[b].objectNumber >= 0 && I("/" + b + " " + Ye[b].objectNumber + " 0 R");
          xt.publish("putGStateDict"), I(">>");
        }
      }(), function() {
        for (var b in I("/XObject <<"), dn) dn.hasOwnProperty(b) && dn[b].objectNumber >= 0 && I("/" + b + " " + dn[b].objectNumber + " 0 R");
        xt.publish("putXobjectDict"), I(">>");
      }(), I(">>"), I("endobj");
    }, za = function(c) {
      ct[c.fontName] = ct[c.fontName] || {}, ct[c.fontName][c.fontStyle] = c.id;
    }, Ha = function(c, b, M, z, Z) {
      var pe = {
        id: "F" + (Object.keys(lt).length + 1).toString(10),
        postScriptName: c,
        fontName: b,
        fontStyle: M,
        encoding: z,
        isStandardFont: Z || false,
        metadata: {}
      };
      return xt.publish("addFont", {
        font: pe,
        instance: this
      }), lt[pe.id] = pe, za(pe), pe.id;
    }, Bn = p.__private__.pdfEscape = p.pdfEscape = function(c, b) {
      return function(M, z) {
        var Z, pe, we, Me, Te, Ze, at, bt, Ot;
        if (we = (z = z || {}).sourceEncoding || "Unicode", Te = z.outputEncoding, (z.autoencode || Te) && lt[De].metadata && lt[De].metadata[we] && lt[De].metadata[we].encoding && (Me = lt[De].metadata[we].encoding, !Te && lt[De].encoding && (Te = lt[De].encoding), !Te && Me.codePages && (Te = Me.codePages[0]), typeof Te == "string" && (Te = Me[Te]), Te)) {
          for (at = false, Ze = [], Z = 0, pe = M.length; Z < pe; Z++) (bt = Te[M.charCodeAt(Z)]) ? Ze.push(String.fromCharCode(bt)) : Ze.push(M[Z]), Ze[Z].charCodeAt(0) >> 8 && (at = true);
          M = Ze.join("");
        }
        for (Z = M.length; at === void 0 && Z !== 0; ) M.charCodeAt(Z - 1) >> 8 && (at = true), Z--;
        if (!at) return M;
        for (Ze = z.noBOM ? [] : [
          254,
          255
        ], Z = 0, pe = M.length; Z < pe; Z++) {
          if ((Ot = (bt = M.charCodeAt(Z)) >> 8) >> 8) throw new Error("Character at position " + Z + " of string '" + M + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
          Ze.push(Ot), Ze.push(bt - (Ot << 8));
        }
        return String.fromCharCode.apply(void 0, Ze);
      }(c, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, aa = p.__private__.beginPage = function(c) {
      _e[++ut] = [], $e[ut] = {
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
      }, Va(ut), je(_e[T]);
    }, Wa = function(c, b) {
      var M, z, Z;
      switch (t = b || t, typeof c == "string" && (M = L(c.toLowerCase()), Array.isArray(M) && (z = M[0], Z = M[1])), Array.isArray(c) && (z = c[0] * it, Z = c[1] * it), isNaN(z) && (z = s[0], Z = s[1]), (z > 14400 || Z > 14400) && (Pt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), z = Math.min(14400, z), Z = Math.min(14400, Z)), s = [
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
      aa(s), Qe(la), I(Ti), ua !== 0 && I(ua + " J"), fa !== 0 && I(fa + " j"), xt.publish("addPage", {
        pageNumber: ut
      });
    }, sa = function(c) {
      c > 0 && c <= ut && (_e.splice(c, 1), $e.splice(c, 1), ut--, T > ut && (T = ut), this.setPage(T));
    }, Va = function(c) {
      c > 0 && c <= ut && (T = c);
    }, Ga = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
      return _e.length - 1;
    }, $a = function(c, b, M) {
      var z, Z = void 0;
      return M = M || {}, c = c !== void 0 ? c : lt[De].fontName, b = b !== void 0 ? b : lt[De].fontStyle, z = c.toLowerCase(), ct[z] !== void 0 && ct[z][b] !== void 0 ? Z = ct[z][b] : ct[c] !== void 0 && ct[c][b] !== void 0 ? Z = ct[c][b] : M.disableWarning === false && Pt.warn("Unable to look up font label for font '" + c + "', '" + b + "'. Refer to getFontList() for available fonts."), Z || M.noFallback || (Z = ct.times[b]) == null && (Z = ct.times.normal), Z;
    }, lr = p.__private__.putInfo = function() {
      var c = Dt(), b = function(z) {
        return z;
      };
      for (var M in g !== null && (b = Zt.encryptor(c, 0)), I("<<"), I("/Producer (" + Bn(b("jsPDF " + qe.version)) + ")"), ht) ht.hasOwnProperty(M) && ht[M] && I("/" + M.substr(0, 1).toUpperCase() + M.substr(1) + " (" + Bn(b(ht[M])) + ")");
      I("/CreationDate (" + Bn(b(ce)) + ")"), I(">>"), I("endobj");
    }, Ri = p.__private__.putCatalog = function(c) {
      var b = (c = c || {}).rootDictionaryObjId || Br;
      switch (Dt(), I("<<"), I("/Type /Catalog"), I("/Pages " + b + " 0 R"), Ge || (Ge = "fullwidth"), Ge) {
        case "fullwidth":
          I("/OpenAction [3 0 R /FitH null]");
          break;
        case "fullheight":
          I("/OpenAction [3 0 R /FitV null]");
          break;
        case "fullpage":
          I("/OpenAction [3 0 R /Fit]");
          break;
        case "original":
          I("/OpenAction [3 0 R /XYZ null null 1]");
          break;
        default:
          var M = "" + Ge;
          M.substr(M.length - 1) === "%" && (Ge = parseInt(Ge) / 100), typeof Ge == "number" && I("/OpenAction [3 0 R /XYZ null null " + _(Ge) + "]");
      }
      switch (ft || (ft = "continuous"), ft) {
        case "continuous":
          I("/PageLayout /OneColumn");
          break;
        case "single":
          I("/PageLayout /SinglePage");
          break;
        case "two":
        case "twoleft":
          I("/PageLayout /TwoColumnLeft");
          break;
        case "tworight":
          I("/PageLayout /TwoColumnRight");
      }
      He && I("/PageMode /" + He), xt.publish("putCatalog"), I(">>"), I("endobj");
    }, Qs = p.__private__.putTrailer = function() {
      I("trailer"), I("<<"), I("/Size " + (q + 1)), I("/Root " + q + " 0 R"), I("/Info " + (q - 1) + " 0 R"), g !== null && I("/Encrypt " + Zt.oid + " 0 R"), I("/ID [ <" + ue + "> <" + ue + "> ]"), I(">>");
    }, Yt = p.__private__.putHeader = function() {
      I("%PDF-" + j), I("%\xBA\xDF\xAC\xE0");
    }, Ka = p.__private__.putXRef = function() {
      var c = "0000000000";
      I("xref"), I("0 " + (q + 1)), I("0000000000 65535 f ");
      for (var b = 1; b <= q; b++) typeof W[b] == "function" ? I((c + W[b]()).slice(-10) + " 00000 n ") : W[b] !== void 0 ? I((c + W[b]).slice(-10) + " 00000 n ") : I("0000000000 00000 n ");
    }, cr = p.__private__.buildDocument = function() {
      var c;
      q = 0, Q = 0, J = [], W = [], se = [], Br = an(), Kn = an(), je(J), xt.publish("buildDocument"), Yt(), or(), function() {
        xt.publish("putAdditionalObjects");
        for (var M = 0; M < se.length; M++) {
          var z = se[M];
          on(z.objId, true), I(z.content), I("endobj");
        }
        xt.publish("postPutAdditionalObjects");
      }(), c = [], function() {
        for (var M in lt) lt.hasOwnProperty(M) && (w === false || w === true && S.hasOwnProperty(M)) && ci(lt[M]);
      }(), function() {
        var M;
        for (M in Ye) Ye.hasOwnProperty(M) && Zs(Ye[M]);
      }(), function() {
        for (var M in dn) dn.hasOwnProperty(M) && Ei(dn[M]);
      }(), function(M) {
        var z;
        for (z in We) We.hasOwnProperty(z) && (We[z] instanceof Li ? Fi(We[z]) : We[z] instanceof Xi && Mi(We[z], M));
      }(c), xt.publish("putResources"), c.forEach(ia), ia({
        resourcesOid: Kn,
        objectOid: Number.MAX_SAFE_INTEGER
      }), xt.publish("postPutResources"), g !== null && (Zt.oid = Dt(), I("<<"), I("/Filter /Standard"), I("/V " + Zt.v), I("/R " + Zt.r), I("/U <" + Zt.toHexString(Zt.U) + ">"), I("/O <" + Zt.toHexString(Zt.O) + ">"), I("/P " + Zt.P), I(">>"), I("endobj")), lr(), Ri();
      var b = Q;
      return Ka(), Qs(), I("startxref"), I("" + b), I("%%EOF"), je(_e[T]), J.join(`
`);
    }, Oi = p.__private__.getBlob = function(c) {
      return new Blob([
        Je(c)
      ], {
        type: "application/pdf"
      });
    }, Ya = p.output = p.__private__.output = (Dn = function(c, b) {
      switch (typeof (b = b || {}) == "string" ? b = {
        filename: b
      } : b.filename = b.filename || "generated.pdf", c) {
        case void 0:
          return cr();
        case "save":
          p.save(b.filename);
          break;
        case "arraybuffer":
          return Je(cr());
        case "blob":
          return Oi(cr());
        case "bloburi":
        case "bloburl":
          if (Xe.URL !== void 0 && typeof Xe.URL.createObjectURL == "function") return Xe.URL && Xe.URL.createObjectURL(Oi(cr())) || void 0;
          Pt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
          break;
        case "datauristring":
        case "dataurlstring":
          var M = "", z = cr();
          try {
            M = tu(z);
          } catch {
            M = tu(unescape(encodeURIComponent(z)));
          }
          return "data:application/pdf;filename=" + b.filename + ";base64," + M;
        case "pdfobjectnewwindow":
          if (Object.prototype.toString.call(Xe) === "[object Window]") {
            var Z = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", pe = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
            b.pdfObjectUrl && (Z = b.pdfObjectUrl, pe = "");
            var we = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + Z + '"' + pe + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(b) + ");<\/script></body></html>", Me = Xe.open();
            return Me !== null && Me.document.write(we), Me;
          }
          throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
        case "pdfjsnewwindow":
          if (Object.prototype.toString.call(Xe) === "[object Window]") {
            var Te = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (b.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + b.filename + '" width="500px" height="400px" /></body></html>', Ze = Xe.open();
            if (Ze !== null) {
              Ze.document.write(Te);
              var at = this;
              Ze.document.documentElement.querySelector("#pdfViewer").onload = function() {
                Ze.document.title = b.filename, Ze.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(at.output("bloburl"));
              };
            }
            return Ze;
          }
          throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
        case "dataurlnewwindow":
          if (Object.prototype.toString.call(Xe) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
          var bt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", b) + '"></iframe></body></html>', Ot = Xe.open();
          if (Ot !== null && (Ot.document.write(bt), Ot.document.title = b.filename), Ot || typeof safari > "u") return Ot;
          break;
        case "datauri":
        case "dataurl":
          return Xe.document.location.href = this.output("datauristring", b);
        default:
          return null;
      }
    }, Dn.foo = function() {
      try {
        return Dn.apply(this, arguments);
      } catch (M) {
        var c = M.stack || "";
        ~c.indexOf(" at ") && (c = c.split(" at ")[1]);
        var b = "Error in function " + c.split(`
`)[0].split("<")[0] + ": " + M.message;
        if (!Xe.console) throw new Error(b);
        Xe.console.error(b, M), Xe.alert && alert(b);
      }
    }, Dn.foo.bar = Dn, Dn.foo), qn = function(c) {
      return Array.isArray(si) === true && si.indexOf(c) > -1;
    };
    switch (r) {
      case "pt":
        it = 1;
        break;
      case "mm":
        it = 72 / 25.4;
        break;
      case "cm":
        it = 72 / 2.54;
        break;
      case "in":
        it = 72;
        break;
      case "px":
        it = qn("px_scaling") == 1 ? 0.75 : 96 / 72;
        break;
      case "pc":
      case "em":
        it = 12;
        break;
      case "ex":
        it = 6;
        break;
      default:
        if (typeof r != "number") throw new Error("Invalid unit: " + r);
        it = r;
    }
    var Zt = null;
    xe(), oe();
    var xr = p.__private__.getPageInfo = p.getPageInfo = function(c) {
      if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
      return {
        objId: $e[c].objId,
        pageNumber: c,
        pageContext: $e[c]
      };
    }, Ja = p.__private__.getPageInfoByObjId = function(c) {
      if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
      for (var b in $e) if ($e[b].objId === c) break;
      return xr(b);
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
      return Va.apply(this, arguments), je.call(this, _e[T]), this;
    }, p.insertPage = function(c) {
      return this.addPage(), this.movePage(T, c), this;
    }, p.movePage = function(c, b) {
      var M, z;
      if (c > b) {
        M = _e[c], z = $e[c];
        for (var Z = c; Z > b; Z--) _e[Z] = _e[Z - 1], $e[Z] = $e[Z - 1];
        _e[b] = M, $e[b] = z, this.setPage(b);
      } else if (c < b) {
        M = _e[c], z = $e[c];
        for (var pe = c; pe < b; pe++) _e[pe] = _e[pe + 1], $e[pe] = $e[pe + 1];
        _e[b] = M, $e[b] = z, this.setPage(b);
      }
      return this;
    }, p.deletePage = function() {
      return sa.apply(this, arguments), this;
    }, p.__private__.text = p.text = function(c, b, M, z, Z) {
      var pe, we, Me, Te, Ze, at, bt, Ot, Jt, It = (z = z || {}).scope || this;
      if (typeof c == "number" && typeof b == "number" && (typeof M == "string" || Array.isArray(M))) {
        var Qt = M;
        M = b, b = c, c = Qt;
      }
      if (arguments[3] instanceof Ke == 0 ? (Me = arguments[4], Te = arguments[5], Lt(bt = arguments[3]) === "object" && bt !== null || (typeof Me == "string" && (Te = Me, Me = null), typeof bt == "string" && (Te = bt, bt = null), typeof bt == "number" && (Me = bt, bt = null), z = {
        flags: bt,
        angle: Me,
        align: Te
      })) : (H("The transform parameter of text() with a Matrix value"), Jt = Z), isNaN(b) || isNaN(M) || c == null) throw new Error("Invalid arguments passed to jsPDF.text");
      if (c.length === 0) return It;
      var Xt, ln = "", Pr = typeof z.lineHeightFactor == "number" ? z.lineHeightFactor : fi, Zn = It.internal.scaleFactor;
      function Cr(Nt) {
        return Nt = Nt.split("	").join(Array(z.TabLen || 9).join(" ")), Bn(Nt, bt);
      }
      function ma(Nt) {
        for (var St, Ht = Nt.concat(), en = [], Er = Ht.length; Er--; ) typeof (St = Ht.shift()) == "string" ? en.push(St) : Array.isArray(Nt) && (St.length === 1 || St[1] === void 0 && St[2] === void 0) ? en.push(St[0]) : en.push([
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
          for (var en, Er, La = Nt.concat(), Hi = [], os = La.length; os--; ) typeof (en = La.shift()) == "string" ? Hi.push(St(en)[0]) : Array.isArray(en) && typeof en[0] == "string" && (Er = St(en[0], en[1], en[2]), Hi.push([
            Er[0],
            Er[1],
            Er[2]
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
      var bi = Ne / It.internal.scaleFactor, vi = bi * (Pr - 1);
      switch (z.baseline) {
        case "bottom":
          M -= vi;
          break;
        case "top":
          M += bi - vi;
          break;
        case "hanging":
          M += bi - 2 * vi;
          break;
        case "middle":
          M += bi / 2 - vi;
      }
      if ((at = z.maxWidth || 0) > 0 && (typeof c == "string" ? c = It.splitTextToSize(c, at) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(Nt, St) {
        return Nt.concat(It.splitTextToSize(St, at));
      }, []))), pe = {
        text: c,
        x: b,
        y: M,
        options: z,
        mutex: {
          pdfEscape: Bn,
          activeFontKey: De,
          fonts: lt,
          activeFontSize: Ne
        }
      }, xt.publish("preProcessText", pe), c = pe.text, Me = (z = pe.options).angle, Jt instanceof Ke == 0 && Me && typeof Me == "number") {
        Me *= Math.PI / 180, z.rotationDirection === 0 && (Me = -Me), U === $ && (Me = -Me);
        var ga = Math.cos(Me), ba = Math.sin(Me);
        Jt = new Ke(ga, ba, -ba, ga, 0, 0);
      } else Me && Me instanceof Ke && (Jt = Me);
      U !== $ || Jt || (Jt = yr), (Ze = z.charSpace || Ar) !== void 0 && (ln += ee(G(Ze)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ot = z.horizontalScale) !== void 0 && (ln += ee(100 * Ot) + ` Tz
`), z.lang;
      var wn = -1, Ir = z.renderingMode !== void 0 ? z.renderingMode : z.stroke, Ui = It.internal.getCurrentPageInfo().pageContext;
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
      var as = Ui.usedRenderingMode !== void 0 ? Ui.usedRenderingMode : -1;
      wn !== -1 ? ln += wn + ` Tr
` : as !== -1 && (ln += `0 Tr
`), wn !== -1 && (Ui.usedRenderingMode = wn), Te = z.align || "left";
      var Un, wi = Ne * Pr, va = It.internal.pageSize.getWidth(), wa = lt[De];
      Ze = z.charSpace || Ar, at = z.maxWidth || 0, bt = Object.assign({
        autoencode: true,
        noBOM: true
      }, z.flags);
      var zr = [], yi = function(Nt) {
        return It.getStringUnitWidth(Nt, {
          font: wa,
          charSpace: Ze,
          fontSize: Ne,
          doKerning: false
        }) * Ne / Zn;
      };
      if (Object.prototype.toString.call(c) === "[object Array]") {
        var kn;
        we = ma(c), Te !== "left" && (Un = we.map(yi));
        var Pn, Hr = 0;
        if (Te === "right") {
          b -= Un[0], c = [], cn = we.length;
          for (var jr = 0; jr < cn; jr++) jr === 0 ? (Pn = Nr(b), kn = _r(M)) : (Pn = G(Hr - Un[jr]), kn = -wi), c.push([
            we[jr],
            Pn,
            kn
          ]), Hr = Un[jr];
        } else if (Te === "center") {
          b -= Un[0] / 2, c = [], cn = we.length;
          for (var Wr = 0; Wr < cn; Wr++) Wr === 0 ? (Pn = Nr(b), kn = _r(M)) : (Pn = G((Hr - Un[Wr]) / 2), kn = -wi), c.push([
            we[Wr],
            Pn,
            kn
          ]), Hr = Un[Wr];
        } else if (Te === "left") {
          c = [], cn = we.length;
          for (var ya = 0; ya < cn; ya++) c.push(we[ya]);
        } else if (Te === "justify" && wa.encoding === "Identity-H") {
          c = [], cn = we.length, at = at !== 0 ? at : va;
          for (var zi = 0, zt = 0; zt < cn; zt++) if (kn = zt === 0 ? _r(M) : -wi, Pn = zt === 0 ? Nr(b) : zi, zt < cn - 1) {
            var ss = G((at - Un[zt]) / (we[zt].split(" ").length - 1)), fr = we[zt].split(" ");
            c.push([
              fr[0] + " ",
              Pn,
              kn
            ]), zi = 0;
            for (var hr = 1; hr < fr.length; hr++) {
              var xa = (yi(fr[hr - 1] + " " + fr[hr]) - yi(fr[hr])) * Zn + ss;
              hr == fr.length - 1 ? c.push([
                fr[hr],
                xa,
                0
              ]) : c.push([
                fr[hr] + " ",
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
          if (Te !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
          for (c = [], cn = we.length, at = at !== 0 ? at : va, zt = 0; zt < cn; zt++) {
            kn = zt === 0 ? _r(M) : -wi, Pn = zt === 0 ? Nr(b) : 0;
            var Na = we[zt].split(" ").length - 1, _a = Na > 0 ? (at - Un[zt]) / Na : 0;
            zt < cn - 1 ? zr.push(ee(G(_a))) : zr.push(0), c.push([
              we[zt],
              Pn,
              kn
            ]);
          }
        }
      }
      (typeof z.R2L == "boolean" ? z.R2L : Ve) === true && (c = qi(c, function(Nt, St, Ht) {
        return [
          Nt.split("").reverse().join(""),
          St,
          Ht
        ];
      })), pe = {
        text: c,
        x: b,
        y: M,
        options: z,
        mutex: {
          pdfEscape: Bn,
          activeFontKey: De,
          fonts: lt,
          activeFontSize: Ne
        }
      }, xt.publish("postProcessText", pe), c = pe.text, Xt = pe.mutex.isHex || false;
      var Aa = lt[De].encoding;
      Aa !== "WinAnsiEncoding" && Aa !== "StandardEncoding" || (c = qi(c, function(Nt, St, Ht) {
        return [
          Cr(Nt),
          St,
          Ht
        ];
      })), we = ma(c), c = [];
      for (var Vr, Gr, $r, xi = Array.isArray(we[0]) ? 1 : 0, Kr = "", Ni = function(Nt, St, Ht) {
        var en = "";
        return Ht instanceof Ke ? (Ht = typeof z.angle == "number" ? wr(Ht, new Ke(1, 0, 0, 1, Nt, St)) : wr(new Ke(1, 0, 0, 1, Nt, St), Ht), U === $ && (Ht = wr(new Ke(1, 0, 0, -1, 0, 0), Ht)), en = Ht.join(" ") + ` Tm
`) : en = ee(Nt) + " " + ee(St) + ` Td
`, en;
      }, zn = 0; zn < we.length; zn++) {
        switch (Kr = "", xi) {
          case 1:
            $r = (Xt ? "<" : "(") + we[zn][0] + (Xt ? ">" : ")"), Vr = parseFloat(we[zn][1]), Gr = parseFloat(we[zn][2]);
            break;
          case 0:
            $r = (Xt ? "<" : "(") + we[zn] + (Xt ? ">" : ")"), Vr = Nr(b), Gr = _r(M);
        }
        zr !== void 0 && zr[zn] !== void 0 && (Kr = zr[zn] + ` Tw
`), zn === 0 ? c.push(Kr + Ni(Vr, Gr, Jt) + $r) : xi === 0 ? c.push(Kr + $r) : xi === 1 && c.push(Kr + Ni(Vr, Gr, Jt) + $r);
      }
      c = xi === 0 ? c.join(` Tj
T* `) : c.join(` Tj
`), c += ` Tj
`;
      var dr = `BT
/`;
      return dr += De + " " + Ne + ` Tf
`, dr += ee(Ne * Pr) + ` TL
`, dr += hi + `
`, dr += ln, dr += c, I(dr += "ET"), S[De] = true, It;
    };
    var to = p.__private__.clip = p.clip = function(c) {
      return I(c === "evenodd" ? "W*" : "W"), this;
    };
    p.clipEvenOdd = function() {
      return to("evenodd");
    }, p.__private__.discardPath = p.discardPath = function() {
      return I("n"), this;
    };
    var ur = p.__private__.isValidStyle = function(c) {
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
      return ur(c) && (d = c), this;
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
      return I("h"), this;
    };
    p.stroke = function() {
      return I("S"), this;
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
      Lt(b) === "object" ? ro(b, c) : I(c);
    }, ui = function(c) {
      c === null || U === $ && c === void 0 || (c = Xa(c), I(c));
    };
    function no(c, b, M, z, Z) {
      var pe = new Xi(b || this.boundingBox, M || this.xStep, z || this.yStep, this.gState, Z || this.matrix);
      pe.stream = this.stream;
      var we = c + "$$" + this.cloneIndex++ + "$$";
      return On(we, pe), pe;
    }
    var ro = function(c, b) {
      var M = Ct[c.key], z = We[M];
      if (z instanceof Li) I("q"), I(io(b)), z.gState && p.setGState(z.gState), I(c.matrix.toString() + " cm"), I("/" + M + " sh"), I("Q");
      else if (z instanceof Xi) {
        var Z = new Ke(1, 0, 0, -1, 0, pi());
        c.matrix && (Z = Z.multiply(c.matrix || yr), M = no.call(z, c.key, c.boundingBox, c.xStep, c.yStep, Z).id), I("q"), I("/Pattern cs"), I("/" + M + " scn"), z.gState && p.setGState(z.gState), I(b), I("Q");
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
      return I(ee(G(c)) + " " + ee(V(b)) + " m"), this;
    }, Qa = p.lineTo = function(c, b) {
      return I(ee(G(c)) + " " + ee(V(b)) + " l"), this;
    }, Xn = p.curveTo = function(c, b, M, z, Z, pe) {
      return I([
        ee(G(c)),
        ee(V(b)),
        ee(G(M)),
        ee(V(z)),
        ee(G(Z)),
        ee(V(pe)),
        "c"
      ].join(" ")), this;
    };
    p.__private__.line = p.line = function(c, b, M, z, Z) {
      if (isNaN(c) || isNaN(b) || isNaN(M) || isNaN(z) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.line");
      return U === Y ? this.lines([
        [
          M - c,
          z - b
        ]
      ], c, b, [
        1,
        1
      ], Z || "S") : this.lines([
        [
          M - c,
          z - b
        ]
      ], c, b, [
        1,
        1
      ]).stroke();
    }, p.__private__.lines = p.lines = function(c, b, M, z, Z, pe) {
      var we, Me, Te, Ze, at, bt, Ot, Jt, It, Qt, Xt, ln;
      if (typeof c == "number" && (ln = M, M = b, b = c, c = ln), z = z || [
        1,
        1
      ], pe = pe || false, isNaN(b) || isNaN(M) || !Array.isArray(c) || !Array.isArray(z) || !ur(Z) || typeof pe != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
      for (oa(b, M), we = z[0], Me = z[1], Ze = c.length, Qt = b, Xt = M, Te = 0; Te < Ze; Te++) (at = c[Te]).length === 2 ? (Qt = at[0] * we + Qt, Xt = at[1] * Me + Xt, Qa(Qt, Xt)) : (bt = at[0] * we + Qt, Ot = at[1] * Me + Xt, Jt = at[2] * we + Qt, It = at[3] * Me + Xt, Qt = at[4] * we + Qt, Xt = at[5] * Me + Xt, Xn(bt, Ot, Jt, It, Qt, Xt));
      return pe && Za(), ui(Z), this;
    }, p.path = function(c) {
      for (var b = 0; b < c.length; b++) {
        var M = c[b], z = M.c;
        switch (M.op) {
          case "m":
            oa(z[0], z[1]);
            break;
          case "l":
            Qa(z[0], z[1]);
            break;
          case "c":
            Xn.apply(this, z);
            break;
          case "h":
            Za();
        }
      }
      return this;
    }, p.__private__.rect = p.rect = function(c, b, M, z, Z) {
      if (isNaN(c) || isNaN(b) || isNaN(M) || isNaN(z) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.rect");
      return U === Y && (z = -z), I([
        ee(G(c)),
        ee(V(b)),
        ee(G(M)),
        ee(G(z)),
        "re"
      ].join(" ")), ui(Z), this;
    }, p.__private__.triangle = p.triangle = function(c, b, M, z, Z, pe, we) {
      if (isNaN(c) || isNaN(b) || isNaN(M) || isNaN(z) || isNaN(Z) || isNaN(pe) || !ur(we)) throw new Error("Invalid arguments passed to jsPDF.triangle");
      return this.lines([
        [
          M - c,
          z - b
        ],
        [
          Z - M,
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
    }, p.__private__.roundedRect = p.roundedRect = function(c, b, M, z, Z, pe, we) {
      if (isNaN(c) || isNaN(b) || isNaN(M) || isNaN(z) || isNaN(Z) || isNaN(pe) || !ur(we)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
      var Me = 4 / 3 * (Math.SQRT2 - 1);
      return Z = Math.min(Z, 0.5 * M), pe = Math.min(pe, 0.5 * z), this.lines([
        [
          M - 2 * Z,
          0
        ],
        [
          Z * Me,
          0,
          Z,
          pe - pe * Me,
          Z,
          pe
        ],
        [
          0,
          z - 2 * pe
        ],
        [
          0,
          pe * Me,
          -Z * Me,
          pe,
          -Z,
          pe
        ],
        [
          2 * Z - M,
          0
        ],
        [
          -Z * Me,
          0,
          -Z,
          -pe * Me,
          -Z,
          -pe
        ],
        [
          0,
          2 * pe - z
        ],
        [
          0,
          -pe * Me,
          Z * Me,
          -pe,
          Z,
          -pe
        ]
      ], c + Z, b, [
        1,
        1
      ], we, true), this;
    }, p.__private__.ellipse = p.ellipse = function(c, b, M, z, Z) {
      if (isNaN(c) || isNaN(b) || isNaN(M) || isNaN(z) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
      var pe = 4 / 3 * (Math.SQRT2 - 1) * M, we = 4 / 3 * (Math.SQRT2 - 1) * z;
      return oa(c + M, b), Xn(c + M, b - we, c + pe, b - z, c, b - z), Xn(c - pe, b - z, c - M, b - we, c - M, b), Xn(c - M, b + we, c - pe, b + z, c, b + z), Xn(c + pe, b + z, c + M, b + we, c + M, b), ui(Z), this;
    }, p.__private__.circle = p.circle = function(c, b, M, z) {
      if (isNaN(c) || isNaN(b) || isNaN(M) || !ur(z)) throw new Error("Invalid arguments passed to jsPDF.circle");
      return this.ellipse(c, b, M, M, z);
    }, p.setFont = function(c, b, M) {
      return M && (b = fe(b, M)), De = $a(c, b, {
        disableWarning: false
      }), this;
    };
    var ao = p.__private__.getFont = p.getFont = function() {
      return lt[$a.apply(p, arguments)];
    };
    p.__private__.getFontList = p.getFontList = function() {
      var c, b, M = {};
      for (c in ct) if (ct.hasOwnProperty(c)) for (b in M[c] = [], ct[c]) ct[c].hasOwnProperty(b) && M[c].push(b);
      return M;
    }, p.addFont = function(c, b, M, z, Z) {
      var pe = [
        "StandardEncoding",
        "MacRomanEncoding",
        "Identity-H",
        "WinAnsiEncoding"
      ];
      return arguments[3] && pe.indexOf(arguments[3]) !== -1 ? Z = arguments[3] : arguments[3] && pe.indexOf(arguments[3]) == -1 && (M = fe(M, z)), Ha.call(this, c, b, M, Z = Z || "Identity-H");
    };
    var fi, la = n.lineWidth || 0.200025, so = p.__private__.getLineWidth = p.getLineWidth = function() {
      return la;
    }, Qe = p.__private__.setLineWidth = p.setLineWidth = function(c) {
      return la = c, I(ee(G(c)) + " w"), this;
    };
    p.__private__.setLineDash = qe.API.setLineDash = qe.API.setLineDashPattern = function(c, b) {
      if (c = c || [], b = b || 0, isNaN(b) || !Array.isArray(c)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
      return c = c.map(function(M) {
        return ee(G(M));
      }).join(" "), b = ee(G(b)), I("[" + c + "] " + b + " d"), this;
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
    var Nr = p.__private__.getHorizontalCoordinate = function(c) {
      return G(c);
    }, _r = p.__private__.getVerticalCoordinate = function(c) {
      return U === $ ? c : $e[T].mediaBox.topRightY - $e[T].mediaBox.bottomLeftY - G(c);
    }, uo = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(c) {
      return ee(Nr(c));
    }, fo = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(c) {
      return ee(_r(c));
    }, Ti = n.strokeColor || "0 G";
    p.__private__.getStrokeColor = p.getDrawColor = function() {
      return sr(Ti);
    }, p.__private__.setStrokeColor = p.setDrawColor = function(c, b, M, z) {
      return Ti = Yn({
        ch1: c,
        ch2: b,
        ch3: M,
        ch4: z,
        pdfColorType: "draw",
        precision: 2
      }), I(Ti), this;
    };
    var ca = n.fillColor || "0 g";
    p.__private__.getFillColor = p.getFillColor = function() {
      return sr(ca);
    }, p.__private__.setFillColor = p.setFillColor = function(c, b, M, z) {
      return ca = Yn({
        ch1: c,
        ch2: b,
        ch3: M,
        ch4: z,
        pdfColorType: "fill",
        precision: 2
      }), I(ca), this;
    };
    var hi = n.textColor || "0 g", ho = p.__private__.getTextColor = p.getTextColor = function() {
      return sr(hi);
    };
    p.__private__.setTextColor = p.setTextColor = function(c, b, M, z) {
      return hi = Yn({
        ch1: c,
        ch2: b,
        ch3: M,
        ch4: z,
        pdfColorType: "text",
        precision: 3
      }), this;
    };
    var Ar = n.charSpace, po = p.__private__.getCharSpace = p.getCharSpace = function() {
      return parseFloat(Ar || 0);
    };
    p.__private__.setCharSpace = p.setCharSpace = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
      return Ar = c, this;
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
      return ua = b, I(b + " J"), this;
    };
    var fa = 0;
    p.__private__.setLineJoin = p.setLineJoin = function(c) {
      var b = p.CapJoinStyles[c];
      if (b === void 0) throw new Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      return fa = b, I(b + " j"), this;
    }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(c) {
      if (c = c || 0, isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
      return I(ee(G(c)) + " M"), this;
    }, p.GState = Hs, p.setGState = function(c) {
      (c = typeof c == "string" ? Ye[nt[c]] : es(null, c)).equals(Mt) || (I("/" + c.id + " gs"), Mt = c);
    };
    var es = function(c, b) {
      if (!c || !nt[c]) {
        var M = false;
        for (var z in Ye) if (Ye.hasOwnProperty(z) && Ye[z].equals(b)) {
          M = true;
          break;
        }
        if (M) b = Ye[z];
        else {
          var Z = "GS" + (Object.keys(Ye).length + 1).toString(10);
          Ye[Z] = b, b.id = Z;
        }
        return c && (nt[c] = b.id), xt.publish("addGState", b), b;
      }
    };
    p.addGState = function(c, b) {
      return es(c, b), this;
    }, p.saveGraphicsState = function() {
      return I("q"), Ft.push({
        key: De,
        size: Ne,
        color: hi
      }), this;
    }, p.restoreGraphicsState = function() {
      I("Q");
      var c = Ft.pop();
      return De = c.key, Ne = c.size, hi = c.color, Mt = null, this;
    }, p.setCurrentTransformationMatrix = function(c) {
      return I(c.toString() + " cm"), this;
    }, p.comment = function(c) {
      return I("#" + c), this;
    };
    var Lr = function(c, b) {
      var M = c || 0;
      Object.defineProperty(this, "x", {
        enumerable: true,
        get: function() {
          return M;
        },
        set: function(pe) {
          isNaN(pe) || (M = parseFloat(pe));
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
    }, ha = function(c, b, M, z) {
      Lr.call(this, c, b), this.type = "rect";
      var Z = M || 0;
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
      this.page = ut, this.currentPage = T, this.pages = _e.slice(0), this.pagesContext = $e.slice(0), this.x = Ue, this.y = Ut, this.matrix = gt, this.width = pa(T), this.height = ns(T), this.outputDestination = Ce, this.id = "", this.objectNumber = -1;
    };
    Bi.prototype.restore = function() {
      ut = this.page, T = this.currentPage, $e = this.pagesContext, _e = this.pages, Ue = this.x, Ut = this.y, gt = this.matrix, ts(T, this.width), Sr(T, this.height), Ce = this.outputDestination;
    };
    var da = function(c, b, M, z, Z) {
      ar.push(new Bi()), ut = T = 0, _e = [], Ue = c, Ut = b, gt = Z, aa([
        M,
        z
      ]);
    };
    for (var di in p.beginFormObject = function(c, b, M, z, Z) {
      return da(c, b, M, z, Z), this;
    }, p.endFormObject = function(c) {
      return function(b) {
        if (vr[b]) ar.pop().restore();
        else {
          var M = new Bi(), z = "Xo" + (Object.keys(dn).length + 1).toString(10);
          M.id = z, vr[b] = z, dn[z] = M, xt.publish("addFormObject", M), ar.pop().restore();
        }
      }(c), this;
    }, p.doFormObject = function(c, b) {
      var M = dn[vr[c]];
      return I("q"), I(b.toString() + " cm"), I("/" + M.id + " Do"), I("Q"), this;
    }, p.getFormObject = function(c) {
      var b = dn[vr[c]];
      return {
        x: b.x,
        y: b.y,
        width: b.width,
        height: b.height,
        matrix: b.matrix
      };
    }, p.save = function(c, b) {
      return c = c || "generated.pdf", (b = b || {}).returnPromise = b.returnPromise || false, b.returnPromise === false ? (Ai(Oi(cr()), c), typeof Ai.unload == "function" && Xe.setTimeout && setTimeout(Ai.unload, 911), this) : new Promise(function(M, z) {
        try {
          var Z = Ai(Oi(cr()), c);
          typeof Ai.unload == "function" && Xe.setTimeout && setTimeout(Ai.unload, 911), M(Z);
        } catch (pe) {
          z(pe.message);
        }
      });
    }, qe.API) qe.API.hasOwnProperty(di) && (di === "events" && qe.API.events.length ? function(c, b) {
      var M, z, Z;
      for (Z = b.length - 1; Z !== -1; Z--) M = b[Z][0], z = b[Z][1], c.subscribe.apply(c, [
        M
      ].concat(typeof z == "function" ? [
        z
      ] : z));
    }(xt, qe.API.events) : p[di] = qe.API[di]);
    function pa(c) {
      return $e[c].mediaBox.topRightX - $e[c].mediaBox.bottomLeftX;
    }
    function ts(c, b) {
      $e[c].mediaBox.topRightX = b + $e[c].mediaBox.bottomLeftX;
    }
    function ns(c) {
      return $e[c].mediaBox.topRightY - $e[c].mediaBox.bottomLeftY;
    }
    function Sr(c, b) {
      $e[c].mediaBox.topRightY = b + $e[c].mediaBox.bottomLeftY;
    }
    var kr = p.getPageWidth = function(c) {
      return pa(c = c || T) / it;
    }, rs = p.setPageWidth = function(c, b) {
      ts(c, b * it);
    }, pi = p.getPageHeight = function(c) {
      return ns(c = c || T) / it;
    }, is = p.setPageHeight = function(c, b) {
      Sr(c, b * it);
    };
    return p.internal = {
      pdfEscape: Bn,
      getStyle: Xa,
      getFont: ao,
      getFontSize: Ee,
      getCharSpace: po,
      getTextColor: ho,
      getLineHeight: oo,
      getLineHeightFactor: co,
      getLineWidth: so,
      write: Pe,
      getHorizontalCoordinate: Nr,
      getVerticalCoordinate: _r,
      getCoordinateString: uo,
      getVerticalCoordinateString: fo,
      collections: {},
      newObject: Dt,
      newAdditionalObject: oi,
      newObjectDeferred: an,
      newObjectDeferredBegin: on,
      getFilters: Jn,
      putStream: Tn,
      events: xt,
      scaleFactor: it,
      pageSize: {
        getWidth: function() {
          return kr(T);
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
      getNumberOfPages: Ga,
      get pages() {
        return _e;
      },
      out: I,
      f2: _,
      f3: O,
      getPageInfo: xr,
      getPageInfoByObjId: Ja,
      getCurrentPageInfo: eo,
      getPDFVersion: R,
      Point: Lr,
      Rectangle: ha,
      Matrix: Ke,
      hasHotfix: qn
    }, Object.defineProperty(p.internal.pageSize, "width", {
      get: function() {
        return kr(T);
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
      for (var b = 0, M = ze.length; b < M; b++) {
        var z = Ha.call(this, c[b][0], c[b][1], c[b][2], ze[b][3], true);
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
    }).call(p, ze), De = "F1", Wa(s, t), xt.publish("initialized"), p;
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
    return ul(cl(e).substr(0, 5), n);
  }, Yi.prototype.encryptor = function(n, e) {
    var t = cl(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(r) {
      return ul(t, r);
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
  }, qe.API = {
    events: []
  }, qe.version = "4.1.0";
  var qt = qe.API, Al = 1, ji = function(n) {
    return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, $i = function(n) {
    return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
  }, Ws = function(n) {
    return n.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(e) {
      var t = e.charCodeAt(0).toString(16).toUpperCase();
      return "#" + (t.length === 1 ? "0" + t : t);
    });
  }, et = function(n) {
    return n.toFixed(2);
  }, ti = function(n) {
    return n.toFixed(5);
  };
  qt.__acroform__ = {};
  var Sn = function(n, e) {
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n;
  }, au = function(n) {
    return n * Al;
  }, mr = function(n) {
    var e = new ah(), t = Fe.internal.getHeight(n) || 0, r = Fe.internal.getWidth(n) || 0;
    return e.BBox = [
      0,
      0,
      Number(et(r)),
      Number(et(t))
    ], e;
  }, y5 = qt.__acroform__.setBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    return n | 1 << e;
  }, x5 = qt.__acroform__.clearBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    return n & ~(1 << e);
  }, N5 = qt.__acroform__.getBit = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return n & 1 << e ? 1 : 0;
  }, Gt = qt.__acroform__.getBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return N5(n, e - 1);
  }, $t = qt.__acroform__.setBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return y5(n, e - 1);
  }, Kt = qt.__acroform__.clearBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return x5(n, e - 1);
  }, _5 = qt.__acroform__.calculateCoordinates = function(n, e) {
    var t = e.internal.getHorizontalCoordinate, r = e.internal.getVerticalCoordinate, s = n[0], a = n[1], h = n[2], l = n[3], u = {};
    return u.lowerLeft_X = t(s) || 0, u.lowerLeft_Y = r(a + l) || 0, u.upperRight_X = t(s + h) || 0, u.upperRight_Y = r(a) || 0, [
      Number(et(u.lowerLeft_X)),
      Number(et(u.lowerLeft_Y)),
      Number(et(u.upperRight_X)),
      Number(et(u.upperRight_Y))
    ];
  }, A5 = function(n) {
    if (n.appearanceStreamContent) return n.appearanceStreamContent;
    if (n.V || n.DV) {
      var e = [], t = n._V || n.DV, r = fl(n, t), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
      e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(n.scope.__private__.encodeColorString(n.color)), e.push("/" + s + " " + et(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
      var a = mr(n);
      return a.scope = n.scope, a.stream = e.join(`
`), a;
    }
  }, fl = function(n, e) {
    var t = n.fontSize === 0 ? n.maxFontSize : n.fontSize, r = {
      text: "",
      fontSize: ""
    }, s = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
    s = n.multiline ? s.map(function(_) {
      return _.split(`
`);
    }) : s.map(function(_) {
      return [
        _
      ];
    });
    var a = t, h = Fe.internal.getHeight(n) || 0;
    h = h < 0 ? -h : h;
    var l = Fe.internal.getWidth(n) || 0;
    l = l < 0 ? -l : l;
    var u = function(_, O, G) {
      if (_ + 1 < s.length) {
        var V = O + " " + s[_ + 1][0];
        return Is(V, n, G).width <= l - 4;
      }
      return false;
    };
    a++;
    e: for (; a > 0; ) {
      e = "", a--;
      var d, g, w = Is("3", n, a).height, S = n.multiline ? h - a : (h - w) / 2, p = S += 2, j = 0, R = 0, D = 0;
      if (a <= 0) {
        e = `(...) Tj
`, e += "% Width of Text: " + Is(e, n, a = 12).width + ", FieldWidth:" + l + `
`;
        break;
      }
      for (var L = "", Y = 0, $ = 0; $ < s.length; $++) if (s.hasOwnProperty($)) {
        var U = false;
        if (s[$].length !== 1 && D !== s[$].length - 1) {
          if ((w + 2) * (Y + 2) + 2 > h) continue e;
          L += s[$][D], U = true, R = $, $--;
        } else {
          L = (L += s[$][D] + " ").substr(L.length - 1) == " " ? L.substr(0, L.length - 1) : L;
          var le = parseInt($), ve = u(le, L, a), fe = $ >= s.length - 1;
          if (ve && !fe) {
            L += " ", D = 0;
            continue;
          }
          if (ve || fe) {
            if (fe) R = le;
            else if (n.multiline && (w + 2) * (Y + 2) + 2 > h) continue e;
          } else {
            if (!n.multiline || (w + 2) * (Y + 2) + 2 > h) continue e;
            R = le;
          }
        }
        for (var ee = "", H = j; H <= R; H++) {
          var ne = s[H];
          if (n.multiline) {
            if (H === R) {
              ee += ne[D] + " ", D = (D + 1) % ne.length;
              continue;
            }
            if (H === j) {
              ee += ne[ne.length - 1] + " ";
              continue;
            }
          }
          ee += ne[0] + " ";
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
        e += et(d) + " " + et(p) + ` Td
`, e += "(" + ji(ee) + `) Tj
`, e += -et(d) + ` 0 Td
`, p = -(a + 2), g = 0, j = U ? R : R + 1, Y++, L = "";
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
  }, L5 = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: false,
    internal: null,
    isInitialized: false
  }, S5 = function(n, e) {
    var t = {
      type: "reference",
      object: n
    };
    e.internal.getPageInfo(n.page).pageContext.annotations.find(function(r) {
      return r.type === t.type && r.object === t.object;
    }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(t);
  }, k5 = function(n, e) {
    if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === false)) {
      if (rr.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(L5)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
      Al = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new sh(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
        (function(t) {
          t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = true;
        })(n);
      }), n.internal.events.subscribe("buildDocument", function() {
        (function(t) {
          t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
          var r = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
          for (var s in r) if (r.hasOwnProperty(s)) {
            var a = r[s];
            a.objId = void 0, a.hasAnnotation && S5(a, t);
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
            if (l.Rect && (l.Rect = _5(l.Rect, s)), s.internal.newObjectDeferredBegin(l.objId, true), l.DA = Fe.createDefaultAppearanceStream(l), Lt(l) === "object" && typeof l.getKeyValueListForStream == "function" && (u = l.getKeyValueListForStream()), l.Rect = d, l.hasAppearanceStream && !l.appearanceStreamContent) {
              var g = A5(l);
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
                    var j = p[h];
                    typeof j == "function" && (j = j.call(s, l)), w += "/" + h + " " + j + " ", s.internal.acroformPlugin.xForms.indexOf(j) >= 0 || s.internal.acroformPlugin.xForms.push(j);
                  }
                } else typeof (j = p) == "function" && (j = j.call(s, l)), w += "/" + h + " " + j, s.internal.acroformPlugin.xForms.indexOf(j) >= 0 || s.internal.acroformPlugin.xForms.push(j);
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
          a && function(R, D) {
            for (var L in R) if (R.hasOwnProperty(L)) {
              var Y = L, $ = R[L];
              D.internal.newObjectDeferredBegin($.objId, true), Lt($) === "object" && typeof $.putStream == "function" && $.putStream(), delete R[Y];
            }
          }(s.internal.acroformPlugin.xForms, s);
        })(t, n);
      }), n.internal.acroformPlugin.isInitialized = true;
    }
  }, ih = qt.__acroform__.arrayToPdfArray = function(n, e, t) {
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
  }, gr = function() {
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
  gr.prototype.toString = function() {
    return this.objId + " 0 R";
  }, gr.prototype.putStream = function() {
    var n = this.getKeyValueListForStream();
    this.scope.internal.putStream({
      data: this.stream,
      additionalKeyValues: n,
      objectId: this.objId
    }), this.scope.internal.out("endobj");
  }, gr.prototype.getKeyValueListForStream = function() {
    var n = [], e = Object.getOwnPropertyNames(this).filter(function(a) {
      return a != "content" && a != "appearanceStreamContent" && a != "scope" && a != "objId" && a.substring(0, 1) != "_";
    });
    for (var t in e) if (Object.getOwnPropertyDescriptor(this, e[t]).configurable === false) {
      var r = e[t], s = this[r];
      s && (Array.isArray(s) ? n.push({
        key: r,
        value: ih(s, this.objId, this.scope)
      }) : s instanceof gr ? (s.scope = this.scope, n.push({
        key: r,
        value: s.objId + " 0 R"
      })) : typeof s != "function" && n.push({
        key: r,
        value: s
      }));
    }
    return n;
  };
  var ah = function() {
    gr.call(this), Object.defineProperty(this, "Type", {
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
  Sn(ah, gr);
  var sh = function() {
    gr.call(this);
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
  Sn(sh, gr);
  var rr = function n() {
    gr.call(this);
    var e = 4;
    Object.defineProperty(this, "F", {
      enumerable: false,
      configurable: false,
      get: function() {
        return e;
      },
      set: function(L) {
        if (isNaN(L)) throw new Error('Invalid value "' + L + '" for attribute F supplied.');
        e = L;
      }
    }), Object.defineProperty(this, "showWhenPrinted", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(e, 3);
      },
      set: function(L) {
        L ? this.F = $t(e, 3) : this.F = Kt(e, 3);
      }
    });
    var t = 0;
    Object.defineProperty(this, "Ff", {
      enumerable: false,
      configurable: false,
      get: function() {
        return t;
      },
      set: function(L) {
        if (isNaN(L)) throw new Error('Invalid value "' + L + '" for attribute Ff supplied.');
        t = L;
      }
    });
    var r = [];
    Object.defineProperty(this, "Rect", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (r.length !== 0) return r;
      },
      set: function(L) {
        r = L !== void 0 ? L : [];
      }
    }), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[0]) ? 0 : r[0];
      },
      set: function(L) {
        r[0] = L;
      }
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[1]) ? 0 : r[1];
      },
      set: function(L) {
        r[1] = L;
      }
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[2]) ? 0 : r[2];
      },
      set: function(L) {
        r[2] = L;
      }
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[3]) ? 0 : r[3];
      },
      set: function(L) {
        r[3] = L;
      }
    });
    var s = "";
    Object.defineProperty(this, "FT", {
      enumerable: true,
      configurable: false,
      get: function() {
        return s;
      },
      set: function(L) {
        switch (L) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            s = L;
            break;
          default:
            throw new Error('Invalid value "' + L + '" for attribute FT supplied.');
        }
      }
    });
    var a = null;
    Object.defineProperty(this, "T", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!a || a.length < 1) {
          if (this instanceof Vs) return;
          a = "FieldObject" + n.FieldNum++;
        }
        var L = function(Y) {
          return Y;
        };
        return this.scope && (L = this.scope.internal.getEncryptor(this.objId)), "(" + ji(L(a)) + ")";
      },
      set: function(L) {
        a = L.toString();
      }
    }), Object.defineProperty(this, "fieldName", {
      configurable: true,
      enumerable: true,
      get: function() {
        return a;
      },
      set: function(L) {
        a = L;
      }
    });
    var h = "helvetica";
    Object.defineProperty(this, "fontName", {
      enumerable: true,
      configurable: true,
      get: function() {
        return h;
      },
      set: function(L) {
        h = L;
      }
    });
    var l = "normal";
    Object.defineProperty(this, "fontStyle", {
      enumerable: true,
      configurable: true,
      get: function() {
        return l;
      },
      set: function(L) {
        l = L;
      }
    });
    var u = 0;
    Object.defineProperty(this, "fontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return u;
      },
      set: function(L) {
        u = L;
      }
    });
    var d = void 0;
    Object.defineProperty(this, "maxFontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return d === void 0 ? 50 / Al : d;
      },
      set: function(L) {
        d = L;
      }
    });
    var g = "black";
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      get: function() {
        return g;
      },
      set: function(L) {
        g = L;
      }
    });
    var w = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!(!w || this instanceof Vs || this instanceof Si)) return Ko(w, this.objId, this.scope);
      },
      set: function(L) {
        L = L.toString(), w = L;
      }
    });
    var S = null;
    Object.defineProperty(this, "DV", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (S) return this instanceof sn == 0 ? Ko(S, this.objId, this.scope) : S;
      },
      set: function(L) {
        L = L.toString(), S = this instanceof sn == 0 ? L.substr(0, 1) === "(" ? $i(L.substr(1, L.length - 2)) : $i(L) : L;
      }
    }), Object.defineProperty(this, "defaultValue", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof sn == 1 ? $i(S.substr(1, S.length - 1)) : S;
      },
      set: function(L) {
        L = L.toString(), S = this instanceof sn == 1 ? "/" + Ws(L) : L;
      }
    });
    var p = null;
    Object.defineProperty(this, "_V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return p;
      },
      set: function(L) {
        this.V = L;
      }
    }), Object.defineProperty(this, "V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return this instanceof sn == 0 ? Ko(p, this.objId, this.scope) : p;
      },
      set: function(L) {
        L = L.toString(), p = this instanceof sn == 0 ? L.substr(0, 1) === "(" ? $i(L.substr(1, L.length - 2)) : $i(L) : L;
      }
    }), Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof sn == 1 ? $i(p.substr(1, p.length - 1)) : p;
      },
      set: function(L) {
        L = L.toString(), p = this instanceof sn == 1 ? "/" + Ws(L) : L;
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
    var j, R = false;
    Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: true,
      configurable: true,
      get: function() {
        return R;
      },
      set: function(L) {
        L = !!L, R = L;
      }
    }), Object.defineProperty(this, "page", {
      enumerable: true,
      configurable: true,
      get: function() {
        if (j) return j;
      },
      set: function(L) {
        j = L;
      }
    }), Object.defineProperty(this, "readOnly", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 1);
      },
      set: function(L) {
        L ? this.Ff = $t(this.Ff, 1) : this.Ff = Kt(this.Ff, 1);
      }
    }), Object.defineProperty(this, "required", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 2);
      },
      set: function(L) {
        L ? this.Ff = $t(this.Ff, 2) : this.Ff = Kt(this.Ff, 2);
      }
    }), Object.defineProperty(this, "noExport", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 3);
      },
      set: function(L) {
        L ? this.Ff = $t(this.Ff, 3) : this.Ff = Kt(this.Ff, 3);
      }
    });
    var D = null;
    Object.defineProperty(this, "Q", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (D !== null) return D;
      },
      set: function(L) {
        if ([
          0,
          1,
          2
        ].indexOf(L) === -1) throw new Error('Invalid value "' + L + '" for attribute Q supplied.');
        D = L;
      }
    }), Object.defineProperty(this, "textAlign", {
      get: function() {
        var L;
        switch (D) {
          case 0:
          default:
            L = "left";
            break;
          case 1:
            L = "center";
            break;
          case 2:
            L = "right";
        }
        return L;
      },
      configurable: true,
      enumerable: true,
      set: function(L) {
        switch (L) {
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
  Sn(rr, gr);
  var Zi = function() {
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
        return ih(e, this.objId, this.scope);
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
        return !!Gt(this.Ff, 18);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 18) : this.Ff = Kt(this.Ff, 18);
      }
    }), Object.defineProperty(this, "edit", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 19);
      },
      set: function(t) {
        this.combo === true && (t ? this.Ff = $t(this.Ff, 19) : this.Ff = Kt(this.Ff, 19));
      }
    }), Object.defineProperty(this, "sort", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 20);
      },
      set: function(t) {
        t ? (this.Ff = $t(this.Ff, 20), e.sort()) : this.Ff = Kt(this.Ff, 20);
      }
    }), Object.defineProperty(this, "multiSelect", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 22);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 22) : this.Ff = Kt(this.Ff, 22);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 23);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 23) : this.Ff = Kt(this.Ff, 23);
      }
    }), Object.defineProperty(this, "commitOnSelChange", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 27);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 27) : this.Ff = Kt(this.Ff, 27);
      }
    }), this.hasAppearanceStream = false;
  };
  Sn(Zi, rr);
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
    rr.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 15);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 15) : this.Ff = Kt(this.Ff, 15);
      }
    }), Object.defineProperty(this, "radio", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 16);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 16) : this.Ff = Kt(this.Ff, 16);
      }
    }), Object.defineProperty(this, "pushButton", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 17);
      },
      set: function(t) {
        t ? this.Ff = $t(this.Ff, 17) : this.Ff = Kt(this.Ff, 17);
      }
    }), Object.defineProperty(this, "radioIsUnison", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 26);
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
  Sn(sn, rr);
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
  var Vs = function() {
    var n, e;
    rr.call(this), Object.defineProperty(this, "Parent", {
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
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Fe.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
  };
  Sn(Vs, rr), ta.prototype.setAppearance = function(n) {
    if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
      var t = this.Kids[e];
      t.appearanceStreamContent = n.createAppearanceStream(t.optionName), t.caption = n.getCA();
    }
  }, ta.prototype.createOption = function(n) {
    var e = new Vs();
    return e.Parent = this, e.optionName = n, this.Kids.push(e), P5.call(this.scope, e), e;
  };
  var Ts = function() {
    sn.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Fe.CheckBox.createAppearanceStream();
  };
  Sn(Ts, sn);
  var Si = function() {
    rr.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 13);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 13) : this.Ff = Kt(this.Ff, 13);
      }
    }), Object.defineProperty(this, "fileSelect", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 21);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 21) : this.Ff = Kt(this.Ff, 21);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 23);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 23) : this.Ff = Kt(this.Ff, 23);
      }
    }), Object.defineProperty(this, "doNotScroll", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 24);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 24) : this.Ff = Kt(this.Ff, 24);
      }
    }), Object.defineProperty(this, "comb", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 25);
      },
      set: function(e) {
        e ? this.Ff = $t(this.Ff, 25) : this.Ff = Kt(this.Ff, 25);
      }
    }), Object.defineProperty(this, "richText", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 26);
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
  Sn(Si, rr);
  var Bs = function() {
    Si.call(this), Object.defineProperty(this, "password", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 14);
      },
      set: function(n) {
        n ? this.Ff = $t(this.Ff, 14) : this.Ff = Kt(this.Ff, 14);
      }
    }), this.password = true;
  };
  Sn(Bs, Si);
  var Fe = {
    CheckBox: {
      createAppearanceStream: function() {
        return {
          N: {
            On: Fe.CheckBox.YesNormal
          },
          D: {
            On: Fe.CheckBox.YesPushDown,
            Off: Fe.CheckBox.OffPushDown
          }
        };
      },
      YesPushDown: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = [], r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), a = fl(n, n.caption);
        return t.push("0.749023 g"), t.push("0 0 " + et(Fe.internal.getWidth(n)) + " " + et(Fe.internal.getHeight(n)) + " re"), t.push("f"), t.push("BMC"), t.push("q"), t.push("0 0 1 rg"), t.push("/" + r + " " + et(a.fontSize) + " Tf " + s), t.push("BT"), t.push(a.text), t.push("ET"), t.push("Q"), t.push("EMC"), e.stream = t.join(`
`), e;
      },
      YesNormal: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color), s = [], a = Fe.internal.getHeight(n), h = Fe.internal.getWidth(n), l = fl(n, n.caption);
        return s.push("1 g"), s.push("0 0 " + et(h) + " " + et(a) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + et(h - 1) + " " + et(a - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + t + " " + et(l.fontSize) + " Tf " + r), s.push(l.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e;
      },
      OffPushDown: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = [];
        return t.push("0.749023 g"), t.push("0 0 " + et(Fe.internal.getWidth(n)) + " " + et(Fe.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
      }
    },
    RadioButton: {
      Circle: {
        createAppearanceStream: function(n) {
          var e = {
            D: {
              Off: Fe.RadioButton.Circle.OffPushDown
            },
            N: {}
          };
          return e.N[n] = Fe.RadioButton.Circle.YesNormal, e.D[n] = Fe.RadioButton.Circle.YesPushDown, e;
        },
        getCA: function() {
          return "l";
        },
        YesNormal: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Fe.internal.getWidth(n) <= Fe.internal.getHeight(n) ? Fe.internal.getWidth(n) / 4 : Fe.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Fe.internal.Bezier_C, a = Number((r * s).toFixed(5));
          return t.push("q"), t.push("1 0 0 1 " + ti(Fe.internal.getWidth(n) / 2) + " " + ti(Fe.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), t.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), t.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), t.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Fe.internal.getWidth(n) <= Fe.internal.getHeight(n) ? Fe.internal.getWidth(n) / 4 : Fe.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Number((2 * r).toFixed(5)), a = Number((s * Fe.internal.Bezier_C).toFixed(5)), h = Number((r * Fe.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ti(Fe.internal.getWidth(n) / 2) + " " + ti(Fe.internal.getHeight(n) / 2) + " cm"), t.push(s + " 0 m"), t.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), t.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), t.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), t.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), t.push("f"), t.push("Q"), t.push("0 g"), t.push("q"), t.push("1 0 0 1 " + ti(Fe.internal.getWidth(n) / 2) + " " + ti(Fe.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + h + " " + h + " " + r + " 0 " + r + " c"), t.push("-" + h + " " + r + " -" + r + " " + h + " -" + r + " 0 c"), t.push("-" + r + " -" + h + " -" + h + " -" + r + " 0 -" + r + " c"), t.push(h + " -" + r + " " + r + " -" + h + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Fe.internal.getWidth(n) <= Fe.internal.getHeight(n) ? Fe.internal.getWidth(n) / 4 : Fe.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Number((2 * r).toFixed(5)), a = Number((s * Fe.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ti(Fe.internal.getWidth(n) / 2) + " " + ti(Fe.internal.getHeight(n) / 2) + " cm"), t.push(s + " 0 m"), t.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), t.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), t.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), t.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        }
      },
      Cross: {
        createAppearanceStream: function(n) {
          var e = {
            D: {
              Off: Fe.RadioButton.Cross.OffPushDown
            },
            N: {}
          };
          return e.N[n] = Fe.RadioButton.Cross.YesNormal, e.D[n] = Fe.RadioButton.Cross.YesPushDown, e;
        },
        getCA: function() {
          return "8";
        },
        YesNormal: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Fe.internal.calculateCross(n);
          return t.push("q"), t.push("1 1 " + et(Fe.internal.getWidth(n) - 2) + " " + et(Fe.internal.getHeight(n) - 2) + " re"), t.push("W"), t.push("n"), t.push(et(r.x1.x) + " " + et(r.x1.y) + " m"), t.push(et(r.x2.x) + " " + et(r.x2.y) + " l"), t.push(et(r.x4.x) + " " + et(r.x4.y) + " m"), t.push(et(r.x3.x) + " " + et(r.x3.y) + " l"), t.push("s"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = Fe.internal.calculateCross(n), r = [];
          return r.push("0.749023 g"), r.push("0 0 " + et(Fe.internal.getWidth(n)) + " " + et(Fe.internal.getHeight(n)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + et(Fe.internal.getWidth(n) - 2) + " " + et(Fe.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(et(t.x1.x) + " " + et(t.x1.y) + " m"), r.push(et(t.x2.x) + " " + et(t.x2.y) + " l"), r.push(et(t.x4.x) + " " + et(t.x4.y) + " m"), r.push(et(t.x3.x) + " " + et(t.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [];
          return t.push("0.749023 g"), t.push("0 0 " + et(Fe.internal.getWidth(n)) + " " + et(Fe.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
`), e;
        }
      }
    },
    createDefaultAppearanceStream: function(n) {
      var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, t = n.scope.__private__.encodeColorString(n.color);
      return "/" + e + " " + n.fontSize + " Tf " + t;
    }
  };
  Fe.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function(n) {
      var e = Fe.internal.getWidth(n), t = Fe.internal.getHeight(n), r = Math.min(e, t);
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
  }, Fe.internal.getWidth = function(n) {
    var e = 0;
    return Lt(n) === "object" && (e = au(n.Rect[2])), e;
  }, Fe.internal.getHeight = function(n) {
    var e = 0;
    return Lt(n) === "object" && (e = au(n.Rect[3])), e;
  };
  var P5 = qt.addField = function(n) {
    if (k5(this, n), !(n instanceof rr)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = false, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
  };
  qt.AcroFormChoiceField = Zi, qt.AcroFormListBox = Qi, qt.AcroFormComboBox = ea, qt.AcroFormEditBox = Os, qt.AcroFormButton = sn, qt.AcroFormPushButton = Ds, qt.AcroFormRadioButton = ta, qt.AcroFormCheckBox = Ts, qt.AcroFormTextField = Si, qt.AcroFormPasswordField = Bs, qt.AcroFormAppearance = Fe, qt.AcroForm = {
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
    Appearance: Fe
  }, qe.AcroForm = {
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
    Appearance: Fe
  };
  qe.AcroForm;
  function oh(n) {
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
    }, s = n.__addimage__.getImageFileTypeByImageData = function(_, O) {
      var G, V, ce, ue, be, oe = t;
      if ((O = O || t) === "RGBA" || _.data !== void 0 && _.data instanceof Uint8ClampedArray && "height" in _ && "width" in _) return "RGBA";
      if (ve(_)) for (be in r) for (ce = r[be], G = 0; G < ce.length; G += 1) {
        for (ue = true, V = 0; V < ce[G].length; V += 1) if (ce[G][V] !== void 0 && ce[G][V] !== _[V]) {
          ue = false;
          break;
        }
        if (ue === true) {
          oe = be;
          break;
        }
      }
      else for (be in r) for (ce = r[be], G = 0; G < ce.length; G += 1) {
        for (ue = true, V = 0; V < ce[G].length; V += 1) if (ce[G][V] !== void 0 && ce[G][V] !== _.charCodeAt(V)) {
          ue = false;
          break;
        }
        if (ue === true) {
          oe = be;
          break;
        }
      }
      return oe === t && O !== t && (oe = O), oe;
    }, a = function _(O) {
      for (var G = this.internal.write, V = this.internal.putStream, ce = (0, this.internal.getFilters)(); ce.indexOf("FlateEncode") !== -1; ) ce.splice(ce.indexOf("FlateEncode"), 1);
      O.objectId = this.internal.newObject();
      var ue = [];
      if (ue.push({
        key: "Type",
        value: "/XObject"
      }), ue.push({
        key: "Subtype",
        value: "/Image"
      }), ue.push({
        key: "Width",
        value: O.width
      }), ue.push({
        key: "Height",
        value: O.height
      }), O.colorSpace === L.INDEXED ? ue.push({
        key: "ColorSpace",
        value: "[/Indexed /DeviceRGB " + (O.palette.length / 3 - 1) + " " + ("sMask" in O && O.sMask !== void 0 ? O.objectId + 2 : O.objectId + 1) + " 0 R]"
      }) : (ue.push({
        key: "ColorSpace",
        value: "/" + O.colorSpace
      }), O.colorSpace === L.DEVICE_CMYK && ue.push({
        key: "Decode",
        value: "[1 0 1 0 1 0 1 0]"
      })), ue.push({
        key: "BitsPerComponent",
        value: O.bitsPerComponent
      }), "decodeParameters" in O && O.decodeParameters !== void 0 && ue.push({
        key: "DecodeParms",
        value: "<<" + O.decodeParameters + ">>"
      }), "transparency" in O && Array.isArray(O.transparency) && O.transparency.length > 0) {
        for (var be = "", oe = 0, ie = O.transparency.length; oe < ie; oe++) be += O.transparency[oe] + " " + O.transparency[oe] + " ";
        ue.push({
          key: "Mask",
          value: "[" + be + "]"
        });
      }
      O.sMask !== void 0 && ue.push({
        key: "SMask",
        value: O.objectId + 1 + " 0 R"
      });
      var Le = O.filter !== void 0 ? [
        "/" + O.filter
      ] : void 0;
      if (V({
        data: O.data,
        additionalKeyValues: ue,
        alreadyAppliedFilters: Le,
        objectId: O.objectId
      }), G("endobj"), "sMask" in O && O.sMask !== void 0) {
        var xe, N = (xe = O.sMaskBitsPerComponent) !== null && xe !== void 0 ? xe : O.bitsPerComponent, T = {
          width: O.width,
          height: O.height,
          colorSpace: "DeviceGray",
          bitsPerComponent: N,
          data: O.sMask
        };
        "filter" in O && (T.decodeParameters = "/Predictor ".concat(O.predictor, " /Colors 1 /BitsPerComponent ").concat(N, " /Columns ").concat(O.width), T.filter = O.filter), _.call(this, T);
      }
      if (O.colorSpace === L.INDEXED) {
        var P = this.internal.newObject();
        V({
          data: ee(new Uint8Array(O.palette)),
          objectId: P
        }), G("endobj");
      }
    }, h = function() {
      var _ = this.internal.collections[e + "images"];
      for (var O in _) a.call(this, _[O]);
    }, l = function() {
      var _, O = this.internal.collections[e + "images"], G = this.internal.write;
      for (var V in O) G("/I" + (_ = O[V]).index, _.objectId, "0", "R");
    }, u = function() {
      this.internal.collections[e + "images"] || (this.internal.collections[e + "images"] = {}, this.internal.events.subscribe("putResources", h), this.internal.events.subscribe("putXobjectDict", l));
    }, d = function() {
      var _ = this.internal.collections[e + "images"];
      return u.call(this), _;
    }, g = function() {
      return Object.keys(this.internal.collections[e + "images"]).length;
    }, w = function(_) {
      return typeof n["process" + _.toUpperCase()] == "function";
    }, S = function(_) {
      return Lt(_) === "object" && _.nodeType === 1;
    }, p = function(_, O) {
      if (_.nodeName === "IMG" && _.hasAttribute("src")) {
        var G = "" + _.getAttribute("src");
        if (G.indexOf("data:image/") === 0) return Rs(unescape(G).split("base64,").pop());
        var V = n.loadFile(G, true);
        if (V !== void 0) return V;
      }
      if (_.nodeName === "CANVAS") {
        if (_.width === 0 || _.height === 0) throw new Error("Given canvas must have data. Canvas width: " + _.width + ", height: " + _.height);
        var ce;
        switch (O) {
          case "PNG":
            ce = "image/png";
            break;
          case "WEBP":
            ce = "image/webp";
            break;
          default:
            ce = "image/jpeg";
        }
        return Rs(_.toDataURL(ce, 1).split("base64,").pop());
      }
    }, j = function(_) {
      var O = this.internal.collections[e + "images"];
      if (O) {
        for (var G in O) if (_ === O[G].alias) return O[G];
      }
    }, R = function(_, O, G) {
      return _ || O || (_ = -96, O = -96), _ < 0 && (_ = -1 * G.width * 72 / _ / this.internal.scaleFactor), O < 0 && (O = -1 * G.height * 72 / O / this.internal.scaleFactor), _ === 0 && (_ = O * G.width / G.height), O === 0 && (O = _ * G.height / G.width), [
        _,
        O
      ];
    }, D = function(_, O, G, V, ce, ue) {
      var be = R.call(this, G, V, ce), oe = this.internal.getCoordinateString, ie = this.internal.getVerticalCoordinateString, Le = d.call(this);
      if (G = be[0], V = be[1], Le[ce.index] = ce, ue) {
        ue *= Math.PI / 180;
        var xe = Math.cos(ue), N = Math.sin(ue), T = function(B) {
          return B.toFixed(4);
        }, P = [
          T(xe),
          T(N),
          T(-1 * N),
          T(xe),
          0,
          0,
          "cm"
        ];
      }
      this.internal.write("q"), ue ? (this.internal.write([
        1,
        "0",
        "0",
        1,
        oe(_),
        ie(O + V),
        "cm"
      ].join(" ")), this.internal.write(P.join(" ")), this.internal.write([
        oe(G),
        "0",
        "0",
        oe(V),
        "0",
        "0",
        "cm"
      ].join(" "))) : this.internal.write([
        oe(G),
        "0",
        "0",
        oe(V),
        oe(_),
        ie(O + V),
        "cm"
      ].join(" ")), this.isAdvancedAPI() && this.internal.write([
        1,
        0,
        0,
        -1,
        0,
        0,
        "cm"
      ].join(" ")), this.internal.write("/I" + ce.index + " Do"), this.internal.write("Q");
    }, L = n.color_spaces = {
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
    var Y = n.image_compression = {
      NONE: "NONE",
      FAST: "FAST",
      MEDIUM: "MEDIUM",
      SLOW: "SLOW"
    }, $ = n.__addimage__.sHashCode = function(_) {
      var O, G, V = 0;
      if (typeof _ == "string") for (G = _.length, O = 0; O < G; O++) V = (V << 5) - V + _.charCodeAt(O), V |= 0;
      else if (ve(_)) for (G = _.byteLength / 2, O = 0; O < G; O++) V = (V << 5) - V + _[O], V |= 0;
      return V;
    }, U = n.__addimage__.validateStringAsBase64 = function(_) {
      (_ = _ || "").toString().trim();
      var O = true;
      return _.length === 0 && (O = false), _.length % 4 != 0 && (O = false), /^[A-Za-z0-9+/]+$/.test(_.substr(0, _.length - 2)) === false && (O = false), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(_.substr(-2)) === false && (O = false), O;
    }, le = n.__addimage__.extractImageFromDataUrl = function(_) {
      if (_ == null || !(_ = _.trim()).startsWith("data:")) return null;
      var O = _.indexOf(",");
      return O < 0 ? null : _.substring(0, O).trim().endsWith("base64") ? _.substring(O + 1) : null;
    };
    n.__addimage__.isArrayBuffer = function(_) {
      return _ instanceof ArrayBuffer;
    };
    var ve = n.__addimage__.isArrayBufferView = function(_) {
      return _ instanceof Int8Array || _ instanceof Uint8Array || _ instanceof Uint8ClampedArray || _ instanceof Int16Array || _ instanceof Uint16Array || _ instanceof Int32Array || _ instanceof Uint32Array || _ instanceof Float32Array || _ instanceof Float64Array;
    }, fe = n.__addimage__.binaryStringToUint8Array = function(_) {
      for (var O = _.length, G = new Uint8Array(O), V = 0; V < O; V++) G[V] = _.charCodeAt(V);
      return G;
    }, ee = n.__addimage__.arrayBufferToBinaryString = function(_) {
      for (var O = "", G = ve(_) ? _ : new Uint8Array(_), V = 0; V < G.length; V += 8192) O += String.fromCharCode.apply(null, G.subarray(V, V + 8192));
      return O;
    };
    n.addImage = function() {
      var _, O, G, V, ce, ue, be, oe, ie;
      if (typeof arguments[1] == "number" ? (O = t, G = arguments[1], V = arguments[2], ce = arguments[3], ue = arguments[4], be = arguments[5], oe = arguments[6], ie = arguments[7]) : (O = arguments[1], G = arguments[2], V = arguments[3], ce = arguments[4], ue = arguments[5], be = arguments[6], oe = arguments[7], ie = arguments[8]), Lt(_ = arguments[0]) === "object" && !S(_) && "imageData" in _) {
        var Le = _;
        _ = Le.imageData, O = Le.format || O || t, G = Le.x || G || 0, V = Le.y || V || 0, ce = Le.w || Le.width || ce, ue = Le.h || Le.height || ue, be = Le.alias || be, oe = Le.compression || oe, ie = Le.rotation || Le.angle || ie;
      }
      var xe = this.internal.getFilters();
      if (oe === void 0 && xe.indexOf("FlateEncode") !== -1 && (oe = "SLOW"), isNaN(G) || isNaN(V)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
      u.call(this);
      var N = H.call(this, _, O, be, oe);
      return D.call(this, G, V, ce, ue, N, ie), this;
    };
    var H = function(_, O, G, V) {
      var ce, ue, be;
      if (typeof _ == "string" && s(_) === t) {
        _ = unescape(_);
        var oe = ne(_, false);
        (oe !== "" || (oe = n.loadFile(_, true)) !== void 0) && (_ = oe);
      }
      if (S(_) && (_ = p(_, O)), O = s(_, O), !w(O)) throw new Error("addImage does not support files of type '" + O + "', please ensure that a plugin for '" + O + "' support is added.");
      if (((be = G) == null || be.length === 0) && (G = function(ie) {
        return typeof ie == "string" || ve(ie) ? $(ie) : ve(ie.data) ? $(ie.data) : null;
      }(_)), (ce = j.call(this, G)) || (_ instanceof Uint8Array || O === "RGBA" || (ue = _, _ = fe(_)), ce = this["process" + O.toUpperCase()](_, g.call(this), G, function(ie) {
        return ie && typeof ie == "string" && (ie = ie.toUpperCase()), ie in n.image_compression ? ie : Y.NONE;
      }(V), ue)), !ce) throw new Error("An unknown error occurred whilst processing the image.");
      return ce;
    }, ne = n.__addimage__.convertBase64ToBinaryString = function(_, O) {
      O = typeof O != "boolean" || O;
      var G, V = "";
      if (typeof _ == "string") {
        var ce;
        G = (ce = le(_)) !== null && ce !== void 0 ? ce : _;
        try {
          V = Rs(G);
        } catch (ue) {
          if (O) throw U(G) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + ue.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
        }
      }
      return V;
    };
    n.getImageProperties = function(_) {
      var O, G, V = "";
      if (S(_) && (_ = p(_)), typeof _ == "string" && s(_) === t && ((V = ne(_, false)) === "" && (V = n.loadFile(_) || ""), _ = V), G = s(_), !w(G)) throw new Error("addImage does not support files of type '" + G + "', please ensure that a plugin for '" + G + "' support is added.");
      if (_ instanceof Uint8Array || (_ = fe(_)), !(O = this["process" + G.toUpperCase()](_))) throw new Error("An unknown error occurred whilst processing the image");
      return O.fileType = G, O;
    };
  })(qe.API), function(n) {
    var e = function(t) {
      if (t !== void 0 && t != "") return true;
    };
    qe.API.events.push([
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
            var p = this.internal.pdfEscape, j = this.internal.getEncryptor(t.objId);
            switch (r.type) {
              case "reference":
                this.internal.write(" " + r.object.objId + " 0 R ");
                break;
              case "text":
                var R = this.internal.newAdditionalObject(), D = this.internal.newAdditionalObject(), L = this.internal.getEncryptor(R.objId), Y = r.title || "Note";
                a = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + h(r.bounds.x) + " " + l(r.bounds.y + r.bounds.h) + " " + h(r.bounds.x + r.bounds.w) + " " + l(r.bounds.y) + "] ") + "/Contents (" + p(L(r.contents)) + ")", a += " /Popup " + D.objId + " 0 R", a += " /P " + u.objId + " 0 R", a += " /T (" + p(L(Y)) + ") >>", R.content = a;
                var $ = R.objId + " 0 R";
                a = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + h(r.bounds.x + 30) + " " + l(r.bounds.y + r.bounds.h) + " " + h(r.bounds.x + r.bounds.w + 30) + " " + l(r.bounds.y) + "] ") + " /Parent " + $, r.open && (a += " /Open true"), a += " >>", D.content = a, this.internal.write(R.objId, "0 R", D.objId, "0 R");
                break;
              case "freetext":
                s = "/Rect [" + h(r.bounds.x) + " " + l(r.bounds.y) + " " + h(r.bounds.x + r.bounds.w) + " " + l(r.bounds.y + r.bounds.h) + "] ";
                var U = r.color || "#000000";
                a = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(j(r.contents)) + ")", a += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + U + ")", a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
                break;
              case "link":
                if (r.options.name) {
                  var le = this.annotations._nameMap[r.options.name];
                  r.options.pageNumber = le.page, r.options.top = le.y;
                } else r.options.top || (r.options.top = 0);
                if (s = "/Rect [" + r.finalBounds.x + " " + r.finalBounds.y + " " + r.finalBounds.w + " " + r.finalBounds.h + "] ", a = "", r.options.url) a = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + p(j(r.options.url)) + ") >>";
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
                    var ve = l(r.options.top);
                    r.options.left = r.options.left || 0, r.options.zoom === void 0 && (r.options.zoom = 0), a += " /XYZ " + r.options.left + " " + ve + " " + r.options.zoom + "]";
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
  }(qe.API), function(n) {
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
    var a = n.__arabicParser__.isInArabicSubstitutionA = function(R) {
      return e[R.charCodeAt(0)] !== void 0;
    }, h = n.__arabicParser__.isArabicLetter = function(R) {
      return typeof R == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(R);
    }, l = n.__arabicParser__.isArabicEndLetter = function(R) {
      return h(R) && a(R) && e[R.charCodeAt(0)].length <= 2;
    }, u = n.__arabicParser__.isArabicAlfLetter = function(R) {
      return h(R) && s.indexOf(R.charCodeAt(0)) >= 0;
    };
    n.__arabicParser__.arabicLetterHasIsolatedForm = function(R) {
      return h(R) && a(R) && e[R.charCodeAt(0)].length >= 1;
    };
    var d = n.__arabicParser__.arabicLetterHasFinalForm = function(R) {
      return h(R) && a(R) && e[R.charCodeAt(0)].length >= 2;
    };
    n.__arabicParser__.arabicLetterHasInitialForm = function(R) {
      return h(R) && a(R) && e[R.charCodeAt(0)].length >= 3;
    };
    var g = n.__arabicParser__.arabicLetterHasMedialForm = function(R) {
      return h(R) && a(R) && e[R.charCodeAt(0)].length == 4;
    }, w = n.__arabicParser__.resolveLigatures = function(R) {
      var D = 0, L = t, Y = "", $ = 0;
      for (D = 0; D < R.length; D += 1) L[R.charCodeAt(D)] !== void 0 ? ($++, typeof (L = L[R.charCodeAt(D)]) == "number" && (Y += String.fromCharCode(L), L = t, $ = 0), D === R.length - 1 && (L = t, Y += R.charAt(D - ($ - 1)), D -= $ - 1, $ = 0)) : (L = t, Y += R.charAt(D - $), D -= $, $ = 0);
      return Y;
    };
    n.__arabicParser__.isArabicDiacritic = function(R) {
      return R !== void 0 && r[R.charCodeAt(0)] !== void 0;
    };
    var S = n.__arabicParser__.getCorrectForm = function(R, D, L) {
      return h(R) ? a(R) === false ? -1 : !d(R) || !h(D) && !h(L) || !h(L) && l(D) || l(R) && !h(D) || l(R) && u(D) || l(R) && l(D) ? 0 : g(R) && h(D) && !l(D) && h(L) && d(L) ? 3 : l(R) || !h(L) ? 1 : 2 : -1;
    }, p = function(R) {
      var D = 0, L = 0, Y = 0, $ = "", U = "", le = "", ve = (R = R || "").split("\\s+"), fe = [];
      for (D = 0; D < ve.length; D += 1) {
        for (fe.push(""), L = 0; L < ve[D].length; L += 1) $ = ve[D][L], U = ve[D][L - 1], le = ve[D][L + 1], h($) ? (Y = S($, U, le), fe[D] += Y !== -1 ? String.fromCharCode(e[$.charCodeAt(0)][Y]) : $) : fe[D] += $;
        fe[D] = w(fe[D]);
      }
      return fe.join(" ");
    }, j = n.__arabicParser__.processArabic = n.processArabic = function() {
      var R, D = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, L = [];
      if (Array.isArray(D)) {
        var Y = 0;
        for (L = [], Y = 0; Y < D.length; Y += 1) Array.isArray(D[Y]) ? L.push([
          p(D[Y][0]),
          D[Y][1],
          D[Y][2]
        ]) : L.push([
          p(D[Y])
        ]);
        R = L;
      } else R = p(D);
      return typeof arguments[0] == "string" ? R : (arguments[0].text = R, arguments[0]);
    };
    n.events.push([
      "preProcessText",
      j
    ]);
  }(qe.API), qe.API.autoPrint = function(n) {
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
  }(qe.API), function(n) {
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
        set: function(R) {
          u = R;
        }
      });
      var d = arguments[1];
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return d;
        },
        set: function(R) {
          d = R;
        }
      });
      var g = arguments[2];
      Object.defineProperty(this, "width", {
        enumerable: true,
        get: function() {
          return g;
        },
        set: function(R) {
          g = R;
        }
      });
      var w = arguments[3];
      Object.defineProperty(this, "height", {
        enumerable: true,
        get: function() {
          return w;
        },
        set: function(R) {
          w = R;
        }
      });
      var S = arguments[4];
      Object.defineProperty(this, "text", {
        enumerable: true,
        get: function() {
          return S;
        },
        set: function(R) {
          S = R;
        }
      });
      var p = arguments[5];
      Object.defineProperty(this, "lineNumber", {
        enumerable: true,
        get: function() {
          return p;
        },
        set: function(R) {
          p = R;
        }
      });
      var j = arguments[6];
      return Object.defineProperty(this, "align", {
        enumerable: true,
        get: function() {
          return j;
        },
        set: function(R) {
          j = R;
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
      var g = (d = d || {}).fontSize || this.getFontSize(), w = d.font || this.getFont(), S = d.scaleFactor || this.internal.scaleFactor, p = 0, j = 0, R = 0, D = this;
      if (!Array.isArray(u) && typeof u != "string") {
        if (typeof u != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
        u = String(u);
      }
      var L = d.maxWidth;
      L > 0 ? typeof u == "string" ? u = this.splitTextToSize(u, L) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function($, U) {
        return $.concat(D.splitTextToSize(U, L));
      }, [])) : u = Array.isArray(u) ? u : [
        u
      ];
      for (var Y = 0; Y < u.length; Y++) p < (R = this.getStringUnitWidth(u[Y], {
        font: w
      }) * g) && (p = R);
      return p !== 0 && (j = u.length), {
        w: p /= S,
        h: Math.max((j * g * this.getLineHeightFactor() - g * (this.getLineHeightFactor() - 1)) / S, 0)
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
      var p, j, R, D, L = [], Y = [], $ = [], U = {}, le = {}, ve = [], fe = [], ee = (S = S || {}).autoSize || false, H = S.printHeaders !== false, ne = S.css && S.css["font-size"] !== void 0 ? 16 * S.css["font-size"] : S.fontSize || 12, _ = S.margins || Object.assign({
        width: this.getPageWidth()
      }, e), O = typeof S.padding == "number" ? S.padding : 3, G = S.headerBackgroundColor || "#c8c8c8", V = S.headerTextColor || "#000";
      if (s.call(this), this.internal.__cell__.printHeaders = H, this.internal.__cell__.margins = _, this.internal.__cell__.table_font_size = ne, this.internal.__cell__.padding = O, this.internal.__cell__.headerBackgroundColor = G, this.internal.__cell__.headerTextColor = V, this.setFontSize(ne), w == null) Y = L = Object.keys(g[0]), $ = L.map(function() {
        return "left";
      });
      else if (Array.isArray(w) && Lt(w[0]) === "object") for (L = w.map(function(Le) {
        return Le.name;
      }), Y = w.map(function(Le) {
        return Le.prompt || Le.name || "";
      }), $ = w.map(function(Le) {
        return Le.align || "left";
      }), p = 0; p < w.length; p += 1) le[w[p].name] = 0.7499990551181103 * w[p].width;
      else Array.isArray(w) && typeof w[0] == "string" && (Y = L = w, $ = L.map(function() {
        return "left";
      }));
      if (ee || Array.isArray(w) && typeof w[0] == "string") for (p = 0; p < L.length; p += 1) {
        for (U[D = L[p]] = g.map(function(Le) {
          return Le[D];
        }), this.setFont(void 0, "bold"), ve.push(this.getTextDimensions(Y[p], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w), j = U[D], this.setFont(void 0, "normal"), R = 0; R < j.length; R += 1) ve.push(this.getTextDimensions(j[R], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w);
        le[D] = Math.max.apply(null, ve) + O + O, ve = [];
      }
      if (H) {
        var ce = {};
        for (p = 0; p < L.length; p += 1) ce[L[p]] = {}, ce[L[p]].text = Y[p], ce[L[p]].align = $[p];
        var ue = l.call(this, ce, le);
        fe = L.map(function(Le) {
          return new a(u, d, le[Le], ue, ce[Le].text, void 0, ce[Le].align);
        }), this.setTableHeaderRow(fe), this.printHeaderRow(1, false);
      }
      var be = w.reduce(function(Le, xe) {
        return Le[xe.name] = xe.align, Le;
      }, {});
      for (p = 0; p < g.length; p += 1) {
        "rowStart" in S && S.rowStart instanceof Function && S.rowStart({
          row: p,
          data: g[p]
        }, this);
        var oe = l.call(this, g[p], le);
        for (R = 0; R < L.length; R += 1) {
          var ie = g[p][L[R]];
          "cellStart" in S && S.cellStart instanceof Function && S.cellStart({
            row: p,
            col: R,
            data: ie
          }, this), h.call(this, new a(u, d, le[L[R]], oe, ie, p + 2, be[L[R]]));
        }
      }
      return this.internal.__cell__.table_x = u, this.internal.__cell__.table_y = d, this;
    };
    var l = function(u, d) {
      var g = this.internal.__cell__.padding, w = this.internal.__cell__.table_font_size, S = this.internal.scaleFactor;
      return Object.keys(u).map(function(p) {
        var j = u[p];
        return this.splitTextToSize(j.hasOwnProperty("text") ? j.text : j, d[p] - g - g);
      }, this).map(function(p) {
        return this.getLineHeightFactor() * p.length * w / S + g + g;
      }, this).reduce(function(p, j) {
        return Math.max(p, j);
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
        var j = this.getTextColor();
        this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), h.call(this, g), this.setTextColor(j);
      }
      S.length > 0 && this.setTableHeaderRow(S), this.setFont(void 0, "normal"), t = false;
    };
  }(qe.API);
  var lh = {
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
  }, ch = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
  ], hl = oh(ch), uh = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], C5 = oh(uh);
  function Yo(n) {
    var e = n.family.replace(/"|'/g, "").toLowerCase(), t = function(a) {
      return lh[a = a || "normal"] ? a : "normal";
    }(n.style), r = function(a) {
      return a ? typeof a == "number" ? a >= 100 && a <= 900 && a % 100 == 0 ? a : 400 : /^\d00$/.test(a) ? parseInt(a) : a === "bold" ? 700 : 400 : 400;
    }(n.weight), s = function(a) {
      return typeof hl[a = a || "normal"] == "number" ? a : "normal";
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
  function su(n, e, t, r) {
    var s;
    for (s = t; s >= 0 && s < e.length; s += r) if (n[e[s]]) return n[e[s]];
    for (s = t; s >= 0 && s < e.length; s -= r) if (n[e[s]]) return n[e[s]];
  }
  var I5 = {
    "sans-serif": "helvetica",
    fixed: "courier",
    monospace: "courier",
    terminal: "courier",
    cursive: "times",
    fantasy: "times",
    serif: "times"
  }, ou = {
    caption: "times",
    icon: "times",
    menu: "times",
    "message-box": "times",
    "small-caption": "times",
    "status-bar": "times"
  };
  function lu(n) {
    return [
      n.stretch,
      n.style,
      n.weight,
      n.family
    ].join(" ");
  }
  function cu(n) {
    return n.trimLeft();
  }
  function j5(n, e) {
    for (var t = 0; t < n.length; ) {
      if (n.charAt(t) === e) return [
        n.substring(0, t),
        n.substring(t + 1)
      ];
      t += 1;
    }
    return null;
  }
  function E5(n) {
    var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return e === null ? null : [
      e[0],
      n.substring(e[0].length)
    ];
  }
  var Ki, js, uu, fu, hu, Jo = [
    "times"
  ];
  function du(n, e, t, r, s) {
    var a = 4, h = mu;
    switch (s) {
      case qe.API.image_compression.FAST:
        a = 1, h = pu;
        break;
      case qe.API.image_compression.MEDIUM:
        a = 6, h = gu;
        break;
      case qe.API.image_compression.SLOW:
        a = 9, h = bu;
    }
    n = function(u, d, g, w) {
      for (var S, p = u.length / d, j = new Uint8Array(u.length + p), R = [
        F5,
        pu,
        mu,
        gu,
        bu
      ], D = 0; D < p; D += 1) {
        var L = D * d, Y = u.subarray(L, L + d);
        if (w) j.set(w(Y, g, S), L + D);
        else {
          for (var $ = R.length, U = [], le = 0; le < $; le += 1) U[le] = R[le](Y, g, S);
          var ve = R5(U.concat());
          j.set(U[ve], L + D);
        }
        S = Y;
      }
      return j;
    }(n, e, Math.ceil(t * r / 8), h);
    var l = nl(n, {
      level: a
    });
    return qe.API.__addimage__.arrayBufferToBinaryString(l);
  }
  function F5(n) {
    var e = Array.apply([], n);
    return e.unshift(0), e;
  }
  function pu(n, e) {
    var t = n.length, r = [];
    r[0] = 1;
    for (var s = 0; s < t; s += 1) {
      var a = n[s - e] || 0;
      r[s + 1] = n[s] - a + 256 & 255;
    }
    return r;
  }
  function mu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 2;
    for (var a = 0; a < r; a += 1) {
      var h = t && t[a] || 0;
      s[a + 1] = n[a] - h + 256 & 255;
    }
    return s;
  }
  function gu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 3;
    for (var a = 0; a < r; a += 1) {
      var h = n[a - e] || 0, l = t && t[a] || 0;
      s[a + 1] = n[a] + 256 - (h + l >>> 1) & 255;
    }
    return s;
  }
  function bu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 4;
    for (var a = 0; a < r; a += 1) {
      var h = M5(n[a - e] || 0, t && t[a] || 0, t && t[a - e] || 0);
      s[a + 1] = n[a] - h + 256 & 255;
    }
    return s;
  }
  function M5(n, e, t) {
    if (n === e && e === t) return n;
    var r = Math.abs(e - t), s = Math.abs(n - t), a = Math.abs(n + e - t - t);
    return r <= s && r <= a ? n : s <= a ? e : t;
  }
  function R5(n) {
    var e = n.map(function(t) {
      return t.reduce(function(r, s) {
        return r + Math.abs(s);
      }, 0);
    });
    return e.indexOf(Math.min.apply(null, e));
  }
  function Xo(n, e, t) {
    var r = e * t, s = Math.floor(r / 8), a = 16 - (r - 8 * s + t), h = (1 << t) - 1;
    return fh(n, s) >> a & h;
  }
  function vu(n, e, t, r) {
    var s = t * r, a = Math.floor(s / 8), h = 16 - (s - 8 * a + r), l = (1 << r) - 1, u = (e & l) << h;
    (function(d, g, w) {
      if (g + 1 < d.byteLength) d.setUint16(g, w, false);
      else {
        var S = w >> 8 & 255;
        d.setUint8(g, S);
      }
    })(n, a, fh(n, a) & ~(l << h) & 65535 | u);
  }
  function fh(n, e) {
    return e + 1 < n.byteLength ? n.getUint16(e, false) : n.getUint8(e) << 8;
  }
  function O5(n) {
    var e = 0;
    if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
    var t = n[e++] | n[e++] << 8, r = n[e++] | n[e++] << 8, s = n[e++], a = s >> 7, h = 1 << 1 + (7 & s);
    n[e++], n[e++];
    var l = null, u = null;
    a && (l = e, u = h, e += 3 * h);
    var d = true, g = [], w = 0, S = null, p = 0, j = null;
    for (this.width = t, this.height = r; d && e < n.length; ) switch (n[e++]) {
      case 33:
        switch (n[e++]) {
          case 255:
            if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, j = n[e++] | n[e++] << 8, e++;
            else for (e += 12; ; ) {
              if (!((_ = n[e++]) >= 0)) throw Error("Invalid block size");
              if (_ === 0) break;
              e += _;
            }
            break;
          case 249:
            if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
            var R = n[e++];
            w = n[e++] | n[e++] << 8, S = n[e++], 1 & R || (S = null), p = R >> 2 & 7, e++;
            break;
          case 254:
            for (; ; ) {
              if (!((_ = n[e++]) >= 0)) throw Error("Invalid block size");
              if (_ === 0) break;
              e += _;
            }
            break;
          default:
            throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16));
        }
        break;
      case 44:
        var D = n[e++] | n[e++] << 8, L = n[e++] | n[e++] << 8, Y = n[e++] | n[e++] << 8, $ = n[e++] | n[e++] << 8, U = n[e++], le = U >> 6 & 1, ve = 1 << 1 + (7 & U), fe = l, ee = u, H = false;
        U >> 7 && (H = true, fe = e, ee = ve, e += 3 * ve);
        var ne = e;
        for (e++; ; ) {
          var _;
          if (!((_ = n[e++]) >= 0)) throw Error("Invalid block size");
          if (_ === 0) break;
          e += _;
        }
        g.push({
          x: D,
          y: L,
          width: Y,
          height: $,
          has_local_palette: H,
          palette_offset: fe,
          palette_size: ee,
          data_offset: ne,
          data_length: e - ne,
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
      return j;
    }, this.frameInfo = function(O) {
      if (O < 0 || O >= g.length) throw new Error("Frame index out of range.");
      return g[O];
    }, this.decodeAndBlitFrameBGRA = function(O, G) {
      var V = this.frameInfo(O), ce = V.width * V.height, ue = new Uint8Array(ce);
      wu(n, V.data_offset, ue, ce);
      var be = V.palette_offset, oe = V.transparent_index;
      oe === null && (oe = 256);
      var ie = V.width, Le = t - ie, xe = ie, N = 4 * (V.y * t + V.x), T = 4 * ((V.y + V.height) * t + V.x), P = N, B = 4 * Le;
      V.interlaced === true && (B += 4 * t * 7);
      for (var q = 8, W = 0, J = ue.length; W < J; ++W) {
        var Q = ue[W];
        if (xe === 0 && (xe = ie, (P += B) >= T && (B = 4 * Le + 4 * t * (q - 1), P = N + (ie + Le) * (q << 1), q >>= 1)), Q === oe) P += 4;
        else {
          var se = n[be + 3 * Q], _e = n[be + 3 * Q + 1], Se = n[be + 3 * Q + 2];
          G[P++] = Se, G[P++] = _e, G[P++] = se, G[P++] = 255;
        }
        --xe;
      }
    }, this.decodeAndBlitFrameRGBA = function(O, G) {
      var V = this.frameInfo(O), ce = V.width * V.height, ue = new Uint8Array(ce);
      wu(n, V.data_offset, ue, ce);
      var be = V.palette_offset, oe = V.transparent_index;
      oe === null && (oe = 256);
      var ie = V.width, Le = t - ie, xe = ie, N = 4 * (V.y * t + V.x), T = 4 * ((V.y + V.height) * t + V.x), P = N, B = 4 * Le;
      V.interlaced === true && (B += 4 * t * 7);
      for (var q = 8, W = 0, J = ue.length; W < J; ++W) {
        var Q = ue[W];
        if (xe === 0 && (xe = ie, (P += B) >= T && (B = 4 * Le + 4 * t * (q - 1), P = N + (ie + Le) * (q << 1), q >>= 1)), Q === oe) P += 4;
        else {
          var se = n[be + 3 * Q], _e = n[be + 3 * Q + 1], Se = n[be + 3 * Q + 2];
          G[P++] = se, G[P++] = _e, G[P++] = Se, G[P++] = 255;
        }
        --xe;
      }
    };
  }
  function wu(n, e, t, r) {
    for (var s = n[e++], a = 1 << s, h = a + 1, l = h + 1, u = s + 1, d = (1 << u) - 1, g = 0, w = 0, S = 0, p = n[e++], j = new Int32Array(4096), R = null; ; ) {
      for (; g < 16 && p !== 0; ) w |= n[e++] << g, g += 8, p === 1 ? p = n[e++] : --p;
      if (g < u) break;
      var D = w & d;
      if (w >>= u, g -= u, D !== a) {
        if (D === h) break;
        for (var L = D < l ? D : R, Y = 0, $ = L; $ > a; ) $ = j[$] >> 8, ++Y;
        var U = $;
        if (S + Y + (L !== D ? 1 : 0) > r) return void Pt.log("Warning, gif stream longer than expected.");
        t[S++] = U;
        var le = S += Y;
        for (L !== D && (t[S++] = U), $ = L; Y--; ) $ = j[$], t[--le] = 255 & $, $ >>= 8;
        R !== null && l < 4096 && (j[l++] = R << 8 | U, l >= d + 1 && u < 12 && (++u, d = d << 1 | 1)), R = D;
      } else l = h + 1, d = (1 << (u = s + 1)) - 1, R = null;
    }
    return S !== r && Pt.log("Warning, gif stream shorter than expected."), t;
  }
  function Zo(n) {
    var e, t, r, s, a, h = Math.floor, l = new Array(64), u = new Array(64), d = new Array(64), g = new Array(64), w = new Array(65535), S = new Array(65535), p = new Array(64), j = new Array(64), R = [], D = 0, L = 7, Y = new Array(64), $ = new Array(64), U = new Array(64), le = new Array(256), ve = new Array(2048), fe = [
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
    ], ne = [
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
    ], _ = [
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
    ], G = [
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
    ], ce = [
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
    function ue(N, T) {
      for (var P = 0, B = 0, q = new Array(), W = 1; W <= 16; W++) {
        for (var J = 1; J <= N[W]; J++) q[T[B]] = [], q[T[B]][0] = P, q[T[B]][1] = W, B++, P++;
        P *= 2;
      }
      return q;
    }
    function be(N) {
      for (var T = N[0], P = N[1] - 1; P >= 0; ) T & 1 << P && (D |= 1 << L), P--, --L < 0 && (D == 255 ? (oe(255), oe(0)) : oe(D), L = 7, D = 0);
    }
    function oe(N) {
      R.push(N);
    }
    function ie(N) {
      oe(N >> 8 & 255), oe(255 & N);
    }
    function Le(N, T, P, B, q) {
      for (var W, J = q[0], Q = q[240], se = function(Ne, Ge) {
        var Ee, Ve, He, yt, ft, tt, dt, ht, De, it, Ue = 0;
        for (De = 0; De < 8; ++De) {
          Ee = Ne[Ue], Ve = Ne[Ue + 1], He = Ne[Ue + 2], yt = Ne[Ue + 3], ft = Ne[Ue + 4], tt = Ne[Ue + 5], dt = Ne[Ue + 6];
          var Ut = Ee + (ht = Ne[Ue + 7]), gt = Ee - ht, lt = Ve + dt, ct = Ve - dt, Ft = He + tt, We = He - tt, Ct = yt + ft, Ye = yt - ft, nt = Ut + Ct, Mt = Ut - Ct, ut = lt + Ft, $e = lt - Ft;
          Ne[Ue] = nt + ut, Ne[Ue + 4] = nt - ut;
          var xt = 0.707106781 * ($e + Mt);
          Ne[Ue + 2] = Mt + xt, Ne[Ue + 6] = Mt - xt;
          var si = 0.382683433 * ((nt = Ye + We) - ($e = ct + gt)), dn = 0.5411961 * nt + si, vr = 1.306562965 * $e + si, ar = 0.707106781 * (ut = We + ct), Ke = gt + ar, wr = gt - ar;
          Ne[Ue + 5] = wr + dn, Ne[Ue + 3] = wr - dn, Ne[Ue + 1] = Ke + vr, Ne[Ue + 7] = Ke - vr, Ue += 8;
        }
        for (Ue = 0, De = 0; De < 8; ++De) {
          Ee = Ne[Ue], Ve = Ne[Ue + 8], He = Ne[Ue + 16], yt = Ne[Ue + 24], ft = Ne[Ue + 32], tt = Ne[Ue + 40], dt = Ne[Ue + 48];
          var yr = Ee + (ht = Ne[Ue + 56]), On = Ee - ht, Dn = Ve + dt, Dt = Ve - dt, an = He + tt, on = He - tt, oi = yt + ft, Br = yt - ft, Kn = yr + oi, sr = yr - oi, Yn = Dn + an, Jn = Dn - an;
          Ne[Ue] = Kn + Yn, Ne[Ue + 32] = Kn - Yn;
          var Tn = 0.707106781 * (Jn + sr);
          Ne[Ue + 16] = sr + Tn, Ne[Ue + 48] = sr - Tn;
          var li = 0.382683433 * ((Kn = Br + on) - (Jn = Dt + On)), or = 0.5411961 * Kn + li, ci = 1.306562965 * Jn + li, Ei = 0.707106781 * (Yn = on + Dt), Fi = On + Ei, Mi = On - Ei;
          Ne[Ue + 40] = Mi + or, Ne[Ue + 24] = Mi - or, Ne[Ue + 8] = Fi + ci, Ne[Ue + 56] = Fi - ci, Ue++;
        }
        for (De = 0; De < 64; ++De) it = Ne[De] * Ge[De], p[De] = it > 0 ? it + 0.5 | 0 : it - 0.5 | 0;
        return p;
      }(N, T), _e = 0; _e < 64; ++_e) j[fe[_e]] = se[_e];
      var Se = j[0] - P;
      P = j[0], Se == 0 ? be(B[0]) : (be(B[S[W = 32767 + Se]]), be(w[W]));
      for (var Ce = 63; Ce > 0 && j[Ce] == 0; ) Ce--;
      if (Ce == 0) return be(J), P;
      for (var je, I = 1; I <= Ce; ) {
        for (var Pe = I; j[I] == 0 && I <= Ce; ) ++I;
        var Je = I - Pe;
        if (Je >= 16) {
          je = Je >> 4;
          for (var ze = 1; ze <= je; ++ze) be(Q);
          Je &= 15;
        }
        W = 32767 + j[I], be(q[(Je << 4) + S[W]]), be(w[W]), I++;
      }
      return Ce != 63 && be(J), P;
    }
    function xe(N) {
      N = Math.min(Math.max(N, 1), 100), a != N && (function(T) {
        for (var P = [
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
        ], B = 0; B < 64; B++) {
          var q = h((P[B] * T + 50) / 100);
          q = Math.min(Math.max(q, 1), 255), l[fe[B]] = q;
        }
        for (var W = [
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
        ], J = 0; J < 64; J++) {
          var Q = h((W[J] * T + 50) / 100);
          Q = Math.min(Math.max(Q, 1), 255), u[fe[J]] = Q;
        }
        for (var se = [
          1,
          1.387039845,
          1.306562965,
          1.175875602,
          1,
          0.785694958,
          0.5411961,
          0.275899379
        ], _e = 0, Se = 0; Se < 8; Se++) for (var Ce = 0; Ce < 8; Ce++) d[_e] = 1 / (l[fe[_e]] * se[Se] * se[Ce] * 8), g[_e] = 1 / (u[fe[_e]] * se[Se] * se[Ce] * 8), _e++;
      }(N < 50 ? Math.floor(5e3 / N) : Math.floor(200 - 2 * N)), a = N);
    }
    this.encode = function(N, T) {
      T && xe(T), R = new Array(), D = 0, L = 7, ie(65496), ie(65504), ie(16), oe(74), oe(70), oe(73), oe(70), oe(0), oe(1), oe(1), oe(0), ie(1), ie(1), oe(0), oe(0), function() {
        ie(65499), ie(132), oe(0);
        for (var Ve = 0; Ve < 64; Ve++) oe(l[Ve]);
        oe(1);
        for (var He = 0; He < 64; He++) oe(u[He]);
      }(), function(Ve, He) {
        ie(65472), ie(17), oe(8), ie(He), ie(Ve), oe(3), oe(1), oe(17), oe(0), oe(2), oe(17), oe(1), oe(3), oe(17), oe(1);
      }(N.width, N.height), function() {
        ie(65476), ie(418), oe(0);
        for (var Ve = 0; Ve < 16; Ve++) oe(ee[Ve + 1]);
        for (var He = 0; He <= 11; He++) oe(H[He]);
        oe(16);
        for (var yt = 0; yt < 16; yt++) oe(ne[yt + 1]);
        for (var ft = 0; ft <= 161; ft++) oe(_[ft]);
        oe(1);
        for (var tt = 0; tt < 16; tt++) oe(O[tt + 1]);
        for (var dt = 0; dt <= 11; dt++) oe(G[dt]);
        oe(17);
        for (var ht = 0; ht < 16; ht++) oe(V[ht + 1]);
        for (var De = 0; De <= 161; De++) oe(ce[De]);
      }(), ie(65498), ie(12), oe(3), oe(1), oe(0), oe(2), oe(17), oe(3), oe(17), oe(0), oe(63), oe(0);
      var P = 0, B = 0, q = 0;
      D = 0, L = 7, this.encode.displayName = "_encode_";
      for (var W, J, Q, se, _e, Se, Ce, je, I, Pe = N.data, Je = N.width, ze = N.height, Ne = 4 * Je, Ge = 0; Ge < ze; ) {
        for (W = 0; W < Ne; ) {
          for (_e = Ne * Ge + W, Ce = -1, je = 0, I = 0; I < 64; I++) Se = _e + (je = I >> 3) * Ne + (Ce = 4 * (7 & I)), Ge + je >= ze && (Se -= Ne * (Ge + 1 + je - ze)), W + Ce >= Ne && (Se -= W + Ce - Ne + 4), J = Pe[Se++], Q = Pe[Se++], se = Pe[Se++], Y[I] = (ve[J] + ve[Q + 256 | 0] + ve[se + 512 | 0] >> 16) - 128, $[I] = (ve[J + 768 | 0] + ve[Q + 1024 | 0] + ve[se + 1280 | 0] >> 16) - 128, U[I] = (ve[J + 1280 | 0] + ve[Q + 1536 | 0] + ve[se + 1792 | 0] >> 16) - 128;
          P = Le(Y, d, P, e, r), B = Le($, g, B, t, s), q = Le(U, g, q, t, s), W += 32;
        }
        Ge += 8;
      }
      if (L >= 0) {
        var Ee = [];
        Ee[1] = L + 1, Ee[0] = (1 << L + 1) - 1, be(Ee);
      }
      return ie(65497), new Uint8Array(R);
    }, n = n || 50, function() {
      for (var N = String.fromCharCode, T = 0; T < 256; T++) le[T] = N(T);
    }(), e = ue(ee, H), t = ue(O, G), r = ue(ne, _), s = ue(V, ce), function() {
      for (var N = 1, T = 2, P = 1; P <= 15; P++) {
        for (var B = N; B < T; B++) S[32767 + B] = P, w[32767 + B] = [], w[32767 + B][1] = P, w[32767 + B][0] = B;
        for (var q = -(T - 1); q <= -N; q++) S[32767 + q] = P, w[32767 + q] = [], w[32767 + q][1] = P, w[32767 + q][0] = T - 1 + q;
        N <<= 1, T <<= 1;
      }
    }(), function() {
      for (var N = 0; N < 256; N++) ve[N] = 19595 * N, ve[N + 256 | 0] = 38470 * N, ve[N + 512 | 0] = 7471 * N + 32768, ve[N + 768 | 0] = -11059 * N, ve[N + 1024 | 0] = -21709 * N, ve[N + 1280 | 0] = 32768 * N + 8421375, ve[N + 1536 | 0] = -27439 * N, ve[N + 1792 | 0] = -5329 * N;
    }(), xe(n);
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
  function yu(n) {
    function e(H) {
      if (!H) throw Error("assert :P");
    }
    function t(H, ne, _) {
      for (var O = 0; 4 > O; O++) if (H[ne + O] != _.charCodeAt(O)) return true;
      return false;
    }
    function r(H, ne, _, O, G) {
      for (var V = 0; V < G; V++) H[ne + V] = _[O + V];
    }
    function s(H, ne, _, O) {
      for (var G = 0; G < O; G++) H[ne + G] = _;
    }
    function a(H) {
      return new Int32Array(H);
    }
    function h(H, ne) {
      for (var _ = [], O = 0; O < H; O++) _.push(new ne());
      return _;
    }
    function l(H, ne) {
      var _ = [];
      return function O(G, V, ce) {
        for (var ue = ce[V], be = 0; be < ue && (G.push(ce.length > V + 1 ? [] : new ne()), !(ce.length < V + 1)); be++) O(G[be], V + 1, ce);
      }(_, 0, H), _;
    }
    var u = function() {
      var H = this;
      function ne(i, o) {
        for (var f = 1 << o - 1 >>> 0; i & f; ) f >>>= 1;
        return f ? (i & f - 1) + f : i;
      }
      function _(i, o, f, m, v) {
        e(!(m % f));
        do
          i[o + (m -= f)] = v;
        while (0 < m);
      }
      function O(i, o, f, m, v) {
        if (e(2328 >= v), 512 >= v) var y = a(512);
        else if ((y = a(v)) == null) return 0;
        return function(x, A, k, E, K, ae) {
          var F, X, te = A, he = 1 << k, re = a(16), de = a(16);
          for (e(K != 0), e(E != null), e(x != null), e(0 < k), X = 0; X < K; ++X) {
            if (15 < E[X]) return 0;
            ++re[E[X]];
          }
          if (re[0] == K) return 0;
          for (de[1] = 0, F = 1; 15 > F; ++F) {
            if (re[F] > 1 << F) return 0;
            de[F + 1] = de[F] + re[F];
          }
          for (X = 0; X < K; ++X) F = E[X], 0 < E[X] && (ae[de[F]++] = X);
          if (de[15] == 1) return (E = new G()).g = 0, E.value = ae[0], _(x, te, 1, he, E), he;
          var me, Ae = -1, ye = he - 1, Be = 0, Ie = 1, st = 1, Re = 1 << k;
          for (X = 0, F = 1, K = 2; F <= k; ++F, K <<= 1) {
            if (Ie += st <<= 1, 0 > (st -= re[F])) return 0;
            for (; 0 < re[F]; --re[F]) (E = new G()).g = F, E.value = ae[X++], _(x, te + Be, K, Re, E), Be = ne(Be, F);
          }
          for (F = k + 1, K = 2; 15 >= F; ++F, K <<= 1) {
            if (Ie += st <<= 1, 0 > (st -= re[F])) return 0;
            for (; 0 < re[F]; --re[F]) {
              if (E = new G(), (Be & ye) != Ae) {
                for (te += Re, me = 1 << (Ae = F) - k; 15 > Ae && !(0 >= (me -= re[Ae])); ) ++Ae, me <<= 1;
                he += Re = 1 << (me = Ae - k), x[A + (Ae = Be & ye)].g = me + k, x[A + Ae].value = te - A - Ae;
              }
              E.g = F - k, E.value = ae[X++], _(x, te + (Be >> k), K, Re, E), Be = ne(Be, F);
            }
          }
          return Ie != 2 * de[15] - 1 ? 0 : he;
        }(i, o, f, m, v, y);
      }
      function G() {
        this.value = this.g = 0;
      }
      function V() {
        this.value = this.g = 0;
      }
      function ce() {
        this.G = h(5, G), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = h(yi, V);
      }
      function ue(i, o, f, m) {
        e(i != null), e(o != null), e(2147483648 > m), i.Ca = 254, i.I = 0, i.b = -8, i.Ka = 0, i.oa = o, i.pa = f, i.Jd = o, i.Yc = f + m, i.Zc = 4 <= m ? f + m - 4 + 1 : f, J(i);
      }
      function be(i, o) {
        for (var f = 0; 0 < o--; ) f |= se(i, 128) << o;
        return f;
      }
      function oe(i, o) {
        var f = be(i, o);
        return Q(i) ? -f : f;
      }
      function ie(i, o, f, m) {
        var v, y = 0;
        for (e(i != null), e(o != null), e(4294967288 > m), i.Sb = m, i.Ra = 0, i.u = 0, i.h = 0, 4 < m && (m = 4), v = 0; v < m; ++v) y += o[f + v] << 8 * v;
        i.Ra = y, i.bb = m, i.oa = o, i.pa = f;
      }
      function Le(i) {
        for (; 8 <= i.u && i.bb < i.Sb; ) i.Ra >>>= 8, i.Ra += i.oa[i.pa + i.bb] << Hr - 8 >>> 0, ++i.bb, i.u -= 8;
        B(i) && (i.h = 1, i.u = 0);
      }
      function xe(i, o) {
        if (e(0 <= o), !i.h && o <= Pn) {
          var f = P(i) & kn[o];
          return i.u += o, Le(i), f;
        }
        return i.h = 1, i.u = 0;
      }
      function N() {
        this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
      }
      function T() {
        this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
      }
      function P(i) {
        return i.Ra >>> (i.u & Hr - 1) >>> 0;
      }
      function B(i) {
        return e(i.bb <= i.Sb), i.h || i.bb == i.Sb && i.u > Hr;
      }
      function q(i, o) {
        i.u = o, i.h = B(i);
      }
      function W(i) {
        i.u >= jr && (e(i.u >= jr), Le(i));
      }
      function J(i) {
        e(i != null && i.oa != null), i.pa < i.Zc ? (i.I = (i.oa[i.pa++] | i.I << 8) >>> 0, i.b += 8) : (e(i != null && i.oa != null), i.pa < i.Yc ? (i.b += 8, i.I = i.oa[i.pa++] | i.I << 8) : i.Ka ? i.b = 0 : (i.I <<= 8, i.b += 8, i.Ka = 1));
      }
      function Q(i) {
        return be(i, 1);
      }
      function se(i, o) {
        var f = i.Ca;
        0 > i.b && J(i);
        var m = i.b, v = f * o >>> 8, y = (i.I >>> m > v) + 0;
        for (y ? (f -= v, i.I -= v + 1 << m >>> 0) : f = v + 1, m = f, v = 0; 256 <= m; ) v += 8, m >>= 8;
        return m = 7 ^ v + Wr[m], i.b -= m, i.Ca = (f << m) - 1, y;
      }
      function _e(i, o, f) {
        i[o + 0] = f >> 24 & 255, i[o + 1] = f >> 16 & 255, i[o + 2] = f >> 8 & 255, i[o + 3] = 255 & f;
      }
      function Se(i, o) {
        return i[o + 0] | i[o + 1] << 8;
      }
      function Ce(i, o) {
        return Se(i, o) | i[o + 2] << 16;
      }
      function je(i, o) {
        return Se(i, o) | Se(i, o + 2) << 16;
      }
      function I(i, o) {
        var f = 1 << o;
        return e(i != null), e(0 < o), i.X = a(f), i.X == null ? 0 : (i.Mb = 32 - o, i.Xa = o, 1);
      }
      function Pe(i, o) {
        e(i != null), e(o != null), e(i.Xa == o.Xa), r(o.X, 0, i.X, 0, 1 << o.Xa);
      }
      function Je() {
        this.X = [], this.Xa = this.Mb = 0;
      }
      function ze(i, o, f, m) {
        e(f != null), e(m != null);
        var v = f[0], y = m[0];
        return v == 0 && (v = (i * y + o / 2) / o), y == 0 && (y = (o * v + i / 2) / i), 0 >= v || 0 >= y ? 0 : (f[0] = v, m[0] = y, 1);
      }
      function Ne(i, o) {
        return i + (1 << o) - 1 >>> o;
      }
      function Ge(i, o) {
        return ((4278255360 & i) + (4278255360 & o) >>> 0 & 4278255360) + ((16711935 & i) + (16711935 & o) >>> 0 & 16711935) >>> 0;
      }
      function Ee(i, o) {
        H[o] = function(f, m, v, y, x, A, k) {
          var E;
          for (E = 0; E < x; ++E) {
            var K = H[i](A[k + E - 1], v, y + E);
            A[k + E] = Ge(f[m + E], K);
          }
        };
      }
      function Ve() {
        this.ud = this.hd = this.jd = 0;
      }
      function He(i, o) {
        return ((4278124286 & (i ^ o)) >>> 1) + (i & o) >>> 0;
      }
      function yt(i) {
        return 0 <= i && 256 > i ? i : 0 > i ? 0 : 255 < i ? 255 : void 0;
      }
      function ft(i, o) {
        return yt(i + (i - o + 0.5 >> 1));
      }
      function tt(i, o, f) {
        return Math.abs(o - f) - Math.abs(i - f);
      }
      function dt(i, o, f, m, v, y, x) {
        for (m = y[x - 1], f = 0; f < v; ++f) y[x + f] = m = Ge(i[o + f], m);
      }
      function ht(i, o, f, m, v) {
        var y;
        for (y = 0; y < f; ++y) {
          var x = i[o + y], A = x >> 8 & 255, k = 16711935 & (k = (k = 16711935 & x) + ((A << 16) + A));
          m[v + y] = (4278255360 & x) + k >>> 0;
        }
      }
      function De(i, o) {
        o.jd = 255 & i, o.hd = i >> 8 & 255, o.ud = i >> 16 & 255;
      }
      function it(i, o, f, m, v, y) {
        var x;
        for (x = 0; x < m; ++x) {
          var A = o[f + x], k = A >>> 8, E = A, K = 255 & (K = (K = A >>> 16) + ((i.jd << 24 >> 24) * (k << 24 >> 24) >>> 5));
          E = 255 & (E = (E += (i.hd << 24 >> 24) * (k << 24 >> 24) >>> 5) + ((i.ud << 24 >> 24) * (K << 24 >> 24) >>> 5)), v[y + x] = (4278255360 & A) + (K << 16) + E;
        }
      }
      function Ue(i, o, f, m, v) {
        H[o] = function(y, x, A, k, E, K, ae, F, X) {
          for (k = ae; k < F; ++k) for (ae = 0; ae < X; ++ae) E[K++] = v(A[m(y[x++])]);
        }, H[i] = function(y, x, A, k, E, K, ae) {
          var F = 8 >> y.b, X = y.Ea, te = y.K[0], he = y.w;
          if (8 > F) for (y = (1 << y.b) - 1, he = (1 << F) - 1; x < A; ++x) {
            var re, de = 0;
            for (re = 0; re < X; ++re) re & y || (de = m(k[E++])), K[ae++] = v(te[de & he]), de >>= F;
          }
          else H["VP8LMapColor" + f](k, E, te, he, K, ae, x, A, X);
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
          var y = (x = i[o++]) >> 16 & 240 | x >> 12 & 15, x = 240 & x | x >> 28 & 15;
          m[v++] = y, m[v++] = x;
        }
      }
      function ct(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = (x = i[o++]) >> 16 & 248 | x >> 13 & 7, x = x >> 5 & 224 | x >> 3 & 31;
          m[v++] = y, m[v++] = x;
        }
      }
      function Ft(i, o, f, m, v) {
        for (f = o + f; o < f; ) {
          var y = i[o++];
          m[v++] = 255 & y, m[v++] = y >> 8 & 255, m[v++] = y >> 16 & 255;
        }
      }
      function We(i, o, f, m, v, y) {
        if (y == 0) for (f = o + f; o < f; ) _e(m, ((y = i[o++])[0] >> 24 | y[1] >> 8 & 65280 | y[2] << 8 & 16711680 | y[3] << 24) >>> 0), v += 32;
        else r(m, v, i, o, f);
      }
      function Ct(i, o) {
        H[o][0] = H[i + "0"], H[o][1] = H[i + "1"], H[o][2] = H[i + "2"], H[o][3] = H[i + "3"], H[o][4] = H[i + "4"], H[o][5] = H[i + "5"], H[o][6] = H[i + "6"], H[o][7] = H[i + "7"], H[o][8] = H[i + "8"], H[o][9] = H[i + "9"], H[o][10] = H[i + "10"], H[o][11] = H[i + "11"], H[o][12] = H[i + "12"], H[o][13] = H[i + "13"], H[o][14] = H[i + "0"], H[o][15] = H[i + "0"];
      }
      function Ye(i) {
        return i == bo || i == vo || i == ds || i == wo;
      }
      function nt() {
        this.eb = [], this.size = this.A = this.fb = 0;
      }
      function Mt() {
        this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
      }
      function ut() {
        this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new nt(), this.f.kb = new Mt(), this.sd = null;
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
        var f = i.T, m = o.ba.f.RGBA, v = m.eb, y = m.fb + i.ka * m.A, x = Wn[o.ba.S], A = i.y, k = i.O, E = i.f, K = i.N, ae = i.ea, F = i.W, X = o.cc, te = o.dc, he = o.Mc, re = o.Nc, de = i.ka, me = i.ka + i.T, Ae = i.U, ye = Ae + 1 >> 1;
        for (de == 0 ? x(A, k, null, null, E, K, ae, F, E, K, ae, F, v, y, null, null, Ae) : (x(o.ec, o.fc, A, k, X, te, he, re, E, K, ae, F, v, y - m.A, v, y, Ae), ++f); de + 2 < me; de += 2) X = E, te = K, he = ae, re = F, K += i.Rc, F += i.Rc, y += 2 * m.A, x(A, (k += 2 * i.fa) - i.fa, A, k, X, te, he, re, E, K, ae, F, v, y - m.A, v, y, Ae);
        return k += i.fa, i.j + me < i.o ? (r(o.ec, o.fc, A, k, Ae), r(o.cc, o.dc, E, K, ye), r(o.Mc, o.Nc, ae, F, ye), f--) : 1 & me || x(A, k, null, null, E, K, ae, F, E, K, ae, F, v, y + m.A, null, null, Ae), f;
      }
      function vr(i, o, f) {
        var m = i.F, v = [
          i.J
        ];
        if (m != null) {
          var y = i.U, x = o.ba.S, A = x == hs || x == ds;
          o = o.ba.f.RGBA;
          var k = [
            0
          ], E = i.ka;
          k[0] = i.T, i.Kb && (E == 0 ? --k[0] : (--E, v[0] -= i.width), i.j + i.ka + i.T == i.o && (k[0] = i.o - i.j - E));
          var K = o.eb;
          E = o.fb + E * o.A, i = El(m, v[0], i.width, y, k, K, E + (A ? 0 : 3), o.A), e(f == k), i && Ye(x) && Sa(K, E, A, y, k, o.A);
        }
        return 0;
      }
      function ar(i) {
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
          v && (o.Jb = vr, m && Zn());
        }
        if (m && !Kl) {
          for (i = 0; 256 > i; ++i) Fh[i] = 89858 * (i - 128) + ms >> ps, Oh[i] = -22014 * (i - 128) + ms, Rh[i] = -45773 * (i - 128), Mh[i] = 113618 * (i - 128) + ms >> ps;
          for (i = Pa; i < No; ++i) o = 76283 * (i - 16) + ms >> ps, Dh[i - Pa] = lr(o, 255), Th[i - Pa] = lr(o + 8 >> 4, 15);
          Kl = 1;
        }
        return 1;
      }
      function Ke(i) {
        var o = i.ma, f = i.U, m = i.T;
        return e(!(1 & i.ka)), 0 >= f || 0 >= m ? 0 : (f = o.Ib(i, o), o.Jb != null && o.Jb(i, o, f), o.Dc += f, 1);
      }
      function wr(i) {
        i.ma.memory = null;
      }
      function yr(i, o, f, m) {
        return xe(i, 8) != 47 ? 0 : (o[0] = xe(i, 14) + 1, f[0] = xe(i, 14) + 1, m[0] = xe(i, 1), xe(i, 3) != 0 ? 0 : !i.h);
      }
      function On(i, o) {
        if (4 > i) return i + 1;
        var f = i - 2 >> 1;
        return (2 + (1 & i) << f) + xe(o, f) + 1;
      }
      function Dn(i, o) {
        return 120 < o ? o - 120 : 1 <= (f = ((f = wh[o - 1]) >> 4) * i + (8 - (15 & f))) ? f : 1;
        var f;
      }
      function Dt(i, o, f) {
        var m = P(f), v = i[o += 255 & m].g - 8;
        return 0 < v && (q(f, f.u + 8), m = P(f), o += i[o].value, o += m & (1 << v) - 1), q(f, f.u + i[o].g), i[o].value;
      }
      function an(i, o, f) {
        return f.g += i.g, f.value += i.value << o >>> 0, e(8 >= f.g), i.g;
      }
      function on(i, o, f) {
        var m = i.xc;
        return e((o = m == 0 ? 0 : i.vc[i.md * (f >> m) + (o >> m)]) < i.Wb), i.Ya[o];
      }
      function oi(i, o, f, m) {
        var v = i.ab, y = i.c * o, x = i.C;
        o = x + o;
        var A = f, k = m;
        for (m = i.Ta, f = i.Ua; 0 < v--; ) {
          var E = i.gc[v], K = x, ae = o, F = A, X = k, te = (k = m, A = f, E.Ea);
          switch (e(K < ae), e(ae <= E.nc), E.hc) {
            case 2:
              zt(F, X, (ae - K) * te, k, A);
              break;
            case 0:
              var he = K, re = ae, de = k, me = A, Ae = (Re = E).Ea;
              he == 0 && (ya(F, X, null, null, 1, de, me), dt(F, X + 1, 0, 0, Ae - 1, de, me + 1), X += Ae, me += Ae, ++he);
              for (var ye = 1 << Re.b, Be = ye - 1, Ie = Ne(Ae, Re.b), st = Re.K, Re = Re.w + (he >> Re.b) * Ie; he < re; ) {
                var pt = st, tn = Re, ot = 1;
                for (zi(F, X, de, me - Ae, 1, de, me); ot < Ae; ) {
                  var Oe = (ot & ~Be) + ye;
                  Oe > Ae && (Oe = Ae), (0, Na[pt[tn++] >> 8 & 15])(F, X + +ot, de, me + ot - Ae, Oe - ot, de, me + ot), ot = Oe;
                }
                X += Ae, me += Ae, ++he & Be || (Re += Ie);
              }
              ae != E.nc && r(k, A - te, k, A + (ae - K - 1) * te, te);
              break;
            case 1:
              for (te = F, re = X, Ae = (F = E.Ea) - (me = F & ~(de = (X = 1 << E.b) - 1)), he = Ne(F, E.b), ye = E.K, E = E.w + (K >> E.b) * he; K < ae; ) {
                for (Be = ye, Ie = E, st = new Ve(), Re = re + me, pt = re + F; re < Re; ) De(Be[Ie++], st), _a(st, te, re, X, k, A), re += X, A += X;
                re < pt && (De(Be[Ie++], st), _a(st, te, re, Ae, k, A), re += Ae, A += Ae), ++K & de || (E += he);
              }
              break;
            case 3:
              if (F == k && X == A && 0 < E.b) {
                for (re = k, F = te = A + (ae - K) * te - (me = (ae - K) * Ne(E.Ea, E.b)), X = k, de = A, he = [], me = (Ae = me) - 1; 0 <= me; --me) he[me] = X[de + me];
                for (me = Ae - 1; 0 <= me; --me) re[F + me] = he[me];
                ss(E, K, ae, k, te, k, A);
              } else ss(E, K, ae, F, X, k, A);
          }
          A = m, k = f;
        }
        k != f && r(m, f, A, k, y);
      }
      function Br(i, o) {
        var f = i.V, m = i.Ba + i.c * i.C, v = o - i.C;
        if (e(o <= i.l.o), e(16 >= v), 0 < v) {
          var y = i.l, x = i.Ta, A = i.Ua, k = y.width;
          if (oi(i, v, f, m), v = A = [
            A
          ], e((f = i.C) < (m = o)), e(y.v < y.va), m > y.o && (m = y.o), f < y.j) {
            var E = y.j - f;
            f = y.j, v[0] += E * k;
          }
          if (f >= m ? f = 0 : (v[0] += 4 * y.v, y.ka = f - y.j, y.U = y.va - y.v, y.T = m - f, f = 1), f) {
            if (A = A[0], 11 > (f = i.ca).S) {
              var K = f.f.RGBA, ae = (m = f.S, v = y.U, y = y.T, E = K.eb, K.A), F = y;
              for (K = K.fb + i.Ma * K.A; 0 < F--; ) {
                var X = x, te = A, he = v, re = E, de = K;
                switch (m) {
                  case cs:
                    Aa(X, te, he, re, de);
                    break;
                  case us:
                    Vr(X, te, he, re, de);
                    break;
                  case bo:
                    Vr(X, te, he, re, de), Sa(re, de, 0, he, 1, 0);
                    break;
                  case Bl:
                    xi(X, te, he, re, de);
                    break;
                  case fs:
                    We(X, te, he, re, de, 1);
                    break;
                  case vo:
                    We(X, te, he, re, de, 1), Sa(re, de, 0, he, 1, 0);
                    break;
                  case hs:
                    We(X, te, he, re, de, 0);
                    break;
                  case ds:
                    We(X, te, he, re, de, 0), Sa(re, de, 1, he, 1, 0);
                    break;
                  case go:
                    Gr(X, te, he, re, de);
                    break;
                  case wo:
                    Gr(X, te, he, re, de), jl(re, de, he, 1, 0);
                    break;
                  case ql:
                    $r(X, te, he, re, de);
                    break;
                  default:
                    e(0);
                }
                A += k, K += ae;
              }
              i.Ma += y;
            } else alert("todo:EmitRescaledRowsYUVA");
            e(i.Ma <= f.height);
          }
        }
        i.C = o, e(i.C <= i.i);
      }
      function Kn(i) {
        var o;
        if (0 < i.ua) return 0;
        for (o = 0; o < i.Wb; ++o) {
          var f = i.Ya[o].G, m = i.Ya[o].H;
          if (0 < f[1][m[1] + 0].g || 0 < f[2][m[2] + 0].g || 0 < f[3][m[3] + 0].g) return 0;
        }
        return 1;
      }
      function sr(i, o, f, m, v, y) {
        if (i.Z != 0) {
          var x = i.qd, A = i.rd;
          for (e(Jr[i.Z] != null); o < f; ++o) Jr[i.Z](x, A, m, v, m, v, y), x = m, A = v, v += y;
          i.qd = x, i.rd = A;
        }
      }
      function Yn(i, o) {
        var f = i.l.ma, m = f.Z == 0 || f.Z == 1 ? i.l.j : i.C;
        if (m = i.C < m ? m : i.C, e(o <= i.l.o), o > m) {
          var v = i.l.width, y = f.ca, x = f.tb + v * m, A = i.V, k = i.Ba + i.c * m, E = i.gc;
          e(i.ab == 1), e(E[0].hc == 3), hr(E[0], m, o, A, k, y, x), sr(f, m, o, y, x, v);
        }
        i.C = i.Ma = o;
      }
      function Jn(i, o, f, m, v, y, x) {
        var A = i.$ / m, k = i.$ % m, E = i.m, K = i.s, ae = f + i.$, F = ae;
        v = f + m * v;
        var X = f + m * y, te = 280 + K.ua, he = i.Pb ? A : 16777216, re = 0 < K.ua ? K.Wa : null, de = K.wc, me = ae < X ? on(K, k, A) : null;
        e(i.C < y), e(X <= v);
        var Ae = false;
        e: for (; ; ) {
          for (; Ae || ae < X; ) {
            var ye = 0;
            if (A >= he) {
              var Be = ae - f;
              e((he = i).Pb), he.wd = he.m, he.xd = Be, 0 < he.s.ua && Pe(he.s.Wa, he.s.vb), he = A + xh;
            }
            if (k & de || (me = on(K, k, A)), e(me != null), me.Qb && (o[ae] = me.qb, Ae = true), !Ae) if (W(E), me.jc) {
              ye = E, Be = o;
              var Ie = ae, st = me.pd[P(ye) & yi - 1];
              e(me.jc), 256 > st.g ? (q(ye, ye.u + st.g), Be[Ie] = st.value, ye = 0) : (q(ye, ye.u + st.g - 256), e(256 <= st.value), ye = st.value), ye == 0 && (Ae = true);
            } else ye = Dt(me.G[0], me.H[0], E);
            if (E.h) break;
            if (Ae || 256 > ye) {
              if (!Ae) if (me.nd) o[ae] = (me.qb | ye << 8) >>> 0;
              else {
                if (W(E), Ae = Dt(me.G[1], me.H[1], E), W(E), Be = Dt(me.G[2], me.H[2], E), Ie = Dt(me.G[3], me.H[3], E), E.h) break;
                o[ae] = (Ie << 24 | Ae << 16 | ye << 8 | Be) >>> 0;
              }
              if (Ae = false, ++ae, ++k >= m && (k = 0, ++A, x != null && A <= y && !(A % 16) && x(i, A), re != null)) for (; F < ae; ) ye = o[F++], re.X[(506832829 * ye & 4294967295) >>> re.Mb] = ye;
            } else if (280 > ye) {
              if (ye = On(ye - 256, E), Be = Dt(me.G[4], me.H[4], E), W(E), Be = Dn(m, Be = On(Be, E)), E.h) break;
              if (ae - f < Be || v - ae < ye) break e;
              for (Ie = 0; Ie < ye; ++Ie) o[ae + Ie] = o[ae + Ie - Be];
              for (ae += ye, k += ye; k >= m; ) k -= m, ++A, x != null && A <= y && !(A % 16) && x(i, A);
              if (e(ae <= v), k & de && (me = on(K, k, A)), re != null) for (; F < ae; ) ye = o[F++], re.X[(506832829 * ye & 4294967295) >>> re.Mb] = ye;
            } else {
              if (!(ye < te)) break e;
              for (Ae = ye - 280, e(re != null); F < ae; ) ye = o[F++], re.X[(506832829 * ye & 4294967295) >>> re.Mb] = ye;
              ye = ae, e(!(Ae >>> (Be = re).Xa)), o[ye] = Be.X[Ae], Ae = true;
            }
            Ae || e(E.h == B(E));
          }
          if (i.Pb && E.h && ae < v) e(i.m.h), i.a = 5, i.m = i.wd, i.$ = i.xd, 0 < i.s.ua && Pe(i.s.vb, i.s.Wa);
          else {
            if (E.h) break e;
            x?.(i, A > y ? y : A), i.a = 0, i.$ = ae - f;
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
        var i = new Ze();
        return i == null ? null : (i.a = 0, i.xb = Hl, Ct("Predictor", "VP8LPredictors"), Ct("Predictor", "VP8LPredictors_C"), Ct("PredictorAdd", "VP8LPredictorsAdd"), Ct("PredictorAdd", "VP8LPredictorsAdd_C"), zt = ht, _a = it, Aa = Ut, Vr = gt, Gr = lt, $r = ct, xi = Ft, H.VP8LMapColor32b = fr, H.VP8LMapColor8b = xa, i);
      }
      function or(i, o, f, m, v) {
        var y = 1, x = [
          i
        ], A = [
          o
        ], k = m.m, E = m.s, K = null, ae = 0;
        e: for (; ; ) {
          if (f) for (; y && xe(k, 1); ) {
            var F = x, X = A, te = m, he = 1, re = te.m, de = te.gc[te.ab], me = xe(re, 2);
            if (te.Oc & 1 << me) y = 0;
            else {
              switch (te.Oc |= 1 << me, de.hc = me, de.Ea = F[0], de.nc = X[0], de.K = [
                null
              ], ++te.ab, e(4 >= te.ab), me) {
                case 0:
                case 1:
                  de.b = xe(re, 3) + 2, he = or(Ne(de.Ea, de.b), Ne(de.nc, de.b), 0, te, de.K), de.K = de.K[0];
                  break;
                case 3:
                  var Ae, ye = xe(re, 8) + 1, Be = 16 < ye ? 0 : 4 < ye ? 1 : 2 < ye ? 2 : 3;
                  if (F[0] = Ne(de.Ea, Be), de.b = Be, Ae = he = or(ye, 1, 0, te, de.K)) {
                    var Ie, st = ye, Re = de, pt = 1 << (8 >> Re.b), tn = a(pt);
                    if (tn == null) Ae = 0;
                    else {
                      var ot = Re.K[0], Oe = Re.w;
                      for (tn[0] = Re.K[0][0], Ie = 1; Ie < 1 * st; ++Ie) tn[Ie] = Ge(ot[Oe + Ie], tn[Ie - 1]);
                      for (; Ie < 4 * pt; ++Ie) tn[Ie] = 0;
                      Re.K[0] = null, Re.K[0] = tn, Ae = 1;
                    }
                  }
                  he = Ae;
                  break;
                case 2:
                  break;
                default:
                  e(0);
              }
              y = he;
            }
          }
          if (x = x[0], A = A[0], y && xe(k, 1) && !(y = 1 <= (ae = xe(k, 4)) && 11 >= ae)) {
            m.a = 3;
            break e;
          }
          var ke;
          if (ke = y) t: {
            var Wt, rt, mt, Et = m, un = x, yn = A, Tt = ae, pn = f, xn = Et.m, nn = Et.s, vt = [
              null
            ], _t = 1, Bt = 0, At = yh[Tt];
            n: for (; ; ) {
              if (pn && xe(xn, 1)) {
                var fn = xe(xn, 3) + 2, er = Ne(un, fn), Vt = Ne(yn, fn), An = er * Vt;
                if (!or(er, Vt, 0, Et, vt)) break n;
                for (vt = vt[0], nn.xc = fn, Wt = 0; Wt < An; ++Wt) {
                  var kt = vt[Wt] >> 8 & 65535;
                  vt[Wt] = kt, kt >= _t && (_t = kt + 1);
                }
              }
              if (xn.h) break n;
              for (rt = 0; 5 > rt; ++rt) {
                var rn = Ul[rt];
                !rt && 0 < Tt && (rn += 1 << Tt), Bt < rn && (Bt = rn);
              }
              var In = h(_t * At, G), Nn = _t, jn = h(Nn, ce);
              if (jn == null) var En = null;
              else e(65536 >= Nn), En = jn;
              var Ln = a(Bt);
              if (En == null || Ln == null || In == null) {
                Et.a = 1;
                break n;
              }
              var Fn = In;
              for (Wt = mt = 0; Wt < _t; ++Wt) {
                var jt = En[Wt], Mn = jt.G, tr = jt.H, _i = 0, Mr = 1, hn = 0;
                for (rt = 0; 5 > rt; ++rt) {
                  rn = Ul[rt], Mn[rt] = Fn, tr[rt] = mt, !rt && 0 < Tt && (rn += 1 << Tt);
                  i: {
                    var bs, _o = rn, vs = Et, Ca = Ln, Uh = Fn, zh = mt, Ao = 0, Xr = vs.m, Hh = xe(Xr, 1);
                    if (s(Ca, 0, 0, _o), Hh) {
                      var Wh = xe(Xr, 1) + 1, Vh = xe(Xr, 1), Xl = xe(Xr, Vh == 0 ? 1 : 8);
                      Ca[Xl] = 1, Wh == 2 && (Ca[Xl = xe(Xr, 8)] = 1);
                      var ws = 1;
                    } else {
                      var Zl = a(19), Ql = xe(Xr, 4) + 4;
                      if (19 < Ql) {
                        vs.a = 3;
                        var ys = 0;
                        break i;
                      }
                      for (bs = 0; bs < Ql; ++bs) Zl[vh[bs]] = xe(Xr, 3);
                      var Lo = void 0, Ia = void 0, ec = vs, Gh = Zl, xs = _o, tc = Ca, So = 0, Zr = ec.m, nc = 8, rc = h(128, G);
                      r: for (; O(rc, 0, 7, Gh, 19); ) {
                        if (xe(Zr, 1)) {
                          var $h = 2 + 2 * xe(Zr, 3);
                          if ((Lo = 2 + xe(Zr, $h)) > xs) break r;
                        } else Lo = xs;
                        for (Ia = 0; Ia < xs && Lo--; ) {
                          W(Zr);
                          var ic = rc[0 + (127 & P(Zr))];
                          q(Zr, Zr.u + ic.g);
                          var Wi = ic.value;
                          if (16 > Wi) tc[Ia++] = Wi, Wi != 0 && (nc = Wi);
                          else {
                            var Kh = Wi == 16, ac = Wi - 16, Yh = gh[ac], sc = xe(Zr, mh[ac]) + Yh;
                            if (Ia + sc > xs) break r;
                            for (var Jh = Kh ? nc : 0; 0 < sc--; ) tc[Ia++] = Jh;
                          }
                        }
                        So = 1;
                        break r;
                      }
                      So || (ec.a = 3), ws = So;
                    }
                    (ws = ws && !Xr.h) && (Ao = O(Uh, zh, 8, Ca, _o)), ws && Ao != 0 ? ys = Ao : (vs.a = 3, ys = 0);
                  }
                  if (ys == 0) break n;
                  if (Mr && bh[rt] == 1 && (Mr = Fn[mt].g == 0), _i += Fn[mt].g, mt += ys, 3 >= rt) {
                    var ja, ko = Ln[0];
                    for (ja = 1; ja < rn; ++ja) Ln[ja] > ko && (ko = Ln[ja]);
                    hn += ko;
                  }
                }
                if (jt.nd = Mr, jt.Qb = 0, Mr && (jt.qb = (Mn[3][tr[3] + 0].value << 24 | Mn[1][tr[1] + 0].value << 16 | Mn[2][tr[2] + 0].value) >>> 0, _i == 0 && 256 > Mn[0][tr[0] + 0].value && (jt.Qb = 1, jt.qb += Mn[0][tr[0] + 0].value << 8)), jt.jc = !jt.Qb && 6 > hn, jt.jc) {
                  var Ns, Rr = jt;
                  for (Ns = 0; Ns < yi; ++Ns) {
                    var Qr = Ns, ei = Rr.pd[Qr], _s = Rr.G[0][Rr.H[0] + Qr];
                    256 <= _s.value ? (ei.g = _s.g + 256, ei.value = _s.value) : (ei.g = 0, ei.value = 0, Qr >>= an(_s, 8, ei), Qr >>= an(Rr.G[1][Rr.H[1] + Qr], 16, ei), Qr >>= an(Rr.G[2][Rr.H[2] + Qr], 0, ei), an(Rr.G[3][Rr.H[3] + Qr], 24, ei));
                  }
                }
              }
              nn.vc = vt, nn.Wb = _t, nn.Ya = En, nn.yc = In, ke = 1;
              break t;
            }
            ke = 0;
          }
          if (!(y = ke)) {
            m.a = 3;
            break e;
          }
          if (0 < ae) {
            if (E.ua = 1 << ae, !I(E.Wa, ae)) {
              m.a = 1, y = 0;
              break e;
            }
          } else E.ua = 0;
          var Po = m, oc = x, Xh = A, Co = Po.s, Io = Co.xc;
          if (Po.c = oc, Po.i = Xh, Co.md = Ne(oc, Io), Co.wc = Io == 0 ? -1 : (1 << Io) - 1, f) {
            m.xb = Ph;
            break e;
          }
          if ((K = a(x * A)) == null) {
            m.a = 1, y = 0;
            break e;
          }
          y = (y = Jn(m, K, 0, x, A, A, null)) && !k.h;
          break e;
        }
        return y ? (v != null ? v[0] = K : (e(K == null), e(f)), m.$ = 0, f || Tn(E)) : Tn(E), y;
      }
      function ci(i, o) {
        var f = i.c * i.i, m = f + o + 16 * o;
        return e(i.c <= o), i.V = a(m), i.V == null ? (i.Ta = null, i.Ua = 0, i.a = 1, 0) : (i.Ta = i.V, i.Ua = i.Ba + f + o, 1);
      }
      function Ei(i, o) {
        var f = i.C, m = o - f, v = i.V, y = i.Ba + i.c * f;
        for (e(o <= i.l.o); 0 < m; ) {
          var x = 16 < m ? 16 : m, A = i.l.ma, k = i.l.width, E = k * x, K = A.ca, ae = A.tb + k * f, F = i.Ta, X = i.Ua;
          oi(i, x, v, y), Fl(F, X, K, ae, E), sr(A, f, f + x, K, ae, k), m -= x, v += x * i.c, f += x;
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
            for (var y = v[m], x = 0; x < y && (f.push(v.length > m + 1 ? [] : 0), !(v.length < m + 1)); x++) o(f[x], m + 1, v);
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
      function Va() {
        this.uc = this.M = this.Nb = 0, this.wa = Array(new Bn()), this.Y = 0, this.ya = Array(new sa()), this.aa = 0, this.l = new Ri();
      }
      function Ga() {
        this.y = a(16), this.f = a(8), this.ea = a(8);
      }
      function $a() {
        this.cb = this.a = 0, this.sc = "", this.m = new N(), this.Od = new Fi(), this.Kc = new Mi(), this.ed = new Ha(), this.Qa = new Zs(), this.Ic = this.$c = this.Aa = 0, this.D = new Va(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = h(8, N), this.ia = 0, this.pb = h(4, Wa), this.Pa = new za(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
          0,
          0,
          0,
          0
        ], this.Gd = Array(new Ga()), this.Hd = 0, this.rb = Array(new aa()), this.sb = 0, this.wa = Array(new Bn()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new sa()), this.L = this.aa = 0, this.gd = l([
          4,
          2
        ], Bn), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
      }
      function lr(i, o) {
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
      function cr(i, o) {
        if (i == null) return 0;
        if (i.a = 0, i.sc = "OK", o == null) return Yt(i, 2, "null VP8Io passed to VP8GetHeaders()");
        var f = o.data, m = o.w, v = o.ha;
        if (4 > v) return Yt(i, 7, "Truncated header.");
        var y = f[m + 0] | f[m + 1] << 8 | f[m + 2] << 16, x = i.Od;
        if (x.Rb = !(1 & y), x.td = y >> 1 & 7, x.yd = y >> 4 & 1, x.ub = y >> 5, 3 < x.td) return Yt(i, 3, "Incorrect keyframe parameters.");
        if (!x.yd) return Yt(i, 4, "Frame not displayable.");
        m += 3, v -= 3;
        var A = i.Kc;
        if (x.Rb) {
          if (7 > v) return Yt(i, 7, "cannot parse picture header");
          if (!Ka(f, m, v)) return Yt(i, 3, "Bad code word");
          A.c = 16383 & (f[m + 4] << 8 | f[m + 3]), A.Td = f[m + 4] >> 6, A.i = 16383 & (f[m + 6] << 8 | f[m + 5]), A.Ud = f[m + 6] >> 6, m += 7, v -= 7, i.za = A.c + 15 >> 4, i.Ub = A.i + 15 >> 4, o.width = A.c, o.height = A.i, o.Da = 0, o.j = 0, o.v = 0, o.va = o.width, o.o = o.height, o.da = 0, o.ib = o.width, o.hb = o.height, o.U = o.width, o.T = o.height, s((y = i.Pa).jb, 0, 255, y.jb.length), e((y = i.Qa) != null), y.Cb = 0, y.Bb = 0, y.Fb = 1, s(y.Zb, 0, 0, y.Zb.length), s(y.Lb, 0, 0, y.Lb);
        }
        if (x.ub > v) return Yt(i, 7, "bad partition length");
        ue(y = i.m, f, m, x.ub), m += x.ub, v -= x.ub, x.Rb && (A.Ld = Q(y), A.Kd = Q(y)), A = i.Qa;
        var k, E = i.Pa;
        if (e(y != null), e(A != null), A.Cb = Q(y), A.Cb) {
          if (A.Bb = Q(y), Q(y)) {
            for (A.Fb = Q(y), k = 0; 4 > k; ++k) A.Zb[k] = Q(y) ? oe(y, 7) : 0;
            for (k = 0; 4 > k; ++k) A.Lb[k] = Q(y) ? oe(y, 6) : 0;
          }
          if (A.Bb) for (k = 0; 3 > k; ++k) E.jb[k] = Q(y) ? be(y, 8) : 255;
        } else A.Bb = 0;
        if (y.Ka) return Yt(i, 3, "cannot parse segment header");
        if ((A = i.ed).zd = Q(y), A.Tb = be(y, 6), A.wb = be(y, 3), A.Pc = Q(y), A.Pc && Q(y)) {
          for (E = 0; 4 > E; ++E) Q(y) && (A.vd[E] = oe(y, 6));
          for (E = 0; 4 > E; ++E) Q(y) && (A.od[E] = oe(y, 6));
        }
        if (i.L = A.Tb == 0 ? 0 : A.zd ? 1 : 2, y.Ka) return Yt(i, 3, "cannot parse filter header");
        var K = v;
        if (v = k = m, m = k + K, A = K, i.Xb = (1 << be(i.m, 2)) - 1, K < 3 * (E = i.Xb)) f = 7;
        else {
          for (k += 3 * E, A -= 3 * E, K = 0; K < E; ++K) {
            var ae = f[v + 0] | f[v + 1] << 8 | f[v + 2] << 16;
            ae > A && (ae = A), ue(i.Jc[+K], f, k, ae), k += ae, A -= ae, v += 3;
          }
          ue(i.Jc[+E], f, k, A), f = k < m ? 0 : 5;
        }
        if (f != 0) return Yt(i, f, "cannot parse partitions");
        for (f = be(k = i.m, 7), v = Q(k) ? oe(k, 4) : 0, m = Q(k) ? oe(k, 4) : 0, A = Q(k) ? oe(k, 4) : 0, E = Q(k) ? oe(k, 4) : 0, k = Q(k) ? oe(k, 4) : 0, K = i.Qa, ae = 0; 4 > ae; ++ae) {
          if (K.Cb) {
            var F = K.Zb[ae];
            K.Fb || (F += f);
          } else {
            if (0 < ae) {
              i.pb[ae] = i.pb[0];
              continue;
            }
            F = f;
          }
          var X = i.pb[ae];
          X.Sc[0] = yo[lr(F + v, 127)], X.Sc[1] = xo[lr(F + 0, 127)], X.Eb[0] = 2 * yo[lr(F + m, 127)], X.Eb[1] = 101581 * xo[lr(F + A, 127)] >> 16, 8 > X.Eb[1] && (X.Eb[1] = 8), X.Qc[0] = yo[lr(F + E, 117)], X.Qc[1] = xo[lr(F + k, 127)], X.lc = F + k;
        }
        if (!x.Rb) return Yt(i, 4, "Not a key frame.");
        for (Q(y), x = i.Pa, f = 0; 4 > f; ++f) {
          for (v = 0; 8 > v; ++v) for (m = 0; 3 > m; ++m) for (A = 0; 11 > A; ++A) E = se(y, Sh[f][v][m][A]) ? be(y, 8) : Ah[f][v][m][A], x.Wc[f][v].Yb[m][A] = E;
          for (v = 0; 17 > v; ++v) x.Xc[f][v] = x.Wc[f][kh[v]];
        }
        return i.kc = Q(y), i.kc && (i.Bd = be(y, 8)), i.cb = 1;
      }
      function Oi(i, o, f, m, v, y, x) {
        var A = o[v].Yb[f];
        for (f = 0; 16 > v; ++v) {
          if (!se(i, A[f + 0])) return v;
          for (; !se(i, A[f + 1]); ) if (A = o[++v].Yb[0], f = 0, v == 16) return 16;
          var k = o[v + 1].Yb;
          if (se(i, A[f + 2])) {
            var E = i, K = 0;
            if (se(E, (F = A)[(ae = f) + 3])) if (se(E, F[ae + 6])) {
              for (A = 0, ae = 2 * (K = se(E, F[ae + 8])) + (F = se(E, F[ae + 9 + K])), K = 0, F = Nh[ae]; F[A]; ++A) K += K + se(E, F[A]);
              K += 3 + (8 << ae);
            } else se(E, F[ae + 7]) ? (K = 7 + 2 * se(E, 165), K += se(E, 145)) : K = 5 + se(E, 159);
            else K = se(E, F[ae + 4]) ? 3 + se(E, F[ae + 5]) : 2;
            A = k[2];
          } else K = 1, A = k[1];
          k = x + _h[v], 0 > (E = i).b && J(E);
          var ae, F = E.b, X = (ae = E.Ca >> 1) - (E.I >> F) >> 31;
          --E.b, E.Ca += X, E.Ca |= 1, E.I -= (ae + 1 & X) << F, y[k] = ((K ^ X) - X) * m[(0 < v) + 0];
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
      function xr(i) {
        return (20091 * i >> 16) + i;
      }
      function Ja(i, o, f, m) {
        var v, y = 0, x = a(16);
        for (v = 0; 4 > v; ++v) {
          var A = i[o + 0] + i[o + 8], k = i[o + 0] - i[o + 8], E = (35468 * i[o + 4] >> 16) - xr(i[o + 12]), K = xr(i[o + 4]) + (35468 * i[o + 12] >> 16);
          x[y + 0] = A + K, x[y + 1] = k + E, x[y + 2] = k - E, x[y + 3] = A - K, y += 4, o++;
        }
        for (v = y = 0; 4 > v; ++v) A = (i = x[y + 0] + 4) + x[y + 8], k = i - x[y + 8], E = (35468 * x[y + 4] >> 16) - xr(x[y + 12]), qn(f, m, 0, 0, A + (K = xr(x[y + 4]) + (35468 * x[y + 12] >> 16))), qn(f, m, 1, 0, k + E), qn(f, m, 2, 0, k - E), qn(f, m, 3, 0, A - K), y++, m += 32;
      }
      function eo(i, o, f, m) {
        var v = i[o + 0] + 4, y = 35468 * i[o + 4] >> 16, x = xr(i[o + 4]), A = 35468 * i[o + 1] >> 16;
        Zt(f, m, 0, v + x, i = xr(i[o + 1]), A), Zt(f, m, 1, v + y, i, A), Zt(f, m, 2, v - y, i, A), Zt(f, m, 3, v - x, i, A);
      }
      function to(i, o, f, m, v) {
        Ja(i, o, f, m), v && Ja(i, o + 16, f, m + 4);
      }
      function ur(i, o, f, m) {
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
          var x = i[o + 0 + v] + i[o + 12 + v], A = i[o + 4 + v] + i[o + 8 + v], k = i[o + 4 + v] - i[o + 8 + v], E = i[o + 0 + v] - i[o + 12 + v];
          y[0 + v] = x + A, y[8 + v] = x - A, y[4 + v] = E + k, y[12 + v] = E - k;
        }
        for (v = 0; 4 > v; ++v) x = (i = y[0 + 4 * v] + 3) + y[3 + 4 * v], A = y[1 + 4 * v] + y[2 + 4 * v], k = y[1 + 4 * v] - y[2 + 4 * v], E = i - y[3 + 4 * v], f[m + 0] = x + A >> 3, f[m + 16] = E + k >> 3, f[m + 32] = x - A >> 3, f[m + 48] = E - k >> 3, m += 64;
      }
      function ui(i, o, f) {
        var m, v = o - 32, y = Cn, x = 255 - i[v - 1];
        for (m = 0; m < f; ++m) {
          var A, k = y, E = x + i[o - 1];
          for (A = 0; A < f; ++A) i[o + A] = k[E + i[v + A]];
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
      function Xn(i, o, f) {
        var m;
        for (m = 0; 16 > m; ++m) s(o, f + 32 * m, i, 16);
      }
      function ao(i, o) {
        var f, m = 16;
        for (f = 0; 16 > f; ++f) m += i[o - 1 + 32 * f] + i[o + f - 32];
        Xn(m >> 5, i, o);
      }
      function fi(i, o) {
        var f, m = 8;
        for (f = 0; 16 > f; ++f) m += i[o - 1 + 32 * f];
        Xn(m >> 4, i, o);
      }
      function la(i, o) {
        var f, m = 8;
        for (f = 0; 16 > f; ++f) m += i[o + f - 32];
        Xn(m >> 4, i, o);
      }
      function so(i, o) {
        Xn(128, i, o);
      }
      function Qe(i, o, f) {
        return i + 2 * o + f + 2 >> 2;
      }
      function oo(i, o) {
        var f, m = o - 32;
        for (m = new Uint8Array([
          Qe(i[m - 1], i[m + 0], i[m + 1]),
          Qe(i[m + 0], i[m + 1], i[m + 2]),
          Qe(i[m + 1], i[m + 2], i[m + 3]),
          Qe(i[m + 2], i[m + 3], i[m + 4])
        ]), f = 0; 4 > f; ++f) r(i, o + 32 * f, m, 0, m.length);
      }
      function lo(i, o) {
        var f = i[o - 1], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96];
        _e(i, o + 0, 16843009 * Qe(i[o - 1 - 32], f, m)), _e(i, o + 32, 16843009 * Qe(f, m, v)), _e(i, o + 64, 16843009 * Qe(m, v, y)), _e(i, o + 96, 16843009 * Qe(v, y, y));
      }
      function co(i, o) {
        var f, m = 4;
        for (f = 0; 4 > f; ++f) m += i[o + f - 32] + i[o - 1 + 32 * f];
        for (m >>= 3, f = 0; 4 > f; ++f) s(i, o + 32 * f, m, 4);
      }
      function Nr(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 - 32], x = i[o + 0 - 32], A = i[o + 1 - 32], k = i[o + 2 - 32], E = i[o + 3 - 32];
        i[o + 0 + 96] = Qe(m, v, i[o - 1 + 96]), i[o + 1 + 96] = i[o + 0 + 64] = Qe(f, m, v), i[o + 2 + 96] = i[o + 1 + 64] = i[o + 0 + 32] = Qe(y, f, m), i[o + 3 + 96] = i[o + 2 + 64] = i[o + 1 + 32] = i[o + 0 + 0] = Qe(x, y, f), i[o + 3 + 64] = i[o + 2 + 32] = i[o + 1 + 0] = Qe(A, x, y), i[o + 3 + 32] = i[o + 2 + 0] = Qe(k, A, x), i[o + 3 + 0] = Qe(E, k, A);
      }
      function _r(i, o) {
        var f = i[o + 1 - 32], m = i[o + 2 - 32], v = i[o + 3 - 32], y = i[o + 4 - 32], x = i[o + 5 - 32], A = i[o + 6 - 32], k = i[o + 7 - 32];
        i[o + 0 + 0] = Qe(i[o + 0 - 32], f, m), i[o + 1 + 0] = i[o + 0 + 32] = Qe(f, m, v), i[o + 2 + 0] = i[o + 1 + 32] = i[o + 0 + 64] = Qe(m, v, y), i[o + 3 + 0] = i[o + 2 + 32] = i[o + 1 + 64] = i[o + 0 + 96] = Qe(v, y, x), i[o + 3 + 32] = i[o + 2 + 64] = i[o + 1 + 96] = Qe(y, x, A), i[o + 3 + 64] = i[o + 2 + 96] = Qe(x, A, k), i[o + 3 + 96] = Qe(A, k, k);
      }
      function uo(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 - 32], x = i[o + 0 - 32], A = i[o + 1 - 32], k = i[o + 2 - 32], E = i[o + 3 - 32];
        i[o + 0 + 0] = i[o + 1 + 64] = y + x + 1 >> 1, i[o + 1 + 0] = i[o + 2 + 64] = x + A + 1 >> 1, i[o + 2 + 0] = i[o + 3 + 64] = A + k + 1 >> 1, i[o + 3 + 0] = k + E + 1 >> 1, i[o + 0 + 96] = Qe(v, m, f), i[o + 0 + 64] = Qe(m, f, y), i[o + 0 + 32] = i[o + 1 + 96] = Qe(f, y, x), i[o + 1 + 32] = i[o + 2 + 96] = Qe(y, x, A), i[o + 2 + 32] = i[o + 3 + 96] = Qe(x, A, k), i[o + 3 + 32] = Qe(A, k, E);
      }
      function fo(i, o) {
        var f = i[o + 0 - 32], m = i[o + 1 - 32], v = i[o + 2 - 32], y = i[o + 3 - 32], x = i[o + 4 - 32], A = i[o + 5 - 32], k = i[o + 6 - 32], E = i[o + 7 - 32];
        i[o + 0 + 0] = f + m + 1 >> 1, i[o + 1 + 0] = i[o + 0 + 64] = m + v + 1 >> 1, i[o + 2 + 0] = i[o + 1 + 64] = v + y + 1 >> 1, i[o + 3 + 0] = i[o + 2 + 64] = y + x + 1 >> 1, i[o + 0 + 32] = Qe(f, m, v), i[o + 1 + 32] = i[o + 0 + 96] = Qe(m, v, y), i[o + 2 + 32] = i[o + 1 + 96] = Qe(v, y, x), i[o + 3 + 32] = i[o + 2 + 96] = Qe(y, x, A), i[o + 3 + 64] = Qe(x, A, k), i[o + 3 + 96] = Qe(A, k, E);
      }
      function Ti(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96];
        i[o + 0 + 0] = f + m + 1 >> 1, i[o + 2 + 0] = i[o + 0 + 32] = m + v + 1 >> 1, i[o + 2 + 32] = i[o + 0 + 64] = v + y + 1 >> 1, i[o + 1 + 0] = Qe(f, m, v), i[o + 3 + 0] = i[o + 1 + 32] = Qe(m, v, y), i[o + 3 + 32] = i[o + 1 + 64] = Qe(v, y, y), i[o + 3 + 64] = i[o + 2 + 64] = i[o + 0 + 96] = i[o + 1 + 96] = i[o + 2 + 96] = i[o + 3 + 96] = y;
      }
      function ca(i, o) {
        var f = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96], x = i[o - 1 - 32], A = i[o + 0 - 32], k = i[o + 1 - 32], E = i[o + 2 - 32];
        i[o + 0 + 0] = i[o + 2 + 32] = f + x + 1 >> 1, i[o + 0 + 32] = i[o + 2 + 64] = m + f + 1 >> 1, i[o + 0 + 64] = i[o + 2 + 96] = v + m + 1 >> 1, i[o + 0 + 96] = y + v + 1 >> 1, i[o + 3 + 0] = Qe(A, k, E), i[o + 2 + 0] = Qe(x, A, k), i[o + 1 + 0] = i[o + 3 + 32] = Qe(f, x, A), i[o + 1 + 32] = i[o + 3 + 64] = Qe(m, f, x), i[o + 1 + 64] = i[o + 3 + 96] = Qe(v, m, f), i[o + 1 + 96] = Qe(y, v, m);
      }
      function hi(i, o) {
        var f;
        for (f = 0; 8 > f; ++f) r(i, o + 32 * f, i, o - 32, 8);
      }
      function ho(i, o) {
        var f;
        for (f = 0; 8 > f; ++f) s(i, o, i[o - 1], 8), o += 32;
      }
      function Ar(i, o, f) {
        var m;
        for (m = 0; 8 > m; ++m) s(o, f + 32 * m, i, 8);
      }
      function po(i, o) {
        var f, m = 8;
        for (f = 0; 8 > f; ++f) m += i[o + f - 32] + i[o - 1 + 32 * f];
        Ar(m >> 4, i, o);
      }
      function ua(i, o) {
        var f, m = 4;
        for (f = 0; 8 > f; ++f) m += i[o + f - 32];
        Ar(m >> 3, i, o);
      }
      function fa(i, o) {
        var f, m = 4;
        for (f = 0; 8 > f; ++f) m += i[o - 1 + 32 * f];
        Ar(m >> 3, i, o);
      }
      function es(i, o) {
        Ar(128, i, o);
      }
      function Lr(i, o, f) {
        var m = i[o - f], v = i[o + 0], y = 3 * (v - m) + mo[1020 + i[o - 2 * f] - i[o + f]], x = ls[112 + (y + 4 >> 3)];
        i[o - f] = Cn[255 + m + ls[112 + (y + 3 >> 3)]], i[o + 0] = Cn[255 + v - x];
      }
      function ha(i, o, f, m) {
        var v = i[o + 0], y = i[o + f];
        return Hn[255 + i[o - 2 * f] - i[o - f]] > m || Hn[255 + y - v] > m;
      }
      function Bi(i, o, f, m) {
        return 4 * Hn[255 + i[o - f] - i[o + 0]] + Hn[255 + i[o - 2 * f] - i[o + f]] <= m;
      }
      function da(i, o, f, m, v) {
        var y = i[o - 3 * f], x = i[o - 2 * f], A = i[o - f], k = i[o + 0], E = i[o + f], K = i[o + 2 * f], ae = i[o + 3 * f];
        return 4 * Hn[255 + A - k] + Hn[255 + x - E] > m ? 0 : Hn[255 + i[o - 4 * f] - y] <= v && Hn[255 + y - x] <= v && Hn[255 + x - A] <= v && Hn[255 + ae - K] <= v && Hn[255 + K - E] <= v && Hn[255 + E - k] <= v;
      }
      function di(i, o, f, m) {
        var v = 2 * m + 1;
        for (m = 0; 16 > m; ++m) Bi(i, o + m, f, v) && Lr(i, o + m, f);
      }
      function pa(i, o, f, m) {
        var v = 2 * m + 1;
        for (m = 0; 16 > m; ++m) Bi(i, o + m * f, 1, v) && Lr(i, o + m * f, 1);
      }
      function ts(i, o, f, m) {
        var v;
        for (v = 3; 0 < v; --v) di(i, o += 4 * f, f, m);
      }
      function ns(i, o, f, m) {
        var v;
        for (v = 3; 0 < v; --v) pa(i, o += 4, f, m);
      }
      function Sr(i, o, f, m, v, y, x, A) {
        for (y = 2 * y + 1; 0 < v--; ) {
          if (da(i, o, f, y, x)) if (ha(i, o, f, A)) Lr(i, o, f);
          else {
            var k = i, E = o, K = f, ae = k[E - 2 * K], F = k[E - K], X = k[E + 0], te = k[E + K], he = k[E + 2 * K], re = 27 * (me = mo[1020 + 3 * (X - F) + mo[1020 + ae - te]]) + 63 >> 7, de = 18 * me + 63 >> 7, me = 9 * me + 63 >> 7;
            k[E - 3 * K] = Cn[255 + k[E - 3 * K] + me], k[E - 2 * K] = Cn[255 + ae + de], k[E - K] = Cn[255 + F + re], k[E + 0] = Cn[255 + X - re], k[E + K] = Cn[255 + te - de], k[E + 2 * K] = Cn[255 + he - me];
          }
          o += m;
        }
      }
      function kr(i, o, f, m, v, y, x, A) {
        for (y = 2 * y + 1; 0 < v--; ) {
          if (da(i, o, f, y, x)) if (ha(i, o, f, A)) Lr(i, o, f);
          else {
            var k = i, E = o, K = f, ae = k[E - K], F = k[E + 0], X = k[E + K], te = ls[112 + (4 + (he = 3 * (F - ae)) >> 3)], he = ls[112 + (he + 3 >> 3)], re = te + 1 >> 1;
            k[E - 2 * K] = Cn[255 + k[E - 2 * K] + re], k[E - K] = Cn[255 + ae + he], k[E + 0] = Cn[255 + F - te], k[E + K] = Cn[255 + X - re];
          }
          o += m;
        }
      }
      function rs(i, o, f, m, v, y) {
        Sr(i, o, f, 1, 16, m, v, y);
      }
      function pi(i, o, f, m, v, y) {
        Sr(i, o, 1, f, 16, m, v, y);
      }
      function is(i, o, f, m, v, y) {
        var x;
        for (x = 3; 0 < x; --x) kr(i, o += 4 * f, f, 1, 16, m, v, y);
      }
      function c(i, o, f, m, v, y) {
        var x;
        for (x = 3; 0 < x; --x) kr(i, o += 4, 1, f, 16, m, v, y);
      }
      function b(i, o, f, m, v, y, x, A) {
        Sr(i, o, v, 1, 8, y, x, A), Sr(f, m, v, 1, 8, y, x, A);
      }
      function M(i, o, f, m, v, y, x, A) {
        Sr(i, o, 1, v, 8, y, x, A), Sr(f, m, 1, v, 8, y, x, A);
      }
      function z(i, o, f, m, v, y, x, A) {
        kr(i, o + 4 * v, v, 1, 8, y, x, A), kr(f, m + 4 * v, v, 1, 8, y, x, A);
      }
      function Z(i, o, f, m, v, y, x, A) {
        kr(i, o + 4, 1, v, 8, y, x, A), kr(f, m + 4, 1, v, 8, y, x, A);
      }
      function pe() {
        this.ba = new ut(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xt(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
      }
      function we() {
        this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
      }
      function Me() {
        this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
      }
      function Te() {
        this.ua = 0, this.Wa = new Je(), this.vb = new Je(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new ce(), this.yc = new G();
      }
      function Ze() {
        this.xb = this.a = 0, this.l = new Ri(), this.ca = new ut(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new T(), this.Pb = 0, this.wd = new T(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Te(), this.ab = 0, this.gc = h(4, Me), this.Oc = 0;
      }
      function at() {
        this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Ri(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
      }
      function bt(i, o, f, m, v, y, x) {
        for (i = i == null ? 0 : i[o + 0], o = 0; o < x; ++o) v[y + o] = i + f[m + o] & 255, i = v[y + o];
      }
      function Ot(i, o, f, m, v, y, x) {
        var A;
        if (i == null) bt(null, null, f, m, v, y, x);
        else for (A = 0; A < x; ++A) v[y + A] = i[o + A] + f[m + A] & 255;
      }
      function Jt(i, o, f, m, v, y, x) {
        if (i == null) bt(null, null, f, m, v, y, x);
        else {
          var A, k = i[o + 0], E = k, K = k;
          for (A = 0; A < x; ++A) E = K + (k = i[o + A]) - E, K = f[m + A] + (-256 & E ? 0 > E ? 0 : 255 : E) & 255, E = k, v[y + A] = K;
        }
      }
      function It(i, o, f, m) {
        var v = o.width, y = o.o;
        if (e(i != null && o != null), 0 > f || 0 >= m || f + m > y) return null;
        if (!i.Cc) {
          if (i.ga == null) {
            var x;
            if (i.ga = new at(), (x = i.ga == null) || (x = o.width * o.o, e(i.Gb.length == 0), i.Gb = a(x), i.Uc = 0, i.Gb == null ? x = 0 : (i.mb = i.Gb, i.nb = i.Uc, i.rc = null, x = 1), x = !x), !x) {
              x = i.ga;
              var A = i.Fa, k = i.P, E = i.qc, K = i.mb, ae = i.nb, F = k + 1, X = E - 1, te = x.l;
              if (e(A != null && K != null && o != null), Jr[0] = null, Jr[1] = bt, Jr[2] = Ot, Jr[3] = Jt, x.ca = K, x.tb = ae, x.c = o.width, x.i = o.height, e(0 < x.c && 0 < x.i), 1 >= E) o = 0;
              else if (x.$a = 3 & A[k + 0], x.Z = A[k + 0] >> 2 & 3, x.Lc = A[k + 0] >> 4 & 3, k = A[k + 0] >> 6 & 3, 0 > x.$a || 1 < x.$a || 4 <= x.Z || 1 < x.Lc || k) o = 0;
              else if (te.put = Ke, te.ac = ar, te.bc = wr, te.ma = x, te.width = o.width, te.height = o.height, te.Da = o.Da, te.v = o.v, te.va = o.va, te.j = o.j, te.o = o.o, x.$a) e: {
                e(x.$a == 1), o = li();
                t: for (; ; ) {
                  if (o == null) {
                    o = 0;
                    break e;
                  }
                  if (e(x != null), x.mc = o, o.c = x.c, o.i = x.i, o.l = x.l, o.l.ma = x, o.l.width = x.c, o.l.height = x.i, o.a = 0, ie(o.m, A, F, X), !or(x.c, x.i, 1, o, null) || (o.ab == 1 && o.gc[0].hc == 3 && Kn(o.s) ? (x.ic = 1, A = o.c * o.i, o.Ta = null, o.Ua = 0, o.V = a(A), o.Ba = 0, o.V == null ? (o.a = 1, o = 0) : o = 1) : (x.ic = 0, o = ci(o, x.c)), !o)) break t;
                  o = 1;
                  break e;
                }
                x.mc = null, o = 0;
              }
              else o = X >= x.c * x.i;
              x = !o;
            }
            if (x) return null;
            i.ga.Lc != 1 ? i.Ga = 0 : m = y - f;
          }
          e(i.ga != null), e(f + m <= y);
          e: {
            if (o = (A = i.ga).c, y = A.l.o, A.$a == 0) {
              if (F = i.rc, X = i.Vc, te = i.Fa, k = i.P + 1 + f * o, E = i.mb, K = i.nb + f * o, e(k <= i.P + i.qc), A.Z != 0) for (e(Jr[A.Z] != null), x = 0; x < m; ++x) Jr[A.Z](F, X, te, k, E, K, o), F = E, X = K, K += o, k += o;
              else for (x = 0; x < m; ++x) r(E, K, te, k, o), F = E, X = K, K += o, k += o;
              i.rc = F, i.Vc = X;
            } else {
              if (e(A.mc != null), o = f + m, e((x = A.mc) != null), e(o <= x.i), x.C >= o) o = 1;
              else if (A.ic || Zn(), A.ic) {
                A = x.V, F = x.Ba, X = x.c;
                var he = x.i, re = (te = 1, k = x.$ / X, E = x.$ % X, K = x.m, ae = x.s, x.$), de = X * he, me = X * o, Ae = ae.wc, ye = re < me ? on(ae, E, k) : null;
                e(re <= de), e(o <= he), e(Kn(ae));
                t: for (; ; ) {
                  for (; !K.h && re < me; ) {
                    if (E & Ae || (ye = on(ae, E, k)), e(ye != null), W(K), 256 > (he = Dt(ye.G[0], ye.H[0], K))) A[F + re] = he, ++re, ++E >= X && (E = 0, ++k <= o && !(k % 16) && Yn(x, k));
                    else {
                      if (!(280 > he)) {
                        te = 0;
                        break t;
                      }
                      he = On(he - 256, K);
                      var Be, Ie = Dt(ye.G[4], ye.H[4], K);
                      if (W(K), !(re >= (Ie = Dn(X, Ie = On(Ie, K))) && de - re >= he)) {
                        te = 0;
                        break t;
                      }
                      for (Be = 0; Be < he; ++Be) A[F + re + Be] = A[F + re + Be - Ie];
                      for (re += he, E += he; E >= X; ) E -= X, ++k <= o && !(k % 16) && Yn(x, k);
                      re < me && E & Ae && (ye = on(ae, E, k));
                    }
                    e(K.h == B(K));
                  }
                  Yn(x, k > o ? o : k);
                  break t;
                }
                !te || K.h && re < de ? (te = 0, x.a = K.h ? 5 : 3) : x.$ = re, o = te;
              } else o = Jn(x, x.V, x.Ba, x.c, x.i, o, Ei);
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
          var x, A = i, k = o + (f ? 1 : 0), E = i, K = o + (f ? 0 : 3);
          for (x = 0; x < m; ++x) {
            var ae = E[K + 4 * x];
            ae != 255 && (ae *= 32897, A[k + 4 * x + 0] = A[k + 4 * x + 0] * ae >> 23, A[k + 4 * x + 1] = A[k + 4 * x + 1] * ae >> 23, A[k + 4 * x + 2] = A[k + 4 * x + 2] * ae >> 23);
          }
          o += y;
        }
      }
      function Xt(i, o, f, m, v) {
        for (; 0 < m--; ) {
          var y;
          for (y = 0; y < f; ++y) {
            var x = i[o + 2 * y + 0], A = 15 & (E = i[o + 2 * y + 1]), k = 4369 * A, E = (240 & E | E >> 4) * k >> 16;
            i[o + 2 * y + 0] = (240 & x | x >> 4) * k >> 16 & 240 | (15 & x | x << 4) * k >> 16 >> 4 & 15, i[o + 2 * y + 1] = 240 & E | A;
          }
          o += v;
        }
      }
      function ln(i, o, f, m, v, y, x, A) {
        var k, E, K = 255;
        for (E = 0; E < v; ++E) {
          for (k = 0; k < m; ++k) {
            var ae = i[o + k];
            y[x + 4 * k] = ae, K &= ae;
          }
          o += f, x += A;
        }
        return K != 255;
      }
      function Pr(i, o, f, m, v) {
        var y;
        for (y = 0; y < v; ++y) f[m + y] = i[o + y] >> 8;
      }
      function Zn() {
        Sa = Qt, jl = Xt, El = ln, Fl = Pr;
      }
      function Cr(i, o, f) {
        H[i] = function(m, v, y, x, A, k, E, K, ae, F, X, te, he, re, de, me, Ae) {
          var ye, Be = Ae - 1 >> 1, Ie = A[k + 0] | E[K + 0] << 16, st = ae[F + 0] | X[te + 0] << 16;
          e(m != null);
          var Re = 3 * Ie + st + 131074 >> 2;
          for (o(m[v + 0], 255 & Re, Re >> 16, he, re), y != null && (Re = 3 * st + Ie + 131074 >> 2, o(y[x + 0], 255 & Re, Re >> 16, de, me)), ye = 1; ye <= Be; ++ye) {
            var pt = A[k + ye] | E[K + ye] << 16, tn = ae[F + ye] | X[te + ye] << 16, ot = Ie + pt + st + tn + 524296, Oe = ot + 2 * (pt + st) >> 3;
            Re = Oe + Ie >> 1, Ie = (ot = ot + 2 * (Ie + tn) >> 3) + pt >> 1, o(m[v + 2 * ye - 1], 255 & Re, Re >> 16, he, re + (2 * ye - 1) * f), o(m[v + 2 * ye - 0], 255 & Ie, Ie >> 16, he, re + (2 * ye - 0) * f), y != null && (Re = ot + st >> 1, Ie = Oe + tn >> 1, o(y[x + 2 * ye - 1], 255 & Re, Re >> 16, de, me + (2 * ye - 1) * f), o(y[x + 2 * ye + 0], 255 & Ie, Ie >> 16, de, me + (2 * ye + 0) * f)), Ie = pt, st = tn;
          }
          1 & Ae || (Re = 3 * Ie + st + 131074 >> 2, o(m[v + Ae - 1], 255 & Re, Re >> 16, he, re + (Ae - 1) * f), y != null && (Re = 3 * st + Ie + 131074 >> 2, o(y[x + Ae - 1], 255 & Re, Re >> 16, de, me + (Ae - 1) * f)));
        };
      }
      function ma() {
        Wn[cs] = Ch, Wn[us] = Wl, Wn[Bl] = Ih, Wn[fs] = Vl, Wn[hs] = Gl, Wn[go] = $l, Wn[ql] = jh, Wn[bo] = Wl, Wn[vo] = Vl, Wn[ds] = Gl, Wn[wo] = $l;
      }
      function qi(i) {
        return i & -16384 ? 0 > i ? 0 : 255 : i >> Eh;
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
      function Ir(i, o, f) {
        H[i] = function(m, v, y, x, A, k, E, K, ae) {
          for (var F = K + (-2 & ae) * f; K != F; ) o(m[v + 0], y[x + 0], A[k + 0], E, K), o(m[v + 1], y[x + 0], A[k + 0], E, K + f), v += 2, ++x, ++k, K += 2 * f;
          1 & ae && o(m[v + 0], y[x + 0], A[k + 0], E, K);
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
        var f, m, v = o.M, y = o.Nb, x = i.oc, A = i.pc + 40, k = i.oc, E = i.pc + 584, K = i.oc, ae = i.pc + 600;
        for (f = 0; 16 > f; ++f) x[A + 32 * f - 1] = 129;
        for (f = 0; 8 > f; ++f) k[E + 32 * f - 1] = 129, K[ae + 32 * f - 1] = 129;
        for (0 < v ? x[A - 1 - 32] = k[E - 1 - 32] = K[ae - 1 - 32] = 129 : (s(x, A - 32 - 1, 127, 21), s(k, E - 32 - 1, 127, 9), s(K, ae - 32 - 1, 127, 9)), m = 0; m < i.za; ++m) {
          var F = o.ya[o.aa + m];
          if (0 < m) {
            for (f = -1; 16 > f; ++f) r(x, A + 32 * f - 4, x, A + 32 * f + 12, 4);
            for (f = -1; 8 > f; ++f) r(k, E + 32 * f - 4, k, E + 32 * f + 4, 4), r(K, ae + 32 * f - 4, K, ae + 32 * f + 4, 4);
          }
          var X = i.Gd, te = i.Hd + m, he = F.ad, re = F.Hc;
          if (0 < v && (r(x, A - 32, X[te].y, 0, 16), r(k, E - 32, X[te].f, 0, 8), r(K, ae - 32, X[te].ea, 0, 8)), F.Za) {
            var de = x, me = A - 32 + 16;
            for (0 < v && (m >= i.za - 1 ? s(de, me, X[te].y[15], 4) : r(de, me, X[te + 1].y, 0, 4)), f = 0; 4 > f; f++) de[me + 128 + f] = de[me + 256 + f] = de[me + 384 + f] = de[me + 0 + f];
            for (f = 0; 16 > f; ++f, re <<= 2) de = x, me = A + Yl[f], Qn[F.Ob[f]](de, me), as(re, he, 16 * +f, de, me);
          } else if (de = Ui(m, v, F.Ob[0]), Yr[de](x, A), re != 0) for (f = 0; 16 > f; ++f, re <<= 2) as(re, he, 16 * +f, x, A + Yl[f]);
          for (f = F.Gc, de = Ui(m, v, F.Dd), Fr[de](k, E), Fr[de](K, ae), re = he, de = k, me = E, 255 & (F = 0 | f) && (170 & F ? dr(re, 256, de, me) : St(re, 256, de, me)), F = K, re = ae, 255 & (f >>= 8) && (170 & f ? dr(he, 320, F, re) : St(he, 320, F, re)), v < i.Ub - 1 && (r(X[te].y, 0, x, A + 480, 16), r(X[te].f, 0, k, E + 224, 8), r(X[te].ea, 0, K, ae + 224, 8)), f = 8 * y * i.B, X = i.sa, te = i.ta + 16 * m + 16 * y * i.R, he = i.qa, F = i.ra + 8 * m + f, re = i.Ha, de = i.Ia + 8 * m + f, f = 0; 16 > f; ++f) r(X, te + f * i.R, x, A + 32 * f, 16);
          for (f = 0; 8 > f; ++f) r(he, F + f * i.B, k, E + 32 * f, 8), r(re, de + f * i.B, K, ae + 32 * f, 8);
        }
      }
      function wi(i, o, f, m, v, y, x, A, k) {
        var E = [
          0
        ], K = [
          0
        ], ae = 0, F = k != null ? k.kd : 0, X = k ?? new we();
        if (i == null || 12 > f) return 7;
        X.data = i, X.w = o, X.ha = f, o = [
          o
        ], f = [
          f
        ], X.gb = [
          X.gb
        ];
        e: {
          var te = o, he = f, re = X.gb;
          if (e(i != null), e(he != null), e(re != null), re[0] = 0, 12 <= he[0] && !t(i, te[0], "RIFF")) {
            if (t(i, te[0] + 8, "WEBP")) {
              re = 3;
              break e;
            }
            var de = je(i, te[0] + 4);
            if (12 > de || 4294967286 < de) {
              re = 3;
              break e;
            }
            if (F && de > he[0] - 8) {
              re = 7;
              break e;
            }
            re[0] = de, te[0] += 12, he[0] -= 12;
          }
          re = 0;
        }
        if (re != 0) return re;
        for (de = 0 < X.gb[0], f = f[0]; ; ) {
          e: {
            var me = i;
            he = o, re = f;
            var Ae = E, ye = K, Be = te = [
              0
            ];
            if ((Re = ae = [
              ae
            ])[0] = 0, 8 > re[0]) re = 7;
            else {
              if (!t(me, he[0], "VP8X")) {
                if (je(me, he[0] + 4) != 10) {
                  re = 3;
                  break e;
                }
                if (18 > re[0]) {
                  re = 7;
                  break e;
                }
                var Ie = je(me, he[0] + 8), st = 1 + Ce(me, he[0] + 12);
                if (2147483648 <= st * (me = 1 + Ce(me, he[0] + 15))) {
                  re = 3;
                  break e;
                }
                Be != null && (Be[0] = Ie), Ae != null && (Ae[0] = st), ye != null && (ye[0] = me), he[0] += 18, re[0] -= 18, Re[0] = 1;
              }
              re = 0;
            }
          }
          if (ae = ae[0], te = te[0], re != 0) return re;
          if (he = !!(2 & te), !de && ae) return 3;
          if (y != null && (y[0] = !!(16 & te)), x != null && (x[0] = he), A != null && (A[0] = 0), x = E[0], te = K[0], ae && he && k == null) {
            re = 0;
            break;
          }
          if (4 > f) {
            re = 7;
            break;
          }
          if (de && ae || !de && !ae && !t(i, o[0], "ALPH")) {
            f = [
              f
            ], X.na = [
              X.na
            ], X.P = [
              X.P
            ], X.Sa = [
              X.Sa
            ];
            e: {
              Ie = i, re = o, de = f;
              var Re = X.gb;
              Ae = X.na, ye = X.P, Be = X.Sa, st = 22, e(Ie != null), e(de != null), me = re[0];
              var pt = de[0];
              for (e(Ae != null), e(Be != null), Ae[0] = null, ye[0] = null, Be[0] = 0; ; ) {
                if (re[0] = me, de[0] = pt, 8 > pt) {
                  re = 7;
                  break e;
                }
                var tn = je(Ie, me + 4);
                if (4294967286 < tn) {
                  re = 3;
                  break e;
                }
                var ot = 8 + tn + 1 & -2;
                if (st += ot, 0 < Re && st > Re) {
                  re = 3;
                  break e;
                }
                if (!t(Ie, me, "VP8 ") || !t(Ie, me, "VP8L")) {
                  re = 0;
                  break e;
                }
                if (pt[0] < ot) {
                  re = 7;
                  break e;
                }
                t(Ie, me, "ALPH") || (Ae[0] = Ie, ye[0] = me + 8, Be[0] = tn), me += ot, pt -= ot;
              }
            }
            if (f = f[0], X.na = X.na[0], X.P = X.P[0], X.Sa = X.Sa[0], re != 0) break;
          }
          f = [
            f
          ], X.Ja = [
            X.Ja
          ], X.xa = [
            X.xa
          ];
          e: if (Re = i, re = o, de = f, Ae = X.gb[0], ye = X.Ja, Be = X.xa, Ie = re[0], me = !t(Re, Ie, "VP8 "), st = !t(Re, Ie, "VP8L"), e(Re != null), e(de != null), e(ye != null), e(Be != null), 8 > de[0]) re = 7;
          else {
            if (me || st) {
              if (Re = je(Re, Ie + 4), 12 <= Ae && Re > Ae - 12) {
                re = 3;
                break e;
              }
              if (F && Re > de[0] - 8) {
                re = 7;
                break e;
              }
              ye[0] = Re, re[0] += 8, de[0] -= 8, Be[0] = st;
            } else Be[0] = 5 <= de[0] && Re[Ie + 0] == 47 && !(Re[Ie + 4] >> 5), ye[0] = de[0];
            re = 0;
          }
          if (f = f[0], X.Ja = X.Ja[0], X.xa = X.xa[0], o = o[0], re != 0) break;
          if (4294967286 < X.Ja) return 3;
          if (A == null || he || (A[0] = X.xa ? 2 : 1), x = [
            x
          ], te = [
            te
          ], X.xa) {
            if (5 > f) {
              re = 7;
              break;
            }
            A = x, F = te, he = y, i == null || 5 > f ? i = 0 : 5 <= f && i[o + 0] == 47 && !(i[o + 4] >> 5) ? (de = [
              0
            ], Re = [
              0
            ], Ae = [
              0
            ], ie(ye = new T(), i, o, f), yr(ye, de, Re, Ae) ? (A != null && (A[0] = de[0]), F != null && (F[0] = Re[0]), he != null && (he[0] = Ae[0]), i = 1) : i = 0) : i = 0;
          } else {
            if (10 > f) {
              re = 7;
              break;
            }
            A = te, i == null || 10 > f || !Ka(i, o + 3, f - 3) ? i = 0 : (F = i[o + 0] | i[o + 1] << 8 | i[o + 2] << 16, he = 16383 & (i[o + 7] << 8 | i[o + 6]), i = 16383 & (i[o + 9] << 8 | i[o + 8]), 1 & F || 3 < (F >> 1 & 7) || !(F >> 4 & 1) || F >> 5 >= X.Ja || !he || !i ? i = 0 : (x && (x[0] = he), A && (A[0] = i), i = 1));
          }
          if (!i || (x = x[0], te = te[0], ae && (E[0] != x || K[0] != te))) return 3;
          k != null && (k[0] = X, k.offset = o - k.w, e(4294967286 > o - k.w), e(k.offset == k.ha - f));
          break;
        }
        return re == 0 || re == 7 && ae && k == null ? (y != null && (y[0] |= X.na != null && 0 < X.na.length), m != null && (m[0] = x), v != null && (v[0] = te), 0) : re;
      }
      function va(i, o, f) {
        var m = o.width, v = o.height, y = 0, x = 0, A = m, k = v;
        if (o.Da = i != null && 0 < i.Da, o.Da && (A = i.cd, k = i.bd, y = i.v, x = i.j, 11 > f || (y &= -2, x &= -2), 0 > y || 0 > x || 0 >= A || 0 >= k || y + A > m || x + k > v)) return 0;
        if (o.v = y, o.j = x, o.va = y + A, o.o = x + k, o.U = A, o.T = k, o.da = i != null && 0 < i.da, o.da) {
          if (!ze(A, k, f = [
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
            var v = f.cd, y = f.bd, x = -2 & f.v, A = -2 & f.j;
            if (0 > x || 0 > A || 0 >= v || 0 >= y || x + v > i || A + y > o) return 2;
            i = v, o = y;
          }
          if (f.da) {
            if (!ze(i, o, v = [
              f.ib
            ], y = [
              f.hb
            ])) return 2;
            i = v[0], o = y[0];
          }
        }
        m.width = i, m.height = o;
        e: {
          var k = m.width, E = m.height;
          if (i = m.S, 0 >= k || 0 >= E || !(i >= cs && 13 > i)) i = 2;
          else {
            if (0 >= m.Rd && m.sd == null) {
              x = y = v = o = 0;
              var K = (A = k * Jl[i]) * E;
              if (11 > i || (y = (E + 1) / 2 * (o = (k + 1) / 2), i == 12 && (x = (v = k) * E)), (E = a(K + 2 * y + x)) == null) {
                i = 1;
                break e;
              }
              m.sd = E, 11 > i ? ((k = m.f.RGBA).eb = E, k.fb = 0, k.A = A, k.size = K) : ((k = m.f.kb).y = E, k.O = 0, k.fa = A, k.Fd = K, k.f = E, k.N = 0 + K, k.Ab = o, k.Cd = y, k.ea = E, k.W = 0 + K + y, k.Db = o, k.Ed = y, i == 12 && (k.F = E, k.J = 0 + K + 2 * y), k.Tc = x, k.lb = v);
            }
            if (o = 1, v = m.S, y = m.width, x = m.height, v >= cs && 13 > v) if (11 > v) i = m.f.RGBA, o &= (A = Math.abs(i.A)) * (x - 1) + y <= i.size, o &= A >= y * Jl[v], o &= i.eb != null;
            else {
              i = m.f.kb, A = (y + 1) / 2, K = (x + 1) / 2, k = Math.abs(i.fa), E = Math.abs(i.Ab);
              var ae = Math.abs(i.Db), F = Math.abs(i.lb), X = F * (x - 1) + y;
              o &= k * (x - 1) + y <= i.Fd, o &= E * (K - 1) + A <= i.Cd, o = (o &= ae * (K - 1) + A <= i.Ed) & k >= y & E >= A & ae >= A, o &= i.y != null, o &= i.f != null, o &= i.ea != null, v == 12 && (o &= F >= y, o &= X <= i.Tc, o &= i.F != null);
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
      ], Pn = 24, Hr = 32, jr = 8, Wr = [
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
      Ee("Predictor0", "PredictorAdd0"), H.Predictor0 = function() {
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
        return He(He(i, o[f + 1]), o[f + 0]);
      }, H.Predictor6 = function(i, o, f) {
        return He(i, o[f - 1]);
      }, H.Predictor7 = function(i, o, f) {
        return He(i, o[f + 0]);
      }, H.Predictor8 = function(i, o, f) {
        return He(o[f - 1], o[f + 0]);
      }, H.Predictor9 = function(i, o, f) {
        return He(o[f + 0], o[f + 1]);
      }, H.Predictor10 = function(i, o, f) {
        return He(He(i, o[f - 1]), He(o[f + 0], o[f + 1]));
      }, H.Predictor11 = function(i, o, f) {
        var m = o[f + 0];
        return 0 >= tt(m >> 24 & 255, i >> 24 & 255, (o = o[f - 1]) >> 24 & 255) + tt(m >> 16 & 255, i >> 16 & 255, o >> 16 & 255) + tt(m >> 8 & 255, i >> 8 & 255, o >> 8 & 255) + tt(255 & m, 255 & i, 255 & o) ? m : i;
      }, H.Predictor12 = function(i, o, f) {
        var m = o[f + 0];
        return (yt((i >> 24 & 255) + (m >> 24 & 255) - ((o = o[f - 1]) >> 24 & 255)) << 24 | yt((i >> 16 & 255) + (m >> 16 & 255) - (o >> 16 & 255)) << 16 | yt((i >> 8 & 255) + (m >> 8 & 255) - (o >> 8 & 255)) << 8 | yt((255 & i) + (255 & m) - (255 & o))) >>> 0;
      }, H.Predictor13 = function(i, o, f) {
        var m = o[f - 1];
        return (ft((i = He(i, o[f + 0])) >> 24 & 255, m >> 24 & 255) << 24 | ft(i >> 16 & 255, m >> 16 & 255) << 16 | ft(i >> 8 & 255, m >> 8 & 255) << 8 | ft(255 & i, 255 & m)) >>> 0;
      };
      var ya = H.PredictorAdd0;
      H.PredictorAdd1 = dt, Ee("Predictor2", "PredictorAdd2"), Ee("Predictor3", "PredictorAdd3"), Ee("Predictor4", "PredictorAdd4"), Ee("Predictor5", "PredictorAdd5"), Ee("Predictor6", "PredictorAdd6"), Ee("Predictor7", "PredictorAdd7"), Ee("Predictor8", "PredictorAdd8"), Ee("Predictor9", "PredictorAdd9"), Ee("Predictor10", "PredictorAdd10"), Ee("Predictor11", "PredictorAdd11"), Ee("Predictor12", "PredictorAdd12"), Ee("Predictor13", "PredictorAdd13");
      var zi = H.PredictorAdd2;
      Ue("ColorIndexInverseTransform", "MapARGB", "32b", function(i) {
        return i >> 8 & 255;
      }, function(i) {
        return i;
      }), Ue("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(i) {
        return i;
      }, function(i) {
        return i >> 8 & 255;
      });
      var zt, ss = H.ColorIndexInverseTransform, fr = H.MapARGB, hr = H.VP8LColorIndexInverseTransformAlpha, xa = H.MapAlpha, Na = H.VP8LPredictorsAdd = [];
      Na.length = 16, (H.VP8LPredictors = []).length = 16, (H.VP8LPredictorsAdd_C = []).length = 16, (H.VP8LPredictors_C = []).length = 16;
      var _a, Aa, Vr, Gr, $r, xi, Kr, Ni, zn, dr, Nt, St, Ht, en, Er, La, Hi, os, Ll, Sl, kl, Pl, Cl, Il, Sa, jl, El, Fl, Ml = a(511), Rl = a(2041), Ol = a(225), Dl = a(767), Tl = 0, mo = Rl, ls = Ol, Cn = Dl, Hn = Ml, cs = 0, us = 1, Bl = 2, fs = 3, hs = 4, go = 5, ql = 6, bo = 7, vo = 8, ds = 9, wo = 10, mh = [
        2,
        3,
        7
      ], gh = [
        3,
        3,
        11
      ], Ul = [
        280,
        256,
        256,
        256,
        40
      ], bh = [
        0,
        1,
        1,
        1,
        0
      ], vh = [
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
      ], wh = [
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
      ], yh = [
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
      ], xh = 8, yo = [
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
      ], ka = null, Nh = [
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
      ], _h = [
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
      ], zl = [
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
      ], Ah = [
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
      ], Lh = [
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
      ], Sh = [
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
      ], kh = [
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
      ], Yr = [], Qn = [], Fr = [], Ph = 1, Hl = 2, Jr = [], Wn = [];
      Cr("UpsampleRgbLinePair", Ur, 3), Cr("UpsampleBgrLinePair", cn, 3), Cr("UpsampleRgbaLinePair", wn, 4), Cr("UpsampleBgraLinePair", ba, 4), Cr("UpsampleArgbLinePair", ga, 4), Cr("UpsampleRgba4444LinePair", vi, 2), Cr("UpsampleRgb565LinePair", bi, 2);
      var Ch = H.UpsampleRgbLinePair, Ih = H.UpsampleBgrLinePair, Wl = H.UpsampleRgbaLinePair, Vl = H.UpsampleBgraLinePair, Gl = H.UpsampleArgbLinePair, $l = H.UpsampleRgba4444LinePair, jh = H.UpsampleRgb565LinePair, ps = 16, ms = 1 << ps - 1, Pa = -227, No = 482, Eh = 6, Kl = 0, Fh = a(256), Mh = a(256), Rh = a(256), Oh = a(256), Dh = a(No - Pa), Th = a(No - Pa);
      Ir("YuvToRgbRow", Ur, 3), Ir("YuvToBgrRow", cn, 3), Ir("YuvToRgbaRow", wn, 4), Ir("YuvToBgraRow", ba, 4), Ir("YuvToArgbRow", ga, 4), Ir("YuvToRgba4444Row", vi, 2), Ir("YuvToRgb565Row", bi, 2);
      var Yl = [
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
      ], Bh = [
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
      ], qh = 1;
      this.WebPDecodeRGBA = function(i, o, f, m, v) {
        var y = us, x = new pe(), A = new ut();
        x.ba = A, A.S = y, A.width = [
          A.width
        ], A.height = [
          A.height
        ];
        var k = A.width, E = A.height, K = new $e();
        if (K == null || i == null) var ae = 2;
        else e(K != null), ae = wi(i, o, f, K.width, K.height, K.Pd, K.Qd, K.format, null);
        if (ae != 0 ? k = 0 : (k != null && (k[0] = K.width[0]), E != null && (E[0] = K.height[0]), k = 1), k) {
          A.width = A.width[0], A.height = A.height[0], m != null && (m[0] = A.width), v != null && (v[0] = A.height);
          e: {
            if (m = new Ri(), (v = new we()).data = i, v.w = o, v.ha = f, v.kd = 1, o = [
              0
            ], e(v != null), ((i = wi(v.data, v.w, v.ha, null, null, null, o, null, v)) == 0 || i == 7) && o[0] && (i = 4), (o = i) == 0) {
              if (e(x != null), m.data = v.data, m.w = v.w + v.offset, m.ha = v.ha - v.offset, m.put = Ke, m.ac = ar, m.bc = wr, m.ma = x, v.xa) {
                if ((i = li()) == null) {
                  x = 1;
                  break e;
                }
                if (function(F, X) {
                  var te = [
                    0
                  ], he = [
                    0
                  ], re = [
                    0
                  ];
                  t: for (; ; ) {
                    if (F == null) return 0;
                    if (X == null) return F.a = 2, 0;
                    if (F.l = X, F.a = 0, ie(F.m, X.data, X.w, X.ha), !yr(F.m, te, he, re)) {
                      F.a = 3;
                      break t;
                    }
                    if (F.xb = Hl, X.width = te[0], X.height = he[0], !or(te[0], he[0], 1, F, null)) break t;
                    return 1;
                  }
                  return e(F.a != 0), 0;
                }(i, m)) {
                  if (m = (o = zr(m.width, m.height, x.Oa, x.ba)) == 0) {
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
                          if ((f.da || Ye(m.ca.S)) && Zn(), 11 > m.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), m.ca.f.kb.F != null && Zn()), m.Pb && 0 < m.s.ua && m.s.vb.X == null && !I(m.s.vb, m.s.Wa.Xa)) {
                            m.a = 1;
                            break n;
                          }
                          m.xb = 0;
                        }
                        if (!Jn(m, m.V, m.Ba, m.c, m.i, f.o, Br)) break n;
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
                  x = 1;
                  break e;
                }
                if (i.Fa = v.na, i.P = v.P, i.qc = v.Sa, cr(i, m)) {
                  if ((o = zr(m.width, m.height, x.Oa, x.ba)) == 0) {
                    if (i.Aa = 0, f = x.Oa, e((v = i) != null), f != null) {
                      if (0 < (k = 0 > (k = f.Md) ? 0 : 100 < k ? 255 : 255 * k / 100)) {
                        for (E = K = 0; 4 > E; ++E) 12 > (ae = v.pb[E]).lc && (ae.ia = k * Bh[0 > ae.lc ? 0 : ae.lc] >> 3), K |= ae.ia;
                        K && (alert("todo:VP8InitRandom"), v.ia = 1);
                      }
                      v.Ga = f.Id, 100 < v.Ga ? v.Ga = 100 : 0 > v.Ga && (v.Ga = 0);
                    }
                    (function(F, X) {
                      if (F == null) return 0;
                      if (X == null) return Yt(F, 2, "NULL VP8Io parameter in VP8Decode().");
                      if (!F.cb && !cr(F, X)) return 0;
                      if (e(F.cb), X.ac == null || X.ac(X)) {
                        X.ob && (F.L = 0);
                        var te = gs[F.L];
                        if (F.L == 2 ? (F.yb = 0, F.zb = 0) : (F.yb = X.v - te >> 4, F.zb = X.j - te >> 4, 0 > F.yb && (F.yb = 0), 0 > F.zb && (F.zb = 0)), F.Va = X.o + 15 + te >> 4, F.Hb = X.va + 15 + te >> 4, F.Hb > F.za && (F.Hb = F.za), F.Va > F.Ub && (F.Va = F.Ub), 0 < F.L) {
                          var he = F.ed;
                          for (te = 0; 4 > te; ++te) {
                            var re;
                            if (F.Qa.Cb) {
                              var de = F.Qa.Lb[te];
                              F.Qa.Fb || (de += he.Tb);
                            } else de = he.Tb;
                            for (re = 0; 1 >= re; ++re) {
                              var me = F.gd[te][re], Ae = de;
                              if (he.Pc && (Ae += he.vd[0], re && (Ae += he.od[0])), 0 < (Ae = 0 > Ae ? 0 : 63 < Ae ? 63 : Ae)) {
                                var ye = Ae;
                                0 < he.wb && (ye = 4 < he.wb ? ye >> 2 : ye >> 1) > 9 - he.wb && (ye = 9 - he.wb), 1 > ye && (ye = 1), me.dd = ye, me.tc = 2 * Ae + ye, me.ld = 40 <= Ae ? 2 : 15 <= Ae ? 1 : 0;
                              } else me.tc = 0;
                              me.La = re;
                            }
                          }
                        }
                        te = 0;
                      } else Yt(F, 6, "Frame setup failed"), te = F.a;
                      if (te = te == 0) {
                        if (te) {
                          F.$c = 0, 0 < F.Aa || (F.Ic = qh);
                          t: {
                            te = F.Ic, he = 4 * (ye = F.za);
                            var Be = 32 * ye, Ie = ye + 1, st = 0 < F.L ? ye * (0 < F.Aa ? 2 : 1) : 0, Re = (F.Aa == 2 ? 2 : 1) * ye;
                            if ((me = he + 832 + (re = 3 * (16 * te + gs[F.L]) / 2 * Be) + (de = F.Fa != null && 0 < F.Fa.length ? F.Kc.c * F.Kc.i : 0)) != me) te = 0;
                            else {
                              if (me > F.Vb) {
                                if (F.Vb = 0, F.Ec = a(me), F.Fc = 0, F.Ec == null) {
                                  te = Yt(F, 1, "no memory during frame initialization.");
                                  break t;
                                }
                                F.Vb = me;
                              }
                              me = F.Ec, Ae = F.Fc, F.Ac = me, F.Bc = Ae, Ae += he, F.Gd = h(Be, Ga), F.Hd = 0, F.rb = h(Ie + 1, aa), F.sb = 1, F.wa = st ? h(st, Bn) : null, F.Y = 0, F.D.Nb = 0, F.D.wa = F.wa, F.D.Y = F.Y, 0 < F.Aa && (F.D.Y += ye), e(true), F.oc = me, F.pc = Ae, Ae += 832, F.ya = h(Re, sa), F.aa = 0, F.D.ya = F.ya, F.D.aa = F.aa, F.Aa == 2 && (F.D.aa += ye), F.R = 16 * ye, F.B = 8 * ye, ye = (Be = gs[F.L]) * F.R, Be = Be / 2 * F.B, F.sa = me, F.ta = Ae + ye, F.qa = F.sa, F.ra = F.ta + 16 * te * F.R + Be, F.Ha = F.qa, F.Ia = F.ra + 8 * te * F.B + Be, F.$c = 0, Ae += re, F.mb = de ? me : null, F.nb = de ? Ae : null, e(Ae + de <= F.Fc + F.Vb), Ya(F), s(F.Ac, F.Bc, 0, he), te = 1;
                            }
                          }
                          if (te) {
                            if (X.ka = 0, X.y = F.sa, X.O = F.ta, X.f = F.qa, X.N = F.ra, X.ea = F.Ha, X.Vd = F.Ia, X.fa = F.R, X.Rc = F.B, X.F = null, X.J = 0, !Tl) {
                              for (te = -255; 255 >= te; ++te) Ml[255 + te] = 0 > te ? -te : te;
                              for (te = -1020; 1020 >= te; ++te) Rl[1020 + te] = -128 > te ? -128 : 127 < te ? 127 : te;
                              for (te = -112; 112 >= te; ++te) Ol[112 + te] = -16 > te ? -16 : 15 < te ? 15 : te;
                              for (te = -255; 510 >= te; ++te) Dl[255 + te] = 0 > te ? 0 : 255 < te ? 255 : te;
                              Tl = 1;
                            }
                            Kr = Di, Ni = to, dr = ur, Nt = Xa, St = Za, zn = eo, Ht = rs, en = pi, Er = b, La = M, Hi = is, os = c, Ll = z, Sl = Z, kl = di, Pl = pa, Cl = ts, Il = ns, Qn[0] = co, Qn[1] = no, Qn[2] = oo, Qn[3] = lo, Qn[4] = Nr, Qn[5] = uo, Qn[6] = _r, Qn[7] = fo, Qn[8] = ca, Qn[9] = Ti, Yr[0] = ao, Yr[1] = io, Yr[2] = oa, Yr[3] = Qa, Yr[4] = fi, Yr[5] = la, Yr[6] = so, Fr[0] = po, Fr[1] = ro, Fr[2] = hi, Fr[3] = ho, Fr[4] = fa, Fr[5] = ua, Fr[6] = es, te = 1;
                          } else te = 0;
                        }
                        te && (te = function(pt, tn) {
                          for (pt.M = 0; pt.M < pt.Va; ++pt.M) {
                            var ot, Oe = pt.Jc[pt.M & pt.Xb], ke = pt.m, Wt = pt;
                            for (ot = 0; ot < Wt.za; ++ot) {
                              var rt = ke, mt = Wt, Et = mt.Ac, un = mt.Bc + 4 * ot, yn = mt.zc, Tt = mt.ya[mt.aa + ot];
                              if (mt.Qa.Bb ? Tt.$b = se(rt, mt.Pa.jb[0]) ? 2 + se(rt, mt.Pa.jb[2]) : se(rt, mt.Pa.jb[1]) : Tt.$b = 0, mt.kc && (Tt.Ad = se(rt, mt.Bd)), Tt.Za = !se(rt, 145) + 0, Tt.Za) {
                                var pn = Tt.Ob, xn = 0;
                                for (mt = 0; 4 > mt; ++mt) {
                                  var nn, vt = yn[0 + mt];
                                  for (nn = 0; 4 > nn; ++nn) {
                                    vt = Lh[Et[un + nn]][vt];
                                    for (var _t = zl[se(rt, vt[0])]; 0 < _t; ) _t = zl[2 * _t + se(rt, vt[_t])];
                                    vt = -_t, Et[un + nn] = vt;
                                  }
                                  r(pn, xn, Et, un, 4), xn += 4, yn[0 + mt] = vt;
                                }
                              } else vt = se(rt, 156) ? se(rt, 128) ? 1 : 3 : se(rt, 163) ? 2 : 0, Tt.Ob[0] = vt, s(Et, un, vt, 4), s(yn, 0, vt, 4);
                              Tt.Dd = se(rt, 142) ? se(rt, 114) ? se(rt, 183) ? 1 : 3 : 2 : 0;
                            }
                            if (Wt.m.Ka) return Yt(pt, 7, "Premature end-of-partition0 encountered.");
                            for (; pt.ja < pt.za; ++pt.ja) {
                              if (Wt = Oe, rt = (ke = pt).rb[ke.sb - 1], Et = ke.rb[ke.sb + ke.ja], ot = ke.ya[ke.aa + ke.ja], un = ke.kc ? ot.Ad : 0) rt.la = Et.la = 0, ot.Za || (rt.Na = Et.Na = 0), ot.Hc = 0, ot.Gc = 0, ot.ia = 0;
                              else {
                                var Bt, At;
                                if (rt = Et, Et = Wt, un = ke.Pa.Xc, yn = ke.ya[ke.aa + ke.ja], Tt = ke.pb[yn.$b], mt = yn.ad, pn = 0, xn = ke.rb[ke.sb - 1], vt = nn = 0, s(mt, pn, 0, 384), yn.Za) var fn = 0, er = un[3];
                                else {
                                  _t = a(16);
                                  var Vt = rt.Na + xn.Na;
                                  if (Vt = ka(Et, un[1], Vt, Tt.Eb, 0, _t, 0), rt.Na = xn.Na = (0 < Vt) + 0, 1 < Vt) Kr(_t, 0, mt, pn);
                                  else {
                                    var An = _t[0] + 3 >> 3;
                                    for (_t = 0; 256 > _t; _t += 16) mt[pn + _t] = An;
                                  }
                                  fn = 1, er = un[0];
                                }
                                var kt = 15 & rt.la, rn = 15 & xn.la;
                                for (_t = 0; 4 > _t; ++_t) {
                                  var In = 1 & rn;
                                  for (An = At = 0; 4 > An; ++An) kt = kt >> 1 | (In = (Vt = ka(Et, er, Vt = In + (1 & kt), Tt.Sc, fn, mt, pn)) > fn) << 7, At = At << 2 | (3 < Vt ? 3 : 1 < Vt ? 2 : mt[pn + 0] != 0), pn += 16;
                                  kt >>= 4, rn = rn >> 1 | In << 7, nn = (nn << 8 | At) >>> 0;
                                }
                                for (er = kt, fn = rn >> 4, Bt = 0; 4 > Bt; Bt += 2) {
                                  for (At = 0, kt = rt.la >> 4 + Bt, rn = xn.la >> 4 + Bt, _t = 0; 2 > _t; ++_t) {
                                    for (In = 1 & rn, An = 0; 2 > An; ++An) Vt = In + (1 & kt), kt = kt >> 1 | (In = 0 < (Vt = ka(Et, un[2], Vt, Tt.Qc, 0, mt, pn))) << 3, At = At << 2 | (3 < Vt ? 3 : 1 < Vt ? 2 : mt[pn + 0] != 0), pn += 16;
                                    kt >>= 2, rn = rn >> 1 | In << 5;
                                  }
                                  vt |= At << 4 * Bt, er |= kt << 4 << Bt, fn |= (240 & rn) << Bt;
                                }
                                rt.la = er, xn.la = fn, yn.Hc = nn, yn.Gc = vt, yn.ia = 43690 & vt ? 0 : Tt.ia, un = !(nn | vt);
                              }
                              if (0 < ke.L && (ke.wa[ke.Y + ke.ja] = ke.gd[ot.$b][ot.Za], ke.wa[ke.Y + ke.ja].La |= !un), Wt.Ka) return Yt(pt, 7, "Premature end-of-file encountered.");
                            }
                            if (Ya(pt), ke = tn, Wt = 1, ot = (Oe = pt).D, rt = 0 < Oe.L && Oe.M >= Oe.zb && Oe.M <= Oe.Va, Oe.Aa == 0) t: {
                              if (ot.M = Oe.M, ot.uc = rt, Un(Oe, ot), Wt = 1, ot = (At = Oe.D).Nb, rt = (vt = gs[Oe.L]) * Oe.R, Et = vt / 2 * Oe.B, _t = 16 * ot * Oe.R, An = 8 * ot * Oe.B, un = Oe.sa, yn = Oe.ta - rt + _t, Tt = Oe.qa, mt = Oe.ra - Et + An, pn = Oe.Ha, xn = Oe.Ia - Et + An, rn = (kt = At.M) == 0, nn = kt >= Oe.Va - 1, Oe.Aa == 2 && Un(Oe, At), At.uc) for (In = (Vt = Oe).D.M, e(Vt.D.uc), At = Vt.yb; At < Vt.Hb; ++At) {
                                fn = At, er = In;
                                var Nn = (jn = (hn = Vt).D).Nb;
                                Bt = hn.R;
                                var jn = jn.wa[jn.Y + fn], En = hn.sa, Ln = hn.ta + 16 * Nn * Bt + 16 * fn, Fn = jn.dd, jt = jn.tc;
                                if (jt != 0) if (e(3 <= jt), hn.L == 1) 0 < fn && Pl(En, Ln, Bt, jt + 4), jn.La && Il(En, Ln, Bt, jt), 0 < er && kl(En, Ln, Bt, jt + 4), jn.La && Cl(En, Ln, Bt, jt);
                                else {
                                  var Mn = hn.B, tr = hn.qa, _i = hn.ra + 8 * Nn * Mn + 8 * fn, Mr = hn.Ha, hn = hn.Ia + 8 * Nn * Mn + 8 * fn;
                                  Nn = jn.ld, 0 < fn && (en(En, Ln, Bt, jt + 4, Fn, Nn), La(tr, _i, Mr, hn, Mn, jt + 4, Fn, Nn)), jn.La && (os(En, Ln, Bt, jt, Fn, Nn), Sl(tr, _i, Mr, hn, Mn, jt, Fn, Nn)), 0 < er && (Ht(En, Ln, Bt, jt + 4, Fn, Nn), Er(tr, _i, Mr, hn, Mn, jt + 4, Fn, Nn)), jn.La && (Hi(En, Ln, Bt, jt, Fn, Nn), Ll(tr, _i, Mr, hn, Mn, jt, Fn, Nn));
                                }
                              }
                              if (Oe.ia && alert("todo:DitherRow"), ke.put != null) {
                                if (At = 16 * kt, kt = 16 * (kt + 1), rn ? (ke.y = Oe.sa, ke.O = Oe.ta + _t, ke.f = Oe.qa, ke.N = Oe.ra + An, ke.ea = Oe.Ha, ke.W = Oe.Ia + An) : (At -= vt, ke.y = un, ke.O = yn, ke.f = Tt, ke.N = mt, ke.ea = pn, ke.W = xn), nn || (kt -= vt), kt > ke.o && (kt = ke.o), ke.F = null, ke.J = null, Oe.Fa != null && 0 < Oe.Fa.length && At < kt && (ke.J = It(Oe, ke, At, kt - At), ke.F = Oe.mb, ke.F == null && ke.F.length == 0)) {
                                  Wt = Yt(Oe, 3, "Could not decode alpha data.");
                                  break t;
                                }
                                At < ke.j && (vt = ke.j - At, At = ke.j, e(!(1 & vt)), ke.O += Oe.R * vt, ke.N += Oe.B * (vt >> 1), ke.W += Oe.B * (vt >> 1), ke.F != null && (ke.J += ke.width * vt)), At < kt && (ke.O += ke.v, ke.N += ke.v >> 1, ke.W += ke.v >> 1, ke.F != null && (ke.J += ke.v), ke.ka = At - ke.j, ke.U = ke.va - ke.v, ke.T = kt - At, Wt = ke.put(ke));
                              }
                              ot + 1 != Oe.Ic || nn || (r(Oe.sa, Oe.ta - rt, un, yn + 16 * Oe.R, rt), r(Oe.qa, Oe.ra - Et, Tt, mt + 8 * Oe.B, Et), r(Oe.Ha, Oe.Ia - Et, pn, xn + 8 * Oe.B, Et));
                            }
                            if (!Wt) return Yt(pt, 6, "Output aborted.");
                          }
                          return 1;
                        }(F, X)), X.bc != null && X.bc(X), te &= 1;
                      }
                      return te ? (F.cb = 0, te) : 0;
                    })(i, m) || (o = i.a);
                  }
                } else o = i.a;
              }
              o == 0 && x.Oa != null && x.Oa.fd && (o = wa(x.ba));
            }
            x = o;
          }
          y = x != 0 ? null : 11 > y ? A.f.RGBA.eb : A.f.kb.y;
        } else y = null;
        return y;
      };
      var Jl = [
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
    function d(H, ne) {
      for (var _ = "", O = 0; O < 4; O++) _ += String.fromCharCode(H[ne++]);
      return _;
    }
    function g(H, ne) {
      return H[ne + 0] | H[ne + 1] << 8;
    }
    function w(H, ne) {
      return (H[ne + 0] | H[ne + 1] << 8 | H[ne + 2] << 16) >>> 0;
    }
    function S(H, ne) {
      return (H[ne + 0] | H[ne + 1] << 8 | H[ne + 2] << 16 | H[ne + 3] << 24) >>> 0;
    }
    new u();
    var p = [
      0
    ], j = [
      0
    ], R = [], D = new u(), L = n, Y = function(H, ne) {
      var _ = {}, O = 0, G = false, V = 0, ce = 0;
      if (_.frames = [], !function(N, T) {
        for (var P = 0; P < 4; P++) if (N[T + P] != "RIFF".charCodeAt(P)) return true;
        return false;
      }(H, ne)) {
        for (S(H, ne += 4), ne += 8; ne < H.length; ) {
          var ue = d(H, ne), be = S(H, ne += 4);
          ne += 4;
          var oe = be + (1 & be);
          switch (ue) {
            case "VP8 ":
            case "VP8L":
              _.frames[O] === void 0 && (_.frames[O] = {}), (xe = _.frames[O]).src_off = G ? ce : ne - 8, xe.src_size = V + be + 8, O++, G && (G = false, V = 0, ce = 0);
              break;
            case "VP8X":
              (xe = _.header = {}).feature_flags = H[ne];
              var ie = ne + 4;
              xe.canvas_width = 1 + w(H, ie), ie += 3, xe.canvas_height = 1 + w(H, ie), ie += 3;
              break;
            case "ALPH":
              G = true, V = oe + 8, ce = ne - 8;
              break;
            case "ANIM":
              (xe = _.header).bgcolor = S(H, ne), ie = ne + 4, xe.loop_count = g(H, ie), ie += 2;
              break;
            case "ANMF":
              var Le, xe;
              (xe = _.frames[O] = {}).offset_x = 2 * w(H, ne), ne += 3, xe.offset_y = 2 * w(H, ne), ne += 3, xe.width = 1 + w(H, ne), ne += 3, xe.height = 1 + w(H, ne), ne += 3, xe.duration = w(H, ne), ne += 3, Le = H[ne++], xe.dispose = 1 & Le, xe.blend = Le >> 1 & 1;
          }
          ue != "ANMF" && (ne += oe);
        }
        return _;
      }
    }(L, 0);
    Y.response = L, Y.rgbaoutput = true, Y.dataurl = false;
    var $ = Y.header ? Y.header : null, U = Y.frames ? Y.frames : null;
    if ($) {
      $.loop_counter = $.loop_count, p = [
        $.canvas_height
      ], j = [
        $.canvas_width
      ];
      for (var le = 0; le < U.length && U[le].blend != 0; le++) ;
    }
    var ve = U[0], fe = D.WebPDecodeRGBA(L, ve.src_off, ve.src_size, j, p);
    ve.rgba = fe, ve.imgwidth = j[0], ve.imgheight = p[0];
    for (var ee = 0; ee < j[0] * p[0] * 4; ee++) R[ee] = fe[ee];
    return this.width = j, this.height = p, this.data = R, this;
  }
  function D5() {
    var n, e = this.internal.__metadata__.metadata, t = unescape(encodeURIComponent(e));
    n = this.internal.__metadata__.rawXml ? t : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + n.length + " >>"), this.internal.write("stream"), this.internal.write(n), this.internal.write("endstream"), this.internal.write("endobj");
  }
  function T5() {
    this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
  }
  (function(n) {
    var e, t, r, s, a, h, l, u, d, g = function(N) {
      return N = N || {}, this.isStrokeTransparent = N.isStrokeTransparent || false, this.strokeOpacity = N.strokeOpacity || 1, this.strokeStyle = N.strokeStyle || "#000000", this.fillStyle = N.fillStyle || "#000000", this.isFillTransparent = N.isFillTransparent || false, this.fillOpacity = N.fillOpacity || 1, this.font = N.font || "10px sans-serif", this.textBaseline = N.textBaseline || "alphabetic", this.textAlign = N.textAlign || "left", this.lineWidth = N.lineWidth || 1, this.lineJoin = N.lineJoin || "miter", this.lineCap = N.lineCap || "butt", this.path = N.path || [], this.transform = N.transform !== void 0 ? N.transform.clone() : new u(), this.globalCompositeOperation = N.globalCompositeOperation || "normal", this.globalAlpha = N.globalAlpha || 1, this.clip_path = N.clip_path || [], this.currentPoint = N.currentPoint || new h(), this.miterLimit = N.miterLimit || 10, this.lastPoint = N.lastPoint || new h(), this.lineDashOffset = N.lineDashOffset || 0, this.lineDash = N.lineDash || [], this.margin = N.margin || [
        0,
        0,
        0,
        0
      ], this.prevPageLastElemOffset = N.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof N.ignoreClearRect != "boolean" || N.ignoreClearRect, this;
    };
    n.events.push([
      "initialized",
      function() {
        this.context2d = new w(this), e = this.internal.f2, t = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, h = this.internal.Point, l = this.internal.Rectangle, u = this.internal.Matrix, d = new g();
      }
    ]);
    var w = function(N) {
      Object.defineProperty(this, "canvas", {
        get: function() {
          return {
            parentNode: false,
            style: false
          };
        }
      });
      var T = N;
      Object.defineProperty(this, "pdf", {
        get: function() {
          return T;
        }
      });
      var P = false;
      Object.defineProperty(this, "pageWrapXEnabled", {
        get: function() {
          return P;
        },
        set: function(I) {
          P = !!I;
        }
      });
      var B = false;
      Object.defineProperty(this, "pageWrapYEnabled", {
        get: function() {
          return B;
        },
        set: function(I) {
          B = !!I;
        }
      });
      var q = 0;
      Object.defineProperty(this, "posX", {
        get: function() {
          return q;
        },
        set: function(I) {
          isNaN(I) || (q = I);
        }
      });
      var W = 0;
      Object.defineProperty(this, "posY", {
        get: function() {
          return W;
        },
        set: function(I) {
          isNaN(I) || (W = I);
        }
      }), Object.defineProperty(this, "margin", {
        get: function() {
          return d.margin;
        },
        set: function(I) {
          var Pe;
          typeof I == "number" ? Pe = [
            I,
            I,
            I,
            I
          ] : ((Pe = new Array(4))[0] = I[0], Pe[1] = I.length >= 2 ? I[1] : Pe[0], Pe[2] = I.length >= 3 ? I[2] : Pe[0], Pe[3] = I.length >= 4 ? I[3] : Pe[1]), d.margin = Pe;
        }
      });
      var J = false;
      Object.defineProperty(this, "autoPaging", {
        get: function() {
          return J;
        },
        set: function(I) {
          J = I;
        }
      });
      var Q = 0;
      Object.defineProperty(this, "lastBreak", {
        get: function() {
          return Q;
        },
        set: function(I) {
          Q = I;
        }
      });
      var se = [];
      Object.defineProperty(this, "pageBreaks", {
        get: function() {
          return se;
        },
        set: function(I) {
          se = I;
        }
      }), Object.defineProperty(this, "ctx", {
        get: function() {
          return d;
        },
        set: function(I) {
          I instanceof g && (d = I);
        }
      }), Object.defineProperty(this, "path", {
        get: function() {
          return d.path;
        },
        set: function(I) {
          d.path = I;
        }
      });
      var _e = [];
      Object.defineProperty(this, "ctxStack", {
        get: function() {
          return _e;
        },
        set: function(I) {
          _e = I;
        }
      }), Object.defineProperty(this, "fillStyle", {
        get: function() {
          return this.ctx.fillStyle;
        },
        set: function(I) {
          var Pe;
          Pe = S(I), this.ctx.fillStyle = Pe.style, this.ctx.isFillTransparent = Pe.a === 0, this.ctx.fillOpacity = Pe.a, this.pdf.setFillColor(Pe.r, Pe.g, Pe.b, {
            a: Pe.a
          }), this.pdf.setTextColor(Pe.r, Pe.g, Pe.b, {
            a: Pe.a
          });
        }
      }), Object.defineProperty(this, "strokeStyle", {
        get: function() {
          return this.ctx.strokeStyle;
        },
        set: function(I) {
          var Pe = S(I);
          this.ctx.strokeStyle = Pe.style, this.ctx.isStrokeTransparent = Pe.a === 0, this.ctx.strokeOpacity = Pe.a, Pe.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (Pe.a, this.pdf.setDrawColor(Pe.r, Pe.g, Pe.b));
        }
      }), Object.defineProperty(this, "lineCap", {
        get: function() {
          return this.ctx.lineCap;
        },
        set: function(I) {
          [
            "butt",
            "round",
            "square"
          ].indexOf(I) !== -1 && (this.ctx.lineCap = I, this.pdf.setLineCap(I));
        }
      }), Object.defineProperty(this, "lineWidth", {
        get: function() {
          return this.ctx.lineWidth;
        },
        set: function(I) {
          isNaN(I) || (this.ctx.lineWidth = I, this.pdf.setLineWidth(I));
        }
      }), Object.defineProperty(this, "lineJoin", {
        get: function() {
          return this.ctx.lineJoin;
        },
        set: function(I) {
          [
            "bevel",
            "round",
            "miter"
          ].indexOf(I) !== -1 && (this.ctx.lineJoin = I, this.pdf.setLineJoin(I));
        }
      }), Object.defineProperty(this, "miterLimit", {
        get: function() {
          return this.ctx.miterLimit;
        },
        set: function(I) {
          isNaN(I) || (this.ctx.miterLimit = I, this.pdf.setMiterLimit(I));
        }
      }), Object.defineProperty(this, "textBaseline", {
        get: function() {
          return this.ctx.textBaseline;
        },
        set: function(I) {
          this.ctx.textBaseline = I;
        }
      }), Object.defineProperty(this, "textAlign", {
        get: function() {
          return this.ctx.textAlign;
        },
        set: function(I) {
          [
            "right",
            "end",
            "center",
            "left",
            "start"
          ].indexOf(I) !== -1 && (this.ctx.textAlign = I);
        }
      });
      var Se = null, Ce = null, je = null;
      Object.defineProperty(this, "fontFaces", {
        get: function() {
          return je;
        },
        set: function(I) {
          Se = null, Ce = null, je = I;
        }
      }), Object.defineProperty(this, "font", {
        get: function() {
          return this.ctx.font;
        },
        set: function(I) {
          var Pe;
          if (this.ctx.font = I, (Pe = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(I)) !== null) {
            var Je = Pe[1];
            Pe[2];
            var ze = Pe[3], Ne = Pe[4];
            Pe[5];
            var Ge = Pe[6], Ee = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ne)[2];
            Ne = Math.floor(Ee === "px" ? parseFloat(Ne) * this.pdf.internal.scaleFactor : Ee === "em" ? parseFloat(Ne) * this.pdf.getFontSize() : parseFloat(Ne) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Ne);
            var Ve = function(Ue) {
              var Ut, gt, lt = [], ct = Ue.trim();
              if (ct === "") return Jo;
              if (ct in ou) return [
                ou[ct]
              ];
              for (; ct !== ""; ) {
                switch (gt = null, Ut = (ct = cu(ct)).charAt(0)) {
                  case '"':
                  case "'":
                    gt = j5(ct.substring(1), Ut);
                    break;
                  default:
                    gt = E5(ct);
                }
                if (gt === null || (lt.push(gt[0]), (ct = cu(gt[1])) !== "" && ct.charAt(0) !== ",")) return Jo;
                ct = ct.replace(/^,/, "");
              }
              return lt;
            }(Ge);
            if (this.fontFaces) {
              var He = function(Ue, Ut) {
                var gt = Ue.getFontList(), lt = JSON.stringify(gt);
                if (Se === null || Ce !== lt) {
                  var ct = function(Ft) {
                    var We = [];
                    return Object.keys(Ft).forEach(function(Ct) {
                      Ft[Ct].forEach(function(Ye) {
                        var nt = null;
                        switch (Ye) {
                          case "bold":
                            nt = {
                              family: Ct,
                              weight: "bold"
                            };
                            break;
                          case "italic":
                            nt = {
                              family: Ct,
                              style: "italic"
                            };
                            break;
                          case "bolditalic":
                            nt = {
                              family: Ct,
                              weight: "bold",
                              style: "italic"
                            };
                            break;
                          case "":
                          case "normal":
                            nt = {
                              family: Ct
                            };
                        }
                        nt !== null && (nt.ref = {
                          name: Ct,
                          style: Ye
                        }, We.push(nt));
                      });
                    }), We;
                  }(gt);
                  Se = function(Ft) {
                    for (var We = {}, Ct = 0; Ct < Ft.length; ++Ct) {
                      var Ye = Yo(Ft[Ct]), nt = Ye.family, Mt = Ye.stretch, ut = Ye.style, $e = Ye.weight;
                      We[nt] = We[nt] || {}, We[nt][Mt] = We[nt][Mt] || {}, We[nt][Mt][ut] = We[nt][Mt][ut] || {}, We[nt][Mt][ut][$e] = Ye;
                    }
                    return We;
                  }(ct.concat(Ut)), Ce = lt;
                }
                return Se;
              }(this.pdf, this.fontFaces), yt = Ve.map(function(Ue) {
                return {
                  family: Ue,
                  stretch: "normal",
                  weight: ze,
                  style: Je
                };
              }), ft = function(Ue, Ut, gt) {
                for (var lt = (gt = gt || {}).defaultFontFamily || "times", ct = Object.assign({}, I5, gt.genericFontFamilies || {}), Ft = null, We = null, Ct = 0; Ct < Ut.length; ++Ct) if (ct[(Ft = Yo(Ut[Ct])).family] && (Ft.family = ct[Ft.family]), Ue.hasOwnProperty(Ft.family)) {
                  We = Ue[Ft.family];
                  break;
                }
                if (!(We = We || Ue[lt])) throw new Error("Could not find a font-family for the rule '" + lu(Ft) + "' and default family '" + lt + "'.");
                if (We = function(Ye, nt) {
                  if (nt[Ye]) return nt[Ye];
                  var Mt = hl[Ye], ut = Mt <= hl.normal ? -1 : 1, $e = su(nt, ch, Mt, ut);
                  if (!$e) throw new Error("Could not find a matching font-stretch value for " + Ye);
                  return $e;
                }(Ft.stretch, We), We = function(Ye, nt) {
                  if (nt[Ye]) return nt[Ye];
                  for (var Mt = lh[Ye], ut = 0; ut < Mt.length; ++ut) if (nt[Mt[ut]]) return nt[Mt[ut]];
                  throw new Error("Could not find a matching font-style for " + Ye);
                }(Ft.style, We), !(We = function(Ye, nt) {
                  if (nt[Ye]) return nt[Ye];
                  if (Ye === 400 && nt[500]) return nt[500];
                  if (Ye === 500 && nt[400]) return nt[400];
                  var Mt = C5[Ye], ut = su(nt, uh, Mt, Ye < 400 ? -1 : 1);
                  if (!ut) throw new Error("Could not find a matching font-weight for value " + Ye);
                  return ut;
                }(Ft.weight, We))) throw new Error("Failed to resolve a font for the rule '" + lu(Ft) + "'.");
                return We;
              }(He, yt);
              this.pdf.setFont(ft.ref.name, ft.ref.style);
            } else {
              var tt = "";
              (ze === "bold" || parseInt(ze, 10) >= 700 || Je === "bold") && (tt = "bold"), Je === "italic" && (tt += "italic"), tt.length === 0 && (tt = "normal");
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
              }, De = 0; De < Ve.length; De++) {
                if (this.pdf.internal.getFont(Ve[De], tt, {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) {
                  dt = Ve[De];
                  break;
                }
                if (tt === "bolditalic" && this.pdf.internal.getFont(Ve[De], "bold", {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) dt = Ve[De], tt = "bold";
                else if (this.pdf.internal.getFont(Ve[De], "normal", {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) {
                  dt = Ve[De], tt = "normal";
                  break;
                }
              }
              if (dt === "") {
                for (var it = 0; it < Ve.length; it++) if (ht[Ve[it]]) {
                  dt = ht[Ve[it]];
                  break;
                }
              }
              dt = dt === "" ? "Times" : dt, this.pdf.setFont(dt, tt);
            }
          }
        }
      }), Object.defineProperty(this, "globalCompositeOperation", {
        get: function() {
          return this.ctx.globalCompositeOperation;
        },
        set: function(I) {
          this.ctx.globalCompositeOperation = I;
        }
      }), Object.defineProperty(this, "globalAlpha", {
        get: function() {
          return this.ctx.globalAlpha;
        },
        set: function(I) {
          this.ctx.globalAlpha = I;
        }
      }), Object.defineProperty(this, "lineDashOffset", {
        get: function() {
          return this.ctx.lineDashOffset;
        },
        set: function(I) {
          this.ctx.lineDashOffset = I, xe.call(this);
        }
      }), Object.defineProperty(this, "lineDash", {
        get: function() {
          return this.ctx.lineDash;
        },
        set: function(I) {
          this.ctx.lineDash = I, xe.call(this);
        }
      }), Object.defineProperty(this, "ignoreClearRect", {
        get: function() {
          return this.ctx.ignoreClearRect;
        },
        set: function(I) {
          this.ctx.ignoreClearRect = !!I;
        }
      });
    };
    w.prototype.setLineDash = function(N) {
      this.lineDash = N;
    }, w.prototype.getLineDash = function() {
      return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
    }, w.prototype.fill = function() {
      U.call(this, "fill", false);
    }, w.prototype.stroke = function() {
      U.call(this, "stroke", false);
    }, w.prototype.beginPath = function() {
      this.path = [
        {
          type: "begin"
        }
      ];
    }, w.prototype.moveTo = function(N, T) {
      if (isNaN(N) || isNaN(T)) throw Pt.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
      var P = this.ctx.transform.applyToPoint(new h(N, T));
      this.path.push({
        type: "mt",
        x: P.x,
        y: P.y
      }), this.ctx.lastPoint = new h(N, T);
    }, w.prototype.closePath = function() {
      var N = new h(0, 0), T = 0;
      for (T = this.path.length - 1; T !== -1; T--) if (this.path[T].type === "begin" && Lt(this.path[T + 1]) === "object" && typeof this.path[T + 1].x == "number") {
        N = new h(this.path[T + 1].x, this.path[T + 1].y);
        break;
      }
      this.path.push({
        type: "close"
      }), this.ctx.lastPoint = new h(N.x, N.y);
    }, w.prototype.lineTo = function(N, T) {
      if (isNaN(N) || isNaN(T)) throw Pt.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
      var P = this.ctx.transform.applyToPoint(new h(N, T));
      this.path.push({
        type: "lt",
        x: P.x,
        y: P.y
      }), this.ctx.lastPoint = new h(P.x, P.y);
    }, w.prototype.clip = function() {
      this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), U.call(this, null, true);
    }, w.prototype.quadraticCurveTo = function(N, T, P, B) {
      if (isNaN(P) || isNaN(B) || isNaN(N) || isNaN(T)) throw Pt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
      var q = this.ctx.transform.applyToPoint(new h(P, B)), W = this.ctx.transform.applyToPoint(new h(N, T));
      this.path.push({
        type: "qct",
        x1: W.x,
        y1: W.y,
        x: q.x,
        y: q.y
      }), this.ctx.lastPoint = new h(q.x, q.y);
    }, w.prototype.bezierCurveTo = function(N, T, P, B, q, W) {
      if (isNaN(q) || isNaN(W) || isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B)) throw Pt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
      var J = this.ctx.transform.applyToPoint(new h(q, W)), Q = this.ctx.transform.applyToPoint(new h(N, T)), se = this.ctx.transform.applyToPoint(new h(P, B));
      this.path.push({
        type: "bct",
        x1: Q.x,
        y1: Q.y,
        x2: se.x,
        y2: se.y,
        x: J.x,
        y: J.y
      }), this.ctx.lastPoint = new h(J.x, J.y);
    }, w.prototype.arc = function(N, T, P, B, q, W) {
      if (isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B) || isNaN(q)) throw Pt.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
      if (W = !!W, !this.ctx.transform.isIdentity) {
        var J = this.ctx.transform.applyToPoint(new h(N, T));
        N = J.x, T = J.y;
        var Q = this.ctx.transform.applyToPoint(new h(0, P)), se = this.ctx.transform.applyToPoint(new h(0, 0));
        P = Math.sqrt(Math.pow(Q.x - se.x, 2) + Math.pow(Q.y - se.y, 2));
      }
      Math.abs(q - B) >= 2 * Math.PI && (B = 0, q = 2 * Math.PI), this.path.push({
        type: "arc",
        x: N,
        y: T,
        radius: P,
        startAngle: B,
        endAngle: q,
        counterclockwise: W
      });
    }, w.prototype.arcTo = function(N, T, P, B, q) {
      throw new Error("arcTo not implemented.");
    }, w.prototype.rect = function(N, T, P, B) {
      if (isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B)) throw Pt.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
      this.moveTo(N, T), this.lineTo(N + P, T), this.lineTo(N + P, T + B), this.lineTo(N, T + B), this.lineTo(N, T), this.lineTo(N + P, T), this.lineTo(N, T);
    }, w.prototype.fillRect = function(N, T, P, B) {
      if (isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B)) throw Pt.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
      if (!p.call(this)) {
        var q = {};
        this.lineCap !== "butt" && (q.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (q.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(N, T, P, B), this.fill(), q.hasOwnProperty("lineCap") && (this.lineCap = q.lineCap), q.hasOwnProperty("lineJoin") && (this.lineJoin = q.lineJoin);
      }
    }, w.prototype.strokeRect = function(N, T, P, B) {
      if (isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B)) throw Pt.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
      j.call(this) || (this.beginPath(), this.rect(N, T, P, B), this.stroke());
    }, w.prototype.clearRect = function(N, T, P, B) {
      if (isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B)) throw Pt.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
      this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(N, T, P, B));
    }, w.prototype.save = function(N) {
      N = typeof N != "boolean" || N;
      for (var T = this.pdf.internal.getCurrentPageInfo().pageNumber, P = 0; P < this.pdf.internal.getNumberOfPages(); P++) this.pdf.setPage(P + 1), this.pdf.internal.out("q");
      if (this.pdf.setPage(T), N) {
        this.ctx.fontSize = this.pdf.internal.getFontSize();
        var B = new g(this.ctx);
        this.ctxStack.push(this.ctx), this.ctx = B;
      }
    }, w.prototype.restore = function(N) {
      N = typeof N != "boolean" || N;
      for (var T = this.pdf.internal.getCurrentPageInfo().pageNumber, P = 0; P < this.pdf.internal.getNumberOfPages(); P++) this.pdf.setPage(P + 1), this.pdf.internal.out("Q");
      this.pdf.setPage(T), N && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
    }, w.prototype.toDataURL = function() {
      throw new Error("toDataUrl not implemented.");
    };
    var S = function(N) {
      var T, P, B, q;
      if (N.isCanvasGradient === true && (N = N.getColor()), !N) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        style: N
      };
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(N)) T = 0, P = 0, B = 0, q = 0;
      else {
        var W = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(N);
        if (W !== null) T = parseInt(W[1]), P = parseInt(W[2]), B = parseInt(W[3]), q = 1;
        else if ((W = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(N)) !== null) T = parseInt(W[1]), P = parseInt(W[2]), B = parseInt(W[3]), q = parseFloat(W[4]);
        else {
          if (q = 1, typeof N == "string" && N.charAt(0) !== "#") {
            var J = new th(N);
            N = J.ok ? J.toHex() : "#000000";
          }
          N.length === 4 ? (T = N.substring(1, 2), T += T, P = N.substring(2, 3), P += P, B = N.substring(3, 4), B += B) : (T = N.substring(1, 3), P = N.substring(3, 5), B = N.substring(5, 7)), T = parseInt(T, 16), P = parseInt(P, 16), B = parseInt(B, 16);
        }
      }
      return {
        r: T,
        g: P,
        b: B,
        a: q,
        style: N
      };
    }, p = function() {
      return this.ctx.isFillTransparent || this.globalAlpha == 0;
    }, j = function() {
      return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
    };
    w.prototype.fillText = function(N, T, P, B) {
      if (isNaN(T) || isNaN(P) || typeof N != "string") throw Pt.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
      if (B = isNaN(B) ? void 0 : B, !p.call(this)) {
        var q = oe(this.ctx.transform.rotation), W = this.ctx.transform.scaleX;
        O.call(this, {
          text: N,
          x: T,
          y: P,
          scale: W,
          angle: q,
          align: this.textAlign,
          maxWidth: B
        });
      }
    }, w.prototype.strokeText = function(N, T, P, B) {
      if (isNaN(T) || isNaN(P) || typeof N != "string") throw Pt.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
      if (!j.call(this)) {
        B = isNaN(B) ? void 0 : B;
        var q = oe(this.ctx.transform.rotation), W = this.ctx.transform.scaleX;
        O.call(this, {
          text: N,
          x: T,
          y: P,
          scale: W,
          renderingMode: "stroke",
          angle: q,
          align: this.textAlign,
          maxWidth: B
        });
      }
    }, w.prototype.measureText = function(N) {
      if (typeof N != "string") throw Pt.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
      var T = this.pdf, P = this.pdf.internal.scaleFactor, B = T.internal.getFontSize(), q = T.getStringUnitWidth(N) * B / T.internal.scaleFactor;
      return new function(W) {
        var J = (W = W || {}).width || 0;
        return Object.defineProperty(this, "width", {
          get: function() {
            return J;
          }
        }), this;
      }({
        width: q *= Math.round(96 * P / 72 * 1e4) / 1e4
      });
    }, w.prototype.scale = function(N, T) {
      if (isNaN(N) || isNaN(T)) throw Pt.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
      var P = new u(N, 0, 0, T, 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(P);
    }, w.prototype.rotate = function(N) {
      if (isNaN(N)) throw Pt.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
      var T = new u(Math.cos(N), Math.sin(N), -Math.sin(N), Math.cos(N), 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(T);
    }, w.prototype.translate = function(N, T) {
      if (isNaN(N) || isNaN(T)) throw Pt.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
      var P = new u(1, 0, 0, 1, N, T);
      this.ctx.transform = this.ctx.transform.multiply(P);
    }, w.prototype.transform = function(N, T, P, B, q, W) {
      if (isNaN(N) || isNaN(T) || isNaN(P) || isNaN(B) || isNaN(q) || isNaN(W)) throw Pt.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
      var J = new u(N, T, P, B, q, W);
      this.ctx.transform = this.ctx.transform.multiply(J);
    }, w.prototype.setTransform = function(N, T, P, B, q, W) {
      N = isNaN(N) ? 1 : N, T = isNaN(T) ? 0 : T, P = isNaN(P) ? 0 : P, B = isNaN(B) ? 1 : B, q = isNaN(q) ? 0 : q, W = isNaN(W) ? 0 : W, this.ctx.transform = new u(N, T, P, B, q, W);
    };
    var R = function() {
      return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
    };
    w.prototype.drawImage = function(N, T, P, B, q, W, J, Q, se) {
      var _e = this.pdf.getImageProperties(N), Se = 1, Ce = 1, je = 1, I = 1;
      B !== void 0 && Q !== void 0 && (je = Q / B, I = se / q, Se = _e.width / B * Q / B, Ce = _e.height / q * se / q), W === void 0 && (W = T, J = P, T = 0, P = 0), B !== void 0 && Q === void 0 && (Q = B, se = q), B === void 0 && Q === void 0 && (Q = _e.width, se = _e.height);
      var Pe = this.ctx.transform.decompose(), Je = oe(Pe.rotate.shx), ze = new u(), Ne = (ze = (ze = (ze = ze.multiply(Pe.translate)).multiply(Pe.skew)).multiply(Pe.scale)).applyToRectangle(new l(W - T * je, J - P * I, B * Se, q * Ce));
      if (this.autoPaging) {
        for (var Ge, Ee = D.call(this, Ne), Ve = [], He = 0; He < Ee.length; He += 1) Ve.indexOf(Ee[He]) === -1 && Ve.push(Ee[He]);
        $(Ve);
        for (var yt = Ve[0], ft = Ve[Ve.length - 1], tt = yt; tt < ft + 1; tt++) {
          this.pdf.setPage(tt);
          var dt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ht = tt === 1 ? this.posY + this.margin[0] : this.margin[0], De = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], it = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Ue = tt === 1 ? 0 : De + (tt - 2) * it;
          if (this.ctx.clip_path.length !== 0) {
            var Ut = this.path;
            Ge = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = Y(Ge, this.posX + this.margin[3], -Ue + ht + this.ctx.prevPageLastElemOffset), le.call(this, "fill", true), this.path = Ut;
          }
          var gt = JSON.parse(JSON.stringify(Ne));
          gt = Y([
            gt
          ], this.posX + this.margin[3], -Ue + ht + this.ctx.prevPageLastElemOffset)[0];
          var lt = (tt > yt || tt < ft) && R.call(this);
          lt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], dt, it, null).clip().discardPath()), this.pdf.addImage(N, "JPEG", gt.x, gt.y, gt.w, gt.h, null, null, Je), lt && this.pdf.restoreGraphicsState();
        }
      } else this.pdf.addImage(N, "JPEG", Ne.x, Ne.y, Ne.w, Ne.h, null, null, Je);
    };
    var D = function(N, T, P) {
      var B = [];
      T = T || this.pdf.internal.pageSize.width, P = P || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
      var q = this.posY + this.ctx.prevPageLastElemOffset;
      switch (N.type) {
        default:
        case "mt":
        case "lt":
          B.push(Math.floor((N.y + q) / P) + 1);
          break;
        case "arc":
          B.push(Math.floor((N.y + q - N.radius) / P) + 1), B.push(Math.floor((N.y + q + N.radius) / P) + 1);
          break;
        case "qct":
          var W = ie(this.ctx.lastPoint.x, this.ctx.lastPoint.y, N.x1, N.y1, N.x, N.y);
          B.push(Math.floor((W.y + q) / P) + 1), B.push(Math.floor((W.y + W.h + q) / P) + 1);
          break;
        case "bct":
          var J = Le(this.ctx.lastPoint.x, this.ctx.lastPoint.y, N.x1, N.y1, N.x2, N.y2, N.x, N.y);
          B.push(Math.floor((J.y + q) / P) + 1), B.push(Math.floor((J.y + J.h + q) / P) + 1);
          break;
        case "rect":
          B.push(Math.floor((N.y + q) / P) + 1), B.push(Math.floor((N.y + N.h + q) / P) + 1);
      }
      for (var Q = 0; Q < B.length; Q += 1) for (; this.pdf.internal.getNumberOfPages() < B[Q]; ) L.call(this);
      return B;
    }, L = function() {
      var N = this.fillStyle, T = this.strokeStyle, P = this.font, B = this.lineCap, q = this.lineWidth, W = this.lineJoin;
      this.pdf.addPage(), this.fillStyle = N, this.strokeStyle = T, this.font = P, this.lineCap = B, this.lineWidth = q, this.lineJoin = W;
    }, Y = function(N, T, P) {
      for (var B = 0; B < N.length; B++) switch (N[B].type) {
        case "bct":
          N[B].x2 += T, N[B].y2 += P;
        case "qct":
          N[B].x1 += T, N[B].y1 += P;
        default:
          N[B].x += T, N[B].y += P;
      }
      return N;
    }, $ = function(N) {
      return N.sort(function(T, P) {
        return T - P;
      });
    }, U = function(N, T) {
      var P = this.fillStyle, B = this.strokeStyle, q = this.lineCap, W = this.lineWidth, J = Math.abs(W * this.ctx.transform.scaleX), Q = this.lineJoin;
      if (this.autoPaging) {
        for (var se, _e, Se = JSON.parse(JSON.stringify(this.path)), Ce = JSON.parse(JSON.stringify(this.path)), je = [], I = 0; I < Ce.length; I++) if (Ce[I].x !== void 0) for (var Pe = D.call(this, Ce[I]), Je = 0; Je < Pe.length; Je += 1) je.indexOf(Pe[Je]) === -1 && je.push(Pe[Je]);
        for (var ze = 0; ze < je.length; ze++) for (; this.pdf.internal.getNumberOfPages() < je[ze]; ) L.call(this);
        $(je);
        for (var Ne = je[0], Ge = je[je.length - 1], Ee = Ne; Ee < Ge + 1; Ee++) {
          this.pdf.setPage(Ee), this.fillStyle = P, this.strokeStyle = B, this.lineCap = q, this.lineWidth = J, this.lineJoin = Q;
          var Ve = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], He = Ee === 1 ? this.posY + this.margin[0] : this.margin[0], yt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ft = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], tt = Ee === 1 ? 0 : yt + (Ee - 2) * ft;
          if (this.ctx.clip_path.length !== 0) {
            var dt = this.path;
            se = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = Y(se, this.posX + this.margin[3], -tt + He + this.ctx.prevPageLastElemOffset), le.call(this, N, true), this.path = dt;
          }
          if (_e = JSON.parse(JSON.stringify(Se)), this.path = Y(_e, this.posX + this.margin[3], -tt + He + this.ctx.prevPageLastElemOffset), T === false || Ee === 0) {
            var ht = (Ee > Ne || Ee < Ge) && R.call(this);
            ht && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Ve, ft, null).clip().discardPath()), le.call(this, N, T), ht && this.pdf.restoreGraphicsState();
          }
          this.lineWidth = W;
        }
        this.path = Se;
      } else this.lineWidth = J, le.call(this, N, T), this.lineWidth = W;
    }, le = function(N, T) {
      if ((N !== "stroke" || T || !j.call(this)) && (N === "stroke" || T || !p.call(this))) {
        for (var P, B, q = [], W = this.path, J = 0; J < W.length; J++) {
          var Q = W[J];
          switch (Q.type) {
            case "begin":
              q.push({
                begin: true
              });
              break;
            case "close":
              q.push({
                close: true
              });
              break;
            case "mt":
              q.push({
                start: Q,
                deltas: [],
                abs: []
              });
              break;
            case "lt":
              var se = q.length;
              if (W[J - 1] && !isNaN(W[J - 1].x) && (P = [
                Q.x - W[J - 1].x,
                Q.y - W[J - 1].y
              ], se > 0)) {
                for (; se >= 0; se--) if (q[se - 1].close !== true && q[se - 1].begin !== true) {
                  q[se - 1].deltas.push(P), q[se - 1].abs.push(Q);
                  break;
                }
              }
              break;
            case "bct":
              P = [
                Q.x1 - W[J - 1].x,
                Q.y1 - W[J - 1].y,
                Q.x2 - W[J - 1].x,
                Q.y2 - W[J - 1].y,
                Q.x - W[J - 1].x,
                Q.y - W[J - 1].y
              ], q[q.length - 1].deltas.push(P);
              break;
            case "qct":
              var _e = W[J - 1].x + 2 / 3 * (Q.x1 - W[J - 1].x), Se = W[J - 1].y + 2 / 3 * (Q.y1 - W[J - 1].y), Ce = Q.x + 2 / 3 * (Q.x1 - Q.x), je = Q.y + 2 / 3 * (Q.y1 - Q.y), I = Q.x, Pe = Q.y;
              P = [
                _e - W[J - 1].x,
                Se - W[J - 1].y,
                Ce - W[J - 1].x,
                je - W[J - 1].y,
                I - W[J - 1].x,
                Pe - W[J - 1].y
              ], q[q.length - 1].deltas.push(P);
              break;
            case "arc":
              q.push({
                deltas: [],
                abs: [],
                arc: true
              }), Array.isArray(q[q.length - 1].abs) && q[q.length - 1].abs.push(Q);
          }
        }
        B = T ? null : N === "stroke" ? "stroke" : "fill";
        for (var Je = false, ze = 0; ze < q.length; ze++) if (q[ze].arc) for (var Ne = q[ze].abs, Ge = 0; Ge < Ne.length; Ge++) {
          var Ee = Ne[Ge];
          Ee.type === "arc" ? ee.call(this, Ee.x, Ee.y, Ee.radius, Ee.startAngle, Ee.endAngle, Ee.counterclockwise, void 0, T, !Je) : G.call(this, Ee.x, Ee.y), Je = true;
        }
        else if (q[ze].close === true) this.pdf.internal.out("h"), Je = false;
        else if (q[ze].begin !== true) {
          var Ve = q[ze].start.x, He = q[ze].start.y;
          V.call(this, q[ze].deltas, Ve, He), Je = true;
        }
        B && H.call(this, B), T && ne.call(this);
      }
    }, ve = function(N) {
      var T = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, P = T * (this.pdf.internal.getLineHeightFactor() - 1);
      switch (this.ctx.textBaseline) {
        case "bottom":
          return N - P;
        case "top":
          return N + T - P;
        case "hanging":
          return N + T - 2 * P;
        case "middle":
          return N + T / 2 - P;
        default:
          return N;
      }
    }, fe = function(N) {
      return N + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
    };
    w.prototype.createLinearGradient = function() {
      var N = function() {
      };
      return N.colorStops = [], N.addColorStop = function(T, P) {
        this.colorStops.push([
          T,
          P
        ]);
      }, N.getColor = function() {
        return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
      }, N.isCanvasGradient = true, N;
    }, w.prototype.createPattern = function() {
      return this.createLinearGradient();
    }, w.prototype.createRadialGradient = function() {
      return this.createLinearGradient();
    };
    var ee = function(N, T, P, B, q, W, J, Q, se) {
      for (var _e = ue.call(this, P, B, q, W), Se = 0; Se < _e.length; Se++) {
        var Ce = _e[Se];
        Se === 0 && (se ? _.call(this, Ce.x1 + N, Ce.y1 + T) : G.call(this, Ce.x1 + N, Ce.y1 + T)), ce.call(this, N, T, Ce.x2, Ce.y2, Ce.x3, Ce.y3, Ce.x4, Ce.y4);
      }
      Q ? ne.call(this) : H.call(this, J);
    }, H = function(N) {
      switch (N) {
        case "stroke":
          this.pdf.internal.out("S");
          break;
        case "fill":
          this.pdf.internal.out("f");
      }
    }, ne = function() {
      this.pdf.clip(), this.pdf.discardPath();
    }, _ = function(N, T) {
      this.pdf.internal.out(t(N) + " " + r(T) + " m");
    }, O = function(N) {
      var T;
      switch (N.align) {
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
      var P, B, q, W = this.pdf.getTextDimensions(N.text), J = ve.call(this, N.y), Q = fe.call(this, J) - W.h, se = this.ctx.transform.applyToPoint(new h(N.x, J));
      if (this.autoPaging) {
        var _e = this.ctx.transform.decompose(), Se = new u();
        Se = (Se = (Se = Se.multiply(_e.translate)).multiply(_e.skew)).multiply(_e.scale);
        for (var Ce = this.ctx.transform.applyToRectangle(new l(N.x, J, W.w, W.h)), je = Se.applyToRectangle(new l(N.x, Q, W.w, W.h)), I = D.call(this, je), Pe = [], Je = 0; Je < I.length; Je += 1) Pe.indexOf(I[Je]) === -1 && Pe.push(I[Je]);
        $(Pe);
        for (var ze = Pe[0], Ne = Pe[Pe.length - 1], Ge = ze; Ge < Ne + 1; Ge++) {
          this.pdf.setPage(Ge);
          var Ee = Ge === 1 ? this.posY + this.margin[0] : this.margin[0], Ve = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], He = this.pdf.internal.pageSize.height - this.margin[2], yt = He - this.margin[0], ft = this.pdf.internal.pageSize.width - this.margin[1], tt = ft - this.margin[3], dt = Ge === 1 ? 0 : Ve + (Ge - 2) * yt;
          if (this.ctx.clip_path.length !== 0) {
            var ht = this.path;
            P = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = Y(P, this.posX + this.margin[3], -1 * dt + Ee), le.call(this, "fill", true), this.path = ht;
          }
          var De = Y([
            JSON.parse(JSON.stringify(je))
          ], this.posX + this.margin[3], -dt + Ee + this.ctx.prevPageLastElemOffset)[0];
          N.scale >= 0.01 && (B = this.pdf.internal.getFontSize(), this.pdf.setFontSize(B * N.scale), q = this.lineWidth, this.lineWidth = q * N.scale);
          var it = this.autoPaging !== "text";
          if (it || De.y + De.h <= He) {
            if (it || De.y >= Ee && De.x <= ft) {
              var Ue = it ? N.text : this.pdf.splitTextToSize(N.text, N.maxWidth || ft - De.x)[0], Ut = Y([
                JSON.parse(JSON.stringify(Ce))
              ], this.posX + this.margin[3], -dt + Ee + this.ctx.prevPageLastElemOffset)[0], gt = it && (Ge > ze || Ge < Ne) && R.call(this);
              gt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], tt, yt, null).clip().discardPath()), this.pdf.text(Ue, Ut.x, Ut.y, {
                angle: N.angle,
                align: T,
                renderingMode: N.renderingMode
              }), gt && this.pdf.restoreGraphicsState();
            }
          } else De.y < He && (this.ctx.prevPageLastElemOffset += He - De.y);
          N.scale >= 0.01 && (this.pdf.setFontSize(B), this.lineWidth = q);
        }
      } else N.scale >= 0.01 && (B = this.pdf.internal.getFontSize(), this.pdf.setFontSize(B * N.scale), q = this.lineWidth, this.lineWidth = q * N.scale), this.pdf.text(N.text, se.x + this.posX, se.y + this.posY, {
        angle: N.angle,
        align: T,
        renderingMode: N.renderingMode,
        maxWidth: N.maxWidth
      }), N.scale >= 0.01 && (this.pdf.setFontSize(B), this.lineWidth = q);
    }, G = function(N, T, P, B) {
      P = P || 0, B = B || 0, this.pdf.internal.out(t(N + P) + " " + r(T + B) + " l");
    }, V = function(N, T, P) {
      return this.pdf.lines(N, T, P, null, null);
    }, ce = function(N, T, P, B, q, W, J, Q) {
      this.pdf.internal.out([
        e(s(P + N)),
        e(a(B + T)),
        e(s(q + N)),
        e(a(W + T)),
        e(s(J + N)),
        e(a(Q + T)),
        "c"
      ].join(" "));
    }, ue = function(N, T, P, B) {
      for (var q = 2 * Math.PI, W = Math.PI / 2; T > P; ) T -= q;
      var J = Math.abs(P - T);
      J < q && B && (J = q - J);
      for (var Q = [], se = B ? -1 : 1, _e = T; J > 1e-5; ) {
        var Se = _e + se * Math.min(J, W);
        Q.push(be.call(this, N, _e, Se)), J -= Math.abs(Se - _e), _e = Se;
      }
      return Q;
    }, be = function(N, T, P) {
      var B = (P - T) / 2, q = N * Math.cos(B), W = N * Math.sin(B), J = q, Q = -W, se = J * J + Q * Q, _e = se + J * q + Q * W, Se = 4 / 3 * (Math.sqrt(2 * se * _e) - _e) / (J * W - Q * q), Ce = J - Se * Q, je = Q + Se * J, I = Ce, Pe = -je, Je = B + T, ze = Math.cos(Je), Ne = Math.sin(Je);
      return {
        x1: N * Math.cos(T),
        y1: N * Math.sin(T),
        x2: Ce * ze - je * Ne,
        y2: Ce * Ne + je * ze,
        x3: I * ze - Pe * Ne,
        y3: I * Ne + Pe * ze,
        x4: N * Math.cos(P),
        y4: N * Math.sin(P)
      };
    }, oe = function(N) {
      return 180 * N / Math.PI;
    }, ie = function(N, T, P, B, q, W) {
      var J = N + 0.5 * (P - N), Q = T + 0.5 * (B - T), se = q + 0.5 * (P - q), _e = W + 0.5 * (B - W), Se = Math.min(N, q, J, se), Ce = Math.max(N, q, J, se), je = Math.min(T, W, Q, _e), I = Math.max(T, W, Q, _e);
      return new l(Se, je, Ce - Se, I - je);
    }, Le = function(N, T, P, B, q, W, J, Q) {
      var se, _e, Se, Ce, je, I, Pe, Je, ze, Ne, Ge, Ee, Ve, He, yt = P - N, ft = B - T, tt = q - P, dt = W - B, ht = J - q, De = Q - W;
      for (_e = 0; _e < 41; _e++) ze = (Pe = (Se = N + (se = _e / 40) * yt) + se * ((je = P + se * tt) - Se)) + se * (je + se * (q + se * ht - je) - Pe), Ne = (Je = (Ce = T + se * ft) + se * ((I = B + se * dt) - Ce)) + se * (I + se * (W + se * De - I) - Je), _e == 0 ? (Ge = ze, Ee = Ne, Ve = ze, He = Ne) : (Ge = Math.min(Ge, ze), Ee = Math.min(Ee, Ne), Ve = Math.max(Ve, ze), He = Math.max(He, Ne));
      return new l(Math.round(Ge), Math.round(Ee), Math.round(Ve - Ge), Math.round(He - Ee));
    }, xe = function() {
      if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
        var N, T, P = (N = this.ctx.lineDash, T = this.ctx.lineDashOffset, JSON.stringify({
          lineDash: N,
          lineDashOffset: T
        }));
        this.prevLineDash !== P && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = P);
      }
    };
  })(qe.API), function(n) {
    var e = function(h) {
      var l, u, d, g, w, S, p, j, R, D;
      for (u = [], d = 0, g = (h += l = "\0\0\0\0".slice(h.length % 4 || 4)).length; g > d; d += 4) (w = (h.charCodeAt(d) << 24) + (h.charCodeAt(d + 1) << 16) + (h.charCodeAt(d + 2) << 8) + h.charCodeAt(d + 3)) !== 0 ? (S = (w = ((w = ((w = ((w = (w - (D = w % 85)) / 85) - (R = w % 85)) / 85) - (j = w % 85)) / 85) - (p = w % 85)) / 85) % 85, u.push(S + 33, p + 33, j + 33, R + 33, D + 33)) : u.push(122);
      return function(L, Y) {
        for (var $ = Y; $ > 0; $--) L.pop();
      }(u, l.length), String.fromCharCode.apply(String, u) + "~>";
    }, t = function(h) {
      var l, u, d, g, w, S = String, p = "length", j = 255, R = "charCodeAt", D = "slice", L = "replace";
      for (h[D](-2), h = h[D](0, -2)[L](/\s/g, "")[L]("z", "!!!!!"), d = [], g = 0, w = (h += l = "uuuuu"[D](h[p] % 5 || 5))[p]; w > g; g += 5) u = 52200625 * (h[R](g) - 33) + 614125 * (h[R](g + 1) - 33) + 7225 * (h[R](g + 2) - 33) + 85 * (h[R](g + 3) - 33) + (h[R](g + 4) - 33), d.push(j & u >> 24, j & u >> 16, j & u >> 8, j & u);
      return function(Y, $) {
        for (var U = $; U > 0; U--) Y.pop();
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
      return (l = nl(l)).reduce(function(d, g) {
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
  }(qe.API), function(n) {
    n.loadFile = function(e, t, r) {
      return function(s, a, h) {
        a = a !== false, h = typeof h == "function" ? h : function() {
        };
        var l = void 0;
        try {
          l = function(u, d, g) {
            var w = new XMLHttpRequest(), S = 0, p = function(j) {
              var R = j.length, D = [], L = String.fromCharCode;
              for (S = 0; S < R; S += 1) D.push(L(255 & j.charCodeAt(S)));
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
  }(qe.API), function(n) {
    function e() {
      return (Xe.html2canvas ? Promise.resolve(Xe.html2canvas) : Es(() => import("./html2canvas.esm-BfxBtG_O.js"), [])).catch(function(l) {
        return Promise.reject(new Error("Could not load html2canvas: " + l));
      }).then(function(l) {
        return l.default ? l.default : l;
      });
    }
    function t() {
      return (Xe.DOMPurify ? Promise.resolve(Xe.DOMPurify) : Es(() => import("./purify.es-B9ZVCkUG.js"), [])).catch(function(l) {
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
          var j = g[p], R = j.src.find(function(D) {
            return D.format === "truetype";
          });
          R && d.addFont(R.url, j.ref.name, j.ref.style);
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
        (l = l || qe.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = {
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
    }, h.prototype.using = h.prototype.set, h.prototype.saveAs = h.prototype.save, h.prototype.export = h.prototype.output, h.prototype.run = h.prototype.then, qe.getPageSize = function(l, u, d) {
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
      var j, R = 0, D = 0;
      if (p.hasOwnProperty(S)) R = p[S][1] / w, D = p[S][0] / w;
      else try {
        R = d[1], D = d[0];
      } catch {
        throw new Error("Invalid format: " + d);
      }
      if (l === "p" || l === "portrait") l = "p", D > R && (j = D, D = R, R = j);
      else {
        if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
        l = "l", R > D && (j = D, D = R, R = j);
      }
      return {
        width: D,
        height: R,
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
  }(qe.API), qe.API.addJS = function(n) {
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
  }(qe.API), function(n) {
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
          for (var S, p = 256 * w.charCodeAt(4) + w.charCodeAt(5), j = w.length, R = {
            width: 0,
            height: 0,
            numcomponents: 1
          }, D = 4; D < j; D += 2) {
            if (D += p, e.indexOf(w.charCodeAt(D + 1)) !== -1) {
              S = 256 * w.charCodeAt(D + 5) + w.charCodeAt(D + 6), R = {
                width: 256 * w.charCodeAt(D + 7) + w.charCodeAt(D + 8),
                height: S,
                numcomponents: w.charCodeAt(D + 9)
              };
              break;
            }
            p = 256 * w.charCodeAt(D + 2) + w.charCodeAt(D + 3);
          }
          return R;
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
  }(qe.API), qe.API.processPNG = function(n, e, t, r) {
    if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
      var s, a = m5(n, {
        checkCrc: true
      }), h = a.width, l = a.height, u = a.channels, d = a.palette, g = a.depth;
      s = d && u === 1 ? function(ee) {
        for (var H = ee.width, ne = ee.height, _ = ee.data, O = ee.palette, G = ee.depth, V = false, ce = [], ue = [], be = void 0, oe = false, ie = 0, Le = 0; Le < O.length; Le++) {
          var xe = mc(O[Le], 4), N = xe[0], T = xe[1], P = xe[2], B = xe[3];
          ce.push(N, T, P), B != null && (B === 0 ? (ie++, ue.length < 1 && ue.push(Le)) : B < 255 && (oe = true));
        }
        if (oe || ie > 1) {
          V = true, ue = void 0;
          var q = H * ne;
          be = new Uint8Array(q);
          for (var W = new DataView(_.buffer), J = 0; J < q; J++) {
            var Q = Xo(W, J, G), se = mc(O[Q], 4)[3];
            be[J] = se;
          }
        } else ie === 0 && (ue = void 0);
        return {
          colorSpace: "Indexed",
          colorsPerPixel: 1,
          sMaskBitsPerComponent: V ? 8 : void 0,
          colorBytes: _,
          alphaBytes: be,
          needSMask: V,
          palette: ce,
          mask: ue
        };
      }(a) : u === 2 || u === 4 ? function(ee) {
        for (var H = ee.data, ne = ee.width, _ = ee.height, O = ee.channels, G = ee.depth, V = O === 2 ? "DeviceGray" : "DeviceRGB", ce = O - 1, ue = ne * _, be = ce, oe = ue * be, ie = 1 * ue, Le = Math.ceil(oe * G / 8), xe = Math.ceil(ie * G / 8), N = new Uint8Array(Le), T = new Uint8Array(xe), P = new DataView(H.buffer), B = new DataView(N.buffer), q = new DataView(T.buffer), W = false, J = 0; J < ue; J++) {
          for (var Q = J * O, se = 0; se < be; se++) vu(B, Xo(P, Q + se, G), J * be + se, G);
          var _e = Xo(P, Q + be, G);
          _e < (1 << G) - 1 && (W = true), vu(q, _e, 1 * J, G);
        }
        return {
          colorSpace: V,
          colorsPerPixel: ce,
          sMaskBitsPerComponent: W ? G : void 0,
          colorBytes: N,
          alphaBytes: T,
          needSMask: W
        };
      }(a) : function(ee) {
        var H = ee.data, ne = ee.channels === 1 ? "DeviceGray" : "DeviceRGB";
        return {
          colorSpace: ne,
          colorsPerPixel: ne === "DeviceGray" ? 1 : 3,
          colorBytes: H instanceof Uint16Array ? function(_) {
            for (var O = _.length, G = new Uint8Array(2 * O), V = new DataView(G.buffer, G.byteOffset, G.byteLength), ce = 0; ce < O; ce++) V.setUint16(2 * ce, _[ce], false);
            return G;
          }(H) : H,
          needSMask: false
        };
      }(a);
      var w, S, p, j = s, R = j.colorSpace, D = j.colorsPerPixel, L = j.sMaskBitsPerComponent, Y = j.colorBytes, $ = j.alphaBytes, U = j.needSMask, le = j.palette, ve = j.mask, fe = null;
      return r !== qe.API.image_compression.NONE && typeof nl == "function" ? (fe = function(ee) {
        var H;
        switch (ee) {
          case qe.API.image_compression.FAST:
            H = 11;
            break;
          case qe.API.image_compression.MEDIUM:
            H = 13;
            break;
          case qe.API.image_compression.SLOW:
            H = 14;
            break;
          default:
            H = 12;
        }
        return H;
      }(r), w = this.decode.FLATE_DECODE, S = "/Predictor ".concat(fe, " /Colors ").concat(D, " /BitsPerComponent ").concat(g, " /Columns ").concat(h), n = du(Y, Math.ceil(h * D * g / 8), D, g, r), U && (p = du($, Math.ceil(h * L / 8), 1, L, r))) : (w = void 0, S = void 0, n = Y, U && (p = $)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), {
        alias: t,
        data: n,
        index: e,
        filter: w,
        decodeParameters: S,
        transparency: ve,
        palette: le,
        sMask: p,
        predictor: fe,
        width: h,
        height: l,
        bitsPerComponent: g,
        sMaskBitsPerComponent: L,
        colorSpace: R
      };
    }
  }, function(n) {
    n.processGIF89A = function(e, t, r, s) {
      var a = new O5(e), h = a.width, l = a.height, u = [];
      a.decodeAndBlitFrameRGBA(0, u);
      var d = {
        data: u,
        width: h,
        height: l
      }, g = new Zo(100).encode(d, 100);
      return n.processJPEG.call(this, g, t, r, s);
    }, n.processGIF87A = n.processGIF89A;
  }(qe.API), nr.prototype.parseHeader = function() {
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
  }, nr.prototype.parseBGR = function() {
    this.pos = this.offset;
    var n = "bit" + this.bitPP, e = this.width * this.height * 4;
    if (e > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    this.data = new Uint8Array(e);
    try {
      this[n]();
    } catch (t) {
      Pt.log("bit decode error:" + t);
    }
  }, nr.prototype.bit1 = function() {
    var n, e = Math.ceil(this.width / 8), t = e % 4;
    for (n = this.height - 1; n >= 0; n--) {
      for (var r = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++) for (var a = this.datav.getUint8(this.pos++, true), h = r * this.width * 4 + 8 * s * 4, l = 0; l < 8 && 8 * s + l < this.width; l++) {
        var u = this.palette[a >> 7 - l & 1];
        this.data[h + 4 * l] = u.blue, this.data[h + 4 * l + 1] = u.green, this.data[h + 4 * l + 2] = u.red, this.data[h + 4 * l + 3] = 255;
      }
      t !== 0 && (this.pos += 4 - t);
    }
  }, nr.prototype.bit4 = function() {
    for (var n = Math.ceil(this.width / 2), e = n % 4, t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, s = 0; s < n; s++) {
        var a = this.datav.getUint8(this.pos++, true), h = r * this.width * 4 + 2 * s * 4, l = a >> 4, u = 15 & a, d = this.palette[l];
        if (this.data[h] = d.blue, this.data[h + 1] = d.green, this.data[h + 2] = d.red, this.data[h + 3] = 255, 2 * s + 1 >= this.width) break;
        d = this.palette[u], this.data[h + 4] = d.blue, this.data[h + 4 + 1] = d.green, this.data[h + 4 + 2] = d.red, this.data[h + 4 + 3] = 255;
      }
      e !== 0 && (this.pos += 4 - e);
    }
  }, nr.prototype.bit8 = function() {
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
  }, nr.prototype.bit15 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, s = 0; s < this.width; s++) {
        var a = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var h = (a & e) / e * 255 | 0, l = (a >> 5 & e) / e * 255 | 0, u = (a >> 10 & e) / e * 255 | 0, d = a >> 15 ? 255 : 0, g = r * this.width * 4 + 4 * s;
        this.data[g] = u, this.data[g + 1] = l, this.data[g + 2] = h, this.data[g + 3] = d;
      }
      this.pos += n;
    }
  }, nr.prototype.bit16 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
      for (var s = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
        var h = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var l = (h & e) / e * 255 | 0, u = (h >> 5 & t) / t * 255 | 0, d = (h >> 11) / e * 255 | 0, g = s * this.width * 4 + 4 * a;
        this.data[g] = d, this.data[g + 1] = u, this.data[g + 2] = l, this.data[g + 3] = 255;
      }
      this.pos += n;
    }
  }, nr.prototype.bit24 = function() {
    for (var n = this.height - 1; n >= 0; n--) {
      for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
        var r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), h = e * this.width * 4 + 4 * t;
        this.data[h] = a, this.data[h + 1] = s, this.data[h + 2] = r, this.data[h + 3] = 255;
      }
      this.pos += this.width % 4;
    }
  }, nr.prototype.bit32 = function() {
    for (var n = this.height - 1; n >= 0; n--) for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
      var r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), h = this.datav.getUint8(this.pos++, true), l = e * this.width * 4 + 4 * t;
      this.data[l] = a, this.data[l + 1] = s, this.data[l + 2] = r, this.data[l + 3] = h;
    }
  }, nr.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processBMP = function(e, t, r, s) {
      var a = new nr(e, false), h = a.width, l = a.height, u = {
        data: a.getData(),
        width: h,
        height: l
      }, d = new Zo(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, s);
    };
  }(qe.API), yu.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processWEBP = function(e, t, r, s) {
      var a = new yu(e), h = a.width, l = a.height, u = {
        data: a.getData(),
        width: h,
        height: l
      }, d = new Zo(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, s);
    };
  }(qe.API), qe.API.processRGBA = function(n, e, t) {
    for (var r = n.data, s = r.length, a = new Uint8Array(s / 4 * 3), h = new Uint8Array(s / 4), l = 0, u = 0, d = 0; d < s; d += 4) {
      var g = r[d], w = r[d + 1], S = r[d + 2], p = r[d + 3];
      a[l++] = g, a[l++] = w, a[l++] = S, h[u++] = p;
    }
    var j = this.__addimage__.arrayBufferToBinaryString(a);
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(h),
      data: j,
      index: e,
      alias: t,
      colorSpace: "DeviceRGB",
      bitsPerComponent: 8,
      width: n.width,
      height: n.height
    };
  }, qe.API.setLanguage = function(n) {
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
  }, Ki = qe.API, js = Ki.getCharWidthsArray = function(n, e) {
    var t, r, s = (e = e || {}).font || this.internal.getFont(), a = e.fontSize || this.internal.getFontSize(), h = e.charSpace || this.internal.getCharSpace(), l = e.widths ? e.widths : s.metadata.Unicode.widths, u = l.fof ? l.fof : 1, d = e.kerning ? e.kerning : s.metadata.Unicode.kerning, g = d.fof ? d.fof : 1, w = e.doKerning !== false, S = 0, p = n.length, j = 0, R = l[0] || u, D = [];
    for (t = 0; t < p; t++) r = n.charCodeAt(t), typeof s.metadata.widthOfString == "function" ? D.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(r)) + h * (1e3 / a) || 0) / 1e3) : (S = w && Lt(d[r]) === "object" && !isNaN(parseInt(d[r][j], 10)) ? d[r][j] / g : 0, D.push((l[r] || R) / u + S)), j = r;
    return D;
  }, uu = Ki.getStringUnitWidth = function(n, e) {
    var t = (e = e || {}).fontSize || this.internal.getFontSize(), r = e.font || this.internal.getFont(), s = e.charSpace || this.internal.getCharSpace();
    return Ki.processArabic && (n = Ki.processArabic(n)), typeof r.metadata.widthOfString == "function" ? r.metadata.widthOfString(n, t, s) / t : js.apply(this, arguments).reduce(function(a, h) {
      return a + h;
    }, 0);
  }, fu = function(n, e, t, r) {
    for (var s = [], a = 0, h = n.length, l = 0; a !== h && l + e[a] < t; ) l += e[a], a++;
    s.push(n.slice(0, a));
    var u = a;
    for (l = 0; a !== h; ) l + e[a] > r && (s.push(n.slice(u, a)), l = 0, u = a), l += e[a], a++;
    return u !== a && s.push(n.slice(u, a)), s;
  }, hu = function(n, e, t) {
    t || (t = {});
    var r, s, a, h, l, u, d, g = [], w = [
      g
    ], S = t.textIndent || 0, p = 0, j = 0, R = n.split(" "), D = js.apply(this, [
      " ",
      t
    ])[0];
    if (u = t.lineIndent === -1 ? R[0].length + 2 : t.lineIndent || 0) {
      var L = Array(u).join(" "), Y = [];
      R.map(function(U) {
        (U = U.split(/\s*\n/)).length > 1 ? Y = Y.concat(U.map(function(le, ve) {
          return (ve && le.length ? `
` : "") + le;
        })) : Y.push(U[0]);
      }), R = Y, u = uu.apply(this, [
        L,
        t
      ]);
    }
    for (a = 0, h = R.length; a < h; a++) {
      var $ = 0;
      if (r = R[a], u && r[0] == `
` && (r = r.substr(1), $ = 1), S + p + (j = (s = js.apply(this, [
        r,
        t
      ])).reduce(function(U, le) {
        return U + le;
      }, 0)) > e || $) {
        if (j > e) {
          for (l = fu.apply(this, [
            r,
            s,
            e - (S + p),
            e
          ]), g.push(l.shift()), g = [
            l.pop()
          ]; l.length; ) w.push([
            l.shift()
          ]);
          j = s.slice(r.length - (g[0] ? g[0].length : 0)).reduce(function(U, le) {
            return U + le;
          }, 0);
        } else g = [
          r
        ];
        w.push(g), S = j + u, p = D;
      } else g.push(r), S += p + j, p = D;
    }
    return d = u ? function(U, le) {
      return (le ? L : "") + U.join(" ");
    } : function(U) {
      return U.join(" ");
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
    for (l = 0, u = r.length; l < u; l++) d = d.concat(hu.apply(this, [
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
      var p, j, R, D, L = [
        "{"
      ];
      for (var Y in S) {
        if (p = S[Y], isNaN(parseInt(Y, 10)) ? j = "'" + Y + "'" : (Y = parseInt(Y, 10), j = (j = h(Y).slice(2)).slice(0, -1) + s[j.slice(-1)]), typeof p == "number") p < 0 ? (R = h(p).slice(3), D = "-") : (R = h(p).slice(2), D = ""), R = D + R.slice(0, -1) + s[R.slice(-1)];
        else {
          if (Lt(p) !== "object") throw new Error("Don't know what to do with value type " + Lt(p) + ".");
          R = l(p);
        }
        L.push(j + R);
      }
      return L.push("}"), L.join("");
    }, u = n.__fontmetrics__.uncompress = function(S) {
      if (typeof S != "string") throw new Error("Invalid argument passed to uncompress.");
      for (var p, j, R, D, L = {}, Y = 1, $ = L, U = [], le = "", ve = "", fe = S.length - 1, ee = 1; ee < fe; ee += 1) (D = S[ee]) == "'" ? p ? (R = p.join(""), p = void 0) : p = [] : p ? p.push(D) : D == "{" ? (U.push([
        $,
        R
      ]), $ = {}, R = void 0) : D == "}" ? ((j = U.pop())[0][j[1]] = $, R = void 0, $ = j[0]) : D == "-" ? Y = -1 : R === void 0 ? r.hasOwnProperty(D) ? (le += r[D], R = parseInt(le, 16) * Y, Y = 1, le = "") : le += D : r.hasOwnProperty(D) ? (ve += r[D], $[R] = parseInt(ve, 16) * Y, Y = 1, R = void 0, ve = "") : ve += D;
      return L;
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
        var p = S.font, j = w.Unicode[p.postScriptName];
        j && (p.metadata.Unicode = {}, p.metadata.Unicode.widths = j.widths, p.metadata.Unicode.kerning = j.kerning);
        var R = g.Unicode[p.postScriptName];
        R && (p.metadata.Unicode.encoding = R, p.encoding = R.codePages[0]);
      }
    ]);
  }(qe.API), function(n) {
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
  }(qe), qe.API.addSvgAsImage = function(n, e, t, r, s, a, h, l) {
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
    return (Xe.canvg ? Promise.resolve(Xe.canvg) : Es(() => import("./index.es-DSrcuiOj.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))).catch(function(S) {
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
  }, qe.API.putTotalPages = function(n) {
    var e, t = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), t = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), t = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for (var r = 1; r <= this.internal.getNumberOfPages(); r++) for (var s = 0; s < this.internal.pages[r].length; s++) this.internal.pages[r][s] = this.internal.pages[r][s].replace(e, t);
    return this;
  }, qe.API.viewerPreferences = function(n, e) {
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
    function S(j, R) {
      var D, L = false;
      for (D = 0; D < j.length; D += 1) j[D] === R && (L = true);
      return L;
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
      var j, R = [];
      for (j in t) t[j].explicitSet === true && (t[j].type === "name" ? R.push("/" + j + " /" + t[j].value) : R.push("/" + j + " " + t[j].value));
      R.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + R.join(`
`) + `
>>`);
    }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = t, this;
  }, qe.API.addMetadata = function(n, e) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
      metadata: n,
      namespaceUri: e ?? "http://jspdf.default.namespaceuri/",
      rawXml: typeof e == "boolean" && e
    }, this.internal.events.subscribe("putCatalog", T5), this.internal.events.subscribe("postPutResources", D5)), this;
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
endcodespacerange`, u = [], w = 0, S = (l = Object.keys(a).sort(function(p, j) {
        return p - j;
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
            for (var w = l.metadata.Unicode.widths, S = l.metadata.subset.encode(l.metadata.glyIdsUsed, 1), p = "", j = 0; j < S.length; j++) p += String.fromCharCode(S[j]);
            var R = d();
            g({
              data: p,
              addLength1: true,
              objectId: R
            }), u("endobj");
            var D = d();
            g({
              data: r(l.metadata.toUnicode),
              addLength1: true,
              objectId: D
            }), u("endobj");
            var L = d();
            u("<<"), u("/Type /FontDescriptor"), u("/FontName /" + Ji(l.fontName)), u("/FontFile2 " + R + " 0 R"), u("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), u("/Flags " + l.metadata.flags), u("/StemV " + l.metadata.stemV), u("/ItalicAngle " + l.metadata.italicAngle), u("/Ascent " + l.metadata.ascender), u("/Descent " + l.metadata.decender), u("/CapHeight " + l.metadata.capHeight), u(">>"), u("endobj");
            var Y = d();
            u("<<"), u("/Type /Font"), u("/BaseFont /" + Ji(l.fontName)), u("/FontDescriptor " + L + " 0 R"), u("/W " + n.API.PDFObject.convert(w)), u("/CIDToGIDMap /Identity"), u("/DW 1000"), u("/Subtype /CIDFontType2"), u("/CIDSystemInfo"), u("<<"), u("/Supplement 0"), u("/Registry (Adobe)"), u("/Ordering (" + l.encoding + ")"), u(">>"), u(">>"), u("endobj"), l.objectNumber = d(), u("<<"), u("/Type /Font"), u("/Subtype /Type0"), u("/ToUnicode " + D + " 0 R"), u("/BaseFont /" + Ji(l.fontName)), u("/Encoding /" + l.encoding), u("/DescendantFonts [" + Y + " 0 R]"), u(">>"), u("endobj"), l.isAlreadyPutted = true;
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
            var j = d();
            g({
              data: S,
              addLength1: true,
              objectId: j
            }), u("endobj");
            var R = d();
            g({
              data: r(l.metadata.toUnicode),
              addLength1: true,
              objectId: R
            }), u("endobj");
            var D = d();
            u("<<"), u("/Descent " + l.metadata.decender), u("/CapHeight " + l.metadata.capHeight), u("/StemV " + l.metadata.stemV), u("/Type /FontDescriptor"), u("/FontFile2 " + j + " 0 R"), u("/Flags 96"), u("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), u("/FontName /" + Ji(l.fontName)), u("/ItalicAngle " + l.metadata.italicAngle), u("/Ascent " + l.metadata.ascender), u(">>"), u("endobj"), l.objectNumber = d();
            for (var L = 0; L < l.metadata.hmtx.widths.length; L++) l.metadata.hmtx.widths[L] = parseInt(l.metadata.hmtx.widths[L] * (1e3 / l.metadata.head.unitsPerEm));
            u("<</Subtype/TrueType/Type/Font/ToUnicode " + R + " 0 R/BaseFont/" + Ji(l.fontName) + "/FontDescriptor " + D + " 0 R/Encoding/" + l.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(l.metadata.hmtx.widths) + ">>"), u("endobj"), l.isAlreadyPutted = true;
          }
        })(a);
      }
    ]);
    var s = function(a) {
      var h, l = a.text || "", u = a.x, d = a.y, g = a.options || {}, w = a.mutex || {}, S = w.pdfEscape, p = w.activeFontKey, j = w.fonts, R = p, D = "", L = 0, Y = "", $ = j[R].encoding;
      if (j[R].encoding !== "Identity-H") return {
        text: l,
        x: u,
        y: d,
        options: g,
        mutex: w
      };
      for (Y = l, R = p, Array.isArray(l) && (Y = l[0]), L = 0; L < Y.length; L += 1) j[R].metadata.hasOwnProperty("cmap") && (h = j[R].metadata.cmap.unicode.codeMap[Y[L].charCodeAt(0)]), h || Y[L].charCodeAt(0) < 256 && j[R].metadata.hasOwnProperty("Unicode") ? D += Y[L] : D += "";
      var U = "";
      return parseInt(R.slice(1)) < 14 || $ === "WinAnsiEncoding" ? U = S(D, R).split("").map(function(le) {
        return le.charCodeAt(0).toString(16);
      }).join("") : $ === "Identity-H" && (U = t(D, j[R])), w.isHex = true, {
        text: U,
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
  }(qe), function(n) {
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
  }(qe.API), function(n) {
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
      ], j = {
        L: 0,
        R: 1,
        EN: 2,
        AN: 3,
        N: 4,
        B: 5,
        S: 6
      }, R = {
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
      ], L = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), Y = false, $ = 0;
      this.__bidiEngine__ = {};
      var U = function(_) {
        var O = _.charCodeAt(), G = O >> 8, V = R[G];
        return V !== void 0 ? w[256 * V + (255 & O)] : G === 252 || G === 253 ? "AL" : L.test(G) ? "L" : G === 8 ? "R" : "N";
      }, le = function(_) {
        for (var O, G = 0; G < _.length; G++) {
          if ((O = U(_.charAt(G))) === "L") return false;
          if (O === "R") return true;
        }
        return false;
      }, ve = function(_, O, G, V) {
        var ce, ue, be, oe, ie = O[V];
        switch (ie) {
          case "L":
          case "R":
          case "LRE":
          case "RLE":
          case "LRO":
          case "RLO":
          case "PDF":
            Y = false;
            break;
          case "N":
          case "AN":
            break;
          case "EN":
            Y && (ie = "AN");
            break;
          case "AL":
            Y = true, ie = "R";
            break;
          case "WS":
          case "BN":
            ie = "N";
            break;
          case "CS":
            V < 1 || V + 1 >= O.length || (ce = G[V - 1]) !== "EN" && ce !== "AN" || (ue = O[V + 1]) !== "EN" && ue !== "AN" ? ie = "N" : Y && (ue = "AN"), ie = ue === ce ? ue : "N";
            break;
          case "ES":
            ie = (ce = V > 0 ? G[V - 1] : "B") === "EN" && V + 1 < O.length && O[V + 1] === "EN" ? "EN" : "N";
            break;
          case "ET":
            if (V > 0 && G[V - 1] === "EN") {
              ie = "EN";
              break;
            }
            if (Y) {
              ie = "N";
              break;
            }
            for (be = V + 1, oe = O.length; be < oe && O[be] === "ET"; ) be++;
            ie = be < oe && O[be] === "EN" ? "EN" : "N";
            break;
          case "NSM":
            if (h && !l) {
              for (oe = O.length, be = V + 1; be < oe && O[be] === "NSM"; ) be++;
              if (be < oe) {
                var Le = _[V], xe = Le >= 1425 && Le <= 2303 || Le === 64286;
                if (ce = O[be], xe && (ce === "R" || ce === "AL")) {
                  ie = "R";
                  break;
                }
              }
            }
            ie = V < 1 || (ce = O[V - 1]) === "B" ? "N" : G[V - 1];
            break;
          case "B":
            Y = false, s = true, ie = $;
            break;
          case "S":
            a = true, ie = "N";
        }
        return ie;
      }, fe = function(_, O, G) {
        var V = _.split("");
        return G && ee(V, G, {
          hiLevel: $
        }), V.reverse(), O && O.reverse(), V.join("");
      }, ee = function(_, O, G) {
        var V, ce, ue, be, oe, ie = -1, Le = _.length, xe = 0, N = [], T = $ ? p : S, P = [];
        for (Y = false, s = false, a = false, ce = 0; ce < Le; ce++) P[ce] = U(_[ce]);
        for (ue = 0; ue < Le; ue++) {
          if (oe = xe, N[ue] = ve(_, P, N, ue), V = 240 & (xe = T[oe][j[N[ue]]]), xe &= 15, O[ue] = be = T[xe][5], V > 0) if (V === 16) {
            for (ce = ie; ce < ue; ce++) O[ce] = 1;
            ie = -1;
          } else ie = -1;
          if (T[xe][6]) ie === -1 && (ie = ue);
          else if (ie > -1) {
            for (ce = ie; ce < ue; ce++) O[ce] = be;
            ie = -1;
          }
          P[ue] === "B" && (O[ue] = 0), G.hiLevel |= be;
        }
        a && function(B, q, W) {
          for (var J = 0; J < W; J++) if (B[J] === "S") {
            q[J] = $;
            for (var Q = J - 1; Q >= 0 && B[Q] === "WS"; Q--) q[Q] = $;
          }
        }(P, O, Le);
      }, H = function(_, O, G, V, ce) {
        if (!(ce.hiLevel < _)) {
          if (_ === 1 && $ === 1 && !s) return O.reverse(), void (G && G.reverse());
          for (var ue, be, oe, ie, Le = O.length, xe = 0; xe < Le; ) {
            if (V[xe] >= _) {
              for (oe = xe + 1; oe < Le && V[oe] >= _; ) oe++;
              for (ie = xe, be = oe - 1; ie < be; ie++, be--) ue = O[ie], O[ie] = O[be], O[be] = ue, G && (ue = G[ie], G[ie] = G[be], G[be] = ue);
              xe = oe;
            }
            xe++;
          }
        }
      }, ne = function(_, O, G) {
        var V = _.split(""), ce = {
          hiLevel: $
        };
        return G || (G = []), ee(V, G, ce), function(ue, be, oe) {
          if (oe.hiLevel !== 0 && g) for (var ie, Le = 0; Le < ue.length; Le++) be[Le] === 1 && (ie = D.indexOf(ue[Le])) >= 0 && (ue[Le] = D[ie + 1]);
        }(V, G, ce), H(2, V, O, G, ce), H(1, V, O, G, ce), V.join("");
      };
      return this.__bidiEngine__.doBidiReorder = function(_, O, G) {
        if (function(ce, ue) {
          if (ue) for (var be = 0; be < ce.length; be++) ue[be] = be;
          l === void 0 && (l = le(ce)), d === void 0 && (d = le(ce));
        }(_, O), h || !u || d) if (h && u && l ^ d) $ = l ? 1 : 0, _ = fe(_, O, G);
        else if (!h && u && d) $ = l ? 1 : 0, _ = ne(_, O, G), _ = fe(_, O);
        else if (!h || l || u || d) {
          if (h && !u && l ^ d) _ = fe(_, O), l ? ($ = 0, _ = ne(_, O, G)) : ($ = 1, _ = ne(_, O, G), _ = fe(_, O));
          else if (h && l && !u && d) $ = 1, _ = ne(_, O, G), _ = fe(_, O);
          else if (!h && !u && l ^ d) {
            var V = g;
            l ? ($ = 1, _ = ne(_, O, G), $ = 0, g = false, _ = ne(_, O, G), g = V) : ($ = 0, _ = ne(_, O, G), _ = fe(_, O), $ = 1, g = false, _ = ne(_, O, G), g = V, _ = fe(_, O));
          }
        } else $ = 0, _ = ne(_, O, G);
        else $ = l ? 1 : 0, _ = ne(_, O, G);
        return _;
      }, this.__bidiEngine__.setOptions = function(_) {
        _ && (h = _.isInputVisual, u = _.isOutputVisual, l = _.isInputRtl, d = _.isOutputRtl, g = _.isSymmetricSwapping);
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
  }(qe), qe.API.TTFFont = function() {
    function n(e) {
      var t;
      if (this.rawData = e, t = this.contents = new ri(e), this.contents.pos = 4, t.readString(4) === "ttcf") throw new Error("TTCF not supported.");
      t.pos = 0, this.parse(), this.subset = new Q5(this), this.registerTTF();
    }
    return n.open = function(e) {
      return new n(e);
    }, n.prototype.parse = function() {
      return this.directory = new B5(this.contents), this.head = new U5(this), this.name = new G5(this), this.cmap = new hh(this), this.toUnicode = {}, this.hhea = new z5(this), this.maxp = new $5(this), this.hmtx = new K5(this), this.post = new W5(this), this.os2 = new H5(this), this.loca = new Z5(this), this.glyf = new Y5(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
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
  var ir, ri = function() {
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
  }(), B5 = function() {
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
      var r, s, a, h, l, u, d, g, w, S, p, j, R;
      for (R in p = Object.keys(t).length, u = Math.log(2), w = 16 * Math.floor(Math.log(p) / u), h = Math.floor(w / u), g = 16 * p - w, (s = new ri()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(w), s.writeShort(h), s.writeShort(g), a = 16 * p, d = s.pos + a, l = null, j = [], t) for (S = t[R], s.writeString(R), s.writeInt(n(S)), s.writeInt(d), s.writeInt(S.length), j = j.concat(S), R === "head" && (l = d), d += S.length; d % 4; ) j.push(0), d++;
      return s.write(j), r = 2981146554 - n(s.data), s.pos = l + 8, s.writeUInt32(r), s.data;
    }, n = function(t) {
      var r, s, a, h;
      for (t = dh.call(t); t.length % 4; ) t.push(0);
      for (a = new ri(t), s = 0, r = 0, h = t.length; r < h; r = r += 4) s += a.readUInt32();
      return 4294967295 & s;
    }, e;
  }(), q5 = {}.hasOwnProperty, br = function(n, e) {
    for (var t in e) q5.call(e, t) && (n[t] = e[t]);
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
  var U5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "head", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort();
    }, n.prototype.encode = function(e) {
      var t;
      return (t = new ri()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data;
    }, n;
  }(), xu = function() {
    function n(e, t) {
      var r, s, a, h, l, u, d, g, w, S, p, j, R, D, L, Y, $;
      switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), w = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
        case 0:
          for (u = 0; u < 256; ++u) this.codeMap[u] = e.readByte();
          break;
        case 4:
          for (p = e.readUInt16(), S = p / 2, e.pos += 6, a = function() {
            var U, le;
            for (le = [], u = U = 0; 0 <= S ? U < S : U > S; u = 0 <= S ? ++U : --U) le.push(e.readUInt16());
            return le;
          }(), e.pos += 2, R = function() {
            var U, le;
            for (le = [], u = U = 0; 0 <= S ? U < S : U > S; u = 0 <= S ? ++U : --U) le.push(e.readUInt16());
            return le;
          }(), d = function() {
            var U, le;
            for (le = [], u = U = 0; 0 <= S ? U < S : U > S; u = 0 <= S ? ++U : --U) le.push(e.readUInt16());
            return le;
          }(), g = function() {
            var U, le;
            for (le = [], u = U = 0; 0 <= S ? U < S : U > S; u = 0 <= S ? ++U : --U) le.push(e.readUInt16());
            return le;
          }(), s = (this.length - e.pos + this.offset) / 2, l = function() {
            var U, le;
            for (le = [], u = U = 0; 0 <= s ? U < s : U > s; u = 0 <= s ? ++U : --U) le.push(e.readUInt16());
            return le;
          }(), u = L = 0, $ = a.length; L < $; u = ++L) for (D = a[u], r = Y = j = R[u]; j <= D ? Y <= D : Y >= D; r = j <= D ? ++Y : --Y) g[u] === 0 ? h = r + d[u] : (h = l[g[u] / 2 + (r - j) - (S - u)] || 0) !== 0 && (h += d[u]), this.codeMap[r] = 65535 & h;
      }
      e.pos = w;
    }
    return n.encode = function(e, t) {
      var r, s, a, h, l, u, d, g, w, S, p, j, R, D, L, Y, $, U, le, ve, fe, ee, H, ne, _, O, G, V, ce, ue, be, oe, ie, Le, xe, N, T, P, B, q, W, J, Q, se, _e, Se;
      switch (V = new ri(), h = Object.keys(e).sort(function(Ce, je) {
        return Ce - je;
      }), t) {
        case "macroman":
          for (R = 0, D = function() {
            var Ce = [];
            for (j = 0; j < 256; ++j) Ce.push(0);
            return Ce;
          }(), Y = {
            0: 0
          }, a = {}, ce = 0, ie = h.length; ce < ie; ce++) Y[Q = e[s = h[ce]]] == null && (Y[Q] = ++R), a[s] = {
            old: e[s],
            new: Y[e[s]]
          }, D[s] = Y[e[s]];
          return V.writeUInt16(1), V.writeUInt16(0), V.writeUInt32(12), V.writeUInt16(0), V.writeUInt16(262), V.writeUInt16(0), V.write(D), {
            charMap: a,
            subtable: V.data,
            maxGlyphID: R + 1
          };
        case "unicode":
          for (O = [], w = [], $ = 0, Y = {}, r = {}, L = d = null, ue = 0, Le = h.length; ue < Le; ue++) Y[le = e[s = h[ue]]] == null && (Y[le] = ++$), r[s] = {
            old: le,
            new: Y[le]
          }, l = Y[le] - s, L != null && l === d || (L && w.push(L), O.push(s), d = l), L = s;
          for (L && w.push(L), w.push(65535), O.push(65535), ne = 2 * (H = O.length), ee = 2 * Math.pow(Math.log(H) / Math.LN2, 2), S = Math.log(ee / 2) / Math.LN2, fe = 2 * H - ee, u = [], ve = [], p = [], j = be = 0, xe = O.length; be < xe; j = ++be) {
            if (_ = O[j], g = w[j], _ === 65535) {
              u.push(0), ve.push(0);
              break;
            }
            if (_ - (G = r[_].new) >= 32768) for (u.push(0), ve.push(2 * (p.length + H - j)), s = oe = _; _ <= g ? oe <= g : oe >= g; s = _ <= g ? ++oe : --oe) p.push(r[s].new);
            else u.push(G - _), ve.push(0);
          }
          for (V.writeUInt16(3), V.writeUInt16(1), V.writeUInt32(12), V.writeUInt16(4), V.writeUInt16(16 + 8 * H + 2 * p.length), V.writeUInt16(0), V.writeUInt16(ne), V.writeUInt16(ee), V.writeUInt16(S), V.writeUInt16(fe), W = 0, N = w.length; W < N; W++) s = w[W], V.writeUInt16(s);
          for (V.writeUInt16(0), J = 0, T = O.length; J < T; J++) s = O[J], V.writeUInt16(s);
          for (se = 0, P = u.length; se < P; se++) l = u[se], V.writeUInt16(l);
          for (_e = 0, B = ve.length; _e < B; _e++) U = ve[_e], V.writeUInt16(U);
          for (Se = 0, q = p.length; Se < q; Se++) R = p[Se], V.writeUInt16(R);
          return {
            charMap: r,
            subtable: V.data,
            maxGlyphID: $ + 1
          };
      }
    }, n;
  }(), hh = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "cmap", n.prototype.parse = function(e) {
      var t, r, s;
      for (e.pos = this.offset, this.version = e.readUInt16(), s = e.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= s ? r < s : r > s; r = 0 <= s ? ++r : --r) t = new xu(e, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
      return true;
    }, n.encode = function(e, t) {
      var r, s;
      return t == null && (t = "macroman"), r = xu.encode(e, t), (s = new ri()).writeUInt16(0), s.writeUInt16(1), r.table = s.data.concat(r.subtable), r;
    }, n;
  }(), z5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "hhea", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16();
    }, n;
  }(), H5 = function() {
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
  }(), W5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "post", n.prototype.parse = function(e) {
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
  }(), V5 = function(n, e) {
    this.raw = n, this.length = n.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
  }, G5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "name", n.prototype.parse = function(e) {
      var t, r, s, a, h, l, u, d, g, w, S;
      for (e.pos = this.offset, e.readShort(), t = e.readShort(), l = e.readShort(), r = [], a = 0; 0 <= t ? a < t : a > t; a = 0 <= t ? ++a : --a) r.push({
        platformID: e.readShort(),
        encodingID: e.readShort(),
        languageID: e.readShort(),
        nameID: e.readShort(),
        length: e.readShort(),
        offset: this.offset + l + e.readShort()
      });
      for (u = {}, a = g = 0, w = r.length; g < w; a = ++g) s = r[a], e.pos = s.offset, d = e.readString(s.length), h = new V5(d, s), u[S = s.nameID] == null && (u[S] = []), u[s.nameID].push(h);
      this.strings = u, this.copyright = u[0], this.fontFamily = u[1], this.fontSubfamily = u[2], this.uniqueSubfamily = u[3], this.fontName = u[4], this.version = u[5];
      try {
        this.postscriptName = u[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      } catch {
        this.postscriptName = u[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      }
      return this.trademark = u[7], this.manufacturer = u[8], this.designer = u[9], this.description = u[10], this.vendorUrl = u[11], this.designerUrl = u[12], this.license = u[13], this.licenseUrl = u[14], this.preferredFamily = u[15], this.preferredSubfamily = u[17], this.compatibleFull = u[18], this.sampleText = u[19];
    }, n;
  }(), $5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "maxp", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16();
    }, n;
  }(), K5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "hmtx", n.prototype.parse = function(e) {
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
  }(), dh = [].slice, Y5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "glyf", n.prototype.parse = function() {
      return this.cache = {};
    }, n.prototype.glyphFor = function(e) {
      var t, r, s, a, h, l, u, d, g, w;
      return e in this.cache ? this.cache[e] : (a = this.file.loca, t = this.file.contents, r = a.indexOf(e), (s = a.lengthOf(e)) === 0 ? this.cache[e] = null : (t.pos = this.offset + r, h = (l = new ri(t.read(s))).readShort(), d = l.readShort(), w = l.readShort(), u = l.readShort(), g = l.readShort(), this.cache[e] = h === -1 ? new X5(l, d, w, u, g) : new J5(l, h, d, w, u, g), this.cache[e]));
    }, n.prototype.encode = function(e, t, r) {
      var s, a, h, l, u;
      for (h = [], a = [], l = 0, u = t.length; l < u; l++) s = e[t[l]], a.push(h.length), s && (h = h.concat(s.encode(r)));
      return a.push(h.length), {
        table: h,
        offsets: a
      };
    }, n;
  }(), J5 = function() {
    function n(e, t, r, s, a, h) {
      this.raw = e, this.numberOfContours = t, this.xMin = r, this.yMin = s, this.xMax = a, this.yMax = h, this.compound = false;
    }
    return n.prototype.encode = function() {
      return this.raw.data;
    }, n;
  }(), X5 = function() {
    function n(e, t, r, s, a) {
      var h, l;
      for (this.raw = e, this.xMin = t, this.yMin = r, this.xMax = s, this.yMax = a, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], h = this.raw; l = h.readShort(), this.glyphOffsets.push(h.pos), this.glyphIDs.push(h.readUInt16()), 32 & l; ) h.pos += 1 & l ? 4 : 2, 128 & l ? h.pos += 8 : 64 & l ? h.pos += 4 : 8 & l && (h.pos += 2);
    }
    return n.prototype.encode = function() {
      var e, t, r;
      for (t = new ri(dh.call(this.raw.data)), e = 0, r = this.glyphIDs.length; e < r; ++e) t.pos = this.glyphOffsets[e];
      return t.data;
    }, n;
  }(), Z5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "loca", n.prototype.parse = function(e) {
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
  }(), Q5 = function() {
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
      var r, s, a, h, l, u, d, g, w, S, p, j, R, D, L;
      for (s in r = hh.encode(this.generateCmap(), "unicode"), h = this.glyphsFor(e), p = {
        0: 0
      }, L = r.charMap) p[(u = L[s]).old] = u.new;
      for (j in S = r.maxGlyphID, h) j in p || (p[j] = S++);
      return g = function(Y) {
        var $, U;
        for ($ in U = {}, Y) U[Y[$]] = $;
        return U;
      }(p), w = Object.keys(g).sort(function(Y, $) {
        return Y - $;
      }), R = function() {
        var Y, $, U;
        for (U = [], Y = 0, $ = w.length; Y < $; Y++) l = w[Y], U.push(g[l]);
        return U;
      }(), a = this.font.glyf.encode(h, R, p), d = this.font.loca.encode(a.offsets, R), D = {
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
  qe.API.PDFObject = function() {
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
      if (t?.isString) return "(" + t + ")";
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
  function ep({ lookupId: n, fileKey: e, wrappedKey: t, initialContent: r }) {
    const { toast: s } = Su(), [a, h] = ge.useState(r), [l, u] = ge.useState(false), [d, g] = ge.useState(null), { data: w, refetch: S, isRefetching: p } = hd(n, !!n), j = dd();
    ge.useEffect(() => {
      w?.encryptedClipboardText && e && !l && (async () => {
        try {
          const Y = await ku(w.encryptedClipboardText, e);
          Y !== a && (h(Y), w.updatedAt && g(new Date(w.updatedAt)));
        } catch (Y) {
          console.error("Sync decryption failed", Y);
        }
      })();
    }, [
      w,
      e,
      l,
      a
    ]);
    const R = async (L) => {
      if (e) try {
        const Y = await gd(L, e);
        await j.mutateAsync({
          lookupId: n,
          encryptedClipboardText: Y,
          wrappedKey: t
        }), g(/* @__PURE__ */ new Date());
      } catch {
        s({
          variant: "destructive",
          title: "Failed to save"
        });
      }
    }, D = (L) => {
      if (a) {
        switch (L) {
          case "txt":
            const Y = new Blob([
              a
            ], {
              type: "text/plain"
            }), $ = URL.createObjectURL(Y), U = document.createElement("a");
            U.href = $, U.download = `clipboard-${n}.txt`, U.click(), URL.revokeObjectURL($);
            break;
          case "pdf":
            const le = new qe(), ve = le.splitTextToSize(a, 180);
            le.text(ve, 10, 10), le.save(`clipboard-${n}.pdf`);
            break;
          case "doc":
            const fe = `<html><body><pre>${a}</pre></body></html>`, ee = new Blob([
              fe
            ], {
              type: "application/msword"
            }), H = URL.createObjectURL(ee), ne = document.createElement("a");
            ne.href = H, ne.download = `clipboard-${n}.doc`, ne.click(), URL.revokeObjectURL(H);
            break;
        }
        s({
          title: `Exported as ${L.toUpperCase()}`
        });
      }
    };
    return C.jsxs(Dr.div, {
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
                  children: C.jsx(Pu, {
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
                        (j.isPending || p) && C.jsx(lc, {
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
                C.jsx(Vn, {
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 w-8 p-0 text-zinc-400 hover:text-cyan-400",
                  onClick: () => S(),
                  title: "Force Sync",
                  children: C.jsx(lc, {
                    className: `w-4 h-4 ${p ? "animate-spin" : ""}`
                  })
                }),
                C.jsxs(d2, {
                  children: [
                    C.jsx(p2, {
                      asChild: true,
                      children: C.jsx(Vn, {
                        variant: "ghost",
                        size: "sm",
                        className: "h-8 w-8 p-0 text-zinc-400 hover:text-white",
                        children: C.jsx(Md, {
                          className: "w-4 h-4"
                        })
                      })
                    }),
                    C.jsxs(Cf, {
                      align: "end",
                      className: "bg-zinc-900 border-zinc-800",
                      children: [
                        C.jsxs(Fs, {
                          onClick: () => D("txt"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(rl, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to TXT"
                          ]
                        }),
                        C.jsxs(Fs, {
                          onClick: () => D("pdf"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(Bd, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to PDF"
                          ]
                        }),
                        C.jsxs(Fs, {
                          onClick: () => D("doc"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(rl, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to DOC"
                          ]
                        })
                      ]
                    })
                  ]
                }),
                C.jsx(Vn, {
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 text-zinc-400 hover:text-cyan-400",
                  onClick: async () => {
                    await navigator.clipboard.writeText(a || ""), s({
                      title: "Copied!"
                    });
                  },
                  children: C.jsx(pd, {
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
            C.jsx(md, {
              value: a || "",
              onChange: (L) => {
                h(L.target.value), u(true);
              },
              onBlur: () => {
                u(false), a && R(a);
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
  const Qo = "vaultbridge_recent", el = "vaultbridge-recent-vault-link", tp = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{3}$/, ph = (n) => n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n, np = (n) => {
    const e = ph(n);
    return e === "/access" || e.startsWith("/download/") || e.startsWith("/v/");
  }, rp = () => C.jsx("svg", {
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
  function ip({ expiresAt: n, isMobile: e }) {
    const [t, r] = ge.useState(null);
    return ge.useEffect(() => {
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
  function ap() {
    const n = Fd(), [e, t] = ge.useState(""), [r, s] = ge.useState("input"), [a, h] = ge.useState(""), [l, u] = ge.useState([]), [d, g] = ge.useState(null), [w, S] = ge.useState(null), [p, j] = ge.useState(false), [R, D] = ge.useState(null), [L, Y] = ge.useState(""), [$, U] = ge.useState(null), [le, ve] = ge.useState(null), [fe, ee] = ge.useState(/* @__PURE__ */ new Map()), H = r === "ready" && e.length === 6 ? e.slice(0, 3) : "", [, ne] = bd(), { toast: _ } = Su(), { play: O } = vd(), G = wd(), V = yd();
    xd();
    const ce = Nd(), ue = (P) => {
      if (!P) return null;
      const B = P.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (B.length === 6) return B;
      try {
        const q = P.startsWith("http") ? new URL(P) : new URL(P, window.location.origin), W = q.searchParams.get("code");
        if (W) {
          const se = W.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
          if (se.length === 6) return se;
        }
        const J = q.hash.startsWith("#") ? q.hash.slice(1) : q.hash, Q = new URLSearchParams(J).get("code");
        if (Q) {
          const se = Q.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
          if (se.length === 6) return se;
        }
      } catch {
        return null;
      }
      return null;
    }, be = (P) => {
      const B = P.trim();
      if (!B) return null;
      if (tp.test(B)) return `/access?code=${B.replace(/[^A-Za-z0-9]/g, "").toUpperCase()}`;
      const q = [
        B
      ];
      /^(access|download\/|v\/)/i.test(B) && q.push(`/${B}`), /^(vaultbridge\.org|www\.vaultbridge\.org)/i.test(B) && q.push(`https://${B}`);
      for (const W of q) try {
        const J = W.startsWith("/") ? new URL(W, window.location.origin) : new URL(W);
        if (np(J.pathname)) return J.origin === window.location.origin ? `${J.pathname}${J.search}${J.hash}` : J.toString();
      } catch {
        continue;
      }
      return null;
    }, oe = (P) => {
      const B = be(P);
      if (!B) {
        U("Paste a valid vault link or 6-character access code.");
        return;
      }
      U(null);
      const q = P.trim();
      q && (localStorage.setItem(Qo, q), localStorage.setItem(el, q), ve(q));
      const W = ue(B);
      if (B.startsWith("/access") && W) {
        t(W);
        return;
      }
      if (B.startsWith("http://") || B.startsWith("https://")) {
        const J = new URL(B);
        if (J.origin === window.location.origin) {
          const Q = `${J.pathname}${J.search}${J.hash}`, se = ue(Q);
          if (ph(J.pathname) === "/access" && se) {
            t(se);
            return;
          }
          ne(Q);
        } else window.location.href = B;
        return;
      }
      ne(B);
    }, ie = async () => {
      if (!navigator.clipboard?.readText) {
        U("Clipboard access is not available in this browser.");
        return;
      }
      try {
        const P = await navigator.clipboard.readText();
        Y(P.trim()), U(null);
      } catch {
        U("Clipboard read is blocked. Paste manually.");
      }
    };
    ge.useEffect(() => {
      const P = new URLSearchParams(window.location.search).get("code"), B = new URLSearchParams(window.location.hash.replace("#", "")).get("code"), q = localStorage.getItem(Qo) || localStorage.getItem(el), W = ue(P) || ue(B) || ue(q);
      W && t(W), q && ve(q);
    }, []);
    const Le = async () => {
      const P = e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (P.length !== 6) {
        _({
          variant: "destructive",
          title: "Invalid Code",
          description: "Please enter a 6-character code."
        });
        return;
      }
      const B = `/access?code=${P}`;
      localStorage.setItem(Qo, B), localStorage.setItem(el, B), ve(B), s("fetching"), h("Looking up vault...");
      try {
        const q = P.slice(0, 3), W = P.slice(3, 6), J = await G.mutateAsync(q);
        g(J);
        const Q = /* @__PURE__ */ new Map();
        for (const je of J.files) Q.set(je.fileId, {
          fileId: je.fileId,
          maxDownloads: je.maxDownloads,
          downloadCount: je.downloadCount,
          remainingDownloads: je.remainingDownloads,
          isExhausted: je.remainingDownloads <= 0
        });
        ee(Q), s("decrypting"), h("Unwrapping encryption key with PIN...");
        const se = await Cd(J.wrappedKey, W);
        S(se), h("Decrypting file metadata...");
        const _e = await Id(J.encryptedMetadata, se);
        if (u(_e), J.encryptedClipboardText) {
          h("Decrypting clipboard content...");
          try {
            const je = await ku(J.encryptedClipboardText, se);
            D(je);
          } catch (je) {
            console.error("Failed to decrypt clipboard:", je);
          }
        }
        s("ready");
        const Se = _e.length > 0, Ce = J.encryptedClipboardText;
        h(Se ? "Files ready for download!" : Ce ? "Clipboard content ready!" : "Vault unlocked!"), O("unlock"), _({
          title: "Vault Unlocked!",
          description: Se ? `${_e.length} file(s) ready for download.` : Ce ? "Secure clipboard content available." : "Vault accessed successfully."
        });
      } catch (q) {
        O("error"), s("input"), console.error("Access error:", q);
        let W = "Invalid or expired code. Please check and try again.";
        q instanceof Error && (q.message.includes("unwrap") ? W = "Invalid PIN. The second half of your code is incorrect." : q.message.includes("expired") && (W = "This vault has expired or reached its download limit.")), _({
          variant: "destructive",
          title: "Access Denied",
          description: W
        });
      }
    }, xe = async (P) => {
      if (!(!d || !w)) try {
        h(`Downloading ${P.name}...`);
        const B = d.files.find((se) => se.fileId === P.fileId);
        if (!B) throw new Error("File metadata not found in vault");
        const q = [];
        for (let se = 0; se < B.chunkCount; se++) {
          h(`Decrypting ${P.name} [${se + 1}/${B.chunkCount}]...`);
          const { downloadUrl: _e } = await V.mutateAsync({
            vaultId: d.id,
            fileId: P.fileId,
            chunkIndex: se
          });
          let Se = null;
          for (let Je = 0; Je < 3; Je++) try {
            if (Se = await fetch(_e), Se.ok) break;
            throw Se.status >= 400 && Se.status < 500 ? new Error(`Server returned ${Se.status}`) : new Error(`Server error ${Se.status}`);
          } catch {
            Je < 2 && await new Promise((Ne) => setTimeout(Ne, 500 * Math.pow(2, Je)));
          }
          if (!Se || !Se.ok) throw new Error("Failed to download chunk");
          const Ce = await Se.arrayBuffer();
          if (Ce.byteLength < 12) throw new Error("Chunk too small");
          const je = new Uint8Array(Ce, 0, 12), I = new Uint8Array(Ce, 12), Pe = await jd(I, je, w);
          if (P.isCompressed) {
            const Je = await Es(() => import("./index.web-Bqyr3zbv.js"), []);
            await Je.default;
            const ze = new Uint8Array(Pe), Ne = Je.decompress(ze);
            q.push(Ne.buffer);
          } else q.push(Pe);
        }
        h(`Assembling ${P.name}...`);
        const W = new Blob(q, {
          type: P.type || "application/octet-stream"
        }), J = URL.createObjectURL(W), Q = document.createElement("a");
        return Q.href = J, Q.download = P.name, document.body.appendChild(Q), Q.click(), document.body.removeChild(Q), URL.revokeObjectURL(J), true;
      } catch (B) {
        throw console.error("Memory download failed:", B), B;
      }
    }, N = async (P, B = false) => {
      if (!(!d || !w)) try {
        let q = false;
        const W = n ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
        if ("serviceWorker" in navigator && navigator.serviceWorker.controller && P.size > W) {
          console.log("Attempting Streamed Download for " + P.name), h(`Preparing stream for ${P.name}...`);
          try {
            const J = d.files.find((se) => se.fileId === P.fileId);
            if (!J) throw new Error("File not found");
            const Q = [];
            for (let se = 0; se < J.chunkCount; se++) {
              const { downloadUrl: _e } = await V.mutateAsync({
                vaultId: d.id,
                fileId: P.fileId,
                chunkIndex: se
              });
              Q.push({
                downloadUrl: _e,
                index: se
              });
            }
            await Rd(P.fileId, w, Q, P), q = true, r === "ready" && _({
              title: "Download Started",
              description: `Streaming ${P.name}...`
            });
          } catch (J) {
            console.warn("Stream download failed, falling back to memory:", J), q = false;
          }
        }
        if (q || (console.log("Using Memory Download for " + P.name), await xe(P)), r === "ready" && !q && _({
          title: "File Downloaded",
          description: `${P.name} saved.`
        }), !B && r === "ready") try {
          const J = await ce.mutateAsync({
            vaultId: d.id,
            fileId: P.fileId
          });
          if (J.files && J.files.length > 0) {
            ee((se) => {
              const _e = new Map(se);
              for (const Se of J.files) _e.set(Se.fileId, {
                fileId: Se.fileId,
                maxDownloads: Se.maxDownloads,
                downloadCount: Se.downloadCount,
                remainingDownloads: Se.remainingDownloads,
                isExhausted: Se.isExhausted
              });
              return _e;
            });
            const Q = J.files.find((se) => se.fileId === P.fileId);
            Q && Q.remainingDownloads > 0 && _({
              title: "Download Tracked",
              description: `${Q.remainingDownloads} download(s) remaining for ${P.name}.`
            });
          }
          J.vaultExhausted && (_({
            title: "Vault Depleted",
            description: "All files have reached their download limit. Initiating self-destruct...",
            variant: "destructive"
          }), setTimeout(() => j(true), 1500));
        } catch (J) {
          console.error("File download tracking failed", J);
        }
      } catch (q) {
        if (console.error("Download failed", q), _({
          variant: "destructive",
          title: "Download Failed",
          description: q instanceof Error ? q.message : "Failed to download file"
        }), r === "downloading") throw q;
      }
    }, T = async () => {
      if (!(!d || !w || l.length === 0)) {
        s("downloading");
        try {
          const P = l.filter((J) => !fe.get(J.fileId)?.isExhausted);
          if (P.length === 0) {
            _({
              variant: "destructive",
              title: "No Downloads Available",
              description: "All files have reached their download limit."
            }), s("ready");
            return;
          }
          let B = 0;
          for (const J of P) h(`Downloading ${J.name} (${B + 1}/${P.length})...`), await N(J, true), B++;
          const q = P.map((J) => J.fileId), W = await ce.mutateAsync({
            vaultId: d.id,
            fileId: q[0],
            fileIds: q
          });
          W.files && W.files.length > 0 && ee((J) => {
            const Q = new Map(J);
            for (const se of W.files) Q.set(se.fileId, {
              fileId: se.fileId,
              maxDownloads: se.maxDownloads,
              downloadCount: se.downloadCount,
              remainingDownloads: se.remainingDownloads,
              isExhausted: se.isExhausted
            });
            return Q;
          }), s("ready"), h("All files downloaded!"), _({
            title: "Download Complete!",
            description: `${B} file(s) downloaded successfully.`
          }), W.vaultExhausted && (_({
            title: "Vault Depleted",
            description: "All files have reached their download limit. Initiating self-destruct...",
            variant: "destructive"
          }), setTimeout(() => j(true), 1500));
        } catch (P) {
          s("ready"), console.error("Download error:", P), _({
            variant: "destructive",
            title: "Download Failed",
            description: P instanceof Error ? P.message : "An error occurred during download."
          });
        }
      }
    };
    return C.jsxs("div", {
      className: `min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 overflow-hidden transition-colors duration-1000 ${p ? "bg-black" : ""}`,
      children: [
        !n && C.jsx(rp, {}),
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
                      children: C.jsx(Vi, {
                        href: "/",
                        children: C.jsxs(Dr.div, {
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
                              children: C.jsx(cc, {
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
                        C.jsx(Vi, {
                          href: "/clipboard",
                          children: C.jsxs(Vn, {
                            variant: "outline",
                            size: "sm",
                            className: "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2 h-9 sm:h-10 px-3",
                            children: [
                              C.jsx(Pu, {
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
                        C.jsx(Vi, {
                          href: "/",
                          children: C.jsxs(Vn, {
                            variant: "ghost",
                            size: "sm",
                            className: "gap-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors h-9 sm:h-10",
                            children: [
                              C.jsx(_d, {
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
            C.jsxs("main", {
              className: "flex-1 container max-w-6xl mx-auto px-4 py-6 md:py-12 flex flex-col justify-center",
              children: [
                C.jsx(Ad, {
                  mode: "wait",
                  children: p ? C.jsxs(Dr.div, {
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
                        children: C.jsx(uc, {
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
                      C.jsx(Vi, {
                        href: "/",
                        children: C.jsx(Vn, {
                          variant: "outline",
                          className: "border-zinc-800 text-zinc-400 hover:text-white",
                          children: "Return Home"
                        })
                      })
                    ]
                  }, "burned") : C.jsxs(Dr.div, {
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
                                  C.jsx(Ld, {
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
                            className: "mb-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4",
                            children: [
                              C.jsx("p", {
                                className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
                                children: "Paste Vault Link"
                              }),
                              C.jsxs("div", {
                                className: "mt-3 flex flex-col gap-2 sm:flex-row",
                                children: [
                                  C.jsx(fc, {
                                    type: "text",
                                    value: L,
                                    onChange: (P) => {
                                      Y(P.target.value), $ && U(null);
                                    },
                                    placeholder: "https://vaultbridge.org/v/... or ABC123",
                                    className: "h-10 border-zinc-700 bg-zinc-950/70 text-sm text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-cyan-500/40"
                                  }),
                                  C.jsx(Vn, {
                                    type: "button",
                                    variant: "outline",
                                    className: "h-10 border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800",
                                    onClick: ie,
                                    children: "Paste"
                                  }),
                                  C.jsx(Vn, {
                                    type: "button",
                                    className: "h-10 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:from-cyan-500 hover:to-emerald-500",
                                    onClick: () => oe(L),
                                    children: "Open Vault"
                                  })
                                ]
                              }),
                              C.jsxs("div", {
                                className: "mt-2 flex flex-wrap items-center gap-2",
                                children: [
                                  le && C.jsx(Vn, {
                                    type: "button",
                                    variant: "ghost",
                                    className: "h-8 px-2 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200",
                                    onClick: () => oe(le),
                                    children: "Open recent vault"
                                  }),
                                  $ && C.jsx("p", {
                                    className: "text-xs text-rose-400",
                                    children: $
                                  })
                                ]
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
                                            C.jsx(fc, {
                                              type: "search",
                                              inputMode: "numeric",
                                              pattern: "[0-9]*",
                                              value: e,
                                              onChange: (P) => {
                                                const B = P.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
                                                t(B);
                                              },
                                              onKeyDown: (P) => {
                                                P.key === "Enter" && e.length === 6 && Le();
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
                                                  }).map((P, B) => {
                                                    const q = B, W = e[q] || "", J = e.length === q, Q = !!W;
                                                    return C.jsx(Dr.div, {
                                                      initial: false,
                                                      animate: {
                                                        scale: J && !n ? 1.05 : 1,
                                                        borderColor: J ? "rgb(6, 182, 212)" : Q ? "rgba(6, 182, 212, 0.3)" : "rgba(63, 63, 70, 1)",
                                                        backgroundColor: Q ? "rgba(6, 182, 212, 0.1)" : "rgba(24, 24, 27, 1)"
                                                      },
                                                      className: `
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${J ? "shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/20" : ""}
                                                                                `,
                                                      children: W ? C.jsx("span", {
                                                        className: "text-cyan-400",
                                                        children: W
                                                      }) : J && C.jsx("div", {
                                                        className: "w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"
                                                      })
                                                    }, q);
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
                                                  }).map((P, B) => {
                                                    const q = B + 3, W = e[q] || "", J = e.length === q, Q = !!W;
                                                    return C.jsx(Dr.div, {
                                                      initial: false,
                                                      animate: {
                                                        scale: J && !n ? 1.05 : 1,
                                                        borderColor: J ? "rgb(16, 185, 129)" : Q ? "rgba(16, 185, 129, 0.3)" : "rgba(63, 63, 70, 1)",
                                                        backgroundColor: Q ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
                                                      },
                                                      className: `
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${J ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/20" : ""}
                                                                                `,
                                                      children: W ? C.jsx("span", {
                                                        className: "text-emerald-400",
                                                        children: W
                                                      }) : J && C.jsx("div", {
                                                        className: "w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"
                                                      })
                                                    }, q);
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
                                    C.jsxs(Vn, {
                                      onClick: Le,
                                      disabled: e.length !== 6,
                                      className: `w-full h-12 sm:h-14 font-bold uppercase tracking-wider text-sm sm:text-base rounded-xl transition-all duration-300 ${e.length === 6 ? "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40" : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`,
                                      children: [
                                        C.jsx(Od, {
                                          className: `w-4 h-4 sm:w-5 sm:h-5 mr-3 ${e.length === 6 ? "opacity-100" : "opacity-50"}`
                                        }),
                                        e.length === 6 ? "Unlock Vault" : "Enter Code"
                                      ]
                                    }),
                                    C.jsx("div", {
                                      className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-zinc-800",
                                      children: [
                                        {
                                          icon: cc,
                                          label: "AES-256"
                                        },
                                        {
                                          icon: Sd,
                                          label: "Zero-Knowledge"
                                        },
                                        {
                                          icon: uc,
                                          label: "Auto-Destruct"
                                        }
                                      ].map((P, B) => C.jsxs("div", {
                                        className: "flex items-center gap-1.5 sm:gap-2 text-zinc-500",
                                        children: [
                                          C.jsx(P.icon, {
                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                          }),
                                          C.jsx("span", {
                                            className: "text-[10px] sm:text-xs",
                                            children: P.label
                                          })
                                        ]
                                      }, B))
                                    })
                                  ]
                                })
                              })
                            ]
                          }),
                          C.jsx(Dr.div, {
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
                                C.jsx(Dd, {
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
                                      children: C.jsx(kd, {
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
                                      C.jsx(Dr.div, {
                                        initial: {
                                          scale: 0
                                        },
                                        animate: {
                                          scale: 1
                                        },
                                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center",
                                        children: C.jsx(hc, {
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
                                            children: C.jsx(Pd, {
                                              className: "w-4 h-4"
                                            })
                                          }),
                                          C.jsx("span", {
                                            className: "text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline",
                                            children: "Expires"
                                          })
                                        ]
                                      }),
                                      C.jsx(ip, {
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
                                          const P = Array.from(fe.values()).reduce((J, Q) => J + Q.remainingDownloads, 0), B = Array.from(fe.values()).reduce((J, Q) => J + Q.maxDownloads, 0), q = fe.size > 0 ? P : d.maxDownloads - d.downloadCount, W = fe.size > 0 ? B : d.maxDownloads;
                                          return C.jsxs(C.Fragment, {
                                            children: [
                                              q,
                                              " ",
                                              C.jsx("span", {
                                                className: "text-zinc-600",
                                                children: "/"
                                              }),
                                              " ",
                                              W
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
                                            children: C.jsx(Td, {
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
                                          (l.reduce((P, B) => P + B.size, 0) / (1024 * 1024)).toFixed(2),
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
                                          children: l.length + (R ? 1 : 0)
                                        }),
                                        C.jsx("h3", {
                                          className: "text-sm font-bold text-zinc-300 uppercase tracking-widest",
                                          children: l.length > 0 ? "Available Content" : "Secure Clipboard"
                                        })
                                      ]
                                    }),
                                    (R !== null || !!d.encryptedClipboardText) && C.jsx("div", {
                                      className: "mb-6",
                                      children: C.jsx(ep, {
                                        lookupId: H,
                                        fileKey: w,
                                        wrappedKey: d.wrappedKey,
                                        initialContent: R
                                      })
                                    }),
                                    l.length > 0 && C.jsxs(C.Fragment, {
                                      children: [
                                        C.jsx("div", {
                                          className: "space-y-3 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar",
                                          children: l.map((P, B) => {
                                            const q = fe.get(P.fileId), W = q?.remainingDownloads ?? d?.maxDownloads ?? 1, J = q?.maxDownloads ?? d?.maxDownloads ?? 1, Q = q?.isExhausted ?? false;
                                            return C.jsxs(Dr.div, {
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
                                              className: `group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/50 border rounded-xl hover:bg-zinc-900/80 transition-all duration-300 gap-4 sm:gap-0 ${Q ? "border-red-500/30 opacity-60" : "border-zinc-800 hover:border-zinc-700"}`,
                                              children: [
                                                C.jsxs("div", {
                                                  className: "flex items-center gap-4 min-w-0",
                                                  children: [
                                                    C.jsx("div", {
                                                      className: `w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border transition-colors ${Q ? "border-red-500/30" : "border-zinc-700 group-hover:border-cyan-500/50"}`,
                                                      children: C.jsx(rl, {
                                                        className: `w-5 h-5 sm:w-6 sm:h-6 transition-colors ${Q ? "text-red-400" : "text-zinc-400 group-hover:text-cyan-400"}`
                                                      })
                                                    }),
                                                    C.jsxs("div", {
                                                      className: "min-w-0 flex-1",
                                                      children: [
                                                        C.jsx("p", {
                                                          className: "text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs",
                                                          children: P.name
                                                        }),
                                                        C.jsxs("div", {
                                                          className: "flex items-center gap-3 mt-1",
                                                          children: [
                                                            C.jsxs("span", {
                                                              className: "text-xs text-zinc-500 font-mono",
                                                              children: [
                                                                (P.size / 1024 / 1024).toFixed(2),
                                                                " MB"
                                                              ]
                                                            }),
                                                            C.jsx("span", {
                                                              className: "w-1 h-1 rounded-full bg-zinc-700"
                                                            }),
                                                            C.jsx("span", {
                                                              className: "text-[10px] text-zinc-500 uppercase font-bold",
                                                              children: P.type?.split("/")[1] || "FILE"
                                                            }),
                                                            C.jsx("span", {
                                                              className: "w-1 h-1 rounded-full bg-zinc-700"
                                                            }),
                                                            C.jsxs("span", {
                                                              className: `text-[10px] font-bold uppercase ${Q ? "text-red-400" : W <= 1 ? "text-amber-400" : "text-cyan-400"}`,
                                                              children: [
                                                                W,
                                                                "/",
                                                                J,
                                                                " DL"
                                                              ]
                                                            })
                                                          ]
                                                        })
                                                      ]
                                                    })
                                                  ]
                                                }),
                                                C.jsxs(Vn, {
                                                  size: "sm",
                                                  variant: "outline",
                                                  disabled: Q,
                                                  className: `w-full sm:w-auto shrink-0 transition-colors h-10 sm:h-9 ${Q ? "bg-transparent border-red-500/30 text-red-400 cursor-not-allowed" : "bg-transparent border-zinc-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400"}`,
                                                  onClick: (se) => {
                                                    se.stopPropagation(), se.preventDefault(), Q || N(P);
                                                  },
                                                  children: [
                                                    C.jsx(jo, {
                                                      className: "w-4 h-4 mr-2"
                                                    }),
                                                    Q ? "Limit Reached" : "Download"
                                                  ]
                                                })
                                              ]
                                            }, P.fileId);
                                          })
                                        }),
                                        C.jsx(Vn, {
                                          size: "lg",
                                          className: `w-full font-bold h-12 transition-all ${Array.from(fe.values()).every((P) => P.isExhausted) && fe.size > 0 ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-red-500/20" : "bg-cyan-600 hover:bg-cyan-500 text-white"}`,
                                          onClick: T,
                                          disabled: Array.from(fe.values()).every((P) => P.isExhausted) && fe.size > 0,
                                          children: Array.from(fe.values()).every((P) => P.isExhausted) && fe.size > 0 ? "All Limits Reached" : C.jsxs(C.Fragment, {
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
                                            C.jsx(Vi, {
                                              href: "/terms",
                                              className: "underline hover:text-primary transition-colors",
                                              children: "Terms of Service"
                                            }),
                                            " & ",
                                            C.jsx(Vi, {
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
                }),
                C.jsx("div", {
                  className: "mt-12 text-center pb-8 opacity-70 hover:opacity-100 transition-opacity",
                  children: C.jsxs("div", {
                    className: "inline-flex flex-col items-center",
                    children: [
                      C.jsxs("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                          C.jsx(hc, {
                            className: "w-4 h-4 text-emerald-500"
                          }),
                          C.jsx("p", {
                            className: "text-sm font-medium text-zinc-300",
                            children: "Securely shared via VaultBridge"
                          })
                        ]
                      }),
                      C.jsx("a", {
                        href: "/",
                        className: "text-xs text-cyan-400 hover:underline hover:text-cyan-300 transition-colors font-mono",
                        children: "Free encrypted file sharing"
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  yp = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ap
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Lt as _,
  __tla,
  yp as a
};
