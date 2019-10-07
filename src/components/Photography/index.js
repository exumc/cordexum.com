import React from "react";
import "./style.css";
import { Col, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import M from "materialize-css";

class Photography extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        let array = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'
        ];

        let images = array.map(image => {
            return (<Col s={12} l={6} key={image} className={"image-grid"}>
                <div className="photobox">
                    <img src={`../images/photography/${image}.jpg`} alt='' className="materialboxed responsive-img" />
                </div>
            </Col>)
        });

        return (
            <div className="container">
                <Row>
                    <Link to='/portfolio'><i className="fas fa-chevron-left fa-3x left pink-text backBtn"></i></Link>
                </Row>
                <Row>
                    {images}
                </Row>
            </div>
        )
    }
}

export default Photography