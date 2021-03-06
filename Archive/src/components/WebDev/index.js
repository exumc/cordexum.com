import React from "react";
import "./style.css";
import { Col, Row } from "react-materialize";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

class WebDev extends React.Component {
  componentDidMount() {
    M.AutoInit();

    const callback = function(entries) {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-visible");
      });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach(function(target) {
      observer.observe(target);
    });
  }
  render() {
    const options = {
      overlayColor: "#212121",
      showThumbnails: false,
      enablePanzoom: false,
      captionFontFamily: "Raleway, sans-serif",
      captionFontSize: "22px",
      captionFontWeight: "300",
      transitionSpeed: 900
    };
    return (
      <SRLWrapper options={options}>
        <div className="container show-on-scroll">
          <Row>
            <Link to="/portfolio">
              <i className="fas fa-chevron-left fa-3x left pink-text backBtn"></i>
            </Link>
          </Row>
          <Row className="portfolio">
            <Col s={12} l={4}>
              <a
                href="https://beardybones.github.io/Si-Cicerone/"
                className="link"
              >
                Si Cicerone!
              </a>
              <a
                href="https://github.com/beardybones/Si-Cicerone"
                className="link right"
              >
                <i className="fab fa-github "></i>Code
              </a>
              <img
                src="../images/1.jpg"
                className="responsive-img"
                alt="Web UI showcase for fictional beer sommelier app"
              />
            </Col>
            <Col s={12} l={4}>
              <a
                href="https://up-style-clothing.herokuapp.com/"
                className="link"
              >
                upStyle Clothing
              </a>
              <a
                href="https://github.com/exumc/Up_Style_Clothing"
                className="link right"
              >
                <i className="fab fa-github "></i>Code
              </a>
              <img
                src="../images/5.jpg"
                className="responsive-img"
                alt="Web UI showcase for fictional clothing store"
              />
            </Col>
            <Col s={12} l={4}>
              <a href="https://keep-it-running.herokuapp.com/" className="link">
                Keep it Running
              </a>
              <a
                href="https://github.com/exumc/Cars-Such"
                className="link right"
              >
                <i className="fab fa-github "></i>Code
              </a>
              <img
                src="../images/3.jpg"
                className="responsive-img"
                alt="Web UI showcase for fictional personal car information app"
              />
            </Col>
          </Row>
          <Row>
            <p className="disclaimer center">
              Some of the above websites funcionalities may no longer be
              workding due to free or limited access APIs.
            </p>
          </Row>
        </div>{" "}
      </SRLWrapper>
    );
  }
}

export default WebDev;
