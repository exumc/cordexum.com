import React from "react";
import "./style.css"
import { Row } from "react-materialize"
import { Link } from 'react-router-dom'

class HCH extends React.Component {
    render() {
        return (
            <div className='container center'>
                <Link to='/graphicdesign'><i class="fas fa-chevron-left fa-3x left pink-text"></i></Link>

                <div className="portfolio">
                    <Row>
                        <img src='./images/hch/HCH-logo.png' alt='' className='responsive-img' />
                    </Row>
                    <p className='flow-text'>Headless Chicken Haberdashery is a fictional clothing company with an online retail store. The meaning behind the company name and it's mission are aimed at informing about some of the atrocities retailers commit to animals in order to test their products for consumption.</p>
                    <Row>
                        <img src='./images/hch/website_1.jpg' alt='' className='slideanim responsive-img col s6' />
                        <img src='./images/hch/website_2.jpg' alt='' className='slideanim responsive-img col s6' />
                        <img src='./images/hch/website_3.jpg' alt='' className='slideanim responsive-img col s6' />
                        <img src='./images/hch/website_4.jpg' alt='' className='slideanim responsive-img col s6' />
                    </Row>
                    <p className='flow-text slideanim'></p>
                    <Row>
                        <img src='./images/hch/phone_1.png' alt='' className='slideanim responsive-img col' />
                    </Row>
                </div>
            </div>)
    }
}

export default HCH