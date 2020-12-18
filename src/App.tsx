import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About, Header } from "./Components";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <div className="flex-1">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <span>Im a frontend/React/JS developer, more to come...</span>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
