import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { SignIn, SignUp } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

const App = ({ history, onSignIn }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route
          path="/auth/signin"
          render={() => <SignIn onSignIn={onSignIn} />}
        />
        <Route
          path="/auth/signup"
          render={() => <SignUp onSignIn={onSignIn} />}
        />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
