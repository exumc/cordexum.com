import React from "react";
import "./style.css"
import Nav from '../Nav'
import GraphicDesign from '../GraphicDesign'
import WebDev from '../WebDev'
import Photography from '../Photography'
import {Route, Switch} from 'react-router-dom'

class Portfolio extends React.Component {
   
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path='/portfolio/graphicdesign' component={GraphicDesign} />
                    <Route path='/portfolio/webdev' component={WebDev} />
                    <Route path='/portfolio/photography' component={Photography} />
                </Switch>
            </div>
        )
    }
}

export default Portfolio