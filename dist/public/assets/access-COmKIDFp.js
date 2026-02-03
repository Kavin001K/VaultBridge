import { r as u, b as se, u as re, j as e, L as W, B as z, d as q, _ as ne, __tla as __tla_0 } from "./index-BpGdq6cX.js";
import { I as ie, C as oe } from "./input-BBnUsH8U.js";
import { u as le, F as ce } from "./useSounds-C6CHmDat.js";
import { c as de, d as me, e as xe, A as T } from "./use-vaults-CXcaDl-K.js";
import { u as pe, f as ue, h as he, i as fe } from "./crypto-DfIFm6ch.js";
import { i as ye } from "./downloadStream-BshqhEZj.js";
import { m as c } from "./proxy-D0nqRSzh.js";
import { L as G } from "./lock-BzYYw8g5.js";
import { A as ge } from "./arrow-left-utdTbWmy.js";
import { K as be, C as we } from "./key-round-CeiYJ-df.js";
import { S as H } from "./shield-ruK06BFf.js";
import { C as je, a as ve } from "./clock-BpwMaOFh.js";
import { D as L } from "./download-Bv-5vb7D.js";
import { H as Ne } from "./hard-drive-XNuwHd5K.js";
import { T as Z } from "./triangle-alert-BcLzU2C0.js";
let Re;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ze = () => e.jsx("svg", {
    style: {
      position: "absolute",
      width: 0,
      height: 0
    },
    children: e.jsx("defs", {
      children: e.jsxs("filter", {
        id: "heat-wave",
        children: [
          e.jsx("feTurbulence", {
            type: "fractalNoise",
            baseFrequency: "0.01",
            numOctaves: "3",
            result: "noise",
            children: e.jsx("animate", {
              attributeName: "baseFrequency",
              dur: "2s",
              values: "0.01;0.05;0.2",
              repeatCount: "1"
            })
          }),
          e.jsx("feDisplacementMap", {
            in: "SourceGraphic",
            in2: "noise",
            scale: "20"
          })
        ]
      })
    })
  });
  function ke({ expiresAt: o }) {
    const [w, l] = u.useState(null);
    return u.useEffect(() => {
      const h = () => {
        const x = (/* @__PURE__ */ new Date()).getTime(), j = new Date(o).getTime() - x;
        if (j <= 0) {
          l(null);
          return;
        }
        l({
          h: Math.floor(j / 36e5),
          m: Math.floor(j % 36e5 / 6e4),
          s: Math.floor(j % 6e4 / 1e3)
        });
      };
      h();
      const k = setInterval(h, 1e3);
      return () => clearInterval(k);
    }, [
      o
    ]), w ? e.jsxs("div", {
      className: "flex items-center gap-1 font-mono text-sm font-bold text-primary",
      children: [
        e.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded min-w-[2ch] text-center",
          children: w.h.toString().padStart(2, "0")
        }),
        e.jsx("span", {
          className: "text-zinc-500",
          children: ":"
        }),
        e.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded min-w-[2ch] text-center",
          children: w.m.toString().padStart(2, "0")
        }),
        e.jsx("span", {
          className: "text-zinc-500",
          children: ":"
        }),
        e.jsx("span", {
          className: "bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded min-w-[2ch] text-center",
          children: w.s.toString().padStart(2, "0")
        })
      ]
    }) : e.jsx("span", {
      className: "text-zinc-500 font-mono text-xs",
      children: "Expired"
    });
  }
  Re = function() {
    const [o, w] = u.useState(""), [l, h] = u.useState("input"), [k, x] = u.useState(""), [g, j] = u.useState([]), [i, S] = u.useState(null), [v, Y] = u.useState(null), [I, U] = u.useState(false), [C, J] = u.useState(null), [M, $] = u.useState(false);
    se();
    const { toast: d } = re(), { play: _ } = le(), Q = de(), B = me(), P = xe(), R = async () => {
      const t = o.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      if (t.length !== 6) {
        d({
          variant: "destructive",
          title: "Invalid Code",
          description: "Please enter a 6-character code."
        });
        return;
      }
      h("fetching"), x("Looking up vault...");
      try {
        const a = t.slice(0, 3), s = t.slice(3, 6), r = await Q.mutateAsync(a);
        S(r), h("decrypting"), x("Unwrapping encryption key with PIN...");
        const n = await pe(r.wrappedKey, s);
        Y(n), x("Decrypting file metadata...");
        const m = await ue(r.encryptedMetadata, n);
        if (j(m), r.encryptedClipboardText) {
          x("Decrypting clipboard content...");
          try {
            const f = await he(r.encryptedClipboardText, n);
            J(f);
          } catch (f) {
            console.error("Failed to decrypt clipboard:", f);
          }
        }
        h("ready");
        const D = m.length > 0, N = r.encryptedClipboardText;
        x(D ? "Files ready for download!" : N ? "Clipboard content ready!" : "Vault unlocked!"), _("unlock"), d({
          title: "Vault Unlocked!",
          description: D ? `${m.length} file(s) ready for download.` : N ? "Secure clipboard content available." : "Vault accessed successfully."
        });
      } catch (a) {
        _("error"), h("input"), console.error("Access error:", a);
        let s = "Invalid or expired code. Please check and try again.";
        a instanceof Error && (a.message.includes("unwrap") ? s = "Invalid PIN. The second half of your code is incorrect." : a.message.includes("expired") && (s = "This vault has expired or reached its download limit.")), d({
          variant: "destructive",
          title: "Access Denied",
          description: s
        });
      }
    }, X = async (t) => {
      if (!(!i || !v)) try {
        x(`Downloading ${t.name}...`);
        const a = i.files.find((p) => p.fileId === t.fileId);
        if (!a) throw new Error("File metadata not found in vault");
        const s = [];
        for (let p = 0; p < a.chunkCount; p++) {
          x(`Decrypting ${t.name} [${p + 1}/${a.chunkCount}]...`);
          const { downloadUrl: E } = await B.mutateAsync({
            vaultId: i.id,
            fileId: t.fileId,
            chunkIndex: p
          });
          let y = null;
          for (let b = 0; b < 3; b++) try {
            if (y = await fetch(E), y.ok) break;
            throw y.status >= 400 && y.status < 500 ? new Error(`Server returned ${y.status}`) : new Error(`Server error ${y.status}`);
          } catch {
            b < 2 && await new Promise((A) => setTimeout(A, 500 * Math.pow(2, b)));
          }
          if (!y || !y.ok) throw new Error("Failed to download chunk");
          const F = await y.arrayBuffer();
          if (F.byteLength < 12) throw new Error("Chunk too small");
          const te = new Uint8Array(F, 0, 12), ae = new Uint8Array(F, 12), K = await fe(ae, te, v);
          if (t.isCompressed) {
            const b = await ne(() => import("./index.web-Bqyr3zbv.js"), []);
            await b.default;
            const O = new Uint8Array(K), A = b.decompress(O);
            s.push(A.buffer);
          } else s.push(K);
        }
        const r = s.reduce((p, E) => p + E.byteLength, 0), n = new Uint8Array(r);
        let m = 0;
        for (const p of s) n.set(new Uint8Array(p), m), m += p.byteLength;
        const D = new Blob([
          n
        ], {
          type: t.type || "application/octet-stream"
        }), N = URL.createObjectURL(D), f = document.createElement("a");
        return f.href = N, f.download = t.name, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(N), true;
      } catch (a) {
        throw a;
      }
    }, V = async (t) => {
      if (!(!i || !v)) try {
        if ("serviceWorker" in navigator && navigator.serviceWorker.controller && t.size > 10 * 1024 * 1024) {
          console.log("Using Streamed Download for " + t.name), x(`Preparing stream for ${t.name}...`);
          const a = i.files.find((r) => r.fileId === t.fileId);
          if (!a) throw new Error("File not found");
          const s = [];
          for (let r = 0; r < a.chunkCount; r++) {
            const { downloadUrl: n } = await B.mutateAsync({
              vaultId: i.id,
              fileId: t.fileId,
              chunkIndex: r
            });
            s.push({
              downloadUrl: n,
              index: r
            });
          }
          await ye(t.fileId, v, s, t), l === "ready" && d({
            title: "Download Started",
            description: `Streaming ${t.name}...`
          });
        } else console.log("Using Memory Download for " + t.name), await X(t);
        if (l === "ready") {
          "serviceWorker" in navigator && navigator.serviceWorker.controller && t.size > 10 * 1024 * 1024 || d({
            title: "File Downloaded",
            description: `${t.name} saved.`
          });
          try {
            const a = await P.mutateAsync(i.id);
            S((s) => ({
              ...s,
              downloadCount: s.maxDownloads - a.remainingDownloads
            })), a.remainingDownloads <= 0 && (d({
              title: "Vault Depleted",
              description: "Initiating self-destruct sequence...",
              variant: "destructive"
            }), setTimeout(() => U(true), 1500));
          } catch (a) {
            console.error("Tracking failed", a);
          }
        }
      } catch (a) {
        if (console.error("Download failed", a), d({
          variant: "destructive",
          title: "Download Error",
          description: a instanceof Error ? a.message : "Failed to download file"
        }), l === "downloading") throw a;
      }
    }, ee = async () => {
      if (!(!i || !v || g.length === 0)) {
        h("downloading");
        try {
          for (const a of g) await V(a);
          const t = await P.mutateAsync(i.id);
          S((a) => ({
            ...a,
            downloadCount: a.maxDownloads - t.remainingDownloads
          })), h("ready"), x("All files downloaded!"), d({
            title: "Download Complete!",
            description: `${g.length} file(s) downloaded successfully.`
          }), t.remainingDownloads <= 0 && (d({
            title: "Vault Depleted",
            description: "Initiating self-destruct sequence...",
            variant: "destructive"
          }), setTimeout(() => U(true), 1500));
        } catch (t) {
          h("ready"), console.error("Download error:", t), d({
            variant: "destructive",
            title: "Download Failed",
            description: t instanceof Error ? t.message : "An error occurred during download."
          });
        }
      }
    };
    return e.jsxs("div", {
      className: `min-h-screen relative overflow-hidden flex flex-col transition-colors duration-1000 ${I ? "bg-black" : ""}`,
      children: [
        e.jsx(ze, {}),
        e.jsx("div", {
          className: "fixed inset-0 grid-bg opacity-50"
        }),
        e.jsx("div", {
          className: "scanline"
        }),
        e.jsx("div", {
          className: "fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px] pointer-events-none"
        }),
        e.jsx("header", {
          className: "relative z-10 px-4 md:px-6 py-6 md:py-8",
          children: e.jsxs("div", {
            className: "max-w-4xl mx-auto flex items-center justify-between",
            children: [
              e.jsx(W, {
                href: "/",
                children: e.jsxs(c.div, {
                  initial: {
                    opacity: 0,
                    x: -20
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  className: "flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity",
                  children: [
                    e.jsx("div", {
                      className: "w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30",
                      children: e.jsx(G, {
                        className: "w-4 h-4 md:w-5 md:h-5 text-primary"
                      })
                    }),
                    e.jsx("div", {
                      children: e.jsxs("h1", {
                        className: "text-lg md:text-xl font-bold font-mono tracking-tight",
                        children: [
                          "VAULT",
                          e.jsx("span", {
                            className: "text-primary",
                            children: "BRIDGE"
                          })
                        ]
                      })
                    })
                  ]
                })
              }),
              e.jsx(W, {
                href: "/",
                children: e.jsxs(z, {
                  variant: "ghost",
                  size: "sm",
                  className: "gap-2",
                  children: [
                    e.jsx(ge, {
                      className: "w-4 h-4"
                    }),
                    "Back"
                  ]
                })
              })
            ]
          })
        }),
        e.jsxs("main", {
          className: `relative z-10 flex-1 flex flex-col items-center justify-center w-full mx-auto px-4 md:px-6 py-8 transition-all duration-500 ${l === "ready" ? "max-w-5xl" : "max-w-lg"}`,
          children: [
            l !== "ready" && e.jsxs(c.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              className: "text-center mb-8 md:mb-10",
              children: [
                e.jsx("div", {
                  className: "flex items-center justify-center gap-3 mb-4",
                  children: e.jsx("div", {
                    className: "p-3 rounded-xl bg-zinc-800 border border-zinc-700",
                    children: e.jsx(be, {
                      className: "w-6 h-6 md:w-8 md:h-8 text-zinc-400"
                    })
                  })
                }),
                e.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold mb-2",
                  children: "Access Vault"
                }),
                e.jsx("p", {
                  className: "text-sm md:text-base text-muted-foreground",
                  children: "Enter your 6-digit access code to unlock the vault"
                })
              ]
            }),
            e.jsx(T, {
              mode: "wait",
              children: I ? e.jsxs(c.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: {
                  delay: 2
                },
                className: "flex flex-col items-center justify-center p-8 font-mono text-red-500 w-full",
                children: [
                  e.jsx(Z, {
                    className: "w-16 h-16 mb-4 animate-pulse"
                  }),
                  e.jsx("h1", {
                    className: "text-2xl md:text-4xl tracking-[0.2em] uppercase font-bold text-center mb-4",
                    children: "Vault Incinerated"
                  }),
                  e.jsxs("div", {
                    className: "text-sm md:text-base text-zinc-500 space-y-2 text-center",
                    children: [
                      e.jsx("p", {
                        className: "typing-effect",
                        children: "> SYSTEM_PURGE_COMPLETE"
                      }),
                      e.jsx("p", {
                        className: "typing-effect delay-100",
                        children: "> FILES_OVERWRITTEN"
                      }),
                      e.jsx("p", {
                        className: "typing-effect delay-200 text-red-700",
                        children: "> LINK_TERMINATED"
                      })
                    ]
                  })
                ]
              }) : e.jsxs(c.div, {
                initial: {
                  opacity: 0,
                  y: 30
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  y: -50,
                  filter: "url(#heat-wave) grayscale(100%) contrast(200%)",
                  transition: {
                    duration: 2
                  }
                },
                style: {
                  filter: I ? "url(#heat-wave)" : "none"
                },
                transition: {
                  delay: 0.1
                },
                className: `w-full transition-all duration-500 overflow-hidden ${l === "ready" ? "bg-zinc-950/90 backdrop-blur-2xl border border-zinc-800 rounded-3xl shadow-2xl" : "glass-card p-6 md:p-8"}`,
                children: [
                  l === "input" && e.jsxs("div", {
                    className: "space-y-6 md:space-y-8",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx("label", {
                            className: "text-xs md:text-sm text-center block text-muted-foreground uppercase tracking-widest font-mono",
                            children: "Enter 6-Digit Code"
                          }),
                          e.jsxs("div", {
                            className: "flex justify-center gap-2 md:gap-3 relative",
                            children: [
                              e.jsx(ie, {
                                type: "search",
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                                value: o,
                                onChange: (t) => {
                                  const a = t.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
                                  w(a), a.length;
                                },
                                onKeyDown: (t) => {
                                  t.key === "Enter" && o.length === 6 && R();
                                },
                                className: "absolute inset-0 opacity-0 cursor-pointer z-10 h-16 w-full",
                                autoFocus: true,
                                autoComplete: "off",
                                spellCheck: "false",
                                name: "vault_access_code_search",
                                id: "vault_access_code_search"
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-1 md:gap-2",
                                children: [
                                  e.jsx("div", {
                                    className: "flex gap-1.5 md:gap-2",
                                    children: Array.from({
                                      length: 3
                                    }).map((t, a) => {
                                      const s = a, r = o[s] || "", n = o.length === s, m = !!r;
                                      return e.jsx(c.div, {
                                        initial: false,
                                        animate: {
                                          scale: n ? 1.05 : 1,
                                          borderColor: n ? "var(--primary)" : m ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                                          backgroundColor: m ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)"
                                        },
                                        className: `
                                                            w-10 h-12 md:w-14 md:h-20
                                                            border-2 rounded-lg md:rounded-xl flex items-center justify-center 
                                                            text-xl md:text-3xl font-mono font-bold
                                                            transition-colors duration-200
                                                            ${n ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-primary/20" : ""}
                                                        `,
                                        children: e.jsx(T, {
                                          mode: "popLayout",
                                          children: r ? e.jsx(c.span, {
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
                                            className: "text-primary",
                                            children: r
                                          }, r) : n && e.jsx(c.div, {
                                            layoutId: "cursor",
                                            className: "w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/50 rounded-full animate-pulse"
                                          })
                                        })
                                      }, s);
                                    })
                                  }),
                                  e.jsx("div", {
                                    className: "w-2 md:w-4 border-t-2 border-zinc-700/50"
                                  }),
                                  e.jsx("div", {
                                    className: "flex gap-1.5 md:gap-2",
                                    children: Array.from({
                                      length: 3
                                    }).map((t, a) => {
                                      const s = a + 3, r = o[s] || "", n = o.length === s, m = !!r;
                                      return e.jsx(c.div, {
                                        initial: false,
                                        animate: {
                                          scale: n ? 1.05 : 1,
                                          borderColor: n ? "var(--primary)" : m ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                                          backgroundColor: m ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)"
                                        },
                                        className: `
                                                            w-10 h-12 md:w-14 md:h-20
                                                            border-2 rounded-lg md:rounded-xl flex items-center justify-center 
                                                            text-xl md:text-3xl font-mono font-bold
                                                            transition-colors duration-200
                                                            ${n ? "shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-2 ring-primary/20" : ""}
                                                        `,
                                        children: e.jsx(T, {
                                          mode: "popLayout",
                                          children: r ? e.jsx(c.span, {
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
                                            className: "text-primary",
                                            children: r
                                          }, r) : n && e.jsx(c.div, {
                                            layoutId: "cursor",
                                            className: "w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/50 rounded-full animate-pulse"
                                          })
                                        })
                                      }, s);
                                    })
                                  })
                                ]
                              })
                            ]
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground text-center px-4",
                            children: "Check your email or secure message for the code"
                          })
                        ]
                      }),
                      e.jsxs(z, {
                        onClick: R,
                        disabled: o.length !== 6,
                        size: "lg",
                        className: `
                                    w-full h-12 md:h-14 font-mono font-bold uppercase tracking-wider text-sm md:text-base
                                    transition-all duration-300
                                    ${o.length === 6 ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:scale-[1.02]" : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}
                                `,
                        children: [
                          e.jsx(G, {
                            className: `w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 ${o.length === 6 ? "opacity-100" : "opacity-50"}`
                          }),
                          o.length === 6 ? "Unlock Vault" : "Enter Code"
                        ]
                      })
                    ]
                  }),
                  (l === "fetching" || l === "decrypting") && e.jsxs("div", {
                    className: "text-center py-8",
                    children: [
                      e.jsx(q, {
                        className: "w-10 h-10 md:w-12 md:h-12 text-primary animate-spin mx-auto mb-4"
                      }),
                      e.jsx("p", {
                        className: "text-base md:text-lg font-medium",
                        children: k
                      }),
                      e.jsx("p", {
                        className: "text-xs md:text-sm text-muted-foreground mt-2",
                        children: "Decryption happens in your browser"
                      })
                    ]
                  }),
                  l === "ready" && e.jsxs("div", {
                    className: "flex flex-col md:grid md:grid-cols-12 min-h-[550px]",
                    children: [
                      e.jsxs("div", {
                        className: "md:col-span-4 bg-zinc-900/50 border-r border-white/5 p-6 md:p-8 flex flex-col relative group",
                        children: [
                          e.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                          }),
                          e.jsxs("div", {
                            className: "relative z-10",
                            children: [
                              e.jsx(c.div, {
                                initial: {
                                  scale: 0.8,
                                  opacity: 0
                                },
                                animate: {
                                  scale: 1,
                                  opacity: 1
                                },
                                className: "w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl",
                                children: e.jsx(H, {
                                  className: "w-8 h-8 text-emerald-500"
                                })
                              }),
                              e.jsx("h3", {
                                className: "text-3xl font-bold text-white tracking-tight mb-2",
                                children: "Unlocked"
                              }),
                              e.jsxs("p", {
                                className: "text-zinc-500 text-sm leading-relaxed mb-8",
                                children: [
                                  "Secure session established.",
                                  e.jsx("br", {}),
                                  "End-to-end encrypted."
                                ]
                              }),
                              e.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-3 text-zinc-400",
                                        children: [
                                          e.jsx("div", {
                                            className: "p-1.5 rounded bg-zinc-900",
                                            children: e.jsx(je, {
                                              className: "w-4 h-4"
                                            })
                                          }),
                                          e.jsx("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            children: "Expires"
                                          })
                                        ]
                                      }),
                                      e.jsx(ke, {
                                        expiresAt: i.expiresAt
                                      })
                                    ]
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-3 text-zinc-400",
                                        children: [
                                          e.jsx("div", {
                                            className: "p-1.5 rounded bg-zinc-900",
                                            children: e.jsx(L, {
                                              className: "w-4 h-4"
                                            })
                                          }),
                                          e.jsx("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            children: "Downloads"
                                          })
                                        ]
                                      }),
                                      e.jsxs("span", {
                                        className: "font-mono text-sm font-bold text-zinc-200",
                                        children: [
                                          i.maxDownloads - i.downloadCount,
                                          " ",
                                          e.jsx("span", {
                                            className: "text-zinc-600",
                                            children: "/"
                                          }),
                                          " ",
                                          i.maxDownloads
                                        ]
                                      })
                                    ]
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-3 text-zinc-400",
                                        children: [
                                          e.jsx("div", {
                                            className: "p-1.5 rounded bg-zinc-900",
                                            children: e.jsx(Ne, {
                                              className: "w-4 h-4"
                                            })
                                          }),
                                          e.jsx("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            children: "Size"
                                          })
                                        ]
                                      }),
                                      e.jsxs("span", {
                                        className: "font-mono text-sm font-bold text-zinc-200",
                                        children: [
                                          (g.reduce((t, a) => t + a.size, 0) / (1024 * 1024)).toFixed(2),
                                          " MB"
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          }),
                          e.jsx("div", {
                            className: "mt-auto pt-8 relative z-10",
                            children: e.jsxs("div", {
                              className: "flex items-start gap-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30",
                              children: [
                                e.jsx(H, {
                                  className: "w-5 h-5 text-emerald-500 mt-0.5"
                                }),
                                e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-xs text-emerald-200/60 leading-relaxed font-bold",
                                      children: "Zero-Knowledge Architecture"
                                    }),
                                    e.jsxs("p", {
                                      className: "text-xs text-emerald-200/60 leading-relaxed",
                                      children: [
                                        "Files are decrypted locally. Use ",
                                        "serviceWorker" in navigator ? e.jsx("span", {
                                          className: "text-emerald-400 font-bold",
                                          children: "Streamed Mode"
                                        }) : "High Speed Mode",
                                        " for large files."
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "md:col-span-8 p-6 md:p-8 bg-black/20 flex flex-col",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center justify-between mb-6",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                e.jsx("span", {
                                  className: "flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-xs font-bold text-white border border-zinc-700",
                                  children: g.length + (C ? 1 : 0)
                                }),
                                e.jsx("h4", {
                                  className: "text-sm font-bold text-zinc-400 uppercase tracking-widest",
                                  children: g.length > 0 ? "Available Content" : "Secure Clipboard"
                                })
                              ]
                            })
                          }),
                          C && e.jsxs(c.div, {
                            initial: {
                              opacity: 0,
                              y: 10
                            },
                            animate: {
                              opacity: 1,
                              y: 0
                            },
                            className: "mb-6 p-4 bg-gradient-to-r from-cyan-950/40 to-teal-950/40 border border-cyan-500/30 rounded-xl",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className: "w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center",
                                        children: e.jsx(we, {
                                          className: "w-5 h-5 text-white"
                                        })
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-bold text-cyan-200",
                                            children: "Secure Clipboard"
                                          }),
                                          e.jsx("p", {
                                            className: "text-xs text-cyan-400/70",
                                            children: "End-to-end encrypted text"
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  e.jsx(z, {
                                    size: "sm",
                                    variant: "outline",
                                    className: `shrink-0 ${M ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300"}`,
                                    onClick: async () => {
                                      try {
                                        await navigator.clipboard.writeText(C), $(true), _("success"), d({
                                          title: "Copied to clipboard!"
                                        }), setTimeout(() => $(false), 2e3);
                                      } catch {
                                        d({
                                          variant: "destructive",
                                          title: "Failed to copy"
                                        });
                                      }
                                    },
                                    children: M ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(ve, {
                                          className: "w-4 h-4 mr-2"
                                        }),
                                        " Copied!"
                                      ]
                                    }) : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(oe, {
                                          className: "w-4 h-4 mr-2"
                                        }),
                                        " Copy"
                                      ]
                                    })
                                  })
                                ]
                              }),
                              e.jsx("div", {
                                className: "bg-zinc-950/60 rounded-lg p-4 border border-zinc-800/50 font-mono text-sm text-zinc-200 whitespace-pre-wrap break-all max-h-[200px] overflow-y-auto custom-scrollbar",
                                children: C
                              })
                            ]
                          }),
                          e.jsx("div", {
                            className: "flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3 mb-6 min-h-[300px] max-h-[500px]",
                            children: g.map((t, a) => {
                              var _a;
                              return e.jsxs(c.div, {
                                initial: {
                                  opacity: 0,
                                  y: 10
                                },
                                animate: {
                                  opacity: 1,
                                  y: 0
                                },
                                transition: {
                                  delay: a * 0.05
                                },
                                className: "group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4 min-w-0 mb-3 sm:mb-0",
                                    children: [
                                      e.jsx("div", {
                                        className: "w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-primary/50 group-hover:from-primary/10 group-hover:to-zinc-900 transition-colors",
                                        children: e.jsx(ce, {
                                          className: "w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors"
                                        })
                                      }),
                                      e.jsxs("div", {
                                        className: "min-w-0",
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-xs",
                                            children: t.name
                                          }),
                                          e.jsxs("div", {
                                            className: "flex items-center gap-3 mt-1",
                                            children: [
                                              e.jsxs("span", {
                                                className: "text-xs text-zinc-500 font-mono",
                                                children: [
                                                  (t.size / 1024 / 1024).toFixed(2),
                                                  " MB"
                                                ]
                                              }),
                                              e.jsx("span", {
                                                className: "w-1 h-1 rounded-full bg-zinc-700"
                                              }),
                                              e.jsx("span", {
                                                className: "text-[10px] text-zinc-500 uppercase font-bold",
                                                children: ((_a = t.type) == null ? void 0 : _a.split("/")[1]) || "FILE"
                                              })
                                            ]
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  e.jsxs(z, {
                                    size: "sm",
                                    variant: "outline",
                                    className: "bg-transparent border-zinc-700 hover:bg-zinc-800 hover:text-white group-hover:border-zinc-600 shrink-0",
                                    onClick: (s) => {
                                      s.stopPropagation(), s.preventDefault(), V(t);
                                    },
                                    children: [
                                      e.jsx(L, {
                                        className: "w-4 h-4 mr-2"
                                      }),
                                      "Download"
                                    ]
                                  })
                                ]
                              }, t.fileId);
                            })
                          }),
                          e.jsxs("div", {
                            className: "mt-auto pt-6 border-t border-white/5",
                            children: [
                              e.jsxs(z, {
                                onClick: ee,
                                className: "w-full h-16 cyber-btn text-lg font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:shadow-[0_0_60px_rgba(16,185,129,0.2)]",
                                children: [
                                  e.jsx(L, {
                                    className: "w-6 h-6 mr-3"
                                  }),
                                  "Download All Files"
                                ]
                              }),
                              e.jsxs("p", {
                                className: "text-center text-[10px] uppercase tracking-widest text-zinc-600 mt-4 font-bold",
                                children: [
                                  (i == null ? void 0 : i.maxDownloads) - (i == null ? void 0 : i.downloadCount),
                                  " Downloads remaining"
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  l === "downloading" && e.jsxs("div", {
                    className: "text-center py-8",
                    children: [
                      e.jsx(q, {
                        className: "w-10 h-10 md:w-12 md:h-12 text-primary animate-spin mx-auto mb-4"
                      }),
                      e.jsx("p", {
                        className: "text-base md:text-lg font-medium",
                        children: k
                      }),
                      e.jsx("p", {
                        className: "text-xs md:text-sm text-muted-foreground mt-2",
                        children: "Files are being decrypted in your browser"
                      })
                    ]
                  })
                ]
              }, "content")
            }),
            e.jsx(c.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                delay: 0.3
              },
              className: "mt-6 md:mt-8 text-center px-2",
              children: e.jsx("div", {
                className: "p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl",
                children: e.jsxs("div", {
                  className: "flex items-start gap-3 text-left",
                  children: [
                    e.jsx(Z, {
                      className: "w-4 h-4 md:w-5 md:h-5 text-rose-400 flex-shrink-0 mt-0.5"
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium text-rose-400",
                          children: "Important"
                        }),
                        e.jsx("p", {
                          className: "text-xs text-rose-300/80 mt-1",
                          children: "Access codes expire. If your code doesn't work, the vault may have expired or reached its download limit."
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
  };
});
export {
  __tla,
  Re as default
};
