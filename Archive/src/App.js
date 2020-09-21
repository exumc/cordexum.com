import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
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
    return (
        <Wrapper>
          <Main />
          <Footer />
        </Wrapper>
    );
  }
}

export default App;
