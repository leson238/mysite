/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';

import Data from './resumeData';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: Data,
      e: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: {
        name,
        email,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        document.getElementById('contact-form').reset();
      } else if (response.data.msg === 'fail') {
        // eslint-disable-next-line no-alert
        alert('Message failed to send.');
      }
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
        <Contact data={main} handleSubmit={this.handleSubmit} />
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
