import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "bootswatch/dist/darkly/bootstrap.min.css";

//components import
import AppHeader from "../app-header";
import AppMain from "../app-main";
import About from "../about";
import Contacts from "../contacts";
import AppFooter from "../app-footer";
import Score from "../score";

//scc app
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <main className="main mx-auto mt-2">
          <Switch>
            <Route exact path="/" component={AppMain} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/score" component={Score} />
            <Route component={AppMain} />
          </Switch>
        </main>

        <footer>
          <Route path="/" component={AppFooter} />
        </footer>
      </div>
    );
  }
}
