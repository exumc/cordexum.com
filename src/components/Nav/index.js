import React from "react";
import "./style.css"
import { Link } from 'react-router-dom'
import M from "materialize-css";

class Nav extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper pink">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li><Link to="/portfolio/graphicdesign">Graphic Design</Link></li>
                        <li><Link to="/portfolio/webdev">Web Development</Link></li>
                        <li><Link to="/portfolio/photography">Photography</Link></li>
                    </ul>

                    <ul className="sidenav" id="slide-out">
                        <li><Link to="/portfolio/graphicdesign" className="navLink sidenav-close">Graphic Design</Link></li>
                        <li><Link to="/portfolio/webdev" className="navLink sidenav-close">Web Development</Link></li>
                        <li><Link to="/portfolio/photography"  className="navLink sidenav-close">Photography</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav