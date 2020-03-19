import React from "react";
import "./style.css";
import { Row } from "react-materialize";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

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
          <Link to="/graphicdesign">
            <i className="fas fa-chevron-left fa-3x left pink-text"></i>
          </Link>

          <div className="portfolio">
            <Row>
              <img
                src="./images/hch/HCH-logo.png"
                alt="Headless Chicken Haberdashery logo"
                className="show-on-scroll responsive-img"
              />
            </Row>
            <p className="flow-text show-on-scroll">
              Headless Chicken Haberdashery is a fictional clothing company with
              an online retail store. The meaning behind the company name and
              it's mission are aimed at informing about some of the atrocities
              retailers commit to animals in order to test their products for
              consumption.
            </p>
            <Row>
              <img
                src="./images/hch/website_1.jpg"
                alt="Headless Chicken Haberdashery website homepage"
                className="show-on-scroll responsive-img col s6"
              />
              <img
                src="./images/hch/website_2.jpg"
                alt="Headless Chicken Haberdashery website store categories"
                className="show-on-scroll responsive-img col s6"
              />
              <img
                src="./images/hch/website_3.jpg"
                alt="Headless Chicken Haberdashery website about page"
                className="show-on-scroll responsive-img col s6"
              />
              <img
                src="./images/hch/website_4.jpg"
                alt="Headless Chicken Haberdashery website store page"
                className="show-on-scroll responsive-img col s6"
              />
            </Row>
            <p className="flow-text show-on-scroll"></p>
            <Row>
              <img
                src="./images/hch/phone_1.png"
                alt="Headless Chicken Haberdashery mobile web design home"
                className="show-on-scroll responsive-img col"
              />
            </Row>
          </div>
        </div>
      </SRLWrapper>
    );
  }
}

export default HCH;
