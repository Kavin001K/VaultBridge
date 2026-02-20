import { c as a, r as i } from "./index-B1Hr3-ke.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const d = a("Clipboard", [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }]]), r = 768;
function h() {
  const [o, s] = i.useState(false);
  return i.useEffect(() => {
    const t = () => {
      s(window.innerWidth < r);
    };
    t();
    const n = window.matchMedia(`(max-width: ${r - 1}px)`), e = () => t();
    return n.addEventListener("change", e), window.addEventListener("resize", e), () => {
      n.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  }, []), o;
}
export {
  d as C,
  h as u
};
