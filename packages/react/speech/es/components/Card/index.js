import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Drawer } from "antd";
import '../../assets/index3.css';const container = "_container_jn7yu_1";
const styles = {
  container
};
function Card() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles["container"], children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome to Speech Card!" }),
    /* @__PURE__ */ jsx(Button, { type: "primary", onClick: showDrawer, children: "open" }),
    /* @__PURE__ */ jsxs(
      Drawer,
      {
        title: "Basic Drawer",
        closable: { "aria-label": "Close Button" },
        onClose,
        open,
        children: [
          /* @__PURE__ */ jsx("p", { children: "Some contents..." }),
          /* @__PURE__ */ jsx("p", { children: "Some contents..." }),
          /* @__PURE__ */ jsx("p", { children: "Some contents..." })
        ]
      }
    )
  ] });
}
export {
  Card,
  Card as default
};
