import React from "react";
import M from "materialize-css";

class BigPage extends React.Component {
  componentDidMount() {
    M.AutoInit();
    // if (this.props.location.pathname === "/home/portraits") {
    //   $(".portraits").addClass("active");
    //   $(".events, .studio").removeClass("active");
    // }
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
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
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
      <div className="container bigPage">
        <div className="grid-container">{images}</div>
      </div>
    );
  }
}

export default BigPage;
