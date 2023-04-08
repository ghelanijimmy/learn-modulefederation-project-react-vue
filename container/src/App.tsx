import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MarketingApp } from "./components/MarketingApp";
import { AppMarkers } from "./components/AppMarkers";
import { Header } from "./components/Header";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={false} onSignOut={() => null} />
        <AppMarkers appTitle="MarketingApp">
          <MarketingApp />
        </AppMarkers>
      </StylesProvider>
    </BrowserRouter>
  );
};
