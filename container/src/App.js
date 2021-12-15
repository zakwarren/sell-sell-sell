import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Header, AuthApp, MarketingApp } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthApp} />
        <Route path="/" component={MarketingApp} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
