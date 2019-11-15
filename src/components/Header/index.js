import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className="valign-wrapper">
                <div className="container">
                    <div className="center-align">
                        <h2 className="white-text bold">Welcome to my Home</h2>
                        <Link to="/main" className="waves-effect waves-light btn pink bold" role="button">Let's Go!</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;