import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Header, Progress } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

const AuthApp = lazy(() => import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route
              path="/auth"
              render={() => <AuthApp onSignIn={() => setIsSignedIn(true)} />}
            />
            <Route path="/dashboard" component={DashboardApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
