import { r as s } from "./index-CzGRSC1U.js";
const i = 768;
function c() {
  const [o, r] = s.useState(false);
  return s.useEffect(() => {
    const n = () => {
      r(window.innerWidth < i);
    };
    n();
    const t = window.matchMedia(`(max-width: ${i - 1}px)`), e = () => n();
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  }, []), o;
}
export {
  c as u
};
