import React from "react";
import M from "materialize-css";
import $ from "jquery";

class Studio extends React.Component {
  componentDidMount() {
    M.AutoInit();
    if (this.props.location.pathname === "/home") {
      $(".studio").addClass("active");
      $(".events, .portraits").removeClass("active");
    }
  }
  render() {
    let array = ["10", "11", "12", "13", "14", "15", "16", "17", "18"];

    let images = array.map((image) => {
      return (
        <div className="grid-item" key={image}>
          <img
            src={`../images/portfolio/${image}.jpg`}
            alt=""
            className="responsive-img materialboxed"
          />
        </div>
      );
    });

    return <div className="grid-container">{images}</div>;
  }
}

export default Studio;
