import React from "react";
import "./style.css";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

class Main extends React.Component {
  componentDidMount() {
    M.AutoInit();
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
      <main>
        <div
          className="section container container-lg valign-wrapper"
          id="about"
        >
          <div className="container">
            <Row>
              <p>
                I am a Graphic Designer with extensive expertise in Photography
                and Web Development. I specialize in Responsive-driven Web
                experiences, Event photography, music-focused Videography and
                Beautiful Advertising. I strive above all else to keep evolving
                as an Artist. My passion for pleasing aesthetics is the
                motivation behind everything I create.
              </p>
            </Row>
          </div>
        </div>

        <div className="section container-lg valign-wrapper" id="portfolio">
          <div className="container text-center">
            <SRLWrapper options={options}>
              <Row>
                <Col s={4}>
                  <img
                    tabindex="0"
                    src="./images/1.jpg"
                    className="responsive-img"
                    alt="Web UI showcase for fictional beer sommelier app"
                  />
                </Col>

                <Col s={4}>
                  <img
                    src="./images/5.jpg"
                    className="responsive-img"
                    alt="Web UI showcase for fictional clothing store"
                  />
                </Col>

                <Col s={4}>
                  <img
                    src="./images/3.jpg"
                    className="responsive-img"
                    alt="Web UI showcase for fictional personal car information app"
                  />
                </Col>
              </Row>
              <Row id="gdesign">
                <Col s={4}>
                  <img
                    src="./images/10.jpg"
                    className="responsive-img"
                    alt="Cube amp magazine advertisement"
                  />
                </Col>
                <Col s={4}>
                  <img
                    src="./images/11.jpg"
                    className="responsive-img"
                    alt="Hendrix fender mood board"
                  />
                </Col>
                <Col s={4}>
                  <img
                    src="./images/12.jpg"
                    className="responsive-img"
                    alt="Davenport electric car poster"
                  />
                </Col>
              </Row>
              <Row id="photography">
                <Col s={4}>
                  <img
                    src="./images/7.jpg"
                    className="responsive-img"
                    alt="Darth Vader toy against red background"
                  />
                </Col>
                <Col s={4}>
                  <img
                    src="./images/8.jpg"
                    className="responsive-img"
                    alt="Mace Windu toy against purple background"
                  />
                </Col>
                <Col s={4}>
                  <img
                    src="./images/9.jpg"
                    className="responsive-img"
                    alt="Luke Skywalker toy against blue background"
                  />
                </Col>
              </Row>
            </SRLWrapper>
          </div>
        </div>
        <Row className="center-align">
          <Link to="/portfolio" className="waves-effect waves-light btn pink">
            My Portfolio
          </Link>
        </Row>
      </main>
    );
  }
}

export default Main;
