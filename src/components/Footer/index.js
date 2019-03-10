import React from "react";
import "./style.css"
import { Row, Col } from 'react-materialize'


class MyFooter extends React.Component {
    render() {
        return (
            <footer className="page-footer pink center">
                <div className="container">
                    <Row>
                        <Col s={6}>
                            <h5 className="white-text">Cord Exum</h5>
                            <ul>
                                <li>cordexum@gmail.com</li>
                                <li>702-575-5446</li>

                            </ul>
                        </Col>
                        <Col s={6}>
                            <ul className="list-inline">
                                <li><a className="" href="https://www.instagram.com/iammisterpink/"><i className="fab fa-instagram fa-2x"></i></a></li>
                                <li><a className="" href="https://github.com/exumc"><i className="fab fa-github fa-2x"></i></a></li>
                                <li><a className="" href="https://www.linkedin.com/in/cordexum/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                            </ul>
                         
                        </Col>
                    </Row>
                </div>

                <div className="footer-copyright">
                    <Row>
                        <Col s={12}>
                            <span className="white-text">©Cord Exum 2017</span>
                        </Col>
                    </Row>
                </div>

            </footer>
        )
    }
}

export default MyFooter;