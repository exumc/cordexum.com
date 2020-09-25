import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "../Pages/About";
import Contact from "../Pages/Contact";

import Nav from "../Components/Nav";
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
            <Route exact path="/home">
              <div className="portfolio-links">
                <div>
                  <Link to="/home" className="studio">
                    Studio
                  </Link>
                </div>
                <div>
                  <Link to="/home/events" className="events">
                    Events
                  </Link>
                </div>
                <div>
                  <Link to="/home/portraits" className="portraits">
                    Portraits
                  </Link>
                </div>
              </div>
            </Route>
            <Route exact path="/home" component={Studio} />
            <Route exact path="/home/events" component={Events} />
            <Route exact path="/home/portraits" component={Portraits} />
            <Route exact path="/home/about" component={About} />
            <Route exact path="/home/contact" component={Contact} />
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
