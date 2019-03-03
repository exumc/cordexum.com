import React from "react";
import "./style.css"
import { Row } from "react-materialize"
import { Link } from 'react-router-dom'

class Pixel2 extends React.Component {
    render() {
        return (
            <div className='container center'>
                <div className="portfolio">
                    <Link to='/graphicdesign'><i class="fas fa-chevron-left fa-3x left pink-text"></i></Link>
                    <Row>
                        <img src='./images/pixel2/Design_01.jpg' alt='' className='responsive-img col s6 offset-s3 pixel-img' />
                    </Row>
                    <p className='flow-text'>The Google Pixel 2 and Pixel 2 xl are cutting edge smartphones designed around simple and powerful tools.</p>
                    <Row>
                        <img src='./images/pixel2/Design_02.jpg' alt='' className='slideanim responsive-img col s4 pixel-img' />
                        <img src='./images/pixel2/Design_03.jpg' alt='' className='slideanim responsive-img col s4 pixel-img' />
                        <img src='./images/pixel2/Design_04.jpg' alt='' className='slideanim responsive-img col s4 pixel-img' />
                    </Row>
                    <p className='flow-text slideanim'>The Pixel 2 is the perfect smartphone for artists that work in any medium. Weather you are a photographer, musician, or painter you can find an app that will allow you to take your art to the next level.</p>
                    <Row>
                        <img src='./images/pixel2/Design_05.jpg' alt='' className='slideanim responsive-img col s6 offset-s3 pixel-img' />
                    </Row>
                </div>
            </div>)
    }

}

export default Pixel2