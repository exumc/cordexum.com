import React from "react";
import "./style.css";
import { Row } from "react-materialize";
import { Link } from "react-router-dom";

class HCH extends React.Component {
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
        <Link to="/graphicdesign">
          <i className="fas fa-chevron-left fa-3x left pink-text"></i>
        </Link>

        <div className="portfolio">
          <Row>
            <img
              src="./images/hch/HCH-logo.png"
              alt=""
              className="show-on-scroll responsive-img"
            />
          </Row>
          <p className="flow-text show-on-scroll">
            Headless Chicken Haberdashery is a fictional clothing company with
            an online retail store. The meaning behind the company name and it's
            mission are aimed at informing about some of the atrocities
            retailers commit to animals in order to test their products for
            consumption.
          </p>
          <Row>
            <img
              src="./images/hch/website_1.jpg"
              alt=""
              className="show-on-scroll responsive-img col s6"
            />
            <img
              src="./images/hch/website_2.jpg"
              alt=""
              className="show-on-scroll responsive-img col s6"
            />
            <img
              src="./images/hch/website_3.jpg"
              alt=""
              className="show-on-scroll responsive-img col s6"
            />
            <img
              src="./images/hch/website_4.jpg"
              alt=""
              className="show-on-scroll responsive-img col s6"
            />
          </Row>
          <p className="flow-text show-on-scroll"></p>
          <Row>
            <img
              src="./images/hch/phone_1.png"
              alt=""
              className="show-on-scroll responsive-img col"
            />
          </Row>
        </div>
      </div>
    );
  }
}

export default HCH;
