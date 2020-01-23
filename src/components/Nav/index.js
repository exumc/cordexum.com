import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Nav extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <nav className="slide transparent">
        <div className="nav-wrapper ">
          <a
            href="#nav"
            data-target="slide-out"
            className="sidenav-trigger pink-text"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="hide-on-med-and-down">
            <li>
              <Link to="/" className="btn pink center">
                Home
              </Link>
            </li>
          </ul>

          <ul className="sidenav" id="slide-out">
            <li>
              <Link to="/" className="navLink sidenav-close">
                Home
              </Link>
            </li>
            <li>
              <Link to="/graphicdesign" className="navLink sidenav-close">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/webdev" className="navLink sidenav-close">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/photography" className="navLink sidenav-close">
                Photography
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
