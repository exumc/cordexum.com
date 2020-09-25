import React from "react";
import M from "materialize-css";
import $ from "jquery";

class Portraits extends React.Component {
  componentDidMount() {
    M.AutoInit();
    if (this.props.location.pathname === "/home/portraits") {
      $(".portraits").addClass("active");
      $(".events, .studio").removeClass("active");
    }
  }
  render() {
    let array = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

    let images = array.map((image) => {
      return (
        <div className="grid-item" key={image}>
          <img
            src={`../images/portraits/${image}.jpg`}
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

export default Portraits;
