const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-5bJ-QyQh.js","assets/input-BQvw8c12.js","assets/proxy-Lv5dKC3a.js","assets/lock-CPRABK7_.js","assets/mail-mh0SSreH.js","assets/zap-bT4MCgSC.js","assets/index-B9yx715H.js","assets/upload-DocmHL3r.js","assets/users-C040Ok19.js","assets/key-round-Cv4Dordj.js","assets/sparkles-mSDgi_Va.js","assets/shield-D3x6C8LK.js","assets/file-text-B6h2_QQS.js","assets/trash-2-BX0yfjEw.js","assets/eye-vXjAQYOH.js","assets/upload-C85bMd3J.js","assets/file-BCQbN_KY.js","assets/key-BEe3b3Uw.js","assets/use-vaults-BzNhWpsb.js","assets/crypto--QUY4fPy.js","assets/arrow-left-BTQVjDo_.js","assets/triangle-alert-Ca9Rqc-C.js","assets/timer-BojKUzfA.js","assets/access-BZcR4FdU.js","assets/downloadStream-CO2VkSHj.js","assets/hard-drive-TD8p9ddx.js","assets/download-C4eoYRzQ.js","assets/download-DPoa0Uey.js","assets/index-Bs9jWeqm.js","assets/shield-check-DUDz26wD.js","assets/copy-s85Ev3uU.js","assets/success-BgujtWVV.js","assets/how-it-works-E7_QAo3M.js","assets/globe-CRJmbu3i.js","assets/terms-BocdbIOE.js","assets/chevron-up-BYB_zexy.js","assets/privacy-BpMPb3f_.js","assets/live-C9xlLa6J.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
let Br, Ch, iw, Zv, zx, lw, Dx, Te, Nt, Ai, uw, ft, Jt, sw, Fi, Dg, Mi, wg, ie, Je, H0, k, Zd, Mx, Fv, tc, Ke, Hv, Li, v, Ix, Iv, fg, zv, np, Gv, bv, ve;
let __tla = (async () => {
  var _e2, _t2, _n2, _a2, _e3, _t3, _n3, _b, _e4, _c2, _e5, _t4, _n4, _r2, _s2, _i2, _Kv_instances, o_fn, _d2, _e6, _e7, _e8, _t5, _n5, _Xv_instances, r_fn, _f2, _e9, _t6, _g2, _e10, _t7, _n6, _r3, _s3, _i3, _o2, _l2, _h2;
  function _h(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r) if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: true,
            get: () => r[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function r(o) {
      if (o.ep) return;
      o.ep = true;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  function _c(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Oc = {
    exports: {}
  }, hi = {}, Nc = {
    exports: {}
  }, b = {};
  var Kr = Symbol.for("react.element"), Oh = Symbol.for("react.portal"), Nh = Symbol.for("react.fragment"), Ah = Symbol.for("react.strict_mode"), Lh = Symbol.for("react.profiler"), Mh = Symbol.for("react.provider"), Dh = Symbol.for("react.context"), Ih = Symbol.for("react.forward_ref"), zh = Symbol.for("react.suspense"), Fh = Symbol.for("react.memo"), jh = Symbol.for("react.lazy"), Uu = Symbol.iterator;
  function bh(e) {
    return e === null || typeof e != "object" ? null : (e = Uu && e[Uu] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ac = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Lc = Object.assign, Mc = {};
  function Gn(e, t, n) {
    this.props = e, this.context = t, this.refs = Mc, this.updater = n || Ac;
  }
  Gn.prototype.isReactComponent = {};
  Gn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Gn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Dc() {
  }
  Dc.prototype = Gn.prototype;
  function Pl(e, t, n) {
    this.props = e, this.context = t, this.refs = Mc, this.updater = n || Ac;
  }
  var Tl = Pl.prototype = new Dc();
  Tl.constructor = Pl;
  Lc(Tl, Gn.prototype);
  Tl.isPureReactComponent = true;
  var $u = Array.isArray, Ic = Object.prototype.hasOwnProperty, Rl = {
    current: null
  }, zc = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Fc(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ic.call(t, r) && !zc.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
      for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
      o.children = u;
    }
    if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
      $$typeof: Kr,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: Rl.current
    };
  }
  function Uh(e, t) {
    return {
      $$typeof: Kr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function _l(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kr;
  }
  function $h(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Vu = /\/+/g;
  function Bi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? $h("" + e.key) : t.toString(36);
  }
  function Co(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = false;
    if (e === null) s = true;
    else switch (i) {
      case "string":
      case "number":
        s = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case Oh:
            s = true;
        }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + Bi(s, 0) : r, $u(o) ? (n = "", e != null && (n = e.replace(Vu, "$&/") + "/"), Co(o, t, n, "", function(a) {
      return a;
    })) : o != null && (_l(o) && (o = Uh(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Vu, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", $u(e)) for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = r + Bi(i, l);
      s += Co(i, t, n, u, o);
    }
    else if (u = bh(e), typeof u == "function") for (e = u.call(e), l = 0; !(i = e.next()).done; ) i = i.value, u = r + Bi(i, l++), s += Co(i, t, n, u, o);
    else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function to(e, t, n) {
    if (e == null) return e;
    var r = [], o = 0;
    return Co(e, r, "", "", function(i) {
      return t.call(n, i, o++);
    }), r;
  }
  function Vh(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var we = {
    current: null
  }, ko = {
    transition: null
  }, Bh = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: ko,
    ReactCurrentOwner: Rl
  };
  function jc() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  b.Children = {
    map: to,
    forEach: function(e, t, n) {
      to(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return to(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return to(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!_l(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  b.Component = Gn;
  b.Fragment = Nh;
  b.Profiler = Lh;
  b.PureComponent = Pl;
  b.StrictMode = Ah;
  b.Suspense = zh;
  b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bh;
  b.act = jc;
  b.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Lc({}, e.props), o = e.key, i = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (i = t.ref, s = Rl.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
      for (u in t) Ic.call(t, u) && !zc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
      l = Array(u);
      for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
      r.children = l;
    }
    return {
      $$typeof: Kr,
      type: e.type,
      key: o,
      ref: i,
      props: r,
      _owner: s
    };
  };
  b.createContext = function(e) {
    return e = {
      $$typeof: Dh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: Mh,
      _context: e
    }, e.Consumer = e;
  };
  b.createElement = Fc;
  b.createFactory = function(e) {
    var t = Fc.bind(null, e);
    return t.type = e, t;
  };
  b.createRef = function() {
    return {
      current: null
    };
  };
  b.forwardRef = function(e) {
    return {
      $$typeof: Ih,
      render: e
    };
  };
  b.isValidElement = _l;
  b.lazy = function(e) {
    return {
      $$typeof: jh,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: Vh
    };
  };
  b.memo = function(e, t) {
    return {
      $$typeof: Fh,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  b.startTransition = function(e) {
    var t = ko.transition;
    ko.transition = {};
    try {
      e();
    } finally {
      ko.transition = t;
    }
  };
  b.unstable_act = jc;
  b.useCallback = function(e, t) {
    return we.current.useCallback(e, t);
  };
  b.useContext = function(e) {
    return we.current.useContext(e);
  };
  b.useDebugValue = function() {
  };
  b.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e);
  };
  b.useEffect = function(e, t) {
    return we.current.useEffect(e, t);
  };
  b.useId = function() {
    return we.current.useId();
  };
  b.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n);
  };
  b.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t);
  };
  b.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t);
  };
  b.useMemo = function(e, t) {
    return we.current.useMemo(e, t);
  };
  b.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n);
  };
  b.useRef = function(e) {
    return we.current.useRef(e);
  };
  b.useState = function(e) {
    return we.current.useState(e);
  };
  b.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n);
  };
  b.useTransition = function() {
    return we.current.useTransition();
  };
  b.version = "18.3.1";
  Nc.exports = b;
  v = Nc.exports;
  let Hh;
  Nt = _c(v);
  Hh = _h({
    __proto__: null,
    default: Nt
  }, [
    v
  ]);
  var Wh = v, Qh = Symbol.for("react.element"), Kh = Symbol.for("react.fragment"), Gh = Object.prototype.hasOwnProperty, Yh = Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qh = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function bc(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Gh.call(t, r) && !qh.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: Qh,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: Yh.current
    };
  }
  hi.Fragment = Kh;
  hi.jsx = bc;
  hi.jsxs = bc;
  Oc.exports = hi;
  let Uc, De, $c, Vc;
  k = Oc.exports;
  Uc = {
    exports: {}
  };
  De = {};
  $c = {
    exports: {}
  };
  Vc = {};
  (function(e) {
    function t(T, O) {
      var M = T.length;
      T.push(O);
      e: for (; 0 < M; ) {
        var U = M - 1 >>> 1, q = T[U];
        if (0 < o(q, O)) T[U] = O, T[M] = q, M = U;
        else break e;
      }
    }
    function n(T) {
      return T.length === 0 ? null : T[0];
    }
    function r(T) {
      if (T.length === 0) return null;
      var O = T[0], M = T.pop();
      if (M !== O) {
        T[0] = M;
        e: for (var U = 0, q = T.length, Be = q >>> 1; U < Be; ) {
          var ze = 2 * (U + 1) - 1, tr = T[ze], pt = ze + 1, nt = T[pt];
          if (0 > o(tr, M)) pt < q && 0 > o(nt, tr) ? (T[U] = nt, T[pt] = M, U = pt) : (T[U] = tr, T[ze] = M, U = ze);
          else if (pt < q && 0 > o(nt, M)) T[U] = nt, T[pt] = M, U = pt;
          else break e;
        }
      }
      return O;
    }
    function o(T, O) {
      var M = T.sortIndex - O.sortIndex;
      return M !== 0 ? M : T.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
        return i.now();
      };
    } else {
      var s = Date, l = s.now();
      e.unstable_now = function() {
        return s.now() - l;
      };
    }
    var u = [], a = [], c = 1, d = null, h = 3, g = false, w = false, y = false, x = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(T) {
      for (var O = n(a); O !== null; ) {
        if (O.callback === null) r(a);
        else if (O.startTime <= T) r(a), O.sortIndex = O.expirationTime, t(u, O);
        else break;
        O = n(a);
      }
    }
    function S(T) {
      if (y = false, m(T), !w) if (n(u) !== null) w = true, j(E);
      else {
        var O = n(a);
        O !== null && B(S, O.startTime - T);
      }
    }
    function E(T, O) {
      w = false, y && (y = false, p(_), _ = -1), g = true;
      var M = h;
      try {
        for (m(O), d = n(u); d !== null && (!(d.expirationTime > O) || T && !F()); ) {
          var U = d.callback;
          if (typeof U == "function") {
            d.callback = null, h = d.priorityLevel;
            var q = U(d.expirationTime <= O);
            O = e.unstable_now(), typeof q == "function" ? d.callback = q : d === n(u) && r(u), m(O);
          } else r(u);
          d = n(u);
        }
        if (d !== null) var Be = true;
        else {
          var ze = n(a);
          ze !== null && B(S, ze.startTime - O), Be = false;
        }
        return Be;
      } finally {
        d = null, h = M, g = false;
      }
    }
    var P = false, C = null, _ = -1, I = 5, N = -1;
    function F() {
      return !(e.unstable_now() - N < I);
    }
    function D() {
      if (C !== null) {
        var T = e.unstable_now();
        N = T;
        var O = true;
        try {
          O = C(true, T);
        } finally {
          O ? V() : (P = false, C = null);
        }
      } else P = false;
    }
    var V;
    if (typeof f == "function") V = function() {
      f(D);
    };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), W = L.port2;
      L.port1.onmessage = D, V = function() {
        W.postMessage(null);
      };
    } else V = function() {
      x(D, 0);
    };
    function j(T) {
      C = T, P || (P = true, V());
    }
    function B(T, O) {
      _ = x(function() {
        T(e.unstable_now());
      }, O);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, e.unstable_continueExecution = function() {
      w || g || (w = true, j(E));
    }, e.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < T ? Math.floor(1e3 / T) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return h;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(u);
    }, e.unstable_next = function(T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var M = h;
      h = O;
      try {
        return T();
      } finally {
        h = M;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(T, O) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = h;
      h = T;
      try {
        return O();
      } finally {
        h = M;
      }
    }, e.unstable_scheduleCallback = function(T, O, M) {
      var U = e.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? U + M : U) : M = U, T) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = M + q, T = {
        id: c++,
        callback: O,
        priorityLevel: T,
        startTime: M,
        expirationTime: q,
        sortIndex: -1
      }, M > U ? (T.sortIndex = M, t(a, T), n(u) === null && T === n(a) && (y ? (p(_), _ = -1) : y = true, B(S, M - U))) : (T.sortIndex = q, t(u, T), w || g || (w = true, j(E))), T;
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(T) {
      var O = h;
      return function() {
        var M = h;
        h = O;
        try {
          return T.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    };
  })(Vc);
  $c.exports = Vc;
  var Xh = $c.exports;
  var Zh = v, Me = Xh;
  function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Bc = /* @__PURE__ */ new Set(), Tr = {};
  function mn(e, t) {
    jn(e, t), jn(e + "Capture", t);
  }
  function jn(e, t) {
    for (Tr[e] = t, e = 0; e < t.length; e++) Bc.add(t[e]);
  }
  var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cs = Object.prototype.hasOwnProperty, Jh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Bu = {}, Hu = {};
  function em(e) {
    return Cs.call(Hu, e) ? true : Cs.call(Bu, e) ? false : Jh.test(e) ? Hu[e] = true : (Bu[e] = true, false);
  }
  function tm(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function nm(e, t, n, r) {
    if (t === null || typeof t > "u" || tm(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function xe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
  }
  var fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new xe(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var t = e[0];
    fe[t] = new xe(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    fe[e] = new xe(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    fe[e] = new xe(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new xe(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    fe[e] = new xe(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    fe[e] = new xe(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    fe[e] = new xe(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    fe[e] = new xe(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Ol = /[\-:]([a-z])/g;
  function Nl(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ol, Nl);
    fe[t] = new xe(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ol, Nl);
    fe[t] = new xe(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(Ol, Nl);
    fe[t] = new xe(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    fe[e] = new xe(e, 1, false, e.toLowerCase(), null, false, false);
  });
  fe.xlinkHref = new xe("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    fe[e] = new xe(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Al(e, t, n, r) {
    var o = fe.hasOwnProperty(t) ? fe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nm(t, n, o, r) && (n = null), r || o === null ? em(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Tt = Zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, no = Symbol.for("react.element"), gn = Symbol.for("react.portal"), wn = Symbol.for("react.fragment"), Ll = Symbol.for("react.strict_mode"), ks = Symbol.for("react.profiler"), Hc = Symbol.for("react.provider"), Wc = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), Ps = Symbol.for("react.suspense"), Ts = Symbol.for("react.suspense_list"), Dl = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), Qc = Symbol.for("react.offscreen"), Wu = Symbol.iterator;
  function nr(e) {
    return e === null || typeof e != "object" ? null : (e = Wu && e[Wu] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Object.assign, Hi;
  function dr(e) {
    if (Hi === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = t && t[1] || "";
    }
    return `
` + Hi + e;
  }
  var Wi = false;
  function Qi(e, t) {
    if (!e || Wi) return "";
    Wi = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (a) {
          r = a;
        }
        e();
      }
    } catch (a) {
      if (a && r && typeof a.stack == "string") {
        for (var o = a.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
        for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1) do
            if (s--, l--, 0 > l || o[s] !== i[l]) {
              var u = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= l);
          break;
        }
      }
    } finally {
      Wi = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
  }
  function rm(e) {
    switch (e.tag) {
      case 5:
        return dr(e.type);
      case 16:
        return dr("Lazy");
      case 13:
        return dr("Suspense");
      case 19:
        return dr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Qi(e.type, false), e;
      case 11:
        return e = Qi(e.type.render, false), e;
      case 1:
        return e = Qi(e.type, true), e;
      default:
        return "";
    }
  }
  function Rs(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case wn:
        return "Fragment";
      case gn:
        return "Portal";
      case ks:
        return "Profiler";
      case Ll:
        return "StrictMode";
      case Ps:
        return "Suspense";
      case Ts:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Wc:
        return (e.displayName || "Context") + ".Consumer";
      case Hc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ml:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Dl:
        return t = e.displayName || null, t !== null ? t : Rs(e.type) || "Memo";
      case At:
        t = e._payload, e = e._init;
        try {
          return Rs(e(t));
        } catch {
        }
    }
    return null;
  }
  function om(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Rs(t);
      case 8:
        return t === Ll ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Wt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Kc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function im(e) {
    var t = Kc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, i = n.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return o.call(this);
        },
        set: function(s) {
          r = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(s) {
          r = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ro(e) {
    e._valueTracker || (e._valueTracker = im(e));
  }
  function Gc(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = Kc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function jo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function _s(e, t) {
    var n = t.checked;
    return ee({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function Qu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wt(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function Yc(e, t) {
    t = t.checked, t != null && Al(e, "checked", t, false);
  }
  function Os(e, t) {
    Yc(e, t);
    var n = Wt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ns(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ns(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ku(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ns(e, t, n) {
    (t !== "number" || jo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var pr = Array.isArray;
  function Nn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Wt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = true, r && (e[o].defaultSelected = true);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function As(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
    return ee({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Gu(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(R(92));
        if (pr(n)) {
          if (1 < n.length) throw Error(R(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: Wt(n)
    };
  }
  function qc(e, t) {
    var n = Wt(t.value), r = Wt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ls(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var oo, Zc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (oo = oo || document.createElement("div"), oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = oo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Rr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yr = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, sm = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(yr).forEach(function(e) {
    sm.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e];
    });
  });
  function Jc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px";
  }
  function ef(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Jc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var lm = ee({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function Ms(e, t) {
    if (t) {
      if (lm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(R(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(R(62));
    }
  }
  function Ds(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Is = null;
  function Il(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var zs = null, An = null, Ln = null;
  function qu(e) {
    if (e = qr(e)) {
      if (typeof zs != "function") throw Error(R(280));
      var t = e.stateNode;
      t && (t = wi(t), zs(e.stateNode, e.type, t));
    }
  }
  function tf(e) {
    An ? Ln ? Ln.push(e) : Ln = [
      e
    ] : An = e;
  }
  function nf() {
    if (An) {
      var e = An, t = Ln;
      if (Ln = An = null, qu(e), t) for (e = 0; e < t.length; e++) qu(t[e]);
    }
  }
  function rf(e, t) {
    return e(t);
  }
  function of() {
  }
  var Ki = false;
  function sf(e, t, n) {
    if (Ki) return e(t, n);
    Ki = true;
    try {
      return rf(e, t, n);
    } finally {
      Ki = false, (An !== null || Ln !== null) && (of(), nf());
    }
  }
  function _r(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = wi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(R(231, t, typeof n));
    return n;
  }
  var Fs = false;
  if (xt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function() {
        Fs = true;
      }
    }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    Fs = false;
  }
  function um(e, t, n, r, o, i, s, l, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, a);
    } catch (c) {
      this.onError(c);
    }
  }
  var vr = false, bo = null, Uo = false, js = null, am = {
    onError: function(e) {
      vr = true, bo = e;
    }
  };
  function cm(e, t, n, r, o, i, s, l, u) {
    vr = false, bo = null, um.apply(am, arguments);
  }
  function fm(e, t, n, r, o, i, s, l, u) {
    if (cm.apply(this, arguments), vr) {
      if (vr) {
        var a = bo;
        vr = false, bo = null;
      } else throw Error(R(198));
      Uo || (Uo = true, js = a);
    }
  }
  function yn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function lf(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Xu(e) {
    if (yn(e) !== e) throw Error(R(188));
  }
  function dm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = yn(e), t === null) throw Error(R(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return Xu(o), e;
          if (i === r) return Xu(o), t;
          i = i.sibling;
        }
        throw Error(R(188));
      }
      if (n.return !== r.return) n = o, r = i;
      else {
        for (var s = false, l = o.child; l; ) {
          if (l === n) {
            s = true, n = o, r = i;
            break;
          }
          if (l === r) {
            s = true, r = o, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!s) {
          for (l = i.child; l; ) {
            if (l === n) {
              s = true, n = i, r = o;
              break;
            }
            if (l === r) {
              s = true, r = i, n = o;
              break;
            }
            l = l.sibling;
          }
          if (!s) throw Error(R(189));
        }
      }
      if (n.alternate !== r) throw Error(R(190));
    }
    if (n.tag !== 3) throw Error(R(188));
    return n.stateNode.current === n ? e : t;
  }
  function uf(e) {
    return e = dm(e), e !== null ? af(e) : null;
  }
  function af(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = af(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var cf = Me.unstable_scheduleCallback, Zu = Me.unstable_cancelCallback, pm = Me.unstable_shouldYield, hm = Me.unstable_requestPaint, ne = Me.unstable_now, mm = Me.unstable_getCurrentPriorityLevel, zl = Me.unstable_ImmediatePriority, ff = Me.unstable_UserBlockingPriority, $o = Me.unstable_NormalPriority, ym = Me.unstable_LowPriority, df = Me.unstable_IdlePriority, mi = null, st = null;
  function vm(e) {
    if (st && typeof st.onCommitFiberRoot == "function") try {
      st.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var qe = Math.clz32 ? Math.clz32 : xm, gm = Math.log, wm = Math.LN2;
  function xm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gm(e) / wm | 0) | 0;
  }
  var io = 64, so = 4194304;
  function hr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Vo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var l = s & ~o;
      l !== 0 ? r = hr(l) : (i &= s, i !== 0 && (r = hr(i)));
    } else s = n & ~o, s !== 0 ? r = hr(s) : i !== 0 && (r = hr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - qe(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Sm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Em(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var s = 31 - qe(i), l = 1 << s, u = o[s];
      u === -1 ? (!(l & n) || l & r) && (o[s] = Sm(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l;
    }
  }
  function bs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function pf() {
    var e = io;
    return io <<= 1, !(io & 4194240) && (io = 64), e;
  }
  function Gi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n;
  }
  function Cm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - qe(n), i = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
    }
  }
  function Fl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - qe(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var H = 0;
  function hf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var mf, jl, yf, vf, gf, Us = false, lo = [], Ft = null, jt = null, bt = null, Or = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Mt = [], km = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ju(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ft = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        bt = null;
        break;
      case "pointerover":
      case "pointerout":
        Or.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nr.delete(t.pointerId);
    }
  }
  function or(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: i,
      targetContainers: [
        o
      ]
    }, t !== null && (t = qr(t), t !== null && jl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Pm(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Ft = or(Ft, e, t, n, r, o), true;
      case "dragenter":
        return jt = or(jt, e, t, n, r, o), true;
      case "mouseover":
        return bt = or(bt, e, t, n, r, o), true;
      case "pointerover":
        var i = o.pointerId;
        return Or.set(i, or(Or.get(i) || null, e, t, n, r, o)), true;
      case "gotpointercapture":
        return i = o.pointerId, Nr.set(i, or(Nr.get(i) || null, e, t, n, r, o)), true;
    }
    return false;
  }
  function wf(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = yn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = lf(n), t !== null) {
            e.blockedOn = t, gf(e.priority, function() {
              yf(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Po(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Is = r, n.target.dispatchEvent(r), Is = null;
      } else return t = qr(n), t !== null && jl(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function ea(e, t, n) {
    Po(e) && n.delete(t);
  }
  function Tm() {
    Us = false, Ft !== null && Po(Ft) && (Ft = null), jt !== null && Po(jt) && (jt = null), bt !== null && Po(bt) && (bt = null), Or.forEach(ea), Nr.forEach(ea);
  }
  function ir(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Us || (Us = true, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Tm)));
  }
  function Ar(e) {
    function t(o) {
      return ir(o, e);
    }
    if (0 < lo.length) {
      ir(lo[0], e);
      for (var n = 1; n < lo.length; n++) {
        var r = lo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Ft !== null && ir(Ft, e), jt !== null && ir(jt, e), bt !== null && ir(bt, e), Or.forEach(t), Nr.forEach(t), n = 0; n < Mt.length; n++) r = Mt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && (n = Mt[0], n.blockedOn === null); ) wf(n), n.blockedOn === null && Mt.shift();
  }
  var Mn = Tt.ReactCurrentBatchConfig, Bo = true;
  function Rm(e, t, n, r) {
    var o = H, i = Mn.transition;
    Mn.transition = null;
    try {
      H = 1, bl(e, t, n, r);
    } finally {
      H = o, Mn.transition = i;
    }
  }
  function _m(e, t, n, r) {
    var o = H, i = Mn.transition;
    Mn.transition = null;
    try {
      H = 4, bl(e, t, n, r);
    } finally {
      H = o, Mn.transition = i;
    }
  }
  function bl(e, t, n, r) {
    if (Bo) {
      var o = $s(e, t, n, r);
      if (o === null) os(e, t, r, Ho, n), Ju(e, r);
      else if (Pm(o, e, t, n, r)) r.stopPropagation();
      else if (Ju(e, r), t & 4 && -1 < km.indexOf(e)) {
        for (; o !== null; ) {
          var i = qr(o);
          if (i !== null && mf(i), i = $s(e, t, n, r), i === null && os(e, t, r, Ho, n), i === o) break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else os(e, t, r, null, n);
    }
  }
  var Ho = null;
  function $s(e, t, n, r) {
    if (Ho = null, e = Il(r), e = nn(e), e !== null) if (t = yn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = lf(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ho = e, null;
  }
  function xf(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (mm()) {
          case zl:
            return 1;
          case ff:
            return 4;
          case $o:
          case ym:
            return 16;
          case df:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null, Ul = null, To = null;
  function Sf() {
    if (To) return To;
    var e, t = Ul, n = t.length, r, o = "value" in It ? It.value : It.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
    return To = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ro(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function uo() {
    return true;
  }
  function ta() {
    return false;
  }
  function Ie(e) {
    function t(n, r, o, i, s) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? uo : ta, this.isPropagationStopped = ta, this;
    }
    return ee(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = uo);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = uo);
      },
      persist: function() {
      },
      isPersistent: uo
    }), t;
  }
  var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $l = Ie(Yn), Yr = ee({}, Yn, {
    view: 0,
    detail: 0
  }), Om = Ie(Yr), Yi, qi, sr, yi = ee({}, Yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== sr && (sr && e.type === "mousemove" ? (Yi = e.screenX - sr.screenX, qi = e.screenY - sr.screenY) : qi = Yi = 0, sr = e), Yi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : qi;
    }
  }), na = Ie(yi), Nm = ee({}, yi, {
    dataTransfer: 0
  }), Am = Ie(Nm), Lm = ee({}, Yr, {
    relatedTarget: 0
  }), Xi = Ie(Lm), Mm = ee({}, Yn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dm = Ie(Mm), Im = ee({}, Yn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), zm = Ie(Im), Fm = ee({}, Yn, {
    data: 0
  }), ra = Ie(Fm), jm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, bm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $m(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Um[e]) ? !!t[e] : false;
  }
  function Vl() {
    return $m;
  }
  var Vm = ee({}, Yr, {
    key: function(e) {
      if (e.key) {
        var t = jm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ro(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vl,
    charCode: function(e) {
      return e.type === "keypress" ? Ro(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Bm = Ie(Vm), Hm = ee({}, yi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), oa = Ie(Hm), Wm = ee({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vl
  }), Qm = Ie(Wm), Km = ee({}, Yn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gm = Ie(Km), Ym = ee({}, yi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qm = Ie(Ym), Xm = [
    9,
    13,
    27,
    32
  ], Bl = xt && "CompositionEvent" in window, gr = null;
  xt && "documentMode" in document && (gr = document.documentMode);
  var Zm = xt && "TextEvent" in window && !gr, Ef = xt && (!Bl || gr && 8 < gr && 11 >= gr), ia = " ", sa = false;
  function Cf(e, t) {
    switch (e) {
      case "keyup":
        return Xm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function kf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = false;
  function Jm(e, t) {
    switch (e) {
      case "compositionend":
        return kf(t);
      case "keypress":
        return t.which !== 32 ? null : (sa = true, ia);
      case "textInput":
        return e = t.data, e === ia && sa ? null : e;
      default:
        return null;
    }
  }
  function ey(e, t) {
    if (xn) return e === "compositionend" || !Bl && Cf(e, t) ? (e = Sf(), To = Ul = It = null, xn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ef && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ty = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function la(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ty[e.type] : t === "textarea";
  }
  function Pf(e, t, n, r) {
    tf(r), t = Wo(t, "onChange"), 0 < t.length && (n = new $l("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var wr = null, Lr = null;
  function ny(e) {
    zf(e, 0);
  }
  function vi(e) {
    var t = Cn(e);
    if (Gc(t)) return e;
  }
  function ry(e, t) {
    if (e === "change") return t;
  }
  var Tf = false;
  if (xt) {
    var Zi;
    if (xt) {
      var Ji = "oninput" in document;
      if (!Ji) {
        var ua = document.createElement("div");
        ua.setAttribute("oninput", "return;"), Ji = typeof ua.oninput == "function";
      }
      Zi = Ji;
    } else Zi = false;
    Tf = Zi && (!document.documentMode || 9 < document.documentMode);
  }
  function aa() {
    wr && (wr.detachEvent("onpropertychange", Rf), Lr = wr = null);
  }
  function Rf(e) {
    if (e.propertyName === "value" && vi(Lr)) {
      var t = [];
      Pf(t, Lr, e, Il(e)), sf(ny, t);
    }
  }
  function oy(e, t, n) {
    e === "focusin" ? (aa(), wr = t, Lr = n, wr.attachEvent("onpropertychange", Rf)) : e === "focusout" && aa();
  }
  function iy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return vi(Lr);
  }
  function sy(e, t) {
    if (e === "click") return vi(t);
  }
  function ly(e, t) {
    if (e === "input" || e === "change") return vi(t);
  }
  function uy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ze = typeof Object.is == "function" ? Object.is : uy;
  function Mr(e, t) {
    if (Ze(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Cs.call(t, o) || !Ze(e[o], t[o])) return false;
    }
    return true;
  }
  function ca(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fa(e, t) {
    var n = ca(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ca(n);
    }
  }
  function _f(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? _f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Of() {
    for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = jo(e.document);
    }
    return t;
  }
  function Hl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ay(e) {
    var t = Of(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _f(n.ownerDocument.documentElement, n)) {
      if (r !== null && Hl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, i = Math.min(r.start, o);
          r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = fa(n, i);
          var s = fa(n, r);
          o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var cy = xt && "documentMode" in document && 11 >= document.documentMode, Sn = null, Vs = null, xr = null, Bs = false;
  function da(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Bs || Sn == null || Sn !== jo(r) || (r = Sn, "selectionStart" in r && Hl(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), xr && Mr(xr, r) || (xr = r, r = Wo(Vs, "onSelect"), 0 < r.length && (t = new $l("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = Sn)));
  }
  function ao(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var En = {
    animationend: ao("Animation", "AnimationEnd"),
    animationiteration: ao("Animation", "AnimationIteration"),
    animationstart: ao("Animation", "AnimationStart"),
    transitionend: ao("Transition", "TransitionEnd")
  }, es = {}, Nf = {};
  xt && (Nf = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function gi(e) {
    if (es[e]) return es[e];
    if (!En[e]) return e;
    var t = En[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Nf) return es[e] = t[n];
    return e;
  }
  var Af = gi("animationend"), Lf = gi("animationiteration"), Mf = gi("animationstart"), Df = gi("transitionend"), If = /* @__PURE__ */ new Map(), pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function qt(e, t) {
    If.set(e, t), mn(t, [
      e
    ]);
  }
  for (var ts = 0; ts < pa.length; ts++) {
    var ns = pa[ts], fy = ns.toLowerCase(), dy = ns[0].toUpperCase() + ns.slice(1);
    qt(fy, "on" + dy);
  }
  qt(Af, "onAnimationEnd");
  qt(Lf, "onAnimationIteration");
  qt(Mf, "onAnimationStart");
  qt("dblclick", "onDoubleClick");
  qt("focusin", "onFocus");
  qt("focusout", "onBlur");
  qt(Df, "onTransitionEnd");
  jn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  jn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  jn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  jn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  mn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), py = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
  function ha(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, fm(r, t, void 0, e), e.currentTarget = null;
  }
  function zf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s], u = l.instance, a = l.currentTarget;
          if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
          ha(o, l, a), i = u;
        }
        else for (s = 0; s < r.length; s++) {
          if (l = r[s], u = l.instance, a = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
          ha(o, l, a), i = u;
        }
      }
    }
    if (Uo) throw e = js, Uo = false, js = null, e;
  }
  function G(e, t) {
    var n = t[Gs];
    n === void 0 && (n = t[Gs] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ff(t, e, 2, false), n.add(r));
  }
  function rs(e, t, n) {
    var r = 0;
    t && (r |= 4), Ff(n, e, r, t);
  }
  var co = "_reactListening" + Math.random().toString(36).slice(2);
  function Dr(e) {
    if (!e[co]) {
      e[co] = true, Bc.forEach(function(n) {
        n !== "selectionchange" && (py.has(n) || rs(n, false, e), rs(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[co] || (t[co] = true, rs("selectionchange", false, t));
    }
  }
  function Ff(e, t, n, r) {
    switch (xf(t)) {
      case 1:
        var o = Rm;
        break;
      case 4:
        o = _m;
        break;
      default:
        o = bl;
    }
    n = o.bind(null, t, n, e), o = void 0, !Fs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: o
    }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, false);
  }
  function os(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || l.nodeType === 8 && l.parentNode === o) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var u = s.tag;
          if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
          s = s.return;
        }
        for (; l !== null; ) {
          if (s = nn(l), s === null) return;
          if (u = s.tag, u === 5 || u === 6) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
    sf(function() {
      var a = i, c = Il(n), d = [];
      e: {
        var h = If.get(e);
        if (h !== void 0) {
          var g = $l, w = e;
          switch (e) {
            case "keypress":
              if (Ro(n) === 0) break e;
            case "keydown":
            case "keyup":
              g = Bm;
              break;
            case "focusin":
              w = "focus", g = Xi;
              break;
            case "focusout":
              w = "blur", g = Xi;
              break;
            case "beforeblur":
            case "afterblur":
              g = Xi;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = na;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Qm;
              break;
            case Af:
            case Lf:
            case Mf:
              g = Dm;
              break;
            case Df:
              g = Gm;
              break;
            case "scroll":
              g = Om;
              break;
            case "wheel":
              g = qm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = zm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = oa;
          }
          var y = (t & 4) !== 0, x = !y && e === "scroll", p = y ? h !== null ? h + "Capture" : null : h;
          y = [];
          for (var f = a, m; f !== null; ) {
            m = f;
            var S = m.stateNode;
            if (m.tag === 5 && S !== null && (m = S, p !== null && (S = _r(f, p), S != null && y.push(Ir(f, S, m)))), x) break;
            f = f.return;
          }
          0 < y.length && (h = new g(h, w, null, n, c), d.push({
            event: h,
            listeners: y
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", h && n !== Is && (w = n.relatedTarget || n.fromElement) && (nn(w) || w[St])) break e;
          if ((g || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = a, w = w ? nn(w) : null, w !== null && (x = yn(w), w !== x || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = a), g !== w)) {
            if (y = na, S = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (y = oa, S = "onPointerLeave", p = "onPointerEnter", f = "pointer"), x = g == null ? h : Cn(g), m = w == null ? h : Cn(w), h = new y(S, f + "leave", g, n, c), h.target = x, h.relatedTarget = m, S = null, nn(c) === a && (y = new y(p, f + "enter", w, n, c), y.target = m, y.relatedTarget = x, S = y), x = S, g && w) t: {
              for (y = g, p = w, f = 0, m = y; m; m = vn(m)) f++;
              for (m = 0, S = p; S; S = vn(S)) m++;
              for (; 0 < f - m; ) y = vn(y), f--;
              for (; 0 < m - f; ) p = vn(p), m--;
              for (; f--; ) {
                if (y === p || p !== null && y === p.alternate) break t;
                y = vn(y), p = vn(p);
              }
              y = null;
            }
            else y = null;
            g !== null && ma(d, h, g, y, false), w !== null && x !== null && ma(d, x, w, y, true);
          }
        }
        e: {
          if (h = a ? Cn(a) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file") var E = ry;
          else if (la(h)) if (Tf) E = ly;
          else {
            E = iy;
            var P = oy;
          }
          else (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = sy);
          if (E && (E = E(e, a))) {
            Pf(d, E, n, c);
            break e;
          }
          P && P(e, h, a), e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && Ns(h, "number", h.value);
        }
        switch (P = a ? Cn(a) : window, e) {
          case "focusin":
            (la(P) || P.contentEditable === "true") && (Sn = P, Vs = a, xr = null);
            break;
          case "focusout":
            xr = Vs = Sn = null;
            break;
          case "mousedown":
            Bs = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bs = false, da(d, n, c);
            break;
          case "selectionchange":
            if (cy) break;
          case "keydown":
          case "keyup":
            da(d, n, c);
        }
        var C;
        if (Bl) e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
        else xn ? Cf(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
        _ && (Ef && n.locale !== "ko" && (xn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && xn && (C = Sf()) : (It = c, Ul = "value" in It ? It.value : It.textContent, xn = true)), P = Wo(a, _), 0 < P.length && (_ = new ra(_, e, null, n, c), d.push({
          event: _,
          listeners: P
        }), C ? _.data = C : (C = kf(n), C !== null && (_.data = C)))), (C = Zm ? Jm(e, n) : ey(e, n)) && (a = Wo(a, "onBeforeInput"), 0 < a.length && (c = new ra("onBeforeInput", "beforeinput", null, n, c), d.push({
          event: c,
          listeners: a
        }), c.data = C));
      }
      zf(d, t);
    });
  }
  function Ir(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Wo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, i = o.stateNode;
      o.tag === 5 && i !== null && (o = i, i = _r(e, n), i != null && r.unshift(Ir(e, i, o)), i = _r(e, t), i != null && r.push(Ir(e, i, o))), e = e.return;
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ma(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var l = n, u = l.alternate, a = l.stateNode;
      if (u !== null && u === r) break;
      l.tag === 5 && a !== null && (l = a, o ? (u = _r(n, i), u != null && s.unshift(Ir(n, u, l))) : o || (u = _r(n, i), u != null && s.push(Ir(n, u, l)))), n = n.return;
    }
    s.length !== 0 && e.push({
      event: t,
      listeners: s
    });
  }
  var hy = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function ya(e) {
    return (typeof e == "string" ? e : "" + e).replace(hy, `
`).replace(my, "");
  }
  function fo(e, t, n) {
    if (t = ya(t), ya(e) !== t && n) throw Error(R(425));
  }
  function Qo() {
  }
  var Hs = null, Ws = null;
  function Qs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ks = typeof setTimeout == "function" ? setTimeout : void 0, yy = typeof clearTimeout == "function" ? clearTimeout : void 0, va = typeof Promise == "function" ? Promise : void 0, vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof va < "u" ? function(e) {
    return va.resolve(null).then(e).catch(gy);
  } : Ks;
  function gy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function is(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    Ar(t);
  }
  function Ut(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ga(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var qn = Math.random().toString(36).slice(2), it = "__reactFiber$" + qn, zr = "__reactProps$" + qn, St = "__reactContainer$" + qn, Gs = "__reactEvents$" + qn, wy = "__reactListeners$" + qn, xy = "__reactHandles$" + qn;
  function nn(e) {
    var t = e[it];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[St] || n[it]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ga(e); e !== null; ) {
          if (n = e[it]) return n;
          e = ga(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function qr(e) {
    return e = e[it] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(R(33));
  }
  function wi(e) {
    return e[zr] || null;
  }
  var Ys = [], kn = -1;
  function Xt(e) {
    return {
      current: e
    };
  }
  function Y(e) {
    0 > kn || (e.current = Ys[kn], Ys[kn] = null, kn--);
  }
  function Q(e, t) {
    kn++, Ys[kn] = e.current, e.current = t;
  }
  var Qt = {}, me = Xt(Qt), Ce = Xt(false), un = Qt;
  function bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ko() {
    Y(Ce), Y(me);
  }
  function wa(e, t, n) {
    if (me.current !== Qt) throw Error(R(168));
    Q(me, t), Q(Ce, n);
  }
  function jf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(R(108, om(e) || "Unknown", o));
    return ee({}, n, r);
  }
  function Go(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qt, un = me.current, Q(me, e), Q(Ce, Ce.current), true;
  }
  function xa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(R(169));
    n ? (e = jf(e, t, un), r.__reactInternalMemoizedMergedChildContext = e, Y(Ce), Y(me), Q(me, e)) : Y(Ce), Q(Ce, n);
  }
  var yt = null, xi = false, ss = false;
  function bf(e) {
    yt === null ? yt = [
      e
    ] : yt.push(e);
  }
  function Sy(e) {
    xi = true, bf(e);
  }
  function Zt() {
    if (!ss && yt !== null) {
      ss = true;
      var e = 0, t = H;
      try {
        var n = yt;
        for (H = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        yt = null, xi = false;
      } catch (o) {
        throw yt !== null && (yt = yt.slice(e + 1)), cf(zl, Zt), o;
      } finally {
        H = t, ss = false;
      }
    }
    return null;
  }
  var Pn = [], Tn = 0, Yo = null, qo = 0, Fe = [], je = 0, an = null, vt = 1, gt = "";
  function en(e, t) {
    Pn[Tn++] = qo, Pn[Tn++] = Yo, Yo = e, qo = t;
  }
  function Uf(e, t, n) {
    Fe[je++] = vt, Fe[je++] = gt, Fe[je++] = an, an = e;
    var r = vt;
    e = gt;
    var o = 32 - qe(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - qe(t) + o;
    if (30 < i) {
      var s = o - o % 5;
      i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, vt = 1 << 32 - qe(t) + o | n << o | r, gt = i + e;
    } else vt = 1 << i | n << o | r, gt = e;
  }
  function Wl(e) {
    e.return !== null && (en(e, 1), Uf(e, 1, 0));
  }
  function Ql(e) {
    for (; e === Yo; ) Yo = Pn[--Tn], Pn[Tn] = null, qo = Pn[--Tn], Pn[Tn] = null;
    for (; e === an; ) an = Fe[--je], Fe[je] = null, gt = Fe[--je], Fe[je] = null, vt = Fe[--je], Fe[je] = null;
  }
  var Ae = null, Ne = null, X = false, Ye = null;
  function $f(e, t) {
    var n = be(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function Sa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Ne = Ut(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Ne = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = an !== null ? {
          id: vt,
          overflow: gt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Ne = null, true) : false;
      default:
        return false;
    }
  }
  function qs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xs(e) {
    if (X) {
      var t = Ne;
      if (t) {
        var n = t;
        if (!Sa(e, t)) {
          if (qs(e)) throw Error(R(418));
          t = Ut(n.nextSibling);
          var r = Ae;
          t && Sa(e, t) ? $f(r, n) : (e.flags = e.flags & -4097 | 2, X = false, Ae = e);
        }
      } else {
        if (qs(e)) throw Error(R(418));
        e.flags = e.flags & -4097 | 2, X = false, Ae = e;
      }
    }
  }
  function Ea(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function po(e) {
    if (e !== Ae) return false;
    if (!X) return Ea(e), X = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps)), t && (t = Ne)) {
      if (qs(e)) throw Vf(), Error(R(418));
      for (; t; ) $f(e, t), t = Ut(t.nextSibling);
    }
    if (Ea(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ne = Ut(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ne = null;
      }
    } else Ne = Ae ? Ut(e.stateNode.nextSibling) : null;
    return true;
  }
  function Vf() {
    for (var e = Ne; e; ) e = Ut(e.nextSibling);
  }
  function Un() {
    Ne = Ae = null, X = false;
  }
  function Kl(e) {
    Ye === null ? Ye = [
      e
    ] : Ye.push(e);
  }
  var Ey = Tt.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(R(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(R(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
          var l = o.refs;
          s === null ? delete l[i] : l[i] = s;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(R(284));
      if (!n._owner) throw Error(R(290, e));
    }
    return e;
  }
  function ho(e, t) {
    throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ca(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bf(e) {
    function t(p, f) {
      if (e) {
        var m = p.deletions;
        m === null ? (p.deletions = [
          f
        ], p.flags |= 16) : m.push(f);
      }
    }
    function n(p, f) {
      if (!e) return null;
      for (; f !== null; ) t(p, f), f = f.sibling;
      return null;
    }
    function r(p, f) {
      for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
      return p;
    }
    function o(p, f) {
      return p = Ht(p, f), p.index = 0, p.sibling = null, p;
    }
    function i(p, f, m) {
      return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < f ? (p.flags |= 2, f) : m) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
    }
    function s(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function l(p, f, m, S) {
      return f === null || f.tag !== 6 ? (f = ps(m, p.mode, S), f.return = p, f) : (f = o(f, m), f.return = p, f);
    }
    function u(p, f, m, S) {
      var E = m.type;
      return E === wn ? c(p, f, m.props.children, S, m.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === At && Ca(E) === f.type) ? (S = o(f, m.props), S.ref = lr(p, f, m), S.return = p, S) : (S = Do(m.type, m.key, m.props, null, p.mode, S), S.ref = lr(p, f, m), S.return = p, S);
    }
    function a(p, f, m, S) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = hs(m, p.mode, S), f.return = p, f) : (f = o(f, m.children || []), f.return = p, f);
    }
    function c(p, f, m, S, E) {
      return f === null || f.tag !== 7 ? (f = ln(m, p.mode, S, E), f.return = p, f) : (f = o(f, m), f.return = p, f);
    }
    function d(p, f, m) {
      if (typeof f == "string" && f !== "" || typeof f == "number") return f = ps("" + f, p.mode, m), f.return = p, f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case no:
            return m = Do(f.type, f.key, f.props, null, p.mode, m), m.ref = lr(p, null, f), m.return = p, m;
          case gn:
            return f = hs(f, p.mode, m), f.return = p, f;
          case At:
            var S = f._init;
            return d(p, S(f._payload), m);
        }
        if (pr(f) || nr(f)) return f = ln(f, p.mode, m, null), f.return = p, f;
        ho(p, f);
      }
      return null;
    }
    function h(p, f, m, S) {
      var E = f !== null ? f.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : l(p, f, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case no:
            return m.key === E ? u(p, f, m, S) : null;
          case gn:
            return m.key === E ? a(p, f, m, S) : null;
          case At:
            return E = m._init, h(p, f, E(m._payload), S);
        }
        if (pr(m) || nr(m)) return E !== null ? null : c(p, f, m, S, null);
        ho(p, m);
      }
      return null;
    }
    function g(p, f, m, S, E) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(m) || null, l(f, p, "" + S, E);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case no:
            return p = p.get(S.key === null ? m : S.key) || null, u(f, p, S, E);
          case gn:
            return p = p.get(S.key === null ? m : S.key) || null, a(f, p, S, E);
          case At:
            var P = S._init;
            return g(p, f, m, P(S._payload), E);
        }
        if (pr(S) || nr(S)) return p = p.get(m) || null, c(f, p, S, E, null);
        ho(f, S);
      }
      return null;
    }
    function w(p, f, m, S) {
      for (var E = null, P = null, C = f, _ = f = 0, I = null; C !== null && _ < m.length; _++) {
        C.index > _ ? (I = C, C = null) : I = C.sibling;
        var N = h(p, C, m[_], S);
        if (N === null) {
          C === null && (C = I);
          break;
        }
        e && C && N.alternate === null && t(p, C), f = i(N, f, _), P === null ? E = N : P.sibling = N, P = N, C = I;
      }
      if (_ === m.length) return n(p, C), X && en(p, _), E;
      if (C === null) {
        for (; _ < m.length; _++) C = d(p, m[_], S), C !== null && (f = i(C, f, _), P === null ? E = C : P.sibling = C, P = C);
        return X && en(p, _), E;
      }
      for (C = r(p, C); _ < m.length; _++) I = g(C, p, _, m[_], S), I !== null && (e && I.alternate !== null && C.delete(I.key === null ? _ : I.key), f = i(I, f, _), P === null ? E = I : P.sibling = I, P = I);
      return e && C.forEach(function(F) {
        return t(p, F);
      }), X && en(p, _), E;
    }
    function y(p, f, m, S) {
      var E = nr(m);
      if (typeof E != "function") throw Error(R(150));
      if (m = E.call(m), m == null) throw Error(R(151));
      for (var P = E = null, C = f, _ = f = 0, I = null, N = m.next(); C !== null && !N.done; _++, N = m.next()) {
        C.index > _ ? (I = C, C = null) : I = C.sibling;
        var F = h(p, C, N.value, S);
        if (F === null) {
          C === null && (C = I);
          break;
        }
        e && C && F.alternate === null && t(p, C), f = i(F, f, _), P === null ? E = F : P.sibling = F, P = F, C = I;
      }
      if (N.done) return n(p, C), X && en(p, _), E;
      if (C === null) {
        for (; !N.done; _++, N = m.next()) N = d(p, N.value, S), N !== null && (f = i(N, f, _), P === null ? E = N : P.sibling = N, P = N);
        return X && en(p, _), E;
      }
      for (C = r(p, C); !N.done; _++, N = m.next()) N = g(C, p, _, N.value, S), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? _ : N.key), f = i(N, f, _), P === null ? E = N : P.sibling = N, P = N);
      return e && C.forEach(function(D) {
        return t(p, D);
      }), X && en(p, _), E;
    }
    function x(p, f, m, S) {
      if (typeof m == "object" && m !== null && m.type === wn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case no:
            e: {
              for (var E = m.key, P = f; P !== null; ) {
                if (P.key === E) {
                  if (E = m.type, E === wn) {
                    if (P.tag === 7) {
                      n(p, P.sibling), f = o(P, m.props.children), f.return = p, p = f;
                      break e;
                    }
                  } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === At && Ca(E) === P.type) {
                    n(p, P.sibling), f = o(P, m.props), f.ref = lr(p, P, m), f.return = p, p = f;
                    break e;
                  }
                  n(p, P);
                  break;
                } else t(p, P);
                P = P.sibling;
              }
              m.type === wn ? (f = ln(m.props.children, p.mode, S, m.key), f.return = p, p = f) : (S = Do(m.type, m.key, m.props, null, p.mode, S), S.ref = lr(p, f, m), S.return = p, p = S);
            }
            return s(p);
          case gn:
            e: {
              for (P = m.key; f !== null; ) {
                if (f.key === P) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                  n(p, f.sibling), f = o(f, m.children || []), f.return = p, p = f;
                  break e;
                } else {
                  n(p, f);
                  break;
                }
                else t(p, f);
                f = f.sibling;
              }
              f = hs(m, p.mode, S), f.return = p, p = f;
            }
            return s(p);
          case At:
            return P = m._init, x(p, f, P(m._payload), S);
        }
        if (pr(m)) return w(p, f, m, S);
        if (nr(m)) return y(p, f, m, S);
        ho(p, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(p, f.sibling), f = o(f, m), f.return = p, p = f) : (n(p, f), f = ps(m, p.mode, S), f.return = p, p = f), s(p)) : n(p, f);
    }
    return x;
  }
  var $n = Bf(true), Hf = Bf(false), Xo = Xt(null), Zo = null, Rn = null, Gl = null;
  function Yl() {
    Gl = Rn = Zo = null;
  }
  function ql(e) {
    var t = Xo.current;
    Y(Xo), e._currentValue = t;
  }
  function Zs(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Dn(e, t) {
    Zo = e, Gl = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = true), e.firstContext = null);
  }
  function $e(e) {
    var t = e._currentValue;
    if (Gl !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, Rn === null) {
      if (Zo === null) throw Error(R(308));
      Rn = e, Zo.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else Rn = Rn.next = e;
    return t;
  }
  var rn = null;
  function Xl(e) {
    rn === null ? rn = [
      e
    ] : rn.push(e);
  }
  function Wf(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Xl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Et(e, r);
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Lt = false;
  function Zl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function Qf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function wt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function $t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, $ & 2) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Et(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Xl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Et(e, n);
  }
  function _o(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fl(e, n);
    }
  }
  function ka(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          i === null ? o = i = s : i = i.next = s, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
      } else o = i = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Jo(e, t, n, r) {
    var o = e.updateQueue;
    Lt = false;
    var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
    if (l !== null) {
      o.shared.pending = null;
      var u = l, a = u.next;
      u.next = null, s === null ? i = a : s.next = a, s = u;
      var c = e.alternate;
      c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = a : l.next = a, c.lastBaseUpdate = u));
    }
    if (i !== null) {
      var d = o.baseState;
      s = 0, c = a = u = null, l = i;
      do {
        var h = l.lane, g = l.eventTime;
        if ((r & h) === h) {
          c !== null && (c = c.next = {
            eventTime: g,
            lane: 0,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null
          });
          e: {
            var w = e, y = l;
            switch (h = t, g = n, y.tag) {
              case 1:
                if (w = y.payload, typeof w == "function") {
                  d = w.call(g, d, h);
                  break e;
                }
                d = w;
                break e;
              case 3:
                w.flags = w.flags & -65537 | 128;
              case 0:
                if (w = y.payload, h = typeof w == "function" ? w.call(g, d, h) : w, h == null) break e;
                d = ee({}, d, h);
                break e;
              case 2:
                Lt = true;
            }
          }
          l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [
            l
          ] : h.push(l));
        } else g = {
          eventTime: g,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        }, c === null ? (a = c = g, u = d) : c = c.next = g, s |= h;
        if (l = l.next, l === null) {
          if (l = o.shared.pending, l === null) break;
          h = l, l = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
        }
      } while (true);
      if (c === null && (u = d), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          s |= o.lane, o = o.next;
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      fn |= s, e.lanes = s, e.memoizedState = d;
    }
  }
  function Pa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
        o.call(r);
      }
    }
  }
  var Xr = {}, lt = Xt(Xr), Fr = Xt(Xr), jr = Xt(Xr);
  function on(e) {
    if (e === Xr) throw Error(R(174));
    return e;
  }
  function Jl(e, t) {
    switch (Q(jr, t), Q(Fr, e), Q(lt, Xr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ls(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ls(t, e);
    }
    Y(lt), Q(lt, t);
  }
  function Vn() {
    Y(lt), Y(Fr), Y(jr);
  }
  function Kf(e) {
    on(jr.current);
    var t = on(lt.current), n = Ls(t, e.type);
    t !== n && (Q(Fr, e), Q(lt, n));
  }
  function eu(e) {
    Fr.current === e && (Y(lt), Y(Fr));
  }
  var Z = Xt(0);
  function ei(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ls = [];
  function tu() {
    for (var e = 0; e < ls.length; e++) ls[e]._workInProgressVersionPrimary = null;
    ls.length = 0;
  }
  var Oo = Tt.ReactCurrentDispatcher, us = Tt.ReactCurrentBatchConfig, cn = 0, J = null, oe = null, le = null, ti = false, Sr = false, br = 0, Cy = 0;
  function de() {
    throw Error(R(321));
  }
  function nu(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ze(e[n], t[n])) return false;
    return true;
  }
  function ru(e, t, n, r, o, i) {
    if (cn = i, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oo.current = e === null || e.memoizedState === null ? Ry : _y, e = n(r, o), Sr) {
      i = 0;
      do {
        if (Sr = false, br = 0, 25 <= i) throw Error(R(301));
        i += 1, le = oe = null, t.updateQueue = null, Oo.current = Oy, e = n(r, o);
      } while (Sr);
    }
    if (Oo.current = ni, t = oe !== null && oe.next !== null, cn = 0, le = oe = J = null, ti = false, t) throw Error(R(300));
    return e;
  }
  function ou() {
    var e = br !== 0;
    return br = 0, e;
  }
  function ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return le === null ? J.memoizedState = le = e : le = le.next = e, le;
  }
  function Ve() {
    if (oe === null) {
      var e = J.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = oe.next;
    var t = le === null ? J.memoizedState : le.next;
    if (t !== null) le = t, oe = e;
    else {
      if (e === null) throw Error(R(310));
      oe = e, e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null
      }, le === null ? J.memoizedState = le = e : le = le.next = e;
    }
    return le;
  }
  function Ur(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function as(e) {
    var t = Ve(), n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = oe, o = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var s = o.next;
        o.next = i.next, i.next = s;
      }
      r.baseQueue = o = i, n.pending = null;
    }
    if (o !== null) {
      i = o.next, r = r.baseState;
      var l = s = null, u = null, a = i;
      do {
        var c = a.lane;
        if ((cn & c) === c) u !== null && (u = u.next = {
          lane: 0,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
        else {
          var d = {
            lane: c,
            action: a.action,
            hasEagerState: a.hasEagerState,
            eagerState: a.eagerState,
            next: null
          };
          u === null ? (l = u = d, s = r) : u = u.next = d, J.lanes |= c, fn |= c;
        }
        a = a.next;
      } while (a !== null && a !== i);
      u === null ? s = r : u.next = l, Ze(r, t.memoizedState) || (Ee = true), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        i = o.lane, J.lanes |= i, fn |= i, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function cs(e) {
    var t = Ve(), n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var s = o = o.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== o);
      Ze(i, t.memoizedState) || (Ee = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [
      i,
      r
    ];
  }
  function Gf() {
  }
  function Yf(e, t) {
    var n = J, r = Ve(), o = t(), i = !Ze(r.memoizedState, o);
    if (i && (r.memoizedState = o, Ee = true), r = r.queue, iu(Zf.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || i || le !== null && le.memoizedState.tag & 1) {
      if (n.flags |= 2048, $r(9, Xf.bind(null, n, r, o, t), void 0, null), ue === null) throw Error(R(349));
      cn & 30 || qf(n, t, o);
    }
    return o;
  }
  function qf(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = J.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, J.updateQueue = t, t.stores = [
      e
    ]) : (n = t.stores, n === null ? t.stores = [
      e
    ] : n.push(e));
  }
  function Xf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Jf(t) && ed(e);
  }
  function Zf(e, t, n) {
    return n(function() {
      Jf(t) && ed(e);
    });
  }
  function Jf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ze(e, n);
    } catch {
      return true;
    }
  }
  function ed(e) {
    var t = Et(e, 1);
    t !== null && Xe(t, e, 1, -1);
  }
  function Ta(e) {
    var t = ot();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ty.bind(null, J, e), [
      t.memoizedState,
      e
    ];
  }
  function $r(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = J.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function td() {
    return Ve().memoizedState;
  }
  function No(e, t, n, r) {
    var o = ot();
    J.flags |= e, o.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Si(e, t, n, r) {
    var o = Ve();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (oe !== null) {
      var s = oe.memoizedState;
      if (i = s.destroy, r !== null && nu(r, s.deps)) {
        o.memoizedState = $r(t, n, i, r);
        return;
      }
    }
    J.flags |= e, o.memoizedState = $r(1 | t, n, i, r);
  }
  function Ra(e, t) {
    return No(8390656, 8, e, t);
  }
  function iu(e, t) {
    return Si(2048, 8, e, t);
  }
  function nd(e, t) {
    return Si(4, 2, e, t);
  }
  function rd(e, t) {
    return Si(4, 4, e, t);
  }
  function od(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function id(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, Si(4, 4, od.bind(null, t, e), n);
  }
  function su() {
  }
  function sd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nu(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function ld(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function ud(e, t, n) {
    return cn & 21 ? (Ze(n, t) || (n = pf(), J.lanes |= n, fn |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Ee = true), e.memoizedState = n);
  }
  function ky(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4, e(true);
    var r = us.transition;
    us.transition = {};
    try {
      e(false), t();
    } finally {
      H = n, us.transition = r;
    }
  }
  function ad() {
    return Ve().memoizedState;
  }
  function Py(e, t, n) {
    var r = Bt(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, cd(e)) fd(t, n);
    else if (n = Wf(e, t, n, r), n !== null) {
      var o = ge();
      Xe(n, e, r, o), dd(n, t, r);
    }
  }
  function Ty(e, t, n) {
    var r = Bt(e), o = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (cd(e)) fd(t, o);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var s = t.lastRenderedState, l = i(s, n);
        if (o.hasEagerState = true, o.eagerState = l, Ze(l, s)) {
          var u = t.interleaved;
          u === null ? (o.next = o, Xl(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = Wf(e, t, o, r), n !== null && (o = ge(), Xe(n, e, r, o), dd(n, t, r));
    }
  }
  function cd(e) {
    var t = e.alternate;
    return e === J || t !== null && t === J;
  }
  function fd(e, t) {
    Sr = ti = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function dd(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fl(e, n);
    }
  }
  var ni = {
    readContext: $e,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: false
  }, Ry = {
    readContext: $e,
    useCallback: function(e, t) {
      return ot().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: $e,
    useEffect: Ra,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, No(4194308, 4, od.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return No(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return No(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = ot();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = ot();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = Py.bind(null, J, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = ot();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: Ta,
    useDebugValue: su,
    useDeferredValue: function(e) {
      return ot().memoizedState = e;
    },
    useTransition: function() {
      var e = Ta(false), t = e[0];
      return e = ky.bind(null, e[1]), ot().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = J, o = ot();
      if (X) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (n = t(), ue === null) throw Error(R(349));
        cn & 30 || qf(r, t, n);
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t
      };
      return o.queue = i, Ra(Zf.bind(null, r, i, e), [
        e
      ]), r.flags |= 2048, $r(9, Xf.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function() {
      var e = ot(), t = ue.identifierPrefix;
      if (X) {
        var n = gt, r = vt;
        n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = Cy++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, _y = {
    readContext: $e,
    useCallback: sd,
    useContext: $e,
    useEffect: iu,
    useImperativeHandle: id,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: ld,
    useReducer: as,
    useRef: td,
    useState: function() {
      return as(Ur);
    },
    useDebugValue: su,
    useDeferredValue: function(e) {
      var t = Ve();
      return ud(t, oe.memoizedState, e);
    },
    useTransition: function() {
      var e = as(Ur)[0], t = Ve().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: Gf,
    useSyncExternalStore: Yf,
    useId: ad,
    unstable_isNewReconciler: false
  }, Oy = {
    readContext: $e,
    useCallback: sd,
    useContext: $e,
    useEffect: iu,
    useImperativeHandle: id,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: ld,
    useReducer: cs,
    useRef: td,
    useState: function() {
      return cs(Ur);
    },
    useDebugValue: su,
    useDeferredValue: function(e) {
      var t = Ve();
      return oe === null ? t.memoizedState = e : ud(t, oe.memoizedState, e);
    },
    useTransition: function() {
      var e = cs(Ur)[0], t = Ve().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: Gf,
    useSyncExternalStore: Yf,
    useId: ad,
    unstable_isNewReconciler: false
  };
  function Qe(e, t) {
    if (e && e.defaultProps) {
      t = ee({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Js(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ei = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? yn(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ge(), o = Bt(e), i = wt(r, o);
      i.payload = t, n != null && (i.callback = n), t = $t(e, i, o), t !== null && (Xe(t, e, o, r), _o(t, e, o));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ge(), o = Bt(e), i = wt(r, o);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = $t(e, i, o), t !== null && (Xe(t, e, o, r), _o(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ge(), r = Bt(e), o = wt(n, r);
      o.tag = 2, t != null && (o.callback = t), t = $t(e, o, r), t !== null && (Xe(t, e, r, n), _o(t, e, r));
    }
  };
  function _a(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(o, i) : true;
  }
  function pd(e, t, n) {
    var r = false, o = Qt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = $e(i) : (o = ke(t) ? un : me.current, r = t.contextTypes, i = (r = r != null) ? bn(e, o) : Qt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ei, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Oa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ei.enqueueReplaceState(t, t.state, null);
  }
  function el(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Zl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = $e(i) : (i = ke(t) ? un : me.current, o.context = bn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Js(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ei.enqueueReplaceState(o, o.state, null), Jo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Bn(e, t) {
    try {
      var n = "", r = t;
      do
        n += rm(r), r = r.return;
      while (r);
      var o = n;
    } catch (i) {
      o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return {
      value: e,
      source: t,
      stack: o,
      digest: null
    };
  }
  function fs(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function tl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ny = typeof WeakMap == "function" ? WeakMap : Map;
  function hd(e, t, n) {
    n = wt(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      oi || (oi = true, fl = r), tl(e, t);
    }, n;
  }
  function md(e, t, n) {
    n = wt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        tl(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      tl(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([
        this
      ]) : Vt.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: s !== null ? s : ""
      });
    }), n;
  }
  function Na(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ny();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = Hy.bind(null, e, t, n), t.then(e, e));
  }
  function Aa(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function La(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e);
  }
  var Ay = Tt.ReactCurrentOwner, Ee = false;
  function ye(e, t, n, r) {
    t.child = e === null ? Hf(t, null, n, r) : $n(t, e.child, n, r);
  }
  function Ma(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Dn(t, o), r = ru(e, t, n, r, i, o), n = ou(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (X && n && Wl(t), t.flags |= 1, ye(e, t, r, o), t.child);
  }
  function Da(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !hu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, yd(e, t, i, r, o)) : (e = Do(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !(e.lanes & o)) {
      var s = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Mr, n(s, r) && e.ref === t.ref) return Ct(e, t, o);
    }
    return t.flags |= 1, e = Ht(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function yd(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Mr(i, r) && e.ref === t.ref) if (Ee = false, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ee = true);
      else return t.lanes = e.lanes, Ct(e, t, o);
    }
    return nl(e, t, n, r, o);
  }
  function vd(e, t, n) {
    var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, Q(On, _e), _e |= n;
    else {
      if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, Q(On, _e), _e |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = i !== null ? i.baseLanes : n, Q(On, _e), _e |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Q(On, _e), _e |= r;
    return ye(e, t, o, n), t.child;
  }
  function gd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function nl(e, t, n, r, o) {
    var i = ke(n) ? un : me.current;
    return i = bn(t, i), Dn(t, o), n = ru(e, t, n, r, i, o), r = ou(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (X && r && Wl(t), t.flags |= 1, ye(e, t, n, o), t.child);
  }
  function Ia(e, t, n, r, o) {
    if (ke(n)) {
      var i = true;
      Go(t);
    } else i = false;
    if (Dn(t, o), t.stateNode === null) Ao(e, t), pd(t, n, r), el(t, n, r, o), r = true;
    else if (e === null) {
      var s = t.stateNode, l = t.memoizedProps;
      s.props = l;
      var u = s.context, a = n.contextType;
      typeof a == "object" && a !== null ? a = $e(a) : (a = ke(n) ? un : me.current, a = bn(t, a));
      var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== a) && Oa(t, s, r, a), Lt = false;
      var h = t.memoizedState;
      s.state = h, Jo(t, r, s, o), u = t.memoizedState, l !== r || h !== u || Ce.current || Lt ? (typeof c == "function" && (Js(t, n, c, r), u = t.memoizedState), (l = Lt || _a(t, n, l, r, h, u, a)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = a, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      s = t.stateNode, Qf(e, t), l = t.memoizedProps, a = t.type === t.elementType ? l : Qe(t.type, l), s.props = a, d = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = $e(u) : (u = ke(n) ? un : me.current, u = bn(t, u));
      var g = n.getDerivedStateFromProps;
      (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || h !== u) && Oa(t, s, r, u), Lt = false, h = t.memoizedState, s.state = h, Jo(t, r, s, o);
      var w = t.memoizedState;
      l !== d || h !== w || Ce.current || Lt ? (typeof g == "function" && (Js(t, n, g, r), w = t.memoizedState), (a = Lt || _a(t, n, a, r, h, w, u) || false) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = u, r = a) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return rl(e, t, n, r, i, o);
  }
  function rl(e, t, n, r, o, i) {
    gd(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && xa(t, n, false), Ct(e, t, i);
    r = t.stateNode, Ay.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = $n(t, e.child, null, i), t.child = $n(t, null, l, i)) : ye(e, t, l, i), t.memoizedState = r.state, o && xa(t, n, true), t.child;
  }
  function wd(e) {
    var t = e.stateNode;
    t.pendingContext ? wa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wa(e, t.context, false), Jl(e, t.containerInfo);
  }
  function za(e, t, n, r, o) {
    return Un(), Kl(o), t.flags |= 256, ye(e, t, n, r), t.child;
  }
  var ol = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function il(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function xd(e, t, n) {
    var r = t.pendingProps, o = Z.current, i = false, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? false : (o & 2) !== 0), l ? (i = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Q(Z, o & 1), e === null) return Xs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
      mode: "hidden",
      children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Pi(s, r, 0, null), e = ln(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = il(n), t.memoizedState = ol, e) : lu(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Ly(e, t, s, r, l, o, n);
    if (i) {
      i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
      var u = {
        mode: "hidden",
        children: r.children
      };
      return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ht(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Ht(l, i) : (i = ln(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? il(n) : {
        baseLanes: s.baseLanes | n,
        cachePool: null,
        transitions: s.transitions
      }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = ol, r;
    }
    return i = e.child, e = i.sibling, r = Ht(i, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function lu(e, t) {
    return t = Pi({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function mo(e, t, n, r) {
    return r !== null && Kl(r), $n(t, e.child, null, n), e = lu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ly(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = fs(Error(R(422))), mo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Pi({
      mode: "visible",
      children: r.children
    }, o, 0, null), i = ln(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && $n(t, e.child, null, s), t.child.memoizedState = il(s), t.memoizedState = ol, i);
    if (!(t.mode & 1)) return mo(e, t, s, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
      return r = l, i = Error(R(419)), r = fs(i, r, void 0), mo(e, t, s, r);
    }
    if (l = (s & e.childLanes) !== 0, Ee || l) {
      if (r = ue, r !== null) {
        switch (s & -s) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Et(e, o), Xe(r, e, o, -1));
      }
      return pu(), r = fs(Error(R(421))), mo(e, t, s, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ne = Ut(o.nextSibling), Ae = t, X = true, Ye = null, e !== null && (Fe[je++] = vt, Fe[je++] = gt, Fe[je++] = an, vt = e.id, gt = e.overflow, an = t), t = lu(t, r.children), t.flags |= 4096, t);
  }
  function Fa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Zs(e.return, t, n);
  }
  function ds(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
  }
  function Sd(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (ye(e, t, r.children, n), r = Z.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fa(e, n, t);
        else if (e.tag === 19) Fa(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Q(Z, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ei(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ds(t, false, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ei(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        ds(t, true, n, null, i);
        break;
      case "together":
        ds(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ao(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ct(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
      for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ht(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function My(e, t, n) {
    switch (t.tag) {
      case 3:
        wd(t), Un();
        break;
      case 5:
        Kf(t);
        break;
      case 1:
        ke(t.type) && Go(t);
        break;
      case 4:
        Jl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        Q(Xo, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Q(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xd(e, t, n) : (Q(Z, Z.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
        Q(Z, Z.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Sd(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Q(Z, Z.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, vd(e, t, n);
    }
    return Ct(e, t, n);
  }
  var Ed, sl, Cd, kd;
  Ed = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  sl = function() {
  };
  Cd = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, on(lt.current);
      var i = null;
      switch (n) {
        case "input":
          o = _s(e, o), r = _s(e, r), i = [];
          break;
        case "select":
          o = ee({}, o, {
            value: void 0
          }), r = ee({}, r, {
            value: void 0
          }), i = [];
          break;
        case "textarea":
          o = As(e, o), r = As(e, r), i = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qo);
      }
      Ms(n, r);
      var s;
      n = null;
      for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
        var l = o[a];
        for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Tr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
      for (a in r) {
        var u = r[a];
        if (l = o == null ? void 0 : o[a], r.hasOwnProperty(a) && u !== l && (u != null || l != null)) if (a === "style") if (l) {
          for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
        } else n || (i || (i = []), i.push(a, n)), n = u;
        else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Tr.hasOwnProperty(a) ? (u != null && a === "onScroll" && G("scroll", e), i || l === u || (i = [])) : (i = i || []).push(a, u));
      }
      n && (i = i || []).push("style", n);
      var a = i;
      (t.updateQueue = a) && (t.flags |= 4);
    }
  };
  kd = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ur(e, t) {
    if (!X) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Dy(e, t, n) {
    var r = t.pendingProps;
    switch (Ql(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pe(t), null;
      case 1:
        return ke(t.type) && Ko(), pe(t), null;
      case 3:
        return r = t.stateNode, Vn(), Y(Ce), Y(me), tu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (hl(Ye), Ye = null))), sl(e, t), pe(t), null;
      case 5:
        eu(t);
        var o = on(jr.current);
        if (n = t.type, e !== null && t.stateNode != null) Cd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(R(166));
            return pe(t), null;
          }
          if (e = on(lt.current), po(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[it] = t, r[zr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                G("cancel", r), G("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < mr.length; o++) G(mr[o], r);
                break;
              case "source":
                G("error", r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", r), G("load", r);
                break;
              case "details":
                G("toggle", r);
                break;
              case "input":
                Qu(r, i), G("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!i.multiple
                }, G("invalid", r);
                break;
              case "textarea":
                Gu(r, i), G("invalid", r);
            }
            Ms(n, i), o = null;
            for (var s in i) if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== true && fo(r.textContent, l, e), o = [
                "children",
                l
              ]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== true && fo(r.textContent, l, e), o = [
                "children",
                "" + l
              ]) : Tr.hasOwnProperty(s) && l != null && s === "onScroll" && G("scroll", r);
            }
            switch (n) {
              case "input":
                ro(r), Ku(r, i, true);
                break;
              case "textarea":
                ro(r), Yu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qo);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
              is: r.is
            }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = true : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[it] = t, e[zr] = r, Ed(e, t, false, false), t.stateNode = e;
            e: {
              switch (s = Ds(n, r), n) {
                case "dialog":
                  G("cancel", e), G("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < mr.length; o++) G(mr[o], e);
                  o = r;
                  break;
                case "source":
                  G("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", e), G("load", e), o = r;
                  break;
                case "details":
                  G("toggle", e), o = r;
                  break;
                case "input":
                  Qu(e, r), o = _s(e, r), G("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, o = ee({}, r, {
                    value: void 0
                  }), G("invalid", e);
                  break;
                case "textarea":
                  Gu(e, r), o = As(e, r), G("invalid", e);
                  break;
                default:
                  o = r;
              }
              Ms(n, o), l = o;
              for (i in l) if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === "style" ? ef(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Zc(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Rr(e, u) : typeof u == "number" && Rr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Tr.hasOwnProperty(i) ? u != null && i === "onScroll" && G("scroll", e) : u != null && Al(e, i, u, s));
              }
              switch (n) {
                case "input":
                  ro(e), Ku(e, r, false);
                  break;
                case "textarea":
                  ro(e), Yu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Wt(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? Nn(e, !!r.multiple, i, false) : r.defaultValue != null && Nn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Qo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return pe(t), null;
      case 6:
        if (e && t.stateNode != null) kd(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
          if (n = on(jr.current), on(lt.current), po(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (i = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
        }
        return pe(t), null;
      case 13:
        if (Y(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (X && Ne !== null && t.mode & 1 && !(t.flags & 128)) Vf(), Un(), t.flags |= 98560, i = false;
          else if (i = po(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(R(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
              i[it] = t;
            } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            pe(t), i = false;
          } else Ye !== null && (hl(Ye), Ye = null), i = true;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? se === 0 && (se = 3) : pu())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
      case 4:
        return Vn(), sl(e, t), e === null && Dr(t.stateNode.containerInfo), pe(t), null;
      case 10:
        return ql(t.type._context), pe(t), null;
      case 17:
        return ke(t.type) && Ko(), pe(t), null;
      case 19:
        if (Y(Z), i = t.memoizedState, i === null) return pe(t), null;
        if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) ur(i, false);
        else {
          if (se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (s = ei(e), s !== null) {
              for (t.flags |= 128, ur(i, false), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return Q(Z, Z.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ne() > Hn && (t.flags |= 128, r = true, ur(i, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ei(s), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ur(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !X) return pe(t), null;
          } else 2 * ne() - i.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = true, ur(i, false), t.lanes = 4194304);
          i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = Z.current, Q(Z, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
      case 22:
      case 23:
        return du(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(R(156, t.tag));
  }
  function Iy(e, t) {
    switch (Ql(t), t.tag) {
      case 1:
        return ke(t.type) && Ko(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Vn(), Y(Ce), Y(me), tu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return eu(t), null;
      case 13:
        if (Y(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(R(340));
          Un();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Y(Z), null;
      case 4:
        return Vn(), null;
      case 10:
        return ql(t.type._context), null;
      case 22:
      case 23:
        return du(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yo = false, he = false, zy = typeof WeakSet == "function" ? WeakSet : Set, A = null;
  function _n(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      te(e, t, r);
    }
    else n.current = null;
  }
  function ll(e, t, n) {
    try {
      n();
    } catch (r) {
      te(e, t, r);
    }
  }
  var ja = false;
  function Fy(e, t) {
    if (Hs = Bo, e = Of(), Hl(e)) {
      if ("selectionStart" in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0, l = -1, u = -1, a = 0, c = 0, d = e, h = null;
          t: for (; ; ) {
            for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (u = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (g = d.firstChild) !== null; ) h = d, d = g;
            for (; ; ) {
              if (d === e) break t;
              if (h === n && ++a === o && (l = s), h === i && ++c === r && (u = s), (g = d.nextSibling) !== null) break;
              d = h, h = d.parentNode;
            }
            d = g;
          }
          n = l === -1 || u === -1 ? null : {
            start: l,
            end: u
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (Ws = {
      focusedElem: e,
      selectionRange: n
    }, Bo = false, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
    else for (; A !== null; ) {
      t = A;
      try {
        var w = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (w !== null) {
              var y = w.memoizedProps, x = w.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Qe(t.type, y), x);
              p.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(R(163));
        }
      } catch (S) {
        te(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, A = e;
        break;
      }
      A = t.return;
    }
    return w = ja, ja = false, w;
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          o.destroy = void 0, i !== void 0 && ll(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Ci(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ul(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Pd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[zr], delete t[Gs], delete t[wy], delete t[xy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Td(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ba(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Td(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qo));
    else if (r !== 4 && (e = e.child, e !== null)) for (al(e, t, n), e = e.sibling; e !== null; ) al(e, t, n), e = e.sibling;
  }
  function cl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (cl(e, t, n), e = e.sibling; e !== null; ) cl(e, t, n), e = e.sibling;
  }
  var ae = null, Ge = false;
  function Rt(e, t, n) {
    for (n = n.child; n !== null; ) Rd(e, t, n), n = n.sibling;
  }
  function Rd(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function") try {
      st.onCommitFiberUnmount(mi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        he || _n(n, t);
      case 6:
        var r = ae, o = Ge;
        ae = null, Rt(e, t, n), ae = r, Ge = o, ae !== null && (Ge ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
        break;
      case 18:
        ae !== null && (Ge ? (e = ae, n = n.stateNode, e.nodeType === 8 ? is(e.parentNode, n) : e.nodeType === 1 && is(e, n), Ar(e)) : is(ae, n.stateNode));
        break;
      case 4:
        r = ae, o = Ge, ae = n.stateNode.containerInfo, Ge = true, Rt(e, t, n), ae = r, Ge = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var i = o, s = i.destroy;
            i = i.tag, s !== void 0 && (i & 2 || i & 4) && ll(n, t, s), o = o.next;
          } while (o !== r);
        }
        Rt(e, t, n);
        break;
      case 1:
        if (!he && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          te(n, t, l);
        }
        Rt(e, t, n);
        break;
      case 21:
        Rt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, Rt(e, t, n), he = r) : Rt(e, t, n);
        break;
      default:
        Rt(e, t, n);
    }
  }
  function Ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zy()), t.forEach(function(r) {
        var o = Qy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function He(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, s = t, l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ae = l.stateNode, Ge = false;
              break e;
            case 3:
              ae = l.stateNode.containerInfo, Ge = true;
              break e;
            case 4:
              ae = l.stateNode.containerInfo, Ge = true;
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(R(160));
        Rd(i, s, o), ae = null, Ge = false;
        var u = o.alternate;
        u !== null && (u.return = null), o.return = null;
      } catch (a) {
        te(o, t, a);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _d(t, e), t = t.sibling;
  }
  function _d(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (He(t, e), rt(e), r & 4) {
          try {
            Er(3, e, e.return), Ci(3, e);
          } catch (y) {
            te(e, e.return, y);
          }
          try {
            Er(5, e, e.return);
          } catch (y) {
            te(e, e.return, y);
          }
        }
        break;
      case 1:
        He(t, e), rt(e), r & 512 && n !== null && _n(n, n.return);
        break;
      case 5:
        if (He(t, e), rt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Rr(o, "");
          } catch (y) {
            te(e, e.return, y);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, u = e.updateQueue;
          if (e.updateQueue = null, u !== null) try {
            l === "input" && i.type === "radio" && i.name != null && Yc(o, i), Ds(l, s);
            var a = Ds(l, i);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s], d = u[s + 1];
              c === "style" ? ef(o, d) : c === "dangerouslySetInnerHTML" ? Zc(o, d) : c === "children" ? Rr(o, d) : Al(o, c, d, a);
            }
            switch (l) {
              case "input":
                Os(o, i);
                break;
              case "textarea":
                qc(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? Nn(o, !!i.multiple, g, false) : h !== !!i.multiple && (i.defaultValue != null ? Nn(o, !!i.multiple, i.defaultValue, true) : Nn(o, !!i.multiple, i.multiple ? [] : "", false));
            }
            o[zr] = i;
          } catch (y) {
            te(e, e.return, y);
          }
        }
        break;
      case 6:
        if (He(t, e), rt(e), r & 4) {
          if (e.stateNode === null) throw Error(R(162));
          o = e.stateNode, i = e.memoizedProps;
          try {
            o.nodeValue = i;
          } catch (y) {
            te(e, e.return, y);
          }
        }
        break;
      case 3:
        if (He(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (y) {
          te(e, e.return, y);
        }
        break;
      case 4:
        He(t, e), rt(e);
        break;
      case 13:
        He(t, e), rt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (cu = ne())), r & 4 && Ua(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (a = he) || c, He(t, e), he = a) : He(t, e), rt(e), r & 8192) {
          if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (A = e, c = e.child; c !== null; ) {
            for (d = A = c; A !== null; ) {
              switch (h = A, g = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, h, h.return);
                  break;
                case 1:
                  _n(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (y) {
                      te(r, n, y);
                    }
                  }
                  break;
                case 5:
                  _n(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Va(d);
                    continue;
                  }
              }
              g !== null ? (g.return = h, A = g) : Va(d);
            }
            c = c.sibling;
          }
          e: for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, u = d.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Jc("display", s));
                } catch (y) {
                  te(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null) try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (y) {
                te(e, e.return, y);
              }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
        }
        break;
      case 19:
        He(t, e), rt(e), r & 4 && Ua(e);
        break;
      case 21:
        break;
      default:
        He(t, e), rt(e);
    }
  }
  function rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Td(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(R(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Rr(o, ""), r.flags &= -33);
            var i = ba(e);
            cl(e, i, o);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, l = ba(e);
            al(e, l, s);
            break;
          default:
            throw Error(R(161));
        }
      } catch (u) {
        te(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jy(e, t, n) {
    A = e, Od(e);
  }
  function Od(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
      var o = A, i = o.child;
      if (o.tag === 22 && r) {
        var s = o.memoizedState !== null || yo;
        if (!s) {
          var l = o.alternate, u = l !== null && l.memoizedState !== null || he;
          l = yo;
          var a = he;
          if (yo = s, (he = u) && !a) for (A = o; A !== null; ) s = A, u = s.child, s.tag === 22 && s.memoizedState !== null ? Ba(o) : u !== null ? (u.return = s, A = u) : Ba(o);
          for (; i !== null; ) A = i, Od(i), i = i.sibling;
          A = o, yo = l, he = a;
        }
        $a(e);
      } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, A = i) : $a(e);
    }
  }
  function $a(e) {
    for (; A !== null; ) {
      var t = A;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Ci(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Pa(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Pa(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ar(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
          he || t.flags & 512 && ul(t);
        } catch (h) {
          te(t, t.return, h);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, A = n;
        break;
      }
      A = t.return;
    }
  }
  function Va(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, A = n;
        break;
      }
      A = t.return;
    }
  }
  function Ba(e) {
    for (; A !== null; ) {
      var t = A;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ci(4, t);
            } catch (u) {
              te(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                te(t, o, u);
              }
            }
            var i = t.return;
            try {
              ul(t);
            } catch (u) {
              te(t, i, u);
            }
            break;
          case 5:
            var s = t.return;
            try {
              ul(t);
            } catch (u) {
              te(t, s, u);
            }
        }
      } catch (u) {
        te(t, t.return, u);
      }
      if (t === e) {
        A = null;
        break;
      }
      var l = t.sibling;
      if (l !== null) {
        l.return = t.return, A = l;
        break;
      }
      A = t.return;
    }
  }
  var by = Math.ceil, ri = Tt.ReactCurrentDispatcher, uu = Tt.ReactCurrentOwner, Ue = Tt.ReactCurrentBatchConfig, $ = 0, ue = null, re = null, ce = 0, _e = 0, On = Xt(0), se = 0, Vr = null, fn = 0, ki = 0, au = 0, Cr = null, Se = null, cu = 0, Hn = 1 / 0, mt = null, oi = false, fl = null, Vt = null, vo = false, zt = null, ii = 0, kr = 0, dl = null, Lo = -1, Mo = 0;
  function ge() {
    return $ & 6 ? ne() : Lo !== -1 ? Lo : Lo = ne();
  }
  function Bt(e) {
    return e.mode & 1 ? $ & 2 && ce !== 0 ? ce & -ce : Ey.transition !== null ? (Mo === 0 && (Mo = pf()), Mo) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xf(e.type)), e) : 1;
  }
  function Xe(e, t, n, r) {
    if (50 < kr) throw kr = 0, dl = null, Error(R(185));
    Gr(e, n, r), (!($ & 2) || e !== ue) && (e === ue && (!($ & 2) && (ki |= n), se === 4 && Dt(e, ce)), Pe(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (Hn = ne() + 500, xi && Zt()));
  }
  function Pe(e, t) {
    var n = e.callbackNode;
    Em(e, t);
    var r = Vo(e, e === ue ? ce : 0);
    if (r === 0) n !== null && Zu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Zu(n), t === 1) e.tag === 0 ? Sy(Ha.bind(null, e)) : bf(Ha.bind(null, e)), vy(function() {
        !($ & 6) && Zt();
      }), n = null;
      else {
        switch (hf(r)) {
          case 1:
            n = zl;
            break;
          case 4:
            n = ff;
            break;
          case 16:
            n = $o;
            break;
          case 536870912:
            n = df;
            break;
          default:
            n = $o;
        }
        n = Fd(n, Nd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Nd(e, t) {
    if (Lo = -1, Mo = 0, $ & 6) throw Error(R(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n) return null;
    var r = Vo(e, e === ue ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = si(e, r);
    else {
      t = r;
      var o = $;
      $ |= 2;
      var i = Ld();
      (ue !== e || ce !== t) && (mt = null, Hn = ne() + 500, sn(e, t));
      do
        try {
          Vy();
          break;
        } catch (l) {
          Ad(e, l);
        }
      while (true);
      Yl(), ri.current = i, $ = o, re !== null ? t = 0 : (ue = null, ce = 0, t = se);
    }
    if (t !== 0) {
      if (t === 2 && (o = bs(e), o !== 0 && (r = o, t = pl(e, o))), t === 1) throw n = Vr, sn(e, 0), Dt(e, r), Pe(e, ne()), n;
      if (t === 6) Dt(e, r);
      else {
        if (o = e.current.alternate, !(r & 30) && !Uy(o) && (t = si(e, r), t === 2 && (i = bs(e), i !== 0 && (r = i, t = pl(e, i))), t === 1)) throw n = Vr, sn(e, 0), Dt(e, r), Pe(e, ne()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(R(345));
          case 2:
            tn(e, Se, mt);
            break;
          case 3:
            if (Dt(e, r), (r & 130023424) === r && (t = cu + 500 - ne(), 10 < t)) {
              if (Vo(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                ge(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Ks(tn.bind(null, e, Se, mt), t);
              break;
            }
            tn(e, Se, mt);
            break;
          case 4:
            if (Dt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var s = 31 - qe(r);
              i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
            }
            if (r = o, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * by(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ks(tn.bind(null, e, Se, mt), r);
              break;
            }
            tn(e, Se, mt);
            break;
          case 5:
            tn(e, Se, mt);
            break;
          default:
            throw Error(R(329));
        }
      }
    }
    return Pe(e, ne()), e.callbackNode === n ? Nd.bind(null, e) : null;
  }
  function pl(e, t) {
    var n = Cr;
    return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256), e = si(e, t), e !== 2 && (t = Se, Se = n, t !== null && hl(t)), e;
  }
  function hl(e) {
    Se === null ? Se = e : Se.push.apply(Se, e);
  }
  function Uy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ze(i(), o)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Dt(e, t) {
    for (t &= ~au, t &= ~ki, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - qe(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ha(e) {
    if ($ & 6) throw Error(R(327));
    In();
    var t = Vo(e, 0);
    if (!(t & 1)) return Pe(e, ne()), null;
    var n = si(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = bs(e);
      r !== 0 && (t = r, n = pl(e, r));
    }
    if (n === 1) throw n = Vr, sn(e, 0), Dt(e, t), Pe(e, ne()), n;
    if (n === 6) throw Error(R(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, tn(e, Se, mt), Pe(e, ne()), null;
  }
  function fu(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      $ = n, $ === 0 && (Hn = ne() + 500, xi && Zt());
    }
  }
  function dn(e) {
    zt !== null && zt.tag === 0 && !($ & 6) && In();
    var t = $;
    $ |= 1;
    var n = Ue.transition, r = H;
    try {
      if (Ue.transition = null, H = 1, e) return e();
    } finally {
      H = r, Ue.transition = n, $ = t, !($ & 6) && Zt();
    }
  }
  function du() {
    _e = On.current, Y(On);
  }
  function sn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, yy(n)), re !== null) for (n = re.return; n !== null; ) {
      var r = n;
      switch (Ql(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ko();
          break;
        case 3:
          Vn(), Y(Ce), Y(me), tu();
          break;
        case 5:
          eu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          Y(Z);
          break;
        case 19:
          Y(Z);
          break;
        case 10:
          ql(r.type._context);
          break;
        case 22:
        case 23:
          du();
      }
      n = n.return;
    }
    if (ue = e, re = e = Ht(e.current, null), ce = _e = t, se = 0, Vr = null, au = ki = fn = 0, Se = Cr = null, rn !== null) {
      for (t = 0; t < rn.length; t++) if (n = rn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
      rn = null;
    }
    return e;
  }
  function Ad(e, t) {
    do {
      var n = re;
      try {
        if (Yl(), Oo.current = ni, ti) {
          for (var r = J.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          ti = false;
        }
        if (cn = 0, le = oe = J = null, Sr = false, br = 0, uu.current = null, n === null || n.return === null) {
          se = 1, Vr = t, re = null;
          break;
        }
        e: {
          var i = e, s = n.return, l = n, u = t;
          if (t = ce, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            var a = u, c = l, d = c.tag;
            if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var h = c.alternate;
              h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var g = Aa(s);
            if (g !== null) {
              g.flags &= -257, La(g, s, l, i, t), g.mode & 1 && Na(i, a, t), t = g, u = a;
              var w = t.updateQueue;
              if (w === null) {
                var y = /* @__PURE__ */ new Set();
                y.add(u), t.updateQueue = y;
              } else w.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                Na(i, a, t), pu();
                break e;
              }
              u = Error(R(426));
            }
          } else if (X && l.mode & 1) {
            var x = Aa(s);
            if (x !== null) {
              !(x.flags & 65536) && (x.flags |= 256), La(x, s, l, i, t), Kl(Bn(u, l));
              break e;
            }
          }
          i = u = Bn(u, l), se !== 4 && (se = 2), Cr === null ? Cr = [
            i
          ] : Cr.push(i), i = s;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var p = hd(i, u, t);
                ka(i, p);
                break e;
              case 1:
                l = u;
                var f = i.type, m = i.stateNode;
                if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vt === null || !Vt.has(m)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var S = md(i, l, t);
                  ka(i, S);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Dd(n);
      } catch (E) {
        t = E, re === n && n !== null && (re = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function Ld() {
    var e = ri.current;
    return ri.current = ni, e === null ? ni : e;
  }
  function pu() {
    (se === 0 || se === 3 || se === 2) && (se = 4), ue === null || !(fn & 268435455) && !(ki & 268435455) || Dt(ue, ce);
  }
  function si(e, t) {
    var n = $;
    $ |= 2;
    var r = Ld();
    (ue !== e || ce !== t) && (mt = null, sn(e, t));
    do
      try {
        $y();
        break;
      } catch (o) {
        Ad(e, o);
      }
    while (true);
    if (Yl(), $ = n, ri.current = r, re !== null) throw Error(R(261));
    return ue = null, ce = 0, se;
  }
  function $y() {
    for (; re !== null; ) Md(re);
  }
  function Vy() {
    for (; re !== null && !pm(); ) Md(re);
  }
  function Md(e) {
    var t = zd(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps, t === null ? Dd(e) : re = t, uu.current = null;
  }
  function Dd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Iy(n, t), n !== null) {
          n.flags &= 32767, re = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          se = 6, re = null;
          return;
        }
      } else if (n = Dy(n, t, _e), n !== null) {
        re = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        re = t;
        return;
      }
      re = t = e;
    } while (t !== null);
    se === 0 && (se = 5);
  }
  function tn(e, t, n) {
    var r = H, o = Ue.transition;
    try {
      Ue.transition = null, H = 1, By(e, t, n, r);
    } finally {
      Ue.transition = o, H = r;
    }
    return null;
  }
  function By(e, t, n, r) {
    do
      In();
    while (zt !== null);
    if ($ & 6) throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Cm(e, i), e === ue && (re = ue = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vo || (vo = true, Fd($o, function() {
      return In(), null;
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
      i = Ue.transition, Ue.transition = null;
      var s = H;
      H = 1;
      var l = $;
      $ |= 4, uu.current = null, Fy(e, n), _d(n, e), ay(Ws), Bo = !!Hs, Ws = Hs = null, e.current = n, jy(n), hm(), $ = l, H = s, Ue.transition = i;
    } else e.current = n;
    if (vo && (vo = false, zt = e, ii = o), i = e.pendingLanes, i === 0 && (Vt = null), vm(n.stateNode), Pe(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
    if (oi) throw oi = false, e = fl, fl = null, e;
    return ii & 1 && e.tag !== 0 && In(), i = e.pendingLanes, i & 1 ? e === dl ? kr++ : (kr = 0, dl = e) : kr = 0, Zt(), null;
  }
  function In() {
    if (zt !== null) {
      var e = hf(ii), t = Ue.transition, n = H;
      try {
        if (Ue.transition = null, H = 16 > e ? 16 : e, zt === null) var r = false;
        else {
          if (e = zt, zt = null, ii = 0, $ & 6) throw Error(R(331));
          var o = $;
          for ($ |= 4, A = e.current; A !== null; ) {
            var i = A, s = i.child;
            if (A.flags & 16) {
              var l = i.deletions;
              if (l !== null) {
                for (var u = 0; u < l.length; u++) {
                  var a = l[u];
                  for (A = a; A !== null; ) {
                    var c = A;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, c, i);
                    }
                    var d = c.child;
                    if (d !== null) d.return = c, A = d;
                    else for (; A !== null; ) {
                      c = A;
                      var h = c.sibling, g = c.return;
                      if (Pd(c), c === a) {
                        A = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = g, A = h;
                        break;
                      }
                      A = g;
                    }
                  }
                }
                var w = i.alternate;
                if (w !== null) {
                  var y = w.child;
                  if (y !== null) {
                    w.child = null;
                    do {
                      var x = y.sibling;
                      y.sibling = null, y = x;
                    } while (y !== null);
                  }
                }
                A = i;
              }
            }
            if (i.subtreeFlags & 2064 && s !== null) s.return = i, A = s;
            else e: for (; A !== null; ) {
              if (i = A, i.flags & 2048) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Er(9, i, i.return);
              }
              var p = i.sibling;
              if (p !== null) {
                p.return = i.return, A = p;
                break e;
              }
              A = i.return;
            }
          }
          var f = e.current;
          for (A = f; A !== null; ) {
            s = A;
            var m = s.child;
            if (s.subtreeFlags & 2064 && m !== null) m.return = s, A = m;
            else e: for (s = f; A !== null; ) {
              if (l = A, l.flags & 2048) try {
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ci(9, l);
                }
              } catch (E) {
                te(l, l.return, E);
              }
              if (l === s) {
                A = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                S.return = l.return, A = S;
                break e;
              }
              A = l.return;
            }
          }
          if ($ = o, Zt(), st && typeof st.onPostCommitFiberRoot == "function") try {
            st.onPostCommitFiberRoot(mi, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        H = n, Ue.transition = t;
      }
    }
    return false;
  }
  function Wa(e, t, n) {
    t = Bn(n, t), t = hd(e, t, 1), e = $t(e, t, 1), t = ge(), e !== null && (Gr(e, 1, t), Pe(e, t));
  }
  function te(e, t, n) {
    if (e.tag === 3) Wa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = Bn(n, e), e = md(t, e, 1), t = $t(t, e, 1), e = ge(), t !== null && (Gr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Hy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ge(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (ce & n) === n && (se === 4 || se === 3 && (ce & 130023424) === ce && 500 > ne() - cu ? sn(e, 0) : au |= n), Pe(e, t);
  }
  function Id(e, t) {
    t === 0 && (e.mode & 1 ? (t = so, so <<= 1, !(so & 130023424) && (so = 4194304)) : t = 1);
    var n = ge();
    e = Et(e, t), e !== null && (Gr(e, t, n), Pe(e, n));
  }
  function Wy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Id(e, n);
  }
  function Qy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(R(314));
    }
    r !== null && r.delete(t), Id(e, n);
  }
  var zd;
  zd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ce.current) Ee = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Ee = false, My(e, t, n);
      Ee = !!(e.flags & 131072);
    }
    else Ee = false, X && t.flags & 1048576 && Uf(t, qo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Ao(e, t), e = t.pendingProps;
        var o = bn(t, me.current);
        Dn(t, n), o = ru(null, t, r, e, o, n);
        var i = ou();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (i = true, Go(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Zl(t), o.updater = Ei, t.stateNode = o, o._reactInternals = t, el(t, r, e, n), t = rl(null, t, r, true, i, n)) : (t.tag = 0, X && i && Wl(t), ye(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Ao(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Gy(r), e = Qe(r, e), o) {
            case 0:
              t = nl(null, t, r, e, n);
              break e;
            case 1:
              t = Ia(null, t, r, e, n);
              break e;
            case 11:
              t = Ma(null, t, r, e, n);
              break e;
            case 14:
              t = Da(null, t, r, Qe(r.type, e), n);
              break e;
          }
          throw Error(R(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), nl(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Ia(e, t, r, o, n);
      case 3:
        e: {
          if (wd(t), e === null) throw Error(R(387));
          r = t.pendingProps, i = t.memoizedState, o = i.element, Qf(e, t), Jo(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, i.isDehydrated) if (i = {
            element: r,
            isDehydrated: false,
            cache: s.cache,
            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
            transitions: s.transitions
          }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Bn(Error(R(423)), t), t = za(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Bn(Error(R(424)), t), t = za(e, t, r, n, o);
            break e;
          } else for (Ne = Ut(t.stateNode.containerInfo.firstChild), Ae = t, X = true, Ye = null, n = Hf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Un(), r === o) {
              t = Ct(e, t, n);
              break e;
            }
            ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Kf(t), e === null && Xs(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Qs(r, o) ? s = null : i !== null && Qs(r, i) && (t.flags |= 32), gd(e, t), ye(e, t, s, n), t.child;
      case 6:
        return e === null && Xs(t), null;
      case 13:
        return xd(e, t, n);
      case 4:
        return Jl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Ma(e, t, r, o, n);
      case 7:
        return ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Q(Xo, r._currentValue), r._currentValue = s, i !== null) if (Ze(i.value, s)) {
            if (i.children === o.children && !Ce.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var l = i.dependencies;
            if (l !== null) {
              s = i.child;
              for (var u = l.firstContext; u !== null; ) {
                if (u.context === r) {
                  if (i.tag === 1) {
                    u = wt(-1, n & -n), u.tag = 2;
                    var a = i.updateQueue;
                    if (a !== null) {
                      a = a.shared;
                      var c = a.pending;
                      c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
                    }
                  }
                  i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Zs(i.return, n, t), l.lanes |= n;
                  break;
                }
                u = u.next;
              }
            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (s = i.return, s === null) throw Error(R(341));
              s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Zs(s, n, t), s = i.sibling;
            } else s = i.child;
            if (s !== null) s.return = i;
            else for (s = i; s !== null; ) {
              if (s === t) {
                s = null;
                break;
              }
              if (i = s.sibling, i !== null) {
                i.return = s.return, s = i;
                break;
              }
              s = s.return;
            }
            i = s;
          }
          ye(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Dn(t, n), o = $e(o), r = r(o), t.flags |= 1, ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = Qe(r, t.pendingProps), o = Qe(r.type, o), Da(e, t, r, o, n);
      case 15:
        return yd(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Ao(e, t), t.tag = 1, ke(r) ? (e = true, Go(t)) : e = false, Dn(t, n), pd(t, r, o), el(t, r, o, n), rl(null, t, r, true, e, n);
      case 19:
        return Sd(e, t, n);
      case 22:
        return vd(e, t, n);
    }
    throw Error(R(156, t.tag));
  };
  function Fd(e, t) {
    return cf(e, t);
  }
  function Ky(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function be(e, t, n, r) {
    return new Ky(e, t, n, r);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gy(e) {
    if (typeof e == "function") return hu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ml) return 11;
      if (e === Dl) return 14;
    }
    return 2;
  }
  function Ht(e, t) {
    var n = e.alternate;
    return n === null ? (n = be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Do(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") hu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case wn:
        return ln(n.children, o, i, t);
      case Ll:
        s = 8, o |= 8;
        break;
      case ks:
        return e = be(12, n, t, o | 2), e.elementType = ks, e.lanes = i, e;
      case Ps:
        return e = be(13, n, t, o), e.elementType = Ps, e.lanes = i, e;
      case Ts:
        return e = be(19, n, t, o), e.elementType = Ts, e.lanes = i, e;
      case Qc:
        return Pi(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Hc:
            s = 10;
            break e;
          case Wc:
            s = 9;
            break e;
          case Ml:
            s = 11;
            break e;
          case Dl:
            s = 14;
            break e;
          case At:
            s = 16, r = null;
            break e;
        }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
    return t = be(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function ln(e, t, n, r) {
    return e = be(7, e, r, t), e.lanes = n, e;
  }
  function Pi(e, t, n, r) {
    return e = be(22, e, r, t), e.elementType = Qc, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function ps(e, t, n) {
    return e = be(6, e, null, t), e.lanes = n, e;
  }
  function hs(e, t, n) {
    return t = be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function Yy(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gi(0), this.expirationTimes = Gi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function mu(e, t, n, r, o, i, s, l, u) {
    return e = new Yy(e, t, n, l, u), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = be(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Zl(i), e;
  }
  function qy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: gn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function jd(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
      if (yn(e) !== e || e.tag !== 1) throw Error(R(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(R(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ke(n)) return jf(e, n, t);
    }
    return t;
  }
  function bd(e, t, n, r, o, i, s, l, u) {
    return e = mu(n, r, true, e, o, i, s, l, u), e.context = jd(null), n = e.current, r = ge(), o = Bt(n), i = wt(r, o), i.callback = t ?? null, $t(n, i, o), e.current.lanes = o, Gr(e, o, r), Pe(e, r), e;
  }
  function Ti(e, t, n, r) {
    var o = t.current, i = ge(), s = Bt(o);
    return n = jd(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(i, s), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(o, t, s), e !== null && (Xe(e, o, s, i), _o(e, o, s)), s;
  }
  function li(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function yu(e, t) {
    Qa(e, t), (e = e.alternate) && Qa(e, t);
  }
  function Xy() {
    return null;
  }
  var Ud = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function vu(e) {
    this._internalRoot = e;
  }
  Ri.prototype.render = vu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    Ti(e, t, null, null);
  };
  Ri.prototype.unmount = vu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      dn(function() {
        Ti(null, e, null, null);
      }), t[St] = null;
    }
  };
  function Ri(e) {
    this._internalRoot = e;
  }
  Ri.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vf();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++) ;
      Mt.splice(n, 0, e), n === 0 && wf(e);
    }
  };
  function gu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function _i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ka() {
  }
  function Zy(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var a = li(s);
          i.call(a);
        };
      }
      var s = bd(t, r, e, 0, null, false, false, "", Ka);
      return e._reactRootContainer = s, e[St] = s.current, Dr(e.nodeType === 8 ? e.parentNode : e), dn(), s;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = li(u);
        l.call(a);
      };
    }
    var u = mu(e, 0, false, null, null, false, false, "", Ka);
    return e._reactRootContainer = u, e[St] = u.current, Dr(e.nodeType === 8 ? e.parentNode : e), dn(function() {
      Ti(t, u, n, r);
    }), u;
  }
  function Oi(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof o == "function") {
        var l = o;
        o = function() {
          var u = li(s);
          l.call(u);
        };
      }
      Ti(t, s, e, o);
    } else s = Zy(n, t, e, o, r);
    return li(s);
  }
  mf = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = hr(t.pendingLanes);
          n !== 0 && (Fl(t, n | 1), Pe(t, ne()), !($ & 6) && (Hn = ne() + 500, Zt()));
        }
        break;
      case 13:
        dn(function() {
          var r = Et(e, 1);
          if (r !== null) {
            var o = ge();
            Xe(r, e, 1, o);
          }
        }), yu(e, 1);
    }
  };
  jl = function(e) {
    if (e.tag === 13) {
      var t = Et(e, 134217728);
      if (t !== null) {
        var n = ge();
        Xe(t, e, 134217728, n);
      }
      yu(e, 134217728);
    }
  };
  yf = function(e) {
    if (e.tag === 13) {
      var t = Bt(e), n = Et(e, t);
      if (n !== null) {
        var r = ge();
        Xe(n, e, t, r);
      }
      yu(e, t);
    }
  };
  vf = function() {
    return H;
  };
  gf = function(e, t) {
    var n = H;
    try {
      return H = e, t();
    } finally {
      H = n;
    }
  };
  zs = function(e, t, n) {
    switch (t) {
      case "input":
        if (Os(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = wi(r);
              if (!o) throw Error(R(90));
              Gc(r), Os(r, o);
            }
          }
        }
        break;
      case "textarea":
        qc(e, n);
        break;
      case "select":
        t = n.value, t != null && Nn(e, !!n.multiple, t, false);
    }
  };
  rf = fu;
  of = dn;
  var Jy = {
    usingClientEntryPoint: false,
    Events: [
      qr,
      Cn,
      wi,
      tf,
      nf,
      fu
    ]
  }, ar = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, ev = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = uf(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || Xy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!go.isDisabled && go.supportsFiber) try {
      mi = go.inject(ev), st = go;
    } catch {
    }
  }
  De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
  De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gu(t)) throw Error(R(200));
    return qy(e, t, null, n);
  };
  De.createRoot = function(e, t) {
    if (!gu(e)) throw Error(R(299));
    var n = false, r = "", o = Ud;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = mu(e, 1, false, null, null, n, false, r, o), e[St] = t.current, Dr(e.nodeType === 8 ? e.parentNode : e), new vu(t);
  };
  De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
    return e = uf(t), e = e === null ? null : e.stateNode, e;
  };
  De.flushSync = function(e) {
    return dn(e);
  };
  De.hydrate = function(e, t, n) {
    if (!_i(t)) throw Error(R(200));
    return Oi(null, e, t, true, n);
  };
  De.hydrateRoot = function(e, t, n) {
    if (!gu(e)) throw Error(R(405));
    var r = n != null && n.hydratedSources || null, o = false, i = "", s = Ud;
    if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = bd(t, null, e, 1, n ?? null, o, false, i, s), e[St] = t.current, Dr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      o
    ] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ri(t);
  };
  De.render = function(e, t, n) {
    if (!_i(t)) throw Error(R(200));
    return Oi(null, e, t, false, n);
  };
  De.unmountComponentAtNode = function(e) {
    if (!_i(e)) throw Error(R(40));
    return e._reactRootContainer ? (dn(function() {
      Oi(null, null, e, false, function() {
        e._reactRootContainer = null, e[St] = null;
      });
    }), true) : false;
  };
  De.unstable_batchedUpdates = fu;
  De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!_i(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0) throw Error(R(38));
    return Oi(e, t, n, false, r);
  };
  De.version = "18.3.1-next-f1338f8080-20240426";
  function $d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d);
    } catch (e) {
      console.error(e);
    }
  }
  $d(), Uc.exports = De;
  var Zr = Uc.exports;
  const tv = _c(Zr);
  var Vd, Ga = Zr;
  Vd = Ga.createRoot, Ga.hydrateRoot;
  let nv, rv, Ya;
  nv = "modulepreload";
  rv = function(e) {
    return "/" + e;
  };
  Ya = {};
  ft = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"), l = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.allSettled(n.map((u) => {
        if (u = rv(u), u in Ya) return;
        Ya[u] = true;
        const a = u.endsWith(".css"), c = a ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${c}`)) return;
        const d = document.createElement("link");
        if (d.rel = a ? "stylesheet" : nv, a || (d.as = "script"), d.crossOrigin = "", d.href = u, l && d.setAttribute("nonce", l), document.head.appendChild(d), a) return new Promise((h, g) => {
          d.addEventListener("load", h), d.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function i(s) {
      const l = new Event("vite:preloadError", {
        cancelable: true
      });
      if (l.payload = s, window.dispatchEvent(l), !l.defaultPrevented) throw s;
    }
    return o.then((s) => {
      for (const l of s || []) l.status === "rejected" && i(l.reason);
      return t().catch(i);
    });
  };
  function ov(e, t) {
    if (e instanceof RegExp) return {
      keys: false,
      pattern: e
    };
    var n, r, o, i, s = [], l = "", u = e.split("/");
    for (u[0] || u.shift(); o = u.shift(); ) n = o[0], n === "*" ? (s.push(n), l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1), i = o.indexOf(".", 1), s.push(o.substring(1, ~r ? r : ~i ? i : o.length)), l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)", ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i))) : l += "/" + o;
    return {
      keys: s,
      pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i")
    };
  }
  var Bd = {
    exports: {}
  }, Hd = {};
  var Wn = v;
  function iv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var sv = typeof Object.is == "function" ? Object.is : iv, lv = Wn.useState, uv = Wn.useEffect, av = Wn.useLayoutEffect, cv = Wn.useDebugValue;
  function fv(e, t) {
    var n = t(), r = lv({
      inst: {
        value: n,
        getSnapshot: t
      }
    }), o = r[0].inst, i = r[1];
    return av(function() {
      o.value = n, o.getSnapshot = t, ms(o) && i({
        inst: o
      });
    }, [
      e,
      n,
      t
    ]), uv(function() {
      return ms(o) && i({
        inst: o
      }), e(function() {
        ms(o) && i({
          inst: o
        });
      });
    }, [
      e
    ]), cv(n), n;
  }
  function ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !sv(e, n);
    } catch {
      return true;
    }
  }
  function dv(e, t) {
    return t();
  }
  var pv = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? dv : fv;
  Hd.useSyncExternalStore = Wn.useSyncExternalStore !== void 0 ? Wn.useSyncExternalStore : pv;
  Bd.exports = Hd;
  var hv = Bd.exports;
  const mv = Hh.useInsertionEffect, yv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vv = yv ? v.useLayoutEffect : v.useEffect, gv = mv || vv, Wd = (e) => {
    const t = v.useRef([
      e,
      (...n) => t[0](...n)
    ]).current;
    return gv(() => {
      t[0] = e;
    }), t[1];
  }, wv = "popstate", wu = "pushState", xu = "replaceState", xv = "hashchange", qa = [
    wv,
    wu,
    xu,
    xv
  ], Sv = (e) => {
    for (const t of qa) addEventListener(t, e);
    return () => {
      for (const t of qa) removeEventListener(t, e);
    };
  }, Qd = (e, t) => hv.useSyncExternalStore(Sv, e, t), Ev = () => location.search, Cv = ({ ssrSearch: e = "" } = {}) => Qd(Ev, () => e), Xa = () => location.pathname, kv = ({ ssrPath: e } = {}) => Qd(Xa, e ? () => e : Xa), Pv = (e, { replace: t = false, state: n = null } = {}) => history[t ? xu : wu](n, "", e), Tv = (e = {}) => [
    kv(e),
    Pv
  ], Za = Symbol.for("wouter_v3");
  if (typeof history < "u" && typeof window[Za] > "u") {
    for (const e of [
      wu,
      xu
    ]) {
      const t = history[e];
      history[e] = function() {
        const n = t.apply(this, arguments), r = new Event(e);
        return r.arguments = arguments, dispatchEvent(r), n;
      };
    }
    Object.defineProperty(window, Za, {
      value: true
    });
  }
  let Rv, Kd, _v, Ov, Ja, Gd, Yd, Xn, qd, Xd, Nv, Ni, Su, Av, ec, Lv, We, Jd, Mv;
  Rv = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/";
  Kd = (e = "") => e === "/" ? "" : e;
  _v = (e, t) => e[0] === "~" ? e.slice(1) : Kd(t) + e;
  Ov = (e = "", t) => Rv(Ja(Kd(e)), Ja(t));
  Ja = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  };
  Gd = {
    hook: Tv,
    searchHook: Cv,
    parser: ov,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e
  };
  Yd = v.createContext(Gd);
  Xn = () => v.useContext(Yd);
  qd = {};
  Xd = v.createContext(qd);
  Nv = () => v.useContext(Xd);
  Ni = (e) => {
    const [t, n] = e.hook(e);
    return [
      Ov(e.base, t),
      Wd((r, o) => n(_v(r, e.base), o))
    ];
  };
  Zd = () => Ni(Xn());
  Su = (e, t, n, r) => {
    const { pattern: o, keys: i } = t instanceof RegExp ? {
      keys: false,
      pattern: t
    } : e(t || "*", r), s = o.exec(n) || [], [l, ...u] = s;
    return l !== void 0 ? [
      true,
      (() => {
        const a = i !== false ? Object.fromEntries(i.map((d, h) => [
          d,
          u[h]
        ])) : s.groups;
        let c = {
          ...u
        };
        return a && Object.assign(c, a), c;
      })(),
      ...r ? [
        l
      ] : []
    ] : [
      false,
      null
    ];
  };
  Mx = (e) => Su(Xn().parser, e, Zd()[0]);
  Av = ({ children: e, ...t }) => {
    var _a3, _b2;
    const n = Xn(), r = t.hook ? Gd : n;
    let o = r;
    const [i, s] = ((_a3 = t.ssrPath) == null ? void 0 : _a3.split("?")) ?? [];
    s && (t.ssrSearch = s, t.ssrPath = i), t.hrefs = t.hrefs ?? ((_b2 = t.hook) == null ? void 0 : _b2.hrefs);
    let l = v.useRef({}), u = l.current, a = u;
    for (let c in r) {
      const d = c === "base" ? r[c] + (t[c] || "") : t[c] || r[c];
      u === a && d !== a[c] && (l.current = a = {
        ...a
      }), a[c] = d, d !== r[c] && (o = a);
    }
    return v.createElement(Yd.Provider, {
      value: o,
      children: e
    });
  };
  ec = ({ children: e, component: t }, n) => t ? v.createElement(t, {
    params: n
  }) : typeof e == "function" ? e(n) : e;
  Lv = (e) => {
    let t = v.useRef(qd), n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), t.current = n;
  };
  We = ({ path: e, nest: t, match: n, ...r }) => {
    const o = Xn(), [i] = Ni(o), [s, l, u] = n ?? Su(o.parser, e, i, t), a = Lv({
      ...Nv(),
      ...l
    });
    if (!s) return null;
    const c = u ? v.createElement(Av, {
      base: u
    }, ec(r, a)) : ec(r, a);
    return v.createElement(Xd.Provider, {
      value: a,
      children: c
    });
  };
  Dx = v.forwardRef((e, t) => {
    const n = Xn(), [r, o] = Ni(n), { to: i = "", href: s = i, onClick: l, asChild: u, children: a, className: c, replace: d, state: h, ...g } = e, w = Wd((x) => {
      x.ctrlKey || x.metaKey || x.altKey || x.shiftKey || x.button !== 0 || (l == null ? void 0 : l(x), x.defaultPrevented || (x.preventDefault(), o(s, e)));
    }), y = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
    return u && v.isValidElement(a) ? v.cloneElement(a, {
      onClick: w,
      href: y
    }) : v.createElement("a", {
      ...g,
      onClick: w,
      href: y,
      className: (c == null ? void 0 : c.call) ? c(r === s) : c,
      children: a,
      ref: t
    });
  });
  Jd = (e) => Array.isArray(e) ? e.flatMap((t) => Jd(t && t.type === v.Fragment ? t.props.children : t)) : [
    e
  ];
  Mv = ({ children: e, location: t }) => {
    const n = Xn(), [r] = Ni(n);
    for (const o of Jd(e)) {
      let i = 0;
      if (v.isValidElement(o) && (i = Su(n.parser, o.props.path, t || r, o.props.nest))[0]) return v.cloneElement(o, {
        match: i
      });
    }
    return null;
  };
  Ai = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
    }
    subscribe(e) {
      return this.listeners.add(e), this.onSubscribe(), () => {
        this.listeners.delete(e), this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  };
  Li = typeof window > "u" || "Deno" in globalThis;
  Ke = function() {
  };
  function Dv(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  Iv = function(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  };
  zv = function(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  };
  tc = function(e, t) {
    return typeof e == "function" ? e(t) : e;
  };
  Fv = function(e, t) {
    return typeof e == "function" ? e(t) : e;
  };
  function nc(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l } = e;
    if (s) {
      if (r) {
        if (t.queryHash !== Eu(s, t.options)) return false;
      } else if (!Hr(t.queryKey, s)) return false;
    }
    if (n !== "all") {
      const u = t.isActive();
      if (n === "active" && !u || n === "inactive" && u) return false;
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t));
  }
  function rc(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: i } = e;
    if (i) {
      if (!t.options.mutationKey) return false;
      if (n) {
        if (Br(t.options.mutationKey) !== Br(i)) return false;
      } else if (!Hr(t.options.mutationKey, i)) return false;
    }
    return !(r && t.state.status !== r || o && !o(t));
  }
  function Eu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Br)(e);
  }
  Br = function(e) {
    return JSON.stringify(e, (t, n) => ml(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n);
  };
  function Hr(e, t) {
    return e === t ? true : typeof e != typeof t ? false : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Hr(e[n], t[n])) : false;
  }
  function ep(e, t) {
    if (e === t) return e;
    const n = oc(e) && oc(t);
    if (n || ml(e) && ml(t)) {
      const r = n ? e : Object.keys(e), o = r.length, i = n ? t : Object.keys(t), s = i.length, l = n ? [] : {};
      let u = 0;
      for (let a = 0; a < s; a++) {
        const c = n ? a : i[a];
        (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (l[c] = void 0, u++) : (l[c] = ep(e[c], t[c]), l[c] === e[c] && e[c] !== void 0 && u++);
      }
      return o === s && u === o ? e : l;
    }
    return t;
  }
  Ix = function(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (e[n] !== t[n]) return false;
    return true;
  };
  function oc(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function ml(e) {
    if (!ic(e)) return false;
    const t = e.constructor;
    if (t === void 0) return true;
    const n = t.prototype;
    return !(!ic(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
  }
  function ic(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function jv(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  bv = function(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== false ? ep(e, t) : t;
  };
  function Uv(e, t, n = 0) {
    const r = [
      ...e,
      t
    ];
    return n && r.length > n ? r.slice(1) : r;
  }
  function $v(e, t, n = 0) {
    const r = [
      t,
      ...e
    ];
    return n && r.length > n ? r.slice(0, -1) : r;
  }
  var Cu = Symbol();
  function tp(e, t) {
    return !e.queryFn && (t == null ? void 0 : t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Cu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
  }
  let Vv, Bv, ui;
  Vv = (_a2 = class extends Ai {
    constructor() {
      super();
      __privateAdd(this, _e2);
      __privateAdd(this, _t2);
      __privateAdd(this, _n2);
      __privateSet(this, _n2, (e) => {
        if (!Li && window.addEventListener) {
          const t = () => e();
          return window.addEventListener("visibilitychange", t, false), () => {
            window.removeEventListener("visibilitychange", t);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _t2) || this.setEventListener(__privateGet(this, _n2));
    }
    onUnsubscribe() {
      var _a3;
      this.hasListeners() || ((_a3 = __privateGet(this, _t2)) == null ? void 0 : _a3.call(this), __privateSet(this, _t2, void 0));
    }
    setEventListener(e) {
      var _a3;
      __privateSet(this, _n2, e), (_a3 = __privateGet(this, _t2)) == null ? void 0 : _a3.call(this), __privateSet(this, _t2, e((t) => {
        typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
      }));
    }
    setFocused(e) {
      __privateGet(this, _e2) !== e && (__privateSet(this, _e2, e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      var _a3;
      return typeof __privateGet(this, _e2) == "boolean" ? __privateGet(this, _e2) : ((_a3 = globalThis.document) == null ? void 0 : _a3.visibilityState) !== "hidden";
    }
  }, _e2 = new WeakMap(), _t2 = new WeakMap(), _n2 = new WeakMap(), _a2);
  np = new Vv();
  Bv = (_b = class extends Ai {
    constructor() {
      super();
      __privateAdd(this, _e3, true);
      __privateAdd(this, _t3);
      __privateAdd(this, _n3);
      __privateSet(this, _n3, (e) => {
        if (!Li && window.addEventListener) {
          const t = () => e(true), n = () => e(false);
          return window.addEventListener("online", t, false), window.addEventListener("offline", n, false), () => {
            window.removeEventListener("online", t), window.removeEventListener("offline", n);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _t3) || this.setEventListener(__privateGet(this, _n3));
    }
    onUnsubscribe() {
      var _a3;
      this.hasListeners() || ((_a3 = __privateGet(this, _t3)) == null ? void 0 : _a3.call(this), __privateSet(this, _t3, void 0));
    }
    setEventListener(e) {
      var _a3;
      __privateSet(this, _n3, e), (_a3 = __privateGet(this, _t3)) == null ? void 0 : _a3.call(this), __privateSet(this, _t3, e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      __privateGet(this, _e3) !== e && (__privateSet(this, _e3, e), this.listeners.forEach((n) => {
        n(e);
      }));
    }
    isOnline() {
      return __privateGet(this, _e3);
    }
  }, _e3 = new WeakMap(), _t3 = new WeakMap(), _n3 = new WeakMap(), _b);
  ui = new Bv();
  Hv = function() {
    let e, t;
    const n = new Promise((o, i) => {
      e = o, t = i;
    });
    n.status = "pending", n.catch(() => {
    });
    function r(o) {
      Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return n.resolve = (o) => {
      r({
        status: "fulfilled",
        value: o
      }), e(o);
    }, n.reject = (o) => {
      r({
        status: "rejected",
        reason: o
      }), t(o);
    }, n;
  };
  function Wv(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function rp(e) {
    return (e ?? "online") === "online" ? ui.isOnline() : true;
  }
  var op = class extends Error {
    constructor(e) {
      super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
    }
  };
  function ys(e) {
    return e instanceof op;
  }
  function ip(e) {
    let t = false, n = 0, r = false, o;
    const i = Hv(), s = (y) => {
      var _a3;
      r || (h(new op(y)), (_a3 = e.abort) == null ? void 0 : _a3.call(e));
    }, l = () => {
      t = true;
    }, u = () => {
      t = false;
    }, a = () => np.isFocused() && (e.networkMode === "always" || ui.isOnline()) && e.canRun(), c = () => rp(e.networkMode) && e.canRun(), d = (y) => {
      var _a3;
      r || (r = true, (_a3 = e.onSuccess) == null ? void 0 : _a3.call(e, y), o == null ? void 0 : o(), i.resolve(y));
    }, h = (y) => {
      var _a3;
      r || (r = true, (_a3 = e.onError) == null ? void 0 : _a3.call(e, y), o == null ? void 0 : o(), i.reject(y));
    }, g = () => new Promise((y) => {
      var _a3;
      o = (x) => {
        (r || a()) && y(x);
      }, (_a3 = e.onPause) == null ? void 0 : _a3.call(e);
    }).then(() => {
      var _a3;
      o = void 0, r || ((_a3 = e.onContinue) == null ? void 0 : _a3.call(e));
    }), w = () => {
      if (r) return;
      let y;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        y = x ?? e.fn();
      } catch (p) {
        y = Promise.reject(p);
      }
      Promise.resolve(y).then(d).catch((p) => {
        var _a3;
        if (r) return;
        const f = e.retry ?? (Li ? 0 : 3), m = e.retryDelay ?? Wv, S = typeof m == "function" ? m(n, p) : m, E = f === true || typeof f == "number" && n < f || typeof f == "function" && f(n, p);
        if (t || !E) {
          h(p);
          return;
        }
        n++, (_a3 = e.onFail) == null ? void 0 : _a3.call(e, n, p), jv(S).then(() => a() ? void 0 : g()).then(() => {
          t ? h(p) : w();
        });
      });
    };
    return {
      promise: i,
      cancel: s,
      continue: () => (o == null ? void 0 : o(), i),
      cancelRetry: l,
      continueRetry: u,
      canStart: c,
      start: () => (c() ? w() : g().then(w), i)
    };
  }
  function Qv() {
    let e = [], t = 0, n = (l) => {
      l();
    }, r = (l) => {
      l();
    }, o = (l) => setTimeout(l, 0);
    const i = (l) => {
      t ? e.push(l) : o(() => {
        n(l);
      });
    }, s = () => {
      const l = e;
      e = [], l.length && o(() => {
        r(() => {
          l.forEach((u) => {
            n(u);
          });
        });
      });
    };
    return {
      batch: (l) => {
        let u;
        t++;
        try {
          u = l();
        } finally {
          t--, t || s();
        }
        return u;
      },
      batchCalls: (l) => (...u) => {
        i(() => {
          l(...u);
        });
      },
      schedule: i,
      setNotifyFunction: (l) => {
        n = l;
      },
      setBatchNotifyFunction: (l) => {
        r = l;
      },
      setScheduler: (l) => {
        o = l;
      }
    };
  }
  let sp, Kv;
  ve = Qv();
  sp = (_c2 = class {
    constructor() {
      __privateAdd(this, _e4);
    }
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(), Iv(this.gcTime) && __privateSet(this, _e4, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Li ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _e4) && (clearTimeout(__privateGet(this, _e4)), __privateSet(this, _e4, void 0));
    }
  }, _e4 = new WeakMap(), _c2);
  Kv = (_d2 = class extends sp {
    constructor(e) {
      super();
      __privateAdd(this, _Kv_instances);
      __privateAdd(this, _e5);
      __privateAdd(this, _t4);
      __privateAdd(this, _n4);
      __privateAdd(this, _r2);
      __privateAdd(this, _s2);
      __privateAdd(this, _i2);
      __privateSet(this, _i2, false), __privateSet(this, _s2, e.defaultOptions), this.setOptions(e.options), this.observers = [], __privateSet(this, _n4, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, __privateSet(this, _e5, Yv(this.options)), this.state = e.state ?? __privateGet(this, _e5), this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      var _a3;
      return (_a3 = __privateGet(this, _r2)) == null ? void 0 : _a3.promise;
    }
    setOptions(e) {
      this.options = {
        ...__privateGet(this, _s2),
        ...e
      }, this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _n4).remove(this);
    }
    setData(e, t) {
      const n = bv(this.state.data, e, this.options);
      return __privateMethod(this, _Kv_instances, o_fn).call(this, {
        data: n,
        type: "success",
        dataUpdatedAt: t == null ? void 0 : t.updatedAt,
        manual: t == null ? void 0 : t.manual
      }), n;
    }
    setState(e, t) {
      __privateMethod(this, _Kv_instances, o_fn).call(this, {
        type: "setState",
        state: e,
        setStateOptions: t
      });
    }
    cancel(e) {
      var _a3, _b2;
      const t = (_a3 = __privateGet(this, _r2)) == null ? void 0 : _a3.promise;
      return (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.cancel(e), t ? t.then(Ke).catch(Ke) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: true
      });
    }
    reset() {
      this.destroy(), this.setState(__privateGet(this, _e5));
    }
    isActive() {
      return this.observers.some((e) => Fv(e.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Cu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated ? true : this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0;
    }
    isStaleByTime(e = 0) {
      return this.state.isInvalidated || this.state.data === void 0 || !zv(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      var _a3, _b2;
      (_a3 = this.observers.find((t) => t.shouldFetchOnWindowFocus())) == null ? void 0 : _a3.refetch({
        cancelRefetch: false
      }), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.continue();
    }
    onOnline() {
      var _a3, _b2;
      (_a3 = this.observers.find((t) => t.shouldFetchOnReconnect())) == null ? void 0 : _a3.refetch({
        cancelRefetch: false
      }), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.continue();
    }
    addObserver(e) {
      this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), __privateGet(this, _n4).notify({
        type: "observerAdded",
        query: this,
        observer: e
      }));
    }
    removeObserver(e) {
      this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (__privateGet(this, _r2) && (__privateGet(this, _i2) ? __privateGet(this, _r2).cancel({
        revert: true
      }) : __privateGet(this, _r2).cancelRetry()), this.scheduleGc()), __privateGet(this, _n4).notify({
        type: "observerRemoved",
        query: this,
        observer: e
      }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || __privateMethod(this, _Kv_instances, o_fn).call(this, {
        type: "invalidate"
      });
    }
    fetch(e, t) {
      var _a3, _b2, _c3;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (t == null ? void 0 : t.cancelRefetch)) this.cancel({
          silent: true
        });
        else if (__privateGet(this, _r2)) return __privateGet(this, _r2).continueRetry(), __privateGet(this, _r2).promise;
      }
      if (e && this.setOptions(e), !this.options.queryFn) {
        const l = this.observers.find((u) => u.options.queryFn);
        l && this.setOptions(l.options);
      }
      const n = new AbortController(), r = (l) => {
        Object.defineProperty(l, "signal", {
          enumerable: true,
          get: () => (__privateSet(this, _i2, true), n.signal)
        });
      }, o = () => {
        const l = tp(this.options, t), u = {
          queryKey: this.queryKey,
          meta: this.meta
        };
        return r(u), __privateSet(this, _i2, false), this.options.persister ? this.options.persister(l, u, this) : l(u);
      }, i = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: o
      };
      r(i), (_a3 = this.options.behavior) == null ? void 0 : _a3.onFetch(i, this), __privateSet(this, _t4, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b2 = i.fetchOptions) == null ? void 0 : _b2.meta)) && __privateMethod(this, _Kv_instances, o_fn).call(this, {
        type: "fetch",
        meta: (_c3 = i.fetchOptions) == null ? void 0 : _c3.meta
      });
      const s = (l) => {
        var _a4, _b3, _c4, _d3;
        ys(l) && l.silent || __privateMethod(this, _Kv_instances, o_fn).call(this, {
          type: "error",
          error: l
        }), ys(l) || ((_b3 = (_a4 = __privateGet(this, _n4).config).onError) == null ? void 0 : _b3.call(_a4, l, this), (_d3 = (_c4 = __privateGet(this, _n4).config).onSettled) == null ? void 0 : _d3.call(_c4, this.state.data, l, this)), this.scheduleGc();
      };
      return __privateSet(this, _r2, ip({
        initialPromise: t == null ? void 0 : t.initialPromise,
        fn: i.fetchFn,
        abort: n.abort.bind(n),
        onSuccess: (l) => {
          var _a4, _b3, _c4, _d3;
          if (l === void 0) {
            s(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(l);
          } catch (u) {
            s(u);
            return;
          }
          (_b3 = (_a4 = __privateGet(this, _n4).config).onSuccess) == null ? void 0 : _b3.call(_a4, l, this), (_d3 = (_c4 = __privateGet(this, _n4).config).onSettled) == null ? void 0 : _d3.call(_c4, l, this.state.error, this), this.scheduleGc();
        },
        onError: s,
        onFail: (l, u) => {
          __privateMethod(this, _Kv_instances, o_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: u
          });
        },
        onPause: () => {
          __privateMethod(this, _Kv_instances, o_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _Kv_instances, o_fn).call(this, {
            type: "continue"
          });
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _r2).start();
    }
  }, _e5 = new WeakMap(), _t4 = new WeakMap(), _n4 = new WeakMap(), _r2 = new WeakMap(), _s2 = new WeakMap(), _i2 = new WeakMap(), _Kv_instances = new WeakSet(), o_fn = function(e) {
    const t = (n) => {
      switch (e.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            ...Gv(n.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const r = e.error;
          return ys(r) && r.revert && __privateGet(this, _t4) ? {
            ...__privateGet(this, _t4),
            fetchStatus: "idle"
          } : {
            ...n,
            error: r,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: true
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = t(this.state), ve.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate();
      }), __privateGet(this, _n4).notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }, _d2);
  Gv = function(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: rp(t.networkMode) ? "fetching" : "paused",
      ...e === void 0 && {
        error: null,
        status: "pending"
      }
    };
  };
  function Yv(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? r ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: n ? "success" : "pending",
      fetchStatus: "idle"
    };
  }
  var qv = (_e7 = class extends Ai {
    constructor(e = {}) {
      super();
      __privateAdd(this, _e6);
      this.config = e, __privateSet(this, _e6, /* @__PURE__ */ new Map());
    }
    build(e, t, n) {
      const r = t.queryKey, o = t.queryHash ?? Eu(r, t);
      let i = this.get(o);
      return i || (i = new Kv({
        cache: this,
        queryKey: r,
        queryHash: o,
        options: e.defaultQueryOptions(t),
        state: n,
        defaultOptions: e.getQueryDefaults(r)
      }), this.add(i)), i;
    }
    add(e) {
      __privateGet(this, _e6).has(e.queryHash) || (__privateGet(this, _e6).set(e.queryHash, e), this.notify({
        type: "added",
        query: e
      }));
    }
    remove(e) {
      const t = __privateGet(this, _e6).get(e.queryHash);
      t && (e.destroy(), t === e && __privateGet(this, _e6).delete(e.queryHash), this.notify({
        type: "removed",
        query: e
      }));
    }
    clear() {
      ve.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return __privateGet(this, _e6).get(e);
    }
    getAll() {
      return [
        ...__privateGet(this, _e6).values()
      ];
    }
    find(e) {
      const t = {
        exact: true,
        ...e
      };
      return this.getAll().find((n) => nc(t, n));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((n) => nc(e, n)) : t;
    }
    notify(e) {
      ve.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      ve.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      ve.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  }, _e6 = new WeakMap(), _e7), Xv = (_f2 = class extends sp {
    constructor(e) {
      super();
      __privateAdd(this, _Xv_instances);
      __privateAdd(this, _e8);
      __privateAdd(this, _t5);
      __privateAdd(this, _n5);
      this.mutationId = e.mutationId, __privateSet(this, _t5, e.mutationCache), __privateSet(this, _e8, []), this.state = e.state || Zv(), this.setOptions(e.options), this.scheduleGc();
    }
    setOptions(e) {
      this.options = e, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(e) {
      __privateGet(this, _e8).includes(e) || (__privateGet(this, _e8).push(e), this.clearGcTimeout(), __privateGet(this, _t5).notify({
        type: "observerAdded",
        mutation: this,
        observer: e
      }));
    }
    removeObserver(e) {
      __privateSet(this, _e8, __privateGet(this, _e8).filter((t) => t !== e)), this.scheduleGc(), __privateGet(this, _t5).notify({
        type: "observerRemoved",
        mutation: this,
        observer: e
      });
    }
    optionalRemove() {
      __privateGet(this, _e8).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _t5).remove(this));
    }
    continue() {
      var _a3;
      return ((_a3 = __privateGet(this, _n5)) == null ? void 0 : _a3.continue()) ?? this.execute(this.state.variables);
    }
    async execute(e) {
      var _a3, _b2, _c3, _d3, _e11, _f3, _g3, _h3, _i4, _j, _k, _l3, _m2, _n7, _o3, _p2, _q, _r4, _s4, _t8;
      __privateSet(this, _n5, ip({
        fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
        onFail: (r, o) => {
          __privateMethod(this, _Xv_instances, r_fn).call(this, {
            type: "failed",
            failureCount: r,
            error: o
          });
        },
        onPause: () => {
          __privateMethod(this, _Xv_instances, r_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _Xv_instances, r_fn).call(this, {
            type: "continue"
          });
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => __privateGet(this, _t5).canRun(this)
      }));
      const t = this.state.status === "pending", n = !__privateGet(this, _n5).canStart();
      try {
        if (!t) {
          __privateMethod(this, _Xv_instances, r_fn).call(this, {
            type: "pending",
            variables: e,
            isPaused: n
          }), await ((_b2 = (_a3 = __privateGet(this, _t5).config).onMutate) == null ? void 0 : _b2.call(_a3, e, this));
          const o = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, e));
          o !== this.state.context && __privateMethod(this, _Xv_instances, r_fn).call(this, {
            type: "pending",
            context: o,
            variables: e,
            isPaused: n
          });
        }
        const r = await __privateGet(this, _n5).start();
        return await ((_f3 = (_e11 = __privateGet(this, _t5).config).onSuccess) == null ? void 0 : _f3.call(_e11, r, e, this.state.context, this)), await ((_h3 = (_g3 = this.options).onSuccess) == null ? void 0 : _h3.call(_g3, r, e, this.state.context)), await ((_j = (_i4 = __privateGet(this, _t5).config).onSettled) == null ? void 0 : _j.call(_i4, r, null, this.state.variables, this.state.context, this)), await ((_l3 = (_k = this.options).onSettled) == null ? void 0 : _l3.call(_k, r, null, e, this.state.context)), __privateMethod(this, _Xv_instances, r_fn).call(this, {
          type: "success",
          data: r
        }), r;
      } catch (r) {
        try {
          throw await ((_n7 = (_m2 = __privateGet(this, _t5).config).onError) == null ? void 0 : _n7.call(_m2, r, e, this.state.context, this)), await ((_p2 = (_o3 = this.options).onError) == null ? void 0 : _p2.call(_o3, r, e, this.state.context)), await ((_r4 = (_q = __privateGet(this, _t5).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, r, this.state.variables, this.state.context, this)), await ((_t8 = (_s4 = this.options).onSettled) == null ? void 0 : _t8.call(_s4, void 0, r, e, this.state.context)), r;
        } finally {
          __privateMethod(this, _Xv_instances, r_fn).call(this, {
            type: "error",
            error: r
          });
        }
      } finally {
        __privateGet(this, _t5).runNext(this);
      }
    }
  }, _e8 = new WeakMap(), _t5 = new WeakMap(), _n5 = new WeakMap(), _Xv_instances = new WeakSet(), r_fn = function(e) {
    const t = (n) => {
      switch (e.type) {
        case "failed":
          return {
            ...n,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...n,
            isPaused: true
          };
        case "continue":
          return {
            ...n,
            isPaused: false
          };
        case "pending":
          return {
            ...n,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...n,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: e.error,
            failureCount: n.failureCount + 1,
            failureReason: e.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = t(this.state), ve.batch(() => {
      __privateGet(this, _e8).forEach((n) => {
        n.onMutationUpdate(e);
      }), __privateGet(this, _t5).notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }, _f2);
  Zv = function() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  };
  var Jv = (_g2 = class extends Ai {
    constructor(e = {}) {
      super();
      __privateAdd(this, _e9);
      __privateAdd(this, _t6);
      this.config = e, __privateSet(this, _e9, /* @__PURE__ */ new Map()), __privateSet(this, _t6, Date.now());
    }
    build(e, t, n) {
      const r = new Xv({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _t6)._,
        options: e.defaultMutationOptions(t),
        state: n
      });
      return this.add(r), r;
    }
    add(e) {
      const t = wo(e), n = __privateGet(this, _e9).get(t) ?? [];
      n.push(e), __privateGet(this, _e9).set(t, n), this.notify({
        type: "added",
        mutation: e
      });
    }
    remove(e) {
      var _a3;
      const t = wo(e);
      if (__privateGet(this, _e9).has(t)) {
        const n = (_a3 = __privateGet(this, _e9).get(t)) == null ? void 0 : _a3.filter((r) => r !== e);
        n && (n.length === 0 ? __privateGet(this, _e9).delete(t) : __privateGet(this, _e9).set(t, n));
      }
      this.notify({
        type: "removed",
        mutation: e
      });
    }
    canRun(e) {
      var _a3;
      const t = (_a3 = __privateGet(this, _e9).get(wo(e))) == null ? void 0 : _a3.find((n) => n.state.status === "pending");
      return !t || t === e;
    }
    runNext(e) {
      var _a3, _b2;
      return ((_b2 = (_a3 = __privateGet(this, _e9).get(wo(e))) == null ? void 0 : _a3.find((n) => n !== e && n.state.isPaused)) == null ? void 0 : _b2.continue()) ?? Promise.resolve();
    }
    clear() {
      ve.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    getAll() {
      return [
        ...__privateGet(this, _e9).values()
      ].flat();
    }
    find(e) {
      const t = {
        exact: true,
        ...e
      };
      return this.getAll().find((n) => rc(t, n));
    }
    findAll(e = {}) {
      return this.getAll().filter((t) => rc(e, t));
    }
    notify(e) {
      ve.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    resumePausedMutations() {
      const e = this.getAll().filter((t) => t.state.isPaused);
      return ve.batch(() => Promise.all(e.map((t) => t.continue().catch(Ke))));
    }
  }, _e9 = new WeakMap(), _t6 = new WeakMap(), _g2);
  function wo(e) {
    var _a3;
    return ((_a3 = e.options.scope) == null ? void 0 : _a3.id) ?? String(e.mutationId);
  }
  function sc(e) {
    return {
      onFetch: (t, n) => {
        var _a3, _b2, _c3, _d3, _e11;
        const r = t.options, o = (_c3 = (_b2 = (_a3 = t.fetchOptions) == null ? void 0 : _a3.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c3.direction, i = ((_d3 = t.state.data) == null ? void 0 : _d3.pages) || [], s = ((_e11 = t.state.data) == null ? void 0 : _e11.pageParams) || [];
        let l = {
          pages: [],
          pageParams: []
        }, u = 0;
        const a = async () => {
          let c = false;
          const d = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: true,
              get: () => (t.signal.aborted ? c = true : t.signal.addEventListener("abort", () => {
                c = true;
              }), t.signal)
            });
          }, h = tp(t.options, t.fetchOptions), g = async (w, y, x) => {
            if (c) return Promise.reject();
            if (y == null && w.pages.length) return Promise.resolve(w);
            const p = {
              queryKey: t.queryKey,
              pageParam: y,
              direction: x ? "backward" : "forward",
              meta: t.options.meta
            };
            d(p);
            const f = await h(p), { maxPages: m } = t.options, S = x ? $v : Uv;
            return {
              pages: S(w.pages, f, m),
              pageParams: S(w.pageParams, y, m)
            };
          };
          if (o && i.length) {
            const w = o === "backward", y = w ? eg : lc, x = {
              pages: i,
              pageParams: s
            }, p = y(r, x);
            l = await g(x, p, w);
          } else {
            const w = e ?? i.length;
            do {
              const y = u === 0 ? s[0] ?? r.initialPageParam : lc(r, l);
              if (u > 0 && y == null) break;
              l = await g(l, y), u++;
            } while (u < w);
          }
          return l;
        };
        t.options.persister ? t.fetchFn = () => {
          var _a4, _b3;
          return (_b3 = (_a4 = t.options).persister) == null ? void 0 : _b3.call(_a4, a, {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          }, n);
        } : t.fetchFn = a;
      }
    };
  }
  function lc(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
  }
  function eg(e, { pages: t, pageParams: n }) {
    var _a3;
    return t.length > 0 ? (_a3 = e.getPreviousPageParam) == null ? void 0 : _a3.call(e, t[0], t, n[0], n) : void 0;
  }
  let tg, lp, ng;
  tg = (_h2 = class {
    constructor(e = {}) {
      __privateAdd(this, _e10);
      __privateAdd(this, _t7);
      __privateAdd(this, _n6);
      __privateAdd(this, _r3);
      __privateAdd(this, _s3);
      __privateAdd(this, _i3);
      __privateAdd(this, _o2);
      __privateAdd(this, _l2);
      __privateSet(this, _e10, e.queryCache || new qv()), __privateSet(this, _t7, e.mutationCache || new Jv()), __privateSet(this, _n6, e.defaultOptions || {}), __privateSet(this, _r3, /* @__PURE__ */ new Map()), __privateSet(this, _s3, /* @__PURE__ */ new Map()), __privateSet(this, _i3, 0);
    }
    mount() {
      __privateWrapper(this, _i3)._++, __privateGet(this, _i3) === 1 && (__privateSet(this, _o2, np.subscribe(async (e) => {
        e && (await this.resumePausedMutations(), __privateGet(this, _e10).onFocus());
      })), __privateSet(this, _l2, ui.subscribe(async (e) => {
        e && (await this.resumePausedMutations(), __privateGet(this, _e10).onOnline());
      })));
    }
    unmount() {
      var _a3, _b2;
      __privateWrapper(this, _i3)._--, __privateGet(this, _i3) === 0 && ((_a3 = __privateGet(this, _o2)) == null ? void 0 : _a3.call(this), __privateSet(this, _o2, void 0), (_b2 = __privateGet(this, _l2)) == null ? void 0 : _b2.call(this), __privateSet(this, _l2, void 0));
    }
    isFetching(e) {
      return __privateGet(this, _e10).findAll({
        ...e,
        fetchStatus: "fetching"
      }).length;
    }
    isMutating(e) {
      return __privateGet(this, _t7).findAll({
        ...e,
        status: "pending"
      }).length;
    }
    getQueryData(e) {
      var _a3;
      const t = this.defaultQueryOptions({
        queryKey: e
      });
      return (_a3 = __privateGet(this, _e10).get(t.queryHash)) == null ? void 0 : _a3.state.data;
    }
    ensureQueryData(e) {
      const t = this.getQueryData(e.queryKey);
      if (t === void 0) return this.fetchQuery(e);
      {
        const n = this.defaultQueryOptions(e), r = __privateGet(this, _e10).build(this, n);
        return e.revalidateIfStale && r.isStaleByTime(tc(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
      }
    }
    getQueriesData(e) {
      return __privateGet(this, _e10).findAll(e).map(({ queryKey: t, state: n }) => {
        const r = n.data;
        return [
          t,
          r
        ];
      });
    }
    setQueryData(e, t, n) {
      var _a3;
      const r = this.defaultQueryOptions({
        queryKey: e
      }), i = (_a3 = __privateGet(this, _e10).get(r.queryHash)) == null ? void 0 : _a3.state.data, s = Dv(t, i);
      if (s !== void 0) return __privateGet(this, _e10).build(this, r).setData(s, {
        ...n,
        manual: true
      });
    }
    setQueriesData(e, t, n) {
      return ve.batch(() => __privateGet(this, _e10).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ]));
    }
    getQueryState(e) {
      var _a3;
      const t = this.defaultQueryOptions({
        queryKey: e
      });
      return (_a3 = __privateGet(this, _e10).get(t.queryHash)) == null ? void 0 : _a3.state;
    }
    removeQueries(e) {
      const t = __privateGet(this, _e10);
      ve.batch(() => {
        t.findAll(e).forEach((n) => {
          t.remove(n);
        });
      });
    }
    resetQueries(e, t) {
      const n = __privateGet(this, _e10), r = {
        type: "active",
        ...e
      };
      return ve.batch(() => (n.findAll(e).forEach((o) => {
        o.reset();
      }), this.refetchQueries(r, t)));
    }
    cancelQueries(e = {}, t = {}) {
      const n = {
        revert: true,
        ...t
      }, r = ve.batch(() => __privateGet(this, _e10).findAll(e).map((o) => o.cancel(n)));
      return Promise.all(r).then(Ke).catch(Ke);
    }
    invalidateQueries(e = {}, t = {}) {
      return ve.batch(() => {
        if (__privateGet(this, _e10).findAll(e).forEach((r) => {
          r.invalidate();
        }), e.refetchType === "none") return Promise.resolve();
        const n = {
          ...e,
          type: e.refetchType ?? e.type ?? "active"
        };
        return this.refetchQueries(n, t);
      });
    }
    refetchQueries(e = {}, t) {
      const n = {
        ...t,
        cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? true
      }, r = ve.batch(() => __privateGet(this, _e10).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let i = o.fetch(void 0, n);
        return n.throwOnError || (i = i.catch(Ke)), o.state.fetchStatus === "paused" ? Promise.resolve() : i;
      }));
      return Promise.all(r).then(Ke);
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = false);
      const n = __privateGet(this, _e10).build(this, t);
      return n.isStaleByTime(tc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Ke).catch(Ke);
    }
    fetchInfiniteQuery(e) {
      return e.behavior = sc(e.pages), this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Ke).catch(Ke);
    }
    ensureInfiniteQueryData(e) {
      return e.behavior = sc(e.pages), this.ensureQueryData(e);
    }
    resumePausedMutations() {
      return ui.isOnline() ? __privateGet(this, _t7).resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return __privateGet(this, _e10);
    }
    getMutationCache() {
      return __privateGet(this, _t7);
    }
    getDefaultOptions() {
      return __privateGet(this, _n6);
    }
    setDefaultOptions(e) {
      __privateSet(this, _n6, e);
    }
    setQueryDefaults(e, t) {
      __privateGet(this, _r3).set(Br(e), {
        queryKey: e,
        defaultOptions: t
      });
    }
    getQueryDefaults(e) {
      const t = [
        ...__privateGet(this, _r3).values()
      ];
      let n = {};
      return t.forEach((r) => {
        Hr(e, r.queryKey) && (n = {
          ...n,
          ...r.defaultOptions
        });
      }), n;
    }
    setMutationDefaults(e, t) {
      __privateGet(this, _s3).set(Br(e), {
        mutationKey: e,
        defaultOptions: t
      });
    }
    getMutationDefaults(e) {
      const t = [
        ...__privateGet(this, _s3).values()
      ];
      let n = {};
      return t.forEach((r) => {
        Hr(e, r.mutationKey) && (n = {
          ...n,
          ...r.defaultOptions
        });
      }), n;
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = {
        ...__privateGet(this, _n6).queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: true
      };
      return t.queryHash || (t.queryHash = Eu(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== true && t.queryFn === Cu && (t.enabled = false), t;
    }
    defaultMutationOptions(e) {
      return (e == null ? void 0 : e._defaulted) ? e : {
        ...__privateGet(this, _n6).mutations,
        ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
        ...e,
        _defaulted: true
      };
    }
    clear() {
      __privateGet(this, _e10).clear(), __privateGet(this, _t7).clear();
    }
  }, _e10 = new WeakMap(), _t7 = new WeakMap(), _n6 = new WeakMap(), _r3 = new WeakMap(), _s3 = new WeakMap(), _i3 = new WeakMap(), _o2 = new WeakMap(), _l2 = new WeakMap(), _h2);
  lp = v.createContext(void 0);
  zx = (e) => {
    const t = v.useContext(lp);
    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  };
  ng = ({ client: e, children: t }) => (v.useEffect(() => (e.mount(), () => {
    e.unmount();
  }), [
    e
  ]), k.jsx(lp.Provider, {
    value: e,
    children: t
  }));
  async function rg(e) {
    if (!e.ok) {
      const t = await e.text() || e.statusText;
      throw new Error(`${e.status}: ${t}`);
    }
  }
  const og = ({ on401: e }) => async ({ queryKey: t }) => {
    const n = await fetch(t.join("/"), {
      credentials: "include"
    });
    return await rg(n), await n.json();
  }, ig = new tg({
    defaultOptions: {
      queries: {
        queryFn: og({
          on401: "throw"
        }),
        refetchInterval: false,
        refetchOnWindowFocus: false,
        staleTime: 1 / 0,
        retry: false
      },
      mutations: {
        retry: false
      }
    }
  }), sg = 1, lg = 1e6;
  let vs = 0;
  function ug() {
    return vs = (vs + 1) % Number.MAX_SAFE_INTEGER, vs.toString();
  }
  const gs = /* @__PURE__ */ new Map(), uc = (e) => {
    if (gs.has(e)) return;
    const t = setTimeout(() => {
      gs.delete(e), Pr({
        type: "REMOVE_TOAST",
        toastId: e
      });
    }, lg);
    gs.set(e, t);
  }, ag = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e,
          toasts: [
            t.toast,
            ...e.toasts
          ].slice(0, sg)
        };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return n ? uc(n) : e.toasts.forEach((r) => {
          uc(r.id);
        }), {
          ...e,
          toasts: e.toasts.map((r) => r.id === n || n === void 0 ? {
            ...r,
            open: false
          } : r)
        };
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter((n) => n.id !== t.toastId)
        };
    }
  }, Io = [];
  let zo = {
    toasts: []
  };
  function Pr(e) {
    zo = ag(zo, e), Io.forEach((t) => {
      t(zo);
    });
  }
  function cg({ ...e }) {
    const t = ug(), n = (o) => Pr({
      type: "UPDATE_TOAST",
      toast: {
        ...o,
        id: t
      }
    }), r = () => Pr({
      type: "DISMISS_TOAST",
      toastId: t
    });
    return Pr({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: true,
        onOpenChange: (o) => {
          o || r();
        }
      }
    }), {
      id: t,
      dismiss: r,
      update: n
    };
  }
  fg = function() {
    const [e, t] = v.useState(zo);
    return v.useEffect(() => (Io.push(t), () => {
      const n = Io.indexOf(t);
      n > -1 && Io.splice(n, 1);
    }), [
      e
    ]), {
      ...e,
      toast: cg,
      dismiss: (n) => Pr({
        type: "DISMISS_TOAST",
        toastId: n
      })
    };
  };
  ie = function(e, t, { checkForDefaultPrevented: n = true } = {}) {
    return function(o) {
      if (e == null ? void 0 : e(o), n === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
    };
  };
  function ac(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
  }
  function up(...e) {
    return (t) => {
      let n = false;
      const r = e.map((o) => {
        const i = ac(o, t);
        return !n && typeof i == "function" && (n = true), i;
      });
      if (n) return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : ac(e[o], null);
        }
      };
    };
  }
  Je = function(...e) {
    return v.useCallback(up(...e), e);
  };
  Mi = function(e, t = []) {
    let n = [];
    function r(i, s) {
      const l = v.createContext(s), u = n.length;
      n = [
        ...n,
        s
      ];
      const a = (d) => {
        var _a3;
        const { scope: h, children: g, ...w } = d, y = ((_a3 = h == null ? void 0 : h[e]) == null ? void 0 : _a3[u]) || l, x = v.useMemo(() => w, Object.values(w));
        return k.jsx(y.Provider, {
          value: x,
          children: g
        });
      };
      a.displayName = i + "Provider";
      function c(d, h) {
        var _a3;
        const g = ((_a3 = h == null ? void 0 : h[e]) == null ? void 0 : _a3[u]) || l, w = v.useContext(g);
        if (w) return w;
        if (s !== void 0) return s;
        throw new Error(`\`${d}\` must be used within \`${i}\``);
      }
      return [
        a,
        c
      ];
    }
    const o = () => {
      const i = n.map((s) => v.createContext(s));
      return function(l) {
        const u = (l == null ? void 0 : l[e]) || i;
        return v.useMemo(() => ({
          [`__scope${e}`]: {
            ...l,
            [e]: u
          }
        }), [
          l,
          u
        ]);
      };
    };
    return o.scopeName = e, [
      r,
      dg(o, ...t)
    ];
  };
  function dg(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const r = e.map((o) => ({
        useScope: o(),
        scopeName: o.scopeName
      }));
      return function(i) {
        const s = r.reduce((l, { useScope: u, scopeName: a }) => {
          const d = u(i)[`__scope${a}`];
          return {
            ...l,
            ...d
          };
        }, {});
        return v.useMemo(() => ({
          [`__scope${t.scopeName}`]: s
        }), [
          s
        ]);
      };
    };
    return n.scopeName = t.scopeName, n;
  }
  function ai(e) {
    const t = hg(e), n = v.forwardRef((r, o) => {
      const { children: i, ...s } = r, l = v.Children.toArray(i), u = l.find(yg);
      if (u) {
        const a = u.props.children, c = l.map((d) => d === u ? v.Children.count(a) > 1 ? v.Children.only(null) : v.isValidElement(a) ? a.props.children : null : d);
        return k.jsx(t, {
          ...s,
          ref: o,
          children: v.isValidElement(a) ? v.cloneElement(a, void 0, c) : null
        });
      }
      return k.jsx(t, {
        ...s,
        ref: o,
        children: i
      });
    });
    return n.displayName = `${e}.Slot`, n;
  }
  var pg = ai("Slot");
  function hg(e) {
    const t = v.forwardRef((n, r) => {
      const { children: o, ...i } = n;
      if (v.isValidElement(o)) {
        const s = gg(o), l = vg(i, o.props);
        return o.type !== v.Fragment && (l.ref = r ? up(r, s) : s), v.cloneElement(o, l);
      }
      return v.Children.count(o) > 1 ? v.Children.only(null) : null;
    });
    return t.displayName = `${e}.SlotClone`, t;
  }
  var ap = Symbol("radix.slottable");
  function mg(e) {
    const t = ({ children: n }) => k.jsx(k.Fragment, {
      children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = ap, t;
  }
  function yg(e) {
    return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ap;
  }
  function vg(e, t) {
    const n = {
      ...t
    };
    for (const r in t) {
      const o = e[r], i = t[r];
      /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
        i(...l), o(...l);
      } : o && (n[r] = o) : r === "style" ? n[r] = {
        ...o,
        ...i
      } : r === "className" && (n[r] = [
        o,
        i
      ].filter(Boolean).join(" "));
    }
    return {
      ...e,
      ...n
    };
  }
  function gg(e) {
    var _a3, _b2;
    let t = (_a3 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a3.get, n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (_b2 = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b2.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
  }
  wg = function(e) {
    const t = e + "CollectionProvider", [n, r] = Mi(t), [o, i] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), s = (y) => {
      const { scope: x, children: p } = y, f = Nt.useRef(null), m = Nt.useRef(/* @__PURE__ */ new Map()).current;
      return k.jsx(o, {
        scope: x,
        itemMap: m,
        collectionRef: f,
        children: p
      });
    };
    s.displayName = t;
    const l = e + "CollectionSlot", u = ai(l), a = Nt.forwardRef((y, x) => {
      const { scope: p, children: f } = y, m = i(l, p), S = Je(x, m.collectionRef);
      return k.jsx(u, {
        ref: S,
        children: f
      });
    });
    a.displayName = l;
    const c = e + "CollectionItemSlot", d = "data-radix-collection-item", h = ai(c), g = Nt.forwardRef((y, x) => {
      const { scope: p, children: f, ...m } = y, S = Nt.useRef(null), E = Je(x, S), P = i(c, p);
      return Nt.useEffect(() => (P.itemMap.set(S, {
        ref: S,
        ...m
      }), () => void P.itemMap.delete(S))), k.jsx(h, {
        [d]: "",
        ref: E,
        children: f
      });
    });
    g.displayName = c;
    function w(y) {
      const x = i(e + "CollectionConsumer", y);
      return Nt.useCallback(() => {
        const f = x.collectionRef.current;
        if (!f) return [];
        const m = Array.from(f.querySelectorAll(`[${d}]`));
        return Array.from(x.itemMap.values()).sort((P, C) => m.indexOf(P.ref.current) - m.indexOf(C.ref.current));
      }, [
        x.collectionRef,
        x.itemMap
      ]);
    }
    return [
      {
        Provider: s,
        Slot: a,
        ItemSlot: g
      },
      w,
      r
    ];
  };
  let xg;
  xg = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ];
  Te = xg.reduce((e, t) => {
    const n = ai(`Primitive.${t}`), r = v.forwardRef((o, i) => {
      const { asChild: s, ...l } = o, u = s ? n : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), k.jsx(u, {
        ...l,
        ref: i
      });
    });
    return r.displayName = `Primitive.${t}`, {
      ...e,
      [t]: r
    };
  }, {});
  function cp(e, t) {
    e && Zr.flushSync(() => e.dispatchEvent(t));
  }
  function at(e) {
    const t = v.useRef(e);
    return v.useEffect(() => {
      t.current = e;
    }), v.useMemo(() => (...n) => {
      var _a3;
      return (_a3 = t.current) == null ? void 0 : _a3.call(t, ...n);
    }, []);
  }
  function Sg(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = at(e);
    v.useEffect(() => {
      const r = (o) => {
        o.key === "Escape" && n(o);
      };
      return t.addEventListener("keydown", r, {
        capture: true
      }), () => t.removeEventListener("keydown", r, {
        capture: true
      });
    }, [
      n,
      t
    ]);
  }
  var Eg = "DismissableLayer", yl = "dismissableLayer.update", Cg = "dismissableLayer.pointerDownOutside", kg = "dismissableLayer.focusOutside", cc, fp = v.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), ku = v.forwardRef((e, t) => {
    const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...u } = e, a = v.useContext(fp), [c, d] = v.useState(null), h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = v.useState({}), w = Je(t, (C) => d(C)), y = Array.from(a.layers), [x] = [
      ...a.layersWithOutsidePointerEventsDisabled
    ].slice(-1), p = y.indexOf(x), f = c ? y.indexOf(c) : -1, m = a.layersWithOutsidePointerEventsDisabled.size > 0, S = f >= p, E = Tg((C) => {
      const _ = C.target, I = [
        ...a.branches
      ].some((N) => N.contains(_));
      !S || I || (o == null ? void 0 : o(C), s == null ? void 0 : s(C), C.defaultPrevented || (l == null ? void 0 : l()));
    }, h), P = Rg((C) => {
      const _ = C.target;
      [
        ...a.branches
      ].some((N) => N.contains(_)) || (i == null ? void 0 : i(C), s == null ? void 0 : s(C), C.defaultPrevented || (l == null ? void 0 : l()));
    }, h);
    return Sg((C) => {
      f === a.layers.size - 1 && (r == null ? void 0 : r(C), !C.defaultPrevented && l && (C.preventDefault(), l()));
    }, h), v.useEffect(() => {
      if (c) return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (cc = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(c)), a.layers.add(c), fc(), () => {
        n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = cc);
      };
    }, [
      c,
      h,
      n,
      a
    ]), v.useEffect(() => () => {
      c && (a.layers.delete(c), a.layersWithOutsidePointerEventsDisabled.delete(c), fc());
    }, [
      c,
      a
    ]), v.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(yl, C), () => document.removeEventListener(yl, C);
    }, []), k.jsx(Te.div, {
      ...u,
      ref: w,
      style: {
        pointerEvents: m ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: ie(e.onFocusCapture, P.onFocusCapture),
      onBlurCapture: ie(e.onBlurCapture, P.onBlurCapture),
      onPointerDownCapture: ie(e.onPointerDownCapture, E.onPointerDownCapture)
    });
  });
  ku.displayName = Eg;
  var Pg = "DismissableLayerBranch", dp = v.forwardRef((e, t) => {
    const n = v.useContext(fp), r = v.useRef(null), o = Je(t, r);
    return v.useEffect(() => {
      const i = r.current;
      if (i) return n.branches.add(i), () => {
        n.branches.delete(i);
      };
    }, [
      n.branches
    ]), k.jsx(Te.div, {
      ...e,
      ref: o
    });
  });
  dp.displayName = Pg;
  function Tg(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = at(e), r = v.useRef(false), o = v.useRef(() => {
    });
    return v.useEffect(() => {
      const i = (l) => {
        if (l.target && !r.current) {
          let u = function() {
            pp(Cg, n, a, {
              discrete: true
            });
          };
          const a = {
            originalEvent: l
          };
          l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
            once: true
          })) : u();
        } else t.removeEventListener("click", o.current);
        r.current = false;
      }, s = window.setTimeout(() => {
        t.addEventListener("pointerdown", i);
      }, 0);
      return () => {
        window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
      };
    }, [
      t,
      n
    ]), {
      onPointerDownCapture: () => r.current = true
    };
  }
  function Rg(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = at(e), r = v.useRef(false);
    return v.useEffect(() => {
      const o = (i) => {
        i.target && !r.current && pp(kg, n, {
          originalEvent: i
        }, {
          discrete: false
        });
      };
      return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
    }, [
      t,
      n
    ]), {
      onFocusCapture: () => r.current = true,
      onBlurCapture: () => r.current = false
    };
  }
  function fc() {
    const e = new CustomEvent(yl);
    document.dispatchEvent(e);
  }
  function pp(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target, i = new CustomEvent(e, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    t && o.addEventListener(e, t, {
      once: true
    }), r ? cp(o, i) : o.dispatchEvent(i);
  }
  var _g = ku, Og = dp, pn = (globalThis == null ? void 0 : globalThis.document) ? v.useLayoutEffect : () => {
  }, Ng = "Portal", hp = v.forwardRef((e, t) => {
    var _a3;
    const { container: n, ...r } = e, [o, i] = v.useState(false);
    pn(() => i(true), []);
    const s = n || o && ((_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body);
    return s ? tv.createPortal(k.jsx(Te.div, {
      ...r,
      ref: t
    }), s) : null;
  });
  hp.displayName = Ng;
  function Ag(e, t) {
    return v.useReducer((n, r) => t[n][r] ?? n, e);
  }
  var Pu = (e) => {
    const { present: t, children: n } = e, r = Lg(t), o = typeof n == "function" ? n({
      present: r.isPresent
    }) : v.Children.only(n), i = Je(r.ref, Mg(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
      ref: i
    }) : null;
  };
  Pu.displayName = "Presence";
  function Lg(e) {
    const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), i = v.useRef("none"), s = e ? "mounted" : "unmounted", [l, u] = Ag(s, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    return v.useEffect(() => {
      const a = xo(r.current);
      i.current = l === "mounted" ? a : "none";
    }, [
      l
    ]), pn(() => {
      const a = r.current, c = o.current;
      if (c !== e) {
        const h = i.current, g = xo(a);
        e ? u("MOUNT") : g === "none" || (a == null ? void 0 : a.display) === "none" ? u("UNMOUNT") : u(c && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
      }
    }, [
      e,
      u
    ]), pn(() => {
      if (t) {
        let a;
        const c = t.ownerDocument.defaultView ?? window, d = (g) => {
          const y = xo(r.current).includes(g.animationName);
          if (g.target === t && y && (u("ANIMATION_END"), !o.current)) {
            const x = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", a = c.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
            });
          }
        }, h = (g) => {
          g.target === t && (i.current = xo(r.current));
        };
        return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
          c.clearTimeout(a), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
        };
      } else u("ANIMATION_END");
    }, [
      t,
      u
    ]), {
      isPresent: [
        "mounted",
        "unmountSuspended"
      ].includes(l),
      ref: v.useCallback((a) => {
        a && (r.current = getComputedStyle(a)), n(a);
      }, [])
    };
  }
  function xo(e) {
    return (e == null ? void 0 : e.animationName) || "none";
  }
  function Mg(e) {
    var _a3, _b2;
    let t = (_a3 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a3.get, n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (_b2 = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b2.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
  }
  Dg = function({ prop: e, defaultProp: t, onChange: n = () => {
  } }) {
    const [r, o] = Ig({
      defaultProp: t,
      onChange: n
    }), i = e !== void 0, s = i ? e : r, l = at(n), u = v.useCallback((a) => {
      if (i) {
        const d = typeof a == "function" ? a(e) : a;
        d !== e && l(d);
      } else o(a);
    }, [
      i,
      e,
      o,
      l
    ]);
    return [
      s,
      u
    ];
  };
  function Ig({ defaultProp: e, onChange: t }) {
    const n = v.useState(e), [r] = n, o = v.useRef(r), i = at(t);
    return v.useEffect(() => {
      o.current !== r && (i(r), o.current = r);
    }, [
      r,
      o,
      i
    ]), n;
  }
  var zg = "VisuallyHidden", Di = v.forwardRef((e, t) => k.jsx(Te.span, {
    ...e,
    ref: t,
    style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
    }
  }));
  Di.displayName = zg;
  var Fg = Di, Tu = "ToastProvider", [Ru, jg, bg] = wg("Toast"), [mp] = Mi("Toast", [
    bg
  ]), [Ug, Ii] = mp(Tu), yp = (e) => {
    const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: i = 50, children: s } = e, [l, u] = v.useState(null), [a, c] = v.useState(0), d = v.useRef(false), h = v.useRef(false);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Tu}\`. Expected non-empty \`string\`.`), k.jsx(Ru.Provider, {
      scope: t,
      children: k.jsx(Ug, {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: o,
        swipeThreshold: i,
        toastCount: a,
        viewport: l,
        onViewportChange: u,
        onToastAdd: v.useCallback(() => c((g) => g + 1), []),
        onToastRemove: v.useCallback(() => c((g) => g - 1), []),
        isFocusedToastEscapeKeyDownRef: d,
        isClosePausedRef: h,
        children: s
      })
    });
  };
  yp.displayName = Tu;
  var vp = "ToastViewport", $g = [
    "F8"
  ], vl = "toast.viewportPause", gl = "toast.viewportResume", gp = v.forwardRef((e, t) => {
    const { __scopeToast: n, hotkey: r = $g, label: o = "Notifications ({hotkey})", ...i } = e, s = Ii(vp, n), l = jg(n), u = v.useRef(null), a = v.useRef(null), c = v.useRef(null), d = v.useRef(null), h = Je(t, d, s.onViewportChange), g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = s.toastCount > 0;
    v.useEffect(() => {
      const x = (p) => {
        var _a3;
        r.length !== 0 && r.every((m) => p[m] || p.code === m) && ((_a3 = d.current) == null ? void 0 : _a3.focus());
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [
      r
    ]), v.useEffect(() => {
      const x = u.current, p = d.current;
      if (w && x && p) {
        const f = () => {
          if (!s.isClosePausedRef.current) {
            const P = new CustomEvent(vl);
            p.dispatchEvent(P), s.isClosePausedRef.current = true;
          }
        }, m = () => {
          if (s.isClosePausedRef.current) {
            const P = new CustomEvent(gl);
            p.dispatchEvent(P), s.isClosePausedRef.current = false;
          }
        }, S = (P) => {
          !x.contains(P.relatedTarget) && m();
        }, E = () => {
          x.contains(document.activeElement) || m();
        };
        return x.addEventListener("focusin", f), x.addEventListener("focusout", S), x.addEventListener("pointermove", f), x.addEventListener("pointerleave", E), window.addEventListener("blur", f), window.addEventListener("focus", m), () => {
          x.removeEventListener("focusin", f), x.removeEventListener("focusout", S), x.removeEventListener("pointermove", f), x.removeEventListener("pointerleave", E), window.removeEventListener("blur", f), window.removeEventListener("focus", m);
        };
      }
    }, [
      w,
      s.isClosePausedRef
    ]);
    const y = v.useCallback(({ tabbingDirection: x }) => {
      const f = l().map((m) => {
        const S = m.ref.current, E = [
          S,
          ...ew(S)
        ];
        return x === "forwards" ? E : E.reverse();
      });
      return (x === "forwards" ? f.reverse() : f).flat();
    }, [
      l
    ]);
    return v.useEffect(() => {
      const x = d.current;
      if (x) {
        const p = (f) => {
          var _a3, _b2, _c3;
          const m = f.altKey || f.ctrlKey || f.metaKey;
          if (f.key === "Tab" && !m) {
            const E = document.activeElement, P = f.shiftKey;
            if (f.target === x && P) {
              (_a3 = a.current) == null ? void 0 : _a3.focus();
              return;
            }
            const I = y({
              tabbingDirection: P ? "backwards" : "forwards"
            }), N = I.findIndex((F) => F === E);
            ws(I.slice(N + 1)) ? f.preventDefault() : P ? (_b2 = a.current) == null ? void 0 : _b2.focus() : (_c3 = c.current) == null ? void 0 : _c3.focus();
          }
        };
        return x.addEventListener("keydown", p), () => x.removeEventListener("keydown", p);
      }
    }, [
      l,
      y
    ]), k.jsxs(Og, {
      ref: u,
      role: "region",
      "aria-label": o.replace("{hotkey}", g),
      tabIndex: -1,
      style: {
        pointerEvents: w ? void 0 : "none"
      },
      children: [
        w && k.jsx(wl, {
          ref: a,
          onFocusFromOutsideViewport: () => {
            const x = y({
              tabbingDirection: "forwards"
            });
            ws(x);
          }
        }),
        k.jsx(Ru.Slot, {
          scope: n,
          children: k.jsx(Te.ol, {
            tabIndex: -1,
            ...i,
            ref: h
          })
        }),
        w && k.jsx(wl, {
          ref: c,
          onFocusFromOutsideViewport: () => {
            const x = y({
              tabbingDirection: "backwards"
            });
            ws(x);
          }
        })
      ]
    });
  });
  gp.displayName = vp;
  var wp = "ToastFocusProxy", wl = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, i = Ii(wp, n);
    return k.jsx(Di, {
      "aria-hidden": true,
      tabIndex: 0,
      ...o,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: (s) => {
        var _a3;
        const l = s.relatedTarget;
        !((_a3 = i.viewport) == null ? void 0 : _a3.contains(l)) && r();
      }
    });
  });
  wl.displayName = wp;
  var zi = "Toast", Vg = "toast.swipeStart", Bg = "toast.swipeMove", Hg = "toast.swipeCancel", Wg = "toast.swipeEnd", xp = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e, [l = true, u] = Dg({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return k.jsx(Pu, {
      present: n || l,
      children: k.jsx(Gg, {
        open: l,
        ...s,
        ref: t,
        onClose: () => u(false),
        onPause: at(e.onPause),
        onResume: at(e.onResume),
        onSwipeStart: ie(e.onSwipeStart, (a) => {
          a.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ie(e.onSwipeMove, (a) => {
          const { x: c, y: d } = a.detail.delta;
          a.currentTarget.setAttribute("data-swipe", "move"), a.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), a.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: ie(e.onSwipeCancel, (a) => {
          a.currentTarget.setAttribute("data-swipe", "cancel"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ie(e.onSwipeEnd, (a) => {
          const { x: c, y: d } = a.detail.delta;
          a.currentTarget.setAttribute("data-swipe", "end"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), a.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), a.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), u(false);
        })
      })
    });
  });
  xp.displayName = zi;
  var [Qg, Kg] = mp(zi, {
    onClose() {
    }
  }), Gg = v.forwardRef((e, t) => {
    const { __scopeToast: n, type: r = "foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: u, onResume: a, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: h, onSwipeEnd: g, ...w } = e, y = Ii(zi, n), [x, p] = v.useState(null), f = Je(t, (L) => p(L)), m = v.useRef(null), S = v.useRef(null), E = o || y.duration, P = v.useRef(0), C = v.useRef(E), _ = v.useRef(0), { onToastAdd: I, onToastRemove: N } = y, F = at(() => {
      var _a3;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((_a3 = y.viewport) == null ? void 0 : _a3.focus()), s();
    }), D = v.useCallback((L) => {
      !L || L === 1 / 0 || (window.clearTimeout(_.current), P.current = (/* @__PURE__ */ new Date()).getTime(), _.current = window.setTimeout(F, L));
    }, [
      F
    ]);
    v.useEffect(() => {
      const L = y.viewport;
      if (L) {
        const W = () => {
          D(C.current), a == null ? void 0 : a();
        }, j = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - P.current;
          C.current = C.current - B, window.clearTimeout(_.current), u == null ? void 0 : u();
        };
        return L.addEventListener(vl, j), L.addEventListener(gl, W), () => {
          L.removeEventListener(vl, j), L.removeEventListener(gl, W);
        };
      }
    }, [
      y.viewport,
      E,
      u,
      a,
      D
    ]), v.useEffect(() => {
      i && !y.isClosePausedRef.current && D(E);
    }, [
      i,
      E,
      y.isClosePausedRef,
      D
    ]), v.useEffect(() => (I(), () => N()), [
      I,
      N
    ]);
    const V = v.useMemo(() => x ? Rp(x) : null, [
      x
    ]);
    return y.viewport ? k.jsxs(k.Fragment, {
      children: [
        V && k.jsx(Yg, {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: V
        }),
        k.jsx(Qg, {
          scope: n,
          onClose: F,
          children: Zr.createPortal(k.jsx(Ru.ItemSlot, {
            scope: n,
            children: k.jsx(_g, {
              asChild: true,
              onEscapeKeyDown: ie(l, () => {
                y.isFocusedToastEscapeKeyDownRef.current || F(), y.isFocusedToastEscapeKeyDownRef.current = false;
              }),
              children: k.jsx(Te.li, {
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": y.swipeDirection,
                ...w,
                ref: f,
                style: {
                  userSelect: "none",
                  touchAction: "none",
                  ...e.style
                },
                onKeyDown: ie(e.onKeyDown, (L) => {
                  L.key === "Escape" && (l == null ? void 0 : l(L.nativeEvent), L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = true, F()));
                }),
                onPointerDown: ie(e.onPointerDown, (L) => {
                  L.button === 0 && (m.current = {
                    x: L.clientX,
                    y: L.clientY
                  });
                }),
                onPointerMove: ie(e.onPointerMove, (L) => {
                  if (!m.current) return;
                  const W = L.clientX - m.current.x, j = L.clientY - m.current.y, B = !!S.current, T = [
                    "left",
                    "right"
                  ].includes(y.swipeDirection), O = [
                    "left",
                    "up"
                  ].includes(y.swipeDirection) ? Math.min : Math.max, M = T ? O(0, W) : 0, U = T ? 0 : O(0, j), q = L.pointerType === "touch" ? 10 : 2, Be = {
                    x: M,
                    y: U
                  }, ze = {
                    originalEvent: L,
                    delta: Be
                  };
                  B ? (S.current = Be, So(Bg, d, ze, {
                    discrete: false
                  })) : dc(Be, y.swipeDirection, q) ? (S.current = Be, So(Vg, c, ze, {
                    discrete: false
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(W) > q || Math.abs(j) > q) && (m.current = null);
                }),
                onPointerUp: ie(e.onPointerUp, (L) => {
                  const W = S.current, j = L.target;
                  if (j.hasPointerCapture(L.pointerId) && j.releasePointerCapture(L.pointerId), S.current = null, m.current = null, W) {
                    const B = L.currentTarget, T = {
                      originalEvent: L,
                      delta: W
                    };
                    dc(W, y.swipeDirection, y.swipeThreshold) ? So(Wg, g, T, {
                      discrete: true
                    }) : So(Hg, h, T, {
                      discrete: true
                    }), B.addEventListener("click", (O) => O.preventDefault(), {
                      once: true
                    });
                  }
                })
              })
            })
          }), y.viewport)
        })
      ]
    }) : null;
  }), Yg = (e) => {
    const { __scopeToast: t, children: n, ...r } = e, o = Ii(zi, t), [i, s] = v.useState(false), [l, u] = v.useState(false);
    return Zg(() => s(true)), v.useEffect(() => {
      const a = window.setTimeout(() => u(true), 1e3);
      return () => window.clearTimeout(a);
    }, []), l ? null : k.jsx(hp, {
      asChild: true,
      children: k.jsx(Di, {
        ...r,
        children: i && k.jsxs(k.Fragment, {
          children: [
            o.label,
            " ",
            n
          ]
        })
      })
    });
  }, qg = "ToastTitle", Sp = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return k.jsx(Te.div, {
      ...r,
      ref: t
    });
  });
  Sp.displayName = qg;
  var Xg = "ToastDescription", Ep = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return k.jsx(Te.div, {
      ...r,
      ref: t
    });
  });
  Ep.displayName = Xg;
  var Cp = "ToastAction", kp = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? k.jsx(Tp, {
      altText: n,
      asChild: true,
      children: k.jsx(_u, {
        ...r,
        ref: t
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Cp}\`. Expected non-empty \`string\`.`), null);
  });
  kp.displayName = Cp;
  var Pp = "ToastClose", _u = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e, o = Kg(Pp, n);
    return k.jsx(Tp, {
      asChild: true,
      children: k.jsx(Te.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ie(e.onClick, o.onClose)
      })
    });
  });
  _u.displayName = Pp;
  var Tp = v.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return k.jsx(Te.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    });
  });
  function Rp(e) {
    const t = [];
    return Array.from(e.childNodes).forEach((r) => {
      if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Jg(r)) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none", i = r.dataset.radixToastAnnounceExclude === "";
        if (!o) if (i) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else t.push(...Rp(r));
      }
    }), t;
  }
  function So(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget, i = new CustomEvent(e, {
      bubbles: true,
      cancelable: true,
      detail: n
    });
    t && o.addEventListener(e, t, {
      once: true
    }), r ? cp(o, i) : o.dispatchEvent(i);
  }
  var dc = (e, t, n = 0) => {
    const r = Math.abs(e.x), o = Math.abs(e.y), i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
  };
  function Zg(e = () => {
  }) {
    const t = at(e);
    pn(() => {
      let n = 0, r = 0;
      return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      };
    }, [
      t
    ]);
  }
  function Jg(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  function ew(e) {
    const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function ws(e) {
    const t = document.activeElement;
    return e.some((n) => n === t ? true : (n.focus(), document.activeElement !== t));
  }
  var tw = yp, _p = gp, Op = xp, Np = Sp, Ap = Ep, Lp = kp, Mp = _u;
  function Dp(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = Dp(e[t])) && (r && (r += " "), r += n);
    } else for (n in e) e[n] && (r && (r += " "), r += n);
    return r;
  }
  function Ip() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Dp(e)) && (r && (r += " "), r += t);
    return r;
  }
  const pc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hc = Ip, zp = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return hc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((a) => {
      const c = n == null ? void 0 : n[a], d = i == null ? void 0 : i[a];
      if (c === null) return null;
      const h = pc(c) || pc(d);
      return o[a][h];
    }), l = n && Object.entries(n).reduce((a, c) => {
      let [d, h] = c;
      return h === void 0 || (a[d] = h), a;
    }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, c) => {
      let { class: d, className: h, ...g } = c;
      return Object.entries(g).every((w) => {
        let [y, x] = w;
        return Array.isArray(x) ? x.includes({
          ...i,
          ...l
        }[y]) : {
          ...i,
          ...l
        }[y] === x;
      }) ? [
        ...a,
        d,
        h
      ] : a;
    }, []);
    return hc(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
  const nw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fp = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
  var rw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const ow = v.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: i, iconNode: s, ...l }, u) => v.createElement("svg", {
    ref: u,
    ...rw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Fp("lucide", o),
    ...l
  }, [
    ...s.map(([a, c]) => v.createElement(a, c)),
    ...Array.isArray(i) ? i : [
      i
    ]
  ]));
  Fi = (e, t) => {
    const n = v.forwardRef(({ className: r, ...o }, i) => v.createElement(ow, {
      ref: i,
      iconNode: t,
      className: Fp(`lucide-${nw(e)}`, r),
      ...o
    }));
    return n.displayName = `${e}`, n;
  };
  iw = Fi("CircleAlert", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
      }
    ]
  ]);
  sw = Fi("LoaderCircle", [
    [
      "path",
      {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
      }
    ]
  ]);
  lw = Fi("RefreshCw", [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc"
      }
    ],
    [
      "path",
      {
        d: "M21 3v5h-5",
        key: "1q7to0"
      }
    ],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3"
      }
    ],
    [
      "path",
      {
        d: "M8 16H3v5",
        key: "1cv678"
      }
    ]
  ]);
  let Ou, aw, jp, mc, cw, fw, xl, yc, dw, pw, hw, bp, mw, yw, vw, gw, ww;
  uw = Fi("X", [
    [
      "path",
      {
        d: "M18 6 6 18",
        key: "1bl5f8"
      }
    ],
    [
      "path",
      {
        d: "m6 6 12 12",
        key: "d8bk6v"
      }
    ]
  ]);
  Ou = "-";
  aw = (e) => {
    const t = fw(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Ou);
        return l[0] === "" && l.length !== 1 && l.shift(), jp(l, t) || cw(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const u = n[s] || [];
        return l && r[s] ? [
          ...u,
          ...r[s]
        ] : u;
      }
    };
  };
  jp = (e, t) => {
    var _a3;
    if (e.length === 0) return t.classGroupId;
    const n = e[0], r = t.nextPart.get(n), o = r ? jp(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Ou);
    return (_a3 = t.validators.find(({ validator: s }) => s(i))) == null ? void 0 : _a3.classGroupId;
  };
  mc = /^\[(.+)\]$/;
  cw = (e) => {
    if (mc.test(e)) {
      const t = mc.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  };
  fw = (e) => {
    const { theme: t, prefix: n } = e, r = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    return pw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
      xl(s, r, i, t);
    }), r;
  };
  xl = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : yc(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (dw(o)) {
          xl(o(r), t, n, r);
          return;
        }
        t.validators.push({
          validator: o,
          classGroupId: n
        });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        xl(s, yc(t, i), n, r);
      });
    });
  };
  yc = (e, t) => {
    let n = e;
    return t.split(Ou).forEach((r) => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), n = n.nextPart.get(r);
    }), n;
  };
  dw = (e) => e.isThemeGetter;
  pw = (e, t) => t ? e.map(([n, r]) => {
    const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [
      t + s,
      l
    ])) : i);
    return [
      n,
      o
    ];
  }) : e;
  hw = (e) => {
    if (e < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      }
    };
  };
  bp = "!";
  mw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, o = t[0], i = t.length, s = (l) => {
      const u = [];
      let a = 0, c = 0, d;
      for (let x = 0; x < l.length; x++) {
        let p = l[x];
        if (a === 0) {
          if (p === o && (r || l.slice(x, x + i) === t)) {
            u.push(l.slice(c, x)), c = x + i;
            continue;
          }
          if (p === "/") {
            d = x;
            continue;
          }
        }
        p === "[" ? a++ : p === "]" && a--;
      }
      const h = u.length === 0 ? l : l.substring(c), g = h.startsWith(bp), w = g ? h.substring(1) : h, y = d && d > c ? d - c : void 0;
      return {
        modifiers: u,
        hasImportantModifier: g,
        baseClassName: w,
        maybePostfixModifierPosition: y
      };
    };
    return n ? (l) => n({
      className: l,
      parseClassName: s
    }) : s;
  };
  yw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
    }), t.push(...n.sort()), t;
  };
  vw = (e) => ({
    cache: hw(e.cacheSize),
    parseClassName: mw(e),
    ...aw(e)
  });
  gw = /\s+/;
  ww = (e, t) => {
    const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t, i = [], s = e.trim().split(gw);
    let l = "";
    for (let u = s.length - 1; u >= 0; u -= 1) {
      const a = s[u], { modifiers: c, hasImportantModifier: d, baseClassName: h, maybePostfixModifierPosition: g } = n(a);
      let w = !!g, y = r(w ? h.substring(0, g) : h);
      if (!y) {
        if (!w) {
          l = a + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (y = r(h), !y) {
          l = a + (l.length > 0 ? " " + l : l);
          continue;
        }
        w = false;
      }
      const x = yw(c).join(":"), p = d ? x + bp : x, f = p + y;
      if (i.includes(f)) continue;
      i.push(f);
      const m = o(y, w);
      for (let S = 0; S < m.length; ++S) {
        const E = m[S];
        i.push(p + E);
      }
      l = a + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
  function xw() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = Up(t)) && (r && (r += " "), r += n);
    return r;
  }
  const Up = (e) => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Up(e[r])) && (n && (n += " "), n += t);
    return n;
  };
  function Sw(e, ...t) {
    let n, r, o, i = s;
    function s(u) {
      const a = t.reduce((c, d) => d(c), e());
      return n = vw(a), r = n.cache.get, o = n.cache.set, i = l, l(u);
    }
    function l(u) {
      const a = r(u);
      if (a) return a;
      const c = ww(u, n);
      return o(u, c), c;
    }
    return function() {
      return i(xw.apply(null, arguments));
    };
  }
  const K = (e) => {
    const t = (n) => n[e] || [];
    return t.isThemeGetter = true, t;
  }, $p = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ew = /^\d+\/\d+$/, Cw = /* @__PURE__ */ new Set([
    "px",
    "full",
    "screen"
  ]), kw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Rw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _w = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ht = (e) => zn(e) || Cw.has(e) || Ew.test(e), _t = (e) => Zn(e, "length", zw), zn = (e) => !!e && !Number.isNaN(Number(e)), xs = (e) => Zn(e, "number", zn), cr = (e) => !!e && Number.isInteger(Number(e)), Ow = (e) => e.endsWith("%") && zn(e.slice(0, -1)), z = (e) => $p.test(e), Ot = (e) => kw.test(e), Nw = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
  ]), Aw = (e) => Zn(e, Nw, Vp), Lw = (e) => Zn(e, "position", Vp), Mw = /* @__PURE__ */ new Set([
    "image",
    "url"
  ]), Dw = (e) => Zn(e, Mw, jw), Iw = (e) => Zn(e, "", Fw), fr = () => true, Zn = (e, t, n) => {
    const r = $p.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : false;
  }, zw = (e) => Pw.test(e) && !Tw.test(e), Vp = () => false, Fw = (e) => Rw.test(e), jw = (e) => _w.test(e), bw = () => {
    const e = K("colors"), t = K("spacing"), n = K("blur"), r = K("brightness"), o = K("borderColor"), i = K("borderRadius"), s = K("borderSpacing"), l = K("borderWidth"), u = K("contrast"), a = K("grayscale"), c = K("hueRotate"), d = K("invert"), h = K("gap"), g = K("gradientColorStops"), w = K("gradientColorStopPositions"), y = K("inset"), x = K("margin"), p = K("opacity"), f = K("padding"), m = K("saturate"), S = K("scale"), E = K("sepia"), P = K("skew"), C = K("space"), _ = K("translate"), I = () => [
      "auto",
      "contain",
      "none"
    ], N = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], F = () => [
      "auto",
      z,
      t
    ], D = () => [
      z,
      t
    ], V = () => [
      "",
      ht,
      _t
    ], L = () => [
      "auto",
      zn,
      z
    ], W = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top"
    ], j = () => [
      "solid",
      "dashed",
      "dotted",
      "double",
      "none"
    ], B = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], T = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch"
    ], O = () => [
      "",
      "0",
      z
    ], M = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], U = () => [
      zn,
      z
    ];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [
          fr
        ],
        spacing: [
          ht,
          _t
        ],
        blur: [
          "none",
          "",
          Ot,
          z
        ],
        brightness: U(),
        borderColor: [
          e
        ],
        borderRadius: [
          "none",
          "",
          "full",
          Ot,
          z
        ],
        borderSpacing: D(),
        borderWidth: V(),
        contrast: U(),
        grayscale: O(),
        hueRotate: U(),
        invert: O(),
        gap: D(),
        gradientColorStops: [
          e
        ],
        gradientColorStopPositions: [
          Ow,
          _t
        ],
        inset: F(),
        margin: F(),
        opacity: U(),
        padding: D(),
        saturate: U(),
        scale: U(),
        sepia: O(),
        skew: U(),
        space: D(),
        translate: D()
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              "video",
              z
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              Ot
            ]
          }
        ],
        "break-after": [
          {
            "break-after": M()
          }
        ],
        "break-before": [
          {
            "break-before": M()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: [
              ...W(),
              z
            ]
          }
        ],
        overflow: [
          {
            overflow: N()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": N()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": N()
          }
        ],
        overscroll: [
          {
            overscroll: I()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": I()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": I()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: [
              y
            ]
          }
        ],
        "inset-x": [
          {
            "inset-x": [
              y
            ]
          }
        ],
        "inset-y": [
          {
            "inset-y": [
              y
            ]
          }
        ],
        start: [
          {
            start: [
              y
            ]
          }
        ],
        end: [
          {
            end: [
              y
            ]
          }
        ],
        top: [
          {
            top: [
              y
            ]
          }
        ],
        right: [
          {
            right: [
              y
            ]
          }
        ],
        bottom: [
          {
            bottom: [
              y
            ]
          }
        ],
        left: [
          {
            left: [
              y
            ]
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              "auto",
              cr,
              z
            ]
          }
        ],
        basis: [
          {
            basis: F()
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "wrap",
              "wrap-reverse",
              "nowrap"
            ]
          }
        ],
        flex: [
          {
            flex: [
              "1",
              "auto",
              "initial",
              "none",
              z
            ]
          }
        ],
        grow: [
          {
            grow: O()
          }
        ],
        shrink: [
          {
            shrink: O()
          }
        ],
        order: [
          {
            order: [
              "first",
              "last",
              "none",
              cr,
              z
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": [
              fr
            ]
          }
        ],
        "col-start-end": [
          {
            col: [
              "auto",
              {
                span: [
                  "full",
                  cr,
                  z
                ]
              },
              z
            ]
          }
        ],
        "col-start": [
          {
            "col-start": L()
          }
        ],
        "col-end": [
          {
            "col-end": L()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": [
              fr
            ]
          }
        ],
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [
                  cr,
                  z
                ]
              },
              z
            ]
          }
        ],
        "row-start": [
          {
            "row-start": L()
          }
        ],
        "row-end": [
          {
            "row-end": L()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": [
              "auto",
              "min",
              "max",
              "fr",
              z
            ]
          }
        ],
        "auto-rows": [
          {
            "auto-rows": [
              "auto",
              "min",
              "max",
              "fr",
              z
            ]
          }
        ],
        gap: [
          {
            gap: [
              h
            ]
          }
        ],
        "gap-x": [
          {
            "gap-x": [
              h
            ]
          }
        ],
        "gap-y": [
          {
            "gap-y": [
              h
            ]
          }
        ],
        "justify-content": [
          {
            justify: [
              "normal",
              ...T()
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              "start",
              "end",
              "center",
              "stretch"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              "start",
              "end",
              "center",
              "stretch"
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...T(),
              "baseline"
            ]
          }
        ],
        "align-items": [
          {
            items: [
              "start",
              "end",
              "center",
              "baseline",
              "stretch"
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              "start",
              "end",
              "center",
              "stretch",
              "baseline"
            ]
          }
        ],
        "place-content": [
          {
            "place-content": [
              ...T(),
              "baseline"
            ]
          }
        ],
        "place-items": [
          {
            "place-items": [
              "start",
              "end",
              "center",
              "baseline",
              "stretch"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              "start",
              "end",
              "center",
              "stretch"
            ]
          }
        ],
        p: [
          {
            p: [
              f
            ]
          }
        ],
        px: [
          {
            px: [
              f
            ]
          }
        ],
        py: [
          {
            py: [
              f
            ]
          }
        ],
        ps: [
          {
            ps: [
              f
            ]
          }
        ],
        pe: [
          {
            pe: [
              f
            ]
          }
        ],
        pt: [
          {
            pt: [
              f
            ]
          }
        ],
        pr: [
          {
            pr: [
              f
            ]
          }
        ],
        pb: [
          {
            pb: [
              f
            ]
          }
        ],
        pl: [
          {
            pl: [
              f
            ]
          }
        ],
        m: [
          {
            m: [
              x
            ]
          }
        ],
        mx: [
          {
            mx: [
              x
            ]
          }
        ],
        my: [
          {
            my: [
              x
            ]
          }
        ],
        ms: [
          {
            ms: [
              x
            ]
          }
        ],
        me: [
          {
            me: [
              x
            ]
          }
        ],
        mt: [
          {
            mt: [
              x
            ]
          }
        ],
        mr: [
          {
            mr: [
              x
            ]
          }
        ],
        mb: [
          {
            mb: [
              x
            ]
          }
        ],
        ml: [
          {
            ml: [
              x
            ]
          }
        ],
        "space-x": [
          {
            "space-x": [
              C
            ]
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": [
              C
            ]
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        w: [
          {
            w: [
              "auto",
              "min",
              "max",
              "fit",
              "svw",
              "lvw",
              "dvw",
              z,
              t
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              z,
              t,
              "min",
              "max",
              "fit"
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              z,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              {
                screen: [
                  Ot
                ]
              },
              Ot
            ]
          }
        ],
        h: [
          {
            h: [
              z,
              t,
              "auto",
              "min",
              "max",
              "fit",
              "svh",
              "lvh",
              "dvh"
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              z,
              t,
              "min",
              "max",
              "fit",
              "svh",
              "lvh",
              "dvh"
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              z,
              t,
              "min",
              "max",
              "fit",
              "svh",
              "lvh",
              "dvh"
            ]
          }
        ],
        size: [
          {
            size: [
              z,
              t,
              "auto",
              "min",
              "max",
              "fit"
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              Ot,
              _t
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              xs
            ]
          }
        ],
        "font-family": [
          {
            font: [
              fr
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              z
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              "none",
              zn,
              xs
            ]
          }
        ],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              ht,
              z
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              z
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "none",
              "disc",
              "decimal",
              z
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: [
              e
            ]
          }
        ],
        "placeholder-opacity": [
          {
            "placeholder-opacity": [
              p
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "text-color": [
          {
            text: [
              e
            ]
          }
        ],
        "text-opacity": [
          {
            "text-opacity": [
              p
            ]
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...j(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              "auto",
              "from-font",
              ht,
              _t
            ]
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              "auto",
              ht,
              z
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: [
              e
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: D()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              z
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              z
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-opacity": [
          {
            "bg-opacity": [
              p
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: [
              ...W(),
              Lw
            ]
          }
        ],
        "bg-repeat": [
          {
            bg: [
              "no-repeat",
              {
                repeat: [
                  "",
                  "x",
                  "y",
                  "round",
                  "space"
                ]
              }
            ]
          }
        ],
        "bg-size": [
          {
            bg: [
              "auto",
              "cover",
              "contain",
              Aw
            ]
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                "gradient-to": [
                  "t",
                  "tr",
                  "r",
                  "br",
                  "b",
                  "bl",
                  "l",
                  "tl"
                ]
              },
              Dw
            ]
          }
        ],
        "bg-color": [
          {
            bg: [
              e
            ]
          }
        ],
        "gradient-from-pos": [
          {
            from: [
              w
            ]
          }
        ],
        "gradient-via-pos": [
          {
            via: [
              w
            ]
          }
        ],
        "gradient-to-pos": [
          {
            to: [
              w
            ]
          }
        ],
        "gradient-from": [
          {
            from: [
              g
            ]
          }
        ],
        "gradient-via": [
          {
            via: [
              g
            ]
          }
        ],
        "gradient-to": [
          {
            to: [
              g
            ]
          }
        ],
        rounded: [
          {
            rounded: [
              i
            ]
          }
        ],
        "rounded-s": [
          {
            "rounded-s": [
              i
            ]
          }
        ],
        "rounded-e": [
          {
            "rounded-e": [
              i
            ]
          }
        ],
        "rounded-t": [
          {
            "rounded-t": [
              i
            ]
          }
        ],
        "rounded-r": [
          {
            "rounded-r": [
              i
            ]
          }
        ],
        "rounded-b": [
          {
            "rounded-b": [
              i
            ]
          }
        ],
        "rounded-l": [
          {
            "rounded-l": [
              i
            ]
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": [
              i
            ]
          }
        ],
        "rounded-se": [
          {
            "rounded-se": [
              i
            ]
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": [
              i
            ]
          }
        ],
        "rounded-es": [
          {
            "rounded-es": [
              i
            ]
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": [
              i
            ]
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": [
              i
            ]
          }
        ],
        "rounded-br": [
          {
            "rounded-br": [
              i
            ]
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": [
              i
            ]
          }
        ],
        "border-w": [
          {
            border: [
              l
            ]
          }
        ],
        "border-w-x": [
          {
            "border-x": [
              l
            ]
          }
        ],
        "border-w-y": [
          {
            "border-y": [
              l
            ]
          }
        ],
        "border-w-s": [
          {
            "border-s": [
              l
            ]
          }
        ],
        "border-w-e": [
          {
            "border-e": [
              l
            ]
          }
        ],
        "border-w-t": [
          {
            "border-t": [
              l
            ]
          }
        ],
        "border-w-r": [
          {
            "border-r": [
              l
            ]
          }
        ],
        "border-w-b": [
          {
            "border-b": [
              l
            ]
          }
        ],
        "border-w-l": [
          {
            "border-l": [
              l
            ]
          }
        ],
        "border-opacity": [
          {
            "border-opacity": [
              p
            ]
          }
        ],
        "border-style": [
          {
            border: [
              ...j(),
              "hidden"
            ]
          }
        ],
        "divide-x": [
          {
            "divide-x": [
              l
            ]
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": [
              l
            ]
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "divide-opacity": [
          {
            "divide-opacity": [
              p
            ]
          }
        ],
        "divide-style": [
          {
            divide: j()
          }
        ],
        "border-color": [
          {
            border: [
              o
            ]
          }
        ],
        "border-color-x": [
          {
            "border-x": [
              o
            ]
          }
        ],
        "border-color-y": [
          {
            "border-y": [
              o
            ]
          }
        ],
        "border-color-s": [
          {
            "border-s": [
              o
            ]
          }
        ],
        "border-color-e": [
          {
            "border-e": [
              o
            ]
          }
        ],
        "border-color-t": [
          {
            "border-t": [
              o
            ]
          }
        ],
        "border-color-r": [
          {
            "border-r": [
              o
            ]
          }
        ],
        "border-color-b": [
          {
            "border-b": [
              o
            ]
          }
        ],
        "border-color-l": [
          {
            "border-l": [
              o
            ]
          }
        ],
        "divide-color": [
          {
            divide: [
              o
            ]
          }
        ],
        "outline-style": [
          {
            outline: [
              "",
              ...j()
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              ht,
              z
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              ht,
              _t
            ]
          }
        ],
        "outline-color": [
          {
            outline: [
              e
            ]
          }
        ],
        "ring-w": [
          {
            ring: V()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: [
              e
            ]
          }
        ],
        "ring-opacity": [
          {
            "ring-opacity": [
              p
            ]
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              ht,
              _t
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": [
              e
            ]
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "inner",
              "none",
              Ot,
              Iw
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: [
              fr
            ]
          }
        ],
        opacity: [
          {
            opacity: [
              p
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...B(),
              "plus-lighter",
              "plus-darker"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": B()
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none"
            ]
          }
        ],
        blur: [
          {
            blur: [
              n
            ]
          }
        ],
        brightness: [
          {
            brightness: [
              r
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              u
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              Ot,
              z
            ]
          }
        ],
        grayscale: [
          {
            grayscale: [
              a
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              c
            ]
          }
        ],
        invert: [
          {
            invert: [
              d
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              m
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              E
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none"
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": [
              n
            ]
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              r
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              u
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              a
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              c
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              d
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              p
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              m
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              E
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": [
              s
            ]
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": [
              s
            ]
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": [
              s
            ]
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              z
            ]
          }
        ],
        duration: [
          {
            duration: U()
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "in",
              "out",
              "in-out",
              z
            ]
          }
        ],
        delay: [
          {
            delay: U()
          }
        ],
        animate: [
          {
            animate: [
              "none",
              "spin",
              "ping",
              "pulse",
              "bounce",
              z
            ]
          }
        ],
        transform: [
          {
            transform: [
              "",
              "gpu",
              "none"
            ]
          }
        ],
        scale: [
          {
            scale: [
              S
            ]
          }
        ],
        "scale-x": [
          {
            "scale-x": [
              S
            ]
          }
        ],
        "scale-y": [
          {
            "scale-y": [
              S
            ]
          }
        ],
        rotate: [
          {
            rotate: [
              cr,
              z
            ]
          }
        ],
        "translate-x": [
          {
            "translate-x": [
              _
            ]
          }
        ],
        "translate-y": [
          {
            "translate-y": [
              _
            ]
          }
        ],
        "skew-x": [
          {
            "skew-x": [
              P
            ]
          }
        ],
        "skew-y": [
          {
            "skew-y": [
              P
            ]
          }
        ],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              z
            ]
          }
        ],
        accent: [
          {
            accent: [
              "auto",
              e
            ]
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              z
            ]
          }
        ],
        "caret-color": [
          {
            caret: [
              e
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "none",
              "auto"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "y",
              "x",
              ""
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": D()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": D()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": D()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": D()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": D()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": D()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": D()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": D()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": D()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": D()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": D()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": D()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": D()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": D()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": D()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": D()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": D()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": D()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              z
            ]
          }
        ],
        fill: [
          {
            fill: [
              e,
              "none"
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              ht,
              _t,
              xs
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              e,
              "none"
            ]
          }
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      }
    };
  }, Uw = Sw(bw);
  Jt = function(...e) {
    return Uw(Ip(e));
  };
  const $w = tw, Bp = v.forwardRef(({ className: e, ...t }, n) => k.jsx(_p, {
    ref: n,
    className: Jt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
  }));
  Bp.displayName = _p.displayName;
  const Vw = zp("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }), Hp = v.forwardRef(({ className: e, variant: t, ...n }, r) => k.jsx(Op, {
    ref: r,
    className: Jt(Vw({
      variant: t
    }), e),
    ...n
  }));
  Hp.displayName = Op.displayName;
  const Bw = v.forwardRef(({ className: e, ...t }, n) => k.jsx(Lp, {
    ref: n,
    className: Jt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
  }));
  Bw.displayName = Lp.displayName;
  const Wp = v.forwardRef(({ className: e, ...t }, n) => k.jsx(Mp, {
    ref: n,
    className: Jt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: k.jsx(uw, {
      className: "h-4 w-4"
    })
  }));
  Wp.displayName = Mp.displayName;
  const Qp = v.forwardRef(({ className: e, ...t }, n) => k.jsx(Np, {
    ref: n,
    className: Jt("text-sm font-semibold", e),
    ...t
  }));
  Qp.displayName = Np.displayName;
  const Kp = v.forwardRef(({ className: e, ...t }, n) => k.jsx(Ap, {
    ref: n,
    className: Jt("text-sm opacity-90", e),
    ...t
  }));
  Kp.displayName = Ap.displayName;
  function Hw() {
    const { toasts: e } = fg();
    return k.jsxs($w, {
      children: [
        e.map(function({ id: t, title: n, description: r, action: o, ...i }) {
          return k.jsxs(Hp, {
            ...i,
            children: [
              k.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && k.jsx(Qp, {
                    children: n
                  }),
                  r && k.jsx(Kp, {
                    children: r
                  })
                ]
              }),
              o,
              k.jsx(Wp, {})
            ]
          }, t);
        }),
        k.jsx(Bp, {})
      ]
    });
  }
  const Ww = [
    "top",
    "right",
    "bottom",
    "left"
  ], Kt = Math.min, Oe = Math.max, ci = Math.round, Eo = Math.floor, ut = (e) => ({
    x: e,
    y: e
  }), Qw = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, Kw = {
    start: "end",
    end: "start"
  };
  function Sl(e, t, n) {
    return Oe(e, Kt(t, n));
  }
  function kt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Pt(e) {
    return e.split("-")[0];
  }
  function Jn(e) {
    return e.split("-")[1];
  }
  function Nu(e) {
    return e === "x" ? "y" : "x";
  }
  function Au(e) {
    return e === "y" ? "height" : "width";
  }
  function Gt(e) {
    return [
      "top",
      "bottom"
    ].includes(Pt(e)) ? "y" : "x";
  }
  function Lu(e) {
    return Nu(Gt(e));
  }
  function Gw(e, t, n) {
    n === void 0 && (n = false);
    const r = Jn(e), o = Lu(e), i = Au(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = fi(s)), [
      s,
      fi(s)
    ];
  }
  function Yw(e) {
    const t = fi(e);
    return [
      El(e),
      t,
      El(t)
    ];
  }
  function El(e) {
    return e.replace(/start|end/g, (t) => Kw[t]);
  }
  function qw(e, t, n) {
    const r = [
      "left",
      "right"
    ], o = [
      "right",
      "left"
    ], i = [
      "top",
      "bottom"
    ], s = [
      "bottom",
      "top"
    ];
    switch (e) {
      case "top":
      case "bottom":
        return n ? t ? o : r : t ? r : o;
      case "left":
      case "right":
        return t ? i : s;
      default:
        return [];
    }
  }
  function Xw(e, t, n, r) {
    const o = Jn(e);
    let i = qw(Pt(e), n === "start", r);
    return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(El)))), i;
  }
  function fi(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Qw[t]);
  }
  function Zw(e) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...e
    };
  }
  function Gp(e) {
    return typeof e != "number" ? Zw(e) : {
      top: e,
      right: e,
      bottom: e,
      left: e
    };
  }
  function di(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
      width: r,
      height: o,
      top: n,
      left: t,
      right: t + r,
      bottom: n + o,
      x: t,
      y: n
    };
  }
  function vc(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = Gt(t), s = Lu(t), l = Au(s), u = Pt(t), a = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[l] / 2 - o[l] / 2;
    let g;
    switch (u) {
      case "top":
        g = {
          x: c,
          y: r.y - o.height
        };
        break;
      case "bottom":
        g = {
          x: c,
          y: r.y + r.height
        };
        break;
      case "right":
        g = {
          x: r.x + r.width,
          y: d
        };
        break;
      case "left":
        g = {
          x: r.x - o.width,
          y: d
        };
        break;
      default:
        g = {
          x: r.x,
          y: r.y
        };
    }
    switch (Jn(t)) {
      case "start":
        g[s] -= h * (n && a ? -1 : 1);
        break;
      case "end":
        g[s] += h * (n && a ? -1 : 1);
        break;
    }
    return g;
  }
  const Jw = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n, l = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let a = await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }), { x: c, y: d } = vc(a, r, u), h = r, g = {}, w = 0;
    for (let y = 0; y < l.length; y++) {
      const { name: x, fn: p } = l[y], { x: f, y: m, data: S, reset: E } = await p({
        x: c,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: g,
        rects: a,
        platform: s,
        elements: {
          reference: e,
          floating: t
        }
      });
      c = f ?? c, d = m ?? d, g = {
        ...g,
        [x]: {
          ...g[x],
          ...S
        }
      }, E && w <= 50 && (w++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (a = E.rects === true ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : E.rects), { x: c, y: d } = vc(a, h, u)), y = -1);
    }
    return {
      x: c,
      y: d,
      placement: h,
      strategy: o,
      middlewareData: g
    };
  };
  async function Wr(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: l, strategy: u } = e, { boundary: a = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: h = false, padding: g = 0 } = kt(t, e), w = Gp(g), x = l[h ? d === "floating" ? "reference" : "floating" : d], p = di(await i.getClippingRect({
      element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
      boundary: a,
      rootBoundary: c,
      strategy: u
    })), f = d === "floating" ? {
      x: r,
      y: o,
      width: s.floating.width,
      height: s.floating.height
    } : s.reference, m = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), S = await (i.isElement == null ? void 0 : i.isElement(m)) ? await (i.getScale == null ? void 0 : i.getScale(m)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, E = di(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: l,
      rect: f,
      offsetParent: m,
      strategy: u
    }) : f);
    return {
      top: (p.top - E.top + w.top) / S.y,
      bottom: (E.bottom - p.bottom + w.bottom) / S.y,
      left: (p.left - E.left + w.left) / S.x,
      right: (E.right - p.right + w.right) / S.x
    };
  }
  const e0 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: u } = t, { element: a, padding: c = 0 } = kt(e, t) || {};
      if (a == null) return {};
      const d = Gp(c), h = {
        x: n,
        y: r
      }, g = Lu(o), w = Au(g), y = await s.getDimensions(a), x = g === "y", p = x ? "top" : "left", f = x ? "bottom" : "right", m = x ? "clientHeight" : "clientWidth", S = i.reference[w] + i.reference[g] - h[g] - i.floating[w], E = h[g] - i.reference[g], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
      let C = P ? P[m] : 0;
      (!C || !await (s.isElement == null ? void 0 : s.isElement(P))) && (C = l.floating[m] || i.floating[w]);
      const _ = S / 2 - E / 2, I = C / 2 - y[w] / 2 - 1, N = Kt(d[p], I), F = Kt(d[f], I), D = N, V = C - y[w] - F, L = C / 2 - y[w] / 2 + _, W = Sl(D, L, V), j = !u.arrow && Jn(o) != null && L !== W && i.reference[w] / 2 - (L < D ? N : F) - y[w] / 2 < 0, B = j ? L < D ? L - D : L - V : 0;
      return {
        [g]: h[g] + B,
        data: {
          [g]: W,
          centerOffset: L - W - B,
          ...j && {
            alignmentOffset: B
          }
        },
        reset: j
      };
    }
  }), t0 = function(e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const { placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: u, elements: a } = t, { mainAxis: c = true, crossAxis: d = true, fallbackPlacements: h, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: w = "none", flipAlignment: y = true, ...x } = kt(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) return {};
        const p = Pt(o), f = Gt(l), m = Pt(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)), E = h || (m || !y ? [
          fi(l)
        ] : Yw(l)), P = w !== "none";
        !h && P && E.push(...Xw(l, y, w, S));
        const C = [
          l,
          ...E
        ], _ = await Wr(t, x), I = [];
        let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if (c && I.push(_[p]), d) {
          const L = Gw(o, s, S);
          I.push(_[L[0]], _[L[1]]);
        }
        if (N = [
          ...N,
          {
            placement: o,
            overflows: I
          }
        ], !I.every((L) => L <= 0)) {
          var F, D;
          const L = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1, W = C[L];
          if (W) return {
            data: {
              index: L,
              overflows: N
            },
            reset: {
              placement: W
            }
          };
          let j = (D = N.filter((B) => B.overflows[0] <= 0).sort((B, T) => B.overflows[1] - T.overflows[1])[0]) == null ? void 0 : D.placement;
          if (!j) switch (g) {
            case "bestFit": {
              var V;
              const B = (V = N.filter((T) => {
                if (P) {
                  const O = Gt(T.placement);
                  return O === f || O === "y";
                }
                return true;
              }).map((T) => [
                T.placement,
                T.overflows.filter((O) => O > 0).reduce((O, M) => O + M, 0)
              ]).sort((T, O) => T[1] - O[1])[0]) == null ? void 0 : V[0];
              B && (j = B);
              break;
            }
            case "initialPlacement":
              j = l;
              break;
          }
          if (o !== j) return {
            reset: {
              placement: j
            }
          };
        }
        return {};
      }
    };
  };
  function gc(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width
    };
  }
  function wc(e) {
    return Ww.some((t) => e[t] >= 0);
  }
  const n0 = function(e) {
    return e === void 0 && (e = {}), {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t, { strategy: r = "referenceHidden", ...o } = kt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Wr(t, {
              ...o,
              elementContext: "reference"
            }), s = gc(i, n.reference);
            return {
              data: {
                referenceHiddenOffsets: s,
                referenceHidden: wc(s)
              }
            };
          }
          case "escaped": {
            const i = await Wr(t, {
              ...o,
              altBoundary: true
            }), s = gc(i, n.floating);
            return {
              data: {
                escapedOffsets: s,
                escaped: wc(s)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  };
  async function r0(e, t) {
    const { placement: n, platform: r, elements: o } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Pt(n), l = Jn(n), u = Gt(n) === "y", a = [
      "left",
      "top"
    ].includes(s) ? -1 : 1, c = i && u ? -1 : 1, d = kt(t, e);
    let { mainAxis: h, crossAxis: g, alignmentAxis: w } = typeof d == "number" ? {
      mainAxis: d,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: d.mainAxis || 0,
      crossAxis: d.crossAxis || 0,
      alignmentAxis: d.alignmentAxis
    };
    return l && typeof w == "number" && (g = l === "end" ? w * -1 : w), u ? {
      x: g * c,
      y: h * a
    } : {
      x: h * a,
      y: g * c
    };
  }
  const o0 = function(e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const { x: o, y: i, placement: s, middlewareData: l } = t, u = await r0(t, e);
        return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
          x: o + u.x,
          y: i + u.y,
          data: {
            ...u,
            placement: s
          }
        };
      }
    };
  }, i0 = function(e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const { x: n, y: r, placement: o } = t, { mainAxis: i = true, crossAxis: s = false, limiter: l = {
          fn: (x) => {
            let { x: p, y: f } = x;
            return {
              x: p,
              y: f
            };
          }
        }, ...u } = kt(e, t), a = {
          x: n,
          y: r
        }, c = await Wr(t, u), d = Gt(Pt(o)), h = Nu(d);
        let g = a[h], w = a[d];
        if (i) {
          const x = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", f = g + c[x], m = g - c[p];
          g = Sl(f, g, m);
        }
        if (s) {
          const x = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", f = w + c[x], m = w - c[p];
          w = Sl(f, w, m);
        }
        const y = l.fn({
          ...t,
          [h]: g,
          [d]: w
        });
        return {
          ...y,
          data: {
            x: y.x - n,
            y: y.y - r,
            enabled: {
              [h]: i,
              [d]: s
            }
          }
        };
      }
    };
  }, s0 = function(e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t, { offset: l = 0, mainAxis: u = true, crossAxis: a = true } = kt(e, t), c = {
          x: n,
          y: r
        }, d = Gt(o), h = Nu(d);
        let g = c[h], w = c[d];
        const y = kt(l, t), x = typeof y == "number" ? {
          mainAxis: y,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...y
        };
        if (u) {
          const m = h === "y" ? "height" : "width", S = i.reference[h] - i.floating[m] + x.mainAxis, E = i.reference[h] + i.reference[m] - x.mainAxis;
          g < S ? g = S : g > E && (g = E);
        }
        if (a) {
          var p, f;
          const m = h === "y" ? "width" : "height", S = [
            "top",
            "left"
          ].includes(Pt(o)), E = i.reference[d] - i.floating[m] + (S && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (S ? 0 : x.crossAxis), P = i.reference[d] + i.reference[m] + (S ? 0 : ((f = s.offset) == null ? void 0 : f[d]) || 0) - (S ? x.crossAxis : 0);
          w < E ? w = E : w > P && (w = P);
        }
        return {
          [h]: g,
          [d]: w
        };
      }
    };
  }, l0 = function(e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, r;
        const { placement: o, rects: i, platform: s, elements: l } = t, { apply: u = () => {
        }, ...a } = kt(e, t), c = await Wr(t, a), d = Pt(o), h = Jn(o), g = Gt(o) === "y", { width: w, height: y } = i.floating;
        let x, p;
        d === "top" || d === "bottom" ? (x = d, p = h === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (p = d, x = h === "end" ? "top" : "bottom");
        const f = y - c.top - c.bottom, m = w - c.left - c.right, S = Kt(y - c[x], f), E = Kt(w - c[p], m), P = !t.middlewareData.shift;
        let C = S, _ = E;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = m), (r = t.middlewareData.shift) != null && r.enabled.y && (C = f), P && !h) {
          const N = Oe(c.left, 0), F = Oe(c.right, 0), D = Oe(c.top, 0), V = Oe(c.bottom, 0);
          g ? _ = w - 2 * (N !== 0 || F !== 0 ? N + F : Oe(c.left, c.right)) : C = y - 2 * (D !== 0 || V !== 0 ? D + V : Oe(c.top, c.bottom));
        }
        await u({
          ...t,
          availableWidth: _,
          availableHeight: C
        });
        const I = await s.getDimensions(l.floating);
        return w !== I.width || y !== I.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function ji() {
    return typeof window < "u";
  }
  function er(e) {
    return Yp(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function Le(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function dt(e) {
    var t;
    return (t = (Yp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function Yp(e) {
    return ji() ? e instanceof Node || e instanceof Le(e).Node : false;
  }
  function et(e) {
    return ji() ? e instanceof Element || e instanceof Le(e).Element : false;
  }
  function ct(e) {
    return ji() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : false;
  }
  function xc(e) {
    return !ji() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
  }
  function Jr(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = tt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && ![
      "inline",
      "contents"
    ].includes(o);
  }
  function u0(e) {
    return [
      "table",
      "td",
      "th"
    ].includes(er(e));
  }
  function bi(e) {
    return [
      ":popover-open",
      ":modal"
    ].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return false;
      }
    });
  }
  function Mu(e) {
    const t = Du(), n = et(e) ? tt(e) : e;
    return [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective"
    ].some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective",
      "filter"
    ].some((r) => (n.willChange || "").includes(r)) || [
      "paint",
      "layout",
      "strict",
      "content"
    ].some((r) => (n.contain || "").includes(r));
  }
  function a0(e) {
    let t = Yt(e);
    for (; ct(t) && !Qn(t); ) {
      if (Mu(t)) return t;
      if (bi(t)) return null;
      t = Yt(t);
    }
    return null;
  }
  function Du() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function Qn(e) {
    return [
      "html",
      "body",
      "#document"
    ].includes(er(e));
  }
  function tt(e) {
    return Le(e).getComputedStyle(e);
  }
  function Ui(e) {
    return et(e) ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    } : {
      scrollLeft: e.scrollX,
      scrollTop: e.scrollY
    };
  }
  function Yt(e) {
    if (er(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || xc(e) && e.host || dt(e);
    return xc(t) ? t.host : t;
  }
  function qp(e) {
    const t = Yt(e);
    return Qn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ct(t) && Jr(t) ? t : qp(t);
  }
  function Qr(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = true);
    const o = qp(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Le(o);
    if (i) {
      const l = Cl(s);
      return t.concat(s, s.visualViewport || [], Jr(o) ? o : [], l && n ? Qr(l) : []);
    }
    return t.concat(o, Qr(o, [], n));
  }
  function Cl(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function Xp(e) {
    const t = tt(e);
    let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
    const o = ct(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = ci(n) !== i || ci(r) !== s;
    return l && (n = i, r = s), {
      width: n,
      height: r,
      $: l
    };
  }
  function Iu(e) {
    return et(e) ? e : e.contextElement;
  }
  function Fn(e) {
    const t = Iu(e);
    if (!ct(t)) return ut(1);
    const n = t.getBoundingClientRect(), { width: r, height: o, $: i } = Xp(t);
    let s = (i ? ci(n.width) : n.width) / r, l = (i ? ci(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
      x: s,
      y: l
    };
  }
  const c0 = ut(0);
  function Zp(e) {
    const t = Le(e);
    return !Du() || !t.visualViewport ? c0 : {
      x: t.visualViewport.offsetLeft,
      y: t.visualViewport.offsetTop
    };
  }
  function f0(e, t, n) {
    return t === void 0 && (t = false), !n || t && n !== Le(e) ? false : t;
  }
  function hn(e, t, n, r) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    const o = e.getBoundingClientRect(), i = Iu(e);
    let s = ut(1);
    t && (r ? et(r) && (s = Fn(r)) : s = Fn(e));
    const l = f0(i, n, r) ? Zp(i) : ut(0);
    let u = (o.left + l.x) / s.x, a = (o.top + l.y) / s.y, c = o.width / s.x, d = o.height / s.y;
    if (i) {
      const h = Le(i), g = r && et(r) ? Le(r) : r;
      let w = h, y = Cl(w);
      for (; y && r && g !== w; ) {
        const x = Fn(y), p = y.getBoundingClientRect(), f = tt(y), m = p.left + (y.clientLeft + parseFloat(f.paddingLeft)) * x.x, S = p.top + (y.clientTop + parseFloat(f.paddingTop)) * x.y;
        u *= x.x, a *= x.y, c *= x.x, d *= x.y, u += m, a += S, w = Le(y), y = Cl(w);
      }
    }
    return di({
      width: c,
      height: d,
      x: u,
      y: a
    });
  }
  function zu(e, t) {
    const n = Ui(e).scrollLeft;
    return t ? t.left + n : hn(dt(e)).left + n;
  }
  function Jp(e, t, n) {
    n === void 0 && (n = false);
    const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : zu(e, r)), i = r.top + t.scrollTop;
    return {
      x: o,
      y: i
    };
  }
  function d0(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed", s = dt(r), l = t ? bi(t.floating) : false;
    if (r === s || l && i) return n;
    let u = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = ut(1);
    const c = ut(0), d = ct(r);
    if ((d || !d && !i) && ((er(r) !== "body" || Jr(s)) && (u = Ui(r)), ct(r))) {
      const g = hn(r);
      a = Fn(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
    }
    const h = s && !d && !i ? Jp(s, u, true) : ut(0);
    return {
      width: n.width * a.x,
      height: n.height * a.y,
      x: n.x * a.x - u.scrollLeft * a.x + c.x + h.x,
      y: n.y * a.y - u.scrollTop * a.y + c.y + h.y
    };
  }
  function p0(e) {
    return Array.from(e.getClientRects());
  }
  function h0(e) {
    const t = dt(e), n = Ui(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + zu(e);
    const l = -n.scrollTop;
    return tt(r).direction === "rtl" && (s += Oe(t.clientWidth, r.clientWidth) - o), {
      width: o,
      height: i,
      x: s,
      y: l
    };
  }
  function m0(e, t) {
    const n = Le(e), r = dt(e), o = n.visualViewport;
    let i = r.clientWidth, s = r.clientHeight, l = 0, u = 0;
    if (o) {
      i = o.width, s = o.height;
      const a = Du();
      (!a || a && t === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l,
      y: u
    };
  }
  function y0(e, t) {
    const n = hn(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ct(e) ? Fn(e) : ut(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, u = o * i.x, a = r * i.y;
    return {
      width: s,
      height: l,
      x: u,
      y: a
    };
  }
  function Sc(e, t, n) {
    let r;
    if (t === "viewport") r = m0(e, n);
    else if (t === "document") r = h0(dt(e));
    else if (et(t)) r = y0(t, n);
    else {
      const o = Zp(e);
      r = {
        x: t.x - o.x,
        y: t.y - o.y,
        width: t.width,
        height: t.height
      };
    }
    return di(r);
  }
  function eh(e, t) {
    const n = Yt(e);
    return n === t || !et(n) || Qn(n) ? false : tt(n).position === "fixed" || eh(n, t);
  }
  function v0(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Qr(e, [], false).filter((l) => et(l) && er(l) !== "body"), o = null;
    const i = tt(e).position === "fixed";
    let s = i ? Yt(e) : e;
    for (; et(s) && !Qn(s); ) {
      const l = tt(s), u = Mu(s);
      !u && l.position === "fixed" && (o = null), (i ? !u && !o : !u && l.position === "static" && !!o && [
        "absolute",
        "fixed"
      ].includes(o.position) || Jr(s) && !u && eh(e, s)) ? r = r.filter((c) => c !== s) : o = l, s = Yt(s);
    }
    return t.set(e, r), r;
  }
  function g0(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [
      ...n === "clippingAncestors" ? bi(t) ? [] : v0(t, this._c) : [].concat(n),
      r
    ], l = s[0], u = s.reduce((a, c) => {
      const d = Sc(t, c, o);
      return a.top = Oe(d.top, a.top), a.right = Kt(d.right, a.right), a.bottom = Kt(d.bottom, a.bottom), a.left = Oe(d.left, a.left), a;
    }, Sc(t, l, o));
    return {
      width: u.right - u.left,
      height: u.bottom - u.top,
      x: u.left,
      y: u.top
    };
  }
  function w0(e) {
    const { width: t, height: n } = Xp(e);
    return {
      width: t,
      height: n
    };
  }
  function x0(e, t, n) {
    const r = ct(t), o = dt(t), i = n === "fixed", s = hn(e, true, i, t);
    let l = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const u = ut(0);
    if (r || !r && !i) if ((er(t) !== "body" || Jr(o)) && (l = Ui(t)), r) {
      const h = hn(t, true, i, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else o && (u.x = zu(o));
    const a = o && !r && !i ? Jp(o, l) : ut(0), c = s.left + l.scrollLeft - u.x - a.x, d = s.top + l.scrollTop - u.y - a.y;
    return {
      x: c,
      y: d,
      width: s.width,
      height: s.height
    };
  }
  function Ss(e) {
    return tt(e).position === "static";
  }
  function Ec(e, t) {
    if (!ct(e) || tt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return dt(e) === n && (n = n.ownerDocument.body), n;
  }
  function th(e, t) {
    const n = Le(e);
    if (bi(e)) return n;
    if (!ct(e)) {
      let o = Yt(e);
      for (; o && !Qn(o); ) {
        if (et(o) && !Ss(o)) return o;
        o = Yt(o);
      }
      return n;
    }
    let r = Ec(e, t);
    for (; r && u0(r) && Ss(r); ) r = Ec(r, t);
    return r && Qn(r) && Ss(r) && !Mu(r) ? n : r || a0(e) || n;
  }
  const S0 = async function(e) {
    const t = this.getOffsetParent || th, n = this.getDimensions, r = await n(e.floating);
    return {
      reference: x0(e.reference, await t(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: r.width,
        height: r.height
      }
    };
  };
  function E0(e) {
    return tt(e).direction === "rtl";
  }
  const C0 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: d0,
    getDocumentElement: dt,
    getClippingRect: g0,
    getOffsetParent: th,
    getElementRects: S0,
    getClientRects: p0,
    getDimensions: w0,
    getScale: Fn,
    isElement: et,
    isRTL: E0
  };
  function nh(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
  }
  function k0(e, t) {
    let n = null, r;
    const o = dt(e);
    function i() {
      var l;
      clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
    }
    function s(l, u) {
      l === void 0 && (l = false), u === void 0 && (u = 1), i();
      const a = e.getBoundingClientRect(), { left: c, top: d, width: h, height: g } = a;
      if (l || t(), !h || !g) return;
      const w = Eo(d), y = Eo(o.clientWidth - (c + h)), x = Eo(o.clientHeight - (d + g)), p = Eo(c), m = {
        rootMargin: -w + "px " + -y + "px " + -x + "px " + -p + "px",
        threshold: Oe(0, Kt(1, u)) || 1
      };
      let S = true;
      function E(P) {
        const C = P[0].intersectionRatio;
        if (C !== u) {
          if (!S) return s();
          C ? s(false, C) : r = setTimeout(() => {
            s(false, 1e-7);
          }, 1e3);
        }
        C === 1 && !nh(a, e.getBoundingClientRect()) && s(), S = false;
      }
      try {
        n = new IntersectionObserver(E, {
          ...m,
          root: o.ownerDocument
        });
      } catch {
        n = new IntersectionObserver(E, m);
      }
      n.observe(e);
    }
    return s(true), i;
  }
  function P0(e, t, n, r) {
    r === void 0 && (r = {});
    const { ancestorScroll: o = true, ancestorResize: i = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: u = false } = r, a = Iu(e), c = o || i ? [
      ...a ? Qr(a) : [],
      ...Qr(t)
    ] : [];
    c.forEach((p) => {
      o && p.addEventListener("scroll", n, {
        passive: true
      }), i && p.addEventListener("resize", n);
    });
    const d = a && l ? k0(a, n) : null;
    let h = -1, g = null;
    s && (g = new ResizeObserver((p) => {
      let [f] = p;
      f && f.target === a && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        var m;
        (m = g) == null || m.observe(t);
      })), n();
    }), a && !u && g.observe(a), g.observe(t));
    let w, y = u ? hn(e) : null;
    u && x();
    function x() {
      const p = hn(e);
      y && !nh(y, p) && n(), y = p, w = requestAnimationFrame(x);
    }
    return n(), () => {
      var p;
      c.forEach((f) => {
        o && f.removeEventListener("scroll", n), i && f.removeEventListener("resize", n);
      }), d == null ? void 0 : d(), (p = g) == null || p.disconnect(), g = null, u && cancelAnimationFrame(w);
    };
  }
  const T0 = o0, R0 = i0, _0 = t0, O0 = l0, N0 = n0, Cc = e0, A0 = s0, L0 = (e, t, n) => {
    const r = /* @__PURE__ */ new Map(), o = {
      platform: C0,
      ...n
    }, i = {
      ...o.platform,
      _c: r
    };
    return Jw(e, t, {
      ...o,
      platform: i
    });
  };
  var Fo = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
  function pi(e, t) {
    if (e === t) return true;
    if (typeof e != typeof t) return false;
    if (typeof e == "function" && e.toString() === t.toString()) return true;
    let n, r, o;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (n = e.length, n !== t.length) return false;
        for (r = n; r-- !== 0; ) if (!pi(e[r], t[r])) return false;
        return true;
      }
      if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return false;
      for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
      for (r = n; r-- !== 0; ) {
        const i = o[r];
        if (!(i === "_owner" && e.$$typeof) && !pi(e[i], t[i])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function rh(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function kc(e, t) {
    const n = rh(e);
    return Math.round(t * n) / n;
  }
  function Es(e) {
    const t = v.useRef(e);
    return Fo(() => {
      t.current = e;
    }), t;
  }
  function M0(e) {
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: s } = {}, transform: l = true, whileElementsMounted: u, open: a } = e, [c, d] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: false
    }), [h, g] = v.useState(r);
    pi(h, r) || g(r);
    const [w, y] = v.useState(null), [x, p] = v.useState(null), f = v.useCallback((T) => {
      T !== P.current && (P.current = T, y(T));
    }, []), m = v.useCallback((T) => {
      T !== C.current && (C.current = T, p(T));
    }, []), S = i || w, E = s || x, P = v.useRef(null), C = v.useRef(null), _ = v.useRef(c), I = u != null, N = Es(u), F = Es(o), D = Es(a), V = v.useCallback(() => {
      if (!P.current || !C.current) return;
      const T = {
        placement: t,
        strategy: n,
        middleware: h
      };
      F.current && (T.platform = F.current), L0(P.current, C.current, T).then((O) => {
        const M = {
          ...O,
          isPositioned: D.current !== false
        };
        L.current && !pi(_.current, M) && (_.current = M, Zr.flushSync(() => {
          d(M);
        }));
      });
    }, [
      h,
      t,
      n,
      F,
      D
    ]);
    Fo(() => {
      a === false && _.current.isPositioned && (_.current.isPositioned = false, d((T) => ({
        ...T,
        isPositioned: false
      })));
    }, [
      a
    ]);
    const L = v.useRef(false);
    Fo(() => (L.current = true, () => {
      L.current = false;
    }), []), Fo(() => {
      if (S && (P.current = S), E && (C.current = E), S && E) {
        if (N.current) return N.current(S, E, V);
        V();
      }
    }, [
      S,
      E,
      V,
      N,
      I
    ]);
    const W = v.useMemo(() => ({
      reference: P,
      floating: C,
      setReference: f,
      setFloating: m
    }), [
      f,
      m
    ]), j = v.useMemo(() => ({
      reference: S,
      floating: E
    }), [
      S,
      E
    ]), B = v.useMemo(() => {
      const T = {
        position: n,
        left: 0,
        top: 0
      };
      if (!j.floating) return T;
      const O = kc(j.floating, c.x), M = kc(j.floating, c.y);
      return l ? {
        ...T,
        transform: "translate(" + O + "px, " + M + "px)",
        ...rh(j.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: O,
        top: M
      };
    }, [
      n,
      l,
      j.floating,
      c.x,
      c.y
    ]);
    return v.useMemo(() => ({
      ...c,
      update: V,
      refs: W,
      elements: j,
      floatingStyles: B
    }), [
      c,
      V,
      W,
      j,
      B
    ]);
  }
  const D0 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r) ? r.current != null ? Cc({
          element: r.current,
          padding: o
        }).fn(n) : {} : r ? Cc({
          element: r,
          padding: o
        }).fn(n) : {};
      }
    };
  }, I0 = (e, t) => ({
    ...T0(e),
    options: [
      e,
      t
    ]
  }), z0 = (e, t) => ({
    ...R0(e),
    options: [
      e,
      t
    ]
  }), F0 = (e, t) => ({
    ...A0(e),
    options: [
      e,
      t
    ]
  }), j0 = (e, t) => ({
    ..._0(e),
    options: [
      e,
      t
    ]
  }), b0 = (e, t) => ({
    ...O0(e),
    options: [
      e,
      t
    ]
  }), U0 = (e, t) => ({
    ...N0(e),
    options: [
      e,
      t
    ]
  }), $0 = (e, t) => ({
    ...D0(e),
    options: [
      e,
      t
    ]
  });
  var V0 = "Arrow", oh = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return k.jsx(Te.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : k.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
  oh.displayName = V0;
  var B0 = oh;
  H0 = function(e) {
    const [t, n] = v.useState(void 0);
    return pn(() => {
      if (e) {
        n({
          width: e.offsetWidth,
          height: e.offsetHeight
        });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize, a = Array.isArray(u) ? u[0] : u;
            s = a.inlineSize, l = a.blockSize;
          } else s = e.offsetWidth, l = e.offsetHeight;
          n({
            width: s,
            height: l
          });
        });
        return r.observe(e, {
          box: "border-box"
        }), () => r.unobserve(e);
      } else n(void 0);
    }, [
      e
    ]), t;
  };
  var ih = "Popper", [sh, lh] = Mi(ih), [Fx, uh] = sh(ih), ah = "PopperAnchor", ch = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = uh(ah, n), s = v.useRef(null), l = Je(t, s);
    return v.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : k.jsx(Te.div, {
      ...o,
      ref: l
    });
  });
  ch.displayName = ah;
  var Fu = "PopperContent", [W0, Q0] = sh(Fu), fh = v.forwardRef((e, t) => {
    var _a3, _b2, _c3, _d3, _e11, _f3;
    const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: i = "center", alignOffset: s = 0, arrowPadding: l = 0, avoidCollisions: u = true, collisionBoundary: a = [], collisionPadding: c = 0, sticky: d = "partial", hideWhenDetached: h = false, updatePositionStrategy: g = "optimized", onPlaced: w, ...y } = e, x = uh(Fu, n), [p, f] = v.useState(null), m = Je(t, (nt) => f(nt)), [S, E] = v.useState(null), P = H0(S), C = (P == null ? void 0 : P.width) ?? 0, _ = (P == null ? void 0 : P.height) ?? 0, I = r + (i !== "center" ? "-" + i : ""), N = typeof c == "number" ? c : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...c
    }, F = Array.isArray(a) ? a : [
      a
    ], D = F.length > 0, V = {
      padding: N,
      boundary: F.filter(G0),
      altBoundary: D
    }, { refs: L, floatingStyles: W, placement: j, isPositioned: B, middlewareData: T } = M0({
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...nt) => P0(...nt, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        I0({
          mainAxis: o + _,
          alignmentAxis: s
        }),
        u && z0({
          mainAxis: true,
          crossAxis: false,
          limiter: d === "partial" ? F0() : void 0,
          ...V
        }),
        u && j0({
          ...V
        }),
        b0({
          ...V,
          apply: ({ elements: nt, rects: bu, availableWidth: kh, availableHeight: Ph }) => {
            const { width: Th, height: Rh } = bu.reference, eo = nt.floating.style;
            eo.setProperty("--radix-popper-available-width", `${kh}px`), eo.setProperty("--radix-popper-available-height", `${Ph}px`), eo.setProperty("--radix-popper-anchor-width", `${Th}px`), eo.setProperty("--radix-popper-anchor-height", `${Rh}px`);
          }
        }),
        S && $0({
          element: S,
          padding: l
        }),
        Y0({
          arrowWidth: C,
          arrowHeight: _
        }),
        h && U0({
          strategy: "referenceHidden",
          ...V
        })
      ]
    }), [O, M] = hh(j), U = at(w);
    pn(() => {
      B && (U == null ? void 0 : U());
    }, [
      B,
      U
    ]);
    const q = (_a3 = T.arrow) == null ? void 0 : _a3.x, Be = (_b2 = T.arrow) == null ? void 0 : _b2.y, ze = ((_c3 = T.arrow) == null ? void 0 : _c3.centerOffset) !== 0, [tr, pt] = v.useState();
    return pn(() => {
      p && pt(window.getComputedStyle(p).zIndex);
    }, [
      p
    ]), k.jsx("div", {
      ref: L.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...W,
        transform: B ? W.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: tr,
        "--radix-popper-transform-origin": [
          (_d3 = T.transformOrigin) == null ? void 0 : _d3.x,
          (_e11 = T.transformOrigin) == null ? void 0 : _e11.y
        ].join(" "),
        ...((_f3 = T.hide) == null ? void 0 : _f3.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: e.dir,
      children: k.jsx(W0, {
        scope: n,
        placedSide: O,
        onArrowChange: E,
        arrowX: q,
        arrowY: Be,
        shouldHideArrow: ze,
        children: k.jsx(Te.div, {
          "data-side": O,
          "data-align": M,
          ...y,
          ref: m,
          style: {
            ...y.style,
            animation: B ? void 0 : "none"
          }
        })
      })
    });
  });
  fh.displayName = Fu;
  var dh = "PopperArrow", K0 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, ph = v.forwardRef(function(t, n) {
    const { __scopePopper: r, ...o } = t, i = Q0(dh, r), s = K0[i.placedSide];
    return k.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0
      },
      children: k.jsx(B0, {
        ...o,
        ref: n,
        style: {
          ...o.style,
          display: "block"
        }
      })
    });
  });
  ph.displayName = dh;
  function G0(e) {
    return e !== null;
  }
  var Y0 = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var _a3, _b2, _c3;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((_a3 = o.arrow) == null ? void 0 : _a3.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [a, c] = hh(n), d = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], h = (((_b2 = o.arrow) == null ? void 0 : _b2.x) ?? 0) + l / 2, g = (((_c3 = o.arrow) == null ? void 0 : _c3.y) ?? 0) + u / 2;
      let w = "", y = "";
      return a === "bottom" ? (w = s ? d : `${h}px`, y = `${-u}px`) : a === "top" ? (w = s ? d : `${h}px`, y = `${r.floating.height + u}px`) : a === "right" ? (w = `${-u}px`, y = s ? d : `${g}px`) : a === "left" && (w = `${r.floating.width + u}px`, y = s ? d : `${g}px`), {
        data: {
          x: w,
          y
        }
      };
    }
  });
  function hh(e) {
    const [t, n = "center"] = e.split("-");
    return [
      t,
      n
    ];
  }
  var q0 = ch, X0 = fh, Z0 = ph, [$i] = Mi("Tooltip", [
    lh
  ]), ju = lh(), mh = "TooltipProvider", J0 = 700, Pc = "tooltip.open", [ex, yh] = $i(mh), vh = (e) => {
    const { __scopeTooltip: t, delayDuration: n = J0, skipDelayDuration: r = 300, disableHoverableContent: o = false, children: i } = e, s = v.useRef(true), l = v.useRef(false), u = v.useRef(0);
    return v.useEffect(() => {
      const a = u.current;
      return () => window.clearTimeout(a);
    }, []), k.jsx(ex, {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: v.useCallback(() => {
        window.clearTimeout(u.current), s.current = false;
      }, []),
      onClose: v.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(() => s.current = true, r);
      }, [
        r
      ]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: v.useCallback((a) => {
        l.current = a;
      }, []),
      disableHoverableContent: o,
      children: i
    });
  };
  vh.displayName = mh;
  var gh = "Tooltip", [jx, Vi] = $i(gh), kl = "TooltipTrigger", tx = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Vi(kl, n), i = yh(kl, n), s = ju(n), l = v.useRef(null), u = Je(t, l, o.onTriggerChange), a = v.useRef(false), c = v.useRef(false), d = v.useCallback(() => a.current = false, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", d), [
      d
    ]), k.jsx(q0, {
      asChild: true,
      ...s,
      children: k.jsx(Te.button, {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: ie(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), c.current = true);
        }),
        onPointerLeave: ie(e.onPointerLeave, () => {
          o.onTriggerLeave(), c.current = false;
        }),
        onPointerDown: ie(e.onPointerDown, () => {
          o.open && o.onClose(), a.current = true, document.addEventListener("pointerup", d, {
            once: true
          });
        }),
        onFocus: ie(e.onFocus, () => {
          a.current || o.onOpen();
        }),
        onBlur: ie(e.onBlur, o.onClose),
        onClick: ie(e.onClick, o.onClose)
      })
    });
  });
  tx.displayName = kl;
  var nx = "TooltipPortal", [bx, rx] = $i(nx, {
    forceMount: void 0
  }), Kn = "TooltipContent", wh = v.forwardRef((e, t) => {
    const n = rx(Kn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = Vi(Kn, e.__scopeTooltip);
    return k.jsx(Pu, {
      present: r || s.open,
      children: s.disableHoverableContent ? k.jsx(xh, {
        side: o,
        ...i,
        ref: t
      }) : k.jsx(ox, {
        side: o,
        ...i,
        ref: t
      })
    });
  }), ox = v.forwardRef((e, t) => {
    const n = Vi(Kn, e.__scopeTooltip), r = yh(Kn, e.__scopeTooltip), o = v.useRef(null), i = Je(t, o), [s, l] = v.useState(null), { trigger: u, onClose: a } = n, c = o.current, { onPointerInTransitChange: d } = r, h = v.useCallback(() => {
      l(null), d(false);
    }, [
      d
    ]), g = v.useCallback((w, y) => {
      const x = w.currentTarget, p = {
        x: w.clientX,
        y: w.clientY
      }, f = ax(p, x.getBoundingClientRect()), m = cx(p, f), S = fx(y.getBoundingClientRect()), E = px([
        ...m,
        ...S
      ]);
      l(E), d(true);
    }, [
      d
    ]);
    return v.useEffect(() => () => h(), [
      h
    ]), v.useEffect(() => {
      if (u && c) {
        const w = (x) => g(x, c), y = (x) => g(x, u);
        return u.addEventListener("pointerleave", w), c.addEventListener("pointerleave", y), () => {
          u.removeEventListener("pointerleave", w), c.removeEventListener("pointerleave", y);
        };
      }
    }, [
      u,
      c,
      g,
      h
    ]), v.useEffect(() => {
      if (s) {
        const w = (y) => {
          const x = y.target, p = {
            x: y.clientX,
            y: y.clientY
          }, f = (u == null ? void 0 : u.contains(x)) || (c == null ? void 0 : c.contains(x)), m = !dx(p, s);
          f ? h() : m && (h(), a());
        };
        return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w);
      }
    }, [
      u,
      c,
      s,
      a,
      h
    ]), k.jsx(xh, {
      ...e,
      ref: i
    });
  }), [ix, sx] = $i(gh, {
    isInside: false
  }), lx = mg("TooltipContent"), xh = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l } = e, u = Vi(Kn, n), a = ju(n), { onClose: c } = u;
    return v.useEffect(() => (document.addEventListener(Pc, c), () => document.removeEventListener(Pc, c)), [
      c
    ]), v.useEffect(() => {
      if (u.trigger) {
        const d = (h) => {
          var _a3;
          ((_a3 = h.target) == null ? void 0 : _a3.contains(u.trigger)) && c();
        };
        return window.addEventListener("scroll", d, {
          capture: true
        }), () => window.removeEventListener("scroll", d, {
          capture: true
        });
      }
    }, [
      u.trigger,
      c
    ]), k.jsx(ku, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: (d) => d.preventDefault(),
      onDismiss: c,
      children: k.jsxs(X0, {
        "data-state": u.stateAttribute,
        ...a,
        ...l,
        ref: t,
        style: {
          ...l.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [
          k.jsx(lx, {
            children: r
          }),
          k.jsx(ix, {
            scope: n,
            isInside: true,
            children: k.jsx(Fg, {
              id: u.contentId,
              role: "tooltip",
              children: o || r
            })
          })
        ]
      })
    });
  });
  wh.displayName = Kn;
  var Sh = "TooltipArrow", ux = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ju(n);
    return sx(Sh, n).isInside ? null : k.jsx(Z0, {
      ...o,
      ...r,
      ref: t
    });
  });
  ux.displayName = Sh;
  function ax(e, t) {
    const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
      case i:
        return "left";
      case o:
        return "right";
      case n:
        return "top";
      case r:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function cx(e, t, n = 5) {
    const r = [];
    switch (t) {
      case "top":
        r.push({
          x: e.x - n,
          y: e.y + n
        }, {
          x: e.x + n,
          y: e.y + n
        });
        break;
      case "bottom":
        r.push({
          x: e.x - n,
          y: e.y - n
        }, {
          x: e.x + n,
          y: e.y - n
        });
        break;
      case "left":
        r.push({
          x: e.x + n,
          y: e.y - n
        }, {
          x: e.x + n,
          y: e.y + n
        });
        break;
      case "right":
        r.push({
          x: e.x - n,
          y: e.y - n
        }, {
          x: e.x - n,
          y: e.y + n
        });
        break;
    }
    return r;
  }
  function fx(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
      {
        x: o,
        y: t
      },
      {
        x: n,
        y: t
      },
      {
        x: n,
        y: r
      },
      {
        x: o,
        y: r
      }
    ];
  }
  function dx(e, t) {
    const { x: n, y: r } = e;
    let o = false;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
      const l = t[i].x, u = t[i].y, a = t[s].x, c = t[s].y;
      u > r != c > r && n < (a - l) * (r - u) / (c - u) + l && (o = !o);
    }
    return o;
  }
  function px(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), hx(t);
  }
  function hx(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      for (; t.length >= 2; ) {
        const i = t[t.length - 1], s = t[t.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
        else break;
      }
      t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const o = e[r];
      for (; n.length >= 2; ) {
        const i = n[n.length - 1], s = n[n.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
        else break;
      }
      n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
  }
  var mx = vh, Eh = wh;
  const yx = mx, vx = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => k.jsx(Eh, {
    ref: r,
    sideOffset: t,
    className: Jt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
    ...n
  }));
  vx.displayName = Eh.displayName;
  let gx;
  gx = zp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-primary-border",
        destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
        outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
        secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
        ghost: "border border-transparent"
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  });
  Ch = v.forwardRef(({ className: e, variant: t, size: n, asChild: r = false, ...o }, i) => {
    const s = r ? pg : "button";
    return k.jsx(s, {
      className: Jt(gx({
        variant: t,
        size: n,
        className: e
      })),
      ref: i,
      ...o
    });
  });
  Ch.displayName = "Button";
  class wx extends v.Component {
    constructor() {
      super(...arguments), this.state = {
        hasError: false,
        error: null
      };
    }
    static getDerivedStateFromError(t) {
      return {
        hasError: true,
        error: t
      };
    }
    componentDidCatch(t, n) {
      console.error("Uncaught error:", t, n);
    }
    render() {
      var _a3;
      return this.state.hasError ? this.props.fallback ? this.props.fallback : k.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-zinc-950 p-4",
        children: k.jsxs("div", {
          className: "max-w-md w-full bg-zinc-900 border border-red-900/50 rounded-2xl p-8 text-center shadow-2xl",
          children: [
            k.jsx("div", {
              className: "w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6",
              children: k.jsx(iw, {
                className: "w-8 h-8 text-red-500"
              })
            }),
            k.jsx("h2", {
              className: "text-2xl font-bold mb-2",
              children: "Something went wrong"
            }),
            k.jsx("p", {
              className: "text-zinc-400 mb-6 text-sm",
              children: "We encountered an unexpected error. The application state has been captured."
            }),
            k.jsx("div", {
              className: "p-4 bg-black/40 rounded-lg text-left mb-6 overflow-hidden",
              children: k.jsx("code", {
                className: "text-xs text-red-300 font-mono break-words line-clamp-3",
                children: (_a3 = this.state.error) == null ? void 0 : _a3.message
              })
            }),
            k.jsxs(Ch, {
              onClick: () => {
                this.setState({
                  hasError: false
                }), window.location.href = "/";
              },
              className: "w-full bg-red-600 hover:bg-red-700 text-white",
              children: [
                k.jsx(lw, {
                  className: "w-4 h-4 mr-2"
                }),
                "Reload Application"
              ]
            })
          ]
        })
      }) : this.props.children;
    }
  }
  const Re = {
    siteName: "VaultBridge",
    title: "VaultBridge | Secure Encrypted File Sharing & Transfer",
    description: "Share sensitive files securely with end-to-end AES-256 encryption. Self-destructing vaults, P2P transfer, zero-knowledge privacy. No account required.",
    keywords: "secure file transfer, encrypted file sharing, end-to-end encryption, privacy, self-destructing links",
    image: "/og-image.png",
    url: "https://vaultbridge.io",
    type: "website"
  }, Tc = {
    "/": {
      title: "VaultBridge | Secure Encrypted File Sharing & Transfer",
      description: "Share sensitive files securely with end-to-end AES-256 encryption. Self-destructing vaults, P2P transfer, zero-knowledge privacy. No account required."
    },
    "/upload": {
      title: "Upload Files Securely | VaultBridge",
      description: "Upload and encrypt your files with AES-256 encryption. Set expiration times and download limits. Create self-destructing secure vaults.",
      keywords: "secure upload, encrypt files, AES-256, self-destructing vault, secure file storage"
    },
    "/access": {
      title: "Access Secure Vault | VaultBridge",
      description: "Enter your 6-digit code to access encrypted files. Download securely with end-to-end encryption. Zero-knowledge vault access.",
      keywords: "access vault, download encrypted files, secure access, vault code"
    },
    "/live": {
      title: "Live P2P File Transfer | VaultBridge",
      description: "Transfer files directly between devices with WebRTC. Real-time P2P connection with end-to-end encryption. No server storage.",
      keywords: "P2P transfer, WebRTC file sharing, direct file transfer, peer-to-peer, real-time transfer"
    },
    "/success": {
      title: "Vault Created Successfully | VaultBridge",
      description: "Your secure vault has been created. Share the access code or link to allow others to download your encrypted files."
    },
    "/terms": {
      title: "Terms of Service | VaultBridge",
      description: "Read the terms of service for using VaultBridge secure file sharing platform."
    },
    "/privacy": {
      title: "Privacy Policy | VaultBridge",
      description: "Learn how VaultBridge protects your privacy with zero-knowledge architecture and end-to-end encryption."
    },
    "/how-it-works": {
      title: "How It Works | VaultBridge",
      description: "Learn how VaultBridge provides secure, encrypted file sharing with self-destructing vaults and P2P transfers."
    }
  };
  function xx(e) {
    const [t] = Zd();
    v.useEffect(() => {
      const n = "/" + t.split("/")[1], r = Tc[n] || Tc[t] || {}, o = {
        ...Re,
        ...r,
        ...e
      };
      document.title = o.title || Re.title;
      const i = (l, u, a) => {
        let c = document.querySelector(l);
        if (!c) {
          c = document.createElement("meta");
          const [d, h] = l.replace("meta[", "").replace("]", "").split("=");
          c.setAttribute(d, (h == null ? void 0 : h.replace(/"/g, "")) || ""), document.head.appendChild(c);
        }
        c.setAttribute(u, a);
      };
      i('meta[name="description"]', "content", o.description || Re.description), i('meta[name="keywords"]', "content", o.keywords || Re.keywords), i('meta[property="og:title"]', "content", o.title || Re.title), i('meta[property="og:description"]', "content", o.description || Re.description), i('meta[property="og:url"]', "content", `${Re.url}${t}`), i('meta[property="og:image"]', "content", o.image || Re.image), i('meta[property="og:type"]', "content", o.type || Re.type), i('meta[name="twitter:title"]', "content", o.title || Re.title), i('meta[name="twitter:description"]', "content", o.description || Re.description), i('meta[name="twitter:image"]', "content", o.image || Re.image);
      let s = document.querySelector('link[rel="canonical"]');
      s || (s = document.createElement("link"), s.rel = "canonical", document.head.appendChild(s)), s.href = `${Re.url}${t}`;
    }, [
      t,
      e
    ]);
  }
  const Sx = v.lazy(() => ft(() => import("./home-5bJ-QyQh.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))), Ex = v.lazy(() => ft(() => import("./upload-C85bMd3J.js"), __vite__mapDeps([15,6,2,16,17,12,7,3,18,19,5,20,21,11,22]))), Cx = v.lazy(() => ft(() => import("./access-BZcR4FdU.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([23,1,18,19,24,2,3,20,9,6,11,25,26,12,21]))), kx = v.lazy(() => ft(() => import("./download-DPoa0Uey.js"), __vite__mapDeps([27,18,19,28,1,2,25,21,29,30,26,4,6,24,16,5]))), Px = v.lazy(() => ft(() => import("./success-BgujtWVV.js"), __vite__mapDeps([31,28,1,18,11,20,2,17,30,25,26,4,13,6]))), Tx = v.lazy(() => ft(() => import("./not-found-BiLQvhnq.js"), [])), Rx = v.lazy(() => ft(() => import("./how-it-works-E7_QAo3M.js"), __vite__mapDeps([32,2,11,7,20,3,33,5,14,26,8,13,21,29,22,17]))), _x = v.lazy(() => ft(() => import("./terms-BocdbIOE.js"), __vite__mapDeps([34,11,20,2,35]))), Ox = v.lazy(() => ft(() => import("./privacy-BpMPb3f_.js"), __vite__mapDeps([36,11,20,2,3,29,35]))), Rc = v.lazy(() => ft(() => import("./live-C9xlLa6J.js"), __vite__mapDeps([37,2,20,5,6,10,8,11,33,30,7,12,21,26,3])));
  function Nx() {
    return k.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-black/90 text-primary",
      children: k.jsx(sw, {
        className: "w-10 h-10 animate-spin"
      })
    });
  }
  function Ax() {
    return xx(), k.jsxs(Mv, {
      children: [
        k.jsx(We, {
          path: "/",
          component: Sx
        }),
        k.jsx(We, {
          path: "/upload",
          component: Ex
        }),
        k.jsx(We, {
          path: "/access",
          component: Cx
        }),
        k.jsx(We, {
          path: "/download/:id",
          component: kx
        }),
        k.jsx(We, {
          path: "/success/:id",
          component: Px
        }),
        k.jsx(We, {
          path: "/how-it-works",
          component: Rx
        }),
        k.jsx(We, {
          path: "/terms",
          component: _x
        }),
        k.jsx(We, {
          path: "/privacy",
          component: Ox
        }),
        k.jsx(We, {
          path: "/live",
          component: Rc
        }),
        k.jsx(We, {
          path: "/live/:code",
          component: Rc
        }),
        k.jsx(We, {
          component: Tx
        })
      ]
    });
  }
  function Lx() {
    return k.jsx(ng, {
      client: ig,
      children: k.jsxs(yx, {
        children: [
          k.jsx(Hw, {}),
          k.jsx(wx, {
            children: k.jsx(v.Suspense, {
              fallback: k.jsx(Nx, {}),
              children: k.jsx(Ax, {})
            })
          })
        ]
      })
    });
  }
  "serviceWorker" in navigator && navigator.serviceWorker.getRegistrations().then((e) => {
    for (const t of e) t.unregister().then(() => {
      console.log("SW unregistered successfully");
    });
  });
  Vd(document.getElementById("root")).render(k.jsx(Lx, {}));
})();
export {
  Br as A,
  Ch as B,
  iw as C,
  Zv as D,
  zx as E,
  lw as F,
  Dx as L,
  Te as P,
  Nt as R,
  Ai as S,
  uw as X,
  ft as _,
  __tla,
  Jt as a,
  sw as b,
  Fi as c,
  Dg as d,
  Mi as e,
  wg as f,
  ie as g,
  Je as h,
  H0 as i,
  k as j,
  Zd as k,
  Mx as l,
  Fv as m,
  tc as n,
  Ke as o,
  Hv as p,
  Li as q,
  v as r,
  Ix as s,
  Iv as t,
  fg as u,
  zv as v,
  np as w,
  Gv as x,
  bv as y,
  ve as z
};
