import React from "react";
import "./style.css";
import { Col, Row } from "react-materialize";
import { Link } from "react-router-dom";
import M from "materialize-css";

class GraphicDesign extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
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
                  alt=""
                  className="responsive-img materialboxed"
                />
              </div>
            </Link>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <Link to="/hch">
              <div>
                <img
                  src={`../images/graphicdesign/hch.jpg`}
                  alt=""
                  className="responsive-img materialboxed"
                />
              </div>
            </Link>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <Link to="/pixel2">
              <div>
                <img
                  src={`../images/graphicdesign/pixel.jpg`}
                  alt=""
                  className="responsive-img materialboxed"
                />
              </div>
            </Link>
          </Col>
        </Row>

        <Row className="portfolio">
          <Col s={12} l={4} className={"image-grid"}>
              <img
                src={`../images/graphicdesign/1.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/2.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/3.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>
        </Row>

        <Row className="portfolio">
          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/4.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/5.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/6.jpg`}
                alt=""
                className="responsive-img materialboxed"
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
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>
          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/10.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>

          <Col s={12} l={4} className={"image-grid"}>
            <div>
              <img
                src={`../images/graphicdesign/12.jpg`}
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GraphicDesign;
