import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { SignIn, SignUp } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin" component={SignIn} />
        <Route path="/auth/signup" component={SignUp} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
