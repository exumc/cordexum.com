import React from "react";
import "./style.css";
import { Row, Col } from "react-materialize";

class MyFooter extends React.Component {
  render() {
    return (
      <footer className="page-footer grey darken-4 center">
        <div className="container">
          <Row>
            <Col s={4}>
              <ul>
                <li>cordexum@gmail.com</li>
                <li>702-582-5445</li>
              </ul>
            </Col>
            <Col s={4}>
              <span className="white-text">© 2017 Cord Exum</span>
            </Col>
            <Col s={4}>
              <ul className="list-inline">
                <li>
                  <a
                    className=""
                    href="https://www.instagram.com/iammisterpink/"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a className="" href="https://github.com/exumc">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a className="" href="https://www.linkedin.com/in/cordexum/">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
}

export default MyFooter;
