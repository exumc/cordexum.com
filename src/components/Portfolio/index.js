import React from "react";
import "./style.css"
import Nav from '../Nav'
import GraphicDesign from '../GraphicDesign'
import WebDev from '../WebDev'
import Photography from '../Photography'
import { Route, Switch, Link } from 'react-router-dom'
import { Row, Col } from 'react-materialize'

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/graphicdesign' component={GraphicDesign} />
                    <Route exact path='/webdev' component={WebDev} />
                    <Route exact path='/photography' component={Photography} />
                    <Route exact path='/portfolio'>
                        <Row className="">
                            <Col s={12} l={4}>
                                <Link to='/graphicdesign'>
                                    <div className="center-align">
                                        <h4>Graphic Design</h4>
                                        <img src={`../images/graphicdesign/fender.jpg`} alt='' className="responsive-img" />
                                    </div>
                                </Link>
                            </Col>
                            <Col s={12} l={4}>
                                <Link to='/webdev'>
                                    <div className="center-align">
                                        <h4>Web Development</h4>
                                        <img src={`../images/3.jpg`} alt='' className="responsive-img" />
                                    </div>
                                </Link>
                            </Col>
                            <Col s={12} l={4}>
                                <Link to='/photography'>
                                    <div className="center-align">
                                        <h4>Photography</h4>
                                        <img src={`../images/photography/01.jpg`} alt='' className="responsive-img" />
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Route>
                </Switch>



            </div>
        )
    }
}

export default Portfolio