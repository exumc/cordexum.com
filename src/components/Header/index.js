import React from "react";
import "./style.css"

class Header extends React.Component {
    render() {
        return (
            <header className="valign-wrapper">
                <div className="container">
                    <div className="center-align">
                        <h2 className="white-text">Welcome to my Home</h2>
                        <a className="waves-effect waves-light btn pink" href="#about" role="button">Let's Go!</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;