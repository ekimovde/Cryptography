import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { NavbarBase } from "containers";
import { Home, Atbash, Scitula, PolybiusSquare, Caesar } from "pages";

import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <NavbarBase />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/atbash" component={Atbash} />
        <Route path="/scitula" component={Scitula} />
        <Route path="/polybiusSquare" component={PolybiusSquare} />
        <Route path="/caesar" component={Caesar} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
