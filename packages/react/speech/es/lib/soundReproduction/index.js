import { jsxs, jsx } from "react/jsx-runtime";
import { Card } from "../../components/Card/index.js";
import '../../assets/index2.css';const container = "_container_c4fet_1";
const styles = {
  container
};
function Speech() {
  return /* @__PURE__ */ jsxs("div", { className: styles["container"], children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome to Speech!" }),
    /* @__PURE__ */ jsx(Card, {})
  ] });
}
export {
  Speech,
  Speech as default
};
