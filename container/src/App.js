import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, MarketingApp } from "./components";

const App = () => (
  <BrowserRouter>
    <Header />
    <MarketingApp />
  </BrowserRouter>
);

export default App;
