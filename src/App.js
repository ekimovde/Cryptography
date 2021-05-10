import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { NavbarBase } from "containers";
import {
  HomeBase,
  AtbashBase,
  ScitulaBase,
  PolybiusSquareBase,
  CaesarBase,
  CardanoBase,
  RichelieuBase,
  DiskBase,
  GronsfeldBase,
  VigenerBase,
  PlayfairBase,
  HillBase,
  VernamBase,
} from "containers";

import "styles/index.scss";

function App() {
  return (
    <div className="App">
      <NavbarBase />

      <Switch>
        <Route exact path="/" component={HomeBase} />
        <Route path="/atbash" component={AtbashBase} />
        <Route path="/scitula" component={ScitulaBase} />
        <Route path="/polybiusSquare" component={PolybiusSquareBase} />
        <Route path="/caesar" component={CaesarBase} />
        <Route path="/cardano" component={CardanoBase} />
        <Route path="/richelieu" component={RichelieuBase} />
        <Route path="/disk" component={DiskBase} />
        <Route path="/gronsfeld" component={GronsfeldBase} />
        <Route path="/vigener" component={VigenerBase} />
        <Route path="/playfair" component={PlayfairBase} />
        <Route path="/hill" component={HillBase} />
        <Route path="/vernam" component={VernamBase} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
