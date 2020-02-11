import React from "react";
import "./style.css";
import { Col, Row } from 'react-materialize'
import M from "materialize-css";

class Pets extends React.Component {
    componentDidMount() {
        M.AutoInit();
    
        const callback = function(entries) {
          entries.forEach(entry => {
            entry.target.classList.toggle("is-visible");
          });
        };
    
        const observer = new IntersectionObserver(callback);
    
        const targets = document.querySelectorAll(".show-on-scroll");
        targets.forEach(function(target) {
          observer.observe(target);
        });
      }
    render() {
        let array = [
            '01', '02', '03', '04', '05', '06', '07', '08'
        ];

        let images = array.map(image => {
            return (<Col s={12} l={6} key={image} className={"image-grid"}>
                <div className="photobox">
                    <img src={`../images/portfolio/${image}.jpg`} alt='' className="materialboxed responsive-img show-on-scroll" />
                </div>
            </Col>)
        });

        return (
            <div className="container">
                <Row>
                    {images}
                </Row>
            </div>
        )
    }
}

export default Pets