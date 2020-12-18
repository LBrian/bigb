import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Header } from "./Components";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <div className="flex-1">
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
