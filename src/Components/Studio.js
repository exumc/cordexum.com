import React from "react";
import M from "materialize-css";

class Studio extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    let array = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

    let images = array.map((image) => {
      return (
        <div className="grid-item">
          <img
            src={`../images/studio/${image}.jpg`}
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
