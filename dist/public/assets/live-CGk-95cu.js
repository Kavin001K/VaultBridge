import { c as R, l as pe, r as o, u as ue, k as xe, j as e, B as b, X as fe, F as te } from "./index-DBEz4T_F.js";
import { m as n } from "./proxy-DPVbpoYq.js";
import { A as ge } from "./arrow-left-DJURWRcM.js";
import { Z as O } from "./zap-CML5d7vf.js";
import { A as D } from "./index-CZqhj4Dh.js";
import { a as be, S as ye } from "./sparkles-CPqTR4vH.js";
import { A as je, U as we } from "./users-Cb6IU6GF.js";
import { S as Ne } from "./shield-DSPMnaSr.js";
import { G as Ce, C as Q } from "./globe-DjwuILy2.js";
import { C as ve, a as Pe } from "./copy-rhA-UxmU.js";
import { U as ke } from "./upload-DWwdYbJh.js";
import { F as ae } from "./file-text-RzD9eSKC.js";
import { T as Se } from "./triangle-alert-DQlSNIAv.js";
import { D as se } from "./download-DI3ZSITq.js";
import { L as ze } from "./lock-BDXZ4Oeo.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const De = R("Link", [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Re = R("Radio", [["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }], ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }], ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ie = R("WifiOff", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Te = R("Wifi", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]]);
class Ee {
  constructor(a, r) {
    this.ws = null, this.peerConnection = null, this.dataChannel = null, this.callbacks = {}, this.isInitiator = false, this.isDataChannelOpen = false, this.messageQueue = [], this.connectionTimeout = null, this.iceCandidateQueue = [], this.hasRemoteDescription = false, this.reconnectAttempts = 0, this.maxReconnectAttempts = 3, this.rtcConfig = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun1.l.google.com:19302" }, { urls: "stun:stun2.l.google.com:19302" }, { urls: "stun:stun3.l.google.com:19302" }, { urls: "stun:stun4.l.google.com:19302" }, { urls: "stun:global.stun.twilio.com:3478" }, { urls: "turn:openrelay.metered.ca:80", username: "openrelayproject", credential: "openrelayproject" }, { urls: "turn:openrelay.metered.ca:443", username: "openrelayproject", credential: "openrelayproject" }, { urls: "turn:openrelay.metered.ca:443?transport=tcp", username: "openrelayproject", credential: "openrelayproject" }, { urls: "turn:a.relay.metered.ca:80", username: "e8d1d0e0b5a89e7e8b3c9b8a", credential: "mKzB+XRTH8gBVdxT" }, { urls: "turn:a.relay.metered.ca:443", username: "e8d1d0e0b5a89e7e8b3c9b8a", credential: "mKzB+XRTH8gBVdxT" }, { urls: "turn:a.relay.metered.ca:443?transport=tcp", username: "e8d1d0e0b5a89e7e8b3c9b8a", credential: "mKzB+XRTH8gBVdxT" }], iceCandidatePoolSize: 10, iceTransportPolicy: "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" }, this.roomId = a, this.isInitiator = r, console.log(`[P2P] Creating client: Room=${a}, Initiator=${r}`);
  }
  connect() {
    const a = window.location.protocol === "https:" ? "wss:" : "ws:", r = window.location.host, m = `${a}//${r}/ws-signal`;
    console.log(`[P2P] Connecting to signaling server: ${m}`), this.ws = new WebSocket(m), this.ws.onopen = () => {
      var _a;
      console.log("[P2P] WebSocket connected"), this.emit("status", "Connected to signaling server"), (_a = this.ws) == null ? void 0 : _a.send(JSON.stringify({ type: "join", roomId: this.roomId })), this.connectionTimeout = setTimeout(() => {
        this.isDataChannelOpen || (console.log("[P2P] Connection timeout - retrying..."), this.handleConnectionFailure());
      }, 6e4);
    }, this.ws.onmessage = async (f) => {
      var _a, _b, _c, _d;
      const c = JSON.parse(f.data);
      switch (console.log("[P2P] Received signal:", c.type), c.type) {
        case "joined":
          this.emit("status", `Joined room (${c.peerCount || 1} peer${c.peerCount > 1 ? "s" : ""})`);
          break;
        case "ready":
          this.emit("status", "Peer detected. Initializing P2P..."), this.isInitiator && await this.setupPeerConnection();
          break;
        case "offer":
          if (!this.isInitiator) {
            this.emit("status", "Received offer..."), await this.setupPeerConnection();
            try {
              await ((_a = this.peerConnection) == null ? void 0 : _a.setRemoteDescription(new RTCSessionDescription(c.payload))), this.hasRemoteDescription = true, await this.processIceCandidateQueue();
              const h = await ((_b = this.peerConnection) == null ? void 0 : _b.createAnswer());
              await ((_c = this.peerConnection) == null ? void 0 : _c.setLocalDescription(h)), this.sendSignal("answer", h);
            } catch (h) {
              console.error("[P2P] Error handling offer:", h);
            }
          }
          break;
        case "answer":
          if (this.isInitiator) {
            this.emit("status", "Received answer...");
            try {
              await ((_d = this.peerConnection) == null ? void 0 : _d.setRemoteDescription(new RTCSessionDescription(c.payload))), this.hasRemoteDescription = true, await this.processIceCandidateQueue();
            } catch (h) {
              console.error("[P2P] Error handling answer:", h);
            }
          }
          break;
        case "ice-candidate":
          c.payload && await this.handleIceCandidate(c.payload);
          break;
        case "error":
          console.error("[P2P] Server error:", c.payload), this.emit("error", c.payload);
          break;
      }
    }, this.ws.onerror = (f) => {
      console.error("[P2P] WebSocket error:", f), this.emit("error", "Signaling socket error");
    }, this.ws.onclose = () => {
      console.log("[P2P] WebSocket closed"), this.emit("status", "Signaling connection closed");
    };
  }
  async handleIceCandidate(a) {
    var _a;
    if (this.peerConnection) {
      if (!this.hasRemoteDescription) {
        console.log("[P2P] Queuing ICE candidate (waiting for remote description)"), this.iceCandidateQueue.push(a);
        return;
      }
      try {
        await this.peerConnection.addIceCandidate(new RTCIceCandidate(a)), console.log("[P2P] Added ICE candidate:", ((_a = a.candidate) == null ? void 0 : _a.slice(0, 50)) + "...");
      } catch (r) {
        console.warn("[P2P] Failed to add ICE candidate (non-critical):", r);
      }
    }
  }
  async processIceCandidateQueue() {
    for (console.log(`[P2P] Processing ${this.iceCandidateQueue.length} queued ICE candidates`); this.iceCandidateQueue.length > 0; ) {
      const a = this.iceCandidateQueue.shift();
      a && await this.handleIceCandidate(a);
    }
  }
  async setupPeerConnection() {
    var _a;
    if (console.log("[P2P] Setting up peer connection with config:", (_a = this.rtcConfig.iceServers) == null ? void 0 : _a.length, "ICE servers"), this.peerConnection = new RTCPeerConnection(this.rtcConfig), this.peerConnection.onicecandidate = (a) => {
      a.candidate && (console.log("[P2P] Sending ICE candidate:", a.candidate.type || "unknown"), this.sendSignal("ice-candidate", a.candidate.toJSON()));
    }, this.peerConnection.onicegatheringstatechange = () => {
      var _a2;
      const a = (_a2 = this.peerConnection) == null ? void 0 : _a2.iceGatheringState;
      console.log("[P2P] ICE gathering state:", a), a === "complete" && this.emit("status", "ICE gathering complete");
    }, this.peerConnection.oniceconnectionstatechange = () => {
      var _a2;
      const a = (_a2 = this.peerConnection) == null ? void 0 : _a2.iceConnectionState;
      switch (console.log("[P2P] ICE connection state:", a), a) {
        case "checking":
          this.emit("status", "Establishing connection...");
          break;
        case "connected":
        case "completed":
          this.emit("status", "ICE connected");
          break;
        case "failed":
          console.error("[P2P] ICE connection failed"), this.handleConnectionFailure();
          break;
        case "disconnected":
          this.emit("status", "Connection interrupted, attempting recovery..."), setTimeout(() => {
            var _a3;
            ((_a3 = this.peerConnection) == null ? void 0 : _a3.iceConnectionState) === "disconnected" && this.handleConnectionFailure();
          }, 5e3);
          break;
      }
    }, this.peerConnection.onconnectionstatechange = () => {
      var _a2;
      const a = (_a2 = this.peerConnection) == null ? void 0 : _a2.connectionState;
      switch (console.log("[P2P] Connection state:", a), a) {
        case "connected":
          this.emit("status", "Peer connected"), this.connectionTimeout && (clearTimeout(this.connectionTimeout), this.connectionTimeout = null), this.reconnectAttempts = 0;
          break;
        case "failed":
          this.handleConnectionFailure();
          break;
        case "disconnected":
          this.emit("status", "Peer disconnected");
          break;
      }
    }, this.isInitiator) {
      console.log("[P2P] Creating data channel"), this.dataChannel = this.peerConnection.createDataChannel("file-transfer", { ordered: true, maxRetransmits: 30 }), this.setupDataChannel(this.dataChannel);
      const a = await this.peerConnection.createOffer({ offerToReceiveAudio: false, offerToReceiveVideo: false });
      await this.peerConnection.setLocalDescription(a), this.sendSignal("offer", a);
    } else this.peerConnection.ondatachannel = (a) => {
      console.log("[P2P] Received data channel"), this.dataChannel = a.channel, this.setupDataChannel(this.dataChannel);
    };
  }
  handleConnectionFailure() {
    this.reconnectAttempts < this.maxReconnectAttempts ? (this.reconnectAttempts++, console.log(`[P2P] Reconnection attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}`), this.emit("status", `Connection unstable, retrying (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`), this.peerConnection && this.isInitiator && this.peerConnection.restartIce()) : (console.error("[P2P] All reconnection attempts failed"), this.emit("status", "Connection failed - firewall may be blocking P2P"), this.emit("failed", true));
  }
  setupDataChannel(a) {
    a.binaryType = "arraybuffer";
    try {
      a.bufferedAmountLowThreshold = 1024 * 1024;
    } catch {
    }
    a.onopen = () => {
      console.log("[P2P] Data channel open!"), this.isDataChannelOpen = true, this.emit("status", "Secure channel open. Ready to transfer."), this.emit("connected", true), this.flushMessageQueue();
    }, a.onclose = () => {
      console.log("[P2P] Data channel closed"), this.isDataChannelOpen = false, this.emit("status", "Data channel closed");
    }, a.onerror = (r) => {
      console.error("[P2P] Data channel error:", r), this.emit("error", "Data channel error");
    }, a.onmessage = (r) => this.handleDataMessage(r.data), a.onbufferedamountlow = () => {
      console.log("[P2P] Buffer low - can send more data");
    };
  }
  handleDataMessage(a) {
    this.emit("data", a);
  }
  flushMessageQueue() {
    var _a;
    for (console.log(`[P2P] Flushing ${this.messageQueue.length} queued messages`); this.messageQueue.length > 0 && this.isDataChannelOpen; ) {
      const a = this.messageQueue.shift();
      a && ((_a = this.dataChannel) == null ? void 0 : _a.readyState) === "open" && this.dataChannel.send(a);
    }
  }
  isReady() {
    var _a;
    return this.isDataChannelOpen && ((_a = this.dataChannel) == null ? void 0 : _a.readyState) === "open";
  }
  sendData(a) {
    var _a;
    if (((_a = this.dataChannel) == null ? void 0 : _a.readyState) === "open") {
      if (this.dataChannel.bufferedAmount > 16 * 1024 * 1024) {
        this.messageQueue.push(a);
        return;
      }
      this.dataChannel.send(a);
    } else this.messageQueue.push(a);
  }
  sendSignal(a, r) {
    var _a;
    ((_a = this.ws) == null ? void 0 : _a.readyState) === WebSocket.OPEN ? this.ws.send(JSON.stringify({ type: a, roomId: this.roomId, payload: r })) : console.warn("[P2P] Cannot send signal - WebSocket not open");
  }
  on(a, r) {
    this.callbacks[a] || (this.callbacks[a] = []), this.callbacks[a].push(r);
  }
  emit(a, r) {
    this.callbacks[a] && this.callbacks[a].forEach((m) => m(r));
  }
  close() {
    var _a, _b, _c;
    console.log("[P2P] Closing connection"), this.connectionTimeout && (clearTimeout(this.connectionTimeout), this.connectionTimeout = null), this.isDataChannelOpen = false, this.hasRemoteDescription = false, this.messageQueue = [], this.iceCandidateQueue = [], (_a = this.dataChannel) == null ? void 0 : _a.close(), (_b = this.peerConnection) == null ? void 0 : _b.close(), (_c = this.ws) == null ? void 0 : _c.close(), this.dataChannel = null, this.peerConnection = null, this.ws = null;
  }
}
const Me = () => Math.floor(1e5 + Math.random() * 9e5).toString();
function _e() {
  const [B, a] = pe("/live/:code"), r = B && (a == null ? void 0 : a.code), [m, f] = o.useState(r ? "receiver" : "landing"), [c, h] = o.useState(r ? a.code : ""), [y, C] = o.useState(["", "", "", "", "", ""]), [j, v] = o.useState([]), [W, p] = o.useState(""), [x, U] = o.useState(false), [g, I] = o.useState(false), [J, T] = o.useState(0), [P, K] = o.useState([]), [q, H] = o.useState(false), [E, M] = o.useState(false), [$, A] = o.useState(false), u = o.useRef(null), V = o.useRef(null), w = o.useRef([]), { toast: F } = ue(), [, k] = xe(), S = o.useRef([]), N = o.useRef(null);
  o.useEffect(() => (r && (a == null ? void 0 : a.code) && (f("receiver"), h(a.code), z(a.code, false)), () => {
    var _a;
    (_a = u.current) == null ? void 0 : _a.close();
  }), [r, a == null ? void 0 : a.code]);
  const ne = () => {
    const t = Me();
    h(t), f("sender"), p("Waiting for peer..."), z(t, true);
  }, G = () => {
    const t = y.join("");
    if (t.length !== 6) {
      F({ title: "Invalid Code", description: "Enter all 6 digits.", variant: "destructive" });
      return;
    }
    h(t), f("receiver"), p("Connecting..."), k(`/live/${t}`), z(t, false);
  }, z = (t, s) => {
    u.current && u.current.close();
    const i = new Ee(t, s);
    u.current = i, i.on("status", (l) => {
      x || p(l);
    }), i.on("connected", (l) => {
      l && (U(true), p(s ? "Connected! Ready to send." : "Connected! Awaiting files..."), F({ title: "\u{1F510} Secure Tunnel Active", description: "E2E encrypted.", className: "bg-emerald-900/90 border-emerald-500" }));
    }), i.on("data", (l) => re(l)), i.on("failed", () => {
      I(true), p("Connection failed.");
    }), i.connect();
  }, ie = async () => {
    if (!(!u.current || !j.length)) {
      A(true), p(`Sending ${j.length} file(s)...`);
      for (const t of j) {
        u.current.sendData(JSON.stringify({ type: "meta", name: t.name, size: t.size, mime: t.type })), await new Promise((d) => setTimeout(d, 100));
        const s = await t.arrayBuffer(), i = 16 * 1024, l = Math.ceil(s.byteLength / i);
        for (let d = 0; d < l; d++) u.current.sendData(s.slice(d * i, Math.min((d + 1) * i, s.byteLength))), d % 100 === 0 && await new Promise((L) => setTimeout(L, 10)), T(Math.round((d + 1) / l * 100));
        u.current.sendData(JSON.stringify({ type: "eof", name: t.name }));
      }
      A(false), p("Transfer complete!"), T(100);
    }
  }, re = (t) => {
    var _a;
    if (typeof t == "string") try {
      const s = JSON.parse(t);
      if (s.type === "meta") N.current = s, S.current = [], p(`Receiving: ${s.name}`);
      else if (s.type === "eof") {
        const i = new Blob(S.current, { type: (_a = N.current) == null ? void 0 : _a.mime });
        K((l) => [...l, { ...N.current, url: URL.createObjectURL(i) }]), p("File received!"), N.current = null, S.current = [];
      }
    } catch {
    }
    else N.current && S.current.push(t);
  }, oe = (t) => {
    t.target.files && v(Array.from(t.target.files));
  }, ce = (t) => {
    t.preventDefault(), M(false), t.dataTransfer.files && v(Array.from(t.dataTransfer.files));
  }, _ = (t) => t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(2)} MB`, X = async (t) => {
    await navigator.clipboard.writeText(t), H(true), F({ title: "Copied!" }), setTimeout(() => H(false), 2e3);
  }, le = (t, s) => {
    var _a, _b;
    if (!/^\d*$/.test(s)) return;
    if (s.length > 1) {
      const l = s.replace(/\D/g, "").slice(0, 6).split(""), d = [...y];
      l.forEach((L, ee) => {
        t + ee < 6 && (d[t + ee] = L);
      }), C(d), (_a = w.current[Math.min(t + l.length, 5)]) == null ? void 0 : _a.focus();
      return;
    }
    const i = [...y];
    i[t] = s, C(i), s && t < 5 && ((_b = w.current[t + 1]) == null ? void 0 : _b.focus());
  }, de = (t, s) => {
    var _a;
    s.key === "Backspace" && !y[t] && t > 0 && ((_a = w.current[t - 1]) == null ? void 0 : _a.focus()), s.key === "Enter" && y.join("").length === 6 && G();
  }, me = (t) => {
    var _a;
    t.preventDefault();
    const s = t.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    s && (C(s.split("").concat(Array(6 - s.length).fill("")).slice(0, 6)), (_a = w.current[Math.min(s.length, 5)]) == null ? void 0 : _a.focus());
  }, he = (t) => {
    const s = document.createElement("a");
    s.href = t.url, s.download = t.name, document.body.appendChild(s), s.click(), document.body.removeChild(s);
  }, Z = () => {
    var _a;
    (_a = u.current) == null ? void 0 : _a.close(), u.current = null, f("landing"), h(""), C(["", "", "", "", "", ""]), U(false), I(false), p(""), v([]), K([]), T(0), A(false), k("/live");
  }, Y = y.every((t) => t !== "");
  return e.jsxs("div", { className: "min-h-screen relative flex flex-col bg-[#0a0a0f] text-zinc-100 overflow-hidden", children: [e.jsxs("div", { className: "fixed inset-0", children: [e.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" }), e.jsx("div", { className: "absolute inset-0 grid-bg opacity-20" })] }), e.jsx(n.div, { animate: { x: [0, 30, 0], y: [0, -20, 0] }, transition: { duration: 12, repeat: 1 / 0 }, className: "fixed top-20 right-20 w-72 h-72 bg-amber-500/8 rounded-full blur-[120px]" }), e.jsx(n.div, { animate: { x: [0, -20, 0], y: [0, 20, 0] }, transition: { duration: 15, repeat: 1 / 0 }, className: "fixed bottom-20 left-20 w-56 h-56 bg-emerald-500/8 rounded-full blur-[100px]" }), e.jsxs("header", { className: "relative z-10 px-6 py-5 flex items-center justify-between border-b border-white/5", children: [e.jsxs(n.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, onClick: () => m === "landing" ? k("/") : Z(), className: "flex items-center gap-3 cursor-pointer group", children: [m !== "landing" && e.jsx(n.div, { whileHover: { x: -2 }, className: "p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:border-amber-500/30 transition-colors", children: e.jsx(ge, { className: "w-4 h-4 text-zinc-400" }) }), e.jsxs("div", { className: "relative", children: [e.jsx("div", { className: "p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/30", children: e.jsx(O, { className: "w-5 h-5 text-amber-400" }) }), e.jsx(n.div, { animate: { scale: [1, 1.3, 1] }, transition: { duration: 2, repeat: 1 / 0 }, className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-[#0a0a0f]" })] }), e.jsxs("div", { children: [e.jsxs("span", { className: "font-mono font-bold tracking-tight", children: ["LIVE", e.jsx("span", { className: "text-amber-400", children: "LINK" })] }), e.jsx("p", { className: "text-[10px] text-zinc-600 tracking-widest", children: "PEER-TO-PEER" })] })] }), e.jsx(D, { children: m !== "landing" && e.jsxs(n.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, className: `flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-sm ${x ? "bg-emerald-500/10 border-emerald-500/30" : g ? "bg-red-500/10 border-red-500/30" : "bg-amber-500/10 border-amber-500/30"}`, children: [e.jsx(n.div, { animate: !x && !g ? { scale: [1, 1.4, 1] } : {}, transition: { duration: 1, repeat: 1 / 0 }, className: `w-2 h-2 rounded-full ${x ? "bg-emerald-400" : g ? "bg-red-400" : "bg-amber-400"}` }), e.jsx("span", { className: `text-xs font-medium ${x ? "text-emerald-400" : g ? "text-red-400" : "text-amber-400"}`, children: x ? "SECURE" : g ? "FAILED" : "LINKING" })] }) })] }), e.jsx("main", { className: "relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8", children: e.jsxs(D, { mode: "wait", children: [m === "landing" && e.jsxs(n.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 }, transition: { duration: 0.4 }, className: "w-full max-w-3xl", children: [e.jsxs("div", { className: "text-center mb-10", children: [e.jsx(n.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { type: "spring", delay: 0.1 }, className: "inline-block mb-5", children: e.jsxs("div", { className: "relative", children: [e.jsx("div", { className: "p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/20 shadow-2xl shadow-amber-500/10", children: e.jsx(O, { className: "w-12 h-12 text-amber-400" }) }), e.jsx(n.div, { animate: { rotate: 360 }, transition: { duration: 25, repeat: 1 / 0, ease: "linear" }, className: "absolute -inset-3 border border-dashed border-amber-500/20 rounded-[1.5rem]" }), e.jsx(n.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.3 }, className: "absolute -top-1 -right-1 p-1 bg-emerald-500 rounded-full border-2 border-[#0a0a0f]", children: e.jsx(be, { className: "w-2.5 h-2.5 text-white" }) })] }) }), e.jsxs(n.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "text-4xl md:text-5xl font-bold tracking-tight mb-3", children: ["Live ", e.jsx("span", { className: "bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent", children: "P2P" }), " Transfer"] }), e.jsx(n.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "text-zinc-400 max-w-md mx-auto", children: "Transfer files directly between devices with end-to-end encryption. No server storage." })] }), e.jsxs(n.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "grid md:grid-cols-2 gap-5 mb-10", children: [e.jsx(n.div, { whileHover: { y: -6, scale: 1.01 }, whileTap: { scale: 0.99 }, onClick: ne, className: "group cursor-pointer h-full", children: e.jsxs("div", { className: "h-full p-6 rounded-2xl bg-gradient-to-br from-amber-950/50 to-amber-950/20 border border-amber-500/20 hover:border-amber-500/40 transition-all relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }), e.jsxs("div", { className: "relative flex flex-col h-full", children: [e.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [e.jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-600/15 border border-amber-500/30", children: e.jsx(Re, { className: "w-6 h-6 text-amber-400" }) }), e.jsxs("div", { children: [e.jsx("h3", { className: "text-lg font-bold", children: "Start Session" }), e.jsx("p", { className: "text-xs text-amber-400/70", children: "Create a new live link" })] })] }), e.jsx("p", { className: "text-sm text-zinc-400 leading-relaxed flex-1 mb-5", children: "Generate a unique 6-digit code and share it with your recipient to start instant file transfer." }), e.jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-semibold text-sm", children: [e.jsx("span", { children: "Create Session" }), e.jsx(je, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })] })] })] }) }), e.jsx("div", { className: "h-full p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-emerald-950/20 border border-emerald-500/20 relative overflow-hidden", children: e.jsxs("div", { className: "flex flex-col h-full", children: [e.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [e.jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-emerald-500/25 to-emerald-600/15 border border-emerald-500/30", children: e.jsx(we, { className: "w-6 h-6 text-emerald-400" }) }), e.jsxs("div", { children: [e.jsx("h3", { className: "text-lg font-bold", children: "Join Session" }), e.jsx("p", { className: "text-xs text-emerald-400/70", children: "Enter session code" })] })] }), e.jsx("p", { className: "text-sm text-zinc-400 mb-4", children: "Enter the 6-digit code to connect:" }), e.jsx("div", { className: "flex gap-2 mb-4", children: y.map((t, s) => e.jsx(n.input, { ref: (i) => w.current[s] = i, type: "text", inputMode: "numeric", maxLength: 1, value: t, onChange: (i) => le(s, i.target.value), onKeyDown: (i) => de(s, i), onPaste: me, whileFocus: { scale: 1.08 }, className: `w-full aspect-square text-center text-xl font-mono font-bold rounded-lg border-2 bg-zinc-950/80 outline-none transition-all ${t ? "border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/20" : "border-zinc-700 focus:border-emerald-500/60"}` }, s)) }), e.jsxs(b, { onClick: G, disabled: !Y, className: `w-full h-11 font-bold rounded-xl transition-all ${Y ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20" : "bg-zinc-800 text-zinc-500"}`, children: [e.jsx(Te, { className: "w-4 h-4 mr-2" }), " Connect"] })] }) })] }), e.jsx(n.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "flex flex-wrap justify-center gap-6 text-sm text-zinc-500", children: [{ icon: Ne, label: "E2E Encrypted", color: "text-emerald-400" }, { icon: O, label: "Zero Latency", color: "text-amber-400" }, { icon: Ce, label: "No Storage", color: "text-blue-400" }].map((t, s) => e.jsxs(n.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.7 + s * 0.1 }, className: "flex items-center gap-2", children: [e.jsx(t.icon, { className: `w-4 h-4 ${t.color}` }), e.jsx("span", { children: t.label })] }, t.label)) })] }, "landing"), m === "sender" && e.jsxs(n.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 }, className: "w-full max-w-lg", children: [x ? e.jsxs("div", { className: "space-y-5", children: [e.jsxs(n.div, { initial: { scale: 0.95, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl flex items-center gap-3", children: [e.jsx("div", { className: "p-2 bg-emerald-500/20 rounded-lg", children: e.jsx(Q, { className: "w-5 h-5 text-emerald-400" }) }), e.jsxs("div", { children: [e.jsx("h3", { className: "font-bold text-emerald-400 text-sm", children: "Connected" }), e.jsx("p", { className: "text-xs text-emerald-300/60", children: "Secure tunnel active" })] })] }), e.jsxs(n.div, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.1 }, onDragOver: (t) => {
    t.preventDefault(), M(true);
  }, onDragLeave: () => M(false), onDrop: ce, onClick: () => {
    var _a;
    return (_a = V.current) == null ? void 0 : _a.click();
  }, className: `border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${E ? "border-amber-500 bg-amber-500/10" : "border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-900/50"}`, children: [e.jsx("input", { type: "file", ref: V, className: "hidden", multiple: true, onChange: oe }), e.jsx(n.div, { animate: E ? { scale: 1.1 } : {}, children: e.jsx(ke, { className: `w-10 h-10 mx-auto mb-3 transition-colors ${E ? "text-amber-400" : "text-zinc-500"}` }) }), e.jsx("p", { className: "font-semibold mb-1", children: "Drop files or click to browse" }), e.jsx("p", { className: "text-xs text-zinc-500", children: "Direct transfer to peer" })] }), e.jsx(D, { children: j.length > 0 && e.jsxs(n.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "space-y-3", children: [j.map((t, s) => e.jsxs(n.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: s * 0.05 }, className: "flex items-center justify-between p-3 bg-zinc-900/80 rounded-lg border border-zinc-800", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "p-2 bg-amber-500/10 rounded-lg", children: e.jsx(ae, { className: "w-4 h-4 text-amber-400" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium truncate max-w-[180px]", children: t.name }), e.jsx("p", { className: "text-xs text-zinc-500", children: _(t.size) })] })] }), e.jsx("button", { onClick: (i) => {
    i.stopPropagation(), v(j.filter((l, d) => d !== s));
  }, className: "p-1.5 hover:bg-red-500/10 rounded-lg", children: e.jsx(fe, { className: "w-4 h-4 text-zinc-500 hover:text-red-400" }) })] }, t.name)), $ && e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "h-1.5 bg-zinc-800 rounded-full overflow-hidden", children: e.jsx(n.div, { initial: { width: 0 }, animate: { width: `${J}%` }, className: "h-full bg-gradient-to-r from-amber-500 to-orange-500" }) }), e.jsxs("p", { className: "text-center text-xs text-zinc-400", children: [J, "%"] })] }), e.jsx(b, { onClick: ie, disabled: $, className: "w-full h-12 font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white rounded-xl shadow-lg shadow-amber-500/20", children: $ ? e.jsxs(e.Fragment, { children: [e.jsx(te, { className: "w-4 h-4 mr-2 animate-spin" }), " Sending..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(ye, { className: "w-4 h-4 mr-2" }), " Send"] }) })] }) })] }) : e.jsxs("div", { className: "text-center space-y-6", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold mb-2", children: "Share This Code" }), e.jsx("p", { className: "text-zinc-400 text-sm", children: "Send this code to your recipient" })] }), e.jsxs(n.div, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.1 }, className: "p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm", children: [e.jsx("span", { className: "text-xs font-mono text-zinc-500 tracking-widest block mb-5", children: "SESSION CODE" }), e.jsx("div", { className: "flex justify-center gap-2 mb-6", children: c.split("").map((t, s) => e.jsx(n.div, { initial: { scale: 0, rotateY: 180 }, animate: { scale: 1, rotateY: 0 }, transition: { delay: s * 0.06, type: "spring" }, className: "w-12 h-14 flex items-center justify-center text-2xl font-mono font-bold text-amber-400 bg-amber-500/10 border-2 border-amber-500/30 rounded-xl", children: t }, s)) }), e.jsxs("div", { className: "flex gap-2 justify-center mb-6", children: [e.jsxs(b, { onClick: () => X(c), variant: "outline", size: "sm", className: "gap-2 border-zinc-700 hover:border-amber-500/50", children: [q ? e.jsx(ve, { className: "w-3.5 h-3.5 text-emerald-400" }) : e.jsx(Pe, { className: "w-3.5 h-3.5" }), q ? "Copied" : "Copy"] }), e.jsxs(b, { onClick: () => X(`${window.location.origin}/live/${c}`), variant: "outline", size: "sm", className: "gap-2 border-zinc-700 hover:border-amber-500/50", children: [e.jsx(De, { className: "w-3.5 h-3.5" }), " Link"] })] }), e.jsxs("div", { className: "flex items-center justify-center gap-2 pt-4 border-t border-zinc-800", children: [e.jsx(n.div, { animate: { scale: [1, 1.3, 1] }, transition: { duration: 1.5, repeat: 1 / 0 }, className: "w-2 h-2 rounded-full bg-amber-500" }), e.jsx("span", { className: "text-sm text-zinc-400", children: W })] })] })] }), e.jsx(D, { children: g && e.jsxs(n.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "mt-5 p-5 bg-red-500/5 border border-red-500/20 rounded-xl text-center space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-center gap-2 text-red-400", children: [e.jsx(Se, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold text-sm", children: "Connection Failed" })] }), e.jsx("p", { className: "text-xs text-zinc-400", children: "Firewall may be blocking P2P." }), e.jsxs("div", { className: "flex gap-2 justify-center", children: [e.jsxs(b, { onClick: () => {
    I(false), z(c, true);
  }, variant: "outline", size: "sm", className: "border-zinc-700", children: [e.jsx(te, { className: "w-3.5 h-3.5 mr-1" }), " Retry"] }), e.jsx(b, { onClick: () => k("/upload"), size: "sm", className: "bg-zinc-800", children: "Use Vault" })] })] }) })] }, "sender"), m === "receiver" && e.jsxs(n.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 }, className: "w-full max-w-lg", children: [e.jsxs("div", { className: "text-center mb-6", children: [e.jsx(n.div, { initial: { scale: 0.8 }, animate: { scale: 1 }, className: "inline-block p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 mb-3", children: e.jsx(se, { className: "w-8 h-8 text-emerald-400" }) }), e.jsx("h1", { className: "text-2xl font-bold mb-1", children: "Receiving Files" }), e.jsx("p", { className: "text-emerald-400 font-mono text-sm", children: W || `Session: ${c}` })] }), !x && !g && e.jsxs(n.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "p-8 bg-zinc-900/80 border border-zinc-800 rounded-xl text-center", children: [e.jsx("div", { className: "flex justify-center gap-1.5 mb-3", children: [0, 1, 2].map((t) => e.jsx(n.div, { animate: { scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }, transition: { duration: 1.2, repeat: 1 / 0, delay: t * 0.2 }, className: "w-2 h-2 rounded-full bg-amber-500" }, t)) }), e.jsx("p", { className: "text-zinc-400 text-sm", children: "Connecting to sender..." })] }), x && P.length === 0 && e.jsxs(n.div, { initial: { scale: 0.95, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center", children: [e.jsx(Q, { className: "w-8 h-8 text-emerald-400 mx-auto mb-3" }), e.jsx("p", { className: "font-bold text-emerald-400 mb-1", children: "Connected!" }), e.jsx("p", { className: "text-sm text-zinc-400", children: "Waiting for files..." })] }), P.length > 0 && e.jsxs("div", { className: "space-y-3", children: [e.jsxs("h3", { className: "text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2", children: [e.jsx(Q, { className: "w-3.5 h-3.5 text-emerald-400" }), "Received (", P.length, ")"] }), P.map((t, s) => e.jsxs(n.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: s * 0.1 }, className: "p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center justify-between hover:border-emerald-500/30 transition-colors", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "p-2.5 bg-emerald-500/10 rounded-lg", children: e.jsx(ae, { className: "w-5 h-5 text-emerald-400" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "font-bold text-sm", children: t.name }), e.jsx("p", { className: "text-xs text-zinc-500", children: _(t.size) })] })] }), e.jsxs(b, { onClick: () => he(t), size: "sm", className: "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20", children: [e.jsx(se, { className: "w-4 h-4 mr-1.5" }), " Download"] })] }, s))] }), g && e.jsxs(n.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "p-6 bg-red-500/5 border border-red-500/20 rounded-xl text-center space-y-3", children: [e.jsx(Ie, { className: "w-6 h-6 text-red-400 mx-auto" }), e.jsx("p", { className: "font-bold text-red-400 text-sm", children: "Connection Failed" }), e.jsx("p", { className: "text-xs text-zinc-400", children: "Sender may have closed session." }), e.jsx(b, { onClick: Z, variant: "outline", size: "sm", className: "border-zinc-700", children: "Try Again" })] })] }, "receiver")] }) }), e.jsx("footer", { className: "relative z-10 py-5 text-center border-t border-white/5", children: e.jsxs("p", { className: "text-xs text-zinc-600 flex items-center justify-center gap-2", children: [e.jsx(ze, { className: "w-3 h-3" }), "End-to-end encrypted via WebRTC"] }) })] });
}
export {
  _e as default
};
