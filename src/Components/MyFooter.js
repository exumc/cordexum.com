import React from "react";
import dayjs from "dayjs";

const currentYear = () => {
  let now = dayjs();
  let year = now.format("YYYY");
  document.getElementById("year").innerHTML = year;
};

class MyFooter extends React.Component {
  componentDidMount() {
    currentYear();
  }
  render() {
    return (
      <div>
        <div className="container center-align">
          <p className="light">
            © 2020 - <span id="year" /> Cord Exum. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default MyFooter;
