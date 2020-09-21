import React from "react";
import "./style.css";
import { Col, Row } from "react-materialize";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

class Studio extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    let array = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15"
    ];

    let images = array.map(image => {
      return (
        <Col s={6} m={4} key={image}>
          <div className="photobox">
            <img
              src={`../images/studio/${image}.jpg`}
              alt=""
              className="responsive-img"
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

export default Studio;
