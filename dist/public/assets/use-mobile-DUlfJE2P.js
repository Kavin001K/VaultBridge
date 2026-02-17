import { c as o, r as a } from "./index-Brl99K9S.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const d = o("Clipboard", [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const h = o("KeyRound", [["path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z", key: "1s6t7t" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]]), r = 768;
function l() {
  const [i, s] = a.useState(false);
  return a.useEffect(() => {
    const t = () => {
      s(window.innerWidth < r);
    };
    t();
    const n = window.matchMedia(`(max-width: ${r - 1}px)`), e = () => t();
    return n.addEventListener("change", e), window.addEventListener("resize", e), () => {
      n.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  }, []), i;
}
export {
  d as C,
  h as K,
  l as u
};
