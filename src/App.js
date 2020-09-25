import React from "react";
import "./App.scss";
import Wrap from "./Components/Wrap";
import Enter from "./Pages/Enter";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Enter} />
      <Route path="/home" component={Wrap} />
    </Router>
  );
}

export default App;
