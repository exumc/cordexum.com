import React from "react";
import "./style.css";
import { Col, Row } from "react-materialize";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

class Pets extends React.Component {
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
    let array = ["01", "02", "03", "04", "05", "06", "07", "08"];

    let images = array.map(image => {
      return (
        <Col s={12} l={6} key={image} className={"image-grid"}>
          <div className="photobox">
            <img
              src={`../images/portfolio/${image}.jpg`}
              alt=""
              className="responsive-img show-on-scroll"
            />
          </div>
        </Col>
      );
    });

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
        <SRLWrapper options={options}>
          <Row>{images}</Row>
        </SRLWrapper>
      </div>
    );
  }
}

export default Pets;
