import React from "react";
import ReactDOM from "react-dom";
import {
  createMemoryHistory,
  createBrowserHistory,
  LocationListener,
} from "history";
import { App } from "./App";

export type MarketingMountFunction = (
  el: Element,
  options?: {
    onNavigate?: LocationListener;
    useDefaultHistory?: boolean;
  }
) => {
  onParentNavigate: LocationListener;
};

const mount: MarketingMountFunction = (
  el,
  { onNavigate, useDefaultHistory }
) => {
  const history = useDefaultHistory
    ? createBrowserHistory()
    : createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_auth-dev-root");

  if (el) {
    mount(el, { useDefaultHistory: true });
  }
}

export { mount };
