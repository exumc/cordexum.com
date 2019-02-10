import React from "react";
import "./style.css"

class Header extends React.Component {
    render() {
        return (
            <header className="valign-wrapper">
                <video id="video-background" preload="true" muted autoPlay loop>
                    <source src="https://www.cordexum.com/assets/videos/AmazingDay.mp4" type="video/mp4" />
                </video>

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