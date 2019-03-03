import React from "react";
import "./style.css"
import Nav from '../Nav'

class Porfolio extends React.Component {

    render() {
        return (
            <div>
                <Nav></Nav>
                {this.props.children}
            </div>
        )
    }
}

export default Porfolio