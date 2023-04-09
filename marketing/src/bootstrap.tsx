import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, LocationListener } from "history";
import { App } from "./App";

export type MarketingMountFunction = (
  el: Element,
  options?: { onNavigate: LocationListener }
) => void;

const mount = (el: Element, options?: { onNavigate: LocationListener }) => {
  const history = createMemoryHistory();

  if (options?.onNavigate) {
    history.listen(options.onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    mount(el);
  }
}

export { mount };
