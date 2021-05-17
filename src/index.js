import "./publicPath";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let loadContainer;
export function init({ container, props = {} } = {}) {
  loadContainer = container;
  ReactDOM.render(<App {...props} />, container);
}
export function clean() {
  if (loadContainer) {
    ReactDOM.unmountComponentAtNode(loadContainer);
  }
}

if (process.env.NODE_ENV === "development") {
  init({ container: document.getElementById("root") });
}
