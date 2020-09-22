import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Enter from "./Pages/Enter";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Nav from "./Components/Nav";
import MyFooter from "./Components/MyFooter";
import Studio from "./Components/Studio";
import Events from "./Components/Events";
import Portraits from "./Components/Portraits";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Enter} />

      <header>
        <Nav />
      </header>
      <main>
        <Home>
          <Route path="/home">
            <div className="mainPage">
              <div className="container portfolio-links">
                <div>
                  <Link to="/home">Studio</Link>
                </div>
                <div>
                  <Link to="/home/events">Events</Link>
                </div>
                <div>
                  <Link to="/home/portraits">Portraits</Link>
                </div>
              </div>
              <Route exact path="/home" component={Studio} />
              <Route exact path="/home/events" component={Events} />
              <Route exact path="/home/portraits" component={Portraits} />
            </div>
          </Route>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Home>
      </main>
      <footer className="page-footer grey darken-3">
        <MyFooter />
      </footer>
    </Router>
  );
}

export default App;
