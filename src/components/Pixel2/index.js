import React from "react";
import "./style.css";
import { Row } from "react-materialize";
import { Link } from "react-router-dom";

class Pixel2 extends React.Component {
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
    return (
      <div className="container center">
        <div className="portfolio">
          <Link to="/graphicdesign">
            <i className="fas fa-chevron-left fa-3x left pink-text"></i>
          </Link>
          <Row>
            <img
              src="./images/pixel2/Design_01.jpg"
              alt=""
              className="show-on-scroll responsive-img col s6 offset-s3 pixel-img"
            />
          </Row>
          <p className="flow-text show-on-scroll">
            The Google Pixel 2 and Pixel 2 xl are cutting edge smartphones
            designed around simple and powerful tools.
          </p>
          <Row>
            <img
              src="./images/pixel2/Design_02.jpg"
              alt=""
              className="show-on-scroll responsive-img col s4 pixel-img"
            />
            <img
              src="./images/pixel2/Design_03.jpg"
              alt=""
              className="show-on-scroll responsive-img col s4 pixel-img"
            />
            <img
              src="./images/pixel2/Design_04.jpg"
              alt=""
              className="show-on-scroll responsive-img col s4 pixel-img"
            />
          </Row>
          <p className="flow-text show-on-scroll">
            The Pixel 2 is the perfect smartphone for artists that work in any
            medium. Weather you are a photographer, musician, or painter you can
            find an app that will allow you to take your art to the next level.
          </p>
          <Row>
            <img
              src="./images/pixel2/Design_05.jpg"
              alt=""
              className="show-on-scroll responsive-img col s6 offset-s3 pixel-img"
            />
          </Row>
        </div>
      </div>
    );
  }
}

export default Pixel2;
