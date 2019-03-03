import React from "react";
import "./style.css";
import { Col } from 'react-materialize'

class Photography extends React.Component {

    render() {
        let array = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'
        ];

        let images = array.map(image => {
            return (<Col s={6} m={3}>
                <div className="photobox">
                    <img key={image} src={`./images/photography/${image}.jpg`} alt='' className="materialboxed responsive-img" />
                </div>
            </Col>)
        });

        return (
            <div className="row">
                {images}
            </div>
        )
    }
}

export default Photography