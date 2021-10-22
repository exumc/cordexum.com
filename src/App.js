import React from "react";
import "./App.scss";
import Wrap from "./Components/Wrap";
import Enter from "./Pages/Enter";
import BigPage from "./Pages/BigPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Enter} />
      <Route path="/home" component={Wrap} />
      <Route path="/about" component={Wrap} />
      <Route path="/contact" component={Wrap} />
      <Route exact path="/bigpage" component={BigPage} />
    </Router>
  );
}

export default App;
