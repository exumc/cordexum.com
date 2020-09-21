import React from "react";
import "./style.css";
import { Col, Row } from "react-materialize";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

class GraphicDesign extends React.Component {
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
      <div className="container">
        <Row>
          <Link to="/portfolio">
            <i className="fas fa-chevron-left fa-3x left pink-text backBtn"></i>
          </Link>
        </Row>
        <Row className="portfolio">
          <Col s={12} l={4} className={"image-grid"}>
            <Link to="/hendrix">
              <div>
                <img
                  src={`../images/graphicdesign/fender.jpg`}
                  alt="Fender rebrand design"
                  className="responsive-img"
                />
              </div>
            </Link>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <Link to="/hch">
              <div>
                <img
                  src={`../images/graphicdesign/hch.jpg`}
                  alt="Headless Chicken Haberdashery fictional company"
                  className="responsive-img"
                />
              </div>
            </Link>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <Link to="/pixel2">
              <div>
                <img
                  src={`../images/graphicdesign/pixel.jpg`}
                  alt="Google Pixel 2 brochure design"
                  className="responsive-img"
                />
              </div>
            </Link>
          </Col>
        </Row>
        <SRLWrapper options={options}>
          <Row className="portfolio">
            <Col s={12} l={4} className={"image-grid"}>
              <img
                src={`../images/graphicdesign/1.jpg`}
                alt="Guitar Tutor app advertisement"
                className="responsive-img"
              />
            </Col>
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/2.jpg`}
                  alt="Cube amp magazine advertisement"
                  className="responsive-img"
                />
              </div>
            </Col>
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/3.jpg`}
                  alt="Davenport electric car poster"
                  className="responsive-img"
                />
              </div>
            </Col>
          </Row>
          <Row className="portfolio">
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/4.jpg`}
                  alt="Modern book cover for Dante's Inferno"
                  className="responsive-img"
                />
              </div>
            </Col>
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/5.jpg`}
                  alt="The Jackal fictional movie poster"
                  className="responsive-img"
                />
              </div>
            </Col>
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/6.jpg`}
                  alt="Han Solo branded beer advertisement"
                  className="responsive-img"
                />
              </div>
            </Col>
          </Row>
          <Row className="portfolio"></Row>
          <Row className="portfolio">
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/7.jpg`}
                  alt="Pokemon branded chocolate bar wrappers"
                  className="responsive-img"
                />
              </div>
            </Col>
            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/10.jpg`}
                  alt="Cocktails and Creatives for Las Vegas AIGA poster"
                  className="responsive-img"
                />
              </div>
            </Col>

            <Col s={12} l={4} className={"image-grid"}>
              <div>
                <img
                  src={`../images/graphicdesign/12.jpg`}
                  alt="Saint Vincent magazine spread redesign"
                  className="responsive-img"
                />
              </div>
            </Col>
          </Row>
        </SRLWrapper>
      </div>
    );
  }
}

export default GraphicDesign;
