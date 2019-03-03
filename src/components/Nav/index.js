import React from "react";
import "./style.css"
import {Link} from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper pink">
                    <ul id="nav-mobile" class="hide-on-med-and-down ">
                        <li><Link to="/graphicdesign">Graphic Design</Link></li>
                        <li><Link to="/webdev">Web Development</Link></li>
                        <li><Link to="/photography">Photography</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav