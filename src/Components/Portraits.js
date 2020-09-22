import React from "react";

class Portraits extends React.Component {
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
    ];

    let images = array.map((image) => {
      return (
        <div className="grid-item">
          <img
            src={`../images/studio/${image}.jpg`}
            alt=""
            className="responsive-img"
          />
        </div>
      );
    });

    return (
      <div>
        <h1>Portraits</h1>
        <div className="grid-container">{images}</div>
      </div>
    );
  }
}

export default Portraits;
