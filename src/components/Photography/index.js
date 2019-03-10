import React from "react";
import "./style.css";
import { Col, Row } from 'react-materialize'
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
            return (<Col s={6} m={3} key={image}>
                <div className="photobox">
                    <img  src={`../images/photography/${image}.jpg`} alt='' className="materialboxed responsive-img" />
                </div>
            </Col>)
        });

        return (
            <Row> 
                {images}
            </Row>
        )
    }
}

export default Photography