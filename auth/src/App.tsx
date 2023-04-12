import React, { FC } from "react";
import { Switch, Router, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { History } from "history";
import { MemoryHistory } from "history";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export const App: FC<{ history: MemoryHistory<unknown> | History }> = ({
  history,
}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
