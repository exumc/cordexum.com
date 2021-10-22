import React from "react";
import M from "materialize-css";
import $ from "jquery";

class Events extends React.Component {
  componentDidMount() {
    M.AutoInit();
    if (this.props.location.pathname === "/home/events") {
      $(".events").addClass("active");
      $(".studio, .portraits").removeClass("active");
    }
  }
  render() {
    let array = ["19", "20", "21", "22", "23", "24", "25", "26", "27"];

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

    return (
      <div>
        <div className="grid-container">{images}</div>
      </div>
    );
  }
}

export default Events;
