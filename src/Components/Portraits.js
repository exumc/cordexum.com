import React from "react";
import M from "materialize-css";

class Portraits extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    let array = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

    let images = array.map((image) => {
      return (
        <div className="grid-item">
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
        <h1>Portraits</h1>
        <div className="grid-container">{images}</div>
      </div>
    );
  }
}

export default Portraits;
