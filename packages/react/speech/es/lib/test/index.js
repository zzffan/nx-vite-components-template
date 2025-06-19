import { jsxs, jsx } from "react/jsx-runtime";
import { Card } from "../../components/Card/index.js";
import '../../assets/index.css';const container = "_container_1y2x1_1";
const styles = {
  container
};
function Test() {
  return /* @__PURE__ */ jsxs("div", { className: styles["container"], children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome to Test!" }),
    /* @__PURE__ */ jsx(Card, {})
  ] });
}
export {
  Test,
  Test as default
};
