import React from 'react';
import Clock from 'react-live-clock';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';

const Navbar = () => {
  let todayDate = new Date().toDateString();

  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <p className="right">
          {todayDate} | <Clock format={'HH:mm:ss'} ticking={true} />
        </p>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
  );
};

export default Navbar;
