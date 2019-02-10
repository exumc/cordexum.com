import React from "react";
import "./style.css";
import M from "materialize-css";

class Wrapper extends React.Component {

  render() {
    return <div className="wrapper">{this.props.children}</div>;
  }
}

export default Wrapper;