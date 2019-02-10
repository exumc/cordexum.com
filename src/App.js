import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Header from "./components/Header"
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
