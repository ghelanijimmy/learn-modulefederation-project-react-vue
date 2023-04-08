import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MarketingApp } from "./components/MarketingApp";
import { AppMarkers } from "./components/AppMarkers";
import { Header } from "./components/Header";
export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header signedIn onSignOut={() => null} />
        <AppMarkers appTitle="MarketingApp">
          <MarketingApp />
        </AppMarkers>
      </div>
    </BrowserRouter>
  );
};
