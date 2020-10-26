import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "../Pages/About";
import Contact from "../Pages/Contact";

import Nav from "../Components/Nav";
import PortfolioNav from "../Components/PortfolioNav";

import MyFooter from "../Components/MyFooter";
import Studio from "../Components/Studio";
import Events from "../Components/Events";
import Portraits from "../Components/Portraits";

class Wrap extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <Nav />
        </header>
        <main>
          <div className="mainPage container">
            <Route path="/home">
              <PortfolioNav />
              <Route exact path="/home" component={Studio} />
              <Route exact path="/home/events" component={Events} />
              <Route exact path="/home/portraits" component={Portraits} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </main>
        <footer className="page-footer grey darken-3">
          <MyFooter />
        </footer>
      </Router>
    );
  }
}

export default Wrap;
