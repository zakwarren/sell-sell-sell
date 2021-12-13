import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Header, MarketingApp } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  </StylesProvider>
);

export default App;
