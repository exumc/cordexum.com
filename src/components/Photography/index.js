import React from "react";
import "./style.css";
import { Col, Row } from "react-materialize";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

class Photography extends React.Component {
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
        {" "}
        <div className="container">
          <Row>
            <Link to="/portfolio">
              <i className="fas fa-chevron-left fa-3x left pink-text backBtn"></i>
            </Link>
          </Row>

          <Row>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/1.jpg"
                  alt="Black and White Ford Mustang toy"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/2.jpg"
                  alt="Red Ford GT toy"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/3.jpg"
                  alt="Women posing for Las Vegas Color run"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/4.jpg"
                  alt="Man in red sunglasses"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/5.jpg"
                  alt="Peacock statue at Dragon Lights Festival"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/6.jpg"
                  alt="Macro of a bee on orange flower"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/7.jpg"
                  alt="Macro of a butterfly/moth on yellow flower"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/8.jpg"
                  alt="Macro of a bee inside purple flower"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/9.jpg"
                  alt="Rainy shot of yellow bicycle and stairs"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/10.jpg"
                  alt="Rainy shot of yellow umbrella against grey building with a yellow firehydrant in front"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/11.jpg"
                  alt="Semi-macro of an orange plant in the rain"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/12.jpg"
                  alt="Shot of a discarded and broken umbrella in the rain"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/13.jpg"
                  alt="Shot of a pregnant model wearing an Indian headdress in the desert in front of water reflection"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/14.jpg"
                  alt="Shot of a musician holding his oboe in dramatic lighting"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/15.jpg"
                  alt="Shot of rainy walkway in downtown area"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
            <div class="col s12 l6 image-grid">
              <div class="photobox">
                <img
                  src="../images/photography/16.jpg"
                  alt="Shot of a line of red bicycles with car lights in the background"
                  class="responsive-img show-on-scroll"
                />
              </div>
            </div>
          </Row>
        </div>
      </SRLWrapper>
    );
  }
}

export default Photography;
