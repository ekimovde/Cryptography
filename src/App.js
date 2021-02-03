import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { NavbarBase } from "containers";
import { Home, Atbash } from "pages";

import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <NavbarBase />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/atbash" component={Atbash} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
