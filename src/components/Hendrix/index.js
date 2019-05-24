import React from "react";
import "./style.css"
import { Row } from "react-materialize"
import {Link} from 'react-router-dom'

class Hendrix extends React.Component {
    render() {
        return (
            <div className='container center'>
                <div className="portfolio">
                <Link to='/portfolio/graphicdesign'><i className="fas fa-chevron-left fa-3x left pink-text"></i></Link>
                    <Row>
                        <img src='./images/hendrix/fenderLogoType.png' alt='' className='responsive-img' />
                    </Row>

                    <p className='flow-text'>The Hendrix name is iconic amongst guitarists old and young alike. Often ranked as one of the best to have ever picked up a six-string, his name has become synonymous with greatness.</p>
                    <Row>
                        <img src='./images/hendrix/LogoMark.jpg' alt='' className='slide responsive-img' />
                    </Row>
                    <p className='flow-text slideanim'>Fender guitars are known for their elegance, beautiful tone, and smooth playability, and are loved by both veteran and new players alike. The Hendrix brand is the cream of the crop amongst all Fender guitars.</p>
                    <Row>
                        <img src='./images/hendrix/Stationary.jpg' alt='' className='slideanim responsive-img' />
                    </Row>
                    <p className='flow-text slideanim'>The Hendrix brand was designed around the man himself who was bright and full of color. His uniqueness, his style, his sound are all things that Fender strives to replicate and showcase with the Hendrix signature line of products.</p>
                    <Row>
                        <img src='./images/hendrix/Hendrix-brand-guidelines.jpg' alt='' className='slideanim responsive-img' />
                    </Row>
                </div>
            </div>)
    }
}

export default Hendrix