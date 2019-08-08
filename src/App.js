/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Data from './resumeData';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: Data,
      e: false,
    };
  }

  render() {
    const { main, resume, portfolio } = this.state.resumeData;
    return !this.state.e ? (
      <div className="App">
        <Header data={main} />
        <About data={main} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        <Contact data={main} />
        <Footer data={main} />
      </div>
    ) : (
      <div>
        <h1> Error!!! </h1>
      </div>
    );
  }
}

export default App;
