import React from "react";
import "./style.css"
import { Col, Row } from "react-materialize"
import { Link } from 'react-router-dom'
class GraphicDesign extends React.Component {
    render() {
        return (
            <Row className="portfolio">
                <Col s={12} l={4}>
                    <Link to='/hendrix'>
                        <div>
                            <img src={`../images/hendrix/fenderLogoType.png`} alt='' className="responsive-img" />
                        </div>
                    </Link>
                </Col>
                <Col s={12} l={4}>
                    <Link to='/hch'>
                        <div>
                            <img src={`../images/hch/HCH-logo.png`} alt='' className="responsive-img" />
                        </div>
                    </Link>
                </Col>
                <Col s={12} l={4}>
                    <Link to='/pixel2'>
                        <div>
                            <img src={`../images/pixel2/Design_01.jpg`} alt='' className="responsive-img" />
                        </div>
                    </Link>
                </Col>
            </Row>
        )
    }
}

export default GraphicDesign