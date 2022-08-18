import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Wrap from "./Components/Wrap";
import Enter from "./Pages/Enter";
import Photography from "./Pages/Photography";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Enter} />
      <Route path="/home" component={Wrap} />
      <Route path="/about" component={Wrap} />
      <Route path="/contact" component={Wrap} />
      <Route exact path="/photography" component={Photography} />
      <Route exact path="/922093" component={Wrap} />
    </Router>
  );
}

export default App;
