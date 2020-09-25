import React from "react";

class Events extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="title">GET IN TOUCH</div>
        <div className="content">
          <div className="left">
            <ul>
              <li>
                <div className="contact-item">
                  <a
                    href="https://www.instagram.com/champexphoto"
                    target="_blank"
                  >
                    INSTAGRAM
                  </a>
                </div>
                <div className="contact-reveal">@champexphoto</div>
              </li>
              <li>
                <a href="mailto:cord@cordexum.com" target="_blank">
                  <div className="contact-item">EMAIL</div>
                </a>
                <div className="contact-reveal">cord@cordexum.com</div>
              </li>
              <li>
                <div className="contact-item">
                  <a
                    href="https://www.twitter.com/champexphoto"
                    target="_blank"
                  >
                    TWITTER
                  </a>
                </div>
                <div className="contact-reveal">@excordo</div>
              </li>
            </ul>
          </div>

          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default Events;
