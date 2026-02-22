const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es-jGFGYOkM.js","assets/index-B5eeqRPK.js","assets/index-BaVyBTsb.css","assets/input-C-pTQCG0.js","assets/chevron-right-DzU99w6m.js","assets/triangle-alert-bbypd66C.js","assets/circle-D_JJW63L.js","assets/browser-gjyt7kQ7.js","assets/RecentActivity-DFToPhMS.js","assets/activity-ZfMOsVM4.js","assets/chevron-up-2c_phMUQ.js","assets/zap-CO9dCU-d.js","assets/flame-l2a2LcpR.js","assets/timer-CEQm-Smt.js","assets/upload-cE3y_YaH.js","assets/external-link-BLYwroqP.js","assets/file-text-5AMAkaqP.js","assets/mail-CdmXftMJ.js","assets/share-2-CvDakMJ-.js","assets/downloadStream-DsUNh4ar.js","assets/sparkles-Ch7jgGEg.js","assets/key-round-Bp5U_d96.js","assets/shield-check-DgUGgLfn.js"])))=>i.map(i=>d[i]);
import { c as Xh, F as dl, H as Nu, r as ge, I as tl, j as C, P as ai, J as wt, K as ra, M as _u, N as Au, O as pl, Q as ml, T as Zh, U as Qh, V as Lu, W as Gs, Y as ed, Z as td, _ as nd, $ as rd, a0 as id, a1 as ad, a2 as sd, a3 as od, a4 as ld, a5 as Br, a6 as Fs, f as Su, a7 as cd, a8 as ud, m as Dr, R as lc, B as Vn, a9 as fd, aa as hd, ab as dd, ac as pd, a as md, u as gd, ad as bd, ae as vd, af as wd, ag as yd, ah as xd, ai as Nd, aj as _d, ak as Ad, L as Gi, d as cc, k as Ld, A as Sd, S as kd, e as Pd, l as Cd, al as Id, __tla as __tla_0 } from "./index-B5eeqRPK.js";
import { I as uc } from "./input-C-pTQCG0.js";
import { C as jd } from "./chevron-right-DzU99w6m.js";
import { C as Ed, T as Fd } from "./triangle-alert-bbypd66C.js";
import { C as Md } from "./circle-D_JJW63L.js";
import { a as nl } from "./browser-gjyt7kQ7.js";
import { C as ku, u as Rd, R as Od } from "./RecentActivity-DFToPhMS.js";
import { S as Dd } from "./share-2-CvDakMJ-.js";
import { F as rl } from "./file-text-5AMAkaqP.js";
import { i as Td } from "./downloadStream-DsUNh4ar.js";
import { S as Bd } from "./sparkles-Ch7jgGEg.js";
import { K as qd } from "./key-round-Bp5U_d96.js";
import { Z as fc, H as Ud } from "./zap-CO9dCU-d.js";
import { S as hc } from "./shield-check-DgUGgLfn.js";
import { D as jo } from "./external-link-BLYwroqP.js";
let Lt, Lp;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const zd = Xh("FileType", [
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
  var Eo = "rovingFocusGroup.onEntryFocus", Hd = {
    bubbles: false,
    cancelable: true
  }, Ba = "RovingFocusGroup", [il, Pu, Wd] = Nu(Ba), [Vd, Cu] = dl(Ba, [
    Wd
  ]), [Gd, $d] = Vd(Ba), Iu = ge.forwardRef((n, e) => C.jsx(il.Provider, {
    scope: n.__scopeRovingFocusGroup,
    children: C.jsx(il.Slot, {
      scope: n.__scopeRovingFocusGroup,
      children: C.jsx(Kd, {
        ...n,
        ref: e
      })
    })
  }));
  Iu.displayName = Ba;
  var Kd = ge.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, orientation: r, loop: s = false, dir: a, currentTabStopId: f, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: u, onEntryFocus: d, preventScrollOnEntryFocus: g = false, ...w } = n, L = ge.useRef(null), p = ra(e, L), j = _u(a), [E, O] = Au({
      prop: f,
      defaultProp: l ?? null,
      onChange: u,
      caller: Ba
    }), [S, $] = ge.useState(false), V = pl(d), B = Pu(t), ue = ge.useRef(false), [Ne, fe] = ge.useState(0);
    return ge.useEffect(() => {
      const ee = L.current;
      if (ee) return ee.addEventListener(Eo, V), () => ee.removeEventListener(Eo, V);
    }, [
      V
    ]), C.jsx(Gd, {
      scope: t,
      orientation: r,
      dir: j,
      loop: s,
      currentTabStopId: E,
      onItemFocus: ge.useCallback((ee) => O(ee), [
        O
      ]),
      onItemShiftTab: ge.useCallback(() => $(true), []),
      onFocusableItemAdd: ge.useCallback(() => fe((ee) => ee + 1), []),
      onFocusableItemRemove: ge.useCallback(() => fe((ee) => ee - 1), []),
      children: C.jsx(ai.div, {
        tabIndex: S || Ne === 0 ? -1 : 0,
        "data-orientation": r,
        ...w,
        ref: p,
        style: {
          outline: "none",
          ...n.style
        },
        onMouseDown: wt(n.onMouseDown, () => {
          ue.current = true;
        }),
        onFocus: wt(n.onFocus, (ee) => {
          const z = !ue.current;
          if (ee.target === ee.currentTarget && z && !S) {
            const ie = new CustomEvent(Eo, Hd);
            if (ee.currentTarget.dispatchEvent(ie), !ie.defaultPrevented) {
              const A = B().filter((he) => he.focusable), I = A.find((he) => he.active), H = A.find((he) => he.id === E), ce = [
                I,
                H,
                ...A
              ].filter(Boolean).map((he) => he.ref.current);
              Fu(ce, g);
            }
          }
          ue.current = false;
        }),
        onBlur: wt(n.onBlur, () => $(false))
      })
    });
  }), ju = "RovingFocusGroupItem", Eu = ge.forwardRef((n, e) => {
    const { __scopeRovingFocusGroup: t, focusable: r = true, active: s = false, tabStopId: a, children: f, ...l } = n, u = tl(), d = a || u, g = $d(ju, t), w = g.currentTabStopId === d, L = Pu(t), { onFocusableItemAdd: p, onFocusableItemRemove: j, currentTabStopId: E } = g;
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
      children: C.jsx(ai.span, {
        tabIndex: w ? 0 : -1,
        "data-orientation": g.orientation,
        ...l,
        ref: e,
        onMouseDown: wt(n.onMouseDown, (O) => {
          r ? g.onItemFocus(d) : O.preventDefault();
        }),
        onFocus: wt(n.onFocus, () => g.onItemFocus(d)),
        onKeyDown: wt(n.onKeyDown, (O) => {
          if (O.key === "Tab" && O.shiftKey) {
            g.onItemShiftTab();
            return;
          }
          if (O.target !== O.currentTarget) return;
          const S = Xd(O, g.orientation, g.dir);
          if (S !== void 0) {
            if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
            O.preventDefault();
            let V = L().filter((B) => B.focusable).map((B) => B.ref.current);
            if (S === "last") V.reverse();
            else if (S === "prev" || S === "next") {
              S === "prev" && V.reverse();
              const B = V.indexOf(O.currentTarget);
              V = g.loop ? Zd(V, B + 1) : V.slice(B + 1);
            }
            setTimeout(() => Fu(V));
          }
        }),
        children: typeof f == "function" ? f({
          isCurrentTabStop: w,
          hasTabStop: E != null
        }) : f
      })
    });
  });
  Eu.displayName = ju;
  var Yd = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function Jd(n, e) {
    return e !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
  }
  function Xd(n, e, t) {
    const r = Jd(n.key, t);
    if (!(e === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(r)) && !(e === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(r))) return Yd[r];
  }
  function Fu(n, e = false) {
    const t = document.activeElement;
    for (const r of n) if (r === t || (r.focus({
      preventScroll: e
    }), document.activeElement !== t)) return;
  }
  function Zd(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  var Qd = Iu, e1 = Eu;
  function t1(n) {
    const e = n1(n), t = ge.forwardRef((r, s) => {
      const { children: a, ...f } = r, l = ge.Children.toArray(a), u = l.find(i1);
      if (u) {
        const d = u.props.children, g = l.map((w) => w === u ? ge.Children.count(d) > 1 ? ge.Children.only(null) : ge.isValidElement(d) ? d.props.children : null : w);
        return C.jsx(e, {
          ...f,
          ref: s,
          children: ge.isValidElement(d) ? ge.cloneElement(d, void 0, g) : null
        });
      }
      return C.jsx(e, {
        ...f,
        ref: s,
        children: a
      });
    });
    return t.displayName = `${n}.Slot`, t;
  }
  function n1(n) {
    const e = ge.forwardRef((t, r) => {
      const { children: s, ...a } = t;
      if (ge.isValidElement(s)) {
        const f = s1(s), l = a1(a, s.props);
        return s.type !== ge.Fragment && (l.ref = r ? ml(r, f) : f), ge.cloneElement(s, l);
      }
      return ge.Children.count(s) > 1 ? ge.Children.only(null) : null;
    });
    return e.displayName = `${n}.SlotClone`, e;
  }
  var r1 = Symbol("radix.slottable");
  function i1(n) {
    return ge.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === r1;
  }
  function a1(n, e) {
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
  function s1(n) {
    let e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning;
    return t ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref);
  }
  var al = [
    "Enter",
    " "
  ], o1 = [
    "ArrowDown",
    "PageUp",
    "Home"
  ], Mu = [
    "ArrowUp",
    "PageDown",
    "End"
  ], l1 = [
    ...o1,
    ...Mu
  ], c1 = {
    ltr: [
      ...al,
      "ArrowRight"
    ],
    rtl: [
      ...al,
      "ArrowLeft"
    ]
  }, u1 = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  }, qa = "Menu", [Ra, f1, h1] = Nu(qa), [Ci, Ru] = dl(qa, [
    h1,
    Lu,
    Cu
  ]), $s = Lu(), Ou = Cu(), [d1, Ii] = Ci(qa), [p1, Ua] = Ci(qa), Du = (n) => {
    const { __scopeMenu: e, open: t = false, children: r, dir: s, onOpenChange: a, modal: f = true } = n, l = $s(e), [u, d] = ge.useState(null), g = ge.useRef(false), w = pl(a), L = _u(s);
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
    }, []), C.jsx(Zh, {
      ...l,
      children: C.jsx(d1, {
        scope: e,
        open: t,
        onOpenChange: w,
        content: u,
        onContentChange: d,
        children: C.jsx(p1, {
          scope: e,
          onClose: ge.useCallback(() => w(false), [
            w
          ]),
          isUsingKeyboardRef: g,
          dir: L,
          modal: f,
          children: r
        })
      })
    });
  };
  Du.displayName = qa;
  var m1 = "MenuAnchor", gl = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, s = $s(t);
    return C.jsx(Qh, {
      ...s,
      ...r,
      ref: e
    });
  });
  gl.displayName = m1;
  var bl = "MenuPortal", [g1, Tu] = Ci(bl, {
    forceMount: void 0
  }), Bu = (n) => {
    const { __scopeMenu: e, forceMount: t, children: r, container: s } = n, a = Ii(bl, e);
    return C.jsx(g1, {
      scope: e,
      forceMount: t,
      children: C.jsx(Gs, {
        present: t || a.open,
        children: C.jsx(ed, {
          asChild: true,
          container: s,
          children: r
        })
      })
    });
  };
  Bu.displayName = bl;
  var Gn = "MenuContent", [b1, vl] = Ci(Gn), qu = ge.forwardRef((n, e) => {
    const t = Tu(Gn, n.__scopeMenu), { forceMount: r = t.forceMount, ...s } = n, a = Ii(Gn, n.__scopeMenu), f = Ua(Gn, n.__scopeMenu);
    return C.jsx(Ra.Provider, {
      scope: n.__scopeMenu,
      children: C.jsx(Gs, {
        present: r || a.open,
        children: C.jsx(Ra.Slot, {
          scope: n.__scopeMenu,
          children: f.modal ? C.jsx(v1, {
            ...s,
            ref: e
          }) : C.jsx(w1, {
            ...s,
            ref: e
          })
        })
      })
    });
  }), v1 = ge.forwardRef((n, e) => {
    const t = Ii(Gn, n.__scopeMenu), r = ge.useRef(null), s = ra(e, r);
    return ge.useEffect(() => {
      const a = r.current;
      if (a) return td(a);
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
  }), w1 = ge.forwardRef((n, e) => {
    const t = Ii(Gn, n.__scopeMenu);
    return C.jsx(wl, {
      ...n,
      ref: e,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => t.onOpenChange(false)
    });
  }), y1 = t1("MenuContent.ScrollLock"), wl = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, loop: r = false, trapFocus: s, onOpenAutoFocus: a, onCloseAutoFocus: f, disableOutsidePointerEvents: l, onEntryFocus: u, onEscapeKeyDown: d, onPointerDownOutside: g, onFocusOutside: w, onInteractOutside: L, onDismiss: p, disableOutsideScroll: j, ...E } = n, O = Ii(Gn, t), S = Ua(Gn, t), $ = $s(t), V = Ou(t), B = f1(t), [ue, Ne] = ge.useState(null), fe = ge.useRef(null), ee = ra(e, fe, O.onContentChange), z = ge.useRef(0), ie = ge.useRef(""), A = ge.useRef(0), I = ge.useRef(null), H = ge.useRef("right"), W = ge.useRef(0), ce = j ? id : ge.Fragment, he = j ? {
      as: y1,
      allowPinchZoom: true
    } : void 0, xe = (ne) => {
      const ke = ie.current + ne, Le = B().filter((T) => !T.disabled), N = document.activeElement, D = Le.find((T) => T.ref.current === N)?.textValue, q = Le.map((T) => T.textValue), K = E1(q, ke, D), X = Le.find((T) => T.textValue === K)?.ref.current;
      (function T(J) {
        ie.current = J, window.clearTimeout(z.current), J !== "" && (z.current = window.setTimeout(() => T(""), 1e3));
      })(ke), X && setTimeout(() => X.focus());
    };
    ge.useEffect(() => () => window.clearTimeout(z.current), []), rd();
    const oe = ge.useCallback((ne) => H.current === I.current?.side && M1(ne, I.current?.area), []);
    return C.jsx(b1, {
      scope: t,
      searchRef: ie,
      onItemEnter: ge.useCallback((ne) => {
        oe(ne) && ne.preventDefault();
      }, [
        oe
      ]),
      onItemLeave: ge.useCallback((ne) => {
        oe(ne) || (fe.current?.focus(), Ne(null));
      }, [
        oe
      ]),
      onTriggerLeave: ge.useCallback((ne) => {
        oe(ne) && ne.preventDefault();
      }, [
        oe
      ]),
      pointerGraceTimerRef: A,
      onPointerGraceIntentChange: ge.useCallback((ne) => {
        I.current = ne;
      }, []),
      children: C.jsx(ce, {
        ...he,
        children: C.jsx(ad, {
          asChild: true,
          trapped: s,
          onMountAutoFocus: wt(a, (ne) => {
            ne.preventDefault(), fe.current?.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: f,
          children: C.jsx(sd, {
            asChild: true,
            disableOutsidePointerEvents: l,
            onEscapeKeyDown: d,
            onPointerDownOutside: g,
            onFocusOutside: w,
            onInteractOutside: L,
            onDismiss: p,
            children: C.jsx(Qd, {
              asChild: true,
              ...V,
              dir: S.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: ue,
              onCurrentTabStopIdChange: Ne,
              onEntryFocus: wt(u, (ne) => {
                S.isUsingKeyboardRef.current || ne.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: C.jsx(od, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": nf(O.open),
                "data-radix-menu-content": "",
                dir: S.dir,
                ...$,
                ...E,
                ref: ee,
                style: {
                  outline: "none",
                  ...E.style
                },
                onKeyDown: wt(E.onKeyDown, (ne) => {
                  const Le = ne.target.closest("[data-radix-menu-content]") === ne.currentTarget, N = ne.ctrlKey || ne.altKey || ne.metaKey, D = ne.key.length === 1;
                  Le && (ne.key === "Tab" && ne.preventDefault(), !N && D && xe(ne.key));
                  const q = fe.current;
                  if (ne.target !== q || !l1.includes(ne.key)) return;
                  ne.preventDefault();
                  const X = B().filter((T) => !T.disabled).map((T) => T.ref.current);
                  Mu.includes(ne.key) && X.reverse(), I1(X);
                }),
                onBlur: wt(n.onBlur, (ne) => {
                  ne.currentTarget.contains(ne.target) || (window.clearTimeout(z.current), ie.current = "");
                }),
                onPointerMove: wt(n.onPointerMove, Oa((ne) => {
                  const ke = ne.target, Le = W.current !== ne.clientX;
                  if (ne.currentTarget.contains(ke) && Le) {
                    const N = ne.clientX > W.current ? "right" : "left";
                    H.current = N, W.current = ne.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  qu.displayName = Gn;
  var x1 = "MenuGroup", yl = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ai.div, {
      role: "group",
      ...r,
      ref: e
    });
  });
  yl.displayName = x1;
  var N1 = "MenuLabel", Uu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ai.div, {
      ...r,
      ref: e
    });
  });
  Uu.displayName = N1;
  var Us = "MenuItem", dc = "menu.itemSelect", Ks = ge.forwardRef((n, e) => {
    const { disabled: t = false, onSelect: r, ...s } = n, a = ge.useRef(null), f = Ua(Us, n.__scopeMenu), l = vl(Us, n.__scopeMenu), u = ra(e, a), d = ge.useRef(false), g = () => {
      const w = a.current;
      if (!t && w) {
        const L = new CustomEvent(dc, {
          bubbles: true,
          cancelable: true
        });
        w.addEventListener(dc, (p) => r?.(p), {
          once: true
        }), nd(w, L), L.defaultPrevented ? d.current = false : f.onClose();
      }
    };
    return C.jsx(zu, {
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
        const L = l.searchRef.current !== "";
        t || L && w.key === " " || al.includes(w.key) && (w.currentTarget.click(), w.preventDefault());
      })
    });
  });
  Ks.displayName = Us;
  var zu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, disabled: r = false, textValue: s, ...a } = n, f = vl(Us, t), l = Ou(t), u = ge.useRef(null), d = ra(e, u), [g, w] = ge.useState(false), [L, p] = ge.useState("");
    return ge.useEffect(() => {
      const j = u.current;
      j && p((j.textContent ?? "").trim());
    }, [
      a.children
    ]), C.jsx(Ra.ItemSlot, {
      scope: t,
      disabled: r,
      textValue: s ?? L,
      children: C.jsx(e1, {
        asChild: true,
        ...l,
        focusable: !r,
        children: C.jsx(ai.div, {
          role: "menuitem",
          "data-highlighted": g ? "" : void 0,
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          ...a,
          ref: d,
          onPointerMove: wt(n.onPointerMove, Oa((j) => {
            r ? f.onItemLeave(j) : (f.onItemEnter(j), j.defaultPrevented || j.currentTarget.focus({
              preventScroll: true
            }));
          })),
          onPointerLeave: wt(n.onPointerLeave, Oa((j) => f.onItemLeave(j))),
          onFocus: wt(n.onFocus, () => w(true)),
          onBlur: wt(n.onBlur, () => w(false))
        })
      })
    });
  }), _1 = "MenuCheckboxItem", Hu = ge.forwardRef((n, e) => {
    const { checked: t = false, onCheckedChange: r, ...s } = n;
    return C.jsx(Ku, {
      scope: n.__scopeMenu,
      checked: t,
      children: C.jsx(Ks, {
        role: "menuitemcheckbox",
        "aria-checked": zs(t) ? "mixed" : t,
        ...s,
        ref: e,
        "data-state": Nl(t),
        onSelect: wt(s.onSelect, () => r?.(zs(t) ? true : !t), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  Hu.displayName = _1;
  var Wu = "MenuRadioGroup", [A1, L1] = Ci(Wu, {
    value: void 0,
    onValueChange: () => {
    }
  }), Vu = ge.forwardRef((n, e) => {
    const { value: t, onValueChange: r, ...s } = n, a = pl(r);
    return C.jsx(A1, {
      scope: n.__scopeMenu,
      value: t,
      onValueChange: a,
      children: C.jsx(yl, {
        ...s,
        ref: e
      })
    });
  });
  Vu.displayName = Wu;
  var Gu = "MenuRadioItem", $u = ge.forwardRef((n, e) => {
    const { value: t, ...r } = n, s = L1(Gu, n.__scopeMenu), a = t === s.value;
    return C.jsx(Ku, {
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
  $u.displayName = Gu;
  var xl = "MenuItemIndicator", [Ku, S1] = Ci(xl, {
    checked: false
  }), Yu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, forceMount: r, ...s } = n, a = S1(xl, t);
    return C.jsx(Gs, {
      present: r || zs(a.checked) || a.checked === true,
      children: C.jsx(ai.span, {
        ...s,
        ref: e,
        "data-state": Nl(a.checked)
      })
    });
  });
  Yu.displayName = xl;
  var k1 = "MenuSeparator", Ju = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n;
    return C.jsx(ai.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: e
    });
  });
  Ju.displayName = k1;
  var P1 = "MenuArrow", Xu = ge.forwardRef((n, e) => {
    const { __scopeMenu: t, ...r } = n, s = $s(t);
    return C.jsx(ld, {
      ...s,
      ...r,
      ref: e
    });
  });
  Xu.displayName = P1;
  var C1 = "MenuSub", [Ap, Zu] = Ci(C1), Fa = "MenuSubTrigger", Qu = ge.forwardRef((n, e) => {
    const t = Ii(Fa, n.__scopeMenu), r = Ua(Fa, n.__scopeMenu), s = Zu(Fa, n.__scopeMenu), a = vl(Fa, n.__scopeMenu), f = ge.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = a, d = {
      __scopeMenu: n.__scopeMenu
    }, g = ge.useCallback(() => {
      f.current && window.clearTimeout(f.current), f.current = null;
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
      children: C.jsx(zu, {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": s.contentId,
        "data-state": nf(t.open),
        ...n,
        ref: ml(e, s.onTriggerChange),
        onClick: (w) => {
          n.onClick?.(w), !(n.disabled || w.defaultPrevented) && (w.currentTarget.focus(), t.open || t.onOpenChange(true));
        },
        onPointerMove: wt(n.onPointerMove, Oa((w) => {
          a.onItemEnter(w), !w.defaultPrevented && !n.disabled && !t.open && !f.current && (a.onPointerGraceIntentChange(null), f.current = window.setTimeout(() => {
            t.onOpenChange(true), g();
          }, 100));
        })),
        onPointerLeave: wt(n.onPointerLeave, Oa((w) => {
          g();
          const L = t.content?.getBoundingClientRect();
          if (L) {
            const p = t.content?.dataset.side, j = p === "right", E = j ? -5 : 5, O = L[j ? "left" : "right"], S = L[j ? "right" : "left"];
            a.onPointerGraceIntentChange({
              area: [
                {
                  x: w.clientX + E,
                  y: w.clientY
                },
                {
                  x: O,
                  y: L.top
                },
                {
                  x: S,
                  y: L.top
                },
                {
                  x: S,
                  y: L.bottom
                },
                {
                  x: O,
                  y: L.bottom
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
          const L = a.searchRef.current !== "";
          n.disabled || L && w.key === " " || c1[r.dir].includes(w.key) && (t.onOpenChange(true), t.content?.focus(), w.preventDefault());
        })
      })
    });
  });
  Qu.displayName = Fa;
  var ef = "MenuSubContent", tf = ge.forwardRef((n, e) => {
    const t = Tu(Gn, n.__scopeMenu), { forceMount: r = t.forceMount, ...s } = n, a = Ii(Gn, n.__scopeMenu), f = Ua(Gn, n.__scopeMenu), l = Zu(ef, n.__scopeMenu), u = ge.useRef(null), d = ra(e, u);
    return C.jsx(Ra.Provider, {
      scope: n.__scopeMenu,
      children: C.jsx(Gs, {
        present: r || a.open,
        children: C.jsx(Ra.Slot, {
          scope: n.__scopeMenu,
          children: C.jsx(wl, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...s,
            ref: d,
            align: "start",
            side: f.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: (g) => {
              f.isUsingKeyboardRef.current && u.current?.focus(), g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: wt(n.onFocusOutside, (g) => {
              g.target !== l.trigger && a.onOpenChange(false);
            }),
            onEscapeKeyDown: wt(n.onEscapeKeyDown, (g) => {
              f.onClose(), g.preventDefault();
            }),
            onKeyDown: wt(n.onKeyDown, (g) => {
              const w = g.currentTarget.contains(g.target), L = u1[f.dir].includes(g.key);
              w && L && (a.onOpenChange(false), l.trigger?.focus(), g.preventDefault());
            })
          })
        })
      })
    });
  });
  tf.displayName = ef;
  function nf(n) {
    return n ? "open" : "closed";
  }
  function zs(n) {
    return n === "indeterminate";
  }
  function Nl(n) {
    return zs(n) ? "indeterminate" : n ? "checked" : "unchecked";
  }
  function I1(n) {
    const e = document.activeElement;
    for (const t of n) if (t === e || (t.focus(), document.activeElement !== e)) return;
  }
  function j1(n, e) {
    return n.map((t, r) => n[(e + r) % n.length]);
  }
  function E1(n, e, t) {
    const s = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, a = t ? n.indexOf(t) : -1;
    let f = j1(n, Math.max(a, 0));
    s.length === 1 && (f = f.filter((d) => d !== t));
    const u = f.find((d) => d.toLowerCase().startsWith(s.toLowerCase()));
    return u !== t ? u : void 0;
  }
  function F1(n, e) {
    const { x: t, y: r } = n;
    let s = false;
    for (let a = 0, f = e.length - 1; a < e.length; f = a++) {
      const l = e[a], u = e[f], d = l.x, g = l.y, w = u.x, L = u.y;
      g > r != L > r && t < (w - d) * (r - g) / (L - g) + d && (s = !s);
    }
    return s;
  }
  function M1(n, e) {
    if (!e) return false;
    const t = {
      x: n.clientX,
      y: n.clientY
    };
    return F1(t, e);
  }
  function Oa(n) {
    return (e) => e.pointerType === "mouse" ? n(e) : void 0;
  }
  var R1 = Du, O1 = gl, D1 = Bu, T1 = qu, B1 = yl, q1 = Uu, U1 = Ks, z1 = Hu, H1 = Vu, W1 = $u, V1 = Yu, G1 = Ju, $1 = Xu, K1 = Qu, Y1 = tf, Ys = "DropdownMenu", [J1] = dl(Ys, [
    Ru
  ]), _n = Ru(), [X1, rf] = J1(Ys), af = (n) => {
    const { __scopeDropdownMenu: e, children: t, dir: r, open: s, defaultOpen: a, onOpenChange: f, modal: l = true } = n, u = _n(e), d = ge.useRef(null), [g, w] = Au({
      prop: s,
      defaultProp: a ?? false,
      onChange: f,
      caller: Ys
    });
    return C.jsx(X1, {
      scope: e,
      triggerId: tl(),
      triggerRef: d,
      contentId: tl(),
      open: g,
      onOpenChange: w,
      onOpenToggle: ge.useCallback(() => w((L) => !L), [
        w
      ]),
      modal: l,
      children: C.jsx(R1, {
        ...u,
        open: g,
        onOpenChange: w,
        dir: r,
        modal: l,
        children: t
      })
    });
  };
  af.displayName = Ys;
  var sf = "DropdownMenuTrigger", of = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, disabled: r = false, ...s } = n, a = rf(sf, t), f = _n(t);
    return C.jsx(O1, {
      asChild: true,
      ...f,
      children: C.jsx(ai.button, {
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
  of.displayName = sf;
  var Z1 = "DropdownMenuPortal", lf = (n) => {
    const { __scopeDropdownMenu: e, ...t } = n, r = _n(e);
    return C.jsx(D1, {
      ...r,
      ...t
    });
  };
  lf.displayName = Z1;
  var cf = "DropdownMenuContent", uf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = rf(cf, t), a = _n(t), f = ge.useRef(false);
    return C.jsx(T1, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...a,
      ...r,
      ref: e,
      onCloseAutoFocus: wt(n.onCloseAutoFocus, (l) => {
        f.current || s.triggerRef.current?.focus(), f.current = false, l.preventDefault();
      }),
      onInteractOutside: wt(n.onInteractOutside, (l) => {
        const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === true, g = u.button === 2 || d;
        (!s.modal || g) && (f.current = true);
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
  uf.displayName = cf;
  var Q1 = "DropdownMenuGroup", e2 = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(B1, {
      ...s,
      ...r,
      ref: e
    });
  });
  e2.displayName = Q1;
  var t2 = "DropdownMenuLabel", ff = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(q1, {
      ...s,
      ...r,
      ref: e
    });
  });
  ff.displayName = t2;
  var n2 = "DropdownMenuItem", hf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(U1, {
      ...s,
      ...r,
      ref: e
    });
  });
  hf.displayName = n2;
  var r2 = "DropdownMenuCheckboxItem", df = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(z1, {
      ...s,
      ...r,
      ref: e
    });
  });
  df.displayName = r2;
  var i2 = "DropdownMenuRadioGroup", a2 = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(H1, {
      ...s,
      ...r,
      ref: e
    });
  });
  a2.displayName = i2;
  var s2 = "DropdownMenuRadioItem", pf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(W1, {
      ...s,
      ...r,
      ref: e
    });
  });
  pf.displayName = s2;
  var o2 = "DropdownMenuItemIndicator", mf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(V1, {
      ...s,
      ...r,
      ref: e
    });
  });
  mf.displayName = o2;
  var l2 = "DropdownMenuSeparator", gf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(G1, {
      ...s,
      ...r,
      ref: e
    });
  });
  gf.displayName = l2;
  var c2 = "DropdownMenuArrow", u2 = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx($1, {
      ...s,
      ...r,
      ref: e
    });
  });
  u2.displayName = c2;
  var f2 = "DropdownMenuSubTrigger", bf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(K1, {
      ...s,
      ...r,
      ref: e
    });
  });
  bf.displayName = f2;
  var h2 = "DropdownMenuSubContent", vf = ge.forwardRef((n, e) => {
    const { __scopeDropdownMenu: t, ...r } = n, s = _n(t);
    return C.jsx(Y1, {
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
  vf.displayName = h2;
  var d2 = af, p2 = of, m2 = lf, wf = uf, yf = ff, xf = hf, Nf = df, _f = pf, Af = mf, Lf = gf, Sf = bf, kf = vf;
  const g2 = d2, b2 = p2, v2 = ge.forwardRef(({ className: n, inset: e, children: t, ...r }, s) => C.jsxs(Sf, {
    ref: s,
    className: Br("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...r,
    children: [
      t,
      C.jsx(jd, {
        className: "ml-auto"
      })
    ]
  }));
  v2.displayName = Sf.displayName;
  const w2 = ge.forwardRef(({ className: n, ...e }, t) => C.jsx(kf, {
    ref: t,
    className: Br("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
    ...e
  }));
  w2.displayName = kf.displayName;
  const Pf = ge.forwardRef(({ className: n, sideOffset: e = 4, ...t }, r) => C.jsx(m2, {
    children: C.jsx(wf, {
      ref: r,
      sideOffset: e,
      className: Br("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", n),
      ...t
    })
  }));
  Pf.displayName = wf.displayName;
  const Ms = ge.forwardRef(({ className: n, inset: e, ...t }, r) => C.jsx(xf, {
    ref: r,
    className: Br("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e && "pl-8", n),
    ...t
  }));
  Ms.displayName = xf.displayName;
  const y2 = ge.forwardRef(({ className: n, children: e, checked: t, ...r }, s) => C.jsxs(Nf, {
    ref: s,
    className: Br("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    checked: t,
    ...r,
    children: [
      C.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(Af, {
          children: C.jsx(Ed, {
            className: "h-4 w-4"
          })
        })
      }),
      e
    ]
  }));
  y2.displayName = Nf.displayName;
  const x2 = ge.forwardRef(({ className: n, children: e, ...t }, r) => C.jsxs(_f, {
    ref: r,
    className: Br("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
    ...t,
    children: [
      C.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(Af, {
          children: C.jsx(Md, {
            className: "h-2 w-2 fill-current"
          })
        })
      }),
      e
    ]
  }));
  x2.displayName = _f.displayName;
  const N2 = ge.forwardRef(({ className: n, inset: e, ...t }, r) => C.jsx(yf, {
    ref: r,
    className: Br("px-2 py-1.5 text-sm font-semibold", e && "pl-8", n),
    ...t
  }));
  N2.displayName = yf.displayName;
  const _2 = ge.forwardRef(({ className: n, ...e }, t) => C.jsx(Lf, {
    ref: t,
    className: Br("-mx-1 my-1 h-px bg-muted", n),
    ...e
  }));
  _2.displayName = Lf.displayName;
  Lt = function(n) {
    "@babel/helpers - typeof";
    return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Lt(n);
  };
  function A2(n) {
    if (Array.isArray(n)) return n;
  }
  function L2(n, e) {
    var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (t != null) {
      var r, s, a, f, l = [], u = true, d = false;
      try {
        if (a = (t = t.call(n)).next, e !== 0) for (; !(u = (r = a.call(t)).done) && (l.push(r.value), l.length !== e); u = true) ;
      } catch (g) {
        d = true, s = g;
      } finally {
        try {
          if (!u && t.return != null && (f = t.return(), Object(f) !== f)) return;
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
  function S2(n, e) {
    if (n) {
      if (typeof n == "string") return pc(n, e);
      var t = {}.toString.call(n).slice(8, -1);
      return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? pc(n, e) : void 0;
    }
  }
  function k2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function mc(n, e) {
    return A2(n) || L2(n, e) || S2(n, e) || k2();
  }
  function gc(n, e = "utf8") {
    return new TextDecoder(e).decode(n);
  }
  const P2 = new TextEncoder();
  function C2(n) {
    return P2.encode(n);
  }
  const I2 = 1024 * 8, j2 = (() => {
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
    constructor(e = I2, t = {}) {
      let r = false;
      typeof e == "number" ? e = new ArrayBuffer(e) : (r = true, this.lastWrittenByte = e.byteLength);
      const s = t.offset ? t.offset >>> 0 : 0, a = e.byteLength - s;
      let f = s;
      (ArrayBuffer.isView(e) || e instanceof _l) && (e.byteLength !== e.buffer.byteLength && (f = e.byteOffset + s), e = e.buffer), r ? this.lastWrittenByte = a : this.lastWrittenByte = 0, this.buffer = e, this.length = a, this.byteLength = a, this.byteOffset = f, this.offset = 0, this.littleEndian = true, this._data = new DataView(this.buffer, f, a), this._mark = 0, this._marks = [];
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
      if (this.littleEndian === j2 && t !== "uint8" && t !== "int8") {
        const l = new Uint8Array(this.buffer.slice(s, s + r));
        l.reverse();
        const u = new Fo[t](l.buffer);
        return this.offset += r, u.reverse(), u;
      }
      const f = new Fo[t](a);
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
      return this.writeBytes(C2(e));
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
  function ia(n) {
    let e = n.length;
    for (; --e >= 0; ) n[e] = 0;
  }
  const E2 = 3, F2 = 258, Cf = 29, M2 = 256, R2 = M2 + 1 + Cf, If = 30, O2 = 512, D2 = new Array((R2 + 2) * 2);
  ia(D2);
  const T2 = new Array(If * 2);
  ia(T2);
  const B2 = new Array(O2);
  ia(B2);
  const q2 = new Array(F2 - E2 + 1);
  ia(q2);
  const U2 = new Array(Cf);
  ia(U2);
  const z2 = new Array(If);
  ia(z2);
  const H2 = (n, e, t, r) => {
    let s = n & 65535 | 0, a = n >>> 16 & 65535 | 0, f = 0;
    for (; t !== 0; ) {
      f = t > 2e3 ? 2e3 : t, t -= f;
      do
        s = s + e[r++] | 0, a = a + s | 0;
      while (--f);
      s %= 65521, a %= 65521;
    }
    return s | a << 16 | 0;
  };
  var sl = H2;
  const W2 = () => {
    let n, e = [];
    for (var t = 0; t < 256; t++) {
      n = t;
      for (var r = 0; r < 8; r++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      e[t] = n;
    }
    return e;
  }, V2 = new Uint32Array(W2()), G2 = (n, e, t, r) => {
    const s = V2, a = r + t;
    n ^= -1;
    for (let f = r; f < a; f++) n = n >>> 8 ^ s[(n ^ e[f]) & 255];
    return n ^ -1;
  };
  var pr = G2, ol = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }, jf = {
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
  const $2 = (n, e) => Object.prototype.hasOwnProperty.call(n, e);
  var K2 = function(n) {
    const e = Array.prototype.slice.call(arguments, 1);
    for (; e.length; ) {
      const t = e.shift();
      if (t) {
        if (typeof t != "object") throw new TypeError(t + "must be non-object");
        for (const r in t) $2(t, r) && (n[r] = t[r]);
      }
    }
    return n;
  }, Y2 = (n) => {
    let e = 0;
    for (let r = 0, s = n.length; r < s; r++) e += n[r].length;
    const t = new Uint8Array(e);
    for (let r = 0, s = 0, a = n.length; r < a; r++) {
      let f = n[r];
      t.set(f, s), s += f.length;
    }
    return t;
  }, Ef = {
    assign: K2,
    flattenChunks: Y2
  };
  let Ff = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    Ff = false;
  }
  const Da = new Uint8Array(256);
  for (let n = 0; n < 256; n++) Da[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
  Da[254] = Da[254] = 1;
  var J2 = (n) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(n);
    let e, t, r, s, a, f = n.length, l = 0;
    for (s = 0; s < f; s++) t = n.charCodeAt(s), (t & 64512) === 55296 && s + 1 < f && (r = n.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    for (e = new Uint8Array(l), a = 0, s = 0; a < l; s++) t = n.charCodeAt(s), (t & 64512) === 55296 && s + 1 < f && (r = n.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), t < 128 ? e[a++] = t : t < 2048 ? (e[a++] = 192 | t >>> 6, e[a++] = 128 | t & 63) : t < 65536 ? (e[a++] = 224 | t >>> 12, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63) : (e[a++] = 240 | t >>> 18, e[a++] = 128 | t >>> 12 & 63, e[a++] = 128 | t >>> 6 & 63, e[a++] = 128 | t & 63);
    return e;
  };
  const X2 = (n, e) => {
    if (e < 65534 && n.subarray && Ff) return String.fromCharCode.apply(null, n.length === e ? n : n.subarray(0, e));
    let t = "";
    for (let r = 0; r < e; r++) t += String.fromCharCode(n[r]);
    return t;
  };
  var Z2 = (n, e) => {
    const t = e || n.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(n.subarray(0, e));
    let r, s;
    const a = new Array(t * 2);
    for (s = 0, r = 0; r < t; ) {
      let f = n[r++];
      if (f < 128) {
        a[s++] = f;
        continue;
      }
      let l = Da[f];
      if (l > 4) {
        a[s++] = 65533, r += l - 1;
        continue;
      }
      for (f &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && r < t; ) f = f << 6 | n[r++] & 63, l--;
      if (l > 1) {
        a[s++] = 65533;
        continue;
      }
      f < 65536 ? a[s++] = f : (f -= 65536, a[s++] = 55296 | f >> 10 & 1023, a[s++] = 56320 | f & 1023);
    }
    return X2(a, s);
  }, Q2 = (n, e) => {
    e = e || n.length, e > n.length && (e = n.length);
    let t = e - 1;
    for (; t >= 0 && (n[t] & 192) === 128; ) t--;
    return t < 0 || t === 0 ? e : t + Da[n[t]] > e ? t : e;
  }, ll = {
    string2buf: J2,
    buf2string: Z2,
    utf8border: Q2
  };
  function e0() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  var t0 = e0;
  const Ls = 16209, n0 = 16191;
  var r0 = function(e, t) {
    let r, s, a, f, l, u, d, g, w, L, p, j, E, O, S, $, V, B, ue, Ne, fe, ee, z, ie;
    const A = e.state;
    r = e.next_in, z = e.input, s = r + (e.avail_in - 5), a = e.next_out, ie = e.output, f = a - (t - e.avail_out), l = a + (e.avail_out - 257), u = A.dmax, d = A.wsize, g = A.whave, w = A.wnext, L = A.window, p = A.hold, j = A.bits, E = A.lencode, O = A.distcode, S = (1 << A.lenbits) - 1, $ = (1 << A.distbits) - 1;
    e: do {
      j < 15 && (p += z[r++] << j, j += 8, p += z[r++] << j, j += 8), V = E[p & S];
      t: for (; ; ) {
        if (B = V >>> 24, p >>>= B, j -= B, B = V >>> 16 & 255, B === 0) ie[a++] = V & 65535;
        else if (B & 16) {
          ue = V & 65535, B &= 15, B && (j < B && (p += z[r++] << j, j += 8), ue += p & (1 << B) - 1, p >>>= B, j -= B), j < 15 && (p += z[r++] << j, j += 8, p += z[r++] << j, j += 8), V = O[p & $];
          n: for (; ; ) {
            if (B = V >>> 24, p >>>= B, j -= B, B = V >>> 16 & 255, B & 16) {
              if (Ne = V & 65535, B &= 15, j < B && (p += z[r++] << j, j += 8, j < B && (p += z[r++] << j, j += 8)), Ne += p & (1 << B) - 1, Ne > u) {
                e.msg = "invalid distance too far back", A.mode = Ls;
                break e;
              }
              if (p >>>= B, j -= B, B = a - f, Ne > B) {
                if (B = Ne - B, B > g && A.sane) {
                  e.msg = "invalid distance too far back", A.mode = Ls;
                  break e;
                }
                if (fe = 0, ee = L, w === 0) {
                  if (fe += d - B, B < ue) {
                    ue -= B;
                    do
                      ie[a++] = L[fe++];
                    while (--B);
                    fe = a - Ne, ee = ie;
                  }
                } else if (w < B) {
                  if (fe += d + w - B, B -= w, B < ue) {
                    ue -= B;
                    do
                      ie[a++] = L[fe++];
                    while (--B);
                    if (fe = 0, w < ue) {
                      B = w, ue -= B;
                      do
                        ie[a++] = L[fe++];
                      while (--B);
                      fe = a - Ne, ee = ie;
                    }
                  }
                } else if (fe += w - B, B < ue) {
                  ue -= B;
                  do
                    ie[a++] = L[fe++];
                  while (--B);
                  fe = a - Ne, ee = ie;
                }
                for (; ue > 2; ) ie[a++] = ee[fe++], ie[a++] = ee[fe++], ie[a++] = ee[fe++], ue -= 3;
                ue && (ie[a++] = ee[fe++], ue > 1 && (ie[a++] = ee[fe++]));
              } else {
                fe = a - Ne;
                do
                  ie[a++] = ie[fe++], ie[a++] = ie[fe++], ie[a++] = ie[fe++], ue -= 3;
                while (ue > 2);
                ue && (ie[a++] = ie[fe++], ue > 1 && (ie[a++] = ie[fe++]));
              }
            } else if (B & 64) {
              e.msg = "invalid distance code", A.mode = Ls;
              break e;
            } else {
              V = O[(V & 65535) + (p & (1 << B) - 1)];
              continue n;
            }
            break;
          }
        } else if (B & 64) if (B & 32) {
          A.mode = n0;
          break e;
        } else {
          e.msg = "invalid literal/length code", A.mode = Ls;
          break e;
        }
        else {
          V = E[(V & 65535) + (p & (1 << B) - 1)];
          continue t;
        }
        break;
      }
    } while (r < s && a < l);
    ue = j >> 3, r -= ue, j -= ue << 3, p &= (1 << j) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < s ? 5 + (s - r) : 5 - (r - s), e.avail_out = a < l ? 257 + (l - a) : 257 - (a - l), A.hold = p, A.bits = j;
  };
  const $i = 15, bc = 852, vc = 592, wc = 0, Mo = 1, yc = 2, i0 = new Uint16Array([
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
  ]), a0 = new Uint8Array([
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
  ]), s0 = new Uint16Array([
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
  ]), o0 = new Uint8Array([
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
  ]), l0 = (n, e, t, r, s, a, f, l) => {
    const u = l.bits;
    let d = 0, g = 0, w = 0, L = 0, p = 0, j = 0, E = 0, O = 0, S = 0, $ = 0, V, B, ue, Ne, fe, ee = null, z;
    const ie = new Uint16Array($i + 1), A = new Uint16Array($i + 1);
    let I = null, H, W, ce;
    for (d = 0; d <= $i; d++) ie[d] = 0;
    for (g = 0; g < r; g++) ie[e[t + g]]++;
    for (p = u, L = $i; L >= 1 && ie[L] === 0; L--) ;
    if (p > L && (p = L), L === 0) return s[a++] = 1 << 24 | 64 << 16 | 0, s[a++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
    for (w = 1; w < L && ie[w] === 0; w++) ;
    for (p < w && (p = w), O = 1, d = 1; d <= $i; d++) if (O <<= 1, O -= ie[d], O < 0) return -1;
    if (O > 0 && (n === wc || L !== 1)) return -1;
    for (A[1] = 0, d = 1; d < $i; d++) A[d + 1] = A[d] + ie[d];
    for (g = 0; g < r; g++) e[t + g] !== 0 && (f[A[e[t + g]]++] = g);
    if (n === wc ? (ee = I = f, z = 20) : n === Mo ? (ee = i0, I = a0, z = 257) : (ee = s0, I = o0, z = 0), $ = 0, g = 0, d = w, fe = a, j = p, E = 0, ue = -1, S = 1 << p, Ne = S - 1, n === Mo && S > bc || n === yc && S > vc) return 1;
    for (; ; ) {
      H = d - E, f[g] + 1 < z ? (W = 0, ce = f[g]) : f[g] >= z ? (W = I[f[g] - z], ce = ee[f[g] - z]) : (W = 96, ce = 0), V = 1 << d - E, B = 1 << j, w = B;
      do
        B -= V, s[fe + ($ >> E) + B] = H << 24 | W << 16 | ce | 0;
      while (B !== 0);
      for (V = 1 << d - 1; $ & V; ) V >>= 1;
      if (V !== 0 ? ($ &= V - 1, $ += V) : $ = 0, g++, --ie[d] === 0) {
        if (d === L) break;
        d = e[t + f[g]];
      }
      if (d > p && ($ & Ne) !== ue) {
        for (E === 0 && (E = p), fe += w, j = d - E, O = 1 << j; j + E < L && (O -= ie[j + E], !(O <= 0)); ) j++, O <<= 1;
        if (S += 1 << j, n === Mo && S > bc || n === yc && S > vc) return 1;
        ue = $ & Ne, s[ue] = p << 24 | j << 16 | fe - a | 0;
      }
    }
    return $ !== 0 && (s[fe + $] = d - E << 24 | 64 << 16 | 0), l.bits = p, 0;
  };
  var Ma = l0;
  const c0 = 0, Mf = 1, Rf = 2, { Z_FINISH: xc, Z_BLOCK: u0, Z_TREES: Ss, Z_OK: ki, Z_STREAM_END: f0, Z_NEED_DICT: h0, Z_STREAM_ERROR: $n, Z_DATA_ERROR: Of, Z_MEM_ERROR: Df, Z_BUF_ERROR: d0, Z_DEFLATED: Nc } = jf, Js = 16180, _c = 16181, Ac = 16182, Lc = 16183, Sc = 16184, kc = 16185, Pc = 16186, Cc = 16187, Ic = 16188, jc = 16189, Hs = 16190, Or = 16191, Ro = 16192, Ec = 16193, Oo = 16194, Fc = 16195, Mc = 16196, Rc = 16197, Oc = 16198, ks = 16199, Ps = 16200, Dc = 16201, Tc = 16202, Bc = 16203, qc = 16204, Uc = 16205, Do = 16206, zc = 16207, Hc = 16208, Rt = 16209, Tf = 16210, Bf = 16211, p0 = 852, m0 = 592, g0 = 15, b0 = g0, Wc = (n) => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
  function v0() {
    this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  const ji = (n) => {
    if (!n) return 1;
    const e = n.state;
    return !e || e.strm !== n || e.mode < Js || e.mode > Bf ? 1 : 0;
  }, qf = (n) => {
    if (ji(n)) return $n;
    const e = n.state;
    return n.total_in = n.total_out = e.total = 0, n.msg = "", e.wrap && (n.adler = e.wrap & 1), e.mode = Js, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(p0), e.distcode = e.distdyn = new Int32Array(m0), e.sane = 1, e.back = -1, ki;
  }, Uf = (n) => {
    if (ji(n)) return $n;
    const e = n.state;
    return e.wsize = 0, e.whave = 0, e.wnext = 0, qf(n);
  }, zf = (n, e) => {
    let t;
    if (ji(n)) return $n;
    const r = n.state;
    return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? $n : (r.window !== null && r.wbits !== e && (r.window = null), r.wrap = t, r.wbits = e, Uf(n));
  }, Hf = (n, e) => {
    if (!n) return $n;
    const t = new v0();
    n.state = t, t.strm = n, t.window = null, t.mode = Js;
    const r = zf(n, e);
    return r !== ki && (n.state = null), r;
  }, w0 = (n) => Hf(n, b0);
  let Vc = true, To, Bo;
  const y0 = (n) => {
    if (Vc) {
      To = new Int32Array(512), Bo = new Int32Array(32);
      let e = 0;
      for (; e < 144; ) n.lens[e++] = 8;
      for (; e < 256; ) n.lens[e++] = 9;
      for (; e < 280; ) n.lens[e++] = 7;
      for (; e < 288; ) n.lens[e++] = 8;
      for (Ma(Mf, n.lens, 0, 288, To, 0, n.work, {
        bits: 9
      }), e = 0; e < 32; ) n.lens[e++] = 5;
      Ma(Rf, n.lens, 0, 32, Bo, 0, n.work, {
        bits: 5
      }), Vc = false;
    }
    n.lencode = To, n.lenbits = 9, n.distcode = Bo, n.distbits = 5;
  }, Wf = (n, e, t, r) => {
    let s;
    const a = n.state;
    return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), r >= a.wsize ? (a.window.set(e.subarray(t - a.wsize, t), 0), a.wnext = 0, a.whave = a.wsize) : (s = a.wsize - a.wnext, s > r && (s = r), a.window.set(e.subarray(t - r, t - r + s), a.wnext), r -= s, r ? (a.window.set(e.subarray(t - r, t), 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0;
  }, x0 = (n, e) => {
    let t, r, s, a, f, l, u, d, g, w, L, p, j, E, O = 0, S, $, V, B, ue, Ne, fe, ee;
    const z = new Uint8Array(4);
    let ie, A;
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
    if (ji(n) || !n.output || !n.input && n.avail_in !== 0) return $n;
    t = n.state, t.mode === Or && (t.mode = Ro), f = n.next_out, s = n.output, u = n.avail_out, a = n.next_in, r = n.input, l = n.avail_in, d = t.hold, g = t.bits, w = l, L = u, ee = ki;
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
          t.wbits === 0 && (t.wbits = 15), t.check = 0, z[0] = d & 255, z[1] = d >>> 8 & 255, t.check = pr(t.check, z, 2, 0), d = 0, g = 0, t.mode = _c;
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
        t.head && (t.head.text = d >> 8 & 1), t.flags & 512 && t.wrap & 4 && (z[0] = d & 255, z[1] = d >>> 8 & 255, t.check = pr(t.check, z, 2, 0)), d = 0, g = 0, t.mode = Ac;
      case Ac:
        for (; g < 32; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        t.head && (t.head.time = d), t.flags & 512 && t.wrap & 4 && (z[0] = d & 255, z[1] = d >>> 8 & 255, z[2] = d >>> 16 & 255, z[3] = d >>> 24 & 255, t.check = pr(t.check, z, 4, 0)), d = 0, g = 0, t.mode = Lc;
      case Lc:
        for (; g < 16; ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        t.head && (t.head.xflags = d & 255, t.head.os = d >> 8), t.flags & 512 && t.wrap & 4 && (z[0] = d & 255, z[1] = d >>> 8 & 255, t.check = pr(t.check, z, 2, 0)), d = 0, g = 0, t.mode = Sc;
      case Sc:
        if (t.flags & 1024) {
          for (; g < 16; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.length = d, t.head && (t.head.extra_len = d), t.flags & 512 && t.wrap & 4 && (z[0] = d & 255, z[1] = d >>> 8 & 255, t.check = pr(t.check, z, 2, 0)), d = 0, g = 0;
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
        n.adler = t.check = Wc(d), d = 0, g = 0, t.mode = Hs;
      case Hs:
        if (t.havedict === 0) return n.next_out = f, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, h0;
        n.adler = t.check = 1, t.mode = Or;
      case Or:
        if (e === u0 || e === Ss) break e;
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
            if (y0(t), t.mode = ks, e === Ss) {
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
        if (t.length = d & 65535, d = 0, g = 0, t.mode = Oo, e === Ss) break e;
      case Oo:
        t.mode = Fc;
      case Fc:
        if (p = t.length, p) {
          if (p > l && (p = l), p > u && (p = u), p === 0) break e;
          s.set(r.subarray(a, a + p), f), l -= p, a += p, u -= p, f += p, t.length -= p;
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
          t.lens[I[t.have++]] = d & 7, d >>>= 3, g -= 3;
        }
        for (; t.have < 19; ) t.lens[I[t.have++]] = 0;
        if (t.lencode = t.lendyn, t.lenbits = 7, ie = {
          bits: t.lenbits
        }, ee = Ma(c0, t.lens, 0, 19, t.lencode, 0, t.work, ie), t.lenbits = ie.bits, ee) {
          n.msg = "invalid code lengths set", t.mode = Rt;
          break;
        }
        t.have = 0, t.mode = Oc;
      case Oc:
        for (; t.have < t.nlen + t.ndist; ) {
          for (; O = t.lencode[d & (1 << t.lenbits) - 1], S = O >>> 24, $ = O >>> 16 & 255, V = O & 65535, !(S <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          if (V < 16) d >>>= S, g -= S, t.lens[t.have++] = V;
          else {
            if (V === 16) {
              for (A = S + 2; g < A; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              if (d >>>= S, g -= S, t.have === 0) {
                n.msg = "invalid bit length repeat", t.mode = Rt;
                break;
              }
              fe = t.lens[t.have - 1], p = 3 + (d & 3), d >>>= 2, g -= 2;
            } else if (V === 17) {
              for (A = S + 3; g < A; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              d >>>= S, g -= S, fe = 0, p = 3 + (d & 7), d >>>= 3, g -= 3;
            } else {
              for (A = S + 7; g < A; ) {
                if (l === 0) break e;
                l--, d += r[a++] << g, g += 8;
              }
              d >>>= S, g -= S, fe = 0, p = 11 + (d & 127), d >>>= 7, g -= 7;
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
        if (t.lenbits = 9, ie = {
          bits: t.lenbits
        }, ee = Ma(Mf, t.lens, 0, t.nlen, t.lencode, 0, t.work, ie), t.lenbits = ie.bits, ee) {
          n.msg = "invalid literal/lengths set", t.mode = Rt;
          break;
        }
        if (t.distbits = 6, t.distcode = t.distdyn, ie = {
          bits: t.distbits
        }, ee = Ma(Rf, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, ie), t.distbits = ie.bits, ee) {
          n.msg = "invalid distances set", t.mode = Rt;
          break;
        }
        if (t.mode = ks, e === Ss) break e;
      case ks:
        t.mode = Ps;
      case Ps:
        if (l >= 6 && u >= 258) {
          n.next_out = f, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, r0(n, L), f = n.next_out, s = n.output, u = n.avail_out, a = n.next_in, r = n.input, l = n.avail_in, d = t.hold, g = t.bits, t.mode === Or && (t.back = -1);
          break;
        }
        for (t.back = 0; O = t.lencode[d & (1 << t.lenbits) - 1], S = O >>> 24, $ = O >>> 16 & 255, V = O & 65535, !(S <= g); ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if ($ && !($ & 240)) {
          for (B = S, ue = $, Ne = V; O = t.lencode[Ne + ((d & (1 << B + ue) - 1) >> B)], S = O >>> 24, $ = O >>> 16 & 255, V = O & 65535, !(B + S <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          d >>>= B, g -= B, t.back += B;
        }
        if (d >>>= S, g -= S, t.back += S, t.length = V, $ === 0) {
          t.mode = Uc;
          break;
        }
        if ($ & 32) {
          t.back = -1, t.mode = Or;
          break;
        }
        if ($ & 64) {
          n.msg = "invalid literal/length code", t.mode = Rt;
          break;
        }
        t.extra = $ & 15, t.mode = Dc;
      case Dc:
        if (t.extra) {
          for (A = t.extra; g < A; ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          t.length += d & (1 << t.extra) - 1, d >>>= t.extra, g -= t.extra, t.back += t.extra;
        }
        t.was = t.length, t.mode = Tc;
      case Tc:
        for (; O = t.distcode[d & (1 << t.distbits) - 1], S = O >>> 24, $ = O >>> 16 & 255, V = O & 65535, !(S <= g); ) {
          if (l === 0) break e;
          l--, d += r[a++] << g, g += 8;
        }
        if (!($ & 240)) {
          for (B = S, ue = $, Ne = V; O = t.distcode[Ne + ((d & (1 << B + ue) - 1) >> B)], S = O >>> 24, $ = O >>> 16 & 255, V = O & 65535, !(B + S <= g); ) {
            if (l === 0) break e;
            l--, d += r[a++] << g, g += 8;
          }
          d >>>= B, g -= B, t.back += B;
        }
        if (d >>>= S, g -= S, t.back += S, $ & 64) {
          n.msg = "invalid distance code", t.mode = Rt;
          break;
        }
        t.offset = V, t.extra = $ & 15, t.mode = Bc;
      case Bc:
        if (t.extra) {
          for (A = t.extra; g < A; ) {
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
        if (p = L - u, t.offset > p) {
          if (p = t.offset - p, p > t.whave && t.sane) {
            n.msg = "invalid distance too far back", t.mode = Rt;
            break;
          }
          p > t.wnext ? (p -= t.wnext, j = t.wsize - p) : j = t.wnext - p, p > t.length && (p = t.length), E = t.window;
        } else E = s, j = f - t.offset, p = t.length;
        p > u && (p = u), u -= p, t.length -= p;
        do
          s[f++] = E[j++];
        while (--p);
        t.length === 0 && (t.mode = Ps);
        break;
      case Uc:
        if (u === 0) break e;
        s[f++] = t.length, u--, t.mode = Ps;
        break;
      case Do:
        if (t.wrap) {
          for (; g < 32; ) {
            if (l === 0) break e;
            l--, d |= r[a++] << g, g += 8;
          }
          if (L -= u, n.total_out += L, t.total += L, t.wrap & 4 && L && (n.adler = t.check = t.flags ? pr(t.check, s, L, f - L) : sl(t.check, s, L, f - L)), L = u, t.wrap & 4 && (t.flags ? d : Wc(d)) !== t.check) {
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
        ee = f0;
        break e;
      case Rt:
        ee = Of;
        break e;
      case Tf:
        return Df;
      case Bf:
      default:
        return $n;
    }
    return n.next_out = f, n.avail_out = u, n.next_in = a, n.avail_in = l, t.hold = d, t.bits = g, (t.wsize || L !== n.avail_out && t.mode < Rt && (t.mode < Do || e !== xc)) && Wf(n, n.output, n.next_out, L - n.avail_out), w -= n.avail_in, L -= n.avail_out, n.total_in += w, n.total_out += L, t.total += L, t.wrap & 4 && L && (n.adler = t.check = t.flags ? pr(t.check, s, L, n.next_out - L) : sl(t.check, s, L, n.next_out - L)), n.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Or ? 128 : 0) + (t.mode === ks || t.mode === Oo ? 256 : 0), (w === 0 && L === 0 || e === xc) && ee === ki && (ee = d0), ee;
  }, N0 = (n) => {
    if (ji(n)) return $n;
    let e = n.state;
    return e.window && (e.window = null), n.state = null, ki;
  }, _0 = (n, e) => {
    if (ji(n)) return $n;
    const t = n.state;
    return t.wrap & 2 ? (t.head = e, e.done = false, ki) : $n;
  }, A0 = (n, e) => {
    const t = e.length;
    let r, s, a;
    return ji(n) || (r = n.state, r.wrap !== 0 && r.mode !== Hs) ? $n : r.mode === Hs && (s = 1, s = sl(s, e, t, 0), s !== r.check) ? Of : (a = Wf(n, e, t, t), a ? (r.mode = Tf, Df) : (r.havedict = 1, ki));
  };
  var L0 = Uf, S0 = zf, k0 = qf, P0 = w0, C0 = Hf, I0 = x0, j0 = N0, E0 = _0, F0 = A0, M0 = "pako inflate (from Nodeca project)", Tr = {
    inflateReset: L0,
    inflateReset2: S0,
    inflateResetKeep: k0,
    inflateInit: P0,
    inflateInit2: C0,
    inflate: I0,
    inflateEnd: j0,
    inflateGetHeader: E0,
    inflateSetDictionary: F0,
    inflateInfo: M0
  };
  function R0() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  }
  var O0 = R0;
  const Vf = Object.prototype.toString, { Z_NO_FLUSH: D0, Z_FINISH: T0, Z_OK: Ta, Z_STREAM_END: qo, Z_NEED_DICT: Uo, Z_STREAM_ERROR: B0, Z_DATA_ERROR: Gc, Z_MEM_ERROR: q0 } = jf;
  function za(n) {
    this.options = Ef.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ""
    }, n || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(n && n.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new t0(), this.strm.avail_out = 0;
    let t = Tr.inflateInit2(this.strm, e.windowBits);
    if (t !== Ta) throw new Error(ol[t]);
    if (this.header = new O0(), Tr.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = ll.string2buf(e.dictionary) : Vf.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = Tr.inflateSetDictionary(this.strm, e.dictionary), t !== Ta))) throw new Error(ol[t]);
  }
  za.prototype.push = function(n, e) {
    const t = this.strm, r = this.options.chunkSize, s = this.options.dictionary;
    let a, f, l;
    if (this.ended) return false;
    for (e === ~~e ? f = e : f = e === true ? T0 : D0, Vf.call(n) === "[object ArrayBuffer]" ? t.input = new Uint8Array(n) : t.input = n, t.next_in = 0, t.avail_in = t.input.length; ; ) {
      for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), a = Tr.inflate(t, f), a === Uo && s && (a = Tr.inflateSetDictionary(t, s), a === Ta ? a = Tr.inflate(t, f) : a === Gc && (a = Uo)); t.avail_in > 0 && a === qo && t.state.wrap > 0 && n[t.next_in] !== 0; ) Tr.inflateReset(t), a = Tr.inflate(t, f);
      switch (a) {
        case B0:
        case Gc:
        case Uo:
        case q0:
          return this.onEnd(a), this.ended = true, false;
      }
      if (l = t.avail_out, t.next_out && (t.avail_out === 0 || a === qo)) if (this.options.to === "string") {
        let u = ll.utf8border(t.output, t.next_out), d = t.next_out - u, g = ll.buf2string(t.output, u);
        t.next_out = d, t.avail_out = r - d, d && t.output.set(t.output.subarray(u, u + d), 0), this.onData(g);
      } else this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
      if (!(a === Ta && l === 0)) {
        if (a === qo) return a = Tr.inflateEnd(this.strm), this.onEnd(a), this.ended = true, true;
        if (t.avail_in === 0) break;
      }
    }
    return true;
  };
  za.prototype.onData = function(n) {
    this.chunks.push(n);
  };
  za.prototype.onEnd = function(n) {
    n === Ta && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Ef.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
  };
  function U0(n, e) {
    const t = new za(e);
    if (t.push(n), t.err) throw t.msg || ol[t.err];
    return t.result;
  }
  var z0 = za, H0 = U0, W0 = {
    Inflate: z0,
    inflate: H0
  };
  const { Inflate: V0, inflate: G0 } = W0;
  var $c = V0, $0 = G0;
  const Gf = [];
  for (let n = 0; n < 256; n++) {
    let e = n;
    for (let t = 0; t < 8; t++) e & 1 ? e = 3988292384 ^ e >>> 1 : e = e >>> 1;
    Gf[n] = e;
  }
  const Kc = 4294967295;
  function K0(n, e, t) {
    let r = n;
    for (let s = 0; s < t; s++) r = Gf[(r ^ e[s]) & 255] ^ r >>> 8;
    return r;
  }
  function Y0(n, e) {
    return (K0(Kc, n, e) ^ Kc) >>> 0;
  }
  function Yc(n, e, t) {
    const r = n.readUint32(), s = Y0(new Uint8Array(n.buffer, n.byteOffset + n.offset - e - 4, e), e);
    if (s !== r) throw new Error(`CRC mismatch for chunk ${t}. Expected ${r}, found ${s}`);
  }
  function $f(n, e, t) {
    for (let r = 0; r < t; r++) e[r] = n[r];
  }
  function Kf(n, e, t, r) {
    let s = 0;
    for (; s < r; s++) e[s] = n[s];
    for (; s < t; s++) e[s] = n[s] + e[s - r] & 255;
  }
  function Yf(n, e, t, r) {
    let s = 0;
    if (t.length === 0) for (; s < r; s++) e[s] = n[s];
    else for (; s < r; s++) e[s] = n[s] + t[s] & 255;
  }
  function Jf(n, e, t, r, s) {
    let a = 0;
    if (t.length === 0) {
      for (; a < s; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + (e[a - s] >> 1) & 255;
    } else {
      for (; a < s; a++) e[a] = n[a] + (t[a] >> 1) & 255;
      for (; a < r; a++) e[a] = n[a] + (e[a - s] + t[a] >> 1) & 255;
    }
  }
  function Xf(n, e, t, r, s) {
    let a = 0;
    if (t.length === 0) {
      for (; a < s; a++) e[a] = n[a];
      for (; a < r; a++) e[a] = n[a] + e[a - s] & 255;
    } else {
      for (; a < s; a++) e[a] = n[a] + t[a] & 255;
      for (; a < r; a++) e[a] = n[a] + J0(e[a - s], t[a], t[a - s]) & 255;
    }
  }
  function J0(n, e, t) {
    const r = n + e - t, s = Math.abs(r - n), a = Math.abs(r - e), f = Math.abs(r - t);
    return s <= a && s <= f ? n : a <= f ? e : t;
  }
  function X0(n, e, t, r, s, a) {
    switch (n) {
      case 0:
        $f(e, t, s);
        break;
      case 1:
        Kf(e, t, s, a);
        break;
      case 2:
        Yf(e, t, r, s);
        break;
      case 3:
        Jf(e, t, r, s, a);
        break;
      case 4:
        Xf(e, t, r, s, a);
        break;
      default:
        throw new Error(`Unsupported filter: ${n}`);
    }
  }
  const Z0 = new Uint16Array([
    255
  ]), Q0 = new Uint8Array(Z0.buffer), e5 = Q0[0] === 255;
  function t5(n) {
    const { data: e, width: t, height: r, channels: s, depth: a } = n, f = [
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
      const w = f[g], L = Math.ceil((t - w.x) / w.xStep), p = Math.ceil((r - w.y) / w.yStep);
      if (L <= 0 || p <= 0) continue;
      const j = L * l, E = new Uint8Array(j);
      for (let O = 0; O < p; O++) {
        const S = e[d++], $ = e.subarray(d, d + j);
        d += j;
        const V = new Uint8Array(j);
        X0(S, $, V, E, j, l), E.set(V);
        for (let B = 0; B < L; B++) {
          const ue = w.x + B * w.xStep, Ne = w.y + O * w.yStep;
          if (!(ue >= t || Ne >= r)) for (let fe = 0; fe < l; fe++) u[(Ne * t + ue) * l + fe] = V[B * l + fe];
        }
      }
    }
    if (a === 16) {
      const g = new Uint16Array(u.buffer);
      if (e5) for (let w = 0; w < g.length; w++) g[w] = n5(g[w]);
      return g;
    } else return u;
  }
  function n5(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const r5 = new Uint16Array([
    255
  ]), i5 = new Uint8Array(r5.buffer), a5 = i5[0] === 255, s5 = new Uint8Array(0);
  function Jc(n) {
    const { data: e, width: t, height: r, channels: s, depth: a } = n, f = Math.ceil(a / 8) * s, l = Math.ceil(a / 8 * s * t), u = new Uint8Array(r * l);
    let d = s5, g = 0, w, L;
    for (let p = 0; p < r; p++) {
      switch (w = e.subarray(g + 1, g + 1 + l), L = u.subarray(p * l, (p + 1) * l), e[g]) {
        case 0:
          $f(w, L, l);
          break;
        case 1:
          Kf(w, L, l, f);
          break;
        case 2:
          Yf(w, L, d, l);
          break;
        case 3:
          Jf(w, L, d, l, f);
          break;
        case 4:
          Xf(w, L, d, l, f);
          break;
        default:
          throw new Error(`Unsupported filter: ${e[g]}`);
      }
      d = L, g += l + 1;
    }
    if (a === 16) {
      const p = new Uint16Array(u.buffer);
      if (a5) for (let j = 0; j < p.length; j++) p[j] = o5(p[j]);
      return p;
    } else return u;
  }
  function o5(n) {
    return (n & 255) << 8 | n >> 8 & 255;
  }
  const Rs = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
  function Xc(n) {
    if (!l5(n.readBytes(Rs.length))) throw new Error("wrong PNG signature");
  }
  function l5(n) {
    if (n.length < Rs.length) return false;
    for (let e = 0; e < Rs.length; e++) if (n[e] !== Rs[e]) return false;
    return true;
  }
  const c5 = "tEXt", u5 = 0, Zf = new TextDecoder("latin1");
  function f5(n) {
    if (d5(n), n.length === 0 || n.length > 79) throw new Error("keyword length must be between 1 and 79");
  }
  const h5 = /^[\u0000-\u00FF]*$/;
  function d5(n) {
    if (!h5.test(n)) throw new Error("invalid latin1 text");
  }
  function p5(n, e, t) {
    const r = Qf(e);
    n[r] = m5(e, t - r.length - 1);
  }
  function Qf(n) {
    for (n.mark(); n.readByte() !== u5; ) ;
    const e = n.offset;
    n.reset();
    const t = Zf.decode(n.readBytes(e - n.offset - 1));
    return n.skip(1), f5(t), t;
  }
  function m5(n, e) {
    return Zf.decode(n.readBytes(e));
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
  }, Cs = {
    NONE: 0,
    BACKGROUND: 1,
    PREVIOUS: 2
  }, Wo = {
    SOURCE: 0,
    OVER: 1
  };
  class g5 extends _l {
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
        case c5:
          p5(this._png.text, this, e);
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
      e.width = this.readUint32(), e.height = this.readUint32(), e.depth = b5(this.readUint8());
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
      const t = Qf(this), r = this.readUint8();
      if (r !== zo.DEFLATE) throw new Error(`Unsupported iCCP compression method: ${r}`);
      const s = this.readBytes(e - t.length - 2);
      this._png.iccEmbeddedProfile = {
        name: t,
        profile: $0(s)
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
        case Cs.NONE:
          break;
        case Cs.BACKGROUND:
          for (let s = 0; s < this._png.height; s++) for (let a = 0; a < this._png.width; a++) {
            const f = (s * e.width + a) * this._png.channels;
            for (let l = 0; l < this._png.channels; l++) r.data[f + l] = 0;
          }
          break;
        case Cs.PREVIOUS:
          r.data.set(t.data);
          break;
        default:
          throw new Error("Unknown disposeOp");
      }
    }
    addFrameDataToCanvas(e, t) {
      const r = 1 << this._png.depth, s = (a, f) => {
        const l = ((a + t.yOffset) * this._png.width + t.xOffset + f) * this._png.channels, u = (a * t.width + f) * this._png.channels;
        return {
          index: l,
          frameIndex: u
        };
      };
      switch (t.blendOp) {
        case Wo.SOURCE:
          for (let a = 0; a < t.height; a++) for (let f = 0; f < t.width; f++) {
            const { index: l, frameIndex: u } = s(a, f);
            for (let d = 0; d < this._png.channels; d++) e.data[l + d] = t.data[u + d];
          }
          break;
        case Wo.OVER:
          for (let a = 0; a < t.height; a++) for (let f = 0; f < t.width; f++) {
            const { index: l, frameIndex: u } = s(a, f);
            for (let d = 0; d < this._png.channels; d++) {
              const g = t.data[u + this._png.channels - 1] / r, w = d % (this._png.channels - 1) === 0 ? 1 : t.data[u + d], L = Math.floor(g * w + (1 - g) * e.data[l + d]);
              e.data[l + d] += L;
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
      else if (this._interlaceMethod === Ho.ADAM7) this._png.data = t5({
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
        disposeOp: Cs.NONE,
        blendOp: Wo.SOURCE,
        data: e
      }), this._inflator = new $c(), this._writingDataChunks = false;
    }
  }
  function b5(n) {
    if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16) throw new Error(`invalid bit depth: ${n}`);
    return n;
  }
  var Qc;
  (function(n) {
    n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
  })(Qc || (Qc = {}));
  function v5(n, e) {
    return new g5(n, e).decode();
  }
  var Je = /* @__PURE__ */ function() {
    return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
  }();
  function Vo() {
    Je.console && typeof Je.console.log == "function" && Je.console.log.apply(Je.console, arguments);
  }
  var Pt = {
    log: Vo,
    warn: function(n) {
      Je.console && (typeof Je.console.warn == "function" ? Je.console.warn.apply(Je.console, arguments) : Vo.call(null, arguments));
    },
    error: function(n) {
      Je.console && (typeof Je.console.error == "function" ? Je.console.error.apply(Je.console, arguments) : Vo(n));
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
  function Is(n) {
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
    e = e || n.name || "download", s.download = e, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? eu(s.href) ? Go(n, e, t) : Is(s, s.target = "_blank") : Is(s)) : (s.href = r.createObjectURL(n), setTimeout(function() {
      r.revokeObjectURL(s.href);
    }, 4e4), setTimeout(function() {
      Is(s);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function(n, e, t) {
    if (e = e || n.name || "download", typeof n == "string") if (eu(n)) Go(n, e, t);
    else {
      var r = document.createElement("a");
      r.href = n, r.target = "_blank", setTimeout(function() {
        Is(r);
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
    var s = n.type === "application/octet-stream", a = /constructor/i.test(Je.HTMLElement) || Je.safari, f = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((f || s && a) && (typeof FileReader > "u" ? "undefined" : Lt(FileReader)) === "object") {
      var l = new FileReader();
      l.onloadend = function() {
        var g = l.result;
        g = f ? g : g.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = g : location = g, r = null;
      }, l.readAsDataURL(n);
    } else {
      var u = Je.URL || Je.webkitURL, d = u.createObjectURL(n);
      r ? r.location = d : location.href = d, r = null, setTimeout(function() {
        u.revokeObjectURL(d);
      }, 4e4);
    }
  });
  function eh(n) {
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
      var s = t[r].re, a = t[r].process, f = s.exec(n);
      f && (e = a(f), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = true);
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toHex = function() {
      var l = this.r.toString(16), u = this.g.toString(16), d = this.b.toString(16);
      return l.length == 1 && (l = "0" + l), u.length == 1 && (u = "0" + u), d.length == 1 && (d = "0" + d), "#" + l + u + d;
    };
  }
  var Os = Je.atob.bind(Je), tu = Je.btoa.bind(Je);
  function $o(n, e) {
    var t = n[0], r = n[1], s = n[2], a = n[3];
    t = mn(t, r, s, a, e[0], 7, -680876936), a = mn(a, t, r, s, e[1], 12, -389564586), s = mn(s, a, t, r, e[2], 17, 606105819), r = mn(r, s, a, t, e[3], 22, -1044525330), t = mn(t, r, s, a, e[4], 7, -176418897), a = mn(a, t, r, s, e[5], 12, 1200080426), s = mn(s, a, t, r, e[6], 17, -1473231341), r = mn(r, s, a, t, e[7], 22, -45705983), t = mn(t, r, s, a, e[8], 7, 1770035416), a = mn(a, t, r, s, e[9], 12, -1958414417), s = mn(s, a, t, r, e[10], 17, -42063), r = mn(r, s, a, t, e[11], 22, -1990404162), t = mn(t, r, s, a, e[12], 7, 1804603682), a = mn(a, t, r, s, e[13], 12, -40341101), s = mn(s, a, t, r, e[14], 17, -1502002290), t = gn(t, r = mn(r, s, a, t, e[15], 22, 1236535329), s, a, e[1], 5, -165796510), a = gn(a, t, r, s, e[6], 9, -1069501632), s = gn(s, a, t, r, e[11], 14, 643717713), r = gn(r, s, a, t, e[0], 20, -373897302), t = gn(t, r, s, a, e[5], 5, -701558691), a = gn(a, t, r, s, e[10], 9, 38016083), s = gn(s, a, t, r, e[15], 14, -660478335), r = gn(r, s, a, t, e[4], 20, -405537848), t = gn(t, r, s, a, e[9], 5, 568446438), a = gn(a, t, r, s, e[14], 9, -1019803690), s = gn(s, a, t, r, e[3], 14, -187363961), r = gn(r, s, a, t, e[8], 20, 1163531501), t = gn(t, r, s, a, e[13], 5, -1444681467), a = gn(a, t, r, s, e[2], 9, -51403784), s = gn(s, a, t, r, e[7], 14, 1735328473), t = bn(t, r = gn(r, s, a, t, e[12], 20, -1926607734), s, a, e[5], 4, -378558), a = bn(a, t, r, s, e[8], 11, -2022574463), s = bn(s, a, t, r, e[11], 16, 1839030562), r = bn(r, s, a, t, e[14], 23, -35309556), t = bn(t, r, s, a, e[1], 4, -1530992060), a = bn(a, t, r, s, e[4], 11, 1272893353), s = bn(s, a, t, r, e[7], 16, -155497632), r = bn(r, s, a, t, e[10], 23, -1094730640), t = bn(t, r, s, a, e[13], 4, 681279174), a = bn(a, t, r, s, e[0], 11, -358537222), s = bn(s, a, t, r, e[3], 16, -722521979), r = bn(r, s, a, t, e[6], 23, 76029189), t = bn(t, r, s, a, e[9], 4, -640364487), a = bn(a, t, r, s, e[12], 11, -421815835), s = bn(s, a, t, r, e[15], 16, 530742520), t = vn(t, r = bn(r, s, a, t, e[2], 23, -995338651), s, a, e[0], 6, -198630844), a = vn(a, t, r, s, e[7], 10, 1126891415), s = vn(s, a, t, r, e[14], 15, -1416354905), r = vn(r, s, a, t, e[5], 21, -57434055), t = vn(t, r, s, a, e[12], 6, 1700485571), a = vn(a, t, r, s, e[3], 10, -1894986606), s = vn(s, a, t, r, e[10], 15, -1051523), r = vn(r, s, a, t, e[1], 21, -2054922799), t = vn(t, r, s, a, e[8], 6, 1873313359), a = vn(a, t, r, s, e[15], 10, -30611744), s = vn(s, a, t, r, e[6], 15, -1560198380), r = vn(r, s, a, t, e[13], 21, 1309151649), t = vn(t, r, s, a, e[4], 6, -145523070), a = vn(a, t, r, s, e[11], 10, -1120210379), s = vn(s, a, t, r, e[2], 15, 718787259), r = vn(r, s, a, t, e[9], 21, -343485551), n[0] = ri(t, n[0]), n[1] = ri(r, n[1]), n[2] = ri(s, n[2]), n[3] = ri(a, n[3]);
  }
  function Xs(n, e, t, r, s, a) {
    return e = ri(ri(e, n), ri(r, a)), ri(e << s | e >>> 32 - s, t);
  }
  function mn(n, e, t, r, s, a, f) {
    return Xs(e & t | ~e & r, n, e, s, a, f);
  }
  function gn(n, e, t, r, s, a, f) {
    return Xs(e & r | t & ~r, n, e, s, a, f);
  }
  function bn(n, e, t, r, s, a, f) {
    return Xs(e ^ t ^ r, n, e, s, a, f);
  }
  function vn(n, e, t, r, s, a, f) {
    return Xs(t ^ (e | ~r), n, e, s, a, f);
  }
  function th(n) {
    var e, t = n.length, r = [
      1732584193,
      -271733879,
      -1732584194,
      271733878
    ];
    for (e = 64; e <= n.length; e += 64) $o(r, w5(n.substring(e - 64, e)));
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
  function w5(n) {
    var e, t = [];
    for (e = 0; e < 64; e += 4) t[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
    return t;
  }
  var nu = "0123456789abcdef".split("");
  function y5(n) {
    for (var e = "", t = 0; t < 4; t++) e += nu[n >> 8 * t + 4 & 15] + nu[n >> 8 * t & 15];
    return e;
  }
  function x5(n) {
    return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
  }
  function cl(n) {
    return th(n).map(x5).join("");
  }
  var N5 = function(n) {
    for (var e = 0; e < n.length; e++) n[e] = y5(n[e]);
    return n.join("");
  }(th("hello")) != "5d41402abc4b2a76b9719d911017c592";
  function ri(n, e) {
    if (N5) {
      var t = (65535 & n) + (65535 & e);
      return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    return n + e & 4294967295;
  }
  function ul(n, e) {
    var t, r, s, a;
    if (n !== t) {
      for (var f = (s = n, a = 1 + (256 / n.length | 0), new Array(a + 1).join(s)), l = [], u = 0; u < 256; u++) l[u] = u;
      var d = 0;
      for (u = 0; u < 256; u++) {
        var g = l[u];
        d = (d + g + f.charCodeAt(u)) % 256, l[u] = l[d], l[d] = g;
      }
      t = n, r = l;
    } else l = r;
    var w = e.length, L = 0, p = 0, j = "";
    for (u = 0; u < w; u++) p = (p + (g = l[L = (L + 1) % 256])) % 256, l[L] = l[p], l[p] = g, f = l[(l[L] + l[p]) % 256], j += String.fromCharCode(e.charCodeAt(u) ^ f);
    return j;
  }
  var ru = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
  };
  function Ji(n, e, t, r) {
    this.v = 1, this.r = 2;
    var s = 192;
    n.forEach(function(l) {
      if (ru.perm !== void 0) throw new Error("Invalid permission: " + l);
      s += ru[l];
    }), this.padding = "(\xBFN^Nu\x8AAd\0NV\xFF\xFA\b..\0\xB6\xD0h>\x80/\f\xA9\xFEdSiz";
    var a = (e + this.padding).substr(0, 32), f = (t + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(a, f), this.P = -(1 + (255 ^ s)), this.encryptionKey = cl(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = ul(this.encryptionKey, this.padding);
  }
  function Xi(n) {
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
          var f = e[t][a];
          try {
            f[0].apply(n, r);
          } catch (l) {
            Je.console && Pt.error("jsPDF PubSub Error", l.message, l);
          }
          f[1] && s.push(a);
        }
        s.length && s.forEach(this.unsubscribe);
      }
    }, this.getTopics = function() {
      return e;
    };
  }
  function Ws(n) {
    if (!(this instanceof Ws)) return new Ws(n);
    var e = "opacity,stroke-opacity".split(",");
    for (var t in n) n.hasOwnProperty(t) && e.indexOf(t) >= 0 && (this[t] = n[t]);
    this.id = "", this.objectNumber = -1;
  }
  function nh(n, e) {
    this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1;
  }
  function Li(n, e, t, r, s) {
    if (!(this instanceof Li)) return new Li(n, e, t, r, s);
    this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = t, nh.call(this, r, s);
  }
  function Zi(n, e, t, r, s) {
    if (!(this instanceof Zi)) return new Zi(n, e, t, r, s);
    this.boundingBox = n, this.xStep = e, this.yStep = t, this.stream = "", this.cloneIndex = 0, nh.call(this, r, s);
  }
  function ze(n) {
    var e, t = typeof arguments[0] == "string" ? arguments[0] : "p", r = arguments[1], s = arguments[2], a = arguments[3], f = [], l = 1, u = 16, d = "S", g = null;
    Lt(n = n || {}) === "object" && (t = n.orientation, r = n.unit || r, s = n.format || s, a = n.compress || n.compressPdf || a, (g = n.encryption || null) !== null && (g.userPassword = g.userPassword || "", g.ownerPassword = g.ownerPassword || "", g.userPermissions = g.userPermissions || []), l = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (u = n.floatPrecision), d = n.defaultPathOperation || "S"), f = n.filters || (a === true ? [
      "FlateEncode"
    ] : f), r = r || "mm", t = ("" + (t || "P")).toLowerCase();
    var w = n.putOnlyUsedFonts || false, L = {}, p = {
      internal: {},
      __private__: {}
    };
    p.__private__.PubSub = iu;
    var j = "1.3", E = p.__private__.getPdfVersion = function() {
      return j;
    };
    p.__private__.setPdfVersion = function(c) {
      j = c;
    };
    var O = {
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
      return O;
    };
    var S = p.__private__.getPageFormat = function(c) {
      return O[c];
    };
    s = s || "a4";
    var $ = "compat", V = "advanced", B = $;
    function ue() {
      this.saveGraphicsState(), P(new Ke(it, 0, 0, -it, 0, pi() * it).toString() + " cm"), this.setFontSize(this.getFontSize() / it), d = "n", B = V;
    }
    function Ne() {
      this.restoreGraphicsState(), d = "S", B = $;
    }
    var fe = p.__private__.combineFontStyleAndFontWeight = function(c, b) {
      if (c == "bold" && b == "normal" || c == "bold" && b == 400 || c == "normal" && b == "italic" || c == "bold" && b == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
      return b && (c = b == 400 || b === "normal" ? c === "italic" ? "italic" : "normal" : b != 700 && b !== "bold" || c !== "normal" ? (b == 700 ? "bold" : b) + "" + c : "bold"), c;
    };
    p.advancedAPI = function(c) {
      var b = B === $;
      return b && ue.call(this), typeof c != "function" || (c(this), b && Ne.call(this)), this;
    }, p.compatAPI = function(c) {
      var b = B === V;
      return b && Ne.call(this), typeof c != "function" || (c(this), b && ue.call(this)), this;
    }, p.isAdvancedAPI = function() {
      return B === V;
    };
    var ee, z = function(c) {
      if (B !== V) throw new Error(c + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
    }, ie = p.roundToPrecision = p.__private__.roundToPrecision = function(c, b) {
      var R = e || b;
      if (isNaN(c) || isNaN(R)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
      return c.toFixed(R).replace(/0+$/, "");
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
    var A = p.f2 = p.__private__.f2 = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f2");
      return ie(c, 2);
    }, I = p.__private__.f3 = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f3");
      return ie(c, 3);
    }, H = p.scale = p.__private__.scale = function(c) {
      if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.scale");
      return B === $ ? c * it : B === V ? c : void 0;
    }, W = function(c) {
      return H(function(b) {
        return B === $ ? pi() - b : B === V ? b : void 0;
      }(c));
    };
    p.__private__.setPrecision = p.setPrecision = function(c) {
      typeof parseInt(c, 10) == "number" && (e = parseInt(c, 10));
    };
    var ce, he = "00000000000000000000000000000000", xe = p.__private__.getFileId = function() {
      return he;
    }, oe = p.__private__.setFileId = function(c) {
      return he = c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c) ? c.toUpperCase() : he.split("").map(function() {
        return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
      }).join(""), g !== null && (Zt = new Ji(g.userPermissions, g.userPassword, g.ownerPassword, he)), he;
    };
    p.setFileId = function(c) {
      return oe(c), this;
    }, p.getFileId = function() {
      return xe();
    };
    var ne = p.__private__.convertDateToPDFDate = function(c) {
      var b = c.getTimezoneOffset(), R = b < 0 ? "+" : "-", U = Math.floor(Math.abs(b / 60)), Q = Math.abs(b % 60), me = [
        R,
        q(U),
        "'",
        q(Q),
        "'"
      ].join("");
      return [
        "D:",
        c.getFullYear(),
        q(c.getMonth() + 1),
        q(c.getDate()),
        q(c.getHours()),
        q(c.getMinutes()),
        q(c.getSeconds()),
        me
      ].join("");
    }, ke = p.__private__.convertPDFDateToDate = function(c) {
      var b = parseInt(c.substr(2, 4), 10), R = parseInt(c.substr(6, 2), 10) - 1, U = parseInt(c.substr(8, 2), 10), Q = parseInt(c.substr(10, 2), 10), me = parseInt(c.substr(12, 2), 10), _e = parseInt(c.substr(14, 2), 10);
      return new Date(b, R, U, Q, me, _e, 0);
    }, Le = p.__private__.setCreationDate = function(c) {
      var b;
      if (c === void 0 && (c = /* @__PURE__ */ new Date()), c instanceof Date) b = ne(c);
      else {
        if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(c)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
        b = c;
      }
      return ce = b;
    }, N = p.__private__.getCreationDate = function(c) {
      var b = ce;
      return c === "jsDate" && (b = ke(ce)), b;
    };
    p.setCreationDate = function(c) {
      return Le(c), this;
    }, p.getCreationDate = function(c) {
      return N(c);
    };
    var D, q = p.__private__.padd2 = function(c) {
      return ("0" + parseInt(c)).slice(-2);
    }, K = p.__private__.padd2Hex = function(c) {
      return ("00" + (c = c.toString())).substr(c.length);
    }, X = 0, T = [], J = [], Z = 0, se = [], le = [], we = false, ve = J;
    p.__private__.setCustomOutputDestination = function(c) {
      we = true, ve = c;
    };
    var Re = function(c) {
      we || (ve = c);
    };
    p.__private__.resetCustomOutputDestination = function() {
      we = false, ve = J;
    };
    var P = p.__private__.out = function(c) {
      return c = c.toString(), Z += c.length + 1, ve.push(c), ve;
    }, Pe = p.__private__.write = function(c) {
      return P(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, " "));
    }, Xe = p.__private__.getArrayBuffer = function(c) {
      for (var b = c.length, R = new ArrayBuffer(b), U = new Uint8Array(R); b--; ) U[b] = c.charCodeAt(b);
      return R;
    }, qe = [
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
      return qe;
    };
    var ye = n.fontSize || 16;
    p.__private__.setFontSize = p.setFontSize = function(c) {
      return ye = B === V ? c / it : c, this;
    };
    var Fe, Ie = p.__private__.getFontSize = p.getFontSize = function() {
      return B === $ ? ye : ye * it;
    }, We = n.R2L || false;
    p.__private__.setR2L = p.setR2L = function(c) {
      return We = c, this;
    }, p.__private__.getR2L = p.getR2L = function() {
      return We;
    };
    var Ve, yt = p.__private__.setZoomMode = function(c) {
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) Fe = c;
      else if (isNaN(c)) {
        if ([
          void 0,
          null,
          "fullwidth",
          "fullheight",
          "fullpage",
          "original"
        ].indexOf(c) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + c + '" is not recognized.');
        Fe = c;
      } else Fe = parseInt(c, 10);
    };
    p.__private__.getZoomMode = function() {
      return Fe;
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
      Ve = c;
    };
    p.__private__.getPageMode = function() {
      return Ve;
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
    }, p.__private__.setDisplayMode = p.setDisplayMode = function(c, b, R) {
      return yt(c), dt(b), tt(R), this;
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
    var Te, it, He, Ut, gt, lt = {}, ct = {}, Ft = [], Ge = {}, Ct = {}, Ye = {}, nt = {}, Mt = null, ut = 0, $e = [], xt = new iu(p), si = n.hotfixes || [], dn = {}, vr = {}, ar = [], Ke = function c(b, R, U, Q, me, _e) {
      if (!(this instanceof c)) return new c(b, R, U, Q, me, _e);
      isNaN(b) && (b = 1), isNaN(R) && (R = 0), isNaN(U) && (U = 0), isNaN(Q) && (Q = 1), isNaN(me) && (me = 0), isNaN(_e) && (_e = 0), this._matrix = [
        b,
        R,
        U,
        Q,
        me,
        _e
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
      var b = c.sx * this.sx + c.shy * this.shx, R = c.sx * this.shy + c.shy * this.sy, U = c.shx * this.sx + c.sy * this.shx, Q = c.shx * this.shy + c.sy * this.sy, me = c.tx * this.sx + c.ty * this.shx + this.tx, _e = c.tx * this.shy + c.ty * this.sy + this.ty;
      return new Ke(b, R, U, Q, me, _e);
    }, Ke.prototype.decompose = function() {
      var c = this.sx, b = this.shy, R = this.shx, U = this.sy, Q = this.tx, me = this.ty, _e = Math.sqrt(c * c + b * b), Me = (c /= _e) * R + (b /= _e) * U;
      R -= c * Me, U -= b * Me;
      var Be = Math.sqrt(R * R + U * U);
      return Me /= Be, c * (U /= Be) < b * (R /= Be) && (c = -c, b = -b, Me = -Me, _e = -_e), {
        scale: new Ke(_e, 0, 0, Be, 0, 0),
        translate: new Ke(1, 0, 0, 1, Q, me),
        rotate: new Ke(c, b, -b, c, 0, 0),
        skew: new Ke(1, 0, Me, 1, 0, 0)
      };
    }, Ke.prototype.toString = function(c) {
      return this.join(" ");
    }, Ke.prototype.inversed = function() {
      var c = this.sx, b = this.shy, R = this.shx, U = this.sy, Q = this.tx, me = this.ty, _e = 1 / (c * U - b * R), Me = U * _e, Be = -b * _e, Ze = -R * _e, at = c * _e;
      return new Ke(Me, Be, Ze, at, -Me * Q - Ze * me, -Be * Q - at * me);
    }, Ke.prototype.applyToPoint = function(c) {
      var b = c.x * this.sx + c.y * this.shx + this.tx, R = c.x * this.shy + c.y * this.sy + this.ty;
      return new Lr(b, R);
    }, Ke.prototype.applyToRectangle = function(c) {
      var b = this.applyToPoint(c), R = this.applyToPoint(new Lr(c.x + c.w, c.y + c.h));
      return new da(b.x, b.y, R.x - b.x, R.y - b.y);
    }, Ke.prototype.clone = function() {
      var c = this.sx, b = this.shy, R = this.shx, U = this.sy, Q = this.tx, me = this.ty;
      return new Ke(c, b, R, U, Q, me);
    }, p.Matrix = Ke;
    var wr = p.matrixMult = function(c, b) {
      return b.multiply(c);
    }, yr = new Ke(1, 0, 0, 1, 0, 0);
    p.unitMatrix = p.identityMatrix = yr;
    var On = function(c, b) {
      if (!Ct[c]) {
        var R = (b instanceof Li ? "Sh" : "P") + (Object.keys(Ge).length + 1).toString(10);
        b.id = R, Ct[c] = R, Ge[R] = b, xt.publish("addPattern", b);
      }
    };
    p.ShadingPattern = Li, p.TilingPattern = Zi, p.addShadingPattern = function(c, b) {
      return z("addShadingPattern()"), On(c, b), this;
    }, p.beginTilingPattern = function(c) {
      z("beginTilingPattern()"), pa(c.boundingBox[0], c.boundingBox[1], c.boundingBox[2] - c.boundingBox[0], c.boundingBox[3] - c.boundingBox[1], c.matrix);
    }, p.endTilingPattern = function(c, b) {
      z("endTilingPattern()"), b.stream = le[D].join(`
`), On(c, b), xt.publish("endTilingPattern", b), ar.pop().restore();
    };
    var Dn, Dt = p.__private__.newObject = function() {
      var c = an();
      return on(c, true), c;
    }, an = p.__private__.newObjectDeferred = function() {
      return X++, T[X] = function() {
        return Z;
      }, X;
    }, on = function(c, b) {
      return b = typeof b == "boolean" && b, T[c] = Z, b && P(c + " 0 obj"), c;
    }, oi = p.__private__.newAdditionalObject = function() {
      var c = {
        objId: an(),
        content: ""
      };
      return se.push(c), c;
    }, qr = an(), Kn = an(), sr = p.__private__.decodeColorString = function(c) {
      var b = c.split(" ");
      if (b.length !== 2 || b[1] !== "g" && b[1] !== "G") b.length !== 5 || b[4] !== "k" && b[4] !== "K" || (b = [
        (1 - b[0]) * (1 - b[3]),
        (1 - b[1]) * (1 - b[3]),
        (1 - b[2]) * (1 - b[3]),
        "r"
      ]);
      else {
        var R = parseFloat(b[0]);
        b = [
          R,
          R,
          R,
          "r"
        ];
      }
      for (var U = "#", Q = 0; Q < 3; Q++) U += ("0" + Math.floor(255 * parseFloat(b[Q])).toString(16)).slice(-2);
      return U;
    }, Yn = p.__private__.encodeColorString = function(c) {
      var b;
      typeof c == "string" && (c = {
        ch1: c
      });
      var R = c.ch1, U = c.ch2, Q = c.ch3, me = c.ch4, _e = c.pdfColorType === "draw" ? [
        "G",
        "RG",
        "K"
      ] : [
        "g",
        "rg",
        "k"
      ];
      if (typeof R == "string" && R.charAt(0) !== "#") {
        var Me = new eh(R);
        if (Me.ok) R = Me.toHex();
        else if (!/^\d*\.?\d*$/.test(R)) throw new Error('Invalid color "' + R + '" passed to jsPDF.encodeColorString.');
      }
      if (typeof R == "string" && /^#[0-9A-Fa-f]{3}$/.test(R) && (R = "#" + R[1] + R[1] + R[2] + R[2] + R[3] + R[3]), typeof R == "string" && /^#[0-9A-Fa-f]{6}$/.test(R)) {
        var Be = parseInt(R.substr(1), 16);
        R = Be >> 16 & 255, U = Be >> 8 & 255, Q = 255 & Be;
      }
      if (U === void 0 || me === void 0 && R === U && U === Q) b = typeof R == "string" ? R + " " + _e[0] : c.precision === 2 ? A(R / 255) + " " + _e[0] : I(R / 255) + " " + _e[0];
      else if (me === void 0 || Lt(me) === "object") {
        if (me && !isNaN(me.a) && me.a === 0) return [
          "1.",
          "1.",
          "1.",
          _e[1]
        ].join(" ");
        b = typeof R == "string" ? [
          R,
          U,
          Q,
          _e[1]
        ].join(" ") : c.precision === 2 ? [
          A(R / 255),
          A(U / 255),
          A(Q / 255),
          _e[1]
        ].join(" ") : [
          I(R / 255),
          I(U / 255),
          I(Q / 255),
          _e[1]
        ].join(" ");
      } else b = typeof R == "string" ? [
        R,
        U,
        Q,
        me,
        _e[2]
      ].join(" ") : c.precision === 2 ? [
        A(R),
        A(U),
        A(Q),
        A(me),
        _e[2]
      ].join(" ") : [
        I(R),
        I(U),
        I(Q),
        I(me),
        _e[2]
      ].join(" ");
      return b;
    }, Jn = p.__private__.getFilters = function() {
      return f;
    }, Tn = p.__private__.putStream = function(c) {
      var b = (c = c || {}).data || "", R = c.filters || Jn(), U = c.alreadyAppliedFilters || [], Q = c.addLength1 || false, me = b.length, _e = c.objectId, Me = function(Qt) {
        return Qt;
      };
      if (g !== null && _e === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
      g !== null && (Me = Zt.encryptor(_e, 0));
      var Be = {};
      R === true && (R = [
        "FlateEncode"
      ]);
      var Ze = c.additionalKeyValues || [], at = (Be = ze.API.processDataByFilters !== void 0 ? ze.API.processDataByFilters(b, R) : {
        data: b,
        reverseChain: []
      }).reverseChain + (Array.isArray(U) ? U.join(" ") : U.toString());
      if (Be.data.length !== 0 && (Ze.push({
        key: "Length",
        value: Be.data.length
      }), Q === true && Ze.push({
        key: "Length1",
        value: me
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
          for (var Ot = [], Jt = 0; Jt < Be.reverseChain.split("/").length - 1; Jt += 1) Ot.push("null");
          Ot.push(Ze[bt].value), Ze[bt].value = "[" + Ot.join(" ") + "]";
        }
      }
      P("<<");
      for (var It = 0; It < Ze.length; It++) P("/" + Ze[It].key + " " + Ze[It].value);
      P(">>"), Be.data.length !== 0 && (P("stream"), P(Me(Be.data)), P("endstream"));
    }, li = p.__private__.putPage = function(c) {
      var b = c.number, R = c.data, U = c.objId, Q = c.contentsObjId;
      on(U, true), P("<</Type /Page"), P("/Parent " + c.rootDictionaryObjId + " 0 R"), P("/Resources " + c.resourceDictionaryObjId + " 0 R"), P("/MediaBox [" + parseFloat(ee(c.mediaBox.bottomLeftX)) + " " + parseFloat(ee(c.mediaBox.bottomLeftY)) + " " + ee(c.mediaBox.topRightX) + " " + ee(c.mediaBox.topRightY) + "]"), c.cropBox !== null && P("/CropBox [" + ee(c.cropBox.bottomLeftX) + " " + ee(c.cropBox.bottomLeftY) + " " + ee(c.cropBox.topRightX) + " " + ee(c.cropBox.topRightY) + "]"), c.bleedBox !== null && P("/BleedBox [" + ee(c.bleedBox.bottomLeftX) + " " + ee(c.bleedBox.bottomLeftY) + " " + ee(c.bleedBox.topRightX) + " " + ee(c.bleedBox.topRightY) + "]"), c.trimBox !== null && P("/TrimBox [" + ee(c.trimBox.bottomLeftX) + " " + ee(c.trimBox.bottomLeftY) + " " + ee(c.trimBox.topRightX) + " " + ee(c.trimBox.topRightY) + "]"), c.artBox !== null && P("/ArtBox [" + ee(c.artBox.bottomLeftX) + " " + ee(c.artBox.bottomLeftY) + " " + ee(c.artBox.topRightX) + " " + ee(c.artBox.topRightY) + "]"), typeof c.userUnit == "number" && c.userUnit !== 1 && P("/UserUnit " + c.userUnit), xt.publish("putPage", {
        objId: U,
        pageContext: $e[b],
        pageNumber: b,
        page: R
      }), P("/Contents " + Q + " 0 R"), P(">>"), P("endobj");
      var me = R.join(`
`);
      return B === V && (me += `
Q`), on(Q, true), Tn({
        data: me,
        filters: Jn(),
        objectId: Q
      }), P("endobj"), U;
    }, or = p.__private__.putPages = function() {
      var c, b, R = [];
      for (c = 1; c <= ut; c++) $e[c].objId = an(), $e[c].contentsObjId = an();
      for (c = 1; c <= ut; c++) R.push(li({
        number: c,
        data: le[c],
        objId: $e[c].objId,
        contentsObjId: $e[c].contentsObjId,
        mediaBox: $e[c].mediaBox,
        cropBox: $e[c].cropBox,
        bleedBox: $e[c].bleedBox,
        trimBox: $e[c].trimBox,
        artBox: $e[c].artBox,
        userUnit: $e[c].userUnit,
        rootDictionaryObjId: qr,
        resourceDictionaryObjId: Kn
      }));
      on(qr, true), P("<</Type /Pages");
      var U = "/Kids [";
      for (b = 0; b < ut; b++) U += R[b] + " 0 R ";
      P(U + "]"), P("/Count " + ut), P(">>"), P("endobj"), xt.publish("postPutPages");
    }, ci = function(c) {
      xt.publish("putFont", {
        font: c,
        out: P,
        newObject: Dt,
        putStream: Tn
      }), c.isAlreadyPutted !== true && (c.objectNumber = Dt(), P("<<"), P("/Type /Font"), P("/BaseFont /" + Xi(c.postScriptName)), P("/Subtype /Type1"), typeof c.encoding == "string" && P("/Encoding /" + c.encoding), P("/FirstChar 32"), P("/LastChar 255"), P(">>"), P("endobj"));
    }, Fi = function(c) {
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
      var R = c.pages[1].join(`
`);
      Tn({
        data: R,
        additionalKeyValues: b,
        objectId: c.objectNumber
      }), P("endobj");
    }, Mi = function(c, b) {
      b || (b = 21);
      var R = Dt(), U = function(_e, Me) {
        var Be, Ze = [], at = 1 / (Me - 1);
        for (Be = 0; Be < 1; Be += at) Ze.push(Be);
        if (Ze.push(1), _e[0].offset != 0) {
          var bt = {
            offset: 0,
            color: _e[0].color
          };
          _e.unshift(bt);
        }
        if (_e[_e.length - 1].offset != 1) {
          var Ot = {
            offset: 1,
            color: _e[_e.length - 1].color
          };
          _e.push(Ot);
        }
        for (var Jt = "", It = 0, Qt = 0; Qt < Ze.length; Qt++) {
          for (Be = Ze[Qt]; Be > _e[It + 1].offset; ) It++;
          var Xt = _e[It].offset, ln = (Be - Xt) / (_e[It + 1].offset - Xt), Pr = _e[It].color, Zn = _e[It + 1].color;
          Jt += K(Math.round((1 - ln) * Pr[0] + ln * Zn[0]).toString(16)) + K(Math.round((1 - ln) * Pr[1] + ln * Zn[1]).toString(16)) + K(Math.round((1 - ln) * Pr[2] + ln * Zn[2]).toString(16));
        }
        return Jt.trim();
      }(c.colors, b), Q = [];
      Q.push({
        key: "FunctionType",
        value: "0"
      }), Q.push({
        key: "Domain",
        value: "[0.0 1.0]"
      }), Q.push({
        key: "Size",
        value: "[" + b + "]"
      }), Q.push({
        key: "BitsPerSample",
        value: "8"
      }), Q.push({
        key: "Range",
        value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
      }), Q.push({
        key: "Decode",
        value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
      }), Tn({
        data: U,
        additionalKeyValues: Q,
        alreadyAppliedFilters: [
          "/ASCIIHexDecode"
        ],
        objectId: R
      }), P("endobj"), c.objectNumber = Dt(), P("<< /ShadingType " + c.type), P("/ColorSpace /DeviceRGB");
      var me = "/Coords [" + ee(parseFloat(c.coords[0])) + " " + ee(parseFloat(c.coords[1])) + " ";
      c.type === 2 ? me += ee(parseFloat(c.coords[2])) + " " + ee(parseFloat(c.coords[3])) : me += ee(parseFloat(c.coords[2])) + " " + ee(parseFloat(c.coords[3])) + " " + ee(parseFloat(c.coords[4])) + " " + ee(parseFloat(c.coords[5])), P(me += "]"), c.matrix && P("/Matrix [" + c.matrix.toString() + "]"), P("/Function " + R + " 0 R"), P("/Extend [true true]"), P(">>"), P("endobj");
    }, Ri = function(c, b) {
      var R = an(), U = Dt();
      b.push({
        resourcesOid: R,
        objectOid: U
      }), c.objectNumber = U;
      var Q = [];
      Q.push({
        key: "Type",
        value: "/Pattern"
      }), Q.push({
        key: "PatternType",
        value: "1"
      }), Q.push({
        key: "PaintType",
        value: "1"
      }), Q.push({
        key: "TilingType",
        value: "1"
      }), Q.push({
        key: "BBox",
        value: "[" + c.boundingBox.map(ee).join(" ") + "]"
      }), Q.push({
        key: "XStep",
        value: ee(c.xStep)
      }), Q.push({
        key: "YStep",
        value: ee(c.yStep)
      }), Q.push({
        key: "Resources",
        value: R + " 0 R"
      }), c.matrix && Q.push({
        key: "Matrix",
        value: "[" + c.matrix.toString() + "]"
      }), Tn({
        data: c.stream,
        additionalKeyValues: Q,
        objectId: c.objectNumber
      }), P("endobj");
    }, Zs = function(c) {
      for (var b in c.objectNumber = Dt(), P("<<"), c) switch (b) {
        case "opacity":
          P("/ca " + A(c[b]));
          break;
        case "stroke-opacity":
          P("/CA " + A(c[b]));
      }
      P(">>"), P("endobj");
    }, aa = function(c) {
      on(c.resourcesOid, true), P("<<"), P("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), function() {
        for (var b in P("/Font <<"), lt) lt.hasOwnProperty(b) && (w === false || w === true && L.hasOwnProperty(b)) && P("/" + b + " " + lt[b].objectNumber + " 0 R");
        P(">>");
      }(), function() {
        if (Object.keys(Ge).length > 0) {
          for (var b in P("/Shading <<"), Ge) Ge.hasOwnProperty(b) && Ge[b] instanceof Li && Ge[b].objectNumber >= 0 && P("/" + b + " " + Ge[b].objectNumber + " 0 R");
          xt.publish("putShadingPatternDict"), P(">>");
        }
      }(), function(b) {
        if (Object.keys(Ge).length > 0) {
          for (var R in P("/Pattern <<"), Ge) Ge.hasOwnProperty(R) && Ge[R] instanceof p.TilingPattern && Ge[R].objectNumber >= 0 && Ge[R].objectNumber < b && P("/" + R + " " + Ge[R].objectNumber + " 0 R");
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
    }, Ha = function(c) {
      ct[c.fontName] = ct[c.fontName] || {}, ct[c.fontName][c.fontStyle] = c.id;
    }, Wa = function(c, b, R, U, Q) {
      var me = {
        id: "F" + (Object.keys(lt).length + 1).toString(10),
        postScriptName: c,
        fontName: b,
        fontStyle: R,
        encoding: U,
        isStandardFont: Q || false,
        metadata: {}
      };
      return xt.publish("addFont", {
        font: me,
        instance: this
      }), lt[me.id] = me, Ha(me), me.id;
    }, Bn = p.__private__.pdfEscape = p.pdfEscape = function(c, b) {
      return function(R, U) {
        var Q, me, _e, Me, Be, Ze, at, bt, Ot;
        if (_e = (U = U || {}).sourceEncoding || "Unicode", Be = U.outputEncoding, (U.autoencode || Be) && lt[Te].metadata && lt[Te].metadata[_e] && lt[Te].metadata[_e].encoding && (Me = lt[Te].metadata[_e].encoding, !Be && lt[Te].encoding && (Be = lt[Te].encoding), !Be && Me.codePages && (Be = Me.codePages[0]), typeof Be == "string" && (Be = Me[Be]), Be)) {
          for (at = false, Ze = [], Q = 0, me = R.length; Q < me; Q++) (bt = Be[R.charCodeAt(Q)]) ? Ze.push(String.fromCharCode(bt)) : Ze.push(R[Q]), Ze[Q].charCodeAt(0) >> 8 && (at = true);
          R = Ze.join("");
        }
        for (Q = R.length; at === void 0 && Q !== 0; ) R.charCodeAt(Q - 1) >> 8 && (at = true), Q--;
        if (!at) return R;
        for (Ze = U.noBOM ? [] : [
          254,
          255
        ], Q = 0, me = R.length; Q < me; Q++) {
          if ((Ot = (bt = R.charCodeAt(Q)) >> 8) >> 8) throw new Error("Character at position " + Q + " of string '" + R + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
          Ze.push(Ot), Ze.push(bt - (Ot << 8));
        }
        return String.fromCharCode.apply(void 0, Ze);
      }(c, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, sa = p.__private__.beginPage = function(c) {
      le[++ut] = [], $e[ut] = {
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
      }, Ga(ut), Re(le[D]);
    }, Va = function(c, b) {
      var R, U, Q;
      switch (t = b || t, typeof c == "string" && (R = S(c.toLowerCase()), Array.isArray(R) && (U = R[0], Q = R[1])), Array.isArray(c) && (U = c[0] * it, Q = c[1] * it), isNaN(U) && (U = s[0], Q = s[1]), (U > 14400 || Q > 14400) && (Pt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), U = Math.min(14400, U), Q = Math.min(14400, Q)), s = [
        U,
        Q
      ], t.substr(0, 1)) {
        case "l":
          Q > U && (s = [
            Q,
            U
          ]);
          break;
        case "p":
          U > Q && (s = [
            Q,
            U
          ]);
      }
      sa(s), Qe(ca), P(Bi), fa !== 0 && P(fa + " J"), ha !== 0 && P(ha + " j"), xt.publish("addPage", {
        pageNumber: ut
      });
    }, oa = function(c) {
      c > 0 && c <= ut && (le.splice(c, 1), $e.splice(c, 1), ut--, D > ut && (D = ut), this.setPage(D));
    }, Ga = function(c) {
      c > 0 && c <= ut && (D = c);
    }, $a = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
      return le.length - 1;
    }, Ka = function(c, b, R) {
      var U, Q = void 0;
      return R = R || {}, c = c !== void 0 ? c : lt[Te].fontName, b = b !== void 0 ? b : lt[Te].fontStyle, U = c.toLowerCase(), ct[U] !== void 0 && ct[U][b] !== void 0 ? Q = ct[U][b] : ct[c] !== void 0 && ct[c][b] !== void 0 ? Q = ct[c][b] : R.disableWarning === false && Pt.warn("Unable to look up font label for font '" + c + "', '" + b + "'. Refer to getFontList() for available fonts."), Q || R.noFallback || (Q = ct.times[b]) == null && (Q = ct.times.normal), Q;
    }, lr = p.__private__.putInfo = function() {
      var c = Dt(), b = function(U) {
        return U;
      };
      for (var R in g !== null && (b = Zt.encryptor(c, 0)), P("<<"), P("/Producer (" + Bn(b("jsPDF " + ze.version)) + ")"), ht) ht.hasOwnProperty(R) && ht[R] && P("/" + R.substr(0, 1).toUpperCase() + R.substr(1) + " (" + Bn(b(ht[R])) + ")");
      P("/CreationDate (" + Bn(b(ce)) + ")"), P(">>"), P("endobj");
    }, Oi = p.__private__.putCatalog = function(c) {
      var b = (c = c || {}).rootDictionaryObjId || qr;
      switch (Dt(), P("<<"), P("/Type /Catalog"), P("/Pages " + b + " 0 R"), Fe || (Fe = "fullwidth"), Fe) {
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
          var R = "" + Fe;
          R.substr(R.length - 1) === "%" && (Fe = parseInt(Fe) / 100), typeof Fe == "number" && P("/OpenAction [3 0 R /XYZ null null " + A(Fe) + "]");
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
      Ve && P("/PageMode /" + Ve), xt.publish("putCatalog"), P(">>"), P("endobj");
    }, Qs = p.__private__.putTrailer = function() {
      P("trailer"), P("<<"), P("/Size " + (X + 1)), P("/Root " + X + " 0 R"), P("/Info " + (X - 1) + " 0 R"), g !== null && P("/Encrypt " + Zt.oid + " 0 R"), P("/ID [ <" + he + "> <" + he + "> ]"), P(">>");
    }, Yt = p.__private__.putHeader = function() {
      P("%PDF-" + j), P("%\xBA\xDF\xAC\xE0");
    }, Ya = p.__private__.putXRef = function() {
      var c = "0000000000";
      P("xref"), P("0 " + (X + 1)), P("0000000000 65535 f ");
      for (var b = 1; b <= X; b++) typeof T[b] == "function" ? P((c + T[b]()).slice(-10) + " 00000 n ") : T[b] !== void 0 ? P((c + T[b]).slice(-10) + " 00000 n ") : P("0000000000 00000 n ");
    }, cr = p.__private__.buildDocument = function() {
      var c;
      X = 0, Z = 0, J = [], T = [], se = [], qr = an(), Kn = an(), Re(J), xt.publish("buildDocument"), Yt(), or(), function() {
        xt.publish("putAdditionalObjects");
        for (var R = 0; R < se.length; R++) {
          var U = se[R];
          on(U.objId, true), P(U.content), P("endobj");
        }
        xt.publish("postPutAdditionalObjects");
      }(), c = [], function() {
        for (var R in lt) lt.hasOwnProperty(R) && (w === false || w === true && L.hasOwnProperty(R)) && ci(lt[R]);
      }(), function() {
        var R;
        for (R in Ye) Ye.hasOwnProperty(R) && Zs(Ye[R]);
      }(), function() {
        for (var R in dn) dn.hasOwnProperty(R) && Fi(dn[R]);
      }(), function(R) {
        var U;
        for (U in Ge) Ge.hasOwnProperty(U) && (Ge[U] instanceof Li ? Mi(Ge[U]) : Ge[U] instanceof Zi && Ri(Ge[U], R));
      }(c), xt.publish("putResources"), c.forEach(aa), aa({
        resourcesOid: Kn,
        objectOid: Number.MAX_SAFE_INTEGER
      }), xt.publish("postPutResources"), g !== null && (Zt.oid = Dt(), P("<<"), P("/Filter /Standard"), P("/V " + Zt.v), P("/R " + Zt.r), P("/U <" + Zt.toHexString(Zt.U) + ">"), P("/O <" + Zt.toHexString(Zt.O) + ">"), P("/P " + Zt.P), P(">>"), P("endobj")), lr(), Oi();
      var b = Z;
      return Ya(), Qs(), P("startxref"), P("" + b), P("%%EOF"), Re(le[D]), J.join(`
`);
    }, Di = p.__private__.getBlob = function(c) {
      return new Blob([
        Xe(c)
      ], {
        type: "application/pdf"
      });
    }, Ja = p.output = p.__private__.output = (Dn = function(c, b) {
      switch (typeof (b = b || {}) == "string" ? b = {
        filename: b
      } : b.filename = b.filename || "generated.pdf", c) {
        case void 0:
          return cr();
        case "save":
          p.save(b.filename);
          break;
        case "arraybuffer":
          return Xe(cr());
        case "blob":
          return Di(cr());
        case "bloburi":
        case "bloburl":
          if (Je.URL !== void 0 && typeof Je.URL.createObjectURL == "function") return Je.URL && Je.URL.createObjectURL(Di(cr())) || void 0;
          Pt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
          break;
        case "datauristring":
        case "dataurlstring":
          var R = "", U = cr();
          try {
            R = tu(U);
          } catch {
            R = tu(unescape(encodeURIComponent(U)));
          }
          return "data:application/pdf;filename=" + b.filename + ";base64," + R;
        case "pdfobjectnewwindow":
          if (Object.prototype.toString.call(Je) === "[object Window]") {
            var Q = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", me = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
            b.pdfObjectUrl && (Q = b.pdfObjectUrl, me = "");
            var _e = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + Q + '"' + me + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(b) + ");<\/script></body></html>", Me = Je.open();
            return Me !== null && Me.document.write(_e), Me;
          }
          throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
        case "pdfjsnewwindow":
          if (Object.prototype.toString.call(Je) === "[object Window]") {
            var Be = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (b.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + b.filename + '" width="500px" height="400px" /></body></html>', Ze = Je.open();
            if (Ze !== null) {
              Ze.document.write(Be);
              var at = this;
              Ze.document.documentElement.querySelector("#pdfViewer").onload = function() {
                Ze.document.title = b.filename, Ze.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(at.output("bloburl"));
              };
            }
            return Ze;
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
      } catch (R) {
        var c = R.stack || "";
        ~c.indexOf(" at ") && (c = c.split(" at ")[1]);
        var b = "Error in function " + c.split(`
`)[0].split("<")[0] + ": " + R.message;
        if (!Je.console) throw new Error(b);
        Je.console.error(b, R), Je.alert && alert(b);
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
    Le(), oe();
    var xr = p.__private__.getPageInfo = p.getPageInfo = function(c) {
      if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
      return {
        objId: $e[c].objId,
        pageNumber: c,
        pageContext: $e[c]
      };
    }, Xa = p.__private__.getPageInfoByObjId = function(c) {
      if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
      for (var b in $e) if ($e[b].objId === c) break;
      return xr(b);
    }, eo = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
      return {
        objId: $e[D].objId,
        pageNumber: D,
        pageContext: $e[D]
      };
    };
    p.addPage = function() {
      return Va.apply(this, arguments), this;
    }, p.setPage = function() {
      return Ga.apply(this, arguments), Re.call(this, le[D]), this;
    }, p.insertPage = function(c) {
      return this.addPage(), this.movePage(D, c), this;
    }, p.movePage = function(c, b) {
      var R, U;
      if (c > b) {
        R = le[c], U = $e[c];
        for (var Q = c; Q > b; Q--) le[Q] = le[Q - 1], $e[Q] = $e[Q - 1];
        le[b] = R, $e[b] = U, this.setPage(b);
      } else if (c < b) {
        R = le[c], U = $e[c];
        for (var me = c; me < b; me++) le[me] = le[me + 1], $e[me] = $e[me + 1];
        le[b] = R, $e[b] = U, this.setPage(b);
      }
      return this;
    }, p.deletePage = function() {
      return oa.apply(this, arguments), this;
    }, p.__private__.text = p.text = function(c, b, R, U, Q) {
      var me, _e, Me, Be, Ze, at, bt, Ot, Jt, It = (U = U || {}).scope || this;
      if (typeof c == "number" && typeof b == "number" && (typeof R == "string" || Array.isArray(R))) {
        var Qt = R;
        R = b, b = c, c = Qt;
      }
      if (arguments[3] instanceof Ke == 0 ? (Me = arguments[4], Be = arguments[5], Lt(bt = arguments[3]) === "object" && bt !== null || (typeof Me == "string" && (Be = Me, Me = null), typeof bt == "string" && (Be = bt, bt = null), typeof bt == "number" && (Me = bt, bt = null), U = {
        flags: bt,
        angle: Me,
        align: Be
      })) : (z("The transform parameter of text() with a Matrix value"), Jt = Q), isNaN(b) || isNaN(R) || c == null) throw new Error("Invalid arguments passed to jsPDF.text");
      if (c.length === 0) return It;
      var Xt, ln = "", Pr = typeof U.lineHeightFactor == "number" ? U.lineHeightFactor : fi, Zn = It.internal.scaleFactor;
      function Cr(Nt) {
        return Nt = Nt.split("	").join(Array(U.TabLen || 9).join(" ")), Bn(Nt, bt);
      }
      function ga(Nt) {
        for (var St, Ht = Nt.concat(), en = [], Er = Ht.length; Er--; ) typeof (St = Ht.shift()) == "string" ? en.push(St) : Array.isArray(Nt) && (St.length === 1 || St[1] === void 0 && St[2] === void 0) ? en.push(St[0]) : en.push([
          St[0],
          St[1],
          St[2]
        ]);
        return en;
      }
      function Ui(Nt, St) {
        var Ht;
        if (typeof Nt == "string") Ht = St(Nt)[0];
        else if (Array.isArray(Nt)) {
          for (var en, Er, Sa = Nt.concat(), Wi = [], ls = Sa.length; ls--; ) typeof (en = Sa.shift()) == "string" ? Wi.push(St(en)[0]) : Array.isArray(en) && typeof en[0] == "string" && (Er = St(en[0], en[1], en[2]), Wi.push([
            Er[0],
            Er[1],
            Er[2]
          ]));
          Ht = Wi;
        }
        return Ht;
      }
      var Ur = false, mi = true;
      if (typeof c == "string") Ur = true;
      else if (Array.isArray(c)) {
        var gi = c.concat();
        _e = [];
        for (var zr, cn = gi.length; cn--; ) (typeof (zr = gi.shift()) != "string" || Array.isArray(zr) && typeof zr[0] != "string") && (mi = false);
        Ur = mi;
      }
      if (Ur === false) throw new Error('Type of text must be string or Array. "' + c + '" is not recognized.');
      typeof c == "string" && (c = c.match(/[\r?\n]/) ? c.split(/\r\n|\r|\n/g) : [
        c
      ]);
      var bi = ye / It.internal.scaleFactor, vi = bi * (Pr - 1);
      switch (U.baseline) {
        case "bottom":
          R -= vi;
          break;
        case "top":
          R += bi - vi;
          break;
        case "hanging":
          R += bi - 2 * vi;
          break;
        case "middle":
          R += bi / 2 - vi;
      }
      if ((at = U.maxWidth || 0) > 0 && (typeof c == "string" ? c = It.splitTextToSize(c, at) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(Nt, St) {
        return Nt.concat(It.splitTextToSize(St, at));
      }, []))), me = {
        text: c,
        x: b,
        y: R,
        options: U,
        mutex: {
          pdfEscape: Bn,
          activeFontKey: Te,
          fonts: lt,
          activeFontSize: ye
        }
      }, xt.publish("preProcessText", me), c = me.text, Me = (U = me.options).angle, Jt instanceof Ke == 0 && Me && typeof Me == "number") {
        Me *= Math.PI / 180, U.rotationDirection === 0 && (Me = -Me), B === V && (Me = -Me);
        var ba = Math.cos(Me), va = Math.sin(Me);
        Jt = new Ke(ba, va, -va, ba, 0, 0);
      } else Me && Me instanceof Ke && (Jt = Me);
      B !== V || Jt || (Jt = yr), (Ze = U.charSpace || Ar) !== void 0 && (ln += ee(H(Ze)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ot = U.horizontalScale) !== void 0 && (ln += ee(100 * Ot) + ` Tz
`), U.lang;
      var wn = -1, Ir = U.renderingMode !== void 0 ? U.renderingMode : U.stroke, zi = It.internal.getCurrentPageInfo().pageContext;
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
      var ss = zi.usedRenderingMode !== void 0 ? zi.usedRenderingMode : -1;
      wn !== -1 ? ln += wn + ` Tr
` : ss !== -1 && (ln += `0 Tr
`), wn !== -1 && (zi.usedRenderingMode = wn), Be = U.align || "left";
      var Un, wi = ye * Pr, wa = It.internal.pageSize.getWidth(), ya = lt[Te];
      Ze = U.charSpace || Ar, at = U.maxWidth || 0, bt = Object.assign({
        autoencode: true,
        noBOM: true
      }, U.flags);
      var Hr = [], yi = function(Nt) {
        return It.getStringUnitWidth(Nt, {
          font: ya,
          charSpace: Ze,
          fontSize: ye,
          doKerning: false
        }) * ye / Zn;
      };
      if (Object.prototype.toString.call(c) === "[object Array]") {
        var kn;
        _e = ga(c), Be !== "left" && (Un = _e.map(yi));
        var Pn, Wr = 0;
        if (Be === "right") {
          b -= Un[0], c = [], cn = _e.length;
          for (var jr = 0; jr < cn; jr++) jr === 0 ? (Pn = Nr(b), kn = _r(R)) : (Pn = H(Wr - Un[jr]), kn = -wi), c.push([
            _e[jr],
            Pn,
            kn
          ]), Wr = Un[jr];
        } else if (Be === "center") {
          b -= Un[0] / 2, c = [], cn = _e.length;
          for (var Vr = 0; Vr < cn; Vr++) Vr === 0 ? (Pn = Nr(b), kn = _r(R)) : (Pn = H((Wr - Un[Vr]) / 2), kn = -wi), c.push([
            _e[Vr],
            Pn,
            kn
          ]), Wr = Un[Vr];
        } else if (Be === "left") {
          c = [], cn = _e.length;
          for (var xa = 0; xa < cn; xa++) c.push(_e[xa]);
        } else if (Be === "justify" && ya.encoding === "Identity-H") {
          c = [], cn = _e.length, at = at !== 0 ? at : wa;
          for (var Hi = 0, zt = 0; zt < cn; zt++) if (kn = zt === 0 ? _r(R) : -wi, Pn = zt === 0 ? Nr(b) : Hi, zt < cn - 1) {
            var os = H((at - Un[zt]) / (_e[zt].split(" ").length - 1)), fr = _e[zt].split(" ");
            c.push([
              fr[0] + " ",
              Pn,
              kn
            ]), Hi = 0;
            for (var hr = 1; hr < fr.length; hr++) {
              var Na = (yi(fr[hr - 1] + " " + fr[hr]) - yi(fr[hr])) * Zn + os;
              hr == fr.length - 1 ? c.push([
                fr[hr],
                Na,
                0
              ]) : c.push([
                fr[hr] + " ",
                Na,
                0
              ]), Hi -= Na;
            }
          } else c.push([
            _e[zt],
            Pn,
            kn
          ]);
          c.push([
            "",
            Hi,
            0
          ]);
        } else {
          if (Be !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
          for (c = [], cn = _e.length, at = at !== 0 ? at : wa, zt = 0; zt < cn; zt++) {
            kn = zt === 0 ? _r(R) : -wi, Pn = zt === 0 ? Nr(b) : 0;
            var _a = _e[zt].split(" ").length - 1, Aa = _a > 0 ? (at - Un[zt]) / _a : 0;
            zt < cn - 1 ? Hr.push(ee(H(Aa))) : Hr.push(0), c.push([
              _e[zt],
              Pn,
              kn
            ]);
          }
        }
      }
      (typeof U.R2L == "boolean" ? U.R2L : We) === true && (c = Ui(c, function(Nt, St, Ht) {
        return [
          Nt.split("").reverse().join(""),
          St,
          Ht
        ];
      })), me = {
        text: c,
        x: b,
        y: R,
        options: U,
        mutex: {
          pdfEscape: Bn,
          activeFontKey: Te,
          fonts: lt,
          activeFontSize: ye
        }
      }, xt.publish("postProcessText", me), c = me.text, Xt = me.mutex.isHex || false;
      var La = lt[Te].encoding;
      La !== "WinAnsiEncoding" && La !== "StandardEncoding" || (c = Ui(c, function(Nt, St, Ht) {
        return [
          Cr(Nt),
          St,
          Ht
        ];
      })), _e = ga(c), c = [];
      for (var Gr, $r, Kr, xi = Array.isArray(_e[0]) ? 1 : 0, Yr = "", Ni = function(Nt, St, Ht) {
        var en = "";
        return Ht instanceof Ke ? (Ht = typeof U.angle == "number" ? wr(Ht, new Ke(1, 0, 0, 1, Nt, St)) : wr(new Ke(1, 0, 0, 1, Nt, St), Ht), B === V && (Ht = wr(new Ke(1, 0, 0, -1, 0, 0), Ht)), en = Ht.join(" ") + ` Tm
`) : en = ee(Nt) + " " + ee(St) + ` Td
`, en;
      }, zn = 0; zn < _e.length; zn++) {
        switch (Yr = "", xi) {
          case 1:
            Kr = (Xt ? "<" : "(") + _e[zn][0] + (Xt ? ">" : ")"), Gr = parseFloat(_e[zn][1]), $r = parseFloat(_e[zn][2]);
            break;
          case 0:
            Kr = (Xt ? "<" : "(") + _e[zn] + (Xt ? ">" : ")"), Gr = Nr(b), $r = _r(R);
        }
        Hr !== void 0 && Hr[zn] !== void 0 && (Yr = Hr[zn] + ` Tw
`), zn === 0 ? c.push(Yr + Ni(Gr, $r, Jt) + Kr) : xi === 0 ? c.push(Yr + Kr) : xi === 1 && c.push(Yr + Ni(Gr, $r, Jt) + Kr);
      }
      c = xi === 0 ? c.join(` Tj
T* `) : c.join(` Tj
`), c += ` Tj
`;
      var dr = `BT
/`;
      return dr += Te + " " + ye + ` Tf
`, dr += ee(ye * Pr) + ` TL
`, dr += hi + `
`, dr += ln, dr += c, P(dr += "ET"), L[Te] = true, It;
    };
    var to = p.__private__.clip = p.clip = function(c) {
      return P(c === "evenodd" ? "W*" : "W"), this;
    };
    p.clipEvenOdd = function() {
      return to("evenodd");
    }, p.__private__.discardPath = p.discardPath = function() {
      return P("n"), this;
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
    var Za = p.__private__.getStyle = p.getStyle = function(c) {
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
    }, Qa = p.close = function() {
      return P("h"), this;
    };
    p.stroke = function() {
      return P("S"), this;
    }, p.fill = function(c) {
      return Ti("f", c), this;
    }, p.fillEvenOdd = function(c) {
      return Ti("f*", c), this;
    }, p.fillStroke = function(c) {
      return Ti("B", c), this;
    }, p.fillStrokeEvenOdd = function(c) {
      return Ti("B*", c), this;
    };
    var Ti = function(c, b) {
      Lt(b) === "object" ? ro(b, c) : P(c);
    }, ui = function(c) {
      c === null || B === V && c === void 0 || (c = Za(c), P(c));
    };
    function no(c, b, R, U, Q) {
      var me = new Zi(b || this.boundingBox, R || this.xStep, U || this.yStep, this.gState, Q || this.matrix);
      me.stream = this.stream;
      var _e = c + "$$" + this.cloneIndex++ + "$$";
      return On(_e, me), me;
    }
    var ro = function(c, b) {
      var R = Ct[c.key], U = Ge[R];
      if (U instanceof Li) P("q"), P(io(b)), U.gState && p.setGState(U.gState), P(c.matrix.toString() + " cm"), P("/" + R + " sh"), P("Q");
      else if (U instanceof Zi) {
        var Q = new Ke(1, 0, 0, -1, 0, pi());
        c.matrix && (Q = Q.multiply(c.matrix || yr), R = no.call(U, c.key, c.boundingBox, c.xStep, c.yStep, Q).id), P("q"), P("/Pattern cs"), P("/" + R + " scn"), U.gState && p.setGState(U.gState), P(b), P("Q");
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
    }, la = p.moveTo = function(c, b) {
      return P(ee(H(c)) + " " + ee(W(b)) + " m"), this;
    }, es = p.lineTo = function(c, b) {
      return P(ee(H(c)) + " " + ee(W(b)) + " l"), this;
    }, Xn = p.curveTo = function(c, b, R, U, Q, me) {
      return P([
        ee(H(c)),
        ee(W(b)),
        ee(H(R)),
        ee(W(U)),
        ee(H(Q)),
        ee(W(me)),
        "c"
      ].join(" ")), this;
    };
    p.__private__.line = p.line = function(c, b, R, U, Q) {
      if (isNaN(c) || isNaN(b) || isNaN(R) || isNaN(U) || !ur(Q)) throw new Error("Invalid arguments passed to jsPDF.line");
      return B === $ ? this.lines([
        [
          R - c,
          U - b
        ]
      ], c, b, [
        1,
        1
      ], Q || "S") : this.lines([
        [
          R - c,
          U - b
        ]
      ], c, b, [
        1,
        1
      ]).stroke();
    }, p.__private__.lines = p.lines = function(c, b, R, U, Q, me) {
      var _e, Me, Be, Ze, at, bt, Ot, Jt, It, Qt, Xt, ln;
      if (typeof c == "number" && (ln = R, R = b, b = c, c = ln), U = U || [
        1,
        1
      ], me = me || false, isNaN(b) || isNaN(R) || !Array.isArray(c) || !Array.isArray(U) || !ur(Q) || typeof me != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
      for (la(b, R), _e = U[0], Me = U[1], Ze = c.length, Qt = b, Xt = R, Be = 0; Be < Ze; Be++) (at = c[Be]).length === 2 ? (Qt = at[0] * _e + Qt, Xt = at[1] * Me + Xt, es(Qt, Xt)) : (bt = at[0] * _e + Qt, Ot = at[1] * Me + Xt, Jt = at[2] * _e + Qt, It = at[3] * Me + Xt, Qt = at[4] * _e + Qt, Xt = at[5] * Me + Xt, Xn(bt, Ot, Jt, It, Qt, Xt));
      return me && Qa(), ui(Q), this;
    }, p.path = function(c) {
      for (var b = 0; b < c.length; b++) {
        var R = c[b], U = R.c;
        switch (R.op) {
          case "m":
            la(U[0], U[1]);
            break;
          case "l":
            es(U[0], U[1]);
            break;
          case "c":
            Xn.apply(this, U);
            break;
          case "h":
            Qa();
        }
      }
      return this;
    }, p.__private__.rect = p.rect = function(c, b, R, U, Q) {
      if (isNaN(c) || isNaN(b) || isNaN(R) || isNaN(U) || !ur(Q)) throw new Error("Invalid arguments passed to jsPDF.rect");
      return B === $ && (U = -U), P([
        ee(H(c)),
        ee(W(b)),
        ee(H(R)),
        ee(H(U)),
        "re"
      ].join(" ")), ui(Q), this;
    }, p.__private__.triangle = p.triangle = function(c, b, R, U, Q, me, _e) {
      if (isNaN(c) || isNaN(b) || isNaN(R) || isNaN(U) || isNaN(Q) || isNaN(me) || !ur(_e)) throw new Error("Invalid arguments passed to jsPDF.triangle");
      return this.lines([
        [
          R - c,
          U - b
        ],
        [
          Q - R,
          me - U
        ],
        [
          c - Q,
          b - me
        ]
      ], c, b, [
        1,
        1
      ], _e, true), this;
    }, p.__private__.roundedRect = p.roundedRect = function(c, b, R, U, Q, me, _e) {
      if (isNaN(c) || isNaN(b) || isNaN(R) || isNaN(U) || isNaN(Q) || isNaN(me) || !ur(_e)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
      var Me = 4 / 3 * (Math.SQRT2 - 1);
      return Q = Math.min(Q, 0.5 * R), me = Math.min(me, 0.5 * U), this.lines([
        [
          R - 2 * Q,
          0
        ],
        [
          Q * Me,
          0,
          Q,
          me - me * Me,
          Q,
          me
        ],
        [
          0,
          U - 2 * me
        ],
        [
          0,
          me * Me,
          -Q * Me,
          me,
          -Q,
          me
        ],
        [
          2 * Q - R,
          0
        ],
        [
          -Q * Me,
          0,
          -Q,
          -me * Me,
          -Q,
          -me
        ],
        [
          0,
          2 * me - U
        ],
        [
          0,
          -me * Me,
          Q * Me,
          -me,
          Q,
          -me
        ]
      ], c + Q, b, [
        1,
        1
      ], _e, true), this;
    }, p.__private__.ellipse = p.ellipse = function(c, b, R, U, Q) {
      if (isNaN(c) || isNaN(b) || isNaN(R) || isNaN(U) || !ur(Q)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
      var me = 4 / 3 * (Math.SQRT2 - 1) * R, _e = 4 / 3 * (Math.SQRT2 - 1) * U;
      return la(c + R, b), Xn(c + R, b - _e, c + me, b - U, c, b - U), Xn(c - me, b - U, c - R, b - _e, c - R, b), Xn(c - R, b + _e, c - me, b + U, c, b + U), Xn(c + me, b + U, c + R, b + _e, c + R, b), ui(Q), this;
    }, p.__private__.circle = p.circle = function(c, b, R, U) {
      if (isNaN(c) || isNaN(b) || isNaN(R) || !ur(U)) throw new Error("Invalid arguments passed to jsPDF.circle");
      return this.ellipse(c, b, R, R, U);
    }, p.setFont = function(c, b, R) {
      return R && (b = fe(b, R)), Te = Ka(c, b, {
        disableWarning: false
      }), this;
    };
    var ao = p.__private__.getFont = p.getFont = function() {
      return lt[Ka.apply(p, arguments)];
    };
    p.__private__.getFontList = p.getFontList = function() {
      var c, b, R = {};
      for (c in ct) if (ct.hasOwnProperty(c)) for (b in R[c] = [], ct[c]) ct[c].hasOwnProperty(b) && R[c].push(b);
      return R;
    }, p.addFont = function(c, b, R, U, Q) {
      var me = [
        "StandardEncoding",
        "MacRomanEncoding",
        "Identity-H",
        "WinAnsiEncoding"
      ];
      return arguments[3] && me.indexOf(arguments[3]) !== -1 ? Q = arguments[3] : arguments[3] && me.indexOf(arguments[3]) == -1 && (R = fe(R, U)), Wa.call(this, c, b, R, Q = Q || "Identity-H");
    };
    var fi, ca = n.lineWidth || 0.200025, so = p.__private__.getLineWidth = p.getLineWidth = function() {
      return ca;
    }, Qe = p.__private__.setLineWidth = p.setLineWidth = function(c) {
      return ca = c, P(ee(H(c)) + " w"), this;
    };
    p.__private__.setLineDash = ze.API.setLineDash = ze.API.setLineDashPattern = function(c, b) {
      if (c = c || [], b = b || 0, isNaN(b) || !Array.isArray(c)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
      return c = c.map(function(R) {
        return ee(H(R));
      }).join(" "), b = ee(H(b)), P("[" + c + "] " + b + " d"), this;
    };
    var oo = p.__private__.getLineHeight = p.getLineHeight = function() {
      return ye * fi;
    };
    p.__private__.getLineHeight = p.getLineHeight = function() {
      return ye * fi;
    };
    var lo = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(c) {
      return typeof (c = c || 1.15) == "number" && (fi = c), this;
    }, co = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
      return fi;
    };
    lo(n.lineHeight);
    var Nr = p.__private__.getHorizontalCoordinate = function(c) {
      return H(c);
    }, _r = p.__private__.getVerticalCoordinate = function(c) {
      return B === V ? c : $e[D].mediaBox.topRightY - $e[D].mediaBox.bottomLeftY - H(c);
    }, uo = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(c) {
      return ee(Nr(c));
    }, fo = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(c) {
      return ee(_r(c));
    }, Bi = n.strokeColor || "0 G";
    p.__private__.getStrokeColor = p.getDrawColor = function() {
      return sr(Bi);
    }, p.__private__.setStrokeColor = p.setDrawColor = function(c, b, R, U) {
      return Bi = Yn({
        ch1: c,
        ch2: b,
        ch3: R,
        ch4: U,
        pdfColorType: "draw",
        precision: 2
      }), P(Bi), this;
    };
    var ua = n.fillColor || "0 g";
    p.__private__.getFillColor = p.getFillColor = function() {
      return sr(ua);
    }, p.__private__.setFillColor = p.setFillColor = function(c, b, R, U) {
      return ua = Yn({
        ch1: c,
        ch2: b,
        ch3: R,
        ch4: U,
        pdfColorType: "fill",
        precision: 2
      }), P(ua), this;
    };
    var hi = n.textColor || "0 g", ho = p.__private__.getTextColor = p.getTextColor = function() {
      return sr(hi);
    };
    p.__private__.setTextColor = p.setTextColor = function(c, b, R, U) {
      return hi = Yn({
        ch1: c,
        ch2: b,
        ch3: R,
        ch4: U,
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
    var fa = 0;
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
      return fa = b, P(b + " J"), this;
    };
    var ha = 0;
    p.__private__.setLineJoin = p.setLineJoin = function(c) {
      var b = p.CapJoinStyles[c];
      if (b === void 0) throw new Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      return ha = b, P(b + " j"), this;
    }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(c) {
      if (c = c || 0, isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
      return P(ee(H(c)) + " M"), this;
    }, p.GState = Ws, p.setGState = function(c) {
      (c = typeof c == "string" ? Ye[nt[c]] : ts(null, c)).equals(Mt) || (P("/" + c.id + " gs"), Mt = c);
    };
    var ts = function(c, b) {
      if (!c || !nt[c]) {
        var R = false;
        for (var U in Ye) if (Ye.hasOwnProperty(U) && Ye[U].equals(b)) {
          R = true;
          break;
        }
        if (R) b = Ye[U];
        else {
          var Q = "GS" + (Object.keys(Ye).length + 1).toString(10);
          Ye[Q] = b, b.id = Q;
        }
        return c && (nt[c] = b.id), xt.publish("addGState", b), b;
      }
    };
    p.addGState = function(c, b) {
      return ts(c, b), this;
    }, p.saveGraphicsState = function() {
      return P("q"), Ft.push({
        key: Te,
        size: ye,
        color: hi
      }), this;
    }, p.restoreGraphicsState = function() {
      P("Q");
      var c = Ft.pop();
      return Te = c.key, ye = c.size, hi = c.color, Mt = null, this;
    }, p.setCurrentTransformationMatrix = function(c) {
      return P(c.toString() + " cm"), this;
    }, p.comment = function(c) {
      return P("#" + c), this;
    };
    var Lr = function(c, b) {
      var R = c || 0;
      Object.defineProperty(this, "x", {
        enumerable: true,
        get: function() {
          return R;
        },
        set: function(me) {
          isNaN(me) || (R = parseFloat(me));
        }
      });
      var U = b || 0;
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return U;
        },
        set: function(me) {
          isNaN(me) || (U = parseFloat(me));
        }
      });
      var Q = "pt";
      return Object.defineProperty(this, "type", {
        enumerable: true,
        get: function() {
          return Q;
        },
        set: function(me) {
          Q = me.toString();
        }
      }), this;
    }, da = function(c, b, R, U) {
      Lr.call(this, c, b), this.type = "rect";
      var Q = R || 0;
      Object.defineProperty(this, "w", {
        enumerable: true,
        get: function() {
          return Q;
        },
        set: function(_e) {
          isNaN(_e) || (Q = parseFloat(_e));
        }
      });
      var me = U || 0;
      return Object.defineProperty(this, "h", {
        enumerable: true,
        get: function() {
          return me;
        },
        set: function(_e) {
          isNaN(_e) || (me = parseFloat(_e));
        }
      }), this;
    }, qi = function() {
      this.page = ut, this.currentPage = D, this.pages = le.slice(0), this.pagesContext = $e.slice(0), this.x = He, this.y = Ut, this.matrix = gt, this.width = ma(D), this.height = rs(D), this.outputDestination = ve, this.id = "", this.objectNumber = -1;
    };
    qi.prototype.restore = function() {
      ut = this.page, D = this.currentPage, $e = this.pagesContext, le = this.pages, He = this.x, Ut = this.y, gt = this.matrix, ns(D, this.width), Sr(D, this.height), ve = this.outputDestination;
    };
    var pa = function(c, b, R, U, Q) {
      ar.push(new qi()), ut = D = 0, le = [], He = c, Ut = b, gt = Q, sa([
        R,
        U
      ]);
    };
    for (var di in p.beginFormObject = function(c, b, R, U, Q) {
      return pa(c, b, R, U, Q), this;
    }, p.endFormObject = function(c) {
      return function(b) {
        if (vr[b]) ar.pop().restore();
        else {
          var R = new qi(), U = "Xo" + (Object.keys(dn).length + 1).toString(10);
          R.id = U, vr[b] = U, dn[U] = R, xt.publish("addFormObject", R), ar.pop().restore();
        }
      }(c), this;
    }, p.doFormObject = function(c, b) {
      var R = dn[vr[c]];
      return P("q"), P(b.toString() + " cm"), P("/" + R.id + " Do"), P("Q"), this;
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
      return c = c || "generated.pdf", (b = b || {}).returnPromise = b.returnPromise || false, b.returnPromise === false ? (Ai(Di(cr()), c), typeof Ai.unload == "function" && Je.setTimeout && setTimeout(Ai.unload, 911), this) : new Promise(function(R, U) {
        try {
          var Q = Ai(Di(cr()), c);
          typeof Ai.unload == "function" && Je.setTimeout && setTimeout(Ai.unload, 911), R(Q);
        } catch (me) {
          U(me.message);
        }
      });
    }, ze.API) ze.API.hasOwnProperty(di) && (di === "events" && ze.API.events.length ? function(c, b) {
      var R, U, Q;
      for (Q = b.length - 1; Q !== -1; Q--) R = b[Q][0], U = b[Q][1], c.subscribe.apply(c, [
        R
      ].concat(typeof U == "function" ? [
        U
      ] : U));
    }(xt, ze.API.events) : p[di] = ze.API[di]);
    function ma(c) {
      return $e[c].mediaBox.topRightX - $e[c].mediaBox.bottomLeftX;
    }
    function ns(c, b) {
      $e[c].mediaBox.topRightX = b + $e[c].mediaBox.bottomLeftX;
    }
    function rs(c) {
      return $e[c].mediaBox.topRightY - $e[c].mediaBox.bottomLeftY;
    }
    function Sr(c, b) {
      $e[c].mediaBox.topRightY = b + $e[c].mediaBox.bottomLeftY;
    }
    var kr = p.getPageWidth = function(c) {
      return ma(c = c || D) / it;
    }, is = p.setPageWidth = function(c, b) {
      ns(c, b * it);
    }, pi = p.getPageHeight = function(c) {
      return rs(c = c || D) / it;
    }, as = p.setPageHeight = function(c, b) {
      Sr(c, b * it);
    };
    return p.internal = {
      pdfEscape: Bn,
      getStyle: Za,
      getFont: ao,
      getFontSize: Ie,
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
          return kr(D);
        },
        setWidth: function(c) {
          is(D, c);
        },
        getHeight: function() {
          return pi(D);
        },
        setHeight: function(c) {
          as(D, c);
        }
      },
      encryptionOptions: g,
      encryption: Zt,
      getEncryptor: function(c) {
        return g !== null ? Zt.encryptor(c, 0) : function(b) {
          return b;
        };
      },
      output: Ja,
      getNumberOfPages: $a,
      get pages() {
        return le;
      },
      out: P,
      f2: A,
      f3: I,
      getPageInfo: xr,
      getPageInfoByObjId: Xa,
      getCurrentPageInfo: eo,
      getPDFVersion: E,
      Point: Lr,
      Rectangle: da,
      Matrix: Ke,
      hasHotfix: qn
    }, Object.defineProperty(p.internal.pageSize, "width", {
      get: function() {
        return kr(D);
      },
      set: function(c) {
        is(D, c);
      },
      enumerable: true,
      configurable: true
    }), Object.defineProperty(p.internal.pageSize, "height", {
      get: function() {
        return pi(D);
      },
      set: function(c) {
        as(D, c);
      },
      enumerable: true,
      configurable: true
    }), (function(c) {
      for (var b = 0, R = qe.length; b < R; b++) {
        var U = Wa.call(this, c[b][0], c[b][1], c[b][2], qe[b][3], true);
        w === false && (L[U] = true);
        var Q = c[b][0].split("-");
        Ha({
          id: U,
          fontName: Q[0],
          fontStyle: Q[1] || ""
        });
      }
      xt.publish("addFonts", {
        fonts: lt,
        dictionary: ct
      });
    }).call(p, qe), Te = "F1", Va(s, t), xt.publish("initialized"), p;
  }
  Ji.prototype.lsbFirstWord = function(n) {
    return String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
  }, Ji.prototype.toHexString = function(n) {
    return n.split("").map(function(e) {
      return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
    }).join("");
  }, Ji.prototype.hexToBytes = function(n) {
    for (var e = [], t = 0; t < n.length; t += 2) e.push(String.fromCharCode(parseInt(n.substr(t, 2), 16)));
    return e.join("");
  }, Ji.prototype.processOwnerPassword = function(n, e) {
    return ul(cl(e).substr(0, 5), n);
  }, Ji.prototype.encryptor = function(n, e) {
    var t = cl(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(r) {
      return ul(t, r);
    };
  }, Ws.prototype.equals = function(n) {
    var e, t = "id,objectNumber,equals";
    if (!n || Lt(n) !== Lt(this)) return false;
    var r = 0;
    for (e in this) if (!(t.indexOf(e) >= 0)) {
      if (this.hasOwnProperty(e) && !n.hasOwnProperty(e) || this[e] !== n[e]) return false;
      r++;
    }
    for (e in n) n.hasOwnProperty(e) && t.indexOf(e) < 0 && r--;
    return r === 0;
  }, ze.API = {
    events: []
  }, ze.version = "4.2.0";
  var qt = ze.API, Al = 1, Ei = function(n) {
    return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Ki = function(n) {
    return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
  }, Pi = function(n) {
    return n.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(e) {
      var t = e.charCodeAt(0).toString(16).toUpperCase();
      return "#" + (t.length === 1 ? "0" + t : t);
    });
  }, et = function(n) {
    return n.toFixed(2);
  }, ni = function(n) {
    return n.toFixed(5);
  };
  qt.__acroform__ = {};
  var Sn = function(n, e) {
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n;
  }, au = function(n) {
    return n * Al;
  }, mr = function(n) {
    var e = new ih(), t = Ee.internal.getHeight(n) || 0, r = Ee.internal.getWidth(n) || 0;
    return e.BBox = [
      0,
      0,
      Number(et(r)),
      Number(et(t))
    ], e;
  }, _5 = qt.__acroform__.setBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    return n | 1 << e;
  }, A5 = qt.__acroform__.clearBit = function(n, e) {
    if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    return n & ~(1 << e);
  }, L5 = qt.__acroform__.getBit = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return n & 1 << e ? 1 : 0;
  }, Gt = qt.__acroform__.getBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return L5(n, e - 1);
  }, $t = qt.__acroform__.setBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return _5(n, e - 1);
  }, Kt = qt.__acroform__.clearBitForPdf = function(n, e) {
    if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return A5(n, e - 1);
  }, S5 = qt.__acroform__.calculateCoordinates = function(n, e) {
    var t = e.internal.getHorizontalCoordinate, r = e.internal.getVerticalCoordinate, s = n[0], a = n[1], f = n[2], l = n[3], u = {};
    return u.lowerLeft_X = t(s) || 0, u.lowerLeft_Y = r(a + l) || 0, u.upperRight_X = t(s + f) || 0, u.upperRight_Y = r(a) || 0, [
      Number(et(u.lowerLeft_X)),
      Number(et(u.lowerLeft_Y)),
      Number(et(u.upperRight_X)),
      Number(et(u.upperRight_Y))
    ];
  }, k5 = function(n) {
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
    s = n.multiline ? s.map(function(A) {
      return A.split(`
`);
    }) : s.map(function(A) {
      return [
        A
      ];
    });
    var a = t, f = Ee.internal.getHeight(n) || 0;
    f = f < 0 ? -f : f;
    var l = Ee.internal.getWidth(n) || 0;
    l = l < 0 ? -l : l;
    var u = function(A, I, H) {
      if (A + 1 < s.length) {
        var W = I + " " + s[A + 1][0];
        return js(W, n, H).width <= l - 4;
      }
      return false;
    };
    a++;
    e: for (; a > 0; ) {
      e = "", a--;
      var d, g, w = js("3", n, a).height, L = n.multiline ? f - a : (f - w) / 2, p = L += 2, j = 0, E = 0, O = 0;
      if (a <= 0) {
        e = `(...) Tj
`, e += "% Width of Text: " + js(e, n, a = 12).width + ", FieldWidth:" + l + `
`;
        break;
      }
      for (var S = "", $ = 0, V = 0; V < s.length; V++) if (s.hasOwnProperty(V)) {
        var B = false;
        if (s[V].length !== 1 && O !== s[V].length - 1) {
          if ((w + 2) * ($ + 2) + 2 > f) continue e;
          S += s[V][O], B = true, E = V, V--;
        } else {
          S = (S += s[V][O] + " ").substr(S.length - 1) == " " ? S.substr(0, S.length - 1) : S;
          var ue = parseInt(V), Ne = u(ue, S, a), fe = V >= s.length - 1;
          if (Ne && !fe) {
            S += " ", O = 0;
            continue;
          }
          if (Ne || fe) {
            if (fe) E = ue;
            else if (n.multiline && (w + 2) * ($ + 2) + 2 > f) continue e;
          } else {
            if (!n.multiline || (w + 2) * ($ + 2) + 2 > f) continue e;
            E = ue;
          }
        }
        for (var ee = "", z = j; z <= E; z++) {
          var ie = s[z];
          if (n.multiline) {
            if (z === E) {
              ee += ie[O] + " ", O = (O + 1) % ie.length;
              continue;
            }
            if (z === j) {
              ee += ie[ie.length - 1] + " ";
              continue;
            }
          }
          ee += ie[0] + " ";
        }
        switch (ee = ee.substr(ee.length - 1) == " " ? ee.substr(0, ee.length - 1) : ee, g = js(ee, n, a).width, n.textAlign) {
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
`, e += "(" + Ei(ee) + `) Tj
`, e += -et(d) + ` 0 Td
`, p = -(a + 2), g = 0, j = B ? E : E + 1, $++, S = "";
      }
      break;
    }
    return r.text = e, r.fontSize = a, r;
  }, js = function(n, e, t) {
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
  }, P5 = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: false,
    internal: null,
    isInitialized: false
  }, C5 = function(n, e) {
    var t = {
      type: "reference",
      object: n
    };
    e.internal.getPageInfo(n.page).pageContext.annotations.find(function(r) {
      return r.type === t.type && r.object === t.object;
    }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(t);
  }, I5 = function(n, e) {
    if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === false)) {
      if (rr.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(P5)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
      Al = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new ah(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
        (function(t) {
          t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = true;
        })(n);
      }), n.internal.events.subscribe("buildDocument", function() {
        (function(t) {
          t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
          var r = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
          for (var s in r) if (r.hasOwnProperty(s)) {
            var a = r[s];
            a.objId = void 0, a.hasAnnotation && C5(a, t);
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
          for (var f in r || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), r = r || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (r.hasOwnProperty(f)) {
            var l = r[f], u = [], d = l.Rect;
            if (l.Rect && (l.Rect = S5(l.Rect, s)), s.internal.newObjectDeferredBegin(l.objId, true), l.DA = Ee.createDefaultAppearanceStream(l), Lt(l) === "object" && typeof l.getKeyValueListForStream == "function" && (u = l.getKeyValueListForStream()), l.Rect = d, l.hasAppearanceStream && !l.appearanceStreamContent) {
              var g = k5(l);
              u.push({
                key: "AP",
                value: "<</N " + g + ">>"
              }), s.internal.acroformPlugin.xForms.push(g);
            }
            if (l.appearanceStreamContent) {
              var w = "";
              for (var L in l.appearanceStreamContent) if (l.appearanceStreamContent.hasOwnProperty(L)) {
                var p = l.appearanceStreamContent[L];
                if (w += "/" + L + " ", w += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                  for (var f in p) if (p.hasOwnProperty(f)) {
                    var j = p[f];
                    typeof j == "function" && (j = j.call(s, l)), w += "/" + f + " " + j + " ", s.internal.acroformPlugin.xForms.indexOf(j) >= 0 || s.internal.acroformPlugin.xForms.push(j);
                  }
                } else typeof (j = p) == "function" && (j = j.call(s, l)), w += "/" + f + " " + j, s.internal.acroformPlugin.xForms.indexOf(j) >= 0 || s.internal.acroformPlugin.xForms.push(j);
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
          a && function(E, O) {
            for (var S in E) if (E.hasOwnProperty(S)) {
              var $ = S, V = E[S];
              O.internal.newObjectDeferredBegin(V.objId, true), Lt(V) === "object" && typeof V.putStream == "function" && V.putStream(), delete E[$];
            }
          }(s.internal.acroformPlugin.xForms, s);
        })(t, n);
      }), n.internal.acroformPlugin.isInitialized = true;
    }
  }, rh = qt.__acroform__.arrayToPdfArray = function(n, e, t) {
    var r = function(f) {
      return f;
    };
    if (Array.isArray(n)) {
      for (var s = "[", a = 0; a < n.length; a++) switch (a !== 0 && (s += " "), Lt(n[a])) {
        case "boolean":
        case "number":
        case "object":
          s += n[a].toString();
          break;
        case "string":
          n[a].substr(0, 1) === "/" ? s += "/" + Pi(n[a].substr(1)) : (e !== void 0 && t && (r = t.internal.getEncryptor(e)), s += "(" + Ei(r(n[a].toString())) + ")");
      }
      return s + "]";
    }
    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
  }, Ko = function(n, e, t) {
    var r = function(s) {
      return s;
    };
    return e !== void 0 && t && (r = t.internal.getEncryptor(e)), (n = n || "").toString(), "(" + Ei(r(n)) + ")";
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
        value: rh(s, this.objId, this.scope)
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
  var ih = function() {
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
  Sn(ih, gr);
  var ah = function() {
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
          return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + Ei(t(n)) + ")";
        }
      },
      set: function(t) {
        n = t;
      }
    });
  };
  Sn(ah, gr);
  var rr = function n() {
    gr.call(this);
    var e = 4;
    Object.defineProperty(this, "F", {
      enumerable: false,
      configurable: false,
      get: function() {
        return e;
      },
      set: function(S) {
        if (isNaN(S)) throw new Error('Invalid value "' + S + '" for attribute F supplied.');
        e = S;
      }
    }), Object.defineProperty(this, "showWhenPrinted", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(e, 3);
      },
      set: function(S) {
        S ? this.F = $t(e, 3) : this.F = Kt(e, 3);
      }
    });
    var t = 0;
    Object.defineProperty(this, "Ff", {
      enumerable: false,
      configurable: false,
      get: function() {
        return t;
      },
      set: function(S) {
        if (isNaN(S)) throw new Error('Invalid value "' + S + '" for attribute Ff supplied.');
        t = S;
      }
    });
    var r = [];
    Object.defineProperty(this, "Rect", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (r.length !== 0) return r;
      },
      set: function(S) {
        r = S !== void 0 ? S : [];
      }
    }), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[0]) ? 0 : r[0];
      },
      set: function(S) {
        r[0] = S;
      }
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[1]) ? 0 : r[1];
      },
      set: function(S) {
        r[1] = S;
      }
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[2]) ? 0 : r[2];
      },
      set: function(S) {
        r[2] = S;
      }
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !r || isNaN(r[3]) ? 0 : r[3];
      },
      set: function(S) {
        r[3] = S;
      }
    });
    var s = "";
    Object.defineProperty(this, "FT", {
      enumerable: true,
      configurable: false,
      get: function() {
        return s;
      },
      set: function(S) {
        switch (S) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            s = S;
            break;
          default:
            throw new Error('Invalid value "' + S + '" for attribute FT supplied.');
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
        var S = function($) {
          return $;
        };
        return this.scope && (S = this.scope.internal.getEncryptor(this.objId)), "(" + Ei(S(a)) + ")";
      },
      set: function(S) {
        a = S.toString();
      }
    }), Object.defineProperty(this, "fieldName", {
      configurable: true,
      enumerable: true,
      get: function() {
        return a;
      },
      set: function(S) {
        a = S;
      }
    });
    var f = "helvetica";
    Object.defineProperty(this, "fontName", {
      enumerable: true,
      configurable: true,
      get: function() {
        return f;
      },
      set: function(S) {
        f = S;
      }
    });
    var l = "normal";
    Object.defineProperty(this, "fontStyle", {
      enumerable: true,
      configurable: true,
      get: function() {
        return l;
      },
      set: function(S) {
        l = S;
      }
    });
    var u = 0;
    Object.defineProperty(this, "fontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return u;
      },
      set: function(S) {
        u = S;
      }
    });
    var d = void 0;
    Object.defineProperty(this, "maxFontSize", {
      enumerable: true,
      configurable: true,
      get: function() {
        return d === void 0 ? 50 / Al : d;
      },
      set: function(S) {
        d = S;
      }
    });
    var g = "black";
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      get: function() {
        return g;
      },
      set: function(S) {
        g = S;
      }
    });
    var w = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (!(!w || this instanceof Vs || this instanceof Si)) return Ko(w, this.objId, this.scope);
      },
      set: function(S) {
        S = S.toString(), w = S;
      }
    });
    var L = null;
    Object.defineProperty(this, "DV", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (L) return this instanceof sn == 0 ? Ko(L, this.objId, this.scope) : L;
      },
      set: function(S) {
        S = S.toString(), L = this instanceof sn == 0 ? S.substr(0, 1) === "(" ? Ki(S.substr(1, S.length - 2)) : Ki(S) : S;
      }
    }), Object.defineProperty(this, "defaultValue", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof sn == 1 ? Ki(L.substr(1, L.length - 1)) : L;
      },
      set: function(S) {
        S = S.toString(), L = this instanceof sn == 1 ? "/" + Pi(S) : S;
      }
    });
    var p = null;
    Object.defineProperty(this, "_V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return p;
      },
      set: function(S) {
        this.V = S;
      }
    }), Object.defineProperty(this, "V", {
      enumerable: false,
      configurable: false,
      get: function() {
        if (p) return this instanceof sn == 0 ? Ko(p, this.objId, this.scope) : p;
      },
      set: function(S) {
        S = S.toString(), p = this instanceof sn == 0 ? S.substr(0, 1) === "(" ? Ki(S.substr(1, S.length - 2)) : Ki(S) : S;
      }
    }), Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this instanceof sn == 1 ? Ki(p.substr(1, p.length - 1)) : p;
      },
      set: function(S) {
        S = S.toString(), p = this instanceof sn == 1 ? "/" + Pi(S) : S;
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
    var j, E = false;
    Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: true,
      configurable: true,
      get: function() {
        return E;
      },
      set: function(S) {
        S = !!S, E = S;
      }
    }), Object.defineProperty(this, "page", {
      enumerable: true,
      configurable: true,
      get: function() {
        if (j) return j;
      },
      set: function(S) {
        j = S;
      }
    }), Object.defineProperty(this, "readOnly", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 1);
      },
      set: function(S) {
        S ? this.Ff = $t(this.Ff, 1) : this.Ff = Kt(this.Ff, 1);
      }
    }), Object.defineProperty(this, "required", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 2);
      },
      set: function(S) {
        S ? this.Ff = $t(this.Ff, 2) : this.Ff = Kt(this.Ff, 2);
      }
    }), Object.defineProperty(this, "noExport", {
      enumerable: true,
      configurable: true,
      get: function() {
        return !!Gt(this.Ff, 3);
      },
      set: function(S) {
        S ? this.Ff = $t(this.Ff, 3) : this.Ff = Kt(this.Ff, 3);
      }
    });
    var O = null;
    Object.defineProperty(this, "Q", {
      enumerable: true,
      configurable: false,
      get: function() {
        if (O !== null) return O;
      },
      set: function(S) {
        if ([
          0,
          1,
          2
        ].indexOf(S) === -1) throw new Error('Invalid value "' + S + '" for attribute Q supplied.');
        O = S;
      }
    }), Object.defineProperty(this, "textAlign", {
      get: function() {
        var S;
        switch (O) {
          case 0:
          default:
            S = "left";
            break;
          case 1:
            S = "center";
            break;
          case 2:
            S = "right";
        }
        return S;
      },
      configurable: true,
      enumerable: true,
      set: function(S) {
        switch (S) {
          case "right":
          case 2:
            O = 2;
            break;
          case "center":
          case 1:
            O = 1;
            break;
          default:
            O = 0;
        }
      }
    });
  };
  Sn(rr, gr);
  var Qi = function() {
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
        return rh(e, this.objId, this.scope);
      },
      set: function(t) {
        var r, s;
        s = [], typeof (r = t) == "string" && (s = function(a, f, l) {
          l || (l = 1);
          for (var u, d = []; u = f.exec(a); ) d.push(u[l]);
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
  Sn(Qi, rr);
  var ea = function() {
    Qi.call(this), this.fontName = "helvetica", this.combo = false;
  };
  Sn(ea, Qi);
  var ta = function() {
    ea.call(this), this.combo = true;
  };
  Sn(ta, ea);
  var Ds = function() {
    ta.call(this), this.edit = true;
  };
  Sn(Ds, ta);
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
          for (r in s.push("<<"), e) s.push("/" + r + " (" + Ei(t(e[r])) + ")");
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
        var r = t == null ? "" : t.toString();
        r.substr(0, 1) === "/" && (r = r.substr(1)), n = "/" + Pi(r);
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: true,
      configurable: true,
      get: function() {
        return n.substr(1, n.length - 1);
      },
      set: function(t) {
        n = "/" + Pi(t);
      }
    });
  };
  Sn(sn, rr);
  var Ts = function() {
    sn.call(this), this.pushButton = true;
  };
  Sn(Ts, sn);
  var na = function() {
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
  Sn(na, sn);
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
        var a, f = [];
        for (a in f.push("<<"), r) f.push("/" + a + " (" + Ei(s(r[a])) + ")");
        return f.push(">>"), f.join(`
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
        var a = s == null ? "" : s.toString();
        a.substr(0, 1) === "/" && (a = a.substr(1)), t = "/" + Pi(a);
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: true,
      configurable: true,
      get: function() {
        return t.substr(1, t.length - 1);
      },
      set: function(s) {
        var a = s == null ? "" : s.toString();
        a.substr(0, 1) === "/" && (a = a.substr(1)), t = "/" + Pi(a);
      }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ee.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
  };
  Sn(Vs, rr), na.prototype.setAppearance = function(n) {
    if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
      var t = this.Kids[e];
      t.appearanceStreamContent = n.createAppearanceStream(t.optionName), t.caption = n.getCA();
    }
  }, na.prototype.createOption = function(n) {
    var e = new Vs();
    return e.Parent = this, e.optionName = n, this.Kids.push(e), j5.call(this.scope, e), e;
  };
  var Bs = function() {
    sn.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ee.CheckBox.createAppearanceStream();
  };
  Sn(Bs, sn);
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
  var qs = function() {
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
  Sn(qs, Si);
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
        var e = mr(n);
        e.scope = n.scope;
        var t = [], r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), a = fl(n, n.caption);
        return t.push("0.749023 g"), t.push("0 0 " + et(Ee.internal.getWidth(n)) + " " + et(Ee.internal.getHeight(n)) + " re"), t.push("f"), t.push("BMC"), t.push("q"), t.push("0 0 1 rg"), t.push("/" + r + " " + et(a.fontSize) + " Tf " + s), t.push("BT"), t.push(a.text), t.push("ET"), t.push("Q"), t.push("EMC"), e.stream = t.join(`
`), e;
      },
      YesNormal: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color), s = [], a = Ee.internal.getHeight(n), f = Ee.internal.getWidth(n), l = fl(n, n.caption);
        return s.push("1 g"), s.push("0 0 " + et(f) + " " + et(a) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + et(f - 1) + " " + et(a - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + t + " " + et(l.fontSize) + " Tf " + r), s.push(l.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e;
      },
      OffPushDown: function(n) {
        var e = mr(n);
        e.scope = n.scope;
        var t = [];
        return t.push("0.749023 g"), t.push("0 0 " + et(Ee.internal.getWidth(n)) + " " + et(Ee.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
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
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.getWidth(n) <= Ee.internal.getHeight(n) ? Ee.internal.getWidth(n) / 4 : Ee.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Ee.internal.Bezier_C, a = Number((r * s).toFixed(5));
          return t.push("q"), t.push("1 0 0 1 " + ni(Ee.internal.getWidth(n) / 2) + " " + ni(Ee.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), t.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), t.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), t.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.getWidth(n) <= Ee.internal.getHeight(n) ? Ee.internal.getWidth(n) / 4 : Ee.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Number((2 * r).toFixed(5)), a = Number((s * Ee.internal.Bezier_C).toFixed(5)), f = Number((r * Ee.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ni(Ee.internal.getWidth(n) / 2) + " " + ni(Ee.internal.getHeight(n) / 2) + " cm"), t.push(s + " 0 m"), t.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), t.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), t.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), t.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), t.push("f"), t.push("Q"), t.push("0 g"), t.push("q"), t.push("1 0 0 1 " + ni(Ee.internal.getWidth(n) / 2) + " " + ni(Ee.internal.getHeight(n) / 2) + " cm"), t.push(r + " 0 m"), t.push(r + " " + f + " " + f + " " + r + " 0 " + r + " c"), t.push("-" + f + " " + r + " -" + r + " " + f + " -" + r + " 0 c"), t.push("-" + r + " -" + f + " -" + f + " -" + r + " 0 -" + r + " c"), t.push(f + " -" + r + " " + r + " -" + f + " " + r + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.getWidth(n) <= Ee.internal.getHeight(n) ? Ee.internal.getWidth(n) / 4 : Ee.internal.getHeight(n) / 4;
          r = Number((0.9 * r).toFixed(5));
          var s = Number((2 * r).toFixed(5)), a = Number((s * Ee.internal.Bezier_C).toFixed(5));
          return t.push("0.749023 g"), t.push("q"), t.push("1 0 0 1 " + ni(Ee.internal.getWidth(n) / 2) + " " + ni(Ee.internal.getHeight(n) / 2) + " cm"), t.push(s + " 0 m"), t.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), t.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), t.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), t.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), t.push("f"), t.push("Q"), e.stream = t.join(`
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
          var e = mr(n);
          e.scope = n.scope;
          var t = [], r = Ee.internal.calculateCross(n);
          return t.push("q"), t.push("1 1 " + et(Ee.internal.getWidth(n) - 2) + " " + et(Ee.internal.getHeight(n) - 2) + " re"), t.push("W"), t.push("n"), t.push(et(r.x1.x) + " " + et(r.x1.y) + " m"), t.push(et(r.x2.x) + " " + et(r.x2.y) + " l"), t.push(et(r.x4.x) + " " + et(r.x4.y) + " m"), t.push(et(r.x3.x) + " " + et(r.x3.y) + " l"), t.push("s"), t.push("Q"), e.stream = t.join(`
`), e;
        },
        YesPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = Ee.internal.calculateCross(n), r = [];
          return r.push("0.749023 g"), r.push("0 0 " + et(Ee.internal.getWidth(n)) + " " + et(Ee.internal.getHeight(n)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + et(Ee.internal.getWidth(n) - 2) + " " + et(Ee.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(et(t.x1.x) + " " + et(t.x1.y) + " m"), r.push(et(t.x2.x) + " " + et(t.x2.y) + " l"), r.push(et(t.x4.x) + " " + et(t.x4.y) + " m"), r.push(et(t.x3.x) + " " + et(t.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
        },
        OffPushDown: function(n) {
          var e = mr(n);
          e.scope = n.scope;
          var t = [];
          return t.push("0.749023 g"), t.push("0 0 " + et(Ee.internal.getWidth(n)) + " " + et(Ee.internal.getHeight(n)) + " re"), t.push("f"), e.stream = t.join(`
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
    return Lt(n) === "object" && (e = au(n.Rect[2])), e;
  }, Ee.internal.getHeight = function(n) {
    var e = 0;
    return Lt(n) === "object" && (e = au(n.Rect[3])), e;
  };
  var j5 = qt.addField = function(n) {
    if (I5(this, n), !(n instanceof rr)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = false, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
  };
  qt.AcroFormChoiceField = Qi, qt.AcroFormListBox = ea, qt.AcroFormComboBox = ta, qt.AcroFormEditBox = Ds, qt.AcroFormButton = sn, qt.AcroFormPushButton = Ts, qt.AcroFormRadioButton = na, qt.AcroFormCheckBox = Bs, qt.AcroFormTextField = Si, qt.AcroFormPasswordField = qs, qt.AcroFormAppearance = Ee, qt.AcroForm = {
    ChoiceField: Qi,
    ListBox: ea,
    ComboBox: ta,
    EditBox: Ds,
    Button: sn,
    PushButton: Ts,
    RadioButton: na,
    CheckBox: Bs,
    TextField: Si,
    PasswordField: qs,
    Appearance: Ee
  }, ze.AcroForm = {
    ChoiceField: Qi,
    ListBox: ea,
    ComboBox: ta,
    EditBox: Ds,
    Button: sn,
    PushButton: Ts,
    RadioButton: na,
    CheckBox: Bs,
    TextField: Si,
    PasswordField: qs,
    Appearance: Ee
  };
  ze.AcroForm;
  function sh(n) {
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
    }, s = n.__addimage__.getImageFileTypeByImageData = function(A, I) {
      var H, W, ce, he, xe, oe = t;
      if ((I = I || t) === "RGBA" || A.data !== void 0 && A.data instanceof Uint8ClampedArray && "height" in A && "width" in A) return "RGBA";
      if (Ne(A)) for (xe in r) for (ce = r[xe], H = 0; H < ce.length; H += 1) {
        for (he = true, W = 0; W < ce[H].length; W += 1) if (ce[H][W] !== void 0 && ce[H][W] !== A[W]) {
          he = false;
          break;
        }
        if (he === true) {
          oe = xe;
          break;
        }
      }
      else for (xe in r) for (ce = r[xe], H = 0; H < ce.length; H += 1) {
        for (he = true, W = 0; W < ce[H].length; W += 1) if (ce[H][W] !== void 0 && ce[H][W] !== A.charCodeAt(W)) {
          he = false;
          break;
        }
        if (he === true) {
          oe = xe;
          break;
        }
      }
      return oe === t && I !== t && (oe = I), oe;
    }, a = function A(I) {
      for (var H = this.internal.write, W = this.internal.putStream, ce = (0, this.internal.getFilters)(); ce.indexOf("FlateEncode") !== -1; ) ce.splice(ce.indexOf("FlateEncode"), 1);
      I.objectId = this.internal.newObject();
      var he = [];
      if (he.push({
        key: "Type",
        value: "/XObject"
      }), he.push({
        key: "Subtype",
        value: "/Image"
      }), he.push({
        key: "Width",
        value: I.width
      }), he.push({
        key: "Height",
        value: I.height
      }), I.colorSpace === S.INDEXED ? he.push({
        key: "ColorSpace",
        value: "[/Indexed /DeviceRGB " + (I.palette.length / 3 - 1) + " " + ("sMask" in I && I.sMask !== void 0 ? I.objectId + 2 : I.objectId + 1) + " 0 R]"
      }) : (he.push({
        key: "ColorSpace",
        value: "/" + I.colorSpace
      }), I.colorSpace === S.DEVICE_CMYK && he.push({
        key: "Decode",
        value: "[1 0 1 0 1 0 1 0]"
      })), he.push({
        key: "BitsPerComponent",
        value: I.bitsPerComponent
      }), "decodeParameters" in I && I.decodeParameters !== void 0 && he.push({
        key: "DecodeParms",
        value: "<<" + I.decodeParameters + ">>"
      }), "transparency" in I && Array.isArray(I.transparency) && I.transparency.length > 0) {
        for (var xe = "", oe = 0, ne = I.transparency.length; oe < ne; oe++) xe += I.transparency[oe] + " " + I.transparency[oe] + " ";
        he.push({
          key: "Mask",
          value: "[" + xe + "]"
        });
      }
      I.sMask !== void 0 && he.push({
        key: "SMask",
        value: I.objectId + 1 + " 0 R"
      });
      var ke = I.filter !== void 0 ? [
        "/" + I.filter
      ] : void 0;
      if (W({
        data: I.data,
        additionalKeyValues: he,
        alreadyAppliedFilters: ke,
        objectId: I.objectId
      }), H("endobj"), "sMask" in I && I.sMask !== void 0) {
        var Le, N = (Le = I.sMaskBitsPerComponent) !== null && Le !== void 0 ? Le : I.bitsPerComponent, D = {
          width: I.width,
          height: I.height,
          colorSpace: "DeviceGray",
          bitsPerComponent: N,
          data: I.sMask
        };
        "filter" in I && (D.decodeParameters = "/Predictor ".concat(I.predictor, " /Colors 1 /BitsPerComponent ").concat(N, " /Columns ").concat(I.width), D.filter = I.filter), A.call(this, D);
      }
      if (I.colorSpace === S.INDEXED) {
        var q = this.internal.newObject();
        W({
          data: ee(new Uint8Array(I.palette)),
          objectId: q
        }), H("endobj");
      }
    }, f = function() {
      var A = this.internal.collections[e + "images"];
      for (var I in A) a.call(this, A[I]);
    }, l = function() {
      var A, I = this.internal.collections[e + "images"], H = this.internal.write;
      for (var W in I) H("/I" + (A = I[W]).index, A.objectId, "0", "R");
    }, u = function() {
      this.internal.collections[e + "images"] || (this.internal.collections[e + "images"] = {}, this.internal.events.subscribe("putResources", f), this.internal.events.subscribe("putXobjectDict", l));
    }, d = function() {
      var A = this.internal.collections[e + "images"];
      return u.call(this), A;
    }, g = function() {
      return Object.keys(this.internal.collections[e + "images"]).length;
    }, w = function(A) {
      return typeof n["process" + A.toUpperCase()] == "function";
    }, L = function(A) {
      return Lt(A) === "object" && A.nodeType === 1;
    }, p = function(A, I) {
      if (A.nodeName === "IMG" && A.hasAttribute("src")) {
        var H = "" + A.getAttribute("src");
        if (H.indexOf("data:image/") === 0) return Os(unescape(H).split("base64,").pop());
        var W = n.loadFile(H, true);
        if (W !== void 0) return W;
      }
      if (A.nodeName === "CANVAS") {
        if (A.width === 0 || A.height === 0) throw new Error("Given canvas must have data. Canvas width: " + A.width + ", height: " + A.height);
        var ce;
        switch (I) {
          case "PNG":
            ce = "image/png";
            break;
          case "WEBP":
            ce = "image/webp";
            break;
          default:
            ce = "image/jpeg";
        }
        return Os(A.toDataURL(ce, 1).split("base64,").pop());
      }
    }, j = function(A) {
      var I = this.internal.collections[e + "images"];
      if (I) {
        for (var H in I) if (A === I[H].alias) return I[H];
      }
    }, E = function(A, I, H) {
      return A || I || (A = -96, I = -96), A < 0 && (A = -1 * H.width * 72 / A / this.internal.scaleFactor), I < 0 && (I = -1 * H.height * 72 / I / this.internal.scaleFactor), A === 0 && (A = I * H.width / H.height), I === 0 && (I = A * H.height / H.width), [
        A,
        I
      ];
    }, O = function(A, I, H, W, ce, he) {
      var xe = E.call(this, H, W, ce), oe = this.internal.getCoordinateString, ne = this.internal.getVerticalCoordinateString, ke = d.call(this);
      if (H = xe[0], W = xe[1], ke[ce.index] = ce, he) {
        he *= Math.PI / 180;
        var Le = Math.cos(he), N = Math.sin(he), D = function(K) {
          return K.toFixed(4);
        }, q = [
          D(Le),
          D(N),
          D(-1 * N),
          D(Le),
          0,
          0,
          "cm"
        ];
      }
      this.internal.write("q"), he ? (this.internal.write([
        1,
        "0",
        "0",
        1,
        oe(A),
        ne(I + W),
        "cm"
      ].join(" ")), this.internal.write(q.join(" ")), this.internal.write([
        oe(H),
        "0",
        "0",
        oe(W),
        "0",
        "0",
        "cm"
      ].join(" "))) : this.internal.write([
        oe(H),
        "0",
        "0",
        oe(W),
        oe(A),
        ne(I + W),
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
    }, S = n.color_spaces = {
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
    var $ = n.image_compression = {
      NONE: "NONE",
      FAST: "FAST",
      MEDIUM: "MEDIUM",
      SLOW: "SLOW"
    }, V = n.__addimage__.sHashCode = function(A) {
      var I, H, W = 0;
      if (typeof A == "string") for (H = A.length, I = 0; I < H; I++) W = (W << 5) - W + A.charCodeAt(I), W |= 0;
      else if (Ne(A)) for (H = A.byteLength / 2, I = 0; I < H; I++) W = (W << 5) - W + A[I], W |= 0;
      return W;
    }, B = n.__addimage__.validateStringAsBase64 = function(A) {
      (A = A || "").toString().trim();
      var I = true;
      return A.length === 0 && (I = false), A.length % 4 != 0 && (I = false), /^[A-Za-z0-9+/]+$/.test(A.substr(0, A.length - 2)) === false && (I = false), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(A.substr(-2)) === false && (I = false), I;
    }, ue = n.__addimage__.extractImageFromDataUrl = function(A) {
      if (A == null || !(A = A.trim()).startsWith("data:")) return null;
      var I = A.indexOf(",");
      return I < 0 ? null : A.substring(0, I).trim().endsWith("base64") ? A.substring(I + 1) : null;
    };
    n.__addimage__.isArrayBuffer = function(A) {
      return A instanceof ArrayBuffer;
    };
    var Ne = n.__addimage__.isArrayBufferView = function(A) {
      return A instanceof Int8Array || A instanceof Uint8Array || A instanceof Uint8ClampedArray || A instanceof Int16Array || A instanceof Uint16Array || A instanceof Int32Array || A instanceof Uint32Array || A instanceof Float32Array || A instanceof Float64Array;
    }, fe = n.__addimage__.binaryStringToUint8Array = function(A) {
      for (var I = A.length, H = new Uint8Array(I), W = 0; W < I; W++) H[W] = A.charCodeAt(W);
      return H;
    }, ee = n.__addimage__.arrayBufferToBinaryString = function(A) {
      for (var I = "", H = Ne(A) ? A : new Uint8Array(A), W = 0; W < H.length; W += 8192) I += String.fromCharCode.apply(null, H.subarray(W, W + 8192));
      return I;
    };
    n.addImage = function() {
      var A, I, H, W, ce, he, xe, oe, ne;
      if (typeof arguments[1] == "number" ? (I = t, H = arguments[1], W = arguments[2], ce = arguments[3], he = arguments[4], xe = arguments[5], oe = arguments[6], ne = arguments[7]) : (I = arguments[1], H = arguments[2], W = arguments[3], ce = arguments[4], he = arguments[5], xe = arguments[6], oe = arguments[7], ne = arguments[8]), Lt(A = arguments[0]) === "object" && !L(A) && "imageData" in A) {
        var ke = A;
        A = ke.imageData, I = ke.format || I || t, H = ke.x || H || 0, W = ke.y || W || 0, ce = ke.w || ke.width || ce, he = ke.h || ke.height || he, xe = ke.alias || xe, oe = ke.compression || oe, ne = ke.rotation || ke.angle || ne;
      }
      var Le = this.internal.getFilters();
      if (oe === void 0 && Le.indexOf("FlateEncode") !== -1 && (oe = "SLOW"), isNaN(H) || isNaN(W)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
      u.call(this);
      var N = z.call(this, A, I, xe, oe);
      return O.call(this, H, W, ce, he, N, ne), this;
    };
    var z = function(A, I, H, W) {
      var ce, he, xe;
      if (typeof A == "string" && s(A) === t) {
        A = unescape(A);
        var oe = ie(A, false);
        (oe !== "" || (oe = n.loadFile(A, true)) !== void 0) && (A = oe);
      }
      if (L(A) && (A = p(A, I)), I = s(A, I), !w(I)) throw new Error("addImage does not support files of type '" + I + "', please ensure that a plugin for '" + I + "' support is added.");
      if (((xe = H) == null || xe.length === 0) && (H = function(ne) {
        return typeof ne == "string" || Ne(ne) ? V(ne) : Ne(ne.data) ? V(ne.data) : null;
      }(A)), (ce = j.call(this, H)) || (A instanceof Uint8Array || I === "RGBA" || (he = A, A = fe(A)), ce = this["process" + I.toUpperCase()](A, g.call(this), H, function(ne) {
        return ne && typeof ne == "string" && (ne = ne.toUpperCase()), ne in n.image_compression ? ne : $.NONE;
      }(W), he)), !ce) throw new Error("An unknown error occurred whilst processing the image.");
      return ce;
    }, ie = n.__addimage__.convertBase64ToBinaryString = function(A, I) {
      I = typeof I != "boolean" || I;
      var H, W = "";
      if (typeof A == "string") {
        var ce;
        H = (ce = ue(A)) !== null && ce !== void 0 ? ce : A;
        try {
          W = Os(H);
        } catch (he) {
          if (I) throw B(H) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + he.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
        }
      }
      return W;
    };
    n.getImageProperties = function(A) {
      var I, H, W = "";
      if (L(A) && (A = p(A)), typeof A == "string" && s(A) === t && ((W = ie(A, false)) === "" && (W = n.loadFile(A) || ""), A = W), H = s(A), !w(H)) throw new Error("addImage does not support files of type '" + H + "', please ensure that a plugin for '" + H + "' support is added.");
      if (A instanceof Uint8Array || (A = fe(A)), !(I = this["process" + H.toUpperCase()](A))) throw new Error("An unknown error occurred whilst processing the image");
      return I.fileType = H, I;
    };
  })(ze.API), function(n) {
    var e = function(t) {
      if (t !== void 0 && t != "") return true;
    };
    ze.API.events.push([
      "addPage",
      function(t) {
        this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
      }
    ]), n.events.push([
      "putPage",
      function(t) {
        for (var r, s, a, f = this.internal.getCoordinateString, l = this.internal.getVerticalCoordinateString, u = this.internal.getPageInfoByObjId(t.objId), d = t.pageContext.annotations, g = false, w = 0; w < d.length && !g; w++) switch ((r = d[w]).type) {
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
          for (var L = 0; L < d.length; L++) {
            r = d[L];
            var p = this.internal.pdfEscape, j = this.internal.getEncryptor(t.objId);
            switch (r.type) {
              case "reference":
                this.internal.write(" " + r.object.objId + " 0 R ");
                break;
              case "text":
                var E = this.internal.newAdditionalObject(), O = this.internal.newAdditionalObject(), S = this.internal.getEncryptor(E.objId), $ = r.title || "Note";
                a = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + f(r.bounds.x) + " " + l(r.bounds.y + r.bounds.h) + " " + f(r.bounds.x + r.bounds.w) + " " + l(r.bounds.y) + "] ") + "/Contents (" + p(S(r.contents)) + ")", a += " /Popup " + O.objId + " 0 R", a += " /P " + u.objId + " 0 R", a += " /T (" + p(S($)) + ") >>", E.content = a;
                var V = E.objId + " 0 R";
                a = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + f(r.bounds.x + 30) + " " + l(r.bounds.y + r.bounds.h) + " " + f(r.bounds.x + r.bounds.w + 30) + " " + l(r.bounds.y) + "] ") + " /Parent " + V, r.open && (a += " /Open true"), a += " >>", O.content = a, this.internal.write(E.objId, "0 R", O.objId, "0 R");
                break;
              case "freetext":
                s = "/Rect [" + f(r.bounds.x) + " " + l(r.bounds.y) + " " + f(r.bounds.x + r.bounds.w) + " " + l(r.bounds.y + r.bounds.h) + "] ";
                var B = r.color || "#000000";
                a = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(j(r.contents)) + ")", a += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + B + ")", a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
                break;
              case "link":
                if (r.options.name) {
                  var ue = this.annotations._nameMap[r.options.name];
                  r.options.pageNumber = ue.page, r.options.top = ue.y;
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
                    var Ne = l(r.options.top);
                    r.options.left = r.options.left || 0, r.options.zoom === void 0 && (r.options.zoom = 0), a += " /XYZ " + r.options.left + " " + Ne + " " + r.options.zoom + "]";
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
    }, n.link = function(t, r, s, a, f) {
      var l = this.internal.getCurrentPageInfo(), u = this.internal.getCoordinateString, d = this.internal.getVerticalCoordinateString;
      l.pageContext.annotations.push({
        finalBounds: {
          x: u(t),
          y: d(r),
          w: u(t + s),
          h: d(r + a)
        },
        options: f,
        type: "link"
      });
    }, n.textWithLink = function(t, r, s, a) {
      var f, l, u = this.getTextWidth(t), d = this.internal.getLineHeight() / this.internal.scaleFactor;
      if (a.maxWidth !== void 0) {
        l = a.maxWidth;
        var g = this.splitTextToSize(t, l).length;
        f = Math.ceil(d * g);
      } else l = u, f = d;
      return this.text(t, r, s, a), s += 0.2 * d, a.align === "center" && (r -= u / 2), a.align === "right" && (r -= u), this.link(r, s - d, l, f, a), u;
    }, n.getTextWidth = function(t) {
      var r = this.internal.getFontSize();
      return this.getStringUnitWidth(t) * r / this.internal.scaleFactor;
    };
  }(ze.API), function(n) {
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
    var a = n.__arabicParser__.isInArabicSubstitutionA = function(E) {
      return e[E.charCodeAt(0)] !== void 0;
    }, f = n.__arabicParser__.isArabicLetter = function(E) {
      return typeof E == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(E);
    }, l = n.__arabicParser__.isArabicEndLetter = function(E) {
      return f(E) && a(E) && e[E.charCodeAt(0)].length <= 2;
    }, u = n.__arabicParser__.isArabicAlfLetter = function(E) {
      return f(E) && s.indexOf(E.charCodeAt(0)) >= 0;
    };
    n.__arabicParser__.arabicLetterHasIsolatedForm = function(E) {
      return f(E) && a(E) && e[E.charCodeAt(0)].length >= 1;
    };
    var d = n.__arabicParser__.arabicLetterHasFinalForm = function(E) {
      return f(E) && a(E) && e[E.charCodeAt(0)].length >= 2;
    };
    n.__arabicParser__.arabicLetterHasInitialForm = function(E) {
      return f(E) && a(E) && e[E.charCodeAt(0)].length >= 3;
    };
    var g = n.__arabicParser__.arabicLetterHasMedialForm = function(E) {
      return f(E) && a(E) && e[E.charCodeAt(0)].length == 4;
    }, w = n.__arabicParser__.resolveLigatures = function(E) {
      var O = 0, S = t, $ = "", V = 0;
      for (O = 0; O < E.length; O += 1) S[E.charCodeAt(O)] !== void 0 ? (V++, typeof (S = S[E.charCodeAt(O)]) == "number" && ($ += String.fromCharCode(S), S = t, V = 0), O === E.length - 1 && (S = t, $ += E.charAt(O - (V - 1)), O -= V - 1, V = 0)) : (S = t, $ += E.charAt(O - V), O -= V, V = 0);
      return $;
    };
    n.__arabicParser__.isArabicDiacritic = function(E) {
      return E !== void 0 && r[E.charCodeAt(0)] !== void 0;
    };
    var L = n.__arabicParser__.getCorrectForm = function(E, O, S) {
      return f(E) ? a(E) === false ? -1 : !d(E) || !f(O) && !f(S) || !f(S) && l(O) || l(E) && !f(O) || l(E) && u(O) || l(E) && l(O) ? 0 : g(E) && f(O) && !l(O) && f(S) && d(S) ? 3 : l(E) || !f(S) ? 1 : 2 : -1;
    }, p = function(E) {
      var O = 0, S = 0, $ = 0, V = "", B = "", ue = "", Ne = (E = E || "").split("\\s+"), fe = [];
      for (O = 0; O < Ne.length; O += 1) {
        for (fe.push(""), S = 0; S < Ne[O].length; S += 1) V = Ne[O][S], B = Ne[O][S - 1], ue = Ne[O][S + 1], f(V) ? ($ = L(V, B, ue), fe[O] += $ !== -1 ? String.fromCharCode(e[V.charCodeAt(0)][$]) : V) : fe[O] += V;
        fe[O] = w(fe[O]);
      }
      return fe.join(" ");
    }, j = n.__arabicParser__.processArabic = n.processArabic = function() {
      var E, O = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, S = [];
      if (Array.isArray(O)) {
        var $ = 0;
        for (S = [], $ = 0; $ < O.length; $ += 1) Array.isArray(O[$]) ? S.push([
          p(O[$][0]),
          O[$][1],
          O[$][2]
        ]) : S.push([
          p(O[$])
        ]);
        E = S;
      } else E = p(O);
      return typeof arguments[0] == "string" ? E : (arguments[0].text = E, arguments[0]);
    };
    n.events.push([
      "preProcessText",
      j
    ]);
  }(ze.API), ze.API.autoPrint = function(n) {
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
      var f = {};
      Object.defineProperty(this, "style", {
        get: function() {
          return f;
        },
        set: function(l) {
          f = l;
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
  }(ze.API), function(n) {
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
        set: function(E) {
          u = E;
        }
      });
      var d = arguments[1];
      Object.defineProperty(this, "y", {
        enumerable: true,
        get: function() {
          return d;
        },
        set: function(E) {
          d = E;
        }
      });
      var g = arguments[2];
      Object.defineProperty(this, "width", {
        enumerable: true,
        get: function() {
          return g;
        },
        set: function(E) {
          g = E;
        }
      });
      var w = arguments[3];
      Object.defineProperty(this, "height", {
        enumerable: true,
        get: function() {
          return w;
        },
        set: function(E) {
          w = E;
        }
      });
      var L = arguments[4];
      Object.defineProperty(this, "text", {
        enumerable: true,
        get: function() {
          return L;
        },
        set: function(E) {
          L = E;
        }
      });
      var p = arguments[5];
      Object.defineProperty(this, "lineNumber", {
        enumerable: true,
        get: function() {
          return p;
        },
        set: function(E) {
          p = E;
        }
      });
      var j = arguments[6];
      return Object.defineProperty(this, "align", {
        enumerable: true,
        get: function() {
          return j;
        },
        set: function(E) {
          j = E;
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
      var g = (d = d || {}).fontSize || this.getFontSize(), w = d.font || this.getFont(), L = d.scaleFactor || this.internal.scaleFactor, p = 0, j = 0, E = 0, O = this;
      if (!Array.isArray(u) && typeof u != "string") {
        if (typeof u != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
        u = String(u);
      }
      var S = d.maxWidth;
      S > 0 ? typeof u == "string" ? u = this.splitTextToSize(u, S) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function(V, B) {
        return V.concat(O.splitTextToSize(B, S));
      }, [])) : u = Array.isArray(u) ? u : [
        u
      ];
      for (var $ = 0; $ < u.length; $++) p < (E = this.getStringUnitWidth(u[$], {
        font: w
      }) * g) && (p = E);
      return p !== 0 && (j = u.length), {
        w: p /= L,
        h: Math.max((j * g * this.getLineHeightFactor() - g * (this.getLineHeightFactor() - 1)) / L, 0)
      };
    }, n.cellAddPage = function() {
      r.call(this), this.addPage();
      var u = this.internal.__cell__.margins || e;
      return this.internal.__cell__.lastCell = new a(u.left, u.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
    };
    var f = n.cell = function() {
      var u;
      u = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), r.call(this);
      var d = this.internal.__cell__.lastCell, g = this.internal.__cell__.padding, w = this.internal.__cell__.margins || e, L = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
      return d.lineNumber !== void 0 && (d.lineNumber === u.lineNumber ? (u.x = (d.x || 0) + (d.width || 0), u.y = d.y || 0) : d.y + d.height + u.height + w.bottom > this.getPageHeight() ? (this.cellAddPage(), u.y = w.top, p && L && (this.printHeaderRow(u.lineNumber, true), u.y += L[0].height)) : u.y = d.y + d.height || u.y), u.text[0] !== void 0 && (this.rect(u.x, u.y, u.width, u.height, t === true ? "FD" : void 0), u.align === "right" ? this.text(u.text, u.x + u.width - g, u.y + g, {
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
    n.table = function(u, d, g, w, L) {
      if (r.call(this), !g) throw new Error("No data for PDF table.");
      var p, j, E, O, S = [], $ = [], V = [], B = {}, ue = {}, Ne = [], fe = [], ee = (L = L || {}).autoSize || false, z = L.printHeaders !== false, ie = L.css && L.css["font-size"] !== void 0 ? 16 * L.css["font-size"] : L.fontSize || 12, A = L.margins || Object.assign({
        width: this.getPageWidth()
      }, e), I = typeof L.padding == "number" ? L.padding : 3, H = L.headerBackgroundColor || "#c8c8c8", W = L.headerTextColor || "#000";
      if (s.call(this), this.internal.__cell__.printHeaders = z, this.internal.__cell__.margins = A, this.internal.__cell__.table_font_size = ie, this.internal.__cell__.padding = I, this.internal.__cell__.headerBackgroundColor = H, this.internal.__cell__.headerTextColor = W, this.setFontSize(ie), w == null) $ = S = Object.keys(g[0]), V = S.map(function() {
        return "left";
      });
      else if (Array.isArray(w) && Lt(w[0]) === "object") for (S = w.map(function(ke) {
        return ke.name;
      }), $ = w.map(function(ke) {
        return ke.prompt || ke.name || "";
      }), V = w.map(function(ke) {
        return ke.align || "left";
      }), p = 0; p < w.length; p += 1) ue[w[p].name] = 0.7499990551181103 * w[p].width;
      else Array.isArray(w) && typeof w[0] == "string" && ($ = S = w, V = S.map(function() {
        return "left";
      }));
      if (ee || Array.isArray(w) && typeof w[0] == "string") for (p = 0; p < S.length; p += 1) {
        for (B[O = S[p]] = g.map(function(ke) {
          return ke[O];
        }), this.setFont(void 0, "bold"), Ne.push(this.getTextDimensions($[p], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w), j = B[O], this.setFont(void 0, "normal"), E = 0; E < j.length; E += 1) Ne.push(this.getTextDimensions(j[E], {
          fontSize: this.internal.__cell__.table_font_size,
          scaleFactor: this.internal.scaleFactor
        }).w);
        ue[O] = Math.max.apply(null, Ne) + I + I, Ne = [];
      }
      if (z) {
        var ce = {};
        for (p = 0; p < S.length; p += 1) ce[S[p]] = {}, ce[S[p]].text = $[p], ce[S[p]].align = V[p];
        var he = l.call(this, ce, ue);
        fe = S.map(function(ke) {
          return new a(u, d, ue[ke], he, ce[ke].text, void 0, ce[ke].align);
        }), this.setTableHeaderRow(fe), this.printHeaderRow(1, false);
      }
      var xe = w.reduce(function(ke, Le) {
        return ke[Le.name] = Le.align, ke;
      }, {});
      for (p = 0; p < g.length; p += 1) {
        "rowStart" in L && L.rowStart instanceof Function && L.rowStart({
          row: p,
          data: g[p]
        }, this);
        var oe = l.call(this, g[p], ue);
        for (E = 0; E < S.length; E += 1) {
          var ne = g[p][S[E]];
          "cellStart" in L && L.cellStart instanceof Function && L.cellStart({
            row: p,
            col: E,
            data: ne
          }, this), f.call(this, new a(u, d, ue[S[E]], oe, ne, p + 2, xe[S[E]]));
        }
      }
      return this.internal.__cell__.table_x = u, this.internal.__cell__.table_y = d, this;
    };
    var l = function(u, d) {
      var g = this.internal.__cell__.padding, w = this.internal.__cell__.table_font_size, L = this.internal.scaleFactor;
      return Object.keys(u).map(function(p) {
        var j = u[p];
        return this.splitTextToSize(j.hasOwnProperty("text") ? j.text : j, d[p] - g - g);
      }, this).map(function(p) {
        return this.getLineHeightFactor() * p.length * w / L + g + g;
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
      for (var L = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
        g = this.internal.__cell__.tableHeaderRow[p].clone(), d && (g.y = this.internal.__cell__.margins.top || 0, L.push(g)), g.lineNumber = u;
        var j = this.getTextColor();
        this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), f.call(this, g), this.setTextColor(j);
      }
      L.length > 0 && this.setTableHeaderRow(L), this.setFont(void 0, "normal"), t = false;
    };
  }(ze.API);
  var oh = {
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
  }, lh = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
  ], hl = sh(lh), ch = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], E5 = sh(ch);
  function Yo(n) {
    var e = n.family.replace(/"|'/g, "").toLowerCase(), t = function(a) {
      return oh[a = a || "normal"] ? a : "normal";
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
  var F5 = {
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
  function M5(n, e) {
    for (var t = 0; t < n.length; ) {
      if (n.charAt(t) === e) return [
        n.substring(0, t),
        n.substring(t + 1)
      ];
      t += 1;
    }
    return null;
  }
  function R5(n) {
    var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return e === null ? null : [
      e[0],
      n.substring(e[0].length)
    ];
  }
  var Yi, Es, uu, fu, hu, Jo = [
    "times"
  ];
  function du(n, e, t, r, s) {
    var a = 4, f = mu;
    switch (s) {
      case ze.API.image_compression.FAST:
        a = 1, f = pu;
        break;
      case ze.API.image_compression.MEDIUM:
        a = 6, f = gu;
        break;
      case ze.API.image_compression.SLOW:
        a = 9, f = bu;
    }
    n = function(u, d, g, w) {
      for (var L, p = u.length / d, j = new Uint8Array(u.length + p), E = [
        O5,
        pu,
        mu,
        gu,
        bu
      ], O = 0; O < p; O += 1) {
        var S = O * d, $ = u.subarray(S, S + d);
        if (w) j.set(w($, g, L), S + O);
        else {
          for (var V = E.length, B = [], ue = 0; ue < V; ue += 1) B[ue] = E[ue]($, g, L);
          var Ne = T5(B.concat());
          j.set(B[Ne], S + O);
        }
        L = $;
      }
      return j;
    }(n, e, Math.ceil(t * r / 8), f);
    var l = nl(n, {
      level: a
    });
    return ze.API.__addimage__.arrayBufferToBinaryString(l);
  }
  function O5(n) {
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
      var f = t && t[a] || 0;
      s[a + 1] = n[a] - f + 256 & 255;
    }
    return s;
  }
  function gu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 3;
    for (var a = 0; a < r; a += 1) {
      var f = n[a - e] || 0, l = t && t[a] || 0;
      s[a + 1] = n[a] + 256 - (f + l >>> 1) & 255;
    }
    return s;
  }
  function bu(n, e, t) {
    var r = n.length, s = [];
    s[0] = 4;
    for (var a = 0; a < r; a += 1) {
      var f = D5(n[a - e] || 0, t && t[a] || 0, t && t[a - e] || 0);
      s[a + 1] = n[a] - f + 256 & 255;
    }
    return s;
  }
  function D5(n, e, t) {
    if (n === e && e === t) return n;
    var r = Math.abs(e - t), s = Math.abs(n - t), a = Math.abs(n + e - t - t);
    return r <= s && r <= a ? n : s <= a ? e : t;
  }
  function T5(n) {
    var e = n.map(function(t) {
      return t.reduce(function(r, s) {
        return r + Math.abs(s);
      }, 0);
    });
    return e.indexOf(Math.min.apply(null, e));
  }
  function Xo(n, e, t) {
    var r = e * t, s = Math.floor(r / 8), a = 16 - (r - 8 * s + t), f = (1 << t) - 1;
    return uh(n, s) >> a & f;
  }
  function vu(n, e, t, r) {
    var s = t * r, a = Math.floor(s / 8), f = 16 - (s - 8 * a + r), l = (1 << r) - 1, u = (e & l) << f;
    (function(d, g, w) {
      if (g + 1 < d.byteLength) d.setUint16(g, w, false);
      else {
        var L = w >> 8 & 255;
        d.setUint8(g, L);
      }
    })(n, a, uh(n, a) & ~(l << f) & 65535 | u);
  }
  function uh(n, e) {
    return e + 1 < n.byteLength ? n.getUint16(e, false) : n.getUint8(e) << 8;
  }
  function B5(n) {
    var e = 0;
    if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
    var t = n[e++] | n[e++] << 8, r = n[e++] | n[e++] << 8, s = n[e++], a = s >> 7, f = 1 << 1 + (7 & s);
    n[e++], n[e++];
    var l = null, u = null;
    a && (l = e, u = f, e += 3 * f);
    var d = true, g = [], w = 0, L = null, p = 0, j = null;
    for (this.width = t, this.height = r; d && e < n.length; ) switch (n[e++]) {
      case 33:
        switch (n[e++]) {
          case 255:
            if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, j = n[e++] | n[e++] << 8, e++;
            else for (e += 12; ; ) {
              if (!((A = n[e++]) >= 0)) throw Error("Invalid block size");
              if (A === 0) break;
              e += A;
            }
            break;
          case 249:
            if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
            var E = n[e++];
            w = n[e++] | n[e++] << 8, L = n[e++], 1 & E || (L = null), p = E >> 2 & 7, e++;
            break;
          case 254:
            for (; ; ) {
              if (!((A = n[e++]) >= 0)) throw Error("Invalid block size");
              if (A === 0) break;
              e += A;
            }
            break;
          default:
            throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16));
        }
        break;
      case 44:
        var O = n[e++] | n[e++] << 8, S = n[e++] | n[e++] << 8, $ = n[e++] | n[e++] << 8, V = n[e++] | n[e++] << 8, B = n[e++], ue = B >> 6 & 1, Ne = 1 << 1 + (7 & B), fe = l, ee = u, z = false;
        B >> 7 && (z = true, fe = e, ee = Ne, e += 3 * Ne);
        var ie = e;
        for (e++; ; ) {
          var A;
          if (!((A = n[e++]) >= 0)) throw Error("Invalid block size");
          if (A === 0) break;
          e += A;
        }
        g.push({
          x: O,
          y: S,
          width: $,
          height: V,
          has_local_palette: z,
          palette_offset: fe,
          palette_size: ee,
          data_offset: ie,
          data_length: e - ie,
          transparent_index: L,
          interlaced: !!ue,
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
    }, this.frameInfo = function(I) {
      if (I < 0 || I >= g.length) throw new Error("Frame index out of range.");
      return g[I];
    }, this.decodeAndBlitFrameBGRA = function(I, H) {
      var W = this.frameInfo(I), ce = W.width * W.height;
      if (ce > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
      var he = new Uint8Array(ce);
      wu(n, W.data_offset, he, ce);
      var xe = W.palette_offset, oe = W.transparent_index;
      oe === null && (oe = 256);
      var ne = W.width, ke = t - ne, Le = ne, N = 4 * (W.y * t + W.x), D = 4 * ((W.y + W.height) * t + W.x), q = N, K = 4 * ke;
      W.interlaced === true && (K += 4 * t * 7);
      for (var X = 8, T = 0, J = he.length; T < J; ++T) {
        var Z = he[T];
        if (Le === 0 && (Le = ne, (q += K) >= D && (K = 4 * ke + 4 * t * (X - 1), q = N + (ne + ke) * (X << 1), X >>= 1)), Z === oe) q += 4;
        else {
          var se = n[xe + 3 * Z], le = n[xe + 3 * Z + 1], we = n[xe + 3 * Z + 2];
          H[q++] = we, H[q++] = le, H[q++] = se, H[q++] = 255;
        }
        --Le;
      }
    }, this.decodeAndBlitFrameRGBA = function(I, H) {
      var W = this.frameInfo(I), ce = W.width * W.height;
      if (ce > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
      var he = new Uint8Array(ce);
      wu(n, W.data_offset, he, ce);
      var xe = W.palette_offset, oe = W.transparent_index;
      oe === null && (oe = 256);
      var ne = W.width, ke = t - ne, Le = ne, N = 4 * (W.y * t + W.x), D = 4 * ((W.y + W.height) * t + W.x), q = N, K = 4 * ke;
      W.interlaced === true && (K += 4 * t * 7);
      for (var X = 8, T = 0, J = he.length; T < J; ++T) {
        var Z = he[T];
        if (Le === 0 && (Le = ne, (q += K) >= D && (K = 4 * ke + 4 * t * (X - 1), q = N + (ne + ke) * (X << 1), X >>= 1)), Z === oe) q += 4;
        else {
          var se = n[xe + 3 * Z], le = n[xe + 3 * Z + 1], we = n[xe + 3 * Z + 2];
          H[q++] = se, H[q++] = le, H[q++] = we, H[q++] = 255;
        }
        --Le;
      }
    };
  }
  function wu(n, e, t, r) {
    for (var s = n[e++], a = 1 << s, f = a + 1, l = f + 1, u = s + 1, d = (1 << u) - 1, g = 0, w = 0, L = 0, p = n[e++], j = new Int32Array(4096), E = null; ; ) {
      for (; g < 16 && p !== 0; ) w |= n[e++] << g, g += 8, p === 1 ? p = n[e++] : --p;
      if (g < u) break;
      var O = w & d;
      if (w >>= u, g -= u, O !== a) {
        if (O === f) break;
        for (var S = O < l ? O : E, $ = 0, V = S; V > a; ) V = j[V] >> 8, ++$;
        var B = V;
        if (L + $ + (S !== O ? 1 : 0) > r) return void Pt.log("Warning, gif stream longer than expected.");
        t[L++] = B;
        var ue = L += $;
        for (S !== O && (t[L++] = B), V = S; $--; ) V = j[V], t[--ue] = 255 & V, V >>= 8;
        E !== null && l < 4096 && (j[l++] = E << 8 | B, l >= d + 1 && u < 12 && (++u, d = d << 1 | 1)), E = O;
      } else l = f + 1, d = (1 << (u = s + 1)) - 1, E = null;
    }
    return L !== r && Pt.log("Warning, gif stream shorter than expected."), t;
  }
  function Zo(n) {
    var e, t, r, s, a, f = Math.floor, l = new Array(64), u = new Array(64), d = new Array(64), g = new Array(64), w = new Array(65535), L = new Array(65535), p = new Array(64), j = new Array(64), E = [], O = 0, S = 7, $ = new Array(64), V = new Array(64), B = new Array(64), ue = new Array(256), Ne = new Array(2048), fe = [
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
    ], z = [
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
    ], A = [
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
    ], W = [
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
    function he(N, D) {
      for (var q = 0, K = 0, X = new Array(), T = 1; T <= 16; T++) {
        for (var J = 1; J <= N[T]; J++) X[D[K]] = [], X[D[K]][0] = q, X[D[K]][1] = T, K++, q++;
        q *= 2;
      }
      return X;
    }
    function xe(N) {
      for (var D = N[0], q = N[1] - 1; q >= 0; ) D & 1 << q && (O |= 1 << S), q--, --S < 0 && (O == 255 ? (oe(255), oe(0)) : oe(O), S = 7, O = 0);
    }
    function oe(N) {
      E.push(N);
    }
    function ne(N) {
      oe(N >> 8 & 255), oe(255 & N);
    }
    function ke(N, D, q, K, X) {
      for (var T, J = X[0], Z = X[240], se = function(ye, Fe) {
        var Ie, We, Ve, yt, ft, tt, dt, ht, Te, it, He = 0;
        for (Te = 0; Te < 8; ++Te) {
          Ie = ye[He], We = ye[He + 1], Ve = ye[He + 2], yt = ye[He + 3], ft = ye[He + 4], tt = ye[He + 5], dt = ye[He + 6];
          var Ut = Ie + (ht = ye[He + 7]), gt = Ie - ht, lt = We + dt, ct = We - dt, Ft = Ve + tt, Ge = Ve - tt, Ct = yt + ft, Ye = yt - ft, nt = Ut + Ct, Mt = Ut - Ct, ut = lt + Ft, $e = lt - Ft;
          ye[He] = nt + ut, ye[He + 4] = nt - ut;
          var xt = 0.707106781 * ($e + Mt);
          ye[He + 2] = Mt + xt, ye[He + 6] = Mt - xt;
          var si = 0.382683433 * ((nt = Ye + Ge) - ($e = ct + gt)), dn = 0.5411961 * nt + si, vr = 1.306562965 * $e + si, ar = 0.707106781 * (ut = Ge + ct), Ke = gt + ar, wr = gt - ar;
          ye[He + 5] = wr + dn, ye[He + 3] = wr - dn, ye[He + 1] = Ke + vr, ye[He + 7] = Ke - vr, He += 8;
        }
        for (He = 0, Te = 0; Te < 8; ++Te) {
          Ie = ye[He], We = ye[He + 8], Ve = ye[He + 16], yt = ye[He + 24], ft = ye[He + 32], tt = ye[He + 40], dt = ye[He + 48];
          var yr = Ie + (ht = ye[He + 56]), On = Ie - ht, Dn = We + dt, Dt = We - dt, an = Ve + tt, on = Ve - tt, oi = yt + ft, qr = yt - ft, Kn = yr + oi, sr = yr - oi, Yn = Dn + an, Jn = Dn - an;
          ye[He] = Kn + Yn, ye[He + 32] = Kn - Yn;
          var Tn = 0.707106781 * (Jn + sr);
          ye[He + 16] = sr + Tn, ye[He + 48] = sr - Tn;
          var li = 0.382683433 * ((Kn = qr + on) - (Jn = Dt + On)), or = 0.5411961 * Kn + li, ci = 1.306562965 * Jn + li, Fi = 0.707106781 * (Yn = on + Dt), Mi = On + Fi, Ri = On - Fi;
          ye[He + 40] = Ri + or, ye[He + 24] = Ri - or, ye[He + 8] = Mi + ci, ye[He + 56] = Mi - ci, He++;
        }
        for (Te = 0; Te < 64; ++Te) it = ye[Te] * Fe[Te], p[Te] = it > 0 ? it + 0.5 | 0 : it - 0.5 | 0;
        return p;
      }(N, D), le = 0; le < 64; ++le) j[fe[le]] = se[le];
      var we = j[0] - q;
      q = j[0], we == 0 ? xe(K[0]) : (xe(K[L[T = 32767 + we]]), xe(w[T]));
      for (var ve = 63; ve > 0 && j[ve] == 0; ) ve--;
      if (ve == 0) return xe(J), q;
      for (var Re, P = 1; P <= ve; ) {
        for (var Pe = P; j[P] == 0 && P <= ve; ) ++P;
        var Xe = P - Pe;
        if (Xe >= 16) {
          Re = Xe >> 4;
          for (var qe = 1; qe <= Re; ++qe) xe(Z);
          Xe &= 15;
        }
        T = 32767 + j[P], xe(X[(Xe << 4) + L[T]]), xe(w[T]), P++;
      }
      return ve != 63 && xe(J), q;
    }
    function Le(N) {
      N = Math.min(Math.max(N, 1), 100), a != N && (function(D) {
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
        ], K = 0; K < 64; K++) {
          var X = f((q[K] * D + 50) / 100);
          X = Math.min(Math.max(X, 1), 255), l[fe[K]] = X;
        }
        for (var T = [
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
          var Z = f((T[J] * D + 50) / 100);
          Z = Math.min(Math.max(Z, 1), 255), u[fe[J]] = Z;
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
        ], le = 0, we = 0; we < 8; we++) for (var ve = 0; ve < 8; ve++) d[le] = 1 / (l[fe[le]] * se[we] * se[ve] * 8), g[le] = 1 / (u[fe[le]] * se[we] * se[ve] * 8), le++;
      }(N < 50 ? Math.floor(5e3 / N) : Math.floor(200 - 2 * N)), a = N);
    }
    this.encode = function(N, D) {
      D && Le(D), E = new Array(), O = 0, S = 7, ne(65496), ne(65504), ne(16), oe(74), oe(70), oe(73), oe(70), oe(0), oe(1), oe(1), oe(0), ne(1), ne(1), oe(0), oe(0), function() {
        ne(65499), ne(132), oe(0);
        for (var We = 0; We < 64; We++) oe(l[We]);
        oe(1);
        for (var Ve = 0; Ve < 64; Ve++) oe(u[Ve]);
      }(), function(We, Ve) {
        ne(65472), ne(17), oe(8), ne(Ve), ne(We), oe(3), oe(1), oe(17), oe(0), oe(2), oe(17), oe(1), oe(3), oe(17), oe(1);
      }(N.width, N.height), function() {
        ne(65476), ne(418), oe(0);
        for (var We = 0; We < 16; We++) oe(ee[We + 1]);
        for (var Ve = 0; Ve <= 11; Ve++) oe(z[Ve]);
        oe(16);
        for (var yt = 0; yt < 16; yt++) oe(ie[yt + 1]);
        for (var ft = 0; ft <= 161; ft++) oe(A[ft]);
        oe(1);
        for (var tt = 0; tt < 16; tt++) oe(I[tt + 1]);
        for (var dt = 0; dt <= 11; dt++) oe(H[dt]);
        oe(17);
        for (var ht = 0; ht < 16; ht++) oe(W[ht + 1]);
        for (var Te = 0; Te <= 161; Te++) oe(ce[Te]);
      }(), ne(65498), ne(12), oe(3), oe(1), oe(0), oe(2), oe(17), oe(3), oe(17), oe(0), oe(63), oe(0);
      var q = 0, K = 0, X = 0;
      O = 0, S = 7, this.encode.displayName = "_encode_";
      for (var T, J, Z, se, le, we, ve, Re, P, Pe = N.data, Xe = N.width, qe = N.height, ye = 4 * Xe, Fe = 0; Fe < qe; ) {
        for (T = 0; T < ye; ) {
          for (le = ye * Fe + T, ve = -1, Re = 0, P = 0; P < 64; P++) we = le + (Re = P >> 3) * ye + (ve = 4 * (7 & P)), Fe + Re >= qe && (we -= ye * (Fe + 1 + Re - qe)), T + ve >= ye && (we -= T + ve - ye + 4), J = Pe[we++], Z = Pe[we++], se = Pe[we++], $[P] = (Ne[J] + Ne[Z + 256 | 0] + Ne[se + 512 | 0] >> 16) - 128, V[P] = (Ne[J + 768 | 0] + Ne[Z + 1024 | 0] + Ne[se + 1280 | 0] >> 16) - 128, B[P] = (Ne[J + 1280 | 0] + Ne[Z + 1536 | 0] + Ne[se + 1792 | 0] >> 16) - 128;
          q = ke($, d, q, e, r), K = ke(V, g, K, t, s), X = ke(B, g, X, t, s), T += 32;
        }
        Fe += 8;
      }
      if (S >= 0) {
        var Ie = [];
        Ie[1] = S + 1, Ie[0] = (1 << S + 1) - 1, xe(Ie);
      }
      return ne(65497), new Uint8Array(E);
    }, n = n || 50, function() {
      for (var N = String.fromCharCode, D = 0; D < 256; D++) ue[D] = N(D);
    }(), e = he(ee, z), t = he(I, H), r = he(ie, A), s = he(W, ce), function() {
      for (var N = 1, D = 2, q = 1; q <= 15; q++) {
        for (var K = N; K < D; K++) L[32767 + K] = q, w[32767 + K] = [], w[32767 + K][1] = q, w[32767 + K][0] = K;
        for (var X = -(D - 1); X <= -N; X++) L[32767 + X] = q, w[32767 + X] = [], w[32767 + X][1] = q, w[32767 + X][0] = D - 1 + X;
        N <<= 1, D <<= 1;
      }
    }(), function() {
      for (var N = 0; N < 256; N++) Ne[N] = 19595 * N, Ne[N + 256 | 0] = 38470 * N, Ne[N + 512 | 0] = 7471 * N + 32768, Ne[N + 768 | 0] = -11059 * N, Ne[N + 1024 | 0] = -21709 * N, Ne[N + 1280 | 0] = 32768 * N + 8421375, Ne[N + 1536 | 0] = -27439 * N, Ne[N + 1792 | 0] = -5329 * N;
    }(), Le(n);
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
    function e(z) {
      if (!z) throw Error("assert :P");
    }
    function t(z, ie, A) {
      for (var I = 0; 4 > I; I++) if (z[ie + I] != A.charCodeAt(I)) return true;
      return false;
    }
    function r(z, ie, A, I, H) {
      for (var W = 0; W < H; W++) z[ie + W] = A[I + W];
    }
    function s(z, ie, A, I) {
      for (var H = 0; H < I; H++) z[ie + H] = A;
    }
    function a(z) {
      return new Int32Array(z);
    }
    function f(z, ie) {
      for (var A = [], I = 0; I < z; I++) A.push(new ie());
      return A;
    }
    function l(z, ie) {
      var A = [];
      return function I(H, W, ce) {
        for (var he = ce[W], xe = 0; xe < he && (H.push(ce.length > W + 1 ? [] : new ie()), !(ce.length < W + 1)); xe++) I(H[xe], W + 1, ce);
      }(A, 0, z), A;
    }
    var u = function() {
      var z = this;
      function ie(i, o) {
        for (var h = 1 << o - 1 >>> 0; i & h; ) h >>>= 1;
        return h ? (i & h - 1) + h : i;
      }
      function A(i, o, h, m, v) {
        e(!(m % h));
        do
          i[o + (m -= h)] = v;
        while (0 < m);
      }
      function I(i, o, h, m, v) {
        if (e(2328 >= v), 512 >= v) var y = a(512);
        else if ((y = a(v)) == null) return 0;
        return function(x, _, k, F, G, ae) {
          var M, Y, te = _, de = 1 << k, re = a(16), pe = a(16);
          for (e(G != 0), e(F != null), e(x != null), e(0 < k), Y = 0; Y < G; ++Y) {
            if (15 < F[Y]) return 0;
            ++re[F[Y]];
          }
          if (re[0] == G) return 0;
          for (pe[1] = 0, M = 1; 15 > M; ++M) {
            if (re[M] > 1 << M) return 0;
            pe[M + 1] = pe[M] + re[M];
          }
          for (Y = 0; Y < G; ++Y) M = F[Y], 0 < F[Y] && (ae[pe[M]++] = Y);
          if (pe[15] == 1) return (F = new H()).g = 0, F.value = ae[0], A(x, te, 1, de, F), de;
          var be, Se = -1, Ae = de - 1, Ue = 0, je = 1, st = 1, Oe = 1 << k;
          for (Y = 0, M = 1, G = 2; M <= k; ++M, G <<= 1) {
            if (je += st <<= 1, 0 > (st -= re[M])) return 0;
            for (; 0 < re[M]; --re[M]) (F = new H()).g = M, F.value = ae[Y++], A(x, te + Ue, G, Oe, F), Ue = ie(Ue, M);
          }
          for (M = k + 1, G = 2; 15 >= M; ++M, G <<= 1) {
            if (je += st <<= 1, 0 > (st -= re[M])) return 0;
            for (; 0 < re[M]; --re[M]) {
              if (F = new H(), (Ue & Ae) != Se) {
                for (te += Oe, be = 1 << (Se = M) - k; 15 > Se && !(0 >= (be -= re[Se])); ) ++Se, be <<= 1;
                de += Oe = 1 << (be = Se - k), x[_ + (Se = Ue & Ae)].g = be + k, x[_ + Se].value = te - _ - Se;
              }
              F.g = M - k, F.value = ae[Y++], A(x, te + (Ue >> k), G, Oe, F), Ue = ie(Ue, M);
            }
          }
          return je != 2 * pe[15] - 1 ? 0 : de;
        }(i, o, h, m, v, y);
      }
      function H() {
        this.value = this.g = 0;
      }
      function W() {
        this.value = this.g = 0;
      }
      function ce() {
        this.G = f(5, H), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = f(yi, W);
      }
      function he(i, o, h, m) {
        e(i != null), e(o != null), e(2147483648 > m), i.Ca = 254, i.I = 0, i.b = -8, i.Ka = 0, i.oa = o, i.pa = h, i.Jd = o, i.Yc = h + m, i.Zc = 4 <= m ? h + m - 4 + 1 : h, J(i);
      }
      function xe(i, o) {
        for (var h = 0; 0 < o--; ) h |= se(i, 128) << o;
        return h;
      }
      function oe(i, o) {
        var h = xe(i, o);
        return Z(i) ? -h : h;
      }
      function ne(i, o, h, m) {
        var v, y = 0;
        for (e(i != null), e(o != null), e(4294967288 > m), i.Sb = m, i.Ra = 0, i.u = 0, i.h = 0, 4 < m && (m = 4), v = 0; v < m; ++v) y += o[h + v] << 8 * v;
        i.Ra = y, i.bb = m, i.oa = o, i.pa = h;
      }
      function ke(i) {
        for (; 8 <= i.u && i.bb < i.Sb; ) i.Ra >>>= 8, i.Ra += i.oa[i.pa + i.bb] << Wr - 8 >>> 0, ++i.bb, i.u -= 8;
        K(i) && (i.h = 1, i.u = 0);
      }
      function Le(i, o) {
        if (e(0 <= o), !i.h && o <= Pn) {
          var h = q(i) & kn[o];
          return i.u += o, ke(i), h;
        }
        return i.h = 1, i.u = 0;
      }
      function N() {
        this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
      }
      function D() {
        this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
      }
      function q(i) {
        return i.Ra >>> (i.u & Wr - 1) >>> 0;
      }
      function K(i) {
        return e(i.bb <= i.Sb), i.h || i.bb == i.Sb && i.u > Wr;
      }
      function X(i, o) {
        i.u = o, i.h = K(i);
      }
      function T(i) {
        i.u >= jr && (e(i.u >= jr), ke(i));
      }
      function J(i) {
        e(i != null && i.oa != null), i.pa < i.Zc ? (i.I = (i.oa[i.pa++] | i.I << 8) >>> 0, i.b += 8) : (e(i != null && i.oa != null), i.pa < i.Yc ? (i.b += 8, i.I = i.oa[i.pa++] | i.I << 8) : i.Ka ? i.b = 0 : (i.I <<= 8, i.b += 8, i.Ka = 1));
      }
      function Z(i) {
        return xe(i, 1);
      }
      function se(i, o) {
        var h = i.Ca;
        0 > i.b && J(i);
        var m = i.b, v = h * o >>> 8, y = (i.I >>> m > v) + 0;
        for (y ? (h -= v, i.I -= v + 1 << m >>> 0) : h = v + 1, m = h, v = 0; 256 <= m; ) v += 8, m >>= 8;
        return m = 7 ^ v + Vr[m], i.b -= m, i.Ca = (h << m) - 1, y;
      }
      function le(i, o, h) {
        i[o + 0] = h >> 24 & 255, i[o + 1] = h >> 16 & 255, i[o + 2] = h >> 8 & 255, i[o + 3] = 255 & h;
      }
      function we(i, o) {
        return i[o + 0] | i[o + 1] << 8;
      }
      function ve(i, o) {
        return we(i, o) | i[o + 2] << 16;
      }
      function Re(i, o) {
        return we(i, o) | we(i, o + 2) << 16;
      }
      function P(i, o) {
        var h = 1 << o;
        return e(i != null), e(0 < o), i.X = a(h), i.X == null ? 0 : (i.Mb = 32 - o, i.Xa = o, 1);
      }
      function Pe(i, o) {
        e(i != null), e(o != null), e(i.Xa == o.Xa), r(o.X, 0, i.X, 0, 1 << o.Xa);
      }
      function Xe() {
        this.X = [], this.Xa = this.Mb = 0;
      }
      function qe(i, o, h, m) {
        e(h != null), e(m != null);
        var v = h[0], y = m[0];
        return v == 0 && (v = (i * y + o / 2) / o), y == 0 && (y = (o * v + i / 2) / i), 0 >= v || 0 >= y ? 0 : (h[0] = v, m[0] = y, 1);
      }
      function ye(i, o) {
        return i + (1 << o) - 1 >>> o;
      }
      function Fe(i, o) {
        return ((4278255360 & i) + (4278255360 & o) >>> 0 & 4278255360) + ((16711935 & i) + (16711935 & o) >>> 0 & 16711935) >>> 0;
      }
      function Ie(i, o) {
        z[o] = function(h, m, v, y, x, _, k) {
          var F;
          for (F = 0; F < x; ++F) {
            var G = z[i](_[k + F - 1], v, y + F);
            _[k + F] = Fe(h[m + F], G);
          }
        };
      }
      function We() {
        this.ud = this.hd = this.jd = 0;
      }
      function Ve(i, o) {
        return ((4278124286 & (i ^ o)) >>> 1) + (i & o) >>> 0;
      }
      function yt(i) {
        return 0 <= i && 256 > i ? i : 0 > i ? 0 : 255 < i ? 255 : void 0;
      }
      function ft(i, o) {
        return yt(i + (i - o + 0.5 >> 1));
      }
      function tt(i, o, h) {
        return Math.abs(o - h) - Math.abs(i - h);
      }
      function dt(i, o, h, m, v, y, x) {
        for (m = y[x - 1], h = 0; h < v; ++h) y[x + h] = m = Fe(i[o + h], m);
      }
      function ht(i, o, h, m, v) {
        var y;
        for (y = 0; y < h; ++y) {
          var x = i[o + y], _ = x >> 8 & 255, k = 16711935 & (k = (k = 16711935 & x) + ((_ << 16) + _));
          m[v + y] = (4278255360 & x) + k >>> 0;
        }
      }
      function Te(i, o) {
        o.jd = 255 & i, o.hd = i >> 8 & 255, o.ud = i >> 16 & 255;
      }
      function it(i, o, h, m, v, y) {
        var x;
        for (x = 0; x < m; ++x) {
          var _ = o[h + x], k = _ >>> 8, F = _, G = 255 & (G = (G = _ >>> 16) + ((i.jd << 24 >> 24) * (k << 24 >> 24) >>> 5));
          F = 255 & (F = (F += (i.hd << 24 >> 24) * (k << 24 >> 24) >>> 5) + ((i.ud << 24 >> 24) * (G << 24 >> 24) >>> 5)), v[y + x] = (4278255360 & _) + (G << 16) + F;
        }
      }
      function He(i, o, h, m, v) {
        z[o] = function(y, x, _, k, F, G, ae, M, Y) {
          for (k = ae; k < M; ++k) for (ae = 0; ae < Y; ++ae) F[G++] = v(_[m(y[x++])]);
        }, z[i] = function(y, x, _, k, F, G, ae) {
          var M = 8 >> y.b, Y = y.Ea, te = y.K[0], de = y.w;
          if (8 > M) for (y = (1 << y.b) - 1, de = (1 << M) - 1; x < _; ++x) {
            var re, pe = 0;
            for (re = 0; re < Y; ++re) re & y || (pe = m(k[F++])), G[ae++] = v(te[pe & de]), pe >>= M;
          }
          else z["VP8LMapColor" + h](k, F, te, de, G, ae, x, _, Y);
        };
      }
      function Ut(i, o, h, m, v) {
        for (h = o + h; o < h; ) {
          var y = i[o++];
          m[v++] = y >> 16 & 255, m[v++] = y >> 8 & 255, m[v++] = 255 & y;
        }
      }
      function gt(i, o, h, m, v) {
        for (h = o + h; o < h; ) {
          var y = i[o++];
          m[v++] = y >> 16 & 255, m[v++] = y >> 8 & 255, m[v++] = 255 & y, m[v++] = y >> 24 & 255;
        }
      }
      function lt(i, o, h, m, v) {
        for (h = o + h; o < h; ) {
          var y = (x = i[o++]) >> 16 & 240 | x >> 12 & 15, x = 240 & x | x >> 28 & 15;
          m[v++] = y, m[v++] = x;
        }
      }
      function ct(i, o, h, m, v) {
        for (h = o + h; o < h; ) {
          var y = (x = i[o++]) >> 16 & 248 | x >> 13 & 7, x = x >> 5 & 224 | x >> 3 & 31;
          m[v++] = y, m[v++] = x;
        }
      }
      function Ft(i, o, h, m, v) {
        for (h = o + h; o < h; ) {
          var y = i[o++];
          m[v++] = 255 & y, m[v++] = y >> 8 & 255, m[v++] = y >> 16 & 255;
        }
      }
      function Ge(i, o, h, m, v, y) {
        if (y == 0) for (h = o + h; o < h; ) le(m, ((y = i[o++])[0] >> 24 | y[1] >> 8 & 65280 | y[2] << 8 & 16711680 | y[3] << 24) >>> 0), v += 32;
        else r(m, v, i, o, h);
      }
      function Ct(i, o) {
        z[o][0] = z[i + "0"], z[o][1] = z[i + "1"], z[o][2] = z[i + "2"], z[o][3] = z[i + "3"], z[o][4] = z[i + "4"], z[o][5] = z[i + "5"], z[o][6] = z[i + "6"], z[o][7] = z[i + "7"], z[o][8] = z[i + "8"], z[o][9] = z[i + "9"], z[o][10] = z[i + "10"], z[o][11] = z[i + "11"], z[o][12] = z[i + "12"], z[o][13] = z[i + "13"], z[o][14] = z[i + "0"], z[o][15] = z[i + "0"];
      }
      function Ye(i) {
        return i == bo || i == vo || i == ps || i == wo;
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
        var h = i.T, m = o.ba.f.RGBA, v = m.eb, y = m.fb + i.ka * m.A, x = Wn[o.ba.S], _ = i.y, k = i.O, F = i.f, G = i.N, ae = i.ea, M = i.W, Y = o.cc, te = o.dc, de = o.Mc, re = o.Nc, pe = i.ka, be = i.ka + i.T, Se = i.U, Ae = Se + 1 >> 1;
        for (pe == 0 ? x(_, k, null, null, F, G, ae, M, F, G, ae, M, v, y, null, null, Se) : (x(o.ec, o.fc, _, k, Y, te, de, re, F, G, ae, M, v, y - m.A, v, y, Se), ++h); pe + 2 < be; pe += 2) Y = F, te = G, de = ae, re = M, G += i.Rc, M += i.Rc, y += 2 * m.A, x(_, (k += 2 * i.fa) - i.fa, _, k, Y, te, de, re, F, G, ae, M, v, y - m.A, v, y, Se);
        return k += i.fa, i.j + be < i.o ? (r(o.ec, o.fc, _, k, Se), r(o.cc, o.dc, F, G, Ae), r(o.Mc, o.Nc, ae, M, Ae), h--) : 1 & be || x(_, k, null, null, F, G, ae, M, F, G, ae, M, v, y + m.A, null, null, Se), h;
      }
      function vr(i, o, h) {
        var m = i.F, v = [
          i.J
        ];
        if (m != null) {
          var y = i.U, x = o.ba.S, _ = x == ds || x == ps;
          o = o.ba.f.RGBA;
          var k = [
            0
          ], F = i.ka;
          k[0] = i.T, i.Kb && (F == 0 ? --k[0] : (--F, v[0] -= i.width), i.j + i.ka + i.T == i.o && (k[0] = i.o - i.j - F));
          var G = o.eb;
          F = o.fb + F * o.A, i = El(m, v[0], i.width, y, k, G, F + (_ ? 0 : 3), o.A), e(h == k), i && Ye(x) && ka(G, F, _, y, k, o.A);
        }
        return 0;
      }
      function ar(i) {
        var o = i.ma, h = o.ba.S, m = 11 > h, v = h == fs || h == hs || h == ds || h == go || h == 12 || Ye(h);
        if (o.memory = null, o.Ib = null, o.Jb = null, o.Nd = null, !wa(o.Oa, i, v ? 11 : 12)) return 0;
        if (v && Ye(h) && ga(), i.da) alert("todo:use_scaling");
        else {
          if (m) {
            if (o.Ib = si, i.Kb) {
              if (h = i.U + 1 >> 1, o.memory = a(i.U + 2 * h), o.memory == null) return 0;
              o.ec = o.memory, o.fc = 0, o.cc = o.ec, o.dc = o.fc + i.U, o.Mc = o.cc, o.Nc = o.dc + h, o.Ib = dn, ga();
            }
          } else alert("todo:EmitYUV");
          v && (o.Jb = vr, m && Zn());
        }
        if (m && !Kl) {
          for (i = 0; 256 > i; ++i) Eh[i] = 89858 * (i - 128) + gs >> ms, Rh[i] = -22014 * (i - 128) + gs, Mh[i] = -45773 * (i - 128), Fh[i] = 113618 * (i - 128) + gs >> ms;
          for (i = Ca; i < No; ++i) o = 76283 * (i - 16) + gs >> ms, Oh[i - Ca] = lr(o, 255), Dh[i - Ca] = lr(o + 8 >> 4, 15);
          Kl = 1;
        }
        return 1;
      }
      function Ke(i) {
        var o = i.ma, h = i.U, m = i.T;
        return e(!(1 & i.ka)), 0 >= h || 0 >= m ? 0 : (h = o.Ib(i, o), o.Jb != null && o.Jb(i, o, h), o.Dc += h, 1);
      }
      function wr(i) {
        i.ma.memory = null;
      }
      function yr(i, o, h, m) {
        return Le(i, 8) != 47 ? 0 : (o[0] = Le(i, 14) + 1, h[0] = Le(i, 14) + 1, m[0] = Le(i, 1), Le(i, 3) != 0 ? 0 : !i.h);
      }
      function On(i, o) {
        if (4 > i) return i + 1;
        var h = i - 2 >> 1;
        return (2 + (1 & i) << h) + Le(o, h) + 1;
      }
      function Dn(i, o) {
        return 120 < o ? o - 120 : 1 <= (h = ((h = vh[o - 1]) >> 4) * i + (8 - (15 & h))) ? h : 1;
        var h;
      }
      function Dt(i, o, h) {
        var m = q(h), v = i[o += 255 & m].g - 8;
        return 0 < v && (X(h, h.u + 8), m = q(h), o += i[o].value, o += m & (1 << v) - 1), X(h, h.u + i[o].g), i[o].value;
      }
      function an(i, o, h) {
        return h.g += i.g, h.value += i.value << o >>> 0, e(8 >= h.g), i.g;
      }
      function on(i, o, h) {
        var m = i.xc;
        return e((o = m == 0 ? 0 : i.vc[i.md * (h >> m) + (o >> m)]) < i.Wb), i.Ya[o];
      }
      function oi(i, o, h, m) {
        var v = i.ab, y = i.c * o, x = i.C;
        o = x + o;
        var _ = h, k = m;
        for (m = i.Ta, h = i.Ua; 0 < v--; ) {
          var F = i.gc[v], G = x, ae = o, M = _, Y = k, te = (k = m, _ = h, F.Ea);
          switch (e(G < ae), e(ae <= F.nc), F.hc) {
            case 2:
              zt(M, Y, (ae - G) * te, k, _);
              break;
            case 0:
              var de = G, re = ae, pe = k, be = _, Se = (Oe = F).Ea;
              de == 0 && (xa(M, Y, null, null, 1, pe, be), dt(M, Y + 1, 0, 0, Se - 1, pe, be + 1), Y += Se, be += Se, ++de);
              for (var Ae = 1 << Oe.b, Ue = Ae - 1, je = ye(Se, Oe.b), st = Oe.K, Oe = Oe.w + (de >> Oe.b) * je; de < re; ) {
                var pt = st, tn = Oe, ot = 1;
                for (Hi(M, Y, pe, be - Se, 1, pe, be); ot < Se; ) {
                  var De = (ot & ~Ue) + Ae;
                  De > Se && (De = Se), (0, _a[pt[tn++] >> 8 & 15])(M, Y + +ot, pe, be + ot - Se, De - ot, pe, be + ot), ot = De;
                }
                Y += Se, be += Se, ++de & Ue || (Oe += je);
              }
              ae != F.nc && r(k, _ - te, k, _ + (ae - G - 1) * te, te);
              break;
            case 1:
              for (te = M, re = Y, Se = (M = F.Ea) - (be = M & ~(pe = (Y = 1 << F.b) - 1)), de = ye(M, F.b), Ae = F.K, F = F.w + (G >> F.b) * de; G < ae; ) {
                for (Ue = Ae, je = F, st = new We(), Oe = re + be, pt = re + M; re < Oe; ) Te(Ue[je++], st), Aa(st, te, re, Y, k, _), re += Y, _ += Y;
                re < pt && (Te(Ue[je++], st), Aa(st, te, re, Se, k, _), re += Se, _ += Se), ++G & pe || (F += de);
              }
              break;
            case 3:
              if (M == k && Y == _ && 0 < F.b) {
                for (re = k, M = te = _ + (ae - G) * te - (be = (ae - G) * ye(F.Ea, F.b)), Y = k, pe = _, de = [], be = (Se = be) - 1; 0 <= be; --be) de[be] = Y[pe + be];
                for (be = Se - 1; 0 <= be; --be) re[M + be] = de[be];
                os(F, G, ae, k, te, k, _);
              } else os(F, G, ae, M, Y, k, _);
          }
          _ = m, k = h;
        }
        k != h && r(m, h, _, k, y);
      }
      function qr(i, o) {
        var h = i.V, m = i.Ba + i.c * i.C, v = o - i.C;
        if (e(o <= i.l.o), e(16 >= v), 0 < v) {
          var y = i.l, x = i.Ta, _ = i.Ua, k = y.width;
          if (oi(i, v, h, m), v = _ = [
            _
          ], e((h = i.C) < (m = o)), e(y.v < y.va), m > y.o && (m = y.o), h < y.j) {
            var F = y.j - h;
            h = y.j, v[0] += F * k;
          }
          if (h >= m ? h = 0 : (v[0] += 4 * y.v, y.ka = h - y.j, y.U = y.va - y.v, y.T = m - h, h = 1), h) {
            if (_ = _[0], 11 > (h = i.ca).S) {
              var G = h.f.RGBA, ae = (m = h.S, v = y.U, y = y.T, F = G.eb, G.A), M = y;
              for (G = G.fb + i.Ma * G.A; 0 < M--; ) {
                var Y = x, te = _, de = v, re = F, pe = G;
                switch (m) {
                  case us:
                    La(Y, te, de, re, pe);
                    break;
                  case fs:
                    Gr(Y, te, de, re, pe);
                    break;
                  case bo:
                    Gr(Y, te, de, re, pe), ka(re, pe, 0, de, 1, 0);
                    break;
                  case Bl:
                    xi(Y, te, de, re, pe);
                    break;
                  case hs:
                    Ge(Y, te, de, re, pe, 1);
                    break;
                  case vo:
                    Ge(Y, te, de, re, pe, 1), ka(re, pe, 0, de, 1, 0);
                    break;
                  case ds:
                    Ge(Y, te, de, re, pe, 0);
                    break;
                  case ps:
                    Ge(Y, te, de, re, pe, 0), ka(re, pe, 1, de, 1, 0);
                    break;
                  case go:
                    $r(Y, te, de, re, pe);
                    break;
                  case wo:
                    $r(Y, te, de, re, pe), jl(re, pe, de, 1, 0);
                    break;
                  case ql:
                    Kr(Y, te, de, re, pe);
                    break;
                  default:
                    e(0);
                }
                _ += k, G += ae;
              }
              i.Ma += y;
            } else alert("todo:EmitRescaledRowsYUVA");
            e(i.Ma <= h.height);
          }
        }
        i.C = o, e(i.C <= i.i);
      }
      function Kn(i) {
        var o;
        if (0 < i.ua) return 0;
        for (o = 0; o < i.Wb; ++o) {
          var h = i.Ya[o].G, m = i.Ya[o].H;
          if (0 < h[1][m[1] + 0].g || 0 < h[2][m[2] + 0].g || 0 < h[3][m[3] + 0].g) return 0;
        }
        return 1;
      }
      function sr(i, o, h, m, v, y) {
        if (i.Z != 0) {
          var x = i.qd, _ = i.rd;
          for (e(Xr[i.Z] != null); o < h; ++o) Xr[i.Z](x, _, m, v, m, v, y), x = m, _ = v, v += y;
          i.qd = x, i.rd = _;
        }
      }
      function Yn(i, o) {
        var h = i.l.ma, m = h.Z == 0 || h.Z == 1 ? i.l.j : i.C;
        if (m = i.C < m ? m : i.C, e(o <= i.l.o), o > m) {
          var v = i.l.width, y = h.ca, x = h.tb + v * m, _ = i.V, k = i.Ba + i.c * m, F = i.gc;
          e(i.ab == 1), e(F[0].hc == 3), hr(F[0], m, o, _, k, y, x), sr(h, m, o, y, x, v);
        }
        i.C = i.Ma = o;
      }
      function Jn(i, o, h, m, v, y, x) {
        var _ = i.$ / m, k = i.$ % m, F = i.m, G = i.s, ae = h + i.$, M = ae;
        v = h + m * v;
        var Y = h + m * y, te = 280 + G.ua, de = i.Pb ? _ : 16777216, re = 0 < G.ua ? G.Wa : null, pe = G.wc, be = ae < Y ? on(G, k, _) : null;
        e(i.C < y), e(Y <= v);
        var Se = false;
        e: for (; ; ) {
          for (; Se || ae < Y; ) {
            var Ae = 0;
            if (_ >= de) {
              var Ue = ae - h;
              e((de = i).Pb), de.wd = de.m, de.xd = Ue, 0 < de.s.ua && Pe(de.s.Wa, de.s.vb), de = _ + yh;
            }
            if (k & pe || (be = on(G, k, _)), e(be != null), be.Qb && (o[ae] = be.qb, Se = true), !Se) if (T(F), be.jc) {
              Ae = F, Ue = o;
              var je = ae, st = be.pd[q(Ae) & yi - 1];
              e(be.jc), 256 > st.g ? (X(Ae, Ae.u + st.g), Ue[je] = st.value, Ae = 0) : (X(Ae, Ae.u + st.g - 256), e(256 <= st.value), Ae = st.value), Ae == 0 && (Se = true);
            } else Ae = Dt(be.G[0], be.H[0], F);
            if (F.h) break;
            if (Se || 256 > Ae) {
              if (!Se) if (be.nd) o[ae] = (be.qb | Ae << 8) >>> 0;
              else {
                if (T(F), Se = Dt(be.G[1], be.H[1], F), T(F), Ue = Dt(be.G[2], be.H[2], F), je = Dt(be.G[3], be.H[3], F), F.h) break;
                o[ae] = (je << 24 | Se << 16 | Ae << 8 | Ue) >>> 0;
              }
              if (Se = false, ++ae, ++k >= m && (k = 0, ++_, x != null && _ <= y && !(_ % 16) && x(i, _), re != null)) for (; M < ae; ) Ae = o[M++], re.X[(506832829 * Ae & 4294967295) >>> re.Mb] = Ae;
            } else if (280 > Ae) {
              if (Ae = On(Ae - 256, F), Ue = Dt(be.G[4], be.H[4], F), T(F), Ue = Dn(m, Ue = On(Ue, F)), F.h) break;
              if (ae - h < Ue || v - ae < Ae) break e;
              for (je = 0; je < Ae; ++je) o[ae + je] = o[ae + je - Ue];
              for (ae += Ae, k += Ae; k >= m; ) k -= m, ++_, x != null && _ <= y && !(_ % 16) && x(i, _);
              if (e(ae <= v), k & pe && (be = on(G, k, _)), re != null) for (; M < ae; ) Ae = o[M++], re.X[(506832829 * Ae & 4294967295) >>> re.Mb] = Ae;
            } else {
              if (!(Ae < te)) break e;
              for (Se = Ae - 280, e(re != null); M < ae; ) Ae = o[M++], re.X[(506832829 * Ae & 4294967295) >>> re.Mb] = Ae;
              Ae = ae, e(!(Se >>> (Ue = re).Xa)), o[Ae] = Ue.X[Se], Se = true;
            }
            Se || e(F.h == K(F));
          }
          if (i.Pb && F.h && ae < v) e(i.m.h), i.a = 5, i.m = i.wd, i.$ = i.xd, 0 < i.s.ua && Pe(i.s.vb, i.s.Wa);
          else {
            if (F.h) break e;
            x?.(i, _ > y ? y : _), i.a = 0, i.$ = ae - h;
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
        return i == null ? null : (i.a = 0, i.xb = Hl, Ct("Predictor", "VP8LPredictors"), Ct("Predictor", "VP8LPredictors_C"), Ct("PredictorAdd", "VP8LPredictorsAdd"), Ct("PredictorAdd", "VP8LPredictorsAdd_C"), zt = ht, Aa = it, La = Ut, Gr = gt, $r = lt, Kr = ct, xi = Ft, z.VP8LMapColor32b = fr, z.VP8LMapColor8b = Na, i);
      }
      function or(i, o, h, m, v) {
        var y = 1, x = [
          i
        ], _ = [
          o
        ], k = m.m, F = m.s, G = null, ae = 0;
        e: for (; ; ) {
          if (h) for (; y && Le(k, 1); ) {
            var M = x, Y = _, te = m, de = 1, re = te.m, pe = te.gc[te.ab], be = Le(re, 2);
            if (te.Oc & 1 << be) y = 0;
            else {
              switch (te.Oc |= 1 << be, pe.hc = be, pe.Ea = M[0], pe.nc = Y[0], pe.K = [
                null
              ], ++te.ab, e(4 >= te.ab), be) {
                case 0:
                case 1:
                  pe.b = Le(re, 3) + 2, de = or(ye(pe.Ea, pe.b), ye(pe.nc, pe.b), 0, te, pe.K), pe.K = pe.K[0];
                  break;
                case 3:
                  var Se, Ae = Le(re, 8) + 1, Ue = 16 < Ae ? 0 : 4 < Ae ? 1 : 2 < Ae ? 2 : 3;
                  if (M[0] = ye(pe.Ea, Ue), pe.b = Ue, Se = de = or(Ae, 1, 0, te, pe.K)) {
                    var je, st = Ae, Oe = pe, pt = 1 << (8 >> Oe.b), tn = a(pt);
                    if (tn == null) Se = 0;
                    else {
                      var ot = Oe.K[0], De = Oe.w;
                      for (tn[0] = Oe.K[0][0], je = 1; je < 1 * st; ++je) tn[je] = Fe(ot[De + je], tn[je - 1]);
                      for (; je < 4 * pt; ++je) tn[je] = 0;
                      Oe.K[0] = null, Oe.K[0] = tn, Se = 1;
                    }
                  }
                  de = Se;
                  break;
                case 2:
                  break;
                default:
                  e(0);
              }
              y = de;
            }
          }
          if (x = x[0], _ = _[0], y && Le(k, 1) && !(y = 1 <= (ae = Le(k, 4)) && 11 >= ae)) {
            m.a = 3;
            break e;
          }
          var Ce;
          if (Ce = y) t: {
            var Wt, rt, mt, Et = m, un = x, yn = _, Tt = ae, pn = h, xn = Et.m, nn = Et.s, vt = [
              null
            ], _t = 1, Bt = 0, At = wh[Tt];
            n: for (; ; ) {
              if (pn && Le(xn, 1)) {
                var fn = Le(xn, 3) + 2, er = ye(un, fn), Vt = ye(yn, fn), An = er * Vt;
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
              var In = f(_t * At, H), Nn = _t, jn = f(Nn, ce);
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
                    var vs, _o = rn, ws = Et, Ia = Ln, qh = Fn, Uh = mt, Ao = 0, Zr = ws.m, zh = Le(Zr, 1);
                    if (s(Ia, 0, 0, _o), zh) {
                      var Hh = Le(Zr, 1) + 1, Wh = Le(Zr, 1), Xl = Le(Zr, Wh == 0 ? 1 : 8);
                      Ia[Xl] = 1, Hh == 2 && (Ia[Xl = Le(Zr, 8)] = 1);
                      var ys = 1;
                    } else {
                      var Zl = a(19), Ql = Le(Zr, 4) + 4;
                      if (19 < Ql) {
                        ws.a = 3;
                        var xs = 0;
                        break i;
                      }
                      for (vs = 0; vs < Ql; ++vs) Zl[bh[vs]] = Le(Zr, 3);
                      var Lo = void 0, ja = void 0, ec = ws, Vh = Zl, Ns = _o, tc = Ia, So = 0, Qr = ec.m, nc = 8, rc = f(128, H);
                      r: for (; I(rc, 0, 7, Vh, 19); ) {
                        if (Le(Qr, 1)) {
                          var Gh = 2 + 2 * Le(Qr, 3);
                          if ((Lo = 2 + Le(Qr, Gh)) > Ns) break r;
                        } else Lo = Ns;
                        for (ja = 0; ja < Ns && Lo--; ) {
                          T(Qr);
                          var ic = rc[0 + (127 & q(Qr))];
                          X(Qr, Qr.u + ic.g);
                          var Vi = ic.value;
                          if (16 > Vi) tc[ja++] = Vi, Vi != 0 && (nc = Vi);
                          else {
                            var $h = Vi == 16, ac = Vi - 16, Kh = mh[ac], sc = Le(Qr, ph[ac]) + Kh;
                            if (ja + sc > Ns) break r;
                            for (var Yh = $h ? nc : 0; 0 < sc--; ) tc[ja++] = Yh;
                          }
                        }
                        So = 1;
                        break r;
                      }
                      So || (ec.a = 3), ys = So;
                    }
                    (ys = ys && !Zr.h) && (Ao = I(qh, Uh, 8, Ia, _o)), ys && Ao != 0 ? xs = Ao : (ws.a = 3, xs = 0);
                  }
                  if (xs == 0) break n;
                  if (Mr && gh[rt] == 1 && (Mr = Fn[mt].g == 0), _i += Fn[mt].g, mt += xs, 3 >= rt) {
                    var Ea, ko = Ln[0];
                    for (Ea = 1; Ea < rn; ++Ea) Ln[Ea] > ko && (ko = Ln[Ea]);
                    hn += ko;
                  }
                }
                if (jt.nd = Mr, jt.Qb = 0, Mr && (jt.qb = (Mn[3][tr[3] + 0].value << 24 | Mn[1][tr[1] + 0].value << 16 | Mn[2][tr[2] + 0].value) >>> 0, _i == 0 && 256 > Mn[0][tr[0] + 0].value && (jt.Qb = 1, jt.qb += Mn[0][tr[0] + 0].value << 8)), jt.jc = !jt.Qb && 6 > hn, jt.jc) {
                  var _s, Rr = jt;
                  for (_s = 0; _s < yi; ++_s) {
                    var ei = _s, ti = Rr.pd[ei], As = Rr.G[0][Rr.H[0] + ei];
                    256 <= As.value ? (ti.g = As.g + 256, ti.value = As.value) : (ti.g = 0, ti.value = 0, ei >>= an(As, 8, ti), ei >>= an(Rr.G[1][Rr.H[1] + ei], 16, ti), ei >>= an(Rr.G[2][Rr.H[2] + ei], 0, ti), an(Rr.G[3][Rr.H[3] + ei], 24, ti));
                  }
                }
              }
              nn.vc = vt, nn.Wb = _t, nn.Ya = En, nn.yc = In, Ce = 1;
              break t;
            }
            Ce = 0;
          }
          if (!(y = Ce)) {
            m.a = 3;
            break e;
          }
          if (0 < ae) {
            if (F.ua = 1 << ae, !P(F.Wa, ae)) {
              m.a = 1, y = 0;
              break e;
            }
          } else F.ua = 0;
          var Po = m, oc = x, Jh = _, Co = Po.s, Io = Co.xc;
          if (Po.c = oc, Po.i = Jh, Co.md = ye(oc, Io), Co.wc = Io == 0 ? -1 : (1 << Io) - 1, h) {
            m.xb = kh;
            break e;
          }
          if ((G = a(x * _)) == null) {
            m.a = 1, y = 0;
            break e;
          }
          y = (y = Jn(m, G, 0, x, _, _, null)) && !k.h;
          break e;
        }
        return y ? (v != null ? v[0] = G : (e(G == null), e(h)), m.$ = 0, h || Tn(F)) : Tn(F), y;
      }
      function ci(i, o) {
        var h = i.c * i.i, m = h + o + 16 * o;
        return e(i.c <= o), i.V = a(m), i.V == null ? (i.Ta = null, i.Ua = 0, i.a = 1, 0) : (i.Ta = i.V, i.Ua = i.Ba + h + o, 1);
      }
      function Fi(i, o) {
        var h = i.C, m = o - h, v = i.V, y = i.Ba + i.c * h;
        for (e(o <= i.l.o); 0 < m; ) {
          var x = 16 < m ? 16 : m, _ = i.l.ma, k = i.l.width, F = k * x, G = _.ca, ae = _.tb + k * h, M = i.Ta, Y = i.Ua;
          oi(i, x, v, y), Fl(M, Y, G, ae, F), sr(_, h, h + x, G, ae, k), m -= x, v += x * i.c, h += x;
        }
        e(h == o), i.C = i.Ma = o;
      }
      function Mi() {
        this.ub = this.yd = this.td = this.Rb = 0;
      }
      function Ri() {
        this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
      }
      function Zs() {
        this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4);
      }
      function aa() {
        this.Yb = function() {
          var i = [];
          return function o(h, m, v) {
            for (var y = v[m], x = 0; x < y && (h.push(v.length > m + 1 ? [] : 0), !(v.length < m + 1)); x++) o(h[x], m + 1, v);
          }(i, 0, [
            3,
            11
          ]), i;
        }();
      }
      function Ha() {
        this.jb = a(3), this.Wc = l([
          4,
          8
        ], aa), this.Xc = l([
          4,
          17
        ], aa);
      }
      function Wa() {
        this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4);
      }
      function Bn() {
        this.ld = this.La = this.dd = this.tc = 0;
      }
      function sa() {
        this.Na = this.la = 0;
      }
      function Va() {
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
      function oa() {
        this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
      }
      function Ga() {
        this.uc = this.M = this.Nb = 0, this.wa = Array(new Bn()), this.Y = 0, this.ya = Array(new oa()), this.aa = 0, this.l = new Oi();
      }
      function $a() {
        this.y = a(16), this.f = a(8), this.ea = a(8);
      }
      function Ka() {
        this.cb = this.a = 0, this.sc = "", this.m = new N(), this.Od = new Mi(), this.Kc = new Ri(), this.ed = new Wa(), this.Qa = new Zs(), this.Ic = this.$c = this.Aa = 0, this.D = new Ga(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = f(8, N), this.ia = 0, this.pb = f(4, Va), this.Pa = new Ha(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
          0,
          0,
          0,
          0
        ], this.Gd = Array(new $a()), this.Hd = 0, this.rb = Array(new sa()), this.sb = 0, this.wa = Array(new Bn()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new oa()), this.L = this.aa = 0, this.gd = l([
          4,
          2
        ], Bn), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
      }
      function lr(i, o) {
        return 0 > i ? 0 : i > o ? o : i;
      }
      function Oi() {
        this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
      }
      function Qs() {
        var i = new Ka();
        return i != null && (i.a = 0, i.sc = "OK", i.cb = 0, i.Xb = 0, Pa || (Pa = Di)), i;
      }
      function Yt(i, o, h) {
        return i.a == 0 && (i.a = o, i.sc = h, i.cb = 0), 0;
      }
      function Ya(i, o, h) {
        return 3 <= h && i[o + 0] == 157 && i[o + 1] == 1 && i[o + 2] == 42;
      }
      function cr(i, o) {
        if (i == null) return 0;
        if (i.a = 0, i.sc = "OK", o == null) return Yt(i, 2, "null VP8Io passed to VP8GetHeaders()");
        var h = o.data, m = o.w, v = o.ha;
        if (4 > v) return Yt(i, 7, "Truncated header.");
        var y = h[m + 0] | h[m + 1] << 8 | h[m + 2] << 16, x = i.Od;
        if (x.Rb = !(1 & y), x.td = y >> 1 & 7, x.yd = y >> 4 & 1, x.ub = y >> 5, 3 < x.td) return Yt(i, 3, "Incorrect keyframe parameters.");
        if (!x.yd) return Yt(i, 4, "Frame not displayable.");
        m += 3, v -= 3;
        var _ = i.Kc;
        if (x.Rb) {
          if (7 > v) return Yt(i, 7, "cannot parse picture header");
          if (!Ya(h, m, v)) return Yt(i, 3, "Bad code word");
          _.c = 16383 & (h[m + 4] << 8 | h[m + 3]), _.Td = h[m + 4] >> 6, _.i = 16383 & (h[m + 6] << 8 | h[m + 5]), _.Ud = h[m + 6] >> 6, m += 7, v -= 7, i.za = _.c + 15 >> 4, i.Ub = _.i + 15 >> 4, o.width = _.c, o.height = _.i, o.Da = 0, o.j = 0, o.v = 0, o.va = o.width, o.o = o.height, o.da = 0, o.ib = o.width, o.hb = o.height, o.U = o.width, o.T = o.height, s((y = i.Pa).jb, 0, 255, y.jb.length), e((y = i.Qa) != null), y.Cb = 0, y.Bb = 0, y.Fb = 1, s(y.Zb, 0, 0, y.Zb.length), s(y.Lb, 0, 0, y.Lb);
        }
        if (x.ub > v) return Yt(i, 7, "bad partition length");
        he(y = i.m, h, m, x.ub), m += x.ub, v -= x.ub, x.Rb && (_.Ld = Z(y), _.Kd = Z(y)), _ = i.Qa;
        var k, F = i.Pa;
        if (e(y != null), e(_ != null), _.Cb = Z(y), _.Cb) {
          if (_.Bb = Z(y), Z(y)) {
            for (_.Fb = Z(y), k = 0; 4 > k; ++k) _.Zb[k] = Z(y) ? oe(y, 7) : 0;
            for (k = 0; 4 > k; ++k) _.Lb[k] = Z(y) ? oe(y, 6) : 0;
          }
          if (_.Bb) for (k = 0; 3 > k; ++k) F.jb[k] = Z(y) ? xe(y, 8) : 255;
        } else _.Bb = 0;
        if (y.Ka) return Yt(i, 3, "cannot parse segment header");
        if ((_ = i.ed).zd = Z(y), _.Tb = xe(y, 6), _.wb = xe(y, 3), _.Pc = Z(y), _.Pc && Z(y)) {
          for (F = 0; 4 > F; ++F) Z(y) && (_.vd[F] = oe(y, 6));
          for (F = 0; 4 > F; ++F) Z(y) && (_.od[F] = oe(y, 6));
        }
        if (i.L = _.Tb == 0 ? 0 : _.zd ? 1 : 2, y.Ka) return Yt(i, 3, "cannot parse filter header");
        var G = v;
        if (v = k = m, m = k + G, _ = G, i.Xb = (1 << xe(i.m, 2)) - 1, G < 3 * (F = i.Xb)) h = 7;
        else {
          for (k += 3 * F, _ -= 3 * F, G = 0; G < F; ++G) {
            var ae = h[v + 0] | h[v + 1] << 8 | h[v + 2] << 16;
            ae > _ && (ae = _), he(i.Jc[+G], h, k, ae), k += ae, _ -= ae, v += 3;
          }
          he(i.Jc[+F], h, k, _), h = k < m ? 0 : 5;
        }
        if (h != 0) return Yt(i, h, "cannot parse partitions");
        for (h = xe(k = i.m, 7), v = Z(k) ? oe(k, 4) : 0, m = Z(k) ? oe(k, 4) : 0, _ = Z(k) ? oe(k, 4) : 0, F = Z(k) ? oe(k, 4) : 0, k = Z(k) ? oe(k, 4) : 0, G = i.Qa, ae = 0; 4 > ae; ++ae) {
          if (G.Cb) {
            var M = G.Zb[ae];
            G.Fb || (M += h);
          } else {
            if (0 < ae) {
              i.pb[ae] = i.pb[0];
              continue;
            }
            M = h;
          }
          var Y = i.pb[ae];
          Y.Sc[0] = yo[lr(M + v, 127)], Y.Sc[1] = xo[lr(M + 0, 127)], Y.Eb[0] = 2 * yo[lr(M + m, 127)], Y.Eb[1] = 101581 * xo[lr(M + _, 127)] >> 16, 8 > Y.Eb[1] && (Y.Eb[1] = 8), Y.Qc[0] = yo[lr(M + F, 117)], Y.Qc[1] = xo[lr(M + k, 127)], Y.lc = M + k;
        }
        if (!x.Rb) return Yt(i, 4, "Not a key frame.");
        for (Z(y), x = i.Pa, h = 0; 4 > h; ++h) {
          for (v = 0; 8 > v; ++v) for (m = 0; 3 > m; ++m) for (_ = 0; 11 > _; ++_) F = se(y, Lh[h][v][m][_]) ? xe(y, 8) : _h[h][v][m][_], x.Wc[h][v].Yb[m][_] = F;
          for (v = 0; 17 > v; ++v) x.Xc[h][v] = x.Wc[h][Sh[v]];
        }
        return i.kc = Z(y), i.kc && (i.Bd = xe(y, 8)), i.cb = 1;
      }
      function Di(i, o, h, m, v, y, x) {
        var _ = o[v].Yb[h];
        for (h = 0; 16 > v; ++v) {
          if (!se(i, _[h + 0])) return v;
          for (; !se(i, _[h + 1]); ) if (_ = o[++v].Yb[0], h = 0, v == 16) return 16;
          var k = o[v + 1].Yb;
          if (se(i, _[h + 2])) {
            var F = i, G = 0;
            if (se(F, (M = _)[(ae = h) + 3])) if (se(F, M[ae + 6])) {
              for (_ = 0, ae = 2 * (G = se(F, M[ae + 8])) + (M = se(F, M[ae + 9 + G])), G = 0, M = xh[ae]; M[_]; ++_) G += G + se(F, M[_]);
              G += 3 + (8 << ae);
            } else se(F, M[ae + 7]) ? (G = 7 + 2 * se(F, 165), G += se(F, 145)) : G = 5 + se(F, 159);
            else G = se(F, M[ae + 4]) ? 3 + se(F, M[ae + 5]) : 2;
            _ = k[2];
          } else G = 1, _ = k[1];
          k = x + Nh[v], 0 > (F = i).b && J(F);
          var ae, M = F.b, Y = (ae = F.Ca >> 1) - (F.I >> M) >> 31;
          --F.b, F.Ca += Y, F.Ca |= 1, F.I -= (ae + 1 & Y) << M, y[k] = ((G ^ Y) - Y) * m[(0 < v) + 0];
        }
        return 16;
      }
      function Ja(i) {
        var o = i.rb[i.sb - 1];
        o.la = 0, o.Na = 0, s(i.zc, 0, 0, i.zc.length), i.ja = 0;
      }
      function qn(i, o, h, m, v) {
        v = i[o + h + 32 * m] + (v >> 3), i[o + h + 32 * m] = -256 & v ? 0 > v ? 0 : 255 : v;
      }
      function Zt(i, o, h, m, v, y) {
        qn(i, o, 0, h, m + v), qn(i, o, 1, h, m + y), qn(i, o, 2, h, m - y), qn(i, o, 3, h, m - v);
      }
      function xr(i) {
        return (20091 * i >> 16) + i;
      }
      function Xa(i, o, h, m) {
        var v, y = 0, x = a(16);
        for (v = 0; 4 > v; ++v) {
          var _ = i[o + 0] + i[o + 8], k = i[o + 0] - i[o + 8], F = (35468 * i[o + 4] >> 16) - xr(i[o + 12]), G = xr(i[o + 4]) + (35468 * i[o + 12] >> 16);
          x[y + 0] = _ + G, x[y + 1] = k + F, x[y + 2] = k - F, x[y + 3] = _ - G, y += 4, o++;
        }
        for (v = y = 0; 4 > v; ++v) _ = (i = x[y + 0] + 4) + x[y + 8], k = i - x[y + 8], F = (35468 * x[y + 4] >> 16) - xr(x[y + 12]), qn(h, m, 0, 0, _ + (G = xr(x[y + 4]) + (35468 * x[y + 12] >> 16))), qn(h, m, 1, 0, k + F), qn(h, m, 2, 0, k - F), qn(h, m, 3, 0, _ - G), y++, m += 32;
      }
      function eo(i, o, h, m) {
        var v = i[o + 0] + 4, y = 35468 * i[o + 4] >> 16, x = xr(i[o + 4]), _ = 35468 * i[o + 1] >> 16;
        Zt(h, m, 0, v + x, i = xr(i[o + 1]), _), Zt(h, m, 1, v + y, i, _), Zt(h, m, 2, v - y, i, _), Zt(h, m, 3, v - x, i, _);
      }
      function to(i, o, h, m, v) {
        Xa(i, o, h, m), v && Xa(i, o + 16, h, m + 4);
      }
      function ur(i, o, h, m) {
        Ni(i, o + 0, h, m, 1), Ni(i, o + 32, h, m + 128, 1);
      }
      function Za(i, o, h, m) {
        var v;
        for (i = i[o + 0] + 4, v = 0; 4 > v; ++v) for (o = 0; 4 > o; ++o) qn(h, m, o, v, i);
      }
      function Qa(i, o, h, m) {
        i[o + 0] && Nt(i, o + 0, h, m), i[o + 16] && Nt(i, o + 16, h, m + 4), i[o + 32] && Nt(i, o + 32, h, m + 128), i[o + 48] && Nt(i, o + 48, h, m + 128 + 4);
      }
      function Ti(i, o, h, m) {
        var v, y = a(16);
        for (v = 0; 4 > v; ++v) {
          var x = i[o + 0 + v] + i[o + 12 + v], _ = i[o + 4 + v] + i[o + 8 + v], k = i[o + 4 + v] - i[o + 8 + v], F = i[o + 0 + v] - i[o + 12 + v];
          y[0 + v] = x + _, y[8 + v] = x - _, y[4 + v] = F + k, y[12 + v] = F - k;
        }
        for (v = 0; 4 > v; ++v) x = (i = y[0 + 4 * v] + 3) + y[3 + 4 * v], _ = y[1 + 4 * v] + y[2 + 4 * v], k = y[1 + 4 * v] - y[2 + 4 * v], F = i - y[3 + 4 * v], h[m + 0] = x + _ >> 3, h[m + 16] = F + k >> 3, h[m + 32] = x - _ >> 3, h[m + 48] = F - k >> 3, m += 64;
      }
      function ui(i, o, h) {
        var m, v = o - 32, y = Cn, x = 255 - i[v - 1];
        for (m = 0; m < h; ++m) {
          var _, k = y, F = x + i[o - 1];
          for (_ = 0; _ < h; ++_) i[o + _] = k[F + i[v + _]];
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
      function la(i, o) {
        var h;
        for (h = 0; 16 > h; ++h) r(i, o + 32 * h, i, o - 32, 16);
      }
      function es(i, o) {
        var h;
        for (h = 16; 0 < h; --h) s(i, o, i[o - 1], 16), o += 32;
      }
      function Xn(i, o, h) {
        var m;
        for (m = 0; 16 > m; ++m) s(o, h + 32 * m, i, 16);
      }
      function ao(i, o) {
        var h, m = 16;
        for (h = 0; 16 > h; ++h) m += i[o - 1 + 32 * h] + i[o + h - 32];
        Xn(m >> 5, i, o);
      }
      function fi(i, o) {
        var h, m = 8;
        for (h = 0; 16 > h; ++h) m += i[o - 1 + 32 * h];
        Xn(m >> 4, i, o);
      }
      function ca(i, o) {
        var h, m = 8;
        for (h = 0; 16 > h; ++h) m += i[o + h - 32];
        Xn(m >> 4, i, o);
      }
      function so(i, o) {
        Xn(128, i, o);
      }
      function Qe(i, o, h) {
        return i + 2 * o + h + 2 >> 2;
      }
      function oo(i, o) {
        var h, m = o - 32;
        for (m = new Uint8Array([
          Qe(i[m - 1], i[m + 0], i[m + 1]),
          Qe(i[m + 0], i[m + 1], i[m + 2]),
          Qe(i[m + 1], i[m + 2], i[m + 3]),
          Qe(i[m + 2], i[m + 3], i[m + 4])
        ]), h = 0; 4 > h; ++h) r(i, o + 32 * h, m, 0, m.length);
      }
      function lo(i, o) {
        var h = i[o - 1], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96];
        le(i, o + 0, 16843009 * Qe(i[o - 1 - 32], h, m)), le(i, o + 32, 16843009 * Qe(h, m, v)), le(i, o + 64, 16843009 * Qe(m, v, y)), le(i, o + 96, 16843009 * Qe(v, y, y));
      }
      function co(i, o) {
        var h, m = 4;
        for (h = 0; 4 > h; ++h) m += i[o + h - 32] + i[o - 1 + 32 * h];
        for (m >>= 3, h = 0; 4 > h; ++h) s(i, o + 32 * h, m, 4);
      }
      function Nr(i, o) {
        var h = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 - 32], x = i[o + 0 - 32], _ = i[o + 1 - 32], k = i[o + 2 - 32], F = i[o + 3 - 32];
        i[o + 0 + 96] = Qe(m, v, i[o - 1 + 96]), i[o + 1 + 96] = i[o + 0 + 64] = Qe(h, m, v), i[o + 2 + 96] = i[o + 1 + 64] = i[o + 0 + 32] = Qe(y, h, m), i[o + 3 + 96] = i[o + 2 + 64] = i[o + 1 + 32] = i[o + 0 + 0] = Qe(x, y, h), i[o + 3 + 64] = i[o + 2 + 32] = i[o + 1 + 0] = Qe(_, x, y), i[o + 3 + 32] = i[o + 2 + 0] = Qe(k, _, x), i[o + 3 + 0] = Qe(F, k, _);
      }
      function _r(i, o) {
        var h = i[o + 1 - 32], m = i[o + 2 - 32], v = i[o + 3 - 32], y = i[o + 4 - 32], x = i[o + 5 - 32], _ = i[o + 6 - 32], k = i[o + 7 - 32];
        i[o + 0 + 0] = Qe(i[o + 0 - 32], h, m), i[o + 1 + 0] = i[o + 0 + 32] = Qe(h, m, v), i[o + 2 + 0] = i[o + 1 + 32] = i[o + 0 + 64] = Qe(m, v, y), i[o + 3 + 0] = i[o + 2 + 32] = i[o + 1 + 64] = i[o + 0 + 96] = Qe(v, y, x), i[o + 3 + 32] = i[o + 2 + 64] = i[o + 1 + 96] = Qe(y, x, _), i[o + 3 + 64] = i[o + 2 + 96] = Qe(x, _, k), i[o + 3 + 96] = Qe(_, k, k);
      }
      function uo(i, o) {
        var h = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 - 32], x = i[o + 0 - 32], _ = i[o + 1 - 32], k = i[o + 2 - 32], F = i[o + 3 - 32];
        i[o + 0 + 0] = i[o + 1 + 64] = y + x + 1 >> 1, i[o + 1 + 0] = i[o + 2 + 64] = x + _ + 1 >> 1, i[o + 2 + 0] = i[o + 3 + 64] = _ + k + 1 >> 1, i[o + 3 + 0] = k + F + 1 >> 1, i[o + 0 + 96] = Qe(v, m, h), i[o + 0 + 64] = Qe(m, h, y), i[o + 0 + 32] = i[o + 1 + 96] = Qe(h, y, x), i[o + 1 + 32] = i[o + 2 + 96] = Qe(y, x, _), i[o + 2 + 32] = i[o + 3 + 96] = Qe(x, _, k), i[o + 3 + 32] = Qe(_, k, F);
      }
      function fo(i, o) {
        var h = i[o + 0 - 32], m = i[o + 1 - 32], v = i[o + 2 - 32], y = i[o + 3 - 32], x = i[o + 4 - 32], _ = i[o + 5 - 32], k = i[o + 6 - 32], F = i[o + 7 - 32];
        i[o + 0 + 0] = h + m + 1 >> 1, i[o + 1 + 0] = i[o + 0 + 64] = m + v + 1 >> 1, i[o + 2 + 0] = i[o + 1 + 64] = v + y + 1 >> 1, i[o + 3 + 0] = i[o + 2 + 64] = y + x + 1 >> 1, i[o + 0 + 32] = Qe(h, m, v), i[o + 1 + 32] = i[o + 0 + 96] = Qe(m, v, y), i[o + 2 + 32] = i[o + 1 + 96] = Qe(v, y, x), i[o + 3 + 32] = i[o + 2 + 96] = Qe(y, x, _), i[o + 3 + 64] = Qe(x, _, k), i[o + 3 + 96] = Qe(_, k, F);
      }
      function Bi(i, o) {
        var h = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96];
        i[o + 0 + 0] = h + m + 1 >> 1, i[o + 2 + 0] = i[o + 0 + 32] = m + v + 1 >> 1, i[o + 2 + 32] = i[o + 0 + 64] = v + y + 1 >> 1, i[o + 1 + 0] = Qe(h, m, v), i[o + 3 + 0] = i[o + 1 + 32] = Qe(m, v, y), i[o + 3 + 32] = i[o + 1 + 64] = Qe(v, y, y), i[o + 3 + 64] = i[o + 2 + 64] = i[o + 0 + 96] = i[o + 1 + 96] = i[o + 2 + 96] = i[o + 3 + 96] = y;
      }
      function ua(i, o) {
        var h = i[o - 1 + 0], m = i[o - 1 + 32], v = i[o - 1 + 64], y = i[o - 1 + 96], x = i[o - 1 - 32], _ = i[o + 0 - 32], k = i[o + 1 - 32], F = i[o + 2 - 32];
        i[o + 0 + 0] = i[o + 2 + 32] = h + x + 1 >> 1, i[o + 0 + 32] = i[o + 2 + 64] = m + h + 1 >> 1, i[o + 0 + 64] = i[o + 2 + 96] = v + m + 1 >> 1, i[o + 0 + 96] = y + v + 1 >> 1, i[o + 3 + 0] = Qe(_, k, F), i[o + 2 + 0] = Qe(x, _, k), i[o + 1 + 0] = i[o + 3 + 32] = Qe(h, x, _), i[o + 1 + 32] = i[o + 3 + 64] = Qe(m, h, x), i[o + 1 + 64] = i[o + 3 + 96] = Qe(v, m, h), i[o + 1 + 96] = Qe(y, v, m);
      }
      function hi(i, o) {
        var h;
        for (h = 0; 8 > h; ++h) r(i, o + 32 * h, i, o - 32, 8);
      }
      function ho(i, o) {
        var h;
        for (h = 0; 8 > h; ++h) s(i, o, i[o - 1], 8), o += 32;
      }
      function Ar(i, o, h) {
        var m;
        for (m = 0; 8 > m; ++m) s(o, h + 32 * m, i, 8);
      }
      function po(i, o) {
        var h, m = 8;
        for (h = 0; 8 > h; ++h) m += i[o + h - 32] + i[o - 1 + 32 * h];
        Ar(m >> 4, i, o);
      }
      function fa(i, o) {
        var h, m = 4;
        for (h = 0; 8 > h; ++h) m += i[o + h - 32];
        Ar(m >> 3, i, o);
      }
      function ha(i, o) {
        var h, m = 4;
        for (h = 0; 8 > h; ++h) m += i[o - 1 + 32 * h];
        Ar(m >> 3, i, o);
      }
      function ts(i, o) {
        Ar(128, i, o);
      }
      function Lr(i, o, h) {
        var m = i[o - h], v = i[o + 0], y = 3 * (v - m) + mo[1020 + i[o - 2 * h] - i[o + h]], x = cs[112 + (y + 4 >> 3)];
        i[o - h] = Cn[255 + m + cs[112 + (y + 3 >> 3)]], i[o + 0] = Cn[255 + v - x];
      }
      function da(i, o, h, m) {
        var v = i[o + 0], y = i[o + h];
        return Hn[255 + i[o - 2 * h] - i[o - h]] > m || Hn[255 + y - v] > m;
      }
      function qi(i, o, h, m) {
        return 4 * Hn[255 + i[o - h] - i[o + 0]] + Hn[255 + i[o - 2 * h] - i[o + h]] <= m;
      }
      function pa(i, o, h, m, v) {
        var y = i[o - 3 * h], x = i[o - 2 * h], _ = i[o - h], k = i[o + 0], F = i[o + h], G = i[o + 2 * h], ae = i[o + 3 * h];
        return 4 * Hn[255 + _ - k] + Hn[255 + x - F] > m ? 0 : Hn[255 + i[o - 4 * h] - y] <= v && Hn[255 + y - x] <= v && Hn[255 + x - _] <= v && Hn[255 + ae - G] <= v && Hn[255 + G - F] <= v && Hn[255 + F - k] <= v;
      }
      function di(i, o, h, m) {
        var v = 2 * m + 1;
        for (m = 0; 16 > m; ++m) qi(i, o + m, h, v) && Lr(i, o + m, h);
      }
      function ma(i, o, h, m) {
        var v = 2 * m + 1;
        for (m = 0; 16 > m; ++m) qi(i, o + m * h, 1, v) && Lr(i, o + m * h, 1);
      }
      function ns(i, o, h, m) {
        var v;
        for (v = 3; 0 < v; --v) di(i, o += 4 * h, h, m);
      }
      function rs(i, o, h, m) {
        var v;
        for (v = 3; 0 < v; --v) ma(i, o += 4, h, m);
      }
      function Sr(i, o, h, m, v, y, x, _) {
        for (y = 2 * y + 1; 0 < v--; ) {
          if (pa(i, o, h, y, x)) if (da(i, o, h, _)) Lr(i, o, h);
          else {
            var k = i, F = o, G = h, ae = k[F - 2 * G], M = k[F - G], Y = k[F + 0], te = k[F + G], de = k[F + 2 * G], re = 27 * (be = mo[1020 + 3 * (Y - M) + mo[1020 + ae - te]]) + 63 >> 7, pe = 18 * be + 63 >> 7, be = 9 * be + 63 >> 7;
            k[F - 3 * G] = Cn[255 + k[F - 3 * G] + be], k[F - 2 * G] = Cn[255 + ae + pe], k[F - G] = Cn[255 + M + re], k[F + 0] = Cn[255 + Y - re], k[F + G] = Cn[255 + te - pe], k[F + 2 * G] = Cn[255 + de - be];
          }
          o += m;
        }
      }
      function kr(i, o, h, m, v, y, x, _) {
        for (y = 2 * y + 1; 0 < v--; ) {
          if (pa(i, o, h, y, x)) if (da(i, o, h, _)) Lr(i, o, h);
          else {
            var k = i, F = o, G = h, ae = k[F - G], M = k[F + 0], Y = k[F + G], te = cs[112 + (4 + (de = 3 * (M - ae)) >> 3)], de = cs[112 + (de + 3 >> 3)], re = te + 1 >> 1;
            k[F - 2 * G] = Cn[255 + k[F - 2 * G] + re], k[F - G] = Cn[255 + ae + de], k[F + 0] = Cn[255 + M - te], k[F + G] = Cn[255 + Y - re];
          }
          o += m;
        }
      }
      function is(i, o, h, m, v, y) {
        Sr(i, o, h, 1, 16, m, v, y);
      }
      function pi(i, o, h, m, v, y) {
        Sr(i, o, 1, h, 16, m, v, y);
      }
      function as(i, o, h, m, v, y) {
        var x;
        for (x = 3; 0 < x; --x) kr(i, o += 4 * h, h, 1, 16, m, v, y);
      }
      function c(i, o, h, m, v, y) {
        var x;
        for (x = 3; 0 < x; --x) kr(i, o += 4, 1, h, 16, m, v, y);
      }
      function b(i, o, h, m, v, y, x, _) {
        Sr(i, o, v, 1, 8, y, x, _), Sr(h, m, v, 1, 8, y, x, _);
      }
      function R(i, o, h, m, v, y, x, _) {
        Sr(i, o, 1, v, 8, y, x, _), Sr(h, m, 1, v, 8, y, x, _);
      }
      function U(i, o, h, m, v, y, x, _) {
        kr(i, o + 4 * v, v, 1, 8, y, x, _), kr(h, m + 4 * v, v, 1, 8, y, x, _);
      }
      function Q(i, o, h, m, v, y, x, _) {
        kr(i, o + 4, 1, v, 8, y, x, _), kr(h, m + 4, 1, v, 8, y, x, _);
      }
      function me() {
        this.ba = new ut(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xt(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
      }
      function _e() {
        this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
      }
      function Me() {
        this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
      }
      function Be() {
        this.ua = 0, this.Wa = new Xe(), this.vb = new Xe(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new ce(), this.yc = new H();
      }
      function Ze() {
        this.xb = this.a = 0, this.l = new Oi(), this.ca = new ut(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new D(), this.Pb = 0, this.wd = new D(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Be(), this.ab = 0, this.gc = f(4, Me), this.Oc = 0;
      }
      function at() {
        this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Oi(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
      }
      function bt(i, o, h, m, v, y, x) {
        for (i = i == null ? 0 : i[o + 0], o = 0; o < x; ++o) v[y + o] = i + h[m + o] & 255, i = v[y + o];
      }
      function Ot(i, o, h, m, v, y, x) {
        var _;
        if (i == null) bt(null, null, h, m, v, y, x);
        else for (_ = 0; _ < x; ++_) v[y + _] = i[o + _] + h[m + _] & 255;
      }
      function Jt(i, o, h, m, v, y, x) {
        if (i == null) bt(null, null, h, m, v, y, x);
        else {
          var _, k = i[o + 0], F = k, G = k;
          for (_ = 0; _ < x; ++_) F = G + (k = i[o + _]) - F, G = h[m + _] + (-256 & F ? 0 > F ? 0 : 255 : F) & 255, F = k, v[y + _] = G;
        }
      }
      function It(i, o, h, m) {
        var v = o.width, y = o.o;
        if (e(i != null && o != null), 0 > h || 0 >= m || h + m > y) return null;
        if (!i.Cc) {
          if (i.ga == null) {
            var x;
            if (i.ga = new at(), (x = i.ga == null) || (x = o.width * o.o, e(i.Gb.length == 0), i.Gb = a(x), i.Uc = 0, i.Gb == null ? x = 0 : (i.mb = i.Gb, i.nb = i.Uc, i.rc = null, x = 1), x = !x), !x) {
              x = i.ga;
              var _ = i.Fa, k = i.P, F = i.qc, G = i.mb, ae = i.nb, M = k + 1, Y = F - 1, te = x.l;
              if (e(_ != null && G != null && o != null), Xr[0] = null, Xr[1] = bt, Xr[2] = Ot, Xr[3] = Jt, x.ca = G, x.tb = ae, x.c = o.width, x.i = o.height, e(0 < x.c && 0 < x.i), 1 >= F) o = 0;
              else if (x.$a = 3 & _[k + 0], x.Z = _[k + 0] >> 2 & 3, x.Lc = _[k + 0] >> 4 & 3, k = _[k + 0] >> 6 & 3, 0 > x.$a || 1 < x.$a || 4 <= x.Z || 1 < x.Lc || k) o = 0;
              else if (te.put = Ke, te.ac = ar, te.bc = wr, te.ma = x, te.width = o.width, te.height = o.height, te.Da = o.Da, te.v = o.v, te.va = o.va, te.j = o.j, te.o = o.o, x.$a) e: {
                e(x.$a == 1), o = li();
                t: for (; ; ) {
                  if (o == null) {
                    o = 0;
                    break e;
                  }
                  if (e(x != null), x.mc = o, o.c = x.c, o.i = x.i, o.l = x.l, o.l.ma = x, o.l.width = x.c, o.l.height = x.i, o.a = 0, ne(o.m, _, M, Y), !or(x.c, x.i, 1, o, null) || (o.ab == 1 && o.gc[0].hc == 3 && Kn(o.s) ? (x.ic = 1, _ = o.c * o.i, o.Ta = null, o.Ua = 0, o.V = a(_), o.Ba = 0, o.V == null ? (o.a = 1, o = 0) : o = 1) : (x.ic = 0, o = ci(o, x.c)), !o)) break t;
                  o = 1;
                  break e;
                }
                x.mc = null, o = 0;
              }
              else o = Y >= x.c * x.i;
              x = !o;
            }
            if (x) return null;
            i.ga.Lc != 1 ? i.Ga = 0 : m = y - h;
          }
          e(i.ga != null), e(h + m <= y);
          e: {
            if (o = (_ = i.ga).c, y = _.l.o, _.$a == 0) {
              if (M = i.rc, Y = i.Vc, te = i.Fa, k = i.P + 1 + h * o, F = i.mb, G = i.nb + h * o, e(k <= i.P + i.qc), _.Z != 0) for (e(Xr[_.Z] != null), x = 0; x < m; ++x) Xr[_.Z](M, Y, te, k, F, G, o), M = F, Y = G, G += o, k += o;
              else for (x = 0; x < m; ++x) r(F, G, te, k, o), M = F, Y = G, G += o, k += o;
              i.rc = M, i.Vc = Y;
            } else {
              if (e(_.mc != null), o = h + m, e((x = _.mc) != null), e(o <= x.i), x.C >= o) o = 1;
              else if (_.ic || Zn(), _.ic) {
                _ = x.V, M = x.Ba, Y = x.c;
                var de = x.i, re = (te = 1, k = x.$ / Y, F = x.$ % Y, G = x.m, ae = x.s, x.$), pe = Y * de, be = Y * o, Se = ae.wc, Ae = re < be ? on(ae, F, k) : null;
                e(re <= pe), e(o <= de), e(Kn(ae));
                t: for (; ; ) {
                  for (; !G.h && re < be; ) {
                    if (F & Se || (Ae = on(ae, F, k)), e(Ae != null), T(G), 256 > (de = Dt(Ae.G[0], Ae.H[0], G))) _[M + re] = de, ++re, ++F >= Y && (F = 0, ++k <= o && !(k % 16) && Yn(x, k));
                    else {
                      if (!(280 > de)) {
                        te = 0;
                        break t;
                      }
                      de = On(de - 256, G);
                      var Ue, je = Dt(Ae.G[4], Ae.H[4], G);
                      if (T(G), !(re >= (je = Dn(Y, je = On(je, G))) && pe - re >= de)) {
                        te = 0;
                        break t;
                      }
                      for (Ue = 0; Ue < de; ++Ue) _[M + re + Ue] = _[M + re + Ue - je];
                      for (re += de, F += de; F >= Y; ) F -= Y, ++k <= o && !(k % 16) && Yn(x, k);
                      re < be && F & Se && (Ae = on(ae, F, k));
                    }
                    e(G.h == K(G));
                  }
                  Yn(x, k > o ? o : k);
                  break t;
                }
                !te || G.h && re < pe ? (te = 0, x.a = G.h ? 5 : 3) : x.$ = re, o = te;
              } else o = Jn(x, x.V, x.Ba, x.c, x.i, o, Fi);
              if (!o) {
                m = 0;
                break e;
              }
            }
            h + m >= y && (i.Cc = 1), m = 1;
          }
          if (!m) return null;
          if (i.Cc && ((m = i.ga) != null && (m.mc = null), i.ga = null, 0 < i.Ga)) return alert("todo:WebPDequantizeLevels"), null;
        }
        return i.nb + h * v;
      }
      function Qt(i, o, h, m, v, y) {
        for (; 0 < v--; ) {
          var x, _ = i, k = o + (h ? 1 : 0), F = i, G = o + (h ? 0 : 3);
          for (x = 0; x < m; ++x) {
            var ae = F[G + 4 * x];
            ae != 255 && (ae *= 32897, _[k + 4 * x + 0] = _[k + 4 * x + 0] * ae >> 23, _[k + 4 * x + 1] = _[k + 4 * x + 1] * ae >> 23, _[k + 4 * x + 2] = _[k + 4 * x + 2] * ae >> 23);
          }
          o += y;
        }
      }
      function Xt(i, o, h, m, v) {
        for (; 0 < m--; ) {
          var y;
          for (y = 0; y < h; ++y) {
            var x = i[o + 2 * y + 0], _ = 15 & (F = i[o + 2 * y + 1]), k = 4369 * _, F = (240 & F | F >> 4) * k >> 16;
            i[o + 2 * y + 0] = (240 & x | x >> 4) * k >> 16 & 240 | (15 & x | x << 4) * k >> 16 >> 4 & 15, i[o + 2 * y + 1] = 240 & F | _;
          }
          o += v;
        }
      }
      function ln(i, o, h, m, v, y, x, _) {
        var k, F, G = 255;
        for (F = 0; F < v; ++F) {
          for (k = 0; k < m; ++k) {
            var ae = i[o + k];
            y[x + 4 * k] = ae, G &= ae;
          }
          o += h, x += _;
        }
        return G != 255;
      }
      function Pr(i, o, h, m, v) {
        var y;
        for (y = 0; y < v; ++y) h[m + y] = i[o + y] >> 8;
      }
      function Zn() {
        ka = Qt, jl = Xt, El = ln, Fl = Pr;
      }
      function Cr(i, o, h) {
        z[i] = function(m, v, y, x, _, k, F, G, ae, M, Y, te, de, re, pe, be, Se) {
          var Ae, Ue = Se - 1 >> 1, je = _[k + 0] | F[G + 0] << 16, st = ae[M + 0] | Y[te + 0] << 16;
          e(m != null);
          var Oe = 3 * je + st + 131074 >> 2;
          for (o(m[v + 0], 255 & Oe, Oe >> 16, de, re), y != null && (Oe = 3 * st + je + 131074 >> 2, o(y[x + 0], 255 & Oe, Oe >> 16, pe, be)), Ae = 1; Ae <= Ue; ++Ae) {
            var pt = _[k + Ae] | F[G + Ae] << 16, tn = ae[M + Ae] | Y[te + Ae] << 16, ot = je + pt + st + tn + 524296, De = ot + 2 * (pt + st) >> 3;
            Oe = De + je >> 1, je = (ot = ot + 2 * (je + tn) >> 3) + pt >> 1, o(m[v + 2 * Ae - 1], 255 & Oe, Oe >> 16, de, re + (2 * Ae - 1) * h), o(m[v + 2 * Ae - 0], 255 & je, je >> 16, de, re + (2 * Ae - 0) * h), y != null && (Oe = ot + st >> 1, je = De + tn >> 1, o(y[x + 2 * Ae - 1], 255 & Oe, Oe >> 16, pe, be + (2 * Ae - 1) * h), o(y[x + 2 * Ae + 0], 255 & je, je >> 16, pe, be + (2 * Ae + 0) * h)), je = pt, st = tn;
          }
          1 & Se || (Oe = 3 * je + st + 131074 >> 2, o(m[v + Se - 1], 255 & Oe, Oe >> 16, de, re + (Se - 1) * h), y != null && (Oe = 3 * st + je + 131074 >> 2, o(y[x + Se - 1], 255 & Oe, Oe >> 16, pe, be + (Se - 1) * h)));
        };
      }
      function ga() {
        Wn[us] = Ph, Wn[fs] = Wl, Wn[Bl] = Ch, Wn[hs] = Vl, Wn[ds] = Gl, Wn[go] = $l, Wn[ql] = Ih, Wn[bo] = Wl, Wn[vo] = Vl, Wn[ps] = Gl, Wn[wo] = $l;
      }
      function Ui(i) {
        return i & -16384 ? 0 > i ? 0 : 255 : i >> jh;
      }
      function Ur(i, o) {
        return Ui((19077 * i >> 8) + (26149 * o >> 8) - 14234);
      }
      function mi(i, o, h) {
        return Ui((19077 * i >> 8) - (6419 * o >> 8) - (13320 * h >> 8) + 8708);
      }
      function gi(i, o) {
        return Ui((19077 * i >> 8) + (33050 * o >> 8) - 17685);
      }
      function zr(i, o, h, m, v) {
        m[v + 0] = Ur(i, h), m[v + 1] = mi(i, o, h), m[v + 2] = gi(i, o);
      }
      function cn(i, o, h, m, v) {
        m[v + 0] = gi(i, o), m[v + 1] = mi(i, o, h), m[v + 2] = Ur(i, h);
      }
      function bi(i, o, h, m, v) {
        var y = mi(i, o, h);
        o = y << 3 & 224 | gi(i, o) >> 3, m[v + 0] = 248 & Ur(i, h) | y >> 5, m[v + 1] = o;
      }
      function vi(i, o, h, m, v) {
        var y = 240 & gi(i, o) | 15;
        m[v + 0] = 240 & Ur(i, h) | mi(i, o, h) >> 4, m[v + 1] = y;
      }
      function ba(i, o, h, m, v) {
        m[v + 0] = 255, zr(i, o, h, m, v + 1);
      }
      function va(i, o, h, m, v) {
        cn(i, o, h, m, v), m[v + 3] = 255;
      }
      function wn(i, o, h, m, v) {
        zr(i, o, h, m, v), m[v + 3] = 255;
      }
      function Ir(i, o, h) {
        z[i] = function(m, v, y, x, _, k, F, G, ae) {
          for (var M = G + (-2 & ae) * h; G != M; ) o(m[v + 0], y[x + 0], _[k + 0], F, G), o(m[v + 1], y[x + 0], _[k + 0], F, G + h), v += 2, ++x, ++k, G += 2 * h;
          1 & ae && o(m[v + 0], y[x + 0], _[k + 0], F, G);
        };
      }
      function zi(i, o, h) {
        return h == 0 ? i == 0 ? o == 0 ? 6 : 5 : o == 0 ? 4 : 0 : h;
      }
      function ss(i, o, h, m, v) {
        switch (i >>> 30) {
          case 3:
            Ni(o, h, m, v, 0);
            break;
          case 2:
            zn(o, h, m, v);
            break;
          case 1:
            Nt(o, h, m, v);
        }
      }
      function Un(i, o) {
        var h, m, v = o.M, y = o.Nb, x = i.oc, _ = i.pc + 40, k = i.oc, F = i.pc + 584, G = i.oc, ae = i.pc + 600;
        for (h = 0; 16 > h; ++h) x[_ + 32 * h - 1] = 129;
        for (h = 0; 8 > h; ++h) k[F + 32 * h - 1] = 129, G[ae + 32 * h - 1] = 129;
        for (0 < v ? x[_ - 1 - 32] = k[F - 1 - 32] = G[ae - 1 - 32] = 129 : (s(x, _ - 32 - 1, 127, 21), s(k, F - 32 - 1, 127, 9), s(G, ae - 32 - 1, 127, 9)), m = 0; m < i.za; ++m) {
          var M = o.ya[o.aa + m];
          if (0 < m) {
            for (h = -1; 16 > h; ++h) r(x, _ + 32 * h - 4, x, _ + 32 * h + 12, 4);
            for (h = -1; 8 > h; ++h) r(k, F + 32 * h - 4, k, F + 32 * h + 4, 4), r(G, ae + 32 * h - 4, G, ae + 32 * h + 4, 4);
          }
          var Y = i.Gd, te = i.Hd + m, de = M.ad, re = M.Hc;
          if (0 < v && (r(x, _ - 32, Y[te].y, 0, 16), r(k, F - 32, Y[te].f, 0, 8), r(G, ae - 32, Y[te].ea, 0, 8)), M.Za) {
            var pe = x, be = _ - 32 + 16;
            for (0 < v && (m >= i.za - 1 ? s(pe, be, Y[te].y[15], 4) : r(pe, be, Y[te + 1].y, 0, 4)), h = 0; 4 > h; h++) pe[be + 128 + h] = pe[be + 256 + h] = pe[be + 384 + h] = pe[be + 0 + h];
            for (h = 0; 16 > h; ++h, re <<= 2) pe = x, be = _ + Yl[h], Qn[M.Ob[h]](pe, be), ss(re, de, 16 * +h, pe, be);
          } else if (pe = zi(m, v, M.Ob[0]), Jr[pe](x, _), re != 0) for (h = 0; 16 > h; ++h, re <<= 2) ss(re, de, 16 * +h, x, _ + Yl[h]);
          for (h = M.Gc, pe = zi(m, v, M.Dd), Fr[pe](k, F), Fr[pe](G, ae), re = de, pe = k, be = F, 255 & (M = 0 | h) && (170 & M ? dr(re, 256, pe, be) : St(re, 256, pe, be)), M = G, re = ae, 255 & (h >>= 8) && (170 & h ? dr(de, 320, M, re) : St(de, 320, M, re)), v < i.Ub - 1 && (r(Y[te].y, 0, x, _ + 480, 16), r(Y[te].f, 0, k, F + 224, 8), r(Y[te].ea, 0, G, ae + 224, 8)), h = 8 * y * i.B, Y = i.sa, te = i.ta + 16 * m + 16 * y * i.R, de = i.qa, M = i.ra + 8 * m + h, re = i.Ha, pe = i.Ia + 8 * m + h, h = 0; 16 > h; ++h) r(Y, te + h * i.R, x, _ + 32 * h, 16);
          for (h = 0; 8 > h; ++h) r(de, M + h * i.B, k, F + 32 * h, 8), r(re, pe + h * i.B, G, ae + 32 * h, 8);
        }
      }
      function wi(i, o, h, m, v, y, x, _, k) {
        var F = [
          0
        ], G = [
          0
        ], ae = 0, M = k != null ? k.kd : 0, Y = k ?? new _e();
        if (i == null || 12 > h) return 7;
        Y.data = i, Y.w = o, Y.ha = h, o = [
          o
        ], h = [
          h
        ], Y.gb = [
          Y.gb
        ];
        e: {
          var te = o, de = h, re = Y.gb;
          if (e(i != null), e(de != null), e(re != null), re[0] = 0, 12 <= de[0] && !t(i, te[0], "RIFF")) {
            if (t(i, te[0] + 8, "WEBP")) {
              re = 3;
              break e;
            }
            var pe = Re(i, te[0] + 4);
            if (12 > pe || 4294967286 < pe) {
              re = 3;
              break e;
            }
            if (M && pe > de[0] - 8) {
              re = 7;
              break e;
            }
            re[0] = pe, te[0] += 12, de[0] -= 12;
          }
          re = 0;
        }
        if (re != 0) return re;
        for (pe = 0 < Y.gb[0], h = h[0]; ; ) {
          e: {
            var be = i;
            de = o, re = h;
            var Se = F, Ae = G, Ue = te = [
              0
            ];
            if ((Oe = ae = [
              ae
            ])[0] = 0, 8 > re[0]) re = 7;
            else {
              if (!t(be, de[0], "VP8X")) {
                if (Re(be, de[0] + 4) != 10) {
                  re = 3;
                  break e;
                }
                if (18 > re[0]) {
                  re = 7;
                  break e;
                }
                var je = Re(be, de[0] + 8), st = 1 + ve(be, de[0] + 12);
                if (2147483648 <= st * (be = 1 + ve(be, de[0] + 15))) {
                  re = 3;
                  break e;
                }
                Ue != null && (Ue[0] = je), Se != null && (Se[0] = st), Ae != null && (Ae[0] = be), de[0] += 18, re[0] -= 18, Oe[0] = 1;
              }
              re = 0;
            }
          }
          if (ae = ae[0], te = te[0], re != 0) return re;
          if (de = !!(2 & te), !pe && ae) return 3;
          if (y != null && (y[0] = !!(16 & te)), x != null && (x[0] = de), _ != null && (_[0] = 0), x = F[0], te = G[0], ae && de && k == null) {
            re = 0;
            break;
          }
          if (4 > h) {
            re = 7;
            break;
          }
          if (pe && ae || !pe && !ae && !t(i, o[0], "ALPH")) {
            h = [
              h
            ], Y.na = [
              Y.na
            ], Y.P = [
              Y.P
            ], Y.Sa = [
              Y.Sa
            ];
            e: {
              je = i, re = o, pe = h;
              var Oe = Y.gb;
              Se = Y.na, Ae = Y.P, Ue = Y.Sa, st = 22, e(je != null), e(pe != null), be = re[0];
              var pt = pe[0];
              for (e(Se != null), e(Ue != null), Se[0] = null, Ae[0] = null, Ue[0] = 0; ; ) {
                if (re[0] = be, pe[0] = pt, 8 > pt) {
                  re = 7;
                  break e;
                }
                var tn = Re(je, be + 4);
                if (4294967286 < tn) {
                  re = 3;
                  break e;
                }
                var ot = 8 + tn + 1 & -2;
                if (st += ot, 0 < Oe && st > Oe) {
                  re = 3;
                  break e;
                }
                if (!t(je, be, "VP8 ") || !t(je, be, "VP8L")) {
                  re = 0;
                  break e;
                }
                if (pt[0] < ot) {
                  re = 7;
                  break e;
                }
                t(je, be, "ALPH") || (Se[0] = je, Ae[0] = be + 8, Ue[0] = tn), be += ot, pt -= ot;
              }
            }
            if (h = h[0], Y.na = Y.na[0], Y.P = Y.P[0], Y.Sa = Y.Sa[0], re != 0) break;
          }
          h = [
            h
          ], Y.Ja = [
            Y.Ja
          ], Y.xa = [
            Y.xa
          ];
          e: if (Oe = i, re = o, pe = h, Se = Y.gb[0], Ae = Y.Ja, Ue = Y.xa, je = re[0], be = !t(Oe, je, "VP8 "), st = !t(Oe, je, "VP8L"), e(Oe != null), e(pe != null), e(Ae != null), e(Ue != null), 8 > pe[0]) re = 7;
          else {
            if (be || st) {
              if (Oe = Re(Oe, je + 4), 12 <= Se && Oe > Se - 12) {
                re = 3;
                break e;
              }
              if (M && Oe > pe[0] - 8) {
                re = 7;
                break e;
              }
              Ae[0] = Oe, re[0] += 8, pe[0] -= 8, Ue[0] = st;
            } else Ue[0] = 5 <= pe[0] && Oe[je + 0] == 47 && !(Oe[je + 4] >> 5), Ae[0] = pe[0];
            re = 0;
          }
          if (h = h[0], Y.Ja = Y.Ja[0], Y.xa = Y.xa[0], o = o[0], re != 0) break;
          if (4294967286 < Y.Ja) return 3;
          if (_ == null || de || (_[0] = Y.xa ? 2 : 1), x = [
            x
          ], te = [
            te
          ], Y.xa) {
            if (5 > h) {
              re = 7;
              break;
            }
            _ = x, M = te, de = y, i == null || 5 > h ? i = 0 : 5 <= h && i[o + 0] == 47 && !(i[o + 4] >> 5) ? (pe = [
              0
            ], Oe = [
              0
            ], Se = [
              0
            ], ne(Ae = new D(), i, o, h), yr(Ae, pe, Oe, Se) ? (_ != null && (_[0] = pe[0]), M != null && (M[0] = Oe[0]), de != null && (de[0] = Se[0]), i = 1) : i = 0) : i = 0;
          } else {
            if (10 > h) {
              re = 7;
              break;
            }
            _ = te, i == null || 10 > h || !Ya(i, o + 3, h - 3) ? i = 0 : (M = i[o + 0] | i[o + 1] << 8 | i[o + 2] << 16, de = 16383 & (i[o + 7] << 8 | i[o + 6]), i = 16383 & (i[o + 9] << 8 | i[o + 8]), 1 & M || 3 < (M >> 1 & 7) || !(M >> 4 & 1) || M >> 5 >= Y.Ja || !de || !i ? i = 0 : (x && (x[0] = de), _ && (_[0] = i), i = 1));
          }
          if (!i || (x = x[0], te = te[0], ae && (F[0] != x || G[0] != te))) return 3;
          k != null && (k[0] = Y, k.offset = o - k.w, e(4294967286 > o - k.w), e(k.offset == k.ha - h));
          break;
        }
        return re == 0 || re == 7 && ae && k == null ? (y != null && (y[0] |= Y.na != null && 0 < Y.na.length), m != null && (m[0] = x), v != null && (v[0] = te), 0) : re;
      }
      function wa(i, o, h) {
        var m = o.width, v = o.height, y = 0, x = 0, _ = m, k = v;
        if (o.Da = i != null && 0 < i.Da, o.Da && (_ = i.cd, k = i.bd, y = i.v, x = i.j, 11 > h || (y &= -2, x &= -2), 0 > y || 0 > x || 0 >= _ || 0 >= k || y + _ > m || x + k > v)) return 0;
        if (o.v = y, o.j = x, o.va = y + _, o.o = x + k, o.U = _, o.T = k, o.da = i != null && 0 < i.da, o.da) {
          if (!qe(_, k, h = [
            i.ib
          ], y = [
            i.hb
          ])) return 0;
          o.ib = h[0], o.hb = y[0];
        }
        return o.ob = i != null && i.ob, o.Kb = i == null || !i.Sd, o.da && (o.ob = o.ib < 3 * m / 4 && o.hb < 3 * v / 4, o.Kb = 0), 1;
      }
      function ya(i) {
        if (i == null) return 2;
        if (11 > i.S) {
          var o = i.f.RGBA;
          o.fb += (i.height - 1) * o.A, o.A = -o.A;
        } else o = i.f.kb, i = i.height, o.O += (i - 1) * o.fa, o.fa = -o.fa, o.N += (i - 1 >> 1) * o.Ab, o.Ab = -o.Ab, o.W += (i - 1 >> 1) * o.Db, o.Db = -o.Db, o.F != null && (o.J += (i - 1) * o.lb, o.lb = -o.lb);
        return 0;
      }
      function Hr(i, o, h, m) {
        if (m == null || 0 >= i || 0 >= o) return 2;
        if (h != null) {
          if (h.Da) {
            var v = h.cd, y = h.bd, x = -2 & h.v, _ = -2 & h.j;
            if (0 > x || 0 > _ || 0 >= v || 0 >= y || x + v > i || _ + y > o) return 2;
            i = v, o = y;
          }
          if (h.da) {
            if (!qe(i, o, v = [
              h.ib
            ], y = [
              h.hb
            ])) return 2;
            i = v[0], o = y[0];
          }
        }
        m.width = i, m.height = o;
        e: {
          var k = m.width, F = m.height;
          if (i = m.S, 0 >= k || 0 >= F || !(i >= us && 13 > i)) i = 2;
          else {
            if (0 >= m.Rd && m.sd == null) {
              x = y = v = o = 0;
              var G = (_ = k * Jl[i]) * F;
              if (11 > i || (y = (F + 1) / 2 * (o = (k + 1) / 2), i == 12 && (x = (v = k) * F)), (F = a(G + 2 * y + x)) == null) {
                i = 1;
                break e;
              }
              m.sd = F, 11 > i ? ((k = m.f.RGBA).eb = F, k.fb = 0, k.A = _, k.size = G) : ((k = m.f.kb).y = F, k.O = 0, k.fa = _, k.Fd = G, k.f = F, k.N = 0 + G, k.Ab = o, k.Cd = y, k.ea = F, k.W = 0 + G + y, k.Db = o, k.Ed = y, i == 12 && (k.F = F, k.J = 0 + G + 2 * y), k.Tc = x, k.lb = v);
            }
            if (o = 1, v = m.S, y = m.width, x = m.height, v >= us && 13 > v) if (11 > v) i = m.f.RGBA, o &= (_ = Math.abs(i.A)) * (x - 1) + y <= i.size, o &= _ >= y * Jl[v], o &= i.eb != null;
            else {
              i = m.f.kb, _ = (y + 1) / 2, G = (x + 1) / 2, k = Math.abs(i.fa), F = Math.abs(i.Ab);
              var ae = Math.abs(i.Db), M = Math.abs(i.lb), Y = M * (x - 1) + y;
              o &= k * (x - 1) + y <= i.Fd, o &= F * (G - 1) + _ <= i.Cd, o = (o &= ae * (G - 1) + _ <= i.Ed) & k >= y & F >= _ & ae >= _, o &= i.y != null, o &= i.f != null, o &= i.ea != null, v == 12 && (o &= M >= y, o &= Y <= i.Tc, o &= i.F != null);
            }
            else o = 0;
            i = o ? 0 : 2;
          }
        }
        return i != 0 || h != null && h.fd && (i = ya(m)), i;
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
      ], Pn = 24, Wr = 32, jr = 8, Vr = [
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
      Ie("Predictor0", "PredictorAdd0"), z.Predictor0 = function() {
        return 4278190080;
      }, z.Predictor1 = function(i) {
        return i;
      }, z.Predictor2 = function(i, o, h) {
        return o[h + 0];
      }, z.Predictor3 = function(i, o, h) {
        return o[h + 1];
      }, z.Predictor4 = function(i, o, h) {
        return o[h - 1];
      }, z.Predictor5 = function(i, o, h) {
        return Ve(Ve(i, o[h + 1]), o[h + 0]);
      }, z.Predictor6 = function(i, o, h) {
        return Ve(i, o[h - 1]);
      }, z.Predictor7 = function(i, o, h) {
        return Ve(i, o[h + 0]);
      }, z.Predictor8 = function(i, o, h) {
        return Ve(o[h - 1], o[h + 0]);
      }, z.Predictor9 = function(i, o, h) {
        return Ve(o[h + 0], o[h + 1]);
      }, z.Predictor10 = function(i, o, h) {
        return Ve(Ve(i, o[h - 1]), Ve(o[h + 0], o[h + 1]));
      }, z.Predictor11 = function(i, o, h) {
        var m = o[h + 0];
        return 0 >= tt(m >> 24 & 255, i >> 24 & 255, (o = o[h - 1]) >> 24 & 255) + tt(m >> 16 & 255, i >> 16 & 255, o >> 16 & 255) + tt(m >> 8 & 255, i >> 8 & 255, o >> 8 & 255) + tt(255 & m, 255 & i, 255 & o) ? m : i;
      }, z.Predictor12 = function(i, o, h) {
        var m = o[h + 0];
        return (yt((i >> 24 & 255) + (m >> 24 & 255) - ((o = o[h - 1]) >> 24 & 255)) << 24 | yt((i >> 16 & 255) + (m >> 16 & 255) - (o >> 16 & 255)) << 16 | yt((i >> 8 & 255) + (m >> 8 & 255) - (o >> 8 & 255)) << 8 | yt((255 & i) + (255 & m) - (255 & o))) >>> 0;
      }, z.Predictor13 = function(i, o, h) {
        var m = o[h - 1];
        return (ft((i = Ve(i, o[h + 0])) >> 24 & 255, m >> 24 & 255) << 24 | ft(i >> 16 & 255, m >> 16 & 255) << 16 | ft(i >> 8 & 255, m >> 8 & 255) << 8 | ft(255 & i, 255 & m)) >>> 0;
      };
      var xa = z.PredictorAdd0;
      z.PredictorAdd1 = dt, Ie("Predictor2", "PredictorAdd2"), Ie("Predictor3", "PredictorAdd3"), Ie("Predictor4", "PredictorAdd4"), Ie("Predictor5", "PredictorAdd5"), Ie("Predictor6", "PredictorAdd6"), Ie("Predictor7", "PredictorAdd7"), Ie("Predictor8", "PredictorAdd8"), Ie("Predictor9", "PredictorAdd9"), Ie("Predictor10", "PredictorAdd10"), Ie("Predictor11", "PredictorAdd11"), Ie("Predictor12", "PredictorAdd12"), Ie("Predictor13", "PredictorAdd13");
      var Hi = z.PredictorAdd2;
      He("ColorIndexInverseTransform", "MapARGB", "32b", function(i) {
        return i >> 8 & 255;
      }, function(i) {
        return i;
      }), He("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(i) {
        return i;
      }, function(i) {
        return i >> 8 & 255;
      });
      var zt, os = z.ColorIndexInverseTransform, fr = z.MapARGB, hr = z.VP8LColorIndexInverseTransformAlpha, Na = z.MapAlpha, _a = z.VP8LPredictorsAdd = [];
      _a.length = 16, (z.VP8LPredictors = []).length = 16, (z.VP8LPredictorsAdd_C = []).length = 16, (z.VP8LPredictors_C = []).length = 16;
      var Aa, La, Gr, $r, Kr, xi, Yr, Ni, zn, dr, Nt, St, Ht, en, Er, Sa, Wi, ls, Ll, Sl, kl, Pl, Cl, Il, ka, jl, El, Fl, Ml = a(511), Rl = a(2041), Ol = a(225), Dl = a(767), Tl = 0, mo = Rl, cs = Ol, Cn = Dl, Hn = Ml, us = 0, fs = 1, Bl = 2, hs = 3, ds = 4, go = 5, ql = 6, bo = 7, vo = 8, ps = 9, wo = 10, ph = [
        2,
        3,
        7
      ], mh = [
        3,
        3,
        11
      ], Ul = [
        280,
        256,
        256,
        256,
        40
      ], gh = [
        0,
        1,
        1,
        1,
        0
      ], bh = [
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
      ], vh = [
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
      ], wh = [
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
      ], yh = 8, yo = [
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
      ], Pa = null, xh = [
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
      ], Nh = [
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
      ], _h = [
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
      ], Ah = [
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
      ], Lh = [
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
      ], Sh = [
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
      ], Jr = [], Qn = [], Fr = [], kh = 1, Hl = 2, Xr = [], Wn = [];
      Cr("UpsampleRgbLinePair", zr, 3), Cr("UpsampleBgrLinePair", cn, 3), Cr("UpsampleRgbaLinePair", wn, 4), Cr("UpsampleBgraLinePair", va, 4), Cr("UpsampleArgbLinePair", ba, 4), Cr("UpsampleRgba4444LinePair", vi, 2), Cr("UpsampleRgb565LinePair", bi, 2);
      var Ph = z.UpsampleRgbLinePair, Ch = z.UpsampleBgrLinePair, Wl = z.UpsampleRgbaLinePair, Vl = z.UpsampleBgraLinePair, Gl = z.UpsampleArgbLinePair, $l = z.UpsampleRgba4444LinePair, Ih = z.UpsampleRgb565LinePair, ms = 16, gs = 1 << ms - 1, Ca = -227, No = 482, jh = 6, Kl = 0, Eh = a(256), Fh = a(256), Mh = a(256), Rh = a(256), Oh = a(No - Ca), Dh = a(No - Ca);
      Ir("YuvToRgbRow", zr, 3), Ir("YuvToBgrRow", cn, 3), Ir("YuvToRgbaRow", wn, 4), Ir("YuvToBgraRow", va, 4), Ir("YuvToArgbRow", ba, 4), Ir("YuvToRgba4444Row", vi, 2), Ir("YuvToRgb565Row", bi, 2);
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
      ], bs = [
        0,
        2,
        8
      ], Th = [
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
      ], Bh = 1;
      this.WebPDecodeRGBA = function(i, o, h, m, v) {
        var y = fs, x = new me(), _ = new ut();
        x.ba = _, _.S = y, _.width = [
          _.width
        ], _.height = [
          _.height
        ];
        var k = _.width, F = _.height, G = new $e();
        if (G == null || i == null) var ae = 2;
        else e(G != null), ae = wi(i, o, h, G.width, G.height, G.Pd, G.Qd, G.format, null);
        if (ae != 0 ? k = 0 : (k != null && (k[0] = G.width[0]), F != null && (F[0] = G.height[0]), k = 1), k) {
          _.width = _.width[0], _.height = _.height[0], m != null && (m[0] = _.width), v != null && (v[0] = _.height);
          e: {
            if (m = new Oi(), (v = new _e()).data = i, v.w = o, v.ha = h, v.kd = 1, o = [
              0
            ], e(v != null), ((i = wi(v.data, v.w, v.ha, null, null, null, o, null, v)) == 0 || i == 7) && o[0] && (i = 4), (o = i) == 0) {
              if (e(x != null), m.data = v.data, m.w = v.w + v.offset, m.ha = v.ha - v.offset, m.put = Ke, m.ac = ar, m.bc = wr, m.ma = x, v.xa) {
                if ((i = li()) == null) {
                  x = 1;
                  break e;
                }
                if (function(M, Y) {
                  var te = [
                    0
                  ], de = [
                    0
                  ], re = [
                    0
                  ];
                  t: for (; ; ) {
                    if (M == null) return 0;
                    if (Y == null) return M.a = 2, 0;
                    if (M.l = Y, M.a = 0, ne(M.m, Y.data, Y.w, Y.ha), !yr(M.m, te, de, re)) {
                      M.a = 3;
                      break t;
                    }
                    if (M.xb = Hl, Y.width = te[0], Y.height = de[0], !or(te[0], de[0], 1, M, null)) break t;
                    return 1;
                  }
                  return e(M.a != 0), 0;
                }(i, m)) {
                  if (m = (o = Hr(m.width, m.height, x.Oa, x.ba)) == 0) {
                    t: {
                      m = i;
                      n: for (; ; ) {
                        if (m == null) {
                          m = 0;
                          break t;
                        }
                        if (e(m.s.yc != null), e(m.s.Ya != null), e(0 < m.s.Wb), e((h = m.l) != null), e((v = h.ma) != null), m.xb != 0) {
                          if (m.ca = v.ba, m.tb = v.tb, e(m.ca != null), !wa(v.Oa, h, hs)) {
                            m.a = 2;
                            break n;
                          }
                          if (!ci(m, h.width) || h.da) break n;
                          if ((h.da || Ye(m.ca.S)) && Zn(), 11 > m.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), m.ca.f.kb.F != null && Zn()), m.Pb && 0 < m.s.ua && m.s.vb.X == null && !P(m.s.vb, m.s.Wa.Xa)) {
                            m.a = 1;
                            break n;
                          }
                          m.xb = 0;
                        }
                        if (!Jn(m, m.V, m.Ba, m.c, m.i, h.o, qr)) break n;
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
                  if ((o = Hr(m.width, m.height, x.Oa, x.ba)) == 0) {
                    if (i.Aa = 0, h = x.Oa, e((v = i) != null), h != null) {
                      if (0 < (k = 0 > (k = h.Md) ? 0 : 100 < k ? 255 : 255 * k / 100)) {
                        for (F = G = 0; 4 > F; ++F) 12 > (ae = v.pb[F]).lc && (ae.ia = k * Th[0 > ae.lc ? 0 : ae.lc] >> 3), G |= ae.ia;
                        G && (alert("todo:VP8InitRandom"), v.ia = 1);
                      }
                      v.Ga = h.Id, 100 < v.Ga ? v.Ga = 100 : 0 > v.Ga && (v.Ga = 0);
                    }
                    (function(M, Y) {
                      if (M == null) return 0;
                      if (Y == null) return Yt(M, 2, "NULL VP8Io parameter in VP8Decode().");
                      if (!M.cb && !cr(M, Y)) return 0;
                      if (e(M.cb), Y.ac == null || Y.ac(Y)) {
                        Y.ob && (M.L = 0);
                        var te = bs[M.L];
                        if (M.L == 2 ? (M.yb = 0, M.zb = 0) : (M.yb = Y.v - te >> 4, M.zb = Y.j - te >> 4, 0 > M.yb && (M.yb = 0), 0 > M.zb && (M.zb = 0)), M.Va = Y.o + 15 + te >> 4, M.Hb = Y.va + 15 + te >> 4, M.Hb > M.za && (M.Hb = M.za), M.Va > M.Ub && (M.Va = M.Ub), 0 < M.L) {
                          var de = M.ed;
                          for (te = 0; 4 > te; ++te) {
                            var re;
                            if (M.Qa.Cb) {
                              var pe = M.Qa.Lb[te];
                              M.Qa.Fb || (pe += de.Tb);
                            } else pe = de.Tb;
                            for (re = 0; 1 >= re; ++re) {
                              var be = M.gd[te][re], Se = pe;
                              if (de.Pc && (Se += de.vd[0], re && (Se += de.od[0])), 0 < (Se = 0 > Se ? 0 : 63 < Se ? 63 : Se)) {
                                var Ae = Se;
                                0 < de.wb && (Ae = 4 < de.wb ? Ae >> 2 : Ae >> 1) > 9 - de.wb && (Ae = 9 - de.wb), 1 > Ae && (Ae = 1), be.dd = Ae, be.tc = 2 * Se + Ae, be.ld = 40 <= Se ? 2 : 15 <= Se ? 1 : 0;
                              } else be.tc = 0;
                              be.La = re;
                            }
                          }
                        }
                        te = 0;
                      } else Yt(M, 6, "Frame setup failed"), te = M.a;
                      if (te = te == 0) {
                        if (te) {
                          M.$c = 0, 0 < M.Aa || (M.Ic = Bh);
                          t: {
                            te = M.Ic, de = 4 * (Ae = M.za);
                            var Ue = 32 * Ae, je = Ae + 1, st = 0 < M.L ? Ae * (0 < M.Aa ? 2 : 1) : 0, Oe = (M.Aa == 2 ? 2 : 1) * Ae;
                            if ((be = de + 832 + (re = 3 * (16 * te + bs[M.L]) / 2 * Ue) + (pe = M.Fa != null && 0 < M.Fa.length ? M.Kc.c * M.Kc.i : 0)) != be) te = 0;
                            else {
                              if (be > M.Vb) {
                                if (M.Vb = 0, M.Ec = a(be), M.Fc = 0, M.Ec == null) {
                                  te = Yt(M, 1, "no memory during frame initialization.");
                                  break t;
                                }
                                M.Vb = be;
                              }
                              be = M.Ec, Se = M.Fc, M.Ac = be, M.Bc = Se, Se += de, M.Gd = f(Ue, $a), M.Hd = 0, M.rb = f(je + 1, sa), M.sb = 1, M.wa = st ? f(st, Bn) : null, M.Y = 0, M.D.Nb = 0, M.D.wa = M.wa, M.D.Y = M.Y, 0 < M.Aa && (M.D.Y += Ae), e(true), M.oc = be, M.pc = Se, Se += 832, M.ya = f(Oe, oa), M.aa = 0, M.D.ya = M.ya, M.D.aa = M.aa, M.Aa == 2 && (M.D.aa += Ae), M.R = 16 * Ae, M.B = 8 * Ae, Ae = (Ue = bs[M.L]) * M.R, Ue = Ue / 2 * M.B, M.sa = be, M.ta = Se + Ae, M.qa = M.sa, M.ra = M.ta + 16 * te * M.R + Ue, M.Ha = M.qa, M.Ia = M.ra + 8 * te * M.B + Ue, M.$c = 0, Se += re, M.mb = pe ? be : null, M.nb = pe ? Se : null, e(Se + pe <= M.Fc + M.Vb), Ja(M), s(M.Ac, M.Bc, 0, de), te = 1;
                            }
                          }
                          if (te) {
                            if (Y.ka = 0, Y.y = M.sa, Y.O = M.ta, Y.f = M.qa, Y.N = M.ra, Y.ea = M.Ha, Y.Vd = M.Ia, Y.fa = M.R, Y.Rc = M.B, Y.F = null, Y.J = 0, !Tl) {
                              for (te = -255; 255 >= te; ++te) Ml[255 + te] = 0 > te ? -te : te;
                              for (te = -1020; 1020 >= te; ++te) Rl[1020 + te] = -128 > te ? -128 : 127 < te ? 127 : te;
                              for (te = -112; 112 >= te; ++te) Ol[112 + te] = -16 > te ? -16 : 15 < te ? 15 : te;
                              for (te = -255; 510 >= te; ++te) Dl[255 + te] = 0 > te ? 0 : 255 < te ? 255 : te;
                              Tl = 1;
                            }
                            Yr = Ti, Ni = to, dr = ur, Nt = Za, St = Qa, zn = eo, Ht = is, en = pi, Er = b, Sa = R, Wi = as, ls = c, Ll = U, Sl = Q, kl = di, Pl = ma, Cl = ns, Il = rs, Qn[0] = co, Qn[1] = no, Qn[2] = oo, Qn[3] = lo, Qn[4] = Nr, Qn[5] = uo, Qn[6] = _r, Qn[7] = fo, Qn[8] = ua, Qn[9] = Bi, Jr[0] = ao, Jr[1] = io, Jr[2] = la, Jr[3] = es, Jr[4] = fi, Jr[5] = ca, Jr[6] = so, Fr[0] = po, Fr[1] = ro, Fr[2] = hi, Fr[3] = ho, Fr[4] = ha, Fr[5] = fa, Fr[6] = ts, te = 1;
                          } else te = 0;
                        }
                        te && (te = function(pt, tn) {
                          for (pt.M = 0; pt.M < pt.Va; ++pt.M) {
                            var ot, De = pt.Jc[pt.M & pt.Xb], Ce = pt.m, Wt = pt;
                            for (ot = 0; ot < Wt.za; ++ot) {
                              var rt = Ce, mt = Wt, Et = mt.Ac, un = mt.Bc + 4 * ot, yn = mt.zc, Tt = mt.ya[mt.aa + ot];
                              if (mt.Qa.Bb ? Tt.$b = se(rt, mt.Pa.jb[0]) ? 2 + se(rt, mt.Pa.jb[2]) : se(rt, mt.Pa.jb[1]) : Tt.$b = 0, mt.kc && (Tt.Ad = se(rt, mt.Bd)), Tt.Za = !se(rt, 145) + 0, Tt.Za) {
                                var pn = Tt.Ob, xn = 0;
                                for (mt = 0; 4 > mt; ++mt) {
                                  var nn, vt = yn[0 + mt];
                                  for (nn = 0; 4 > nn; ++nn) {
                                    vt = Ah[Et[un + nn]][vt];
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
                              if (Wt = De, rt = (Ce = pt).rb[Ce.sb - 1], Et = Ce.rb[Ce.sb + Ce.ja], ot = Ce.ya[Ce.aa + Ce.ja], un = Ce.kc ? ot.Ad : 0) rt.la = Et.la = 0, ot.Za || (rt.Na = Et.Na = 0), ot.Hc = 0, ot.Gc = 0, ot.ia = 0;
                              else {
                                var Bt, At;
                                if (rt = Et, Et = Wt, un = Ce.Pa.Xc, yn = Ce.ya[Ce.aa + Ce.ja], Tt = Ce.pb[yn.$b], mt = yn.ad, pn = 0, xn = Ce.rb[Ce.sb - 1], vt = nn = 0, s(mt, pn, 0, 384), yn.Za) var fn = 0, er = un[3];
                                else {
                                  _t = a(16);
                                  var Vt = rt.Na + xn.Na;
                                  if (Vt = Pa(Et, un[1], Vt, Tt.Eb, 0, _t, 0), rt.Na = xn.Na = (0 < Vt) + 0, 1 < Vt) Yr(_t, 0, mt, pn);
                                  else {
                                    var An = _t[0] + 3 >> 3;
                                    for (_t = 0; 256 > _t; _t += 16) mt[pn + _t] = An;
                                  }
                                  fn = 1, er = un[0];
                                }
                                var kt = 15 & rt.la, rn = 15 & xn.la;
                                for (_t = 0; 4 > _t; ++_t) {
                                  var In = 1 & rn;
                                  for (An = At = 0; 4 > An; ++An) kt = kt >> 1 | (In = (Vt = Pa(Et, er, Vt = In + (1 & kt), Tt.Sc, fn, mt, pn)) > fn) << 7, At = At << 2 | (3 < Vt ? 3 : 1 < Vt ? 2 : mt[pn + 0] != 0), pn += 16;
                                  kt >>= 4, rn = rn >> 1 | In << 7, nn = (nn << 8 | At) >>> 0;
                                }
                                for (er = kt, fn = rn >> 4, Bt = 0; 4 > Bt; Bt += 2) {
                                  for (At = 0, kt = rt.la >> 4 + Bt, rn = xn.la >> 4 + Bt, _t = 0; 2 > _t; ++_t) {
                                    for (In = 1 & rn, An = 0; 2 > An; ++An) Vt = In + (1 & kt), kt = kt >> 1 | (In = 0 < (Vt = Pa(Et, un[2], Vt, Tt.Qc, 0, mt, pn))) << 3, At = At << 2 | (3 < Vt ? 3 : 1 < Vt ? 2 : mt[pn + 0] != 0), pn += 16;
                                    kt >>= 2, rn = rn >> 1 | In << 5;
                                  }
                                  vt |= At << 4 * Bt, er |= kt << 4 << Bt, fn |= (240 & rn) << Bt;
                                }
                                rt.la = er, xn.la = fn, yn.Hc = nn, yn.Gc = vt, yn.ia = 43690 & vt ? 0 : Tt.ia, un = !(nn | vt);
                              }
                              if (0 < Ce.L && (Ce.wa[Ce.Y + Ce.ja] = Ce.gd[ot.$b][ot.Za], Ce.wa[Ce.Y + Ce.ja].La |= !un), Wt.Ka) return Yt(pt, 7, "Premature end-of-file encountered.");
                            }
                            if (Ja(pt), Ce = tn, Wt = 1, ot = (De = pt).D, rt = 0 < De.L && De.M >= De.zb && De.M <= De.Va, De.Aa == 0) t: {
                              if (ot.M = De.M, ot.uc = rt, Un(De, ot), Wt = 1, ot = (At = De.D).Nb, rt = (vt = bs[De.L]) * De.R, Et = vt / 2 * De.B, _t = 16 * ot * De.R, An = 8 * ot * De.B, un = De.sa, yn = De.ta - rt + _t, Tt = De.qa, mt = De.ra - Et + An, pn = De.Ha, xn = De.Ia - Et + An, rn = (kt = At.M) == 0, nn = kt >= De.Va - 1, De.Aa == 2 && Un(De, At), At.uc) for (In = (Vt = De).D.M, e(Vt.D.uc), At = Vt.yb; At < Vt.Hb; ++At) {
                                fn = At, er = In;
                                var Nn = (jn = (hn = Vt).D).Nb;
                                Bt = hn.R;
                                var jn = jn.wa[jn.Y + fn], En = hn.sa, Ln = hn.ta + 16 * Nn * Bt + 16 * fn, Fn = jn.dd, jt = jn.tc;
                                if (jt != 0) if (e(3 <= jt), hn.L == 1) 0 < fn && Pl(En, Ln, Bt, jt + 4), jn.La && Il(En, Ln, Bt, jt), 0 < er && kl(En, Ln, Bt, jt + 4), jn.La && Cl(En, Ln, Bt, jt);
                                else {
                                  var Mn = hn.B, tr = hn.qa, _i = hn.ra + 8 * Nn * Mn + 8 * fn, Mr = hn.Ha, hn = hn.Ia + 8 * Nn * Mn + 8 * fn;
                                  Nn = jn.ld, 0 < fn && (en(En, Ln, Bt, jt + 4, Fn, Nn), Sa(tr, _i, Mr, hn, Mn, jt + 4, Fn, Nn)), jn.La && (ls(En, Ln, Bt, jt, Fn, Nn), Sl(tr, _i, Mr, hn, Mn, jt, Fn, Nn)), 0 < er && (Ht(En, Ln, Bt, jt + 4, Fn, Nn), Er(tr, _i, Mr, hn, Mn, jt + 4, Fn, Nn)), jn.La && (Wi(En, Ln, Bt, jt, Fn, Nn), Ll(tr, _i, Mr, hn, Mn, jt, Fn, Nn));
                                }
                              }
                              if (De.ia && alert("todo:DitherRow"), Ce.put != null) {
                                if (At = 16 * kt, kt = 16 * (kt + 1), rn ? (Ce.y = De.sa, Ce.O = De.ta + _t, Ce.f = De.qa, Ce.N = De.ra + An, Ce.ea = De.Ha, Ce.W = De.Ia + An) : (At -= vt, Ce.y = un, Ce.O = yn, Ce.f = Tt, Ce.N = mt, Ce.ea = pn, Ce.W = xn), nn || (kt -= vt), kt > Ce.o && (kt = Ce.o), Ce.F = null, Ce.J = null, De.Fa != null && 0 < De.Fa.length && At < kt && (Ce.J = It(De, Ce, At, kt - At), Ce.F = De.mb, Ce.F == null && Ce.F.length == 0)) {
                                  Wt = Yt(De, 3, "Could not decode alpha data.");
                                  break t;
                                }
                                At < Ce.j && (vt = Ce.j - At, At = Ce.j, e(!(1 & vt)), Ce.O += De.R * vt, Ce.N += De.B * (vt >> 1), Ce.W += De.B * (vt >> 1), Ce.F != null && (Ce.J += Ce.width * vt)), At < kt && (Ce.O += Ce.v, Ce.N += Ce.v >> 1, Ce.W += Ce.v >> 1, Ce.F != null && (Ce.J += Ce.v), Ce.ka = At - Ce.j, Ce.U = Ce.va - Ce.v, Ce.T = kt - At, Wt = Ce.put(Ce));
                              }
                              ot + 1 != De.Ic || nn || (r(De.sa, De.ta - rt, un, yn + 16 * De.R, rt), r(De.qa, De.ra - Et, Tt, mt + 8 * De.B, Et), r(De.Ha, De.Ia - Et, pn, xn + 8 * De.B, Et));
                            }
                            if (!Wt) return Yt(pt, 6, "Output aborted.");
                          }
                          return 1;
                        }(M, Y)), Y.bc != null && Y.bc(Y), te &= 1;
                      }
                      return te ? (M.cb = 0, te) : 0;
                    })(i, m) || (o = i.a);
                  }
                } else o = i.a;
              }
              o == 0 && x.Oa != null && x.Oa.fd && (o = ya(x.ba));
            }
            x = o;
          }
          y = x != 0 ? null : 11 > y ? _.f.RGBA.eb : _.f.kb.y;
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
    function d(z, ie) {
      for (var A = "", I = 0; I < 4; I++) A += String.fromCharCode(z[ie++]);
      return A;
    }
    function g(z, ie) {
      return z[ie + 0] | z[ie + 1] << 8;
    }
    function w(z, ie) {
      return (z[ie + 0] | z[ie + 1] << 8 | z[ie + 2] << 16) >>> 0;
    }
    function L(z, ie) {
      return (z[ie + 0] | z[ie + 1] << 8 | z[ie + 2] << 16 | z[ie + 3] << 24) >>> 0;
    }
    new u();
    var p = [
      0
    ], j = [
      0
    ], E = [], O = new u(), S = n, $ = function(z, ie) {
      var A = {}, I = 0, H = false, W = 0, ce = 0;
      if (A.frames = [], !function(N, D) {
        for (var q = 0; q < 4; q++) if (N[D + q] != "RIFF".charCodeAt(q)) return true;
        return false;
      }(z, ie)) {
        for (L(z, ie += 4), ie += 8; ie < z.length; ) {
          var he = d(z, ie), xe = L(z, ie += 4);
          ie += 4;
          var oe = xe + (1 & xe);
          switch (he) {
            case "VP8 ":
            case "VP8L":
              A.frames[I] === void 0 && (A.frames[I] = {}), (Le = A.frames[I]).src_off = H ? ce : ie - 8, Le.src_size = W + xe + 8, I++, H && (H = false, W = 0, ce = 0);
              break;
            case "VP8X":
              (Le = A.header = {}).feature_flags = z[ie];
              var ne = ie + 4;
              Le.canvas_width = 1 + w(z, ne), ne += 3, Le.canvas_height = 1 + w(z, ne), ne += 3;
              break;
            case "ALPH":
              H = true, W = oe + 8, ce = ie - 8;
              break;
            case "ANIM":
              (Le = A.header).bgcolor = L(z, ie), ne = ie + 4, Le.loop_count = g(z, ne), ne += 2;
              break;
            case "ANMF":
              var ke, Le;
              (Le = A.frames[I] = {}).offset_x = 2 * w(z, ie), ie += 3, Le.offset_y = 2 * w(z, ie), ie += 3, Le.width = 1 + w(z, ie), ie += 3, Le.height = 1 + w(z, ie), ie += 3, Le.duration = w(z, ie), ie += 3, ke = z[ie++], Le.dispose = 1 & ke, Le.blend = ke >> 1 & 1;
          }
          he != "ANMF" && (ie += oe);
        }
        return A;
      }
    }(S, 0);
    $.response = S, $.rgbaoutput = true, $.dataurl = false;
    var V = $.header ? $.header : null, B = $.frames ? $.frames : null;
    if (V) {
      V.loop_counter = V.loop_count, p = [
        V.canvas_height
      ], j = [
        V.canvas_width
      ];
      for (var ue = 0; ue < B.length && B[ue].blend != 0; ue++) ;
    }
    var Ne = B[0], fe = O.WebPDecodeRGBA(S, Ne.src_off, Ne.src_size, j, p);
    Ne.rgba = fe, Ne.imgwidth = j[0], Ne.imgheight = p[0];
    for (var ee = 0; ee < j[0] * p[0] * 4; ee++) E[ee] = fe[ee];
    return this.width = j, this.height = p, this.data = E, this;
  }
  function q5() {
    var n, e = this.internal.__metadata__.metadata, t = unescape(encodeURIComponent(e));
    n = this.internal.__metadata__.rawXml ? t : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + n.length + " >>"), this.internal.write("stream"), this.internal.write(n), this.internal.write("endstream"), this.internal.write("endobj");
  }
  function U5() {
    this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
  }
  (function(n) {
    var e, t, r, s, a, f, l, u, d, g = function(N) {
      return N = N || {}, this.isStrokeTransparent = N.isStrokeTransparent || false, this.strokeOpacity = N.strokeOpacity || 1, this.strokeStyle = N.strokeStyle || "#000000", this.fillStyle = N.fillStyle || "#000000", this.isFillTransparent = N.isFillTransparent || false, this.fillOpacity = N.fillOpacity || 1, this.font = N.font || "10px sans-serif", this.textBaseline = N.textBaseline || "alphabetic", this.textAlign = N.textAlign || "left", this.lineWidth = N.lineWidth || 1, this.lineJoin = N.lineJoin || "miter", this.lineCap = N.lineCap || "butt", this.path = N.path || [], this.transform = N.transform !== void 0 ? N.transform.clone() : new u(), this.globalCompositeOperation = N.globalCompositeOperation || "normal", this.globalAlpha = N.globalAlpha || 1, this.clip_path = N.clip_path || [], this.currentPoint = N.currentPoint || new f(), this.miterLimit = N.miterLimit || 10, this.lastPoint = N.lastPoint || new f(), this.lineDashOffset = N.lineDashOffset || 0, this.lineDash = N.lineDash || [], this.margin = N.margin || [
        0,
        0,
        0,
        0
      ], this.prevPageLastElemOffset = N.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof N.ignoreClearRect != "boolean" || N.ignoreClearRect, this;
    };
    n.events.push([
      "initialized",
      function() {
        this.context2d = new w(this), e = this.internal.f2, t = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, f = this.internal.Point, l = this.internal.Rectangle, u = this.internal.Matrix, d = new g();
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
      var D = N;
      Object.defineProperty(this, "pdf", {
        get: function() {
          return D;
        }
      });
      var q = false;
      Object.defineProperty(this, "pageWrapXEnabled", {
        get: function() {
          return q;
        },
        set: function(P) {
          q = !!P;
        }
      });
      var K = false;
      Object.defineProperty(this, "pageWrapYEnabled", {
        get: function() {
          return K;
        },
        set: function(P) {
          K = !!P;
        }
      });
      var X = 0;
      Object.defineProperty(this, "posX", {
        get: function() {
          return X;
        },
        set: function(P) {
          isNaN(P) || (X = P);
        }
      });
      var T = 0;
      Object.defineProperty(this, "posY", {
        get: function() {
          return T;
        },
        set: function(P) {
          isNaN(P) || (T = P);
        }
      }), Object.defineProperty(this, "margin", {
        get: function() {
          return d.margin;
        },
        set: function(P) {
          var Pe;
          typeof P == "number" ? Pe = [
            P,
            P,
            P,
            P
          ] : ((Pe = new Array(4))[0] = P[0], Pe[1] = P.length >= 2 ? P[1] : Pe[0], Pe[2] = P.length >= 3 ? P[2] : Pe[0], Pe[3] = P.length >= 4 ? P[3] : Pe[1]), d.margin = Pe;
        }
      });
      var J = false;
      Object.defineProperty(this, "autoPaging", {
        get: function() {
          return J;
        },
        set: function(P) {
          J = P;
        }
      });
      var Z = 0;
      Object.defineProperty(this, "lastBreak", {
        get: function() {
          return Z;
        },
        set: function(P) {
          Z = P;
        }
      });
      var se = [];
      Object.defineProperty(this, "pageBreaks", {
        get: function() {
          return se;
        },
        set: function(P) {
          se = P;
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
      var le = [];
      Object.defineProperty(this, "ctxStack", {
        get: function() {
          return le;
        },
        set: function(P) {
          le = P;
        }
      }), Object.defineProperty(this, "fillStyle", {
        get: function() {
          return this.ctx.fillStyle;
        },
        set: function(P) {
          var Pe;
          Pe = L(P), this.ctx.fillStyle = Pe.style, this.ctx.isFillTransparent = Pe.a === 0, this.ctx.fillOpacity = Pe.a, this.pdf.setFillColor(Pe.r, Pe.g, Pe.b, {
            a: Pe.a
          }), this.pdf.setTextColor(Pe.r, Pe.g, Pe.b, {
            a: Pe.a
          });
        }
      }), Object.defineProperty(this, "strokeStyle", {
        get: function() {
          return this.ctx.strokeStyle;
        },
        set: function(P) {
          var Pe = L(P);
          this.ctx.strokeStyle = Pe.style, this.ctx.isStrokeTransparent = Pe.a === 0, this.ctx.strokeOpacity = Pe.a, Pe.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (Pe.a, this.pdf.setDrawColor(Pe.r, Pe.g, Pe.b));
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
      var we = null, ve = null, Re = null;
      Object.defineProperty(this, "fontFaces", {
        get: function() {
          return Re;
        },
        set: function(P) {
          we = null, ve = null, Re = P;
        }
      }), Object.defineProperty(this, "font", {
        get: function() {
          return this.ctx.font;
        },
        set: function(P) {
          var Pe;
          if (this.ctx.font = P, (Pe = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(P)) !== null) {
            var Xe = Pe[1];
            Pe[2];
            var qe = Pe[3], ye = Pe[4];
            Pe[5];
            var Fe = Pe[6], Ie = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(ye)[2];
            ye = Math.floor(Ie === "px" ? parseFloat(ye) * this.pdf.internal.scaleFactor : Ie === "em" ? parseFloat(ye) * this.pdf.getFontSize() : parseFloat(ye) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(ye);
            var We = function(He) {
              var Ut, gt, lt = [], ct = He.trim();
              if (ct === "") return Jo;
              if (ct in ou) return [
                ou[ct]
              ];
              for (; ct !== ""; ) {
                switch (gt = null, Ut = (ct = cu(ct)).charAt(0)) {
                  case '"':
                  case "'":
                    gt = M5(ct.substring(1), Ut);
                    break;
                  default:
                    gt = R5(ct);
                }
                if (gt === null || (lt.push(gt[0]), (ct = cu(gt[1])) !== "" && ct.charAt(0) !== ",")) return Jo;
                ct = ct.replace(/^,/, "");
              }
              return lt;
            }(Fe);
            if (this.fontFaces) {
              var Ve = function(He, Ut) {
                var gt = He.getFontList(), lt = JSON.stringify(gt);
                if (we === null || ve !== lt) {
                  var ct = function(Ft) {
                    var Ge = [];
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
                        }, Ge.push(nt));
                      });
                    }), Ge;
                  }(gt);
                  we = function(Ft) {
                    for (var Ge = {}, Ct = 0; Ct < Ft.length; ++Ct) {
                      var Ye = Yo(Ft[Ct]), nt = Ye.family, Mt = Ye.stretch, ut = Ye.style, $e = Ye.weight;
                      Ge[nt] = Ge[nt] || {}, Ge[nt][Mt] = Ge[nt][Mt] || {}, Ge[nt][Mt][ut] = Ge[nt][Mt][ut] || {}, Ge[nt][Mt][ut][$e] = Ye;
                    }
                    return Ge;
                  }(ct.concat(Ut)), ve = lt;
                }
                return we;
              }(this.pdf, this.fontFaces), yt = We.map(function(He) {
                return {
                  family: He,
                  stretch: "normal",
                  weight: qe,
                  style: Xe
                };
              }), ft = function(He, Ut, gt) {
                for (var lt = (gt = gt || {}).defaultFontFamily || "times", ct = Object.assign({}, F5, gt.genericFontFamilies || {}), Ft = null, Ge = null, Ct = 0; Ct < Ut.length; ++Ct) if (ct[(Ft = Yo(Ut[Ct])).family] && (Ft.family = ct[Ft.family]), He.hasOwnProperty(Ft.family)) {
                  Ge = He[Ft.family];
                  break;
                }
                if (!(Ge = Ge || He[lt])) throw new Error("Could not find a font-family for the rule '" + lu(Ft) + "' and default family '" + lt + "'.");
                if (Ge = function(Ye, nt) {
                  if (nt[Ye]) return nt[Ye];
                  var Mt = hl[Ye], ut = Mt <= hl.normal ? -1 : 1, $e = su(nt, lh, Mt, ut);
                  if (!$e) throw new Error("Could not find a matching font-stretch value for " + Ye);
                  return $e;
                }(Ft.stretch, Ge), Ge = function(Ye, nt) {
                  if (nt[Ye]) return nt[Ye];
                  for (var Mt = oh[Ye], ut = 0; ut < Mt.length; ++ut) if (nt[Mt[ut]]) return nt[Mt[ut]];
                  throw new Error("Could not find a matching font-style for " + Ye);
                }(Ft.style, Ge), !(Ge = function(Ye, nt) {
                  if (nt[Ye]) return nt[Ye];
                  if (Ye === 400 && nt[500]) return nt[500];
                  if (Ye === 500 && nt[400]) return nt[400];
                  var Mt = E5[Ye], ut = su(nt, ch, Mt, Ye < 400 ? -1 : 1);
                  if (!ut) throw new Error("Could not find a matching font-weight for value " + Ye);
                  return ut;
                }(Ft.weight, Ge))) throw new Error("Failed to resolve a font for the rule '" + lu(Ft) + "'.");
                return Ge;
              }(Ve, yt);
              this.pdf.setFont(ft.ref.name, ft.ref.style);
            } else {
              var tt = "";
              (qe === "bold" || parseInt(qe, 10) >= 700 || Xe === "bold") && (tt = "bold"), Xe === "italic" && (tt += "italic"), tt.length === 0 && (tt = "normal");
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
              }, Te = 0; Te < We.length; Te++) {
                if (this.pdf.internal.getFont(We[Te], tt, {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) {
                  dt = We[Te];
                  break;
                }
                if (tt === "bolditalic" && this.pdf.internal.getFont(We[Te], "bold", {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) dt = We[Te], tt = "bold";
                else if (this.pdf.internal.getFont(We[Te], "normal", {
                  noFallback: true,
                  disableWarning: true
                }) !== void 0) {
                  dt = We[Te], tt = "normal";
                  break;
                }
              }
              if (dt === "") {
                for (var it = 0; it < We.length; it++) if (ht[We[it]]) {
                  dt = ht[We[it]];
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
          this.ctx.lineDashOffset = P, Le.call(this);
        }
      }), Object.defineProperty(this, "lineDash", {
        get: function() {
          return this.ctx.lineDash;
        },
        set: function(P) {
          this.ctx.lineDash = P, Le.call(this);
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
    w.prototype.setLineDash = function(N) {
      this.lineDash = N;
    }, w.prototype.getLineDash = function() {
      return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
    }, w.prototype.fill = function() {
      B.call(this, "fill", false);
    }, w.prototype.stroke = function() {
      B.call(this, "stroke", false);
    }, w.prototype.beginPath = function() {
      this.path = [
        {
          type: "begin"
        }
      ];
    }, w.prototype.moveTo = function(N, D) {
      if (isNaN(N) || isNaN(D)) throw Pt.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
      var q = this.ctx.transform.applyToPoint(new f(N, D));
      this.path.push({
        type: "mt",
        x: q.x,
        y: q.y
      }), this.ctx.lastPoint = new f(N, D);
    }, w.prototype.closePath = function() {
      var N = new f(0, 0), D = 0;
      for (D = this.path.length - 1; D !== -1; D--) if (this.path[D].type === "begin" && Lt(this.path[D + 1]) === "object" && typeof this.path[D + 1].x == "number") {
        N = new f(this.path[D + 1].x, this.path[D + 1].y);
        break;
      }
      this.path.push({
        type: "close"
      }), this.ctx.lastPoint = new f(N.x, N.y);
    }, w.prototype.lineTo = function(N, D) {
      if (isNaN(N) || isNaN(D)) throw Pt.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
      var q = this.ctx.transform.applyToPoint(new f(N, D));
      this.path.push({
        type: "lt",
        x: q.x,
        y: q.y
      }), this.ctx.lastPoint = new f(q.x, q.y);
    }, w.prototype.clip = function() {
      this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), B.call(this, null, true);
    }, w.prototype.quadraticCurveTo = function(N, D, q, K) {
      if (isNaN(q) || isNaN(K) || isNaN(N) || isNaN(D)) throw Pt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
      var X = this.ctx.transform.applyToPoint(new f(q, K)), T = this.ctx.transform.applyToPoint(new f(N, D));
      this.path.push({
        type: "qct",
        x1: T.x,
        y1: T.y,
        x: X.x,
        y: X.y
      }), this.ctx.lastPoint = new f(X.x, X.y);
    }, w.prototype.bezierCurveTo = function(N, D, q, K, X, T) {
      if (isNaN(X) || isNaN(T) || isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K)) throw Pt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
      var J = this.ctx.transform.applyToPoint(new f(X, T)), Z = this.ctx.transform.applyToPoint(new f(N, D)), se = this.ctx.transform.applyToPoint(new f(q, K));
      this.path.push({
        type: "bct",
        x1: Z.x,
        y1: Z.y,
        x2: se.x,
        y2: se.y,
        x: J.x,
        y: J.y
      }), this.ctx.lastPoint = new f(J.x, J.y);
    }, w.prototype.arc = function(N, D, q, K, X, T) {
      if (isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K) || isNaN(X)) throw Pt.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
      if (T = !!T, !this.ctx.transform.isIdentity) {
        var J = this.ctx.transform.applyToPoint(new f(N, D));
        N = J.x, D = J.y;
        var Z = this.ctx.transform.applyToPoint(new f(0, q)), se = this.ctx.transform.applyToPoint(new f(0, 0));
        q = Math.sqrt(Math.pow(Z.x - se.x, 2) + Math.pow(Z.y - se.y, 2));
      }
      Math.abs(X - K) >= 2 * Math.PI && (K = 0, X = 2 * Math.PI), this.path.push({
        type: "arc",
        x: N,
        y: D,
        radius: q,
        startAngle: K,
        endAngle: X,
        counterclockwise: T
      });
    }, w.prototype.arcTo = function(N, D, q, K, X) {
      throw new Error("arcTo not implemented.");
    }, w.prototype.rect = function(N, D, q, K) {
      if (isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K)) throw Pt.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
      this.moveTo(N, D), this.lineTo(N + q, D), this.lineTo(N + q, D + K), this.lineTo(N, D + K), this.lineTo(N, D), this.lineTo(N + q, D), this.lineTo(N, D);
    }, w.prototype.fillRect = function(N, D, q, K) {
      if (isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K)) throw Pt.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
      if (!p.call(this)) {
        var X = {};
        this.lineCap !== "butt" && (X.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (X.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(N, D, q, K), this.fill(), X.hasOwnProperty("lineCap") && (this.lineCap = X.lineCap), X.hasOwnProperty("lineJoin") && (this.lineJoin = X.lineJoin);
      }
    }, w.prototype.strokeRect = function(N, D, q, K) {
      if (isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K)) throw Pt.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
      j.call(this) || (this.beginPath(), this.rect(N, D, q, K), this.stroke());
    }, w.prototype.clearRect = function(N, D, q, K) {
      if (isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K)) throw Pt.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
      this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(N, D, q, K));
    }, w.prototype.save = function(N) {
      N = typeof N != "boolean" || N;
      for (var D = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("q");
      if (this.pdf.setPage(D), N) {
        this.ctx.fontSize = this.pdf.internal.getFontSize();
        var K = new g(this.ctx);
        this.ctxStack.push(this.ctx), this.ctx = K;
      }
    }, w.prototype.restore = function(N) {
      N = typeof N != "boolean" || N;
      for (var D = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("Q");
      this.pdf.setPage(D), N && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
    }, w.prototype.toDataURL = function() {
      throw new Error("toDataUrl not implemented.");
    };
    var L = function(N) {
      var D, q, K, X;
      if (N.isCanvasGradient === true && (N = N.getColor()), !N) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        style: N
      };
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(N)) D = 0, q = 0, K = 0, X = 0;
      else {
        var T = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(N);
        if (T !== null) D = parseInt(T[1]), q = parseInt(T[2]), K = parseInt(T[3]), X = 1;
        else if ((T = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(N)) !== null) D = parseInt(T[1]), q = parseInt(T[2]), K = parseInt(T[3]), X = parseFloat(T[4]);
        else {
          if (X = 1, typeof N == "string" && N.charAt(0) !== "#") {
            var J = new eh(N);
            N = J.ok ? J.toHex() : "#000000";
          }
          N.length === 4 ? (D = N.substring(1, 2), D += D, q = N.substring(2, 3), q += q, K = N.substring(3, 4), K += K) : (D = N.substring(1, 3), q = N.substring(3, 5), K = N.substring(5, 7)), D = parseInt(D, 16), q = parseInt(q, 16), K = parseInt(K, 16);
        }
      }
      return {
        r: D,
        g: q,
        b: K,
        a: X,
        style: N
      };
    }, p = function() {
      return this.ctx.isFillTransparent || this.globalAlpha == 0;
    }, j = function() {
      return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
    };
    w.prototype.fillText = function(N, D, q, K) {
      if (isNaN(D) || isNaN(q) || typeof N != "string") throw Pt.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
      if (K = isNaN(K) ? void 0 : K, !p.call(this)) {
        var X = oe(this.ctx.transform.rotation), T = this.ctx.transform.scaleX;
        I.call(this, {
          text: N,
          x: D,
          y: q,
          scale: T,
          angle: X,
          align: this.textAlign,
          maxWidth: K
        });
      }
    }, w.prototype.strokeText = function(N, D, q, K) {
      if (isNaN(D) || isNaN(q) || typeof N != "string") throw Pt.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
      if (!j.call(this)) {
        K = isNaN(K) ? void 0 : K;
        var X = oe(this.ctx.transform.rotation), T = this.ctx.transform.scaleX;
        I.call(this, {
          text: N,
          x: D,
          y: q,
          scale: T,
          renderingMode: "stroke",
          angle: X,
          align: this.textAlign,
          maxWidth: K
        });
      }
    }, w.prototype.measureText = function(N) {
      if (typeof N != "string") throw Pt.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
      var D = this.pdf, q = this.pdf.internal.scaleFactor, K = D.internal.getFontSize(), X = D.getStringUnitWidth(N) * K / D.internal.scaleFactor;
      return new function(T) {
        var J = (T = T || {}).width || 0;
        return Object.defineProperty(this, "width", {
          get: function() {
            return J;
          }
        }), this;
      }({
        width: X *= Math.round(96 * q / 72 * 1e4) / 1e4
      });
    }, w.prototype.scale = function(N, D) {
      if (isNaN(N) || isNaN(D)) throw Pt.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
      var q = new u(N, 0, 0, D, 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(q);
    }, w.prototype.rotate = function(N) {
      if (isNaN(N)) throw Pt.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
      var D = new u(Math.cos(N), Math.sin(N), -Math.sin(N), Math.cos(N), 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(D);
    }, w.prototype.translate = function(N, D) {
      if (isNaN(N) || isNaN(D)) throw Pt.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
      var q = new u(1, 0, 0, 1, N, D);
      this.ctx.transform = this.ctx.transform.multiply(q);
    }, w.prototype.transform = function(N, D, q, K, X, T) {
      if (isNaN(N) || isNaN(D) || isNaN(q) || isNaN(K) || isNaN(X) || isNaN(T)) throw Pt.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
      var J = new u(N, D, q, K, X, T);
      this.ctx.transform = this.ctx.transform.multiply(J);
    }, w.prototype.setTransform = function(N, D, q, K, X, T) {
      N = isNaN(N) ? 1 : N, D = isNaN(D) ? 0 : D, q = isNaN(q) ? 0 : q, K = isNaN(K) ? 1 : K, X = isNaN(X) ? 0 : X, T = isNaN(T) ? 0 : T, this.ctx.transform = new u(N, D, q, K, X, T);
    };
    var E = function() {
      return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
    };
    w.prototype.drawImage = function(N, D, q, K, X, T, J, Z, se) {
      var le = this.pdf.getImageProperties(N), we = 1, ve = 1, Re = 1, P = 1;
      K !== void 0 && Z !== void 0 && (Re = Z / K, P = se / X, we = le.width / K * Z / K, ve = le.height / X * se / X), T === void 0 && (T = D, J = q, D = 0, q = 0), K !== void 0 && Z === void 0 && (Z = K, se = X), K === void 0 && Z === void 0 && (Z = le.width, se = le.height);
      var Pe = this.ctx.transform.decompose(), Xe = oe(Pe.rotate.shx), qe = new u(), ye = (qe = (qe = (qe = qe.multiply(Pe.translate)).multiply(Pe.skew)).multiply(Pe.scale)).applyToRectangle(new l(T - D * Re, J - q * P, K * we, X * ve));
      if (this.autoPaging) {
        for (var Fe, Ie = O.call(this, ye), We = [], Ve = 0; Ve < Ie.length; Ve += 1) We.indexOf(Ie[Ve]) === -1 && We.push(Ie[Ve]);
        V(We);
        for (var yt = We[0], ft = We[We.length - 1], tt = yt; tt < ft + 1; tt++) {
          this.pdf.setPage(tt);
          var dt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ht = tt === 1 ? this.posY + this.margin[0] : this.margin[0], Te = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], it = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], He = tt === 1 ? 0 : Te + (tt - 2) * it;
          if (this.ctx.clip_path.length !== 0) {
            var Ut = this.path;
            Fe = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = $(Fe, this.posX + this.margin[3], -He + ht + this.ctx.prevPageLastElemOffset), ue.call(this, "fill", true), this.path = Ut;
          }
          var gt = JSON.parse(JSON.stringify(ye));
          gt = $([
            gt
          ], this.posX + this.margin[3], -He + ht + this.ctx.prevPageLastElemOffset)[0];
          var lt = (tt > yt || tt < ft) && E.call(this);
          lt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], dt, it, null).clip().discardPath()), this.pdf.addImage(N, "JPEG", gt.x, gt.y, gt.w, gt.h, null, null, Xe), lt && this.pdf.restoreGraphicsState();
        }
      } else this.pdf.addImage(N, "JPEG", ye.x, ye.y, ye.w, ye.h, null, null, Xe);
    };
    var O = function(N, D, q) {
      var K = [];
      D = D || this.pdf.internal.pageSize.width, q = q || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
      var X = this.posY + this.ctx.prevPageLastElemOffset;
      switch (N.type) {
        default:
        case "mt":
        case "lt":
          K.push(Math.floor((N.y + X) / q) + 1);
          break;
        case "arc":
          K.push(Math.floor((N.y + X - N.radius) / q) + 1), K.push(Math.floor((N.y + X + N.radius) / q) + 1);
          break;
        case "qct":
          var T = ne(this.ctx.lastPoint.x, this.ctx.lastPoint.y, N.x1, N.y1, N.x, N.y);
          K.push(Math.floor((T.y + X) / q) + 1), K.push(Math.floor((T.y + T.h + X) / q) + 1);
          break;
        case "bct":
          var J = ke(this.ctx.lastPoint.x, this.ctx.lastPoint.y, N.x1, N.y1, N.x2, N.y2, N.x, N.y);
          K.push(Math.floor((J.y + X) / q) + 1), K.push(Math.floor((J.y + J.h + X) / q) + 1);
          break;
        case "rect":
          K.push(Math.floor((N.y + X) / q) + 1), K.push(Math.floor((N.y + N.h + X) / q) + 1);
      }
      for (var Z = 0; Z < K.length; Z += 1) for (; this.pdf.internal.getNumberOfPages() < K[Z]; ) S.call(this);
      return K;
    }, S = function() {
      var N = this.fillStyle, D = this.strokeStyle, q = this.font, K = this.lineCap, X = this.lineWidth, T = this.lineJoin;
      this.pdf.addPage(), this.fillStyle = N, this.strokeStyle = D, this.font = q, this.lineCap = K, this.lineWidth = X, this.lineJoin = T;
    }, $ = function(N, D, q) {
      for (var K = 0; K < N.length; K++) switch (N[K].type) {
        case "bct":
          N[K].x2 += D, N[K].y2 += q;
        case "qct":
          N[K].x1 += D, N[K].y1 += q;
        default:
          N[K].x += D, N[K].y += q;
      }
      return N;
    }, V = function(N) {
      return N.sort(function(D, q) {
        return D - q;
      });
    }, B = function(N, D) {
      var q = this.fillStyle, K = this.strokeStyle, X = this.lineCap, T = this.lineWidth, J = Math.abs(T * this.ctx.transform.scaleX), Z = this.lineJoin;
      if (this.autoPaging) {
        for (var se, le, we = JSON.parse(JSON.stringify(this.path)), ve = JSON.parse(JSON.stringify(this.path)), Re = [], P = 0; P < ve.length; P++) if (ve[P].x !== void 0) for (var Pe = O.call(this, ve[P]), Xe = 0; Xe < Pe.length; Xe += 1) Re.indexOf(Pe[Xe]) === -1 && Re.push(Pe[Xe]);
        for (var qe = 0; qe < Re.length; qe++) for (; this.pdf.internal.getNumberOfPages() < Re[qe]; ) S.call(this);
        V(Re);
        for (var ye = Re[0], Fe = Re[Re.length - 1], Ie = ye; Ie < Fe + 1; Ie++) {
          this.pdf.setPage(Ie), this.fillStyle = q, this.strokeStyle = K, this.lineCap = X, this.lineWidth = J, this.lineJoin = Z;
          var We = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Ve = Ie === 1 ? this.posY + this.margin[0] : this.margin[0], yt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ft = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], tt = Ie === 1 ? 0 : yt + (Ie - 2) * ft;
          if (this.ctx.clip_path.length !== 0) {
            var dt = this.path;
            se = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = $(se, this.posX + this.margin[3], -tt + Ve + this.ctx.prevPageLastElemOffset), ue.call(this, N, true), this.path = dt;
          }
          if (le = JSON.parse(JSON.stringify(we)), this.path = $(le, this.posX + this.margin[3], -tt + Ve + this.ctx.prevPageLastElemOffset), D === false || Ie === 0) {
            var ht = (Ie > ye || Ie < Fe) && E.call(this);
            ht && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], We, ft, null).clip().discardPath()), ue.call(this, N, D), ht && this.pdf.restoreGraphicsState();
          }
          this.lineWidth = T;
        }
        this.path = we;
      } else this.lineWidth = J, ue.call(this, N, D), this.lineWidth = T;
    }, ue = function(N, D) {
      if ((N !== "stroke" || D || !j.call(this)) && (N === "stroke" || D || !p.call(this))) {
        for (var q, K, X = [], T = this.path, J = 0; J < T.length; J++) {
          var Z = T[J];
          switch (Z.type) {
            case "begin":
              X.push({
                begin: true
              });
              break;
            case "close":
              X.push({
                close: true
              });
              break;
            case "mt":
              X.push({
                start: Z,
                deltas: [],
                abs: []
              });
              break;
            case "lt":
              var se = X.length;
              if (T[J - 1] && !isNaN(T[J - 1].x) && (q = [
                Z.x - T[J - 1].x,
                Z.y - T[J - 1].y
              ], se > 0)) {
                for (; se >= 0; se--) if (X[se - 1].close !== true && X[se - 1].begin !== true) {
                  X[se - 1].deltas.push(q), X[se - 1].abs.push(Z);
                  break;
                }
              }
              break;
            case "bct":
              q = [
                Z.x1 - T[J - 1].x,
                Z.y1 - T[J - 1].y,
                Z.x2 - T[J - 1].x,
                Z.y2 - T[J - 1].y,
                Z.x - T[J - 1].x,
                Z.y - T[J - 1].y
              ], X[X.length - 1].deltas.push(q);
              break;
            case "qct":
              var le = T[J - 1].x + 2 / 3 * (Z.x1 - T[J - 1].x), we = T[J - 1].y + 2 / 3 * (Z.y1 - T[J - 1].y), ve = Z.x + 2 / 3 * (Z.x1 - Z.x), Re = Z.y + 2 / 3 * (Z.y1 - Z.y), P = Z.x, Pe = Z.y;
              q = [
                le - T[J - 1].x,
                we - T[J - 1].y,
                ve - T[J - 1].x,
                Re - T[J - 1].y,
                P - T[J - 1].x,
                Pe - T[J - 1].y
              ], X[X.length - 1].deltas.push(q);
              break;
            case "arc":
              X.push({
                deltas: [],
                abs: [],
                arc: true
              }), Array.isArray(X[X.length - 1].abs) && X[X.length - 1].abs.push(Z);
          }
        }
        K = D ? null : N === "stroke" ? "stroke" : "fill";
        for (var Xe = false, qe = 0; qe < X.length; qe++) if (X[qe].arc) for (var ye = X[qe].abs, Fe = 0; Fe < ye.length; Fe++) {
          var Ie = ye[Fe];
          Ie.type === "arc" ? ee.call(this, Ie.x, Ie.y, Ie.radius, Ie.startAngle, Ie.endAngle, Ie.counterclockwise, void 0, D, !Xe) : H.call(this, Ie.x, Ie.y), Xe = true;
        }
        else if (X[qe].close === true) this.pdf.internal.out("h"), Xe = false;
        else if (X[qe].begin !== true) {
          var We = X[qe].start.x, Ve = X[qe].start.y;
          W.call(this, X[qe].deltas, We, Ve), Xe = true;
        }
        K && z.call(this, K), D && ie.call(this);
      }
    }, Ne = function(N) {
      var D = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, q = D * (this.pdf.internal.getLineHeightFactor() - 1);
      switch (this.ctx.textBaseline) {
        case "bottom":
          return N - q;
        case "top":
          return N + D - q;
        case "hanging":
          return N + D - 2 * q;
        case "middle":
          return N + D / 2 - q;
        default:
          return N;
      }
    }, fe = function(N) {
      return N + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
    };
    w.prototype.createLinearGradient = function() {
      var N = function() {
      };
      return N.colorStops = [], N.addColorStop = function(D, q) {
        this.colorStops.push([
          D,
          q
        ]);
      }, N.getColor = function() {
        return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
      }, N.isCanvasGradient = true, N;
    }, w.prototype.createPattern = function() {
      return this.createLinearGradient();
    }, w.prototype.createRadialGradient = function() {
      return this.createLinearGradient();
    };
    var ee = function(N, D, q, K, X, T, J, Z, se) {
      for (var le = he.call(this, q, K, X, T), we = 0; we < le.length; we++) {
        var ve = le[we];
        we === 0 && (se ? A.call(this, ve.x1 + N, ve.y1 + D) : H.call(this, ve.x1 + N, ve.y1 + D)), ce.call(this, N, D, ve.x2, ve.y2, ve.x3, ve.y3, ve.x4, ve.y4);
      }
      Z ? ie.call(this) : z.call(this, J);
    }, z = function(N) {
      switch (N) {
        case "stroke":
          this.pdf.internal.out("S");
          break;
        case "fill":
          this.pdf.internal.out("f");
      }
    }, ie = function() {
      this.pdf.clip(), this.pdf.discardPath();
    }, A = function(N, D) {
      this.pdf.internal.out(t(N) + " " + r(D) + " m");
    }, I = function(N) {
      var D;
      switch (N.align) {
        case "right":
        case "end":
          D = "right";
          break;
        case "center":
          D = "center";
          break;
        default:
          D = "left";
      }
      var q, K, X, T = this.pdf.getTextDimensions(N.text), J = Ne.call(this, N.y), Z = fe.call(this, J) - T.h, se = this.ctx.transform.applyToPoint(new f(N.x, J));
      if (this.autoPaging) {
        var le = this.ctx.transform.decompose(), we = new u();
        we = (we = (we = we.multiply(le.translate)).multiply(le.skew)).multiply(le.scale);
        for (var ve = this.ctx.transform.applyToRectangle(new l(N.x, J, T.w, T.h)), Re = we.applyToRectangle(new l(N.x, Z, T.w, T.h)), P = O.call(this, Re), Pe = [], Xe = 0; Xe < P.length; Xe += 1) Pe.indexOf(P[Xe]) === -1 && Pe.push(P[Xe]);
        V(Pe);
        for (var qe = Pe[0], ye = Pe[Pe.length - 1], Fe = qe; Fe < ye + 1; Fe++) {
          this.pdf.setPage(Fe);
          var Ie = Fe === 1 ? this.posY + this.margin[0] : this.margin[0], We = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ve = this.pdf.internal.pageSize.height - this.margin[2], yt = Ve - this.margin[0], ft = this.pdf.internal.pageSize.width - this.margin[1], tt = ft - this.margin[3], dt = Fe === 1 ? 0 : We + (Fe - 2) * yt;
          if (this.ctx.clip_path.length !== 0) {
            var ht = this.path;
            q = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = $(q, this.posX + this.margin[3], -1 * dt + Ie), ue.call(this, "fill", true), this.path = ht;
          }
          var Te = $([
            JSON.parse(JSON.stringify(Re))
          ], this.posX + this.margin[3], -dt + Ie + this.ctx.prevPageLastElemOffset)[0];
          N.scale >= 0.01 && (K = this.pdf.internal.getFontSize(), this.pdf.setFontSize(K * N.scale), X = this.lineWidth, this.lineWidth = X * N.scale);
          var it = this.autoPaging !== "text";
          if (it || Te.y + Te.h <= Ve) {
            if (it || Te.y >= Ie && Te.x <= ft) {
              var He = it ? N.text : this.pdf.splitTextToSize(N.text, N.maxWidth || ft - Te.x)[0], Ut = $([
                JSON.parse(JSON.stringify(ve))
              ], this.posX + this.margin[3], -dt + Ie + this.ctx.prevPageLastElemOffset)[0], gt = it && (Fe > qe || Fe < ye) && E.call(this);
              gt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], tt, yt, null).clip().discardPath()), this.pdf.text(He, Ut.x, Ut.y, {
                angle: N.angle,
                align: D,
                renderingMode: N.renderingMode
              }), gt && this.pdf.restoreGraphicsState();
            }
          } else Te.y < Ve && (this.ctx.prevPageLastElemOffset += Ve - Te.y);
          N.scale >= 0.01 && (this.pdf.setFontSize(K), this.lineWidth = X);
        }
      } else N.scale >= 0.01 && (K = this.pdf.internal.getFontSize(), this.pdf.setFontSize(K * N.scale), X = this.lineWidth, this.lineWidth = X * N.scale), this.pdf.text(N.text, se.x + this.posX, se.y + this.posY, {
        angle: N.angle,
        align: D,
        renderingMode: N.renderingMode,
        maxWidth: N.maxWidth
      }), N.scale >= 0.01 && (this.pdf.setFontSize(K), this.lineWidth = X);
    }, H = function(N, D, q, K) {
      q = q || 0, K = K || 0, this.pdf.internal.out(t(N + q) + " " + r(D + K) + " l");
    }, W = function(N, D, q) {
      return this.pdf.lines(N, D, q, null, null);
    }, ce = function(N, D, q, K, X, T, J, Z) {
      this.pdf.internal.out([
        e(s(q + N)),
        e(a(K + D)),
        e(s(X + N)),
        e(a(T + D)),
        e(s(J + N)),
        e(a(Z + D)),
        "c"
      ].join(" "));
    }, he = function(N, D, q, K) {
      for (var X = 2 * Math.PI, T = Math.PI / 2; D > q; ) D -= X;
      var J = Math.abs(q - D);
      J < X && K && (J = X - J);
      for (var Z = [], se = K ? -1 : 1, le = D; J > 1e-5; ) {
        var we = le + se * Math.min(J, T);
        Z.push(xe.call(this, N, le, we)), J -= Math.abs(we - le), le = we;
      }
      return Z;
    }, xe = function(N, D, q) {
      var K = (q - D) / 2, X = N * Math.cos(K), T = N * Math.sin(K), J = X, Z = -T, se = J * J + Z * Z, le = se + J * X + Z * T, we = 4 / 3 * (Math.sqrt(2 * se * le) - le) / (J * T - Z * X), ve = J - we * Z, Re = Z + we * J, P = ve, Pe = -Re, Xe = K + D, qe = Math.cos(Xe), ye = Math.sin(Xe);
      return {
        x1: N * Math.cos(D),
        y1: N * Math.sin(D),
        x2: ve * qe - Re * ye,
        y2: ve * ye + Re * qe,
        x3: P * qe - Pe * ye,
        y3: P * ye + Pe * qe,
        x4: N * Math.cos(q),
        y4: N * Math.sin(q)
      };
    }, oe = function(N) {
      return 180 * N / Math.PI;
    }, ne = function(N, D, q, K, X, T) {
      var J = N + 0.5 * (q - N), Z = D + 0.5 * (K - D), se = X + 0.5 * (q - X), le = T + 0.5 * (K - T), we = Math.min(N, X, J, se), ve = Math.max(N, X, J, se), Re = Math.min(D, T, Z, le), P = Math.max(D, T, Z, le);
      return new l(we, Re, ve - we, P - Re);
    }, ke = function(N, D, q, K, X, T, J, Z) {
      var se, le, we, ve, Re, P, Pe, Xe, qe, ye, Fe, Ie, We, Ve, yt = q - N, ft = K - D, tt = X - q, dt = T - K, ht = J - X, Te = Z - T;
      for (le = 0; le < 41; le++) qe = (Pe = (we = N + (se = le / 40) * yt) + se * ((Re = q + se * tt) - we)) + se * (Re + se * (X + se * ht - Re) - Pe), ye = (Xe = (ve = D + se * ft) + se * ((P = K + se * dt) - ve)) + se * (P + se * (T + se * Te - P) - Xe), le == 0 ? (Fe = qe, Ie = ye, We = qe, Ve = ye) : (Fe = Math.min(Fe, qe), Ie = Math.min(Ie, ye), We = Math.max(We, qe), Ve = Math.max(Ve, ye));
      return new l(Math.round(Fe), Math.round(Ie), Math.round(We - Fe), Math.round(Ve - Ie));
    }, Le = function() {
      if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
        var N, D, q = (N = this.ctx.lineDash, D = this.ctx.lineDashOffset, JSON.stringify({
          lineDash: N,
          lineDashOffset: D
        }));
        this.prevLineDash !== q && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = q);
      }
    };
  })(ze.API), function(n) {
    var e = function(f) {
      var l, u, d, g, w, L, p, j, E, O;
      for (u = [], d = 0, g = (f += l = "\0\0\0\0".slice(f.length % 4 || 4)).length; g > d; d += 4) (w = (f.charCodeAt(d) << 24) + (f.charCodeAt(d + 1) << 16) + (f.charCodeAt(d + 2) << 8) + f.charCodeAt(d + 3)) !== 0 ? (L = (w = ((w = ((w = ((w = (w - (O = w % 85)) / 85) - (E = w % 85)) / 85) - (j = w % 85)) / 85) - (p = w % 85)) / 85) % 85, u.push(L + 33, p + 33, j + 33, E + 33, O + 33)) : u.push(122);
      return function(S, $) {
        for (var V = $; V > 0; V--) S.pop();
      }(u, l.length), String.fromCharCode.apply(String, u) + "~>";
    }, t = function(f) {
      var l, u, d, g, w, L = String, p = "length", j = 255, E = "charCodeAt", O = "slice", S = "replace";
      for (f[O](-2), f = f[O](0, -2)[S](/\s/g, "")[S]("z", "!!!!!"), d = [], g = 0, w = (f += l = "uuuuu"[O](f[p] % 5 || 5))[p]; w > g; g += 5) u = 52200625 * (f[E](g) - 33) + 614125 * (f[E](g + 1) - 33) + 7225 * (f[E](g + 2) - 33) + 85 * (f[E](g + 3) - 33) + (f[E](g + 4) - 33), d.push(j & u >> 24, j & u >> 16, j & u >> 8, j & u);
      return function($, V) {
        for (var B = V; B > 0; B--) $.pop();
      }(d, l[p]), L.fromCharCode.apply(L, d);
    }, r = function(f) {
      return f.split("").map(function(l) {
        return ("0" + l.charCodeAt().toString(16)).slice(-2);
      }).join("") + ">";
    }, s = function(f) {
      var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
      if ((f = f.replace(/\s/g, "")).indexOf(">") !== -1 && (f = f.substr(0, f.indexOf(">"))), f.length % 2 && (f += "0"), l.test(f) === false) return "";
      for (var u = "", d = 0; d < f.length; d += 2) u += String.fromCharCode("0x" + (f[d] + f[d + 1]));
      return u;
    }, a = function(f) {
      for (var l = new Uint8Array(f.length), u = f.length; u--; ) l[u] = f.charCodeAt(u);
      return (l = nl(l)).reduce(function(d, g) {
        return d + String.fromCharCode(g);
      }, "");
    };
    n.processDataByFilters = function(f, l) {
      var u = 0, d = f || "", g = [];
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
  }(ze.API), function(n) {
    n.loadFile = function(e, t, r) {
      return function(s, a, f) {
        a = a !== false, f = typeof f == "function" ? f : function() {
        };
        var l = void 0;
        try {
          l = function(u, d, g) {
            var w = new XMLHttpRequest(), L = 0, p = function(j) {
              var E = j.length, O = [], S = String.fromCharCode;
              for (L = 0; L < E; L += 1) O.push(S(255 & j.charCodeAt(L)));
              return O.join("");
            };
            if (w.open("GET", u, !d), w.overrideMimeType("text/plain; charset=x-user-defined"), d === false && (w.onload = function() {
              w.status === 200 ? g(p(this.responseText)) : g(void 0);
            }), w.send(null), d && w.status === 200) return p(w.responseText);
          }(s, a, f);
        } catch {
        }
        return l;
      }(e, t, r);
    }, n.allowFsRead = void 0, n.loadImageFile = n.loadFile;
  }(ze.API), function(n) {
    function e() {
      return (Je.html2canvas ? Promise.resolve(Je.html2canvas) : Fs(() => import("./html2canvas.esm-BfxBtG_O.js"), [])).catch(function(l) {
        return Promise.reject(new Error("Could not load html2canvas: " + l));
      }).then(function(l) {
        return l.default ? l.default : l;
      });
    }
    function t() {
      return (Je.DOMPurify ? Promise.resolve(Je.DOMPurify) : Fs(() => import("./purify.es-B9ZVCkUG.js"), [])).catch(function(l) {
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
    }, f = function l(u) {
      var d = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), g = l.convert(Promise.resolve(), d);
      return (g = g.setProgress(1, l, 1, [
        l
      ])).set(u);
    };
    (f.prototype = Object.create(Promise.prototype)).constructor = f, f.convert = function(l, u) {
      return l.__proto__ = u || f.prototype, l;
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
    }, f.prototype.from = function(l, u) {
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
    }, f.prototype.to = function(l) {
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
    }, f.prototype.toContainer = function() {
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
    }, f.prototype.toCanvas = function() {
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
    }, f.prototype.toContext2d = function() {
      var l = [
        function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }
      ];
      return this.thenList(l).then(e).then(function(u) {
        var d = this.opt.jsPDF, g = this.opt.fontFaces, w = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, L = Object.assign({
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
        if (delete L.onrendered, d.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, d.context2d.posX = this.opt.x, d.context2d.posY = this.opt.y, d.context2d.margin = this.opt.margin, d.context2d.fontFaces = g, g) for (var p = 0; p < g.length; ++p) {
          var j = g[p], E = j.src.find(function(O) {
            return O.format === "truetype";
          });
          E && d.addFont(E.url, j.ref.name, j.ref.style);
        }
        return L.windowHeight = L.windowHeight || 0, L.windowHeight = L.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : L.windowHeight, d.context2d.save(true), u(this.prop.container, L);
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
        var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
        this.prop.img = document.createElement("img"), this.prop.img.src = l;
      });
    }, f.prototype.toPdf = function() {
      return this.thenList([
        function() {
          return this.toContext2d();
        }
      ]).then(function() {
        this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
      });
    }, f.prototype.output = function(l, u, d) {
      return (d = d || "pdf").toLowerCase() === "img" || d.toLowerCase() === "image" ? this.outputImg(l, u) : this.outputPdf(l, u);
    }, f.prototype.outputPdf = function(l, u) {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).then(function() {
        return this.prop.pdf.output(l, u);
      });
    }, f.prototype.outputImg = function(l) {
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
    }, f.prototype.save = function(l) {
      return this.thenList([
        function() {
          return this.prop.pdf || this.toPdf();
        }
      ]).set(l ? {
        filename: l
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
    }, f.prototype.set = function(l) {
      if (r(l) !== "object") return this;
      var u = Object.keys(l || {}).map(function(d) {
        if (d in f.template.prop) return function() {
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
    }, f.prototype.get = function(l, u) {
      return this.then(function() {
        var d = l in f.template.prop ? this.prop[l] : this.opt[l];
        return u ? u(d) : d;
      });
    }, f.prototype.setMargin = function(l) {
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
    }, f.prototype.setPageSize = function(l) {
      function u(d, g) {
        return Math.floor(d * g / 72 * 96);
      }
      return this.then(function() {
        (l = l || ze.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = {
          width: l.width - this.opt.margin[1] - this.opt.margin[3],
          height: l.height - this.opt.margin[0] - this.opt.margin[2]
        }, l.inner.px = {
          width: u(l.inner.width, l.k),
          height: u(l.inner.height, l.k)
        }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
      });
    }, f.prototype.setProgress = function(l, u, d, g) {
      return l != null && (this.progress.val = l), u != null && (this.progress.state = u), d != null && (this.progress.n = d), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
    }, f.prototype.updateProgress = function(l, u, d, g) {
      return this.setProgress(l ? this.progress.val + l : null, u || null, d ? this.progress.n + d : null, g ? this.progress.stack.concat(g) : null);
    }, f.prototype.then = function(l, u) {
      var d = this;
      return this.thenCore(l, u, function(g, w) {
        return d.updateProgress(null, null, 1, [
          g
        ]), Promise.prototype.then.call(this, function(L) {
          return d.updateProgress(null, g), L;
        }).then(g, w).then(function(L) {
          return d.updateProgress(1), L;
        });
      });
    }, f.prototype.thenCore = function(l, u, d) {
      d = d || Promise.prototype.then;
      var g = this;
      l && (l = l.bind(g)), u && (u = u.bind(g));
      var w = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? g : f.convert(Object.assign({}, g), Promise.prototype), L = d.call(w, l, u);
      return f.convert(L, g.__proto__);
    }, f.prototype.thenExternal = function(l, u) {
      return Promise.prototype.then.call(this, l, u);
    }, f.prototype.thenList = function(l) {
      var u = this;
      return l.forEach(function(d) {
        u = u.thenCore(d);
      }), u;
    }, f.prototype.catch = function(l) {
      l && (l = l.bind(this));
      var u = Promise.prototype.catch.call(this, l);
      return f.convert(u, this);
    }, f.prototype.catchExternal = function(l) {
      return Promise.prototype.catch.call(this, l);
    }, f.prototype.error = function(l) {
      return this.then(function() {
        throw new Error(l);
      });
    }, f.prototype.using = f.prototype.set, f.prototype.saveAs = f.prototype.save, f.prototype.export = f.prototype.output, f.prototype.run = f.prototype.then, ze.getPageSize = function(l, u, d) {
      if (Lt(l) === "object") {
        var g = l;
        l = g.orientation, u = g.unit || u, d = g.format || d;
      }
      u = u || "mm", d = d || "a4", l = ("" + (l || "P")).toLowerCase();
      var w, L = ("" + d).toLowerCase(), p = {
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
      var j, E = 0, O = 0;
      if (p.hasOwnProperty(L)) E = p[L][1] / w, O = p[L][0] / w;
      else try {
        E = d[1], O = d[0];
      } catch {
        throw new Error("Invalid format: " + d);
      }
      if (l === "p" || l === "portrait") l = "p", O > E && (j = O, O = E, E = j);
      else {
        if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
        l = "l", E > O && (j = O, O = E, E = j);
      }
      return {
        width: O,
        height: E,
        unit: u,
        k: w,
        orientation: l
      };
    }, n.html = function(l, u) {
      (u = u || {}).callback = u.callback || function() {
      }, u.html2canvas = u.html2canvas || {}, u.html2canvas.canvas = u.html2canvas.canvas || this.canvas, u.jsPDF = u.jsPDF || this, u.fontFaces = u.fontFaces ? u.fontFaces.map(Yo) : null;
      var d = new f(u);
      return u.worker ? d : d.from(l).doCallback();
    };
  }(ze.API), ze.API.addJS = function(n) {
    var e, t, r = function(s) {
      for (var a = "", f = 0; f < s.length; f++) {
        var l = s[f];
        if (l === "(" || l === ")") {
          for (var u = 0, d = f - 1; d >= 0 && s[d] === "\\"; d--) u++;
          a += u % 2 == 0 ? "\\" + l : l;
        } else a += l;
      }
      return a;
    }(n);
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
          var f = s[a], l = r.exec(f);
          if (l != null) {
            var u = l[1];
            t.internal.newObjectDeferredBegin(u, false);
          }
          t.internal.write(f);
        }
        if (this.outline.createNamedDestinations) {
          var d = this.internal.pages.length, g = [];
          for (a = 0; a < d; a++) {
            var w = t.internal.newObject();
            g.push(w);
            var L = t.internal.getPageInfo(a + 1);
            t.internal.write("<< /D[" + L.objId + " 0 R /XYZ null null null]>> endobj");
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
          var f = {
            title: s,
            options: a,
            children: []
          };
          return r == null && (r = this.root), r.children.push(f), f;
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
            var f = r.children[a];
            this.objStart(f), this.line("/Title " + this.makeString(f.title)), this.line("/Parent " + this.makeRef(r)), a > 0 && this.line("/Prev " + this.makeRef(r.children[a - 1])), a < r.children.length - 1 && this.line("/Next " + this.makeRef(r.children[a + 1])), f.children.length > 0 && (this.line("/First " + this.makeRef(f.children[0])), this.line("/Last " + this.makeRef(f.children[f.children.length - 1])));
            var l = this.count = this.count_r({
              count: 0
            }, f);
            if (l > 0 && this.line("/Count " + l), f.options && f.options.pageNumber) {
              var u = t.internal.getPageInfo(f.options.pageNumber);
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
  }(ze.API), function(n) {
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
    n.processJPEG = function(t, r, s, a, f, l) {
      var u, d = this.decode.DCT_DECODE, g = null;
      if (typeof t == "string" || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
        switch (t = f || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, u = function(w) {
          for (var L, p = 256 * w.charCodeAt(4) + w.charCodeAt(5), j = w.length, E = {
            width: 0,
            height: 0,
            numcomponents: 1
          }, O = 4; O < j; O += 2) {
            if (O += p, e.indexOf(w.charCodeAt(O + 1)) !== -1) {
              L = 256 * w.charCodeAt(O + 5) + w.charCodeAt(O + 6), E = {
                width: 256 * w.charCodeAt(O + 7) + w.charCodeAt(O + 8),
                height: L,
                numcomponents: w.charCodeAt(O + 9)
              };
              break;
            }
            p = 256 * w.charCodeAt(O + 2) + w.charCodeAt(O + 3);
          }
          return E;
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
  }(ze.API), ze.API.processPNG = function(n, e, t, r) {
    if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
      var s, a = v5(n, {
        checkCrc: true
      }), f = a.width, l = a.height, u = a.channels, d = a.palette, g = a.depth;
      s = d && u === 1 ? function(ee) {
        for (var z = ee.width, ie = ee.height, A = ee.data, I = ee.palette, H = ee.depth, W = false, ce = [], he = [], xe = void 0, oe = false, ne = 0, ke = 0; ke < I.length; ke++) {
          var Le = mc(I[ke], 4), N = Le[0], D = Le[1], q = Le[2], K = Le[3];
          ce.push(N, D, q), K != null && (K === 0 ? (ne++, he.length < 1 && he.push(ke)) : K < 255 && (oe = true));
        }
        if (oe || ne > 1) {
          W = true, he = void 0;
          var X = z * ie;
          xe = new Uint8Array(X);
          for (var T = new DataView(A.buffer), J = 0; J < X; J++) {
            var Z = Xo(T, J, H), se = mc(I[Z], 4)[3];
            xe[J] = se;
          }
        } else ne === 0 && (he = void 0);
        return {
          colorSpace: "Indexed",
          colorsPerPixel: 1,
          sMaskBitsPerComponent: W ? 8 : void 0,
          colorBytes: A,
          alphaBytes: xe,
          needSMask: W,
          palette: ce,
          mask: he
        };
      }(a) : u === 2 || u === 4 ? function(ee) {
        for (var z = ee.data, ie = ee.width, A = ee.height, I = ee.channels, H = ee.depth, W = I === 2 ? "DeviceGray" : "DeviceRGB", ce = I - 1, he = ie * A, xe = ce, oe = he * xe, ne = 1 * he, ke = Math.ceil(oe * H / 8), Le = Math.ceil(ne * H / 8), N = new Uint8Array(ke), D = new Uint8Array(Le), q = new DataView(z.buffer), K = new DataView(N.buffer), X = new DataView(D.buffer), T = false, J = 0; J < he; J++) {
          for (var Z = J * I, se = 0; se < xe; se++) vu(K, Xo(q, Z + se, H), J * xe + se, H);
          var le = Xo(q, Z + xe, H);
          le < (1 << H) - 1 && (T = true), vu(X, le, 1 * J, H);
        }
        return {
          colorSpace: W,
          colorsPerPixel: ce,
          sMaskBitsPerComponent: T ? H : void 0,
          colorBytes: N,
          alphaBytes: D,
          needSMask: T
        };
      }(a) : function(ee) {
        var z = ee.data, ie = ee.channels === 1 ? "DeviceGray" : "DeviceRGB";
        return {
          colorSpace: ie,
          colorsPerPixel: ie === "DeviceGray" ? 1 : 3,
          colorBytes: z instanceof Uint16Array ? function(A) {
            for (var I = A.length, H = new Uint8Array(2 * I), W = new DataView(H.buffer, H.byteOffset, H.byteLength), ce = 0; ce < I; ce++) W.setUint16(2 * ce, A[ce], false);
            return H;
          }(z) : z,
          needSMask: false
        };
      }(a);
      var w, L, p, j = s, E = j.colorSpace, O = j.colorsPerPixel, S = j.sMaskBitsPerComponent, $ = j.colorBytes, V = j.alphaBytes, B = j.needSMask, ue = j.palette, Ne = j.mask, fe = null;
      return r !== ze.API.image_compression.NONE && typeof nl == "function" ? (fe = function(ee) {
        var z;
        switch (ee) {
          case ze.API.image_compression.FAST:
            z = 11;
            break;
          case ze.API.image_compression.MEDIUM:
            z = 13;
            break;
          case ze.API.image_compression.SLOW:
            z = 14;
            break;
          default:
            z = 12;
        }
        return z;
      }(r), w = this.decode.FLATE_DECODE, L = "/Predictor ".concat(fe, " /Colors ").concat(O, " /BitsPerComponent ").concat(g, " /Columns ").concat(f), n = du($, Math.ceil(f * O * g / 8), O, g, r), B && (p = du(V, Math.ceil(f * S / 8), 1, S, r))) : (w = void 0, L = void 0, n = $, B && (p = V)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), {
        alias: t,
        data: n,
        index: e,
        filter: w,
        decodeParameters: L,
        transparency: Ne,
        palette: ue,
        sMask: p,
        predictor: fe,
        width: f,
        height: l,
        bitsPerComponent: g,
        sMaskBitsPerComponent: S,
        colorSpace: E
      };
    }
  }, function(n) {
    n.processGIF89A = function(e, t, r, s) {
      var a = new B5(e), f = a.width, l = a.height, u = [];
      a.decodeAndBlitFrameRGBA(0, u);
      var d = {
        data: u,
        width: f,
        height: l
      }, g = new Zo(100).encode(d, 100);
      return n.processJPEG.call(this, g, t, r, s);
    }, n.processGIF87A = n.processGIF89A;
  }(ze.API), nr.prototype.parseHeader = function() {
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
      for (var r = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++) for (var a = this.datav.getUint8(this.pos++, true), f = r * this.width * 4 + 8 * s * 4, l = 0; l < 8 && 8 * s + l < this.width; l++) {
        var u = this.palette[a >> 7 - l & 1];
        this.data[f + 4 * l] = u.blue, this.data[f + 4 * l + 1] = u.green, this.data[f + 4 * l + 2] = u.red, this.data[f + 4 * l + 3] = 255;
      }
      t !== 0 && (this.pos += 4 - t);
    }
  }, nr.prototype.bit4 = function() {
    for (var n = Math.ceil(this.width / 2), e = n % 4, t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, s = 0; s < n; s++) {
        var a = this.datav.getUint8(this.pos++, true), f = r * this.width * 4 + 2 * s * 4, l = a >> 4, u = 15 & a, d = this.palette[l];
        if (this.data[f] = d.blue, this.data[f + 1] = d.green, this.data[f + 2] = d.red, this.data[f + 3] = 255, 2 * s + 1 >= this.width) break;
        d = this.palette[u], this.data[f + 4] = d.blue, this.data[f + 4 + 1] = d.green, this.data[f + 4 + 2] = d.red, this.data[f + 4 + 3] = 255;
      }
      e !== 0 && (this.pos += 4 - e);
    }
  }, nr.prototype.bit8 = function() {
    for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
      for (var t = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
        var s = this.datav.getUint8(this.pos++, true), a = t * this.width * 4 + 4 * r;
        if (s < this.palette.length) {
          var f = this.palette[s];
          this.data[a] = f.red, this.data[a + 1] = f.green, this.data[a + 2] = f.blue, this.data[a + 3] = 255;
        } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
      }
      n !== 0 && (this.pos += 4 - n);
    }
  }, nr.prototype.bit15 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, s = 0; s < this.width; s++) {
        var a = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var f = (a & e) / e * 255 | 0, l = (a >> 5 & e) / e * 255 | 0, u = (a >> 10 & e) / e * 255 | 0, d = a >> 15 ? 255 : 0, g = r * this.width * 4 + 4 * s;
        this.data[g] = u, this.data[g + 1] = l, this.data[g + 2] = f, this.data[g + 3] = d;
      }
      this.pos += n;
    }
  }, nr.prototype.bit16 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), t = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
      for (var s = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
        var f = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var l = (f & e) / e * 255 | 0, u = (f >> 5 & t) / t * 255 | 0, d = (f >> 11) / e * 255 | 0, g = s * this.width * 4 + 4 * a;
        this.data[g] = d, this.data[g + 1] = u, this.data[g + 2] = l, this.data[g + 3] = 255;
      }
      this.pos += n;
    }
  }, nr.prototype.bit24 = function() {
    for (var n = this.height - 1; n >= 0; n--) {
      for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
        var r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), f = e * this.width * 4 + 4 * t;
        this.data[f] = a, this.data[f + 1] = s, this.data[f + 2] = r, this.data[f + 3] = 255;
      }
      this.pos += this.width % 4;
    }
  }, nr.prototype.bit32 = function() {
    for (var n = this.height - 1; n >= 0; n--) for (var e = this.bottom_up ? n : this.height - 1 - n, t = 0; t < this.width; t++) {
      var r = this.datav.getUint8(this.pos++, true), s = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), f = this.datav.getUint8(this.pos++, true), l = e * this.width * 4 + 4 * t;
      this.data[l] = a, this.data[l + 1] = s, this.data[l + 2] = r, this.data[l + 3] = f;
    }
  }, nr.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processBMP = function(e, t, r, s) {
      var a = new nr(e, false), f = a.width, l = a.height, u = {
        data: a.getData(),
        width: f,
        height: l
      }, d = new Zo(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, s);
    };
  }(ze.API), yu.prototype.getData = function() {
    return this.data;
  }, function(n) {
    n.processWEBP = function(e, t, r, s) {
      var a = new yu(e), f = a.width, l = a.height, u = {
        data: a.getData(),
        width: f,
        height: l
      }, d = new Zo(100).encode(u, 100);
      return n.processJPEG.call(this, d, t, r, s);
    };
  }(ze.API), ze.API.processRGBA = function(n, e, t) {
    for (var r = n.data, s = r.length, a = new Uint8Array(s / 4 * 3), f = new Uint8Array(s / 4), l = 0, u = 0, d = 0; d < s; d += 4) {
      var g = r[d], w = r[d + 1], L = r[d + 2], p = r[d + 3];
      a[l++] = g, a[l++] = w, a[l++] = L, f[u++] = p;
    }
    var j = this.__addimage__.arrayBufferToBinaryString(a);
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(f),
      data: j,
      index: e,
      alias: t,
      colorSpace: "DeviceRGB",
      bitsPerComponent: 8,
      width: n.width,
      height: n.height
    };
  }, ze.API.setLanguage = function(n) {
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
  }, Yi = ze.API, Es = Yi.getCharWidthsArray = function(n, e) {
    var t, r, s = (e = e || {}).font || this.internal.getFont(), a = e.fontSize || this.internal.getFontSize(), f = e.charSpace || this.internal.getCharSpace(), l = e.widths ? e.widths : s.metadata.Unicode.widths, u = l.fof ? l.fof : 1, d = e.kerning ? e.kerning : s.metadata.Unicode.kerning, g = d.fof ? d.fof : 1, w = e.doKerning !== false, L = 0, p = n.length, j = 0, E = l[0] || u, O = [];
    for (t = 0; t < p; t++) r = n.charCodeAt(t), typeof s.metadata.widthOfString == "function" ? O.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(r)) + f * (1e3 / a) || 0) / 1e3) : (L = w && Lt(d[r]) === "object" && !isNaN(parseInt(d[r][j], 10)) ? d[r][j] / g : 0, O.push((l[r] || E) / u + L)), j = r;
    return O;
  }, uu = Yi.getStringUnitWidth = function(n, e) {
    var t = (e = e || {}).fontSize || this.internal.getFontSize(), r = e.font || this.internal.getFont(), s = e.charSpace || this.internal.getCharSpace();
    return Yi.processArabic && (n = Yi.processArabic(n)), typeof r.metadata.widthOfString == "function" ? r.metadata.widthOfString(n, t, s) / t : Es.apply(this, arguments).reduce(function(a, f) {
      return a + f;
    }, 0);
  }, fu = function(n, e, t, r) {
    for (var s = [], a = 0, f = n.length, l = 0; a !== f && l + e[a] < t; ) l += e[a], a++;
    s.push(n.slice(0, a));
    var u = a;
    for (l = 0; a !== f; ) l + e[a] > r && (s.push(n.slice(u, a)), l = 0, u = a), l += e[a], a++;
    return u !== a && s.push(n.slice(u, a)), s;
  }, hu = function(n, e, t) {
    t || (t = {});
    var r, s, a, f, l, u, d, g = [], w = [
      g
    ], L = t.textIndent || 0, p = 0, j = 0, E = n.split(" "), O = Es.apply(this, [
      " ",
      t
    ])[0];
    if (u = t.lineIndent === -1 ? E[0].length + 2 : t.lineIndent || 0) {
      var S = Array(u).join(" "), $ = [];
      E.map(function(B) {
        (B = B.split(/\s*\n/)).length > 1 ? $ = $.concat(B.map(function(ue, Ne) {
          return (Ne && ue.length ? `
` : "") + ue;
        })) : $.push(B[0]);
      }), E = $, u = uu.apply(this, [
        S,
        t
      ]);
    }
    for (a = 0, f = E.length; a < f; a++) {
      var V = 0;
      if (r = E[a], u && r[0] == `
` && (r = r.substr(1), V = 1), L + p + (j = (s = Es.apply(this, [
        r,
        t
      ])).reduce(function(B, ue) {
        return B + ue;
      }, 0)) > e || V) {
        if (j > e) {
          for (l = fu.apply(this, [
            r,
            s,
            e - (L + p),
            e
          ]), g.push(l.shift()), g = [
            l.pop()
          ]; l.length; ) w.push([
            l.shift()
          ]);
          j = s.slice(r.length - (g[0] ? g[0].length : 0)).reduce(function(B, ue) {
            return B + ue;
          }, 0);
        } else g = [
          r
        ];
        w.push(g), L = j + u, p = O;
      } else g.push(r), L += p + j, p = O;
    }
    return d = u ? function(B, ue) {
      return (ue ? S : "") + B.join(" ");
    } : function(B) {
      return B.join(" ");
    }, w.map(d);
  }, Yi.splitTextToSize = function(n, e, t) {
    var r, s = (t = t || {}).fontSize || this.internal.getFontSize(), a = (function(g) {
      if (g.widths && g.kerning) return {
        widths: g.widths,
        kerning: g.kerning
      };
      var w = this.internal.getFont(g.fontName, g.fontStyle), L = "Unicode";
      return w.metadata[L] ? {
        widths: w.metadata[L].widths || {
          0: 1
        },
        kerning: w.metadata[L].kerning || {}
      } : {
        font: w.metadata,
        fontSize: this.internal.getFontSize(),
        charSpace: this.internal.getCharSpace()
      };
    }).call(this, t);
    r = Array.isArray(n) ? n : String(n).split(/\r?\n/);
    var f = 1 * this.internal.scaleFactor * e / s;
    a.textIndent = t.textIndent ? 1 * t.textIndent * this.internal.scaleFactor / s : 0, a.lineIndent = t.lineIndent;
    var l, u, d = [];
    for (l = 0, u = r.length; l < u; l++) d = d.concat(hu.apply(this, [
      r[l],
      f,
      a
    ]));
    return d;
  }, function(n) {
    n.__fontmetrics__ = n.__fontmetrics__ || {};
    for (var e = "0123456789abcdef", t = "klmnopqrstuvwxyz", r = {}, s = {}, a = 0; a < 16; a++) r[t[a]] = e[a], s[e[a]] = t[a];
    var f = function(L) {
      return "0x" + parseInt(L, 10).toString(16);
    }, l = n.__fontmetrics__.compress = function(L) {
      var p, j, E, O, S = [
        "{"
      ];
      for (var $ in L) {
        if (p = L[$], isNaN(parseInt($, 10)) ? j = "'" + $ + "'" : ($ = parseInt($, 10), j = (j = f($).slice(2)).slice(0, -1) + s[j.slice(-1)]), typeof p == "number") p < 0 ? (E = f(p).slice(3), O = "-") : (E = f(p).slice(2), O = ""), E = O + E.slice(0, -1) + s[E.slice(-1)];
        else {
          if (Lt(p) !== "object") throw new Error("Don't know what to do with value type " + Lt(p) + ".");
          E = l(p);
        }
        S.push(j + E);
      }
      return S.push("}"), S.join("");
    }, u = n.__fontmetrics__.uncompress = function(L) {
      if (typeof L != "string") throw new Error("Invalid argument passed to uncompress.");
      for (var p, j, E, O, S = {}, $ = 1, V = S, B = [], ue = "", Ne = "", fe = L.length - 1, ee = 1; ee < fe; ee += 1) (O = L[ee]) == "'" ? p ? (E = p.join(""), p = void 0) : p = [] : p ? p.push(O) : O == "{" ? (B.push([
        V,
        E
      ]), V = {}, E = void 0) : O == "}" ? ((j = B.pop())[0][j[1]] = V, E = void 0, V = j[0]) : O == "-" ? $ = -1 : E === void 0 ? r.hasOwnProperty(O) ? (ue += r[O], E = parseInt(ue, 16) * $, $ = 1, ue = "") : ue += O : r.hasOwnProperty(O) ? (Ne += r[O], V[E] = parseInt(Ne, 16) * $, $ = 1, E = void 0, Ne = "") : Ne += O;
      return S;
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
      function(L) {
        var p = L.font, j = w.Unicode[p.postScriptName];
        j && (p.metadata.Unicode = {}, p.metadata.Unicode.widths = j.widths, p.metadata.Unicode.kerning = j.kerning);
        var E = g.Unicode[p.postScriptName];
        E && (p.metadata.Unicode.encoding = E, p.encoding = E.codePages[0]);
      }
    ]);
  }(ze.API), function(n) {
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
          (function(f, l) {
            l = /^\x00\x01\x00\x00/.test(l) ? e(l) : e(Os(l)), f.metadata = n.API.TTFFont.open(l), f.metadata.Unicode = f.metadata.Unicode || {
              encoding: {},
              kerning: {},
              widths: []
            }, f.metadata.glyIdsUsed = [
              0
            ];
          })(s, r);
        }
      }
    ]);
  }(ze), ze.API.addSvgAsImage = function(n, e, t, r, s, a, f, l) {
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
    return (Je.canvg ? Promise.resolve(Je.canvg) : Fs(() => import("./index.es-jGFGYOkM.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]))).catch(function(L) {
      return Promise.reject(new Error("Could not load canvg: " + L));
    }).then(function(L) {
      return L.default ? L.default : L;
    }).then(function(L) {
      return L.fromString(d, n, g);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(L) {
      return L.render(g);
    }).then(function() {
      w.addImage(u.toDataURL("image/jpeg", 1), e, t, r, s, f, l);
    });
  }, ze.API.putTotalPages = function(n) {
    var e, t = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), t = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), t = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for (var r = 1; r <= this.internal.getNumberOfPages(); r++) for (var s = 0; s < this.internal.pages[r].length; s++) this.internal.pages[r][s] = this.internal.pages[r][s].replace(e, t);
    return this;
  }, ze.API.viewerPreferences = function(n, e) {
    var t;
    n = n || {}, e = e || false;
    var r, s, a, f = {
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
    }, l = Object.keys(f), u = [], d = 0, g = 0, w = 0;
    function L(j, E) {
      var O, S = false;
      for (O = 0; O < j.length; O += 1) j[O] === E && (S = true);
      return S;
    }
    if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(f)), this.internal.viewerpreferences.isSubscribed = false), t = this.internal.viewerpreferences.configuration, n === "reset" || e === true) {
      var p = l.length;
      for (w = 0; w < p; w += 1) t[l[w]].value = t[l[w]].defaultValue, t[l[w]].explicitSet = false;
    }
    if (Lt(n) === "object") {
      for (s in n) if (a = n[s], L(l, s) && a !== void 0) {
        if (t[s].type === "boolean" && typeof a == "boolean") t[s].value = a;
        else if (t[s].type === "name" && L(t[s].valueSet, a)) t[s].value = a;
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
      var j, E = [];
      for (j in t) t[j].explicitSet === true && (t[j].type === "name" ? E.push("/" + j + " /" + t[j].value) : E.push("/" + j + " " + t[j].value));
      E.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + E.join(`
`) + `
>>`);
    }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = t, this;
  }, ze.API.addMetadata = function(n, e) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
      metadata: n,
      namespaceUri: e ?? "http://jspdf.default.namespaceuri/",
      rawXml: typeof e == "boolean" && e
    }, this.internal.events.subscribe("putCatalog", U5), this.internal.events.subscribe("postPutResources", q5)), this;
  }, function(n) {
    var e = n.API, t = e.pdfEscape16 = function(a, f) {
      for (var l, u = f.metadata.Unicode.widths, d = [
        "",
        "0",
        "00",
        "000",
        "0000"
      ], g = [
        ""
      ], w = 0, L = a.length; w < L; ++w) {
        if (l = f.metadata.characterToGlyph(a.charCodeAt(w)), f.metadata.glyIdsUsed.push(l), f.metadata.toUnicode[l] = a.charCodeAt(w), u.indexOf(l) == -1 && (u.push(l), u.push([
          parseInt(f.metadata.widthOfGlyph(l), 10)
        ])), l == "0") return g.join("");
        l = l.toString(16), g.push(d[4 - l.length], l);
      }
      return g.join("");
    }, r = function(a) {
      var f, l, u, d, g, w, L;
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
endcodespacerange`, u = [], w = 0, L = (l = Object.keys(a).sort(function(p, j) {
        return p - j;
      })).length; w < L; w++) f = l[w], u.length >= 100 && (g += `
` + u.length + ` beginbfchar
` + u.join(`
`) + `
endbfchar`, u = []), a[f] !== void 0 && a[f] !== null && typeof a[f].toString == "function" && (d = ("0000" + a[f].toString(16)).slice(-4), f = ("0000" + (+f).toString(16)).slice(-4), u.push("<" + f + "><" + d + ">"));
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
        (function(f) {
          var l = f.font, u = f.out, d = f.newObject, g = f.putStream;
          if (l.metadata instanceof n.API.TTFFont && l.encoding === "Identity-H") {
            for (var w = l.metadata.Unicode.widths, L = l.metadata.subset.encode(l.metadata.glyIdsUsed, 1), p = "", j = 0; j < L.length; j++) p += String.fromCharCode(L[j]);
            var E = d();
            g({
              data: p,
              addLength1: true,
              objectId: E
            }), u("endobj");
            var O = d();
            g({
              data: r(l.metadata.toUnicode),
              addLength1: true,
              objectId: O
            }), u("endobj");
            var S = d();
            u("<<"), u("/Type /FontDescriptor"), u("/FontName /" + Xi(l.fontName)), u("/FontFile2 " + E + " 0 R"), u("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), u("/Flags " + l.metadata.flags), u("/StemV " + l.metadata.stemV), u("/ItalicAngle " + l.metadata.italicAngle), u("/Ascent " + l.metadata.ascender), u("/Descent " + l.metadata.decender), u("/CapHeight " + l.metadata.capHeight), u(">>"), u("endobj");
            var $ = d();
            u("<<"), u("/Type /Font"), u("/BaseFont /" + Xi(l.fontName)), u("/FontDescriptor " + S + " 0 R"), u("/W " + n.API.PDFObject.convert(w)), u("/CIDToGIDMap /Identity"), u("/DW 1000"), u("/Subtype /CIDFontType2"), u("/CIDSystemInfo"), u("<<"), u("/Supplement 0"), u("/Registry (Adobe)"), u("/Ordering (" + l.encoding + ")"), u(">>"), u(">>"), u("endobj"), l.objectNumber = d(), u("<<"), u("/Type /Font"), u("/Subtype /Type0"), u("/ToUnicode " + O + " 0 R"), u("/BaseFont /" + Xi(l.fontName)), u("/Encoding /" + l.encoding), u("/DescendantFonts [" + $ + " 0 R]"), u(">>"), u("endobj"), l.isAlreadyPutted = true;
          }
        })(a);
      }
    ]), e.events.push([
      "putFont",
      function(a) {
        (function(f) {
          var l = f.font, u = f.out, d = f.newObject, g = f.putStream;
          if (l.metadata instanceof n.API.TTFFont && l.encoding === "WinAnsiEncoding") {
            for (var w = l.metadata.rawData, L = "", p = 0; p < w.length; p++) L += String.fromCharCode(w[p]);
            var j = d();
            g({
              data: L,
              addLength1: true,
              objectId: j
            }), u("endobj");
            var E = d();
            g({
              data: r(l.metadata.toUnicode),
              addLength1: true,
              objectId: E
            }), u("endobj");
            var O = d();
            u("<<"), u("/Descent " + l.metadata.decender), u("/CapHeight " + l.metadata.capHeight), u("/StemV " + l.metadata.stemV), u("/Type /FontDescriptor"), u("/FontFile2 " + j + " 0 R"), u("/Flags 96"), u("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), u("/FontName /" + Xi(l.fontName)), u("/ItalicAngle " + l.metadata.italicAngle), u("/Ascent " + l.metadata.ascender), u(">>"), u("endobj"), l.objectNumber = d();
            for (var S = 0; S < l.metadata.hmtx.widths.length; S++) l.metadata.hmtx.widths[S] = parseInt(l.metadata.hmtx.widths[S] * (1e3 / l.metadata.head.unitsPerEm));
            u("<</Subtype/TrueType/Type/Font/ToUnicode " + E + " 0 R/BaseFont/" + Xi(l.fontName) + "/FontDescriptor " + O + " 0 R/Encoding/" + l.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(l.metadata.hmtx.widths) + ">>"), u("endobj"), l.isAlreadyPutted = true;
          }
        })(a);
      }
    ]);
    var s = function(a) {
      var f, l = a.text || "", u = a.x, d = a.y, g = a.options || {}, w = a.mutex || {}, L = w.pdfEscape, p = w.activeFontKey, j = w.fonts, E = p, O = "", S = 0, $ = "", V = j[E].encoding;
      if (j[E].encoding !== "Identity-H") return {
        text: l,
        x: u,
        y: d,
        options: g,
        mutex: w
      };
      for ($ = l, E = p, Array.isArray(l) && ($ = l[0]), S = 0; S < $.length; S += 1) j[E].metadata.hasOwnProperty("cmap") && (f = j[E].metadata.cmap.unicode.codeMap[$[S].charCodeAt(0)]), f || $[S].charCodeAt(0) < 256 && j[E].metadata.hasOwnProperty("Unicode") ? O += $[S] : O += "";
      var B = "";
      return parseInt(E.slice(1)) < 14 || V === "WinAnsiEncoding" ? B = L(O, E).split("").map(function(ue) {
        return ue.charCodeAt(0).toString(16);
      }).join("") : V === "Identity-H" && (B = t(O, j[E])), w.isHex = true, {
        text: B,
        x: u,
        y: d,
        options: g,
        mutex: w
      };
    };
    e.events.push([
      "postProcessText",
      function(a) {
        var f = a.text || "", l = [], u = {
          text: f,
          x: a.x,
          y: a.y,
          options: a.options,
          mutex: a.mutex
        };
        if (Array.isArray(f)) {
          var d = 0;
          for (d = 0; d < f.length; d += 1) Array.isArray(f[d]) && f[d].length === 3 ? l.push([
            s(Object.assign({}, u, {
              text: f[d][0]
            })).text,
            f[d][1],
            f[d][2]
          ]) : l.push(s(Object.assign({}, u, {
            text: f[d]
          })).text);
          a.text = l;
        } else a.text = s(Object.assign({}, u, {
          text: f
        })).text;
      }
    ]);
  }(ze), function(n) {
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
  }(ze.API), function(n) {
    n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(r) {
      var s, a, f, l, u, d, g, w = e, L = [
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
      }, E = {
        0: 0,
        5: 1,
        6: 2,
        7: 3,
        32: 4,
        251: 5,
        254: 6,
        255: 7
      }, O = [
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
      ], S = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), $ = false, V = 0;
      this.__bidiEngine__ = {};
      var B = function(A) {
        var I = A.charCodeAt(), H = I >> 8, W = E[H];
        return W !== void 0 ? w[256 * W + (255 & I)] : H === 252 || H === 253 ? "AL" : S.test(H) ? "L" : H === 8 ? "R" : "N";
      }, ue = function(A) {
        for (var I, H = 0; H < A.length; H++) {
          if ((I = B(A.charAt(H))) === "L") return false;
          if (I === "R") return true;
        }
        return false;
      }, Ne = function(A, I, H, W) {
        var ce, he, xe, oe, ne = I[W];
        switch (ne) {
          case "L":
          case "R":
          case "LRE":
          case "RLE":
          case "LRO":
          case "RLO":
          case "PDF":
            $ = false;
            break;
          case "N":
          case "AN":
            break;
          case "EN":
            $ && (ne = "AN");
            break;
          case "AL":
            $ = true, ne = "R";
            break;
          case "WS":
          case "BN":
            ne = "N";
            break;
          case "CS":
            W < 1 || W + 1 >= I.length || (ce = H[W - 1]) !== "EN" && ce !== "AN" || (he = I[W + 1]) !== "EN" && he !== "AN" ? ne = "N" : $ && (he = "AN"), ne = he === ce ? he : "N";
            break;
          case "ES":
            ne = (ce = W > 0 ? H[W - 1] : "B") === "EN" && W + 1 < I.length && I[W + 1] === "EN" ? "EN" : "N";
            break;
          case "ET":
            if (W > 0 && H[W - 1] === "EN") {
              ne = "EN";
              break;
            }
            if ($) {
              ne = "N";
              break;
            }
            for (xe = W + 1, oe = I.length; xe < oe && I[xe] === "ET"; ) xe++;
            ne = xe < oe && I[xe] === "EN" ? "EN" : "N";
            break;
          case "NSM":
            if (f && !l) {
              for (oe = I.length, xe = W + 1; xe < oe && I[xe] === "NSM"; ) xe++;
              if (xe < oe) {
                var ke = A[W], Le = ke >= 1425 && ke <= 2303 || ke === 64286;
                if (ce = I[xe], Le && (ce === "R" || ce === "AL")) {
                  ne = "R";
                  break;
                }
              }
            }
            ne = W < 1 || (ce = I[W - 1]) === "B" ? "N" : H[W - 1];
            break;
          case "B":
            $ = false, s = true, ne = V;
            break;
          case "S":
            a = true, ne = "N";
        }
        return ne;
      }, fe = function(A, I, H) {
        var W = A.split("");
        return H && ee(W, H, {
          hiLevel: V
        }), W.reverse(), I && I.reverse(), W.join("");
      }, ee = function(A, I, H) {
        var W, ce, he, xe, oe, ne = -1, ke = A.length, Le = 0, N = [], D = V ? p : L, q = [];
        for ($ = false, s = false, a = false, ce = 0; ce < ke; ce++) q[ce] = B(A[ce]);
        for (he = 0; he < ke; he++) {
          if (oe = Le, N[he] = Ne(A, q, N, he), W = 240 & (Le = D[oe][j[N[he]]]), Le &= 15, I[he] = xe = D[Le][5], W > 0) if (W === 16) {
            for (ce = ne; ce < he; ce++) I[ce] = 1;
            ne = -1;
          } else ne = -1;
          if (D[Le][6]) ne === -1 && (ne = he);
          else if (ne > -1) {
            for (ce = ne; ce < he; ce++) I[ce] = xe;
            ne = -1;
          }
          q[he] === "B" && (I[he] = 0), H.hiLevel |= xe;
        }
        a && function(K, X, T) {
          for (var J = 0; J < T; J++) if (K[J] === "S") {
            X[J] = V;
            for (var Z = J - 1; Z >= 0 && K[Z] === "WS"; Z--) X[Z] = V;
          }
        }(q, I, ke);
      }, z = function(A, I, H, W, ce) {
        if (!(ce.hiLevel < A)) {
          if (A === 1 && V === 1 && !s) return I.reverse(), void (H && H.reverse());
          for (var he, xe, oe, ne, ke = I.length, Le = 0; Le < ke; ) {
            if (W[Le] >= A) {
              for (oe = Le + 1; oe < ke && W[oe] >= A; ) oe++;
              for (ne = Le, xe = oe - 1; ne < xe; ne++, xe--) he = I[ne], I[ne] = I[xe], I[xe] = he, H && (he = H[ne], H[ne] = H[xe], H[xe] = he);
              Le = oe;
            }
            Le++;
          }
        }
      }, ie = function(A, I, H) {
        var W = A.split(""), ce = {
          hiLevel: V
        };
        return H || (H = []), ee(W, H, ce), function(he, xe, oe) {
          if (oe.hiLevel !== 0 && g) for (var ne, ke = 0; ke < he.length; ke++) xe[ke] === 1 && (ne = O.indexOf(he[ke])) >= 0 && (he[ke] = O[ne + 1]);
        }(W, H, ce), z(2, W, I, H, ce), z(1, W, I, H, ce), W.join("");
      };
      return this.__bidiEngine__.doBidiReorder = function(A, I, H) {
        if (function(ce, he) {
          if (he) for (var xe = 0; xe < ce.length; xe++) he[xe] = xe;
          l === void 0 && (l = ue(ce)), d === void 0 && (d = ue(ce));
        }(A, I), f || !u || d) if (f && u && l ^ d) V = l ? 1 : 0, A = fe(A, I, H);
        else if (!f && u && d) V = l ? 1 : 0, A = ie(A, I, H), A = fe(A, I);
        else if (!f || l || u || d) {
          if (f && !u && l ^ d) A = fe(A, I), l ? (V = 0, A = ie(A, I, H)) : (V = 1, A = ie(A, I, H), A = fe(A, I));
          else if (f && l && !u && d) V = 1, A = ie(A, I, H), A = fe(A, I);
          else if (!f && !u && l ^ d) {
            var W = g;
            l ? (V = 1, A = ie(A, I, H), V = 0, g = false, A = ie(A, I, H), g = W) : (V = 0, A = ie(A, I, H), A = fe(A, I), V = 1, g = false, A = ie(A, I, H), g = W, A = fe(A, I));
          }
        } else V = 0, A = ie(A, I, H);
        else V = l ? 1 : 0, A = ie(A, I, H);
        return A;
      }, this.__bidiEngine__.setOptions = function(A) {
        A && (f = A.isInputVisual, u = A.isOutputVisual, l = A.isInputRtl, d = A.isOutputRtl, g = A.isSymmetricSwapping);
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
        var f = [];
        if (a.isInputVisual = typeof a.isInputVisual != "boolean" || a.isInputVisual, t.setOptions(a), Object.prototype.toString.call(s) === "[object Array]") {
          var l = 0;
          for (f = [], l = 0; l < s.length; l += 1) Object.prototype.toString.call(s[l]) === "[object Array]" ? f.push([
            t.doBidiReorder(s[l][0]),
            s[l][1],
            s[l][2]
          ]) : f.push([
            t.doBidiReorder(s[l])
          ]);
          r.text = f;
        } else r.text = t.doBidiReorder(s);
        t.setOptions({
          isInputVisual: true
        });
      }
    ]);
  }(ze), ze.API.TTFFont = function() {
    function n(e) {
      var t;
      if (this.rawData = e, t = this.contents = new ii(e), this.contents.pos = 4, t.readString(4) === "ttcf") throw new Error("TTCF not supported.");
      t.pos = 0, this.parse(), this.subset = new np(this), this.registerTTF();
    }
    return n.open = function(e) {
      return new n(e);
    }, n.prototype.parse = function() {
      return this.directory = new z5(this.contents), this.head = new W5(this), this.name = new Y5(this), this.cmap = new fh(this), this.toUnicode = {}, this.hhea = new V5(this), this.maxp = new J5(this), this.hmtx = new X5(this), this.post = new $5(this), this.os2 = new G5(this), this.loca = new tp(this), this.glyf = new Z5(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
        this.head.xMin,
        this.head.yMin,
        this.head.xMax,
        this.head.yMax
      ];
    }, n.prototype.registerTTF = function() {
      var e, t, r, s, a;
      if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
        var f, l, u, d;
        for (d = [], f = 0, l = (u = this.bbox).length; f < l; f++) e = u[f], d.push(Math.round(e * this.scaleFactor));
        return d;
      }).call(this), this.stemV = 0, this.post.exists ? (r = 255 & (s = this.post.italic_angle), 32768 & (t = s >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + r)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (a = this.familyClass) === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
    }, n.prototype.characterToGlyph = function(e) {
      var t;
      return ((t = this.cmap.unicode) != null ? t.codeMap[e] : void 0) || 0;
    }, n.prototype.widthOfGlyph = function(e) {
      var t;
      return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t;
    }, n.prototype.widthOfString = function(e, t, r) {
      var s, a, f, l;
      for (f = 0, a = 0, l = (e = "" + e).length; 0 <= l ? a < l : a > l; a = 0 <= l ? ++a : --a) s = e.charCodeAt(a), f += this.widthOfGlyph(this.characterToGlyph(s)) + r * (1e3 / t) || 0;
      return f * (t / 1e3);
    }, n.prototype.lineHeight = function(e, t) {
      var r;
      return t == null && (t = false), r = t ? this.lineGap : 0, (this.ascender + r - this.decender) / 1e3 * e;
    }, n;
  }();
  var ir, ii = function() {
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
      var e, t, r, s, a, f, l, u;
      return e = this.readByte(), t = this.readByte(), r = this.readByte(), s = this.readByte(), a = this.readByte(), f = this.readByte(), l = this.readByte(), u = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ a) + 65536 * (255 ^ f) + 256 * (255 ^ l) + (255 ^ u) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * r + 4294967296 * s + 16777216 * a + 65536 * f + 256 * l + u;
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
  }(), z5 = function() {
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
      var r, s, a, f, l, u, d, g, w, L, p, j, E;
      for (E in p = Object.keys(t).length, u = Math.log(2), w = 16 * Math.floor(Math.log(p) / u), f = Math.floor(w / u), g = 16 * p - w, (s = new ii()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(w), s.writeShort(f), s.writeShort(g), a = 16 * p, d = s.pos + a, l = null, j = [], t) for (L = t[E], s.writeString(E), s.writeInt(n(L)), s.writeInt(d), s.writeInt(L.length), j = j.concat(L), E === "head" && (l = d), d += L.length; d % 4; ) j.push(0), d++;
      return s.write(j), r = 2981146554 - n(s.data), s.pos = l + 8, s.writeUInt32(r), s.data;
    }, n = function(t) {
      var r, s, a, f;
      for (t = hh.call(t); t.length % 4; ) t.push(0);
      for (a = new ii(t), s = 0, r = 0, f = t.length; r < f; r = r += 4) s += a.readUInt32();
      return 4294967295 & s;
    }, e;
  }(), H5 = {}.hasOwnProperty, br = function(n, e) {
    for (var t in e) H5.call(e, t) && (n[t] = e[t]);
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
  var W5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "head", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort();
    }, n.prototype.encode = function(e) {
      var t;
      return (t = new ii()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data;
    }, n;
  }(), xu = function() {
    function n(e, t) {
      var r, s, a, f, l, u, d, g, w, L, p, j, E, O, S, $, V;
      switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), w = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
        case 0:
          for (u = 0; u < 256; ++u) this.codeMap[u] = e.readByte();
          break;
        case 4:
          for (p = e.readUInt16(), L = p / 2, e.pos += 6, a = function() {
            var B, ue;
            for (ue = [], u = B = 0; 0 <= L ? B < L : B > L; u = 0 <= L ? ++B : --B) ue.push(e.readUInt16());
            return ue;
          }(), e.pos += 2, E = function() {
            var B, ue;
            for (ue = [], u = B = 0; 0 <= L ? B < L : B > L; u = 0 <= L ? ++B : --B) ue.push(e.readUInt16());
            return ue;
          }(), d = function() {
            var B, ue;
            for (ue = [], u = B = 0; 0 <= L ? B < L : B > L; u = 0 <= L ? ++B : --B) ue.push(e.readUInt16());
            return ue;
          }(), g = function() {
            var B, ue;
            for (ue = [], u = B = 0; 0 <= L ? B < L : B > L; u = 0 <= L ? ++B : --B) ue.push(e.readUInt16());
            return ue;
          }(), s = (this.length - e.pos + this.offset) / 2, l = function() {
            var B, ue;
            for (ue = [], u = B = 0; 0 <= s ? B < s : B > s; u = 0 <= s ? ++B : --B) ue.push(e.readUInt16());
            return ue;
          }(), u = S = 0, V = a.length; S < V; u = ++S) for (O = a[u], r = $ = j = E[u]; j <= O ? $ <= O : $ >= O; r = j <= O ? ++$ : --$) g[u] === 0 ? f = r + d[u] : (f = l[g[u] / 2 + (r - j) - (L - u)] || 0) !== 0 && (f += d[u]), this.codeMap[r] = 65535 & f;
      }
      e.pos = w;
    }
    return n.encode = function(e, t) {
      var r, s, a, f, l, u, d, g, w, L, p, j, E, O, S, $, V, B, ue, Ne, fe, ee, z, ie, A, I, H, W, ce, he, xe, oe, ne, ke, Le, N, D, q, K, X, T, J, Z, se, le, we;
      switch (W = new ii(), f = Object.keys(e).sort(function(ve, Re) {
        return ve - Re;
      }), t) {
        case "macroman":
          for (E = 0, O = function() {
            var ve = [];
            for (j = 0; j < 256; ++j) ve.push(0);
            return ve;
          }(), $ = {
            0: 0
          }, a = {}, ce = 0, ne = f.length; ce < ne; ce++) $[Z = e[s = f[ce]]] == null && ($[Z] = ++E), a[s] = {
            old: e[s],
            new: $[e[s]]
          }, O[s] = $[e[s]];
          return W.writeUInt16(1), W.writeUInt16(0), W.writeUInt32(12), W.writeUInt16(0), W.writeUInt16(262), W.writeUInt16(0), W.write(O), {
            charMap: a,
            subtable: W.data,
            maxGlyphID: E + 1
          };
        case "unicode":
          for (I = [], w = [], V = 0, $ = {}, r = {}, S = d = null, he = 0, ke = f.length; he < ke; he++) $[ue = e[s = f[he]]] == null && ($[ue] = ++V), r[s] = {
            old: ue,
            new: $[ue]
          }, l = $[ue] - s, S != null && l === d || (S && w.push(S), I.push(s), d = l), S = s;
          for (S && w.push(S), w.push(65535), I.push(65535), ie = 2 * (z = I.length), ee = 2 * Math.pow(Math.log(z) / Math.LN2, 2), L = Math.log(ee / 2) / Math.LN2, fe = 2 * z - ee, u = [], Ne = [], p = [], j = xe = 0, Le = I.length; xe < Le; j = ++xe) {
            if (A = I[j], g = w[j], A === 65535) {
              u.push(0), Ne.push(0);
              break;
            }
            if (A - (H = r[A].new) >= 32768) for (u.push(0), Ne.push(2 * (p.length + z - j)), s = oe = A; A <= g ? oe <= g : oe >= g; s = A <= g ? ++oe : --oe) p.push(r[s].new);
            else u.push(H - A), Ne.push(0);
          }
          for (W.writeUInt16(3), W.writeUInt16(1), W.writeUInt32(12), W.writeUInt16(4), W.writeUInt16(16 + 8 * z + 2 * p.length), W.writeUInt16(0), W.writeUInt16(ie), W.writeUInt16(ee), W.writeUInt16(L), W.writeUInt16(fe), T = 0, N = w.length; T < N; T++) s = w[T], W.writeUInt16(s);
          for (W.writeUInt16(0), J = 0, D = I.length; J < D; J++) s = I[J], W.writeUInt16(s);
          for (se = 0, q = u.length; se < q; se++) l = u[se], W.writeUInt16(l);
          for (le = 0, K = Ne.length; le < K; le++) B = Ne[le], W.writeUInt16(B);
          for (we = 0, X = p.length; we < X; we++) E = p[we], W.writeUInt16(E);
          return {
            charMap: r,
            subtable: W.data,
            maxGlyphID: V + 1
          };
      }
    }, n;
  }(), fh = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "cmap", n.prototype.parse = function(e) {
      var t, r, s;
      for (e.pos = this.offset, this.version = e.readUInt16(), s = e.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= s ? r < s : r > s; r = 0 <= s ? ++r : --r) t = new xu(e, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
      return true;
    }, n.encode = function(e, t) {
      var r, s;
      return t == null && (t = "macroman"), r = xu.encode(e, t), (s = new ii()).writeUInt16(0), s.writeUInt16(1), r.table = s.data.concat(r.subtable), r;
    }, n;
  }(), V5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "hhea", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16();
    }, n;
  }(), G5 = function() {
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
  }(), $5 = function() {
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
            var f, l, u;
            for (u = [], a = f = 0, l = this.file.maxp.numGlyphs; 0 <= l ? f < l : f > l; a = 0 <= l ? ++f : --f) u.push(e.readUInt32());
            return u;
          }).call(this);
      }
    }, n;
  }(), K5 = function(n, e) {
    this.raw = n, this.length = n.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
  }, Y5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "name", n.prototype.parse = function(e) {
      var t, r, s, a, f, l, u, d, g, w, L;
      for (e.pos = this.offset, e.readShort(), t = e.readShort(), l = e.readShort(), r = [], a = 0; 0 <= t ? a < t : a > t; a = 0 <= t ? ++a : --a) r.push({
        platformID: e.readShort(),
        encodingID: e.readShort(),
        languageID: e.readShort(),
        nameID: e.readShort(),
        length: e.readShort(),
        offset: this.offset + l + e.readShort()
      });
      for (u = {}, a = g = 0, w = r.length; g < w; a = ++g) s = r[a], e.pos = s.offset, d = e.readString(s.length), f = new K5(d, s), u[L = s.nameID] == null && (u[L] = []), u[s.nameID].push(f);
      this.strings = u, this.copyright = u[0], this.fontFamily = u[1], this.fontSubfamily = u[2], this.uniqueSubfamily = u[3], this.fontName = u[4], this.version = u[5];
      try {
        this.postscriptName = u[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      } catch {
        this.postscriptName = u[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
      }
      return this.trademark = u[7], this.manufacturer = u[8], this.designer = u[9], this.description = u[10], this.vendorUrl = u[11], this.designerUrl = u[12], this.license = u[13], this.licenseUrl = u[14], this.preferredFamily = u[15], this.preferredSubfamily = u[17], this.compatibleFull = u[18], this.sampleText = u[19];
    }, n;
  }(), J5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "maxp", n.prototype.parse = function(e) {
      return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16();
    }, n;
  }(), X5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "hmtx", n.prototype.parse = function(e) {
      var t, r, s, a, f, l, u;
      for (e.pos = this.offset, this.metrics = [], t = 0, l = this.file.hhea.numberOfMetrics; 0 <= l ? t < l : t > l; t = 0 <= l ? ++t : --t) this.metrics.push({
        advance: e.readUInt16(),
        lsb: e.readInt16()
      });
      for (s = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
        var d, g;
        for (g = [], t = d = 0; 0 <= s ? d < s : d > s; t = 0 <= s ? ++d : --d) g.push(e.readInt16());
        return g;
      }(), this.widths = (function() {
        var d, g, w, L;
        for (L = [], d = 0, g = (w = this.metrics).length; d < g; d++) a = w[d], L.push(a.advance);
        return L;
      }).call(this), r = this.widths[this.widths.length - 1], u = [], t = f = 0; 0 <= s ? f < s : f > s; t = 0 <= s ? ++f : --f) u.push(this.widths.push(r));
      return u;
    }, n.prototype.forGlyph = function(e) {
      return e in this.metrics ? this.metrics[e] : {
        advance: this.metrics[this.metrics.length - 1].advance,
        lsb: this.leftSideBearings[e - this.metrics.length]
      };
    }, n;
  }(), hh = [].slice, Z5 = function() {
    function n() {
      return n.__super__.constructor.apply(this, arguments);
    }
    return br(n, ir), n.prototype.tag = "glyf", n.prototype.parse = function() {
      return this.cache = {};
    }, n.prototype.glyphFor = function(e) {
      var t, r, s, a, f, l, u, d, g, w;
      return e in this.cache ? this.cache[e] : (a = this.file.loca, t = this.file.contents, r = a.indexOf(e), (s = a.lengthOf(e)) === 0 ? this.cache[e] = null : (t.pos = this.offset + r, f = (l = new ii(t.read(s))).readShort(), d = l.readShort(), w = l.readShort(), u = l.readShort(), g = l.readShort(), this.cache[e] = f === -1 ? new ep(l, d, w, u, g) : new Q5(l, f, d, w, u, g), this.cache[e]));
    }, n.prototype.encode = function(e, t, r) {
      var s, a, f, l, u;
      for (f = [], a = [], l = 0, u = t.length; l < u; l++) s = e[t[l]], a.push(f.length), s && (f = f.concat(s.encode(r)));
      return a.push(f.length), {
        table: f,
        offsets: a
      };
    }, n;
  }(), Q5 = function() {
    function n(e, t, r, s, a, f) {
      this.raw = e, this.numberOfContours = t, this.xMin = r, this.yMin = s, this.xMax = a, this.yMax = f, this.compound = false;
    }
    return n.prototype.encode = function() {
      return this.raw.data;
    }, n;
  }(), ep = function() {
    function n(e, t, r, s, a) {
      var f, l;
      for (this.raw = e, this.xMin = t, this.yMin = r, this.xMax = s, this.yMax = a, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], f = this.raw; l = f.readShort(), this.glyphOffsets.push(f.pos), this.glyphIDs.push(f.readUInt16()), 32 & l; ) f.pos += 1 & l ? 4 : 2, 128 & l ? f.pos += 8 : 64 & l ? f.pos += 4 : 8 & l && (f.pos += 2);
    }
    return n.prototype.encode = function() {
      var e, t, r;
      for (t = new ii(hh.call(this.raw.data)), e = 0, r = this.glyphIDs.length; e < r; ++e) t.pos = this.glyphOffsets[e];
      return t.data;
    }, n;
  }(), tp = function() {
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
      for (var r = new Uint32Array(this.offsets.length), s = 0, a = 0, f = 0; f < r.length; ++f) if (r[f] = s, a < t.length && t[a] == f) {
        ++a, r[f] = s;
        var l = this.offsets[f], u = this.offsets[f + 1] - l;
        u > 0 && (s += u);
      }
      for (var d = new Array(4 * r.length), g = 0; g < r.length; ++g) d[4 * g + 3] = 255 & r[g], d[4 * g + 2] = (65280 & r[g]) >> 8, d[4 * g + 1] = (16711680 & r[g]) >> 16, d[4 * g] = (4278190080 & r[g]) >> 24;
      return d;
    }, n;
  }(), np = function() {
    function n(e) {
      this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
    }
    return n.prototype.generateCmap = function() {
      var e, t, r, s, a;
      for (t in s = this.font.cmap.tables[0].codeMap, e = {}, a = this.subset) r = a[t], e[t] = s[r];
      return e;
    }, n.prototype.glyphsFor = function(e) {
      var t, r, s, a, f, l, u;
      for (s = {}, f = 0, l = e.length; f < l; f++) s[a = e[f]] = this.font.glyf.glyphFor(a);
      for (a in t = [], s) (r = s[a]) != null && r.compound && t.push.apply(t, r.glyphIDs);
      if (t.length > 0) for (a in u = this.glyphsFor(t)) r = u[a], s[a] = r;
      return s;
    }, n.prototype.encode = function(e, t) {
      var r, s, a, f, l, u, d, g, w, L, p, j, E, O, S;
      for (s in r = fh.encode(this.generateCmap(), "unicode"), f = this.glyphsFor(e), p = {
        0: 0
      }, S = r.charMap) p[(u = S[s]).old] = u.new;
      for (j in L = r.maxGlyphID, f) j in p || (p[j] = L++);
      return g = function($) {
        var V, B;
        for (V in B = {}, $) B[$[V]] = V;
        return B;
      }(p), w = Object.keys(g).sort(function($, V) {
        return $ - V;
      }), E = function() {
        var $, V, B;
        for (B = [], $ = 0, V = w.length; $ < V; $++) l = w[$], B.push(g[l]);
        return B;
      }(), a = this.font.glyf.encode(f, E, p), d = this.font.loca.encode(a.offsets, E), O = {
        cmap: this.font.cmap.raw(),
        glyf: a.table,
        loca: d,
        hmtx: this.font.hmtx.raw(),
        hhea: this.font.hhea.raw(),
        maxp: this.font.maxp.raw(),
        post: this.font.post.raw(),
        name: this.font.name.raw(),
        head: this.font.head.encode(t)
      }, this.font.os2.exists && (O["OS/2"] = this.font.os2.raw()), this.font.directory.encode(O);
    }, n;
  }();
  ze.API.PDFObject = function() {
    var n;
    function e() {
    }
    return n = function(t, r) {
      return (Array(r + 1).join("0") + t).slice(-r);
    }, e.convert = function(t) {
      var r, s, a, f;
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
        ], t) f = t[s], a.push("/" + s + " " + e.convert(f));
        return a.push(">>"), a.join(`
`);
      }
      return "" + t;
    }, e;
  }();
  function rp({ lookupId: n, fileKey: e, wrappedKey: t, initialContent: r, size: s = "default" }) {
    const { toast: a } = Su(), [f, l] = ge.useState(r), [u, d] = ge.useState(false), [g, w] = ge.useState(null), { data: L, refetch: p, isRefetching: j } = cd(n, !!n), E = ud(), O = ge.useRef(f);
    O.current = f, ge.useEffect(() => {
      L?.encryptedClipboardText && e && !u && (async () => {
        try {
          const B = await dd(L.encryptedClipboardText, e);
          B !== O.current && (l(B), L.updatedAt && w(new Date(L.updatedAt)));
        } catch (B) {
          console.error("Sync decryption failed", B);
        }
      })();
    }, [
      L,
      e,
      u
    ]);
    const S = async (V) => {
      if (e) try {
        const B = await pd(V, e);
        await E.mutateAsync({
          lookupId: n,
          encryptedClipboardText: B,
          wrappedKey: t
        }), w(/* @__PURE__ */ new Date());
      } catch {
        a({
          variant: "destructive",
          title: "Failed to save"
        });
      }
    }, $ = (V) => {
      if (f) {
        switch (V) {
          case "txt":
            const B = new Blob([
              f
            ], {
              type: "text/plain"
            }), ue = URL.createObjectURL(B), Ne = document.createElement("a");
            Ne.href = ue, Ne.download = `clipboard-${n}.txt`, Ne.click(), URL.revokeObjectURL(ue);
            break;
          case "pdf":
            const fe = new ze(), ee = fe.splitTextToSize(f, 180);
            fe.text(ee, 10, 10), fe.save(`clipboard-${n}.pdf`);
            break;
          case "doc":
            const z = `<html><body><pre>${f}</pre></body></html>`, ie = new Blob([
              z
            ], {
              type: "application/msword"
            }), A = URL.createObjectURL(ie), I = document.createElement("a");
            I.href = A, I.download = `clipboard-${n}.doc`, I.click(), URL.revokeObjectURL(A);
            break;
        }
        a({
          title: `Exported as ${V.toUpperCase()}`
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
      className: Br("mb-6 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col", s === "large" ? "h-[360px] sm:h-[460px] lg:h-[520px]" : "h-[260px] sm:h-[320px]"),
      children: [
        C.jsxs("div", {
          className: "flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/80",
          children: [
            C.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                C.jsx("div", {
                  className: "w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-900/20",
                  children: C.jsx(ku, {
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
                        (E.isPending || j) && C.jsx(lc, {
                          className: "w-3 h-3 text-cyan-400 animate-spin"
                        })
                      ]
                    }),
                    C.jsx("p", {
                      className: "text-[10px] text-cyan-400/60 font-mono",
                      children: g ? `Synced ${g.toLocaleTimeString()}` : "Ready to sync"
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
                  onClick: () => p(),
                  title: "Force Sync",
                  children: C.jsx(lc, {
                    className: `w-4 h-4 ${j ? "animate-spin" : ""}`
                  })
                }),
                C.jsxs(g2, {
                  children: [
                    C.jsx(b2, {
                      asChild: true,
                      children: C.jsx(Vn, {
                        variant: "ghost",
                        size: "sm",
                        className: "h-8 w-8 p-0 text-zinc-400 hover:text-white",
                        children: C.jsx(Dd, {
                          className: "w-4 h-4"
                        })
                      })
                    }),
                    C.jsxs(Pf, {
                      align: "end",
                      className: "bg-zinc-900 border-zinc-800",
                      children: [
                        C.jsxs(Ms, {
                          onClick: () => $("txt"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(rl, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to TXT"
                          ]
                        }),
                        C.jsxs(Ms, {
                          onClick: () => $("pdf"),
                          className: "text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer",
                          children: [
                            C.jsx(zd, {
                              className: "w-4 h-4 mr-2"
                            }),
                            " Export to PDF"
                          ]
                        }),
                        C.jsxs(Ms, {
                          onClick: () => $("doc"),
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
                    await navigator.clipboard.writeText(f || ""), a({
                      title: "Copied!"
                    });
                  },
                  children: C.jsx(fd, {
                    className: "w-4 h-4"
                  })
                })
              ]
            })
          ]
        }),
        C.jsxs("div", {
          className: "relative flex-1 min-h-0",
          children: [
            C.jsx(hd, {
              value: f || "",
              onChange: (V) => {
                l(V.target.value), d(true);
              },
              onBlur: () => {
                d(false), f && S(f);
              },
              className: "h-full min-h-0 overflow-y-auto overscroll-contain bg-transparent border-0 resize-none focus-visible:ring-0 text-zinc-300 font-mono text-sm leading-relaxed p-4 custom-scrollbar",
              placeholder: "Type shared content here..."
            }),
            u && C.jsx("div", {
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
  const Qo = "vaultbridge_recent", el = "vaultbridge-recent-vault-link", ip = /^[A-Za-z0-9]{3}[-\s]?[A-Za-z0-9]{3}$/, dh = (n) => n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n, ap = (n) => {
    const e = dh(n);
    return e === "/access" || e.startsWith("/download/") || e.startsWith("/v/");
  }, sp = () => C.jsx("svg", {
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
  function op({ expiresAt: n, isMobile: e }) {
    const [t, r] = ge.useState(null);
    return ge.useEffect(() => {
      const s = () => {
        const f = (/* @__PURE__ */ new Date()).getTime(), u = new Date(n).getTime() - f;
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
  function lp() {
    const n = Rd(), [e, t] = ge.useState(""), [r, s] = ge.useState("input"), [a, f] = ge.useState(""), [l, u] = ge.useState([]), [d, g] = ge.useState(null), [w, L] = ge.useState(null), [p, j] = ge.useState(false), [E, O] = ge.useState(null), [S, $] = ge.useState(""), [V, B] = ge.useState(null), [ue, Ne] = ge.useState(null), [fe, ee] = ge.useState(/* @__PURE__ */ new Map()), z = r === "ready" && e.length === 6 ? e.slice(0, 3) : "", ie = !!(E && (E.plainText.trim().length > 0 || E.attachments.length > 0)), [, A] = md(), { toast: I } = Su(), { play: H } = gd(), W = bd(), ce = vd();
    wd();
    const he = yd(), { addRecord: xe } = xd(), oe = ge.useRef(false), ne = (T) => {
      if (!T) return null;
      const J = T.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (J.length === 6) return J;
      try {
        const Z = T.startsWith("http") ? new URL(T) : new URL(T, window.location.origin), se = Z.searchParams.get("code");
        if (se) {
          const ve = se.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
          if (ve.length === 6) return ve;
        }
        const le = Z.hash.startsWith("#") ? Z.hash.slice(1) : Z.hash, we = new URLSearchParams(le).get("code");
        if (we) {
          const ve = we.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
          if (ve.length === 6) return ve;
        }
      } catch {
        return null;
      }
      return null;
    }, ke = (T) => {
      const J = T.trim();
      if (!J) return null;
      if (ip.test(J)) return `/access?code=${J.replace(/[^A-Za-z0-9]/g, "").toUpperCase()}`;
      const Z = [
        J
      ];
      /^(access|download\/|v\/)/i.test(J) && Z.push(`/${J}`), /^(vaultbridge\.org|www\.vaultbridge\.org)/i.test(J) && Z.push(`https://${J}`);
      for (const se of Z) try {
        const le = se.startsWith("/") ? new URL(se, window.location.origin) : new URL(se);
        if (ap(le.pathname)) return le.origin === window.location.origin ? `${le.pathname}${le.search}${le.hash}` : le.toString();
      } catch {
        continue;
      }
      return null;
    }, Le = (T) => {
      const J = ke(T);
      if (!J) {
        B("Paste a valid vault link or 6-character access code.");
        return;
      }
      B(null);
      const Z = T.trim();
      Z && (localStorage.setItem(Qo, Z), localStorage.setItem(el, Z), Ne(Z));
      const se = ne(J);
      if (J.startsWith("/access") && se) {
        t(se);
        return;
      }
      if (J.startsWith("http://") || J.startsWith("https://")) {
        const le = new URL(J);
        if (le.origin === window.location.origin) {
          const we = `${le.pathname}${le.search}${le.hash}`, ve = ne(we);
          if (dh(le.pathname) === "/access" && ve) {
            t(ve);
            return;
          }
          A(we);
        } else window.location.href = J;
        return;
      }
      A(J);
    }, N = async () => {
      if (!navigator.clipboard?.readText) {
        B("Clipboard access is not available in this browser.");
        return;
      }
      try {
        const T = await navigator.clipboard.readText();
        $(T.trim()), B(null);
      } catch {
        B("Clipboard read is blocked. Paste manually.");
      }
    };
    ge.useEffect(() => {
      const T = new URLSearchParams(window.location.search).get("code"), J = new URLSearchParams(window.location.hash.replace("#", "")).get("code"), Z = localStorage.getItem(Qo) || localStorage.getItem(el), se = ne(T) || ne(J) || ne(Z);
      se && (t(se), (ne(T) || ne(J)) && setTimeout(() => D(se), 50)), Z && Ne(Z);
    }, []);
    const D = async (T) => {
      const Z = (T || e).replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (Z.length !== 6) {
        I({
          variant: "destructive",
          title: "Invalid Code",
          description: "Please enter a 6-character code."
        });
        return;
      }
      const se = `/access?code=${Z}`;
      localStorage.setItem(Qo, se), localStorage.setItem(el, se), Ne(se), s("fetching"), f("Looking up vault..."), O(null);
      try {
        const le = Z.slice(0, 3), we = Z.slice(3, 6), ve = await W.mutateAsync(le);
        g(ve);
        const Re = /* @__PURE__ */ new Map();
        for (const ye of ve.files) Re.set(ye.fileId, {
          fileId: ye.fileId,
          maxDownloads: ye.maxDownloads,
          downloadCount: ye.downloadCount,
          remainingDownloads: ye.remainingDownloads,
          isExhausted: ye.remainingDownloads <= 0
        });
        ee(Re), s("decrypting"), f("Unwrapping encryption key with PIN...");
        const P = await Nd(ve.wrappedKey, we);
        L(P), f("Decrypting file metadata...");
        const Pe = await _d(ve.encryptedMetadata, P);
        if (u(Pe), ve.encryptedClipboardText) {
          f("Decrypting clipboard content...");
          try {
            const ye = await Ad(ve.encryptedClipboardText, P);
            O(ye);
          } catch (ye) {
            console.error("Failed to decrypt clipboard:", ye);
          }
        }
        s("ready");
        const Xe = Pe.length > 0, qe = ve.encryptedClipboardText;
        if (f(Xe ? "Files ready for download!" : qe ? "Clipboard content ready!" : "Vault unlocked!"), H("unlock"), I({
          title: "Vault Unlocked!",
          description: Xe ? `${Pe.length} file(s) ready for download.` : qe ? "Secure clipboard content available." : "Vault accessed successfully."
        }), !oe.current) {
          oe.current = true;
          const ye = E?.plainText?.trim().slice(0, 80) || void 0;
          xe({
            type: qe && !Xe ? "clipboard" : "vault",
            action: "received",
            accessCode: Z,
            vaultId: ve.id,
            fileNames: Pe.map((Fe) => Fe.name || "Unknown"),
            fileCount: Pe.length,
            totalSize: Pe.reduce((Fe, Ie) => Fe + (Ie.size || 0), 0),
            hasClipboard: !!qe,
            clipboardPreview: ye,
            createdAt: Date.now(),
            expiresAt: new Date(ve.expiresAt).getTime(),
            maxDownloads: ve.maxDownloads || 0,
            downloadCount: ve.downloadCount || 0
          });
        }
      } catch (le) {
        H("error"), s("input"), console.error("Access error:", le);
        let we = "Invalid or expired code. Please check and try again.";
        le instanceof Error && (le.message.includes("unwrap") ? we = "Invalid PIN. The second half of your code is incorrect." : le.message.includes("expired") && (we = "This vault has expired or reached its download limit.")), I({
          variant: "destructive",
          title: "Access Denied",
          description: we
        });
      }
    }, q = async (T) => {
      if (!(!d || !w)) try {
        f(`Downloading ${T.name}...`);
        const J = d.files.find((ve) => ve.fileId === T.fileId);
        if (!J) throw new Error("File metadata not found in vault");
        const Z = [];
        for (let ve = 0; ve < J.chunkCount; ve++) {
          f(`Decrypting ${T.name} [${ve + 1}/${J.chunkCount}]...`);
          const { downloadUrl: Re } = await ce.mutateAsync({
            vaultId: d.id,
            fileId: T.fileId,
            chunkIndex: ve
          });
          let P = null;
          for (let Fe = 0; Fe < 3; Fe++) try {
            if (P = await fetch(Re), P.ok) break;
            throw P.status >= 400 && P.status < 500 ? new Error(`Server returned ${P.status}`) : new Error(`Server error ${P.status}`);
          } catch {
            Fe < 2 && await new Promise((We) => setTimeout(We, 500 * Math.pow(2, Fe)));
          }
          if (!P || !P.ok) throw new Error("Failed to download chunk");
          const Pe = await P.arrayBuffer();
          if (Pe.byteLength < 12) throw new Error("Chunk too small");
          const Xe = new Uint8Array(Pe, 0, 12), qe = new Uint8Array(Pe, 12), ye = await Id(qe, Xe, w);
          if (T.isCompressed) {
            const Fe = await Fs(() => import("./index.web-Bqyr3zbv.js"), []);
            await Fe.default;
            const Ie = new Uint8Array(ye), We = Fe.decompress(Ie);
            Z.push(We.buffer);
          } else Z.push(ye);
        }
        f(`Assembling ${T.name}...`);
        const se = new Blob(Z, {
          type: T.type || "application/octet-stream"
        }), le = URL.createObjectURL(se), we = document.createElement("a");
        return we.href = le, we.download = T.name, document.body.appendChild(we), we.click(), document.body.removeChild(we), URL.revokeObjectURL(le), true;
      } catch (J) {
        throw console.error("Memory download failed:", J), J;
      }
    }, K = async (T, J = false) => {
      if (!(!d || !w)) try {
        let Z = false;
        const se = n ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
        if ("serviceWorker" in navigator && navigator.serviceWorker.controller && T.size > se) {
          console.log("Attempting Streamed Download for " + T.name), f(`Preparing stream for ${T.name}...`);
          try {
            const le = d.files.find((ve) => ve.fileId === T.fileId);
            if (!le) throw new Error("File not found");
            const we = [];
            for (let ve = 0; ve < le.chunkCount; ve++) {
              const { downloadUrl: Re } = await ce.mutateAsync({
                vaultId: d.id,
                fileId: T.fileId,
                chunkIndex: ve
              });
              we.push({
                downloadUrl: Re,
                index: ve
              });
            }
            await Td(T.fileId, w, we, T), Z = true, r === "ready" && I({
              title: "Download Started",
              description: `Streaming ${T.name}...`
            });
          } catch (le) {
            console.warn("Stream download failed, falling back to memory:", le), Z = false;
          }
        }
        if (Z || (console.log("Using Memory Download for " + T.name), await q(T)), r === "ready" && !Z && I({
          title: "File Downloaded",
          description: `${T.name} saved.`
        }), !J && r === "ready") try {
          const le = await he.mutateAsync({
            vaultId: d.id,
            fileId: T.fileId
          });
          if (le.files && le.files.length > 0) {
            ee((ve) => {
              const Re = new Map(ve);
              for (const P of le.files) Re.set(P.fileId, {
                fileId: P.fileId,
                maxDownloads: P.maxDownloads,
                downloadCount: P.downloadCount,
                remainingDownloads: P.remainingDownloads,
                isExhausted: P.isExhausted
              });
              return Re;
            });
            const we = le.files.find((ve) => ve.fileId === T.fileId);
            we && we.remainingDownloads > 0 && I({
              title: "Download Tracked",
              description: `${we.remainingDownloads} download(s) remaining for ${T.name}.`
            });
          }
          le.vaultExhausted && (I({
            title: "Vault Depleted",
            description: "All files have reached their download limit. Initiating self-destruct...",
            variant: "destructive"
          }), setTimeout(() => j(true), 1500));
        } catch (le) {
          console.error("File download tracking failed", le);
        }
      } catch (Z) {
        if (console.error("Download failed", Z), I({
          variant: "destructive",
          title: "Download Failed",
          description: Z instanceof Error ? Z.message : "Failed to download file"
        }), r === "downloading") throw Z;
      }
    }, X = async () => {
      if (!(!d || !w || l.length === 0)) {
        s("downloading");
        try {
          const T = l.filter((le) => !fe.get(le.fileId)?.isExhausted);
          if (T.length === 0) {
            I({
              variant: "destructive",
              title: "No Downloads Available",
              description: "All files have reached their download limit."
            }), s("ready");
            return;
          }
          let J = 0;
          for (const le of T) f(`Downloading ${le.name} (${J + 1}/${T.length})...`), await K(le, true), J++;
          const Z = T.map((le) => le.fileId), se = await he.mutateAsync({
            vaultId: d.id,
            fileId: Z[0],
            fileIds: Z
          });
          se.files && se.files.length > 0 && ee((le) => {
            const we = new Map(le);
            for (const ve of se.files) we.set(ve.fileId, {
              fileId: ve.fileId,
              maxDownloads: ve.maxDownloads,
              downloadCount: ve.downloadCount,
              remainingDownloads: ve.remainingDownloads,
              isExhausted: ve.isExhausted
            });
            return we;
          }), s("ready"), f("All files downloaded!"), I({
            title: "Download Complete!",
            description: `${J} file(s) downloaded successfully.`
          }), se.vaultExhausted && (I({
            title: "Vault Depleted",
            description: "All files have reached their download limit. Initiating self-destruct...",
            variant: "destructive"
          }), setTimeout(() => j(true), 1500));
        } catch (T) {
          s("ready"), console.error("Download error:", T), I({
            variant: "destructive",
            title: "Download Failed",
            description: T instanceof Error ? T.message : "An error occurred during download."
          });
        }
      }
    };
    return C.jsxs("div", {
      className: `min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 overflow-hidden transition-colors duration-1000 ${p ? "bg-black" : ""}`,
      children: [
        !n && C.jsx(sp, {}),
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
                        C.jsx(Gi, {
                          href: "/clipboard",
                          children: C.jsxs(Vn, {
                            variant: "outline",
                            size: "sm",
                            className: "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 gap-2 h-9 sm:h-10 px-3",
                            children: [
                              C.jsx(ku, {
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
                          children: C.jsxs(Vn, {
                            variant: "ghost",
                            size: "sm",
                            className: "gap-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors h-9 sm:h-10",
                            children: [
                              C.jsx(Ld, {
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
                C.jsx(Sd, {
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
                        children: C.jsx(fc, {
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
                                  C.jsx(Bd, {
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
                                  C.jsx(uc, {
                                    type: "text",
                                    value: S,
                                    onChange: (T) => {
                                      $(T.target.value), V && B(null);
                                    },
                                    placeholder: "https://vaultbridge.org/v/... or ABC123",
                                    className: "h-10 border-zinc-700 bg-zinc-950/70 text-sm text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-cyan-500/40"
                                  }),
                                  C.jsx(Vn, {
                                    type: "button",
                                    variant: "outline",
                                    className: "h-10 border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800",
                                    onClick: N,
                                    children: "Paste"
                                  }),
                                  C.jsx(Vn, {
                                    type: "button",
                                    className: "h-10 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:from-cyan-500 hover:to-emerald-500",
                                    onClick: () => Le(S),
                                    children: "Open Vault"
                                  })
                                ]
                              }),
                              C.jsxs("div", {
                                className: "mt-2 flex flex-wrap items-center gap-2",
                                children: [
                                  ue && C.jsx(Vn, {
                                    type: "button",
                                    variant: "ghost",
                                    className: "h-8 px-2 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200",
                                    onClick: () => Le(ue),
                                    children: "Open recent vault"
                                  }),
                                  V && C.jsx("p", {
                                    className: "text-xs text-rose-400",
                                    children: V
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
                                            C.jsx(uc, {
                                              type: "search",
                                              inputMode: "numeric",
                                              pattern: "[0-9]*",
                                              value: e,
                                              onChange: (T) => {
                                                const J = T.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
                                                t(J), J.length === 6 && r === "input" && setTimeout(() => D(J), 50);
                                              },
                                              onKeyDown: (T) => {
                                                T.key === "Enter" && e.length === 6 && D();
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
                                                  }).map((T, J) => {
                                                    const Z = J, se = e[Z] || "", le = e.length === Z, we = !!se;
                                                    return C.jsx(Dr.div, {
                                                      initial: false,
                                                      animate: {
                                                        scale: le && !n ? 1.05 : 1,
                                                        borderColor: le ? "rgb(6, 182, 212)" : we ? "rgba(6, 182, 212, 0.3)" : "rgba(63, 63, 70, 1)",
                                                        backgroundColor: we ? "rgba(6, 182, 212, 0.1)" : "rgba(24, 24, 27, 1)"
                                                      },
                                                      className: `
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${le ? "shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/20" : ""}
                                                                                `,
                                                      children: se ? C.jsx("span", {
                                                        className: "text-cyan-400",
                                                        children: se
                                                      }) : le && C.jsx("div", {
                                                        className: "w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"
                                                      })
                                                    }, Z);
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
                                                  }).map((T, J) => {
                                                    const Z = J + 3, se = e[Z] || "", le = e.length === Z, we = !!se;
                                                    return C.jsx(Dr.div, {
                                                      initial: false,
                                                      animate: {
                                                        scale: le && !n ? 1.05 : 1,
                                                        borderColor: le ? "rgb(16, 185, 129)" : we ? "rgba(16, 185, 129, 0.3)" : "rgba(63, 63, 70, 1)",
                                                        backgroundColor: we ? "rgba(16, 185, 129, 0.1)" : "rgba(24, 24, 27, 1)"
                                                      },
                                                      className: `
                                                                                    w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-20
                                                                                    border-2 rounded-lg sm:rounded-xl flex items-center justify-center 
                                                                                    text-xl sm:text-2xl md:text-3xl font-mono font-bold
                                                                                    transition-colors duration-200
                                                                                    ${le ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/20" : ""}
                                                                                `,
                                                      children: se ? C.jsx("span", {
                                                        className: "text-emerald-400",
                                                        children: se
                                                      }) : le && C.jsx("div", {
                                                        className: "w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"
                                                      })
                                                    }, Z);
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
                                      onClick: () => D(),
                                      disabled: e.length !== 6,
                                      className: `w-full h-12 sm:h-14 font-bold uppercase tracking-wider text-sm sm:text-base rounded-xl transition-all duration-300 ${e.length === 6 ? "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40" : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`,
                                      children: [
                                        C.jsx(qd, {
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
                                          icon: kd,
                                          label: "Zero-Knowledge"
                                        },
                                        {
                                          icon: fc,
                                          label: "Auto-Destruct"
                                        }
                                      ].map((T, J) => C.jsxs("div", {
                                        className: "flex items-center gap-1.5 sm:gap-2 text-zinc-500",
                                        children: [
                                          C.jsx(T.icon, {
                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                          }),
                                          C.jsx("span", {
                                            className: "text-[10px] sm:text-xs",
                                            children: T.label
                                          })
                                        ]
                                      }, J))
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
                                C.jsx(Fd, {
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
                          }),
                          C.jsx("div", {
                            className: "mt-6 mx-4 sm:mx-0",
                            children: C.jsx(Od, {})
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
                                      children: C.jsx(Pd, {
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
                                            children: C.jsx(Cd, {
                                              className: "w-4 h-4"
                                            })
                                          }),
                                          C.jsx("span", {
                                            className: "text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block lg:inline",
                                            children: "Expires"
                                          })
                                        ]
                                      }),
                                      C.jsx(op, {
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
                                          const T = Array.from(fe.values()).reduce((le, we) => le + we.remainingDownloads, 0), J = Array.from(fe.values()).reduce((le, we) => le + we.maxDownloads, 0), Z = fe.size > 0 ? T : d.maxDownloads - d.downloadCount, se = fe.size > 0 ? J : d.maxDownloads;
                                          return C.jsxs(C.Fragment, {
                                            children: [
                                              Z,
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
                                            children: C.jsx(Ud, {
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
                                          (l.reduce((T, J) => T + J.size, 0) / (1024 * 1024)).toFixed(2),
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
                                          children: l.length + (ie ? 1 : 0)
                                        }),
                                        C.jsx("h3", {
                                          className: "text-sm font-bold text-zinc-300 uppercase tracking-widest",
                                          children: l.length > 0 ? "Available Content" : "Secure Clipboard"
                                        })
                                      ]
                                    }),
                                    (ie || !!d.encryptedClipboardText) && C.jsx("div", {
                                      className: "mb-6",
                                      children: C.jsx(rp, {
                                        lookupId: z,
                                        fileKey: w,
                                        wrappedKey: d.wrappedKey,
                                        initialContent: E?.plainText || null,
                                        size: "large"
                                      })
                                    }),
                                    l.length > 0 && C.jsxs(C.Fragment, {
                                      children: [
                                        C.jsx("div", {
                                          className: "space-y-3 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar",
                                          children: l.map((T, J) => {
                                            const Z = fe.get(T.fileId), se = Z?.remainingDownloads ?? d?.maxDownloads ?? 1, le = Z?.maxDownloads ?? d?.maxDownloads ?? 1, we = Z?.isExhausted ?? false;
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
                                                delay: J * 0.05
                                              },
                                              className: `group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/50 border rounded-xl hover:bg-zinc-900/80 transition-all duration-300 gap-4 sm:gap-0 ${we ? "border-red-500/30 opacity-60" : "border-zinc-800 hover:border-zinc-700"}`,
                                              children: [
                                                C.jsxs("div", {
                                                  className: "flex items-center gap-4 min-w-0",
                                                  children: [
                                                    C.jsx("div", {
                                                      className: `w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border transition-colors ${we ? "border-red-500/30" : "border-zinc-700 group-hover:border-cyan-500/50"}`,
                                                      children: C.jsx(rl, {
                                                        className: `w-5 h-5 sm:w-6 sm:h-6 transition-colors ${we ? "text-red-400" : "text-zinc-400 group-hover:text-cyan-400"}`
                                                      })
                                                    }),
                                                    C.jsxs("div", {
                                                      className: "min-w-0 flex-1",
                                                      children: [
                                                        C.jsx("p", {
                                                          className: "text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs",
                                                          children: T.name
                                                        }),
                                                        C.jsxs("div", {
                                                          className: "flex items-center gap-3 mt-1",
                                                          children: [
                                                            C.jsxs("span", {
                                                              className: "text-xs text-zinc-500 font-mono",
                                                              children: [
                                                                (T.size / 1024 / 1024).toFixed(2),
                                                                " MB"
                                                              ]
                                                            }),
                                                            C.jsx("span", {
                                                              className: "w-1 h-1 rounded-full bg-zinc-700"
                                                            }),
                                                            C.jsx("span", {
                                                              className: "text-[10px] text-zinc-500 uppercase font-bold",
                                                              children: T.type?.split("/")[1] || "FILE"
                                                            }),
                                                            C.jsx("span", {
                                                              className: "w-1 h-1 rounded-full bg-zinc-700"
                                                            }),
                                                            C.jsxs("span", {
                                                              className: `text-[10px] font-bold uppercase ${we ? "text-red-400" : se <= 1 ? "text-amber-400" : "text-cyan-400"}`,
                                                              children: [
                                                                se,
                                                                "/",
                                                                le,
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
                                                  disabled: we,
                                                  className: `w-full sm:w-auto shrink-0 transition-colors h-10 sm:h-9 ${we ? "bg-transparent border-red-500/30 text-red-400 cursor-not-allowed" : "bg-transparent border-zinc-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400"}`,
                                                  onClick: (ve) => {
                                                    ve.stopPropagation(), ve.preventDefault(), we || K(T);
                                                  },
                                                  children: [
                                                    C.jsx(jo, {
                                                      className: "w-4 h-4 mr-2"
                                                    }),
                                                    we ? "Limit Reached" : "Download"
                                                  ]
                                                })
                                              ]
                                            }, T.fileId);
                                          })
                                        }),
                                        C.jsx(Vn, {
                                          size: "lg",
                                          className: `w-full font-bold h-12 transition-all ${Array.from(fe.values()).every((T) => T.isExhausted) && fe.size > 0 ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-red-500/20" : "bg-cyan-600 hover:bg-cyan-500 text-white"}`,
                                          onClick: X,
                                          disabled: Array.from(fe.values()).every((T) => T.isExhausted) && fe.size > 0,
                                          children: Array.from(fe.values()).every((T) => T.isExhausted) && fe.size > 0 ? "All Limits Reached" : C.jsxs(C.Fragment, {
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
                                            ", ",
                                            C.jsx(Gi, {
                                              href: "/privacy",
                                              className: "underline hover:text-primary transition-colors",
                                              children: "Privacy Policy"
                                            }),
                                            " & ",
                                            C.jsx("a", {
                                              href: "/sitemap.xml",
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              className: "underline hover:text-primary transition-colors",
                                              children: "Sitemap"
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
  Lp = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: lp
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Lt as _,
  __tla,
  Lp as a
};
