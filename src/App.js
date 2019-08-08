/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      e: false,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    this.getResumeData();
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      // eslint-disable-next-line func-names
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error(xhr, status) {
        if (status) this.setState({ e: true });
      },
    });
  }

  render() {
    const { main, resume, portfolio } = this.state.resumeData;
    return !this.state.e ? (
      <div className="App">
        <Header data={main} />
        <About data={main} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        {/* <Testimonials data={testimonials} /> */}
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
