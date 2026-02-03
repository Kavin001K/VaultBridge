import { c as T, r as c } from "./index-BpGdq6cX.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const y = T("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]), m = () => typeof window > "u" ? null : new (window.AudioContext || window.webkitAudioContext)(), d = { click: (e, i) => {
  const n = e.createOscillator(), t = e.createGain();
  n.connect(t), t.connect(e.destination), n.frequency.setValueAtTime(800, e.currentTime), n.frequency.exponentialRampToValueAtTime(600, e.currentTime + 0.05), t.gain.setValueAtTime(i * 0.3, e.currentTime), t.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.05), n.start(e.currentTime), n.stop(e.currentTime + 0.05);
}, success: (e, i) => {
  [523.25, 659.25, 783.99].forEach((t, o) => {
    const a = e.createOscillator(), r = e.createGain();
    a.connect(r), r.connect(e.destination), a.type = "sine", a.frequency.setValueAtTime(t, e.currentTime + o * 0.1), r.gain.setValueAtTime(0, e.currentTime + o * 0.1), r.gain.linearRampToValueAtTime(i * 0.2, e.currentTime + o * 0.1 + 0.02), r.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + o * 0.1 + 0.3), a.start(e.currentTime + o * 0.1), a.stop(e.currentTime + o * 0.1 + 0.3);
  });
}, error: (e, i) => {
  const n = e.createOscillator(), t = e.createGain();
  n.connect(t), t.connect(e.destination), n.type = "sawtooth", n.frequency.setValueAtTime(200, e.currentTime), n.frequency.linearRampToValueAtTime(150, e.currentTime + 0.15), t.gain.setValueAtTime(i * 0.15, e.currentTime), t.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.15), n.start(e.currentTime), n.stop(e.currentTime + 0.15);
}, unlock: (e, i) => {
  [300, 400, 500, 700].forEach((t, o) => {
    const a = e.createOscillator(), r = e.createGain();
    a.connect(r), r.connect(e.destination), a.type = "sine", a.frequency.setValueAtTime(t, e.currentTime + o * 0.08), r.gain.setValueAtTime(i * 0.15, e.currentTime + o * 0.08), r.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + o * 0.08 + 0.15), a.start(e.currentTime + o * 0.08), a.stop(e.currentTime + o * 0.08 + 0.15);
  });
}, lock: (e, i) => {
  const n = e.createOscillator(), t = e.createGain();
  n.connect(t), t.connect(e.destination), n.type = "triangle", n.frequency.setValueAtTime(600, e.currentTime), n.frequency.exponentialRampToValueAtTime(200, e.currentTime + 0.2), t.gain.setValueAtTime(i * 0.2, e.currentTime), t.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.2), n.start(e.currentTime), n.stop(e.currentTime + 0.2);
}, drop: (e, i) => {
  const n = e.createOscillator(), t = e.createGain();
  n.connect(t), t.connect(e.destination), n.type = "sine", n.frequency.setValueAtTime(400, e.currentTime), n.frequency.exponentialRampToValueAtTime(100, e.currentTime + 0.15), t.gain.setValueAtTime(i * 0.25, e.currentTime), t.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.15), n.start(e.currentTime), n.stop(e.currentTime + 0.15);
}, whoosh: (e, i) => {
  const n = e.sampleRate * 0.2, t = e.createBuffer(1, n, e.sampleRate), o = t.getChannelData(0);
  for (let s = 0; s < n; s++) o[s] = (Math.random() * 2 - 1) * (1 - s / n);
  const a = e.createBufferSource(), r = e.createGain(), u = e.createBiquadFilter();
  a.buffer = t, u.type = "bandpass", u.frequency.setValueAtTime(1e3, e.currentTime), u.frequency.exponentialRampToValueAtTime(3e3, e.currentTime + 0.1), a.connect(u), u.connect(r), r.connect(e.destination), r.gain.setValueAtTime(i * 0.1, e.currentTime), r.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.2), a.start(e.currentTime);
}, tick: (e, i) => {
  const n = e.createOscillator(), t = e.createGain();
  n.connect(t), t.connect(e.destination), n.type = "sine", n.frequency.setValueAtTime(1e3, e.currentTime), t.gain.setValueAtTime(i * 0.1, e.currentTime), t.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.02), n.start(e.currentTime), n.stop(e.currentTime + 0.02);
}, pop: (e, i) => {
  const n = e.createOscillator(), t = e.createGain();
  n.connect(t), t.connect(e.destination), n.type = "sine", n.frequency.setValueAtTime(400, e.currentTime), n.frequency.exponentialRampToValueAtTime(150, e.currentTime + 0.08), t.gain.setValueAtTime(i * 0.3, e.currentTime), t.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.08), n.start(e.currentTime), n.stop(e.currentTime + 0.08);
}, chime: (e, i) => {
  [880, 1100, 1320].forEach((t, o) => {
    const a = e.createOscillator(), r = e.createGain();
    a.connect(r), r.connect(e.destination), a.type = "sine", a.frequency.setValueAtTime(t, e.currentTime);
    const u = i * (0.2 / (o + 1));
    r.gain.setValueAtTime(u, e.currentTime), r.gain.exponentialRampToValueAtTime(1e-3, e.currentTime + 0.5), a.start(e.currentTime), a.stop(e.currentTime + 0.5);
  });
} }, p = () => typeof window > "u" ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches, f = () => {
  if (typeof window > "u") return true;
  const e = localStorage.getItem("vaultbridge-sounds");
  return e === null ? true : e === "true";
}, g = (e) => {
  typeof window < "u" && localStorage.setItem("vaultbridge-sounds", String(e));
};
function V() {
  const e = c.useRef(null), i = c.useRef(f());
  c.useEffect(() => {
    const r = () => {
      e.current || (e.current = m());
    }, u = () => {
      var _a;
      ((_a = e.current) == null ? void 0 : _a.state) === "suspended" && e.current.resume(), r();
    };
    return window.addEventListener("click", u, { once: true }), window.addEventListener("touchstart", u, { once: true }), window.addEventListener("keydown", u, { once: true }), () => {
      window.removeEventListener("click", u), window.removeEventListener("touchstart", u), window.removeEventListener("keydown", u);
    };
  }, []);
  const n = c.useCallback((r, u = 1) => {
    if (!i.current || p()) return;
    e.current || (e.current = m());
    const s = e.current;
    if (s) {
      s.state === "suspended" && s.resume();
      try {
        d[r](s, Math.min(1, Math.max(0, u)));
      } catch (l) {
        console.warn("Sound playback failed:", l);
      }
    }
  }, []), t = c.useCallback((r) => {
    i.current = r, g(r);
  }, []), o = c.useCallback(() => i.current, []), a = c.useCallback(() => {
    const r = !i.current;
    return t(r), r;
  }, [t]);
  return { play: n, setEnabled: t, isEnabled: o, toggle: a };
}
export {
  y as F,
  V as u
};
