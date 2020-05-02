import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './containers/About.jsx';
import Home from './containers/Home.jsx';
export default class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}
