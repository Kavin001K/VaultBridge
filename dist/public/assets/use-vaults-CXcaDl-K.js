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
var _r2, _e2, _s2, _t2, _n2, _a2, _o, _i2, _m, _h, _f, _c, _l, _u, _p, _Vr_instances, d_fn, g_fn, y_fn, v_fn, __fn, b_fn, x_fn, w_fn, T_fn, _a3, _r3, _e3, _s3, _t3, _zr_instances, n_fn, a_fn, _b, _c2, _d, _e4, _f2, _g, _h2, _i3, _j, _k2, _l2, _m2, _n3, _o2, _p2, _q, _r4, _s4, _t4, _u2, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb, _Rb, _Sb, _Tb, _Ub, _Vb, _Wb, _Xb, _Yb, _Zb, __b, _$b, _ac, _bc, _cc, _dc, _ec, _fc, _gc, _hc, _ic, _jc, _kc, _lc, _mc, _nc, _oc, _pc, _qc, _rc, _sc, _tc, _uc, _vc, _wc, _xc, _yc, _zc, _Ac, _Bc, _Cc, _Dc, _Ec, _Fc, _Gc, _Hc, _Ic, _Jc, _Kc, _Lc;
import { S as Wt, p as Et, m as K, s as Je, n as We, o as Nr, q as yt, t as At, v as Ir, w as kr, x as Or, y as Rt, z as ut, A as Dt, C as Er, r as S, D as Nt, j as _e, u as Ar } from "./index-BpGdq6cX.js";
import { M as Rr, u as Jt, P as Dr, a as jr, b as Br, L as Mr } from "./proxy-D0nqRSzh.js";
var Vr = (_a3 = class extends Wt {
  constructor(t, e) {
    super();
    __privateAdd(this, _Vr_instances);
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
    this.options = e, __privateSet(this, _r2, t), __privateSet(this, _i2, null), __privateSet(this, _o, Et()), this.options.experimental_prefetchInRender || __privateGet(this, _o).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (__privateGet(this, _e2).addObserver(this), jt(__privateGet(this, _e2), this.options) ? __privateMethod(this, _Vr_instances, d_fn).call(this) : this.updateResult(), __privateMethod(this, _Vr_instances, __fn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return vt(__privateGet(this, _e2), this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return vt(__privateGet(this, _e2), this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), __privateMethod(this, _Vr_instances, b_fn).call(this), __privateMethod(this, _Vr_instances, x_fn).call(this), __privateGet(this, _e2).removeObserver(this);
  }
  setOptions(t, e) {
    const r = this.options, s = __privateGet(this, _e2);
    if (this.options = __privateGet(this, _r2).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof K(this.options.enabled, __privateGet(this, _e2)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    __privateMethod(this, _Vr_instances, w_fn).call(this), __privateGet(this, _e2).setOptions(this.options), r._defaulted && !Je(this.options, r) && __privateGet(this, _r2).getQueryCache().notify({ type: "observerOptionsUpdated", query: __privateGet(this, _e2), observer: this });
    const n = this.hasListeners();
    n && Bt(__privateGet(this, _e2), s, this.options, r) && __privateMethod(this, _Vr_instances, d_fn).call(this), this.updateResult(e), n && (__privateGet(this, _e2) !== s || K(this.options.enabled, __privateGet(this, _e2)) !== K(r.enabled, __privateGet(this, _e2)) || We(this.options.staleTime, __privateGet(this, _e2)) !== We(r.staleTime, __privateGet(this, _e2))) && __privateMethod(this, _Vr_instances, g_fn).call(this);
    const i = __privateMethod(this, _Vr_instances, y_fn).call(this);
    n && (__privateGet(this, _e2) !== s || K(this.options.enabled, __privateGet(this, _e2)) !== K(r.enabled, __privateGet(this, _e2)) || i !== __privateGet(this, _u)) && __privateMethod(this, _Vr_instances, v_fn).call(this, i);
  }
  getOptimisticResult(t) {
    const e = __privateGet(this, _r2).getQueryCache().build(__privateGet(this, _r2), t), r = this.createResult(e, t);
    return Lr(this, r) && (__privateSet(this, _t2, r), __privateSet(this, _a2, this.options), __privateSet(this, _n2, __privateGet(this, _e2).state)), r;
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
    return __privateMethod(this, _Vr_instances, d_fn).call(this, { ...t, cancelRefetch: t.cancelRefetch ?? true }).then(() => (this.updateResult(), __privateGet(this, _t2)));
  }
  createResult(t, e) {
    var _a4;
    const r = __privateGet(this, _e2), s = this.options, n = __privateGet(this, _t2), i = __privateGet(this, _n2), a = __privateGet(this, _a2), l = t !== r ? t.state : __privateGet(this, _s2), { state: c } = t;
    let u = { ...c }, y = false, b;
    if (e._optimisticResults) {
      const A = this.hasListeners(), ee = !A && jt(t, e), ie = A && Bt(t, r, e, s);
      (ee || ie) && (u = { ...u, ...Or(c.data, t.options) }), e._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
    }
    let { error: E, errorUpdatedAt: Ge, status: Y } = u;
    if (e.select && u.data !== void 0) if (n && u.data === (i == null ? void 0 : i.data) && e.select === __privateGet(this, _m)) b = __privateGet(this, _h);
    else try {
      __privateSet(this, _m, e.select), b = e.select(u.data), b = Rt(n == null ? void 0 : n.data, b, e), __privateSet(this, _h, b), __privateSet(this, _i2, null);
    } catch (A) {
      __privateSet(this, _i2, A);
    }
    else b = u.data;
    if (e.placeholderData !== void 0 && b === void 0 && Y === "pending") {
      let A;
      if ((n == null ? void 0 : n.isPlaceholderData) && e.placeholderData === (a == null ? void 0 : a.placeholderData)) A = n.data;
      else if (A = typeof e.placeholderData == "function" ? e.placeholderData((_a4 = __privateGet(this, _f)) == null ? void 0 : _a4.state.data, __privateGet(this, _f)) : e.placeholderData, e.select && A !== void 0) try {
        A = e.select(A), __privateSet(this, _i2, null);
      } catch (ee) {
        __privateSet(this, _i2, ee);
      }
      A !== void 0 && (Y = "success", b = Rt(n == null ? void 0 : n.data, A, e), y = true);
    }
    __privateGet(this, _i2) && (E = __privateGet(this, _i2), b = __privateGet(this, _h), Ge = Date.now(), Y = "error");
    const U = u.fetchStatus === "fetching", me = Y === "pending", le = Y === "error", ge = me && U, L = b !== void 0, R = { status: Y, fetchStatus: u.fetchStatus, isPending: me, isSuccess: Y === "success", isError: le, isInitialLoading: ge, isLoading: ge, data: b, dataUpdatedAt: u.dataUpdatedAt, error: E, errorUpdatedAt: Ge, failureCount: u.fetchFailureCount, failureReason: u.fetchFailureReason, errorUpdateCount: u.errorUpdateCount, isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0, isFetchedAfterMount: u.dataUpdateCount > l.dataUpdateCount || u.errorUpdateCount > l.errorUpdateCount, isFetching: U, isRefetching: U && !me, isLoadingError: le && !L, isPaused: u.fetchStatus === "paused", isPlaceholderData: y, isRefetchError: le && L, isStale: It(t, e), refetch: this.refetch, promise: __privateGet(this, _o) };
    if (this.options.experimental_prefetchInRender) {
      const A = (Ke) => {
        R.status === "error" ? Ke.reject(R.error) : R.data !== void 0 && Ke.resolve(R.data);
      }, ee = () => {
        const Ke = __privateSet(this, _o, R.promise = Et());
        A(Ke);
      }, ie = __privateGet(this, _o);
      switch (ie.status) {
        case "pending":
          t.queryHash === r.queryHash && A(ie);
          break;
        case "fulfilled":
          (R.status === "error" || R.data !== ie.value) && ee();
          break;
        case "rejected":
          (R.status !== "error" || R.error !== ie.reason) && ee();
          break;
      }
    }
    return R;
  }
  updateResult(t) {
    const e = __privateGet(this, _t2), r = this.createResult(__privateGet(this, _e2), this.options);
    if (__privateSet(this, _n2, __privateGet(this, _e2).state), __privateSet(this, _a2, this.options), __privateGet(this, _n2).data !== void 0 && __privateSet(this, _f, __privateGet(this, _e2)), Je(r, e)) return;
    __privateSet(this, _t2, r);
    const s = {}, n = () => {
      if (!e) return true;
      const { notifyOnChangeProps: i } = this.options, a = typeof i == "function" ? i() : i;
      if (a === "all" || !a && !__privateGet(this, _p).size) return true;
      const o = new Set(a ?? __privateGet(this, _p));
      return this.options.throwOnError && o.add("error"), Object.keys(__privateGet(this, _t2)).some((l) => {
        const c = l;
        return __privateGet(this, _t2)[c] !== e[c] && o.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== false && n() && (s.listeners = true), __privateMethod(this, _Vr_instances, T_fn).call(this, { ...s, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && __privateMethod(this, _Vr_instances, __fn).call(this);
  }
}, _r2 = new WeakMap(), _e2 = new WeakMap(), _s2 = new WeakMap(), _t2 = new WeakMap(), _n2 = new WeakMap(), _a2 = new WeakMap(), _o = new WeakMap(), _i2 = new WeakMap(), _m = new WeakMap(), _h = new WeakMap(), _f = new WeakMap(), _c = new WeakMap(), _l = new WeakMap(), _u = new WeakMap(), _p = new WeakMap(), _Vr_instances = new WeakSet(), d_fn = function(t) {
  __privateMethod(this, _Vr_instances, w_fn).call(this);
  let e = __privateGet(this, _e2).fetch(this.options, t);
  return (t == null ? void 0 : t.throwOnError) || (e = e.catch(Nr)), e;
}, g_fn = function() {
  __privateMethod(this, _Vr_instances, b_fn).call(this);
  const t = We(this.options.staleTime, __privateGet(this, _e2));
  if (yt || __privateGet(this, _t2).isStale || !At(t)) return;
  const r = Ir(__privateGet(this, _t2).dataUpdatedAt, t) + 1;
  __privateSet(this, _c, setTimeout(() => {
    __privateGet(this, _t2).isStale || this.updateResult();
  }, r));
}, y_fn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(__privateGet(this, _e2)) : this.options.refetchInterval) ?? false;
}, v_fn = function(t) {
  __privateMethod(this, _Vr_instances, x_fn).call(this), __privateSet(this, _u, t), !(yt || K(this.options.enabled, __privateGet(this, _e2)) === false || !At(__privateGet(this, _u)) || __privateGet(this, _u) === 0) && __privateSet(this, _l, setInterval(() => {
    (this.options.refetchIntervalInBackground || kr.isFocused()) && __privateMethod(this, _Vr_instances, d_fn).call(this);
  }, __privateGet(this, _u)));
}, __fn = function() {
  __privateMethod(this, _Vr_instances, g_fn).call(this), __privateMethod(this, _Vr_instances, v_fn).call(this, __privateMethod(this, _Vr_instances, y_fn).call(this));
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
  ut.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(__privateGet(this, _t2));
    }), __privateGet(this, _r2).getQueryCache().notify({ query: __privateGet(this, _e2), type: "observerResultsUpdated" });
  });
}, _a3);
function Zr(t, e) {
  return K(e.enabled, t) !== false && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === false);
}
function jt(t, e) {
  return Zr(t, e) || t.state.data !== void 0 && vt(t, e, e.refetchOnMount);
}
function vt(t, e, r) {
  if (K(e.enabled, t) !== false) {
    const s = typeof r == "function" ? r(t) : r;
    return s === "always" || s !== false && It(t, e);
  }
  return false;
}
function Bt(t, e, r, s) {
  return (t !== e || K(s.enabled, t) === false) && (!r.suspense || t.state.status !== "error") && It(t, r);
}
function It(t, e) {
  return K(e.enabled, t) !== false && t.isStaleByTime(We(e.staleTime, t));
}
function Lr(t, e) {
  return !Je(t.getCurrentResult(), e);
}
var zr = (_b = class extends Wt {
  constructor(t, e) {
    super();
    __privateAdd(this, _zr_instances);
    __privateAdd(this, _r3);
    __privateAdd(this, _e3);
    __privateAdd(this, _s3);
    __privateAdd(this, _t3);
    __privateSet(this, _r3, t), this.setOptions(e), this.bindMethods(), __privateMethod(this, _zr_instances, n_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var _a4;
    const e = this.options;
    this.options = __privateGet(this, _r3).defaultMutationOptions(t), Je(this.options, e) || __privateGet(this, _r3).getMutationCache().notify({ type: "observerOptionsUpdated", mutation: __privateGet(this, _s3), observer: this }), (e == null ? void 0 : e.mutationKey) && this.options.mutationKey && Dt(e.mutationKey) !== Dt(this.options.mutationKey) ? this.reset() : ((_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.state.status) === "pending" && __privateGet(this, _s3).setOptions(this.options);
  }
  onUnsubscribe() {
    var _a4;
    this.hasListeners() || ((_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.removeObserver(this));
  }
  onMutationUpdate(t) {
    __privateMethod(this, _zr_instances, n_fn).call(this), __privateMethod(this, _zr_instances, a_fn).call(this, t);
  }
  getCurrentResult() {
    return __privateGet(this, _e3);
  }
  reset() {
    var _a4;
    (_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.removeObserver(this), __privateSet(this, _s3, void 0), __privateMethod(this, _zr_instances, n_fn).call(this), __privateMethod(this, _zr_instances, a_fn).call(this);
  }
  mutate(t, e) {
    var _a4;
    return __privateSet(this, _t3, e), (_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.removeObserver(this), __privateSet(this, _s3, __privateGet(this, _r3).getMutationCache().build(__privateGet(this, _r3), this.options)), __privateGet(this, _s3).addObserver(this), __privateGet(this, _s3).execute(t);
  }
}, _r3 = new WeakMap(), _e3 = new WeakMap(), _s3 = new WeakMap(), _t3 = new WeakMap(), _zr_instances = new WeakSet(), n_fn = function() {
  var _a4;
  const t = ((_a4 = __privateGet(this, _s3)) == null ? void 0 : _a4.state) ?? Er();
  __privateSet(this, _e3, { ...t, isPending: t.status === "pending", isSuccess: t.status === "success", isError: t.status === "error", isIdle: t.status === "idle", mutate: this.mutate, reset: this.reset });
}, a_fn = function(t) {
  ut.batch(() => {
    var _a4, _b2, _c3, _d2, _e5, _f3, _g2, _h3;
    if (__privateGet(this, _t3) && this.hasListeners()) {
      const e = __privateGet(this, _e3).variables, r = __privateGet(this, _e3).context;
      (t == null ? void 0 : t.type) === "success" ? ((_b2 = (_a4 = __privateGet(this, _t3)).onSuccess) == null ? void 0 : _b2.call(_a4, t.data, e, r), (_d2 = (_c3 = __privateGet(this, _t3)).onSettled) == null ? void 0 : _d2.call(_c3, t.data, null, e, r)) : (t == null ? void 0 : t.type) === "error" && ((_f3 = (_e5 = __privateGet(this, _t3)).onError) == null ? void 0 : _f3.call(_e5, t.error, e, r), (_h3 = (_g2 = __privateGet(this, _t3)).onSettled) == null ? void 0 : _h3.call(_g2, void 0, t.error, e, r));
    }
    this.listeners.forEach((e) => {
      e(__privateGet(this, _e3));
    });
  });
}, _b), Ht = S.createContext(false), Fr = () => S.useContext(Ht);
Ht.Provider;
function Ur() {
  let t = false;
  return { clearReset: () => {
    t = false;
  }, reset: () => {
    t = true;
  }, isReset: () => t };
}
var $r = S.createContext(Ur()), Qr = () => S.useContext($r);
function Yt(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function _t() {
}
var qr = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = false));
}, Gr = (t) => {
  S.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Kr = ({ result: t, errorResetBoundary: e, throwOnError: r, query: s }) => t.isError && !e.isReset() && !t.isFetching && s && Yt(r, [t.error, s]), Xr = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Wr = (t, e) => t.isLoading && t.isFetching && !e, Jr = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, Mt = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function Hr(t, e, r) {
  var _a4, _b2, _c3, _d2, _e5, _f3;
  const s = Nt(), n = Fr(), i = Qr(), a = s.defaultQueryOptions(t);
  (_b2 = (_a4 = s.getDefaultOptions().queries) == null ? void 0 : _a4._experimental_beforeQuery) == null ? void 0 : _b2.call(_a4, a), a._optimisticResults = n ? "isRestoring" : "optimistic", Xr(a), qr(a, i), Gr(i);
  const o = !s.getQueryCache().get(a.queryHash), [l] = S.useState(() => new e(s, a)), c = l.getOptimisticResult(a);
  if (S.useSyncExternalStore(S.useCallback((u) => {
    const y = n ? _t : l.subscribe(ut.batchCalls(u));
    return l.updateResult(), y;
  }, [l, n]), () => l.getCurrentResult(), () => l.getCurrentResult()), S.useEffect(() => {
    l.setOptions(a, { listeners: false });
  }, [a, l]), Jr(a, c)) throw Mt(a, l, i);
  if (Kr({ result: c, errorResetBoundary: i, throwOnError: a.throwOnError, query: s.getQueryCache().get(a.queryHash) })) throw c.error;
  return (_d2 = (_c3 = s.getDefaultOptions().queries) == null ? void 0 : _c3._experimental_afterQuery) == null ? void 0 : _d2.call(_c3, a, c), a.experimental_prefetchInRender && !yt && Wr(c, n) && ((_f3 = o ? Mt(a, l, i) : (_e5 = s.getQueryCache().get(a.queryHash)) == null ? void 0 : _e5.promise) == null ? void 0 : _f3.catch(_t).finally(() => {
    l.updateResult();
  })), a.notifyOnChangeProps ? c : l.trackResult(c);
}
function Yr(t, e) {
  return Hr(t, Vr);
}
function Ce(t, e) {
  const r = Nt(), [s] = S.useState(() => new zr(r, t));
  S.useEffect(() => {
    s.setOptions(t);
  }, [s, t]);
  const n = S.useSyncExternalStore(S.useCallback((a) => s.subscribe(ut.batchCalls(a)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult()), i = S.useCallback((a, o) => {
    s.mutate(a, o).catch(_t);
  }, [s]);
  if (n.error && Yt(s.options.throwOnError, [n.error])) throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
class es extends S.Component {
  getSnapshotBeforeUpdate(e) {
    const r = this.props.childRef.current;
    if (r && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      s.height = r.offsetHeight || 0, s.width = r.offsetWidth || 0, s.top = r.offsetTop, s.left = r.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function ts({ children: t, isPresent: e }) {
  const r = S.useId(), s = S.useRef(null), n = S.useRef({ width: 0, height: 0, top: 0, left: 0 }), { nonce: i } = S.useContext(Rr);
  return S.useInsertionEffect(() => {
    const { width: a, height: o, top: l, left: c } = n.current;
    if (e || !s.current || !a || !o) return;
    s.current.dataset.motionPopId = r;
    const u = document.createElement("style");
    return i && (u.nonce = i), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [e]), _e.jsx(es, { isPresent: e, childRef: s, sizeRef: n, children: S.cloneElement(t, { ref: s }) });
}
const rs = ({ children: t, initial: e, isPresent: r, onExitComplete: s, custom: n, presenceAffectsLayout: i, mode: a }) => {
  const o = Jt(ss), l = S.useId(), c = S.useCallback((y) => {
    o.set(y, true);
    for (const b of o.values()) if (!b) return;
    s && s();
  }, [o, s]), u = S.useMemo(() => ({ id: l, initial: e, isPresent: r, custom: n, onExitComplete: c, register: (y) => (o.set(y, false), () => o.delete(y)) }), i ? [Math.random(), c] : [r, c]);
  return S.useMemo(() => {
    o.forEach((y, b) => o.set(b, false));
  }, [r]), S.useEffect(() => {
    !r && !o.size && s && s();
  }, [r]), a === "popLayout" && (t = _e.jsx(ts, { isPresent: r, children: t })), _e.jsx(Dr.Provider, { value: u, children: t });
};
function ss() {
  return /* @__PURE__ */ new Map();
}
const Xe = (t) => t.key || "";
function Vt(t) {
  const e = [];
  return S.Children.forEach(t, (r) => {
    S.isValidElement(r) && e.push(r);
  }), e;
}
const Za = ({ children: t, custom: e, initial: r = true, onExitComplete: s, presenceAffectsLayout: n = true, mode: i = "sync", propagate: a = false }) => {
  const [o, l] = jr(a), c = S.useMemo(() => Vt(t), [t]), u = a && !o ? [] : c.map(Xe), y = S.useRef(true), b = S.useRef(c), E = Jt(() => /* @__PURE__ */ new Map()), [Ge, Y] = S.useState(c), [U, me] = S.useState(c);
  Br(() => {
    y.current = false, b.current = c;
    for (let L = 0; L < U.length; L++) {
      const V = Xe(U[L]);
      u.includes(V) ? E.delete(V) : E.get(V) !== true && E.set(V, false);
    }
  }, [U, u.length, u.join("-")]);
  const le = [];
  if (c !== Ge) {
    let L = [...c];
    for (let V = 0; V < U.length; V++) {
      const R = U[V], A = Xe(R);
      u.includes(A) || (L.splice(V, 0, R), le.push(R));
    }
    i === "wait" && le.length && (L = le), me(Vt(L)), Y(c);
    return;
  }
  const { forceRender: ge } = S.useContext(Mr);
  return _e.jsx(_e.Fragment, { children: U.map((L) => {
    const V = Xe(L), R = a && !o ? false : c === U || u.includes(V), A = () => {
      if (E.has(V)) E.set(V, true);
      else return;
      let ee = true;
      E.forEach((ie) => {
        ie || (ee = false);
      }), ee && (ge == null ? void 0 : ge(), me(b.current), a && (l == null ? void 0 : l()), s && s());
    };
    return _e.jsx(rs, { isPresent: R, initial: !y.current || r ? void 0 : false, custom: R ? void 0 : e, presenceAffectsLayout: n, mode: i, onExitComplete: R ? void 0 : A, children: L }, V);
  }) });
};
var P;
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
})(P || (P = {}));
var bt;
(function(t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r });
})(bt || (bt = {}));
const m = P.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), re = (t) => {
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
}, h = P.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]), ns = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class F extends Error {
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
        let o = s, l = 0;
        for (; l < a.path.length; ) {
          const c = a.path[l];
          l === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(r(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
        }
      }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof F)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, P.jsonStringifyReplacer, 2);
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
F.create = (t) => new F(t);
const Te = (t, e) => {
  let r;
  switch (t.code) {
    case h.invalid_type:
      t.received === m.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case h.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, P.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${P.joinValues(t.keys, ", ")}`;
      break;
    case h.invalid_union:
      r = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${P.joinValues(t.options)}`;
      break;
    case h.invalid_enum_value:
      r = `Invalid enum value. Expected ${P.joinValues(t.options)}, received '${t.received}'`;
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
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : P.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
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
      r = e.defaultError, P.assertNever(t);
  }
  return { message: r };
};
let er = Te;
function is(t) {
  er = t;
}
function He() {
  return er;
}
const Ye = (t) => {
  const { data: e, path: r, errorMaps: s, issueData: n } = t, i = [...r, ...n.path || []], a = { ...n, path: i };
  if (n.message !== void 0) return { ...n, path: i, message: n.message };
  let o = "";
  const l = s.filter((c) => !!c).slice().reverse();
  for (const c of l) o = c(a, { data: e, defaultError: o }).message;
  return { ...n, path: i, message: o };
}, as = [];
function p(t, e) {
  const r = He(), s = Ye({ issueData: e, data: t.data, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, r, r === Te ? void 0 : Te].filter((n) => !!n) });
  t.common.issues.push(s);
}
class M {
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
    return M.mergeObjectSync(e, s);
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
const _ = Object.freeze({ status: "aborted" }), ve = (t) => ({ status: "dirty", value: t }), Z = (t) => ({ status: "valid", value: t }), xt = (t) => t.status === "aborted", wt = (t) => t.status === "dirty", he = (t) => t.status === "valid", Oe = (t) => typeof Promise < "u" && t instanceof Promise;
function et(t, e, r, s) {
  if (typeof e == "function" ? t !== e || true : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function tr(t, e, r, s, n) {
  if (typeof e == "function" ? t !== e || true : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var g;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(g || (g = {}));
var Ie, ke;
class J {
  constructor(e, r, s, n) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Zt = (t, e) => {
  if (he(e)) return { success: true, data: e.value };
  if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    const r = new F(t.common.issues);
    return this._error = r, this._error;
  } };
};
function x(t) {
  if (!t) return {};
  const { errorMap: e, invalid_type_error: r, required_error: s, description: n } = t;
  if (e && (r || s)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (a, o) => {
    var l, c;
    const { message: u } = t;
    return a.code === "invalid_enum_value" ? { message: u ?? o.defaultError } : typeof o.data > "u" ? { message: (l = u ?? s) !== null && l !== void 0 ? l : o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: (c = u ?? r) !== null && c !== void 0 ? c : o.defaultError };
  }, description: n };
}
class T {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return re(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || { common: e.parent.common, data: e.data, parsedType: re(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent };
  }
  _processInputParams(e) {
    return { status: new M(), ctx: { common: e.parent.common, data: e.data, parsedType: re(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent } };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Oe(r)) throw new Error("Synchronous parse encountered promise.");
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
    const n = { common: { issues: [], async: (s = r == null ? void 0 : r.async) !== null && s !== void 0 ? s : false, contextualErrorMap: r == null ? void 0 : r.errorMap }, path: (r == null ? void 0 : r.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: re(e) }, i = this._parseSync({ data: e, path: n.path, parent: n });
    return Zt(n, i);
  }
  "~validate"(e) {
    var r, s;
    const n = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: re(e) };
    if (!this["~standard"].async) try {
      const i = this._parseSync({ data: e, path: [], parent: n });
      return he(i) ? { value: i.value } : { issues: n.common.issues };
    } catch (i) {
      !((s = (r = i == null ? void 0 : i.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || s === void 0) && s.includes("encountered") && (this["~standard"].async = true), n.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e, path: [], parent: n }).then((i) => he(i) ? { value: i.value } : { issues: n.common.issues });
  }
  async parseAsync(e, r) {
    const s = await this.safeParseAsync(e, r);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(e, r) {
    const s = { common: { issues: [], contextualErrorMap: r == null ? void 0 : r.errorMap, async: true }, path: (r == null ? void 0 : r.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: re(e) }, n = this._parse({ data: e, path: s.path, parent: s }), i = await (Oe(n) ? n : Promise.resolve(n));
    return Zt(s, i);
  }
  refine(e, r) {
    const s = (n) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
    return this._refinement((n, i) => {
      const a = e(n), o = () => i.addIssue({ code: h.custom, ...s(n) });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? true : (o(), false)) : a ? true : (o(), false);
    });
  }
  refinement(e, r) {
    return this._refinement((s, n) => e(s) ? true : (n.addIssue(typeof r == "function" ? r(s, n) : r), false));
  }
  _refinement(e) {
    return new G({ schema: this, typeName: v.ZodEffects, effect: { type: "refinement", refinement: e } });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (r) => this["~validate"](r) };
  }
  optional() {
    return X.create(this, this._def);
  }
  nullable() {
    return ce.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return q.create(this);
  }
  promise() {
    return Pe.create(this, this._def);
  }
  or(e) {
    return De.create([this, e], this._def);
  }
  and(e) {
    return je.create(this, e, this._def);
  }
  transform(e) {
    return new G({ ...x(this._def), schema: this, typeName: v.ZodEffects, effect: { type: "transform", transform: e } });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Le({ ...x(this._def), innerType: this, defaultValue: r, typeName: v.ZodDefault });
  }
  brand() {
    return new kt({ typeName: v.ZodBranded, type: this, ...x(this._def) });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ze({ ...x(this._def), innerType: this, catchValue: r, typeName: v.ZodCatch });
  }
  describe(e) {
    const r = this.constructor;
    return new r({ ...this._def, description: e });
  }
  pipe(e) {
    return Qe.create(this, e);
  }
  readonly() {
    return Fe.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const os = /^c[^\s-]{8,}$/i, us = /^[0-9a-z]+$/, cs = /^[0-9A-HJKMNP-TV-Z]{26}$/i, ls = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ds = /^[a-z0-9_-]{21}$/i, hs = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, fs = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ps = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ms = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ft;
const gs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ys = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, vs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, _s = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, bs = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, xs = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, rr = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ws = new RegExp(`^${rr}$`);
function sr(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Ts(t) {
  return new RegExp(`^${sr(t)}$`);
}
function nr(t) {
  let e = `${rr}T${sr(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function Ss(t, e) {
  return !!((e === "v4" || !e) && gs.test(t) || (e === "v6" || !e) && vs.test(t));
}
function Ps(t, e) {
  if (!hs.test(t)) return false;
  try {
    const [r] = t.split("."), s = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), n = JSON.parse(atob(s));
    return !(typeof n != "object" || n === null || !n.typ || !n.alg || e && n.alg !== e);
  } catch {
    return false;
  }
}
function Cs(t, e) {
  return !!((e === "v4" || !e) && ys.test(t) || (e === "v6" || !e) && _s.test(t));
}
class Q extends T {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_type, expected: m.string, received: i.parsedType }), _;
    }
    const s = new M();
    let n;
    for (const i of this._def.checks) if (i.kind === "min") e.data.length < i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_small, minimum: i.value, type: "string", inclusive: true, exact: false, message: i.message }), s.dirty());
    else if (i.kind === "max") e.data.length > i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_big, maximum: i.value, type: "string", inclusive: true, exact: false, message: i.message }), s.dirty());
    else if (i.kind === "length") {
      const a = e.data.length > i.value, o = e.data.length < i.value;
      (a || o) && (n = this._getOrReturnCtx(e, n), a ? p(n, { code: h.too_big, maximum: i.value, type: "string", inclusive: true, exact: true, message: i.message }) : o && p(n, { code: h.too_small, minimum: i.value, type: "string", inclusive: true, exact: true, message: i.message }), s.dirty());
    } else if (i.kind === "email") ps.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "email", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "emoji") ft || (ft = new RegExp(ms, "u")), ft.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "emoji", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "uuid") ls.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "uuid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "nanoid") ds.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "nanoid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "cuid") os.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "cuid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "cuid2") us.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "cuid2", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "ulid") cs.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "ulid", code: h.invalid_string, message: i.message }), s.dirty());
    else if (i.kind === "url") try {
      new URL(e.data);
    } catch {
      n = this._getOrReturnCtx(e, n), p(n, { validation: "url", code: h.invalid_string, message: i.message }), s.dirty();
    }
    else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "regex", code: h.invalid_string, message: i.message }), s.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: { includes: i.value, position: i.position }, message: i.message }), s.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: { startsWith: i.value }, message: i.message }), s.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: { endsWith: i.value }, message: i.message }), s.dirty()) : i.kind === "datetime" ? nr(i).test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: "datetime", message: i.message }), s.dirty()) : i.kind === "date" ? ws.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: "date", message: i.message }), s.dirty()) : i.kind === "time" ? Ts(i).test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { code: h.invalid_string, validation: "time", message: i.message }), s.dirty()) : i.kind === "duration" ? fs.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "duration", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "ip" ? Ss(e.data, i.version) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "ip", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "jwt" ? Ps(e.data, i.alg) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "jwt", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "cidr" ? Cs(e.data, i.version) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "cidr", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "base64" ? bs.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "base64", code: h.invalid_string, message: i.message }), s.dirty()) : i.kind === "base64url" ? xs.test(e.data) || (n = this._getOrReturnCtx(e, n), p(n, { validation: "base64url", code: h.invalid_string, message: i.message }), s.dirty()) : P.assertNever(i);
    return { status: s.value, value: e.data };
  }
  _regex(e, r, s) {
    return this.refinement((n) => e.test(n), { validation: r, code: h.invalid_string, ...g.errToObj(s) });
  }
  _addCheck(e) {
    return new Q({ ...this._def, checks: [...this._def.checks, e] });
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
    return new Q({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new Q({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new Q({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
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
Q.create = (t) => {
  var e;
  return new Q({ checks: [], typeName: v.ZodString, coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false, ...x(t) });
};
function Ns(t, e) {
  const r = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = r > s ? r : s, i = parseInt(t.toFixed(n).replace(".", "")), a = parseInt(e.toFixed(n).replace(".", ""));
  return i % a / Math.pow(10, n);
}
class ae extends T {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_type, expected: m.number, received: i.parsedType }), _;
    }
    let s;
    const n = new M();
    for (const i of this._def.checks) i.kind === "int" ? P.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), p(s, { code: h.invalid_type, expected: "integer", received: "float", message: i.message }), n.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, exact: false, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, exact: false, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? Ns(e.data, i.value) !== 0 && (s = this._getOrReturnCtx(e, s), p(s, { code: h.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), p(s, { code: h.not_finite, message: i.message }), n.dirty()) : P.assertNever(i);
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
    return new ae({ ...this._def, checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: g.toString(n) }] });
  }
  _addCheck(e) {
    return new ae({ ...this._def, checks: [...this._def.checks, e] });
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && P.isInteger(e.value));
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
ae.create = (t) => new ae({ checks: [], typeName: v.ZodNumber, coerce: (t == null ? void 0 : t.coerce) || false, ...x(t) });
class oe extends T {
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
    const n = new M();
    for (const i of this._def.checks) i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_small, type: "bigint", minimum: i.value, inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.too_big, type: "bigint", maximum: i.value, inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), p(s, { code: h.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : P.assertNever(i);
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
    return new oe({ ...this._def, checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: g.toString(n) }] });
  }
  _addCheck(e) {
    return new oe({ ...this._def, checks: [...this._def.checks, e] });
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
oe.create = (t) => {
  var e;
  return new oe({ checks: [], typeName: v.ZodBigInt, coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false, ...x(t) });
};
class Ee extends T {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.boolean, received: s.parsedType }), _;
    }
    return Z(e.data);
  }
}
Ee.create = (t) => new Ee({ typeName: v.ZodBoolean, coerce: (t == null ? void 0 : t.coerce) || false, ...x(t) });
class fe extends T {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_type, expected: m.date, received: i.parsedType }), _;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return p(i, { code: h.invalid_date }), _;
    }
    const s = new M();
    let n;
    for (const i of this._def.checks) i.kind === "min" ? e.data.getTime() < i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_small, message: i.message, inclusive: true, exact: false, minimum: i.value, type: "date" }), s.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (n = this._getOrReturnCtx(e, n), p(n, { code: h.too_big, message: i.message, inclusive: true, exact: false, maximum: i.value, type: "date" }), s.dirty()) : P.assertNever(i);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new fe({ ...this._def, checks: [...this._def.checks, e] });
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
fe.create = (t) => new fe({ checks: [], coerce: (t == null ? void 0 : t.coerce) || false, typeName: v.ZodDate, ...x(t) });
class tt extends T {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.symbol, received: s.parsedType }), _;
    }
    return Z(e.data);
  }
}
tt.create = (t) => new tt({ typeName: v.ZodSymbol, ...x(t) });
class Ae extends T {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.undefined, received: s.parsedType }), _;
    }
    return Z(e.data);
  }
}
Ae.create = (t) => new Ae({ typeName: v.ZodUndefined, ...x(t) });
class Re extends T {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.null, received: s.parsedType }), _;
    }
    return Z(e.data);
  }
}
Re.create = (t) => new Re({ typeName: v.ZodNull, ...x(t) });
class Se extends T {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e) {
    return Z(e.data);
  }
}
Se.create = (t) => new Se({ typeName: v.ZodAny, ...x(t) });
class de extends T {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e) {
    return Z(e.data);
  }
}
de.create = (t) => new de({ typeName: v.ZodUnknown, ...x(t) });
class ne extends T {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return p(r, { code: h.invalid_type, expected: m.never, received: r.parsedType }), _;
  }
}
ne.create = (t) => new ne({ typeName: v.ZodNever, ...x(t) });
class rt extends T {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.void, received: s.parsedType }), _;
    }
    return Z(e.data);
  }
}
rt.create = (t) => new rt({ typeName: v.ZodVoid, ...x(t) });
class q extends T {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e), n = this._def;
    if (r.parsedType !== m.array) return p(r, { code: h.invalid_type, expected: m.array, received: r.parsedType }), _;
    if (n.exactLength !== null) {
      const a = r.data.length > n.exactLength.value, o = r.data.length < n.exactLength.value;
      (a || o) && (p(r, { code: a ? h.too_big : h.too_small, minimum: o ? n.exactLength.value : void 0, maximum: a ? n.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: n.exactLength.message }), s.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (p(r, { code: h.too_small, minimum: n.minLength.value, type: "array", inclusive: true, exact: false, message: n.minLength.message }), s.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (p(r, { code: h.too_big, maximum: n.maxLength.value, type: "array", inclusive: true, exact: false, message: n.maxLength.message }), s.dirty()), r.common.async) return Promise.all([...r.data].map((a, o) => n.type._parseAsync(new J(r, a, r.path, o)))).then((a) => M.mergeArray(s, a));
    const i = [...r.data].map((a, o) => n.type._parseSync(new J(r, a, r.path, o)));
    return M.mergeArray(s, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new q({ ...this._def, minLength: { value: e, message: g.toString(r) } });
  }
  max(e, r) {
    return new q({ ...this._def, maxLength: { value: e, message: g.toString(r) } });
  }
  length(e, r) {
    return new q({ ...this._def, exactLength: { value: e, message: g.toString(r) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
q.create = (t, e) => new q({ type: t, minLength: null, maxLength: null, exactLength: null, typeName: v.ZodArray, ...x(e) });
function ye(t) {
  if (t instanceof I) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = X.create(ye(s));
    }
    return new I({ ...t._def, shape: () => e });
  } else return t instanceof q ? new q({ ...t._def, type: ye(t.element) }) : t instanceof X ? X.create(ye(t.unwrap())) : t instanceof ce ? ce.create(ye(t.unwrap())) : t instanceof H ? H.create(t.items.map((e) => ye(e))) : t;
}
class I extends T {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(), r = P.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const c = this._getOrReturnCtx(e);
      return p(c, { code: h.invalid_type, expected: m.object, received: c.parsedType }), _;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof ne && this._def.unknownKeys === "strip")) for (const c in n.data) a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = i[c], y = n.data[c];
      l.push({ key: { status: "valid", value: c }, value: u._parse(new J(n, y, n.path, c)), alwaysSet: c in n.data });
    }
    if (this._def.catchall instanceof ne) {
      const c = this._def.unknownKeys;
      if (c === "passthrough") for (const u of o) l.push({ key: { status: "valid", value: u }, value: { status: "valid", value: n.data[u] } });
      else if (c === "strict") o.length > 0 && (p(n, { code: h.unrecognized_keys, keys: o }), s.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of o) {
        const y = n.data[u];
        l.push({ key: { status: "valid", value: u }, value: c._parse(new J(n, y, n.path, u)), alwaysSet: u in n.data });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const y = await u.key, b = await u.value;
        c.push({ key: y, value: b, alwaysSet: u.alwaysSet });
      }
      return c;
    }).then((c) => M.mergeObjectSync(s, c)) : M.mergeObjectSync(s, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return g.errToObj, new I({ ...this._def, unknownKeys: "strict", ...e !== void 0 ? { errorMap: (r, s) => {
      var n, i, a, o;
      const l = (a = (i = (n = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(n, r, s).message) !== null && a !== void 0 ? a : s.defaultError;
      return r.code === "unrecognized_keys" ? { message: (o = g.errToObj(e).message) !== null && o !== void 0 ? o : l } : { message: l };
    } } : {} });
  }
  strip() {
    return new I({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new I({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new I({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
  }
  merge(e) {
    return new I({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => ({ ...this._def.shape(), ...e._def.shape() }), typeName: v.ZodObject });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new I({ ...this._def, catchall: e });
  }
  pick(e) {
    const r = {};
    return P.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (r[s] = this.shape[s]);
    }), new I({ ...this._def, shape: () => r });
  }
  omit(e) {
    const r = {};
    return P.objectKeys(this.shape).forEach((s) => {
      e[s] || (r[s] = this.shape[s]);
    }), new I({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return ye(this);
  }
  partial(e) {
    const r = {};
    return P.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? r[s] = n : r[s] = n.optional();
    }), new I({ ...this._def, shape: () => r });
  }
  required(e) {
    const r = {};
    return P.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s]) r[s] = this.shape[s];
      else {
        let i = this.shape[s];
        for (; i instanceof X; ) i = i._def.innerType;
        r[s] = i;
      }
    }), new I({ ...this._def, shape: () => r });
  }
  keyof() {
    return ir(P.objectKeys(this.shape));
  }
}
I.create = (t, e) => new I({ shape: () => t, unknownKeys: "strip", catchall: ne.create(), typeName: v.ZodObject, ...x(e) });
I.strictCreate = (t, e) => new I({ shape: () => t, unknownKeys: "strict", catchall: ne.create(), typeName: v.ZodObject, ...x(e) });
I.lazycreate = (t, e) => new I({ shape: t, unknownKeys: "strip", catchall: ne.create(), typeName: v.ZodObject, ...x(e) });
class De extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = this._def.options;
    function n(i) {
      for (const o of i) if (o.result.status === "valid") return o.result;
      for (const o of i) if (o.result.status === "dirty") return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new F(o.ctx.common.issues));
      return p(r, { code: h.invalid_union, unionErrors: a }), _;
    }
    if (r.common.async) return Promise.all(s.map(async (i) => {
      const a = { ...r, common: { ...r.common, issues: [] }, parent: null };
      return { result: await i._parseAsync({ data: r.data, path: r.path, parent: a }), ctx: a };
    })).then(n);
    {
      let i;
      const a = [];
      for (const l of s) {
        const c = { ...r, common: { ...r.common, issues: [] }, parent: null }, u = l._parseSync({ data: r.data, path: r.path, parent: c });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (i) return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((l) => new F(l));
      return p(r, { code: h.invalid_union, unionErrors: o }), _;
    }
  }
  get options() {
    return this._def.options;
  }
}
De.create = (t, e) => new De({ options: t, typeName: v.ZodUnion, ...x(e) });
const te = (t) => t instanceof Me ? te(t.schema) : t instanceof G ? te(t.innerType()) : t instanceof Ve ? [t.value] : t instanceof ue ? t.options : t instanceof Ze ? P.objectValues(t.enum) : t instanceof Le ? te(t._def.innerType) : t instanceof Ae ? [void 0] : t instanceof Re ? [null] : t instanceof X ? [void 0, ...te(t.unwrap())] : t instanceof ce ? [null, ...te(t.unwrap())] : t instanceof kt || t instanceof Fe ? te(t.unwrap()) : t instanceof ze ? te(t._def.innerType) : [];
class ct extends T {
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
      const a = te(i.shape[e]);
      if (!a.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (n.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, i);
      }
    }
    return new ct({ typeName: v.ZodDiscriminatedUnion, discriminator: e, options: r, optionsMap: n, ...x(s) });
  }
}
function Tt(t, e) {
  const r = re(t), s = re(e);
  if (t === e) return { valid: true, data: t };
  if (r === m.object && s === m.object) {
    const n = P.objectKeys(e), i = P.objectKeys(t).filter((o) => n.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const l = Tt(t[o], e[o]);
      if (!l.valid) return { valid: false };
      a[o] = l.data;
    }
    return { valid: true, data: a };
  } else if (r === m.array && s === m.array) {
    if (t.length !== e.length) return { valid: false };
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], o = e[i], l = Tt(a, o);
      if (!l.valid) return { valid: false };
      n.push(l.data);
    }
    return { valid: true, data: n };
  } else return r === m.date && s === m.date && +t == +e ? { valid: true, data: t } : { valid: false };
}
class je extends T {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = (i, a) => {
      if (xt(i) || xt(a)) return _;
      const o = Tt(i.value, a.value);
      return o.valid ? ((wt(i) || wt(a)) && r.dirty(), { status: r.value, value: o.data }) : (p(s, { code: h.invalid_intersection_types }), _);
    };
    return s.common.async ? Promise.all([this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }), this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })]).then(([i, a]) => n(i, a)) : n(this._def.left._parseSync({ data: s.data, path: s.path, parent: s }), this._def.right._parseSync({ data: s.data, path: s.path, parent: s }));
  }
}
je.create = (t, e, r) => new je({ left: t, right: e, typeName: v.ZodIntersection, ...x(r) });
class H extends T {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.array) return p(s, { code: h.invalid_type, expected: m.array, received: s.parsedType }), _;
    if (s.data.length < this._def.items.length) return p(s, { code: h.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), _;
    !this._def.rest && s.data.length > this._def.items.length && (p(s, { code: h.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), r.dirty());
    const i = [...s.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new J(s, a, s.path, o)) : null;
    }).filter((a) => !!a);
    return s.common.async ? Promise.all(i).then((a) => M.mergeArray(r, a)) : M.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new H({ ...this._def, rest: e });
  }
}
H.create = (t, e) => {
  if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new H({ items: t, typeName: v.ZodTuple, rest: null, ...x(e) });
};
class Be extends T {
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
    for (const o in s.data) n.push({ key: i._parse(new J(s, o, s.path, o)), value: a._parse(new J(s, s.data[o], s.path, o)), alwaysSet: o in s.data });
    return s.common.async ? M.mergeObjectAsync(r, n) : M.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, s) {
    return r instanceof T ? new Be({ keyType: e, valueType: r, typeName: v.ZodRecord, ...x(s) }) : new Be({ keyType: Q.create(), valueType: e, typeName: v.ZodRecord, ...x(r) });
  }
}
class st extends T {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.map) return p(s, { code: h.invalid_type, expected: m.map, received: s.parsedType }), _;
    const n = this._def.keyType, i = this._def.valueType, a = [...s.data.entries()].map(([o, l], c) => ({ key: n._parse(new J(s, o, s.path, [c, "key"])), value: i._parse(new J(s, l, s.path, [c, "value"])) }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted") return _;
          (c.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(c.value, u.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted") return _;
        (c.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(c.value, u.value);
      }
      return { status: r.value, value: o };
    }
  }
}
st.create = (t, e, r) => new st({ valueType: e, keyType: t, typeName: v.ZodMap, ...x(r) });
class pe extends T {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== m.set) return p(s, { code: h.invalid_type, expected: m.set, received: s.parsedType }), _;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (p(s, { code: h.too_small, minimum: n.minSize.value, type: "set", inclusive: true, exact: false, message: n.minSize.message }), r.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (p(s, { code: h.too_big, maximum: n.maxSize.value, type: "set", inclusive: true, exact: false, message: n.maxSize.message }), r.dirty());
    const i = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted") return _;
        u.status === "dirty" && r.dirty(), c.add(u.value);
      }
      return { status: r.value, value: c };
    }
    const o = [...s.data.values()].map((l, c) => i._parse(new J(s, l, s.path, c)));
    return s.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, r) {
    return new pe({ ...this._def, minSize: { value: e, message: g.toString(r) } });
  }
  max(e, r) {
    return new pe({ ...this._def, maxSize: { value: e, message: g.toString(r) } });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
pe.create = (t, e) => new pe({ valueType: t, minSize: null, maxSize: null, typeName: v.ZodSet, ...x(e) });
class be extends T {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.function) return p(r, { code: h.invalid_type, expected: m.function, received: r.parsedType }), _;
    function s(o, l) {
      return Ye({ data: o, path: r.path, errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, He(), Te].filter((c) => !!c), issueData: { code: h.invalid_arguments, argumentsError: l } });
    }
    function n(o, l) {
      return Ye({ data: o, path: r.path, errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, He(), Te].filter((c) => !!c), issueData: { code: h.invalid_return_type, returnTypeError: l } });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    if (this._def.returns instanceof Pe) {
      const o = this;
      return Z(async function(...l) {
        const c = new F([]), u = await o._def.args.parseAsync(l, i).catch((E) => {
          throw c.addIssue(s(l, E)), c;
        }), y = await Reflect.apply(a, this, u);
        return await o._def.returns._def.type.parseAsync(y, i).catch((E) => {
          throw c.addIssue(n(y, E)), c;
        });
      });
    } else {
      const o = this;
      return Z(function(...l) {
        const c = o._def.args.safeParse(l, i);
        if (!c.success) throw new F([s(l, c.error)]);
        const u = Reflect.apply(a, this, c.data), y = o._def.returns.safeParse(u, i);
        if (!y.success) throw new F([n(u, y.error)]);
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
    return new be({ ...this._def, args: H.create(e).rest(de.create()) });
  }
  returns(e) {
    return new be({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, s) {
    return new be({ args: e || H.create([]).rest(de.create()), returns: r || de.create(), typeName: v.ZodFunction, ...x(s) });
  }
}
class Me extends T {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Me.create = (t, e) => new Me({ getter: t, typeName: v.ZodLazy, ...x(e) });
class Ve extends T {
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
Ve.create = (t, e) => new Ve({ value: t, typeName: v.ZodLiteral, ...x(e) });
function ir(t, e) {
  return new ue({ values: t, typeName: v.ZodEnum, ...x(e) });
}
class ue extends T {
  constructor() {
    super(...arguments), Ie.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return p(r, { expected: P.joinValues(s), received: r.parsedType, code: h.invalid_type }), _;
    }
    if (et(this, Ie) || tr(this, Ie, new Set(this._def.values)), !et(this, Ie).has(e.data)) {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return p(r, { received: r.data, code: h.invalid_enum_value, options: s }), _;
    }
    return Z(e.data);
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
    return ue.create(e, { ...this._def, ...r });
  }
  exclude(e, r = this._def) {
    return ue.create(this.options.filter((s) => !e.includes(s)), { ...this._def, ...r });
  }
}
Ie = /* @__PURE__ */ new WeakMap();
ue.create = ir;
class Ze extends T {
  constructor() {
    super(...arguments), ke.set(this, void 0);
  }
  _parse(e) {
    const r = P.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== m.string && s.parsedType !== m.number) {
      const n = P.objectValues(r);
      return p(s, { expected: P.joinValues(n), received: s.parsedType, code: h.invalid_type }), _;
    }
    if (et(this, ke) || tr(this, ke, new Set(P.getValidEnumValues(this._def.values))), !et(this, ke).has(e.data)) {
      const n = P.objectValues(r);
      return p(s, { received: s.data, code: h.invalid_enum_value, options: n }), _;
    }
    return Z(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ke = /* @__PURE__ */ new WeakMap();
Ze.create = (t, e) => new Ze({ values: t, typeName: v.ZodNativeEnum, ...x(e) });
class Pe extends T {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.promise && r.common.async === false) return p(r, { code: h.invalid_type, expected: m.promise, received: r.parsedType }), _;
    const s = r.parsedType === m.promise ? r.data : Promise.resolve(r.data);
    return Z(s.then((n) => this._def.type.parseAsync(n, { path: r.path, errorMap: r.common.contextualErrorMap })));
  }
}
Pe.create = (t, e) => new Pe({ type: t, typeName: v.ZodPromise, ...x(e) });
class G extends T {
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
        const l = await this._def.schema._parseAsync({ data: o, path: s.path, parent: s });
        return l.status === "aborted" ? _ : l.status === "dirty" || r.value === "dirty" ? ve(l.value) : l;
      });
      {
        if (r.value === "aborted") return _;
        const o = this._def.schema._parseSync({ data: a, path: s.path, parent: s });
        return o.status === "aborted" ? _ : o.status === "dirty" || r.value === "dirty" ? ve(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const a = (o) => {
        const l = n.refinement(o, i);
        if (s.common.async) return Promise.resolve(l);
        if (l instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === false) {
        const o = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return o.status === "aborted" ? _ : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? _ : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (n.type === "transform") if (s.common.async === false) {
      const a = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
      if (!he(a)) return a;
      const o = n.transform(a.value, i);
      if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: r.value, value: o };
    } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((a) => he(a) ? Promise.resolve(n.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    P.assertNever(n);
  }
}
G.create = (t, e, r) => new G({ schema: t, typeName: v.ZodEffects, effect: e, ...x(r) });
G.createWithPreprocess = (t, e, r) => new G({ schema: e, effect: { type: "preprocess", transform: t }, typeName: v.ZodEffects, ...x(r) });
class X extends T {
  _parse(e) {
    return this._getType(e) === m.undefined ? Z(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
X.create = (t, e) => new X({ innerType: t, typeName: v.ZodOptional, ...x(e) });
class ce extends T {
  _parse(e) {
    return this._getType(e) === m.null ? Z(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ce.create = (t, e) => new ce({ innerType: t, typeName: v.ZodNullable, ...x(e) });
class Le extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let s = r.data;
    return r.parsedType === m.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({ data: s, path: r.path, parent: r });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Le.create = (t, e) => new Le({ innerType: t, typeName: v.ZodDefault, defaultValue: typeof e.default == "function" ? e.default : () => e.default, ...x(e) });
class ze extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = { ...r, common: { ...r.common, issues: [] } }, n = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return Oe(n) ? n.then((i) => ({ status: "valid", value: i.status === "valid" ? i.value : this._def.catchValue({ get error() {
      return new F(s.common.issues);
    }, input: s.data }) })) : { status: "valid", value: n.status === "valid" ? n.value : this._def.catchValue({ get error() {
      return new F(s.common.issues);
    }, input: s.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ze.create = (t, e) => new ze({ innerType: t, typeName: v.ZodCatch, catchValue: typeof e.catch == "function" ? e.catch : () => e.catch, ...x(e) });
class nt extends T {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const s = this._getOrReturnCtx(e);
      return p(s, { code: h.invalid_type, expected: m.nan, received: s.parsedType }), _;
    }
    return { status: "valid", value: e.data };
  }
}
nt.create = (t) => new nt({ typeName: v.ZodNaN, ...x(t) });
const Is = Symbol("zod_brand");
class kt extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = r.data;
    return this._def.type._parse({ data: s, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class Qe extends T {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.common.async) return (async () => {
      const i = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
      return i.status === "aborted" ? _ : i.status === "dirty" ? (r.dirty(), ve(i.value)) : this._def.out._parseAsync({ data: i.value, path: s.path, parent: s });
    })();
    {
      const n = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return n.status === "aborted" ? _ : n.status === "dirty" ? (r.dirty(), { status: "dirty", value: n.value }) : this._def.out._parseSync({ data: n.value, path: s.path, parent: s });
    }
  }
  static create(e, r) {
    return new Qe({ in: e, out: r, typeName: v.ZodPipeline });
  }
}
class Fe extends T {
  _parse(e) {
    const r = this._def.innerType._parse(e), s = (n) => (he(n) && (n.value = Object.freeze(n.value)), n);
    return Oe(r) ? r.then((n) => s(n)) : s(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Fe.create = (t, e) => new Fe({ innerType: t, typeName: v.ZodReadonly, ...x(e) });
function Lt(t, e) {
  const r = typeof t == "function" ? t(e) : typeof t == "string" ? { message: t } : t;
  return typeof r == "string" ? { message: r } : r;
}
function ar(t, e = {}, r) {
  return t ? Se.create().superRefine((s, n) => {
    var i, a;
    const o = t(s);
    if (o instanceof Promise) return o.then((l) => {
      var c, u;
      if (!l) {
        const y = Lt(e, s), b = (u = (c = y.fatal) !== null && c !== void 0 ? c : r) !== null && u !== void 0 ? u : true;
        n.addIssue({ code: "custom", ...y, fatal: b });
      }
    });
    if (!o) {
      const l = Lt(e, s), c = (a = (i = l.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : true;
      n.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : Se.create();
}
const ks = { object: I.lazycreate };
var v;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(v || (v = {}));
const Os = (t, e = { message: `Input not instance of ${t.name}` }) => ar((r) => r instanceof t, e), or = Q.create, ur = ae.create, Es = nt.create, As = oe.create, cr = Ee.create, Rs = fe.create, Ds = tt.create, js = Ae.create, Bs = Re.create, Ms = Se.create, Vs = de.create, Zs = ne.create, Ls = rt.create, zs = q.create, Fs = I.create, Us = I.strictCreate, $s = De.create, Qs = ct.create, qs = je.create, Gs = H.create, Ks = Be.create, Xs = st.create, Ws = pe.create, Js = be.create, Hs = Me.create, Ys = Ve.create, en = ue.create, tn = Ze.create, rn = Pe.create, zt = G.create, sn = X.create, nn = ce.create, an = G.createWithPreprocess, on = Qe.create, un = () => or().optional(), cn = () => ur().optional(), ln = () => cr().optional(), dn = { string: (t) => Q.create({ ...t, coerce: true }), number: (t) => ae.create({ ...t, coerce: true }), boolean: (t) => Ee.create({ ...t, coerce: true }), bigint: (t) => oe.create({ ...t, coerce: true }), date: (t) => fe.create({ ...t, coerce: true }) }, hn = _;
var f = Object.freeze({ __proto__: null, defaultErrorMap: Te, setErrorMap: is, getErrorMap: He, makeIssue: Ye, EMPTY_PATH: as, addIssueToContext: p, ParseStatus: M, INVALID: _, DIRTY: ve, OK: Z, isAborted: xt, isDirty: wt, isValid: he, isAsync: Oe, get util() {
  return P;
}, get objectUtil() {
  return bt;
}, ZodParsedType: m, getParsedType: re, ZodType: T, datetimeRegex: nr, ZodString: Q, ZodNumber: ae, ZodBigInt: oe, ZodBoolean: Ee, ZodDate: fe, ZodSymbol: tt, ZodUndefined: Ae, ZodNull: Re, ZodAny: Se, ZodUnknown: de, ZodNever: ne, ZodVoid: rt, ZodArray: q, ZodObject: I, ZodUnion: De, ZodDiscriminatedUnion: ct, ZodIntersection: je, ZodTuple: H, ZodRecord: Be, ZodMap: st, ZodSet: pe, ZodFunction: be, ZodLazy: Me, ZodLiteral: Ve, ZodEnum: ue, ZodNativeEnum: Ze, ZodPromise: Pe, ZodEffects: G, ZodTransformer: G, ZodOptional: X, ZodNullable: ce, ZodDefault: Le, ZodCatch: ze, ZodNaN: nt, BRAND: Is, ZodBranded: kt, ZodPipeline: Qe, ZodReadonly: Fe, custom: ar, Schema: T, ZodSchema: T, late: ks, get ZodFirstPartyTypeKind() {
  return v;
}, coerce: dn, any: Ms, array: zs, bigint: As, boolean: cr, date: Rs, discriminatedUnion: Qs, effect: zt, enum: en, function: Js, instanceof: Os, intersection: qs, lazy: Hs, literal: Ys, map: Xs, nan: Es, nativeEnum: tn, never: Zs, null: Bs, nullable: nn, number: ur, object: Fs, oboolean: ln, onumber: cn, optional: sn, ostring: un, pipeline: on, preprocess: an, promise: rn, record: Ks, set: Ws, strictObject: Us, string: or, symbol: Ds, transformer: zt, tuple: Gs, undefined: js, union: $s, unknown: Vs, void: Ls, NEVER: hn, ZodIssueCode: h, quotelessJson: ns, ZodError: F });
const d = Symbol.for("drizzle:entityKind");
function B(t, e) {
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
class Ue {
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
__publicField(Ue, _c2, "Column");
_d = d;
class fn {
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
__publicField(fn, _d, "ColumnBuilder");
const xe = Symbol.for("drizzle:Name");
_e4 = d;
class pn {
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
    return new mn(e, this);
  }
}
__publicField(pn, _e4, "PgForeignKeyBuilder");
_f2 = d;
class mn {
  constructor(e, r) {
    __publicField(this, "reference");
    __publicField(this, "onUpdate");
    __publicField(this, "onDelete");
    this.table = e, this.reference = r.reference, this.onUpdate = r._onUpdate, this.onDelete = r._onDelete;
  }
  getName() {
    const { name: e, columns: r, foreignColumns: s } = this.reference(), n = r.map((o) => o.name), i = s.map((o) => o.name), a = [this.table[xe], ...n, s[0].table[xe], ...i];
    return e ?? `${a.join("_")}_fk`;
  }
}
__publicField(mn, _f2, "PgForeignKey");
function gn(t, ...e) {
  return t(...e);
}
function yn(t, e) {
  return `${t[xe]}_${e.join("_")}_unique`;
}
function Ft(t, e, r) {
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
function lr(t, e = 0) {
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
      const [l, c] = Ft(t, s + 1, true);
      r.push(l), s = c;
      continue;
    }
    if (i === "}") return [r, s + 1];
    if (i === "{") {
      const [l, c] = lr(t, s + 1);
      r.push(l), s = c;
      continue;
    }
    const [a, o] = Ft(t, s, false);
    r.push(a), s = o;
  }
  return [r, s];
}
function vn(t) {
  const [e] = lr(t, 1);
  return e;
}
function dr(t) {
  return `{${t.map((e) => Array.isArray(e) ? dr(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`;
}
class C extends (_h2 = fn, _g = d, _h2) {
  constructor() {
    super(...arguments);
    __publicField(this, "foreignKeyConfigs", []);
  }
  array(e) {
    return new bn(this.config.name, this, e);
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
    return this.foreignKeyConfigs.map(({ ref: s, actions: n }) => gn((i, a) => {
      const o = new pn(() => {
        const l = i();
        return { columns: [e], foreignColumns: [l] };
      });
      return a.onUpdate && o.onUpdate(a.onUpdate), a.onDelete && o.onDelete(a.onDelete), o.build(r);
    }, s, n));
  }
  buildExtraConfigColumn(e) {
    return new _n(e, this.config);
  }
}
__publicField(C, _g, "PgColumnBuilder");
class w extends (_j = Ue, _i3 = d, _j) {
  constructor(e, r) {
    r.uniqueName || (r.uniqueName = yn(e, [r.name])), super(e, r), this.table = e;
  }
}
__publicField(w, _i3, "PgColumn");
class _n extends (_l2 = w, _k2 = d, _l2) {
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
__publicField(_n, _k2, "ExtraConfigColumn");
class bn extends (_n3 = C, _m2 = d, _n3) {
  constructor(e, r, s) {
    super(e, "array", "PgArray"), this.config.baseBuilder = r, this.config.size = s;
  }
  build(e) {
    const r = this.config.baseBuilder.build(e);
    return new Ot(e, this.config, r);
  }
}
__publicField(bn, _m2, "PgArrayBuilder");
const _Ot = class _Ot extends (_p2 = w, _o2 = d, _p2) {
  constructor(e, r, s, n) {
    super(e, r);
    __publicField(this, "size");
    this.baseColumn = s, this.range = n, this.size = r.size;
  }
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(e) {
    return typeof e == "string" && (e = vn(e)), e.map((r) => this.baseColumn.mapFromDriverValue(r));
  }
  mapToDriverValue(e, r = false) {
    const s = e.map((n) => n === null ? null : B(this.baseColumn, _Ot) ? this.baseColumn.mapToDriverValue(n, true) : this.baseColumn.mapToDriverValue(n));
    return r ? s : dr(s);
  }
};
__publicField(_Ot, _o2, "PgArray");
let Ot = _Ot;
const Ut = Symbol.for("drizzle:isPgEnum");
function xn(t) {
  return !!t && typeof t == "function" && Ut in t && t[Ut] === true;
}
_q = d;
class hr {
  constructor(e, r, s, n = false) {
    this._ = { brand: "Subquery", sql: e, selectedFields: r, alias: s, isWith: n };
  }
}
__publicField(hr, _q, "Subquery");
const wn = { startActiveSpan(t, e) {
  return e();
} }, we = Symbol.for("drizzle:ViewBaseConfig"), pt = Symbol.for("drizzle:Schema"), $t = Symbol.for("drizzle:Columns"), Qt = Symbol.for("drizzle:ExtraConfigColumns"), mt = Symbol.for("drizzle:OriginalName"), gt = Symbol.for("drizzle:BaseName"), it = Symbol.for("drizzle:IsAlias"), qt = Symbol.for("drizzle:ExtraConfigBuilder"), fr = Symbol.for("drizzle:IsDrizzleTable");
_A = d, _z = xe, _y = mt, _x = pt, _w = $t, _v = Qt, _u2 = gt, _t4 = it, _s4 = fr, _r4 = qt;
class z {
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
    this[xe] = this[mt] = e, this[pt] = r, this[gt] = s;
  }
}
__publicField(z, _A, "Table");
__publicField(z, "Symbol", { Name: xe, Schema: pt, OriginalName: mt, Columns: $t, ExtraConfigColumns: Qt, BaseName: gt, IsAlias: it, ExtraConfigBuilder: qt });
function pr(t) {
  return typeof t == "object" && t !== null && fr in t;
}
function Tn(t) {
  return t != null && typeof t.getSQL == "function";
}
function Sn(t) {
  var _a4;
  const e = { sql: "", params: [] };
  for (const r of t) e.sql += r.sql, e.params.push(...r.params), ((_a4 = r.typings) == null ? void 0 : _a4.length) && (e.typings || (e.typings = []), e.typings.push(...r.typings));
  return e;
}
_B = d;
class $ {
  constructor(e) {
    __publicField(this, "value");
    this.value = Array.isArray(e) ? e : [e];
  }
  getSQL() {
    return new k([this]);
  }
}
__publicField($, _B, "StringChunk");
_C = d;
const _k = class _k {
  constructor(e) {
    __publicField(this, "decoder", mr);
    __publicField(this, "shouldInlineParams", false);
    this.queryChunks = e;
  }
  append(e) {
    return this.queryChunks.push(...e.queryChunks), this;
  }
  toQuery(e) {
    return wn.startActiveSpan("drizzle.buildSQL", (r) => {
      const s = this.buildQueryFromSourceParams(this.queryChunks, e);
      return r == null ? void 0 : r.setAttributes({ "drizzle.query.text": s.sql, "drizzle.query.params": JSON.stringify(s.params) }), s;
    });
  }
  buildQueryFromSourceParams(e, r) {
    const s = Object.assign({}, r, { inlineParams: r.inlineParams || this.shouldInlineParams, paramStartIndex: r.paramStartIndex || { value: 0 } }), { casing: n, escapeName: i, escapeParam: a, prepareTyping: o, inlineParams: l, paramStartIndex: c } = s;
    return Sn(e.map((u) => {
      var _a4;
      if (B(u, $)) return { sql: u.value.join(""), params: [] };
      if (B(u, St)) return { sql: i(u.value), params: [] };
      if (u === void 0) return { sql: "", params: [] };
      if (Array.isArray(u)) {
        const y = [new $("(")];
        for (const [b, E] of u.entries()) y.push(E), b < u.length - 1 && y.push(new $(", "));
        return y.push(new $(")")), this.buildQueryFromSourceParams(y, s);
      }
      if (B(u, _k)) return this.buildQueryFromSourceParams(u.queryChunks, { ...s, inlineParams: l || u.shouldInlineParams });
      if (B(u, z)) {
        const y = u[z.Symbol.Schema], b = u[z.Symbol.Name];
        return { sql: y === void 0 || u[it] ? i(b) : i(y) + "." + i(b), params: [] };
      }
      if (B(u, Ue)) {
        const y = n.getColumnCasing(u);
        if (r.invokeSource === "indexes") return { sql: i(y), params: [] };
        const b = u.table[z.Symbol.Schema];
        return { sql: u.table[it] || b === void 0 ? i(u.table[z.Symbol.Name]) + "." + i(y) : i(b) + "." + i(u.table[z.Symbol.Name]) + "." + i(y), params: [] };
      }
      if (B(u, Pn)) {
        const y = u[we].schema, b = u[we].name;
        return { sql: y === void 0 || u[we].isAlias ? i(b) : i(y) + "." + i(b), params: [] };
      }
      if (B(u, yr)) {
        if (B(u.value, Pt)) return { sql: a(c.value++, u), params: [u], typings: ["none"] };
        const y = u.value === null ? null : u.encoder.mapToDriverValue(u.value);
        if (B(y, _k)) return this.buildQueryFromSourceParams([y], s);
        if (l) return { sql: this.mapInlineParam(y, s), params: [] };
        let b = ["none"];
        return o && (b = [o(u.encoder)]), { sql: a(c.value++, y), params: [y], typings: b };
      }
      return B(u, Pt) ? { sql: a(c.value++, u), params: [u], typings: ["none"] } : B(u, _k.Aliased) && u.fieldAlias !== void 0 ? { sql: i(u.fieldAlias), params: [] } : B(u, hr) ? u._.isWith ? { sql: i(u._.alias), params: [] } : this.buildQueryFromSourceParams([new $("("), u._.sql, new $(") "), new St(u._.alias)], s) : xn(u) ? u.schema ? { sql: i(u.schema) + "." + i(u.enumName), params: [] } : { sql: i(u.enumName), params: [] } : Tn(u) ? ((_a4 = u.shouldOmitSQLParens) == null ? void 0 : _a4.call(u)) ? this.buildQueryFromSourceParams([u.getSQL()], s) : this.buildQueryFromSourceParams([new $("("), u.getSQL(), new $(")")], s) : l ? { sql: this.mapInlineParam(u, s), params: [] } : { sql: a(c.value++, u), params: [u], typings: ["none"] };
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
    return e === void 0 ? this : new _k.Aliased(this, e);
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
__publicField(_k, _C, "SQL");
let k = _k;
_D = d;
class St {
  constructor(e) {
    __publicField(this, "brand");
    this.value = e;
  }
  getSQL() {
    return new k([this]);
  }
}
__publicField(St, _D, "Name");
const mr = { mapFromDriverValue: (t) => t }, gr = { mapToDriverValue: (t) => t };
({ ...mr, ...gr });
_E = d;
class yr {
  constructor(e, r = gr) {
    __publicField(this, "brand");
    this.value = e, this.encoder = r;
  }
  getSQL() {
    return new k([this]);
  }
}
__publicField(yr, _E, "Param");
function at(t, ...e) {
  const r = [];
  (e.length > 0 || t.length > 0 && t[0] !== "") && r.push(new $(t[0]));
  for (const [s, n] of e.entries()) r.push(n, new $(t[s + 1]));
  return new k(r);
}
((t) => {
  function e() {
    return new k([]);
  }
  t.empty = e;
  function r(l) {
    return new k(l);
  }
  t.fromList = r;
  function s(l) {
    return new k([new $(l)]);
  }
  t.raw = s;
  function n(l, c) {
    const u = [];
    for (const [y, b] of l.entries()) y > 0 && c !== void 0 && u.push(c), u.push(b);
    return new k(u);
  }
  t.join = n;
  function i(l) {
    return new St(l);
  }
  t.identifier = i;
  function a(l) {
    return new Pt(l);
  }
  t.placeholder = a;
  function o(l, c) {
    return new yr(l, c);
  }
  t.param = o;
})(at || (at = {}));
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
})(k || (k = {}));
_F = d;
class Pt {
  constructor(e) {
    this.name = e;
  }
  getSQL() {
    return new k([this]);
  }
}
__publicField(Pt, _F, "Placeholder");
const vr = Symbol.for("drizzle:IsDrizzleView");
_I = d, _H = we, _G = vr;
class Pn {
  constructor({ name: e, schema: r, selectedFields: s, query: n }) {
    __publicField(this, _H);
    __publicField(this, _G, true);
    this[we] = { name: e, originalName: e, schema: r, selectedFields: s, query: n, isExisting: !n, isAlias: false };
  }
  getSQL() {
    return new k([this]);
  }
}
__publicField(Pn, _I, "View");
function Cn(t) {
  return typeof t == "object" && t !== null && vr in t;
}
Ue.prototype.getSQL = function() {
  return new k([this]);
};
z.prototype.getSQL = function() {
  return new k([this]);
};
hr.prototype.getSQL = function() {
  return new k([this]);
};
function Nn(t) {
  return t[z.Symbol.Columns];
}
function In(t) {
  return t[we].selectedFields;
}
function j(t, e) {
  return { name: typeof t == "string" && t.length > 0 ? t : "", config: typeof t == "object" ? t : e };
}
class lt extends (_K = C, _J = d, _K) {
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
__publicField(lt, _J, "PgIntColumnBaseBuilder");
class kn extends (_M = lt, _L = d, _M) {
  constructor(e) {
    super(e, "number", "PgBigInt53");
  }
  build(e) {
    return new On(e, this.config);
  }
}
__publicField(kn, _L, "PgBigInt53Builder");
class On extends (_O = w, _N = d, _O) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
__publicField(On, _N, "PgBigInt53");
class En extends (_Q = lt, _P = d, _Q) {
  constructor(e) {
    super(e, "bigint", "PgBigInt64");
  }
  build(e) {
    return new An(e, this.config);
  }
}
__publicField(En, _P, "PgBigInt64Builder");
class An extends (_S = w, _R = d, _S) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
__publicField(An, _R, "PgBigInt64");
function Rn(t, e) {
  const { name: r, config: s } = j(t, e);
  return s.mode === "number" ? new kn(r) : new En(r);
}
class Dn extends (_U = C, _T = d, _U) {
  constructor(e) {
    super(e, "number", "PgBigSerial53"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(e) {
    return new jn(e, this.config);
  }
}
__publicField(Dn, _T, "PgBigSerial53Builder");
class jn extends (_W = w, _V = d, _W) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
__publicField(jn, _V, "PgBigSerial53");
class Bn extends (_Y = C, _X = d, _Y) {
  constructor(e) {
    super(e, "bigint", "PgBigSerial64"), this.config.hasDefault = true;
  }
  build(e) {
    return new Mn(e, this.config);
  }
}
__publicField(Bn, _X, "PgBigSerial64Builder");
class Mn extends (__ = w, _Z = d, __) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
__publicField(Mn, _Z, "PgBigSerial64");
function Vn(t, e) {
  const { name: r, config: s } = j(t, e);
  return s.mode === "number" ? new Dn(r) : new Bn(r);
}
class Zn extends (_aa = C, _$ = d, _aa) {
  constructor(e) {
    super(e, "boolean", "PgBoolean");
  }
  build(e) {
    return new Ln(e, this.config);
  }
}
__publicField(Zn, _$, "PgBooleanBuilder");
class Ln extends (_ca = w, _ba = d, _ca) {
  getSQLType() {
    return "boolean";
  }
}
__publicField(Ln, _ba, "PgBoolean");
function dt(t) {
  return new Zn(t ?? "");
}
class zn extends (_ea = C, _da = d, _ea) {
  constructor(e, r) {
    super(e, "string", "PgChar"), this.config.length = r.length, this.config.enumValues = r.enum;
  }
  build(e) {
    return new Fn(e, this.config);
  }
}
__publicField(zn, _da, "PgCharBuilder");
class Fn extends (_ga = w, _fa = d, _ga) {
  constructor() {
    super(...arguments);
    __publicField(this, "length", this.config.length);
    __publicField(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
__publicField(Fn, _fa, "PgChar");
function Un(t, e = {}) {
  const { name: r, config: s } = j(t, e);
  return new zn(r, s);
}
class $n extends (_ia = C, _ha = d, _ia) {
  constructor(e) {
    super(e, "string", "PgCidr");
  }
  build(e) {
    return new Qn(e, this.config);
  }
}
__publicField($n, _ha, "PgCidrBuilder");
class Qn extends (_ka = w, _ja = d, _ka) {
  getSQLType() {
    return "cidr";
  }
}
__publicField(Qn, _ja, "PgCidr");
function qn(t) {
  return new $n(t ?? "");
}
class Gn extends (_ma = C, _la = d, _ma) {
  constructor(e, r, s) {
    super(e, "custom", "PgCustomColumn"), this.config.fieldConfig = r, this.config.customTypeParams = s;
  }
  build(e) {
    return new Kn(e, this.config);
  }
}
__publicField(Gn, _la, "PgCustomColumnBuilder");
class Kn extends (_oa = w, _na = d, _oa) {
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
__publicField(Kn, _na, "PgCustomColumn");
function Xn(t) {
  return (e, r) => {
    const { name: s, config: n } = j(e, r);
    return new Gn(s, n, t);
  };
}
class qe extends (_qa = C, _pa = d, _qa) {
  defaultNow() {
    return this.default(at`now()`);
  }
}
__publicField(qe, _pa, "PgDateColumnBaseBuilder");
class Wn extends (_sa = qe, _ra = d, _sa) {
  constructor(e) {
    super(e, "date", "PgDate");
  }
  build(e) {
    return new Jn(e, this.config);
  }
}
__publicField(Wn, _ra, "PgDateBuilder");
class Jn extends (_ua = w, _ta = d, _ua) {
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
__publicField(Jn, _ta, "PgDate");
class Hn extends (_wa = qe, _va = d, _wa) {
  constructor(e) {
    super(e, "string", "PgDateString");
  }
  build(e) {
    return new Yn(e, this.config);
  }
}
__publicField(Hn, _va, "PgDateStringBuilder");
class Yn extends (_ya = w, _xa = d, _ya) {
  getSQLType() {
    return "date";
  }
}
__publicField(Yn, _xa, "PgDateString");
function ei(t, e) {
  const { name: r, config: s } = j(t, e);
  return (s == null ? void 0 : s.mode) === "date" ? new Wn(r) : new Hn(r);
}
class ti extends (_Aa = C, _za = d, _Aa) {
  constructor(e) {
    super(e, "number", "PgDoublePrecision");
  }
  build(e) {
    return new ri(e, this.config);
  }
}
__publicField(ti, _za, "PgDoublePrecisionBuilder");
class ri extends (_Ca = w, _Ba = d, _Ca) {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseFloat(e) : e;
  }
}
__publicField(ri, _Ba, "PgDoublePrecision");
function si(t) {
  return new ti(t ?? "");
}
class ni extends (_Ea = C, _Da = d, _Ea) {
  constructor(e) {
    super(e, "string", "PgInet");
  }
  build(e) {
    return new ii(e, this.config);
  }
}
__publicField(ni, _Da, "PgInetBuilder");
class ii extends (_Ga = w, _Fa = d, _Ga) {
  getSQLType() {
    return "inet";
  }
}
__publicField(ii, _Fa, "PgInet");
function ai(t) {
  return new ni(t ?? "");
}
class oi extends (_Ia = lt, _Ha = d, _Ia) {
  constructor(e) {
    super(e, "number", "PgInteger");
  }
  build(e) {
    return new ui(e, this.config);
  }
}
__publicField(oi, _Ha, "PgIntegerBuilder");
class ui extends (_Ka = w, _Ja = d, _Ka) {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseInt(e) : e;
  }
}
__publicField(ui, _Ja, "PgInteger");
function W(t) {
  return new oi(t ?? "");
}
class ci extends (_Ma = C, _La = d, _Ma) {
  constructor(e, r) {
    super(e, "string", "PgInterval"), this.config.intervalConfig = r;
  }
  build(e) {
    return new li(e, this.config);
  }
}
__publicField(ci, _La, "PgIntervalBuilder");
class li extends (_Oa = w, _Na = d, _Oa) {
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
__publicField(li, _Na, "PgInterval");
function di(t, e = {}) {
  const { name: r, config: s } = j(t, e);
  return new ci(r, s);
}
class hi extends (_Qa = C, _Pa = d, _Qa) {
  constructor(e) {
    super(e, "json", "PgJson");
  }
  build(e) {
    return new fi(e, this.config);
  }
}
__publicField(hi, _Pa, "PgJsonBuilder");
class fi extends (_Sa = w, _Ra = d, _Sa) {
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
__publicField(fi, _Ra, "PgJson");
function pi(t) {
  return new hi(t ?? "");
}
class mi extends (_Ua = C, _Ta = d, _Ua) {
  constructor(e) {
    super(e, "json", "PgJsonb");
  }
  build(e) {
    return new gi(e, this.config);
  }
}
__publicField(mi, _Ta, "PgJsonbBuilder");
class gi extends (_Wa = w, _Va = d, _Wa) {
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
__publicField(gi, _Va, "PgJsonb");
function yi(t) {
  return new mi(t ?? "");
}
class vi extends (_Ya = C, _Xa = d, _Ya) {
  constructor(e) {
    super(e, "array", "PgLine");
  }
  build(e) {
    return new _i(e, this.config);
  }
}
__publicField(vi, _Xa, "PgLineBuilder");
class _i extends (__a = w, _Za = d, __a) {
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
__publicField(_i, _Za, "PgLine");
class bi extends (_ab = C, _$a = d, _ab) {
  constructor(e) {
    super(e, "json", "PgLineABC");
  }
  build(e) {
    return new xi(e, this.config);
  }
}
__publicField(bi, _$a, "PgLineABCBuilder");
class xi extends (_cb = w, _bb = d, _cb) {
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
__publicField(xi, _bb, "PgLineABC");
function wi(t, e) {
  const { name: r, config: s } = j(t, e);
  return !(s == null ? void 0 : s.mode) || s.mode === "tuple" ? new vi(r) : new bi(r);
}
class Ti extends (_eb = C, _db = d, _eb) {
  constructor(e) {
    super(e, "string", "PgMacaddr");
  }
  build(e) {
    return new Si(e, this.config);
  }
}
__publicField(Ti, _db, "PgMacaddrBuilder");
class Si extends (_gb = w, _fb = d, _gb) {
  getSQLType() {
    return "macaddr";
  }
}
__publicField(Si, _fb, "PgMacaddr");
function Pi(t) {
  return new Ti(t ?? "");
}
class Ci extends (_ib = C, _hb = d, _ib) {
  constructor(e) {
    super(e, "string", "PgMacaddr8");
  }
  build(e) {
    return new Ni(e, this.config);
  }
}
__publicField(Ci, _hb, "PgMacaddr8Builder");
class Ni extends (_kb = w, _jb = d, _kb) {
  getSQLType() {
    return "macaddr8";
  }
}
__publicField(Ni, _jb, "PgMacaddr8");
function Ii(t) {
  return new Ci(t ?? "");
}
class ki extends (_mb = C, _lb = d, _mb) {
  constructor(e, r, s) {
    super(e, "string", "PgNumeric"), this.config.precision = r, this.config.scale = s;
  }
  build(e) {
    return new Oi(e, this.config);
  }
}
__publicField(ki, _lb, "PgNumericBuilder");
class Oi extends (_ob = w, _nb = d, _ob) {
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
__publicField(Oi, _nb, "PgNumeric");
function Ei(t, e) {
  const { name: r, config: s } = j(t, e);
  return new ki(r, s == null ? void 0 : s.precision, s == null ? void 0 : s.scale);
}
class Ai extends (_qb = C, _pb = d, _qb) {
  constructor(e) {
    super(e, "array", "PgPointTuple");
  }
  build(e) {
    return new Ri(e, this.config);
  }
}
__publicField(Ai, _pb, "PgPointTupleBuilder");
class Ri extends (_sb = w, _rb = d, _sb) {
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
__publicField(Ri, _rb, "PgPointTuple");
class Di extends (_ub = C, _tb = d, _ub) {
  constructor(e) {
    super(e, "json", "PgPointObject");
  }
  build(e) {
    return new ji(e, this.config);
  }
}
__publicField(Di, _tb, "PgPointObjectBuilder");
class ji extends (_wb = w, _vb = d, _wb) {
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
__publicField(ji, _vb, "PgPointObject");
function Bi(t, e) {
  const { name: r, config: s } = j(t, e);
  return !(s == null ? void 0 : s.mode) || s.mode === "tuple" ? new Ai(r) : new Di(r);
}
function Mi(t) {
  const e = [];
  for (let r = 0; r < t.length; r += 2) e.push(Number.parseInt(t.slice(r, r + 2), 16));
  return new Uint8Array(e);
}
function Gt(t, e) {
  const r = new ArrayBuffer(8), s = new DataView(r);
  for (let n = 0; n < 8; n++) s.setUint8(n, t[e + n]);
  return s.getFloat64(0, true);
}
function _r(t) {
  const e = Mi(t);
  let r = 0;
  const s = e[r];
  r += 1;
  const n = new DataView(e.buffer), i = n.getUint32(r, s === 1);
  if (r += 4, i & 536870912 && (n.getUint32(r, s === 1), r += 4), (i & 65535) === 1) {
    const a = Gt(e, r);
    r += 8;
    const o = Gt(e, r);
    return r += 8, [a, o];
  }
  throw new Error("Unsupported geometry type");
}
class Vi extends (_yb = C, _xb = d, _yb) {
  constructor(e) {
    super(e, "array", "PgGeometry");
  }
  build(e) {
    return new Zi(e, this.config);
  }
}
__publicField(Vi, _xb, "PgGeometryBuilder");
class Zi extends (_Ab = w, _zb = d, _Ab) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    return _r(e);
  }
  mapToDriverValue(e) {
    return `point(${e[0]} ${e[1]})`;
  }
}
__publicField(Zi, _zb, "PgGeometry");
class Li extends (_Cb = C, _Bb = d, _Cb) {
  constructor(e) {
    super(e, "json", "PgGeometryObject");
  }
  build(e) {
    return new zi(e, this.config);
  }
}
__publicField(Li, _Bb, "PgGeometryObjectBuilder");
class zi extends (_Eb = w, _Db = d, _Eb) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    const r = _r(e);
    return { x: r[0], y: r[1] };
  }
  mapToDriverValue(e) {
    return `point(${e.x} ${e.y})`;
  }
}
__publicField(zi, _Db, "PgGeometryObject");
function Fi(t, e) {
  const { name: r, config: s } = j(t, e);
  return !(s == null ? void 0 : s.mode) || s.mode === "tuple" ? new Vi(r) : new Li(r);
}
class Ui extends (_Gb = C, _Fb = d, _Gb) {
  constructor(e, r) {
    super(e, "number", "PgReal"), this.config.length = r;
  }
  build(e) {
    return new $i(e, this.config);
  }
}
__publicField(Ui, _Fb, "PgRealBuilder");
class $i extends (_Ib = w, _Hb = d, _Ib) {
  constructor(e, r) {
    super(e, r);
    __publicField(this, "mapFromDriverValue", (e) => typeof e == "string" ? Number.parseFloat(e) : e);
  }
  getSQLType() {
    return "real";
  }
}
__publicField($i, _Hb, "PgReal");
function Qi(t) {
  return new Ui(t ?? "");
}
class qi extends (_Kb = C, _Jb = d, _Kb) {
  constructor(e) {
    super(e, "number", "PgSerial"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(e) {
    return new Gi(e, this.config);
  }
}
__publicField(qi, _Jb, "PgSerialBuilder");
class Gi extends (_Mb = w, _Lb = d, _Mb) {
  getSQLType() {
    return "serial";
  }
}
__publicField(Gi, _Lb, "PgSerial");
function br(t) {
  return new qi(t ?? "");
}
class Ki extends (_Ob = lt, _Nb = d, _Ob) {
  constructor(e) {
    super(e, "number", "PgSmallInt");
  }
  build(e) {
    return new Xi(e, this.config);
  }
}
__publicField(Ki, _Nb, "PgSmallIntBuilder");
class Xi extends (_Qb = w, _Pb = d, _Qb) {
  constructor() {
    super(...arguments);
    __publicField(this, "mapFromDriverValue", (e) => typeof e == "string" ? Number(e) : e);
  }
  getSQLType() {
    return "smallint";
  }
}
__publicField(Xi, _Pb, "PgSmallInt");
function Wi(t) {
  return new Ki(t ?? "");
}
class Ji extends (_Sb = C, _Rb = d, _Sb) {
  constructor(e) {
    super(e, "number", "PgSmallSerial"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(e) {
    return new Hi(e, this.config);
  }
}
__publicField(Ji, _Rb, "PgSmallSerialBuilder");
class Hi extends (_Ub = w, _Tb = d, _Ub) {
  getSQLType() {
    return "smallserial";
  }
}
__publicField(Hi, _Tb, "PgSmallSerial");
function Yi(t) {
  return new Ji(t ?? "");
}
class ea extends (_Wb = C, _Vb = d, _Wb) {
  constructor(e, r) {
    super(e, "string", "PgText"), this.config.enumValues = r.enum;
  }
  build(e) {
    return new ta(e, this.config);
  }
}
__publicField(ea, _Vb, "PgTextBuilder");
class ta extends (_Yb = w, _Xb = d, _Yb) {
  constructor() {
    super(...arguments);
    __publicField(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return "text";
  }
}
__publicField(ta, _Xb, "PgText");
function se(t, e = {}) {
  const { name: r, config: s } = j(t, e);
  return new ea(r, s);
}
class ra extends (__b = qe, _Zb = d, __b) {
  constructor(e, r, s) {
    super(e, "string", "PgTime"), this.withTimezone = r, this.precision = s, this.config.withTimezone = r, this.config.precision = s;
  }
  build(e) {
    return new sa(e, this.config);
  }
}
__publicField(ra, _Zb, "PgTimeBuilder");
class sa extends (_ac = w, _$b = d, _ac) {
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
__publicField(sa, _$b, "PgTime");
function na(t, e = {}) {
  const { name: r, config: s } = j(t, e);
  return new ra(r, s.withTimezone ?? false, s.precision);
}
class ia extends (_cc = qe, _bc = d, _cc) {
  constructor(e, r, s) {
    super(e, "date", "PgTimestamp"), this.config.withTimezone = r, this.config.precision = s;
  }
  build(e) {
    return new aa(e, this.config);
  }
}
__publicField(ia, _bc, "PgTimestampBuilder");
class aa extends (_ec = w, _dc = d, _ec) {
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
__publicField(aa, _dc, "PgTimestamp");
class oa extends (_gc = qe, _fc = d, _gc) {
  constructor(e, r, s) {
    super(e, "string", "PgTimestampString"), this.config.withTimezone = r, this.config.precision = s;
  }
  build(e) {
    return new ua(e, this.config);
  }
}
__publicField(oa, _fc, "PgTimestampStringBuilder");
class ua extends (_ic = w, _hc = d, _ic) {
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
__publicField(ua, _hc, "PgTimestampString");
function ot(t, e = {}) {
  const { name: r, config: s } = j(t, e);
  return (s == null ? void 0 : s.mode) === "string" ? new oa(r, s.withTimezone ?? false, s.precision) : new ia(r, (s == null ? void 0 : s.withTimezone) ?? false, s == null ? void 0 : s.precision);
}
class ca extends (_kc = C, _jc = d, _kc) {
  constructor(e) {
    super(e, "string", "PgUUID");
  }
  defaultRandom() {
    return this.default(at`gen_random_uuid()`);
  }
  build(e) {
    return new la(e, this.config);
  }
}
__publicField(ca, _jc, "PgUUIDBuilder");
class la extends (_mc = w, _lc = d, _mc) {
  getSQLType() {
    return "uuid";
  }
}
__publicField(la, _lc, "PgUUID");
function $e(t) {
  return new ca(t ?? "");
}
class da extends (_oc = C, _nc = d, _oc) {
  constructor(e, r) {
    super(e, "string", "PgVarchar"), this.config.length = r.length, this.config.enumValues = r.enum;
  }
  build(e) {
    return new ha(e, this.config);
  }
}
__publicField(da, _nc, "PgVarcharBuilder");
class ha extends (_qc = w, _pc = d, _qc) {
  constructor() {
    super(...arguments);
    __publicField(this, "length", this.config.length);
    __publicField(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
__publicField(ha, _pc, "PgVarchar");
function fa(t, e = {}) {
  const { name: r, config: s } = j(t, e);
  return new da(r, s);
}
class pa extends (_sc = C, _rc = d, _sc) {
  constructor(e, r) {
    super(e, "string", "PgBinaryVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new ma(e, this.config);
  }
}
__publicField(pa, _rc, "PgBinaryVectorBuilder");
class ma extends (_uc = w, _tc = d, _uc) {
  constructor() {
    super(...arguments);
    __publicField(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
__publicField(ma, _tc, "PgBinaryVector");
function ga(t, e) {
  const { name: r, config: s } = j(t, e);
  return new pa(r, s);
}
class ya extends (_wc = C, _vc = d, _wc) {
  constructor(e, r) {
    super(e, "array", "PgHalfVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new va(e, this.config);
  }
}
__publicField(ya, _vc, "PgHalfVectorBuilder");
class va extends (_yc = w, _xc = d, _yc) {
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
__publicField(va, _xc, "PgHalfVector");
function _a(t, e) {
  const { name: r, config: s } = j(t, e);
  return new ya(r, s);
}
class ba extends (_Ac = C, _zc = d, _Ac) {
  constructor(e, r) {
    super(e, "string", "PgSparseVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new xa(e, this.config);
  }
}
__publicField(ba, _zc, "PgSparseVectorBuilder");
class xa extends (_Cc = w, _Bc = d, _Cc) {
  constructor() {
    super(...arguments);
    __publicField(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
__publicField(xa, _Bc, "PgSparseVector");
function wa(t, e) {
  const { name: r, config: s } = j(t, e);
  return new ba(r, s);
}
class Ta extends (_Ec = C, _Dc = d, _Ec) {
  constructor(e, r) {
    super(e, "array", "PgVector"), this.config.dimensions = r.dimensions;
  }
  build(e) {
    return new Sa(e, this.config);
  }
}
__publicField(Ta, _Dc, "PgVectorBuilder");
class Sa extends (_Gc = w, _Fc = d, _Gc) {
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
__publicField(Sa, _Fc, "PgVector");
function Pa(t, e) {
  const { name: r, config: s } = j(t, e);
  return new Ta(r, s);
}
function Ca() {
  return { bigint: Rn, bigserial: Vn, boolean: dt, char: Un, cidr: qn, customType: Xn, date: ei, doublePrecision: si, inet: ai, integer: W, interval: di, json: pi, jsonb: yi, line: wi, macaddr: Pi, macaddr8: Ii, numeric: Ei, point: Bi, geometry: Fi, real: Qi, serial: br, smallint: Wi, smallserial: Yi, text: se, time: na, timestamp: ot, uuid: $e, varchar: fa, bit: ga, halfvec: _a, sparsevec: wa, vector: Pa };
}
const Ct = Symbol.for("drizzle:PgInlineForeignKeys"), Kt = Symbol.for("drizzle:EnableRLS");
class Xt extends (_Lc = z, _Kc = d, _Jc = Ct, _Ic = Kt, _Hc = z.Symbol.ExtraConfigBuilder, _Lc) {
  constructor() {
    super(...arguments);
    __publicField(this, _Jc, []);
    __publicField(this, _Ic, false);
    __publicField(this, _Hc);
  }
}
__publicField(Xt, _Kc, "PgTable");
__publicField(Xt, "Symbol", Object.assign({}, z.Symbol, { InlineForeignKeys: Ct, EnableRLS: Kt }));
function Na(t, e, r, s, n = t) {
  const i = new Xt(t, s, n), a = typeof e == "function" ? e(Ca()) : e, o = Object.fromEntries(Object.entries(a).map(([u, y]) => {
    const b = y;
    b.setName(u);
    const E = b.build(i);
    return i[Ct].push(...b.buildForeignKeys(E, i)), [u, E];
  })), l = Object.fromEntries(Object.entries(a).map(([u, y]) => {
    const b = y;
    b.setName(u);
    const E = b.buildExtraConfigColumn(i);
    return [u, E];
  })), c = Object.assign(i, o);
  return c[z.Symbol.Columns] = o, c[z.Symbol.ExtraConfigColumns] = l, Object.assign(c, { enableRLS: () => (c[Xt.Symbol.EnableRLS] = true, c) });
}
const ht = (t, e, r) => Na(t, e, r, void 0), N = { INT8_MIN: -128, INT8_MAX: 127, INT8_UNSIGNED_MAX: 255, INT16_MIN: -32768, INT16_MAX: 32767, INT16_UNSIGNED_MAX: 65535, INT24_MIN: -8388608, INT24_MAX: 8388607, INT24_UNSIGNED_MAX: 16777215, INT32_MIN: -2147483648, INT32_MAX: 2147483647, INT32_UNSIGNED_MAX: 4294967295, INT48_MIN: -140737488355328, INT48_MAX: 140737488355327, INT48_UNSIGNED_MAX: 281474976710655, INT64_MIN: -9223372036854775808n, INT64_MAX: 9223372036854775807n, INT64_UNSIGNED_MAX: 18446744073709551615n };
function O(t, e) {
  return e.includes(t.columnType);
}
function Ia(t) {
  return "enumValues" in t && Array.isArray(t.enumValues) && t.enumValues.length > 0;
}
const ka = f.union([f.string(), f.number(), f.boolean(), f.null()]), Oa = f.union([ka, f.record(f.any()), f.array(f.any())]), Ea = f.custom((t) => t instanceof Buffer);
function xr(t, e) {
  const r = (e == null ? void 0 : e.zodInstance) ?? f, s = (e == null ? void 0 : e.coerce) ?? {};
  let n;
  return Ia(t) && (n = t.enumValues.length ? r.enum(t.enumValues) : r.string()), n || (O(t, ["PgGeometry", "PgPointTuple"]) ? n = r.tuple([r.number(), r.number()]) : O(t, ["PgGeometryObject", "PgPointObject"]) ? n = r.object({ x: r.number(), y: r.number() }) : O(t, ["PgHalfVector", "PgVector"]) ? (n = r.array(r.number()), n = t.dimensions ? n.length(t.dimensions) : n) : O(t, ["PgLine"]) ? n = r.tuple([r.number(), r.number(), r.number()]) : O(t, ["PgLineABC"]) ? n = r.object({ a: r.number(), b: r.number(), c: r.number() }) : O(t, ["PgArray"]) ? (n = r.array(xr(t.baseColumn, r)), n = t.size ? n.length(t.size) : n) : t.dataType === "array" ? n = r.array(r.any()) : t.dataType === "number" ? n = Aa(t, r, s) : t.dataType === "bigint" ? n = Ra(t, r, s) : t.dataType === "boolean" ? n = s === true || s.boolean ? r.coerce.boolean() : r.boolean() : t.dataType === "date" ? n = s === true || s.date ? r.coerce.date() : r.date() : t.dataType === "string" ? n = Da(t, r, s) : t.dataType === "json" ? n = Oa : t.dataType === "custom" ? n = r.any() : t.dataType === "buffer" && (n = Ea)), n || (n = r.any()), n;
}
function Aa(t, e, r) {
  let s = t.getSQLType().includes("unsigned"), n, i, a = false;
  O(t, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (n = s ? 0 : N.INT8_MIN, i = s ? N.INT8_UNSIGNED_MAX : N.INT8_MAX, a = true) : O(t, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (n = s ? 0 : N.INT16_MIN, i = s ? N.INT16_UNSIGNED_MAX : N.INT16_MAX, a = true) : O(t, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (n = s ? 0 : N.INT24_MIN, i = s ? N.INT24_UNSIGNED_MAX : N.INT24_MAX, a = O(t, ["MySqlMediumInt", "SingleStoreMediumInt"])) : O(t, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (n = s ? 0 : N.INT32_MIN, i = s ? N.INT32_UNSIGNED_MAX : N.INT32_MAX, a = true) : O(t, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (n = s ? 0 : N.INT48_MIN, i = s ? N.INT48_UNSIGNED_MAX : N.INT48_MAX) : O(t, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (s = s || O(t, ["MySqlSerial", "SingleStoreSerial"]), n = s ? 0 : Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER, a = true) : O(t, ["MySqlYear", "SingleStoreYear"]) ? (n = 1901, i = 2155, a = true) : (n = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER);
  let o = r === true || (r == null ? void 0 : r.number) ? e.coerce.number() : e.number();
  return o = o.min(n).max(i), a ? o.int() : o;
}
function Ra(t, e, r) {
  const s = t.getSQLType().includes("unsigned"), n = s ? 0n : N.INT64_MIN, i = s ? N.INT64_UNSIGNED_MAX : N.INT64_MAX;
  return (r === true || (r == null ? void 0 : r.bigint) ? e.coerce.bigint() : e.bigint()).min(n).max(i);
}
function Da(t, e, r) {
  if (O(t, ["PgUUID"])) return e.string().uuid();
  let s, n, i = false;
  O(t, ["PgVarchar", "SQLiteText"]) ? s = t.length : O(t, ["MySqlVarChar", "SingleStoreVarChar"]) ? s = t.length ?? N.INT16_UNSIGNED_MAX : O(t, ["MySqlText", "SingleStoreText"]) && (t.textType === "longtext" ? s = N.INT32_UNSIGNED_MAX : t.textType === "mediumtext" ? s = N.INT24_UNSIGNED_MAX : t.textType === "text" ? s = N.INT16_UNSIGNED_MAX : s = N.INT8_UNSIGNED_MAX), O(t, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (s = t.length, i = true), O(t, ["PgBinaryVector"]) && (n = /^[01]+$/, s = t.dimensions);
  let a = r === true || (r == null ? void 0 : r.string) ? e.coerce.string() : e.string();
  return a = n ? a.regex(n) : a, s && i ? a.length(s) : s ? a.max(s) : a;
}
function wr(t) {
  return pr(t) ? Nn(t) : In(t);
}
function Tr(t, e, r, s) {
  const n = {};
  for (const [i, a] of Object.entries(t)) {
    if (!B(a, Ue) && !B(a, k) && !B(a, k.Aliased) && typeof a == "object") {
      const y = pr(a) || Cn(a) ? wr(a) : a;
      n[i] = Tr(y, e[i] ?? {}, r, s);
      continue;
    }
    const o = e[i];
    if (o !== void 0 && typeof o != "function") {
      n[i] = o;
      continue;
    }
    const l = B(a, Ue) ? a : void 0, c = l ? xr(l, s) : f.any(), u = typeof o == "function" ? o(c) : c;
    r.never(l) || (n[i] = u, l && (r.nullable(l) && (n[i] = n[i].nullable()), r.optional(l) && (n[i] = n[i].optional())));
  }
  return f.object(n);
}
const ja = { never: (t) => {
  var _a4, _b2;
  return ((_a4 = t == null ? void 0 : t.generated) == null ? void 0 : _a4.type) === "always" || ((_b2 = t == null ? void 0 : t.generatedIdentity) == null ? void 0 : _b2.type) === "always";
}, optional: (t) => !t.notNull || t.notNull && t.hasDefault, nullable: (t) => !t.notNull }, Sr = (t, e) => {
  const r = wr(t);
  return Tr(r, {}, ja);
}, Pr = ht("vaults", { id: $e("id").primaryKey().defaultRandom(), shortCode: se("short_code").unique(), lookupId: se("lookup_id").unique(), wrappedKey: se("wrapped_key"), encryptedMetadata: se("encrypted_metadata").notNull(), createdAt: ot("created_at").defaultNow().notNull(), expiresAt: ot("expires_at").notNull(), maxDownloads: W("max_downloads").default(1).notNull(), downloadCount: W("download_count").default(0).notNull(), isDeleted: dt("is_deleted").default(false).notNull(), encryptedClipboardText: se("encrypted_clipboard_text") }), Cr = ht("files", { id: $e("id").primaryKey().defaultRandom(), vaultId: $e("vault_id").references(() => Pr.id, { onDelete: "cascade" }).notNull(), fileId: se("file_id").notNull(), chunkCount: W("chunk_count").notNull(), totalSize: W("total_size").notNull(), isCompressed: dt("is_compressed").default(false).notNull(), originalSize: W("original_size") });
ht("chunks", { id: br("id").primaryKey(), fileId: $e("file_id").references(() => Cr.id, { onDelete: "cascade" }).notNull(), chunkIndex: W("chunk_index").notNull(), storagePath: se("storage_path"), size: W("size").notNull(), isUploaded: dt("is_uploaded").default(false).notNull() });
ht("email_usage", { date: se("date").primaryKey(), resendCount: W("resend_count").default(0).notNull(), brevoCount: W("brevo_count").default(0).notNull(), lastUpdated: ot("last_updated").defaultNow() });
Sr(Pr).omit({ id: true, shortCode: true, createdAt: true, downloadCount: true, isDeleted: true });
Sr(Cr).omit({ id: true, vaultId: true });
const Ba = f.object({ expiresIn: f.number().min(1).max(168), maxDownloads: f.number().min(1).max(100), encryptedMetadata: f.string(), lookupId: f.string().length(3).optional(), wrappedKey: f.string().optional(), files: f.array(f.object({ fileId: f.string(), chunks: f.number(), size: f.number(), isCompressed: f.boolean().default(false), originalSize: f.number().optional() })), encryptedClipboardText: f.string().optional() });
f.object({ message: f.string(), field: f.string().optional() }), f.object({ message: f.string() }), f.object({ message: f.string() });
const D = { vaults: { create: { method: "POST", path: "/api/vaults", input: Ba, responses: { 201: f.object({ id: f.string(), shortCode: f.string().optional(), expiresAt: f.string(), directLink: f.string() }) } }, get: { path: "/api/vaults/:id", responses: { 200: f.custom(), 410: f.object({ message: f.string() }) } }, resolveCode: { responses: { 200: f.object({ id: f.string() }) } }, download: { path: "/api/vaults/:id/download", responses: { 200: f.object({ success: f.boolean() }), 403: f.object({ message: f.string() }) } }, codeLookup: { path: "/api/vault/code/:lookupId", responses: { 200: f.object({ id: f.string(), wrappedKey: f.string(), encryptedMetadata: f.string(), encryptedClipboardText: f.string().optional(), expiresAt: f.string(), maxDownloads: f.number(), downloadCount: f.number(), files: f.array(f.object({ fileId: f.string(), chunkCount: f.number(), totalSize: f.number() })) }), 410: f.object({ message: f.string() }) } }, email: { input: f.object({ to: f.string().email(), senderName: f.string().optional() }), responses: { 200: f.object({ success: f.boolean(), remainingEmails: f.number(), previewUrl: f.string().optional() }), 429: f.object({ message: f.string() }) } } }, chunks: { getUploadUrl: { method: "POST", path: "/api/vaults/:id/files/:fileId/chunks/:chunkIndex/upload-url", input: f.object({ size: f.number() }), responses: { 200: f.object({ uploadUrl: f.string(), storagePath: f.string() }) } }, markUploaded: { method: "PUT", path: "/api/vaults/:id/files/:fileId/chunks/:chunkIndex/status", input: f.object({ storagePath: f.string() }), responses: { 200: f.object({ success: f.boolean() }) } }, getDownloadUrl: { path: "/api/vaults/:id/files/:fileId/chunks/:chunkIndex/download-url", responses: { 200: f.object({ downloadUrl: f.string() }) } } } };
function Ne(t, e) {
  let r = t;
  return e && Object.entries(e).forEach(([s, n]) => {
    r.includes(`:${s}`) && (r = r.replace(`:${s}`, String(n)));
  }), r;
}
function La(t) {
  return Yr({ queryKey: [D.vaults.get.path, t], queryFn: async () => {
    const e = Ne(D.vaults.get.path, { id: t }), r = await fetch(e);
    if (r.status === 404) return null;
    if (r.status === 410) throw new Error("This vault has expired or been deleted.");
    if (!r.ok) throw new Error("Failed to fetch vault");
    return D.vaults.get.responses[200].parse(await r.json());
  }, enabled: !!t, retry: false });
}
function za() {
  Nt();
  const { toast: t } = Ar();
  return Ce({ mutationFn: async (e) => {
    const r = D.vaults.create.input.parse(e), s = await fetch(D.vaults.create.path, { method: D.vaults.create.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
    if (!s.ok) {
      if (s.status === 400) {
        const n = await s.json();
        throw new Error(n.message || "Validation failed");
      }
      throw new Error("Failed to create vault");
    }
    return D.vaults.create.responses[201].parse(await s.json());
  }, onError: (e) => {
    t({ variant: "destructive", title: "Creation Failed", description: e.message });
  } });
}
function Fa() {
  return Ce({ mutationFn: async ({ vaultId: t, fileId: e, chunkIndex: r, size: s }) => {
    const n = Ne(D.chunks.getUploadUrl.path, { id: t, fileId: e, chunkIndex: r }), i = await fetch(n, { method: D.chunks.getUploadUrl.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ size: s }) });
    if (!i.ok) throw new Error("Failed to get upload URL");
    return D.chunks.getUploadUrl.responses[200].parse(await i.json());
  } });
}
function Ua() {
  return Ce({ mutationFn: async ({ vaultId: t, fileId: e, chunkIndex: r, storagePath: s }) => {
    const n = Ne(D.chunks.markUploaded.path, { id: t, fileId: e, chunkIndex: r }), i = await fetch(n, { method: D.chunks.markUploaded.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ storagePath: s }) });
    if (!i.ok) throw new Error("Failed to confirm upload");
    return D.chunks.markUploaded.responses[200].parse(await i.json());
  } });
}
function $a() {
  return Ce({ mutationFn: async ({ vaultId: t, fileId: e, chunkIndex: r }) => {
    const s = Ne(D.chunks.getDownloadUrl.path, { id: t, fileId: e, chunkIndex: r }), n = await fetch(s);
    if (!n.ok) throw new Error("Failed to get download URL");
    return D.chunks.getDownloadUrl.responses[200].parse(await n.json());
  } });
}
function Qa() {
  return Ce({ mutationFn: async (t) => {
    const e = Ne(D.vaults.download.path, { id: t }), r = await fetch(e, { method: "POST" });
    if (!r.ok) throw new Error("Failed to track download");
    return await r.json();
  } });
}
function qa() {
  return Ce({ mutationFn: async (t) => {
    const e = Ne(D.vaults.codeLookup.path, { lookupId: t }), r = await fetch(e);
    if (r.status === 404) throw new Error("Invalid code or vault expired");
    if (r.status === 410) throw new Error("Vault expired or download limit reached");
    if (!r.ok) throw new Error("Failed to lookup vault");
    return D.vaults.codeLookup.responses[200].parse(await r.json());
  } });
}
export {
  Za as A,
  Fa as a,
  Ua as b,
  qa as c,
  $a as d,
  Qa as e,
  La as f,
  za as u
};
