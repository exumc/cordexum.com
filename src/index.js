import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hendrix from "./components/Hendrix";
import Pixel2 from "./components/Pixel2";
import Hch from "./components/Hch";
import Portfolio from "./components/Portfolio";
import Studio from "./components/Studio";
import GraphicDesign from "./components/GraphicDesign";
import WebDev from "./components/WebDev";
import Photography from "./components/Photography";
import Header from "./components/Header";
import Pets from "./components/Pets";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <SimpleReactLightbox>
    <Router>
      <div>
        <Route exact path="/" component={Header} />
        <Route path="/main" component={App} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/hendrix" component={Hendrix} />
        <Route path="/pixel2" component={Pixel2} />
        <Route path="/hch" component={Hch} />
        <Route path="/studio" component={Studio} />
        <Route path="/graphicdesign" component={GraphicDesign} />
        <Route path="/webdev" component={WebDev} />
        <Route path="/photography" component={Photography} />
        <Route path="/animals" component={Pets} />
      </div>
    </Router>{" "}
  </SimpleReactLightbox>,
  document.getElementById("root")
);
