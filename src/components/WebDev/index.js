import React from "react";
import "./style.css"
import { Col, Row } from "react-materialize"
import M from "materialize-css";

class WebDev extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <Row className="portfolio">
                <Col s={12} l={4}>
                    <a href="https://beardybones.github.io/Si-Cicerone/" className="link">Si Cicerone!</a>
                    <a href="https://github.com/beardybones/Si-Cicerone" className="link right"><i className="fab fa-github "></i>Code</a>
                    <img src="../images/1.jpg" className="materialboxed responsive-img" alt="" />
                </Col>
                <Col s={12} l={4}>
                    <a href="https://up-style-clothing.herokuapp.com/" className="link">upStyle Clothing</a>
                    <a href="https://github.com/exumc/Up_Style_Clothing" className="link right"><i className="fab fa-github "></i>Code</a>
                    <img src="../images/5.jpg" className="materialboxed responsive-img" alt="" />
                </Col>
                <Col s={12} l={4}>
                    <a href="https://keep-it-running.herokuapp.com/" className="link">Keep it Running</a>
                    <a href="https://github.com/exumc/Cars-Such" className="link right"><i className="fab fa-github "></i>Code</a>
                    <img src="../images/3.jpg" className="materialboxed responsive-img" alt="" />
                </Col>

            </Row>


        )
    }
}

export default WebDev