import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MarketingApp } from "./components/MarketingApp";

import { AppMarkers } from "./components/AppMarkers";
import { Header } from "./components/Header";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { AuthApp } from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={false} onSignOut={() => null} />
        <Switch>
          <Route path="/auth">
            <AppMarkers appTitle="AuthApp">
              <AuthApp />
            </AppMarkers>
          </Route>
          <Route path="/">
            <AppMarkers appTitle="MarketingApp">
              <MarketingApp />
            </AppMarkers>
          </Route>
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};
