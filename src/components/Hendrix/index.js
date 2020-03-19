import React from "react";
import "./style.css";
import { Row } from "react-materialize";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

class Hendrix extends React.Component {
  componentDidMount() {
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
        <div className="container center">
          <div className="portfolio">
            <Link to="/graphicdesign">
              <i className="fas fa-chevron-left fa-3x left pink-text"></i>
            </Link>
            <Row>
              <img
                src="./images/hendrix/fenderLogoType.png"
                alt="Hendrix fender logo type brand"
                className="show-on-scroll responsive-img"
              />
            </Row>

            <p className="flow-text show-on-scroll">
              The Hendrix name is iconic amongst guitarists old and young alike.
              Often ranked as one of the best to have ever picked up a
              six-string, his name has become synonymous with greatness.
            </p>
            <Row>
              <img
                src="./images/hendrix/LogoMark.jpg"
                alt="Hendrix fender logo mark"
                className="show-on-scroll responsive-img"
              />
            </Row>
            <p className="flow-text show-on-scroll">
              Fender guitars are known for their elegance, beautiful tone, and
              smooth playability, and are loved by both veteran and new players
              alike. The Hendrix brand is the cream of the crop amongst all
              Fender guitars.
            </p>
            <Row>
              <img
                src="./images/hendrix/Stationary.jpg"
                alt="Hendrix fender stationary set"
                className="show-on-scroll responsive-img"
              />
            </Row>
            <p className="flow-text show-on-scroll">
              The Hendrix brand was designed around the man himself who was
              bright and full of color. His uniqueness, his style, his sound are
              all things that Fender strives to replicate and showcase with the
              Hendrix signature line of products.
            </p>
            <Row>
              <img
                src="./images/hendrix/Hendrix-brand-guidelines.jpg"
                alt="Hendrix fender mood board"
                className="show-on-scroll responsive-img"
              />
            </Row>
          </div>
        </div>
      </SRLWrapper>
    );
  }
}

export default Hendrix;
