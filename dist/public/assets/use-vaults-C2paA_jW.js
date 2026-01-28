var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _r2, _e2, _s2, _t2, _n2, _a2, _o, _i2, _m, _h, _f, _c, _l, _u, _p, _Ir_instances, d_fn, g_fn, y_fn, v_fn, __fn, b_fn, x_fn, w_fn, T_fn, _a3, _r3, _e3, _s3, _t3, _Ar_instances, n_fn, a_fn, _b, _c2, _d, _e4, _f2, _g, _h2, _i3, _j, _k, _l2, _m2, _n3, _o2, _p2, _q, _r4, _s4, _t4, _u2, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I2, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb, _Rb, _Sb, _Tb, _Ub, _Vb, _Wb, _Xb, _Yb, _Zb, __b, _$b, _ac, _bc, _cc, _dc, _ec, _fc, _gc, _hc, _ic, _jc, _kc, _lc, _mc, _nc, _oc, _pc, _qc, _rc, _sc, _tc, _uc, _vc, _wc, _xc, _yc, _zc, _Ac, _Bc, _Cc, _Dc, _Ec, _Fc, _Gc, _Hc, _Ic, _Jc, _Kc, _Lc;
import { S as qt, p as It, m as Q, s as ze, n as Fe, o as wr, q as ct, t as kt, v as Tr, w as Sr, x as Pr, y as Ot, z as He, A as At, D as Nr, r as B, E as bt, u as Cr } from "./index-YOfmkex7.js";
var Ir = (_a3 = class extends qt {
  constructor(t, e) {
    super();
    __privateAdd(this, _Ir_instances);
    __privateAdd(this, _r2);
    __privateAdd(this, _e2);
    __privateAdd(this, _s2);
    __privateAdd(this, _t2);
    __privateAdd(this, _n2);
    __privateAdd(this, _a2);
    __privateAdd(this, _o);
    __privateAdd(this, _i2);
    __privateAdd(this, _m);
    __privateAdd(this, _h);
    __privateAdd(this, _f);
    __privateAdd(this, _c);
    __privateAdd(this, _l);
    __privateAdd(this, _u);
    __privateAdd(this, _p, /* @__PURE__ */ new Set());
    this.options = e, __privateSet(this, _r2, t), __privateSet(this, _i2, null), __privateSet(this, _o, It()), this.options.experimental_prefetchInRender || __privateGet(this, _o).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (__privateGet(this, _e2).addObserver(this), Et(__privateGet(this, _e2), this.options) ? __privateMethod(this, _Ir_instances, d_fn).call(this) : this.updateResult(), __privateMethod(this, _Ir_instances, __fn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return lt(__privateGet(this, _e2), this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return lt(__privateGet(this, _e2), this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), __privateMethod(this, _Ir_instances, b_fn).call(this), __privateMethod(this, _Ir_instances, x_fn).call(this), __privateGet(this, _e2).removeObserver(this);
  }
  setOptions(t, e) {
    const r = this.options, s = __privateGet(this, _e2);
    if (this.options = __privateGet(this, _r2).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Q(this.options.enabled, __privateGet(this, _e2)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    __privateMethod(this, _Ir_instances, w_fn).call(this), __privateGet(this, _e2).setOptions(this.options), r._defaulted && !ze(this.options, r) && __privateGet(this, _r2).getQueryCache().notify({ type: "observerOptionsUpdated", query: __privateGet(this, _e2), observer: this });
    const n = this.hasListeners();
    n && Rt(__privateGet(this, _e2), s, this.options, r) && __privateMethod(this, _Ir_instances, d_fn).call(this), this.updateResult(e), n && (__privateGet(this, _e2) !== s || Q(this.options.enabled, __privateGet(this, _e2)) !== Q(r.enabled, __privateGet(this, _e2)) || Fe(this.options.staleTime, __privateGet(this, _e2)) !== Fe(r.staleTime, __privateGet(this, _e2))) && __privateMethod(this, _Ir_instances, g_fn).call(this);
    const i = __privateMethod(this, _Ir_instances, y_fn).call(this);
    n && (__privateGet(this, _e2) !== s || Q(this.options.enabled, __privateGet(this, _e2)) !== Q(r.enabled, __privateGet(this, _e2)) || i !== __privateGet(this, _u)) && __privateMethod(this, _Ir_instances, v_fn).call(this, i);
  }
  getOptimisticResult(t) {
    const e = __privateGet(this, _r2).getQueryCache().build(__privateGet(this, _r2), t), r = this.createResult(e, t);
    return Or(this, r) && (__privateSet(this, _t2, r), __privateSet(this, _a2, this.options), __privateSet(this, _n2, __privateGet(this, _e2).state)), r;
  }
  getCurrentResult() {
    return __privateGet(this, _t2);
  }
  trackResult(t, e) {
    const r = {};
    return Object.keys(t).forEach((s) => {
      Object.defineProperty(r, s, { configurable: false, enumerable: true, get: () => (this.trackProp(s), e == null ? void 0 : e(s), t[s]) });
    }), r;
  }
  trackProp(t) {
    __privateGet(this, _p).add(t);
  }
  getCurrentQuery() {
    return __privateGet(this, _e2);
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const e = __privateGet(this, _r2).defaultQueryOptions(t), r = __privateGet(this, _r2).getQueryCache().build(__privateGet(this, _r2), e);
    return r.fetch().then(() => this.createResult(r, e));
  }
  fetch(t) {
    return __privateMethod(this, _Ir_instances, d_fn).call(this, { ...t, cancelRefetch: t.cancelRefetch ?? true }).then(() => (this.updateResult(), __privateGet(this, _t2)));
  }
  createResult(t, e) {
    var _a4;
    const r = __privateGet(this, _e2), s = this.options, n = __privateGet(this, _t2), i = __privateGet(this, _n2), a = __privateGet(this, _a2), c = t !== r ? t.state : __privateGet(this, _s2), { state: l } = t;
    let u = { ...l }, y = false, T;
    if (e._optimisticResults) {
      const D = this.hasListeners(), ce = !D && Et(t, e), le = D && Rt(t, r, e, s);
      (ce || le) && (u = { ...u, ...Pr(l.data, t.options) }), e._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
    }
    let { error: V, errorUpdatedAt: Pt, status: se } = u;
    if (e.select && u.data !== void 0) if (n && u.data === (i == null ? void 0 : i.data) && e.select === __privateGet(this, _m)) T = __privateGet(this, _h);
    else try {
      __privateSet(this, _m, e.select), T = e.select(u.data), T = Ot(n == null ? void 0 : n.data, T, e), __privateSet(this, _h, T), __privateSet(this, _i2, null);
    } catch (D) {
      __privateSet(this, _i2, D);
    }
    else T = u.data;
    if (e.placeholderData !== void 0 && T === void 0 && se === "pending") {
      let D;
      if ((n == null ? void 0 : n.isPlaceholderData) && e.placeholderData === (a == null ? void 0 : a.placeholderData)) D = n.data;
      else if (D = typeof e.placeholderData == "function" ? e.placeholderData((_a4 = __privateGet(this, _f)) == null ? void 0 : _a4.state.data, __privateGet(this, _f)) : e.placeholderData, e.select && D !== void 0) try {
        D = e.select(D), __privateSet(this, _i2, null);
      } catch (ce) {
        __privateSet(this, _i2, ce);
      }
      D !== void 0 && (se = "success", T = Ot(n == null ? void 0 : n.data, D, e), y = true);
    }
    __privateGet(this, _i2) && (V = __privateGet(this, _i2), T = __privateGet(this, _h), Pt = Date.now(), se = "error");
    const rt = u.fetchStatus === "fetching", st = se === "pending", nt = se === "error", Nt = st && rt, Ct = T !== void 0, $ = { status: se, fetchStatus: u.fetchStatus, isPending: st, isSuccess: se === "success", isError: nt, isInitialLoading: Nt, isLoading: Nt, data: T, dataUpdatedAt: u.dataUpdatedAt, error: V, errorUpdatedAt: Pt, failureCount: u.fetchFailureCount, failureReason: u.fetchFailureReason, errorUpdateCount: u.errorUpdateCount, isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0, isFetchedAfterMount: u.dataUpdateCount > c.dataUpdateCount || u.errorUpdateCount > c.errorUpdateCount, isFetching: rt, isRefetching: rt && !st, isLoadingError: nt && !Ct, isPaused: u.fetchStatus === "paused", isPlaceholderData: y, isRefetchError: nt && Ct, isStale: xt(t, e), refetch: this.refetch, promise: __privateGet(this, _o) };
    if (this.options.experimental_prefetchInRender) {
      const D = (Le) => {
        $.status === "error" ? Le.reject($.error) : $.data !== void 0 && Le.resolve($.data);
      }, ce = () => {
        const Le = __privateSet(this, _o, $.promise = It());
        D(Le);
      }, le = __privateGet(this, _o);
      switch (le.status) {
        case "pending":
          t.queryHash === r.queryHash && D(le);
          break;
        case "fulfilled":
          ($.status === "error" || $.data !== le.value) && ce();
          break;
        case "rejected":
          ($.status !== "error" || $.error !== le.reason) && ce();
          break;
      }
    }
    return $;
  }
  updateResult(t) {
    const e = __privateGet(this, _t2), r = this.createResult(__privateGet(this, _e2), this.options);
    if (__privateSet(this, _n2, __privateGet(this, _e2).state), __privateSet(this, _a2, this.options), __privateGet(this, _n2).data !== void 0 && __privateSet(this, _f, __privateGet(this, _e2)), ze(r, e)) return;
    __privateSet(this, _t2, r);
    const s = {}, n = () => {
      if (!e) return true;
      const { notifyOnChangeProps: i } = this.options, a = typeof i == "function" ? i() : i;
      if (a === "all" || !a && !__privateGet(this, _p).size) return true;
      const o = new Set(a ?? __privateGet(this, _p));
      return this.options.throwOnError && o.add("error"), Object.keys(__privateGet(this, _t2)).some((c) => {
        const l = c;
        return __privateGet(this, _t2)[l] !== e[l] && o.has(l);
      });
    };
    (t == null ? void 0 : t.listeners) !== false && n() && (s.listeners = true), __privateMethod(this, _Ir_instances, T_fn).call(this, { ...s, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && __privateMethod(this, _Ir_instances, __fn).call(this);
  }
}, _r2 = new WeakMap(), _e2 = new WeakMap(), _s2 = new WeakMap(), _t2 = new WeakMap(), _n2 = new WeakMap(), _a2 = new WeakMap(), _o = new WeakMap(), _i2 = new WeakMap(), _m = new WeakMap(), _h = new WeakMap(), _f = new WeakMap(), _c = new WeakMap(), _l = new WeakMap(), _u = new WeakMap(), _p = new WeakMap(), _Ir_instances = new WeakSet(), d_fn = function(t) {
  __privateMethod(this, _Ir_instances, w_fn).call(this);
  let e = __privateGet(this, _e2).fetch(this.options, t);
  return (t == null ? void 0 : t.throwOnError) || (e = e.catch(wr)), e;
}, g_fn = function() {
  __privateMethod(this, _Ir_instances, b_fn).call(this);
  const t = Fe(this.options.staleTime, __privateGet(this, _e2));
  if (ct || __privateGet(this, _t2).isStale || !kt(t)) return;
  const r = Tr(__privateGet(this, _t2).dataUpdatedAt, t) + 1;
  __privateSet(this, _c, setTimeout(() => {
    __privateGet(this, _t2).isStale || this.updateResult();
  }, r));
}, y_fn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(__privateGet(this, _e2)) : this.options.refetchInterval) ?? false;
}, v_fn = function(t) {
  __privateMethod(this, _Ir_instances, x_fn).call(this), __privateSet(this, _u, t), !(ct || Q(this.options.enabled, __privateGet(this, _e2)) === false || !kt(__privateGet(this, _u)) || __privateGet(this, _u) === 0) && __privateSet(this, _l, setInterval(() => {
    (this.options.refetchIntervalInBackground || Sr.isFocused()) && __privateMethod(this, _Ir_instances, d_fn).call(this);
  }, __privateGet(this, _u)));
}, __fn = function() {
  __privateMethod(this, _Ir_instances, g_fn).call(this), __privateMethod(this, _Ir_instances, v_fn).call(this, __privateMethod(this, _Ir_instances, y_fn).call(this));
}, b_fn = function() {
  __privateGet(this, _c) && (clearTimeout(__privateGet(this, _c)), __privateSet(this, _c, void 0));
}, x_fn = function() {
  __privateGet(this, _l) && (clearInterval(__privateGet(this, _l)), __privateSet(this, _l, void 0));
}, w_fn = function() {
  const t = __privateGet(this, _r2).getQueryCache().build(__privateGet(this, _r2), this.options);
  if (t === __privateGet(this, _e2)) return;
  const e = __privateGet(this, _e2);
  __privateSet(this, _e2, t), __privateSet(this, _s2, t.state), this.hasListeners() && (e == null ? void 0 : e.removeObserver(this), t.addObserver(this));
}, T_fn = function(t) {
  He.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(__privateGet(this, _t2));
    }), __privateGet(this, _r2).getQueryCache().notify({ query: __privateGet(this, _e2), type: "observerResultsUpdated" });
  });
}, _a3);
function kr(t, e) {
  return Q(e.enabled, t) !== false && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === false);
}
function Et(t, e) {
  return kr(t, e) || t.state.data !== void 0 && lt(t, e, e.refetchOnMount);
}
function lt(t, e, r) {
  if (Q(e.enabled, t) !== false) {
    const s = typeof r == "function" ? r(t) : r;
    return s === "always" || s !== false && xt(t, e);
  }
  return false;
}
function Rt(t, e, r, s) {
  return (t !== e || Q(s.enabled, t) === false) && (!r.suspense || t.state.status !== "error") && xt(t, r);
}
function xt(t, e) {
  return Q(e.enabled, t) !== false && t.isStaleByTime(Fe(e.staleTime, t));
}
function Or(t, e) {
  return !ze(t.getCurrentResult(), e);
}
var Ar = (_b = class extends qt {
  constructor(t, e) {
    super();
    __privateAdd(this, _Ar_instances);
    __privateAdd(this, _r3);
    __privateAdd(this, _e3);
    __privateAdd(this, _s3);
    __privateAdd(this, _t3);
    __privateSet(this, _r3, t), this.setOptions(e), this.bindMethods(), __privateMethod(this, _Ar_instances, n_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var _a4;
    const e = this.options;
    this.options = __privateGet(this, _r3).defaultMutationOptions(t), ze(this.options, e) || __privateGet(this, _r3).getMutationCache().notify({ type: "observerOptionsUpdated", mutation: __privateGet(this, _s3), observer: this }), (e == null ? void 0 : e.mutationKey) && this.options.mutationKey && At(e.mutationKey) !== At(this.options.mutationKey) ? this.reset() : ((_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.state.status) === "pending" && __privateGet(this, _s3).setOptions(this.options);
  }
  onUnsubscribe() {
    var _a4;
    this.hasListeners() || ((_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.removeObserver(this));
  }
  onMutationUpdate(t) {
    __privateMethod(this, _Ar_instances, n_fn).call(this), __privateMethod(this, _Ar_instances, a_fn).call(this, t);
  }
  getCurrentResult() {
    return __privateGet(this, _e3);
  }
  reset() {
    var _a4;
    (_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.removeObserver(this), __privateSet(this, _s3, void 0), __privateMethod(this, _Ar_instances, n_fn).call(this), __privateMethod(this, _Ar_instances, a_fn).call(this);
  }
  mutate(t, e) {
    var _a4;
    return __privateSet(this, _t3, e), (_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.removeObserver(this), __privateSet(this, _s3, __privateGet(this, _r3).getMutationCache().build(__privateGet(this, _r3), this.options)), __privateGet(this, _s3).addObserver(this), __privateGet(this, _s3).execute(t);
  }
}, _r3 = new WeakMap(), _e3 = new WeakMap(), _s3 = new WeakMap(), _t3 = new WeakMap(), _Ar_instances = new WeakSet(), n_fn = function() {
  var _a4;
  const t = ((_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.state) ?? Nr();
  __privateSet(this, _e3, { ...t, isPending: t.status === "pending", isSuccess: t.status === "success", isError: t.status === "error", isIdle: t.status === "idle", mutate: this.mutate, reset: this.reset });
}, a_fn = function(t) {
  He.batch(() => {
    var _a4, _b2, _c3, _d2, _e5, _f3, _g2, _h3;
    if (__privateGet(this, _t3) && this.hasListeners()) {
      const e = __privateGet(this, _e3).variables, r = __privateGet(this, _e3).context;
      (t == null ? void 0 : t.type) === "success" ? ((_b2 = (_a4 = __privateGet(this, _t3)).onSuccess) == null ? void 0 : _b2.call(_a4, t.data, e, r), (_d2 = (_c3 = __privateGet(this, _t3)).onSettled) == null ? void 0 : _d2.call(_c3, t.data, null, e, r)) : (t == null ? void 0 : t.type) === "error" && ((_f3 = (_e5 = __privateGet(this, _t3)).onError) == null ? void 0 : _f3.call(_e5, t.error, e, r), (_h3 = (_g2 = __privateGet(this, _t3)).onSettled) == null ? void 0 : _h3.call(_g2, void 0, t.error, e, r));
    }
    this.listeners.forEach((e) => {
      e(__privateGet(this, _e3));
    });
  });
}, _b), Gt = B.createContext(false), Er = () => B.useContext(Gt);
Gt.Provider;
function Rr() {
  let t = false;
  return { clearReset: () => {
    t = false;
  }, reset: () => {
    t = true;
  }, isReset: () => t };
}
var Dr = B.createContext(Rr()), jr = () => B.useContext(Dr);
function Xt(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function dt() {
}
var Br = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = false));
}, Vr = (t) => {
  B.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Mr = ({ result: t, errorResetBoundary: e, throwOnError: r, query: s }) => t.isError && !e.isReset() && !t.isFetching && s && Xt(r, [t.error, s]), Zr = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Lr = (t, e) => t.isLoading && t.isFetching && !e, Fr = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, Dt = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function zr(t, e, r) {
  var _a4, _b2, _c3, _d2, _e5, _f3;
  const s = bt(), n = Er(), i = jr(), a = s.defaultQueryOptions(t);
  (_b2 = (_a4 = s.getDefaultOptions().queries) == null ? void 0 : _a4._experimental_beforeQuery) == null ? void 0 : _b2.call(_a4, a), a._optimisticResults = n ? "isRestoring" : "optimistic", Zr(a), Br(a, i), Vr(i);
  const o = !s.getQueryCache().get(a.queryHash), [c] = B.useState(() => new e(s, a)), l = c.getOptimisticResult(a);
  if (B.useSyncExternalStore(B.useCallback((u) => {
    const y = n ? dt : c.subscribe(He.batchCalls(u));
    return c.updateResult(), y;
  }, [c, n]), () => c.getCurrentResult(), () => c.getCurrentResult()), B.useEffect(() => {
    c.setOptions(a, { listeners: false });
  }, [a, c]), Fr(a, l)) throw Dt(a, c, i);
  if (Mr({ result: l, errorResetBoundary: i, throwOnError: a.throwOnError, query: s.getQueryCache().get(a.queryHash) })) throw l.error;
  return (_d2 = (_c3 = s.getDefaultOptions().queries) == null ? void 0 : _c3._experimental_afterQuery) == null ? void 0 : _d2.call(_c3, a, l), a.experimental_prefetchInRender && !ct && Lr(l, n) && ((_f3 = o ? Dt(a, c, i) : (_e5 = s.getQueryCache().get(a.queryHash)) == null ? void 0 : _e5.promise) == null ? void 0 : _f3.catch(dt).finally(() => {
    c.updateResult();
  })), a.notifyOnChangeProps ? l : c.trackResult(l);
}
function Ur(t, e) {
  return zr(t, Ir);
}
function _e(t, e) {
  const r = bt(), [s] = B.useState(() => new Ar(r, t));
  B.useEffect(() => {
    s.setOptions(t);
  }, [s, t]);
  const n = B.useSyncExternalStore(B.useCallback((a) => s.subscribe(He.batchCalls(a)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult()), i = B.useCallback((a, o) => {
    s.mutate(a, o).catch(dt);
  }, [s]);
  if (n.error && Xt(s.options.throwOnError, [n.error])) throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
var S;
(function(t) {
  t.assertEqual = (n) => n;
  function e(n) {
  }
  t.assertIs = e;
  function r(n) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (n) => {
    const i = {};
    for (const a of n) i[a] = a;
    return i;
  }, t.getValidEnumValues = (n) => {
    const i = t.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), a = {};
    for (const o of i) a[o] = n[o];
    return t.objectValues(a);
  }, t.objectValues = (n) => t.objectKeys(n).map(function(i) {
    return n[i];
  }), t.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const i = [];
    for (const a in n) Object.prototype.hasOwnProperty.call(n, a) && i.push(a);
    return i;
  }, t.find = (n, i) => {
    for (const a of n) if (i(a)) return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function s(n, i = " | ") {
    return n.map((a) => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  t.joinValues = s, t.jsonStringifyReplacer = (n, i) => typeof i == "bigint" ? i.toString() : i;
})(S || (S = {}));
var ht;
(function(t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r });
})(ht || (ht = {}));
const m = S.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), W = (t) => {
  switch (typeof t) {
    case "undefined":
      return m.undefined;
    case "string":
      return m.string;
    case "number":
      return isNaN(t) ? m.nan : m.number;
    case "boolean":
      return m.boolean;
    case "function":
      return m.function;
    case "bigint":
      return m.bigint;
    case "symbol":
      return m.symbol;
    case "object":
      return Array.isArray(t) ? m.array : t === null ? m.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? m.promise : typeof Map < "u" && t instanceof Map ? m.map : typeof Set < "u" && t instanceof Set ? m.set : typeof Date < "u" && t instanceof Date ? m.date : m.object;
    default:
      return m.unknown;
  }
}, h = S.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]), $r = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Z extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const r = e || function(i) {
      return i.message;
    }, s = { _errors: [] }, n = (i) => {
      for (const a of i.issues) if (a.code === "invalid_union") a.unionErrors.map(n);
      else if (a.code === "invalid_return_type") n(a.returnTypeError);
      else if (a.code === "invalid_arguments") n(a.argumentsError);
      else if (a.path.length === 0) s._errors.push(r(a));
      else {
        let o = s, c = 0;
        for (; c < a.path.length; ) {
          const l = a.path[c];
          c === a.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(a))) : o[l] = o[l] || { _errors: [] }, o = o[l], c++;
        }
      }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof Z)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, S.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, s = [];
    for (const n of this.issues) n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Z.create = (t) => new Z(t);
const ge = (t, e) => {
  let r;
  switch (t.code) {
    case h.invalid_type:
      t.received === m.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case h.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, S.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${S.joinValues(t.keys, ", ")}`;
      break;
    case h.invalid_union:
      r = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${S.joinValues(t.options)}`;
      break;
    case h.invalid_enum_value:
      r = `Invalid enum value. Expected ${S.joinValues(t.options)}, received '${t.received}'`;
      break;
    case h.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case h.invalid_return_type:
      r = "Invalid function return type";
      break;
    case h.invalid_date:
      r = "Invalid date";
      break;
    case h.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : S.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case h.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case h.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case h.custom:
      r = "Invalid input";
      break;
    case h.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case h.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, S.assertNever(t);
  }
  return { message: r };
};
let Kt = ge;
function Qr(t) {
  Kt = t;
}
function Ue() {
  return Kt;
}
const $e = (t) => {
  const { data: e, path: r, errorMaps: s, issueData: n } = t, i = [...r, ...n.path || []], a = { ...n, path: i };
  if (n.message !== void 0) return { ...n, path: i, message: n.message };
  let o = "";
  const c = s.filter((l) => !!l).slice().reverse();
  for (const l of c) o = l(a, { data: e, defaultError: o }).message;
  return { ...n, path: i, message: o };
}, qr = [];
function p(t, e) {
  const r = Ue(), s = $e({ issueData: e, data: t.data, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, r, r === ge ? void 0 : ge].filter((n) => !!n) });
  t.common.issues.push(s);
}
class R {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const s = [];
    for (const n of r) {
      if (n.status === "aborted") return _;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, r) {
    const s = [];
    for (const n of r) {
      const i = await n.key, a = await n.value;
      s.push({ key: i, value: a });
    }
    return R.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, r) {
    const s = {};
    for (const n of r) {
      const { key: i, value: a } = n;
      if (i.status === "aborted" || a.status === "aborted") return _;
      i.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof a.value < "u" || n.alwaysSet) && (s[i.value] = a.value);
    }
    return { status: e.value, value: s };
  }
}
const _ = Object.freeze({ status: "aborted" }), he = (t) => ({ status: "dirty", value: t }), j = (t) => ({ status: "valid", value: t }), ft = (t) => t.status === "aborted", pt = (t) => t.status === "dirty", ae = (t) => t.status === "valid", Te = (t) => typeof Promise < "u" && t instanceof Promise;
function Qe(t, e, r, s) {
  if (typeof e == "function" ? t !== e || true : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function Wt(t, e, r, s, n) {
  if (typeof e == "function" ? t !== e || true : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var g;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(g || (g = {}));
var xe, we;
class G {
  constructor(e, r, s, n) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const jt = (t, e) => {
  if (ae(e)) return { success: true, data: e.value };
  if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    const r = new Z(t.common.issues);
    return this._error = r, this._error;
  } };
};
function b(t) {
  if (!t) return {};
  const { errorMap: e, invalid_type_error: r, required_error: s, description: n } = t;
  if (e && (r || s)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (a, o) => {
    var c, l;
    const { message: u } = t;
    return a.code === "invalid_enum_value" ? { message: u ?? o.defaultError } : typeof o.data > "u" ? { message: (c = u ?? s) !== null && c !== void 0 ? c : o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: (l = u ?? r) !== null && l !== void 0 ? l : o.defaultError };
  }, description: n };
}
class w {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return W(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || { common: e.parent.common, data: e.data, parsedType: W(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent };
  }
  _processInputParams(e) {
    return { status: new R(), ctx: { common: e.parent.common, data: e.data, parsedType: W(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent } };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Te(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const s = this.safeParse(e, r);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(e, r) {
    var s;
    const n = { common: { issues: [], async: (s = r == null ? void 0 : r.async) !== null && s !== void 0 ? s : false, contextualErrorMap: r == null ? void 0 : r.errorMap }, path: (r == null ? void 0 : r.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: W(e) }, i = this._parseSync({ data: e, path: n.path, parent: n });
    return jt(n, i);
  }
  "~validate"(e) {
    var r, s;
    const n = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: W(e) };
    if (!this["~standard"].async) try {
      const i = this._parseSync({ data: e, path: [], parent: n });
      return ae(i) ? { value: i.value } : { issues: n.common.issues };
    } catch (i) {
      !((s = (r = i == null ? void 0 : i.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || s === void 0) && s.includes("encountered") && (this["~standard"].async = true), n.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e, path: [], parent: n }).then((i) => ae(i) ? { value: i.value } : { issues: n.common.issues });
  }
  async parseAsync(e, r) {
    const s = await this.safeParseAsync(e, r);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(e, r) {
    const s = { common: { issues: [], contextualErrorMap: r == null ? void 0 : r.errorMap, async: true }, path: (r == null ? void 0 : r.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: W(e) }, n = this._parse({ data: e, path: s.path, parent: s }), i = await (Te(n) ? n : Promise.resolve(n));
    return jt(s, i);
  }
  refine(e, r) {
    const s = (n) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
    return this._refinement((n, i) => {
      const a = e(n), o = () => i.addIssue({ code: h.custom, ...s(n) });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? true : (o(), false)) : a ? true : (o(), false);
    });
  }
  refinement(e, r) {
    return this._refinement((s, n) => e(s) ? true : (n.addIssue(typeof r == "function" ? r(s, n) : r), false));
  }
  _refinement(e) {
    return new U({ schema: this, typeName: v.ZodEffects, effect: { type: "refinement", refinement: e } });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (r) => this["~validate"](r) };
  }
  optional() {
    return q.create(this, this._def);
  }
  nullable() {
    return re.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return z.create(this);
  }
  promise() {
    return ve.create(this, this._def);
  }
  or(e) {
    return Ce.create([this, e], this._def);
  }
  and(e) {
    return Ie.create(this, e, this._def);
  }
  transform(e) {
    return new U({ ...b(this._def), schema: this, typeName: v.ZodEffects, effect: { type: "transform", transform: e } });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Re({ ...b(this._def), innerType: this, defaultValue: r, typeName: v.ZodDefault });
  }
  brand() {
    return new wt({ typeName: v.ZodBranded, type: this, ...b(this._def) });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new De({ ...b(this._def), innerType: this, catchValue: r, typeName: v.ZodCatch });
  }
  describe(e) {
    const r = this.constructor;
    return new r({ ...this._def, description: e });
  }
  pipe(e) {
    return Me.create(this, e);
  }
  readonly() {
    return je.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Gr = /^c[^\s-]{8,}$/i, Xr = /^[0-9a-z]+$/, Kr = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Wr = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Jr = /^[a-z0-9_-]{21}$/i, Hr = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Yr = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, es = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ts = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let it;
const rs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ss = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ns = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, is = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, as = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, os = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Jt = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", us = new RegExp(`^${Jt}$`);
function Ht(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function cs(t) {
  return new RegExp(`^${Ht(t)}$`);
}
function Yt(t) {
  let e = `${Jt}T${Ht(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function ls(t, e) {
  return !!((e === "v4" || !e) && rs.test(t) || (e === "v6" || !e) && ns.test(t));
}
function ds(t, e) {
  if (!Hr.test(t)) return false;
  try {
    const [r] = t.split("."), s = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), n = JSON.parse(atob(s));
    return !(typeof n != "object" || n === null || !n.typ || !n.alg || e && n.alg !== e);
  } catch {
    return false;
  }
}
function hs(t, e) {
  return !!((e === "v4" || !e) && ss.test(t) || (e === "v6" || !e) && is.test(t));
}
class F extends w {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_type, expected: m.string, received: i.parsedType }), _;
    }
    const s = new R();
    let n;
    for (const i of this._def.checks) if (i.kind === "min") e.data.length < i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_small, minimum: i.value, type: "string", inclusive: true, exact: false, message: i.message }), s.dirty());
    else if (i.kind === "max") e.data.length > i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_big, maximum: i.value, type: "string", inclusive: true, exact: false, message: i.message }), s.dirty());
    else if (i.kind === "length") {
      const a = e.data.length > i.value, o = e.data.length < i.value;
      (a || o) && (n = this._getOrReturnCtx(e, n), a ? p(n, { code: h.too_big, maximum: i.value, type: "string", inclusive: true, exact: true, message: i.message }) : o && p(n, { code: h.too_small, minimum: i.value, type: "string", inclusive: true, exact: true, message: i.message }), s.dirty());
    } else if (i.kind === "email") es.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "email", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "emoji") it || (it = new RegExp(ts, "u")), it.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "emoji", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "uuid") Wr.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "uuid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "nanoid") Jr.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "nanoid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "cuid") Gr.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "cuid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "cuid2") Xr.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "cuid2", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "ulid") Kr.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "ulid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "url") try {
      new URL(e.data);
    } catch {
      n = this._getOrReturnCtx(e, n), p(n, { validation: "url", code: h.invalid_string, message: i.message }), s.dirty();
    }
    else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "regex", code: h.invalid_string, message: i.message }), s.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: { includes: i.value, position: i.position }, message: i.message }), s.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: { startsWith: i.value }, message: i.message }), s.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: { endsWith: i.value }, message: i.message }), s.dirty()) : i.kind === "datetime" ? Yt(i).test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: "datetime", message: i.message }), s.dirty()) : i.kind === "date" ? us.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: "date", message: i.message }), s.dirty()) : i.kind === "time" ? cs(i).test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: "time", message: i.message }), s.dirty()) : i.kind === "duration" ? Yr.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "duration", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "ip" ? ls(e.data, i.version) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "ip", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "jwt" ? ds(e.data, i.alg) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "jwt", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "cidr" ? hs(e.data, i.version) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "cidr", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "base64" ? as.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "base64", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "base64url" ? os.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "base64url", code: h.invalid_string, message: i.message }), s.dirty()) : S.assertNever(i);
    return { status: s.value, value: e.data };
  }
  _regex(e, r, s) {
    return this.refinement((n) => e.test(n), { validation: r, code: h.invalid_string, ...g.errToObj(s) });
  }
  _addCheck(e) {
    return new F({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...g.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...g.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...g.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...g.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...g.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...g.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...g.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...g.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...g.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...g.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...g.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...g.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...g.errToObj(e) });
  }
  datetime(e) {
    var r, s;
    return typeof e == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e }) : this._addCheck({ kind: "datetime", precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision, offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : false, local: (s = e == null ? void 0 : e.local) !== null && s !== void 0 ? s : false, ...g.errToObj(e == null ? void 0 : e.message) });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({ kind: "time", precision: null, message: e }) : this._addCheck({ kind: "time", precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision, ...g.errToObj(e == null ? void 0 : e.message) });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...g.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({ kind: "regex", regex: e, ...g.errToObj(r) });
  }
  includes(e, r) {
    return this._addCheck({ kind: "includes", value: e, position: r == null ? void 0 : r.position, ...g.errToObj(r == null ? void 0 : r.message) });
  }
  startsWith(e, r) {
    return this._addCheck({ kind: "startsWith", value: e, ...g.errToObj(r) });
  }
  endsWith(e, r) {
    return this._addCheck({ kind: "endsWith", value: e, ...g.errToObj(r) });
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e, ...g.errToObj(r) });
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e, ...g.errToObj(r) });
  }
  length(e, r) {
    return this._addCheck({ kind: "length", value: e, ...g.errToObj(r) });
  }
  nonempty(e) {
    return this.min(1, g.errToObj(e));
  }
  trim() {
    return new F({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new F({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new F({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
F.create = (t) => {
  var e;
  return new F({ checks: [], typeName: v.ZodString, coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false, ...b(t) });
};
function fs(t, e) {
  const r = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = r > s ? r : s, i = parseInt(t.toFixed(n).replace(".", "")), a = parseInt(e.toFixed(n).replace(".", ""));
  return i % a / Math.pow(10, n);
}
class Y extends w {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_type, expected: m.number, received: i.parsedType }), _;
    }
    let s;
    const n = new R();
    for (const i of this._def.checks) i.kind === "int" ? S.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), p(s, { code: h.invalid_type, expected: "integer", received: "float", message: i.message }), n.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, exact: false, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, exact: false, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? fs(e.data, i.value) !== 0 && (s = this._getOrReturnCtx(e, s), p(s, { code: h.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), p(s, { code: h.not_finite, message: i.message }), n.dirty()) : S.assertNever(i);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, true, g.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, false, g.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, true, g.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, false, g.toString(r));
  }
  setLimit(e, r, s, n) {
    return new Y({ ...this._def, checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: g.toString(n) }] });
  }
  _addCheck(e) {
    return new Y({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: g.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: g.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: g.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: g.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: g.toString(e) });
  }
  multipleOf(e, r) {
    return this._addCheck({ kind: "multipleOf", value: e, message: g.toString(r) });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: g.toString(e) });
  }
  safe(e) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: g.toString(e) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: g.toString(e) });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && S.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") return true;
      s.kind === "min" ? (r === null || s.value > r) && (r = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Y.create = (t) => new Y({ checks: [], typeName: v.ZodNumber, coerce: (t == null ? void 0 : t.coerce) || false, ...b(t) });
class ee extends w {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== m.bigint) return this._getInvalidInput(e);
    let s;
    const n = new R();
    for (const i of this._def.checks) i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_small, type: "bigint", minimum: i.value, inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_big, type: "bigint", maximum: i.value, inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : S.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    const r = this._getOrReturnCtx(e);
    return p(r, { code: h.invalid_type, expected: m.bigint, received: r.parsedType }), _;
  }
  gte(e, r) {
    return this.setLimit("min", e, true, g.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, false, g.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, true, g.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, false, g.toString(r));
  }
  setLimit(e, r, s, n) {
    return new ee({ ...this._def, checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: g.toString(n) }] });
  }
  _addCheck(e) {
    return new ee({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: g.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: g.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: g.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: g.toString(e) });
  }
  multipleOf(e, r) {
    return this._addCheck({ kind: "multipleOf", value: e, message: g.toString(r) });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
ee.create = (t) => {
  var e;
  return new ee({ checks: [], typeName: v.ZodBigInt, coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false, ...b(t) });
};
class Se extends w {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.boolean, received: s.parsedType }), _;
    }
    return j(e.data);
  }
}
Se.create = (t) => new Se({ typeName: v.ZodBoolean, coerce: (t == null ? void 0 : t.coerce) || false, ...b(t) });
class oe extends w {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_type, expected: m.date, received: i.parsedType }), _;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_date }), _;
    }
    const s = new R();
    let n;
    for (const i of this._def.checks) i.kind === "min" ? e.data.getTime() < i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_small, message: i.message, inclusive: true, exact: false, minimum: i.value, type: "date" }), s.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_big, message: i.message, inclusive: true, exact: false, maximum: i.value, type: "date" }), s.dirty()) : S.assertNever(i);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new oe({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e.getTime(), message: g.toString(r) });
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e.getTime(), message: g.toString(r) });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
oe.create = (t) => new oe({ checks: [], coerce: (t == null ? void 0 : t.coerce) || false, typeName: v.ZodDate, ...b(t) });
class qe extends w {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.symbol, received: s.parsedType }), _;
    }
    return j(e.data);
  }
}
qe.create = (t) => new qe({ typeName: v.ZodSymbol, ...b(t) });
class Pe extends w {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.undefined, received: s.parsedType }), _;
    }
    return j(e.data);
  }
}
Pe.create = (t) => new Pe({ typeName: v.ZodUndefined, ...b(t) });
class Ne extends w {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.null, received: s.parsedType }), _;
    }
    return j(e.data);
  }
}
Ne.create = (t) => new Ne({ typeName: v.ZodNull, ...b(t) });
class ye extends w {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e) {
    return j(e.data);
  }
}
ye.create = (t) => new ye({ typeName: v.ZodAny, ...b(t) });
class ie extends w {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e) {
    return j(e.data);
  }
}
ie.create = (t) => new ie({ typeName: v.ZodUnknown, ...b(t) });
class J extends w {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return p(r, { code: h.invalid_type, expected: m.never, received: r.parsedType }), _;
  }
}
J.create = (t) => new J({ typeName: v.ZodNever, ...b(t) });
class Ge extends w {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.void, received: s.parsedType }), _;
    }
    return j(e.data);
  }
}
Ge.create = (t) => new Ge({ typeName: v.ZodVoid, ...b(t) });
class z extends w {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e), n = this._def;
    if (r.parsedType !== m.array) return p(r, { code: h.invalid_type, expected: m.array, received: r.parsedType }), _;
    if (n.exactLength !== null) {
      const a = r.data.length > n.exactLength.value, o = r.data.length < n.exactLength.value;
      (a || o) && (p(r, { code: a ? h.too_big : h.too_small, minimum: o ? n.exactLength.value : void 0, maximum: a ? n.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: n.exactLength.message }), s.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (p(r, { code: h.too_small, minimum: n.minLength.value, type: "array", inclusive: true, exact: false, message: n.minLength.message }), s.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (p(r, { code: h.too_big, maximum: n.maxLength.value, type: "array", inclusive: true, exact: false, message: n.maxLength.message }), s.dirty()), r.common.async) return Promise.all([...r.data].map((a, o) => n.type._parseAsync(new G(r, a, r.path, o)))).then((a) => R.mergeArray(s, a));
    const i = [...r.data].map((a, o) => n.type._parseSync(new G(r, a, r.path, o)));
    return R.mergeArray(s, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new z({ ...this._def, minLength: { value: e, message: g.toString(r) } });
  }
  max(e, r) {
    return new z({ ...this._def, maxLength: { value: e, message: g.toString(r) } });
  }
  length(e, r) {
    return new z({ ...this._def, exactLength: { value: e, message: g.toString(r) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
z.create = (t, e) => new z({ type: t, minLength: null, maxLength: null, exactLength: null, typeName: v.ZodArray, ...b(e) });
function de(t) {
  if (t instanceof C) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = q.create(de(s));
    }
    return new C({ ...t._def, shape: () => e });
  } else return t instanceof z ? new z({ ...t._def, type: de(t.element) }) : t instanceof q ? q.create(de(t.unwrap())) : t instanceof re ? re.create(de(t.unwrap())) : t instanceof X ? X.create(t.items.map((e) => de(e))) : t;
}
class C extends w {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(), r = S.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const l = this._getOrReturnCtx(e);
      return p(l, { code: h.invalid_type, expected: m.object, received: l.parsedType }), _;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof J && this._def.unknownKeys === "strip")) for (const l in n.data) a.includes(l) || o.push(l);
    const c = [];
    for (const l of a) {
      const u = i[l], y = n.data[l];
      c.push({ key: { status: "valid", value: l }, value: u._parse(new G(n, y, n.path, l)), alwaysSet: l in n.data });
    }
    if (this._def.catchall instanceof J) {
      const l = this._def.unknownKeys;
      if (l === "passthrough") for (const u of o) c.push({ key: { status: "valid", value: u }, value: { status: "valid", value: n.data[u] } });
      else if (l === "strict") o.length > 0 && (p(n, { code: h.unrecognized_keys, keys: o }), s.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of o) {
        const y = n.data[u];
        c.push({ key: { status: "valid", value: u }, value: l._parse(new G(n, y, n.path, u)), alwaysSet: u in n.data });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const y = await u.key, T = await u.value;
        l.push({ key: y, value: T, alwaysSet: u.alwaysSet });
      }
      return l;
    }).then((l) => R.mergeObjectSync(s, l)) : R.mergeObjectSync(s, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return g.errToObj, new C({ ...this._def, unknownKeys: "strict", ...e !== void 0 ? { errorMap: (r, s) => {
      var n, i, a, o;
      const c = (a = (i = (n = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(n, r, s).message) !== null && a !== void 0 ? a : s.defaultError;
      return r.code === "unrecognized_keys" ? { message: (o = g.errToObj(e).message) !== null && o !== void 0 ? o : c } : { message: c };
    } } : {} });
  }
  strip() {
    return new C({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new C({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new C({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
  }
  merge(e) {
    return new C({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => ({ ...this._def.shape(), ...e._def.shape() }), typeName: v.ZodObject });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new C({ ...this._def, catchall: e });
  }
  pick(e) {
    const r = {};
    return S.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (r[s] = this.shape[s]);
    }), new C({ ...this._def, shape: () => r });
  }
  omit(e) {
    const r = {};
    return S.objectKeys(this.shape).forEach((s) => {
      e[s] || (r[s] = this.shape[s]);
    }), new C({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return de(this);
  }
  partial(e) {
    const r = {};
    return S.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? r[s] = n : r[s] = n.optional();
    }), new C({ ...this._def, shape: () => r });
  }
  required(e) {
    const r = {};
    return S.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s]) r[s] = this.shape[s];
      else {
        let i = this.shape[s];
        for (; i instanceof q; ) i = i._def.innerType;
        r[s] = i;
      }
    }), new C({ ...this._def, shape: () => r });
  }
  keyof() {
    return er(S.objectKeys(this.shape));
  }
}
C.create = (t, e) => new C({ shape: () => t, unknownKeys: "strip", catchall: J.create(), typeName: v.ZodObject, ...b(e) });
C.strictCreate = (t, e) => new C({ shape: () => t, unknownKeys: "strict", catchall: J.create(), typeName: v.ZodObject, ...b(e) });
C.lazycreate = (t, e) => new C({ shape: t, unknownKeys: "strip", catchall: J.create(), typeName: v.ZodObject, ...b(e) });
class Ce extends w {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = this._def.options;
    function n(i) {
      for (const o of i) if (o.result.status === "valid") return o.result;
      for (const o of i) if (o.result.status === "dirty") return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Z(o.ctx.common.issues));
      return p(r, { code: h.invalid_union, unionErrors: a }), _;
    }
    if (r.common.async) return Promise.all(s.map(async (i) => {
      const a = { ...r, common: { ...r.common, issues: [] }, parent: null };
      return { result: await i._parseAsync({ data: r.data, path: r.path, parent: a }), ctx: a };
    })).then(n);
    {
      let i;
      const a = [];
      for (const c of s) {
        const l = { ...r, common: { ...r.common, issues: [] }, parent: null }, u = c._parseSync({ data: r.data, path: r.path, parent: l });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (i) return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new Z(c));
      return p(r, { code: h.invalid_union, unionErrors: o }), _;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ce.create = (t, e) => new Ce({ options: t, typeName: v.ZodUnion, ...b(e) });
const K = (t) => t instanceof Oe ? K(t.schema) : t instanceof U ? K(t.innerType()) : t instanceof Ae ? [t.value] : t instanceof te ? t.options : t instanceof Ee ? S.objectValues(t.enum) : t instanceof Re ? K(t._def.innerType) : t instanceof Pe ? [void 0] : t instanceof Ne ? [null] : t instanceof q ? [void 0, ...K(t.unwrap())] : t instanceof re ? [null, ...K(t.unwrap())] : t instanceof wt || t instanceof je ? K(t.unwrap()) : t instanceof De ? K(t._def.innerType) : [];
class Ye extends w {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.object) return p(r, { code: h.invalid_type, expected: m.object, received: r.parsedType }), _;
    const s = this.discriminator, n = r.data[s], i = this.optionsMap.get(n);
    return i ? r.common.async ? i._parseAsync({ data: r.data, path: r.path, parent: r }) : i._parseSync({ data: r.data, path: r.path, parent: r }) : (p(r, { code: h.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s] }), _);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, r, s) {
    const n = /* @__PURE__ */ new Map();
    for (const i of r) {
      const a = K(i.shape[e]);
      if (!a.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (n.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, i);
      }
    }
    return new Ye({ typeName: v.ZodDiscriminatedUnion, discriminator: e, options: r, optionsMap: n, ...b(s) });
  }
}
function mt(t, e) {
  const r = W(t), s = W(e);
  if (t === e) return { valid: true, data: t };
  if (r === m.object && s === m.object) {
    const n = S.objectKeys(e), i = S.objectKeys(t).filter((o) => n.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = mt(t[o], e[o]);
      if (!c.valid) return { valid: false };
      a[o] = c.data;
    }
    return { valid: true, data: a };
  } else if (r === m.array && s === m.array) {
    if (t.length !== e.length) return { valid: false };
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], o = e[i], c = mt(a, o);
      if (!c.valid) return { valid: false };
      n.push(c.data);
    }
    return { valid: true, data: n };
  } else return r === m.date && s === m.date && +t == +e ? { valid: true, data: t } : { valid: false };
}
class Ie extends w {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = (i, a) => {
      if (ft(i) || ft(a)) return _;
      const o = mt(i.value, a.value);
      return o.valid ? ((pt(i) || pt(a)) && r.dirty(), { status: r.value, value: o.data }) : (p(s, { code: h.invalid_intersection_types }), _);
    };
    return s.common.async ? Promise.all([this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }), this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })]).then(([i, a]) => n(i, a)) : n(this._def.left._parseSync({ data: s.data, path: s.path, parent: s }), this._def.right._parseSync({ data: s.data, path: s.path, parent: s }));
  }
}
Ie.create = (t, e, r) => new Ie({ left: t, right: e, typeName: v.ZodIntersection, ...b(r) });
class X extends w {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.array) return p(s, { code: h.invalid_type, expected: m.array, received: s.parsedType }), _;
    if (s.data.length < this._def.items.length) return p(s, { code: h.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), _;
    !this._def.rest && s.data.length > this._def.items.length && (p(s, { code: h.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), r.dirty());
    const i = [...s.data].map((a, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new G(s, a, s.path, o)) : null;
    }).filter((a) => !!a);
    return s.common.async ? Promise.all(i).then((a) => R.mergeArray(r, a)) : R.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new X({ ...this._def, rest: e });
  }
}
X.create = (t, e) => {
  if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new X({ items: t, typeName: v.ZodTuple, rest: null, ...b(e) });
};
class ke extends w {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.object) return p(s, { code: h.invalid_type, expected: m.object, received: s.parsedType }), _;
    const n = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in s.data) n.push({ key: i._parse(new G(s, o, s.path, o)), value: a._parse(new G(s, s.data[o], s.path, o)), alwaysSet: o in s.data });
    return s.common.async ? R.mergeObjectAsync(r, n) : R.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, s) {
    return r instanceof w ? new ke({ keyType: e, valueType: r, typeName: v.ZodRecord, ...b(s) }) : new ke({ keyType: F.create(), valueType: e, typeName: v.ZodRecord, ...b(r) });
  }
}
class Xe extends w {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.map) return p(s, { code: h.invalid_type, expected: m.map, received: s.parsedType }), _;
    const n = this._def.keyType, i = this._def.valueType, a = [...s.data.entries()].map(([o, c], l) => ({ key: n._parse(new G(s, o, s.path, [l, "key"])), value: i._parse(new G(s, c, s.path, [l, "value"])) }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted") return _;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(l.value, u.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted") return _;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(l.value, u.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Xe.create = (t, e, r) => new Xe({ valueType: e, keyType: t, typeName: v.ZodMap, ...b(r) });
class ue extends w {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.set) return p(s, { code: h.invalid_type, expected: m.set, received: s.parsedType }), _;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (p(s, { code: h.too_small, minimum: n.minSize.value, type: "set", inclusive: true, exact: false, message: n.minSize.message }), r.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (p(s, { code: h.too_big, maximum: n.maxSize.value, type: "set", inclusive: true, exact: false, message: n.maxSize.message }), r.dirty());
    const i = this._def.valueType;
    function a(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted") return _;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...s.data.values()].map((c, l) => i._parse(new G(s, c, s.path, l)));
    return s.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new ue({ ...this._def, minSize: { value: e, message: g.toString(r) } });
  }
  max(e, r) {
    return new ue({ ...this._def, maxSize: { value: e, message: g.toString(r) } });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ue.create = (t, e) => new ue({ valueType: t, minSize: null, maxSize: null, typeName: v.ZodSet, ...b(e) });
class fe extends w {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.function) return p(r, { code: h.invalid_type, expected: m.function, received: r.parsedType }), _;
    function s(o, c) {
      return $e({ data: o, path: r.path, errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Ue(), ge].filter((l) => !!l), issueData: { code: h.invalid_arguments, argumentsError: c } });
    }
    function n(o, c) {
      return $e({ data: o, path: r.path, errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Ue(), ge].filter((l) => !!l), issueData: { code: h.invalid_return_type, returnTypeError: c } });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    if (this._def.returns instanceof ve) {
      const o = this;
      return j(async function(...c) {
        const l = new Z([]), u = await o._def.args.parseAsync(c, i).catch((V) => {
          throw l.addIssue(s(c, V)), l;
        }), y = await Reflect.apply(a, this, u);
        return await o._def.returns._def.type.parseAsync(y, i).catch((V) => {
          throw l.addIssue(n(y, V)), l;
        });
      });
    } else {
      const o = this;
      return j(function(...c) {
        const l = o._def.args.safeParse(c, i);
        if (!l.success) throw new Z([s(c, l.error)]);
        const u = Reflect.apply(a, this, l.data), y = o._def.returns.safeParse(u, i);
        if (!y.success) throw new Z([n(u, y.error)]);
        return y.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new fe({ ...this._def, args: X.create(e).rest(ie.create()) });
  }
  returns(e) {
    return new fe({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, s) {
    return new fe({ args: e || X.create([]).rest(ie.create()), returns: r || ie.create(), typeName: v.ZodFunction, ...b(s) });
  }
}
class Oe extends w {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Oe.create = (t, e) => new Oe({ getter: t, typeName: v.ZodLazy, ...b(e) });
class Ae extends w {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return p(r, { received: r.data, code: h.invalid_literal, expected: this._def.value }), _;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ae.create = (t, e) => new Ae({ value: t, typeName: v.ZodLiteral, ...b(e) });
function er(t, e) {
  return new te({ values: t, typeName: v.ZodEnum, ...b(e) });
}
class te extends w {
  constructor() {
    super(...arguments), xe.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return p(r, { expected: S.joinValues(s), received: r.parsedType, code: h.invalid_type }), _;
    }
    if (Qe(this, xe) || Wt(this, xe, new Set(this._def.values)), !Qe(this, xe).has(e.data)) {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return p(r, { received: r.data, code: h.invalid_enum_value, options: s }), _;
    }
    return j(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return te.create(e, { ...this._def, ...r });
  }
  exclude(e, r = this._def) {
    return te.create(this.options.filter((s) => !e.includes(s)), { ...this._def, ...r });
  }
}
xe = /* @__PURE__ */ new WeakMap();
te.create = er;
class Ee extends w {
  constructor() {
    super(...arguments), we.set(this, void 0);
  }
  _parse(e) {
    const r = S.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== m.string && s.parsedType !== m.number) {
      const n = S.objectValues(r);
      return p(s, { expected: S.joinValues(n), received: s.parsedType, code: h.invalid_type }), _;
    }
    if (Qe(this, we) || Wt(this, we, new Set(S.getValidEnumValues(this._def.values))), !Qe(this, we).has(e.data)) {
      const n = S.objectValues(r);
      return p(s, { received: s.data, code: h.invalid_enum_value, options: n }), _;
    }
    return j(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
we = /* @__PURE__ */ new WeakMap();
Ee.create = (t, e) => new Ee({ values: t, typeName: v.ZodNativeEnum, ...b(e) });
class ve extends w {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.promise && r.common.async === false) return p(r, { code: h.invalid_type, expected: m.promise, received: r.parsedType }), _;
    const s = r.parsedType === m.promise ? r.data : Promise.resolve(r.data);
    return j(s.then((n) => this._def.type.parseAsync(n, { path: r.path, errorMap: r.common.contextualErrorMap })));
  }
}
ve.create = (t, e) => new ve({ type: t, typeName: v.ZodPromise, ...b(e) });
class U extends w {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === v.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = this._def.effect || null, i = { addIssue: (a) => {
      p(s, a), a.fatal ? r.abort() : r.dirty();
    }, get path() {
      return s.path;
    } };
    if (i.addIssue = i.addIssue.bind(i), n.type === "preprocess") {
      const a = n.transform(s.data, i);
      if (s.common.async) return Promise.resolve(a).then(async (o) => {
        if (r.value === "aborted") return _;
        const c = await this._def.schema._parseAsync({ data: o, path: s.path, parent: s });
        return c.status === "aborted" ? _ : c.status === "dirty" || r.value === "dirty" ? he(c.value) : c;
      });
      {
        if (r.value === "aborted") return _;
        const o = this._def.schema._parseSync({ data: a, path: s.path, parent: s });
        return o.status === "aborted" ? _ : o.status === "dirty" || r.value === "dirty" ? he(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const a = (o) => {
        const c = n.refinement(o, i);
        if (s.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === false) {
        const o = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return o.status === "aborted" ? _ : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? _ : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (n.type === "transform") if (s.common.async === false) {
      const a = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
      if (!ae(a)) return a;
      const o = n.transform(a.value, i);
      if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: r.value, value: o };
    } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((a) => ae(a) ? Promise.resolve(n.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    S.assertNever(n);
  }
}
U.create = (t, e, r) => new U({ schema: t, typeName: v.ZodEffects, effect: e, ...b(r) });
U.createWithPreprocess = (t, e, r) => new U({ schema: e, effect: { type: "preprocess", transform: t }, typeName: v.ZodEffects, ...b(r) });
class q extends w {
  _parse(e) {
    return this._getType(e) === m.undefined ? j(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
q.create = (t, e) => new q({ innerType: t, typeName: v.ZodOptional, ...b(e) });
class re extends w {
  _parse(e) {
    return this._getType(e) === m.null ? j(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
re.create = (t, e) => new re({ innerType: t, typeName: v.ZodNullable, ...b(e) });
class Re extends w {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let s = r.data;
    return r.parsedType === m.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({ data: s, path: r.path, parent: r });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Re.create = (t, e) => new Re({ innerType: t, typeName: v.ZodDefault, defaultValue: typeof e.default == "function" ? e.default : () => e.default, ...b(e) });
class De extends w {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = { ...r, common: { ...r.common, issues: [] } }, n = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return Te(n) ? n.then((i) => ({ status: "valid", value: i.status === "valid" ? i.value : this._def.catchValue({ get error() {
      return new Z(s.common.issues);
    }, input: s.data }) })) : { status: "valid", value: n.status === "valid" ? n.value : this._def.catchValue({ get error() {
      return new Z(s.common.issues);
    }, input: s.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
De.create = (t, e) => new De({ innerType: t, typeName: v.ZodCatch, catchValue: typeof e.catch == "function" ? e.catch : () => e.catch, ...b(e) });
class Ke extends w {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.nan, received: s.parsedType }), _;
    }
    return { status: "valid", value: e.data };
  }
}
Ke.create = (t) => new Ke({ typeName: v.ZodNaN, ...b(t) });
const ps = Symbol("zod_brand");
class wt extends w {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = r.data;
    return this._def.type._parse({ data: s, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class Me extends w {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.common.async) return (async () => {
      const i = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
      return i.status === "aborted" ? _ : i.status === "dirty" ? (r.dirty(), he(i.value)) : this._def.out._parseAsync({ data: i.value, path: s.path, parent: s });
    })();
    {
      const n = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return n.status === "aborted" ? _ : n.status === "dirty" ? (r.dirty(), { status: "dirty", value: n.value }) : this._def.out._parseSync({ data: n.value, path: s.path, parent: s });
    }
  }
  static create(e, r) {
    return new Me({ in: e, out: r, typeName: v.ZodPipeline });
  }
}
class je extends w {
  _parse(e) {
    const r = this._def.innerType._parse(e), s = (n) => (ae(n) && (n.value = Object.freeze(n.value)), n);
    return Te(r) ? r.then((n) => s(n)) : s(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
je.create = (t, e) => new je({ innerType: t, typeName: v.ZodReadonly, ...b(e) });
function Bt(t, e) {
  const r = typeof t == "function" ? t(e) : typeof t == "string" ? { message: t } : t;
  return typeof r == "string" ? { message: r } : r;
}
function tr(t, e = {}, r) {
  return t ? ye.create().superRefine((s, n) => {
    var i, a;
    const o = t(s);
    if (o instanceof Promise) return o.then((c) => {
      var l, u;
      if (!c) {
        const y = Bt(e, s), T = (u = (l = y.fatal) !== null && l !== void 0 ? l : r) !== null && u !== void 0 ? u : true;
        n.addIssue({ code: "custom", ...y, fatal: T });
      }
    });
    if (!o) {
      const c = Bt(e, s), l = (a = (i = c.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : true;
      n.addIssue({ code: "custom", ...c, fatal: l });
    }
  }) : ye.create();
}
const ms = { object: C.lazycreate };
var v;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(v || (v = {}));
const gs = (t, e = { message: `Input not instance of ${t.name}` }) => tr((r) => r instanceof t, e), rr = F.create, sr = Y.create, ys = Ke.create, vs = ee.create, nr = Se.create, _s = oe.create, bs = qe.create, xs = Pe.create, ws = Ne.create, Ts = ye.create, Ss = ie.create, Ps = J.create, Ns = Ge.create, Cs = z.create, Is = C.create, ks = C.strictCreate, Os = Ce.create, As = Ye.create, Es = Ie.create, Rs = X.create, Ds = ke.create, js = Xe.create, Bs = ue.create, Vs = fe.create, Ms = Oe.create, Zs = Ae.create, Ls = te.create, Fs = Ee.create, zs = ve.create, Vt = U.create, Us = q.create, $s = re.create, Qs = U.createWithPreprocess, qs = Me.create, Gs = () => rr().optional(), Xs = () => sr().optional(), Ks = () => nr().optional(), Ws = { string: (t) => F.create({ ...t, coerce: true }), number: (t) => Y.create({ ...t, coerce: true }), boolean: (t) => Se.create({ ...t, coerce: true }), bigint: (t) => ee.create({ ...t, coerce: true }), date: (t) => oe.create({ ...t, coerce: true }) }, Js = _;
var f = Object.freeze({ __proto__: null, defaultErrorMap: ge, setErrorMap: Qr, getErrorMap: Ue, makeIssue: $e, EMPTY_PATH: qr, addIssueToContext: p, ParseStatus: R, INVALID: _, DIRTY: he, OK: j, isAborted: ft, isDirty: pt, isValid: ae, isAsync: Te, get util() {
  return S;
}, get objectUtil() {
  return ht;
}, ZodParsedType: m, getParsedType: W, ZodType: w, datetimeRegex: Yt, ZodString: F, ZodNumber: Y, ZodBigInt: ee, ZodBoolean: Se, ZodDate: oe, ZodSymbol: qe, ZodUndefined: Pe, ZodNull: Ne, ZodAny: ye, ZodUnknown: ie, ZodNever: J, ZodVoid: Ge, ZodArray: z, ZodObject: C, ZodUnion: Ce, ZodDiscriminatedUnion: Ye, ZodIntersection: Ie, ZodTuple: X, ZodRecord: ke, ZodMap: Xe, ZodSet: ue, ZodFunction: fe, ZodLazy: Oe, ZodLiteral: Ae, ZodEnum: te, ZodNativeEnum: Ee, ZodPromise: ve, ZodEffects: U, ZodTransformer: U, ZodOptional: q, ZodNullable: re, ZodDefault: Re, ZodCatch: De, ZodNaN: Ke, BRAND: ps, ZodBranded: wt, ZodPipeline: Me, ZodReadonly: je, custom: tr, Schema: w, ZodSchema: w, late: ms, get ZodFirstPartyTypeKind() {
  return v;
}, coerce: Ws, any: Ts, array: Cs, bigint: vs, boolean: nr, date: _s, discriminatedUnion: As, effect: Vt, enum: Ls, function: Vs, instanceof: gs, intersection: Es, lazy: Ms, literal: Zs, map: js, nan: ys, nativeEnum: Fs, never: Ps, null: ws, nullable: $s, number: sr, object: Is, oboolean: Ks, onumber: Xs, optional: Us, ostring: Gs, pipeline: qs, preprocess: Qs, promise: zs, record: Ds, set: Bs, strictObject: ks, string: rr, symbol: bs, transformer: Vt, tuple: Rs, undefined: xs, union: Os, unknown: Ss, void: Ns, NEVER: Js, ZodIssueCode: h, quotelessJson: $r, ZodError: Z });
const d = Symbol.for("drizzle:entityKind");
function E(t, e) {
  if (!t || typeof t != "object") return false;
  if (t instanceof e) return true;
  if (!Object.prototype.hasOwnProperty.call(e, d)) throw new Error(`Class "${e.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  let r = Object.getPrototypeOf(t).constructor;
  if (r) for (; r; ) {
    if (d in r && r[d] === e[d]) return true;
    r = Object.getPrototypeOf(r);
  }
  return false;
}
_c2 = d;
class Be {
  constructor(e, r) {
    __publicField(this, "name");
    __publicField(this, "keyAsName");
    __publicField(this, "primary");
    __publicField(this, "notNull");
    __publicField(this, "default");
    __publicField(this, "defaultFn");
    __publicField(this, "onUpdateFn");
    __publicField(this, "hasDefault");
    __publicField(this, "isUnique");
    __publicField(this, "uniqueName");
    __publicField(this, "uniqueType");
    __publicField(this, "dataType");
    __publicField(this, "columnType");
    __publicField(this, "enumValues");
    __publicField(this, "generated");
    __publicField(this, "generatedIdentity");
    __publicField(this, "config");
    this.table = e, this.config = r, this.name = r.name, this.keyAsName = r.keyAsName, this.notNull = r.notNull, this.default = r.default, this.defaultFn = r.defaultFn, this.onUpdateFn = r.onUpdateFn, this.hasDefault = r.hasDefault, this.primary = r.primaryKey, this.isUnique = r.isUnique, this.uniqueName = r.uniqueName, this.uniqueType = r.uniqueType, this.dataType = r.dataType, this.columnType = r.columnType, this.generated = r.generated, this.generatedIdentity = r.generatedIdentity;
  }
  mapFromDriverValue(e) {
    return e;
  }
  mapToDriverValue(e) {
    return e;
  }
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
}
__publicField(Be, _c2, "Column");
_d = d;
class Hs {
  constructor(e, r, s) {
    __publicField(this, "config");
    __publicField(this, "$default", this.$defaultFn);
    __publicField(this, "$onUpdate", this.$onUpdateFn);
    this.config = { name: e, keyAsName: e === "", notNull: false, default: void 0, hasDefault: false, primaryKey: false, isUnique: false, uniqueName: void 0, uniqueType: void 0, dataType: r, columnType: s, generated: void 0 };
  }
  $type() {
    return this;
  }
  notNull() {
    return this.config.notNull = true, this;
  }
  default(e) {
    return this.config.default = e, this.config.hasDefault = true, this;
  }
  $defaultFn(e) {
    return this.config.defaultFn = e, this.config.hasDefault = true, this;
  }
  $onUpdateFn(e) {
    return this.config.onUpdateFn = e, this.config.hasDefault = true, this;
  }
  primaryKey() {
    return this.config.primaryKey = true, this.config.notNull = true, this;
  }
  setName(e) {
    this.config.name === "" && (this.config.name = e);
  }
}
__publicField(Hs, _d, "ColumnBuilder");
const pe = Symbol.for("drizzle:Name");
_e4 = d;
class Ys {
  constructor(e, r) {
    __publicField(this, "reference");
    __publicField(this, "_onUpdate", "no action");
    __publicField(this, "_onDelete", "no action");
    this.reference = () => {
      const { name: s, columns: n, foreignColumns: i } = e();
      return { name: s, columns: n, foreignTable: i[0].table, foreignColumns: i };
    }, r && (this._onUpdate = r.onUpdate, this._onDelete = r.onDelete);
  }
  onUpdate(e) {
    return this._onUpdate = e === void 0 ? "no action" : e, this;
  }
  onDelete(e) {
    return this._onDelete = e === void 0 ? "no action" : e, this;
  }
  build(e) {
    return new en(e, this);
  }
}
__publicField(Ys, _e4, "PgForeignKeyBuilder");
_f2 = d;
class en {
  constructor(e, r) {
    __publicField(this, "reference");
    __publicField(this, "onUpdate");
    __publicField(this, "onDelete");
    this.table = e, this.reference = r.reference, this.onUpdate = r._onUpdate, this.onDelete = r._onDelete;
  }
  getName() {
    const { name: e, columns: r, foreignColumns: s } = this.reference(), n = r.map((o) => o.name), i = s.map((o) => o.name), a = [this.table[pe], ...n, s[0].table[pe], ...i];
    return e ?? `${a.join("_")}_fk`;
  }
}
__publicField(en, _f2, "PgForeignKey");
function tn(t, ...e) {
  return t(...e);
}
function rn(t, e) {
  return `${t[pe]}_${e.join("_")}_unique`;
}
function Mt(t, e, r) {
  for (let s = e; s < t.length; s++) {
    const n = t[s];
    if (n === "\\") {
      s++;
      continue;
    }
    if (n === '"') return [t.slice(e, s).replace(/\\/g, ""), s + 1];
    if (!r && (n === "," || n === "}")) return [t.slice(e, s).replace(/\\/g, ""), s];
  }
  return [t.slice(e).replace(/\\/g, ""), t.length];
}
function ir(t, e = 0) {
  const r = [];
  let s = e, n = false;
  for (; s < t.length; ) {
    const i = t[s];
    if (i === ",") {
      (n || s === e) && r.push(""), n = true, s++;
      continue;
    }
    if (n = false, i === "\\") {
      s += 2;
      continue;
    }
    if (i === '"') {
      const [c, l] = Mt(t, s + 1, true);
      r.push(c), s = l;
      continue;
    }
    if (i === "}") return [r, s + 1];
    if (i === "{") {
      const [c, l] = ir(t, s + 1);
      r.push(c), s = l;
      continue;
    }
    const [a, o] = Mt(t, s, false);
    r.push(a), s = o;
  }
  return [r, s];
}
function sn(t) {
  const [e] = ir(t, 1);
  return e;
}
function ar(t) {
  return `{${t.map((e) => Array.isArray(e) ? ar(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`;
}
class P extends (_h2 = Hs, _g = d, _h2) {
  constructor() {
    super(...arguments);
    __publicField(this, "foreignKeyConfigs", []);
  }
  array(e) {
    return new an(this.config.name, this, e);
  }
  references(e, r = {}) {
    return this.foreignKeyConfigs.push({ ref: e, actions: r }), this;
  }
  unique(e, r) {
    return this.config.isUnique = true, this.config.uniqueName = e, this.config.uniqueType = r == null ? void 0 : r.nulls, this;
  }
  generatedAlwaysAs(e) {
    return this.config.generated = { as: e, type: "always", mode: "stored" }, this;
  }
  buildForeignKeys(e, r) {
    return this.foreignKeyConfigs.map(({ ref: s, actions: n }) => tn((i, a) => {
      const o = new Ys(() => {
        const c = i();
        return { columns: [e], foreignColumns: [c] };
      });
      return a.onUpdate && o.onUpdate(a.onUpdate), a.onDelete && o.onDelete(a.onDelete), o.build(r);
    }, s, n));
  }
  buildExtraConfigColumn(e) {
    return new nn(e, this.config);
  }
}
__publicField(P, _g, "PgColumnBuilder");
class x extends (_j = Be, _i3 = d, _j) {
  constructor(e, r) {
    r.uniqueName || (r.uniqueName = rn(e, [r.name])), super(e, r), this.table = e;
  }
}
__publicField(x, _i3, "PgColumn");
class nn extends (_l2 = x, _k = d, _l2) {
  constructor() {
    super(...arguments);
    __publicField(this, "indexConfig", { order: this.config.order ?? "asc", nulls: this.config.nulls ?? "last", opClass: this.config.opClass });
    __publicField(this, "defaultConfig", { order: "asc", nulls: "last", opClass: void 0 });
  }
  getSQLType() {
    return this.getSQLType();
  }
  asc() {
    return this.indexConfig.order = "asc", this;
  }
  desc() {
    return this.indexConfig.order = "desc", this;
  }
  nullsFirst() {
    return this.indexConfig.nulls = "first", this;
  }
  nullsLast() {
    return this.indexConfig.nulls = "last", this;
  }
  op(e) {
    return this.indexConfig.opClass = e, this;
  }
}
__publicField(nn, _k, "ExtraConfigColumn");
class an extends (_n3 = P, _m2 = d, _n3) {
  constructor(e, r, s) {
    super(e, "array", "PgArray"), this.config.baseBuilder = r, this.config.size = s;
  }
  build(e) {
    const r = this.config.baseBuilder.build(e);
    return new Tt(e, this.config, r);
  }
}
__publicField(an, _m2, "PgArrayBuilder");
const _Tt = class _Tt extends (_p2 = x, _o2 = d, _p2) {
  constructor(e, r, s, n) {
    super(e, r);
    __publicField(this, "size");
    this.baseColumn = s, this.range = n, this.size = r.size;
  }
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(e) {
    return typeof e == "string" && (e = sn(e)), e.map((r) => this.baseColumn.mapFromDriverValue(r));
  }
  mapToDriverValue(e, r = false) {
    const s = e.map((n) => n === null ? null : E(this.baseColumn, _Tt) ? this.baseColumn.mapToDriverValue(n, true) : this.baseColumn.mapToDriverValue(n));
    return r ? s : ar(s);
  }
};
__publicField(_Tt, _o2, "PgArray");
let Tt = _Tt;
const Zt = Symbol.for("drizzle:isPgEnum");
function on(t) {
  return !!t && typeof t == "function" && Zt in t && t[Zt] === true;
}
_q = d;
class or {
  constructor(e, r, s, n = false) {
    this._ = { brand: "Subquery", sql: e, selectedFields: r, alias: s, isWith: n };
  }
}
__publicField(or, _q, "Subquery");
const un = { startActiveSpan(t, e) {
  return e();
} }, me = Symbol.for("drizzle:ViewBaseConfig"), at = Symbol.for("drizzle:Schema"), Lt = Symbol.for("drizzle:Columns"), Ft = Symbol.for("drizzle:ExtraConfigColumns"), ot = Symbol.for("drizzle:OriginalName"), ut = Symbol.for("drizzle:BaseName"), We = Symbol.for("drizzle:IsAlias"), zt = Symbol.for("drizzle:ExtraConfigBuilder"), ur = Symbol.for("drizzle:IsDrizzleTable");
_A = d, _z = pe, _y = ot, _x = at, _w = Lt, _v = Ft, _u2 = ut, _t4 = We, _s4 = ur, _r4 = zt;
class M {
  constructor(e, r, s) {
    __publicField(this, _z);
    __publicField(this, _y);
    __publicField(this, _x);
    __publicField(this, _w);
    __publicField(this, _v);
    __publicField(this, _u2);
    __publicField(this, _t4, false);
    __publicField(this, _s4, true);
    __publicField(this, _r4);
    this[pe] = this[ot] = e, this[at] = r, this[ut] = s;
  }
}
__publicField(M, _A, "Table");
__publicField(M, "Symbol", { Name: pe, Schema: at, OriginalName: ot, Columns: Lt, ExtraConfigColumns: Ft, BaseName: ut, IsAlias: We, ExtraConfigBuilder: zt });
function cr(t) {
  return typeof t == "object" && t !== null && ur in t;
}
function cn(t) {
  return t != null && typeof t.getSQL == "function";
}
function ln(t) {
  var _a4;
  const e = { sql: "", params: [] };
  for (const r of t) e.sql += r.sql, e.params.push(...r.params), ((_a4 = r.typings) == null ? void 0 : _a4.length) && (e.typings || (e.typings = []), e.typings.push(...r.typings));
  return e;
}
_B = d;
class L {
  constructor(e) {
    __publicField(this, "value");
    this.value = Array.isArray(e) ? e : [e];
  }
  getSQL() {
    return new I([this]);
  }
}
__publicField(L, _B, "StringChunk");
_C = d;
const _I = class _I {
  constructor(e) {
    __publicField(this, "decoder", lr);
    __publicField(this, "shouldInlineParams", false);
    this.queryChunks = e;
  }
  append(e) {
    return this.queryChunks.push(...e.queryChunks), this;
  }
  toQuery(e) {
    return un.startActiveSpan("drizzle.buildSQL", (r) => {
      const s = this.buildQueryFromSourceParams(this.queryChunks, e);
      return r == null ? void 0 : r.setAttributes({ "drizzle.query.text": s.sql, "drizzle.query.params": JSON.stringify(s.params) }), s;
    });
  }
  buildQueryFromSourceParams(e, r) {
    const s = Object.assign({}, r, { inlineParams: r.inlineParams || this.shouldInlineParams, paramStartIndex: r.paramStartIndex || { value: 0 } }), { casing: n, escapeName: i, escapeParam: a, prepareTyping: o, inlineParams: c, paramStartIndex: l } = s;
    return ln(e.map((u) => {
      var _a4;
      if (E(u, L)) return { sql: u.value.join(""), params: [] };
      if (E(u, gt)) return { sql: i(u.value), params: [] };
      if (u === void 0) return { sql: "", params: [] };
      if (Array.isArray(u)) {
        const y = [new L("(")];
        for (const [T, V] of u.entries()) y.push(V), T < u.length - 1 && y.push(new L(", "));
        return y.push(new L(")")), this.buildQueryFromSourceParams(y, s);
      }
      if (E(u, _I)) return this.buildQueryFromSourceParams(u.queryChunks, { ...s, inlineParams: c || u.shouldInlineParams });
      if (E(u, M)) {
        const y = u[M.Symbol.Schema], T = u[M.Symbol.Name];
        return { sql: y === void 0 || u[We] ? i(T) : i(y) + "." + i(T), params: [] };
      }
      if (E(u, Be)) {
        const y = n.getColumnCasing(u);
        if (r.invokeSource === "indexes") return { sql: i(y), params: [] };
        const T = u.table[M.Symbol.Schema];
        return { sql: u.table[We] || T === void 0 ? i(u.table[M.Symbol.Name]) + "." + i(y) : i(T) + "." + i(u.table[M.Symbol.Name]) + "." + i(y), params: [] };
      }
      if (E(u, dn)) {
        const y = u[me].schema, T = u[me].name;
        return { sql: y === void 0 || u[me].isAlias ? i(T) : i(y) + "." + i(T), params: [] };
      }
      if (E(u, hr)) {
        if (E(u.value, yt)) return { sql: a(l.value++, u), params: [u], typings: ["none"] };
        const y = u.value === null ? null : u.encoder.mapToDriverValue(u.value);
        if (E(y, _I)) return this.buildQueryFromSourceParams([y], s);
        if (c) return { sql: this.mapInlineParam(y, s), params: [] };
        let T = ["none"];
        return o && (T = [o(u.encoder)]), { sql: a(l.value++, y), params: [y], typings: T };
      }
      return E(u, yt) ? { sql: a(l.value++, u), params: [u], typings: ["none"] } : E(u, _I.Aliased) && u.fieldAlias !== void 0 ? { sql: i(u.fieldAlias), params: [] } : E(u, or) ? u._.isWith ? { sql: i(u._.alias), params: [] } : this.buildQueryFromSourceParams([new L("("), u._.sql, new L(") "), new gt(u._.alias)], s) : on(u) ? u.schema ? { sql: i(u.schema) + "." + i(u.enumName), params: [] } : { sql: i(u.enumName), params: [] } : cn(u) ? ((_a4 = u.shouldOmitSQLParens) == null ? void 0 : _a4.call(u)) ? this.buildQueryFromSourceParams([u.getSQL()], s) : this.buildQueryFromSourceParams([new L("("), u.getSQL(), new L(")")], s) : c ? { sql: this.mapInlineParam(u, s), params: [] } : { sql: a(l.value++, u), params: [u], typings: ["none"] };
    }));
  }
  mapInlineParam(e, { escapeString: r }) {
    if (e === null) return "null";
    if (typeof e == "number" || typeof e == "boolean") return e.toString();
    if (typeof e == "string") return r(e);
    if (typeof e == "object") {
      const s = e.toString();
      return r(s === "[object Object]" ? JSON.stringify(e) : s);
    }
    throw new Error("Unexpected param value: " + e);
  }
  getSQL() {
    return this;
  }
  as(e) {
    return e === void 0 ? this : new _I.Aliased(this, e);
  }
  mapWith(e) {
    return this.decoder = typeof e == "function" ? { mapFromDriverValue: e } : e, this;
  }
  inlineParams() {
    return this.shouldInlineParams = true, this;
  }
  if(e) {
    return e ? this : void 0;
  }
};
__publicField(_I, _C, "SQL");
let I = _I;
_D = d;
class gt {
  constructor(e) {
    __publicField(this, "brand");
    this.value = e;
  }
  getSQL() {
    return new I([this]);
  }
}
__publicField(gt, _D, "Name");
const lr = { mapFromDriverValue: (t) => t }, dr = { mapToDriverValue: (t) => t };
({ ...lr, ...dr });
_E = d;
class hr {
  constructor(e, r = dr) {
    __publicField(this, "brand");
    this.value = e, this.encoder = r;
  }
  getSQL() {
    return new I([this]);
  }
}
__publicField(hr, _E, "Param");
function Je(t, ...e) {
  const r = [];
  (e.length > 0 || t.length > 0 && t[0] !== "") && r.push(new L(t[0]));
  for (const [s, n] of e.entries()) r.push(n, new L(t[s + 1]));
  return new I(r);
}
((t) => {
  function e() {
    return new I([]);
  }
  t.empty = e;
  function r(c) {
    return new I(c);
  }
  t.fromList = r;
  function s(c) {
    return new I([new L(c)]);
  }
  t.raw = s;
  function n(c, l) {
    const u = [];
    for (const [y, T] of c.entries()) y > 0 && l !== void 0 && u.push(l), u.push(T);
    return new I(u);
  }
  t.join = n;
  function i(c) {
    return new gt(c);
  }
  t.identifier = i;
  function a(c) {
    return new yt(c);
  }
  t.placeholder = a;
  function o(c, l) {
    return new hr(c, l);
  }
  t.param = o;
})(Je || (Je = {}));
((t) => {
  var _a4;
  _a4 = d;
  const _e5 = class _e5 {
    constructor(s, n) {
      __publicField(this, "isSelectionField", false);
      this.sql = s, this.fieldAlias = n;
    }
    getSQL() {
      return this.sql;
    }
    clone() {
      return new _e5(this.sql, this.fieldAlias);
    }
  };
  __publicField(_e5, _a4, "SQL.Aliased");
  let e = _e5;
  t.Aliased = e;
})(I || (I = {}));
_F = d;
class yt {
  constructor(e) {
    this.name = e;
  }
  getSQL() {
    return new I([this]);
  }
}
__publicField(yt, _F, "Placeholder");
const fr = Symbol.for("drizzle:IsDrizzleView");
_I2 = d, _H = me, _G = fr;
class dn {
  constructor({ name: e, schema: r, selectedFields: s, query: n }) {
    __publicField(this, _H);
    __publicField(this, _G, true);
    this[me] = { name: e, originalName: e, schema: r, selectedFields: s, query: n, isExisting: !n, isAlias: false };
  }
  getSQL() {
    return new I([this]);
  }
}
__publicField(dn, _I2, "View");
function hn(t) {
  return typeof t == "object" && t !== null && fr in t;
}
Be.prototype.getSQL = function() {
  return new I([this]);
};
M.prototype.getSQL = function() {
  return new I([this]);
};
or.prototype.getSQL = function() {
  return new I([this]);
};
function fn(t) {
  return t[M.Symbol.Columns];
}
function pn(t) {
  return t[me].selectedFields;
}
function A(t, e) {
  return { name: typeof t == "string" && t.length > 0 ? t : "", config: typeof t == "object" ? t : e };
}
class et extends (_K = P, _J = d, _K) {
  generatedAlwaysAsIdentity(e) {
    if (e) {
      const { name: r, ...s } = e;
      this.config.generatedIdentity = { type: "always", sequenceName: r, sequenceOptions: s };
    } else this.config.generatedIdentity = { type: "always" };
    return this.config.hasDefault = true, this.config.notNull = true, this;
  }
  generatedByDefaultAsIdentity(e) {
    if (e) {
      const { name: r, ...s } = e;
      this.config.generatedIdentity = { type: "byDefault", sequenceName: r, sequenceOptions: s };
    } else this.config.generatedIdentity = { type: "byDefault" };
    return this.config.hasDefault = true, this.config.notNull = true, this;
  }
}
__publicField(et, _J, "PgIntColumnBaseBuilder");
class mn extends (_M = et, _L = d, _M) {
  constructor(e) {
    super(e, "number", "PgBigInt53");
  }
  build(e) {
    return new gn(e, this.config);
  }
}
__publicField(mn, _L, "PgBigInt53Builder");
class gn extends (_O = x, _N = d, _O) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
__publicField(gn, _N, "PgBigInt53");
class yn extends (_Q = et, _P = d, _Q) {
  constructor(e) {
    super(e, "bigint", "PgBigInt64");
  }
  build(e) {
    return new vn(e, this.config);
  }
}
__publicField(yn, _P, "PgBigInt64Builder");
class vn extends (_S = x, _R = d, _S) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
__publicField(vn, _R, "PgBigInt64");
function _n(t, e) {
  const { name: r, config: s } = A(t, e);
  return s.mode === "number" ? new mn(r) : new yn(r);
}
class bn extends (_U = P, _T = d, _U) {
  constructor(e) {
    super(e, "number", "PgBigSerial53"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(e) {
    return new xn(e, this.config);
  }
}
__publicField(bn, _T, "PgBigSerial53Builder");
class xn extends (_W = x, _V = d, _W) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
__publicField(xn, _V, "PgBigSerial53");
class wn extends (_Y = P, _X = d, _Y) {
  constructor(e) {
    super(e, "bigint", "PgBigSerial64"), this.config.hasDefault = true;
  }
  build(e) {
    return new Tn(e, this.config);
  }
}
__publicField(wn, _X, "PgBigSerial64Builder");
class Tn extends (__ = x, _Z = d, __) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
__publicField(Tn, _Z, "PgBigSerial64");
function Sn(t, e) {
  const { name: r, config: s } = A(t, e);
  return s.mode === "number" ? new bn(r) : new wn(r);
}
class Pn extends (_aa = P, _$ = d, _aa) {
  constructor(e) {
    super(e, "boolean", "PgBoolean");
  }
  build(e) {
    return new Nn(e, this.config);
  }
}
__publicField(Pn, _$, "PgBooleanBuilder");
class Nn extends (_ca = x, _ba = d, _ca) {
  getSQLType() {
    return "boolean";
  }
}
__publicField(Nn, _ba, "PgBoolean");
function tt(t) {
  return new Pn(t ?? "");
}
class Cn extends (_ea = P, _da = d, _ea) {
  constructor(e, r) {
    super(e, "string", "PgChar"), this.config.length = r.length, this.config.enumValues = r.enum;
  }
  build(e) {
    return new In(e, this.config);
  }
}
__publicField(Cn, _da, "PgCharBuilder");
class In extends (_ga = x, _fa = d, _ga) {
  constructor() {
    super(...arguments);
    __publicField(this, "length", this.config.length);
    __publicField(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
__publicField(In, _fa, "PgChar");
function kn(t, e = {}) {
  const { name: r, config: s } = A(t, e);
  return new Cn(r, s);
}
class On extends (_ia = P, _ha = d, _ia) {
  constructor(e) {
    super(e, "string", "PgCidr");
  }
  build(e) {
    return new An(e, this.config);
  }
}
__publicField(On, _ha, "PgCidrBuilder");
class An extends (_ka = x, _ja = d, _ka) {
  getSQLType() {
    return "cidr";
  }
}
__publicField(An, _ja, "PgCidr");
function En(t) {
  return new On(t ?? "");
}
class Rn extends (_ma = P, _la = d, _ma) {
  constructor(e, r, s) {
    super(e, "custom", "PgCustomColumn"), this.config.fieldConfig = r, this.config.customTypeParams = s;
  }
  build(e) {
    return new Dn(e, this.config);
  }
}
__publicField(Rn, _la, "PgCustomColumnBuilder");
class Dn extends (_oa = x, _na = d, _oa) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "sqlName");
    __publicField(this, "mapTo");
    __publicField(this, "mapFrom");
    this.sqlName = r.customTypeParams.dataType(r.fieldConfig), this.mapTo = r.customTypeParams.toDriver, this.mapFrom = r.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(e) {
    return typeof this.mapFrom == "function" ? this.mapFrom(e) : e;
  }
  mapToDriverValue(e) {
    return typeof this.mapTo == "function" ? this.mapTo(e) : e;
  }
}
__publicField(Dn, _na, "PgCustomColumn");
function jn(t) {
  return (e, r) => {
    const { name: s, config: n } = A(e, r);
    return new Rn(s, n, t);
  };
}
class Ze extends (_qa = P, _pa = d, _qa) {
  defaultNow() {
    return this.default(Je`now()`);
  }
}
__publicField(Ze, _pa, "PgDateColumnBaseBuilder");
class Bn extends (_sa = Ze, _ra = d, _sa) {
  constructor(e) {
    super(e, "date", "PgDate");
  }
  build(e) {
    return new Vn(e, this.config);
  }
}
__publicField(Bn, _ra, "PgDateBuilder");
class Vn extends (_ua = x, _ta = d, _ua) {
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(e) {
    return new Date(e);
  }
  mapToDriverValue(e) {
    return e.toISOString();
  }
}
__publicField(Vn, _ta, "PgDate");
class Mn extends (_wa = Ze, _va = d, _wa) {
  constructor(e) {
    super(e, "string", "PgDateString");
  }
  build(e) {
    return new Zn(e, this.config);
  }
}
__publicField(Mn, _va, "PgDateStringBuilder");
class Zn extends (_ya = x, _xa = d, _ya) {
  getSQLType() {
    return "date";
  }
}
__publicField(Zn, _xa, "PgDateString");
function Ln(t, e) {
  const { name: r, config: s } = A(t, e);
  return (s == null ? void 0 : s.mode) === "date" ? new Bn(r) : new Mn(r);
}
class Fn extends (_Aa = P, _za = d, _Aa) {
  constructor(e) {
    super(e, "number", "PgDoublePrecision");
  }
  build(e) {
    return new zn(e, this.config);
  }
}
__publicField(Fn, _za, "PgDoublePrecisionBuilder");
class zn extends (_Ca = x, _Ba = d, _Ca) {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseFloat(e) : e;
  }
}
__publicField(zn, _Ba, "PgDoublePrecision");
function Un(t) {
  return new Fn(t ?? "");
}
class $n extends (_Ea = P, _Da = d, _Ea) {
  constructor(e) {
    super(e, "string", "PgInet");
  }
  build(e) {
    return new Qn(e, this.config);
  }
}
__publicField($n, _Da, "PgInetBuilder");
class Qn extends (_Ga = x, _Fa = d, _Ga) {
  getSQLType() {
    return "inet";
  }
}
__publicField(Qn, _Fa, "PgInet");
function qn(t) {
  return new $n(t ?? "");
}
class Gn extends (_Ia = et, _Ha = d, _Ia) {
  constructor(e) {
    super(e, "number", "PgInteger");
  }
  build(e) {
    return new Xn(e, this.config);
  }
}
__publicField(Gn, _Ha, "PgIntegerBuilder");
class Xn extends (_Ka = x, _Ja = d, _Ka) {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseInt(e) : e;
  }
}
__publicField(Xn, _Ja, "PgInteger");
function H(t) {
  return new Gn(t ?? "");
}
class Kn extends (_Ma = P, _La = d, _Ma) {
  constructor(e, r) {
    super(e, "string", "PgInterval"), this.config.intervalConfig = r;
  }
  build(e) {
    return new Wn(e, this.config);
  }
}
__publicField(Kn, _La, "PgIntervalBuilder");
class Wn extends (_Oa = x, _Na = d, _Oa) {
  constructor() {
    super(...arguments);
    __publicField(this, "fields", this.config.intervalConfig.fields);
    __publicField(this, "precision", this.config.intervalConfig.precision);
  }
  getSQLType() {
    const e = this.fields ? ` ${this.fields}` : "", r = this.precision ? `(${this.precision})` : "";
    return `interval${e}${r}`;
  }
}
__publicField(Wn, _Na, "PgInterval");
function Jn(t, e = {}) {
  const { name: r, config: s } = A(t, e);
  return new Kn(r, s);
}
class Hn extends (_Qa = P, _Pa = d, _Qa) {
  constructor(e) {
    super(e, "json", "PgJson");
  }
  build(e) {
    return new Yn(e, this.config);
  }
}
__publicField(Hn, _Pa, "PgJsonBuilder");
class Yn extends (_Sa = x, _Ra = d, _Sa) {
  constructor(e, r) {
    super(e, r);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") try {
      return JSON.parse(e);
    } catch {
      return e;
    }
    return e;
  }
}
__publicField(Yn, _Ra, "PgJson");
function ei(t) {
  return new Hn(t ?? "");
}
class ti extends (_Ua = P, _Ta = d, _Ua) {
  constructor(e) {
    super(e, "json", "PgJsonb");
  }
  build(e) {
    return new ri(e, this.config);
  }
}
__publicField(ti, _Ta, "PgJsonbBuilder");
class ri extends (_Wa = x, _Va = d, _Wa) {
  constructor(e, r) {
    super(e, r);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") try {
      return JSON.parse(e);
    } catch {
      return e;
    }
    return e;
  }
}
__publicField(ri, _Va, "PgJsonb");
function si(t) {
  return new ti(t ?? "");
}
class ni extends (_Ya = P, _Xa = d, _Ya) {
  constructor(e) {
    super(e, "array", "PgLine");
  }
  build(e) {
    return new ii(e, this.config);
  }
}
__publicField(ni, _Xa, "PgLineBuilder");
class ii extends (__a = x, _Za = d, __a) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [r, s, n] = e.slice(1, -1).split(",");
    return [Number.parseFloat(r), Number.parseFloat(s), Number.parseFloat(n)];
  }
  mapToDriverValue(e) {
    return `{${e[0]},${e[1]},${e[2]}}`;
  }
}
__publicField(ii, _Za, "PgLine");
class ai extends (_ab = P, _$a = d, _ab) {
  constructor(e) {
    super(e, "json", "PgLineABC");
  }
  build(e) {
    return new oi(e, this.config);
  }
}
__publicField(ai, _$a, "PgLineABCBuilder");
class oi extends (_cb = x, _bb = d, _cb) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [r, s, n] = e.slice(1, -1).split(",");
    return { a: Number.parseFloat(r), b: Number.parseFloat(s), c: Number.parseFloat(n) };
  }
  mapToDriverValue(e) {
    return `{${e.a},${e.b},${e.c}}`;
  }
}
__publicField(oi, _bb, "PgLineABC");
function ui(t, e) {
  const { name: r, config: s } = A(t, e);
  return !(s == null ? void 0 : s.mode) || s.mode === "tuple" ? new ni(r) : new ai(r);
}
class ci extends (_eb = P, _db = d, _eb) {
  constructor(e) {
    super(e, "string", "PgMacaddr");
  }
  build(e) {
    return new li(e, this.config);
  }
}
__publicField(ci, _db, "PgMacaddrBuilder");
class li extends (_gb = x, _fb = d, _gb) {
  getSQLType() {
    return "macaddr";
  }
}
__publicField(li, _fb, "PgMacaddr");
function di(t) {
  return new ci(t ?? "");
}
class hi extends (_ib = P, _hb = d, _ib) {
  constructor(e) {
    super(e, "string", "PgMacaddr8");
  }
  build(e) {
    return new fi(e, this.config);
  }
}
__publicField(hi, _hb, "PgMacaddr8Builder");
class fi extends (_kb = x, _jb = d, _kb) {
  getSQLType() {
    return "macaddr8";
  }
}
__publicField(fi, _jb, "PgMacaddr8");
function pi(t) {
  return new hi(t ?? "");
}
class mi extends (_mb = P, _lb = d, _mb) {
  constructor(e, r, s) {
    super(e, "string", "PgNumeric"), this.config.precision = r, this.config.scale = s;
  }
  build(e) {
    return new gi(e, this.config);
  }
}
__publicField(mi, _lb, "PgNumericBuilder");
class gi extends (_ob = x, _nb = d, _ob) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "precision");
    __publicField(this, "scale");
    this.precision = r.precision, this.scale = r.scale;
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
__publicField(gi, _nb, "PgNumeric");
function yi(t, e) {
  const { name: r, config: s } = A(t, e);
  return new mi(r, s == null ? void 0 : s.precision, s == null ? void 0 : s.scale);
}
class vi extends (_qb = P, _pb = d, _qb) {
  constructor(e) {
    super(e, "array", "PgPointTuple");
  }
  build(e) {
    return new _i(e, this.config);
  }
}
__publicField(vi, _pb, "PgPointTupleBuilder");
class _i extends (_sb = x, _rb = d, _sb) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [r, s] = e.slice(1, -1).split(",");
      return [Number.parseFloat(r), Number.parseFloat(s)];
    }
    return [e.x, e.y];
  }
  mapToDriverValue(e) {
    return `(${e[0]},${e[1]})`;
  }
}
__publicField(_i, _rb, "PgPointTuple");
class bi extends (_ub = P, _tb = d, _ub) {
  constructor(e) {
    super(e, "json", "PgPointObject");
  }
  build(e) {
    return new xi(e, this.config);
  }
}
__publicField(bi, _tb, "PgPointObjectBuilder");
class xi extends (_wb = x, _vb = d, _wb) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [r, s] = e.slice(1, -1).split(",");
      return { x: Number.parseFloat(r), y: Number.parseFloat(s) };
    }
    return e;
  }
  mapToDriverValue(e) {
    return `(${e.x},${e.y})`;
  }
}
__publicField(xi, _vb, "PgPointObject");
function wi(t, e) {
  const { name: r, config: s } = A(t, e);
  return !(s == null ? void 0 : s.mode) || s.mode === "tuple" ? new vi(r) : new bi(r);
}
function Ti(t) {
  const e = [];
  for (let r = 0; r < t.length; r += 2) e.push(Number.parseInt(t.slice(r, r + 2), 16));
  return new Uint8Array(e);
}
function Ut(t, e) {
  const r = new ArrayBuffer(8), s = new DataView(r);
  for (let n = 0; n < 8; n++) s.setUint8(n, t[e + n]);
  return s.getFloat64(0, true);
}
function pr(t) {
  const e = Ti(t);
  let r = 0;
  const s = e[r];
  r += 1;
  const n = new DataView(e.buffer), i = n.getUint32(r, s === 1);
  if (r += 4, i & 536870912 && (n.getUint32(r, s === 1), r += 4), (i & 65535) === 1) {
    const a = Ut(e, r);
    r += 8;
    const o = Ut(e, r);
    return r += 8, [a, o];
  }
  throw new Error("Unsupported geometry type");
}
class Si extends (_yb = P, _xb = d, _yb) {
  constructor(e) {
    super(e, "array", "PgGeometry");
  }
  build(e) {
    return new Pi(e, this.config);
  }
}
__publicField(Si, _xb, "PgGeometryBuilder");
class Pi extends (_Ab = x, _zb = d, _Ab) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    return pr(e);
  }
  mapToDriverValue(e) {
    return `point(${e[0]} ${e[1]})`;
  }
}
__publicField(Pi, _zb, "PgGeometry");
class Ni extends (_Cb = P, _Bb = d, _Cb) {
  constructor(e) {
    super(e, "json", "PgGeometryObject");
  }
  build(e) {
    return new Ci(e, this.config);
  }
}
__publicField(Ni, _Bb, "PgGeometryObjectBuilder");
class Ci extends (_Eb = x, _Db = d, _Eb) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    const r = pr(e);
    return { x: r[0], y: r[1] };
  }
  mapToDriverValue(e) {
    return `point(${e.x} ${e.y})`;
  }
}
__publicField(Ci, _Db, "PgGeometryObject");
function Ii(t, e) {
  const { name: r, config: s } = A(t, e);
  return !(s == null ? void 0 : s.mode) || s.mode === "tuple" ? new Si(r) : new Ni(r);
}
class ki extends (_Gb = P, _Fb = d, _Gb) {
  constructor(e, r) {
    super(e, "number", "PgReal"), this.config.length = r;
  }
  build(e) {
    return new Oi(e, this.config);
  }
}
__publicField(ki, _Fb, "PgRealBuilder");
class Oi extends (_Ib = x, _Hb = d, _Ib) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "mapFromDriverValue", (e) => typeof e == "string" ? Number.parseFloat(e) : e);
  }
  getSQLType() {
    return "real";
  }
}
__publicField(Oi, _Hb, "PgReal");
function Ai(t) {
  return new ki(t ?? "");
}
class Ei extends (_Kb = P, _Jb = d, _Kb) {
  constructor(e) {
    super(e, "number", "PgSerial"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(e) {
    return new Ri(e, this.config);
  }
}
__publicField(Ei, _Jb, "PgSerialBuilder");
class Ri extends (_Mb = x, _Lb = d, _Mb) {
  getSQLType() {
    return "serial";
  }
}
__publicField(Ri, _Lb, "PgSerial");
function mr(t) {
  return new Ei(t ?? "");
}
class Di extends (_Ob = et, _Nb = d, _Ob) {
  constructor(e) {
    super(e, "number", "PgSmallInt");
  }
  build(e) {
    return new ji(e, this.config);
  }
}
__publicField(Di, _Nb, "PgSmallIntBuilder");
class ji extends (_Qb = x, _Pb = d, _Qb) {
  constructor() {
    super(...arguments);
    __publicField(this, "mapFromDriverValue", (e) => typeof e == "string" ? Number(e) : e);
  }
  getSQLType() {
    return "smallint";
  }
}
__publicField(ji, _Pb, "PgSmallInt");
function Bi(t) {
  return new Di(t ?? "");
}
class Vi extends (_Sb = P, _Rb = d, _Sb) {
  constructor(e) {
    super(e, "number", "PgSmallSerial"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(e) {
    return new Mi(e, this.config);
  }
}
__publicField(Vi, _Rb, "PgSmallSerialBuilder");
class Mi extends (_Ub = x, _Tb = d, _Ub) {
  getSQLType() {
    return "smallserial";
  }
}
__publicField(Mi, _Tb, "PgSmallSerial");
function Zi(t) {
  return new Vi(t ?? "");
}
class Li extends (_Wb = P, _Vb = d, _Wb) {
  constructor(e, r) {
    super(e, "string", "PgText"), this.config.enumValues = r.enum;
  }
  build(e) {
    return new Fi(e, this.config);
  }
}
__publicField(Li, _Vb, "PgTextBuilder");
class Fi extends (_Yb = x, _Xb = d, _Yb) {
  constructor() {
    super(...arguments);
    __publicField(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return "text";
  }
}
__publicField(Fi, _Xb, "PgText");
function ne(t, e = {}) {
  const { name: r, config: s } = A(t, e);
  return new Li(r, s);
}
class zi extends (__b = Ze, _Zb = d, __b) {
  constructor(e, r, s) {
    super(e, "string", "PgTime"), this.withTimezone = r, this.precision = s, this.config.withTimezone = r, this.config.precision = s;
  }
  build(e) {
    return new Ui(e, this.config);
  }
}
__publicField(zi, _Zb, "PgTimeBuilder");
class Ui extends (_ac = x, _$b = d, _ac) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "withTimezone");
    __publicField(this, "precision");
    this.withTimezone = r.withTimezone, this.precision = r.precision;
  }
  getSQLType() {
    return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
__publicField(Ui, _$b, "PgTime");
function $i(t, e = {}) {
  const { name: r, config: s } = A(t, e);
  return new zi(r, s.withTimezone ?? false, s.precision);
}
class Qi extends (_cc = Ze, _bc = d, _cc) {
  constructor(e, r, s) {
    super(e, "date", "PgTimestamp"), this.config.withTimezone = r, this.config.precision = s;
  }
  build(e) {
    return new qi(e, this.config);
  }
}
__publicField(Qi, _bc, "PgTimestampBuilder");
class qi extends (_ec = x, _dc = d, _ec) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "withTimezone");
    __publicField(this, "precision");
    __publicField(this, "mapFromDriverValue", (e) => new Date(this.withTimezone ? e : e + "+0000"));
    __publicField(this, "mapToDriverValue", (e) => e.toISOString());
    this.withTimezone = r.withTimezone, this.precision = r.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
__publicField(qi, _dc, "PgTimestamp");
class Gi extends (_gc = Ze, _fc = d, _gc) {
  constructor(e, r, s) {
    super(e, "string", "PgTimestampString"), this.config.withTimezone = r, this.config.precision = s;
  }
  build(e) {
    return new Xi(e, this.config);
  }
}
__publicField(Gi, _fc, "PgTimestampStringBuilder");
class Xi extends (_ic = x, _hc = d, _ic) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "withTimezone");
    __publicField(this, "precision");
    this.withTimezone = r.withTimezone, this.precision = r.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
__publicField(Xi, _hc, "PgTimestampString");
function vt(t, e = {}) {
  const { name: r, config: s } = A(t, e);
  return (s == null ? void 0 : s.mode) === "string" ? new Gi(r, s.withTimezone ?? false, s.precision) : new Qi(r, (s == null ? void 0 : s.withTimezone) ?? false, s == null ? void 0 : s.precision);
}
class Ki extends (_kc = P, _jc = d, _kc) {
  constructor(e) {
    super(e, "string", "PgUUID");
  }
  defaultRandom() {
    return this.default(Je`gen_random_uuid()`);
  }
  build(e) {
    return new Wi(e, this.config);
  }
}
__publicField(Ki, _jc, "PgUUIDBuilder");
class Wi extends (_mc = x, _lc = d, _mc) {
  getSQLType() {
    return "uuid";
  }
}
__publicField(Wi, _lc, "PgUUID");
function Ve(t) {
  return new Ki(t ?? "");
}
class Ji extends (_oc = P, _nc = d, _oc) {
  constructor(e, r) {
    super(e, "string", "PgVarchar"), this.config.length = r.length, this.config.enumValues = r.enum;
  }
  build(e) {
    return new Hi(e, this.config);
  }
}
__publicField(Ji, _nc, "PgVarcharBuilder");
class Hi extends (_qc = x, _pc = d, _qc) {
  constructor() {
    super(...arguments);
    __publicField(this, "length", this.config.length);
    __publicField(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
__publicField(Hi, _pc, "PgVarchar");
function Yi(t, e = {}) {
  const { name: r, config: s } = A(t, e);
  return new Ji(r, s);
}
class ea extends (_sc = P, _rc = d, _sc) {
  constructor(e, r) {
    super(e, "string", "PgBinaryVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new ta(e, this.config);
  }
}
__publicField(ea, _rc, "PgBinaryVectorBuilder");
class ta extends (_uc = x, _tc = d, _uc) {
  constructor() {
    super(...arguments);
    __publicField(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
__publicField(ta, _tc, "PgBinaryVector");
function ra(t, e) {
  const { name: r, config: s } = A(t, e);
  return new ea(r, s);
}
class sa extends (_wc = P, _vc = d, _wc) {
  constructor(e, r) {
    super(e, "array", "PgHalfVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new na(e, this.config);
  }
}
__publicField(sa, _vc, "PgHalfVectorBuilder");
class na extends (_yc = x, _xc = d, _yc) {
  constructor() {
    super(...arguments);
    __publicField(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    return e.slice(1, -1).split(",").map((r) => Number.parseFloat(r));
  }
}
__publicField(na, _xc, "PgHalfVector");
function ia(t, e) {
  const { name: r, config: s } = A(t, e);
  return new sa(r, s);
}
class aa extends (_Ac = P, _zc = d, _Ac) {
  constructor(e, r) {
    super(e, "string", "PgSparseVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new oa(e, this.config);
  }
}
__publicField(aa, _zc, "PgSparseVectorBuilder");
class oa extends (_Cc = x, _Bc = d, _Cc) {
  constructor() {
    super(...arguments);
    __publicField(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
__publicField(oa, _Bc, "PgSparseVector");
function ua(t, e) {
  const { name: r, config: s } = A(t, e);
  return new aa(r, s);
}
class ca extends (_Ec = P, _Dc = d, _Ec) {
  constructor(e, r) {
    super(e, "array", "PgVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new la(e, this.config);
  }
}
__publicField(ca, _Dc, "PgVectorBuilder");
class la extends (_Gc = x, _Fc = d, _Gc) {
  constructor() {
    super(...arguments);
    __publicField(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    return e.slice(1, -1).split(",").map((r) => Number.parseFloat(r));
  }
}
__publicField(la, _Fc, "PgVector");
function da(t, e) {
  const { name: r, config: s } = A(t, e);
  return new ca(r, s);
}
function ha() {
  return { bigint: _n, bigserial: Sn, boolean: tt, char: kn, cidr: En, customType: jn, date: Ln, doublePrecision: Un, inet: qn, integer: H, interval: Jn, json: ei, jsonb: si, line: ui, macaddr: di, macaddr8: pi, numeric: yi, point: wi, geometry: Ii, real: Ai, serial: mr, smallint: Bi, smallserial: Zi, text: ne, time: $i, timestamp: vt, uuid: Ve, varchar: Yi, bit: ra, halfvec: ia, sparsevec: ua, vector: da };
}
const _t = Symbol.for("drizzle:PgInlineForeignKeys"), $t = Symbol.for("drizzle:EnableRLS");
class Qt extends (_Lc = M, _Kc = d, _Jc = _t, _Ic = $t, _Hc = M.Symbol.ExtraConfigBuilder, _Lc) {
  constructor() {
    super(...arguments);
    __publicField(this, _Jc, []);
    __publicField(this, _Ic, false);
    __publicField(this, _Hc);
  }
}
__publicField(Qt, _Kc, "PgTable");
__publicField(Qt, "Symbol", Object.assign({}, M.Symbol, { InlineForeignKeys: _t, EnableRLS: $t }));
function fa(t, e, r, s, n = t) {
  const i = new Qt(t, s, n), a = typeof e == "function" ? e(ha()) : e, o = Object.fromEntries(Object.entries(a).map(([u, y]) => {
    const T = y;
    T.setName(u);
    const V = T.build(i);
    return i[_t].push(...T.buildForeignKeys(V, i)), [u, V];
  })), c = Object.fromEntries(Object.entries(a).map(([u, y]) => {
    const T = y;
    T.setName(u);
    const V = T.buildExtraConfigColumn(i);
    return [u, V];
  })), l = Object.assign(i, o);
  return l[M.Symbol.Columns] = o, l[M.Symbol.ExtraConfigColumns] = c, Object.assign(l, { enableRLS: () => (l[Qt.Symbol.EnableRLS] = true, l) });
}
const St = (t, e, r) => fa(t, e, r, void 0), N = { INT8_MIN: -128, INT8_MAX: 127, INT8_UNSIGNED_MAX: 255, INT16_MIN: -32768, INT16_MAX: 32767, INT16_UNSIGNED_MAX: 65535, INT24_MIN: -8388608, INT24_MAX: 8388607, INT24_UNSIGNED_MAX: 16777215, INT32_MIN: -2147483648, INT32_MAX: 2147483647, INT32_UNSIGNED_MAX: 4294967295, INT48_MIN: -140737488355328, INT48_MAX: 140737488355327, INT48_UNSIGNED_MAX: 281474976710655, INT64_MIN: -9223372036854775808n, INT64_MAX: 9223372036854775807n, INT64_UNSIGNED_MAX: 18446744073709551615n };
function k(t, e) {
  return e.includes(t.columnType);
}
function pa(t) {
  return "enumValues" in t && Array.isArray(t.enumValues) && t.enumValues.length > 0;
}
const ma = f.union([f.string(), f.number(), f.boolean(), f.null()]), ga = f.union([ma, f.record(f.any()), f.array(f.any())]), ya = f.custom((t) => t instanceof Buffer);
function gr(t, e) {
  const r = (e == null ? void 0 : e.zodInstance) ?? f, s = (e == null ? void 0 : e.coerce) ?? {};
  let n;
  return pa(t) && (n = t.enumValues.length ? r.enum(t.enumValues) : r.string()), n || (k(t, ["PgGeometry", "PgPointTuple"]) ? n = r.tuple([r.number(), r.number()]) : k(t, ["PgGeometryObject", "PgPointObject"]) ? n = r.object({ x: r.number(), y: r.number() }) : k(t, ["PgHalfVector", "PgVector"]) ? (n = r.array(r.number()), n = t.dimensions ? n.length(t.dimensions) : n) : k(t, ["PgLine"]) ? n = r.tuple([r.number(), r.number(), r.number()]) : k(t, ["PgLineABC"]) ? n = r.object({ a: r.number(), b: r.number(), c: r.number() }) : k(t, ["PgArray"]) ? (n = r.array(gr(t.baseColumn, r)), n = t.size ? n.length(t.size) : n) : t.dataType === "array" ? n = r.array(r.any()) : t.dataType === "number" ? n = va(t, r, s) : t.dataType === "bigint" ? n = _a(t, r, s) : t.dataType === "boolean" ? n = s === true || s.boolean ? r.coerce.boolean() : r.boolean() : t.dataType === "date" ? n = s === true || s.date ? r.coerce.date() : r.date() : t.dataType === "string" ? n = ba(t, r, s) : t.dataType === "json" ? n = ga : t.dataType === "custom" ? n = r.any() : t.dataType === "buffer" && (n = ya)), n || (n = r.any()), n;
}
function va(t, e, r) {
  let s = t.getSQLType().includes("unsigned"), n, i, a = false;
  k(t, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (n = s ? 0 : N.INT8_MIN, i = s ? N.INT8_UNSIGNED_MAX : N.INT8_MAX, a = true) : k(t, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (n = s ? 0 : N.INT16_MIN, i = s ? N.INT16_UNSIGNED_MAX : N.INT16_MAX, a = true) : k(t, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (n = s ? 0 : N.INT24_MIN, i = s ? N.INT24_UNSIGNED_MAX : N.INT24_MAX, a = k(t, ["MySqlMediumInt", "SingleStoreMediumInt"])) : k(t, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (n = s ? 0 : N.INT32_MIN, i = s ? N.INT32_UNSIGNED_MAX : N.INT32_MAX, a = true) : k(t, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (n = s ? 0 : N.INT48_MIN, i = s ? N.INT48_UNSIGNED_MAX : N.INT48_MAX) : k(t, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (s = s || k(t, ["MySqlSerial", "SingleStoreSerial"]), n = s ? 0 : Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER, a = true) : k(t, ["MySqlYear", "SingleStoreYear"]) ? (n = 1901, i = 2155, a = true) : (n = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER);
  let o = r === true || (r == null ? void 0 : r.number) ? e.coerce.number() : e.number();
  return o = o.min(n).max(i), a ? o.int() : o;
}
function _a(t, e, r) {
  const s = t.getSQLType().includes("unsigned"), n = s ? 0n : N.INT64_MIN, i = s ? N.INT64_UNSIGNED_MAX : N.INT64_MAX;
  return (r === true || (r == null ? void 0 : r.bigint) ? e.coerce.bigint() : e.bigint()).min(n).max(i);
}
function ba(t, e, r) {
  if (k(t, ["PgUUID"])) return e.string().uuid();
  let s, n, i = false;
  k(t, ["PgVarchar", "SQLiteText"]) ? s = t.length : k(t, ["MySqlVarChar", "SingleStoreVarChar"]) ? s = t.length ?? N.INT16_UNSIGNED_MAX : k(t, ["MySqlText", "SingleStoreText"]) && (t.textType === "longtext" ? s = N.INT32_UNSIGNED_MAX : t.textType === "mediumtext" ? s = N.INT24_UNSIGNED_MAX : t.textType === "text" ? s = N.INT16_UNSIGNED_MAX : s = N.INT8_UNSIGNED_MAX), k(t, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (s = t.length, i = true), k(t, ["PgBinaryVector"]) && (n = /^[01]+$/, s = t.dimensions);
  let a = r === true || (r == null ? void 0 : r.string) ? e.coerce.string() : e.string();
  return a = n ? a.regex(n) : a, s && i ? a.length(s) : s ? a.max(s) : a;
}
function yr(t) {
  return cr(t) ? fn(t) : pn(t);
}
function vr(t, e, r, s) {
  const n = {};
  for (const [i, a] of Object.entries(t)) {
    if (!E(a, Be) && !E(a, I) && !E(a, I.Aliased) && typeof a == "object") {
      const y = cr(a) || hn(a) ? yr(a) : a;
      n[i] = vr(y, e[i] ?? {}, r, s);
      continue;
    }
    const o = e[i];
    if (o !== void 0 && typeof o != "function") {
      n[i] = o;
      continue;
    }
    const c = E(a, Be) ? a : void 0, l = c ? gr(c, s) : f.any(), u = typeof o == "function" ? o(l) : l;
    r.never(c) || (n[i] = u, c && (r.nullable(c) && (n[i] = n[i].nullable()), r.optional(c) && (n[i] = n[i].optional())));
  }
  return f.object(n);
}
const xa = { never: (t) => {
  var _a4, _b2;
  return ((_a4 = t == null ? void 0 : t.generated) == null ? void 0 : _a4.type) === "always" || ((_b2 = t == null ? void 0 : t.generatedIdentity) == null ? void 0 : _b2.type) === "always";
}, optional: (t) => !t.notNull || t.notNull && t.hasDefault, nullable: (t) => !t.notNull }, _r = (t, e) => {
  const r = yr(t);
  return vr(r, {}, xa);
}, br = St("vaults", { id: Ve("id").primaryKey().defaultRandom(), shortCode: ne("short_code").unique(), lookupId: ne("lookup_id").unique(), wrappedKey: ne("wrapped_key"), encryptedMetadata: ne("encrypted_metadata").notNull(), createdAt: vt("created_at").defaultNow().notNull(), expiresAt: vt("expires_at").notNull(), maxDownloads: H("max_downloads").default(1).notNull(), downloadCount: H("download_count").default(0).notNull(), isDeleted: tt("is_deleted").default(false).notNull() }), xr = St("files", { id: Ve("id").primaryKey().defaultRandom(), vaultId: Ve("vault_id").references(() => br.id, { onDelete: "cascade" }).notNull(), fileId: ne("file_id").notNull(), chunkCount: H("chunk_count").notNull(), totalSize: H("total_size").notNull(), isCompressed: tt("is_compressed").default(false).notNull(), originalSize: H("original_size") });
St("chunks", { id: mr("id").primaryKey(), fileId: Ve("file_id").references(() => xr.id, { onDelete: "cascade" }).notNull(), chunkIndex: H("chunk_index").notNull(), storagePath: ne("storage_path"), size: H("size").notNull(), isUploaded: tt("is_uploaded").default(false).notNull() });
_r(br).omit({ id: true, shortCode: true, createdAt: true, downloadCount: true, isDeleted: true });
_r(xr).omit({ id: true, vaultId: true });
const wa = f.object({ expiresIn: f.number().min(1).max(168), maxDownloads: f.number().min(1).max(100), encryptedMetadata: f.string(), lookupId: f.string().length(3).optional(), wrappedKey: f.string().optional(), files: f.array(f.object({ fileId: f.string(), chunks: f.number(), size: f.number(), isCompressed: f.boolean().default(false), originalSize: f.number().optional() })) });
f.object({ message: f.string(), field: f.string().optional() }), f.object({ message: f.string() }), f.object({ message: f.string() });
const O = { vaults: { create: { method: "POST", path: "/api/vaults", input: wa, responses: { 201: f.object({ id: f.string(), shortCode: f.string().optional(), expiresAt: f.string(), directLink: f.string() }) } }, get: { path: "/api/vaults/:id", responses: { 200: f.custom(), 410: f.object({ message: f.string() }) } }, resolveCode: { responses: { 200: f.object({ id: f.string() }) } }, download: { path: "/api/vaults/:id/download", responses: { 200: f.object({ success: f.boolean() }), 403: f.object({ message: f.string() }) } }, codeLookup: { path: "/api/vault/code/:lookupId", responses: { 200: f.object({ id: f.string(), wrappedKey: f.string(), encryptedMetadata: f.string(), expiresAt: f.string(), maxDownloads: f.number(), downloadCount: f.number(), files: f.array(f.object({ fileId: f.string(), chunkCount: f.number(), totalSize: f.number() })) }), 410: f.object({ message: f.string() }) } }, email: { input: f.object({ to: f.string().email(), senderName: f.string().optional() }), responses: { 200: f.object({ success: f.boolean(), remainingEmails: f.number(), previewUrl: f.string().optional() }), 429: f.object({ message: f.string() }) } } }, chunks: { getUploadUrl: { method: "POST", path: "/api/vaults/:id/files/:fileId/chunks/:chunkIndex/upload-url", input: f.object({ size: f.number() }), responses: { 200: f.object({ uploadUrl: f.string(), storagePath: f.string() }) } }, markUploaded: { method: "PUT", path: "/api/vaults/:id/files/:fileId/chunks/:chunkIndex/status", input: f.object({ storagePath: f.string() }), responses: { 200: f.object({ success: f.boolean() }) } }, getDownloadUrl: { path: "/api/vaults/:id/files/:fileId/chunks/:chunkIndex/download-url", responses: { 200: f.object({ downloadUrl: f.string() }) } } } };
function be(t, e) {
  let r = t;
  return e && Object.entries(e).forEach(([s, n]) => {
    r.includes(`:${s}`) && (r = r.replace(`:${s}`, String(n)));
  }), r;
}
function Pa(t) {
  return Ur({ queryKey: [O.vaults.get.path, t], queryFn: async () => {
    const e = be(O.vaults.get.path, { id: t }), r = await fetch(e);
    if (r.status === 404) return null;
    if (r.status === 410) throw new Error("This vault has expired or been deleted.");
    if (!r.ok) throw new Error("Failed to fetch vault");
    return O.vaults.get.responses[200].parse(await r.json());
  }, enabled: !!t, retry: false });
}
function Na() {
  bt();
  const { toast: t } = Cr();
  return _e({ mutationFn: async (e) => {
    const r = O.vaults.create.input.parse(e), s = await fetch(O.vaults.create.path, { method: O.vaults.create.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
    if (!s.ok) {
      if (s.status === 400) {
        const n = await s.json();
        throw new Error(n.message || "Validation failed");
      }
      throw new Error("Failed to create vault");
    }
    return O.vaults.create.responses[201].parse(await s.json());
  }, onError: (e) => {
    t({ variant: "destructive", title: "Creation Failed", description: e.message });
  } });
}
function Ca() {
  return _e({ mutationFn: async ({ vaultId: t, fileId: e, chunkIndex: r, size: s }) => {
    const n = be(O.chunks.getUploadUrl.path, { id: t, fileId: e, chunkIndex: r }), i = await fetch(n, { method: O.chunks.getUploadUrl.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ size: s }) });
    if (!i.ok) throw new Error("Failed to get upload URL");
    return O.chunks.getUploadUrl.responses[200].parse(await i.json());
  } });
}
function Ia() {
  return _e({ mutationFn: async ({ vaultId: t, fileId: e, chunkIndex: r, storagePath: s }) => {
    const n = be(O.chunks.markUploaded.path, { id: t, fileId: e, chunkIndex: r }), i = await fetch(n, { method: O.chunks.markUploaded.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ storagePath: s }) });
    if (!i.ok) throw new Error("Failed to confirm upload");
    return O.chunks.markUploaded.responses[200].parse(await i.json());
  } });
}
function ka() {
  return _e({ mutationFn: async ({ vaultId: t, fileId: e, chunkIndex: r }) => {
    const s = be(O.chunks.getDownloadUrl.path, { id: t, fileId: e, chunkIndex: r }), n = await fetch(s);
    if (!n.ok) throw new Error("Failed to get download URL");
    return O.chunks.getDownloadUrl.responses[200].parse(await n.json());
  } });
}
function Oa() {
  return _e({ mutationFn: async (t) => {
    const e = be(O.vaults.download.path, { id: t }), r = await fetch(e, { method: "POST" });
    if (!r.ok) throw new Error("Failed to track download");
    return await r.json();
  } });
}
function Aa() {
  return _e({ mutationFn: async (t) => {
    const e = be(O.vaults.codeLookup.path, { lookupId: t }), r = await fetch(e);
    if (r.status === 404) throw new Error("Invalid code or vault expired");
    if (r.status === 410) throw new Error("Vault expired or download limit reached");
    if (!r.ok) throw new Error("Failed to lookup vault");
    return O.vaults.codeLookup.responses[200].parse(await r.json());
  } });
}
export {
  Ca as a,
  Ia as b,
  Aa as c,
  ka as d,
  Oa as e,
  Pa as f,
  Na as u
};
