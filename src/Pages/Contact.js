import React from "react";

class Events extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="large-title">GET IN TOUCH</div>
        <div className="content">
          <div className="left-content">
            <ul>
              <li>
                <div className="contact-item">
                  <a
                    href="https://www.instagram.com/champexphoto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM
                  </a>
                </div>
                <div className="contact-reveal">@champexphoto</div>
              </li>
              <li>
                <div className="contact-item">
                  <a
                    href="mailto:cord@cordexum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EMAIL
                  </a>
                </div>

                <div className="contact-reveal">cord@cordexum.com</div>
              </li>
            </ul>
          </div>

          <div className="right-content"></div>
        </div>
      </div>
    );
  }
}

export default Events;
