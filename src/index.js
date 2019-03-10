import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hendrix from './components/Hendrix'
import Pixel2 from './components/Pixel2'
import Hch from './components/Hch'
import Portfolio from './components/Portfolio'
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
      <Router>
            <div>
                  <Route exact path='/' component={App} />
                  <Route path='/portfolio' component={Portfolio} />
                  <Route path='/hendrix' component={Hendrix} />
                  <Route path='/pixel2' component={Pixel2} />
                  <Route path='/hch' component={Hch} />
            </div>
      </Router>,
      document.getElementById("root")
);