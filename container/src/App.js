import React, { Suspense, lazy, useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Header, Progress } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });
const history = createBrowserHistory();

const AuthApp = lazy(() => import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
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
            <Route
              path="/dashboard"
              render={() =>
                !isSignedIn ? <Redirect to="/" /> : <DashboardApp />
              }
            />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};

export default App;
