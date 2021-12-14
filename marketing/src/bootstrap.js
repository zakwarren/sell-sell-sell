import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import App from "./App";

const mount = (el, { onNavigate }) => {
  const history = createBrowserHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);
};

export { mount };
