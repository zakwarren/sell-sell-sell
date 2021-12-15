import React from "react";
import { Switch, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch></Switch>
    </Router>
  </StylesProvider>
);

export default App;
