import "./publicPath";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export function init({ containerId, container, props = {} } = {}) {
  let loadContainer = container || document.getElementById(containerId);
  ReactDOM.render(<App {...props} />, loadContainer);
}
export function clean({ container } = {}) {
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
  }
}

if (process.env.NODE_ENV === "development") {
  init({ containerId: "root" });
}
