import React, { FC } from "react";
import { Switch, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { History } from "history";
import { MemoryHistory } from "history";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export const App: FC<{ history: MemoryHistory<unknown> | History }> = ({
  history,
}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch></Switch>
      </Router>
    </StylesProvider>
  );
};
