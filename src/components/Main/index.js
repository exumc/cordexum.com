import React from "react";
import "./style.css"
import { Row, Col } from 'react-materialize'

class Main extends React.Component {

    componentDidMount() {
       
    }

    render() {
        return (
            <main>
                <div className="section container container-lg valign-wrapper" id="about">
                    <div className="container">
                        <Row>
                            <p>I am a Graphic Designer with extensive expertise in Photography and Web Development. I specialize in
                              Responsive-driven Web experiences, Event photography, music-focused Videography and Beautiful Advertising. I
                      strive above all else to keep evolving as an Artist. My passion for pleasing aesthetics is the motivation behind everything I create.</p>
                        </Row>
                    </div>
                </div>

                <div className="section container-lg valign-wrapper" id="portfolio">
                    <div className="container text-center">
                        <Row className="center-align">
                            <button className="btn waves-effect waves-light pink" type="button" id="webdev-btn">Web Development </button>
                            <button className="btn waves-effect waves-light pink" type="button" id="gdesign-btn">Graphic Design</button>
                            <button className="btn waves-effect waves-light pink" type="button" id="photography-btn">Photography</button>
                        </Row>
                        <Row id="webdev" className="hidden">
                            <Row>
                                <Col s={4}>
                                    <a href="https://beardybones.github.io/Si-Cicerone/" className="link">Si Cicerone!</a>
                                    <a href="https://github.com/beardybones/Si-Cicerone" className="link right"><i className="fab fa-github "></i>Code</a>
                                    <img src="./images/1.jpg" className="materialboxed responsive-img" alt="" />
                                </Col>
                                <Col s={4}>
                                    <a href="https://up-style-clothing.herokuapp.com/" className="link">upStyle Clothing</a>
                                    <a href="https://github.com/exumc/Up_Style_Clothing" className="link right"><i className="fab fa-github "></i>Code</a>
                                    <img src="./images/5.jpg" className="materialboxed responsive-img" alt="" />
                                </Col>
                                <Col s={4}>
                                    <a href="https://keep-it-running.herokuapp.com/" className="link">Keep it Running</a>
                                    <a href="https://github.com/exumc/Cars-Such" className="link right"><i className="fab fa-github "></i>Code</a>
                                    <img src="./images/3.jpg" className="materialboxed responsive-img" alt="" />
                                </Col>
                            </Row>
                            
                        </Row>
                        <Row id="gdesign">
                            <Col s={4}>
                                <img src="./images/10.jpg" className="materialboxed responsive-img" alt="" />
                            </Col>
                            <Col s={4}>
                                <img src="./images/11.jpg" className="materialboxed responsive-img" alt="" />
                            </Col>
                            <Col s={4}>
                                <img src="./images/12.jpg" className="materialboxed responsive-img" alt="" />
                            </Col>
                        </Row>
                        <Row id="photography">
                            <Col s={4}>
                                <img src="./images/7.jpg" className="materialboxed responsive-img" alt="" />
                            </Col>
                            <Col s={4}>
                                <img src="./images/8.jpg" className="materialboxed responsive-img" alt="" />
                            </Col>
                            <Col s={4}>
                                <img src="./images/9.jpg" className="materialboxed responsive-img" alt="" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;