import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './containers/About.jsx';
import Home from './containers/Home.jsx';
import Form from './containers/Form.jsx';
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
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
