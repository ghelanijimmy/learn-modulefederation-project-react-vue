import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AppMarkers } from "./components/AppMarkers";
import { Header } from "./components/Header";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { Progress } from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={false} onSignOut={() => null} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AppMarkers appTitle="AuthApp">
                <AuthLazy />
              </AppMarkers>
            </Route>
            <Route path="/">
              <AppMarkers appTitle="MarketingApp">
                <MarketingLazy />
              </AppMarkers>
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
