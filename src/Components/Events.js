import React from "react";

class Events extends React.Component {
  render() {
    let array = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

    let images = array.map((image) => {
      return (
        <div className="grid-item">
          <img
            src={`../images/events/${image}.jpg`}
            alt=""
            className="responsive-img"
          />
        </div>
      );
    });

    return (
      <div>
        <h1>Events</h1>
        <div className="grid-container">{images}</div>
      </div>
    );
  }
}

export default Events;
