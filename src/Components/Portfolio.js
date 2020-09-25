import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Studio from "./Studio";
import Portraits from "./Portraits";
import Events from "./Events";

class Portfolio extends React.Component {
  render() {
    return (
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

        <Route path="/home" component={Studio} />
        <Route path="/home/events" component={Events} />
        <Route path="/home/portraits" component={Portraits} />
      </div>
    );
  }
}

export default Portfolio;
