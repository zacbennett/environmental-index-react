import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Routing from './Routing.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import './style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
