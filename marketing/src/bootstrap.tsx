import React from "react";
import ReactDOM from "react-dom";

const mount = (el: Element) => {
  ReactDOM.render(
    <div>
      <h1>Marketing App</h1>
    </div>,
    el
  );
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    mount(el);
  }
}

export { mount };
