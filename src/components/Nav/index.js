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
            <nav className="slide">
                <div className="nav-wrapper white">
                    <a href="#nav" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li><a href="/" className="btn pink">Home</a></li>
                    </ul>

                    <ul className="sidenav" id="slide-out">
                        <li><Link to="/portfolio/graphicdesign" className="navLink sidenav-close">Graphic Design</Link></li>
                        <li><Link to="/portfolio/webdev" className="navLink sidenav-close">Web Development</Link></li>
                        <li><Link to="/portfolio/photography" className="navLink sidenav-close">Photography</Link></li>
                        <li><a href="/" className="navLink sidenav-close">Home</a></li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Nav