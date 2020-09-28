import React from "react";

class Events extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="banner"></div>{" "}
        <div className="content">
          <span className="title">Who I Am</span>
          <p>
            I am a Visual Artist and I strive above all else to keep evolving as
            a Creative. My passion for pleasing aesthetics is the motivation
            behind everything I create.
            <br />
            <br />I grew up in the mountains of Colorado, but am now lucky to
            call the beautiful vistas of Southern California my Home.
            <br />
            <br />I am always looking to create something new and beautiful in
            this world, so if you have a project or idea in mind don't hesitate
            to contact me and we can discuss the possiblity of bringing it to
            life.
            <br />
            <br />
            I am also a Graphic Designer and Web Developer by education and you
            can view my non-photography related projects at the links below.
            <br />
            <br />
            <a href="https://exumc.myportfolio.com">
              <i class="fas fa-paint-brush"></i>Graphic Design
            </a>
            <a href="https://github.com/exumc">
              <i class="fab fa-github"></i>Github
            </a>
          </p>
        </div>{" "}
      </div>
    );
  }
}

export default Events;
