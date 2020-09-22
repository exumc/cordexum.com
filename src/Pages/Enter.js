import React from "react";
import { Link } from "react-router-dom";

class Enter extends React.Component {
  render() {
    return (
      <div
        className="valign-wrapper enter"
        aria-label="Red Ford GT toy photography"
      >
        <div className="center-align welcome">
          <span className="white-text bold welcomeTxt">WELCOME HOME</span>
          <Link
            to="/home"
            className="waves-effect waves-light btn enterBtn bold"
            role="button"
          >
            Enter{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default Enter;
