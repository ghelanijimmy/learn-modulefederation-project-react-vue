import React from "react";
import { MarketingApp } from "./components/MarketingApp";
import { AppMarkers } from "./components/AppMarkers";
export const App = () => {
  return (
    <div>
      <AppMarkers appTitle="MarketingApp">
        <MarketingApp />
      </AppMarkers>
    </div>
  );
};
