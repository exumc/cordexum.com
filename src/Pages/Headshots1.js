import React from "react";
import M from "materialize-css";

class HeadShots1 extends React.Component {
  componentDidMount() {
    M.AutoInit();
    // if (this.props.location.pathname === "/home/portraits") {
    //   $(".portraits").addClass("active");
    //   $(".events, .studio").removeClass("active");
    // }
  }

  render() {
    let array = [
     '28','29','30','31','32','33','34','35','36'
    ];

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
      <div className="container headshots1">
        <div className="grid-container">{images}</div>
      </div>
    );
  }
}

export default HeadShots1;
