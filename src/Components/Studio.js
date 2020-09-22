import React from "react";

class Studio extends React.Component {
  render() {
    let array = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

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

    return <div className="grid-container">{images}</div>;
  }
}

export default Studio;
