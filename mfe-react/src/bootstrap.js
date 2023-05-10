import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const el = document.getElementById("dev-react-mfe");

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (el) {
  mount(el);
}

export { mount };
