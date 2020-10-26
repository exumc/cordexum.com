import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Nav;
